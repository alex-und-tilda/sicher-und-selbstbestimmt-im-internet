/* =============================================================
   HANDLUNGS-KETTEN – eine Handlung in Einzelschritten üben
   -------------------------------------------------------------
   Stand 11.09.2026. Pilot: ein Thema (Datenschutz).
   Seit 27.09.2026 für weitere Themen ausgerollt (siehe unten).
   Seit 28.09.2026 ohne den Datenschutz-Stopp-Plan: Er war ein Plan gegen
   Betrug (Betrug hat einen eigenen). Der alte Plan liegt wörtlich in
   geparkt/datenschutz-umbau-2026-09-28.js. Seit Paket 2 (28.09.2026)
   hat Datenschutz eine eigene Handlungskette (Stopp – Wer – Was –
   Wofür/wie viel – Ich entscheide) mit Rückfall-Regel, ohne Film.

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

  /* DATENSCHUTZ – eigene Handlungskette (Datenschutz-Musterthema, Paket 2,
     28.09.2026). Kein Plan gegen Betrug und kein Film: Sie gilt für jede
     Situation, in der Daten weitergegeben oder sichtbar werden – Apps,
     Formulare, Profil, Fotos, Standort. Fachlich: Soll-Architektur Kap. 3.2.
     „Später ändern“ gehört NICHT in die Kette, sondern nur je nach Lage in
     `hilfe` von Schritt 5 (Einstellungen ja, Weitergegebenes oft nicht).
     `rueckfall` ist die dauerhafte Rückfall-Regel (Zeile in jedem Schritt).
     Texte nur in Leichter Sprache (Arbeitsfassung), Stufen in Paket 5.
     Die `tun`-Sätze stehen wortgleich in den Lektionen (Plan-Schritt je
     Einheit, „Dein Plan für deine Daten“) und auf der Merk-Karte. */
  datenschutz: {
    titel: "Dein Plan für deine Daten",
    lektion: "Dein Plan für deine Daten",
    merksatz: { leicht: "Erst prüfen. Dann entscheide ich.", einfach: "Erst prüfen, dann entscheide ich.", standard: "Erst prüfen, dann entscheiden." },

    einstieg: {
      leicht: "Jemand will Daten von dir. Oder du willst etwas teilen. Dann hilft dir dein Plan. Er hat 5 Schritte. Wir gehen ihn zusammen durch.",
      einfach: "Wenn jemand Daten von dir will oder du selbst etwas teilen willst, hilft dir dein Plan. Er hat 5 Schritte, und wir gehen ihn jetzt zusammen durch.",
      standard: "Ob jemand Daten von dir will oder du selbst etwas teilen möchtest: Dein Plan hilft dir dabei. Er hat fünf Schritte – gehen wir sie gemeinsam durch."
    },

    abschluss: {
      leicht: "Das ist dein Plan. Manchmal gibst du Daten. Manchmal nicht. Du entscheidest selbst.",
      einfach: "Das ist dein Plan. Manchmal gibst du Daten weiter, manchmal nicht. Das entscheidest du selbst.",
      standard: "Das ist dein Plan. Manchmal gibst du Daten weiter, manchmal nicht – die Entscheidung liegt bei dir."
    },

    rueckfall: {
      leicht: "Unsicher? Noch nichts freigeben. Erst prüfen oder Unterstützung holen.",
      einfach: "Wenn du unsicher bist, gibst du noch nichts frei. Du prüfst erst oder holst dir Unterstützung.",
      standard: "Bist du unsicher, gib noch nichts frei – prüfe erst oder hol dir Unterstützung."
    },

    /* Dieselbe Situation wie die Vorhersage am Einstieg (topics.js).
       Bewusst EIN kompakter Baustein: Gemessen auf 375 x 812 schob die
       erste Fassung (Hinweis + Formular, 489 px) „Gemacht“ auf y=1242 –
       jetzt so hoch wie die Situation im Betrug-Plan. */
    situation: {
      ort: "Neue App",
      inhalt: [
        { typ: "nachricht", von: "App Foto-Spaß", text: {
          leicht: "Ich mache deine Fotos schöner. Darf ich sehen: deine Fotos, deinen Standort, deine Kontakte?",
          einfach: "Ich mache deine Fotos schöner. Darf ich deine Fotos, deinen Standort und deine Kontakte sehen?",
          standard: "Ich verschönere deine Fotos. Darf ich auf deine Fotos, deinen Standort und deine Kontakte zugreifen?"
        } }
      ]
    },

    liste: [
      {
        tun: "Stopp. Ich prüfe zuerst.",
        pictogram: "pikto-pause",
        warum: {
          leicht: "Du sollst etwas eintippen. Oder erlauben. Oder teilen. Halte zuerst kurz an. Dann hast du Zeit zum Prüfen.",
          einfach: "Wenn du etwas eintippen, erlauben oder teilen sollst, hältst du zuerst kurz an. So hast du Zeit, alles zu prüfen.",
          standard: "Sollst du etwas eintippen, erlauben oder teilen, halte zuerst kurz an. So gewinnst du Zeit zum Prüfen."
        },
        hilfe: {
          leicht: "Du musst nicht sofort tippen. Niemand darf dich hetzen.",
          einfach: "Du musst nicht sofort tippen. Niemand darf dich dabei hetzen.",
          standard: "Du musst nicht sofort reagieren – niemand darf dich hetzen."
        }
      },
      {
        tun: "Wer bekommt es? Wer kann es sehen?",
        pictogram: "pikto-person",
        warum: {
          leicht: "Eine App? Eine Internet-Seite? Eine Person? Oder alle im Internet? Kennst du sie? Hast du das erwartet?",
          einfach: "Bekommt es eine App, eine Internetseite, eine Person, oder können es alle im Internet sehen? Kennst du sie, und hast du das erwartet?",
          standard: "Geht es an eine App, eine Website, eine Person – oder ist es für alle im Internet sichtbar? Kennst du den Empfänger, und hast du die Anfrage erwartet?"
        },
        hilfe: {
          leicht: "Du kennst den Shop? Dann darf er deine Adresse für ein Paket bekommen. Eine fremde Nachricht nicht.",
          einfach: "Wenn du den Shop kennst, darf er deine Adresse für ein Paket bekommen. Eine fremde Nachricht bekommt sie nicht.",
          standard: "Einem Shop, den du kennst, darfst du deine Adresse für die Lieferung geben – einer fremden Nachricht nicht."
        }
      },
      {
        tun: "Was genau soll ich geben?",
        pictogram: "pikto-data",
        warum: {
          leicht: "Schau genau hin: Welche Daten sind das? Zum Beispiel deine Fotos, dein Standort oder deine Kontakte.",
          einfach: "Schau genau hin, um welche Daten es geht, zum Beispiel um deine Fotos, deinen Standort oder deine Kontakte.",
          standard: "Schau genau hin, um welche Daten es geht – etwa Fotos, Standort oder Kontakte."
        },
        hilfe: {
          leicht: "Manche Daten sind besonders wichtig. Zum Beispiel deine Gesundheit oder deine Bank-Daten. Da prüfst du besonders genau.",
          einfach: "Manche Daten sind besonders wichtig, zum Beispiel Angaben zu deiner Gesundheit oder deine Bankdaten. Bei diesen Daten prüfst du besonders genau.",
          standard: "Bei besonders schützenswerten Daten wie Gesundheits- oder Bankdaten prüfst du besonders genau."
        }
      },
      {
        tun: "Wofür? Wie viel davon ist nötig?",
        pictogram: "pikto-search",
        warum: {
          leicht: "Was macht die App? Passt es dazu? Ist das Feld Pflicht oder freiwillig? Braucht die App es immer? Oder nur beim Benutzen?",
          einfach: "Was macht die App, und passt die Anfrage dazu? Ist das Feld Pflicht oder freiwillig? Braucht die App es immer oder nur, während du sie benutzt?",
          standard: "Was macht die App, und passt die Anfrage dazu? Ist das Feld Pflicht oder freiwillig? Braucht die App den Zugriff dauerhaft oder nur während der Nutzung?"
        },
        hilfe: {
          leicht: "Nötig: Ein Shop braucht deine Adresse für das Paket. Nicht nötig: Eine Taschenlampen-App will deine Kontakte. Kommt darauf an: Eine Wetter-App will deinen Standort.",
          einfach: "Nötig: Ein Shop braucht deine Adresse für das Paket. Nicht nötig: Eine Taschenlampen-App will deine Kontakte. Kommt darauf an: Eine Wetter-App will deinen Standort.",
          standard: "Erforderlich: Ein Shop braucht deine Adresse für die Lieferung. Nicht erforderlich: Eine Taschenlampen-App will deine Kontakte. Hängt vom Zweck ab: Eine Wetter-App möchte deinen Standort."
        }
      },
      {
        tun: "Ich entscheide.",
        pictogram: "pikto-done",
        warum: {
          leicht: "Du gibst nur das Nötige. Den Rest nicht. Oder du nutzt die App gar nicht. Sind andere Menschen auf dem Foto? Dann fragst du sie vorher.",
          einfach: "Du gibst nur das, was nötig ist, und den Rest nicht. Oder du nutzt die App gar nicht. Wenn andere Menschen auf einem Foto sind, fragst du sie vorher.",
          standard: "Du gibst nur das Nötige frei und den Rest nicht – oder du nutzt die App gar nicht. Sind andere Menschen auf einem Foto, fragst du sie vorher."
        },
        hilfe: {
          leicht: "Eine Erlaubnis in der App kannst du oft später ändern. Ein Foto ist schon verschickt? Oder deine Daten? Die kannst du oft nicht zurückholen. Darum prüfst du vorher.",
          einfach: "Eine Erlaubnis in einer App kannst du oft später ändern. Wenn ein Foto oder deine Daten schon verschickt sind, kannst du sie oft nicht zurückholen. Deshalb prüfst du vorher.",
          standard: "Eine Berechtigung in einer App lässt sich oft später ändern. Verschickte Fotos oder Daten kannst du dagegen oft nicht zurückholen – deshalb prüfst du vorher."
        }
      }
    ]
  },

  /* HILFE BEI PROBLEMEN – Hilfe-Check (Paket H1, 30.09.2026). Grundprinzip:
     so viel Unterstützung wie nötig, so viel Selbstständigkeit wie möglich.
     Drei Fragen statt „Problem → immer jemanden fragen“ (Wortlaut seit H2,
     30.09.2026: Was ist los? – Was kann ich selbst tun? – Welche Hilfe passt?).
     Ein Notfall wird schon bei Frage 1 erkannt; die Notfall-Grenze steht klein
     und gleichlautend als dauerhafte Zeile (`rueckfall`) in jedem Schritt, im
     Kurzplan und am Ende. Kein Film.
     Begründung und Hilfe in drei Stufen seit Paket H4 (03.10.2026); die
     Notfall-Zeile bleibt in allen Stufen derselbe Satz. Die `tun`-Sätze
     stehen wortgleich in der Lektion „Dein Hilfe-Check“ und auf der Merk-Karte.
     Die eigentliche Betrugs-Masche bleibt im Plan von „Betrug“. */
  hilfe: {
    titel: "Dein Hilfe-Check",
    /* Sichtbare Bezeichnung statt „Plan“ in Knöpfen, Kopf und Plan-Schritt
       (planWort() in app.js; H2-Korrektur, 30.09.2026). */
    bezeichnung: "Hilfe-Check",
    lektion: "Dein Hilfe-Check",
    merksatz: { leicht: "Erst schauen: Was ist los? Dann selbst handeln oder passende Hilfe holen.", einfach: "Erst schauen, was los ist. Dann selbst handeln oder passende Hilfe holen.", standard: "Erst klären, was los ist – dann selbst handeln oder passende Hilfe holen." },

    einstieg: {
      leicht: "Du hast ein Problem mit dem Handy oder im Internet. Dann hilft dir der Hilfe-Check. Er hat 3 Fragen. Wir gehen sie zusammen durch.",
      einfach: "Wenn du ein Problem mit dem Handy oder im Internet hast, hilft dir der Hilfe-Check. Er hat 3 Fragen, und wir gehen sie jetzt zusammen durch.",
      standard: "Bei einem Problem mit dem Handy oder im Internet hilft dir der Hilfe-Check. Er besteht aus 3 Fragen – wir gehen sie gemeinsam durch."
    },

    abschluss: {
      leicht: "Das ist dein Hilfe-Check. Vieles löst du selbst. Manchmal holst du dir Hilfe. Du entscheidest.",
      einfach: "Das ist dein Hilfe-Check. Vieles löst du selbst, und manchmal holst du dir Hilfe. Du entscheidest.",
      standard: "Das ist dein Hilfe-Check. Vieles löst du selbst, manchmal holst du dir Hilfe – du entscheidest."
    },

    /* Hier die Notfall-Grenze (nicht eine Rückfall-Regel wie bei Datenschutz). */
    rueckfall: {
      leicht: "Jemand ist in Gefahr? Dann ruf sofort 110 oder 112."
    },

    liste: [
      {
        tun: "Was ist los?",
        pictogram: "pikto-search",
        warum: {
          leicht: "Klappt etwas nicht? Macht dir etwas Druck oder Angst? Oder ist jemand in Gefahr? Für jedes Problem gibt es einen anderen nächsten Schritt.",
          einfach: "Vielleicht klappt etwas nicht, vielleicht macht dir etwas Druck oder Angst, oder jemand ist in Gefahr. Für jedes Problem gibt es einen anderen nächsten Schritt.",
          standard: "Klappt etwas nicht, macht dir etwas Druck oder Angst, oder ist jemand in Gefahr? Je nach Problem ist der nächste Schritt ein anderer."
        },
        hilfe: {
          leicht: "Du weißt es noch nicht genau? Dann schau: Was ist passiert? Was macht dir Sorgen?",
          einfach: "Wenn du es noch nicht genau weißt, schaust du, was passiert ist und was dir Sorgen macht.",
          standard: "Bist du dir noch nicht sicher, überleg: Was ist passiert, und was macht dir Sorgen?"
        }
      },
      {
        tun: "Was kann ich selbst tun?",
        pictogram: "pikto-done",
        warum: {
          leicht: "Etwas klappt nicht? Dann probierst du selbst etwas aus. Etwas macht dir Druck oder Angst? Dann machst du erst Stopp. Du schickst nichts. Du bezahlst nichts.",
          einfach: "Wenn etwas nicht klappt, probierst du selbst etwas aus. Wenn dir etwas Druck oder Angst macht, machst du erst Stopp: Du schickst nichts und bezahlst nichts.",
          standard: "Klappt etwas nicht, probierst du selbst etwas aus. Macht dir etwas Druck oder Angst, heißt es erst einmal Stopp: nichts schicken, nichts bezahlen."
        },
        hilfe: {
          leicht: "Du kannst einen Chat schließen. Du kannst eine Person blockieren. Oder du meldest etwas in der App.",
          einfach: "Du kannst einen Chat schließen, eine Person blockieren oder etwas in der App melden.",
          standard: "Du kannst einen Chat schließen, jemanden blockieren oder etwas in der App melden."
        }
      },
      {
        tun: "Welche Hilfe passt?",
        pictogram: "pikto-help",
        warum: {
          leicht: "Eine Frage zum Handy? Dann fragst du eine Person. Sie kennt sich mit Handys aus. Druck oder Angst? Dann sprichst du mit einer Person. Du vertraust ihr.",
          einfach: "Bei einer Frage zum Handy fragst du eine Person, die sich mit Handys auskennt. Bei Druck oder Angst sprichst du mit einer Person, der du vertraust.",
          standard: "Bei einer Frage zum Handy fragst du jemanden, der sich damit auskennt. Bei Druck oder Angst sprichst du mit einer Person, der du vertraust."
        },
        hilfe: {
          leicht: "Die erste Person kann nicht helfen? Dann fragst du eine andere. Hilfe holen ist keine Schwäche.",
          einfach: "Wenn die erste Person nicht helfen kann, fragst du eine andere. Hilfe holen ist keine Schwäche.",
          standard: "Kann die erste Person nicht helfen, frag eine andere. Hilfe holen ist keine Schwäche."
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
  },

  /* ---------------------------------------------------------
     AUSROLLEN (27.09.2026, Auftrag der nutzenden Person; Freigabe
     der Prüfgruppe zum Ausrollen: 20.09.2026, Katalog Punkt 9).
     Muster für die weiteren Themen:
     - `tun` wortgleich aus den bullets der Lektion „Was kann ich
       tun?“ in topics.js. Kein neuer Handlungssatz. Das Piktogramm
       kommt von dort, außer es passt nicht (wie im Stopp-Plan:
       „nicht sofort antworten“ bekommt pikto-pause statt
       pikto-location).
     - `merksatz` = Merksatz derselben Lektion.
     - Kein Film und keine Situation: Der Stress-Film zeigt eine
       Nachricht auf dem Handy und passt nicht zu jedem Thema. Keine
       neuen Grafiken (Auftrag Punkt 11).
     - Wo ein Schritt schon in einem freigegebenen Plan steht, sind
       `warum` und `hilfe` von dort übernommen – derselbe Gedanke soll
       überall gleich klingen.
     Neue Texte sind freigabepflichtig (§13).
     --------------------------------------------------------- */

  whatsapp: {
    titel: "Dein Plan für WhatsApp",
    lektion: "Was kann ich tun?",
    merksatz: "Ich mache Stopp. Dann prüfe ich.",

    einstieg: {
      leicht:   "Eine Nachricht ist komisch. Oder sie macht dir Stress. Dann hilft dir dein Plan. Wir gehen ihn zusammen durch. Schritt für Schritt.",
      einfach:  "Wenn dir eine Nachricht komisch vorkommt oder Stress macht, hilft dir ein fester Plan. Wir gehen ihn jetzt zusammen durch, Schritt für Schritt.",
      standard: "Merkwürdige oder drängende Nachrichten wirken, weil sie zu einer schnellen Reaktion verleiten. Ein eingeübter Ablauf nimmt ihnen das. Gehen wir ihn Schritt für Schritt durch."
    },

    abschluss: {
      leicht:   "Das ist dein Plan. Er hilft bei jeder komischen Nachricht. Auch bei einem bekannten Namen.",
      einfach:  "Das ist dein Plan. Er hilft dir bei jeder komischen Nachricht – auch wenn sie von einem bekannten Namen kommt.",
      standard: "Das ist dein Ablauf für jede merkwürdige Nachricht. Er gilt auch dann, wenn ein bekannter Name als Absender erscheint."
    },

    liste: [
      {
        tun: "Stopp machen.",
        pictogram: "pikto-no",
        warum: {
          leicht:   "Die Nachricht macht dir Stress. Du sollst schnell antworten. Mit Stopp hast du Zeit.",
          einfach:  "Solche Nachrichten wollen, dass du sofort reagierst. Mit einem Stopp nimmst du dir Zeit, damit du in Ruhe nachdenken kannst.",
          standard: "Druck und Eile sollen verhindern, dass du nachdenkst. Ein bewusster Stopp unterbricht genau diesen Reflex."
        },
        hilfe: {
          leicht:   "Leg das Handy kurz weg.",
          einfach:  "Leg das Handy kurz weg. Du musst jetzt nichts entscheiden.",
          standard: "Leg das Gerät kurz aus der Hand. Ein echtes Anliegen hat auch in ein paar Minuten noch Zeit."
        }
      },
      {
        tun: "Nicht sofort antworten.",
        pictogram: "pikto-pause",
        warum: {
          leicht:   "Auch ein bekannter Name kann falsch sein. Vielleicht schreibt dir eine fremde Person.",
          einfach:  "Auch wenn ein bekannter Name über der Nachricht steht, kann sie gefälscht sein. Deshalb antwortest du erst, wenn du sicher bist.",
          standard: "Ein bekannter Name beweist nicht, wer tatsächlich schreibt. Konten und Nummern lassen sich übernehmen oder fälschen."
        },
        hilfe: {
          leicht:   "Ruf die Person selbst an. Nimm die Nummer aus deinen Kontakten.",
          einfach:  "Ruf die Person selbst an – über die Nummer, die schon in deinen Kontakten steht. Dann weißt du, ob die Nachricht wirklich von ihr ist.",
          standard: "Ruf die Person über eine Nummer an, die du bereits kennst, und frag nach. Erst dann antwortest du."
        }
      },
      {
        tun: "Link nicht öffnen.",
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
        tun: "Hilfe holen.",
        pictogram: "pikto-help",
        warum: {
          leicht:   "Zu zweit seht ihr mehr. Du darfst immer fragen.",
          einfach:  "Zu zweit fällt eine Masche viel schneller auf, und du musst die Entscheidung nicht allein tragen.",
          standard: "Eine zweite Meinung ist der stärkste Schutz. Betrugsmaschen funktionieren fast nur, solange niemand sonst davon weiß."
        },
        hilfe: {
          leicht:   "Zeig die Nachricht einer vertrauten Person.",
          einfach:  "Zeig die Nachricht einer Person, der du vertraust. Das ist kein Umstand, das ist klug.",
          standard: "Zeig die Nachricht einer Person, der du vertraust. Genau dafür ist ein Umfeld da."
        }
      }
    ]
  },
  /* Gleiche Sätze wie in den freigegebenen Plänen, wo derselbe Schritt
     vorkommt: Zu zweit seht ihr mehr … (Datenschutz), In der Pause wird
     dein Kopf ruhig … (Datenschutz), Stopp machen (WhatsApp). */

  facebook: {
    titel: "Dein Plan für Facebook",
    lektion: "Was kann ich tun?",
    merksatz: "Gemeinheit ist nicht meine Schuld. Ich hole Hilfe.",

    einstieg: {
      leicht:   "Etwas auf Facebook tut dir nicht gut. Zum Beispiel ist eine Person gemein zu dir. Dann hilft dir dein Plan. Wir gehen ihn zusammen durch. Schritt für Schritt.",
      einfach:  "Wenn dich auf Facebook etwas stört oder jemand gemein zu dir ist, hilft dir ein fester Plan. Wir gehen ihn jetzt zusammen durch, Schritt für Schritt.",
      standard: "Wenn dich auf Facebook etwas belastet oder jemand verletzend ist, hilft ein klarer Ablauf. Gehen wir ihn Schritt für Schritt durch."
    },

    abschluss: {
      leicht:   "Das ist dein Plan. Du musst Gemeinheiten nicht aushalten. Es ist nicht deine Schuld.",
      einfach:  "Das ist dein Plan. Du musst Gemeinheiten nicht alleine aushalten – und was passiert ist, ist nicht deine Schuld.",
      standard: "Das ist dein Ablauf, wenn dich jemand auf Facebook verletzt. Du musst das nicht allein tragen, und es ist nicht deine Schuld."
    },

    liste: [
      {
        tun: "Du kannst die Person blockieren.",
        pictogram: "pikto-no",
        warum: {
          leicht:   "Dann kann dir die Person nicht mehr schreiben.",
          einfach:  "Wenn du die Person blockierst, kann sie dir keine Nachrichten mehr schicken.",
          standard: "Eine Blockierung beendet den Kontakt sofort: Die Person kann dir nicht mehr schreiben und deine Beiträge nicht mehr kommentieren."
        },
        hilfe: {
          leicht:   "Such in der App das Wort: Blockieren. Lass dir dabei helfen.",
          einfach:  "Such in der App nach dem Wort Blockieren. Du kannst dir dabei auch helfen lassen.",
          standard: "Die Funktion heißt in der App Blockieren. Lass sie dir bei Bedarf von einer Person zeigen, der du vertraust."
        }
      },
      {
        tun: "Du kannst den Beitrag melden.",
        pictogram: "pikto-warning",
        warum: {
          leicht:   "Dann schaut Facebook sich den Beitrag an. Gemeinheiten sind dort nicht erlaubt.",
          einfach:  "Wenn du einen Beitrag meldest, schaut Facebook ihn sich an. Beleidigungen und Gemeinheiten sind dort nicht erlaubt.",
          standard: "Gemeldete Beiträge werden von Facebook geprüft. Beleidigungen und Anfeindungen verstoßen gegen die Regeln der Plattform."
        },
        hilfe: {
          leicht:   "Such beim Beitrag das Wort: Melden. Lass dir dabei helfen.",
          einfach:  "Such beim Beitrag oder Kommentar nach dem Wort Melden. Du kannst dir dabei auch helfen lassen.",
          standard: "Die Funktion heißt Melden und steht beim Beitrag oder Kommentar. Lass sie dir bei Bedarf zeigen."
        }
      },
      {
        tun: "Du kannst es einer vertrauten Person sagen.",
        pictogram: "pikto-ask",
        warum: {
          leicht:   "Zu zweit ist es leichter. Du musst das nicht alleine aushalten.",
          einfach:  "Wenn du mit jemandem darüber sprichst, ist es leichter. Du musst das nicht alleine aushalten.",
          standard: "Darüber zu sprechen entlastet. Niemand muss Anfeindungen allein aushalten."
        },
        hilfe: {
          leicht:   "Zeig den Beitrag einer vertrauten Person. Oder erzähl ihr davon.",
          einfach:  "Zeig den Beitrag einer Person, der du vertraust, oder erzähl ihr, was passiert ist.",
          standard: "Zeig den Beitrag einer Person, der du vertraust, oder erzähl ihr, was passiert ist."
        }
      },
      {
        tun: "Du kannst Hilfe holen.",
        pictogram: "pikto-help",
        warum: {
          leicht:   "Hilfe holen ist gut. Es ist nicht deine Schuld.",
          einfach:  "Hilfe zu holen ist immer richtig. Was passiert ist, ist nicht deine Schuld.",
          standard: "Sich Unterstützung zu holen ist der richtige Schritt – und was dir widerfahren ist, ist nicht deine Schuld."
        },
        hilfe: {
          leicht:   "In der App gibt es das Thema: Hilfe bei Problemen. Dort steht mehr.",
          einfach:  "In der App gibt es das Thema Hilfe bei Problemen. Dort erfährst du, wer dir helfen kann.",
          standard: "Im Thema Hilfe bei Problemen findest du, wer dich unterstützen kann."
        }
      }
    ]
  },

  instagram: {
    titel: "Dein Plan für Instagram",
    lektion: "Was kann ich tun?",
    merksatz: "Ich mache Stopp. Ich zeige es jemandem.",

    einstieg: {
      leicht:   "Ein Profil oder eine Nachricht ist komisch. Dann hilft dir dein Plan. Wir gehen ihn zusammen durch. Schritt für Schritt.",
      einfach:  "Wenn dir ein Profil oder eine Nachricht komisch vorkommt, hilft dir ein fester Plan. Wir gehen ihn jetzt zusammen durch, Schritt für Schritt.",
      standard: "Merkwürdige Profile und Nachrichten wollen oft eine schnelle Reaktion. Ein eingeübter Ablauf nimmt ihnen das. Gehen wir ihn Schritt für Schritt durch."
    },

    abschluss: {
      leicht:   "Das ist dein Plan. Mit deinem Plan lässt du dich nicht drängen.",
      einfach:  "Das ist dein Plan. Wenn du ihm folgst, lässt du dich nicht drängen und entscheidest in Ruhe.",
      standard: "Das ist dein Ablauf für merkwürdige Profile und Nachrichten. Er schützt davor, sich zu einer schnellen Entscheidung drängen zu lassen."
    },

    liste: [
      {
        tun: "Stopp machen.",
        pictogram: "pikto-no",
        warum: {
          leicht:   "Die Nachricht macht dir Stress. Du sollst schnell antworten. Mit Stopp hast du Zeit.",
          einfach:  "Solche Nachrichten wollen, dass du sofort reagierst. Mit einem Stopp nimmst du dir Zeit, damit du in Ruhe nachdenken kannst.",
          standard: "Druck und Eile sollen verhindern, dass du nachdenkst. Ein bewusster Stopp unterbricht genau diesen Reflex."
        },
        hilfe: {
          leicht:   "Leg das Handy kurz weg.",
          einfach:  "Leg das Handy kurz weg. Du musst jetzt nichts entscheiden.",
          standard: "Leg das Gerät kurz aus der Hand. Ein echtes Anliegen hat auch in ein paar Minuten noch Zeit."
        }
      },
      {
        tun: "Nicht sofort antworten.",
        pictogram: "pikto-pause",
        warum: {
          leicht:   "Ein fremdes Profil kann eine falsche Person sein. Auch ein schönes Bild ist kein Beweis.",
          einfach:  "Ein fremdes Profil kann eine falsche Person sein, auch wenn die Bilder echt aussehen. Ein schönes Bild ist kein Beweis.",
          standard: "Profile lassen sich leicht fälschen. Ansprechende Bilder sagen nichts darüber aus, wer wirklich dahintersteckt."
        },
        hilfe: {
          leicht:   "Schau dir das Profil in Ruhe an. Kennst du die Person wirklich?",
          einfach:  "Schau dir das Profil in Ruhe an und frag dich: Kenne ich diese Person wirklich?",
          standard: "Sieh dir das Profil in Ruhe an und frag dich, ob du die Person tatsächlich kennst."
        }
      },
      {
        tun: "Profil oder Nachricht zeigen.",
        pictogram: "pikto-message",
        warum: {
          leicht:   "Eine andere Person sieht oft mehr. Zum Beispiel: Das Profil ist ganz neu.",
          einfach:  "Eine andere Person bemerkt oft Dinge, die dir nicht auffallen – zum Beispiel, dass ein Profil ganz neu ist.",
          standard: "Ein zweiter Blick erkennt Warnzeichen oft sofort, etwa ein ganz neues Profil oder auffällig wenige Kontakte."
        },
        hilfe: {
          leicht:   "Zeig das Profil oder die Nachricht einer vertrauten Person.",
          einfach:  "Zeig das Profil oder die Nachricht einer Person, der du vertraust.",
          standard: "Zeig das Profil oder die Nachricht einer Person, der du vertraust."
        }
      },
      {
        tun: "Hilfe holen.",
        pictogram: "pikto-help",
        warum: {
          leicht:   "Hilfe holen ist gut. Es ist nicht deine Schuld.",
          einfach:  "Hilfe zu holen ist immer richtig. Was passiert ist, ist nicht deine Schuld.",
          standard: "Sich Unterstützung zu holen ist der richtige Schritt – und was dir widerfahren ist, ist nicht deine Schuld."
        },
        hilfe: {
          leicht:   "In der App gibt es das Thema: Hilfe bei Problemen. Dort steht mehr.",
          einfach:  "In der App gibt es das Thema Hilfe bei Problemen. Dort erfährst du, wer dir helfen kann.",
          standard: "Im Thema Hilfe bei Problemen findest du, wer dich unterstützen kann."
        }
      }
    ]
  },

  youtube: {
    titel: "Dein Plan für YouTube",
    lektion: "Was kann ich tun?",
    merksatz: "Bei Angst stoppe ich das Video. Ich hole Hilfe.",

    einstieg: {
      leicht:   "Ein Video macht dir Angst. Oder es drängt dich. Dann hilft dir dein Plan. Wir gehen ihn zusammen durch. Schritt für Schritt.",
      einfach:  "Wenn ein Video dir Angst macht oder dich zu etwas drängt, hilft dir ein fester Plan. Wir gehen ihn jetzt zusammen durch, Schritt für Schritt.",
      standard: "Manche Videos machen Angst oder drängen zu riskanten Dingen. Ein klarer Ablauf hilft dir, ruhig zu bleiben. Gehen wir ihn Schritt für Schritt durch."
    },

    abschluss: {
      leicht:   "Das ist dein Plan. Video stoppen und Pause machen schützt dich vor Gefahr.",
      einfach:  "Das ist dein Plan. Wenn du das Video stoppst und eine Pause machst, schützt du dich vor Gefahr.",
      standard: "Das ist dein Ablauf für Videos, die dir nicht guttun. Ein Video zu stoppen und innezuhalten ist der sicherste Weg, dich zu schützen."
    },

    liste: [
      {
        tun: "Video stoppen.",
        pictogram: "pikto-video",
        warum: {
          leicht:   "Das Video tut dir nicht gut. Du darfst es ausmachen.",
          einfach:  "Wenn dir ein Video nicht guttut, darfst du es jederzeit ausmachen. Du musst es nicht zu Ende schauen.",
          standard: "Du musst kein Video zu Ende sehen. Wenn es dir nicht guttut, ist Stoppen die richtige Entscheidung."
        },
        hilfe: {
          leicht:   "Tippe auf Pause. Oder leg das Handy weg.",
          einfach:  "Tippe auf Pause oder leg das Handy einfach weg.",
          standard: "Tippe auf Pause oder leg das Gerät weg."
        }
      },
      {
        tun: "Nicht nachmachen.",
        pictogram: "pikto-no",
        warum: {
          leicht:   "Manche Videos zeigen gefährliche Mutproben. Nachmachen kann dir schaden.",
          einfach:  "Manche Videos zeigen gefährliche Mutproben. Wenn du das nachmachst, kannst du dir wehtun.",
          standard: "Videos mit gefährlichen Mutproben verbreiten sich schnell. Nachahmung kann ernsthafte Folgen haben."
        },
        hilfe: {
          leicht:   "Viele Aufrufe heißen nicht: Das ist sicher.",
          einfach:  "Auch wenn ein Video sehr viele Aufrufe hat, heißt das nicht, dass es sicher ist.",
          standard: "Viele Aufrufe sagen nichts darüber aus, ob etwas ungefährlich ist."
        }
      },
      {
        tun: "Pause machen.",
        pictogram: "pikto-pause",
        warum: {
          leicht:   "In der Pause wird dein Kopf ruhig. Dann siehst du mehr.",
          einfach:  "Eine kurze Pause nimmt den Stress heraus, und mit ruhigem Kopf kannst du besser entscheiden.",
          standard: "Abstand nimmt dem Video seine Wirkung. Mit etwas Ruhe entscheidest du klarer."
        },
        hilfe: {
          leicht:   "Trink etwas. Geh ein paar Schritte.",
          einfach:  "Trink etwas oder geh ein paar Schritte. Fünf Minuten reichen schon.",
          standard: "Fünf Minuten Abstand genügen oft: etwas trinken, ein paar Schritte gehen."
        }
      },
      {
        tun: "Unterstützung holen.",
        pictogram: "pikto-help",
        warum: {
          leicht:   "Zu zweit seht ihr mehr. Du darfst immer fragen.",
          einfach:  "Zu zweit ist vieles leichter, und du musst das nicht allein einordnen.",
          standard: "Eine zweite Meinung hilft, ein Video richtig einzuordnen. Du musst das nicht allein tun."
        },
        hilfe: {
          leicht:   "Zeig das Video einer vertrauten Person.",
          einfach:  "Zeig das Video einer Person, der du vertraust.",
          standard: "Zeig das Video einer Person, der du vertraust."
        }
      }
    ]
  },

  snapchat: {
    titel: "Dein Plan für Snapchat",
    lektion: "Was kann ich tun?",
    merksatz: "Kein Bild unter Stress. Ich sage Nein.",

    einstieg: {
      leicht:   "Eine Nachricht macht dir Stress. Jemand will ein Bild von dir. Dann hilft dir dein Plan. Wir gehen ihn zusammen durch. Schritt für Schritt.",
      einfach:  "Wenn dir eine Nachricht Stress macht oder jemand ein Bild von dir will, hilft dir ein fester Plan. Wir gehen ihn jetzt zusammen durch, Schritt für Schritt.",
      standard: "Wenn dich jemand unter Druck setzt, zum Beispiel für ein Bild, hilft ein klarer Ablauf. Gehen wir ihn Schritt für Schritt durch."
    },

    abschluss: {
      leicht:   "Das ist dein Plan. Nein sagen ist immer richtig. Auch bei Stress.",
      einfach:  "Das ist dein Plan. Nein zu sagen ist immer richtig, auch wenn jemand Stress macht.",
      standard: "Das ist dein Ablauf, wenn dich jemand unter Druck setzt. Nein ist immer eine gültige Antwort."
    },

    liste: [
      {
        tun: "Nein sagen.",
        pictogram: "pikto-no",
        warum: {
          leicht:   "Nein sagen ist immer richtig. Auch bei Stress.",
          einfach:  "Nein zu sagen ist immer richtig, auch wenn jemand Stress macht.",
          standard: "Nein ist immer eine gültige Antwort – gerade dann, wenn Druck gemacht wird."
        },
        hilfe: {
          leicht:   "Du musst nichts erklären. Ein Nein reicht.",
          einfach:  "Du musst dein Nein nicht erklären. Ein Nein reicht.",
          standard: "Ein Nein braucht keine Begründung."
        }
      },
      {
        tun: "Kein Bild senden.",
        pictogram: "pikto-photo",
        warum: {
          leicht:   "Du sendest ein Bild. Dann kannst du es nicht mehr zurückholen. Die andere Person kann es speichern.",
          einfach:  "Ein Bild, das du einmal gesendet hast, kannst du nicht mehr zurückholen – auch wenn es danach gelöscht wird.",
          standard: "Ein einmal versendetes Bild lässt sich nicht mehr zurückholen, selbst wenn es scheinbar verschwindet. Es kann vorher gespeichert worden sein."
        },
        hilfe: {
          leicht:   "Die Person drängt dich? Dann schreib nicht mehr zurück.",
          einfach:  "Wenn die Person dich weiter drängt, schreib ihr nicht mehr zurück.",
          standard: "Drängt die Person weiter, beende den Kontakt und schreib nicht mehr zurück."
        }
      },
      {
        tun: "Nachricht zeigen.",
        pictogram: "pikto-message",
        warum: {
          leicht:   "Eine andere Person sieht oft mehr. Du musst das nicht alleine lösen.",
          einfach:  "Eine andere Person bemerkt oft mehr als du allein, und du musst das nicht alleine lösen.",
          standard: "Ein zweiter Blick hilft, die Lage einzuschätzen. Niemand muss so etwas allein lösen."
        },
        hilfe: {
          leicht:   "Zeig die Nachricht einer vertrauten Person.",
          einfach:  "Zeig die Nachricht einer Person, der du vertraust.",
          standard: "Zeig die Nachricht einer Person, der du vertraust."
        }
      },
      {
        tun: "Unterstützung holen.",
        pictogram: "pikto-help",
        warum: {
          leicht:   "Hilfe holen ist gut. Es ist nicht deine Schuld.",
          einfach:  "Hilfe zu holen ist immer richtig. Was passiert ist, ist nicht deine Schuld.",
          standard: "Sich Unterstützung zu holen ist der richtige Schritt – und was dir widerfahren ist, ist nicht deine Schuld."
        },
        hilfe: {
          leicht:   "In der App gibt es das Thema: Hilfe bei Problemen. Dort steht mehr.",
          einfach:  "In der App gibt es das Thema Hilfe bei Problemen. Dort erfährst du, wer dir helfen kann.",
          standard: "Im Thema Hilfe bei Problemen findest du, wer dich unterstützen kann."
        }
      }
    ]
  },

  tiktok: {
    titel: "Dein Plan für TikTok",
    lektion: "Was kann ich tun?",
    merksatz: "Ich mache Pause. Ich hole Unterstützung.",

    einstieg: {
      leicht:   "Ein Video ist gefährlich. Oder ein Kommentar macht dir Stress. Dann hilft dir dein Plan. Wir gehen ihn zusammen durch. Schritt für Schritt.",
      einfach:  "Wenn ein Video gefährlich ist oder ein Kommentar dir Stress macht, hilft dir ein fester Plan. Wir gehen ihn jetzt zusammen durch, Schritt für Schritt.",
      standard: "Ob gefährlicher Trend, gemeiner Kommentar oder Stress: Ein klarer Ablauf hilft dir. Gehen wir ihn Schritt für Schritt durch."
    },

    abschluss: {
      leicht:   "Das ist dein Plan. Pause machen und nicht nachmachen schützt dich.",
      einfach:  "Das ist dein Plan. Wenn du eine Pause machst und nichts Gefährliches nachmachst, schützt du dich.",
      standard: "Das ist dein Ablauf für TikTok. Innehalten und riskante Trends nicht nachmachen ist der zuverlässigste Schutz."
    },

    liste: [
      {
        tun: "Nicht nachmachen.",
        pictogram: "pikto-no",
        warum: {
          leicht:   "Manche Videos zeigen gefährliche Sachen. Nachmachen kann dir schaden.",
          einfach:  "Ein Trend kann gefährlich sein, auch wenn ihn schon viele andere mitgemacht haben.",
          standard: "Die Verbreitung eines Trends sagt nichts über seine Sicherheit aus. Viele Mitmachende bedeuten nicht, dass etwas ungefährlich ist."
        },
        hilfe: {
          leicht:   "Viele Aufrufe heißen nicht: Das ist sicher.",
          einfach:  "Auch wenn ein Video sehr viele Aufrufe hat, heißt das nicht, dass es sicher ist.",
          standard: "Viele Aufrufe sagen nichts darüber aus, ob etwas ungefährlich ist."
        }
      },
      {
        tun: "Keine privaten Daten senden.",
        pictogram: "pikto-data",
        warum: {
          leicht:   "Private Daten sind zum Beispiel deine Adresse. Oder deine Telefon-Nummer. Fremde sollen sie nicht bekommen.",
          einfach:  "Zu deinen privaten Daten gehören zum Beispiel deine Adresse und deine Telefon-Nummer. Fremde sollen sie nicht bekommen.",
          standard: "Adresse, Telefonnummer oder Schule gehören nicht in Kommentare oder Nachrichten an Fremde."
        },
        hilfe: {
          leicht:   "Ein Kommentar will deine Daten? Dann antworte nicht.",
          einfach:  "Wenn ein Kommentar nach deinen Daten fragt, antworte einfach nicht.",
          standard: "Fragt jemand in Kommentaren nach deinen Daten, antworte nicht."
        }
      },
      {
        tun: "Pause machen.",
        pictogram: "pikto-pause",
        warum: {
          leicht:   "In der Pause wird dein Kopf ruhig. Dann siehst du mehr.",
          einfach:  "Eine kurze Pause nimmt den Stress heraus, und mit ruhigem Kopf kannst du besser entscheiden.",
          standard: "Abstand nimmt Videos und Kommentaren ihre Wirkung. Mit etwas Ruhe entscheidest du klarer."
        },
        hilfe: {
          leicht:   "Leg das Handy weg. Trink etwas. Geh ein paar Schritte.",
          einfach:  "Leg das Handy weg, trink etwas oder geh ein paar Schritte.",
          standard: "Leg das Gerät weg, trink etwas oder geh ein paar Schritte."
        }
      },
      {
        tun: "Unterstützung holen.",
        pictogram: "pikto-help",
        warum: {
          leicht:   "Zu zweit seht ihr mehr. Du darfst immer fragen.",
          einfach:  "Zu zweit ist vieles leichter, und du musst das nicht allein einordnen.",
          standard: "Eine zweite Meinung hilft, ein Video oder einen Kommentar richtig einzuordnen."
        },
        hilfe: {
          leicht:   "Zeig die Nachricht oder das Video einer vertrauten Person.",
          einfach:  "Zeig die Nachricht oder das Video einer Person, der du vertraust.",
          standard: "Zeig die Nachricht oder das Video einer Person, der du vertraust."
        }
      }
    ]
  },

  ki: {
    titel: "Dein Plan für KI",
    lektion: "Was kann ich tun?",
    merksatz: "Ich prüfe. Ich frage einen Menschen.",

    einstieg: {
      leicht:   "Du darfst KI benutzen. KI kann dir helfen. Dein Plan zeigt dir: So bleibst du dabei sicher. Wir gehen ihn zusammen durch. Schritt für Schritt.",
      einfach:  "Du darfst KI ruhig benutzen, denn sie kann dir bei vielem helfen. Dein Plan zeigt dir, wie du dabei sicher bleibst. Wir gehen ihn jetzt zusammen durch, Schritt für Schritt.",
      standard: "KI kann dir bei vielem helfen. Ein klarer Ablauf sorgt dafür, dass du sie sicher nutzt. Gehen wir ihn Schritt für Schritt durch."
    },

    abschluss: {
      leicht:   "Das ist dein Plan. Wichtige Antworten prüfen schützt dich vor Fehlern.",
      einfach:  "Das ist dein Plan. Wenn du wichtige Antworten prüfst, schützt du dich vor Fehlern.",
      standard: "Das ist dein Ablauf für den Umgang mit KI. Wichtige Antworten zu prüfen bewahrt dich vor folgenschweren Fehlern."
    },

    liste: [
      {
        tun: "Ich weiß: KI ist ein Programm.",
        pictogram: "pikto-ki",
        warum: {
          leicht:   "Eine KI ist kein Mensch. Sie kann sich irren. Sie klingt trotzdem sicher.",
          einfach:  "Eine KI ist kein Mensch. Sie kann sich irren, auch wenn die Antwort sehr sicher klingt.",
          standard: "KI-Antworten können überzeugend klingen und trotzdem falsch sein. Der sichere Tonfall ist kein Beleg für Richtigkeit."
        },
        hilfe: {
          leicht:   "Die KI schreibt freundlich. Trotzdem ist sie ein Programm.",
          einfach:  "Auch wenn die KI freundlich schreibt, bleibt sie ein Programm.",
          standard: "Auch ein freundlicher, persönlicher Ton ändert nichts daran: Du sprichst mit einem Programm."
        }
      },
      {
        tun: "Ich prüfe wichtige Antworten.",
        pictogram: "pikto-search",
        warum: {
          leicht:   "Eine KI kann sich irren. Du merkst das nicht immer sofort.",
          einfach:  "Eine KI kann sich irren, und du merkst das nicht immer sofort. Deshalb prüfst du wichtige Antworten.",
          standard: "Fehler in KI-Antworten sind oft nicht auf den ersten Blick zu erkennen. Wichtiges prüfst du deshalb nach."
        },
        hilfe: {
          leicht:   "Schau auf einer bekannten Seite nach. Oder frag eine Person.",
          einfach:  "Schau auf einer bekannten Internet-Seite nach oder frag eine Person, der du vertraust.",
          standard: "Vergleiche mit einer verlässlichen Quelle oder frag eine Person, der du vertraust."
        }
      },
      {
        tun: "Ich gebe keine privaten Daten ein.",
        pictogram: "pikto-data",
        warum: {
          leicht:   "Die KI speichert deine Nachrichten oft. Private Daten gehören nicht hinein.",
          einfach:  "Die KI speichert deine Nachrichten oft. Deshalb schreibst du keine privaten Daten hinein.",
          standard: "Viele KI-Dienste speichern Eingaben. Private Daten haben dort deshalb nichts zu suchen."
        },
        hilfe: {
          leicht:   "Schreib keinen Namen. Keine Adresse. Kein Passwort.",
          einfach:  "Schreib keinen echten Namen, keine Adresse und kein Passwort in die KI.",
          standard: "Lass Namen, Adressen, Passwörter und Gesundheitsdaten weg."
        }
      },
      {
        tun: "Bei Gesundheit und Geld frage ich Menschen.",
        pictogram: "pikto-ask",
        warum: {
          leicht:   "Bei Gesundheit und Geld sind Fehler besonders schlimm. Eine KI kann sich irren.",
          einfach:  "Bei Gesundheit und Geld sind Fehler besonders schlimm. Eine KI kann sich irren, deshalb entscheiden hier Menschen mit.",
          standard: "Bei Gesundheit und Geld haben Fehler ernste Folgen. Hier gehört eine fachkundige Person dazu."
        },
        hilfe: {
          leicht:   "Bei Gesundheit frag deine Ärztin oder deinen Arzt. Bei Geld frag eine vertraute Person.",
          einfach:  "Bei Fragen zur Gesundheit frag deine Ärztin oder deinen Arzt. Bei Geld frag eine Person, der du vertraust.",
          standard: "Bei Gesundheitsfragen hilft deine Ärztin oder dein Arzt, bei Geldfragen eine Beratung oder eine Person deines Vertrauens."
        }
      },
      {
        tun: "Bei Unsicherheit hole ich Hilfe.",
        pictogram: "pikto-help",
        warum: {
          leicht:   "Zu zweit seht ihr mehr. Du darfst immer fragen.",
          einfach:  "Zu zweit fällt ein Fehler viel schneller auf, und du musst nicht allein entscheiden.",
          standard: "Eine zweite Meinung ist der beste Schutz vor Fehlern. Du musst nicht allein entscheiden."
        },
        hilfe: {
          leicht:   "Zeig die Antwort einer vertrauten Person.",
          einfach:  "Zeig die Antwort der KI einer Person, der du vertraust.",
          standard: "Zeig die Antwort der KI einer Person, der du vertraust."
        }
      }
    ]
  },

  fakes: {
    titel: "Dein Plan gegen Fakes",
    lektion: "Was kann ich tun?",
    merksatz: "Ich glaube nicht alles sofort. Ich prüfe.",

    einstieg: {
      leicht:   "Eine Nachricht überrascht dich. Oder sie macht dir Angst. Dann hilft dir dein Plan. Wir gehen ihn zusammen durch. Schritt für Schritt.",
      einfach:  "Wenn dich eine Nachricht überrascht oder dir Angst macht, hilft dir ein fester Plan. Wir gehen ihn jetzt zusammen durch, Schritt für Schritt.",
      standard: "Falschmeldungen wirken über Überraschung und starke Gefühle. Ein eingeübter Ablauf nimmt ihnen das. Gehen wir ihn Schritt für Schritt durch."
    },

    abschluss: {
      leicht:   "Das ist dein Plan. Nicht teilen im Zweifel schützt dich und andere.",
      einfach:  "Das ist dein Plan. Wenn du im Zweifel nicht teilst, schützt du dich und andere Menschen.",
      standard: "Das ist dein Ablauf gegen Fakes. Im Zweifel nicht zu teilen schützt dich und verhindert, dass sich Falschmeldungen weiter verbreiten."
    },

    liste: [
      {
        tun: "Ich glaube nicht alles sofort.",
        pictogram: "pikto-pause",
        warum: {
          leicht:   "Im Internet steht viel Falsches. Auch Bilder und Videos können gefälscht sein.",
          einfach:  "Im Internet steht viel Falsches. Auch Bilder und Videos können gefälscht sein, zum Beispiel mit KI.",
          standard: "Texte, Bilder und Videos lassen sich heute leicht fälschen, auch mit KI. Echt aussehen heißt nicht echt sein."
        },
        hilfe: {
          leicht:   "Frag dich: Stimmt das wirklich?",
          einfach:  "Frag dich kurz: Stimmt das wirklich?",
          standard: "Frag dich zuerst: Kann das stimmen?"
        }
      },
      {
        tun: "Ich prüfe: Wer schreibt das? Steht das auch woanders?",
        pictogram: "pikto-search",
        warum: {
          leicht:   "Eine wichtige Nachricht steht meistens auch auf bekannten Nachrichten-Seiten.",
          einfach:  "Wichtige Nachrichten stehen meistens auch auf bekannten Nachrichten-Seiten. Wenn nicht, ist Vorsicht wichtig.",
          standard: "Wichtige Meldungen greifen meist mehrere seriöse Quellen auf. Findest du sie nirgends sonst, ist Vorsicht angebracht."
        },
        hilfe: {
          leicht:   "Schau auf einer bekannten Nachrichten-Seite nach. Oder frag eine Person.",
          einfach:  "Schau auf einer bekannten Nachrichten-Seite nach oder frag eine Person, der du vertraust.",
          standard: "Such die Meldung bei einer bekannten Nachrichtenseite oder frag eine Person, der du vertraust."
        }
      },
      {
        tun: "Bei starken Gefühlen mache ich langsam.",
        pictogram: "pikto-feel",
        warum: {
          leicht:   "Eine Nachricht macht dir Angst oder Wut. Dann willst du sie schnell teilen. Genau dann ist Vorsicht wichtig.",
          einfach:  "Wenn eine Nachricht starke Gefühle wie Angst oder Wut auslöst, willst du sie oft schnell teilen. Genau dann ist besondere Vorsicht wichtig.",
          standard: "Nachrichten, die Angst oder Empörung auslösen, verleiten zum ungeprüften Weiterleiten. Genau das machen sich Falschmeldungen zunutze."
        },
        hilfe: {
          leicht:   "Warte kurz. Trink etwas. Geh ein paar Schritte.",
          einfach:  "Warte kurz, trink etwas oder geh ein paar Schritte. Dann schaust du noch einmal hin.",
          standard: "Lass die Nachricht kurz liegen. Mit etwas Abstand urteilst du klarer."
        }
      },
      {
        tun: "Im Zweifel teile ich nicht.",
        pictogram: "pikto-no",
        warum: {
          leicht:   "Du teilst etwas Falsches? Dann glauben es noch mehr Menschen.",
          einfach:  "Wenn du etwas Falsches teilst, glauben es noch mehr Menschen.",
          standard: "Jedes Teilen verbreitet eine Falschmeldung weiter. Nicht zu teilen stoppt sie."
        },
        hilfe: {
          leicht:   "Du bist nicht sicher? Dann teile nicht. Das ist in Ordnung.",
          einfach:  "Wenn du nicht sicher bist, teile die Nachricht nicht. Das ist völlig in Ordnung.",
          standard: "Unsicher? Dann bleibt die Nachricht bei dir. Das ist in Ordnung."
        }
      },
      {
        tun: "Ich kann eine Person fragen, der ich vertraue.",
        pictogram: "pikto-ask",
        warum: {
          leicht:   "Zu zweit seht ihr mehr. Du darfst immer fragen.",
          einfach:  "Zu zweit fällt ein Fake viel schneller auf, und du musst nicht allein entscheiden.",
          standard: "Eine zweite Meinung erkennt Fakes oft sofort. Du musst nicht allein entscheiden."
        },
        hilfe: {
          leicht:   "Zeig die Nachricht einer vertrauten Person.",
          einfach:  "Zeig die Nachricht einer Person, der du vertraust.",
          standard: "Zeig die Nachricht einer Person, der du vertraust."
        }
      }
    ]
  },

  einkaufen: {
    titel: "Dein Plan beim Einkaufen",
    lektion: "Was kann ich tun?",
    merksatz: "Ich prüfe in Ruhe. Ich lasse mich nicht hetzen.",

    einstieg: {
      leicht:   "Du willst im Internet etwas kaufen. Dann hilft dir dein Plan. Wir gehen ihn zusammen durch. Schritt für Schritt.",
      einfach:  "Wenn du im Internet etwas kaufen willst, hilft dir ein fester Plan. Wir gehen ihn jetzt zusammen durch, Schritt für Schritt.",
      standard: "Sicheres Einkaufen im Internet gelingt mit einem klaren Ablauf. Gehen wir ihn Schritt für Schritt durch."
    },

    abschluss: {
      leicht:   "Das ist dein Plan. Du lässt dich nicht hetzen. So kaufst du sicherer ein.",
      einfach:  "Das ist dein Plan. Wenn du dich nicht hetzen lässt, kaufst du sicherer ein.",
      standard: "Das ist dein Ablauf für jeden Einkauf im Internet. Sich nicht hetzen zu lassen ist einer der wirksamsten Schutzmechanismen."
    },

    liste: [
      {
        tun: "Ich kaufe bei Shops, die ich kenne.",
        pictogram: "pikto-shop",
        warum: {
          leicht:   "Bei bekannten Shops haben schon viele Menschen gekauft. Dort ist Betrug seltener.",
          einfach:  "Bei bekannten Shops haben schon viele Menschen eingekauft. Deshalb ist das Risiko für Betrug dort kleiner.",
          standard: "Etablierte Shops haben einen Ruf zu verlieren. Das Risiko, an einen Fake-Shop zu geraten, ist dort deutlich kleiner."
        },
        hilfe: {
          leicht:   "Du kennst den Shop nicht? Dann frag eine vertraute Person.",
          einfach:  "Wenn du den Shop nicht kennst, frag eine Person, der du vertraust.",
          standard: "Kennst du den Shop nicht, frag vor dem Kauf eine Person, der du vertraust."
        }
      },
      {
        tun: "Ich prüfe Preis und Impressum.",
        pictogram: "pikto-search",
        warum: {
          leicht:   "Ein sehr billiger Preis kann ein Trick sein. Im Impressum steht: Wer ist der Shop?",
          einfach:  "Ein sehr billiger Preis kann ein Trick sein. Im Impressum steht, wer hinter dem Shop steckt.",
          standard: "Ungewöhnlich niedrige Preise sind ein typisches Warnzeichen. Das Impressum zeigt, wer hinter dem Shop steht."
        },
        hilfe: {
          leicht:   "Das Impressum steht meistens ganz unten auf der Seite.",
          einfach:  "Das Impressum findest du meistens ganz unten auf der Seite.",
          standard: "Das Impressum steht meist ganz unten auf der Seite. Fehlt es, kauf dort nicht."
        }
      },
      {
        tun: "Ich zahle möglichst auf Rechnung.",
        pictogram: "pikto-money",
        warum: {
          leicht:   "Beim Kauf auf Rechnung bekommst du zuerst die Ware. Dann zahlst du.",
          einfach:  "Beim Kauf auf Rechnung bekommst du zuerst die Ware und zahlst erst danach.",
          standard: "Beim Kauf auf Rechnung zahlst du erst, wenn die Ware angekommen ist. So riskierst du kein Geld für eine Lieferung, die nie kommt."
        },
        hilfe: {
          leicht:   "Es gibt keine Rechnung? Dann frag zuerst eine vertraute Person.",
          einfach:  "Wenn es keinen Kauf auf Rechnung gibt, frag zuerst eine Person, der du vertraust.",
          standard: "Gibt es keinen Kauf auf Rechnung, lass dich vor dem Bezahlen von einer Person deines Vertrauens beraten."
        }
      },
      {
        tun: "PIN und TAN bleiben geheim.",
        pictogram: "pikto-lock",
        warum: {
          leicht:   "Die TAN ist ein Code von deiner Bank. Mit PIN und TAN kommt jemand an dein Geld.",
          einfach:  "Die TAN ist ein Code von deiner Bank. Mit PIN und TAN kommt jemand an dein Geld.",
          standard: "Die TAN ist ein Freigabecode deiner Bank. Mit PIN und TAN kann jemand über dein Geld verfügen."
        },
        hilfe: {
          leicht:   "Schreib PIN und TAN nie in eine Nachricht. Sag sie auch nicht am Telefon.",
          einfach:  "Schreib PIN und TAN nie in eine Nachricht und sag sie auch nicht am Telefon.",
          standard: "Gib PIN und TAN niemals per Nachricht oder am Telefon weiter – auch nicht, wenn jemand angeblich von der Bank anruft."
        }
      },
      {
        tun: "Ich lasse mich nicht hetzen.",
        pictogram: "pikto-clock",
        warum: {
          leicht:   "Ein Shop zeigt: Nur noch 2 Minuten! Das macht dir Stress. Du sollst schnell kaufen.",
          einfach:  "Ein Shop zeigt: Nur noch 2 Minuten! Das soll dich zur Eile treiben, damit du nicht mehr nachdenkst.",
          standard: "Ein Countdown oder ein extrem niedriger Preis soll Eile erzeugen, damit weniger genau geprüft wird."
        },
        hilfe: {
          leicht:   "Mach die Seite zu. Schau morgen noch einmal.",
          einfach:  "Mach die Seite zu und schau morgen noch einmal in Ruhe.",
          standard: "Schließ die Seite und schau es dir am nächsten Tag in Ruhe noch einmal an."
        }
      },
      {
        tun: "Vor dem Kaufen kann ich eine Person fragen.",
        pictogram: "pikto-ask",
        warum: {
          leicht:   "Zu zweit seht ihr mehr. Du darfst immer fragen.",
          einfach:  "Zu zweit fällt ein Fake-Shop viel schneller auf, und du musst nicht allein entscheiden.",
          standard: "Eine zweite Meinung erkennt Warnzeichen oft sofort. Du musst nicht allein entscheiden."
        },
        hilfe: {
          leicht:   "Zeig den Shop einer vertrauten Person.",
          einfach:  "Zeig den Shop einer Person, der du vertraust.",
          standard: "Zeig den Shop einer Person, der du vertraust."
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
