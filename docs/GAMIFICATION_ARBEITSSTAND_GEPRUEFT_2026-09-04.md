# Gamification für „Alex und Tilda" – Arbeitsstand, am Bestand geprüft

**Stand:** 04.09.2026
**Status:** Konzeptentwurf, überarbeitet nach Prüfung des laufenden Codes
**Ersetzt:** die ungeprüfte Fassung vom selben Tag
**Zweck:** Arbeitsgrundlage im Repository. Hält fest, was tatsächlich schon gebaut ist, was das Konzept davon noch braucht, und was der nächste Schritt ist.

> **Warum diese zweite Fassung?** Die erste Fassung wurde neben der Plattform geschrieben, nicht aus ihr. Sie schlug ein simuliertes Handy, Fälle als Daten und druckbare Karten als Neuentwurf vor. Alle drei sind seit längerem gebaut und in Betrieb. Der Entwurf war damit an derselben Stelle falsch, an der er dem Hauskonzept dieselbe Schwäche vorwarf.

---

## 1. Was bereits gebaut ist

Alle Angaben aus dem laufenden Code, geprüft am 04.09.2026.

### Das Übungs-Handy — existiert

**Datei:** `szenarien-de.js` (798 Zeilen)
**Anzeigeprogramm:** `app.js` ab Zeile 5359 (`renderScenarioChooser`, `startScenario`, `buildScenarioScreen`)
**Einstieg für Lernende:** eigene Kachel „Übungs-Handy" (`app.js` 3056) und ein Chip auf jeder Themen-Seite (`app.js` 3672)

Ein nachgebauter Handy-Bildschirm mit sechs Ansichten: `chat`, `posteingang`, `einstellungen`, `anruf`, `shop`, `video`. Bausteine für Nachrichten, eigene Antworten, Listen, Schalter, Anrufe, Shop-Seiten, Videos, Hinweise. Erfundene Endungen (`.xyz`) machen für die Lernenden sichtbar, dass es Übung ist.

### Die Fälle als reine Daten — existiert

Genau die Trennung, die die erste Fassung forderte: ein Datensatz je Szenario, ein Anzeigeprogramm für alle. Die Fragen im Szenario haben dasselbe Format wie `lesson.practice`, deshalb gelten Vorlesen, Piktogramme und Rückmeldung unverändert weiter (Kopfkommentar `szenarien-de.js`).

**Bestand:** 12 Szenarien, eines je Thema, zusammen 38 Szenen.

| Thema | Szenen | | Thema | Szenen |
|---|---|---|---|---|
| datenschutz | 3 | | hilfe | 3 |
| whatsapp | 4 | | ki | 3 |
| facebook | 3 | | fakes | 3 |
| instagram | 3 | | betrug | 4 |
| youtube | 3 | | einkaufen | 3 |
| snapchat | 3 | | | |
| tiktok | 3 | | | |

### Die Karten — existieren, druckbar

**Funktion:** `renderMemoryCard()` — `app.js` ab Zeile 5778
**Aufbau je Karte:** „Das merke ich mir" (aus `topic.memoryRules`) + „Das kann ich fragen" (aus `topic.helpQuestions`) + Druckknopf
**Übersicht aller 12:** `app.js` ab Zeile 5876
**Dazu:** Urkunde je Thema (`app.js` 5716), Gesamt-Urkunde (`app.js` 3133), Erfolgs-Heft (`app.js` 3090)

**Bestand:** 12 Karten mit zusammen **69 Regeln** und 54 Fragen.

| Thema | Regeln | Fragen | Lektionen |
|---|---|---|---|
| datenschutz | 8 | 5 | 13 |
| whatsapp | 6 | 4 | 12 |
| facebook | 4 | 4 | 10 |
| instagram | 4 | 4 | 10 |
| youtube | 4 | 4 | 10 |
| snapchat | 4 | 4 | 9 |
| tiktok | 5 | 4 | 11 |
| hilfe | 6 | 5 | 10 |
| ki | 6 | 5 | 10 |
| fakes | 7 | 5 | 11 |
| betrug | 8 | 5 | 12 |
| einkaufen | 7 | 5 | 11 |
| **gesamt** | **69** | **54** | **165** |

Zusätzlich stehen **149 `remember`-Sätze** in `topics.js` — je Lektion einer. Das ist der Rohstoff, falls Karten je Prinzip gebaut werden sollen.

---

## 2. Die 12 Module — bestätigt

Gezählt in `topics.js`. Die erste Fassung hatte recht mit der Zahl, aber der Screenshot war abgeschnitten: nach „Online-Betrug und Abzocke" folgt noch ein zwölftes Modul.

| # | id | Titel | Zeile |
|---|---|---|---|
| 1 | datenschutz | Datenschutz | 3 |
| 2 | whatsapp | WhatsApp | 822 |
| 3 | facebook | Facebook | 1492 |
| 4 | instagram | Instagram | 2090 |
| 5 | youtube | YouTube | 2688 |
| 6 | snapchat | Snapchat | 3258 |
| 7 | tiktok | TikTok | 3797 |
| 8 | hilfe | Hilfe bei Problemen | 4385 |
| 9 | ki | KI und Chatbots | 4977 |
| 10 | fakes | Fake News und KI-Fakes | 5630 |
| 11 | betrug | Online-Betrug und Abzocke | 6307 |
| 12 | einkaufen | Online-Einkaufen und Bezahlen | 7063 |

---

## 3. Korrektur: die Gruppierung der Themenseite

Die erste Fassung nahm an, „Wichtig für alle" sei bereits der Kartensatz und „Gefahren und Hilfe" kein eigener Ort. Beides stimmt nicht. Tatsächlich (`app.js` 2769–2771, `TOPIC_GROUPS`):

| Gruppe | Module |
|---|---|
| Wichtig für alle | datenschutz, **hilfe**, ki, einkaufen |
| Apps | whatsapp, facebook, instagram, youtube, snapchat, tiktok |
| Gefahren und Hilfe | fakes, betrug |

Drei Folgen daraus:

1. **„Wichtig für alle" ist kein Kartensatz**, sondern eine Gruppe aus vier abschließbaren Modulen mit zusammen 44 Lektionen.
2. **„Hilfe bei Problemen" ist heute ein vollwertiges Modul** mit 10 Lektionen, eigener Merk-Karte, eigenem Szenario und eigener Urkunde. Es aus dem Bestand herauszunehmen und zu einem Dauerknopf zu machen, wäre ein Eingriff in geschützten Bestand — die erste Fassung hat das als Entscheidung notiert und im selben Papier zugesagt, den Bestand nicht anzutasten. Das ist ein Widerspruch und muss entschieden werden, nicht nebenbei umgesetzt. Ergänzend: einen dauerhaften Hilfe-Knopf **gibt es bereits** (`.support-help-button`, `app.js` 3749; `.task-help-button`, `app.js` 3864), dazu einen festen Hilfe-Punkt in der 5-Punkte-Navigation unten. Der Bedarf, den die erste Fassung beschrieb, ist damit überwiegend gedeckt.
3. Die Zuordnung „Apps = Startbildschirm des Telefons, Gefahren = Inhalt, der hereinkommt" ist als didaktisches Bild brauchbar, entspricht aber nicht der bestehenden Struktur. Wer sie umsetzt, sortiert die Themenseite um.

---

## 4. Cybermobbing

Kein eigenes Modul auf der Plattform. Der Inhalt liegt verteilt in den App-Modulen als Lektionen und Übungen zu Beleidigungen und Ausgrenzung — unter anderem `topics.js` 1693 („Beleidigungen", Facebook), 1917, 2515 („Mehrere Personen schreiben Gemeines unter dein Foto", Instagram), 3156. Für Fachkräfte steht der Umgang damit in `begleitung-de.js` 173–175.

Als geschlossene Einheit existiert Cybermobbing außerdem im Ordner `alex-und-tilda-workshops`: Präsentation, Kahoot-Quiz und Praxis-Seite „Hilfe bei Cybermobbing".

**[PRÜFEN]** Ob die Verteilung Absicht war oder historisch entstanden ist, geht aus den Dateien nicht hervor. Das weiß nur Frank.

---

## 5. Was vom Konzept tatsächlich noch fehlt

Nach Abzug des Bestands bleiben vier Punkte. Sie sind nach Aufwand und Belegbarkeit sortiert, nicht nach Reiz.

### 5.1 Die Karte ist im laufenden Fall nicht abrufbar

Der stärkste Gedanke der ersten Fassung: Wer im Szenario unsicher ist, darf in sein Kartenfach schauen — nicht als Schummeln, sondern als das Verhalten, das im Alltag gebraucht wird. Heute liegt die Merk-Karte hinter der Themen-Seite; wer im Szenario steckt, kommt nicht ohne Umweg hin.

**Aufwand:** klein. Ein Knopf im Szenario-Bildschirm, der `renderMemoryCard()` mit dem aktuellen Thema aufruft und danach zurückspringt.
**Zu klären:** Der Rücksprung muss den Szenario-Stand halten (`scenarioTopicId`, `scenarioIndex`, `scenarioRight`, `scenarioAnswered` — `app.js` 5376–5379). Das ist der eigentliche Bauteil, nicht der Knopf. **[PRÜFEN]** vor der Umsetzung messen, ob der Stand beim Seitenwechsel heute erhalten bleibt.

### 5.2 Karten hängen an Themen, nicht an Prinzipien

Heute: 12 Karten, eine je Thema, 69 Regeln. Vorschlag der ersten Fassung: 12–15 Karten je Prinzip, mehrfach genutzt („Standort prüfen" bei Instagram und Snapchat).

**Aufwand:** groß. 69 Regeln und 149 `remember`-Sätze müssten neu gebündelt und redaktionell in drei Sprachstufen geführt werden.
**Nutzen:** **unbelegt.** Niemand aus der Zielgruppe hat die bestehenden Karten bisher benutzt und rückgemeldet. Der Umbau löst ein Problem, von dem wir nicht wissen, ob es eines ist.
**Empfehlung: zurückstellen** bis nach dem Test unter 6.

### 5.3 Ein Szenario je Thema

38 Szenen für 165 Lektionen. Wer ein Thema abschließt, hat drei bis vier Entscheidungen getroffen. Mehr Fälle sind reine Redaktionsarbeit in `szenarien-de.js` — kein Programmieren, genau wie es die erste Fassung gefordert hat. Das Format steht schon.

### 5.4 Der Rollenwechsel

„Tilda fragt dich um Rat" statt „Was machst du?" — existiert nicht. Kostet keinen neuen Programmcode, nur andere Texte und eine Reihenfolge. Das ist die Linie zu TeBI und der inhaltlich interessanteste offene Punkt.
**[PRÜFEN]** Ob die Szenario-Daten heute eine Reihenfolge über Themen hinweg zulassen, ist noch nicht gemessen.

---

## 6. Nächster Schritt

**Nicht bauen. Zuerst hinsehen.**

Der senkrechte Schnitt, den die erste Fassung als nächsten Schritt vorschlug — Telefonrahmen, zwei Fälle, zwei Karten, drei Sprachstufen, Vorlesen — ist **bereits vorhanden und zwölffach ausgeführt**. Ihn zu bauen hieße, ihn ein zweites Mal zu bauen.

Was stattdessen ansteht:

1. **Das vorhandene Übungs-Handy mit drei bis fünf Personen aus der Zielgruppe durchgehen.** Zwei Szenarien, danach die Merk-Karte zeigen. Beobachten: Finden sie das Übungs-Handy von allein? Verstehen sie, dass es Übung ist? Nutzen sie die Karte, wenn sie unsicher sind — oder raten sie?
2. **Erst danach entscheiden**, ob 5.1 (Karte im Fall), 5.3 (mehr Fälle) oder 5.4 (Rollenwechsel) gebaut wird.
3. **5.2 bleibt liegen**, bis der Test zeigt, dass die themenbezogenen Karten wirklich nicht tragen.

Für Punkt 1 gibt es bereits Material im Repo: `beobachtungsbogen.html` und die Prüfgruppen-Unterlagen.

---

## 7. Was aus dem alten Konzept gilt

Unverändert, weil es nicht an der Umsetzungsform hängt:

- keine Rangliste, kein Vergleich mit anderen
- kein Zeitdruck
- keine Bestrafung für falsche Antworten — Fehler führen zu einem zweiten Versuch, es wird nichts weggenommen
- am Ende ein sichtbarer Gesamtüberblick über das Geschaffte
- wenig Text, große Flächen, Bild plus Text, zwei bis drei Antwortmöglichkeiten, Vorlesefunktion

Das Hauskonzept „Mein sicheres digitales Zuhause" wird in seiner Form nicht umgesetzt. Die Begründung der ersten Fassung trägt: Ein Bild von einer Tür beweist nichts und kann nichts, und die Personalisierung mit Haustypen, Umgebungen und Deko über zwölf Ausbaustufen kostet mehrere hundert Grafiken für eine Belohnung, die außerhalb der Plattform verschwindet.

---

## 8. Randbedingungen aus `CLAUDE.md`

Bindend für jede Umsetzung:

- kein Login, kein Tracking (Fortschritt nur im Sitzungs-Gedächtnis `sessionDoneTopics`, KDG-konform)
- drei Sprachstufen durchgehend, synchron gepflegt: `topics.js` (leicht), `content-de.js` (einfach, standard)
- Vorlesefunktion, Dark Mode, Offline-Fähigkeit, feste 5-Punkte-Navigation
- Piktogramm-System, Atkinson Hyperlegible
- WCAG 2.2 / BITV 2.0
- HTML/CSS/JS als SPA auf GitHub Pages, kein Framework, kein Build-Tool, keine Spiele-Engine
- Bestand wird nicht ohne Auftrag entfernt oder beschädigt — das betrifft ausdrücklich das Hilfe-Modul (siehe 3.2)

---

## 9. Offene Punkte für Frank

1. Hilfe-Modul: bleibt es ein abschließbares Modul? (siehe 3.2)
2. Cybermobbing: ist die Verteilung auf die App-Module Absicht? (siehe 4)
3. Geteilte Geräte in den LadenLokalen — wenn ja, braucht es lokale Profile, und das gehört vor jede weitere Entscheidung. Ein geteiltes Gerät kann auch ein Vorteil sein: ein Fall auf dem Tisch, die Gruppe entscheidet gemeinsam.
4. Kartenformat: die bestehende Merk-Karte druckt heute als ganze Seite. Kleineres Format zum Mitnehmen? Hängt an den Druckwegen.

---

*Alle Code-Angaben in dieser Datei sind am 04.09.2026 im Ordner `lernplattform-live` gezählt oder gelesen worden, nicht aus früheren Berichten übernommen. Zeilennummern verschieben sich bei Änderungen an den Dateien.*
