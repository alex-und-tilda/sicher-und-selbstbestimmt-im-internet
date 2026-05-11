
let learningMode = "full";
let activeLessonIndexes = null;

function getStorageKey(topicId) {
  return `lernplattform_progress_${topicId}_${learningMode}`;
}

function saveProgress() {
  if (!currentTopicId) return;
  try {
    localStorage.setItem(getStorageKey(currentTopicId), JSON.stringify({
      topicId: currentTopicId,
      mode: learningMode,
      step: currentStep,
      savedAt: new Date().toISOString()
    }));
  } catch (e) {
    // Speichern ist freiwillig. Wenn der Browser es blockiert, läuft die Seite trotzdem.
  }
}

function loadProgress(topicId, mode) {
  try {
    const raw = localStorage.getItem(`lernplattform_progress_${topicId}_${mode}`);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function getActiveLessons(topic) {
  if (!topic) return [];
  if (learningMode === "short") {
    const indexes = topic.shortLessonIndexes || [];
    return indexes.map(index => topic.lessons[index]).filter(Boolean);
  }
  return topic.lessons || [];
}

function getOriginalStepIndex(topic, activeStepIndex) {
  if (!topic) return activeStepIndex;
  if (learningMode === "short") {
    const indexes = topic.shortLessonIndexes || [];
    return indexes[activeStepIndex] ?? activeStepIndex;
  }
  return activeStepIndex;
}

function startTopicMode(topicId, mode) {
  currentTopicId = topicId;
  learningMode = mode;
  activeLessonIndexes = null;
  const saved = loadProgress(topicId, mode);
  const topic = topics.find(t => t.id === topicId);
  const lessons = getActiveLessons(topic);
  currentStep = saved && Number.isInteger(saved.step) && saved.step < lessons.length ? saved.step : 0;
  renderStep();
}

function continueTopic(topicId, mode) {
  currentTopicId = topicId;
  learningMode = mode;
  const saved = loadProgress(topicId, mode);
  currentStep = saved && Number.isInteger(saved.step) ? saved.step : 0;
  renderStep();
}

function renderMemoryCard(topicId) {
  setViewMode("print");
  const topic = topics.find(t => t.id === topicId);
  if (!topic) return;

  appTitle.textContent = "Merk-Karte";
  moduleLabel.textContent = topic.title;
  stepLabel.textContent = "Druckkarte";
  levelLabel.textContent = "Merken";
  progressFill.style.width = "100%";
  progressTrack.setAttribute("aria-valuenow", "100");

  backButton.disabled = false;
  nextButton.disabled = false;
  nextButton.textContent = "Themenübersicht";

  const rules = (topic.memoryRules || []).map(rule => `<li>${escapeHtml(rule)}</li>`).join("");
  const questions = (topic.helpQuestions || []).map(question => `<li>${escapeHtml(question)}</li>`).join("");

  content.innerHTML = `
    <article class="card memory-card">
      <div class="memory-frame">
        <div class="module-tag">Merk-Karte</div>
        <h2>${escapeHtml(topic.title)}</h2>
        <p class="memory-subtitle">Meine 3 wichtigsten Regeln</p>

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
          <button class="quiz-link quiz-button" onclick="window.print()">Merk-Karte drucken</button>
          <button class="nav-button secondary" onclick="renderMenu()">Zurück</button>
        </div>
      </div>
    </article>
  `;
  content.focus();
}


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


const moduleNames = ["Verstehen", "Daten", "Inhalte", "Risiken", "Verhalten", "Hilfe"];

function getModuleIndex(topic, stepIndex) {
  if (!topic || !topic.lessons || !topic.lessons[stepIndex]) return 0;
  const currentModule = topic.lessons[stepIndex].module;
  const modules = [...new Set(topic.lessons.map(lesson => lesson.module))];
  return Math.max(0, modules.indexOf(currentModule));
}

function getModuleCount(topic) {
  if (!topic || !topic.lessons) return 6;
  return [...new Set(topic.lessons.map(lesson => lesson.module))].length;
}

function getModuleProgressHtml(topic, stepIndex) {
  const moduleIndex = getModuleIndex(topic, stepIndex);
  const count = getModuleCount(topic);
  const labels = moduleNames.slice(0, count);
  return `
    <div class="module-orientation" aria-label="Modul-Fortschritt">
      <p class="module-current">Modul ${moduleIndex + 1} von ${count}: ${escapeHtml(labels[moduleIndex] || topic.lessons[stepIndex].module)}</p>
      <div class="module-steps">
        ${labels.map((label, index) => `
          <span class="module-step ${index < moduleIndex ? "done" : ""} ${index === moduleIndex ? "active" : ""}">
            ${escapeHtml(label)}
          </span>
        `).join("")}
      </div>
    </div>
  `;
}

function speakCurrentCard() {
  if (!("speechSynthesis" in window)) {
    liveRegion.textContent = "Vorlesen wird von diesem Browser nicht unterstützt.";
    return;
  }
  window.speechSynthesis.cancel();
  const text = content.innerText.trim();
  if (!text) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
  liveRegion.textContent = "Der Text wird vorgelesen.";
}

function stopReading() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    liveRegion.textContent = "Vorlesen gestoppt.";
  }
}

function renderEvaluation() {
  setViewMode("print");
  appTitle.textContent = "Rückmeldung";
  moduleLabel.textContent = "Zielgruppen-Test";
  stepLabel.textContent = "Druckseite";
  levelLabel.textContent = "Feedback";
  progressFill.style.width = "100%";
  progressTrack.setAttribute("aria-valuenow", "100");

  backButton.disabled = false;
  nextButton.disabled = false;
  nextButton.textContent = "Themenübersicht";

  content.innerHTML = `
    <article class="card evaluation-card print-sheet">
      <div class="print-frame">
        <div class="module-tag">Zielgruppen-Test</div>
        <h2>Rückmeldung zum Selbstlernangebot</h2>
        <p>Diese Seite kann ausgedruckt werden.</p>
        <p>Die Fragen können angekreuzt oder gemeinsam besprochen werden.</p>

        <section class="testbogen">
          <h3>Teil 1: Fragen für Lernende</h3>
          <p>Bitte ankreuzen oder erzählen.</p>
          <ul class="checkbox-list">
            <li>□ Ich habe den Start gefunden.</li>
            <li>□ Ich habe die Buttons verstanden.</li>
            <li>□ Die Sätze waren leicht.</li>
            <li>□ Die Bilder und Farben haben geholfen.</li>
            <li>□ Ich konnte das Quiz starten.</li>
            <li>□ Ich weiß, wann ich Hilfe holen kann.</li>
          </ul>
          <p><strong>Das war leicht:</strong></p>
          <div class="write-line"></div>
          <p><strong>Das war schwer:</strong></p>
          <div class="write-line"></div>
          <p><strong>Das möchte ich nochmal üben:</strong></p>
          <div class="write-line"></div>
        </section>

        <section class="testbogen">
          <h3>Teil 2: Beobachtung für Unterstützerinnen und Unterstützer</h3>
          <ul class="checkbox-list">
            <li>□ Die Person konnte ein Thema auswählen.</li>
            <li>□ Die Person konnte zwischen Kurz lernen, Ausführlich lernen, Quiz und Merk-Karte wählen.</li>
            <li>□ Die Person konnte weiterblättern.</li>
            <li>□ Die Person konnte sichere und unsichere Situationen unterscheiden.</li>
            <li>□ Die Person konnte eine passende Hilfe-Person benennen.</li>
            <li>□ Die Person brauchte zusätzliche Erklärung.</li>
          </ul>
          <p><strong>Beobachtung:</strong></p>
          <div class="write-box"></div>
          <p><strong>Anpassung für das nächste Mal:</strong></p>
          <div class="write-box"></div>
        </section>

        <div class="certificate-actions">
          <button class="quiz-link quiz-button" onclick="window.print()">Testbogen drucken</button>
          <button class="nav-button secondary" onclick="renderMenu()">Zurück</button>
        </div>
      </div>
    </article>
  `;
  content.focus();
}



function updateHashForCurrentStep() {
  if (!currentTopicId) return;
  const mode = learningMode === "short" ? "kurz" : "ausfuehrlich";
  const hash = `#${currentTopicId}:${mode}:${currentStep + 1}`;
  if (window.location.hash !== hash) {
    history.replaceState(null, "", hash);
  }
}

function handleHashRoute() {
  const raw = window.location.hash.replace("#", "").trim();
  if (!raw) return false;

  const [topicId, action, stepRaw] = raw.split(":");
  const topic = topics.find(t => t.id === topicId);
  if (!topic) return false;

  if (action === "quiz") {
    startTopicQuiz(topicId);
    return true;
  }

  if (action === "merk") {
    renderMemoryCard(topicId);
    return true;
  }

  if (action === "kurz") {
    learningMode = "short";
    currentTopicId = topicId;
    const lessons = getActiveLessons(topic);
    const step = Math.max(0, Math.min((parseInt(stepRaw || "1", 10) || 1) - 1, lessons.length - 1));
    currentStep = step;
    renderStep();
    return true;
  }

  if (action === "ausfuehrlich") {
    learningMode = "full";
    currentTopicId = topicId;
    const lessons = getActiveLessons(topic);
    const step = Math.max(0, Math.min((parseInt(stepRaw || "1", 10) || 1) - 1, lessons.length - 1));
    currentStep = step;
    renderStep();
    return true;
  }

  startTopicMode(topicId, "short");
  return true;
}

function renderQrLinks(topic) {
  const base = window.location.href.split("#")[0];
  return `
    <span class="qr-links">
      <strong>Direktlinks für QR-Codes:</strong>
      <code>${base}#${topic.id}</code>
      <code>${base}#${topic.id}:kurz</code>
      <code>${base}#${topic.id}:quiz</code>
      <code>${base}#${topic.id}:merk</code>
    </span>
  `;
}

function renderSavedProgressHint(topic) {
  const full = loadProgress(topic.id, "full");
  const short = loadProgress(topic.id, "short");
  const parts = [];

  if (short) {
    const total = topic.shortLessonIndexes ? topic.shortLessonIndexes.length : 0;
    parts.push(`
      <div class="continue-card">
        <strong>Du hast zuletzt gelernt:</strong><br>
        ${escapeHtml(topic.title)} · Kurz lernen · Seite ${short.step + 1} von ${total}
        <button class="continue-button" onclick="continueTopic('${topic.id}', 'short')">Weiterlernen</button>
        <button class="continue-button secondary" onclick="startTopicMode('${topic.id}', 'short')">Von vorne starten</button>
      </div>
    `);
  }

  if (full) {
    const total = topic.lessons ? topic.lessons.length : 0;
    parts.push(`
      <div class="continue-card">
        <strong>Du hast zuletzt gelernt:</strong><br>
        ${escapeHtml(topic.title)} · Ausführlich lernen · Seite ${full.step + 1} von ${total}
        <button class="continue-button" onclick="continueTopic('${topic.id}', 'full')">Weiterlernen</button>
        <button class="continue-button secondary" onclick="startTopicMode('${topic.id}', 'full')">Von vorne starten</button>
      </div>
    `);
  }

  if (!parts.length) return "";
  return `<span class="saved-progress">${parts.join("")}</span>`;
}



function setViewMode(mode) {
  document.body.classList.remove("view-menu", "view-learning", "view-quiz", "view-print");
  document.body.classList.add(`view-${mode}`);
}

function renderMenu() {
  setViewMode("menu");
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
      <h2>Was möchtest du tun?</h2>
      <div class="poster-hint">
        <strong>Willkommen beim Selbstlernangebot.</strong><br>
      Wähle ein Thema aus.<br>
      Du kannst in deinem Tempo lernen.<br>
      Wenn du unsicher bist: Frage eine Person, der du vertraust.
      </div>
      <div class="start-choice-box">
        <p><strong>Kurz lernen:</strong> die wichtigsten Seiten.</p>
        <p><strong>Ausführlich lernen:</strong> alle Seiten mit Beispielen.</p>
        <p><strong>Quiz starten:</strong> 10 Fragen beantworten.</p>
        <p><strong>Merk-Karte:</strong> 3 wichtige Regeln drucken.</p>
      </div>
      <div class="privacy-note">
        Es wird kein Name gespeichert.
        Der Lernstand wird nur auf diesem Gerät gemerkt.
      </div>
      <div class="topic-grid">
  `;

  topics.forEach(topic => {
    html += `
      <section class="topic-button topic-card" aria-label="${escapeHtml(topic.title)}">
        <span class="topic-icon" aria-hidden="true">${getIconHtml(topic.icon)}</span>
        <span>
          <span class="topic-title">${escapeHtml(topic.title)}</span>
          <span class="topic-desc">${escapeHtml(topic.desc)} · etwa 10–15 Minuten</span>
          <span class="topic-actions action-card-grid">
            <button class="action-card action-short" onclick="startTopicMode('${topic.id}', 'short')">
              <span class="action-icon" aria-hidden="true">${getIconHtml("check")}</span>
              <span class="action-text">
                <strong>Kurz lernen</strong>
                <small>Die wichtigsten Seiten.</small>
                <em>Was muss ich mir merken?</em>
              </span>
            </button>

            <button class="action-card action-full" onclick="startTopicMode('${topic.id}', 'full')">
              <span class="action-icon" aria-hidden="true">${getIconHtml("understand")}</span>
              <span class="action-text">
                <strong>Ausführlich lernen</strong>
                <small>Alle Seiten mit Beispielen.</small>
                <em>Was kann ich im Alltag tun?</em>
              </span>
            </button>

            <button class="action-card action-quiz" onclick="startTopicQuiz('${topic.id}')">
              <span class="action-icon" aria-hidden="true">${getIconHtml("quiz")}</span>
              <span class="action-text">
                <strong>Quiz starten</strong>
                <small>10 Fragen beantworten.</small>
                <em>Habe ich das verstanden?</em>
              </span>
            </button>

            <button class="action-card action-memory" onclick="renderMemoryCard('${topic.id}')">
              <span class="action-icon" aria-hidden="true">${getIconHtml("remember")}</span>
              <span class="action-text">
                <strong>Merk-Karte</strong>
                <small>3 wichtige Regeln drucken.</small>
                <em>Was nehme ich mit?</em>
              </span>
            </button>
          </span>
          <span class="topic-help-title">Das kannst du eine Person fragen, der du vertraust:</span>
          <span class="topic-help-list">${(topic.helpQuestions || []).map(q => `• ${escapeHtml(q)}`).join("<br>")}</span>
          ${renderSavedProgressHint(topic)}
          <img src="${topic.illustration}" alt="" class="topic-preview">
        </span>
      </section>
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
  startTopicMode(topicId, "full");
}


function startTopicQuiz(topicId) {
  currentTopicId = topicId;
  learningMode = "full";
  currentStep = 0;
  startQuiz();
}

function renderStep() {
  setViewMode("learning");
  const topic = getCurrentTopic();
  if (!topic) {
    renderMenu();
    return;
  }

  const lessons = getActiveLessons(topic);
  const lesson = lessons[currentStep];
  const total = lessons.length;
  const progress = ((currentStep + 1) / total) * 100;
  saveProgress();
  updateHashForCurrentStep();

  appTitle.textContent = topic.title;
  moduleLabel.textContent = lesson.module;
  stepLabel.textContent = `${learningMode === "short" ? "Kurz" : "Ausführlich"} · Seite ${currentStep + 1} von ${total}`;
  levelLabel.textContent = getLevelText(progress);
  progressFill.style.width = `${progress}%`;
  progressTrack.setAttribute("aria-valuenow", Math.round(progress));

  backButton.disabled = false;
  nextButton.disabled = false;
  nextButton.textContent = currentStep === total - 1 ? "Themenübersicht" : "Weiter";

  content.innerHTML = buildCard(lesson, topic);
  content.focus();

  liveRegion.textContent = `${topic.title}. ${lesson.title}. Seite ${currentStep + 1} von ${total}.`;
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
      <div class="mode-note">${learningMode === "short" ? "Kurz lernen" : "Ausführlich lernen"}</div>
      <div class="audio-actions"><button class="audio-button" onclick="speakCurrentCard()">Vorlesen</button><button class="audio-button secondary" onclick="stopReading()">Stopp</button></div>
      <div class="step-help-box">
        <strong>Du bist unsicher?</strong><br>
        Frage eine Person, der du vertraust:
        <ul>${(topic.helpQuestions || []).map(q => `<li>${escapeHtml(q)}</li>`).join("")}</ul>
      </div>
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
  setViewMode("quiz");
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
    explanation: q.explanation,
    area: q.area
  });

  renderQuizFeedback(isCorrect, q.explanation);
}

function renderQuizFeedback(isCorrect, explanation) {
  setViewMode("quiz");
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
  setViewMode("print");
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

  const areaRows = quizAnswers.map(answer => {
    const area = answer.area || "Lernbereich";
    const status = answer.isCorrect ? "gut" : "nochmal üben";
    const icon = answer.isCorrect ? "✓" : "↻";
    return `<li><strong>${escapeHtml(area)}:</strong> ${icon} ${status}</li>`;
  }).join("");

  const goals = (topic.certificateGoals || []).map(goal => `<li>✓ ${escapeHtml(goal)}</li>`).join("");

  if (passed) {
    content.innerHTML = `
      <article class="card certificate-card" id="certificateArea">
        <div class="certificate-frame">
          <div class="module-tag">Urkunde</div>
          <h2 class="certificate-title">Urkunde</h2>
          <p class="certificate-subtitle">erfolgreich abgeschlossen</p>

          <p class="certificate-topic">Thema: <strong>${escapeHtml(topic.title)}</strong></p>
          <p>Du hast das Quiz erfolgreich abgeschlossen.</p>
          <p>Dein Ergebnis: <strong>${quizScore} von ${total} richtig</strong> (${percent}%).</p>

          <div class="completion-box">
            <h3>Das hast du gelernt:</h3>
            <ul>${goals}</ul>
          </div>

          <div class="completion-box">
            <h3>Auswertung:</h3>
            <ul>${areaRows}</ul>
          </div>

          <p class="certificate-note">Name:</p>
          <div class="certificate-name-line"></div>

          <div class="signature-grid">
            <div>
              <p class="certificate-note">Datum:</p>
              <p>${new Date().toLocaleDateString("de-DE")}</p>
            </div>
            <div>
              <p class="certificate-note">Unterschrift:</p>
              <div class="certificate-name-line"></div>
            </div>
          </div>

          <div class="certificate-logos">
            <img src="assets/brand/logo-tilbeck-alexianer.jpeg" alt="Logo Stift Tilbeck und Alexianer">
            <img src="assets/brand/logo-sozialstiftung-nrw.jpeg" alt="Logo Sozialstiftung NRW">
          </div>

          <div class="certificate-actions">
            <button class="quiz-link quiz-button" onclick="window.print()">Urkunde drucken</button>
            <button class="nav-button secondary" onclick="restartQuiz()">Quiz wiederholen</button>
          </div>
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

        <div class="completion-box">
          <h3>Das kannst du nochmal üben:</h3>
          <ul>${areaRows}</ul>
        </div>

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

if (!handleHashRoute()) {
  renderMenu();
}
window.addEventListener("hashchange", handleHashRoute);
