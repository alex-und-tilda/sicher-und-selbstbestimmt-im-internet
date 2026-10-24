/* Lesehilfen: reine Anzeige, vorhandene Texte und Aufgaben bleiben unverändert.
   Die Auswahl wichtiger Wörter steht separat in lesehilfen-de.js.
   Beide Hilfen sind unabhängig abschaltbar und bleiben nur auf diesem Gerät. */
"use strict";

const LESEHILFEN_KEY = "lesehilfen";
const LESEHILFEN_TEXT = {
  titel: "Lesehilfen",
  erklaerung: "Du kannst diese Hilfen anschalten oder ausschalten.",
  satzmarkierung: "Satz beim Vorlesen markieren",
  schluesselwoerter: "Wichtige Wörter hervorheben"
};
let lesehilfen = { satzmarkierung: true, schluesselwoerter: true };

function loadLesehilfen() {
  lesehilfen = { satzmarkierung: true, schluesselwoerter: true };
  try {
    const saved = JSON.parse(pGet(LESEHILFEN_KEY));
    if (saved && typeof saved === "object") {
      Object.keys(lesehilfen).forEach(key => {
        if (typeof saved[key] === "boolean") lesehilfen[key] = saved[key];
      });
    }
  } catch (e) { /* Ohne gespeicherte Einstellung sind beide Hilfen an. */ }
  lesehilfenAnwenden();
}

function buildLesehilfenSettings(dialog = false) {
  const buttonClass = dialog ? "lern-mehr-knopf" : "setting-big-button";
  return `<details class="lesehilfen-einstellungen">
    <summary>${LESEHILFEN_TEXT.titel}</summary>
    <p>${LESEHILFEN_TEXT.erklaerung}</p>
    ${Object.keys(lesehilfen).map(key => `<button type="button" class="${buttonClass}" data-lesehilfe="${key}" aria-pressed="${lesehilfen[key]}">${LESEHILFEN_TEXT[key]}: ${lesehilfen[key] ? "an" : "aus"}</button>`).join("")}
  </details>`;
}

document.addEventListener("click", event => {
  const button = event.target.closest("button[data-lesehilfe]");
  if (!button || !Object.prototype.hasOwnProperty.call(lesehilfen, button.dataset.lesehilfe)) return;
  stopReading();
  const key = button.dataset.lesehilfe;
  lesehilfen[key] = !lesehilfen[key];
  pSet(LESEHILFEN_KEY, JSON.stringify(lesehilfen));
  document.querySelectorAll("button[data-lesehilfe]").forEach(el => {
    const name = el.dataset.lesehilfe;
    el.setAttribute("aria-pressed", String(lesehilfen[name]));
    el.textContent = LESEHILFEN_TEXT[name] + ": " + (lesehilfen[name] ? "an" : "aus");
  });
  lesehilfenAnwenden();
  announce(LESEHILFEN_TEXT[key] + ": " + (lesehilfen[key] ? "an." : "aus."));
});

/* Satzgrenzen ohne Abhängigkeit von Wort-Ereignissen einer Gerätestimme.
   Abkürzungen, Dezimalzahlen und Punkte innerhalb einer URL bleiben erhalten.
   Die Rückgabe enthält alle Zeichen einschließlich der ursprünglichen Leerzeichen. */
function leseSaetze(text) {
  const source = String(text || "");
  const parts = [];
  const ends = /[.!?]+[»“”"')\]]*(?:\s+|$)/g;
  let start = 0, match;
  while ((match = ends.exec(source))) {
    const before = source.slice(start, match.index + match[0].trimEnd().length).replace(/[»“”"')\]]+$/, "");
    const abbreviation = /(?:\b(?:z|d|u)\.|\bz\.\s*B\.|\bd\.\s*h\.|\bu\.\s*a\.|\b(?:bzw|ca|Dr|Prof|Nr|Abb|bspw|ggf)\.)$/i.test(before);
    if (abbreviation && ends.lastIndex < source.length) continue;
    parts.push({ start, end: ends.lastIndex, text: source.slice(start, ends.lastIndex) });
    start = ends.lastIndex;
  }
  if (start < source.length) parts.push({ start, end: source.length, text: source.slice(start) });
  return parts.filter(part => part.text.trim());
}

/* Einen Textbereich umschließen, ohne innerHTML zu ersetzen. Vorhandene
   Wörter-Erklärungen, Links und deren Bedeutung bleiben erhalten. */
function leseTextBereich(el, start, end) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  let offset = 0, first = null, last = null, node;
  while ((node = walker.nextNode())) {
    const length = node.nodeValue.length;
    if (!first && start < offset + length) first = { node, offset: start - offset };
    if (end <= offset + length) { last = { node, offset: end - offset }; break; }
    offset += length;
  }
  if (!first || !last) return null;
  const range = document.createRange();
  range.setStart(first.node, first.offset);
  range.setEnd(last.node, last.offset);
  const ancestor = range.commonAncestorContainer;
  const boundaryLimit = ancestor.nodeType === Node.TEXT_NODE ? ancestor.parentNode : ancestor;
  /* Liegt eine Grenze genau am Rand eines Inline-Elements, das ganze Element
     bewegen. extractContents würde sonst z. B. einen leeren, aber weiterhin
     fokussierbaren Wörter-Hilfe-Knopf im alten Text zurücklassen. */
  if (first.offset === 0) {
    let edge = first.node;
    while (edge !== boundaryLimit && edge !== el) {
      range.setStartBefore(edge);
      let sibling = edge.previousSibling;
      while (sibling && sibling.nodeType === Node.TEXT_NODE && sibling.nodeValue === "") sibling = sibling.previousSibling;
      if (sibling) break;
      edge = edge.parentNode;
    }
  }
  if (last.offset === last.node.nodeValue.length) {
    let edge = last.node;
    while (edge !== boundaryLimit && edge !== el) {
      range.setEndAfter(edge);
      let sibling = edge.nextSibling;
      while (sibling && sibling.nodeType === Node.TEXT_NODE && sibling.nodeValue === "") sibling = sibling.nextSibling;
      if (sibling) break;
      edge = edge.parentNode;
    }
  }
  return range;
}

function leseSatzSpannen(el) {
  if (!el || !el.matches("p, li, h2, h3, h4, legend, .orient-text, .frage-text")) return [];
  /* Auswahl und Handlungs-Knöpfe haben eigene, bewährte Ansagen und Markierungen.
     Keine neue Innenstruktur in diesen Bedienelementen. Eine Regelzeile (Bild und
     Satz nebeneinander) bleibt ganz: Geteilt stand ihr zweiter Satz als eigene
     Spalte neben dem ersten (Wegprüfung, Bericht 83, B09). */
  if (el.closest("button, label, .answer-option, .sa-option-btn, .sample-option, .einfach-quiz-btn, .topic-card, .action-card, .regel-platz")
      || el.querySelector("button, input, select, textarea, p, li, [role='button']:not(.glossar-term)")) return [];
  const existing = Array.from(el.querySelectorAll(".lese-satz"));
  if (existing.length) return existing;
  const parts = leseSaetze(el.textContent);
  for (let i = parts.length - 1; i >= 0; i--) {
    const part = parts[i], range = leseTextBereich(el, part.start, part.end);
    if (!range) continue;
    const span = document.createElement("span");
    span.className = "lese-satz";
    span.appendChild(range.extractContents());
    range.insertNode(span);
  }
  return Array.from(el.querySelectorAll(".lese-satz"));
}

function leseQueueEintraege(el, text, prefix = "") {
  if (!el) return leseSaetze(text).map((part, i) => ({ pseudoText: (i === 0 ? prefix : "") + part.text, leseZusatz: true }));
  const original = cleanSpeechText(el.textContent);
  const spans = cleanSpeechText(text) === original ? leseSatzSpannen(el) : [];
  if (!spans.length) return [{ leseElement: el, leseText: prefix + text }];
  return spans.map((span, i) => ({ leseElement: span, leseText: (i === 0 ? prefix : "") + span.textContent }));
}

function leseMarkieren(el) {
  if (el && lesehilfen.satzmarkierung) el.classList.add("reading-highlight");
}

/* Nur redaktionell freigegebene ganze Textabschnitte; kein allgemeines
   Wörter-Suchen in Aufgaben oder Antwortmöglichkeiten. Maximal zwei Treffer.
   Quelltexte, Schlüssel und Bewertung werden nie verändert. */
function lesehilfenAnwenden(root) {
  const roots = root ? [root] : Array.from(document.querySelectorAll("#content, .glossar-panel, .lern-mehr-innen"));
  roots.forEach(scope => {
    if (!lesehilfen.schluesselwoerter) {
      scope.querySelectorAll("strong.lese-schluesselwort").forEach(el => el.replaceWith(...el.childNodes));
      return;
    }
    if (typeof LESE_SCHLUESSEL_ABSCHNITTE === "undefined") return;
    const candidates = Array.from(scope.querySelectorAll("p, li"));
    if (scope.matches && scope.matches("p, li")) candidates.unshift(scope);
    candidates.forEach(el => {
      if (el.closest("button, label, .answer-option, .sa-option-btn, .sample-option, .einfach-quiz-btn, .topic-card, .action-card, .companion-panel, .begleit-tipp, .frage-text, .vorhersage-situation, .sz-message, .chat-message, .felder-situation")
          || el.querySelector("p, li, input, select, textarea, button")) return;
      const text = el.textContent;
      const entry = LESE_SCHLUESSEL_ABSCHNITTE[cleanSpeechText(text)];
      if (!entry || el.querySelector("strong.lese-schluesselwort")) return;
      const lesson = el.closest(".lesson-card:not(.uebungs-seite), .memory-card, .weiterlernen-page");
      const feedback = el.closest(".feedback-page, .sz-feedback, .alltag-v-feedback, .mini-feedback-text, .feedback-box, .field-feedback, .felder-rueckmeldung");
      const help = el.closest(".hilfe-anliegen, .task-help-area, #lernMehr, .glossar-panel, .hilfe-notfall");
      if (!(lesson && entry.arten.includes("lektion") || feedback && entry.arten.includes("erklaerung") || help && entry.arten.includes("hilfe"))) return;
      const words = entry.woerter;
      const block = el.closest(".ls-text-block, .ls-bullet-block, .access-box, .feedback-explanation") || el;
      const budget = 2 - block.querySelectorAll("strong.lese-schluesselwort").length;
      if (budget <= 0) return;
      const matches = [];
      for (const word of words) {
        const index = text.indexOf(word);
        if (index < 0 || /[\p{L}\p{N}-]/u.test(text[index - 1] || "") || /[\p{L}\p{N}-]/u.test(text[index + word.length] || "")) continue;
        if (matches.some(m => index < m.end && index + word.length > m.start)) continue;
        const range = leseTextBereich(el, index, index + word.length);
        if (!range || range.commonAncestorContainer.parentElement.closest("strong")) continue;
        matches.push({ start: index, end: index + word.length });
        if (matches.length === budget) break;
      }
      matches.sort((a, b) => b.start - a.start).forEach(match => {
        const range = leseTextBereich(el, match.start, match.end);
        if (!range) return;
        const strong = document.createElement("strong");
        strong.className = "lese-schluesselwort";
        strong.appendChild(range.extractContents());
        range.insertNode(strong);
      });
    });
  });
}

/* Auch nachträglich eingefügte Rückmeldungen werden gestaltet. Ein Durchlauf
   ist idempotent; es gibt weder einen Seitenwechsel noch einen neuen Fokus. */
if ("MutationObserver" in window) {
  document.addEventListener("DOMContentLoaded", () => {
    new MutationObserver(() => lesehilfenAnwenden()).observe(document.body, { childList: true, subtree: true });
  });
}
