# Profi-Logik-Audit

## Befund

Die vorherige Version war noch nicht sauber genug.

Probleme:

```text
Merksatz wurde noch doppelt wahrgenommen.
Zusammenfassungsseiten hatten teilweise zusätzliche Merksatz-Logik.
Rückmeldeseiten waren nicht zuverlässig in der App-Logik verankert.
Feedback war teilweise zu allgemein.
```

## Korrektur

```text
Startseiten: keine Merksätze
Zusammenfassungsseiten: keine zusätzliche Merksatz-Box
Merksatz-Inhalte: fachlich passend und nicht doppelt
Übungen: eigene Rückmeldeseite
Quiz: eigene Rückmeldeseite
Richtige Antwort: Erklärung + Weiter
Falsche Antwort: wertschätzende Erklärung + Nochmal versuchen
Unsicher-Button bleibt getrennt von der Antwort
```

## Statische Prüfung

```json
{
  "app_js_syntax": true,
  "topics_js_syntax": true,
  "topics": 8,
  "all_first_lessons_no_remember": true,
  "summary_lessons_no_remember": true,
  "practice_feedback_page_exists": true,
  "quiz_feedback_page_exists": true,
  "practice_old_inline_feedback_removed": true,
  "answer_pruefen_removed": true,
  "all_practices_have_feedback": true,
  "all_quiz_two_answers": true,
  "no_localStorage": true,
  "no_speech": true
}
```
