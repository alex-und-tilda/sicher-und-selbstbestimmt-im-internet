# Konzept: Drei Sprachstufen für die Lernplattform

**Ziel:** Nutzerinnen und Nutzer wählen am Start, in welcher Sprachstufe sie lernen.
Jede Stufe folgt eigenen, anerkannten Regeln – im Text **und** in der Darstellung.

Die drei Stufen:

1. **Leichte Sprache** – nach DIN SPEC 33429 / Netzwerk Leichte Sprache
2. **Einfache Sprache** – Plain Language (ISO 24495), etwa Sprachniveau B1
3. **Standardsprache** – normales Alltagsdeutsch für Menschen ohne Behinderung

---

## 1. Die Regeln je Stufe

### Leichte Sprache (strengste Regeln)

Text:
- Ein Gedanke pro Satz. Sehr kurze Sätze.
- Keine Nebensätze. Aktiv statt Passiv.
- Nur bekannte Wörter. Schwere Wörter werden erklärt.
- Keine Abkürzungen, keine Fremdwörter.
- Lange Wörter werden getrennt: *Daten‑Schutz*, *Pass‑Wort*.
- Zahlen als Ziffern (3, nicht „drei"). Keine Sonderzeichen.
- Persönliche Anrede: „du".

Darstellung:
- Große Schrift, linksbündig (Flattersatz), viel Zeilenabstand.
- **Ein Piktogramm je Aussage** (Bild links, Satz rechts).
- Eine Aussage pro Zeile.

Wichtig: Echte Leichte Sprache wird idealerweise von der **Zielgruppe geprüft**
(Prüf‑Lesende). Unsere Texte sind ein fachlich sauberer Entwurf für diese Prüfung.

### Einfache Sprache (mittlere Stufe)

Text:
- Kurze, klare Sätze – ein einfacher Nebensatz ist erlaubt.
- Größerer Wortschatz, aber gängig. Fachwörter werden kurz erklärt.
- Aktiv, klare Reihenfolge, konkrete Beispiele.
- Keine unnötigen Abkürzungen.

Darstellung:
- Normale, gut lesbare Schrift.
- Unterstützende Bilder möglich, aber **kein Piktogramm‑Zwang**.
- Absätze statt Einzelzeilen.

### Standardsprache (Alltagssprache)

Text:
- Normales Deutsch in Fließtext und Absätzen.
- Fachbegriffe dürfen verwendet werden (bei Bedarf kurz erklärt).
- Sachlich, erwachsenengerecht, ohne Vereinfachung.

Darstellung:
- Fließtext, keine Piktogramme.
- Optional eine Illustration je Lektion.

---

## 2. Datenmodell (so wird es in `topics.js` gespeichert)

Jede Lektion bekommt einen Block `versions` mit den drei Stufen.
So bleibt jede Stufe sauber getrennt und einzeln pflegbar.

```js
{
  "title": "Was sind private Daten?",
  "icon": "data",
  "versions": {
    "leicht": {
      "text": [
        { "text": "Manche Daten sind privat.", "pictogram": "pikto-data" },
        { "text": "Privat heißt: Die Daten gehören nur dir.", "pictogram": "pikto-lock" }
      ],
      "remember": "Private Daten schütze ich gut."
    },
    "einfach": {
      "text": [
        { "text": "Private Daten gehören nur dir. Zum Beispiel dein Name oder dein Passwort." }
      ],
      "remember": "Ich gebe meine privaten Daten nur an Menschen, denen ich vertraue."
    },
    "standard": {
      "text": [
        { "text": "Als private Daten bezeichnet man Informationen, die einer einzelnen Person zugeordnet sind – etwa Name, Adresse, Geburtsdatum oder Passwörter. Sie verdienen besonderen Schutz." }
      ],
      "remember": "Personenbezogene Daten sollten bewusst und sparsam preisgegeben werden."
    }
  }
}
```

**Fallback:** Fehlt eine Stufe noch, zeigt die App automatisch die Stufe
*Leichte Sprache* an. So bleibt die Seite während des Ausrollens jederzeit funktionsfähig.

---

## 3. Ablauf am Start (Bedienung)

1. **Neuer erster Bildschirm:** „Wie möchtest du lernen?" mit drei großen Karten:
   - 🟦 **Leichte Sprache** – „Kurze Sätze. Mit Bildern."
   - 🟩 **Einfache Sprache** – „Etwas mehr Text. Mit Beispielen."
   - 🟧 **Alltagssprache** – „Normaler Text für alle."
2. Danach wie gewohnt: Themen‑Übersicht → Thema → Lernweg.
3. Die gewählte Stufe steht oben im Kopf und ist **jederzeit umstellbar**
   (in der Hilfe‑Leiste). Die Wahl wird gemerkt.

Der bisherige „Einfach‑Modus"-Schalter geht in dieser klaren 3‑Stufen‑Wahl auf.

---

## 4. Piktogramme: ARASAAC

- Quelle: **ARASAAC** (arasaac.org), Regierung von Aragón (Spanien).
- Lizenz: **CC BY‑NC‑SA 4.0** – kostenlos, mit Quellenangabe, **nur nicht‑kommerziell**.
- Pflicht‑Hinweis (kommt in Impressum/Fußzeile):
  > Piktogramme: ARASAAC (arasaac.org), Urheber Sergio Palao, Regierung von Aragón, Lizenz CC BY‑NC‑SA.
- Einsatz: nur in **Leichter** (und optional Einfacher) Sprache. Standardsprache ohne Piktogramme.
- Zuordnung: für jede wiederkehrende Aussage ein festes, eindeutiges Piktogramm
  (z. B. Daten, Passwort/Schloss, Achtung, Stopp, Hilfe, Foto, Nachricht, Geld, Betrug, KI).

> Bitte bestätige: Das Projekt ist **nicht‑kommerziell** (kostenlos, Bildungszweck)?
> Dann passt die ARASAAC‑Lizenz. Falls später kommerziell, brauchen wir eine andere Lösung.

---

## 5. Beispiel: Thema „Datenschutz", Lektion „Was sind private Daten?"

**Leichte Sprache**
> 🔒 Manche Daten sind privat.
> 📄 Privat heißt: Die Daten gehören nur dir.
> ⚠️ Zum Beispiel: dein Pass‑Wort.
> ⚠️ Oder deine Adresse.
> ✅ Diese Daten schützt du gut.
>
> **Das merke ich mir:** Private Daten schütze ich gut.

**Einfache Sprache**
> Private Daten gehören nur dir. Dazu zählen zum Beispiel dein Name, deine Adresse
> und dein Passwort. Solche Daten solltest du nicht an Fremde weitergeben.
>
> **Das merke ich mir:** Ich gebe meine privaten Daten nur an Menschen, denen ich vertraue.

**Standardsprache**
> Als private oder personenbezogene Daten gelten alle Informationen, die sich einer
> bestimmten Person zuordnen lassen – etwa Name, Anschrift, Geburtsdatum oder
> Zugangsdaten. Weil sich daraus Rückschlüsse auf eine Person ziehen lassen, genießen
> sie besonderen Schutz und sollten bewusst und sparsam preisgegeben werden.
>
> **Merksatz:** Personenbezogene Daten sollten bewusst und sparsam preisgegeben werden.

---

## 6. Vorgehen für alle 12 Themen

1. **Gerüst zuerst** (einmalig): Datenmodell, Start‑Auswahl, ARASAAC einbinden.
2. **Thema für Thema** in 3 Stufen verfassen – Reihenfolge:
   Datenschutz → WhatsApp → Facebook → Instagram → YouTube → Snapchat →
   TikTok → Hilfe → KI → Fake News → Betrug → Einkaufen.
3. Nach jedem Thema kurze Prüfung (Regeln, Piktogramme, Kontrast).
4. Empfehlung: Leichte‑Sprache‑Texte später von Prüf‑Lesenden gegenlesen lassen.

> Die zwölf Themen in drei Stufen sind viel Inhalt. Ich baue zuerst das Gerüst und
> liefere **Datenschutz komplett** als Muster. Passt das Muster, ziehe ich die
> übrigen elf im selben Schema durch.
