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
/* Richtung des Seitenwechsels für das sanfte Blättern (Weiter = vorwärts). */
let pageDirection = "forward";
let currentQuizIndex = 0;
let quizScore = 0;
let quizAnsweredCorrect = new Set();
let soundEnabled = false;
let motionEnabled = true;
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
/* Einstellungen liegen jetzt als eigene Seite im Hauptmenü. */
function toggleSettings() { renderSettingsPage(); }
/* Wurde in dieser Sitzung mindestens ein Thema fertig gemacht?
   (Steuert, wann die freiwillige Lernstand-Frage erscheint.) */
let finishedTopicThisSession = false;
const LEARN_MODES = {
  allein:     { title: "Ich lerne allein",      desc: "Die App erklärt dir alles. Mit Vorlesen.",        icon: "understand" },
  app:        { title: "Mit Hilfe der App",     desc: "Jede Seite wird dir vorgelesen. Große Schrift.",  icon: "message" },
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
  /* Auf der Seite bleiben, auf der die Person gerade ist (Vorhersehbarkeit) */
  if (activeTab === "einstellungen") renderSettingsPage();
  else renderMenu();
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
const MOTION_KEY    = "motion";
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

/* Wird dieses Gerät geteilt? Steuert, ob beim Öffnen „Wer lernt?" kommt. */
let deviceShared = false;
const DEVICE_SHARED_KEY = "geraet-geteilt";
function loadDeviceShared() {
  try { deviceShared = window.localStorage.getItem(DEVICE_SHARED_KEY) === "1"; }
  catch (e) { deviceShared = false; }
}
function setDeviceShared(shared) {
  deviceShared = !!shared;
  try { window.localStorage.setItem(DEVICE_SHARED_KEY, deviceShared ? "1" : "0"); } catch (e) { /* nichts tun */ }
}
/* Zwischenspeicher beim Zeichen-Bauen (Icon → Farbe → Zahl). */
let signDraft = { icon: null, color: null, number: null };
/* Läuft gerade der Erststart-Ablauf? (Zeichen → Sprache → Vorwissen → Themen) */
let onboarding = false;
/* Vorwissen je Profil: "neu" oder "erfahren". Steuert die Mengen-Empfehlung. */
const VORWISSEN_KEY = "vorwissen";

const AVATARS = [
  { e: "🦊", n: "Fuchs" }, { e: "🐰", n: "Hase" }, { e: "🦉", n: "Eule" },
  { e: "🐢", n: "Schildkröte" }, { e: "🐬", n: "Delfin" }, { e: "🦋", n: "Schmetterling" },
  { e: "🌻", n: "Blume" }, { e: "⚽", n: "Ball" }, { e: "🚲", n: "Fahrrad" },
  { e: "🎸", n: "Gitarre" }, { e: "🐧", n: "Pinguin" }, { e: "🐱", n: "Katze" }
];

/* ============================================================
   Eigenes Zeichen: Symbol (weiß) + Hintergrund-Farbe + Zahl 0–10.
   Erwachsen, gut unterscheidbar, viele Kombinationen.
   ============================================================ */
const SIGN_ICONS = [
  { key: "star",     name: "Stern",   svg: `<polygon points="50,16 61,39 86,42 67,59 72,84 50,72 28,84 33,59 14,42 39,39" fill="#fff"/>` },
  { key: "heart",    name: "Herz",    svg: `<path d="M50 80 C20 58 24 32 44 36 C50 37 50 43 50 45 C50 43 50 37 56 36 C76 32 80 58 50 80 Z" fill="#fff"/>` },
  { key: "moon",     name: "Mond",    svg: `<path d="M64 22 a30 30 0 1 0 14 53 a24 24 0 0 1 -14 -53 z" fill="#fff"/>` },
  { key: "sun",      name: "Sonne",   svg: `<circle cx="50" cy="50" r="14" fill="#fff"/><g stroke="#fff" stroke-width="5" stroke-linecap="round"><line x1="50" y1="20" x2="50" y2="28"/><line x1="50" y1="72" x2="50" y2="80"/><line x1="20" y1="50" x2="28" y2="50"/><line x1="72" y1="50" x2="80" y2="50"/><line x1="29" y1="29" x2="35" y2="35"/><line x1="65" y1="65" x2="71" y2="71"/><line x1="71" y1="29" x2="65" y2="35"/><line x1="35" y1="65" x2="29" y2="71"/></g>` },
  { key: "leaf",     name: "Blatt",   svg: `<path d="M28 72 C28 40 60 28 78 26 C76 50 56 74 28 72 Z" fill="#fff"/>` },
  { key: "key",      name: "Schlüssel", svg: `<circle cx="38" cy="42" r="14" fill="none" stroke="#fff" stroke-width="7"/><line x1="47" y1="51" x2="78" y2="82" stroke="#fff" stroke-width="7" stroke-linecap="round"/><line x1="68" y1="72" x2="76" y2="64" stroke="#fff" stroke-width="7" stroke-linecap="round"/>` },
  { key: "mountain", name: "Berg",    svg: `<path d="M16 78 L42 38 L58 60 L70 42 L88 78 Z" fill="#fff"/>` },
  { key: "drop",     name: "Tropfen", svg: `<path d="M50 18 C66 44 72 56 72 66 a22 22 0 0 1 -44 0 C28 56 34 44 50 18 Z" fill="#fff"/>` },
  { key: "music",    name: "Note",    svg: `<path d="M40 68 a9 9 0 1 0 9 9 V42 l24 -7 v20 a9 9 0 1 0 9 9 V24 l-42 12 z" fill="#fff"/>` },
  { key: "anchor",   name: "Anker",   svg: `<circle cx="50" cy="24" r="7" fill="none" stroke="#fff" stroke-width="5"/><line x1="50" y1="31" x2="50" y2="78" stroke="#fff" stroke-width="6" stroke-linecap="round"/><line x1="34" y1="46" x2="66" y2="46" stroke="#fff" stroke-width="6" stroke-linecap="round"/><path d="M24 56 a26 26 0 0 0 52 0" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/>` },
  { key: "ball",     name: "Ball",    svg: `<circle cx="50" cy="50" r="24" fill="none" stroke="#fff" stroke-width="6"/><polygon points="50,40 60,47 56,59 44,59 40,47" fill="#fff"/>` },
  { key: "cloud",    name: "Wolke",   svg: `<path d="M34 68 a15 15 0 0 1 1 -30 a19 19 0 0 1 36 5 a13 13 0 0 1 -3 25 z" fill="#fff"/>` }
];
const SIGN_COLORS = [
  { name: "Blau",    hex: "#00528f" },
  { name: "Hellblau", hex: "#3e96be" },
  { name: "Türkis",  hex: "#0f6e56" },
  { name: "Grün",    hex: "#2E7D4F" },
  { name: "Lila",    hex: "#534ab7" },
  { name: "Pink",    hex: "#993556" },
  { name: "Rot",     hex: "#B5152B" },
  { name: "Orange",  hex: "#b45309" }
];

/* Zeichen als HTML anzeigen. Neu = Symbol+Farbe+Zahl; alt = Emoji (Rückfall). */
function signHtml(profile, cls) {
  if (!profile) return "";
  const extra = cls ? " " + cls : "";
  if (profile.icon) {
    const ic = SIGN_ICONS.find(s => s.key === profile.icon);
    const color = profile.color || "#00528f";
    const num = (profile.number !== undefined && profile.number !== null)
      ? `<span class="profile-sign-num">${escapeHtml(String(profile.number))}</span>` : "";
    return `<span class="profile-sign${extra}" style="background:${color}" aria-hidden="true"><svg viewBox="0 0 100 100">${ic ? ic.svg : ""}</svg>${num}</span>`;
  }
  return `<span class="profile-sign profile-sign--emoji${extra}" aria-hidden="true">${escapeHtml(profile.avatar || "🙂")}</span>`;
}

/* Zeichen als Text benennen (für Vorlese-/Screenreader-Beschriftung). */
function signLabel(profile) {
  if (!profile) return "Profil";
  if (profile.icon) {
    const ic = SIGN_ICONS.find(s => s.key === profile.icon);
    const col = SIGN_COLORS.find(c => c.hex === profile.color);
    const parts = [];
    if (ic) parts.push(ic.name);
    if (col) parts.push(col.name);
    if (profile.number !== undefined && profile.number !== null) parts.push("Zahl " + profile.number);
    return parts.join(", ") || "Zeichen";
  }
  const found = AVATARS.find(a => a.e === profile.avatar);
  return found ? found.n : "Bild";
}

/* Alle Einstellungs-Schlüssel, die pro Profil getrennt gespeichert werden.
   Feste Namen (müssen zu LANGUAGE_KEY, FONT_SIZE_KEY, STORAGE_KEY,
   LEARN_MODE_KEY, LEARN_MODE_SEEN_KEY passen) – bewusst als Strings, damit
   die Deklarations-Reihenfolge im Modul keine Rolle spielt. */
const PROFILE_BASE_KEYS = ["language-level", "font-size-step", "lernstand", "lern-weg", "lern-weg-gesehen", "vorwissen"];

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
  /* Gibt es Alt-Daten eines früheren Einzel-Nutzers? Dann in ein
     Standard-Profil übernehmen (nichts geht verloren).
     Wenn es wirklich der erste Besuch ist (keine Alt-Daten): KEIN
     Auto-Profil – das Onboarding lässt die Person zuerst ein Bild wählen. */
  let hasLegacy = false;
  PROFILE_BASE_KEYS.forEach(base => {
    try { if (window.localStorage.getItem(base) !== null) hasLegacy = true; } catch (e) { /* egal */ }
  });
  if (!hasLegacy) return;
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
  loadReadTempo();      /* Vorlese-Tempo (normal / langsam) */
  loadMotion();         /* liest + wendet Bewegungs-Einstellung an */
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

/* Sitzungs-Gedächtnis für Erfolge: erkennt „geschafft" auch OHNE
   gespeicherten Lernstand (Bandura: Erfolg muss sofort sichtbar sein).
   Nur im Arbeitsspeicher – verschwindet beim Schließen (KDG-konform §14). */
let sessionDoneTopics = new Set();

function markTopicDone(topicId) {
  sessionDoneTopics.add(topicId);
  if (!isProgressEnabled()) return;
  const progress = loadProgress() || { enabled: true, done: {} };
  progress.done = progress.done || {};
  /* Zeitstempel speichern – für Wiederholungs-Erinnerung */
  const existing = progress.done[topicId];
  progress.done[topicId] = { ts: Date.now(), count: (existing && existing.count ? existing.count + 1 : 1) };
  saveProgress(progress);
}

function isTopicDone(topicId) {
  if (sessionDoneTopics.has(topicId)) return true;
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
  /* Zählt gespeicherte UND nur in dieser Sitzung geschaffte Themen */
  return topics.filter(topic => isTopicDone(topic.id)).length;
}

/* Nächstes Thema vorschlagen: das erste Thema, das noch nicht geschafft ist.
   Führung ohne Zwang – die freie Wahl bleibt immer erhalten. */
function getNextTopicSuggestion() {
  return topics.find((topic) => !isTopicDone(topic.id)) || null;
}

function toggleProgressSaving() {
  if (isProgressEnabled()) {
    setProgressEnabled(false);
    sessionDoneTopics = new Set();
    announce("Der Lernstand wurde gelöscht. Es wird nichts mehr gespeichert.");
  } else {
    setProgressEnabled(true);
    /* Erfolge aus dieser Sitzung mitnehmen – sonst wäre das gerade
       geschaffte Thema verloren (Erfolgserlebnis sichern). */
    sessionDoneTopics.forEach((id) => markTopicDone(id));
    announce("Der Lernstand wird jetzt auf diesem Gerät gespeichert.");
  }
  /* Auf der Seite bleiben, auf der die Person gerade ist */
  if (activeTab === "lernweg") renderMyPath();
  else renderMenu();
}

/* Lernstand direkt auf der Abschluss-Seite einschalten – ohne die Seite
   neu zu bauen (kein Kontextverlust, kein Sprung). */
function enableProgressInline(button) {
  setProgressEnabled(true);
  sessionDoneTopics.forEach((id) => markTopicDone(id));
  announce("Der Lernstand wird jetzt auf diesem Gerät gespeichert.");
  const box = button.closest(".progress-consent");
  if (box) box.innerHTML = `<p class="progress-consent-title">✓ Ich merke mir deinen Lernstand. Nur auf diesem Gerät. Ohne Namen.</p>`;
}

/* ============================================================
   Wörter-Hilfe (Glossar)
   Schwierige Wörter werden hervorgehoben.
   Antippen öffnet eine kurze Erklärung in Einfacher Sprache.
   ============================================================ */

const GLOSSAR = {
  "internet":               "Das Internet ist ein riesiges Netz aus vielen Computern. So kann man Internetseiten besuchen und Nachrichten schicken.",
  "selbstbestimmt":         "Selbstbestimmt heißt: Du entscheidest selbst. Du wählst, wie und was du lernst.",
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
  "ki":                     "KI steht für Künstliche Intelligenz. Das ist ein Computer-Programm. Es lernt. Und es löst selbst Aufgaben. Zum Beispiel ChatGPT.",
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
  "abo":                    "Ein Abo ist ein Vertrag. Du bekommst etwas regelmäßig. Und du zahlst regelmäßig Geld.",
  "abo-falle":              "Eine Abo-Falle ist ein Trick. Du klickst auf etwas. Und plötzlich hast du einen teuren Vertrag.",
  "abzocke":                "Abzocke ist ein Trick mit Geld. Jemand will dir Geld wegnehmen. Mit falschen Versprechen.",
  "fake news":              "Fake News sind falsche Nachrichten. Sie sehen echt aus. Aber sie stimmen nicht.",
  "fake-profil":            "Ein Fake-Profil ist ein falsches Profil. Die Person gibt sich als jemand anderes aus.",
  "standort":               "Der Standort ist der Ort, wo du gerade bist. Das Handy kann deinen Standort an Apps senden.",
  "emoji":                  "Ein Emoji ist ein kleines Bild in einer Nachricht. Zum Beispiel ein lachendes Gesicht.",
  "kommentar":              "Ein Kommentar ist eine Antwort unter einem Beitrag. Andere können deinen Kommentar lesen.",
  "posten":                 "Posten heißt: etwas ins Internet stellen. Zum Beispiel ein Foto oder einen Text.",
  "blockieren":             "Blockieren heißt: Du sperrst eine Person. Sie kann dir dann nicht mehr schreiben.",
  "melden":                 "Melden heißt: Du sagst der App, dass etwas nicht in Ordnung ist. Die App prüft das dann.",
  "sprach-nachricht":       "Eine Sprach-Nachricht ist eine gesprochene Nachricht. Du nimmst deine Stimme auf und schickst sie.",
  "gewinnspiel":            "Bei einem Gewinnspiel kann man etwas gewinnen. Vorsicht: Viele Gewinnspiele im Internet sind ein Trick.",
  "kauf auf rechnung":      "Kauf auf Rechnung heißt: Du bekommst die Ware zuerst. Du zahlst erst danach. Das ist sicher.",
  "vorkasse":               "Vorkasse heißt: Du zahlst zuerst. Die Ware kommt erst danach. Bei fremden Shops ist das riskant.",
  "online-shop":            "Ein Online-Shop ist ein Geschäft im Internet. Du bestellst dort Waren. Sie kommen mit der Post.",
  "bewertung":              "Eine Bewertung ist die Meinung von Kunden. Zum Beispiel Sterne von 1 bis 5. Sie hilft beim Prüfen.",
  "zwei-faktor-anmeldung":  "Zwei-Faktor heißt: doppelt sichern. Du gibst dein Passwort ein. Dann noch eine Zahl von deinem Handy. Das ist sehr sicher.",
  "passkey":                "Ein Passkey ist eine Anmeldung ohne Passwort. Du bestätigst mit dem Finger oder mit deinem Gesicht. Das ist sehr sicher.",
  "fakeshop-finder":        "Der Fakeshop-Finder ist eine Prüf-Seite von der Verbraucher-Zentrale. Du gibst die Adresse vom Shop ein. Die Seite sagt dir: sicher oder Vorsicht.",
  "quishing":               "Quishing ist Betrug mit falschen QR-Codes. Betrüger kleben falsche Codes über echte. Scanne nur Codes von vertrauten Menschen."
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
const soundToggleButton = document.getElementById("soundToggleButton");
const motionToggleButton = document.getElementById("motionToggleButton");
const liveRegion = document.getElementById("liveRegion");
const orientLine = document.getElementById("orientLine");

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

/* Dunklere Text-Varianten für Marken-Farben, die als SCHRIFT auf Weiß
   zu hell sind (Urkunde, Druck-Merk-Karte). AA: mindestens 4,5:1.
   Im Dark Mode sind alle Themen-Farben hell genug (>= 5,4:1). */
const TOPIC_TEXT_LIGHT = {
  whatsapp: "#178643",
  facebook: "#166fe3",
  snapchat: "#897100",
  hilfe:    "#c0501a"
};

function getTopicColorStyle(topicId) {
  const palette = isDarkMode() ? TOPIC_COLORS_DARK : TOPIC_COLORS;
  const [color, ring, bg, icon] = palette[topicId] || palette.datenschutz;
  const textColor = isDarkMode() ? color : (TOPIC_TEXT_LIGHT[topicId] || color);
  return `--topic-text: ${textColor}; --topic-color:${color};--topic-ring:${ring};--topic-hover-bg:${bg};--topic-icon-bg:${icon}`;
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
   Alex-&-Tilda-Rollen-Figuren
   Feste Rollen mit beschreibenden Leichte-Sprache-Alt-Texten.
   Diese Bilder tragen Bedeutung -> echtes alt (nicht aria-hidden).
   ============================================================ */

const ROLE_FIGURES = {
  erklaeren:  { file: "alex-tilda-erklaeren.webp",  alt: "Tilda erklärt dir das Thema." },
  achtung:    { file: "alex-tilda-achtung.webp",    alt: "Tilda hebt die Hand. Achtung: Hier ist Vorsicht wichtig." },
  hilfe:      { file: "alex-tilda-hilfe.webp",      alt: "Alex zeigt dir, wo du Hilfe findest." },
  erfolg:     { file: "alex-tilda-erfolg.webp",     alt: "Alex und Tilda freuen sich mit dir. Gut gemacht." },
  nachdenken: { file: "alex-tilda-nachdenken.webp", alt: "Tilda überlegt. Was weißt du schon?" }
};

function roleFigure(role, extraClass = "") {
  const f = ROLE_FIGURES[role];
  if (!f) return "";
  const cls = "role-figure" + (extraClass ? " " + extraClass : "");
  return `<img class="${cls}" src="assets/figures/${f.file}" alt="${escapeHtml(f.alt)}" loading="lazy" onerror="this.remove()">`;
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
  /* Orientierungssatz zurücksetzen – Seiten setzen ihn danach passend neu */
  setOrientation("");
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

/* ============================================================
   Hauptmenü (Tab-Leiste), Orientierungssatz, Routen-Gedächtnis
   ============================================================ */

/* Merkt sich den aktiven Hauptmenü-Punkt. Lektionen und Quiz erben den
   Punkt der Seite, von der sie gestartet wurden (Kontext bleibt sichtbar). */
let activeTab = "start";

function setActiveTab(name) {
  activeTab = name;
  document.querySelectorAll(".main-tabbar .tab-item").forEach((item) => {
    const isActive = item.dataset.tab === name;
    item.classList.toggle("is-active", isActive);
    if (isActive) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });
}

/* Ein Satz sagt immer, wo die Person gerade ist (COGA: Orientierung).
   setHeader() leert den Satz; Seiten setzen ihn danach neu. */
function setOrientation(text) {
  if (!orientLine) return;
  orientLine.classList.toggle("is-hidden", !text);
  if (!text) {
    orientLine.textContent = "";
    orientLine.style.borderLeftColor = "";
    return;
  }
  /* Dreifache Kodierung desselben Signals (UDL): Farbe (Rand), Bild
     (Themen-Symbol) und Satz. Dazu ein Hör-Knopf für Nicht-Leser. */
  let color = "";
  let iconHtml = "";
  if (typeof currentTopicId !== "undefined" && currentTopicId) {
    const palette = isDarkMode() ? TOPIC_COLORS_DARK : TOPIC_COLORS;
    const p = palette[currentTopicId];
    if (p) color = p[0];
    const topic = getTopicById(currentTopicId);
    if (topic && topic.icon) iconHtml = `<span class="orient-icon" aria-hidden="true">${getIconHtml(topic.icon)}</span>`;
  }
  orientLine.innerHTML = `${iconHtml}<span class="orient-text">${escapeHtml(text)}</span>` +
    `<span class="card-read-button card-read-button--orient" role="button" tabindex="0" data-read-card-text="${escapeHtml(text)}" aria-label="Vorlesen, wo du gerade bist"><svg class="rb-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L9 9H4z" fill="currentColor"/><path d="M16 8.6a4 4 0 0 1 0 6.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18.6 6.2a7 7 0 0 1 0 11.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>`;
  orientLine.style.borderLeftColor = color;
}

/* Schreibt die aktuelle Seite in die Adresszeile, damit der
   Zurück-Knopf des Browsers vorhersehbar funktioniert. */
let handlingRoute = false;

function rememberRoute(route) {
  if (handlingRoute) return; /* Aufruf kam aus handleHash: Hash stimmt schon */
  const target = "#" + route;
  if (window.location.hash === target) return;
  try {
    /* Beim allerersten Aufruf (noch kein Hash) keinen zusätzlichen
       Verlaufs-Eintrag anlegen, sonst führt „Zurück" ins Leere. */
    if (!window.location.hash) history.replaceState(null, "", target);
    else history.pushState(null, "", target);
  } catch (e) { /* nichts tun */ }
}

/* Klick auf einen Hauptmenü-Punkt */
function navigateTab(name) {
  stopReading();
  /* Wer während der Einweisung ins Menü wechselt, hat sich für den
     freien Weg entschieden – die geführte Einweisung endet dann sauber
     (Selbstbestimmung; verhindert spätere Überraschungs-Sprünge). */
  onboarding = false;
  if (name === "start") return renderIntro();
  if (name === "themen") return renderMenu();
  if (name === "lernweg") return renderMyPath();
  if (name === "hilfe") return renderHelpPage();
  if (name === "einstellungen") return renderSettingsPage();
}

function announce(text) {
  if (!liveRegion) return;
  /* Kurz leeren, damit Screenreader dieselbe Meldung erneut vorliest */
  liveRegion.textContent = "";
  if (text) setTimeout(() => { liveRegion.textContent = text; }, 50);
}

function focusContent() {
  content.focus();
  /* Hör-Modus („Mit Hilfe der App"): jede Seite liest sich selbst vor –
     sanft verzögert, jederzeit mit Stopp abbrechbar (Angebot, kein Zwang). */
  if (typeof learnMode !== "undefined" && learnMode === "app" && supportsSpeech()) {
    window.setTimeout(() => { if (learnMode === "app") readStart(); }, 450);
  }
  const reduceMotion = !motionEnabled || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  applyGlossar();
}

/* ============================================================
   Töne (standardmäßig aus, keine Speicherung)
   ============================================================ */

function updateSoundButton() {
  /* Aktualisiert alle Ton-Schalter (z. B. auf der Einstellungen-Seite) */
  document.querySelectorAll(".sound-toggle").forEach((button) => {
    button.classList.toggle("sound-on", soundEnabled);
    button.classList.toggle("sound-off", !soundEnabled);
    button.textContent = soundEnabled ? "Töne an" : "Töne aus";
    button.setAttribute("aria-pressed", soundEnabled ? "true" : "false");
    button.setAttribute(
      "aria-label",
      soundEnabled ? "Töne sind an. Klicken zum Ausschalten." : "Töne sind aus. Klicken zum Einschalten."
    );
  });
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

/* ============================================================
   Bewegung / Animationen (Schalter; Default = System-Einstellung)
   ============================================================ */

function applyMotion() {
  document.documentElement.classList.toggle("no-motion", !motionEnabled);
}

function updateMotionButton() {
  /* Aktualisiert alle Bewegungs-Schalter (z. B. auf der Einstellungen-Seite) */
  document.querySelectorAll(".motion-toggle").forEach((button) => {
    button.classList.toggle("motion-on", motionEnabled);
    button.classList.toggle("motion-off", !motionEnabled);
    button.textContent = motionEnabled ? "Bewegung an" : "Bewegung aus";
    button.setAttribute("aria-pressed", motionEnabled ? "true" : "false");
    button.setAttribute(
      "aria-label",
      motionEnabled ? "Bewegungen sind an. Klicken zum Ausschalten." : "Bewegungen sind aus. Klicken zum Einschalten."
    );
  });
}

function loadMotion() {
  const saved = pGet(MOTION_KEY);
  if (saved === "on") motionEnabled = true;
  else if (saved === "off") motionEnabled = false;
  else motionEnabled = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  applyMotion();
  updateMotionButton();
}

function toggleMotion() {
  motionEnabled = !motionEnabled;
  pSet(MOTION_KEY, motionEnabled ? "on" : "off");
  applyMotion();
  updateMotionButton();
  announce(motionEnabled ? "Bewegungen sind eingeschaltet." : "Bewegungen sind ausgeschaltet.");
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

/* Zustand für satzweises Vorlesen mit Mitlesen-Hervorhebung. */
let _readQueue = [];
let _readIndex = 0;
let _readRate = 0.85;
let _readGen = 0;   /* macht alte Vorlese-Abläufe ungültig */

function clearReadingHighlight() {
  document.querySelectorAll(".reading-highlight").forEach(e => e.classList.remove("reading-highlight"));
}

function readShortText(text, el) {
  if (!supportsSpeech()) return;
  const cleaned = String(text || "").trim();
  if (!cleaned) return;
  _readGen++;
  const gen = _readGen;
  window.speechSynthesis.cancel();
  clearReadingHighlight();
  if (el) el.classList.add("reading-highlight");
  const utterance = new SpeechSynthesisUtterance(cleaned);
  utterance.lang = "de-DE";
  utterance.rate = 0.82;
  utterance.pitch = 1;
  utterance.onend = () => { if (gen === _readGen) clearReadingHighlight(); };
  utterance.onerror = () => { if (gen === _readGen) clearReadingHighlight(); };
  window.speechSynthesis.speak(utterance);
}

function stopReading() {
  if (!supportsSpeech()) return;
  _readGen++;                 /* laufenden Ablauf ungültig machen */
  window.speechSynthesis.cancel();
  clearReadingHighlight();
  setReadingActive(null);
  updateReadingStatus("Vorlesen gestoppt.");
}

/* Markiert den aktiven Vorlese-Knopf grün, damit man immer sieht, was läuft. */
function setReadingActive(mode) {
  const n = document.querySelector(".reading-button-normal");
  const s = document.querySelector(".reading-button-slow");
  if (n) { n.classList.toggle("is-active", mode === "normal"); n.setAttribute("aria-pressed", mode === "normal" ? "true" : "false"); }
  if (s) { s.classList.toggle("is-active", mode === "slow"); s.setAttribute("aria-pressed", mode === "slow" ? "true" : "false"); }
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

/* Liest die Seite Satz für Satz vor und hebt den aktuellen Satz hervor
   (Mitlesen, §3). Satzweise = zuverlässig auf allen Geräten. */
function readCurrentPage(rate) {
  if (!supportsSpeech()) {
    updateReadingStatus("Vorlesen geht auf diesem Gerät nicht.");
    return;
  }
  _readGen++;
  const gen = _readGen;
  window.speechSynthesis.cancel();
  clearReadingHighlight();

  const root = document.querySelector("[data-readable='true']") || content;
  /* Antwort-Optionen werden MIT vorgelesen (nummeriert) – sonst hört eine
     nicht lesende Person die Frage, aber nie die Antworten. */
  const OPTION = ".answer-option, .sa-option-btn, .sample-option";
  const els = root
    ? Array.from(root.querySelectorAll("h2, h3, p, li, " + OPTION)).filter(el => {
        const isOption = el.matches(OPTION);
        if (!isOption && el.closest(".reading-toolbar, nav, footer, button")) return false;
        return cleanSpeechText(el.textContent).length > 0;
      })
    : [];
  /* Optionen nummerieren: „Antwort 1: …" */
  els.forEach(el => {
    if (!el.matches || !el.matches(OPTION) || !el.parentElement) return;
    const geschwister = Array.from(el.parentElement.children).filter(c => c.matches && c.matches(OPTION));
    const n = geschwister.indexOf(el) + 1;
    if (n > 0) el.setAttribute("data-read-prefix", "Antwort " + n + ":");
  });
  /* Zuerst sagen, WO die Person ist – dann den Inhalt (Orientierung zum Hören) */
  if (orientLine && !orientLine.classList.contains("is-hidden")) {
    const orientSpan = orientLine.querySelector(".orient-text");
    if (orientSpan) els.unshift(orientSpan);
  }
  /* Handlungsansage am Ende: Nicht-Leser erfahren sonst nie, welche
     Knöpfe es gibt. Kurz, immer gleiches Muster (Vorhersehbarkeit). */
  const hatOptionen = root && root.querySelector(OPTION);
  if (hatOptionen) {
    els.push({ pseudoText: "Tippe jetzt deine Antwort." });
  } else if (nextButton && !nextButton.disabled) {
    els.push({ pseudoText: backButton && !backButton.disabled
      ? "Du kannst jetzt Weiter drücken. Oder Zurück."
      : "Du kannst jetzt Weiter drücken." });
  } else {
    const start = root ? root.querySelector(".topic-start-button, .intro-start-button, .primary-action") : null;
    if (start) els.push({ pseudoText: "Drücke den großen Knopf: " + cleanSpeechText(start.textContent) + "." });
  }
  if (!els.length) {
    updateReadingStatus("Es gibt keinen Text zum Vorlesen.");
    return;
  }
  _readQueue = els;
  _readIndex = 0;
  _readRate = rate || speechRate;
  speakNextSentence(gen);
}

function speakNextSentence(gen) {
  if (gen !== _readGen) return;
  clearReadingHighlight();
  if (_readIndex >= _readQueue.length) {
    setReadingActive(null);
    updateReadingStatus("Vorlesen fertig.");
    return;
  }
  const el = _readQueue[_readIndex];
  const istPseudo = !!(el && el.pseudoText);
  const prefix = (!istPseudo && el.getAttribute && el.getAttribute("data-read-prefix")) ? el.getAttribute("data-read-prefix") + " " : "";
  const text = istPseudo ? cleanSpeechText(el.pseudoText) : cleanSpeechText(prefix + el.textContent);
  if (!text) { _readIndex++; return speakNextSentence(gen); }

  if (!istPseudo) el.classList.add("reading-highlight");
  /* Den aktuellen Satz sichtbar halten – aber nur scrollen, wenn er aus dem
     Bild läuft (kein ständiges Springen). */
  if (!istPseudo) {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const r = el.getBoundingClientRect();
    if (r.top < 90 || r.bottom > window.innerHeight - 90) {
      try { el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" }); } catch (e) { /* nichts */ }
    }
  }

  const slow = _readRate && _readRate < 0.8;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "de-DE";
  u.rate = _readRate;
  u.pitch = 1;
  u.volume = 1;
  u.onstart = () => {
    if (gen !== _readGen) return;
    setReadingActive(slow ? "slow" : "normal");
    updateReadingStatus(slow ? "Langsam vorlesen läuft." : "Vorlesen läuft.");
  };
  u.onend = () => { if (gen !== _readGen) return; _readIndex++; speakNextSentence(gen); };
  u.onerror = () => { if (gen !== _readGen) return; _readIndex++; speakNextSentence(gen); };
  window.speechSynthesis.speak(u);
}

/* Liest nur EINEN Abschnitt vor (statt der ganzen Seite) – für lange
   Seiten wie Hilfe und Einstellungen. Gleiches Hervorheben wie sonst. */
function readSectionFrom(button) {
  if (!supportsSpeech()) { updateReadingStatus("Vorlesen geht auf diesem Gerät nicht."); return; }
  const section = button.closest(".settings-page-section, .support-help-card, .intro-offer");
  if (!section) return;
  _readGen++;
  const gen = _readGen;
  window.speechSynthesis.cancel();
  clearReadingHighlight();
  const els = Array.from(section.querySelectorAll("h3, h4, p, li")).filter(el =>
    !el.closest("button") && cleanSpeechText(el.textContent).length > 0);
  if (!els.length) return;
  _readQueue = els;
  _readIndex = 0;
  _readRate = (typeof readTempo !== "undefined" && readTempo === "langsam") ? 0.5 : 0.85;
  speakNextSentence(gen);
}

/* Kleiner Lautsprecher-Chip für einen Abschnitt */
function sectionReadChip(label) {
  return `<span class="card-read-button card-read-button--section" role="button" tabindex="0" onclick="readSectionFrom(this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();readSectionFrom(this);}" aria-label="Abschnitt ${escapeHtml(label)} vorlesen"><svg class="rb-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L9 9H4z" fill="currentColor"/><path d="M16 8.6a4 4 0 0 1 0 6.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18.6 6.2a7 7 0 0 1 0 11.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>`;
}

function readNormal() { readCurrentPage(0.85); }
function readSlow() { readCurrentPage(0.50); }

/* Vorlese-Tempo ist eine EINSTELLUNG (einmal wählen), keine Entscheidung
   bei jedem Vorlesen. Weniger Knöpfe am Ort der Handlung (Hick, CLT). */
const READ_TEMPO_KEY = "vorlese-tempo";
let readTempo = "normal";
function loadReadTempo() {
  const saved = pGet(READ_TEMPO_KEY);
  readTempo = saved === "langsam" ? "langsam" : "normal";
}
function setReadTempo(t) {
  readTempo = t === "langsam" ? "langsam" : "normal";
  pSet(READ_TEMPO_KEY, readTempo);
  announce(readTempo === "langsam" ? "Vorlesen ist jetzt langsam." : "Vorlesen ist jetzt normal schnell.");
  renderSettingsPage();
}
function readStart() {
  if (readTempo === "langsam") readSlow(); else readNormal();
}

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
      <button type="button" class="reading-button reading-button-normal" onclick="readStart()"><svg class="rb-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L9 9H4z" fill="currentColor"/><path d="M16 8.6a4 4 0 0 1 0 6.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18.6 6.2a7 7 0 0 1 0 11.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg> Vorlesen</button>
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
        <li><strong><svg class="rb-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L9 9H4z" fill="currentColor"/><path d="M16 8.6a4 4 0 0 1 0 6.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18.6 6.2a7 7 0 0 1 0 11.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></strong> bedeutet: Vorlesen.</li>
        <li><strong>?</strong> bedeutet: Hilfe.</li>
        <li><strong>✓</strong> bedeutet: richtig oder geschafft.</li>
        <li><strong>!</strong> bedeutet: Achtung.</li>
        <li><strong>Stopp</strong> bedeutet: Anhalten.</li>
        <li><strong>Das Menü unten</strong> bringt dich zu: Start, Themen, Mein Lernweg, Hilfe und Einstellungen.</li>
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
      <button type="button" class="utility-button pause-button" onclick="showPauseOverlay()">Pause machen</button>
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
  /* Im Erststart geht es nach der Sprache weiter zum Vorwissen.
     Beim späteren Ändern zurück dorthin, wo die Person herkam:
     Einstellungen, das gerade offene Thema, sonst die Themenübersicht. */
  if (onboarding) return renderVorwissen();
  if (activeTab === "einstellungen") return renderSettingsPage();
  if (currentTopicId && getTopicById(currentTopicId)) return renderTopicChoice(currentTopicId);
  renderMenu();
}

/* Rückweg von der Sprach-Wahl OHNE etwas ändern zu müssen (kein Wahl-Zwang) */
function languageChoiceBack() {
  if (activeTab === "einstellungen") return renderSettingsPage();
  if (currentTopicId && getTopicById(currentTopicId)) return renderTopicChoice(currentTopicId);
  if (languageChosen) return renderMenu();
  renderStart();
}

/* Erststart-Schritt: Wie gut kennt sich die Person schon aus? (Vorwissen)
   Steuert die Empfehlung „Kurz" oder „Mehr" beim Thema. */
function renderVorwissen() {
  stopReading();
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Vorwissen", "Start", "Wie gut kennst du dich aus?", 0);
  showNav(false, false);
  content.innerHTML = `
    ${buildReadingToolbar()}
    <section class="profile-new" data-readable="true">
      <h2 class="profile-picker-title">Wie gut kennst du dich aus?</h2>
      <p class="profile-picker-intro">Das hilft uns, dir die passende Menge vorzuschlagen. Du kannst es bei jedem Thema ändern.</p>
      <div class="device-grid">
        <button type="button" class="device-card" onclick="chooseVorwissen('neu')">
          <span class="device-icon" aria-hidden="true">🌱</span>
          <strong>Ich bin ganz neu</strong>
          <span>Zeig mir alles in Ruhe. Ausführlich.</span>
        </button>
        <button type="button" class="device-card" onclick="chooseVorwissen('erfahren')">
          <span class="device-icon" aria-hidden="true">⭐</span>
          <strong>Ich kenne mich schon etwas aus</strong>
          <span>Zeig mir nur das Wichtigste. Kurz.</span>
        </button>
      </div>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

function chooseVorwissen(v) {
  pSet(VORWISSEN_KEY, v === "erfahren" ? "erfahren" : "neu");
  onboarding = false;
  announce(v === "erfahren" ? "Gut. Wir schlagen dir die kurze Menge vor." : "Gut. Wir schlagen dir die ausführliche Menge vor.");
  renderMenuIntro();
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
  sessionDoneTopics = new Set();
  lastLessonContext = null;
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
      <button type="button" class="profile-card" onclick="switchProfile('${escapeHtml(p.id)}')" aria-label="Weiter als ${escapeHtml(signLabel(p))}">
        ${signHtml(p)}
        <span class="profile-name">${escapeHtml(signLabel(p))}</span>
        ${p.id === activeProfileId ? `<span class="profile-active-badge">Das bist du</span>` : ""}
      </button>
      <button type="button" class="profile-edit-link" onclick="renderProfileManage('${escapeHtml(p.id)}')" aria-label="Profil ${escapeHtml(signLabel(p))} ändern">Ändern</button>
    </div>`).join("");

  content.innerHTML = `
    ${buildReadingToolbar()}
    <section class="profile-picker" data-readable="true">
      <h2 class="profile-picker-title">Wer lernt gerade?</h2>
      <p class="profile-picker-intro">Tippe auf dein Zeichen. Dann merkt sich die App, wie du liest, und deinen Lernstand – nur auf diesem Gerät, ohne Namen.</p>
      <div class="profile-grid">
        ${cards}
        <button type="button" class="profile-card profile-card--new" onclick="renderBuildSign(0, null)" aria-label="Neue Person hinzufügen">
          <span class="profile-avatar" aria-hidden="true">＋</span>
          <span class="profile-name">Neue Person</span>
        </button>
      </div>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

/* Erststart-Frage: eigenes oder geteiltes Gerät. */
function renderDeviceQuestion() {
  stopReading();
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Start", "Start", "Wer benutzt dieses Gerät?", 0);
  showNav(false, false);
  content.innerHTML = `
    ${buildReadingToolbar()}
    <section class="profile-new" data-readable="true">
      <h2 class="profile-picker-title">Willkommen!</h2>
      <p class="profile-picker-intro">Eine Frage zum Anfang: Benutzt du dieses Gerät allein? Oder benutzen es mehrere Personen?</p>
      <div class="device-grid">
        <button type="button" class="device-card" onclick="chooseDevice(false)">
          <span class="device-icon" aria-hidden="true">📱</span>
          <strong>Nur ich</strong>
          <span>Mein eigenes Handy oder Tablet.</span>
        </button>
        <button type="button" class="device-card" onclick="chooseDevice(true)">
          <span class="device-icon" aria-hidden="true">👥</span>
          <strong>Mehrere Personen</strong>
          <span>Ein Gerät, das wir uns teilen.</span>
        </button>
      </div>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

function chooseDevice(shared) {
  setDeviceShared(shared);
  signDraft = { icon: null, color: null, number: null };
  renderBuildSign(0, null);
}

/* Vorschau des Zeichens, das gerade gebaut wird. */
function signPreviewHtml() {
  const icon = signDraft.icon || "star";
  const color = signDraft.color || "#c6c7c8";
  const number = (signDraft.number !== null && signDraft.number !== undefined) ? signDraft.number : "";
  return signHtml({ icon, color, number }, "profile-sign--big");
}

/* Zeichen bauen: Symbol → Farbe → Zahl. editId gesetzt = Profil ändern. */
function renderBuildSign(step, editId) {
  stopReading();
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Dein Zeichen", "Start", "Bau dir dein Zeichen", 0);
  showNav(false, false);

  const ed = editId ? "'" + escapeHtml(editId) + "'" : "null";
  const dots = [0, 1, 2].map(j => `<span class="lq-dot${j <= step ? " on" : ""}"></span>`).join("");

  let title = "";
  let body = "";
  let back = "";

  if (step === 0) {
    title = "Such dir ein Symbol aus.";
    body = `<div class="sign-icon-grid">${SIGN_ICONS.map(ic => `
      <button type="button" class="sign-pick${signDraft.icon === ic.key ? " is-active" : ""}" onclick="pickSignIcon('${ic.key}', ${ed})" aria-label="${escapeHtml(ic.name)} wählen">
        <span class="sign-pick-bubble"><svg viewBox="0 0 100 100" aria-hidden="true">${ic.svg.replace(/#fff/g, "#00528f")}</svg></span>
        <span class="sign-pick-name">${escapeHtml(ic.name)}</span>
      </button>`).join("")}</div>`;
    back = editId ? `renderProfileManage(${ed})` : "renderDeviceQuestion()";
  } else if (step === 1) {
    title = "Such dir eine Farbe aus.";
    body = `<div class="sign-color-grid">${SIGN_COLORS.map(c => `
      <button type="button" class="sign-color${signDraft.color === c.hex ? " is-active" : ""}" style="background:${c.hex}" onclick="pickSignColor('${c.hex}', ${ed})" aria-label="${escapeHtml(c.name)} wählen"><span>${escapeHtml(c.name)}</span></button>`).join("")}</div>`;
    back = `renderBuildSign(0, ${ed})`;
  } else {
    title = "Such dir eine Zahl aus.";
    body = `<div class="sign-number-grid">${Array.from({ length: 11 }, (_, n) => `
      <button type="button" class="sign-number${signDraft.number === n ? " is-active" : ""}" onclick="pickSignNumber(${n}, ${ed})" aria-label="Zahl ${n} wählen">${n}</button>`).join("")}</div>`;
    back = `renderBuildSign(1, ${ed})`;
  }

  content.innerHTML = `
    <section class="profile-new">
      <div class="lq-dots" aria-hidden="true">${dots}</div>
      <div class="sign-preview" role="img" aria-label="Dein Zeichen">${signPreviewHtml()}</div>
      <h2 class="profile-picker-title">${title}</h2>
      ${body}
      <button type="button" class="plain-back-button" onclick="${back}">← Zurück</button>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

function pickSignIcon(key, editId) { signDraft.icon = key; renderBuildSign(1, editId); }
function pickSignColor(hex, editId) { signDraft.color = hex; renderBuildSign(2, editId); }
function pickSignNumber(n, editId) { signDraft.number = n; finishSign(editId); }

/* Ausdruckbare „Das bin ich"-Karte mit dem eigenen Zeichen. */
function printSignCard(id) {
  const p = profiles.find(x => x.id === id);
  if (!p) return;
  const color = p.icon ? (p.color || "#00528f") : "#D8EAF2";
  const ic = p.icon ? SIGN_ICONS.find(s => s.key === p.icon) : null;
  const inner = ic ? `<svg viewBox="0 0 100 100">${ic.svg}</svg>`
    : `<span style="font-size:90px">${escapeHtml(p.avatar || "🙂")}</span>`;
  const num = (p.number !== undefined && p.number !== null) ? p.number : "";
  const label = signLabel(p);
  const html = `<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Meine Karte</title>` +
    `<style>body{font-family:Arial,Helvetica,sans-serif;color:#142231;text-align:center;margin:40px;}` +
    `.card{border:3px solid #00528f;border-radius:24px;max-width:420px;margin:0 auto;padding:32px;}` +
    `.sign{width:170px;height:170px;border-radius:42px;background:${color};display:flex;align-items:center;justify-content:center;margin:0 auto 22px;position:relative;}` +
    `.sign svg{width:104px;height:104px;}` +
    `.num{position:absolute;right:-12px;bottom:-12px;background:#fff;color:#142231;border:4px solid ${color};border-radius:50%;width:58px;height:58px;display:flex;align-items:center;justify-content:center;font-size:30px;font-weight:bold;}` +
    `h1{font-size:24px;margin:0 0 8px;}p{font-size:18px;line-height:1.55;}.parts{font-weight:bold;}` +
    `.foot{margin-top:24px;color:#555;font-size:13px;}</style></head><body>` +
    `<div class="card"><div class="sign">${inner}${num !== "" ? `<span class="num">${num}</span>` : ""}</div>` +
    `<h1>Das ist mein Zeichen.</h1>` +
    `<p>So finde ich mich wieder.<br>Ich tippe auf mein Zeichen.</p>` +
    `<p class="parts">${escapeHtml(label)}</p>` +
    `<p class="foot">Sicher und selbstbestimmt im Internet · Es wird kein Name gespeichert.</p></div></body></html>`;
  const w = window.open("", "_blank");
  if (!w) return;
  w.document.write(html);
  w.document.close();
  w.focus();
  setTimeout(() => { try { w.print(); } catch (e) { /* nichts tun */ } }, 300);
}

function finishSign(editId) {
  const sign = { icon: signDraft.icon, color: signDraft.color, number: signDraft.number };
  if (editId) {
    const p = profiles.find(x => x.id === editId);
    if (p) { p.icon = sign.icon; p.color = sign.color; p.number = sign.number; delete p.avatar; saveProfiles(); }
    signDraft = { icon: null, color: null, number: null };
    renderProfileManage(editId);
    return;
  }
  const p = Object.assign({ id: genProfileId() }, sign);
  profiles.push(p);
  activeProfileId = p.id;
  saveProfiles();
  signDraft = { icon: null, color: null, number: null };
  languageChosen = false;
  languageLevel = "leicht";
  learnMode = null;
  learnModeChooserOpen = false;
  fontSizeStep = 0;
  applyFontSize();
  finishedTopicThisSession = false;
  sessionDoneTopics = new Set();
  lastLessonContext = null;
  onboarding = true;
  renderStart();
}

function renderProfileManage(id) {
  const p = profiles.find(x => x.id === id);
  if (!p) return renderProfilePicker();
  stopReading();
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Profil", "Start", "Profil ändern", 0);
  showNav(false, false);

  content.innerHTML = `
    <section class="profile-manage">
      <h2 class="profile-picker-title"><span class="profile-manage-sign">${signHtml(p)}</span> Dein Zeichen</h2>

      <h3 class="profile-manage-sub">Zeichen ändern</h3>
      <p class="profile-manage-note">Bau dir ein neues Zeichen: Symbol, Farbe und Zahl.</p>
      <button type="button" class="utility-button" onclick="renderBuildSign(0, '${escapeHtml(id)}')">Zeichen neu bauen</button>

      <h3 class="profile-manage-sub">Meine Karte</h3>
      <p class="profile-manage-note">Druck dir dein Zeichen aus, damit du es dir merken kannst.</p>
      <button type="button" class="utility-button" onclick="printSignCard('${escapeHtml(id)}')">🖨 Meine Karte drucken</button>

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
        <p>Für dein Zeichen ${signHtml(p)} (${escapeHtml(signLabel(p))}) werden die gewählte Sprache und der Lernstand gelöscht. Du fängst wieder von vorne an. Das kann man nicht rückgängig machen.</p>
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
  sessionDoneTopics = new Set();
  lastLessonContext = null;
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
        <p>Dein Zeichen ${signHtml(p)} (${escapeHtml(signLabel(p))}) und sein Lernstand werden gelöscht. Das kann man nicht rückgängig machen.</p>
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
  if (profiles.length === 0) {
    /* Keine Person mehr: neues Zeichen bauen. */
    signDraft = { icon: null, color: null, number: null };
    return renderBuildSign(0, null);
  }
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
            <strong>Hilf mir, die passende Stufe zu finden</strong>
            <span>3 kurze Fragen. Es gibt keine falsche Antwort.</span>
          </span>
        </button>
        <button type="button" class="entry-card" onclick="renderLanguageChoice()">
          <span class="entry-icon" aria-hidden="true">${getIconHtml("check")}</span>
          <span class="entry-text">
            <strong>Ich wähle selbst</strong>
            <span>Direkt eine der drei Stufen auswählen.</span>
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
  setHeader("Sicher und selbstbestimmt im Internet", "Passende Stufe finden", "Beispiel " + (round + 1) + " von " + SAMPLE_ROUNDS.length, "Passende Stufe finden", Math.round((round / SAMPLE_ROUNDS.length) * 100));
  showNav(false, false);

  const r = SAMPLE_ROUNDS[round];
  const dots = SAMPLE_ROUNDS.map((_, j) => `<span class="lq-dot${j <= round ? " on" : ""}"></span>`).join("");
  /* Stufen-Namen werden NICHT gezeigt – die Person wählt nach Gefühl,
     nicht nach Etikett. Reihenfolge wird gemischt. */
  const options = shuffleArray(["leicht", "einfach", "standard"]);
  const cards = options.map(level => `
    <button type="button" class="sample-option" onclick="pickSample(${round}, '${level}')">
      <span class="sample-text">„${escapeHtml(r[level])}"</span>
      <span class="card-read-button" role="button" tabindex="0" data-read-card-text="${escapeHtml(r[level])}" aria-label="Text vorlesen"><svg class="rb-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L9 9H4z" fill="currentColor"/><path d="M16 8.6a4 4 0 0 1 0 6.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18.6 6.2a7 7 0 0 1 0 11.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>
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
      <button type="button" class="plain-back-button" onclick="renderLanguageChoice('${level}')">Andere Stufe wählen</button>
    </article>
  `;
  focusContent();
  renderLegalFooter();
}

function renderLanguageChoice(recommended) {
  stopReading();
  /* currentTopicId bleibt erhalten: wer aus einem Thema kommt,
     soll nach der Wahl (oder per Zurück) wieder dort landen. */
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Lesen wählen", "Start", "Wie möchtest du lesen?", 0);
  setOrientation("Du bist auf der Seite: Lesen wählen.");
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
    ${buildReadingToolbar()}
    <section class="language-choice" data-readable="true">
      <h2 class="language-choice-title">Wie möchtest du lesen?</h2>
      <p class="language-choice-intro">Wähle eine von 3 Stufen. Du kannst sie später jederzeit ändern.</p>
      <div class="language-grid">
        ${card("leicht", "understand")}
        ${card("einfach", "example")}
        ${card("standard", "report")}
      </div>
      <p class="language-finder-link">
        <button type="button" class="utility-button" onclick="startLanguageQuiz()">Nicht sicher? Wir finden die passende Stufe für dich</button>
      </p>
      <p class="language-more-link">
        <a href="sprachstufen.html">Was ist der Unterschied? Hier wird es erklärt.</a>
      </p>
      <button type="button" class="plain-back-button" onclick="languageChoiceBack()">← Zurück. Nichts ändern.</button>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

/* „Los geht's": sanft zu den Themen scrollen und den Fokus dorthin setzen. */
function scrollToTopics() {
  const title = document.querySelector(".topic-grid-title");
  const target = title || document.querySelector(".topic-grid");
  if (!target || !target.scrollIntoView) return;
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  if (title) {
    title.setAttribute("tabindex", "-1");
    try { title.focus({ preventScroll: true }); } catch (e) { /* nichts tun */ }
  }
}

/* Startseite (Intro): kurz, worum es geht, plus ein Start-Knopf.
   Die Lerneinheiten (Themen) liegen auf einer eigenen Seite. */
/* ============================================================
   Frage des Tages: eine Wiederhol-Frage aus den geschafften Themen.
   Verteiltes Wiederholen in kleinster Form (Spacing- + Testing-Effekt).
   Deterministisch über das Datum – kein Tracking, keine Speicherung.
   ============================================================ */

let dailyQuestionCurrent = null;

/* Rück-Anker: merkt die zuletzt offene Lektion (nur im Arbeitsspeicher).
   Wer zur Hilfe oder zu den Einstellungen wechselt, findet mit einem
   Tipp zurück (COGA: Unterbrechungen sicher machen). */
let lastLessonContext = null;

function buildResumeLessonChip() {
  const ctx = lastLessonContext;
  if (!ctx) return "";
  const topic = getTopicById(ctx.topicId);
  if (!topic) return "";
  return `
    <p class="resume-lesson-wrap">
      <button type="button" class="review-chip resume-lesson-chip" style="${getTopicColorStyle(topic.id)}" onclick="resumeLastLesson()">
        <span aria-hidden="true">${getIconHtml(topic.icon || "start")}</span>
        <span>Weiter lernen: ${escapeHtml(topic.title)}, Schritt ${ctx.step + 1}</span>
      </button>
    </p>`;
}

function resumeLastLesson() {
  const ctx = lastLessonContext;
  if (!ctx || !getTopicById(ctx.topicId)) return renderMenu();
  currentTopicId = ctx.topicId;
  currentMode = ctx.mode;
  currentStep = ctx.step;
  renderLesson();
}

function getDailyQuestion() {
  const doneTopics = topics.filter(t => isTopicDone(t.id) && getQuizQuestions(t).length);
  if (!doneTopics.length) return null;
  const pool = [];
  doneTopics.forEach(t => getQuizQuestions(t).forEach(q => pool.push({ topic: t, q })));
  if (!pool.length) return null;
  const d = new Date();
  const seed = d.getFullYear() * 372 + (d.getMonth() + 1) * 31 + d.getDate();
  return pool[seed % pool.length];
}

function buildDailyQuestionCard() {
  const daily = getDailyQuestion();
  dailyQuestionCurrent = daily;
  if (!daily) return "";
  const answers = daily.q.answers.map((a, i) =>
    `<button type="button" class="answer-option daily-answer" onclick="answerDailyQuestion(${i})">${escapeHtml(a)}</button>`
  ).join("");
  return `
      <div class="intro-offer daily-question" id="dailyQuestion" style="${getTopicColorStyle(daily.topic.id)}" data-readable="true" role="region" aria-label="Frage des Tages">
        <h3>Deine Frage für heute</h3>
        <p class="daily-question-topic">Aus dem Thema: ${escapeHtml(daily.topic.title)}</p>
        <p class="daily-question-text">${escapeHtml(daily.q.question)}</p>
        <div class="daily-answers">${answers}</div>
      </div>`;
}

function answerDailyQuestion(index) {
  const daily = dailyQuestionCurrent;
  const box = document.getElementById("dailyQuestion");
  if (!daily || !box) return;
  const isCorrect = index === daily.q.correctIndex;
  const feedback = isCorrect
    ? (daily.q.feedbackCorrect || "Das ist richtig.")
    : (daily.q.feedbackWrong || "Das war nicht richtig. Das macht nichts.");
  playSound(isCorrect ? "correct" : "wrong");
  box.innerHTML = `
        <h3>${isCorrect ? "✓ Richtig! Gut gemacht." : "Das macht nichts."}</h3>
        <p class="daily-question-text">${escapeHtml(feedback)}</p>
        ${isCorrect ? "" : `<button type="button" class="review-chip" style="${getTopicColorStyle(daily.topic.id)}" onclick="renderTopicChoice('${escapeHtml(daily.topic.id)}')"><span aria-hidden="true">${getIconHtml(daily.topic.icon || "start")}</span><span>${escapeHtml(daily.topic.title)} nochmal ansehen</span></button>`}
      `;
  announce(feedback);
}

/* Menü-Erklärung als wiederverwendbarer Baustein (Einweisung + Hilfe) */
function buildMenuExplainList() {
  return `
      <ul class="intro-offer-list">
        <li><span class="intro-offer-icon" aria-hidden="true">${getIconHtml("start")}</span><span><strong>Start</strong> bringt dich zur ersten Seite zurück.</span></li>
        <li><span class="intro-offer-icon" aria-hidden="true">${getIconHtml("example")}</span><span><strong>Themen</strong> zeigt dir alle 12 Themen.</span></li>
        <li><span class="intro-offer-icon" aria-hidden="true">${getIconHtml("check")}</span><span><strong>Mein Lernweg</strong> zeigt dir: Das hast du geschafft. Hier kannst du üben.</span></li>
        <li><span class="intro-offer-icon" aria-hidden="true">${getIconHtml("help")}</span><span><strong>Hilfe</strong> ist immer für dich da.</span></li>
        <li><span class="intro-offer-icon" aria-hidden="true">${getIconHtml("understand")}</span><span>Bei <strong>Einstellungen</strong> änderst du Schrift, Töne und Sprache.</span></li>
      </ul>`;
}

/* Eigener Einweisungs-Schritt: EIN Konzept (das Menü) auf EINEM Bildschirm.
   Wird genau einmal gezeigt, danach steht die Erklärung dauerhaft in Hilfe. */
const MENU_INTRO_KEY = "menue-gesehen";
function menuIntroSeen() { return pGet(MENU_INTRO_KEY) === "1"; }
function renderMenuIntro() {
  if (menuIntroSeen()) return renderMenu();
  pSet(MENU_INTRO_KEY, "1");
  stopReading();
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Das Menü", "Einweisung", "So findest du dich zurecht", 0);
  setActiveTab("start");
  setOrientation("Du bist bei der Einweisung. Gleich geht es zu den Themen.");
  showNav(false, false);
  content.innerHTML = `
    ${buildReadingToolbar()}
    <section class="intro-page" data-readable="true">
      <div class="intro-offer">
        <h3>Unten ist das Menü. Es ist immer da.</h3>
        ${buildMenuExplainList()}
      </div>
      <button type="button" class="intro-start-button" onclick="renderMenu()">Alles klar. Zu den Themen.</button>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

function renderIntro() {
  stopReading();
  currentTopicId = null;
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Willkommen", "Willkommen", "Los geht’s", 0);
  setActiveTab("start");
  setOrientation("Du bist auf der Seite: Start.");
  rememberRoute("start");
  showNav(false, false);

  /* Wiederkehrende sehen zuerst den einen nächsten Schritt (CLT: eine
     Hauptaufgabe), Neue sehen die volle Begrüßung. „Wiederkehrend" heißt:
     Sprache gewählt ODER schon ein Thema geschafft. */
  const isReturning = languageChosen || countDoneTopics() > 0;
  const nextTopic = isReturning ? getNextTopicSuggestion() : null;
  const dailyCard = isReturning ? buildDailyQuestionCard() : "";
  const lessonChip = buildResumeLessonChip();
  const resumeCard = (nextTopic && !lessonChip) ? `
      <div class="intro-offer" role="region" aria-label="Weiterlernen">
        <h3>Hier kannst du weiterlernen:</h3>
        <button type="button" class="topic-card" style="${getTopicColorStyle(nextTopic.id)}" onclick="renderTopicChoice('${escapeHtml(nextTopic.id)}')">
          <span class="topic-icon" aria-hidden="true">${getIconHtml(nextTopic.icon || "start")}</span>
          <span class="topic-title">${escapeHtml(nextTopic.title)}</span>
          <span class="topic-desc">${escapeHtml(nextTopic.desc || "")}</span>
        </button>
      </div>` : "";

  content.innerHTML = `
    ${buildReadingToolbar()}
    <section class="intro-page" data-readable="true">
      <div class="hero-card">
        <div class="hero-inner">
          <div class="hero-text">
            <h2>Willkommen!</h2>
            <p>Hier lernst du, sicher und selbstbestimmt im Internet zu sein.</p>
            <p>In kurzen Schritten. Mit Bildern und zum Vorlesen.</p>
          </div>
          <div class="hero-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 4 L56 16 L56 36 C56 50 44 60 32 62 C20 60 8 50 8 36 L8 16 Z" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>
              <path d="M24 32 L30 38 L40 26" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <div class="intro-figures">
        <img src="assets/illustrations/alex-und-tilda.svg" alt="" aria-hidden="true">
        <p class="intro-figures-text"><strong>Das sind Alex und Tilda.</strong><br>Sie begleiten dich beim Lernen.</p>
      </div>

      ${isReturning ? "" : `
      <div class="intro-offer">
        <h3>Das kannst du hier machen:</h3>
        <ul class="intro-offer-list">
          <li><span class="intro-offer-icon" aria-hidden="true">${getIconHtml("start")}</span><span>Du lernst über 12 Themen. Zum Beispiel: WhatsApp, Betrug und KI.</span></li>
          <li><span class="intro-offer-icon" aria-hidden="true">${getIconHtml("message")}</span><span>Du kannst dir alles vorlesen lassen.</span></li>
          <li><span class="intro-offer-icon" aria-hidden="true">${getIconHtml("help")}</span><span>Du lernst allein. Oder mit einer Begleit-Person.</span></li>
        </ul>
      </div>`}

      ${lessonChip}

      ${dailyCard}

      ${resumeCard}

      ${isReturning ? `
      <button type="button" class="intro-start-button" onclick="renderMenu()">Zu den Themen</button>
      ` : `
      <button type="button" class="intro-start-button" onclick="introStart()">Los geht’s</button>
      <p class="intro-quickstart-hint">Keine Lust auf Fragen?</p>
      <button type="button" class="intro-quickstart-button" onclick="introQuickStart()">Sofort ein Thema lernen</button>
      <p class="intro-meta">12 Themen &nbsp;·&nbsp; 3 Sprachstufen &nbsp;·&nbsp; kostenlos &nbsp;·&nbsp; kein Name nötig</p>
      `}
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

/* Abkürzung: sofort lernen, ohne Fragen (COGA: geringe Einstiegs-Last).
   Sinnvolle Standards: Leichte Sprache, ausführlicher Lernweg.
   Alles bleibt später über die Einstellungen änderbar. */
function introQuickStart() {
  setLanguageLevel("leicht");
  pSet(VORWISSEN_KEY, "neu");
  renderMenuIntro();
}

function introStart() {
  /* Noch kein Zeichen: volles Onboarding (Gerät → Zeichen → Sprache → Lernstand). */
  if (profiles.length === 0) return renderDeviceQuestion();
  /* Geteiltes Gerät (z. B. iPad): IMMER zuerst „Wer lernt gerade?".
     So wählt jede Person ihr eigenes Zeichen und macht mit ihrem eigenen
     Lernstand weiter – auch wenn bisher nur ein Zeichen da ist, kann eine
     weitere Person hier ein neues anlegen. Niemand kommt durcheinander. */
  if (deviceShared) return renderProfilePicker();
  /* Onboarding noch nicht fertig (keine Sprache gewählt): weiter im Onboarding. */
  if (!languageChosen) return renderStart();
  /* Alles eingestellt: kurz bestätigen, dann zu den Themen. */
  return renderResume();
}

/* Kurzer Bestätigungs-Schritt für Wiederkehrende.
   Zeigt Zeichen, Sprache und Lernstand. Alles änderbar – oder gleich weiter.
   So machen es Profis bei inklusiven Seiten: geführt, vorhersehbar, aber ohne
   die Person jedes Mal alles neu einstellen zu lassen. */
function renderResume() {
  stopReading();
  currentTopicId = null;
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Bereit?", "Start", "Willkommen zurück", 0);
  showNav(false, false);

  const prof = profiles.find(p => p.id === activeProfileId) || profiles[0];
  const vw = pGet(VORWISSEN_KEY) === "erfahren" ? "erfahren" : "neu";
  const vwLabel = vw === "erfahren" ? "Ich kenne mich schon etwas aus" : "Ich bin ganz neu";
  const langLabel = LANGUAGE_LABEL[languageLevel] || "Leichte Sprache";

  content.innerHTML = `
    ${buildReadingToolbar()}
    <section class="resume-page" data-readable="true">
      <div class="resume-head">
        ${signHtml(prof, "profile-sign--big")}
        <div class="resume-head-text">
          <h2>Willkommen zurück!</h2>
          <p>Das ist dein Zeichen: ${escapeHtml(signLabel(prof))}.</p>
        </div>
      </div>
      <p class="resume-intro">So lernst du gerade. Du kannst alles ändern. Oder gleich weiter.</p>
      <ul class="resume-list">
        <li class="resume-row">
          <span class="resume-row-label"><span class="resume-row-icon" aria-hidden="true">${getIconHtml("understand")}</span> Du liest: <strong>${escapeHtml(langLabel)}</strong></span>
          <button type="button" class="resume-change" onclick="renderLanguageChoice('${languageLevel}')">ändern</button>
        </li>
        <li class="resume-row">
          <span class="resume-row-label"><span class="resume-row-icon" aria-hidden="true">${getIconHtml("start")}</span> Dein Lernstand: <strong>${escapeHtml(vwLabel)}</strong></span>
          <button type="button" class="resume-change" onclick="renderVorwissen()">ändern</button>
        </li>
        <li class="resume-row">
          <span class="resume-row-label"><span class="resume-row-icon" aria-hidden="true">${getIconHtml("check")}</span> Dein Zeichen</span>
          <button type="button" class="resume-change" onclick="renderProfileManage('${escapeHtml(prof.id)}')">ändern</button>
        </li>
      </ul>
      <button type="button" class="intro-start-button" onclick="renderMenu()">Weiter zu den Themen</button>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

/* Themen in 3 benannte Gruppen (Chunking: kleine, benannte Pakete
   statt 12 gleichzeitiger Wahlmöglichkeiten). Reine Anzeige-Gliederung,
   keine inhaltliche Änderung der Themen. */
const TOPIC_GROUPS = [
  { title: "Wichtig für alle",   hint: "Das hilft dir überall im Internet.", ids: ["datenschutz", "ki", "einkaufen"] },
  { title: "Apps",               hint: "So nutzt du diese Apps sicher.",     ids: ["whatsapp", "facebook", "instagram", "youtube", "snapchat", "tiktok"] },
  { title: "Gefahren und Hilfe", hint: "So erkennst du Tricks. So holst du Hilfe.", ids: ["fakes", "betrug", "hilfe"] }
];

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
  setActiveTab("themen");
  setOrientation("Du bist auf der Seite: Themen. Wähle ein Thema aus.");
  rememberRoute("themen");
  showNav(false, false);

  const nextSuggestion = getNextTopicSuggestion();
  const anyTopicDone = countDoneTopics() > 0;
  const cardFor = (topic) => {
    const done = isTopicDone(topic.id);
    const suggested = !done && nextSuggestion && topic.id === nextSuggestion.id;
    return `
    <button type="button" class="topic-card topic-${escapeHtml(topic.id)}${done ? " topic-card--done" : ""}" style="${getTopicColorStyle(topic.id)}" onclick="renderTopicChoice('${escapeHtml(topic.id)}')">
      ${suggested ? `<span class="topic-start-badge">${anyTopicDone ? "Dein nächstes Thema" : "Starte hier"}</span>` : ""}
      ${done ? `<span class="topic-done-corner" aria-label="Geschafft" title="Geschafft">✓</span>` : ""}
      <span class="topic-icon" aria-hidden="true">${getIconHtml(topic.icon || "start")}</span>
      <span class="topic-title">${escapeHtml(topic.title)}</span>
      <span class="topic-desc">${escapeHtml(topic.desc || "")}</span>
      ${done ? `<span class="topic-done-badge">✓ Geschafft</span>` : ""}
      <span class="card-read-button" role="button" tabindex="0" data-read-card-text="${escapeHtml(topic.title)}. ${escapeHtml(topic.desc || "")}" aria-label="Thema ${escapeHtml(topic.title)} vorlesen">
        <svg class="rb-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L9 9H4z" fill="currentColor"/><path d="M16 8.6a4 4 0 0 1 0 6.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18.6 6.2a7 7 0 0 1 0 11.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </span>
    </button>
  `;};

  /* Gruppen aufbauen; Themen ohne Gruppe landen sicherheitshalber am Ende */
  const grouped = new Set(TOPIC_GROUPS.flatMap(g => g.ids));
  const rest = topics.filter(t => !grouped.has(t.id));
  const groupSections = TOPIC_GROUPS.map(g => {
    const groupTopics = g.ids.map(id => topics.find(t => t.id === id)).filter(Boolean);
    if (!groupTopics.length) return "";
    return `
      <section class="topic-group" aria-label="${escapeHtml(g.title)}">
        <h3 class="topic-grid-title">${escapeHtml(g.title)}</h3>
        <p class="topic-grid-hint">${escapeHtml(g.hint)}</p>
        <div class="topic-grid">${groupTopics.map(cardFor).join("")}</div>
      </section>`;
  }).join("") + (rest.length ? `
      <section class="topic-group" aria-label="Weitere Themen">
        <h3 class="topic-grid-title">Weitere Themen</h3>
        <div class="topic-grid">${rest.map(cardFor).join("")}</div>
      </section>` : "");

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
    companionNote = languageLevel === "leicht"
      ? `<p class="learn-mode-status" role="status"><span aria-hidden="true">👋</span> Begleit-Tipps sind an. Auf jeder Themen-Seite findet ihr Hinweise für das gemeinsame Lernen.</p>`
      : `<p class="learn-mode-status" role="status"><span aria-hidden="true">👋</span> Begleit-Tipps sind an. Die ausführlichen Hinweise für Begleitpersonen findet ihr in der Leichten Sprache.</p>`;
  } else if (learnMode === "app") {
    companionNote = `<p class="learn-mode-status" role="status"><span aria-hidden="true"><svg class="rb-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L9 9H4z" fill="currentColor"/><path d="M16 8.6a4 4 0 0 1 0 6.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18.6 6.2a7 7 0 0 1 0 11.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span> App-Hilfe ist an. Die Schrift ist größer und jede Seite wird dir vorgelesen.</p>`;
  }

  /* Beim ersten Besuch die Lernweg-Frage einmal groß zeigen; danach steckt
     der Lernweg im Hauptmenü unter „Einstellungen". */
  const showFullChooser = learnModeChooserOpen || !learnModeWasSeen();
  let learnModeSection;
  if (showFullChooser) {
    markLearnModeSeen();
    learnModeSection = `
    <section class="learn-mode-section" aria-label="Wie möchtest du lernen?">
      <h3 class="learn-mode-title">Wie möchtest du heute lernen?</h3>
      <p class="learn-mode-sub">Such dir etwas aus. Du kannst es jederzeit ändern.</p>
      <div class="learn-mode-grid">${learnModeCards}</div>
      ${companionNote}
      <p class="learn-mode-hint"><span aria-hidden="true">ℹ️</span> Du musst dich nicht festlegen. Du kannst auch einfach ein Thema wählen und loslegen.</p>
    </section>`;
  } else {
    learnModeSection = companionNote;
  }

  /* Themen-Seite bewusst schlank: eine Hauptaufgabe – Thema wählen (CLT).
     Üben, Wiederholen und Lernstand liegen unter „Mein Lernweg". */
  content.innerHTML = `
    <section class="start-page">
      ${buildReadingToolbar()}
      ${learnModeSection}
      ${buildResumeLessonChip()}
      <h2 class="topic-grid-title">Wähle ein Thema</h2>
      <p class="topic-grid-hint">Tippe auf ein Thema. Dann geht es los.</p>
      ${groupSections}
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

/* ============================================================
   Seite „Mein Lernweg": Lernstand, Wiederholen, Üben
   ============================================================ */

function renderMyPath() {
  stopReading();
  currentTopicId = null;
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Mein Lernweg", "Mein Lernweg", "Dein Lernstand", 0);
  setActiveTab("lernweg");
  setOrientation("Du bist auf der Seite: Mein Lernweg.");
  rememberRoute("lernweg");
  showNav(false, false);

  const doneCount = countDoneTopics();

  /* Lernstand-Anzeige (Bandura: sichtbare Erfolgserlebnisse) –
     zeigt auch Erfolge aus dieser Sitzung, ohne dass etwas gespeichert wird */
  const heroProgress = doneCount > 0
    ? `<div class="hero-progress-row" role="region" aria-label="Dein Lernfortschritt">
         <div class="hero-progress-numbers">
           <span class="hero-progress-count" aria-live="polite">${doneCount}</span>
           <span class="hero-progress-of">von ${topics.length} Themen geschafft</span>
         </div>
         <div class="hero-progress-track" role="progressbar" aria-valuenow="${doneCount}" aria-valuemin="0" aria-valuemax="${topics.length}" aria-label="${doneCount} von ${topics.length} Themen">
           <div class="hero-progress-fill" style="width:${Math.round((doneCount/topics.length)*100)}%"></div>
         </div>
       </div>`
    : `<p class="topic-grid-hint">Hier siehst du, was du schon geschafft hast. Und hier kannst du üben.</p>`;

  /* Geschaffte Themen als Liste (Erfolg sichtbar machen) */
  const doneTopics = topics.filter(t => isTopicDone(t.id));
  const doneSection = doneTopics.length > 0
    ? `<h3 class="topic-grid-title">Das hast du geschafft</h3>
       <div class="review-chips">
         ${doneTopics.map(t => `
           <button type="button" class="review-chip" style="${getTopicColorStyle(t.id)}" onclick="renderTopicChoice('${escapeHtml(t.id)}')">
             <span aria-hidden="true">✓</span>
             <span>${escapeHtml(t.title)}</span>
           </button>`).join("")}
       </div>
       <p class="topic-grid-hint" style="margin-top:12px;">
         <button type="button" class="setting-big-button" onclick="printSuccessBook()">🖨 Mein Erfolgs-Heft drucken</button>
       </p>`
    : "";

  /* Wiederholungs-Erinnerung (verteiltes Lernen) */
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

  /* Freiwillige Lernstand-Speicherung (KDG: nur lokal, ohne Namen) */
  let progressConsent = "";
  if (isProgressEnabled()) {
    progressConsent = `
      <div class="progress-consent">
        <p class="progress-consent-title">Du hast ${doneCount} von ${topics.length} Themen geschafft.</p>
        <p class="progress-consent-note">Der Lernstand wird nur auf diesem Gerät gespeichert. Ohne Namen.</p>
        <button type="button" class="utility-button" onclick="toggleProgressSaving()">Lernstand löschen und nicht mehr merken</button>
      </div>`;
  } else if (doneCount > 0) {
    progressConsent = `
      <div class="progress-consent">
        <p class="progress-consent-title">Soll ich mir merken, welche Themen du geschafft hast?</p>
        <p class="progress-consent-note">Das wird nur auf diesem Gerät gespeichert. Ohne Namen. Du kannst es jederzeit löschen.</p>
        <button type="button" class="utility-button" onclick="toggleProgressSaving()">Ja, Lernstand merken</button>
      </div>`;
  } else {
    progressConsent = `
      <div class="progress-consent">
        <p class="progress-consent-note">Die Seite speichert deinen Lernstand nicht von allein. Du entscheidest das. Nach deinem ersten Thema fragen wir dich.</p>
      </div>`;
  }

  const readCardSvg = `<svg class="rb-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L9 9H4z" fill="currentColor"/><path d="M16 8.6a4 4 0 0 1 0 6.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18.6 6.2a7 7 0 0 1 0 11.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;

  content.innerHTML = `
    <section class="start-page">
      ${buildReadingToolbar()}
      <h2 class="topic-grid-title">Mein Lernweg</h2>
      ${buildGrandFinish()}
      ${heroProgress}
      ${reviewSection}
      ${doneSection}

      <section class="practice-section" aria-label="Üben und wiederholen">
        <h3 class="topic-grid-title">Üben und wiederholen</h3>
        <p class="topic-grid-hint">Hier kannst du üben. Ganz ohne Druck.</p>
        <div class="action-grid practice-grid">
          <button type="button" class="action-card" onclick="startBigQuiz()">
            <span class="action-icon" aria-hidden="true">${getIconHtml("quiz")}</span>
            <span class="action-text">
              <span class="action-title">Das große Quiz</span>
              <span class="action-desc">Fragen aus allen Themen.</span>
              <span class="card-read-button card-read-button--path" role="button" tabindex="0" data-read-card-text="Das große Quiz. Fragen aus allen Themen." aria-label="Das große Quiz vorlesen">${readCardSvg} Vorlesen</span>
            </span>
          </button>
          <button type="button" class="action-card" onclick="startRepeatQuiz()">
            <span class="action-icon" aria-hidden="true">${getIconHtml("exercise")}</span>
            <span class="action-text">
              <span class="action-title">Wiederholen</span>
              <span class="action-desc">Fragen aus deinen Themen.</span>
              <span class="card-read-button card-read-button--path" role="button" tabindex="0" data-read-card-text="Wiederholen. Fragen aus deinen Themen." aria-label="Wiederholen vorlesen">${readCardSvg} Vorlesen</span>
            </span>
          </button>
          <button type="button" class="action-card" onclick="startTrainingInbox()">
            <span class="action-icon" aria-hidden="true">${getIconHtml("message")}</span>
            <span class="action-text">
              <span class="action-title">Trainings-Postfach</span>
              <span class="action-desc">Trick oder echt? Gefahrlos üben.</span>
              <span class="card-read-button card-read-button--path" role="button" tabindex="0" data-read-card-text="Trainings-Postfach. Trick oder echt? Gefahrlos üben." aria-label="Trainings-Postfach vorlesen">${readCardSvg} Vorlesen</span>
            </span>
          </button>
          <button type="button" class="action-card" onclick="renderAllMemoryCards()">
            <span class="action-icon" aria-hidden="true">${getIconHtml("remember")}</span>
            <span class="action-text">
              <span class="action-title">Alle Merk-Karten</span>
              <span class="action-desc">Alle Regeln ansehen.</span>
              <span class="card-read-button card-read-button--path" role="button" tabindex="0" data-read-card-text="Alle Merk-Karten. Alle Regeln ansehen." aria-label="Alle Merk-Karten vorlesen">${readCardSvg} Vorlesen</span>
            </span>
          </button>
        </div>
      </section>

      ${progressConsent}
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

/* Mein Erfolgs-Heft: Urkunden-Seite + Merk-Regeln aller geschafften
   Themen als druckbares Heft. Mitnahme-Artefakt (Bandura: sichtbarer
   Erfolg), dialogische Grundlage mit der Begleitperson. Keine Speicherung. */
function printSuccessBook() {
  const doneTopics = topics.filter(t => isTopicDone(t.id));
  if (!doneTopics.length) return;
  const prof = getActiveProfile();
  const wer = prof ? signLabel(prof) : "";
  const datum = new Date().toLocaleDateString("de-DE");
  const seiten = doneTopics.map(t => {
    const rules = Array.isArray(t.memoryRules) ? t.memoryRules.slice(0, 5) : [];
    return `<section class="heft-seite">
      <h2>✓ ${escapeHtml(t.title)}</h2>
      <p class="heft-geschafft">Das habe ich geschafft.</p>
      ${rules.length ? `<h3>Das ist wichtig:</h3><ul>${rules.map(r => `<li>${escapeHtml(r)}</li>`).join("")}</ul>` : ""}
    </section>`;
  }).join("");
  const html = `<!doctype html><html lang="de"><head><meta charset="utf-8">` +
    `<title>Mein Erfolgs-Heft</title>` +
    `<style>body{font-family:Arial,Helvetica,sans-serif;max-width:720px;margin:24px auto;padding:0 16px;color:#16222e;line-height:1.6;}` +
    `h1{font-size:26px;margin:0 0 4px;text-align:center;}` +
    `.heft-titel{border:3px solid #00528f;border-radius:16px;padding:28px 20px;text-align:center;margin-bottom:24px;}` +
    `.heft-titel p{margin:6px 0;font-size:15px;}` +
    `.heft-seite{border:2px solid #c6c7c8;border-radius:12px;padding:16px 20px;margin-bottom:16px;page-break-inside:avoid;}` +
    `.heft-seite h2{font-size:19px;margin:0 0 2px;color:#00528f;}` +
    `.heft-geschafft{margin:0 0 10px;color:#2E7D4F;font-weight:bold;}` +
    `h3{font-size:15px;margin:10px 0 4px;}ul{margin:4px 0;padding-left:22px;}li{margin-bottom:5px;}` +
    `.heft-fuss{margin-top:20px;color:#555;font-size:12px;text-align:center;}</style></head><body>` +
    `<div class="heft-titel"><h1>Mein Erfolgs-Heft</h1>` +
    (wer ? `<p>Von: ${escapeHtml(wer)}</p>` : "") +
    `<p>${doneTopics.length} von ${topics.length} Themen geschafft · Stand: ${datum}</p>` +
    `<p>Sicher und selbstbestimmt im Internet</p></div>` +
    seiten +
    `<p class="heft-fuss">Lernplattform der Alexianer Stift Tilbeck GmbH · gefördert von der Sozialstiftung NRW</p>` +
    `</body></html>`;
  const w = window.open("", "_blank");
  if (!w) return;
  w.document.write(html);
  w.document.close();
  w.focus();
  setTimeout(() => { try { w.print(); } catch (e) { /* nichts tun */ } }, 300);
}

/* Gesamt-Urkunde: der größte Erfolgsmoment der Plattform.
   Erscheint erst, wenn ALLE Themen geschafft sind. Druckbar, ohne
   Speicherung – Empowerment-Sprache, nicht kindisch. */
function printGrandCertificate() {
  if (countDoneTopics() < topics.length) return;
  const prof = getActiveProfile();
  const wer = prof ? signLabel(prof) : "";
  const datum = new Date().toLocaleDateString("de-DE");
  const html = `<!doctype html><html lang="de"><head><meta charset="utf-8">` +
    `<title>Urkunde – Alle Themen geschafft</title>` +
    `<style>body{font-family:Arial,Helvetica,sans-serif;max-width:680px;margin:40px auto;padding:0 16px;color:#16222e;text-align:center;line-height:1.7;}` +
    `.rahmen{border:5px double #00285A;border-radius:20px;padding:44px 30px;}` +
    `h1{font-size:34px;letter-spacing:0.12em;margin:0 0 18px;color:#00285A;}` +
    `.wer{font-size:24px;font-weight:bold;margin:14px 0;}` +
    `.was{font-size:19px;margin:12px 0;}` +
    `.gross{font-size:21px;font-weight:bold;color:#2E7D4F;margin:16px 0;}` +
    `.datum{margin-top:26px;font-size:15px;color:#555;}` +
    `.fuss{margin-top:18px;font-size:12px;color:#555;}</style></head><body>` +
    `<div class="rahmen">` +
    `<h1>URKUNDE</h1>` +
    (wer ? `<p class="wer">${escapeHtml(wer)}</p>` : "") +
    `<p class="was">hat alle ${topics.length} Themen geschafft:</p>` +
    `<p class="was"><strong>Sicher und selbstbestimmt im Internet</strong></p>` +
    `<p class="gross">Du kennst dich jetzt gut aus.<br>Du kannst dich sicher im Internet bewegen.</p>` +
    `<p class="datum">Geschafft am ${datum}</p>` +
    `<p class="fuss">Lernplattform der Alexianer Stift Tilbeck GmbH · gefördert von der Sozialstiftung NRW</p>` +
    `</div></body></html>`;
  const w = window.open("", "_blank");
  if (!w) return;
  w.document.write(html);
  w.document.close();
  w.focus();
  setTimeout(() => { try { w.print(); } catch (e) { /* nichts tun */ } }, 300);
}

/* Feier-Baustein: erscheint auf Abschluss-Seite und in „Mein Lernweg",
   sobald alle Themen geschafft sind. */
function buildGrandFinish() {
  if (countDoneTopics() < topics.length) return "";
  return `
    <div class="grand-finish" role="region" aria-label="Alle Themen geschafft">
      <h3>🎉 Du hast alle ${topics.length} Themen geschafft!</h3>
      <p>Das ist eine große Leistung.</p>
      <p>Du kennst dich jetzt gut aus. Du kannst dich sicher im Internet bewegen.</p>
      <button type="button" class="setting-big-button" onclick="printGrandCertificate()">🖨 Deine große Urkunde drucken</button>
    </div>`;
}

/* ============================================================
   Seite „Hilfe": jederzeit über das Hauptmenü erreichbar (COGA)
   ============================================================ */

function renderHelpPage() {
  stopReading();
  currentTopicId = null;
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Hilfe", "Hilfe", "Du kannst Hilfe holen", 0);
  setActiveTab("hilfe");
  setOrientation("Du bist auf der Seite: Hilfe.");
  rememberRoute("hilfe");
  showNav(false, false);

  content.innerHTML = `
    <section class="start-page" data-readable="true">
      ${buildReadingToolbar()}
      <h2 class="topic-grid-title">Hilfe</h2>
      <p class="topic-grid-hint">Du musst das nicht allein schaffen.</p>
      ${buildResumeLessonChip()}
      ${roleFigure("hilfe")}

      <div class="help-page-actions">
        <button type="button" class="setting-big-button" onclick="showSymbolHelp()">Zeichen erklären</button>
        <button type="button" class="setting-big-button" onclick="showPauseOverlay()">Pause machen</button>
      </div>

      <div class="support-help-grid">
        <div class="support-help-card">
          <h4>Wenn du die Seite nicht bedienen kannst ${sectionReadChip("Wenn du die Seite nicht bedienen kannst")}</h4>
          <ul>
            <li>Zeige auf die Stelle.</li>
            <li>Sage: Ich brauche Hilfe bei der Bedienung.</li>
            <li>Bitte um langsames Erklären.</li>
          </ul>
        </div>
        <div class="support-help-card">
          <h4>Wenn du etwas nicht verstehst ${sectionReadChip("Wenn du etwas nicht verstehst")}</h4>
          <ul>
            <li>Lies den Text noch einmal.</li>
            <li>Nutze den Knopf: Vorlesen.</li>
            <li>Bitte eine Person um Erklärung.</li>
            <li>Sage: Bitte erkläre mir das einfacher.</li>
          </ul>
        </div>
        <div class="support-help-card">
          <h4>Wen kannst du fragen? ${sectionReadChip("Wen kannst du fragen?")}</h4>
          <ul>
            <li>Eine Person, der du vertraust.</li>
            <li>Eine Person, die dich unterstützt.</li>
            <li>Eine Digital-Begleiterin oder einen Digital-Begleiter.</li>
            <li>Jemanden im Wohnbereich oder Dienst.</li>
          </ul>
        </div>
        <div class="support-help-card">
          <h4>Wenn dir im Internet etwas Schlechtes passiert ${sectionReadChip("Wenn dir im Internet etwas Schlechtes passiert")}</h4>
          <ul>
            <li>Das ist nicht deine Schuld.</li>
            <li>Sprich mit einer Person, der du vertraust.</li>
            <li>Es gibt das Thema: Hilfe bei Problemen. Dort steht mehr.</li>
          </ul>
        </div>
      </div>
      <p class="support-help-remember">Du musst das nicht allein schaffen.</p>

      <div class="intro-offer" role="region" aria-label="So findest du dich zurecht">
        <h3>So findest du dich zurecht: das Menü unten</h3>
        ${buildMenuExplainList()}
      </div>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

/* ============================================================
   Seite „Einstellungen": alle Einstellungen an einem Ort
   ============================================================ */

function renderSettingsPage() {
  stopReading();
  currentTopicId = null;
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Einstellungen", "Einstellungen", "Stell dir alles passend ein", 0);
  setActiveTab("einstellungen");
  setOrientation("Du bist auf der Seite: Einstellungen.");
  rememberRoute("einstellungen");
  showNav(false, false);

  const activeProfile = getActiveProfile();
  const profileSection = activeProfile ? `
    <section class="settings-page-section" aria-label="Dein Zeichen">
      <h3>Dein Zeichen</h3>
      <p class="settings-explain">Du bist gerade: ${escapeHtml(signLabel(activeProfile))}.</p>
      <div class="settings-toggle-row">
        <button type="button" class="setting-big-button" onclick="renderProfilePicker()">Person wechseln</button>
        <button type="button" class="setting-big-button" onclick="renderProfileManage('${escapeHtml(activeProfile.id)}')">Zeichen ändern</button>
      </div>
    </section>` : "";

  const learnModeButtons = Object.keys(LEARN_MODES).map(key => {
    const m = LEARN_MODES[key];
    const active = learnMode === key;
    return `<button type="button" class="setting-big-button" aria-pressed="${active ? "true" : "false"}" onclick="chooseLearnMode('${key}')">${escapeHtml(m.title)}</button>`;
  }).join("");

  content.innerHTML = `
    <section class="start-page" data-readable="true">
      ${buildReadingToolbar()}
      <h2 class="topic-grid-title">Einstellungen</h2>
      <p class="topic-grid-hint">Hier kannst du vieles einstellen. So passt die Seite gut zu dir.</p>
      ${buildResumeLessonChip()}

      <section class="settings-page-section" aria-label="Schrift">
        <h3>Schrift ${sectionReadChip("Schrift")}</h3>
        <p class="settings-explain">Du kannst die Schrift größer oder kleiner machen.</p>
        <div class="settings-toggle-row" role="group" aria-label="Schriftgröße ändern">
          <button type="button" class="setting-big-button font-btn font-btn-decrease" onclick="changeFontSize(-1)" aria-label="Schrift kleiner" ${fontSizeStep === 0 ? "disabled" : ""}>A− kleiner</button>
          <button type="button" class="setting-big-button font-btn font-btn-increase" onclick="changeFontSize(1)" aria-label="Schrift größer" ${fontSizeStep === FONT_SIZES.length - 1 ? "disabled" : ""}>A+ größer</button>
        </div>
      </section>

      <section class="settings-page-section" aria-label="Vorlesen">
        <h3>Vorlesen ${sectionReadChip("Vorlesen")}</h3>
        <p class="settings-explain">Wie schnell soll die Stimme lesen?</p>
        <div class="settings-toggle-row" role="group" aria-label="Vorlese-Tempo">
          <button type="button" class="setting-big-button" aria-pressed="${readTempo === "normal" ? "true" : "false"}" onclick="setReadTempo('normal')">Normal</button>
          <button type="button" class="setting-big-button" aria-pressed="${readTempo === "langsam" ? "true" : "false"}" onclick="setReadTempo('langsam')">Langsam</button>
        </div>
      </section>

      <section class="settings-page-section" aria-label="Töne und Bewegung">
        <h3>Töne und Bewegung ${sectionReadChip("Töne und Bewegung")}</h3>
        <p class="settings-explain">Du kannst Töne anschalten oder ausschalten. Das Gleiche geht mit Bewegungen.</p>
        <div class="settings-toggle-row">
          <button type="button" class="setting-big-button sound-toggle" onclick="toggleSound()">Töne</button>
          <button type="button" class="setting-big-button motion-toggle" onclick="toggleMotion()">Bewegung</button>
        </div>
      </section>

      <section class="settings-page-section" aria-label="Sprache">
        <h3>Sprache ${sectionReadChip("Sprache")}</h3>
        <p class="settings-explain">Du liest gerade: <strong>${escapeHtml(LANGUAGE_LABEL[languageLevel])}</strong>.</p>
        <div class="settings-toggle-row">
          <button type="button" class="setting-big-button" onclick="renderLanguageChoice('${escapeHtml(languageLevel)}')">Sprache wechseln</button>
        </div>
      </section>

      <section class="settings-page-section" aria-label="Lernweg">
        <h3>Wie möchtest du lernen? ${sectionReadChip("Wie möchtest du lernen?")}</h3>
        <p class="settings-explain">Such dir etwas aus. Du kannst es jederzeit ändern.</p>
        <div class="settings-toggle-row">${learnModeButtons}</div>
      </section>

      ${profileSection}
    </section>
  `;
  updateSoundButton();
  updateMotionButton();
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

/* QR-Karten drucken: eine Karte je Thema (Titel + QR + Adresse).
   Für Workshops und Begleitung: scannen und dasselbe Thema am eigenen
   Handy weiterlernen. QR-Codes liegen lokal in assets/qr/ (kein externer
   Dienst, KDG-konform). */
function printQrCards() {
  const base = "https://alex-und-tilda.github.io/sicher-und-selbstbestimmt-im-internet/";
  const cards = topics.map(t => `
    <div class="qr-karte">
      <h2>${escapeHtml(t.title)}</h2>
      <img src="${new URL("assets/qr/" + escapeHtml(t.id) + ".svg", window.location.href).href}" alt="QR-Code für das Thema ${escapeHtml(t.title)}" width="180" height="180">
      <p class="qr-anleitung">Mit der Handy-Kamera scannen.<br>Dann öffnet sich das Thema.</p>
    </div>`).join("");
  const html = `<!doctype html><html lang="de"><head><meta charset="utf-8">` +
    `<title>QR-Karten – Sicher und selbstbestimmt im Internet</title>` +
    `<style>body{font-family:Arial,Helvetica,sans-serif;margin:16px;color:#16222e;}` +
    `h1{font-size:20px;text-align:center;}` +
    `.qr-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;}` +
    `.qr-karte{border:2px solid #00285A;border-radius:12px;padding:14px;text-align:center;page-break-inside:avoid;}` +
    `.qr-karte h2{font-size:17px;margin:0 0 8px;}` +
    `.qr-anleitung{font-size:13px;margin:8px 0 0;line-height:1.5;}` +
    `.qr-fuss{margin-top:14px;font-size:11px;color:#555;text-align:center;}</style></head><body>` +
    `<h1>QR-Karten: Themen zum Scannen</h1>` +
    `<div class="qr-grid">${cards}</div>` +
    `<p class="qr-fuss">${escapeHtml(base)} · Alexianer Stift Tilbeck GmbH · Sozialstiftung NRW</p>` +
    `</body></html>`;
  const w = window.open("", "_blank");
  if (!w) return;
  w.document.write(html);
  w.document.close();
  w.focus();
  setTimeout(() => { try { w.print(); } catch (e) { /* nichts tun */ } }, 500);
}

/* Begleit-Panel „Für Begleitpersonen und Fachkräfte" (eigene Ebene,
   keine Sprach-Stufe). Erscheint nur, wenn das Thema Begleit-Material hat. */
function buildCompanionPanel(topic) {
  /* Begleit-Ebene nur in Leichter Sprache zeigen (Vorgabe):
     Einfache Sprache und Alltagssprache brauchen die Fachkraft-Hinweise nicht. */
  if (languageLevel !== "leicht") return "";
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
        <div class="companion-qr">
          <img src="assets/qr/${escapeHtml(topic.id)}.svg" alt="QR-Code für das Thema ${escapeHtml(topic.title)}" width="132" height="132" loading="lazy">
          <p>Zum Weiterlernen am eigenen Handy: QR-Code scannen – das Thema öffnet sich direkt.</p>
        </div>
        <button type="button" class="companion-print" onclick="printCompanion('${escapeHtml(topic.id)}')">🖨 Drucken / als PDF speichern</button>
        <button type="button" class="companion-print" onclick="printQrCards()">🖨 QR-Karten für alle Themen drucken</button>
        <p class="companion-intro"><a href="beobachtungsbogen.html">Beobachtungsbogen für Prüfgruppen-Sitzungen</a> – strukturierte, datensparsame Beobachtung zum Ausdrucken.</p>
        <p class="companion-intro"><a href="pruefheft.html">Prüf-Heft für Klientinnen und Klienten</a> – Aufgaben in Leichter Sprache mit Smiley-Antworten, zum Ausdrucken.</p>
      </div>
    </details>`;
}

/* Mengen-Wahl (Kurz/Mehr) je Thema – nur für die Sitzung gemerkt.
   Standard kommt aus der Vorwissens-Frage: erfahren -> Kurz, sonst Mehr. */
let topicAmountSel = { topicId: null, amount: null };

function getTopicAmount(topicId) {
  if (topicAmountSel.topicId === topicId && topicAmountSel.amount) return topicAmountSel.amount;
  return pGet(VORWISSEN_KEY) === "erfahren" ? "short" : "full";
}

function setTopicAmount(topicId, amount) {
  topicAmountSel = { topicId, amount: amount === "short" ? "short" : "full" };
  renderTopicChoice(topicId);
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
  setHeader("Sicher und selbstbestimmt im Internet", topic.title, "Thema auswählen", "Wie möchtest du lernen?", 0);
  setActiveTab("themen");
  setOrientation(`Du bist beim Thema: ${topic.title}.`);
  rememberRoute(topic.id);
  showNav(false, false);

  content.innerHTML = `
    <section class="topic-choice" style="${getTopicColorStyle(topic.id)}">
      <button type="button" class="plain-back-button" onclick="renderMenu()">← Zur Themenübersicht</button>
      ${buildReadingToolbar()}
      <article class="card topic-intro-card" data-readable="true">
        ${getIllustrationHtml(topic)}
        <div class="symbol-heading">
          <span class="access-box-symbol" aria-hidden="true">${getIconHtml(topic.icon || "start")}</span>
          <h2>${escapeHtml(topic.title)}</h2>
        </div>
        <p>${escapeHtml(topic.desc || "")}</p>
      </article>

      ${(() => {
        /* Adaptive Hauptaktion (Program Control mit Opt-out):
           1) Offene Lektion hier -> Weiter lernen
           2) Thema geschafft     -> Quiz wiederholen (Retrieval Practice)
           3) Neu                 -> Lernen starten + Mengen-Wahl */
        const done = isTopicDone(topic.id);
        const resume = (lastLessonContext && lastLessonContext.topicId === topic.id) ? lastLessonContext : null;
        const amount = getTopicAmount(topic.id);
        const hasQuiz = getQuizQuestions(topic).length > 0;
        const laterChip = (label, click) => `<button type="button" class="later-chip" onclick="${click}">${label}</button>`;
        const training = (topic.id === "betrug" || topic.id === "fakes")
          ? laterChip("Trainings-Postfach", "startTrainingInbox()") : "";
        const merkChip = laterChip("Merk-Karte ansehen", `renderMemoryCard('${escapeHtml(topic.id)}')`);

        const amountToggle = `
          <div class="amount-box" role="group" aria-label="Wie viel möchtest du lernen?">
            <p class="amount-title">Wie viel möchtest du?</p>
            <div class="amount-row">
              <button type="button" class="amount-choice${amount === "short" ? " is-active" : ""}" aria-pressed="${amount === "short" ? "true" : "false"}" onclick="setTopicAmount('${escapeHtml(topic.id)}', 'short')"><strong>${amount === "short" ? "✓ " : ""}Kurz</strong><span>Nur das Wichtigste.</span></button>
              <button type="button" class="amount-choice${amount === "full" ? " is-active" : ""}" aria-pressed="${amount === "full" ? "true" : "false"}" onclick="setTopicAmount('${escapeHtml(topic.id)}', 'full')"><strong>${amount === "full" ? "✓ " : ""}Mehr</strong><span>Mit Beispielen.</span></button>
            </div>
            <p class="amount-hint">Für dich vorausgewählt. Du kannst es ändern.</p>
          </div>`;

        if (resume) {
          return `
            <button type="button" class="topic-start-button" onclick="resumeLastLesson()">Weiter lernen: Schritt ${resume.step + 1}</button>
            <p class="later-title">Oder:</p>
            <div class="later-row">
              ${laterChip("Von vorne anfangen", `startTopicMode('${escapeHtml(topic.id)}', '${amount}')`)}
              ${hasQuiz ? laterChip("Quiz machen", `startQuiz('${escapeHtml(topic.id)}')`) : ""}
              ${merkChip}${training}
            </div>`;
        }
        if (done) {
          return `
            <p class="done-note">✓ Du hast dieses Thema geschafft. Wiederholen festigt dein Wissen.</p>
            ${hasQuiz ? `<button type="button" class="topic-start-button" onclick="startQuiz('${escapeHtml(topic.id)}')">Quiz wiederholen</button>` : ""}
            <p class="later-title">Oder:</p>
            <div class="later-row">
              ${laterChip("Nochmal lernen", `startTopicMode('${escapeHtml(topic.id)}', '${amount}')`)}
              ${merkChip}${training}
            </div>`;
        }
        return `
          <button type="button" class="topic-start-button" onclick="startTopicMode('${escapeHtml(topic.id)}', '${amount}')">Lernen starten</button>
          ${amountToggle}
          <p class="later-title">Für später:</p>
          <div class="later-row">
            ${hasQuiz ? laterChip("Quiz machen", `startQuiz('${escapeHtml(topic.id)}')`) : ""}
            ${merkChip}${training}
          </div>`;
      })()}

      ${buildUtilityBar()}

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
        ${roleFigure("hilfe")}
        <div class="support-help-grid">
          <div class="support-help-card">
            <h4>Wenn du die Seite nicht bedienen kannst ${sectionReadChip("Wenn du die Seite nicht bedienen kannst")}</h4>
            <ul>
              <li>Zeige auf die Stelle.</li>
              <li>Sage: Ich brauche Hilfe bei der Bedienung.</li>
              <li>Bitte um langsames Erklären.</li>
            </ul>
          </div>
          <div class="support-help-card">
            <h4>Wenn du eine Frage nicht verstehst ${sectionReadChip("Wenn du eine Frage nicht verstehst")}</h4>
            <ul>
              <li>Lies die Frage noch einmal.</li>
              <li>Bitte eine Person um Erklärung.</li>
              <li>Sage: Bitte erkläre mir das einfacher.</li>
            </ul>
          </div>
          <div class="support-help-card">
            <h4>Wen kannst du fragen? ${sectionReadChip("Wen kannst du fragen?")}</h4>
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
  setOrientation(`Du startest das Thema: ${topic.title}. Zuerst kommt eine Frage an dich.`);

  const optionButtons = sa.options.map((opt, i) =>
    `<button class="sa-option-btn" data-index="${i}" type="button">${escapeHtml(opt)}</button>`
  ).join("");

  content.innerHTML = `
    ${buildReadingToolbar()}
    <article class="card sa-card" data-readable="true" style="${getTopicColorStyle(topic.id)}">
      <div class="symbol-heading">
        <span class="access-box-symbol" aria-hidden="true">${getIconHtml(topic.icon || "start")}</span>
        <h2>${escapeHtml(topic.title)}</h2>
      </div>
      <p class="sa-intro">Bevor wir starten:</p>
      <p class="sa-question">${escapeHtml(sa.question)}</p>
      ${roleFigure("nachdenken")}
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

/* Sichtbarer Schritt-Pfad: zeigt geschaffte Schritte (Häkchen), den
   aktuellen (hervorgehoben) und die kommenden. Klare visuelle Orientierung. */
function buildStepPath(currentIndex, total) {
  if (!total || total < 2) return "";
  const small = total > 8 ? " step-path--small" : "";
  let dots = "";
  for (let i = 0; i < total; i++) {
    if (i > 0) {
      dots += `<span class="step-line${i <= currentIndex ? " is-done" : ""}"></span>`;
    }
    if (i < currentIndex) dots += `<span class="step-dot is-done" aria-hidden="true">✓</span>`;
    else if (i === currentIndex) dots += `<span class="step-dot is-current" aria-hidden="true">${i + 1}</span>`;
    else dots += `<span class="step-dot" aria-hidden="true">${i + 1}</span>`;
  }
  const remaining = total - currentIndex - 1;
  const summary = remaining > 0
    ? `<span class="step-done-count">${currentIndex} geschafft</span> · noch ${remaining} ${remaining === 1 ? "Schritt" : "Schritte"}`
    : `<span class="step-done-count">${currentIndex} geschafft</span> · letzter Schritt`;
  return `
    <div class="step-path-wrap" role="group" aria-label="Schritt ${currentIndex + 1} von ${total}">
      <div class="step-path${small}">${dots}</div>
      <p class="step-path-summary">${summary}</p>
    </div>`;
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

  setProgressVisible(false);
  setBottomNavVisible(!hasPractice);
  setHeader(topic.title, modeLabel, `Schritt ${currentStep + 1} von ${lessons.length}`, lesson.module || "Lernen", percent);
  setOrientation(`Du lernst: ${topic.title}. Das ist Schritt ${currentStep + 1} von ${lessons.length}.`);
  lastLessonContext = { topicId: topic.id, step: currentStep, mode: currentMode };
  showNav(true, true, currentStep === lessons.length - 1 ? "Fertig" : "Weiter");

  /* Vorlese-Knopf je Block: Vorlesen als selbstbestimmtes Angebot an jeder
     Kachel (§1 Selbstbestimmung, §3 Vorlesen als Wahl). Liest genau diesen Block. */
  const blockRead = (t) => t
    ? `<span class="card-read-button card-read-button--block" role="button" tabindex="0" data-read-card-text="${escapeHtml(t)}" aria-label="Diesen Teil vorlesen"><svg class="rb-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L9 9H4z" fill="currentColor"/><path d="M16 8.6a4 4 0 0 1 0 6.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18.6 6.2a7 7 0 0 1 0 11.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>`
    : "";
  const plain = (arr) => Array.isArray(arr)
    ? arr.map(i => (typeof i === "object" && i.text) ? i.text : i).join(" ")
    : "";

  /* Text-Sätze — unterstützt Strings und {text, pictogram}-Objekte */
  const textRows = Array.isArray(lesson.text)
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
  const text = textRows
    ? `<div class="ls-text-block">${textRows}${blockRead(plain(lesson.text))}</div>`
    : "";

  /* Bullet-Punkte — unterstützt Strings und {text, pictogram}-Objekte */
  const bullets = Array.isArray(lesson.bullets) && lesson.bullets.length
    ? `<div class="ls-bullet-block"><ul class="ls-bullet-list">${lesson.bullets.map(item => {
        if (typeof item === "object" && item.text) {
          const img = item.pictogram
            ? `<img class="ls-bullet-pikto" src="${pictoSrc(refinePicto(item.pictogram, item.text))}" alt="" width="40" height="40" aria-hidden="true" loading="lazy">`
            : "";
          return `<li class="ls-bullet-item">${img}<span>${escapeHtml(item.text)}</span></li>`;
        }
        return `<li>${escapeHtml(item)}</li>`;
      }).join("")}</ul>${blockRead(plain(lesson.bullets))}</div>`
    : "";

  const examples = Array.isArray(lesson.examples) && lesson.examples.length
    ? `<div class="access-box example"><h3>Beispiele aus dem Alltag</h3><ul>${lesson.examples.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>${blockRead("Beispiele aus dem Alltag. " + plain(lesson.examples))}</div>`
    : "";

  const warning = lesson.warning
    ? `<div class="access-box warning"><h3>Achtung</h3><p>${escapeHtml(lesson.warning)}</p>${blockRead("Achtung. " + lesson.warning)}</div>`
    : "";

  const success = lesson.success
    ? `<div class="access-box success"><h3>Gut</h3><p>${escapeHtml(lesson.success)}</p>${blockRead("Gut. " + lesson.success)}</div>`
    : "";

  const remember = lesson.remember
    ? `<div class="access-box remember remember-box"><h3>Wichtig</h3><p class="remember-text">${escapeHtml(lesson.remember)}</p>${blockRead("Wichtig. " + lesson.remember)}</div>`
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
    ${buildStepPath(currentStep, lessons.length)}
    ${moduleBadge}
    <article class="card lesson-card page-flip page-flip--${pageDirection}${isEinfachLesson ? " lesson-card--einfach" : ""}" style="${getTopicColorStyle(topic.id)}" data-readable="true">
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

  /* Richtung zurücksetzen: Standard ist vorwärts (z. B. beim Einstieg). */
  pageDirection = "forward";

  /* Auto-Vorlesen im Hör-Modus übernimmt zentral focusContent(). */
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
  setOrientation(`Du übst: ${topic.title}.`);

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
    setOrientation(`Du übst: ${topic.title}. Das ist Schritt ${currentStep + 1} von ${lessons.length}.`);
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

/* Fortschritts-Rückmeldung direkt nach dem Erfolg (Bandura: unmittelbares
   Erfolgserlebnis). Bietet – falls noch nicht aktiv – das freiwillige
   Merken des Lernstands genau in dem Moment an, in dem es Sinn ergibt. */
function buildCompletionProgress() {
  const done = countDoneTopics();
  const saveOffer = !isProgressEnabled() ? `
    <div class="progress-consent">
      <p class="progress-consent-title">Soll ich mir merken, welche Themen du geschafft hast?</p>
      <p class="progress-consent-note">Das wird nur auf diesem Gerät gespeichert. Ohne Namen. Du kannst es jederzeit löschen.</p>
      <button type="button" class="utility-button" onclick="enableProgressInline(this)">Ja, Lernstand merken</button>
    </div>` : "";
  return `
    ${buildGrandFinish()}
    <div class="hero-progress-row" role="region" aria-label="Dein Lernfortschritt">
      <div class="hero-progress-numbers">
        <span class="hero-progress-count">${done}</span>
        <span class="hero-progress-of">von ${topics.length} Themen geschafft</span>
      </div>
      <div class="hero-progress-track" role="progressbar" aria-valuenow="${done}" aria-valuemin="0" aria-valuemax="${topics.length}" aria-label="${done} von ${topics.length} Themen">
        <div class="hero-progress-fill" style="width:${Math.round((done / topics.length) * 100)}%"></div>
      </div>
    </div>
    ${saveOffer}`;
}

function renderCompletionPage(topicId) {
  stopReading();
  const topic = getTopicById(topicId);
  if (!topic) return renderMenu();

  markTopicDone(topic.id);
  finishedTopicThisSession = true;
  lastLessonContext = null; /* Lektion fertig – kein Rück-Anker mehr nötig */
  playSound("success");
  setProgressVisible(false);
  setBottomNavVisible(false);
  showNav(false, false);

  /* ---- Einfach-Modus: eigene, wärmere Abschlussseite ---- */
  if (currentMode === "short") {
    setHeader(topic.title, "Kurz lernen", "Abschluss", "Du bist fertig", 100);
  setOrientation(`Geschafft! Du bist fertig mit dem Thema: ${topic.title}.`);
    content.innerHTML = `
      ${buildReadingToolbar()}
      <section class="completion-page einfach-completion" data-readable="true">
        <article class="card completion-card--einfach" style="${getTopicColorStyle(topic.id)}">

          <div class="einfach-done-star" aria-hidden="true">
            <img src="${pictoSrc('pikto-done')}" alt="" width="120" height="120">
          </div>

          <h2 class="einfach-done-title">Super gemacht!</h2>

          <p class="einfach-done-text">Du hast gelernt:</p>
          <p class="einfach-done-topic"><strong>${escapeHtml(topic.title)}</strong></p>

          <p class="einfach-done-praise">Das war toll.<br>Du hast gut aufgepasst.</p>

          ${topic.transfer ? `
          <div class="access-box remember remember-box">
            <h3>Eine Sache für heute</h3>
            <p class="remember-text">${escapeHtml(topic.transfer)}</p>
          </div>` : ""}

          ${buildCompletionProgress()}

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
            <button type="button" class="ghost-action einfach-done-btn" onclick="renderMyPath()">
              Mein Lernweg ansehen
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
  setOrientation(`Geschafft! Du bist fertig mit dem Thema: ${topic.title}.`);

  const rules = Array.isArray(topic.memoryRules) ? topic.memoryRules.slice(0, 5) : [];
  const rulesHtml = rules.map(rule => `<li>${escapeHtml(rule)}</li>`).join("");

  content.innerHTML = `
    ${buildReadingToolbar()}
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

        ${topic.transfer ? `
        <div class="access-box remember remember-box">
          <h3>Eine Sache für heute</h3>
          <p class="remember-text">${escapeHtml(topic.transfer)}</p>
        </div>` : ""}

        ${buildCompletionProgress()}

        <div class="completion-actions">
          <button type="button" class="primary-action" onclick="startQuiz('${escapeHtml(topic.id)}')">Quiz machen</button>
          <button type="button" class="secondary-action" onclick="renderCertificate('${escapeHtml(topic.id)}')">Urkunde ansehen</button>
          <button type="button" class="secondary-action" onclick="renderMemoryCard('${escapeHtml(topic.id)}')">Merk-Karte ansehen</button>
          <button type="button" class="secondary-action" onclick="renderMyPath()">Mein Lernweg ansehen</button>
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
  setOrientation(`Du machst das Quiz: ${topic.title}. Frage ${currentQuizIndex + 1} von ${questions.length}.`);
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
  setOrientation(`Du machst das Quiz: ${topic.title}.`);

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
  setOrientation(`Du bist fertig mit dem Quiz: ${topic.title}.`);
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
  setOrientation(`Du machst das Quiz: ${topic.title}. Frage ${currentQuizIndex + 1} von ${questions.length}.`);
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
  setOrientation(`Du machst das Quiz: ${topic.title}.`);

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
  setOrientation(topic ? `Du bist fertig mit dem Quiz: ${topic.title}.` : "Du bist fertig mit dem Quiz.");
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

const BIG_QUIZ_COUNT = 20;      /* So viele Fragen werden gezogen */
const REPEAT_QUIZ_COUNT = 5;    /* Kurze Wiederholung: wenige Fragen */
let bigQuizQuestions = [];   /* Array mit {question, answers, correct, topicId, topicTitle} */
let bigQuizIndex    = 0;
let bigQuizScore    = 0;
let bigQuizTitle    = "Das große Quiz";   /* Überschrift: großes Quiz oder Wiederholen */

function buildBigQuizPool(fromTopics, count) {
  const pool = [];
  (fromTopics || topics).forEach((topic) => {
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
  return pool.slice(0, count || BIG_QUIZ_COUNT);
}

function startBigQuiz() {
  bigQuizTitle = "Das große Quiz";
  bigQuizQuestions = buildBigQuizPool();
  bigQuizIndex  = 0;
  bigQuizScore  = 0;
  currentTopicId = null;
  rememberRoute("grosses-quiz");
  renderBigQuizQuestion();
}

/* Wiederhol-Modus: wenige Fragen aus Themen, die schon geschafft sind.
   Lernprinzip: verteiltes Lernen – Wiederholen nach Abstand festigt Wissen. */
function startRepeatQuiz() {
  const doneTopics = topics.filter((t) => isTopicDone(t.id) && getQuizQuestions(t).length);
  if (!doneTopics.length) {
    stopReading();
    setProgressVisible(false);
    setBottomNavVisible(false);
    setHeader("Wiederholen", "", "Wiederholen", "", 0);
    showNav(false, false);
    content.innerHTML = `
      ${buildUtilityBar()}${buildReadingToolbar()}
      <article class="card quiz-result-card" data-readable="true">
        <h2>Wiederholen</h2>
        <p>Hier kannst du Fragen aus deinen Themen wiederholen.</p>
        <p>Du hast noch kein Thema fertig gemacht.</p>
        <p>Mach zuerst ein Thema fertig. Dann kannst du hier üben.</p>
        <div class="certificate-actions">
          <button type="button" class="quiz-link quiz-button" onclick="renderMenu()">Zur Themenübersicht</button>
        </div>
      </article>
    `;
    focusContent();
    renderLegalFooter();
    return;
  }
  bigQuizTitle = "Wiederholen";
  bigQuizQuestions = buildBigQuizPool(doneTopics, REPEAT_QUIZ_COUNT);
  bigQuizIndex  = 0;
  bigQuizScore  = 0;
  currentTopicId = null;
  rememberRoute("wiederholen");
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
  setHeader(bigQuizTitle, `Frage ${bigQuizIndex + 1} von ${total}`, "Frage", bigQuizTitle, progress);
  setOrientation(`Du machst: ${bigQuizTitle}. Frage ${bigQuizIndex + 1} von ${total}.`);
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
      <h2>${escapeHtml(bigQuizTitle)}</h2>
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
      <h2>${escapeHtml(bigQuizTitle)}</h2>
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
  setHeader(bigQuizTitle, "Ergebnis", "Ergebnis", "Fertig", 100);
  setOrientation("Geschafft! Du bist fertig mit dem Quiz.");
  showNav(false, false);

  const praise = percent >= 80
    ? "Sehr gut gemacht! Du weißt schon viel über das sichere Internet."
    : percent >= 50
    ? "Gut versucht! Schau dir die Themen noch einmal an."
    : "Kein Problem. Lerne weiter – jedes Mal wird es leichter.";

  content.innerHTML = `
    ${buildUtilityBar()}${buildReadingToolbar()}
    <article class="card quiz-result-card" data-readable="true">
      <h2>${escapeHtml(bigQuizTitle)} – Fertig!</h2>
      <p>Du hast ${bigQuizScore} von ${total} Fragen richtig beantwortet.</p>
      <p>Das sind ${percent} Prozent.</p>
      <p>${escapeHtml(praise)}</p>
      <div class="certificate-actions">
        <button type="button" class="quiz-link quiz-button" onclick="${bigQuizTitle === "Wiederholen" ? "startRepeatQuiz()" : "startBigQuiz()"}">Noch einmal üben</button>
        <button type="button" class="nav-button secondary" onclick="renderMenu()">Zur Themenübersicht</button>
      </div>
    </article>
  `;
  focusContent();
  renderLegalFooter();
}

/* ============================================================
   Trainings-Postfach – Trick oder echt?
   Gefahrloses Üben mit nachgebauten Nachrichten (UDL: Handlung).
   Emotionale Sicherheit: alles ist erfunden, Fehler sind erlaubt.
   Route: index.html#training
   ============================================================ */

let trainingMessages = [];
let trainingIndex = 0;
let trainingScore = 0;

function startTrainingInbox() {
  stopReading();
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Trainings-Postfach", "", "Üben", "", 0);
  setOrientation("Du bist im Trainings-Postfach. Hier kannst du gefahrlos üben.");
  rememberRoute("training");
  showNav(false, false);

  content.innerHTML = `
    ${buildUtilityBar()}${buildReadingToolbar()}
    <article class="card training-card" data-readable="true">
      <div class="symbol-heading">
        <span class="access-box-symbol" aria-hidden="true">${getIconHtml("message")}</span>
        <h2>Trainings-Postfach</h2>
      </div>
      <p>Hier kannst du üben.</p>
      <p>Du siehst Nachrichten. So wie auf einem Handy.</p>
      <p>Du entscheidest: Ist das ein Trick? Oder ist das echt?</p>
      <div class="access-box remember remember-box">
        <h3>Wichtig</h3>
        <p class="remember-text">Alle Nachrichten hier sind erfunden. Sie sind nur zum Üben. Fehler sind erlaubt.</p>
      </div>
      <div class="certificate-actions">
        <button type="button" class="quiz-link quiz-button" onclick="beginTraining()">Üben starten</button>
        <button type="button" class="nav-button secondary" onclick="renderMenu()">Zur Themenübersicht</button>
      </div>
    </article>
  `;
  focusContent();
  renderLegalFooter();
}

function beginTraining() {
  trainingMessages = TRAINING_INBOX.slice();
  for (let i = trainingMessages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [trainingMessages[i], trainingMessages[j]] = [trainingMessages[j], trainingMessages[i]];
  }
  trainingIndex = 0;
  trainingScore = 0;
  renderTrainingMessage();
}

function renderTrainingMessage() {
  stopReading();
  if (trainingIndex >= trainingMessages.length) return renderTrainingResult();
  const msg = trainingMessages[trainingIndex];
  const total = trainingMessages.length;
  const progress = Math.round((trainingIndex / total) * 100);

  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Trainings-Postfach", `Nachricht ${trainingIndex + 1} von ${total}`, "Nachricht", "Üben", progress);
  setOrientation(`Du übst im Trainings-Postfach. Nachricht ${trainingIndex + 1} von ${total}.`);
  showNav(false, false);

  content.innerHTML = `
    ${buildUtilityBar()}${buildReadingToolbar()}
    <article class="card training-card" data-readable="true">
      <p class="training-count">Nachricht ${trainingIndex + 1} von ${total}</p>
      <div class="training-msg">
        <p class="training-msg-head"><strong>${escapeHtml(msg.channel)}</strong> von: ${escapeHtml(msg.from)}</p>
        <p class="training-msg-text">${escapeHtml(msg.text)}</p>
      </div>
      <p class="quiz-question">Was denkst du: Ist das ein Trick?</p>
      <div class="answers">
        <button type="button" class="answer-option" onclick="answerTraining(true)">Das ist ein Trick.</button>
        <button type="button" class="answer-option" onclick="answerTraining(false)">Das ist echt.</button>
      </div>
    </article>
  `;
  focusContent();
  renderLegalFooter();
}

function answerTraining(saysTrick) {
  stopReading();
  const msg = trainingMessages[trainingIndex];
  const isCorrect = saysTrick === Boolean(msg.isTrick);
  if (isCorrect) {
    trainingScore += 1;
    playSound("correct");
  } else {
    playSound("wrong");
  }

  const feedbackClass = isCorrect ? "feedback-correct" : "feedback-wrong";
  const feedbackTitle = isCorrect
    ? "✓ Richtig erkannt!"
    : (msg.isTrick ? "✗ Das war ein Trick." : "✗ Das war eine echte Nachricht.");

  content.innerHTML = `
    ${buildUtilityBar()}${buildReadingToolbar()}
    <article class="card training-card" data-readable="true">
      <div class="training-msg">
        <p class="training-msg-head"><strong>${escapeHtml(msg.channel)}</strong> von: ${escapeHtml(msg.from)}</p>
        <p class="training-msg-text">${escapeHtml(msg.text)}</p>
      </div>
      <p class="${feedbackClass}">${feedbackTitle}</p>
      <p>${escapeHtml(msg.explanation)}</p>
      ${isCorrect ? "" : "<p>Gut, dass du hier übst. Beim Üben lernst du.</p>"}
      <div class="certificate-actions">
        <button type="button" class="quiz-link quiz-button" onclick="nextTrainingMessage()">Weiter</button>
      </div>
    </article>
  `;
  focusContent();
  renderLegalFooter();
}

function nextTrainingMessage() {
  trainingIndex += 1;
  renderTrainingMessage();
}

function renderTrainingResult() {
  stopReading();
  const total = trainingMessages.length || 1;
  playSound("success");

  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Trainings-Postfach", "Ergebnis", "Ergebnis", "Fertig", 100);
  setOrientation("Geschafft! Du hast im Trainings-Postfach geübt.");
  showNav(false, false);

  const praise = trainingScore === total
    ? "Alle richtig erkannt. Das war stark!"
    : trainingScore >= Math.ceil(total / 2)
      ? "Das war schon sehr gut. Jedes Üben macht dich sicherer."
      : "Gut, dass du geübt hast. Tricks zu erkennen ist schwer. Übe einfach nochmal.";

  content.innerHTML = `
    ${buildUtilityBar()}${buildReadingToolbar()}
    <article class="card quiz-result-card" data-readable="true">
      <h2>Trainings-Postfach – Fertig!</h2>
      <p>Du hast ${trainingScore} von ${total} Nachrichten richtig erkannt.</p>
      <p>${escapeHtml(praise)}</p>
      <div class="access-box remember remember-box">
        <h3>Wichtig</h3>
        <p class="remember-text">Bekommst du wirklich so eine Nachricht? Zeige sie einer Person, der du vertraust. Du musst nichts allein entscheiden.</p>
      </div>
      <div class="certificate-actions">
        <button type="button" class="quiz-link quiz-button" onclick="beginTraining()">Noch einmal üben</button>
        <button type="button" class="nav-button secondary" onclick="renderTopicChoice('betrug')">Zum Thema Betrug</button>
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
  setOrientation(`Das ist deine Urkunde für das Thema: ${topic.title}.`);
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

        ${roleFigure("erfolg")}
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
        ${(() => { const next = getNextTopicSuggestion(); return next && next.id !== topic.id ? `<button type="button" class="nav-button secondary" onclick="renderTopicChoice('${escapeHtml(next.id)}')">Nächstes Thema: ${escapeHtml(next.title)}</button>` : ""; })()}
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
  setOrientation(`Das ist die Merk-Karte für das Thema: ${topic.title}.`);
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
    pageDirection = "back";
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
      pageDirection = "forward";
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
  setActiveTab("lernweg");
  setOrientation("Du bist auf der Seite: Alle Merk-Karten.");
  rememberRoute("merk-alle");
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
  handlingRoute = true;
  try {
    const hash = decodeURIComponent(window.location.hash.replace("#", "").trim());
    if (!hash) {
      /* Beim Öffnen immer die kurze Intro-Startseite. „Los geht's" führt
         ins Onboarding (erster Besuch) oder zu den Themen. */
      return renderIntro();
    }

    /* Hauptmenü-Seiten */
    if (hash === "start") return renderIntro();
    if (hash === "themen") return renderMenu();
    if (hash === "lernweg") return renderMyPath();
    if (hash === "hilfe") return renderHelpPage();
    if (hash === "einstellungen") return renderSettingsPage();

    /* Sonderrouten */
    if (hash === "grosses-quiz") return startBigQuiz();
    if (hash === "wiederholen") return startRepeatQuiz();
    if (hash === "training") return startTrainingInbox();
    if (hash === "merk-alle") return renderAllMemoryCards();

    const [topicId, action] = hash.split(":");
    const topic = getTopicById(topicId);
    if (!topic) return renderMenu();

    if (action === "kurz" || action === "short") return startTopicMode(topicId, "short");
    if (action === "quiz") return startQuiz(topicId);
    if (action === "merk" || action === "memory") return renderMemoryCard(topicId);
    return renderTopicChoice(topicId);
  } finally {
    handlingRoute = false;
  }
}

/* ============================================================
   Ereignisse
   ============================================================ */

backButton.addEventListener("click", goBack);
nextButton.addEventListener("click", goNext);

/* Hauptmenü (Tab-Leiste) */
document.querySelectorAll(".main-tabbar .tab-item").forEach((item) => {
  item.addEventListener("click", () => navigateTab(item.dataset.tab));
});

/* Browser-Zurück/-Vor: gleiche Route-Logik wie beim direkten Einstieg.
   Gebündelt, weil hashchange und popstate zusammen feuern können. */
let hashHandleQueued = false;
function scheduleHandleHash() {
  if (hashHandleQueued) return;
  hashHandleQueued = true;
  setTimeout(() => { hashHandleQueued = false; handleHash(); }, 0);
}
window.addEventListener("popstate", scheduleHandleHash);

if (soundToggleButton) {
  soundToggleButton.addEventListener("click", toggleSound);
  updateSoundButton();
}

if (motionToggleButton) {
  motionToggleButton.addEventListener("click", toggleMotion);
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
  const block = button.closest(".ls-text-block, .ls-bullet-block, .access-box, .action-card, .topic-card, .sample-option, .language-card");
  readShortText(text, block);
}

document.addEventListener("click", handleReadCardEvent, true);
document.addEventListener("keydown", handleReadCardEvent, true);

/* Sanfter Übergang bei JEDEM Seitenwechsel (nicht nur beim Blättern in
   Lektionen): Sobald der Inhalt ausgetauscht wird, blendet die neue Seite
   weich ein. So ist auch der Wechsel von „Los geht's" zu den Themen, von
   Thema zu Lektion usw. gut nachvollziehbar (§3 Vorhersehbarkeit, Orientierung).
   Bei „weniger Bewegung" ist es über die globale CSS-Regel automatisch aus. */
if (content && "MutationObserver" in window) {
  const viewObserver = new MutationObserver(() => {
    /* Lektionen blättern schon selbst seitlich – dort nur sanft überblenden,
       sonst (Startseite, Themen, Quiz …) Einblenden mit kleiner Aufwärts-Bewegung. */
    const isLesson = !!content.querySelector(".page-flip");
    const cls = isLesson ? "view-enter-fade" : "view-enter";
    content.classList.remove("view-enter", "view-enter-fade");
    /* Reflow erzwingen, damit die Animation neu startet. */
    void content.offsetWidth;
    content.classList.add(cls);
  });
  viewObserver.observe(content, { childList: true });
}

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
loadDeviceShared();
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
/* hashchange und popstate können beim Browser-Zurück gleichzeitig feuern.
   scheduleHandleHash bündelt beide zu genau einem Neuaufbau. */
window.addEventListener("hashchange", scheduleHandleHash);
