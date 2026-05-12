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
