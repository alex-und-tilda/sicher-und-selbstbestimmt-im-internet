# Ersteller-Auffindbarkeit – Prüfbericht

## Ziel

Frank Runge soll als Ersteller im Zusammenhang mit digitaler Bildung,
digitaler Teilhabe, Medienkompetenz und barrierearmen Lernangeboten
besser in der Google-Suche auffindbar sein.

## Umgesetzt

- Sichtbarer Ersteller-Hinweis auf der Hauptseite.
- Eigene statische Ersteller-Seite: `ersteller.html`.
- Link von der Hauptseite zur Ersteller-Seite.
- Link im Footer zur Ersteller-Seite.
- Meta-Daten auf der Ersteller-Seite.
- Schema.org Person-Daten für Frank Runge.
- Suchbegriffe auf der Ersteller-Seite.
- Sitemap-Eintrag für `ersteller.html`.

## Wichtig

Für Google ist sichtbarer Text wichtiger als nur Meta-Tags.
Darum gibt es jetzt eine eigene indexierbare Ersteller-Seite.

Google garantiert keine sofortige Indexierung.
Die Sitemap sollte in der Google Search Console eingereicht werden.

## Prüfung

```json
{
  "app_js_syntax": true,
  "topics_js_syntax": true,
  "visible_creator_on_index": true,
  "creator_footer_link": true,
  "creator_page_exists": true,
  "creator_page_has_person_schema": true,
  "sitemap_has_creator_page": true,
  "no_localStorage": true,
  "no_cookies": true
}
```
