/* Gemeinsamer Übersetzer: 34 Lernwege der 12 Themen im Format „lernhandy-1“ (09.11.2026)
   Didaktisches Konzept nach dem pädagogischen Orientierungsrahmen (G1–G12, V1–V4):
   - Orientierungsrahmen: Erleben → Verstehen → Vormachen → selbst Handeln (Übungs-Handy) → Rückmeldung → Anwenden → Wiederholen.
   - Alle 12 Themen und 34 Einheiten nach berichte/lernsystem-2026-11-05/05-THEMEN-ANALYSE-UND-QUALITAETSKRITERIEN.md.
   - Synchron in drei Sprachstufen: Leichte Sprache (leicht), Einfache Sprache (einfach), Alltagssprache (standard).
   - Echte Handlungen im simulierten Smartphone (Knöpfe, Schalter, Video, Shop, Profil, Anruf, Chat).
   - Darstellungsregel 2 eingehalten: Lage im Lernbereich, im Handy nur ein Fragesatz. */

(function (global) {
  "use strict";

  const drei = (leicht, einfach, standard) => ({ leicht, einfach, standard });

  const KURZWEGE = {
    /* -------------------------------------------------------------
       THEMA 1: DATENSCHUTZ (2 Einheiten)
       ------------------------------------------------------------- */
    ds1: {
      id: "ds1", name: "DS1 Daten nach Zweck geben", thema: "datenschutz", lektion: "Nötig oder nicht?",
      situationText: drei(
        "Du hast eine neue Foto-App. Du willst ein Foto bearbeiten. Die App fragt nach deinen Kontakten.",
        "Du hast eine neue Foto-App und möchtest ein Foto bearbeiten. Beim Öffnen fragt die App nach deinen Kontakten.",
        "Du hast eine neue Foto-App installiert und möchtest ein Foto bearbeiten. Beim ersten Öffnen bittet die App um Zugriff auf deine Kontakte."
      ),
      vorbildWer: "tilda",
      vorbildText: drei(
        "Tilda hat eine Taschenlampen-App. Die App will ihre Kontakte. Tilda überlegt: Wofür braucht eine Lampe meine Kontakte? Sie findet keinen Grund. Sie tippt auf: Nicht erlauben. Die Lampe leuchtet trotzdem.",
        "Tildas Taschenlampen-App will ihre Kontakte lesen. Tilda überlegt, wofür eine Lampe Kontakte braucht, und findet keinen Grund. Sie tippt auf „Nicht erlauben“. Die Lampe leuchtet trotzdem.",
        "Tildas Taschenlampen-App bittet um Zugriff auf ihre Kontakte. Tilda fragt sich, wofür eine Lampe diese Daten benötigt, und findet keinen Grund. Sie wählt „Nicht erlauben“. Die Lampe funktioniert trotzdem."
      ),
      handySituation: [{ typ: "berechtigung", app: "Foto-Spaß", titel: "„Foto-Spaß“ möchte auf deine Kontakte zugreifen.", beschreibung: "Damit findest du Freunde." }],
      handyVorbild: [{ typ: "berechtigung", app: "Taschenlampen-App", titel: "Zugriff auf Kontakte erlauben?", getippt: "nichtErlauben", knoepfe: [{ id: "nichtErlauben", text: "Nicht erlauben" }, { id: "erlauben", text: "Erlauben" }] }],
      handyUebung: [{
        typ: "berechtigung",
        app: "Foto-Spaß",
        titel: "„Foto-Spaß“ möchte auf deine Kontakte zugreifen.",
        beschreibung: "Damit findest du Freunde.",
        wenig: ["kontakteNein", "kontakteJa"],
        knoepfe: [
          { id: "kontakteJa", text: "Erlauben" },
          { id: "wofuer", text: "Wofür? Nachsehen" },
          { id: "kontakteNein", text: "Nicht erlauben" }
        ]
      }],
      interaktivUebung: {
        aufgabe: drei(
          "Du willst ein Foto bearbeiten. Die Foto-App fragt nach deinen Kontakten. Was tippst du?",
          "Du möchtest ein Foto bearbeiten, und die Foto-App fragt nach dem Zugriff auf deine Kontakte. Was tippst du?",
          "Du möchtest ein Foto bearbeiten. Die Foto-App bittet um Zugriff auf deine Kontakte. Wie entscheidest du?"
        ),
        hinweis: drei(
          "Überlege: Wofür braucht die App die Kontakte? Du willst nur ein Foto bearbeiten.",
          "Überlege, wofür die App deine Kontakte braucht. Du möchtest nur ein Foto bearbeiten.",
          "Prüfe den Zweck: Wofür benötigt die App deine Kontakte, wenn du nur ein Foto bearbeiten möchtest?"
        ),
        uebung: {
          handlungen: {
            kontakteNein: {
              wertung: "passend",
              text: drei(
                "Die App öffnet dein Foto. Du kannst es bearbeiten. Dafür braucht die App deine Kontakte nicht. Die Nummern von deinen Freunden bleiben bei dir.",
                "Die App öffnet dein Foto, und du kannst es bearbeiten. Dafür braucht sie deine Kontakte nicht. Die Nummern deiner Freunde bleiben bei dir.",
                "Die App öffnet dein Foto, und du kannst es bearbeiten. Für diesen Zweck benötigt sie deine Kontakte nicht. Die Telefonnummern deiner Freunde bleiben bei dir."
              ),
              erfolg: {
                tun: drei(
                  "Du hast den Zugriff nicht erlaubt. Das Foto geht trotzdem auf.",
                  "Du hast den Zugriff nicht erlaubt, und das Foto öffnet sich trotzdem.",
                  "Du hast den Zugriff nicht erlaubt. Das Foto lässt sich trotzdem bearbeiten."
                ),
                reaktionGeschichte: "„Danke. Die App geht ja auch ohne meine Kontakte.“",
                reaktionSonst: "„So mache ich es auch. Erst frage ich: Wofür?“"
              }
            },
            wofuer: {
              wertung: "auchMoeglich",
              text: drei(
                "Du siehst erst nach. Die App schreibt: Kontakte zum Freunde finden. Für dein Foto brauchst du das nicht. Jetzt kennst du den Grund. Du entscheidest.",
                "Du siehst zuerst nach, wofür die App die Kontakte will. Sie nennt „Freunde finden“. Für dein Foto brauchst du das nicht. Jetzt kennst du den Grund und entscheidest.",
                "Du prüfst zuerst den angegebenen Zweck. Die App nennt „Freunde finden“. Für die Bearbeitung deines Fotos ist das nicht erforderlich. Mit dieser Information triffst du deine Entscheidung."
              ),
              folgeknoepfe: [
                { id: "kontakteNein", text: "Nicht erlauben" },
                { id: "kontakteJa", text: "Erlauben" }
              ]
            },
            kontakteJa: {
              wertung: "eigene",
              text: drei(
                "Die App darf jetzt deine Kontakte lesen. Sie hat es schon getan. Sie zeigt dir 3 Freunde. Für dein Foto braucht die App das nicht. Du entscheidest jetzt: Zugriff ausschalten. Oder so lassen.",
                "Die App darf jetzt deine Kontakte lesen, und sie hat es schon getan: Sie zeigt dir 3 Freunde. Für dein Foto braucht sie das nicht. Du entscheidest, ob du den Zugriff wieder ausschaltest oder ihn so lässt.",
                "Die App hat nun die Berechtigung, deine Kontakte zu lesen, und hat sie bereits genutzt: Sie zeigt dir 3 Freunde an. Für die Bearbeitung eines Fotos ist das nicht erforderlich. Du entscheidest, ob du die Berechtigung wieder entziehst oder bestehen lässt."
              ),
              folgeknoepfe: [
                { id: "zugriffAus", text: "Zugriff ausschalten" },
                { id: "soLassen", text: "So lassen" }
              ]
            },
            zugriffAus: {
              wertung: "passend",
              text: drei(
                "Der Zugriff ist aus. Die App darf ab jetzt keine Kontakte mehr lesen. Aber: Die App hat vielleicht schon Kontakte kopiert. Diese Kopie wird nicht von selbst gelöscht. Du kannst die Firma von der App bitten: Löscht meine Daten.",
                "Der Zugriff ist aus, und die App darf ab jetzt keine Kontakte mehr lesen. Kontakte, die sie schon kopiert hat, werden dadurch aber nicht von selbst gelöscht. Du kannst die Firma der App bitten, diese Daten zu löschen.",
                "Die Berechtigung ist entzogen; die App kann ab jetzt nicht mehr auf deine Kontakte zugreifen. Bereits kopierte Daten werden dadurch jedoch nicht automatisch gelöscht. Du kannst beim Anbieter der App die Löschung dieser Daten verlangen."
              ),
              erfolg: {
                tun: drei(
                  "Du hast den Zugriff wieder ausgeschaltet. Die App liest ab jetzt keine Kontakte mehr.",
                  "Du hast den Zugriff wieder ausgeschaltet, und die App liest ab jetzt keine Kontakte mehr.",
                  "Du hast die Berechtigung wieder entzogen. Die App liest ab jetzt keine Kontakte mehr."
                ),
                reaktionGeschichte: "„Gut. Das lässt sich also wieder ändern.“",
                reaktionSonst: "„Gut zu wissen. Das lässt sich wieder ändern.“"
              }
            },
            soLassen: {
              wertung: "eigene",
              text: drei(
                "Das ist deine Entscheidung. Die App darf deine Kontakte weiter lesen. Du kannst das später ändern. Das geht in den Einstellungen von deinem Handy.",
                "Das ist deine Entscheidung. Die App darf deine Kontakte weiter lesen. Du kannst das später jederzeit in den Einstellungen deines Handys ändern.",
                "Das ist deine Entscheidung. Die App behält den Zugriff auf deine Kontakte. Du kannst die Berechtigung jederzeit in den Einstellungen deines Geräts ändern."
              ),
              erfolg: {
                tun: drei(
                  "Du hast entschieden: Der Zugriff bleibt an. Du kannst das später ändern.",
                  "Du hast entschieden, dass der Zugriff an bleibt. Du kannst das später ändern.",
                  "Du hast entschieden, die Berechtigung bestehen zu lassen. Das lässt sich später ändern."
                ),
                reaktionGeschichte: null,
                reaktionSonst: null
              }
            }
          },
          ende: "kontakteNein"
        }
      }
    },
    ds2: {
      id: "ds2", name: "DS2 Wer sieht es?", thema: "datenschutz", lektion: "Wer sieht es?",
      handySituation: [{ typ: "schalter", app: "Status", titel: "Sichtbarkeit", an: true, beschreibung: "Wer darf dein Foto sehen?" }],
      handyVorbild: [{ typ: "schalter", app: "Status", titel: "Nur für Freunde", an: true, hinweis: "Alex wählt: Nur Freunde" }],
      handyUebung: [{ typ: "schalter", app: "Status", titel: "Öffentlich für alle", an: true, id: "schalter-oeffentlich", beschreibung: "Soll jeder im Netz das Foto sehen?", knoepfe: [{ id: "schalter-oeffentlich", text: "Auf Freunde umstellen" }] }],
      interaktivUebung: {
        aufgabe: drei("Stelle die Sichtbarkeit auf deine Freunde.", "Stelle die Sichtbarkeit auf Freunde um.", "Begrenze die Sichtbarkeit auf deine Kontakte."),
        uebung: {
          handlungen: {
            "schalter-oeffentlich": {
              wertung: "passend",
              text: drei(
                "Jetzt sehen nur deine Freunde das Foto – Fremde sehen es nicht öffentlich. Bedenke aber: Auch Freunde können ein Foto speichern oder weiterleiten.",
                "So sehen Fremde dein Foto nicht öffentlich; deine Freunde können es weiter sehen. Bedenke aber: Auch bestätigte Kontakte können geteilte Bilder speichern oder weiterleiten.",
                "Die Begrenzung auf Freunde verhindert die öffentliche Verbreitung durch Unbekannte. Beachten Sie jedoch: Auch bestätigte Kontakte können geteilte Aufnahmen speichern oder weiterleiten."
              )
            }
          },
          ende: "schalter-oeffentlich"
        }
      }
    },

    /* -------------------------------------------------------------
       THEMA 2: WHATSAPP (3 Einheiten: GE1, WA2, WA3)
       ------------------------------------------------------------- */
    ge1: { id: "ge1", name: "GE1 Fremde schreiben dir", thema: "whatsapp", lektion: "Unbekannte Nachrichten", eigen: true },
    wa2: { id: "wa2", name: "WA2 Link in einer Nachricht", thema: "whatsapp", lektion: "Links in Nachrichten", eigen: true },
    wa3: {
      id: "wa3", name: "WA3 Dein Code bleibt bei dir", thema: "whatsapp", lektion: "Dein WhatsApp-Code",
      postfach: "Code-Trick", anwenden: "whatsapp/neu/ausflug-code",
      handySituation: [{ typ: "sms", text: "Dein WhatsApp-Code lautet: 481-920. Gib ihn an niemanden weiter." }],
      handyVorbild: [{ typ: "chat", von: "Tilda", text: "Tilda gibt den Code nicht weiter. Er ist geheim." }],
      handyUebung: [{ typ: "chat", von: "Ben", text: "Hallo! Ich habe dir aus Versehen meinen Code geschickt. Schickst du ihn mir?", knoepfe: [{ id: "codeBehalten", text: "Code behalten" }, { id: "freundAnrufen", text: "Code behalten und anrufen" }, { id: "codeSenden", text: "Code weiterschicken" }] }],
      interaktivUebung: {
        aufgabe: drei("Ben ist dein Freund. Er bittet dich um den Code. Was machst du mit dem Code?", "Dein Freund Ben bittet dich um den Code. Wie reagierst du auf die Bitte?", "Dein Freund Ben bittet um deinen Code. Wie reagierst du auf die Nachricht?"),
        uebung: {
          handlungen: {
            codeBehalten: {
              wertung: "passend",
              text: drei("Du schickst den Code nicht. Auch wenn dort „Ben“ steht, kann jemand anderes sein Konto nutzen. Mit dem Code kann jemand dein WhatsApp-Konto übernehmen.", "Du gibst den Code nicht weiter. Auch das Konto eines Freundes kann übernommen worden sein. Mit deinem Code könnte jemand dein WhatsApp-Konto übernehmen.", "Du behältst den Code für dich. Selbst ein bekannter Kontaktname schützt nicht, falls das Konto übernommen wurde. Mit deinem Code könnte jemand dein WhatsApp-Konto übernehmen.")
            },
            freundAnrufen: {
              wertung: "auchMoeglich",
              text: drei(
                "Du schickst den Code nicht. Du rufst Ben über seine bekannte Nummer an. Aber auch ein Anruf ist kein sicherer Beweis. Den Code sagst du auch am Telefon niemals.",
                "Du behältst den Code für dich und fragst Ben über seine bekannte Nummer nach der Nachricht. Bedenke aber: Auch am Telefon können Nummern gefälscht sein – gib niemals Codes weiter.",
                "Du gibst den Code nicht weiter und fragst über Bens bereits bekannte Nummer nach. Da jedoch auch Rufnummern manipuliert werden können, ist ein Anruf kein garantierter Identitätsnachweis – Codes werden auch am Telefon niemals weitergegeben."
              )
            },
            codeSenden: {
              wertung: "unpassend",
              text: drei("Du hast den Code in der Übung geschickt. Mit einem echten Code kann jemand dein WhatsApp-Konto übernehmen. Du kannst es hier noch einmal versuchen.", "Du hast den Code in der Übung weitergegeben. Mit einem echten Code könnte jemand dein WhatsApp-Konto übernehmen. Du kannst deine Entscheidung hier noch einmal versuchen.", "Du hast den Code innerhalb der Simulation weitergegeben. Bei einem echten Registrierungscode besteht das Risiko einer Kontoübernahme. Du kannst die Entscheidung erneut ausprobieren.")
            }
          },
          ende: "codeBehalten"
        }
      }
    },

    /* -------------------------------------------------------------
       THEMA 3: FACEBOOK (3 Einheiten: FB1, FB2, FB3)
       ------------------------------------------------------------- */
    fb1: {
      id: "fb1", name: "FB1 Wer sieht meinen Beitrag?", thema: "facebook", lektion: "Dein Facebook-Profil",
      anwenden: "facebook/neu/regal-freundeskreis",
      handySituation: [{ typ: "profil", name: "Dein Profil", details: "Neuer Beitrag", bio: "Neues Foto vom Wohnzimmer teilen" }],
      handyVorbild: [{ typ: "perspektive", titel: "Beitrag auf Facebook", eigenSicht: "Du teilst das Foto: Deine Freunde können es sehen und kommentieren.", fremdSicht: "Fremde Personen sehen: Keine öffentlichen Beiträge vorhanden." }],
      handyUebung: [{ typ: "schalter", app: "Facebook", titel: "Sichtbarkeit: Öffentlich", an: true, id: "schalter-fb-zielgruppe", knoepfe: [{ id: "schalter-fb-zielgruppe", text: "Auf Freunde umstellen" }] }],
      interaktivUebung: {
        aufgabe: drei("Wähle aus: Nur deine Freunde sollen das Foto sehen.", "Stelle die Zielgruppe des Beitrags auf Freunde.", "Begrenze die Sichtbarkeit auf deinen Freundeskreis."),
        uebung: {
          handlungen: {
            "schalter-fb-zielgruppe": {
              wertung: "passend",
              text: drei(
                "Jetzt sehen nur deine Freunde das Foto – Fremde sehen es nicht öffentlich. Bedenke aber: Auch Freunde können das Foto speichern oder weiterleiten.",
                "Die Zielgruppe Freunde verhindert, dass Fremde das Foto öffentlich sehen. Bedenke aber: Auch bestätigte Freunde können geteilte Bilder speichern oder weitergeben.",
                "Die Einschränkung verhindert öffentliche Sichtbarkeit für Unbekannte. Beachten Sie jedoch: Bestätigte Freunde können geteilte Fotos weiterhin sehen, speichern oder weiterverbreiten."
              )
            }
          },
          ende: "schalter-fb-zielgruppe"
        }
      }
    },
    fb2: {
      id: "fb2", name: "FB2 Eine Freundschafts-Anfrage", thema: "facebook", lektion: "Unbekannte Personen",
      grad: "ueberlegen",
      titel: drei("Unbekannte Personen", "Unbekannte Personen", "Unbekannte Personen"),
      lagen: {
        luca: {
          grad: "klar",
          situationText: drei(
            "Tilda bekommt eine Anfrage von Luca M. Tilda kennt keinen Luca. Das Profil hat kein Foto. Es gibt auch keine gemeinsamen Freunde. Luca hat nichts dazu geschrieben.",
            "Tilda bekommt eine Anfrage von Luca M., den sie nicht kennt. Das Profil hat kein Foto, und es gibt keine gemeinsamen Freunde. Luca hat nichts dazu geschrieben.",
            "Tilda erhält eine Anfrage von Luca M., den sie nicht kennt. Das Profil hat kein Foto und keine gemeinsamen Freunde; eine Nachricht hat Luca nicht geschrieben."
          ),
          handySituation: [{ typ: "profil", name: "Luca M.", details: "Kein Foto · keine gemeinsamen Freunde", bio: "Freundschaftsanfrage" }],
          handyUebung: [{
            typ: "profil",
            name: "Luca M.",
            details: "Kein Foto · keine gemeinsamen Freunde",
            bio: "Luca M. will dein Freund sein",
            wenig: ["ablehnen", "annehmen"],
            knoepfe: [
              { id: "ablehnen", text: "Lehn die Anfrage ab." },
              { id: "annehmen", text: "Nimm an. Vielleicht ist er nett." },
              { id: "profil", text: "Sieh erst ins Profil." }
            ]
          }],
          interaktivUebung: {
            aufgabe: drei("Was rätst du Tilda?", "Was rätst du Tilda?", "Welchen Rat gibst du Tilda?"),
            hinweis: drei("Überlege: Was weiß Tilda über Luca?", "Überlege, was Tilda über Luca weiß.", "Überlege, was Tilda über Luca weiß."),
            mehrereWege: true,
            uebung: {
              handlungen: {
                ablehnen: {
                  wertung: "gleichwertig",
                  text: drei(
                    "Tilda lehnt ab. Sie kennt Luca nicht. Das Profil zeigt nichts von ihm. Tilda muss niemanden annehmen.",
                    "Tilda lehnt ab, weil sie Luca nicht kennt und das Profil nichts von ihm zeigt. Sie muss niemanden annehmen.",
                    "Tilda lehnt ab: Sie kennt Luca nicht, und das Profil verrät nichts über ihn. Sie ist nicht verpflichtet, jemanden anzunehmen."
                  ),
                  erfolg: {
                    tun: drei(
                      "Du hast Tilda geraten: Lehn ab. Luca sieht nichts von Tilda.",
                      "Du hast Tilda geraten abzulehnen. Luca sieht nichts von ihr.",
                      "Du hast Tilda geraten, die Anfrage abzulehnen. Luca erhält keinen Einblick in ihr Profil."
                    ),
                    reaktionGeschichte: "„Danke. Ich kenne ihn ja nicht.“"
                  }
                },
                annehmen: {
                  wertung: "eigene",
                  text: drei(
                    "Tilda nimmt an. Luca sieht jetzt ihre Fotos für Freunde. Tilda weiß weiter nichts über Luca. Sie kann ihn wieder entfernen.",
                    "Tilda nimmt an. Luca sieht jetzt ihre Fotos für Freunde, aber Tilda weiß weiter nichts über ihn. Sie kann ihn wieder entfernen.",
                    "Tilda nimmt an. Luca sieht nun ihre Fotos für Freunde, während sie weiterhin nichts über ihn weiß. Sie kann ihn wieder entfernen."
                  )
                },
                profil: {
                  wertung: "gleichwertig",
                  text: drei(
                    "Tilda sieht ins Profil. Dort steht nichts. Kein Foto. Keine Beiträge. Tilda weiß nicht mehr als vorher. Sie nimmt nicht an.",
                    "Tilda sieht ins Profil, aber dort steht nichts: kein Foto und keine Beiträge. Sie weiß nicht mehr als vorher und nimmt nicht an.",
                    "Tilda sieht sich das Profil an. Es enthält weder ein Foto noch Beiträge. Sie weiß nicht mehr als zuvor und nimmt die Anfrage nicht an."
                  ),
                  erfolg: {
                    tun: drei(
                      "Du hast Tilda geraten: Sieh erst ins Profil. Dort stand nichts. Tilda hat nicht angenommen.",
                      "Du hast Tilda geraten, erst ins Profil zu sehen. Dort stand nichts, und sie hat nicht angenommen.",
                      "Du hast Tilda geraten, zuerst das Profil anzusehen. Es war leer, und sie hat die Anfrage nicht angenommen."
                    ),
                    reaktionGeschichte: "„Danke. Ein leeres Profil sagt mir nichts.“"
                  }
                }
              },
              ende: "ablehnen"
            }
          }
        },
        meryem: {
          grad: "ueberlegen",
          situationText: drei(
            "Tilda war gestern im Koch-Kurs. Dort hat sie Meryem getroffen. Die beiden haben gesagt: Wir schreiben uns bei Facebook. Heute kommt eine Anfrage von Meryem Kaya. Das Foto zeigt Meryem.",
            "Tilda hat gestern im Kochkurs Meryem kennengelernt, und die beiden haben verabredet, sich bei Facebook zu schreiben. Heute kommt eine Anfrage von Meryem Kaya. Das Foto zeigt Meryem.",
            "Tilda hat gestern im Kochkurs Meryem kennengelernt; die beiden haben verabredet, sich über Facebook zu schreiben. Heute trifft eine Anfrage von Meryem Kaya ein, mit einem Foto von ihr."
          ),
          handySituation: [{ typ: "profil", name: "Meryem Kaya", details: "Foto · 1 gemeinsamer Freund", bio: "Freundschaftsanfrage" }],
          handyUebung: [{
            typ: "profil",
            name: "Meryem Kaya",
            details: "Foto · 1 gemeinsamer Freund",
            bio: "Meryem aus dem Koch-Kurs",
            wenig: ["annehmen", "ablehnen"],
            knoepfe: [
              { id: "ablehmen", text: "Lehn ab. Du kennst sie kaum." },
              { id: "profil", text: "Sieh erst ins Profil." },
              { id: "annehmen", text: "Nimm die Anfrage an." }
            ]
          }],
          interaktivUebung: {
            aufgabe: drei("Was rätst du Tilda?", "Was rätst du Tilda?", "Welchen Rat gibst du Tilda?"),
            hinweis: drei("Überlege: Passt die Anfrage zu gestern?", "Überlege, ob die Anfrage zu gestern passt.", "Überlege, ob die Anfrage zu dem passt, was gestern verabredet wurde."),
            mehrereWege: false,
            uebung: {
              handlungen: {
                ablehmen: {
                  wertung: "eigene",
                  text: drei(
                    "Tilda lehnt ab. Das darf sie. Aber Tilda will sich mit Meryem schreiben. Die Anfrage passt zu gestern. Hier spricht nichts gegen Meryem.",
                    "Tilda lehnt ab, und das darf sie. Sie wollte sich aber mit Meryem schreiben, und die Anfrage passt zu gestern. Hier spricht nichts gegen Meryem.",
                    "Tilda lehnt ab; das steht ihr frei. Sie wollte allerdings mit Meryem in Kontakt bleiben, und die Anfrage passt zur Verabredung. Gegen Meryem spricht hier nichts."
                  )
                },
                profil: {
                  wertung: "auchMoeglich",
                  text: drei(
                    "Tilda sieht erst ins Profil. Dort sind Fotos vom Koch-Kurs. Das passt zu Meryem. Tilda nimmt an.",
                    "Tilda sieht erst ins Profil und findet dort Fotos vom Kochkurs. Das passt zu Meryem, deshalb nimmt sie an.",
                    "Tilda sieht sich zuerst das Profil an und findet Fotos vom Kochkurs. Das passt zu Meryem, und sie nimmt die Anfrage an."
                  )
                },
                annehmen: {
                  wertung: "passend",
                  text: drei(
                    "Tilda nimmt an. Sie hat Meryem gestern selbst getroffen. Die beiden haben über die Anfrage gesprochen. Das Foto passt. Hier stimmt alles zusammen.",
                    "Tilda nimmt an, denn sie hat Meryem gestern selbst getroffen, und die beiden haben über die Anfrage gesprochen. Auch das Foto passt.",
                    "Tilda nimmt an: Sie hat Meryem gestern persönlich kennengelernt, die Anfrage war verabredet, und das Foto passt."
                  ),
                  erfolg: {
                    tun: drei(
                      "Du hast Tilda geraten: Nimm an. Die Anfrage passt zu gestern.",
                      "Du hast Tilda geraten anzunehmen, weil die Anfrage zu gestern passt.",
                      "Du hast Tilda geraten, die Anfrage anzunehmen, weil sie zur Verabredung passt."
                    ),
                    reaktionGeschichte: "„Danke. Ich freue mich auf die Rezepte von Meryem.“"
                  }
                }
              },
              ende: "annehmen"
            }
          }
        },
        petra: {
          grad: "knifflig",
          situationText: drei(
            "Tilda bekommt eine Anfrage von Petra Sommer. Petra singt mit Tilda im Chor. Das Foto zeigt Petra. Aber die beiden sind schon befreundet.",
            "Tilda bekommt eine Anfrage von Petra Sommer, mit der sie im Chor singt. Das Foto zeigt Petra, aber die beiden sind bei Facebook schon befreundet.",
            "Tilda erhält eine Anfrage von Petra Sommer, mit der sie im Chor singt. Das Foto zeigt Petra; die beiden sind bei Facebook allerdings bereits befreundet."
          ),
          handySituation: [{ typ: "profil", name: "Petra Sommer", details: "Foto · 5 gemeinsame Freunde", bio: "Freundschaftsanfrage" }],
          handyUebung: [{
            typ: "profil",
            name: "Petra Sommer",
            details: "Foto · 5 gemeinsame Freunde",
            bio: "Freundschaftsanfrage · schon befreundet?",
            wenig: ["liste", "annehmen"],
            knoepfe: [
              { id: "anrufen", text: "Ruf Petra an. Frag sie." },
              { id: "liste", text: "Sieh in deine Freundes-Liste." },
              { id: "annehmen", text: "Nimm an. Es ist ja Petra." }
            ]
          }],
          interaktivUebung: {
            aufgabe: drei("Was rätst du Tilda?", "Was rätst du Tilda?", "Welchen Rat gibst du Tilda?"),
            hinweis: drei(
              "Überlege: Tilda und Petra sind schon befreundet. Wo kann Tilda das sehen?",
              "Überlege, wo Tilda sehen kann, ob sie mit Petra schon befreundet ist.",
              "Überlege, wo Tilda nachsehen kann, ob sie mit Petra bereits befreundet ist."
            ),
            nachDemGutenWeg: drei(
              "Tilda sagt Petra Bescheid. Petra kann das zweite Profil bei Facebook melden.",
              "Tilda sagt Petra Bescheid, damit Petra das zweite Profil bei Facebook melden kann.",
              "Tilda informiert Petra, damit diese das zweite Profil bei Facebook melden kann."
            ),
            mehrereWege: true,
            uebung: {
              handlungen: {
                anrufen: {
                  wertung: "gleichwertig",
                  text: drei(
                    "Tilda ruft Petra an. Sie nimmt die gespeicherte Nummer. Petra sagt: Die Anfrage ist nicht von mir. Jetzt weiß Tilda Bescheid. Sie nimmt nicht an. Tilda sagt Petra Bescheid. Petra kann das zweite Profil bei Facebook melden.",
                    "Tilda ruft Petra unter der gespeicherten Nummer an. Petra sagt, dass die Anfrage nicht von ihr kommt. Jetzt weiß Tilda Bescheid und nimmt nicht an. Tilda sagt Petra Bescheid, damit Petra das zweite Profil bei Facebook melden kann.",
                    "Tilda ruft Petra unter der gespeicherten Nummer an und erfährt, dass die Anfrage nicht von ihr stammt. Sie nimmt die Anfrage nicht an. Tilda informiert Petra, damit diese das zweite Profil bei Facebook melden kann."
                  ),
                  erfolg: {
                    tun: drei(
                      "Du hast Tilda geraten: Ruf Petra an. Petra hat gesagt: Das bin ich nicht.",
                      "Du hast Tilda geraten, Petra anzurufen. Petra hat gesagt, dass die Anfrage nicht von ihr ist.",
                      "Du hast Tilda geraten, Petra anzurufen. Petra hat bestätigt, dass die Anfrage nicht von ihr stammt."
                    ),
                    reaktionGeschichte: "„Danke. Jetzt weiß Petra auch Bescheid.“"
                  }
                },
                liste: {
                  wertung: "gleichwertig",
                  text: drei(
                    "Tilda sieht in ihre Freundes-Liste. Dort steht Petra schon. Die Anfrage kommt also von einem zweiten Profil. Jemand benutzt den Namen und das Foto von Petra. Tilda nimmt nicht an. Tilda sagt Petra Bescheid. Petra kann das zweite Profil bei Facebook melden.",
                    "Tilda sieht in ihre Freundesliste, und dort steht Petra schon. Die Anfrage kommt also von einem zweiten Profil, das Petras Namen und Foto benutzt. Tilda nimmt nicht an. Tilda sagt Petra Bescheid, damit Petra das zweite Profil bei Facebook melden kann.",
                    "Tilda sieht in ihrer Freundesliste nach: Petra steht dort bereits. Die Anfrage stammt demnach von einem zweiten Profil, das Petras Namen und Foto verwendet. Tilda nimmt sie nicht an. Tilda informiert Petra, damit diese das zweite Profil bei Facebook melden kann."
                  ),
                  erfolg: {
                    tun: drei(
                      "Du hast Tilda geraten: Sieh in deine Freundes-Liste. Dort stand Petra schon. Tilda hat nicht angenommen.",
                      "Du hast Tilda geraten, in ihre Freundesliste zu sehen. Dort stand Petra schon, und Tilda hat nicht angenommen.",
                      "Du hast Tilda geraten, in ihrer Freundesliste nachzusehen. Petra stand dort bereits, und Tilda hat die Anfrage nicht angenommen."
                    ),
                    reaktionGeschichte: "„Danke. Das Foto sah so echt aus. Ich wollte schon annehmen.“"
                  }
                },
                annehmen: {
                  wertung: "eigene",
                  text: drei(
                    "Tilda nimmt an. Gleich schreibt das neue Profil. Es will 50 Euro leihen. Tilda wundert sich: So schreibt Petra sonst nicht. Tilda zahlt nichts. Sie entfernt das Profil wieder.",
                    "Tilda nimmt an, und gleich schreibt das neue Profil, dass es 50 Euro leihen will. Tilda wundert sich, weil Petra sonst nicht so schreibt. Sie zahlt nichts und entfernt das Profil wieder.",
                    "Tilda nimmt an. Kurz darauf bittet das neue Profil um 50 Euro. Tilda wundert sich, weil das nicht zu Petra passt. Sie zahlt nichts und entfernt das Profil wieder."
                  )
                }
              },
              ende: "liste"
            }
          }
        }
      },
      titel: drei("Unbekannte Personen", "Unbekannte Personen", "Unbekannte Personen"),
      regel: "echt",
      vorbildWer: "alex",
      vorbildText: drei(
        "Alex bekommt eine Anfrage von Mara Lenz. Alex kennt sie nicht. Er tippt auf das Profil. Dort steht fast nichts. Alex nimmt die Anfrage nicht an.",
        "Alex bekommt eine Anfrage von Mara Lenz, die er nicht kennt. Er sieht sich zuerst das Profil an. Dort steht fast nichts, deshalb nimmt er die Anfrage nicht an.",
        "Alex erhält eine Anfrage von Mara Lenz, die er nicht kennt. Er sieht sich zuerst das Profil an. Es enthält kaum Angaben, deshalb nimmt er die Anfrage nicht an."
      ),
      anwenden: "facebook/neu/auslosung-anfrage",
      handySituation: [{ typ: "profil", name: "Jonas Weber", details: "2 gemeinsame Freunde", bio: "Freundschaftsanfrage" }],
      handyVorbild: [{ typ: "profil", name: "Mara Lenz", details: "Profil wird geprüft", bio: "Alex schaut erst ins Profil" }],
      handyUebung: [{
        typ: "profil",
        name: "Jonas Weber",
        details: "2 gemeinsame Freunde",
        bio: "Möchte dein Freund werden",
        wenig: ["profilPruefen"],
        knoepfe: [
          { id: "profilPruefen", text: "Profil ansehen" },
          { id: "ablehnen", text: "Ablehnen" }
        ]
      }],
      interaktivUebung: {
        aufgabe: drei("Was rätst du Tilda?", "Was rätst du Tilda?", "Welchen Rat gibst du Tilda?"),
        hinweis: drei("Überlege: Kann Tilda erst mehr über Jonas erfahren?", "Überlege: Kann Tilda zuerst nachsehen, wer hinter dem Profil steckt?", "Überlege, wie Tilda mehr Informationen erhält, ohne sofort persönliche Inhalte freizugeben."),
        mehrereWege: true,
        uebung: {
          handlungen: {
            profilPruefen: {
              wertung: "gleichwertig",
              text: drei(
                "Tilda sieht ins Profil. Das Konto ist 3 Tage alt. Es gibt 1 Foto. Es gibt keine Beiträge. Tilda sagt: Das ist mir zu wenig. Sie nimmt nicht an. Dein Rat gibt Tilda Zeit. Sie sieht erst nach. Dann entscheidet sie selbst.",
                "Tilda sieht sich das Profil an: Das Konto ist erst 3 Tage alt und hat nur 1 Foto. Das ist ihr zu wenig, deshalb nimmt sie nicht an. Mit deinem Rat konnte sie erst nachsehen und dann selbst entscheiden.",
                "Tilda prüft das Profil: Das Konto besteht erst seit 3 Tagen und enthält nur ein Foto. Das genügt ihr nicht, und sie nimmt die Anfrage nicht an. Dein Rat hat ihr ermöglicht, zuerst nachzusehen und dann selbst zu entscheiden."
              ),
              erfolg: {
                tun: drei(
                  "Du hast Tilda geraten: Sieh erst ins Profil. Tilda hat nachgesehen. Dann hat sie selbst entschieden.",
                  "Du hast Tilda geraten, erst ins Profil zu sehen. Sie hat nachgesehen und dann selbst entschieden.",
                  "Du hast Tilda geraten, zuerst das Profil anzusehen. Sie hat es geprüft und danach selbst entschieden."
                ),
                reaktionGeschichte: "„Danke. Jetzt weiß ich mehr über Jonas.“",
                reaktionSonst: "„So mache ich es auch. Erst sehe ich nach.“"
              }
            },
            ablehnen: {
              wertung: "gleichwertig",
              text: drei(
                "Tilda lehnt ab. Die Anfrage ist weg. Jonas sieht nichts von Tilda. Tilda kennt Jonas vielleicht doch? Dann sucht sie ihn später selbst.",
                "Tilda lehnt ab, und die Anfrage ist weg. Jonas sieht dadurch nichts von ihr. Falls sie ihn doch kennt, kann sie ihn später selbst suchen.",
                "Tilda lehnt ab, und die Anfrage verschwindet. Jonas erhält dadurch keinen Einblick in ihr Profil. Sollte sie ihn doch kennen, kann sie ihn später selbst suchen."
              ),
              erfolg: {
                tun: drei(
                  "Du hast Tilda geraten: Lehn ab. Jonas sieht jetzt nichts von Tilda.",
                  "Du hast Tilda geraten abzulehnen. Jonas sieht jetzt nichts von ihr.",
                  "Du hast Tilda geraten, die Anfrage abzulehnen. Jonas erhält keinen Einblick in ihr Profil."
                ),
                reaktionGeschichte: "„Danke. Die Anfrage ist weg. Das ist mir recht.“",
                reaktionSonst: "„So mache ich es auch. Ich muss niemanden annehmen.“"
              }
            }
          },
          ende: "profilPruefen"
        }
      }
    },
    fb3: {
      id: "fb3", name: "FB3 Komische Nachricht von Freunden", thema: "facebook", lektion: "Komische Nachrichten",
      handySituation: [{ typ: "chat", von: "Jemand", text: "Ich brauche schnell Geld. Tipp hier." }],
      handyVorbild: [{ typ: "chat", von: "Tilda", text: "Tilda ruft Markus kurz an, um nachzufragen." }],
      handyUebung: [{ typ: "chat", von: "Markus", text: "Bist du das in dem Video? Schau mal.", knoepfe: [{ id: "nachfragen", text: "Markus persönlich fragen" }, { id: "linkNichtOeffnen", text: "Link nicht öffnen" }, { id: "linkKlicken", text: "Video-Link öffnen" }] }],
      interaktivUebung: {
        aufgabe: drei("Wie reagierst du auf Markus?", "Was machst du jetzt?", "Wie verhältst du dich gegenüber der Nachricht?"),
        uebung: {
          handlungen: {
            nachfragen: {
              wertung: "passend",
              text: drei("Markus hat das Video gar nicht geschickt. Sein Konto war gehackt.", "Erst auf einem anderen Weg nachfragen klärt den Verdacht.", "Das Konto eines Kontakts könnte kompromittiert sein.")
            },
            linkNichtOeffnen: {
              wertung: "auchMoeglich",
              text: drei("Du tippst den Link nicht an und rufst die fremde Seite nicht auf.", "Du öffnest den Link nicht und vermeidest so den Aufruf einer möglicherweise schädlichen Seite.", "Durch Nicht-Anklicken verhindern Sie den Aufruf einer möglicherweise schädlichen Seite.")
            },
            linkKlicken: {
              wertung: "unpassend",
              text: drei("Vorsicht! Dahinter steckt ein Schadprogramm.", "Nicht passend. Klicke bei seltsamen Nachrichten nicht auf den Link.", "Problematisch. Solche Phishing-Nachrichten verbreiten sich über gehackte Konten.")
            }
          },
          ende: "nachfragen"
        }
      }
    },

    /* -------------------------------------------------------------
       THEMA 4: INSTAGRAM (2 eigene Einheiten + GE1)
       ------------------------------------------------------------- */
    ig1: {
      id: "ig1", name: "IG1 Privat oder öffentlich?", thema: "instagram", lektion: "Deine Fotos auf Instagram",
      handySituation: [{ typ: "schalter", app: "Instagram", titel: "Konto öffentlich", an: true, beschreibung: "Jeder kann deine Fotos sehen" }],
      handyVorbild: [{ typ: "schalter", app: "Instagram", titel: "Konto privat", an: true, hinweis: "Tilda stellt auf privat" }],
      handyUebung: [{ typ: "schalter", app: "Instagram", titel: "Konto auf privat stellen", an: false, id: "kontoPrivat", knoepfe: [{ id: "kontoPrivat", text: "Konto auf privat stellen" }] }],
      interaktivUebung: {
        aufgabe: drei("Schalte dein Konto auf privat.", "Stelle dein Instagram-Konto auf privat um.", "Aktiviere die Option für ein privates Profil."),
        uebung: {
          handlungen: {
            kontoPrivat: {
              wertung: "passend",
              text: drei(
                "Jetzt sehen fremde Personen deine Fotos nicht mehr direkt. Nur bestätigte Kontakte sehen sie. Bedenke aber: Auch diese Kontakte können Fotos speichern oder weitergeben.",
                "Bei einem privaten Konto musst du neue Follower erst bestätigen. Fremde sehen deine Fotos dann nicht mehr öffentlich. Bedenke aber: Auch bestätigte Kontakte können Bilder per Bildschirmfoto speichern oder weiterleiten.",
                "Ein privates Profil schützt deine Beiträge vor öffentlichen Blicken Unbekannter. Beachten Sie jedoch: Bestätigte Kontakte können Aufnahmen weiterhin sehen, per Screenshot speichern oder weitergeben."
              )
            }
          },
          ende: "kontoPrivat"
        }
      }
    },
    ig2: {
      id: "ig2", name: "IG2 Fotos von anderen", thema: "instagram", lektion: "Fotos von anderen Personen",
      anwenden: "instagram/neu/gruppenfoto-nein",
      handySituation: [{ typ: "chat", von: "Alex", text: "Schau mal, das Gruppenfoto von gestern!" }],
      handyVorbild: [{ typ: "chat", von: "Tilda an Alex", text: "Darf ich das Foto posten?" }],
      handyUebung: [{ typ: "chat", von: "Dana", text: "Bitte poste das Foto von mir nicht im Internet.", knoepfe: [{ id: "respektieren", text: "Nein akzeptieren" }, { id: "trotzdem", text: "Trotzdem posten" }] }],
      interaktivUebung: {
        aufgabe: drei("Was machst du mit dem Foto?", "Wie entscheidest du dich?", "Wie reagierst du auf Danas Wunsch?"),
        uebung: {
          handlungen: {
            respektieren: {
              wertung: "passend",
              text: drei("Wenn jemand Nein sagt, postest du das Foto nicht.", "Jeder Mensch bestimmt selbst über die eigenen Fotos.", "Das Recht am eigenen Bild muss respektiert werden.")
            },
            trotzdem: {
              wertung: "unpassend",
              text: drei("Das ist nicht in Ordnung. Frage immer vorher und akzeptiere ein Nein.", "Nicht passend. Ohne Erlaubnis darfst du Fotos anderer nicht veröffentlichen.", "Unpassend. Ein Verstoß gegen das Recht am eigenen Bild kann rechtliche Folgen haben.")
            }
          },
          ende: "respektieren"
        }
      }
    },

    /* -------------------------------------------------------------
       THEMA 5: YOUTUBE (3 Einheiten: YT1, YT2, YT3)
       ------------------------------------------------------------- */
    yt1: {
      id: "yt1", name: "YT1 Stimmt das Video?", thema: "youtube", lektion: "Videos prüfen",
      handySituation: [{ typ: "video", titel: "Ab Montag kein Bus mehr in der Stadt!", kanal: "Sensations-News", dauer: "1:20" }],
      handyVorbild: [{ typ: "webseite", titel: "Verkehrsbetriebe Fahrplan", felder: ["Aktuelle Meldungen: Busse fahren normal"] }],
      handyUebung: [{ typ: "video", titel: "Schock-Nachricht im Video", kanal: "Kanal prüfen?", knoepfe: [{ id: "quelleSuchen", text: "Offizielle Quelle prüfen" }, { id: "allesGlauben", text: "Sofort glauben" }] }],
      interaktivUebung: {
        aufgabe: drei("Wie prüfst du das Video?", "Wie gehst du mit der Meldung um?", "Wie verifizierst du die Behauptung im Video?"),
        uebung: {
          handlungen: {
            quelleSuchen: {
              wertung: "passend",
              text: drei("Du prüfst die Meldung bei den Verkehrsbetrieben.", "Bei der zuständigen Stelle nachsehen entlarvt falsche Videos.", "Verlässliche Quellen sind Behörden und offizielle Betreiber.")
            },
            allesGlauben: {
              wertung: "unpassend",
              text: drei("Nicht ungeprüft glauben. Viele Videos wollen nur Klicks erzeugen.", "Vorsicht. Reißerische Behauptungen sollte man immer gegenprüfen.", "Unpassend. Ungeprüfte Videos führen oft zu Fehlinformationen.")
            }
          },
          ende: "quelleSuchen"
        }
      }
    },
    yt2: {
      id: "yt2", name: "YT2 Werbung erkennen", thema: "youtube", lektion: "Werbung erkennen",
      anwenden: "youtube/neu/pflanzentipp-werbung",
      handySituation: [{ typ: "video", titel: "Kopfhörer super billig – nur heute!", kanal: "Anzeige · Werbepartner", dauer: "0:30" }],
      handyVorbild: [{ typ: "video", titel: "Werbung erkannt", kanal: "Tilda überspringt die Anzeige", dauer: "0:30" }],
      handyUebung: [{ typ: "video", titel: "Anzeige im Video", kanal: "Werbung: 20 Euro Rabatt", knoepfe: [{ id: "ueberspringen", text: "Werbung überspringen" }, { id: "inRuheVergleichen", text: "Später in Ruhe prüfen" }] }],
      interaktivUebung: {
        aufgabe: drei("Was tust du bei der Werbung?", "Wie entscheidest du?", "Wie reagierst du auf das Werbeangebot?"),
        uebung: {
          handlungen: {
            ueberspringen: {
              wertung: "passend",
              text: drei("Lass dich von Zeitdruck nicht zum Kaufen drängen.", "Werbe-Einblendungen darfst du einfach überspringen.", "Überspringen schützt vor impulsiven Käufen unter Zeitdruck.")
            },
            inRuheVergleichen: {
              wertung: "auchMoeglich",
              text: drei("Das geht auch. Wenn du das Produkt wirklich brauchst, vergleiche die Preise.", "Auch möglich. Später in Ruhe Preise vergleichen ist vernünftig.", "Sinnvolle Alternative. Ein überlegter Preisvergleich verhindert Fehlkäufe.")
            }
          },
          ende: "ueberspringen"
        }
      }
    },
    yt3: {
      id: "yt3", name: "YT3 Selbst aufhören", thema: "youtube", lektion: "Pausen machen",
      anwenden: "youtube/neu/spaziergang-autoplay",
      handySituation: [{ typ: "video", titel: "Nächstes Video startet in 5 Sekunden...", kanal: "Autoplay aktiv", dauer: "10:00" }],
      handyVorbild: [{ typ: "schalter", app: "YouTube", titel: "Autoplay: Aus", an: false, hinweis: "Alex schaltet Autoplay aus" }],
      handyUebung: [{ typ: "schalter", app: "YouTube", titel: "Autoplay ausschalten", an: true, id: "schalter-autoplay", knoepfe: [{ id: "schalter-autoplay", text: "Autoplay ausschalten" }] }],
      interaktivUebung: {
        aufgabe: drei("Schalte das automatische Weiterspielen aus.", "Schalte die Autoplay-Funktion aus.", "Deaktiviere Autoplay für eine leichtere Pausensteuerung."),
        uebung: {
          handlungen: {
            "schalter-autoplay": {
              wertung: "passend",
              text: drei("Ohne Autoplay kannst du leichter aufhören.", "Wenn Videos nicht von allein starten, machst du leichter Pause.", "Deaktiviertes Autoplay erleichtert selbstbestimmte Pausen.")
            }
          },
          ende: "schalter-autoplay"
        }
      }
    },

    /* -------------------------------------------------------------
       THEMA 6: SNAPCHAT (3 Einheiten: SC1, SC2, SC3)
       ------------------------------------------------------------- */
    sc1: {
      id: "sc1", name: "SC1 Vor dem Senden prüfen", thema: "snapchat", lektion: "Bilder verschwinden nicht wirklich",
      anwenden: "snapchat/neu/cafe-foto",
      handySituation: [{ typ: "chat", von: "Kamera", text: "Foto aufgenommen: Im Hintergrund liegt ein amtlicher Brief mit Anschrift." }],
      handyVorbild: [{ typ: "chat", von: "Tilda", text: "Tilda prüft den Hintergrund und schneidet die Adresse heraus." }],
      handyUebung: [{ typ: "chat", von: "Snap-Vorschau", text: "Adresse im Bildhintergrund sichtbar.", knoepfe: [{ id: "bildNeuMachen", text: "Bild prüfen & neu machen" }, { id: "einfachSenden", text: "Trotzdem senden" }] }],
      interaktivUebung: {
        aufgabe: drei("Was machst du mit dem Foto?", "Wie entscheidest du?", "Wie gehst du vor dem Versenden vor?"),
        uebung: {
          handlungen: {
            bildNeuMachen: {
              wertung: "passend",
              text: drei(
                "Du schneidest deine Adresse heraus. Bedenke aber: Auch Empfänger können Snaps speichern oder abfotografieren.",
                "Niemand im Netz muss deine private Wohnadresse kennen. Bedenke dennoch: Auch ausgewählte Kontakte können Snaps per Screenshot speichern oder weitergeben.",
                "Sorgfältige Bildkontrolle schützt vor ungewollten Datenpannen. Beachten Sie jedoch: Auch ausgewählte Kontakte können Snaps per Screenshot oder Zweitgerät sichern und weiterleiten."
              )
            },
            einfachSenden: {
              wertung: "unpassend",
              text: drei(
                "Vorsicht. Snaps können gespeichert werden. Empfänger können deine Adresse speichern und weitergeben.",
                "Unpassend. Auch flüchtige Snaps können per Screenshot gespeichert und samt deiner Adresse weitergegeben werden.",
                "Problematisch: Auch flüchtige Medien wie Snaps können dauerhaft gesichert und samt Ihrer Anschrift weiterverbreitet werden."
              )
            }
          },
          ende: "bildNeuMachen"
        }
      }
    },
    sc2: {
      id: "sc2", name: "SC2 Wer sieht meinen Standort?", thema: "snapchat", lektion: "Dein Standort",
      anwenden: "snapchat/neu/cafe-standort",
      handySituation: [{ typ: "berechtigung", app: "Snapchat Snap-Map", titel: "Standort für alle Kontakte teilen?", beschreibung: "Dein genauer Wohnort wird auf der öffentlichen Karte sichtbar.", knoepfe: [{ id: "ablehnen", text: "Nicht erlauben" }, { id: "erlauben", text: "Erlauben" }] }],
      handyVorbild: [{ typ: "schalter", app: "Snap-Map", titel: "Geistermodus: An", an: true, hinweis: "Alex schaltet den Geistermodus ein" }],
      handyUebung: [{ typ: "schalter", app: "Snap-Map", titel: "Geistermodus einschalten", an: false, id: "geistermodus", knoepfe: [{ id: "geistermodus", text: "Geistermodus einschalten" }] }],
      interaktivUebung: {
        aufgabe: drei("Schalte den Geistermodus ein.", "Aktiviere den Geistermodus auf der Karte.", "Schalte den Geistermodus an, um deinen Standort zu verbergen."),
        uebung: {
          handlungen: {
            geistermodus: {
              wertung: "passend",
              text: drei("Im Geistermodus sehen andere dich nicht auf der Snap-Karte. Für die App selbst schaltest du den Standort in den Handy-Einstellungen aus. Auch einzelne Live-Standorte im Chat bleiben extra.", "Der Geistermodus verbirgt dich für andere auf der Snap-Map. Ob die App selbst deinen Standort nutzen darf, legst du in den Handy-Einstellungen fest – und gesonderte Live-Standortfreigaben im Chat steuerst du extra.", "Der Geistermodus verbirgt deinen Standort vor anderen auf der Snap-Map. Davon getrennt steuerst du den allgemeinen Standortzugriff der App in den Geräteeinstellungen sowie gesondert gestartete Live-Standortfreigaben im Chat.")
            }
          },
          ende: "geistermodus"
        }
      }
    },
    sc3: {
      id: "sc3", name: "SC3 Nein sagen", thema: "snapchat", lektion: "Niemand darf dich zwingen",
      handySituation: [{ typ: "chat", von: "Bekannter", text: "Schick mir ein privates Foto, sonst bin ich sauer!" }],
      handyVorbild: [{ typ: "chat", von: "Tilda", text: "Nein, das mache ich nicht. Hör bitte auf damit." }],
      handyUebung: [{ typ: "chat", von: "Bekannter", text: "Schick mir jetzt das Foto!", knoepfe: [{ id: "neinSagen", text: "Nein sagen" }, { id: "blockieren", text: "Blockieren" }] }],
      interaktivUebung: {
        aufgabe: drei("Wie reagierst du auf den Druck?", "Was tust du jetzt?", "Wie setzt du deine persönliche Grenze?"),
        uebung: {
          handlungen: {
            neinSagen: {
              wertung: "passend",
              text: drei("Du darfst immer Nein sagen.", "Niemand darf dich zu Fotos oder Nachrichten drängen.", "Deine persönlichen Grenzen sind unantastbar.")
            },
            blockieren: {
              wertung: "auchMoeglich",
              text: drei("Das geht auch. Wenn jemand weiter drängt, blockiere die Person.", "Auch richtig. Bei anhaltendem Druck schützt Blockieren am besten.", "Sinnvolle Maßnahme. Hartnäckigem Druck begegnet man mit Blockieren.")
            }
          },
          ende: "neinSagen"
        }
      }
    },

    /* -------------------------------------------------------------
       THEMA 7: TIKTOK (3 Einheiten: TT1, TT2, TT3)
       ------------------------------------------------------------- */
    tt1: {
      id: "tt1", name: "TT1 Was zeigt mir TikTok?", thema: "tiktok", lektion: "Was du bei TikTok siehst",
      handySituation: [{ typ: "video", titel: "Schon wieder Tanz-Videos im Feed", kanal: "TikTok-Algorithmus", dauer: "0:20" }],
      handyVorbild: [{ typ: "webseite", titel: "Suche auf TikTok", felder: ["Suchfeld: Natur und Kochen", "Gezielt Neues entdecken"] }],
      handyUebung: [{ typ: "video", titel: "Immer gleiche Video-Themen", kanal: "Feed-Auswahl", knoepfe: [{ id: "neuesSuchen", text: "Neues Thema suchen" }, { id: "weiterscrollen", text: "Weiterscrollen" }] }],
      interaktivUebung: {
        aufgabe: drei("Was tust du gegen die einseitige Auswahl?", "Wie änderst du deinen Feed?", "Wie erweiterst du deine Videoauswahl?"),
        uebung: {
          handlungen: {
            neuesSuchen: {
              wertung: "passend",
              text: drei("Du bestimmst selbst, was du sehen willst.", "Gezielt nach anderen Themen suchen erweitert deinen Feed.", "Aktives Suchen durchbricht die einseitige Algorithmusschleife.")
            },
            weiterscrollen: {
              wertung: "auchMoeglich",
              text: drei("Geht auch. Aber dann zeigt die App weiter das Gleiche.", "Das geht auch, ändert aber nichts an der einseitigen Auswahl.", "Möglich, hält die Anzeige jedoch in der gewohnten Filterschleife.")
            }
          },
          ende: "neuesSuchen"
        }
      }
    },
    tt2: {
      id: "tt2", name: "TT2 Trends: mitmachen oder nicht?", thema: "tiktok", lektion: "Was du bei TikTok siehst",
      handySituation: [{ typ: "video", titel: "Mutprobe: Sprung von der Garagenwand", kanal: "Gefährlicher Trend", dauer: "0:15" }],
      handyVorbild: [{ typ: "chat", von: "Alex", text: "Das ist viel zu gefährlich. Da mache ich auf keinen Fall mit." }],
      handyUebung: [{ typ: "video", titel: "Trend mit Verletzungsgefahr", kanal: "Challenge", knoepfe: [{ id: "nichtMitmachen", text: "Nicht mitmachen" }, { id: "trendMelden", text: "Gefahr melden" }] }],
      interaktivUebung: {
        aufgabe: drei("Machst du bei dem gefährlichen Trend mit?", "Wie entscheidest du dich?", "Wie verhältst du dich gegenüber dem riskanten Trend?"),
        uebung: {
          handlungen: {
            nichtMitmachen: {
              wertung: "passend",
              text: drei("Deine Gesundheit geht immer vor.", "Gefährliche Mutproben sollte man nie nachmachen.", "Eigensicherheit hat stets Vorrang vor Social-Media-Klicks.")
            },
            trendMelden: {
              wertung: "auchMoeglich",
              text: drei("Du meldest die Gefahr und schützt so andere Menschen vor Verletzungen.", "Das Melden gefährlicher Videos schützt andere Menschen vor Schaden.", "Das Melden gefährlicher Inhalte schützt die Community.")
            }
          },
          ende: "nichtMitmachen"
        }
      }
    },
    tt3: {
      id: "tt3", name: "TT3 Meine Zeit", thema: "tiktok", lektion: "Pause machen",
      anwenden: "tiktok/neu/rezept-pause",
      handySituation: [{ typ: "video", titel: "Schon eine Stunde vergangen!", kanal: "Uhrzeit: 22:30 Uhr", dauer: "60:00" }],
      handyVorbild: [{ typ: "schalter", app: "TikTok", titel: "Pausen-Erinnerung: 30 Min", an: true, hinweis: "Tilda stellt eine Erinnerung" }],
      handyUebung: [{ typ: "schalter", app: "TikTok", titel: "Pausen-Timer einschalten", an: false, id: "pauseTimer", knoepfe: [{ id: "pauseTimer", text: "Pausen-Timer einschalten" }] }],
      interaktivUebung: {
        aufgabe: drei("Stelle eine Pausen-Erinnerung ein.", "Schalte die Erinnerung für Pausen ein.", "Aktiviere das Bildschirmzeit-Limit zur Pausenerinnerung."),
        uebung: {
          handlungen: {
            pauseTimer: {
              wertung: "passend",
              text: drei("Die App erinnert dich jetzt rechtzeitig an eine Pause.", "Ein Pausentimer hilft dir dabei, selbst aufzuhören.", "Zeitlimits unterstützen eine ausgewogene, gesunde Mediennutzung.")
            }
          },
          ende: "pauseTimer"
        }
      }
    },

    /* -------------------------------------------------------------
       THEMA 8: HILFE BEI PROBLEMEN (3 Einheiten: H1, H2, H3)
       ------------------------------------------------------------- */
    h1: {
      id: "h1", name: "H1 Was ist los?", thema: "hilfe", lektion: "Was ist los?",
      handySituation: [{ typ: "chat", von: "Smartphone", text: "Fehler: Nachricht konnte nicht gesendet werden." }],
      handyVorbild: [{ typ: "chat", von: "Alex", text: "Alex prüft: Kein WLAN da. Das ist nur ein technischer Fehler." }],
      handyUebung: [{ typ: "chat", von: "System", text: "WLAN-Verbindung unterbrochen.", knoepfe: [{ id: "technikPruefen", text: "Technik prüfen" }, { id: "panik", text: "In Panik geraten" }] }],
      interaktivUebung: {
        aufgabe: drei("Was tust du bei der Fehlermeldung?", "Wie reagierst du auf die Meldung?", "Wie ordnest du das Problem ein?"),
        uebung: {
          handlungen: {
            technikPruefen: {
              wertung: "passend",
              text: drei("Ein technischer Fehler ist keine Bedrohung.", "Erst prüfen, ob es nur an der Verbindung liegt.", "Sachliche Ursachenprüfung trennt Störungen von echten Gefahren.")
            },
            panik: {
              wertung: "unpassend",
              text: drei("Keine Panik nötig. Fehler beim Senden haben oft eine einfache technische Ursache, zum Beispiel fehlendes WLAN.", "Nicht nötig. Bleibe ruhig – oft liegt es an der Verbindung und das WLAN lässt sich neu starten.", "Unpassend. Ruhige Überprüfung klärt technische Verbindungsstörungen häufig schnell.")
            }
          },
          ende: "technikPruefen"
        }
      }
    },
    h2: {
      id: "h2", name: "H2 Was kann ich selbst tun?", thema: "hilfe", lektion: "Was kann ich selbst tun?",
      regel: null,
      merksatz: drei("Vieles kann ich selbst lösen.", "Vieles kann ich selbst lösen.", "Vieles kann ich selbst lösen."),
      vorbildWer: "alex",
      vorbildText: drei(
        "Alex kennt das. Sein Handy war auch einmal still. Alex sieht in den Einstellungen nach. Dort steht: Lautlos ist an. Alex schaltet Lautlos aus. Jetzt hört er den Ton wieder.",
        "Alex kennt das, denn sein Handy war auch einmal still. Er sieht in den Einstellungen nach und findet den Grund: „Lautlos“ ist an. Er schaltet es aus und hört den Ton wieder.",
        "Alex kennt das Problem: Auch sein Handy blieb einmal still. Er sieht in den Einstellungen nach und stellt fest, dass „Lautlos“ eingeschaltet ist. Er schaltet es aus und hört den Ton wieder."
      ),
      handySituation: [{ typ: "chat", von: "Ines", text: "Hast du meine Nachrichten nicht gehört? Ich habe 3 Mal geschrieben." }],
      handyVorbild: [{ typ: "schalter", app: "Einstellungen · Ton", titel: "Lautlos", an: false, hinweis: "Alex schaltet Lautlos aus." }],
      handyUebung: [{
        typ: "chat",
        von: "Ines",
        text: "Hast du meine Nachrichten nicht gehört? Ich habe 3 Mal geschrieben.",
        wenig: ["einstellungen", "fragen"],
        knoepfe: [
          { id: "einstellungen", text: "Einstellungen ansehen" },
          { id: "neustart", text: "Handy neu starten" },
          { id: "fragen", text: "Eine Person fragen" }
        ]
      }],
      interaktivUebung: {
        aufgabe: drei("Dein Handy ist still. Was machst du?", "Dein Handy bleibt still. Was machst du?", "Dein Handy bleibt stumm. Wie gehst du vor?"),
        hinweis: drei("Überlege: Wo stellst du den Ton ein?", "Überlege, wo du den Ton einstellen kannst.", "Überlege, an welcher Stelle sich der Ton einstellen lässt."),
        uebung: {
          handlungen: {
            einstellungen: {
              wertung: "passend",
              text: drei(
                "Du siehst selbst nach. Dort steht: Lautlos ist an. Du schaltest Lautlos aus. Jetzt hörst du deine Nachrichten wieder.",
                "Du siehst selbst nach und findest den Grund: „Lautlos“ ist an. Du schaltest es aus und hörst deine Nachrichten wieder.",
                "Du siehst selbst nach und findest die Ursache: „Lautlos“ ist eingeschaltet. Nach dem Ausschalten hörst du deine Nachrichten wieder."
              ),
              erfolg: {
                tun: drei(
                  "Du hast selbst nachgesehen. Lautlos war an. Jetzt ist der Ton wieder da.",
                  "Du hast selbst nachgesehen und den Grund gefunden: „Lautlos“ war an. Jetzt ist der Ton wieder da.",
                  "Du hast selbst nachgesehen und die Ursache gefunden. Der Ton ist wieder da."
                ),
                reaktionGeschichte: "„Das war ja einfach. Das merke ich mir.“",
                reaktionSonst: "„So habe ich es auch gefunden.“"
              }
            },
            neustart: {
              wertung: "unpassend",
              kopf: "Das hilft hier noch nicht.",
              text: drei(
                "Das Handy startet neu. Es bleibt aber still. Neu starten hilft bei vielen Problemen. Hier hilft es nicht. Denn Lautlos ist noch an.",
                "Das Handy startet neu, bleibt aber still. Ein Neustart hilft bei vielen Problemen, hier jedoch nicht, weil „Lautlos“ noch an ist.",
                "Das Handy startet neu, bleibt jedoch stumm. Ein Neustart behebt viele Störungen, diese aber nicht, weil „Lautlos“ weiterhin eingeschaltet ist."
              )
            },
            fragen: {
              wertung: "auchMoeglich",
              text: drei(
                "Du fragst eine Person mit Handy-Wissen. Sie zeigt dir die Stelle: Lautlos ist an. Beim nächsten Mal findest du die Stelle selbst.",
                "Du fragst eine Person, die sich mit Handys auskennt, und sie zeigt dir die Stelle: „Lautlos“ ist an. Beim nächsten Mal findest du sie selbst.",
                "Eine Person, die sich auskennt, zeigt dir die Stelle: „Lautlos“ ist eingeschaltet. Beim nächsten Mal findest du sie selbst."
              ),
              erfolg: {
                tun: drei(
                  "Du hast eine Person gefragt. Jetzt kennst du die Stelle. Der Ton ist wieder da.",
                  "Du hast eine Person gefragt und kennst jetzt die Stelle. Der Ton ist wieder da.",
                  "Du hast dir die Stelle zeigen lassen. Der Ton ist wieder da."
                ),
                reaktionGeschichte: "„Danke. Jetzt weiß ich, wo das steht.“",
                reaktionSonst: "„Fragen geht immer. Jetzt kennst du die Stelle.“"
              }
            }
          },
          ende: "einstellungen"
        }
      }
    },
    h3: {
      id: "h3", name: "H3 Welche Hilfe passt?", thema: "hilfe", lektion: "Welche Hilfe passt?",
      handySituation: [{ typ: "kontakt", name: "Notruf: 112 (Feuerwehr / Rettungsdienst), Polizei: 110", nummer: "112 / 110", piktogramm: "anruf" }],
      handyVorbild: [{ typ: "chat", von: "Alex", text: "Alex speichert Notruf 112 und Polizei 110 für akute Notfälle ein." }],
      handyUebung: [{ typ: "kontakt", name: "Notruf: 112 (Feuerwehr / Rettungsdienst), Polizei: 110", nummer: "112 / 110", piktogramm: "anruf", knoepfe: [{ id: "speichern", text: "Nummer speichern" }, { id: "vertrauensperson", text: "Freund anrufen" }] }],
      interaktivUebung: {
        aufgabe: drei("Was machst du mit der Notrufnummer?", "Wie sorgst du für Unterstützung vor?", "Wie sicherst du dir passenden Beistand?"),
        uebung: {
          handlungen: {
            speichern: {
              wertung: "passend",
              text: drei("112 ist für Feuerwehr und Rettungsdienst. 110 ist für die Polizei im akuten Notfall. Für andere Sorgen hilft dir eine vertraute Person oder eine Beratungsstelle.", "Die 112 erreichst du für Feuerwehr und Rettungsdienst, die 110 für polizeiliche Notfälle. Bei anderen Sorgen oder Fragen wendest du dich an eine Vertrauensperson oder eine Beratungsstelle.", "Die 112 gilt für Feuerwehr und Rettungsdienst, die 110 für polizeiliche Notfälle. Für allgemeine Sorgen oder Probleme im Netz eignen sich Vertrauenspersonen oder Beratungsstellen.")
            },
            vertrauensperson: {
              wertung: "auchMoeglich",
              text: drei("Mit vertrauten Menschen sprechen hilft bei Sorgen im Alltag oder im Netz. Wichtig: Bei einer akuten Gefahr vor Ort rufst du aber sofort 112 oder 110 an.", "Freunde oder Familie helfen bei Sorgen im Alltag oder Problemen im Internet. Bei einem akuten Notfall vor Ort wählst du aber sofort 112 oder 110.", "Vertrauenspersonen oder Beratungsstellen unterstützen bei allgemeinen Sorgen im Alltag und im Netz – bei einem akuten Notfall vor Ort hat jedoch der sofortige Notruf 112 bzw. 110 Vorrang.")
            }
          },
          ende: "speichern"
        }
      }
    },

    /* -------------------------------------------------------------
       THEMA 9: KI (3 Einheiten: KI1, KI2, KI3)
       ------------------------------------------------------------- */
    ki1: {
      id: "ki1", name: "KI1 Programm oder Mensch?", thema: "ki", lektion: "Was ist KI?",
      handySituation: [{ typ: "chat", von: "Mia", text: "Hallo, ich bin Mia. Wie kann ich helfen?" }],
      handyVorbild: [{ typ: "chat", von: "Tilda", text: "Tilda weiß: Mia ist ein Computerprogramm, kein Mensch." }],
      handyUebung: [{ typ: "chat", von: "Mia", text: "Hallo, ich bin Mia. Wie kann ich helfen?", knoepfe: [{ id: "programmErkennen", text: "Als Chatbot erkennen" }, { id: "nachfragenObMensch", text: "Fragen: Bist du ein Mensch?" }, { id: "menschGlauben", text: "Für echten Menschen halten" }] }],
      interaktivUebung: {
        aufgabe: drei("Wer schreibt dir hier?", "Wer ist Mia?", "Um welche Art von Absender handelt es sich?"),
        uebung: {
          handlungen: {
            programmErkennen: {
              wertung: "passend",
              text: drei("Mia ist ein Chatbot, also ein Computerprogramm.", "Ein Chatbot antwortet automatisch und denkt nicht wie ein Mensch.", "Chatbots sind automatisierte Sprachprogramme.")
            },
            nachfragenObMensch: {
              wertung: "auchMoeglich",
              text: drei("Du kannst nachfragen, ob es ein Mensch oder ein Programm ist – verlass dich aber nicht allein auf die Antwort.", "Du darfst nachfragen, ob ein Mensch oder ein Programm schreibt. Manche Programme geben das zu – andere antworten aber ausweichend.", "Nachfragen ist möglich, bietet aber keine Garantie: Manche Chatbots legen ihre Rolle offen, täuschende Programme jedoch nicht zwingend.")
            },
            menschGlauben: {
              wertung: "unpassend",
              text: drei("Nein, Mia ist kein Mensch. Es ist ein Computerprogramm.", "Nicht passend. Lass dich von menschlichen Namen nicht täuschen.", "Unpassend. Mia ist ein automatisiertes Dialogsystem.")
            }
          },
          ende: "programmErkennen"
        }
      }
    },
    ki2: {
      id: "ki2", name: "KI2 Eine KI-Antwort prüfen", thema: "ki", lektion: "Was kann KI?",
      anwenden: "ki/neu/malkurs-zeit",
      handySituation: [{ typ: "chat", von: "KI-Chatbot", text: "Das Bürgeramt hat samstags bis 20 Uhr geöffnet." }],
      handyVorbild: [{ typ: "webseite", titel: "Bürgeramt Öffnungszeiten", felder: ["Samstags: Geschlossen!"] }],
      handyUebung: [{ typ: "chat", von: "KI-Antwort", text: "Wichtige Auskunft zu Terminen erhalten.", knoepfe: [{ id: "quellePruefen", text: "Webseite prüfen" }, { id: "blindGlauben", text: "Blind vertrauen" }] }],
      interaktivUebung: {
        aufgabe: drei("Wie gehst du mit der KI-Antwort um?", "Was tust du jetzt?", "Wie überprüfst du die Aussage der KI?"),
        uebung: {
          handlungen: {
            quellePruefen: {
              wertung: "passend",
              text: drei("Eine KI-Antwort kann sicher klingen und trotzdem falsch sein. Prüfe wichtige Angaben auf der echten Seite.", "KI-Programme können sicher klingen und trotzdem irren – prüfe Termine auf der offiziellen Seite.", "KI-Antworten können plausibel klingen und dennoch falsch sein; prüfe wichtige Fakten an verlässlicher Quelle.")
            },
            blindGlauben: {
              wertung: "unpassend",
              text: drei("Vorsicht. Eine KI denkt nicht nach, sie setzt nur Wörter zusammen.", "Nicht passend. Falsche KI-Auskünfte führen sonst zu verpassten Terminen.", "Unpassend. Blindes Vertrauen in Sprachmodelle birgt hohe Fehlerrisiken.")
            }
          },
          ende: "quellePruefen"
        }
      }
    },
    ki3: {
      id: "ki3", name: "KI3 Bekannte Stimme will Geld", thema: "ki", lektion: "Wann musst du aufpassen?",
      anwenden: "ki/neu/malkurs-stimme",
      handySituation: [{ typ: "anruf", richtung: "eingehend", von: "Die Stimme", knoepfe: ["auflegen", "lautsprecher", "tastatur", "stumm"] }],
      handyVorbild: [{ typ: "anruf", richtung: "eingehend", von: "Die Stimme", knoepfe: ["auflegen", "lautsprecher", "tastatur", "stumm"], getippt: "auflegen" }],
      handyUebung: [{ typ: "anruf", richtung: "eingehend", von: "Die Stimme", knoepfe: ["auflegen", "lautsprecher", "tastatur", "stumm"] }],
      interaktivUebung: {
        aufgabe: drei("Was tust du bei dem Schockanruf?", "Wie reagierst du auf die Geldforderung?", "Wie verhältst du dich am Telefon?"),
        uebung: {
          handlungen: {
            auflegen: {
              wertung: "passend",
              text: drei("Sofort auflegen und die bekannte Nummer selbst anrufen.", "KI kann Stimmen nachahmen. Prüfe immer durch einen eigenen Rückruf.", "Bei telefonischen Geldforderungen auflegen und die echte Nummer gegenprüfen.")
            },
            lautsprecher: { wertung: "neutral", text: drei("Du schaltest den Lautsprecher ein.", "Du aktivierst die Freisprechfunktion.", "Lautsprecher aktiviert.") },
            tastatur: { wertung: "neutral", text: drei("Du öffnest die Tastatur.", "Du öffnest das Ziffernfeld.", "Tastatur geöffnet.") },
            stumm: { wertung: "neutral", text: drei("Du schaltest dein Mikrofon stumm.", "Mikrofon stummgeschaltet.", "Stummschaltung aktiviert.") }
          },
          ende: "auflegen"
        }
      }
    },

    /* -------------------------------------------------------------
       THEMA 10: FAKE NEWS (3 Einheiten: FN1, FN2, FN3)
       ------------------------------------------------------------- */
    fn1: {
      id: "fn1", name: "FN1 Stimmt das (noch)?", thema: "fakes", lektion: "Was ist eine Fake-Nachricht?",
      handySituation: [{ typ: "sms", text: "Eilmeldung: Bargeld wird ab Montag komplett abgeschafft!" }],
      handyVorbild: [{ typ: "webseite", url: "https://www.tagesschau.de", sicher: true, titel: "Offizielle Nachrichten", inhalt: "Gegenbeispiel: Berichte über den Bundeshaushalt. Kein Bargeldverbot beschlossen. Das Gerücht entbehrt jeder Grundlage." }],
      handyUebung: [{ typ: "chat", von: "Ketten-Nachricht", text: "Schock-Nachricht im Chat erhalten.", knoepfe: [{ id: "nachrichtenPruefen", text: "In Nachrichten nachsehen" }, { id: "familieFragen", text: "In Ruhe nachfragen" }, { id: "weiterleiten", text: "Sofort teilen" }] }],
      interaktivUebung: {
        aufgabe: drei("Was machst du mit der Eilmeldung?", "Wie reagierst du auf die Nachricht?", "Wie gehst du mit der Schock-Nachricht um?"),
        uebung: {
          handlungen: {
            nachrichtenPruefen: {
              wertung: "passend",
              text: drei("Bei Schock-Meldungen erst verlässliche Nachrichten prüfen.", "Echte Gesetzesänderungen stehen in verlässlichen Nachrichtenquellen.", "Ein Vergleich mit mehreren verlässlichen Nachrichtenquellen hilft, Behauptungen sachlich einzuordnen.")
            },
            familieFragen: {
              wertung: "auchMoeglich",
              text: drei("Erst jemanden fragen verhindert, dass du Panik verbreitest.", "Vor dem Weiterleiten erst mit anderen besprechen.", "Sinnvolle Vorgehensweise. Der Austausch im Kreis der Familie beruhigt.")
            },
            weiterleiten: {
              wertung: "unpassend",
              text: drei("Vorsicht. Ungeprüftes Teilen verbreitet Angst und Lügen.", "Nicht passend. So machst du anderen Menschen unnötig Angst.", "Problematisch. Schnelles Weiterleiten beschleunigt Desinformationswellen.")
            }
          },
          ende: "nachrichtenPruefen"
        }
      }
    },
    fn2: {
      id: "fn2", name: "FN2 Erst prüfen", thema: "fakes", lektion: "Wie erkennst du Fakes?",
      anwenden: "fakes/neu/bus-meldung-pruefen",
      handySituation: [{ typ: "chat", von: "Unbekannt", text: "Achtung: Einbrecher im Viertel unterwegs!" }],
      handyVorbild: [{ typ: "webseite", url: "https://www.presseportal.de/blaulicht", sicher: true, titel: "Offizielles Polizei-Presseportal", inhalt: "Lagebericht: Keine Einbruchsserie gemeldet. Bitte keine ungeprüften Gerüchte teilen." }],
      handyUebung: [{ typ: "chat", von: "Nachbarschaft", text: "Gerücht über Einbrüche im Umlauf.", knoepfe: [{ id: "polizeiPruefen", text: "Bei Polizei nachsehen" }, { id: "panikMachen", text: "Warnung weiterschicken" }] }],
      interaktivUebung: {
        aufgabe: drei("Wie prüfst du die Einbrecher-Warnung?", "Was tust du jetzt?", "Wie überprüfst du das Gerücht in der Gruppe?"),
        uebung: {
          handlungen: {
            polizeiPruefen: {
              wertung: "passend",
              text: drei("Die offizielle Polizei-Meldung zeigt: Es war ein Gerücht.", "Du siehst bei der zuständigen Stelle nach und verhinderst so unnötige Panik.", "Offizielle Kanäle der Behörden geben zuverlässige Auskunft.")
            },
            panikMachen: {
              wertung: "unpassend",
              text: drei("Bitte nicht. Das schürt nur unbegründete Angst.", "Unpassend. Warnungen ohne Quelle stiften unnötige Verwirrung.", "Problematisch. Panikmache schadet dem nachbarschaftlichen Miteinander.")
            }
          },
          ende: "polizeiPruefen"
        }
      }
    },
    fn3: {
      id: "fn3", name: "FN3 Weiterleiten oder richtigstellen?", thema: "fakes", lektion: "Was tust du bei Fakes?",
      anwenden: "fakes/neu/bus-auskunft-teilen",
      handySituation: [{ typ: "chat", von: "Familien-Gruppe", text: "Jemand teilt eine veraltete Bus-Ausfallmeldung." }],
      handyVorbild: [{ typ: "chat", von: "Alex", text: "Hallo, die Meldung ist vom letzten Jahr. Die Busse fahren heute normal." }],
      handyUebung: [{ typ: "chat", von: "Familie", text: "Alte Meldung in der Gruppe geteilt.", knoepfe: [{ id: "richtigstellen", text: "Freundlich richtigstellen" }, { id: "nichtSenden", text: "Nicht weiterleiten" }] }],
      interaktivUebung: {
        aufgabe: drei("Was machst du in der Gruppe?", "Wie reagierst du auf die alte Meldung?", "Wie verhältst du dich in der Gruppe?"),
        uebung: {
          handlungen: {
            richtigstellen: {
              wertung: "passend",
              text: drei("Ein freundlicher Hinweis hilft allen in der Gruppe.", "Den richtigen Link teilen klärt die Sache sachlich auf.", "Konstruktive Richtigstellung beendet die Falschmeldung.")
            },
            nichtSenden: {
              wertung: "auchMoeglich",
              text: drei("Du leitest die alte Meldung nicht weiter und stoppst so die Verbreitung.", "Du verbreitest die falsche Nachricht nicht weiter.", "Durch Nicht-Weiterleiten unterbrechen Sie die Verbreitung der Falschmeldung.")
            }
          },
          ende: "richtigstellen"
        }
      }
    },

    /* -------------------------------------------------------------
       THEMA 11: BETRUG (3 Einheiten: BE1, BE2, BE3)
       ------------------------------------------------------------- */
    be1: { id: "be1", name: "BE1 Jemand will einen Code", thema: "betrug", lektion: "Was ist Betrug im Internet?", eigen: true },
    be2: {
      id: "be2", name: "BE2 Druck und Gewinn erkennen", thema: "betrug", lektion: "Wie erkennst du Betrug?",
      postfach: "falscher Gewinn",
      handySituation: [{ typ: "email", text: "Glückwunsch! Sie haben ein Smartphone gewonnen. Zahlen Sie nur 2 Euro Versandgebühr." }],
      handyVorbild: [{ typ: "sms", text: "Glückwunsch. Sie haben ein Handy gewonnen. Zahlen Sie nur 2 Euro für den Versand. Nur heute." }],
      handyUebung: [{ typ: "sms", text: "Nur heute: Zahlen Sie 2 Euro für den Versand Ihres Gewinns!", knoepfe: [{ id: "nichtZahlen", text: "Nicht zahlen & löschen" }, { id: "vertrauenspersonFragen", text: "Vertrauensperson fragen" }, { id: "zahlen", text: "2 Euro überweisen" }] }],
      interaktivUebung: {
        aufgabe: drei("Wie reagierst du auf das Gewinnversprechen?", "Was machst du mit der Nachricht?", "Wie entscheidest du bezüglich des angeblichen Gewinns?"),
        uebung: {
          handlungen: {
            nichtZahlen: {
              wertung: "passend",
              text: drei("Gewinne mit Zahlungs-Aufforderung sind oft Betrug. Dahinter kann eine Abofalle stecken.", "Bei unerwarteten Gewinnversprechen mit Gebühren steckt oft Betrug oder eine Abofalle dahinter – zahle kein Geld vorab.", "Unerwartete Gewinnbenachrichtigungen mit Vorab-Gebühren weisen häufig auf Betrug oder Kostenfallen hin.")
            },
            vertrauenspersonFragen: {
              wertung: "auchMoeglich",
              text: drei("Jemand anderen fragen hilft, Betrug zu durchschauen.", "Wenn du unsicher bist, frage eine Vertrauensperson.", "Sinnvolle Vorgehensweise. Eine zweite Meinung schützt vor Überrumpelung.")
            },
            zahlen: {
              wertung: "unpassend",
              text: drei("Vorsicht! Wenn du zahlst, tappen deine Kontodaten in eine teure Abofalle.", "Gefährlich. Seriöse Gewinne verlangen keine Vorab-Zahlungen.", "Unpassend. Die 2-Euro-Masche ist eine bekannte Betrugsfalle.")
            }
          },
          ende: "nichtZahlen"
        }
      }
    },
    be3: {
      id: "be3", name: "BE3 Selbst nachsehen", thema: "betrug", lektion: "Was tust du bei Betrug?",
      anwenden: "betrug/neu/buecherei-forderung",
      handySituation: [{ typ: "email", text: "Dringend: Ihr Bücherei-Konto ist gesperrt. Klicken Sie hier." }],
      handyVorbild: [{ typ: "webseite", url: "https://stadtbuecherei.de/mein-konto", sicher: true, titel: "Offizielle Bücherei-App", inhalt: "Kontoausleihe: Keine Mahnung vorliegend. Alle Medien fristgerecht zurückgegeben." }],
      handyUebung: [{ typ: "email", text: "Konto gesperrt. Sofort hier klicken!", knoepfe: [{ id: "selbstOeffnen", text: "App selbst öffnen" }, { id: "linkKlicken", text: "Link in Mail tippen" }] }],
      interaktivUebung: {
        aufgabe: drei("Wie überprüfst du die angebliche Mahnung?", "Was tust du jetzt?", "Wie verifizierst du die Forderung?"),
        uebung: {
          handlungen: {
            selbstOeffnen: {
              wertung: "passend",
              text: drei("Die App selbst öffnen schützt vor gefälschten Phishing-Seiten.", "Du öffnest die echte App selbst statt des Links und prüfst dort dein Konto.", "Der direkte Aufruf über offizielle Wege schützt vor Datendiebstahl.")
            },
            linkKlicken: {
              wertung: "unpassend",
              text: drei("Gefährlich! Links in solchen Mails führen auf Betrugsseiten.", "Nicht passend. Niemals Links in verdächtigen Mahnungen antippen.", "Unpassend. Phishing-Links zielen darauf ab, Passwörter abzufangen.")
            }
          },
          ende: "selbstOeffnen"
        }
      }
    },

    /* -------------------------------------------------------------
       THEMA 12: EINKAUFEN (3 Einheiten: EK1, EK2, EK3)
       ------------------------------------------------------------- */
    ek1: {
      id: "ek1", name: "EK1 Einen Shop prüfen", thema: "einkaufen", lektion: "Gute Shops erkennen",
      anwenden: "einkaufen/neu/sporttasche-shop",
      handySituation: [{ typ: "shop", name: "Super-Sneaker-Billig.xyz", artikel: "Marken-Turnschuhe", preis: "15,00 € (statt 60 €)" }],
      handyVorbild: [{ typ: "webseite", url: "https://super-sneaker-billig.xyz/impressum", sicher: true, titel: "Impressum-Prüfung", inhalt: "Trotz Schloss (HTTPS): Keine Firmenadresse und kein Verantwortlicher im Impressum angegeben!" }],
      handyUebung: [{ typ: "shop", name: "Schnäppchen-Shop", artikel: "Verdächtig billige Schuhe", knoepfe: [{ id: "impressumSuchen", text: "Impressum suchen" }, { id: "nichtKaufen", text: "Nicht kaufen" }] }],
      interaktivUebung: {
        aufgabe: drei("Wie prüfst du den Online-Shop?", "Was tust du vor dem Kauf?", "Welche Prüfung nimmst du im Shop vor?"),
        uebung: {
          handlungen: {
            impressumSuchen: {
              wertung: "passend",
              text: drei("Ohne gültiges Impressum solltest du dort keinesfalls kaufen.", "Ein seriöser deutscher Shop muss Name und Adresse nennen.", "Fehlende Anbieterkennzeichnung ist ein klares Indiz für Fake-Shops.")
            },
            nichtKaufen: {
              wertung: "auchMoeglich",
              text: drei("Du verzichtest bei dem extrem billigen Preis auf den Kauf und prüfst erst den Shop.", "Bei verdächtigen Preisen auf den Kauf zu verzichten schützt dein Geld.", "Stark unterpreisige Angebote können ein Warnzeichen für einen Fake-Shop sein – der Verzicht vermeidet das Risiko.")
            }
          },
          ende: "impressumSuchen"
        }
      }
    },
    ek2: {
      id: "ek2", name: "EK2 Wie bezahle ich?", thema: "einkaufen", lektion: "Sicher bezahlen",
      anwenden: "einkaufen/neu/sporttasche-zahlung",
      handySituation: [{ typ: "shop", name: "Kasse im Online-Shop", artikel: "Sporttasche", preis: "35,00 €", kasse: ["Rechnung", "Vorkasse"] }],
      handyVorbild: [{ typ: "shop", name: "Tilda wählt Zahlung", artikel: "Sporttasche", siegel: "Kauf auf Rechnung gewählt" }],
      handyUebung: [{ typ: "shop", name: "Bezahlart auswählen", artikel: "Sporttasche 35,00 €", kasse: ["Rechnung", "Vorkasse"], knoepfe: [{ id: "rechnungWaehlen", text: "Auf Rechnung zahlen" }, { id: "vorkasseWaehlen", text: "Vorkasse (Überweisung)" }] }],
      interaktivUebung: {
        aufgabe: drei("Welche Bezahlart wählst du?", "Wie bezahlst du am sichersten?", "Welche Zahlungsmethode wählst du beim Einkauf?"),
        uebung: {
          handlungen: {
            rechnungWaehlen: {
              wertung: "passend",
              text: drei("Auf Rechnung zahlst du erst, wenn die Ware da ist. Prüfe trotzdem vorher den Shop.", "Beim Kauf auf Rechnung zahlst du erst nach Erhalt der Ware – das senkt das Risiko bei Online-Käufen.", "Die Zahlung nach Erhalt der Ware verringert das Verlustrisiko, ersetzt aber nicht die Prüfung des Shops.")
            },
            vorkasseWaehlen: {
              wertung: "unpassend",
              text: drei("Vorsicht. Bei Vorkasse zahlst du vorab. Kommt keine Ware, ist das Geld oft schwer zurückzuholen.", "Nicht passend. Bei Vorkasse in unbekannten Shops trägst du das Risiko, falls nicht geliefert wird.", "Unpassend. Vorkasse bietet bei unbekannten Anbietern kaum Schutz vor Lieferausfall.")
            }
          },
          ende: "rechnungWaehlen"
        }
      }
    },
    ek3: {
      id: "ek3", name: "EK3 Etwas ist schiefgelaufen", thema: "einkaufen", lektion: "Sicher bezahlen",
      handySituation: [{ typ: "webseite", titel: "Bestell-Status", felder: ["Paket überfällig", "Keine Sendungsnummer erhalten"] }],
      handyVorbild: [{ typ: "chat", von: "Alex an Shop", text: "Sehr geehrte Damen und Herren, meine Ware ist nicht angekommen. Bitte um Klärung." }],
      handyUebung: [{ typ: "webseite", titel: "Was tun bei Lieferausfall?", felder: ["Zuerst dem Shop schreiben"], knoepfe: [{ id: "shopSchreiben", text: "Dem Shop schreiben" }, { id: "aufgeben", text: "Geld verloren geben" }] }],
      interaktivUebung: {
        aufgabe: drei("Was tust du, wenn die Ware nicht ankommt?", "Wie reagierst du auf das Problem?", "Welche Maßnahme ergreifst du bei ausbleibender Lieferung?"),
        uebung: {
          handlungen: {
            shopSchreiben: {
              wertung: "passend",
              text: drei("Erst dem Shop schreiben und eine Frist setzen.", "Eine schriftliche Nachfrage ist der erste Schritt zur Klärung.", "Schriftliche Kontaktaufnahme wahrt Fristen und schafft Nachweise.")
            },
            aufgeben: {
              wertung: "unpassend",
              text: drei("Nicht aufgeben! Du hast ein Recht auf deine Ware oder dein Geld.", "Nicht passend. Verlange dein Geld zurück oder wende dich an eine Beratungsstelle.", "Unpassend. Verbraucherrechte sollten aktiv wahrgenommen werden.")
            }
          },
          ende: "shopSchreiben"
        }
      }
    }
  };

  /* ================= 2. Übersetzer ================= */
  const STUFEN = ["leicht", "einfach", "standard"];
  const je = (f, feld, n) => drei(...STUFEN.map((s) => n == null ? f[s] && f[s][feld] : f[s] && f[s][feld] && f[s][feld][n]));
  const jeAntwort = (f, feld, n) => drei(...STUFEN.map((s) => { const v = f[s] && f[s][feld]; return Array.isArray(v) ? v[n] : v; }));

  /* Eigenständiger Musterlernweg WA2 („Links in Nachrichten“) im Format lernhandy-1 */
  function wa2Lernweg(Q) {
    const ns = (Q && Q.ANWENDEN_ERGAENZUNGEN && Q.ANWENDEN_ERGAENZUNGEN.whatsapp) || {};
    const nf = ((ns.neueSituation || {}).fragen || []).find((f) => f.id === "whatsapp/neu/ausflug-rueckzahlung") || null;
    const nv = (ns.aufgabenVersionen || {})["whatsapp/neu/ausflug-rueckzahlung"] || {};
    const ausflugNachricht = ((ns.neueSituation || {}).inhalt || []).find((el) => el.typ === "nachricht") || {
      von: "Fremde Nummer",
      text: "Der Ausflug fällt aus. Du bekommst dein Geld zurück. Bestätige hier deine Daten: [Link]"
    };
    const einstiegText = (ns.neueSituation && ns.neueSituation.einstieg) || drei(
      "Du hast einen Ausflug beim Freizeit-Treff gebucht. Du wartest auf neue Nachrichten.",
      "Du hast einen Ausflug beim Freizeit-Treff gebucht und wartest auf Informationen.",
      "Du hast einen Ausflug beim Freizeit-Treff gebucht und erwartest weitere Informationen."
    );
    const nsf = nf ? { leicht: nf, einfach: nv.einfach || nf, standard: nv.standard || nf } : null;

    const schritte = [
      {
        id: "s1-erleben",
        art: "entscheidung",
        handy: [
          {
            typ: "sms",
            text: drei(
              "Ihr Paket wartet. Zahlen Sie 2 Euro hier: paket-info.xyz",
              "Ihr Paket liegt bereit. Bitte hier 2 Euro Gebühr zahlen: paket-info.xyz",
              "Ihre Sendung konnte nicht zugestellt werden. Jetzt 2 Euro Gebühr zahlen: paket-info.xyz"
            )
          }
        ],
        lernbereich: {
          text: drei(
            "Du bekommst diese SMS. Du hast aber kein Paket bestellt.",
            "Du bekommst diese SMS auf dein Handy, obwohl du kein Paket bestellt hast.",
            "Auf deinem Handy geht unerwartet diese Paket-SMS ein, obwohl du nichts bestellt hast."
          )
        },
        aufgabe: {
          meinung: true,
          frage: drei(
            "Was machst du als Erstes?",
            "Wie gehst du zuerst vor?",
            "Wie reagierst du als Erstes?"
          ),
          antworten: [
            {
              text: drei(
                "Ich tippe auf den Link.",
                "Ich tippe direkt auf den Link.",
                "Ich tippe sofort auf den Link."
              ),
              wertung: "meinung",
              rueckmeldung: drei(
                "Viele Menschen tippen schnell auf so einen Link. Genau dafür ist dieser Trick gemacht. Gleich siehst du: Wohin führt der Link?",
                "Im Alltag tippt man aus Neugier oder Eile schnell auf so einen Link. Genau das nutzen Betrüger aus. Im nächsten Schritt siehst du, wohin der Link führt.",
                "Unter Zeitdruck oder aus Neugier tippt man im Alltag oft vorschnell auf einen Link. Genau darauf zielt diese Masche ab. Im nächsten Schritt siehst du, wohin der Link führt."
              )
            },
            {
              text: drei(
                "Ich lasse den Link zu.",
                "Ich lasse den Link noch zu.",
                "Ich öffne den Link erst nicht."
              ),
              wertung: "meinung",
              rueckmeldung: drei(
                "Du wartest erst kurz ab. So schützt du dein Handy und dein Geld. Gleich zeige ich dir einen sicheren Weg.",
                "Erst einmal innezuhalten schützt dich vor voreiligen Klicks. Gleich siehst du, was hinter einem Link steckt und wie du die Nachricht ohne Risiko prüfst.",
                "Erst einmal abzuwarten verhindert voreilige Klicks und schützt deine Daten. Gleich erfährst du, was hinter einem Link steckt und wie du sicher prüfst."
              )
            },
            {
              text: drei(
                "Ich bin noch unsicher.",
                "Ich bin mir dabei noch unsicher.",
                "Ich bin hierbei noch unsicher."
              ),
              wertung: "meinung",
              unsicher: true,
              rueckmeldung: drei(
                "Bei neuen Nachrichten ist das ganz normal. Du musst das nicht sofort wissen. Wir schauen uns jetzt Schritt für Schritt sichere Wege an.",
                "Wenn eine Nachricht überraschend kommt, ist Unsicherheit völlig normal. In diesem Lernweg schauen wir uns Schritt für Schritt sichere Prüfwege an.",
                "Bei unerwarteten Nachrichten unsicher zu sein ist völlig nachvollziehbar. In diesem Lernweg gehen wir sichere Prüfwege Schritt für Schritt durch."
              )
            }
          ]
        }
      },
      {
        id: "s2-verstehen",
        art: "situation",
        handy: [
          {
            typ: "webseite",
            url: "paket-info.xyz",
            sicher: false,
            titel: drei("Falsche Paket-Seite", "Nachgemachte Paket-Seite", "Gefälschte Paket-Webseite"),
            inhalt: drei(
              "Bitte gib deine Bank-Daten ein.",
              "Bitte tragen Sie Adresse und Bankdaten ein.",
              "Bitte geben Sie Adresse und Kontodaten ein."
            ),
            hinweis: drei(
              "Die Web-Adresse passt zu keinem echten Paket-Dienst.",
              "Auffällig: Die Adresse oben passt zu keinem echten Paket-Dienst.",
              "Auffällig: Die Internetadresse passt zu keinem seriösen Paketdienst."
            )
          }
        ],
        lernbereich: {
          text: drei(
            "Ein Link ist eine Web-Adresse. Du tippst darauf. Dann öffnet sich eine Internet-Seite.",
            "Ein Link ist eine verknüpfte Internet-Adresse. Tippst du darauf, öffnet sich sofort eine Webseite.",
            "Ein Link ist eine verknüpfte Internetadresse, die beim Antippen automatisch eine Webseite im Browser öffnet."
          ),
          texte: [
            drei(
              "Manche Links führen auf eine falsche Seite. Dort fragen Betrüger nach Geld oder Bank-Daten.",
              "Betrüger nutzen täuschend ähnliche Adressen. Auf der falschen Seite sollst du Geld überweisen oder vertrauliche Bankdaten eingeben.",
              "Manipulierte Adressen locken häufig auf nachgemachte Seiten. Dort sollst du Zahlungen auslösen oder vertrauliche Daten eingeben."
            ),
            drei(
              "Oft steht ein bekannter Name über dem Link. Zum Beispiel: Paket-Dienst oder ein Freund. Wichtig ist: Hast du diese Nachricht erwartet?",
              "Auch ein bekannter Absender wie ein Paket-Dienst oder ein gespeicherter Kontakt schützt nicht sicher. Entscheidend ist immer, ob du die Nachricht wirklich erwartest.",
              "Selbst vertraute Namen wie Paketdienste, Behörden oder übernommene Konten von Freunden bieten keine Gewähr. Entscheidend ist immer, ob du den Link wirklich erwartest."
            )
          ]
        }
      },
      {
        id: "s3-vorbild",
        art: "vorbild",
        handy: [
          {
            typ: "webseite",
            url: "mein-paketdienst.de",
            sicher: true,
            titel: drei("Echte Paket-App", "Offizielle Paket-App", "Offizielle Paket-App"),
            inhalt: drei(
              "Du hast gerade kein Paket auf dem Weg.",
              "Aktuell sind keine Sendungen angekündigt.",
              "Derzeit liegen keine offenen Sendungen für dich vor."
            ),
            hinweis: drei(
              "Direkt selbst geöffnet. Der Link aus der SMS bleibt zu.",
              "Direkt selbst über die App geprüft, ohne auf den SMS-Link zu tippen.",
              "Direkt über die offizielle App geprüft, ohne den SMS-Link zu öffnen."
            )
          }
        ],
        lernbereich: {
          etikett: "alex",
          text: drei(
            "Alex liest die Paket-SMS in Ruhe. Er tippt den Link nicht an. Alex öffnet lieber selbst die echte Paket-App auf dem Handy. Dort steht: kein Paket. So merkt Alex sofort: Die SMS war ein Trick.",
            "Alex liest die Nachricht in Ruhe und lässt den Link geschlossen. Er fragt sich zuerst, ob er überhaupt ein Paket bestellt hat, und öffnet dann selbst die offizielle Paket-App auf seinem Handy. Dort steht keine Sendung – damit entlarvt er den Trick ohne jedes Risiko.",
            "Alex liest die Nachricht mit Abstand und öffnet den Link nicht. Er prüft zunächst selbst, ob eine Bestellung vorliegt, und ruft die offizielle Paket-App direkt über sein Smartphone auf. Da dort keine Sendung hinterlegt ist, erkennt er den Betrugsversuch sofort und gefahrlos."
          )
        }
      },
      {
        id: "s4-merksatz",
        art: "merksatz",
        handy: [
          {
            typ: "notiz",
            satz: drei(
              "Fremde Links nicht antippen.",
              "Auf fremde Links tippst du nicht.",
              "Fremde Links nicht antippen."
            ),
            texte: [
              drei(
                "Ich öffne lieber selbst die echte App. Oder ich rufe eine bekannte Nummer an.",
                "Ich öffne stattdessen die offizielle App selbst oder nutze eine mir bekannte Rufnummer.",
                "Stattdessen öffne ich die offizielle App direkt oder nutze eine bereits bekannte Rufnummer."
              ),
              drei(
                "Einen abgemachten Link von Freunden darf ich in Ruhe prüfen.",
                "Erwartete Links nach vorheriger Absprache darf ich hingegen in Ruhe prüfen.",
                "Links, die ich zuvor persönlich abgesprochen habe, kann ich hingegen sachlich prüfen."
              )
            ]
          }
        ],
        lernbereich: {
          text: drei(
            "Fremde Links nicht antippen.",
            "Auf fremde Links tippst du nicht.",
            "Fremde Links nicht antippen."
          ),
          texte: [
            drei(
              "Ein Link kann zu einer falschen Seite führen.",
              "Ein fremder Link kann auf eine gefälschte Seite führen.",
              "Ein unerwarteter Link kann auf eine nachgemachte Seite führen, die Daten abfragt."
            ),
            drei(
              "Willst du wissen: Stimmt die Nachricht? Öffne die echte App selbst. Oder rufe eine bekannte Nummer an.",
              "Wenn du die Information nachprüfen willst, öffnest du die offizielle App selbst oder rufst eine dir bekannte Nummer an.",
              "Zur Überprüfung öffnest du stets die offizielle App selbst oder kontaktierst die Stelle über eine bereits bekannte Nummer."
            )
          ],
          regel: true
        }
      },
      {
        id: "s5-1",
        art: "entscheidung",
        handy: [
          {
            typ: "chat",
            von: drei("Fremde Nummer", "Unbekannte Nummer", "Unbekannte Nummer"),
            piktogramm: "stranger",
            text: drei(
              "Guter Job für dich: 200 Euro am Tag. Alle Infos hier: job-klick.xyz",
              "Guter Job für dich: 200 Euro am Tag! Alle Infos findest du hier: job-klick.xyz",
              "Attraktiver Nebenjob: 200 Euro täglich! Jetzt direkt informieren: job-klick.xyz"
            )
          }
        ],
        lernbereich: {
          text: drei(
            "Eine fremde Nummer schreibt dir. Sie verspricht viel Geld für wenig Arbeit.",
            "Eine unbekannte Nummer schickt dir ungefragt ein hohes Geldversprechen mit einem Link.",
            "Du erhältst von einer unbekannten Nummer eine unaufgeforderte Jobnachricht mit hohem Verdienstversprechen."
          )
        },
        aufgabe: {
          frage: drei(
            "Was machst du mit dieser Nachricht?",
            "Wie gehst du mit diesem Angebot um?",
            "Wie reagierst du auf dieses Job-Angebot?"
          ),
          antworten: [
            {
              text: drei(
                "Ich tippe auf den Link.",
                "Ich tippe kurz auf den Link.",
                "Ich öffne den Link kurz."
              ),
              wertung: "unpassend",
              rueckmeldung: drei(
                "Ein hohes Geld-Versprechen macht neugierig. Der Link kann auf eine falsche Seite führen. Dort fragen Betrüger nach Bank-Daten.",
                "Ungewöhnlich hohe Verdienstversprechen sollen Neugier wecken. Hinter dem Link steckt oft eine gefälschte Seite, auf der nach deinen Daten gefragt wird.",
                "Überhöhte Verdienstversprechen wecken gezielt Neugier. Der Link führt häufig auf eine nachgemachte Seite, die persönliche Daten oder Bankdaten abfragt."
              )
            },
            {
              text: drei(
                "Ich lasse den Link zu.",
                "Ich tippe den Link nicht an.",
                "Ich lasse den Link zu."
              ),
              wertung: "passend",
              rueckmeldung: drei(
                "Du erwartest kein Job-Angebot und kennst die Nummer nicht. So bleiben deine Daten vor einer falschen Seite geschützt.",
                "Du kennst weder die Nummer noch hast du dich beworben. Indem du den Link geschlossen lässt, schützt du deine Daten zuverlässig.",
                "Da du die Nummer nicht kennst und kein Angebot erwartest, schützt das Ignorieren des Links deine Daten zuverlässig."
              )
            },
            {
              text: drei(
                "Ich lösche den Chat.",
                "Ich lösche die Nachricht.",
                "Ich lösche diesen Chat."
              ),
              wertung: "auchMoeglich",
              rueckmeldung: drei(
                "So bleibt der Link sicher geschlossen. Die fremde Nummer kann dich danach nicht weiter stören.",
                "Indem du den Chat löschst, bleibt der Link geschlossen und du vermeidest weitere Locknachrichten dieser Nummer.",
                "Durch das Löschen bleibt der Link ungeöffnet und du entfernst eine unerwünschte Locknachricht direkt."
              )
            }
          ]
        },
        nachFehler: { vorbild: "s3-vorbild" }
      },
      {
        id: "s5-2",
        art: "entscheidung",
        handy: [
          {
            typ: "chat",
            von: "Sabine",
            piktogramm: "friend",
            text: drei(
              "Hier ist der Link zum Café für morgen: stadt-cafe.de",
              "Wie eben am Telefon besprochen: Hier ist der Link zum Café: stadt-cafe.de",
              "Wie gerade telefonisch besprochen, sende ich dir hier die Seite des Cafés: stadt-cafe.de"
            ),
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
              "Du hast gerade mit Sabine telefoniert. Ihr trefft euch morgen im Café.",
              "Sabine wollte dir die Web-Adresse vom Café schicken."
            ],
            [
              "Du hast eben mit deiner Bekannten Sabine telefoniert und verabredet, dass sie dir die Seite des Cafés schickt.",
              "Direkt danach kommt diese Nachricht mit einer passenden Web-Adresse."
            ],
            [
              "Du hast soeben mit deiner Bekannten Sabine telefoniert und abgesprochen, dass sie dir den Link zum Café zusendet.",
              "Unmittelbar darauf erhältst du diese Nachricht mit passender Domain."
            ]
          )
        },
        aufgabe: {
          frage: drei(
            "Was passt zu Sabines Link?",
            "Wie gehst du mit diesem Link um?",
            "Wie bewertest du diesen Link?"
          ),
          antworten: [
            {
              text: drei(
                "Ich öffne den Link jetzt.",
                "Ich öffne diesen Link.",
                "Ich öffne den abgemachten Link."
              ),
              wertung: "passend",
              rueckmeldung: drei(
                "Du erwartest den Link von Sabine. Ihr habt gerade telefoniert. Die Adresse stadt-cafe.de passt genau zum Café.",
                "Du kennst Sabine und hast diesen Link gerade mit ihr abgesprochen. Auch die Adresse stadt-cafe.de passt genau zum Café.",
                "Sabine ist dir bekannt und der Link war vorab vereinbart. Zudem verweist die Webadresse eindeutig auf das Café."
              )
            },
            {
              text: drei(
                "Ich blockiere Sabine sofort.",
                "Ich blockiere sie sofort.",
                "Ich blockiere Sabines Kontakt."
              ),
              wertung: "unpassend",
              vorsichtig: true,
              rueckmeldung: drei(
                "Sabine ist deine Bekannte. Ihr habt den Link gerade am Telefon besprochen. Solche abgemachten Links darfst du öffnen.",
                "Sabine steht in deinen Kontakten und du hast genau diesen Link erwartet. Bei verabredeten Links brauchst du den Kontakt nicht zu sperren.",
                "Sabine ist ein bekannter Kontakt und der Link wurde vorab abgesprochen. Bei erwarteten Nachrichten ist ein Blockieren nicht nötig."
              )
            },
            {
              text: drei(
                "Ich suche das Café selbst.",
                "Ich suche lieber selbst.",
                "Ich suche den Ort selbst heraus."
              ),
              wertung: "auchMoeglich",
              rueckmeldung: drei(
                "Du tippst nicht auf den Link und suchst das Café direkt selbst über die Suche.",
                "Wenn du lieber ohne Link nachsiehst, findest du den Namen des Cafés auch direkt über die Karten-App oder Suche.",
                "Wenn du grundsätzlich ohne Link prüfen möchtest, kannst du das Café jederzeit direkt über eine Suchmaschine oder Karten-App aufrufen."
              )
            }
          ]
        }
      },
      {
        id: "s5-3",
        art: "entscheidung",
        handy: [
          {
            typ: "chat",
            von: "Timo",
            piktogramm: "friend",
            text: drei(
              "Bist du auf dem Foto? Hier schauen: foto-neu.xyz",
              "Schau mal, bist du auf diesem Foto? foto-neu.xyz",
              "Bist du das auf diesem Foto? Öffne schnell: foto-neu.xyz"
            ),
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
              "Timo steht in deinen Kontakten. Ihr habt heute nicht geschrieben.",
              "Plötzlich kommt dieser komische Link ohne Gespräch von euch."
            ],
            [
              "Timo ist zwar in deinem Adressbuch gespeichert, aber ihr hattet vorher keinen Kontakt dazu.",
              "Die Nachricht wirkt ungewöhnlich, und die Web-Adresse foto-neu.xyz kennst du nicht."
            ],
            [
              "Timo ist als Kontakt gespeichert, doch die Nachricht erscheint ohne jeden Zusammenhang und enthält eine merkwürdige Domain."
            ]
          )
        },
        aufgabe: {
          frage: drei(
            "Was machst du bei dieser Nachricht?",
            "Wie gehst du mit Timos Nachricht um?",
            "Wie reagierst du auf diesen Link von Timo?"
          ),
          antworten: [
            {
              text: drei(
                "Ich schaue mir das Foto an.",
                "Ich schaue mir das Foto an.",
                "Ich schaue mir das Foto an."
              ),
              wertung: "unpassend",
              rueckmeldung: drei(
                "Manchmal stehlen Fremde das Konto von einem Freund. Dann schickt dieses Konto komische Links an alle. Besser: erst nachfragen und den Link zu lassen.",
                "Selbst gespeicherte Kontakte können übernommen (gehackt) sein und automatisch Links verschicken. Öffne den unerwarteten Link deshalb nicht ohne Nachfrage.",
                "Auch übernommene Konten bekannter Personen versenden manipulierte Links. Öffne solche unerwarteten Nachrichten nicht, bevor du über einen anderen Weg nachgefragt hast."
              )
            },
            {
              text: drei(
                "Ich lasse den Link erst zu.",
                "Ich tippe den Link nicht an.",
                "Ich öffne diesen Link nicht."
              ),
              wertung: "auchMoeglich",
              rueckmeldung: drei(
                "So kommst du auf keine falsche Seite. Du kannst Timo später anrufen und warnen.",
                "So schützt du dich vor einer falschen Seite. Später kannst du Timo telefonisch Bescheid geben.",
                "Damit schützt du deine Daten zuverlässig. Falls möglich, kannst du Timo telefonisch oder persönlich warnen."
              )
            },
            {
              text: drei(
                "Ich rufe Timo direkt an.",
                "Ich rufe Timo selbst kurz an.",
                "Ich rufe Timo selbst kurz an."
              ),
              wertung: "passend",
              rueckmeldung: drei(
                "Du rufst Timo über seine bekannte Nummer an und fragst nach. Bis dahin bleibt der Link zu. Aber denk daran: Auch ein Anruf ist kein sicherer Beweis – gib am Telefon keine Codes weiter.",
                "Mit einem Rückruf über Timos bekannte Nummer kannst du nachfragen, ob die Nachricht von ihm stammt – der Link bleibt bis dahin geschlossen. Bedenke aber: Auch Telefonnummern können gefälscht sein; ein Anruf ersetzt kein gesundes Misstrauen.",
                "Ein Rückruf über Timos bereits bekannte Nummer hilft zu klären, ob die Nachricht tatsächlich von ihm stammt – der Link bleibt bis dahin geschlossen. Da jedoch auch Rufnummern manipuliert werden können, ist ein Anruf kein garantierter Identitätsnachweis."
              )
            }
          ]
        },
        nachFehler: { vorbild: "s3-vorbild" }
      },
      {
        id: "s6-uebung",
        art: "uebung",
        handy: [
          {
            typ: "chat",
            von: drei("Paket-Meldung", "Paket-Info", "Paket-Benachrichtigung"),
            piktogramm: "paket",
            text: drei(
              "Ihr Paket liegt bereit. Adresse hier senden: paket-24.xyz",
              "Ihre Sendung liegt bereit. Bitte hier Adresse bestätigen: paket-24.xyz",
              "Ihre Sendung wartet auf Zustellung. Bitte Adresse hier bestätigen: paket-24.xyz"
            ),
            knoepfe: [
              { id: "linkPruefen", text: "Link prüfen" },
              { id: "linkTippen", text: "Link antippen" },
              { id: "linkNichtTippen", text: "Nicht antippen" },
              { id: "appOeffnen", text: "App selbst öffnen" }
            ]
          }
        ],
        lernbereich: {
          etikett: "uebung",
          text: drei(
            "Diese Paket-Nachricht kommt unerwartet. Was machst du?",
            "Diese Paket-Nachricht erreicht dich unerwartet im Chat. Wie reagierst du?",
            "Du bekommst unerwartet eine Paket-Nachricht. Wie reagierst du?"
          ),
          hinweis: drei(
            "Hast du dieses Paket erwartet?",
            "Erwartest du diese Sendung über diesen Link?",
            "Erwartest du diese Sendung wirklich über diesen Link?"
          )
        },
        hilfe: {
          tipp: drei(
            "Kommt ein Paket zu dir? Öffne die Paket-App selbst. Tippe den Link nicht an.",
            "Erwartest du diese Sendung? Öffne die offizielle Paket-App selbst. So musst du den Link nicht antippen.",
            "Prüfe zuerst, ob du eine Sendung erwartest. Öffne dafür die offizielle Paket-App selbst, nicht den Link in der Nachricht."
          )
        },
        uebung: {
          handlungen: {
            linkPruefen: {
              wertung: "neutral",
              text: drei(
                "Die Adresse heißt paket-24.xyz. Echte Paket-Dienste nutzen ihre bekannte Adresse. Du kannst wieder zurückgehen.",
                "Die Adresse paket-24.xyz sieht ungewöhnlich aus. Prüfe die Sendung lieber in der offiziellen Paket-App.",
                "Die Internet-Adresse paket-24.xyz wirkt auffällig. Prüfe die Sendung stattdessen direkt in der offiziellen Paket-App."
              )
            },
            linkTippen: {
              wertung: "unpassend",
              text: drei(
                "Über so einen Link fragen Betrüger oft nach Namen, Adresse oder Bank-Daten. Der Link bleibt besser zu.",
                "Hinter solchen Links verbergen sich häufig gefälschte Webseiten, die deine Adresse oder Bankdaten verlangen. Öffne den Link besser nicht.",
                "Solche Links führen oft auf nachgemachte Seiten, die persönliche Daten oder Zahlungsinformationen abfragen. Besser ist es, den Link geschlossen zu lassen."
              )
            },
            linkNichtTippen: {
              wertung: "passend",
              text: drei(
                "Der Link bleibt zu. So schützt du dein Handy und deine Daten vor einer falschen Seite.",
                "Der Link bleibt zu. Die Nachricht kann auf eine falsche Seite führen.",
                "Du lässt den Link geschlossen. So gelangst du auf keine nachgemachte Webseite und schützt deine Daten."
              )
            },
            appOeffnen: {
              wertung: "auchMoeglich",
              text: drei(
                "Du öffnest selbst die echte Paket-App. Dort stehen echte Infos zu deinen Paketen.",
                "Du öffnest die offizielle Paket-App direkt selbst. Dort erkennst du sofort, ob tatsächlich ein Paket unterwegs ist.",
                "Du rufst die offizielle Paket-App direkt selbst auf. So prüfst du verlässlich, ob tatsächlich eine Sendung angekündigt ist."
              )
            }
          },
          ende: "linkNichtTippen"
        },
        nachFehler: { vorbild: "s3-vorbild" }
      },
      {
        id: "s7-neu",
        art: "entscheidung",
        handy: [
          {
            typ: "chat",
            von: ausflugNachricht.von,
            text: ausflugNachricht.text
          }
        ],
        lernbereich: {
          text: einstiegText,
          texte: [
            drei(
              "Du wartest auf Nachrichten zum Ausflug. Diese Nachricht kommt von einer fremden Nummer.",
              "Du erwartest Informationen zum Ausflug. Die Nachricht kommt aber von einer unbekannten Nummer.",
              "Du erwartest Informationen zum Ausflug, doch diese Nachricht kommt von einer unbekannten Nummer."
            )
          ]
        },
        aufgabe: {
          frage: drei(
            "Was machst du?",
            "Was machst du?",
            "Wie prüfst du sie?"
          ),
          antworten: [
            {
              text: drei(
                "Ich lasse den Link zu und hole mir Hilfe.",
                "Ich lasse den Link zu und prüfe mit einer Vertrauensperson.",
                "Ich lasse den Link zu und hole eine Vertrauensperson hinzu."
              ),
              wertung: "auchMoeglich",
              rueckmeldung: nsf
                ? jeAntwort(nsf, "feedbackAuch", 0)
                : drei(
                    "Du öffnest den Link nicht. Eine vertraute Person kann mit dir beim Freizeit-Treff prüfen.",
                    "Du öffnest den Link nicht. Eine vertraute Person kann dir beim Prüfen helfen.",
                    "Mit einer vertrauten Person zu prüfen ist ebenso sicher. Der unbekannte Link bleibt geschlossen."
                  )
            },
            {
              text: drei(
                "Ich rufe die bekannte Nummer direkt an.",
                "Ich rufe den Freizeit-Treff über die bekannte Nummer an.",
                "Ich rufe den Freizeit-Treff über die bekannte Nummer an."
              ),
              wertung: "passend",
              rueckmeldung: nsf
                ? je(nsf, "feedbackCorrect")
                : drei(
                    "Du prüfst beim Freizeit-Treff. Du nutzt dafür die bekannte Nummer. Der Link in der fremden Nachricht bleibt zu.",
                    "Du prüfst die Nachricht beim Freizeit-Treff über den dir bekannten Kontakt. Dafür brauchst du den unbekannten Link nicht.",
                    "Du fragst beim Freizeit-Treff über den bekannten Kontakt nach. Den Link aus der unbekannten Nachricht brauchst du dafür nicht zu öffnen."
                  )
            },
            {
              text: drei(
                "Ich tippe auf den Link für mein Geld.",
                "Ich öffne den Link, weil ich mein Geld bald zurück will.",
                "Ich öffne den Link für eine möglichst schnelle Auszahlung."
              ),
              wertung: "unpassend",
              rueckmeldung: nsf
                ? jeAntwort(nsf, "feedbackWrong", 2)
                : drei(
                    "Du weißt noch nicht: Wer schreibt dir? Prüfe erst beim Freizeit-Treff.",
                    "Die unbekannte Nummer ist noch nicht geprüft. Frage beim Freizeit-Treff nach, bevor du einen Link öffnest.",
                    "Der Absender ist noch nicht geprüft. Frage über den bekannten Kontakt nach, bevor du einen Link öffnest."
                  )
            }
          ]
        },
        ...(nf && nf.hinweis ? { hilfe: { tipp: je(nsf, "hinweis") } } : {}),
        nachFehler: { vorbild: "s3-vorbild" }
      },
      {
        id: "s8-erinnern",
        art: "erinnern",
        handy: [
          {
            typ: "notiz",
            satz: drei(
              "Mein Check bei Links in Nachrichten",
              "Mein Check bei Links in Nachrichten",
              "Mein Prüfplan bei Links in Nachrichten"
            ),
            texte: [
              drei(
                "1. Habe ich diesen Link erwartet?",
                "1. Habe ich diese Nachricht mit Link erwartet?",
                "1. Ist dieser Link wirklich erwartet und abgesprochen?"
              ),
              drei(
                "2. Nein? Dann bleibt der Link zu.",
                "2. Nein? Dann bleibt der Link konsequent geschlossen.",
                "2. Bei Zweifeln: Den Link konsequent geschlossen lassen."
              ),
              drei(
                "3. Ich öffne die echte App selbst. Oder ich rufe an.",
                "3. Selbst nachsehen: offizielle App öffnen oder bekannte Nummer anrufen.",
                "3. Direkt selbst über die offizielle App oder bekannte Nummer prüfen."
              )
            ]
          }
        ],
        lernbereich: {
          text: drei(
            "Du hast jetzt geübt. So erkennst du Links in Nachrichten sicher.",
            "Du hast jetzt geübt, unerwartete Links von abgesprochenen Links zu unterscheiden und selbst sicher zu prüfen.",
            "Du hast nun eingeübt, unerwartete Links zuverlässig zu erkennen und auf sicheren, direkten Wegen nachzuprüfen."
          ),
          regel: true
        },
        rueckblick: {
          schritt: "s1-erleben",
          gewaehlt: drei(
            "Am Anfang hast du gewählt: {antwort}. Jetzt weißt du noch genauer: Unerwartete Links bleiben zu.",
            "Zu Beginn hast du gewählt: „{antwort}“. Jetzt hast du geübt, warum unerwartete Links zu bleiben und wie du selbst nachschaust.",
            "Zu Beginn hattest du gewählt: „{antwort}“. Jetzt kennst du die Gründe und weißt, wie du Informationen selbstbestimmt überprüfst."
          ),
          unsicher: drei(
            "Am Anfang warst du noch unsicher. Jetzt kennst du deinen sicheren Weg bei Links.",
            "Zu Beginn warst du noch unsicher. Jetzt weißt du genau, woran du einen unerwarteten Link erkennst und wie du selbst handelst.",
            "Zu Beginn warst du noch unsicher. Nun hast du einen klaren, verlässlichen Prüfweg für Links im Alltag."
          )
        }
      },
      {
        id: "s9-transfer",
        art: "transfer",
        handy: [
          {
            typ: "notiz",
            satz: drei(
              "Mein sicherer Weg ohne Link",
              "Mein sicherer Weg ohne Link",
              "Mein direkter Weg ohne Link"
            ),
            texte: [
              drei(
                "Öffne wichtige Apps lieber direkt auf deinem Handy.",
                "Wichtige Apps wie Paket-Dienst oder Bank direkt selbst über den Startbildschirm öffnen.",
                "Wichtige Dienste wie Paketdienste oder Banking direkt über eigene App oder Lesezeichen öffnen."
              ),
              drei(
                "Wichtige Telefon-Nummern speichere ich in meinen Kontakten.",
                "Wichtige Telefonnummern von Kontakten, Bank oder Stellen vorab im Adressbuch speichern.",
                "Wichtige Rufnummern bekannter Kontakte und Stellen vorab im Adressbuch ablegen."
              )
            ]
          }
        ],
        lernbereich: {
          text: drei(
            [
              "Wo liegt deine echte Paket-App? Schau das in Ruhe nach. So findest du sie schnell ohne Link.",
              "Du musst das nicht heute machen. Du entscheidest selbst."
            ],
            [
              "Wenn du möchtest, schau in Ruhe nach, wo auf deinem Startbildschirm die offizielle Paket-App liegt oder welche wichtige Nummer du speichern willst.",
              "Ob und wann du das tust, entscheidest du ganz selbst."
            ],
            [
              "Wenn du möchtest, prüfe gelegentlich in Ruhe, wo deine wichtigen offiziellen Apps liegen, damit du im Alltag nicht erst auf Nachrichten-Links tippen musst.",
              "Ob und wann du dies umsetzt, liegt allein bei dir."
            ]
          ),
          aufklappen: {
            titel: "istPassiert",
            liste: drei(
              [
                "Hast du schon auf einen Link getippt? Schließe sofort die Seite.",
                "Gib keine Daten und kein Passwort ein.",
                "Hast du ein Passwort eingegeben? Ändere das Passwort sofort.",
                "Hast du Bank-Daten eingegeben? Ruf deine Bank an. Oder wähle 116 116 (sperrt jede girocard; Kreditkarten und Online-Banking im Zweifel direkt bei der Bank sperren). Vom Handy kann der Anruf etwas kosten.",
                "Du kannst dir dabei helfen lassen. Das ist nicht deine Schuld."
              ],
              [
                "Falls du schon auf den Link getippt hast: Schließe das Fenster sofort und gib keine weiteren Daten ein.",
                "Wenn du ein Passwort eingegeben hast, ändere es umgehend in der echten App oder auf der offiziellen Webseite.",
                "Wenn du Bankdaten eingegeben hast, rufe sofort deine Bank unter der Nummer auf deiner Bankkarte an oder wähle den Sperr-Notruf 116 116 (sperrt jede girocard; bei Kreditkarten und Online-Banking im Zweifel direkt die Bank anrufen; vom Handy eventuell kostenpflichtig).",
                "Du kannst dir dabei helfen lassen. Das ist nicht deine Schuld."
              ],
              [
                "Falls du den Link bereits geöffnet hast: Schließe den Tab umgehend und trage keine weiteren Angaben ein.",
                "Falls ein Passwort eingegeben wurde: Ändere es sofort direkt über die offizielle Webseite oder App sowie überall, wo dasselbe Passwort genutzt wird.",
                "Falls Zahlungs- oder Kontodaten übertragen wurden: Kontaktiere sofort deine Bank über die Nummer auf deiner Karte oder den Sperr-Notruf 116 116 (sperrt jede girocard, jedoch nicht bei allen Instituten Online-Banking oder Kreditkarten – im Zweifel direkt die Bank anrufen; mobil eventuell kostenpflichtig) und erstatte bei Schaden Anzeige.",
                "Du kannst dir dabei Unterstützung holen – ein solcher Vorfall ist nicht deine Schuld."
              ]
            )
          }
        }
      }
    ];

    return {
      format: "lernhandy-1",
      id: "wa2",
      titel: "Links in Nachrichten",
      szene: "whatsapp-links",
      regel: "links",
      quelle: "docs/topics.js, docs/content-de.js, docs/uebungen-de.js, docs/regeln-de.js, docs/szenarien-de.js (nur gelesen)",
      schritte
    };
  }

  function kurzLernweg(Q, A) {
    if (A.id === "be1" && typeof be1Lernweg === "function") {
      const B = Q.LERNEINHEIT_BE1 || (typeof LERNEINHEIT_BE1 !== "undefined" ? LERNEINHEIT_BE1 : null);
      if (B) return be1Lernweg(B);
    }
    if (A.id === "ge1" && typeof ge1Lernweg === "function") {
      return ge1Lernweg(Q);
    }
    if (A.id === "wa2") {
      return wa2Lernweg(Q);
    }
    if (A.lagen && Q && Q.lage && A.lagen[Q.lage]) {
      A = Object.assign({}, A, A.lagen[Q.lage], { lageId: Q.lage });
    }

    const fehler = (m) => { throw new Error(`${A.id}: ${m}`); };
    const thema = (Q.topics || []).find((t) => t.id === A.thema) || fehler(`Thema „${A.thema}“ fehlt`);
    const lektion = (thema.einfachLessons || []).find((l) => l.title === A.lektion) || fehler(`Kurz-Lektion „${A.lektion}“ fehlt`);
    const lv = (Q.KURZ_VERSIONS && Q.KURZ_VERSIONS[A.thema] && Q.KURZ_VERSIONS[A.thema][A.lektion]) || {};
    const uebung = (Q.EXTRA_PRACTICE && Q.EXTRA_PRACTICE[A.thema] && Q.EXTRA_PRACTICE[A.thema].kurz && Q.EXTRA_PRACTICE[A.thema].kurz[A.lektion]) || lektion.practice || {};
    const uv = (Q.AUFGABEN_VERSIONS && Q.AUFGABEN_VERSIONS[A.thema] && Q.AUFGABEN_VERSIONS[A.thema][`${A.thema}/kurz/${A.lektion}`]) || {};
    const ns = (Q.ANWENDEN_ERGAENZUNGEN && Q.ANWENDEN_ERGAENZUNGEN[A.thema]) || {};
    const nf = A.anwenden ? ((ns.neueSituation || {}).fragen || []).find((f) => f.id === A.anwenden) : null;
    const nv = A.anwenden ? (ns.aufgabenVersionen || {})[A.anwenden] || {} : {};

    const absaetze = (liste) => liste ? liste.map((x) => typeof x === "string" ? x : x.text) : undefined;

    /* Darstellungsregel 2: Saubere Teilung vor dem letzten Fragesatz */
    const teilen = (q) => {
      const s = String(q || "").trim();
      const m = /^(.*[.!:?])\s+([^.!?:]+\?)$/.exec(s);
      if (m && m[1].trim() && m[2].trim()) return { lage: m[1].trim(), frage: m[2].trim() };
      const idx = Math.max(s.lastIndexOf(". "), s.lastIndexOf("! "), s.lastIndexOf("? "));
      if (idx !== -1) {
        return { lage: s.slice(0, idx + 1).trim(), frage: s.slice(idx + 2).trim() };
      }
      return { lage: "", frage: s };
    };

    const teil = (f, welches) => drei(...STUFEN.map((s) => f[s] && teilen(f[s].question)[welches]));

    const aufgabe = (f) => {
      const frageRaw = teil(f, "frage");
      const saubereFrage = drei(
        ...STUFEN.map((st) => {
          const val = frageRaw[st] || "";
          const m = /([^.!?:]+[?][“"']?)$/.exec(val);
          return m ? m[1].trim() : val;
        })
      );
      const answers = f.leicht && f.leicht.answers ? f.leicht.answers : [];
      return {
        frage: saubereFrage,
        antworten: answers.map((_, n) => {
          const passend = n === (f.leicht ? f.leicht.correctIndex : 0);
          const auch = (f.leicht && f.leicht.auchMoeglich || []).includes(n);
          return {
            text: je(f, "answers", n),
            wertung: passend ? "passend" : auch ? "auchMoeglich" : "unpassend",
            rueckmeldung: passend ? je(f, "feedbackCorrect") : auch ? jeAntwort(f, "feedbackAuch", n) : jeAntwort(f, "feedbackWrong", n)
          };
        })
      };
    };

    const ausPostfach = (m) => m.channel === "SMS" ? { typ: "sms", text: m.text } : m.channel === "E-Mail" ? { typ: "email", text: m.text } : { typ: "chat", von: m.from, text: m.text };
    const post = A.postfach ? (Q.TRAINING_INBOX || []).find((m) => m.isTrick && [`Das ist der ${A.postfach}.`, `Das ist ein ${A.postfach}.`].some((a) => (m.explanation || "").startsWith(a))) : null;

    const regel = Object.prototype.hasOwnProperty.call(A, "regel")
      ? A.regel
      : Object.keys(Q.REGEL_SAETZE || {}).find((r) => r !== "keine" && (Q.REGEL_SAETZE[r] || []).includes(lektion.remember));
    const ue = { leicht: uebung, einfach: uv.einfach, standard: uv.standard };
    const merk = A.merksatz || drei(lektion.remember || "Prüfe vor dem Handeln.", (lv.einfach && lv.einfach.remember) || lektion.remember || "Prüfe vor dem Handeln.", (lv.standard && lv.standard.remember) || lektion.remember || "Prüfe vor dem Handeln.");

    const handySit = post ? [ausPostfach(post)] : A.handySituation || [];
    const sitText = A.situationText || drei(lektion.text, absaetze(lv.einfach && lv.einfach.text), absaetze(lv.standard && lv.standard.text));
    const schritte = [
      {
        id: "s1", art: "situation", handy: handySit,
        ...(A.szene ? { szene: A.szene } : {}),
        lernbereich: { text: sitText }
      }
    ];

    if (A.vorbildText || lektion.vorbild) {
      schritte.push({
        id: "s2", art: "vorbild", handy: A.handyVorbild || handySit,
        lernbereich: {
          etikett: (A.vorbildWer || lektion.vorbildWer || "Tilda").toLowerCase(),
          text: A.vorbildText || drei(lektion.vorbild, lv.einfach && lv.einfach.vorbild, lv.standard && lv.standard.vorbild)
        }
      });
    }

    schritte.push({
      id: "s3", art: "merksatz",
      handy: [{ typ: "notiz", satz: merk }],
      lernbereich: { text: merk, regel: !!regel }
    });

    if (A.interaktivUebung) {
      const hintMehrereWege = A.interaktivUebung.mehrereWege ? drei("Hier gibt es mehrere gute Wege.", "Hier gibt es mehrere gute Wege.", "Hier gibt es mehrere gute Wege.") : null;
      schritte.push({
        id: "s4", art: "uebung",
        ...(A.grad ? { grad: A.grad } : {}),
        handy: A.handyUebung || A.handySituation,
        lernbereich: {
          etikett: "uebung",
          text: A.interaktivUebung.aufgabe || drei("Übe jetzt selbst im Smartphone.", "Probiere die Handlung jetzt im Übungs-Handy aus.", "Führe die Handlung eigenständig im simulierten Smartphone durch."),
          ...(hintMehrereWege ? { texte: [hintMehrereWege] } : {}),
          hinweis: A.interaktivUebung.hinweis
        },
        uebung: A.interaktivUebung.uebung
      });
    }

    /* WA3: Die interaktive Code-Entscheidung genügt; die neue Anwendung bleibt erhalten. */
    if (uebung && uebung.question && (!A.interaktivUebung || nf) && A.id !== "wa3") {
      schritte.push({
        id: A.interaktivUebung ? "s5" : "s4", art: "entscheidung",
        handy: A.handyUebung || handySit,
        lernbereich: { text: teil(ue, "lage") || drei("Überlege gut.", "Entscheide überlegt.", "Treffe deine Entscheidung.") },
        aufgabe: aufgabe(ue),
        merken: je(ue, "remember")
      });
    }

    if (nf) {
      const nsf = { leicht: nf, einfach: nv.einfach, standard: nv.standard };
      const inhalt = (ns.neueSituation && ns.neueSituation.inhalt) || [];
      const hinweise = inhalt.filter((el) => el.typ === "hinweis").map((el) => el.text);
      schritte.push({
        id: `s${schritte.length + 1}`, art: "entscheidung",
        handy: inhalt.filter((el) => el.typ === "nachricht").map((el) => ({ typ: "chat", von: el.von, text: el.text })),
        lernbereich: { text: ns.neueSituation.einstieg, texte: [...hinweise, teil(nsf, "lage")] },
        aufgabe: aufgabe(nsf),
        ...(nf.hinweis ? { hilfe: { tipp: je(nsf, "hinweis") } } : {}),
        merken: je(nsf, "remember")
      });
    }

    /* Transfer / Alltags-Auftrag */
    if (thema.transfer) {
      const tv = thema.versions || {};
      schritte.push({
        id: "auftrag", art: "transfer",
        handy: [{ typ: "notiz", satz: drei("Deine Aufgabe für heute", "Dein Auftrag für heute", "Praxistransfer"), texte: [drei(thema.transfer, tv.einfach && tv.einfach.transfer, tv.standard && tv.standard.transfer)] }],
        lernbereich: { text: drei(thema.transfer, tv.einfach && tv.einfach.transfer, tv.standard && tv.standard.transfer) }
      });
    }

    return {
      format: "lernhandy-1", id: A.id,
      titel: A.titel || lektion.title,
      ...(A.szene ? { szene: A.szene } : {}),
      ...(regel ? { regel } : {}),
      quelle: "docs/topics.js, docs/content-de.js, docs/uebungen-de.js, docs/regeln-de.js (nur gelesen)",
      schritte
    };
  }

  /* Gemeinsamer Lernweg (GE1) */
  const GEMEINSAM = {
    ge1: {
      id: "ge1", name: "GE1 Fremde schreiben dir", titel: "Fremde schreiben dir", auftrag: "whatsapp",
      szene: "whatsapp-fremde-nummer",
      teile: [
        { thema: "whatsapp", lektion: "Unbekannte Nachrichten", schritte: ["s1", "s2", "s3", "s4"],
          handySituation: [{ typ: "chat", von: "Eine fremde Nummer", text: "Hallo, wie geht es dir?" }],
          handyUebung: [{ typ: "chat", von: "Eine fremde Nummer", text: "Hallo Kim, bist du das?" }] },
        { thema: "instagram", lektion: "Nachrichten von Unbekannten", schritte: ["s2", "s3", "s4", "s5"], anwenden: "instagram/neu/private-bilder-anfrage",
          handySituation: [{ typ: "chat", von: "Ein fremdes Profil", text: "Hallo, du siehst nett aus. Wo wohnst du?" }] },
        { thema: "tiktok", lektion: "Nachrichten auf TikTok", schritte: ["s2", "s4", "s5"], anwenden: "tiktok/neu/rezept-adresse",
          handySituation: [{ typ: "chat", von: "Jemand aus den Kommentaren", text: "Tolles Video. Wollen wir uns treffen?" }] }
      ]
    }
  };

  function gemeinsamerLernweg(Q, G) {
    if (G.id === "ge1" && typeof ge1Lernweg === "function") {
      return ge1Lernweg(Q);
    }
    const schritte = [];
    for (const teil of G.teile) {
      const thema = (Q.topics || []).find((t) => t.id === teil.thema);
      const lw = kurzLernweg(Q, {
        id: `${G.id}-${teil.thema}`, thema: teil.thema, lektion: teil.lektion, anwenden: teil.anwenden,
        handySituation: teil.handySituation, handyUebung: teil.handyUebung || teil.handySituation
      });
      for (const id of teil.schritte) {
        const s = lw.schritte.find((x) => x.id === id);
        if (s) {
          const lb = s.lernbereich.regel ? { ...s.lernbereich, regel: lw.regel } : s.lernbereich;
          schritte.push({ ...s, id: `${teil.thema}-${id}`, teil: thema ? thema.title : "", lernbereich: lb });
        }
      }
    }
    const a = (Q.topics || []).find((t) => t.id === G.auftrag);
    if (a) {
      const v = a.versions || {}, erster = G.teile.find((t) => t.thema === G.auftrag);
      schritte.push({
        id: "auftrag", art: "transfer", teil: a.title, handy: erster ? erster.handySituation : [],
        lernbereich: { text: { leicht: a.transfer, einfach: v.einfach && v.einfach.transfer, standard: v.standard && v.standard.transfer } }
      });
    }
    return {
      format: "lernhandy-1", id: G.id, titel: G.titel,
      szene: G.szene || "whatsapp-fremde-nummer",
      quelle: "docs/topics.js, docs/content-de.js, docs/uebungen-de.js (nur gelesen)", schritte
    };
  }

  if (typeof window !== "undefined") {
    window.KURZWEGE = KURZWEGE;
    window.GEMEINSAM = GEMEINSAM;
    window.kurzLernweg = kurzLernweg;
    window.gemeinsamerLernweg = gemeinsamerLernweg;
  }
  if (typeof globalThis !== "undefined") {
    globalThis.KURZWEGE = KURZWEGE;
    globalThis.GEMEINSAM = GEMEINSAM;
    globalThis.kurzLernweg = kurzLernweg;
    globalThis.gemeinsamerLernweg = gemeinsamerLernweg;
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { KURZWEGE, GEMEINSAM, kurzLernweg, gemeinsamerLernweg };
  }
  global.KURZWEGE = KURZWEGE;
  global.GEMEINSAM = GEMEINSAM;
  global.kurzLernweg = kurzLernweg;
  global.gemeinsamerLernweg = gemeinsamerLernweg;
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));
