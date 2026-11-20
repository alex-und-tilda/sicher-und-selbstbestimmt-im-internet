(function () {
  const VOREINSTELLUNGEN = {
    gefuehrt: {
      id: "gefuehrt",
      titel: "Zeig mir jeden Schritt.",
      knopf: "Zeig mir jeden Schritt.",
      beschreibung: "Eine Figur macht es vor. Dann machst du es selbst.",
      werte: { menge: "wenig", vorbild: "immer", tippSichtbar: true }
    },
    unterstuetzt: {
      id: "unterstuetzt",
      titel: "Gib mir Hilfen dazu.",
      knopf: "Gib mir Hilfen dazu.",
      beschreibung: "Alex oder Tilda fragt dich. Hilfen kannst du öffnen.",
      werte: { menge: "mehr", vorbild: "wunsch", tippSichtbar: false }
    },
    frei: {
      id: "frei",
      titel: "Ich probiere selbst.",
      knopf: "Ich probiere selbst.",
      beschreibung: "Nur die Aufgabe im Handy. Hilfen holst du selbst.",
      werte: { menge: "mehr", vorbild: "aus", tippSichtbar: false }
    }
  };

  const state = {
    voreinstellung: "unterstuetzt",
    sprache: "leicht",       // leicht | einfach | alltag
    zugang: "beides",        // lesen | hoeren | beides (Vorlesen bereit, ohne Auto-Start)
    schrift: "normal",       // normal | gross | sehr-gross
    menge: "mehr",           // wenig | mehr
    lernform: "allein",      // allein | gemeinsam | unterstuetzung
    bewegung: "normal",      // ruhig | normal
    thema: (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light", // light | dark
    vorbild: "wunsch",       // immer | wunsch | aus
    tippSichtbar: false,
    screenreader: false,
    zweiTap: false,
    startfrageOffen: false,
    selbstEinstellen: false,
    zweiTapWahl: null,
    meinLernweg: { companion: "beide", goals: [], checked: {}, custom: [], ausprobiert: [] },
    nutzerFelder: {}
  };

  const listeners = new Set();
  let dialogEl = null;
  let lastTrigger = null;
  let dialogStep = 0;
  let moreDetailsOpen = false;

  const DS1_BEISPIEL = {
    text: {
      leicht: "Eine App will deine Fotos und dein Adress-Buch sehen. Was tippst du?",
      einfach: "Die App „Foto-Zauber“ fragt nach deinen Fotos und deinem Adressbuch.",
      alltag: "Eine Foto-App bittet beim ersten Start um Zugriff auf Fotos und Kontakte."
    },
    antworten: [
      { id: "beides_erlauben", label: "Beides erlauben" },
      { id: "abbrechen", label: "Erstmal abbrechen" },
      { id: "nur_fotos", label: "Nur Fotos erlauben" }
    ],
    lernformHinweis: {
      allein: "",
      gemeinsam: "Lest zuerst zusammen. Sprecht kurz darüber. Dann tippt eine Person.",
      unterstuetzung: "Du entscheidest. Die andere Person hilft dir dabei."
    }
  };

  const DEFAULTS = {
    sprache: "leicht",
    zugang: "beides",
    schrift: "normal",
    menge: "mehr",
    lernform: "allein",
    bewegung: "normal"
  };

  function applyRootAttributes() {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.setAttribute("data-theme", state.thema);
    root.setAttribute("data-learn-env", state.voreinstellung);
    root.setAttribute("data-learn-mode", state.lernform);
    root.setAttribute("data-access-audio", state.zugang);
    root.setAttribute("data-font-scale", state.schrift);
    if (state.schrift === "sehr-gross") root.setAttribute("data-text-size", "xl");
    else if (state.schrift === "gross") root.setAttribute("data-text-size", "lg");
    else root.removeAttribute("data-text-size");
    root.setAttribute("data-amount", state.menge);
    root.setAttribute("data-motion", state.bewegung);
    root.setAttribute("data-screenreader", String(state.screenreader));
  }

  const TAB_KEY = "AT_SLI_V1:";
  const PERSIST_KEYS = [
    "voreinstellung", "sprache", "zugang", "schrift", "menge",
    "lernform", "bewegung", "thema", "vorbild", "tippSichtbar", "screenreader", "zweiTap", "meinLernweg", "nutzerFelder"
  ];

  function saveTabState() {
    if (typeof window === "undefined") return;
    try {
      const payload = {};
      PERSIST_KEYS.forEach((k) => { payload[k] = state[k]; });
      window.name = TAB_KEY + JSON.stringify(payload);
    } catch (e) {}
  }

  function loadTabState() {
    if (typeof window === "undefined") return;
    try {
      if (typeof window.name !== "string" || !window.name.startsWith(TAB_KEY)) return;
      const parsed = JSON.parse(window.name.slice(TAB_KEY.length));
      if (!parsed || typeof parsed !== "object") return;
      if (parsed.voreinstellung && (VOREINSTELLUNGEN[parsed.voreinstellung] || parsed.voreinstellung === "eigene")) {
        state.voreinstellung = parsed.voreinstellung;
      }
      if (["leicht", "einfach", "alltag"].includes(parsed.sprache)) state.sprache = parsed.sprache;
      if (["lesen", "hoeren", "beides"].includes(parsed.zugang)) state.zugang = parsed.zugang;
      if (["normal", "gross", "sehr-gross"].includes(parsed.schrift)) state.schrift = parsed.schrift;
      if (["wenig", "mehr"].includes(parsed.menge)) state.menge = parsed.menge;
      if (["allein", "gemeinsam", "unterstuetzung"].includes(parsed.lernform)) state.lernform = parsed.lernform;
      if (["ruhig", "normal"].includes(parsed.bewegung)) state.bewegung = parsed.bewegung;
      if (["light", "dark"].includes(parsed.thema)) state.thema = parsed.thema;
      if (["immer", "wunsch", "aus"].includes(parsed.vorbild)) state.vorbild = parsed.vorbild;
      if (typeof parsed.tippSichtbar === "boolean") state.tippSichtbar = parsed.tippSichtbar;
      if (typeof parsed.screenreader === "boolean") state.screenreader = parsed.screenreader;
      if (typeof parsed.zweiTap === "boolean") state.zweiTap = parsed.zweiTap;
      if (parsed.meinLernweg && typeof parsed.meinLernweg === "object") {
        const ml = parsed.meinLernweg;
        state.meinLernweg = {
          companion: ["beide", "alex", "tilda"].includes(ml.companion) ? ml.companion : "beide",
          goals: Array.isArray(ml.goals) ? ml.goals.filter((g) => typeof g === "string").slice(0, 3) : [],
          checked: (ml.checked && typeof ml.checked === "object" && !Array.isArray(ml.checked)) ? ml.checked : {},
          custom: Array.isArray(ml.custom) ? ml.custom.filter((c) => typeof c === "string").slice(0, 12) : [],
          ausprobiert: Array.isArray(ml.ausprobiert) ? ml.ausprobiert.filter((a) => a && typeof a.id === "string" && typeof a.titel === "string").slice(0, 20) : []
        };
      }
      if (parsed.nutzerFelder && typeof parsed.nutzerFelder === "object" && !Array.isArray(parsed.nutzerFelder)) {
        const nf = {};
        Object.keys(parsed.nutzerFelder).forEach((k) => {
          if (parsed.nutzerFelder[k] === true) nf[k] = true;
        });
        state.nutzerFelder = nf;
      }
    } catch (e) {}
  }

  function notify() {
    applyRootAttributes();
    saveTabState();
    listeners.forEach((fn) => {
      try { fn(getState()); } catch (e) {}
    });
  }

  function getState() {
    return Object.assign({}, state, {
      zweiTapAktiv: state.zugang === "hoeren" || state.zweiTap
    });
  }

  function setField(key, value, keepPreset) {
    if (!(key in state)) return;
    state[key] = value;
    state.nutzerFelder = Object.assign({}, state.nutzerFelder, { [key]: true });
    if (key === "schrift" && typeof document !== "undefined" && document.documentElement.style.fontSize) {
      document.documentElement.style.fontSize = "";
    }
    if (!keepPreset && ["menge", "vorbild", "tippSichtbar"].includes(key)) {
      state.voreinstellung = "eigene";
    }
    state.zweiTapWahl = null;
    notify();
    if (dialogEl && dialogEl.open) renderDialog();
  }

  function applyPreset(presetId) {
    const p = VOREINSTELLUNGEN[presetId];
    if (!p) return;
    state.voreinstellung = p.id;
    state.menge = p.werte.menge;
    state.vorbild = p.werte.vorbild;
    state.tippSichtbar = p.werte.tippSichtbar;
    state.nutzerFelder = Object.assign({}, state.nutzerFelder, { voreinstellung: true });
    state.startfrageOffen = false;
    state.zweiTapWahl = null;
    notify();
    if (dialogEl && dialogEl.open) renderDialog();
  }

  function announce(msg) {
    const live = document.getElementById("a11y-live") || document.getElementById("sli-live");
    if (live) {
      live.textContent = "";
      requestAnimationFrame(() => { live.textContent = msg; });
    }
  }

  function stoppVorlesen() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }

  function vorlesen(text, opts) {
    if (!text) return false;
    if (state.screenreader && !(opts && opts.force)) {
      announce(text);
      return false;
    }
    if (!window.speechSynthesis || typeof SpeechSynthesisUtterance === "undefined") {
      announce("Vorlesen ist in diesem Browser nicht verfügbar. " + text);
      return false;
    }
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "de-DE";
    u.rate = 0.94;
    window.speechSynthesis.speak(u);
    return true;
  }

  function pruefeZweiTap(key, labelText) {
    const aktiv = state.zugang === "hoeren" || state.zweiTap;
    if (!aktiv) {
      state.zweiTapWahl = null;
      return true;
    }
    if (state.zweiTapWahl === key) {
      state.zweiTapWahl = null;
      return true;
    }
    state.zweiTapWahl = key;
    const msg = labelText + ". Tippe noch einmal. Dann nimmst du die Antwort.";
    vorlesen(msg);
    announce(msg);
    return false;
  }

  function ensureDialog() {
    if (dialogEl) return dialogEl;
    if (!document.getElementById("sli-live")) {
      const live = document.createElement("div");
      live.id = "sli-live";
      live.className = "sr-only";
      live.setAttribute("aria-live", "polite");
      document.body.appendChild(live);
    }
    dialogEl = document.createElement("dialog");
    dialogEl.className = "sli-dialog";
    dialogEl.setAttribute("aria-labelledby", "sli-dialog-title");
    dialogEl.addEventListener("close", () => {
      if (lastTrigger && typeof lastTrigger.focus === "function") lastTrigger.focus();
    });
    dialogEl.addEventListener("click", (e) => {
      const presetBtn = e.target.closest("[data-sli-preset]");
      if (presetBtn) { applyPreset(presetBtn.dataset.sliPreset); return; }
      const customStepBtn = e.target.closest("[data-sli-next-custom]");
      if (customStepBtn) { dialogStep = 1; renderDialog(); return; }
      const setBtn = e.target.closest("[data-sli-set]");
      if (setBtn) {
        const k = setBtn.dataset.sliKey;
        const v = setBtn.dataset.sliSet;
        setField(k, v);
        if (k === "zugang" && (v === "hoeren" || v === "beides")) {
          vorlesen(DS1_BEISPIEL.text[state.sprache] || DS1_BEISPIEL.text.leicht);
        }
        return;
      }
      const stepResetBtn = e.target.closest("[data-sli-step-reset]");
      if (stepResetBtn) {
        const k = stepResetBtn.dataset.sliStepReset;
        if (k && k in DEFAULTS) setField(k, DEFAULTS[k]);
        return;
      }
      const navBtn = e.target.closest("[data-sli-nav]");
      if (navBtn) {
        if (navBtn.dataset.sliNav === "prev" && dialogStep > 0) dialogStep -= 1;
        if (navBtn.dataset.sliNav === "next" && dialogStep < 7) dialogStep += 1;
        renderDialog();
        return;
      }
      const exReadBtn = e.target.closest("[data-sli-example-read]");
      if (exReadBtn) {
        vorlesen(DS1_BEISPIEL.text[state.sprache] || DS1_BEISPIEL.text.leicht, { force: true });
        return;
      }
      const resetAllBtn = e.target.closest("[data-sli-reset-all]");
      if (resetAllBtn && window.SoLerneIch) {
        window.SoLerneIch.reset();
        return;
      }
      const closeBtn = e.target.closest("[data-sli-close]");
      if (closeBtn) { dialogEl.close(); return; }
      const readBtn = e.target.closest("[data-sli-read]");
      if (readBtn) {
        vorlesen("So lerne ich. Du stellst immer eine Sache ein. Unten siehst du gleich: So sieht es dann aus.", { force: true });
      }
    });
    dialogEl.addEventListener("change", (e) => {
      if (e.target.matches("[data-sli-check]")) {
        setField(e.target.dataset.sliCheck, e.target.checked, true);
      }
    });
    document.body.appendChild(dialogEl);
    return dialogEl;
  }

  /* D6/K5 (v72): Ein Wert, den die Person hier noch nicht selbst gewählt hat,
     trägt unter seiner Gruppe die Zeile „Voreinstellung: …“. Der Knopf verweist
     mit aria-describedby darauf, sein Name bleibt sein sichtbarer Text. Gelesen
     wird nur state.nutzerFelder; es wird nichts zusätzlich gespeichert. */
  function voreinstellungZeile(id, label) {
    return `<p class="sli-voreinstellung" id="${id}">Voreinstellung: ${label}</p>`;
  }

  function selbstGewaehlt(key) {
    return Boolean(state.nutzerFelder && state.nutzerFelder[key] === true);
  }

  function umgebungVoreinstellung(ort) {
    const p = VOREINSTELLUNGEN[state.voreinstellung];
    if (!p || selbstGewaehlt("voreinstellung")) return null;
    return { id: `sli-vor-${ort}-voreinstellung`, label: p.knopf };
  }

  function btnRow(key, options, ort) {
    const aktiv = options.find((o) => state[key] === o.val);
    const vorId = `sli-vor-${ort || "dialog"}-${key}`;
    const istVor = Boolean(aktiv) && !selbstGewaehlt(key);
    return `<div class="sli-btn-row" role="group">${options.map((o) =>
      `<button type="button" class="sli-btn-inline" data-sli-key="${key}" data-sli-set="${o.val}" aria-pressed="${state[key] === o.val}"${istVor && o === aktiv ? ` aria-describedby="${vorId}"` : ""}>${o.label}</button>`
    ).join("")}</div>${istVor ? voreinstellungZeile(vorId, aktiv.label) : ""}`;
  }

  function renderStepBody() {
    const vorUmgebung = umgebungVoreinstellung("dialog");
    return `
      <div class="sli-group">
        <p class="sli-group-title">1. Welche Sprache willst du?</p>
        ${btnRow("sprache", [
          { val: "leicht", label: "Leichte Sprache" },
          { val: "einfach", label: "Einfache Sprache" },
          { val: "alltag", label: "Alltagssprache" }
        ])}
      </div>
      <div class="sli-group">
        <p class="sli-group-title">2. Wie möchtest du üben?</p>
        <div class="sli-preset-grid">
          ${Object.values(VOREINSTELLUNGEN).map((p) => `
            <button type="button" class="sli-btn" data-sli-preset="${p.id}" aria-pressed="${state.voreinstellung === p.id}"${vorUmgebung && state.voreinstellung === p.id ? ` aria-describedby="${vorUmgebung.id}"` : ""}>
              <span><strong>${p.knopf}</strong></span>
            </button>
          `).join("")}
        </div>
        ${vorUmgebung ? voreinstellungZeile(vorUmgebung.id, vorUmgebung.label) : ""}
      </div>
      <div class="sli-group">
        <p class="sli-group-title">3. Schriftgröße &amp; Ansicht</p>
        ${btnRow("schrift", [
          { val: "normal", label: "Normal" },
          { val: "gross", label: "Groß" },
          { val: "sehr-gross", label: "Sehr groß" }
        ])}
        <div style="margin-top:8px;">
          ${btnRow("thema", [
            { val: "light", label: "Hell" },
            { val: "dark", label: "Dunkel" }
          ])}
        </div>
      </div>
      <details class="sli-more-details"${moreDetailsOpen ? " open" : ""}>
        <summary>Weitere Einstellungen (Lesen/Hören, Menge, Mit wem, Bewegung, Vorlese-Programm)</summary>
        <div class="sli-more-body">
          <div class="sli-group">
            <p class="sli-group-title">Wie willst du lernen?</p>
            ${btnRow("zugang", [
              { val: "lesen", label: "Ich lese." },
              { val: "hoeren", label: "Ich höre zu." },
              { val: "beides", label: "Ich lese und höre." }
            ])}
          </div>
          <div class="sli-group">
            <p class="sli-group-title">Wie viel willst du auf einmal sehen?</p>
            ${btnRow("menge", [
              { val: "wenig", label: "Wenig." },
              { val: "mehr", label: "Mehr." }
            ])}
          </div>
          <div class="sli-group">
            <p class="sli-group-title">Mit wem lernst du heute?</p>
            ${btnRow("lernform", [
              { val: "allein", label: "Allein." },
              { val: "gemeinsam", label: "Gemeinsam lernen." },
              { val: "unterstuetzung", label: "Mit Unterstützung." }
            ])}
          </div>
          <div class="sli-group">
            <p class="sli-group-title">Soll sich etwas bewegen?</p>
            ${btnRow("bewegung", [
              { val: "normal", label: "Ja, ruhig." },
              { val: "ruhig", label: "Nein." }
            ])}
          </div>
          <div class="sli-mehr">
            <div class="sli-check-wrap">
              <label class="sli-check">
                <input type="checkbox" data-sli-check="screenreader" ${state.screenreader ? "checked" : ""}>
                <span>Ich nutze ein Vorlese-Programm.</span>
              </label>
              <p class="sli-check-desc">Dann liest die App nicht zusätzlich vor.</p>
            </div>
            <div class="sli-check-wrap">
              <label class="sli-check">
                <input type="checkbox" data-sli-check="zweiTap" ${state.zweiTap || state.zugang === "hoeren" ? "checked" : ""}>
                <span>Erst hören. Dann wählen.</span>
              </label>
              <p class="sli-check-desc">Du tippst einmal: Du hörst die Antwort. Du tippst noch einmal: Du nimmst die Antwort.</p>
            </div>
            <p style="margin:12px 0 0;"><button type="button" class="sli-btn-inline" data-sli-reset-all="1">Alles wieder wie am Anfang</button></p>
          </div>
        </div>
      </details>
    `;
  }

  function renderBeispiel() {
    const text = DS1_BEISPIEL.text[state.sprache] || DS1_BEISPIEL.text.leicht;
    const hinweis = DS1_BEISPIEL.lernformHinweis[state.lernform] || "";
    const antworten = state.menge === "wenig"
      ? [DS1_BEISPIEL.antworten[0], DS1_BEISPIEL.antworten[2]]
      : DS1_BEISPIEL.antworten;
    const audioAktiv = state.zugang === "hoeren" || state.zugang === "beides";
    return `
      <section class="sli-example" data-example-scale="${state.schrift}" aria-label="So sieht es dann aus">
        <div class="sli-example-head">
          <p class="sli-example-title">Beispiel</p>
          <button type="button" class="sli-btn-inline" data-sli-example-read="1">${audioAktiv ? "Beispiel anhören" : "Beispiel vorlesen"}</button>
        </div>
        <p style="margin:0 0 6px;"><strong>${text}</strong></p>
        ${hinweis ? `<p style="margin:0;color:var(--muted, #4a5866);">${hinweis}</p>` : ""}
        <div class="sli-example-choices" aria-label="Antworten im Beispiel">
          ${antworten.map((a) => `<span class="sli-example-chip">${a.label}</span>`).join("")}
        </div>
        <p class="sli-example-caption">So sieht es dann aus.</p>
      </section>
    `;
  }

  function renderDialog() {
    const dlg = ensureDialog();
    const det = dlg.querySelector(".sli-more-details");
    if (det) moreDetailsOpen = det.open;
    const akt = dlg.open && dlg.contains(document.activeElement) ? document.activeElement : null;
    let focusSel = "";
    if (akt && akt.dataset) {
      if (akt.dataset.sliPreset) focusSel = `[data-sli-preset="${akt.dataset.sliPreset}"]`;
      else if (akt.dataset.sliKey && akt.dataset.sliSet) focusSel = `[data-sli-key="${akt.dataset.sliKey}"][data-sli-set="${akt.dataset.sliSet}"]`;
      else if (akt.dataset.sliCheck) focusSel = `[data-sli-check="${akt.dataset.sliCheck}"]`;
      else if (akt.dataset.sliResetAll) focusSel = `[data-sli-reset-all]`;
    }
    const basis = (typeof window !== "undefined" && (window.location.pathname.includes("/lernhandy/") || window.location.pathname.includes("/lernkreis/") || window.location.pathname.includes("/praxis/") || window.location.pathname.includes("/material/"))) ? "../" : "";
    dlg.innerHTML = `
      <div class="sli-dialog-head">
        <div>
          <h2 id="sli-dialog-title" style="margin:0;">So lerne ich</h2>
          <p class="sli-step-meta">Du stellst alles an einem Ort ein. Unten siehst du gleich ein Beispiel.</p>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <a class="sli-btn-inline" style="text-decoration:none;display:inline-flex;align-items:center;" href="${basis}index.html#einstellungen">Alle Einstellungen</a>
          <button type="button" class="sli-btn-inline" data-sli-read="1">Vorlesen</button>
          <button type="button" class="sli-close" data-sli-close="1">Fertig &amp; Schließen</button>
        </div>
      </div>

      ${renderStepBody()}
      ${renderBeispiel()}
    `;
    const newDet = dlg.querySelector(".sli-more-details");
    if (newDet) {
      newDet.addEventListener("toggle", () => { moreDetailsOpen = newDet.open; });
    }
    if (focusSel) {
      const target = dlg.querySelector(focusSel);
      if (target && typeof target.focus === "function") target.focus({ preventScroll: true });
    }
  }

  function oeffnen(triggerEl) {
    lastTrigger = triggerEl || document.activeElement;
    dialogStep = 0;
    moreDetailsOpen = false;
    renderDialog();
    if (!dialogEl.open) dialogEl.showModal();
  }

  function renderStartfrageHtml() {
    if (!state.startfrageOffen) return "";
    const vorUmgebung = umgebungVoreinstellung("start");
    return `
      <section class="sli-start-banner" aria-label="Startfrage">
        <div class="sli-start-head">
          <h2 class="sli-start-title">Wie willst du anfangen?</h2>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button type="button" class="sli-btn-inline" data-sli-start-read="1">Vorlesen</button>
            <button type="button" class="sli-btn-inline" data-sli-skip="1">Überspringen</button>
          </div>
        </div>
        <div class="sli-preset-grid">
          ${Object.values(VOREINSTELLUNGEN).map((p) => `
            <button type="button" class="sli-btn" data-sli-start-preset="${p.id}" aria-pressed="${state.voreinstellung === p.id}"${vorUmgebung && state.voreinstellung === p.id ? ` aria-describedby="${vorUmgebung.id}"` : ""}>
              <span><strong>${p.knopf}</strong></span>
            </button>
          `).join("")}
          <button type="button" class="sli-btn" data-sli-self="1" aria-pressed="${state.selbstEinstellen}">
            <span><strong>Ich stelle selbst ein.</strong></span>
          </button>
        </div>
        ${vorUmgebung ? voreinstellungZeile(vorUmgebung.id, vorUmgebung.label) : ""}
        ${state.selbstEinstellen ? `
          <div class="sli-group">
            <p class="sli-group-title">Wie willst du lernen?</p>
            ${btnRow("zugang", [
              { val: "lesen", label: "Ich lese." },
              { val: "hoeren", label: "Ich höre zu." },
              { val: "beides", label: "Ich lese und höre." }
            ], "start")}
            <p class="sli-group-title" style="margin-top:10px;">Wie viel willst du auf einmal sehen?</p>
            ${btnRow("menge", [
              { val: "wenig", label: "Wenig." },
              { val: "mehr", label: "Mehr." }
            ], "start")}
            <p class="sli-group-title" style="margin-top:10px;">Mit wem lernst du heute?</p>
            ${btnRow("lernform", [
              { val: "allein", label: "Allein." },
              { val: "gemeinsam", label: "Gemeinsam lernen." },
              { val: "unterstuetzung", label: "Mit Unterstützung." }
            ], "start")}
          </div>
        ` : ""}
        <p style="margin:8px 0 0;">Du kannst das immer ändern.</p>
      </section>
    `;
  }

  // Tab-Einstellungen zuerst aus window.name laden (datenschutzfreundlich, ohne URL-Lecks & ohne Speicher)
  loadTabState();

  // Explizite URL-Parameter lesen (optional, z. B. für direkte Bereichs-Links)
  const params = (typeof URLSearchParams === "function" && window.location)
    ? new URLSearchParams(window.location.search || "")
    : null;
  if (params) {
    if (params.get("env") && VOREINSTELLUNGEN[params.get("env")]) applyPreset(params.get("env"));
    if (params.get("mode") && ["allein", "gemeinsam", "unterstuetzung"].includes(params.get("mode"))) state.lernform = params.get("mode");
    const rawLang = params.get("lang") || params.get("stufe");
    const normLang = rawLang === "standard" ? "alltag" : rawLang;
    if (normLang && ["leicht", "einfach", "alltag"].includes(normLang)) {
      state.sprache = normLang;
      state.nutzerFelder = Object.assign({}, state.nutzerFelder, { sprache: true });
    }
    if (params.get("theme") && ["light", "dark"].includes(params.get("theme"))) {
      state.thema = params.get("theme");
      state.nutzerFelder = Object.assign({}, state.nutzerFelder, { thema: true });
    }
    if (params.get("zugang") && ["lesen", "hoeren", "beides"].includes(params.get("zugang"))) state.zugang = params.get("zugang");
    if (params.get("schrift") && ["normal", "gross", "sehr-gross"].includes(params.get("schrift"))) {
      state.schrift = params.get("schrift");
      state.nutzerFelder = Object.assign({}, state.nutzerFelder, { schrift: true });
    }
    if (params.get("menge") && ["wenig", "mehr"].includes(params.get("menge"))) state.menge = params.get("menge");
    if (params.get("bewegung") && ["ruhig", "normal"].includes(params.get("bewegung"))) {
      state.bewegung = params.get("bewegung");
      state.nutzerFelder = Object.assign({}, state.nutzerFelder, { bewegung: true });
    }
    if (params.get("sr") === "1") state.screenreader = true;
    if (params.get("startfrage") === "1") state.startfrageOffen = true;
  }
  applyRootAttributes();
  saveTabState();

  window.SoLerneIch = {
    VOREINSTELLUNGEN,
    getState,
    setField,
    applyPreset,
    oeffnen,
    vorlesen,
    stoppVorlesen,
    pruefeZweiTap,
    renderStartfrageHtml,
    getMeinLernweg: function () {
      const ml = state.meinLernweg || {};
      return {
        companion: ml.companion || "beide",
        goals: Array.isArray(ml.goals) ? ml.goals.slice() : [],
        checked: Object.assign({}, ml.checked || {}),
        custom: Array.isArray(ml.custom) ? ml.custom.slice() : [],
        ausprobiert: Array.isArray(ml.ausprobiert) ? ml.ausprobiert.map((a) => Object.assign({}, a)) : []
      };
    },
    setMeinLernweg: function (patch) {
      if (!patch || typeof patch !== "object") return;
      state.meinLernweg = Object.assign({}, state.meinLernweg, patch);
      saveTabState();
    },
    markAusprobiert: function (id, titel, href) {
      if (!id || !titel) return;
      const list = Array.isArray(state.meinLernweg.ausprobiert) ? state.meinLernweg.ausprobiert.slice() : [];
      const cleanHref = typeof href === "string" ? href : "";
      const idx = list.findIndex((item) => item.id === id);
      const entry = { id: String(id), titel: String(titel), href: cleanHref };
      if (idx >= 0) list[idx] = entry;
      else list.unshift(entry);
      state.meinLernweg = Object.assign({}, state.meinLernweg, { ausprobiert: list.slice(0, 20) });
      saveTabState();
    },
    reset: function () {
      state.voreinstellung = "unterstuetzt";
      state.sprache = "leicht";
      state.zugang = "beides";
      state.schrift = "normal";
      state.menge = "mehr";
      state.lernform = "allein";
      state.bewegung = "normal";
      state.thema = (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
      state.vorbild = "wunsch";
      state.tippSichtbar = false;
      state.screenreader = false;
      state.zweiTap = false;
      state.zweiTapWahl = null;
      state.meinLernweg = { companion: "beide", goals: [], checked: {}, custom: [], ausprobiert: [] };
      state.nutzerFelder = {};
      if (typeof document !== "undefined" && document.documentElement.style.fontSize) {
        document.documentElement.style.fontSize = "";
      }
      if (typeof window !== "undefined" && typeof window.name === "string" && window.name.startsWith(TAB_KEY)) {
        window.name = "";
      }
      notify();
      if (dialogEl && dialogEl.open) renderDialog();
    },
    onChange: function (fn) {
      listeners.add(fn);
      return function () { listeners.delete(fn); };
    }
  };
})();
