# Tonschalter-Farben – Prüfbericht

## Änderung

Der Schalter für Geräusche hat jetzt eine klare Farblogik:

```text
Rot = Geräusche aus
Grün = Geräusche an
```

## Sichtbarer Text

```text
Geräusche aus
Geräusche an
```

## Barrierefreiheit

Zusätzlich wird `aria-pressed` gesetzt:

```text
false = aus
true = an
```

## Prüfung

```json
{
  "app_js_syntax": true,
  "topics_js_syntax": true,
  "sound_toggle_classes": true,
  "sound_on_label": true,
  "sound_off_label": true,
  "red_off_css": true,
  "green_on_css": true,
  "no_localStorage": true,
  "no_cookies": true,
  "no_fetch": true
}
```
