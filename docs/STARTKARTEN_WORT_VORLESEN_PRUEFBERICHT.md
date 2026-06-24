# Startkarten: Wort vorlesen – Prüfbericht

## Ziel

Auf jeder Themenkarte der Startseite gibt es einen kleinen Button.
Der Button liest nur den Namen des Themas vor, zum Beispiel Datenschutz oder WhatsApp.

## Umgesetzt

- kleiner Vorlese-Button auf den Themenkarten.
- liest nur den Themen-Namen.
- öffnet nicht die Lernseite.
- funktioniert mit Klick, Enter und Leertaste.
- nutzt die Browser-Vorlesefunktion.
- keine Speicherung.
- kein externer Dienst.

## Prüfung

```json
{
  "app_js_syntax": true,
  "topics_js_syntax": true,
  "button_inserted_in_topic_card": true,
  "read_short_text_function_exists": true,
  "click_listener_exists": true,
  "keyboard_listener_exists": true,
  "css_exists": true,
  "no_localStorage": true,
  "no_cookies": true
}
```
