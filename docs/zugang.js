if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

(function () {
  "use strict";

  const LEVELS = {
    leicht: {
      name: "Leichte Sprache",
      short: "Leicht",
      question: "Was möchtest du machen?",
      guide: "Wähle unten aus, was du machen möchtest. Du kannst gleich anfangen.",
      tiles: {
        lernen: "Wähle ein Thema. Probiere selbst etwas aus.",
        gruppe: "Hier findest du Workshops und Lernkreise.",
        handyhilfe: "Brauchst du Hilfe am Handy? Oder möchtest du anderen am Handy helfen?",
        material: "Du hilfst anderen beim Lernen? Hier findest du Karten und Anleitungen."
      }
    },
    einfach: {
      name: "Einfache Sprache",
      short: "Einfach",
      question: "Was möchtest du heute machen?",
      guide: "Die vier Kacheln führen zu verschiedenen Angeboten. Wähle das Angebot, das dich interessiert.",
      tiles: {
        lernen: "Suche dir ein Thema aus und übe in deinem Tempo.",
        gruppe: "Finde einen Workshop oder einen Lernkreis für deine Gruppe.",
        handyhilfe: "Hier erfährst du, wer dir am Handy hilft und wie du selbst anderen helfen kannst.",
        material: "Du unterstützt jemanden beim Lernen? Hier findest du Karten, Tipps und Anleitungen."
      }
    },
    alltag: {
      name: "Alltagssprache",
      short: "Alltag",
      question: "Was möchtest du heute tun?",
      guide: "Wähle direkt einen der vier Bereiche. Die Beschreibung auf jeder Kachel zeigt dir, was dich dort erwartet.",
      tiles: {
        lernen: "Entdecke ein Thema und probiere passende Übungen selbst aus.",
        gruppe: "Entdecke Workshops und Lernkreise für gemeinsames Lernen.",
        handyhilfe: "Informiere dich über Unterstützung beim Umgang mit dem Handy oder darüber, wie du selbst Digital-Begleiter*in wirst.",
        material: "Hier findest du Karten, Anleitungen und methodische Tipps für die Lernbegleitung."
      }
    }
  };

  let currentLang = "leicht";
  let guided = false;
  let isReading = false;
  let readTimer = null;

  function announce(msg) {
    const live = document.getElementById("a11y-live");
    if (!live) return;
    live.textContent = "";
    requestAnimationFrame(() => {
      live.textContent = msg;
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
  }

  function applyLang(lang) {
    const norm = lang === "standard" ? "alltag" : lang;
    if (!LEVELS[norm]) return;
    currentLang = norm;
    const data = LEVELS[norm];

    const qEl = document.querySelector("[data-bind='question']");
    if (qEl) qEl.textContent = data.question;
    const gEl = document.querySelector("[data-bind='guide']");
    if (gEl) gEl.textContent = data.guide;
    const shortEl = document.querySelector("[data-lang-short]");
    if (shortEl) shortEl.textContent = data.short;

    Object.keys(data.tiles).forEach((key) => {
      const descEl = document.querySelector(`[data-tile-desc='${key}']`);
      if (descEl) descEl.textContent = data.tiles[key];
    });
  }

  function setGuided(next, shouldAnnounce) {
    guided = Boolean(next);
    const guideEl = document.getElementById("intro-guide");
    const toggleBtn = document.getElementById("intro-toggle");
    if (guideEl) guideEl.hidden = !guided;
    if (toggleBtn) {
      toggleBtn.textContent = guided ? "Einführung beenden" : "Seite zeigen lassen";
      toggleBtn.setAttribute("aria-expanded", String(guided));
    }
    try {
      const url = guided ? "#intro" : (window.location.pathname + window.location.search);
      window.history.replaceState(null, "", url);
    } catch (e) {}
    if (shouldAnnounce && guided) {
      announce(LEVELS[currentLang].guide);
    }
  }

  function stopReading() {
    isReading = false;
    clearTimeout(readTimer);
    if (window.SoLerneIch && typeof window.SoLerneIch.stoppVorlesen === "function") {
      window.SoLerneIch.stoppVorlesen();
    } else if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    document.querySelectorAll(".is-reading").forEach((el) => el.classList.remove("is-reading"));
    const readBtn = document.getElementById("start-read-btn");
    if (readBtn) {
      readBtn.setAttribute("aria-pressed", "false");
      const label = readBtn.querySelector("[data-read-label]");
      if (label) label.textContent = "Vorlesen";
    }
  }

  function startReading() {
    const steps = Array.from(document.querySelectorAll("[data-read-step]")).filter((el) => !el.hidden);
    if (!steps.length) return;
    isReading = true;
    const readBtn = document.getElementById("start-read-btn");
    if (readBtn) {
      readBtn.setAttribute("aria-pressed", "true");
      const label = readBtn.querySelector("[data-read-label]");
      if (label) label.textContent = "Stopp";
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
      const text = (el.innerText || el.textContent || "").replace(/\s+/g, " ").trim();
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

  function restoreReturnFocus() {
    if (!window.SoLerneIch || typeof window.SoLerneIch.consumeStartFokus !== "function") return;
    const id = window.SoLerneIch.consumeStartFokus();
    if (!id) return;
    const target = document.getElementById(id);
    if (target && typeof target.focus === "function") {
      requestAnimationFrame(() => target.focus());
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const sli = window.SoLerneIch ? window.SoLerneIch.getState() : null;
    if (sli) {
      applyTheme(sli.thema || "light");
      applyLang(sli.sprache || "leicht");
    } else {
      applyLang("leicht");
    }

    setGuided(window.location.hash === "#intro", false);

    if (window.SoLerneIch && typeof window.SoLerneIch.onChange === "function") {
      window.SoLerneIch.onChange((next) => {
        if (next.sprache && next.sprache !== currentLang) {
          applyLang(next.sprache);
        }
        if (next.thema) {
          applyTheme(next.thema);
        }
      });
    }

    const langBtn = document.getElementById("start-lang-btn");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        stopReading();
        if (window.SoLerneIch && typeof window.SoLerneIch.oeffnen === "function") {
          window.SoLerneIch.oeffnen(langBtn);
        }
      });
    }

    const readBtn = document.getElementById("start-read-btn");
    if (readBtn) {
      readBtn.addEventListener("click", () => {
        if (isReading) stopReading();
        else startReading();
      });
    }

    const introToggle = document.getElementById("intro-toggle");
    if (introToggle) {
      introToggle.addEventListener("click", () => {
        stopReading();
        setGuided(!guided, true);
      });
    }

    document.querySelectorAll(".tile, [data-track-focus]").forEach((el) => {
      el.addEventListener("click", () => {
        stopReading();
        if (el.id && window.SoLerneIch && typeof window.SoLerneIch.setStartFokus === "function") {
          window.SoLerneIch.setStartFokus(el.id);
        }
      });
      if (el.classList.contains("tile")) {
        el.addEventListener("keydown", (e) => {
          if (e.key === " ") {
            e.preventDefault();
            el.click();
          }
        });
      }
    });

    restoreReturnFocus();
  });

  window.addEventListener("pageshow", restoreReturnFocus);
})();
