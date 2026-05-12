# Tonfeedback – Prüfbericht

## Umgesetzt

- Optionaler Schalter „Töne an/aus“ im Kopfbereich.
- Standard: Töne aus.
- Keine Speicherung.
- Kein localStorage.
- Keine Cookies.
- Keine externen Audiodateien.
- Töne werden mit der Web Audio API direkt im Browser erzeugt.
- Richtige Übungsantwort: kurzer heller Ton.
- Falsche Übungsantwort: kurzer gedämpfter Ton.
- Richtige Quizantwort: kurzer heller Ton.
- Falsche Quizantwort: kurzer gedämpfter Ton.
- Quiz-Ende: kurzer Erfolgston.
- Text-Rückmeldungen und farbige Boxen bleiben Haupt-Rückmeldung.
- Vorlesefunktion bleibt erhalten.

## Prüfung

```json
{
  "app_js_syntax": true,
  "topics_js_syntax": true,
  "sound_default_off": true,
  "no_localStorage_in_app": true,
  "no_cookies_in_app": true,
  "web_audio_api_used": true,
  "sound_toggle_in_index": true,
  "sound_toggle_listener": true,
  "practice_feedback_sound": true,
  "quiz_feedback_sound": true,
  "quiz_success_sound": true,
  "speech_synthesis_still_present": true
}
```

## Fachliche Entscheidung

Die Töne sind standardmäßig aus, damit niemand durch unerwartete Geräusche erschrickt oder abgelenkt wird.
Die Nutzer:innen können die Töne bewusst einschalten.
