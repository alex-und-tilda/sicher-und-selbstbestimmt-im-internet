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


## Fix: Icon-Anzeige

Diese Version korrigiert die Icon-Anzeige.

Vorher wurden Icon-Namen wie `lock`, `message` oder `photo` als Text angezeigt.
Jetzt lädt `app.js` die passenden SVG-Dateien aus:

```text
assets/icons/
```

Beispiel:

```js
"icon": "lock"
```

wird angezeigt als:

```text
assets/icons/lock.svg
```


## Visuelle Verbesserungen in dieser Version

Diese Version wurde wie eine kleine Lernplattform gestaltet:

- Startseite als Lernportal
- Themen als große Kacheln
- zweispaltige Darstellung auf größeren Bildschirmen
- größere Schrift
- größere Buttons
- klarere Warn-, Übungs- und Merksatzboxen
- Abschlusskarte vor dem Quiz
- Logos im Footer statt im Header
- ruhigere visuelle Hierarchie


## Inhaltliche Prüfung

Diese Version wurde nachträglich fachlich geprüft und korrigiert.

Korrigiert wurden insbesondere:

- Datenschutz wird nicht mehr wie eine App behandelt.
- „Hilfe bei Problemen“ wird nicht mehr wie eine Plattform behandelt.
- Unpassende Formulierungen wie „Was kann ich mit Datenschutz machen?“ wurden entfernt.
- Die ersten Lernseiten wurden bei Datenschutz und Hilfe fachlich neu aufgebaut.
- Plattform-Themen wurden sprachlich präzisiert.


## Illustrative Lernbilder

Diese Version enthält zusätzlich neutrale Lernbilder pro Thema:

```text
assets/illustrations/datenschutz.svg
assets/illustrations/whatsapp.svg
assets/illustrations/facebook.svg
assets/illustrations/instagram.svg
assets/illustrations/youtube.svg
assets/illustrations/snapchat.svg
assets/illustrations/tiktok.svg
assets/illustrations/hilfe.svg
```

Die Bilder sind bewusst keine echten App-Screenshots.
Sie sind neutrale Smartphone-Mockups.
Das ist langlebiger, rechtlich unkritischer und didaktisch ruhiger.


## Eigenes Quiz und Urkunde

Diese Version nutzt kein Kahoot mehr als Hauptquiz.
Jedes Thema enthält ein eigenes Quiz direkt in der Lernplattform.

Pro Thema gibt es:

- 5 Quizfragen
- direkte Rückmeldung nach jeder Antwort
- Ergebnisanzeige
- druckbare Urkunde

Die Urkunde wird über die Browser-Druckfunktion erstellt:

```text
Urkunde drucken
```

Dabei werden Header, Navigation und Footer ausgeblendet.


## Professionelles Quiz – Version 2

Das Quiz wurde fachlich erweitert:

- 10 Fragen pro Thema
- alltagsnahe Situationsfragen
- 3 Antwortmöglichkeiten pro Frage
- klare Rückmeldung mit Begründung
- Bestehensgrenze: mindestens 60 Prozent
- Urkunde nur bei bestandenem Quiz
- bei nicht bestandenem Quiz: Wiederholen statt Urkunde

Pro Thema sind 10 Fragen enthalten.
Bei 8 Themen sind das insgesamt 80 Quizfragen.
