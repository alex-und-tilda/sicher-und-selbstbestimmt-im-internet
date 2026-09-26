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
     situation  { ort, inhalt:[...] }   optional, siehe unten
     liste      [ { tun, pictogram, warum:{...}, hilfe:{...} } ]
   }

   SITUATION (seit 21.09.2026)
   Beim Durchspielen der Seite fiel auf: Der Film baut eine Situation auf
   – ein Handy, eine eintreffende Nachricht – und genau in dem Moment, in
   dem der Plan beginnt, ist sie wieder weg. Auf dem Schritt steht dann
   „Ich tippe nicht auf Links.", aber es liegt kein Link da. Der Knopf
   „Gemacht" bezieht sich auf nichts.

   `situation` lässt die Nachricht während der ganzen Kette stehen. Sie
   ist absichtlich still: kein Knopf, keine Frage, nichts zum Antippen.
   Sie ist der Gegenstand, auf den sich der Plan bezieht.

     ort      Zeile über dem Bildschirm, z. B. "Posteingang"
     inhalt   dieselben Bausteine wie im Übungs-Handy (szenarien-de.js),
              gerendert von scenarioElementHtml() – kein neues Format

   Eine Ebene, nicht drei: Der Text IST das Betrugs-Zitat, kein erklärender
   Text. §5 lässt solche Zitate ausdrücklich zu (Passiv, Ausrufe-Zeichen),
   und das Übungs-Handy hält es seit jeher genauso. Alles Erklärende
   ringsum bleibt dreistufig.

   Erfundene Nummern werden NICHT ausgedacht: wie in szenarien-de.js steht
   dort „Unbekannte Nummer", damit niemand eine echte Nummer anruft.

   DREI EBENEN – bewusste Abweichung von §2
   `tun` steht NUR EINMAL da und ist auf allen drei Ebenen gleich.
   Grund: Der Handlungssatz ist ein Merksatz, den die Person
   wiedererkennen soll – „Ich tippe nicht auf Links." heißt auf
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
    merksatz: "Bei Stress mache ich Stopp. Dann frage ich nach.",

    /* ---------------------------------------------------------
       FILM – der Einstieg in die Kette.
       Vier Takte: Ruhe → Störung → Entscheidung → Auflösung.
       Er zeigt, WIE dieser Stress entsteht und wie man aussteigt. Danach
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
      titel: "So entsteht Stress",
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
            leicht:   "Eine Nachricht kommt. Sie macht dir Stress.",
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
            einfach:  "Du legst das Handy zur Seite. Der Stress lässt nach.",
            standard: "Du legst das Gerät aus der Hand. Damit ist der Stress weg – und dein Plan beginnt."
          }
        }
      ]
    },

    einstieg: {
      leicht:   "Eine Nachricht macht dir Stress. Dann hilft dir dein Plan. Wir gehen ihn zusammen durch. Schritt für Schritt.",
      einfach:  "Wenn eine Nachricht dir Stress macht, hilft dir ein fester Plan. Wir gehen ihn jetzt zusammen durch, Schritt für Schritt.",
      standard: "Solche Nachrichten wirken, weil sie zum sofortigen Handeln drängen und dabei Stress erzeugen. Ein eingeübter Ablauf nimmt ihnen genau das. Gehen wir ihn Schritt für Schritt durch."
    },

    abschluss: {
      leicht:   "Das ist dein Plan. Er hilft bei jeder Nachricht, die dir Stress macht.",
      einfach:  "Das ist dein Plan. Er hilft dir bei jeder Nachricht, die dir Stress macht – egal von wem sie kommt.",
      standard: "Das ist dein Ablauf für jede Nachricht, die auf Eile drängt. Er funktioniert unabhängig davon, welche Masche gerade im Umlauf ist."
    },

    liste: [
      {
        tun: "Ich antworte nicht sofort.",
        pictogram: "pikto-pause",
        warum: {
          leicht:   "Der Absender will eine schnelle Antwort. Die bekommt er nicht.",
          einfach:  "Wer dir Stress macht, will eine schnelle Antwort von dir. Genau die bekommt er nicht, wenn du kurz wartest.",
          standard: "Stress erzeugt Eile, und Eile schaltet das Nachdenken aus. Wer wartet, nimmt der Masche ihr wichtigstes Werkzeug."
        },
        hilfe: {
          leicht:   "Leg das Handy kurz weg.",
          einfach:  "Leg das Handy kurz weg. Die Nachricht läuft dir nicht davon.",
          standard: "Leg das Gerät kurz aus der Hand. Kein seriöses Anliegen verliert dadurch seine Gültigkeit."
        }
      },
      {
        tun: "Ich tippe nicht auf Links.",
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
          einfach:  "Eine kurze Pause nimmt den Stress heraus, und mit ruhigem Kopf erkennst du die Masche viel leichter.",
          standard: "Abstand ist das wirksamste Mittel gegen solche Maschen. Wer eine Nacht darüber schläft, entscheidet fast immer anders."
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
  },

  betrug: {
    titel: "Dein Plan gegen Betrug",
    lektion: "Was kann ich tun?",
    merksatz: "Bei Stress zahle ich nichts sofort. Ich mache Stopp und frage nach.",

    /* Diese Nachricht trägt alle fünf Schritte des Plans: Sie macht Stress
       (Schritt 1), sie will Geld (Schritt 2), sie verlangt einen Rückruf
       auf ihre eigene Nummer (Schritt 3), sie nennt einen Betrag zum
       Genau-Lesen (Schritt 4). Sie passt zum Film davor: „Eine Nachricht
       kommt. Sie will Geld. Sofort." */
    situation: {
      ort: "Posteingang",
      inhalt: [
        { typ: "liste", eintraege: [
          { von: "SMS · Unbekannte Nummer", zeit: "09:41",
            vorschau: "Ihr Konto wird heute gesperrt! Zahlen Sie 49 Euro Gebühr. Rufen Sie sofort zurück." }
        ] }
      ]
    },

    film: {
      titel: "So macht Betrug Stress",
      bildbeschreibung: "Ein Handy liegt da. Eine Nachricht kommt an. Sie verlangt etwas. Ein Punkt blinkt. Die Person dreht den Kopf weg und wartet. Dann wird das Handy umgedreht. Die Person wird ruhig.",
      takte: [
        {
          name: "ruhe",
          text: {
            leicht:   "Dein Handy liegt da. Alles ist ruhig.",
            einfach:  "Dein Handy liegt neben dir. Es ist nichts los.",
            standard: "Das Handy liegt ruhig da. Niemand verlangt gerade etwas von dir."
          }
        },
        {
          name: "stoerung",
          text: {
            leicht:   "Eine Nachricht kommt. Sie will Geld. Sofort.",
            einfach:  "Eine Nachricht kommt an. Sie sagt: Zahl sofort, sonst passiert etwas.",
            standard: "Eine Nachricht trifft ein und verlangt sofort Geld oder Daten – mit einer Drohung oder einem Lockangebot. Genau das ist die Masche."
          }
        },
        {
          name: "entscheidung",
          text: {
            leicht:   "Du willst schnell zahlen. Du wartest.",
            einfach:  "Du willst schnell alles klären. Aber du hältst kurz inne.",
            standard: "Der Reflex ist, sofort zu reagieren, um Ärger oder Verlust zu vermeiden. Du unterbrichst ihn und hältst inne."
          }
        },
        {
          name: "aufloesung",
          text: {
            leicht:   "Du legst das Handy weg. Jetzt bist du ruhig.",
            einfach:  "Du legst das Handy zur Seite. Der Stress lässt nach.",
            standard: "Du legst das Gerät aus der Hand. Damit ist der Stress weg – und dein Plan beginnt."
          }
        }
      ]
    },

    einstieg: {
      leicht:   "Jemand will Geld von dir. Sofort. Dann hilft dir dein Plan. Wir gehen ihn zusammen durch. Schritt für Schritt.",
      einfach:  "Wenn jemand schnell Geld oder Daten von dir will, hilft dir ein fester Plan. Wir gehen ihn jetzt zusammen durch, Schritt für Schritt.",
      standard: "Betrug wirkt über Eile: Wer im Stress ist, zahlt oder verrät Daten, bevor er nachdenkt. Ein eingeübter Ablauf nimmt genau das weg. Gehen wir ihn Schritt für Schritt durch."
    },

    abschluss: {
      leicht:   "Das ist dein Plan. Er hilft bei jedem Betrug. Auch bei neuen Tricks.",
      einfach:  "Das ist dein Plan. Er hilft dir bei jedem Betrug – auch wenn der Trick neu ist.",
      standard: "Das ist dein Ablauf gegen Betrug. Er wirkt unabhängig davon, welcher Trick gerade im Umlauf ist: Eile, Stress und Geldforderungen sind immer das Warnzeichen."
    },

    liste: [
      {
        tun: "Ich mache Stopp bei Stress.",
        pictogram: "pikto-no",
        warum: {
          leicht:   "Betrüger wollen eine schnelle Antwort. Das macht dir Stress. Du sollst nicht nachdenken.",
          einfach:  "Betrüger sagen: Schnell! Sonst ist es zu spät. Du sollst nicht nachdenken. Mit Stopp nimmst du ihnen das.",
          standard: "Eile ist das wichtigste Werkzeug von Betrug: Wer im Stress ist, prüft nichts. Ein bewusster Stopp nimmt der Masche ihre Wirkung."
        },
        hilfe: {
          leicht:   "Sag laut: Stopp. Leg das Handy hin.",
          einfach:  "Sag laut: Stopp. Leg das Handy hin. Du musst jetzt nichts entscheiden.",
          standard: "Sag dir laut „Stopp“ und leg das Gerät weg. Eine echte Forderung gilt auch noch in einer Stunde."
        }
      },
      {
        tun: "Ich zahle nichts sofort.",
        pictogram: "pikto-money",
        warum: {
          leicht:   "Gezahltes Geld ist oft weg. Du bekommst es nicht zurück.",
          einfach:  "Wer einmal bezahlt hat, bekommt das Geld oft nicht zurück. Darum zahlst du nie sofort.",
          standard: "Überwiesenes Geld lässt sich oft nicht zurückholen. Echte Rechnungen lassen Zeit zum Prüfen; wer sofortige Zahlung verlangt, ist verdächtig."
        },
        hilfe: {
          leicht:   "Gib keine Karten-Nummer an. Überweise nichts.",
          einfach:  "Gib keine Karten-Nummer an und überweise nichts. Auch nicht einen kleinen Betrag.",
          standard: "Gib keine Zahlungsdaten an und überweise nichts – auch keinen kleinen Betrag und keine Gutschein-Codes. Erst prüfen, dann entscheiden."
        }
      },
      {
        tun: "Ich rufe selbst an. Ich nehme meine bekannte Nummer.",
        pictogram: "pikto-phone",
        warum: {
          leicht:   "Die Nummer in der Nachricht kann falsch sein. Deine eigene Nummer ist sicher.",
          einfach:  "Die Nummer in der Nachricht gehört vielleicht dem Betrüger. Deine bekannte Nummer führt zur echten Stelle.",
          standard: "Absender und Rückrufnummern lassen sich fälschen. Nur eine Nummer, die du selbst aus einer sicheren Quelle kennst, führt zur echten Stelle."
        },
        hilfe: {
          leicht:   "Such die Nummer selbst. Nicht aus der Nachricht.",
          einfach:  "Such die Nummer selbst heraus, zum Beispiel aus einem alten Brief. Nicht aus der Nachricht.",
          standard: "Nimm eine Nummer, die du schon vorher kanntest – aus einem früheren Brief oder von der offiziellen Website, die du selbst aufrufst. Nie aus der Nachricht."
        }
      },
      {
        tun: "Ich lese genau. Was kostet das?",
        pictogram: "pikto-search",
        warum: {
          leicht:   "Manchmal steckt ein Preis im Kleingedruckten. Den siehst du nur, wenn du liest.",
          einfach:  "Bei Betrug steckt oft ein versteckter Preis drin, zum Beispiel ein Abo. Nur wer genau liest, sieht ihn.",
          standard: "Abo-Fallen und Zusatzkosten stehen oft klein oder versteckt. Erst wer Preis, Laufzeit und Absender liest, kann beurteilen, ob ein Angebot echt ist."
        },
        hilfe: {
          leicht:   "Lies den Preis. Lies auch das Kleine.",
          einfach:  "Lies den Preis und auch das Kleingedruckte. Ist etwas unklar oder viel zu billig, lass es.",
          standard: "Such Preis, Laufzeit und Kündigung. Klingt ein Angebot zu gut, ist es das meistens. Bei Unklarheit: nichts abschließen."
        }
      },
      {
        tun: "Ich frage eine vertraute Person.",
        pictogram: "pikto-ask",
        warum: {
          leicht:   "Zu zweit seht ihr mehr. Du darfst immer fragen.",
          einfach:  "Zu zweit fällt Betrug schneller auf, und du musst nicht allein entscheiden. Das kann jedem passieren.",
          standard: "Betrug lebt davon, dass niemand sonst davon weiß. Eine zweite Person erkennt Warnzeichen oft sofort. Scham ist unnötig: Es kann jedem passieren."
        },
        hilfe: {
          leicht:   "Zeig die Nachricht jemandem, dem du vertraust.",
          einfach:  "Zeig die Nachricht jemandem, dem du vertraust. Das ist kein Umstand, das ist klug.",
          standard: "Zeig die Nachricht einer Person, der du vertraust – zum Beispiel aus der Familie, der Assistenz oder einer Beratungsstelle."
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
