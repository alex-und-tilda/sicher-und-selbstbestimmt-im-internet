# Sicher digital lernen – 8 Themen

Diese GitHub-Version enthält eine kleine barrierearme Lernplattform mit 8 Themen:

1. Datenschutz
2. WhatsApp
3. Facebook
4. Instagram
5. YouTube
6. Snapchat
7. TikTok
8. Hilfe bei Problemen

## Dateien

- `index.html` – Grundstruktur
- `styles.css` – Gestaltung
- `app.js` – Inhalte und Logik

## Veröffentlichung mit GitHub Pages

1. Neues GitHub-Repository erstellen.
2. Diese Dateien hochladen:
   - `index.html`
   - `styles.css`
   - `app.js`
3. In GitHub öffnen:
   - Settings
   - Pages
4. Einstellungen:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /root
5. Speichern.
6. Danach wird eine GitHub-Pages-Adresse angezeigt.

## Kahoot-Links ändern

In `app.js` hat jedes Thema einen eigenen Quiz-Link.

Suche nach:

```js
"quiz": "https://kahoot.com"
```

Ersetze den Link durch den echten Kahoot-Link für das jeweilige Thema.

## Datenschutz

Die Seite fragt keine privaten Daten ab.
Die Seite speichert keine Namen.
Die Übungen laufen nur im Browser.
