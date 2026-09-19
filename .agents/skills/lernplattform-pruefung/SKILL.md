---
name: lernplattform-pruefung
description: Qualitäts-Prüfung der Lern-Plattform „Sicher und selbstbestimmt im Internet“ nach PROJEKTREGELN.md §17 – Technik, drei Sprach-Ebenen, Service Worker/CACHE_VERSION, GitHub Pages, Datenschutz, Barrierefreiheit und Browser-Tests (Tastatur, Handy, Dunkelmodus, Offline). Verwenden vor einem Pull Request, vor dem Zusammenführen in main, vor einer Veröffentlichung oder wenn die nutzende Person „prüfen“, „Checkliste“ oder „ist das fertig?“ sagt.
---

# Lernplattform-Prüfung

Die Regeln stehen **nur** in `PROJEKTREGELN.md` (§16a.5). Dieser Skill beschreibt den **Ablauf** der Prüfung und verweist auf die Paragrafen. Widerspricht etwas hier den Projektregeln, gelten die Projektregeln.

Die Prüfung **liest nur**. Gefundene Fehler werden gemeldet, nicht still behoben. Korrekturen erst nach Rückfrage (§16.2).

## Ablauf

### 0. Stand klären (§16a.1)
`pwd`, `git status --short --branch`, `git worktree list`. Nennen: Ordner, Branch, Vergleichs-Stand (in der Regel `main`), offene Änderungen. Den Umfang festlegen: `git diff --stat main...HEAD` plus uncommittete Dateien.

### 1. Technik-Prüfung per Programm
```bash
node .Codex/skills/lernplattform-pruefung/pruefen.cjs main
```
Prüft ohne Netz und ohne Änderung:
- `node --check` für alle JS-Dateien im Hauptordner (§16.5)
- jede Lektion hat `einfach` und `standard`, keine verwaisten Titel, Einstiegsfragen je Stufe (§2); Hinweis, wenn Einfache Sprache nicht voller ist als Leichte (§6)
- alle Einträge der Precache-Liste existieren, alle Skripte aus `index.html` stehen darin, Lade-Reihenfolge (§15)
- `CACHE_VERSION` neu, sobald eine Precache-Datei gegenüber dem Vergleichs-Stand geändert ist (§16.6, §16a.7)
- keine extern geladenen Quellen, keine absoluten Pfade, keine `docs/`, `_vorschau-*`, `*.bak` im Repo (§14, §15, §16.8)

Beim Zusammenführen zusätzlich gegen die **zuletzt veröffentlichte** Fassung vergleichen (`origin/main` nach `git fetch`), §16a.7.

### 2. Inhalts-Prüfung im Diff (von Hand)
Nur die geänderten Stellen lesen:
- **Drei Ebenen synchron** (§2): Wurde eine Lektion geändert, sind alle drei Ebenen inhaltlich gleich? Ausnahme `tun` in `ketten-de.js`.
- **Leichte Sprache**: geänderte Leicht-Texte mit dem Skill `leichte-sprache` prüfen (§5, §6).
- **Anrede „du“** (§8), **Haltung** nicht belehrend (§4), **belastende Themen** ruhig und handlungsfähig (§3 Došen).
- **Neue Oberflächen-Wörter** zentral und leicht änderbar, in §18.8 als Prüfpunkt eingetragen (§13).
- **Begleit-Ebene** bei neuen Themen/Lernzielen gepflegt (§7).
- **Bestand** aus §1 nicht beschädigt.

### 3. Datenschutz und Sicherheit im Diff (§14, §16.4)
Suchen und jede Fundstelle beurteilen:
- neue `localStorage`/`sessionStorage`/`indexedDB`-Nutzung → nur lokale Einstellungen erlaubt
- neue `fetch`, `XMLHttpRequest`, `navigator.sendBeacon`, externe URLs → nicht erlaubt
- `innerHTML`/`insertAdjacentHTML` mit Werten, die nicht aus den eigenen Inhalts-Dateien stammen (z. B. Eingaben, URL-Hash) → XSS-Risiko melden
- Farben: keine hartkodierten Hex-Werte in neuen Stilen (§10), Animation nach §18a

### 4. Browser-Prüfung (§9, §17)
Vorschau starten mit `preview_start` und dem Namen aus `.Codex/launch.json` (Codex: Port 8001, §16a.8). Dann mit dem eingebauten Browser:
1. **Konsole** ohne Fehler (`read_console_messages`), keine Netz-Anfragen an fremde Adressen (`read_network_requests`).
2. **Geänderte Seite** öffnen und durchklicken; in **allen drei Sprach-Ebenen** ansehen.
3. **Tastatur**: Tab-Reihenfolge, sichtbarer Fokus, `Escape` schließt Overlays, Skip-Link.
4. **Handy**: `resize_window` mit `mobile`; nichts abgeschnitten, keine waagrechte Scroll-Leiste, Knöpfe groß genug.
5. **Dunkelmodus**: `resize_window` mit `colorScheme: dark`; Text lesbar.
6. **Bestand** (§1): Tab-Leiste, Zurück/Weiter, Vorlese-Knopf vorhanden, Schriftgröße A/A+/A++.
7. **Offline**: Service Worker registriert und aktiv (`navigator.serviceWorker.controller`), neue Dateien im Cache.
Danach `resize_window` mit `desktop` zurücksetzen. Für eine gründliche WCAG-Prüfung zusätzlich den Skill `design:accessibility-review` verwenden.

Vorlesen (Web Speech API) lässt sich im eingebauten Browser nicht hörbar prüfen: nur prüfen, dass der Knopf reagiert, und das ausdrücklich so berichten.

## Bericht an die nutzende Person
Auf Deutsch, einfach, ohne Fachjargon. Aufbau:
1. **Ergebnis in einem Satz** (z. B. „Bereit zum Zusammenführen“ oder „2 Dinge müssen vorher behoben werden“).
2. **Muss behoben werden** – je Punkt: was, wo, warum (mit §).
3. **Bitte ansehen** – Hinweise.
4. **Geprüft und in Ordnung** – kurz.
5. **Nicht geprüft** – ehrlich benennen (z. B. hörbares Vorlesen, echtes Handy, Prüfgruppe §13).

Nichts veröffentlichen, committen oder pushen ohne ausdrückliche Freigabe (§16.7).
