# Icon-Paket für die Lernplattform

Ordnerstruktur:

assets/icons/

Enthaltene SVG-Piktogramme:

1. start.svg
2. understand.svg
3. home.svg
4. example.svg
5. warning.svg
6. exercise.svg
7. remember.svg
8. stop.svg
9. help.svg
10. lock.svg
11. block.svg
12. report.svg
13. check.svg
14. quiz.svg
15. data.svg
16. link.svg
17. photo.svg
18. message.svg

Nutzung in HTML:

<img src="assets/icons/lock.svg" alt="" class="icon-svg">

Oder als CSS-Maske / inline SVG.

Die SVGs nutzen `currentColor`.
Die Farbe kann also über CSS gesteuert werden.


## Icons / Piktogramme

Diese Version enthält bereits 18 SVG-Piktogramme im Ordner:

```text
assets/icons/
```

Die Lernplattform lädt die Icons automatisch aus `topics.js`.

Beispiel:

```js
"icon": "lock"
```

wird automatisch geladen als:

```text
assets/icons/lock.svg
```

Die wichtigsten Icon-Namen:

```text
start
understand
home
example
warning
exercise
remember
stop
help
lock
block
report
check
quiz
data
link
photo
message
```


## Eingebaute Farbpalette

Diese Version nutzt die gewünschte Farbpalette:

```text
#b5152b  Rot: Warnung, Stopp, Gefahr
#000000  Schwarz: Haupttext
#c6c7c8  Hellgrau: Linien und Rahmen
#3e96be  Blau Mittel: Hauptstruktur, Navigation, Lernanker
#57a3c7  Blau Hell-Mittel: Hover und Zwischenebenen
#aad1e3  Blau Hell: Boxen und Hervorhebungen
#d8eaf2  Blau Sehr Hell: Hintergrund und ruhige Lernflächen
```

Zusätzlich ist ein dezentes Grün für richtige Antworten enthalten:

```text
#2e7d32  Richtig / geschafft
```

Rot wird bewusst sparsam eingesetzt, damit die Lernplattform nicht dauerhaft wie eine Warnseite wirkt.


## Eingebaute Logos

Diese Version enthält zusätzlich die zwei bereitgestellten Bilddateien im Ordner:

```text
assets/brand/
```

Dateien:

```text
assets/brand/logo-tilbeck-alexianer.jpeg
assets/brand/logo-sozialstiftung-nrw.jpeg
```

Die Logos werden im Kopfbereich der Lernplattform angezeigt.

Hinweis:
Die gelieferten Dateien sind JPEG-Dateien mit begrenzter Auflösung. Für eine endgültige öffentliche Version sind PNG- oder SVG-Dateien in besserer Qualität empfehlenswert.
