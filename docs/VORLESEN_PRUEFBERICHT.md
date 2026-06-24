# Vorlesen – Prüfbericht

## Eingebaut

```text
Button: Vorlesen
Button: Langsam vorlesen
Button: Stopp
Statusmeldung
```

## Didaktische Logik

```text
Vorlesen startet nur nach Klick.
Vorgelesen wird nur der aktuelle Lernbereich.
Navigation, Footer, Logos und technische Hinweise werden nicht vorgelesen.
Bei Seitenwechsel stoppt das Vorlesen automatisch.
```

## Datenschutz

```text
Keine Speicherung.
Keine externe Audio-Datei.
Keine Anmeldung.
Keine Übertragung an einen zusätzlichen Dienst.
```

## Technische Prüfung

```json
{
  "version": "Endversion mit stabiler Vorlesefunktion",
  "speech": {
    "uses_browser_speech_synthesis": true,
    "starts_only_after_click": true,
    "normal_reading": true,
    "slow_reading": true,
    "stop_button": true,
    "stops_on_page_change": true,
    "reads_current_learning_area_only": true,
    "excludes_footer_navigation_buttons": true,
    "no_storage": true,
    "no_external_audio_service": true
  },
  "content": {
    "topics": 8,
    "all_topics_8_lessons": true,
    "all_topics_10_quiz": true
  }
}
```

Hinweis:
Die Stimme kommt vom Gerät oder Browser. Auf iPad, Mac, Windows und Android kann sie unterschiedlich klingen.
