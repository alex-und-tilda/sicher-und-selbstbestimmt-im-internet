# Optionaler Hover-Ton – Prüfbericht

## Entscheidung

Hover-Geräusche können hilfreich wirken.
Für eine barrierearme Lernplattform dürfen sie aber nicht automatisch laufen.
Sonst kann es schnell unruhig oder reizüberflutend werden.

## Umsetzung

- Hover-/Fokus-Ton wurde eingebaut.
- Der Ton läuft nur, wenn „Töne an“ aktiviert ist.
- Standard bleibt: Töne aus.
- Der Ton ist sehr kurz und leise.
- Der Ton ist gedrosselt, damit er nicht bei jeder kleinen Mausbewegung ständig ausgelöst wird.
- Tastatur-Fokus wird ebenfalls unterstützt.

## Prüfung

```json
{
  "app_js_syntax": true,
  "topics_js_syntax": true,
  "hover_sound_function_exists": true,
  "hover_sound_only_when_enabled": true,
  "hover_sound_case_exists": true,
  "hover_sound_debounced": true,
  "no_localStorage": true,
  "no_cookies": true,
  "no_fetch": true
}
```
