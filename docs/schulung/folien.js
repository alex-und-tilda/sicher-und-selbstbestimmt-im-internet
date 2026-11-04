"use strict";
const slides = JSON.parse(document.getElementById("slidesdata").textContent);
const byId = id => document.getElementById(id);
const viewer = byId("viewer");
let current = 0;
function requestedSlide() {
  const value = new URL(location.href).searchParams.get("folie");
  if (value === null || !/^\d+$/.test(value)) return 0;
  return Math.max(0, Math.min(slides.length - 1, Number(value) - 1));
}
function renderSlide() {
  current = requestedSlide();
  const s = slides[current];
  byId("slide").src = s.image;
  byId("slide").alt = `Folie ${current + 1}: ${s.title}. Lesefassung unter der Darstellung.`;
  byId("slidetitle").textContent = s.title;
  byId("slidetext").replaceChildren(...s.text.split(/\n+/).filter(Boolean).map(line => {
    const p = document.createElement("p"); p.textContent = line; return p;
  }));
  byId("count").textContent = `Folie ${current + 1} von ${slides.length}`;
  byId("fullcount").textContent = `${current + 1} / ${slides.length}`;
  byId("prev").disabled = current === 0;
  byId("next").disabled = current === slides.length - 1;
}
function moveTo(index) {
  const url = new URL(location.href);
  url.searchParams.set("folie", Math.max(1, Math.min(slides.length, index + 1)));
  history.replaceState(null, "", url);
  renderSlide();
}
byId("prev").onclick = () => moveTo(current - 1);
byId("next").onclick = () => moveTo(current + 1);
byId("full").onclick = async () => {
  try { await viewer.requestFullscreen(); viewer.focus(); }
  catch { byId("error").textContent = "Vollbild ist hier nicht verfügbar. Die Folie bleibt im Browser bedienbar."; }
};
byId("exitfull").onclick = () => document.exitFullscreen();
viewer.addEventListener("keydown", e => {
  const actions = {ArrowRight: current + 1, PageDown: current + 1,
    ArrowLeft: current - 1, PageUp: current - 1, Home: 0, End: slides.length - 1};
  if (Object.hasOwn(actions, e.key)) { e.preventDefault(); moveTo(actions[e.key]); }
  if (e.key === "Escape" && document.fullscreenElement) document.exitFullscreen();
});
// Inhaltsanker verändern die Foliennummer nicht. Zurück/Vorwärts liest nur die URL-Abfrage.
window.addEventListener("popstate", renderSlide);
renderSlide();
