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


## Bedienung des Quiz

Diese Version enthält eine klarere Quiz-Bedienung.

In der Themenübersicht gibt es jetzt pro Thema zwei Buttons:

```text
Thema starten
Quiz direkt starten
```

Das Quiz ist also nicht mehr nur über die letzte Lernseite erreichbar.


## Sprachliche Anpassung: Unterstützung

Der Begriff „Fachkraft“ wurde in den Lerninhalten weitgehend ersetzt.

Die Lernplattform nutzt jetzt bewusst alltagsnähere Formulierungen:

```text
eine Person, der du vertraust
eine Unterstützerin oder einen Unterstützer
eine Digital-Begleiterin oder einen Digital-Begleiter
```

Das passt besser zu einem Selbstlernangebot und wirkt weniger institutionell.


## Erweiterung: Orientierung, Auswertung, Urkunde, Audio und Rückmeldung

Diese Version enthält zusätzliche Qualitätsfunktionen:

- Modul-Fortschritt pro Lernseite
- kleine Modul-Leiste
- Quiz-Auswertung nach Lernbereichen
- optisch verbesserte Urkunde
- Name und Unterschrift handschriftlich
- Zielgruppen-Testbogen / Rückmeldebogen
- Vorlesen-Button über Browser-Sprachausgabe
- QR-Poster-Hinweis auf der Startseite


## Selbstlernangebot Plus

Diese Version ergänzt fünf Funktionen:

1. Lernstand speichern
   - letzter Stand wird lokal im Browser gespeichert
   - es wird kein Name gespeichert
   - die Speicherung bleibt auf dem jeweiligen Gerät

2. Kurzmodus und ausführlicher Modus
   - Kurz lernen: wichtigste Seiten
   - Ausführlich lernen: alle Lernseiten

3. Themenspezifische Hilfe-Fragen
   - pro Thema werden passende Fragen angezeigt
   - Formulierung: eine Person fragen, der du vertraust

4. Klarere Startseite
   - Kurz lernen
   - Ausführlich lernen
   - Quiz starten
   - Merk-Karte

5. Druckbare Merk-Karte pro Thema
   - drei wichtigste Regeln
   - passende Hilfe-Fragen
   - Druckfunktion


## Korrektur Start-Hinweis

Der Start-Hinweis wurde präziser formuliert.

Vorher:
```text
Du kommst vielleicht von einem Lernposter.
Du kannst ein Thema auswählen.
Du kannst später wiederkommen.
```

Jetzt:
```text
Willkommen beim Selbstlernangebot.
Wähle ein Thema aus.
Du kannst in deinem Tempo lernen.
Wenn du unsicher bist: Frage eine Person, der du vertraust.
```


## Barrierearme Farblogik

Die Farbgebung wurde auf eine ruhigere Lernlogik angepasst.

Farbbedeutung:

```text
Blau = Orientierung
Türkis = Lernen / Weiter
Gelb = Hinweis / Merken / Unterstützung
Grün = Erfolg / bestanden / Urkunde
Rot = Gefahr / Stopp / Betrug
Grau = neutral
```

Farbpalette:

```text
Hintergrund:        #F7F4EF
Karten:             #FFFFFF
Text:               #1F1F1F
Dunkelblau:         #00285A
Türkis:             #3DB8B3
Hell-Türkis:        #DDF3F2
Hinweis-Gelb:       #FFF3CD
Erfolg-Grün:        #2E7D32
Warn-Rot:           #B5152B
Linien-Grau:        #D8D8D8
```

Rot wird nur für echte Warnungen genutzt.
Normales Lernen bleibt ruhig und freundlich.


## Praxisfinale Erweiterungen

Diese Version ergänzt:

1. Direktlinks für QR-Codes pro Thema

Beispiele:
```text
index.html#whatsapp
index.html#whatsapp:kurz
index.html#whatsapp:quiz
index.html#whatsapp:merk
```

2. Fachlich festgelegter Kurzmodus

Der Kurzmodus nutzt gezielt ausgewählte Kernseiten pro Thema.

3. Verbesserte Weiterlernen-Anzeige

Wenn ein Lernstand vorhanden ist, wird angezeigt:
```text
Du hast zuletzt gelernt:
WhatsApp · Kurz lernen · Seite 4 von 12
Weiterlernen
Von vorne starten
```

4. Druckseiten optimiert

Optimiert wurden:
```text
Urkunde
Merk-Karte
Zielgruppen-Testbogen
```

5. Zielgruppen-Testbogen als eigene Druckseite

Der Testbogen ist getrennt in:
```text
Fragen für Lernende
Beobachtung für Unterstützerinnen und Unterstützer
```
