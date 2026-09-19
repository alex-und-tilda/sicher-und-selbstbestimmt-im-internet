#!/usr/bin/env node
/* Lernplattform-Prüfung: feste, wiederholbare Technik-Prüfungen nach
   PROJEKTREGELN.md §2, §14, §15, §16.6 und §17.
   Liest nur. Ändert keine Datei, ruft kein Netz auf.
   Aufruf aus dem Projekt-Ordner:  node .claude/skills/lernplattform-pruefung/pruefen.cjs [Vergleichs-Branch]
   Ergebnis: FEHLER (muss behoben werden), HINWEIS (bitte ansehen), OK. */

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { spawnSync } = require("child_process");

const ROOT = process.cwd();
const BASIS = process.argv[2] || "main";
let fehler = 0, hinweise = 0;

const ok = (t) => console.log("  OK       " + t);
const err = (t) => { fehler++; console.log("  FEHLER   " + t); };
const hint = (t) => { hinweise++; console.log("  HINWEIS  " + t); };
const kopf = (t) => console.log("\n" + t);
const git = (...a) => spawnSync("git", a, { cwd: ROOT, encoding: "utf8" });
const lies = (f) => fs.readFileSync(path.join(ROOT, f), "utf8");

if (!fs.existsSync(path.join(ROOT, "topics.js")) || !fs.existsSync(path.join(ROOT, "sw.js"))) {
  console.log("Bitte im Projekt-Ordner starten (topics.js und sw.js fehlen hier).");
  process.exit(2);
}

/* 1. Syntax aller JS-Dateien im Hauptordner (§16.5) */
kopf("1. JavaScript-Syntax (node --check)");
const jsDateien = fs.readdirSync(ROOT).filter((f) => f.endsWith(".js"));
jsDateien.forEach((f) => {
  const r = spawnSync(process.execPath, ["--check", f], { cwd: ROOT, encoding: "utf8" });
  if (r.status === 0) ok(f);
  else err(f + ": " + (r.stderr || "").split("\n").slice(0, 4).join(" | "));
});

/* 2. Drei Sprach-Ebenen (§2) */
kopf("2. Drei Sprach-Ebenen (topics.js ↔ content-de.js)");
const ctx = {};
vm.createContext(ctx);
try {
  vm.runInContext(lies("topics.js") + "\n;globalThis.__topics = topics;", ctx, { filename: "topics.js" });
  vm.runInContext(lies("content-de.js") + "\n;globalThis.__cv = CONTENT_VERSIONS; globalThis.__sa = (typeof SELF_ASSESSMENT_VERSIONS !== 'undefined') ? SELF_ASSESSMENT_VERSIONS : {};", ctx, { filename: "content-de.js" });
} catch (e) {
  err("Inhalts-Dateien lassen sich nicht laden: " + e.message);
}
const topics = ctx.__topics || [];
const cv = ctx.__cv || {};
const sa = ctx.__sa || {};
let lektionen = 0, ohneEinfach = [], ohneStandard = [], nichtVoller = [];
const woerterJeSatz = (arr) => {
  const s = (arr || []).map((x) => (typeof x === "string" ? x : x && x.text) || "").join(" ");
  const saetze = s.split(/[.!?]+\s*/).filter((x) => x.trim());
  const w = s.split(/\s+/).filter(Boolean).length;
  return saetze.length ? w / saetze.length : 0;
};
topics.forEach((t) => {
  (t.lessons || []).forEach((l) => {
    lektionen++;
    const v = (cv[t.id] || {})[l.title] || {};
    if (!v.einfach) ohneEinfach.push(t.id + " › " + l.title);
    if (!v.standard) ohneStandard.push(t.id + " › " + l.title);
    if (v.einfach && v.einfach.text && l.text) {
      const a = woerterJeSatz(l.text), b = woerterJeSatz(v.einfach.text);
      if (a && b && b <= a) nichtVoller.push(`${t.id} › ${l.title} (leicht ${a.toFixed(1)} / einfach ${b.toFixed(1)} Wörter je Satz)`);
    }
  });
  if (!sa[t.id] || !sa[t.id].einfach || !sa[t.id].standard) hint(`Einstiegsfrage ohne einfach/standard: ${t.id}`);
});
ok(`${topics.length} Themen, ${lektionen} Lektionen gelesen`);
ohneEinfach.length ? ohneEinfach.forEach((x) => err("fehlt einfach: " + x)) : ok("jede Lektion hat einfach");
ohneStandard.length ? ohneStandard.forEach((x) => err("fehlt standard: " + x)) : ok("jede Lektion hat standard");
let verwaist = 0;
Object.keys(cv).forEach((id) => {
  const t = topics.find((x) => x.id === id);
  if (!t) { err("CONTENT_VERSIONS hat unbekanntes Thema: " + id); verwaist++; return; }
  Object.keys(cv[id]).forEach((titel) => {
    if (!(t.lessons || []).some((l) => l.title === titel)) { err(`verwaister Titel (nicht wortgleich in topics.js): ${id} › ${titel}`); verwaist++; }
  });
});
if (!verwaist) ok("keine verwaisten Titel");
nichtVoller.forEach((x) => hint("Einfache Sprache nicht sichtbar voller (§6): " + x));

/* 3. Service Worker und Offline-Liste (§16.6) */
kopf("3. Service Worker (sw.js)");
const sw = lies("sw.js");
const vMatch = sw.match(/CACHE_VERSION\s*=\s*"([^"]+)"/);
const version = vMatch && vMatch[1];
version ? ok("CACHE_VERSION = " + version) : err("CACHE_VERSION nicht gefunden");
const block = (sw.match(/PRECACHE_URLS\s*=\s*\[([\s\S]*?)\];/) || [])[1] || "";
const eintraege = [...block.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/"([^"]+)"/g)].map((m) => m[1]);
const tot = eintraege.filter((u) => u !== "./" && !fs.existsSync(path.join(ROOT, u.replace(/^\.\//, ""))));
tot.length ? tot.forEach((u) => err("Offline-Liste zeigt auf fehlende Datei: " + u)) : ok(`${eintraege.length} Einträge, alle Dateien vorhanden`);
const skripte = [...lies("index.html").matchAll(/<script[^>]+src="([^"]+)"/g)].map((m) => m[1]);
skripte.filter((s) => !/^https?:/.test(s) && !eintraege.includes("./" + s.replace(/^\.\//, "")))
  .forEach((s) => err("Skript aus index.html fehlt in der Offline-Liste: " + s));
const pos = (n) => skripte.indexOf(n);
if (pos("topics.js") < pos("content-de.js") && pos("content-de.js") < pos("begleitung-de.js") && pos("begleitung-de.js") < pos("app.js"))
  ok("Lade-Reihenfolge topics → content-de → begleitung-de → … → app.js");
else err("Lade-Reihenfolge in index.html stimmt nicht (§15)");

const hatBasis = git("rev-parse", "--verify", "-q", BASIS).status === 0;
if (!hatBasis) hint(`Vergleichs-Branch "${BASIS}" nicht gefunden – Versions-Vergleich übersprungen`);
else {
  const alt = (git("show", BASIS + ":sw.js").stdout.match(/CACHE_VERSION\s*=\s*"([^"]+)"/) || [])[1];
  const geaendert = git("diff", "--name-only", BASIS, "--").stdout.split("\n").filter(Boolean);
  const offen = git("status", "--porcelain").stdout.split("\n").filter(Boolean).map((z) => z.slice(3));
  const alle = [...new Set([...geaendert, ...offen])];
  const imCache = alle.filter((f) => eintraege.includes("./" + f));
  if (imCache.length && alt === version)
    err(`Offline-Dateien geändert (${imCache.join(", ")}), aber CACHE_VERSION ist gleich wie auf ${BASIS} (${alt}) – hochzählen (§16.6)`);
  else if (imCache.length) ok(`CACHE_VERSION neu gegenüber ${BASIS} (${alt} → ${version})`);
  else ok(`keine Offline-Datei gegenüber ${BASIS} geändert`);
}

/* 4. Keine externen Quellen, keine internen Dateien auf main (§14, §15) */
kopf("4. Datenschutz und GitHub Pages");
/* Nur Dateien, die zum Repo gehören – ignorierte lokale Vorschauen (§16.8) nicht */
const imRepo = new Set(git("ls-files").stdout.split("\n").filter(Boolean));
const pruefDateien = fs.readdirSync(ROOT).filter((f) => /\.(html|js|css|webmanifest)$/.test(f) && imRepo.has(f));
let extern = 0;
pruefDateien.forEach((f) => {
  lies(f).split("\n").forEach((z, i) => {
    const laedt = /(src\s*=|url\(|@import|fetch\(|importScripts\(|<link[^>]+rel="(stylesheet|preload|icon|manifest)")[^\n]*https?:\/\//i.test(z)
      || /<link[^>]+href="https?:\/\/[^"]+"[^>]*rel="(stylesheet|preload|icon|manifest)"/i.test(z);
    if (laedt) { extern++; err(`lädt externe Quelle: ${f}:${i + 1}  ${z.trim().slice(0, 120)}`); }
    if (/(src|href)="\/(?!\/)/.test(z)) hint(`absoluter Pfad (GitHub Pages braucht relative Pfade): ${f}:${i + 1}`);
  });
});
if (!extern) ok("keine externen Quellen geladen (Links zum Anklicken sind erlaubt)");
const intern = git("ls-files").stdout.split("\n").filter((f) => /^docs\/|(^|\/)_vorschau-|\.bak$/.test(f));
intern.length ? intern.forEach((f) => err("interne Datei im Repo (gehört nicht auf main): " + f)) : ok("keine docs/, _vorschau-* oder *.bak im Repo");

kopf(`Ergebnis: ${fehler} Fehler, ${hinweise} Hinweise`);
process.exit(fehler ? 1 : 0);
