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
  },

  whatsapp: {
    lernziele: [
      "Die Teilnehmenden nutzen WhatsApp für Nachrichten, Fotos und Gruppen und entscheiden selbst, wem sie antworten.",
      "Sie erkennen Betrugsmaschen wie den „Hallo-Mama-Trick“ und reagieren nicht vorschnell.",
      "Sie geben Bestätigungs-Codes und Geld nicht an fremde Nummern weiter.",
      "Sie wissen, dass die KI Meta AI kein Mensch ist."
    ],
    methodik: [
      "Lebensweltorientierung: am echten WhatsApp der Teilnehmenden zeigen, mit Beispiel-Chats statt echter Kontakte.",
      "Micro-Learning: ein Trick pro Einheit; Pausen aktiv anbieten.",
      "Aktivierung: echte und gefälschte Nachrichten vergleichen lassen („echt oder Betrug?“).",
      "Rollenspiel im Tandem: eine Person schreibt eine Betrugs-Nachricht, die andere reagiert sicher.",
      "Sicherung: Merk-Karte gemeinsam lesen und sichtbar aufhängen."
    ],
    gespraechsanlaesse: [
      "Hast du schon einmal eine Nachricht von einer unbekannten Nummer bekommen? Was hast du gemacht?",
      "Was würdest du tun, wenn „deine Tochter“ mit neuer Nummer dringend Geld will?",
      "Welche Dinge gehören in eine Gruppe – und welche nicht?"
    ],
    begleithinweise: [
      "Geld- und Betrugsthemen können Angst machen: ruhig bleiben, normalisieren, bei Bedarf pausieren.",
      "Keine echten Codes oder Bankdaten verwenden – nur Beispiele.",
      "Bei realem Betrugsverdacht sofort konkrete Hilfe organisieren (Bank, Vertrauensperson, Anzeige)."
    ],
    rechtsbezuege: [
      "UN-BRK Artikel 9 und 21: barrierefreie Kommunikation und Information.",
      "SGB IX: Selbstbestimmung und Schutz vor Ausnutzung.",
      "KDG: Datensparsamkeit; keine sensiblen Daten in Chats.",
      "Betrug ist strafbar (§ 263 StGB) – im Schadensfall Anzeige möglich."
    ],
    transfer: [
      "Gemeinsam die Datenschutz-Einstellungen in WhatsApp anschauen (Profilbild, Zuletzt-online, Gruppen).",
      "Eine unbekannte Nummer gemeinsam blockieren üben.",
      "Sperr-Notruf 116 116 und Vertrauensperson notieren."
    ]
  },

  facebook: {
    lernziele: [
      "Die Teilnehmenden gestalten ihr Profil so, dass private Angaben nicht öffentlich sind.",
      "Sie prüfen Freundschafts-Anfragen und nehmen nicht jede an.",
      "Sie schreiben respektvoll und holen sich bei Beleidigungen Hilfe."
    ],
    methodik: [
      "Lebensweltorientierung: am eigenen oder einem Beispiel-Profil zeigen.",
      "Aktivierung: „öffentlich oder privat?“ – Angaben gemeinsam einsortieren.",
      "Micro-Learning und Sicherung über die Merk-Karte.",
      "Tandem und Peer: Privatsphäre-Einstellungen zu zweit durchgehen."
    ],
    gespraechsanlaesse: [
      "Welche Angaben in deinem Profil sollen alle sehen – welche nur Freunde?",
      "Wie erkennst du ein echtes von einem falschen Profil?",
      "Was tust du, wenn dich jemand im Internet beleidigt?"
    ],
    begleithinweise: [
      "Beleidigungen und Cyber-Mobbing ernst nehmen; Gefühlen Raum geben.",
      "Einstellungen sind komplex – die Begleitperson unterstützt, entscheidet aber nicht für die Person.",
      "Bei Mobbing dokumentieren (Screenshot), melden, blockieren, Hilfe holen."
    ],
    rechtsbezuege: [
      "UN-BRK Artikel 21: Zugang zu Information und Meinungsäußerung.",
      "SGB IX: Teilhabe und Selbstbestimmung.",
      "KDG und Datenschutz: sparsam mit öffentlichen Angaben.",
      "Beleidigung ist strafbar (§ 185 StGB)."
    ],
    transfer: [
      "Privatsphäre-Einstellungen gemeinsam auf „Freunde“ stellen.",
      "Eine Freundschafts-Anfrage gemeinsam prüfen.",
      "Blockieren und Melden einmal zusammen ausprobieren."
    ]
  },

  instagram: {
    lernziele: [
      "Die Teilnehmenden prüfen Fotos und Videos vor dem Posten und achten auf den Hintergrund.",
      "Sie schützen ihren Standort und antworten Fremden nicht vorschnell.",
      "Sie wissen, dass viele Bilder bearbeitet sind, und vergleichen sich nicht damit."
    ],
    methodik: [
      "Lebensweltorientierung an echten Posts und Stories.",
      "Aktivierung: „Was sieht man auf diesem Foto noch?“ – Hintergrund-Suche.",
      "Medienkritik: echtes und bearbeitetes Bild vergleichen.",
      "Sicherung über Merk-Karte; Tandem beim Einstellen."
    ],
    gespraechsanlaesse: [
      "Was kann man auf deinem Foto im Hintergrund erkennen?",
      "Warum teilst du deinen Standort besser nicht mit allen?",
      "Glaubst du, dass alle Bilder auf Instagram echt sind?"
    ],
    begleithinweise: [
      "Selbstwert-Thema (bearbeitete Bilder) behutsam begleiten, nicht abwerten.",
      "Bei privaten Nachrichten von Fremden auf Anzeichen von Grooming achten und ernst nehmen.",
      "Keine privaten Bilder erstellen oder teilen lassen."
    ],
    rechtsbezuege: [
      "UN-BRK Artikel 9 und 21: digitale Teilhabe und Schutz.",
      "SGB IX: Selbstbestimmung.",
      "Recht am eigenen Bild: Einwilligung abgebildeter Personen; KDG.",
      "Bei sexueller Belästigung: Schutzauftrag, sofort Hilfe holen."
    ],
    transfer: [
      "Standortfreigabe gemeinsam ausschalten.",
      "Privates Konto einstellen (nur bestätigte Follower).",
      "Eine fremde Nachricht gemeinsam einordnen und blockieren."
    ]
  },

  youtube: {
    lernziele: [
      "Die Teilnehmenden prüfen Video-Aussagen kritisch und glauben nicht alles sofort.",
      "Sie erkennen Werbung und lassen sich nicht zu Käufen drängen.",
      "Sie machen bewusst Pausen und machen gefährliche Mutproben nicht nach."
    ],
    methodik: [
      "Lebensweltorientierung an Lieblings-Videos.",
      "Aktivierung: „Stimmt das wirklich?“ – Aussagen gemeinsam prüfen.",
      "Zeitbewusstsein: Autoplay thematisieren, Pausen einplanen.",
      "Sicherung über Merk-Karte."
    ],
    gespraechsanlaesse: [
      "Hast du in einem Video schon mal etwas gesehen, das nicht stimmen konnte?",
      "Wie merkst du, dass ein Video Werbung ist?",
      "Was machst du, wenn ein Video dir Angst macht?"
    ],
    begleithinweise: [
      "Angst machende oder gefährliche Inhalte (Challenges) ernst nehmen und einordnen.",
      "Mediennutzungszeit beobachten, ohne zu bevormunden.",
      "Bei verstörenden Inhalten Gespräch und Pause anbieten."
    ],
    rechtsbezuege: [
      "UN-BRK Artikel 21: Zugang zu Information und kritische Medienkompetenz.",
      "SGB IX: Teilhabe, Gesundheit, Selbstbestimmung.",
      "Verbraucher- und Jugendschutz: Werbung muss erkennbar sein."
    ],
    transfer: [
      "Autoplay gemeinsam ausschalten.",
      "Eine Werbung im Video zusammen erkennen.",
      "Eine feste Pausen-Regel vereinbaren, zum Beispiel nach 20 Minuten."
    ]
  },

  snapchat: {
    lernziele: [
      "Die Teilnehmenden wissen, dass „verschwindende“ Bilder gespeichert werden können.",
      "Sie schützen ihren Standort und lassen sich nicht zu privaten Bildern drängen.",
      "Sie erkennen Geheimhaltungs-Druck als Warnzeichen und holen Hilfe."
    ],
    methodik: [
      "Lebensweltorientierung an echter Nutzung.",
      "Aktivierung: „Was passiert mit dem Bild wirklich?“",
      "Klares Stopp- und Nein-Training (Rollenspiel).",
      "Sicherung über Merk-Karte; Tandem und Peer."
    ],
    gespraechsanlaesse: [
      "Glaubst du, ein Snap ist wirklich für immer weg?",
      "Was machst du, wenn jemand ein Bild will und sagt: erzähl es niemandem?",
      "Wer soll sehen, wo du gerade bist?"
    ],
    begleithinweise: [
      "Sensibles Thema (Druck zu intimen Bildern, Sextortion): ernst nehmen, nicht beschämen, Schutz organisieren.",
      "Snap Map und Standort gemeinsam prüfen.",
      "Bei Druck oder Erpressung: nicht zahlen, sichern, Hilfe und gegebenenfalls Polizei."
    ],
    rechtsbezuege: [
      "UN-BRK Artikel 9 und 21 sowie Schutzrechte.",
      "SGB IX: Selbstbestimmung und Schutz vor Ausnutzung.",
      "Recht am eigenen Bild; bei Minderjährigen Schutzauftrag.",
      "Erpressung und Nötigung sind strafbar (§§ 240, 253 StGB)."
    ],
    transfer: [
      "Standort (Snap Map) gemeinsam auf den „Geistmodus“ stellen.",
      "Einen Stopp- und Nein-Satz gemeinsam üben.",
      "Vertrauensperson und Hilfe-Kontakte notieren."
    ]
  },

  tiktok: {
    lernziele: [
      "Die Teilnehmenden erkennen gefährliche Trends und machen sie nicht nach.",
      "Sie schützen private Daten und antworten Fremden nicht vorschnell.",
      "Sie machen bewusst Pausen und erkennen den Sog des Algorithmus.",
      "Sie wissen, dass viele Videos mit KI gefälscht sein können."
    ],
    methodik: [
      "Lebensweltorientierung an echten Trends.",
      "Aktivierung: Trend einschätzen – „lustig oder gefährlich?“",
      "Sog des Algorithmus und Zeitgefühl thematisieren.",
      "Sicherung über Merk-Karte; Tandem und Peer."
    ],
    gespraechsanlaesse: [
      "Welche Trends hast du zuletzt gesehen? Welche wären gefährlich?",
      "Warum schaut man bei TikTok oft so lange?",
      "Wie erkennst du, dass ein Video gefälscht sein könnte?"
    ],
    begleithinweise: [
      "Gruppendruck bei Challenges ernst nehmen; Selbstwirksamkeit stärken („ich muss nicht mitmachen“).",
      "Mediennutzungszeit begleiten; Gefühle nach Videos besprechen.",
      "Keine privaten Daten in Kommentaren oder Direktnachrichten."
    ],
    rechtsbezuege: [
      "UN-BRK Artikel 21; SGB IX (Teilhabe, Gesundheit, Selbstbestimmung).",
      "KDG und Datenschutz; Jugendschutz bei gefährlichen Inhalten."
    ],
    transfer: [
      "Eine Bildschirmzeit-Grenze gemeinsam einstellen.",
      "Privates Konto einstellen.",
      "Einen gefährlichen Trend gemeinsam als „nicht nachmachen“ einordnen."
    ]
  },

  hilfe: {
    lernziele: [
      "Die Teilnehmenden wenden die Stopp-Regel an: erst stoppen, dann überlegen.",
      "Sie löschen verdächtige Nachrichten nicht sofort, sondern sichern und zeigen sie.",
      "Sie holen sich aktiv Hilfe bei einer Vertrauensperson oder Beratungsstelle."
    ],
    methodik: [
      "Quer-Thema: als Anker bei allen anderen Themen mitnutzen.",
      "Handlungs-Plan einüben: Stopp – nicht antworten – sichern – zeigen – Hilfe.",
      "Rollenspiel: Hilfe holen üben (was sage ich, wen frage ich?).",
      "Sicherung über Merk-Karte; Notfall-Kontakte sichtbar machen."
    ],
    gespraechsanlaesse: [
      "An wen kannst du dich wenden, wenn im Internet etwas schiefgeht?",
      "Warum ist es manchmal besser, eine Nachricht nicht sofort zu löschen?",
      "Was hilft dir, ruhig zu bleiben?"
    ],
    begleithinweise: [
      "Sicheren, vorwurfsfreien Rahmen schaffen: Hilfe holen ist Stärke, nicht Versagen.",
      "Konkrete regionale Beratungs- und Notfall-Kontakte bereithalten.",
      "Bei akuten Vorfällen sofort handeln, nicht nur besprechen."
    ],
    rechtsbezuege: [
      "UN-BRK Artikel 9 und 21: Zugänglichkeit und Unterstützung.",
      "SGB IX: Anspruch auf Unterstützung, Assistenz und Teilhabe.",
      "KDG; Schutzkonzepte des Trägers einbeziehen."
    ],
    transfer: [
      "Eine persönliche Notfall-Karte erstellen (Vertrauensperson, 116 116, Polizei 110).",
      "Einen Screenshot gemeinsam üben.",
      "Den Hilfe-Knopf der Plattform zeigen und ausprobieren."
    ]
  },

  ki: {
    lernziele: [
      "Die Teilnehmenden wissen, dass KI ein Programm ist, kein Mensch.",
      "Sie prüfen wichtige KI-Antworten und geben keine privaten Daten ein.",
      "Sie holen bei Gesundheit und Geld zusätzlich menschlichen Rat.",
      "Sie wissen, dass KI Bilder und Stimmen fälschen kann."
    ],
    methodik: [
      "Lebensweltorientierung: einen echten Chatbot mit harmlosen Fragen gemeinsam ausprobieren.",
      "Aktivierung: eine KI-Antwort gemeinsam prüfen – stimmt das?",
      "Grenzen erfahrbar machen (die KI erfindet etwas).",
      "Sicherung über Merk-Karte."
    ],
    gespraechsanlaesse: [
      "Hast du schon mit einer KI geschrieben? Wie war das?",
      "Würdest du der KI dein Passwort sagen – warum nicht?",
      "Wem glaubst du bei einer Gesundheits-Frage mehr: der KI oder der Ärztin?"
    ],
    begleithinweise: [
      "Parasozialen Bezug ansprechen: Ein Chatbot ist kein Freund und keine Therapie.",
      "Keine echten privaten Daten eingeben lassen.",
      "Bei emotionaler Abhängigkeit von Chatbots aufmerksam sein und das Gespräch suchen."
    ],
    rechtsbezuege: [
      "UN-BRK Artikel 21: Zugang zu Information und kritische Nutzung.",
      "SGB IX: Selbstbestimmung; KDG und Datenschutz bei KI-Eingaben.",
      "Bezug zum Thema Fake News und Deepfakes."
    ],
    transfer: [
      "Eine KI-Antwort gemeinsam an einer zweiten Quelle prüfen.",
      "Ein Plakat erstellen: „Das sage ich der KI nicht“.",
      "Meta AI in WhatsApp gemeinsam am blauen Kreis erkennen."
    ]
  },

  fakes: {
    lernziele: [
      "Die Teilnehmenden wissen, dass nicht alles im Internet wahr ist.",
      "Sie erkennen, dass Bilder, Videos und Stimmen gefälscht sein können.",
      "Sie behandeln starke Gefühle als Warnzeichen und prüfen vor dem Teilen."
    ],
    methodik: [
      "Aktivierung: echtes und gefälschtes Bild oder Video vergleichen.",
      "Quellen-Check einüben: wer, wo noch, wie alt, welche Quelle.",
      "Emotions-Stopp: bei Wut oder Angst erst prüfen.",
      "Sicherung über Merk-Karte."
    ],
    gespraechsanlaesse: [
      "Hast du schon mal etwas geglaubt, das nicht stimmte?",
      "Wie fühlst du dich, wenn eine Nachricht dich wütend macht?",
      "Wie kannst du prüfen, ob etwas wahr ist?"
    ],
    begleithinweise: [
      "Politische und emotionale Inhalte neutral und altersgerecht begleiten.",
      "Verschwörungs- und Angst-Themen ernst, aber entlastend einordnen.",
      "Nicht beschämen, wenn jemand etwas geglaubt oder geteilt hat."
    ],
    rechtsbezuege: [
      "UN-BRK Artikel 21: Zugang zu verlässlicher Information und Meinungsbildung.",
      "SGB IX: Teilhabe und politische Selbstbestimmung.",
      "Medienkompetenz als Bildungsauftrag."
    ],
    transfer: [
      "Eine aktuelle Meldung gemeinsam mit dem Fragen-Check prüfen.",
      "„Erst prüfen, dann teilen“ als Regel aufhängen.",
      "Eine seriöse Nachrichten-Quelle gemeinsam aussuchen."
    ]
  },

  betrug: {
    lernziele: [
      "Die Teilnehmenden erkennen Phishing, Paket-Trick, Hallo-Mama-Trick, Schockanrufe, falsche Gewinne und Abo-Fallen.",
      "Sie geben keine Codes oder Bankdaten weiter und rufen bei Geldforderungen selbst zurück.",
      "Sie wissen, was nach einem Betrug zu tun ist (Karte sperren, Hilfe, Anzeige)."
    ],
    methodik: [
      "Aktivierung: Warnzeichen in Beispiel-Nachrichten suchen.",
      "Rollenspiel: einen Schockanruf sicher beenden.",
      "Notfall-Plan einüben; Merk-Karte sichern.",
      "Lebensweltorientierung an realen, aktuellen Maschen."
    ],
    gespraechsanlaesse: [
      "Welche Betrugsmasche hast du schon einmal gehört oder erlebt?",
      "Was machst du, wenn am Telefon jemand dringend Geld will?",
      "Warum kosten echte Gewinne kein Geld?"
    ],
    begleithinweise: [
      "Scham- und Angstthema: betont entlastend begleiten („Betrug ist nicht deine Schuld“).",
      "Keine echten Bankdaten verwenden.",
      "Bei realem Schaden sofort handeln: Bank und Sperr-Notruf 116 116, Anzeige, Vertrauensperson."
    ],
    rechtsbezuege: [
      "Betrug (§ 263 StGB), Computerbetrug (§ 263a), Erpressung (§ 253) – strafbar.",
      "UN-BRK Artikel 16: Schutz vor Ausbeutung; SGB IX: Schutz und Teilhabe.",
      "KDG und Datenschutz bei sensiblen Daten."
    ],
    transfer: [
      "Sperr-Notruf 116 116 und Polizei 110 auf einer Notfall-Karte notieren.",
      "Eine echte Betrugs-SMS – falls vorhanden – gemeinsam einordnen, ohne zu klicken.",
      "Mit der Bank klären, wie man eine Karte sperrt."
    ]
  },

  einkaufen: {
    lernziele: [
      "Die Teilnehmenden erkennen seriöse Shops und Fake-Shops.",
      "Sie zahlen möglichst auf Rechnung und schützen PIN und TAN.",
      "Sie erkennen Kauf-Druck und versteckte Kosten und kennen das 14-tägige Widerrufsrecht."
    ],
    methodik: [
      "Lebensweltorientierung an echten Shops und Apps.",
      "Aktivierung: „guter Shop oder Fake-Shop?“ – Merkmale prüfen.",
      "Budget-Bewusstsein (In-App-Käufe) erfahrbar machen.",
      "Sicherung über Merk-Karte; Tandem beim Bezahlen."
    ],
    gespraechsanlaesse: [
      "Woran erkennst du, ob ein Shop seriös ist?",
      "Welche Bezahl-Art ist für dich am sichersten?",
      "Was machst du, wenn ein Spiel ständig etwas verkaufen will?"
    ],
    begleithinweise: [
      "Finanzielle Selbstbestimmung achten; gegebenenfalls rechtliche Betreuung oder Budget einbeziehen.",
      "Keine echten Zahlungsdaten eingeben lassen.",
      "Bei Fehlkauf oder Abo-Falle konkret unterstützen (Widerruf, Bank)."
    ],
    rechtsbezuege: [
      "Widerrufsrecht bei Fernabsatz (§§ 312g, 355 BGB), 14 Tage.",
      "UN-BRK Artikel 12: rechtliche Handlungsfähigkeit und Unterstützung; SGB IX.",
      "Betrug (§ 263 StGB) bei Fake-Shops; KDG und Datenschutz bei Zahlungsdaten."
    ],
    transfer: [
      "Bei einem echten Shop gemeinsam Impressum und Bewertungen prüfen.",
      "In-App-Käufe im Gerät gemeinsam einschränken, zum Beispiel Passwort verlangen.",
      "Eine Widerrufs-Vorlage und die Rücksende-Adresse bereithalten."
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
