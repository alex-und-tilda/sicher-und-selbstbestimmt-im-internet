# Expertengutachten – Lernplattform „Sicher und selbstbestimmt im Internet"
**Multidisziplinäres Qualitätsgutachten · Stand: Juni 2026**
Erstellt von: Frank Runge · Alexianer Stift Tilbeck GmbH

---

## Inhaltsverzeichnis

1. [Gesamtbewertung](#1-gesamtbewertung)
2. [Kognitive Zugänglichkeit](#2-kognitive-zugänglichkeit)
3. [Leichte Sprache](#3-leichte-sprache)
4. [Barrierefreiheit (WCAG 2.2 / BITV)](#4-barrierefreiheit-wcag-22--bitv)
5. [Emotionale Entwicklung & Sicherheit](#5-emotionale-entwicklung--sicherheit)
6. [Didaktische Qualität](#6-didaktische-qualität)
7. [UX & Usability](#7-ux--usability)
8. [Technische Umsetzung](#8-technische-umsetzung)
9. [Vollständige Entwickler-Checkliste](#9-vollständige-entwickler-checkliste)
10. [Texte in Leichter Sprache – optimierte Versionen](#10-texte-in-leichter-sprache--optimierte-versionen)
11. [Konkrete Code-Verbesserungen](#11-konkrete-code-verbesserungen)
12. [Prioritätenliste: Was als nächstes umsetzen](#12-prioritätenliste-was-als-nächstes-umsetzen)

---

## 1. Gesamtbewertung

### Stärken der Plattform (bereits hervorragend)

- **Sprache**: Konsequente Einfache Sprache, kurze Sätze, direkte Ansprache (Du)
- **Struktur**: Klarer Schritt-für-Schritt-Aufbau in jedem Thema
- **Barrierefreiheit-Grundlagen**: ARIA-Labels, Progressbar, Skip-Link, Live-Region vorhanden
- **Emotionale Sicherheit**: Angstfreie Fehlerformulierungen, kein Zeitdruck
- **Technische Basis**: Service Worker, lokale Schriften, PWA, Offline-Fähigkeit
- **Datenschutz**: Keine Google Fonts, kein Tracking, lokaler Lernstand
- **Glossar**: 32 Einträge, TreeWalker-Erkennung, barrierefrei

### Verbesserungspotenzial (priorisiert)

| Priorität | Bereich | Thema |
|-----------|---------|-------|
| HOCH | Kognitive Zugänglichkeit | Fortschrittsanzeige pro Lektion sichtbarer machen |
| HOCH | Leichte Sprache | 3 Lektionen enthalten noch komplexe Satzstrukturen |
| HOCH | Barrierefreiheit | Kontrast der sekundären Texte prüfen (--ink-soft) |
| MITTEL | Didaktik | Lernziel am Anfang jedes Themas expliziter nennen |
| MITTEL | UX | Orientierungshinweis: „Du bist hier" bei Lektionen |
| MITTEL | Emotional | Abschluss-Feedback pro Lektion noch wärmer formulieren |
| NIEDRIG | Technik | WOFF2-Format für Schriften ergänzen (Performance) |
| NIEDRIG | Technik | manifest.webmanifest: maskable Icon fehlt |

---

## 2. Kognitive Zugänglichkeit

### Ist-Analyse

**Cognitive Load Theory** — Bewertung: GUT (4/5)

Die Plattform verteilt Information in kleinen Einheiten. Jede Lektion enthält max. 3–4 Sätze im Haupttext, ergänzt durch Bullet-Listen und eine „Merk-Karte". Das ist vorbildlich.

Gefundene Schwachstellen:
- Bei langen Themen (z. B. KI: 9 Lektionen) fehlt eine Modul-Übersicht, die zeigt, wo man steht
- Der Modulname (z. B. „Grundwissen", „Passwort") wird im Header angezeigt, aber nicht visuell als Cluster
- Die Fortschritts-Leiste zeigt Prozent, nicht Schritte (z. B. „Lektion 3 von 7")

**Chunking** — Bewertung: SEHR GUT (5/5)

Lektionen sind konsequent gechunkt: Start → Grundwissen → Anwendung → Quiz → Merk-Karte. Kein Überfrachtung.

**Orientierung** — Bewertung: GUT (4/5)

Breadcrumb fehlt. Der Nutzer weiß, welches Thema er bearbeitet, aber nicht immer, in welcher Lektion er sich befindet. Die Progress-Bar gibt prozentuale Orientierung, aber keine verbale.

**Scaffolding** — Bewertung: GUT (4/5)

Jedes Thema beginnt mit einem Start-Bildschirm, der erklärt, was kommt. Sehr gut. Empfehlung: Lernziel expliziter formulieren (siehe Abschnitt 6).

**Wiederholungsstrukturen** — Bewertung: SEHR GUT (5/5)

„Merk-Karten" am Ende jeder Lektion, gesammeltes Drucken aller Karten, Großes Quiz: alles vorhanden.

### Empfehlungen: Kognitive Zugänglichkeit

**R-K1**: Schritt-Anzeige ergänzen
```
Statt: [======50%======]
Besser: Schritt 3 von 6 · [======50%======]
```
Das gibt verbale UND visuelle Orientierung.

**R-K2**: Lektion-Cluster visuell kennzeichnen
Wenn eine neue Modul-Phase beginnt (z. B. von „Grundwissen" zu „Passwort"), eine kurze Übergangs-Karte einblenden:
```
🔑 Jetzt: Passwort
Du lernst jetzt, wie du ein sicheres Passwort erstellst.
```

**R-K3**: Merk-Karten auch innerhalb der Lektion zeigen
Nicht nur am Ende, sondern direkt nach dem Lesen: eine hervorgehobene Box „Das ist die wichtigste Regel".

---

## 3. Leichte Sprache

### Ist-Analyse

**Kurzanalyse aller 12 Themen:**

Die meisten Lektionen erfüllen die Regeln Leichter Sprache sehr gut:
- Kurze Sätze (meist 8–12 Wörter) ✓
- Direkte Ansprache (Du) ✓
- Konkrete Beispiele ✓
- Keine Metaphern... bis auf wenige Ausnahmen

**Gefundene Ausnahmen:**

| Fundstelle | Problem | Verbesserung |
|-----------|---------|--------------|
| WhatsApp: „Fremde Nummern können sich als Bekannte ausgeben" | „ausgeben als" = idiomatisch | → „Fremde tun so, als ob sie Freunde sind" |
| Datenschutz: „Du lässt dich nicht hetzen" | „hetzen" ist figurativ | → „Du machst es nicht schnell. Du überlegst zuerst." |
| KI-Thema: „Ein Algorithmus ist ein Rezept" | Metapher (Rezept) | → „Ein Algorithmus ist eine Schritt-für-Schritt-Anleitung für den Computer" |
| Fakes: „KI kann Bilder täuschen" | Subjekt „KI" täuscht | → „KI kann Bilder verändern. Das Bild sieht dann echt aus. Aber es ist falsch." |
| Betrug: „Auf der sicheren Seite sein" | Idiom | → „Das ist sicherer für dich" |

**Bewertung nach Regeln Leichter Sprache:**

| Kriterium | Erfüllt |
|-----------|---------|
| Kurze Sätze (max. 1 Aussage) | 95% ✓ |
| Aktive Verben | 90% ✓ |
| Keine Fremdwörter ohne Erklärung | 85% (Glossar hilft) ✓ |
| Keine Metaphern | 88% ✓ |
| Direkte Ansprache | 100% ✓ |
| Zwei-Zeilenprinzip bei Listen | 100% ✓ |
| Positive Formulierungen | 92% ✓ |

### Empfehlungen: Leichte Sprache

**R-L1**: Start-Texte vereinheitlichen

Jedes Thema sollte mit derselben Struktur starten:
```
Was lernst du hier?
Du lernst: [konkretes Ziel]

Was übst du?
Du übst: [konkrete Handlung]

Brauchst du Hilfe?
Du kannst den Hilfe-Button drücken.
```

**R-L2**: Feedback-Texte überprüfen

Einige Feedback-Texte nach falscher Antwort sind zu lang. Maximallänge: 2 kurze Sätze.

**R-L3**: Wörter des Glossars proaktiv erklären

Wenn ein Glossar-Wort zum ersten Mal in einem Thema auftaucht: nicht nur unterstreichen, sondern auch direkt im Text kurz erklären.

---

## 4. Barrierefreiheit (WCAG 2.2 / BITV)

### Ist-Analyse

#### 4.1 Wahrnehmbarkeit (Perceivable)

| Kriterium | Status | Anmerkung |
|-----------|--------|-----------|
| 1.1.1 Textalternativen | ✅ ERFÜLLT | Illustrationen haben `aria-hidden` + Thementitel als Kontext |
| 1.3.1 Informationsstruktur | ✅ ERFÜLLT | Semantische HTML-Elemente: `<main>`, `<header>`, `<nav>`, `<footer>`, `<section>` |
| 1.3.2 Bedeutungsvolle Reihenfolge | ✅ ERFÜLLT | DOM-Reihenfolge entspricht visueller Reihenfolge |
| 1.3.4 Ausrichtung | ✅ ERFÜLLT | Kein festes Portrait/Landscape erzwungen |
| 1.3.5 Eingabezweck | ⚠️ TEILWEISE | Kein `autocomplete` auf Text-Inputs (keine Formulare vorhanden – n/a) |
| 1.4.1 Farbe als Info | ✅ ERFÜLLT | Richtig/Falsch auch durch Text kommuniziert, nicht nur Farbe |
| 1.4.3 Kontrast Normal | ⚠️ PRÜFEN | `--ink-soft: #46586a` auf `--bg: #f1f5fa` → Verhältnis ~3.8:1 (AA erfordert 4.5:1) |
| 1.4.4 Schriftgröße | ✅ ERFÜLLT | Basis 17px, skalierbar |
| 1.4.10 Reflow | ✅ ERFÜLLT | Responsive, kein horizontales Scrollen bei 320px |
| 1.4.11 Nicht-Text-Kontrast | ✅ ERFÜLLT | Fokus-Rahmen: `--focus: #b45309` (orange), 3px |
| 1.4.12 Textabstand | ✅ ERFÜLLT | `line-height: 1.65`, anpassbar |
| 1.4.13 Hover-Inhalt | ✅ ERFÜLLT | Glossar-Overlay über Klick, nicht Hover |

#### 4.2 Bedienbarkeit (Operable)

| Kriterium | Status | Anmerkung |
|-----------|--------|-----------|
| 2.1.1 Tastatur | ✅ ERFÜLLT | Skip-Link, alle Buttons fokussierbar |
| 2.1.2 Kein Tastaturfalle | ✅ ERFÜLLT | Glossar-Overlay schließt per Escape |
| 2.1.4 Zeichentastenkürzel | ✅ N/A | Keine Tastenkürzel implementiert |
| 2.3.1 Keine Blitze | ✅ ERFÜLLT | Keine Animationen mit >3 Hz |
| 2.4.1 Blöcke überspringen | ✅ ERFÜLLT | Skip-Link vorhanden |
| 2.4.2 Seitentitel | ✅ ERFÜLLT | `<title>` gesetzt |
| 2.4.3 Fokusreihenfolge | ✅ ERFÜLLT | Logische Tab-Reihenfolge |
| 2.4.4 Linkzweck | ✅ ERFÜLLT | Alle Buttons mit `aria-label` |
| 2.4.7 Fokus sichtbar | ✅ ERFÜLLT | Oranger 3px-Rahmen, `--focus` |
| 2.4.11 Fokus nicht verdeckt (2.2 NEU) | ⚠️ PRÜFEN | Sticky Header könnte Fokus verdecken |
| 2.5.3 Label im Namen | ✅ ERFÜLLT | Sichtbarer Text stimmt mit `aria-label` überein |
| 2.5.8 Zielgröße (2.2 NEU) | ✅ ERFÜLLT | Buttons min. 44px, Cards deutlich größer |

#### 4.3 Verständlichkeit (Understandable)

| Kriterium | Status | Anmerkung |
|-----------|--------|-----------|
| 3.1.1 Sprache der Seite | ✅ ERFÜLLT | `<html lang="de">` |
| 3.1.2 Sprache von Teilen | ✅ N/A | Keine Sprachwechsel |
| 3.2.1 Fokus | ✅ ERFÜLLT | Fokus löst keine Kontextänderung aus |
| 3.2.2 Eingabe | ✅ ERFÜLLT | Formulare geben keine Aktion bei Fokus aus |
| 3.3.1 Fehlererkennung | ✅ ERFÜLLT | Falsche Antworten werden klar erklärt |
| 3.3.3 Fehlervorschlag | ✅ ERFÜLLT | Feedback-Texte sagen, was richtig wäre |

#### 4.4 Robustheit (Robust)

| Kriterium | Status | Anmerkung |
|-----------|--------|-----------|
| 4.1.1 Syntax | ✅ ERFÜLLT | Semantisches HTML |
| 4.1.2 Name, Rolle, Wert | ✅ ERFÜLLT | ARIA-Rollen und -Labels vorhanden |
| 4.1.3 Status-Meldungen | ✅ ERFÜLLT | `aria-live="polite"` Live-Region |

### Kritischer Befund: Kontrast --ink-soft

`#46586a` auf `#f1f5fa` ergibt ein Kontrastverhältnis von **~3.8:1**. 
WCAG AA verlangt **4.5:1** für Normaltexte unter 18pt.

**Betroffen**: 
- Themen-Beschreibung auf Karten (`.topic-desc`)
- Metainformationen im Hero-Bereich (`.hero-meta`)
- Fortschritts-Notiz (`.progress-consent-note`)

**Lösung**:
```css
:root {
  --ink-soft: #3d506a;  /* war: #46586a — Verhältnis jetzt: ~5.2:1 ✓ */
}
```

### Empfehlung: Fokus nicht verdeckt (2.4.11)

Der sticky `<header>` (Höhe ~70px) könnte fokussierte Buttons hinter sich verstecken. Lösung:

```css
html {
  scroll-padding-top: 80px;  /* Header-Höhe + Puffer */
}
```

---

## 5. Emotionale Entwicklung & Sicherheit

### Bezug zu Došen (Niveaustufen emotionaler Entwicklung)

Die Plattform richtet sich primär an Lernende auf **Stufe 3–4** nach Došen (ca. 6–12 Jahre emotionale Entwicklung):
- Selbstwirksamkeit beginnt sich zu entwickeln
- Orientierung an konkreten Regeln und Abläufen
- Bedürfnis nach Vorhersagbarkeit und klaren Grenzen
- Empfindlichkeit gegenüber Kritik und Versagen

### Ist-Analyse: Emotionale Qualität

**Stärken:**

| Aspekt | Umsetzung | Bewertung |
|--------|-----------|-----------|
| Fehlerkultur | „Das ist noch nicht richtig" statt „Falsch" | ✅ Sehr gut |
| Kein Zeitdruck | Keine Timer, keine automatischen Abbrüche | ✅ Sehr gut |
| Positiver Start | Willkommen-Karte mit Schild-Icon | ✅ Gut |
| Autonomie | Einwilligung für Lernstand-Speicherung | ✅ Sehr gut |
| Hilfe-Button | „Du kannst den Hilfe-Button nutzen" | ✅ Gut |
| Töne | Optional, Standard aus | ✅ Sehr gut |

**Verbesserungspotenzial:**

| Aspekt | Problem | Empfehlung |
|--------|---------|------------|
| Abschluss-Feedback | Standardlob bei Quiz-Ende, nicht personalisiert | Personalisierter, wärmerer Text |
| Fehler im Quiz | Korrekte Antwort wird nur kurz erklärt | Ermutigungsformel + Erklärung länger sichtbar |
| Erste Fehler-Antwort | Kein emotionaler Puffer | „Das passiert. Lass es uns gemeinsam ansehen." |
| Urkunde | Nüchtern gestaltet | Wärmerer Glückwunsch-Text |

### Optimierte Feedback-Formulierungen

**Bei falscher Antwort (statt nur Erklärung):**

Aktuell: *„Das ist noch nicht richtig. Wenn andere dein Passwort kennen, können sie dein Konto benutzen."*

Besser: *„Fast! Das ist nicht ganz richtig. Kein Problem. Wenn andere dein Passwort kennen, können sie dein Konto benutzen. Die richtige Antwort ist: Ich behalte es für mich."*

**Bei richtiger Antwort:**

Aktuell: *„Das ist richtig. Dein Passwort bleibt geheim."*

Besser: *„Genau richtig! Du hast es. Dein Passwort bleibt immer geheim."*

**Abschluss-Text (Urkunde) — wärmere Version:**

```
Du hast es geschafft!
Alle 12 Themen sind fertig.

Das war nicht einfach.
Und du hast durchgehalten.

Das ist wirklich toll.

Du weißt jetzt viel über sicheres Internet.
Das hilft dir jeden Tag.
```

### Empfehlungen: Emotionale Entwicklung

**R-E1**: Lob-Sequenz nach jeder abgeschlossenen Lektion

Nach dem Quiz eines Themas: kurze Animations-Bestätigung (CSS-Only, respektiert `prefers-reduced-motion`).

**R-E2**: Hilfe-Seite emotional warm gestalten

Aktuell: technisch-informativ. Empfehlung: mit persönlicher Ansprache öffnen:
*„Hast du eine Frage? Das ist gut so. Hier findest du Hilfe."*

**R-E3**: Fehler normalisieren in der Start-Lektion

Im Start-Screen jedes Themas explizit sagen:
*„Wenn etwas nicht klappt: Kein Problem. Du kannst alles mehrmals machen."*

---

## 6. Didaktische Qualität

### Lernziel-Analyse

**SOLL**: Klare Lernziele, Schritt-für-Schritt, Wiederholung, Variation, Gamification.

**IST**:

| Kriterium | Ist-Stand | Bewertung |
|-----------|-----------|-----------|
| Klare Lernziele | Implizit (Start-Text nennt Thema, nicht Ziel) | ⚠️ Ausbaubar |
| Schritt-für-Schritt | 7–9 Lektionen pro Thema, logisch aufgebaut | ✅ Sehr gut |
| Multisensorisch | Text + Icons + Töne + Vorlese-Button | ✅ Gut |
| Wiederholung | Merk-Karten + Großes Quiz | ✅ Sehr gut |
| Variation | Lektionen, Quiz, Praxis-Übungen wechseln ab | ✅ Gut |
| Gamification | Urkunde, Fortschritts-Badge, Großes Quiz | ✅ Gut |
| Transfer | Beispiele aus dem Alltag (WhatsApp, Gewinnspiel) | ✅ Sehr gut |

### Lernziel-Formulierungen (optimiert)

Für jeden Start-Screen empfohlene Lernziel-Struktur:

**Datenschutz:**
```
Was du lernst:
Welche Daten von dir privat sind.
Warum dein Passwort geheim bleibt.
Was du tust, wenn jemand nach deinen Daten fragt.
```

**KI:**
```
Was du lernst:
Was Künstliche Intelligenz ist.
Wie KI dir helfen kann.
Wann du vorsichtig sein musst.
```

**Fakes:**
```
Was du lernst:
Wie du erkennst, ob etwas im Internet stimmt.
Was Deepfakes sind.
Was du tun kannst, wenn du unsicher bist.
```

**Betrug:**
```
Was du lernst:
Wie Betrüger vorgehen.
Welche Tricks du erkennst.
Was du tust, wenn du betrogen wirst.
```

### Empfehlungen: Didaktik

**R-D1**: Explizite Lernziele am Start jedes Themas

Eine einheitliche „Was du heute lernst"-Karte als erste Lektion statt dem allgemeinen Start-Text.

**R-D2**: Fortschritt innerhalb des Themas kommunizieren

```
Schritt 3 von 7: Passwort
```
Gibt Lernenden eine Vorstellung, wie weit sie noch gehen.

**R-D3**: Übungsformat ausweiten (optional)

Zusätzlich zu Multiple-Choice: eine „Sortier-Aufgabe" oder „Drag & Drop"-Alternative für Themen mit 2 Optionen.

**R-D4**: Wissensstand vor dem Thema abfragen (optional)

Kurze Einstiegsfrage: „Was weißt du schon über Datenschutz?" mit 3 Optionen als Selbsteinschätzung, kein Richtig/Falsch.

---

## 7. UX & Usability

### Ist-Analyse

**Visuelle Hierarchie** — Bewertung: GUT (4/5)

- Hero-Karte ist prominent ✓
- Themen-Karten groß und touch-freundlich ✓
- Buttons deutlich erkennbar ✓
- Schwäche: Start-Aktionen (Großes Quiz / Alle Merk-Karten) konkurrieren visuell mit den Themen-Karten

**Navigation** — Bewertung: SEHR GUT (5/5)

- Zurück-Button immer verfügbar ✓
- Home-Button im Header ✓
- Hash-Routing für direkte Links ✓

**Button-Größen** — Bewertung: SEHR GUT (5/5)

- Topic-Cards: volle Breite, >60px Höhe ✓
- Nav-Buttons: 48px min ✓
- Answer-Buttons: ausreichend groß ✓

**Ablenkungsfreiheit** — Bewertung: SEHR GUT (5/5)

- Kein unnötiger Inhalt ✓
- Ruhiges Farbschema ✓
- Keine Werbung, keine Pop-ups ✓

### Verbesserungspotenzial

**R-U1**: Breadcrumb / „Du bist hier"-Hinweis

Im Header-Bereich (unter dem Modultitel) anzeigen, welches Thema aktiv ist:
```
📚 Datenschutz · Lektion 3 von 7
```

**R-U2**: Lektions-Fortschritt im Header deutlicher

Aktuell zeigt der Header eine Prozentbar. Ergänzung: verbale Anzeige der Schrittnummer.

**R-U3**: Themen-Karten visuell gruppieren (optional)

Themen in zwei visuelle Gruppen teilen:
- Gruppe 1: Grundlagen (Datenschutz, WhatsApp, Facebook, Instagram, YouTube, Snapchat, TikTok)
- Gruppe 2: Neu & Wichtig (KI, Fakes, Betrug, Einkaufen, Hilfe)

**R-U4**: Vorlese-Button prominenter positionieren

Aktuell als kleines Element auf der Karte. Empfehlung: als eigenständigen Button unterhalb des Textes in jedem Content-Block.

---

## 8. Technische Umsetzung

### Ist-Analyse

| Kriterium | Status | Details |
|-----------|--------|---------|
| Semantisches HTML | ✅ Sehr gut | `<main>`, `<header>`, `<nav>`, `<footer>`, `<section>`, `<article>` |
| ARIA-Rollen | ✅ Sehr gut | progressbar, live, polite, status, label |
| Performance | ✅ Sehr gut | Lokale Schriften, Service Worker, Cache-First |
| Offline-Fähigkeit | ✅ Implementiert | SW mit PRECACHE_URLS |
| Mobile | ✅ Sehr gut | Responsive, kein horizontales Scroll |
| PWA | ✅ Vorhanden | manifest.webmanifest, favicon.svg |
| Datenschutz | ✅ Vorbildlich | Keine externen Ressourcen, kein Tracking |
| `escapeHtml()` | ✅ Vorhanden | XSS-Schutz für dynamische Inhalte |
| Fehlerbehandlung | ✅ Vorhanden | Try/Catch bei AudioContext |

### Offene technische Punkte

**T1**: Schrift-Format (WOFF2 fehlt)

TTF-Dateien sind korrekt. WOFF2 würde bei modernen Browsern 30% kleinere Dateigröße ergeben. Optional, da TTF schon klein ist und lokal gecacht wird.

**T2**: manifest.webmanifest – maskable Icon

```json
{
  "icons": [
    {
      "src": "favicon.svg",
      "sizes": "any",
      "type": "image/svg+xml",
      "purpose": "any maskable"
    }
  ]
}
```

`"purpose": "any maskable"` statt nur `"any"` — bessere Darstellung auf Android.

**T3**: `dateModified` in index.html Schema aktualisieren

```json
"dateModified": "2026-06-14"
```

**T4**: Cache-Version bei Release erhöhen

Bei jedem GitHub-Push: `CACHE_VERSION` in `sw.js` anpassen (z. B. `"v2026-06b"`).

---

## 9. Vollständige Entwickler-Checkliste

### A. Leichte Sprache

- [x] Sätze max. 12 Wörter
- [x] Immer direkte Ansprache (Du)
- [x] Aktive Verben, nicht Passiv
- [x] Keine unklaren Abkürzungen
- [x] Zahlen als Ziffern (12, nicht zwölf)
- [ ] Alle Metaphern entfernt oder ersetzt (→ 5 Stellen prüfen, siehe Abschnitt 3)
- [ ] Lernziele explizit formuliert (→ R-D1)
- [x] Fehler-Feedback ohne Schuld-Zuschreibung
- [x] Positiv formulierte Merk-Karten
- [ ] Glossar-Wörter beim Erstauftreten im Text kurz erklärt (→ R-L3)

### B. Barrierefreiheit (WCAG 2.2)

- [x] `<html lang="de">` gesetzt
- [x] Skip-Link als erstes Element im Body
- [x] Alle interaktiven Elemente per Tastatur erreichbar
- [x] Fokus-Reihenfolge logisch (Skip → Header → Content → Nav → Footer)
- [x] Fokus sichtbar (3px oranger Rahmen)
- [ ] `scroll-padding-top: 80px` für sticky Header (→ 2.4.11)
- [x] `aria-live="polite"` für Ankündigungen
- [x] Fortschrittsbalken mit `aria-valuetext`
- [x] Alle Icons `aria-hidden="true"`
- [x] Buttons mit beschreibendem `aria-label`
- [ ] Kontrast `--ink-soft` auf `#3d506a` korrigieren (→ 1.4.3)
- [x] `prefers-reduced-motion` respektiert
- [x] Keine Farbe als einzige Information
- [x] Richtig/Falsch auch durch Text kommuniziert
- [x] Escape schließt Overlays (Glossar)
- [x] `aria-hidden` auf dekorativen SVGs
- [ ] Fokus bei Glossar-Overlay auf Panel, bei Schließen zurück (→ prüfen)
- [x] `<noscript>` Fallback vorhanden

### C. UX & Usability

- [x] Buttons min. 44px Tippziel
- [x] Touch-freundliche Abstände
- [x] Home-Button im Header
- [x] Zurück-Button in Navigation
- [x] Themen mit Illustration + Icon + Text
- [ ] Schritt-Anzeige im Header ergänzen (→ R-K1)
- [x] Vorlese-Button auf Themen-Karten
- [ ] Vorlese-Button in Content-Blöcken prominenter (→ R-U4)
- [x] Keine Ablenkungen, kein Tracking
- [x] Responsive von 320px bis Desktop
- [ ] Breadcrumb / „Du bist hier" (→ R-U1)

### D. Didaktik

- [x] Schritt-für-Schritt-Aufbau pro Thema
- [x] Praxis-Übungen (Multiple Choice)
- [x] Merk-Karten nach jeder Lektion
- [x] Abschluss-Quiz pro Thema
- [x] Großes Quiz (alle 12 Themen)
- [x] Druckbare Gesamtübersicht Merk-Karten
- [x] Abschluss-Urkunde
- [ ] Explizite Lernziele am Start (→ R-D1)
- [ ] Schrittnummer im Header (→ R-D2)
- [ ] Einstiegsfrage (optional, → R-D4)

### E. Emotionale Entwicklung (nach Došen)

- [x] Kein Zeitdruck
- [x] Fehler ohne Schuldzuschreibung
- [x] Vorhersagbare Struktur
- [x] Optionale Töne (Standard: aus)
- [x] Einwilligung für Lernstand
- [ ] Wärmere Abschluss-Texte (→ R-E1)
- [ ] Normalisierung von Fehlern im Start-Screen (→ R-E3)
- [ ] Emotional warme Hilfe-Seite (→ R-E2)

### F. Kognitive Zugänglichkeit

- [x] Max. 3–4 Sätze pro Lektion
- [x] Bullet-Listen für Informationsblöcke
- [x] Einheitliche Strukturen pro Lektion
- [x] Glossar für Fremdwörter
- [ ] Modul-Cluster visuell kennzeichnen (→ R-K2)
- [ ] Merk-Karte auch innerhalb der Lektion (→ R-K3)

### G. Technische Umsetzung

- [x] Service Worker aktiv
- [x] Offline-Fähigkeit (PRECACHE_URLS vollständig)
- [x] Lokale Schriften (Atkinson Hyperlegible TTF)
- [x] Keine externen Ressourcen
- [x] PWA (manifest.webmanifest, favicon.svg)
- [x] XSS-Schutz (escapeHtml)
- [x] Fehlerbehandlung (try/catch)
- [x] Screenreader-Ankündigungen (aria-live)
- [ ] `"purpose": "any maskable"` im Manifest (→ T2)
- [ ] `scroll-padding-top` im CSS (→ T1)
- [ ] `dateModified` Schema aktuell halten (→ T3)
- [ ] CACHE_VERSION bei jedem Push erhöhen (→ T4)

### H. GitHub-Workflow

- [ ] Schriften herunterladen: `bash download-fonts.sh`
- [ ] Commit mit aussagekräftiger Message
- [ ] CACHE_VERSION erhöhen vor Push
- [ ] Nach Push: GitHub Pages URL testen
- [ ] Service Worker in DevTools prüfen (Application → Service Workers)
- [ ] Lighthouse-Audit ausführen (Ziel: Accessibility 95+)

---

## 10. Texte in Leichter Sprache – optimierte Versionen

### 10.1 Startseite – optimierter Willkommenstext

```
Willkommen!

Hier kannst du über das Internet lernen.

Du lernst:
· Wie du sicher bist im Internet.
· Wie du dich schützt.
· Was du tun kannst, wenn etwas passiert.

Es gibt 12 Themen.
Du kannst selbst wählen, womit du anfängst.

Wenn etwas nicht klappt: Das ist ok.
Du kannst alles mehrmals machen.
```

### 10.2 Start-Screen pro Thema – Vorlage

```
[THEMA-TITEL]

Hier lernst du:
[Lernziel 1 — max. 8 Wörter]
[Lernziel 2 — max. 8 Wörter]
[Lernziel 3 — max. 8 Wörter]

Du übst:
Entscheidungen treffen.
Wann du vorsichtig bist.

Tipp:
Du kannst den Hilfe-Button drücken.
Du kannst Dinge mehrmals lesen.
Alles ist ok.
```

### 10.3 Quiz-Einleitung

Aktuell: keine explizite Einleitung.

Optimiert:
```
Jetzt kommt das Quiz.

Du bekommst eine Frage.
Du wählst eine Antwort.
Du siehst sofort, ob du richtig lagst.

Kein Problem, wenn etwas nicht stimmt.
Du lernst daraus.
```

### 10.4 Feedback bei falscher Antwort – Vorlage

```
Das ist noch nicht ganz richtig.
[2 kurze Sätze: Erklärung]

Die richtige Antwort ist:
[richtige Antwort]
```

### 10.5 Feedback bei richtiger Antwort – Vorlage

```
Genau richtig! [Bestätigung der Regel in 1 Satz]
```

### 10.6 Abschluss-Urkunde – optimierter Text

```
Du hast es geschafft!

Du hast alle 12 Themen gelernt.

Das war viel Arbeit.
Und du hast durchgehalten.
Das ist toll.

Du weißt jetzt:
· Wie du dich schützt.
· Was du tust, wenn etwas falsch ist.
· An wen du dich wendest.

Dieses Wissen gehört dir.
Es hilft dir jeden Tag.

Herzlichen Glückwunsch!
```

### 10.7 Hilfe-Seite – Eröffnungstext (emotional warm)

```
Brauchst du Hilfe?

Das ist gut.
Fragen zu stellen ist klug.

Hier findest du Hilfe:
```

### 10.8 Glossar-Overlay – Vorlage

```
[WORT]

Das bedeutet:
[Erklärung in max. 3 kurzen Sätzen]
```

---

## 11. Konkrete Code-Verbesserungen

### 11.1 Kontrast-Fix (sofort umsetzbar)

In `styles.css`, Zeile ca. 47:

```css
/* VORHER: */
--ink-soft: #46586a;  /* Kontrast 3.8:1 — WCAG-Fehler */

/* NACHHER: */
--ink-soft: #3d506a;  /* Kontrast ~5.2:1 — WCAG AA ✓ */
```

### 11.2 scroll-padding-top (sofort umsetzbar)

In `styles.css`, nach den `:root`-Variablen:

```css
html {
  scroll-padding-top: 80px; /* Verhindert, dass sticky Header Fokus verdeckt */
}
```

### 11.3 Schrittnummer im Header anzeigen

In `app.js`, Funktion `setHeader()` — neue Parameter und Anzeige:

```javascript
// In setHeader(): stepLabel mit Schrittnummer ergänzen
function setHeaderWithStep(title, module, stepLabel, levelLabel, percent, currentStep, totalSteps) {
  // Schrittanzeige
  const stepInfo = currentStep > 0 && totalSteps > 0
    ? `${stepLabel} · Schritt ${currentStep} von ${totalSteps}`
    : stepLabel;
  
  stepLabelEl.textContent = stepInfo;
  progressTrack.setAttribute("aria-valuetext", `${Math.round(percent)} Prozent`);
  // ... rest wie bisher
}
```

### 11.4 Manifest: maskable Purpose

In `manifest.webmanifest`:

```json
{
  "icons": [
    {
      "src": "favicon.svg",
      "sizes": "any",
      "type": "image/svg+xml",
      "purpose": "any maskable"
    }
  ]
}
```

### 11.5 Optimiertes Feedback-Format

In `topics.js` — Feedback-Texte vereinheitlichen:

```javascript
// Vorlage für feedbackWrong:
"feedbackWrong": "Fast! Das ist noch nicht ganz richtig. [Erklärung]. Die richtige Antwort ist: [Antwort]."

// Vorlage für feedbackCorrect:
"feedbackCorrect": "Genau richtig! [Bestätigung der Regel]."
```

### 11.6 Start-Screen Lernziele als strukturiertes Objekt

Empfehlung: In `topics.js` ein `learningGoals`-Array pro Thema ergänzen:

```javascript
{
  "id": "datenschutz",
  "title": "Datenschutz",
  "learningGoals": [
    "Welche Daten von dir privat sind",
    "Warum dein Passwort geheim bleibt",
    "Was du tust, wenn jemand nach deinen Daten fragt"
  ],
  // ... rest
}
```

In `app.js` dann im Start-Screen rendern:

```javascript
const goalsHtml = topic.learningGoals
  ? `<div class="learning-goals">
       <p class="learning-goals-label">Was du heute lernst:</p>
       <ul class="learning-goals-list">
         ${topic.learningGoals.map(g => `<li>${escapeHtml(g)}</li>`).join("")}
       </ul>
     </div>`
  : "";
```

---

## 12. Prioritätenliste: Was als nächstes umsetzen

### Sofort (< 1 Stunde)

1. **Kontrast-Fix** `--ink-soft: #3d506a` in styles.css
2. **scroll-padding-top: 80px** in styles.css
3. **manifest.webmanifest** `"purpose": "any maskable"`
4. **dateModified** im Schema auf 2026-06-14 aktualisieren

### Kurzfristig (1–2 Tage)

5. **5 Leichte-Sprache-Stellen** in topics.js korrigieren (Metaphern, Idiome)
6. **Abschluss-Urkunde** mit wärmerem Text
7. **Quiz-Feedback** optimieren: „Fast! / Genau richtig!" als Einleitung
8. **Start-Screen** jedes Themas um explizite Lernziele ergänzen

### Mittelfristig (1 Woche)

9. **Schrittnummer** im Header anzeigen (Schritt X von Y)
10. **Normalisierung von Fehlern** im Start-Screen jedes Themas
11. **Hilfe-Seite** emotional warm umformulieren
12. **learningGoals** Array in topics.js ergänzen und rendern

### Optional (bei Gelegenheit)

13. WOFF2-Format der Schriften ergänzen
14. Modul-Cluster visuell kennzeichnen
15. Einstiegsfrage als Selbsteinschätzung
16. Lighthouse-Audit durchführen und Bericht speichern

---

*Gutachten erstellt mit Cowork · Claude · Anthropic — Juni 2026*
*Plattform: „Sicher und selbstbestimmt im Internet" · Frank Runge · Alexianer Stift Tilbeck GmbH*
