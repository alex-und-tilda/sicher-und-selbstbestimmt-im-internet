/* Vorschau-Leiste (nur lokale Entwicklung): Sprache, Schrift 100/150/200 %, Schritt springen.
   Nicht Teil des Bausteins; die echte App hat dafür Hilfe → Einstellungen. */
function vorschauLeiste(el, lw, opt = {}) {
  const namen = opt.namen || ((s, n) => `${n + 1}: ${s.id} (${s.art})`);
  el.innerHTML = `<summary>Sprache, Schrift &amp; Themenwechsel · <span class="modus" data-v="modus"></span></summary>
  <div class="innen" role="region" aria-label="Anzeige und Schrittwechsel">
    <span class="gruppe" role="group" aria-label="Sprache">Sprache:
      <button type="button" data-stufe="leicht">Leicht</button><button type="button" data-stufe="einfach">Einfach</button><button type="button" data-stufe="standard">Alltag</button></span>
    <span class="gruppe" role="group" aria-label="Schrift">Schrift:
      <button type="button" data-schrift="18">100 %</button><button type="button" data-schrift="27">150 %</button><button type="button" data-schrift="36">200 %</button></span>
    <label class="gruppe">Schritt: <select data-v="springen">${lw.schritte.map((s, n) => `<option value="${n}">${namen(s, n)}</option>`).join("")}</select></label>
    ${(opt.links || []).map((l) => `<a href="${l.href}">${l.text}</a>`).join("")}
  </div>`;
  const SLI_SCHRIFT = { "18": "normal", "27": "gross", "36": "sehr-gross" };
  const SLI_SCHRIFT_PX = { normal: "18px", gross: "27px", "sehr-gross": "36px" };
  const zeigen = () => {
    const st = lw.zustand();
    const sli = window.SoLerneIch ? window.SoLerneIch.getState() : null;
    const fs = document.documentElement.style.fontSize || (sli && SLI_SCHRIFT_PX[sli.schrift]) || "18px";
    el.querySelectorAll("[data-stufe]").forEach((k) => k.setAttribute("aria-pressed", String(k.dataset.stufe === st.stufe)));
    el.querySelectorAll("[data-schrift]").forEach((k) => k.setAttribute("aria-pressed", String(fs === k.dataset.schrift + "px")));
    el.querySelector('[data-v="modus"]').textContent = st.lese ? "Große Ansicht" : "Standard-Ansicht";
    el.querySelector('[data-v="springen"]').value = String(st.i);
  };
  el.querySelectorAll("[data-stufe]").forEach((k) => k.addEventListener("click", () => {
    lw.stufe(k.dataset.stufe);
    if (window.SoLerneIch) {
      window.SoLerneIch.setField("sprache", k.dataset.stufe === "standard" ? "alltag" : k.dataset.stufe, true);
    }
    zeigen();
  }));
  el.querySelectorAll("[data-schrift]").forEach((k) => k.addEventListener("click", () => {
    if (window.SoLerneIch) {
      window.SoLerneIch.setField("schrift", SLI_SCHRIFT[k.dataset.schrift] || "normal", true);
    } else {
      document.documentElement.style.fontSize = k.dataset.schrift + "px";
    }
    lw.neuAufbauen();
    zeigen();
  }));
  el.querySelector('[data-v="springen"]').addEventListener("change", (e) => { lw.springen(Number(e.target.value)); zeigen(); });
  zeigen();
  return zeigen;
}
