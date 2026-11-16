/* Interaktives E-Mail-Übungspostfach – Modulare Szenarien-Datenbank (11.11.2026)
   Didaktisches Konzept nach dem pädagogischen Orientierungsrahmen:
   - 7 praxisnahe Szenarien für Alltag, Teilhabe, Verbraucherschutz und Gefahrenabwehr:
     1. ek3: Lieferverzug (Online-Shop Reklamation)
     2. termin: Termin absagen und neu vereinbaren (Alltag & Organisation)
     3. einladung: Einladung beantworten (Soziales & Freizeit)
     4. service: Nachfrage an den Kundenservice (Verbraucherschutz & Verträge)
     5. paket: Verdächtige Paketnachricht (Phishing & Fake-Link)
     6. sicherheit: Gefälschte Sicherheitswarnung (Banking-Phishing)
     7. anhang: Unerwarteten E-Mail-Anhang beurteilen (Schadsoftware & Trojaner)
   - Synchron in drei Sprachstufen: Leichte Sprache (leicht), Einfache Sprache (einfach), Alltagssprache (standard).
   - Vollständig barrierefrei, offline-fähig, sichere lokale Simulation ohne echten Versand. */

(function(global) {
  "use strict";

  const drei = (leicht, einfach, standard) => ({ leicht, einfach, standard });

  const MAILBOX_SZENARIEN = {
  "ek-post1": {
    "id": "ek-post1",
    "icon": "👟",
    "thema": "Online einkaufen",
    "lektion": "Die Bestellung kommt nicht",
    "titel": {
      "leicht": "Die Bestellung kommt nicht",
      "einfach": "Die Bestellung kommt nicht",
      "standard": "Die Bestellung kommt nicht"
    },
    "regel": "noetig",
    "szene": "online-einkauf-lieferung",
    "auftrag": {
      "leicht": "Alex hat vor 10 Tagen Schuhe bestellt. Die Schuhe sind noch nicht da. Im Postfach liegt eine neue E-Mail vom Shop.",
      "einfach": "Alex wartet seit über einer Woche auf seine neuen Schuhe. Das Paket ist überfällig. Im E-Mail-Postfach liegt eine Nachricht vom Händler.",
      "standard": "Alex hat vor zehn Tagen Schuhe in einem Online-Shop bestellt. Die Lieferung ist überfällig. Im Posteingang liegt eine Benachrichtigung des Händlers."
    },
    "schritte": [
      {
        "id": "s1",
        "art": "situation",
        "lernbereich": {
          "text": {
            "leicht": "Alex hat vor 10 Tagen Schuhe bestellt. Die Schuhe sind noch nicht da. Im Postfach liegt eine neue E-Mail vom Shop.",
            "einfach": "Alex wartet seit über einer Woche auf seine neuen Schuhe. Das Paket ist überfällig. Im E-Mail-Postfach liegt eine Nachricht vom Händler.",
            "standard": "Alex hat vor zehn Tagen Schuhe in einem Online-Shop bestellt. Die Lieferung ist überfällig. Im Posteingang liegt eine Benachrichtigung des Händlers."
          }
        },
        "handy": [
          {
            "typ": "email",
            "von": "Schuh-Freude Shop",
            "betreff": {
              "leicht": "Deine Schuhe: Verspätung",
              "einfach": "Verzögerung bei deiner Bestellung #4821",
              "standard": "Wichtige Information zu Ihrer Bestellung #4821"
            },
            "text": {
              "leicht": "Hallo Alex. Deine Schuhe kommen später. Es gibt Liefer-Probleme.",
              "einfach": "Hallo Alex, deine bestellten Schuhe verzögern sich leider wegen Lieferschwierigkeiten.",
              "standard": "Guten Tag Alex, bedauerlicherweise verzögert sich die Auslieferung Ihrer Bestellung aufgrund von Lieferengpässen."
            }
          }
        ]
      },
      {
        "id": "s2",
        "art": "vorbild",
        "lernbereich": {
          "etikett": "tilda",
          "text": {
            "leicht": "Alex öffnet die E-Mail vom Shop. Dort steht: Die Schuhe kommen später. Tilda kennt das. Sie sagt: Frag nach dem Termin. Und nenn deine Bestell-Nummer. Dann findet der Shop dein Paket.",
            "einfach": "Alex öffnet die E-Mail vom Shop und liest, dass die Schuhe später kommen. Tilda kennt das. Sie rät ihm, nach dem Termin zu fragen und die Bestellnummer zu nennen.",
            "standard": "Alex öffnet die Nachricht des Shops: Die Lieferung verzögert sich. Tilda kennt die Lage und rät ihm, nach dem Liefertermin zu fragen und die Bestellnummer anzugeben."
          }
        },
        "handy": [
          {
            "typ": "mailbox",
            "modus": "vorbild-lesen",
            "szenarioId": "ek-post1"
          }
        ]
      },
      {
        "id": "s3",
        "art": "merksatz",
        "lernbereich": {
          "regel": false,
          "text": {
            "leicht": "Ware kommt nicht? Dem Shop schreiben.",
            "einfach": "Ware kommt nicht? Dem Shop schreiben.",
            "standard": "Ware kommt nicht? Dem Shop schreiben."
          },
          "texte": [
            {
              "leicht": "Du darfst beim Shop nachfragen. Das ist normal.",
              "einfach": "Du darfst beim Shop jederzeit nachfragen.",
              "standard": "Eine Nachfrage beim Händler ist jederzeit möglich."
            }
          ]
        },
        "handy": [
          {
            "typ": "notiz",
            "satz": {
              "leicht": "Ware kommt nicht? Dem Shop schreiben.",
              "einfach": "Ware kommt nicht? Dem Shop schreiben.",
              "standard": "Ware kommt nicht? Dem Shop schreiben."
            },
            "texte": [
              {
                "leicht": "Du darfst beim Shop nachfragen. Das ist normal.",
                "einfach": "Du darfst beim Shop jederzeit nachfragen.",
                "standard": "Eine Nachfrage beim Händler ist jederzeit möglich."
              }
            ]
          }
        ]
      },
      {
        "id": "s4",
        "art": "uebung",
        "uebung": {
          "typ": "mailbox"
        },
        "lernbereich": {
          "etikett": "uebung",
          "text": {
            "leicht": "Jetzt bist du dran. Öffne die E-Mail vom Shop. Tippe auf: Antworten. Dann wählst du eine Antwort. Oder du schreibst selbst.",
            "einfach": "Jetzt bist du dran: Öffne die E-Mail vom Shop und tippe auf „Antworten“. Wähle dann eine Antwort aus oder schreibe selbst.",
            "standard": "Jetzt bist du an der Reihe: Öffne die Nachricht des Shops und tippe auf „Antworten“. Wähle eine Antwort aus oder formuliere selbst."
          },
          "hinweis": {
            "leicht": "Der Shop braucht deine Bestell-Nummer. Mehr braucht er nicht.",
            "einfach": "Der Shop braucht deine Bestellnummer, mehr nicht.",
            "standard": "Der Händler benötigt nur die Bestellnummer."
          }
        },
        "handy": [
          {
            "typ": "mailbox",
            "modus": "inbox-vorschau",
            "szenarioId": "ek-post1"
          }
        ]
      },
      {
        "id": "s5",
        "art": "transfer",
        "lernbereich": {
          "text": {
            "leicht": "Du bestellst etwas? Dann schreib dir die Bestell-Nummer auf. Oder mach ein Foto davon.",
            "einfach": "Wenn du etwas bestellst, schreib dir die Bestellnummer auf oder mach ein Foto davon.",
            "standard": "Notiere dir bei jeder Bestellung die Bestellnummer oder fotografiere die Bestätigung."
          }
        },
        "handy": [
          {
            "typ": "notiz",
            "satz": {
              "leicht": "Du bestellst etwas? Dann schreib dir die Bestell-Nummer auf. Oder mach ein Foto davon.",
              "einfach": "Wenn du etwas bestellst, schreib dir die Bestellnummer auf oder mach ein Foto davon.",
              "standard": "Notiere dir bei jeder Bestellung die Bestellnummer oder fotografiere die Bestätigung."
            },
            "texte": [
              {
                "leicht": "Du darfst beim Shop nachfragen. Das ist normal.",
                "einfach": "Du darfst beim Shop jederzeit nachfragen.",
                "standard": "Eine Nachfrage beim Händler ist jederzeit möglich."
              }
            ]
          }
        ]
      }
    ],
    "mailbox": {
      "ordner": {
        "inbox": [
          {
            "id": "mail-schuh-freude",
            "von": {
              "name": "Schuh-Freude Shop",
              "adresse": "service@schuh-freude.de",
              "geprueft": {
                "leicht": "Die Adresse passt zum bekannten Shop aus deiner Bestellung.",
                "einfach": "Absenderadresse geprüft: Die Domain schuh-freude.de passt zum Online-Shop aus der Übung.",
                "standard": "Absenderadresse im Übungsfall: Die Domain schuh-freude.de stimmt mit dem bekannten Shop überein (technische Echtheitsprüfungen sind hier vereinfacht)."
              },
              "istEcht": true
            },
            "an": "alex@meine-mail.de",
            "datum": "Gestern, 14:30 Uhr",
            "gelesen": false,
            "betreff": {
              "leicht": "Deine Schuhe: Verspätung",
              "einfach": "Verzögerung bei deiner Bestellung #4821",
              "standard": "Wichtige Information zu Ihrer Bestellung #4821"
            },
            "text": {
              "leicht": "Hallo Alex.\nDeine Schuhe kommen später.\nEs gibt Probleme bei der Lieferung.\nDeine Bestell-Nummer ist #4821.\nHast du Fragen? Schreib uns einfach.",
              "einfach": "Hallo Alex,\nleider verzögert sich der Versand deiner Schuhe.\nWir warten noch auf die Lieferung vom Hersteller.\nDeine Bestellnummer lautet #4821.\nWenn du Fragen hast, antworte einfach auf diese E-Mail.",
              "standard": "Guten Tag,\nwir bedauern, Ihnen mitteilen zu müssen, dass sich die Auslieferung Ihrer Bestellung #4821 verzögert.\nWir erwarten den Wareneingang in Kürze.\nBei Rückfragen antworten Sie gern direkt auf diese Nachricht."
            },
            "anhang": null
          }
        ],
        "sent": [],
        "trash": []
      },
      "antwort": {
        "wenig": [
          "passend",
          "ohne_nummer"
        ],
        "vorbildTitel": "So macht es Tilda:",
        "vorbild": {
          "leicht": "Guten Tag. Wann kommen meine Schuhe? Meine Bestell-Nummer ist 4821. Viele Grüße, Alex",
          "einfach": "Guten Tag, wann werden meine Schuhe geliefert? Meine Bestellnummer ist 4821. Viele Grüße, Alex",
          "standard": "Guten Tag, bitte teilen Sie mir den Liefertermin für meine Bestellung 4821 mit. Mit freundlichen Grüßen, Alex"
        },
        "bausteine": [
          {
            "id": "ohne_nummer",
            "text": {
              "leicht": "Guten Tag. Meine Schuhe sind immer noch nicht da. Warum dauert das so lange? Viele Grüße, Alex",
              "einfach": "Guten Tag, meine Schuhe sind immer noch nicht angekommen. Warum dauert das so lange? Viele Grüße, Alex",
              "standard": "Guten Tag, meine Bestellung ist bis heute nicht eingetroffen. Weshalb verzögert sich die Lieferung so lange? Mit freundlichen Grüßen, Alex"
            },
            "wertung": "unpassend",
            "kopf": "Hier fehlt noch etwas.",
            "rueckmeldung": {
              "leicht": "In der E-Mail fehlt die Bestell-Nummer. Der Shop hat viele Bestellungen. Ohne Nummer findet er dein Paket nicht. Er fragt erst nach. Das dauert länger.",
              "einfach": "In der E-Mail fehlt die Bestellnummer. Weil der Shop viele Bestellungen hat, findet er dein Paket ohne Nummer nicht und muss erst nachfragen.",
              "standard": "In der Nachricht fehlt die Bestellnummer. Ohne sie kann der Händler die Sendung nicht zuordnen und muss zunächst nachfragen."
            }
          },
          {
            "id": "passend",
            "text": {
              "leicht": "Guten Tag. Wann kommen meine Schuhe? Meine Bestell-Nummer ist 4821. Viele Grüße, Alex",
              "einfach": "Guten Tag, wann werden meine Schuhe geliefert? Meine Bestellnummer ist 4821. Viele Grüße, Alex",
              "standard": "Guten Tag, bitte teilen Sie mir den Liefertermin für meine Bestellung 4821 mit. Mit freundlichen Grüßen, Alex"
            },
            "wertung": "passend",
            "rueckmeldung": {
              "leicht": "Du fragst nach dem Termin. Du nennst die Bestell-Nummer. So findet der Shop dein Paket. Mehr Daten braucht der Shop nicht.",
              "einfach": "Du fragst nach dem Termin und nennst die Bestellnummer. So kann der Shop dein Paket finden, und mehr Daten braucht er dafür nicht.",
              "standard": "Du fragst nach dem Liefertermin und gibst die Bestellnummer an. Damit kann der Händler die Sendung zuordnen; weitere Daten sind nicht nötig."
            },
            "erfolg": {
              "tun": {
                "leicht": "Du hast dem Shop geschrieben. Du hast die Bestell-Nummer genannt. Der Shop sucht jetzt das Paket.",
                "einfach": "Du hast dem Shop geschrieben und die Bestellnummer genannt. Der Shop sucht jetzt das Paket.",
                "standard": "Du hast dem Händler geschrieben und die Bestellnummer angegeben. Die Sendung wird jetzt gesucht."
              },
              "reaktionGeschichte": "„Danke. Jetzt kann der Shop mein Paket suchen.“",
              "reaktionSonst": "„So schreibe ich das auch. Kurz und mit Nummer.“"
            }
          },
          {
            "id": "zu_viel",
            "text": {
              "leicht": "Guten Tag. Wann kommen meine Schuhe? Bestell-Nummer 4821. Mein Geburtstag ist der 3. Mai 1988. Viele Grüße, Alex",
              "einfach": "Guten Tag, wann kommen meine Schuhe? Bestellnummer 4821, mein Geburtsdatum ist der 3. Mai 1988. Viele Grüße, Alex",
              "standard": "Guten Tag, wann wird meine Bestellung 4821 geliefert? Mein Geburtsdatum ist der 3. Mai 1988. Mit freundlichen Grüßen, Alex"
            },
            "wertung": "unpassend",
            "kopf": "Das ist mehr als nötig.",
            "rueckmeldung": {
              "leicht": "Der Shop findet dein Paket mit der Bestell-Nummer. Dein Geburtstag hilft dabei nicht. Der Shop braucht ihn nicht. Du gibst nur nötige Daten weiter.",
              "einfach": "Der Shop findet dein Paket schon mit der Bestellnummer. Dein Geburtsdatum hilft dabei nicht, deshalb musst du es nicht nennen.",
              "standard": "Für die Zuordnung genügt die Bestellnummer. Das Geburtsdatum ist dafür nicht erforderlich und muss nicht angegeben werden."
            }
          }
        ],
        "satzstarter": {
          "anrede": [
            {
              "id": "a1",
              "text": {
                "leicht": "Guten Tag,",
                "einfach": "Guten Tag,",
                "standard": "Guten Tag,"
              }
            },
            {
              "id": "a2",
              "text": {
                "leicht": "Hallo Kunden-Service,",
                "einfach": "Hallo Kundenservice,",
                "standard": "Sehr geehrte Damen und Herren,"
              }
            }
          ],
          "anliegen": [
            {
              "id": "b1",
              "text": {
                "leicht": "Wann kommt meine Bestellung mit der Nummer 4821?",
                "einfach": "Wann wird meine Bestellung 4821 geliefert?",
                "standard": "Ich bitte um Auskunft zum Lieferstatus meiner Bestellung 4821."
              },
              "hatNummer": true,
              "wertung": "passend"
            },
            {
              "id": "b2",
              "text": {
                "leicht": "Meine Schuhe sind noch nicht da.",
                "einfach": "Meine Schuhe sind bisher nicht angekommen.",
                "standard": "Die von mir bestellten Schuhe wurden bisher nicht zugestellt."
              },
              "hatNummer": false,
              "wertung": "unpassend",
              "kopf": "Hier fehlt noch etwas.",
              "rueckmeldung": {
                "leicht": "In der E-Mail fehlt die Bestell-Nummer. Der Shop hat viele Bestellungen. Ohne Nummer findet er dein Paket nicht. Er fragt erst nach. Das dauert länger.",
                "einfach": "In der E-Mail fehlt die Bestellnummer. Weil der Shop viele Bestellungen hat, findet er dein Paket ohne Nummer nicht und muss erst nachfragen.",
                "standard": "In der Nachricht fehlt die Bestellnummer. Ohne sie kann der Händler die Sendung nicht zuordnen und muss zunächst nachfragen."
              }
            }
          ],
          "abschluss": [
            {
              "id": "c1",
              "text": {
                "leicht": "Viele Grüße, Alex",
                "einfach": "Viele Grüße, Alex",
                "standard": "Mit freundlichen Grüßen, Alex"
              }
            },
            {
              "id": "c2",
              "text": {
                "leicht": "Bitte gebt mir Bescheid. Alex",
                "einfach": "Bitte geben Sie mir kurz Bescheid. Alex",
                "standard": "Ich freue mich auf Ihre Rückmeldung. Alex"
              }
            }
          ]
        },
        "alexVorbild": {
          "leicht": "Guten Tag. Wann kommen meine Schuhe? Meine Bestell-Nummer ist 4821. Viele Grüße, Alex",
          "einfach": "Guten Tag, wann werden meine Schuhe geliefert? Meine Bestellnummer ist 4821. Viele Grüße, Alex",
          "standard": "Guten Tag, bitte teilen Sie mir den Liefertermin für meine Bestellung 4821 mit. Mit freundlichen Grüßen, Alex"
        },
        "automatischeAntwort": {
          "id": "mail-schuh-freude-reply",
          "von": {
            "name": "Schuh-Freude Service",
            "adresse": "service@schuh-freude.de",
            "istEcht": true
          },
          "an": "alex@meine-mail.de",
          "datum": "Gerade eben",
          "gelesen": false,
          "betreff": {
            "leicht": "Antwort zu Bestellung 4821",
            "einfach": "Eingangsbestätigung: Bestellung 4821",
            "standard": "Automatische Eingangsbestätigung zu Bestellung 4821"
          },
          "text": {
            "leicht": "Hallo Alex.\nWir haben deine Nachricht erhalten.\nWir suchen dein Paket mit der Nummer 4821.\nWir antworten dir heute noch.",
            "einfach": "Hallo Alex,\nvielen Dank für deine Nachricht zu Bestellung 4821.\nUnser Team prüft die Lieferung und meldet sich heute noch bei dir.",
            "standard": "Guten Tag,\nvielen Dank für Ihre Anfrage zu Vorgang 4821.\nIhre Nachricht wird bearbeitet. Wir informieren Sie unverzüglich über den Lieferstatus."
          }
        }
      }
    }
  },
  "termin": {
    "id": "termin",
    "icon": "📅",
    "thema": "Alltag und Organisation",
    "lektion": "Termin absagen",
    "titel": {
      "leicht": "Termin absagen und neu verabreden",
      "einfach": "Termin per E-Mail absagen und verschieben",
      "standard": "Terminvereinbarung: Absage und Alternativvorschlag"
    },
    "szene": "alltag-termin",
    "auftrag": {
      "leicht": "Alex hat am Donnerstag einen Termin bei Frau Klein. Alex kann nicht kommen. Alex schreibt eine E-Mail.",
      "einfach": "Alex hat am Donnerstag einen Beratungstermin bei Frau Klein. Er sagt rechtzeitig ab und schlägt eine neue Zeit vor.",
      "standard": "Alex kann seinen anstehenden Beratungstermin am Donnerstag nicht wahrnehmen. Er sagt formgerecht ab und schlägt Ausweichtermine vor."
    },
    "schritte": [
      {
        "id": "s1",
        "art": "situation",
        "lernbereich": {
          "text": {
            "leicht": "Alex hat am Donnerstag um 10 Uhr einen Termin bei Frau Klein. Alex ist an dem Tag verhindert.",
            "einfach": "Alex hat am kommenden Donnerstag um 10 Uhr einen Termin in der Beratungsstelle. Er kann an diesem Tag nicht kommen.",
            "standard": "Alex hat am Donnerstag um 10:00 Uhr einen Termin bei Frau Klein in der Beratungsstelle, ist jedoch verhindert."
          }
        },
        "handy": [
          {
            "typ": "email",
            "von": "Beratungs-Stelle Mitte",
            "betreff": {
              "leicht": "Termin am Donnerstag",
              "einfach": "Termin-Erinnerung für Donnerstag, 10:00 Uhr",
              "standard": "Bestätigung Ihres Termins am Donnerstag"
            },
            "text": {
              "leicht": "Guten Tag Alex. Wir freuen uns auf das Treffen am Donnerstag um 10 Uhr. Viele Grüße, Frau Klein.",
              "einfach": "Guten Tag Alex, hiermit erinnern wir an unseren gemeinsamen Termin am Donnerstag um 10:00 Uhr. Mit freundlichen Grüßen, Sabine Klein",
              "standard": "Sehr geehrter Alex, hiermit bestätigen wir Ihren Beratungstermin am kommenden Donnerstag, 10:00 Uhr, bei Frau Klein. Mit freundlichen Grüßen, Beratungsstelle Mitte"
            }
          }
        ]
      },
      {
        "id": "s2",
        "art": "vorbild",
        "lernbereich": {
          "etikett": "alex",
          "text": {
            "leicht": "Alex sagt früh genug ab. Alex schlägt gleich 2 neue Tage vor. Alex bleibt höflich.",
            "einfach": "Alex sagt rechtzeitig ab. Er erklärt kurz die Absage und schlägt direkt zwei Ausweichtermine vor.",
            "standard": "Alex sagt frühzeitig per E-Mail ab, bittet um Entschuldigung und unterbreitet direkt konkrete Terminvorschläge."
          }
        },
        "handy": [
          {
            "typ": "mailbox",
            "modus": "vorbild-lesen",
            "szenarioId": "termin"
          }
        ]
      },
      {
        "id": "s3",
        "art": "merksatz",
        "lernbereich": {
          "text": {
            "leicht": "Termin absagen? Sag früh Bescheid. Schlage gleich eine neue Zeit vor.",
            "einfach": "Wenn du einen Termin absagst: Rechtzeitig Bescheid geben und neue Termine vorschlagen.",
            "standard": "Bei Terminabsagen: Frühzeitig informieren, höflich bleiben und konkrete Alternativzeiträume anbieten."
          }
        },
        "handy": [
          {
            "typ": "notiz",
            "satz": {
              "leicht": "Früh absagen. Neuen Termin vorschlagen.",
              "einfach": "Rechtzeitig absagen und zwei Ausweichtermine nennen.",
              "standard": "Terminabsage rechtzeitig übermitteln und Alternativtermine vorschlagen."
            }
          }
        ]
      },
      {
        "id": "s4",
        "art": "uebung",
        "uebung": {
          "typ": "mailbox"
        },
        "lernbereich": {
          "text": {
            "leicht": "Jetzt bist du dran. Antworte Frau Klein. Sage den Donnerstag ab. Frage nach nächster Woche.",
            "einfach": "Übe jetzt im Postfach: Antworte Frau Klein, sage den Donnerstag ab und schlage nächste Woche vor.",
            "standard": "Übung im Postfach: Beantworte die E-Mail von Frau Klein, sage den Termin für Donnerstag ab und biete Alternativen an."
          }
        },
        "handy": [
          {
            "typ": "mailbox",
            "modus": "inbox-vorschau",
            "szenarioId": "termin"
          }
        ]
      },
      {
        "id": "s5",
        "art": "transfer",
        "lernbereich": {
          "text": {
            "leicht": "Geschafft. Du hast geübt, einen Termin rechtzeitig und höflich abzusagen.",
            "einfach": "Geschafft: Du hast geübt, einen Termin rechtzeitig abzusagen und einen neuen Termin vorzuschlagen.",
            "standard": "Erfolgreich geübt: Sie haben eine rechtzeitige und höfliche Terminabsage mit Ausweichvorschlag formuliert."
          }
        },
        "handy": [
          {
            "typ": "kontakt",
            "name": "Beratungs-Stelle Mitte",
            "nummer": "Frau Klein, Telefon 0123 45678",
            "piktogramm": "anruf"
          }
        ]
      }
    ],
    "mailbox": {
      "ordner": {
        "inbox": [
          {
            "id": "mail-beratung-termin",
            "von": {
              "name": "Frau Klein (Beratung)",
              "adresse": "termin@beratungsstelle-mitte.de",
              "geprueft": {
                "leicht": "Die Adresse passt zur bekannten Beratungs-Stelle aus deiner Termin-Absprache.",
                "einfach": "Bekannte Adresse im Übungsfall: Die Domain beratungsstelle-mitte.de passt zur Beratungsstelle Mitte.",
                "standard": "Bekannte Absenderadresse im Übungsfall: Die Adresse stimmt mit dem bekannten Kontakt der Beratungsstelle Mitte überein."
              },
              "istEcht": true
            },
            "an": "alex@meine-mail.de",
            "datum": "Heute, 09:15 Uhr",
            "gelesen": false,
            "betreff": {
              "leicht": "Termin am Donnerstag",
              "einfach": "Termin-Erinnerung für Donnerstag, 10:00 Uhr",
              "standard": "Bestätigung Ihres Termins am Donnerstag"
            },
            "text": {
              "leicht": "Guten Tag Alex.\nWir treffen uns am Donnerstag um 10 Uhr.\nPasst Ihnen die Zeit?\nViele Grüße, Sabine Klein.",
              "einfach": "Guten Tag Alex,\nwir erinnern an unser Beratungsgespräch am Donnerstag um 10:00 Uhr in Zimmer 12.\nMit freundlichen Grüßen,\nSabine Klein",
              "standard": "Sehr geehrter Alex,\nhiermit bestätigen wir den Termin für Ihr persönliches Beratungsgespräch am Donnerstag um 10:00 Uhr.\nMit freundlichen Grüßen,\nSabine Klein, Beratungsstelle Mitte"
            }
          }
        ],
        "sent": [],
        "trash": []
      },
      "antwort": {
        "bausteine": [
          {
            "id": "t1",
            "text": {
              "leicht": "Guten Tag Frau Klein. Am Donnerstag kann ich leider nicht kommen. Passt es nächste Woche Dienstag um 14 Uhr? Viele Grüße, Alex.",
              "einfach": "Guten Tag Frau Klein, leider muss ich den Termin am Donnerstag absagen. Passt es Ihnen stattdessen nächste Woche Dienstag um 14:00 Uhr? Mit freundlichen Grüßen, Alex",
              "standard": "Sehr geehrte Frau Klein, bedauerlicherweise muss ich unseren Termin am Donnerstag absagen. Könnten wir das Gespräch auf nächsten Dienstag um 14:00 Uhr verlegen? Mit freundlichen Grüßen, Alex"
            },
            "wertung": "passend",
            "rueckmeldung": {
              "leicht": "Die E-Mail sagt rechtzeitig ab. Sie schlägt sofort einen neuen Tag vor. Das ist verlässlich.",
              "einfach": "Du hast höflich und rechtzeitig abgesagt und direkt einen Ausweichtermin vorgeschlagen.",
              "standard": "Sie haben rechtzeitig und höflich abgesagt sowie direkt einen konkreten Ausweichtermin zur Neuplanung genannt."
            }
          },
          {
            "id": "t2",
            "text": {
              "leicht": "Hallo. Ich komme am Donnerstag nicht. Tschüss.",
              "einfach": "Hallo Frau Klein, Donnerstag schaffe ich es nicht. Ciao.",
              "standard": "Hallo, Donnerstag geht bei mir nicht. Gruß."
            },
            "wertung": "unpassend",
            "rueckmeldung": {
              "leicht": "Die Nachricht ist sehr kurz. Es fehlt ein Gruß. Und es fehlt ein Vorschlag für ein neues Treffen.",
              "einfach": "Zu kurz und unhöflich: Es fehlen eine angemessene Grußformel und ein Terminvorschlag.",
              "standard": "Unzureichend: Ein respektvoller Umgangston und ein Alternativvorschlag sind für verbindliche Absprachen unerlässlich."
            }
          },
          {
            "id": "t3",
            "text": {
              "leicht": "Guten Tag Frau Klein. Am Donnerstag schaffe ich es leider nicht. Bitte schlagen Sie mir neue Zeiten vor. Viele Grüße, Alex.",
              "einfach": "Guten Tag Frau Klein, ich muss den Donnerstag leider absagen. Können Sie mir bitte neue Termine für nächste Woche senden? Viele Grüße, Alex",
              "standard": "Sehr geehrte Frau Klein, den Termin am Donnerstag kann ich leider nicht wahrnehmen. Bitte teilen Sie mir mögliche Ersatztermine mit. Mit freundlichen Grüßen, Alex"
            },
            "wertung": "auchMoeglich",
            "rueckmeldung": {
              "leicht": "Die E-Mail ist höflich. Ein eigener Vorschlag für einen Tag hilft Frau Klein noch mehr.",
              "einfach": "Höflich abgesagt. Noch schneller geht es, wenn man direkt eigene Zeitfenster vorschlägt.",
              "standard": "Formgerechte Absage. Eigene Terminoptionen beschleunigen jedoch die Vereinbarung eines Ersatztermins."
            }
          }
        ],
        "satzstarter": {
          "anrede": [
            {
              "id": "ta1",
              "text": {
                "leicht": "Guten Tag Frau Klein,",
                "einfach": "Guten Tag Frau Klein,",
                "standard": "Sehr geehrte Frau Klein,"
              }
            },
            {
              "id": "ta2",
              "text": {
                "leicht": "Hallo Frau Klein,",
                "einfach": "Hallo Frau Klein,",
                "standard": "Liebe Frau Klein,"
              }
            }
          ],
          "anliegen": [
            {
              "id": "tb1",
              "text": {
                "leicht": "am Donnerstag kann ich leider nicht kommen. Passt es nächste Woche Dienstag um 14 Uhr?",
                "einfach": "ich muss den Termin am Donnerstag leider absagen. Hätten Sie nächste Woche Zeit?",
                "standard": "bedauerlicherweise muss ich unseren Termin am Donnerstag absagen. Könnten wir den Termin auf nächste Woche verschieben?"
              },
              "hatNummer": true
            },
            {
              "id": "tb2",
              "text": {
                "leicht": "am Donnerstag schaffe ich es nicht.",
                "einfach": "ich kann am Donnerstag leider nicht kommen.",
                "standard": "den Termin am Donnerstag muss ich leider absagen."
              },
              "hatNummer": false
            }
          ],
          "abschluss": [
            {
              "id": "tc1",
              "text": {
                "leicht": "Viele Grüße, Alex",
                "einfach": "Mit freundlichen Grüßen, Alex",
                "standard": "Mit freundlichen Grüßen, Alex"
              }
            },
            {
              "id": "tc2",
              "text": {
                "leicht": "Danke für Ihr Verständnis, Alex",
                "einfach": "Herzlichen Dank für Ihr Verständnis, Alex",
                "standard": "Vielen Dank für Ihr Verständnis, Alex"
              }
            }
          ]
        },
        "alexVorbild": {
          "leicht": "Guten Tag Frau Klein. Am Donnerstag kann ich leider nicht kommen. Passt es nächste Woche Dienstag um 14 Uhr? Viele Grüße, Alex.",
          "einfach": "Guten Tag Frau Klein, leider kann ich am Donnerstag nicht kommen. Wäre ein Termin nächste Woche Dienstag um 14:00 Uhr für Sie möglich? Mit freundlichen Grüßen, Alex",
          "standard": "Sehr geehrte Frau Klein, bedauerlicherweise muss ich unseren Termin am Donnerstag absagen. Passt es Ihnen alternativ am kommenden Dienstag um 14:00 Uhr? Mit freundlichen Grüßen, Alex"
        },
        "automatischeAntwort": {
          "id": "mail-beratung-reply",
          "von": {
            "name": "Frau Klein (Beratung)",
            "adresse": "termin@beratungsstelle-mitte.de",
            "istEcht": true
          },
          "an": "alex@meine-mail.de",
          "datum": "Gerade eben",
          "gelesen": false,
          "betreff": {
            "leicht": "Re: Termin am Donnerstag",
            "einfach": "Re: Neuer Termin nächste Woche",
            "standard": "Re: Terminverlegung"
          },
          "text": {
            "leicht": "Guten Tag Alex.\nDanke für die schnelle Nachricht.\nDienstag um 14 Uhr passt mir gut.\nIch trage den neuen Termin ein.\nViele Grüße, Sabine Klein.",
            "einfach": "Hallo Alex,\nvielen Dank für die rechtzeitige Information. Nächste Woche Dienstag um 14:00 Uhr passt mir sehr gut. Ich habe den Termin für Sie reserviert.\nMit freundlichen Grüßen,\nSabine Klein",
            "standard": "Sehr geehrter Alex,\nvielen Dank für Ihre zeitnahe Rückmeldung. Den Ausweichtermin am kommenden Dienstag um 14:00 Uhr habe ich verbindlich in unseren Kalender eingetragen.\nMit freundlichen Grüßen,\nSabine Klein, Beratungsstelle Mitte"
          }
        }
      }
    }
  },
  "einladung": {
    "id": "einladung",
    "icon": "✉️",
    "thema": "Freunde und Freizeit",
    "lektion": "Einladung beantworten",
    "titel": {
      "leicht": "Eine Einladung beantworten",
      "einfach": "Auf eine Einladung per E-Mail antworten",
      "standard": "Private Einladungen verbindlich und freundlich beantworten"
    },
    "szene": "alltag-einladung",
    "auftrag": {
      "leicht": "Tilda feiert Geburtstag. Tilda lädt Alex ein. Du kannst zusagen, absagen oder um Bedenkzeit bitten.",
      "einfach": "Tilda lädt zu ihrer Geburtstagsfeier am Samstag ein. Schreibe eine klare Antwort: Zusage (mit Mitbringsel), höfliche Absage oder Bitte um Bedenkzeit.",
      "standard": "Tilda lädt zu ihrer privaten Feier am Samstag ein. Formulieren Sie eine verbindliche Rückmeldung: Zusage (inklusive Buffetbeitrag), höfliche Absage oder Bitte um Bedenkzeit."
    },
    "schritte": [
      {
        "id": "s1",
        "art": "situation",
        "lernbereich": {
          "text": {
            "leicht": "Tilda feiert am Samstag Geburtstag. Tilda fragt: Kommst du? Bringst du Kuchen oder Salat mit?",
            "einfach": "Tilda plant ihre Geburtstagsfeier am Samstag um 15 Uhr. Sie möchte wissen, ob Alex kommt und was er mitbringt.",
            "standard": "Tilda veranstaltet am Samstag eine Geburtstagsfeier und erkundigt sich per E-Mail nach Teilnahme und möglichem Buffetbeitrag."
          }
        },
        "handy": [
          {
            "typ": "email",
            "von": "Tilda",
            "betreff": {
              "leicht": "Mein Geburtstag am Samstag",
              "einfach": "Einladung zu meiner Geburtstagsfeier",
              "standard": "Einladung zu meinem Geburtstag am Samstag"
            },
            "text": {
              "leicht": "Hallo Alex. Ich feiere am Samstag ab 15 Uhr. Kommst du? Bringst du Kuchen oder Salat mit? Viele Grüße, Tilda.",
              "einfach": "Lieber Alex, am Samstag feiere ich meinen Geburtstag ab 15:00 Uhr. Kannst du kommen? Über einen Kuchen oder Salat würde ich mich riesig freuen! Viele Grüße, Tilda",
              "standard": "Lieber Alex, ich lade dich herzlich zu meiner Geburtstagsfeier am kommenden Samstag ab 15:00 Uhr ein. Es wäre wunderbar, wenn du Zeit hast und vielleicht einen Kuchen oder Salat beisteuern könntest. Herzliche Grüße, Tilda"
            }
          }
        ]
      },
      {
        "id": "s2",
        "art": "vorbild",
        "lernbereich": {
          "etikett": "tilda",
          "text": {
            "leicht": "Tilda fragt: Kommst du am Samstag ab 15 Uhr? Bringst du etwas mit?\nAlex überlegt: Möchte ich zusagen, absagen oder bis Donnerstag überlegen?\nIm Beispiel sagt Alex zu und bringt Kuchen mit.",
            "einfach": "Tildas Einladung stellt zwei Fragen: Teilnahme am Samstag ab 15 Uhr und einen Beitrag zum Buffet. Du kannst verbindlich zusagen (und schreiben, was du mitbringst), höflich absagen oder um Bedenkzeit bis zu einem festen Tag bitten. Im Beispiel sagt Alex zu.",
            "standard": "Tildas Einladung klärt Teilnahme und Buffetbeitrag für Samstag ab 15 Uhr. Sie können frei und verbindlich entscheiden: zusagen (mit Angabe zum Mitbringsel), höflich absagen oder um Bedenkzeit mit fester Frist bitten. Im Beispiel entscheidet sich Alex für eine Zusage."
          }
        },
        "handy": [
          {
            "typ": "mailbox",
            "modus": "vorbild-lesen",
            "szenarioId": "einladung"
          }
        ]
      },
      {
        "id": "s3",
        "art": "merksatz",
        "lernbereich": {
          "text": {
            "leicht": "Einladung bekommen? Überlege in Ruhe:\n• Willst du zusagen? Dann schreibe, was du mitbringst.\n• Willst du absagen? Dann sag freundlich Bescheid.\n• Brauchst du Zeit? Nenne einen festen Tag für deine Antwort.",
            "einfach": "Auf Einladungen antworten: Überlege vor dem Schreiben, ob du zusagen (und etwas mitbringen), höflich absagen oder bis zu einer klaren Frist um Bedenkzeit bitten möchtest.",
            "standard": "Bei persönlichen Einladungen: Zeitnah und selbstbestimmt antworten – entweder mit verbindlicher Zusage (samt Absprache zum Mitbringsel), höflicher Absage oder einer Bitte um Bedenkzeit mit fester Frist."
          }
        },
        "handy": [
          {
            "typ": "notiz",
            "satz": {
              "leicht": "Antwort an Tilda:\n• Zusagen + Kuchen mitbringen\n• Oder: Höflich absagen\n• Oder: Bis Donnerstag überlegen",
              "einfach": "Mögliche Antworten an Tilda:\n• Zusage + Kuchen/Getränk mitbringen\n• Höfliche Absage mit gutem Wunsch\n• Bedenkzeit bis zu einem festen Tag (z. B. Donnerstag)",
              "standard": "Antwortoptionen für Tildas Einladung:\n• Verbindliche Zusage inkl. Buffetbeitrag\n• Höfliche, eindeutige Absage\n• Bitte um Bedenkzeit mit fester Rückmeldefrist"
            }
          }
        ]
      },
      {
        "id": "s4",
        "art": "uebung",
        "uebung": {
          "typ": "mailbox"
        },
        "lernbereich": {
          "text": {
            "leicht": "Jetzt bist du dran. Antworte Tilda im Postfach. Du kannst zusagen, höflich absagen oder um Bedenkzeit bis Donnerstag bitten.",
            "einfach": "Übe jetzt im Postfach: Antworte Tilda verbindlich – mit einer Zusage (und Mitbringsel), einer höflichen Absage oder einer Bitte um Bedenkzeit bis Donnerstag.",
            "standard": "Übung im Postfach: Beantworten Sie Tildas Einladung selbstbestimmt und verbindlich – per Zusage, höflicher Absage oder Bitte um Bedenkzeit mit fester Frist."
          }
        },
        "handy": [
          {
            "typ": "mailbox",
            "modus": "inbox-vorschau",
            "szenarioId": "einladung"
          }
        ]
      },
      {
        "id": "s5",
        "art": "transfer",
        "lernbereich": {
          "text": {
            "leicht": "Geschafft. Du hast auf eine Einladung klar und höflich mit deiner eigenen Entscheidung geantwortet.",
            "einfach": "Geschafft: Du hast geübt, eine Einladung freundlich und verbindlich zu beantworten – mit Zusage, Absage oder Bedenkzeit.",
            "standard": "Erfolgreich geübt: Sie haben auf eine private Einladung klar, respektvoll und selbstbestimmt geantwortet."
          }
        },
        "handy": [
          {
            "typ": "kontakt",
            "name": "Tilda",
            "nummer": "tilda@lernplattform-post.de",
            "piktogramm": "friend"
          }
        ]
      }
    ],
    "mailbox": {
      "ordner": {
        "inbox": [
          {
            "id": "mail-tilda-geburtstag",
            "von": {
              "name": "Tilda",
              "adresse": "tilda@lernplattform-post.de",
              "geprueft": {
                "leicht": "Die Adresse gehört deiner bekannten Kontakt-Person Tilda.",
                "einfach": "Bekannte E-Mail-Adresse: Nachricht stammt vom bekannten Konto von Tilda.",
                "standard": "Bekannte Absenderadresse im Übungsfall: E-Mail-Konto von Tilda."
              },
              "istEcht": true
            },
            "an": "alex@meine-mail.de",
            "datum": "Gestern, 18:00 Uhr",
            "gelesen": false,
            "betreff": {
              "leicht": "Mein Geburtstag am Samstag",
              "einfach": "Einladung zu meiner Geburtstagsfeier",
              "standard": "Einladung zu meinem Geburtstag am Samstag"
            },
            "text": {
              "leicht": "Hallo Alex.\nIch feiere am Samstag ab 15 Uhr meinen Geburtstag.\nKommst du?\nKannst du einen Kuchen oder Salat mitbringen?\nViele Grüße, Tilda.",
              "einfach": "Lieber Alex,\nich lade dich herzlich zu meinem Geburtstag am Samstag ab 15:00 Uhr ein.\nKommst du vorbei? Wenn du magst, bring gerne einen Kuchen oder Salat mit!\nViele Grüße,\nTilda",
              "standard": "Lieber Alex,\nam Samstag feiere ich meinen Geburtstag ab 15:00 Uhr und würde mich sehr freuen, wenn du dabei bist. Könntest du eventuell einen Kuchen oder Salat mitbringen?\nHerzliche Grüße,\nTilda"
            }
          }
        ],
        "sent": [],
        "trash": []
      },
      "antwort": {
        "bausteine": [
          {
            "id": "e1",
            "text": {
              "leicht": "Hallo Tilda. Ich komme sehr gerne zu deiner Feier. Ich backe einen Apfelkuchen und bringe ihn mit. Viele Grüße, Alex.",
              "einfach": "Hallo Tilda, danke für die Einladung! Ich komme sehr gerne am Samstag und bringe einen Apfelkuchen mit. Liebe Grüße, Alex",
              "standard": "Liebe Tilda, vielen Dank für die liebe Einladung. Ich bin am Samstag sehr gerne dabei und steuere einen Apfelkuchen zum Buffet bei. Herzliche Grüße, Alex"
            },
            "wertung": "passend",
            "rueckmeldung": {
              "leicht": "Die Antwort sagt klar zu. Sie nennt den Kuchen. Tilda kann gut planen.",
              "einfach": "Du hast dich freundlich bedankt, klar zugesagt und einen konkreten Beitrag zum Fest angekündigt.",
              "standard": "Sie haben beide Fragen freundlich beantwortet: mit einer klaren Zusage und einem konkreten Beitrag zum Buffet."
            }
          },
          {
            "id": "e2",
            "text": {
              "leicht": "Hallo Tilda. Vielleicht komme ich. Mal sehen. Alex.",
              "einfach": "Hallo Tilda, ich weiß noch nicht genau, ob ich Zeit habe. Bis dann, Alex",
              "standard": "Liebe Tilda, ich kann mich noch nicht festlegen. Eventuell schaue ich spontan vorbei. Gruß, Alex"
            },
            "wertung": "unpassend",
            "rueckmeldung": {
              "leicht": "Ein Vielleicht ohne festen Tag macht das Planen schwer. Besser sind Zusage, Absage oder Bedenkzeit mit festem Tag.",
              "einfach": "Unverbindliche Antworten ohne Terminfrist erschweren die Planung. Wähle eine Zusage, eine höfliche Absage oder eine Bedenkzeit mit festem Datum.",
              "standard": "Zu unverbindlich: Für die Planung hilft eine klare Zu- oder Absage oder eine verbindliche Bedenkzeit mit konkreter Rückmeldefrist."
            }
          },
          {
            "id": "e3",
            "text": {
              "leicht": "Hallo Tilda. Ich komme gerne am Samstag. Ich kann aber keinen Kuchen backen. Soll ich Saft mitbringen? Viele Grüße, Alex.",
              "einfach": "Hallo Tilda, ich komme gerne zu deiner Feier! Kuchen schaffe ich leider nicht, aber ich kann gerne Getränke mitbringen. Passt das? Viele Grüße, Alex",
              "standard": "Liebe Tilda, ich freue mich sehr und komme am Samstag gerne vorbei. Backen schaffe ich zeitlich leider nicht, würde aber gerne Säfte mitbringen. Passt das für dich? Herzliche Grüße, Alex"
            },
            "wertung": "auchMoeglich",
            "rueckmeldung": {
              "leicht": "Du sagst ehrlich und höflich zu und schlägst Saft als Alternative zum Kuchen vor.",
              "einfach": "Du hast klar zugesagt und direkt eine passende Alternative zum Kuchen vorgeschlagen.",
              "standard": "Sie haben Ihre Zusage mit einem ehrlichen Hinweis und einem praktischen Ausweichvorschlag verbunden."
            },
            "automatischeAntwort": {
              "id": "mail-einladung-reply-saft",
              "von": {
                "name": "Tilda",
                "adresse": "tilda@lernplattform-post.de",
                "istEcht": true
              },
              "an": "alex@meine-mail.de",
              "datum": "Gerade eben",
              "gelesen": false,
              "betreff": {
                "leicht": "Re: Mein Geburtstag am Samstag",
                "einfach": "Re: Danke für deine Zusage!",
                "standard": "Re: Schön, dass du kommst!"
              },
              "text": {
                "leicht": "Hallo Alex.\nIch freue mich sehr auf dich.\nSaft passt super!\nBis Samstag um 15 Uhr.\nDeine Tilda.",
                "einfach": "Hallo Alex,\nschön, dass du kommst! Säfte passen perfekt – danke dir!\nBis Samstag ab 15:00 Uhr,\nTilda",
                "standard": "Lieber Alex,\nvielen Dank für deine Zusage! Säfte sind eine großartige Ergänzung für das Buffet. Ich freue mich auf Samstag!\nLiebe Grüße,\nTilda"
              }
            }
          },
          {
            "id": "e4",
            "text": {
              "leicht": "Hallo Tilda. Danke für die Einladung. Ich kann am Samstag leider nicht kommen. Ich wünsche dir eine schöne Feier. Viele Grüße, Alex.",
              "einfach": "Hallo Tilda, vielen Dank für die Einladung! Am Samstag habe ich leider schon etwas vor und muss absagen. Ich wünsche dir eine tolle Feier! Liebe Grüße, Alex",
              "standard": "Liebe Tilda, vielen Dank für deine Einladung. Leider bin ich am Samstag verhindert und kann nicht teilnehmen. Ich wünsche dir eine wunderschöne Feier! Herzliche Grüße, Alex"
            },
            "wertung": "passend",
            "rueckmeldung": {
              "leicht": "Du hast dich bedankt und freundlich abgesagt. Auch Nein sagen ist völlig in Ordnung.",
              "einfach": "Du hast dich freundlich bedankt, klar abgesagt und Tilda eine schöne Feier gewünscht. So kann sie gut planen.",
              "standard": "Sie haben sich wertschätzend bedankt und eindeutig abgesagt – das respektiert die eigenen Möglichkeiten und hilft bei der Planung."
            },
            "automatischeAntwort": {
              "id": "mail-einladung-reply-absage",
              "von": {
                "name": "Tilda",
                "adresse": "tilda@lernplattform-post.de",
                "istEcht": true
              },
              "an": "alex@meine-mail.de",
              "datum": "Gerade eben",
              "gelesen": false,
              "betreff": {
                "leicht": "Re: Mein Geburtstag am Samstag",
                "einfach": "Re: Schade, dass es nicht klappt",
                "standard": "Re: Vielen Dank für deine Rückmeldung"
              },
              "text": {
                "leicht": "Hallo Alex.\nSchade, dass du nicht kannst.\nDanke für deine schnelle Antwort.\nWir sehen uns bald wieder!\nDeine Tilda.",
                "einfach": "Hallo Alex,\nschade, dass es am Samstag bei dir nicht klappt! Danke, dass du mir direkt Bescheid gesagt hast. Wir holen das bald nach!\nLiebe Grüße,\nTilda",
                "standard": "Lieber Alex,\nschade, dass du am Samstag verhindert bist – vielen Dank aber für deine klare und schnelle Rückmeldung! Wir treffen uns bestimmt bald wieder.\nHerzliche Grüße,\nTilda"
              }
            }
          },
          {
            "id": "e5",
            "text": {
              "leicht": "Hallo Tilda. Danke für die Einladung. Ich muss noch nachsehen, ob ich Zeit habe. Ich sage dir bis Donnerstag Bescheid. Viele Grüße, Alex.",
              "einfach": "Hallo Tilda, danke für die Einladung! Ich muss erst noch einen Termin abklären und gebe dir bis Donnerstagabend Bescheid, ob ich kommen kann. Liebe Grüße, Alex",
              "standard": "Liebe Tilda, vielen Dank für die Einladung. Ich muss noch kurz prüfen, ob es zeitlich klappt, und melde mich spätestens bis Donnerstag verbindlich bei dir. Herzliche Grüße, Alex"
            },
            "wertung": "passend",
            "rueckmeldung": {
              "leicht": "Du bittest um Bedenkzeit und nennst einen festen Tag für deine Antwort.",
              "einfach": "Du hast höflich um Bedenkzeit gebeten und mit Donnerstag eine klare Frist genannt.",
              "standard": "Sie haben verbindlich um Bedenkzeit gebeten und eine klare Rückmeldefrist gesetzt, sodass die Planung verlässlich bleibt."
            },
            "automatischeAntwort": {
              "id": "mail-einladung-reply-bedenkzeit",
              "von": {
                "name": "Tilda",
                "adresse": "tilda@lernplattform-post.de",
                "istEcht": true
              },
              "an": "alex@meine-mail.de",
              "datum": "Gerade eben",
              "gelesen": false,
              "betreff": {
                "leicht": "Re: Mein Geburtstag am Samstag",
                "einfach": "Re: Alles klar, bis Donnerstag!",
                "standard": "Re: Gerne in Ruhe prüfen"
              },
              "text": {
                "leicht": "Hallo Alex.\nAlles klar!\nSchau in Ruhe nach.\nSag mir einfach bis Donnerstag Bescheid.\nDeine Tilda.",
                "einfach": "Hallo Alex,\nkein Problem! Prüfe deinen Kalender ganz in Ruhe und gib mir einfach bis Donnerstag Bescheid.\nLiebe Grüße,\nTilda",
                "standard": "Lieber Alex,\ngar kein Problem! Kläre deine Termine in aller Ruhe und melde dich einfach wie besprochen bis Donnerstag.\nHerzliche Grüße,\nTilda"
              }
            }
          }
        ],
        "satzstarter": {
          "anrede": [
            {
              "id": "ea1",
              "text": {
                "leicht": "Hallo Tilda,",
                "einfach": "Hallo Tilda,",
                "standard": "Liebe Tilda,"
              }
            },
            {
              "id": "ea2",
              "text": {
                "leicht": "Liebe Tilda,",
                "einfach": "Liebe Tilda,",
                "standard": "Hallo liebe Tilda,"
              }
            }
          ],
          "anliegen": [
            {
              "id": "eb1",
              "text": {
                "leicht": "ich komme sehr gerne zu deiner Feier und bringe einen Kuchen mit.",
                "einfach": "danke für die Einladung! Ich bin am Samstag dabei und bringe Kuchen mit.",
                "standard": "vielen Dank für die Einladung, ich komme sehr gerne und steuere einen Kuchen bei."
              },
              "hatNummer": true,
              "wertung": "passend",
              "rueckmeldung": {
                "leicht": "Die Antwort sagt klar zu. Sie nennt den Kuchen. Tilda kann gut planen.",
                "einfach": "Du hast freundlich zugesagt und angekündigt, einen Kuchen mitzubringen.",
                "standard": "Sie haben verbindlich zugesagt und einen konkreten Beitrag zum Buffet genannt."
              }
            },
            {
              "id": "eb2",
              "text": {
                "leicht": "danke für die Einladung. Ich kann am Samstag leider nicht kommen und wünsche dir eine schöne Feier.",
                "einfach": "danke für die Einladung! Ich habe am Samstag leider schon etwas vor und kann nicht kommen. Ich wünsche dir ein schönes Fest.",
                "standard": "vielen Dank für deine Einladung. Leider bin ich am Samstag bereits verhindert und kann nicht teilnehmen – ich wünsche dir eine wunderbare Feier."
              },
              "hatNummer": true,
              "wertung": "passend",
              "rueckmeldung": {
                "leicht": "Du hast dich bedankt und freundlich abgesagt. Auch Nein sagen ist völlig in Ordnung.",
                "einfach": "Du hast höflich und klar abgesagt und Tilda eine schöne Feier gewünscht.",
                "standard": "Sie haben wertschätzend und eindeutig abgesagt, sodass Tilda verlässlich planen kann."
              },
              "automatischeAntwort": {
                "id": "mail-einladung-reply-absage",
                "von": {
                  "name": "Tilda",
                  "adresse": "tilda@lernplattform-post.de",
                  "istEcht": true
                },
                "an": "alex@meine-mail.de",
                "datum": "Gerade eben",
                "gelesen": false,
                "betreff": {
                  "leicht": "Re: Mein Geburtstag am Samstag",
                  "einfach": "Re: Schade, dass es nicht klappt",
                  "standard": "Re: Vielen Dank für deine Rückmeldung"
                },
                "text": {
                  "leicht": "Hallo Alex.\nSchade, dass du nicht kannst.\nDanke für deine schnelle Antwort.\nWir sehen uns bald wieder!\nDeine Tilda.",
                  "einfach": "Hallo Alex,\nschade, dass es am Samstag bei dir nicht klappt! Danke, dass du mir direkt Bescheid gesagt hast. Wir holen das bald nach!\nLiebe Grüße,\nTilda",
                  "standard": "Lieber Alex,\nschade, dass du am Samstag verhindert bist – vielen Dank aber für deine klare und schnelle Rückmeldung! Wir treffen uns bestimmt bald wieder.\nHerzliche Grüße,\nTilda"
                }
              }
            },
            {
              "id": "eb3",
              "text": {
                "leicht": "danke für die Einladung. Ich muss erst in meinen Kalender schauen und gebe dir bis Donnerstag Bescheid.",
                "einfach": "danke für die Einladung! Ich muss erst noch meinen Kalender prüfen und gebe dir bis Donnerstag verbindlich Bescheid.",
                "standard": "vielen Dank für deine Einladung. Ich muss meine Termine noch klären und gebe dir bis spätestens Donnerstag verbindlich Bescheid."
              },
              "hatNummer": true,
              "wertung": "passend",
              "rueckmeldung": {
                "leicht": "Du bittest um Bedenkzeit und nennst Donnerstag als festen Tag für deine Antwort.",
                "einfach": "Du hast freundlich um Bedenkzeit gebeten und mit Donnerstag eine klare Frist genannt.",
                "standard": "Sie haben verbindlich um Bedenkzeit gebeten und eine konkrete Rückmeldefrist vereinbart."
              },
              "automatischeAntwort": {
                "id": "mail-einladung-reply-bedenkzeit",
                "von": {
                  "name": "Tilda",
                  "adresse": "tilda@lernplattform-post.de",
                  "istEcht": true
                },
                "an": "alex@meine-mail.de",
                "datum": "Gerade eben",
                "gelesen": false,
                "betreff": {
                  "leicht": "Re: Mein Geburtstag am Samstag",
                  "einfach": "Re: Alles klar, bis Donnerstag!",
                  "standard": "Re: Gerne in Ruhe prüfen"
                },
                "text": {
                  "leicht": "Hallo Alex.\nAlles klar!\nSchau in Ruhe nach.\nSag mir einfach bis Donnerstag Bescheid.\nDeine Tilda.",
                  "einfach": "Hallo Alex,\nkein Problem! Prüfe deinen Kalender ganz in Ruhe und gib mir einfach bis Donnerstag Bescheid.\nLiebe Grüße,\nTilda",
                  "standard": "Lieber Alex,\ngar kein Problem! Kläre deine Termine in aller Ruhe und melde dich einfach wie besprochen bis Donnerstag.\nHerzliche Grüße,\nTilda"
                }
              }
            },
            {
              "id": "eb4",
              "text": {
                "leicht": "vielleicht komme ich. Mal sehen.",
                "einfach": "ich weiß noch nicht, ob es klappt, und schaue eventuell spontan vorbei.",
                "standard": "ich lasse das erst einmal offen und entscheide irgendwann spontan."
              },
              "hatNummer": false,
              "wertung": "unpassend",
              "rueckmeldung": {
                "leicht": "Ein Vielleicht ohne festen Tag macht das Planen schwer. Besser sind Zusage, Absage oder Bedenkzeit mit festem Tag.",
                "einfach": "Unverbindliche Antworten ohne Terminfrist erschweren die Planung. Wähle eine Zusage, eine höfliche Absage oder eine Bedenkzeit mit festem Datum.",
                "standard": "Zu unverbindlich: Für die Planung hilft eine klare Zu- oder Absage oder eine verbindliche Bedenkzeit mit konkreter Rückmeldefrist."
              }
            }
          ],
          "abschluss": [
            {
              "id": "ec1",
              "text": {
                "leicht": "Viele Grüße, Alex",
                "einfach": "Herzliche Grüße, Alex",
                "standard": "Herzliche Grüße, Alex"
              }
            },
            {
              "id": "ec2",
              "text": {
                "leicht": "Liebe Grüße, Alex",
                "einfach": "Alles Gute, dein Alex",
                "standard": "Beste Grüße, Alex"
              }
            }
          ]
        },
        "alexVorbild": {
          "leicht": "Hallo Tilda. Ich komme sehr gerne zu deiner Feier. Ich backe einen Apfelkuchen und bringe ihn mit. Viele Grüße, Alex.",
          "einfach": "Liebe Tilda, danke für die Einladung! Ich komme sehr gerne am Samstag und bringe einen Apfelkuchen mit. Viele Grüße, Alex",
          "standard": "Liebe Tilda, vielen Dank für die Einladung. Ich nehme am Samstag sehr gerne teil und bringe einen frischen Apfelkuchen mit. Herzliche Grüße, Alex"
        },
        "automatischeAntwort": {
          "id": "mail-tilda-reply",
          "von": {
            "name": "Tilda",
            "adresse": "tilda@lernplattform-post.de",
            "istEcht": true
          },
          "an": "alex@meine-mail.de",
          "datum": "Gerade eben",
          "gelesen": false,
          "betreff": {
            "leicht": "Re: Mein Geburtstag am Samstag",
            "einfach": "Re: Danke für deine Zusage!",
            "standard": "Re: Ich freue mich auf Samstag!"
          },
          "text": {
            "leicht": "Hallo Alex.\nIch freue mich sehr auf dich.\nUnd Apfelkuchen schmeckt super.\nBis Samstag um 15 Uhr.\nDeine Tilda.",
            "einfach": "Hallo Alex,\ntoll, dass du dabei bist! Auf deinen Kuchen freue ich mich schon sehr. Bis Samstag ab 15:00 Uhr!\nLiebe Grüße,\nTilda",
            "standard": "Lieber Alex,\nherzlichen Dank für deine Zusage und das tolle Mitbringsel. Ich freue mich sehr auf unser Wiedersehen am Samstag!\nBeste Grüße,\nTilda"
          }
        }
      }
    }
  },
  "service": {
    "id": "service",
    "icon": "❓",
    "thema": "Verträge und Geld",
    "lektion": "Frage an Kundenservice",
    "titel": {
      "leicht": "Frage an den Kunden-Service",
      "einfach": "Eine Frage zur Rechnung an den Kundenservice schreiben",
      "standard": "Verbraucheranfrage: Rechnungsprüfung beim Kundenservice"
    },
    "szene": "alltag-kundenservice",
    "auftrag": {
      "leicht": "Alex hat eine Handy-Rechnung bekommen. Ein Betrag von 5 Euro ist unklar. Alex fragt beim Service nach.",
      "einfach": "Alex findet auf seiner Monatsrechnung einen unbekannten Betrag von 5 Euro. Er fragt schriftlich beim Kundenservice nach.",
      "standard": "Alex stellt eine unklare Position über 5 Euro auf seiner Telefonrechnung fest und richtet eine schriftliche Klärungsanfrage an den Anbieter."
    },
    "schritte": [
      {
        "id": "s1",
        "art": "situation",
        "lernbereich": {
          "text": {
            "leicht": "Alex hat die Monats-Rechnung vom Handy bekommen. Auf der Rechnung stehen 5 Euro mehr als sonst. Alex versteht den Betrag nicht.",
            "einfach": "Alex prüft seine Mobilfunkrechnung. Neben den normalen Gebühren sind 5 Euro für eine Zusatzoption aufgeführt, die er nicht kennt.",
            "standard": "Alex stellt bei der Rechnungsprüfung eine Abbuchung von 5 Euro für eine unbekannte Zusatzleistung fest."
          }
        },
        "handy": [
          {
            "typ": "email",
            "von": "Stadtfunk Mobilfunk",
            "betreff": {
              "leicht": "Deine neue Monats-Rechnung",
              "einfach": "Ihre Mobilfunkrechnung für diesen Monat",
              "standard": "Rechnung zum Vertrag #K-9021"
            },
            "text": {
              "leicht": "Guten Tag Alex. Deine neue Rechnung ist fertig. Grundpreis 15 Euro. Zusatzoption 5 Euro. Gesamt: 20 Euro. Stadtfunk Service.",
              "einfach": "Sehr geehrter Kunde, Ihre aktuelle Rechnung beträgt 20 Euro (15 Euro Grundgebühr zzgl. 5 Euro Zusatzoption). Mit freundlichen Grüßen, Ihr Stadtfunk Team",
              "standard": "Sehr geehrter Kunde, anbei finden Sie Ihre Monatsabrechnung über insgesamt 20,00 Euro. Bei Fragen steht unser Kundenservice zur Verfügung. Mit freundlichen Grüßen, Stadtfunk Kundenservice"
            }
          }
        ]
      },
      {
        "id": "s2",
        "art": "vorbild",
        "lernbereich": {
          "etikett": "alex",
          "text": {
            "leicht": "Alex bleibt sachlich. Alex nennt seine Kunden-Nummer #K-9021. Alex fragt: Was bedeuten die 5 Euro?",
            "einfach": "Alex schreibt eine sachliche Nachricht. Er nennt seine Kundennummer #K-9021 und bittet um Aufklärung der 5 Euro.",
            "standard": "Alex verfasst eine formelle Anfrage unter Angabe seiner Kundennummer #K-9021 und fordert eine Aufschlüsselung der Sonderposition an."
          }
        },
        "handy": [
          {
            "typ": "mailbox",
            "modus": "vorbild-lesen",
            "szenarioId": "service"
          }
        ]
      },
      {
        "id": "s3",
        "art": "merksatz",
        "lernbereich": {
          "text": {
            "leicht": "Frage zur Rechnung? Nenne die Kunden-Nummer. Verrate niemals deine Bank-PIN oder dein Passwort.",
            "einfach": "Bei Fragen an den Kundenservice: Kundennummer nennen, aber niemals Passwörter oder PINs mitteilen.",
            "standard": "Verbraucher-Grundregel: Kundennummer zur Identifikation angeben; sensible Zugangsdaten und PINs bleiben strikt geheim."
          }
        },
        "handy": [
          {
            "typ": "notiz",
            "satz": {
              "leicht": "Kunden-Nummer nennen. Passwörter geheim halten.",
              "einfach": "Kundennummer angeben, Passwörter und PINs niemals mitsenden.",
              "standard": "Kundennummer angeben; Passwörter und Sicherheits-PINs niemals versenden."
            }
          }
        ]
      },
      {
        "id": "s4",
        "art": "uebung",
        "uebung": {
          "typ": "mailbox"
        },
        "lernbereich": {
          "text": {
            "leicht": "Jetzt bist du dran. Schreibe dem Kunden-Service. Nenne deine Kunden-Nummer #K-9021.",
            "einfach": "Übe jetzt im Postfach: Schreibe an den Support und frage mit der Kundennummer #K-9021 nach den 5 Euro.",
            "standard": "Übung im Postfach: Richte eine Klärungsanfrage bezüglich der 5 Euro an den Kundenservice unter Nennung der Kundennummer #K-9021."
          }
        },
        "handy": [
          {
            "typ": "mailbox",
            "modus": "inbox-vorschau",
            "szenarioId": "service"
          }
        ]
      },
      {
        "id": "s5",
        "art": "transfer",
        "lernbereich": {
          "text": {
            "leicht": "Geschafft. Du hast geübt, bei einer unklaren Rechnung schriftlich nachzufragen.",
            "einfach": "Geschafft: Du hast geübt, bei unklaren Kosten schriftlich und mit Kundennummer nachzufragen.",
            "standard": "Erfolgreich geübt: Sie haben sachlich und unter Nennung der Kundennummer nach einer unklaren Rechnungsposition gefragt."
          }
        },
        "handy": [
          {
            "typ": "kontakt",
            "name": "Verbraucher-Zentrale",
            "nummer": "Beratung zu Rechnungen und Verträgen",
            "piktogramm": "help"
          }
        ]
      }
    ],
    "mailbox": {
      "ordner": {
        "inbox": [
          {
            "id": "mail-service-rechnung",
            "von": {
              "name": "Stadtfunk Service",
              "adresse": "service@mobil-stadtfunk.de",
              "geprueft": {
                "leicht": "Die Adresse passt zum bekannten Telefon-Anbieter aus deinem Vertrag.",
                "einfach": "Absenderadresse geprüft: Die Domain mobil-stadtfunk.de passt zum bekannten Anbieter.",
                "standard": "Absenderadresse im Übungsfall: Die Domain mobil-stadtfunk.de stimmt mit dem bekannten Vertragspartner überein."
              },
              "istEcht": true
            },
            "an": "alex@meine-mail.de",
            "datum": "Gestern, 11:20 Uhr",
            "gelesen": false,
            "betreff": {
              "leicht": "Deine neue Monats-Rechnung",
              "einfach": "Ihre Mobilfunkrechnung für diesen Monat",
              "standard": "Rechnung zum Vertrag #K-9021"
            },
            "text": {
              "leicht": "Guten Tag Alex.\nDeine neue Monats-Rechnung liegt vor.\nGrundpreis: 15 Euro.\nZusatz-Option: 5 Euro.\nGesamt-Betrag: 20 Euro.\nDein Stadtfunk Service Team.",
              "einfach": "Sehr geehrter Kunde,\nanbei erhalten Sie die Abrechnung für den laufenden Abrechnungszeitraum über 20 Euro (Grundpreis 15 € zzgl. Zusatzoption 5 €).\nMit freundlichen Grüßen,\nStadtfunk Kundenservice",
              "standard": "Sehr geehrter Kunde, anbei erhalten Sie Ihre Abrechnung zum Vertrag #K-9021 über 20,00 Euro. Details entnehmen Sie der Aufstellung. Mit freundlichen Grüßen, Stadtfunk Service GmbH"
            }
          }
        ],
        "sent": [],
        "trash": []
      },
      "antwort": {
        "bausteine": [
          {
            "id": "s_b1",
            "text": {
              "leicht": "Guten Tag. Meine Kunden-Nummer ist #K-9021. Bitte erklären Sie mir den Betrag von 5 Euro auf meiner Rechnung. Vielen Dank, Alex.",
              "einfach": "Guten Tag, zu meiner Kundennummer #K-9021 habe ich eine Frage: Welche Leistung verbirgt sich hinter den 5 Euro Zusatzoption? Mit freundlichen Grüßen, Alex",
              "standard": "Sehr geehrte Damen und Herren, bezüglich meines Vertrags mit der Kundennummer #K-9021 bitte ich um Erläuterung der Position 'Zusatzoption' über 5,00 Euro. Mit freundlichen Grüßen, Alex"
            },
            "wertung": "passend",
            "rueckmeldung": {
              "leicht": "Die E-Mail ist sachlich. Sie nennt die Kunden-Nummer. Sie fragt nach den 5 Euro.",
              "einfach": "Du hast sachlich geschrieben, deine Kundennummer genannt und genau nach den 5 Euro gefragt.",
              "standard": "Sie haben Ihr Anliegen sachlich formuliert, die Kundennummer genannt und die unklare Position präzise bezeichnet."
            }
          },
          {
            "id": "s_b2",
            "text": {
              "leicht": "Hallo. Hier ist mein Online-Passwort und meine Geheim-PIN. Schaut bitte mal in mein Konto rein. Alex.",
              "einfach": "Hallo Support, mein Passwort lautet 'Sommer2026' und die PIN ist 1234. Prüft bitte, warum 5 Euro abgezogen wurden. Alex",
              "standard": "Sehr geehrte Damen und Herren, anbei meine Login-Daten zur Prüfung des Vorgangs. Mit freundlichen Grüßen, Alex"
            },
            "wertung": "unpassend",
            "rueckmeldung": {
              "leicht": "Das ist gefährlich. Verrate niemals dein Passwort oder deine PIN in einer E-Mail. Ein echter Kunden-Service fragt nie danach.",
              "einfach": "Vorsicht: Niemals Passwörter oder PINs per E-Mail versenden! Seriöse Anbieter benötigen ausschließlich deine Kundennummer.",
              "standard": "Kritisches Sicherheitsrisiko: Das Versenden von Zugangsdaten und PINs per E-Mail verstößt gegen fundamentale Sicherheitsregeln."
            }
          },
          {
            "id": "s_b3",
            "text": {
              "leicht": "Guten Tag. Ich bezahle die 5 Euro nicht. Zieht mir das Geld nicht ab. Alex.",
              "einfach": "Guten Tag, 5 Euro mehr bezahle ich nicht. Kündigen Sie das sofort! Alex",
              "standard": "Sehr geehrte Damen und Herren, ich widerspreche den 5 Euro vollumfänglich und verweigere die Zahlung. Gruß, Alex"
            },
            "wertung": "auchMoeglich",
            "rueckmeldung": {
              "leicht": "Alex widerspricht den Kosten. Aber ohne Kunden-Nummer kann der Service den Vertrag nicht finden.",
              "einfach": "Widerspruch ist ein gutes Recht, aber ohne Angabe der Kundennummer kann der Anbieter die Rechnung nicht zuordnen.",
              "standard": "Ein Widerspruch ist legitim, erfordert zur Bearbeitung aber zwingend die Angabe der Vertrags- oder Kundennummer."
            }
          }
        ],
        "satzstarter": {
          "anrede": [
            {
              "id": "sa1",
              "text": {
                "leicht": "Guten Tag,",
                "einfach": "Guten Tag,",
                "standard": "Sehr geehrte Damen und Herren,"
              }
            },
            {
              "id": "sa2",
              "text": {
                "leicht": "Hallo Stadtfunk Service,",
                "einfach": "Hallo Kundenservice,",
                "standard": "Sehr geehrtes Support-Team,"
              }
            }
          ],
          "anliegen": [
            {
              "id": "sb1",
              "text": {
                "leicht": "meine Kunden-Nummer ist #K-9021. Bitte erklären Sie mir die 5 Euro auf meiner Rechnung.",
                "einfach": "zu meiner Kundennummer #K-9021 habe ich eine Frage zu den 5 Euro Zusatzoption.",
                "standard": "unter Bezug auf meine Kundennummer #K-9021 bitte ich um Aufschlüsselung des Betrags von 5,00 Euro."
              },
              "hatNummer": true
            },
            {
              "id": "sb2",
              "text": {
                "leicht": "warum kostet meine Rechnung 5 Euro mehr?",
                "einfach": "ich verstehe meine Rechnung nicht.",
                "standard": "auf meiner Rechnung ist ein unbekannter Betrag enthalten."
              },
              "hatNummer": false
            }
          ],
          "abschluss": [
            {
              "id": "sc1",
              "text": {
                "leicht": "Viele Grüße, Alex",
                "einfach": "Mit freundlichen Grüßen, Alex",
                "standard": "Mit freundlichen Grüßen, Alex"
              }
            },
            {
              "id": "sc2",
              "text": {
                "leicht": "Danke für Ihre Prüfung, Alex",
                "einfach": "Vielen Dank für Ihre Hilfe, Alex",
                "standard": "Vielen Dank für Ihre Unterstützung, Alex"
              }
            }
          ]
        },
        "alexVorbild": {
          "leicht": "Guten Tag. Meine Kunden-Nummer ist #K-9021. Bitte erklären Sie mir den Betrag von 5 Euro auf meiner Rechnung. Vielen Dank, Alex.",
          "einfach": "Guten Tag, zu meiner Kundennummer #K-9021 bitte ich um eine Auskunft bezüglich der Zusatzoption über 5 Euro. Mit freundlichen Grüßen, Alex",
          "standard": "Sehr geehrte Damen und Herren, bezüglich meines Vertrags mit der Kundennummer #K-9021 bitte ich um schriftliche Erläuterung der Zusatzgebühr von 5,00 Euro. Mit freundlichen Grüßen, Alex"
        },
        "automatischeAntwort": {
          "id": "mail-service-reply",
          "von": {
            "name": "Stadtfunk Service",
            "adresse": "service@mobil-stadtfunk.de",
            "istEcht": true
          },
          "an": "alex@meine-mail.de",
          "datum": "Gerade eben",
          "gelesen": false,
          "betreff": {
            "leicht": "Re: Deine neue Monats-Rechnung",
            "einfach": "Re: Anfrage zu Kundennummer #K-9021",
            "standard": "Re: Ihre Anfrage zur Rechnung"
          },
          "text": {
            "leicht": "Guten Tag Alex.\nDanke für deine Nachricht.\nWir haben dein Konto #K-9021 geprüft.\nDie 5 Euro waren ein Fehler von uns.\nWir schreiben dir das Geld auf der nächsten Rechnung gut.\nDein Stadtfunk Team.",
            "einfach": "Sehr geehrter Kunde,\nvielen Dank für Ihren Hinweis zur Kundennummer #K-9021. Wir haben den Vorgang geprüft: Die Zusatzoption wurde irrtümlich gebucht. Der Betrag von 5 Euro wird Ihnen mit der nächsten Abrechnung gutgeschrieben.\nMit freundlichen Grüßen,\nStadtfunk Abrechnungsteam",
            "standard": "Sehr geehrter Alex,\nwir haben Ihr Anliegen zur Kundennummer #K-9021 überprüft. Die Berechnung der Position erfolgte fehlerhaft durch eine Systemumstellung. Wir erstatten den Betrag von 5,00 Euro auf Ihrem Kundenkonto.\nMit freundlichen Grüßen,\nStadtfunk Kundenservice"
          }
        }
      }
    }
  },
  "paket": {
    "id": "paket",
    "icon": "📦",
    "thema": "Gefahren und Schutz",
    "lektion": "Gefälschte Paket-Nachricht",
    "titel": {
      "leicht": "Verdächtige Paket-Nachricht prüfen",
      "einfach": "Gefälschte Paket-Benachrichtigung entlarven",
      "standard": "Phishing-Prävention: Manipulierte Paket-Mails erkennen"
    },
    "szene": "phishing-paket",
    "auftrag": {
      "leicht": "Alex bekommt eine E-Mail über ein Paket. Der Absender will 1,99 Euro Zoll. Alex prüft die E-Mail genau.",
      "einfach": "Alex erhält eine angebliche Paketnachricht mit Zahlungsaufforderung. Er untersucht Absender und Link.",
      "standard": "Alex erhält eine angebliche Sendungsbenachrichtigung mit Zahlungslink. Er analysiert die E-Mail auf Phishing-Merkmale."
    },
    "schritte": [
      {
        "id": "s1",
        "art": "situation",
        "lernbereich": {
          "text": {
            "leicht": "Alex bekommt eine E-Mail: Ein Paket wartet. Alex soll 1,99 Euro bezahlen. Sonst geht das Paket verloren.",
            "einfach": "Eine E-Mail behauptet: Ein Paket kann erst nach Zahlung von 1,99 Euro Zollgebühr zugestellt werden. Es wird mit Vernichtung gedroht.",
            "standard": "Eine angebliche Benachrichtigung fordert zur Zahlung von 1,99 Euro Zollgebühren innerhalb von 24 Stunden auf, andernfalls drohe der Verlust der Sendung."
          }
        },
        "handy": [
          {
            "typ": "email",
            "von": "Paket-Zustellung Express",
            "betreff": {
              "leicht": "Paket wartet: 1,99 Euro fehlen",
              "einfach": "Wichtig: Sendung kann nicht zugestellt werden",
              "standard": "Letzte Benachrichtigung zur Sendung #DE-8921"
            },
            "text": {
              "leicht": "Hallo. Dein Paket liegt im Lager. Zahle 1,99 Euro Zoll in 24 Stunden. Klicke hier: paket-zoll-direkt.top",
              "einfach": "Guten Tag, Ihr Paket liegt im Verteilerzentrum. Bitte zahlen Sie die Zollgebühr von 1,99 Euro innerhalb von 24 Stunden unter folgendem Link: https://paket-zoll-direkt.top/zahlung",
              "standard": "Sehr geehrter Kunde, Ihre Sendung wurde gestoppt. Zur Freigabe ist eine Gebühr von 1,99 Euro erforderlich. Klicken Sie hier: https://paket-zoll-direkt.top/zahlung"
            }
          }
        ]
      },
      {
        "id": "s2",
        "art": "vorbild",
        "lernbereich": {
          "etikett": "tilda",
          "text": {
            "leicht": "Tilda schaut genau hin. Die Adresse gehört nicht zum bekannten Paket-Dienst. Außerdem wird Druck gemacht. Tilda tippt nicht auf den Link.",
            "einfach": "Tilda untersucht Absender und Nachricht: Die Adresse passt zu keinem bekannten Paketdienst, und gleichzeitig wird Zeitdruck mit Geld gemacht. Sie klickt nicht auf den Link.",
            "standard": "Tilda prüft mehrere Warnsignale gemeinsam: unbekannte Absenderadresse ohne Bezug zum erwarteten Paketdienst (entscheidend ist nicht die Domain-Endung), künstlicher Zeitdruck und ein Zahlungslink."
          }
        },
        "handy": [
          {
            "typ": "mailbox",
            "modus": "vorbild-lesen",
            "szenarioId": "paket"
          }
        ]
      },
      {
        "id": "s3",
        "art": "merksatz",
        "lernbereich": {
          "text": {
            "leicht": "Wer Druck macht und Geld will: Vorsicht Betrug. Klicke auf keinen fremden Link.",
            "einfach": "Vorsicht bei E-Mails mit Zeitdruck und Zahlungsaufforderungen: Links niemals anklicken.",
            "standard": "Phishing-Grundregel: Echte Paketdienste fordern keine Zollgebühren über Links in E-Mails an. Niemals Links anklicken."
          }
        },
        "handy": [
          {
            "typ": "notiz",
            "satz": {
              "leicht": "Kein Klick bei Zeit-Druck. Echte Paket-Dienste fordern kein Geld per Link.",
              "einfach": "Niemals auf unbekannte Zahlungslinks klicken.",
              "standard": "Links in unaufgeforderten Zahlungsmails ignorieren und löschen."
            }
          }
        ]
      },
      {
        "id": "s4",
        "art": "uebung",
        "uebung": {
          "typ": "mailbox"
        },
        "lernbereich": {
          "text": {
            "leicht": "Jetzt bist du dran. Prüfe die E-Mail im Postfach. Melde den Betrug oder wirf ihn in den Papierkorb.",
            "einfach": "Übe jetzt im Postfach: Untersuche Absender und Link mit der Lupe. Melde oder lösche die E-Mail.",
            "standard": "Übung im Postfach: Prüfe Absenderadresse und Link-Ziel gefahrlos und leite die richtige Schutzmaßnahme ein."
          }
        },
        "handy": [
          {
            "typ": "mailbox",
            "modus": "inbox-vorschau",
            "szenarioId": "paket"
          }
        ]
      },
      {
        "id": "s5",
        "art": "transfer",
        "lernbereich": {
          "text": {
            "leicht": "Geschafft. Du hast die falsche Paket-Nachricht erkannt und den Link nicht angetippt.",
            "einfach": "Geschafft: Du hast die Phishing-Nachricht erkannt, den verdächtigen Link nicht angeklickt und die E-Mail gemeldet oder gelöscht.",
            "standard": "Erfolgreich geübt: Sie haben die verdächtige Paket-Nachricht erkannt, den Link nicht geöffnet und sie gemeldet oder gelöscht."
          }
        },
        "handy": [
          {
            "typ": "kontakt",
            "name": "Verbraucher-Zentrale Phishing-Radar",
            "nummer": "phishing@verbraucherzentrale.nrw",
            "piktogramm": "report"
          }
        ]
      }
    ],
    "mailbox": {
      "ordner": {
        "inbox": [
          {
            "id": "mail-fake-paket",
            "istSpam": true,
            "von": {
              "name": "Paket-Zustellung Express",
              "adresse": "info@paket-express-service-abholung.xyz",
              "geprueft": {
                "leicht": "Pass auf. Die Adresse gehört nicht zur bekannten Post. Dazu kommt Zeitdruck mit Zahlung.",
                "einfach": "Warnung: Die Adresse paket-express-service-abholung.xyz passt zu keinem bekannten Paketdienst. Zusammen mit dem Zeitdruck und dem Zahlungslink ist das verdächtig.",
                "standard": "Sicherheitswarnung: Unbekannte Absender-Domain (nicht nur wegen der Endung .xyz), kombinierter Zeitdruck und Zahlungsaufforderung deuten auf einen Phishing-Versuch hin."
              },
              "istEcht": false
            },
            "an": "alex@meine-mail.de",
            "datum": "Heute, 08:45 Uhr",
            "gelesen": false,
            "betreff": {
              "leicht": "Paket wartet: 1,99 Euro fehlen",
              "einfach": "Wichtig: Sendung kann nicht zugestellt werden",
              "standard": "Letzte Benachrichtigung zur Sendung #DE-8921"
            },
            "text": {
              "leicht": "Hallo Alex.\nDein Paket liegt im Lager.\nZahle 1,99 Euro Zoll in 24 Stunden.\nSonst geht das Paket zurück.\nKlicke auf den Link.",
              "einfach": "Sehr geehrter Kunde,\nIhre Sendung liegt im Zustellzentrum bereit. Aufgrund fehlender Zollgebühren in Höhe von 1,99 Euro kann die Zustellung nicht erfolgen.\nBitte zahlen Sie innerhalb von 24 Stunden unter dem nachfolgenden Link.",
              "standard": "Sehr geehrter Kunde,\nIhre Sendung wurde aufgrund ausstehender Zollgebühren (1,99 EUR) vorübergehend einbehalten. Zur Freigabe klicken Sie bitte auf den untenstehenden Link und verifizieren Sie Ihre Zahlungsdaten."
            },
            "link": {
              "url": "https://paket-zoll-direkt.top/zahlung",
              "ziel": "paket-zoll-direkt.top",
              "warnung": {
                "leicht": "Hier ist Gefahr. Der Link führt zu einer Betrugs-Seite. Dort wollen Diebe deine Bank-Karte stehlen.",
                "einfach": "Achtung Phishing: Die Ziel-Adresse paket-zoll-direkt.top ist eine gefälschte Seite zum Abgreifen von Kreditkartendaten.",
                "standard": "Gefahrenhinweis: Betrügerische Phishing-URL (.top). Die Website dient dem Diebstahl von Zahlungs- und Identitätsdaten."
              },
              "istGefahr": true
            }
          }
        ],
        "sent": [],
        "trash": []
      },
      "gefahrAktionen": {
        "melden": {
          "wertung": "passend",
          "rueckmeldung": {
            "leicht": "Du hast die verdächtige Nachricht gemeldet und nicht auf den Link getippt.",
            "einfach": "Du hast die gefälschte Paket-Mail gemeldet und den Link nicht angeklickt.",
            "standard": "Sie haben den Phishing-Versuch gemeldet, den Link unberührt gelassen und keine Daten eingegeben."
          }
        },
        "loeschen": {
          "wertung": "passend",
          "rueckmeldung": {
            "leicht": "Du hast die gefälschte E-Mail in den Papierkorb geworfen und nicht auf den Link getippt.",
            "einfach": "Du hast die gefälschte Nachricht direkt gelöscht, ohne auf den Zahlungslink zu klicken.",
            "standard": "Sie haben die Phishing-Mail gelöscht und den verdächtigen Zahlungslink nicht aufgerufen."
          }
        },
        "antworten": {
          "wertung": "unpassend",
          "rueckmeldung": {
            "leicht": "Pass auf. Antworte Betrügern niemals. Sie merken sonst deine echte Adresse. Besser: Löschen oder melden.",
            "einfach": "Vorsicht: Auf Phishing-Nachrichten niemals antworten! Das bestätigt den Betrügern nur, dass deine E-Mail-Adresse aktiv genutzt wird.",
            "standard": "Sicherheitsrisiko: Eine Antwort signalisiert den Kriminellen eine aktive Adresse und führt zu verstärkten Betrugsversuchen."
          }
        },
        "linkKlick": {
          "wertung": "unpassend",
          "rueckmeldung": {
            "leicht": "Halt. Tippe niemals auf Links in verdächtigen E-Mails. Dort wollen Kriminelle deine Passwörter stehlen.",
            "einfach": "Gefahr: Der Link führt auf eine manipulierte Phishing-Seite. Klicke niemals auf Links in unaufgeforderten Zahlungsaufforderungen.",
            "standard": "Kritische Sicherheitswarnung: Phishing-Links führen zu nachgebauten Login- oder Zahlungsmasken, um Kontodaten abzufangen."
          }
        }
      }
    }
  },
  "sicherheit": {
    "id": "sicherheit",
    "icon": "⚠️",
    "thema": "Gefahren und Schutz",
    "lektion": "Gefälschte Sicherheitswarnung",
    "titel": {
      "leicht": "Gefälschte Sicherheits-Warnung erkennen",
      "einfach": "Gefälschte Bank-Warnung entlarven",
      "standard": "Banking-Sicherheit: Gefälschte Sicherheitswarnungen abwehren"
    },
    "szene": "phishing-bank",
    "auftrag": {
      "leicht": "Alex bekommt eine Warnung: Angeblich ist das Bank-Konto gesperrt. Alex soll sein Passwort eingeben. Alex bleibt misstrauisch.",
      "einfach": "Eine E-Mail droht mit Kontosperrung und fordert zur Passworteingabe auf. Alex prüft die Echtheit der Warnung.",
      "standard": "Alex analysiert eine angebliche Sicherheitswarnung der Bank mit Aufforderung zur PIN- und Passworteingabe."
    },
    "schritte": [
      {
        "id": "s1",
        "art": "situation",
        "lernbereich": {
          "text": {
            "leicht": "Alex liest eine E-Mail: Dein Konto ist gesperrt. Gib sofort PIN und Passwort ein. Alex erschrickt.",
            "einfach": "Eine dringende E-Mail behauptet: Das Online-Konto wurde aus Sicherheitsgründen gesperrt. Zur Freischaltung soll man PIN und Passwort bestätigen.",
            "standard": "Eine E-Mail erzeugt massiven Druck: Wegen angeblicher Sicherheitsbedenken sei das Online-Banking gesperrt und erfordere die sofortige Bestätigung von PIN und Passwort."
          }
        },
        "handy": [
          {
            "typ": "email",
            "von": "Sicherheits-Team Online-Bank",
            "betreff": {
              "leicht": "Dringend: Konto gesperrt",
              "einfach": "Wichtig: Sicherheitsüberprüfung Ihres Kontos erforderlich",
              "standard": "Dringende Sicherheitswarnung zu Ihrem Online-Zugang"
            },
            "text": {
              "leicht": "Achtung. Dein Bank-Konto ist gesperrt. Gib sofort PIN und Passwort ein. Sonst bleibt das Konto zu.",
              "einfach": "Sehr geehrter Kunde, Ihr Online-Zugang wurde aus Sicherheitsgründen vorübergehend gesperrt. Bitte verifizieren Sie sofort Ihre PIN und Ihr Passwort über das Sicherheitsportal.",
              "standard": "Dringender Sicherheitshinweis: Ihr Online-Banking-Zugang wurde temporär deaktiviert. Bestätigen Sie Ihre Zugangsdaten (PIN und Passwort) unverzüglich zur Reaktivierung."
            }
          }
        ]
      },
      {
        "id": "s2",
        "art": "vorbild",
        "lernbereich": {
          "etikett": "tilda",
          "text": {
            "leicht": "Tilda weiß die Regel. Eine echte Bank fragt nie per E-Mail nach Passwörtern.",
            "einfach": "Tilda kennt die wichtigste Bank-Regel: Echte Banken verlangen niemals PINs oder Passwörter per E-Mail.",
            "standard": "Tilda wendet die Grundregel des Online-Bankings an: Kreditinstitute fordern niemals vertrauliche Zugangsdaten per E-Mail an."
          }
        },
        "handy": [
          {
            "typ": "mailbox",
            "modus": "vorbild-lesen",
            "szenarioId": "sicherheit"
          }
        ]
      },
      {
        "id": "s3",
        "art": "merksatz",
        "lernbereich": {
          "text": {
            "leicht": "Deine Bank fragt nie nach Passwörtern per E-Mail. Gib niemals deine PIN im Internet ein.",
            "einfach": "Wichtigste Sicherheitsregel: Eine echte Bank fragt niemals per E-Mail nach PIN oder Passwort.",
            "standard": "Banken-Grundsatz: Kreditinstitute fordern niemals Passwörter oder PINs per E-Mail an. Bei Zweifeln immer direkt anrufen."
          }
        },
        "handy": [
          {
            "typ": "notiz",
            "satz": {
              "leicht": "Bank fragt nie nach PIN. Niemals Passwort senden.",
              "einfach": "PIN und Passwort niemals per E-Mail eingeben.",
              "standard": "Zugangsdaten und PINs unterliegen strikter Geheimhaltung."
            }
          }
        ]
      },
      {
        "id": "s4",
        "art": "uebung",
        "uebung": {
          "typ": "mailbox"
        },
        "lernbereich": {
          "text": {
            "leicht": "Jetzt bist du dran. Prüfe die falsche Bank-E-Mail im Postfach. Melde den Betrug oder lösche die E-Mail.",
            "einfach": "Übe jetzt im Postfach: Untersuche die E-Mail. Verrate keine Daten und wirf die Nachricht in den Papierkorb.",
            "standard": "Übung im Postfach: Wehre den Betrugsversuch ab und entsorge die gefälschte Sicherheitswarnung im Papierkorb."
          }
        },
        "handy": [
          {
            "typ": "mailbox",
            "modus": "inbox-vorschau",
            "szenarioId": "sicherheit"
          }
        ]
      },
      {
        "id": "s5",
        "art": "transfer",
        "lernbereich": {
          "text": {
            "leicht": "Geschafft. Du hast die falsche Bank-Warnung erkannt. Gib deine PIN nicht über Links weiter.",
            "einfach": "Geschafft: Du hast den Phishing-Versuch erkannt, keine Zugangsdaten über den Link eingegeben und die Nachricht gemeldet oder gelöscht.",
            "standard": "Erfolgreich geübt: Sie haben Phishing-Merkmale bei einer falschen Bank-Warnung erkannt, nicht auf den Link geklickt und die Nachricht gemeldet oder gelöscht."
          }
        },
        "handy": [
          {
            "typ": "kontakt",
            "name": "Sperr-Notruf",
            "nummer": "116 116 (kostenfrei in Deutschland)",
            "piktogramm": "block"
          }
        ]
      }
    ],
    "mailbox": {
      "ordner": {
        "inbox": [
          {
            "id": "mail-fake-bank",
            "istSpam": true,
            "von": {
              "name": "Sicherheits-Team Online-Bank",
              "adresse": "warnung@sicherheit-online-portal-kundenservice.info",
              "geprueft": {
                "leicht": "Das passt nicht zu deiner echten Bank. Eine Bank fragt nicht per Link nach deiner PIN.",
                "einfach": "Warnung: Die Adresse sicherheit-online-portal-kundenservice.info gehört nicht zur echten Bank. Eine Bank fragt nicht per E-Mail-Link nach PIN und Passwort.",
                "standard": "Schwerwiegende Warnung: Die unbekannte Absender-Domain passt nicht zu deiner Bank (unabhängig von der Endung .info). Zugangsdaten-Abfragen per Link sind ein klares Phishing-Warnsignal."
              },
              "istEcht": false
            },
            "an": "alex@meine-mail.de",
            "datum": "Heute, 07:15 Uhr",
            "gelesen": false,
            "betreff": {
              "leicht": "Dringend: Konto gesperrt",
              "einfach": "Wichtig: Sicherheitsüberprüfung Ihres Kontos erforderlich",
              "standard": "Dringende Sicherheitswarnung zu Ihrem Online-Zugang"
            },
            "text": {
              "leicht": "Guten Tag Alex.\nDein Konto ist gesperrt.\nKlicke auf den Link.\nGib dort PIN und Passwort ein.\nSonst bleibt das Konto zu.",
              "einfach": "Sehr geehrter Kunde,\naus Sicherheitsgründen wurde Ihr Online-Konto vorübergehend blockiert. Zur Reaktivierung müssen Sie Ihre Identität durch Eingabe von PIN und Passwort auf unserem Sicherheitsportal bestätigen.\nBitte folgen Sie dem Link.",
              "standard": "Sehr geehrter Kunde,\nzur Abwehr verdächtiger Transaktionen wurde Ihr Konto vorläufig gesperrt. Bestätigen Sie Ihre persönlichen Zugangsdaten (PIN und Online-Passwort) über den nachfolgenden Sicherheitslink, um die Sperre aufzuheben."
            },
            "link": {
              "url": "https://meine-bank.sicherheits-abfrage-login.cc",
              "ziel": "meine-bank.sicherheits-abfrage-login.cc",
              "warnung": {
                "leicht": "Achtung Falle. Auf dieser Seite wollen Kriminelle deine Bank-PIN und dein Passwort stehlen.",
                "einfach": "Kritische Phishing-Seite: Die Seite dient ausschließlich dem Diebstahl deiner Online-Banking-Zugangsdaten.",
                "standard": "Gefahr durch Credential Harvesting: Auf dieser manipulierten Website werden Zugangsdaten und PINs abgefangen."
              },
              "istGefahr": true
            }
          }
        ],
        "sent": [],
        "trash": []
      },
      "gefahrAktionen": {
        "melden": {
          "wertung": "passend",
          "rueckmeldung": {
            "leicht": "Du hast die falsche Bank-Nachricht gemeldet und keine PIN eingegeben.",
            "einfach": "Du hast die Phishing-Nachricht gemeldet und keine Zugangsdaten preisgegeben.",
            "standard": "Sie haben den Betrugsversuch gemeldet, keine Zugangsdaten eingegeben und den Link nicht geöffnet."
          }
        },
        "loeschen": {
          "wertung": "passend",
          "rueckmeldung": {
            "leicht": "Du hast die gefälschte Warnung gelöscht. Eine echte Bank fragt nie per E-Mail nach deiner PIN.",
            "einfach": "Du hast die gefälschte Sicherheitswarnung gelöscht, ohne auf den Link zu klicken.",
            "standard": "Sie haben die Phishing-Nachricht in den Papierkorb verschoben und den Link nicht aufgerufen."
          }
        },
        "antworten": {
          "wertung": "unpassend",
          "rueckmeldung": {
            "leicht": "Pass auf. Antworte niemals auf solche E-Mails. Sende niemals deine PIN. Lösche die E-Mail sofort.",
            "einfach": "Gefahr: Niemals auf gefälschte Banknachrichten antworten. Bei Zweifeln rufe die Bank unter der bekannten Telefonnummer an.",
            "standard": "Sicherheitsrisiko: Auf Banking-Phishing niemals reagieren; stattdessen die offizielle Hotline der Bank kontaktieren."
          }
        },
        "linkKlick": {
          "wertung": "unpassend",
          "rueckmeldung": {
            "leicht": "Das ist gefährlich. Tippe niemals auf Links in solchen E-Mails. Betrüger wollen dort deine PIN stehlen.",
            "einfach": "Kritischer Fehler: Der Link führt zu einer Betrugsseite. Echte Banken versenden niemals Links zur PIN-Eingabe.",
            "standard": "Sicherheitsverstoß: Durch Klick auf den Link droht der vollständige Verlust des Online-Banking-Zugangs."
          }
        }
      }
    }
  },
  "anhang": {
    "id": "anhang",
    "icon": "📎",
    "thema": "Gefahren und Schutz",
    "lektion": "Gefährlicher E-Mail-Anhang",
    "titel": {
      "leicht": "Gefährlichen E-Mail-Anhang erkennen",
      "einfach": "Unerwartete E-Mail-Anhänge sicher beurteilen",
      "standard": "Schadsoftware-Prävention: Gefährliche Dateianhänge erkennen"
    },
    "szene": "schadsoftware-anhang",
    "auftrag": {
      "leicht": "Alex bekommt eine E-Mail von einer unbekannten Firma. Eine Rechnung hängt an. Alex prüft die Datei vorsichtig.",
      "einfach": "Alex erhält eine angebliche Rechnung von einem unbekannten Absender. Er untersucht die Datei auf Schadsoftware.",
      "standard": "Alex analysiert eine unerwartete Rechnungs-E-Mail mit verdächtigem Dateianhang auf Viren und Schadprogramme."
    },
    "schritte": [
      {
        "id": "s1",
        "art": "situation",
        "lernbereich": {
          "text": {
            "leicht": "Alex bekommt eine E-Mail von Firma Meier. Eine Rechnung ist im Anhang. Alex kennt Firma Meier gar nicht.",
            "einfach": "Eine unbekannte Firma Meier sendet Alex eine E-Mail mit einer angeblichen Rechnung im Anhang und fordert zum sofortigen Öffnen auf.",
            "standard": "Eine E-Mail einer unbekannten Firma Meier fordert mit Nachdruck zum Öffnen eines beigefügten Dateianhangs zur Rechnungsprüfung auf."
          }
        },
        "handy": [
          {
            "typ": "email",
            "von": "Firma Meier Buchhaltung",
            "betreff": {
              "leicht": "Offene Rechnung Nummer 8921",
              "einfach": "Mahnung: Ihre offene Rechnung Nr. 8921",
              "standard": "Zahlungsaufforderung zu Rechnung Nr. 8921"
            },
            "text": {
              "leicht": "Guten Tag. Anbei finden Sie Ihre offene Rechnung. Öffnen Sie die Datei zur Prüfung. Firma Meier Buchhaltung.",
              "einfach": "Sehr geehrter Kunde, anbei erhalten Sie Ihre offene Rechnung Nr. 8921. Bitte öffnen Sie die beigefügte Datei umgehend zur Kontrolle. Mit freundlichen Grüßen, Meier Buchhaltung",
              "standard": "Sehr geehrte Damen und Herren, anbei übermitteln wir die Rechnung zu Vorgang #8921. Bitte prüfen Sie die angehängte Datei unverzüglich. Mit freundlichen Grüßen, Firma Meier"
            }
          }
        ]
      },
      {
        "id": "s2",
        "art": "vorbild",
        "lernbereich": {
          "etikett": "tilda",
          "text": {
            "leicht": "Tilda schaut auf den Datei-Namen. Die Datei endet auf .exe. Das ist ein Computer-Programm. Bei einer fremden Rechnung ist das sehr verdächtig.",
            "einfach": "Tilda prüft die Dateiendung: Die Datei heißt rechnung_8921.pdf.exe. Die Endung .exe steht für ein ausführbares Programm statt eines PDF-Dokuments – bei einer unbekannten Rechnung besteht hohes Risiko für Schadsoftware.",
            "standard": "Tilda prüft die letzte Dateiendung (.exe): Anders als der Name suggeriert, ist ‚rechnung_8921.pdf.exe‘ ein ausführbares Programm statt eines PDF-Dokuments. Bei unerwarteten Rechnungen unbekannter Herkunft besteht ein hohes Schadsoftware-Risiko."
          }
        },
        "handy": [
          {
            "typ": "mailbox",
            "modus": "vorbild-lesen",
            "szenarioId": "anhang"
          }
        ]
      },
      {
        "id": "s3",
        "art": "merksatz",
        "lernbereich": {
          "text": {
            "leicht": "Unbekannter Absender? Öffne niemals den Anhang. Dateien mit .exe oder .zip können Viren sein.",
            "einfach": "Anhänge von unbekannten Absendern niemals öffnen. Dateiendungen wie .exe, .zip oder .vbs bergen Virengefahr.",
            "standard": "Schadsoftware-Schutzregel: Unerwartete Dateianhänge von Unbekannten niemals öffnen; besondere Wachsamkeit bei .exe- oder .zip-Dateien."
          }
        },
        "handy": [
          {
            "typ": "notiz",
            "satz": {
              "leicht": "Anhang von Unbekannt nicht öffnen. Dateiendung prüfen.",
              "einfach": "Unerwartete Anhänge niemals öffnen; Dateiendung prüfen.",
              "standard": "Dateiendungen (.exe, .zip) prüfen und unerwartete Anhänge löschen."
            }
          }
        ]
      },
      {
        "id": "s4",
        "art": "uebung",
        "uebung": {
          "typ": "mailbox"
        },
        "lernbereich": {
          "text": {
            "leicht": "Jetzt bist du dran. Untersuche die E-Mail im Postfach. Öffne den Anhang nicht. Wirf die Nachricht in den Papierkorb.",
            "einfach": "Übe jetzt im Postfach: Prüfe den Anhang mit der Lupe. Öffne die Datei nicht, sondern lösche oder melde die Nachricht.",
            "standard": "Übung im Postfach: Analysiere den verdächtigen Dateianhang gefahrlos und leite die Abwehrmaßnahme ein."
          }
        },
        "handy": [
          {
            "typ": "mailbox",
            "modus": "inbox-vorschau",
            "szenarioId": "anhang"
          }
        ]
      },
      {
        "id": "s5",
        "art": "transfer",
        "lernbereich": {
          "text": {
            "leicht": "Geschafft. Du hast den verdächtigen Anhang nicht geöffnet und die E-Mail gemeldet oder gelöscht.",
            "einfach": "Geschafft: Du hast die verdächtige Dateiendung (.exe) erkannt, den Anhang nicht geöffnet und die E-Mail gemeldet oder gelöscht.",
            "standard": "Erfolgreich geübt: Sie haben die verdächtige Dateiendung (.pdf.exe) geprüft, den Anhang nicht geöffnet und die Nachricht gemeldet oder gelöscht."
          }
        },
        "handy": [
          {
            "typ": "kontakt",
            "name": "Bundesamt für Sicherheit (BSI)",
            "nummer": "Bürgerservice Cybersicherheit",
            "piktogramm": "lock"
          }
        ]
      }
    ],
    "mailbox": {
      "ordner": {
        "inbox": [
          {
            "id": "mail-fake-anhang",
            "istSpam": true,
            "von": {
              "name": "Firma Meier Buchhaltung",
              "adresse": "meier.rechnung@mail-schnell-server.cc",
              "geprueft": {
                "leicht": "Vorsicht. Die Adresse ist unbekannt. Alex hat dort nie etwas bestellt.",
                "einfach": "Unbekannter Absender: Die Adresse mail-schnell-server.cc steht in keinem Zusammenhang mit Alex' Einkäufen.",
                "standard": "Verdächtige Herkunft: Unbekannter Absender (.cc) ohne bestehendes Vertrags- oder Geschäftsverhältnis."
              },
              "istEcht": false
            },
            "an": "alex@meine-mail.de",
            "datum": "Heute, 06:30 Uhr",
            "gelesen": false,
            "betreff": {
              "leicht": "Offene Rechnung Nummer 8921",
              "einfach": "Mahnung: Ihre offene Rechnung Nr. 8921",
              "standard": "Zahlungsaufforderung zu Rechnung Nr. 8921"
            },
            "text": {
              "leicht": "Guten Tag Alex.\nAnbei erhalten Sie Ihre Rechnung.\nÖffnen Sie die Datei im Anhang.\nFirma Meier Buchhaltung.",
              "einfach": "Sehr geehrter Kunde,\nanbei übermitteln wir Ihre ausstehende Rechnung Nr. 8921. Bitte öffnen und prüfen Sie den beigefügten Anhang umgehend, um Mahnkosten zu vermeiden.\nMit freundlichen Grüßen,\nMeier Buchhaltungsservice",
              "standard": "Sehr geehrte Damen und Herren,\nbezugnehmend auf Ihre Bestellung senden wir Ihnen die Rechnung #8921 als Dateianhang. Öffnen Sie die Datei zur Einsichtnahme der Zahlungsdetails."
            },
            "anhang": {
              "dateiname": "rechnung_8921.pdf.exe",
              "groesse": "820 KB",
              "typ": "exe",
              "warnung": {
                "leicht": "Achtung: Die Datei endet auf .exe! Das ist ein Computer-Programm und kein normales Dokument. Öffne solche fremden Anhänge nicht.",
                "einfach": "Warnung: Die Datei hat eine doppelte Endung (.pdf.exe) und ist ein ausführbares Programm statt eines PDF-Dokuments. Solche Anhänge unbekannter Herkunft können Schadsoftware enthalten.",
                "standard": "Sicherheitswarnung: Unerwartete ausführbare Programmdatei (.pdf.exe) statt eines PDF-Dokuments. Solche Anhänge unbekannter Herkunft können Schadsoftware enthalten."
              },
              "istGefahr": true
            }
          }
        ],
        "sent": [],
        "trash": []
      },
      "gefahrAktionen": {
        "melden": {
          "wertung": "passend",
          "rueckmeldung": {
            "leicht": "Du hast die E-Mail mit dem verdächtigen Anhang gemeldet und die Datei nicht geöffnet.",
            "einfach": "Du hast die verdächtige E-Mail gemeldet und den unbekannten .exe-Anhang nicht geöffnet.",
            "standard": "Sie haben die E-Mail mit dem verdächtigen .pdf.exe-Anhang gemeldet und die Datei nicht geöffnet."
          }
        },
        "loeschen": {
          "wertung": "passend",
          "rueckmeldung": {
            "leicht": "Du hast die E-Mail mit dem verdächtigen Anhang in den Papierkorb geworfen und die Datei nicht geöffnet.",
            "einfach": "Du hast die E-Mail mit dem verdächtigen .exe-Anhang gelöscht, ohne die Datei zu öffnen.",
            "standard": "Sie haben die E-Mail mit dem verdächtigen .pdf.exe-Anhang gelöscht, ohne die Datei auszuführen."
          }
        },
        "antworten": {
          "wertung": "unpassend",
          "rueckmeldung": {
            "leicht": "Pass auf. Antworte unbekannten Absendern nicht. Lösche die E-Mail einfach.",
            "einfach": "Nicht antworten: Eine Antwort auf Viren-Mails bestätigt nur die Gültigkeit deiner Adresse. Besser sofort löschen.",
            "standard": "Unzweckmäßig: Die Kontaktaufnahme mit Cyberkriminellen bringt keinen Klärungswert und erhöht das Spam-Aufkommen."
          }
        },
        "anhangKlick": {
          "wertung": "unpassend",
          "rueckmeldung": {
            "leicht": "Stopp. Öffne keine fremden Anhänge mit der Endung .exe. Dahinter kann ein schädliches Programm stecken.",
            "einfach": "Akute Gefahr: Das Öffnen einer unerwarteten .exe-Datei aus unbekannter Quelle kann Schadsoftware auf deinem Computer installieren.",
            "standard": "Kritisches Sicherheitsrisiko: Das Ausführen unerwarteter .exe-Anhänge unbekannter Herkunft kann das Endgerät mit Schadsoftware infizieren."
          }
        }
      }
    }
  }
};

  function erstellePostfachLernweg(szenarioId = "ek-post1") {
    const normId = szenarioId === "ek3" ? "ek-post1" : szenarioId;
    const s = MAILBOX_SZENARIEN[normId] || MAILBOX_SZENARIEN["ek-post1"];
    const THEMA_ZUORDNUNG = {
      "ek-post1": "einkaufen",
      service: "einkaufen",
      paket: "betrug",
      sicherheit: "betrug",
      anhang: "betrug",
      termin: "hilfe",
      einladung: "whatsapp"
    };
    return {
      format: "lernhandy-1",
      id: s.id,
      thema: THEMA_ZUORDNUNG[s.id] || "hilfe",
      titel: s.titel,
      regel: Object.prototype.hasOwnProperty.call(s, "regel") ? s.regel : null,
      szene: s.szene || "email-inbox",
      quelle: "docs/lernhandy/postfach-daten.js",
      schritte: s.schritte
    };
  }

  // Abwärtskompatibilität zu bestehendem EK3-Prototyp
  const EK3_MAILBOX_PROTOTYP = MAILBOX_SZENARIEN["ek-post1"].mailbox;
  function ek3PostfachLernweg() {
    return erstellePostfachLernweg("ek-post1");
  }

  if (typeof window !== "undefined") {
    window.MAILBOX_SZENARIEN = MAILBOX_SZENARIEN;
    window.EK3_MAILBOX_PROTOTYP = EK3_MAILBOX_PROTOTYP;
    window.erstellePostfachLernweg = erstellePostfachLernweg;
    window.ek3PostfachLernweg = ek3PostfachLernweg;
  }
  if (typeof globalThis !== "undefined") {
    globalThis.MAILBOX_SZENARIEN = MAILBOX_SZENARIEN;
    globalThis.EK3_MAILBOX_PROTOTYP = EK3_MAILBOX_PROTOTYP;
    globalThis.erstellePostfachLernweg = erstellePostfachLernweg;
    globalThis.ek3PostfachLernweg = ek3PostfachLernweg;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { MAILBOX_SZENARIEN, EK3_MAILBOX_PROTOTYP, erstellePostfachLernweg, ek3PostfachLernweg };
  }
  global.MAILBOX_SZENARIEN = MAILBOX_SZENARIEN;
  global.EK3_MAILBOX_PROTOTYP = EK3_MAILBOX_PROTOTYP;
  global.erstellePostfachLernweg = erstellePostfachLernweg;
  global.ek3PostfachLernweg = ek3PostfachLernweg;
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));
