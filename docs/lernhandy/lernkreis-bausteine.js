(function () {
  "use strict";

  const WEGE_DATEN = {
    ds1: {
      titel: "Nötig oder nicht?",
      vorhersage: null,
      wasWaereWenn: [
        {
          label: "Nicht erlauben",
          folge: {
            leicht: "Dein Foto öffnet sich trotzdem. Die Nummern von deinen Freunden bleiben bei dir.",
            einfach: "Die App öffnet dein Foto trotzdem. Die Nummern deiner Freunde bleiben bei dir.",
            standard: "Die App öffnet dein Foto zur Bearbeitung. Für diesen Zweck braucht sie deine Kontakte nicht."
          }
        },
        {
          label: "Wofür? Nachsehen",
          folge: {
            leicht: "Du siehst erst nach: Kontakte zum Freunde finden. Danach entscheidest du selbst.",
            einfach: "Du prüfst zuerst den Grund („Freunde finden“) und triffst danach deine Entscheidung.",
            standard: "Du prüfst zuerst den angegebenen Zweck und entscheidest auf dieser Grundlage."
          }
        },
        {
          label: "Erlauben",
          folge: {
            leicht: "Die App liest Kontakte sofort aus („3 Freunde gefunden“). In den Einstellungen kannst du den Zugriff wieder ausschalten.",
            einfach: "Die App darf lesen und hat es schon getan. In den Einstellungen kannst du den Zugriff wieder entziehen.",
            standard: "Die Berechtigung wird genutzt. Ein Entzug stoppt neue Zugriffe; bereits kopierte Daten löscht das nicht von selbst."
          }
        }
      ]
    },
    fb2: {
      titel: "Tilda fragt dich",
      tildaFrage: "„Ich kenne Jonas Weber nicht. Aber wir haben 2 gemeinsame Freunde. Was soll ich machen?“",
      vorhersage: null,
      wasWaereWenn: [
        {
          label: "Sieh erst ins Profil",
          folge: {
            leicht: "Konto erst 3 Tage alt, 1 Foto, keine Beiträge. Tilda nimmt nicht an – dein Rat gab ihr Zeit.",
            einfach: "Das Profil ist erst 3 Tage alt und hat kaum Inhalte. Tilda prüft erst und entscheidet dann selbst.",
            standard: "Ein Blick ins Profil zeigt ein sehr junges Konto ohne Beiträge – so entscheidet Tilda in Ruhe gegen die Annahme."
          }
        },
        {
          label: "Lehn die Anfrage ab",
          folge: {
            leicht: "Die Anfrage ist weg. Falls Tilda ihn doch kennt, kann sie ihn später selbst suchen.",
            einfach: "Die Anfrage verschwindet; falls nötig, kann Tilda später selbst nachsehen.",
            standard: "Die Anfrage wird abgelehnt. Weitere Profilinformationen blieben dabei ungesehen."
          }
        },
        {
          label: "Nimm die Anfrage an",
          folge: {
            leicht: "Jonas sieht Fotos für Freunde und fragt gleich nach einem Code. Tilda kann ihn danach wieder entfernen.",
            einfach: "Jonas sieht mehr von Tilda und bittet um einen Code. Tilda kann ihn jederzeit wieder entfernen.",
            standard: "Jonas erhält Einblick und bittet um einen Code – Tilda kann den Kontakt sofort wieder beenden."
          }
        }
      ]
    },
    wa2: {
      titel: "Link in einer Nachricht",
      vorhersage: null,
      wasWaereWenn: [
        {
          label: "Nicht tippen & selbst nachsehen",
          folge: {
            leicht: "Du tippst nicht auf den Link. Du schaust selbst beim echten Shop nach und gibst keine Daten weiter.",
            einfach: "Du öffnest den Link nicht und prüfst stattdessen selbst beim Shop oder Paketdienst.",
            standard: "Du öffnest den fremden Link nicht und prüfst den Sendungsstatus direkt über deinen eigenen Zugang."
          }
        },
        {
          label: "Link prüfen",
          folge: {
            leicht: "Die Adresse sieht komisch aus und gehört nicht zur echten Post. Gut, dass du vorher geschaut hast.",
            einfach: "An der fremden Internet-Adresse erkennst du, dass die Nachricht nicht vom echten Paketdienst stammt.",
            standard: "Die Prüfung der Adresse zeigt Abweichungen vom offiziellen Anbieter – ein klares Warnsignal."
          }
        }
      ]
    },
    be1: {
      titel: "Jemand will einen Code",
      vorhersage: null,
      wasWaereWenn: [
        {
          label: "Code behalten & auflegen",
          folge: {
            leicht: "Dein Code bleibt bei dir. Die fremde Person bekommt ihn nicht.",
            einfach: "Ohne deinen Code hat die anrufende Person keinen Zugang dazu.",
            standard: "Der Bestätigungs-Code bleibt bei dir; das Risiko eines Missbrauchs sinkt deutlich."
          }
        },
        {
          label: "Selbst nachfragen",
          folge: {
            leicht: "Du rufst selbst bei der bekannten Nummer an. So prüfst du selbst, ob das stimmt.",
            einfach: "Du prüfst über eine bekannte Nummer selbst nach, ob wirklich etwas vorliegt.",
            standard: "Durch eigenen Rückruf über eine bekannte Nummer klärst du das Anliegen unabhängig vom Anrufer."
          }
        }
      ]
    },
    ek3: {
      titel: "Etwas ist schiefgelaufen (Postfach)",
      vorhersage: null,
      wasWaereWenn: [
        {
          label: "Sachliche Nachfrage senden",
          folge: {
            leicht: "Du schreibst mit Bestellnummer und Frist. Der Shop antwortet klar, wann das Paket kommt.",
            einfach: "Mit Bestellnummer und freundlicher Frist erhältst du eine verlässliche Rückmeldung.",
            standard: "Eine strukturierte Reklamation mit Bestellnummer und Fristsetzung schafft Verbindlichkeit."
          }
        },
        {
          label: "Fremden Zahlungslink meiden",
          folge: {
            leicht: "Kommt eine komische Mail mit neuem Zahlungs-Link? Du zahlst nicht doppelt, sondern fragst im Kundenkonto nach.",
            einfach: "Auf unerwartete Zahlungsaufforderungen reagierst du nicht direkt, sondern prüfst im Shop-Konto.",
            standard: "Unerwartete Zahlungslinks werden nicht genutzt; die Klärung erfolgt über den offiziellen Shop-Kontakt."
          }
        }
      ]
    }
  };

  const REFERENZ_WEGE = new Set(["be1", "ds1", "fb2", "h2", "ek3", "ek-post1", "wa_ruhe"]);
  const GRAD_LABEL = {
    klar: "Eine klare Lage.",
    ueberlegen: "Eine Lage zum Überlegen.",
    knifflig: "Eine knifflige Lage."
  };

  function stufeKey(raw) {
    if (raw === "alltag") return "standard";
    return ["leicht", "einfach", "standard"].includes(raw) ? raw : "leicht";
  }

  function stepPhase(info) {
    if (!info) return "start";
    const art = info.art || "";
    if (art === "uebung") return "action";
    if (["merksatz", "erinnern", "transfer", "abschluss", "ergebnis"].includes(art) || info.i >= info.anzahl - 2) {
      return "reflect";
    }
    return "start";
  }

  function textInStufe(val, stufe) {
    if (!val) return "";
    if (typeof val === "string") return val;
    return val[stufe] || val.leicht || "";
  }

  function werkstattStationen(lw) {
    if (!lw || !Array.isArray(lw.schritte) || lw.schritte.length < 2) return [];
    const seen = new Set();
    const picks = [];
    const addPick = (idx, label) => {
      if (idx < 0 || idx >= lw.schritte.length || seen.has(idx)) return;
      seen.add(idx);
      picks.push({ idx, label });
    };
    addPick(0, "1. Lage ansehen");
    const vbIdx = lw.schritte.findIndex((s) => s.art === "vorbild");
    if (vbIdx > 0) addPick(vbIdx, "Alex zeigt es");
    const ueIdx = lw.schritte.findIndex((s) => s.art === "uebung");
    if (ueIdx >= 0) addPick(ueIdx, "Selbst im Handy handeln");
    const msIdx = lw.schritte.findIndex((s) => s.art === "merksatz" || s.art === "transfer");
    if (msIdx >= 0) addPick(msIdx, "Regel & Alltag");
    return picks;
  }

  window.LernkreisBausteine = {
    WEGE_DATEN,
    REFERENZ_WEGE,
    anbinden: function (opts) {
      const id = opts && opts.id;
      let lw = opts && opts.lw;
      const wurzel = opts && opts.wurzel;
      const extraDaten = (typeof window !== "undefined" && window.LERNKREIS_WEGE_DATEN) || {};
      const alleDaten = Object.assign({}, WEGE_DATEN);
      Object.keys(extraDaten).forEach((k) => {
        const mergedItem = Object.assign({}, WEGE_DATEN[k] || {}, extraDaten[k]);
        if (WEGE_DATEN[k] && Array.isArray(WEGE_DATEN[k].wasWaereWenn) && (!Array.isArray(extraDaten[k].wasWaereWenn) || !extraDaten[k].wasWaereWenn.length)) {
          mergedItem.wasWaereWenn = WEGE_DATEN[k].wasWaereWenn;
        }
        alleDaten[k] = mergedItem;
      });
      const daten = alleDaten[id] ? Object.assign({}, alleDaten[id]) : null;
      if (!daten || !wurzel || !wurzel.parentNode) return null;
      if ((!Array.isArray(daten.wasWaereWenn) || !daten.wasWaereWenn.length) && Array.isArray(daten.wege)) {
        daten.wasWaereWenn = daten.wege.map((w) => ({
          label: textInStufe(w.label, "leicht"),
          folge: w.grund || w.folgeHandy || ""
        })).filter((w) => w.label && w.folge);
      }

      let modus = opts.modus || "allein";
      let stufe = stufeKey(opts.stufe || "leicht");
      let phase = "start";
      let aktuellerSchrittInfo = lw && typeof lw.zustand === "function" ? lw.zustand() : { i: 0, art: "" };
      let vorhersageWahl = null;
      let whatIfIdx = null;
      let whatIfOffen = false;
      let vorbildOffen = false;
      let kniffligOffen = false;
      let aktLageId = opts && opts.lageId ? opts.lageId : (Array.isArray(daten.lagen) ? "jonas" : null);
      let kniffligAbgelehnt = false;

      const topBar = document.createElement("section");
      topBar.className = "lk-bar lk-bar-inline";
      topBar.setAttribute("aria-label", "Lernbegleitung");

      const bottomBar = document.createElement("section");
      bottomBar.className = "lk-footer-bar";
      bottomBar.setAttribute("aria-label", "Den anderen Weg ansehen und Nochmal üben");

      const leisteEl = wurzel.querySelector(".lernleiste");
      if (leisteEl) {
        leisteEl.insertAdjacentElement("afterend", topBar);
      } else {
        wurzel.parentNode.insertBefore(topBar, wurzel);
      }
      wurzel.parentNode.insertBefore(bottomBar, wurzel.nextSibling);

      function syncSliInLeiste() {
        const leiste = wurzel.querySelector(".lernleiste");
        if (!leiste) return;
        const altSli = leiste.querySelector("[data-lk-sli]");
        if (altSli) altSli.remove();
      }

      function modeHintHtml() {
        if (modus === "gemeinsam") {
          return `<p class="lk-hint"><strong>Gemeinsam lernen:</strong> Lest zuerst zusammen. Sprecht kurz darüber. Dann tippt eine Person.</p>`;
        }
        if (modus === "unterstuetzung") {
          const themaKey = daten.themaKey || (id === "ds1" ? "datenschutz" : id === "fb2" ? "facebook" : id === "h2" ? "hilfe" : id === "ek3" ? "einkaufen" : "betrug");
          const compMap = typeof COMPANION !== "undefined" ? COMPANION : (typeof window !== "undefined" ? window.COMPANION : null);
          const compHilfe = typeof COMPANION_HILFE !== "undefined" ? COMPANION_HILFE : (typeof window !== "undefined" ? window.COMPANION_HILFE : null);
          const comp = compMap && compMap[themaKey];
          const fragen = (comp && comp.praxis && comp.praxis.fragen) || [];
          const helfen = (comp && comp.praxis && comp.praxis.helfen) || [];
          const grundsatz = (compHilfe && compHilfe[3]) ||
            "Fragen statt vorsagen. Die Entscheidung und das Handy bleiben bei der lernenden Person. Genutzte Hilfe ist kein Fehler.";
          return `
            <p class="lk-hint"><strong>Mit Unterstützung:</strong> Du entscheidest. Die andere Person hilft dir dabei.</p>
            <details class="lk-companion-card">
              <summary>Für die Begleitung</summary>
              <div class="lk-companion-body">
                ${fragen.length ? `<p class="lk-companion-sub"><strong>Gute Fragen:</strong> ${fragen[0]}</p>` : ""}
                ${helfen.length ? `<p class="lk-companion-sub"><strong>Wenn es hakt:</strong> ${helfen[0]}</p>` : ""}
                <p class="lk-companion-rule">${grundsatz}</p>
              </div>
            </details>`;
        }
        return "";
      }

      function syncPhoneWhatIf() {
        const display = wurzel.querySelector('[data-lh="display"]');
        if (!display) return;
        const altOverlay = display.querySelector(".lk-phone-whatif");
        if (altOverlay) altOverlay.remove();
        display.classList.remove("lk-has-whatif");
        if (whatIfIdx === null || !daten.wasWaereWenn || !daten.wasWaereWenn[whatIfIdx]) return;
        const item = daten.wasWaereWenn[whatIfIdx];
        const overlay = document.createElement("div");
        overlay.className = "lk-phone-whatif";
        overlay.setAttribute("role", "region");
        overlay.setAttribute("aria-label", "Den anderen Weg ansehen");
        overlay.innerHTML = `
          <div class="lk-phone-whatif-banner">Das ist nur ein Blick. Es zählt nicht.</div>
          <div class="lk-phone-whatif-card">
            <p class="lk-phone-whatif-kicker">Den anderen Weg ansehen</p>
            <h3 class="lk-phone-whatif-title">${item.label}</h3>
            <p class="lk-phone-whatif-text">${textInStufe(item.folge, stufe)}</p>
          </div>
          <button type="button" class="haupt lk-phone-whatif-close" data-lk-whatif-close="1">Zurück zur Übung</button>
        `;
        display.classList.add("lk-has-whatif");
        display.appendChild(overlay);
      }

      function render() {
        const sli = window.SoLerneIch ? window.SoLerneIch.getState() : { voreinstellung: "unterstuetzt", menge: "mehr", zweiTapWahl: null, tippSichtbar: false, vorbild: "wunsch" };
        const env = sli.voreinstellung || "unterstuetzt";
        document.documentElement.setAttribute("data-learn-mode", modus);
        document.documentElement.setAttribute("data-learn-env", env);

        const isRef = REFERENZ_WEGE.has(id);
        const showPrediction = (phase === "start") && env !== "gefuehrt" && Boolean(daten.vorhersage) && daten.jetztEinbauen !== false;
        const frageText = daten.frage || daten.tildaFrage;
        const fragtName = daten.fragt === "alex" ? "Alex" : "Tilda";
        const showSpeech = Boolean(frageText) && (phase === "start" || phase === "action") && env !== "frei";
        const figurSlot = fragtName === "Alex" ? "alex_schaut_auf_handy" : "tilda_fragend";
        const tildaImg = window.AlexTildaBildSlots
          ? window.AlexTildaBildSlots.hole(figurSlot, "../assets/")
          : { src: "../assets/figures/alex-tilda-nachdenken.webp", alt: `${fragtName} schaut fragend` };
        const speech = showSpeech
          ? `<div class="lk-speech"><img src="${tildaImg.src}" alt="${tildaImg.alt}"><p style="margin:0;"><strong>${fragtName} fragt:</strong> ${frageText}</p></div>`
          : "";

        const antwortListe = Array.isArray(daten.vermutungen) && daten.vermutungen.length
          ? daten.vermutungen.concat(["Ich probiere es aus."])
          : (daten.antworten || []);
        const predBlock = showPrediction ? `
          <div class="lk-block">
            <p class="lk-title">${textInStufe(daten.vorhersage, stufe)}</p>
            <div class="lk-choices">
              ${antwortListe.map((a, idx) => {
                const pending = sli.zweiTapWahl === ("pred:" + idx);
                return `<button type="button" class="lk-choice-btn${pending ? " sli-two-tap-pending" : ""}" data-lk-pred="${idx}" aria-pressed="${vorhersageWahl === idx}">${a}${pending ? " (nochmal tippen)" : ""}</button>`;
              }).join("")}
            </div>
            ${vorhersageWahl !== null ? `<p class="lk-note">Gespannt? Schau jetzt im Übungs-Handy, was passiert.</p>` : ""}
          </div>
        ` : "";
        const pickText = (vorhersageWahl !== null && vorhersageWahl < 2 && antwortListe[vorhersageWahl]) ? antwortListe[vorhersageWahl] : "";
        const aufloesungBlock = (phase === "reflect" && daten.aufloesung && env !== "gefuehrt") ? `
          <div class="lk-block lk-aufloesung">
            ${pickText ? `<p class="lk-note">Du hast gedacht: „${pickText}“</p>` : ""}
            <p class="lk-note">${textInStufe(daten.aufloesung, stufe)}</p>
          </div>
        ` : "";

        // A6: Drei echt verschiedene Lernumgebungen (Hilfen kompakt nach Bedarf)
        const modusLabel = modus === "gemeinsam" ? "Gemeinsam" : modus === "unterstuetzung" ? "Mit Unterstützung" : "Allein";
        const rawVorbild = (daten.vorbild && typeof daten.vorbild === "object") ? daten.vorbild : daten.alexVorbild;
        const alexText = textInStufe(rawVorbild, stufe);
        const vorbildName = daten.machtVor === "tilda" ? "Tilda" : (daten.machtVor === "alex" ? "Alex" : (daten.machtVor || (fragtName === "Alex" ? "Tilda" : "Alex")));
        const hintHtml = modeHintHtml();
        const extraHilfen = `${hintHtml}${speech}`;
        let envBlock = "";
        if (env === "gefuehrt") {
          const gleichHinweis = (aktuellerSchrittInfo && (aktuellerSchrittInfo.art === "uebung" || aktuellerSchrittInfo.i === 0))
            ? "Gleich passiert etwas im Handy."
            : `${vorbildName} zeigt es dir. Dann machst du es selbst.`;
          const vorbildImgSrc = vorbildName === "Alex"
            ? "../assets/figures/vormachen-alex.webp"
            : "../assets/figures/vormachen-tilda.webp";
          const gfBody = `${alexText ? `<div class="lk-env-help is-open lk-vorbild-row"><img class="lk-vorbild-img" src="${vorbildImgSrc}" alt="${vorbildName} zeigt den Schritt"><p style="margin:0;"><strong>So macht es ${vorbildName}:</strong> ${alexText}</p></div>` : ""}${extraHilfen}`;
          envBlock = `
            <div class="lk-env-box is-gefuehrt">
              <p class="lk-env-lead"><strong>Zeig mir jeden Schritt.</strong> ${gleichHinweis}</p>
              ${gfBody ? `<details class="lk-ondemand" open><summary>Hilfe zur Aufgabe</summary><div class="lk-ondemand-body">${gfBody}</div></details>` : ""}
            </div>`;
        } else if (env === "unterstuetzt") {
          const hilfeOffen = vorbildOffen || sli.vorbild === "immer" || sli.tippSichtbar;
          const untBody = `${alexText ? `<p class="lk-env-help is-open"><strong>So macht es ${vorbildName}:</strong> ${alexText}</p>` : ""}${extraHilfen}`;
          envBlock = untBody
            ? `<details class="lk-ondemand"${hilfeOffen ? " open" : ""}><summary>Hilfe zur Aufgabe</summary><div class="lk-ondemand-body">${untBody}</div></details>`
            : "";
        } else if (env === "frei") {
          const stationen = werkstattStationen(lw);
          const aktIdx = aktuellerSchrittInfo && typeof aktuellerSchrittInfo.i === "number" ? aktuellerSchrittInfo.i : 0;
          const freiBody = `${alexText ? `<p class="lk-env-help is-open"><strong>So macht es ${vorbildName}:</strong> ${alexText}</p>` : ""}${hintHtml}`;
          envBlock = `
            <div class="lk-werkstatt-bar">
              ${stationen.length ? `<div class="lk-werkstatt-jumps" role="group" aria-label="Such dir eine Lage aus">
                <span class="lk-werkstatt-label">Such dir eine Lage aus:</span>
                ${stationen.map((st) => `<button type="button" class="lk-pill" data-lk-jump="${st.idx}" aria-pressed="${aktIdx === st.idx}">${st.label}</button>`).join("")}
              </div>` : ""}
              ${freiBody ? `<details class="lk-ondemand"${vorbildOffen ? " open" : ""}><summary>Soll ${vorbildName} es dir zeigen?</summary><div class="lk-ondemand-body">${freiBody}</div></details>` : ""}
            </div>`;
        }

        const begleitFigur = phase === "reflect"
          ? { src: "../assets/figures/alex-tilda-erfolg.webp", alt: "Alex und Tilda freuen sich" }
          : { src: "../assets/figures/alex-tilda-lernweg.webp", alt: "Alex und Tilda begleiten dich" };
        const companionInline = `<img class="lk-avatar" src="${begleitFigur.src}" alt="${begleitFigur.alt}" width="40" height="40">`;
        const stepId = aktuellerSchrittInfo && (aktuellerSchrittInfo.id || aktuellerSchrittInfo.schritt);
        const lageInfo = Array.isArray(daten.lagen) && aktLageId ? daten.lagen.find((x) => x.id === aktLageId) : null;
        const aktGrad = (daten.grade && stepId && daten.grade[stepId]) || (aktuellerSchrittInfo && aktuellerSchrittInfo.grad) || (lageInfo && lageInfo.grad) || daten.grad;
        const gradBadge = aktGrad && GRAD_LABEL[aktGrad]
          ? `<span class="lk-grad-tag">${GRAD_LABEL[aktGrad]}</span>`
          : "";
        const hatLagenWahl = Array.isArray(daten.lagen) && opts && typeof opts.onLageWahl === "function";
        const lageBtns = hatLagenWahl
          ? (env === "frei" ? daten.lagen : daten.lagen.filter((x) => x.id === "jonas" || x.id === "meryem" || (aktLageId === "petra" && x.id === "petra")))
          : [];
        const lageBarHtml = lageBtns.length
          ? `<div class="lk-lage-bar" role="group" aria-label="${env === "frei" ? "Such dir eine Lage aus" : "Lage wählen"}">
               <span class="lk-note">${env === "frei" ? "Such dir eine Lage aus:" : "Lage wählen:"}</span>
               ${lageBtns.map((l) => `<button type="button" class="lk-lage-btn" data-lk-lage="${l.id}" aria-pressed="${String(aktLageId === l.id)}">${l.name}<span>${GRAD_LABEL[l.grad] || ""}</span></button>`).join("")}
             </div>`
          : "";

        const leisteNow = wurzel.querySelector(".lernleiste");
        if (leisteNow && topBar.parentNode !== leisteNow.parentNode) {
          leisteNow.insertAdjacentElement("afterend", topBar);
        }
        syncSliInLeiste();

        const inlineParts = [predBlock, aufloesungBlock, envBlock].filter(Boolean).join("");
        if (inlineParts) {
          topBar.hidden = false;
          topBar.innerHTML = inlineParts;
        } else {
          topBar.hidden = true;
          topBar.innerHTML = "";
        }

        if (phase === "reflect" && window.SoLerneIch && typeof window.SoLerneIch.markAusprobiert === "function") {
          const isPostfach = typeof window !== "undefined" && window.location && window.location.pathname.indexOf("postfach") !== -1;
          const zielHref = isPostfach
            ? `index.html#postfach:${encodeURIComponent(id)}`
            : `index.html#handy:${encodeURIComponent(id)}`;
          window.SoLerneIch.markAusprobiert(id, daten.titel || id, zielHref);
        }

        // A4.4 + F4: "Den anderen Weg ansehen" + einmalige Einladung zur kniffligen Lage (nur gefuehrt/unterstuetzt)
        const kniffligEinladungHtml = (hatLagenWahl && env !== "frei" && phase === "reflect" && aktLageId !== "petra" && !kniffligAbgelehnt)
          ? `<div class="lk-knifflig-einladung" data-fable-slot="F4-knifflige-lage">
               <p class="lk-title">Willst du eine knifflige Lage probieren?</p>
               <div class="lk-compact-row">
                 <button type="button" class="lk-repeat-btn" data-lk-knifflig="ja">Ja, zeig sie mir.</button>
                 <button type="button" class="lk-repeat-btn" data-lk-knifflig="nein">Nein, für heute reicht es.</button>
               </div>
             </div>`
          : "";
        const hatWhatIf = Array.isArray(daten.wasWaereWenn) && daten.wasWaereWenn.length > 0;
        const showLageInBottom = Boolean(lageBarHtml) && (phase === "reflect" || env === "frei");
        const activeWhatIf = (hatWhatIf && whatIfIdx !== null && daten.wasWaereWenn[whatIfIdx]) ? daten.wasWaereWenn[whatIfIdx] : null;
        if (phase === "start" && env !== "frei") {
          bottomBar.hidden = true;
          bottomBar.innerHTML = "";
        } else {
          bottomBar.hidden = false;
          const whatIfSection = hatWhatIf ? `
            <p class="lk-title">Den anderen Weg ansehen (Das ist nur ein Blick. Es zählt nicht.)</p>
            <div class="lk-choices">
              ${daten.wasWaereWenn.map((item, idx) => `<button type="button" class="lk-choice-btn" data-lk-whatif="${idx}" aria-pressed="${whatIfIdx === idx}">${item.label}</button>`).join("")}
            </div>
            ${activeWhatIf ? `<p class="lk-note"><strong>Im Übungs-Handy sichtbar:</strong> ${textInStufe(activeWhatIf.folge, stufe)}</p>` : ""}
          ` : "";
          const detailsOffen = Boolean(whatIfOffen || whatIfIdx !== null);
          bottomBar.innerHTML = `
            ${kniffligEinladungHtml}
            <details class="lk-footer-details"${detailsOffen ? " open" : ""}>
              <summary>Den anderen Weg ansehen &amp; mehr</summary>
              <div class="lk-compact-body">
                ${whatIfSection}
                ${showLageInBottom ? lageBarHtml : ""}
                <div class="lk-compact-row">
                  <button type="button" class="lk-repeat-btn" data-lk-repeat="1">Nochmal üben</button>
                </div>
              </div>
            </details>
          `;
        }

        syncPhoneWhatIf();
      }

      wurzel.addEventListener("click", (e) => {
        if (e.target.closest("[data-lk-whatif-close]")) {
          whatIfIdx = null;
          render();
        }
      });

      topBar.addEventListener("click", (e) => {
        const lageBtn = e.target.closest("[data-lk-lage]");
        if (lageBtn && opts && typeof opts.onLageWahl === "function") {
          const nextLage = lageBtn.dataset.lkLage;
          aktLageId = nextLage;
          phase = "start";
          whatIfOffen = false;
          whatIfIdx = null;
          vorhersageWahl = null;
          opts.onLageWahl(nextLage);
          render();
          return;
        }
        if (e.target.closest("[data-lk-read]")) {
          if (window.SoLerneIch) {
            const text = (phase === "start" ? textInStufe(daten.vorhersage, stufe) + " " : "") + (daten.frage || daten.tildaFrage || "");
            window.SoLerneIch.vorlesen(text.trim(), { force: true });
          }
          return;
        }
        if (e.target.closest("[data-lk-sli]")) {
          if (window.SoLerneIch) window.SoLerneIch.oeffnen(e.target.closest("[data-lk-sli]"));
          return;
        }
        if (e.target.closest("[data-lk-toggle-vorbild]")) {
          vorbildOffen = !vorbildOffen;
          render();
          return;
        }
        const jumpBtn = e.target.closest("[data-lk-jump]");
        if (jumpBtn) {
          const targetIdx = Number(jumpBtn.dataset.lkJump);
          if (lw && typeof lw.springen === "function") lw.springen(targetIdx);
          return;
        }
        const modeBtn = e.target.closest("[data-lk-mode]");
        if (modeBtn) {
          modus = modeBtn.dataset.lkMode;
          if (window.SoLerneIch) window.SoLerneIch.setField("lernform", modus, true);
          render();
          return;
        }
        const predBtn = e.target.closest("[data-lk-pred]");
        if (predBtn) {
          if (window.SoLerneIch && !window.SoLerneIch.pruefeZweiTap("pred:" + predBtn.dataset.lkPred, predBtn.textContent.trim())) {
            render();
            return;
          }
          vorhersageWahl = Number(predBtn.dataset.lkPred);
          render();
        }
      });

      if (window.SoLerneIch) {
        window.SoLerneIch.onChange((sli) => {
          modus = sli.lernform;
          stufe = stufeKey(sli.sprache);
          if (lw && typeof lw.stufe === "function" && lw.zustand && lw.zustand().stufe !== stufe) {
            lw.stufe(stufe);
          }
          if (typeof window._leisteZeigen === "function") {
            window._leisteZeigen();
          }
          render();
        });
      }

      bottomBar.addEventListener("click", (e) => {
        const lageBtn = e.target.closest("[data-lk-lage]");
        if (lageBtn && opts && typeof opts.onLageWahl === "function") {
          const nextLage = lageBtn.dataset.lkLage;
          aktLageId = nextLage;
          phase = "start";
          whatIfOffen = false;
          whatIfIdx = null;
          vorhersageWahl = null;
          opts.onLageWahl(nextLage);
          render();
          return;
        }
        const knBtn = e.target.closest("[data-lk-knifflig]");
        if (knBtn) {
          if (knBtn.dataset.lkKnifflig === "ja" && opts && typeof opts.onLageWahl === "function") {
            aktLageId = "petra";
            phase = "start";
            whatIfOffen = false;
            whatIfIdx = null;
            vorhersageWahl = null;
            opts.onLageWahl("petra");
            render();
          } else {
            kniffligAbgelehnt = true;
            render();
          }
          return;
        }
        if (e.target.closest("[data-lk-open-whatif]")) {
          whatIfOffen = true;
          render();
          return;
        }
        const wiBtn = e.target.closest("[data-lk-whatif]");
        if (wiBtn) {
          const nextIdx = Number(wiBtn.dataset.lkWhatif);
          whatIfIdx = (whatIfIdx === nextIdx) ? null : nextIdx;
          whatIfOffen = true;
          render();
          return;
        }
        if (e.target.closest("[data-lk-repeat]")) {
          whatIfIdx = null;
          whatIfOffen = false;
          if (lw && typeof lw.springen === "function") lw.springen(0);
          else location.reload();
        }
      });

      render();
      return {
        setLw: function (nextLw, nextLageId) {
          lw = nextLw;
          if (nextLageId) aktLageId = nextLageId;
          aktuellerSchrittInfo = lw && typeof lw.zustand === "function" ? lw.zustand() : { i: 0, art: "" };
          phase = stepPhase(aktuellerSchrittInfo);
          render();
        },
        aktualisieren: function (info) {
          if (info && info.stufe) stufe = stufeKey(info.stufe);
          if (info) aktuellerSchrittInfo = info;
          const nextPhase = stepPhase(info);
          if (nextPhase !== phase) {
            phase = nextPhase;
            whatIfOffen = false;
            whatIfIdx = null;
          }
          render();
        }
      };
    }
  };
})();
