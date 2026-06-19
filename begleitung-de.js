/* ============================================================
   Begleit-Ebene „Für Begleitpersonen und Fachkräfte"
   (Fachsprache Eingliederungshilfe)

   Eigene, klar getrennte Ebene – KEINE Sprach-Stufe für Lernende.
   Sie erscheint als aufklappbares Panel im Themen-Einstieg und
   richtet sich an Betreuende, Assistenz, Angehörige und Fachkräfte.

   Aufbau:  COMPANION[themaId] = { lernziele[], methodik[],
            gespraechsanlaesse[], begleithinweise[], rechtsbezuege[], transfer[] }
   Verknüpfung am Ende: applyCompanion() hängt es als topic.companion an.
   ============================================================ */

const COMPANION = {
  datenschutz: {
    lernziele: [
      "Die Teilnehmenden erkennen, welche Informationen als private bzw. personenbezogene Daten gelten.",
      "Sie wissen, warum Passwort, PIN und Zugangsdaten geheim bleiben.",
      "Sie können im Alltag entscheiden, welche Daten sie weitergeben – und welche nicht.",
      "Sie kennen einen Handlungsschritt, wenn jemand unter Druck nach Daten fragt: Stopp – nicht sofort reagieren – Hilfe holen."
    ],
    methodik: [
      "Lebensweltorientierung: Beispiele aus dem Alltag der Teilnehmenden aufgreifen (eigenes Handy, Lieblings-App, echte Nachrichten).",
      "Micro-Learning: pro Einheit nur ein Lernschritt; Pausen aktiv anbieten (die Pause-Funktion nutzen).",
      "Aktivierung statt Berieselung: vor der Lösung erst selbst einschätzen lassen (Quiz, Daumen hoch oder runter).",
      "Sicherung: die Merk-Karte gemeinsam laut lesen, ausdrucken und sichtbar aufhängen.",
      "Tandem und Peer: in Zweier-Teams arbeiten; eine geübtere Person begleitet.",
      "Wertschätzendes Feedback: Fehler sind erlaubt und normal; richtige Entscheidungen ausdrücklich loben."
    ],
    gespraechsanlaesse: [
      "Welche Daten von dir kennen andere Menschen schon? Welche möchtest du für dich behalten?",
      "Wem würdest du dein Passwort geben – und warum ist niemand die beste Antwort?",
      "Was machst du, wenn eine Nachricht dich drängt, schnell etwas zu schicken?"
    ],
    begleithinweise: [
      "Auf Belastung achten: Betrugs- und Druck-Beispiele können verunsichern. Ruhig bleiben, normalisieren („Das passiert vielen Menschen“), bei Bedarf pausieren.",
      "Keine echten Passwörter oder Daten im Kurs eingeben lassen – immer nur Beispiele verwenden.",
      "Selbstbestimmung wahren: Die Teilnehmenden entscheiden selbst; die Begleitperson berät, übernimmt aber nicht.",
      "Bei realen Vorfällen (Betrug, Datendiebstahl) konkrete Hilfe organisieren statt nur darüber zu sprechen."
    ],
    rechtsbezuege: [
      "UN-Behindertenrechtskonvention, Artikel 9 (Zugänglichkeit) und Artikel 21 (Zugang zu Informationen): Grundlage für barrierefreie digitale Teilhabe.",
      "SGB IX: Teilhabe und Selbstbestimmung als Leitprinzip der Eingliederungshilfe.",
      "KDG (Katholisches Datenschutzgesetz): maßgeblich beim kirchlichen Träger; das Grundprinzip Datensparsamkeit wird hier didaktisch vermittelt.",
      "Anschluss an die Tilbecker Tandem- und TeBI-Methodik (Lernen in Begleitung)."
    ],
    transfer: [
      "Gemeinsam die Privatsphäre-Einstellungen am eigenen Gerät anschauen.",
      "Eine echte verdächtige Nachricht – falls vorhanden – zusammen einordnen, ohne auf Links zu klicken.",
      "Notfall-Kontakte griffbereit notieren: Vertrauensperson und Sperr-Notruf 116 116."
    ]
  }
};

/* Begleit-Material an die Themen in topics.js hängen */
function applyCompanion() {
  if (typeof topics === "undefined" || !Array.isArray(topics)) return;
  topics.forEach((topic) => {
    const c = COMPANION[topic.id];
    if (c) topic.companion = c;
  });
}

applyCompanion();
