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
/* Einmal-Schalter: Die nächste Seite wird ohne automatisches Vorlesen
   aufgebaut (siehe setTopicAmount). */
let stillerNeuaufbau = false;
let currentStep = 0;
/* Richtung des Seitenwechsels für das sanfte Blättern (Weiter = vorwärts). */
let pageDirection = "forward";
let currentQuizIndex = 0;
let quizScore = 0;
/* Vor-Nutzertest (29.09.2026): richtig NACH einer Korrektur (nur Themen mit
   strenger Wiederholung) zählt hier – nicht in quizScore („gleich richtig“). */
let quizKorrigiert = 0;
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
      sprachstufeAnwenden();
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
  sprachstufeAnwenden();
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
  app:        { title: "Mit Hilfe der App",     desc: "Große Schrift. Vorlesen, wenn du es möchtest.",   icon: "message" },
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
    /* Befund 4 (21.09.2026): Auch die Ansage muss zum echten Zustand
       passen. Wer automatisches Vorlesen schon anhat, darf nicht hören,
       er solle es erst anschalten. */
    announce(autoRead
      ? "Gut. Die Schrift ist jetzt größer. Vorgelesen wird dir weiterhin jede Seite."
      : "Gut. Die Schrift ist jetzt größer. Automatisches Vorlesen kannst du in den Einstellungen anschalten.");
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

/* ------------------------------------------------------------
   AUFGABEN UND THEMEN-FELDER JE SPRACHSTUFE (Datenschutz, Paket 5)
   Aufgaben (Übung, Quiz, Formular) und einige Themen-Felder haben ihre
   Fassungen in content-de.js (AUFGABEN_VERSIONS, THEMA_VERSIONS). Beim
   Setzen der Sprachstufe werden die Texte an Ort und Stelle eingesetzt –
   so zeigen alle Ansichten (Übung, Quiz, Kurz-Quiz, Noch einmal üben,
   Frage des Tages, Formular) dieselbe Stufe, ohne eigene Umwege.
   Die Leicht-Fassung wird vorher gemerkt (WeakMap) und bleibt Referenz.
   Wer eine Aufgabe ist, sagt der Schlüssel (Frage in Leichter Sprache),
   nie der angezeigte Text: schwierige Aufgaben, zweiter Versuch und
   Formular-Wahl bleiben beim Sprachwechsel erhalten.
   Der Merksatz (remember) bleibt der Regel-Schlüssel; angezeigt wird die
   Stufen-Fassung. Themen ohne Einträge bleiben unverändert.
   ------------------------------------------------------------ */
/* Lerninhalt vs. Bedientext (Entscheidung 29.09.2026, PROJEKTREGELN §2):
   Diese Felder sind LERNINHALT und haben je Stufe eine Fassung
   (Aufgabenstellung, Antworten, Rückmeldung/Erklärung, Tipp, Ausweg).
   Bedientexte (Knöpfe, „Ich bin unsicher“, Ansagen in RUECKMELDUNG,
   FRAGE_TEXT) bleiben in allen Stufen gleich. */
const AUFGABE_TEXTFELDER = ["question", "situation", "hinweis", "answers", "feedbackCorrect", "feedbackWrong", "feedbackAuch", "ausweg", "auswegRueckmeldung"];
const THEMA_TEXTFELDER = ["desc", "transfer", "learningGoals", "helpQuestions", "memoryRules"];
const leichtFassung = new WeakMap();

function textKopie(x) {
  return (x && typeof x === "object") ? JSON.parse(JSON.stringify(x)) : x;
}

function aufgabeSchnappschuss(q) {
  const s = {};
  AUFGABE_TEXTFELDER.forEach(k => { if (q[k] !== undefined) s[k] = textKopie(q[k]); });
  if (q.formular) s.formular = { titel: q.formular.titel };
  if (Array.isArray(q.felder)) s.felder = q.felder.map(f => ({ name: f.name, wofuer: f.wofuer, zustand: textKopie(f.zustand), rueckmeldung: textKopie(f.rueckmeldung) }));
  return s;
}

function aufgabeEinsetzen(q, v) {
  if (!v) return;
  AUFGABE_TEXTFELDER.forEach(k => { if (v[k] !== undefined) q[k] = textKopie(v[k]); });
  if (v.formular && q.formular && v.formular.titel !== undefined) q.formular.titel = v.formular.titel;
  if (Array.isArray(v.felder) && Array.isArray(q.felder)) {
    v.felder.forEach((vf, i) => {
      const f = q.felder[i];
      if (!f || !vf) return;
      if (vf.name !== undefined) f.name = vf.name;
      if (vf.wofuer !== undefined) f.wofuer = vf.wofuer;
      if (vf.zustand !== undefined) f.zustand = textKopie(vf.zustand);
      if (vf.rueckmeldung !== undefined) f.rueckmeldung = textKopie(vf.rueckmeldung);
    });
  }
  if (v.remember !== undefined) q.rememberAnzeige = v.remember;
}

/* Rückfall wie bei den Lektionen: standard → einfach → Leicht (je Feld). */
function stufeEinsetzen(obj, versions, schnappschuss, einsetzen) {
  if (!leichtFassung.has(obj)) leichtFassung.set(obj, schnappschuss(obj));
  einsetzen(obj, leichtFassung.get(obj));
  if (languageLevel === "einfach" || languageLevel === "standard") einsetzen(obj, versions.einfach);
  if (languageLevel === "standard") einsetzen(obj, versions.standard);
}

function themaEinsetzen(t, v) {
  if (!v) return;
  THEMA_TEXTFELDER.forEach(k => { if (v[k] !== undefined) t[k] = textKopie(v[k]); });
}

function sprachstufeAnwenden() {
  if (typeof topics === "undefined" || !Array.isArray(topics)) return;
  topics.forEach(t => {
    if (t.versions) {
      stufeEinsetzen(t, t.versions, x => { const s = {}; THEMA_TEXTFELDER.forEach(k => { if (x[k] !== undefined) s[k] = textKopie(x[k]); }); return s; }, themaEinsetzen);
    }
    aufgabenVonThema(t).forEach(q => {
      if (!q.versions) return;
      q.rememberAnzeige = null;
      stufeEinsetzen(q, q.versions, aufgabeSchnappschuss, aufgabeEinsetzen);
    });
  });
}

/* Alle Aufgaben eines Themas (jede nur einmal). */
function aufgabenVonThema(t) {
  const ns = t.neueSituation || {};
  const liste = [].concat(
    (t.lessons || []).map(l => l && l.practice), (t.einfachLessons || []).map(l => l && l.practice),
    t.quizQuestions || [], t.quiz || [], ns.aufgaben || [], ns.fragen || []);
  return liste.filter((q, i) => q && typeof q === "object" && liste.indexOf(q) === i);
}

/* Wer eine Aufgabe ist: die Frage in Leichter Sprache (Schlüssel). */
function aufgabeSchluessel(frage) {
  return String((frage && (frage.schluessel || frage.question)) || "").trim();
}

/* Merksatz zum Anzeigen (Stufe); die Regel-Zuordnung liest remember. */
function merksatzAnzeige(frage) {
  return (frage && (frage.rememberAnzeige || frage.remember)) || "";
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
  if (typeof lernNavHoeheMessen === "function") lernNavHoeheMessen();
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

/* ============================================================
   Bild-Code: ein freiwilliges Schloss vor dem eigenen Lernstand.
   Drei Symbole in einer Reihenfolge – Wiedererkennen statt
   Auswendigwissen (§3, Cognitive Load). Braucht weder Lesen noch
   Zahlen und benutzt die Bildsprache, die die Person beim Zeichen
   schon gelernt hat.

   Ehrliche Einordnung: Der Code liegt im localStorage des Geräts
   und ist dort lesbar. Er schützt zuverlässig vor Verwechslung –
   nicht vor Absicht. Genau dafür ist er gedacht.

   Feste Regeln (§3 Došen, §9 COGA):
   - freiwillig, standardmäßig aus
   - niemand wird ausgesperrt, Versuche werden nie gezählt
   - ein falscher Code rührt den Lernstand nicht an
   ============================================================ */
const CODE_LENGTH = 3;
let codeEntry = [];       /* laufende Eingabe beim Anmelden */
let codeDraft = [];       /* laufende Eingabe beim Vergeben */
let codeTargetId = null;  /* für welches Profil */
let codeError = false;

function hasCode(profile) {
  return !!profile && Array.isArray(profile.code) && profile.code.length === CODE_LENGTH;
}
function codeMatches(profile, entry) {
  return hasCode(profile) && entry.length === CODE_LENGTH
    && profile.code.every((k, i) => k === entry[i]);
}
/* Symbol-Knöpfe – gleiche Optik wie die Zeichen-Auswahl (Wiedererkennbarkeit §12). */
function codeIconGrid(handler) {
  return SIGN_ICONS.map(ic => `
    <button type="button" class="sign-pick" onclick="${handler}('${ic.key}')" aria-label="${escapeHtml(ic.name)}">
      <span class="sign-pick-bubble"><svg viewBox="0 0 100 100" aria-hidden="true">${ic.svg.replace(/#fff/g, "currentColor")}</svg></span>
      <span class="sign-pick-name">${escapeHtml(ic.name)}</span>
    </button>`).join("");
}
/* Zeigt, wie viele Bilder schon angetippt sind. */
function codeDots(list) {
  let out = "";
  for (let i = 0; i < CODE_LENGTH; i++) {
    const ic = list[i] ? SIGN_ICONS.find(s => s.key === list[i]) : null;
    out += ic
      ? `<span class="code-dot code-dot--filled"><svg viewBox="0 0 100 100">${ic.svg.replace(/#fff/g, "currentColor")}</svg></span>`
      : `<span class="code-dot"></span>`;
  }
  return `<div class="code-dots" role="img" aria-label="${list.length} von ${CODE_LENGTH} Bildern angetippt">${out}</div>`;
}

/* ============================================================
   Rückkehr-Prüfung: Ein Tablet wird nicht geschlossen, sondern
   schlafen gelegt. Ohne diese Prüfung wacht die App mit der
   vorigen Person wieder auf – genau daraus entsteht auf einem
   geteilten Gerät das Durcheinander.

   WICHTIG: Die Uhr läuft NUR, solange die App im Hintergrund ist,
   niemals während des Lesens. §9 (COGA) verbietet Zeitlimits, und
   diese Zielgruppe liest langsam. Wer nachdenkt, wird nie
   unterbrochen. Verloren geht auch nichts: Der Lernstand hängt am
   Zeichen, nicht an der Sitzung.
   ============================================================ */
const AWAY_KEY = "weg-seit";              /* geräteweit, nicht pro Profil */
const AWAY_LIMIT_MS = 3 * 60 * 1000;      /* 3 Minuten – eine Zahl, leicht änderbar */

function markAway() {
  try { window.localStorage.setItem(AWAY_KEY, String(Date.now())); } catch (e) { /* nichts tun */ }
}
function checkReturn() {
  let since = null;
  try {
    since = window.localStorage.getItem(AWAY_KEY);
    window.localStorage.removeItem(AWAY_KEY);
  } catch (e) { return; }
  if (!since) return;
  if (!deviceShared || profiles.length === 0) return;
  if (Date.now() - Number(since) < AWAY_LIMIT_MS) return;
  stopReading();
  renderProfilePicker();
}

/* ============================================================
   Zeichen in der Kopfzeile: sagt auf JEDER Seite, wer man gerade
   ist – auch mitten in einer Lektion. Ein Tipp darauf öffnet die
   Personen-Liste. Nur auf geteilten Geräten sichtbar; auf einem
   eigenen Gerät wäre es Dekoration ohne Funktion (§3 Kohärenz).
   ============================================================ */
function updateHeaderSign() {
  const el = document.getElementById("headerSign");
  if (!el) return;
  const p = getActiveProfile();
  if (!p || !deviceShared || onboarding) { el.hidden = true; return; }
  el.hidden = false;
  el.innerHTML = signHtml(p) + `<span class="header-sign-word">Das bist du</span>`;
  el.setAttribute("aria-label", "Du bist " + signLabel(p) + ". Hier kannst du die Person wechseln.");
}
function hideHeaderSign() {
  const el = document.getElementById("headerSign");
  if (el) el.hidden = true;
}

/* Alle Schlüssel, die pro Profil getrennt gespeichert werden.
   Vollständige Liste – Profil-Löschung (resetProfile/deleteProfile) und
   Auto-Migration (ensureProfiles) laufen darüber. Bewusst als Strings
   (Reihenfolge egal), damit die Deklarations-Reihenfolge der KEY-Konstanten
   im Modul keine Rolle spielt. Global bleiben nur profile-liste,
   profil-aktiv und geraet-geteilt – sie stehen hier NICHT drin. */
const PROFILE_BASE_KEYS = ["language-level", "font-size-step", "lernstand", "lern-weg", "lern-weg-gesehen", "vorwissen", "motion", "vorlesen-automatisch", "vorlesen-gefragt", "vorlese-tempo", "einrichtung-rest", "letzte-lektion", "menue-gesehen", "mengen-wahl", "mengen-zuletzt", "ketten-lauf"];

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
  loadAutoRead();       /* Automatisches Vorlesen (Wahl, Standard: aus) */
  loadMotion();         /* liest + wendet Bewegungs-Einstellung an */
  loadLanguageLevel();  /* setzt languageLevel + languageChosen, falls gemerkt */
  sprachstufeAnwenden(); /* Paket 5: Aufgaben/Themen-Felder in der Stufe (auch Rückfall Leicht) */
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
    /* Diese Zustimmung erklärt auch unterbrochene Runden. Alte gespeicherte
       Zustimmungen werden nicht automatisch auf Antworten erweitert. */
    progress.pauseErlaubt = true;
    progress.done = progress.done || {};
    const ctx = lastLessonContext && lastLessonContext.pause ? pauseCursorPruefen(lastLessonContext) : null;
    const stand = ctx && pauseStandPruefen(pauseSitzung, ctx);
    if (stand) progress.pause = stand;
    saveProgress(progress);
  } else {
    pRemove(STORAGE_KEY);
    pauseBewertungLoeschen();
  }
}

/* Sitzungs-Gedächtnis für Erfolge: erkennt „geschafft" auch OHNE
   gespeicherten Lernstand (Bandura: Erfolg muss sofort sichtbar sein).
   Nur im Arbeitsspeicher – verschwindet beim Schließen (KDG-konform §14). */
let sessionDoneTopics = new Set();
/* Erreichte Runde je Thema im Uebungs-Handy. Nur Arbeitsspeicher,
   genau wie sessionDoneTopics – ohne Einwilligung wird nichts gespeichert. */
let sessionScenarioStufe = {};
/* Selbstcheck und Kurz-Frage: nur im Arbeitsspeicher, nichts gespeichert (§14).
   Der Vergleich "vorher/nachher" passt in dieselbe Sitzung – dafuer braucht es
   keine Einwilligung und keine neue Datenkategorie. */
let selfAssessmentStart = {};
let miniCheckDone = {};
/* Vorhersage am Einstieg (Datenschutz, Paket 2): gewählte Antwort je Thema,
   nur im Arbeitsspeicher – die Abschluss-Seite greift sie wieder auf. */
let vorhersageStart = {};

/* Vor-Nutzertest (29.09.2026): Stand des Lernwegs je umgebautem Thema. Ein
   gespeicherter Abschluss zählt nur, wenn er mit diesem Stand gespeichert
   wurde (`weg`). Ältere Abschlüsse – z. B. des alten Datenschutz-Themas bis
   v2026-19y – bleiben im Speicher liegen (nichts wird gelöscht), gelten aber
   nicht als Abschluss des neuen Wegs; die App bittet dann, das Thema noch
   einmal anzusehen. Andere Themen: wie bisher.
   Hilfe bei Problemen: Neuaufbau Paket H1 (30.09.2026), Stand "h1". */
const WEG_STAND = { datenschutz: "p2", hilfe: "h1" };

function abschlussVeraltet(topicId, val) {
  const stand = WEG_STAND[topicId];
  return !!stand && !(val && typeof val === "object" && val.weg === stand);
}

function markTopicDone(topicId) {
  sessionDoneTopics.add(topicId);
  if (!isProgressEnabled()) return;
  const progress = loadProgress() || { enabled: true, done: {} };
  progress.done = progress.done || {};
  /* Zeitstempel speichern – für Wiederholungs-Erinnerung */
  const existing = progress.done[topicId];
  progress.done[topicId] = { ts: Date.now(), count: (existing && existing.count ? existing.count + 1 : 1) };
  if (WEG_STAND[topicId]) progress.done[topicId].weg = WEG_STAND[topicId];
  saveProgress(progress);
}

function isTopicDone(topicId) {
  if (sessionDoneTopics.has(topicId)) return true;
  const progress = loadProgress();
  if (!progress || !progress.done) return false;
  const val = progress.done[topicId];
  /* Rückwärts-kompatibel: alter Wert war true (boolean) */
  if (!val) return false;
  return !abschlussVeraltet(topicId, val);
}

/* Alter Abschluss eines inzwischen umgebauten Themas (siehe WEG_STAND). */
function themaUeberarbeitet(topicId) {
  if (sessionDoneTopics.has(topicId)) return false;
  const progress = loadProgress();
  const val = progress && progress.done ? progress.done[topicId] : null;
  return !!val && abschlussVeraltet(topicId, val);
}

function getTopicDoneTimestamp(topicId) {
  const progress = loadProgress();
  if (!progress || !progress.done) return null;
  const val = progress.done[topicId];
  if (!val || abschlussVeraltet(topicId, val)) return null;
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
/* Vorschlag „Dein nächstes Thema" (Prüfbericht B17).
   Früher lief die Suche über die Reihenfolge in topics.js. Die Themenseite
   zeigt die Themen aber in der Reihenfolge der TOPIC_GROUPS – der Vorschlag
   sprang dadurch an offenen Themen der Gruppe „Wichtig für alle" vorbei.
   Jetzt folgt der Vorschlag genau der sichtbaren Reihenfolge. */
function getTopicsInDisplayOrder() {
  if (typeof TOPIC_GROUPS === "undefined" || !Array.isArray(TOPIC_GROUPS)) return topics.slice();
  const geordnet = TOPIC_GROUPS
    .flatMap(g => g.ids)
    .map(id => topics.find(t => t.id === id))
    .filter(Boolean);
  const gesehen = new Set(geordnet.map(t => t.id));
  /* Themen ohne Gruppe hängen hinten an – so wie sie die Seite auch zeigt. */
  return geordnet.concat(topics.filter(t => !gesehen.has(t.id)));
}

function getNextTopicSuggestion() {
  return getTopicsInDisplayOrder().find((topic) => !isTopicDone(topic.id)) || null;
}

function toggleProgressSaving() {
  if (isProgressEnabled()) {
    setProgressEnabled(false);
    sessionDoneTopics = new Set();
  sessionScenarioStufe = {};
  sessionRegeln = {};
  schwereSitzung = {}; /* auch die schwierigen Aufgaben dieser Sitzung (Lernweg) */
    /* Befund T05 (21.09.2026): Hier stand „Es wird nichts mehr gespeichert."
       Das stimmte nicht. setProgressEnabled(false) entfernt nur den Schlüssel
       `lernstand`. Der Wiedereinstieg (`letzte-lektion`), die Zahl der
       Ketten-Durchgänge (`ketten-lauf`) und die Kurz/Mehr-Wahl je Thema
       (`mengen-wahl`) bleiben stehen – sie sind Bedien-Einstellungen wie die
       Schriftgröße und der Rück-Anker ist ausdrücklich geschützter Bestand
       (§1). Entschieden am 21.09.2026: Einordnung bleibt, die Zusage wird
       richtig. Wer auch den Wiedereinstieg loswerden will, findet dafür auf
       „Mein Lernweg" einen eigenen Knopf (clearResumeData). */
    announce("Der Lernstand ist gelöscht. Die App merkt sich nicht mehr, welche Themen du geschafft hast. Dein Wiedereinstieg und deine Einstellungen bleiben. Die kannst du getrennt löschen.");
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

/* Löscht genau die drei Bedien-Daten, die NICHT am Lernstand hängen:
   Wiedereinstieg, Ketten-Durchgänge und die Kurz/Mehr-Wahl je Thema.
   Getrennter Weg, damit die Zusage beim Lernstand stimmt und die Person
   trotzdem alles loswerden kann (T05, Entscheidung 21.09.2026).
   Das Profil selbst, die Sprache und die Schriftgröße bleiben – dafür gibt
   es „neu anfangen" und „Profil löschen". */
function clearResumeData() {
  clearLastLesson();
  clearTopicAmounts();
  pRemove(KETTEN_KEY);
  announce("Der Wiedereinstieg ist gelöscht. Du fängst bei jedem Thema wieder vorne an. Deine Sprache und deine Schriftgröße bleiben.");
  /* Der Knopf steht auf „Mein Lernweg", direkt neben der Lernstand-Zusage.
     Auf der Seite bleiben, auf der die Person ist (Vorhersehbarkeit, §9). */
  if (activeTab === "einstellungen") renderSettingsPage();
  else renderMyPath();
}

/* Gibt es überhaupt etwas zu löschen? Sonst steht dort ein Knopf ohne
   Wirkung – das verunsichert mehr, als es hilft (§9 COGA). */
function hasResumeData() {
  return Boolean(pGet(LAST_LESSON_KEY) || pGet(TOPIC_AMOUNT_KEY) || pGet(KETTEN_KEY));
}

/* Lernstand direkt auf der Abschluss-Seite einschalten – ohne die Seite
   neu zu bauen (kein Kontextverlust, kein Sprung). */
function enableProgressInline(button) {
  const bereitsAktiv = isProgressEnabled();
  setProgressEnabled(true);
  if (!bereitsAktiv) sessionDoneTopics.forEach((id) => markTopicDone(id));
  announce("Der Lernstand wird jetzt auf diesem Gerät gespeichert.");
  const box = button.closest(".progress-consent");
  if (box) box.innerHTML = `<p class="progress-consent-title">✓ Ich merke mir deinen Lernstand. Nur auf diesem Gerät. Ohne Namen.</p><p class="progress-consent-note">Auch Antworten und Treffer einer unterbrochenen Runde werden gemerkt.</p>`;
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
  "link":                   "Ein Link ist ein Wort oder Bild zum Antippen. Es führt dich zu einer anderen Seite oder Datei.",
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
  "abo-falle":              "Eine Abo-Falle ist ein Trick. Du tippst auf etwas. Und plötzlich hast du einen teuren Vertrag.",
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
  "quishing":               "Quishing ist Betrug mit falschen QR-Codes. Betrüger kleben falsche Codes über echte. Scanne nur Codes von vertrauten Menschen.",
  /* Beta-Version (06.10.2026): Kopf und Fußzeile nennen die Plattform
     „Beta-Version“. Leichte Sprache, ein Wort für beides (§5). */
  "beta-version":           "Eine Beta-Version ist eine Test-Version. Das Programm ist noch nicht ganz fertig. Manches ändert sich noch. Manches klappt vielleicht noch nicht. Du kannst uns helfen. Sag uns: Was ist gut? Was ist schwer?",
  "version":                "Eine Version ist ein Stand von einem Programm. Kommt etwas Neues dazu? Dann gibt es eine neue Version."
};

/* Beta-Version (06.10.2026): Braucht ein Wort in einer Erklärung selbst eine
   Erklärung, bietet die Erklärung darunter einen Knopf dorthin an. */
const GLOSSAR_SIEHE = {
  "beta-version": { wort: "version", frage: "Was ist eine Version?" },
  "update":       { wort: "version", frage: "Was ist eine Version?" }
};

let glossarOverlay = null;

/* ============================================================
   Fokus-Falle und Fokus-Rueckgabe fuer die drei Dialoge
   (Woerter-Erklaerung, Pause machen, Was bedeuten die Zeichen)

   Vorher konnte der Tastatur-Fokus jeden dieser Dialoge schon beim
   ERSTEN Tab verlassen und lief dann durch die Seite dahinter weiter -
   sichtbar war aber nur der Dialog. Wer mit der Tastatur bedient, hat
   den Fokus damit verloren.

   Bewusst von Hand geloest und nicht ueber das inert-Attribut: inert
   wird von aelteren Geraeten stillschweigend ignoriert, und dann gaebe
   es gar keine Falle. Diese Fassung funktioniert ueberall gleich.

   EINE Stelle fuer alle drei Dialoge - vorher hatte die
   Woerter-Erklaerung ihre eigene Loesung fuer die Rueckgabe und die
   beiden anderen gar keine.
   ============================================================ */
let _dialogAktiv = null;   /* der gerade offene Dialog */
let _dialogFokus = null;   /* was vorher den Fokus hatte */

const DIALOG_FOKUSSIERBAR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]),' +
  ' textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])';

function dialogFokusListe() {
  if (!_dialogAktiv) return [];
  return Array.from(_dialogAktiv.querySelectorAll(DIALOG_FOKUSSIERBAR))
    .filter(el => el.offsetParent !== null || el === document.activeElement);
}

function dialogTabFalle(event) {
  if (!_dialogAktiv || event.key !== "Tab") return;
  const liste = dialogFokusListe();
  if (!liste.length) { event.preventDefault(); return; }
  const erster = liste[0];
  const letzter = liste[liste.length - 1];
  /* Fokus schon draussen? Zurueckholen. */
  if (!_dialogAktiv.contains(document.activeElement) || !liste.includes(document.activeElement)) {
    event.preventDefault();
    (event.shiftKey ? letzter : erster).focus();
    return;
  }
  if (event.shiftKey && document.activeElement === erster) {
    event.preventDefault();
    letzter.focus();
  } else if (!event.shiftKey && document.activeElement === letzter) {
    event.preventDefault();
    erster.focus();
  }
}

function dialogOeffnen(dialog) {
  if (!dialog) return;
  /* Nur merken, wenn nicht schon ein Dialog offen war - sonst ginge der
     urspruengliche Ausgangspunkt verloren. */
  if (!_dialogAktiv) _dialogFokus = document.activeElement;
  _dialogAktiv = dialog;
  document.addEventListener("keydown", dialogTabFalle, true);
}

function dialogSchliessen(dialog) {
  /* Nur schliessen, wenn wirklich DIESER Dialog offen ist. Escape ruft
     beide Schliess-Wege auf; ohne diese Pruefung wuerde der eine dem
     anderen den Fokus wegnehmen. */
  if (!_dialogAktiv || (dialog && dialog !== _dialogAktiv)) return;
  document.removeEventListener("keydown", dialogTabFalle, true);
  _dialogAktiv = null;
  const zurueck = _dialogFokus;
  _dialogFokus = null;
  if (zurueck && document.contains(zurueck) && typeof zurueck.focus === "function") {
    zurueck.focus();
  }
}

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
      <button class="link-action glossar-siehe" type="button" hidden></button>
    </div>`;
  document.body.appendChild(glossarOverlay);

  glossarOverlay.addEventListener("click", (e) => {
    if (e.target === glossarOverlay || e.target.closest(".glossar-close")) {
      hideGlossar();
    }
  });
}

function showGlossar(termKey, anzeige) {
  const def = GLOSSAR[termKey];
  if (!def || !glossarOverlay) return;
  dialogOeffnen(glossarOverlay);
  const display = anzeige || (termKey.charAt(0).toUpperCase() + termKey.slice(1));
  document.getElementById("glossarWordTitle").textContent = display;
  document.getElementById("glossarWordDef").textContent = def;
  const siehe = glossarOverlay.querySelector(".glossar-siehe");
  const weiter = GLOSSAR_SIEHE[termKey];
  siehe.hidden = !weiter;
  if (weiter) { siehe.dataset.glossar = weiter.wort; siehe.textContent = weiter.frage; }
  glossarOverlay.classList.remove("is-hidden");
  glossarOverlay.querySelector(".glossar-close").focus();
}

function hideGlossar() {
  if (!glossarOverlay) return;
  glossarOverlay.classList.add("is-hidden");
  dialogSchliessen(glossarOverlay);
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
  /* Beta-Version (06.10.2026): Knöpfe außerhalb des Inhalts (Kopf, Fußzeile)
     und in der Erklärung selbst tragen das Wort in data-glossar. */
  document.addEventListener("click", (e) => {
    const knopf = e.target.closest("[data-glossar]");
    if (knopf) showGlossar(knopf.dataset.glossar, knopf.dataset.glossarWort);
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
        /* Paket 6: nicht in Bereichen, die Vorlese-Programme überspringen
           (z. B. Wegweiser-Zeile) – sonst gäbe es dort einen Tab-Halt, den
           ein Vorlese-Programm nicht ansagt (WCAG 4.1.2). */
        if (el.getAttribute && el.getAttribute("aria-hidden") === "true") return NodeFilter.FILTER_REJECT;
        el = el.parentElement;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  /* Lernweg-Test (26.09.2026): Pro Seite ist nur das ERSTE Vorkommen eines
     Begriffs antippbar. Vorher war z. B. „Passwort" auf einer Seite sechsmal
     ein Tab-Halt – mit der Tastatur und beim Vorlesen eine Last. */
  const schonMarkiert = new Set(Array.from(content.querySelectorAll(".glossar-term")).map(e => e.dataset.term));
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
      if (schonMarkiert.has(m[0].toLowerCase())) continue;
      schonMarkiert.add(m[0].toLowerCase());
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
  /* Hilfe war #C9541C – nur ΔE 9 von der Warnfarbe --warn entfernt. Ausgerechnet
     das Hilfe-Thema sah damit nach Warnung aus. Jetzt ruhiges Petrol
     (ΔE 40 zum naechsten Ton), 5,4:1 auf Weiss. */
  hilfe:       ["#0E7490", "rgba(14, 116, 144, 0.30)",  "rgba(14, 116, 144, 0.12)", "#E7F3F7"],
  ki:          ["#6B3FA0", "rgba(107, 63, 160, 0.28)",  "rgba(107, 63, 160, 0.10)", "#F1EAFA"],
  /* Fakes war #B45309 – exakt die Warnfarbe --warn. Ein Thema sah damit aus
     wie ein Warnhinweis. Jetzt warmes Braun (ΔE 29 zu --warn), 5,9:1 auf Weiss. */
  fakes:       ["#8A5A2B", "rgba(138, 90, 43, 0.28)",   "rgba(138, 90, 43, 0.10)",  "#F6EFE7"],
  /* Betrug war #B91C1C – derselbe Farbton wie YouTube #CC0000 (beide Hue 0), im Dark
     Mode sogar derselbe Wert. Jetzt Rose (Hue 342), 8,0:1 auf Weiss. */
  betrug:      ["#9F1239", "rgba(159, 18, 57, 0.26)",   "rgba(159, 18, 57, 0.10)",  "#FBE9EE"],
  /* Einkaufen war #15803D – im Dark Mode exakt WhatsApp-Gruen. Jetzt Limette (Hue 86),
     5,0:1 auf Weiss. Damit hat das Thema in hell und dunkel dieselbe Identitaet. */
  einkaufen:   ["#4D7C0F", "rgba(77, 124, 15, 0.28)",   "rgba(77, 124, 15, 0.10)",  "#F0F6E4"]
};

/* Hellere Farben für Dark-Mode (auf dunkelm Hintergrund besser lesbar) */
const TOPIC_COLORS_DARK = {
  datenschutz: ["#58a8e0", "rgba(88,168,224,0.30)",  "rgba(88,168,224,0.12)",  "rgba(88,168,224,0.15)"],
  /* war #4ade80 = exakt --good. Ein gruenes WhatsApp-Thema sah aus wie eine
     Richtig-Rueckmeldung. Jetzt Teal-Gruen (ΔE 32 zu --good), 7,1:1 auf
     --surface – und naeher an WhatsApps heutiger Markenfarbe #00A884. */
  whatsapp:    ["#00c9a7", "rgba(0,201,167,0.30)",   "rgba(0,201,167,0.12)",   "rgba(0,201,167,0.15)"],
  facebook:    ["#60a5fa", "rgba(96,165,250,0.30)",  "rgba(96,165,250,0.12)",  "rgba(96,165,250,0.15)"],
  instagram:   ["#f472b6", "rgba(244,114,182,0.30)", "rgba(244,114,182,0.12)", "rgba(244,114,182,0.15)"],
  /* war #f87171 = exakt --bad. Jetzt Koralle (ΔE 22 zu --bad), 7,5:1 auf
     --surface. Weiter auseinander geht im Dark Mode nicht, ohne unter AA zu
     fallen oder mit hilfe/betrug zu kollidieren – siehe Notiz im Memory. */
  youtube:     ["#ff9e80", "rgba(255,158,128,0.30)", "rgba(255,158,128,0.12)", "rgba(255,158,128,0.15)"],
  snapchat:    ["#fde047", "rgba(253,224,71,0.30)",  "rgba(253,224,71,0.12)",  "rgba(253,224,71,0.15)"],
  tiktok:      ["#a5f3fc", "rgba(165,243,252,0.30)", "rgba(165,243,252,0.12)", "rgba(165,243,252,0.15)"],
  /* war #fb923c – ΔE 13 zu --warn. Jetzt Petrol wie in hell, damit das Thema
     in beiden Modi dieselbe Identitaet hat. 6,2:1 auf --surface. */
  hilfe:       ["#06b6d4", "rgba(6,182,212,0.30)",   "rgba(6,182,212,0.12)",   "rgba(6,182,212,0.15)"],
  ki:          ["#c084fc", "rgba(192,132,252,0.30)", "rgba(192,132,252,0.12)", "rgba(192,132,252,0.15)"],
  fakes:       ["#fbbf24", "rgba(251,191,36,0.30)",  "rgba(251,191,36,0.12)",  "rgba(251,191,36,0.15)"],
  /* war #f87171 = exakt YouTube. Jetzt Rose, 8,0:1 auf --surface. */
  betrug:      ["#fda4af", "rgba(253,164,175,0.30)", "rgba(253,164,175,0.12)", "rgba(253,164,175,0.15)"],
  /* war #4ade80 = exakt WhatsApp. Jetzt Limette, 10,0:1 auf --surface. */
  einkaufen:   ["#a3e635", "rgba(163,230,53,0.30)",  "rgba(163,230,53,0.12)",  "rgba(163,230,53,0.15)"]
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

/* Gemeinsames Piktogramm-Set, für diesen Einbau freigegeben am 02.10.2026.
   Alte Inhalts-Schlüssel bleiben gültig; Bedienung und Text verwenden
   dieselbe Datei je Begriff. Keine Kopie pro Größe oder Farbmodus. */
const PICTOGRAM_KEYS = new Set("home themen lernweg help einstellungen start vorlesen leise drucken lesen wiederholen offline neu erfahren geschafft quiz exercise remember example message ask mail anruf handy photo video link globe lock key code data location birthday money card bank einkaufen person people friend stranger feel check no block stop warning betrug fake report search understand pause clock plan ki whatsapp facebook instagram youtube snapchat tiktok paket geschenk".split(" "));
const PICTOGRAM_ALIASES = {
  house: "home", phone: "anruf", screen: "handy", fraud: "betrug",
  shop: "einkaufen", done: "check"
};
function pictoSrc(key) {
  const altKey = String(key || "").replace(/^pikto-/, "");
  const begriff = PICTOGRAM_ALIASES[altKey] || altKey;
  return `assets/pictograms/${PICTOGRAM_KEYS.has(begriff) ? begriff : "ask"}.svg`;
}
function pictoHtml(key, extraClass = "") {
  return `<img class="app-pictogram${extraClass ? " " + escapeHtml(extraClass) : ""}" src="${pictoSrc(key)}" alt="" aria-hidden="true" width="32" height="32">`;
}

/* Bessere Bild-Zuordnung: sucht anhand des Satz-Textes ein passenderes Icon.
   Nur klare Treffer überschreiben das hinterlegte Bild – sonst bleibt es.
   Zentral und umkehrbar (topics.js wird nicht verändert).
   04.10.2026: Durchsicht aller 549 Satz-Zeichen-Paare. Ergänzt sind Link,
   Melden, Paket, Gebühr/zahlen, „wo du bist“, Alexa/Siri und die
   Internet-Adresse eines Shops; „Blockieren“ zeigt das eigene Zeichen;
   „freundlich“ ist kein Freund. Liste mit Vorher/Nachher:
   berichte/design-umbau/10-SATZ-PIKTOGRAMME-2026-10-04.md */
const PICTO_RULES = [
  [/\blinks?\b/i, "pikto-link"],
  [/\bmelden\b/i, "pikto-report"],
  [/\bbank\b|sparkasse/i, "pikto-bank"],
  [/geld|euro|bezahl|gekauft|kostet|\bpreis\b|abzock|gebühr|\bzahl(?:e|en|st|t)\b/i, "pikto-money"],
  [/\bpakete?\b/i, "pikto-paket"],
  [/alexa|\bsiri\b/i, "pikto-ki"],
  [/wo du bist/i, "pikto-location"],
  [/adresse vom shop/i, "pikto-search"],
  [/kreditkarte|bezahl-?karte|bank-?karte/i, "pikto-card"],
  [/\bpin\b|geheim-?zahl|\bcode\b|tan\b/i, "pikto-code"],
  [/videos?\b/i, "pikto-video"],
  [/adresse|wo du wohnst|deine wohnung|zuhause/i, "pikto-house"],
  [/genau an|kontrollier|überprüf|prüfe nach/i, "pikto-search"],
  [/fremde|fremder|unbekannte person|unbekannter/i, "pikto-stranger"],
  [/freund(?!lich)/i, "pikto-friend"],
  [/internet|webseite|online|im netz/i, "pikto-globe"],
  [/e-?mail|brief\b/i, "pikto-mail"],
  [/warnzeichen|warn-?zeichen/i, "pikto-warning"],
  [/blockier/i, "pikto-block"],
  [/telefon-?nummer|handy-?nummer|deine nummer/i, "pikto-phone"],
  [/schreib/i, "pikto-message"],
  [/menschen|mensch\b|leute|andere personen|viele personen/i, "pikto-person"]
];
function refinePicto(key, text) {
  if (!text) return key;
  /* „Stopp“ mit hinterlegtem Pause-Zeichen bleibt: Der Satz „Du bezahlst
     nichts.“ soll daneben kein Geld-Zeichen auslösen. */
  if (key === "pikto-pause" && /\bstopp\b/i.test(text)) return key;
  for (let i = 0; i < PICTO_RULES.length; i++) {
    if (!PICTO_RULES[i][0].test(text)) continue;
    /* Das allgemeine Personen-Zeichen überschreibt kein gezielt gesetztes
       KI- oder Fake-Zeichen („Die KI ist kein Mensch.“). */
    if (PICTO_RULES[i][1] === "pikto-person" && (key === "pikto-ki" || key === "pikto-fake")) continue;
    return PICTO_RULES[i][1];
  }
  return ortOderWarten(handyOderHoerer(key, text), text);
}

/* „pikto-location“ hängt in den Inhalten auch an Sätzen ohne Ort – der alte
   Datenbestand hat das Zeichen am Wortteil „ort“ festgemacht („sofort“,
   „antworten“, „dort“). Die Standort-Nadel bleibt nur, wenn der Satz von
   einem Ort handelt. Sonst zeigt die App, worum es im Satz geht; meistens
   ist das „nicht sofort“, also: Pause. Zentral und umkehrbar wie oben. */
function ortOderWarten(key, text) {
  if (key !== "pikto-location" || /standort|\borte?s?\b|\bkarte\b/i.test(text)) return key;
  if (/\bki\b/i.test(text)) return "pikto-ki";
  if (/hilfe/i.test(text)) return "pikto-help";
  if (/prüf/i.test(text)) return "pikto-search";
  if (/drängt|schnell/i.test(text)) return "pikto-warning";
  if (/\bmusst\b.*\bnicht\b|^nicht alles/i.test(text)) return "pikto-no";
  return "pikto-pause";
}

/* „pikto-phone“ steht in den Inhalten für zwei Dinge: einen Anruf und das
   Handy als Gerät. Bis zum gemeinsamen Zeichen-Set (02.10.2026) gab es dafür
   nur den Hörer. Geht es im Text um das Handy, eine App oder die
   Einstellungen, zeigt die App das Handy; bei einer Nachricht ohne Anruf die
   Nachricht. Sonst bleibt der Hörer. Zentral und umkehrbar wie refinePicto –
   die Inhalts-Dateien bleiben unverändert. */
function handyOderHoerer(key, text) {
  if (key !== "pikto-phone" || !text) return key;
  if (/\bhandys?\b|\bapps?\b|einstellung|whatsapp|instagram|tiktok/i.test(text)) return "pikto-screen";
  if (/nachricht|\bsms\b/i.test(text) && !/anruf|telefon|\bruf/i.test(text)) return "pikto-message";
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
  return pictoHtml(iconName);
}

/* ============================================================
   Alex-&-Tilda-Rollen-Figuren
   Feste Rollen mit beschreibenden Leichte-Sprache-Alt-Texten.
   Diese Bilder tragen Bedeutung -> echtes alt (nicht aria-hidden).
   ============================================================ */

const ROLE_FIGURES = {
  /* „erklaeren" und „achtung" (Dateien vom 15.09.2026) sind ALTBESTAND der
     früheren Bildserie und werden nicht mehr verwendet (Hinweis der
     nutzenden Person, 26.09.2026). Nur Figuren der neuen Serie (24.09.)
     eintragen. Die Dateien bleiben im Ordner, bis sie aufgeräumt werden. */
  hilfe:      { file: "alex-tilda-hilfe.webp",      alt: "Alex zeigt dir, wo du Hilfe findest." },
  erfolg:     { file: "alex-tilda-erfolg.webp",     alt: "Alex und Tilda freuen sich mit dir." },
  nachdenken: { file: "alex-tilda-nachdenken.webp", alt: "Alex und Tilda überlegen. Was weißt du schon?" },
  winken:         { file: "alex-tilda-winken.webp",         alt: "Alex und Tilda winken dir zu. Hier beginnt alles." },
  themen:         { file: "alex-tilda-themen.webp",         alt: "Tilda zeigt auf die Themen. Such dir etwas aus." },
  lernweg:        { file: "alex-tilda-lernweg.webp",        alt: "Tilda hat ein Buch in der Hand. Das ist dein Lern-Weg." },
  einstellungen:  { file: "alex-tilda-einstellungen.webp",  alt: "Tilda zeigt auf die Schalter. Stell es dir passend ein." },
  ruhig:          { file: "alex-tilda-ruhig.webp",          alt: "Alex und Tilda sitzen ganz ruhig. Das macht nichts." }
};

function roleFigure(role, extraClass = "") {
  const f = ROLE_FIGURES[role];
  if (!f) return "";
  const cls = "role-figure" + (extraClass ? " " + extraClass : "");
  return `<img class="${cls}" src="assets/figures/${f.file}" alt="${escapeHtml(f.alt)}" loading="lazy" onerror="this.remove()">`;
}

/* Die alten Lern-Zeichnungen aus assets/lessons/ (Altbestand vom 15.09.2026)
   sind am 26.09.2026 entfernt worden. Nur inhaltlich passende Szenen der freigegebenen Serie stehen klein
   neben dem Titel. Kein Rückfall auf allgemeine Zeichnungen. */

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
  /* Kompakter Kopf gilt nur auf Lernschritten; renderLesson setzt ihn neu. */
  document.body.classList.remove("lesson-view");
  /* Kopf (§10a): Die Marke „Alex und Tilda" steht immer darüber, die
     Überschrift nennt die SEITE. Seiten, die noch den App-Titel übergeben,
     bekommen ihren Seitennamen (module) als Überschrift; nur die Startseite
     behält den App-Titel. Die Unterzeile bleibt nur, wenn sie etwas Neues
     sagt (z. B. „Mehr lernen"). */
  const APP_TITLE = "Sicher und selbstbestimmt im Internet";
  let h1 = title || APP_TITLE;
  let sub = module || "";
  if (h1 === APP_TITLE && sub && sub !== "Willkommen") { h1 = sub === "Thema auswählen" ? "Themen" : sub; sub = ""; }
  if (h1 === APP_TITLE) sub = "";
  if (sub === h1) sub = "";
  appTitle.textContent = h1;
  /* Seitentitel für Vorlese-Programme, Verlauf und Reiter (WCAG 2.4.2): nennt
     die Seite zuerst. Die Startseite behält den Titel aus index.html. */
  if (!setHeader.startTitel) setHeader.startTitel = document.title;
  document.title = h1 === APP_TITLE ? setHeader.startTitel : `${h1}${sub ? " – " + sub : ""} – ${APP_TITLE}`;
  moduleLabel.textContent = sub;
  stepLabel.textContent = step || "Themenübersicht";
  levelLabel.textContent = level || "Start";
  const safePercent = Math.max(0, Math.min(100, percent || 0));
  progressFill.style.width = `${safePercent}%`;
  progressTrack.setAttribute("aria-valuenow", String(safePercent));
  progressTrack.setAttribute("aria-valuetext", `${safePercent} Prozent`);
  updateHeaderSign();
}

function showNav(showBack, showNext, nextText = "Weiter") {
  backButton.disabled = !showBack;
  nextButton.disabled = !showNext;
  nextButton.textContent = nextText;
  delete nextButton.dataset.warten;
  nextButton.classList.remove("is-waiting");
}

/* Kein grauer Knopf ohne Wort (Gesamtprüfung 25.09.2026, B1).
   Hat ein Lernschritt eine Übung, war „Weiter" grau – ohne Erklärung, und
   die Übung lag unter dem sichtbaren Bereich. Jetzt sagt der Knopf, was
   vorher kommt („Zur Übung ↓"), und bringt die Person beim Antippen dorthin. */
function setNextWaitsForPractice() {
  if (!nextButton) return;
  nextButton.disabled = false;
  nextButton.dataset.warten = "1";
  nextButton.classList.add("is-waiting");
  nextButton.textContent = "Zur Übung";
}

function zeigeUebung() {
  const box = content.querySelector(".practice-box") || content.querySelector(".frage-antwortbereich");
  if (!box) return;
  const reduce = !motionEnabled || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  box.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  const erste = box.querySelector("button.answer-option, .answer-option, input.feld-check");
  if (erste) erste.focus({ preventScroll: true });
  announce(box.querySelector(".feld-check") ? "Hier ist die Übung. " + FELDER_TEXT.anleitung : "Hier ist die Übung. Tippe eine Antwort an.");
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
/* Legt die Themenfarbe auf die GANZE Seite, nicht nur auf die Karte.
   Kopfzeile und Fortschritts-Balken liegen ausserhalb von #content und
   konnten die Farbe deshalb nie sehen – sie waren in jedem Thema gleich.
   Genau das war die Rueckmeldung: „nicht so einfach zu sehen, wo man ist".
   Ohne Thema wird die Eigenschaft entfernt, dann greift der Wert aus
   :root (--accent) und alles sieht aus wie vorher. */
function setPageTopicColor(topicId) {
  const app = document.querySelector(".app");
  if (!app) return;
  const palette = isDarkMode() ? TOPIC_COLORS_DARK : TOPIC_COLORS;
  const p = topicId ? palette[topicId] : null;
  if (!p) { app.style.removeProperty("--topic-color"); return; }
  app.style.setProperty("--topic-color", p[0]);
}

function setOrientation(text) {
  if (!orientLine) return;
  orientLine.classList.toggle("is-hidden", !text);
  if (!text) {
    orientLine.textContent = "";
    orientLine.style.borderLeftColor = "";
    setPageTopicColor(null);
    return;
  }
  /* Dreifache Kodierung desselben Signals (UDL): Farbe (Rand), Bild
     (Themen-Symbol) und Satz. Ein eigener Hör-Knopf existiert seit
     Paket H nicht mehr: Die Vorlese-Pille liest den Ort-Satz zuerst
     (siehe readStart / readCurrentPage, das #orientLine voranstellt). */
  let color = "";
  let iconHtml = "";
  if (typeof currentTopicId !== "undefined" && currentTopicId) {
    const palette = isDarkMode() ? TOPIC_COLORS_DARK : TOPIC_COLORS;
    const p = palette[currentTopicId];
    if (p) color = p[0];
    const topic = getTopicById(currentTopicId);
    if (topic && topic.icon) iconHtml = `<span class="orient-icon" aria-hidden="true">${getIconHtml(topic.icon)}</span>`;
  }
  orientLine.innerHTML = `${iconHtml}<span class="orient-text">${escapeHtml(text)}</span>`;
  orientLine.style.borderLeftColor = color;
  /* Dieselbe Farbe an Kopfzeile und Fortschritts-Balken. */
  setPageTopicColor(color ? currentTopicId : null);
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
  /* Doppelte Überschrift (§10a): Nennt die erste Überschrift der Seite
     dasselbe wie der Kopf, bleibt sie für Vorlese-Programme da, wird aber
     nicht noch einmal groß gezeigt. */
  const firstH2 = content.querySelector("h2");
  if (firstH2 && appTitle && firstH2.textContent.trim() === appTitle.textContent.trim()) {
    firstH2.classList.add("sr-only");
    const line = firstH2.closest(".topic-intro-line");
    if (line) line.classList.add("is-duplicate");
    /* Übersicht (06.10.2026): Ohne sichtbare Überschrift stünde das Symbol
       daneben allein da (z. B. Einstiegsfrage eines Themas). */
    const symbolKopf = firstH2.closest(".symbol-heading");
    if (symbolKopf) symbolKopf.classList.add("is-duplicate");
  }
  /* D13: Hauptknopf der Seite unten in die Leiste spiegeln (vor dem Fokus,
     damit die Seite gleich richtig dasteht). */
  leisteSpiegeln();
  content.focus();
  /* Hör-Modus („Mit Hilfe der App"): jede Seite liest sich selbst vor –
     sanft verzögert, jederzeit mit Stopp abbrechbar (Angebot, kein Zwang).
     Ausnahme: ein stiller Neuaufbau nach einer kleinen Wahl. */
  const leise = stillerNeuaufbau;
  stillerNeuaufbau = false;
  if (!leise && typeof autoRead !== "undefined" && autoRead && supportsSpeech()) {
    window.setTimeout(() => { if (autoRead) readStart(); }, 450);
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
      soundEnabled ? "Töne sind an. Tippen zum Ausschalten." : "Töne sind aus. Tippen zum Einschalten."
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
      motionEnabled ? "Bewegungen sind an. Tippen zum Ausschalten." : "Bewegungen sind aus. Tippen zum Einschalten."
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

/* Stimme des Geräts bevorzugen (Datenschutz, §14; datenschutz.html sagt zu:
   „die Stimme deines eigenen Geräts“). Manche Browser bieten für Deutsch auch
   Stimmen an, die den Text zu einem Dienst im Internet schicken
   (localService === false). Nur dann greift die App ein und nimmt eine
   deutsche Stimme, die auf dem Gerät selbst läuft. Laufen ohnehin alle
   deutschen Stimmen auf dem Gerät, wählt der Browser wie bisher – so bleibt
   die Stimme, die die Person an ihrem Gerät eingestellt hat. Gibt es gar
   keine Stimme auf dem Gerät, bleibt es ebenfalls bei der Wahl des Browsers.
   Die Liste ist beim ersten Aufruf manchmal noch leer – deshalb wird sie
   beim Start einmal angefordert (siehe unten). */
function lokaleStimme() {
  try {
    const deutsch = (window.speechSynthesis.getVoices() || []).filter(v => /^de([-_]|$)/i.test(v.lang || ""));
    if (!deutsch.some(v => !v.localService)) return null;
    const lokal = deutsch.filter(v => v.localService);
    return lokal.find(v => v.default) || lokal.find(v => /^de[-_]DE$/i.test(v.lang)) || lokal[0] || null;
  } catch (e) { return null; }
}
function stimmeSetzen(u) {
  const stimme = lokaleStimme();
  if (stimme) u.voice = stimme;
}
if (supportsSpeech()) { try { window.speechSynthesis.getVoices(); } catch (e) { /* ohne Liste wählt der Browser */ } }

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
  stimmeSetzen(utterance);
  utterance.rate = (typeof readTempo !== "undefined" && readTempo === "langsam") ? 0.5 : 0.82;
  utterance.pitch = 1;
  utterance.onend = () => { if (gen === _readGen) clearReadingHighlight(); };
  utterance.onerror = () => { if (gen === _readGen) clearReadingHighlight(); };
  window.speechSynthesis.speak(utterance);
}

/* Hör-Modus: Rückmeldungen, die nur IN die Seite eingefügt werden (kein
   neuer Seitenaufbau), wurden nie vorgelesen – wer nicht liest, erfuhr so
   nicht, ob die Antwort gepasst hat (Prüfgruppen-Test F2, 26.09.2026).
   Liest den Kasten ohne seine Knöpfe und nennt danach den ersten Knopf,
   wie die Handlungsansage auf ganzen Seiten. */
function sprichEingefuegteRueckmeldung(kasten) {
  if (!kasten || typeof autoRead === "undefined" || !autoRead || !supportsSpeech()) return;
  const kopie = kasten.cloneNode(true);
  kopie.querySelectorAll("button, [role='button'], .sr-only, [aria-hidden='true']").forEach(e => e.remove());
  /* Absatz-Grenzen hörbar machen: Überschrift und Satz liefen sonst
     ineinander („Neue Regel für deine Karte Bei Geld …"). */
  const BLOCK = "p, li, h1, h2, h3, h4, div, section, article";
  let text = "", letzterBlock = null;
  const gang = document.createTreeWalker(kopie, NodeFilter.SHOW_TEXT);
  while (gang.nextNode()) {
    const stueck = gang.currentNode.nodeValue.replace(/\s+/g, " ");
    if (!stueck.trim()) continue;
    const block = gang.currentNode.parentElement ? gang.currentNode.parentElement.closest(BLOCK) : null;
    if (block !== letzterBlock && text.trim()) text = (/[.!?:]\s*$/.test(text) ? text.trimEnd() : text.trimEnd() + ".") + " ";
    letzterBlock = block;
    text += stueck;
  }
  text = cleanSpeechText(text);
  const knopf = kasten.querySelector("button");
  if (knopf && cleanSpeechText(knopf.textContent)) text += ` Tippe auf: ${cleanSpeechText(knopf.textContent)}.`;
  readShortText(text, kasten);
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
  document.querySelectorAll(".reading-button-normal").forEach(n => {
    const on = mode === "normal" || mode === "slow";
    n.classList.toggle("is-active", on);
    n.setAttribute("aria-pressed", on ? "true" : "false");
    /* Beschriftung mitschalten, damit der Knopf sagt, was er als Nächstes tut. */
    const label = n.querySelector(".rb-label");
    /* Paket G: Der aktive Zustand heisst "Liest vor" statt "Stopp".
       Das Stopp-Quadrat rechts in der Pille sagt, was ein Druck bewirkt
       (Medien-Konvention); die Schrift sagt, was gerade passiert. */
    if (label) label.textContent = on ? "Liest vor" : "Vorlesen";
  });
  document.querySelectorAll(".reading-button-slow").forEach(s => { s.classList.toggle("is-active", mode === "slow"); s.setAttribute("aria-pressed", mode === "slow" ? "true" : "false"); });
}

function updateReadingStatus(text) {
  const status = document.getElementById("readingStatus");
  if (status) status.textContent = text || "";
}

/* Auswahl-Karten, die selbst <button> sind. Ihr Text muss trotzdem vorgelesen
   werden – siehe readCurrentPage(). An EINER Stelle definiert, damit die beiden
   Nutzungen (Auswahl, Satztrennung) nicht auseinanderlaufen. */
const KARTEN_SELEKTOR = ".topic-card, .action-card, .learn-mode-card";
/* Handlungs-Knoepfe, die mitgelesen werden. Sie bestehen aus mehreren
   Teilen (<strong>Kurz</strong><span>Nur das Wichtigste.</span>) und muessen
   wie Karten zerlegt werden – sonst spricht die Stimme "KurzNur". */
/* `.support-help-button` traegt das Unterstuetzungs-Angebot auf dem
   Themen-Einstieg ("Du brauchst Unterstuetzung? Hilfe anzeigen.").
   Ohne diesen Eintrag war es fuer hoerende Nutzung unsichtbar –
   ausgerechnet das Angebot, das sich an die Menschen richtet, die
   aufs Vorlesen angewiesen sind. */
/* Die Zusammenfassungs-Zeilen der zugeklappten Bereiche (21.09.2026,
   Befunde 2 und 3) gehoeren ebenfalls hierher. readCurrentPage() laesst
   aus einem zugeklappten <details> nur das <summary> durch – aber nur,
   wenn es der Auswahl unten ueberhaupt entspricht. Ohne diesen Eintrag
   waeren die Angebote dahinter fuer eine hoerende Nutzung unsichtbar,
   genau wie es `.alltag-help > summary` und `.support-help-button`
   vorher schon einmal waren. */
const AKTION_SELEKTOR = ".topic-start-button, .amount-choice, .later-chip, .support-help-button, .alltag-page .nav-button, .alltag-next .nav-button, .alltag-help > summary, .later-details > summary, .path-details > summary, .alltag-variant .alltag-v-way";

/* Lautsprecher-Symbol der Karten-Vorlesen-Knoepfe. Global, weil es
   frueher als lokale Konstante in renderMenu lag – jede Seite ausserhalb
   warf damit "readCardSvg is not defined". */
const READ_CARD_SVG = `${pictoHtml("vorlesen", "rb-ico")} `;

function cleanSpeechText(text) {
  return String(text || "")
    .replace(/[←→➜]/g, "")
    .replace(/[✓✕✔✅]/g, "")     /* Haken/Kreuze werden sonst als Zeichen gesprochen */
    .replace(/ℹ️|👋|📵|📖|🎉|🧠/g, "")   /* Bild-Zeichen in Knopf- und Titeltexten */
    .replace(/%/g, " Prozent")
    .replace(/\s+/g, " ")
    .trim();
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

  const dialogRoot = document.querySelector("#lernMehr .lern-mehr-innen, #lernEinstellungen .lern-mehr-innen");
  const root = dialogRoot || document.querySelector("[data-readable='true']") || content;
  /* Antwort-Optionen werden MIT vorgelesen (nummeriert) – sonst hört eine
     nicht lesende Person die Frage, aber nie die Antworten. */
  const OPTION = ".answer-option, .sa-option-btn, .sample-option, .einfach-quiz-btn";
  /* Auswahl-Karten sind selbst <button>. Ohne diese Ausnahme ueberspringt der
     Filter unten ihren gesamten Text – auf der Themen-Seite hiess das: der
     grosse Vorlesen-Knopf sagte "Wähle ein Thema" und nannte dann KEINES der
     12 Themen. Fuer eine nicht lesende Person war die Seite damit nutzlos.
     Die Karten kommen als Ganzes in die Warteschlange, werden also auch
     hervorgehoben und ins Bild gescrollt (Mitlesen, §3). */
  const KARTE = KARTEN_SELEKTOR;
  /* Handlungs-Knoepfe auf dem Themen-Einstieg. Ohne sie hoerte eine nicht
     lesende Person den Themen-Text, aber nie "Lernen starten", "Kurz/Mehr"
     oder "Quiz machen" – die Seite blieb fuer sie eine Sackgasse. */
  const AKTION = AKTION_SELEKTOR + (dialogRoot ? ", .lern-mehr-knopf, .hilfe-angebot, summary" : "");
  const els = root
    ? Array.from(root.querySelectorAll("h2, h3, p, li, " + OPTION + ", " + KARTE + ", " + AKTION)).filter(el => {
        const isOption = el.matches(OPTION);
        const isKarte = el.matches(KARTE);
        const isAktion = el.matches(AKTION);
        /* Nichts vorlesen, was gerade zugeklappt ist: der Begleit-Bereich
           enthaelt Fachtexte (DigComp, ICF) und ist fast 4000 px hoch. Sein
           Kasten hat overflow:hidden – die Kinder behalten dadurch eine
           Groesse, obwohl sie niemand sieht. Nur auf <details open> pruefen. */
        if (el.closest(".companion-panel, .begleit-tipp")) return false;
        /* D2/D4: Was im Lernmodus per CSS ausgeblendet ist (Übung unter dem
           Lerntext, Szenenbild), hat keine Fläche und wird nicht vorgelesen. */
        if (typeof el.getClientRects === "function" && el.getClientRects().length === 0) return false;
        /* Die Überschrift (summary) eines zugeklappten Hilfe-Blocks bleibt
           lesbar – sonst erfährt niemand, dass es dort Hilfe gibt. */
        const closedDetails = el.closest("details:not([open])");
        if (closedDetails && !(el.tagName === "SUMMARY" && el.parentElement === closedDetails)) return false;
        if (el.closest(".is-hidden, [hidden]")) return false;
        if (!isOption && !isKarte && !isAktion && el.closest(".reading-toolbar, nav, footer, button")) return false;
        /* Text INNERHALB einer Karte nicht zusaetzlich einzeln lesen */
        if (!isKarte && el.closest(KARTE)) return false;
        if (!isAktion && el.closest(AKTION)) return false;
        return cleanSpeechText(el.textContent).length > 0;
      })
    : [];
  /* Optionen nummerieren: „Antwort 1: …" */
  els.forEach(el => {
    if (!el.matches || !el.matches(OPTION) || !el.parentElement) return;
    /* Gezählt wird in der nächsten Gruppe mit mehr als einer Antwort.
       Direkte Geschwister reichen nicht: Im Stufen-Finder steckt jede
       Antwort mit ihrem Knopf „Text vorlesen" in einem eigenen Kasten –
       dann hieß jede „Antwort 1" (Prüfgruppen-Test F1, 26.09.2026). */
    let gruppe = el.parentElement;
    while (gruppe && gruppe !== root && gruppe.querySelectorAll(OPTION).length < 2) gruppe = gruppe.parentElement;
    const geschwister = gruppe ? Array.from(gruppe.querySelectorAll(OPTION)) : [el];
    const n = geschwister.indexOf(el) + 1;
    if (n > 0) el.setAttribute("data-read-prefix", "Antwort " + n + ":");
  });
  /* Zuerst sagen, WO die Person ist – dann den Inhalt (Orientierung zum Hören) */
  if (!dialogRoot && orientLine && !orientLine.classList.contains("is-hidden")) {
    const orientSpan = orientLine.querySelector(".orient-text");
    if (orientSpan) els.unshift(orientSpan);
  }
  /* Handlungsansage am Ende: Nicht-Leser erfahren sonst nie, welche
     Knöpfe es gibt. Kurz, immer gleiches Muster (Vorhersehbarkeit). */
  /* Nur sichtbare, bedienbare Antworten zählen – sonst sagt die Stimme
     „Tippe jetzt deine Antwort“, obwohl gerade keine angeboten wird. */
  const hatOptionen = root && Array.from(root.querySelectorAll(OPTION))
    .some(o => o.offsetParent !== null && !o.disabled && !o.closest("[hidden], details:not([open])"));
  /* Rückmeldeseiten (nach einer Antwort, und die Sicherheitsfragen im
     Profil): ihre Knöpfe heißen `feedback-button` und fielen durch jedes
     Raster. Das Vorlesen endete dort nach der Erklärung – wer die App
     hörend bedient, saß nach JEDER Frage vor einer Sackgasse.
     Die Ansage wird aus den Knöpfen gebaut, die wirklich dastehen, damit
     Text und Bildschirm nicht auseinanderlaufen können. */
  const rueckmeldeKnoepfe = root
    ? Array.from(root.querySelectorAll(".feedback-actions .feedback-button"))
        .filter(b => !b.disabled && b.offsetParent !== null)
        .map(b => cleanSpeechText(b.textContent))
        .filter(Boolean)
    : [];
  /* D13: Stehen die Knöpfe der Rückmeldung unten in der Leiste, werden sie
     von dort genannt – Hauptknopf zuerst, wie man sie sieht. */
  if (!dialogRoot && !rueckmeldeKnoepfe.length) leisteTexte().forEach(t => rueckmeldeKnoepfe.push(t));
  /* Der Hilfe-Knopf steckt in einem <button> und fiel deshalb durch jedes
     Raster – wer nicht liest, erfuhr nie, dass es ihn gibt (V-5). Der Satz
     wird aus dem Knopf gebaut, der wirklich dasteht. */
  const hilfeKnopf = dialogRoot ? null : document.body.classList.contains("lesson-view")
    ? content.querySelector('.lern-leiste button[onclick="lernMehrOeffnen(this)"]')
    : root ? (root.querySelector(".task-help-button") || (root.classList.contains("alltag-variant") ? document.querySelector(".alltag-v-help-button") : null)) : null;
  const hilfeSatz = hilfeKnopf
    ? " Wenn du unsicher bist, tippe auf: " + cleanSpeechText(hilfeKnopf.textContent).replace(/\.$/, "") + "."
    : "";
  if (hatOptionen) {
    /* Auf reinen Einschätzungs-Seiten die passende Aufforderung – dort gibt es
       kein Richtig und kein Falsch. */
    const nurMeinung = root && root.querySelector(".frage--meinung") && !root.querySelector(".frage:not(.frage--meinung)");
    /* Kurzquiz-Knöpfe wählen direkt. Sie verwenden nicht die Vorwahl mit
       „Das nehme ich“ der normalen Antwort-Optionen. */
    const direkteWahl = root && root.querySelector(".einfach-quiz-btn");
    els.push({ pseudoText: (nurMeinung ? FRAGE_TEXT.meinungAufforderung
      : direkteWahl ? "Tippe deine Antwort an." : FRAGE_TEXT.aufforderung) + hilfeSatz });
  } else if (rueckmeldeKnoepfe.length) {
    /* Lernweg-Test (26.09.2026): Der Knopf-Name steht nach einem
       Doppelpunkt – vorher „Du kannst jetzt auf Frage nochmal versuchen
       tippen. Oder auf …" (holprig, Prüfgruppen-Test B-d). */
    els.push({ pseudoText: "Du kannst jetzt tippen auf: " + rueckmeldeKnoepfe[0] + "."
      + rueckmeldeKnoepfe.slice(1).map(n => " Oder auf: " + n + ".").join("")
      + hilfeSatz });
  } else if (root && (root.classList.contains("alltag-page") || root.classList.contains("alltag-variant"))) {
    const next = root.querySelector(".nav-button.primary");
    /* Entwurfsseiten: Steht neben dem Hauptknopf ein zweiter Weg (z. B.
       „Andere Antwort wählen“), wird er mitgenannt – wie beim Sehen. */
    const zweiterWeg = root.querySelector(".alltag-v-next .nav-button.secondary");
    if (next) els.push({ pseudoText: "Du kannst jetzt auf " + cleanSpeechText(next.textContent) + " tippen."
      + (zweiterWeg ? " Oder auf " + cleanSpeechText(zweiterWeg.textContent) + "." : "") });
    else if (root.querySelector(".alltag-choice")) els.push({ pseudoText: "Wähle eine Antwort. Du kannst dir auch Hilfe anzeigen lassen." });
  } else if (!dialogRoot && nextButton && !nextButton.disabled) {
    els.push({ pseudoText: backButton && !backButton.disabled
      ? "Du kannst jetzt auf Weiter tippen. Oder auf Zurück."
      : "Du kannst jetzt auf Weiter tippen." });
  } else {
    const start = root ? root.querySelector(".topic-start-button, .intro-start-button, .primary-action") : null;
    if (start) {
      let ansage = "Tippe auf den großen Knopf: " + cleanSpeechText(start.textContent) + ".";
      /* Zweiter Weg in die App auf der Startseite. Ohne diesen Zusatz
         kennt die Abkürzung nur, wer liest. Kommt NACH dem großen Knopf,
         damit die Hauptsache zuerst genannt wird. */
      const zweiterWeg = root.querySelector(".intro-quickstart-link");
      if (zweiterWeg) ansage += " Oder tippe auf: " + cleanSpeechText(zweiterWeg.textContent) + ".";
      els.push({ pseudoText: ansage });
    }
  }
  /* Einmaliges Angebot, jede Seite von selbst vorzulesen (Gesamtprüfung
     25.09.2026, Z5). Es wird mitgesprochen – wer nicht liest, könnte den
     Kasten sonst nicht nutzen. Vorher kam die Frage erst nach dem ersten
     Thema, für Menschen, die nicht lesen, zu spät. */
  if (!dialogRoot && els.length && hoerAngebotOffen()) {
    hoerAngebotZeigen();
    els.push({ pseudoText: "Soll ich ab jetzt jede Seite von selbst vorlesen? Dann tippe auf: Ja, jede Seite." });
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

/* Text einer Auswahl-Karte fuer die Sprachausgabe zusammensetzen.
   Ohne Trennung liefe alles in einem Atemzug durch:
   "Starte hier Datenschutz Private Daten und Passwörter schützen".
   Jede Zeile der Karte wird deshalb ein eigener Satz. */
function kartenText(el) {
  const kopie = el.cloneNode(true);
  kopie.querySelectorAll(".answer-num, .card-read-button").forEach(n => n.remove());
  const teile = [];
  kopie.querySelectorAll("*").forEach(n => {
    if (n.children.length === 0) {
      const t = n.textContent.trim();
      if (t) teile.push(t.replace(/[.\s]+$/, ""));
    }
  });
  if (!teile.length) return kopie.textContent;
  /* Punkt nur setzen, wo noch keines steht. Sonst entsteht bei einer Zeile
     wie "Du brauchst Unterstützung?" das gesprochene "Unterstützung?." */
  return teile.map(t => /[.!?]$/.test(t) ? t : t + ".").join(" ");
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
  let roherText;
  if (istPseudo) {
    roherText = el.pseudoText;
  } else if (el.matches && (el.matches(KARTEN_SELEKTOR) || el.matches(AKTION_SELEKTOR))) {
    roherText = prefix + kartenText(el);
  } else if (el.querySelector && el.querySelector(".answer-num, .card-read-button")) {
    /* Auch bei Karten: der eingebaute Vorlese-Knopf darf nicht mitgesprochen
       werden (sonst hoert man "… Vorlesen" hinter jedem Kartentext). */
    roherText = prefix + kartenText(el);
  } else {
    roherText = prefix + el.textContent;
  }
  const text = cleanSpeechText(roherText);
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
  stimmeSetzen(u);
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
  /* H-01: echter Knopf statt span mit role="button".
     Das war die EINZIGE Stelle, an der die Tastatur-Bedienung von Hand
     nachgebaut war (onkeydown fuer Enter und Leertaste). Ein nativer
     button kann das von sich aus, der Handler faellt ersatzlos weg.
     Hier gefahrlos moeglich, weil dieser Chip in einer Ueberschrift
     steht und nicht - wie der auf der Themenkarte - in einem button.
     Ausserdem traegt er kein data-read-card-text, der zentrale
     Listener greift also nicht und kann nicht doppelt ausloesen. */
  return `<button type="button" class="card-read-button card-read-button--section" onclick="readSectionFrom(this)" aria-label="Abschnitt ${escapeHtml(label)} vorlesen">${pictoHtml("vorlesen", "rb-ico")} </button>`;
}

function readNormal() { readCurrentPage(0.85); }
function readSlow() { readCurrentPage(0.50); }

/* Vorlese-Tempo ist eine EINSTELLUNG (einmal wählen), keine Entscheidung
   bei jedem Vorlesen. Weniger Knöpfe am Ort der Handlung (Hick, CLT). */
/* Automatisches Vorlesen ist eine WAHL (Standard: aus). Die Person wird
   im Einstieg einmal gefragt und kann es jederzeit in den Einstellungen
   ändern (§3: Vorlesen als Angebot, nie als Zwang). */
const AUTO_READ_KEY = "vorlesen-automatisch";
const AUTO_READ_GEFRAGT_KEY = "vorlesen-gefragt";
let autoRead = false;

function loadAutoRead() {
  autoRead = pGet(AUTO_READ_KEY) === "an";
}

function setAutoRead(an, still) {
  autoRead = !!an;
  pSet(AUTO_READ_KEY, autoRead ? "an" : "aus");
  if (!still) {
    announce(autoRead
      ? "Gut. Ich lese dir jede Seite automatisch vor. Mit Stopp kannst du das Vorlesen immer anhalten."
      : "In Ordnung. Du tippst auf Vorlesen. Dann lese ich vor.");
  }
}

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
      <div class="reading-toolbar" role="group" aria-label="Vorlesen">
        <p class="reading-unavailable">Vorlesen geht auf diesem Gerät vielleicht nicht.</p>
      </div>
    `;
  }
  /* EIN Umschalter statt zwei Knöpfen: "Vorlesen" wird zu "Stopp", solange
     vorgelesen wird. Vorher stand "Stopp" dauerhaft in Warn-Rot da, obwohl
     nichts lief – das widerspricht §10 ("Rot nur sparsam für Warnungen") und
     kostet auf jedem Schritt eine halbe Zeile. Funktion bleibt vollständig. */
  /* Paket G: EINE laute Primaeraktion. Beide Symbole stehen immer im Markup,
     das CSS blendet ueber .is-active um – so bleibt der Zustandswechsel eine
     reine Darstellungssache und die Vorlese-Logik unberuehrt. Der Wrapper
     .reading-toolbar MUSS bleiben: readCurrentPage() schliesst genau ihn vom
     Vorlesen aus, sonst liest sich die Bedien-Zeile selbst mit vor. */
  return `
    <div class="reading-toolbar" role="group" aria-label="Vorlesen">
      <button type="button" class="reading-button reading-button-normal" aria-pressed="false" onclick="toggleReading()">
        <span class="rb-coin" aria-hidden="true">
          ${pictoHtml("vorlesen", "rb-ico rb-ico-speak")}
          ${pictoHtml("stop", "rb-ico rb-ico-stop")}
        </span>
        <span class="rb-label">Vorlesen</span>
      </button>
      <p id="readingStatus" class="reading-status" aria-live="polite"></p>
    </div>
  `;
}

/* Umschalter: läuft gerade etwas -> anhalten, sonst starten. */
function hoerAngebotOffen() {
  return supportsSpeech() && !autoRead && pGet(AUTO_READ_GEFRAGT_KEY) !== "1";
}

function hoerAngebotZeigen() {
  if (document.getElementById("hoerAngebot")) return;
  const anker = content.querySelector(".tool-row") || content.querySelector(".reading-toolbar");
  if (!anker) return;
  anker.insertAdjacentHTML("afterend", `
    <div id="hoerAngebot" class="hoer-angebot" role="group" aria-label="Vorlesen">
      <p class="hoer-angebot-frage">Soll ich ab jetzt jede Seite von selbst vorlesen?</p>
      <div class="hoer-angebot-knoepfe">
        <button type="button" class="nav-button primary" onclick="hoerAngebotAntwort(true)">Ja, jede Seite</button>
        <button type="button" class="nav-button secondary" onclick="hoerAngebotAntwort(false)">Nein, nur wenn ich tippe</button>
      </div>
    </div>`);
}

function hoerAngebotAntwort(an) {
  pSet(AUTO_READ_GEFRAGT_KEY, "1");
  setAutoRead(an);
  const box = document.getElementById("hoerAngebot");
  if (box) box.remove();
}

function toggleReading() {
  const button = document.querySelector(".reading-button-normal");
  if (button && button.classList.contains("is-active")) stopReading();
  else readStart();
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
  dialogOeffnen(overlay);
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
      <h2 id="symbolTitle">Was bedeuten die Piktogramme?</h2>
      <ul class="symbol-help-list">
        <li><strong>${pictoHtml("vorlesen", "rb-ico")} </strong> bedeutet: Vorlesen.</li>
        <li><strong>${pictoHtml("help")}</strong> bedeutet: Hilfe.</li>
        <li><strong>${pictoHtml("check")}</strong> bedeutet: richtig.</li>
        <li><strong>${pictoHtml("warning")}</strong> bedeutet: Achtung.</li>
        <li><strong>${pictoHtml("stop")}</strong> bedeutet: Anhalten.</li>
        <li><strong>Das Menü unten</strong> bringt dich zu: Start, Themen, Mein Lernweg, Hilfe und Einstellungen.</li>
      </ul>
      <button type="button" class="primary-action" onclick="closeCalmOverlay()">Schließen</button>
    </div>
  `;
  document.body.appendChild(overlay);
  dialogOeffnen(overlay);
  const button = overlay.querySelector("button");
  if (button) button.focus();
}

function closeCalmOverlay() {
  const overlay = document.getElementById("pauseOverlay");
  if (!overlay) return;
  overlay.remove();
  /* Erst entfernen, dann den Fokus zurueckgeben - sonst landet er kurz
     auf einem Element, das gleich verschwindet. */
  dialogSchliessen(overlay);
}

/* Sprache und Pause bleiben sichtbar.
   Zwischenzeitlich lagen beide hinter einem Aufklapper ("Sprache und Pause").
   Das spart Platz, widerspricht aber §3/§9: Wer eine Pause braucht, soll den
   Knopf sehen und nicht erst suchen. Der Platz kommt stattdessen aus der
   gemeinsamen Zeile mit dem Vorlese-Knopf (buildToolRow).
   Reihenfolge Pause vor Sprache: "Vorlesen" und "Pause machen" passen zusammen
   in die erste Zeile (131 + 153 px), der breitere Sprach-Knopf rutscht in die
   zweite. Das spart eine ganze Zeile, ohne etwas zu verstecken.
   §1 Pause-Funktion, §2 "Sprache jederzeit umstellbar". */
function buildUtilityBar() {
  /* Paket G: leise Sekundaeraktionen als Chip-Kapsel neben der Vorlese-Pille.
     Sichtbar steht am Sprach-Chip nur der Stufenname; das Wort "Sprache:"
     lebt im aria-label, damit der zugaengliche Name den sichtbaren Text
     enthaelt (WCAG 2.2 SC 2.5.3 Label in Name). */
  return `
    <div class="utility-bar" role="group" aria-label="Pause und Sprache">
      <button type="button" class="utility-chip pause-button" onclick="showPauseOverlay()">
        ${pictoHtml("pause")}
        <span>Pause</span>
      </button>
      <button type="button" class="utility-chip language-switch-button" onclick="openLanguageFromTools()" aria-label="Sprache: ${escapeHtml(LANGUAGE_LABEL[languageLevel])}">
        <span>${escapeHtml(LANGUAGE_LABEL[languageLevel])}</span>
      </button>
    </div>
  `;
}

/* Vorlese-Knopf und "Sprache und Pause" standen als zwei getrennte Karten
   untereinander (90 px + 58 px). Sie gehoeren beide zur Bedienung, nicht zum
   Inhalt – deshalb jetzt EINE Zeile. Auf allen Seiten gleich, damit die
   Bedienung vorhersehbar bleibt (§3 Emotionale Sicherheit). */
/* Übersicht (06.10.2026): Satz-Piktogramm einer Lektion. Dasselbe Bild
   steht in einem Textblock nur einmal – beim ersten Satz, zu dem es gehört.
   Vorher stand z. B. im Start-Schritt von Betrug derselbe Brief mit Haken
   dreimal; ein wiederholtes Bild trägt keine neue Information (§3 Kohärenz).
   Die Zuordnung (PICTO_RULES, refinePicto) bleibt unverändert; Sätze ohne
   Bild beginnen an derselben Kante (design.css, „Gleicher linker Textrand“). */
function satzPiktoBild(item, gezeigt) {
  if (!item || !item.pictogram) return "";
  const src = pictoSrc(refinePicto(item.pictogram, item.text));
  if (gezeigt && gezeigt.has(src)) return "";
  if (gezeigt) gezeigt.add(src);
  return `<img class="ls-sentence-pikto" src="${src}" alt="" width="56" height="56" aria-hidden="true" loading="lazy">`;
}

function buildToolRow() {
  return `<div class="tool-row">${buildReadingToolbar()}${buildUtilityBar()}</div>`;
}

/* ============================================================
   Lernmodus (Design-Umbau D2, 01.10.2026, Entscheidungen E1–E3)
   ------------------------------------------------------------
   Auf Lernschritten, der Übungs-Seite und der Rückmeldung steht oben eine
   schlanke Leiste: Beenden – Vorlesen – Mehr. Pause, Sprache, Schrift,
   Hilfe und Startseite liegen unter „Mehr" (E2): immer erreichbar, aber
   nicht ständig sichtbar (COGA Richtlinien 5 und 8). Menü unten, Fußzeile
   und Szenenbild blendet body.lesson-view in design.css aus (E1, E3).
   „Beenden" verliert nichts: Der Wiedereinstieg merkt sich den Schritt.
   ============================================================ */
let aufUebungsSeite = false;
/* D16: Teil der bestehenden Lektion, keine neuen Lektionsnummern. */
let lernTeil = "text";
let uebungsAuswahl = null;
let uebungsReihenfolge = null;
const RUHIG_TEXT = {
  starten: "Lernen starten", themen: "Themen ansehen",
  lernen: "Lernen", beispiele: "Beispiele aus dem Alltag",
  mehrHilfe: "Mehr Hilfe zeigen", einstellungen: "Einstellungen"
};
/* D9: Wohin „Beenden“ führt, wenn die Seite nicht zu einem Thema gehört
   (Wiederholen, großes Quiz → Mein Lernweg). null = Themen-Seite. */
let lernBeendenZiel = null;

/* D10 (01.10.2026): kompakter Lernmodus – EINE Zeile oben (Vorschau
   „Lernmodus“ vom 01.10.2026): Beenden | Thema, Schritt und Fortschritt |
   Vorlesen | Mehr. Kopf mit Figur, Ort-Satz und eigener Fortschritts-Zeile
   blendet design.css im Lernmodus aus; #orientLine bleibt für Vorlese-
   Programme und das Vorlesen erhalten (nur unsichtbar). */
function buildLernLeiste(schritt, von) {
  lernBeendenZiel = null;
  const titelEl = document.getElementById("appTitle");
  const topic = (typeof getCurrentTopic === "function") ? getCurrentTopic() : null;
  const titel = (topic && topic.title) || (titelEl ? titelEl.textContent : "");
  const mitSchritt = Number.isInteger(schritt) && Number.isInteger(von) && von > 1;
  const prozent = mitSchritt ? Math.round((schritt / von) * 100) : 0;
  /* Im Lernmodus ist der Kopf ausgeblendet (D10) und mit ihm die Hauptüberschrift.
     Für Vorlese-Programme steht das Thema deshalb hier als unsichtbare h1;
     „Vorlesen“ liest sie nicht mit (der Ort-Satz nennt das Thema schon). */
  return `<h1 class="sr-only">${escapeHtml(titel)}</h1>
  <div class="tool-row lern-leiste">
    <button type="button" class="lern-knopf" onclick="lernmodusBeenden()">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>
      <span>Beenden</span>
    </button>
    <div class="lern-ort" aria-hidden="true">
      <span class="lern-ort-titel">${escapeHtml(titel)}</span>
      ${mitSchritt ? `<span class="lern-ort-schritt">Schritt ${schritt} von ${von}</span>
      <span class="lern-ort-balken"><i style="width:${prozent}%"></i></span>` : ""}
    </div>
    ${buildReadingToolbar()}
    <button type="button" class="lern-knopf" aria-haspopup="dialog" onclick="lernMehrOeffnen(this)">
      ${pictoHtml("help")}
      <span>Hilfe</span>
    </button>
  </div>`;
}

/* D8 (01.10.2026, Befund B8): „Lektionen nachlesen“ führt in den Kern des
   Themas (E6) und überspringt die Einstiegsfrage – sie war schon dran.
   Es beginnt mit der ersten Lektion nach der Start-Seite. */
function lektionenNachlesen(topicId) {
  const topic = getTopicById(topicId);
  if (!topic) return renderMenu();
  stopReading();
  currentTopicId = topic.id;
  currentMode = "short";
  const lektionen = getLessonsForMode(topic, "short");
  currentStep = (lektionen.length > 1 && lektionen[0] && lektionen[0].module === "Start") ? 1 : 0;
  renderLesson();
}

/* D8 (01.10.2026, Befund B1): EIN Rahmen für den ganzen Lernweg eines
   Themas. Einstiegsfrage, Plan, Anwenden, Neue Situation, kurze Frage,
   Abschluss und Quiz zeigen dieselbe Leiste wie die Lektion (Beenden –
   Vorlesen – Mehr) und kein Menü unten. Wird im Seiten-Text aufgerufen,
   also nach setHeader() (das die Klasse wieder entfernt). */
function lernRahmenLeiste(ziel) {
  document.body.classList.add("lesson-view");
  aufUebungsSeite = false;
  const html = buildLernLeiste();
  lernBeendenZiel = ziel || null;
  return html;
}

function lernmodusBeenden() {
  stopReading();
  pauseMerken();
  aufUebungsSeite = false;
  if (lernBeendenZiel === "renderMyPath") { lernBeendenZiel = null; return renderMyPath(); }
  renderIntro();
}

/* D11 (02.10.2026): „Hilfe“ oben und „Ich bin unsicher“ an der Aufgabe
   gehören zusammen. Das Blatt „Hilfe und mehr“ nennt den Aufgaben-Tipp
   zuerst (derselbe Knopf wie „Ich bin unsicher“), dann die Hilfe-Seite. */
function sichtbarerTippKnopf() {
  return [...content.querySelectorAll(".task-help-button")].find(b => b.getClientRects().length > 0) || null;
}
function aufgabeHatTipp() { return !!sichtbarerTippKnopf(); }

function lernDialogVorlesen() {
  return `<div class="reading-toolbar"><button type="button" class="reading-button reading-button-normal" aria-pressed="false" onclick="toggleReading()">${pictoHtml("vorlesen")}<span class="rb-label">Vorlesen</span></button></div>`;
}

/* D16: Hilfe zeigt sofort den Tipp. Das vorhandene Panel wird vorübergehend
   versetzt, damit Inhalt, Vorbild-Angebote und ihre Ereignisse erhalten bleiben. */
function lernMehrOeffnen(ausloeser) {
  stopReading();
  const alt = document.getElementById("lernMehr");
  if (alt && alt._schliessen) alt._schliessen();
  const panel = content.querySelector("#taskHelpPanel");
  const parent = panel && panel.parentElement;
  const vorherHidden = panel && panel.hidden;
  const blatt = document.createElement("div");
  blatt.id = "lernMehr";
  blatt.className = "lern-mehr";
  const aufLektion = !!content.querySelector(".lesson-card");
  const zurueck = backButton && !backButton.disabled;
  const extra = `<div class="lern-hilfe-wege" data-hilfe-extra="true">
    ${aufLektion ? `<button type="button" class="lern-mehr-knopf" data-aktion="nachlesen">Lektion nochmal lesen</button>` : ""}
    ${aufLektion && lessonHasExamples(getCurrentTopic(), getLessonsForMode(getCurrentTopic(), currentMode)[currentStep], getLessonsForMode(getCurrentTopic(), currentMode)) ? `<button type="button" class="lern-mehr-knopf" data-aktion="beispiel">Beispiel ansehen</button>` : ""}
    ${zurueck ? `<button type="button" class="lern-mehr-knopf" data-aktion="zurueck">Zurück</button>` : ""}
    <button type="button" class="lern-mehr-knopf" data-aktion="pause">Pause</button>
    <button type="button" class="lern-mehr-knopf" data-aktion="hilfe">Hilfe-Seite: Wer kann mir helfen?</button>
    ${document.body.classList.contains("lesson-view") ? `<button type="button" class="lern-mehr-knopf" data-aktion="beenden">Für heute aufhören</button>` : ""}
  </div>`;
  blatt.innerHTML = `<div id="lernMehrDialog" class="lern-mehr-innen hilfe-dialog" role="dialog" aria-modal="true" aria-labelledby="lernMehrTitel">
    <h2 id="lernMehrTitel" tabindex="-1">Hilfe</h2>
    ${lernDialogVorlesen()}
    <div class="lern-hilfe-inhalt"></div>
    ${panel ? "" : `<p>Du kannst den Text vorlesen lassen. Du kannst den Schritt noch einmal lesen.</p>
      <details class="lern-hilfe-mehr"><summary>${RUHIG_TEXT.mehrHilfe}</summary>${extra}</details>`}
    <button type="button" class="lern-mehr-knopf" data-aktion="einstellungen">${RUHIG_TEXT.einstellungen}</button>
    <button type="button" class="lern-mehr-knopf lern-mehr-zu" data-aktion="zu">Schließen</button>
  </div>`;
  if (panel) {
    panel.hidden = false;
    blatt.querySelector(".lern-hilfe-inhalt").appendChild(panel);
    const mehr = panel.querySelector(".task-help-mehr");
    if (mehr) mehr.insertAdjacentHTML("beforeend", extra);
  }
  const schliessen = () => {
    stopReading();
    if (panel && parent && content.contains(parent)) {
      panel.querySelectorAll("[data-hilfe-extra]").forEach(el => el.remove());
      panel.hidden = vorherHidden;
      parent.appendChild(panel);
    }
    blatt.remove();
    dialogSchliessen(blatt);
    if (ausloeser && document.body.contains(ausloeser)) ausloeser.focus();
  };
  blatt._schliessen = schliessen;
  /* Bestehende Angebote behalten ihren eigenen Klick-Handler. Der Dialog
     muss vorher zugehen, damit Nachlesen nicht hinter der Hilfe startet. */
  blatt.addEventListener("click", e => {
    if (panel && e.target.closest("button.hilfe-angebot:not(.task-help-mehr-knopf)")) schliessen();
  }, true);
  blatt.addEventListener("click", e => {
    if (e.target === blatt) return schliessen();
    const wort = e.target.closest(".glossar-term");
    if (wort) { const key = wort.dataset.term; schliessen(); showGlossar(key); return; }
    const k = e.target.closest("[data-aktion]");
    if (!k) return;
    const aktion = k.dataset.aktion;
    schliessen();
    if (aktion === "einstellungen") lernEinstellungenOeffnen(ausloeser);
    else if (aktion === "pause") showPauseOverlay();
    else if (aktion === "hilfe") navigateTab("hilfe");
    else if (aktion === "beenden") lernmodusBeenden();
    else if (aktion === "zurueck") goBack();
    else if (aktion === "nachlesen") renderLesson();
    else if (aktion === "beispiel") renderLessonExamples();
  });
  blatt.addEventListener("keydown", e => {
    if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("glossar-term")) {
      e.preventDefault(); e.stopPropagation();
      const key = e.target.dataset.term; schliessen(); showGlossar(key); return;
    }
    if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); schliessen(); }
  });
  document.body.appendChild(blatt);
  dialogOeffnen(blatt);
  blatt.querySelector("h2").focus();
}

/* Einstellungen sind eine eigene Ansicht des Dialogs; Hilfe bleibt Hilfe.
   Alle Schalter verwenden die bisherigen Einstellungen und Sprach-Rückwege. */
function lernEinstellungenOeffnen(ausloeser) {
  const blatt = document.createElement("div");
  blatt.id = "lernEinstellungen";
  blatt.className = "lern-mehr lern-einstellungen";
  blatt.innerHTML = `<div class="lern-mehr-innen" role="dialog" aria-modal="true" aria-labelledby="lernEinstellungenTitel">
    <h2 id="lernEinstellungenTitel">${RUHIG_TEXT.einstellungen}</h2>
    ${lernDialogVorlesen()}
    <button type="button" class="lern-mehr-knopf" data-aktion="sprache">Sprache: ${escapeHtml(LANGUAGE_LABEL[languageLevel])}</button>
    <div class="lern-mehr-reihe"><button type="button" class="lern-mehr-knopf" data-aktion="kleiner">A– kleiner</button><button type="button" class="lern-mehr-knopf" data-aktion="groesser">A+ größer</button></div>
    <button type="button" class="lern-mehr-knopf" data-aktion="sofort" aria-pressed="${sofortWaehlen ? "true" : "false"}">Antwort sofort wählen: ${sofortWaehlen ? "an" : "aus"}</button>
    <button type="button" class="lern-mehr-knopf" data-aktion="zuzweit" aria-pressed="${isCompanionMode() ? "true" : "false"}">Wir lernen zu zweit: ${isCompanionMode() ? "an" : "aus"}</button>
    <button type="button" class="lern-mehr-knopf lern-mehr-zu" data-aktion="zu">Schließen</button>
  </div>`;
  const schliessen = () => { stopReading(); blatt.remove(); dialogSchliessen(blatt); if (ausloeser && document.body.contains(ausloeser)) ausloeser.focus(); };
  blatt.addEventListener("click", e => {
    if (e.target === blatt) return schliessen();
    const k = e.target.closest("[data-aktion]"); if (!k) return;
    const a = k.dataset.aktion;
    if (a === "groesser" || a === "kleiner") { changeFontSize(a === "groesser" ? 1 : -1); return; }
    if (a === "sofort") { sofortWaehlen = !sofortWaehlen; k.setAttribute("aria-pressed", String(sofortWaehlen)); k.textContent = "Antwort sofort wählen: " + (sofortWaehlen ? "an" : "aus"); return; }
    if (a === "zuzweit") {
      learnMode = isCompanionMode() ? null : "begleitung";
      if (learnMode) pSet(LEARN_MODE_KEY, learnMode); else pRemove(LEARN_MODE_KEY);
      schliessen(); const wieder = gemerkteStelle(); if (wieder) wieder();
      announce(isCompanionMode() ? "Ihr lernt zu zweit. Unten steht ein Tipp für die Begleitung." : "Die Tipps für die Begleitung sind aus.");
      return;
    }
    schliessen(); if (a === "sprache") openLanguageFromTools();
  });
  blatt.addEventListener("keydown", e => { if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); schliessen(); } });
  document.body.appendChild(blatt); dialogOeffnen(blatt); blatt.querySelector("button").focus();
}

/* ============================================================
   D3 Tippen heißt Hören, erst hören dann wählen (01.10.2026, E5)
   ------------------------------------------------------------
   Im Lernmodus liest jeder angetippte Satz sich selbst vor
   (readShortText, gleiche Stimme und Markierung wie der Vorlese-Knopf).
   Antworten (.answer-option) werden beim ersten Tippen vorgelesen und
   markiert; gewählt wird mit „Das nehme ich". Unter „Mehr" lässt sich
   „Antwort sofort wählen" einschalten – nur für diese Sitzung, es wird
   nichts gespeichert (§14a). Die Auswertung der Antwort bleibt unverändert:
   „Das nehme ich" löst denselben Klick aus wie bisher.
   ============================================================ */
let sofortWaehlen = false;
let nehmenFreigabe = false;
const HOER_SELEKTOR = [".ls-text-row p", ".ls-text-block > p", ".ls-bullet-item", ".ls-bullet-list > li",
  ".access-box h3", ".access-box p", ".access-box li", ".symbol-heading h2", ".frage-text",
  ".vorhersage-situation", ".kette-bezug", ".vorbild-box p", ".learning-goals-list li", ".feedback-text", ".feedback-passend p"]
  .map(s => ".lesson-card " + s).join(", ");

function hoerKlick(event) {
  if (!document.body.classList.contains("lesson-view")) return;
  if (event.target.closest("a, button, [role=button], input, label, summary, .glossar-term")) return;
  const el = event.target.closest(HOER_SELEKTOR);
  if (!el || !content || !content.contains(el)) return;
  readShortText(el.textContent, el);
}

function antwortVorwahl(event) {
  if (sofortWaehlen || nehmenFreigabe) return;
  const opt = event.target.closest(".answer-option");
  if (!opt || opt.tagName !== "BUTTON" || opt.disabled || !content || !content.contains(opt)) return;
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  antwortVorwahlMarkieren(opt);
  readShortText(kartenText(opt), opt);
  announce("Ausgewählt. Tippe auf: Das nehme ich.");
}

/* Die Vorwahl beim Sprachwechsel still wiederherstellen: keine neue
   Bewertung, Ansage oder Wiedergabe, derselbe Bestätigungsknopf. */
function antwortVorwahlMarkieren(opt) {
  const gruppe = opt.parentElement;
  gruppe.querySelectorAll(".answer-option").forEach(o => {
    const an = o === opt;
    o.classList.toggle("ist-markiert", an);
    o.setAttribute("aria-pressed", an ? "true" : "false");
  });
  let knopf = gruppe.nextElementSibling && gruppe.nextElementSibling.classList.contains("nehmen-knopf") ? gruppe.nextElementSibling : null;
  if (!knopf) {
    knopf = document.createElement("button");
    knopf.type = "button";
    knopf.className = "nehmen-knopf";
    knopf.textContent = "Das nehme ich";
    knopf.addEventListener("click", () => {
      const markiert = gruppe.querySelector(".answer-option.ist-markiert");
      if (!markiert) return;
      nehmenFreigabe = true;
      try { markiert.click(); } finally { nehmenFreigabe = false; }
    });
    gruppe.insertAdjacentElement("afterend", knopf);
  }
}

document.addEventListener("click", hoerKlick);
document.addEventListener("click", antwortVorwahl, true);

/* ============================================================
   D13 (02.10.2026, freigegeben): einheitlicher Knopf-Platz unten
   ------------------------------------------------------------
   Im Lernmodus steht der nächste Schritt immer an derselben Stelle: unten
   rechts in der Leiste (.nav), als einziger gefüllter Knopf. Links daneben
   steht leise ein zweiter Weg. Auf dem Lerntext ist das seit D11 so
   („Zurück“ | „Zur Übung“). Übung, Rückmeldung, Formular, Quiz und Neue
   Situation bauen ihre Knöpfe weiter im Inhalt; leisteSpiegeln() zeigt den
   Hauptknopf der Seite unten und blendet das Original aus (Klasse
   .in-leiste). Der Knopf unten löst denselben Klick aus wie das Original –
   Auswertung, Merken und Zählen bleiben unverändert. Fällt das Spiegeln
   aus (alter Browser, Fehler), stehen die Knöpfe wie bisher im Inhalt.

   Regeln der Reihe nach: Die erste, deren Hauptknopf auf der Seite steht,
   gilt. Nach einer unpassenden Antwort ist der zweite Versuch der
   Hauptknopf und „Weiter“ der zweite Weg (freigegeben 02.10.2026).
   D17 (05.10.2026, freigegebene Vorschau 12): Abschluss, Kurz-Quiz- und
   Themen-Quiz-Ergebnis markieren ihre vorhandenen Haupt-/Nebenaktionen.
   Plan („Gemacht“) und weitere Ergebnis-Seiten bleiben eigene Pakete.
   ============================================================ */
const LEISTE_REGELN = [
  /* [Hauptknopf, zweiter Weg] – ausdrücklich im Seiten-Text markiert */
  ['[data-leiste="haupt"]', '[data-leiste="neben"]'],
  /* Rückmeldung auf derselben Seite: Neue Situation, Anwenden, Übungs-Handy, Postfach */
  [".sz-feedback.is-wrong .certificate-actions > .nav-button.secondary", ".sz-feedback .certificate-actions > .nav-button.primary"],
  [".sz-feedback .certificate-actions > .nav-button.primary", null],
  /* Rückmelde-Seite (Übung, Quiz): „Weiter“; nach einer Übung links „Pause machen“ */
  [".feedback-page > .feedback-actions > .feedback-button.primary", ".feedback-page > .feedback-actions > .feedback-button.quiet"],
  /* Kurz-Quiz */
  [".feedback-wrong > .einfach-quiz-next-actions > .secondary-action", ".feedback-wrong > .einfach-quiz-next-actions > .primary-action"],
  [".feedback-page > .einfach-quiz-next-actions > .primary-action", null],
  /* Felder auswählen: „Fertig“, solange das Formular offen ist. Die Knöpfe
     nach der Auswertung sind im Seiten-Text markiert (data-leiste). */
  [".felder-aufgabe:not(.felder-aufgabe--ausgewertet) .felder-fertig", null],
  /* eine Antwort ist markiert */
  [".nehmen-knopf", null]
];

/* D17: Ein umgebrochener Abschlussknopf kann deutlich höher werden.
   Der Fokus-Abstand verwendet die echte Leistenhöhe statt eines festen
   Schätzwerts. Keine Speicherung; reine Layout-Messung. */
function lernNavHoeheMessen() {
  const nav = document.querySelector(".nav");
  if (!nav) return;
  const hoehe = Math.ceil(nav.getBoundingClientRect().height) + "px";
  const stil = document.documentElement.style;
  if (stil.getPropertyValue("--lern-nav-hoehe") !== hoehe) stil.setProperty("--lern-nav-hoehe", hoehe);
}

function leisteSpiegeln() {
  const nav = document.querySelector(".nav");
  if (!nav || !content || typeof content.querySelectorAll !== "function") return;
  const aktiv = document.body.classList.contains("lesson-view");
  /* Gespiegelt wird nur, was die Seite selbst gerade zeigt. Auf dem Lerntext
     steckt die Übung schon im Seiten-Text, ist aber per CSS ausgeblendet –
     ihr „Fertig“ darf dort nicht unten erscheinen (sonst ersetzte es
     „Zur Übung“). Darum wird wirklich gemessen. Für die Messung hebt die
     Klasse leiste-messen die eigene Ausblendung (.in-leiste) kurz auf;
     gezeichnet wird in dieser Zeit nichts. */
  const frei = (el) => !el.disabled && !el.closest("[hidden], details:not([open])")
    && (typeof el.checkVisibility === "function" ? el.checkVisibility() : el.getClientRects().length > 0);
  let haupt = null, neben = null;
  if (aktiv) {
    document.body.classList.add("leiste-messen");
    try {
      for (const [h, n] of LEISTE_REGELN) {
        haupt = Array.from(content.querySelectorAll(h)).find(frei) || null;
        if (!haupt) continue;
        neben = n ? (Array.from(content.querySelectorAll(n)).find(el => el !== haupt && frei(el)) || null) : null;
        break;
      }
    } finally { document.body.classList.remove("leiste-messen"); }
  }
  /* Was im Inhalt ausgeblendet wird: die gespiegelten Knöpfe – und jedes
     „Das nehme ich“, denn es steht entweder unten oder ist nach der Antwort
     überholt (vorher blieb es neben „Weiter“ stehen). */
  const aus = new Set([haupt, neben].filter(Boolean));
  if (aktiv) content.querySelectorAll(".nehmen-knopf").forEach(k => aus.add(k));
  content.querySelectorAll(".in-leiste").forEach(el => { if (!aus.has(el)) el.classList.remove("in-leiste"); });
  const fokus = document.activeElement;
  let fokusZiel = null;
  const setze = (quelle, art) => {
    let k = nav.querySelector(".leiste-knopf--" + art);
    if (!quelle) { if (k) k.remove(); return; }
    /* Derselbe Knopf bleibt stehen, solange er dieselbe Quelle hat – sonst
       ginge beim Vorlesen (das den Inhalt umbaut) der Fokus verloren. */
    if (!k || k._quelle !== quelle) {
      if (k) k.remove();
      k = document.createElement("button");
      k.type = "button";
      k.className = "nav-button leiste-knopf leiste-knopf--" + art + (art === "haupt" ? " primary" : " secondary");
      k._quelle = quelle;
      k.addEventListener("click", () => { if (k._quelle && document.body.contains(k._quelle)) k._quelle.click(); });
      if (art === "haupt") nav.appendChild(k); else nav.insertBefore(k, nav.firstChild);
    }
    const text = quelle.textContent.replace(/\s+/g, " ").trim();
    if (k.textContent !== text) k.textContent = text;
    if (fokus === quelle) fokusZiel = k;
  };
  setze(haupt, "haupt");
  setze(neben, "neben");
  aus.forEach(el => el.classList.add("in-leiste"));
  nav.classList.toggle("leiste-aktiv", !!haupt);
  nav.classList.toggle("leiste-neben", !!neben);
  lernNavHoeheMessen();
  /* Manche Seiten setzen den Fokus auf ihren „Weiter“-Knopf im Inhalt. */
  if (fokusZiel) fokusZiel.focus();
}

/* Auch Änderungen ohne neuen Seitenaufbau zählen: eine markierte Antwort,
   die eingefügte Rückmeldung, die Auswertung im Formular. Nur der Aufbau
   (childList) wird beobachtet – die Klasse .in-leiste löst nichts aus. */
if (typeof MutationObserver !== "undefined" && content && content.nodeType === 1) {
  new MutationObserver(leisteSpiegeln).observe(content, { childList: true, subtree: true });
}
if (typeof ResizeObserver !== "undefined") {
  const nav = document.querySelector(".nav");
  if (nav) new ResizeObserver(lernNavHoeheMessen).observe(nav);
}
window.addEventListener("resize", lernNavHoeheMessen);

/* Die Texte der Knöpfe unten, Hauptknopf zuerst – für die Ansage am Ende des Vorlesens. */
function leisteTexte() {
  return Array.from(document.querySelectorAll(".nav .leiste-knopf--haupt, .nav .leiste-knopf--neben"))
    .sort((a, b) => (a.classList.contains("leiste-knopf--haupt") ? 0 : 1) - (b.classList.contains("leiste-knopf--haupt") ? 0 : 1))
    .map(b => cleanSpeechText(b.textContent))
    .filter(Boolean);
}

/* ============================================================
   D4 „Wir lernen zu zweit" (01.10.2026)
   ------------------------------------------------------------
   Ist die Lernart „Mit einer Begleitung" gewählt (Einstellungen oder
   „Mehr"), steht unten auf Lerntext und Übung ein zugeklappter Knopf
   „Für die Begleitung". Der Text kommt wörtlich aus der Begleit-Ebene
   (COMPANION): auf dem Lerntext ein Gesprächsanlass als „Frag nach: …",
   auf der Übung ein Hinweis zur Begleitung. Welcher Eintrag erscheint,
   richtet sich der Reihe nach nach dem Schritt – eine feste Zuordnung je
   Lektion gibt es in den Daten noch nicht. Für die lernende Person bleibt
   der Bildschirm ruhig: zugeklappt, nicht in „Vorlesen".
   ============================================================ */
function begleitTippHtml(topic, art) {
  if (!isCompanionMode() || !topic || !topic.companion) return "";
  const lesson = getLessonsForMode(topic, currentMode)[currentStep];
  const tipp = typeof companionTippFuer === "function"
    ? companionTippFuer(topic, lesson, currentMode, art) : null;
  if (!tipp) return "";
  const inhalt = tipp.frage ? `<strong>Frag nach:</strong> ${escapeHtml(tipp.text)}` : escapeHtml(tipp.text);
  return `<div class="begleit-tipp" data-no-read="true">
      <button type="button" class="begleit-tipp-knopf" aria-expanded="false" onclick="begleitTippUmschalten(this)">Für die Begleitung</button>
      <p class="begleit-tipp-text" hidden>${inhalt}</p>
    </div>`;
}

function begleitTippUmschalten(knopf) {
  const text = knopf.nextElementSibling;
  if (!text) return;
  const auf = text.hidden;
  text.hidden = !auf;
  knopf.setAttribute("aria-expanded", auf ? "true" : "false");
}

/* ============================================================
   Fußzeile
   ============================================================ */

function renderLegalFooter() {
  const old = document.querySelector(".small-footer-notice");
  if (old) old.remove();

  /* Kein zweites <footer>: Für Vorlese-Programme gibt es EINEN Fußbereich
     (.app-footer in index.html). Die Hinweise stehen darin unter den Logos. */
  const footer = document.createElement("div");
  footer.className = "small-footer-notice";
  footer.innerHTML = `
    <p class="test-hinweis"><strong><button type="button" class="glossar-knopf" data-glossar="beta-version" data-glossar-wort="Beta-Version" aria-label="Erklärung: Beta-Version">Beta-Version</button>:</strong> Diese Lern-Plattform ist noch neu. Wir testen sie gerade. Manches ändert sich noch.<br />
    <button type="button" class="link-action test-meinung" onclick="zurMeinung()">Sag uns deine Meinung</button></p>
    <p>Dies ist ein unabhängiges Bildungsangebot. Es ist kein offizielles Angebot von WhatsApp, Facebook, Instagram, YouTube, Snapchat, TikTok oder anderen Firmen.</p>
    <p>Es wird kein Name gespeichert. Der Lernstand wird nur gespeichert, wenn du das möchtest.<br />
    <a href="ersteller.html">Ersteller</a> · <a href="impressum.html">Impressum</a> · <a href="datenschutz.html">Datenschutz</a> · <a href="barrierefreiheit.html">Barrierefreiheit</a> · <a href="sprachstufen.html">Die Sprachstufen</a></p>
  `;
  const appRoot = document.querySelector(".app-footer") || document.querySelector(".app") || document.body;
  appRoot.appendChild(footer);
}

/* ============================================================
   Startseite: Themenübersicht
   ============================================================ */

function chooseLanguage(level) {
  setLanguageLevel(level);
  /* Sprachwechsel mitten in einer Alltags-Übung: im selben Schritt bleiben. */
  if (window.location.hash.startsWith("#alltag:")) return renderAlltag(window.location.hash.slice(1));
  if (zurueckAnDieStelle()) return;
  /* Im Erststart geht es nach der Sprache direkt zu den Themen (F3).
     Vorwissen und Vorlesen werden nicht mehr vorab gefragt, sondern erst
     hinter dem ersten Thema (Pruefbericht B10) - dann kann die Person die
     Frage aus Erfahrung beantworten statt ins Blaue.
     Beim späteren Ändern zurück dorthin, wo die Person herkam:
     Einstellungen, das gerade offene Thema, sonst die Themenübersicht. */
  if (onboarding) { onboarding = false; return renderMenu(); }
  if (activeTab === "einstellungen") return renderSettingsPage();
  if (currentTopicId && getTopicById(currentTopicId)) return renderTopicChoice(currentTopicId);
  renderMenu();
}

/* Rückweg von der Sprach-Wahl OHNE etwas ändern zu müssen (kein Wahl-Zwang) */
/* Zurück an die Stelle, von der aus die Sprache gewechselt wurde
   (Gesamtprüfung 25.09.2026, Z2). Vorher landete die Person nach der Wahl
   auf der Themenseite und musste „Weiter lernen" selbst suchen. Gemerkt
   wird nur beim Antippen des Sprach-Knopfs in der Werkzeugzeile. */
let languageReturn = null;

function openLanguageFromTools() {
  languageReturn = merkeStelle();
  renderLanguageChoice();
}

/* ------------------------------------------------------------
   STELLE MERKEN (Paket T2, 29.09.2026)
   Ansichten, die einen eigenen Zustand haben (Quiz, Kurz-Quiz, Noch einmal
   üben, Plan, Übungs-Handy, Szene im Anwenden-Schritt, neue Situation),
   sagen beim Zeichnen selbst, wie sie sich wieder aufbauen: `wieder` stellt
   Thema, Weg, Frage, Auswahl und Stand her – ohne etwas doppelt zu zählen
   (kein zweites Merken, kein zweiter Punkt, kein zweiter Ton).
   Gültig ist der Eintrag nur, solange genau dieser Bildschirm steht: Er
   hängt am ersten Element des Inhalts. Jede andere Seite ersetzt den
   Inhalt, damit verfällt der Eintrag von selbst.
   Vorher fiel man nach einem Sprachwechsel an diesen Stellen auf die
   Themen-Seite zurück (merkeStelle kannte sie nicht).
   ------------------------------------------------------------ */
let stelleWieder = null;
let stelleKnoten = null;
function stelleMerken(wieder) {
  stelleWieder = typeof wieder === "function" ? wieder : null;
  stelleKnoten = stelleWieder ? content.firstElementChild : null;
}
function gemerkteStelle() {
  return (stelleWieder && stelleKnoten && content.contains(stelleKnoten)) ? stelleWieder : null;
}

/* Paket T4 (29.09.2026): Zur Stelle gehört auch, was auf dem Bildschirm
   schon passiert ist – ein offener Tipp („Ich bin unsicher“) und bei einem
   Formular („Felder auswählen“) der Lern-Schritt, „erst prüfen“ / „nicht
   nutzen“, die Sperr-Meldung oder die Auswertung. Das wird hier beim
   Antippen des Sprach-Knopfs abgelesen und nach dem Neuzeichnen still
   wiederhergestellt – ohne neue Bewertung, ohne Merken, ohne Ton. */
function merkeStelle() {
  const ziel = stelleOhneZusatz();
  if (!ziel) return null;
  const hilfe = document.getElementById("taskHelpPanel");
  const hilfeOffen = !!(hilfe && content.contains(hilfe) && !hilfe.hasAttribute("hidden"));
  const form = (felderAktiv && content.querySelector(".felder-aufgabe"))
    ? { key: aufgabeSchluessel(felderAktiv.q), lern: felderAktiv.lern, stand: felderAktiv.stand || null } : null;
  const quizVorwahl = content.querySelector(".quiz-card:not(.big-quiz-card) .answer-option.ist-markiert");
  const quizAntwort = quizVorwahl ? quizVorwahl.getAttribute("onclick") : null;
  return () => {
    ziel();
    if (form) felderWiederherstellen(form);
    if (quizAntwort) {
      const opt = Array.from(content.querySelectorAll(".quiz-card:not(.big-quiz-card) .answer-option"))
        .find(o => o.getAttribute("onclick") === quizAntwort);
      if (opt) antwortVorwahlMarkieren(opt);
    }
    if (hilfeOffen) hilfeWiederOeffnen();
  };
}

function hilfeWiederOeffnen() {
  const panel = document.getElementById("taskHelpPanel");
  if (panel && panel.hasAttribute("hidden")) toggleTaskHelp();
}

function stelleOhneZusatz() {
  const eigene = gemerkteStelle();
  if (eigene) return eigene;
  const topicId = currentTopicId, mode = currentMode, step = currentStep;
  /* Paket 5: Datenschutz-Ansichten aus Paket 2–4 (Weiterlernen, Vorhersage,
     neue Situation, Formular im Lern-Schritt). Die Formular-Wahl bleibt
     über den Aufgaben-Schlüssel erhalten; Lern-Schritt und Auswertung stellt
     merkeStelle wieder her (Paket T4). */
  if (weiterlernenThema && content.querySelector(".weiterlernen-card, .weiterlernen-zusatz")) {
    const thema = weiterlernenThema, idx = weiterlernenIndex;
    return () => renderWeiterlernen(thema, idx);
  }
  if (!topicId || !getTopicById(topicId)) return null;
  const ort = (moduleLabel && moduleLabel.textContent) || "";
  if (content.querySelector(".sa-card") && getTopicById(topicId).vorhersage) {
    return () => { currentTopicId = topicId; currentMode = mode; renderSelfAssessment(); };
  }
  if (felderAktiv && felderAktiv.ort === "neu" && content.querySelector(".transfer-card .felder-aufgabe")) {
    const idx = neueSituationIndex;
    return () => { currentMode = mode; renderNeueSituationFelder(getTopicById(topicId), idx); };
  }
  /* Lernschritt, Übungsseite oder Rückmeldung zur Übung: derselbe Schritt. */
  if (document.body.classList.contains("lesson-view") || content.querySelector(".practice-box") || ort === "Übung") {
    return () => { currentTopicId = topicId; currentMode = mode; currentStep = step; renderLesson(); };
  }
  if (ort === "Kurze Frage") return () => renderMiniCheck(topicId);
  if (content.querySelector(".completion-page")) return () => renderCompletionPage(topicId);
  return null;
}

function zurueckAnDieStelle() {
  const ziel = languageReturn;
  languageReturn = null;
  if (typeof ziel !== "function") return false;
  ziel();
  return true;
}

function languageChoiceBack() {
  if (window.location.hash.startsWith("#alltag:")) return renderAlltag(window.location.hash.slice(1));
  if (zurueckAnDieStelle()) return;
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
  setOrientation("Eine kurze Frage an dich. Dann geht es weiter.");
  showNav(false, false);
  content.innerHTML = `
    ${buildReadingToolbar()}
    <section class="profile-new" data-readable="true">
      <h2 class="profile-picker-title">Wie gut kennst du dich aus?</h2>
      ${setupWeiterZu ? `<p class="profile-picker-intro"><strong>Du hast dein erstes Thema geschafft.</strong> ${vorleseFrageOffen() ? "Jetzt noch 2 kurze Fragen." : "Jetzt noch 1 kurze Frage."} Danach geht es weiter.</p>` : ""}
      <p class="profile-picker-intro">Das hilft uns, dir die passende Menge vorzuschlagen. Du kannst es bei jedem Thema ändern.</p>
      <div class="device-grid">
        <button type="button" class="device-card" onclick="chooseVorwissen('neu')">
          <span class="device-icon" aria-hidden="true">${pictoHtml("neu")}</span>
          <strong>Ich bin ganz neu</strong>
          <span>Zeig mir alles in Ruhe. Ausführlich.</span>
        </button>
        <button type="button" class="device-card" onclick="chooseVorwissen('erfahren')">
          <span class="device-icon" aria-hidden="true">${pictoHtml("erfahren")}</span>
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
  renderVorleseFrage();
}

/* Einmalige Frage: Soll ich dir vorlesen? EIN Konzept, EIN Bildschirm,
   zwei klare Wege. Jederzeit in den Einstellungen änderbar. */
function vorleseFrageOffen() {
  return pGet(AUTO_READ_GEFRAGT_KEY) !== "1" && supportsSpeech();
}

function renderVorleseFrage() {
  if (!vorleseFrageOffen()) {
    if (setupWeiterZu) { const weiter = setupWeiterZu; setupWeiterZu = null; return weiter(); }
    return renderMenu();
  }
  pSet(AUTO_READ_GEFRAGT_KEY, "1");
  stopReading();
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Vorlesen", "Start", "Soll ich dir vorlesen?", 0);
  setActiveTab("start");
  setOrientation("Noch eine kurze Frage. Es geht um das Vorlesen.");
  showNav(false, false);
  content.innerHTML = `
    ${buildReadingToolbar()}
    <section class="profile-new" data-readable="true">
      <h2 class="language-choice-title">Soll ich dir die Seiten vorlesen?</h2>
      <p class="language-choice-intro">Du kannst das jederzeit in den Einstellungen ändern.</p>
      <div class="device-grid">
        <button type="button" class="device-card" onclick="chooseAutoRead(true)">
          <span class="device-icon" aria-hidden="true">${pictoHtml("vorlesen")}</span>
          <strong>Ja, immer vorlesen</strong>
          <span>Die App liest dir jede Seite vor.</span>
        </button>
        <button type="button" class="device-card" onclick="chooseAutoRead(false)">
          <span class="device-icon" aria-hidden="true">${pictoHtml("leise")}</span>
          <strong>Nein, ich tippe selbst</strong>
          <span>Du tippst auf Vorlesen. Dann liest die App vor.</span>
        </button>
      </div>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

function chooseAutoRead(an) {
  setAutoRead(an);
  if (setupWeiterZu) { const weiter = setupWeiterZu; setupWeiterZu = null; return weiter(); }
  renderMenu();
}

/* ---- Zwei Restfragen hinter dem ersten Thema (Pruefbericht B10) ----
   Vorwissen und Vorlesen standen frueher im Onboarding, also bevor die
   Person wusste, worauf sie sich einlaesst. Sie kommen jetzt einmalig
   nach dem ersten geschafften Thema und fuehren danach genau dorthin
   weiter, wo die Person hin wollte. */
const SETUP_REST_KEY = "einrichtung-rest";
let setupWeiterZu = null;

function restfragenOffen() {
  return pGet(SETUP_REST_KEY) !== "1";
}

function weiterNachThema(topicId) {
  const ziel = (topicId && getTopicById(topicId))
    ? () => renderTopicChoice(topicId)
    : () => renderMyPath();
  if (!restfragenOffen()) return ziel();
  pSet(SETUP_REST_KEY, "1");
  /* Paket C (26.09.2026): Die Vorwissen-Frage steuert nur die Vorauswahl von
     Kurz/Mehr. Wer schon selbst gewählt hat, dem folgt die Vorauswahl ohnehin
     (lastAmountChoice) – die Frage hielt nur auf dem Weg zum nächsten Thema
     auf (Prüfgruppen-Test B-e). Die Vorlese-Frage kommt nur, wenn sie noch
     offen ist. */
  /* D7 (01.10.2026, E6): Es gibt keine Mengen-Wahl mehr, die Vorwissen-Frage
     entfällt im Ablauf. renderVorwissen bleibt vorhanden, wird aber nicht
     mehr aufgerufen. */
  if (!vorleseFrageOffen()) return ziel();
  setupWeiterZu = ziel;
  return renderVorleseFrage();
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
  pauseBewertungLoeschen();
  activeProfileId = id;
  saveProfiles();
  loadActiveProfileSettings();
  finishedTopicThisSession = false;
  sessionDoneTopics = new Set();
  sessionScenarioStufe = {};
  sessionRegeln = {};
  schwereSitzung = {};
  /* Person gewechselt: Rück-Anker und Mengen-Wahl DIESER Person laden, nicht
     die der vorherigen (der Speicher ist ohnehin je Profil getrennt). */
  loadLastLesson();
  loadTopicAmounts();
  if (languageChosen) renderMenu();
  else renderStart();
}

/* Aus der Personen-Liste gewählt. Mit Bild-Code wird zuerst gefragt,
   ohne Code geht es direkt weiter. */
function pickProfile(id) {
  const p = profiles.find(x => x.id === id);
  if (!p) return;
  if (!hasCode(p)) return switchProfile(id);
  codeTargetId = id;
  codeEntry = [];
  codeError = false;
  renderCodeAsk();
}

/* Anmelden mit Bild-Code. */
function renderCodeAsk() {
  const p = profiles.find(x => x.id === codeTargetId);
  if (!p) return renderProfilePicker();
  stopReading();
  currentTopicId = null;
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Dein Code", "Start", "Dein Bild-Code", 0);
  setOrientation("Du bist bei deinem Bild-Code.");
  hideHeaderSign();
  showNav(false, false);

  content.innerHTML = `
    ${buildReadingToolbar()}
    <section class="profile-code" data-readable="true">
      <h2 class="profile-picker-title"><span class="profile-manage-sign">${signHtml(p)}</span> Dein Bild-Code</h2>
      <p class="profile-picker-intro">Tippe deine 3 Bilder an. Immer in der gleichen Reihenfolge.</p>
      ${codeDots(codeEntry)}
      ${codeError ? `<p class="code-error" role="status">Das war nicht dein Code. Versuch es nochmal. Es ist nichts passiert.</p>` : ""}
      <div class="sign-icon-grid">${codeIconGrid("codeTap")}</div>
      <button type="button" class="plain-back-button" onclick="codeForgot()">Ich weiß meinen Code nicht mehr</button>
      <button type="button" class="plain-back-button" onclick="renderProfilePicker()">← Zur Liste</button>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

function codeTap(key) {
  codeError = false;
  codeEntry.push(key);
  if (codeEntry.length < CODE_LENGTH) return renderCodeAsk();
  const p = profiles.find(x => x.id === codeTargetId);
  if (codeMatches(p, codeEntry)) {
    const id = codeTargetId;
    codeEntry = [];
    codeTargetId = null;
    return switchProfile(id);
  }
  /* Falsch: ruhig, ohne Zählen, ohne Sperre, ohne Wartezeit (§3 Došen, §9 COGA).
     Der Lernstand bleibt selbstverständlich unberührt. */
  codeEntry = [];
  codeError = true;
  announce("Das war nicht dein Code. Versuch es nochmal.");
  renderCodeAsk();
}

/* Code vergessen. Niemand wird ausgesperrt – das ist die Bedingung dafür,
   dass es diesen Code überhaupt geben darf (§1 Teilhabe). Der Preis ist
   ehrlich: Wer den Code wegnimmt, kommt hinein. Das Schloss schützt vor
   Verwechslung, nicht vor Absicht. */
function codeForgot() {
  const p = profiles.find(x => x.id === codeTargetId);
  if (!p) return renderProfilePicker();
  stopReading();
  setHeader("Sicher und selbstbestimmt im Internet", "Dein Code", "Start", "Code vergessen", 0);
  hideHeaderSign();
  showNav(false, false);
  content.innerHTML = `
    ${buildReadingToolbar()}
    <section class="profile-code" data-readable="true">
      <h2 class="profile-picker-title">Du weißt deinen Code nicht mehr</h2>
      <p>Das ist nicht schlimm. Dein Lernstand ist noch da. Es geht nichts verloren.</p>
      <p>Du kannst den Code jetzt wegnehmen. Dann kommst du wieder zu deinem Zeichen.</p>
      <p>Einen neuen Code kannst du dir später aussuchen. Am besten zusammen mit einer Person, der du vertraust.</p>
      <div class="feedback-actions">
        <button type="button" class="utility-button" onclick="renderCodeAsk()">Nochmal versuchen</button>
        <button type="button" class="utility-button danger-button" onclick="dropCodeAndEnter()">Code wegnehmen</button>
      </div>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

function dropCodeAndEnter() {
  const id = codeTargetId;
  const p = profiles.find(x => x.id === id);
  if (!p) return renderProfilePicker();
  delete p.code;
  saveProfiles();
  codeTargetId = null; codeEntry = []; codeError = false;
  announce("Der Code ist weg. Du kannst dir später einen neuen aussuchen.");
  switchProfile(id);
}

/* Code aussuchen oder ändern (aus der Profil-Verwaltung). */
function startCodeSet(id) {
  codeTargetId = id;
  codeDraft = [];
  renderCodeSet();
}

function renderCodeSet() {
  const p = profiles.find(x => x.id === codeTargetId);
  if (!p) return renderProfilePicker();
  stopReading();
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Dein Code", "Start", "Bild-Code aussuchen", 0);
  setOrientation("Du bist bei deinem Bild-Code.");
  hideHeaderSign();
  showNav(false, false);
  const fertig = codeDraft.length === CODE_LENGTH;

  content.innerHTML = `
    ${buildReadingToolbar()}
    <section class="profile-code" data-readable="true">
      <h2 class="profile-picker-title"><span class="profile-manage-sign">${signHtml(p)}</span> Bild-Code aussuchen</h2>
      <p class="profile-picker-intro">Such dir 3 Bilder aus. Merk dir die Reihenfolge. Beim Anmelden tippst du sie wieder an.</p>
      <p class="profile-manage-note">Ein Code ist freiwillig. Du kannst ihn jederzeit wieder wegnehmen. Dein Lernstand geht dabei nie verloren.</p>
      ${codeDots(codeDraft)}
      <div class="sign-icon-grid">${codeIconGrid("codeDraftTap")}</div>
      <div class="feedback-actions">
        <button type="button" class="utility-button" onclick="codeDraftClear()">Nochmal von vorn</button>
        <button type="button" class="utility-button" onclick="codeDraftSave()"${fertig ? "" : " disabled"}>Diesen Code merken</button>
      </div>
      <button type="button" class="plain-back-button" onclick="renderProfileManage('${escapeHtml(p.id)}')">← Zurück</button>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

function codeDraftTap(key) {
  if (codeDraft.length >= CODE_LENGTH) return;
  codeDraft.push(key);
  renderCodeSet();
}
function codeDraftClear() { codeDraft = []; renderCodeSet(); }
function codeDraftSave() {
  const p = profiles.find(x => x.id === codeTargetId);
  if (!p || codeDraft.length !== CODE_LENGTH) return;
  p.code = codeDraft.slice();
  saveProfiles();
  codeDraft = [];
  announce("Dein Bild-Code ist gemerkt.");
  renderProfileManage(p.id);
}
function removeCode(id) {
  const p = profiles.find(x => x.id === id);
  if (!p) return;
  delete p.code;
  saveProfiles();
  announce("Der Bild-Code ist weg.");
  renderProfileManage(id);
}

function renderProfilePicker() {
  stopReading();
  currentTopicId = null;
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Wer lernt?", "Start", "Wer lernt gerade?", 0);
  setOrientation("Du bist am Anfang. Hier wählst du, wer lernt.");
  hideHeaderSign();
  showNav(false, false);

  const cards = profiles.map(p => `
    <div class="profile-card-wrap">
      <button type="button" class="profile-card" onclick="pickProfile('${escapeHtml(p.id)}')" aria-label="Weiter als ${escapeHtml(signLabel(p))}${hasCode(p) ? ", mit Bild-Code" : ""}">
        ${signHtml(p)}
        <span class="profile-name">${escapeHtml(signLabel(p))}</span>
        ${hasCode(p) ? `<span class="profile-code-badge">mit Bild-Code</span>` : ""}
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

/* Erststart-Frage: eigenes oder geteiltes Gerät (F2). */
function renderDeviceQuestion(showSharedChoice = false) {
  stopReading();
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Start", "Start", "Wer lernt heute?", 0);
  setOrientation("Du bist am Anfang. Hier sagst du, wer lernt.");
  showNav(false, false);

  const sharedBlock = showSharedChoice ? `
      <div class="device-sign-choice" style="margin-top: 24px; text-align: center;">
        <h3 class="profile-picker-title" style="font-size: 1.25rem; margin-bottom: 12px;">Such dir ein Zeichen aus:</h3>
        <div class="sign-icon-grid">
          ${SIGN_ICONS.map(ic => `
            <button type="button" class="sign-pick${signDraft.icon === ic.key ? " is-active" : ""}" onclick="pickDeviceSignIcon('${ic.key}')" aria-label="${escapeHtml(ic.name)} wählen">
              <span class="sign-pick-bubble"><svg viewBox="0 0 100 100" aria-hidden="true">${ic.svg.replace(/#fff/g, "currentColor")}</svg></span>
              <span class="sign-pick-name">${escapeHtml(ic.name)}</span>
            </button>`).join("")}
        </div>
        <button type="button" class="intro-start-button" onclick="finishSign(null)" style="margin-top: 16px;">Weiter</button>
      </div>` : "";

  content.innerHTML = `
    ${buildReadingToolbar()}
    <section class="profile-new" data-readable="true">
      <h2 class="profile-picker-title">Wer lernt heute?</h2>
      <p class="profile-picker-intro">Eine Frage zum Anfang: Benutzt du dieses Gerät allein? Oder benutzen es mehrere Personen?</p>
      <div class="device-grid">
        <button type="button" class="device-card" onclick="chooseDevice(false)">
          <span class="device-icon" aria-hidden="true">📱</span>
          <strong>Nur ich</strong>
          <span>Mein eigenes Handy oder Tablet.</span>
        </button>
        <button type="button" class="device-card${showSharedChoice ? " is-active" : ""}" onclick="chooseDevice(true)">
          <span class="device-icon" aria-hidden="true">👥</span>
          <strong>Mehrere Personen</strong>
          <span>Ein Gerät, das wir uns teilen.</span>
        </button>
      </div>
      ${sharedBlock}
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

function pickDeviceSignIcon(key) {
  const n = profiles.length;
  signDraft = {
    icon: key,
    color: SIGN_COLORS[n % SIGN_COLORS.length].hex,
    number: n % 11
  };
  renderDeviceQuestion(true);
}

function chooseDevice(shared) {
  setDeviceShared(shared);
  const n = profiles.length;
  if (shared) {
    if (!signDraft.icon) {
      signDraft = {
        icon: SIGN_ICONS[n % SIGN_ICONS.length].key,
        color: SIGN_COLORS[n % SIGN_COLORS.length].hex,
        number: n % 11
      };
    }
    renderDeviceQuestion(true);
    return;
  }
  /* Eigenes Geraet: Das Zeichen dient nur dazu, mehrere Personen auf einem
     geteilten Geraet auseinanderzuhalten. Wer gerade „Nur ich" geantwortet
     hat, brauchte trotzdem drei Bildschirme mit zusammen 34 Auswahlfeldern
     (Pruefbericht B10). Jetzt vergibt die App das Zeichen selbst; unter
     Einstellungen laesst es sich jederzeit aendern. */
  signDraft = {
    icon: SIGN_ICONS[n % SIGN_ICONS.length].key,
    color: SIGN_COLORS[n % SIGN_COLORS.length].hex,
    number: n % 11
  };
  finishSign(null);
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
  setOrientation("Du baust dein Zeichen.");
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
    ${buildReadingToolbar()}
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
  const ersterStart = !activeProfileId;
  const p = Object.assign({ id: genProfileId() }, sign);
  profiles.push(p);
  activeProfileId = p.id;
  /* Erstes Profil auf dem Gerät: Was die Person VOR dem Anlegen gewählt hat
     (Vorlese-Angebot auf der Startseite), gehört ihr. Vorher blieb es ohne
     Profil liegen – die App fragte nach dem ersten Thema noch einmal, und
     nach einem Neustart war das Vorlesen wieder aus (Prüfgruppen-Test F3,
     26.09.2026). */
  if (ersterStart) {
    [AUTO_READ_KEY, AUTO_READ_GEFRAGT_KEY, READ_TEMPO_KEY].forEach(base => {
      try {
        const alt = window.localStorage.getItem(base);
        if (alt !== null) { pSet(base, alt); window.localStorage.removeItem(base); }
      } catch (e) { /* nichts tun */ }
    });
  }
  saveProfiles();
  signDraft = { icon: null, color: null, number: null };
  languageChosen = false;
  languageLevel = "leicht";
  sprachstufeAnwenden();
  learnMode = null;
  learnModeChooserOpen = false;
  fontSizeStep = 0;
  applyFontSize();
  finishedTopicThisSession = false;
  sessionDoneTopics = new Set();
  sessionScenarioStufe = {};
  sessionRegeln = {};
  schwereSitzung = {};
  clearLastLesson();
  clearTopicAmounts();
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
  setOrientation("Du bist bei deinem Profil.");
  hideHeaderSign();
  showNav(false, false);

  content.innerHTML = `
    ${buildReadingToolbar()}
    <section class="profile-manage">
      <h2 class="profile-picker-title"><span class="profile-manage-sign">${signHtml(p)}</span> Dein Zeichen</h2>

      <h3 class="profile-manage-sub">Zeichen ändern</h3>
      <p class="profile-manage-note">Bau dir ein neues Zeichen: Symbol, Farbe und Zahl.</p>
      <button type="button" class="utility-button" onclick="renderBuildSign(0, '${escapeHtml(id)}')">Zeichen neu bauen</button>

      <h3 class="profile-manage-sub">Dein Bild-Code</h3>
      <p class="profile-manage-note">${hasCode(p)
        ? "Du hast einen Bild-Code. Vor dem Lernen tippst du deine 3 Bilder an."
        : "Du kannst dein Zeichen mit 3 Bildern schützen. Dann kommt niemand aus Versehen in deinen Lernstand. Das ist freiwillig."}</p>
      <div class="settings-toggle-row">
        <button type="button" class="utility-button" onclick="startCodeSet('${escapeHtml(id)}')">${hasCode(p) ? "Code ändern" : "Bild-Code aussuchen"}</button>
        ${hasCode(p) ? `<button type="button" class="utility-button" onclick="removeCode('${escapeHtml(id)}')">Code wegnehmen</button>` : ""}
      </div>

      <h3 class="profile-manage-sub">Meine Karte</h3>
      <p class="profile-manage-note">Druck dir dein Zeichen aus, damit du es dir merken kannst.</p>
      <button type="button" class="utility-button" onclick="printSignCard('${escapeHtml(id)}')">${pictoHtml("drucken")} Meine Karte drucken</button>

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
        <!-- Die sichere Antwort steht zuerst. Sie ist ohnehin als primary
             gestaltet; im Quelltext stand sie aber hinten, und genau in
             dieser Reihenfolge liest die Sprachausgabe vor - die
             loeschende Antwort kam also als erste Ansage. -->
          <button type="button" class="feedback-button primary" onclick="renderProfileManage('${escapeHtml(id)}')">Nein, behalten</button>
          <button type="button" class="feedback-button secondary danger-button" onclick="resetProfile('${escapeHtml(id)}')">Ja, neu anfangen</button>
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
    pauseBewertungLoeschen();
    loadActiveProfileSettings();
    finishedTopicThisSession = false;
  sessionDoneTopics = new Set();
  sessionScenarioStufe = {};
  sessionRegeln = {};
  schwereSitzung = {};
  clearLastLesson();
  clearTopicAmounts();
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
        <!-- Die sichere Antwort steht zuerst. Sie ist ohnehin als primary
             gestaltet; im Quelltext stand sie aber hinten, und genau in
             dieser Reihenfolge liest die Sprachausgabe vor - die
             loeschende Antwort kam also als erste Ansage. -->
          <button type="button" class="feedback-button primary" onclick="renderProfileManage('${escapeHtml(id)}')">Nein, behalten</button>
          <button type="button" class="feedback-button secondary danger-button" onclick="deleteProfile('${escapeHtml(id)}')">Ja, löschen</button>
        </div>
      </article>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

function deleteProfile(id) {
  if (!profiles.some(p => p.id === id)) return;
  const prevActive = activeProfileId;
  if (id === activeProfileId) pauseBewertungLoeschen();
  activeProfileId = id;
  PROFILE_BASE_KEYS.forEach(base => pRemove(base));
  activeProfileId = prevActive;
  profiles = profiles.filter(p => p.id !== id);
  if (activeProfileId === id) activeProfileId = profiles[0] ? profiles[0].id : null;
  saveProfiles();
  if (prevActive === id) {
    finishedTopicThisSession = false;
    sessionDoneTopics = new Set();
    sessionScenarioStufe = {};
    sessionRegeln = {};
    schwereSitzung = {};
    /* Der Rück-Anker gehört zum nun aktiven Profil. Bei der letzten
       gelöschten Person werden auch die alten RAM-Einstellungen geleert. */
    loadLastLesson();
    loadTopicAmounts();
  }
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
  setOrientation("Du bist am Anfang. Jetzt geht es um die Sprache.");
  showNav(false, false);

  content.innerHTML = `
    ${buildReadingToolbar()}
    <section class="start-entry">
      <h2 class="language-choice-title">Womit möchtest du starten?</h2>
      <p class="language-choice-intro">Du kannst gleich selbst wählen. Oder du beantwortest 2 kurze Fragen und bekommst einen Vorschlag.</p>
      <div class="start-entry-grid">
        <button type="button" class="entry-card" onclick="startLanguageQuiz()">
          <span class="entry-icon" aria-hidden="true">${getIconHtml("help")}</span>
          <span class="entry-text">
            <strong>Hilf mir, die passende Stufe zu finden</strong>
            <span>2 kurze Fragen. Es gibt keine falsche Antwort.</span>
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
  /* Paket C (26.09.2026): „Frage 1 von 2" hörbar und sichtbar – vorher sahen
     beide Runden gleich aus, die Person konnte denken, ihr Tippen hat nicht
     geklappt (Prüfgruppen-Test B-a). */
  setOrientation(`Du bist am Anfang. Wir finden die passende Sprache für dich. Frage ${round + 1} von ${SAMPLE_ROUNDS.length}.`);
  showNav(false, false);

  const r = SAMPLE_ROUNDS[round];
  const dots = SAMPLE_ROUNDS.map((_, j) => `<span class="lq-dot${j <= round ? " on" : ""}"></span>`).join("");
  /* Stufen-Namen werden NICHT gezeigt – die Person wählt nach Gefühl,
     nicht nach Etikett. Reihenfolge wird gemischt. */
  const options = shuffleArray(["leicht", "einfach", "standard"]);
  const cards = options.map(level => `
    <div class="card-read-pair card-read-pair--sample">
      <button type="button" class="sample-option" onclick="pickSample(${round}, '${level}')">
      <span class="sample-text">„${escapeHtml(r[level])}"</span>
      </button>
      <button type="button" class="card-read-button" data-read-card-text="${escapeHtml(r[level])}" aria-label="Text vorlesen">${pictoHtml("vorlesen", "rb-ico")} </button>
    </div>`).join("");
  const back = round > 0 ? `renderSampleFinder(${round - 1})` : `renderStart()`;

  content.innerHTML = `
    ${buildReadingToolbar()}
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
  setOrientation("Du bist am Anfang. Hier ist unser Vorschlag für die Sprache.");
  showNav(false, false);

  content.innerHTML = `
    ${buildReadingToolbar()}
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

/* Rück-Anker: merkt die zuletzt offene Lektion.
   Wer zur Hilfe oder zu den Einstellungen wechselt, findet mit einem
   Tipp zurück (COGA: Unterbrechungen sicher machen).

   Seit Prüfbericht B5 überlebt der Anker auch das Schließen der App: vorher
   war er eine reine Variable im Arbeitsspeicher, und ausgerechnet der Fall,
   für den er gebaut wurde – Unterbrechung über Tage – ging verloren. Die App
   bot dann „Hier kannst du weiterlernen" an und begann das Thema bei null.
   Gespeichert wird nur {Thema, Schritt, Menge} im localStorage des Profils –
   eine lokale Einstellung wie Schriftgröße und Sprachstufe, kein
   personenbezogenes Datum (§14, KDG). */
let lastLessonContext = null;
/* Themen, deren Lernweg umgebaut wurde. Alte Wiedereinstiege OHNE Titel
   (gespeichert vor dem 28.09.2026) lassen sich dort nicht eindeutig einer
   Lektion zuordnen und werden verworfen. Datenschutz: Umbau zum
   Muster-Thema, Paket 1 (28.09.2026). Hilfe bei Problemen: Paket H1
   (30.09.2026). */
const WEG_UMGEBAUT = ["datenschutz", "hilfe"];
const LAST_LESSON_KEY = "letzte-lektion";

/* BEGIN T24-PAUSE-HELPERS
   Beenden merkt auch Quiz und Anwenden. Der Bedien-Cursor enthält
   keine Antwort oder Bewertung. Der genaue Stand lebt in dieser Sitzung;
   dauerhaft steht er ausschließlich im eingewilligten Lernstand. */
let pauseStelle = null;
let pauseKnoten = null;
let pauseSitzung = null;
let pauseTeilrunde = null;
/* Ohne Speicherung: genauer Nachweis für wortgleiche Kernübungen. */
let kernUebungenErkannt = new Set();

function pauseSpeicherErlaubt() {
  const progress = loadProgress();
  return !!(progress && progress.enabled && progress.pauseErlaubt === true);
}

function pauseEinwilligungHtml() {
  if (!isProgressEnabled() || pauseSpeicherErlaubt()) return "";
  return `<div class="progress-consent">
    <p class="progress-consent-title">Unterbrochene Runden auch merken?</p>
    <p class="progress-consent-note">Deine Antworten und Treffer bleiben dann nach dem Schließen erhalten. Nur auf diesem Gerät.</p>
    <button type="button" class="utility-button" onclick="enableProgressInline(this)">Ja, Runden merken</button>
  </div>`;
}

function pauseFrageSignatur(q) {
  const leicht = leichtFassung.get(q) || aufgabeSchnappschuss(q);
  const text = JSON.stringify([aufgabeSchluessel(q), leicht.question, leicht.answers,
    Number(q.correctIndex ?? q.correct ?? 0), q.auchMoeglich || [], leicht.felder || null,
    Array.isArray(q.felder) ? q.felder.map(f => [f.zweck, f.pflicht]) : null]);
  let n = 2166136261;
  for (let i = 0; i < text.length; i++) n = Math.imul(n ^ text.charCodeAt(i), 16777619);
  return (n >>> 0).toString(16);
}

function pauseAufgaben(topic, mode) {
  const ns = topic && topic.neueSituation;
  const liste = ns && (ns.aufgaben || ns.fragen);
  return (Array.isArray(liste) ? liste : []).filter(q => q
    && !(q.nurLang && mode === "short") && !(q.nurKurz && mode !== "short"));
}

function pauseCursorPruefen(ctx) {
  if (!ctx || !ctx.pause || !["short", "full", "extra"].includes(ctx.mode)) return null;
  const topic = getTopicById(ctx.topicId), p = ctx.pause;
  if (!topic || !["quiz", "kurzquiz", "wiederholen", "neu"].includes(p.art)
    || !Number.isInteger(p.index) || p.index < 0 || typeof p.frage !== "string") return null;
  const liste = p.art === "quiz" ? getQuizQuestions(topic)
    : p.art === "kurzquiz" ? getEinfachQuizQuestions(topic)
    : p.art === "neu" ? pauseAufgaben(topic, ctx.mode) : null;
  const q = liste ? liste[p.index] : findeAufgabe(topic.id, p.frage);
  if (!q || aufgabeSchluessel(q) !== p.frage || pauseFrageSignatur(q) !== p.signatur) return null;
  const teil = p.teil === "situation" && p.art === "neu" ? "situation" : "frage";
  const cursor = { art: p.art, index: p.index, frage: p.frage, signatur: p.signatur, teil };
  if (p.art === "wiederholen") {
    if (!Number.isInteger(p.gesamt) || p.gesamt < 1 || p.gesamt > 500 || p.index >= p.gesamt
      || !["Das große Quiz", "Wiederholen", LERNWEG_TEXT.nochmalUeben].includes(p.titel)) return null;
    cursor.gesamt = p.gesamt; cursor.titel = p.titel;
  }
  return { topicId: topic.id, mode: ctx.mode, pause: cursor };
}

function pauseFrageFuer(ctx) {
  const t = getTopicById(ctx.topicId), p = ctx.pause;
  return p.art === "quiz" ? getQuizQuestions(t)[p.index]
    : p.art === "kurzquiz" ? getEinfachQuizQuestions(t)[p.index]
    : p.art === "neu" ? pauseAufgaben(t, ctx.mode)[p.index] : findeAufgabe(t.id, p.frage);
}

function pauseStelleMerken(daten) {
  const topicId = daten.topicId || currentTopicId;
  const topic = getTopicById(topicId);
  const q = daten.art === "wiederholen" ? (bigQuizQuestions[daten.index] || {}).quelle
    : daten.art === "quiz" ? getQuizQuestions(topic)[daten.index]
    : daten.art === "kurzquiz" ? getEinfachQuizQuestions(topic)[daten.index]
    : pauseAufgaben(topic, currentMode)[daten.index];
  if (!q) { pauseStelle = null; pauseKnoten = null; return; }
  const ctx = { topicId, mode: currentMode,
    pause: { art: daten.art, index: daten.index, frage: aufgabeSchluessel(q),
      signatur: pauseFrageSignatur(q), teil: daten.teil === "situation" ? "situation" : "frage" } };
  if (daten.art === "wiederholen") Object.assign(ctx.pause, { gesamt: bigQuizQuestions.length, titel: bigQuizTitle });
  pauseStelle = { cursor: ctx, teil: daten.teil || "frage", wieder: textKopie(daten.wieder || {}) };
  pauseKnoten = content.firstElementChild;
}

function pauseBewertungLoeschen() {
  pauseStelle = null; pauseKnoten = null; pauseSitzung = null; pauseTeilrunde = null;
  kernUebungenErkannt = new Set();
  topics.forEach(t => { delete t._zusatzWeg; delete t._schlussZusatz; });
  selfAssessmentStart = {}; miniCheckDone = {}; vorhersageStart = {};
  simulationFertig = {}; simulationWahl = {};
  quizScore = 0; quizKorrigiert = 0; quizAnsweredCorrect = new Set();
  bigQuizScore = 0; bigQuizKorrigiert = 0;
  felderWahl = {}; felderAktiv = null;
  antwortFolge = { schluessel: null, mitFehler: false }; versucheJeFrage = {};
}

function pauseDatenLoeschen() {
  pauseSitzung = null;
  const p = loadProgress();
  if (p && Object.prototype.hasOwnProperty.call(p, "pause")) { delete p.pause; saveProgress(p); }
}

function pauseRundeStarten() {
  pauseStelle = null; pauseKnoten = null; pauseTeilrunde = null;
  pauseDatenLoeschen();
  if (lastLessonContext && lastLessonContext.pause) { lastLessonContext = null; pRemove(LAST_LESSON_KEY); }
}

function pauseEnde(art) {
  pauseStelle = null; pauseKnoten = null;
  if (lastLessonContext && lastLessonContext.pause && lastLessonContext.pause.art === art) {
    lastLessonContext = null; pRemove(LAST_LESSON_KEY); pauseDatenLoeschen();
  }
}

function pauseStandPruefen(s, ctx) {
  if (!s || s.profil !== (activeProfileId || null)
    || JSON.stringify(s.cursor) !== JSON.stringify(ctx)) return null;
  const q = pauseFrageFuer(ctx), p = ctx.pause;
  const total = p.art === "wiederholen" ? p.gesamt
    : p.art === "quiz" ? getQuizQuestions(getTopicById(ctx.topicId)).length
    : p.art === "kurzquiz" ? getEinfachQuizQuestions(getTopicById(ctx.topicId)).length : 1;
  if (![s.richtig, s.korrigiert, s.ab].every(n => Number.isInteger(n) && n >= 0)
    || s.ab > p.index || s.richtig + s.korrigiert > total - s.ab
    || !Array.isArray(s.geschafft) || new Set(s.geschafft).size !== s.geschafft.length
    || s.geschafft.some(n => !Number.isInteger(n) || n < 0 || n >= total)
    || !["situation", "frage", "rueckmeldung"].includes(s.teil)) return null;
  const w = s.wieder || {};
  if (w.antwort !== undefined && (!Number.isInteger(w.antwort) || !Array.isArray(q.answers)
    || w.antwort < 0 || w.antwort >= q.answers.length)) return null;
  if (w.wahl !== undefined && w.wahl !== null && (!Number.isInteger(w.wahl) || !Array.isArray(q.answers)
    || w.wahl < 0 || w.wahl >= q.answers.length)) return null;
  if (s.teil === "rueckmeldung" && !felderAufgabe(q) && w.antwort === undefined) return null;
  if (w.reihe && (!Array.isArray(w.reihe) || !Array.isArray(q.answers)
    || w.reihe.length !== q.answers.length || new Set(w.reihe).size !== w.reihe.length
    || w.reihe.some(n => !Number.isInteger(n) || n < 0 || n >= q.answers.length))) return null;
  if (w.fest && (!Array.isArray(q.answers) || w.fest.topicId !== ctx.topicId || w.fest.index !== p.index
    || w.fest.mode !== ctx.mode
    || !Number.isInteger(w.fest.wrongIndex) || w.fest.wrongIndex < 0
    || w.fest.wrongIndex >= q.answers.length || w.fest.wrongIndex === Number(q.correctIndex ?? 0)
    || typeof w.fest.correctFirst !== "boolean")) return null;
  if (p.art === "kurzquiz" && s.teil === "frage" && !w.fest) return null;
  const schon = p.index - s.ab + ((s.teil === "rueckmeldung"
    || (s.form && s.form.stand && s.form.stand.art === "bewertet")) ? 1 : 0);
  if (p.art !== "neu" && (s.richtig + s.korrigiert > schon
    || s.geschafft.some(n => n < s.ab || n > p.index)
    || (p.art !== "wiederholen" && s.geschafft.length !== s.richtig + s.korrigiert))) return null;
  if (s.vorwahl !== null && (!Number.isInteger(s.vorwahl) || !Array.isArray(q.answers)
    || s.vorwahl < 0 || s.vorwahl >= q.answers.length)) return null;
  if (felderAufgabe(q)) {
    if (!s.form || !Array.isArray(s.form.wahl) || new Set(s.form.wahl).size !== s.form.wahl.length
      || s.form.wahl.some(n => !Number.isInteger(n) || n < 0 || n >= q.felder.length)) return null;
    if (s.form.lern && !["erstPruefen", "nichtNutzen"].includes(s.form.lern.art)) return null;
    if (s.form.stand && !["gesperrt", "ausweg", "bewertet"].includes(s.form.stand.art)) return null;
    if (s.form.stand && s.form.stand.art === "ausweg"
      && !["erstPruefen", "nichtNutzen"].includes(s.form.stand.ausweg)) return null;
  }
  if (p.art === "wiederholen") {
    if (!Array.isArray(s.pool) || s.pool.length !== total) return null;
    for (let i = 0; i < s.pool.length; i++) {
      const e = s.pool[i];
      if (!e && i < s.ab) continue;
      const quelle = e && findeAufgabe(e.topicId, e.frage);
      if (!quelle || pauseFrageSignatur(quelle) !== e.signatur) return null;
    }
    if (!s.pool[p.index] || s.pool[p.index].topicId !== ctx.topicId || s.pool[p.index].frage !== p.frage) return null;
  }
  return s;
}

function pauseMerken() {
  if (!pauseStelle || !pauseKnoten || !content.contains(pauseKnoten)) return false;
  const ctx = pauseCursorPruefen(pauseStelle.cursor);
  if (!ctx) return false;
  const p = ctx.pause, q = pauseFrageFuer(ctx), gross = p.art === "wiederholen";
  const markiert = content.querySelector("button.answer-option.ist-markiert");
  const klick = markiert && String(markiert.getAttribute("onclick") || "").match(/\((\d+)\)/);
  const vorwahl = markiert ? Number(markiert.dataset.index ?? (klick && klick[1])) : null;
  const s = { profil: activeProfileId || null, cursor: ctx, teil: pauseStelle.teil,
    wieder: textKopie(pauseStelle.wieder), vorwahl,
    richtig: gross ? bigQuizScore : p.art === "neu" ? 0 : quizScore,
    korrigiert: gross ? bigQuizKorrigiert : p.art === "neu" ? 0 : quizKorrigiert,
    geschafft: gross || p.art === "neu" ? [] : Array.from(quizAnsweredCorrect),
    ab: pauseTeilrunde && pauseTeilrunde.art === p.art ? pauseTeilrunde.ab : 0,
    folge: textKopie(antwortFolge), versuche: versucheJeFrage[aufgabeSchluessel(q)] || 0 };
  if (gross) s.pool = bigQuizQuestions.map(x => x && ({ topicId: x.topicId,
    frage: aufgabeSchluessel(x.quelle || x), signatur: pauseFrageSignatur(x.quelle || x) }));
  if (felderAktiv && felderAufgabe(q) && aufgabeSchluessel(felderAktiv.q) === p.frage) {
    s.form = { wahl: felderGewaehlt(), lern: textKopie(felderAktiv.lern), stand: textKopie(felderAktiv.stand) };
    s.vorwahl = null;
  }
  pauseSitzung = pauseStandPruefen(s, ctx);
  lastLessonContext = ctx;
  saveLastLesson();
  if (pauseSpeicherErlaubt()) {
    const stand = loadProgress();
    if (pauseSitzung) stand.pause = pauseSitzung; else delete stand.pause;
    saveProgress(stand);
  }
  return true;
}

function pauseResumeText(ctx) {
  const p = ctx.pause;
  const art = p.art === "kurzquiz" ? "Kurz-Quiz" : p.art === "quiz" ? "Quiz"
    : p.art === "wiederholen" ? p.titel : "Neue Situation";
  return `${art}, ${p.teil === "situation" ? "Situation" : "Frage " + (p.index + 1)}`;
}

function pauseTeilHinweisHtml(art) {
  return pauseTeilrunde && pauseTeilrunde.art === art
    ? `<p class="quiz-teilhinweis">Du hast bei Frage ${pauseTeilrunde.ab + 1} neu begonnen. Hier zählen nur die Fragen ab dieser Stelle.</p>` : "";
}

function pauseFortsetzen(raw) {
  const ctx = pauseCursorPruefen(raw);
  if (!ctx) { clearLastLesson(); return renderMenu(); }
  const p = ctx.pause, q = pauseFrageFuer(ctx), topic = getTopicById(ctx.topicId);
  const gespeichert = pauseSpeicherErlaubt() ? (loadProgress() || {}).pause : null;
  const s = pauseStandPruefen(pauseSitzung, ctx) || pauseStandPruefen(gespeichert, ctx);
  currentTopicId = ctx.topicId; currentMode = ctx.mode;
  const gross = p.art === "wiederholen";
  pauseTeilrunde = s ? (s.ab > 0 ? { art: p.art, ab: s.ab } : null)
    : p.art === "neu" || p.index === 0 ? null : { art: p.art, ab: p.index };
  quizScore = !gross && s ? s.richtig : 0; quizKorrigiert = !gross && s ? s.korrigiert : 0;
  quizAnsweredCorrect = new Set(!gross && s ? s.geschafft : []);
  bigQuizScore = gross && s ? s.richtig : 0; bigQuizKorrigiert = gross && s ? s.korrigiert : 0;
  if (s) {
    antwortFolge = s.folge && s.folge.schluessel === ctx.topicId + "\u0000" + p.frage
      ? { schluessel: s.folge.schluessel, mitFehler: s.folge.mitFehler === true } : { schluessel: null, mitFehler: false };
    versucheJeFrage[p.frage] = Number.isInteger(s.versuche) && s.versuche >= 0 ? s.versuche : 0;
  } else { antwortFolge = { schluessel: null, mitFehler: false }; versucheJeFrage[p.frage] = 0; }
  if (gross) {
    bigQuizTitle = p.titel; bigQuizIndex = p.index;
    if (s) bigQuizQuestions = s.pool.map(e => e && quizPoolEintrag(findeAufgabe(e.topicId, e.frage), getTopicById(e.topicId)));
    else {
      const rest = buildBigQuizPool(topics, p.gesamt).filter(x => aufgabeSchluessel(x.quelle || x) !== p.frage);
      bigQuizQuestions = Array(p.index).fill(null).concat(quizPoolEintrag(q, topic), rest.slice(0, p.gesamt - p.index - 1));
    }
  } else currentQuizIndex = p.index;
  if (felderAufgabe(q)) felderWahl[p.frage] = s && s.form ? s.form.wahl.slice() : [];
  stillerNeuaufbau = true;
  const w = s ? textKopie(s.wieder || {}) : {};
  if (p.art === "quiz") {
    if (s && s.teil === "rueckmeldung") renderQuizFeedbackPage(w.antwort, { merk: w.merk });
    else renderQuizQuestion();
  } else if (p.art === "kurzquiz") {
    if (s && s.teil === "rueckmeldung") renderEinfachQuizFeedback(w.antwort, antwortArt(q, w.antwort) !== "falsch", { merk: w.merk });
    else renderEinfachQuizQuestion(w.fest);
  } else if (gross) {
    if (s && s.teil === "rueckmeldung" && !felderAufgabe(q)) renderBigQuizFeedback(w.antwort, { merk: w.merk });
    else renderBigQuizQuestion();
  } else if (felderAufgabe(q)) renderNeueSituationFelder(topic, p.index);
  else renderNeueSituation(topic, p.index, Object.assign(w, { teil: s ? (w.teil || (s.teil === "situation" ? "situation" : "frage")) : p.teil }));
  if (s && s.form) felderWiederherstellen({ key: p.frage, lern: s.form.lern, stand: s.form.stand });
  if (s && s.vorwahl !== null && s.teil === "frage") {
    const opt = Array.from(content.querySelectorAll("button.answer-option")).find(el => {
      const klick = String(el.getAttribute("onclick") || "").match(/\((\d+)\)/);
      return Number(el.dataset.index ?? (klick && klick[1])) === s.vorwahl;
    });
    if (opt) { antwortVorwahlMarkieren(opt); leisteSpiegeln(); }
  }
}

/* END T24-PAUSE-HELPERS */

function saveLastLesson() {
  if (!lastLessonContext) { pRemove(LAST_LESSON_KEY); return; }
  const ctx = lastLessonContext.pause ? pauseCursorPruefen(lastLessonContext) : lastLessonContext;
  if (!ctx) { clearLastLesson(); return; }
  try { pSet(LAST_LESSON_KEY, JSON.stringify(ctx)); } catch (e) { /* nichts tun */ }
}

function loadLastLesson() {
  lastLessonContext = null;
  try {
    const raw = pGet(LAST_LESSON_KEY);
    if (!raw) return;
    const ctx = JSON.parse(raw);
    if (!ctx || typeof ctx.topicId !== "string") return;
    if (ctx.pause) { lastLessonContext = pauseCursorPruefen(ctx); return; }
    const topic = getTopicById(ctx.topicId);
    if (!topic) return;
    if (!["short", "full", "extra"].includes(ctx.mode)) return;
    const mode = ctx.mode;
    const lektionen = getLessonsForMode(topic, mode);
    const step = Number(ctx.step);
    /* Nur übernehmen, wenn der Schritt heute noch existiert – sonst käme die
       Person nach einer Inhaltsänderung auf einer leeren Seite an. */
    if (!Number.isInteger(step) || step < 0 || step >= lektionen.length) return;
    /* … und nur, wenn an dieser Stelle noch DIESELBE Lektion steht (28.09.2026).
       Eine gleiche Nummer allein reicht nicht: Nach einem Umbau kann sie auf
       eine andere Lektion zeigen. Dann lieber kontrolliert zur Themen-Seite
       („Lernen starten“) als still in eine fremde Lektion. Es wird bewusst
       NICHT an anderer Stelle nach der Lektion gesucht.
       Langfristig besser: feste Lektions-IDs statt Nummer + Titel. */
    const titelJetzt = (lektionen[step] && lektionen[step].title) || "";
    if (typeof ctx.titel === "string") {
      if (ctx.titel !== titelJetzt) return;
    } else if (WEG_UMGEBAUT.indexOf(topic.id) !== -1) {
      /* Alter Stand ohne Titel aus einem umgebauten Weg: nicht eindeutig. */
      return;
    }
    lastLessonContext = { topicId: topic.id, step, mode, titel: titelJetzt };
    /* D8: War die Person schon auf der Übungs-Seite, geht es dort weiter. */
    if (ctx.uebung === true && lektionen[step] && lektionen[step].practice) lastLessonContext.uebung = true;
    else if (ctx.teil === "beispiele" && lessonHasExamples(topic, lektionen[step], lektionen)) lastLessonContext.teil = "beispiele";
  } catch (e) { /* nichts tun */ }
}

function clearLastLesson() {
  lastLessonContext = null;
  pRemove(LAST_LESSON_KEY);
  pauseDatenLoeschen();
  pauseStelle = null; pauseKnoten = null; pauseTeilrunde = null;
}

/* ============================================================
   Nutzerführung – zentrale Wörter (21.09.2026, §13)
   ------------------------------------------------------------
   Jede Seite soll drei Fragen beantworten: Wo bin ich? Was soll ich
   jetzt tun? Welcher Knopf führt mich weiter? Dafür trägt jede Seite
   GENAU EINE laut hervorgehobene Lern-Aktion (§3 CLT: eine
   Hauptaufgabe je Bildschirm). Alles Weitere steht leiser dahinter
   oder in einem zugeklappten Bereich.

   Die Wörter stehen hier zentral, damit sie sich für die Prüfgruppe
   an einer Stelle ändern lassen (§13, Stations-Dokument Regel 1).
   Die Zusammenfassungs-Zeilen (`…Auf`) sagen ausdrücklich, WAS
   drinsteckt: Beim Vorlesen wird von einem zugeklappten Bereich nur
   die Überschrift gelesen (readCurrentPage filtert
   `details:not([open])`). Ein blindes „Mehr" wäre dort eine
   Sackgasse. */
const FUEHRUNG_TEXT = {
  zuDenThemen:      "Zu den Themen",
  weiterLernen:     "Weiter lernen",
  spaeterAuf:       "Für später: Quiz, Merk-Karte und Übungen",
  /* Paket H2 (30.09.2026): für Themen ohne Quiz (vorerst nur Hilfe) –
     die Zeile nennt nur, was im Bereich wirklich steckt. Neu, §13. */
  spaeterOhneQuiz:  "Für später: Merk-Karte und Übungen",
  spaeterNurMerk:   "Für später: Merk-Karte",
  oderAuf:          "Oder: anders weitermachen",
  geschafftAuf:     "Das hast du geschafft",
  offenAuf:         "Das ist noch offen",
  uebenAuf:         "Zusätzlich üben: Quiz, Übungs-Handy und Merk-Karten",
  appHilfeStill:    "App-Hilfe ist an. Die Schrift ist größer. Du kannst dir die Texte vorlesen lassen.",
  appHilfeLaut:     "App-Hilfe ist an. Die Schrift ist größer. Jede Seite wird dir vorgelesen."
};

/* Überschrift des zugeklappten Bereichs „Für später“ auf der Themen-Seite
   (Paket H2): Themen mit Quiz wie bisher; ohne Quiz nur, was es gibt. */
function spaeterTitel(hatQuiz, hatUebung) {
  if (hatQuiz) return FUEHRUNG_TEXT.spaeterAuf;
  return hatUebung ? FUEHRUNG_TEXT.spaeterOhneQuiz : FUEHRUNG_TEXT.spaeterNurMerk;
}

function buildResumeLessonChip() {
  const ctx = lastLessonContext;
  if (!ctx) return "";
  const topic = getTopicById(ctx.topicId);
  if (!topic) return "";
  return `
    <p class="resume-lesson-wrap">
      <button type="button" class="review-chip resume-lesson-chip" style="${getTopicColorStyle(topic.id)}" onclick="resumeLastLesson()">
        <span aria-hidden="true">${getIconHtml(topic.icon || "start")}</span>
        <span>${FUEHRUNG_TEXT.weiterLernen}: ${escapeHtml(topic.title)}, ${ctx.pause ? escapeHtml(pauseResumeText(ctx)) : "Schritt " + (ctx.step + 1)}</span>
      </button>
    </p>`;
}

/* Laute Fassung desselben Rück-Ankers für die Start-Seite (Befund 1).
   Dort ist das Fortsetzen die eine Hauptaktion und bekommt deshalb den
   grossen Knopf; der Chip oben bleibt für Themen-Seite und Lernweg, wo
   die Hauptaktion eine andere ist. */
function buildResumeLessonButton() {
  const ctx = lastLessonContext;
  if (!ctx) return "";
  const topic = getTopicById(ctx.topicId);
  if (!topic) return "";
  return `
    <button type="button" class="intro-start-button intro-resume-button" onclick="resumeLastLesson()">
      ${FUEHRUNG_TEXT.weiterLernen}: ${escapeHtml(topic.title)}, ${ctx.pause ? escapeHtml(pauseResumeText(ctx)) : "Schritt " + (ctx.step + 1)}
    </button>`;
}

function resumeLastLesson() {
  const ctx = lastLessonContext;
  if (!ctx || !getTopicById(ctx.topicId)) return renderMenu();
  if (ctx.pause) return pauseFortsetzen(ctx);
  currentTopicId = ctx.topicId;
  currentMode = ctx.mode;
  currentStep = ctx.step;
  /* D8 (01.10.2026): zurück zur Übung, wenn sie schon offen war (Befund B14). */
  if (ctx.uebung) return renderPracticePage();
  renderLesson(ctx.teil);
}

function getDailyQuestion() {
  const d0 = new Date();
  const tag = d0.getFullYear() * 372 + (d0.getMonth() + 1) * 31 + d0.getDate();
  /* Lernweg (26.09.2026): Gibt es Aufgaben, die schwer waren, kommt eine
     davon als Frage des Tages – gezielt wiederholen nach Abstand. */
  const schwer = schwereAufgaben(null).filter(e => !felderAufgabe(e.frage))
    .map(e => ({ topic: getTopicById(e.topicId), q: e.frage })).filter(x => x.topic);
  if (schwer.length) return schwer[tag % schwer.length];
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
    `<button type="button" class="answer-option daily-answer" onclick="answerDailyQuestion(${i})">${answerNumBadge(i)}${answerPikto(a, daily.q, i)}<span class="answer-text">${escapeHtml(answerText(a))}</span></button>`
  ).join("");
  return `
      <div class="intro-offer daily-question" id="dailyQuestion" style="${getTopicColorStyle(daily.topic.id)}" data-readable="true" role="region" aria-label="Frage des Tages">
        <h3>Deine Frage für heute</h3>
        <p class="daily-question-topic">Aus dem Thema: ${escapeHtml(daily.topic.title)}</p>
        ${buildFrage({ frage: daily.q.question || "", pikto: questionPikto(daily.q), antworten: answers, hilfe: buildTaskHelpBox(taskHint(daily.q, "quiz"), true) })}
      </div>`;
}

function answerDailyQuestion(index) {
  const daily = dailyQuestionCurrent;
  const box = document.getElementById("dailyQuestion");
  if (!daily || !box) return;
  /* Paket T5: „auch möglich“ ist kein Fehler und wird nicht als schwierig gemerkt. */
  const art = antwortArt(daily.q, index);
  const isCorrect = art === "richtig", istAuch = art === "auch", ok = art !== "falsch";
  const merkT = aufgabeMerken(daily.topic.id, daily.q, ok);
  const feedback = isCorrect
    ? (daily.q.feedbackCorrect || RUECKMELDUNG.entscheidungGut)
    : istAuch ? (auchFeedback(daily.q, index) || RUECKMELDUNG.auchAnsage)
    : (falschFeedback(daily.q, index) || RUECKMELDUNG.fehlerOk);
  playSound(ok ? "correct" : "wrong");
  box.innerHTML = `
        <h3>${isCorrect ? "✓ " + RUECKMELDUNG.passtAnsage : istAuch ? "✓ " + RUECKMELDUNG.auchAnsage : RUECKMELDUNG.nochNichtKurz}</h3>
        <p class="daily-question-text">${escapeHtml(feedback)}</p>
        ${korrekturHinweisHtml(merkT)}
        ${ok ? "" : `<button type="button" class="review-chip" style="${getTopicColorStyle(daily.topic.id)}" onclick="renderTopicChoice('${escapeHtml(daily.topic.id)}')"><span aria-hidden="true">${getIconHtml(daily.topic.icon || "start")}</span><span>${escapeHtml(daily.topic.title)} nochmal ansehen</span></button>`}
      `;
  announce(feedback);
  sprichEingefuegteRueckmeldung(box);
}

/* Menü-Erklärung als wiederverwendbarer Baustein (dauerhaft in Hilfe) */
/* Kurze Rückmeldung von der Hilfe-Seite (20.09.2026).
   Ersetzt den Link auf das Prüf-Heft: Die ausführlichen Prüfgruppen-Unterlagen
   sind interne Arbeitsmittel für die Sitzung vor Ort und liegen nicht mehr im
   Repo (§13). Hier bleibt nur die kurze, allgemeine Frage.
   Datenschutz (§14): nichts wird gespeichert und nichts gesendet – die App
   öffnet nur das E-Mail-Programm der Person, abgeschickt wird von Hand.
   Postfach: Funktions-Adresse, kein persönliches Postfach. */
const FEEDBACK_MAIL = "digitale-teilhabe@stift-tilbeck.de";
function feedbackMailen() {
  const felder = [["Was ist gut?", "fb-gut"], ["Was ist schwer?", "fb-schwer"], ["Was sollen wir ändern?", "fb-aendern"]];
  const zeilen = ["Rückmeldung zur Lern-Seite: Sicher und selbstbestimmt im Internet", ""];
  felder.forEach(([frage, id]) => {
    const feld = document.getElementById(id);
    const wert = feld && feld.value.trim();
    zeilen.push(frage, wert || "(nichts geschrieben)", "");
  });
  zeilen.push("Hinweis: ohne Namen. Geprüft wird die Seite, nicht die Person.");
  window.location.href = "mailto:" + FEEDBACK_MAIL
    + "?subject=" + encodeURIComponent("Rückmeldung zur Lern-Seite")
    + "&body=" + encodeURIComponent(zeilen.join("\n"));
}

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

/* Menü-Einweisungs-Zustand (F3): Chip beim ersten Themen-Besuch, Erklärungen dauerhaft in der Hilfe */
const MENU_INTRO_KEY = "menue-gesehen";
function menuIntroSeen() { return pGet(MENU_INTRO_KEY) === "1"; }

/* D12: situationsbezogener Einstieg. Reine Orientierung, keine Bewertung,
   keine neuen Speicher-Schlüssel. Die vorhandenen Kern-Lernwege bleiben. */
const EINSTIEG_OPTIONEN = [
  { id: "nachrichten", text: "Eine Nachricht oder ein Anruf kam mir komisch vor.", topic: "betrug" },
  { id: "passwort", text: "Bei Passwörtern bin ich unsicher.", topic: "datenschutz" },
  { id: "teilen", text: "Ich bin unsicher: Was kann ich im Internet teilen?", topic: "datenschutz" },
  { id: "aufpassen", text: "Jemand sagt: Ich soll im Internet aufpassen." },
  { id: "offen", text: "Ich weiß es noch nicht.", topic: "datenschutz" }
];
const EINSTIEG_RUECKFRAGE = [
  { id: "nachrichten", text: "Bei Nachrichten oder Anrufen" },
  { id: "passwort", text: "Bei Passwörtern" },
  { id: "teilen", text: "Beim Teilen von Bildern oder Daten" },
  { id: "einkaufen", text: "Beim Einkaufen im Internet", topic: "einkaufen" },
  { id: "offen", text: "Ich weiß es nicht." }
];

function buildEinstiegTools() {
  return `<div class="start-tools">${buildReadingToolbar()}
    <button type="button" class="start-help" aria-haspopup="dialog" onclick="lernMehrOeffnen(this)">${getIconHtml("help")}<span>Hilfe</span></button>
  </div>`;
}
function buildEinstiegOptionen(optionen) {
  return `<div class="einstieg-optionen">${optionen.map(o =>
    `<button type="button" class="einstieg-option" onclick="renderEinstieg('${o.id}')"><span>${escapeHtml(o.text)}</span><span aria-hidden="true">→</span></button>`
  ).join("")}</div>`;
}
function renderIntro() {
  stopReading();
  currentTopicId = null;
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Willkommen", "Willkommen", "Start", 0);
  setActiveTab("start");
  setOrientation("Du bist auf der Seite: Start.");
  rememberRoute("start");
  showNav(false, false);
  const resume = buildResumeLessonButton();
  const daily = buildDailyQuestionCard();
  content.innerHTML = `
    ${buildEinstiegTools()}
    <section class="intro-page einstieg-start" data-readable="true">
      <div class="intro-welcome">
        ${roleFigure("winken", "intro-welcome-figure")}
        <div class="intro-welcome-text"><h2>Willkommen!</h2><p>Alex und Tilda begleiten dich.</p></div>
      </div>
      <div class="einstieg-resume">${resume || `<button type="button" class="intro-start-button" onclick="renderEinstiegAuswahl()">${RUHIG_TEXT.starten}</button>`}</div>
      <button type="button" class="intro-quickstart-link" onclick="renderMenu()">${RUHIG_TEXT.themen}</button>
      ${resume ? `<button type="button" class="intro-quickstart-link" onclick="renderEinstiegAuswahl()">Ein anderes Thema finden</button>` : ""}
      ${daily ? `<details class="einstieg-extra"><summary>Deine Frage für heute</summary>${daily}</details>` : ""}
      <details class="einstieg-extra"><summary>Sprache und Einrichtung</summary>
        <p>Du kannst die Sprache jederzeit ändern.</p>
        <button type="button" class="intro-quickstart-link" onclick="openLanguageFromTools()">Sprache: ${escapeHtml(LANGUAGE_LABEL[languageLevel])}</button>
        <button type="button" class="intro-quickstart-link" onclick="introStart()">App einrichten</button>
      </details>
    </section>`;
  stelleMerken(renderIntro);
  focusContent();
  renderLegalFooter();
}

/* Die bisherigen Situationsantworten bleiben auf einer eigenen Folgeseite. */
function renderEinstiegAuswahl() {
  stopReading(); currentTopicId = null;
  setProgressVisible(false); setBottomNavVisible(false);
  setHeader("Dein Einstieg", "", "Start", "", 0);
  setActiveTab("start"); setOrientation("Du wählst, was zu dir passt.");
  rememberRoute("einstieg:auswahl"); showNav(false, false);
  content.innerHTML = `${buildEinstiegTools()}<section class="einstieg-folge" data-readable="true">
    <p>Denk an dein Handy oder das Internet.</p><h2>Was passt zu dir?</h2>
    ${buildEinstiegOptionen(EINSTIEG_OPTIONEN)}
    <button type="button" class="intro-quickstart-link" onclick="renderMenu()">Zeig mir alle Themen</button>
    <button type="button" class="intro-quickstart-link" onclick="renderIntro()">Zurück</button>
  </section>`;
  stelleMerken(renderEinstiegAuswahl); focusContent(); renderLegalFooter();
}

function renderEinstieg(id) {
  if (id === "auswahl") return renderEinstiegAuswahl();
  const option = EINSTIEG_OPTIONEN.find(o => o.id === id) || EINSTIEG_RUECKFRAGE.find(o => o.id === id);
  if (!option) return renderIntro();
  stopReading();
  currentTopicId = null;
  setHeader("Dein Einstieg", "", "Start", "", 0);
  setProgressVisible(false);
  setBottomNavVisible(false);
  setActiveTab("start");
  showNav(false, false);
  rememberRoute("einstieg:" + id);
  setOrientation(id === "aufpassen" ? "Du wählst: Wobei sollst du aufpassen?" : "Du bist auf der Seite: Dein Einstieg.");
  if (id === "aufpassen") {
    content.innerHTML = `${buildEinstiegTools()}<section class="einstieg-folge" data-readable="true">
      <p>Jemand sagt: Ich soll im Internet aufpassen.</p>
      <h2>Wobei sollst du aufpassen?</h2>
      ${buildEinstiegOptionen(EINSTIEG_RUECKFRAGE)}
      <button type="button" class="intro-quickstart-link" onclick="renderIntro()">Zurück</button>
    </section>`;
  } else {
    const topic = getTopicById(option.topic);
    if (!topic) return renderMenu();
    const hinweise = {
      nachrichten: "Im Thema Betrug lernst du: Wie prüfe ich eine Nachricht? Was kann ich tun?",
      passwort: "Im Thema Datenschutz geht es auch um Passwörter. Du lernst, deine Daten zu schützen.",
      teilen: "Im Thema Datenschutz lernst du: Welche Daten möchte ich teilen? Was behalte ich für mich?",
      einkaufen: "Hier lernst du, beim Einkaufen im Internet auf wichtige Dinge zu achten.",
      offen: "Du musst noch kein Thema wissen. Du kannst mit Datenschutz anfangen. Oder alle Themen ansehen."
    };
    content.innerHTML = `${buildEinstiegTools()}<section class="einstieg-folge" data-readable="true">
      <p class="einstieg-gewaehlt">${escapeHtml(option.text)}</p>
      <h2>${escapeHtml(topic.title)}</h2><p>${escapeHtml(hinweise[id])}</p>
      <button type="button" class="intro-start-button" onclick="startTopicMode('${topic.id}', 'short')">Lernen starten: ${escapeHtml(topic.title)}</button>
      <button type="button" class="intro-quickstart-link" onclick="renderIntro()">Andere Situation wählen</button>
      <button type="button" class="intro-quickstart-link" onclick="renderMenu()">Zeig mir alle Themen</button>
    </section>`;
  }
  stelleMerken(() => renderEinstieg(id));
  focusContent();
  renderLegalFooter();
}

/* Abkürzung: sofort lernen, ohne Fragen (COGA: geringe Einstiegs-Last).
   Sinnvolle Standards: Leichte Sprache, ausführlicher Lernweg.
   Alles bleibt später über die Einstellungen änderbar. */
function introQuickStart() {
  setLanguageLevel("leicht");
  pSet(VORWISSEN_KEY, "neu");
  renderMenu();
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
  setOrientation("Du bist wieder da. Hier siehst du deine Einstellungen.");
  showNav(false, false);

  const prof = profiles.find(p => p.id === activeProfileId) || profiles[0];
  const langLabel = LANGUAGE_LABEL[languageLevel] || "Leichte Sprache";

  content.innerHTML = `
    ${buildToolRow()}
    <section class="resume-page" data-readable="true">
      ${/* Bewusst ohne Rollenbild (27.09.2026): Auf dem Handy liegt „Weiter zu
            den Themen" schon unter dem sichtbaren Bereich; eine Figur schob
            den Knopf um weitere 172 px nach unten. */""}
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
/* „Hilfe bei Problemen" steht in der ersten Gruppe (Prüfbericht B18):
   Fast jedes andere Thema endet mit „hole dir Hilfe" oder „frag eine Person,
   der du vertraust". Als letzte Kachel der letzten Gruppe wurde genau das
   zuletzt gelehrt, worauf sich alle anderen Themen stützen. */
const TOPIC_GROUPS = [
  { title: "Wichtig für alle",   hint: "Das hilft dir überall im Internet.", ids: ["datenschutz", "hilfe", "ki", "einkaufen"] },
  { title: "Apps",               hint: "So nutzt du diese Apps sicher.",     ids: ["whatsapp", "facebook", "instagram", "youtube", "snapchat", "tiktok"] },
  { title: "Gefahren und Hilfe", hint: "So erkennst du Tricks. So holst du Hilfe.", ids: ["fakes", "betrug"] }
];

function renderMenu() {
  stopReading();
  currentTopicId = null;
  currentStep = 0;
  currentQuizIndex = 0;
  quizScore = 0;
  quizKorrigiert = 0;
  quizAnsweredCorrect = new Set();

  const ersterBesuch = !menuIntroSeen();
  if (ersterBesuch) {
    pSet(MENU_INTRO_KEY, "1");
  }

  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", "Thema auswählen", "Themenübersicht", "Wähle ein Thema", 0);
  setActiveTab("themen");
  /* Übersicht (06.10.2026): „Wähle ein Thema“ steht schon als Überschrift. */
  setOrientation("Du bist auf der Seite: Themen.");
  rememberRoute("themen");
  showNav(false, false);

  const nextSuggestion = getNextTopicSuggestion();
  const anyTopicDone = countDoneTopics() > 0;
  const cardFor = (topic, isFirstCardOfFirstGroup) => {
    const done = isTopicDone(topic.id);
    const ueberarbeitet = !done && themaUeberarbeitet(topic.id);
    const showFirstBadge = ersterBesuch && isFirstCardOfFirstGroup;
    const showNextBadge = !ersterBesuch && anyTopicDone && nextSuggestion && topic.id === nextSuggestion.id && !done && !ueberarbeitet;
    return `
    <div class="card-read-pair card-read-pair--topic">
      <button type="button" class="topic-card topic-${escapeHtml(topic.id)}${done ? " topic-card--done" : ""}" style="${getTopicColorStyle(topic.id)}" onclick="renderTopicChoice('${escapeHtml(topic.id)}')">
      ${showFirstBadge ? `<span class="topic-start-badge topic-start-badge--first">Fang hier an</span>` : ""}
      ${showNextBadge ? `<span class="topic-start-badge">Dein nächstes Thema</span>` : ""}
      ${ueberarbeitet ? `<span class="topic-start-badge">${escapeHtml(lernwegText("ueberarbeitetKurz"))}</span>` : ""}
      ${done ? `<span class="topic-done-corner" aria-label="Geschafft" title="Geschafft">✓</span>` : ""}
      <span class="topic-icon" aria-hidden="true">${getIconHtml(topic.icon || "start")}</span>
      <span class="topic-title">${escapeHtml(topic.title)}</span>
      <span class="topic-desc">${escapeHtml(topic.desc || "")}</span>
      ${done ? `<span class="topic-done-badge">✓ Geschafft</span>` : ""}
      </button>
      <button type="button" class="card-read-button" data-read-card-text="${escapeHtml(topic.title)}. ${escapeHtml(topic.desc || "")}" aria-label="Thema ${escapeHtml(topic.title)} vorlesen">
        ${pictoHtml("vorlesen", "rb-ico")}
      </button>
    </div>
  `;};

  /* Gruppen aufbauen; Themen ohne Gruppe landen sicherheitshalber am Ende */
  const grouped = new Set(TOPIC_GROUPS.flatMap(g => g.ids));
  const rest = topics.filter(t => !grouped.has(t.id));
  const groupSections = TOPIC_GROUPS.map((g, gIdx) => {
    const groupTopics = g.ids.map(id => topics.find(t => t.id === id)).filter(Boolean);
    if (!groupTopics.length) return "";
    return `
      <section class="topic-group" aria-label="${escapeHtml(g.title)}">
        <h3 class="topic-grid-title">${escapeHtml(g.title)}</h3>
        <p class="topic-grid-hint">${escapeHtml(g.hint)}</p>
        <div class="topic-grid">${groupTopics.map((t, tIdx) => cardFor(t, gIdx === 0 && tIdx === 0)).join("")}</div>
      </section>`;
  }).join("") + (rest.length ? `
      <section class="topic-group" aria-label="Weitere Themen">
        <h3 class="topic-grid-title">Weitere Themen</h3>
        <div class="topic-grid">${rest.map(t => cardFor(t, false)).join("")}</div>
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
    /* Befund 4 (21.09.2026): Hier stand „… und jede Seite wird dir
       vorgelesen." Das stimmte nicht: chooseLearnMode() vergrössert nur
       die Schrift und sagt selbst an, dass automatisches Vorlesen in den
       Einstellungen angeschaltet wird. Automatisches Vorlesen wird auch
       jetzt NICHT eingeschaltet, nur um den alten Satz zu retten – die
       Person behält die Kontrolle (§3 UDL: Angebot statt Zwang).
       Der Satz sagt stattdessen den echten Zustand und richtet sich nach
       `autoRead`. */
    companionNote = `<p class="learn-mode-status" role="status"><span aria-hidden="true">${pictoHtml("vorlesen", "rb-ico")} </span> ${autoRead ? FUEHRUNG_TEXT.appHilfeLaut : FUEHRUNG_TEXT.appHilfeStill}</p>`;
  }

  /* Beim ersten Besuch die Lernweg-Frage einmal groß zeigen; danach steckt
     der Lernweg im Hauptmenü unter „Einstellungen". */
  /* Die Lernweg-Frage steht NICHT mehr automatisch über der Themenliste
     (Prüfbericht B19): sie schob die erste Themenkachel auf y=1033 und stand
     ein zweites Mal in den Einstellungen. Sie erscheint jetzt nur noch, wenn
     die Person sie ausdrücklich aufklappt (openLearnModeChooser). */
  const showFullChooser = learnModeChooserOpen;
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
      ${buildToolRow()}
      ${learnModeSection}
      ${buildResumeLessonChip()}
      <h2 class="topic-grid-title">Wähle ein Thema</h2>
      <p class="topic-grid-hint">Tippe auf ein Thema. Dann geht es los.</p>
      ${/* Übersicht (06.10.2026): ohne großes Bild – die Themen selbst sind
            der Inhalt und stehen so ohne Scrollen oben. Die Figur bleibt im
            Bestand (assets/figures). */""}
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
    : "";

  /* Geschaffte Themen als Liste (Erfolg sichtbar machen) */
  const doneTopics = topics.filter(t => isTopicDone(t.id));
  const doneSection = doneTopics.length > 0
    ? `<div class="review-chips">
         ${doneTopics.map(t => `
           <button type="button" class="review-chip" style="${getTopicColorStyle(t.id)}" onclick="renderTopicChoice('${escapeHtml(t.id)}')">
             <span aria-hidden="true">✓</span>
             <span>${escapeHtml(t.title)}</span>
           </button>`).join("")}
       </div>
       <p class="topic-grid-hint" style="margin-top:12px;">
         <button type="button" class="setting-big-button" onclick="printSuccessBook()">${pictoHtml("drucken")} Mein Erfolgs-Heft drucken</button>
       </p>`
    : `<p class="topic-grid-hint">Noch nichts. Das ist in Ordnung. Fang mit einem Thema an.</p>`;

  /* Wiederholungs-Erinnerung (verteiltes Lernen) */
  const reviewTopics = getTopicsDueForReview();
  const reviewSection = reviewTopics.length > 0
    ? `<div class="review-section" role="region" aria-label="Wiederholung fällig">
         <div class="review-header">
           <span class="review-icon" aria-hidden="true">${pictoHtml("wiederholen")}</span>
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

  /* Freiwillige Lernstand-Speicherung (KDG: nur lokal, ohne Namen).
     Der Wiedereinstieg steht bewusst als EIGENE Zeile daneben: Er wird auch
     ohne Lernstand gespeichert, und eine Zusage darf nur das versprechen,
     was sie hält (T05, 21.09.2026). */
  const resumeDelete = hasResumeData() ? `
      <div class="progress-consent">
        <p class="progress-consent-title">Dein Wiedereinstieg</p>
        <p class="progress-consent-note">Die App merkt sich, wo du stehen geblieben bist, und ob du ein Thema kurz oder ausführlich liest. Das gehört nicht zum Lernstand. Auch das bleibt nur auf diesem Gerät.</p>
        <button type="button" class="utility-button" onclick="clearResumeData()">Wiedereinstieg löschen</button>
      </div>` : "";

  let progressConsent = "";
  if (isProgressEnabled()) {
    progressConsent = `
      <div class="progress-consent">
        <p class="progress-consent-title">Du hast ${doneCount} von ${topics.length} Themen geschafft.</p>
        <p class="progress-consent-note">Der Lernstand wird nur auf diesem Gerät gespeichert. Ohne Namen.</p>
        ${pauseEinwilligungHtml()}
        <button type="button" class="utility-button" onclick="toggleProgressSaving()">Lernstand löschen und nicht mehr merken</button>
      </div>${resumeDelete}`;
  } else if (doneCount > 0) {
    progressConsent = `
      <div class="progress-consent">
        <p class="progress-consent-title">Soll ich mir merken, welche Themen du geschafft hast?</p>
        <p class="progress-consent-note">Das wird nur auf diesem Gerät gespeichert. Ohne Namen. Du kannst es jederzeit löschen.</p>
        <p class="progress-consent-note">Auch Antworten und Treffer einer unterbrochenen Runde werden gemerkt.</p>
        <button type="button" class="utility-button" onclick="toggleProgressSaving()">Ja, Lernstand merken</button>
      </div>${resumeDelete}`;
  } else {
    progressConsent = `
      <div class="progress-consent">
        <p class="progress-consent-note">Die Seite speichert deinen Lernstand nicht von allein. Du entscheidest das. Nach deinem ersten Thema fragen wir dich.</p>
      </div>${resumeDelete}`;
  }

  const readCardSvg = READ_CARD_SVG;

  /* Drei benannte Blöcke statt eines Regals (Prüfbericht B6): Der Name der
     Seite verspricht einen Weg – also muss sie zuerst sagen, wo die Person
     gerade steht, dann was geschafft ist, dann was noch aussteht. Die
     Übungsangebote sind danach klar nachgeordnet. */
  const resumeChip = buildResumeLessonChip();
  const vorschlag = getNextTopicSuggestion();
  const hierBistDu = resumeChip
    ? `<section class="path-block" aria-label="Da bist du gerade">
         <h3 class="topic-grid-title">Da bist du gerade</h3>
         ${resumeChip}
       </section>`
    : (vorschlag
        ? `<section class="path-block" aria-label="Da bist du gerade">
             <h3 class="topic-grid-title">Da bist du gerade</h3>
             <p class="topic-grid-hint">${doneCount > 0 ? "Du hast gerade kein Thema offen." : "Du hast noch nicht angefangen."}</p>
             <button type="button" class="path-next-button" style="${getTopicColorStyle(vorschlag.id)}" onclick="renderTopicChoice('${escapeHtml(vorschlag.id)}')">
               <span class="path-next-icon" aria-hidden="true">${getIconHtml(vorschlag.icon || "start")}</span>
               <span class="path-next-text">
                 <span class="path-next-label">${doneCount > 0 ? "Dein nächstes Thema" : "Starte hier"}</span>
                 <span class="path-next-title">${escapeHtml(vorschlag.title)}</span>
               </span>
             </button>
           </section>`
        : "");

  /* Deine Karte: der Sammelstand. Steht bewusst oben beim Fortschritt und
     nicht als weitere Kachel unter "Zusätzlich üben" – dort stehen schon
     fünf gleichrangige Angebote, und keines sagt, wann es dran ist. */
  const kz = (typeof regelZaehlung === "function") ? regelZaehlung() : null;
  const karteBlock = !kz ? "" : `
    <button type="button" class="karte-block" onclick="renderRegelKarte()">
      <span class="karte-block-kopf">
        <span class="karte-block-titel">Deine Karte</span>
        <span class="karte-block-zahl">${kz.gefunden} <span>von ${kz.gesamt}</span></span>
      </span>
      <span class="karte-block-balken" aria-hidden="true">
        <span class="karte-block-fuell" style="width:${Math.round((kz.gefunden / kz.gesamt) * 100)}%"></span>
      </span>
      <span class="karte-block-sub">${
        kz.gefunden === 0
          ? "Beim Üben sammelst du deine eigenen Regeln."
          : (kz.gefunden < kz.gesamt
              ? "Dir fehlen noch " + (kz.gesamt - kz.gefunden) + " " + (kz.gesamt - kz.gefunden === 1 ? "Regel" : "Regeln") + ". " + (kz.sitzt > 0 ? kz.sitzt + " davon hast du in 2 Themen erkannt." : "")
              : (kz.sitzt < kz.gesamt
                  ? "Alle Regeln gefunden. " + kz.sitzt + " davon hast du schon in 2 Themen erkannt."
                  : "Alle Regeln hast du in 2 Themen erkannt. Deine Karte ist voll."))
      }</span>
    </button>`;

  /* Was noch offen ist – in der Reihenfolge, in der die Themenseite es zeigt. */
  const offeneTopics = getTopicsInDisplayOrder().filter(t => !isTopicDone(t.id));
  const offenSection = offeneTopics.length > 0
    ? `<details class="path-block path-details">
         <summary class="path-details-summary">${FUEHRUNG_TEXT.offenAuf} <span class="path-details-zahl">${offeneTopics.length === 1 ? "1 Thema" : offeneTopics.length + " Themen"}</span></summary>
         <p class="topic-grid-hint">${offeneTopics.length === 1 ? "Noch 1 Thema. Fast geschafft." : "Noch " + offeneTopics.length + " Themen. Du musst nicht alle machen."}</p>
         <div class="review-chips">
           ${offeneTopics.map(t => `
             <button type="button" class="review-chip review-chip--open" style="${getTopicColorStyle(t.id)}" onclick="renderTopicChoice('${escapeHtml(t.id)}')">
               <span aria-hidden="true">${getIconHtml(t.icon || "start")}</span>
               <span>${escapeHtml(t.title)}</span>
             </button>`).join("")}
         </div>
       </details>`
    : "";

  content.innerHTML = `
    <section class="start-page">
      ${buildToolRow()}
      <h2 class="topic-grid-title">Mein Lernweg</h2>
      ${roleFigure("lernweg")}
      ${hierBistDu}
      ${buildGrandFinish()}

      ${/* Befund 3 (21.09.2026): Der aktuelle Schritt steht oben und allein.
            Fortschritts-Balken und „Deine Karte" bleiben offen sichtbar –
            beide sind eine Zeile und zeigen auf einen Blick den Stand
            (Bandura: sichtbare Erfolgserlebnisse, §3). Die drei LANGEN
            Listen dahinter – Bearbeitetes, offene Themen, zusätzliche
            Übungen – sind zugeklappt, damit die nächste Handlung vor
            ihnen erreichbar bleibt.
            Die Zahl steht in der Zusammenfassungs-Zeile und ist damit
            auch im zugeklappten Zustand les- und hörbar. */""}
      ${heroProgress}
      ${karteBlock}

      <details class="path-block path-details">
        <summary class="path-details-summary">${FUEHRUNG_TEXT.geschafftAuf} <span class="path-details-zahl">${doneCount} von ${topics.length}</span></summary>
        ${reviewSection}
        ${doneSection}
      </details>

      ${offenSection}

      <details class="practice-section path-block path-details">
        <summary class="path-details-summary">${FUEHRUNG_TEXT.uebenAuf}</summary>
        <p class="topic-grid-hint">Hier kannst du üben. Ganz ohne Druck.</p>
        <div class="action-grid practice-grid">
          <div class="card-read-pair card-read-pair--action">
            <button type="button" class="action-card" onclick="startBigQuiz()">
            <span class="action-icon" aria-hidden="true">${getIconHtml("quiz")}</span>
            <span class="action-text">
              <span class="action-title">Das große Quiz</span>
              <span class="action-desc">Fragen aus allen Themen.</span>
            </span>
          </button>
            <button type="button" class="card-read-button card-read-button--path" data-read-card-text="Das große Quiz. Fragen aus allen Themen." aria-label="Das große Quiz vorlesen">${readCardSvg} Vorlesen</button>
          </div>
          <div class="card-read-pair card-read-pair--action">
            <button type="button" class="action-card" onclick="startRepeatQuiz()">
            <span class="action-icon" aria-hidden="true">${getIconHtml("exercise")}</span>
            <span class="action-text">
              <span class="action-title">Wiederholen</span>
              <span class="action-desc">Fragen aus deinen Themen.</span>
            </span>
          </button>
            <button type="button" class="card-read-button card-read-button--path" data-read-card-text="Wiederholen. Fragen aus deinen Themen." aria-label="Wiederholen vorlesen">${readCardSvg} Vorlesen</button>
          </div>
          <div class="card-read-pair card-read-pair--action">
            <button type="button" class="action-card" onclick="renderScenarioChooser()">
            <span class="action-icon" aria-hidden="true">${getIconHtml("start")}</span>
            <span class="action-text">
              <span class="action-title">Übungs-Handy</span>
              <span class="action-desc">Üben wie auf dem Handy.</span>
            </span>
          </button>
            <button type="button" class="card-read-button card-read-button--path" data-read-card-text="Übungs-Handy. Üben wie auf dem Handy." aria-label="Übungs-Handy vorlesen">${readCardSvg} Vorlesen</button>
          </div>
          <div class="card-read-pair card-read-pair--action">
            <button type="button" class="action-card" onclick="startTrainingInbox()">
            <span class="action-icon" aria-hidden="true">${getIconHtml("message")}</span>
            <span class="action-text">
              <span class="action-title">Trainings-Postfach</span>
              <span class="action-desc">Trick oder echt? Gefahrlos üben.</span>
            </span>
          </button>
            <button type="button" class="card-read-button card-read-button--path" data-read-card-text="Trainings-Postfach. Trick oder echt? Gefahrlos üben." aria-label="Trainings-Postfach vorlesen">${readCardSvg} Vorlesen</button>
          </div>
          <div class="card-read-pair card-read-pair--action">
            <button type="button" class="action-card" onclick="renderAllMemoryCards()">
            <span class="action-icon" aria-hidden="true">${getIconHtml("remember")}</span>
            <span class="action-text">
              <span class="action-title">Alle Merk-Karten</span>
              <span class="action-desc">Alle Regeln ansehen.</span>
            </span>
          </button>
            <button type="button" class="card-read-button card-read-button--path" data-read-card-text="Alle Merk-Karten. Alle Regeln ansehen." aria-label="Alle Merk-Karten vorlesen">${readCardSvg} Vorlesen</button>
          </div>
        </div>
      </details>

      ${/* Der Lernstand-Zustand bleibt offen sichtbar (§14): Wer wissen
            will, ob etwas gespeichert wird, soll es sehen, ohne etwas
            aufklappen zu müssen. */""}
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
      <button type="button" class="setting-big-button" onclick="printGrandCertificate()">${pictoHtml("drucken")} Deine große Urkunde drucken</button>
    </div>`;
}

/* ============================================================
   Seite „Hilfe": jederzeit über das Hauptmenü erreichbar (COGA)
   ============================================================ */

/* Testphase-Hinweis → Formular „Deine Meinung ist wichtig“ auf der
   Hilfe-Seite (27.09.2026). Fokus auf den Bereich, damit Tastatur und
   Vorlesen dort weitermachen. */
function zurMeinung() {
  renderHelpPage();
  const ziel = document.getElementById("meinung");
  if (!ziel) return;
  /* Übersicht (06.10.2026): Die Rückmeldung ist zugeklappt; wer über
     „Sag uns deine Meinung“ kommt, findet sie gleich offen. */
  if (ziel.tagName === "DETAILS") ziel.open = true;
  const kopf = ziel.querySelector("summary") || ziel;
  ziel.scrollIntoView({ block: "start" });
  kopf.focus({ preventScroll: true });
}

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
      ${buildToolRow()}
      <h2 class="topic-grid-title">Hilfe</h2>
      <p class="topic-grid-hint">Du musst das nicht allein schaffen.</p>
      ${/* Übersicht (06.10.2026): Der Notfall steht auch hier, immer mit
            demselben Satz wie im Thema „Hilfe bei Problemen“ (§2, H1). */""}
      <p class="hilfe-notfall">Jemand ist in Gefahr? Dann ruf sofort 110 oder 112.</p>
      ${buildResumeLessonChip()}
      ${roleFigure("hilfe")}

      <div class="help-page-actions">
        <button type="button" class="setting-big-button" onclick="showSymbolHelp()">Piktogramme erklären</button>
        <button type="button" class="setting-big-button" onclick="showPauseOverlay()">Pause machen</button>
      </div>

      <div class="support-help-grid">
        <div class="support-help-card">
          <h3>Wenn du die Seite nicht bedienen kannst ${sectionReadChip("Wenn du die Seite nicht bedienen kannst")}</h3>
          <ul>
            <li>Zeige auf die Stelle.</li>
            <li>Sage: Ich brauche Hilfe bei der Bedienung.</li>
            <li>Bitte um langsames Erklären.</li>
          </ul>
        </div>
        <div class="support-help-card">
          <h3>Wenn du etwas nicht verstehst ${sectionReadChip("Wenn du etwas nicht verstehst")}</h3>
          <ul>
            <li>Lies den Text noch einmal.</li>
            <li>Nutze den Knopf: Vorlesen.</li>
            <li>Bitte eine Person um Erklärung.</li>
            <li>Sage: Bitte erkläre mir das einfacher.</li>
          </ul>
        </div>
        <div class="support-help-card">
          <h3>Wen kannst du fragen? ${sectionReadChip("Wen kannst du fragen?")}</h3>
          <ul>
            <li>Eine Person, der du vertraust.</li>
            <li>Eine Person, die dich unterstützt.</li>
            <li>Eine Digital-Begleiterin oder einen Digital-Begleiter.</li>
            <li>Jemanden im Wohnbereich oder Dienst.</li>
          </ul>
        </div>
        <div class="support-help-card">
          <h3>Wenn dir im Internet etwas Schlechtes passiert ${sectionReadChip("Wenn dir im Internet etwas Schlechtes passiert")}</h3>
          <ul>
            <li>Das ist nicht deine Schuld.</li>
            <li>Sprich mit einer Person, der du vertraust.</li>
            <li>Es gibt das Thema: Hilfe bei Problemen. Dort steht mehr.</li>
          </ul>
        </div>
      </div>

      ${/* Übersicht (06.10.2026): Der Satz „Du musst das nicht allein
            schaffen.“ steht nur noch oben. Die kurze Rückmeldung bleibt auf
            der Hilfe-Seite (§13), ist aber zugeklappt: Wer Hilfe sucht,
            sieht zuerst die Hilfe. */""}
      <details class="later-details meinung-details" id="meinung">
        <summary class="later-title">Deine Meinung ist wichtig</summary>
        <div class="intro-offer meinung-inhalt">
        <p>${sectionReadChip("Deine Meinung ist wichtig")}</p>
        <p>Du kannst diese Lern-Seite prüfen.</p>
        <p>Sag uns: Was ist gut? Was ist schwer?</p>
        <p>Es gibt kein richtig und kein falsch.</p>
        <div class="feedback-felder">
          <label for="fb-gut">Was ist gut?</label>
          <textarea id="fb-gut" rows="2"></textarea>
          <label for="fb-schwer">Was ist schwer?</label>
          <textarea id="fb-schwer" rows="2"></textarea>
          <label for="fb-aendern">Was sollen wir ändern?</label>
          <textarea id="fb-aendern" rows="2"></textarea>
        </div>
        <p class="feedback-hinweis">Du musst keinen Namen schreiben.<br>
        Die App speichert deine Antwort nicht.<br>
        Du tippst auf den Knopf. Dann öffnet sich dein E-Mail-Programm. Du schickst die E-Mail selbst ab.</p>
        <button type="button" class="nav-button primary feedback-senden" onclick="feedbackMailen()">Als E-Mail schicken</button>
        </div>
      </details>

      <div class="intro-offer" role="region" aria-label="Das Menü">
        <h3>Das Menü ${sectionReadChip("Das Menü")}</h3>
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

/* Geteiltes Gerät nachträglich an- oder abschalten. Bisher ging das nur
   beim allerersten Einrichten – wer damals "nur ich" gewählt hatte, kam
   nicht mehr an die Personen-Auswahl heran. */
function setSharedFromSettings(shared) {
  setDeviceShared(shared);
  announce(shared
    ? "Mehrere Personen teilen sich dieses Gerät. Beim Start fragt die App, wer lernt."
    : "Nur du benutzt dieses Gerät.");
  renderSettingsPage();
}

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
        <button type="button" class="setting-big-button" onclick="renderProfileManage('${escapeHtml(activeProfile.id)}')">Zeichen und Code ändern</button>
      </div>
    </section>
    <section class="settings-page-section" aria-label="Dieses Gerät">
      <h3>Dieses Gerät</h3>
      <p class="settings-explain">Benutzt du dieses Gerät allein? Oder benutzen es mehrere Personen? Bei mehreren Personen fragt die App beim Start immer: Wer lernt gerade?</p>
      <div class="settings-toggle-row" role="group" aria-label="Wer benutzt dieses Gerät">
        <button type="button" class="setting-big-button" aria-pressed="${deviceShared ? "false" : "true"}" onclick="setSharedFromSettings(false)">Nur ich</button>
        <button type="button" class="setting-big-button" aria-pressed="${deviceShared ? "true" : "false"}" onclick="setSharedFromSettings(true)">Mehrere Personen</button>
      </div>
    </section>` : "";

  const learnModeButtons = Object.keys(LEARN_MODES).map(key => {
    const m = LEARN_MODES[key];
    const active = learnMode === key;
    return `<button type="button" class="setting-big-button" aria-pressed="${active ? "true" : "false"}" onclick="chooseLearnMode('${key}')">${escapeHtml(m.title)}</button>`;
  }).join("");

  content.innerHTML = `
    <section class="start-page" data-readable="true">
      ${buildToolRow()}
      <h2 class="topic-grid-title">Einstellungen</h2>
      ${roleFigure("einstellungen")}
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
        <p class="settings-explain">Soll jede Seite automatisch vorgelesen werden?</p>
        <div class="settings-toggle-row" role="group" aria-label="Automatisch vorlesen">
          <button type="button" class="setting-big-button" aria-pressed="${autoRead ? "true" : "false"}" onclick="setAutoRead(true); renderSettingsPage();">Ja, immer vorlesen</button>
          <button type="button" class="setting-big-button" aria-pressed="${autoRead ? "false" : "true"}" onclick="setAutoRead(false); renderSettingsPage();">Nein, ich tippe selbst</button>
        </div>
        <p class="settings-explain" style="margin-top:14px;">Wie schnell soll die Stimme lesen?</p>
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

/* Kompetenz-Einordnung (DigComp 2.2 + ICF) als Block.
   Reine Fachkräfte-Information: zeigt, was die Person danach im ALLTAG
   kann (Aktivität und Teilhabe), nicht nur, was sie weiß. */
function buildCompetenceBlock(c) {
  const k = c && c.kompetenzen;
  if (!k) return "";
  const liste = (items, mitStufe) => {
    if (!Array.isArray(items) || !items.length) return "";
    return `<ul class="komp-liste">` + items.map(e =>
      `<li><span class="komp-code">${escapeHtml(e.code)}</span>` +
      `<span class="komp-titel">${escapeHtml(e.titel)}</span>` +
      (mitStufe && e.stufe ? `<span class="komp-stufe">${escapeHtml(e.stufe)}</span>` : "") +
      `<span class="komp-bezug">${escapeHtml(e.bezug)}</span></li>`).join("") + `</ul>`;
  };
  const dc = liste(k.digcomp, true);
  const icf = liste(k.icf, false);
  if (!dc && !icf) return "";
  return `<div class="companion-section companion-kompetenz">
      <h4>Kompetenz-Einordnung</h4>
      ${dc ? `<h5>DigComp 2.2 – Europäischer Referenzrahmen für digitale Kompetenzen</h5>${dc}` : ""}
      ${icf ? `<h5>ICF – Aktivität, Teilhabe und Umweltfaktoren</h5>${icf}` : ""}
      <p class="komp-fuss">Die Stufen 1–2 stehen für grundlegende Kompetenz: mit Anleitung bis selbstständig bei einfachen Aufgaben. Die ICF-Bezüge benennen den Alltags-Nutzen, nicht ein Defizit.</p>
    </div>`;
}

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
  /* Kompetenz-Einordnung fürs Handout (steht direkt hinter den Lernzielen). */
  const k = c.kompetenzen;
  const kompListe = (items, mitStufe) => (Array.isArray(items) && items.length)
    ? `<ul>${items.map(e => `<li><b>${escapeHtml(e.code)}</b> ${escapeHtml(e.titel)}` +
        (mitStufe && e.stufe ? ` <span class="stufe">${escapeHtml(e.stufe)}</span>` : "") +
        `<br>${escapeHtml(e.bezug)}</li>`).join("")}</ul>`
    : "";
  const kompPrint = k
    ? `<h2>Kompetenz-Einordnung</h2>` +
      (kompListe(k.digcomp, true) ? `<h3>DigComp 2.2 – Europäischer Referenzrahmen für digitale Kompetenzen</h3>${kompListe(k.digcomp, true)}` : "") +
      (kompListe(k.icf, false) ? `<h3>ICF – Aktivität, Teilhabe und Umweltfaktoren</h3>${kompListe(k.icf, false)}` : "") +
      `<p class="meta">Stufe 1–2 = grundlegende Kompetenz: mit Anleitung bis selbstständig bei einfachen Aufgaben. Die ICF-Bezüge benennen den Alltags-Nutzen, kein Defizit.</p>`
    : "";
  const body = sections
    .filter(([, it]) => Array.isArray(it) && it.length)
    .map(([t, it]) => {
      const block = `<h2>${escapeHtml(t)}</h2><ul>${it.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>`;
      return t === "Lernziele" ? block + kompPrint : block;
    })
    .join("");
  const html = `<!doctype html><html lang="de"><head><meta charset="utf-8">` +
    `<title>Begleit-Material – ${escapeHtml(topic.title)}</title>` +
    `<style>body{font-family:Arial,Helvetica,sans-serif;max-width:720px;margin:24px auto;padding:0 16px;color:#142231;line-height:1.55;}` +
    `h1{font-size:20px;margin:0 0 4px;}h2{font-size:15px;margin:18px 0 4px;border-bottom:1px solid #ccd;padding-bottom:4px;}` +
    `h3{font-size:13px;margin:12px 0 2px;color:#334;}` +
    `.stufe{color:#555;font-size:11px;white-space:nowrap;}b{font-family:"Courier New",monospace;}` +
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
  /* Die Begleit-Ebene ist nach §7 KEINE Sprach-Stufe für Lernende, sondern
     eine eigene Ebene für Fachkräfte. Sie war trotzdem an die Leichte Sprache
     gebunden und fehlte in Einfacher Sprache und Alltagssprache vollständig
     (Prüfbericht B21) – eine Fachkraft, die jemanden auf B1-Niveau begleitet,
     sah weder Lernziele noch Methodik noch Rechtsbezüge. Das Panel ist
     zugeklappt und trägt eine eindeutige Überschrift; es stört den
     SOLO-Gebrauch also auch in den anderen Stufen nicht. */
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
        ${buildCompetenceBlock(c)}
        ${blocks}
        <div class="companion-qr">
          <img src="assets/qr/${escapeHtml(topic.id)}.svg" alt="QR-Code für das Thema ${escapeHtml(topic.title)}" width="132" height="132" loading="lazy">
          <p>Zum Weiterlernen am eigenen Handy: QR-Code scannen – das Thema öffnet sich direkt.</p>
        </div>
        <button type="button" class="companion-print" onclick="printCompanion('${escapeHtml(topic.id)}')">${pictoHtml("drucken")} Drucken / als PDF speichern</button>
        <button type="button" class="companion-print" onclick="printQrCards()">${pictoHtml("drucken")} QR-Karten für alle Themen drucken</button>
        ${buildPraxisLinks(topic)}
      </div>
    </details>`;
}

/* Workshop-Material erreichbar machen (Prüfbericht B22).
   Die sieben Klick-Anleitungen in praxis/ und die Workshop-Dateien in
   material/ lagen im veröffentlichten Stand, waren aber aus der App über
   keinen einzigen Link zu erreichen – weder für Lernende noch für
   Fachkräfte. Sie hängen jetzt an der Begleit-Ebene, wo sie hingehören. */
const PRAXIS_SEITEN = ["whatsapp", "facebook", "instagram", "youtube", "snapchat", "tiktok"];

function buildPraxisLinks(topic) {
  const eigene = topic && PRAXIS_SEITEN.includes(topic.id)
    ? `<p class="companion-intro"><a href="praxis/${escapeHtml(topic.id)}.html">Klick-Anleitung ${escapeHtml(topic.title)}</a> – Schritt für Schritt durch die Einstellungen: Konto privat stellen, blockieren, melden.</p>`
    : "";
  return eigene
    + `<p class="companion-intro"><a href="praxis/index.html">Alle Klick-Anleitungen und Workshop-Material</a> – Anleitungen für 6 Apps, dazu Folien, Methodik-Blätter und Quiz-Vorlagen zum Herunterladen.</p>`
    + `<p class="companion-intro"><a href="fortschritt.html">Abdeckung der drei Sprachstufen</a> – zeigt für jedes Thema, welche Stufen schon vorliegen. Rechnet lokal, ohne fremden Server.</p>`;
}

/* Mengen-Wahl (Kurz/Mehr) je Thema – nur für die Sitzung gemerkt.
   Standard kommt aus der Vorwissens-Frage: erfahren -> Kurz, sonst Mehr. */
/* Mengen-Wahl je Thema (Prüfbericht B9).
   Vorher hielt eine einzige Variable genau EIN Thema fest: Wer bei
   Datenschutz auf „Mehr" stellte und danach WhatsApp öffnete, stand wieder
   bei „Kurz" – und musste die Wahl bei jedem der 12 Themen neu treffen.
   Jetzt merkt sich die App die Wahl je Thema und trägt die zuletzt
   getroffene Wahl auf noch unbesuchte Themen weiter. Die Vorwissens-Antwort
   ist damit nur noch der Vorschlag für das allererste Thema.
   Gespeichert wird eine Zuordnung {themaId: "short"|"full"} im localStorage
   des Profils – eine lokale Einstellung wie Schriftgröße (§14, KDG). */
const TOPIC_AMOUNT_KEY = "mengen-wahl";
const LAST_AMOUNT_KEY  = "mengen-zuletzt";
let topicAmounts = {};
let lastAmountChoice = null;

function loadTopicAmounts() {
  topicAmounts = {};
  lastAmountChoice = null;
  try {
    const raw = pGet(TOPIC_AMOUNT_KEY);
    const daten = raw ? JSON.parse(raw) : null;
    if (daten && typeof daten === "object") {
      Object.keys(daten).forEach(id => {
        if (getTopicById(id) && (daten[id] === "short" || daten[id] === "full")) {
          topicAmounts[id] = daten[id];
        }
      });
    }
  } catch (e) { /* nichts tun */ }
  const zuletzt = pGet(LAST_AMOUNT_KEY);
  if (zuletzt === "short" || zuletzt === "full") lastAmountChoice = zuletzt;
}

function saveTopicAmounts() {
  try { pSet(TOPIC_AMOUNT_KEY, JSON.stringify(topicAmounts)); } catch (e) { /* nichts tun */ }
  if (lastAmountChoice) pSet(LAST_AMOUNT_KEY, lastAmountChoice);
}

function clearTopicAmounts() {
  topicAmounts = {};
  lastAmountChoice = null;
  pRemove(TOPIC_AMOUNT_KEY);
  pRemove(LAST_AMOUNT_KEY);
}

/* Hat die Person für DIESES Thema schon selbst gewählt? Steuert den
   Hinweistext unter der Wahl – „vorausgewählt" wäre dann eine Unwahrheit. */
function hasOwnTopicAmount(topicId) {
  return Boolean(topicAmounts[topicId]);
}

function getTopicAmount(topicId) {
  if (topicAmounts[topicId]) return topicAmounts[topicId];
  if (lastAmountChoice) return lastAmountChoice;
  return pGet(VORWISSEN_KEY) === "erfahren" ? "short" : "full";
}

function setTopicAmount(topicId, amount) {
  const wahl = amount === "short" ? "short" : "full";
  if (getTopicById(topicId)) topicAmounts[topicId] = wahl;
  lastAmountChoice = wahl;
  saveTopicAmounts();
  /* Hör-Modus: Nach einer kleinen Wahl nicht die ganze Seite noch einmal
     vorlesen (vorher 10 Ansagen), sondern nur bestätigen, was gewählt ist
     und was jetzt kommt (Prüfgruppen-Test B-c, 26.09.2026). */
  stillerNeuaufbau = true;
  renderTopicChoice(topicId);
  /* Tastatur (E9, 27.09.2026): Fokus bleibt auf der gewählten Menge,
     statt an den Seitenanfang zu springen. */
  const aktiv = content.querySelector(".amount-choice.is-active");
  if (aktiv) aktiv.focus();
  if (autoRead) readShortText((wahl === "short" ? "Kurz" : "Mehr") + " ist ausgewählt. Tippe auf: Lernen starten.");
}

/* Auch der Weg über „Mehr lernen" oder „Nochmal von vorne" ist eine Wahl –
   sonst stünde beim nächsten Öffnen des Themas wieder die alte Menge da. */
function rememberTopicAmount(topicId, mode) {
  const wahl = mode === "short" ? "short" : "full";
  if (!getTopicById(topicId)) return;
  if (topicAmounts[topicId] === wahl && lastAmountChoice === wahl) return;
  topicAmounts[topicId] = wahl;
  lastAmountChoice = wahl;
  saveTopicAmounts();
}

function renderTopicChoice(topicId) {
  stopReading();
  const topic = getTopicById(topicId);
  if (!topic) return renderMenu();

  currentTopicId = topic.id;
  currentStep = 0;
  currentQuizIndex = 0;
  quizScore = 0;
  quizKorrigiert = 0;
  quizAnsweredCorrect = new Set();

  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Sicher und selbstbestimmt im Internet", topic.title, "Thema auswählen", "Wie möchtest du lernen?", 0);
  setActiveTab("themen");
  setOrientation(`Du bist beim Thema: ${topic.title}.`);
  rememberRoute(topicRoute(topic.id));
  showNav(false, false);

  /* Reihenfolge dieser Seite folgt Prüfbericht B1: erst die Hauptaktion, dann
     alles Weitere. Vorher lagen Zurück-Knopf, Vorlese-Leiste und eine 384 px
     hohe Karte davor – „Lernen starten" saß dadurch bei y=793 und damit unter
     der festen Menüleiste (y=764), war also beim Öffnen unsichtbar. Die Karte
     ist jetzt eine Zeile; der Zurück-Knopf steht am Seitenende (die Menüleiste
     leistet dasselbe dauerhaft). */
  content.innerHTML = `
    <section class="topic-choice" style="${getTopicColorStyle(topic.id)}" data-readable="true">
      ${buildToolRow()}
      ${/* Nur Bild und Titel. Das Symbol stand hier ein zweites Mal neben dem
            Bild, und die Beschreibung ein drittes Mal: sie steht schon auf der
            Kachel, die gerade angetippt wurde, und die Orientierungszeile
            darüber nennt das Thema beim Namen. Die drei Wiederholungen kosteten
            zusammen 60 px und schoben die Hauptaktion nach unten. */""}
      <div class="topic-intro-line">
        <span class="topic-intro-symbol" aria-hidden="true">${getIconHtml(topic.icon || "start")}</span>
        <h2>${escapeHtml(topic.title)}</h2>
      </div>

      ${(() => {
        /* Adaptive Hauptaktion (Program Control mit Opt-out):
           1) Offene Lektion hier -> Weiter lernen
           2) Thema geschafft     -> Quiz wiederholen (Retrieval Practice)
           3) Neu                 -> Lernen starten + Mengen-Wahl */
        const done = isTopicDone(topic.id);
        const resume = (lastLessonContext && lastLessonContext.topicId === topic.id) ? lastLessonContext : null;
        const hasQuiz = getQuizQuestions(topic).length > 0;
        const laterChip = (label, click) => `<button type="button" class="later-chip" onclick="${click}">${label}</button>`;
        const training = (topic.id === "betrug" || topic.id === "fakes")
          ? laterChip("Trainings-Postfach", "startTrainingInbox()") : "";
        /* Uebungs-Handy: jedes Thema hat ein eigenes Szenario (szenarien-de.js). */
        const uebung = hasScenario(topic.id)
          ? laterChip("Übungs-Handy", `startScenario('${escapeHtml(topic.id)}')`) : "";
        const merkChip = laterChip("Merk-Karte ansehen", `renderMemoryCard('${escapeHtml(topic.id)}')`);
        /* Alltags-Übung (alltag-de.js), nur für Themen mit eigener Übung. */
        const alltagScene = (typeof ALLTAG_SCENES !== "undefined")
          ? Object.entries(ALLTAG_SCENES).find(([, scene]) => scene && scene.topic === topic.id)
          : null;
        const alltagUebung = alltagScene
          ? laterChip("Im Alltag üben", `alltagGo('${escapeHtml(alltagScene[0])}')`)
          : "";

        /* D7 (01.10.2026, E6): Ein Lernweg statt Kurz/Mehr. Keine Mengen-Wahl
           mehr am Anfang: Alle lernen zuerst den Kern (bisher Kurz-Weg).
           „Mehr dazu“ (bisher Mehr-Weg) gibt es am Ende, freiwillig. */

        /* Befund 2 (21.09.2026): Die Alternativen standen als bis zu sechs
           gleichrangige Chips offen neben der Hauptaktion – wer nicht
           sicher liest, sah sechs Angebote statt einer Antwort auf „Was
           soll ich jetzt tun?". Sie stecken jetzt in einem zugeklappten
           Bereich. Alle Chips, Funktionen und Direktlinks bleiben
           unverändert; nur die Verpackung ist neu.
           Die Zusammenfassungs-Zeile nennt ausdrücklich, was drinsteckt:
           Von einem zugeklappten Bereich liest die Vorlese-Funktion nur
           die Überschrift (readCurrentPage filtert
           `details:not([open])`) – ein blosses „Oder" wäre dort für eine
           nicht lesende Person eine Sackgasse. */
        const spaeterBlock = (titel, chips) => `
            <details class="later-details">
              <summary class="later-title">${titel}</summary>
              <div class="later-row">${chips}</div>
            </details>`;

        /* Vor-Nutzertest: alter Abschluss eines umgebauten Themas. */
        const ueberarbeitetHinweis = (!done && themaUeberarbeitet(topic.id))
          ? `<p class="done-note">${escapeHtml(lernwegText("ueberarbeitet").replace("{thema}", topic.title))}</p>` : "";
        if (resume) {
          return `
            ${ueberarbeitetHinweis}
            ${resume.pause ? buildResumeLessonChip() : `<button type="button" class="topic-start-button" onclick="resumeLastLesson()">Weiter lernen: Schritt ${resume.step + 1}</button>`}
            ${spaeterBlock(FUEHRUNG_TEXT.oderAuf, `
              ${laterChip("Von vorne anfangen", `startTopicMode('${escapeHtml(topic.id)}', '${resume.mode}')`)}
              ${hasQuiz ? laterChip("Quiz machen", `startQuiz('${escapeHtml(topic.id)}')`) : ""}
              ${merkChip}${alltagUebung}${uebung}${training}`)}`;
        }
        if (done) {
          return `
            <p class="done-note">✓ Du hast dieses Thema geschafft. Wiederholen festigt dein Wissen.</p>
            ${hasQuiz ? `<button type="button" class="topic-start-button" onclick="startQuiz('${escapeHtml(topic.id)}')">Quiz wiederholen</button>` : ""}
            ${spaeterBlock(FUEHRUNG_TEXT.oderAuf, `
              ${laterChip("Nochmal lernen", `startTopicMode('${escapeHtml(topic.id)}', 'short')`)}
              ${laterChip(`Mehr dazu: ${escapeHtml(topic.title)}`, `startTopicMode('${escapeHtml(topic.id)}', 'extra')`)}
              ${laterChip("Alle Lektionen nachlesen", `startTopicMode('${escapeHtml(topic.id)}', 'full')`)}
              ${merkChip}${alltagUebung}${uebung}${training}`)}`;
        }
        /* Paket C (26.09.2026): „Lernen starten" steht UNTER der Mengen-Wahl.
           Vorher stand der große Knopf darüber – wer ihn tippte, bevor er die
           Wahl sah, bekam die Vorauswahl (Prüfgruppen-Test B-c). */
        return `
          ${ueberarbeitetHinweis}
          <button type="button" class="topic-start-button" onclick="startTopicMode('${escapeHtml(topic.id)}', 'short')">Lernen starten</button>
          ${spaeterBlock(spaeterTitel(hasQuiz, !!(uebung || training || alltagUebung)), `
            ${hasQuiz ? laterChip("Quiz machen", `startQuiz('${escapeHtml(topic.id)}')`) : ""}
            ${merkChip}${alltagUebung}${uebung}${training}`)}`;
      })()}

      ${/* Begleit-Panel direkt hinter die Hauptaktion (B21): vorher lag es bei
            y=1364 unter allem anderen, eine Fachkraft musste dreimal scrollen.
            ÜBER die Hauptaktion darf es nicht – §7: Begleit-Hinweise dürfen den
            SOLO-Gebrauch nicht stören. */""}
      ${buildCompanionPanel(topic)}

      ${/* Weiterlern-Bereich (28.09.2026): abgesetzt, NACH Hauptaktion und
            Begleit-Panel, klar als Zusatz benannt. Nur wenn es einen gibt. */""}
      ${buildWeiterlernenBlock(topic)}

      ${buildSupportBox()}

      <button type="button" class="plain-back-button plain-back-button--end" onclick="renderMenu()">← Zu den Themen</button>
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

/* Rückmeldung zur GEWÄHLTEN falschen Antwort (Prüfbericht B4).
   Solange es nur zwei Antworten gab, reichte ein einziger Falsch-Text: es gab
   ja nur einen Weg, danebenzuliegen. Mit einer dritten Möglichkeit gibt es
   zwei verschiedene Denkfehler – und der eine wird anders erklärt als der
   andere. `feedbackWrong` darf deshalb jetzt auch eine Liste sein, mit einem
   Eintrag je Antwort-Position (null an der Stelle der richtigen Antwort).
   Ein einzelner Text funktioniert unverändert weiter. */
function falschFeedback(frage, index) {
  const f = frage && frage.feedbackWrong;
  if (Array.isArray(f)) {
    const eigen = f[index];
    if (typeof eigen === "string" && eigen.trim()) return eigen.trim();
    const ersatz = f.find(x => typeof x === "string" && x.trim());
    return ersatz ? ersatz.trim() : "";
  }
  return (typeof f === "string" && f.trim()) ? f.trim() : "";
}

/* ------------------------------------------------------------
   RÜCKMELDEART „DAS GEHT AUCH“ (Paket T5, 29.09.2026)
   Manchmal sind mehrere Wege sicher und erlaubt. Neben der passenden
   Antwort (correctIndex = bevorzugter Lernweg) kann eine Aufgabe weitere
   zulässige Antworten nennen:
     auchMoeglich  [Index, …]   Aufbau, in allen Stufen gleich
     feedbackAuch  Text oder je Antwort einer (null an den anderen Stellen);
                   Lerninhalt, dreistufig über AUFGABEN_VERSIONS
   Wer eine solche Antwort wählt, macht keinen Fehler: keine
   Fehlermarkierung, nicht als schwierige Aufgabe gemerkt (zählt fürs
   Gedächtnis wie eine passende Antwort), kein Zähler für den zweiten
   Versuch, kein Fehlerton, keine „passt noch nicht“-Ansage; der Lernweg
   geht normal weiter. Kopf „Das geht auch“ (Bedientext), darunter die
   Erklärung und der bevorzugte Weg („Noch ein guter Weg: …“).
   Aufgaben ohne auchMoeglich: alles wie bisher.
   ------------------------------------------------------------ */
function antwortArt(frage, index, korrekt) {
  const k = Number(korrekt !== undefined ? korrekt : ((frage && (frage.correctIndex ?? frage.correct)) ?? 0));
  const i = Number(index);
  if (i === k) return "richtig";
  const auch = (frage && Array.isArray(frage.auchMoeglich)) ? frage.auchMoeglich.map(Number) : [];
  return auch.indexOf(i) !== -1 ? "auch" : "falsch";
}

function auchFeedback(frage, index) {
  const f = frage && frage.feedbackAuch;
  const t = Array.isArray(f) ? f[index] : f;
  return (typeof t === "string" && t.trim()) ? t.trim() : "";
}

function nochEinWegHtml(antwort) {
  const t = answerText(antwort);
  if (!t) return "";
  return `
      <div class="feedback-auch-weg">
        <h3>${escapeHtml(RUECKMELDUNG.nochEinWeg)}</h3>
        <p>${escapeHtml(t)}</p>
      </div>`;
}

/* Hilfe zur Aufgabe in zwei Stufen (Prüfbericht B14).
   Vorher bekamen alle Fragen der Plattform denselben Text: fünf allgemeine
   Ratschläge. Beim dritten Mal ist das Rauschen, und wer inhaltlich nicht
   weiterkommt, bekommt eine Strategie statt einer Erklärung.

   Stufe 1 ist jetzt inhaltlich und führt zum Nachdenken, ohne die Antwort zu
   nennen – aus dem Feld `hinweis` der Frage, sonst je nach Ort ein Zeiger auf
   die Stelle, an der die Antwort steht.
   Stufe 2 bleibt die allgemeine Liste. Der Satz „Überlege: Welche Antwort
   schützt dich besser?" ist raus: Bei zwei Antworten verrät er fast immer
   die Lösung. */
function taskHint(frage, ort) {
  if (frage && typeof frage.hinweis === "string" && frage.hinweis.trim()) return frage.hinweis.trim();
  if (ort === "lektion") return "Die Antwort steht oben in diesem Schritt. Lies den Text noch einmal.";
  if (ort === "rueckmeldung") return "Du kannst die Lektion noch einmal lesen. Der Knopf dafür steht oben.";
  return "";
}

/* `vorneDran` = der Kasten steht VOR den Antworten (V-5). Hilfe gehoert vor
   die Entscheidung, nicht dahinter – wer unsicher ist, musste den Knopf
   vorher unter allen Antworten suchen. Die Klasse nimmt nur den oberen
   Abstand weg, damit die Antworten nicht zusaetzlich nach unten rutschen. */
/* D13 (02.10.2026, freigegeben nach Entwurf 3, Bild 4): Auf der Rückmeldeseite
   gibt es EIN Hilfe-Angebot, und es öffnet sich in Stufen. „Ich bin unsicher“
   zeigt zuerst nur den Tipp. Erst „Mehr Hilfe zeigen“ bietet weitere Hilfen
   an: `mehr` (Beispiel, „Lektion nochmal lesen“ – von der Seite übergeben)
   und die vier bekannten Sätze. Vorher standen Beispiel, Lektion und Hilfe
   als gleich starke Angebote nebeneinander. Auf Frage-Seiten (ohne
   `aufRueckmeldung`) bleibt der Kasten, wie er war.
   „Mehr Hilfe zeigen“ ist ein neuer Bedientext, in allen drei Stufen gleich
   (§2 A); er steht auf der Liste für die Prüfgruppe
   (berichte/design-umbau/01-OFFENE-PUNKTE.md). */
function buildTaskHelpBox(hinweis, vorneDran, aufRueckmeldung, mehr) {
  const stufe1 = (typeof hinweis === "string" && hinweis.trim())
    ? `<p class="task-help-tip"><span class="task-help-tip-label">Tipp:</span> ${escapeHtml(hinweis.trim())}</p>`
    : "";
  return `
    <div class="task-help-area">
      <button type="button" class="task-help-button" onclick="toggleTaskHelp()" aria-expanded="false" aria-controls="taskHelpPanel">
        Ich bin unsicher
      </button>
      <div id="taskHelpPanel" class="task-help-panel" hidden>
        <h3>Du bist unsicher?</h3>
        <p>Du musst nicht raten.</p>
        ${stufe1}
        <button type="button" class="hilfe-angebot task-help-mehr-knopf" onclick="taskHelpMehr(this)" aria-expanded="false" aria-controls="taskHelpMehr">Mehr Hilfe zeigen</button>
        <div id="taskHelpMehr" class="task-help-mehr" hidden>
          ${mehr || ""}
          <ul>
            <li>${aufRueckmeldung ? "Lies die Erklärung noch einmal langsam." : "Lies die Frage noch einmal langsam."}</li>
            <li>${aufRueckmeldung ? escapeHtml(RUECKMELDUNG.fehlerOk) : "Schau dir alle Antworten an."}</li>
            <li>Du kannst eine Pause machen.</li>
            <li>Du kannst eine Person fragen, der du vertraust.</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

/* Zweite Hilfe-Stufe aufklappen. Der Knopf tritt zurück, damit im Kasten
   nicht zwei Dinge dasselbe anbieten; der Fokus geht zum ersten Angebot. */
function taskHelpMehr(knopf) {
  const mehr = document.getElementById("taskHelpMehr");
  if (!mehr || !knopf) return;
  mehr.removeAttribute("hidden");
  knopf.setAttribute("aria-expanded", "true");
  knopf.setAttribute("hidden", "");
  const erstes = mehr.querySelector("summary, button");
  if (erstes) erstes.focus();
  announce("Hier ist mehr Hilfe.");
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
  /* Zusatzweg: fachlich ausgewählte neue Fälle. Der vollständige alte Weg
     bleibt unter full zum Nachlesen erhalten; seine Daten werden nicht
     gekürzt. Nur eine bereits passend beantwortete identische Kernaufgabe
     entfällt hier. Ohne Nachweis bleibt die Wiederholung erhalten. */
  if (mode === "extra") {
    if (topic._zusatzWeg) return topic._zusatzWeg;
    const titel = Array.isArray(topic.zusatzLektionen) ? topic.zusatzLektionen : [];
    const kern = topic.einfachLessons || [];
    const gleich = (a, b) => {
      if (!a || !b) return false;
      const aa = leichtFassung.get(a) || a, bb = leichtFassung.get(b) || b;
      return aa.question === bb.question && JSON.stringify(aa.answers) === JSON.stringify(bb.answers)
        && a.correctIndex === b.correctIndex;
    };
    const lektionen = titel.map(t => topic.lessons.find(l => l.title === t)).filter(Boolean)
      .map(l => kern.some(k => gleich(k.practice, l.practice)
        && kernUebungenErkannt.has(topic.id + "\u0000" + aufgabeSchluessel(k.practice)))
        ? Object.assign({}, l, { practice: null }) : l);
    if (!lektionen.length) return [];
    const ende = topic.lessons[topic.lessons.length - 1];
    topic._zusatzWeg = ende && /merke ich mir/i.test(ende.title || "")
      ? lektionen.concat(zusammenfassungFuerWeg(topic, lektionen, ende, "_schlussZusatz")) : lektionen;
    return topic._zusatzWeg;
  }
  if (mode === "short") {
    if (Array.isArray(topic.einfachLessons) && topic.einfachLessons.length) {
      /* Der Kurz-Modus bekommt denselben Rahmen wie der lange Weg
         (Prüfbericht B8): vorne die Start-Seite mit den Lernzielen, hinten die
         Zusammenfassung „Das merke ich mir". Vorher fing er ohne Ankündigung
         an und endete ohne Regel-Liste – ausgerechnet der Weg für Personen mit
         kürzerer Aufmerksamkeitsspanne verzichtete auf die zwei Stützen, die
         kurze Wege am nötigsten brauchen.
         Es entsteht KEIN neuer Inhalt: beide Seiten liegen schon in
         topic.lessons und werden hier nur wiederverwendet. */
      const start = topic.lessons[0];
      const ende  = topic.lessons[topic.lessons.length - 1];
      const rahmen = [];
      if (start && start.module === "Start") rahmen.push(start);
      rahmen.push(...topic.einfachLessons);
      if (ende && ende !== start && /merke ich mir/i.test(ende.title || "")) rahmen.push(zusammenfassungFuerWeg(topic, topic.einfachLessons, ende, "_schlussKurz"));
      return rahmen;
    }
    /* Rueckfallebene fuer Themen OHNE einfachLessons. Aktuell haben alle 12
       welche, das Feld shortLessonIndexes wurde deshalb aus topics.js
       entfernt. Der Zweig bleibt, damit ein spaeteres Thema ohne eigene
       Kurzfassung nicht ins Leere laeuft. */
    if (Array.isArray(topic.shortLessonIndexes)) {
      return topic.shortLessonIndexes.map(index => topic.lessons[index]).filter(Boolean);
    }
  }
  const letzte = topic.lessons[topic.lessons.length - 1];
  if (letzte && /merke ich mir/i.test(letzte.title || "")) {
    return topic.lessons.slice(0, -1).concat(zusammenfassungFuerWeg(topic, topic.lessons, letzte, "_schlussLang"));
  }
  return topic.lessons;
}

/* „Das merke ich mir" – für beide Wege (Paket C, 26.09.2026).
   Die Seite nennt die REGELN, die dieser Weg geübt hat, mit genau dem Satz
   der Regel-Karte in der gewählten Stufe (eine Regel, ein Satz). Danach die
   Merksätze, die zu keiner Regel gehören (reines Wissen, z. B. „KI ist in
   vielen Apps."). Vorher stand hier eine eigene Liste mit anderen
   Formulierungen; der Kurz-Weg nannte sogar Regeln, die er nicht zeigte
   (Prüfgruppen-Test C-1, F5). Einmal je Thema und Weg gebaut, damit
   Fortschritt und Rück-Anker immer dasselbe Objekt sehen. */
function regelZuordnungTabelle(satz) {
  const k = String(satz || "").trim();
  const tabelle = !!k && (typeof REGEL_ZUORDNUNG !== "undefined") && Object.prototype.hasOwnProperty.call(REGEL_ZUORDNUNG, k);
  return { tabelle: tabelle, rid: tabelle ? REGEL_ZUORDNUNG[k] : null };
}

/* Regeln, die die Übungen eines Wegs üben – in der Reihenfolge der Schritte. */
function regelIdsAusUebungen(lektionen) {
  const ids = [];
  (lektionen || []).forEach(l => {
    const z = regelZuordnungTabelle(l && l.practice && l.practice.remember);
    if (z.rid && ids.indexOf(z.rid) === -1) ids.push(z.rid);
  });
  return ids;
}

function zusammenfassungFuerWeg(topic, lektionen, ende, schluessel) {
  if (topic[schluessel]) return topic[schluessel];
  const regelIds = regelIdsAusUebungen(lektionen.filter(l => l && l !== ende && l.module !== "Start")), wissen = [];
  /* Regeln nur aus den Übungen – genau das zählt auch die Regel-Karte.
     Dazu Merksätze der Lektionen, die reines Wissen sind (keine Regel). */
  lektionen.forEach(l => {
    if (!l || l === ende || l.module === "Start") return;
    const lek = regelZuordnungTabelle(l.remember);
    if (lek.tabelle && !lek.rid) wissen.push({ lektion: l });
  });
  const regeln = regelIds.map(id => regelById(id)).filter(Boolean);
  const liste = stufe => regeln.map(r => ({ text: regelText(r, stufe).kurz, pictogram: r.pikto }))
    .concat(wissen.map(w => ({ text: (resolveLessonContent(w.lektion, stufe) || w.lektion).remember, pictogram: w.lektion.pictogram })))
    .filter(x => x.text);
  const ev = (ende.versions && ende.versions.einfach) || {};
  const sv = (ende.versions && ende.versions.standard) || {};
  /* mitPlan: true = beide Wege, "kurz" = nur Kurz-Weg (der lange Weg hat
     den Plan schon als eigene Einheit direkt davor). */
  const planHier = !!ketteDaten(topic.id)
    && (ende.mitPlan === true || (ende.mitPlan === "kurz" && schluessel === "_schlussKurz"));
  /* Paket H1 (30.09.2026): Übt ein Weg (noch) keine Regel – Hilfe bei
     Problemen hat vorerst keine Übungen –, steht keine leere Überschrift da;
     die Seite zeigt dann nur den Plan. Themen mit Regeln: unverändert. */
  const leer = !liste("leicht").length;
  topic[schluessel] = Object.assign({}, ende, {
    /* Erinnern statt Wiederlesen (Lernweg, 26.09.2026): renderLesson zeigt
       zuerst die Frage „Was weißt du noch?" und die Regeln erst auf Tippen. */
    erinnern: true,
    /* Datenschutz, Paket 2 (28.09.2026): Mit `mitPlan` in der Lektion
       „Das merke ich mir“ wird auch der Handlungsplan erst erinnert, dann
       aufgedeckt (siehe planHier oben). Andere Themen haben das Feld nicht. */
    kettePlan: planHier ? topic.id : null,
    erinnernFrage: planHier ? ende.erinnernFrage : null,
    erinnernKnopf: planHier ? ende.erinnernKnopf : null,
    text: leer ? [] : [{ text: "Das sind deine Regeln aus diesem Thema:", pictogram: "pikto-done" }],
    bullets: liste("leicht"),
    versions: Object.assign({}, ende.versions, {
      einfach: Object.assign({}, ev, {
        text: leer ? [] : [{ text: "Diese Regeln aus dem Thema kannst du dir gut merken:" }],
        bullets: liste("einfach").map(x => x.text)
      }),
      standard: Object.assign({}, sv, {
        text: leer ? [] : [{ text: "Die Regeln aus diesem Thema im Überblick: " + liste("standard").map(x => x.text).join(" ") }],
        bullets: []
      })
    })
  });
  return topic[schluessel];
}

/* Kurz-Weg: Die Ziele sind die Titel seiner Lektionen. Die Lernziele des
   langen Wegs kündigten Dinge an, die im Kurz-Weg nicht vorkamen
   (Prüfgruppen-Test F5, 26.09.2026). */
function zieleFuerWeg(topic, mode) {
  if (mode === "extra") return getLessonsForMode(topic, mode)
    .filter(l => !l.erinnern).map(l => (resolveLessonContent(l, languageLevel) || l).title);
  /* Lernweg (26.09.2026): „Danach kannst du …" je Weg und Stufe (LERNZIELE). */
  const lz = (typeof LERNZIELE !== "undefined" && LERNZIELE) ? LERNZIELE[topic.id] : null;
  const weg = lz ? lz[mode === "short" ? "kurz" : "lang"] : null;
  if (weg) {
    const liste = weg[languageLevel] || weg.einfach || weg.leicht;
    if (Array.isArray(liste) && liste.length) return liste;
  }
  if (mode === "short" && Array.isArray(topic.einfachLessons) && topic.einfachLessons.length) {
    return topic.einfachLessons.map(l => l.title);
  }
  return Array.isArray(topic.learningGoals) ? topic.learningGoals : [];
}

function startTopicMode(topicId, mode) {
  const topic = getTopicById(topicId);
  if (!topic) return renderMenu();
  rememberTopicAmount(topic.id, mode);
  currentTopicId = topic.id;
  currentMode = ["short", "extra", "full"].includes(mode) ? mode : "short";
  currentStep = 0;
  /* D8 (01.10.2026): „Mehr dazu“ kommt nach dem Kern (E6). Die Einstiegsfrage
     war dann schon dran und wird nicht noch einmal gestellt. */
  if (currentMode === "short" && (topic.vorhersage || topic.selfAssessment)) {
    renderSelfAssessment();
  } else {
    renderLesson();
  }
}

/* Vorhersage (Datenschutz, Paket 2, 28.09.2026): Statt „Was weißt du
   schon?“ steht am Einstieg die Zielsituation mit der Frage „Was machst
   du?“ – ohne Bewertung. Die Abschluss-Seite greift sie wieder auf.
   Nur Themen mit `topic.vorhersage`; alle anderen behalten ihre
   Selbsteinschätzung. Text je Stufe über ketteText (Rückfall auf Leicht). */
function vorhersageFuer(topic) {
  const v = topic && topic.vorhersage;
  if (!v || !Array.isArray(v.options) || !v.options.length) return null;
  return {
    situation: ketteText(v.situation),
    question: ketteText(v.question),
    options: v.options.map(o => ketteText(o)),
    aufloesung: ketteText(v.aufloesung),
    pictogram: v.pictogram
  };
}

function renderSelfAssessment() {
  stopReading();
  const topic = getCurrentTopic();
  if (!topic || !(topic.vorhersage || topic.selfAssessment)) return renderLesson();

  const vh = vorhersageFuer(topic);
  const sa = vh || resolveSelfAssessment(topic, languageLevel);
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader(topic.title, "", "", "Start", 0);
  setOrientation(`Du startest das Thema: ${topic.title}. Zuerst kommt eine Frage an dich.`);

  const optionButtons = sa.options.map((opt, i) =>
    `<button class="sa-option-btn" data-index="${i}" type="button"><span class="answer-text">${escapeHtml(answerText(opt))}</span></button>`
  ).join("");

  content.innerHTML = `
    ${lernRahmenLeiste()}
    <article class="card sa-card" data-readable="true" style="${getTopicColorStyle(topic.id)}">
      <div class="symbol-heading">
        <span class="access-box-symbol" aria-hidden="true">${getIconHtml(topic.icon || "start")}</span>
        <h2>${escapeHtml(topic.title)}</h2>
      </div>
      <p class="sa-intro">Bevor wir starten:</p>
      ${vh && vh.situation ? `<p class="vorhersage-situation">${escapeHtml(vh.situation)}</p>` : ""}
      ${`${roleFigure("nachdenken")}${buildMeinung({ frage: sa.question, pikto: questionPikto(sa), optionen: optionButtons })}`}
    </article>
  `;

  content.querySelectorAll(".sa-option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      /* Antwort merken – die Abschluss-Seite zeigt damit den eigenen Zuwachs.
         Vorher wurde die Wahl verworfen. */
      if (vh) vorhersageStart[topic.id] = Number(btn.dataset.index);
      else selfAssessmentStart[topic.id] = Number(btn.dataset.index);
      renderLesson();
    });
  });

  focusContent();
  renderLegalFooter();
}

/* Fortschritt als schlanker Balken plus Erfolgs-Satz.
   Früher standen hier bis zu 13 nummerierte Kreise nebeneinander (20–26 px,
   sahen antippbar aus, waren es nicht) und haben den Kopf optisch zerhackt.
   Der Satz "X geschafft · noch Y Schritte" bleibt: er trägt die Erfolgs-
   Rückmeldung (§3 Engagement) und wird – anders als die Kreise – vorgelesen.
   "Schritt X von Y" steht bereits im Orientierungssatz darüber. */
/* ------------------------------------------------------------
   Einheitlicher Fortschritts-Baustein (Paket V, §4.5/§2.2)

   buildProgress(done, total) ersetzt schrittweise die drei
   Fortschritts-Bauarten (Schritt-Balken, Abschluss-Balken,
   Quiz-Balken) durch EIN Muster: Balken plus Stand-Satz in Worten.
   Wortlaut, Zahlen und aria-Werte entsprechen exakt dem bisherigen
   Schritt-Balken (bis V3 buildStepPath, in V4 entfernt) –
   wiederverwendet werden dessen CSS-Klassen (.step-bar-*), sodass
   kein neues Balken-CSS nötig ist. Reine Funktion, kein DOM-Eingriff;
   total < 2 ergibt "" (ein einzelner Schritt braucht keinen Balken).
   ------------------------------------------------------------ */
function buildProgress(done, total, opts) {
  /* Abschluss-Variante (Paket V3): „X von 12 Themen" für die
     Abschluss-Seite – GrandFinish, Themen-Balken und Speicher-Angebot.
     Exakt das bisherige buildCompletionProgress-Muster, nur mit
     übergebenen Zahlen statt fest verdrahteten. */
  /* Fortschritts-Rückmeldung direkt nach dem Erfolg (Bandura: unmittelbares
     Erfolgserlebnis). Bietet – falls noch nicht aktiv – das freiwillige
     Merken des Lernstands genau in dem Moment an, in dem es Sinn ergibt. */
  if (opts && opts.complete) {
    const saveOffer = !isProgressEnabled() ? `
    <div class="progress-consent">
      <p class="progress-consent-title">Soll ich mir merken, welche Themen du geschafft hast?</p>
      <p class="progress-consent-note">Das wird nur auf diesem Gerät gespeichert. Ohne Namen. Du kannst es jederzeit löschen.</p>
        <p class="progress-consent-note">Auch Antworten und Treffer einer unterbrochenen Runde werden gemerkt.</p>
      <button type="button" class="utility-button" onclick="enableProgressInline(this)">Ja, Lernstand merken</button>
    </div>` : pauseEinwilligungHtml();
    return `
    ${buildGrandFinish()}
    <div class="hero-progress-row" role="region" aria-label="Dein Lernfortschritt">
      <div class="hero-progress-numbers">
        <span class="hero-progress-count">${done}</span>
        <span class="hero-progress-of">von ${total} Themen geschafft</span>
      </div>
      <div class="hero-progress-track" role="progressbar" aria-valuenow="${done}" aria-valuemin="0" aria-valuemax="${total}" aria-label="${done} von ${total} Themen">
        <div class="hero-progress-fill" style="width:${Math.round((done / total) * 100)}%"></div>
      </div>
    </div>
    ${saveOffer}`;
  }
  if (!total || total < 2) return "";
  const currentIndex = Math.max(0, Math.min(total - 1, done));
  const remaining = total - currentIndex - 1;
  const percent = Math.round(((currentIndex + 1) / total) * 100);
  /* Durchgespielt am 21.09.2026: Im Film der Handlungs-Kette standen auf
     EINEM Bildschirm zwei Vokabulare für dieselbe Sache – die Karte zählte
     „Bild 1 von 4", der Balken darüber „0 geschafft · noch 3 Schritte".
     Gerechnet stimmt beides (drei Takte folgen noch), aber wer beide Zahlen
     liest, muss sie erst ineinander umrechnen: einmal ab 1 gezählt, einmal
     ab 0, und dasselbe Ding heißt oben „Schritt" und unten „Bild".
     Für diese Zielgruppe ist genau das eine Hürde (§5: im ganzen Text
     dasselbe Wort für dieselbe Sache).
     `wort` passt die Benennung an, `ohneText` lässt die Zusammenfassung
     weg, wenn die Karte die Zahl ohnehin groß trägt – dann bleibt der
     Balken als reine Mengen-Anzeige (§3 Kohärenz: eine Auskunft, ein Ort).
     Die Vorgabewerte ändern nichts an den bisherigen Aufrufen. */
  const wort = (opts && opts.wort) ? opts.wort : "Schritt";
  const wortMehrzahl = wort === "Bild" ? "Bilder" : wort + "e";
  const summary = remaining > 0
    ? `<span class="step-done-count">${currentIndex} geschafft</span> · noch ${remaining} ${remaining === 1 ? wort : wortMehrzahl}`
    : `<span class="step-done-count">${currentIndex} geschafft</span> · ${wort === "Bild" ? "letztes Bild" : "letzter Schritt"}`;
  return `
    <div class="step-bar-wrap">
      <div class="step-bar" role="progressbar" aria-label="Dein Fortschritt in diesem Thema"
           aria-valuemin="0" aria-valuemax="100"
           aria-valuenow="${percent}" aria-valuetext="${wort} ${currentIndex + 1} von ${total}">
        <div class="step-bar-fill" style="width:${percent}%"></div>
      </div>
      ${(opts && opts.ohneText) ? "" : `<p class="step-path-summary">${summary}</p>`}
    </div>`;
}

/* ------------------------------------------------------------
   Wegweiser (Paket V, §2.2): Ort-Satz und Fortschritt in EINER Karte.

   buildWegweiser(text, { index, total }) gibt die sichtbare Karte
   zurück: oben der Ort-Satz mit Themen-Symbol, darunter
   buildProgress. Der Aufrufer ruft setOrientation(text) wie bisher auf –
   #orientLine bleibt dadurch Live-Region, Farbfaden-Quelle und erstes
   Vorlese-Element (kein Doppel-Aufruf, keine Doppel-Meldung).

   Barrierefreiheit: Für Screenreader steht der Satz EINMAL im Zugriff
   (die sichtbare Kopie trägt aria-hidden, #orientLine bleibt die
   Quelle). Ein eigener Hör-Knopf existiert seit Paket H nicht mehr:
   Die Vorlese-Pille liest den Ort-Satz zuerst.
   ------------------------------------------------------------ */
function buildWegweiser(text, opts) {
  const o = opts || {};
  let iconHtml = "";
  if (typeof currentTopicId !== "undefined" && currentTopicId) {
    const topic = getTopicById(currentTopicId);
    if (topic && topic.icon) iconHtml = `<span class="orient-icon" aria-hidden="true">${getIconHtml(topic.icon)}</span>`;
  }
  const progressHtml = (typeof o.index === "number" && o.total) ? buildProgress(o.index, o.total, o) : "";
  return `
    <div class="wegweiser">
      <div class="wegweiser-ort">${iconHtml}<span class="wegweiser-ort-text" aria-hidden="true">${escapeHtml(text)}</span></div>
      ${progressHtml}
    </div>`;
}

/* ============================================================
   Merksatz-Baustein (Lerndesign-Vorschlag, Stufe 1)
   Additiv: hebt den Vorlese-Knopf aus renderLesson() unverändert nach
   global (er nutzt dort nur seinen eigenen Parameter und escapeHtml,
   siehe Prüfung in docs/lerndesign-vorschlag.md), damit buildRememberBox()
   ihn mitnutzen kann. renderLesson() nutzt seit Paket V4 dieselbe
   gemeinsame Funktion (Zusammenführung, lokale Kopie entfernt).
   ============================================================ */
function blockRead(t) {
  return t
    ? `<span class="card-read-button card-read-button--block" role="button" tabindex="0" data-read-card-text="${escapeHtml(t)}" aria-label="Diesen Teil vorlesen">${pictoHtml("vorlesen", "rb-ico")} </span>`
    : "";
}

/* Der handkopierte Merksatz-Kasten als ein Baustein.
   Markup, Klassen und Vorlese-Text sind Zeichen für Zeichen wie in renderLesson.

   WOFÜR DIESER BAUSTEIN DA IST — und wofür nicht:
   Er ist der Kasten für den MERKSATZ (Merken: ein Satz, den die Person
   mitnehmen soll). Er ist ausdrücklich NICHT gedacht für:
   - TRANSFER / Handeln ("Eine Sache für heute", topic.transfer in
     renderCompletionPage). Das ist ein anderes didaktisches Element (§12:
     Transfer-Schritt), auch wenn es heute dieselben CSS-Klassen benutzt.
     Wer das zusammenlegt, verliert die Unterscheidung.
   - LISTEN ("Das nimmst du mit" in renderScenarioResult, <ul> statt <p>).
     Dieser Baustein kennt nur einen Fließtext.
   - Ergebnis-Kästen mit wechselndem, aus dem Zustand berechnetem Titel
     ("Dein Postfach kann noch wachsen", "Noch eine Runde?" …). Das sind
     Rückmeldungen zum Spielstand, keine Merksätze.

   opts.vorlesen (Standard true): steuert den Block-Vorlese-Knopf.
   Seit Stufe 4b (September 2026) haben ALLE Merksatz-Kästen den Knopf.
   Die Option bleibt für künftige Ausnahmen erhalten. */
function buildRememberBox(titel, text, opts) {
  opts = opts || {};
  const vorlesen = opts.vorlesen !== false;
  return text
    ? `<div class="access-box remember remember-box"><h3>${escapeHtml(titel)}</h3><p class="remember-text">${escapeHtml(text)}</p>${vorlesen ? blockRead(titel + ". " + text) : ""}</div>`
    : "";
}

/* Stations-Etikett (Faden Merken → Prüfen → Handeln,
   docs/gesamtlernprinzip-stationen.md §1). Bewusst klein: ein Wort und ein
   Bild-Zeichen, kein Satz, keine Erklärung. Nur Etikett — die Erklärung
   steht auf der Startseite („So lernst du."). §18.8: prüfen lassen. */
/* Rückmeldungs-Wörter zentral (15.09.2026, §13: leicht änderbare Etiketten).
   Ermutigend, aber erwachsen (§4): Die Rückmeldung sagt, WAS gepasst hat,
   statt pauschal zu loben („Super gemacht!", „Das war toll."). Eine falsche
   Antwort heißt nicht mehr „Fast!" – das stimmte oft nicht und lenkte von der
   Erklärung ab. Kein Konjunktiv mehr („Richtig wäre", §5).
   Alle Wörter stehen auf der Prüfliste für die Prüfgruppe (§18.8). */
const RUECKMELDUNG = {
  passtTitel:      "Diese Antwort passt",
  nochNichtTitel:  "Schau dir die Erklärung an",
  passtAnsage:     "Diese Antwort passt.",
  nochNichtAnsage: "Diese Antwort passt noch nicht. Schau dir die Erklärung an.",
  entscheidungGut: "Diese Entscheidung schützt dich.",
  passendeAntwort: "Die passende Antwort ist:",
  /* Paket T5 (29.09.2026): Rückmeldeart „Das geht auch“ – Bedientext, in
     allen Stufen gleich. Die Erklärung darunter ist Lerninhalt (feedbackAuch). */
  auchTitel:       "Das geht auch",
  auchAnsage:      "Das geht auch.",
  nochEinWeg:      "Noch ein guter Weg:",
  /* Kurzform für Rückmeldungen auf derselben Seite (Übungs-Handy, Postfach,
     kurze Frage, Frage des Tages) – vorher stand dort „Richtig." / „Noch
     nicht sicher." / „Schau mal:" (Gesamtprüfung V4, 25.09.2026). */
  nochNichtKurz:   "Diese Antwort passt noch nicht.",
  /* Ersatz, wenn eine Frage keine eigene Erklärung für falsch hat – vorher
     „Das war leider falsch. Beim nächsten Mal klappt es besser." */
  fehlerOk:        "Fehler sind in Ordnung. So lernst du.",
  /* Abschluss-Seite (Paket C, 26.09.2026) – neu, freigabepflichtig (§13). */
  regelnGeuebt:    "Diese Regeln hast du geübt:",
  regelnThema:     "Diese Regeln gehören zu diesem Thema:",
  kennstDuAus:     "Kennst du auch aus:",
  mehrZumThema:    "Mehr zu diesem Thema",
  wieIstEsJetzt:   "Wie ist es jetzt für dich?",
  kennstDuFrage:   "Kennst du das schon?",
  /* `gelernt` ist seit dem 21.09.2026 NICHT mehr in Gebrauch (T07): Die
     Abschluss-Seite behauptete damit ein Lernergebnis, das nirgends gemessen
     wird. Der Wortlaut bleibt hier stehen, weil ihn die Prüfgruppe am
     20.09.2026 freigegeben hat – falls sie die alte Fassung zurückwill, steht
     sie hier und muss nicht rekonstruiert werden (§13). Nicht wieder
     einsetzen ohne Auftrag. */
  gelernt:         "Das hast du gelernt:",
  /* T07 (21.09.2026): getrennte Wörter für „darum ging es" und „das kannst
     du schon". Die App weiß nur das Erste. Das Zweite sagt die Person selbst.
     Freigabepflichtig – für die Prüfgruppe geflaggt (§13). */
  zieleThema:      "Darum ging es in diesem Thema:",  /* seit 26.09.2026 nicht mehr in Gebrauch (Abschluss Paket C) */
  zieleHinweis:    "Du hast alle Schritte gemacht. Kannst du es schon sicher? Das weißt du selbst am besten.",  /* seit 26.09.2026 nicht mehr in Gebrauch (Abschluss Paket C) */
  themaGeschafft:  "Thema geschafft",
  deinThema:       "Dein Thema:",  /* seit 26.09.2026 nicht mehr in Gebrauch (Abschluss Paket C) */
  themaText:       "Du hast alle Schritte gemacht. Du kannst sie jederzeit wiederholen.",  /* seit 26.09.2026 nicht mehr in Gebrauch (Abschluss Paket C) */
  eineSache:       "Eine Sache für heute",
  regelDazu:       "Die Regel dazu:",  /* neu 27.09.2026 (E5) – freigabepflichtig */
  quizAlle:        "Du hast alle Fragen richtig beantwortet.",
  quizNochmal:     "Du kannst die Fragen noch einmal üben. Die Erklärungen helfen dir dabei.",
  uebenViel:       "Du hast schon viel sicher erkannt. Jedes Üben macht dich sicherer.",
  uebenSchwer:     "Gut, dass du geübt hast. Das ist schwer. Du kannst es gleich noch einmal machen.",
  urkunde:         "Du hast durchgehalten."
};

/* Frage-Muster – seit der Freigabe durch die Prüfgruppe (20.09.2026) Standard.
   Es galt zuvor als Entwurf hinter ?frage=neu; der Schalter ist entfallen.
   Alle Fragen mit richtiger Antwort sehen gleich aus: Kopfzeile (✅ Prüfen,
   Zähler, leiser Hilfe-Knopf) – Frage – Aufforderung – Antworten. Ein Muster
   statt vier: einmal gelernt, überall wiedererkannt (§3 CLT).
   Die Aufforderung steht jetzt auch auf dem Schirm, nicht nur beim Vorlesen
   (UDL: dasselbe Signal in Bild und Ton).
   Die Hilfe bleibt VOR den Antworten (Prüfbefund V-5: wer unsicher ist, soll
   sie vor der Entscheidung finden) – als kompakter, neutraler Knopf direkt
   unter der Frage. Sie gehört damit sichtbar zur Frage und ist nicht mehr
   das lauteste Element der Seite.
   Wörter zentral (§13) und auf der Prüfliste (§18.8). */
const FRAGE_TEXT = {
  /* D8 (01.10.2026, Befund B12): Seit D3 heißt erstes Tippen „hören und
     markieren“. Das steht jetzt VOR den Antworten, nicht erst danach. Mit
     „Antwort sofort wählen“ (unter „Mehr“) gilt der alte Satz. */
  get aufforderung() {
    return (typeof sofortWaehlen !== "undefined" && sofortWaehlen)
      ? "Tippe deine Antwort an."
      : "Tippe eine Antwort an. Dann tippe auf: Das nehme ich.";
  },
  /* Einschätzungen (Einstieg und Abschluss) haben kein Richtig und kein
     Falsch. Sie bekommen deshalb ein eigenes Etikett statt ✅ Prüfen und den
     beruhigenden Satz VOR den Antworten – vorher stand er darunter und wurde
     erst nach der Wahl gelesen (§3 Došen: keine Prüfungsangst). */
  meinungEtikett:      "Deine Meinung",
  keinFalsch:          "Hier gibt es kein Richtig und kein Falsch.",
  meinungAufforderung: "Tippe an, was für dich stimmt."
};
function buildFrage({ frage, pikto = "", antworten, zaehler = "", hilfe = "" }) {
  return `
    <section class="frage">
      ${(stationBadge("pruefen") || zaehler) ? `<div class="frage-kopf">
        ${stationBadge("pruefen")}
        ${zaehler ? `<span class="frage-zaehler">${escapeHtml(zaehler)}</span>` : ""}
      </div>` : ""}
      ${pikto}<p class="frage-text">${escapeHtml(frage)}</p>
      ${hilfe ? `<div class="frage-hilfe">${hilfe}</div>` : ""}
      <div class="frage-antwortbereich">
        <p class="frage-aufforderung">${escapeHtml(FRAGE_TEXT.aufforderung)}</p>
        <div class="answers" role="group" aria-label="Antworten">${antworten}</div>
      </div>
    </section>`;
}
/* Einschätzung: gleicher Aufbau wie eine Frage, aber erkennbar KEINE Prüfung –
   anderes Etikett, keine Nummern, Beruhigung vor den Antworten. */
function buildMeinung({ frage, pikto = "", optionen }) {
  return `
    <section class="frage frage--meinung">
      <div class="frage-kopf">
        <span class="station-badge"><span aria-hidden="true">💬</span>${escapeHtml(FRAGE_TEXT.meinungEtikett)}</span>
      </div>
      ${pikto}<p class="frage-text">${escapeHtml(frage)}</p>
      <p class="frage-beruhigung">${escapeHtml(FRAGE_TEXT.keinFalsch)}</p>
      <div class="frage-antwortbereich">
        <p class="frage-aufforderung">${escapeHtml(FRAGE_TEXT.meinungAufforderung)}</p>
        <div class="sa-options" role="group" aria-label="Einschätzung wählen">${optionen}</div>
      </div>
    </section>`;
}

/* Stations-Zeichen 🧠 Merken / ✅ Prüfen / ➜ Handeln – ENTFERNT (Entscheidung
   der nutzenden Person, 26.09.2026; vorher schon der Leitsatz auf der
   Startseite, 24.09.2026). Die Zeichen erklärten ein Modell, das die Person
   nicht braucht, und machten jede Seite voller. Die Funktion bleibt als
   zentraler Schalter: Soll die Prüfgruppe sie zurückhaben, genügt es, hier
   wieder das Etikett zurückzugeben (Wörter: Merken, Prüfen, Handeln). */
const STATIONEN_ZEIGEN = false;
function stationBadge(key) {
  if (!STATIONEN_ZEIGEN) return "";
  const map = {
    merken:  { icon: "🧠", wort: "Merken" },
    pruefen: { icon: "✅", wort: "Prüfen" },
    handeln: { icon: "➜", wort: "Handeln" }
  };
  const e = map[key];
  return e ? `<span class="station-badge"><span aria-hidden="true">${e.icon}</span>${e.wort}</span>` : "";
}

/* Szenenbilder je Modul (Entscheidung 24.09.2026, Fassung B).
   Zwei Bild-Ebenen: Das Szenenbild oben zeigt, WORUM es auf der Seite
   geht (Alex und Tilda in einer Situation). Die Piktogramme an den
   Sätzen stützen den einzelnen Satz. Fehlt für ein Modul ein Bild,
   bleibt die Seite wie bisher – die Bilder kommen nach und nach dazu.
   Keine echten App-Logos im Bild (§18a, szenarien-de.js). */
/* Szenenbild je Lernbereich (Fassung B, §11). Gemeinsame Szenen
   (szene-*) werden in mehreren Themen benutzt. */
const SCENE_ALT = {
  "betrug-paket": "Tilda bekommt eine falsche Nachricht zu einem Paket.",
  "betrug-hallo-mama": "Eine fremde Nummer bittet Tilda um Geld und sagt: Ich bin dein Kind.",
  "betrug-schockanruf": "Ein Anruf macht Tilda Angst. Alex hilft ihr, ruhig zu bleiben.",
  "betrug-liebe": "Eine Person im Internet verspricht Tilda Liebe und fragt nach Geld.",
  "betrug-gewinn": "Eine Nachricht verspricht Tilda einen Gewinn.",
  "betrug-abo": "Alex und Tilda prüfen ein Angebot. Es kann ein teures Abo sein.",
  "ki-antwort-pruefen": "Alex und Tilda prüfen eine Antwort von der KI nach.",
  "datenschutz-daten-anfrage": "Eine Nachricht fragt nach Tildas privaten Daten.",
  "facebook-beitrag": "Tilda schreibt einen Beitrag. Sie prüft, wer ihn sehen kann.",
  "tiktok-video-posten": "Tilda prüft ein Video, bevor sie es bei TikTok teilt.",
  "betrug-grundwissen": "Tilda bekommt eine falsche E-Mail. Daneben ein Warnzeichen.",
  "betrug-hilfe": "Tilda ruft bei der Bank an. Alex ist bei ihr.",
  "betrug-schutz": "Tilda und Alex schützen das Handy. Daneben ein Schild mit Schloss.",
  "betrug-tricks": "Tilda soll Geld für ein Paket zahlen. Sie macht Stopp.",
  "datenschutz-passwort": "Tilda schützt ihr Handy. Daneben ein Schloss.",
  "datenschutz-private-daten": "Tilda soll Daten eintragen. Sie zögert.",
  "einkaufen-achtung": "Ein Angebot drängt: nur heute. Tilda bleibt ruhig.",
  "einkaufen-bezahlen": "Tilda bezahlt sicher. Daneben ein Schloss.",
  "einkaufen-hilfe": "Alex und Tilda schicken ein Paket zurück.",
  "einkaufen-shop": "Tilda prüft einen Online-Shop.",
  "facebook-anfragen": "Eine fremde Person will Freund werden. Alex und Tilda prüfen das.",
  "facebook-einstellungen": "Tilda stellt ein, wer ihre Sachen sehen darf.",
  "facebook-profil": "Tilda schaut ihr eigenes Profil an.",
  "fakes-bilder": "Tilda prüft ein Bild mit der Lupe.",
  "fakes-pruefen": "Alex und Tilda prüfen eine Nachricht auf zwei Geräten.",
  "fakes-stimmen": "Tilda bekommt einen Anruf. Sie ist misstrauisch.",
  "hilfe-beweise": "Alex und Tilda machen ein Bild vom Bildschirm.",
  "hilfe-handlungsplan": "Alex und Tilda melden eine gemeine Nachricht.",
  "hilfe-stress": "Tilda bekommt gemeine Nachrichten. Sie ist traurig. Alex steht neben ihr.",
  "hilfe-unterstuetzung": "Alex hört Tilda zu. Er hilft ihr.",
  "instagram-bearbeitet": "Tilda und Alex vergleichen zwei Fotos. Eines ist bearbeitet.",
  "instagram-story": "Tilda filmt eine kurze Story.",
  "ki-chatbot": "Tilda schreibt mit einem Chatbot.",
  "ki-fehler": "Alex prüft eine Antwort vom Chatbot nach.",
  "snapchat-bilder": "Ein Bild soll verschwinden. Aber man kann ein Bildschirmfoto machen.",
  "snapchat-private-bilder": "Tilda sagt ruhig Nein zu einer Bild-Anfrage.",
  "szene-fotos": "Tilda will ein Foto schicken. Alex sagt: Erst prüfen.",
  "szene-gefuehle": "Tilda ist traurig. Alex hört zu. Er legt die Hand auf ihre Schulter.",
  "szene-grundwissen": "Alex erklärt Tilda etwas am Tablet.",
  "szene-handlungsplan": "Alex und Tilda sitzen am Tisch. Die Handys liegen weg. Sie machen einen Plan.",
  "szene-hilfe-holen": "Tilda zeigt Alex eine Nachricht. Sie fragt nach Hilfe.",
  "szene-ki-echt": "Alex und Tilda prüfen ein Video mit der Lupe. Ist es echt?",
  "szene-kommentare": "Tilda liest einen gemeinen Kommentar. Alex zeigt auf Melden.",
  "szene-merken": "Alex und Tilda halten eine Karte mit einem Haken hoch.",
  "szene-private-nachrichten": "Eine fremde Person schreibt Tilda. Alex hebt die Hand: Erst warten.",
  "szene-standort": "Tilda schaltet auf dem Handy den Standort aus.",
  "szene-stress": "Tilda bekommt eine Nachricht. Sie ist angespannt. Alex steht ruhig neben ihr.",
  "tiktok-aehnliche-videos": "Alex zeigt: Die App zeigt immer ähnliche Videos.",
  "tiktok-trends": "Tilda sieht einen Tanz-Trend. Sie überlegt, ob sie mitmacht.",
  "whatsapp-code": "Das Handy zeigt einen Code. Tilda gibt ihn nicht weiter.",
  "whatsapp-fremde-nummer": "Eine fremde Nummer schreibt Tilda. Sie überlegt.",
  "whatsapp-gruppen": "Viele Nachrichten in einer Gruppe. Tilda verlässt die Gruppe.",
  "whatsapp-links": "In einer Nachricht ist ein Link. Alex hebt warnend die Hand.",
  "youtube-mutproben": "Ein Video zeigt eine gefährliche Mutprobe. Alex und Tilda sagen Nein.",
  "youtube-pausen": "Tilda schaltet das automatische Weiterspielen aus. Daneben eine Uhr.",
  "youtube-werbung": "Alex zeigt auf Werbung in einem Video."
};

const MODULE_SCENES = {
  /* Datenschutz-Musterthema, Paket 2 (28.09.2026): Module wie die drei
     Kurz-Einheiten, dazu Nachrichten und der Plan. Nur vorhandene Szenen. */
  datenschutz: {
    "Deine Daten": "szene-grundwissen",
    "Nötig oder nicht?": "datenschutz-private-daten",
    "Wer sieht es?": "facebook-einstellungen",
    "Nachrichten": "szene-private-nachrichten",
    "Handlungsplan": "szene-handlungsplan",
    "Zusammenfassung": "szene-merken"
  },
  whatsapp: {
    "Grundwissen": "szene-grundwissen",
    "Nachrichten": "whatsapp-fremde-nummer",
    "Links": "whatsapp-links",
    "Code": "whatsapp-code",
    "Gruppen": "whatsapp-gruppen",
    "Fotos": "szene-fotos",
    "Stress": "szene-stress",
    "KI": "szene-ki-echt",
    "Handlungsplan": "szene-handlungsplan",
    "Zusammenfassung": "szene-merken"
  },
  facebook: {
    "Profil": "facebook-profil",
    "Beiträge": "szene-grundwissen",
    "Einstellungen": "facebook-einstellungen",
    "Kontakte": "facebook-anfragen",
    "Kommentare": "szene-kommentare",
    "Probleme": "szene-hilfe-holen",
    "Fotos": "szene-fotos",
    "Handlungsplan": "szene-handlungsplan",
    "Zusammenfassung": "szene-merken"
  },
  instagram: {
    "Fotos": "instagram-bearbeitet",
    "Stories": "instagram-story",
    "Standort": "szene-standort",
    "Nachrichten": "szene-private-nachrichten",
    "Kommentare": "szene-kommentare",
    "Medien prüfen": "szene-ki-echt",
    "Handlungsplan": "szene-handlungsplan",
    "Zusammenfassung": "szene-merken"
  },
  youtube: {
    "Videos": "szene-grundwissen",
    "Werbung": "youtube-werbung",
    "Pausen": "youtube-pausen",
    "Gefahr": "youtube-mutproben",
    "Gefühle": "szene-gefuehle",
    "Kommentare": "szene-kommentare",
    "KI": "szene-ki-echt",
    "Handlungsplan": "szene-handlungsplan",
    "Zusammenfassung": "szene-merken"
  },
  snapchat: {
    "Bilder": "snapchat-bilder",
    "Private Bilder": "snapchat-private-bilder",
    "Standort": "szene-standort",
    "Kontakte": "szene-private-nachrichten",
    "Stress": "szene-stress",
    "Handlungsplan": "szene-handlungsplan",
    "Zusammenfassung": "szene-merken"
  },
  tiktok: {
    "Trends": "tiktok-trends",
    "Algorithmus": "tiktok-aehnliche-videos",
    "Nachrichten": "szene-private-nachrichten",
    "Videos": "szene-grundwissen",
    "Kommentare": "szene-kommentare",
    "Gefühle": "szene-gefuehle",
    "KI": "szene-ki-echt",
    "Handlungsplan": "szene-handlungsplan",
    "Zusammenfassung": "szene-merken"
  },
  /* Paket H1 (30.09.2026): Module des neuen Wegs – nur vorhandene Bilder.
     Die alte Zuordnung liegt in geparkt/hilfe-umbau-2026-09-30.js. */
  hilfe: {
    "Was ist los?": "szene-grundwissen",
    "Druck oder Angst": "hilfe-stress",
    "Selbst handeln": "hilfe-handlungsplan",
    "Unterstützung": "hilfe-unterstuetzung",
    "Hilfe-Check": "szene-handlungsplan",
    "Zusammenfassung": "szene-merken"
  },
  ki: {
    "Grundwissen": "ki-chatbot",
    "Sicher nutzen": "szene-grundwissen",
    "Achtung": "ki-fehler",
    "Hilfe": "szene-hilfe-holen",
    "Merken": "szene-merken"
  },
  fakes: {
    "Grundwissen": "fakes-bilder",
    "KI-Fakes": "fakes-stimmen",
    "Prüfen": "fakes-pruefen",
    "Hilfe": "szene-hilfe-holen",
    "Merken": "szene-merken"
  },
  betrug: {
    "Grundwissen": "betrug-grundwissen",
    "Tricks": "betrug-tricks",
    "Schutz": "betrug-schutz",
    "Handlungsplan": "szene-handlungsplan",
    "Hilfe": "betrug-hilfe",
    "Merken": "szene-merken"
  },
  einkaufen: {
    "Einkaufen": "einkaufen-shop",
    "Bezahlen": "einkaufen-bezahlen",
    "Achtung": "einkaufen-achtung",
    "Hilfe": "einkaufen-hilfe",
    "Merken": "szene-merken"
  }
};

/* Szenenbilder für die 36 Kurz-Lektionen (26.09.2026). Vorher fielen sie auf
   die alten Zeichnungen aus assets/lessons/ zurück (Altbestand vom 15.09.),
   weil MODULE_SCENES nur die Module des langen Wegs kennt. Jetzt zeigt auch
   der Kurz-Weg die neue Serie – zugeordnet nach Inhalt der Lektion. */
const KURZ_SCENES = {
  datenschutz: { "Deine Daten": "szene-grundwissen", "Nötig oder nicht?": "datenschutz-private-daten", "Wer sieht es?": "facebook-einstellungen" },
  whatsapp:    { "Unbekannte Nachrichten": "whatsapp-fremde-nummer", "Links in Nachrichten": "whatsapp-links", "Dein WhatsApp-Code": "whatsapp-code" },
  facebook:    { "Dein Facebook-Profil": "facebook-einstellungen", "Unbekannte Personen": "facebook-anfragen", "Komische Nachrichten": "szene-private-nachrichten" },
  instagram:   { "Deine Fotos auf Instagram": "instagram-story", "Fotos von anderen Personen": "szene-fotos", "Nachrichten von Unbekannten": "szene-private-nachrichten" },
  youtube:     { "Videos prüfen": "szene-ki-echt", "Werbung erkennen": "youtube-werbung", "Pausen machen": "youtube-pausen" },
  snapchat:    { "Bilder verschwinden nicht wirklich": "snapchat-bilder", "Dein Standort": "szene-standort", "Niemand darf dich zwingen": "snapchat-private-bilder" },
  tiktok:      { "Was du bei TikTok siehst": "tiktok-trends", "Nachrichten auf TikTok": "szene-private-nachrichten", "Pause machen": "youtube-pausen" },
  hilfe:       { "Was ist los?": "szene-grundwissen", "Was kann ich selbst tun?": "hilfe-handlungsplan", "Welche Hilfe passt?": "hilfe-unterstuetzung" },
  ki:          { "Was ist KI?": "ki-chatbot", "Was kann KI?": "ki-fehler", "Wann musst du aufpassen?": "fakes-stimmen" },
  fakes:       { "Was ist eine Fake-Nachricht?": "fakes-bilder", "Wie erkennst du Fakes?": "fakes-pruefen", "Was tust du bei Fakes?": "szene-hilfe-holen" },
  betrug:      { "Was ist Betrug im Internet?": "betrug-grundwissen", "Wie erkennst du Betrug?": "betrug-tricks", "Was tust du bei Betrug?": "betrug-hilfe" },
  einkaufen:   { "Einkaufen im Internet": "szene-grundwissen", "Gute Shops erkennen": "einkaufen-shop", "Sicher bezahlen": "einkaufen-bezahlen" }
};

/* Start-Seite: Szene passend zur Einstiegs-Situation („Stell dir vor …").
   In Leicht/Einfach steht dort weiter das Piktogramm; in Alltagssprache
   fiel die Seite vorher auf eine alte Zeichnung zurück (26.09.2026). */
const START_SCENES = {
  datenschutz: "datenschutz-private-daten", whatsapp: "whatsapp-fremde-nummer", facebook: "facebook-anfragen",
  instagram: "szene-fotos", youtube: "szene-ki-echt", snapchat: "snapchat-private-bilder",
  tiktok: "tiktok-trends", hilfe: "szene-grundwissen", ki: "ki-chatbot",
  fakes: "fakes-pruefen", betrug: "betrug-tricks", einkaufen: "einkaufen-achtung"
};

/* Einzelne Lektionen im langen Weg, deren Modul-Szene nicht passt (27.09.2026). */
const LEKTION_SCENES = {
  datenschutz: {
    "Wer will deine Daten?": "datenschutz-private-daten",
    "Fotos prüfen": "szene-fotos", "Standort teilen": "szene-standort",
    "Eine Nachricht will deine Daten": "datenschutz-daten-anfrage"
  },
  whatsapp: { "Geld und Betrug": "betrug-hallo-mama", "Die KI in WhatsApp": "ki-chatbot" },
  facebook: { "Beitrag schreiben": "facebook-beitrag" },
  instagram: { "Foto posten": "szene-fotos", "Deine Fotos auf Instagram": "szene-fotos", "Andere Personen auf Fotos": "szene-fotos", "Bearbeitete Bilder": "instagram-bearbeitet" },
  youtube: { "Videos prüfen": "szene-ki-echt" },
  tiktok: { "Videos posten": "tiktok-video-posten" },
  hilfe: { "Unterstützung wirklich holen": "szene-hilfe-holen" },
  ki: {
    "KI macht Fehler": "ki-antwort-pruefen", "So prüfst du eine Antwort": "ki-antwort-pruefen",
    "Was kann KI?": "ki-antwort-pruefen", "Keine privaten Daten": "datenschutz-private-daten",
    "Gesundheit und Geld": null, "KI kann Bilder und Stimmen fälschen": "fakes-stimmen"
  },
  fakes: { "KI-Bilder erkennen": "fakes-bilder", "Gefälschte Videos: Deepfakes": "szene-ki-echt" },
  betrug: {
    "Der Paket-Trick": "betrug-paket", "Der Hallo-Mama-Trick": "betrug-hallo-mama",
    "Schockanrufe": "betrug-schockanruf", "Liebe im Internet": "betrug-liebe",
    "Falsche Gewinne": "betrug-gewinn", "Abo-Fallen": "betrug-abo"
  }
};

function lessonSceneKey(topicId, lesson) {
  if (!lesson || lesson.erinnern) return null;
  const einzeln = LEKTION_SCENES[topicId];
  // Auch null ist eine absichtliche Auswahl: kein unpassendes Ersatzbild.
  const f = einzeln && Object.prototype.hasOwnProperty.call(einzeln, lesson.title)
    ? einzeln[lesson.title]
    : (lesson.module === "Einfach" && KURZ_SCENES[topicId] && KURZ_SCENES[topicId][lesson.title])
      || (lesson.module === "Start" && START_SCENES[topicId])
      || (MODULE_SCENES[topicId] && MODULE_SCENES[topicId][lesson.module]);
  return f && f !== "szene-grundwissen" && f !== "szene-merken" ? f : null;
}
function buildModuleScene(topicId, lesson) {
  const f = lessonSceneKey(topicId, lesson);
  if (!f) return "";
  return `<div class="lesson-scene lesson-scene--small"><img src="assets/scenes/${f}.webp" alt="${escapeHtml(SCENE_ALT[f])}" width="96" height="96" loading="eager" onerror="this.parentNode.remove()"></div>`;
}

function lessonHasExamples(topic, rawLesson, lessons) {
  if (!topic || !rawLesson || rawLesson.erinnern) return false;
  const lesson = resolveLessonContent(rawLesson, languageLevel);
  return !!((Array.isArray(lesson.examples) && lesson.examples.length) || vorbildFuer(topic, rawLesson, lessons));
}
function renderLessonExamples() { renderLesson("beispiele"); }

function renderLesson(teil = "text") {
  stopReading();
  const topic = getCurrentTopic();
  if (!topic) return renderMenu();

  const lessons = getLessonsForMode(topic, currentMode);
  if (!lessons.length) return renderTopicChoice(topic.id);

  currentStep = Math.max(0, Math.min(currentStep, lessons.length - 1));

  const lesson = resolveLessonContent(lessons[currentStep], languageLevel);
  const percent = Math.round(((currentStep + 1) / lessons.length) * 100);
  const modeLabel = currentMode === "short" ? "Lernen" : currentMode === "extra" ? "Mehr dazu" : "Nachlesen";
  const hasPractice = Boolean(lesson.practice);
  const hatBeispiele = lessonHasExamples(topic, lessons[currentStep], lessons);
  lernTeil = teil === "beispiele" && hatBeispiele ? "beispiele" : "text";
  const beispielSeite = lernTeil === "beispiele";

  /* Modul-Cluster-Badge: zeigen wenn neues Modul beginnt (nicht bei Schritt 0/Start) */
  const prevLesson = currentStep > 0 ? lessons[currentStep - 1] : null;
  /* Im Kurz-Modus kein Modul-Abzeichen: dort gibt es nur einen Inhaltsblock,
     das Abzeichen würde bei jedem Rahmen-Wechsel sinnlos aufblitzen. */
  const isNewModule = currentMode !== "short" && prevLesson && lesson.module
    && lesson.module !== "Start" && prevLesson.module !== lesson.module;
  const moduleBadge = isNewModule
    ? `<div class="module-cluster-badge" role="status" aria-live="polite">
         <span class="module-cluster-label">Jetzt geht es um:</span>
         <span class="module-cluster-name">${escapeHtml(lesson.module)}</span>
       </div>`
    : "";

  /* Die .progress-area bleibt aus: sie ist eine eigene Karte mit Meta-Zeile und
     kostet 77 px – mehr als die Punkte-Reihe, die sie ersetzen sollte. Der
     schlanke Balken steckt stattdessen im Wegweiser (buildProgress, rund 44 px). */
  setProgressVisible(false);
  /* Die untere Leiste bleibt auf JEDEM Lernschritt stehen (Prüfbericht B2).
     Vorher wurde sie bei Lektionen mit Übung ausgeblendet – damit war sie auf
     11 von 13 Schritten weg und Zurückblättern unmöglich. Jetzt bleibt die
     Position der Knöpfe konstant; „Weiter" ist bei offener Übung nur
     deaktiviert (COGA: vorhersehbare Bedienung, WCAG 3.2.3). */
  setBottomNavVisible(true);
  setHeader(topic.title, modeLabel, `Schritt ${currentStep + 1} von ${lessons.length}`, lesson.module || "Lernen", percent);
  setOrientation(`Du lernst: ${topic.title}. Das ist Schritt ${currentStep + 1} von ${lessons.length}.`);
  /* Auf Lernschritten sitzen Titelkarte und Orientierungssatz direkt
     aufeinander (siehe body.lesson-view in styles.css). Beide bleiben
     vollständig erhalten – sie werden nur zu einem Block zusammengezogen
     statt zwei Karten mit Abstand dazwischen. setHeader() nimmt die Klasse
     auf jeder anderen Seite wieder weg. */
  document.body.classList.add("lesson-view");
  /* Seit 28.09.2026 mit Titel: Beim Laden muss derselbe Titel an derselben
     Stelle stehen, sonst zeigt die Nummer auf eine andere Lektion. */
  lastLessonContext = { topicId: topic.id, step: currentStep, mode: currentMode, titel: (lessons[currentStep] && lessons[currentStep].title) || "" };
  if (beispielSeite) lastLessonContext.teil = "beispiele";
  saveLastLesson();
  showNav(true, true, currentStep === lessons.length - 1 ? weiterTextAmEnde(topic) : "Weiter");
  if (hasPractice && (!hatBeispiele || beispielSeite)) setNextWaitsForPractice();
  else if (hatBeispiele && !beispielSeite) nextButton.textContent = "Weiter";

  const plain = (arr) => Array.isArray(arr)
    ? arr.map(i => (typeof i === "object" && i.text) ? i.text : i).join(" ")
    : "";

  /* Text-Sätze — unterstützt Strings und {text, pictogram}-Objekte */
  const gezeigtePiktos = new Set();
  const textRows = Array.isArray(lesson.text)
    ? lesson.text.map(item => {
        if (typeof item === "object" && item.text) {
          const img = satzPiktoBild(item, gezeigtePiktos);
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

  /* Beispiele: Text ODER { art: "A"|"B"|"C", text } (Datenschutz, Paket 2).
     Mit `art` steht davor sichtbar, um welche Art es geht – nicht nötig,
     nötig, kommt darauf an –, damit „private Daten = immer Nein“ gar nicht
     erst entsteht. Reine Texte (alle anderen Themen) bleiben unverändert. */
  const beispielText = (item) => {
    if (!item || typeof item !== "object") return String(item ?? "");
    const art = lernwegText("beispielArt")[item.art];
    return (art ? art + ": " : "") + (item.text || "");
  };
  const beispielHtml = (item) => {
    if (!item || typeof item !== "object") return escapeHtml(item);
    const art = lernwegText("beispielArt")[item.art];
    return (art ? `<strong class="beispiel-art">${escapeHtml(art)}:</strong> ` : "") + escapeHtml(item.text || "");
  };
  const examples = Array.isArray(lesson.examples) && lesson.examples.length
    ? `<div class="access-box example">${beispielSeite ? "" : "<h3>Beispiele aus dem Alltag</h3>"}<ul>${lesson.examples.map(item => `<li>${beispielHtml(item)}</li>`).join("")}</ul>${blockRead("Beispiele aus dem Alltag. " + lesson.examples.map(beispielText).join(" "))}</div>`
    : "";

  const warning = lesson.warning
    ? `<div class="access-box warning"><h3>Achtung</h3><p>${escapeHtml(lesson.warning)}</p>${blockRead("Achtung. " + lesson.warning)}</div>`
    : "";

  const success = lesson.success
    ? `<div class="access-box success"><h3>Gut</h3><p>${escapeHtml(lesson.success)}</p>${blockRead("Gut. " + lesson.success)}</div>`
    : "";

  /* Stufe 2 (Lerndesign-Vorschlag): nutzt jetzt den gemeinsamen Baustein
     buildRememberBox() statt eigenem Markup. Titel und Text unverändert
     "Wichtig" / lesson.remember - reine Umstellung, kein neuer Text. */
  const remember = buildRememberBox("Wichtig", lesson.remember, { vorlesen: false });

  const isEinfachLesson = simpleMode;
  // Die Zuordnung folgt dem Originaltitel, auch bei anderer Sprachstufe.
  const scene = buildModuleScene(topic.id, lessons[currentStep]);

  /* Lernziele und Fehler-Normalisierung nur im Start-Screen */
  const isStartLesson = lesson.module === "Start";

  const wegZiele = zieleFuerWeg(topic, currentMode);
  const learningGoals = isStartLesson && wegZiele.length
    ? `<div class="learning-goals-box">
         <h3>Danach kannst du:</h3>
         <ul class="learning-goals-list">
           ${wegZiele.map(g => `<li>${escapeHtml(g)}</li>`).join("")}
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

  aufUebungsSeite = false;
  content.innerHTML = `
    ${buildLernLeiste(currentStep + 1, lessons.length)}
    ${buildWegweiser(`Du lernst: ${topic.title}. Das ist Schritt ${currentStep + 1} von ${lessons.length}.`, { index: currentStep, total: lessons.length })}
    ${moduleBadge}
    <article class="card lesson-card${beispielSeite ? " beispiel-seite" : ""} page-flip page-flip--${pageDirection}${isEinfachLesson ? " lesson-card--einfach" : ""}" style="${getTopicColorStyle(topic.id)}" data-readable="true">
      ${hatBeispiele ? `<p class="lern-teil-label">${RUHIG_TEXT.lernen} · Teil ${beispielSeite ? 2 : 1} von 2</p>` : ""}
      <div class="symbol-heading lesson-heading">
        ${(!beispielSeite && scene) || `<span class="access-box-symbol" aria-hidden="true">${getIconHtml(lesson.icon || topic.icon || "start")}</span>`}
        <h2>${escapeHtml(beispielSeite ? RUHIG_TEXT.beispiele : (lesson.title || topic.title))}</h2>
      </div>
      ${beispielSeite ? "" : lesson.erinnern
        ? erinnernHtml((lesson.kettePlan ? buildKetteMerkListe(lesson.kettePlan) : "") + text + bullets, lesson.erinnernFrage, lesson.erinnernKnopf)
        : text}
      ${beispielSeite ? "" : learningGoals}
      ${beispielSeite ? "" : safeNotice}
      ${beispielSeite || lesson.erinnern ? "" : bullets}
      ${!beispielSeite && lesson.ketteSchritt ? buildKetteBezug(topic.id, lesson.ketteSchritt) : ""}
      ${!beispielSeite && lesson.kette ? buildKetteCard(lesson.kette) : ""}
      ${beispielSeite || !hatBeispiele ? examples : ""}
      ${beispielSeite ? "" : warning}
      ${beispielSeite ? "" : success}
      ${beispielSeite || !hatBeispiele ? vorbildHtml(topic, lessons[currentStep], lessons, { offen: beispielSeite }) : ""}
      ${stationBadge("merken")}
      ${beispielSeite || !hatBeispiele ? remember : ""}
      ${begleitTippHtml(topic, "lerntext")}
    </article>
  `;
  focusContent();
  renderLegalFooter();

  const ort = { t: topic.id, mode: currentMode, step: currentStep, teil: lernTeil };
  stelleMerken(() => { currentTopicId = ort.t; currentMode = ort.mode; currentStep = ort.step; renderLesson(ort.teil); });
  /* Richtung zurücksetzen: Standard ist vorwärts (z. B. beim Einstieg). */
  pageDirection = "forward";

  /* Auto-Vorlesen im Hör-Modus übernimmt zentral focusContent(). */
}

/* ============================================================
   HANDLUNGS-KETTEN (Inhalt in ketten-de.js)
   ------------------------------------------------------------
   Ein Ablauf statt einer Frage: Die Person geht eine Handlung
   Schritt für Schritt durch. Es gibt KEINE falsche Antwort –
   errorless (§3 Došen: angstfreie Fehlerkultur). Ein Schritt pro
   Bildschirm (§3 Segmentierung).

   Prompt-Fading über die Zahl der Durchgänge:
     Stufe 1  alles sichtbar
     Stufe 2  Warum erst auf Antippen
     Stufe 3  alle Sätze auf einem Bildschirm

   Keine Zeitmessung, keine Bewertung, kein Abbruch von außen
   (§9 COGA: keine Zeitlimits).
   ============================================================ */
const KETTEN_KEY = "ketten-lauf";
let ketteId = null;
let ketteIndex = 0;
let ketteWarumOffen = false;
let ketteHilfeOffen = false;

function ketteDaten(id) {
  return (typeof KETTEN !== "undefined" && KETTEN) ? (KETTEN[id] || null) : null;
}

/* Sichtbare Bezeichnung des Plans (H2-Korrektur, 30.09.2026): Eine Kette kann
   ein eigenes Wort haben (`KETTEN[id].bezeichnung`, z. B. „Hilfe-Check“). Dann
   steht es in den Bedientexten rund um den Plan statt „Plan“ („Plans“ →
   „Hilfe-Checks“). Das Wort muss wie „Plan“ männlich sein, damit die Sätze
   stimmen. Ohne Angabe bleibt jeder Text, wie er ist (alle anderen Themen). */
function planWort(text, idOderKette) {
  const k = (idOderKette && typeof idOderKette === "object") ? idOderKette : ketteDaten(idOderKette);
  const w = k && typeof k.bezeichnung === "string" ? k.bezeichnung.trim() : "";
  return w ? String(text).replace(/\bPlan(s?)\b/g, (m, s) => w + s) : text;
}

/* Wie oft hat DIESE Person die Kette schon gemacht? Eine Zahl je Thema
   im Profil-Speicher – lokale Einstellung, kein personenbezogenes Datum,
   kein Versand (§14). */
/* Paket 6 (29.09.2026): Die Datenschutz-Kette ist seit Paket 2 eine andere
   (5 Schritte statt „Dein Stopp-Plan“). Durchgänge der alten Kette dürfen
   die neue nicht verkürzen – wer den alten Plan zweimal gemacht hatte, sähe
   die neue Kette sonst nie ausführlich. Gezählt wird darum unter eigener
   Kennung; alte Zahlen bleiben liegen und werden nicht mehr gelesen. */
const KETTE_NEU_SEIT = { datenschutz: "p2" };
function ketteZaehlId(id) {
  return KETTE_NEU_SEIT[id] ? id + "@" + KETTE_NEU_SEIT[id] : id;
}
function ketteLaeufe(id) {
  try { return Number(JSON.parse(pGet(KETTEN_KEY) || "{}")[ketteZaehlId(id)]) || 0; }
  catch (e) { return 0; }
}
function ketteLaufPlus(id) {
  try {
    const r = JSON.parse(pGet(KETTEN_KEY) || "{}");
    const k = ketteZaehlId(id);
    r[k] = (Number(r[k]) || 0) + 1;
    pSet(KETTEN_KEY, JSON.stringify(r));
  } catch (e) { /* nichts tun */ }
}
/* Befund T08 (21.09.2026): Die Hilfe wurde allein über die Zahl der
   Durchgänge verkürzt. Gemessen ist damit nur, wie oft jemand „Gemacht"
   getippt hat – nicht, ob er den Plan im Alltag anwenden kann. Wer die
   ausführliche Fassung weiter braucht, musste sie bisher bei JEDEM Aufruf
   neu über „Lieber einzeln durchgehen" holen; beim nächsten Start stand
   wieder der Kurzplan da. Jetzt entscheidet die Person, und die
   Entscheidung hält.

   Gespeichert wird das im vorhandenen Schlüssel `ketten-lauf` unter
   `::ausfuehrlich` – keine neue Datenkategorie, kein neuer Schlüssel
   (§14). Der Doppelpunkt-Präfix kann keine Themen-Kennung sein, die
   Zählung `ketteLaeufe` bleibt davon unberührt. Gelöscht wird es mit
   „Wiedereinstieg löschen" und beim Löschen des Profils. */
const KETTE_AUSFUEHRLICH = "::ausfuehrlich";

function ketteWillAusfuehrlich(id) {
  try {
    const r = JSON.parse(pGet(KETTEN_KEY) || "{}");
    return Boolean(r[KETTE_AUSFUEHRLICH] && r[KETTE_AUSFUEHRLICH][id]);
  } catch (e) { return false; }
}

function ketteAusfuehrlichSetzen(id, an) {
  try {
    const r = JSON.parse(pGet(KETTEN_KEY) || "{}");
    const w = r[KETTE_AUSFUEHRLICH] || {};
    if (an) w[id] = true; else delete w[id];
    r[KETTE_AUSFUEHRLICH] = w;
    pSet(KETTEN_KEY, JSON.stringify(r));
  } catch (e) { /* nichts tun */ }
}

function ketteStufe(id) {
  /* Ausdrückliche Wahl schlägt die Durchgangs-Zahl. */
  if (ketteWillAusfuehrlich(id)) return 1;
  const n = ketteLaeufe(id);
  return n <= 0 ? 1 : (n === 1 ? 2 : 3);
}

/* Die beiden Wege der Wahl. Beide sind jederzeit umkehrbar (UDL: Wahl
   statt Zwang; §9 COGA: vorhersehbares Verhalten). */
function ketteAusfuehrlichWaehlen() {
  ketteAusfuehrlichSetzen(ketteId, true);
  announce("Du siehst jetzt wieder alle Schritte einzeln. Das bleibt so, bis du es änderst.");
  ketteSchritteZeigen();
}

function ketteKurzWaehlen() {
  ketteAusfuehrlichSetzen(ketteId, false);
  announce(planWort("Du siehst jetzt den kurzen Plan.", ketteId));
  ketteIndex = 0;
  renderKetteKurz();
}

/* Text je Sprach-Ebene. Fallback-Kette genau wie resolveLessonContent (§2):
   standard -> einfach -> leicht. So bleibt die Seite immer funktionsfähig. */
function ketteText(feld) {
  if (!feld) return "";
  if (typeof feld === "string") return feld;
  if (languageLevel === "standard") return feld.standard || feld.einfach || feld.leicht || "";
  if (languageLevel === "einfach")  return feld.einfach  || feld.leicht  || "";
  return feld.leicht || feld.einfach || "";
}

/* Handlungsschritt (Entscheidung 29.09.2026, PROJEKTREGELN §2): Der Satz,
   was die Person tun soll (`tun`), ist LERNINHALT. Er darf ein Text sein
   (gleich in allen Stufen – so stehen die freigegebenen Pläne heute) oder
   { leicht, einfach, standard }. Angezeigt wird die Stufe (Rückfall wie
   ketteText); Vergleiche und Regel-Zuordnung lesen die Leicht-Fassung
   (ketteTunLeicht). Bedien-Wörter rund um den Plan („Gemacht“, „Schritt 1
   von 5“, „Dein Plan“) bleiben in allen Stufen gleich. */
function ketteTun(schritt) {
  return ketteText(schritt && schritt.tun);
}
function ketteTunLeicht(schritt) {
  const t = schritt && schritt.tun;
  return typeof t === "string" ? t : ((t && (t.leicht || t.einfach || t.standard)) || "");
}

/* Rückfall-Regel einer Kette (Datenschutz, Paket 2, 28.09.2026): eine
   dauerhafte Zeile, die in jedem Schritt, im Kurzplan und am Ende steht.
   Nur wenn die Kette das Feld `rueckfall` hat – alle anderen Pläne bleiben
   unverändert. */
function ketteRueckfallHtml(k) {
  const t = k ? ketteText(k.rueckfall) : "";
  return t ? `<p class="kette-rueckfall">${escapeHtml(t)}</p>` : "";
}

/* Plan-Schritt in einer Lektion (Datenschutz, Paket 2): Jede Einheit zeigt,
   zu welchem Schritt des Plans sie gehört. So entsteht der Plan Stück für
   Stück, bevor er als Ganzes kommt. Daten: lesson.ketteSchritt (Zahl oder
   Liste). Der Satz ist wörtlich der `tun`-Satz der Kette. */
function buildKetteBezug(topicId, schritte) {
  const k = ketteDaten(topicId);
  if (!k) return "";
  const liste = (Array.isArray(schritte) ? schritte : [schritte])
    .map(n => ({ n: Number(n), s: k.liste[Number(n) - 1] }))
    .filter(x => x.s);
  if (!liste.length) return "";
  return liste.map(x => `
      <p class="kette-bezug"><span class="kette-bezug-nr" aria-hidden="true">${x.n}</span><span>${escapeHtml(planWort(lernwegText("planSchritt"), topicId).replace("{n}", x.n))} <strong>${escapeHtml(ketteTun(x.s))}</strong></span></p>`).join("");
}

/* Der ganze Plan als Liste zum Aufdecken in „Das merke ich mir“. */
function buildKetteMerkListe(topicId) {
  const k = ketteDaten(topicId);
  if (!k) return "";
  return `
      <div class="kette-merken">
        <h3>${escapeHtml(k.titel)}</h3>
        <ol class="kette-kurz-liste">${k.liste.map((s, i) => `
          <li class="kette-kurz-item"><span class="kette-kurz-num" aria-hidden="true">${i + 1}</span><span>${escapeHtml(ketteTun(s))}</span></li>`).join("")}</ol>
        ${ketteRueckfallHtml(k)}
      </div>`;
}

/* Einladungs-Karte in der Lektion. Kein eigener Themen-Schritt – sonst
   wuechse jedes Thema um einen Schritt und der Kurz-Modus (5 Schritte)
   müsste neu austariert werden. */
function buildKetteCard(id) {
  const k = ketteDaten(id);
  if (!k) return "";
  const stufe = ketteStufe(id);
  const knopf = planWort(stufe >= 3 ? "Plan durchgehen" : "Plan üben", id);
  const einstieg = ketteText(k.einstieg);
  return `
    <div class="access-box kette-card">
      ${stationBadge("handeln")}
      <h3>${escapeHtml(k.titel)}</h3>
      <p>${escapeHtml(einstieg)}</p>
      ${ketteRueckfallHtml(k)}
      <p class="kette-meta">${k.liste.length} Schritte. Du kannst nichts falsch machen.</p>
      <button type="button" class="utility-button" onclick="${ketteFilm(id) && stufe === 1 ? `ketteFilmStart('${escapeHtml(id)}')` : `ketteStart('${escapeHtml(id)}')`}">${knopf}</button>
      ${blockRead(k.titel + ". " + einstieg)}
    </div>`;
}

/* ============================================================
   FILM – der Einstieg in eine Kette (Inhalt in ketten-de.js)
   ------------------------------------------------------------
   Vier Takte: Ruhe → Störung → Entscheidung → Auflösung.

   Regeln aus §10.1, die hier konkret werden:
   - Inline-SVG mit CSS-Keyframes. Kein JS-Animation, keine
     externe Datei, kein Netzaufruf.
   - Farben ausschliesslich über CSS-Klassen und Token. Kein
     fill="#..."-Attribut, damit der Dunkelmodus nicht bricht.
   - KEINE Hautflächen. Die Plattform zeichnet Menschen seit jeher
     ohne Hautton (siehe pikto-person: Kopf als Kreis in
     --accent-soft mit Kontur in --accent). Der Film hält sich
     daran. Entschieden am 13.09.2026.
   - Ein Gesicht gibt es trotzdem: zwei Augen, zwei Brauen, ein
     Mund-Strich, drei Zustände. Innere Zustände (Anspannung,
     Erleichterung) sind ohne Gesicht kaum ikonisch darstellbar –
     die Forschung nennt den Verzicht darauf ausdrücklich
     didaktisch fragwürdig. Die Piktogramme bleiben unverändert
     gesichtslos: Ein Piktogramm ist ein stehendes Etikett, der
     Film zeigt einen Verlauf. Zwei Aufgaben, zwei Lösungen.
   - Kein Autoplay. Jeder Takt wird angetippt, damit WCAG 2.2.2
     gar nicht erst greift und die Person das Tempo bestimmt.
   - prefers-reduced-motion: Die Zustände werden trotzdem gesetzt,
     nur die Übergänge fallen weg. Man blättert dann vier
     Standbilder durch – der Inhalt geht nicht verloren.
   ============================================================ */
let filmTakt = 0;

function ketteFilm(id) {
  const k = ketteDaten(id);
  return (k && k.film && Array.isArray(k.film.takte) && k.film.takte.length) ? k.film : null;
}

/* Die Bühne. Alle Formen tragen Klassen; gefärbt wird in styles.css. */
function filmSvg(beschreibung) {
  return `
  <svg class="film-buehne" viewBox="0 0 200 170" role="img" aria-label="${escapeHtml(beschreibung || "")}">
    <!-- Ruhe-Welle: kommt erst im letzten Takt -->
    <circle class="f-welle" cx="64" cy="85" r="30" aria-hidden="true"/>

    <!-- Handy -->
    <g class="f-handy" aria-hidden="true">
      <rect class="f-handy-rahmen" x="24" y="18" width="80" height="134" rx="13"/>
      <g class="f-vorne">
        <rect class="f-schirm" x="31" y="26" width="66" height="118" rx="7"/>
        <g class="f-blase">
          <rect class="f-blase-form" x="37" y="40" width="54" height="34" rx="9"/>
          <rect class="f-zeile" x="44" y="50" width="40" height="5" rx="2.5"/>
          <rect class="f-zeile" x="44" y="60" width="24" height="5" rx="2.5"/>
        </g>
      </g>
      <g class="f-hinten">
        <rect class="f-rueck" x="31" y="26" width="66" height="118" rx="7"/>
        <circle class="f-linse" cx="64" cy="46" r="6"/>
      </g>
      <circle class="f-punkt" cx="86" cy="36" r="7"/>
    </g>

    <!-- Person. Kopf und Koerper wie pikto-person, dazu ein
         reduziertes Gesicht: zwei Augen, zwei Brauen, ein Mund. -->
    <g class="f-figur" aria-hidden="true">
      <path class="f-koerper" d="M128 147 a26 22 0 0 1 52 0 z"/>
      <g class="f-kopf-gruppe">
        <circle class="f-kopf" cx="154" cy="88" r="22"/>
        <!-- Das GESICHT wandert, der Kopf bleibt rund. Eine reine
             Drehung des ganzen Kopfes liest sich als Neigung
             (Neugier). Verschobene Zuege lesen sich als Abwenden. -->
        <g class="f-gesicht">
          <circle class="f-auge" cx="146" cy="85" r="3"/>
          <circle class="f-auge" cx="162" cy="85" r="3"/>
          <path class="f-braue f-braue--ruhig" d="M141 76 h9"/>
          <path class="f-braue f-braue--ruhig" d="M158 76 h9"/>
          <!-- Besorgt, nicht boese: die INNEREN Enden gehen nach oben.
               Nach innen-unten gezogene Brauen lesen sich als Wut - bei
               einem Betrugs-Thema waere das fatal, weil die Person es
               auf sich beziehen kann (§3 Došen, §4). -->
          <path class="f-braue f-braue--eng" d="M141 79 l9 -5"/>
          <path class="f-braue f-braue--eng" d="M167 79 l-9 -5"/>
          <path class="f-mund f-mund--ruhig" d="M146 98 h16"/>
          <path class="f-mund f-mund--eng" d="M148 99 h12"/>
          <path class="f-mund f-mund--froh" d="M145 96 q9 8 18 0"/>
        </g>
      </g>
    </g>
  </svg>`;
}

function ketteFilmStart(id) {
  if (!ketteFilm(id)) return ketteStart(id);
  ketteId = id;
  filmTakt = 0;
  renderKetteFilm();
}

function renderKetteFilm() {
  const k = ketteDaten(ketteId);
  const f = ketteFilm(ketteId);
  if (!f) return renderMenu();
  const gesamt = f.takte.length;
  filmTakt = Math.max(0, Math.min(filmTakt, gesamt - 1));
  const takt = f.takte[filmTakt];
  const letzter = filmTakt === gesamt - 1;
  const satz = ketteText(takt.text);

  ketteKopf(k, `Bild ${filmTakt + 1} von ${gesamt}`);

  content.innerHTML = `
    ${lernRahmenLeiste()}
    ${buildWegweiser(f.titel + ".", { index: filmTakt, total: gesamt, wort: "Bild", ohneText: true })}
    <article class="card kette-step film-karte" data-takt="${escapeHtml(takt.name)}" data-readable="true">
      <p class="kette-zaehler">Bild ${filmTakt + 1} von ${gesamt}</p>
      ${filmSvg(f.bildbeschreibung)}
      <p class="film-satz" role="status">${escapeHtml(satz)}</p>
      ${blockRead(satz)}
      <button type="button" class="kette-done" onclick="filmWeiter()">${letzter ? planWort("Und jetzt dein Plan", ketteId) : "Weiter"}</button>
    </article>
    <div class="kette-fuss">
      ${filmTakt > 0 ? `<button type="button" class="plain-back-button" onclick="filmZurueck()">← Ein Bild zurück</button>` : ""}
      <button type="button" class="plain-back-button" onclick="ketteStart('${escapeHtml(ketteId)}')">Film überspringen</button>
      <button type="button" class="plain-back-button" onclick="ketteAbbrechen()">${ketteRueckText()}</button>
    </div>
  `;
  const kid = ketteId, taktJetzt = filmTakt;
  stelleMerken(() => { ketteId = kid; filmTakt = taktJetzt; renderKetteFilm(); });
  focusContent();
  renderLegalFooter();
}

function filmWeiter() {
  const f = ketteFilm(ketteId);
  if (!f) return renderMenu();
  if (filmTakt >= f.takte.length - 1) return ketteStart(ketteId);
  filmTakt++;
  renderKetteFilm();
}
function filmZurueck() { if (filmTakt > 0) filmTakt--; renderKetteFilm(); }

function ketteStart(id) {
  if (!ketteDaten(id)) return;
  ketteId = id;
  ketteIndex = 0;
  ketteWarumOffen = false;
  ketteHilfeOffen = false;
  if (ketteStufe(id) >= 3) return renderKetteKurz();
  renderKetteSchritt();
}

function ketteKopf(k, unterzeile) {
  stopReading();
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader(k.titel, "Handeln", planWort("Plan", k), unterzeile, 0);
  hideHeaderSign();
  showNav(false, false);
}

/* Die stehende Situation der Kette (21.09.2026).
   Baut denselben Handy-Bildschirm wie das Übungs-Handy und das
   Trainings-Postfach – gleiche Bausteine, gleicher Renderer
   (scenarioElementHtml), gleiches Ehrlichkeits-Band. Neu ist nur, dass
   er WÄHREND des Plans stehen bleibt.

   Bewusst still: kein Knopf, keine Frage, nichts zum Antippen. Sie ist
   der Gegenstand, auf den sich der Handlungssatz bezieht – nicht ein
   zweites Angebot, das um Aufmerksamkeit konkurriert (§3 CLT). */
function ketteSituationHtml(id) {
  const k = ketteDaten(id);
  const sit = k && k.situation;
  if (!sit || !Array.isArray(sit.inhalt) || !sit.inhalt.length) return "";
  /* Paket 5: Texte der Situation je Stufe (ketteText lässt Strings unverändert). */
  const inhalt = sit.inhalt.map(el => scenarioElementHtml(el && typeof el.text === "object" ? Object.assign({}, el, { text: ketteText(el.text) }) : el)).join("");
  /* Kein Handy-Rahmen und keine Kanal-Zeile wie im Übungs-Handy: Dort IST
     der Bildschirm die Aufgabe, hier ist er nur der Anlass. Gemessen am
     21.09.2026 kosteten Rahmen, Band und Vorlese-Knopf zusammen 141 px –
     mehr als die Nachricht selbst (139 px) – und schoben den
     Handlungssatz unter die Falz. Jetzt steht der Hinweis „nur zum Üben"
     mit dem Vorlese-Knopf in EINER Zeile über der Nachricht. */
  return `
    <div class="kette-situation">
      <div class="kette-situation-kopf">
        <p class="kette-situation-band">${escapeHtml(sit.ort ? sit.ort + " · nur zum Üben" : "Nur zum Üben")}</p>
        ${blockRead(ketteSituationText(id))}
      </div>
      <div class="phone-screen kette-situation-screen">${inhalt}</div>
    </div>`;
}

/* Vorlese-Text der Situation. Eigener leiser Knopf am Block, damit die
   Nachricht nicht bei JEDEM Schritt erneut mitgelesen wird – hören kann
   sie trotzdem jederzeit, wer sie braucht. */
function ketteSituationText(id) {
  const k = ketteDaten(id);
  const sit = k && k.situation;
  if (!sit || !Array.isArray(sit.inhalt)) return "";
  const teile = [];
  if (sit.ort) teile.push(sit.ort + ".");
  sit.inhalt.forEach(el => {
    if (!el) return;
    if (el.typ === "liste") (el.eintraege || []).forEach(e => {
      if (e.von) teile.push(e.von + ".");
      if (e.vorschau) teile.push(e.vorschau);
    });
    else if (el.typ === "nachricht" || el.typ === "eigene") {
      if (el.von) teile.push("Von " + el.von + ".");
      if (el.text) teile.push(ketteText(el.text));
    }
    else if (el.typ === "hinweis" && el.text) teile.push(el.text);
  });
  return teile.join(" ");
}

/* Ein Schritt pro Bildschirm. */
function renderKetteSchritt() {
  const k = ketteDaten(ketteId);
  if (!k) return renderMenu();
  const gesamt = k.liste.length;
  ketteIndex = Math.max(0, Math.min(ketteIndex, gesamt - 1));
  const schritt = k.liste[ketteIndex];
  const stufe = ketteStufe(ketteId);
  const letzter = ketteIndex === gesamt - 1;

  ketteKopf(k, `Schritt ${ketteIndex + 1} von ${gesamt}`);

  const pikto = schritt.pictogram
    ? `<img class="kette-pikto" src="${pictoSrc(schritt.pictogram)}" alt="" width="96" height="96" aria-hidden="true" onerror="this.remove()">`
    : "";

  const warumText = ketteText(schritt.warum);
  /* Stufe 1: Begründung steht da. Stufe 2: erst auf Antippen. */
  const warum = !warumText ? "" : (stufe === 1 || ketteWarumOffen)
    ? `<p class="kette-warum">${escapeHtml(warumText)}</p>`
    : `<button type="button" class="plain-back-button" onclick="ketteWarumZeigen()">Warum?</button>`;

  const hilfeText = ketteText(schritt.hilfe);
  const hilfe = !hilfeText ? "" : ketteHilfeOffen
    ? `<p class="kette-hilfe" role="status">${escapeHtml(hilfeText)}</p>`
    : `<button type="button" class="plain-back-button" onclick="ketteHilfeZeigen()">Ich brauche Hilfe</button>`;

  const vorlese = [ketteTun(schritt), warumText].filter(Boolean).join(" ");

  content.innerHTML = `
    ${lernRahmenLeiste()}
    ${/* Der Wegweiser traegt den Fortschrittsbalken, die Schritt-Zahl steht
         gross in der Karte. Beides nebeneinander waere dieselbe Auskunft
         zweimal auf 100 px (§3 Kohaerenz). */""}
    ${buildWegweiser(k.titel + ".", { index: ketteIndex, total: gesamt })}
    <article class="card kette-step" data-readable="true">
      <p class="kette-zaehler">Schritt ${ketteIndex + 1} von ${gesamt}</p>
      ${pikto}
      <h2 class="kette-tun">${escapeHtml(ketteTun(schritt))}</h2>
      ${warum}
      ${/* Die Situation steht NACH dem Handlungssatz, nicht davor. Gemessen
           am 21.09.2026 auf 375 x 812: Oberhalb gestellt schob sie den
           Handlungssatz auf y=766 und „Gemacht" auf y=977 – beide unter die
           Falz. Die Hauptaktion muss oben bleiben (§3 CLT); die Nachricht
           ist der Gegenstand, auf den sie sich bezieht, und gehört
           unmittelbar darunter. */""}
      ${ketteSituationHtml(ketteId)}
      ${blockRead(vorlese)}
      <button type="button" class="kette-done" data-leiste="haupt" onclick="ketteWeiter()">${letzter ? "Gemacht – fertig" : "Gemacht"}</button>
      ${hilfe}
      ${/* Unter der Hauptaktion, damit „Gemacht“ oben bleibt (§3 CLT). */""}
      ${ketteRueckfallHtml(k)}
    </article>
    <div class="kette-fuss">
      ${ketteIndex > 0 ? `<button type="button" class="plain-back-button" onclick="ketteZurueck()">← Zurück</button>` : ""}
      ${(ketteWillAusfuehrlich(ketteId) || ketteLaeufe(ketteId) >= 2)
        ? `<button type="button" class="plain-back-button" onclick="ketteKurzWaehlen()">${planWort("Kurzen Plan zeigen", ketteId)}</button>` : ""}
      <button type="button" class="plain-back-button" onclick="ketteAbbrechen()">${ketteRueckText()}</button>
    </div>
  `;
  const ks = { id: ketteId, i: ketteIndex, warum: ketteWarumOffen, hilfe: ketteHilfeOffen };
  stelleMerken(() => { ketteId = ks.id; ketteIndex = ks.i; ketteWarumOffen = ks.warum; ketteHilfeOffen = ks.hilfe; renderKetteSchritt(); });
  focusContent();
  renderLegalFooter();
}

function ketteWarumZeigen() { ketteWarumOffen = true; renderKetteSchritt(); }
function ketteHilfeZeigen() { ketteHilfeOffen = true; renderKetteSchritt(); }

function ketteWeiter() {
  const k = ketteDaten(ketteId);
  if (!k) return renderMenu();
  ketteWarumOffen = false;
  ketteHilfeOffen = false;
  if (ketteIndex >= k.liste.length - 1) return renderKetteEnde();
  ketteIndex++;
  announce(`Schritt ${ketteIndex + 1} von ${k.liste.length}.`);
  renderKetteSchritt();
}

function ketteZurueck() {
  ketteWarumOffen = false;
  ketteHilfeOffen = false;
  if (ketteIndex > 0) ketteIndex--;
  renderKetteSchritt();
}

/* Abbrechen zählt NICHT als Durchgang – sonst würde die Hilfe kleiner,
   ohne dass die Person den Plan je zu Ende gegangen ist. */
/* Rückweg aus einem Plan: normalerweise zur Lektion. Wurde er von der
   Abschluss-Seite aus geöffnet (Lernweg, 26.09.2026), dorthin zurück. */
let ketteRueckkehr = null;
function ketteRueckText() { return ketteRueckkehr ? "← Zum Abschluss" : "← Zur Lektion"; }

function ketteVomAbschluss(topicId) {
  ketteRueckkehr = () => renderCompletionPage(topicId);
  if (ketteFilm(topicId) && ketteStufe(topicId) === 1) return ketteFilmStart(topicId);
  ketteStart(topicId);
}

function ketteAbbrechen() {
  ketteId = null;
  if (ketteRueckkehr) { const ziel = ketteRueckkehr; ketteRueckkehr = null; return ziel(); }
  renderLesson();
}

/* Stufe 3: alles auf einem Bildschirm zum Selbst-Durchgehen. */
function renderKetteKurz() {
  const k = ketteDaten(ketteId);
  if (!k) return renderMenu();
  ketteKopf(k, planWort("Dein Plan", k));
  const zeilen = k.liste.map((s, i) => `
    <li class="kette-kurz-item">
      <span class="kette-kurz-num" aria-hidden="true">${i + 1}</span>
      <span>${escapeHtml(ketteTun(s))}</span>
    </li>`).join("");
  const vorlese = k.liste.map(s => ketteTun(s)).join(" ");
  content.innerHTML = `
    ${lernRahmenLeiste()}
    ${buildWegweiser(`${k.titel}. ${planWort("Dein Plan auf einen Blick.", k)}`)}
    <article class="card kette-step" data-readable="true">
      <h2>${escapeHtml(k.titel)}</h2>
      <p>Du kennst den Plan schon. Geh ihn einmal für dich durch.</p>
      ${ketteSituationHtml(ketteId)}
      <ol class="kette-kurz-liste">${zeilen}</ol>
      ${ketteRueckfallHtml(k)}
      ${blockRead(k.titel + ". " + vorlese + (k.rueckfall ? " " + ketteText(k.rueckfall) : ""))}
      <button type="button" class="kette-done" data-leiste="haupt" onclick="ketteWeiterKurz()">Gemacht</button>
    </article>
    <div class="kette-fuss">
      <button type="button" class="plain-back-button" onclick="ketteAusfuehrlichWaehlen()">Lieber einzeln durchgehen</button>
      <button type="button" class="plain-back-button" onclick="ketteAbbrechen()">${ketteRueckText()}</button>
    </div>
  `;
  const kid = ketteId;
  stelleMerken(() => { ketteId = kid; renderKetteKurz(); });
  focusContent();
  renderLegalFooter();
}

function ketteWeiterKurz() { renderKetteEnde(); }

/* Rückweg zur ausführlichen Fassung – die Hilfe bleibt immer erreichbar
   (§9 COGA: klare Wege zur Hilfe; UDL: Wahl statt Zwang). */
function ketteSchritteZeigen() {
  ketteIndex = 0;
  ketteWarumOffen = true;
  ketteHilfeOffen = false;
  renderKetteSchritt();
}

/* `wieder` (Paket T2): nach einem Sprachwechsel nur neu zeichnen – den
   Durchgang nicht noch einmal zählen, nicht noch einmal ansagen. */
function renderKetteEnde(wieder) {
  const k = ketteDaten(ketteId);
  if (!k) return renderMenu();
  if (!wieder) ketteLaufPlus(ketteId);
  const laeufe = ketteLaeufe(ketteId);
  ketteKopf(k, "Geschafft");

  const zeilen = k.liste.map(s => `
    <li class="kette-ende-item"><span class="kette-haken" aria-hidden="true">✓</span><span>${escapeHtml(ketteTun(s))}</span></li>`).join("");
  const abschluss = ketteText(k.abschluss);
  /* Beim ersten Abschluss ankündigen, dass es beim nächsten Mal kürzer wird.
     Vorhersehbarkeit statt Überraschung (§3 Došen).
     T08 (21.09.2026): Der zweite Satz hieß „Du kannst dann mehr allein."
     Das weiß die App nicht – sie hat nur gezählt, wie oft jemand „Gemacht"
     getippt hat. Weniger Hilfe ist außerdem kein Maßstab für Erfolg. Jetzt
     steht dort, was wirklich passiert, und dass die Person wählen kann. */
  const ausblick = laeufe === 1
    ? `<p class="kette-meta">${planWort("Beim nächsten Mal zeigt dir die App den Plan kurz.", ketteId)} Du kannst dir die Schritte aber jederzeit wieder einzeln zeigen lassen.</p>`
    : "";

  content.innerHTML = `
    ${lernRahmenLeiste()}
    ${buildWegweiser(`${k.titel}. Du hast alle Schritte gemacht.`)}
    <article class="card kette-step" data-readable="true">
      <h2>Geschafft</h2>
      <ul class="kette-ende-liste">${zeilen}</ul>
      <p>${escapeHtml(abschluss)}</p>
      ${ketteRueckfallHtml(k)}
      ${ausblick}
      ${buildRememberBox("Wichtig", ketteText(k.merksatz))}
      ${blockRead("Geschafft. " + abschluss + " " + ketteText(k.merksatz))}
      <button type="button" class="kette-done" onclick="ketteAbbrechen()">${ketteRueckkehr ? "Zurück zum Abschluss" : "Weiter lernen"}</button>
    </article>
  `;
  const kid = ketteId;
  stelleMerken(() => { ketteId = kid; renderKetteEnde(true); });
  focusContent();
  renderLegalFooter();
  if (!wieder) announce("Geschafft. Du hast alle Schritte gemacht.");
}

/* Antworten dürfen Strings sein ODER Objekte { text, pictogram }.
   Das Piktogramm ist opt-in (Anzeige nur wo redaktionell gepflegt);
   es zeigt die Bedeutung der Antwort – nie ihre Richtigkeit. */
function answerText(a) {
  return (a && typeof a === "object") ? String(a.text || "") : String(a ?? "");
}

/* Bilder an Antworten (I1; Probe Betrug, 06.10.2026, Bericht 24).
   Ein Bild je Antwort, in allen drei Sprachstufen dasselbe. Schlüssel ist
   die feste Aufgaben-ID oder der Gedächtnisschlüssel (Leicht-Frage), die
   Reihenfolge folgt den Leicht-Antworten. Regeln: Das Bild zeigt das Ding
   oder das Tun aus der Antwort, nie eine Bewertung (kein Nein-, Stopp-,
   Haken- oder Warnzeichen). Jede Antwort einer Aufgabe hat ein anderes
   Bild; eine Aufgabe hat Bilder an allen Antworten oder an keiner.
   Geprüft in pruefung/datenschutz/antwort-bilder.cjs. Neue Themen erst
   nach Freigabe der Probe (§11, §13). */
const ANTWORT_BILDER = {
  betrug: {
    "betrug/lang/Was ist Phishing?": ["link", "bank"],
    "betrug/lang/Der Hallo-Mama-Trick": ["money", "anruf"],
    "betrug/lang/Liebe im Internet": ["money", "friend"],
    "betrug/lang/Abo-Fallen": ["photo", "lesen"],
    "betrug/lang/Vorsicht bei QR-Codes": ["code", "money"],
    "betrug/lang/Was kann ich tun?": ["anruf", "money"],
    "betrug/kurz/Was ist Betrug im Internet?": ["money", "message"],
    "betrug/kurz/Wie erkennst du Betrug?": ["geschenk", "ask"],
    "betrug/kurz/Was tust du bei Betrug?": ["link", "bank"],
    "Hallo Mama, neue Nummer, brauche Geld. Was machst du?": ["money", "message", "anruf"],
    "Jemand fragt nach deinem SMS-Code. Was machst du?": ["code", "anruf", "lock"],
    "Jemand aus dem Internet schreibt dir liebe Worte. Die Person bittet um Geld. Ihr habt euch nie getroffen. Was ist richtig?": ["friend", "money", "bank"],
    "betrug/quiz/banknachricht-app-selbst": ["link", "bank", "mail"]
  }
};

function antwortBilderFuer(q) {
  if (!q || typeof q !== "object") return null;
  const schluessel = String(q.id || aufgabeSchluessel(q));
  for (const thema of Object.values(ANTWORT_BILDER)) if (Array.isArray(thema[schluessel])) return thema[schluessel];
  return null;
}

function answerPikto(a, q, i) {
  const liste = antwortBilderFuer(q);
  const key = liste && Number.isInteger(i) ? liste[i] : (a && typeof a === "object" ? a.pictogram : "");
  if (!key) return "";
  return `<img class="answer-pikto" src="${pictoSrc(key)}" alt="" aria-hidden="true" loading="lazy" onerror="this.remove()">`;
}

/* Nummern-Anker: dieselbe Zahl, die die Stimme spricht („Antwort 1") */
function answerNumBadge(i) {
  return `<span class="answer-num" aria-hidden="true">${i + 1}</span>`;
}

/* Frage-Piktogramm (opt-in): Kontext-Anker, verrät keine Lösung */
function questionPiktoSrc(q) {
  if (!q || !q.pictogram) return "";
  const text = [q.situation, q.question].filter(x => typeof x === "string").join(" ");
  return pictoSrc(handyOderHoerer(q.pictogram, text));
}

function questionPikto(q) {
  const src = questionPiktoSrc(q);
  if (!src) return "";
  return `<img class="question-pikto" src="${src}" alt="" aria-hidden="true" loading="lazy" onerror="this.remove()">`;
}

/* Lernweg (26.09.2026): neue Wörter zentral, je Stufe (§2). Freigabepflichtig (§13). */
const LERNWEG_TEXT = {
  neueSituation: "Eine neue Situation",
  neueSituationText: {
    leicht:   "Das ist ein neuer Fall. Was machst du hier?",
    einfach:  "Das ist ein neuer Fall. Denk an das, was du gerade gelernt hast: Was machst du hier?",
    standard: "Ein neuer Fall: Wende an, was du gerade gelernt hast. Wie reagierst du?"
  },
  erinnernFrage: {
    leicht:   "Was weißt du noch? Denk kurz nach. Dann tippe auf: Zeig mir die Regeln.",
    einfach:  "Was weißt du noch aus diesem Thema? Überleg kurz, bevor du die Regeln aufdeckst.",
    standard: "Was ist dir aus diesem Kapitel in Erinnerung geblieben? Überleg kurz und deck dann die Regeln auf."
  },
  erinnernKnopf: "Zeig mir die Regeln",
  planLink: "Dein Plan: Schritt für Schritt",
  nochmalUeben: "Noch einmal üben",
  /* Datenschutz-Musterthema, Paket 2 (28.09.2026), Stufen seit Paket 5.
     Nur wirksam, wo die Daten es einschalten (Beispiel-Art, Plan-Schritt,
     Vorhersage, Frage x von y, zweiter Versuch). Lesen über lernwegText(). */
  beispielArt: {
    leicht:   { A: "Nicht nötig", B: "Nötig", C: "Kommt darauf an" },
    einfach:  { A: "Nicht nötig", B: "Nötig", C: "Kommt darauf an" },
    standard: { A: "Nicht erforderlich", B: "Erforderlich", C: "Hängt vom Zweck ab" }
  },
  planSchritt: {
    leicht:   "Schritt {n} von deinem Plan:",
    einfach:  "Das ist Schritt {n} von deinem Plan:",
    standard: "Schritt {n} deines Plans:"
  },
  vorhersageTitel: {
    leicht:   "Die Frage vom Anfang: Was machst du jetzt?",
    einfach:  "Die Frage vom Anfang: Was würdest du jetzt machen?",
    standard: "Zurück zur Frage vom Anfang: Wie entscheidest du jetzt?"
  },
  vorhersageAnfang: {
    leicht:   "Am Anfang hast du gesagt:",
    einfach:  "Am Anfang hast du dich so entschieden:",
    standard: "Zu Beginn hast du gewählt:"
  },
  vorhersageJetzt: {
    leicht:   "Was machst du jetzt?",
    einfach:  "Was würdest du jetzt machen?",
    standard: "Wie entscheidest du jetzt?"
  },
  vorhersageVergleich: {
    leicht:   "Am Anfang: {a} Jetzt: {b}",
    einfach:  "Am Anfang: {a} Jetzt: {b}",
    standard: "Zu Beginn: {a} Jetzt: {b}"
  },
  frageVon: "Frage {i} von {n}",
  korrektur: {
    leicht:   "Gut korrigiert. Diese Aufgabe kommt später noch einmal.",
    einfach:  "Gut korrigiert. Diese Aufgabe kommt später noch einmal zum Üben.",
    standard: "Gut korrigiert. Die Aufgabe kommt später noch einmal."
  },
  /* Vor-Nutzertest (29.09.2026): Quiz-Ergebnis bei strenger Wiederholung.
     Korrekturversuche zählen getrennt – keine Prozentzahl, keine Null-Zeile. */
  ergebnisGleich: {
    leicht:   "Gleich richtig: {n} von {gesamt}",
    einfach:  "Gleich richtig: {n} von {gesamt} Fragen",
    standard: "Gleich richtig: {n} von {gesamt} Fragen"
  },
  ergebnisKorrektur: {
    leicht:   "Nach einer Korrektur richtig: {n} von {gesamt}",
    einfach:  "Nach einer Korrektur richtig: {n} von {gesamt} Fragen",
    standard: "Nach einer Korrektur richtig: {n} von {gesamt} Fragen"
  },
  ergebnisOffen: {
    leicht:   "Kommt später noch einmal: {n} von {gesamt}",
    einfach:  "Kommt später noch einmal zum Üben: {n} von {gesamt} Fragen",
    standard: "Wird später wiederholt: {n} von {gesamt} Fragen"
  },
  /* D6 (01.10.2026): Ergebnis ohne Prozent auch für die übrigen Themen. */
  ergebnisRichtig: {
    leicht:   "Richtig: {n} von {gesamt}",
    einfach:  "Richtig: {n} von {gesamt} Fragen",
    standard: "Richtig: {n} von {gesamt} Fragen"
  },
  ergebnisKorrekturHinweis: {
    leicht:   "Aufgaben mit Korrektur kommen später noch einmal.",
    einfach:  "Die Aufgaben, die du korrigiert hast, kommen später noch einmal.",
    standard: "Korrigierte Aufgaben kommen später noch einmal."
  },
  /* Vor-Nutzertest (29.09.2026): alter Abschluss eines umgebauten Themas. */
  ueberarbeitet: {
    leicht:   "Wir haben das Thema {thema} geändert. Schau dir das Thema noch einmal an.",
    einfach:  "Wir haben das Thema {thema} überarbeitet. Schau es dir noch einmal an.",
    standard: "{thema} wurde überarbeitet. Schau dir das Thema noch einmal an."
  },
  ueberarbeitetKurz: {
    leicht:   "Geändert",
    einfach:  "Überarbeitet",
    standard: "Überarbeitet"
  }
};

/* Ergebnis-Zeilen für Themen mit strenger Wiederholung (WIEDERHOLEN_STRENG):
   „gleich richtig“ und „nach einer Korrektur richtig“ getrennt, Zeilen mit 0
   entfallen, keine Prozentzahl. `offen` = weder noch (nur im Kurz-Quiz möglich). */
function ergebnisZeilenHtml(gleich, korrigiert, gesamt, ohneHinweis) {
  const offen = Math.max(0, gesamt - gleich - korrigiert);
  const zeile = (k, n) => n > 0
    ? `<li>${escapeHtml(lernwegText(k).replace("{n}", n).replace("{gesamt}", gesamt))}</li>` : "";
  return `<ul class="quiz-ergebnis-liste">${zeile("ergebnisGleich", gleich)}${zeile("ergebnisKorrektur", korrigiert)}${zeile("ergebnisOffen", offen)}</ul>
    ${korrigiert > 0 && !ohneHinweis ? `<p>${escapeHtml(lernwegText("ergebnisKorrekturHinweis"))}</p>` : ""}`;
}
/* D6 (01.10.2026): Erfolg ohne Druck. Keine Prozentzahl, kein Urteil nach
   Punkten, keine Null-Zeile. */
function ergebnisRuhigHtml(richtig, gesamt) {
  return richtig > 0
    ? `<p>${escapeHtml(lernwegText("ergebnisRichtig").replace("{n}", richtig).replace("{gesamt}", gesamt))}</p>` : "";
}
function wiederholenStreng(topicId) {
  return WIEDERHOLEN_STRENG.indexOf(topicId) !== -1;
}
function lernwegText(schluessel) {
  const t = LERNWEG_TEXT[schluessel];
  if (!t || typeof t === "string") return t || "";
  return t[languageLevel] || t.einfach || t.leicht || "";
}

/* Paket C Schritt 5 (26.09.2026): „Kennst du das schon?" VOR der Frage –
   aber nur das Thema, nicht die Regel. Sonst wäre die Antwort verraten und
   der Übungs-Effekt weg (§3; Codex-Entwurf: vorher höchstens als Hilfe).
   Der Satz ist ein Anstoß zum Erinnern und erscheint nur, wenn die Regel
   in einem ANDEREN Thema schon richtig angewendet wurde (Prüfgruppen-Test
   C-3: die Wiedererkennung kam bisher erst nach der Antwort). */
function kennstDuHinweisHtml(satz, themaId) {
  const z = regelZuordnungTabelle(satz);
  if (!z.rid || !themaId) return "";
  const andere = regelThemen(z.rid).filter(t => t !== themaId)
    .map(t => { const x = getTopicById(t); return x ? x.title : null; }).filter(Boolean);
  if (!andere.length) return "";
  const liste = andere.length > 1 ? andere.slice(0, -1).join(", ") + " und " + andere[andere.length - 1] : andere[0];
  return `<p class="kennst-du-hinweis"><strong>${RUECKMELDUNG.kennstDuFrage}</strong> Das kam schon bei ${escapeHtml(liste)} vor.</p>`;
}

/* Lernweg (26.09.2026): Beim erneuten Versuch stehen die Antworten in
   anderer Reihenfolge – sonst genügte es, einfach die andere zu nehmen
   (Prüfgruppen-Test B-d). Gezählt wird je Frage, nur in der Sitzung. */
let versucheJeFrage = {};
function antwortReihenfolge(frage, anzahl, fest) {
  /* Paket T2: Nach einem Sprachwechsel dieselbe Reihenfolge wie vorher. */
  if (Array.isArray(fest) && fest.length === anzahl) return fest.slice();
  const k = versucheJeFrage[aufgabeSchluessel(frage)] || 0;
  const reihe = Array.from({ length: anzahl }, (_, i) => i);
  return reihe.slice(k % anzahl).concat(reihe.slice(0, k % anzahl));
}
function versuchZaehlen(frage) {
  const key = aufgabeSchluessel(frage);
  versucheJeFrage[key] = (versucheJeFrage[key] || 0) + 1;
}

function buildPractice(practice) {
  /* Paket 4: Formular-Aufgabe „Felder auswählen“ (nur wo Daten es einschalten). */
  if (felderAufgabe(practice)) {
    const t = getCurrentTopic();
    return `<div class="practice-box practice-box--felder"><h3 class="sr-only">Übung</h3>${buildFelderAufgabe(practice, "lektion", t ? t.id : null)}</div>`;
  }
  const question = practice.question || "";
  const aktuell = (typeof getCurrentTopic === "function") ? getCurrentTopic() : null;
  const answers = Array.isArray(practice.answers) ? practice.answers : [];
  const correctIndex = Number(practice.correctIndex ?? 0);
  const reihe = antwortReihenfolge(practice, answers.length, uebungsReihenfolge);
  uebungsReihenfolge = reihe.slice();
  const answerHtml = reihe.map((index, pos) => `
    <label class="answer-option${uebungsAuswahl === index ? " ist-markiert" : ""}">
      <input type="radio" name="lernAntwort" value="${index}" ${uebungsAuswahl === index ? "checked" : ""} onchange="lernAntwortWaehlen(this, ${index}, ${correctIndex})">
      ${answerNumBadge(pos)}${answerPikto(answers[index], practice, index)}<span class="answer-text">${escapeHtml(answerText(answers[index]))}</span>
    </label>
  `).join("");

  return `
    <div class="practice-box practice-box--frage">
      <h3 class="sr-only">Übung</h3>
      ${aktuell ? kennstDuHinweisHtml(practice.remember, aktuell.id) : ""}
      ${buildFrage({ frage: question, pikto: questionPikto(practice), antworten: answerHtml, hilfe: buildTaskHelpBox(taskHint(practice, "lektion"), true) })}
      ${Number.isInteger(uebungsAuswahl) ? `<button type="button" class="nehmen-knopf" onclick="renderPracticeFeedbackPage(${uebungsAuswahl}, ${correctIndex})">Das nehme ich</button>` : ""}
    </div>
  `;

}

/* `wieder` (Paket T4a, 29.09.2026): nach einem Sprachwechsel dieselbe
   Rückmeldung zur gewählten Antwort neu zeichnen – in der neuen Stufe, aber
   ohne noch einmal zu merken, zu zählen, zu klingen oder anzusagen.
   Vorher landete man nach dem Wechsel wieder auf der Lektion. */
function lernAntwortWaehlen(input, index, correctIndex) {
  if (!input || !input.checked) return;
  uebungsAuswahl = index;
  if (sofortWaehlen) return renderPracticeFeedbackPage(index, correctIndex);
  const gruppe = input.closest(".answers");
  gruppe.querySelectorAll(".answer-option").forEach(el => el.classList.toggle("ist-markiert", el.contains(input)));
  const box = input.closest(".practice-box");
  let knopf = box.querySelector(".nehmen-knopf");
  if (!knopf) { knopf = document.createElement("button"); knopf.type = "button"; knopf.className = "nehmen-knopf"; knopf.textContent = "Das nehme ich"; box.appendChild(knopf); }
  knopf.onclick = () => renderPracticeFeedbackPage(uebungsAuswahl, correctIndex);
  readShortText(kartenText(input.closest(".answer-option")), input.closest(".answer-option"));
  announce("Ausgewählt. Tippe auf: Das nehme ich.");
  leisteSpiegeln();
}

function renderPracticeFeedbackPage(index, correctIndex, wieder) {
  stopReading();
  const topic = getCurrentTopic();
  const lessons = getLessonsForMode(topic, currentMode);
  const lesson = lessons[currentStep];
  const practice = lesson && lesson.practice ? lesson.practice : null;
  if (!topic || !lesson || !practice) return renderLesson();

  const answers = Array.isArray(practice.answers) ? practice.answers : [];
  const selectedText = answerText(answers[index]);
  /* Paket T5: richtig / auch möglich / falsch. „Auch möglich“ ist kein Fehler. */
  const art = antwortArt(practice, index, correctIndex);
  const isCorrect = art === "richtig", istAuch = art === "auch", ok = art !== "falsch";
  if (!wieder) playSound(ok ? "correct" : "wrong");
  const explanation = isCorrect
    ? (practice.feedbackCorrect || RUECKMELDUNG.entscheidungGut)
    : istAuch ? auchFeedback(practice, index)
    : (falschFeedback(practice, index) || "Das ist nicht sicher. Du kannst es noch einmal versuchen.");
  const kopf = isCorrect ? RUECKMELDUNG.passtTitel : istAuch ? RUECKMELDUNG.auchTitel : RUECKMELDUNG.nochNichtTitel;
  /* Deine Karte: angewendete Regel eintragen (nur bei richtiger Antwort). */
  const regelHinweis = regelKastenHtml((typeof regelZuSatz === "function") ? regelZuSatz(practice.remember) : null, topic.id, ok);
  /* B6 (01.10.2026, freigegeben): Sagt der „Wichtig“-Satz wortgleich dasselbe
     wie die Regel darunter, steht er nur einmal da – als Regel. */
  const wichtigDoppelt = !!regelHinweis && gleicherSatz(merksatzAnzeige(practice), regelSatzZu(practice.remember));
  const merk = wieder ? wieder.merk : aufgabeMerken(topic.id, practice, ok);
  /* Nur die tatsächliche Kernantwort dieser Sitzung erlaubt, eine wortgleiche
     Aufgabe im Zusatzweg auszulassen. Eine bloße Themen-Gutschrift reicht
     nicht; unmittelbar nach gezeigter Lösung bleibt die Wiederholung nötig. */
  if (!wieder && currentMode === "short") {
    const key = topic.id + "\u0000" + aufgabeSchluessel(practice);
    if (ok && !merk.korrektur) kernUebungenErkannt.add(key);
    else kernUebungenErkannt.delete(key);
    delete topic._zusatzWeg; delete topic._schlussZusatz;
  }
  if (!ok && !wieder) versuchZaehlen(practice);

  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader(topic.title, "Übung", "Rückmeldung", kopf, 100);
  document.body.classList.add("lesson-view");
  aufUebungsSeite = true;
  setOrientation(`Du übst: ${topic.title}.`);

  content.innerHTML = `
    ${buildLernLeiste(currentStep + 1, lessons.length)}
    <article class="card feedback-page ${isCorrect ? "feedback-correct" : istAuch ? "feedback-auch" : "feedback-wrong"}" data-readable="true">
      <h2>${kopf}</h2>

      <div class="feedback-selected">
        <h3>Deine Antwort:</h3>
        <p>${escapeHtml(selectedText)}</p>
      </div>

      ${explanation ? `<div class="feedback-explanation">
        <h3>Erklärung:</h3>
        <p>${escapeHtml(explanation)}</p>
      </div>` : ""}

      ${/* Refaktorierung, die die remember-Prüfung in buildRememberBox kapselt:
            hier stand früher "isCorrect && practice.remember ? … : ''". Der Baustein
            liefert bei leerem Text von sich aus "", deshalb genügt hier isCorrect.
            Das ist keine reine Umstellung, sondern eine kleine Verbesserung — die
            Frage "gibt es überhaupt einen Merksatz?" gehört in den Baustein, nicht
            an jede Aufrufstelle. */""}
      ${!ok ? passendeAntwortHtml(answers[Number(correctIndex)]) : istAuch ? nochEinWegHtml(answers[Number(correctIndex)]) : ""}
      ${/* D13: Das Beispiel („So macht es …“) steht nicht mehr hier, sondern
            in der zweiten Hilfe-Stufe (buildTaskHelpBox unten). */""}
      ${!ok ? roleFigure("ruhig") : ""}
      ${/* Merksatz auch nach einer falschen Antwort (Gesamtprüfung V1): vorher
            stand dort nur die leere Überschrift „Merken". */""}
      ${wichtigDoppelt ? "" : `${practice.remember ? stationBadge("merken") : ""}
      ${buildRememberBox("Wichtig", merksatzAnzeige(practice))}`}
      ${regelHinweis}

      <div class="feedback-actions">
        ${ok
          ? `<button type="button" class="feedback-button primary" onclick="continueAfterPractice()">Weiter</button>
             ${korrekturHinweisHtml(merk)}`
          : `${/* D13, Bild 4: Beide Lernhandlungen stehen unten in der Leiste –
                   rechts der zweite Versuch als Hauptknopf, links „Weiter“
                   (leisteSpiegeln). Beispiel und „Lektion nochmal lesen“
                   stehen in der zweiten Hilfe-Stufe. */""}<button type="button" class="feedback-button secondary" data-leiste="haupt" onclick="renderPracticePage()">Frage nochmal versuchen</button>
             <button type="button" class="feedback-button quiet" data-leiste="neben" onclick="continueAfterPractice()">Weiter</button>
             <p class="feedback-spaeter">Diese Aufgabe kommt später noch einmal.</p>`
        }
      </div>

      ${!ok ? buildTaskHelpBox(taskHint(practice, "rueckmeldung"), false, true,
        (practice.nachFehler ? vorbildAngebotHtml(topic, lesson, lessons) : "")
        + `<button type="button" class="hilfe-angebot" onclick="renderLesson()">Lektion nochmal lesen</button>`) : ""}
    </article>
  `;
  if (!wieder) announce(isCorrect ? RUECKMELDUNG.passtAnsage : istAuch ? RUECKMELDUNG.auchAnsage : RUECKMELDUNG.nochNichtAnsage);
  const ort = { t: topic.id, mode: currentMode, step: currentStep };
  stelleMerken(() => { currentTopicId = ort.t; currentMode = ort.mode; currentStep = ort.step; renderPracticeFeedbackPage(index, correctIndex, { merk: merk }); });
  focusContent();
  renderLegalFooter();
}

/* D7 (01.10.2026, E6): Nach jeder Lektion darf man aufhören. Die Stelle
   wird auf den NÄCHSTEN Schritt gesetzt, damit „Weiter lernen“ dort
   ansetzt und nicht dieselbe Lektion noch einmal zeigt. */
function lernPause() {
  stopReading();
  const topic = getCurrentTopic();
  if (!topic) return renderMenu();
  const lessons = getLessonsForMode(topic, currentMode);
  const naechster = Math.min(currentStep + 1, lessons.length - 1);
  lastLessonContext = { topicId: topic.id, step: naechster, mode: currentMode, titel: (lessons[naechster] && lessons[naechster].title) || "" };
  saveLastLesson();
  aufUebungsSeite = false;
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader(topic.title, "Pause", "Pause", "Pause", 100);
  setOrientation("Du machst Pause.");
  showNav(false, false);
  const id = escapeHtml(topic.id);
  content.innerHTML = `
    <section class="completion-page" data-readable="true">
      <article class="card completion-card--einfach">
        <h2 class="einfach-done-title">Pause</h2>
        <p>Deine Stelle ist gemerkt.</p>
        <p>Du kannst jederzeit weitermachen.</p>
        <div class="completion-actions">
          <button type="button" class="primary-action" onclick="resumeLastLesson()">Weiter lernen</button>
          <button type="button" class="secondary-action" onclick="navigateTab('start')">Zur Startseite</button>
        </div>
      </article>
    </section>
  `;
  stelleMerken(() => { currentTopicId = topic.id; lernPause(); });
  focusContent();
  renderLegalFooter();
}

function renderPracticePage(wieder) {
  stopReading();
  uebungsAuswahl = wieder && Number.isInteger(wieder.auswahl) ? wieder.auswahl : null;
  uebungsReihenfolge = wieder && Array.isArray(wieder.reihenfolge) ? wieder.reihenfolge.slice() : null;
  /* Springt direkt zur Übungsfrage der aktuellen Lektion zurück */
  const topic = getCurrentTopic();
  const lessons = getLessonsForMode(topic, currentMode);
  const lesson = lessons[currentStep];
  if (lesson && lesson.practice) {
    setProgressVisible(false);
    /* Gleiche Leiste wie auf dem Lernschritt (B2): sichtbar, „Weiter" aus. */
    setBottomNavVisible(true);
    const percent = Math.round(((currentStep + 1) / lessons.length) * 100);
    const modeLabel = currentMode === "short" ? "Lernen" : currentMode === "extra" ? "Mehr dazu" : "Nachlesen";
    setHeader(topic.title, modeLabel, `Schritt ${currentStep + 1} von ${lessons.length}`, lesson.module || "Lernen", percent);
    setOrientation(`Du übst: ${topic.title}. Das ist Schritt ${currentStep + 1} von ${lessons.length}.`);
    showNav(true, false, currentStep === lessons.length - 1 ? weiterTextAmEnde(topic) : "Weiter");
    /* D2: Die Übung ist ein eigener Bildschirm. „Weiter" bleibt aus, bis
       geantwortet ist; „Zurück" führt zum Lerntext dieses Schritts. */
    document.body.classList.add("lesson-view");
    aufUebungsSeite = true;
    /* D8: Der Wiedereinstieg merkt sich, dass die Übung schon offen ist (B14). */
    lastLessonContext = { topicId: topic.id, step: currentStep, mode: currentMode, titel: lesson.title || "", uebung: true };
    saveLastLesson();
    const ort = { t: topic.id, mode: currentMode, step: currentStep };
    content.innerHTML = `
      ${buildLernLeiste(currentStep + 1, lessons.length)}
      <article class="card lesson-card uebungs-seite" style="${getTopicColorStyle(topic.id)}" data-readable="true">
        ${/* Übersicht (06.10.2026): Zeigt die Frage dasselbe Bild wie das
              Symbol der Überschrift, steht es nur an der Frage – dort hilft
              es beim Verstehen. */""}
        <div class="symbol-heading">
          ${questionPiktoSrc(lesson.practice) === pictoSrc(lesson.icon || topic.icon || "start") ? ""
            : `<span class="access-box-symbol" aria-hidden="true">${getIconHtml(lesson.icon || topic.icon || "start")}</span>`}
          <h2>${escapeHtml(lesson.title || topic.title)}</h2>
        </div>
        ${buildPractice(lesson.practice)}
        ${begleitTippHtml(topic, "uebung")}
      </article>
    `;
    stelleMerken(() => {
      const auswahl = uebungsAuswahl, reihenfolge = uebungsReihenfolge;
      currentTopicId = ort.t; currentMode = ort.mode; currentStep = ort.step;
      renderPracticePage({ auswahl, reihenfolge });
    });
    focusContent();
    renderLegalFooter();
  } else {
    renderLesson();
  }
}

/* Nach einer falschen Antwort steht die passende Antwort immer da
   (Gesamtprüfung 25.09.2026, V1). Vorher sah man sie nur, wenn man es noch
   einmal versuchte – und manche Erklärungen empfahlen sogar etwas anderes.
   Dasselbe Wort wie im großen Quiz (RUECKMELDUNG.passendeAntwort). */
function passendeAntwortHtml(antwort) {
  const t = answerText(antwort);
  if (!t) return "";
  return `
      <div class="feedback-passend">
        <h3>${escapeHtml(RUECKMELDUNG.passendeAntwort)}</h3>
        <p>${escapeHtml(t)}</p>
      </div>`;
}

function continueAfterPractice() {
  const topic = getCurrentTopic();
  const lessons = getLessonsForMode(topic, currentMode);
  if (!topic || !lessons.length) return renderMenu();

  if (currentStep < lessons.length - 1) {
    currentStep += 1;
    renderLesson();
  } else {
    renderMiniCheck(topic.id);
  }
}

/* ============================================================
   Abschlussseite
   ============================================================ */

/* ------------------------------------------------------------
   Kurze Frage nach den Lektionen (vor der Abschluss-Seite)

   Nutzt topic.miniQuestion. Diese 12 Fragen waren in topics.js sauber
   ausformuliert (Frage, Antworten, correct, explanation), wurden aber
   nirgends angezeigt – reines totes Datenfeld bis August 2026.

   Warum hier: Abrufen direkt nach dem Lernen ist der staerkste Behaltens-
   Hebel (§3, Testing-Effekt). Eine einzelne leichte Frage gibt ausserdem
   ein Erfolgserlebnis, bevor die groessere Quiz-Runde angeboten wird.
   Ein Konzept pro Bildschirm (§3, CLT) – deshalb eine eigene Seite statt
   noch ein Block auf der ohnehin langen Abschluss-Seite.
   ------------------------------------------------------------ */
/* „Fertig" nur, wenn wirklich nichts mehr kommt (Gesamtprüfung B3).
   Folgt noch die kurze Frage, heißt der letzte Knopf „Weiter". */
function weiterTextAmEnde(topic) {
  const mq = topic && topic.miniQuestion;
  const frageFolgt = topic && !miniCheckDone[topic.id]
    && (neueSituationDaten(topic) || transferSzeneWaehlen(topic) || (mq && Array.isArray(mq.answers) && mq.answers.length));
  return frageFolgt ? "Weiter" : "Fertig";
}

/* ------------------------------------------------------------
   ANWENDEN (Lernweg, 26.09.2026): Vor dem Abschluss kommt eine NEUE
   Situation aus dem Übungs-Handy desselben Themas – dieselbe Regel, ein
   anderer Fall. Vorher stand hier eine „kurze Frage", die im Test nur den
   Satz aus Schritt 3 wiederholte (Wiedererkennen statt Anwenden,
   Prüfgruppen-Test 26.09.2026). Kein neuer Inhalt, kein zusätzlicher
   Bildschirm: Die Szene kommt aus szenarien-de.js und ersetzt die Frage.
   Auswahl: bei Chat-Szenarien nur die erste Szene (spätere hängen am
   Verlauf), sonst eine Szene der Runde 1, deren Regel der Weg gerade geübt
   hat. Ohne passende Szene bleibt die alte kurze Frage (Rückfall).
   Entscheidung 29.09.2026 (Paket T3): Das Übungs-Handy ist NICHT mehr das
   Standard-Format für „Anwenden“. Der neue Lernweg bekommt je Thema eine
   eigene „Neue Situation“ (topic.neueSituation, Format weiter unten) – wie
   Datenschutz. Sie hat immer Vorrang. Die Szene aus dem Übungs-Handy bleibt
   nur der Rückfall für Themen, die noch keine eigene haben; das
   Übungs-Handy selbst bleibt erhalten.
   ------------------------------------------------------------ */
function transferSzeneWaehlen(topic) {
  const scn = topic ? getScenario(topic.id) : null;
  if (!scn) return null;
  const runde = scenarioRunde(scn, 1);
  const kandidaten = runde.szenen.map((z, i) => ({ z: z, i: i }))
    .filter(x => x.z.frage && Array.isArray(x.z.frage.answers) && x.z.frage.answers.length);
  if (!kandidaten.length) return null;
  if (scn.typ === "chat") return kandidaten[0].i === 0 ? { runde: runde, index: 0 } : null;
  const geuebt = regelIdsAusUebungen(getLessonsForMode(topic, currentMode));
  const passend = kandidaten.find(x => geuebt.indexOf(regelZuordnungTabelle(x.z.frage.remember).rid) !== -1);
  const wahl = passend || kandidaten[0];
  return { runde: runde, index: wahl.i };
}

/* `wieder` (Paket T2): { reihe, antwort } – nach einem Sprachwechsel dieselbe
   Reihenfolge der Antworten und, falls schon geantwortet, dieselbe
   Rückmeldung (ohne sie noch einmal zu zählen). */
function renderTransfer(topic, auswahl, wieder) {
  stopReading();
  currentTopicId = topic.id;
  const szene = auswahl.runde.szenen[auswahl.index];
  const frage = szene.frage;
  setProgressVisible(false);
  setBottomNavVisible(false);
  showNav(false, false);
  setHeader(topic.title, "Neue Situation", "Neue Situation", "Fast fertig", 95);
  setOrientation(`Du bist fast fertig mit dem Thema: ${topic.title}. Jetzt kommt eine neue Situation.`);
  const reihe = antwortReihenfolge(frage, (frage.answers || []).length, wieder && wieder.reihe);
  const antworten = reihe.map((i, pos) => `
    <button type="button" class="answer-option transfer-answer" data-index="${i}">
      ${answerNumBadge(pos)}${answerPikto(frage.answers[i], frage, i)}<span class="answer-text">${escapeHtml(answerText(frage.answers[i]))}</span>
    </button>`).join("");
  content.innerHTML = `
    ${lernRahmenLeiste()}
    <article class="card scenario-card transfer-card" style="${getTopicColorStyle(topic.id)}" data-readable="true">
      <h2>${LERNWEG_TEXT.neueSituation}</h2>
      <p class="transfer-intro">${escapeHtml(lernwegText("neueSituationText"))}</p>
      ${buildScenarioScreen(auswahl.runde, auswahl.index)}
      ${buildFrage({ frage: frage.question || "", pikto: questionPikto(frage), antworten: antworten, hilfe: buildTaskHelpBox(taskHint(frage, "quiz"), true) })}
      <div id="transferFeedback" class="sz-feedback is-hidden" role="status" aria-live="polite"></div>
    </article>
  `;
  content.querySelectorAll(".transfer-answer").forEach(btn => {
    btn.addEventListener("click", () => answerTransfer(topic, auswahl, Number(btn.dataset.index), { reihe: reihe }));
  });
  const mode = currentMode;
  stelleMerken(() => { currentMode = mode; renderTransfer(topic, auswahl, { reihe: reihe }); });
  focusContent();
  renderLegalFooter();
  if (wieder && typeof wieder.antwort === "number") answerTransfer(topic, auswahl, wieder.antwort, { reihe: reihe, wieder: true });
}

/* `opt`: { reihe, wieder } – `wieder` = nach einem Sprachwechsel nur wieder
   anzeigen (nicht merken, nicht zählen, kein Ton, keine Ansage). */
function answerTransfer(topic, auswahl, index, opt) {
  const o = opt || {};
  const feld = document.getElementById("transferFeedback");
  if (!feld || !feld.classList.contains("is-hidden")) return;
  const frage = auswahl.runde.szenen[auswahl.index].frage;
  const korrekt = Number(frage.correctIndex ?? 0);
  /* Paket T5: richtig / auch möglich / falsch („auch möglich“ ist kein Fehler). */
  const art = antwortArt(frage, index, korrekt);
  const richtig = art === "richtig", istAuch = art === "auch", ok = art !== "falsch";
  if (!o.wieder) {
    playSound(ok ? "correct" : "wrong");
    aufgabeMerken(topic.id, frage, ok);
    if (!ok) versuchZaehlen(frage);
  }
  if (ok) miniCheckDone[topic.id] = true;
  content.querySelectorAll(".transfer-answer").forEach(b => {
    const i = Number(b.dataset.index);
    b.disabled = true;
    if (i === index) b.classList.add(richtig ? "is-correct" : istAuch ? "is-auch" : "is-wrong");
    if (!richtig && i === korrekt) b.classList.add("is-correct");
  });
  const text = richtig ? (frage.feedbackCorrect || RUECKMELDUNG.entscheidungGut) : istAuch ? auchFeedback(frage, index) : (falschFeedback(frage, index) || RUECKMELDUNG.fehlerOk);
  const regel = regelKastenHtml((typeof regelZuSatz === "function") ? regelZuSatz(frage.remember) : null, topic.id, ok);
  const id = escapeHtml(topic.id);
  feld.className = "sz-feedback " + (richtig ? "is-correct" : istAuch ? "is-auch" : "is-wrong");
  feld.innerHTML = `
    <p class="sz-feedback-kopf">${richtig ? RUECKMELDUNG.passtAnsage : istAuch ? RUECKMELDUNG.auchAnsage : RUECKMELDUNG.nochNichtKurz}</p>
    <p class="sz-feedback-text">${escapeHtml(text)}</p>
    ${!ok && Array.isArray(frage.answers) ? passendeAntwortHtml(frage.answers[korrekt]) : istAuch && Array.isArray(frage.answers) ? nochEinWegHtml(frage.answers[korrekt]) : ""}
    ${regel}
    <div class="certificate-actions">
      ${ok ? "" : `<button type="button" class="nav-button secondary" onclick="renderMiniCheck('${id}')">Nochmal versuchen</button>`}
      <button type="button" class="nav-button primary" onclick="miniCheckDone['${id}'] = true; renderCompletionPage('${id}')">Weiter</button>
    </div>`;
  const mode = currentMode;
  stelleMerken(() => { currentMode = mode; renderTransfer(topic, auswahl, { reihe: o.reihe, antwort: index }); });
  const weiter = feld.querySelector(".nav-button.primary");
  if (weiter) weiter.focus();
  if (!o.wieder) sprichEingefuegteRueckmeldung(feld);
}

/* ------------------------------------------------------------
   EIGENE NEUE SITUATION (Datenschutz-Musterthema, Paket 2, 28.09.2026;
   seit Paket T3, 29.09.2026, das allgemeine Anwenden-Format für JEDES Thema)
   Anwenden mit einer Situation, die im Lernweg nirgends als Beispiel mit
   Lösung vorkam: gleiche Kompetenz, neuer Kontext – keine Wiederholung
   einer schon erklärten Aufgabe. Ein stiller Bildschirm (Bausteine wie im
   Übungs-Handy) und danach eine oder mehrere Entscheidungen.
   Nur Themen mit topic.neueSituation; sie hat Vorrang vor der Szene aus
   dem Übungs-Handy (renderMiniCheck).

   DATENFORMAT topic.neueSituation (Leichte Sprache = Referenz):
     einstieg   Satz vor dem Bildschirm. Text oder { leicht, einfach, standard }
     kanal      Zeile über dem Bildschirm (z. B. „Nachricht“). Text oder Stufen
     inhalt     [ Bausteine wie im Übungs-Handy: { typ: "nachricht", von, text },
                  { typ: "hinweis", text }, … ] – jeder Text darf
                  { leicht, einfach, standard } sein
     fragen     [ Auswahl-Aufgaben im Format lesson.practice:
                  id          fest, z. B. "hilfe/neu/fremde-nachricht"
                              (sonst "<thema>/neu/<Position>")
                  question, answers[] (2 oder mehr plausible Antworten),
                  correctIndex, feedbackCorrect,
                  feedbackWrong (ein Text oder je Antwort einer, null bei der
                              passenden), hinweis (Tipp), remember (Merksatz =
                              Regel-Schlüssel), nachFehler (Fehler merken und
                              zweiter Versuch mit neuer Reihenfolge),
                  nurLang     nur im Weg „Mehr lernen“
                  nurKurz     nur im Weg „Kurz lernen“ ]
     aufgaben   statt `fragen`: Formular-Aufgaben „Felder auswählen“
                (typ: "felder", Datenschutz, Paket 4)
   Einfach und Alltag der Fragen: AUFGABEN_VERSIONS in content-de.js unter
   der ID (oder der Leicht-Frage). Fehlt eine Stufe, zeigt die App Leicht.
   Schwierige Aufgaben, Frage des Tages und zweiter Versuch hängen am
   Schlüssel (Leicht-Frage) und bleiben beim Sprachwechsel dieselben.
   ------------------------------------------------------------ */
function neueSituationDaten(topic) {
  const ns = topic && topic.neueSituation;
  if (!ns) return null;
  /* Paket 4: Formular-Aufgaben („Felder auswählen“), je Weg gefiltert. */
  if (Array.isArray(ns.aufgaben)) return neueSituationAufgaben(ns).length ? ns : null;
  return neueSituationFragen(ns).length ? ns : null;
}

/* Aufgaben der neuen Situation für den aktuellen Weg (`nurLang`: nur „Mehr lernen“). */
function neueSituationAufgaben(ns) {
  return (ns && Array.isArray(ns.aufgaben) ? ns.aufgaben : []).filter(a => a && (!a.nurLang || currentMode !== "short"));
}

/* Paket T3: Auswahl-Fragen für den aktuellen Weg (`nurLang` / `nurKurz`). */
function neueSituationFragen(ns) {
  return (ns && Array.isArray(ns.fragen) ? ns.fragen : []).filter(q => q && Array.isArray(q.answers) && q.answers.length
    && !(q.nurLang && currentMode === "short") && !(q.nurKurz && currentMode !== "short"));
}

/* Paket T3: Texte in Bausteinen je Sprachstufe – { leicht, einfach, standard }
   wird zum Text der aktuellen Stufe (Rückfall wie ketteText), alles andere
   bleibt, wie es ist. */
function stufenWert(x) {
  if (Array.isArray(x)) return x.map(stufenWert);
  if (x && typeof x === "object") {
    if ("leicht" in x || "einfach" in x || "standard" in x) return ketteText(x);
    const o = {};
    Object.keys(x).forEach(k => { o[k] = stufenWert(x[k]); });
    return o;
  }
  return x;
}

/* `wieder` (Paket T2): { reihe, antwort, merk } – wie bei renderTransfer. */
function renderNeueSituation(topic, index, wieder) {
  const ns = neueSituationDaten(topic);
  if (!ns) return renderCompletionPage(topic.id);
  if (Array.isArray(ns.aufgaben)) return renderNeueSituationFelder(topic, index);
  stopReading();
  currentTopicId = topic.id;
  const liste = neueSituationFragen(ns);
  const i = Math.max(0, Math.min(index, liste.length - 1));
  neueSituationIndex = i;
  const frage = liste[i];
  setProgressVisible(false);
  setBottomNavVisible(false);
  showNav(false, false);
  setHeader(topic.title, "Neue Situation", "Neue Situation", "Fast fertig", 95);
  setOrientation(`Du bist fast fertig mit dem Thema: ${topic.title}. Jetzt kommt eine neue Situation.`);
  const bildschirm = buildScenarioScreen({ typ: "formular", kanal: ketteText(ns.kanal) || "Übung", szenen: [{ inhalt: stufenWert(ns.inhalt || []) }] }, 0);
  /* Neue Anwendungen trennen Situation, Entscheidung und Rückmeldung.
     Der Kontext bleibt in der Hilfe nachlesbar; niemand muss ihn aus dem
     Gedächtnis ergänzen. Die bestehenden Datenschutz-/Hilfeformate bleiben. */
  const situationTeil = ns.segmentiert && i === 0 && (!wieder || wieder.teil === "situation");
  if (situationTeil) {
    content.innerHTML = `
      ${lernRahmenLeiste()}
      <article class="card scenario-card" style="${getTopicColorStyle(topic.id)}" data-readable="true">
        <h2>${LERNWEG_TEXT.neueSituation}</h2>
        ${ns.einstieg ? `<p>${escapeHtml(ketteText(ns.einstieg))}</p>` : ""}
        ${bildschirm}
        <button type="button" class="primary-action" data-leiste="haupt" onclick="renderNeueSituation(getTopicById('${escapeHtml(topic.id)}'), 0, { teil: 'frage' })">Weiter</button>
      </article>`;
    const mode = currentMode;
    stelleMerken(() => { currentMode = mode; renderNeueSituation(topic, 0, { teil: "situation" }); });
    pauseStelleMerken({ art: "neu", topicId: topic.id, index: 0, teil: "situation", wieder: { teil: "situation" } });
    focusContent();
    renderLegalFooter();
    return;
  }
  const kontextHilfe = ns.segmentiert
    ? `<details class="situation-nachlesen"><summary>Situation nochmal ansehen</summary>${ns.einstieg ? `<p>${escapeHtml(ketteText(ns.einstieg))}</p>` : ""}${bildschirm}</details>` : "";
  const reihe = antwortReihenfolge(frage, (frage.answers || []).length, wieder && wieder.reihe);
  let wahl = wieder && Number.isInteger(wieder.wahl) && wieder.wahl >= 0 && wieder.wahl < frage.answers.length ? wieder.wahl : null;
  const nehmenHtml = () => Number.isInteger(wahl)
    ? `<button type="button" class="nehmen-knopf" data-leiste="haupt" onclick="answerNeueSituation(getTopicById('${escapeHtml(topic.id)}'), ${i}, ${wahl}, { reihe: [${reihe.join(',')}] })">Das nehme ich</button>` : "";
  const antworten = ns.segmentiert ? reihe.map((a, pos) => `
    <label class="answer-option transfer-answer${wahl === a ? ' ist-markiert' : ''}" data-index="${a}">
      <input type="radio" name="transferAntwort" value="${a}" ${wahl === a ? 'checked' : ''}>
      ${answerNumBadge(pos)}${answerPikto(frage.answers[a], frage, a)}<span class="answer-text">${escapeHtml(answerText(frage.answers[a]))}</span>
    </label>`).join("") : reihe.map((a, pos) => `
    <button type="button" class="answer-option transfer-answer" data-index="${a}">
      ${answerNumBadge(pos)}${answerPikto(frage.answers[a], frage, a)}<span class="answer-text">${escapeHtml(answerText(frage.answers[a]))}</span>
    </button>`).join("");
  content.innerHTML = `
    ${lernRahmenLeiste()}
    <article class="card scenario-card transfer-card" style="${getTopicColorStyle(topic.id)}" data-readable="true">
      <h2>${LERNWEG_TEXT.neueSituation}</h2>
      ${ns.segmentiert ? "" : `<p class="transfer-intro">${escapeHtml(lernwegText("neueSituationText"))}</p>`}
      ${!ns.segmentiert && ns.einstieg ? `<p class="vorhersage-situation">${escapeHtml(ketteText(ns.einstieg))}</p>` : ""}
      ${ns.segmentiert ? "" : bildschirm}
      ${kontextHilfe}
      ${buildFrage({ frage: frage.question || "", pikto: questionPikto(frage), antworten: antworten,
        zaehler: LERNWEG_TEXT.frageVon.replace("{i}", i + 1).replace("{n}", liste.length),
        hilfe: buildTaskHelpBox(taskHint(frage, "quiz"), true) })}
      ${ns.segmentiert ? `<div id="transferAuswahl">${nehmenHtml()}</div>` : ""}
      <div id="transferFeedback" class="sz-feedback is-hidden" role="status" aria-live="polite"></div>
    </article>
  `;
  const mode = currentMode;
  const stelleSichern = () => {
    stelleMerken(() => { currentMode = mode; renderNeueSituation(topic, i, { reihe, teil: "frage", wahl }); });
    pauseStelleMerken({ art: "neu", topicId: topic.id, index: i, teil: "frage", wieder: { teil: "frage", reihe, wahl } });
  };
  if (ns.segmentiert) {
    content.querySelectorAll('input[name="transferAntwort"]').forEach(input => {
      input.addEventListener("change", () => {
        wahl = Number(input.value);
        content.querySelectorAll(".transfer-answer").forEach(label => label.classList.toggle("ist-markiert", Number(label.dataset.index) === wahl));
        document.getElementById("transferAuswahl").innerHTML = nehmenHtml();
        stelleSichern();
      });
    });
  } else {
    content.querySelectorAll(".transfer-answer").forEach(btn => {
      btn.addEventListener("click", () => answerNeueSituation(topic, i, Number(btn.dataset.index), { reihe }));
    });
  }
  stelleSichern();
  focusContent();
  renderLegalFooter();
  if (wieder && typeof wieder.antwort === "number") answerNeueSituation(topic, i, wieder.antwort, { reihe: reihe, wieder: true, merk: wieder.merk });
}

/* `opt`: { reihe, wieder, merk } – wie bei answerTransfer. */
function answerNeueSituation(topic, i, index, opt) {
  const o = opt || {};
  const ns = neueSituationDaten(topic);
  let feld = document.getElementById("transferFeedback");
  if (!ns || !feld || !feld.classList.contains("is-hidden")) return;
  const liste = neueSituationFragen(ns);
  const frage = liste[i];
  if (!frage) return;
  const korrekt = Number(frage.correctIndex ?? 0);
  /* Paket T5: richtig / auch möglich / falsch („auch möglich“ ist kein Fehler). */
  const art = antwortArt(frage, index, korrekt);
  const richtig = art === "richtig", istAuch = art === "auch", ok = art !== "falsch";
  const letzte = i >= liste.length - 1;
  if (!o.wieder) playSound(ok ? "correct" : "wrong");
  const merkN = o.wieder ? (o.merk || null) : aufgabeMerken(topic.id, frage, ok);
  if (!ok && !o.wieder) versuchZaehlen(frage);
  content.querySelectorAll(".transfer-answer").forEach(b => {
    const n = Number(b.dataset.index);
    b.disabled = true;
    if (n === index) b.classList.add(richtig ? "is-correct" : istAuch ? "is-auch" : "is-wrong");
    if (!richtig && n === korrekt) b.classList.add("is-correct");
  });
  const text = richtig ? (frage.feedbackCorrect || RUECKMELDUNG.entscheidungGut) : istAuch ? auchFeedback(frage, index) : (falschFeedback(frage, index) || RUECKMELDUNG.fehlerOk);
  const regel = regelKastenHtml((typeof regelZuSatz === "function") ? regelZuSatz(frage.remember) : null, topic.id, ok);
  const id = escapeHtml(topic.id);
  const weiter = letzte
    ? `miniCheckDone['${id}'] = true; renderCompletionPage('${id}')`
    : `renderNeueSituation(getTopicById('${id}'), ${i + 1})`;
  if (ns.segmentiert) {
    content.innerHTML = `${lernRahmenLeiste()}<article class="card feedback-page" style="${getTopicColorStyle(topic.id)}" data-readable="true"><h2>${richtig ? RUECKMELDUNG.passtTitel : istAuch ? RUECKMELDUNG.auchTitel : RUECKMELDUNG.nochNichtTitel}</h2><div id="transferFeedback" role="status" aria-live="polite"></div></article>`;
    feld = document.getElementById("transferFeedback");
  }
  feld.className = "sz-feedback " + (richtig ? "is-correct" : istAuch ? "is-auch" : "is-wrong");
  feld.innerHTML = `
    ${ns.segmentiert ? "" : `<p class="sz-feedback-kopf">${richtig ? RUECKMELDUNG.passtAnsage : istAuch ? RUECKMELDUNG.auchAnsage : RUECKMELDUNG.nochNichtKurz}</p>`}
    <p class="sz-feedback-text">${escapeHtml(text)}</p>
    ${korrekturHinweisHtml(merkN)}
    ${!ok && Array.isArray(frage.answers) ? passendeAntwortHtml(frage.answers[korrekt]) : istAuch && Array.isArray(frage.answers) ? nochEinWegHtml(frage.answers[korrekt]) : ""}
    ${regel}
    <div class="certificate-actions">
      ${ok ? "" : `<button type="button" class="nav-button ${ns.segmentiert ? "primary" : "secondary"}"${ns.segmentiert ? ' data-leiste="haupt"' : ""} onclick="renderNeueSituation(getTopicById('${id}'), ${i}, { teil: 'frage' })">Nochmal versuchen</button>`}
      <button type="button" class="nav-button ${ns.segmentiert && !ok ? "secondary" : "primary"}"${ns.segmentiert ? ` data-leiste="${!ok ? "neben" : "haupt"}"` : ""} onclick="${weiter}">Weiter</button>
    </div>`;
  const mode = currentMode;
  stelleMerken(() => { currentMode = mode; renderNeueSituation(topic, i, { reihe: o.reihe, antwort: index, merk: merkN, teil: "frage" }); });
  pauseStelleMerken({ art: "neu", topicId: topic.id, index: i, teil: "rueckmeldung", wieder: { teil: "frage", reihe: o.reihe, antwort: index, merk: merkN } });
  if (ns.segmentiert) { focusContent(); renderLegalFooter(); }
  const knopf = feld.querySelector(".nav-button.primary");
  if (knopf) knopf.focus();
  if (!o.wieder) sprichEingefuegteRueckmeldung(feld);
}

/* ------------------------------------------------------------
   FELDER AUSWÄHLEN (Datenschutz-Musterthema, Paket 4, 28.09.2026)
   Ein nachgebautes Formular: Jede Zeile ist eine eigene Entscheidung –
   angeben oder leer lassen. Drei Ebenen bleiben getrennt, in den Daten,
   im Code und in der Rückmeldung:
     pflicht  das Formular verlangt die Angabe (sonst geht es nicht weiter)
     zweck    passt die Angabe zu dem, was die Person will?
              "passt" | "deine-wahl" (freiwillig, hängt vom eigenen Ziel ab)
              | "passt-nicht" | "unklar" (Wofür? ist nicht erkennbar)
     Wahl     was die Person angibt
   Bewertet wird NUR der Zweck, nie die Pflicht. Ein Fehler ist allein,
   etwas anzugeben, das nicht zum Zweck passt oder unklar ist. Eine
   Pflicht-Angabe leer lassen ist kein Fehler: Das Formular geht dann nur
   nicht weiter, und die Person entscheidet – angeben oder den Dienst nicht
   nutzen. „Ich prüfe erst“ und „Ich nutze das nicht“ gehen immer und
   werden nie als Fehler gewertet. Ist der Zweck einer Pflicht-Angabe
   unklar, bewertet die Plattform sie nicht als überflüssig – dann sind erst
   prüfen oder nicht nutzen die sichere Entscheidung (Nachtrag). Sicher
   gehandelt heißt aber noch nicht: alle Angaben unterschieden. Darum folgt
   auf beide Auswege ein Lern-Schritt: Die übrigen Zeilen entscheidet die
   Person trotzdem (nur Simulation); gemerkt wird erst dort. Nein bei
   „Deine Wahl“ ist nie ein Fehler; die Rückmeldung nennt nur die Folge für
   das eigene Ziel. Keine Prozentzahl, kein Urteil über die Person.
   Bedienung: echte Kontrollkästchen in <label>-Zeilen (ganze Zeile
   tippbar, Leertaste schaltet, Tab springt weiter), Zustand als Text und
   Symbol. Nur wo Daten es einschalten (typ: "felder").
   ------------------------------------------------------------ */
/* Leichte Sprache = Referenz (freigegeben mit Paket 4). */
const FELDER_TEXT_LEICHT = {
  anleitung: "Was willst du angeben? Tippe auf diese Zeilen. Die anderen bleiben leer.",
  angeben: "Gebe ich an",
  leer: "Lasse ich leer",
  pflicht: "Pflicht",
  freiwillig: "freiwillig",
  wofuer: "Die Seite sagt:",
  ohneGrund: "Die Seite sagt nicht: wofür?",
  fertig: "Fertig",
  erstPruefen: "Ich prüfe erst",
  nichtNutzen: "Ich nutze das nicht",
  ergebnisTitel: "Deine Auswahl – Zeile für Zeile",
  allesPasst: "Alle Zeilen passen zu deinem Ziel.",
  allesWahl: "Das ist in Ordnung. Du hast selbst entschieden. Lies bei jeder Zeile: Was heißt das für dein Ziel?",
  nochNicht1: "Bei 1 Zeile: Schau noch einmal hin.",
  nochNichtN: "Bei {n} Zeilen: Schau noch einmal hin.",
  gesperrt: "So geht es nicht weiter. Das ist Pflicht:",
  gesperrtWahl: "Du entscheidest: Gib es an. Oder nutze das nicht.",
  gesperrtUnklar: "Der Zweck ist für dich nicht klar? Dann gib es noch nicht ein. Prüfe erst. Oder nutze das nicht.",
  nichtNutzenText: "Das ist deine Entscheidung. Das ist in Ordnung. Du musst das nicht nutzen.",
  erstPruefenText: "Das ist in Ordnung. Du darfst immer erst prüfen. Hier steht bei jeder Zeile: wofür.",
  erstPruefenUnklar: "Das ist in Ordnung. Du weißt nicht: wofür? Dann gibst du es noch nicht an. Du prüfst erst. Oder du holst dir Unterstützung.",
  lernOk: "Du musst die Daten jetzt nicht angeben.",
  lernFrageAndere: "Schau dir trotzdem die anderen Angaben an. Was entscheidest du dort?",
  lernFrageAlle: "Schau dir trotzdem die Angaben an. Was entscheidest du dort?",
  lernNurUeben: "Das ist nur zum Üben. Du gibst dabei nichts weiter.",
  lernKnopf: "Angaben ansehen",
  lernBleibt: "Deine Entscheidung bleibt:",
  lernZustand: { erstPruefen: "Du prüfst erst", nichtNutzen: "Du gibst es nicht ein" },
  lernWort: { erstPruefen: "du prüfst erst", nichtNutzen: "nicht eingegeben" },
  sicherGehandelt: "Du hast sicher gehandelt.",
  angegebenWort: "angegeben",
  leerWort: "leer gelassen",
  status: { passt: "✓ Passt", wahl: "ℹ Deine Wahl", zuviel: "⚠ Zu viel", pruefen: "⚠ Erst prüfen", gesichert: "✓ Sicher gehandelt" },
  nochmal: "Nochmal versuchen",
  zurueck: "Zurück zum Formular",
  weiter: "Weiter",
  spaeter: "Diese Aufgabe kommt später noch einmal.",
  situationVon: "Situation {i} von {n}"
};

/* Paket 5: dieselben Texte in Einfacher Sprache und Alltagssprache. Gleiche
   Aussage, gleiche Entscheidungen; nur Sprache und Verdichtung anders.
   Pflicht und Zweck bleiben auch hier getrennt. */
const FELDER_TEXT_EINFACH = {
  anleitung: "Was willst du angeben? Tippe die Zeilen an, die du ausfüllen willst. Die anderen Zeilen bleiben leer.",
  angeben: "Gebe ich an",
  leer: "Lasse ich leer",
  pflicht: "Pflicht",
  freiwillig: "freiwillig",
  wofuer: "Die Seite schreibt dazu:",
  ohneGrund: "Die Seite schreibt nicht, wofür sie das haben will.",
  fertig: "Fertig",
  erstPruefen: "Ich prüfe erst",
  nichtNutzen: "Ich nutze das nicht",
  ergebnisTitel: "Deine Auswahl, Zeile für Zeile erklärt",
  allesPasst: "In allen Zeilen passt deine Wahl zu deinem Ziel.",
  allesWahl: "Das ist in Ordnung, du hast selbst entschieden. Lies bei jeder Zeile nach, was deine Wahl für dein Ziel bedeutet.",
  nochNicht1: "Bei 1 Zeile solltest du noch einmal hinschauen.",
  nochNichtN: "Bei {n} Zeilen solltest du noch einmal hinschauen.",
  gesperrt: "So geht das Formular nicht weiter. Diese Angaben sind Pflicht:",
  gesperrtWahl: "Du entscheidest: Entweder du gibst es an, oder du nutzt das Angebot nicht.",
  gesperrtUnklar: "Ist dir der Zweck nicht klar? Dann gib es noch nicht ein und prüfe erst. Oder du nutzt das Angebot nicht.",
  nichtNutzenText: "Das ist deine Entscheidung, und sie ist in Ordnung. Du musst das Angebot nicht nutzen.",
  erstPruefenText: "Das ist in Ordnung. Du darfst immer zuerst prüfen. In diesem Formular steht bei jeder Zeile, wofür die Angabe ist.",
  erstPruefenUnklar: "Das ist in Ordnung. Wenn du nicht weißt, wofür eine Angabe ist, gibst du sie noch nicht an. Du prüfst erst oder holst dir Unterstützung.",
  lernOk: "Du musst die Daten jetzt nicht angeben.",
  lernFrageAndere: "Schau dir trotzdem die anderen Angaben an: Wie würdest du dort entscheiden?",
  lernFrageAlle: "Schau dir trotzdem die Angaben an: Wie würdest du dort entscheiden?",
  lernNurUeben: "Das ist nur eine Übung. Dabei gibst du keine Daten weiter.",
  lernKnopf: "Angaben ansehen",
  lernBleibt: "Deine Entscheidung bleibt:",
  lernZustand: { erstPruefen: "Du prüfst erst", nichtNutzen: "Du gibst es nicht ein" },
  lernWort: { erstPruefen: "du prüfst erst", nichtNutzen: "nicht eingegeben" },
  sicherGehandelt: "Du hast sicher gehandelt.",
  angegebenWort: "angegeben",
  leerWort: "leer gelassen",
  status: { passt: "✓ Passt", wahl: "ℹ Deine Wahl", zuviel: "⚠ Zu viel", pruefen: "⚠ Erst prüfen", gesichert: "✓ Sicher gehandelt" },
  nochmal: "Nochmal versuchen",
  zurueck: "Zurück zum Formular",
  weiter: "Weiter",
  spaeter: "Diese Aufgabe kommt später noch einmal.",  /* wie der Satz auf allen Rückmeldeseiten */
  situationVon: "Situation {i} von {n}"
};
const FELDER_TEXT_STANDARD = {
  anleitung: "Was gibst du an? Tippe die Angaben an, die du machen willst – der Rest bleibt leer.",
  angeben: "Gebe ich an",
  leer: "Lasse ich leer",
  pflicht: "Pflicht",
  freiwillig: "freiwillig",
  wofuer: "Angegebener Zweck:",
  ohneGrund: "Kein Zweck angegeben.",
  fertig: "Fertig",
  erstPruefen: "Erst prüfen",
  nichtNutzen: "Nicht nutzen",
  ergebnisTitel: "Deine Auswahl im Einzelnen",
  allesPasst: "Alle Angaben passen zu deinem Ziel.",
  allesWahl: "Das ist in Ordnung – du hast selbst entschieden. Bei jeder Zeile steht, was deine Wahl für dein Ziel bedeutet.",
  nochNicht1: "Eine Zeile solltest du dir noch einmal ansehen.",
  nochNichtN: "{n} Zeilen solltest du dir noch einmal ansehen.",
  gesperrt: "Das Formular lässt sich so nicht abschicken. Pflichtangaben:",
  gesperrtWahl: "Deine Entscheidung: angeben oder das Angebot nicht nutzen.",
  gesperrtUnklar: "Ist dir der Zweck unklar, gib es noch nicht ein: Prüfe erst – oder nutze das Angebot nicht.",
  nichtNutzenText: "Das ist deine Entscheidung und völlig in Ordnung. Du musst das Angebot nicht nutzen.",
  erstPruefenText: "Das ist in Ordnung – prüfen darfst du immer zuerst. In diesem Formular steht bei jeder Zeile der Zweck.",
  erstPruefenUnklar: "Das ist in Ordnung. Ist der Zweck unklar, gibst du die Angabe noch nicht an – du prüfst erst oder holst dir Unterstützung.",
  lernOk: "Du musst jetzt keine Daten angeben.",
  lernFrageAndere: "Sieh dir trotzdem die übrigen Angaben an: Wie würdest du dort entscheiden?",
  lernFrageAlle: "Sieh dir trotzdem die Angaben an: Wie würdest du dort entscheiden?",
  lernNurUeben: "Das ist nur eine Übung – dabei gibst du keine Daten weiter.",
  lernKnopf: "Angaben ansehen",
  lernBleibt: "Deine Entscheidung gilt weiter:",
  lernZustand: { erstPruefen: "Wird erst geprüft", nichtNutzen: "Wird nicht angegeben" },
  lernWort: { erstPruefen: "erst prüfen", nichtNutzen: "nicht angegeben" },
  sicherGehandelt: "Du hast sicher gehandelt.",
  angegebenWort: "angegeben",
  leerWort: "leer gelassen",
  status: { passt: "✓ Passt", wahl: "ℹ Deine Wahl", zuviel: "⚠ Mehr als nötig", pruefen: "⚠ Erst prüfen", gesichert: "✓ Sicher gehandelt" },
  nochmal: "Nochmal versuchen",  /* wie der Knopf auf allen Rückmeldeseiten */
  zurueck: "Zurück zum Formular",
  weiter: "Weiter",
  spaeter: "Diese Aufgabe kommt später noch einmal.",  /* wie der Satz auf allen Rückmeldeseiten */
  situationVon: "Situation {i} von {n}"
};

/* Texte je Stufe lesen: FELDER_TEXT.x liefert die Fassung der aktuellen
   Sprachstufe (Rückfall Leicht, wenn ein Schlüssel fehlt). */
function stufenTabelle(stufen) {
  const o = {};
  Object.keys(stufen.leicht).forEach(k => Object.defineProperty(o, k, {
    enumerable: true,
    get() { const t = stufen[languageLevel]; return (t && t[k] !== undefined) ? t[k] : stufen.leicht[k]; }
  }));
  return o;
}
const FELDER_TEXT = stufenTabelle({ leicht: FELDER_TEXT_LEICHT, einfach: FELDER_TEXT_EINFACH, standard: FELDER_TEXT_STANDARD });

let felderAktiv = null;  /* die eine Formular-Aufgabe auf dem Bildschirm */
let felderWahl = {};     /* Sitzung: gewählte Zeilen je Aufgabe (Fragetext) – nichts gespeichert */

function felderAufgabe(q) {
  return !!(q && q.typ === "felder" && Array.isArray(q.felder) && q.felder.length);
}

/* Bewertung EINER Zeile – nur über den Zweck, nie über die Pflicht. */
function felderBewerten(feld, angegeben) {
  if (angegeben && feld.zweck === "passt-nicht") return { stufe: "zuviel", fehler: true };
  if (angegeben && feld.zweck === "unklar") return { stufe: "pruefen", fehler: true };
  if (feld.zweck === "deine-wahl") return { stufe: "wahl", fehler: false };
  if (!angegeben && feld.zweck === "passt") return { stufe: "wahl", fehler: false };
  return { stufe: "passt", fehler: false };
}

function felderZustandText(feld, an) {
  const z = feld.zustand || {};
  return an ? "✓ " + (z.an || FELDER_TEXT.angeben) : "– " + (z.aus || FELDER_TEXT.leer);
}

/* lern (optional): Lern-Schritt nach „erst prüfen“ / „nicht nutzen“ –
   { art, fest: [Zeilen mit unklarer Pflicht, bleiben leer und gesperrt] }. */
function buildFelderAufgabe(q, ort, topicId, lern) {
  const vorher = felderAktiv;
  felderAktiv = { q, ort, topicId, lern: lern || null, weiter: vorher && vorher.q === q ? vorher.weiter : null };
  const wahl = felderWahl[aufgabeSchluessel(q)] || [];
  const fest = (lern && lern.fest) || [];
  const zeilen = q.felder.map((f, i) => {
    const istFest = fest.indexOf(i) !== -1;
    const an = !istFest && wahl.indexOf(i) !== -1;
    const id = "feld-" + i;
    const wofuer = f.wofuer ? `${FELDER_TEXT.wofuer} ${f.wofuer}` : FELDER_TEXT.ohneGrund;
    const festText = istFest ? FELDER_TEXT.lernZustand[lern.art] : "";
    return `
        <label class="feld-zeile${an ? " is-an" : ""}${istFest ? " is-fest" : ""}" for="${id}">
          <input type="checkbox" class="feld-check" id="${id}" data-index="${i}"${an ? " checked" : ""}${istFest ? " disabled" : ""} onchange="felderUmschalten(this)"
            aria-label="${escapeHtml(f.name + ", " + (f.pflicht ? FELDER_TEXT.pflicht : FELDER_TEXT.freiwillig) + ". " + wofuer + (istFest ? " " + festText + "." : ""))}">
          <span class="feld-text">
            <span class="feld-kopf"><span class="feld-name">${escapeHtml(f.name)}</span><span class="sr-only">, </span>
            <span class="feld-art">${f.pflicht ? FELDER_TEXT.pflicht : FELDER_TEXT.freiwillig}</span></span><span class="sr-only">. </span>
            <span class="feld-wofuer">${escapeHtml(wofuer)}</span>
          </span>
          <span class="feld-zustand" aria-hidden="true">${escapeHtml(istFest ? "– " + festText : felderZustandText(f, an))}</span>
        </label>`;
  }).join("");
  const form = q.formular || {};
  const situation = ketteText(q.situation);
  const auswegName = lern && (lern.art === "nichtNutzen" ? ((q.ausweg && q.ausweg.nichtNutzen) || FELDER_TEXT.nichtNutzen) : FELDER_TEXT.erstPruefen);
  const knoepfe = lern
    ? `<button type="button" class="primary-action felder-fertig" onclick="felderFertig()">${escapeHtml(FELDER_TEXT.fertig)}</button>`
    : `<button type="button" class="primary-action felder-fertig" onclick="felderFertig()">${escapeHtml(FELDER_TEXT.fertig)}</button>
        <button type="button" class="secondary-action" onclick="felderAusweg('erstPruefen')">${escapeHtml(FELDER_TEXT.erstPruefen)}</button>
        <button type="button" class="secondary-action" onclick="felderAusweg('nichtNutzen')">${escapeHtml((q.ausweg && q.ausweg.nichtNutzen) || FELDER_TEXT.nichtNutzen)}</button>`;
  return `
    <div class="felder-aufgabe${lern ? " felder-aufgabe--lern" : ""}">
      ${situation ? `<p class="vorhersage-situation">${escapeHtml(situation)}</p>` : ""}
      <p class="sz-fake-band">Das ist nicht echt. Das ist nur zum Üben.</p>
      ${lern ? `<div class="felder-lernschritt">
        <p><strong>${escapeHtml(FELDER_TEXT.lernBleibt)}</strong> ${escapeHtml(String(auswegName).replace(/\.$/, ""))}.</p>
        <p>${escapeHtml(fest.length ? FELDER_TEXT.lernFrageAndere : FELDER_TEXT.lernFrageAlle)}</p>
        <p>${escapeHtml(FELDER_TEXT.lernNurUeben)}</p>
      </div>` : ""}
      <div class="felder-formular">
        ${form.adresse ? `<p class="felder-adresse">${escapeHtml(form.adresse)}</p>` : ""}
        ${form.titel ? `<p class="felder-formular-titel">${escapeHtml(form.titel)}</p>` : ""}
        <fieldset class="felder-liste">
          <legend class="frage-text">${escapeHtml(q.question)}</legend>
          <p class="felder-anleitung">${escapeHtml(FELDER_TEXT.anleitung)}</p>
          ${buildTaskHelpBox(taskHint(q, "quiz"), true)}
          ${zeilen}
        </fieldset>
      </div>
      <div class="felder-aktionen felder-aktionen--start">
        ${knoepfe}
      </div>
      <div class="felder-rueckmeldung" id="felderRueckmeldung" role="status" aria-live="polite" tabindex="-1"></div>
    </div>`;
}

function felderUmschalten(el) {
  const a = felderAktiv;
  if (!a || !el) return;
  const i = Number(el.dataset.index);
  const zeile = el.closest(".feld-zeile");
  if (zeile) {
    zeile.classList.toggle("is-an", el.checked);
    const z = zeile.querySelector(".feld-zustand");
    if (z) z.textContent = felderZustandText(a.q.felder[i], el.checked);
  }
  const key = aufgabeSchluessel(a.q);
  const wahl = (felderWahl[key] || []).filter(x => x !== i);
  if (el.checked) wahl.push(i);
  felderWahl[key] = wahl;
}

function felderGewaehlt() {
  return Array.from(content.querySelectorAll(".feld-check")).filter(c => c.checked).map(c => Number(c.dataset.index));
}

function felderSperren() {
  content.querySelectorAll(".feld-check, .felder-aktionen--start button").forEach(el => { el.disabled = true; });
}

/* `still` (Paket T4b): beim Wiederherstellen nach einem Sprachwechsel nicht
   noch einmal vorlesen. */
function felderZeigen(html, still, ausgewertet) {
  const box = document.getElementById("felderRueckmeldung");
  if (!box) return;
  /* D8 (01.10.2026, Befund B2): Nach der Auswertung tritt das Formular
     zurück. Die Situation bleibt oben stehen, darunter die Rückmeldung
     Zeile für Zeile – sie nennt jede Angabe und die eigene Wahl. Vorher
     standen Formular und Rückmeldung untereinander (über 3.000 px). */
  const aufgabe = box.closest(".felder-aufgabe");
  if (aufgabe) aufgabe.classList.toggle("felder-aufgabe--ausgewertet", !!ausgewertet);
  box.innerHTML = html;
  box.focus();
  if (!still) sprichEingefuegteRueckmeldung(box);
}

/* Paket T4b (29.09.2026): Formular nach einem Sprachwechsel wieder in den
   Stand bringen, den die Person schon erreicht hatte. `form` kommt aus
   merkeStelle: { key, lern, stand }. `stand` hält felderAktiv selbst fest:
   { art: "gesperrt" } (Pflicht-Angabe leer), { art: "ausweg", ausweg }
   („erst prüfen“ / „nicht nutzen“) oder { art: "bewertet", merk }
   (Auswertung). Neu gezeichnet wird mit denselben Zeilen – die Texte in der
   neuen Stufe –, aber ohne neue Bewertung: nichts gemerkt, nichts gezählt,
   kein Ton, keine Ansage. Nur wenn wirklich dieselbe Aufgabe dasteht. */
function felderWiederherstellen(form) {
  const a = felderAktiv;
  if (!a || !form || aufgabeSchluessel(a.q) !== form.key || !content.querySelector(".felder-aufgabe")) return;
  if (form.lern && !a.lern) felderLernschritt(form.lern.art, true);
  const s = form.stand;
  if (!s) return;
  if (s.art === "ausweg") felderAusweg(s.ausweg, true);
  else if (s.art === "gesperrt" || s.art === "bewertet") felderFertig({ merk: s.merk || null });
}

/* Weiter-Knopf unten auf dem Lernschritt freigeben (vorher „Zur Übung ↓“). */
function felderNavFrei() {
  const topic = getCurrentTopic();
  const lessons = topic ? getLessonsForMode(topic, currentMode) : [];
  showNav(true, true, currentStep === lessons.length - 1 ? weiterTextAmEnde(topic) : "Weiter");
}

/* `wieder` (Paket T4b): { merk } – dieselbe Auswertung nach einem
   Sprachwechsel nur neu zeigen (siehe felderWiederherstellen). */
function felderFertig(wieder) {
  const a = felderAktiv;
  if (!a) return;
  const wahl = felderGewaehlt();
  felderWahl[aufgabeSchluessel(a.q)] = wahl;
  /* Pflicht leer: Das Formular geht nicht weiter. Kein Fehler, nichts gemerkt.
     Im Lern-Schritt gibt es keine Sperre: Die Entscheidung ist schon gefallen,
     hier zählt nur die Überlegung je Zeile – leer lassen ist nie ein Fehler. */
  const gesperrt = a.q.felder.map((f, i) => ({ f, i })).filter(x => !a.lern && x.f.pflicht && wahl.indexOf(x.i) === -1);
  if (gesperrt.length) {
    /* Zweck klar: angeben oder nicht nutzen. Zweck unklar: erst prüfen oder
       nicht nutzen – nie „das ist unnötig“. Bei beiden Gruppen mit Namen. */
    const unklar = gesperrt.filter(x => x.f.zweck === "unklar" || x.f.zweck === "passt-nicht");
    const klar = gesperrt.filter(x => unklar.indexOf(x) === -1);
    const mitNamen = (liste, text) => (unklar.length && klar.length ? liste.map(x => x.f.name).join(", ") + ": " : "") + text;
    felderZeigen(`
      <p class="felder-gesperrt"><strong>${escapeHtml(FELDER_TEXT.gesperrt)}</strong> ${escapeHtml(gesperrt.map(x => x.f.name).join(", "))}.</p>
      ${klar.length ? `<p>${escapeHtml(mitNamen(klar, FELDER_TEXT.gesperrtWahl))}</p>` : ""}
      ${unklar.length ? `<p>${escapeHtml(mitNamen(unklar, FELDER_TEXT.gesperrtUnklar))}</p>` : ""}`, !!wieder);
    a.stand = { art: "gesperrt" };
    return;
  }
  const fest = (a.lern && a.lern.fest) || [];
  const ergebnis = a.q.felder.map((f, i) => {
    if (fest.indexOf(i) !== -1) {
      return { f, an: false, fest: true, text: (f.rueckmeldung || {}).leer || "", stufe: "gesichert", fehler: false };
    }
    const an = wahl.indexOf(i) !== -1;
    return Object.assign({ f, an, text: (f.rueckmeldung || {})[an ? "angegeben" : "leer"] || "" }, felderBewerten(f, an));
  });
  const fehler = ergebnis.filter(e => e.fehler).length;
  const richtig = fehler === 0;
  /* Nein bei „Deine Wahl“ ist kein Fehler – aber nicht „alles passt zum Ziel“:
     Die Zeile selbst nennt die Folge für das eigene Ziel. */
  const neinGesagt = ergebnis.some(e => e.stufe === "wahl" && !e.an);
  const summe = !richtig ? (fehler === 1 ? FELDER_TEXT.nochNicht1 : FELDER_TEXT.nochNichtN.replace("{n}", fehler))
    : (neinGesagt ? FELDER_TEXT.allesWahl : FELDER_TEXT.allesPasst);
  const merk = wieder ? (wieder.merk || { korrektur: false }) : aufgabeMerken(a.topicId, a.q, richtig);
  if (a.ort === "wiederholen" && richtig && !wieder) { if (merk.korrektur) bigQuizKorrigiert++; else bigQuizScore++; }
  if (!wieder) playSound(richtig ? "correct" : "wrong");
  a.stand = { art: "bewertet", merk: merk };
  felderSperren();
  const zeilen = ergebnis.map(e => `
      <li class="feld-ergebnis feld-ergebnis--${e.stufe}">
        <strong>${escapeHtml(FELDER_TEXT.status[e.stufe])}: ${escapeHtml(e.f.name)}</strong>
        <span class="feld-ergebnis-wahl">(${escapeHtml(e.f.pflicht ? FELDER_TEXT.pflicht : FELDER_TEXT.freiwillig)}, ${escapeHtml(e.fest ? FELDER_TEXT.lernWort[a.lern.art] : (e.an ? FELDER_TEXT.angegebenWort : FELDER_TEXT.leerWort))})</span>
        <span class="feld-ergebnis-text">${escapeHtml(e.text)}</span>
      </li>`).join("");
  let vorbild = "";
  if (!richtig && a.q.nachFehler && a.ort === "lektion") {
    const topic = getCurrentTopic();
    const lessons = topic ? getLessonsForMode(topic, currentMode) : [];
    vorbild = topic ? vorbildAngebotHtml(topic, lessons[currentStep], lessons) : "";
  }
  felderZeigen(`
    <h3>${escapeHtml(FELDER_TEXT.ergebnisTitel)}</h3>
    ${a.lern ? `<p class="felder-summe">${escapeHtml(FELDER_TEXT.sicherGehandelt)}</p>` : ""}
    <p class="felder-summe">${escapeHtml(summe)}</p>
    <ul class="felder-ergebnis-liste">${zeilen}</ul>
    ${korrekturHinweisHtml(merk)}
    ${regelKastenHtml((typeof regelZuSatz === "function") ? regelZuSatz(a.q.remember) : null, a.topicId, richtig)}
    ${vorbild}
    <div class="felder-aktionen">
      ${/* D13: Die Knöpfe stehen unten in der Leiste (leisteSpiegeln). Wird ein
            zweiter Versuch angeboten, ist er der Hauptknopf und „Weiter“ der zweite Weg. */""}${richtig ? "" : `<button type="button" class="secondary-action" data-leiste="haupt" onclick="felderNochmal()">${escapeHtml(FELDER_TEXT.nochmal)}</button>`}
      <button type="button" class="primary-action" data-leiste="${richtig ? "haupt" : "neben"}" onclick="felderWeiter()">${escapeHtml(FELDER_TEXT.weiter)}</button>
    </div>
    ${richtig ? "" : `<p class="feedback-spaeter">${escapeHtml(FELDER_TEXT.spaeter)}</p>`}`, !!wieder, true);
  /* D8: unten kein zweites „Weiter“ mehr freischalten (Befund B3) –
     der Knopf in der Rückmeldung führt weiter. */
}

/* Pflicht-Angaben mit unklarem Zweck: Bei ihnen ist „erst prüfen“ oder
   „nicht nutzen“ die sichere Entscheidung – im Lern-Schritt bleiben sie fest. */
function felderUnklarePflicht(q) {
  return q.felder.map((f, i) => (f.pflicht && f.zweck === "unklar") ? i : -1).filter(i => i !== -1);
}

/* „Ich prüfe erst“ / „nicht nutzen“: immer in Ordnung, nie ein Fehler. Die
   Entscheidung ist sicher – sie zeigt aber noch nicht, dass die Person alle
   Angaben unterscheiden kann. Darum folgt der Lern-Schritt; gemerkt (gelöst
   oder schwierig) wird erst dort. Keine Lösungsliste vor der eigenen Wahl. */
/* `still` (Paket T4b): nach einem Sprachwechsel nur wieder zeigen. */
function felderAusweg(art, still) {
  const a = felderAktiv;
  if (!a) return;
  a.stand = { art: "ausweg", ausweg: art };
  const q = a.q;
  const hatUnklar = felderUnklarePflicht(q).length > 0;
  const eigen = q.auswegRueckmeldung && q.auswegRueckmeldung[art];
  const text = eigen || (art === "nichtNutzen" ? FELDER_TEXT.nichtNutzenText : (hatUnklar ? FELDER_TEXT.erstPruefenUnklar : FELDER_TEXT.erstPruefenText));
  felderSperren();
  felderZeigen(`
    <p class="felder-ausweg-text">${escapeHtml(text)}</p>
    <p>${escapeHtml(FELDER_TEXT.lernOk)}</p>
    <p class="felder-lernfrage"><strong>${escapeHtml(hatUnklar ? FELDER_TEXT.lernFrageAndere : FELDER_TEXT.lernFrageAlle)}</strong></p>
    <p>${escapeHtml(FELDER_TEXT.lernNurUeben)}</p>
    <div class="felder-aktionen">
      <button type="button" class="secondary-action" data-leiste="neben" onclick="felderNochmal()">${escapeHtml(FELDER_TEXT.zurueck)}</button>
      <button type="button" class="primary-action" data-leiste="haupt" onclick="felderLernschritt('${art === "nichtNutzen" ? "nichtNutzen" : "erstPruefen"}')">${escapeHtml(FELDER_TEXT.lernKnopf)}</button>
    </div>`, !!still, true);
}

/* Lern-Schritt: dasselbe Formular. Unklare Pflicht-Angaben bleiben fest bei
   der sicheren Entscheidung; die anderen Zeilen entscheidet die Person selbst.
   Nur Simulation – es wird nichts weitergegeben. */
/* `still` (Paket T4b): beim Wiederherstellen keine Ansage. */
function felderLernschritt(art, still) {
  const a = felderAktiv;
  const el = content.querySelector(".felder-aufgabe");
  if (!a || !el) return;
  const fest = felderUnklarePflicht(a.q);
  const key = aufgabeSchluessel(a.q);
  felderWahl[key] = (felderWahl[key] || []).filter(i => fest.indexOf(i) === -1);
  const weiter = a.weiter;
  el.outerHTML = buildFelderAufgabe(a.q, a.ort, a.topicId, { art, fest });
  felderAktiv.weiter = weiter;
  const erstes = content.querySelector(".feld-check:not([disabled])");
  if (erstes) erstes.focus();
  if (!still) announce(fest.length ? FELDER_TEXT.lernFrageAndere : FELDER_TEXT.lernFrageAlle);
}

/* Zweiter Versuch: dasselbe Formular, die bisherige Wahl bleibt stehen –
   im Lern-Schritt bleibt auch der Lern-Schritt. */
function felderNochmal() {
  const a = felderAktiv;
  const el = content.querySelector(".felder-aufgabe");
  if (!a || !el) return;
  const weiter = a.weiter;
  el.outerHTML = buildFelderAufgabe(a.q, a.ort, a.topicId, a.lern);
  felderAktiv.weiter = weiter;
  const erstes = content.querySelector(".feld-check:not([disabled])");
  if (erstes) erstes.focus();
  announce(FELDER_TEXT.anleitung);
}

function felderWeiter() {
  const a = felderAktiv;
  if (!a) return;
  felderAktiv = null;
  if (a.ort === "lektion") return continueAfterPractice();
  if (a.ort === "wiederholen") return nextBigQuizQuestion();
  return a.weiter ? a.weiter() : renderCompletionPage(a.topicId);
}

/* Neue Situation mit Formular-Aufgaben (Kurz: F2; Lang: F2, dann F3). */
let neueSituationIndex = 0;  /* Paket 5: für den Rückweg nach einem Sprachwechsel */
function renderNeueSituationFelder(topic, index) {
  const liste = neueSituationAufgaben(topic.neueSituation);
  if (!liste.length) return renderCompletionPage(topic.id);
  stopReading();
  currentTopicId = topic.id;
  const i = Math.max(0, Math.min(index, liste.length - 1));
  neueSituationIndex = i;
  setProgressVisible(false);
  setBottomNavVisible(false);
  showNav(false, false);
  setHeader(topic.title, "Neue Situation", "Neue Situation", "Fast fertig", 95);
  setOrientation(`Du bist fast fertig mit dem Thema: ${topic.title}. Jetzt kommt eine neue Situation.`);
  felderAktiv = null;
  content.innerHTML = `
    ${lernRahmenLeiste()}
    <article class="card scenario-card transfer-card" style="${getTopicColorStyle(topic.id)}" data-readable="true">
      <h2>${LERNWEG_TEXT.neueSituation}</h2>
      ${liste.length > 1 ? `<p class="kette-zaehler">${escapeHtml(FELDER_TEXT.situationVon.replace("{i}", i + 1).replace("{n}", liste.length))}</p>` : ""}
      <p class="transfer-intro">${escapeHtml(lernwegText("neueSituationText"))}</p>
      ${buildFelderAufgabe(liste[i], "neu", topic.id)}
    </article>
  `;
  felderAktiv.weiter = () => {
    if (i + 1 < liste.length) return renderNeueSituationFelder(topic, i + 1);
    miniCheckDone[topic.id] = true;
    return renderCompletionPage(topic.id);
  };
  const weg = currentMode;
  stelleMerken(() => { currentTopicId = topic.id; currentMode = weg; renderNeueSituationFelder(topic, i); });
  pauseStelleMerken({ art: "neu", topicId: topic.id, index: i, teil: "frage" });
  focusContent();
  renderLegalFooter();
}

/* „Noch einmal üben“: Formular-Aufgabe im Wiederholen-Quiz. */
function renderBigQuizFelder(q, total) {
  const progress = Math.round((bigQuizIndex / total) * 100);
  setProgressVisible(true);
  setBottomNavVisible(false);
  setHeader(bigQuizTitle, "Quiz", `Frage ${bigQuizIndex + 1} von ${total}`, bigQuizTitle, progress);
  setOrientation(`Du machst: ${bigQuizTitle}. Frage ${bigQuizIndex + 1} von ${total}.`);
  showNav(false, false);
  felderAktiv = null;
  content.innerHTML = `
    ${lernRahmenLeiste("renderMyPath")}
    <article class="card quiz-card big-quiz-card" style="${getTopicColorStyle(q.topicId)}" data-readable="true">
      <p class="big-quiz-topic-badge">${escapeHtml(q.topicTitle)}</p>
      <h2 class="sr-only">${escapeHtml(bigQuizTitle)}</h2>
      <p class="frage-zaehler">Frage ${bigQuizIndex + 1} von ${total}</p>
      ${buildFelderAufgabe(q.felder, "wiederholen", q.topicId)}
    </article>
  `;
  const i = bigQuizIndex;
  stelleMerken(() => { bigQuizIndex = i; renderBigQuizQuestion(); });
  pauseStelleMerken({ art: "wiederholen", topicId: q.topicId, index: i, teil: "frage" });
  focusContent();
  renderLegalFooter();
}

/* ------------------------------------------------------------
   BEISPIEL SEHEN (Lernweg, 26.09.2026): Bevor die Person selbst übt, macht
   Alex oder Tilda die richtige Handlung in einem ähnlichen Fall vor
   („worked example"). Daten: lesson.vorbild (Leicht, topics.js) und
   versions.*.vorbild (KURZ_VERSIONS) – die Stufe wählt resolveLessonContent.
   Im langen Weg bekommt die ERSTE Lektion, deren Übung dieselbe Regel übt,
   das Vorbild der passenden Kurz-Lektion (keine neuen Texte nötig).
   Hilfe wird weniger: Kennt die Person die Regel schon aus einem anderen
   Thema, ist das Vorbild nur noch zugeklappt da („Beispiel ansehen") –
   abrufbar, aber nicht mehr aufgedrängt. „Ich bin unsicher" bleibt immer.
   ------------------------------------------------------------ */
function vorbildFuer(topic, rohLektion, lessons) {
  const lesson = resolveLessonContent(rohLektion, languageLevel);
  if (Array.isArray(lesson.vorbild) && lesson.vorbild.length) {
    return { text: lesson.vorbild, wer: rohLektion.vorbildWer || "Tilda" };
  }
  if (!rohLektion.practice || !Array.isArray(topic.einfachLessons)) return null;
  const rid = regelZuordnungTabelle(rohLektion.practice.remember).rid;
  if (!rid) return null;
  const erste = (lessons || []).find(l => l && l.practice && regelZuordnungTabelle(l.practice.remember).rid === rid);
  if (erste !== rohLektion) return null;
  const kurz = topic.einfachLessons.find(l => l.practice && Array.isArray(l.vorbild)
    && regelZuordnungTabelle(l.practice.remember).rid === rid);
  if (!kurz) return null;
  const v = resolveLessonContent(kurz, languageLevel);
  return { text: v.vorbild, wer: kurz.vorbildWer || "Tilda" };
}

/* Entscheidung für die Prüfgruppe (Prüfgruppen-Test Runde 2, 26.09.2026):
   Beim ersten Mal steht das Vorbild offen (Forschung: Vorbild vor dem
   eigenen Üben hilft gerade Neulingen). Es verlängert die Lektions-Seite im
   Kurz-Weg aber um etwa 20 Wörter und wiederholt den Lektions-Text teils.
   Findet die Prüfgruppe das zu lang: hier auf true – dann ist jedes Vorbild
   zugeklappt („Beispiel ansehen") und nur auf Tippen da. */
const VORBILD_IMMER_ZUGEKLAPPT = false;

function vorbildHeading(wer) {
  const person = wer === "Alex" ? "Alex" : "Tilda";
  return `<div class="vorbild-heading"><img class="vorbild-figure" src="assets/figures/vormachen-${person.toLowerCase()}.webp" alt="${person} zeigt ein Beispiel." width="72" height="72" loading="lazy"><h3>So macht es ${escapeHtml(wer)}:</h3></div>`;
}

function vorbildHtml(topic, rohLektion, lessons, { offen = false } = {}) {
  const vb = vorbildFuer(topic, rohLektion, lessons);
  if (!vb) return "";
  const rid = rohLektion.practice ? regelZuordnungTabelle(rohLektion.practice.remember).rid : null;
  const bekannt = VORBILD_IMMER_ZUGEKLAPPT || (!!rid && regelThemen(rid).some(t => t !== topic.id));
  const saetze = vb.text.map(x => `<p>${escapeHtml(typeof x === "string" ? x : (x && x.text) || "")}</p>`).join("");
  const kasten = `
    <div class="vorbild-box">
      <div class="vorbild-text">
        ${vorbildHeading(vb.wer)}
        ${saetze}
      </div>
    </div>`;
  /* Auf dem verpflichtenden Beispielteil wird das Vorbild sichtbar gezeigt.
     Andere Aufrufe behalten das bisherige Zurücknehmen bekannter Hilfe. */
  return bekannt && !offen
    ? `<details class="later-details vorbild-details"><summary class="later-title">Beispiel ansehen: So macht es ${escapeHtml(vb.wer)}</summary>${kasten}</details>`
    : kasten;
}

/* Vorbild nach einem Fehler (Datenschutz, Paket 3, 28.09.2026): Unterstützung,
   die von selbst kommt – auch für Menschen, die nicht selbst Hilfe suchen.
   Nur wenn die Aufgabe `nachFehler` trägt und die Einheit ein Vorbild hat.
   Zugeklappt angeboten: ein Tippen, kein Zwang. Andere Themen: unverändert. */
function vorbildAngebotHtml(topic, rohLektion, lessons) {
  const vb = rohLektion ? vorbildFuer(topic, rohLektion, lessons) : null;
  if (!vb) return "";
  const saetze = vb.text.map(x => `<p>${escapeHtml(typeof x === "string" ? x : (x && x.text) || "")}</p>`).join("");
  return `
      <details class="later-details vorbild-details vorbild-nach-fehler">
        <summary class="later-title">Beispiel ansehen: So macht es ${escapeHtml(vb.wer)}</summary>
        <div class="vorbild-box"><div class="vorbild-text">${vorbildHeading(vb.wer)}${saetze}</div></div>
      </details>`;
}

/* Erinnern (Lernweg, 26.09.2026): Die Zusammenfassung ist Abruf, nicht
   Wiederlesen. Erst die Frage, dann auf Tippen die Regeln – kein Test, keine
   Wertung, und „Weiter" geht auch ohne Aufdecken (keine Sackgasse). */
function erinnernHtml(inhalt, frage, knopf) {
  /* frage/knopf: optional je Thema (Datenschutz, Paket 2: „Wie geht dein
     Plan?“). Ohne Angabe gelten die gemeinsamen Texte wie bisher. */
  const f = ketteText(frage) || lernwegText("erinnernFrage");
  const k = ketteText(knopf) || LERNWEG_TEXT.erinnernKnopf;
  return `
    <p class="erinnern-frage">${escapeHtml(f)}</p>
    <details class="later-details erinnern-details" ontoggle="erinnernGeoeffnet(this)">
      <summary class="later-title">${escapeHtml(k)}</summary>
      <div class="erinnern-inhalt">${inhalt}</div>
    </details>`;
}

function erinnernGeoeffnet(el) {
  if (!el || !el.open) return;
  sprichEingefuegteRueckmeldung(el.querySelector(".erinnern-inhalt"));
}

/* ============================================================
   D5 Handy-Simulation (01.10.2026)
   ------------------------------------------------------------
   Anwenden durch Tun: Die App aus dem Einstieg fragt wie ein echtes Handy
   nach Berechtigungen. Die Person tippt „Erlauben" oder „Nicht erlauben" –
   ohne Zwischenschritt, wie auf dem Handy. Danach die Auswertung je Frage
   mit denselben Regeln und Wörtern wie das Formular „Felder auswählen"
   (felderBewerten, FELDER_TEXT.status) und die Auflösung aus
   topic.vorhersage – alles schon in drei Sprachstufen.
   Neu sind nur die Handy-Fragen und Handy-Knöpfe hier unten: Sie sind die
   nachgebaute Bedienoberfläche des Handys und in allen Stufen gleich
   (freigabepflichtig, berichte/design-umbau/01-OFFENE-PUNKTE.md).
   Nichts wird gespeichert; die Simulation zählt nicht zu den schwierigen
   Aufgaben. Zuerst nur Datenschutz; andere Themen nach demselben Muster.
   ============================================================ */
const HANDY_SIMULATION = {
  datenschutz: {
    app: "Foto-Spaß",
    fragen: [
      { frage: "Darf Foto-Spaß deine Fotos sehen?", pictogram: "pikto-photo", wort: "Fotos", zweck: "passt" },
      { frage: "Darf Foto-Spaß deinen Standort sehen?", pictogram: "pikto-location", wort: "Standort", zweck: "deine-wahl" },
      { frage: "Darf Foto-Spaß deine Kontakte sehen?", pictogram: "pikto-people", wort: "Kontakte", zweck: "passt-nicht" }
    ]
  }
};
let simulationFertig = {};
let simulationWahl = {};

function renderHandySimulation(topic, index) {
  const sim = HANDY_SIMULATION[topic.id];
  if (!sim) return renderMiniCheck(topic.id);
  if (index === 0) simulationWahl[topic.id] = [];
  stopReading();
  currentTopicId = topic.id;
  setProgressVisible(false);
  setBottomNavVisible(false);
  showNav(false, false);
  setHeader(topic.title, LERNWEG_TEXT.neueSituation, LERNWEG_TEXT.neueSituation, "Fast fertig", 95);
  document.body.classList.add("lesson-view");
  aufUebungsSeite = false;
  setOrientation(`Du übst: ${topic.title}. ${LERNWEG_TEXT.neueSituation}.`);
  const vh = vorhersageFuer(topic);
  const f = sim.fragen[index];
  content.innerHTML = `
    ${buildLernLeiste()}
    <article class="card lesson-card sim-seite" style="${getTopicColorStyle(topic.id)}" data-readable="true">
      <h2>${escapeHtml(LERNWEG_TEXT.neueSituation)}</h2>
      <p>${escapeHtml(lernwegText("neueSituationText"))}</p>
      ${vh && vh.situation ? `<p class="vorhersage-situation">${escapeHtml(vh.situation)}</p>` : ""}
      <div class="sim-handy" role="group" aria-label="Nachgebautes Handy">
        <p class="sim-app"><span class="sim-app-zeichen" aria-hidden="true"></span>${escapeHtml(sim.app)}</p>
        <div class="sim-dialog">
          <img class="sim-pikto" src="${pictoSrc(f.pictogram)}" alt="" aria-hidden="true">
          <p class="sim-frage">${escapeHtml(f.frage)}</p>
          <div class="sim-knoepfe">
            <button type="button" class="sim-knopf" onclick="handySimulationAntwort('${escapeHtml(topic.id)}', ${index}, true)">Erlauben</button>
            <button type="button" class="sim-knopf" onclick="handySimulationAntwort('${escapeHtml(topic.id)}', ${index}, false)">Nicht erlauben</button>
          </div>
        </div>
        <p class="sim-zaehler">${escapeHtml(LERNWEG_TEXT.frageVon.replace("{i}", index + 1).replace("{n}", sim.fragen.length))}</p>
      </div>
      <p class="sz-fake-band">Das ist nicht echt. Das ist nur zum Üben.</p>
    </article>`;
  stelleMerken(() => renderHandySimulation(topic, index));
  focusContent();
}

function handySimulationAntwort(topicId, index, erlaubt) {
  const topic = getTopicById(topicId);
  const sim = HANDY_SIMULATION[topicId];
  if (!topic || !sim) return renderMenu();
  (simulationWahl[topicId] = simulationWahl[topicId] || [])[index] = erlaubt;
  if (index < sim.fragen.length - 1) return renderHandySimulation(topic, index + 1);
  renderHandySimulationErgebnis(topic, false);
}

function renderHandySimulationErgebnis(topic, wieder) {
  const sim = HANDY_SIMULATION[topic.id];
  const wahl = simulationWahl[topic.id] || [];
  stopReading();
  setHeader(topic.title, LERNWEG_TEXT.neueSituation, LERNWEG_TEXT.neueSituation, "Fast fertig", 95);
  document.body.classList.add("lesson-view");
  const ergebnis = sim.fragen.map((f, i) => Object.assign({ f, an: wahl[i] === true }, felderBewerten({ zweck: f.zweck }, wahl[i] === true)));
  const fehler = ergebnis.filter(e => e.fehler).length;
  const vh = vorhersageFuer(topic);
  const vorher = vorhersageStart[topic.id];
  const zeilen = ergebnis.map(e => `
      <li class="feld-ergebnis feld-ergebnis--${e.stufe}">
        <strong>${escapeHtml(FELDER_TEXT.status[e.stufe])}: ${escapeHtml(e.f.wort)}</strong>
        <span class="feld-ergebnis-wahl">(${e.an ? "Erlauben" : "Nicht erlauben"})</span>
      </li>`).join("");
  content.innerHTML = `
    ${buildLernLeiste()}
    <article class="card lesson-card sim-seite" style="${getTopicColorStyle(topic.id)}" data-readable="true">
      <h2>${escapeHtml(FELDER_TEXT.ergebnisTitel)}</h2>
      <ul class="felder-ergebnis-liste">${zeilen}</ul>
      ${vh && vh.aufloesung ? `<p>${escapeHtml(vh.aufloesung)}</p>` : ""}
      ${vh && typeof vorher === "number" && vh.options[vorher] ? `<p class="vorhersage-anfang">${escapeHtml(lernwegText("vorhersageAnfang"))} <strong>${escapeHtml(vh.options[vorher])}</strong></p>` : ""}
      <div class="felder-aktionen">
        ${fehler ? `<button type="button" class="secondary-action" data-leiste="haupt" onclick="renderHandySimulation(getTopicById('${escapeHtml(topic.id)}'), 0)">${escapeHtml(FELDER_TEXT.nochmal)}</button>` : ""}
        <button type="button" class="primary-action" data-leiste="${fehler ? "neben" : "haupt"}" onclick="simulationFertig['${escapeHtml(topic.id)}'] = true; renderMiniCheck('${escapeHtml(topic.id)}')">${escapeHtml(FELDER_TEXT.weiter)}</button>
      </div>
    </article>`;
  if (!wieder) playSound(fehler ? "wrong" : "correct");
  stelleMerken(() => renderHandySimulationErgebnis(topic, true));
  focusContent();
}

function renderMiniCheck(topicId) {
  const topic = getTopicById(topicId);
  if (!topic) return renderMenu();
  /* Anwenden (26.09.2026): zuerst eine neue Situation, sonst die kurze Frage.
     Datenschutz (Paket 2): eine EIGENE neue Situation (topic.neueSituation),
     die sonst nirgends vorkommt – nicht das Übungs-Handy. */
  /* D5 (01.10.2026): zuerst die Handy-Simulation, wo es eine gibt. */
  if (!miniCheckDone[topic.id] && HANDY_SIMULATION[topic.id] && !simulationFertig[topic.id]) return renderHandySimulation(topic, 0);
  if (!miniCheckDone[topic.id] && neueSituationDaten(topic)) return renderNeueSituation(topic, 0);
  const transfer = !miniCheckDone[topic.id] ? transferSzeneWaehlen(topic) : null;
  if (transfer) return renderTransfer(topic, transfer);
  const mq = topic.miniQuestion;
  /* Kein Zwang: ohne Frage oder wenn schon beantwortet, direkt weiter. */
  if (!mq || !Array.isArray(mq.answers) || !mq.answers.length || miniCheckDone[topic.id]) {
    return renderCompletionPage(topic.id);
  }

  stopReading();
  currentTopicId = topic.id;
  setProgressVisible(false);
  setBottomNavVisible(false);
  showNav(false, false);
  setHeader(topic.title, "Kurze Frage", "Kurze Frage", "Fast fertig", 95);
  setOrientation(`Du bist fast fertig mit dem Thema: ${topic.title}. Jetzt kommt eine kurze Frage.`);

  const optionen = mq.answers.map((a, i) =>
    `<button type="button" class="answer-option mini-answer" data-index="${i}">${answerNumBadge(i)}<span class="answer-text">${escapeHtml(answerText(a))}</span></button>`
  ).join("");

  content.innerHTML = `
    ${lernRahmenLeiste()}
    <article class="card sa-card" data-readable="true" style="${getTopicColorStyle(topic.id)}">
      <div class="symbol-heading">
        <span class="access-box-symbol" aria-hidden="true">${getIconHtml(topic.icon || "start")}</span>
        <h2>Eine kurze Frage</h2>
      </div>
      ${buildFrage({ frage: mq.question || "", pikto: questionPikto(mq), antworten: optionen, hilfe: buildTaskHelpBox(taskHint(mq, "quiz"), true) })}
      <p class="sa-hint">Das ist kein Test. Du darfst raten.</p>
      <div id="miniFeedback" class="mini-feedback is-hidden" role="status" aria-live="polite"></div>
    </article>
  `;

  content.querySelectorAll(".mini-answer").forEach(btn => {
    btn.addEventListener("click", () => {
      if (miniCheckDone[topic.id]) return;
      const gewaehlt = Number(btn.dataset.index);
      const richtig = gewaehlt === mq.correct;
      miniCheckDone[topic.id] = true;
      content.querySelectorAll(".mini-answer").forEach(b => {
        b.disabled = true;
        const i = Number(b.dataset.index);
        if (i === mq.correct) b.classList.add("answer-correct");
        else if (i === gewaehlt) b.classList.add("answer-wrong");
      });
      /* Nur bei richtig ein Ton – kein negatives Signal (§3, Došen). */
      if (richtig) playSound("correct");
      const box = document.getElementById("miniFeedback");
      if (box) {
        box.classList.remove("is-hidden");
        box.innerHTML = `
          <p class="mini-feedback-text"><strong>${richtig ? RUECKMELDUNG.passtAnsage : RUECKMELDUNG.nochNichtKurz}</strong> ${escapeHtml(mq.explanation || "")}</p>
          <button type="button" class="primary-action" onclick="renderCompletionPage('${escapeHtml(topic.id)}')">Weiter</button>`;
        sprichEingefuegteRueckmeldung(box);
      }
    });
  });

  focusContent();
  renderLegalFooter();
}

/* Abschluss-Selbstcheck: dieselbe Skala wie die Einstiegsfrage.
   Vorher gab es 12 Fragen am Anfang und keine einzige am Ende – die
   lernende Person hat ihren eigenen Zuwachs nie gesehen. Der Vergleich
   bleibt in der Sitzung, es wird nichts gespeichert (§14).
   PRUEFGRUPPE: Wortlaut "Das war das Thema. Wie ist es jetzt?" testen (§13). */
/* buildGoalsDone („Darum ging es in diesem Thema", Prüfbericht B13) ist am
   26.09.2026 entfallen: Die neue Abschluss-Seite (Paket C) schließt den Kreis
   über die geübten REGELN statt über die Lernziele – kürzer, und genau das,
   was die Karte zählt. Die Ziele stehen weiter auf der Start-Seite. */

function buildClosingSelfCheck(topic) {
  const sa = resolveSelfAssessment(topic, languageLevel);
  if (!sa || !Array.isArray(sa.options) || !sa.options.length) return "";
  const optionen = sa.options.map((opt, i) =>
    `<button type="button" class="sa-option-btn closing-sa" data-index="${i}"><span class="answer-text">${escapeHtml(answerText(opt))}</span></button>`
  ).join("");
  return `
    <div class="access-box closing-sa-box">
      ${`<h3 class="sr-only">Wie ist es jetzt?</h3>${buildMeinung({ frage: "Das war das Thema. Wie ist es jetzt?", optionen })}`}
      <p id="closingSaResult" class="closing-sa-result is-hidden" role="status" aria-live="polite"></p>
    </div>`;
}

function bindClosingSelfCheck(topic) {
  const sa = resolveSelfAssessment(topic, languageLevel);
  const knoepfe = content.querySelectorAll(".closing-sa");
  if (!knoepfe.length || !sa) return;
  knoepfe.forEach(btn => {
    btn.addEventListener("click", () => {
      const jetzt = Number(btn.dataset.index);
      knoepfe.forEach(b => { b.disabled = true; b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      const vorher = selfAssessmentStart[topic.id];
      const feld = document.getElementById("closingSaResult");
      if (!feld) return;
      let text;
      if (typeof vorher !== "number") {
        text = "Danke. Du kannst das Thema jederzeit wiederholen.";
      } else if (jetzt > vorher) {
        /* Kein „Du hast dazugelernt" mehr: Das behauptete einen Lernerfolg,
           der nur auf dem eigenen Gefühl beruht (T07; Prüfgruppen-Test F6,
           26.09.2026). Der Vergleich spricht für sich. */
        text = `Am Anfang: ${answerText(sa.options[vorher])}. Jetzt: ${answerText(sa.options[jetzt])}.`;
      } else if (jetzt === vorher) {
        text = `Am Anfang und jetzt: ${answerText(sa.options[jetzt])}. Das ist in Ordnung. Du kannst das Thema noch einmal machen.`;
      } else {
        /* Kein Tadel. Ehrlichkeit anerkennen und einen Weg anbieten (§3, §4). */
        text = "Danke, dass du ehrlich bist. Beim Lernen merkt man oft erst, wie viel es gibt. Du kannst das Thema noch einmal machen.";
      }
      feld.textContent = text;
      feld.classList.remove("is-hidden");
      playSound("success");
      sprichEingefuegteRueckmeldung(feld);
    });
  });
}

/* Rückblick auf die Vorhersage (Datenschutz, Paket 2). Dieselbe Situation,
   dieselben Antworten wie am Einstieg – ohne richtig oder falsch. Nach der
   Wahl stehen der Vergleich und die Auflösung der Situation da (Daten:
   topic.vorhersage.aufloesung). Nichts wird gespeichert (§14). */
function buildVorhersageRueckblick(topic) {
  const vh = vorhersageFuer(topic);
  if (!vh) return "";
  const vorher = vorhersageStart[topic.id];
  const optionen = vh.options.map((opt, i) =>
    `<button type="button" class="sa-option-btn vorhersage-jetzt" data-index="${i}"><span class="answer-text">${escapeHtml(answerText(opt))}</span></button>`
  ).join("");
  return `
    <div class="access-box closing-sa-box vorhersage-rueckblick">
      ${typeof vorher === "number" && vh.options[vorher]
        ? `<p class="vorhersage-anfang">${escapeHtml(lernwegText("vorhersageAnfang"))} <strong>${escapeHtml(vh.options[vorher])}</strong></p>` : ""}
      ${vh.situation ? `<p class="vorhersage-situation">${escapeHtml(vh.situation)}</p>` : ""}
      ${buildMeinung({ frage: lernwegText("vorhersageJetzt"), optionen })}
      <div id="vorhersageErgebnis" class="closing-sa-result is-hidden" role="status" aria-live="polite"></div>
    </div>`;
}

function bindVorhersageRueckblick(topic) {
  const vh = vorhersageFuer(topic);
  const knoepfe = content.querySelectorAll(".vorhersage-jetzt");
  if (!vh || !knoepfe.length) return;
  knoepfe.forEach(btn => {
    btn.addEventListener("click", () => {
      const jetzt = Number(btn.dataset.index);
      knoepfe.forEach(b => { b.disabled = true; b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      const vorher = vorhersageStart[topic.id];
      const feld = document.getElementById("vorhersageErgebnis");
      if (!feld) return;
      const vergleich = (typeof vorher === "number" && vh.options[vorher])
        ? lernwegText("vorhersageVergleich").replace("{a}", vh.options[vorher]).replace("{b}", vh.options[jetzt])
        : "";
      feld.innerHTML = `
        ${vergleich ? `<p>${escapeHtml(vergleich)}</p>` : ""}
        ${vh.aufloesung ? `<p>${escapeHtml(vh.aufloesung)}</p>` : ""}`;
      feld.classList.remove("is-hidden");
      playSound("success");
      sprichEingefuegteRueckmeldung(feld);
    });
  });
}

/* Station 5 (P6): „Hilfe nochmal lesen" auf der Abschlussseite der drei
   sensiblen Themen (hilfe, betrug, ki). Öffnet die erste Lektion des
   Hilfe-Moduls („Hilfe" bei betrug/ki, „Unterstützung" bei hilfe) — der
   Index wird aus den Daten gesucht, nicht fest eingetragen. Mechanik wie
   die Themen-Seite (startTopicMode/resumeLastLesson): Ziel setzen, dann
   renderLesson(). Die Einstiegsfrage wird übersprungen — das Thema ist
   geschafft, die Person will nur nachlesen. */
function openTopicHelpLesson(topicId) {
  const topic = getTopicById(topicId);
  if (!topic || !Array.isArray(topic.lessons)) return renderMenu();
  const idx = topic.lessons.findIndex(l => l && (l.module === "Hilfe" || l.module === "Unterstützung"));
  rememberTopicAmount(topic.id, "full");
  currentTopicId = topic.id;
  currentMode = "full";
  currentStep = idx >= 0 ? idx : 0;
  renderLesson();
}

/* Abschluss: Der Regel-Faden endet nicht mehr vor der letzten Seite
   (Gesamtprüfung Z4, Prüfgruppen-Test C-2). Gezeigt werden die Regeln, die
   in DIESEM Thema gutgeschrieben sind, im Aussehen der Karte, mit dem Satz
   der gewählten Stufe und – wenn es sie gibt – den anderen Themen, in denen
   die Person sie schon angewendet hat. Ohne Gutschrift (nur falsche
   Antworten) die Regeln des Wegs, ehrlich anders überschrieben. */
/* B6: gleicher Satz? Groß-/Kleinschreibung, Leerzeichen und Schlusspunkt egal. */
function gleicherSatz(a, b) {
  const n = t => String(t || "").toLowerCase().replace(/\s+/g, " ").replace(/[.!\s]+$/, "").trim();
  return !!n(a) && n(a) === n(b);
}
function regelSatzZu(merksatz) {
  const rid = (typeof regelZuSatz === "function") ? regelZuSatz(merksatz) : null;
  const r = rid && regelById(rid);
  return r ? regelText(r).kurz : "";
}
function regelnAbschlussIds(topic) {
  const ids = REGELN.filter(r => regelThemen(r.id).indexOf(topic.id) !== -1).map(r => r.id);
  return ids.length ? ids : regelIdsAusUebungen(getLessonsForMode(topic, currentMode));
}

function buildRegelnAbschluss(topic) {
  let ids = REGELN.filter(r => regelThemen(r.id).indexOf(topic.id) !== -1).map(r => r.id);
  let kopf = RUECKMELDUNG.regelnGeuebt;
  if (!ids.length) {
    ids = regelIdsAusUebungen(getLessonsForMode(topic, currentMode));
    kopf = RUECKMELDUNG.regelnThema;
  }
  if (!ids.length) return "";
  const zeilen = ids.map(id => {
    const r = regelById(id);
    if (!r) return "";
    const andere = regelThemen(id).filter(t => t !== topic.id)
      .map(t => { const x = getTopicById(t); return x ? x.title : null; }).filter(Boolean);
    return `
      <li class="regel-platz ${andere.length ? "regel-platz--sitzt" : "regel-platz--gefunden"}">
        ${getPictogramHtml(r.pikto)}
        <span class="regel-platz-text">
          <span class="regel-platz-satz">${escapeHtml(regelText(r).kurz)}</span>
          ${andere.length ? `<span class="regel-platz-stand">${RUECKMELDUNG.kennstDuAus} ${escapeHtml(andere.join(", "))}</span>` : ""}
        </span>
      </li>`;
  }).join("");
  return `
    ${stationBadge("merken")}
    <div class="abschluss-regeln">
      <h3>${kopf}</h3>
      <ol class="regel-liste">${zeilen}</ol>
    </div>`;
}

/* „Eine Sache für heute“ an eine Regel hängen (Lernweg E5, 27.09.2026).
   Zeigt die Regel mit Piktogramm unter dem Handlungs-Schritt. Grüner Rand
   wie in der Regel-Liste, wenn die Regel schon in zwei Themen sitzt. */
function transferRegelHtml(topic) {
  const rid = (typeof TRANSFER_REGEL !== "undefined") && TRANSFER_REGEL[topic.id];
  const r = rid && regelById(rid);
  if (!r) return "";
  /* B6: Steht die Regel schon oben in „Diese Regeln hast du geübt“, nicht
     ein zweites Mal unter „Eine Sache für heute“. */
  if (regelnAbschlussIds(topic).indexOf(rid) !== -1) return "";
  return `
    <div class="regel-platz transfer-regel ${regelStufe(rid) === 2 ? "regel-platz--sitzt" : ""}">
      ${getPictogramHtml(r.pikto)}
      <span class="regel-platz-text">
        <span class="regel-platz-stand">${RUECKMELDUNG.regelDazu}</span>
        <span class="regel-platz-satz">${escapeHtml(regelText(r).kurz)}</span>
      </span>
    </div>`;
}

/* ============================================================
   WEITERLERNEN – Zusatz-Bereich zu einem Thema (28.09.2026)
   ------------------------------------------------------------
   Inhalt: weiterlernen-de.js. Bewusst KEIN Thema und KEIN dritter Weg:
   - keine Regel-Gutschrift (Deine Karte), keine schwierigen Aufgaben,
   - kein Wiedereinstieg, kein Themen-Fortschritt, keine Frage des Tages,
   - keine Abschluss-Seite eines Themas.
   Nutzt nur Darstellungs-Bausteine der Lektion (Text, Aufzählung,
   Warnung, Merk-Kasten, Frage, Vorlesen, Wort-Erklärungen).
   Anlass: Datenschutz-Umbau, Paket 1 – „Weiterlernen: Kontosicherheit“,
   bis daraus ein eigenes 13. Thema wird.
   ============================================================ */
let weiterlernenIndex = 0;
let weiterlernenThema = null;

function weiterlernenDaten(topicId) {
  const w = (typeof WEITERLERNEN !== "undefined" && WEITERLERNEN && WEITERLERNEN[topicId]) || null;
  if (!w) return null;
  /* Paket 5: Oberflächen-Texte je Sprachstufe (Text oder {leicht, einfach, standard}). */
  const o = Object.assign({}, w);
  ["titel", "zusatz", "worum", "knopf", "ende", "zurueck"].forEach(k => { o[k] = ketteText(w[k]); });
  return o;
}

/* Vor-Nutzertest (29.09.2026): Ein Weiterlern-Bereich kann ausgeblendet sein
   (`ausgeblendet` in weiterlernen-de.js). Dann bietet ihn keine Seite an;
   die Daten bleiben unverändert (weiterlernenDaten liefert sie weiter). */
function weiterlernenSichtbar(topicId) {
  const w = weiterlernenDaten(topicId);
  return !!(w && !w.ausgeblendet && Array.isArray(w.lektionen) && w.lektionen.length);
}

function buildWeiterlernenBlock(topic) {
  if (!topic || !weiterlernenSichtbar(topic.id)) return "";
  const w = weiterlernenDaten(topic.id);
  const id = escapeHtml(topic.id);
  return `
    <div class="access-box weiterlernen-box" role="region" aria-label="${escapeHtml(w.titel)}">
      <h3>${escapeHtml(w.titel)}</h3>
      <p>${escapeHtml(w.zusatz)}</p>
      <p>${escapeHtml(w.worum)}</p>
      <button type="button" class="utility-button" onclick="renderWeiterlernen('${id}', 0)">${escapeHtml(w.knopf)}</button>
      ${blockRead(w.titel + ". " + w.zusatz + " " + w.worum)}
    </div>`;
}

/* Inhalt einer Lektion – dieselben Klassen und Bausteine wie renderLesson,
   aber ohne Themen-Logik (keine Regel, kein Vorbild, keine Kette). */
function weiterlernenInhalt(lesson) {
  const plain = (arr) => Array.isArray(arr)
    ? arr.map(i => (typeof i === "object" && i.text) ? i.text : i).join(" ") : "";
  const gezeigtePiktos = new Set();
  const zeilen = Array.isArray(lesson.text) ? lesson.text.map(item => {
    if (typeof item === "object" && item.text) {
      const img = satzPiktoBild(item, gezeigtePiktos);
      return `<div class="ls-text-row">${img}<p>${escapeHtml(item.text)}</p></div>`;
    }
    return `<p>${escapeHtml(item)}</p>`;
  }).join("") : "";
  const text = zeilen ? `<div class="ls-text-block">${zeilen}${blockRead(plain(lesson.text))}</div>` : "";
  const bullets = Array.isArray(lesson.bullets) && lesson.bullets.length
    ? `<div class="ls-bullet-block"><ul class="ls-bullet-list">${lesson.bullets.map(item => {
        if (typeof item === "object" && item.text) {
          const img = item.pictogram
            ? `<img class="ls-bullet-pikto" src="${pictoSrc(refinePicto(item.pictogram, item.text))}" alt="" width="40" height="40" aria-hidden="true" loading="lazy">` : "";
          return `<li class="ls-bullet-item">${img}<span>${escapeHtml(item.text)}</span></li>`;
        }
        return `<li>${escapeHtml(item)}</li>`;
      }).join("")}</ul>${blockRead(plain(lesson.bullets))}</div>` : "";
  const examples = Array.isArray(lesson.examples) && lesson.examples.length
    ? `<div class="access-box example"><h3>Beispiele aus dem Alltag</h3><ul>${lesson.examples.map(e => `<li>${escapeHtml(e)}</li>`).join("")}</ul>${blockRead("Beispiele aus dem Alltag. " + lesson.examples.join(" "))}</div>` : "";
  const warning = lesson.warning
    ? `<div class="access-box warning"><h3>Achtung</h3><p>${escapeHtml(lesson.warning)}</p>${blockRead("Achtung. " + lesson.warning)}</div>` : "";
  const success = lesson.success
    ? `<div class="access-box success"><h3>Gut</h3><p>${escapeHtml(lesson.success)}</p>${blockRead("Gut. " + lesson.success)}</div>` : "";
  return text + bullets + examples + warning + success + buildRememberBox("Wichtig", lesson.remember);
}

function renderWeiterlernen(topicId, index) {
  const w = weiterlernenDaten(topicId);
  const topic = getTopicById(topicId);
  if (!w || !topic || !Array.isArray(w.lektionen) || !w.lektionen.length) return renderMenu();
  if (!weiterlernenSichtbar(topicId)) { weiterlernenThema = null; return renderTopicChoice(topicId); }
  stopReading();
  weiterlernenThema = topicId;
  const gesamt = w.lektionen.length;
  weiterlernenIndex = Math.max(0, Math.min(Number(index) || 0, gesamt));
  const id = escapeHtml(topicId);
  setProgressVisible(false);
  showNav(false, false);

  /* Ende: kein Abschluss wie bei einem Thema, nur zurück. */
  if (weiterlernenIndex === gesamt) {
    setHeader(w.titel, "Zusatz", "Weiterlernen", "Fertig", 100);
    setOrientation(`Du bist hier: ${w.titel}. ${w.zusatz}`);
    content.innerHTML = `
      ${lernRahmenLeiste()}
      <article class="card weiterlernen-card" data-readable="true" style="${getTopicColorStyle(topicId)}">
        <h2>${escapeHtml(w.titel)}</h2>
        <p>${escapeHtml(w.ende)}</p>
        <div class="completion-actions">
          <button type="button" class="primary-action" onclick="weiterlernenBeenden()">${escapeHtml(w.zurueck)}</button>
        </div>
      </article>`;
    focusContent();
    renderLegalFooter();
    return;
  }

  const lesson = resolveLessonContent(w.lektionen[weiterlernenIndex], languageLevel);
  setHeader(w.titel, "Zusatz", "Weiterlernen", `Schritt ${weiterlernenIndex + 1} von ${gesamt}`, 0);
  setOrientation(`Du bist hier: ${w.titel}. ${w.zusatz}`);

  const p = lesson.practice;
  const frage = (p && Array.isArray(p.answers) && p.answers.length) ? `
    <div class="practice-box practice-box--frage">
      <h3 class="sr-only">Übung</h3>
      ${buildFrage({ frage: p.question || "", pikto: questionPikto(p),
        antworten: p.answers.map((a, i) => `
          <button type="button" class="answer-option" onclick="weiterlernenAntwort(${i})">
            ${answerNumBadge(i)}${answerPikto(a, p, i)}<span class="answer-text">${escapeHtml(answerText(a))}</span>
          </button>`).join(""),
        hilfe: buildTaskHelpBox(taskHint(p, "lektion"), true) })}
      <div id="weiterlernenRueckmeldung" class="weiterlernen-rueckmeldung" role="status" aria-live="polite"></div>
    </div>` : "";

  content.innerHTML = `
    ${lernRahmenLeiste()}
    ${/* ohneText: „Schritt X von Y“ steht schon im Wegweiser-Satz; die Zeile
         „0 geschafft · noch N Schritte“ wäre dieselbe Auskunft, anders gezählt. */""}
    ${buildWegweiser(`${w.titel}. Schritt ${weiterlernenIndex + 1} von ${gesamt}.`, { index: weiterlernenIndex, total: gesamt, ohneText: true })}
    <article class="card lesson-card weiterlernen-card" data-readable="true" style="${getTopicColorStyle(topicId)}">
      <p class="weiterlernen-zusatz">${escapeHtml(w.zusatz)}</p>
      <div class="symbol-heading">
        <span class="access-box-symbol" aria-hidden="true">${getIconHtml(lesson.icon || "start")}</span>
        <h2>${escapeHtml(lesson.title || "")}</h2>
      </div>
      ${weiterlernenInhalt(lesson)}
      ${frage}
    </article>
    <div class="kette-fuss weiterlernen-fuss">
      ${weiterlernenIndex > 0 ? `<button type="button" class="plain-back-button" onclick="renderWeiterlernen('${id}', ${weiterlernenIndex - 1})">← Zurück</button>` : ""}
      <button type="button" class="primary-action" onclick="renderWeiterlernen('${id}', ${weiterlernenIndex + 1})">${weiterlernenIndex === gesamt - 1 ? "Fertig" : "Weiter"}</button>
      <button type="button" class="plain-back-button" onclick="weiterlernenBeenden()">${escapeHtml(w.zurueck)}</button>
    </div>`;
  focusContent();
  renderLegalFooter();
}

/* Antwort im Zusatz-Bereich: nur Rückmeldung, bewusst ohne Regel-Karte,
   ohne „schwierige Aufgaben“ und ohne Zählung. */
function weiterlernenAntwort(index) {
  const w = weiterlernenDaten(weiterlernenThema);
  if (!w) return;
  const lesson = resolveLessonContent(w.lektionen[weiterlernenIndex], languageLevel);
  const p = lesson && lesson.practice;
  const box = document.getElementById("weiterlernenRueckmeldung");
  if (!p || !box) return;
  /* Paket T5: „auch möglich“ ist kein Fehler. */
  const art = antwortArt(p, index);
  const richtig = art === "richtig", istAuch = art === "auch", ok = art !== "falsch";
  playSound(ok ? "correct" : "wrong");
  const erklaerung = richtig ? (p.feedbackCorrect || RUECKMELDUNG.entscheidungGut) : istAuch ? auchFeedback(p, index) : (falschFeedback(p, index) || "");
  box.innerHTML = `
    <div class="access-box ${ok ? "success" : "warning"}">
      <h3>${escapeHtml(richtig ? RUECKMELDUNG.passtTitel : istAuch ? RUECKMELDUNG.auchTitel : RUECKMELDUNG.nochNichtTitel)}</h3>
      <p>${escapeHtml(erklaerung)}</p>
      ${ok ? "" : `<p>${escapeHtml(RUECKMELDUNG.fehlerOk)}</p>`}
    </div>`;
}

function weiterlernenBeenden() {
  const tid = weiterlernenThema;
  weiterlernenThema = null;
  weiterlernenIndex = 0;
  if (tid && getTopicById(tid)) return renderTopicChoice(tid);
  renderMenu();
}

/* D6 (01.10.2026): Erfolg ohne Druck. Nach einem Thema darf man ruhig
   aufhören. Keine Zahl, kein Zähler, kein „Komm morgen wieder“. */
function fuerHeuteAufhoeren() {
  stopReading();
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Für heute aufhören", "Pause", "Ende", "Für heute fertig", 100);
  setOrientation("Für heute ist Schluss.");
  showNav(false, false);
  content.innerHTML = `
    <section class="completion-page" data-readable="true">
      <article class="card completion-card--einfach">
        <h2 class="einfach-done-title">Für heute ist Schluss</h2>
        <p>Du hast heute gelernt.</p>
        <p>Du kannst jederzeit weitermachen.</p>
        <div class="completion-actions">
          <button type="button" class="primary-action" onclick="navigateTab('start')">Zur Startseite</button>
        </div>
      </article>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

function renderCompletionPage(topicId, wieder = false, teil = 0) {
  stopReading();
  pauseEnde("neu");
  const topic = getTopicById(topicId);
  if (!topic) return renderMenu();

  if (!wieder) {
    markTopicDone(topic.id);
    finishedTopicThisSession = true;
    clearLastLesson(); /* Lektion fertig – kein Rück-Anker mehr nötig */
    playSound("success");
  }

  /* Hauptaktion der Abschluss-Seite ist der nächste Schritt, nicht das Quiz
     (Prüfbericht B7). markTopicDone() lief schon, der Vorschlag überspringt
     dieses Thema also von selbst. Sind alle Themen geschafft, tritt der
     Lernweg an die Stelle des Vorschlags. */
  const nextTopic = getNextTopicSuggestion();
  const nextActionHtml = (extraClass = "") => nextTopic
    ? `<button type="button" class="primary-action${extraClass ? " " + extraClass : ""}" data-leiste="haupt" onclick="weiterNachThema('${escapeHtml(nextTopic.id)}')">Nächstes Thema: ${escapeHtml(nextTopic.title)}</button>`
    : `<button type="button" class="primary-action${extraClass ? " " + extraClass : ""}" data-leiste="haupt" onclick="weiterNachThema('')">Alle Themen geschafft — zu Mein Lernweg</button>`;
  setProgressVisible(false);
  setBottomNavVisible(false);
  showNav(false, false);

  /* Paket C Schritt 3 (26.09.2026): EINE kurze Abschluss-Seite für beide
     Wege. Vorher: 161 Wörter, 10 Dinge zum Antippen, 22 Ansagen beim
     Vorlesen (Prüfgruppen-Test B4/C-2). Jetzt: Geschafft – geübte Regeln –
     Eine Sache für heute – zwei Knöpfe. Alles Weitere zugeklappt.
     Der Kurz-Weg behält „Mehr lernen" als zweiten Knopf (Prüfbericht B8:
     er ist ein Einstieg). Die drei sensiblen Themen behalten „Hilfe nochmal
     lesen" sichtbar (Station 5, §3). */
  const istKurz = currentMode === "short";
  const abschlussTeil = teil === 1 ? 1 : 0;
  const id = escapeHtml(topic.id);
  setHeader(topic.title, "Abschluss", "Abschluss", `Teil ${abschlussTeil + 1} von 2`, 100);
  setOrientation(`Du bist beim Abschluss zum Thema: ${topic.title}. Teil ${abschlussTeil + 1} von 2.`);
  const chip = (label, click) => `<button type="button" class="later-chip" onclick="${click}">${label}</button>`;
  const hatQuiz = getQuizQuestions(topic).length > 0;
  const mehrChips = [
    istKurz ? chip(`Mehr dazu: ${escapeHtml(topic.title)}`, `startTopicMode('${id}', 'extra')`) : "",
    chip("Regeln nochmal ansehen", `renderCompletionPage('${id}', true, 0)`),
    hatQuiz ? chip("Quiz machen", istKurz ? `startEinfachQuiz('${id}')` : `startQuiz('${id}')`) : "",
    !istKurz ? chip("Merk-Karte ansehen", `renderMemoryCard('${id}')`) : "",
    chip("Nochmal von vorne", `startTopicMode('${id}', '${currentMode}')`),
    chip("Alle Lektionen nachlesen", `startTopicMode('${id}', 'full')`),
    !istKurz ? chip("Urkunde ansehen", `renderCertificate('${id}')`) : "",
    chip("Mein Lernweg ansehen", "renderMyPath()"),
    chip(FUEHRUNG_TEXT.zuDenThemen, "renderMenu()")
  ].join("");
  const hilfeLink = ["hilfe", "betrug", "ki"].includes(topic.id)
    ? `<button type="button" class="link-action" onclick="openTopicHelpLesson('${id}')">Hilfe nochmal lesen</button>` : "";
  /* Mit Vorhersage (Datenschutz, Paket 2) steht an dieser Stelle der
     Rückblick auf die Frage vom Anfang statt der Selbsteinschätzung. */
  const mitVorhersage = !!vorhersageFuer(topic);
  const selbstCheck = mitVorhersage ? buildVorhersageRueckblick(topic) : buildClosingSelfCheck(topic);
  /* Lernweg (26.09.2026): Handeln – der Handlungsplan ist auch aus dem
     Kurz-Weg erreichbar (vorher nur im langen Weg in „Was kann ich tun?"),
     und schwierige Aufgaben lassen sich gezielt noch einmal üben. */
  const wl = weiterlernenSichtbar(topic.id) ? weiterlernenDaten(topic.id) : null;
  const weiterlernenLink = wl
    ? `<button type="button" class="link-action" onclick="renderWeiterlernen('${id}', 0)">${escapeHtml(wl.titel)}</button>` : "";
  const planLink = (typeof ketteDaten === "function" && ketteDaten(topic.id))
    ? `<button type="button" class="link-action" onclick="ketteVomAbschluss('${id}')">${planWort(LERNWEG_TEXT.planLink, topic.id)}</button>` : "";
  const schwerZahl = schwereAufgaben(topic.id).length;
  const nochmalLink = schwerZahl
    ? `<button type="button" class="link-action" onclick="startSchwereUeben('${id}')">${LERNWEG_TEXT.nochmalUeben}: ${schwerZahl} ${schwerZahl === 1 ? "Aufgabe" : "Aufgaben"}</button>` : "";

  /* Ein Rückblick und eine Anwendung sind zwei Aufgaben. Die Inhalte
     bleiben vollständig erhalten, erscheinen aber nacheinander. */
  content.innerHTML = abschlussTeil === 0 ? `
    ${lernRahmenLeiste()}
    <section class="completion-page" data-readable="true">
      <article class="card completion-card" style="${getTopicColorStyle(topic.id)}">
        <h2>${RUECKMELDUNG.themaGeschafft}</h2>
        ${roleFigure("erfolg")}
        <p class="einfach-done-praise">Du hast das Thema <strong>${escapeHtml(topic.title)}</strong> geschafft.</p>
        ${buildRegelnAbschluss(topic)}
        <button type="button" class="primary-action" data-leiste="haupt" onclick="renderCompletionPage('${id}', true, 1)">Weiter</button>
      </article>
    </section>
  ` : `
    ${lernRahmenLeiste()}
    <section class="completion-page${istKurz ? " einfach-completion" : ""}" data-readable="true">
      <article class="card ${istKurz ? "completion-card--einfach" : "completion-card"}" style="${getTopicColorStyle(topic.id)}">
        <h2>Für deinen Alltag</h2>
        ${topic.transfer ? `
        ${stationBadge("handeln")}
        <div class="access-box remember remember-box">
          <h3>${RUECKMELDUNG.eineSache}</h3>
          <p class="remember-text">${escapeHtml(topic.transfer)}</p>
          ${transferRegelHtml(topic)}
        </div>` : ""}
        ${planLink}
        <div class="completion-actions">
          ${nextActionHtml()}
          <button type="button" class="link-action" data-leiste="neben" onclick="fuerHeuteAufhoeren()">Für heute aufhören</button>
          ${hilfeLink}
        </div>
        <details class="later-details">
          <summary class="later-title">${RUECKMELDUNG.mehrZumThema}</summary>
          <div class="later-row">${mehrChips}${nochmalLink}</div>
          ${weiterlernenLink}
          ${buildProgress(countDoneTopics(), topics.length, { complete: true })}
        </details>
        ${selbstCheck ? `
        <details class="later-details">
          <summary class="later-title">${mitVorhersage ? escapeHtml(lernwegText("vorhersageTitel")) : RUECKMELDUNG.wieIstEsJetzt}</summary>
          ${selbstCheck}
        </details>` : ""}
      </article>
    </section>
  `;
  if (abschlussTeil === 1) {
    if (mitVorhersage) bindVorhersageRueckblick(topic);
    else bindClosingSelfCheck(topic);
  }
  /* D17: Einstellungen/Sprache kehren zum Abschluss zurück. Wiederanzeige
     zählt den Abschluss nicht erneut und spielt keinen zweiten Erfolgston. */
  const weg = currentMode;
  stelleMerken(() => { currentTopicId = topic.id; currentMode = weg; renderCompletionPage(topic.id, true, abschlussTeil); });
  focusContent();
  renderLegalFooter();
}

/* ============================================================
   Quiz
   ============================================================ */

function startQuiz(topicId) {
  const topic = getTopicById(topicId);
  if (!topic) return renderMenu();
  pauseRundeStarten();
  currentTopicId = topic.id;
  currentQuizIndex = 0;
  quizScore = 0;
  quizKorrigiert = 0;
  quizAnsweredCorrect = new Set();
  renderQuizQuestion();
}

/* ============================================================
   Einfach-Quiz (2 Antwortoptionen, max. 3 Fragen)
   ============================================================ */

function startEinfachQuiz(topicId) {
  const topic = getTopicById(topicId);
  if (!topic) return renderMenu();
  pauseRundeStarten();
  currentTopicId = topic.id;
  currentQuizIndex = 0;
  quizScore = 0;
  quizKorrigiert = 0;
  quizAnsweredCorrect = new Set();
  renderEinfachQuizQuestion();
}

/* Befund T06 (21.09.2026): Der Kurz-Weg zeigt 3 Fragen. Ausgewählt wurden sie
   bis dahin allein über die Array-Position (slice(0, 3)) – also danach, was
   zufällig vorne stand. Bei Betrug hieß Frage 1 dadurch „Was ist Phishing?",
   obwohl das Wort in den 3 kurzen Inhalts-Lektionen gar nicht vorkommt; es
   steht erst im ausführlichen Weg (Lektion „Was ist Phishing?"). Umgekehrt
   blieb bei Datenschutz das dritte Lernziel ohne Frage, während zwei der drei
   Fragen dasselbe Passwort-Ziel prüften.

   `topic.einfachQuiz` benennt deshalb je Thema die Positionen der Fragen, die
   zu den Zielen des Kurz-Wegs passen – genau wie `einfachLessons` die
   Lektionen benennt. Die Liste zeigt auf vorhandene oder ergänzte Einträge
   in `quizQuestions`. Seit dem Kernquiz-Abgleich (05.10.2026) sind alle zwölf
   Auswahlen gepflegt: je drei Fragen zu den drei Kernlektionen, mit eigenen
   Fassungen in Leicht, Einfach und Alltag. Neue Fragen stehen am Pool-Ende,
   damit bisherige Positionen und Aufgabenschlüssel erhalten bleiben.
   Fehlt die Auswahl, bleibt der Rückfall auf die ersten drei Fragen. */
function getEinfachQuizQuestions(topic) {
  const alle = getQuizQuestions(topic);
  const wahl = Array.isArray(topic && topic.einfachQuiz) ? topic.einfachQuiz : null;
  if (wahl) {
    const gewaehlt = wahl
      .map(i => alle[i])
      .filter(Boolean);
    if (gewaehlt.length) return gewaehlt;
  }
  return alle.slice(0, 3);
}

/* `fest` (Paket T2): nach einem Sprachwechsel dieselbe falsche Antwort an
   derselben Stelle – nur in der neuen Sprachstufe. */
function renderEinfachQuizQuestion(fest) {
  stopReading();
  const topic = getCurrentTopic();
  const questions = getEinfachQuizQuestions(topic);
  if (!topic || !questions.length) return renderCompletionPage(currentTopicId);
  if (currentQuizIndex >= questions.length) return renderEinfachQuizResult();

  const q = questions[currentQuizIndex];
  const answers = Array.isArray(q.answers) ? q.answers : [];
  const correctIndex = Number(q.correctIndex ?? 0);
  const correctText = answerText(answers[correctIndex]);
  const gleicheFrage = !!fest && fest.topicId === topic.id && fest.index === currentQuizIndex;

  /* Eine falsche Antwort zufällig wählen. Paket T5: eine „auch mögliche“
     Antwort nur, wenn es keine unpassende gibt – sonst wären beide richtig. */
  const auchListe = Array.isArray(q.auchMoeglich) ? q.auchMoeglich.map(Number) : [];
  const andere = answers.map((_, i) => i).filter(i => i !== correctIndex);
  const unpassend = andere.filter(i => auchListe.indexOf(i) === -1);
  const wrongPool = unpassend.length ? unpassend : andere;
  const wrongIndex = gleicheFrage ? fest.wrongIndex
    : (wrongPool.length ? wrongPool[Math.floor(Math.random() * wrongPool.length)] : -1);
  const wrongText = wrongIndex >= 0 ? answerText(answers[wrongIndex]) : "Weiß ich nicht";

  /* Reihenfolge zufällig variieren */
  const correctFirst = gleicheFrage ? fest.correctFirst : Math.random() < 0.5;
  /* `index` = Platz der Antwort in der Frage (nicht auf dem Bildschirm). Die
     Rückmeldung bekommt immer diesen Platz – vorher bekam sie bei den Themen
     ohne `nachFehler` die Bildschirm-Position (0/1), und die Erklärung gehörte
     oft zu einer anderen Antwort (Paket 6: in 66 von 132 Fällen, alle 11
     anderen Themen). Datenschutz war seit Paket 3 korrekt. */
  const opts = correctFirst
    ? [{ text: correctText, correct: true, index: correctIndex }, { text: wrongText, correct: false, index: wrongIndex }]
    : [{ text: wrongText, correct: false, index: wrongIndex }, { text: correctText, correct: true, index: correctIndex }];

  const percent = Math.round((currentQuizIndex / questions.length) * 100);
  setProgressVisible(true);
  setBottomNavVisible(false);
  setHeader(topic.title, "Einfach-Quiz", `Frage ${currentQuizIndex + 1} von ${questions.length}`, "Quiz", percent);
  setOrientation(`Du machst das Quiz: ${topic.title}. Frage ${currentQuizIndex + 1} von ${questions.length}.`);
  showNav(false, false);

  content.innerHTML = `
    ${lernRahmenLeiste()}
    <article class="card einfach-quiz-card" style="${getTopicColorStyle(topic.id)}" data-readable="true">
      ${/* Vor-Nutzertest (29.09.2026), alle Themen: Überschrift für die
            Überschriften-Navigation (wie „Quiz“ im langen Quiz, V-2) und
            „Ich bin unsicher“ vor den Antworten wie in den anderen Aufgaben. */""}
      <h2 class="sr-only">Kurz-Quiz</h2>
      <p class="einfach-quiz-number">Frage ${currentQuizIndex + 1} von ${questions.length}</p>
      ${questionPikto(q)}<p class="einfach-quiz-question">${escapeHtml(q.question || "")}</p>
      <div class="frage-hilfe">${buildTaskHelpBox(taskHint(q, "quiz"), true)}</div>
      <div class="einfach-quiz-options">
        ${opts.map((opt) => `
          <button type="button" class="einfach-quiz-btn" onclick="renderEinfachQuizFeedback(${opt.index}, ${opt.correct ? "true" : "false"})">
            ${opt.index >= 0 ? answerPikto(null, q, opt.index) : ""}${escapeHtml(opt.text)}
          </button>
        `).join("")}
      </div>
    </article>
  `;
  const lage = { topicId: topic.id, mode: currentMode, index: currentQuizIndex, wrongIndex: wrongIndex, correctFirst: correctFirst };
  stelleMerken(() => { currentTopicId = lage.topicId; currentMode = lage.mode; currentQuizIndex = lage.index; renderEinfachQuizQuestion(lage); });
  pauseStelleMerken({ art: "kurzquiz", topicId: topic.id, index: currentQuizIndex, teil: "frage", wieder: { fest: lage } });
  focusContent();
  renderLegalFooter();
}

/* Beim Sprachwechsel wird die gegebene Antwort neu gezeigt, ohne sie
   erneut zu bewerten oder einen weiteren Punkt zu zählen (Paket T2). */
function renderEinfachQuizFeedback(optionIndex, istPassend, wieder) {
  stopReading();
  const topic = getCurrentTopic();
  const questions = getEinfachQuizQuestions(topic);
  const q = questions[currentQuizIndex];
  if (!topic || !q) return renderMenu();

  /* Paket T5: richtig / auch möglich / falsch – aus der Antwort bestimmt
     (`istPassend` vom Knopf bleibt nur zur Lesbarkeit der Aufrufe). */
  const art = antwortArt(q, optionIndex);
  const isCorrect = art === "richtig", istAuch = art === "auch", ok = art !== "falsch";
  if (!wieder) playSound(ok ? "correct" : "wrong");
  /* Datenschutz, Paket 3: Aufgabe merken (Wiederholen) und zweiter Versuch. */
  let merkK = wieder ? wieder.merk : null;
  if (q.nachFehler && !wieder) {
    merkK = aufgabeMerken(topic.id, q, ok);
    if (!ok) versuchZaehlen(q);
  }
  if (!wieder && ok && !quizAnsweredCorrect.has(currentQuizIndex)) {
    /* Vor-Nutzertest: Korrekturversuch getrennt zählen (nur strenge Themen). */
    if (merkK && merkK.korrektur) quizKorrigiert++; else quizScore++;
    quizAnsweredCorrect.add(currentQuizIndex);
  }
  const nochmal = (!ok && q.nachFehler)
    ? `<button type="button" class="secondary-action" onclick="renderEinfachQuizQuestion()">Nochmal versuchen</button>` : "";

  const feedbackText = isCorrect
    ? (q.feedbackCorrect || RUECKMELDUNG.passtAnsage)
    : istAuch ? (auchFeedback(q, optionIndex) || RUECKMELDUNG.auchAnsage)
    : (falschFeedback(q, optionIndex) || RUECKMELDUNG.fehlerOk);

  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader(topic.title, "Einfach-Quiz", "Antwort", isCorrect ? RUECKMELDUNG.passtAnsage : istAuch ? RUECKMELDUNG.auchAnsage : RUECKMELDUNG.nochNichtKurz, 100);
  setOrientation(`Du machst das Quiz: ${topic.title}.`);

  content.innerHTML = `
    ${lernRahmenLeiste()}
    <article class="card feedback-page ${isCorrect ? "feedback-correct" : istAuch ? "feedback-auch" : "feedback-wrong"}" style="${getTopicColorStyle(topic.id)}" data-readable="true">
      <h2 class="einfach-quiz-result-title">${isCorrect ? RUECKMELDUNG.passtTitel : istAuch ? RUECKMELDUNG.auchTitel : RUECKMELDUNG.nochNichtTitel}</h2>
      <p class="einfach-quiz-feedback-text">${escapeHtml(feedbackText)}</p>
      ${korrekturHinweisHtml(merkK)}${istAuch ? nochEinWegHtml((q.answers || [])[Number(q.correctIndex ?? 0)]) : ""}
      <div class="einfach-quiz-next-actions">
        ${nochmal}
        <button type="button" class="primary-action" onclick="einfachQuizNext()">
          ${currentQuizIndex < questions.length - 1 ? "Weiter" : "Ergebnis ansehen"}
        </button>
      </div>
      ${!ok ? buildTaskHelpBox(taskHint(q, "quiz"), false, true) : ""}
    </article>
  `;
  /* Vor-Nutzertest: Rückmeldung ansagen (wie im Quiz). */
  if (!wieder) announce(isCorrect ? RUECKMELDUNG.passtAnsage : istAuch ? RUECKMELDUNG.auchAnsage : RUECKMELDUNG.nochNichtAnsage);
  const t = topic.id, mode = currentMode, i = currentQuizIndex;
  stelleMerken(() => { currentTopicId = t; currentMode = mode; currentQuizIndex = i; renderEinfachQuizFeedback(optionIndex, istPassend, { merk: merkK }); });
  pauseStelleMerken({ art: "kurzquiz", topicId: t, index: i, teil: "rueckmeldung", wieder: { antwort: optionIndex, merk: merkK } });
  focusContent();
  renderLegalFooter();
}

function einfachQuizNext() {
  currentQuizIndex++;
  renderEinfachQuizQuestion();
}

function renderEinfachQuizResult(wieder = false) {
  stopReading();
  const topic = getCurrentTopic();
  if (!topic) return renderMenu();
  const total = getEinfachQuizQuestions(topic).length - (pauseTeilrunde && pauseTeilrunde.art === "kurzquiz" ? pauseTeilrunde.ab : 0);
  pauseEnde("kurzquiz");

  if (!wieder) playSound("success");
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader(topic.title, "Einfach-Quiz", "Ergebnis", "Quiz beendet", 100);
  setOrientation(`Du bist fertig mit dem Quiz: ${topic.title}.`);
  showNav(false, false);

  const allCorrect = quizScore === total;
  const praise = allCorrect ? RUECKMELDUNG.quizAlle : RUECKMELDUNG.quizNochmal;
  const streng = wiederholenStreng(topic.id);

  content.innerHTML = `
    ${lernRahmenLeiste()}
    <article class="card completion-card--einfach" style="${getTopicColorStyle(topic.id)}" data-readable="true">
      ${streng ? `<h2 class="einfach-done-title">Quiz fertig</h2>
      ${ergebnisZeilenHtml(quizScore, quizKorrigiert, total)}` : `<h2 class="einfach-done-title">Quiz fertig</h2>
      ${ergebnisRuhigHtml(quizScore, total)}`}
      <p class="einfach-done-praise">${escapeHtml(praise)}</p>
      ${pauseTeilHinweisHtml("kurzquiz")}
      <div class="einfach-done-actions">
        <button type="button" class="primary-action einfach-done-btn" data-leiste="haupt" onclick="startEinfachQuiz('${escapeHtml(topic.id)}')">
          Quiz nochmal
        </button>
        <div class="completion-links">
          <button type="button" class="link-action" onclick="startTopicMode('${escapeHtml(topic.id)}', 'short')">
            Lektionen nochmal
          </button>
          <button type="button" class="link-action" onclick="renderMenu()">
            Zu den Themen
          </button>
        </div>
      </div>
    </article>
  `;
  /* D17: Auch das kurze Ergebnis bleibt beim Sprachwechsel stehen. */
  const t = currentTopicId, weg = currentMode, richtig = quizScore, korrigiert = quizKorrigiert;
  stelleMerken(() => {
    currentTopicId = t; currentMode = weg; quizScore = richtig; quizKorrigiert = korrigiert;
    renderEinfachQuizResult(true);
  });
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
      ${answerNumBadge(index)}${answerPikto(answer, q, index)}<span class="answer-text">${escapeHtml(answerText(answer))}</span>
    </button>
  `).join("");

  content.innerHTML = `
    ${lernRahmenLeiste()}
    <article class="card quiz-card" style="${getTopicColorStyle(topic.id)}" data-readable="true">
      <!-- V-2: "Quiz" stand dreimal auf dem Schirm (Kopfzeile, Orientierungs-
           Satz, hier). Die Ueberschrift bleibt fuer Screenreader und die
           Gliederung erhalten, kostet aber keinen Platz mehr. -->
      <h2 class="sr-only">Quiz</h2>
      ${buildFrage({ frage: q.question || "", pikto: questionPikto(q), antworten: answerHtml, zaehler: `Frage ${currentQuizIndex + 1} von ${questions.length}`, hilfe: buildTaskHelpBox(taskHint(q, "quiz"), true) })}
    </article>
  `;
  const t = topic.id, i = currentQuizIndex;
  stelleMerken(() => { currentTopicId = t; currentQuizIndex = i; renderQuizQuestion(); });
  pauseStelleMerken({ art: "quiz", topicId: t, index: i, teil: "frage" });
  focusContent();
  renderLegalFooter();
}

/* `wieder` (Paket T2): Rückmeldung nach einem Sprachwechsel nur neu zeichnen –
   nicht noch einmal merken, zählen, klingen oder ansagen. */
function renderQuizFeedbackPage(index, wieder) {
  stopReading();
  const topic = getCurrentTopic();
  const questions = getQuizQuestions(topic);
  const q = questions[currentQuizIndex];
  if (!topic || !q) return renderTopicChoice(currentTopicId);

  const answers = Array.isArray(q.answers) ? q.answers : [];
  const correctIndex = Number(q.correctIndex ?? q.correct ?? 0);
  const selectedText = answerText(answers[index]);
  /* Paket T5: „auch möglich“ zählt wie eine passende Antwort (kein Fehler). */
  const art = antwortArt(q, index, correctIndex);
  const isCorrect = art === "richtig", istAuch = art === "auch", ok = art !== "falsch";
  if (!wieder) playSound(ok ? "correct" : "wrong");
  const merkQ = wieder ? wieder.merk : aufgabeMerken(topic.id, q, ok);

  if (!wieder && ok && !quizAnsweredCorrect.has(currentQuizIndex)) {
    /* Vor-Nutzertest: Korrekturversuch getrennt zählen (nur strenge Themen). */
    if (merkQ.korrektur) quizKorrigiert += 1; else quizScore += 1;
    quizAnsweredCorrect.add(currentQuizIndex);
  }

  const explanation = isCorrect
    ? (q.feedbackCorrect || RUECKMELDUNG.entscheidungGut)
    : istAuch ? auchFeedback(q, index)
    : (falschFeedback(q, index) || "Das ist nicht sicher. Du kannst die Frage noch einmal versuchen.");
  const kopf = isCorrect ? RUECKMELDUNG.passtTitel : istAuch ? RUECKMELDUNG.auchTitel : RUECKMELDUNG.nochNichtTitel;
  /* Deine Karte: angewendete Regel eintragen (nur bei richtiger Antwort). */
  /* Deine Karte: Quizfragen haben KEIN remember-Feld (122 Fragen, keine
     einzige). Deshalb wird die Regel aus der Erklaerung der richtigen
     Antwort gelesen – dort steht die Lehre ("Druck ist ein Warnzeichen"),
     waehrend die Frage nur die Situation beschreibt. Ueber die Frage zu
     gehen war messbar schlechter: "Am Automaten klebt ein QR-Code" landete
     bei den Codes statt bei den Links. Bekommt eine Frage spaeter ein
     remember, gewinnt das. */
  const regelHinweis = regelKastenHtml(regelAusQuizfrage(q), topic.id, ok);

  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader(topic.title, "Quiz", "Rückmeldung", kopf, 100);
  setOrientation(`Du machst das Quiz: ${topic.title}.`);

  content.innerHTML = `
    ${lernRahmenLeiste()}
    <article class="card feedback-page ${isCorrect ? "feedback-correct" : istAuch ? "feedback-auch" : "feedback-wrong"}" data-readable="true">
      <h2>${kopf}</h2>

      <div class="feedback-selected">
        <h3>Deine Antwort:</h3>
        <p>${escapeHtml(selectedText)}</p>
      </div>

      ${explanation ? `<div class="feedback-explanation">
        <h3>Erklärung:</h3>
        <p>${escapeHtml(explanation)}</p>
      </div>` : ""}
      ${!ok ? passendeAntwortHtml(q.answers[correctIndex]) : istAuch ? nochEinWegHtml(q.answers[correctIndex]) : ""}
      ${!ok ? roleFigure("ruhig") : ""}

      ${regelHinweis}

      <div class="feedback-actions">
        ${ok
          ? `<button type="button" class="feedback-button primary" onclick="continueAfterQuizAnswer()">Weiter</button>${korrekturHinweisHtml(merkQ)}`
          : `<button type="button" class="feedback-button secondary" data-leiste="haupt" onclick="renderQuizQuestion()">Nochmal versuchen</button>`
        }
      </div>

      ${!ok ? buildTaskHelpBox(taskHint(q, "quiz"), false, true,
        `<button type="button" class="hilfe-angebot" onclick="lektionenNachlesen('${escapeHtml(topic.id)}')">${pictoHtml("lesen")} Lektionen nachlesen</button>`) : ""}
    </article>
  `;
  if (!wieder) announce(isCorrect ? RUECKMELDUNG.passtAnsage : istAuch ? RUECKMELDUNG.auchAnsage : RUECKMELDUNG.nochNichtAnsage);
  const t = topic.id, i = currentQuizIndex;
  stelleMerken(() => { currentTopicId = t; currentQuizIndex = i; renderQuizFeedbackPage(index, { merk: merkQ }); });
  pauseStelleMerken({ art: "quiz", topicId: t, index: i, teil: "rueckmeldung", wieder: { antwort: index, merk: merkQ } });
  focusContent();
  renderLegalFooter();
}

function continueAfterQuizAnswer() {
  currentQuizIndex += 1;
  renderQuizQuestion();
}

function renderQuizResult(wieder) {
  stopReading();
  const topic = getCurrentTopic();
  const questions = getQuizQuestions(topic);
  const teilrunde = pauseTeilrunde && pauseTeilrunde.art === "quiz";
  const total = Math.max(1, questions.length - (teilrunde ? pauseTeilrunde.ab : 0));
  pauseEnde("quiz");
  const streng = !!topic && wiederholenStreng(topic.id);
  /* Paket T2: nach einem Sprachwechsel nicht noch einmal abschließen. */
  if (topic && !wieder && !teilrunde) markTopicDone(topic.id);
  if (!wieder) playSound("success");

  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader(topic ? topic.title : "Quiz", "Quiz", "Ergebnis", "Fertig", 100);
  setOrientation(topic ? `Du bist fertig mit dem Quiz: ${topic.title}.` : "Du bist fertig mit dem Quiz.");
  showNav(false, false);

  content.innerHTML = `
    ${lernRahmenLeiste()}
    <article class="card quiz-result-card" data-readable="true">
      <h2>Quiz fertig</h2>
      ${stationBadge("pruefen")}
      ${streng ? ergebnisZeilenHtml(quizScore, quizKorrigiert, total) : ergebnisRuhigHtml(quizScore, total)}
      ${pauseTeilHinweisHtml("quiz")}
      <p>Wichtig ist: Du hast geübt.</p>
      ${(topic && Array.isArray(topic.helpQuestions) && topic.helpQuestions.length) ? `
      <div class="selfcheck-box">
        <h3>Prüfe dich selbst:</h3>
        <ul class="selfcheck-list">
          ${topic.helpQuestions.map(q => `<li>${escapeHtml(q)}</li>`).join("")}
        </ul>
      </div>` : ""}
      <div class="certificate-actions">
        ${!teilrunde ? `<button type="button" class="quiz-link quiz-button" data-leiste="haupt" onclick="renderCertificate('${escapeHtml(currentTopicId)}', ${quizScore}, ${total}${streng ? ", " + quizKorrigiert : ""})">Urkunde ansehen</button>` : ""}
        <button type="button" class="${teilrunde ? "quiz-link quiz-button" : "nav-button secondary"}"${teilrunde ? ' data-leiste="haupt"' : ""} onclick="startQuiz('${escapeHtml(currentTopicId)}')">Quiz wiederholen</button>
        <button type="button" class="nav-button secondary" onclick="renderTopicChoice('${escapeHtml(currentTopicId)}')">← Zum Thema</button>
      </div>
    </article>
  `;
  const t = currentTopicId;
  stelleMerken(() => { currentTopicId = t; renderQuizResult(true); });
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
let bigQuizKorrigiert = 0;   /* richtig nach einer Korrektur (strenge Themen) */
let bigQuizTitle    = "Das große Quiz";   /* Überschrift: großes Quiz oder Wiederholen */

/* ------------------------------------------------------------
   WIEDERHOLEN – schwierige Aufgaben gezielt (Lernweg, 26.09.2026).
   Eine Aufgabe mit unpassender Antwort merkt sich die App (Frage-Text je
   Thema): in der Sitzung immer, dauerhaft NUR mit Einwilligung im Lernstand
   (§14 – wird mit „Lernstand löschen" mit gelöscht). Richtig beantwortet –
   auch später beim Wiederholen – fällt sie wieder heraus. Kein Konto, kein
   Server, keine Auswertung.
   ------------------------------------------------------------ */
let schwereSitzung = {};

/* Strengere Wiederholung (Datenschutz-Musterthema, 28.09.2026).
   Nach einem Fehler zeigt die Rückmeldung die Lösung. Der Versuch DIREKT
   danach („Nochmal versuchen“, Lektion nochmal lesen, 2. Versuch im
   Kurz-Quiz) ist deshalb ein Korrektur- und Lernversuch, aber noch kein
   Nachweis: Die Aufgabe bleibt bei den schwierigen Aufgaben. Heraus fällt
   sie erst, wenn sie SPÄTER ohne unmittelbar vorher gezeigte Lösung richtig
   gelöst wird – also nach einer anderen Aufgabe dazwischen oder in einer
   neuen Sitzung (Wiederholen, Frage des Tages, Quiz).
   „Direkt danach“ = seit dem Fehler wurde nur diese eine Aufgabe beantwortet
   (auch mehrere Versuche hintereinander zählen noch als Korrektur). Erst eine
   andere Aufgabe dazwischen oder eine neue Sitzung beendet diese Folge.
   Nur für Themen in dieser Liste; alle anderen wie bisher. */
const WIEDERHOLEN_STRENG = ["datenschutz"];
let antwortFolge = { schluessel: null, mitFehler: false };

function aufgabeMerken(topicId, frage, richtig) {
  const text = aufgabeSchluessel(frage);
  if (!topicId || !text) return { korrektur: false };
  const schluessel = topicId + "\u0000" + text;
  if (antwortFolge.schluessel !== schluessel) antwortFolge = { schluessel, mitFehler: false };
  const korrektur = !!richtig && WIEDERHOLEN_STRENG.indexOf(topicId) !== -1 && antwortFolge.mitFehler;
  if (!richtig) antwortFolge.mitFehler = true;
  const setze = (liste) => {
    const vorher = liste || [];
    const l = vorher.filter(t => t !== text);
    /* Korrekturversuch: bleibt gemerkt (nur wenn sie gemerkt WAR). */
    if (!richtig || (korrektur && vorher.indexOf(text) !== -1)) l.push(text);
    return l;
  };
  schwereSitzung[topicId] = setze(schwereSitzung[topicId]);
  if (isProgressEnabled()) {
    const p = loadProgress() || { enabled: true, done: {} };
    p.schwer = p.schwer || {};
    p.schwer[topicId] = setze(p.schwer[topicId]);
    saveProgress(p);
  }
  return { korrektur };
}

/* Hinweis nach einem richtigen Korrekturversuch (nur strenge Themen). */
function korrekturHinweisHtml(merk) {
  return (merk && merk.korrektur) ? `<p class="feedback-spaeter">${escapeHtml(lernwegText("korrektur"))}</p>` : "";
}

function findeAufgabe(topicId, text) {
  const topic = getTopicById(topicId);
  if (!topic) return null;
  const kandidaten = [];
  (topic.lessons || []).concat(topic.einfachLessons || []).forEach(l => { if (l && l.practice) kandidaten.push(l.practice); });
  getQuizQuestions(topic).forEach(q => kandidaten.push(q));
  const scn = getScenario(topicId);
  if (scn) (scn.szenen || []).forEach(z => { if (z.frage) kandidaten.push(z.frage); });
  /* Datenschutz, Paket 2: auch die Fragen der eigenen neuen Situation. */
  const ns = topic.neueSituation;
  if (ns) (ns.fragen || []).concat(ns.aufgaben || []).forEach(q => kandidaten.push(q));
  return kandidaten.find(q => aufgabeSchluessel(q) === text) || null;
}

/* Schwierige Aufgaben – eines Themas oder aller Themen. */
function schwereAufgaben(topicId) {
  const texte = {};
  const sammle = (quelle) => Object.keys(quelle || {}).forEach(t => {
    if (topicId && t !== topicId) return;
    (quelle[t] || []).forEach(x => { texte[t + "\u0000" + x] = { topicId: t, text: x }; });
  });
  sammle(schwereSitzung);
  if (isProgressEnabled()) { const p = loadProgress(); sammle(p && p.schwer); }
  return Object.values(texte).map(e => ({ topicId: e.topicId, frage: findeAufgabe(e.topicId, e.text) }))
    .filter(e => e.frage && ((Array.isArray(e.frage.answers) && e.frage.answers.length) || felderAufgabe(e.frage)));
}

function quizPoolEintrag(q, topic) {
  return {
    question:   q.question || "",
    schluessel: aufgabeSchluessel(q),
    pictogram:  q.pictogram || "",
    answers:    Array.isArray(q.answers) ? q.answers : [],
    correct:    Number(q.correctIndex ?? q.correct ?? 0),
    topicId:    topic.id,
    topicTitle: topic.title,
    quelle:     q,
    felder:     felderAufgabe(q) ? q : null
  };
}

function startSchwereUeben(topicId) {
  const liste = schwereAufgaben(topicId || null);
  if (!liste.length) return topicId ? renderTopicChoice(topicId) : renderMyPath();
  pauseRundeStarten();
  bigQuizTitle = LERNWEG_TEXT.nochmalUeben;
  bigQuizQuestions = liste.map(e => quizPoolEintrag(e.frage, getTopicById(e.topicId)));
  bigQuizIndex = 0;
  bigQuizScore = 0;
  bigQuizKorrigiert = 0;
  currentTopicId = null;
  renderBigQuizQuestion();
}

function buildBigQuizPool(fromTopics, count) {
  const pool = [];
  (fromTopics || topics).forEach((topic) => {
    const qs = getQuizQuestions(topic);
    qs.forEach((q) => {
      pool.push(quizPoolEintrag(q, topic));
    });
  });
  /* Fisher-Yates-Shuffle */
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count || BIG_QUIZ_COUNT);
}

/* Ab so vielen geschafften Themen ist das große Quiz sinnvoll. */
const BIG_QUIZ_MIN_TOPICS = 3;

function startBigQuiz() {
  /* Schutzabfrage wie beim Nachbar-Knopf „Wiederholen" (Prüfbericht B20).
     Vorher startete das große Quiz auch aus dem Nullzustand mit 20 Fragen aus
     Themen, die noch niemand gelernt hatte – zwei optisch gleiche Karten
     verhielten sich unterschiedlich. */
  const geschafft = countDoneTopics();
  if (geschafft < BIG_QUIZ_MIN_TOPICS) {
    stopReading();
    currentTopicId = null;
    setProgressVisible(false);
    setBottomNavVisible(false);
    setHeader("Das große Quiz", "Üben", "Das große Quiz", "Später", 0);
    setOrientation("Du bist beim großen Quiz.");
    showNav(false, false);
    const vorschlag = getNextTopicSuggestion();
    const fehlen = BIG_QUIZ_MIN_TOPICS - geschafft;
    content.innerHTML = `
      ${lernRahmenLeiste("renderMyPath")}
      <article class="card quiz-result-card" data-readable="true">
        <h2>Das große Quiz</h2>
        <p>Hier kommen Fragen aus allen 12 Themen.</p>
        <p>Du hast bis jetzt ${geschafft === 0 ? "noch kein Thema" : (geschafft === 1 ? "1 Thema" : geschafft + " Themen")} geschafft.</p>
        <p>Mach zuerst ${fehlen === 1 ? "noch 1 Thema" : "noch " + fehlen + " Themen"} fertig. Dann kannst du hier üben.</p>
        <div class="certificate-actions">
          ${vorschlag
            ? `<button type="button" class="primary-action" onclick="renderTopicChoice('${escapeHtml(vorschlag.id)}')">Thema starten: ${escapeHtml(vorschlag.title)}</button>`
            : ""}
          <button type="button" class="quiz-link quiz-button" onclick="renderMenu()">Zu den Themen</button>
        </div>
      </article>
    `;
    focusContent();
    renderLegalFooter();
    return;
  }

  pauseRundeStarten();
  bigQuizTitle = "Das große Quiz";
  bigQuizQuestions = buildBigQuizPool();
  bigQuizIndex  = 0;
  bigQuizScore  = 0;
  bigQuizKorrigiert = 0;
  currentTopicId = null;
  rememberRoute("grosses-quiz");
  renderBigQuizQuestion();
}

/* Wiederhol-Modus: wenige Fragen aus Themen, die schon geschafft sind.
   Lernprinzip: verteiltes Lernen – Wiederholen nach Abstand festigt Wissen. */
function startRepeatQuiz() {
  const doneTopics = topics.filter((t) => isTopicDone(t.id) && getQuizQuestions(t).length);
  /* Lernweg (26.09.2026): Aufgaben, die schwer waren, kommen zuerst. */
  const schwer = schwereAufgaben(null).map(e => quizPoolEintrag(e.frage, getTopicById(e.topicId)));
  if (!doneTopics.length && !schwer.length) {
    stopReading();
    setProgressVisible(false);
    setBottomNavVisible(false);
    setHeader("Wiederholen", "", "Wiederholen", "", 0);
    showNav(false, false);
    content.innerHTML = `
      ${lernRahmenLeiste("renderMyPath")}
      <article class="card quiz-result-card" data-readable="true">
        <h2>Wiederholen</h2>
        <p>Hier kannst du Fragen aus deinen Themen wiederholen.</p>
        <p>Du hast noch kein Thema fertig gemacht.</p>
        <p>Mach zuerst ein Thema fertig. Dann kannst du hier üben.</p>
        <div class="certificate-actions">
          <button type="button" class="quiz-link quiz-button" onclick="renderMenu()">Zu den Themen</button>
        </div>
      </article>
    `;
    focusContent();
    renderLegalFooter();
    return;
  }
  pauseRundeStarten();
  bigQuizTitle = "Wiederholen";
  const rest = buildBigQuizPool(doneTopics, REPEAT_QUIZ_COUNT + schwer.length)
    .filter(q => !schwer.some(x => aufgabeSchluessel(x.quelle || x) === aufgabeSchluessel(q.quelle || q)));
  bigQuizQuestions = schwer.concat(rest).slice(0, Math.max(REPEAT_QUIZ_COUNT, schwer.length));
  bigQuizIndex  = 0;
  bigQuizScore  = 0;
  bigQuizKorrigiert = 0;
  currentTopicId = null;
  rememberRoute("wiederholen");
  renderBigQuizQuestion();
}

function renderBigQuizQuestion() {
  stopReading();
  if (bigQuizIndex >= bigQuizQuestions.length) return renderBigQuizResult();

  const q       = bigQuizQuestions[bigQuizIndex];
  const total   = bigQuizQuestions.length;
  /* Paket 5: Die Kopie im Pool zeigt die Texte der aktuellen Sprachstufe. */
  if (q.quelle) {
    q.question = q.quelle.question || "";
    q.answers = Array.isArray(q.quelle.answers) ? q.quelle.answers : [];
  }
  if (q.felder) return renderBigQuizFelder(q, total);
  const progress = Math.round((bigQuizIndex / total) * 100);

  setProgressVisible(true);
  setBottomNavVisible(false);
  /* Gleiche Aufteilung wie überall sonst: Art der Seite ins Modul-Feld, Zähler
     ins Schritt-Feld. Vorher waren beide vertauscht (Prüfbericht B25). */
  setHeader(bigQuizTitle, "Quiz", `Frage ${bigQuizIndex + 1} von ${total}`, bigQuizTitle, progress);
  setOrientation(`Du machst: ${bigQuizTitle}. Frage ${bigQuizIndex + 1} von ${total}.`);
  showNav(false, false);

  const answerHtml = q.answers.map((answer, index) => `
    <button type="button" class="answer-option" onclick="renderBigQuizFeedback(${index})">
      ${answerNumBadge(index)}${answerPikto(answer, q, index)}<span class="answer-text">${escapeHtml(answerText(answer))}</span>
    </button>
  `).join("");

  content.innerHTML = `
    ${lernRahmenLeiste("renderMyPath")}
    <article class="card quiz-card big-quiz-card" style="${getTopicColorStyle(q.topicId)}" data-readable="true">
      <p class="big-quiz-topic-badge">${escapeHtml(q.topicTitle)}</p>
      <!-- V-2: derselbe Titel steht schon in der Kopfzeile. -->
      <h2 class="sr-only">${escapeHtml(bigQuizTitle)}</h2>
      ${buildFrage({ frage: q.question || "", pikto: questionPikto(q), antworten: answerHtml, zaehler: `Frage ${bigQuizIndex + 1} von ${total}`, hilfe: buildTaskHelpBox(taskHint(q, "quiz"), true) })}
    </article>
  `;
  const i = bigQuizIndex;
  stelleMerken(() => { bigQuizIndex = i; renderBigQuizQuestion(); });
  pauseStelleMerken({ art: "wiederholen", topicId: q.topicId, index: i, teil: "frage" });
  focusContent();
  renderLegalFooter();
}

/* `wieder` (Paket T2): nach einem Sprachwechsel nur neu zeichnen. */
function renderBigQuizFeedback(selectedIndex, wieder) {
  stopReading();
  const q = bigQuizQuestions[bigQuizIndex];
  if (!q) return renderBigQuizResult();
  /* Paket T2: auch die Rückmeldung zeigt die Texte der aktuellen Stufe. */
  if (q.quelle) {
    q.question = q.quelle.question || "";
    q.answers = Array.isArray(q.quelle.answers) ? q.quelle.answers : [];
  }

  /* Paket T5: richtig / auch möglich / falsch („auch möglich“ ist kein Fehler). */
  const art = antwortArt(q.quelle || q, selectedIndex, q.correct);
  const isCorrect = art === "richtig", istAuch = art === "auch", ok = art !== "falsch";
  /* Lernweg (26.09.2026): auch hier erklären statt nur „passt / passt nicht",
     und schwierige Aufgaben merken bzw. nach richtiger Antwort austragen. */
  const merkB = wieder ? wieder.merk : aufgabeMerken(q.topicId, q.quelle || q, ok);
  /* Vor-Nutzertest: Korrekturversuch getrennt zählen (nur strenge Themen). */
  if (ok && !wieder) { if (merkB.korrektur) bigQuizKorrigiert += 1; else bigQuizScore += 1; }
  if (!wieder) playSound(ok ? "correct" : "wrong");
  const erklaerung = q.quelle
    ? (isCorrect ? (q.quelle.feedbackCorrect || "") : istAuch ? auchFeedback(q.quelle, selectedIndex) : (falschFeedback(q.quelle, selectedIndex) || ""))
    : "";

  const feedbackClass = isCorrect ? "feedback-correct" : istAuch ? "feedback-auch" : "feedback-wrong";
  const feedbackText  = isCorrect
    ? "✓ " + RUECKMELDUNG.passtAnsage
    : istAuch ? `✓ ${escapeHtml(RUECKMELDUNG.auchAnsage)} ${escapeHtml(RUECKMELDUNG.nochEinWeg)} ${escapeHtml(q.answers[q.correct] || "")}`
    : `${RUECKMELDUNG.passendeAntwort} ${escapeHtml(q.answers[q.correct] || "")}`;

  const isLast = bigQuizIndex >= bigQuizQuestions.length - 1;

  content.innerHTML = `
    ${lernRahmenLeiste("renderMyPath")}
    <article class="card quiz-card big-quiz-card" style="${getTopicColorStyle(q.topicId)}" data-readable="true">
      <p class="big-quiz-topic-badge">${escapeHtml(q.topicTitle)}</p>
      <!-- V-2: derselbe Titel steht schon in der Kopfzeile. -->
      <h2 class="sr-only">${escapeHtml(bigQuizTitle)}</h2>
      ${questionPikto(q)}<p class="quiz-question">${escapeHtml(q.question)}</p>
      <div class="answers">
        ${q.answers.map((a, i) => `
          <div class="answer-option answer-shown ${i === q.correct ? "answer-correct" : (i === selectedIndex ? (istAuch ? "answer-auch" : "answer-wrong") : "")}">
            ${i === q.correct ? "✓ " : (i === selectedIndex ? (istAuch ? "✓ " : "✗ ") : "")}${escapeHtml(a)}
          </div>`).join("")}
      </div>
      <p class="${feedbackClass}">${feedbackText}</p>
      ${erklaerung ? `<p class="big-quiz-erklaerung">${escapeHtml(erklaerung)}</p>` : ""}
      ${korrekturHinweisHtml(merkB)}
      <div class="certificate-actions">
        ${isLast
          ? `<button type="button" class="quiz-link quiz-button" onclick="renderBigQuizResult()">Ergebnis anzeigen</button>`
          : `<button type="button" class="quiz-link quiz-button" onclick="nextBigQuizQuestion()">Weiter</button>`
        }
      </div>
    </article>
  `;
  const i = bigQuizIndex, merk = merkB;
  stelleMerken(() => { bigQuizIndex = i; renderBigQuizFeedback(selectedIndex, { merk: merk }); });
  pauseStelleMerken({ art: "wiederholen", topicId: q.topicId, index: i, teil: "rueckmeldung", wieder: { antwort: selectedIndex, merk: merkB } });
  focusContent();
  renderLegalFooter();
}

function nextBigQuizQuestion() {
  bigQuizIndex += 1;
  renderBigQuizQuestion();
}

function renderBigQuizResult(wieder) {
  stopReading();
  const total = Math.max(1, bigQuizQuestions.length - (pauseTeilrunde && pauseTeilrunde.art === "wiederholen" ? pauseTeilrunde.ab : 0));
  pauseEnde("wiederholen");
  if (!wieder) playSound("success");

  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader(bigQuizTitle, "Ergebnis", "Ergebnis", "Fertig", 100);
  setOrientation("Geschafft! Du bist fertig mit dem Quiz.");
  showNav(false, false);

  content.innerHTML = `
    ${lernRahmenLeiste("renderMyPath")}
    <article class="card quiz-result-card" data-readable="true">
      <h2>${escapeHtml(bigQuizTitle)} – Fertig!</h2>
      ${bigQuizKorrigiert > 0 ? ergebnisZeilenHtml(bigQuizScore, bigQuizKorrigiert, total) : ergebnisRuhigHtml(bigQuizScore, total)}
      ${pauseTeilHinweisHtml("wiederholen")}
      <p>Wichtig ist: Du hast geübt.</p>
      <div class="certificate-actions">
        <button type="button" class="quiz-link quiz-button" data-leiste="haupt" onclick="${bigQuizTitle === "Wiederholen" ? "startRepeatQuiz()" : "startBigQuiz()"}">Noch einmal üben</button>
        <button type="button" class="nav-button secondary" onclick="renderMenu()">Zu den Themen</button>
      </div>
    </article>
  `;
  stelleMerken(() => renderBigQuizResult(true));
  focusContent();
  renderLegalFooter();
}

/* ============================================================
   Trainings-Postfach – Trick oder echt?
   Gefahrloses Üben mit nachgebauten Nachrichten (UDL: Handlung).
   Emotionale Sicherheit: alles ist erfunden, Fehler sind erlaubt.
   Route: index.html#training
   ============================================================ */

/* Die alten Trainings-Variablen sind seit dem Umbau ohne Aufgabe.
   Sie bleiben als Platzhalter stehen, damit nichts bricht, das sie
   noch von aussen anspricht. Der Ablauf nutzt postfach* (siehe unten). */
let trainingMessages = [];
let trainingIndex = 0;
let trainingScore = 0;

/* ============================================================
   TRAININGS-POSTFACH – der gemischte Alltagstest (Sept 2026)
   ------------------------------------------------------------
   Frueher hatte das Postfach eine EIGENE Nachrichtenliste
   (TRAINING_INBOX in topics.js). Vier davon waren wortgleich mit
   Szenen des Uebungs-Handys: zwei Angebote, ein Inhalt – und nur
   eines zahlte auf "Deine Karte" ein.

   Jetzt gibt es EINE Quelle: szenarien-de.js. Die Arbeitsteilung:
     Uebungs-Handy      ein Thema, geordnet, mit Runden
     Trainings-Postfach alles gemischt, aber NUR aus Themen, die
                        die Person schon geschafft hat
   Dadurch waechst das Postfach mit dem Lernweg – das ist der
   Zusammenhang zwischen den Angeboten, kein Zusatz-Knopf.

   TRAINING_INBOX bleibt in topics.js stehen, wird aber nicht mehr
   gelesen.
   ============================================================ */

let postfachListe  = [];
let postfachIndex  = 0;
let postfachRichtig = 0;
let postfachAntwort = false;

/* Alle Fragen aus den Szenarien der geschafften Themen.
   Nur freigeschaltete Runden – sonst bekaeme jemand Runde-3-Faelle,
   ohne Runde 1 und 2 gespielt zu haben. */
function postfachPool() {
  const pool = [];
  topics.forEach(function (t) {
    if (!isTopicDone(t.id) || !hasScenario(t.id)) return;
    const scn = getScenario(t.id);
    const frei = (typeof getStufeFrei === "function") ? getStufeFrei(t.id) : 1;
    (scn.szenen || []).forEach(function (z) {
      if (!z.frage) return;
      if ((Number(z.stufe) || 1) > frei) return;
      pool.push({ thema: t.id, titel: t.title, kanal: scn.kanal || "Posteingang", szene: z });
    });
  });
  return pool;
}

const POSTFACH_MAX = 8;

function startTrainingInbox() {
  stopReading();
  setProgressVisible(false);
  setBottomNavVisible(false);
  showNav(false, false);
  setHeader("Trainings-Postfach", "", "Üben", "", 0);
  setOrientation("Du bist im Trainings-Postfach. Hier kannst du gefahrlos üben.");
  rememberRoute("training");

  const pool = postfachPool();
  const geschafft = topics.filter(function (t) { return isTopicDone(t.id); });
  const anzahl = Math.min(pool.length, POSTFACH_MAX);

  /* Leeres Postfach ist kein Fehler, sondern der Anfang: Es zeigt,
     wofuer das Lernen gut ist, statt die Person auszusperren. */
  const leer = pool.length === 0;

  content.innerHTML = `
    ${lernRahmenLeiste()}
    <article class="card training-card" data-readable="true">
      ${stationBadge("pruefen")}
      <div class="symbol-heading">
        <span class="access-box-symbol" aria-hidden="true">${getIconHtml("message")}</span>
        <h2>Trainings-Postfach</h2>
      </div>
      ${leer ? `
        <p>Hier kommt alles durcheinander an. So wie im echten Leben.</p>
        <p>Dein Postfach ist noch leer.</p>
        <p>Mach ein Thema fertig. Dann kommen die Nachrichten aus diesem Thema hier an.</p>
        <div class="access-box remember remember-box">
          <h3>So wächst dein Postfach</h3>
          <p class="remember-text">Für jedes Thema, das du schaffst, kommen neue Nachrichten dazu. Je mehr du kannst, desto voller wird es.</p>
        </div>
        <div class="certificate-actions">
          <button type="button" class="quiz-link quiz-button" onclick="renderMenu()">Erstes Thema starten</button>
          <button type="button" class="nav-button secondary" onclick="renderScenarioChooser()">Zum Übungs-Handy</button>
        </div>
      ` : `
        <p>Hier kommt alles durcheinander an. So wie im echten Leben.</p>
        <p>Du entscheidest bei jeder Nachricht.</p>
        <div class="access-box remember remember-box">
          <h3>Dein Postfach</h3>
          <p class="remember-text">Du hast ${geschafft.length} ${geschafft.length === 1 ? "Thema" : "Themen"} geschafft. Deshalb liegen ${pool.length} Nachrichten in deinem Postfach.${pool.length > POSTFACH_MAX ? ` Du bekommst ${POSTFACH_MAX} davon – jedes Mal andere.` : ""}</p>
        </div>
        ${buildRememberBox("Wichtig", "Alle Nachrichten hier sind erfunden. Es gibt keine Zeit-Grenze. Fehler sind erlaubt. Du kannst jederzeit aufhören.")}
        <div class="certificate-actions">
          <button type="button" class="quiz-link quiz-button" onclick="beginTraining()">${anzahl} Nachrichten prüfen</button>
          <button type="button" class="nav-button secondary" onclick="renderMenu()">Zu den Themen</button>
        </div>
      `}
    </article>
  `;
  focusContent();
  renderLegalFooter();
}

function beginTraining() {
  const pool = postfachPool();
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const h = pool[i]; pool[i] = pool[j]; pool[j] = h;
  }
  postfachListe = pool.slice(0, POSTFACH_MAX);
  postfachIndex = 0;
  postfachRichtig = 0;
  renderTrainingMessage();
}

function postfachScreen(eintrag) {
  const inhalt = (eintrag.szene.inhalt || []).map(scenarioElementHtml).join("");
  return `
    <p class="sz-fake-band">Das ist nicht echt. Das ist nur zum Üben.</p>
    <div class="phone">
      <p class="phone-bar">${escapeHtml(eintrag.kanal)}</p>
      <div class="phone-screen">${inhalt}</div>
    </div>`;
}

function renderTrainingMessage() {
  stopReading();
  if (!postfachListe.length) return startTrainingInbox();
  if (postfachIndex >= postfachListe.length) return renderTrainingResult();

  const eintrag = postfachListe[postfachIndex];
  const frage = eintrag.szene.frage;
  const total = postfachListe.length;
  postfachAntwort = false;

  setProgressVisible(false);
  setBottomNavVisible(false);
  showNav(false, false);
  setHeader("Trainings-Postfach", `Nachricht ${postfachIndex + 1} von ${total}`, "Nachricht", "Üben",
            Math.round((postfachIndex / total) * 100));
  setOrientation(`Du übst im Trainings-Postfach. Nachricht ${postfachIndex + 1} von ${total}.`);

  const antworten = (frage.answers || []).map(function (a, i) {
    return `<button type="button" class="answer-option sz-answer" data-index="${i}">${answerNumBadge(i)}<span class="answer-text">${escapeHtml(answerText(a))}</span></button>`;
  }).join("");

  content.innerHTML = `
    ${lernRahmenLeiste()}
    <article class="card scenario-card" style="${getTopicColorStyle(eintrag.thema)}" data-readable="true">
      <p class="sz-count">Nachricht ${postfachIndex + 1} von ${total}</p>
      ${postfachScreen(eintrag)}
      ${buildFrage({ frage: frage.question || "", pikto: questionPikto(frage), antworten: antworten, hilfe: buildTaskHelpBox(taskHint(frage, "quiz"), true) })}
      <div id="szFeedback" class="sz-feedback is-hidden" role="status" aria-live="polite"></div>
      <div class="certificate-actions sz-exit">
        <button type="button" class="nav-button secondary" onclick="startTrainingInbox()">Üben beenden</button>
      </div>
    </article>
  `;

  content.querySelectorAll(".sz-answer").forEach(function (btn) {
    btn.addEventListener("click", function () { answerTraining(Number(btn.dataset.index)); });
  });

  focusContent();
  renderLegalFooter();
}

function answerTraining(index) {
  if (postfachAntwort) return;
  const eintrag = postfachListe[postfachIndex];
  if (!eintrag) return;
  const frage = eintrag.szene.frage;
  const szene = eintrag.szene;

  postfachAntwort = true;
  const richtig = index === Number(frage.correctIndex ?? 0);
  if (richtig) postfachRichtig += 1;
  playSound(richtig ? "correct" : "wrong");

  content.querySelectorAll(".sz-answer").forEach(function (b, i) {
    b.disabled = true;
    if (i === index) b.classList.add(richtig ? "is-correct" : "is-wrong");
    if (!richtig && i === Number(frage.correctIndex ?? 0)) b.classList.add("is-correct");
  });

  const text = richtig
    ? (frage.feedbackCorrect || RUECKMELDUNG.entscheidungGut)
    : (falschFeedback(frage, index) || "Das ist nicht sicher. Schau noch einmal.");

  /* Deine Karte: das Postfach zahlt jetzt genauso ein wie das Übungs-Handy.
     Das Herkunfts-Thema zaehlt – so entsteht der Transfer ueber Themen. */
  const regelHinweis = regelKastenHtml((typeof regelZuSatz === "function") ? regelZuSatz(frage.remember) : null, eintrag.thema, richtig);

  const schwerHtml = szene.schwer
    ? `<p class="sz-schwer">Die war schwer. Da fallen viele darauf herein.</p>` : "";

  const falle = szene.falle;
  const falleHtml = falle
    ? `<div class="sz-falle">
         <p class="sz-falle-band">Das ist nur ein Bild. Hier passiert nichts.</p>
         <div class="phone phone--falle">
           <p class="phone-bar">Diese Seite geht auf</p>
           <div class="phone-screen">${(falle.inhalt || []).map(scenarioElementHtml).join("")}</div>
         </div>
         <p class="sz-falle-text">${escapeHtml(richtig ? (falle.text || "") : (falle.textFalsch || falle.text || ""))}</p>
       </div>`
    : "";

  const letzte = postfachIndex >= postfachListe.length - 1;
  const feld = document.getElementById("szFeedback");
  if (!feld) return;
  feld.className = "sz-feedback " + (richtig ? "is-correct" : "is-wrong");
  feld.innerHTML = `
    <p class="sz-feedback-kopf">${richtig ? RUECKMELDUNG.passtAnsage : RUECKMELDUNG.nochNichtKurz}</p>
    ${schwerHtml}
    ${falleHtml}
    <p class="sz-feedback-text">${escapeHtml(text)}</p>
    ${!richtig && Array.isArray(frage.answers) ? passendeAntwortHtml(frage.answers[Number(frage.correctIndex ?? 0)]) : ""}
    ${frage.remember ? `<p class="sz-feedback-merk">Merksatz: ${escapeHtml(frage.remember)}</p>` : ""}
    ${regelHinweis}
    <p class="sz-feedback-herkunft">Diese Nachricht kommt aus dem Thema: ${escapeHtml(eintrag.titel)}.</p>
    <div class="certificate-actions">
      <button type="button" class="nav-button primary" onclick="nextTrainingMessage()">${letzte ? "Zum Ergebnis" : "Weiter"}</button>
    </div>`;
  const weiter = feld.querySelector("button");
  if (weiter) weiter.focus();
  sprichEingefuegteRueckmeldung(feld);
}

function nextTrainingMessage() {
  postfachIndex += 1;
  renderTrainingMessage();
}

function renderTrainingResult() {
  stopReading();
  const total = postfachListe.length || 1;
  playSound("success");

  setProgressVisible(false);
  setBottomNavVisible(false);
  showNav(false, false);
  setHeader("Trainings-Postfach", "Ergebnis", "Ergebnis", "Fertig", 100);
  setOrientation("Geschafft! Du hast im Trainings-Postfach geübt.");

  const lob = postfachRichtig === total
    ? "Du hast alles sicher erkannt."
    : postfachRichtig >= Math.ceil(total / 2)
      ? RUECKMELDUNG.uebenViel
      : RUECKMELDUNG.uebenSchwer;

  const themen = [];
  postfachListe.forEach(function (e) { if (themen.indexOf(e.titel) === -1) themen.push(e.titel); });

  const offene = topics.filter(function (t) { return !isTopicDone(t.id) && hasScenario(t.id); });
  const waechst = offene.length > 0
    ? `<div class="access-box remember remember-box">
         <h3>Dein Postfach kann noch wachsen</h3>
         <p class="remember-text">Es fehlen noch ${offene.length} ${offene.length === 1 ? "Thema" : "Themen"}. Für jedes Thema, das du schaffst, kommen neue Nachrichten dazu.</p>
       </div>`
    : `<div class="access-box remember remember-box">
         <h3>Dein Postfach ist voll</h3>
         <p class="remember-text">Du hast alle Themen geschafft. Hier kommt jetzt alles an, was es gibt.</p>
       </div>`;

  content.innerHTML = `
    ${lernRahmenLeiste()}
    <article class="card quiz-result-card" data-readable="true">
      <h2>Trainings-Postfach – fertig!</h2>
      <p>Du hast ${postfachRichtig} von ${total} Nachrichten sicher entschieden.</p>
      <p>${escapeHtml(lob)}</p>
      ${themen.length ? `<p>Die Nachrichten kamen aus: ${escapeHtml(themen.join(", "))}.</p>` : ""}
      ${waechst}
      ${buildRememberBox("Wichtig", "Bekommst du wirklich so eine Nachricht? Zeige sie einer Person, der du vertraust. Du musst nichts allein entscheiden.")}
      <div class="certificate-actions">
        <button type="button" class="quiz-link quiz-button" onclick="beginTraining()">Noch einmal üben</button>
        <button type="button" class="nav-button secondary" onclick="renderRegelKarte()">Deine Karte ansehen</button>
        <button type="button" class="nav-button secondary" onclick="renderMenu()">Zu den Themen</button>
      </div>
    </article>
  `;
  focusContent();
  renderLegalFooter();
}

/* ============================================================
   Übungs-Handy – Szenarien zu den Themen
   Ein nachgebauter Handy-Bildschirm, in dem man gefahrlos
   handelt statt nur wiederzuerkennen (§3 UDL: Handlung).
   Daten: szenarien-de.js (SCENARIOS[themaId]).

   Regeln, die hier verbindlich sind:
   - Das Band "Das ist nicht echt" steht IMMER da, nicht nur am Anfang.
   - Keine Zeitlimits, kein Countdown (§9 COGA). Der Text darf von
     Druck erzaehlen, die Oberflaeche uebt keinen aus.
   - Nur Tippen, kein Wischen: Wischgesten sind mit Tastatur nicht
     bedienbar.
   - Ein falscher Tipp verliert nichts. Er erklaert und laesst
     weitermachen (§4 ressourcenorientiert).
   - Genau EIN data-readable-Container pro Seite, sonst liest der
     Vorlese-Knopf nur den ersten.
   ============================================================ */

let scenarioTopicId = null;
let scenarioIndex   = 0;
let scenarioRight   = 0;
let scenarioAnswered = false;
/* Runden im Uebungs-Handy (Sept 2026): Runde = Stufe 1, 2 oder 3.
   scenarioStufe = die gerade laufende Runde.
   Freigeschaltet wird nur nach oben. Eine falsche Antwort nimmt nichts weg
   (Konzept: keine Bestrafung). Ohne Lernstand-Einwilligung lebt der Stand
   nur in dieser Sitzung – siehe sessionScenarioStufe oben. */
let scenarioStufe = 1;

/* Welche Stufen kommen in einem Szenario vor? Ohne stufe-Feld: nur [1].
   Dadurch laufen alle Szenarien ohne Runden unveraendert weiter. */
function scenarioStufen(scn) {
  const s = new Set((scn && scn.szenen ? scn.szenen : []).map(z => Number(z.stufe) || 1));
  return Array.from(s).sort((a, b) => a - b);
}

/* Ein Szenario-Abbild, das nur die Szenen EINER Runde enthaelt.
   So bleiben scenarioElements() und buildScenarioScreen() unveraendert. */
function scenarioRunde(scn, stufe) {
  const szenen = (scn && scn.szenen ? scn.szenen : []).filter(z => (Number(z.stufe) || 1) === stufe);
  return Object.assign({}, scn, { szenen });
}

/* Hoechste freigeschaltete Runde. Sitzung und – falls eingewilligt – Lernstand. */
function getStufeFrei(topicId) {
  let frei = sessionScenarioStufe[topicId] || 1;
  if (isProgressEnabled()) {
    const p = loadProgress();
    const gespeichert = (p && p.stufen && p.stufen[topicId]) || 1;
    if (gespeichert > frei) frei = gespeichert;
  }
  return frei;
}

function setStufeFrei(topicId, stufe) {
  const wert = Number(stufe) || 1;
  if (wert > (sessionScenarioStufe[topicId] || 1)) sessionScenarioStufe[topicId] = wert;
  if (!isProgressEnabled()) return;
  const p = loadProgress() || { enabled: true, done: {} };
  p.stufen = p.stufen || {};
  if (wert > (p.stufen[topicId] || 1)) {
    p.stufen[topicId] = wert;
    saveProgress(p);
  }
}

function stufenName(stufe) {
  if (stufe === 2) return "Runde 2";
  if (stufe === 3) return "Runde 3";
  return "Runde 1";
}

function getScenario(topicId) {
  const s = (typeof SCENARIOS !== "undefined" && SCENARIOS && SCENARIOS[topicId]) ? SCENARIOS[topicId] : null;
  /* Vor-Nutzertest (29.09.2026): ausgeblendete Szenarien (Altbestand, siehe
     szenarien-de.js) gibt es für die App nicht – kein Chip, keine Übersicht,
     kein Postfach, kein Direkt-Link. Die Daten bleiben erhalten. */
  return (s && !s.ausgeblendet) ? s : null;
}

function hasScenario(topicId) {
  const s = getScenario(topicId);
  return !!(s && Array.isArray(s.szenen) && s.szenen.length);
}

/* ---- Bausteine des Bildschirms ---- */

function scenarioElementHtml(el) {
  if (!el || !el.typ) return "";
  switch (el.typ) {
    case "nachricht":
      return `
        <div class="sz-bubble sz-in">
          <p class="sz-von">Von: ${escapeHtml(el.von || "Unbekannt")}${el.zeit ? " · " + escapeHtml(el.zeit) : ""}</p>
          <p class="sz-text">${escapeHtml(el.text || "")}</p>
        </div>`;
    case "eigene":
      return `
        <div class="sz-bubble sz-out">
          <p class="sz-von">Deine Antwort</p>
          <p class="sz-text">${escapeHtml(el.text || "")}</p>
        </div>`;
    case "liste":
      return `
        <div class="sz-liste">
          ${(el.eintraege || []).map(e => `
            <div class="sz-listeneintrag">
              <p class="sz-von">${escapeHtml(e.von || "")}${e.zeit ? " · " + escapeHtml(e.zeit) : ""}</p>
              <p class="sz-text">${escapeHtml(e.vorschau || "")}</p>
            </div>`).join("")}
        </div>`;
    case "schalter":
      return `
        <div class="sz-schalter">
          <p class="sz-schalter-name">${escapeHtml(el.label || "")}</p>
          <p class="sz-schalter-wert">Jetzt eingestellt: ${escapeHtml(el.wert || "")}</p>
          ${el.hinweis ? `<p class="sz-schalter-hinweis">${escapeHtml(el.hinweis)}</p>` : ""}
        </div>`;
    case "anruf":
      return `
        <div class="sz-anruf">
          <span class="sz-anruf-symbol" aria-hidden="true">${getIconHtml("message")}</span>
          <p class="sz-anruf-von">Eingehender Anruf</p>
          <p class="sz-anruf-name">${escapeHtml(el.von || "Unbekannt")}</p>
          <p class="sz-anruf-nr">${escapeHtml(el.nummer || "")}</p>
        </div>`;
    case "shop":
      return `
        <div class="sz-shop">
          <p class="sz-shop-titel">${escapeHtml(el.titel || "")}</p>
          <p class="sz-shop-preis">${escapeHtml(el.preis || "")}</p>
          ${(el.zeilen && el.zeilen.length) ? `<ul class="sz-shop-liste">${el.zeilen.map(z => `<li>${escapeHtml(z)}</li>`).join("")}</ul>` : ""}
        </div>`;
    case "video":
      return `
        <div class="sz-video">
          <div class="sz-video-bild" aria-hidden="true"><span>&#9654;</span></div>
          <p class="sz-video-titel">${escapeHtml(el.titel || "")}</p>
          <p class="sz-video-meta">${escapeHtml(el.kanal || "")}${el.dauer ? " · " + escapeHtml(el.dauer) : ""}</p>
          ${el.hinweis ? `<p class="sz-video-hinweis">${escapeHtml(el.hinweis)}</p>` : ""}
        </div>`;
    case "hinweis":
      return `<p class="sz-hinweis">${escapeHtml(el.text || "")}</p>`;
    /* Nachgebaute Betrugs-Seite fuer das Fallen-Bild (Sept 2026).
       Bewusst KEINE echten Eingabefelder und kein <button>: Es ist ein
       Bild, kein Formular. Niemand soll hier etwas eintippen koennen. */
    case "webseite":
      return `
        <div class="sz-webseite">
          ${el.adresse ? `<p class="sz-web-adresse">${escapeHtml(el.adresse)}</p>` : ""}
          <div class="sz-web-inhalt">
            <p class="sz-web-titel">${escapeHtml(el.titel || "")}</p>
            ${(el.felder || []).map(f => `<p class="sz-web-feld">${escapeHtml(f)}</p>`).join("")}
            ${el.knopf ? `<p class="sz-web-knopf">${escapeHtml(el.knopf)}</p>` : ""}
          </div>
        </div>`;
    default:
      return "";
  }
}

/* Chat sammelt den Verlauf an, alle anderen Typen ersetzen den Bildschirm. */
function scenarioElements(scn, bis) {
  const out = [];
  if (scn.typ === "chat") {
    for (let i = 0; i <= bis && i < scn.szenen.length; i++) out.push(...(scn.szenen[i].inhalt || []));
  } else {
    out.push(...((scn.szenen[bis] || {}).inhalt || []));
  }
  return out;
}

function buildScenarioScreen(scn, bis) {
  const inhalt = scenarioElements(scn, bis).map(scenarioElementHtml).join("");
  return `
    <p class="sz-fake-band">Das ist nicht echt. Das ist nur zum Üben.</p>
    <div class="phone">
      <p class="phone-bar">${escapeHtml(scn.kanal || "Übung")}</p>
      <div class="phone-screen">${inhalt}</div>
    </div>`;
}

/* ---- Seiten ---- */

/* Auswahlseite: welches Uebungs-Handy? Karten statt Liste, damit der
   Vorlese-Knopf sie als Ganzes vorliest (KARTEN_SELEKTOR). */
function renderScenarioChooser() {
  stopReading();
  currentTopicId = null;
  setActiveTab("lernweg");
  setProgressVisible(false);
  setBottomNavVisible(false);
  showNav(false, false);
  setHeader("Übungs-Handy", "", "Üben", "", 0);
  setOrientation("Du bist im Übungs-Handy. Wähle ein Thema zum Üben.");
  rememberRoute("uebung");

  const karten = topics
    .filter(t => hasScenario(t.id))
    .map(t => {
      const scn = getScenario(t.id);
      const text = `${t.title}. ${scn.titel}.`;
      return `
        <div class="card-read-pair card-read-pair--action">
          <button type="button" class="action-card" style="${getTopicColorStyle(t.id)}" onclick="startScenario('${escapeHtml(t.id)}')">
          <span class="action-icon" aria-hidden="true">${getIconHtml(t.icon || "start")}</span>
          <span class="action-text">
            <span class="action-title">${escapeHtml(t.title)}</span>
            <span class="action-desc">${escapeHtml(scn.titel)}</span>
          </span>
        </button>
          <button type="button" class="card-read-button card-read-button--path" data-read-card-text="${escapeHtml(text)}" aria-label="${escapeHtml(t.title)} vorlesen">${READ_CARD_SVG} Vorlesen</button>
        </div>`;
    }).join("");

  content.innerHTML = `
    ${lernRahmenLeiste()}
    <article class="card" data-readable="true">
      <div class="symbol-heading">
        <span class="access-box-symbol" aria-hidden="true">${getIconHtml("start")}</span>
        <h2>Übungs-Handy</h2>
      </div>
      <p>Hier übst du wie auf einem Handy.</p>
      <p>Du siehst Nachrichten, Einstellungen oder einen Shop.</p>
      <p>Du entscheidest. Nichts davon ist echt.</p>
      ${typeof buildAlltagChoices === "function" ? buildAlltagChoices() : ""}
      <h3>Wähle ein Thema</h3>
      <div class="action-grid">${karten}</div>
      <div class="certificate-actions">
        <button type="button" class="nav-button secondary" onclick="renderMenu()">Zu den Themen</button>
      </div>
    </article>
  `;
  stelleMerken(() => renderScenarioChooser());
  focusContent();
  renderLegalFooter();
}

function startScenario(topicId) {
  stopReading();
  const topic = getTopicById(topicId);
  const scn = getScenario(topicId);
  if (!topic || !scn) return renderMenu();

  currentTopicId = topic.id;
  scenarioTopicId = topic.id;
  setProgressVisible(false);
  setBottomNavVisible(false);
  showNav(false, false);
  setHeader(topic.title, "Übungs-Handy", "Üben", "", 0);
  setOrientation(`Du bist im Übungs-Handy zum Thema: ${topic.title}.`);
  rememberRoute(topicRoute(topic.id, "uebung"));

  /* Runden-Auswahl (Sept 2026). Gibt es nur eine Runde, bleibt alles wie
     bisher. Noch nicht freie Runden werden gezeigt, aber nicht als Verbot,
     sondern als Ziel – niemand wird ausgesperrt oder abgewertet. */
  const stufen = scenarioStufen(scn);
  const frei = getStufeFrei(topic.id);
  const rundenWahl = stufen.length < 2 ? "" : `
      <h3>Wähle deine Runde</h3>
      <div class="sz-runden">
        ${stufen.map(st => {
          const zahl = (scn.szenen || []).filter(z => (Number(z.stufe) || 1) === st).length;
          const offen = st <= frei;
          const untertitel = st === 1 ? "Zum Anfangen"
                           : st === 2 ? "Die Tricks sind besser gemacht"
                           : "Jetzt zählt, was du tust";
          return offen
            ? `<button type="button" class="sz-runde" onclick="beginScenario(${st})">
                 <span class="sz-runde-titel">${escapeHtml(stufenName(st))}</span>
                 <span class="sz-runde-sub">${escapeHtml(untertitel)} · ${zahl} Nachrichten</span>
               </button>`
            : `<p class="sz-runde sz-runde-zu">
                 <span class="sz-runde-titel">${escapeHtml(stufenName(st))}</span>
                 <span class="sz-runde-sub">Schaffe zuerst ${escapeHtml(stufenName(st - 1))}. Dann geht es hier weiter.</span>
               </p>`;
        }).join("")}
      </div>`;

  content.innerHTML = `
    ${lernRahmenLeiste()}
    <article class="card scenario-card" style="${getTopicColorStyle(topic.id)}" data-readable="true">
      ${stationBadge("pruefen")}
      <div class="symbol-heading">
        <span class="access-box-symbol" aria-hidden="true">${getIconHtml(topic.icon || "start")}</span>
        <h2>Übungs-Handy: ${escapeHtml(scn.titel || topic.title)}</h2>
      </div>
      ${(scn.einstieg || []).map(s => `<p>${escapeHtml(s)}</p>`).join("")}
      ${buildRememberBox("Wichtig", "Alles hier ist erfunden. Es gibt keine Zeit-Grenze. Fehler sind erlaubt. Du kannst jederzeit aufhören.")}
      ${rundenWahl}
      <div class="certificate-actions">
        ${rundenWahl ? "" : `<button type="button" class="quiz-link quiz-button" onclick="beginScenario()">Üben starten</button>`}
        <button type="button" class="nav-button secondary" onclick="renderTopicChoice('${escapeHtml(topic.id)}')">← Zum Thema</button>
      </div>
    </article>
  `;
  const t = scenarioTopicId;
  stelleMerken(() => startScenario(t));
  focusContent();
  renderLegalFooter();
}

function beginScenario(stufe) {
  const scn = getScenario(scenarioTopicId);
  const stufen = scn ? scenarioStufen(scn) : [1];
  let gewuenscht = Number(stufe) || scenarioStufe || 1;
  /* Nie in eine gesperrte Runde springen, und nie in eine, die es nicht gibt. */
  if (stufen.indexOf(gewuenscht) === -1) gewuenscht = stufen[0] || 1;
  const frei = getStufeFrei(scenarioTopicId);
  if (gewuenscht > frei) gewuenscht = frei;
  scenarioStufe = gewuenscht;
  scenarioIndex = 0;
  scenarioRight = 0;
  renderScenarioScene();
}

function renderScenarioScene() {
  stopReading();
  const topic = getTopicById(scenarioTopicId);
  const scn = getScenario(scenarioTopicId);
  if (!topic || !scn) return renderMenu();
  /* Nur die Szenen der laufenden Runde (Sept 2026). Szenarien ohne
     stufe-Feld haben genau eine Runde – fuer sie aendert sich nichts. */
  const runde = scenarioRunde(scn, scenarioStufe);
  if (scenarioIndex >= runde.szenen.length) return renderScenarioResult();

  const szene = runde.szenen[scenarioIndex];
  const total = runde.szenen.length;
  const frage = szene.frage || null;
  scenarioAnswered = false;
  const mehrereRunden = scenarioStufen(scn).length > 1;
  const rundeText = mehrereRunden ? stufenName(scenarioStufe) + ", " : "";

  setProgressVisible(false);
  setBottomNavVisible(false);
  showNav(false, false);
  setHeader(topic.title, "Übungs-Handy", `${rundeText}Schritt ${scenarioIndex + 1} von ${total}`, "Üben",
            Math.round((scenarioIndex / total) * 100));
  setOrientation(`Übungs-Handy: ${topic.title}. ${rundeText}Schritt ${scenarioIndex + 1} von ${total}.`);

  const antworten = frage
    ? (frage.answers || []).map((a, i) => `
        <button type="button" class="answer-option sz-answer" data-index="${i}">
          ${answerNumBadge(i)}${answerPikto(a, frage, i)}<span class="answer-text">${escapeHtml(answerText(a))}</span>
        </button>`).join("")
    : "";

  content.innerHTML = `
    ${lernRahmenLeiste()}
    <article class="card scenario-card" style="${getTopicColorStyle(topic.id)}" data-readable="true">
      <p class="sz-count">${escapeHtml(rundeText)}Schritt ${scenarioIndex + 1} von ${total}</p>
      ${buildScenarioScreen(runde, scenarioIndex)}
      ${frage ? `
        ${buildFrage({ frage: frage.question || "", pikto: questionPikto(frage), antworten: antworten, hilfe: buildTaskHelpBox(taskHint(frage, "quiz"), true) })}
        <div id="szFeedback" class="sz-feedback is-hidden" role="status" aria-live="polite"></div>
      ` : `
        <div class="certificate-actions">
          <button type="button" class="nav-button primary" onclick="nextScenarioScene()">Weiter</button>
        </div>`}
      <div class="certificate-actions sz-exit">
        <button type="button" class="nav-button secondary" onclick="renderTopicChoice('${escapeHtml(topic.id)}')">Üben beenden</button>
      </div>
    </article>
  `;

  content.querySelectorAll(".sz-answer").forEach(btn => {
    btn.addEventListener("click", () => answerScenario(Number(btn.dataset.index)));
  });

  const t = scenarioTopicId, st = scenarioStufe, idx = scenarioIndex, ri = scenarioRight;
  stelleMerken(() => { scenarioTopicId = t; currentTopicId = t; scenarioStufe = st; scenarioIndex = idx; scenarioRight = ri; renderScenarioScene(); });
  focusContent();
  renderLegalFooter();
}

/* `wieder` (Paket T2): gegebene Antwort nach einem Sprachwechsel nur wieder
   anzeigen – nicht noch einmal zählen oder klingen. */
function answerScenario(index, wieder) {
  if (scenarioAnswered) return;
  const scn = getScenario(scenarioTopicId);
  if (!scn) return;
  const runde = scenarioRunde(scn, scenarioStufe);
  const szene = runde.szenen[scenarioIndex] || {};
  const frage = szene.frage;
  if (!frage) return;

  scenarioAnswered = true;
  /* Paket T5: richtig / auch möglich / falsch („auch möglich“ zählt als geschafft). */
  const art = antwortArt(frage, index);
  const richtig = art === "richtig", istAuch = art === "auch", ok = art !== "falsch";
  if (ok && !wieder) scenarioRight += 1;
  if (!wieder) playSound(ok ? "correct" : "wrong");

  content.querySelectorAll(".sz-answer").forEach((b, i) => {
    b.disabled = true;
    if (i === index) b.classList.add(richtig ? "is-correct" : istAuch ? "is-auch" : "is-wrong");
    if (!richtig && i === Number(frage.correctIndex ?? 0)) b.classList.add("is-correct");
  });

  const text = richtig
    ? (frage.feedbackCorrect || RUECKMELDUNG.entscheidungGut)
    : istAuch ? auchFeedback(frage, index)
    : (falschFeedback(frage, index) || "Das ist nicht sicher. Schau noch einmal.");
  /* Deine Karte: angewendete Regel eintragen (nur bei richtiger Antwort). */
  const regelHinweis = regelKastenHtml((typeof regelZuSatz === "function") ? regelZuSatz(frage.remember) : null, scenarioTopicId, ok);
  const letzte = scenarioIndex >= runde.szenen.length - 1;

  /* "Die war schwer" – Einordnung statt Lob. Nimmt Erwachsene ernst und
     macht den Erfolg groesser, ohne dass eine Zahl steigt. */
  const schwerHtml = szene.schwer
    ? `<p class="sz-schwer">Die war schwer. Da fallen viele darauf herein.</p>`
    : "";

  /* Fallen-Bild: zeigt, was die Nachricht wollte. Wird IMMER gezeigt,
     bei richtiger wie bei falscher Antwort – es ist kein Strafbild,
     sondern der Inhalt. Ruhiger Ton, kein Erschrecken (§3, Došen). */
  const falle = szene.falle;
  const falleHtml = falle
    ? `<div class="sz-falle">
         <p class="sz-falle-band">Das ist nur ein Bild. Hier passiert nichts.</p>
         <div class="phone phone--falle">
           <p class="phone-bar">Diese Seite geht auf</p>
           <div class="phone-screen">${(falle.inhalt || []).map(scenarioElementHtml).join("")}</div>
         </div>
         <p class="sz-falle-text">${escapeHtml(ok ? (falle.text || "") : (falle.textFalsch || falle.text || ""))}</p>
       </div>`
    : "";

  const feld = document.getElementById("szFeedback");
  if (!feld) return;
  feld.className = "sz-feedback " + (richtig ? "is-correct" : istAuch ? "is-auch" : "is-wrong");
  feld.innerHTML = `
    <p class="sz-feedback-kopf">${richtig ? RUECKMELDUNG.passtAnsage : istAuch ? RUECKMELDUNG.auchAnsage : RUECKMELDUNG.nochNichtKurz}</p>
    ${schwerHtml}
    ${falleHtml}
    <p class="sz-feedback-text">${escapeHtml(text)}</p>
    ${!ok && Array.isArray(frage.answers) ? passendeAntwortHtml(frage.answers[Number(frage.correctIndex ?? 0)]) : istAuch && Array.isArray(frage.answers) ? nochEinWegHtml(frage.answers[Number(frage.correctIndex ?? 0)]) : ""}
    ${frage.remember ? `<p class="sz-feedback-merk">Merksatz: ${escapeHtml(frage.remember)}</p>` : ""}
    ${regelHinweis}
    <div class="certificate-actions">
      <button type="button" class="nav-button primary" onclick="nextScenarioScene()">${letzte ? "Zum Ergebnis" : "Weiter"}</button>
    </div>`;
  const t = scenarioTopicId, st = scenarioStufe, idx = scenarioIndex, ri = scenarioRight;
  stelleMerken(() => {
    scenarioTopicId = t; currentTopicId = t; scenarioStufe = st; scenarioIndex = idx; scenarioRight = ri;
    renderScenarioScene(); answerScenario(index, true);
  });
  const weiter = feld.querySelector("button");
  if (weiter) weiter.focus();
  if (!wieder) sprichEingefuegteRueckmeldung(feld);
}

function nextScenarioScene() {
  scenarioIndex += 1;
  renderScenarioScene();
}

function renderScenarioResult(wieder) {
  stopReading();
  const topic = getTopicById(scenarioTopicId);
  const scn = getScenario(scenarioTopicId);
  if (!topic || !scn) return renderMenu();
  const runde = scenarioRunde(scn, scenarioStufe);
  const total = runde.szenen.filter(s => s.frage).length || 1;
  if (!wieder) playSound("success");

  /* Naechste Runde freischalten (Sept 2026). Schwelle: drei Viertel richtig –
     ueber dem Zufall, aber erreichbar. Wer sie nicht schafft, verliert nichts
     und darf die Runde einfach noch einmal machen (keine Bestrafung). */
  const stufen = scenarioStufen(scn);
  const bestanden = scenarioRight >= Math.ceil(total * 0.75);
  const naechste = stufen.filter(st => st > scenarioStufe)[0] || null;
  if (bestanden && naechste) setStufeFrei(scenarioTopicId, naechste);
  const mehrereRunden = stufen.length > 1;

  setProgressVisible(false);
  setBottomNavVisible(false);
  showNav(false, false);
  setHeader(topic.title, "Übungs-Handy", mehrereRunden ? stufenName(scenarioStufe) + " – Ergebnis" : "Ergebnis", "Fertig", 100);
  setOrientation(`Geschafft! Du hast im Übungs-Handy geübt: ${topic.title}.`);

  const lob = scenarioRight === total
    ? "Du hast alle Entscheidungen sicher getroffen."
    : scenarioRight >= Math.ceil(total / 2)
      ? RUECKMELDUNG.uebenViel
      : RUECKMELDUNG.uebenSchwer;

  /* Hinweis auf die naechste Runde – als Angebot, nie als Druck. */
  const naechsteText = !mehrereRunden ? ""
    : naechste && bestanden
      ? `<div class="access-box remember remember-box">
           <h3>${escapeHtml(stufenName(naechste))} ist jetzt offen</h3>
           <p class="remember-text">${naechste === 3
             ? "In Runde 3 kannst du die Tricks nicht mehr sehen. Auch geübte Menschen nicht. Dort zählt, was du tust."
             : "In Runde 2 sind die Tricks besser gemacht. Kein Fehler im Text. Du musst genau hinschauen."}</p>
         </div>`
      : naechste
        ? `<div class="access-box remember remember-box">
             <h3>Noch eine Runde?</h3>
             <p class="remember-text">Mach ${escapeHtml(stufenName(scenarioStufe))} noch einmal. Dann geht ${escapeHtml(stufenName(naechste))} auf. Du verlierst nichts dabei.</p>
           </div>`
        : `<div class="access-box remember remember-box">
             <h3>Du hast alle Runden gemacht</h3>
             <p class="remember-text">Das war die schwerste. Du kannst jede Runde jederzeit wiederholen.</p>
           </div>`;

  const merksaetze = runde.szenen
    .filter(s => s.frage && s.frage.remember)
    .map(s => `<li>${escapeHtml(s.frage.remember)}</li>`).join("");

  content.innerHTML = `
    ${lernRahmenLeiste()}
    <article class="card quiz-result-card scenario-card" style="${getTopicColorStyle(topic.id)}" data-readable="true">
      <h2>Übungs-Handy – fertig!</h2>
      <p>Du hast ${scenarioRight} von ${total} Entscheidungen sicher getroffen.</p>
      <p>${escapeHtml(lob)}</p>
      ${scn.abschluss ? `<p>${escapeHtml(scn.abschluss)}</p>` : ""}
      ${naechsteText}
      ${merksaetze ? `
      <div class="access-box remember remember-box">
        <h3>Das nimmst du mit</h3>
        <ul class="sz-merkliste">${merksaetze}</ul>
      </div>` : ""}
      ${buildRememberBox("Wichtig", "Passiert dir so etwas wirklich? Zeige es einer Person, der du vertraust. Du musst nichts allein entscheiden.")}
      <div class="certificate-actions">
        ${(naechste && bestanden)
          ? `<button type="button" class="quiz-link quiz-button" onclick="beginScenario(${naechste})">${escapeHtml(stufenName(naechste))} starten</button>`
          : ""}
        <button type="button" class="${(naechste && bestanden) ? "nav-button secondary" : "quiz-link quiz-button"}" onclick="beginScenario(${scenarioStufe})">${mehrereRunden ? escapeHtml(stufenName(scenarioStufe)) + " noch einmal" : "Noch einmal üben"}</button>
        ${mehrereRunden ? `<button type="button" class="nav-button secondary" onclick="startScenario('${escapeHtml(topic.id)}')">Andere Runde wählen</button>` : ""}
        <button type="button" class="nav-button secondary" onclick="renderTopicChoice('${escapeHtml(topic.id)}')">← Zum Thema</button>
        <button type="button" class="nav-button secondary" onclick="renderMenu()">Zu den Themen</button>
      </div>
    </article>
  `;
  const t = scenarioTopicId, st = scenarioStufe, ri = scenarioRight;
  stelleMerken(() => { scenarioTopicId = t; currentTopicId = t; scenarioStufe = st; scenarioRight = ri; renderScenarioResult(true); });
  focusContent();
  renderLegalFooter();
}

/* ============================================================
   Urkunde – zum Ausdrucken, Name wird von Hand geschrieben
   ============================================================ */

function renderCertificate(topicId, score, total, korrigiert) {
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
        <p class="certificate-warm">${RUECKMELDUNG.urkunde}</p>

        ${hasResult ? (typeof korrigiert === "number"
          ? `<div class="certificate-result">${ergebnisZeilenHtml(score, korrigiert, total, true)}</div>`
          : `<p class="certificate-result">Quiz-Ergebnis: ${score} von ${total} Fragen richtig.</p>`) : ""}

        <p class="certificate-date">Datum: ${escapeHtml(today)}</p>
        <p class="certificate-issuer">Sicher und selbstbestimmt im Internet · Alexianer Stift Tilbeck GmbH</p>
      </div>

      <div class="certificate-actions">
        <button type="button" class="quiz-link quiz-button" onclick="window.print()">Urkunde drucken</button>
        ${(() => { const next = getNextTopicSuggestion(); return next && next.id !== topic.id ? `<button type="button" class="nav-button secondary" onclick="renderTopicChoice('${escapeHtml(next.id)}')">Nächstes Thema: ${escapeHtml(next.title)}</button>` : ""; })()}
        <button type="button" class="nav-button secondary" onclick="renderTopicChoice('${escapeHtml(topic.id)}')">← Zum Thema</button>
        <button type="button" class="nav-button secondary" onclick="renderMenu()">Zu den Themen</button>
      </div>
    </article>
  `;
  focusContent();
  renderLegalFooter();
}

/* ============================================================
   Merk-Karte
   ============================================================ */

/* Die zwei Schluss-Zeilen der Merk-Karte. Paket H2 (30.09.2026): Ein Thema
   kann eigene haben (`topic.merkKarteSchluss`, genau 2 Sätze) – „Hilfe bei
   Problemen“ nennt zuerst das Selbst-Lösen. Alle anderen Themen: wie bisher. */
const MERKKARTE_SCHLUSS = ["Ich muss Probleme nicht allein lösen.", "Ich kann eine Person fragen, der ich vertraue."];
function merkKarteSchlussHtml(topic) {
  const s = (topic && Array.isArray(topic.merkKarteSchluss) && topic.merkKarteSchluss.length === 2) ? topic.merkKarteSchluss : MERKKARTE_SCHLUSS;
  return `<p class="memory-help">${escapeHtml(s[0])}</p>
      <p>${escapeHtml(s[1])}</p>`;
}

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
    ${buildToolRow()}
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

      ${merkKarteSchlussHtml(topic)}

      <div class="certificate-actions">
        <button type="button" class="quiz-link quiz-button" onclick="window.print()">Merk-Karte drucken</button>
        <button type="button" class="nav-button secondary" onclick="renderTopicChoice('${escapeHtml(topic.id)}')">← Zum Thema</button>
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
  /* D2: Von der Übung (oder ihrer Rückmeldung) zurück zum Lerntext. */
  if (aufUebungsSeite) {
    aufUebungsSeite = false; pageDirection = "back";
    const t = getCurrentTopic(), l = getLessonsForMode(t, currentMode);
    return renderLesson(lessonHasExamples(t, l[currentStep], l) ? "beispiele" : "text");
  }
  if (lernTeil === "beispiele" && content.querySelector(".beispiel-seite")) { pageDirection = "back"; return renderLesson(); }

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
  const t = getCurrentTopic(), ls = getLessonsForMode(t, currentMode);
  if (!aufUebungsSeite && lernTeil === "text" && content.querySelector(".lesson-card") && lessonHasExamples(t, ls[currentStep], ls)) return renderLessonExamples();
  if (nextButton && nextButton.dataset.warten === "1") return renderPracticePage();
  const topic = getCurrentTopic();
  if (!topic) return renderMenu();

  const lessons = getLessonsForMode(topic, currentMode);
  if (lessons.length) {
    if (currentStep < lessons.length - 1) {
      currentStep += 1;
      pageDirection = "forward";
      renderLesson();
    } else {
      renderMiniCheck(topic.id);
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
        <button type="button" class="plain-back-button" onclick="renderMenu()">← Zu den Themen</button>
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
   index.html#thema-datenschutz
   index.html#thema-datenschutz:kurz
   index.html#thema-datenschutz:quiz
   index.html#thema-datenschutz:merk
   Die alte Form ohne „thema-" wird weiter angenommen. */
const TOPIC_ROUTE_PREFIX = "thema-";
function topicRoute(topicId, action) {
  return TOPIC_ROUTE_PREFIX + topicId + (action ? ":" + action : "");
}

function openTopicRoute(topicId, action) {
  if (action === "kurz" || action === "short") return startTopicMode(topicId, "short");
  if (action === "quiz") return startQuiz(topicId);
  if (action === "merk" || action === "memory") return renderMemoryCard(topicId);
  /* Ausgeblendetes Übungs-Handy (Vor-Nutzertest): zur Themen-Seite statt zur Themen-Liste. */
  if (action === "uebung") return hasScenario(topicId) ? startScenario(topicId) : renderTopicChoice(topicId);
  return renderTopicChoice(topicId);
}

/* Erster Routen-Aufruf nach dem Laden? Nur dann greift die Personen-Frage. */
let bootRouteDone = false;

function handleHash() {
  handlingRoute = true;
  try {
    const hash = decodeURIComponent(window.location.hash.replace("#", "").trim());

    /* Geteiltes Gerät, echter Neustart: ZUERST fragen, wer lernt.
       Ohne das landet die nächste Person in der gemerkten Adresse der
       vorigen – also mitten in deren Thema, mit deren Schriftgröße.
       Nach der Wahl lädt switchProfile den Rück-Anker DIESER Person. */
    if (!bootRouteDone) {
      bootRouteDone = true;
      if (deviceShared && profiles.length > 0) return renderProfilePicker();
    }
    if (!hash) {
      /* Beim Öffnen immer die kurze Intro-Startseite. „Los geht's" führt
         ins Onboarding (erster Besuch) oder zu den Themen. */
      return renderIntro();
    }

    /* Hauptmenü-Seiten */
    if (hash === "start") return renderIntro();
    if (hash.startsWith("einstieg:")) return renderEinstieg(hash.slice(9));
    if (hash === "themen") return renderMenu();
    if (hash === "lernweg") return renderMyPath();
    if (hash === "hilfe") return renderHelpPage();
    if (hash === "einstellungen") return renderSettingsPage();

    /* Themen-Routen tragen seit Prüfbericht B11 das Präfix „thema-".
       Vorher hießen Thema und Menüpunkt beide „hilfe": Wer das Thema
       „Hilfe bei Problemen" öffnete, bekam beim Neuladen, über ein
       Lesezeichen oder über die gedruckte QR-Karte die Hilfe-SEITE.
       Die alte Form ohne Präfix wird weiter angenommen (unten), damit
       schon gedruckte Karten der übrigen Themen gültig bleiben. */
    if (hash.startsWith(TOPIC_ROUTE_PREFIX)) {
      const rest = hash.slice(TOPIC_ROUTE_PREFIX.length);
      const [tid, act] = rest.split(":");
      if (getTopicById(tid)) return openTopicRoute(tid, act);
      return renderMenu();
    }

    /* Sonderrouten */
    if (hash === "grosses-quiz") return startBigQuiz();
    if (hash === "wiederholen") return startRepeatQuiz();
    if (hash === "meine-karte") return renderRegelKarte();
    if (hash === "training") return startTrainingInbox();
    if (hash === "merk-alle") return renderAllMemoryCards();
    if (hash === "uebung") return renderScenarioChooser();
    if (hash.startsWith("alltag:")) return renderAlltag(hash);

    /* Alte Form ohne Präfix – bleibt für schon gedruckte QR-Karten gültig. */
    const [topicId, action] = hash.split(":");
    if (!getTopicById(topicId)) return renderMenu();
    return openTopicRoute(topicId, action);
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
  /* Die Karte ist jetzt GESCHWISTER des Vorlese-Knopfes (nicht mehr Elternteil):
     closest() findet sie nicht mehr, deshalb der Griff ueber das Paar-Element.
     Damit bleibt die Hervorhebung beim Mitlesen auf der Karte. */
  let block = button.closest(".ls-text-block, .ls-bullet-block, .access-box, .action-card, .topic-card, .sample-option, .language-card");
  if (!block) {
    const pair = button.closest(".card-read-pair");
    if (pair) block = pair.querySelector(".topic-card, .action-card, .sample-option");
  }
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

/* ============================================================
   Nachgelieferte Übungen einhängen (uebungen-de.js)
   Ergaenzt lesson.practice dort, wo noch keine Uebung steht.
   Eine vorhandene Uebung wird NIE ueberschrieben – topics.js
   bleibt die Quelle der Wahrheit, das hier ist nur ein Nachtrag.
   Laeuft einmal beim Start, vor dem ersten Rendern.
   ============================================================ */
function applyExtraPractice() {
  if (typeof EXTRA_PRACTICE === "undefined" || !EXTRA_PRACTICE) return 0;
  if (typeof topics === "undefined" || !Array.isArray(topics)) return 0;
  let gesetzt = 0;
  topics.forEach(topic => {
    const gruppe = EXTRA_PRACTICE[topic.id];
    if (!gruppe) return;
    const einhaengen = (liste, quelle) => {
      if (!Array.isArray(liste) || !quelle) return;
      liste.forEach(lesson => {
        if (!lesson || lesson.practice) return;
        const p = quelle[lesson.title];
        if (p) { lesson.practice = p; gesetzt++; }
      });
    };
    einhaengen(topic.lessons, gruppe.lessons);
    einhaengen(topic.einfachLessons, gruppe.kurz);
  });
  return gesetzt;
}

/* ------------------------------------------------------------
   FESTE AUFGABEN-IDS (Paket T1, 29.09.2026)
   Jede Übung in einer Lektion bekommt eine ID aus Thema, Weg und
   Lektions-Titel: "whatsapp/lang/WhatsApp nutzen", "betrug/kurz/…".
   Aufgaben einer eigenen neuen Situation: ihre `id` aus den Daten, sonst
   die Position ("<thema>/neu/0"). Die ID hängt nicht an der Sprachstufe
   und nicht am Wortlaut der Frage. Sie ist die Adresse für die
   Sprachfassungen (AUFGABEN_VERSIONS in content-de.js) und für den
   Rückweg nach einem Sprachwechsel.
   Was eine Aufgabe für das Gedächtnis ist (schwierige Aufgaben, Frage des
   Tages, zweiter Versuch, Formular-Wahl), bleibt der Schlüssel =
   Leicht-Frage (aufgabeSchluessel): So finden bereits gespeicherte
   Lernstände ihre Aufgaben weiter. Wird ein Leicht-Text später geändert,
   den alten Text als `schluessel` in die Aufgabe schreiben.
   Vorhandene IDs werden nie überschrieben.
   ------------------------------------------------------------ */
function aufgabenIdsVergeben() {
  if (typeof topics === "undefined" || !Array.isArray(topics)) return;
  topics.forEach(topic => {
    const setze = (q, id) => { if (q && typeof q === "object" && !q.id) q.id = id; };
    (topic.lessons || []).forEach(l => l && setze(l.practice, topic.id + "/lang/" + l.title));
    (topic.einfachLessons || []).forEach(l => l && setze(l.practice, topic.id + "/kurz/" + l.title));
    const ns = topic.neueSituation;
    if (ns) (Array.isArray(ns.aufgaben) ? ns.aufgaben : (ns.fragen || [])).forEach((q, i) => setze(q, topic.id + "/neu/" + i));
  });
}

/* Glossar initialisieren */
applyExtraPractice();
aufgabenIdsVergeben();
/* Paket T1: Sprachfassungen jetzt auch für die eben eingehängten Übungen
   (content-de.js hat sie beim Laden noch nicht gesehen). */
if (typeof aufgabenFassungenAnhaengen === "function") topics.forEach(aufgabenFassungenAnhaengen);
/* Handlungs-Ketten anhängen (ketten-de.js). Überschreibt nie etwas. */
if (typeof applyChains === "function") applyChains();
/* Weiterlern-Bereiche (weiterlernen-de.js): Sprachfassungen anhängen. */
if (typeof applyWeiterlernen === "function") applyWeiterlernen();

initGlossar();
initGlossarEvents();

/* Profile laden (oder beim ersten Mal anlegen und vorhandene Einstellungen
   übernehmen), dann die Einstellungen des aktiven Profils anwenden. */
ensureProfiles();
loadDeviceShared();
/* Geteiltes Gerät: merken, wann die App weggelegt wurde, und beim
   Zurückkommen ggf. wieder nach der Person fragen (siehe checkReturn). */
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") markAway();
  else checkReturn();
});
window.addEventListener("pagehide", markAway);
loadActiveProfileSettings();
/* Zuletzt offene Lektion und Mengen-Wahl zurückholen (B5, B9) – erst hier,
   weil dafür sowohl die Themen als auch das aktive Profil stehen müssen. */
loadLastLesson();
loadTopicAmounts();

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
    <span class="offline-icon" aria-hidden="true">${pictoHtml("offline")}</span>
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

/* =============================================================
   DEINE KARTE – die 13 Regeln sammeln
   -------------------------------------------------------------
   Stand 04.09.2026. Abgetrennter Block, in einem Stueck entfernbar.
   Daten: regeln-de.js (REGELN, regelZuSatz, regelById).

   Zwei Stufen je Regel:
     GEFUNDEN  in 1 Thema richtig angewendet
     SITZT     in einem ZWEITEN Thema wiedergefunden -> Transfer

   Gezaehlt wird nur, was die Person TUT (richtige Antwort in
   Uebung, Quiz oder Uebungs-Handy), nicht was sie liest.
   Speicherung wie sessionDoneTopics: Arbeitsspeicher, und nur
   mit Einwilligung zusaetzlich im Lernstand (KDG, §14).
   ============================================================= */

/* { regelId: { themaId: true } } – nur Arbeitsspeicher. */
let sessionRegeln = {};

function ladeRegelStand() {
  const stand = {};
  Object.keys(sessionRegeln).forEach(function (rid) {
    stand[rid] = Object.assign({}, sessionRegeln[rid]);
  });
  if (isProgressEnabled()) {
    const p = loadProgress();
    const gespeichert = (p && p.regeln) || {};
    Object.keys(gespeichert).forEach(function (rid) {
      stand[rid] = stand[rid] || {};
      (gespeichert[rid] || []).forEach(function (t) { stand[rid][t] = true; });
    });
  }
  return stand;
}

/* Vor-Nutzertest (29.09.2026): In welchen Themen kann eine Regel überhaupt
   gefunden werden? Dieselben Quellen, aus denen die Karte gutschreibt:
   Übungen (lang und kurz), Quiz, neue Situation, Formulare und das
   Übungs-Handy (nur sichtbare Szenarien, dazu auch das Postfach). Der
   Hinweis „in einem zweiten Thema wiedererkennen“ erscheint nur, wenn es
   ein zweites Thema gibt – z. B. nicht bei `noetig` (vorerst nur Datenschutz). */
let regelMoeglichCache = null;
function regelMoeglicheThemen(regelId) {
  if (!regelMoeglichCache) {
    regelMoeglichCache = {};
    const dazu = (rid, tid) => { if (rid) (regelMoeglichCache[rid] = regelMoeglichCache[rid] || {})[tid] = true; };
    const satz = (x) => (x && typeof regelZuSatz === "function") ? regelZuSatz(x) : null;
    topics.forEach(t => {
      (t.lessons || []).concat(t.einfachLessons || []).forEach(l => { if (l && l.practice) dazu(satz(l.practice.remember), t.id); });
      getQuizQuestions(t).forEach(q => dazu((typeof regelAusQuizfrage === "function") ? regelAusQuizfrage(q) : null, t.id));
      const ns = t.neueSituation || {};
      (ns.fragen || []).concat(ns.aufgaben || []).forEach(q => dazu(satz(q && q.remember), t.id));
      const scn = getScenario(t.id);
      if (scn) (scn.szenen || []).forEach(z => { if (z && z.frage) dazu(satz(z.frage.remember), t.id); });
    });
  }
  return Object.keys(regelMoeglichCache[regelId] || {});
}
function regelZweitesThemaMoeglich(regelId) {
  return regelMoeglicheThemen(regelId).length >= 2;
}

function regelThemen(regelId) {
  const stand = ladeRegelStand();
  return Object.keys(stand[regelId] || {});
}

/* 0 = noch nicht gefunden, 1 = gefunden, 2 = sitzt */
function regelStufe(regelId) {
  const n = regelThemen(regelId).length;
  return n === 0 ? 0 : (n === 1 ? 1 : 2);
}

function regelZaehlung() {
  let gefunden = 0, sitzt = 0;
  REGELN.forEach(function (r) {
    const s = regelStufe(r.id);
    if (s >= 1) gefunden++;
    if (s === 2) sitzt++;
  });
  return { gefunden: gefunden, sitzt: sitzt, gesamt: REGELN.length };
}

/* Traegt eine angewendete Regel ein. Gibt zurueck, was sich geaendert hat:
   null | { regel, neu: true } | { regel, jetztSicher: true } */
function regelAnwenden(satz, themaId) {
  if (typeof regelZuSatz !== "function") return null;
  return regelAnwendenId(regelZuSatz(satz), themaId);
}

/* Gleiche Wirkung, aber mit fertiger Regel-Kennung – fuer das Quiz,
   das seine Regel ueber regelAusQuizfrage() streng ermittelt. */
function regelAnwendenId(rid, themaId) {
  if (!rid || !themaId) return null;
  const vorher = regelStufe(rid);

  sessionRegeln[rid] = sessionRegeln[rid] || {};
  sessionRegeln[rid][themaId] = true;

  if (isProgressEnabled()) {
    const p = loadProgress() || { enabled: true, done: {} };
    p.regeln = p.regeln || {};
    const liste = p.regeln[rid] || [];
    if (liste.indexOf(themaId) === -1) {
      liste.push(themaId);
      p.regeln[rid] = liste;
      saveProgress(p);
    }
  }

  const nachher = regelStufe(rid);
  if (nachher === vorher) return null;
  const regel = regelById(rid);
  if (!regel) return null;
  return nachher === 1 ? { regel: regel, neu: true } : { regel: regel, jetztSicher: true };
}

/* Rueckmeldung im Feedback – der Belohnungsmoment. Traegt gleichzeitig ein.
   Nur bei richtiger Antwort aufrufen (über regelKastenHtml). */

/* Paket C (26.09.2026): Eine Regel erscheint immer gleich – Bild, Etikett,
   EIN Satz in der gewählten Stufe. Vorher kam der Kasten nur, wenn sich auf
   der Karte etwas änderte; sonst sah man die Regel nur in anderer
   Formulierung (bis zu 5 Namen, Prüfgruppen-Test C-1). Bei richtiger Antwort
   wird gutgeschrieben (Stand-Zeile wie bisher), bei falscher nur gezeigt –
   die Regel bleibt auch nach einem Fehler zugänglich. */
function regelKastenHtml(rid, themaId, richtig) {
  if (!rid) return "";
  if (richtig) {
    const hinweis = regelHinweisHtmlId(rid, themaId);
    if (hinweis) return hinweis;
  }
  const r = regelById(rid);
  if (!r) return "";
  return `
    <div class="regel-treffer regel-treffer--bekannt">
      <p class="regel-treffer-kopf">Deine Regel</p>
      <div class="regel-treffer-zeile">
        ${getPictogramHtml(r.pikto)}
        <p class="regel-treffer-satz">${escapeHtml(regelText(r).kurz)}</p>
      </div>
    </div>`;
}

function regelHinweisHtmlId(rid, themaId) {
  const erg = regelAnwendenId(rid, themaId);
  if (!erg) return "";
  const bild = getPictogramHtml ? getPictogramHtml(erg.regel.pikto) : "";
  const z = regelZaehlung();
  if (erg.neu) {
    return `
      <div class="regel-treffer" role="status">
        <p class="regel-treffer-kopf">Neue Regel für deine Karte</p>
        <div class="regel-treffer-zeile">
          ${bild}
          <p class="regel-treffer-satz">${escapeHtml(regelText(erg.regel).kurz)}</p>
        </div>
        <p class="regel-treffer-stand">Du hast ${z.gefunden} von ${z.gesamt} Regeln.</p>
      </div>`;
  }
  return `
    <div class="regel-treffer regel-treffer--sicher" role="status">
      ${/* T07 (21.09.2026): Hier stand „Diese Regel sitzt jetzt". Gemessen ist
            nur, dass die Person die Regel in zwei Themen richtig angewendet
            hat – genau das sagt die Zeile jetzt. Die Zählung darunter bleibt
            unverändert. */""}
      <p class="regel-treffer-kopf">Diese Regel hast du in 2 Themen benutzt</p>
      <div class="regel-treffer-zeile">
        ${bild}
        <p class="regel-treffer-satz">${escapeHtml(regelText(erg.regel).kurz)}</p>
      </div>
      <p class="regel-treffer-stand">In 2 Themen erkannt: ${z.sitzt} von ${z.gesamt} Regeln.</p>
    </div>`;
}

/* Piktogramm einer Regel als Bild. Nutzt den vorhandenen Resolver. */
function getPictogramHtml(key) {
  if (!key || typeof pictoSrc !== "function") return "";
  return `<img class="regel-pikto" src="${pictoSrc(key)}" alt="" aria-hidden="true" />`;
}

/* ---- Die Sammlung ansehen ---- */

function renderRegelKarte() {
  stopReading();
  currentTopicId = null;
  setProgressVisible(false);
  setBottomNavVisible(false);
  showNav(false, false);
  const z = regelZaehlung();
  setHeader("Deine Karte", "Deine Regeln", "Deine Karte", `${z.sitzt} von ${z.gesamt} in 2 Themen erkannt`, Math.round((z.sitzt / z.gesamt) * 100));
  setOrientation(`Du bist auf der Seite: Deine Karte. Du hast ${z.gefunden} von ${z.gesamt} Regeln gefunden.`);
  rememberRoute("meine-karte");

  /* Gesammelte zuerst, offene als kompakter Block darunter: Die Person
     sieht ihre Sammlung am Stueck und die Luecke als eine Aussage –
     nicht sechs Mal denselben Platzhalter-Satz. */
  const gefundeneRegeln = REGELN.filter(function (r) { return regelStufe(r.id) >= 1; });
  const offeneRegeln    = REGELN.filter(function (r) { return regelStufe(r.id) === 0; });
  /* Gibt es eine gefundene Regel, die in einem zweiten Thema noch möglich ist? */
  const zweitesMoeglich = gefundeneRegeln.some(function (r) { return regelStufe(r.id) === 1 && regelZweitesThemaMoeglich(r.id); });

  const plaetze = gefundeneRegeln.map(function (r) {
    const stufe = regelStufe(r.id);
    const themen = regelThemen(r.id)
      .map(function (t) { const x = getTopicById(t); return x ? x.title : null; })
      .filter(Boolean);
    return `
      <li class="regel-platz ${stufe === 2 ? "regel-platz--sitzt" : "regel-platz--gefunden"}">
        ${getPictogramHtml(r.pikto)}
        <span class="regel-platz-text">
          <span class="regel-platz-satz">${escapeHtml(regelText(r).kurz)}</span>
          <span class="regel-platz-sub">${escapeHtml(regelText(r).was)}</span>
          <span class="regel-platz-stand">${stufe === 2
            ? "In 2 Themen erkannt: " + escapeHtml(themen.join(", "))
            : "Gefunden in: " + escapeHtml(themen.join(", ")) + "." + (regelZweitesThemaMoeglich(r.id) ? " Erkenne sie in einem zweiten Thema wieder." : "")}</span>
        </span>
      </li>`;
  }).join("");

  const offeneHtml = offeneRegeln.length === 0 ? "" : `
    <section class="regel-offen" aria-label="Noch offen">
      <h3>Noch offen: ${offeneRegeln.length} ${offeneRegeln.length === 1 ? "Regel" : "Regeln"}</h3>
      <p class="regel-offen-text">Diese Plätze füllst du beim Üben. Du bekommst die Regeln nicht gesagt – du findest sie.</p>
      <ul class="regel-offen-reihe">
        ${offeneRegeln.map(function () {
          return `<li class="regel-offen-platz" aria-hidden="true">?</li>`;
        }).join("")}
      </ul>
    </section>`;

  const offen = z.gesamt - z.gefunden;
  const einleitung = z.gefunden === 0
    ? "Hier sammelst du deine Regeln. Du bekommst sie nicht geschenkt. Du findest sie beim Üben."
    : (offen > 0
        ? `Dir fehlen noch ${offen} ${offen === 1 ? "Regel" : "Regeln"}.`
        : (z.sitzt < z.gesamt
            ? (zweitesMoeglich ? "Du hast alle Regeln gefunden. Jetzt erkenne sie in einem zweiten Thema wieder." : "Du hast alle Regeln gefunden.")
            : "Alle Regeln hast du in 2 Themen erkannt. Das ist deine Karte."));

  content.innerHTML = `
    ${buildToolRow()}
    <article class="card" data-readable="true">
      <div class="symbol-heading">
        <span class="access-box-symbol" aria-hidden="true">${getIconHtml("remember")}</span>
        <h2>Deine Karte</h2>
      </div>
      <p>${escapeHtml(einleitung)}</p>

      <div class="regel-stand" role="region" aria-label="Dein Stand">
        <div class="regel-stand-zahlen">
          <span class="regel-stand-zahl" aria-live="polite">${z.gefunden}</span>
          <span class="regel-stand-von">von ${z.gesamt} Regeln gefunden</span>
        </div>
        <div class="regel-stand-balken" role="progressbar" aria-valuenow="${z.gefunden}" aria-valuemin="0" aria-valuemax="${z.gesamt}" aria-label="${z.gefunden} von ${z.gesamt} Regeln gefunden">
          <div class="regel-stand-fuell" style="width:${Math.round((z.gefunden / z.gesamt) * 100)}%"></div>
        </div>
        ${z.gefunden > 0 && (z.sitzt > 0 || zweitesMoeglich) ? `<p class="regel-stand-sitzt">${z.sitzt > 0 ? z.sitzt + " davon hast du in 2 Themen erkannt." : "Erkenne eine Regel in einem zweiten Thema wieder."}</p>` : ""}
      </div>

      ${plaetze ? `<h3 class="regel-abschnitt">Das hast du gesammelt</h3>
      <ol class="regel-liste">${plaetze}</ol>` : ""}
      ${offeneHtml}

      <div class="certificate-actions">
        ${z.gefunden > 0 ? `<button type="button" class="quiz-link quiz-button" onclick="druckeRegelKarte()">${pictoHtml("drucken")} Deine Karte drucken</button>` : ""}
        <button type="button" class="nav-button secondary" onclick="renderScenarioChooser()">Üben und Regeln finden</button>
        <button type="button" class="nav-button secondary" onclick="renderMyPath()">← Zu Mein Lernweg</button>
      </div>
    </article>
  `;
  focusContent();
  renderLegalFooter();
}

/* ---- Die Karte drucken: klein genug fuer die Brieftasche ---- */

function druckeRegelKarte() {
  const z = regelZaehlung();
  const gefundene = REGELN.filter(function (r) { return regelStufe(r.id) >= 1; });
  if (!gefundene.length) return;

  const zeilen = gefundene.map(function (r) {
    return `<li class="${regelStufe(r.id) === 2 ? "sitzt" : ""}"><strong>${escapeHtml(regelText(r).kurz)}</strong><br /><span>${escapeHtml(regelText(r).was)}</span></li>`;
  }).join("");

  const heute = new Date().toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" });
  const fenster = window.open("", "_blank");
  if (!fenster) return;
  fenster.document.write(
    `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8" />` +
    `<title>Deine Karte – meine Regeln im Internet</title>` +
    `<style>
       @page { size: A5; margin: 12mm; }
       body { font-family: "Atkinson Hyperlegible", "Segoe UI", Arial, sans-serif; color: #16222e; line-height: 1.5; }
       h1 { font-size: 20pt; margin: 0 0 2mm; }
       .unter { font-size: 11pt; color: #3d506a; margin: 0 0 6mm; }
       ol { padding-left: 6mm; margin: 0; }
       li { margin-bottom: 4mm; font-size: 11pt; break-inside: avoid; }
       li strong { font-size: 12pt; }
       li span { color: #3d506a; }
       li.sitzt strong::after { content: " ✓"; }
       .fuss { margin-top: 8mm; border-top: 1pt solid #d7e0ea; padding-top: 3mm; font-size: 9pt; color: #3d506a; }
       .name { margin: 6mm 0; font-size: 11pt; }
       .name span { display: inline-block; border-bottom: 1pt solid #16222e; width: 60mm; }
     </style></head><body>` +
    `<h1>Meine Regeln im Internet</h1>` +
    `<p class="unter">${z.gefunden} von ${z.gesamt} Regeln gefunden. ${z.sitzt > 0 ? z.sitzt + " davon in 2 Themen erkannt. " : ""}Ein Haken bedeutet: in 2 Themen erkannt.</p>` +
    `<p class="name">Diese Karte gehört: <span></span></p>` +
    `<ol>${zeilen}</ol>` +
    `<p class="fuss">Stand: ${escapeHtml(heute)} · Alex und Tilda – Sicher und selbstbestimmt im Internet<br />` +
    `Du bist unsicher? Zeig diese Karte einer Person, der du vertraust.</p>` +
    `</body></html>`
  );
  fenster.document.close();
  fenster.focus();
  setTimeout(function () { fenster.print(); }, 300);
}
