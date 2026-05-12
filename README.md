# Sicher und selbstbestimmt im Internet

**Version:** 1.0 Pilot

Barrierearmes Selbstlernangebot zu Datenschutz und sicheren digitalen Anwendungen.

## Themen

1. Datenschutz
2. WhatsApp
3. Facebook
4. Instagram
5. YouTube
6. Snapchat
7. TikTok
8. Hilfe bei Problemen

## Klare Trennung der Hilfen

```text
Hilfe-Button:
Hilfe bei der Bedienung der Lernplattform.

Thema „Hilfe bei Problemen“:
Hilfe bei echten Problemen im Internet.
```

Der Hilfe-Button ist keine Notruf-Funktion.

## Bedienlogik

```text
1. Thema wählen
2. Aktion wählen
3. Lernen, Üben, Quiz machen oder Merk-Karte lesen
```

## Barrierearme Funktionen

```text
sehr langsames Vorlesen
Vorlesen von Fragen und Antworten
große Symbole
große Buttons
Hilfe-Button
Kurzmodus
Merk-Karten
Urkunde nach bestandenem Quiz
```

## Datenschutz

```text
keine Anmeldung
keine Namensabfrage
keine personenbezogene Online-Speicherung
Lernstand nur lokal im Browser
```

## QR-Direktlinks für Poster

Die QR-Direktlinks sind nicht sichtbar auf der Lernseite.

Beispiele:

```text
index.html#datenschutz
index.html#datenschutz:kurz
index.html#datenschutz:quiz
index.html#datenschutz:merk

index.html#whatsapp
index.html#whatsapp:kurz
index.html#whatsapp:quiz
index.html#whatsapp:merk
```

## Fachlicher Hinweis

Ein bestandenes Quiz bedeutet nicht:

```text
Die Person ist jetzt vollständig sicher im Internet.
```

Es bedeutet:

```text
Die Person hat wichtige Regeln geübt.
Die Person hat sichere Entscheidungen ausprobiert.
Die Person weiß: Bei Unsicherheit darf sie Unterstützung holen.
```

## Hinweis zur Leichten Sprache

Die Texte sind einfach formuliert.

Für ein offizielles Zeichen für Leichte Sprache ist eine Prüfung durch Menschen aus der Zielgruppe erforderlich.


## Grafik wiederhergestellt

Die vollständig neu aufgebaute CSS-Version wurde verworfen.

Diese Version nutzt wieder die letzte stabile Gestaltung.

Beibehalten:

```text
inhaltliche Vollprüfung
keine sichtbare 110-Logik
keine alte Notfall-Logik auf Lernseiten
Urkunde als verständlicher Titel
Hilfe-Button als Lernplattform-Orientierung
QR-Links nicht sichtbar in der Lernoberfläche
```

Hinweis:

Die CSS-Datei enthält wieder mehr Überschreibungen, ist aber visuell stabiler.


## Startseiten-Layout-Fix

Die Startseite wurde gezielt korrigiert.

Behoben:

```text
Illustrationen/Bilder wurden viel zu groß angezeigt.
Themenraster wurde nicht sauber begrenzt.
Karten wirkten nicht als Karten.
Abstände auf der Startseite waren unruhig.
Hilfe-Button wurde kompakter gesetzt.
```

Hinweis:

Die CSS-Datei wurde nicht komplett ersetzt.
Es wurde nur ein gezielter Layout-Fix ergänzt.


## Datenschutz-Fix: keine Lernstand-Speicherung

Die lokale Lernstand-Speicherung wurde entfernt.

Grund:

```text
Viele Personen können gemeinsam ein iPad nutzen.
Dann soll keine Person den Lernstand einer anderen Person sehen.
```

Geändert:

```text
kein localStorage für Lernstand
kein automatisches Weiterlernen
keine Weiterlernen-Box
keine Speicherung der Vorlese-Geschwindigkeit
```

Hinweis:

Die Plattform speichert weiterhin keinen Namen und fragt keine personenbezogenen Daten ab.


## Sicherer Footer-/Testbogen-Fix

Diese Version verändert keine Renderfunktionen.

Geändert:

```text
oberer Marken-/Datenschutz-Hinweis entfernt
Hinweis nur noch klein unten per CSS-Footer
Testbogen-Button aus normaler Auswahl ausgeblendet
Lernstand-Speicherung bleibt entfernt
```

Wichtig:

Diese Version behebt den Fehler, bei dem Lernseiten leer angezeigt wurden.


## Saubere Entscheidung: Footer und Rückmeldung

Diese Version setzt vier Punkte um:

```text
1. Der obere Marken-/Datenschutz-Hinweis wurde aus der Startseitenlogik entfernt.
2. Der Hinweis steht als echter HTML-Footer unten, nicht mehr als body::after.
3. Testbogen/Rückmeldung ist nicht Teil der Lernenden-Oberfläche.
4. CSS wurde nur gezielt korrigiert, nicht komplett neu gebaut.
```

Entscheidung zur Rückmeldung:

```text
Kein sichtbarer Rückmeldebogen in der Lernplattform.
Kein automatischer Versand.
Keine Speicherung.
Rückmeldungen werden im Pilot separat organisiert.
```


## Startseiten-Überschrift

Die Überschrift lautet jetzt:

```text
Sicher und selbstbestimmt im Internet
```


## Stabile Neuaufbau-Version

In dieser Version wurde `app.js` neu und bewusst einfacher aufgebaut.

Enthalten:

```text
Startseite
8 Themen
Kurz lernen
Ausführlich lernen
Quiz
Merk-Karte
Hilfe
echter Footer
keine Lernstand-Speicherung
kein localStorage
kein Testbogen
keine neue Vorlese-Funktion
```

Grund:

Der alte Code war durch viele nachträgliche Patches beschädigt.


## Änderung am Balken auf der Startseite

Der rechte Text im Fortschrittsbereich wurde geändert.

Vorher:

```text
Start
```

Jetzt:

```text
Wähle ein Thema
```

Grund:

```text
Auf der Startseite wurde noch nicht gelernt.
Die Person soll zuerst ein Thema auswählen.
```


## Fortschrittsbalken

Der Fortschrittsbalken wird auf der Startseite nicht mehr angezeigt.

Er erscheint erst, wenn ein Bereich geöffnet wird:

```text
Thema
Kurz lernen
Ausführlich lernen
Quiz
Merk-Karte
Hilfe
```

Grund:

```text
Auf der Startseite wurde noch kein Lernmodul begonnen.
Der Balken ist dort missverständlich.
```


## Startseite ohne Fortschrittsbalken und Navigation

Auf der Startseite werden jetzt ausgeblendet:

```text
Fortschrittsbalken
Zurück / Weiter
```

Sie erscheinen erst nach dem Öffnen eines Themas oder Lernmoduls.


## Hover-/Fokus-Effekt der Themen-Kacheln

Die Themen-Kacheln haben jetzt eine stärkere visuelle Rückmeldung.

Umsetzung:

```text
ruhige Grundfläche
deutlicher Rand
deutlicher Schatten
leichter Farbhintergrund
Farbe passend zum Thema / zur App
Tastatur-Fokus genauso sichtbar wie Maus-Hover
```

Pädagogische Entscheidung:

```text
Die Kacheln werden nicht komplett bunt eingefärbt.
Die App-Farben werden nur als Akzent genutzt.
So bleibt die Seite ruhiger und besser lesbar.
```


## Korrektur Hover-Farben

Die Hover-Farben werden jetzt direkt pro Kachel gesetzt.

Grund:

```text
Vorher fiel der Effekt bei mehreren Kacheln auf Türkis zurück.
Jetzt bekommt jede Themen-Kachel eigene CSS-Variablen.
```


## Begriffe der Lernwege angepasst

Die vier Auswahl-Kacheln wurden didaktisch vereinfacht.

Vorher:

```text
Kurz lernen
Ausführlich lernen
Quiz starten
Merk-Karte
```

Jetzt:

```text
Kurz lernen
Schritt für Schritt lernen
Quiz machen
Merk-Karte ansehen
```

Erklärungssätze:

```text
Ich lese nur das Wichtigste.
Ich bekomme mehr Beispiele.
Ich prüfe mein Wissen.
Ich sehe die wichtigsten Regeln.
```

Grund:

```text
Die Begriffe sind handlungsnäher.
Sie sind leichter verständlich.
Sie erklären klarer, was nach dem Klick passiert.
```


## Lernwege-Kacheln mit Symbolen

Die vier Lernwege im Themenmodul wurden überarbeitet.

Jetzt haben sie:

```text
ein Symbol
einen kurzen Titel
einen kurzen Erklärungssatz
größere Klickflächen
weniger ungünstige Wortumbrüche
```

Sichtbare Lernwege:

```text
Kurz lernen
Nur das Wichtigste.

Mehr lernen
Mit Beispielen.

Quiz machen
Fragen beantworten.

Merk-Karte
Regeln ansehen.
```

Pädagogische Logik:

```text
Die Kacheln zeigen vier einfache Lernwege.
Sie sind nicht als technische Buttons gestaltet,
sondern als verständliche Auswahlmöglichkeiten.
```


## Unterstützungs-Hilfe als Button

Die Unterstützungsbox wurde zu einem Button umgebaut.

Der Button heißt:

```text
Du brauchst Unterstützung?
Hier steht, wen du fragen kannst.
```

Beim Anklicken öffnet sich eine kurze Hilfe.

Inhalt:

```text
Wenn du die Seite nicht bedienen kannst
Wenn du eine Frage nicht verstehst
Wen du fragen kannst
```

Pädagogische Logik:

```text
Die Hilfe ist nicht als fünfter Lernweg gestaltet.
Sie bleibt unter den Lernwegen.
Sie gibt konkrete Handlungsschritte.
Sie verwendet alltagsnahe Begriffe.
```


## Pilot-Bereinigung

Diese Version bereinigt die Orientierung.

Geändert:

```text
Fortschrittsbalken nur im echten Lernmodus und Quiz.
Keine untere Zurück-/Weiter-Navigation auf der Startseite.
Keine untere Zurück-/Weiter-Navigation in der Themenauswahl.
Unterstützungs-Hilfe mit Anzeigen/Ausblenden-Logik.
Startseite mit ruhigerem Einführungstext.
```

Nicht geändert:

```text
keine Vorlese-Funktion
keine Lernstand-Speicherung
kein Testbogen
kein E-Mail-Versand
```


## Codeaudit-Bereinigung

Diese Version wurde direkt am Code geprüft.

Korrigiert:

```text
Startseiten-Text bereinigt
fehlerhafter Satz „Du kannst eine Merk-Karte.“ entfernt
Themenauswahl ohne Fortschrittslogik
Themenauswahl ohne untere Zurück-/Weiter-Navigation
Lernweg-Kacheln mit stabilen Icons und kurzen Texten
Unterstützungsbutton mit Anzeigen/Ausblenden-Logik
```

Nicht eingebaut:

```text
keine Vorlesefunktion
keine Lernstand-Speicherung
kein Testbogen
kein E-Mail-Versand
```


## Korrektur: doppelte Lernweg-Überschrift

Der Text

```text
Wie möchtest du lernen?
```

wurde in der Themenauswahl doppelt angezeigt.

Korrektur:

```text
Die Überschrift wird nur noch einmal direkt über den vier Lernweg-Kacheln angezeigt.
```


## Korrektur Merksatz-Layout

Merksätze wurden teilweise wortweise untereinander angezeigt.

Das wurde korrigiert:

```text
Merksatz-Box volle Breite
normaler Zeilenumbruch
keine Wort-für-Wort-Darstellung
```


## Inhaltsaudit – didaktische Überarbeitung

Alle 8 Themen wurden inhaltlich überarbeitet.

Geprüft und verbessert:

```text
Modulstarts
Lernseiten
Beispiele
Merksätze
Übungen
Quizfragen
Merk-Karten
Hilfefragen
```

Ziel:

```text
alltagsnäher
verständlicher
weniger unlogische Beispiele
bessere Handlungssicherheit
passender für Menschen mit Lern- und Verständnisschwierigkeiten
```


## Merksatz-Didaktik-Fix

Korrigiert:

```text
Merksatz-Boxen auf Startseiten entfernt.
„Merksatz“ wird nicht mehr doppelt angezeigt.
Merksätze bleiben dort, wo sie didaktisch sinnvoll sind:
nach Inhaltsseiten, bei Regeln und in Merk-Karten.
```

Grund:

```text
Eine Modul-Startseite soll Orientierung geben.
Ein Merksatz gehört erst nach einem Lerninhalt oder ans Ende eines Abschnitts.
```


## Lernlogik-Fix

Viele Lernseiten wurden didaktisch neu aufgebaut.

Neue Logik:

```text
Alltagssituation
Problem verstehen
sichere Entscheidung
Merksatz
kleine Übung
```

Ziel:

```text
mehr Lerneffekt
mehr Alltagstransfer
weniger reine Regelsammlung
bessere Entscheidungsübung
```


## Unsicher-Button getrennt von Antworten

Die Hilfe-Logik wurde von den Antwortmöglichkeiten getrennt.

Neue Logik:

```text
Antwortmöglichkeiten beantworten die Aufgabe.
Der Button „Ich bin unsicher“ hilft, wenn man nicht weiterkommt.
```

Der Hilfe-Button erklärt:

```text
Frage noch einmal langsam lesen.
Antworten vergleichen.
Überlegen, welche Antwort besser schützt.
Pause machen.
Eine Person fragen, der man vertraut.
Sagen: Bitte erkläre mir das einfacher.
```


## Einfache Sprache

Die Inhalte wurden konsequent in Einfacher Sprache überarbeitet.

Umgesetzt:

```text
kurze Sätze
keine Ironie
keine lustigen Scherzantworten
zwei klare Antwortmöglichkeiten
einfachere Wörter
konkrete Alltagssituationen
Hilfe über den Button „Ich bin unsicher“
```

Hinweis:

```text
Für offizielle Leichte Sprache ist zusätzlich eine Prüfung durch Menschen aus der Zielgruppe nötig.
```
