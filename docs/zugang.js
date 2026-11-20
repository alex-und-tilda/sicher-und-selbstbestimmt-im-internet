if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

(function () {
  const AREA_CTAS = {
    lernen: "Themen & Übungen öffnen",
    gemeinsam: "Workshops öffnen",
    begleiter: "Schulung & Übung öffnen",
    begleiten: "Kompass & Karten öffnen"
  };

  const FABLE_TEXT_SLOTS = {
    leicht: {
      growthLine: "Eine Plattform, die mit Menschen wächst.",
      heroTitle: "Lernen mit Alex und Tilda. In deinem Tempo.",
      heroLead: "Hier geht es um das Handy und das Internet. Du wählst selbst: Was willst du tun?",
      equalityNote: "Alle 4 Bereiche sind gleich wichtig. Alle Bereiche sind für alle Menschen. Du fängst an, wo du willst.",
      mitmachenTitle: "Alex und Tilda wächst mit deinen Ideen.",
      mitmachenLead: "Selbst entscheiden. Gemeinsam lernen. Mitgestalten.",
      mitmachenText: "Menschen mit Behinderung und Digital-Begleiterinnen und Digital-Begleiter haben diese Plattform mitentwickelt. Alle können mitmachen, ausprobieren und Ideen teilen.",
      betaText: "Alex & Tilda – Eine Plattform, die mit Menschen wächst. Informationen zu Entwicklung und Verantwortung stehen im Impressum und unter „Über Alex & Tilda“.",
      areas: {
        lernen: {
          title: "Lernen und ausprobieren",
          desc: "Du übst in deinem Tempo. Im Übungs-Handy entscheidest du. Dann siehst du: Das passiert danach.",
          cta: AREA_CTAS.lernen,
          previewPoints: [
            "Es geht um deinen Alltag. Zum Beispiel: WhatsApp, Videos und Einkaufen.",
            "Du prüfst Nachrichten und E-Mails.",
            "Alle Nachrichten sind erfunden. Du hast Zeit."
          ]
        },
        gemeinsam: {
          title: "Gemeinsam lernen",
          desc: "Ihr lernt in einer Gruppe. Ihr sprecht über eure Erfahrungen.",
          cta: AREA_CTAS.gemeinsam,
          previewPoints: [
            "Es gibt fertige Workshops.",
            "Es gibt Karten und Blätter zum Drucken.",
            "Ihr probiert es am eigenen Handy aus."
          ]
        },
        begleiter: {
          title: "Digital-Begleiter*innen im Unterstützer*innen-System",
          desc: "Du willst anderen mit dem Handy helfen? Hier lernst du das.",
          cta: AREA_CTAS.begleiter,
          previewPoints: [
            "Es ist eine Schulung in 18 Teilen.",
            "Du lernst: gut fragen und gut zuhören.",
            "Deine eigene Erfahrung zählt."
          ]
        },
        begleiten: {
          title: "Lernen begleiten",
          desc: "Du unterstützt eine Person beim Lernen? Hier findest du Tipps.",
          cta: AREA_CTAS.begleiten,
          previewPoints: [
            "Es gibt Tipps zu allen 12 Themen.",
            "Die Person entscheidet selbst.",
            "Hilfe annehmen ist in Ordnung."
          ]
        }
      }
    },
    einfach: {
      growthLine: "Alex & Tilda – Eine Plattform, die mit Menschen wächst.",
      heroTitle: "Lernen mit Alex und Tilda – in deinem Tempo.",
      heroLead: "Hier geht es um das Handy und das Internet. Wähle aus, was du tun möchtest.",
      equalityNote: "Alle vier Bereiche sind gleich wichtig und stehen allen Menschen offen. Du bestimmst selbst, wo du anfängst.",
      mitmachenTitle: "Alex und Tilda wächst mit deinen Ideen.",
      mitmachenLead: "Selbst entscheiden. Gemeinsam lernen. Mitgestalten.",
      mitmachenText: "Diese Plattform ist gemeinsam mit Menschen mit Behinderung und Digital-Begleiter*innen entstanden. Alle sind eingeladen, Neues auszuprobieren und mitzugestalten.",
      betaText: "Alex & Tilda – Eine Plattform, die mit Menschen wächst. Informationen zu Entwicklung und Verantwortung stehen im Impressum und unter „Über Alex & Tilda“.",
      areas: {
        lernen: {
          title: "Lernen und ausprobieren",
          desc: "Du übst in deinem Tempo. Im Übungs-Handy entscheidest du selbst und siehst, was danach passiert.",
          cta: AREA_CTAS.lernen,
          previewPoints: [
            "Lagen aus dem Alltag: WhatsApp, Videos, Einkaufen",
            "Nachrichten und E-Mails prüfen",
            "Alle Nachrichten sind erfunden, und du hast so viel Zeit, wie du möchtest"
          ]
        },
        gemeinsam: {
          title: "Gemeinsam lernen",
          desc: "Ihr lernt in einer Gruppe und sprecht über eure Erfahrungen.",
          cta: AREA_CTAS.gemeinsam,
          previewPoints: [
            "Fertige Workshops für Gruppen",
            "Karten und Arbeitsblätter zum Ausdrucken",
            "Gemeinsam am eigenen Handy ausprobieren"
          ]
        },
        begleiter: {
          title: "Digital-Begleiter*innen im Unterstützer*innen-System",
          desc: "Du möchtest andere Menschen im Umgang mit dem Handy begleiten? In dieser Schulung lernst du, wie das geht.",
          cta: AREA_CTAS.begleiter,
          previewPoints: [
            "Schulung mit 18 Einheiten",
            "Gut fragen und zuhören, statt Lösungen vorzugeben",
            "Deine eigene Erfahrung ist dabei wichtig"
          ]
        },
        begleiten: {
          title: "Lernen begleiten",
          desc: "Du unterstützt jemanden beim Lernen? Hier findest du Tipps und Material.",
          cta: AREA_CTAS.begleiten,
          previewPoints: [
            "Hinweise zu allen zwölf Themen",
            "Die lernende Person entscheidet selbst",
            "Hilfe anzunehmen ist in Ordnung und gehört zum Lernen"
          ]
        }
      }
    },
    alltag: {
      growthLine: "Alex & Tilda – Eine Plattform, die mit Menschen wächst.",
      heroTitle: "Lernen mit Alex und Tilda – im eigenen Tempo.",
      heroLead: "Hier geht es um den selbstbestimmten Umgang mit Handy und Internet. Wähle, was du tun möchtest.",
      equalityNote: "Alle vier Bereiche sind gleichwertig und stehen allen Menschen offen. Du entscheidest, wo du beginnst.",
      mitmachenTitle: "Alex und Tilda wächst mit deinen Ideen.",
      mitmachenLead: "Selbst entscheiden. Gemeinsam lernen. Mitgestalten.",
      mitmachenText: "Alex & Tilda wurde gemeinsam mit Menschen mit Behinderung und Digital-Begleiter*innen entwickelt. Alle Interessierten sind eingeladen, die Angebote auszuprobieren und die Plattform mitzugestalten.",
      betaText: "Alex & Tilda – Eine Plattform, die mit Menschen wächst. Informationen zu Entwicklung und Verantwortung stehen im Impressum und unter „Über Alex & Tilda“.",
      areas: {
        lernen: {
          title: "Lernen und ausprobieren",
          desc: "Du übst in deinem eigenen Tempo. Im Übungs-Handy triffst du Entscheidungen und siehst, was daraus folgt.",
          cta: AREA_CTAS.lernen,
          previewPoints: [
            "Situationen aus dem Alltag: WhatsApp, Videos, Einkaufen",
            "Nachrichten und E-Mails einschätzen",
            "Alle Nachrichten sind erfunden; es gibt keine Zeitvorgabe"
          ]
        },
        gemeinsam: {
          title: "Gemeinsam lernen",
          desc: "Ihr lernt in einer Gruppe und tauscht eure Erfahrungen aus.",
          cta: AREA_CTAS.gemeinsam,
          previewPoints: [
            "Ausgearbeitete Workshops für Gruppen",
            "Karten und Arbeitsblätter zum Ausdrucken",
            "Gemeinsames Ausprobieren am eigenen Gerät"
          ]
        },
        begleiter: {
          title: "Digital-Begleiter*innen im Unterstützer*innen-System",
          desc: "Du möchtest andere Menschen im digitalen Alltag begleiten? Diese Schulung bereitet dich darauf vor.",
          cta: AREA_CTAS.begleiter,
          previewPoints: [
            "Schulung mit 18 Einheiten",
            "Fragen und zuhören, statt Lösungen vorzugeben",
            "Die eigene Erfahrung ist Teil der Schulung"
          ]
        },
        begleiten: {
          title: "Lernen begleiten",
          desc: "Du unterstützt jemanden beim Lernen? Hier findest du Hinweise und Material.",
          cta: AREA_CTAS.begleiten,
          previewPoints: [
            "Hinweise zu allen zwölf Themen",
            "Die Entscheidungen bleiben bei der lernenden Person",
            "Unterstützung anzunehmen gehört zum Lernen"
          ]
        }
      }
    }
  };

  let currentLang = "leicht";
  let currentTextSize = "normal";
  let lastFocused = null;
  let isReading = false;
  let readTimer = null;

  function announce(msg) {
    const live = document.getElementById("a11y-live");
    if (live) {
      live.textContent = "";
      requestAnimationFrame(() => {
        live.textContent = msg;
      });
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const themeBtn = document.querySelector("[data-action='toggle-theme']");
    if (themeBtn) {
      const isDark = theme === "dark";
      themeBtn.setAttribute("aria-pressed", String(isDark));
      const label = themeBtn.querySelector("[data-theme-label]");
      if (label) label.textContent = isDark ? "Hell" : "Dunkel";
    }
  }

  function applyLang(lang, shouldAnnounce) {
    if (!FABLE_TEXT_SLOTS[lang]) return;
    currentLang = lang;
    const data = FABLE_TEXT_SLOTS[lang];

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });

    const bindings = {
      growthLine: data.growthLine,
      heroTitle: data.heroTitle,
      heroLead: data.heroLead,
      equalityNote: data.equalityNote,
      mitmachenTitle: data.mitmachenTitle,
      mitmachenLead: data.mitmachenLead,
      mitmachenText: data.mitmachenText,
      betaText: data.betaText
    };
    Object.keys(bindings).forEach((key) => {
      const el = document.querySelector(`[data-bind='${key}']`);
      if (el) el.textContent = bindings[key];
    });

    Object.keys(data.areas).forEach((key) => {
      const item = data.areas[key];
      const titleEl = document.querySelector(`[data-area-title='${key}']`);
      const descEl = document.querySelector(`[data-area-desc='${key}']`);
      const ctaEl = document.querySelector(`[data-area-cta='${key}']`);
      if (titleEl) titleEl.textContent = item.title;
      if (descEl) descEl.textContent = item.desc;
      if (ctaEl) ctaEl.textContent = item.cta;
    });

    if (shouldAnnounce) {
      const names = { leicht: "Leichte Sprache", einfach: "Einfache Sprache", alltag: "Alltagssprache" };
      announce(`Sprachstufe gewechselt auf ${names[lang]}.`);
    }
    if (window.SoLerneIch && window.SoLerneIch.getState().sprache !== lang) {
      window.SoLerneIch.setField("sprache", lang);
    }
  }

  function syncTextUi(next) {
    currentTextSize = next;
    if (next === "normal") {
      document.documentElement.removeAttribute("data-text-size");
    } else {
      document.documentElement.setAttribute("data-text-size", next);
    }
    const btn = document.querySelector("[data-action='cycle-text']");
    if (btn) {
      const labels = { normal: "Text: Normal", lg: "Text: Groß", xl: "Text: Sehr groß" };
      const span = btn.querySelector("[data-text-label]");
      if (span) span.textContent = labels[next];
      btn.setAttribute("aria-pressed", String(next !== "normal"));
    }
  }

  function cycleTextSize() {
    const order = ["normal", "lg", "xl"];
    const next = order[(order.indexOf(currentTextSize) + 1) % order.length];
    syncTextUi(next);
    const sliSchriftMap = { normal: "normal", lg: "gross", xl: "sehr-gross" };
    if (window.SoLerneIch) {
      window.SoLerneIch.setField("schrift", sliSchriftMap[next] || "normal", true);
    }
    const labels = { normal: "Text: Normal", lg: "Text: Groß", xl: "Text: Sehr groß" };
    announce(labels[next]);
  }

  function stopReading() {
    isReading = false;
    clearTimeout(readTimer);
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    document.querySelectorAll(".is-reading").forEach((el) => el.classList.remove("is-reading"));
    const readBtn = document.querySelector("[data-action='toggle-read']");
    if (readBtn) {
      readBtn.setAttribute("aria-pressed", "false");
      const label = readBtn.querySelector("[data-read-label]");
      if (label) label.textContent = "Vorlesen";
    }
  }

  function startReading() {
    const steps = Array.from(document.querySelectorAll("[data-read-step]"));
    if (!steps.length) return;
    isReading = true;
    const readBtn = document.querySelector("[data-action='toggle-read']");
    if (readBtn) {
      readBtn.setAttribute("aria-pressed", "true");
      const label = readBtn.querySelector("[data-read-label]");
      if (label) label.textContent = "Vorlesen stoppen";
    }

    let idx = 0;
    function stepNext() {
      if (!isReading || idx >= steps.length) {
        stopReading();
        return;
      }
      document.querySelectorAll(".is-reading").forEach((el) => el.classList.remove("is-reading"));
      const el = steps[idx];
      el.classList.add("is-reading");
      const text = el.textContent.replace(/\s+/g, " ").trim();
      idx += 1;

      if (window.speechSynthesis && typeof SpeechSynthesisUtterance !== "undefined") {
        const utt = new SpeechSynthesisUtterance(text);
        utt.lang = "de-DE";
        utt.rate = 0.95;
        utt.onend = () => { if (isReading) stepNext(); };
        utt.onerror = () => { readTimer = setTimeout(stepNext, 2200); };
        window.speechSynthesis.speak(utt);
      } else {
        readTimer = setTimeout(stepNext, 2200);
      }
    }
    stepNext();
  }

  function openModal(title, desc, points, showFigure) {
    const backdrop = document.getElementById("preview-modal");
    if (!backdrop) return;
    lastFocused = document.activeElement;
    backdrop.querySelector("#modal-title").textContent = title;
    backdrop.querySelector("#modal-desc").textContent = desc;
    const list = backdrop.querySelector("#modal-list");
    list.innerHTML = "";
    points.forEach((pt) => {
      const li = document.createElement("li");
      li.textContent = pt;
      list.appendChild(li);
    });
    const actionsEl = backdrop.querySelector("#modal-actions");
    if (actionsEl) actionsEl.innerHTML = "";
    const fig = backdrop.querySelector("#modal-figure");
    if (fig) fig.hidden = !showFigure;
    backdrop.hidden = false;
    backdrop.querySelector(".modal-close").focus();
  }

  function closeModal() {
    const backdrop = document.getElementById("preview-modal");
    if (!backdrop || backdrop.hidden) return;
    backdrop.hidden = true;
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
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
    if (sliInit && sliInit.schrift) {
      const uiMap = { normal: "normal", gross: "lg", "sehr-gross": "xl" };
      syncTextUi(uiMap[sliInit.schrift] || "normal");
    }
    if (params.get("lang") && FABLE_TEXT_SLOTS[params.get("lang")]) currentLang = params.get("lang");
    else if (sliInit && FABLE_TEXT_SLOTS[sliInit.sprache]) currentLang = sliInit.sprache;
    applyLang(currentLang, false);

    if (window.SoLerneIch) {
      window.SoLerneIch.onChange((sli) => {
        if (FABLE_TEXT_SLOTS[sli.sprache] && sli.sprache !== currentLang) {
          applyLang(sli.sprache, false);
        }
        const curTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
        if (sli.thema && sli.thema !== curTheme) {
          applyTheme(sli.thema);
        }
        const uiMap = { normal: "normal", gross: "lg", "sehr-gross": "xl" };
        const zielSchrift = uiMap[sli.schrift] || "normal";
        if (zielSchrift !== currentTextSize) {
          syncTextUi(zielSchrift);
        }
      });
    }

    document.querySelectorAll("[data-action='open-impressum']").forEach((btn) => {
      btn.addEventListener("click", () => {
        openModal(
          "Über Alex & Tilda, Impressum und Datenschutz",
          FABLE_TEXT_SLOTS[currentLang].betaText,
          [
            "Public Beta 5 – Testfassung.",
            "Es werden keine persönlichen Daten dauerhaft gespeichert oder übertragen."
          ],
          false
        );
        const actionsEl = document.getElementById("modal-actions");
        if (actionsEl) {
          actionsEl.innerHTML =
            '<a class="modal-action-link" href="ueber-alex-und-tilda.html">Über Alex &amp; Tilda</a>' +
            '<a class="modal-action-link is-secondary" href="impressum.html">Impressum öffnen</a>' +
            '<a class="modal-action-link is-secondary" href="datenschutz.html">Datenschutz öffnen</a>' +
            '<a class="modal-action-link is-secondary" href="barrierefreiheit.html">Barrierefreiheit öffnen</a>';
        }
      });
    });

    const backdrop = document.getElementById("preview-modal");
    if (backdrop) {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop || e.target.closest(".modal-close")) closeModal();
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  });
})();
