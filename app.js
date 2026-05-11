
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
      <p>Lerne Schritt für Schritt. Mit Beispielen, Übungen und Merksätzen.</p>
      <div class="topic-grid">
  `;

  topics.forEach(topic => {
    html += `
      <button class="topic-button" onclick="startTopic('${topic.id}')">
        <span class="topic-icon" aria-hidden="true">${getIconHtml(topic.icon)}</span>
        <span>
          <span class="topic-title">${escapeHtml(topic.title)}</span>
          <span class="topic-desc">${escapeHtml(topic.desc)} · etwa 10–15 Minuten</span>
          <span class="topic-start-label">Thema starten</span>
          <img src="${topic.illustration}" alt="" class="topic-preview">
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
        <div class="icon" aria-hidden="true">${getIconHtml(lesson.icon)}</div>
        <h2>${escapeHtml(lesson.title)}</h2>
      </div>
  `;

  if (currentStep === 0 && topic.illustration) {
    html += `<img src="${topic.illustration}" alt="" class="lesson-illustration">`;
  }

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
    html += `<div class="remember">${escapeHtml(lesson.remember)}</div>`;
  }

  if (lesson.quiz) {
    html += `
      <div class="completion-box">
        <h3>Geschafft.</h3>
        <p>Du hast dieses Thema beendet.</p>
        <p>Du kannst die wichtigsten Regeln wiederholen oder das Quiz starten.</p>
      </div>
      <button class="quiz-link quiz-button" onclick="startQuiz()">Quiz starten</button>
    `;
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


function getIconHtml(iconName) {
  if (!iconName) {
    return "";
  }

  const safeIconName = String(iconName).replace(/[^a-z0-9_-]/gi, "");

  return `<img src="assets/icons/${safeIconName}.svg" alt="" class="icon-svg" onerror="this.style.display='none'">`;
}


let quizMode = false;
let quizIndex = 0;
let quizScore = 0;
let quizAnswers = [];

function startQuiz() {
  const topic = getCurrentTopic();
  if (!topic || !topic.quizQuestions) return;

  quizMode = true;
  quizIndex = 0;
  quizScore = 0;
  quizAnswers = [];
  renderQuiz();
}

function renderQuiz() {
  const topic = getCurrentTopic();
  if (!topic) {
    renderMenu();
    return;
  }

  const total = topic.quizQuestions.length;
  const progress = ((quizIndex + 1) / total) * 100;

  appTitle.textContent = topic.title;
  moduleLabel.textContent = "Quiz";
  stepLabel.textContent = `Frage ${quizIndex + 1} von ${total}`;
  levelLabel.textContent = "Quiz";
  progressFill.style.width = `${progress}%`;
  progressTrack.setAttribute("aria-valuenow", Math.round(progress));

  backButton.disabled = true;
  nextButton.disabled = true;
  nextButton.textContent = "Weiter";

  const q = topic.quizQuestions[quizIndex];

  let html = `
    <article class="card quiz-card">
      <div class="module-tag">Quiz: ${escapeHtml(topic.title)}</div>
      <div class="card-header">
        <div class="icon" aria-hidden="true">${getIconHtml("quiz")}</div>
        <h2>Frage ${quizIndex + 1}</h2>
      </div>
      <p class="quiz-question">${escapeHtml(q.question)}</p>
      <div class="choice-list">
  `;

  q.answers.forEach((answer, index) => {
    html += `
      <button class="choice-button" onclick="answerQuiz(${index})">
        ${escapeHtml(answer)}
      </button>
    `;
  });

  html += `
      </div>
    </article>
  `;

  content.innerHTML = html;
  content.focus();
  liveRegion.textContent = `Quiz. Frage ${quizIndex + 1} von ${total}.`;
}

function answerQuiz(answerIndex) {
  const topic = getCurrentTopic();
  if (!topic) return;

  const q = topic.quizQuestions[quizIndex];
  const isCorrect = answerIndex === q.correct;

  if (isCorrect) quizScore += 1;

  quizAnswers.push({
    question: q.question,
    answer: q.answers[answerIndex],
    correctAnswer: q.answers[q.correct],
    isCorrect,
    explanation: q.explanation
  });

  renderQuizFeedback(isCorrect, q.explanation);
}

function renderQuizFeedback(isCorrect, explanation) {
  const topic = getCurrentTopic();
  const total = topic.quizQuestions.length;

  const feedbackClass = isCorrect ? "success" : "warning";
  const feedbackTitle = isCorrect ? "Richtig." : "Nicht ganz.";

  content.innerHTML = `
    <article class="card quiz-card">
      <div class="module-tag">Quiz: ${escapeHtml(topic.title)}</div>
      <div class="card-header">
        <div class="icon" aria-hidden="true">${getIconHtml(isCorrect ? "check" : "warning")}</div>
        <h2>${feedbackTitle}</h2>
      </div>

      <div class="feedback ${feedbackClass}">
        ${escapeHtml(explanation)}
      </div>

      <button class="quiz-link quiz-button" onclick="nextQuizQuestion()">
        ${quizIndex + 1 >= total ? "Ergebnis anzeigen" : "Nächste Frage"}
      </button>
    </article>
  `;

  content.focus();
}

function nextQuizQuestion() {
  const topic = getCurrentTopic();
  if (!topic) return;

  if (quizIndex + 1 >= topic.quizQuestions.length) {
    renderQuizResult();
  } else {
    quizIndex += 1;
    renderQuiz();
  }
}

function renderQuizResult() {
  const topic = getCurrentTopic();
  if (!topic) return;

  const total = topic.quizQuestions.length;
  const percent = Math.round((quizScore / total) * 100);
  const needed = Math.ceil(total * 0.6);
  const passed = quizScore >= needed;

  appTitle.textContent = topic.title;
  moduleLabel.textContent = "Quiz abgeschlossen";
  stepLabel.textContent = `Ergebnis: ${quizScore} von ${total}`;
  levelLabel.textContent = passed ? "Bestanden" : "Wiederholen";
  progressFill.style.width = "100%";
  progressTrack.setAttribute("aria-valuenow", "100");

  backButton.disabled = false;
  nextButton.disabled = false;
  nextButton.textContent = "Themenübersicht";

  const goals = (topic.certificateGoals || []).map(goal => `<li>✓ ${escapeHtml(goal)}</li>`).join("");

  if (passed) {
    content.innerHTML = `
      <article class="card certificate-card" id="certificateArea">
        <div class="module-tag">Urkunde</div>
        <div class="card-header">
          <div class="icon" aria-hidden="true">${getIconHtml("check")}</div>
          <h2>Erfolgreich abgeschlossen.</h2>
        </div>

        <p>Du hast das Thema <strong>${escapeHtml(topic.title)}</strong> erfolgreich abgeschlossen.</p>
        <p>Dein Ergebnis: <strong>${quizScore} von ${total} richtig</strong> (${percent}%).</p>

        <div class="completion-box">
          <h3>Das hast du gelernt:</h3>
          <ul>${goals}</ul>
        </div>

        <p class="certificate-note">Name eintragen:</p>
        <div class="certificate-name-line"></div>

        <p class="certificate-note">Datum:</p>
        <p>${new Date().toLocaleDateString("de-DE")}</p>

        <div class="certificate-actions">
          <button class="quiz-link quiz-button" onclick="window.print()">Urkunde drucken</button>
          <button class="nav-button secondary" onclick="restartQuiz()">Quiz wiederholen</button>
        </div>
      </article>
    `;
  } else {
    content.innerHTML = `
      <article class="card quiz-card">
        <div class="module-tag">Quiz-Ergebnis</div>
        <div class="card-header">
          <div class="icon" aria-hidden="true">${getIconHtml("remember")}</div>
          <h2>Gut geübt.</h2>
        </div>

        <p>Du hast <strong>${quizScore} von ${total}</strong> Fragen richtig beantwortet.</p>
        <p>Für die Urkunde brauchst du mindestens <strong>${needed} richtige Antworten</strong>.</p>

        <div class="feedback info">
          Wiederholen ist normal. Du kannst das Thema noch einmal anschauen oder das Quiz direkt wiederholen.
        </div>

        <div class="certificate-actions">
          <button class="quiz-link quiz-button" onclick="restartQuiz()">Quiz wiederholen</button>
          <button class="nav-button secondary" onclick="renderStep()">Zur Lernseite zurück</button>
        </div>
      </article>
    `;
  }

  quizMode = false;
  content.focus();
}

function restartQuiz() {
  startQuiz();
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
