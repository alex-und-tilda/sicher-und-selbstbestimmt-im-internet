/* GE1 „Fremde schreiben dir“ – fachlich korrigierter interaktiver Musterlernweg (09.11.2026)
   Didaktisches Konzept nach dem pädagogischen Orientierungsrahmen (G1–G12, V1–V4):
   - Die 7 Phasen sind ein pädagogischer Orientierungsrahmen (Erleben, Verstehen, Vormachen, Ausprobieren,
     Rückmeldung, Anwenden, Wiederholen/Transfer), keine starre Schrittzahl.
   - Enthält das harmlose Gegenbeispiel mit Anna (bekannter Kontakt -> einladen/zusagen, NICHT blockieren),
     damit Lernende Situationen differenziert einschätzen lernen und nicht blind Knöpfe drücken.
   - Bietet unterschiedliche Anwendungssituationen über drei Apps hinweg:
     1. WhatsApp: Unbekannte Rufnummer / Ziffern vs. bekannter Kontakt (Anna).
     2. Instagram: Fremdes Profil bittet um private Zimmerfotos (Vertraulichkeitsversprechen prüfen).
     3. TikTok: Fremder Kontakt lockt mit kostenlosem Rezept-Heft im Tausch gegen die Privatadresse.
   - Alle Übungen und Handlungen finden vollständig innerhalb der simulierten Lern-App statt;
     keine erzwungenen Handlungen am echten Endgerät.
   - Vollständiger Quellennachweis für alle Texte, Nummern und Rückmeldungen; klare Kennzeichnung
     von abgeleiteten UI-Adaptertexten.
   - Alle Lerninhalte liegen synchron in drei Sprachstufen vor (Leicht, Einfach, Alltag). */

(function (global) {
  "use strict";

  function ge1Lernweg(Q) {
    const STUFEN = ["leicht", "einfach", "standard"];
    const drei = (leicht, einfach, standard) => ({ leicht, einfach, standard });

    const schritte = [
      /* =========================================================================
         Schritt 1 (Phase 1: Erleben – Alltagslage)
         Quelle: docs/topics.js Zeile 2059ff („Eine fremde Nummer schreibt Tilda: Hallo, wie geht es dir?“)
         Einschätzung: Meinungsabfrage zur Aktivierung von Vorwissen ohne Fehlerrisiko (Grundsatz G8).
         Telefonnummer: +49 151 49123456 (BNetzA-Testnummernbereich / Beispieldaten).
         ========================================================================= */
      {
        id: "s1-erleben",
        art: "entscheidung",
        teil: "WhatsApp",
        handy: [
          {
            typ: "chat",
            von: "+49 151 49123456",
            piktogramm: "stranger",
            text: "Hallo, wie geht es dir?"
          }
        ],
        lernbereich: {
          text: drei(
            "Eine fremde Nummer schreibt dir: Hallo, wie geht es dir? Du kennst die Nummer nicht. Was machst du? Du entscheidest selbst.",
            "Eine fremde Nummer schreibt dir eine Nachricht. Du kennst die Person nicht. Wie reagierst du? Entscheide selbst.",
            "Du erhältst eine Nachricht von einer unbekannten Nummer. Du kennst die Person nicht. Wie reagierst du? Entscheide selbst."
          )
        },
        aufgabe: {
          frage: drei("Was machst du zuerst?", "Was machst du zuerst?", "Was tust du als Erstes?"),
          meinung: true,
          antworten: [
            {
              id: "fragen",
              text: drei(
                "Ich antworte: Wer bist du?",
                "Ich antworte und frage nach dem Namen.",
                "Ich antworte und frage, wer schreibt."
              ),
              wertung: "meinung"
            },
            {
              id: "nichtAntworten",
              text: drei(
                "Ich antworte nicht.",
                "Ich antworte nicht auf die Nachricht.",
                "Ich antworte nicht."
              ),
              wertung: "meinung"
            },
            {
              id: "unsicher",
              text: drei(
                "Ich bin unsicher.",
                "Ich bin unsicher, was richtig ist.",
                "Ich bin unsicher."
              ),
              wertung: "meinung",
              unsicher: true
            }
          ]
        }
      },

      /* =========================================================================
         Schritt 2 (Phase 2: Verstehen – Unterscheiden lernen & Merksatz)
         Quelle: docs/topics.js Zeile 2051 („Du prüfst erst: Wer schreibt? Was will die Person?“),
                 docs/content-de.js Zeile 2481ff, docs/regeln-de.js (Regel `echt`).
         Didaktik: Gegenüberstellung von bekanntem Namen (z. B. Anna) und reiner Ziffernnummer.
         ========================================================================= */
      {
        id: "s2-verstehen",
        art: "merksatz",
        teil: "WhatsApp",
        handy: [
          {
            typ: "notiz",
            satz: drei(
              "Fremde Nummer? Ich prüfe erst. Dann entscheide ich.",
              "Bei einer fremden Nummer prüfe ich zuerst, wer schreibt. Dann entscheide ich selbst.",
              "Unbekannte Nummer: erst prüfen, dann selbst entscheiden."
            ),
            texte: [
              drei(
                "Ein Name allein beweist nicht: Diese Person schreibt dir wirklich.",
                "Ein gespeicherter Name beweist nicht, wer gerade schreibt.",
                "Ein gespeicherter Kontaktname allein bestätigt nicht die Identität."
              ),
              drei(
                "Die Nummer ist nicht gespeichert. Du weißt noch nicht: Wer schreibt dir?",
                "Eine nicht gespeicherte Nummer zeigt noch nicht, wer schreibt.",
                "Ein fehlender Kontakteintrag klärt die Identität nicht."
              )
            ]
          }
        ],
        lernbereich: {
          text: drei(
            [
              "Du prüfst erst: Wer schreibt? Was will die Person?",
              "Du schaust: Ist die Nummer gespeichert? Ein Name allein beweist nicht: Diese Person schreibt dir wirklich.",
              "Du prüfst auch: Was will die Person?",
              "Fremden Nummern musst du nichts über dich erzählen."
            ],
            [
              "Prüfe immer zuerst: Wer schreibt mir, und was will die Person?",
              "Auch bei einem gespeicherten Namen weißt du nicht sicher, wer gerade schreibt.",
              "Steht dort nur eine unbekannte Nummer, weißt du nicht, wer dahintersteckt. Du musst fremden Personen nicht antworten."
            ],
            [
              "Prüfe bei jeder neuen Nachricht zuerst den Absender und das Anliegen.",
              "Ein gespeicherter Kontaktname allein bestätigt nicht, wer die Nachricht tatsächlich verfasst hat.",
              "Bei unbekannten Nummern weißt du nicht, wer wirklich dahintersteckt. Du bist niemandem eine Auskunft schuldig."
            ]
          ),
          regel: "echt"
        }
      },

      /* =========================================================================
         Schritt 3 (Phase 3: Vormachen – Tilda zeigt das Blockieren)
         Quelle: docs/topics.js Zeile 2058-2064 (vorbildWer: "Tilda", Vorbildtext)
                 docs/content-de.js Zeile 2486 („Tilda kennt die Nummer nicht. Sie blockiert sie.“)
         ========================================================================= */
      {
        id: "s3-vormachen",
        art: "vorbild",
        teil: "WhatsApp",
        handy: [
          {
            typ: "chat",
            von: "+49 151 49123456",
            piktogramm: "stranger",
            text: "Hallo, wie geht es dir?",
            knoepfe: [
              {
                id: "blockieren",
                text: drei("Nummer blockiert", "Nummer blockiert", "Nummer blockiert"),
                stil: "rot ist-getippt"
              }
            ]
          }
        ],
        lernbereich: {
          etikett: "tilda",
          text: drei(
            [
              "Eine fremde Nummer schreibt Tilda: Hallo, wie geht es dir?",
              "Tilda kennt die Nummer nicht.",
              "Sie antwortet nicht.",
              "Sie tippt im Handy auf Blockieren.",
              "Nachrichten von dieser Nummer kommen in WhatsApp nicht mehr direkt bei Tilda an."
            ],
            [
              "Eine fremde Nummer schreibt Tilda freundlich an.",
              "Tilda kennt die Nummer nicht. Sie antwortet nicht und blockiert die Nummer direkt im Chat.",
              "Danach erhält sie in WhatsApp keine direkten Nachrichten mehr von dieser Nummer."
            ],
            [
              "Eine unbekannte Nummer schreibt Tilda freundlich an.",
              "Tilda kennt die Nummer nicht, antwortet nicht und blockiert sie sofort im Chat.",
              "Damit erhält Tilda in WhatsApp keine direkten Nachrichten mehr von dieser Nummer."
            ]
          )
        }
      },

      /* =========================================================================
         Schritt 4 (Phase 4 & 5: Ausprobieren A & differenzierte Rückmeldung)
         Quelle: docs/uebungen-de.js Zeile 71-82 (WhatsApp „Unbekannte Nachrichten“)
                 docs/content-de.js Zeile 5441-5481
         Didaktik: Selbst handeln im simulierten Chat; Blockieren ausprobieren;
                   Fehlerfreundliche Rückmeldung mit Option „Nochmal versuchen“ und „Tilda zusehen“.
         Telefonnummer: +49 152 78901234 (BNetzA-Testnummernbereich / Beispieldaten).
         ========================================================================= */
      {
        id: "s4-ausprobieren",
        art: "uebung",
        teil: "WhatsApp",
        handy: [
          {
            typ: "chat",
            von: "+49 152 78901234",
            piktogramm: "stranger",
            text: "Hallo Kim, bist du das?",
            hinweis: drei(
              "Nicht in deinen Kontakten gespeichert",
              "Nicht in deinen Kontakten gespeichert",
              "Nicht in deinen Kontakten gespeichert"
            ),
            knoepfe: [
              { id: "blockieren", text: drei("Nummer blockieren", "Nummer blockieren", "Nummer blockieren") },
              { id: "nichtAntworten", text: drei("Nicht antworten", "Nicht antworten", "Nicht antworten") },
              { id: "pruefen", text: drei("Kontakt prüfen", "Kontakt prüfen", "Kontakt prüfen") }
            ]
          }
        ],
        lernbereich: {
          etikett: "uebung",
          text: drei(
            "Eine fremde Nummer schreibt dir: Hallo Kim, bist du das? Du heißt nicht Kim. Was machst du?",
            "Eine Nummer, die du nicht kennst, schreibt dir: Hallo Kim, bist du das? Du heißt aber nicht Kim. Was machst du?",
            "Eine unbekannte Nummer schreibt: Hallo Kim, bist du das? Du bist nicht Kim. Wie reagierst du?"
          ),
          hinweis: drei(
            "Tippe im Handy auf eine Aktion. Oder wähle unten eine Antwort.",
            "Wähle im simulierten Handy eine Aktion oder antworte unten.",
            "Wähle eine Aktion im Smartphone oder antworte unten."
          )
        },
        uebung: {
          saetze: {
            titel: drei(
              "Das kannst du dem Absender schreiben:",
              "Das kannst du dem Absender schreiben:",
              "Das kannst du antworten:"
            ),
            antworten: [
              {
                id: "antwortenName",
                text: drei(
                  "Ich schreibe zurück und nenne meinen Namen.",
                  "Ich schreibe zurück und nenne meinen echten Namen.",
                  "Ich antworte und stelle meinen Namen richtig."
                )
              }
            ]
          },
          handlungen: {
            blockieren: {
              wertung: "auchMoeglich",
              text: drei(
                "Du hast die Nummer in WhatsApp blockiert. Nachrichten von dieser Nummer kommen nicht mehr direkt bei dir an.",
                "Du hast die Nummer in WhatsApp blockiert und erhältst von ihr keine direkten Nachrichten mehr.",
                "Die Nummer ist in WhatsApp blockiert. Direkte Nachrichten von dieser Nummer erreichen dich nicht mehr."
              )
            },
            nichtAntworten: {
              wertung: "passend",
              text: drei(
                "Du antwortest nicht. Du schickst keinen Namen und keine weiteren Angaben. Die Person kann dir weiter schreiben. Du kannst die Nummer später blockieren.",
                "Du antwortest nicht und gibst keine weiteren Angaben über dich weiter. Weitere Nachrichten sind möglich; du kannst die Nummer später blockieren.",
                "Du lässt die Nachricht unbeantwortet und gibst keine weiteren persönlichen Angaben preis. Weitere Nachrichten bleiben möglich; bei Bedarf kannst du die Nummer blockieren."
              )
            },
            antwortenName: {
              wertung: "unpassend",
              text: drei(
                "Dann kennt die andere Person deinen Namen. Und sie weiß: Hier antwortet jemand. Du kannst es noch einmal versuchen. Du entscheidest: Nicht antworten oder blockieren.",
                "Mit deiner Antwort erfährt die andere Person deinen Namen und sieht, dass du antwortest. Du kannst es noch einmal versuchen und dich für Nichtantworten oder Blockieren entscheiden.",
                "Durch deine Antwort kennt die andere Person deinen Namen und erkennt, dass du Nachrichten beantwortest. Du kannst die Entscheidung erneut versuchen und die Nachricht unbeantwortet lassen oder die Nummer blockieren."
              )
            },
            pruefen: {
              wertung: "neutral",
              text: drei(
                "Die Nummer ist nicht gespeichert. Du weißt noch nicht: Wer schreibt dir? Du entscheidest jetzt: Nicht antworten oder blockieren.",
                "Die Nummer ist nicht gespeichert. Das zeigt noch nicht, wer schreibt. Du kannst die Nachricht unbeantwortet lassen oder die Nummer blockieren.",
                "Der Kontakteintrag klärt die Identität nicht. Du kannst die Nachricht unbeantwortet lassen oder die Nummer blockieren."
              )
            }
          },
          ende: "nichtAntworten"
        },
        nachFehler: { vorbild: "s3-vormachen" }
      },

      /* =========================================================================
         Schritt 5 (Phase 4/5: Ausprobieren B – Das harmlose Gegenbeispiel mit Anna!)
         Quelle: docs/szenarien-de.js Zeile 1056-1070 und Zeile 1394-1442; docs/topics.js Zeile 10389-10394.
         Pädagogische Begründung:
         „Wer nur Tricks sieht, wird misstrauisch gegen alles.“ (szenarien-de.js:1057).
         Lernende dürfen nicht darauf konditioniert werden, blind jeden Knopf „Blockieren“ zu drücken.
         Sie müssen prüfen: Ist die Person bekannt? Will sie Geld/Stress? (Anna = bekannt, Treffen = normal).
         Darstellungsregel 2: Lage steht im Lernbereich, ins Handy nur die Frage (ein Satz).
         ========================================================================= */
      {
        id: "s5-anna",
        art: "entscheidung",
        teil: "WhatsApp",
        handy: [
          {
            typ: "chat",
            von: "Anna",
            piktogramm: "friend",
            text: "Hallo! Kommst du am Samstag zum Kaffee? Ich freue mich. Liebe Grüße, Anna",
            hinweis: drei(
              "In deinen Kontakten gespeichert",
              "In deinen Kontakten gespeichert",
              "In deinen Kontakten gespeichert"
            )
          }
        ],
        lernbereich: {
          text: drei(
            [
              "Eine Nachricht von Anna: Kommst du am Samstag zum Kaffee?",
              "Du kennst Anna. Ihr Name ist in deinen Kontakten gespeichert.",
              "Du möchtest zum Treffen kommen."
            ],
            [
              "Anna lädt dich zum Kaffee ein: Du kennst sie, und ihr Name ist im Adressbuch gespeichert.",
              "Du möchtest ihre Einladung annehmen."
            ],
            [
              "Du erhältst eine Einladung von Anna zum Kaffee.",
              "Anna ist dir bekannt und in deinen Kontakten hinterlegt. Du möchtest die Einladung annehmen."
            ]
          )
        },
        aufgabe: {
          frage: drei(
            "Was passt zu Annas Nachricht?",
            "Was passt zu ihrer Nachricht?",
            "Was passt zu Annas Einladung?"
          ),
          antworten: [
            {
              text: drei(
                "Ich sage Anna zu.",
                "Ich sage Anna zu.",
                "Ich sage Anna zu."
              ),
              wertung: "passend",
              rueckmeldung: drei(
                "Die Einladung passt zu euren Treffen. Du möchtest zusagen. Du bist unsicher? Du kannst Anna über ihre bekannte Nummer anrufen.",
                "Die Einladung passt zu euren bisherigen Treffen, und du möchtest zusagen. Wenn du unsicher bist, kannst du Anna über ihre bekannte Nummer anrufen.",
                "Die Einladung passt zu euren bisherigen Treffen. Du kannst zusagen oder bei Unsicherheit über Annas bekannte Nummer nachfragen."
              )
            },
            {
              text: drei(
                "Ich blockiere Annas Nummer.",
                "Ich blockiere ihre Nummer.",
                "Ich blockiere ihre Nummer."
              ),
              wertung: "unpassend",
              vorsichtig: true,
              rueckmeldung: drei(
                "Die Einladung passt zu euren Treffen. Du möchtest zusagen. Blockieren ist dafür nicht nötig. Du darfst selbst entscheiden.",
                "Diese Einladung ist kein Grund, Annas Nummer zu blockieren. Eine bekannte Person lädt dich zu einem normalen Treffen ein.",
                "Die gewöhnliche Einladung liefert keinen Anlass, den Kontakt zu blockieren. Du kannst sie beantworten oder das Treffen telefonisch absprechen."
              )
            },
            {
              text: drei(
                "Ich rufe Anna wegen des Treffens an.",
                "Ich rufe Anna wegen des Treffens an.",
                "Ich rufe sie an, um das Treffen abzusprechen."
              ),
              wertung: "auchMoeglich",
              rueckmeldung: drei(
                "Du kannst Anna auch anrufen. So kannst du zusagen oder etwas zum Treffen fragen.",
                "Du kannst Anna auch anrufen, um zuzusagen oder eine Frage zum Treffen zu klären.",
                "Ein Anruf ist ebenfalls passend: Du kannst zusagen und die Einzelheiten des Treffens besprechen."
              )
            }
          ]
        },
        merken: drei(
          "Fremde Nummer? Ich prüfe erst. Dann entscheide ich.",
          "Bei einer fremden Nummer prüfe ich zuerst, wer schreibt. Dann entscheide ich selbst.",
          "Unbekannte Nummer: erst prüfen, dann selbst entscheiden."
        )
      },

      /* =========================================================================
         Schritt 6 (Phase 6: Anwenden A – Instagram: Private Zimmerfotos)
         Quelle: docs/content-de.js Zeile 14240-14338 (`instagram/neu/private-bilder-anfrage`)
                 docs/topics.js Zeile 3687-3707 (`Nachrichten von Unbekannten`)
                 docs/regeln-de.js Zeile 285 („Ich schicke fremden Personen keine privaten Fotos.“)
         Darstellungsregel 2: Lage steht im Lernbereich, ins Handy nur die Frage (ein Satz).
         ========================================================================= */
      {
        id: "s6-instagram",
        art: "entscheidung",
        teil: "Instagram",
        handy: [
          {
            typ: "chat",
            von: "Unbekanntes Profil",
            piktogramm: "instagram",
            text: "Hallo, du siehst nett aus. Schick mir doch private Fotos aus deinem Zimmer. Ich zeige sie niemandem!"
          }
        ],
        lernbereich: {
          text: drei(
            [
              "Ein fremdes Profil schreibt dir bei Instagram.",
              "Die Person will private Fotos aus deinem Zimmer.",
              "Sie verspricht: Ich zeige sie niemandem."
            ],
            [
              "Ein fremdes Profil bittet dich bei Instagram um private Fotos aus deinem Zimmer und verspricht, sie niemandem zu zeigen."
            ],
            [
              "Ein fremdes Profil bittet dich auf Instagram um private Fotos aus deinem Zimmer und verspricht Vertraulichkeit."
            ]
          )
        },
        aufgabe: {
          frage: drei(
            "Was machst du mit der Bitte um private Bilder?",
            "Wie reagierst du auf diese Bitte?",
            "Wie gehst du mit dieser Bitte um?"
          ),
          antworten: [
            {
              text: drei(
                "Ich sende keine Bilder. Ich beende den Kontakt.",
                "Ich sende keine Bilder und beende den Kontakt zu dem Profil.",
                "Ich behalte die Fotos für mich und beende diesen Kontakt."
              ),
              wertung: "passend",
              rueckmeldung: drei(
                "Du behältst deine privaten Bilder. Du musst auf die Bitte nicht eingehen.",
                "Du schützt deine privaten Fotos und entscheidest selbst, den Kontakt zu beenden.",
                "Du gibst keine privaten Bilder weiter und darfst den unerwünschten Kontakt beenden."
              )
            },
            {
              text: drei(
                "Ich sende nichts. Ich zeige jemandem die Nachricht.",
                "Ich sende keine Bilder und zeige die Nachricht einer vertrauten Person.",
                "Ich sende nichts und bespreche die Anfrage mit einer vertrauten Person."
              ),
              wertung: "auchMoeglich",
              rueckmeldung: drei(
                "Du schickst keine privaten Bilder. Eine vertraute Person kann mit dir die Nachricht ansehen.",
                "Du behältst die Bilder für dich und kannst dir Hilfe beim Einschätzen der Nachricht holen.",
                "Auch das ist ein sicherer Weg: Du gibst keine Bilder weiter und kannst die Anfrage mit Unterstützung einordnen."
              )
            },
            {
              text: drei(
                "Ich sende ein Bild. Die Person verspricht es.",
                "Ich sende ein Bild, weil die Person es angeblich nicht weitergibt.",
                "Ich sende ein Foto, weil die Person Vertraulichkeit versprochen hat."
              ),
              wertung: "unpassend",
              rueckmeldung: drei(
                "Du kennst die Person nicht. Ein Versprechen schützt dein Foto nicht. Die andere Person kann das Foto speichern oder weiterleiten.",
                "Ein Versprechen schützt dein Foto nicht. Sobald du ein privates Bild verschickst, hast du keine Kontrolle mehr darüber, ob es gespeichert oder weitergeleitet wird.",
                "Ein Vertraulichkeitsversprechen schützt nicht davor, dass empfangene Fotos gespeichert, kopiert oder weitergeleitet werden."
              )
            }
          ]
        },
        merken: drei(
          "Ich schicke fremden Personen keine privaten Fotos.",
          "Ich schicke fremden Personen keine privaten Fotos.",
          "Private Fotos sende ich nicht an unbekannte Personen."
        )
      },

      /* =========================================================================
         Schritt 7 (Phase 6: Anwenden B – TikTok: Kostenloses Rezept-Heft will Adresse)
         Quelle: docs/content-de.js Zeile 14781-14887 (`tiktok/neu/rezept-adresse`)
                 docs/topics.js Zeile 5247-5293 (`Private Nachrichten`)
                 docs/regeln-de.js („Ich schütze meine privaten Daten.“)
         Darstellungsregel 2: Lage steht im Lernbereich, ins Handy nur die Frage (ein Satz).
         ========================================================================= */
      {
        id: "s7-tiktok",
        art: "entscheidung",
        teil: "TikTok",
        handy: [
          {
            typ: "chat",
            von: "Rezept-Kanal (Fremd)",
            piktogramm: "tiktok",
            text: "Ich habe ein tolles Rezept-Heft für dich! Komplett kostenlos. Schick mir einfach deine Adresse, dann schicke ich es dir."
          }
        ],
        lernbereich: {
          text: drei(
            [
              "Bei TikTok bietet dir jemand ein Geschenk an: Ein kostenloses Rezept-Heft.",
              "Die Person fragt nach deiner Adresse.",
              "Du kennst die Person nicht."
            ],
            [
              "Bei TikTok bietet dir eine Person ein kostenloses Rezeptheft an und verlangt dafür deine Adresse. Du kennst die Person nicht."
            ],
            [
              "Auf TikTok bietet dir eine unbekannte Person ein kostenloses Rezeptheft an und bittet um deine Adresse für die Zusendung."
            ]
          )
        },
        aufgabe: {
          frage: drei(
            "Was machst du mit der Bitte um deine Adresse?",
            "Wie reagierst du auf das Angebot?",
            "Wie reagierst du auf die Anfrage?"
          ),
          antworten: [
            {
              text: drei(
                "Ich schließe die Nachricht. Meine Adresse sende ich nicht.",
                "Ich schließe die Nachricht, ohne meine Adresse zu schicken.",
                "Ich schließe die Nachricht und gebe meine Adresse nicht weiter."
              ),
              wertung: "passend",
              rueckmeldung: drei(
                "Du kennst die Person nicht. Darum bekommt sie deine Adresse nicht. Du schließt die Nachricht selbst.",
                "Du kennst die Person nicht. Deshalb schickst du ihr deine Adresse nicht und schließt die Nachricht selbst.",
                "Du kennst die Person nicht – also bekommt sie deine Adresse nicht. Du beendest den Kontakt selbst."
              )
            },
            {
              text: drei(
                "Ich antworte nicht. Ich zeige die Nachricht einer vertrauten Person.",
                "Ich antworte nicht und zeige die Nachricht einer vertrauten Person.",
                "Ich antworte nicht und zeige die Nachricht einer vertrauten Person."
              ),
              wertung: "auchMoeglich",
              rueckmeldung: drei(
                "Du kannst die Nachricht auch einer vertrauten Person zeigen. Deine Adresse schickst du nicht.",
                "Du kannst die Nachricht auch einer vertrauten Person zeigen. Deine Adresse gibst du dabei nicht weiter.",
                "Du kannst die Nachricht zusätzlich mit einer vertrauten Person ansehen. Deine Adresse gibst du dabei nicht weiter."
              )
            },
            {
              text: drei(
                "Ich sende meine Adresse für das kostenlose Heft. Ich will es bekommen.",
                "Ich schicke meine Adresse, damit ich das kostenlose Rezeptheft bekomme.",
                "Ich sende meine Adresse, damit ich das kostenlose Rezeptheft bekomme."
              ),
              wertung: "unpassend",
              rueckmeldung: drei(
                "Kostenlose Geschenke oder Gewinne werden manchmal genutzt, um an deine Adresse zu kommen. Du kennst die Person nicht. Darum gibst du deine Adresse nicht weiter.",
                "Kostenlose Angebote oder Gewinnversprechen von Unbekannten dienen manchmal dazu, persönliche Daten abzufragen. Gib deine Adresse deshalb nicht weiter.",
                "Kostenlose Angebote oder Gewinnversprechen unbekannter Profile können dazu dienen, persönliche Daten zu sammeln. Gib deine Wohnadresse deshalb nicht preis."
              )
            }
          ]
        },
        merken: drei(
          "Ich schütze meine privaten Daten.",
          "Ich passe auf meine privaten Daten auf.",
          "Ich schütze meine privaten Daten."
        )
      },

      /* =========================================================================
         Schritt 8 (Phase 7: Wiederholen & Festigen – Rückblick auf Schritt 1)
         Quelle: Verknüpfung der Anfangswahl mit den erarbeiteten Regeln aus WhatsApp,
                 Anna und den Transfer-Situationen.
         ========================================================================= */
      {
        id: "s8-wiederholen",
        art: "erinnern",
        teil: "WhatsApp",
        handy: [
          {
            typ: "notiz",
            satz: drei(
              "Fremden Nummern sage ich nichts über mich.",
              "Einer fremden Nummer erzähle ich nichts über mich.",
              "Unbekannten Nummern gebe ich nichts über mich preis."
            ),
            texte: [
              drei(
                "Fremde Nummer? Ich prüfe erst. Dann entscheide ich.",
                "Bei einer fremden Nummer prüfe ich zuerst, wer schreibt.",
                "Unbekannte Nummer: erst prüfen, dann selbst entscheiden."
              ),
              drei(
                "Bekannte Kontakte wie Anna darf ich normal beantworten.",
                "Normale Nachrichten von bekannten Freunden wie Anna kann ich beantworten.",
                "Normale Einladungen bekannter Kontakte kann ich bedenkenlos beantworten."
              ),
              drei(
                "Ich darf fremde Nachrichten stehen lassen oder die Nummer blockieren.",
                "Du kannst fremde Nachrichten ignorieren oder die Nummer blockieren.",
                "Du kannst fremde Kontakte blockieren oder unbeantwortet lassen."
              )
            ]
          }
        ],
        rueckblick: {
          schritt: "s1-erleben",
          gewaehlt: drei(
            "Am Anfang hast du gewählt: „{antwort}“. Jetzt weißt du: Unbekannten Nummern musst du nicht antworten. Du kannst sie blockieren. Bekannten Kontakten wie Anna kannst du bei normalen Nachrichten antworten – bei komischen Bitten rufst du lieber kurz an.",
            "Zu Beginn hast du „{antwort}“ gewählt. Jetzt weißt du: Unbekannten Nummern musst du nicht antworten. Normale Nachrichten bekannter Kontakte wie Anna kannst du beantworten; bei ungewöhnlichen Bitten fragst du besser telefonisch nach.",
            "Zu Beginn hast du „{antwort}“ gewählt. Jetzt hast du Sicherheit gewonnen: Unbekannten Nummern musst du keine Auskunft geben. Vertrauten Kontakten kannst du bei normalen Anliegen antworten – bei ungewöhnlichen Bitten hilft eine Nachfrage über die bekannte Nummer."
          ),
          unsicher: drei(
            "Am Anfang warst du unsicher. Das ist ganz normal! Jetzt weißt du: Bei fremden Nummern prüfst du erst. Dann entscheidest du selbst.",
            "Am Anfang warst du unsicher. Jetzt hast du geübt: Fremde Nummern kannst du blockieren, und bekannten Personen antwortest du.",
            "Am Anfang warst du unsicher. Jetzt hast du Klarheit gewonnen: Erst Absender prüfen, dann selbst entscheiden."
          )
        }
      },

      /* =========================================================================
         Schritt 9 (Phase 7: Transfer in der Simulation – Vollständig in der Lern-App!)
         Quelle: docs/begleitung-de.js, docs/regeln-de.js, Notfallhilfe `istPassiert`.
         Pädagogische Regel: Keine Pflicht-Aktionen am echten Smartphone.
         Die Simulation liefert einen alltagstauglichen Prüf-Plan, ohne Verwirrung oder Gerätezusatz.
         ========================================================================= */
      {
        id: "s9-transfer",
        art: "transfer",
        teil: "Simulation",
        handy: [
          {
            typ: "notiz",
            satz: drei(
              "Dein Prüf-Plan für neue Nachrichten",
              "Dein Prüfplan für Nachrichten auf deinem Smartphone",
              "Dein persönlicher Prüfplan für eingehende Nachrichten"
            ),
            texte: [
              drei(
                "1. Wer schreibt? Name oder nur Ziffern?",
                "1. Wer schreibt? Name im Adressbuch oder fremde Ziffern?",
                "1. Absender prüfen: Bekannter Name oder unbekannte Rufnummer?"
              ),
              drei(
                "2. Was will die Person? Treffen oder Daten / Geld / Fotos?",
                "2. Anliegen prüfen: Normales Treffen oder Bitte um Geld, Codes oder Fotos?",
                "2. Anliegen bewerten: Normale Kontaktaufnahme oder Forderung nach Daten/Geld?"
              ),
              drei(
                "3. Du entscheidest: Antworten, ignorieren oder blockieren.",
                "3. Selbst entscheiden: Antworten, stehen lassen oder sicher blockieren.",
                "3. Selbstbestimmt handeln: Beantworten, ignorieren oder blockieren."
              )
            ]
          }
        ],
        lernbereich: {
          text: drei(
            [
              "Diesen Prüf-Plan kannst du dir für deinen Alltag merken.",
              "Wenn dir später auf deinem Smartphone jemand schreibt, weißt du:",
              "Erst prüfen. Dann selbst entscheiden.",
              "Du musst jetzt nichts an deinem echten Handy verändern."
            ],
            [
              "Diesen Prüfplan kannst du für deinen Alltag nutzen.",
              "Wenn dir auf deinem Smartphone eine Nachricht geschickt wird, weißt du genau, wie du vorgehst: erst prüfen, dann selbst entscheiden.",
              "Alle Übungen sind hier in der App abgeschlossen – du musst an deinem echten Gerät nichts verstellen."
            ],
            [
              "Diesen Prüfplan kannst du auf deinen Alltag übertragen.",
              "Wenn dich eine neue Nachricht erreicht, prüfst du strukturiert Absender und Anliegen, bevor du reagierst.",
              "Du musst an deinem Smartphone keine Einstellungen verändern – die Übung ist vollständig abgeschlossen."
            ]
          ),
          aufklappen: {
            titel: "istPassiert",
            liste: drei(
              [
                "Hast du einer fremden Person schon geantwortet?",
                "Das ist kein Beinbruch.",
                "Blockiere die Nummer jetzt einfach.",
                "Erzähle einer Person davon, der du vertraust."
              ],
              [
                "Wenn du einer fremden Person geantwortet hast, ist das kein Beinbruch.",
                "Blockiere die Nummer einfach nachträglich.",
                "Sprich mit einer vertrauten Person darüber."
              ],
              [
                "Falls du einer unbekannten Nummer bereits geantwortet hast: Blockiere sie nachträglich.",
                "Besprich den Vorfall mit einer Vertrauensperson."
              ]
            )
          }
        }
      }
    ];

    return {
      format: "lernhandy-1",
      id: "ge1",
      titel: "Fremde schreiben dir",
      szene: "whatsapp-fremde-nummer",
      regel: "echt",
      quelle: "docs/topics.js, docs/content-de.js, docs/uebungen-de.js, docs/regeln-de.js, docs/szenarien-de.js",
      schritte
    };
  }

  if (typeof window !== "undefined") window.ge1Lernweg = ge1Lernweg;
  if (typeof globalThis !== "undefined") globalThis.ge1Lernweg = ge1Lernweg;
  if (typeof module !== "undefined" && module.exports) module.exports = { ge1Lernweg };
  global.ge1Lernweg = ge1Lernweg;
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));
