#!/usr/bin/env node
/* Vor-Prüfung Leichte Sprache nach PROJEKTREGELN.md §5.
   Findet VERDACHTS-Stellen. Das Programm entscheidet nichts —
   jeder Treffer wird danach von Claude im Zusammenhang beurteilt
   (z. B. sind gewollte Betrugs-Zitate erlaubt).
   Liest nur. Ändert keine Datei, ruft kein Netz auf.

   Aufrufe aus dem Projekt-Ordner:
     node .claude/skills/leichte-sprache/leicht-pruefen.cjs --thema datenschutz
     node .claude/skills/leichte-sprache/leicht-pruefen.cjs --alle
     node .claude/skills/leichte-sprache/leicht-pruefen.cjs --text "Satz eins. Satz zwei."
     echo "Text" | node .claude/skills/leichte-sprache/leicht-pruefen.cjs            */

const fs = require("fs");
const vm = require("vm");

const REGELN = [
  { name: "Konjunktiv", re: /\b(würde\w*|würd\w*|könnte\w*|wäre\w*|hätte\w*|sollte\w*|müsste\w*|dürfte\w*|möchte\w*)\b/i,
    tipp: "Kein Konjunktiv. Ausnahme: „möchte“ ist als Höflichkeit meist in Ordnung." },
  { name: "Neben-Satz", re: /\b(weil|dass|obwohl|nachdem|während|falls|sodass|damit|wodurch|wobei|indem|bevor|sobald|solange|wenn|ob)\b/i,
    tipp: "Keine Neben-Sätze. Lieber zwei Sätze. „Wenn“ darf als eigener kurzer Satz-Anfang geprüft werden." },
  { name: "Relativ-Satz", re: /,\s*(der|die|das|den|dem|denen|dessen|deren|welche\w*)\s/i,
    tipp: "Relativ-Satz. Lieber zwei Sätze." },
  { name: "Genitiv", re: /\b(des|eines|meines|deines|seines|ihres|unseres|wegen|trotz)\b/i,
    tipp: "Kein Genitiv: „vom“ statt „des“." },
  { name: "Passiv", re: /\b(wird|werden|wurde|wurden|worden)\b\s+(\S+\s+){0,5}\S*(ge\w+t|ge\w+en)\b/i,
    tipp: "Aktiv statt Passiv. Ausnahme: gewollte Betrugs-Zitate." },
  { name: "Anführungs-Zeichen", re: /["„“”»«‚‘']/,
    tipp: "Anführungs-Zeichen vermeiden." },
  { name: "Sonder-Zeichen", re: /[;\/§%&()]/,
    tipp: "Sonder-Zeichen vermeiden: ; / § % & ( )" },
  { name: "Ausrufe-Zeichen", re: /!/,
    tipp: "Nur sparsam und nur, wenn nötig (z. B. Betrugs-Masche zeigen)." },
  { name: "Abkürzung", re: /\b(z\.\s?B\.|u\.\s?a\.|bzw\.|usw\.|ca\.|d\.\s?h\.|evtl\.|ggf\.|inkl\.|Nr\.)/i,
    tipp: "Keine Abkürzungen." },
  { name: "Zahl als Wort", re: /\b(zwei|drei|vier|fünf|sechs|sieben|acht|neun|zehn|elf|zwölf|hundert|tausend)\b/i,
    tipp: "Zahlen als Ziffern." },
  { name: "Redewendung", re: /\b(auf der Hut|unter die Lupe|ins Netz gehen|Hand und Fuß|auf den Leim|an der Nase|Finger weg|Augen offen|im Blick)\b/i,
    tipp: "Keine bildliche Sprache." }
];
const LANG_WORT = 14;   // Buchstaben ohne Bindestrich
const LANG_SATZ = 12;   // Wörter

function saetze(text) {
  /* Punkte in Abkürzungen nicht als Satz-Ende lesen */
  const maske = String(text).replace(/\b(z|u|d|B|a|h|bzw|usw|ca|evtl|ggf|inkl|Nr)\.(?=\s?\S)/g, "$1․");
  return maske.split(/(?<=[.!?])\s+/).map((s) => s.replace(/․/g, ".").trim()).filter(Boolean);
}

function pruefeSatz(satz) {
  const funde = [];
  REGELN.forEach((r) => { const m = satz.match(r.re); if (m) funde.push(`${r.name} („${m[0].trim()}“) – ${r.tipp}`); });
  satz.split(/[\s.,!?:]+/).forEach((w) => {
    const rein = w.replace(/[^A-Za-zÄÖÜäöüß-]/g, "");
    if (rein.length > LANG_WORT && !rein.includes("-") && /^[A-ZÄÖÜ]/.test(rein))
      funde.push(`Langes Wort („${rein}“) – mit Bindestrich trennen, falls zusammengesetzt.`);
  });
  const n = satz.split(/\s+/).filter(Boolean).length;
  if (n > LANG_SATZ) funde.push(`Langer Satz (${n} Wörter) – kürzer, eine Aussage pro Satz.`);
  return funde;
}

/* Alle Texte einer Lektion (Leichte-Sprache-Basis in topics.js) einsammeln */
function texteDerLektion(l) {
  const out = [];
  const nimm = (feld, wert) => {
    if (!wert) return;
    if (Array.isArray(wert)) wert.forEach((x, i) => nimm(`${feld}[${i}]`, x));
    else if (typeof wert === "string") out.push([feld, wert]);
    else if (typeof wert === "object") {
      if (typeof wert.text === "string") out.push([feld, wert.text]);
      ["question", "feedback", "explanation", "correct", "wrong", "hint"].forEach((k) => typeof wert[k] === "string" && out.push([`${feld}.${k}`, wert[k]]));
      if (Array.isArray(wert.options)) wert.options.forEach((o, i) => nimm(`${feld}.options[${i}]`, typeof o === "string" ? o : o && (o.text || o.label)));
    }
  };
  ["title", "text", "bullets", "examples", "warning", "success", "remember", "practice"].forEach((f) => nimm(f, l[f]));
  return out;
}

function bericht(stellen) {
  let treffer = 0;
  stellen.forEach(([ort, text]) => {
    saetze(text).forEach((s) => {
      const f = pruefeSatz(s);
      if (!f.length) return;
      treffer += f.length;
      console.log(`\n${ort}\n  Satz: ${s}`);
      f.forEach((x) => console.log("  - " + x));
    });
  });
  console.log(`\nErgebnis: ${treffer} Verdachts-Stellen in ${stellen.length} Texten. Jede Stelle im Zusammenhang beurteilen.`);
}

const args = process.argv.slice(2);
const wert = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };

if (args.includes("--thema") || args.includes("--alle")) {
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync("topics.js", "utf8") + "\n;globalThis.__t = topics;", ctx);
  const id = wert("--thema");
  const liste = ctx.__t.filter((t) => args.includes("--alle") || t.id === id);
  if (!liste.length) { console.log("Thema nicht gefunden. Vorhanden: " + ctx.__t.map((t) => t.id).join(", ")); process.exit(2); }
  const stellen = [];
  liste.forEach((t) => (t.lessons || []).forEach((l) => texteDerLektion(l).forEach(([f, x]) => stellen.push([`${t.id} › ${l.title} › ${f}`, x]))));
  bericht(stellen);
} else if (wert("--text")) {
  bericht([["Text", wert("--text")]]);
} else if (!process.stdin.isTTY) {
  const eingabe = fs.readFileSync(0, "utf8");
  bericht(eingabe.split(/\n+/).filter((z) => z.trim()).map((z, i) => [`Zeile ${i + 1}`, z]));
} else {
  console.log("Aufruf: --thema <id> | --alle | --text \"…\" | Text über stdin");
  process.exit(2);
}
