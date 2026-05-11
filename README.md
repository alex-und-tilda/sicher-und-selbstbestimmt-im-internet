# Sicher digital lernen – 8 Themen mit je 39 Lernseiten

Diese GitHub-Version enthält eine kleine barrierearme Lernplattform mit 8 Themen.

## Themen

1. Datenschutz
2. WhatsApp
3. Facebook
4. Instagram
5. YouTube
6. Snapchat
7. TikTok
8. Hilfe bei Problemen

## Didaktische Struktur pro Thema

Jedes Thema hat 39 kurze Lernseiten nach gleicher Lernlogik:

1. Verstehen und Alltag
2. Private Daten
3. Inhalte / Fotos / Stimme / Beiträge
4. Risiken / Links / Betrug / Druck
5. Gutes Verhalten
6. Schutz und Hilfe
7. Datenschutz-Hinweis, Wiederholung, Quiz

## Dateien

- `index.html` – Grundstruktur
- `styles.css` – Gestaltung
- `topics.js` – alle Inhalte
- `app.js` – Lernlogik
- `README.md` – Anleitung

## GitHub Pages

1. Neues Repository erstellen.
2. Alle Dateien hochladen:
   - `index.html`
   - `styles.css`
   - `topics.js`
   - `app.js`
   - `README.md`
3. GitHub öffnen:
   - Settings
   - Pages
4. Einstellungen:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /root
5. Speichern.
6. Die GitHub-Pages-Adresse nutzen.

## Kahoot-Links ändern

In `topics.js` hat jedes Thema einen eigenen Quiz-Link.

Suche nach:

```js
"quiz": "https://kahoot.com"
```

Ersetze den Link beim jeweiligen Thema durch den echten Kahoot-Link.

## Datenschutz

Die Seite fragt keine privaten Daten ab.
Die Seite speichert keine Namen.
Die Übungen laufen nur im Browser.
