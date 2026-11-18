(function () {
  const DATA = window.LERNKREIS_DATEN;
  const GRAD_LABEL = {
    klar: "Eine klare Lage.",
    ueberlegen: "Eine Lage zum Überlegen.",
    knifflig: "Eine knifflige Lage."
  };
  let state = {
    exerciseId: "ds1",
    lang: "leicht",
    mode: "allein",
    theme: "light",
    step: "decide", // prediction | decide | redecide | second | result | stopped
    predictionAnswer: null,
    fb2Lage: null,
    samstagFolge: 1,
    kniffligDeclined: false,
    firstChoice: null,
    secondChoice: null,
    whatIfChoice: null,
    showVorbild: null,
    showHelp: null,
    waStep: "list", // list | chat | duration | muted
    waDuration: null,
    waWhatIf: null,
    history: []
  };

  function initialStepForExercise(id) {
    const ex = DATA.exercises[id];
    if (ex && ex.prediction && getEnv(getSli()) !== "gefuehrt") return "prediction";
    return "decide";
  }

  function getSli() {
    return window.SoLerneIch
      ? window.SoLerneIch.getState()
      : { voreinstellung: "unterstuetzt", menge: "mehr", vorbild: "wunsch", tippSichtbar: false, zweiTapWahl: null };
  }

  function getEnv(sli) {
    const v = sli && sli.voreinstellung;
    if (v === "gefuehrt" || v === "frei") return v;
    return "unterstuetzt";
  }

  function activeFb2Key(ex, env) {
    if (!ex || ex.id !== "fb2" || !ex.lagen) return null;
    if (state.fb2Lage && ex.lagen[state.fb2Lage]) {
      if (env === "frei") return state.fb2Lage;
      if (state.fb2Lage === "petra" || state.fb2Lage === "meryem" || state.fb2Lage === "jonas") return state.fb2Lage;
    }
    return env === "frei" ? "luca" : "jonas";
  }

  function resolveExercise(ex, env) {
    if (ex && ex.id === "tildas_samstag" && Array.isArray(ex.episoden)) {
      const idx = Math.max(0, Math.min(ex.episoden.length - 1, (state.samstagFolge || 1) - 1));
      const ep = ex.episoden[idx];
      return Object.assign({}, ex, ep, {
        id: ex.id,
        folge: ep.folge,
        totalFolgen: ex.episoden.length,
        wenigChoices: ep.wenig
      });
    }
    const key = activeFb2Key(ex, env);
    if (!key) return ex;
    const l = ex.lagen[key];
    return l && l.choices
      ? Object.assign({}, ex, l, { lageId: key, id: ex.id })
      : Object.assign({}, ex, { lageId: key, grad: (l && l.grad) || ex.grad });
  }

  function gradBadgeHtml(grad) {
    return grad && GRAD_LABEL[grad] ? `<span class="lk-grad-tag">${GRAD_LABEL[grad]}</span>` : "";
  }

  let isReading = false;
  let readTimer = null;
  let lastFocused = null;

  function announce(msg) {
    const live = document.getElementById("a11y-live");
    if (live) {
      live.textContent = "";
      requestAnimationFrame(() => { live.textContent = msg; });
    }
  }

  function pushStep(nextStep) {
    state.history.push({
      step: state.step,
      firstChoice: state.firstChoice,
      secondChoice: state.secondChoice,
      waStep: state.waStep,
      waDuration: state.waDuration
    });
    state.step = nextStep;
  }

  function goBack() {
    if (!state.history.length) return;
    const prev = state.history.pop();
    state.step = prev.step;
    state.firstChoice = prev.firstChoice;
    state.secondChoice = prev.secondChoice;
    state.waStep = prev.waStep;
    state.waDuration = prev.waDuration;
    state.whatIfChoice = null;
    state.waWhatIf = null;
    render();
  }

  function selectExercise(id) {
    stopReading();
    state.exerciseId = id;
    state.step = initialStepForExercise(id);
    state.predictionAnswer = null;
    state.fb2Lage = null;
    state.samstagFolge = 1;
    state.firstChoice = null;
    state.secondChoice = null;
    state.whatIfChoice = null;
    state.showVorbild = null;
    state.showHelp = null;
    state.waStep = "list";
    state.waDuration = null;
    state.waWhatIf = null;
    state.history = [];
    render();
  }

  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    const btn = document.querySelector("[data-action='toggle-theme']");
    if (btn) {
      btn.setAttribute("aria-pressed", String(theme === "dark"));
      btn.querySelector("[data-theme-label]").textContent = theme === "dark" ? "Hell" : "Dunkel";
    }
  }

  function stopReading() {
    isReading = false;
    clearTimeout(readTimer);
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    document.querySelectorAll(".is-reading").forEach((el) => el.classList.remove("is-reading"));
    const btn = document.querySelector("[data-action='toggle-read']");
    if (btn) {
      btn.setAttribute("aria-pressed", "false");
      btn.querySelector("[data-read-label]").textContent = "Vorlesen";
    }
  }

  function startReading() {
    const steps = Array.from(document.querySelectorAll("[data-read-step]"));
    if (!steps.length) return;
    isReading = true;
    const btn = document.querySelector("[data-action='toggle-read']");
    if (btn) {
      btn.setAttribute("aria-pressed", "true");
      btn.querySelector("[data-read-label]").textContent = "Vorlesen stoppen";
    }
    let idx = 0;
    function next() {
      if (!isReading || idx >= steps.length) { stopReading(); return; }
      document.querySelectorAll(".is-reading").forEach((el) => el.classList.remove("is-reading"));
      const el = steps[idx++];
      el.classList.add("is-reading");
      const text = el.textContent.replace(/\s+/g, " ").trim();
      if (window.speechSynthesis && typeof SpeechSynthesisUtterance !== "undefined") {
        const utt = new SpeechSynthesisUtterance(text);
        utt.lang = "de-DE";
        utt.rate = 0.95;
        utt.onend = () => { if (isReading) next(); };
        utt.onerror = () => { readTimer = setTimeout(next, 2200); };
        window.speechSynthesis.speak(utt);
      } else {
        readTimer = setTimeout(next, 2200);
      }
    }
    next();
  }

  function openModal(title, text) {
    const backdrop = document.getElementById("lab-modal");
    if (!backdrop) return;
    lastFocused = document.activeElement;
    document.getElementById("lab-modal-title").textContent = title;
    document.getElementById("lab-modal-text").textContent = text;
    backdrop.hidden = false;
    backdrop.querySelector(".modal-close").focus();
  }

  function closeModal() {
    const backdrop = document.getElementById("lab-modal");
    if (!backdrop || backdrop.hidden) return;
    backdrop.hidden = true;
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  const COMPANION_KEY_MAP = {
    ds1: "datenschutz",
    fb2: "facebook",
    wa_ruhe: "whatsapp",
    es_handy: "hilfe",
    be_sp1: "betrug",
    tildas_samstag: "einkaufen"
  };

  function renderCompanionHint() {
    const compMap = typeof COMPANION !== "undefined" ? COMPANION : window.COMPANION;
    const compHilfe = typeof COMPANION_HILFE !== "undefined" ? COMPANION_HILFE : window.COMPANION_HILFE;
    if (state.mode !== "unterstuetzung" || !compMap) return "";
    const topicKey = COMPANION_KEY_MAP[state.exerciseId] || "hilfe";
    const entry = compMap[topicKey] || compMap.hilfe;
    const tipp = Array.isArray(compHilfe) ? compHilfe[0] : "";
    const frage = entry && entry.praxis && Array.isArray(entry.praxis.fragen) ? entry.praxis.fragen[0] : "";
    const hilfe = entry && entry.praxis && Array.isArray(entry.praxis.helfen) ? entry.praxis.helfen[0] : "";
    if (!frage && !hilfe && !tipp) return "";
    return `
      <details class="support-companion-card">
        <summary>Für die Begleitung</summary>
        <div class="support-companion-body">
          ${frage ? `<p><strong>Mögliche Frage:</strong> ${frage}</p>` : ""}
          ${hilfe ? `<p><strong>So begleiten:</strong> ${hilfe}</p>` : ""}
          ${tipp ? `<p>${tipp}</p>` : ""}
          <p>Fragen statt vorsagen. Die Entscheidung und das Handy bleiben bei der lernenden Person. Genutzte Hilfe ist kein Fehler.</p>
          <a class="support-companion-link" href="../testfassung.html#begleiten">Alle Begleitkarten ansehen</a>
        </div>
      </details>`;
  }

  function renderModeHint() {
    const modeInfo = DATA.modes[state.mode];
    const modeLabel = state.mode === "gemeinsam"
      ? "Gemeinsam lernen"
      : state.mode === "unterstuetzung"
        ? "Mit Unterstützung"
        : "Hinweis zur Lernform";
    const modeBox = (modeInfo && modeInfo.hint)
      ? `<details class="support-companion-card lk-mode-details"><summary>${modeLabel}</summary><div class="${state.mode === "gemeinsam" ? "group-box" : "support-box"}" data-read-step>${modeInfo.hint[state.lang]}</div></details>`
      : "";
    return modeBox + renderCompanionHint();
  }

  function feedbackKopf(outcome, isWhatIf) {
    if (isWhatIf) return "Den anderen Weg ansehen";
    if (!outcome || outcome.wert === "eigene") return "";
    if (outcome.kopf) return outcome.kopf;
    const map = {
      guterWeg: "Das ist ein guter Weg.",
      gut: "Das ist ein guter Weg.",
      hilftNochNicht: "Das hilft hier noch nicht.",
      fehltEtwas: "Hier fehlt noch etwas.",
      zuViel: "Das ist mehr als nötig."
    };
    return map[outcome.wert] || "";
  }

  function renderErfolgBlock(outcome, lang, isFrei) {
    if (!outcome) return "";
    if (outcome.erfolg) {
      const tunText = outcome.erfolg.tun && (outcome.erfolg.tun[lang] || outcome.erfolg.tun.einfach || outcome.erfolg.leicht);
      const zeigtReaktion = !isFrei && outcome.wert !== "eigene";
      const rohReaktion = outcome.erfolg.reaktionGeschichte || outcome.erfolg.reaktionSonst || "";
      const reaktionText = typeof rohReaktion === "object"
        ? (rohReaktion[lang] || rohReaktion.einfach || rohReaktion.leicht || "")
        : rohReaktion;
      return `<div class="lk-erfolg-block" aria-live="polite">${tunText ? `<p class="panel-text" data-read-step>${tunText}</p>` : ""}${zeigtReaktion && reaktionText ? `<p class="panel-text lk-erfolg-reaktion" data-read-step>${reaktionText}</p>` : ""}</div>`;
    }
    const text = outcome.feedback && (outcome.feedback[lang] || outcome.feedback.einfach || outcome.feedback.leicht);
    return text ? `<div class="lk-erfolg-block" aria-live="polite"><p class="panel-text" data-read-step>${text}</p></div>` : "";
  }

  function renderStopped() {
    return {
      left: `
        <h1 data-read-step>Du hast aufgehört. Alles ist in Ordnung.</h1>
        <p class="panel-text" data-read-step>Es wird nichts gespeichert und nichts abgezogen. Du kannst jederzeit neu starten oder eine andere Übung ansehen.</p>
        <div class="action-row">
          <button type="button" class="primary-btn" data-action="restart">Nochmal üben</button>
          <a class="secondary-btn" style="text-decoration:none;display:inline-flex;align-items:center;" href="../index.html#themen">Zur Themen-Übersicht</a>
        </div>
      `,
      phoneTitle: "Übungs-Handy",
      phoneBody: `<div class="phone-card"><h3>Bereit</h3><p>Du kannst jederzeit wieder einsteigen.</p></div>`
    };
  }

  function renderLageBar(exRaw, activeKey, env) {
    if (!exRaw || exRaw.id !== "fb2" || !exRaw.lagen) return "";
    const keys = env === "frei"
      ? ["luca", "jonas", "meryem", "petra"]
      : (activeKey === "petra" ? ["jonas", "meryem", "petra"] : ["jonas", "meryem"]);
    const leadText = env === "frei" ? "Such dir eine Lage aus:" : "Lage wählen:";
    return `<div class="lk-lage-bar" role="group" aria-label="${leadText}">
      <span class="lk-lage-label">${leadText}</span>
      ${keys.map((k) => {
        const info = exRaw.lagen[k];
        if (!info) return "";
        const gLabel = (info.grad && GRAD_LABEL[info.grad]) || "";
        return `<button type="button" class="lk-lage-btn" data-fb2-lage="${k}" aria-pressed="${String(activeKey === k)}">${info.name}${gLabel ? `<span>${gLabel}</span>` : ""}</button>`;
      }).join("")}
    </div>`;
  }

  function renderKniffligEinladung(exRaw, ex, env) {
    if (!exRaw || exRaw.id !== "fb2" || env === "frei" || ex.lageId === "petra" || state.kniffligDeclined || state.whatIfChoice) {
      return "";
    }
    return `
      <div class="lk-knifflig-einladung" data-fable-slot="F4-knifflige-lage">
        <p class="panel-text"><strong>Willst du eine knifflige Lage probieren?</strong></p>
        <div class="action-row">
          <button type="button" class="secondary-btn" data-knifflig-reply="ja">Ja, zeig sie mir.</button>
          <button type="button" class="secondary-btn" data-knifflig-reply="nein">Nein, für heute reicht es.</button>
        </div>
      </div>`;
  }

  function renderInteractivePhoneUi(ex, isRedecide, outcome, choicesToShow, sli) {
    const mkBtn = (c, extraClass, customHtml) => {
      const key = "first:" + c.id;
      const pending = sli && sli.zweiTapWahl === key;
      const hint = pending ? '<span class="sli-two-tap-hint">Tippe noch einmal. Dann nimmst du die Antwort.</span>' : "";
      return `<button type="button" class="${extraClass}${pending ? " sli-two-tap-pending" : ""}" data-first-choice="${c.id}" data-choice-label="${c.label}">${customHtml || `<span>${c.label}${hint}</span>`}</button>`;
    };
    const choiceBtns = (choicesToShow || []).map((c) => mkBtn(c, "phone-action phone-sim-btn")).join("");

    if (isRedecide && outcome) {
      return `
        <div class="phone-card phone-sim-alert">
          <span class="phone-app-chip">${ex.phonePromptTitle}</span>
          <h3>${outcome.phoneTitle}</h3>
          <p>${outcome.phoneText}</p>
        </div>
        <div class="phone-btn-row">${choiceBtns}</div>
      `;
    }

    if (ex.id === "ds1") {
      return `
        <div class="phone-card phone-sim-dialog">
          <span class="phone-app-chip">App-Anfrage</span>
          <h3>${ex.phonePromptTitle}</h3>
          <p>${ex.phonePromptText}</p>
        </div>
        <div class="phone-btn-row">${choiceBtns}</div>
      `;
    }

    if (ex.id === "fb2") {
      return `
        <div class="phone-card phone-sim-social">
          <span class="phone-app-chip">${ex.phonePromptTitle}</span>
          <div class="phone-profile-row">
            <span class="phone-avatar-dot" aria-hidden="true">?</span>
            <div>
              <p>${ex.phonePromptText}</p>
            </div>
          </div>
        </div>
        <div class="phone-btn-row">${choiceBtns}</div>
      `;
    }

    if (ex.id === "be_sp1") {
      return `
        <div class="phone-card phone-sim-sms">
          <span class="phone-app-chip">${ex.phonePromptTitle}</span>
          <div class="phone-msg-bubble">
            <p>${ex.phonePromptText}</p>
          </div>
        </div>
        <div class="phone-btn-row">${choiceBtns}</div>
      `;
    }

    if (ex.id === "tildas_samstag") {
      if (ex.folge === 1) {
        const billig = (choicesToShow || []).find((c) => c.id === "billigShop");
        const kultur = (choicesToShow || []).find((c) => c.id === "kulturHaus");
        const rest = (choicesToShow || []).filter((c) => c.id !== "billigShop" && c.id !== "kulturHaus");
        return `
          <div class="phone-card phone-sim-browser">
            <span class="phone-app-chip">${ex.phonePromptTitle}</span>
            <div class="phone-shop-list">
              ${kultur ? mkBtn(kultur, "phone-shop-item phone-shop-btn phone-shop-ok", `<strong>Kultur-Haus Stadtmitte</strong><span>28 € · mit Adresse</span>`) : ""}
              ${billig ? mkBtn(billig, "phone-shop-item phone-shop-btn phone-shop-warn", `<strong>Schnäppchen-Ticket</strong><span>9 € · „Nur noch 1 Minute!“</span>`) : ""}
            </div>
          </div>
          ${rest.length ? `<div class="phone-btn-row">${rest.map((c) => mkBtn(c, "phone-action phone-sim-btn")).join("")}</div>` : ""}
        `;
      }
      if (ex.folge === 2) {
        return `
          <div class="phone-card phone-sim-chat">
            <span class="phone-app-chip">${ex.phonePromptTitle}</span>
            <div class="phone-msg-bubble">
              <p>${ex.phonePromptText}</p>
            </div>
          </div>
          <div class="phone-btn-row">${choiceBtns}</div>
        `;
      }
      return `
        <div class="phone-card phone-sim-camera">
          <span class="phone-app-chip">${ex.phonePromptTitle}</span>
          <p>${ex.phonePromptText}</p>
        </div>
        <div class="phone-btn-row">${choiceBtns}</div>
      `;
    }

    return `
      <div class="phone-card">
        <span class="phone-app-chip">${ex.phonePromptTitle}</span>
        <p>${ex.phonePromptText}</p>
      </div>
      <div class="phone-btn-row">${choiceBtns}</div>
    `;
  }

  function renderDS1orFB2(exRaw) {
    const isDS1 = exRaw.id === "ds1";
    const lang = state.lang;
    const sli = getSli();
    const env = getEnv(sli);
    const ex = resolveExercise(exRaw, env);
    const gradBadge = gradBadgeHtml(ex.grad);
    const lageBar = renderLageBar(exRaw, ex.lageId, env);
    const episodeBar = (ex.id === "tildas_samstag" && ex.folge && ex.totalFolgen)
      ? `<div class="lk-episode-bar" aria-label="Folge ${ex.folge} von ${ex.totalFolgen}">
           <span class="lk-episode-text">Tildas Samstag · Folge ${ex.folge} von ${ex.totalFolgen}</span>
           <span class="lk-episode-dots" aria-hidden="true">${[1, 2, 3, 4].map((n) => `<span class="lk-ep-dot${n <= ex.folge ? " is-active" : ""}"></span>`).join("")}</span>
         </div>`
      : "";

    if (state.step === "prediction") {
      const pred = ex.prediction[lang];
      const tildaImg = window.AlexTildaBildSlots
        ? window.AlexTildaBildSlots.hole("tilda_fragend", "../assets/")
        : { src: "../assets/figures/alex-tilda-nachdenken.webp", alt: "Tilda schaut fragend" };
      const fragtFigur = ex.fragt || (isDS1 ? "Alex" : "Tilda");
      const speechHtml = (isDS1 || ex.id === "be_sp1" || ex.id === "tildas_samstag")
        ? `<div class="speech-row" data-read-step><img class="speech-avatar" src="${tildaImg.src}" alt="${tildaImg.alt}"><p class="speech-bubble">${ex.situation[lang]}</p></div>`
        : `<div class="speech-row" data-read-step><img class="speech-avatar" src="${tildaImg.src}" alt="${tildaImg.alt}"><p class="speech-bubble"><strong>${fragtFigur} fragt:</strong> ${ex.tildaSpeech}</p></div>`;

      return {
        left: `
          ${gradBadge}
          <h1 data-read-step>${ex.title}</h1>
          ${renderModeHint()}
          ${speechHtml}
          <p class="panel-text" data-read-step><strong>${pred.question}</strong></p>
          <div class="choice-list">
            ${pred.options.map((opt) => `<button type="button" class="choice-btn" data-pred-opt="${opt}">${opt}</button>`).join("")}
          </div>
        `,
        phoneTitle: ex.phonePromptTitle,
        phoneBody: `<div class="phone-card"><h3>${ex.phonePromptTitle}</h3><p>${ex.phonePromptText}</p></div>`
      };
    }

    if (state.step === "decide" || state.step === "redecide") {
      const isGefuehrt = env === "gefuehrt";
      const isFrei = env === "frei";
      const isRedecide = state.step === "redecide";
      const outcome = isRedecide ? ex.outcomes[state.firstChoice] : null;
      let choicesToShow = isRedecide
        ? ex.choices.filter((c) => c.id !== "wofuer")
        : ex.choices;
      if (!isRedecide && sli.menge === "wenig" && Array.isArray(ex.wenigChoices)) {
        choicesToShow = choicesToShow.filter((c) => ex.wenigChoices.includes(c.id));
      }

      const vorbildFigur = ex.machtVor || (isDS1 ? "Tilda" : "Alex");
      const hatVorbild = Boolean(ex.vorbild && ex.vorbild[lang]);
      const vorbildBild = vorbildFigur === "Alex"
        ? "../assets/figures/vormachen-alex.webp"
        : "../assets/figures/vormachen-tilda.webp";
      const vorbildInner = hatVorbild
        ? `<div class="support-box vorbild-box" data-read-step>
             <div class="vorbild-row">
               <img class="vorbild-img" src="${vorbildBild}" alt="${vorbildFigur} zeigt den Schritt">
               <div><strong>So macht es ${vorbildFigur}:</strong> ${ex.vorbild[lang]}</div>
             </div>
           </div>`
        : "";
      const tippInner = ex.helpText
        ? `<div class="support-box" data-read-step><strong>Tipp:</strong> ${ex.helpText[lang]}</div>`
        : "";
      const helpOpen = isGefuehrt || Boolean(sli.tippSichtbar) || sli.vorbild === "immer";
      const onDemandHtml = (vorbildInner || tippInner)
        ? `<details class="lk-ondemand"${helpOpen ? " open" : ""}>
             <summary>Hilfe zur Aufgabe</summary>
             <div class="lk-ondemand-body">${vorbildInner}${tippInner}</div>
           </details>`
        : "";

      const tildaImgDecide = window.AlexTildaBildSlots
        ? window.AlexTildaBildSlots.hole("tilda_fragend", "../assets/")
        : { src: "../assets/figures/alex-tilda-nachdenken.webp", alt: "Tilda wartet auf deinen Rat" };
      const uebergangBox = (ex.uebergang && ex.uebergang[lang])
        ? `<p class="panel-text" data-read-step><strong>${ex.title}:</strong> ${ex.uebergang[lang]}</p>`
        : "";
      const einstiegText = (ex.einstiegNachLernumgebung && ex.einstiegNachLernumgebung[env] && ex.einstiegNachLernumgebung[env][lang]) || "";
      const speechText = (isDS1 || ex.id === "be_sp1" || ex.id === "tildas_samstag" || !ex.tildaSpeech)
        ? (einstiegText || (ex.situation && ex.situation[lang]) || "")
        : `<strong>Tilda:</strong> ${ex.tildaSpeech}`;
      const speechBlock = isFrei
        ? `<p class="panel-text lk-frei-lead" data-read-step>${speechText}</p>`
        : `<div class="speech-row" data-read-step><img class="speech-avatar" src="${tildaImgDecide.src}" alt="${tildaImgDecide.alt}"><p class="speech-bubble">${speechText}</p></div>`;
      const extraSitBlock = (!isDS1 && ex.id !== "tildas_samstag" && ((ex.lageId && ex.lageId !== "jonas") || einstiegText) && ex.situation && ex.situation[lang])
        ? `<p class="panel-text" data-read-step>${ex.situation[lang]}</p>`
        : "";

      const phoneCue = isGefuehrt ? `<p class="lk-env-cue" data-read-step>Tippe auf deinen Weg im Übungs-Handy.</p>` : "";
      const phoneHtml = phoneCue + renderInteractivePhoneUi(ex, isRedecide, outcome, choicesToShow, sli);

      const backBtn = state.history.length
        ? `<div class="action-row"><button type="button" class="secondary-btn" data-action="back">Zurück</button></div>`
        : "";

      return {
        left: `
          ${episodeBar}
          ${gradBadge}
          <h1 data-read-step>${ex.task[lang]}</h1>
          ${renderModeHint()}
          ${isRedecide ? `<div class="support-box" data-read-step>${outcome.feedback[lang]}</div>` : ""}
          ${uebergangBox}
          ${speechBlock}
          ${extraSitBlock}
          ${onDemandHtml}
          <p class="panel-text lk-phone-cue" data-read-step><strong>Wähle direkt im Übungs-Handy:</strong> Tippe dort auf deine Antwort.</p>
          ${backBtn}
        `,
        phoneTitle: isRedecide ? outcome.phoneTitle : ex.phonePromptTitle,
        phoneBody: phoneHtml
      };
    }

    if (state.step === "second") {
      const firstOut = ex.outcomes[state.firstChoice];
      const sec = ex.secondDecision;
      return {
        left: `
          ${gradBadge}
          <h1 data-read-step>${sec.task[lang]}</h1>
          ${renderModeHint()}
          <div class="support-box" data-read-step>${firstOut.feedback[lang]}</div>
          <div class="choice-list">
            ${sec.choices.map((c) => `<button type="button" class="choice-btn" data-second-choice="${c.id}">${c.label}</button>`).join("")}
          </div>
          <div class="action-row">
            <button type="button" class="secondary-btn" data-action="back">Zurück</button>
          </div>
        `,
        phoneTitle: sec.phoneTitle,
        phoneBody: `
          <div class="phone-card"><h3>${firstOut.phoneTitle}</h3><p>${firstOut.phoneText}</p></div>
          <div class="phone-card"><span class="toggle-pill">${sec.phoneSwitchLabel}</span></div>
        `
      };
    }

    // result
    const sliResult = sli;
    const isFreiResult = env === "frei";
    const activeId = state.whatIfChoice || state.firstChoice;
    const activeOutcome = state.whatIfChoice
      ? ex.outcomes[state.whatIfChoice]
      : (state.secondChoice ? ex.secondDecision.outcomes[state.secondChoice] : ex.outcomes[state.firstChoice]);

    const activeChoiceObj = ex.choices.find((c) => c.id === activeId);
    const gleichwertigeAndere = activeChoiceObj && activeChoiceObj.gleichwertig
      ? ex.choices.filter((c) => c.gleichwertig && c.id !== activeId)
      : [];
    const gleichwertigBox = gleichwertigeAndere.length
      ? `<div class="support-box" data-read-step><strong>Noch ein guter Weg:</strong> ${gleichwertigeAndere.map((c) => c.label).join(" · ")}</div>`
      : "";
    const kopfText = feedbackKopf(activeOutcome, Boolean(state.whatIfChoice));
    const erfolgHtml = renderErfolgBlock(activeOutcome, lang, isFreiResult);
    const nachDemGutenHtml = (!state.whatIfChoice && activeOutcome && activeOutcome.wert !== "eigene" && ex.nachDemGutenWeg)
      ? `<div class="support-box" data-read-step>${ex.nachDemGutenWeg[lang]}</div>`
      : "";
    const nachherListe = (ex.naechsteSchritteNachher && (ex.naechsteSchritteNachher[lang] || ex.naechsteSchritteNachher.leicht)) || null;
    const nachherBox = (!state.whatIfChoice && Array.isArray(nachherListe) && nachherListe.length)
      ? `<div class="support-box" data-read-step><strong>Was kommt danach? (Schritt für Schritt)</strong><ul style="margin:8px 0 0;padding-left:20px;">${nachherListe.map((s) => `<li>${s}</li>`).join("")}</ul></div>`
      : "";
    const folgeNextBtn = (ex.id === "tildas_samstag" && ex.folge && ex.totalFolgen && ex.folge < ex.totalFolgen)
      ? `<button type="button" class="primary-btn" data-action="next-folge">Die nächste Folge (${ex.folge + 1} von ${ex.totalFolgen})</button>`
      : "";
    const folgeEndeHinweis = (ex.id === "tildas_samstag" && ex.folge && ex.totalFolgen && ex.folge >= ex.totalFolgen)
      ? `<div class="support-box" data-read-step><strong>Das war Tildas Samstag.</strong> Du hast alle ${ex.totalFolgen} Folgen angesehen.</div>`
      : "";
    const kniffligHtml = renderKniffligEinladung(exRaw, ex, env);
    const ruleStr = ex.rule && typeof ex.rule === "object" ? (ex.rule[lang] || ex.rule.leicht || "") : (ex.rule || "");

    const phoneOutcomeHtml = `<div class="phone-card"><h3>${activeOutcome.phoneTitle}</h3><p>${activeOutcome.phoneText}</p></div>`;
    const resultPhoneBody = state.whatIfChoice
      ? `<div class="lk-phone-whatif">
           <div class="lk-phone-whatif-banner">Das ist nur ein Blick. Es zählt nicht.</div>
           ${phoneOutcomeHtml}
           <button type="button" class="phone-action lk-phone-whatif-back" data-action="clear-whatif">Zurück zur Übung</button>
         </div>`
      : phoneOutcomeHtml;

    return {
      left: `
        ${gradBadge}
        <h1 data-read-step>${kopfText || ruleStr}</h1>
        ${renderModeHint()}
        ${erfolgHtml}
        ${nachDemGutenHtml}
        ${nachherBox}
        ${gleichwertigBox}
        <div class="support-box" data-read-step><strong>Das merke ich mir:</strong> ${ruleStr.replace(/^Regel:\s*/i, "")}</div>
        ${ex.apply && ex.apply[lang] ? `<div class="support-box lk-transfer-box" data-read-step><strong>Mein Handy daneben (freiwillig):</strong> ${ex.apply[lang]}</div>` : ""}
        <details class="lk-ondemand"${state.whatIfChoice ? " open" : ""}>
          <summary>Den anderen Weg ansehen${lageBar ? " &amp; weitere Lagen" : ""}</summary>
          <div class="lk-ondemand-body">
            <div class="whatif-box">
              <p class="whatif-sub">Was wäre bei einer anderen Wahl passiert? Das ist nur ein Blick. Es zählt nicht.</p>
              <div class="whatif-pills">
                ${ex.choices.map((c) => `<button type="button" class="whatif-btn" data-whatif="${c.id}" aria-pressed="${String(state.whatIfChoice ? state.whatIfChoice === c.id : state.firstChoice === c.id)}">${c.label}</button>`).join("")}
              </div>
            </div>
            ${lageBar}
          </div>
        </details>
        ${kniffligHtml}
        ${folgeEndeHinweis}
        <div class="action-row">
          <button type="button" class="secondary-btn" data-action="back">Zurück</button>
          ${folgeNextBtn || `<button type="button" class="primary-btn" data-action="restart">Nochmal üben</button>`}
        </div>
      `,
      phoneTitle: activeOutcome.phoneTitle,
      phoneBody: resultPhoneBody
    };
  }

  function renderWaRuhe(ex) {
    const lang = state.lang;
    const waImg = window.AlexTildaBildSlots
      ? window.AlexTildaBildSlots.hole("auf_augenhoehe", "../assets/")
      : { src: "../assets/figures/alex-tilda-themen.webp", alt: "Alex und Tilda schauen gemeinsam auf das Handy" };
    if (state.step === "prediction") {
      const pred = ex.prediction[lang];
      return {
        left: `
          ${gradBadgeHtml(ex.grad)}
          <h1 data-read-step>${ex.title}</h1>
          ${renderModeHint()}
          <div class="speech-row" data-read-step><img class="speech-avatar" src="${waImg.src}" alt="${waImg.alt}"><p class="speech-bubble">${ex.discover[lang]}</p></div>
          <p class="panel-text" data-read-step><strong>${pred.question}</strong></p>
          <div class="choice-list">
            ${pred.options.map((opt) => `<button type="button" class="choice-btn" data-pred-opt="${opt}">${opt}</button>`).join("")}
          </div>
        `,
        phoneTitle: "WhatsApp · Chats",
        phoneBody: `<div class="phone-card"><h3>Freizeit-Gruppe (14 neue Nachrichten)</h3><p>„Wann treffen wir uns?“ · „Ich bringe Kuchen mit!“</p></div>`
      };
    }

    if (state.step === "decide") {
      const sli = getSli();
      const env = getEnv(sli);
      const isGefuehrt = env === "gefuehrt";
      const isFrei = env === "frei";
      const vorbildFigur = ex.machtVor || "Alex";
      const helpOpen = isGefuehrt || Boolean(sli.tippSichtbar);
      const onDemandHtml = ex.helpText
        ? `<details class="lk-ondemand"${helpOpen ? " open" : ""}><summary>${isFrei ? `Soll ${vorbildFigur} es dir zeigen?` : "Hilfe zur Aufgabe"}</summary><div class="lk-ondemand-body"><div class="support-box" data-read-step><strong>Tipp:</strong> ${ex.helpText[lang]}</div></div></details>`
        : "";

      let phoneBody = "";
      let stepHint = "";
      if (state.waStep === "list") {
        stepHint = "Tippe im Übungs-Handy auf die „Freizeit-Gruppe“.";
        phoneBody = `
          <div class="phone-card">
            <h3>Freizeit-Gruppe</h3>
            <p>14 neue Nachrichten · Ton ist an</p>
            <div class="phone-btn-row"><button type="button" class="phone-action" data-wa="open-group">Freizeit-Gruppe antippen</button></div>
          </div>`;
      } else if (state.waStep === "chat") {
        stepHint = "Wähle im Übungs-Handy „Stumm“ aus.";
        phoneBody = `
          <div class="phone-card">
            <h3>Freizeit-Gruppe · Einstellungen</h3>
            <p>Du bist Mitglied der Gruppe.</p>
            <div class="phone-btn-row"><button type="button" class="phone-action" data-wa="choose-mute">Stumm wählen</button></div>
          </div>`;
      } else if (state.waStep === "duration") {
        stepHint = "Wähle eine Dauer für die Stummschaltung.";
        phoneBody = `
          <div class="phone-card">
            <h3>Wie lange stummschalten?</h3>
            <div class="phone-btn-row">
              <button type="button" class="phone-action" data-wa-dur="8 Stunden">8 Stunden</button>
              <button type="button" class="phone-action" data-wa-dur="1 Woche">1 Woche</button>
              <button type="button" class="phone-action" data-wa-dur="Immer">Immer</button>
            </div>
          </div>`;
      }

      if (isGefuehrt) {
        phoneBody = `<p class="lk-env-cue" data-read-step>Gleich passiert etwas im Handy.</p>` + phoneBody;
      }

      const introRow = state.waStep === "list"
        ? `<div class="speech-row" data-read-step><img class="speech-avatar" src="${waImg.src}" alt="${waImg.alt}"><p class="speech-bubble">${ex.discover[lang]}</p></div>`
        : "";
      const backBtn = state.history.length
        ? `<div class="action-row"><button type="button" class="secondary-btn" data-action="back">Zurück</button></div>`
        : "";

      return {
        left: `
          ${gradBadgeHtml(ex.grad)}
          <h1 data-read-step>${ex.title}</h1>
          ${renderModeHint()}
          ${introRow}
          ${onDemandHtml}
          <p class="panel-text" data-read-step>${stepHint}</p>
          ${backBtn}
        `,
        phoneTitle: "WhatsApp · Übungs-Handy",
        phoneBody
      };
    }

    // result
    const whatIfLeave = state.waWhatIf === "verlassen";
    const whatIfActive = state.waWhatIf !== null;
    const basePhoneHtml = whatIfLeave
      ? `<div class="phone-card"><h3>Du hast die Gruppe verlassen</h3><p>Du siehst neue Nachrichten nicht mehr.</p></div>`
      : `<div class="phone-card"><span class="toggle-pill">Stumm (${state.waDuration || "8 Stunden"}) · Kein Ton</span><h3>Neue Nachricht angekommen</h3><p>„Morgen treffen wir uns um 15 Uhr!“ (Dein Handy blieb leise.)</p></div>`;
    const resultPhoneBody = whatIfActive
      ? `<div class="lk-phone-whatif">
           <div class="lk-phone-whatif-banner">Das ist nur ein Blick. Es zählt nicht.</div>
           ${basePhoneHtml}
           <button type="button" class="phone-action lk-phone-whatif-back" data-action="clear-whatif">Zurück zur Übung</button>
         </div>`
      : basePhoneHtml;

    const erfolgWaHtml = (!whatIfLeave && ex.erfolg && ex.erfolg.stumm)
      ? renderErfolgBlock({ erfolg: ex.erfolg.stumm }, lang, getEnv(getSli()) === "frei")
      : "";
    const predAuswertung = (!whatIfLeave && ex.prediction && ex.prediction[lang] && ex.prediction[lang].aufloesung)
      ? `<div class="support-box" data-read-step>${
          state.predictionAnswer && state.predictionAnswer !== "Ich probiere es aus."
            ? `<p style="margin:0 0 4px;">Du hast gedacht: „${state.predictionAnswer}“</p><p style="margin:0;">${ex.prediction[lang].aufloesung}</p>`
            : ex.prediction[lang].aufloesung
        }</div>`
      : "";
    const verlassenText = (ex.verlassenGrund && ex.verlassenGrund[lang])
      || "Wenn du die Gruppe verlässt, bekommst du gar keine Nachrichten mehr mit. Mit „Stumm“ bleibst du dabei und hast trotzdem Ruhe.";
    const merksatzWa = (ex.rule && typeof ex.rule === "object" ? (ex.rule[lang] || ex.rule.leicht) : ex.rule) || "";

    return {
      left: `
        ${gradBadgeHtml(ex.grad)}
        <h1 data-read-step>${whatIfLeave ? "Den anderen Weg ansehen" : "Ruhe – und weiter dabei!"}</h1>
        ${renderModeHint()}
        ${erfolgWaHtml}
        ${predAuswertung}
        <p class="panel-text" data-read-step>${whatIfLeave ? verlassenText : ex.understand[lang]}</p>
        <div class="support-box" data-read-step><strong>Das merke ich mir:</strong> ${merksatzWa ? merksatzWa.replace(/^Regel:\s*/i, "") + " " : ""}${ex.apply[lang]}</div>
        <details class="lk-ondemand"${whatIfActive ? " open" : ""}>
          <summary>Den anderen Weg ansehen</summary>
          <div class="lk-ondemand-body">
            <div class="whatif-box">
              <div class="whatif-pills">
                <button type="button" class="whatif-btn" data-wa-whatif="stumm" aria-pressed="${String(whatIfActive ? !whatIfLeave : true)}">Gruppe stumm (${state.waDuration || "8 Stunden"})</button>
                <button type="button" class="whatif-btn" data-wa-whatif="verlassen" aria-pressed="${String(whatIfLeave)}">Gruppe verlassen</button>
              </div>
            </div>
          </div>
        </details>
        <div class="action-row">
          <button type="button" class="secondary-btn" data-action="back">Zurück</button>
          <button type="button" class="primary-btn" data-action="restart">Nochmal üben</button>
        </div>
      `,
      phoneTitle: "WhatsApp · Freizeit-Gruppe",
      phoneBody: resultPhoneBody
    };
  }

  function renderEsHandy(ex) {
    const lang = state.lang;
    const esImg = window.AlexTildaBildSlots
      ? window.AlexTildaBildSlots.hole("ruhiger_alltag", "../assets/")
      : { src: "../assets/figures/alex-tilda-ruhig.webp", alt: "Ruhige Alltagsszene mit Alex und Tilda" };
    if (state.step === "prediction") {
      const pred = ex.prediction[lang];
      return {
        left: `
          ${gradBadgeHtml(ex.grad)}
          <h1 data-read-step>${ex.title}</h1>
          ${renderModeHint()}
          <div class="speech-row" data-read-step><img class="speech-avatar" src="${esImg.src}" alt="${esImg.alt}"><p class="speech-bubble">${ex.discover[lang]}</p></div>
          <p class="panel-text" data-read-step><strong>${pred.question}</strong></p>
          <div class="choice-list">
            ${pred.options.map((opt) => `<button type="button" class="choice-btn" data-pred-opt="${opt}">${opt}</button>`).join("")}
          </div>
        `,
        phoneTitle: "Übungs-Handy · Start",
        phoneBody: `<div class="phone-card"><h3>Ton: Mittel</h3><p>Hier kannst du Tasten in Ruhe ausprobieren.</p></div>`
      };
    }
    if (state.step === "decide") {
      const istLeiser = state.waStep === "leiser";
      return {
        left: `
          <h1 data-read-step>${istLeiser ? "Jetzt tippe im Übungs-Handy auf „Zurück“." : "Tippe im Übungs-Handy zuerst auf „Ton leiser“."}</h1>
          ${renderModeHint()}
          <details class="support-companion-card lk-mode-details"><summary>Hilfe zur Aufgabe</summary><div class="support-box" data-read-step>${ex.helpText[lang]}</div></details>
          <div class="action-row">
            <button type="button" class="secondary-btn" data-action="back">Zurück</button>
          </div>
        `,
        phoneTitle: istLeiser ? "Übungs-Handy · Ton leiser" : "Übungs-Handy · Tasten",
        phoneBody: istLeiser
          ? `<div class="phone-card"><h3>Ton ist jetzt leiser</h3><p>Du hörst keinen lauten Signalton mehr.</p><button type="button" class="phone-btn" data-es="zurueck">Zurück</button></div>`
          : `<div class="phone-card"><h3>Lautstärke</h3><p>Probiere die Tasten ruhig aus.</p><button type="button" class="phone-btn" data-es="leiser">Ton leiser</button><button type="button" class="phone-btn" style="margin-top:8px;" data-es="lauter">Ton lauter</button></div>`
      };
    }
    const merksatzEs = (ex.rule && typeof ex.rule === "object" ? (ex.rule[lang] || ex.rule.leicht) : ex.rule) || "";
    return {
      left: `
        <h1 data-read-step>${merksatzEs}</h1>
        ${renderModeHint()}
        <p class="panel-text" data-read-step>${ex.understand[lang]}</p>
        <div class="support-box" data-read-step><strong>Das merke ich mir:</strong> ${ex.apply[lang]}</div>
        <div class="action-row">
          <button type="button" class="secondary-btn" data-action="back">Zurück</button>
          <button type="button" class="primary-btn" data-action="restart">Nochmal üben</button>
        </div>
      `,
      phoneTitle: "Übungs-Handy · Start",
      phoneBody: `<div class="phone-card"><h3>Wieder auf der Startseite</h3><p>Ton: Leiser · Alles ist heil geblieben.</p></div>`
    };
  }

  function render() {
    document.documentElement.setAttribute("data-learn-mode", state.mode);
    document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang)));
    document.querySelectorAll("[data-mode]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.mode === state.mode)));
    document.querySelectorAll("[data-ex-tab]").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.exTab === state.exerciseId)));

    const startSlot = document.getElementById("startfrage-slot");
    if (startSlot && window.SoLerneIch) {
      startSlot.innerHTML = window.SoLerneIch.renderStartfrageHtml();
    }

    const ex = DATA.exercises[state.exerciseId];
    let view;
    if (state.step === "stopped") view = renderStopped();
    else if (state.exerciseId === "wa_ruhe") view = renderWaRuhe(ex);
    else if (state.exerciseId === "es_handy") view = renderEsHandy(ex);
    else view = renderDS1orFB2(ex);

    document.getElementById("stage-left").innerHTML = view.left;
    document.getElementById("phone-title").textContent = view.phoneTitle;
    document.getElementById("phone-body").innerHTML = view.phoneBody;

    const stepTitleEl = document.getElementById("lab-step-title");
    if (stepTitleEl && ex) {
      let stepLabel = "";
      if (state.step === "prediction") stepLabel = "Vermutung";
      else if (state.step === "decide" && ex.id === "tildas_samstag") stepLabel = `Folge ${state.samstagFolge || 1} von 4`;
      else if (state.step === "decide" || state.step === "second") stepLabel = "Ausprobieren";
      else if (state.step === "result") stepLabel = "Geschafft";
      stepTitleEl.textContent = stepLabel ? `${ex.title} · ${stepLabel}` : ex.title;
    }
    const bridgeEl = document.getElementById("bridge-section");
    if (bridgeEl) bridgeEl.hidden = state.step !== "result";

    const stageGrid = document.querySelector(".stage-grid");
    if (stageGrid) {
      const sliNow = getSli();
      const envNow = getEnv(sliNow);
      const phoneFirst = ((state.exerciseId === "wa_ruhe" || state.exerciseId === "es_handy") && state.step === "decide")
        || (envNow === "frei" && state.step === "decide")
        || Boolean(state.whatIfChoice || state.waWhatIf);
      if (phoneFirst) stageGrid.setAttribute("data-phone-first", "true");
      else stageGrid.removeAttribute("data-phone-first");
    }

    if (state.step === "result" && ex && window.SoLerneIch && typeof window.SoLerneIch.markAusprobiert === "function") {
      const resolved = resolveExercise(ex, getEnv(getSli()));
      window.SoLerneIch.markAusprobiert(
        ex.id,
        (resolved && resolved.title) || ex.title || ex.id,
        "lernkreis/index.html?ex=" + encodeURIComponent(ex.id)
      );
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const sliInit = window.SoLerneIch ? window.SoLerneIch.getState() : null;
    if (params.get("theme") === "dark") {
      applyTheme("dark");
      if (window.SoLerneIch) window.SoLerneIch.setField("thema", "dark", true);
    } else if (sliInit) {
      applyTheme(sliInit.thema || "light");
    }
    if (params.get("lang") && ["leicht", "einfach", "alltag"].includes(params.get("lang"))) {
      state.lang = params.get("lang");
    } else if (sliInit && ["leicht", "einfach", "alltag"].includes(sliInit.sprache)) {
      state.lang = sliInit.sprache;
    }
    if (params.get("ex") && DATA.exercises[params.get("ex")]) {
      state.exerciseId = params.get("ex");
      document.body.setAttribute("data-explicit-ex", "true");
    }
    const folgeParam = Number(params.get("folge"));
    if (folgeParam >= 1 && folgeParam <= 4) state.samstagFolge = folgeParam;
    if (params.get("mode") && DATA.modes[params.get("mode")]) {
      state.mode = params.get("mode");
    } else if (sliInit && DATA.modes[sliInit.lernform]) {
      state.mode = sliInit.lernform;
    }
    state.step = initialStepForExercise(state.exerciseId);

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.lang = btn.dataset.lang;
        if (window.SoLerneIch) window.SoLerneIch.setField("sprache", state.lang, true);
        announce(`Sprachstufe: ${btn.textContent}`);
        render();
      });
    });

    document.querySelectorAll("[data-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.mode = btn.dataset.mode;
        if (window.SoLerneIch) window.SoLerneIch.setField("lernform", state.mode, true);
        announce(`Lernweg: ${DATA.modes[state.mode].label}`);
        render();
      });
    });

    if (window.SoLerneIch) {
      window.SoLerneIch.onChange((sli) => {
        state.lang = sli.sprache;
        state.mode = sli.lernform;
        if (sli.thema && sli.thema !== state.theme) applyTheme(sli.thema);
        if (getEnv(sli) === "gefuehrt" && state.step === "prediction") state.step = "decide";
        state.showVorbild = null;
        state.showHelp = null;
        render();
      });
    }

    const sliBtn = document.querySelector("[data-action='open-sli']");
    if (sliBtn && window.SoLerneIch) {
      sliBtn.addEventListener("click", () => window.SoLerneIch.oeffnen(sliBtn));
    }
    const sfBtn = document.querySelector("[data-action='open-startfrage']");
    if (sfBtn && window.SoLerneIch) {
      sfBtn.addEventListener("click", () => window.SoLerneIch.setField("startfrageOffen", true, true));
    }

    document.querySelectorAll("[data-ex-tab]").forEach((btn) => {
      btn.addEventListener("click", () => selectExercise(btn.dataset.exTab));
    });

    const themeBtn = document.querySelector("[data-action='toggle-theme']");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        const next = state.theme === "dark" ? "light" : "dark";
        applyTheme(next);
        if (window.SoLerneIch) window.SoLerneIch.setField("thema", next, true);
      });
    }

    document.querySelector("[data-action='toggle-read']").addEventListener("click", () => {
      if (isReading) stopReading();
      else startReading();
    });

    document.querySelector("[data-action='open-help']").addEventListener("click", () => {
      const ex = DATA.exercises[state.exerciseId];
      openModal("Hilfe zur Aufgabe", ex.helpText[state.lang]);
    });

    document.body.addEventListener("click", (e) => {
      const t = e.target.closest("button");
      if (!t) return;
      const sliNow = getSli();
      const ex = resolveExercise(DATA.exercises[state.exerciseId], getEnv(sliNow));

      if (t.dataset.fb2Lage) {
        state.fb2Lage = t.dataset.fb2Lage;
        state.step = "decide";
        state.firstChoice = null;
        state.secondChoice = null;
        state.whatIfChoice = null;
        state.history = [];
        render();
      } else if (t.dataset.kniffligReply) {
        if (t.dataset.kniffligReply === "ja") {
          state.fb2Lage = "petra";
          state.step = "decide";
          state.firstChoice = null;
          state.secondChoice = null;
          state.whatIfChoice = null;
          state.history = [];
        } else {
          state.kniffligDeclined = true;
          announce("Alles klar. Für heute reicht es.");
        }
        render();
      } else if (t.dataset.sliSkip) {
        if (window.SoLerneIch) window.SoLerneIch.setField("startfrageOffen", false, true);
      } else if (t.dataset.sliStartPreset) {
        if (window.SoLerneIch) window.SoLerneIch.applyPreset(t.dataset.sliStartPreset);
      } else if (t.dataset.sliSelf) {
        if (window.SoLerneIch) window.SoLerneIch.setField("selbstEinstellen", !window.SoLerneIch.getState().selbstEinstellen, true);
      } else if (t.dataset.sliSet) {
        if (window.SoLerneIch) window.SoLerneIch.setField(t.dataset.sliKey, t.dataset.sliSet);
      } else if (t.dataset.sliStartRead) {
        if (window.SoLerneIch) window.SoLerneIch.vorlesen("Wie willst du anfangen? Zeig mir jeden Schritt. Gib mir Hilfen dazu. Ich probiere selbst. Oder: Ich stelle selbst ein. Du kannst das immer ändern.", { force: true });
      } else if (t.dataset.predOpt) {
        state.predictionAnswer = t.dataset.predOpt;
        pushStep("decide");
        render();
      } else if (t.dataset.firstChoice) {
        if (window.SoLerneIch && !window.SoLerneIch.pruefeZweiTap("first:" + t.dataset.firstChoice, t.dataset.choiceLabel || t.textContent.trim())) {
          render();
          return;
        }
        state.firstChoice = t.dataset.firstChoice;
        const out = ex.outcomes[state.firstChoice];
        if (out.nextStep === "redecide") pushStep("redecide");
        else if (out.nextStep === "second") pushStep("second");
        else pushStep("result");
        render();
      } else if (t.dataset.secondChoice) {
        state.secondChoice = t.dataset.secondChoice;
        pushStep("result");
        render();
      } else if (t.dataset.whatif) {
        state.whatIfChoice = t.dataset.whatif;
        render();
      } else if (t.dataset.wa === "open-group") {
        pushStep("decide");
        state.waStep = "chat";
        render();
      } else if (t.dataset.wa === "choose-mute") {
        pushStep("decide");
        state.waStep = "duration";
        render();
      } else if (t.dataset.waDur) {
        state.waDuration = t.dataset.waDur;
        pushStep("result");
        render();
      } else if (t.dataset.waWhatif) {
        state.waWhatIf = t.dataset.waWhatif;
        render();
      } else if (t.dataset.es === "leiser") {
        pushStep("decide");
        state.waStep = "leiser";
        render();
      } else if (t.dataset.es === "lauter") {
        announce("Ton lauter angetippt. Probiere jetzt Ton leiser.");
      } else if (t.dataset.es === "zurueck") {
        pushStep("result");
        render();
      } else if (t.dataset.action === "toggle-vorbild") {
        const sliNow = getSli();
        const envNow = getEnv(sliNow);
        const vorbildDefaultNow = sliNow.vorbild === "immer" || envNow === "gefuehrt";
        const currentlyShown = state.showVorbild === null ? vorbildDefaultNow : state.showVorbild;
        state.showVorbild = !currentlyShown;
        render();
      } else if (t.dataset.action === "toggle-ex-help") {
        const sliNow = getSli();
        const envNow = getEnv(sliNow);
        const helpDefaultNow = envNow === "gefuehrt" || Boolean(sliNow.tippSichtbar);
        const currentlyHelpShown = state.showHelp === null ? helpDefaultNow : state.showHelp;
        state.showHelp = !currentlyHelpShown;
        render();
      } else if (t.dataset.action === "clear-whatif") {
        state.whatIfChoice = null;
        state.waWhatIf = null;
        announce("Zurück zur Übung.");
        render();
      } else if (t.dataset.action === "back") {
        goBack();
      } else if (t.dataset.action === "stop-ex") {
        pushStep("stopped");
        render();
      } else if (t.dataset.action === "next-folge") {
        state.samstagFolge = Math.min(4, (state.samstagFolge || 1) + 1);
        state.step = "decide";
        state.firstChoice = null;
        state.secondChoice = null;
        state.whatIfChoice = null;
        state.showVorbild = null;
        state.showHelp = null;
        state.history = [];
        render();
      } else if (t.dataset.action === "restart") {
        selectExercise(state.exerciseId);
      } else if (t.dataset.action === "open-sli-from-help") {
        closeModal();
        if (window.SoLerneIch && typeof window.SoLerneIch.oeffnen === "function") {
          window.SoLerneIch.oeffnen(document.querySelector("[data-action='open-help']") || t);
        }
      } else if (t.classList.contains("modal-close")) {
        closeModal();
      }
    });

    document.getElementById("lab-modal").addEventListener("click", (e) => {
      if (e.target.id === "lab-modal") closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });

    render();
  });
})();
