
let currentTopicId = null;
let currentStep = 0;

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

function getCurrentTopic() {
  return topics.find(topic => topic.id === currentTopicId);
}

function renderMenu() {
  currentTopicId = null;
  currentStep = 0;

  appTitle.textContent = "Sicher digital lernen";
  moduleLabel.textContent = "Thema auswählen";
  stepLabel.textContent = "Themenübersicht";
  levelLabel.textContent = "Start";
  progressFill.style.width = "0%";
  progressTrack.setAttribute("aria-valuenow", "0");

  backButton.disabled = true;
  nextButton.disabled = true;
  nextButton.textContent = "Weiter";

  let html = `
    <section class="menu-card">
      <h2>Wähle ein Thema</h2>
      <p>Jedes Thema hat dieselbe Lernstruktur: Verstehen, private Daten, Inhalte, Risiken, Verhalten, Schutz und Hilfe.</p>
      <div class="topic-grid">
  `;

  topics.forEach(topic => {
    html += `
      <button class="topic-button" onclick="startTopic('${topic.id}')">
        <span class="topic-icon" aria-hidden="true">${topic.icon}</span>
        <span>
          <span class="topic-title">${escapeHtml(topic.title)}</span>
          <span class="topic-desc">${escapeHtml(topic.desc)} · 39 Seiten</span>
        </span>
      </button>
    `;
  });

  html += `
      </div>
    </section>
  `;

  content.innerHTML = html;
  content.focus();
  liveRegion.textContent = "Themenübersicht geöffnet.";
}

function startTopic(topicId) {
  currentTopicId = topicId;
  currentStep = 0;
  renderStep();
}

function renderStep() {
  const topic = getCurrentTopic();
  if (!topic) {
    renderMenu();
    return;
  }

  const lesson = topic.lessons[currentStep];
  const progress = ((currentStep + 1) / topic.lessons.length) * 100;

  appTitle.textContent = topic.title;
  moduleLabel.textContent = lesson.module;
  stepLabel.textContent = `Seite ${currentStep + 1} von ${topic.lessons.length}`;
  levelLabel.textContent = getLevelText(progress);
  progressFill.style.width = `${progress}%`;
  progressTrack.setAttribute("aria-valuenow", Math.round(progress));

  backButton.disabled = false;
  nextButton.disabled = false;
  nextButton.textContent = currentStep === topic.lessons.length - 1 ? "Themenübersicht" : "Weiter";

  content.innerHTML = buildCard(lesson, topic);
  content.focus();

  liveRegion.textContent = `${topic.title}. ${lesson.title}. Seite ${currentStep + 1} von ${topic.lessons.length}.`;
}

function getLevelText(progress) {
  if (progress >= 95) return "Abschluss";
  if (progress >= 65) return "Fortgeschritten";
  if (progress >= 35) return "Gut dabei";
  return "Start";
}

function buildCard(lesson, topic) {
  let html = `
    <article class="card">
      <div class="module-tag">${escapeHtml(lesson.module)}</div>
      <div class="card-header">
        <div class="icon" aria-hidden="true">${lesson.icon}</div>
        <h2>${escapeHtml(lesson.title)}</h2>
      </div>
  `;

  if (lesson.text) {
    lesson.text.forEach(line => {
      html += `<p>${escapeHtml(line)}</p>`;
    });
  }

  if (lesson.quote) {
    html += `<div class="quote">${escapeHtml(lesson.quote)}</div>`;
  }

  if (lesson.bullets) {
    html += "<ul>";
    lesson.bullets.forEach(item => {
      html += `<li>• ${escapeHtml(item)}</li>`;
    });
    html += "</ul>";
  }

  if (lesson.warning) {
    html += `<div class="notice warning">${escapeHtml(lesson.warning)}</div>`;
  }

  if (lesson.success) {
    html += `<div class="notice success">${escapeHtml(lesson.success)}</div>`;
  }

  if (lesson.exercise) {
    html += buildExercise(lesson.exercise);
  }

  if (lesson.remember) {
    html += `<div class="remember">Merksatz: ${escapeHtml(lesson.remember)}</div>`;
  }

  if (lesson.quiz) {
    html += `<a class="quiz-link" href="${topic.quiz}" target="_blank" rel="noopener noreferrer">Quiz starten</a>`;
  }

  html += "</article>";
  return html;
}

function buildExercise(exercise) {
  return `
    <div class="exercise">
      <div class="exercise-question">${escapeHtml(exercise.question)}</div>
      <div class="choice-list">
        <button class="choice-button" onclick="showFeedback('${exercise.id}', 'safe')">Das wirkt sicher</button>
        <button class="choice-button" onclick="showFeedback('${exercise.id}', 'unsafe')">Das wirkt unsicher</button>
        <button class="choice-button" onclick="showFeedback('${exercise.id}', 'help')">Ich brauche Hilfe</button>
      </div>
      <div id="${exercise.id}-feedback" class="feedback" role="status" aria-live="polite" aria-atomic="true" tabindex="-1" hidden></div>
    </div>
  `;
}

function showFeedback(exerciseId, answer) {
  const topic = getCurrentTopic();
  if (!topic) return;

  const lesson = topic.lessons[currentStep];
  if (!lesson.exercise || lesson.exercise.id !== exerciseId) return;

  const feedbackData = lesson.exercise.feedback[answer];
  const feedback = document.getElementById(`${exerciseId}-feedback`);
  if (!feedback || !feedbackData) return;

  feedback.hidden = false;
  feedback.className = `feedback ${feedbackData.type}`;
  feedback.innerHTML = `<strong>${escapeHtml(feedbackData.title)}</strong><br>${escapeHtml(feedbackData.text)}`;
  feedback.focus();
}

function nextStep() {
  const topic = getCurrentTopic();
  if (!topic) {
    renderMenu();
    return;
  }

  if (currentStep === topic.lessons.length - 1) {
    renderMenu();
  } else {
    currentStep += 1;
    renderStep();
  }
}

function backStep() {
  const topic = getCurrentTopic();
  if (!topic) {
    renderMenu();
    return;
  }

  if (currentStep > 0) {
    currentStep -= 1;
    renderStep();
  } else {
    renderMenu();
  }
}

function goHome() {
  renderMenu();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

nextButton.addEventListener("click", nextStep);
backButton.addEventListener("click", backStep);
homeButton.addEventListener("click", goHome);

document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight") nextStep();
  if (event.key === "ArrowLeft") backStep();
});

renderMenu();
