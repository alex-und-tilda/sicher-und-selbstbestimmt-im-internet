
/*
  Stabile App-Version
  Zweck:
  - Keine Lernstand-Speicherung
  - Einfache, robuste Navigation
*/

let currentTopicId = null;
let currentMode = "full";
let currentStep = 0;
let currentQuizIndex = 0;
let quizScore = 0;
let selectedAnswer = null;

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
const liveRegion = document.getElementById("liveRegion");

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
    datenschutz: {
      color: "#00285A",
      ring: "rgba(0, 40, 90, 0.24)",
      bg: "rgba(0, 40, 90, 0.08)",
      icon: "#EAF1F8"
    },
    whatsapp: {
      color: "#25D366",
      ring: "rgba(37, 211, 102, 0.30)",
      bg: "rgba(37, 211, 102, 0.12)",
      icon: "#E9FBEF"
    },
    facebook: {
      color: "#1877F2",
      ring: "rgba(24, 119, 242, 0.28)",
      bg: "rgba(24, 119, 242, 0.10)",
      icon: "#EAF3FF"
    },
    instagram: {
      color: "#C13584",
      ring: "rgba(193, 53, 132, 0.28)",
      bg: "rgba(193, 53, 132, 0.10)",
      icon: "#FBEAF4"
    },
    youtube: {
      color: "#FF0000",
      ring: "rgba(255, 0, 0, 0.24)",
      bg: "rgba(255, 0, 0, 0.09)",
      icon: "#FFECEC"
    },
    snapchat: {
      color: "#C9A600",
      ring: "rgba(255, 252, 0, 0.42)",
      bg: "rgba(255, 252, 0, 0.18)",
      icon: "#FFFBD1"
    },
    tiktok: {
      color: "#111111",
      ring: "rgba(37, 244, 238, 0.34)",
      bg: "rgba(37, 244, 238, 0.12)",
      icon: "#E8FFFF"
    },
    hilfe: {
      color: "#C9541C",
      ring: "rgba(201, 84, 28, 0.30)",
      bg: "rgba(201, 84, 28, 0.12)",
      icon: "#FFF0E8"
    }
  };

  const key = String(topicId || "").toLowerCase();
  const value = colors[key] || colors.datenschutz;

  return [
    `--topic-color: ${value.color}`,
    `--topic-ring: ${value.ring}`,
    `--topic-hover-bg: ${value.bg}`,
    `--topic-icon-bg: ${value.icon}`
  ].join("; ");
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
  if (!progressArea) return;
  progressArea.classList.toggle("is-hidden", !isVisible);
}

function setBottomNavVisible(isVisible) {
  const nav = document.querySelector(".nav");
  if (!nav) return;
  nav.classList.toggle("is-hidden", !isVisible);
}

function setHeader(title, module, step, level, percent) {
  appTitle.textContent = title || "Sicher und selbstbestimmt im Internet";
  moduleLabel.textContent = module || "Thema auswählen";
  stepLabel.textContent = step || "Themenübersicht";
  levelLabel.textContent = level || "Start";
  progressFill.style.width = `${Math.max(0, Math.min(100, percent || 0))}%`;
  progressTrack.setAttribute("aria-valuenow", String(Math.max(0, Math.min(100, percent || 0))));
}

function showNav(showBack, showNext, nextText = "Weiter") {
  backButton.disabled = !showBack;
  nextButton.disabled = !showNext;
  nextButton.textContent = nextText;
}

function renderLegalFooter() {
  const old = document.querySelector(".small-footer-notice");
  if (old) old.remove();

  const footer = document.createElement("footer");
  footer.className = "small-footer-notice";
  footer.innerHTML = `
    <p>Dies ist ein unabhängiges Bildungsangebot. Es ist kein offizielles Angebot von WhatsApp, Facebook, Instagram, YouTube, Snapchat oder TikTok.</p>
    <p>Es wird kein Name gespeichert. Es wird kein Lernstand gespeichert.</p>
  `;
  const appRoot = document.querySelector(".app") || document.body;
  appRoot.appendChild(footer);
}

function renderMenu() {
  setProgressVisible(false);
  setBottomNavVisible(false);

  currentTopicId = null;
  currentStep = 0;
  currentQuizIndex = 0;
  selectedAnswer = null;

  setHeader("Sicher und selbstbestimmt im Internet", "Thema auswählen", "Themenübersicht", "Wähle ein Thema", 0);
  showNav(false, false);

  const cards = topics.map(topic => `
    <button type="button" class="topic-card topic-${escapeHtml(topic.id)}" style="${getTopicColorStyle(topic.id)}" onclick="renderTopicChoice('${escapeHtml(topic.id)}')">
      ${getIllustrationHtml(topic)}
      <span class="topic-icon" aria-hidden="true">${getIconHtml(topic.icon || "start")}</span>
      <span class="topic-title">${escapeHtml(topic.title)}</span>
      <span class="topic-desc">${escapeHtml(topic.desc || "")}</span>
    </button>
  `).join("");

  content.innerHTML = `
    <section class="start-page">
      <div class="hero-card">
        <h2>Wähle ein Thema.</h2>
        <p>Du kannst kurz lernen.</p>
        <p>Du kannst ein Quiz machen.</p>
        <p>Du kannst eine Merk-Karte.</p>
      </div>

      <div class="topic-grid">
        ${cards}
      </div>
    </section>
  `;

  content.focus();
  renderLegalFooter();
}

function renderTopicChoice(topicId) {
  setProgressVisible(false);
  setBottomNavVisible(false);

  const topic = topics.find(item => item.id === topicId);
  if (!topic) {
    renderMenu();
    return;
  }

  currentTopicId = topic.id;
  currentStep = 0;
  currentQuizIndex = 0;
  quizScore = 0;
  selectedAnswer = null;

  setHeader("Sicher und selbstbestimmt im Internet", topic.title, "Auswahl", "Thema", 5);
  showNav(true, false);

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
          </span>
        </button>

        <button type="button" class="action-card action-full" onclick="startTopicMode('${escapeHtml(topic.id)}', 'full')">
          <span class="action-icon" aria-hidden="true">${getIconHtml("example")}</span>
          <span class="action-text">
            <span class="action-title">Mehr lernen</span>
            <span class="action-desc">Mit Beispielen.</span>
          </span>
        </button>

        <button type="button" class="action-card action-quiz" onclick="startQuiz('${escapeHtml(topic.id)}')">
          <span class="action-icon" aria-hidden="true">${getIconHtml("quiz")}</span>
          <span class="action-text">
            <span class="action-title">Quiz machen</span>
            <span class="action-desc">Fragen beantworten.</span>
          </span>
        </button>

        <button type="button" class="action-card action-memory" onclick="renderMemoryCard('${escapeHtml(topic.id)}')">
          <span class="action-icon" aria-hidden="true">${getIconHtml("remember")}</span>
          <span class="action-text">
            <span class="action-title">Merk-Karte</span>
            <span class="action-desc">Regeln ansehen.</span>
          </span>
        </button>
      </div>

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
    </section>
  `;

  content.focus();
  renderLegalFooter();
}

function getLessonsForMode(topic, mode) {
  if (!topic || !Array.isArray(topic.lessons)) return [];
  if (mode === "short" && Array.isArray(topic.shortLessonIndexes)) {
    return topic.shortLessonIndexes
      .map(index => topic.lessons[index])
      .filter(Boolean);
  }
  return topic.lessons;
}

function startTopicMode(topicId, mode) {
  const topic = topics.find(item => item.id === topicId);
  if (!topic) {
    renderMenu();
    return;
  }
  currentTopicId = topic.id;
  currentMode = mode === "short" ? "short" : "full";
  currentStep = 0;
  renderLesson();
}

function renderLesson() {
  setProgressVisible(true);
  setBottomNavVisible(true);

  const topic = getCurrentTopic();
  if (!topic) {
    renderMenu();
    return;
  }

  const lessons = getLessonsForMode(topic, currentMode);
  if (!lessons.length) {
    renderTopicChoice(topic.id);
    return;
  }

  if (currentStep < 0) currentStep = 0;
  if (currentStep >= lessons.length) currentStep = lessons.length - 1;

  const lesson = lessons[currentStep];
  const percent = Math.round(((currentStep + 1) / lessons.length) * 100);
  const modeLabel = currentMode === "short" ? "Kurz lernen" : "Mehr lernen";

  setHeader(topic.title, modeLabel, `Seite ${currentStep + 1} von ${lessons.length}`, lesson.module || "Lernen", percent);
  showNav(true, true, currentStep === lessons.length - 1 ? "Fertig" : "Weiter");

  const text = Array.isArray(lesson.text)
    ? lesson.text.map(item => `<p>${escapeHtml(item)}</p>`).join("")
    : "";

  const bullets = Array.isArray(lesson.bullets) && lesson.bullets.length
    ? `<ul>${lesson.bullets.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
    : "";

  const warning = lesson.warning
    ? `<div class="access-box warning"><h3>Achtung</h3><p>${escapeHtml(lesson.warning)}</p></div>`
    : "";

  const success = lesson.success
    ? `<div class="access-box success"><h3>Gut</h3><p>${escapeHtml(lesson.success)}</p></div>`
    : "";

  const remember = lesson.remember
    ? `<div class="access-box remember"><h3>Merksatz</h3><p>${escapeHtml(lesson.remember)}</p></div>`
    : "";

  const examples = Array.isArray(lesson.examples) && lesson.examples.length
    ? `<div class="access-box example"><h3>Beispiele</h3><ul>${lesson.examples.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>`
    : "";

  const practice = lesson.practice
    ? buildPractice(lesson.practice)
    : "";

  content.innerHTML = `
    <article class="card lesson-card">
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

  content.focus();
  renderLegalFooter();
}

function buildPractice(practice) {
  const question = practice.question || practice.title || "";
  const answers = Array.isArray(practice.answers) ? practice.answers : [];

  if (!question && !answers.length) return "";

  const answerHtml = answers.map((answer, index) => `
    <button type="button" class="answer-option" onclick="showPracticeFeedback(${index}, ${Number(practice.correctIndex ?? 0)})">
      ${escapeHtml(answer)}
    </button>
  `).join("");

  return `
    <div class="practice-box">
      <h3>Übung</h3>
      <p class="practice-question"><strong>${escapeHtml(question)}</strong></p>
      <div class="answers">${answerHtml}</div>
      <p id="practiceFeedback" class="feedback" aria-live="polite"></p>
    </div>
  `;
}

function showPracticeFeedback(index, correctIndex) {
  const feedback = document.getElementById("practiceFeedback");
  if (!feedback) return;
  if (index === correctIndex) {
    feedback.textContent = "Das ist eine gute Entscheidung.";
    feedback.className = "feedback is-correct";
  } else {
    feedback.textContent = "Das ist unsicher. Frage eine Person, der du vertraust.";
    feedback.className = "feedback is-wrong";
  }
}

function startQuiz(topicId) {
  const topic = topics.find(item => item.id === topicId);
  if (!topic) {
    renderMenu();
    return;
  }

  currentTopicId = topic.id;
  currentQuizIndex = 0;
  quizScore = 0;
  selectedAnswer = null;
  renderQuizQuestion();
}

function getQuizQuestions(topic) {
  if (!topic) return [];
  if (Array.isArray(topic.quizQuestions) && topic.quizQuestions.length) return topic.quizQuestions;
  if (Array.isArray(topic.quiz) && topic.quiz.length) return topic.quiz;
  return [];
}

function renderQuizQuestion() {
  setProgressVisible(true);
  setBottomNavVisible(true);

  const topic = getCurrentTopic();
  const questions = getQuizQuestions(topic);

  if (!topic || !questions.length) {
    renderTopicChoice(currentTopicId);
    return;
  }

  if (currentQuizIndex >= questions.length) {
    renderQuizResult();
    return;
  }

  const q = questions[currentQuizIndex];
  const answers = Array.isArray(q.answers) ? q.answers : [];
  selectedAnswer = null;

  setHeader(topic.title, "Quiz", `Frage ${currentQuizIndex + 1} von ${questions.length}`, "Quiz", Math.round((currentQuizIndex / questions.length) * 100));
  showNav(true, true, "Antwort prüfen");

  const answerHtml = answers.map((answer, index) => `
    <button type="button" class="answer-option" onclick="selectQuizAnswer(${index}, this)">
      ${escapeHtml(answer)}
    </button>
  `).join("");

  content.innerHTML = `
    <article class="card quiz-card">
      <h2>Quiz</h2>
      <p class="quiz-question">${escapeHtml(q.question || "")}</p>
      <div class="answers">${answerHtml}</div>
      <p id="quizFeedback" class="feedback" aria-live="polite"></p>
    </article>
  `;

  content.focus();
  renderLegalFooter();
}

function selectQuizAnswer(index, button) {
  selectedAnswer = index;
  document.querySelectorAll(".answer-option").forEach(item => item.classList.remove("selected"));
  if (button) button.classList.add("selected");
}

function checkQuizAnswer() {
  const topic = getCurrentTopic();
  const questions = getQuizQuestions(topic);
  const q = questions[currentQuizIndex];
  const feedback = document.getElementById("quizFeedback");

  if (!q || !feedback) return;

  if (selectedAnswer === null) {
    feedback.textContent = "Bitte wähle eine Antwort aus.";
    feedback.className = "feedback";
    return;
  }

  const correctIndex = Number(q.correctIndex ?? q.correct ?? 0);
  if (selectedAnswer === correctIndex) {
    quizScore += 1;
    feedback.textContent = q.feedbackCorrect || "Richtig. Das ist eine gute Entscheidung.";
    feedback.className = "feedback is-correct";
  } else {
    feedback.textContent = q.feedbackWrong || "Das ist nicht die sicherste Antwort. Frage eine Person, der du vertraust.";
    feedback.className = "feedback is-wrong";
  }

  currentQuizIndex += 1;
  nextButton.textContent = currentQuizIndex >= questions.length ? "Ergebnis" : "Nächste Frage";
  nextButton.onclick = () => renderQuizQuestion();
}

function renderQuizResult() {
  setProgressVisible(false);
  setBottomNavVisible(false);

  const topic = getCurrentTopic();
  const questions = getQuizQuestions(topic);
  const total = questions.length || 1;
  const percent = Math.round((quizScore / total) * 100);

  setHeader(topic ? topic.title : "Quiz", "Quiz", "Ergebnis", "Fertig", 100);
  showNav(true, false);

  content.innerHTML = `
    <article class="card quiz-result-card">
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

  content.focus();
  renderLegalFooter();
}

function renderMemoryCard(topicId) {
  setProgressVisible(false);
  setBottomNavVisible(false);

  const topic = topics.find(item => item.id === topicId);
  if (!topic) {
    renderMenu();
    return;
  }

  currentTopicId = topic.id;
  setHeader("Merk-Karte", topic.title, "Merk-Karte", "Merken", 100);
  showNav(true, false);

  const rules = Array.isArray(topic.memoryRules)
    ? topic.memoryRules.map(rule => `<li>${escapeHtml(rule)}</li>`).join("")
    : "";

  const questions = Array.isArray(topic.helpQuestions)
    ? topic.helpQuestions.map(question => `<li>${escapeHtml(question)}</li>`).join("")
    : "";

  content.innerHTML = `
    <article class="card memory-card">
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

  content.focus();
  renderLegalFooter();
}




function toggleSupportHelp() {
  const panel = document.getElementById("supportHelpPanel");
  const button = document.querySelector(".support-help-button");
  const desc = document.querySelector(".support-help-desc");
  if (!panel) return;

  const isHidden = panel.hasAttribute("hidden");

  if (isHidden) {
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

function renderHelpOverlay() {
  setProgressVisible(false);
  setBottomNavVisible(false);

  setHeader("Hilfe", "Orientierung", "Hilfe", "Bedienung", 0);
  showNav(true, false);

  content.innerHTML = `
    <article class="card help-card">
      <h2>Hilfe auf dieser Lernseite</h2>
      <p>Du kannst zurück zur Startseite gehen.</p>
      <p>Du kannst ein Thema neu auswählen.</p>
      <p>Du kannst eine Pause machen.</p>
      <p>Du kannst eine Person fragen, der du vertraust.</p>

      <div class="certificate-actions">
        <button type="button" class="quiz-link quiz-button" onclick="renderMenu()">Zur Startseite</button>
      </div>
    </article>
  `;

  content.focus();
  renderLegalFooter();
}

function goBack() {
  if (!currentTopicId) {
    renderMenu();
    return;
  }

  const topic = getCurrentTopic();

  if (currentQuizIndex > 0) {
    currentQuizIndex = Math.max(0, currentQuizIndex - 1);
    renderQuizQuestion();
    return;
  }

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

  if (!topic) {
    renderMenu();
    return;
  }

  if (nextButton.textContent === "Antwort prüfen") {
    checkQuizAnswer();
    return;
  }

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
  if (!hash) {
    renderMenu();
    return;
  }

  const parts = hash.split(":");
  const topicId = parts[0];
  const action = parts[1] || "";

  const topic = topics.find(item => item.id === topicId);
  if (!topic) {
    renderMenu();
    return;
  }

  if (action === "short") {
    startTopicMode(topicId, "short");
  } else if (action === "quiz") {
    startQuiz(topicId);
  } else if (action === "memory") {
    renderMemoryCard(topicId);
  } else {
    renderTopicChoice(topicId);
  }
}

backButton.addEventListener("click", goBack);
nextButton.addEventListener("click", goNext);
homeButton.addEventListener("click", renderMenu);

document.addEventListener("DOMContentLoaded", () => {
  handleHash();
});
