/* =============================================================
   HANDLUNGS-KETTEN – eine Handlung in Einzelschritten üben
   -------------------------------------------------------------
   Stand 11.09.2026. Pilot: ein Thema (Datenschutz).

   WOZU
   Die Plattform hat fünf Wege, eine ENTSCHEIDUNG zu üben: die
   Lektions-Übung, das Quiz, das Übungs-Handy, das Trainings-
   Postfach und Deine Karte. Alle stellen eine Frage mit richtiger
   und falscher Antwort.

   Eine Kette ist etwas anderes: ein ABLAUF. Man beantwortet nichts,
   man geht eine Handlung Schritt für Schritt durch – fehlerfrei,
   weil es gar keine falsche Antwort gibt. Das ist „Task Analysis /
   Chaining" plus „Errorless Learning" aus der Systematic-
   Instruction-Familie – die am besten belegte Methodenfamilie für
   Menschen mit Lern-Schwierigkeiten (CEEDAR Center: „strong
   evidence base spanning more than 60 years").

   WARUM EIN HANDLUNGS-PLAN UND KEIN GERÄTE-ABLAUF
   Eine Anleitung „tippe hier, dann dort" für WhatsApp oder
   Instagram veraltet binnen Monaten. Eine Anleitung, die nicht mehr
   stimmt, ist für diese Zielgruppe schlimmer als keine: Sie führt zu
   einem Misserfolg, den die Person sich selbst zuschreibt (§13
   Aktualität, §3 Došen). Der Stopp-Plan dagegen veraltet nie – und
   er ist wörtlich das Ziel aus §1: eine Gefahr erkennen, wissen was
   zu tun ist, und sich das zutrauen.

   PROMPT-FADING
   Die Hilfe wird von Durchgang zu Durchgang weniger:
     1. Durchgang   alles: Nummer, Bild, Satz, Warum, Hilfe-Link
     2. Durchgang   Warum nur auf Antippen
     3. und weiter  die Sätze auf einem Bildschirm zum Selbst-Durchgehen
   So wächst die Person aus der Hilfe heraus, statt sie dauerhaft zu
   brauchen. Das ist der eigentliche Sinn der Methode.

   AUFBAU
   KETTEN[themaId] = {
     titel      Überschrift
     lektion    exakter Lektions-Titel, an den die Kette gehängt wird
     merksatz   ein Satz für den Abschluss
     einstieg   { leicht, einfach, standard }
     abschluss  { leicht, einfach, standard }
     liste      [ { tun, pictogram, warum:{...}, hilfe:{...} } ]
   }

   DREI EBENEN – bewusste Abweichung von §2
   `tun` steht NUR EINMAL da und ist auf allen drei Ebenen gleich.
   Grund: Der Handlungssatz ist ein Merksatz, den die Person
   wiedererkennen soll – „Ich klicke nicht auf Links." heißt auf
   jeder Ebene dasselbe. Wer ihn je Ebene umformuliert, zerstört
   genau die Wiedererkennbarkeit, die ihn wirksam macht.
   Gestuft werden nur `warum` und `hilfe`, also die Begründung.
   Abgestimmt am 11.09.2026.

   Die Sätze in `tun` sind wortgleich aus den `bullets` der Lektion
   „Was kann ich tun?" in topics.js übernommen – kein neuer Inhalt,
   eine neue Art, vorhandenen Inhalt durchzuspielen.
   ============================================================= */

const KETTEN = {

  datenschutz: {
    titel: "Dein Stopp-Plan",
    lektion: "Was kann ich tun?",
    merksatz: "Bei Druck mache ich Stopp. Dann frage ich nach.",

    /* ---------------------------------------------------------
       FILM – der Einstieg in die Kette.
       Vier Takte: Ruhe → Störung → Entscheidung → Auflösung.
       Er zeigt, WIE Druck entsteht und wie man aussteigt. Danach
       übernimmt die Kette mit den fünf Schritten.

       Wichtig: Der Film läuft NICHT von allein. Jeder Takt wird
       angetippt. Damit greift WCAG 2.2.2 (Pause/Stopp bei
       Auto-Bewegung über 5 Sekunden) gar nicht erst – und die
       Forschung empfiehlt genau das: „systemseitig segmentierte
       Häppchen mit Weiter-Knopf" statt einer durchlaufenden
       Animation, weil Bewegung flüchtige Information erzeugt
       (Transient-Information-Effekt).

       Der Text ist kein Beiwerk. Eine wortlose Animation allein
       wäre riskant: Abstrakte Bildsprache hat für diese Zielgruppe
       geringe Ikonizität. Deshalb steht zu jedem Takt ein Satz –
       in allen drei Ebenen.
       --------------------------------------------------------- */
    film: {
      titel: "So entsteht Druck",
      /* Was das Bild zeigt, für Menschen die es nicht sehen (§9). */
      bildbeschreibung: "Ein Handy liegt da. Eine Nachricht kommt an. Ein Punkt blinkt. Die Person dreht den Kopf weg und wartet. Dann wird das Handy umgedreht. Die Person wird ruhig.",
      takte: [
        {
          name: "ruhe",
          text: {
            leicht:   "Dein Handy liegt da. Alles ist ruhig.",
            einfach:  "Dein Handy liegt neben dir. Es ist nichts los.",
            standard: "Das Handy liegt ruhig da. Nichts verlangt gerade deine Aufmerksamkeit."
          }
        },
        {
          name: "stoerung",
          text: {
            leicht:   "Eine Nachricht kommt. Sie macht Druck.",
            einfach:  "Eine Nachricht kommt an. Sie drängt dich zu einer schnellen Antwort.",
            standard: "Eine Nachricht trifft ein und drängt auf eine sofortige Reaktion. Genau das ist die Masche."
          }
        },
        {
          name: "entscheidung",
          text: {
            leicht:   "Du willst schnell antworten. Du wartest.",
            einfach:  "Du willst sofort antworten. Aber du hältst kurz inne.",
            standard: "Der Reflex ist, sofort zu antworten. Du unterbrichst ihn und hältst inne."
          }
        },
        {
          name: "aufloesung",
          text: {
            leicht:   "Du legst das Handy weg. Jetzt bist du ruhig.",
            einfach:  "Du legst das Handy zur Seite. Der Druck lässt nach.",
            standard: "Du legst das Gerät aus der Hand. Damit ist der Druck weg – und dein Plan beginnt."
          }
        }
      ]
    },

    einstieg: {
      leicht:   "Eine Nachricht macht Druck. Dann hilft dir dein Plan. Wir gehen ihn zusammen durch. Schritt für Schritt.",
      einfach:  "Wenn eine Nachricht Druck macht, hilft dir ein fester Plan. Wir gehen ihn jetzt zusammen durch, Schritt für Schritt.",
      standard: "Drucktechniken wirken, weil sie zum sofortigen Handeln drängen. Ein eingeübter Ablauf nimmt ihnen genau das. Gehen wir ihn Schritt für Schritt durch."
    },

    abschluss: {
      leicht:   "Das ist dein Plan. Er hilft bei jeder Nachricht, die Druck macht.",
      einfach:  "Das ist dein Plan. Er hilft dir bei jeder Nachricht, die Druck macht – egal von wem sie kommt.",
      standard: "Das ist dein Ablauf für jede Nachricht, die auf Eile drängt. Er funktioniert unabhängig davon, welche Masche gerade im Umlauf ist."
    },

    liste: [
      {
        tun: "Ich antworte nicht sofort.",
        pictogram: "pikto-pause",
        warum: {
          leicht:   "Der Absender will eine schnelle Antwort. Die bekommt er nicht.",
          einfach:  "Wer Druck macht, will eine schnelle Antwort von dir. Genau die bekommt er nicht, wenn du kurz wartest.",
          standard: "Druck erzeugt Eile, und Eile schaltet das Nachdenken aus. Wer wartet, nimmt der Masche ihr wichtigstes Werkzeug."
        },
        hilfe: {
          leicht:   "Leg das Handy kurz weg.",
          einfach:  "Leg das Handy kurz weg. Die Nachricht läuft dir nicht davon.",
          standard: "Leg das Gerät kurz aus der Hand. Kein seriöses Anliegen verliert dadurch seine Gültigkeit."
        }
      },
      {
        tun: "Ich klicke nicht auf Links.",
        pictogram: "pikto-link",
        warum: {
          leicht:   "Ein Link kann falsch sein. Dann landest du auf einer falschen Seite.",
          einfach:  "Ein Link sieht oft echt aus, führt aber auf eine gefälschte Seite, die deine Daten abgreift.",
          standard: "Links lassen sich beliebig beschriften. Der sichtbare Text sagt nichts darüber aus, wohin er tatsächlich führt."
        },
        hilfe: {
          leicht:   "Tippe nichts an. Auch nicht aus Neugier.",
          einfach:  "Tippe den Link nicht an, auch nicht aus Neugier. Ein Blick genügt manchmal schon.",
          standard: "Öffne den Link nicht, auch nicht zum Nachsehen. Ruf die Seite bei Bedarf selbst über die bekannte Adresse auf."
        }
      },
      {
        tun: "Ich gebe keine privaten Daten ein.",
        pictogram: "pikto-data",
        warum: {
          leicht:   "Private Daten sind zum Beispiel dein Passwort. Oder deine Bank-Daten.",
          einfach:  "Passwort, Bankdaten und Ausweis-Nummer gehören dir allein. Kein echter Anbieter fragt danach per Nachricht.",
          standard: "Seriöse Anbieter fragen Zugangsdaten niemals per Nachricht ab. Wer es doch tut, will sie missbrauchen."
        },
        hilfe: {
          leicht:   "Fragt ein Feld nach dem Passwort? Dann schließ die Seite.",
          einfach:  "Wenn ein Feld nach deinem Passwort fragt, schließe die Seite einfach wieder.",
          standard: "Sobald ein Formular nach Zugangsdaten verlangt, schließt du die Seite. Das ist immer die richtige Reaktion."
        }
      },
      {
        tun: "Ich mache eine Pause.",
        pictogram: "pikto-pause",
        warum: {
          leicht:   "In der Pause wird dein Kopf ruhig. Dann siehst du mehr.",
          einfach:  "Eine kurze Pause nimmt den Druck heraus, und mit ruhigem Kopf erkennst du die Masche viel leichter.",
          standard: "Abstand ist das wirksamste Mittel gegen Drucktechniken. Wer eine Nacht darüber schläft, entscheidet fast immer anders."
        },
        hilfe: {
          leicht:   "Trink etwas. Geh ein paar Schritte.",
          einfach:  "Trink etwas oder geh ein paar Schritte. Fünf Minuten reichen schon.",
          standard: "Fünf Minuten Abstand genügen oft. Bei größeren Beträgen schläfst du besser eine Nacht darüber."
        }
      },
      {
        tun: "Ich frage eine vertraute Person.",
        pictogram: "pikto-ask",
        warum: {
          leicht:   "Zu zweit seht ihr mehr. Du darfst immer fragen.",
          einfach:  "Zu zweit fällt eine Masche viel schneller auf, und du musst die Entscheidung nicht allein tragen.",
          standard: "Eine zweite Meinung ist der stärkste Schutz. Betrugsmaschen funktionieren fast nur, solange niemand sonst davon weiß."
        },
        hilfe: {
          leicht:   "Zeig die Nachricht einer Person, der du vertraust.",
          einfach:  "Zeig die Nachricht einer Person, der du vertraust. Das ist kein Umstand, das ist klug.",
          standard: "Zeig die Nachricht einer Person, der du vertraust. Genau dafür ist ein Umfeld da."
        }
      }
    ]
  }

};

/* Hängt die Ketten an die passende Lektion. Überschreibt NIE etwas
   Vorhandenes – gleiches Muster wie applyExtraPractice (uebungen-de.js). */
function applyChains() {
  if (typeof KETTEN === "undefined" || !KETTEN) return 0;
  if (typeof topics === "undefined" || !Array.isArray(topics)) return 0;
  let gesetzt = 0;
  topics.forEach(topic => {
    const kette = KETTEN[topic.id];
    if (!kette || !kette.lektion) return;
    const einhaengen = (liste) => {
      if (!Array.isArray(liste)) return;
      liste.forEach(lesson => {
        if (!lesson || lesson.kette) return;
        if (lesson.title !== kette.lektion) return;
        lesson.kette = topic.id;
        gesetzt++;
      });
    };
    einhaengen(topic.lessons);
    einhaengen(topic.einfachLessons);
  });
  return gesetzt;
}
