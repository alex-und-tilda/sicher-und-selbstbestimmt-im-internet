
/*
  Endversion Lernplattform
  Ziel:
  - klare Lernlogik
  - Einfache Sprache
  - keine Speicherung
  - Übung: Antwort -> Rückmeldung -> Weiter / Nochmal versuchen
  - Merksatz erst nach passender Entscheidung
*/

let currentTopicId = null;
let currentMode = "full";
let currentStep = 0;
let currentQuizIndex = 0;
let quizScore = 0;
let quizAnsweredCorrect = new Set();

// Akustisches Feedback ist standardmäßig aus.
// So gibt es keine unerwarteten Geräusche.
// Es wird nichts gespeichert.
let soundEnabled = false;
let audioContext = null;

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




function readShortText(text) {
  if (!("speechSynthesis" in window)) {
    return;
  }

  const cleaned = String(text || "").trim();
  if (!cleaned) {
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(cleaned);
  utterance.lang = "de-DE";
  utterance.rate = 0.82;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getTopicColorStyle(topicId) {
  const colors = {
    datenschutz: ["#00285A", "rgba(0, 40, 90, 0.24)", "rgba(0, 40, 90, 0.08)", "#EAF1F8"],
    whatsapp: ["#25D366", "rgba(37, 211, 102, 0.30)", "rgba(37, 211, 102, 0.12)", "#E9FBEF"],
    facebook: ["#1877F2", "rgba(24, 119, 242, 0.28)", "rgba(24, 119, 242, 0.10)", "#EAF3FF"],
    instagram: ["#C13584", "rgba(193, 53, 132, 0.28)", "rgba(193, 53, 132, 0.10)", "#FBEAF4"],
    youtube: ["#FF0000", "rgba(255, 0, 0, 0.24)", "rgba(255, 0, 0, 0.09)", "#FFECEC"],
    snapchat: ["#C9A600", "rgba(255, 252, 0, 0.42)", "rgba(255, 252, 0, 0.18)", "#FFFBD1"],
    tiktok: ["#111111", "rgba(37, 244, 238, 0.34)", "rgba(37, 244, 238, 0.12)", "#E8FFFF"],
    hilfe: ["#C9541C", "rgba(201, 84, 28, 0.30)", "rgba(201, 84, 28, 0.12)", "#FFF0E8"]
  };
  const [color, ring, bg, icon] = colors[topicId] || colors.datenschutz;
  return `--topic-color:${color};--topic-ring:${ring};--topic-hover-bg:${bg};--topic-icon-bg:${icon}`;
}

function getCurrentTopic() {
  return topics.find(topic => topic.id === currentTopicId) || null;
}

function getIconHtml(iconName) {
  if (!iconName) return "";
  return `<img src="assets/icons/${escapeHtml(iconName)}.svg" alt="" aria-hidden="true">`;
}

function getIllustrationHtml(topic) {
  if (!topic || !topic.illustration) return "";
  return `<img class="topic-illustration" src="${escapeHtml(topic.illustration)}" alt="" aria-hidden="true">`;
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
}

function showNav(showBack, showNext, nextText = "Weiter") {
  backButton.disabled = !showBack;
  nextButton.disabled = !showNext;
  nextButton.textContent = nextText;
}

function announce(text) {
  if (liveRegion) liveRegion.textContent = text || "";
}


function updateSoundButton() {
  if (!soundToggleButton) return;

  soundToggleButton.textContent = soundEnabled ? "Töne an" : "Töne aus";
  soundToggleButton.setAttribute("aria-pressed", soundEnabled ? "true" : "false");
  soundToggleButton.setAttribute(
    "aria-label",
    soundEnabled ? "Töne ausschalten" : "Töne einschalten"
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

  if (!audioContext) {
    audioContext = new AudioContextClass();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume().catch(() => {});
  }

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
    // Audio ist Zusatz. Wenn Audio nicht funktioniert,
    // läuft die Lernplattform ohne Ton weiter.
  }
}

function playSound(type) {
  if (!soundEnabled) return;

  if (type === "correct") {
    playTone(660, 0.12, 0.075, "sine", 0);
    playTone(880, 0.14, 0.065, "sine", 0.10);
    return;
  }

  if (type === "wrong") {
    playTone(220, 0.18, 0.060, "triangle", 0);
    return;
  }

  if (type === "success") {
    playTone(523.25, 0.12, 0.065, "sine", 0);
    playTone(659.25, 0.12, 0.065, "sine", 0.11);
    playTone(783.99, 0.18, 0.060, "sine", 0.22);
    return;
  }

  if (type === "toggle") {
    playTone(600, 0.10, 0.050, "sine", 0);
  }
}


function renderLegalFooter() {
  const old = document.querySelector(".small-footer-notice");
  if (old) old.remove();

  const footer = document.createElement("footer");
  footer.className = "small-footer-notice";
  footer.innerHTML = `
    <p>Dies ist ein unabhängiges Bildungsangebot. Es ist kein offizielles Angebot von WhatsApp, Facebook, Instagram, YouTube, Snapchat oder TikTok.</p>
    <p>Es wird kein Name gespeichert. Es wird kein Lernstand gespeichert.<br /><a href="ersteller.html">Ersteller</a></p>
  `;
  const appRoot = document.querySelector(".app") || document.body;
  appRoot.appendChild(footer);
}

function focusContent() {
  content.focus();
  window.scrollTo({ top: 0, behavior: "smooth" });
}



/* ============================================================
   Vorlesefunktion
   - liest nur den aktuellen Lernbereich vor
   - liest keine Navigation und keinen Footer vor
   - startet nur nach Klick
   - stoppt bei Seitenwechsel
   - keine Speicherung
   ============================================================ */

let speechRate = 0.85;
let isSpeaking = false;

function supportsSpeech() {
  return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

function stopReading() {
  if (!supportsSpeech()) return;
  window.speechSynthesis.cancel();
  isSpeaking = false;
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

  utterance.onstart = () => {
    isSpeaking = true;
    updateReadingStatus(rate && rate < 0.8 ? "Langsam vorlesen läuft." : "Vorlesen läuft.");
  };

  utterance.onend = () => {
    isSpeaking = false;
    updateReadingStatus("Vorlesen fertig.");
  };

  utterance.onerror = () => {
    isSpeaking = false;
    updateReadingStatus("Vorlesen wurde beendet.");
  };

  window.speechSynthesis.speak(utterance);
}

function readNormal() {
  readCurrentPage(0.85);
}

function readSlow() {
  readCurrentPage(0.50);
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
      <button type="button" class="reading-button reading-button-normal" onclick="readNormal()">Vorlesen</button>
      <button type="button" class="reading-button reading-button-slow" onclick="readSlow()">Langsam vorlesen</button>
      <button type="button" class="reading-button reading-button-stop" onclick="stopReading()">Stopp</button>
      <p id="readingStatus" class="reading-status" aria-live="polite"></p>
    </div>
  `;
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

  const cards = topics.map(topic => `
    <button type="button" class="topic-card topic-${escapeHtml(topic.id)}" style="${getTopicColorStyle(topic.id)}" onclick="renderTopicChoice('${escapeHtml(topic.id)}')">
      ${getIllustrationHtml(topic)}
      <span class="topic-icon" aria-hidden="true">${getIconHtml(topic.icon || "start")}</span>
      <span class="topic-title">${escapeHtml(topic.title)}</span>
      <span class="card-read-button" role="button" tabindex="0" data-read-card-title="${escapeHtml(topic.title)}" aria-label="Thema ${escapeHtml(topic.title)} vorlesen">
        🔊 Vorlesen
      </span>
      <span class="topic-desc">${escapeHtml(topic.desc || "")}</span>
    </button>
  `).join("");

  content.innerHTML = `
    <section class="start-page">
      <div class="hero-card">
        <h2>Wähle ein Thema.</h2>
        <p>Danach entscheidest du, wie du lernen möchtest.</p>
      </div>
      <div class="topic-grid">${cards}</div>
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

function renderTopicChoice(topicId) {
  stopReading();
  const topic = topics.find(item => item.id === topicId);
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
    <section class="topic-choice">
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

      ${buildSupportBox()}
    </section>
  `;
  focusContent();
  renderLegalFooter();
}

function buildSupportBox() {
  return `
    <div class="support-help-area">
      <button type="button" class="support-help-button" onclick="toggleSupportHelp()" aria-expanded="false" aria-controls="supportHelpPanel">
        <span class="support-help-icon" aria-hidden="true">${getIconHtml("help")}</span>
        <span class="support-help-text">
          <span class="support-help-title">Du brauchst Unterstützung?</span>
          <span class="support-help-desc">Hilfe anzeigen.</span>
          <span class="card-read-button card-read-button--path" role="button" tabindex="0" data-read-card-text="Du brauchst Unterstützung? Hilfe anzeigen." aria-label="Unterstützung vorlesen">🔊 Vorlesen</span>
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
    panel.setAttribute("hidden", "");
    if (button) button.setAttribute("aria-expanded", "false");
    if (desc) desc.textContent = "Hilfe anzeigen.";
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

function getLessonsForMode(topic, mode) {
  if (!topic || !Array.isArray(topic.lessons)) return [];
  if (mode === "short" && Array.isArray(topic.shortLessonIndexes)) {
    return topic.shortLessonIndexes.map(index => topic.lessons[index]).filter(Boolean);
  }
  return topic.lessons;
}

function startTopicMode(topicId, mode) {
  const topic = topics.find(item => item.id === topicId);
  if (!topic) return renderMenu();
  currentTopicId = topic.id;
  currentMode = mode === "short" ? "short" : "full";
  currentStep = 0;
  renderLesson();
}

function renderLesson() {
  stopReading();
  const topic = getCurrentTopic();
  if (!topic) return renderMenu();

  const lessons = getLessonsForMode(topic, currentMode);
  if (!lessons.length) return renderTopicChoice(topic.id);

  if (currentStep < 0) currentStep = 0;
  if (currentStep >= lessons.length) currentStep = lessons.length - 1;

  const lesson = lessons[currentStep];
  const percent = Math.round(((currentStep + 1) / lessons.length) * 100);
  const modeLabel = currentMode === "short" ? "Kurz lernen" : "Mehr lernen";
  const hasPractice = Boolean(lesson.practice);

  setProgressVisible(true);
  setBottomNavVisible(!hasPractice);
  setHeader(topic.title, modeLabel, `Seite ${currentStep + 1} von ${lessons.length}`, lesson.module || "Lernen", percent);
  showNav(true, true, currentStep === lessons.length - 1 ? "Fertig" : "Weiter");

  const text = Array.isArray(lesson.text)
    ? lesson.text.map(item => `<p>${escapeHtml(item)}</p>`).join("")
    : "";

  const bullets = Array.isArray(lesson.bullets) && lesson.bullets.length
    ? `<ul>${lesson.bullets.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
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

  content.innerHTML = `
    ${buildReadingToolbar()}
    <article class="card lesson-card" data-readable="true">
      <div class="symbol-heading">
        <span class="access-box-symbol" aria-hidden="true">${getIconHtml(lesson.icon || topic.icon || "start")}</span>
        <h2>${escapeHtml(lesson.title || topic.title)}</h2>
      </div>
      ${text}
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
          <li>Du kannst sagen: Bitte erkläre mir das einfacher.</li>
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
    ${buildReadingToolbar()}
    <article class="card feedback-page ${isCorrect ? "feedback-correct" : "feedback-wrong"}" data-readable="true">
      <h2>${isCorrect ? "Das ist richtig." : "Das ist noch nicht richtig."}</h2>

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
          : `<button type="button" class="feedback-button secondary" onclick="renderLesson()">Nochmal versuchen</button>`
        }
      </div>

      ${!isCorrect ? buildTaskHelpBox() : ""}
    </article>
  `;

  announce(isCorrect ? "Das ist richtig." : "Das ist noch nicht richtig.");
  focusContent();
  renderLegalFooter();
}

function continueAfterPractice() {
  const topic = getCurrentTopic();
  const lessons = getLessonsForMode(topic, currentMode);
  if (!topic || !lessons.length) return renderMenu();

  if (currentStep < lessons.length - 1) {
    currentStep += 1;
    renderLesson();
  } else {
    renderTopicChoice(topic.id);
  }
}

function startQuiz(topicId) {
  const topic = topics.find(item => item.id === topicId);
  if (!topic) return renderMenu();
  currentTopicId = topic.id;
  currentQuizIndex = 0;
  quizScore = 0;
  quizAnsweredCorrect = new Set();
  renderQuizQuestion();
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
    ${buildReadingToolbar()}
    <article class="card quiz-card" data-readable="true">
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
    ${buildReadingToolbar()}
    <article class="card feedback-page ${isCorrect ? "feedback-correct" : "feedback-wrong"}" data-readable="true">
      <h2>${isCorrect ? "Das ist richtig." : "Das ist noch nicht richtig."}</h2>

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
          : `<button type="button" class="feedback-button secondary" onclick="renderQuizQuestion()">Nochmal versuchen</button>`
        }
      </div>

      ${!isCorrect ? buildTaskHelpBox() : ""}
    </article>
  `;
  announce(isCorrect ? "Das ist richtig." : "Das ist noch nicht richtig.");
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
  playSound("success");

  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader(topic ? topic.title : "Quiz", "Quiz", "Ergebnis", "Fertig", 100);
  showNav(true, false);

  content.innerHTML = `
    ${buildReadingToolbar()}
    <article class="card quiz-result-card" data-readable="true">
      <h2>Quiz fertig</h2>
      <p>Du hast ${quizScore} von ${total} Fragen richtig beantwortet.</p>
      <p>Das sind ${percent} Prozent.</p>
      <p>Wichtig ist: Du hast geübt.</p>
      <div class="certificate-actions">
        <button type="button" class="quiz-link quiz-button" onclick="startQuiz('${escapeHtml(currentTopicId)}')">Quiz wiederholen</button>
        <button type="button" class="nav-button secondary" onclick="renderTopicChoice('${escapeHtml(currentTopicId)}')">Zurück zum Thema</button>
      </div>
    </article>
  `;
  focusContent();
  renderLegalFooter();
}

function renderMemoryCard(topicId) {
  stopReading();
  const topic = topics.find(item => item.id === topicId);
  if (!topic) return renderMenu();

  currentTopicId = topic.id;
  setProgressVisible(false);
  setBottomNavVisible(false);
  setHeader("Merk-Karte", topic.title, "Merk-Karte", "Merken", 100);
  showNav(true, false);

  const rules = Array.isArray(topic.memoryRules)
    ? topic.memoryRules.map(rule => `<li>${escapeHtml(rule)}</li>`).join("")
    : "";

  const questions = Array.isArray(topic.helpQuestions)
    ? topic.helpQuestions.map(question => `<li>${escapeHtml(question)}</li>`).join("")
    : "";

  content.innerHTML = `
    ${buildReadingToolbar()}
    <article class="card memory-card" data-readable="true">
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

function goBack() {
  if (!currentTopicId) return renderMenu();

  const topic = getCurrentTopic();
  const lessons = getLessonsForMode(topic, currentMode);

  if (lessons.length && currentStep > 0) {
    currentStep -= 1;
    renderLesson();
    return;
  }

  renderTopicChoice(currentTopicId);
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
      renderTopicChoice(topic.id);
    }
    return;
  }

  renderTopicChoice(topic.id);
}

function handleHash() {
  const hash = window.location.hash.replace("#", "").trim();
  if (!hash) return renderMenu();

  const [topicId, action] = hash.split(":");
  const topic = topics.find(item => item.id === topicId);
  if (!topic) return renderMenu();

  if (action === "short") return startTopicMode(topicId, "short");
  if (action === "quiz") return startQuiz(topicId);
  if (action === "memory") return renderMemoryCard(topicId);
  return renderTopicChoice(topicId);
}

backButton.addEventListener("click", goBack);
nextButton.addEventListener("click", goNext);
homeButton.addEventListener("click", renderMenu);
if (soundToggleButton) {
  soundToggleButton.addEventListener("click", toggleSound);
  updateSoundButton();
}

document.addEventListener("DOMContentLoaded", handleHash);


document.addEventListener("click", function (event) {
  const titleButton = event.target.closest("[data-read-card-title]");
  const textButton = event.target.closest("[data-read-card-text]");
  const button = titleButton || textButton;

  if (!button) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();

  const text = button.getAttribute("data-read-card-text") || button.getAttribute("data-read-card-title");
  readShortText(text);
}, true);

document.addEventListener("keydown", function (event) {
  const titleButton = event.target.closest("[data-read-card-title]");
  const textButton = event.target.closest("[data-read-card-text]");
  const button = titleButton || textButton;

  if (!button) {
    return;
  }

  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();

  const text = button.getAttribute("data-read-card-text") || button.getAttribute("data-read-card-title");
  readShortText(text);
}, true);


/* Vorlesen in Karten: verhindert, dass die Karte zusätzlich geöffnet wird. */
document.addEventListener("click", function (event) {
  const titleButton = event.target.closest("[data-read-card-title]");
  const textButton = event.target.closest("[data-read-card-text]");
  const button = titleButton || textButton;

  if (!button) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();

  const text = button.getAttribute("data-read-card-text") || button.getAttribute("data-read-card-title");
  readShortText(text);
}, true);

document.addEventListener("keydown", function (event) {
  const titleButton = event.target.closest("[data-read-card-title]");
  const textButton = event.target.closest("[data-read-card-text]");
  const button = titleButton || textButton;

  if (!button) {
    return;
  }

  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();

  const text = button.getAttribute("data-read-card-text") || button.getAttribute("data-read-card-title");
  readShortText(text);
}, true);

