# Prüfbericht – Unsicher-Button getrennt

## Didaktische Entscheidung

Antwortmöglichkeiten sollen keine allgemeine Unterstützungslogik enthalten.

Falsch wäre:

```text
A: Ich trage die Adresse sofort ein.
B: Ich stoppe und frage nach.
```

Besser:

```text
A: Ich trage die Adresse ein.
B: Ich trage die Adresse nicht ein.

Zusätzlich:
Button „Ich bin unsicher“
```

## Neue Logik

```text
Antwortmöglichkeiten = Entscheidung zur Aufgabe
Unsicher-Button = Hilfe beim Lernen
```

## Inhalt des Hilfe-Buttons

```text
Lies die Frage noch einmal langsam.
Schau dir beide Antworten an.
Überlege: Welche Antwort schützt mich besser?
Du kannst eine Pause machen.
Du kannst eine Person fragen, der du vertraust.
Du kannst sagen: Bitte erkläre mir das einfacher.
```

## Prüfung

```json
{
  "topics": 8,
  "answer_replacements_applied": 22,
  "has_task_help_function": true,
  "has_task_help_button": true,
  "practice_help_inserted": true,
  "quiz_help_inserted": true
}
```
