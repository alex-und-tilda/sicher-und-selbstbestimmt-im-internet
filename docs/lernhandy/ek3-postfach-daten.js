/* =============================================================
   EK3 E-Mail-Postfach Daten – Lieferverzug Schuh-Freude Shop
   Format: mailbox-1 / lernhandy-1
   Projekt: Alex und Tilda – Sicher und selbstbestimmt im Internet
   Zweig: claude/be1-lernhandy (nur im Testbereich pilot/lernhandy/)
   ============================================================= */

(function (global) {
  "use strict";

  const EK3_MAILBOX_PROTOTYP = {
    format: "mailbox-1",
    einheit: "ek-post1",
    titel: {
      leicht: "Die Bestellung kommt nicht",
      einfach: "Die Bestellung kommt nicht",
      standard: "Die Bestellung kommt nicht"
    },
    ordner: {
      inbox: [
        {
          id: "mail-schuh-freude",
          von: {
            name: "Schuh-Freude Shop",
            adresse: "service@schuh-freude.de",
            vertrauenswuerdig: true
          },
          an: "alex@meine-mail.de",
          datum: "Gestern, 14:30 Uhr",
          gelesen: false,
          betreff: {
            leicht: "Deine Schuhe: Verspätung",
            einfach: "Verzögerung bei deiner Bestellung #4821",
            standard: "Wichtige Information zu Ihrer Bestellung #4821"
          },
          text: {
            leicht: "Hallo Alex.\nDeine Schuhe kommen später.\nEs gibt Probleme bei der Lieferung.\nDeine Bestell-Nummer ist #4821.\nHast du Fragen? Schreib uns einfach.",
            einfach: "Hallo Alex,\nleider verzögert sich der Versand deiner Schuhe.\nWir warten noch auf die Lieferung vom Hersteller.\nDeine Bestellnummer lautet #4821.\nWenn du Fragen hast, antworte einfach auf diese E-Mail.",
            standard: "Guten Tag,\nwir bedauern, Ihnen mitteilen zu müssen, dass sich die Auslieferung Ihrer Bestellung #4821 verzögert.\nWir erwarten den Wareneingang in Kürze.\nBei Rückfragen antworten Sie gern direkt auf diese Nachricht."
          },
          anhang: null
        }
      ],
      sent: [],
      trash: []
    },

    // Drei Schreib-Möglichkeiten für die Antwort
    antwort: {
      wenig: ["passend", "ohne_nummer"],
      vorbildTitel: "So macht es Tilda:",
      vorbild: {
        leicht: "Guten Tag. Wann kommen meine Schuhe? Meine Bestell-Nummer ist 4821. Viele Grüße, Alex",
        einfach: "Guten Tag, wann werden meine Schuhe geliefert? Meine Bestellnummer ist 4821. Viele Grüße, Alex",
        standard: "Guten Tag, bitte teilen Sie mir den Liefertermin für meine Bestellung 4821 mit. Mit freundlichen Grüßen, Alex"
      },
      // 1. Fertige Textbausteine (Klick)
      bausteine: [
        {
          id: "ohne_nummer",
          wertung: "unpassend",
          kopf: "Hier fehlt noch etwas.",
          text: {
            leicht: "Guten Tag. Meine Schuhe sind immer noch nicht da. Warum dauert das so lange? Viele Grüße, Alex",
            einfach: "Guten Tag, meine Schuhe sind immer noch nicht angekommen. Warum dauert das so lange? Viele Grüße, Alex",
            standard: "Guten Tag, meine Bestellung ist bis heute nicht eingetroffen. Weshalb verzögert sich die Lieferung so lange? Mit freundlichen Grüßen, Alex"
          },
          rueckmeldung: {
            leicht: "In der E-Mail fehlt die Bestell-Nummer. Der Shop hat viele Bestellungen. Ohne Nummer findet er dein Paket nicht. Er fragt erst nach. Das dauert länger.",
            einfach: "In der E-Mail fehlt die Bestellnummer. Weil der Shop viele Bestellungen hat, findet er dein Paket ohne Nummer nicht und muss erst nachfragen.",
            standard: "In der Nachricht fehlt die Bestellnummer. Ohne sie kann der Händler die Sendung nicht zuordnen und muss zunächst nachfragen."
          }
        },
        {
          id: "passend",
          wertung: "passend",
          text: {
            leicht: "Guten Tag. Wann kommen meine Schuhe? Meine Bestell-Nummer ist 4821. Viele Grüße, Alex",
            einfach: "Guten Tag, wann werden meine Schuhe geliefert? Meine Bestellnummer ist 4821. Viele Grüße, Alex",
            standard: "Guten Tag, bitte teilen Sie mir den Liefertermin für meine Bestellung 4821 mit. Mit freundlichen Grüßen, Alex"
          },
          rueckmeldung: {
            leicht: "Du fragst nach dem Termin. Du nennst die Bestell-Nummer. So findet der Shop dein Paket. Mehr Daten braucht der Shop nicht.",
            einfach: "Du fragst nach dem Termin und nennst die Bestellnummer. So kann der Shop dein Paket finden, und mehr Daten braucht er dafür nicht.",
            standard: "Du fragst nach dem Liefertermin und gibst die Bestellnummer an. Damit kann der Händler die Sendung zuordnen; weitere Daten sind nicht nötig."
          },
          erfolg: {
            tun: {
              leicht: "Du hast dem Shop geschrieben. Du hast die Bestell-Nummer genannt. Der Shop sucht jetzt das Paket.",
              einfach: "Du hast dem Shop geschrieben und die Bestellnummer genannt. Der Shop sucht jetzt das Paket.",
              standard: "Du hast dem Händler geschrieben und die Bestellnummer angegeben. Die Sendung wird jetzt gesucht."
            },
            reaktionGeschichte: "„Danke. Jetzt kann der Shop mein Paket suchen.“",
            reaktionSonst: "„So schreibe ich das auch. Kurz und mit Nummer.“"
          }
        },
        {
          id: "zu_viel",
          wertung: "unpassend",
          kopf: "Das ist mehr als nötig.",
          text: {
            leicht: "Guten Tag. Wann kommen meine Schuhe? Bestell-Nummer 4821. Mein Geburtstag ist der 3. Mai 1988. Viele Grüße, Alex",
            einfach: "Guten Tag, wann kommen meine Schuhe? Bestellnummer 4821, mein Geburtsdatum ist der 3. Mai 1988. Viele Grüße, Alex",
            standard: "Guten Tag, wann wird meine Bestellung 4821 geliefert? Mein Geburtsdatum ist der 3. Mai 1988. Mit freundlichen Grüßen, Alex"
          },
          rueckmeldung: {
            leicht: "Der Shop findet dein Paket mit der Bestell-Nummer. Dein Geburtstag hilft dabei nicht. Der Shop braucht ihn nicht. Du gibst nur nötige Daten weiter.",
            einfach: "Der Shop findet dein Paket schon mit der Bestellnummer. Dein Geburtsdatum hilft dabei nicht, deshalb musst du es nicht nennen.",
            standard: "Für die Zuordnung genügt die Bestellnummer. Das Geburtsdatum ist dafür nicht erforderlich und muss nicht angegeben werden."
          }
        }
      ],

      // 2. Satz-Starter (Baukasten)
      satzstarter: {
        anrede: [
          { id: "a1", text: { leicht: "Guten Tag,", einfach: "Guten Tag,", standard: "Guten Tag," } },
          { id: "a2", text: { leicht: "Hallo Kunden-Service,", einfach: "Hallo Kundenservice,", standard: "Sehr geehrte Damen und Herren," } }
        ],
        anliegen: [
          { id: "b1", hatNummer: true, wertung: "passend", text: { leicht: "Wann kommt meine Bestellung mit der Nummer 4821?", einfach: "Wann wird meine Bestellung 4821 geliefert?", standard: "Ich bitte um Auskunft zum Lieferstatus meiner Bestellung 4821." } },
          {
            id: "b2",
            hatNummer: false,
            wertung: "unpassend",
            kopf: "Hier fehlt noch etwas.",
            text: { leicht: "Meine Schuhe sind noch nicht da.", einfach: "Meine Schuhe sind bisher nicht angekommen.", standard: "Die von mir bestellten Schuhe wurden bisher nicht zugestellt." },
            rueckmeldung: {
              leicht: "In der E-Mail fehlt die Bestell-Nummer. Der Shop hat viele Bestellungen. Ohne Nummer findet er dein Paket nicht. Er fragt erst nach. Das dauert länger.",
              einfach: "In der E-Mail fehlt die Bestellnummer. Weil der Shop viele Bestellungen hat, findet er dein Paket ohne Nummer nicht und muss erst nachfragen.",
              standard: "In der Nachricht fehlt die Bestellnummer. Ohne sie kann der Händler die Sendung nicht zuordnen und muss zunächst nachfragen."
            }
          }
        ],
        abschluss: [
          { id: "c1", text: { leicht: "Viele Grüße, Alex", einfach: "Viele Grüße, Alex", standard: "Mit freundlichen Grüßen, Alex" } },
          { id: "c2", text: { leicht: "Bitte gebt mir Bescheid. Alex", einfach: "Bitte geben Sie mir kurz Bescheid. Alex", standard: "Ich freue mich auf Ihre Rückmeldung. Alex" } }
        ]
      },

      // Beispiel-Antwort
      alexVorbild: {
        leicht: "Guten Tag. Wann kommen meine Schuhe? Meine Bestell-Nummer ist 4821. Viele Grüße, Alex",
        einfach: "Guten Tag, wann werden meine Schuhe geliefert? Meine Bestellnummer ist 4821. Viele Grüße, Alex",
        standard: "Guten Tag, bitte teilen Sie mir den Liefertermin für meine Bestellung 4821 mit. Mit freundlichen Grüßen, Alex"
      },

      // Simulierte Händler-Antwort (Bestätigung nach Senden)
      automatischeAntwort: {
        id: "mail-bestaetigung-auto",
        von: { name: "Schuh-Freude Service", adresse: "service@schuh-freude.de" },
        an: "alex@meine-mail.de",
        datum: "Gerade eben",
        gelesen: false,
        betreff: {
          leicht: "Antwort zu Bestellung 4821",
          einfach: "Eingangsbestätigung: Bestellung 4821",
          standard: "Automatische Eingangsbestätigung zu Bestellung 4821"
        },
        text: {
          leicht: "Hallo Alex.\nWir haben deine Nachricht erhalten.\nWir suchen dein Paket mit der Nummer 4821.\nWir antworten dir heute noch.",
          einfach: "Hallo Alex,\nvielen Dank für deine Nachricht zu Bestellung 4821.\nUnser Team prüft die Lieferung und meldet sich heute noch bei dir.",
          standard: "Guten Tag,\nvielen Dank für Ihre Anfrage zu Vorgang 4821.\nIhre Nachricht wird bearbeitet. Wir informieren Sie unverzüglich über den Lieferstatus."
        }
      }
    }
  };

  /**
   * Erzeugt den vollständigen 5-Schritte-Lernweg für EK3 im Format lernhandy-1
   */
  function ek3PostfachLernweg(daten) {
    const d = daten || EK3_MAILBOX_PROTOTYP;
    return {
      format: "lernhandy-1",
      id: "ek-post1",
      titel: {
        leicht: "Die Bestellung kommt nicht",
        einfach: "Die Bestellung kommt nicht",
        standard: "Die Bestellung kommt nicht"
      },
      regel: "noetig",
      schritte: [
        {
          id: "s1",
          art: "situation",
          handy: [
            {
              typ: "mailbox",
              modus: "inbox-vorschau",
              mailbox: d
            }
          ],
          lernbereich: {
            text: {
              leicht: "Alex hat vor 10 Tagen Schuhe bestellt. Die Schuhe sind noch nicht da. Im Postfach liegt eine neue E-Mail vom Shop.",
              einfach: "Alex wartet seit über einer Woche auf seine neuen Schuhe. Das Paket ist überfällig. Im E-Mail-Postfach liegt eine Nachricht vom Händler.",
              standard: "Alex hat vor zehn Tagen Schuhe in einem Online-Shop bestellt. Die Lieferung ist überfällig. Im Posteingang liegt eine Benachrichtigung des Händlers."
            }
          }
        },
        {
          id: "s2",
          art: "vorbild",
          handy: [
            {
              typ: "mailbox",
              modus: "vorbild-lesen",
              mailbox: d,
              mailId: "mail-schuh-freude"
            }
          ],
          lernbereich: {
            etikett: "tilda",
            text: {
              leicht: "Alex öffnet die E-Mail vom Shop. Dort steht: Die Schuhe kommen später. Tilda kennt das. Sie sagt: Frag nach dem Termin. Und nenn deine Bestell-Nummer. Dann findet der Shop dein Paket.",
              einfach: "Alex öffnet die E-Mail vom Shop und liest, dass die Schuhe später kommen. Tilda kennt das. Sie rät ihm, nach dem Termin zu fragen und die Bestellnummer zu nennen.",
              standard: "Alex öffnet die Nachricht des Shops: Die Lieferung verzögert sich. Tilda kennt die Lage und rät ihm, nach dem Liefertermin zu fragen und die Bestellnummer anzugeben."
            }
          }
        },
        {
          id: "s3",
          art: "merksatz",
          handy: [
            {
              typ: "notiz",
              satz: {
                leicht: "Ware kommt nicht? Dem Shop schreiben.",
                einfach: "Ware kommt nicht? Dem Shop schreiben.",
                standard: "Ware kommt nicht? Dem Shop schreiben."
              },
              texte: [
                {
                  leicht: "Du darfst beim Shop nachfragen. Das ist normal.",
                  einfach: "Du darfst beim Shop jederzeit nachfragen.",
                  standard: "Eine Nachfrage beim Händler ist jederzeit möglich."
                }
              ]
            }
          ],
          lernbereich: {
            regel: false,
            text: {
              leicht: "Ware kommt nicht? Dem Shop schreiben.",
              einfach: "Ware kommt nicht? Dem Shop schreiben.",
              standard: "Ware kommt nicht? Dem Shop schreiben."
            },
            texte: [
              {
                leicht: "Du darfst beim Shop nachfragen. Das ist normal.",
                einfach: "Du darfst beim Shop jederzeit nachfragen.",
                standard: "Eine Nachfrage beim Händler ist jederzeit möglich."
              }
            ]
          }
        },
        {
          id: "s4",
          art: "uebung",
          handy: [
            {
              typ: "mailbox",
              modus: "interaktiv",
              mailbox: d,
              mailId: "mail-schuh-freude"
            }
          ],
          lernbereich: {
            etikett: "uebung",
            text: {
              leicht: "Jetzt bist du dran. Öffne die E-Mail vom Shop. Tippe auf: Antworten. Dann wählst du eine Antwort. Oder du schreibst selbst.",
              einfach: "Jetzt bist du dran: Öffne die E-Mail vom Shop und tippe auf „Antworten“. Wähle dann eine Antwort aus oder schreibe selbst.",
              standard: "Jetzt bist du an der Reihe: Öffne die Nachricht des Shops und tippe auf „Antworten“. Wähle eine Antwort aus oder formuliere selbst."
            },
            hinweis: {
              leicht: "Der Shop braucht deine Bestell-Nummer. Mehr braucht er nicht.",
              einfach: "Der Shop braucht deine Bestellnummer, mehr nicht.",
              standard: "Der Händler benötigt nur die Bestellnummer."
            }
          },
          uebung: {
            typ: "mailbox"
          }
        },
        {
          id: "s5",
          art: "transfer",
          handy: [
            {
              typ: "notiz",
              satz: {
                leicht: "Du bestellst etwas? Dann schreib dir die Bestell-Nummer auf. Oder mach ein Foto davon.",
                einfach: "Wenn du etwas bestellst, schreib dir die Bestellnummer auf oder mach ein Foto davon.",
                standard: "Notiere dir bei jeder Bestellung die Bestellnummer oder fotografiere die Bestätigung."
              },
              texte: [
                {
                  leicht: "Du darfst beim Shop nachfragen. Das ist normal.",
                  einfach: "Du darfst beim Shop jederzeit nachfragen.",
                  standard: "Eine Nachfrage beim Händler ist jederzeit möglich."
                }
              ]
            }
          ],
          lernbereich: {
            text: {
              leicht: "Du bestellst etwas? Dann schreib dir die Bestell-Nummer auf. Oder mach ein Foto davon.",
              einfach: "Wenn du etwas bestellst, schreib dir die Bestellnummer auf oder mach ein Foto davon.",
              standard: "Notiere dir bei jeder Bestellung die Bestellnummer oder fotografiere die Bestätigung."
            }
          }
        }
      ]
    };
  }

  global.EK3_MAILBOX_PROTOTYP = EK3_MAILBOX_PROTOTYP;
  global.ek3PostfachLernweg = ek3PostfachLernweg;
})(typeof window !== "undefined" ? window : global);
