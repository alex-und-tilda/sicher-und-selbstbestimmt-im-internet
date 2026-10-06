# Schrift-Dateien

Atkinson Hyperlegible — lokal eingebunden, kein Google-Fonts-Request.

## Vorhandene Dateien

| Dateiname                    | Format | Größe | Verwendung          |
|------------------------------|--------|-------|---------------------|
| `atkinson-regular.woff2`     | WOFF2  | ~17 K | Regular, latin      |
| `atkinson-regular-ext.woff2` | WOFF2  | ~9 K  | Regular, latin-ext  |
| `atkinson-bold.woff2`        | WOFF2  | ~18 K | Bold, latin         |
| `atkinson-bold-ext.woff2`    | WOFF2  | ~9 K  | Bold, latin-ext     |
| `atkinson-regular.ttf`       | TTF    | ~52 K | Regular, Fallback   |
| `atkinson-bold.ttf`          | TTF    | ~53 K | Bold, Fallback      |

WOFF2 wird von allen modernen Browsern verwendet (~97 % der Nutzer).
TTF greift nur bei sehr alten Browsern (Fallback in `src:`).

## Erneuter Download (falls Dateien fehlen)

```bash
cd assets/fonts

# WOFF2 — Regular
curl -L "https://fonts.gstatic.com/s/atkinsonhyperlegible/v12/9Bt23C1KxNDXMspQ1lPyU89-1h6ONRlW45G04pIo.woff2" -o atkinson-regular.woff2
curl -L "https://fonts.gstatic.com/s/atkinsonhyperlegible/v12/9Bt23C1KxNDXMspQ1lPyU89-1h6ONRlW45G07JIoSwQ.woff2" -o atkinson-regular-ext.woff2

# WOFF2 — Bold
curl -L "https://fonts.gstatic.com/s/atkinsonhyperlegible/v12/9Bt73C1KxNDXMspQ1lPyU89-1h6ONRlW45G8Wbc9dCWP.woff2" -o atkinson-bold.woff2
curl -L "https://fonts.gstatic.com/s/atkinsonhyperlegible/v12/9Bt73C1KxNDXMspQ1lPyU89-1h6ONRlW45G8Wbc9eiWPVFw.woff2" -o atkinson-bold-ext.woff2

# TTF — Fallback
curl -L "https://fonts.gstatic.com/s/atkinsonhyperlegible/v12/9Bt23C1KxNDXMspQ1lPyU89-1h6ONRlW45GE5Q.ttf" -o atkinson-regular.ttf
curl -L "https://fonts.gstatic.com/s/atkinsonhyperlegible/v12/9Bt73C1KxNDXMspQ1lPyU89-1h6ONRlW45G8WbcNcw.ttf" -o atkinson-bold.ttf
```

**Lizenz:** Die hier liegenden Dateien stammen aus Google Fonts (siehe Adressen oben) und stehen unter der
SIL Open Font License, Version 1.1 – Copyright 2020 Braille Institute of America, Inc.
Der Lizenztext liegt als [OFL.txt](OFL.txt) in diesem Ordner und wird mit den Schrift-Dateien ausgeliefert
(die Lizenz verlangt das). Quelle des Textes: `google/fonts`, `ofl/atkinsonhyperlegible/OFL.txt`, übernommen am 03.10.2026.
Herkunft der Schrift: [Braille Institute](https://brailleinstitute.org/freefont).
