# CLAUDE.md — Verbindliche Arbeitsanweisung

**Projekt:** Sicher und selbstbestimmt im Internet (Marke: „Alex und Tilda")
**Repo:** alex-und-tilda/sicher-und-selbstbestimmt-im-internet (GitHub Pages)
**Träger:** Stift Tilbeck / Alexianer · gefördert u. a. von der Sozialstiftung NRW
**Art:** Barrierearme Lern-Plattform in mehreren Sprach-Ebenen, als reine JavaScript-SPA (kein Framework, kein Build-Tool).

> Diese Datei liegt im Repo-Root. Claude Code liest sie bei jeder Session als verbindliche Regel. Wenn eine Anweisung der nutzenden Person dieser Datei widerspricht, weise freundlich darauf hin und frage nach.

---

## 1. Prime Directive

**Barrierefreiheit und verständliche Sprache stehen über allem.** Im Zweifel gewinnt immer die Verständlichkeit für Menschen mit Lern-Schwierigkeiten — nicht die technische Eleganz, nicht die Optik, nicht die Kürze des Codes.

**Bestand schützen — niemals ohne Auftrag entfernen oder beschädigen:**

- Dark Mode (`prefers-color-scheme`, dokumentierte APCA-Kontraste in `styles.css`)
- Vorlese-/Audio-Funktion und Ton-Schalter
- Offline-Fähigkeit (Service Worker `sw.js`, PWA-Manifest)
- „Zurück / Weiter"-Navigation, Hilfe-Knopf, Pause-Funktion, Schriftgrößen-Schalter
- Die lokale Schrift **Atkinson Hyperlegible**
- Die Logos der Träger im Footer

Wer eine dieser Funktionen anfasst, prüft danach ausdrücklich, dass sie noch funktioniert.

---

## 2. Drei-Ebenen-Sprachsystem (zentrale Architektur)

Jede Lerneinheit existiert in **drei Sprach-Ebenen**. Die Auswahl trifft die nutzende Person am Start; sie ist jederzeit über „Sprache: …" umstellbar und wird gemerkt.

| Schlüssel | Anzeige | Zielgruppe | Quelle im Code |
|-----------|---------|-----------|----------------|
| `leicht` | Leichte Sprache | Menschen mit Lern-Schwierigkeiten | **Basistext** in `topics.js` |
| `einfach` | Einfache Sprache | Sprachniveau ~B1, Lese-Ungeübte | `versions.einfach` in `content-de.js` |
| `standard` | Alltagssprache | alle anderen | `versions.standard` in `content-de.js` |

**So funktioniert es technisch (nicht ändern ohne Auftrag):**

- `topics.js` enthält `const topics = [...]`. Die Lektions-Felder dort **sind** die Leichte-Sprache-Fassung.
- `content-de.js` enthält `CONTENT_VERSIONS[themaId][lektionTitel] = { einfach:{...}, standard:{...} }` und ruft am Ende `applyContentVersions()` auf. Das hängt die Fassungen als `lesson.versions` an.
- Der Renderer in `app.js` wählt über `resolveLessonContent(lesson, languageLevel)` die Fassung. **Fallback-Kette:** `leicht` → Basistext; `einfach` → `versions.einfach` sonst Basistext; `standard` → `versions.standard` sonst `einfach` sonst Basistext. So bleibt die Seite immer funktionsfähig, auch wenn eine Fassung fehlt.
- Verknüpfung über den **exakten Lektions-Titel**. Titel in `content-de.js` müssen wortgleich zu `topics.js` sein, sonst greift die Fassung nicht.

**Pflicht-Regel:** Wird eine Lektion inhaltlich geändert, werden **alle drei Ebenen synchron** gepflegt. Eine Ebene zu vergessen ist ein Fehler. Nach Änderungen prüfen:

```bash
node --check topics.js && node --check content-de.js
# Vollständigkeit: jede Lektion muss versions.einfach UND versions.standard haben,
# keine verwaisten Titel in CONTENT_VERSIONS.
```

> **Offene Produkt-Entscheidung (mit der nutzenden Person klären):** Die dritte Ebene ist aktuell „Alltagssprache (für alle)". Aus der Konzept-Diskussion stammt die Alternative „**Fachsprache Eingliederungshilfe**" (für Fachkräfte: Lernziele, Methodik, Rechtsbezüge SGB IX / UN-BRK). Das ist eine **andere Zielgruppe** und eine eigene Entscheidung. Bis sie getroffen ist, bleibt `standard` = Alltagssprache. Nicht eigenmächtig umwidmen.

---

## 3. Regeln für Leichte Sprache (Ebene `leicht` / Basistext)

Nach dem offiziellen Ratgeber (Netzwerk Leichte Sprache / BMAS, DIN SPEC 33429):

**Wörter:** einfache, kurze, bekannte Wörter. Lange zusammengesetzte Wörter mit **Bindestrich** trennen (Bank-Daten, Sprach-Nachricht). Im ganzen Text dasselbe Wort für dieselbe Sache. Keine Abkürzungen ohne Erklärung. Keine Fach- und Fremdwörter ohne Erklärung. **Kein Genitiv** (statt „des Vaters" → „vom Vater"). **Kein Konjunktiv** (würde, könnte, wäre …). Tun-Wörter statt Haupt-Wörter, Aktiv statt Passiv, einfache Zeit-Formen. Keine Rede-Wendungen / bildliche Sprache.

**Zahlen/Zeichen:** Zahlen als Ziffern. Große Zahlen verständlich runden. **Anführungs-Zeichen vermeiden.** Ausrufe-Zeichen nur sparsam und nur, wenn inhaltlich nötig (z. B. um eine Betrugs-Masche zu zeigen). Sonderzeichen (`; / § % & ()`) vermeiden.

**Sätze:** kurze Sätze, **eine Aussage pro Satz, keine Neben-Sätze.** Einfacher Satz-Bau: wer macht was. Verkürzte Sätze (mit „Oder", „Und", „Aber") sind erlaubt.

**Texte:** möglichst kurz, klarer Aufbau, Absätze mit je einem Inhalt, persönliche Anrede (siehe §5).

**Prüfung:** Echte Leichte Sprache wird idealerweise von **Prüf-Lesenden aus der Zielgruppe** gegengelesen. Unsere Texte sind ein fachlich sauberer Entwurf dafür.

---

## 4. Regeln für Einfache Sprache (Ebene `einfach`)

Plain Language, etwa Sprachniveau **B1**. **Sichtbar voller als Leichte Sprache, einfacher als Alltagssprache.** Kurze, aber **verbundene** Sätze (ein Nebensatz erlaubt, Begründungen mit „weil/wenn/damit/deshalb"). Größerer, aber gängiger Wortschatz; Fachwörter kurz erklären. Aktiv, konkrete Beispiele. **Keine Piktogramm-Pflicht**, Fließ-Sätze statt Einzelzeilen. Richtwert: deutlich mehr als ~6 Wörter/Satz (Leicht), aber keine verschachtelten Schachtelsätze.

---

## 5. Anrede

**Durchgängig „du"** — auf allen drei Ebenen, in allen Texten, Knöpfen und Hinweisen. Das ist für den Tilbeck-/Eingliederungshilfe-Kontext bewusst gewählt und nähebewusst. Nicht zu „Sie" wechseln, außer die nutzende Person ordnet es ausdrücklich an. (Hinweis: Der LS-Ratgeber empfiehlt „Sie" für Fremde; die bewusste Ausnahme „du" ist regelkonform, weil die Lesenden bekannt sind und sonst geduzt werden.)

---

## 6. Barrierefreiheit / WCAG 2.2 AA

- Kontrast mindestens AA; bestehende Werte sind in `styles.css` als APCA dokumentiert — nicht verschlechtern.
- Sichtbarer **Fokus-Rahmen** für Tastatur-Bedienung bleibt erhalten.
- `prefers-reduced-motion` respektieren (Animationen abschaltbar).
- Jedes `<img>` braucht ein `alt` (dekorativ: `alt="" aria-hidden="true"`).
- Sinnvolle Überschriften-Hierarchie, `lang="de"`, „Zum Inhalt springen"-Link.
- Bedienelemente groß (Knöpfe ≥ ~58 px Höhe), große Klick-Flächen.
- Schrift skalierbar (Schriftgrößen-Schalter bleibt).

---

## 7. Design-System (Tilbeck / „Alex und Tilda")

- **Schrift:** Atkinson Hyperlegible (lokal in `assets/fonts/`), Fallback `Segoe UI, Arial`.
- **Farben:** ausschließlich über die CSS-Variablen in `styles.css` (`--accent`, `--ink`, `--surface`, `--line`, Feedback-Farben gut/warn/bad …). Keine hartkodierten Hex-Farben in neuen Stilen — sonst bricht der Dark Mode.
- **Form:** ruhige, runde Karten (`--radius-l/m/s`), weiche Schatten (`--shadow`, `--shadow-hover`), sanfter Hintergrund-Verlauf. Ruhig und reizarm bleiben — keine grellen Effekte, keine starke Bewegung.
- **Themenfarben:** je Thema eine Farbe über `getTopicColorStyle()` (Inline-CSS-Variablen). Beibehalten.
- **Logos** der Träger im Footer nicht entfernen.

---

## 8. Piktogramm-System (ARASAAC)

- Quelle: **ARASAAC** (arasaac.org), Lizenz **CC BY-NC-SA 4.0** — kostenlos, nur nicht-kommerziell, mit Quellenangabe. Pflicht-Hinweis steht im Impressum: „Piktogramme: ARASAAC (arasaac.org), Urheber Sergio Palao, Regierung von Aragón, Lizenz CC BY-NC-SA."
- Eingebunden über den Resolver in `app.js`:
  - `ARASAAC_PICTO` = Zuordnung `pikto-<key>` → ARASAAC-ID (aktuell 17 Begriffe).
  - `pictoSrc(key)` liefert `https://static.arasaac.org/pictograms/<id>/<id>_300.png`, sonst Fallback `assets/pictograms/<key>.svg`.
- **Neuen Begriff ergänzen:** ID über die ARASAAC-API suchen (`https://api.arasaac.org/api/pictograms/de/search/<wort>`), in `ARASAAC_PICTO` eintragen — fertig für alle Themen.
- Piktogramme nur in `leicht` (und optional `einfach`), **nicht** in `standard`.
- Offline: `sw.js` cached `static.arasaac.org` zur Laufzeit. **Wenn echter Offline-Betrieb Pflicht wird:** Piktogramme lokal ins Repo legen (ZIP-Export von ARASAAC) und den Resolver auf lokale Pfade stellen.

---

## 9. Datenschutz

- Maßgeblich ist das **KDG (Katholisches Datenschutzgesetz)**, nicht die DSGVO (kirchlicher Träger). Datenschutz-Hinweise entsprechend formulieren (`datenschutz.html`).
- Die Seite erhebt **keine personenbezogenen Daten** und nutzt keine Tracker.
- `localStorage` speichert nur lokale Einstellungen (gewählte Sprach-Ebene, Schriftgröße, Lern-Fortschritt). Das ist kein personenbezogenes Datum und KDG-konform. Keine externen Analytics, keine Cookies zu Tracking-Zwecken einführen.

---

## 10. Architektur & Dateien

| Datei | Zweck — bitte respektieren |
|-------|----------------------------|
| `index.html` | Hülle/Gerüst. Lädt `topics.js` → `content-de.js` → `app.js` (Reihenfolge wichtig). |
| `topics.js` | Alle 12 Themen, Lektionen, Quiz, Merksätze. Basistext = **Leichte Sprache**. |
| `content-de.js` | `CONTENT_VERSIONS` mit `einfach`/`standard` je Lektion + `applyContentVersions()`. |
| `app.js` | Renderer + Engine: Sprach-Ebenen, `resolveLessonContent`, `pictoSrc`, Sprach-Auswahl, Navigation, Vorlesen, Dark-Mode-Reaktion. |
| `styles.css` | Design-System, Dark Mode, APCA-Kontraste, Responsive. |
| `sw.js` | Offline-Cache (App-Dateien + ARASAAC). `CACHE_VERSION` bei jeder Veröffentlichung erhöhen. |
| `fortschritt.html` | Live-Dashboard (Stand der drei Ebenen + GitHub-Commits). Liest `topics.js`/`content-de.js`. |
| `assets/` | Schriften, Logos, lokale Icons/Illustrationen/Piktogramme. |

Kein Framework, kein Bundler, keine npm-Abhängigkeiten zur Laufzeit. Reines HTML/CSS/JS, das GitHub Pages direkt ausliefert. **Diese Einfachheit ist gewollt** — nicht ohne Auftrag ein Build-System einführen.

---

## 11. Workflow für Claude Code

1. Vor Änderungen die betroffene Datei lesen; Architektur aus §10 beachten.
2. Inhalte ändern → **alle drei Ebenen** (§2).
3. Nach jeder Änderung lokal prüfen:
   ```bash
   node --check app.js && node --check topics.js && node --check content-de.js && node --check sw.js
   ```
4. JS-Dateien werden über `<script src>` als Browser-Globals geladen (kein Modulsystem). `const topics` / `const CONTENT_VERSIONS` sind absichtlich globale Bindungen.
5. Bei geändertem `sw.js` oder Precache-Liste: `CACHE_VERSION` hochzählen.
6. Veröffentlichen läuft über **GitHub Desktop** (Commit to main → Push origin); die nutzende Person ist nicht technisch — Schritte einfach erklären.
7. Vorschau-/Hilfsdateien (`_vorschau-*.html`, `*.bak`) sind in `.gitignore` und gehören nicht ins Repo.

---

## 12. Definition of Done

Eine Aufgabe ist erst fertig, wenn:

- [ ] Inhalt in **allen drei Ebenen** vorhanden und synchron (oder bewusster Fallback dokumentiert).
- [ ] `node --check` für alle berührten JS-Dateien ohne Fehler.
- [ ] Leichte Sprache hält die Regeln aus §3 ein; Einfache Sprache ist sichtbar voller (§4); Anrede „du" (§5).
- [ ] Kontrast/Barrierefreiheit nicht verschlechtert (§6); alle Bilder mit `alt`.
- [ ] Neue Piktogramm-Begriffe in `ARASAAC_PICTO` gemappt (§8).
- [ ] Dark Mode, Vorlesen/Audio, Offline und Navigation funktionieren weiterhin (§1).
- [ ] Bei SW-Änderung `CACHE_VERSION` erhöht.
- [ ] Titel-Abgleich `content-de.js` ↔ `topics.js` stimmt (keine verwaisten Fassungen).

---

## 13. Offene Entscheidungen (mit der nutzenden Person klären)

1. **Dritte Ebene:** bleibt „Alltagssprache (für alle)" oder wird zu „Fachsprache Eingliederungshilfe (für Fachkräfte)" mit Lernzielen, Methodik und Rechtsbezügen? (Andere Zielgruppe, eigene Inhalte.)
2. **Standard-Start-Ebene:** Welche Ebene ist beim allerersten Besuch vorausgewählt? (Aktuell zeigt die App zuerst die Sprach-Auswahl; Vorschlag andernfalls: Einfache Sprache.)
3. **Inhaltsmodell langfristig:** beim bewährten `topics.js` + `content-de.js` bleiben (empfohlen, funktioniert) — oder später auf getrennte Dateien je Ebene umstellen? Nur mit klarem Auftrag und Migrationsplan.
4. **Echter Offline-Zwang:** Falls ja, ARASAAC-Piktogramme lokal hosten (§8).
