"use strict";
let presentationWindow = null;
let printSections = [];
window.addEventListener("beforeprint", () => {
  if (!document.body.classList.contains("material")) return;
  printSections = Array.from(document.querySelectorAll("main > details"), section => ({section, open:section.open}));
  printSections.forEach(({section}) => { section.open = true; });
});
window.addEventListener("afterprint", () => {
  printSections.forEach(({section,open}) => { section.open = open; });
  printSections = [];
});
document.addEventListener("click", event => {
  const link = event.target.closest("a[data-presentation]");
  if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  const name = "digitalbegleiter_" + document.body.dataset.unit;
  try {
    if (presentationWindow && !presentationWindow.closed) {
      presentationWindow.location.href = link.href;
      presentationWindow.focus();
    } else presentationWindow = window.open(link.href, name);
    if (!presentationWindow) throw new Error("Popup blockiert");
  } catch {
    const hint = document.getElementById("windowhint");
    hint.hidden = false;
    hint.querySelector("a").href = link.href;
    hint.focus();
  }
});

// Native Details bleiben auch ohne JavaScript vollständig bedienbar.
if (document.body.dataset.mode === "run") {
  const steps = Array.from(document.querySelectorAll(".course-step"));
  function openDestination() {
    const target = document.getElementById(location.hash.slice(1));
    if (!target) return;
    const step = target.matches(".course-step") ? target : target.querySelector(".course-step");
    if (step) {
      steps.forEach(item => { item.open = item === step; });
      step.querySelector("summary").focus({preventScroll:true});
      step.scrollIntoView({block:"start"});
    }
  }
  window.addEventListener("hashchange", openDestination);
  // Gleiches Sprungziel löst kein hashchange aus, etwa nach dem Zurückklappen eines Schritts.
  document.addEventListener("click", event => {
    const link = event.target.closest(".next-step, .sectionnav a");
    if (!link || !link.hash || link.hash !== location.hash) return;
    event.preventDefault();
    openDestination();
  });
  openDestination();
  let runPrint = [];
  window.addEventListener("beforeprint", () => {
    runPrint = Array.from(document.querySelectorAll("main details"), item => ({item, open:item.open, name:item.getAttribute("name")}));
    runPrint.forEach(({item}) => item.removeAttribute("name"));
    runPrint.forEach(({item}) => { item.open = true; });
  });
  window.addEventListener("afterprint", () => {
    runPrint.forEach(({item,open,name}) => { item.open = open; if (name !== null) item.setAttribute("name",name); });
    runPrint = [];
  });
}
