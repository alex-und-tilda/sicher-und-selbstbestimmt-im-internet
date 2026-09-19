---
name: leichte-sprache
description: Texte der Lern-Plattform in Leichter Sprache (Ebene „leicht“) und Einfacher Sprache (Ebene „einfach“) schreiben oder prüfen – nach PROJEKTREGELN.md §5, §6, §8 und §13. Verwenden, sobald Lern-Texte, Knopf-Wörter, Hinweise oder Rückmeldungen neu geschrieben oder geändert werden (topics.js, content-de.js, ketten-de.js, alltag-de.js, szenarien-de.js, uebungen-de.js, regeln-de.js, app.js-Etiketten) oder wenn die nutzende Person eine Prüfung auf Leichte Sprache wünscht.
---

# Leichte Sprache

Die Regeln stehen **nur** in `PROJEKTREGELN.md`: §5 Leichte Sprache, §6 Einfache Sprache, §8 Anrede „du“, §2 drei Ebenen, §13 Prüfgruppe, §18a Bildsprache in Takt-Texten. Vor der Arbeit §5 und §6 dort lesen. Dieser Skill beschreibt nur den **Ablauf**.

Das Programm findet **Verdachts-Stellen**. Es entscheidet nichts. Jeder Treffer wird im Zusammenhang beurteilt. Die Prüfgruppe ersetzt es nicht (§13).

## A. Vorhandene Texte prüfen

```bash
# ein Thema aus topics.js (Basistext = Leichte Sprache)
node .claude/skills/leichte-sprache/leicht-pruefen.cjs --thema datenschutz
# alle Themen
node .claude/skills/leichte-sprache/leicht-pruefen.cjs --alle
# einzelner Text
node .claude/skills/leichte-sprache/leicht-pruefen.cjs --text "Ich klicke nicht auf Links."
# mehrere Zeilen (z. B. aus alltag-de.js oder ketten-de.js herausgesuchte Leicht-Texte)
printf '%s\n' "Satz eins." "Satz zwei." | node .claude/skills/leichte-sprache/leicht-pruefen.cjs
```

Bei Änderungen nur die **geänderten** Texte prüfen, nicht alles – sonst wird der Bericht unübersichtlich.

Dann jede Fundstelle beurteilen:
- **Echter Verstoß** → Vorschlag machen.
- **Erlaubte Ausnahme** → kurz begründen. Typisch: gewolltes Betrugs-Zitat mit Passiv oder Ausrufe-Zeichen (§5, §15), feststehender Begriff wie „Zwei-Faktor“, der Handlungssatz `tun` in `ketten-de.js` (§2).
- **Fehlalarm des Programms** → weglassen.

Zusätzlich von Hand prüfen, was ein Programm nicht sieht:
- **Ein Wort für eine Sache** im ganzen Thema (nicht mal „Handy“, mal „Smartphone“).
- **Fach- und Fremdwörter** erklärt oder im Glossar (`GLOSSAR` in `app.js`).
- **Tun-Wörter statt Haupt-Wörter**, **eine Aussage pro Satz**.
- **Keine bildliche Sprache**, auch nicht versteckt („Deine Hand will tippen“, §18a).
- **Haltung** (§4): wertschätzend, nicht belehrend, nicht kindlich. Kein pauschales Lob (siehe `RUECKMELDUNG` in `app.js`).
- **Belastende Themen** (§3): ruhig, sofort die handlungsfähige Botschaft.

## B. Neue Texte schreiben

1. Zuerst die **Leichte-Sprache-Fassung** schreiben (§5), dann **Einfach** (§6, sichtbar voller, verbundene Sätze erlaubt), dann **Standard**. Alle drei inhaltlich gleich (§2).
2. Leicht-Fassung mit dem Programm prüfen, Treffer beurteilen.
3. Einfach-Fassung gegenlesen: Ist sie wirklich voller als Leicht, aber ohne Schachtelsätze?
4. **Neue Oberflächen-Wörter** (Knöpfe, Chips, Überschriften) zentral ablegen und in §18.8 als Prüfpunkt vorschlagen (§13). Logo-relevante Texte ausdrücklich flaggen (§5).

## Bericht
Auf Deutsch, einfach. Je Fundstelle eine Zeile: **Ort · Satz · Problem · Vorschlag**. Getrennt nach „Bitte ändern“, „Ausnahme, bleibt so“ und „Für die Prüfgruppe“. Texte erst nach Rückfrage ändern (§16.2).
