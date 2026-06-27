/*
  Lernplattform "Sicher und selbstbestimmt im Internet"
  Version 2026 – komplett neu aufgebaut

  Grundsätze:
  - Einfache Sprache
  - klare Lernlogik: Lesen -> Übung -> Rückmeldung -> Merksatz
  - keine Speicherung von Namen oder Lernstand
  - Töne sind standardmäßig aus
  - Vorlesen nur nach Klick
*/

"use strict";

/* ============================================================
   Zustand
   ============================================================ */

let currentTopicId = null;
let currentMode = "full";
let currentStep = 0;
let currentQuizIndex = 0;
let quizScore = 0;
let quizAnsweredCorrect = new Set();
let soundEnabled = false;
let simpleMode = false;

/* Sprachstufe: 'leicht' (Leichte Sprache), 'einfach' (Einfache Sprache),
   'standard' (Alltagssprache). Wird gemerkt. */
let languageLevel = "leicht";
let languageChosen = false;
const LANGUAGE_KEY = "language-level";
const LANGUAGE_LABEL = {
  leicht: "Leichte Sprache",
  einfach: "Einfache Sprache",
  standard: "Alltagssprache"
};
const LANGUAGE_DESC = {
  leicht: "Kurze Sätze. Mit Bildern.",
  einfach: "Etwas mehr Text. Mit Beispielen.",
  standard: "Normaler Text für alle."
};
/* Beispiel-Satz je Stufe – damit man den Unterschied sieht, nicht nur liest. */
const LANGUAGE_EXAMPLE = {
  leicht: "Pass auf deine Daten auf. Sag nicht jedem dein Passwort.",
  einfach: "Schütze deine Daten und gib dein Passwort nicht weiter, damit niemand in dein Konto kommt.",
  standard: "Achte auf deine persönlichen Daten und teile dein Passwort mit niemandem, damit dein Konto geschützt bleibt."
};

/* Sanfter Sprach-Finder: kein Test, kein „richtig/falsch".
   Die Person liest denselben Inhalt in 3 Stufen und wählt, welcher Text
   sich am angenehmsten anfühlt. So entscheidet das Gefühl, nicht eine
   Selbsteinschätzung – würdevoll und selbstbestimmt (§4). */
let sampleTally = { leicht: 0, einfach: 0, standard: 0 };
const SAMPLE_ROUNDS = [
  {
    leicht: "Pass auf deine Daten auf. Sag nicht jedem dein Passwort.",
    einfach: "Schütze deine Daten und gib dein Passwort nicht weiter, damit niemand in dein Konto kommt.",
    standard: "Achte auf deine persönlichen Daten und teile dein Passwort mit niemandem, damit dein Konto geschützt bleibt."
  },
  {
    leicht: "Ein Fremder schreibt dir. Antworte nicht. Erzähle es einer Person, der du vertraust.",
    einfach: "Wenn dir ein Fremder schreibt, antworte besser nicht und erzähle es einer Person, der du vertraust.",
    standard: "Wenn dich eine unbekannte Person anschreibt, reagierst du besser nicht darauf und sprichst mit jemandem, dem du vertraust."
  }
];

function loadLanguageLevel() {
  try {
    const saved = pGet(LANGUAGE_KEY);
    if (saved === "leicht" || saved === "einfach" || saved === "standard") {
      languageLevel = saved;
      languageChosen = true;
      return true;
    }
  } catch (e) { /* nichts tun */ }
  return false;
}

function setLanguageLevel(level) {
  if (level !== "leicht" && level !== "einfach" && level !== "standard") return;
  languageLevel = level;
  languageChosen = true;
  pSet(LANGUAGE_KEY, level);
}

/* ============================================================
   Lernweg: Wie möchte die Person lernen?
   Selbstbestimmt – freiwillig, jederzeit änderbar, kein Pflicht-Schritt.
     'allein'      – die App erklärt alles selbst
     'app'         – bewusst mit Vorlesen, großer Schrift, Sprachwahl
     'begleitung'  – gemeinsam mit einer Begleitperson (Begleit-Material an)
   ============================================================ */
let learnMode = null;
const LEARN_MODE_KEY = "lern-weg";
const LEARN_MODE_SEEN_KEY = "lern-weg-gesehen";
/* Beim ersten Besuch wird die Lernweg-Frage groß gezeigt, danach nur noch
   als kleine umstellbare Zeile. Dieser Schalter öffnet sie wieder. */
let learnModeChooserOpen = false;
/* Wurde in dieser Sitzung mindestens ein Thema fertig gemacht?
   (Steuert, wann die freiwillige Lernstand-Frage erscheint.) */
let finishedTopicThisSession = false;
const LEARN_MODES = {
  allein:     { title: "Ich lerne allein",      desc: "Die App erklärt dir alles. Mit Vorlesen.",        icon: "understand" },
  app:        { title: "Mit Hilfe der App",     desc: "Vorlesen, große Schrift, leichte Sprache.",       icon: "message" },
  begleitung: { title: "Mit einer Begleitung",  desc: "Ihr lernt zu zweit. Mit Tipps zum Reden.",        icon: "help" }
};

function loadLearnMode() {
  try {
    const saved = pGet(LEARN_MODE_KEY);
    if (saved === "allein" || saved === "app" || saved === "begleitung") {
      learnMode = saved;
    }
  } catch (e) { /* nichts tun */ }
}

function chooseLearnMode(mode) {
  if (!LEARN_MODES[mode]) return;
  /* Gleiche Karte noch einmal antippen = wieder abwählen (selbstbestimmt). */
  learnMode = (learnMode === mode) ? null : mode;
  if (learnMode) pSet(LEARN_MODE_KEY, learnMode);
  else pRemove(LEARN_MODE_KEY);

  if (learnMode === "app") {
    /* App-Hilfe-Modus spürbar machen: Schrift mindestens eine Stufe größer.
       Nie automatisch verkleinern – die Person behält die Kontrolle. */
    if (fontSizeStep < 1) {
      fontSizeStep = 1;
      pSet(FONT_SIZE_KEY, fontSizeStep);
      applyFontSize();
    }
    announce("Gut. Die Schrift ist jetzt größer. Jede Seite wird dir automatisch vorgelesen. Du kannst das Vorlesen jederzeit stoppen.");
  } else if (learnMode === "begleitung") {
    announce("Gut. Auf jeder Themen-Seite gibt es jetzt Tipps für das gemeinsame Lernen.");
  } else if (learnMode === "allein") {
    announce("Gut. Such dir ein Thema aus. Die App erklärt dir alles.");
  } else {
    announce("Auswahl entfernt. Du kannst auch einfach ein Thema wählen.");
  }
  renderMenu();
}

function isCompanionMode() {
  return learnMode === "begleitung";
}

function learnModeWasSeen() {
  return pGet(LEARN_MODE_SEEN_KEY) === "1";
}

function markLearnModeSeen() {
  pSet(LEARN_MODE_SEEN_KEY, "1");
}

/* Lernweg-Frage wieder groß aufklappen (Klick auf die kleine Zeile). */
function openLearnModeChooser() {
  learnModeChooserOpen = true;
  renderMenu();
}

/* Inhalt einer Lektion für die gewählte Sprachstufe holen.
   Fehlt die Stufe noch, wird sinnvoll zurückgefallen, damit die App
   jederzeit funktioniert (Reihenfolge: gewählt → einfach → leicht → Basis). */
/* Einstiegsfrage je Sprachstufe (Fallback: Basis aus topics.js). */
function resolveSelfAssessment(topic, level) {
  if (topic && topic.saVersions) {
    const v = level === "standard"
      ? (topic.saVersions.standard || topic.saVersions.einfach)
      : level === "einfach"
        ? topic.saVersions.einfach
        : null;
    if (v && Array.isArray(v.options) && v.options.length) return v;
  }
  return topic.selfAssessment;
}

function resolveLessonContent(lesson, level) {
  if (!lesson || !lesson.versions) return lesson;
  const v = lesson.versions;
  /* Der Basistext der Lektion IST bereits Leichte Sprache.
     Darum fällt "leicht" auf den Basistext zurück (nie auf "einfach"). */
  let chosen = null;
  if (level === "leicht") chosen = v.leicht || null;
  else if (level === "einfach") chosen = v.einfach || v.leicht || null;
  else chosen = v.standard || v.einfach || v.leicht || null;
  return chosen ? Object.assign({}, lesson, chosen) : lesson;
}

let audioContext = null;
let speechRate = 0.85;

/* Schriftgröße: 3 Stufen */
const FONT_SIZES    = [17, 20, 23]; /* px */
const FONT_SIZE_KEY = "font-size-step";
let fontSizeStep = 0;

function applyFontSize() {
  document.documentElement.style.fontSize = FONT_SIZES[fontSizeStep] + "px";
}

function loadFontSize() {
  try {
    const saved = parseInt(pGet(FONT_SIZE_KEY), 10);
    if (!isNaN(saved) && saved >= 0 && saved < FONT_SIZES.length) fontSizeStep = saved;
  } catch (e) { /* nichts tun */ }
  applyFontSize();
}

function changeFontSize(direction) {
  const next = fontSizeStep + direction;
  if (next < 0 || next >= FONT_SIZES.length) return;
  fontSizeStep = next;
  pSet(FONT_SIZE_KEY, fontSizeStep);
  applyFontSize();
  /* Buttons in allen sichtbaren Utility-Bars aktualisieren */
  document.querySelectorAll(".font-btn-decrease").forEach(b => { b.disabled = fontSizeStep === 0; });
  document.querySelectorAll(".font-btn-increase").forEach(b => { b.disabled = fontSizeStep === FONT_SIZES.length - 1; });
}

/* ============================================================
   Profile: mehrere Personen an einem Gerät – ohne Login, ohne Namen.
   Jede Person wählt ein Bild (Avatar). Sprache, Schrift, Lernweg und
   Lernstand werden PRO Profil getrennt gespeichert. Alles bleibt lokal
   auf dem Gerät (KDG-konform §14): kein Name nötig, kein Konto, kein Server.
   ============================================================ */
const PROFILES_KEY = "profile-liste";
const ACTIVE_PROFILE_KEY = "profil-aktiv";
let profiles = [];          /* [{ id, avatar }] */
let activeProfileId = null;

const AVATARS = [
  { e: "🦊", n: "Fuchs" }, { e: "🐰", n: "Hase" }, { e: "🦉", n: "Eule" },
  { e: "🐢", n: "Schildkröte" }, { e: "🐬", n: "Delfin" }, { e: "🦋", n: "Schmetterling" },
  { e: "🌻", n: "Blume" }, { e: "⚽", n: "Ball" }, { e: "🚲", n: "Fahrrad" },
  { e: "🎸", n: "Gitarre" }, { e: "🐧", n: "Pinguin" }, { e: "🐱", n: "Katze" }
];

/* Alle Einstellungs-Schlüssel, die pro Profil getrennt gespeichert werden.
   Feste Namen (müssen zu LANGUAGE_KEY, FONT_SIZE_KEY, STORAGE_KEY,
   LEARN_MODE_KEY, LEARN_MODE_SEEN_KEY passen) – bewusst als Strings, damit
   die Deklarations-Reihenfolge im Modul keine Rolle spielt. */
const PROFILE_BASE_KEYS = ["language-level", "font-size-step", "lernstand", "lern-weg", "lern-weg-gesehen"];

/* Schlüssel für das aktive Profil. Ohne aktives Profil: alter Schlüssel
   (Rückfall – so bricht nie etwas). */
function pKey(base) {
  return activeProfileId ? base + "::" + activeProfileId : base;
}
function pGet(base) { try { return window.localStorage.getItem(pKey(base)); } catch (e) { return null; } }
function pSet(base, val) { try { window.localStorage.setItem(pKey(base), val); } catch (e) { /* nichts tun */ } }
function pRemove(base) { try { window.localStorage.removeItem(pKey(base)); } catch (e) { /* nichts tun */ } }

function genProfileId() {
  return "p" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function saveProfiles() {
  try {
    window.localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
    if (activeProfileId) window.localStorage.setItem(ACTIVE_PROFILE_KEY, activeProfileId);
  } catch (e) { /* nichts tun */ }
}

function loadProfiles() {
  try {
    const raw = window.localStorage.getItem(PROFILES_KEY);
    profiles = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(profiles)) profiles = [];
    const savedActive = window.localStorage.getItem(ACTIVE_PROFILE_KEY);
    activeProfileId = (savedActive && profiles.some(p => p.id === savedActive))
      ? savedActive
      : (profiles[0] ? profiles[0].id : null);
  } catch (e) { profiles = []; activeProfileId = null; }
}

function getActiveProfile() {
  return profiles.find(p => p.id === activeProfileId) || null;
}

/* Beim ersten Start mit der neuen Version: vorhandene Einstellungen eines
   einzelnen Nutzers in ein Standard-Profil übernehmen – nichts geht verloren. */
function ensureProfiles() {
  loadProfiles();
  if (profiles.length > 0) return;
  const p = { id: genProfileId(), avatar: "🦊" };
  profiles = [p];
  activeProfileId = p.id;
  PROFILE_BASE_KEYS.forEach(base => {
    try {
      const old = window.localStorage.getItem(base);
      if (old !== null) {
        window.localStorage.setItem(base + "::" + p.id, old);
        window.localStorage.removeItem(base);
      }
    } catch (e) { /* nichts tun */ }
  });
  saveProfiles();
}

/* Einstellungen des aktiven Profils frisch in den Speicher laden. */
function loadActiveProfileSettings() {
  languageChosen = false;
  languageLevel = "leicht";
  learnMode = null;
  learnModeChooserOpen = false;
  fontSizeStep = 0;
  loadFontSize();       /* liest + wendet Schriftgröße an */
  loadLanguageLevel();  /* setzt languageLevel + languageChosen, falls gemerkt */
  loadLearnMode();
}

/* ============================================================
   Lernstand – nur mit Einwilligung, jederzeit löschbar
   Es wird kein Name gespeichert. Nichts verlässt das Gerät.
   ============================================================ */

const STORAGE_KEY = "lernstand";

function loadProgress() {
  try {
    const raw = pGet(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function saveProgress(progress) {
  try {
    pSet(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    /* Wenn Speichern nicht geht, läuft alles ohne Lernstand weiter. */
  }
}

function isProgressEnabled() {
  const progress = loadProgress();
  return Boolean(progress && progress.enabled);
}

function setProgressEnabled(enabled) {
  if (enabled) {
    const progress = loadProgress() || {};
    progress.enabled = true;
    progress.done = progress.done || {};
    saveProgress(progress);
  } else {
    pRemove(STORAGE_KEY);
  }
}

function markTopicDone(topicId) {
  if (!isProgressEnabled()) return;
  const progress = loadProgress() || { enabled: true, done: {} };
  progress.done = progress.done || {};
  /* Zeitstempel speichern – für Wiederholungs-Erinnerung */
  const existing = progress.done[topicId];
  progress.done[topicId] = { ts: Date.now(), count: (existing && existing.count ? existing.count + 1 : 1) };
  saveProgress(progress);
}

function isTopicDone(topicId) {
  const progress = loadProgress();
  if (!progress || !progress.done) return false;
  const val = progress.done[topicId];
  /* Rückwärts-kompatibel: alter Wert war true (boolean) */
  return Boolean(val);
}

function getTopicDoneTimestamp(topicId) {
  const progress = loadProgress();
  if (!progress || !progress.done) return null;
  const val = progress.done[topicId];
  if (!val) return null;
  if (val === true) return null; /* alter Eintrag ohne Zeitstempel */
  return val.ts || null;
}

function getTopicsDueForReview() {
  if (!isProgressEnabled()) return [];
  const REVIEW_AFTER_MS = 7 * 24 * 60 * 60 * 1000; /* 7 Tage */
  const now = Date.now();
  return topics.filter(topic => {
    const ts = getTopicDoneTimestamp(topic.id);
    return ts && (now - ts) >= REVIEW_AFTER_MS;
  });
}

function countDoneTopics() {
  const progress = loadProgress();
  if (!progress || !progress.done) return 0;
  return topics.filter(topic => progress.done[topic.id]).length;
}

function toggleProgressSaving() {
  if (isProgressEnabled()) {
    setProgressEnabled(false);
    announce("Der Lernstand wurde gelöscht. Es wird nichts mehr gespeichert.");
  } else {
    setProgressEnabled(true);
    announce("Der Lernstand wird jetzt auf diesem Gerät gespeichert.");
  }
  renderMenu();
}

/* ============================================================
   Wörter-Hilfe (Glossar)
   Schwierige Wörter werden hervorgehoben.
   Antippen öffnet eine kurze Erklärung in Einfacher Sprache.
   ============================================================ */

const GLOSSAR = {
  "internet":               "Das Internet ist ein riesiges Netz aus vielen Computern. So kann man Internetseiten besuchen und Nachrichten schicken.",
  "app":                    "Eine App ist ein Programm auf dem Handy oder Tablet. Apps kann man im App Store oder Play Store herunterladen.",
  "browser":                "Ein Browser ist ein Programm zum Öffnen von Internetseiten. Zum Beispiel Safari, Chrome oder Firefox.",
  "passwort":               "Ein Passwort ist ein geheimes Wort oder eine geheime Zahlenfolge. Es schützt dein Konto.",
  "pin":                    "Eine PIN ist eine geheime Zahl, die du eingibst. Sie schützt zum Beispiel dein Handy oder deine Bankkarte.",
  "konto":                  "Ein Konto ist dein persönlicher Bereich bei einer App oder Webseite. Du loggst dich mit Benutzername und Passwort ein.",
  "profil":                 "Ein Profil ist deine persönliche Seite bei einer App. Dort stehen oft dein Name und dein Foto.",
  "wlan":                   "WLAN ist eine Verbindung zum Internet ohne Kabel. Das Handy verbindet sich per Funk mit dem Router.",
  "daten":                  "Daten sind Informationen, die ein Computer speichert. Zum Beispiel dein Name, Fotos oder Nachrichten.",
  "datenschutz":            "Datenschutz bedeutet: Deine Daten sollen sicher sein. Niemand darf sie ohne deine Erlaubnis weitergeben.",
  "spam":                   "Spam sind unerwünschte Nachrichten oder E-Mails. Du hast sie nicht angefragt. Oft enthalten sie Werbung oder sind gefährlich.",
  "phishing":               "Beim Phishing versucht jemand, dein Passwort oder deine Daten zu stehlen. Oft mit gefälschten E-Mails oder Webseiten.",
  "link":                   "Ein Link ist ein anklickbares Wort oder Bild. Es führt dich zu einer anderen Seite oder Datei.",
  "qr-code":                "Ein QR-Code ist ein schwarzweißes Quadrat mit Muster. Du scannst es mit der Kamera deines Handys.",
  "update":                 "Ein Update ist eine neue Version eines Programms. Es repariert Fehler und macht das Gerät sicherer.",
  "ki":                     "KI steht für Künstliche Intelligenz. Das ist ein Computerprogramm, das lernt und selbst Aufgaben löst. Zum Beispiel ChatGPT.",
  "chatbot":                "Ein Chatbot ist ein Programm, das mit dir schreibt oder spricht. Es beantwortet Fragen automatisch.",
  "deepfake":               "Ein Deepfake ist ein gefälschtes Bild oder Video. Es sieht echt aus, wurde aber vom Computer erstellt.",
  "algorithmus":            "Ein Algorithmus ist eine Regel, nach der ein Computer entscheidet. Zum Beispiel, welche Videos oder Beiträge dir angezeigt werden.",
  "cloud":                  "Die Cloud ist ein Speicherplatz im Internet. Fotos und Dateien werden dort gespeichert – nicht nur auf dem Gerät.",
  "e-mail":                 "Eine E-Mail ist eine elektronische Nachricht. Du verschickst sie über das Internet an andere Personen.",
  "impressum":              "Das Impressum steht auf Webseiten. Es gibt an, wer die Seite betreibt und wie man ihn erreichen kann.",
  "abonnement":             "Bei einem Abonnement zahlst du regelmäßig, zum Beispiel jeden Monat. Zum Beispiel für Musik, Filme oder Apps.",
  "benachrichtigung":       "Eine Benachrichtigung ist eine kurze Meldung auf dem Bildschirm. Sie zeigt dir: Etwas Neues ist passiert.",
  "screenshot":             "Ein Screenshot ist ein Foto von dem, was gerade auf dem Bildschirm zu sehen ist.",
  "verschlüsselung":        "Verschlüsselung bedeutet: Nachrichten werden beim Senden so verändert, dass nur der richtige Empfänger sie lesen kann.",
  "einstellungen":          "Die Einstellungen sind ein Bereich in einer App oder auf dem Gerät. Dort kannst du viele Dinge anpassen.",
  "datenschutzerklärung":   "Die Datenschutzerklärung erklärt, welche Daten eine App oder Webseite speichert und warum.",
  "zwei-faktor":            "Zwei-Faktor-Schutz bedeutet: Du gibst erst dein Passwort ein, dann noch einen zweiten Code. So ist das Konto doppelt geschützt.",
  "firewall":               "Eine Firewall ist ein Schutzprogramm. Es blockiert gefährliche Verbindungen aus dem Internet.",
  "viren":                  "Viren sind schädliche Programme. Sie können Daten stehlen oder das Gerät beschädigen.",
  "router":                 "Ein Router ist ein Gerät, das die Internetverbindung im Haus verteilt. Er gibt das WLAN-Signal aus.",
};

let glossarOverlay = null;
let _glossarLastFocus = null;

function initGlossar() {
  if (glossarOverlay) return;

  glossarOverlay = document.createElement("div");
  glossarOverlay.className = "glossar-overlay is-hidden";
  glossarOverlay.setAttribute("role", "dialog");
  glossarOverlay.setAttribute("aria-modal", "true");
  glossarOverlay.setAttribute("aria-label", "Wörter-Erklärung");
  glossarOverlay.innerHTML = `
    <div class="glossar-panel">
      <button class="glossar-close" aria-label="Erklärung schließen" type="button">✕ Schließen</button>
      <p class="glossar-word-label">Was bedeutet:</p>
      <p class="glossar-word-title" id="glossarWordTitle"></p>
      <p class="glossar-word-def" id="glossarWordDef"></p>
    </div>`;
  document.body.appendChild(glossarOverlay);

  glossarOverlay.addEventListener("click", (e) => {
    if (e.target === glossarOverlay || e.target.closest(".glossar-close")) {
      hideGlossar();
    }
  });
}

function showGlossar(termKey) {
  const def = GLOSSAR[termKey];
  if (!def || !glossarOverlay) return;
  _glossarLastFocus = document.activeElement;
  const display = termKey.charAt(0).toUpperCase() + termKey.slice(1);
  document.getElementById("glossarWordTitle").textContent = display;
  document.getElementById("glossarWordDef").textContent = def;
  glossarOverlay.classList.remove("is-hidden");
  glossarOverlay.querySelector(".glossar-close").focus();
}

function hideGlossar() {
  if (!glossarOverlay) return;
  glossarOverlay.classList.add("is-hidden");
  if (_glossarLastFocus) _glossarLastFocus.focus();
}

function initGlossarEvents() {
  content.addEventListener("click", (e) => {
    const term = e.target.closest(".glossar-term");
    if (term) showGlossar(term.dataset.term);
  });
  content.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("glossar-term")) {
      e.preventDefault();
      showGlossar(e.target.dataset.term);
    }
  });
}

/* Hebt Glossar-Wörter im gerade gerenderten Inhalt hervor */
function applyGlossar() {
  if (!glossarOverlay) return;

  const terms = Object.keys(GLOSSAR);
  /* Längere Begriffe zuerst (z. B. "datenschutzerklärung" vor "datenschutz") */
  const sorted = [...terms].sort((a, b) => b.length - a.length);
  const escRe  = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  /* Wortgrenze für deutsche Zeichen: kein Buchstabe / Umlaut / Bindestrich davor oder danach */
  const WB = "(?<![\\w\\u00C0-\\u017E-])";
  const WA = "(?![\\w\\u00C0-\\u017E-])";
  const pattern = new RegExp(WB + "(" + sorted.map(escRe).join("|") + ")" + WA, "gi");

  const SKIP = new Set(["H1","H2","H3","H4","BUTTON","A","SCRIPT","STYLE","LABEL","NOSCRIPT"]);

  const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      let el = node.parentElement;
      while (el) {
        if (SKIP.has(el.tagName)) return NodeFilter.FILTER_REJECT;
        if (el.classList && el.classList.contains("glossar-term")) return NodeFilter.FILTER_REJECT;
        /* Begrüßungs-Feld (Hero) aussparen: dort wäre die Hervorhebung
           auf dem dunklen Blau schlecht lesbar. */
        if (el.classList && el.classList.contains("hero-card")) return NodeFilter.FILTER_REJECT;
        el = el.parentElement;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const hits = [];
  let node;
  while ((node = walker.nextNode())) {
    pattern.lastIndex = 0;
    if (pattern.test(node.textContent)) hits.push(node);
  }

  hits.forEach((textNode) => {
    const text = textNode.textContent;
    const frag = document.createDocumentFragment();
    let last = 0;
    let m;
    pattern.lastIndex = 0;
    while ((m = pattern.exec(text)) !== null) {
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      const span = document.createElement("span");
      span.className = "glossar-term";
      span.textContent = m[0];
      span.dataset.term = m[0].toLowerCase();
      span.setAttribute("tabindex", "0");
      span.setAttribute("role", "button");
      span.setAttribute("aria-label", `Erklärung: ${m[0]}`);
      frag.appendChild(span);
      last = m.index + m[0].length;
    }
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    textNode.parentNode.replaceChild(frag, textNode);
  });
}

/* ============================================================
   Elemente
   ============================================================ */

const content = document.getElementById("content");
const appTitle = document.getElementById("appTitle");
const moduleLabel = document.getElementById("moduleLabel");
const stepLabel = document.getElementById("stepLabel");
const levelLabel = document.getElementById("levelLabel");
const progressTrack = document.getElementById("progressTrack");
const progressFill = document.getElementById("progressFill");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const homeButton = document.getElementById("homeButton");
const soundToggleButton = document.getElementById("soundToggleButton");
const liveRegion = document.getElementById("liveRegion");

/* ============================================================
   Hilfsfunktionen
   ============================================================ */

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* Helle Farben für Light-Mode */
const TOPIC_COLORS = {
  datenschutz: ["#00285A", "rgba(0, 40, 90, 0.24)",    "rgba(0, 40, 90, 0.08)",    "#EAF1F8"],
  whatsapp:    ["#1DA855", "rgba(37, 211, 102, 0.30)",  "rgba(37, 211, 102, 0.12)", "#E9FBEF"],
  facebook:    ["#1877F2", "rgba(24, 119, 242, 0.28)",  "rgba(24, 119, 242, 0.10)", "#EAF3FF"],
  instagram:   ["#C13584", "rgba(193, 53, 132, 0.28)",  "rgba(193, 53, 132, 0.10)", "#FBEAF4"],
  youtube:     ["#CC0000", "rgba(255, 0, 0, 0.24)",     "rgba(255, 0, 0, 0.09)",    "#FFECEC"],
  snapchat:    ["#A88A00", "rgba(255, 252, 0, 0.42)",   "rgba(255, 252, 0, 0.18)",  "#FFFBD1"],
  tiktok:      ["#111111", "rgba(37, 244, 238, 0.34)",  "rgba(37, 244, 238, 0.12)", "#E8FFFF"],
  hilfe:       ["#C9541C", "rgba(201, 84, 28, 0.30)",   "rgba(201, 84, 28, 0.12)",  "#FFF0E8"],
  ki:          ["#6B3FA0", "rgba(107, 63, 160, 0.28)",  "rgba(107, 63, 160, 0.10)", "#F1EAFA"],
  fakes:       ["#B45309", "rgba(180, 83, 9, 0.28)",    "rgba(180, 83, 9, 0.10)",   "#FDF1E0"],
  betrug:      ["#B91C1C", "rgba(185, 28, 28, 0.26)",   "rgba(185, 28, 28, 0.10)",  "#FDEAEA"],
  einkaufen:   ["#15803D", "rgba(21, 128, 61, 0.28)",   "rgba(21, 128, 61, 0.10)",  "#E8F8EE"]
};

/* Hellere Farben für Dark-Mode (auf dunkelm Hintergrund besser lesbar) */
const TOPIC_COLORS_DARK = {
  datenschutz: ["#58a8e0", "rgba(88,168,224,0.30)",  "rgba(88,168,224,0.12)",  "rgba(88,168,224,0.15)"],
  whatsapp:    ["#4ade80", "rgba(74,222,128,0.30)",  "rgba(74,222,128,0.12)",  "rgba(74,222,128,0.15)"],
  facebook:    ["#60a5fa", "rgba(96,165,250,0.30)",  "rgba(96,165,250,0.12)",  "rgba(96,165,250,0.15)"],
  instagram:   ["#f472b6", "rgba(244,114,182,0.30)", "rgba(244,114,182,0.12)", "rgba(244,114,182,0.15)"],
  youtube:     ["#f87171", "rgba(248,113,113,0.30)", "rgba(248,113,113,0.12)", "rgba(248,113,113,0.15)"],
  snapchat:    ["#fde047", "rgba(253,224,71,0.30)",  "rgba(253,224,71,0.12)",  "rgba(253,224,71,0.15)"],
  tiktok:      ["#a5f3fc", "rgba(165,243,252,0.30)", "rgba(165,243,252,0.12)", "rgba(165,243,252,0.15)"],
  hilfe:       ["#fb923c", "rgba(251,146,60,0.30)",  "rgba(251,146,60,0.12)",  "rgba(251,146,60,0.15)"],
  ki:          ["#c084fc", "rgba(192,132,252,0.30)", "rgba(192,132,252,0.12)", "rgba(192,132,252,0.15)"],
  fakes:       ["#fbbf24", "rgba(251,191,36,0.30)",  "rgba(251,191,36,0.12)",  "rgba(251,191,36,0.15)"],
  betrug:      ["#f87171", "rgba(248,113,113,0.30)", "rgba(248,113,113,0.12)", "rgba(248,113,113,0.15)"],
  einkaufen:   ["#4ade80", "rgba(74,222,128,0.30)",  "rgba(74,222,128,0.12)",  "rgba(74,222,128,0.15)"]
};

function isDarkMode() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getTopicColorStyle(topicId) {
  const palette = isDarkMode() ? TOPIC_COLORS_DARK : TOPIC_COLORS;
  const [color, ring, bg, icon] = palette[topicId] || palette.datenschutz;
  return `--topic-color:${color};--topic-ring:${ring};--topic-hover-bg:${bg};--topic-icon-bg:${icon}`;
}

/* ============================================================
   Piktogramme: eigene, flach gestaltete Icons (lizenzfrei).
   Die SVG-Dateien liegen unter assets/pictograms/<key>.svg.
   (Früher ARASAAC – wurde durch eigene Icons ersetzt.)
   ============================================================ */
function pictoSrc(key) {
  return `assets/pictograms/${key}.svg`;
}

/* Bessere Bild-Zuordnung: sucht anhand des Satz-Textes ein passenderes Icon.
   Nur klare Treffer überschreiben das hinterlegte Bild – sonst bleibt es.
   Zentral und umkehrbar (topics.js wird nicht verändert). */
const PICTO_RULES = [
  [/\bbank\b|sparkasse/i, "pikto-bank"],
  [/geld|euro|bezahl|gekauft|kostet|\bpreis\b|abzock/i, "pikto-money"],
  [/kreditkarte|bezahl-?karte|bank-?karte/i, "pikto-card"],
  [/\bpin\b|geheim-?zahl|\bcode\b|tan\b/i, "pikto-code"],
  [/videos?\b/i, "pikto-video"],
  [/adresse|wo du wohnst|deine wohnung|zuhause/i, "pikto-house"],
  [/genau an|kontrollier|überprüf|prüfe nach/i, "pikto-search"],
  [/fremde|fremder|unbekannte person|unbekannter/i, "pikto-stranger"],
  [/freund/i, "pikto-friend"],
  [/internet|webseite|online|im netz/i, "pikto-globe"],
  [/e-?mail|brief\b/i, "pikto-mail"],
  [/warnzeichen|warn-?zeichen/i, "pikto-warning"],
  [/blockier/i, "pikto-no"],
  [/telefon-?nummer|handy-?nummer|deine nummer/i, "pikto-phone"],
  [/schreib/i, "pikto-message"],
  [/menschen|mensch\b|leute|andere personen|viele personen/i, "pikto-person"]
];
function refinePicto(key, text) {
  if (!text) return key;
  for (let i = 0; i < PICTO_RULES.length; i++) {
    if (PICTO_RULES[i][0].test(text)) return PICTO_RULES[i][1];
  }
  return key;
}

function getTopicById(topicId) {
  return topics.find(topic => topic.id === topicId) || null;
}

function getCurrentTopic() {
  return getTopicById(currentTopicId);
}

function getIconHtml(iconName) {
  if (!iconName) return "";
  return `<img src="assets/icons/${escapeHtml(iconName)}.svg" alt="" aria-hidden="true">`;
}

function getIllustrationHtml(topic) {
  if (!topic || !topic.illustration) return "";
  return `<img class="topic-illustration" src="${escapeHtml(topic.illustration)}" alt="" aria-hidden="true">`;
}

/* ============================================================
   Lern-Bilder in den Lektionen
   - eigene Illustrationen aus assets/lessons/ (fest eingebunden,
     keine fremden Server, keine Lizenz-Auflagen)
   - jede Lektion bekommt automatisch das Bild zu ihrem Symbol
   ============================================================ */

function getLessonImageHtml(lesson, topic) {
  const key = (lesson && lesson.icon) || (topic && topic.icon) || "";
  if (!key) return "";
  return `<img class="lesson-illustration" src="assets/lessons/${escapeHtml(key)}.svg" alt="" aria-hidden="true" loading="lazy" onerror="this.remove()">`;
}

function setProgressVisible(isVisible) {
  const progressArea = document.querySelector(".progress-area");
  if (progressArea) progressArea.classList.toggle("is-hidden", !isVisible);
}

function setBottomNavVisible(isVisible) {
  const nav = document.querySelector(".nav");
  if (nav) nav.classList.toggle("is-hidden", !isVisible);
}

function setHeader(title, module, step, level, percent) {
  appTitle.textContent = title || "Sicher und selbstbestimmt im Internet";
  moduleLabel.textContent = module || "Thema auswählen";
  stepLabel.textContent = step || "Themenübersicht";
  levelLabel.textContent = level || "Start";
  const safePercent = Math.max(0, Math.min(100, percent || 0));
  progressFill.style.width = `${safePercent}%`;
  progressTrack.setAttribute("aria-valuenow", String(safePercent));
  progressTrack.setAttribute("aria-valuetext", `${safePercent} Prozent`);
}

function showNav(showBack, showNext, nextText = "Weiter") {
  backButton.disabled = !showBack;
  nextButton.disabled = !showNext;
  nextButton.textContent = nextText;
}

function announce(text) {
  if (!liveRegion) return;
  /* Kurz leeren, damit Screenreader dieselbe Meldung erneut vorliest */
  liveRegion.textContent = "";
  if (text) setTimeout(() => { liveRegion.textContent = text; }, 50);
}

function focusContent() {
  content.focus();
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  applyGlossar();
}

/* ============================================================
   Töne (standardmäßig aus, keine Speicherung)
   ============================================================ */

function updateSoundButton() {
  if (!soundToggleButton) return;
  soundToggleButton.classList.toggle("sound-on", soundEnabled);
  soundToggleButton.classList.toggle("sound-off", !soundEnabled);
  soundToggleButton.textContent = soundEnabled ? "Töne an" : "Töne aus";
  soundToggleButton.setAttribute("aria-pressed", soundEnabled ? "true" : "false");
  soundToggleButton.setAttribute(
    "aria-label",
    soundEnabled ? "Töne sind an. Klicken zum Ausschalten." : "Töne sind aus. Klicken zum Einschalten."
  );
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  updateSoundButton();
  if (soundEnabled) {
    playSound("toggle");
    announce("Töne sind eingeschaltet.");
  } else {
    announce("Töne sind ausgeschaltet.");
  }
}

function getAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!audioContext) audioContext = new AudioContextClass();
  if (audioContext.state === "suspended") audioContext.resume().catch(() => {});
  return audioContext;
}

function playTone(frequency, duration, volume, type = "sine", delay = 0) {
  if (!soundEnabled) return;
  try {
    const context = getAudioContext();
    if (!context) return;

    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const startTime = context.currentTime + delay;
    const endTime = startTime + duration;

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, startTime);
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(Math.max(volume, 0.0001), startTime + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, endTime);

    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(startTime);
    oscillator.stop(endTime + 0.02);
  } catch (error) {
    /* Ton ist Zusatz. Ohne Ton läuft alles weiter. */
  }
}

function playSound(type) {
  if (!soundEnabled) return;
  if (type === "hover") {
    playTone(520, 0.045, 0.045, "sine");
  } else if (type === "correct") {
    playTone(660, 0.12, 0.075, "sine", 0);
    playTone(880, 0.14, 0.065, "sine", 0.10);
  } else if (type === "wrong") {
    playTone(220, 0.18, 0.060, "triangle", 0);
  } else if (type === "success") {
    playTone(523.25, 0.12, 0.065, "sine", 0);
    playTone(659.25, 0.12, 0.065, "sine", 0.11);
    playTone(783.99, 0.18, 0.060, "sine", 0.22);
  } else if (type === "toggle") {
    playTone(600, 0.10, 0.050, "sine", 0);
  }
}

/* Leiser Orientierungston bei Hover/Fokus – nur wenn Töne an sind. */
let lastHoverSoundAt = 0;
let lastHoverSoundTarget = null;

function playHoverSound(event) {
  if (!soundEnabled) return;
  const target = event.target.closest(
    ".topic-card, .action-card, .support-help-button, .answer-option, .card-read-button, .reading-button, .plain-back-button, .nav-button"
  );
  if (!target) return;

  const now = Date.now();
  if (target === lastHoverSoundTarget && now - lastHoverSoundAt < 1200) return;
  if (now - lastHoverSoundAt < 350) return;

  lastHoverSoundTarget = target;
  lastHoverSoundAt = now;
  playSound("hover");
}

/* ============================================================
   Vorlesen (nur nach Klick, keine Speicherung)
   ============================================================ */

function supportsSpeech() {
  return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

function readShortText(text) {
  if (!supportsSpeech()) return;
  const cleaned = String(text || "").trim();
  if (!cleaned) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(cleaned);
  utterance.lang = "de-DE";
  utterance.rate = 0.82;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function stopReading() {
  if (!supportsSpeech()) return;
  window.speechSynthesis.cancel();
  updateReadingStatus("Vorlesen gestoppt.");
}

function updateReadingStatus(text) {
  const status = document.getElementById("readingStatus");
  if (status) status.textContent = text || "";
}

function cleanSpeechText(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .replace(/←/g, "")
    .replace(/%/g, " Prozent")
    .trim();
}

function collectReadableText() {
  const root = document.querySelector("[data-readable='true']") || content;
  if (!root) return "";

  const clone = root.cloneNode(true);
  clone.querySelectorAll(
    "button, footer, nav, .small-footer-notice, .nav, .progress-area, .reading-toolbar, .task-help-button, .support-help-button, .support-help-close, img, svg"
  ).forEach(node => node.remove());

  const parts = [];
  clone.querySelectorAll("h1, h2, h3, p, li").forEach(node => {
    const text = cleanSpeechText(node.textContent);
    if (text) parts.push(text);
  });
  return parts.join(". ");
}

function readCurrentPage(rate) {
  if (!supportsSpeech()) {
    updateReadingStatus("Vorlesen geht auf diesem Gerät nicht.");
    return;
  }
  const text = collectReadableText();
  if (!text) {
    updateReadingStatus("Es gibt keinen Text zum Vorlesen.");
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  utterance.rate = rate || speechRate;
  utterance.pitch = 1;
  utterance.volume = 1;
  utterance.onstart = () => updateReadingStatus(rate && rate < 0.8 ? "Langsam vorlesen läuft." : "Vorlesen läuft.");
  utterance.onend = () => updateReadingStatus("Vorlesen fertig.");
  utterance.onerror = () => updateReadingStatus("Vorlesen wurde beendet.");
  window.speechSynthesis.speak(utterance);
}

function readNormal() { readCurrentPage(0.85); }
function readSlow() { readCurrentPage(0.50); }

function buildReadingToolbar() {
  if (!supportsSpeech()) {
    return `
      <div class="reading-toolbar" aria-label="Vorlesen">
        <p class="reading-unavailable">Vorlesen geht auf diesem Gerät vielleicht nicht.</p>
      </div>
    `;
  }
  return `
    <div class="reading-toolbar" aria-label="Vorlesen">
      <button type="button" class="reading-button reading-button-normal" onclick="readNormal()">🔊 Vorlesen</button>
      <button type="button" class="reading-button reading-button-slow" onclick="readSlow()">🐢 Langsam vorlesen</button>
      <button type="button" class="reading-button reading-button-stop" onclick="stopReading()">Stopp</button>
      <p id="readingStatus" class="reading-status" aria-live="polite"></p>
    </div>
  `;
}

/* ============================================================
   Einfach-Modus, Pause, Symbol-Hilfe
   ============================================================ */

function toggleSimpleMode() {
  simpleMode = !simpleMode;
  document.body.classList.toggle("simple-mode", simpleMode);
  updateSimpleModeButton();
}

function updateSimpleModeButton() {
  const button = document.getElementById("simpleModeButton");
  if (!button) return;
  button.textContent = simpleMode ? "Einfach-Modus an" : "Einfach-Modus aus";
  button.setAttribute("aria-pressed", simpleMode ? "true" : "false");
}

function showPauseOverlay() {
  closeCalmOverlay();
  const overlay = document.createElement("div");
  overlay.id = "pauseOverlay";
  overlay.className = "calm-overlay";
  overlay.innerHTML = `
    <div class="calm-box" role="dialog" aria-modal="true" aria-labelledby="pauseTitle">
      <h2 id="pauseTitle">Pause machen</h2>
      <p>Du kannst kurz Pause machen.</p>
      <p>Atme ruhig.</p>
      <p>Mach weiter, wenn du bereit bist.</p>
      <button type="button" class="primary-action" onclick="closeCalmOverlay()">Weiter lernen</button>
    </div>
  `;
  document.body.appendChild(overlay);
  const button = overlay.querySelector("button");
  if (button) button.focus();
}

function showSymbolHelp() {
  closeCalmOverlay();
  const overlay = document.createElement("div");
  overlay.id = "pauseOverlay";
  overlay.className = "calm-overlay";
  overlay.innerHTML = `
    <div class="calm-box symbol-help-dialog" role="dialog" aria-modal="true" aria-labelledby="symbolTitle">
      <h2 id="symbolTitle">Was bedeuten die Zeichen?</h2>
      <ul class="symbol-help-list">
        <li><strong>🔊</strong> bedeutet: Vorlesen.</li>
        <li><strong>?</strong> bedeutet: Hilfe.</li>
        <li><strong>✓</strong> bedeutet: richtig oder geschafft.</li>
        <li><strong>!</strong> bedeutet: Achtung.</li>
        <li><strong>Stopp</strong> bedeutet: Anhalten.</li>
      </ul>
      <button type="button" class="primary-action" onclick="closeCalmOverlay()">Schließen</button>
    </div>
  `;
  document.body.appendChild(overlay);
  const button = overlay.querySelector("button");
  if (button) button.focus();
}

function closeCalmOverlay() {
  const overlay = document.getElementById("pauseOverlay");
  if (overlay) overlay.remove();
}

function buildUtilityBar() {
  return `
    <div class="utility-bar" aria-label="Zusätzliche Hilfe">
      <button type="button" class="utility-button language-switch-button" onclick="renderLanguageChoice()">
        Sprache: ${LANGUAGE_LABEL[languageLevel]}
      </button>
      <button type="button" class="utility-button" onclick="showSymbolHelp()">Zeichen erklären</button>
      <button type="button" class="utility-button pause-button" onclick="showPauseOverlay()">Pause machen</button>
      <div class="font-size-group" role="group" aria-label="Schriftgröße ändern">
        <button type="button" class="utility-button font-btn font-btn-decrease" onclick="changeFontSize(-1)" aria-label="Schrift kleiner" ${fontSizeStep === 0 ? "disabled" : ""}>A−</button>
        <button type="button" class="utility-button font-btn font-btn-increase" onclick="changeFontSize(1)"  aria-label="Schrift größer" ${fontSizeStep === FONT_SIZES.length - 1 ? "disabled" : ""}>A+</button>
      </div>
    </div>
  `;
}

/* ============================================================
   Fußzeile
   ============================================================ */

function renderLegalFooter() {
  const old = document.querySelector(".small-footer-notice");
  if (old) old.remove();

  const footer = document.createElement("footer");
  footer.className = "small-footer-notice";
  footer.innerHTML = `
    <p>Dies ist ein unabhängiges Bildungsangebot. Es ist kein offizielles Angebot von WhatsApp, Facebook, Instagram, YouTube, Snapchat, TikTok oder anderen Firmen.</p>
    <p>Es wird kein Name gespeichert. Der Lernstand wird nur gespeichert, wenn du das möchtest.<br />
    <a href="ersteller.html">Ersteller</a> · <a href="impressum.html">Impressum</a> · <a href="datenschutz.html">Datenschutz</a> · <a href="barrierefreiheit.html">Barrierefreiheit</a> · <a href="sprachstufen.html">Die Sprachstufen</a></p>
  `;
  const appRoot = document.querySelector(".app") || document.body;
  appRoot.appendChild(footer);
}

/* ============================================================
   Startseite: Themenübersicht
   ============================================================ */

function chooseLanguage(level) {
  setLanguageLevel(level);
  renderMenu();
}

/* ============================================================
   Profil-Bildschirme: „Wer lernt gerade?", neues Bild, verwalten
   ============================================================ */

function avatarLabel(av) {
  const found = AVATARS.find(a => a.e === av);
  return found ? found.n : "Bild";
}

function switchProfile(id) {
  if (!profiles.some(p => p.id === id)) return;
  activeProfileId = id;
  saveProfiles();
  loadActiveProfileSettings();
  finishedTopicThisSession = false;
  if (languageChosen) renderMenu();
  else renderStart();
}

function renderProfilePicker() {
  stopReading();
  currentTopicId = null;
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Wer lernt?", "Start", "Wer lernt gerade?", 0);
  showNav(false, false);

  const cards = profiles.map(p => `
    <div class="profile-card-wrap">
      <button type="button" class="profile-card" onclick="switchProfile('${escapeHtml(p.id)}')" aria-label="Weiter als ${escapeHtml(avatarLabel(p.avatar))}">
        <span class="profile-avatar" aria-hidden="true">${escapeHtml(p.avatar)}</span>
        <span class="profile-name">${escapeHtml(avatarLabel(p.avatar))}</span>
        ${p.id === activeProfileId ? `<span class="profile-active-badge">Das bist du</span>` : ""}
      </button>
      <button type="button" class="profile-edit-link" onclick="renderProfileManage('${escapeHtml(p.id)}')" aria-label="Profil ${escapeHtml(avatarLabel(p.avatar))} ändern">Ändern</button>
    </div>`).join("");

  content.innerHTML = `
    <section class="profile-picker">
      <h2 class="profile-picker-title">Wer lernt gerade?</h2>
      <p class="profile-picker-intro">Such dir dein Bild aus. Dann merkt sich die App deine Sprache und deinen Lernstand – nur auf diesem Gerät, ohne Namen.</p>
      <div class="profile-grid">
        ${cards}
        <button type="button" class="profile-card profile-card--new" onclick="renderNewProfile()" aria-label="Neue Person hinzufügen">
          <span class="profile-avatar" aria-hidden="true">＋</span>
          <span class="profile-name">Neue Person</span>
        </button>
      </div>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

function renderNewProfile() {
  stopReading();
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Neues Bild", "Start", "Such dir ein Bild aus", 0);
  showNav(false, false);

  const used = profiles.map(p => p.avatar);
  const choices = AVATARS.map(a => `
    <button type="button" class="avatar-choice${used.includes(a.e) ? " is-used" : ""}" onclick="createProfile('${a.e}')" aria-label="${escapeHtml(a.n)} wählen">
      <span class="avatar-choice-pic" aria-hidden="true">${a.e}</span>
      <span class="avatar-choice-name">${escapeHtml(a.n)}</span>
    </button>`).join("");

  content.innerHTML = `
    <section class="profile-new">
      <h2 class="profile-picker-title">Such dir ein Bild aus</h2>
      <p class="profile-picker-intro">Dieses Bild ist dein Zeichen. Du brauchst keinen Namen.</p>
      <div class="avatar-grid">${choices}</div>
      <button type="button" class="plain-back-button" onclick="renderProfilePicker()">← Zurück</button>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

function createProfile(avatar) {
  const p = { id: genProfileId(), avatar: avatar };
  profiles.push(p);
  activeProfileId = p.id;
  saveProfiles();
  languageChosen = false;
  languageLevel = "leicht";
  learnMode = null;
  learnModeChooserOpen = false;
  fontSizeStep = 0;
  applyFontSize();
  finishedTopicThisSession = false;
  renderStart();
}

function changeAvatar(id, avatar) {
  const p = profiles.find(x => x.id === id);
  if (!p) return;
  p.avatar = avatar;
  saveProfiles();
  renderProfileManage(id);
}

function renderProfileManage(id) {
  const p = profiles.find(x => x.id === id);
  if (!p) return renderProfilePicker();
  stopReading();
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Profil", "Start", "Profil ändern", 0);
  showNav(false, false);

  const choices = AVATARS.map(a => `
    <button type="button" class="avatar-choice avatar-choice--small${a.e === p.avatar ? " is-active" : ""}" onclick="changeAvatar('${escapeHtml(id)}','${a.e}')" aria-label="${escapeHtml(a.n)} wählen">
      <span class="avatar-choice-pic" aria-hidden="true">${a.e}</span>
    </button>`).join("");

  content.innerHTML = `
    <section class="profile-manage">
      <h2 class="profile-picker-title"><span aria-hidden="true">${escapeHtml(p.avatar)}</span> Dein Profil</h2>

      <h3 class="profile-manage-sub">Anderes Bild wählen</h3>
      <div class="avatar-grid avatar-grid--small">${choices}</div>

      <h3 class="profile-manage-sub">Neu anfangen</h3>
      <p class="profile-manage-note">Das löscht für dieses Bild die gewählte Sprache und den Lernstand. Du fängst wieder von vorne an. Andere Personen bleiben.</p>
      <button type="button" class="utility-button" onclick="confirmResetProfile('${escapeHtml(id)}')">Neu anfangen</button>

      <h3 class="profile-manage-sub">Profil löschen</h3>
      <p class="profile-manage-note">Das löscht dieses Bild und seinen Lernstand ganz.</p>
      <button type="button" class="utility-button danger-button" onclick="confirmDeleteProfile('${escapeHtml(id)}')">Dieses Profil löschen</button>

      <button type="button" class="plain-back-button" onclick="renderProfilePicker()">← Zurück</button>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

function confirmResetProfile(id) {
  const p = profiles.find(x => x.id === id);
  if (!p) return renderProfilePicker();
  stopReading();
  setHeader("Sicher und selbstbestimmt im Internet", "Neu anfangen", "Start", "Wirklich neu anfangen?", 0);
  content.innerHTML = `
    <section class="profile-manage">
      <article class="card">
        <h2>Wirklich neu anfangen?</h2>
        <p>Für das Bild <span aria-hidden="true">${escapeHtml(p.avatar)}</span> ${escapeHtml(avatarLabel(p.avatar))} werden die gewählte Sprache und der Lernstand gelöscht. Du fängst wieder von vorne an. Das kann man nicht rückgängig machen.</p>
        <div class="feedback-actions">
          <button type="button" class="feedback-button secondary danger-button" onclick="resetProfile('${escapeHtml(id)}')">Ja, neu anfangen</button>
          <button type="button" class="feedback-button primary" onclick="renderProfileManage('${escapeHtml(id)}')">Nein, behalten</button>
        </div>
      </article>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

function resetProfile(id) {
  const wasActive = id === activeProfileId;
  const prevActive = activeProfileId;
  activeProfileId = id;
  PROFILE_BASE_KEYS.forEach(base => pRemove(base));
  activeProfileId = prevActive;
  if (wasActive) {
    loadActiveProfileSettings();
    finishedTopicThisSession = false;
    announce("Du fängst neu an.");
    renderStart();
  } else {
    announce("Der Lernstand wurde gelöscht.");
    renderProfilePicker();
  }
}

function confirmDeleteProfile(id) {
  const p = profiles.find(x => x.id === id);
  if (!p) return;
  stopReading();
  setHeader("Sicher und selbstbestimmt im Internet", "Profil löschen", "Start", "Wirklich löschen?", 0);
  content.innerHTML = `
    <section class="profile-manage">
      <article class="card">
        <h2>Profil wirklich löschen?</h2>
        <p>Das Bild <span aria-hidden="true">${escapeHtml(p.avatar)}</span> ${escapeHtml(avatarLabel(p.avatar))} und sein Lernstand werden gelöscht. Das kann man nicht rückgängig machen.</p>
        <div class="feedback-actions">
          <button type="button" class="feedback-button secondary danger-button" onclick="deleteProfile('${escapeHtml(id)}')">Ja, löschen</button>
          <button type="button" class="feedback-button primary" onclick="renderProfileManage('${escapeHtml(id)}')">Nein, behalten</button>
        </div>
      </article>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

function deleteProfile(id) {
  const prevActive = activeProfileId;
  activeProfileId = id;
  PROFILE_BASE_KEYS.forEach(base => pRemove(base));
  activeProfileId = prevActive;
  profiles = profiles.filter(p => p.id !== id);
  if (activeProfileId === id) activeProfileId = profiles[0] ? profiles[0].id : null;
  saveProfiles();
  if (profiles.length === 0) return renderNewProfile();
  loadActiveProfileSettings();
  renderProfilePicker();
}

/* Einstieg: erst fragen oder gleich selbst wählen */
function renderStart() {
  stopReading();
  currentTopicId = null;
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Start", "Start", "Womit möchtest du starten?", 0);
  showNav(false, false);

  content.innerHTML = `
    <section class="start-entry">
      <h2 class="language-choice-title">Womit möchtest du starten?</h2>
      <p class="language-choice-intro">Du kannst gleich selbst wählen. Oder du beantwortest 3 kurze Fragen und bekommst einen Vorschlag.</p>
      <div class="start-entry-grid">
        <button type="button" class="entry-card" onclick="startLanguageQuiz()">
          <span class="entry-icon" aria-hidden="true">${getIconHtml("help")}</span>
          <span class="entry-text">
            <strong>Hilf mir, die passende Sprache zu finden</strong>
            <span>3 kurze Fragen. Es gibt keine falsche Antwort.</span>
          </span>
        </button>
        <button type="button" class="entry-card" onclick="renderLanguageChoice()">
          <span class="entry-icon" aria-hidden="true">${getIconHtml("check")}</span>
          <span class="entry-text">
            <strong>Ich wähle selbst</strong>
            <span>Direkt eine der drei Sprachen auswählen.</span>
          </span>
        </button>
      </div>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

function startLanguageQuiz() {
  sampleTally = { leicht: 0, einfach: 0, standard: 0 };
  renderSampleFinder(0);
}

/* Einfaches Mischen (Fisher-Yates), damit die Reihenfolge der Text-Karten
   wechselt und niemand immer dieselbe Stelle wählt. */
function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderSampleFinder(round) {
  stopReading();
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Sprache finden", "Beispiel " + (round + 1) + " von " + SAMPLE_ROUNDS.length, "Sprache finden", Math.round((round / SAMPLE_ROUNDS.length) * 100));
  showNav(false, false);

  const r = SAMPLE_ROUNDS[round];
  const dots = SAMPLE_ROUNDS.map((_, j) => `<span class="lq-dot${j <= round ? " on" : ""}"></span>`).join("");
  /* Stufen-Namen werden NICHT gezeigt – die Person wählt nach Gefühl,
     nicht nach Etikett. Reihenfolge wird gemischt. */
  const options = shuffleArray(["leicht", "einfach", "standard"]);
  const cards = options.map(level => `
    <button type="button" class="sample-option" onclick="pickSample(${round}, '${level}')">
      <span class="sample-text">„${escapeHtml(r[level])}"</span>
      <span class="card-read-button" role="button" tabindex="0" data-read-card-text="${escapeHtml(r[level])}" aria-label="Text vorlesen">🔊 Vorlesen</span>
    </button>`).join("");
  const back = round > 0 ? `renderSampleFinder(${round - 1})` : `renderStart()`;

  content.innerHTML = `
    <article class="card lang-quiz-card">
      <div class="lq-dots" aria-hidden="true">${dots}</div>
      <h2 class="lq-question">Welcher Text liest sich für dich am angenehmsten?</h2>
      <p class="language-choice-intro">Wähle einfach den Text, der sich für dich gut anfühlt. Es gibt keine falsche Antwort.</p>
      <div class="sample-options">${cards}</div>
      <button type="button" class="plain-back-button" onclick="${back}">← Zurück</button>
    </article>
  `;
  focusContent();
  renderLegalFooter();
}

function pickSample(round, level) {
  if (sampleTally[level] !== undefined) sampleTally[level]++;
  if (round + 1 < SAMPLE_ROUNDS.length) return renderSampleFinder(round + 1);
  let best = "einfach", max = -1;
  ["leicht", "einfach", "standard"].forEach((k) => { if (sampleTally[k] > max) { max = sampleTally[k]; best = k; } });
  const top = ["leicht", "einfach", "standard"].filter((k) => sampleTally[k] === max);
  if (top.length > 1) best = top.indexOf("einfach") >= 0 ? "einfach" : top[0];
  renderLanguageResult(best);
}

function renderLanguageResult(level) {
  stopReading();
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Vorschlag", "Start", "Dein Vorschlag", 100);
  showNav(false, false);

  content.innerHTML = `
    <article class="card lang-result-card">
      <span class="lang-result-badge">Unser Vorschlag für dich</span>
      <h2 class="lang-result-name">${escapeHtml(LANGUAGE_LABEL[level])}</h2>
      <p class="lang-result-desc">${escapeHtml(LANGUAGE_DESC[level])} Du kannst es jederzeit ändern.</p>
      <button type="button" class="nav-button primary lang-result-go" onclick="chooseLanguage('${level}')">Los geht’s</button>
      <button type="button" class="plain-back-button" onclick="renderLanguageChoice('${level}')">Andere Sprache wählen</button>
    </article>
  `;
  focusContent();
  renderLegalFooter();
}

function renderLanguageChoice(recommended) {
  stopReading();
  currentTopicId = null;
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Sprache wählen", "Start", "Wähle deine Sprache", 0);
  showNav(false, false);

  const card = (level, icon) => `
    <button type="button" class="language-card${recommended === level ? " is-rec" : ""}" onclick="chooseLanguage('${level}')">
      ${recommended === level ? `<span class="language-rec">Vorschlag</span>` : ""}
      <span class="language-icon" aria-hidden="true">${getIconHtml(icon)}</span>
      <span class="language-name">${escapeHtml(LANGUAGE_LABEL[level])}</span>
      <span class="language-desc">${escapeHtml(LANGUAGE_DESC[level])}</span>
      <span class="language-example"><span class="language-example-label">So liest es sich:</span> „${escapeHtml(LANGUAGE_EXAMPLE[level])}"</span>
    </button>`;

  content.innerHTML = `
    <section class="language-choice">
      <h2 class="language-choice-title">Wähle deine Sprache</h2>
      <p class="language-choice-intro">Du kannst sie später jederzeit ändern.</p>
      <div class="language-grid">
        ${card("leicht", "understand")}
        ${card("einfach", "example")}
        ${card("standard", "report")}
      </div>
      <p class="language-finder-link">
        <button type="button" class="utility-button" onclick="startLanguageQuiz()">Nicht sicher? Lass uns die passende Sprache finden</button>
      </p>
      <p class="language-more-link">
        <a href="sprachstufen.html">Was ist der Unterschied? Hier wird es erklärt.</a>
      </p>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

function renderMenu() {
  stopReading();
  currentTopicId = null;
  currentStep = 0;
  currentQuizIndex = 0;
  quizScore = 0;
  quizAnsweredCorrect = new Set();

  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Thema auswählen", "Themenübersicht", "Wähle ein Thema", 0);
  showNav(false, false);

  const cards = topics.map(topic => {
    const done = isTopicDone(topic.id);
    return `
    <button type="button" class="topic-card topic-${escapeHtml(topic.id)}${done ? " topic-card--done" : ""}" style="${getTopicColorStyle(topic.id)}" onclick="renderTopicChoice('${escapeHtml(topic.id)}')">
      ${done ? `<span class="topic-done-corner" aria-label="Geschafft" title="Geschafft">✓</span>` : ""}
      <span class="topic-icon" aria-hidden="true">${getIconHtml(topic.icon || "start")}</span>
      <span class="topic-title">${escapeHtml(topic.title)}</span>
      <span class="topic-desc">${escapeHtml(topic.desc || "")}</span>
      ${done ? `<span class="topic-done-badge">✓ Geschafft</span>` : ""}
      <span class="card-read-button" role="button" tabindex="0" data-read-card-text="${escapeHtml(topic.title)}. ${escapeHtml(topic.desc || "")}" aria-label="Thema ${escapeHtml(topic.title)} vorlesen">
        🔊 Vorlesen
      </span>
    </button>
  `;}).join("");

  const doneCount = countDoneTopics();
  /* Lernstand-Frage entlastet den ersten Bildschirm:
     - schon aktiv: kurze Info + Löschen
     - noch nicht aktiv: erst anbieten, wenn in dieser Sitzung ein Thema
       fertig wurde (vorher gibt es noch nichts zu merken). */
  let progressConsent = "";
  if (isProgressEnabled()) {
    progressConsent = `
      <div class="progress-consent">
        <p class="progress-consent-title">Du hast ${doneCount} von ${topics.length} Themen geschafft.</p>
        <p class="progress-consent-note">Der Lernstand wird nur auf diesem Gerät gespeichert. Ohne Namen.</p>
        <button type="button" class="utility-button" onclick="toggleProgressSaving()">Lernstand löschen und nicht mehr merken</button>
      </div>`;
  } else if (finishedTopicThisSession) {
    progressConsent = `
      <div class="progress-consent">
        <p class="progress-consent-title">Soll ich mir merken, welche Themen du geschafft hast?</p>
        <p class="progress-consent-note">Das wird nur auf diesem Gerät gespeichert. Ohne Namen. Du kannst es jederzeit löschen.</p>
        <button type="button" class="utility-button" onclick="toggleProgressSaving()">Ja, Lernstand merken</button>
      </div>`;
  }

  const heroProgress = isProgressEnabled() && doneCount > 0
    ? `<div class="hero-progress-row" role="region" aria-label="Dein Lernfortschritt">
         <div class="hero-progress-numbers">
           <span class="hero-progress-count" aria-live="polite">${doneCount}</span>
           <span class="hero-progress-of">von ${topics.length} Themen geschafft</span>
         </div>
         <div class="hero-progress-track" role="progressbar" aria-valuenow="${doneCount}" aria-valuemin="0" aria-valuemax="${topics.length}" aria-label="${doneCount} von ${topics.length} Themen">
           <div class="hero-progress-fill" style="width:${Math.round((doneCount/topics.length)*100)}%"></div>
         </div>
       </div>`
    : "";

  /* Lernweg-Auswahl: selbstbestimmt, freiwillig, jederzeit änderbar. */
  const learnModeCards = Object.keys(LEARN_MODES).map(key => {
    const m = LEARN_MODES[key];
    const active = learnMode === key;
    return `
      <button type="button" class="learn-mode-card${active ? " is-active" : ""}" aria-pressed="${active ? "true" : "false"}" onclick="chooseLearnMode('${key}')">
        <span class="learn-mode-icon" aria-hidden="true">${getIconHtml(m.icon)}</span>
        <span class="learn-mode-text">
          <strong>${escapeHtml(m.title)}</strong>
          <span>${escapeHtml(m.desc)}</span>
        </span>
        ${active ? `<span class="learn-mode-check" aria-hidden="true">✓</span>` : ""}
      </button>`;
  }).join("");

  let companionNote = "";
  if (learnMode === "begleitung") {
    companionNote = `<p class="learn-mode-status" role="status"><span aria-hidden="true">👋</span> Begleit-Tipps sind an. Auf jeder Themen-Seite findet ihr Hinweise für das gemeinsame Lernen.</p>`;
  } else if (learnMode === "app") {
    companionNote = `<p class="learn-mode-status" role="status"><span aria-hidden="true">🔊</span> App-Hilfe ist an. Die Schrift ist größer und jede Seite wird dir vorgelesen.</p>`;
  }

  /* Gemeinsame Einstell-Zeile direkt unter der Begrüßung:
     Sprache und Lernweg an einem vorhersehbaren Ort (COGA: gleiche Dinge,
     gleicher Platz). Klare Handlungs-Beschriftung „Sprache ändern: …". */
  const activeProfile = getActiveProfile();
  const profileChip = activeProfile ? `
    <button type="button" class="settings-chip settings-chip--profile" onclick="renderProfilePicker()" aria-label="Person wechseln, du bist gerade ${escapeHtml(avatarLabel(activeProfile.avatar))}">
      <span aria-hidden="true">${escapeHtml(activeProfile.avatar)}</span> Du: ${escapeHtml(avatarLabel(activeProfile.avatar))} ▾
    </button>` : "";

  const langChip = `
    <button type="button" class="settings-chip" onclick="renderLanguageChoice()" aria-label="Sprache ändern, du liest gerade ${escapeHtml(LANGUAGE_LABEL[languageLevel])}">
      <span aria-hidden="true">🗣️</span> Du liest: ${escapeHtml(LANGUAGE_LABEL[languageLevel])} ▾
    </button>`;

  /* Beim ersten Besuch die Lernweg-Frage groß zeigen; danach nur noch als
     kleinen Knopf in der Einstell-Zeile (CLT: ein Inhalt zuerst). */
  const showFullChooser = learnModeChooserOpen || !learnModeWasSeen();
  let settingsRow;
  let learnModeSection;
  if (showFullChooser) {
    markLearnModeSeen();
    settingsRow = `<div class="settings-row">${profileChip}${langChip}</div>`;
    learnModeSection = `
    <section class="learn-mode-section" aria-label="Wie möchtest du lernen?">
      <h3 class="learn-mode-title">Wie möchtest du heute lernen?</h3>
      <p class="learn-mode-sub">Such dir etwas aus. Du kannst es jederzeit ändern.</p>
      <div class="learn-mode-grid">${learnModeCards}</div>
      ${companionNote}
      <p class="learn-mode-hint"><span aria-hidden="true">ℹ️</span> Du musst dich nicht festlegen. Du kannst auch einfach ein Thema wählen und loslegen.</p>
    </section>`;
  } else {
    const label = learnMode ? LEARN_MODES[learnMode].title : "Lernweg wählen";
    const learnChip = `
      <button type="button" class="settings-chip" onclick="openLearnModeChooser()" aria-label="Lernweg ändern, aktuell ${escapeHtml(label)}">
        <span aria-hidden="true">🧭</span> Lernweg: ${escapeHtml(label)} ▾
      </button>`;
    settingsRow = `<div class="settings-row">${profileChip}${langChip}${learnChip}</div>`;
    learnModeSection = companionNote;
  }

  /* Wiederholungs-Erinnerung */
  const reviewTopics = getTopicsDueForReview();
  const reviewSection = reviewTopics.length > 0
    ? `<div class="review-section" role="region" aria-label="Wiederholung fällig">
         <div class="review-header">
           <span class="review-icon" aria-hidden="true">🔁</span>
           <div>
             <p class="review-title">Zeit zum Wiederholen!</p>
             <p class="review-sub">Du hast ${reviewTopics.length === 1 ? "dieses Thema" : "diese Themen"} vor mehr als einer Woche gelernt.</p>
           </div>
         </div>
         <div class="review-chips">
           ${reviewTopics.map(t => `
             <button type="button" class="review-chip" style="${getTopicColorStyle(t.id)}" onclick="startQuiz('${escapeHtml(t.id)}')">
               <span aria-hidden="true">${getIconHtml(t.icon || "start")}</span>
               <span>${escapeHtml(t.title)} – Quiz wiederholen</span>
             </button>`).join("")}
         </div>
       </div>`
    : "";

  content.innerHTML = `
    <section class="start-page">
      <div class="hero-card">
        <div class="hero-inner">
          <div class="hero-text">
            <h2>Willkommen!</h2>
            <p>Hier lernst du, sicher im Internet zu sein. Du entscheidest selbst, wie du lernst.</p>
            <p class="hero-meta">Lern-Plattform &nbsp;·&nbsp; 12 Themen &nbsp;·&nbsp; 3 Sprachstufen &nbsp;·&nbsp; kostenlos</p>
            ${heroProgress}
          </div>
          <div class="hero-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 4 L56 16 L56 36 C56 50 44 60 32 62 C20 60 8 50 8 36 L8 16 Z" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>
              <path d="M24 32 L30 38 L40 26" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      ${settingsRow}
      ${learnModeSection}
      ${reviewSection}
      <h3 class="topic-grid-title">Wähle ein Thema</h3>
      <div class="topic-grid">${cards}</div>
      ${progressConsent}
      <div class="more-section" aria-label="Weitere Angebote">
        <h3 class="more-title">Mehr</h3>
        <div class="start-actions">
          <button type="button" class="big-quiz-start-button" onclick="startBigQuiz()">
            ${getIconHtml("quiz")}
            <span>
              <strong>Das große Quiz</strong>
              <span>Alle 12 Themen gemischt</span>
            </span>
          </button>
          <button type="button" class="start-action-secondary" onclick="renderAllMemoryCards()">
            ${getIconHtml("remember")}
            <span>
              <strong>Alle Merk-Karten</strong>
              <span>Übersicht &amp; Drucken</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

/* ============================================================
   Themenseite: Lernweg wählen
   ============================================================ */

/* Begleit-Material als saubere Druck-/PDF-Ansicht (Handout für Fachkräfte). */
function printCompanion(topicId) {
  const topic = getTopicById(topicId);
  const c = topic && topic.companion;
  if (!c) return;
  const sections = [
    ["Lernziele", c.lernziele],
    ["Methodische Hinweise", c.methodik],
    ["Gesprächsanlässe", c.gespraechsanlaesse],
    ["Hinweise zur Begleitung", c.begleithinweise],
    ["Rechts- und Fachbezüge", c.rechtsbezuege],
    ["Alltagstransfer", c.transfer]
  ];
  const body = sections
    .filter(([, it]) => Array.isArray(it) && it.length)
    .map(([t, it]) => `<h2>${escapeHtml(t)}</h2><ul>${it.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>`)
    .join("");
  const html = `<!doctype html><html lang="de"><head><meta charset="utf-8">` +
    `<title>Begleit-Material – ${escapeHtml(topic.title)}</title>` +
    `<style>body{font-family:Arial,Helvetica,sans-serif;max-width:720px;margin:24px auto;padding:0 16px;color:#142231;line-height:1.55;}` +
    `h1{font-size:20px;margin:0 0 4px;}h2{font-size:15px;margin:18px 0 4px;border-bottom:1px solid #ccd;padding-bottom:4px;}` +
    `ul{margin:6px 0;padding-left:20px;}li{margin-bottom:5px;}.meta{color:#555;font-size:12px;margin:0 0 12px;}` +
    `.foot{margin-top:24px;border-top:1px solid #ccd;padding-top:8px;color:#555;font-size:11px;}</style></head><body>` +
    `<h1>Für Begleitpersonen und Fachkräfte</h1>` +
    `<p class="meta">Thema: ${escapeHtml(topic.title)} · Sicher und selbstbestimmt im Internet</p>` +
    body +
    `<p class="foot">Begleit-Material zur Lernplattform „Sicher und selbstbestimmt im Internet". ` +
    `Diese Hinweise richten sich an Fachkräfte und sind nicht Teil der Lern-Texte.</p></body></html>`;
  const w = window.open("", "_blank");
  if (!w) return;
  w.document.write(html);
  w.document.close();
  w.focus();
  setTimeout(() => { try { w.print(); } catch (e) { /* nichts tun */ } }, 300);
}

/* Begleit-Panel „Für Begleitpersonen und Fachkräfte" (eigene Ebene,
   keine Sprach-Stufe). Erscheint nur, wenn das Thema Begleit-Material hat. */
function buildCompanionPanel(topic) {
  const c = topic && topic.companion;
  if (!c) return "";
  const sections = [
    ["Lernziele", c.lernziele],
    ["Methodische Hinweise", c.methodik],
    ["Gesprächsanlässe", c.gespraechsanlaesse],
    ["Hinweise zur Begleitung", c.begleithinweise],
    ["Rechts- und Fachbezüge", c.rechtsbezuege],
    ["Alltagstransfer", c.transfer]
  ];
  const blocks = sections
    .filter(([, items]) => Array.isArray(items) && items.length)
    .map(([titel, items]) =>
      `<div class="companion-section">
         <h4>${escapeHtml(titel)}</h4>
         <ul>${items.map(it => `<li>${escapeHtml(it)}</li>`).join("")}</ul>
       </div>`)
    .join("");
  if (!blocks) return "";
  return `
    <details class="companion-panel"${isCompanionMode() ? " open" : ""}>
      <summary>
        <span class="companion-badge">Für Begleitpersonen und Fachkräfte</span>
        <span class="companion-hint">Lernziele, Methodik, Rechtsbezüge – zum Aufklappen</span>
      </summary>
      <div class="companion-body">
        <p class="companion-intro">Diese Hinweise richten sich an Betreuende, Assistenz, Angehörige und Fachkräfte. Sie sind nicht Teil der Lern-Texte.</p>
        ${blocks}
        <button type="button" class="companion-print" onclick="printCompanion('${escapeHtml(topic.id)}')">🖨 Drucken / als PDF speichern</button>
      </div>
    </details>`;
}

function renderTopicChoice(topicId) {
  stopReading();
  const topic = getTopicById(topicId);
  if (!topic) return renderMenu();

  currentTopicId = topic.id;
  currentStep = 0;
  currentQuizIndex = 0;
  quizScore = 0;
  quizAnsweredCorrect = new Set();

  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", topic.title, "Thema auswählen", "Lernweg wählen", 0);
  showNav(false, false);

  content.innerHTML = `
    <section class="topic-choice" style="${getTopicColorStyle(topic.id)}">
      <button type="button" class="plain-back-button" onclick="renderMenu()">← Zur Themenübersicht</button>

      <article class="card topic-intro-card">
        ${getIllustrationHtml(topic)}
        <div class="symbol-heading">
          <span class="access-box-symbol" aria-hidden="true">${getIconHtml(topic.icon || "start")}</span>
          <h2>${escapeHtml(topic.title)}</h2>
        </div>
        <p>${escapeHtml(topic.desc || "")}</p>
      </article>

      <div class="learning-path-heading">
        <h3>Wie möchtest du lernen?</h3>
      </div>

      ${buildUtilityBar()}

      <div class="action-grid learning-path-grid">
        <button type="button" class="action-card action-short" onclick="startTopicMode('${escapeHtml(topic.id)}', 'short')">
          <span class="action-icon" aria-hidden="true">${getIconHtml("understand")}</span>
          <span class="action-text">
            <span class="action-title">Kurz lernen</span>
            <span class="action-desc">Nur das Wichtigste.</span>
            <span class="card-read-button card-read-button--path" role="button" tabindex="0" data-read-card-text="Kurz lernen. Nur das Wichtigste." aria-label="Kurz lernen vorlesen">🔊 Vorlesen</span>
          </span>
        </button>

        <button type="button" class="action-card action-full" onclick="startTopicMode('${escapeHtml(topic.id)}', 'full')">
          <span class="action-icon" aria-hidden="true">${getIconHtml("example")}</span>
          <span class="action-text">
            <span class="action-title">Mehr lernen</span>
            <span class="action-desc">Mit Beispielen.</span>
            <span class="card-read-button card-read-button--path" role="button" tabindex="0" data-read-card-text="Mehr lernen. Mit Beispielen." aria-label="Mehr lernen vorlesen">🔊 Vorlesen</span>
          </span>
        </button>

        <button type="button" class="action-card action-quiz" onclick="startQuiz('${escapeHtml(topic.id)}')">
          <span class="action-icon" aria-hidden="true">${getIconHtml("quiz")}</span>
          <span class="action-text">
            <span class="action-title">Quiz machen</span>
            <span class="action-desc">Fragen beantworten.</span>
            <span class="card-read-button card-read-button--path" role="button" tabindex="0" data-read-card-text="Quiz machen. Fragen beantworten." aria-label="Quiz machen vorlesen">🔊 Vorlesen</span>
          </span>
        </button>

        <button type="button" class="action-card action-memory" onclick="renderMemoryCard('${escapeHtml(topic.id)}')">
          <span class="action-icon" aria-hidden="true">${getIconHtml("remember")}</span>
          <span class="action-text">
            <span class="action-title">Merk-Karte</span>
            <span class="action-desc">Regeln ansehen.</span>
            <span class="card-read-button card-read-button--path" role="button" tabindex="0" data-read-card-text="Merk-Karte. Regeln ansehen." aria-label="Merk-Karte vorlesen">🔊 Vorlesen</span>
          </span>
        </button>
      </div>

      ${buildCompanionPanel(topic)}

      ${buildSupportBox()}
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

/* ============================================================
   Hilfe-Bereiche
   ============================================================ */

function buildSupportBox() {
  return `
    <div class="support-help-area">
      <button type="button" class="support-help-button" onclick="toggleSupportHelp()" aria-expanded="false" aria-controls="supportHelpPanel">
        <span class="support-help-icon" aria-hidden="true">${getIconHtml("help")}</span>
        <span class="support-help-text">
          <span class="support-help-title">Du brauchst Unterstützung?</span>
          <span class="support-help-desc">Hilfe anzeigen.</span>
        </span>
      </button>

      <div id="supportHelpPanel" class="support-help-panel" hidden>
        <h3>Du kannst Hilfe holen.</h3>
        <div class="support-help-grid">
          <div class="support-help-card">
            <h4>Wenn du die Seite nicht bedienen kannst</h4>
            <ul>
              <li>Zeige auf die Stelle.</li>
              <li>Sage: Ich brauche Hilfe bei der Bedienung.</li>
              <li>Bitte um langsames Erklären.</li>
            </ul>
          </div>
          <div class="support-help-card">
            <h4>Wenn du eine Frage nicht verstehst</h4>
            <ul>
              <li>Lies die Frage noch einmal.</li>
              <li>Bitte eine Person um Erklärung.</li>
              <li>Sage: Bitte erkläre mir das einfacher.</li>
            </ul>
          </div>
          <div class="support-help-card">
            <h4>Wen kannst du fragen?</h4>
            <ul>
              <li>Eine Person, der du vertraust.</li>
              <li>Eine Person, die dich unterstützt.</li>
              <li>Eine Digital-Begleiterin oder einen Digital-Begleiter.</li>
              <li>Jemanden im Wohnbereich oder Dienst.</li>
            </ul>
          </div>
        </div>
        <p class="support-help-remember">Du musst das nicht allein schaffen.</p>
        <button type="button" class="support-help-close" onclick="closeSupportHelp()">Hilfe ausblenden</button>
      </div>
    </div>
  `;
}

function toggleSupportHelp() {
  const panel = document.getElementById("supportHelpPanel");
  const button = document.querySelector(".support-help-button");
  const desc = document.querySelector(".support-help-desc");
  if (!panel) return;
  const show = panel.hasAttribute("hidden");
  if (show) {
    panel.removeAttribute("hidden");
    if (button) button.setAttribute("aria-expanded", "true");
    if (desc) desc.textContent = "Hilfe wieder ausblenden.";
  } else {
    closeSupportHelp();
  }
}

function closeSupportHelp() {
  const panel = document.getElementById("supportHelpPanel");
  const button = document.querySelector(".support-help-button");
  const desc = document.querySelector(".support-help-desc");
  if (panel) panel.setAttribute("hidden", "");
  if (button) button.setAttribute("aria-expanded", "false");
  if (desc) desc.textContent = "Hilfe anzeigen.";
}

function buildTaskHelpBox() {
  return `
    <div class="task-help-area">
      <button type="button" class="task-help-button" onclick="toggleTaskHelp()" aria-expanded="false" aria-controls="taskHelpPanel">
        Ich bin unsicher
      </button>
      <div id="taskHelpPanel" class="task-help-panel" hidden>
        <h3>Du bist unsicher?</h3>
        <p>Du musst nicht raten.</p>
        <ul>
          <li>Lies die Frage noch einmal langsam.</li>
          <li>Schau dir beide Antworten an.</li>
          <li>Überlege: Welche Antwort schützt dich besser?</li>
          <li>Du kannst eine Pause machen.</li>
          <li>Du kannst eine Person fragen, der du vertraust.</li>
        </ul>
      </div>
    </div>
  `;
}

function toggleTaskHelp() {
  const panel = document.getElementById("taskHelpPanel");
  const button = document.querySelector(".task-help-button");
  if (!panel || !button) return;
  const show = panel.hasAttribute("hidden");
  if (show) {
    panel.removeAttribute("hidden");
    button.setAttribute("aria-expanded", "true");
    button.textContent = "Hilfe ausblenden";
  } else {
    panel.setAttribute("hidden", "");
    button.setAttribute("aria-expanded", "false");
    button.textContent = "Ich bin unsicher";
  }
}

/* ============================================================
   Lektionen
   ============================================================ */

function getLessonsForMode(topic, mode) {
  if (!topic || !Array.isArray(topic.lessons)) return [];
  if (mode === "short") {
    if (Array.isArray(topic.einfachLessons) && topic.einfachLessons.length) {
      return topic.einfachLessons;
    }
    if (Array.isArray(topic.shortLessonIndexes)) {
      return topic.shortLessonIndexes.map(index => topic.lessons[index]).filter(Boolean);
    }
  }
  return topic.lessons;
}

function startTopicMode(topicId, mode) {
  const topic = getTopicById(topicId);
  if (!topic) return renderMenu();
  currentTopicId = topic.id;
  currentMode = mode === "short" ? "short" : "full";
  currentStep = 0;
  if (topic.selfAssessment) {
    renderSelfAssessment();
  } else {
    renderLesson();
  }
}

function renderSelfAssessment() {
  stopReading();
  const topic = getCurrentTopic();
  if (!topic || !topic.selfAssessment) return renderLesson();

  const sa = resolveSelfAssessment(topic, languageLevel);
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader(topic.title, "", "", "Start", 0);

  const optionButtons = sa.options.map((opt, i) =>
    `<button class="sa-option-btn" data-index="${i}" type="button">${escapeHtml(opt)}</button>`
  ).join("");

  content.innerHTML = `
    <article class="card sa-card" style="${getTopicColorStyle(topic.id)}">
      <div class="symbol-heading">
        <span class="access-box-symbol" aria-hidden="true">${getIconHtml(topic.icon || "start")}</span>
        <h2>${escapeHtml(topic.title)}</h2>
      </div>
      <p class="sa-intro">Bevor wir starten:</p>
      <p class="sa-question">${escapeHtml(sa.question)}</p>
      <div class="sa-options" role="group" aria-label="Einschätzung wählen">
        ${optionButtons}
      </div>
      <p class="sa-hint">Es gibt keine falsche Antwort. Wähle einfach, was für dich stimmt.</p>
    </article>
  `;

  content.querySelectorAll(".sa-option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      renderLesson();
    });
  });

  focusContent();
  renderLegalFooter();
}

function renderLesson() {
  stopReading();
  const topic = getCurrentTopic();
  if (!topic) return renderMenu();

  const lessons = getLessonsForMode(topic, currentMode);
  if (!lessons.length) return renderTopicChoice(topic.id);

  currentStep = Math.max(0, Math.min(currentStep, lessons.length - 1));

  const lesson = resolveLessonContent(lessons[currentStep], languageLevel);
  const percent = Math.round(((currentStep + 1) / lessons.length) * 100);
  const modeLabel = currentMode === "short" ? "Kurz lernen" : "Mehr lernen";
  const hasPractice = Boolean(lesson.practice);

  /* Modul-Cluster-Badge: zeigen wenn neues Modul beginnt (nicht bei Schritt 0/Start) */
  const prevLesson = currentStep > 0 ? lessons[currentStep - 1] : null;
  const isNewModule = prevLesson && lesson.module && lesson.module !== "Start" && prevLesson.module !== lesson.module;
  const moduleBadge = isNewModule
    ? `<div class="module-cluster-badge" role="status" aria-live="polite">
         <span class="module-cluster-label">Neues Thema:</span>
         <span class="module-cluster-name">${escapeHtml(lesson.module)}</span>
       </div>`
    : "";

  setProgressVisible(true);
  setBottomNavVisible(!hasPractice);
  setHeader(topic.title, modeLabel, `Schritt ${currentStep + 1} von ${lessons.length}`, lesson.module || "Lernen", percent);
  showNav(true, true, currentStep === lessons.length - 1 ? "Fertig" : "Weiter");

  /* Text-Sätze — unterstützt Strings und {text, pictogram}-Objekte */
  const text = Array.isArray(lesson.text)
    ? lesson.text.map(item => {
        if (typeof item === "object" && item.text) {
          const img = item.pictogram
            ? `<img class="ls-sentence-pikto" src="${pictoSrc(refinePicto(item.pictogram, item.text))}" alt="" width="56" height="56" aria-hidden="true" loading="lazy">`
            : "";
          return `<div class="ls-text-row">${img}<p>${escapeHtml(item.text)}</p></div>`;
        }
        return `<p>${escapeHtml(item)}</p>`;
      }).join("")
    : "";

  /* Bullet-Punkte — unterstützt Strings und {text, pictogram}-Objekte */
  const bullets = Array.isArray(lesson.bullets) && lesson.bullets.length
    ? `<ul class="ls-bullet-list">${lesson.bullets.map(item => {
        if (typeof item === "object" && item.text) {
          const img = item.pictogram
            ? `<img class="ls-bullet-pikto" src="${pictoSrc(refinePicto(item.pictogram, item.text))}" alt="" width="40" height="40" aria-hidden="true" loading="lazy">`
            : "";
          return `<li class="ls-bullet-item">${img}<span>${escapeHtml(item.text)}</span></li>`;
        }
        return `<li>${escapeHtml(item)}</li>`;
      }).join("")}</ul>`
    : "";

  const examples = Array.isArray(lesson.examples) && lesson.examples.length
    ? `<div class="access-box example"><h3>Beispiele aus dem Alltag</h3><ul>${lesson.examples.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>`
    : "";

  const warning = lesson.warning
    ? `<div class="access-box warning"><h3>Achtung</h3><p>${escapeHtml(lesson.warning)}</p></div>`
    : "";

  const success = lesson.success
    ? `<div class="access-box success"><h3>Gut</h3><p>${escapeHtml(lesson.success)}</p></div>`
    : "";

  const remember = lesson.remember
    ? `<div class="access-box remember remember-box"><h3>Wichtig</h3><p class="remember-text">${escapeHtml(lesson.remember)}</p></div>`
    : "";

  const practice = hasPractice ? buildPractice(lesson.practice) : "";

  /* Großes Lektions-Piktogramm nur auf der Start-Lektion (Themeneinstieg).
     Alle weiteren Lektionen haben Piktogramme direkt bei jedem Satz/Bullet —
     ein zusätzliches Banner-Bild wäre dort Wiederholung. */
  const isEinfachLesson = simpleMode;
  const isStartLesson_pikto = lesson.module === "Start";
  const pictogram = isStartLesson_pikto && lesson.pictogram && languageLevel !== "standard"
    ? `<div class="einfach-pictogram" aria-hidden="true">
         <img src="${pictoSrc(lesson.pictogram)}" alt="" width="100" height="100" loading="eager">
       </div>`
    : "";

  /* Lernziele und Fehler-Normalisierung nur im Start-Screen */
  const isStartLesson = lesson.module === "Start";

  const learningGoals = isStartLesson && Array.isArray(topic.learningGoals) && topic.learningGoals.length
    ? `<div class="learning-goals-box">
         <h3>Was du hier lernst:</h3>
         <ul class="learning-goals-list">
           ${topic.learningGoals.map(g => `<li>${escapeHtml(g)}</li>`).join("")}
         </ul>
       </div>`
    : "";

  const safeNotice = isStartLesson
    ? `<div class="start-safe-notice" role="note">
         <p class="start-safe-icon" aria-hidden="true">✓</p>
         <div>
           <p class="start-safe-main">Du darfst Fehler machen.</p>
           <p class="start-safe-sub">Das ist beim Lernen ganz normal.</p>
           <p class="start-safe-sub">Du kannst jeden Schritt so oft machen, wie du möchtest.</p>
         </div>
       </div>`
    : "";

  content.innerHTML = `
    ${buildUtilityBar()}${buildReadingToolbar()}
    ${moduleBadge}
    <article class="card lesson-card${isEinfachLesson ? " lesson-card--einfach" : ""}" style="${getTopicColorStyle(topic.id)}" data-readable="true">
      ${pictogram}
      <div class="symbol-heading">
        <span class="access-box-symbol" aria-hidden="true">${getIconHtml(lesson.icon || topic.icon || "start")}</span>
        <h2>${escapeHtml(lesson.title || topic.title)}</h2>
      </div>
      ${getLessonImageHtml(lesson, topic)}
      ${text}
      ${learningGoals}
      ${safeNotice}
      ${bullets}
      ${examples}
      ${warning}
      ${success}
      ${remember}
      ${practice}
    </article>
  `;
  focusContent();
  renderLegalFooter();

  /* App-Hilfe-Modus: jede Lektion automatisch vorlesen.
     Sanft (kleine Verzögerung) und jederzeit über „Stopp" abbrechbar (§3:
     Vorlesen als Angebot, nicht als Zwang). */
  if (learnMode === "app" && supportsSpeech()) {
    window.setTimeout(() => readCurrentPage(), 400);
  }
}

function buildPractice(practice) {
  const question = practice.question || "";
  const answers = Array.isArray(practice.answers) ? practice.answers : [];
  const correctIndex = Number(practice.correctIndex ?? 0);
  const answerHtml = answers.map((answer, index) => `
    <button type="button" class="answer-option" onclick="renderPracticeFeedbackPage(${index}, ${correctIndex})">
      ${escapeHtml(answer)}
    </button>
  `).join("");

  return `
    <div class="practice-box">
      <h3>Übung</h3>
      <p class="practice-question">${escapeHtml(question)}</p>
      <div class="answers">${answerHtml}</div>
      ${buildTaskHelpBox()}
    </div>
  `;
}

function renderPracticeFeedbackPage(index, correctIndex) {
  stopReading();
  const topic = getCurrentTopic();
  const lessons = getLessonsForMode(topic, currentMode);
  const lesson = lessons[currentStep];
  const practice = lesson && lesson.practice ? lesson.practice : null;
  if (!topic || !lesson || !practice) return renderLesson();

  const answers = Array.isArray(practice.answers) ? practice.answers : [];
  const selectedText = answers[index] || "";
  const isCorrect = index === Number(correctIndex);
  playSound(isCorrect ? "correct" : "wrong");
  const explanation = isCorrect
    ? (practice.feedbackCorrect || "Das ist sicher. Du hast gut entschieden.")
    : (practice.feedbackWrong || "Das ist nicht sicher. Du kannst es noch einmal versuchen.");

  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader(topic.title, "Übung", "Rückmeldung", isCorrect ? "Richtig" : "Nochmal üben", 100);

  content.innerHTML = `
    ${buildUtilityBar()}${buildReadingToolbar()}
    <article class="card feedback-page ${isCorrect ? "feedback-correct" : "feedback-wrong"}" data-readable="true">
      <h2>${isCorrect ? "Genau richtig!" : "Fast!"}</h2>

      <div class="feedback-selected">
        <h3>Deine Antwort:</h3>
        <p>${escapeHtml(selectedText)}</p>
      </div>

      <div class="feedback-explanation">
        <h3>Erklärung:</h3>
        <p>${escapeHtml(explanation)}</p>
      </div>

      ${isCorrect && practice.remember ? `
        <div class="access-box remember remember-box">
          <h3>Wichtig</h3>
          <p class="remember-text">${escapeHtml(practice.remember)}</p>
        </div>
      ` : ""}

      <div class="feedback-actions">
        ${isCorrect
          ? `<button type="button" class="feedback-button primary" onclick="continueAfterPractice()">Weiter</button>`
          : `<button type="button" class="feedback-button secondary" onclick="renderLesson()">Lektion nochmal lesen</button>
             <button type="button" class="feedback-button ghost" onclick="renderPracticePage()">Frage nochmal versuchen</button>`
        }
      </div>

      ${!isCorrect ? buildTaskHelpBox() : ""}
    </article>
  `;
  announce(isCorrect ? "Genau richtig!" : "Fast! Das war noch nicht ganz richtig.");
  focusContent();
  renderLegalFooter();
}

function renderPracticePage() {
  /* Springt direkt zur Übungsfrage der aktuellen Lektion zurück */
  const topic = getCurrentTopic();
  const lessons = getLessonsForMode(topic, currentMode);
  const lesson = lessons[currentStep];
  if (lesson && lesson.practice) {
    setProgressVisible(true);
    setBottomNavVisible(false);
    const percent = Math.round(((currentStep + 1) / lessons.length) * 100);
    const modeLabel = currentMode === "short" ? "Kurz lernen" : "Mehr lernen";
    setHeader(topic.title, modeLabel, `Schritt ${currentStep + 1} von ${lessons.length}`, lesson.module || "Lernen", percent);
    content.innerHTML = `
      ${buildUtilityBar()}${buildReadingToolbar()}
      <article class="card lesson-card" style="${getTopicColorStyle(topic.id)}" data-readable="true">
        <div class="symbol-heading">
          <span class="access-box-symbol" aria-hidden="true">${getIconHtml(lesson.icon || topic.icon || "start")}</span>
          <h2>${escapeHtml(lesson.title || topic.title)}</h2>
        </div>
        ${buildPractice(lesson.practice)}
      </article>
    `;
    focusContent();
    renderLegalFooter();
  } else {
    renderLesson();
  }
}

function continueAfterPractice() {
  const topic = getCurrentTopic();
  const lessons = getLessonsForMode(topic, currentMode);
  if (!topic || !lessons.length) return renderMenu();

  if (currentStep < lessons.length - 1) {
    currentStep += 1;
    renderLesson();
  } else {
    renderCompletionPage(topic.id);
  }
}

/* ============================================================
   Abschlussseite
   ============================================================ */

function renderCompletionPage(topicId) {
  stopReading();
  const topic = getTopicById(topicId);
  if (!topic) return renderMenu();

  markTopicDone(topic.id);
  finishedTopicThisSession = true;
  playSound("success");
  setProgressVisible(false);
  setBottomNavVisible(false);
  showNav(false, false);

  /* ---- Einfach-Modus: eigene, wärmere Abschlussseite ---- */
  if (currentMode === "short") {
    setHeader(topic.title, "Kurz lernen", "Abschluss", "Du bist fertig", 100);
    content.innerHTML = `
      <section class="completion-page einfach-completion" data-readable="true">
        <article class="card completion-card--einfach" style="${getTopicColorStyle(topic.id)}">

          <div class="einfach-done-star" aria-hidden="true">
            <img src="${pictoSrc('pikto-done')}" alt="" width="120" height="120">
          </div>

          <h2 class="einfach-done-title">Super gemacht!</h2>

          <p class="einfach-done-text">Du hast gelernt:</p>
          <p class="einfach-done-topic"><strong>${escapeHtml(topic.title)}</strong></p>

          <p class="einfach-done-praise">Das war toll.<br>Du hast gut aufgepasst.</p>

          <div class="einfach-done-actions">
            ${getQuizQuestions(topic).length
              ? `<button type="button" class="primary-action einfach-done-btn" onclick="startEinfachQuiz('${escapeHtml(topic.id)}')">
                   Quiz machen
                 </button>`
              : ""}
            <button type="button" class="secondary-action einfach-done-btn" onclick="startTopicMode('${escapeHtml(topic.id)}', 'short')">
              Nochmal von vorne
            </button>
            <button type="button" class="secondary-action einfach-done-btn" onclick="startTopicMode('${escapeHtml(topic.id)}', 'full')">
              Mehr lernen
            </button>
            <button type="button" class="ghost-action einfach-done-btn" onclick="renderMenu()">
              Zur Themenübersicht
            </button>
          </div>

        </article>
      </section>
    `;
    focusContent();
    renderLegalFooter();
    return;
  }

  /* ---- Normaler Modus ---- */
  setHeader(topic.title, "Fertig", "Abschluss", "Du bist fertig", 100);

  const rules = Array.isArray(topic.memoryRules) ? topic.memoryRules.slice(0, 5) : [];
  const rulesHtml = rules.map(rule => `<li>${escapeHtml(rule)}</li>`).join("");

  content.innerHTML = `
    <section class="completion-page" data-readable="true">
      <article class="card completion-card" style="${getTopicColorStyle(topic.id)}">
        <div class="symbol-heading">
          <span class="access-box-symbol" aria-hidden="true">${getIconHtml("check")}</span>
          <h2>Du bist fertig.</h2>
        </div>

        <p>Du hast das Thema <strong>${escapeHtml(topic.title)}</strong> geschafft.</p>

        <h3>Das hast du geübt:</h3>
        <ul>
          ${rulesHtml || "<li>Du hast wichtige Regeln wiederholt.</li>"}
        </ul>

        <div class="completion-actions">
          <button type="button" class="primary-action" onclick="renderTopicChoice('${escapeHtml(topic.id)}')">Zurück zum Lernweg</button>
          <button type="button" class="secondary-action" onclick="startQuiz('${escapeHtml(topic.id)}')">Quiz machen</button>
          <button type="button" class="secondary-action" onclick="renderCertificate('${escapeHtml(topic.id)}')">Urkunde ansehen</button>
          <button type="button" class="secondary-action" onclick="renderMemoryCard('${escapeHtml(topic.id)}')">Merk-Karte ansehen</button>
          <button type="button" class="secondary-action" onclick="renderMenu()">Zur Themenübersicht</button>
        </div>
      </article>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

/* ============================================================
   Quiz
   ============================================================ */

function startQuiz(topicId) {
  const topic = getTopicById(topicId);
  if (!topic) return renderMenu();
  currentTopicId = topic.id;
  currentQuizIndex = 0;
  quizScore = 0;
  quizAnsweredCorrect = new Set();
  renderQuizQuestion();
}

/* ============================================================
   Einfach-Quiz (2 Antwortoptionen, max. 3 Fragen)
   ============================================================ */

function startEinfachQuiz(topicId) {
  const topic = getTopicById(topicId);
  if (!topic) return renderMenu();
  currentTopicId = topic.id;
  currentQuizIndex = 0;
  quizScore = 0;
  quizAnsweredCorrect = new Set();
  renderEinfachQuizQuestion();
}

function getEinfachQuizQuestions(topic) {
  return getQuizQuestions(topic).slice(0, 3);
}

function renderEinfachQuizQuestion() {
  stopReading();
  const topic = getCurrentTopic();
  const questions = getEinfachQuizQuestions(topic);
  if (!topic || !questions.length) return renderCompletionPage(currentTopicId);
  if (currentQuizIndex >= questions.length) return renderEinfachQuizResult();

  const q = questions[currentQuizIndex];
  const answers = Array.isArray(q.answers) ? q.answers : [];
  const correctIndex = Number(q.correctIndex ?? 0);
  const correctText = answers[correctIndex] || "";

  /* Eine falsche Antwort zufällig wählen */
  const wrongPool = answers.filter((_, i) => i !== correctIndex);
  const wrongText = wrongPool[Math.floor(Math.random() * wrongPool.length)] || "Weiß ich nicht";

  /* Reihenfolge zufällig variieren */
  const correctFirst = Math.random() < 0.5;
  const opts = correctFirst
    ? [{ text: correctText, correct: true }, { text: wrongText, correct: false }]
    : [{ text: wrongText, correct: false }, { text: correctText, correct: true }];

  const percent = Math.round((currentQuizIndex / questions.length) * 100);
  setProgressVisible(true);
  setBottomNavVisible(false);
  setHeader(topic.title, "Einfach-Quiz", `Frage ${currentQuizIndex + 1} von ${questions.length}`, "Quiz", percent);
  showNav(false, false);

  content.innerHTML = `
    ${buildUtilityBar()}${buildReadingToolbar()}
    <article class="card einfach-quiz-card" style="${getTopicColorStyle(topic.id)}" data-readable="true">
      <p class="einfach-quiz-number">Frage ${currentQuizIndex + 1} von ${questions.length}</p>
      <p class="einfach-quiz-question">${escapeHtml(q.question || "")}</p>
      <div class="einfach-quiz-options">
        ${opts.map((opt, i) => `
          <button type="button" class="einfach-quiz-btn" onclick="renderEinfachQuizFeedback(${i}, ${opt.correct ? "true" : "false"})">
            ${escapeHtml(opt.text)}
          </button>
        `).join("")}
      </div>
    </article>
  `;
  focusContent();
  renderLegalFooter();
}

function renderEinfachQuizFeedback(optionIndex, isCorrect) {
  stopReading();
  const topic = getCurrentTopic();
  const questions = getEinfachQuizQuestions(topic);
  const q = questions[currentQuizIndex];
  if (!topic || !q) return renderMenu();

  if (isCorrect) {
    quizScore++;
    quizAnsweredCorrect.add(currentQuizIndex);
  }
  playSound(isCorrect ? "correct" : "wrong");

  const feedbackText = isCorrect
    ? (q.feedbackCorrect || "Genau richtig!")
    : (q.feedbackWrong || "Das war leider falsch. Beim nächsten Mal klappt es besser.");

  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader(topic.title, "Einfach-Quiz", "Antwort", isCorrect ? "Richtig!" : "Nochmal", 100);

  content.innerHTML = `
    <article class="card feedback-page ${isCorrect ? "feedback-correct" : "feedback-wrong"}" style="${getTopicColorStyle(topic.id)}" data-readable="true">
      <h2 class="einfach-quiz-result-title">${isCorrect ? "✓ Richtig!" : "✗ Nicht ganz"}</h2>
      <p class="einfach-quiz-feedback-text">${escapeHtml(feedbackText)}</p>
      <div class="einfach-quiz-next-actions">
        <button type="button" class="primary-action" onclick="einfachQuizNext()">
          ${currentQuizIndex < questions.length - 1 ? "Weiter" : "Ergebnis ansehen"}
        </button>
      </div>
    </article>
  `;
  focusContent();
  renderLegalFooter();
}

function einfachQuizNext() {
  currentQuizIndex++;
  renderEinfachQuizQuestion();
}

function renderEinfachQuizResult() {
  stopReading();
  const topic = getCurrentTopic();
  if (!topic) return renderMenu();
  const total = getEinfachQuizQuestions(topic).length;

  playSound("success");
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader(topic.title, "Einfach-Quiz", "Ergebnis", "Quiz beendet", 100);
  showNav(false, false);

  const allCorrect = quizScore === total;
  const emoji = allCorrect ? "🌟" : quizScore >= Math.ceil(total / 2) ? "👍" : "💪";
  const praise = allCorrect
    ? "Alle Fragen richtig. Das war super!"
    : quizScore >= Math.ceil(total / 2)
      ? "Das war schon sehr gut!"
      : "Du lernst. Das ist toll!";

  content.innerHTML = `
    <article class="card completion-card--einfach" style="${getTopicColorStyle(topic.id)}" data-readable="true">
      <div class="einfach-quiz-result-emoji" aria-hidden="true">${emoji}</div>
      <h2 class="einfach-done-title">${quizScore} von ${total} richtig</h2>
      <p class="einfach-done-praise">${escapeHtml(praise)}</p>
      <div class="einfach-done-actions">
        <button type="button" class="primary-action einfach-done-btn" onclick="startEinfachQuiz('${escapeHtml(topic.id)}')">
          Quiz nochmal
        </button>
        <button type="button" class="secondary-action einfach-done-btn" onclick="startTopicMode('${escapeHtml(topic.id)}', 'short')">
          Lektionen nochmal
        </button>
        <button type="button" class="ghost-action einfach-done-btn" onclick="renderMenu()">
          Zur Themenübersicht
        </button>
      </div>
    </article>
  `;
  focusContent();
  renderLegalFooter();
}

function getQuizQuestions(topic) {
  if (!topic) return [];
  if (Array.isArray(topic.quizQuestions) && topic.quizQuestions.length) return topic.quizQuestions;
  if (Array.isArray(topic.quiz) && topic.quiz.length) return topic.quiz;
  return [];
}

function renderQuizQuestion() {
  stopReading();
  const topic = getCurrentTopic();
  const questions = getQuizQuestions(topic);
  if (!topic || !questions.length) return renderTopicChoice(currentTopicId);
  if (currentQuizIndex >= questions.length) return renderQuizResult();

  const q = questions[currentQuizIndex];
  const answers = Array.isArray(q.answers) ? q.answers : [];
  const progress = Math.round((currentQuizIndex / questions.length) * 100);

  setProgressVisible(true);
  setBottomNavVisible(false);
  setHeader(topic.title, "Quiz", `Frage ${currentQuizIndex + 1} von ${questions.length}`, "Quiz", progress);
  showNav(false, false);

  const answerHtml = answers.map((answer, index) => `
    <button type="button" class="answer-option" onclick="renderQuizFeedbackPage(${index})">
      ${escapeHtml(answer)}
    </button>
  `).join("");

  content.innerHTML = `
    ${buildUtilityBar()}${buildReadingToolbar()}
    <article class="card quiz-card" style="${getTopicColorStyle(topic.id)}" data-readable="true">
      <h2>Quiz</h2>
      <p class="quiz-question">${escapeHtml(q.question || "")}</p>
      <div class="answers">${answerHtml}</div>
      ${buildTaskHelpBox()}
    </article>
  `;
  focusContent();
  renderLegalFooter();
}

function renderQuizFeedbackPage(index) {
  stopReading();
  const topic = getCurrentTopic();
  const questions = getQuizQuestions(topic);
  const q = questions[currentQuizIndex];
  if (!topic || !q) return renderTopicChoice(currentTopicId);

  const answers = Array.isArray(q.answers) ? q.answers : [];
  const correctIndex = Number(q.correctIndex ?? q.correct ?? 0);
  const selectedText = answers[index] || "";
  const isCorrect = index === correctIndex;
  playSound(isCorrect ? "correct" : "wrong");

  if (isCorrect && !quizAnsweredCorrect.has(currentQuizIndex)) {
    quizScore += 1;
    quizAnsweredCorrect.add(currentQuizIndex);
  }

  const explanation = isCorrect
    ? (q.feedbackCorrect || "Das ist sicher. Du hast gut entschieden.")
    : (q.feedbackWrong || "Das ist nicht sicher. Du kannst die Frage noch einmal versuchen.");

  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader(topic.title, "Quiz", "Rückmeldung", isCorrect ? "Richtig" : "Nochmal üben", 100);

  content.innerHTML = `
    ${buildUtilityBar()}${buildReadingToolbar()}
    <article class="card feedback-page ${isCorrect ? "feedback-correct" : "feedback-wrong"}" data-readable="true">
      <h2>${isCorrect ? "Genau richtig!" : "Fast!"}</h2>

      <div class="feedback-selected">
        <h3>Deine Antwort:</h3>
        <p>${escapeHtml(selectedText)}</p>
      </div>

      <div class="feedback-explanation">
        <h3>Erklärung:</h3>
        <p>${escapeHtml(explanation)}</p>
      </div>

      <div class="feedback-actions">
        ${isCorrect
          ? `<button type="button" class="feedback-button primary" onclick="continueAfterQuizAnswer()">Weiter</button>`
          : `<button type="button" class="feedback-button secondary" onclick="renderQuizQuestion()">Nochmal versuchen</button>
             <button type="button" class="feedback-button ghost" onclick="startTopicMode('${escapeHtml(topic.id)}', 'full')">📖 Lektionen nachlesen</button>`
        }
      </div>

      ${!isCorrect ? buildTaskHelpBox() : ""}
    </article>
  `;
  announce(isCorrect ? "Genau richtig!" : "Fast! Das war noch nicht ganz richtig.");
  focusContent();
  renderLegalFooter();
}

function continueAfterQuizAnswer() {
  currentQuizIndex += 1;
  renderQuizQuestion();
}

function renderQuizResult() {
  stopReading();
  const topic = getCurrentTopic();
  const questions = getQuizQuestions(topic);
  const total = questions.length || 1;
  const percent = Math.round((quizScore / total) * 100);
  if (topic) markTopicDone(topic.id);
  playSound("success");

  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader(topic ? topic.title : "Quiz", "Quiz", "Ergebnis", "Fertig", 100);
  showNav(false, false);

  content.innerHTML = `
    ${buildUtilityBar()}${buildReadingToolbar()}
    <article class="card quiz-result-card" data-readable="true">
      <h2>Quiz fertig</h2>
      <p>Du hast ${quizScore} von ${total} Fragen richtig beantwortet.</p>
      <p>Das sind ${percent} Prozent.</p>
      <p>Wichtig ist: Du hast geübt.</p>
      <div class="certificate-actions">
        <button type="button" class="quiz-link quiz-button" onclick="renderCertificate('${escapeHtml(currentTopicId)}', ${quizScore}, ${total})">Urkunde ansehen</button>
        <button type="button" class="nav-button secondary" onclick="startQuiz('${escapeHtml(currentTopicId)}')">Quiz wiederholen</button>
        <button type="button" class="nav-button secondary" onclick="renderTopicChoice('${escapeHtml(currentTopicId)}')">Zurück zum Thema</button>
      </div>
    </article>
  `;
  focusContent();
  renderLegalFooter();
}

/* ============================================================
   Das große Quiz – Fragen aus allen 12 Themen gemischt
   Route: index.html#grosses-quiz
   ============================================================ */

const BIG_QUIZ_COUNT = 20;   /* So viele Fragen werden gezogen */
let bigQuizQuestions = [];   /* Array mit {question, answers, correct, topicId, topicTitle} */
let bigQuizIndex    = 0;
let bigQuizScore    = 0;

function buildBigQuizPool() {
  const pool = [];
  topics.forEach((topic) => {
    const qs = getQuizQuestions(topic);
    qs.forEach((q) => {
      pool.push({
        question:   q.question || "",
        answers:    Array.isArray(q.answers) ? q.answers : [],
        correct:    Number(q.correctIndex ?? q.correct ?? 0),
        topicId:    topic.id,
        topicTitle: topic.title,
      });
    });
  });
  /* Fisher-Yates-Shuffle */
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, BIG_QUIZ_COUNT);
}

function startBigQuiz() {
  bigQuizQuestions = buildBigQuizPool();
  bigQuizIndex  = 0;
  bigQuizScore  = 0;
  currentTopicId = null;
  renderBigQuizQuestion();
}

function renderBigQuizQuestion() {
  stopReading();
  if (bigQuizIndex >= bigQuizQuestions.length) return renderBigQuizResult();

  const q       = bigQuizQuestions[bigQuizIndex];
  const total   = bigQuizQuestions.length;
  const progress = Math.round((bigQuizIndex / total) * 100);

  setProgressVisible(true);
  setBottomNavVisible(false);
  setHeader("Das große Quiz", `Frage ${bigQuizIndex + 1} von ${total}`, "Frage", "Großes Quiz", progress);
  showNav(false, false);

  const answerHtml = q.answers.map((answer, index) => `
    <button type="button" class="answer-option" onclick="renderBigQuizFeedback(${index})">
      ${escapeHtml(answer)}
    </button>
  `).join("");

  content.innerHTML = `
    ${buildUtilityBar()}${buildReadingToolbar()}
    <article class="card quiz-card big-quiz-card" style="${getTopicColorStyle(q.topicId)}" data-readable="true">
      <p class="big-quiz-topic-badge">${escapeHtml(q.topicTitle)}</p>
      <h2>Großes Quiz</h2>
      <p class="quiz-question">${escapeHtml(q.question)}</p>
      <div class="answers">${answerHtml}</div>
    </article>
  `;
  focusContent();
  renderLegalFooter();
}

function renderBigQuizFeedback(selectedIndex) {
  stopReading();
  const q = bigQuizQuestions[bigQuizIndex];
  if (!q) return renderBigQuizResult();

  const isCorrect = selectedIndex === q.correct;
  if (isCorrect) {
    bigQuizScore += 1;
    playSound("correct");
  } else {
    playSound("wrong");
  }

  const feedbackClass = isCorrect ? "feedback-correct" : "feedback-wrong";
  const feedbackText  = isCorrect
    ? "✓ Genau richtig!"
    : `✗ Fast! Richtig wäre: „${escapeHtml(q.answers[q.correct] || "")}"`;

  const isLast = bigQuizIndex >= bigQuizQuestions.length - 1;

  content.innerHTML = `
    ${buildUtilityBar()}${buildReadingToolbar()}
    <article class="card quiz-card big-quiz-card" style="${getTopicColorStyle(q.topicId)}" data-readable="true">
      <p class="big-quiz-topic-badge">${escapeHtml(q.topicTitle)}</p>
      <h2>Großes Quiz</h2>
      <p class="quiz-question">${escapeHtml(q.question)}</p>
      <div class="answers">
        ${q.answers.map((a, i) => `
          <div class="answer-option answer-shown ${i === q.correct ? "answer-correct" : (i === selectedIndex ? "answer-wrong" : "")}">
            ${i === q.correct ? "✓ " : (i === selectedIndex ? "✗ " : "")}${escapeHtml(a)}
          </div>`).join("")}
      </div>
      <p class="${feedbackClass}">${feedbackText}</p>
      <div class="certificate-actions">
        ${isLast
          ? `<button type="button" class="quiz-link quiz-button" onclick="renderBigQuizResult()">Ergebnis anzeigen</button>`
          : `<button type="button" class="quiz-link quiz-button" onclick="nextBigQuizQuestion()">Weiter</button>`
        }
      </div>
    </article>
  `;
  focusContent();
  renderLegalFooter();
}

function nextBigQuizQuestion() {
  bigQuizIndex += 1;
  renderBigQuizQuestion();
}

function renderBigQuizResult() {
  stopReading();
  const total   = bigQuizQuestions.length || 1;
  const percent = Math.round((bigQuizScore / total) * 100);
  playSound("success");

  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Das große Quiz", "Ergebnis", "Ergebnis", "Fertig", 100);
  showNav(false, false);

  const praise = percent >= 80
    ? "Sehr gut gemacht! Du weißt schon viel über das sichere Internet."
    : percent >= 50
    ? "Gut versucht! Schau dir die Themen noch einmal an."
    : "Kein Problem. Lerne weiter – jedes Mal wird es leichter.";

  content.innerHTML = `
    ${buildUtilityBar()}${buildReadingToolbar()}
    <article class="card quiz-result-card" data-readable="true">
      <h2>Großes Quiz – Fertig!</h2>
      <p>Du hast ${bigQuizScore} von ${total} Fragen richtig beantwortet.</p>
      <p>Das sind ${percent} Prozent.</p>
      <p>${escapeHtml(praise)}</p>
      <div class="certificate-actions">
        <button type="button" class="quiz-link quiz-button" onclick="startBigQuiz()">Quiz wiederholen</button>
        <button type="button" class="nav-button secondary" onclick="renderMenu()">Zur Themenübersicht</button>
      </div>
    </article>
  `;
  focusContent();
  renderLegalFooter();
}

/* ============================================================
   Urkunde – zum Ausdrucken, Name wird von Hand geschrieben
   ============================================================ */

function renderCertificate(topicId, score, total) {
  stopReading();
  const topic = getTopicById(topicId);
  if (!topic) return renderMenu();

  currentTopicId = topic.id;
  const today = new Date().toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" });
  const hasResult = typeof score === "number" && typeof total === "number" && total > 0;

  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader(topic.title, "Urkunde", "Urkunde", "Geschafft", 100);
  showNav(false, false);

  content.innerHTML = `
    <article class="card certificate-card" style="${getTopicColorStyle(topic.id)}" data-readable="true">
      <div class="certificate-frame">
        <div class="certificate-medal" aria-hidden="true">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
            <circle cx="32" cy="32" r="28" fill="var(--topic-color)" opacity="0.12"/>
            <circle cx="32" cy="32" r="22" fill="var(--topic-color)" opacity="0.2"/>
            <polygon points="32,12 36,24 49,24 39,32 43,44 32,37 21,44 25,32 15,24 28,24"
              fill="var(--topic-color)" opacity="0.9"/>
          </svg>
        </div>

        <p class="certificate-kicker">Urkunde</p>
        <h2>Sicher und selbstbestimmt im Internet</h2>

        <p class="certificate-text">Diese Urkunde gehört:</p>
        <p class="certificate-name-line" aria-hidden="true">&nbsp;</p>
        <p class="certificate-name-hint">Hier kannst du deinen Namen schreiben.</p>

        <p class="certificate-text">Du hast das Thema</p>
        <p class="certificate-topic">${escapeHtml(topic.title)}</p>
        <p class="certificate-text">gelernt und geübt.</p>
        <p class="certificate-warm">Du hast durchgehalten. Das ist wirklich toll!</p>

        ${hasResult ? `<p class="certificate-result">Quiz-Ergebnis: ${score} von ${total} Fragen richtig.</p>` : ""}

        <p class="certificate-date">Datum: ${escapeHtml(today)}</p>
        <p class="certificate-issuer">Sicher und selbstbestimmt im Internet · Alexianer Stift Tilbeck GmbH</p>
      </div>

      <div class="certificate-actions">
        <button type="button" class="quiz-link quiz-button" onclick="window.print()">Urkunde drucken</button>
        <button type="button" class="nav-button secondary" onclick="renderTopicChoice('${escapeHtml(topic.id)}')">Zurück zum Thema</button>
        <button type="button" class="nav-button secondary" onclick="renderMenu()">Zur Themenübersicht</button>
      </div>
    </article>
  `;
  focusContent();
  renderLegalFooter();
}

/* ============================================================
   Merk-Karte
   ============================================================ */

function renderMemoryCard(topicId) {
  stopReading();
  const topic = getTopicById(topicId);
  if (!topic) return renderMenu();

  currentTopicId = topic.id;
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Merk-Karte", topic.title, "Merk-Karte", "Merken", 100);
  showNav(false, false);

  const rules = Array.isArray(topic.memoryRules)
    ? topic.memoryRules.map(rule => `<li>${escapeHtml(rule)}</li>`).join("")
    : "";

  const questions = Array.isArray(topic.helpQuestions)
    ? topic.helpQuestions.map(question => `<li>${escapeHtml(question)}</li>`).join("")
    : "";

  content.innerHTML = `
    ${buildUtilityBar()}${buildReadingToolbar()}
    <article class="card memory-card" style="${getTopicColorStyle(topic.id)}" data-readable="true">
      <div class="symbol-heading">
        <span class="access-box-symbol" aria-hidden="true">${getIconHtml("remember")}</span>
        <h2>${escapeHtml(topic.title)}</h2>
      </div>

      <div class="memory-section">
        <h3>Das merke ich mir:</h3>
        <ol>${rules}</ol>
      </div>

      <div class="memory-section">
        <h3>Das kann ich fragen:</h3>
        <ul>${questions}</ul>
      </div>

      <p class="memory-help">Ich muss Probleme nicht allein lösen.</p>
      <p>Ich kann eine Person fragen, der ich vertraue.</p>

      <div class="certificate-actions">
        <button type="button" class="quiz-link quiz-button" onclick="window.print()">Merk-Karte drucken</button>
        <button type="button" class="nav-button secondary" onclick="renderTopicChoice('${escapeHtml(topic.id)}')">Zurück zum Thema</button>
      </div>
    </article>
  `;
  focusContent();
  renderLegalFooter();
}

/* ============================================================
   Navigation
   ============================================================ */

function goBack() {
  if (!currentTopicId) return renderMenu();

  const topic = getCurrentTopic();
  const lessons = getLessonsForMode(topic, currentMode);

  if (lessons.length && currentStep > 0) {
    currentStep -= 1;
    renderLesson();
    return;
  }

  /* Bei Schritt 0: zurück zur Einstiegsfrage (wenn vorhanden), sonst Themenauswahl */
  if (topic && topic.selfAssessment) {
    renderSelfAssessment();
  } else {
    renderTopicChoice(currentTopicId);
  }
}

function goNext() {
  const topic = getCurrentTopic();
  if (!topic) return renderMenu();

  const lessons = getLessonsForMode(topic, currentMode);
  if (lessons.length) {
    if (currentStep < lessons.length - 1) {
      currentStep += 1;
      renderLesson();
    } else {
      renderCompletionPage(topic.id);
    }
    return;
  }
  renderTopicChoice(topic.id);
}

/* ============================================================
   Alle Merk-Karten – druckbare Übersicht aller 12 Themen
   Route: index.html#merk-alle
   ============================================================ */

function renderAllMemoryCards() {
  stopReading();
  currentTopicId = null;
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Alle Merk-Karten", "Übersicht", "Alle Themen", "Drucken", 100);
  showNav(false, false);

  const allCards = topics.map(topic => {
    const rules = Array.isArray(topic.memoryRules)
      ? topic.memoryRules.map(r => `<li>${escapeHtml(r)}</li>`).join("")
      : "";
    const questions = Array.isArray(topic.helpQuestions)
      ? topic.helpQuestions.map(q => `<li>${escapeHtml(q)}</li>`).join("")
      : "";
    return `
      <div class="print-memory-card" style="${getTopicColorStyle(topic.id)}">
        <div class="print-memory-header">
          <span class="print-memory-icon" aria-hidden="true">${getIconHtml(topic.icon || "remember")}</span>
          <h2>${escapeHtml(topic.title)}</h2>
        </div>
        ${rules ? `<div class="print-memory-rules"><h3>Das merke ich mir:</h3><ol>${rules}</ol></div>` : ""}
        ${questions ? `<div class="print-memory-questions"><h3>Das kann ich fragen:</h3><ul>${questions}</ul></div>` : ""}
      </div>`;
  }).join("");

  content.innerHTML = `
    <section class="all-memory-page">
      <div class="all-memory-toolbar no-print">
        <button type="button" class="plain-back-button" onclick="renderMenu()">← Zur Themenübersicht</button>
        <button type="button" class="quiz-link quiz-button" onclick="window.print()">Alle drucken</button>
      </div>
      <h2 class="all-memory-heading no-print">Alle Merk-Karten</h2>
      <p class="all-memory-intro no-print">Alle 12 Themen auf einen Blick. Du kannst diese Seite ausdrucken.</p>
      <div class="print-memory-grid">${allCards}</div>
    </section>
  `;
  focusContent();
}

/* Direkter Einstieg über Link, zum Beispiel:
   index.html#datenschutz
   index.html#datenschutz:kurz
   index.html#datenschutz:quiz
   index.html#datenschutz:merk */
function handleHash() {
  const hash = decodeURIComponent(window.location.hash.replace("#", "").trim());
  if (!hash) {
    /* Mehrere Personen am Gerät: zuerst fragen „Wer lernt gerade?".
       Bei nur einer Person ohne Umweg weiter. */
    if (profiles.length > 1) return renderProfilePicker();
    return languageChosen ? renderMenu() : renderStart();
  }

  /* Sonderrouten */
  if (hash === "grosses-quiz") return startBigQuiz();
  if (hash === "merk-alle") return renderAllMemoryCards();

  const [topicId, action] = hash.split(":");
  const topic = getTopicById(topicId);
  if (!topic) return renderMenu();

  if (action === "kurz" || action === "short") return startTopicMode(topicId, "short");
  if (action === "quiz") return startQuiz(topicId);
  if (action === "merk" || action === "memory") return renderMemoryCard(topicId);
  return renderTopicChoice(topicId);
}

/* ============================================================
   Ereignisse
   ============================================================ */

backButton.addEventListener("click", goBack);
nextButton.addEventListener("click", goNext);
homeButton.addEventListener("click", renderMenu);

if (soundToggleButton) {
  soundToggleButton.addEventListener("click", toggleSound);
  updateSoundButton();
}

document.addEventListener("mouseover", playHoverSound, true);
document.addEventListener("focusin", playHoverSound, true);

/* Vorlese-Knöpfe in Karten: Karte darf sich dabei nicht öffnen. */
function handleReadCardEvent(event) {
  const button = event.target.closest("[data-read-card-text], [data-read-card-title]");
  if (!button) return;

  if (event.type === "keydown" && event.key !== "Enter" && event.key !== " ") return;

  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();

  const text = button.getAttribute("data-read-card-text") || button.getAttribute("data-read-card-title");
  readShortText(text);
}

document.addEventListener("click", handleReadCardEvent, true);
document.addEventListener("keydown", handleReadCardEvent, true);

/* Escape schließt Overlays. */
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeCalmOverlay();
    hideGlossar();
  }
});

/* Glossar initialisieren */
initGlossar();
initGlossarEvents();

/* Profile laden (oder beim ersten Mal anlegen und vorhandene Einstellungen
   übernehmen), dann die Einstellungen des aktiven Profils anwenden. */
ensureProfiles();
loadActiveProfileSettings();

/* Wenn Nutzer das System-Theme wechselt: Seite neu rendern,
   damit die themenspezifischen Inline-Farben (getTopicColorStyle)
   auf die Dark-Mode-Palette umschalten. */
if (window.matchMedia) {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    /* Aktuelle Ansicht neu laden – ohne Seitenwechsel */
    if (currentTopicId) {
      /* Inline-Styles auf sichtbaren Karten per querySelectorAll neu setzen */
      const style = getTopicColorStyle(currentTopicId);
      document.querySelectorAll("[style*='--topic-color']").forEach(el => {
        el.setAttribute("style", style);
      });
    }
    /* Topic-Karten auf der Startseite (falls gerade sichtbar) */
    document.querySelectorAll(".topic-card[style]").forEach(el => {
      const id = [...el.classList].find(c => c.startsWith("topic-") && c !== "topic-card" && !c.endsWith("--done"));
      if (id) el.setAttribute("style", getTopicColorStyle(id.replace("topic-", "")));
    });
  });
}

/* ============================================================
   Offline-Banner
   ============================================================ */

function showOfflineBanner() {
  if (document.getElementById("offline-banner")) return;
  const banner = document.createElement("div");
  banner.id = "offline-banner";
  banner.setAttribute("role", "alert");
  banner.setAttribute("aria-live", "assertive");
  banner.innerHTML = `
    <span class="offline-icon" aria-hidden="true">📵</span>
    <span>Du bist gerade offline. Gespeicherte Seiten funktionieren noch.</span>
    <button type="button" class="offline-close" onclick="hideOfflineBanner()" aria-label="Hinweis schließen">✕</button>
  `;
  document.body.prepend(banner);
}

function hideOfflineBanner() {
  const banner = document.getElementById("offline-banner");
  if (banner) banner.remove();
}

window.addEventListener("offline", showOfflineBanner);
window.addEventListener("online",  hideOfflineBanner);

/* Beim Start prüfen, ob bereits offline */
if (!navigator.onLine) showOfflineBanner();

document.addEventListener("DOMContentLoaded", handleHash);
window.addEventListener("hashchange", handleHash);
