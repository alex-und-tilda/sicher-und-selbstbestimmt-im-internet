# Vorlesen ohne Weiterleitung – Prüfbericht

## Problem

Die Vorlesen-Schaltfläche liegt innerhalb klickbarer Karten.
Wenn man auf „Vorlesen“ klickt, darf die Karte nicht zusätzlich geöffnet werden.

## Korrektur

- Klicks auf Vorlesen werden jetzt früh abgefangen.
- `preventDefault()` verhindert die Standardaktion.
- `stopPropagation()` verhindert das Weiterreichen an die Karte.
- `stopImmediatePropagation()` verhindert zusätzliche Klick-Handler.
- Der Listener läuft im Capture-Modus, also bevor der Karten-Klick ausgelöst wird.

## Ergebnis

Ein Klick auf „🔊 Vorlesen“ liest nur den Text vor.
Er öffnet keine neue Seite und startet keinen Lernweg.

## Prüfung

```json
{
  "app_js_syntax": true,
  "topics_js_syntax": true,
  "capture_listener_active": true,
  "reads_start_card_titles": true,
  "reads_learning_path_cards": true,
  "no_localStorage": true,
  "no_cookies": true
}
```
