"use strict";

let aktuellesVorlesen = null;

function vorlesenBeenden() {
  if (!aktuellesVorlesen) return;
  const { knopf } = aktuellesVorlesen;
  aktuellesVorlesen = null;
  knopf.classList.remove("active");
  knopf.setAttribute("aria-label", "Vorlesen");
}

function praxisStimmen(sprache) {
  try {
    return sprache.getVoices() || [];
  } catch {
    return [];
  }
}

function speakCard(id, knopf) {
  const sprache = window.speechSynthesis;
  if (!sprache || typeof window.SpeechSynthesisUtterance !== "function") {
    window.alert("Vorlesen geht auf diesem Gerät nicht.");
    return;
  }

  const warAktiv = aktuellesVorlesen?.knopf === knopf;
  vorlesenBeenden();
  sprache.cancel();
  if (warAktiv) return;

  const stimmen = praxisStimmen(sprache);
  // Wie in app.js: lokale deutsche Standardstimme, dann de-DE, dann anderes Deutsch.
  const lokal = stimmen.filter(stimme => stimme.localService === true && /^de([-_]|$)/i.test(stimme.lang || ""));
  const stimme = lokal.find(stimme => stimme.default) || lokal.find(stimme => /^de[-_]DE$/i.test(stimme.lang)) || lokal[0];
  if (!stimme) {
    window.alert(stimmen.length
      ? "Vorlesen braucht eine deutsche Stimme auf diesem Gerät. Du kannst sie in den Geräte-Einstellungen hinzufügen."
      : "Vorlesen ist gerade nicht verfügbar. Tippe später noch einmal auf Vorlesen.");
    return;
  }

  const abschnitt = document.getElementById(id);
  const titel = abschnitt.querySelector("h2").textContent;
  const warum = abschnitt.querySelector(".warum").textContent;
  let text = titel + ". " + warum + ". ";
  abschnitt.querySelectorAll("ol.steps .txt").forEach((schritt, index) => {
    text += "Schritt " + (index + 1) + ". " + schritt.textContent + " ";
  });
  const tipp = abschnitt.querySelector(".note-tip");
  if (tipp) text += tipp.textContent;

  const ausgabe = new window.SpeechSynthesisUtterance(text);
  ausgabe.lang = "de-DE";
  ausgabe.rate = 0.92;
  ausgabe.voice = stimme;
  // Verspätete Ereignisse einer abgebrochenen Ausgabe dürfen den neuen Knopf nicht zurücksetzen.
  const fertig = () => {
    if (aktuellesVorlesen?.ausgabe === ausgabe) vorlesenBeenden();
  };
  ausgabe.onend = fertig;
  ausgabe.onerror = fertig;
  aktuellesVorlesen = { knopf, ausgabe };
  knopf.classList.add("active");
  knopf.setAttribute("aria-label", "Vorlesen stoppen");
  sprache.speak(ausgabe);
}

if (window.speechSynthesis) praxisStimmen(window.speechSynthesis);
