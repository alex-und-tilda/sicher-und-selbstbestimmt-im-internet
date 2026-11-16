(function () {
  "use strict";

  if (typeof document === "undefined") return;

  function ermittleBasis() {
    const skript = document.currentScript || document.querySelector("script[data-at-root]");
    if (skript && skript.getAttribute("data-at-root") !== null) {
      return skript.getAttribute("data-at-root");
    }
    const p = window.location.pathname;
    if (p.includes("/lernhandy/") || p.includes("/lernkreis/") || p.includes("/praxis/") || p.includes("/material/")) return "../";
    return "";
  }

  function istImLernweg() {
    const p = window.location.pathname;
    return p.includes("/lernhandy/kurzweg.html") || p.includes("/lernhandy/postfach.html") || p.includes("/lernkreis/");
  }

  function istAktiv(ziel) {
    const p = window.location.pathname;
    const h = window.location.hash || "";
    if (ziel === "start") return p.endsWith("/zugang.html") || p.endsWith("/");
    if (ziel === "themen") return p.includes("/lernhandy/index.html");
    if (ziel === "lernweg") return p.includes("/mein-lernweg.html");
    if (ziel === "hilfe") {
      return (p.includes("/testfassung.html") && (h === "" || h === "#hilfe")) || p.includes("/druckvorlage.html");
    }
    return false;
  }

  function umgebungsName() {
    if (!window.SoLerneIch) return "";
    const s = window.SoLerneIch.getState();
    const env = window.SoLerneIch.VOREINSTELLUNGEN && window.SoLerneIch.VOREINSTELLUNGEN[s.voreinstellung];
    return env ? (env.knopf || env.titel) : "Ich stelle selbst ein.";
  }

  const SPRACH_BADGE = { leicht: "Leicht", einfach: "Einfach", alltag: "Alltag" };

  function statusAktualisieren(nav) {
    if (!nav) return;
    const s = window.SoLerneIch ? window.SoLerneIch.getState() : { sprache: "leicht" };
    const sliBtn = nav.querySelector("#at-nav-sli-btn");
    const badge = nav.querySelector(".at-nav-lang-badge");
    const spracheKurz = SPRACH_BADGE[s.sprache] || "Leicht";
    const name = umgebungsName();
    if (sliBtn) {
      sliBtn.setAttribute("aria-label", `Einstellungen (${spracheKurz}${name ? ", " + name : ""})`);
    }
    if (badge) {
      badge.textContent = spracheKurz;
    }
  }

  function aktivLinkAktualisieren(nav) {
    if (!nav) return;
    nav.querySelectorAll(".at-nav-link[data-nav-id]").forEach((link) => {
      if (istAktiv(link.dataset.navId)) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function einhaengen() {
    if (document.querySelector(".at-nav")) return;
    const imLernweg = istImLernweg();
    if (imLernweg) {
      document.documentElement.classList.add("at-im-lernweg");
      // Im aktiven Lernweg übernimmt die einzige Lernleiste oben die Steuerung (F3 §3 / P1).
      return;
    }

    const basis = ermittleBasis();
    const nav = document.createElement("nav");
    nav.className = "at-nav";
    nav.setAttribute("aria-label", "Hauptnavigation");

    const ICONS = {
      start: '<svg class="at-nav-ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
      themen: '<svg class="at-nav-ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" stroke-width="2"/><rect x="14" y="4" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" stroke-width="2"/><rect x="3" y="14" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" stroke-width="2"/><rect x="14" y="14" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
      lernweg: '<svg class="at-nav-ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M8.5 12.5l2.5 2.5 4.5-5.5"/></svg>',
      hilfe: '<svg class="at-nav-ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M9.5 9.5a2.5 2.5 0 0 1 5 .5c0 1.8-2.5 2.2-2.5 3.8M12 17h.01"/></svg>',
      einstellungen: '<svg class="at-nav-ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>'
    };

    // Festes 5-Punkte-Menü nach E74 (Start · Themen · Mein Lernweg · Hilfe · Einstellungen)
    const punkte = [
      { id: "start", label: "Start", href: basis + "zugang.html" },
      { id: "themen", label: "Themen", href: basis + "lernhandy/index.html" },
      { id: "lernweg", label: "Mein Lernweg", href: basis + "mein-lernweg.html" },
      { id: "hilfe", label: "Hilfe", href: basis + "testfassung.html#hilfe" }
    ];

    nav.innerHTML = `
      <div class="at-nav-inner">
        <div class="at-nav-brand" aria-hidden="true">
          <img class="at-nav-avatar" src="${basis}assets/figures/alex-tilda-themen.webp" alt="">
          <span>Alex &amp; Tilda</span>
        </div>
        <div class="at-nav-links">
          ${punkte.map((p) => {
            const aktiv = istAktiv(p.id) ? ' aria-current="page"' : "";
            return `<a class="at-nav-link" data-nav-id="${p.id}" href="${p.href}"${aktiv}>${ICONS[p.id]}<span>${p.label}</span></a>`;
          }).join("")}
          <button type="button" class="at-nav-link" data-nav-id="einstellungen" id="at-nav-sli-btn">${ICONS.einstellungen}<span>Einstellungen</span><span class="at-nav-lang-badge">Leicht</span></button>
        </div>
        <div class="at-nav-actions">
          <button type="button" class="at-nav-ctrl" id="at-nav-read-btn" aria-pressed="false">Vorlesen</button>
        </div>
      </div>
    `;

    const ziel = document.getElementById("at-plattform-nav");
    if (ziel) {
      ziel.appendChild(nav);
    } else {
      const skip = document.querySelector(".skip-link");
      if (skip && skip.parentNode === document.body) {
        skip.insertAdjacentElement("afterend", nav);
      } else {
        document.body.insertAdjacentElement("afterbegin", nav);
      }
    }

    const readBtn = nav.querySelector("#at-nav-read-btn");
    statusAktualisieren(nav);
    if (readBtn) {
      let liest = false;
      const syncRead = (on) => {
        liest = on;
        readBtn.setAttribute("aria-pressed", String(on));
        readBtn.textContent = on ? "Stopp" : "Vorlesen";
      };
      readBtn.addEventListener("click", () => {
        if (liest) {
          if (window.SoLerneIch && typeof window.SoLerneIch.stoppVorlesen === "function") {
            window.SoLerneIch.stoppVorlesen();
          } else if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
          }
          syncRead(false);
          return;
        }
        const haupt = document.querySelector("main, #main-content, #hauptinhalt") || document.body;
        const text = (haupt.innerText || "").replace(/\s+/g, " ").trim();
        if (window.SoLerneIch && typeof window.SoLerneIch.vorlesen === "function") {
          window.SoLerneIch.vorlesen(text, { force: true });
        }
        syncRead(true);
      });
    }

    if (window.SoLerneIch && typeof window.SoLerneIch.onChange === "function") {
      window.SoLerneIch.onChange(() => statusAktualisieren(nav));
    }

    window.addEventListener("hashchange", () => aktivLinkAktualisieren(nav));

    const sliBtn = nav.querySelector("#at-nav-sli-btn");
    if (sliBtn) {
      sliBtn.addEventListener("click", () => {
        if (window.SoLerneIch && typeof window.SoLerneIch.oeffnen === "function") {
          window.SoLerneIch.oeffnen(sliBtn);
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", einhaengen);
  } else {
    einhaengen();
  }
})();
