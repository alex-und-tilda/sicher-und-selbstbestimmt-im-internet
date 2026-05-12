# Endversion – Prüfbericht

Diese Version ist als vollständige Lernseite aufgebaut.

## Pädagogische Logik

```text
Startseite = Orientierung
Lernseite = Situation aus dem Alltag
Übung = zwei klare Antwortmöglichkeiten
Richtige Antwort = Erklärung + Merksatz + Weiter
Falsche Antwort = wertschätzende Erklärung + Nochmal versuchen
Unsicher-Button = Hilfe, unabhängig von der Antwort
Zusammenfassung = wichtigste Regeln
Merk-Karte = Wiederholung
Quiz = Üben und Prüfen
```

## Sprachlogik

```text
Einfache Sprache
kurze Sätze
keine Ironie
keine Scherzantworten
keine Bloßstellung
klare Handlung
```

## Technische und inhaltliche Prüfung

```json
{
  "version": "Endversion fertig",
  "technical_checks": {
    "no_local_storage": true,
    "no_speech_synthesis": true,
    "practice_feedback_page": true,
    "quiz_feedback_page": true,
    "bottom_nav_hidden_on_practice": true,
    "no_answer_check_button": true,
    "no_old_select_quiz_answer": true
  },
  "content_checks": {
    "topics": 8,
    "all_topics_8_lessons": true,
    "all_topics_10_quiz": true,
    "start_pages_without_remember": true,
    "summary_pages_without_remember": true,
    "all_practices_feedback": true,
    "all_practice_remember_moved": true
  }
}
```

Hinweis:
Für die offizielle Kennzeichnung als Leichte Sprache braucht es zusätzlich eine Prüfung durch Menschen aus der Zielgruppe.
