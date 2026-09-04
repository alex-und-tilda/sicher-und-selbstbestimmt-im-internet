# Übungs-Handy: die Falle zeigen und schwerer werden

**Stand:** 04.09.2026
**Status:** Ausgearbeiteter Vorschlag. **Nichts umgesetzt.**
**Betrifft:** `szenarien-de.js` (Inhalte) und den Szenario-Teil von `app.js` (ab Zeile 5359)
**Ziel:** Motivation weiterzumachen — für Erwachsene, ohne Sterne, Punkte oder Maskottchen

---

## 1. Wo das Problem liegt

So läuft der Betrugs-Fall heute (`szenarien-de.js`, `SCENARIOS.betrug`):

> Vier Nachrichten im Posteingang. Paket-SMS mit Zoll-Gebühr. Terminerinnerung vom Arzt. Bank-Mail „Konto wird gesperrt". Lotto-Gewinn. Bei jeder die Frage: „Trick oder echt?" Danach: „Du hast alle vier geprüft."

Zwei Dinge fehlen, damit ein Erwachsener weitermachen will.

**Es passiert nichts.** Wer „Trick" tippt, bekommt ein Häkchen und einen Merksatz. Er erfährt nie, was hinter der Nachricht steckt. Genau das will ein Erwachsener aber wissen.

**Es wird nicht schwerer.** Alle vier Nachrichten sind leicht zu erkennen: Endung `.xyz`, Ausrufezeichen, ein Gewinn ohne Grund. Wer die durchhat, ist fertig. Es gibt keinen Grund für eine zweite Runde.

---

## 2. Was sich ändert

### 2.1 Die Falle zeigen

Nach der Antwort kommt ein **Zwischenbild**, bevor die Auflösung erscheint. Es zeigt, was die Nachricht will.

Beispiel Paket-SMS:

> **Bildschirm:** Eine Seite geht auf. Oben steht „Paket-Service". Darunter ein Feld: „Ihre Karten-Nummer". Darunter ein Knopf: „Jetzt bezahlen".
>
> **Text darunter:** Das passiert, wenn du auf den Link tippst. Die Seite will deine Karten-Nummer. Das Paket gibt es nicht.

Erst danach die Rückmeldung „Richtig" oder „Noch nicht sicher".

**Bei richtiger Antwort:** „Du hast die Falle gesehen. So sieht sie von innen aus."
**Bei falscher Antwort:** „So sieht die Falle aus. Jetzt kennst du sie." — **nicht** „Du wärst reingefallen". Kein Erschrecken, keine Schuld (§3 CLAUDE.md, emotionale Sicherheit nach Došen).

Die Falle wird **immer** gezeigt, egal ob richtig oder falsch geantwortet wurde. Sie ist kein Strafbild, sondern der Inhalt.

### 2.2 Schwerer werden

Drei Stufen statt einer Runde.

**Stufe 1 — offensichtlich.** Das, was heute schon da ist. Fremde Endung, Ausrufezeichen, Gewinn ohne Grund.

**Stufe 2 — ordentlich gemacht.** Keine Rechtschreibfehler. Kein Ausrufezeichen. Ein Absender, den man kennt. Der Haken steckt im Detail — die Adresse ist fast richtig, oder die Nachricht passt verdächtig gut zur Lage („Ihre Bestellung"), obwohl nichts bestellt wurde.

**Stufe 3 — nicht mehr zu erkennen.** Hier kommt die wichtigste Lektion: Manchmal **sieht** man es nicht. Eine echte Bank-Nachricht, die nach Trick aussieht. Und ein Trick, der perfekt aussieht.

Die Auflösung auf Stufe 3 lautet deshalb nicht „Daran erkennst du es", sondern:

> Diese Nachricht kann man nicht sicher erkennen. Auch geübte Menschen nicht.
> Deshalb gilt: Tippe nicht auf den Link. Öffne die App selbst. Oder ruf die Nummer an, die du schon hast.

**Das ist der eigentliche Transfer.** Sicherheit kommt nicht vom Erkennen, sondern von der Handlung. Stufe 3 bringt Erwachsenen etwas bei, das Stufe 1 nicht kann.

### 2.3 Die ehrliche Rückmeldung

Statt Lob eine Einordnung. Nach einer schweren Nachricht:

> Die war schwer. Da fallen viele darauf herein.

Das nimmt Erwachsene ernst, statt sie zu loben. Und es macht den Erfolg größer, ohne dass eine Zahl steigt.

### 2.4 Wie man die Stufen erreicht

- Stufe 2 wird frei, wenn Stufe 1 geschafft ist. Stufe 3 nach Stufe 2.
- Eine falsche Antwort **kostet nichts**. Keine Stufe geht verloren, nichts wird weggenommen. Man kann die Runde einfach noch einmal machen.
- **Kein Zeitlimit, keine Uhr, kein Countdown.** WCAG 2.2 / COGA verbietet Zeitdruck für diese Zielgruppe. Ein Spiel ohne Timer ist trotzdem ein Spiel.
- Die erreichte Stufe merkt sich die App **in der Sitzung** (nur Arbeitsspeicher, wie `sessionDoneTopics`). Wer die Lernstand-Speicherung eingeschaltet hat, behält sie darüber hinaus. Ohne Einwilligung wird nichts gespeichert — die Stufe fängt beim nächsten Besuch wieder bei 1 an. Das ist der Preis der KDG-Architektur und darf nicht heimlich umgangen werden.
- Kein Vergleich mit anderen Personen, keine Rangliste. Der Gegner sind die Betrüger, nicht die Mitlernenden.

---

## 3. Ausformuliertes Beispiel: Betrug, Stufe 2 und 3

Die Texte unten sind ein Entwurf in Leichter Sprache (§5: kurze Sätze, kein Konjunktiv, keine Nebensätze). Sie müssen von einer Prüfgruppe getestet werden (§13).

### Stufe 2, Nachricht 1

> **Posteingang**
> SMS · DHL Paket-Info · 08:14
> Ihre Sendung 4471 kommt heute zwischen 12 und 14 Uhr. Adresse ändern: dhl-liefertermin.de/4471

Frage: **Trick oder echt?**

Die Falle:

> Eine Seite geht auf. Sie sieht aus wie die echte Seite.
> Oben steht: Bitte melden Sie sich an.
> Sie will deinen Namen und dein Passwort.

Auflösung:

> Das ist ein Trick.
> Die Adresse ist fast richtig. Aber nur fast.
> Die echte Seite heißt dhl.de. Diese heißt dhl-liefertermin.de.
> **Das ist schwer zu sehen. Viele sehen es nicht.**

Merksatz: **Ich tippe nicht auf Links in Nachrichten. Ich öffne die App selbst.**

### Stufe 3, Nachricht 1 (die echte, die falsch aussieht)

> **Posteingang**
> SMS · Sparkasse · 19:30
> Wir haben eine Zahlung über 340 Euro gestoppt. War das nicht Sie? Rufen Sie uns an: 0251 598 0

Frage: **Trick oder echt?**

Die Auflösung:

> Diese Nachricht ist echt.
> Aber du kannst das nicht sicher sehen.
> Betrüger schreiben genau solche Nachrichten.
>
> **Deshalb machst du es immer gleich:**
> Du tippst nicht auf die Nummer in der Nachricht.
> Du nimmst die Nummer von deiner Bank-Karte.
> Oder du gehst in deine Bank.

Merksatz: **Ich rufe nur Nummern an, die ich schon habe.**

### Stufe 3, Nachricht 2 (der Trick, der perfekt aussieht)

> **Posteingang**
> SMS · Sparkasse · 19:41
> Ihre neue TAN-App ist bereit. Bitte bestätigen Sie einmalig Ihre Anmeldung: sparkasse-tan.de/start

Die Falle:

> Eine Seite geht auf. Sie sieht genau aus wie deine Bank.
> Es gibt sogar das richtige Bild oben links.
> Sie will deine Anmeldung und deine TAN.

Auflösung:

> Das ist ein Trick.
> Die Seite ist sehr gut nachgemacht.
> **Auch geübte Menschen erkennen das nicht.**
>
> Du musst es aber nicht erkennen.
> Du tippst nicht auf den Link.
> Du öffnest deine Bank-App selbst.
> Dann bist du sicher.

Merksatz: **Ich muss den Trick nicht erkennen. Ich öffne die App selbst.**

---

## 4. Was sich in den Daten ändert

Alle neuen Felder sind **freiwillig**. Die zwölf vorhandenen Szenarien laufen unverändert weiter, auch wenn kein einziges Feld ergänzt wird. Das ist Bedingung, nicht Wunsch.

Heutiger Aufbau je Szene:

```
{ inhalt: [...], frage: {...} }
```

Neu, zusätzlich:

```
{
  stufe: 2,                 // 1, 2 oder 3 – fehlt das Feld, gilt 1
  inhalt: [...],
  frage: {...},
  falle: {                  // fehlt das Feld, gibt es kein Zwischenbild
    inhalt: [...],          // dieselben Bausteine wie oben
    text: "Das passiert, wenn du auf den Link tippst.",
    textFalsch: "So sieht die Falle aus. Jetzt kennst du sie."
  },
  schwer: true              // löst den Satz "Die war schwer" aus
}
```

Für das Zwischenbild braucht es **einen neuen Baustein** neben den heutigen (`nachricht`, `eigene`, `liste`, `schalter`, `anruf`, `shop`, `video`, `hinweis`):

```
{ typ: "webseite", titel: "Paket-Service", felder: ["Karten-Nummer"], knopf: "Jetzt bezahlen" }
```

**Wichtig:** Wie bisher keine echten Marken und keine echten Adressen. Erfundene Endungen bleiben erfunden. Der Kopfkommentar von `szenarien-de.js` regelt das bereits — die nachgebauten Fallen dürfen keine Anleitung zum Nachbauen sein und keine echte Firma nachahmen.

---

## 5. Was sich im Programm ändert

Vier Stellen in `app.js`. Alle im Szenario-Block ab Zeile 5359.

1. **`scenarioElementHtml()`** (Zeile 5392) — ein Fall mehr für den Baustein `webseite`.
2. **`answerScenario()`** (Zeile 5622) — zwischen Antwort und Rückmeldung das Fallen-Bild einschieben, wenn `szene.falle` da ist. Heute erscheint die Rückmeldung sofort.
3. **`beginScenario()` / `renderScenarioScene()`** — nur die Szenen der aktuellen Stufe zeigen statt aller.
4. **Stufen-Merker** — eine Zahl je Thema, im Arbeitsspeicher; bei eingeschalteter Lernstand-Speicherung zusätzlich in `progress`.

Der Rest bleibt: Vorlesen, Piktogramme, Rückmeldungs-Format, „Üben beenden", das Ergebnis am Schluss.

**Was danach ausdrücklich nachgeprüft werden muss** (§1 CLAUDE.md, Bestand schützen):

- Vorlesen liest das neue Fallen-Bild mit
- Tastatur-Bedienung und Fokus im neuen Zwischenschritt
- Dark Mode am neuen Baustein
- `Escape` und „Üben beenden" funktionieren auch im Zwischenschritt
- `CACHE_VERSION` in `sw.js` hochgezählt

---

## 6. Das offene Problem: die Sprachstufen

**Die Szenarien haben heute nur eine Sprachfassung.** Anders als die 165 Lektionen, die über `content-de.js` in Leichter Sprache, Einfacher Sprache und Alltagssprache vorliegen, steht in `szenarien-de.js` je Text nur eine Fassung — Leichte Sprache.

Das ist heute schon so und fällt nicht auf, solange niemand neue Fälle schreibt. Sobald wir aber Stufe 2 und 3 bauen, wird es zur Entscheidung, denn:

- Stufe 3 richtet sich an Leute, die schon sicher sind. Für die ist Leichte Sprache oft zu knapp.
- Wer die App auf Alltagssprache gestellt hat, bekommt im Übungs-Handy trotzdem Leichte Sprache. Das ist ein Bruch.

**[PRÜFEN] Drei Möglichkeiten, Entscheidung liegt bei Frank:**

1. So lassen. Das Übungs-Handy bleibt bewusst in Leichter Sprache für alle. Billigste Lösung, aber der Bruch bleibt.
2. Nur die neuen Stufen 2 und 3 zweisprachig anlegen (leicht + einfach). Mittlerer Aufwand.
3. Alle Szenarien auf drei Stufen bringen, wie die Lektionen. Sauber, aber das ist die dreifache Textmenge für 12 Szenarien.

---

## 7. Aufwand, ehrlich

**Für ein Thema als Muster (Betrug):**

- 8 neue Nachrichten schreiben (4 für Stufe 2, 4 für Stufe 3), je mit Fallen-Bild und Auflösung
- 1 neuer Baustein im Programm, 3 kleine Änderungen an vorhandenen Funktionen
- Prüfung von Vorlesen, Tastatur, Dark Mode

**Für alle zwölf Themen:** die achtfache Textmenge. Rund 96 neue Nachrichten. Das ist Wochen an Redaktionsarbeit, nicht an Programmierung — und genau deshalb sollte es **nicht** vor dem Test kommen.

**Nicht schätzbar** ist der Nutzen. Ob Erwachsene tatsächlich weitermachen, weil die Fallen sichtbar werden und die Tricks schwerer werden, ist meine Annahme. Kein Befund. Es gibt kein Tracking, also auch keine Zahl dazu.

---

## 8. Vorschlag

**Ein Thema, drei Stufen, fertig gebaut. Betrug.**

Warum Betrug: Der Fall ist heute schon ein Posteingang mit vier Nachrichten. Die Struktur passt ohne Umbau. Und Betrugsmaschen sind das Thema, für das sich Erwachsene ohnehin interessieren — das ist keine Schulaufgabe, das ist Nachrichteninteresse.

Danach ansehen, ob jemand freiwillig die zweite Runde spielt. Wenn ja, bekommen die anderen elf Themen dasselbe. Wenn nein, haben wir ein Thema investiert statt zwölf.

---

## 9. Was ich nicht empfehle

- **Punkte, Sterne, Abzeichen, Sammelbilder.** CLAUDE.md §4 verbietet Infantilisierendes. Erwachsene mit Lernschwierigkeiten bekommen genug Kinderkram vorgesetzt.
- **Ranglisten oder Vergleich mit anderen.** Steht schon im Gamification-Papier und ist richtig so.
- **Serien und Tagesstreaks** („Du hast 5 Tage hintereinander gelernt"). Erzeugt Druck und bestraft Ausfälle — bei einer Zielgruppe, die aus vielen Gründen mal drei Wochen nicht kann.
- **Töne oder Bilder, die erschrecken,** wenn die Falle gezeigt wird. Ruhig bleiben.

---

*Alle Code- und Zeilenangaben am 04.09.2026 in `lernplattform-live` gelesen. Die Beispieltexte sind Entwürfe und müssen durch eine Prüfgruppe (§13).*
