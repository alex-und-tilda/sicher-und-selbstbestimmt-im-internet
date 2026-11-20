(function (global) {
  function regelMitPrefix(id, fbLeicht, fbEinfach, fbAlltag) {
    const liste = typeof REGELN !== "undefined" ? REGELN : (global.REGELN || []);
    const r = Array.isArray(liste) ? liste.find((x) => x.id === id) : null;
    if (!r) {
      return {
        leicht: `Regel: ${fbLeicht}`,
        einfach: `Regel: ${fbEinfach}`,
        alltag: `Regel: ${fbAlltag}`
      };
    }
    return {
      leicht: `Regel: ${r.kurz || fbLeicht}`,
      einfach: `Regel: ${(r.einfach && r.einfach.kurz) || r.kurz || fbEinfach}`,
      alltag: `Regel: ${(r.standard && r.standard.kurz) || r.kurz || fbAlltag}`
    };
  }

  global.LERNKREIS_DATEN = {
  modes: {
    allein: {
      label: "Allein",
      hint: null
    },
    gemeinsam: {
      label: "Gemeinsam lernen",
      hint: {
        leicht: "Lest zuerst zusammen. Sprecht kurz darüber. Dann tippt eine Person.",
        einfach: "Lest zuerst zusammen. Sprecht kurz darüber. Dann tippt eine Person.",
        alltag: "Lest zuerst zusammen. Sprecht kurz darüber. Dann tippt eine Person."
      }
    },
    unterstuetzung: {
      label: "Mit Unterstützung",
      hint: {
        leicht: "Du entscheidest. Die andere Person hilft dir dabei.",
        einfach: "Du entscheidest. Die andere Person hilft dir dabei.",
        alltag: "Du entscheidest. Die andere Person hilft dir dabei."
      }
    }
  },
  exercises: {
    ds1: {
      id: "ds1",
      kicker: "DS1 · Entscheiden mit Folge",
      grad: "klar",
      title: "Nötig oder nicht?",
      regel: "noetig",
      rule: regelMitPrefix("noetig", "Ich gebe nur nötige Daten weiter.", "Ich gebe nur die Daten weiter, die nötig sind.", "Ich gebe nur die Daten weiter, die für den Zweck nötig sind."),
      fragt: "Alex",
      machtVor: "Tilda",
      situation: {
        leicht: "Du hast eine neue Foto-App. Du willst ein Foto bearbeiten. Die App fragt nach deinen Kontakten.",
        einfach: "Du hast eine neue Foto-App und möchtest ein Foto bearbeiten. Beim Öffnen fragt die App nach deinen Kontakten.",
        alltag: "Du hast eine neue Foto-App installiert und möchtest ein Foto bearbeiten. Beim ersten Öffnen bittet die App um Zugriff auf deine Kontakte."
      },
      vorbild: {
        leicht: "Tilda hat eine Taschenlampen-App. Die App will ihre Kontakte. Tilda überlegt: Wofür braucht eine Lampe meine Kontakte? Sie findet keinen Grund. Sie tippt auf: Nicht erlauben. Die Lampe leuchtet trotzdem.",
        einfach: "Tildas Taschenlampen-App will ihre Kontakte lesen. Tilda überlegt, wofür eine Lampe Kontakte braucht, und findet keinen Grund. Sie tippt auf „Nicht erlauben“. Die Lampe leuchtet trotzdem.",
        alltag: "Tildas Taschenlampen-App bittet um Zugriff auf ihre Kontakte. Tilda fragt sich, wofür eine Lampe diese Daten benötigt, und findet keinen Grund. Sie wählt „Nicht erlauben“. Die Lampe funktioniert trotzdem."
      },
      task: {
        leicht: "Du willst ein Foto bearbeiten. Die Foto-App fragt nach deinen Kontakten. Was tippst du?",
        einfach: "Du möchtest ein Foto bearbeiten, und die Foto-App fragt nach dem Zugriff auf deine Kontakte. Was tippst du?",
        alltag: "Du möchtest ein Foto bearbeiten. Die Foto-App bittet um Zugriff auf deine Kontakte. Wie entscheidest du?"
      },
      helpText: {
        leicht: "Überlege: Wofür braucht die App die Kontakte? Du willst nur ein Foto bearbeiten.",
        einfach: "Überlege, wofür die App deine Kontakte braucht. Du möchtest nur ein Foto bearbeiten.",
        alltag: "Prüfe den Zweck: Wofür benötigt die App deine Kontakte, wenn du nur ein Foto bearbeiten möchtest?"
      },
      phonePromptTitle: "Foto-Spaß",
      phonePromptText: "„Foto-Spaß“ möchte auf deine Kontakte zugreifen. Damit findest du Freunde.",
      wenigChoices: ["kontakteNein", "kontakteJa"],
      choices: [
        { id: "kontakteJa", label: "Erlauben" },
        { id: "wofuer", label: "Wofür? Nachsehen" },
        { id: "kontakteNein", label: "Nicht erlauben" }
      ],
      outcomes: {
        kontakteNein: {
          label: "Nicht erlauben",
          phoneTitle: "Foto-Spaß · Foto bearbeiten",
          phoneText: "Dein Foto ist offen. Werkzeuge zum Zuschneiden und Aufhellen sind bereit.",
          feedback: {
            leicht: "Die App öffnet dein Foto. Du kannst es bearbeiten. Dafür braucht die App deine Kontakte nicht. Die Nummern von deinen Freunden bleiben bei dir.",
            einfach: "Die App öffnet dein Foto, und du kannst es bearbeiten. Dafür braucht sie deine Kontakte nicht. Die Nummern deiner Freunde bleiben bei dir.",
            alltag: "Die App öffnet dein Foto, und du kannst es bearbeiten. Für diesen Zweck benötigt sie deine Kontakte nicht. Die Telefonnummern deiner Freunde bleiben bei dir."
          },
          erfolg: {
            tun: {
              leicht: "Du hast den Zugriff nicht erlaubt. Das Foto geht trotzdem auf.",
              einfach: "Du hast den Zugriff nicht erlaubt, und das Foto öffnet sich trotzdem.",
              alltag: "Du hast den Zugriff nicht erlaubt. Das Foto lässt sich trotzdem bearbeiten."
            },
            reaktionGeschichte: "„Danke. Die App geht ja auch ohne meine Kontakte.“",
            reaktionSonst: "„So mache ich es auch. Erst frage ich: Wofür?“"
          },
          nextStep: "finish"
        },
        wofuer: {
          label: "Wofür? Nachsehen",
          phoneTitle: "App-Info: Foto-Spaß",
          phoneText: "Fotos – zum Bearbeiten · Kontakte – zum Freunde finden.",
          feedback: {
            leicht: "Du siehst erst nach. Die App schreibt: Kontakte zum Freunde finden. Für dein Foto brauchst du das nicht. Jetzt kennst du den Grund. Du entscheidest.",
            einfach: "Du siehst zuerst nach, wofür die App die Kontakte will. Sie nennt „Freunde finden“. Für dein Foto brauchst du das nicht. Jetzt kennst du den Grund und entscheidest.",
            alltag: "Du prüfst zuerst den angegebenen Zweck. Die App nennt „Freunde finden“. Für die Bearbeitung deines Fotos ist das nicht erforderlich. Mit dieser Information triffst du deine Entscheidung."
          },
          nextStep: "redecide"
        },
        kontakteJa: {
          label: "Erlauben",
          phoneTitle: "Foto-Spaß · 3 Freunde gefunden",
          phoneText: "Dein Foto ist offen. Oben steht: „3 Freunde aus deinen Kontakten gefunden.“",
          feedback: {
            leicht: "Die App darf jetzt deine Kontakte lesen. Sie hat es schon getan. Sie zeigt dir 3 Freunde. Für dein Foto braucht die App das nicht. Du entscheidest jetzt: Zugriff ausschalten. Oder so lassen.",
            einfach: "Die App darf jetzt deine Kontakte lesen, und sie hat es schon getan: Sie zeigt dir 3 Freunde. Für dein Foto braucht sie das nicht. Du entscheidest, ob du den Zugriff wieder ausschaltest oder ihn so lässt.",
            alltag: "Die App hat nun die Berechtigung, deine Kontakte zu lesen, und hat sie bereits genutzt: Sie zeigt dir 3 Freunde an. Für die Bearbeitung eines Fotos ist das nicht erforderlich. Du entscheidest, ob du die Berechtigung wieder entziehst oder bestehen lässt."
          },
          nextStep: "second"
        }
      },
      secondDecision: {
        task: {
          leicht: "Du bist in den Einstellungen von der App. Was tust du?",
          einfach: "Du bist jetzt in den Einstellungen der App. Was tust du?",
          alltag: "Du befindest dich in den Einstellungen der App. Wie entscheidest du?"
        },
        phoneTitle: "Einstellungen · Foto-Spaß",
        phoneSwitchLabel: "Zugriff auf Kontakte: AN",
        choices: [
          { id: "zugriffAus", label: "Zugriff ausschalten" },
          { id: "soLassen", label: "So lassen" }
        ],
        outcomes: {
          zugriffAus: {
            phoneTitle: "Einstellungen · Foto-Spaß",
            phoneText: "Zugriff auf Kontakte: AUS.",
            feedback: {
              leicht: "Der Zugriff ist aus. Die App darf ab jetzt keine Kontakte mehr lesen. Aber: Die App hat vielleicht schon Kontakte kopiert. Diese Kopie wird nicht von selbst gelöscht. Du kannst die Firma von der App bitten: Löscht meine Daten.",
              einfach: "Der Zugriff ist aus, und die App darf ab jetzt keine Kontakte mehr lesen. Kontakte, die sie schon kopiert hat, werden dadurch aber nicht von selbst gelöscht. Du kannst die Firma der App bitten, diese Daten zu löschen.",
              alltag: "Die Berechtigung ist entzogen; die App kann ab jetzt nicht mehr auf deine Kontakte zugreifen. Bereits kopierte Daten werden dadurch jedoch nicht automatisch gelöscht. Du kannst beim Anbieter der App die Löschung dieser Daten verlangen."
            },
            erfolg: {
              tun: {
                leicht: "Du hast den Zugriff wieder ausgeschaltet. Die App liest ab jetzt keine Kontakte mehr.",
                einfach: "Du hast den Zugriff wieder ausgeschaltet, und die App liest ab jetzt keine Kontakte mehr.",
                alltag: "Du hast die Berechtigung wieder entzogen. Die App liest ab jetzt keine Kontakte mehr."
              },
              reaktionGeschichte: "„Gut. Das lässt sich also wieder ändern.“",
              reaktionSonst: "„Gut zu wissen. Das lässt sich wieder ändern.“"
            }
          },
          soLassen: {
            phoneTitle: "Einstellungen · Foto-Spaß",
            phoneText: "Zugriff auf Kontakte: AN.",
            feedback: {
              leicht: "Das ist deine Entscheidung. Die App darf deine Kontakte weiter lesen. Du kannst das später ändern. Das geht in den Einstellungen von deinem Handy.",
              einfach: "Das ist deine Entscheidung. Die App darf deine Kontakte weiter lesen. Du kannst das später jederzeit in den Einstellungen deines Handys ändern.",
              alltag: "Das ist deine Entscheidung. Die App behält den Zugriff auf deine Kontakte. Du kannst die Berechtigung jederzeit in den Einstellungen deines Geräts ändern."
            },
            erfolg: {
              tun: {
                leicht: "Du hast entschieden: Der Zugriff bleibt an. Du kannst das später ändern.",
                einfach: "Du hast entschieden, dass der Zugriff an bleibt. Du kannst das später ändern.",
                alltag: "Du hast entschieden, die Berechtigung bestehen zu lassen. Das lässt sich später ändern."
              },
              reaktionGeschichte: null,
              reaktionSonst: null
            }
          }
        }
      },
      apply: {
        leicht: "Sieh heute bei einer App auf deinem Handy nach. Welche Daten braucht die App wirklich?",
        einfach: "Prüfe bei einer App auf deinem eigenen Handy, welche Berechtigungen sie wirklich braucht.",
        alltag: "Überprüfe eine App auf deinem eigenen Gerät: Welche Berechtigungen sind für den Zweck tatsächlich nötig?"
      }
    },

    fb2: {
      id: "fb2",
      kicker: "FB2 · Tilda fragt dich",
      title: "Unbekannte Personen",
      titelGeschichte: "Tilda fragt dich",
      regel: "echt",
      rule: regelMitPrefix("echt", "Ich prüfe: Wer schreibt mir?", "Ich prüfe, ob die Nachricht wirklich von dieser Person kommt.", "Ein bekannter Name reicht mir nicht: Ich prüfe, wer wirklich schreibt."),
      fragt: "Tilda",
      machtVor: "Alex",
      vorbild: {
        leicht: "Alex bekommt eine Anfrage von Mara Lenz. Alex kennt sie nicht. Er tippt auf das Profil. Dort steht fast nichts. Alex nimmt die Anfrage nicht an.",
        einfach: "Alex bekommt eine Anfrage von Mara Lenz, die er nicht kennt. Er sieht sich zuerst das Profil an. Dort steht fast nichts, deshalb nimmt er die Anfrage nicht an.",
        alltag: "Alex erhält eine Anfrage von Mara Lenz, die er nicht kennt. Er sieht sich zuerst das Profil an. Es enthält kaum Angaben, deshalb nimmt er die Anfrage nicht an."
      },
      tildaSpeech: "„Ich kenne ihn nicht. Aber wir haben 2 gemeinsame Freunde. Was soll ich machen?“",
      task: {
        leicht: "Was rätst du Tilda?",
        einfach: "Was rätst du Tilda?",
        alltag: "Welchen Rat gibst du Tilda?"
      },
      helpText: {
        leicht: "Überlege: Kann Tilda erst mehr über Jonas erfahren?",
        einfach: "Überlege: Kann Tilda zuerst nachsehen, wer hinter dem Profil steckt?",
        alltag: "Überlege, wie Tilda mehr Informationen erhält, ohne sofort persönliche Inhalte freizugeben."
      },
      phonePromptTitle: "Facebook · Freundschaftsanfrage",
      phonePromptText: "Jonas Weber · 2 gemeinsame Freunde",
      wenigChoices: ["profil", "annehmen"],
      choices: [
        { id: "annehmen", label: "Nimm die Anfrage an." },
        { id: "profil", label: "Sieh erst ins Profil.", gleichwertig: true },
        { id: "ablehnen", label: "Lehn die Anfrage ab.", gleichwertig: true }
      ],
      outcomes: {
        profil: {
          label: "Sieh erst ins Profil.",
          phoneTitle: "Profil: Jonas Weber",
          phoneText: "Konto seit 3 Tagen · 1 Foto · keine Beiträge.",
          feedback: {
            leicht: "Tilda sieht ins Profil. Das Konto ist 3 Tage alt. Es gibt 1 Foto. Es gibt keine Beiträge. Tilda sagt: Das ist mir zu wenig. Sie nimmt nicht an. Dein Rat gibt Tilda Zeit. Sie sieht erst nach. Dann entscheidet sie selbst.",
            einfach: "Tilda sieht sich das Profil an: Das Konto ist erst 3 Tage alt und hat nur 1 Foto. Das ist ihr zu wenig, deshalb nimmt sie nicht an. Mit deinem Rat konnte sie erst nachsehen und dann selbst entscheiden.",
            alltag: "Tilda prüft das Profil: Das Konto besteht erst seit 3 Tagen und enthält nur ein Foto. Das genügt ihr nicht, und sie nimmt die Anfrage nicht an. Dein Rat hat ihr ermöglicht, zuerst nachzusehen und dann selbst zu entscheiden."
          },
          erfolg: {
            tun: {
              leicht: "Du hast Tilda geraten: Sieh erst ins Profil. Tilda hat nachgesehen. Dann hat sie selbst entschieden.",
              einfach: "Du hast Tilda geraten, erst ins Profil zu sehen. Sie hat nachgesehen und dann selbst entschieden.",
              alltag: "Du hast Tilda geraten, zuerst das Profil anzusehen. Sie hat es geprüft und danach selbst entschieden."
            },
            reaktionGeschichte: "„Danke. Jetzt weiß ich mehr über Jonas.“",
            reaktionSonst: "„So mache ich es auch. Erst sehe ich nach.“"
          },
          nextStep: "finish"
        },
        ablehnen: {
          label: "Lehn die Anfrage ab.",
          phoneTitle: "Facebook · Anfragen",
          phoneText: "Die Anfrage von Jonas Weber ist weg.",
          feedback: {
            leicht: "Tilda lehnt ab. Die Anfrage ist weg. Jonas sieht nichts von Tilda. Tilda kennt Jonas vielleicht doch? Dann sucht sie ihn später selbst.",
            einfach: "Tilda lehnt ab, und die Anfrage ist weg. Jonas sieht dadurch nichts von ihr. Falls sie ihn doch kennt, kann sie ihn später selbst suchen.",
            alltag: "Tilda lehnt ab, und die Anfrage verschwindet. Jonas erhält dadurch keinen Einblick in ihr Profil. Sollte sie ihn doch kennen, kann sie ihn später selbst suchen."
          },
          erfolg: {
            tun: {
              leicht: "Du hast Tilda geraten: Lehn ab. Jonas sieht jetzt nichts von Tilda.",
              einfach: "Du hast Tilda geraten abzulehnen. Jonas sieht jetzt nichts von ihr.",
              alltag: "Du hast Tilda geraten, die Anfrage abzulehnen. Jonas erhält keinen Einblick in ihr Profil."
            },
            reaktionGeschichte: "„Danke. Die Anfrage ist weg. Das ist mir recht.“",
            reaktionSonst: "„So mache ich es auch. Ich muss niemanden annehmen.“"
          },
          nextStep: "finish"
        },
        annehmen: {
          label: "Nimm die Anfrage an.",
          phoneTitle: "Nachricht von Jonas Weber",
          phoneText: "Jonas schreibt: „Hi! Kannst du mir kurz helfen? Ich brauche einen Code.“",
          feedback: {
            leicht: "Tilda nimmt an. Jonas sieht jetzt mehr von Tilda. Zum Beispiel ihre Fotos für Freunde. Gleich schreibt Jonas ihr. Er will einen Code. Tilda sagt: Das ist komisch. Was mache ich jetzt?",
            einfach: "Tilda nimmt an. Jonas sieht jetzt mehr von ihr, zum Beispiel die Fotos für Freunde. Kurz danach schreibt er und will einen Code. Tilda findet das komisch und fragt dich noch einmal.",
            alltag: "Tilda nimmt an. Jonas sieht nun mehr von ihr, etwa die Fotos für Freunde. Kurz darauf schreibt er und bittet um einen Code. Tilda findet das merkwürdig und fragt dich erneut."
          },
          nextStep: "second"
        }
      },
      secondDecision: {
        task: {
          leicht: "Tilda fragt dich noch einmal: Was soll sie jetzt machen?",
          einfach: "Tilda fragt dich noch einmal: Was soll sie jetzt tun?",
          alltag: "Tilda bittet dich erneut um Rat: Wie soll sie jetzt reagieren?"
        },
        phoneTitle: "Chat mit Jonas Weber",
        phoneSwitchLabel: "Jonas wartet auf eine Antwort",
        choices: [
          { id: "entfernen", label: "Entferne ihn wieder." },
          { id: "fragen", label: "Frag ihn, woher ihr euch kennt." }
        ],
        outcomes: {
          entfernen: {
            phoneTitle: "Facebook · Freunde",
            phoneText: "Jonas Weber wurde aus der Freundesliste entfernt.",
            feedback: {
              leicht: "Tilda entfernt Jonas aus der Freundes-Liste. Er sieht ihre Fotos für Freunde nicht mehr. Tilda sagt: Gut. Das geht ja wieder weg.",
              einfach: "Tilda entfernt Jonas wieder aus ihrer Freundesliste. Er sieht ihre Fotos für Freunde nicht mehr. Tilda ist erleichtert, dass sich das rückgängig machen lässt.",
              alltag: "Tilda entfernt Jonas wieder aus ihrer Freundesliste; er sieht ihre Fotos für Freunde nicht mehr. Die Entscheidung ließ sich also rückgängig machen."
            },
            erfolg: {
              tun: {
                leicht: "Du hast Tilda geraten: Entferne ihn wieder. Jonas sieht ihre Fotos nicht mehr.",
                einfach: "Du hast Tilda geraten, Jonas wieder zu entfernen. Er sieht ihre Fotos nicht mehr.",
                alltag: "Du hast Tilda geraten, Jonas wieder zu entfernen. Er sieht ihre Fotos für Freunde nicht mehr."
              },
              reaktionGeschichte: "„Gut. Das geht ja wieder weg.“",
              reaktionSonst: "„Gut zu wissen. Das geht wieder weg.“"
            }
          },
          fragen: {
            phoneTitle: "Chat mit Jonas Weber",
            phoneText: "Jonas antwortet nicht auf deine Frage, sondern schreibt wieder: „Ich brauche den Code.“ Danach entfernt Tilda ihn.",
            feedback: {
              leicht: "Tilda fragt Jonas. Er antwortet nicht auf die Frage. Er schreibt nur wieder: Ich brauche den Code. Jetzt weiß Tilda mehr. Sie entfernt Jonas.",
              einfach: "Tilda fragt Jonas, woher sie sich kennen. Er geht nicht darauf ein und schreibt nur wieder, dass er den Code braucht. Jetzt weiß Tilda mehr und entfernt ihn.",
              alltag: "Tilda fragt nach, woher sie sich kennen. Jonas geht nicht darauf ein und wiederholt seine Bitte um den Code. Damit weiß Tilda genug und entfernt ihn."
            }
          }
        }
      },
      apply: {
        leicht: "Sieh heute in deine Freundes-Liste. Kennst du alle Personen dort? Du musst nichts ändern. Du entscheidest selbst.",
        einfach: "Sieh dir heute deine Freundesliste an und überlege, ob du alle Personen dort kennst. Du musst nichts ändern.",
        alltag: "Sieh dir heute deine Freundesliste an: Kennst du alle Personen darin? Ob du etwas änderst, entscheidest du."
      },
      grad: "ueberlegen",
      lagen: {
        luca: {
          id: "luca",
          name: "Luca M.",
          grad: "klar",
          phonePromptTitle: "Facebook · Freundschaftsanfrage",
          phonePromptText: "Luca M. · kein Foto · keine gemeinsamen Freunde",
          tildaSpeech: "„Luca M. will mein Freund sein. Ich kenne keinen Luca. Was soll ich machen?“",
          situation: {
            leicht: "Tilda bekommt eine Anfrage von Luca M. Tilda kennt keinen Luca. Das Profil hat kein Foto. Es gibt auch keine gemeinsamen Freunde. Luca hat nichts dazu geschrieben.",
            einfach: "Tilda bekommt eine Anfrage von Luca M., den sie nicht kennt. Das Profil hat kein Foto, und es gibt keine gemeinsamen Freunde. Luca hat nichts dazu geschrieben.",
            alltag: "Tilda erhält eine Anfrage von Luca M., den sie nicht kennt. Das Profil hat kein Foto und keine gemeinsamen Freunde; eine Nachricht hat Luca nicht geschrieben."
          },
          helpText: {
            leicht: "Überlege: Was weiß Tilda über Luca?",
            einfach: "Überlege, was Tilda über Luca weiß.",
            alltag: "Überlege, was Tilda über Luca weiß."
          },
          wenigChoices: ["ablehnen", "annehmen"],
          choices: [
            { id: "ablehnen", label: "Lehn die Anfrage ab.", gleichwertig: true },
            { id: "annehmen", label: "Nimm an. Vielleicht ist er nett." },
            { id: "profil", label: "Sieh erst ins Profil.", gleichwertig: true }
          ],
          outcomes: {
            ablehnen: {
              label: "Lehn die Anfrage ab.",
              wert: "guterWeg",
              phoneTitle: "Facebook · Anfragen",
              phoneText: "Die Anfrage von Luca M. ist weg.",
              feedback: {
                leicht: "Tilda lehnt ab. Sie kennt Luca nicht. Das Profil zeigt nichts von ihm. Tilda muss niemanden annehmen.",
                einfach: "Tilda lehnt ab, weil sie Luca nicht kennt und das Profil nichts von ihm zeigt. Sie muss niemanden annehmen.",
                alltag: "Tilda lehnt ab: Sie kennt Luca nicht, und das Profil verrät nichts über ihn. Sie ist nicht verpflichtet, jemanden anzunehmen."
              },
              erfolg: {
                tun: {
                  leicht: "Du hast Tilda geraten: Lehn ab. Luca sieht nichts von Tilda.",
                  einfach: "Du hast Tilda geraten abzulehnen. Luca sieht nichts von ihr.",
                  alltag: "Du hast Tilda geraten, die Anfrage abzulehnen. Luca erhält keinen Einblick in ihr Profil."
                },
                reaktionGeschichte: "„Danke. Ich kenne ihn ja nicht.“"
              },
              nextStep: "finish"
            },
            annehmen: {
              label: "Nimm an. Vielleicht ist er nett.",
              wert: "eigene",
              phoneTitle: "Facebook · Freunde",
              phoneText: "Luca M. ist jetzt in der Freundes-Liste.",
              feedback: {
                leicht: "Tilda nimmt an. Luca sieht jetzt ihre Fotos für Freunde. Tilda weiß weiter nichts über Luca. Sie kann ihn wieder entfernen.",
                einfach: "Tilda nimmt an. Luca sieht jetzt ihre Fotos für Freunde, aber Tilda weiß weiter nichts über ihn. Sie kann ihn wieder entfernen.",
                alltag: "Tilda nimmt an. Luca sieht nun ihre Fotos für Freunde, während sie weiterhin nichts über ihn weiß. Sie kann ihn wieder entfernen."
              },
              nextStep: "finish"
            },
            profil: {
              label: "Sieh erst ins Profil.",
              wert: "guterWeg",
              phoneTitle: "Profil: Luca M.",
              phoneText: "Kein Foto · keine Beiträge.",
              feedback: {
                leicht: "Tilda sieht ins Profil. Dort steht nichts. Kein Foto. Keine Beiträge. Tilda weiß nicht mehr als vorher. Sie nimmt nicht an.",
                einfach: "Tilda sieht ins Profil, aber dort steht nichts: kein Foto und keine Beiträge. Sie weiß nicht mehr als vorher und nimmt nicht an.",
                alltag: "Tilda sieht sich das Profil an. Es enthält weder ein Foto noch Beiträge. Sie weiß nicht mehr als zuvor und nimmt die Anfrage nicht an."
              },
              erfolg: {
                tun: {
                  leicht: "Du hast Tilda geraten: Sieh erst ins Profil. Dort stand nichts. Tilda hat nicht angenommen.",
                  einfach: "Du hast Tilda geraten, erst ins Profil zu sehen. Dort stand nichts, und sie hat nicht angenommen.",
                  alltag: "Du hast Tilda geraten, zuerst das Profil anzusehen. Es war leer, und sie hat die Anfrage nicht angenommen."
                },
                reaktionGeschichte: "„Danke. Ein leeres Profil sagt mir nichts.“"
              },
              nextStep: "finish"
            }
          }
        },
        jonas: {
          id: "jonas",
          name: "Jonas Weber",
          grad: "ueberlegen"
        },
        meryem: {
          id: "meryem",
          name: "Meryem Kaya",
          grad: "ueberlegen",
          phonePromptTitle: "Facebook · Freundschaftsanfrage",
          phonePromptText: "Meryem Kaya · Foto · 1 gemeinsamer Freund",
          tildaSpeech: "„Meryem aus dem Koch-Kurs schickt mir eine Anfrage. Wir haben gestern darüber gesprochen. Soll ich annehmen?“",
          situation: {
            leicht: "Tilda war gestern im Koch-Kurs. Dort hat sie Meryem getroffen. Die beiden haben gesagt: Wir schreiben uns bei Facebook. Heute kommt eine Anfrage von Meryem Kaya. Das Foto zeigt Meryem.",
            einfach: "Tilda hat gestern im Kochkurs Meryem kennengelernt, und die beiden haben verabredet, sich bei Facebook zu schreiben. Heute kommt eine Anfrage von Meryem Kaya. Das Foto zeigt Meryem.",
            alltag: "Tilda hat gestern im Kochkurs Meryem kennengelernt; die beiden haben verabredet, sich über Facebook zu schreiben. Heute trifft eine Anfrage von Meryem Kaya ein, mit einem Foto von ihr."
          },
          helpText: {
            leicht: "Überlege: Passt die Anfrage zu gestern?",
            einfach: "Überlege, ob die Anfrage zu gestern passt.",
            alltag: "Überlege, ob die Anfrage zu dem passt, was gestern verabredet wurde."
          },
          wenigChoices: ["annehmen", "ablehnen"],
          choices: [
            { id: "ablehmen", label: "Lehn ab. Du kennst sie kaum." },
            { id: "profil", label: "Sieh erst ins Profil.", gleichwertig: true },
            { id: "annehmen", label: "Nimm die Anfrage an." }
          ],
          outcomes: {
            ablehmen: {
              label: "Lehn ab. Du kennst sie kaum.",
              wert: "eigene",
              phoneTitle: "Facebook · Anfragen",
              phoneText: "Die Anfrage von Meryem Kaya ist weg.",
              feedback: {
                leicht: "Tilda lehnt ab. Das darf sie. Aber Tilda will sich mit Meryem schreiben. Die Anfrage passt zu gestern. Hier spricht nichts gegen Meryem.",
                einfach: "Tilda lehnt ab, und das darf sie. Sie wollte sich aber mit Meryem schreiben, und die Anfrage passt zu gestern. Hier spricht nichts gegen Meryem.",
                alltag: "Tilda lehnt ab; das steht ihr frei. Sie wollte allerdings mit Meryem in Kontakt bleiben, und die Anfrage passt zur Verabredung. Gegen Meryem spricht hier nichts."
              },
              nextStep: "finish"
            },
            profil: {
              label: "Sieh erst ins Profil.",
              wert: "guterWeg",
              phoneTitle: "Profil: Meryem Kaya",
              phoneText: "Fotos vom Koch-Kurs · Beiträge seit 2021.",
              feedback: {
                leicht: "Tilda sieht erst ins Profil. Dort sind Fotos vom Koch-Kurs. Das passt zu Meryem. Tilda nimmt an.",
                einfach: "Tilda sieht erst ins Profil und findet dort Fotos vom Kochkurs. Das passt zu Meryem, deshalb nimmt sie an.",
                alltag: "Tilda sieht sich zuerst das Profil an und findet Fotos vom Kochkurs. Das passt zu Meryem, und sie nimmt die Anfrage an."
              },
              nextStep: "finish"
            },
            annehmen: {
              label: "Nimm die Anfrage an.",
              wert: "guterWeg",
              phoneTitle: "Facebook · Freunde",
              phoneText: "Meryem Kaya ist jetzt in der Freundes-Liste. Neue Nachricht von Meryem: „Schön! Ich schicke dir das Rezept von gestern.“",
              feedback: {
                leicht: "Tilda nimmt an. Sie hat Meryem gestern selbst getroffen. Die beiden haben über die Anfrage gesprochen. Das Foto passt. Hier stimmt alles zusammen.",
                einfach: "Tilda nimmt an, denn sie hat Meryem gestern selbst getroffen, und die beiden haben über die Anfrage gesprochen. Auch das Foto passt.",
                alltag: "Tilda nimmt an: Sie hat Meryem gestern persönlich kennengelernt, die Anfrage war verabredet, und das Foto passt."
              },
              erfolg: {
                tun: {
                  leicht: "Du hast Tilda geraten: Nimm an. Die Anfrage passt zu gestern.",
                  einfach: "Du hast Tilda geraten anzunehmen, weil die Anfrage zu gestern passt.",
                  alltag: "Du hast Tilda geraten, die Anfrage anzunehmen, weil sie zur Verabredung passt."
                },
                reaktionGeschichte: "„Danke. Ich freue mich auf die Rezepte von Meryem.“"
              },
              nextStep: "finish"
            }
          }
        },
        petra: {
          id: "petra",
          name: "Petra Sommer",
          grad: "knifflig",
          phonePromptTitle: "Facebook · Freundschaftsanfrage",
          phonePromptText: "Petra Sommer · Foto · 5 gemeinsame Freunde",
          tildaSpeech: "„Petra schickt mir eine Anfrage. Aber wir sind doch schon befreundet. Was soll ich machen?“",
          situation: {
            leicht: "Tilda bekommt eine Anfrage von Petra Sommer. Petra singt mit Tilda im Chor. Das Foto zeigt Petra. Aber die beiden sind schon befreundet.",
            einfach: "Tilda bekommt eine Anfrage von Petra Sommer, mit der sie im Chor singt. Das Foto zeigt Petra, aber die beiden sind bei Facebook schon befreundet.",
            alltag: "Tilda erhält eine Anfrage von Petra Sommer, mit der sie im Chor singt. Das Foto zeigt Petra; die beiden sind bei Facebook allerdings bereits befreundet."
          },
          helpText: {
            leicht: "Überlege: Tilda und Petra sind schon befreundet. Wo kann Tilda das sehen?",
            einfach: "Überlege, wo Tilda sehen kann, ob sie mit Petra schon befreundet ist.",
            alltag: "Überlege, wo Tilda nachsehen kann, ob sie mit Petra bereits befreundet ist."
          },
          nachDemGutenWeg: {
            leicht: "Tilda sagt Petra Bescheid. Petra kann das zweite Profil bei Facebook melden.",
            einfach: "Tilda sagt Petra Bescheid, damit Petra das zweite Profil bei Facebook melden kann.",
            alltag: "Tilda informiert Petra, damit diese das zweite Profil bei Facebook melden kann."
          },
          wenigChoices: ["liste", "annehmen"],
          choices: [
            { id: "anrufen", label: "Ruf Petra an. Frag sie.", gleichwertig: true },
            { id: "liste", label: "Sieh in deine Freundes-Liste.", gleichwertig: true },
            { id: "annehmen", label: "Nimm an. Es ist ja Petra." }
          ],
          outcomes: {
            anrufen: {
              label: "Ruf Petra an. Frag sie.",
              wert: "guterWeg",
              phoneTitle: "Anruf an Petra (gespeicherte Nummer)",
              phoneText: "Petra sagt: „Ich habe dir nichts geschickt. Das bin ich nicht.“",
              feedback: {
                leicht: "Tilda ruft Petra an. Sie nimmt die gespeicherte Nummer. Petra sagt: Die Anfrage ist nicht von mir. Jetzt weiß Tilda Bescheid. Sie nimmt nicht an.",
                einfach: "Tilda ruft Petra unter der gespeicherten Nummer an. Petra sagt, dass die Anfrage nicht von ihr kommt. Jetzt weiß Tilda Bescheid und nimmt nicht an.",
                alltag: "Tilda ruft Petra unter der gespeicherten Nummer an und erfährt, dass die Anfrage nicht von ihr stammt. Sie nimmt die Anfrage nicht an."
              },
              erfolg: {
                tun: {
                  leicht: "Du hast Tilda geraten: Ruf Petra an. Petra hat gesagt: Das bin ich nicht.",
                  einfach: "Du hast Tilda geraten, Petra anzurufen. Petra hat gesagt, dass die Anfrage nicht von ihr ist.",
                  alltag: "Du hast Tilda geraten, Petra anzurufen. Petra hat bestätigt, dass die Anfrage nicht von ihr stammt."
                },
                reaktionGeschichte: "„Danke. Jetzt weiß Petra auch Bescheid.“"
              },
              nextStep: "finish"
            },
            liste: {
              label: "Sieh in deine Freundes-Liste.",
              wert: "guterWeg",
              phoneTitle: "Facebook · Freunde",
              phoneText: "Petra Sommer · Freunde seit 2019.",
              feedback: {
                leicht: "Tilda sieht in ihre Freundes-Liste. Dort steht Petra schon. Die Anfrage kommt also von einem zweiten Profil. Jemand benutzt den Namen und das Foto von Petra. Tilda nimmt nicht an.",
                einfach: "Tilda sieht in ihre Freundesliste, und dort steht Petra schon. Die Anfrage kommt also von einem zweiten Profil, das Petras Namen und Foto benutzt. Tilda nimmt nicht an.",
                alltag: "Tilda sieht in ihrer Freundesliste nach: Petra steht dort bereits. Die Anfrage stammt demnach von einem zweiten Profil, das Petras Namen und Foto verwendet. Tilda nimmt sie nicht an."
              },
              erfolg: {
                tun: {
                  leicht: "Du hast Tilda geraten: Sieh in deine Freundes-Liste. Dort stand Petra schon. Tilda hat nicht angenommen.",
                  einfach: "Du hast Tilda geraten, in ihre Freundesliste zu sehen. Dort stand Petra schon, und Tilda hat nicht angenommen.",
                  alltag: "Du hast Tilda geraten, in ihrer Freundesliste nachzusehen. Petra stand dort bereits, und Tilda hat die Anfrage nicht angenommen."
                },
                reaktionGeschichte: "„Danke. Das Foto sah so echt aus. Ich wollte schon annehmen.“"
              },
              nextStep: "finish"
            },
            annehmen: {
              label: "Nimm an. Es ist ja Petra.",
              wert: "eigene",
              phoneTitle: "Neue Nachricht vom neuen Profil",
              phoneText: "„Hallo Tilda. Ich habe ein neues Konto. Kannst du mir kurz 50 Euro leihen? Ich zahle morgen zurück.“",
              feedback: {
                leicht: "Tilda nimmt an. Gleich schreibt das neue Profil. Es will 50 Euro leihen. Tilda wundert sich: So schreibt Petra sonst nicht. Tilda zahlt nichts. Sie entfernt das Profil wieder.",
                einfach: "Tilda nimmt an, und gleich schreibt das neue Profil, dass es 50 Euro leihen will. Tilda wundert sich, weil Petra sonst nicht so schreibt. Sie zahlt nichts und entfernt das Profil wieder.",
                alltag: "Tilda nimmt an. Kurz darauf bittet das neue Profil um 50 Euro. Tilda wundert sich, weil das nicht zu Petra passt. Sie zahlt nichts und entfernt das Profil wieder."
              },
              nextStep: "finish"
            }
          }
        }
      }
    },

    wa_ruhe: {
      id: "wa_ruhe",
      kicker: "WhatsApp · Entdeckungsreise",
      grad: "klar",
      title: "Ruhe in der Gruppe",
      regel: null,
      rule: {
        leicht: "Ich stelle mein Handy passend für mich ein.",
        einfach: "Ich stelle mein Handy so ein, dass es für mich passt.",
        alltag: "Ich richte mein Handy so ein, wie es zu meinem Alltag passt."
      },
      fragt: "Tilda",
      machtVor: "Alex",
      discover: {
        leicht: "Du bist in einer WhatsApp-Gruppe. Heute schreiben alle sehr viel. Dein Handy macht immer wieder einen Ton. Du willst Ruhe. Du willst aber in der Gruppe bleiben.",
        einfach: "Du bist in einer WhatsApp-Gruppe, in der heute sehr viel geschrieben wird. Dein Handy macht ständig einen Ton. Du möchtest Ruhe, aber in der Gruppe bleiben.",
        alltag: "In einer deiner WhatsApp-Gruppen wird heute sehr viel geschrieben, und dein Handy meldet sich ständig. Du möchtest Ruhe, die Gruppe aber nicht verlassen."
      },
      prediction: {
        leicht: {
          question: "Was glaubst du: Geht das?",
          options: ["Ja. Das geht.", "Nein. Ich muss die Gruppe verlassen.", "Ich probiere es aus."],
          aufloesung: "Du hast es gesehen: Die Gruppe ist stumm. Du bist noch dabei."
        },
        einfach: {
          question: "Was glaubst du: Geht das?",
          options: ["Ja. Das geht.", "Nein. Ich muss die Gruppe verlassen.", "Ich probiere es aus."],
          aufloesung: "Du hast es gesehen: Die Gruppe ist stumm, und du bist weiter dabei."
        },
        alltag: {
          question: "Was vermutest du: Ist das möglich?",
          options: ["Ja. Das geht.", "Nein. Ich muss die Gruppe verlassen.", "Ich probiere es aus."],
          aufloesung: "Du hast es gesehen: Die Gruppe ist stummgeschaltet, und du bleibst Mitglied."
        }
      },
      vorbild: {
        leicht: "Alex hat auch eine laute Gruppe. Er tippt auf die Gruppe. Er tippt auf: Stumm. Er wählt: 8 Stunden. Jetzt bleibt sein Handy still. Die Nachrichten kommen trotzdem an.",
        einfach: "Alex hat auch eine laute Gruppe. Er tippt auf die Gruppe, wählt „Stumm“ und dann „8 Stunden“. Jetzt bleibt sein Handy still, und die Nachrichten kommen trotzdem an.",
        alltag: "Auch Alex hat eine sehr aktive Gruppe. Er tippt auf die Gruppe, wählt „Stumm“ und „8 Stunden“. Sein Handy bleibt still, die Nachrichten kommen weiterhin an."
      },
      helpText: {
        leicht: "Tippe im Übungs-Handy auf die Gruppe. Danach wählst du: Stumm.",
        einfach: "Tippe im Übungs-Handy auf die Gruppe, wähle „Stumm“ und dann eine Dauer.",
        alltag: "Tippe im Übungs-Handy auf die Gruppe, wähle „Stumm“ und lege eine Dauer fest."
      },
      verlassenGrund: {
        leicht: "Du hast die Gruppe verlassen. Jetzt ist Ruhe. Du siehst aber keine neuen Nachrichten mehr. Du willst wieder dabei sein? Dann muss dich jemand neu einladen.",
        einfach: "Du hast die Gruppe verlassen. Jetzt ist Ruhe, aber du siehst auch keine neuen Nachrichten mehr. Wenn du wieder dabei sein willst, muss dich jemand neu einladen.",
        alltag: "Du hast die Gruppe verlassen. Es ist ruhig, du erhältst jedoch keine neuen Nachrichten mehr. Um wieder teilzunehmen, brauchst du eine neue Einladung."
      },
      erfolg: {
        stumm: {
          tun: {
            leicht: "Du hast die Gruppe stumm gestellt. Du bist noch in der Gruppe. Dein Handy bleibt still.",
            einfach: "Du hast die Gruppe stumm gestellt. Du bist weiter dabei, und dein Handy bleibt still.",
            alltag: "Du hast die Gruppe stummgeschaltet. Du bleibst Mitglied, und dein Handy bleibt still."
          },
          reaktionGeschichte: "„Danke. So bleibe ich dabei. Und ich habe Ruhe.“",
          reaktionSonst: "„So mache ich es auch. Meine Kegel-Gruppe schreibt sehr viel.“"
        }
      },
      understand: {
        leicht: "Die Gruppe ist jetzt stumm. Du bekommst die Nachrichten weiter. Dein Handy macht dafür keinen Ton. Du bleibst in der Gruppe.",
        einfach: "Die Gruppe ist jetzt stumm. Du bekommst die Nachrichten weiter, aber dein Handy macht dafür keinen Ton. Du bleibst in der Gruppe.",
        alltag: "Die Gruppe ist nun stummgeschaltet. Du erhältst die Nachrichten weiterhin, jedoch ohne Ton, und bleibst Mitglied der Gruppe."
      },
      apply: {
        leicht: "Gibt es bei dir eine laute Gruppe? Du kannst es jetzt an deinem Handy machen.",
        einfach: "Gibt es bei dir eine laute Gruppe? Du kannst es jetzt an deinem eigenen Handy ausprobieren.",
        alltag: "Hast du selbst eine sehr aktive Gruppe? Du kannst die Stummschaltung jetzt direkt an deinem Gerät einstellen."
      }
    },

    es_handy: {
      id: "es_handy",
      kicker: "Erste Schritte · Entdeckungsreise",
      grad: "klar",
      title: "Erste Schritte am Handy",
      rule: "Regel: Ich darf in Ruhe ausprobieren. Nichts geht kaputt.",
      discover: {
        leicht: "Du willst am Handy etwas ausprobieren: leiser stellen und wieder zurückgehen. Alles passiert im Übungs-Handy. Nichts geht kaputt.",
        einfach: "Du probierst heute zwei wichtige Schritte am Handy aus: den Ton leiser stellen und wieder einen Schritt zurückgehen.",
        alltag: "In dieser Entdeckungsreise probierst du grundlegende Bedien-Schritte am Handy aus: Lautstärke anpassen und sicher zurücknavigieren."
      },
      helpText: {
        leicht: "Tippe zuerst auf „Leiser“. Danach tippst du auf „Zurück“.",
        einfach: "Tippe im Übungs-Handy zuerst auf „Ton leiser“ und danach auf „Zurück“.",
        alltag: "Probiere im Übungs-Handy erst „Ton leiser“ und anschließend den „Zurück“-Knopf aus."
      },
      understand: {
        leicht: "Du hast den Ton leiser gestellt und bist sicher zurückgegangen. Alles lässt sich immer wieder ändern.",
        einfach: "Du hast den Ton leiser gestellt und bist einen Schritt zurückgegangen. Jede Einstellung lässt sich rückgängig machen.",
        alltag: "Du hast die Lautstärke angepasst und sicher zurücknavigiert. Grundlegende Einstellungen lassen sich jederzeit wieder ändern."
      },
      apply: {
        leicht: "Probiere heute an deinem eigenen Handy: Wo ist die Taste für leiser und lauter?",
        einfach: "Schau heute an deinem eigenen Handy nach, wo die Tasten für leiser und lauter sind.",
        alltag: "Teste direkt an deinem eigenen Gerät die Tasten für Lautstärke und Navigation."
      }
    },

    be_sp1: {
      id: "be_sp1",
      kicker: "Betrug · Schon passiert",
      grad: "ueberlegen",
      title: "Schon passiert: Daten eingegeben",
      regel: "geld",
      rule: regelMitPrefix("geld", "Geld oder Daten schon weg? Ich handle ruhig und rufe meine echte Bank an.", "Wenn Daten schon abgeschickt wurden, rufe ich direkt meine echte Bank an.", "Nach einer Dateneingabe auf einer falschen Seite sperre ich umgehend die Karte bei meiner Bank."),
      fragt: "Alex",
      machtVor: "Tilda",
      tildaSpeech: "Mist! Ich habe auf einen Paket-Link getippt und meine Karten-Nummer eingegeben. Jetzt merke ich: Die Seite war falsch. Was mache ich jetzt?",
      einstiegNachLernumgebung: {
        vorbild: {
          leicht: "Tilda hat auf einen falschen Paket-Link getippt. Sie hat dort ihre Bank-Daten eingegeben. Erst danach merkt sie den Fehler. Tilda bleibt ruhig. Sie öffnet ihre echte Bank-App und prüft die letzten Zahlungen. Dann sperrt sie ihre Karte über die bekannte Nummer der Bank.",
          einfach: "Tilda hat auf einen falschen Paket-Link getippt und dort ihre Bankdaten eingegeben. Erst danach fällt ihr der Fehler auf. Sie bleibt ruhig, öffnet ihre echte Bank-App und prüft die letzten Umsätze. Danach ruft sie die bekannte Sperr-Nummer ihrer Bank an.",
          alltag: "Tilda hat einen gefälschten Paket-Link angeklickt und dort ihre Bankdaten eingetragen. Erst danach bemerkt sie den Irrtum. Sie bewahrt Ruhe, öffnet direkt ihre echte Bank-App zur Kontrolle der Umsätze und lässt die Karte über die bekannte Rufnummer ihrer Bank sperren."
        },
        unterstuetzt: {
          leicht: "Alex sagt: Mist. Ich habe auf einen Paket-Link getippt. Ich habe meine Karten-Nummer eingegeben. Jetzt merke ich: Die Seite war falsch. Was mache ich jetzt?",
          einfach: "Alex sagt: „Mist, ich habe auf einen Paket-Link getippt und meine Kartendaten eingegeben. Jetzt merke ich, dass die Seite gefälscht war. Was soll ich jetzt tun?“",
          alltag: "Alex sagt: „Mir ist etwas passiert: Ich habe einen Paket-Link geöffnet und meine Kartendaten eingegeben. Jetzt sehe ich, dass die Seite gefälscht war. Wie soll ich jetzt vorgehen?“"
        },
        frei: {
          leicht: "Alex hat seine Karten-Nummer auf einer falschen Paket-Seite eingegeben. Was hilft jetzt sofort?",
          einfach: "Alex hat seine Kartendaten auf einer gefälschten Paket-Seite eingegeben. Was ist jetzt der wichtigste Schritt?",
          alltag: "Alex hat seine Kartendaten auf einer gefälschten Paket-Seite eingetragen. Welche Sofortmaßnahme hilft jetzt?"
        }
      },
      situation: {
        leicht: "Vor 10 Minuten kam eine SMS über ein Paket. Du hast den Link angetippt und deine Bank-Daten eingegeben. Jetzt siehst du: Die Seite ist falsch.",
        einfach: "Vor zehn Minuten hast du eine SMS zu einem Paket bekommen, den Link geöffnet und deine Bankdaten eingegeben. Jetzt merkst du, dass die Seite gefälscht ist.",
        alltag: "Vor zehn Minuten hast du eine Paket-SMS erhalten, den Link geöffnet und deine Bankdaten eingegeben. Erst jetzt fällt dir auf, dass die Seite gefälscht war."
      },
      vorbild: {
        leicht: "Tilda öffnet ihre echte Bank-App und ruft die bekannte Sperr-Nummer ihrer Bank an. Danach macht sie ein Foto von der SMS als Beweis.",
        einfach: "Tilda bleibt ruhig, prüft ihre echte Bank-App und sperrt ihre Karte direkt bei der Bank oder über 116 116.",
        alltag: "Tilda kontaktiert umgehend ihre echte Bank, lässt die Karte sperren und sichert die Nachricht per Screenshot."
      },
      task: {
        leicht: "Was tust du jetzt zuerst?",
        einfach: "Was tust du jetzt als Erstes?",
        alltag: "Welchen Schritt unternimmst du jetzt zuerst?"
      },
      helpText: {
        leicht: "Denke an dein Geld. Du kannst direkt deine echte Bank erreichen. Du musst dich nicht schämen.",
        einfach: "Schütze jetzt zuerst dein Konto. Du kannst deine Bank direkt über die bekannte Nummer oder App erreichen.",
        alltag: "Es zählt jetzt schnelles Handeln für dein Konto, nicht Schuldzuweisung. Kontaktiere deine Bank über einen bekannten, echten Weg."
      },
      phonePromptTitle: "SMS Paket-Dienst",
      phonePromptText: "Daten vor 10 Minuten auf der Paket-Seite abgeschickt.",
      wenigChoices: ["bankSperren", "warten"],
      choices: [
        { id: "warten", label: "Ich warte erst bis morgen ab." },
        { id: "linkNochmal", label: "Ich tippe noch mal auf den Link." },
        { id: "bankSperren", label: "Ich rufe meine echte Bank an." }
      ],
      outcomes: {
        warten: {
          wert: "hilftNochNicht",
          label: "Ich warte erst bis morgen ab.",
          phoneTitle: "Konto-Bewegung am Abend",
          phoneText: "Ohne Sperre wurde am Abend Geld vom Konto abgebucht.",
          feedback: {
            leicht: "Warten hilft nicht. Betrüger nutzen eingegebene Daten oft sehr schnell aus. Schnelles Handeln schützt dein Konto besser. Du kannst deine Bank sofort anrufen.",
            einfach: "Abwarten hilft hier nicht, weil Betrüger gestohlene Daten oft innerhalb kurzer Zeit nutzen. Je schneller du deine Bank informierst oder die Karte sperrst, desto besser schützt du dein Konto.",
            alltag: "Abwarten verschafft Tätern wertvolle Zeit, da abgegriffene Zahlungsdaten häufig kurzfristig missbraucht werden. Je früher du die Karte sperrst und deine Bank informierst, desto wirksamer lässt sich weiterer Schaden begrenzen."
          }
        },
        linkNochmal: {
          wert: "hilftNochNicht",
          label: "Ich tippe noch mal auf den Link.",
          phoneTitle: "Gefälschte Seite",
          phoneText: "Die falsche Seite fragt jetzt zusätzlich nach deinem Passwort.",
          feedback: {
            leicht: "Auf der falschen Seite kannst du nichts zurückholen. Die Seite fragt oft nach noch mehr Daten. Mach ein Foto vom Bildschirm als Beweis und schließe die Seite.",
            einfach: "Auf der gefälschten Seite lässt sich nichts rückgängig machen, sondern es droht die Abfrage weiterer Daten. Mache höchstens einen Screenshot als Nachweis, schließe die Seite und melde dich bei deiner Bank.",
            alltag: "Über die gefälschte Seite lassen sich Eingaben nicht widerrufen; oft folgen weitere Phishing-Abfragen. Sichere bei Bedarf einen Screenshot, schließe das Fenster und wende dich direkt an deine Bank."
          }
        },
        bankSperren: {
          wert: "guterWeg",
          label: "Ich rufe meine echte Bank an.",
          phoneTitle: "Echte Bank · Karte gesperrt",
          phoneText: "Die Bank sperrt die betroffene Karte sofort und prüft die letzten Umsätze.",
          feedback: {
            leicht: "Deine Daten sind weg? Dann zählt jede Minute. Du rufst deine Bank an. Oder du rufst 116 116 an. Danach machst du ein Foto von der SMS. Das ist ein Beweis für die Polizei.",
            einfach: "Wenn Daten eingegeben wurden, zählt schnelles Handeln ohne Scham. Über die echte Bank-Nummer oder den Sperr-Notruf 116 116 sperrst du deine Karte.",
            alltag: "Nach einer Dateneingabe ist rasches, ruhiges Handeln entscheidend – Schuldgefühle helfen niemandem."
          },
          erfolg: {
            tun: {
              leicht: "Du hast deine echte Bank angerufen. Deine Karte ist gesperrt.",
              einfach: "Du hast direkt deine Bank angerufen und die Karte sperren lassen.",
              alltag: "Du hast umgehend deine Bank kontaktiert und die Karte sperren lassen."
            },
            reaktionGeschichte: {
              leicht: "„Danke. Jetzt weiß ich: Auch nach einem Fehler kann ich sofort handeln.“",
              einfach: "„Danke! Gut zu wissen, dass man auch nach einem Fehler sofort selbst handeln kann.“",
              alltag: "„Danke für deinen Rat! Es beruhigt mich, dass ich auch nach einem Missgeschick sofort handeln kann.“"
            },
            reaktionSonst: {
              leicht: "„Ich bin froh. Die Karte ist erst mal gesperrt. Jetzt mache ich mir einen Tee.“",
              einfach: "„Ich bin erleichtert, dass die Karte gesperrt ist. Jetzt atme ich erst einmal durch.“",
              alltag: "„Ich bin froh, dass die Karte nun gesperrt ist – das nimmt erst einmal den Druck raus.“"
            }
          }
        }
      },
      naechsteSchritteNachher: {
        leicht: [
          "1. Deine echte Bank anrufen. Oder 116 116 anrufen. Halte für Karten deine IBAN bereit.",
          "2. Passwörter bei Bedarf in der echten App ändern. Zuerst dein E-Mail-Passwort.",
          "3. Ein Foto von der Nachricht machen. Die Nachricht noch nicht löschen.",
          "4. Fehlt Geld? Dann melde es der Polizei vor Ort oder über die Online-Wache.",
          "5. Du fühlst dich schlecht? Sprich mit einer Vertrauens-Person."
        ],
        einfach: [
          "1. Karte direkt bei deiner Bank oder über 116 116 sperren (IBAN bereithalten). Für Online-Banking immer direkt deine Bank anrufen.",
          "2. Betroffene Passwörter direkt auf der echten Webseite oder App ändern (zuerst das E-Mail-Konto).",
          "3. Screenshot der Nachricht machen und den Verlauf als Beleg aufbewahren.",
          "4. Bei Abbuchungen oder Betrug Anzeige bei der Polizei oder über die Online-Wache erstatten.",
          "5. Über Schreck oder Ärger mit einer vertrauten Person sprechen – Fehler passieren vielen."
        ],
        alltag: [
          "1. Karte sofort über die bekannte Rufnummer deiner Bank oder 116 116 (IBAN bereithalten) sperren; für Online-Banking immer direkt die eigene Bank kontaktieren.",
          "2. Betroffene Passwörter über die manuell geöffnete echte Webseite oder App ändern (zuerst das E-Mail-Konto).",
          "3. Nachricht und Absender per Screenshot sichern und nicht löschen.",
          "4. Den Vorfall bei der Polizei anzeigen (vor Ort oder über die Online-Wache deines Bundeslandes).",
          "5. Nach dem Schreck mit einer vertrauten Person sprechen – Betrüger gehen gezielt professionell vor."
        ]
      },
      apply: {
        leicht: "Speichere die echte Telefon-Nummer deiner Bank in Ruhe ein. Dann findest du sie sofort.",
        einfach: "Lege dir die bekannte Rufnummer deiner Bank und die 116 116 griffbereit ab.",
        alltag: "Halte die echte Servicenummer deiner Bank sowie 116 116 für den Notfall griffbereit."
      }
    },

    tildas_samstag: {
      id: "tildas_samstag",
      kicker: "Alltagsgeschichte · 4 Folgen",
      grad: "klar",
      title: "Tildas Samstag",
      regel: "selbst",
      rule: regelMitPrefix("selbst", "Ich prüfe kurz und entscheide dann selbst in Ruhe.", "Ich prüfe in Ruhe und entscheide dann selbstbestimmt.", "Ich prüfe kurz die Angaben und treffe meine Entscheidung in Ruhe."),
      fragt: "Tilda",
      machtVor: "Alex",
      episoden: [
        {
          folge: 1,
          grad: "klar",
          title: "Tildas Samstag · Folge 1: Konzertkarte",
          uebergang: {
            leicht: "Es ist Samstag am Morgen. Tilda freut sich auf ein Konzert heute Abend.",
            einfach: "Es ist Samstagmorgen. Tilda möchte für heute Abend noch eine Konzertkarte kaufen.",
            alltag: "Es ist Samstagmorgen, und Tilda möchte für heute Abend noch kurzfristig eine Konzertkarte kaufen."
          },
          situation: {
            leicht: "Tilda sucht im Internet nach einer Karte. Sie findet 2 Shops. Im ersten Shop kostet die Karte 28 Euro. Die Seite heißt: Kultur-Haus Stadtmitte. Im zweiten Shop kostet die Karte nur 9 Euro. Dort steht: Nur noch 1 Minute. Es gibt keine Adresse im Impressum.",
            einfach: "Tilda findet zwei Webseiten für die Karte. Im bekannten Shop „Kultur-Haus Stadtmitte“ kostet das Ticket 28 Euro. Auf einer fremden Webseite kostet dieselbe Karte nur 9 Euro, mit einem Timer von einer Minute und ohne Adresse im Impressum.",
            alltag: "Tilda stößt bei der Suche auf zwei Anbieter: Das örtliche Kulturhaus verlangt regulär 28 Euro. Eine unbekannte Webseite wirbt mit 9 Euro, zeigt einen Ein-Minuten-Countdown und nennt keine Adresse im Impressum."
          },
          vorbild: {
            leicht: "Alex prüft immer zuerst, ob eine echte Adresse im Impressum steht. Zeitdruck ignoriert er.",
            einfach: "Alex prüft zuerst Impressum und Preis, statt auf künstlichen Zeitdruck hereinzufallen.",
            alltag: "Alex vergleicht Anbieterangaben und Impressum, bevor er eine Zahlung auslöst."
          },
          task: {
            leicht: "Tilda fragt dich: Wo soll sie die Karte kaufen?",
            einfach: "Tilda fragt dich: Auf welcher Seite soll sie das Ticket kaufen?",
            alltag: "Tilda fragt dich um Rat: Bei welchem Anbieter sollte sie buchen?"
          },
          helpText: {
            leicht: "Schau auf den Preis, den Zeit-Druck und das Impressum.",
            einfach: "Achte auf einen realistischen Preis, fehlenden Zeitdruck und ein vollständiges Impressum.",
            alltag: "Vergleiche Preis, Zeitdruck und die Vollständigkeit des Impressums."
          },
          phonePromptTitle: "Konzertkarten-Suche",
          phonePromptText: "1) Kultur-Haus Stadtmitte: 28 € · mit Adresse.  2) Schnäppchen-Ticket: 9 € · „Nur noch 1 Minute!“",
          wenig: ["billigShop", "kulturHaus"],
          choices: [
            { id: "billigShop", label: "Sie kauft schnell für 9 Euro." },
            { id: "kulturHaus", label: "Sie kauft beim Kultur-Haus Stadtmitte." },
            { id: "adressePruefen", label: "Sie sucht erst die Telefon-Nummer vom Kultur-Haus." }
          ],
          outcomes: {
            billigShop: {
              wert: "hilftNochNicht",
              phoneTitle: "Leere Seite",
              phoneText: "Nach dem Tippen kommt keine Karte. Die Seite lädt nicht mehr.",
              feedback: {
                leicht: "Ein extrem kleiner Preis und Zeit-Druck warnen dich. Fehlt eine echte Adresse im Impressum, kaufst du dort besser nicht.",
                einfach: "Ein ungewöhnlich niedriger Preis mit künstlichem Zeitdruck und fehlendem Impressum spricht gegen den Shop.",
                alltag: "Unplausibel niedrige Preise in Kombination mit Zeitdruck und fehlendem Impressum deuten auf einen unseriösen Shop hin."
              }
            },
            kulturHaus: {
              wert: "guterWeg",
              phoneTitle: "E-Mail vom Kultur-Haus",
              phoneText: "Die Konzertkarte für 28 Euro ist sicher im Postfach angekommen.",
              feedback: {
                leicht: "Die Seite vom Kultur-Haus hat eine echte Adresse und faire Preise. So kauft Tilda sicher ein.",
                einfach: "Beim bekannten Veranstalter stimmen Impressum, Preis und Ablauf.",
                alltag: "Der bekannte Anbieter bietet vollständige Kontaktangaben und realistische Preise."
              },
              erfolg: {
                tun: {
                  leicht: "Du hast dem Kultur-Haus vertraut und auf das Impressum geachtet.",
                  einfach: "Du hast auf Impressum und Preis geachtet und den echten Shop gewählt.",
                  alltag: "Du hast Preis und Anbieterangaben geprüft und den seriösen Shop gewählt."
                },
                reaktionGeschichte: {
                  leicht: "„Die Karte ist da. Ich freue mich auf heute Abend.“",
                  einfach: "„Danke! Die Karte ist angekommen. Ich freue mich richtig auf heute Abend.“",
                  alltag: "„Danke für deinen Rat – mein Ticket ist da, jetzt kann der Samstag richtig losgehen.“"
                }
              }
            },
            adressePruefen: {
              wert: "auchMoeglich",
              phoneTitle: "Kultur-Haus · Kontakt",
              phoneText: "Adresse, Telefonnummer und Öffnungszeiten der Abendkasse sind sichtbar.",
              feedback: {
                leicht: "Auch Telefon und Straße prüfen ist ein guter Weg. So merkst du schnell: Der Anbieter ist echt.",
                einfach: "Die Kontaktdaten selbst gegenzuprüfen bestätigt dir, dass der Veranstalter echt ist.",
                alltag: "Eine eigene Prüfung von Telefonnummer und Anschrift bestätigt die Echtheit des Anbieters zusätzlich."
              }
            }
          },
          apply: {
            leicht: "Achte beim nächsten Kauf kurz auf die echte Adresse im Impressum.",
            einfach: "Prüfe bei unbekannten Shops kurz das Impressum, bevor du bezahlst.",
            alltag: "Ein kurzer Blick ins Impressum schützt vor Zeitdruck-Fallen."
          }
        },
        {
          folge: 2,
          grad: "ueberlegen",
          title: "Tildas Samstag · Folge 2: Fremde Nummer",
          uebergang: {
            leicht: "Es ist Mittag. Tilda will ihre Freundin Meryem zum Konzert einladen.",
            einfach: "Mittags will Tilda ihre Freundin Meryem zum Konzert einladen.",
            alltag: "Gegen Mittag möchte Tilda ihre Freundin Meryem einladen, abends mitzukommen."
          },
          situation: {
            leicht: "Tilda öffnet WhatsApp. Sie schreibt an Meryem. Plötzlich schreibt eine fremde Nummer: Hallo, ich bin auch heute Abend da. Schick mir mal deine Adresse, ich hol dich ab.",
            einfach: "Während Tilda mit Meryem schreibt, meldet sich eine fremde Nummer per WhatsApp: „Hallo, ich bin heute Abend auch dort. Schick mir kurz deine Adresse, dann hole ich dich ab.“",
            alltag: "Während Tilda Meryem schreibt, geht eine Nachricht von einer unbekannten Rufnummer ein: „Hallo, ich bin heute Abend auch dort. Schick mir mal deine Adresse, ich hole dich ab.“"
          },
          vorbild: {
            leicht: "Alex gibt einer unbekannten Nummer niemals seine Adresse.",
            einfach: "Alex fragt höchstens nach dem Namen oder blockiert fremde Nummern, die nach Daten fragen.",
            alltag: "Alex teilt keine Wohnadresse, solange die Identität nicht geklärt ist."
          },
          task: {
            leicht: "Tilda kennt die Nummer nicht. Was soll sie machen?",
            einfach: "Tilda kennt die Nummer nicht. Wie soll sie reagieren?",
            alltag: "Tilda kennt die Nummer nicht. Welcher Schritt passt hier?"
          },
          helpText: {
            leicht: "Deine Adresse ist privat. Du kennst diese Nummer nicht.",
            einfach: "Teile keine Wohnadresse mit einer unbekannten Nummer.",
            alltag: "Gib persönliche Adressdaten nicht an unbekannte Rufnummern weiter."
          },
          phonePromptTitle: "WhatsApp · Unbekannte Nummer",
          phonePromptText: "+49 170 5550192: „Hallo, schick mir mal deine Adresse, ich hol dich ab.“",
          wenig: ["nichtAntworten", "adresseSenden"],
          choices: [
            { id: "notierenUndPruefen", label: "Sie fragt erst: Wer schreibt mir?", gleichwertig: true },
            { id: "adresseSenden", label: "Sie schickt ihre Adresse direkt ab." },
            { id: "nichtAntworten", label: "Sie antwortet nicht und blockiert.", gleichwertig: true }
          ],
          outcomes: {
            notierenUndPruefen: {
              wert: "guterWeg",
              phoneTitle: "Chat · Rückfrage",
              phoneText: "Auf die Frage nach dem Namen kommt keine klare Antwort.",
              feedback: {
                leicht: "Du fragst nach dem Namen. Du gibst keine Daten weiter. Das ist ein guter Test. Kommt keine klare Antwort? Dann beendest du den Chat.",
                einfach: "Kurz nach dem Namen zu fragen, ohne etwas Privates zu verraten, schafft Klarheit.",
                alltag: "Eine kurze Rückfrage nach dem Namen ohne Preisgabe eigener Daten klärt rasch, ob ein echtes Versehen vorliegt."
              },
              erfolg: {
                tun: {
                  leicht: "Du hast keine Adresse gesendet und erst nach dem Namen gefragt.",
                  einfach: "Du hast keine Adresse verschickt und zuerst geklärt, wer schreibt.",
                  alltag: "Du hast keine persönlichen Daten geteilt und zuerst nachgefragt."
                },
                reaktionGeschichte: {
                  leicht: "„Stimmt. Meine Adresse gebe ich keiner fremden Nummer. Meryem kommt gleich vorbei.“",
                  einfach: "„Guter Punkt. Meine Adresse geht an keine fremde Nummer. Zum Glück kommt Meryem gleich.“",
                  alltag: "„Danke – meine Adresse behalte ich für mich. Jetzt freue ich mich auf Meryem.“"
                }
              }
            },
            adresseSenden: {
              wert: "hilftNochNicht",
              phoneTitle: "Adresse geteilt",
              phoneText: "Eine unbekannte Nummer kennt jetzt Tildas Wohnort.",
              feedback: {
                leicht: "Du kennst die fremde Nummer nicht. Deine Adresse ist privat. Du kennst die Person? Dann darfst du die Adresse geben.",
                einfach: "Ohne zu wissen, wer hinter einer fremden Nummer steckt, teilst du keine Wohnadresse.",
                alltag: "Eine fremde Rufnummer kann jeder Person gehören. Persönliche Adressdaten gibt man erst weiter, wenn die Identität geklärt ist."
              }
            },
            nichtAntworten: {
              wert: "guterWeg",
              phoneTitle: "Nummer blockiert",
              phoneText: "Der fremde Chat ist weg. Meryem schreibt: „Ich bringe Kuchen mit!“",
              feedback: {
                leicht: "Auf eine fremde Nachricht musst du nicht antworten. Du entscheidest selbst, wer dir schreiben darf.",
                einfach: "Auf Nachrichten von Unbekannten musst du nicht antworten. Blockieren schützt deine Ruhe.",
                alltag: "Du bist nicht verpflichtet, unbekannten Kontakten zu antworten. Blockieren beendet die Störung sofort."
              },
              erfolg: {
                tun: {
                  leicht: "Du hast nicht geantwortet. Deine Adresse blieb geheim.",
                  einfach: "Du hast nicht geantwortet und deine Adresse für dich behalten.",
                  alltag: "Du hast nicht geantwortet und deine Wohnanschrift geschützt."
                },
                reaktionGeschichte: {
                  leicht: "„Genau richtig. Jetzt warten Meryem und ich auf den Kuchen.“",
                  einfach: "„Das fühlt sich gleich ruhiger an. Jetzt hole ich Teller für Meryems Kuchen.“",
                  alltag: "„Danke – jetzt ist Ruhe im Chat und ich freue mich auf den Nachmittag mit Meryem.“"
                }
              }
            }
          },
          apply: {
            leicht: "Deine Adresse gibst du nur an Menschen, die du sicher kennst.",
            einfach: "Behalte Adresse und private Daten bei unbekannten Nummern für dich.",
            alltag: "Prüfe bei unbekannten Kontakten immer erst die Identität."
          }
        },
        {
          folge: 3,
          grad: "klar",
          title: "Tildas Samstag · Folge 3: Foto im Garten",
          uebergang: {
            leicht: "Nachmittags sitzen Tilda, Alex und Meryem im Garten. Alle lachen viel.",
            einfach: "Am Nachmittag sitzen Tilda, Alex und Meryem gemütlich bei Kaffee und Kuchen zusammen.",
            alltag: "Am Nachmittag sitzen Tilda, Alex und Meryem entspannt im Garten beisammen."
          },
          situation: {
            leicht: "Tilda macht ein schönes Foto von allen 3. Sie will es in ihrer Story teilen. Meryem sagt lachend: Ich habe noch Kuchen im Mund. Bitte warte kurz.",
            einfach: "Tilda fotografiert die Runde und möchte das Bild in ihrer Story teilen. Meryem lacht und sagt: „Auf dem Bild habe ich gerade den Mund voll – warte bitte kurz.“",
            alltag: "Tilda macht ein schönes Gruppenfoto und würde es gern in ihrer Story teilen. Meryem bittet darum, kurz zu warten, weil sie auf dem Schnappschuss gerade isst."
          },
          vorbild: {
            leicht: "Alex fragt immer alle auf dem Foto, bevor er etwas teilt.",
            einfach: "Alex respektiert sofort, wenn jemand ein Foto nicht im Internet sehen möchte.",
            alltag: "Alex holt vor dem Posten immer die Zustimmung aller Abgebildeten ein."
          },
          task: {
            leicht: "Was macht Tilda jetzt am besten?",
            einfach: "Wie reagiert Tilda jetzt am besten?",
            alltag: "Wie sollte Tilda jetzt vorgehen?"
          },
          helpText: {
            leicht: "Auf dem Foto sind 3 Menschen. Alle 3 entscheiden zusammen.",
            einfach: "Respektiere Meryems Bitte und entscheidet gemeinsam.",
            alltag: "Bei Gruppenfotos zählt das Einverständnis aller."
          },
          phonePromptTitle: "Kamera · Gruppenfoto",
          phonePromptText: "Tilda, Alex und Meryem beim Kuchen im Garten.",
          wenig: ["neuesFoto", "sofortPosten"],
          choices: [
            { id: "neuesFoto", label: "Sie fragt alle und macht ein neues Foto." },
            { id: "sofortPosten", label: "Sie teilt das Foto trotzdem sofort." },
            { id: "privatBehalten", label: "Sie teilt kein Foto und schickt es privat." }
          ],
          outcomes: {
            neuesFoto: {
              wert: "guterWeg",
              phoneTitle: "Neues Foto",
              phoneText: "Alle drei lächeln auf dem neuen Bild und sind einverstanden.",
              feedback: {
                leicht: "Ein Foto mit anderen gehört allen zusammen. Kurz fragen kostet nichts. So freuen sich nachher alle über das Bild.",
                einfach: "Auf einem Gruppenfoto entscheiden alle mit. Ein zweites Foto nach Absprache macht den Moment für alle schön.",
                alltag: "Bei gemeinsamen Fotos zählt die Zustimmung aller Abgebildeten."
              },
              erfolg: {
                tun: {
                  leicht: "Du hast gefragt. Alle 3 mögen das neue Foto.",
                  einfach: "Du hast kurz gefragt und ein Foto geteilt, das alle mögen.",
                  alltag: "Du hast die Zustimmung aller eingeholt und ein gemeinsames Bild gewählt."
                },
                reaktionGeschichte: {
                  leicht: "„Schau mal, wie schön das neue Foto ist. Alle sind zufrieden.“",
                  einfach: "„Schau mal – jetzt gefällt das Bild wirklich uns allen dreien.“",
                  alltag: "„Schön geworden! So haben alle Freude an dem gemeinsamen Foto.“"
                }
              }
            },
            sofortPosten: {
              wert: "hilftNochNicht",
              phoneTitle: "Story veröffentlicht",
              phoneText: "Meryem sieht das Bild und ist enttäuscht.",
              feedback: {
                leicht: "Meryem hat Nein gesagt. Jeder Mensch entscheidet selbst über sein eigenes Bild.",
                einfach: "Wenn jemand auf einem Foto nicht gezeigt werden möchte, respektierst du diesen Wunsch.",
                alltag: "Jede Person bestimmt über Bilder von sich selbst. Ein Nein gilt auch im Freundeskreis."
              }
            },
            privatBehalten: {
              wert: "auchMoeglich",
              phoneTitle: "Kleiner Gruppen-Chat",
              phoneText: "Nur Alex und Meryem sehen das Foto in ihrem privaten Chat.",
              feedback: {
                leicht: "Man muss nicht jedes schöne Foto im Internet teilen. Im kleinen Chat bleibt die Erinnerung unter euch.",
                einfach: "Auch im kleinen Kreis zu bleiben ist eine gute Wahl, wenn alle einverstanden sind.",
                alltag: "Nicht jeder schöne Moment gehört ins öffentliche Netz."
              }
            }
          },
          apply: {
            leicht: "Vor dem Teilen eines Fotos kurz fragen: „Ist das Bild für euch okay?“",
            einfach: "Frage vor dem Teilen gemeinsamer Fotos immer kurz alle Beteiligten.",
            alltag: "Die kurze Frage vor dem Posten hält gemeinsame Erinnerungen angenehm."
          }
        },
        {
          folge: 4,
          grad: "klar",
          title: "Tildas Samstag · Folge 4: Abendpause",
          uebergang: {
            leicht: "Das Konzert war richtig gut. Jetzt ist Tilda spät am Abend wieder zu Hause.",
            einfach: "Nach dem schönen Konzert kommt Tilda am späten Abend wieder nach Hause.",
            alltag: "Nach dem gelungenen Konzertabend kehrt Tilda spätabends zufrieden nach Hause zurück."
          },
          situation: {
            leicht: "Tilda schaut im Bett noch Videos auf dem Handy. Es ist schon 23 Uhr. Ihre Augen sind müde. Aber ein Video läuft nach dem anderen weiter.",
            einfach: "Im Bett schaut Tilda noch kurze Videos vom Konzert. Es ist bereits 23 Uhr, ihre Augen werden müde, doch automatisch läuft schon der nächste Clip.",
            alltag: "Im Bett sieht sich Tilda noch Konzert-Clips an. Es ist 23 Uhr und sie ist müde, doch die App startet automatisch ein Video nach dem anderen."
          },
          vorbild: {
            leicht: "Alex stellt sich abends eine Pausen-Erinnerung oder legt das Handy ganz weg.",
            einfach: "Alex setzt sich abends bewusst eine Pause, damit er gut schläft.",
            alltag: "Alex nutzt eine Pausen-Erinnerung, wenn Videos automatisch weiterlaufen."
          },
          task: {
            leicht: "Was tut Tilda jetzt gut?",
            einfach: "Was tut Tilda jetzt gut?",
            alltag: "Was hilft Tilda jetzt für einen guten Tagesabschluss?"
          },
          helpText: {
            leicht: "Du bestimmst selbst, wann für heute Schluss ist.",
            einfach: "Eine Pausen-Erinnerung oder das Ausschalten hilft beim ruhigen Abschluss.",
            alltag: "Du entscheidest selbst über deine Bildschirmzeit am Abend."
          },
          phonePromptTitle: "Video-App · 23:00 Uhr",
          phonePromptText: "Nächstes Konzert-Video startet in 3 Sekunden …",
          wenig: ["nochZehn", "pauseMachen"],
          choices: [
            { id: "pauseMachen", label: "Sie stellt die Pausen-Erinnerung ein.", gleichwertig: true },
            { id: "einfachAusschalten", label: "Sie schaltet das Handy ganz aus.", gleichwertig: true },
            { id: "nochZehn", label: "Sie schaut weiter bis Mitternacht." }
          ],
          outcomes: {
            pauseMachen: {
              wert: "guterWeg",
              phoneTitle: "Pausen-Erinnerung aktiv",
              phoneText: "Hinweis: „Zeit für eine Pause.“ Tilda legt das Handy ruhig weg.",
              feedback: {
                leicht: "Du bestimmst über deine Zeit am Handy. Eine Erinnerung hilft beim rechtzeitigen Aufhören und ruhigen Schlafen.",
                einfach: "Eine Pausen-Erinnerung hilft, selbst den Schlusspunkt zu setzen und erholt zu schlafen.",
                alltag: "Zeitbegrenzungen unterstützen dabei, rechtzeitig abzuschalten."
              },
              erfolg: {
                tun: {
                  leicht: "Du hast die Pausen-Erinnerung eingestellt. Das Handy liegt jetzt ruhig.",
                  einfach: "Du hast eine Pausen-Erinnerung aktiviert und bewusst Schluss gemacht.",
                  alltag: "Du hast die Pausen-Erinnerung eingestellt und den Abend ruhig beendet."
                },
                reaktionGeschichte: {
                  leicht: "„Das war ein schöner Samstag. Gute Nacht.“",
                  einfach: "„Was für ein schöner Samstag. Jetzt schlafe ich in Ruhe.“",
                  alltag: "„Ein rundum schöner Samstag – jetzt mache ich ganz entspannt Feierabend.“"
                }
              }
            },
            einfachAusschalten: {
              wert: "guterWeg",
              phoneTitle: "Bildschirm aus",
              phoneText: "Das Handy ist aus. Im Zimmer ist es ruhig.",
              feedback: {
                leicht: "Das Handy direkt auszumachen ist ein klarer Schritt. Du verpasst nichts Wichtiges über Nacht.",
                einfach: "Das Gerät einfach auszuschalten beendet das Weiterwischen sofort und schenkt Ruhe.",
                alltag: "Das bewusste Ausschalten setzt eine klare Grenze und ermöglicht erholsame Nachtruhe."
              },
              erfolg: {
                tun: {
                  leicht: "Du hast das Handy ausgeschaltet. Du bestimmst deine Pause.",
                  einfach: "Du hast das Gerät ausgeschaltet und deine eigene Pause gesetzt.",
                  alltag: "Du hast das Handy ausgeschaltet und selbstbestimmt Ruhe gewählt."
                },
                reaktionGeschichte: {
                  leicht: "„So schön still hier. Das tut gut nach dem tollen Tag.“",
                  einfach: "„Wie angenehm ruhig es sofort ist. Danke dir!“",
                  alltag: "„Wie wohltuend still es gleich wird – danke für den guten Abschluss.“"
                }
              }
            },
            nochZehn: {
              wert: "eigene",
              phoneTitle: "00:15 Uhr",
              phoneText: "Die Augen werden schwer; das nächste Video läuft noch.",
              feedback: {
                leicht: "Du darfst natürlich weiter schauen. Merkst du Müdigkeit? Dann hilft beim nächsten Mal ein Wecker oder die Pausen-Erinnerung.",
                einfach: "Das ist deine Entscheidung. Wenn du merkst, dass die Zeit verfliegt, unterstützt dich beim nächsten Mal eine Erinnerung.",
                alltag: "Natürlich entscheidest du selbst über deine Schlafenszeit; für künftige Abende kann eine feste Erinnerung helfen."
              }
            }
          },
          apply: {
            leicht: "Probiere heute Abend aus, das Handy 15 Minuten vor dem Schlafen wegzulegen.",
            einfach: "Nutze bei Bedarf eine Pausen-Erinnerung für deinen eigenen Tagesabschluss.",
            alltag: "Eine feste Pausen-Erinnerung hilft, abends entspannt abzuschalten."
          }
        }
      ]
    },
    begleiten_ueben: {
      id: "begleiten_ueben",
      kicker: "Begleiten üben",
      grad: "ueberlegen",
      title: "Helfen, ohne das Handy abzunehmen",
      regel: "noetig",
      rule: {
        leicht: "Ich helfe mit Worten und Fragen. Das Handy bleibt in der Hand der anderen Person.",
        einfach: "Ich unterstütze mit Hinweisen auf Augenhöhe, ohne das Gerät aus der Hand zu nehmen.",
        alltag: "Gute Begleitung unterstützt mit Fragen und Hinweisen, lässt Gerät und Entscheidung aber bei der lernenden Person."
      },
      fragt: "Alex",
      machtVor: "Tilda",
      situation: {
        leicht: "Du begleitest Jonas beim Lernen. Jonas möchte in einer App den Ton leiser stellen. Er findet das Zeichen nicht und schaut dich fragend an.",
        einfach: "Du begleitest Jonas beim Üben. Er möchte in einer App die Benachrichtigungen stummschalten, findet das Menü aber nicht gleich.",
        alltag: "Du unterstützt Jonas beim Üben. Er möchte eine Chat-Gruppe stummschalten, zögert vor den Einstellungen und schaut dich fragend an."
      },
      vorbild: {
        leicht: "Tilda legt ihre Hände ruhig auf den Tisch. Sie zeigt mit dem Finger auf das kleine Zahnrad und fragt: Willst du dort tippen?",
        einfach: "Tilda lässt das Handy bei Jonas liegen. Sie deutet auf das Menü-Zeichen und fragt, ob er dort einmal tippen möchte.",
        alltag: "Tilda behält die Hände bei sich, benennt das Zahnrad-Symbol und überlässt Jonas das Antippen und Entscheiden."
      },
      task: {
        leicht: "Jonas findet die Einstellung nicht. Was machst du als Begleitung?",
        einfach: "Jonas schaut dich fragend an. Wie unterstützt du ihn jetzt?",
        alltag: "Jonas zögert bei den Einstellungen. Wie begleitest du ihn auf Augenhöhe?"
      },
      helpText: {
        leicht: "Überlege: Wie lernt Jonas am meisten, ohne dass er das Gefühl hat, es nicht selbst zu können?",
        einfach: "Achte darauf, dass Gerät und Entscheidung bei Jonas bleiben.",
        alltag: "Gute Begleitung stärkt Selbstständigkeit: erklären oder zeigen statt abnehmen."
      },
      phonePromptTitle: "Jonas’ Handy · Einstellungen",
      phonePromptText: "Jonas hält sein Handy in der Hand. Oben rechts ist ein kleines Zeichen mit drei Punkten.",
      choices: [
        { id: "abnehmen", label: "Ich nehme das Handy und stelle es schnell ein." },
        { id: "erklaeren", label: "Ich zeige auf die drei Punkte und frage: Willst du dort tippen?", gleichwertig: true },
        { id: "zusammen", label: "Ich frage: Willst du selbst suchen oder soll ich es an meinem Handy zeigen?", gleichwertig: true }
      ],
      outcomes: {
        abnehmen: {
          wert: "hilftNochNicht",
          phoneTitle: "Fertig eingestellt",
          phoneText: "Der Ton ist jetzt aus. Aber Jonas hat den Weg nicht selbst gesehen.",
          feedbackTitle: "Ergebnis",
          feedback: {
            leicht: "Das ging schnell. Aber beim nächsten Mal weiß Jonas wieder nicht, wo er tippen muss. Besser: Er tippt selbst.",
            einfach: "Das Problem ist kurz gelöst, aber Jonas konnte den Weg nicht selbst üben. Zeigen und Fragen hilft ihm dauerhaft mehr.",
            alltag: "Schnelle Übernahme spart kurz Zeit, nimmt aber die Lernerfahrung. Ein Hinweis bei liegendem Gerät stärkt die Selbstständigkeit."
          }
        },
        erklaeren: {
          wert: "guterWeg",
          phoneTitle: "Menü offen",
          phoneText: "Jonas tippt selbst auf die drei Punkte. Das Menü öffnet sich.",
          feedbackTitle: "Das hat gut geklappt.",
          feedback: {
            leicht: "Super! Jonas hat den Knopf selbst gedrückt. So merkt er sich den Weg für das nächste Mal.",
            einfach: "Sehr gut begleitet: Durch deinen ruhigen Hinweis konnte Jonas den Schritt selbst ausführen.",
            alltag: "Gelungene Begleitung auf Augenhöhe: Jonas behält das Gerät und erlebt den eigenen Erfolg."
          },
          erfolg: {
            tun: {
              leicht: "Du hast das Handy bei Jonas gelassen und ihn selbst tippen lassen.",
              einfach: "Du hast einen ruhigen Hinweis gegeben und Jonas die Handlung überlassen.",
              alltag: "Du hast auf Augenhöhe unterstützt, ohne das Gerät zu übernehmen."
            },
            reaktionGeschichte: {
              leicht: "Jonas lächelt: „Ah, da oben! Danke, jetzt weiß ich, wo ich suchen muss.“",
              einfach: "Jonas sagt zufrieden: „Ach, da ist das versteckt. Gut, dass ich es selbst gedrückt habe!“",
              alltag: "Jonas nickt zufrieden: „Super, jetzt finde ich den Weg beim nächsten Mal alleine.“"
            }
          }
        },
        zusammen: {
          wert: "guterWeg",
          phoneTitle: "Auf Augenhöhe",
          phoneText: "Jonas sagt: „Zeig es mir kurz auf deinem Handy, dann mache ich es auf meinem.“",
          feedbackTitle: "Das hat gut geklappt.",
          feedback: {
            leicht: "Sehr gut! Du hast gefragt, was Jonas braucht. Er entscheidet selbst über sein Tempo.",
            einfach: "Prima: Mit deiner Frage gibst du Jonas die Wahl, wie er am liebsten lernt.",
            alltag: "Vorbildliche Begleitung: Durch deine offene Frage bleibt die Entscheidung vollständig bei Jonas."
          },
          erfolg: {
            tun: {
              leicht: "Du hast Jonas gefragt, wie er am besten lernen möchte.",
              einfach: "Du hast Jonas die Wahl gelassen, wie du ihm helfen darfst.",
              alltag: "Du hast eine freiwillige, respektvolle Unterstützung auf Augenhöhe angeboten."
            },
            reaktionGeschichte: {
              leicht: "Jonas sagt: „Danke, dass du fragst. So macht das Üben Spaß.“",
              einfach: "Jonas lächelt: „Danke, dass du mich fragst – so fühle ich mich sicher.“",
              alltag: "Jonas sagt: „Vielen Dank für die Ruhe, so behalte ich alles viel besser.“"
            }
          }
        }
      },
      apply: {
        leicht: "Nimm bei der nächsten Frage die Hände erst einmal zurück und frage: Wo würdest du tippen?",
        einfach: "Lass bei der nächsten Begleitung das Gerät in der Hand der lernenden Person.",
        alltag: "Achte in der nächsten Begleitsituation bewusst darauf, zuerst zu fragen statt direkt einzugreifen."
      }
    }
  }
};
})(typeof window !== "undefined" ? window : globalThis);
