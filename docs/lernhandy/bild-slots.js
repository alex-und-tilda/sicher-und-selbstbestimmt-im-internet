/* Zentrale Bild-Slot-Vorbereitung für neue freigegebene Motive (E36 / Codex-Abstimmung).
   Bis zur ausdrücklichen Bildfreigabe werden ausschließlich vorhandene, freigegebene
   Motive aus docs/assets/figures/ als Rückfall verwendet (keine Eigen-Erstellung). */
(function () {
  "use strict";

  const SLOTS = {
    tilda_fragend: {
      wunsch: "Tilda schaut fragend (E36)",
      neuPfad: null,
      rueckfall: "figures/alex-tilda-nachdenken.webp",
      alt: "Tilda schaut fragend"
    },
    tilda_erleichtert: {
      wunsch: "Tilda erleichtert (E36)",
      neuPfad: null,
      rueckfall: "figures/alex-tilda-hilfe.webp",
      alt: "Tilda wirkt erleichtert"
    },
    auf_augenhoehe: {
      wunsch: "Zwei Menschen auf Augenhöhe mit Handy in der Hand der ersten Person (E36)",
      neuPfad: null,
      rueckfall: "figures/alex-tilda-themen.webp",
      alt: "Zwei Menschen schauen gemeinsam auf ein Thema"
    },
    ruhiger_alltag: {
      wunsch: "Ruhige Alltagsszene (E36)",
      neuPfad: null,
      rueckfall: "figures/alex-tilda-ruhig.webp",
      alt: "Ruhige Alltagsszene mit Alex und Tilda"
    }
  };

  window.AlexTildaBildSlots = {
    SLOTS,
    hole: function (name, basisPfad) {
      const slot = SLOTS[name] || SLOTS.tilda_fragend;
      const prefix = basisPfad || "../assets/";
      const rel = slot.neuPfad || slot.rueckfall;
      return {
        src: prefix + rel,
        alt: slot.alt
      };
    }
  };
})();
