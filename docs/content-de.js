/* ============================================================
   Sprachfassungen (Einfache Sprache + Alltagssprache)
   Der Basistext in topics.js ist bereits Leichte Sprache.
   Hier kommen je Lektion die Fassungen "einfach" und "standard" dazu.
   Verknüpfung am Ende der Datei: applyContentVersions().

   Aufbau:  CONTENT_VERSIONS[themaId][lektionTitel] = { einfach:{...}, standard:{...} }
   Felder pro Fassung (optional): text[], bullets[], examples[], warning, success, remember
   - einfach: kurze, klare Sätze (etwa B1), Bilder optional
   - standard: Fließtext, keine Piktogramme, keine Aufzählungen (bullets: [])
   ============================================================ */

const CONTENT_VERSIONS = {
  datenschutz: {
    /* Datenschutz-Musterthema: Lektionen neu seit Paket 2 (Leicht in topics.js =
       Referenz), Einfach und Alltag seit Paket 5 (28.09.2026). Gleiche Aussage,
       gleiche A/B/C-Fälle, gleicher Lernweg – nur Sprache und Verdichtung anders.
       Die Plan-Schritte (bullets) sind in allen Stufen wortgleich: Es sind die
       Handlungssätze der Kette (§2, Ausnahme für tun). */
    "Start": {
      "einfach": {
        "text": [
          {
            "text": "Oft will eine App oder ein Formular im Internet Daten von dir haben."
          },
          {
            "text": "Manchmal willst du auch selbst etwas teilen, zum Beispiel ein Foto."
          },
          {
            "text": "Manche Daten sind dafür nötig, andere Daten sind es nicht."
          },
          {
            "text": "Du lernst hier einen Plan mit 5 Schritten. Mit diesem Plan prüfst du genau, und dann entscheidest du selbst."
          },
          {
            "text": "Wenn du unsicher bist, tippst du unten auf Hilfe."
          }
        ]
      },
      "standard": {
        "text": [
          {
            "text": "Apps und Online-Formulare fragen oft nach deinen Daten – und manchmal willst du selbst etwas teilen, etwa ein Foto. Manche dieser Daten sind für den Zweck nötig, andere nicht. In diesem Kapitel lernst du einen Plan mit fünf Schritten: Damit prüfst du solche Situationen und entscheidest selbst. Wenn du unsicher bist, tippe unten auf Hilfe."
          }
        ]
      }
    },

    "Deine Daten": {
      "einfach": {
        "text": [
          {
            "text": "Deine Daten sind alle Angaben, die etwas über dich verraten."
          },
          {
            "text": "Dazu gehören zum Beispiel dein Name, deine Adresse und deine Telefonnummer."
          },
          {
            "text": "Auch dein Geburtsdatum, deine Fotos und deine Kontakte sind Daten von dir."
          },
          {
            "text": "Dein Standort gehört ebenfalls dazu, denn er zeigt, wo du gerade bist."
          },
          {
            "text": "Dein Passwort und deine PIN sind geheim."
          }
        ],
        "warning": "Manche Daten sind besonders wichtig, zum Beispiel Angaben zu deiner Gesundheit, deine Bankdaten und dein Ausweis. Mit diesen Daten kann dir jemand sehr schaden. Deshalb prüfst du hier besonders genau.",
        "examples": [
          {
            "art": "B",
            "text": "Deine Ärztin fragt dich, was dir wehtut. Du sagst es ihr, weil sie das für die Behandlung braucht."
          },
          {
            "art": "A",
            "text": "Ein Quiz im Internet fragt nach deinen Krankheiten. Für ein Quiz braucht es diese Angaben nicht."
          }
        ],
        "remember": "Meine privaten Daten gehören mir."
      },
      "standard": {
        "text": [
          {
            "text": "Zu deinen persönlichen Daten gehört alles, was etwas über dich aussagt: dein Name, deine Adresse und Telefonnummer, dein Geburtsdatum, deine Fotos und Kontakte – und auch dein Standort, also der Ort, an dem du gerade bist. Passwort und PIN sind geheim."
          }
        ],
        "warning": "Besonders schützenswert sind Gesundheitsdaten, Bankdaten und dein Ausweis. Wer an diese Daten kommt, kann dir ernsthaft schaden – hier prüfst du deshalb besonders genau.",
        "examples": [
          {
            "art": "B",
            "text": "Deine Ärztin fragt, was dir wehtut. Du sagst es ihr – für die Behandlung braucht sie diese Information."
          },
          {
            "art": "A",
            "text": "Ein Online-Quiz fragt nach deinen Krankheiten. Für ein Quiz sind solche Angaben nicht erforderlich."
          }
        ],
        "remember": "Meine persönlichen Daten gehören mir."
      }
    },

    "Wer will deine Daten?": {
      "einfach": {
        "text": [
          {
            "text": "Viele Firmen und Menschen wollen deine Daten haben. Aber warum eigentlich?"
          },
          {
            "text": "Manche brauchen deine Daten, zum Beispiel, um dir ein Paket zu liefern."
          },
          {
            "text": "Andere verdienen mit deinen Daten Geld, zum Beispiel mit Werbung."
          },
          {
            "text": "Und manche Menschen wollen dich damit betrügen."
          },
          {
            "text": "Deshalb prüfst du: Wer bekommt meine Daten, und kenne ich diese Person oder Firma?"
          }
        ],
        "examples": [
          {
            "art": "B",
            "text": "Du meldest dich in einem Sportverein an. Der Verein braucht dafür deinen Namen und deine Adresse."
          },
          {
            "art": "A",
            "text": "Eine fremde SMS will deine Adresse und schreibt: Dein Paket wartet. Du hast aber gar nichts bestellt."
          }
        ],
        "remember": "Ich prüfe, wer meine Daten bekommt.",
        "vorbild": [
          "Ein Gewinnspiel im Internet will die Adresse und die Telefonnummer von Alex.",
          "Alex prüft zuerst: Wer will das, und wofür?",
          "Er kennt die Seite nicht, und für ein Spiel braucht sie seine Daten nicht.",
          "Deshalb gibt er nichts ein."
        ]
      },
      "standard": {
        "text": [
          {
            "text": "Viele wollen deine Daten – aber aus ganz unterschiedlichen Gründen. Manche brauchen sie, etwa um dir ein Paket zu liefern. Andere verdienen damit Geld, zum Beispiel über Werbung. Und manche wollen dich betrügen. Deshalb prüfst du: Wer bekommt meine Daten – und kenne ich diese Stelle?"
          }
        ],
        "examples": [
          {
            "art": "B",
            "text": "Du meldest dich im Sportverein an. Der Verein braucht dafür deinen Namen und deine Adresse."
          },
          {
            "art": "A",
            "text": "Eine unbekannte SMS verlangt deine Adresse, weil angeblich ein Paket auf dich wartet – dabei hast du nichts bestellt."
          }
        ],
        "remember": "Ich prüfe, wer meine Daten bekommt.",
        "vorbild": [
          "Ein Gewinnspiel im Internet fragt nach der Adresse und Telefonnummer von Alex. Er prüft, wer das will und wofür: Die Seite kennt er nicht, und für ein Spiel sind seine Daten nicht nötig. Also gibt er sie nicht ein."
        ]
      }
    },

    "Nötig oder freiwillig?": {
      "einfach": {
        "text": [
          {
            "text": "Im Internet füllst du oft ein Formular aus, zum Beispiel wenn du dich irgendwo anmeldest."
          },
          {
            "text": "Manche Felder sind Pflicht. Ohne diese Angaben geht das Formular nicht weiter."
          },
          {
            "text": "Andere Felder sind freiwillig, und diese Felder darfst du leer lassen."
          },
          {
            "text": "Du prüfst bei jeder Angabe: Wofür brauchen die das eigentlich?"
          },
          {
            "text": "Wenn ein Pflichtfeld gar nicht zum Zweck passt, musst du dich dort nicht anmelden."
          }
        ],
        "examples": [
          {
            "art": "B",
            "text": "Du bestellst in einem Shop, den du kennst. Der Shop braucht deine Adresse, damit das Paket ankommt."
          },
          {
            "art": "A",
            "text": "Beim Bestellen fragt der Shop nach deinem Geburtsdatum. Das Feld ist freiwillig, deshalb lässt du es leer."
          },
          {
            "art": "C",
            "text": "Der Shop fragt, ob du Werbung per E-Mail bekommen willst. Das entscheidest du selbst."
          }
        ],
        "remember": "Ich gebe nur die Daten weiter, die nötig sind.",
        "vorbild": [
          "Tilda meldet sich im Internet bei der Bücherei an.",
          "Das Formular fragt nach ihrem Namen und ihrer Adresse. Diese Felder sind Pflicht.",
          "Tilda prüft, wofür die Bücherei das braucht: für den Büchereiausweis. Die Angaben sind also nötig.",
          "Die Telefonnummer ist freiwillig, deshalb lässt Tilda das Feld leer."
        ]
      },
      "standard": {
        "text": [
          {
            "text": "Bei vielen Anmeldungen im Internet füllst du ein Formular aus. Ohne die Pflichtfelder geht es nicht weiter, freiwillige Felder darfst du leer lassen. Prüfe bei jeder Angabe, wofür sie gebraucht wird. Passt ein Pflichtfeld überhaupt nicht zum Zweck, musst du dich dort nicht anmelden."
          }
        ],
        "examples": [
          {
            "art": "B",
            "text": "Du bestellst in einem Shop, den du kennst. Für die Lieferung braucht er deine Adresse."
          },
          {
            "art": "A",
            "text": "Beim Bestellen fragt der Shop nach deinem Geburtsdatum – das Feld ist freiwillig, also lässt du es leer."
          },
          {
            "art": "C",
            "text": "Der Shop fragt, ob du Werbung per E-Mail möchtest. Das entscheidest du selbst."
          }
        ],
        "remember": "Ich gebe nur die Daten weiter, die für den Zweck nötig sind.",
        "vorbild": [
          "Tilda meldet sich online bei der Bücherei an. Name und Adresse sind Pflichtfelder. Sie prüft den Zweck: Für den Büchereiausweis sind die Angaben nötig. Die Telefonnummer ist freiwillig, also lässt Tilda das Feld leer."
        ]
      }
    },

    "Eine App will etwas sehen": {
      "einfach": {
        "text": [
          {
            "text": "Apps fragen oft, ob sie etwas auf deinem Handy sehen dürfen."
          },
          {
            "text": "Sie wollen zum Beispiel deine Fotos, deine Kontakte oder deinen Standort sehen."
          },
          {
            "text": "Du prüfst dann: Was macht die App, und braucht sie das dafür?"
          },
          {
            "text": "Manchmal braucht die App nur einen Teil davon, zum Beispiel den Standort nur, während du sie benutzt."
          },
          {
            "text": "Eine Erlaubnis kannst du oft später in den Einstellungen wieder ändern."
          }
        ],
        "examples": [
          {
            "art": "A",
            "text": "Eine Taschenlampen-App will deine Kontakte sehen. Für Licht braucht sie deine Kontakte nicht."
          },
          {
            "art": "B",
            "text": "Eine Karten-App zeigt dir den Weg, und dafür braucht sie deinen Standort."
          },
          {
            "art": "C",
            "text": "Eine Wetter-App will deinen Standort. Wenn du unterwegs Warnungen bekommen willst, braucht sie ihn. Wenn du nur das Wetter in deiner Stadt sehen willst, tippst du die Stadt selbst ein."
          }
        ],
        "remember": "Ich erlaube einer App nur das, was sie braucht."
      },
      "standard": {
        "text": [
          {
            "text": "Viele Apps bitten um Zugriff auf deine Fotos, deine Kontakte oder deinen Standort – solche Berechtigungen fragt dein Handy ab. Prüfe dabei, was die App macht und ob sie den Zugriff dafür braucht. Manchmal reicht ein Teil davon, zum Beispiel der Standort nur während der Nutzung. Eine Berechtigung kannst du oft später in den Einstellungen ändern."
          }
        ],
        "examples": [
          {
            "art": "A",
            "text": "Eine Taschenlampen-App will auf deine Kontakte zugreifen. Für Licht ist das nicht erforderlich."
          },
          {
            "art": "B",
            "text": "Eine Karten-App zeigt dir den Weg – dafür braucht sie deinen Standort."
          },
          {
            "art": "C",
            "text": "Eine Wetter-App möchte deinen Standort. Für Warnungen unterwegs braucht sie ihn; für das Wetter in deiner Stadt gibst du den Ort selbst ein."
          }
        ],
        "remember": "Ich erlaube einer App nur, was sie für ihre Funktion braucht."
      }
    },

    "Wer sieht dein Profil?": {
      "einfach": {
        "text": [
          {
            "text": "In vielen Apps hast du ein eigenes Profil."
          },
          {
            "text": "Im Profil stehen Angaben über dich, zum Beispiel dein Name, dein Foto oder dein Wohnort."
          },
          {
            "text": "Du prüfst: Wer kann das alles sehen – alle im Internet, nur deine Freunde oder nur du?"
          },
          {
            "text": "Das kannst du oft selbst einstellen und später auch wieder ändern."
          }
        ],
        "examples": [
          {
            "art": "B",
            "text": "Dein Name steht in deinem Profil. So können dich deine Freunde finden."
          },
          {
            "art": "C",
            "text": "Bei deinem Wohnort entscheidest du selbst: Sollen ihn Fremde sehen, nur deine Freunde oder niemand?"
          }
        ],
        "remember": "Ich wähle selbst aus, wer meine Daten sieht."
      },
      "standard": {
        "text": [
          {
            "text": "In vielen Apps hast du ein Profil mit Angaben über dich – etwa deinem Namen, einem Foto oder deinem Wohnort. Prüfe, wer das sehen kann: alle im Internet, nur deine Freunde oder nur du. Das lässt sich oft einstellen und später wieder ändern."
          }
        ],
        "examples": [
          {
            "art": "B",
            "text": "Dein Name steht im Profil, damit deine Freunde dich finden."
          },
          {
            "art": "C",
            "text": "Beim Wohnort entscheidest du: für Fremde sichtbar, nur für Freunde oder für niemanden."
          }
        ],
        "remember": "Ich lege selbst fest, wer meine Daten sieht."
      }
    },

    "Fotos prüfen": {
      "einfach": {
        "text": [
          {
            "text": "Du willst ein Foto verschicken oder anderen zeigen."
          },
          {
            "text": "Prüfe vorher genau: Was ist auf dem Foto zu sehen, und wer bekommt es?"
          },
          {
            "text": "Wenn eine andere Person auf dem Foto ist, fragst du sie vorher."
          },
          {
            "text": "Wenn ein Foto einmal verschickt ist, kannst du es oft nicht mehr zurückholen."
          },
          {
            "text": "Deshalb prüfst du vorher, was du verschickst."
          }
        ],
        "examples": [
          {
            "art": "C",
            "text": "Du willst ein Foto von deinem Kollegen in eine Gruppe schicken. Frag ihn vorher, denn er entscheidet mit."
          },
          {
            "art": "A",
            "text": "Im Hintergrund vom Foto sieht man deine Hausnummer. Die muss niemand sehen."
          }
        ],
        "remember": "Ich prüfe Fotos, bevor ich sie verschicke."
      },
      "standard": {
        "text": [
          {
            "text": "Bevor du ein Foto verschickst oder zeigst, prüfe: Was ist darauf zu sehen, und wer bekommt es? Sind andere Menschen darauf, fragst du sie vorher. Ein verschicktes Foto lässt sich oft nicht mehr zurückholen – deshalb prüfst du vorher."
          }
        ],
        "examples": [
          {
            "art": "C",
            "text": "Du möchtest ein Foto deines Kollegen in die Gruppe schicken. Frag ihn vorher – er entscheidet mit."
          },
          {
            "art": "A",
            "text": "Im Hintergrund ist deine Hausnummer zu sehen. Die muss niemand sehen."
          }
        ],
        "remember": "Fotos prüfe ich, bevor ich sie verschicke."
      }
    },

    "Standort teilen": {
      "einfach": {
        "text": [
          {
            "text": "Du kannst deinen Standort mit anderen teilen. Dann sehen sie, wo du gerade bist."
          },
          {
            "text": "Prüfe vorher: Wer sieht meinen Standort, und wie lange sieht er ihn?"
          },
          {
            "text": "Oft kannst du wählen, ob du ihn nur kurz oder für immer teilst."
          },
          {
            "text": "Du kannst das Teilen später auch wieder ausschalten."
          }
        ],
        "examples": [
          {
            "art": "B",
            "text": "Du fährst allein zu einem neuen Ort. Deine Betreuerin will wissen, ob du gut angekommen bist. Deshalb teilst du deinen Standort mit ihr, bis du da bist."
          },
          {
            "art": "A",
            "text": "Ein Spiel zeigt deinen Standort allen anderen Spielern. Das braucht das Spiel nicht."
          }
        ],
        "remember": "Ich teile meinen Standort nicht einfach so."
      },
      "standard": {
        "text": [
          {
            "text": "Wenn du deinen Standort teilst, sehen andere, wo du gerade bist. Prüfe dabei, wer ihn sieht und wie lange. Oft kannst du wählen, ob du ihn nur kurz oder dauerhaft teilst – und du kannst das Teilen später wieder beenden."
          }
        ],
        "examples": [
          {
            "art": "B",
            "text": "Du fährst allein an einen neuen Ort. Deine Betreuerin möchte wissen, ob du gut ankommst – also teilst du deinen Standort mit ihr, bis du da bist."
          },
          {
            "art": "A",
            "text": "Ein Spiel zeigt deinen Standort allen Mitspielern. Für das Spiel ist das nicht nötig."
          }
        ],
        "remember": "Meinen Standort teile ich nicht einfach so."
      }
    },

    "Eine Nachricht will deine Daten": {
      "einfach": {
        "text": [
          {
            "text": "Manchmal bekommst du eine Nachricht oder eine E-Mail, in der jemand Daten von dir will."
          },
          {
            "text": "Wenn du so eine Nachricht nicht erwartet hast, machst du zuerst Stopp."
          },
          {
            "text": "Dann prüfst du genauso wie sonst: Wer will das, und wofür?"
          },
          {
            "text": "Wenn du unsicher bist, gibst du noch nichts ein und holst dir Unterstützung."
          },
          {
            "text": "Mehr dazu lernst du im Thema Betrug."
          }
        ],
        "examples": [
          {
            "art": "C",
            "text": "Deine Freundin schreibt dir und fragt nach deiner neuen Adresse. Du kennst sie, und du entscheidest selbst."
          },
          {
            "art": "A",
            "text": "Eine fremde E-Mail schreibt: Bestätige deine Daten, sonst sperren wir dein Konto. Du kennst den Absender nicht."
          }
        ],
        "remember": "Wenn ich unsicher bin, gebe ich noch nichts frei.",
        "vorbild": [
          "Alex bekommt eine E-Mail, in der er seine Adresse bestätigen soll.",
          "Alex macht zuerst Stopp und prüft, wer ihm schreibt. Den Absender kennt er nicht.",
          "Deshalb gibt er nichts ein.",
          "Weil er noch unsicher ist, zeigt er die E-Mail seiner Betreuerin."
        ]
      },
      "standard": {
        "text": [
          {
            "text": "Manchmal verlangt eine Nachricht oder E-Mail Daten von dir. Hast du das nicht erwartet, mach zuerst Stopp und prüfe genauso wie sonst: Wer will das, und wofür? Bist du unsicher, gib noch nichts ein und hol dir Unterstützung. Mehr dazu lernst du im Thema Betrug."
          }
        ],
        "examples": [
          {
            "art": "C",
            "text": "Deine Freundin fragt nach deiner neuen Adresse. Du kennst sie – was du antwortest, entscheidest du selbst."
          },
          {
            "art": "A",
            "text": "Eine unbekannte E-Mail fordert: Bestätige deine Daten, sonst sperren wir dein Konto. Du kennst den Absender nicht."
          }
        ],
        "remember": "Bin ich unsicher, gebe ich noch nichts frei.",
        "vorbild": [
          "Alex bekommt eine E-Mail, in der er seine Adresse bestätigen soll. Er macht Stopp und prüft den Absender – den kennt er nicht. Also gibt er nichts ein und zeigt die E-Mail seiner Betreuerin, weil er noch unsicher ist."
        ]
      }
    },

    "Dein Plan für deine Daten": {
      "einfach": {
        "text": [
          {
            "text": "Das ist dein Plan für deine Daten, Schritt für Schritt:"
          }
        ],
        "bullets": [
          {
            "text": "Stopp. Ich prüfe zuerst.",
            "pictogram": "pikto-pause"
          },
          {
            "text": "Wer bekommt es? Wer kann es sehen?",
            "pictogram": "pikto-person"
          },
          {
            "text": "Was genau soll ich geben?",
            "pictogram": "pikto-data"
          },
          {
            "text": "Wofür? Wie viel davon ist nötig?",
            "pictogram": "pikto-search"
          },
          {
            "text": "Ich entscheide.",
            "pictogram": "pikto-done"
          }
        ],
        "remember": "Erst prüfen, dann entscheide ich."
      },
      "standard": {
        "text": [
          {
            "text": "Hier ist dein Plan für deine Daten im Überblick – Schritt für Schritt:"
          }
        ],
        "bullets": [
          "Stopp. Ich prüfe zuerst.",
          "Wer bekommt es? Wer kann es sehen?",
          "Was genau soll ich geben?",
          "Wofür? Wie viel davon ist nötig?",
          "Ich entscheide."
        ],
        "remember": "Erst prüfen, dann entscheiden."
      }
    },

    "Das merke ich mir": {
      "einfach": {
        "text": [
          {
            "text": "Das sind die wichtigsten Regeln, die du in diesem Thema gelernt hast."
          }
        ],
        "bullets": []
      },
      "standard": {
        "text": [
          {
            "text": "Die wichtigsten Regeln aus diesem Kapitel im Überblick, zum Nachlesen und Merken."
          }
        ],
        "bullets": []
      }
    }
  },

  whatsapp: {
    "Start": {
      einfach: {
        text: [
          { text: "Stell dir vor: Eine fremde Nummer schreibt dir bei WhatsApp, und in der Nachricht ist ein Link. Was machst du? Darum geht es in diesem Thema." },
          { text: "Du lernst, wie du Nachrichten sicher nutzt und Betrug erkennst." },
          { text: "Wenn du unsicher bist, kannst du jederzeit den Hilfe-Knopf benutzen." }
        ]
      },
      standard: {
        text: [
          { text: "Stell dir vor: Eine unbekannte Nummer schreibt dir bei WhatsApp und schickt einen Link. Wie reagierst du? In diesem Kapitel geht es um den sicheren Umgang mit WhatsApp. Du erfährst, wie du fremde Nachrichten einschätzt, Betrugsversuche erkennst und mit Codes, Gruppen und Fotos vorsichtig umgehst. Wenn du unsicher bist, steht dir jederzeit der Hilfe-Knopf zur Verfügung." }
        ]
      }
    },

    "WhatsApp nutzen": {
      einfach: {
        text: [
          { text: "Mit WhatsApp kannst du Nachrichten, Bilder und Sprach-Nachrichten verschicken und auch in Gruppen schreiben." },
          { text: "Du entscheidest dabei selbst, mit wem du schreibst und wem du antwortest." }
        ],
        remember: "Ich entscheide selbst, wem ich antworte."
      },
      standard: {
        text: [
          { text: "Mit WhatsApp kannst du Textnachrichten, Fotos und Sprachnachrichten verschicken und in Gruppen schreiben. Du bestimmst dabei selbst, mit wem du Kontakt hast und wem du antwortest." }
        ],
        remember: "Ich entscheide selbst, mit wem ich schreibe und wem ich antworte."
      }
    },

    "Fremde Nummer": {
      einfach: {
        text: [
          { text: "Wenn dir eine fremde Nummer schreibt, weißt du nicht, wer wirklich dahintersteckt." },
          { text: "Antworte deshalb nicht sofort und gib keine persönlichen Daten weiter." },
          { text: "Im Zweifel kannst du den Kontakt einfach blockieren." }
        ],
        examples: ["„Hallo, ich habe eine neue Nummer.“", "„Schick mir bitte Geld.“"]
      },
      standard: {
        text: [
          { text: "Wenn dir eine unbekannte Nummer schreibt, weißt du nicht, wer wirklich dahintersteckt. Antworte nicht vorschnell, gib keine persönlichen Daten weiter und überweise kein Geld. Im Zweifel ignorierst oder blockierst du den Kontakt." }
        ],
        examples: ["„Hallo, ich habe eine neue Nummer. Speicher sie dir ab!“", "„Kannst du mir schnell Geld schicken? Ich erklär’s dir später.“"]
      }
    },

    "Geld und Betrug": {
      einfach: { warning: "Betrüger geben sich am Handy oft als Freunde oder Familie aus und bitten um Geld. Schick niemals Geld an eine fremde Nummer. Ruf die Person über die Nummer an, die du schon kennst.",
        text: [
          { text: "Manche Nachrichten fragen nach Geld, und die Betrüger tun oft so, als wären sie Familie oder Freunde." },
          { text: "Ein bekannter Trick lautet: „Hallo Mama, ich habe eine neue Nummer und brauche Geld.“" },
          { text: "Sogar Sprach-Nachrichten können mit KI gefälscht werden, damit die Stimme echt klingt." },
          { text: "Schick deshalb niemals Geld an eine fremde Nummer, sondern ruf die Person vorher an." }
        ],
        examples: ["„Hallo Papa, mein Handy ist kaputt. Das ist meine neue Nummer. Kannst du mir Geld überweisen?“", "Eine Sprachnachricht klingt wie deine Schwester und will Geld. Die Stimme kann gefälscht sein."]
      },
      standard: { warning: "Bei Geldforderungen per Nachricht ist Vorsicht wichtig: Betrüger geben sich als Angehörige mit neuer Nummer aus. Überweise kein Geld, sondern ruf die Person über ihre dir bekannte Nummer an.",
        text: [
          { text: "Eine häufige Betrugsmasche sind Nachrichten, die nach Geld fragen. Betrüger geben sich als Angehörige aus – etwa mit der Nachricht „Hallo Mama, ich habe eine neue Nummer und brauche Geld.“ Inzwischen lassen sich sogar Stimmen in Sprachnachrichten mit künstlicher Intelligenz täuschend echt nachahmen. Überweise deshalb niemals Geld an eine unbekannte Nummer und ruf die Person im Zweifel unter ihrer bekannten Nummer zurück." }
        ],
        examples: ["„Hallo Papa, mein Handy ist kaputt, das ist meine neue Nummer. Kannst du mir heute noch Geld überweisen?“", "Eine Sprachnachricht klingt genau wie deine Schwester und bittet dringend um Geld – solche Stimmen lassen sich mit KI fälschen."]
      }
    },

    "Links in Nachrichten": {
      einfach: {
        text: [
          { text: "Ein Link führt dich zu einer Internet-Seite, doch manche Links sind gefährlich." },
          { text: "Wenn du den Absender nicht kennst, tippe den Link lieber nicht an." },
          { text: "Gib auf solchen Seiten keine Daten ein." }
        ]
      },
      standard: {
        text: [
          { text: "Ein Link führt dich auf eine Internetseite. Manche Links stammen von Betrügern und führen zu gefälschten Seiten, die deine Daten abgreifen wollen. Öffne Links aus unbekannten Nachrichten nicht und gib dort keine Daten ein." }
        ]
      }
    },

    "WhatsApp-Code": {
      einfach: { warning: "Der Code, den du per SMS bekommst, schützt dein WhatsApp. Gib diesen Code niemals weiter – auch nicht an Freunde oder angebliche Mitarbeiter. Wer danach fragt, will dein Konto übernehmen.",
        text: [
          { text: "Manchmal bekommst du einen Code per SMS, der dein WhatsApp schützt." },
          { text: "Dieser Code ist nur für dich bestimmt." },
          { text: "Gib ihn niemals an andere weiter, auch wenn jemand danach fragt." }
        ]
      },
      standard: { warning: "Der per SMS zugeschickte Bestätigungscode schützt dein Konto. Gib ihn niemals weiter; seriöse Stellen fragen nie danach. Wer den Code haben will, versucht dein WhatsApp zu übernehmen.",
        text: [
          { text: "Gelegentlich erhältst du einen Bestätigungscode per SMS. Dieser Code schützt dein WhatsApp-Konto vor fremdem Zugriff. Gib ihn niemals weiter – wer dich danach fragt, will dein Konto übernehmen." }
        ]
      }
    },

    "Gruppen": {
      einfach: {
        text: [
          { text: "In Gruppen lesen oft viele Menschen mit, die du nicht alle kennst." },
          { text: "Überlege deshalb, was du dort schreibst." },
          { text: "Private Dinge gehören nicht in eine große Gruppe." }
        ]
      },
      standard: {
        text: [
          { text: "In Gruppen lesen oft viele Menschen mit, die du nicht alle kennst. Überlege deshalb, was du dort teilst. Private Informationen, Adressen oder Fotos gehören nicht in eine große Gruppe." }
        ]
      }
    },

    "Fotos senden": {
      einfach: {
        text: [
          { text: "Ein Foto kann leicht weiter-geschickt werden und zeigt manchmal private Dinge." },
          { text: "Frag andere Personen deshalb um Erlaubnis, bevor du ein Foto von ihnen sendest." }
        ]
      },
      standard: {
        text: [
          { text: "Einmal verschickte Fotos lassen sich leicht weiterleiten und sind kaum zurückzuholen. Achte darauf, ob ein Bild private Dinge zeigt, und frage andere Personen um Erlaubnis, bevor du ein Foto von ihnen versendest." }
        ]
      }
    },

    "Stress und Eile": {
      einfach: {
        text: [
          { text: "Manche Nachrichten machen dir absichtlich Stress oder Angst, damit du schnell reagierst." },
          { text: "Du musst aber nicht sofort antworten." },
          { text: "Mach ruhig eine Pause und entscheide in Ruhe." }
        ]
      },
      standard: {
        text: [
          { text: "Manche Nachrichten erzeugen bewusst Stress oder Angst, damit du unüberlegt reagierst. Du musst nicht sofort antworten. Mach ruhig eine Pause und entscheide in Ruhe – oder hol dir Rat von einer vertrauten Person." }
        ]
      }
    },

    "Die KI in WhatsApp": {
      einfach: {
        text: [
          { text: "In WhatsApp gibt es eine KI mit dem Namen Meta AI, die du an einem blauen Kreis erkennst." },
          { text: "Diese KI ist kein Mensch, sondern ein Programm." },
          { text: "Du musst sie nicht benutzen, und du schreibst ihr keine privaten Dinge." }
        ],
        bullets: ["Die KI kann Fragen beantworten.", "Die KI kann sich irren.", "Schreib der KI keine privaten Dinge."],
        remember: "Die KI in WhatsApp ist kein Mensch."
      },
      standard: {
        text: [
          { text: "In WhatsApp ist eine künstliche Intelligenz namens Meta AI eingebaut, erkennbar an einem blauen Kreis. Sie ist kein Mensch, sondern ein Computerprogramm: Sie kann Fragen beantworten, macht aber auch Fehler. Du musst sie nicht nutzen – und persönliche oder vertrauliche Dinge solltest du ihr nicht anvertrauen." }
        ],
        bullets: [],
        remember: "Die KI in WhatsApp ist ein Programm, kein Mensch – ich teile ihr nichts Privates mit."
      }
    },

    "Was kann ich tun?": {
      einfach: {
        text: [
          { text: "Wenn etwas komisch wirkt oder Stress macht, bleib ruhig und reagiere nicht sofort." },
          { text: "Zeig die Nachricht am besten einer Person, der du vertraust." }
        ],
        bullets: ["Stopp machen.", "Nicht sofort antworten.", "Den Link nicht öffnen.", "Den Hilfe-Knopf nutzen."],
        warning: "Auch wenn eine Nachricht von einem bekannten Namen kommt, kann sie gefälscht sein. Ruf die Person lieber selbst über die Nummer an, die du schon kennst, bevor du reagierst.",
        success: "Wenn du deinem Plan folgst, lässt du dich nicht überrumpeln und bleibst sicher."
      },
      standard: {
        text: [
          { text: "Wenn dir etwas merkwürdig vorkommt oder dir Stress gemacht wird, halte kurz inne: Reagiere nicht sofort, öffne keine Links und zeige die Nachricht einer Person, der du vertraust. Bei Bedarf hilft dir auch der Hilfe-Knopf weiter." }
        ],
        bullets: [],
        warning: "Ein bekannter Name allein ist kein Beweis für die Identität des Absenders – Betrüger nutzen häufig genau dieses Vertrauen aus. Ruf die Person deshalb über eine dir bereits bekannte Nummer zurück, bevor du auf eine ungewöhnliche Bitte reagierst.",
        success: "Wer sich an einen festen Ablauf hält, lässt sich nicht überrumpeln – das schützt zuverlässig, auch bei neuen Maschen."
      }
    },

    "Das merke ich mir": {
      einfach: {
        text: [
          { text: "Zum Schluss findest du die wichtigsten Regeln aus diesem Thema noch einmal." }
        ],
        bullets: ["Fremde Nummern prüfen.", "Kein Geld an fremde Nummern schicken.", "Unbekannte Links nicht öffnen.", "Codes nicht weitergeben.", "Fotos prüfen.", "Bei Stress Hilfe holen."]
      },
      standard: {
        text: [
          { text: "Die wichtigsten Punkte dieses Themas im Überblick: Prüfe Nachrichten von unbekannten Nummern und schicke niemals Geld an Fremde. Öffne unbekannte Links nicht und gib Bestätigungscodes nie weiter. Überlege bei Fotos, was du teilst, und hol dir bei Stress oder Stress ruhig Unterstützung." }
        ],
        bullets: []
      }
    }
  },

  facebook: {
    "Start": {
      einfach: { text: [
        { text: "Stell dir vor: Eine Person, die du nicht kennst, schickt dir bei Facebook eine Freundschafts-Anfrage. Was machst du? Darum geht es in diesem Thema." },
        { text: "Du lernst, wie du dein Profil schützt und dich vor unbekannten Kontakten in Acht nimmst." },
        { text: "Wenn du unsicher bist, kannst du jederzeit den Hilfe-Knopf benutzen." }
      ] },
      standard: { text: [
        { text: "Stell dir vor: Jemand, den du nicht kennst, schickt dir bei Facebook eine Freundschaftsanfrage. Nimmst du sie an? In diesem Kapitel geht es um den sicheren Umgang mit Facebook. Du erfährst, wie du dein Profil schützt, Beiträge und Freundschaftsanfragen einschätzt und respektvoll mit anderen umgehst. Wenn du unsicher bist, steht dir jederzeit der Hilfe-Knopf zur Verfügung." }
      ] }
    },
    "Profil": {
      einfach: {
        text: [
          { text: "In deinem Profil stehen Informationen über dich, aber nicht alles muss dort öffentlich stehen." },
          { text: "Private Angaben wie Adresse oder Geburtstag solltest du weglassen oder nur für Freunde sichtbar machen." }
        ],
        examples: ["Adresse", "Telefon-Nummer", "Geburtstag", "private Fotos"],
        remember: "Ich zeige nicht alles in meinem Profil."
      },
      standard: {
        text: [
          { text: "In deinem Profil stehen Informationen über dich – aber nicht alles muss dort öffentlich sichtbar sein. Angaben wie Adresse, Telefonnummer, Geburtsdatum oder private Fotos solltest du entweder weglassen oder nur für ausgewählte Personen freigeben." }
        ],
        examples: ["Wohnadresse", "Telefonnummer", "Geburtsdatum", "private Fotos"],
        remember: "Ich überlege genau, welche Angaben in meinem Profil öffentlich sichtbar sind."
      }
    },
    "Beitrag schreiben": {
      einfach: { text: [
        { text: "Wenn du etwas postest, können viele Menschen deinen Beitrag sehen – manchmal mehr als nur deine Freunde." },
        { text: "Überlege deshalb vorher, ob der Inhalt wirklich für alle bestimmt ist." }
      ] },
      standard: { text: [
        { text: "Bevor du einen Beitrag veröffentlichst, denk daran: Oft können sehr viele Menschen ihn lesen – manchmal auch über deinen Freundeskreis hinaus. Überlege deshalb vorher, ob der Inhalt wirklich für alle bestimmt ist." }
      ] }
    },
    "Wer darf etwas sehen?": {
      einfach: { text: [
        { text: "Du kannst bei Facebook einstellen, wer deine Beiträge sehen darf – das nennt man Privatsphäre-Einstellungen." },
        { text: "Diese Einstellungen lohnen sich, und du darfst dir dabei ruhig helfen lassen." }
      ] },
      standard: { text: [
        { text: "Facebook bietet Einstellungen, mit denen du festlegst, wer deine Beiträge sehen darf – zum Beispiel nur Freunde statt aller Nutzer. Diese Privatsphäre-Einstellungen lohnen sich. Wenn sie unübersichtlich sind, lass dir ruhig dabei helfen." }
      ] }
    },
    "Freundschafts-Anfragen": {
      einfach: { warning: "Nimm Freundschaftsanfragen nur von Menschen an, die du wirklich kennst. Hinter fremden Profilen können sich Betrüger verstecken. Im Zweifel lehnst du die Anfrage ab.", text: [
        { text: "Nicht jede Freundschafts-Anfrage kommt von jemandem, den du kennst." },
        { text: "Hinter unbekannten Profilen können sich auch Betrüger verstecken." },
        { text: "Du musst keine Anfrage annehmen und kannst sie im Zweifel ablehnen." }
      ] },
      standard: { warning: "Bestätige Freundschaftsanfragen nur von Personen, die du tatsächlich kennst. Fremde oder gefälschte Profile werden oft für Betrug genutzt. Im Zweifelsfall lehnst du die Anfrage ab.", text: [
        { text: "Nicht jede Freundschaftsanfrage stammt von jemandem, den du kennst. Hinter unbekannten Profilen können sich auch Betrüger verbergen. Du musst keine Anfrage annehmen – im Zweifel lehnst du sie ab oder ignorierst sie." }
      ] }
    },
    "Kommentare schreiben": {
      einfach: { text: [
        { text: "Kommentare können viele Menschen lesen, und Worte können verletzen." },
        { text: "Du musst nicht auf jeden Beitrag antworten." },
        { text: "Wenn du kommentierst, bleib freundlich und sachlich." }
      ] },
      standard: { text: [
        { text: "Was du kommentierst, können viele Menschen lesen, und Worte können verletzen. Du musst nicht auf jeden Beitrag reagieren. Wenn du kommentierst, bleib sachlich und respektvoll." }
      ] }
    },
    "Beleidigungen": {
      einfach: { warning: "Beleidigungen sind nicht in Ordnung und nicht deine Schuld. Du musst nicht zurück beleidigen. Du kannst die Person melden, blockieren und dir Hilfe holen.",
        text: [
          { text: "Im Internet kommt es manchmal zu Streit und Beleidigungen." },
          { text: "Du musst dich darauf nicht einlassen und nicht zurück beleidigen." },
          { text: "Stattdessen kannst du die Person blockieren, den Beitrag melden und dir Hilfe holen." }
        ],
        bullets: ["Die Nachricht zeigen.", "Die Person blockieren.", "Den Beitrag melden.", "Unterstützung holen."]
      },
      standard: { warning: "Beleidigungen im Netz sind nicht in Ordnung – und nicht deine Schuld. Reagiere nicht mit Gegenbeleidigungen, sondern melde und blockiere die Person und hol dir bei Bedarf Unterstützung.",
        text: [
          { text: "Auch auf Facebook kommt es zu Streit und Beleidigungen. Du musst dich darauf nicht einlassen und nicht zurückbeleidigen. Stattdessen kannst du die Nachricht aufbewahren, die Person blockieren, den Beitrag melden und dir Unterstützung holen." }
        ],
        bullets: []
      }
    },
    "Fotos mit anderen Personen": {
      einfach: { text: [
        { text: "Wenn auf einem Foto andere Menschen zu sehen sind, möchte nicht jeder im Internet erscheinen." },
        { text: "Frag die Personen deshalb um Erlaubnis, bevor du ein solches Foto postest." }
      ] },
      standard: { text: [
        { text: "Wenn auf einem Foto andere Personen zu sehen sind, gilt: Nicht jeder möchte im Internet erscheinen. Frag die abgebildeten Personen um Erlaubnis, bevor du ein solches Bild veröffentlichst." }
      ] }
    },
    "Was kann ich tun?": {
      einfach: {
        text: [
          { text: "Wenn dich auf Facebook etwas stört oder jemand gemein zu dir ist, musst du das nicht alleine aushalten." },
          { text: "Du kannst die Person blockieren und den Beitrag melden. Und du kannst es einer Person sagen, der du vertraust." }
        ],
        bullets: ["Die Person blockieren.", "Den Beitrag oder Kommentar melden.", "Einer vertrauten Person davon erzählen.", "Hilfe holen."],
        warning: "Manche Personen geben sich als Freund aus, wollen aber schnell Geld oder private Daten von dir. Das ist dann meistens kein echter Freund.",
        success: "Hilfe zu holen ist immer richtig. Was passiert ist, ist nicht deine Schuld."
      },
      standard: {
        text: [
          { text: "Wenn dich auf Facebook etwas belastet oder jemand verletzend ist, musst du das nicht alleine tragen. Du kannst die Person blockieren, den Beitrag oder Kommentar melden und dir Unterstützung holen – sprich am besten mit jemandem, dem du vertraust. Wichtig: Es ist nicht deine Schuld." }
        ],
        bullets: [],
        warning: "Nicht jede Person, die sich freundlich gibt, meint es auch gut – besonders wenn schnell um Geld oder private Daten gebeten wird, ist Vorsicht angebracht.",
        success: "Sich Unterstützung zu holen ist der richtige Schritt – und was dir widerfahren ist, ist nicht deine Schuld."
      }
    },
    "Das merke ich mir": {
      einfach: {
        text: [{ text: "Zum Schluss findest du die wichtigsten Regeln aus diesem Thema noch einmal." }],
        bullets: ["Nicht alles öffentlich machen.", "Anfragen prüfen.", "Respektvoll schreiben.", "Bei Beleidigungen Hilfe holen."]
      },
      standard: {
        text: [{ text: "Die wichtigsten Punkte dieses Themas im Überblick: Mach nicht alles in deinem Profil öffentlich und nutze die Privatsphäre-Einstellungen. Prüfe Freundschaftsanfragen, bleib in Kommentaren respektvoll und hol dir bei Beleidigungen Unterstützung." }],
        bullets: []
      }
    }
  },

  instagram: {
    "Start": {
      einfach: { text: [
        { text: "Stell dir vor: Du willst ein Foto bei Instagram posten, auf dem auch deine Freundin zu sehen ist. Was machst du? Darum geht es in diesem Thema." },
        { text: "Du lernst, worauf du beim Posten von Fotos und Videos achtest und wie du deinen Standort schützt." },
        { text: "Wenn du unsicher bist, kannst du jederzeit den Hilfe-Knopf benutzen." }
      ] },
      standard: { text: [
        { text: "Stell dir vor: Du möchtest ein Foto auf Instagram posten – deine Freundin ist mit drauf. Was tust du vorher? In diesem Kapitel geht es um den sicheren Umgang mit Instagram. Du erfährst, worauf du beim Posten von Fotos und Videos achtest, wie du deinen Standort schützt und fremde Nachrichten einschätzt. Wenn du unsicher bist, steht dir jederzeit der Hilfe-Knopf zur Verfügung." }
      ] }
    },
    "Foto posten": {
      einfach: { examples: ["Auf dem Foto ist das Straßenschild vor deinem Haus zu sehen. So wissen andere, wo du wohnst.", "Auf dem Tisch liegt ein Brief, auf dem man deinen Namen und deine Adresse lesen kann."], text: [
        { text: "Wenn du ein Foto postest, können viele Menschen es sehen." },
        { text: "Achte darauf, was im Bild zu erkennen ist, denn oft verraten Hintergrund oder Details mehr über dich, als du denkst." }
      ] },
      standard: { examples: ["Im Hintergrund ist das Straßenschild vor deiner Wohnung zu erkennen – daraus lässt sich ablesen, wo du wohnst.", "Auf dem Tisch liegt ein Brief, auf dem Name und Adresse gut lesbar sind."], text: [
        { text: "Wenn du ein Foto postest, können es viele Menschen sehen. Achte darauf, was im Bild zu erkennen ist – oft verraten Hintergrund oder Details mehr über dich, als dir bewusst ist." }
      ] }
    },
    "Andere Personen auf Fotos": {
      einfach: { text: [
        { text: "Wenn auf einem Foto andere Personen zu sehen sind, möchte nicht jeder im Internet erscheinen." },
        { text: "Frag sie deshalb vorher um Erlaubnis oder nimm ein anderes Foto." }
      ] },
      standard: { text: [
        { text: "Sind auf einem Foto andere Personen zu sehen, solltest du sie vor dem Posten um Erlaubnis fragen. Wer das nicht möchte, hat ein Recht darauf – dann wählst du besser ein anderes Bild." }
      ] }
    },
    "Kurze Videos und Stories": {
      einfach: { text: [
        { text: "Kurze Videos und Stories verschwinden zwar wieder, doch in der Zeit können viele Menschen sie sehen." },
        { text: "Andere können dabei ein Bild vom Bildschirm machen und es behalten." },
        { text: "Behandle solche Videos deshalb so vorsichtig wie jeden anderen Beitrag." }
      ] },
      standard: { text: [
        { text: "Stories und kurze Videos verschwinden zwar nach einer Weile, doch in dieser Zeit können viele Menschen sie sehen – und mit einem Bildschirmfoto dauerhaft speichern. Behandle sie deshalb so vorsichtig wie jeden anderen Beitrag." }
      ] }
    },
    "Standort": {
      einfach: { text: [
        { text: "Wenn du deinen Standort teilst, sehen andere, wo du gerade bist." },
        { text: "Das muss nicht jeder wissen und kann ausgenutzt werden." },
        { text: "Teile deinen Standort deshalb nur bewusst und nur mit Menschen, denen du vertraust." }
      ] },
      standard: { text: [
        { text: "Wenn du deinen Standort teilst, sehen andere, wo du dich aufhältst. Das muss nicht jeder wissen und kann ausgenutzt werden. Gib deinen Standort nur bewusst und nur an Menschen weiter, denen du vertraust." }
      ] }
    },
    "Private Nachrichten": {
      einfach: { examples: ["„Du bist so schön. Schick mir doch noch mehr Fotos von dir.“", "Eine fremde Person fragt, wo du wohnst und ob du gerade allein zu Hause bist."], warning: "Wenn dir eine fremde Person schreibt und nach privaten Fotos oder Daten fragt, ist das ein Warnzeichen. Du musst nicht antworten und kannst die Person blockieren.", text: [
        { text: "Wenn dir eine fremde Person privat schreibt und nach Fotos oder Daten fragt, ist das ein Warnzeichen." },
        { text: "Geh darauf nicht ein und schick keine privaten Bilder." },
        { text: "Im Zweifel blockierst du den Kontakt." }
      ] },
      standard: { examples: ["„Du siehst toll aus. Schick mir doch noch ein paar Fotos – nur für mich.“", "Eine unbekannte Person fragt nach deiner Adresse und ob du gerade allein zu Hause bist."], warning: "Fordert dich eine unbekannte Person in privaten Nachrichten zu Fotos oder persönlichen Daten auf, ist das ein Warnsignal. Du musst nicht antworten und kannst die Person blockieren oder melden.", text: [
        { text: "Wenn dir eine fremde Person private Nachrichten schickt und nach Fotos oder persönlichen Daten fragt, ist das ein deutliches Warnzeichen. Geh darauf nicht ein, schick keine privaten Bilder und blockiere den Kontakt im Zweifel." }
      ] }
    },
    "Verletzende Kommentare": {
      einfach: { warning: "Manche Kommentare sind gemein und verletzen. Das ist nicht deine Schuld. Du musst nicht antworten und kannst den Kommentar melden und die Person blockieren.",
        text: [
          { text: "Kommentare können nett sein, manche aber auch verletzend." },
          { text: "Du musst nicht auf jeden Kommentar antworten." },
          { text: "Bei gemeinen Kommentaren kannst du die Person blockieren oder den Kommentar melden." }
        ],
        bullets: ["Die Nachricht zeigen.", "Die Person blockieren.", "Den Kommentar melden.", "Mit jemandem darüber sprechen."]
      },
      standard: { warning: "Verletzende Kommentare sagen mehr über die andere Person aus als über dich – die Schuld liegt nicht bei dir. Du musst nicht antworten und kannst den Kommentar melden und die Person blockieren.",
        text: [
          { text: "Kommentare können freundlich, aber auch verletzend sein. Du musst nicht auf jeden reagieren. Bei verletzenden Kommentaren kannst du die Nachricht aufbewahren, die Person blockieren, den Kommentar melden und mit jemandem darüber sprechen." }
        ],
        bullets: []
      }
    },
    "Bearbeitete Bilder": {
      einfach: { text: [
        { text: "Auf Instagram wirkt vieles perfekt, doch viele Bilder sind bearbeitet oder mit Filtern verändert." },
        { text: "Mach dir bewusst, dass nicht alles echt ist und du dich damit nicht vergleichen musst." }
      ] },
      standard: { text: [
        { text: "Vieles auf Instagram wirkt makellos – doch zahlreiche Bilder sind nachbearbeitet oder mit Filtern verändert. Mach dir bewusst: Das Gezeigte entspricht oft nicht der Wirklichkeit, und du musst dich damit nicht vergleichen." }
      ] }
    },
    "Was kann ich tun?": {
      einfach: {
        text: [
          { text: "Wenn ein Profil oder eine Nachricht komisch wirkt, mach Stopp und antworte nicht sofort." },
          { text: "Zeig es am besten einer Person, der du vertraust." }
        ],
        bullets: ["Stopp machen.", "Nicht sofort antworten.", "Das Profil oder die Nachricht zeigen.", "Den Hilfe-Knopf nutzen."],
        warning: "Ein fremdes Profil kann eine falsche Person sein, auch wenn die Bilder echt aussehen. Ein schönes Bild ist kein Beweis für die wahre Identität.",
        success: "Wenn du deinem Plan folgst, lässt du dich nicht drängen und entscheidest in Ruhe."
      },
      standard: {
        text: [
          { text: "Wenn dir ein Profil oder eine Nachricht merkwürdig vorkommt, halte inne: Antworte nicht sofort und zeige es einer Person, der du vertraust. Bei Bedarf hilft dir auch der Hilfe-Knopf weiter." }
        ],
        bullets: [],
        warning: "Profile lassen sich leicht fälschen – ansprechende Bilder sagen nichts darüber aus, wer wirklich dahintersteckt. Skepsis gegenüber unbekannten Profilen ist deshalb immer angebracht.",
        success: "Ein fester Ablauf schützt davor, sich zu einer schnellen Entscheidung drängen zu lassen."
      }
    },
    "Das merke ich mir": {
      einfach: {
        text: [{ text: "Zum Schluss findest du die wichtigsten Regeln aus diesem Thema noch einmal." }],
        bullets: ["Fotos prüfen.", "Standort schützen.", "Fremden nicht sofort antworten.", "Keine privaten Fotos an Fremde schicken."]
      },
      standard: {
        text: [{ text: "Die wichtigsten Punkte dieses Themas im Überblick: Prüfe deine Fotos und Videos vor dem Posten, schütze deinen Standort und antworte Fremden nicht vorschnell. Schick keine privaten Bilder an unbekannte Personen und hol dir bei Problemen Unterstützung." }],
        bullets: []
      }
    }
  },

  youtube: {
    "Start": {
      einfach: { text: [
        { text: "Stell dir vor: Ein Video bei YouTube erzählt etwas sehr Überraschendes. Stimmt das wirklich? Darum geht es in diesem Thema." },
        { text: "Du lernst, wie du Videos und Werbung einschätzt und gut auf Pausen achtest." },
        { text: "Wenn du unsicher bist, kannst du jederzeit den Hilfe-Knopf benutzen." }
      ] },
      standard: { text: [{ text: "Stell dir vor: Ein YouTube-Video behauptet etwas sehr Überraschendes. Wie findest du heraus, ob es stimmt? In diesem Kapitel geht es um den sicheren Umgang mit YouTube. Du erfährst, wie du Videos und Werbung einschätzt, Pausen machst und mit beängstigenden oder gefälschten Inhalten umgehst. Wenn du unsicher bist, steht dir jederzeit der Hilfe-Knopf zur Verfügung." }] }
    },
    "Videos prüfen": {
      einfach: { examples: ["Ein Video verspricht: „Mit diesem Trick bist du in einer Woche reich.“", "Ein Video sagt, dass ein bestimmtes Wasser jede Krankheit heilt."], text: [
        { text: "Nicht alles, was in Videos gesagt wird, ist wahr, denn manche Videos übertreiben oder lügen." },
        { text: "Glaub deshalb nicht alles sofort und prüfe wichtige Aussagen." }
      ] },
      standard: { examples: ["Ein Video verspricht, dass man mit einem einfachen Trick in einer Woche reich wird.", "Ein Video behauptet, ein bestimmtes Wasser heile jede Krankheit – ohne Quellen oder Belege."], text: [{ text: "Nicht alles, was in Videos behauptet wird, stimmt. Manche Inhalte übertreiben oder sind bewusst falsch, um Aufmerksamkeit zu erzeugen. Prüfe wichtige Aussagen und glaub nicht alles sofort." }] }
    },
    "Werbung erkennen": {
      einfach: { examples: ["Eine Frau stellt im Video eine Creme vor, und unter dem Video steht „Werbung“.", "„Kauf das jetzt! Nur heute ist es billiger.“"], text: [
        { text: "In vielen Videos steckt Werbung, die dich zum Kaufen bringen will." },
        { text: "Lass dich nicht zu schnellen Käufen drängen und überlege in Ruhe." }
      ] },
      standard: { examples: ["In einem Video wird eine Creme vorgestellt; darunter steht klein „Werbung“ oder „Anzeige“.", "„Nur heute zum halben Preis – jetzt über meinen Link kaufen!“"], text: [{ text: "In vielen Videos steckt Werbung – manchmal offen, manchmal versteckt als Empfehlung. Ihr Ziel ist, dass du etwas kaufst. Lass dich nicht zu schnellen Käufen drängen und überlege in Ruhe." }] }
    },
    "Autoplay und Zeit": {
      einfach: { text: [
        { text: "YouTube spielt automatisch das nächste Video ab, sodass man schnell sehr lange schaut." },
        { text: "Achte darauf, wie lange du schon schaust." },
        { text: "Du darfst jederzeit stoppen und eine Pause machen." }
      ] },
      standard: { text: [{ text: "YouTube startet automatisch das nächste Video, sodass man schnell viel Zeit verliert. Achte darauf, wie lange du schon schaust, und mach bewusst Pausen. Du darfst jederzeit stoppen." }] }
    },
    "Gefährliche Mutproben": {
      einfach: { warning: "Manche Videos zeigen gefährliche Mutproben, die zu Verletzungen führen können. Mach so etwas nicht nach – deine Gesundheit ist wichtiger als ein Video.", text: [
        { text: "Manche Videos zeigen gefährliche Mutproben, die du nicht nachmachen musst." },
        { text: "Deine Gesundheit ist wichtiger als ein Trend oder die Anerkennung anderer." }
      ] },
      standard: { warning: "In manchen Videos werden gefährliche Mutproben gezeigt, die zu ernsten Verletzungen führen können. Ahme sie nicht nach; deine Gesundheit geht vor.", text: [{ text: "Im Netz kursieren Videos mit gefährlichen Mutproben oder „Challenges“. Du musst bei so etwas nicht mitmachen – deine Gesundheit ist wichtiger als ein Trend oder die Anerkennung anderer." }] }
    },
    "Videos, die Angst machen": {
      einfach: { warning: "Manche Videos machen Angst oder Stress. Du darfst ein solches Video jederzeit stoppen. Sprich danach mit einer Person, der du vertraust.", text: [
        { text: "Manche Videos machen Angst oder Stress, und du musst sie nicht zu Ende sehen." },
        { text: "Du darfst das Video stoppen und mit einer vertrauten Person darüber sprechen." }
      ] },
      standard: { warning: "Wenn dir ein Video Angst macht oder Stress auslöst, darfst du es jederzeit beenden. Rede anschließend mit einer Person, der du vertraust, darüber.", text: [{ text: "Manche Videos lösen Angst oder Stress aus. Du musst sie nicht zu Ende sehen – stopp das Video und wende dich bei Bedarf an eine Person, der du vertraust." }] }
    },
    "Kommentare": {
      einfach: {
        text: [
          { text: "Unter Videos gibt es nette, aber auch verletzende Kommentare." },
          { text: "Du musst sie weder lesen noch beantworten." },
          { text: "Lass dich von gemeinen Kommentaren nicht herunterziehen." }
        ],
        remember: "Ich muss nicht auf Kommentare reagieren."
      },
      standard: {
        text: [{ text: "Unter Videos finden sich freundliche, aber auch verletzende Kommentare. Du musst sie weder lesen noch beantworten. Lass dich von gemeinen Kommentaren nicht herunterziehen." }],
        remember: "Ich muss Kommentare weder lesen noch beantworten."
      }
    },
    "Nicht jedes Video ist echt": {
      einfach: {
        text: [
          { text: "Manche Videos sind mit KI gemacht und sehen echt aus, sind aber gefälscht." },
          { text: "Sogar bekannte Menschen werden so täuschend echt nachgemacht." },
          { text: "Mehr dazu lernst du im Thema „Fake News und KI-Fakes“." }
        ],
        remember: "Auch Videos können gefälscht sein."
      },
      standard: {
        text: [{ text: "Manche Videos werden mit künstlicher Intelligenz erzeugt. Sie wirken echt, sind aber gefälscht – mitunter werden sogar bekannte Personen täuschend echt nachgebildet. Mehr dazu erfährst du im Thema „Fake News und KI-Fakes“." }],
        remember: "Auch echt wirkende Videos können gefälscht sein."
      }
    },
    "Was kann ich tun?": {
      einfach: {
        text: [
          { text: "Wenn ein Video dir Angst macht oder dir Stress macht, mach Stopp und mach nichts Gefährliches nach." },
          { text: "Zeig das Video bei Bedarf einer vertrauten Person und mach eine Pause." }
        ],
        bullets: ["Das Video stoppen.", "Nichts nachmachen.", "Eine Pause machen.", "Unterstützung holen."],
        warning: "Manche Videos zeigen gefährliche Mutproben. Wenn du das nachmachst, kannst du dir wehtun.",
        success: "Wenn du das Video stoppst und eine Pause machst, schützt du dich vor Gefahr."
      },
      standard: {
        text: [{ text: "Wenn dir ein Video Angst macht oder dir Stress macht, stopp es und mach nichts nach, was gefährlich ist. Zeig es bei Bedarf einer Person, der du vertraust, und mach eine Pause." }],
        bullets: [],
        warning: "Videos mit gefährlichen Mutproben verbreiten sich schnell, weil sie viele Aufrufe bekommen – das sagt aber nichts über ihre Sicherheit aus. Nachahmung kann ernsthafte Folgen haben.",
        success: "Ein Video zu stoppen und innezuhalten ist der sicherste Weg, sich vor riskanten Nachahmungen zu schützen."
      }
    },
    "Das merke ich mir": {
      einfach: {
        text: [{ text: "Zum Schluss findest du die wichtigsten Regeln aus diesem Thema noch einmal." }],
        bullets: ["Videos prüfen.", "Werbung erkennen.", "Nicht jedes Video ist echt.", "Pausen machen.", "Gefährliche Dinge nicht nachmachen."]
      },
      standard: {
        text: [{ text: "Die wichtigsten Punkte dieses Themas im Überblick: Prüfe Videos kritisch, erkenne Werbung und denk daran, dass nicht jedes Video echt ist. Mach bewusst Pausen und mach gefährliche Mutproben niemals nach." }],
        bullets: []
      }
    }
  },

  snapchat: {
    "Start": {
      einfach: { text: [
        { text: "Stell dir vor: Jemand bei Snapchat will unbedingt ein Foto von dir, aber du willst das nicht. Was machst du? Darum geht es in diesem Thema." },
        { text: "Du lernst, warum Bilder nicht wirklich verschwinden und wie du Stress erkennst." },
        { text: "Wenn du unsicher bist, kannst du jederzeit den Hilfe-Knopf benutzen." }
      ] },
      standard: { text: [{ text: "Stell dir vor: Jemand drängt dich bei Snapchat, ein Foto von dir zu schicken – du willst das aber nicht. Was machst du? In diesem Kapitel geht es um den sicheren Umgang mit Snapchat. Du erfährst, warum Bilder trotz „Verschwinden“ gespeichert werden können, wie du deinen Standort schützt und Stress erkennst. Wenn du unsicher bist, steht dir jederzeit der Hilfe-Knopf zur Verfügung." }] }
    },
    "Bilder verschwinden nicht immer": {
      einfach: { examples: ["Du schickst ein lustiges Bild, das nach 10 Sekunden verschwindet. Aber dein Freund hat es vorher gespeichert.", "Ein Bild, das du nur einer Person geschickt hast, taucht später in einer Gruppe auf."], text: [
        { text: "Bei Snapchat ist ein Bild oft nur kurz zu sehen." },
        { text: "Trotzdem kann der andere das Bild speichern oder abfotografieren." },
        { text: "Sende deshalb nur Bilder, die auch dauerhaft sichtbar sein dürften." }
      ], warning: "Auch wenn ein Bild schnell verschwindet, kann es jemand vorher speichern. Sende deshalb nur Bilder, die andere sehen dürfen." },
      standard: { examples: ["Ein Bild verschwindet nach zehn Sekunden – der Empfänger hat es vorher per Bildschirmfoto gespeichert.", "Ein Bild, das nur für eine Person gedacht war, taucht Wochen später in einem Gruppenchat auf."], text: [{ text: "Bei Snapchat sind Bilder oft nur kurz sichtbar. Das bedeutet aber nicht, dass sie wirklich weg sind: Der Empfänger kann sie speichern oder abfotografieren. Sende deshalb nur Bilder, die auch dauerhaft sichtbar sein dürften." }], warning: "Ein Snap verschwindet zwar nach kurzer Zeit, lässt sich aber vorher per Screenshot sichern. Verschicke deshalb nur Bilder, deren Weitergabe für dich in Ordnung ist." }
    },
    "Bild vom Bildschirm": {
      einfach: {
        text: [
          { text: "Mit einem Bild vom Bildschirm kann jemand dein Bild speichern und weiterschicken – auch ohne dass du es merkst." },
          { text: "Überlege deshalb vor jedem Bild, ob es in fremden Händen ein Problem wäre." }
        ],
        remember: "Ich denke vor dem Senden nach."
      },
      standard: {
        text: [{ text: "Mit einem Bildschirmfoto kann der Empfänger dein Bild dauerhaft speichern und weiterleiten – auch ohne dass du es merkst. Überlege deshalb vor jedem Bild, ob es in fremden Händen ein Problem wäre." }],
        remember: "Vor dem Senden überlege ich, ob das Bild gespeichert werden dürfte."
      }
    },
    "Sehr private Bilder": {
      einfach: { text: [
        { text: "Manche Bilder sind sehr privat, und niemand darf dich zu solchen Bildern drängen." },
        { text: "Du darfst jederzeit Nein sagen und dir Hilfe holen." }
      ], warning: "Niemand darf dich zu sehr privaten Bildern drängen. Du darfst immer Nein sagen und dir Hilfe holen." },
      standard: { text: [{ text: "Sehr private oder intime Bilder solltest du besonders schützen. Niemand hat das Recht, dich zu solchen Aufnahmen zu drängen. Du darfst jederzeit Nein sagen und dir Hilfe holen." }], warning: "Niemand hat das Recht, dich zu intimen Aufnahmen zu drängen. Du darfst jederzeit Nein sagen und dir Hilfe holen – zum Beispiel bei einer Person, der du vertraust." }
    },
    "Standort": {
      einfach: { text: [
        { text: "Snapchat kann anderen zeigen, wo du gerade bist." },
        { text: "Das muss nicht jeder wissen und kann unsicher sein." },
        { text: "Schalte die Standort-Anzeige aus, wenn du das nicht möchtest." }
      ] },
      standard: { text: [{ text: "Snapchat kann über die „Snap Map“ deinen Standort anzeigen. Dann sehen andere, wo du dich aufhältst – das kann unsicher sein. Schalte die Standortfreigabe aus oder nutze den „Geistmodus“, wenn du das nicht möchtest." }] }
    },
    "Kontakte": {
      einfach: { text: [
        { text: "Nicht jeder, der dir schreibt, ist vertrauenswürdig, denn auch Fremde können Kontakt aufnehmen." },
        { text: "Du musst nicht antworten und kannst unbekannte Kontakte blockieren." }
      ] },
      standard: { text: [{ text: "Nicht jeder, der dir schreibt, ist vertrauenswürdig. Auch Fremde können Kontakt aufnehmen. Du musst nicht antworten und kannst unbekannte Kontakte ablehnen oder blockieren." }] }
    },
    "Stress erkennen": {
      einfach: { examples: ["„Schick mir ein Bild. Aber sag es niemandem.“", "„Wenn du mir kein Bild schickst, bin ich nicht mehr dein Freund.“"], text: [
        { text: "Wenn jemand sagt: „Schick das Bild, aber sag es niemandem“, ist das ein Warnzeichen." },
        { text: "Wer Geheimhaltung verlangt, drängt dich bewusst." },
        { text: "Du darfst Nein sagen und dir Hilfe holen." }
      ] },
      standard: { examples: ["„Schick mir ein Bild – aber das bleibt unser Geheimnis.“", "„Wenn du mir kein Bild schickst, ist unsere Freundschaft vorbei.“"], text: [{ text: "Sätze wie „Schick mir das Bild, aber sag es niemandem“ sind ein klares Warnzeichen. Wer Geheimhaltung verlangt, drängt dich bewusst. Du darfst Nein sagen und dir sofort Unterstützung holen." }] }
    },
    "Was kann ich tun?": {
      einfach: {
        text: [
          { text: "Wenn dir eine Nachricht Stress macht, sende kein Bild und reagiere nicht vorschnell." },
          { text: "Zeig die Nachricht einer Person, der du vertraust, und hol dir Unterstützung." }
        ],
        bullets: ["Nein sagen.", "Kein Bild senden.", "Die Nachricht zeigen.", "Unterstützung holen."],
        warning: "Ein Bild, das du einmal gesendet hast, kannst du nicht mehr zurückholen – auch wenn es danach gelöscht wird.",
        success: "Nein zu sagen ist immer richtig, auch wenn jemand Stress macht."
      },
      standard: {
        text: [{ text: "Wenn dir eine Nachricht Stress macht, sende kein Bild und reagiere nicht vorschnell. Zeig die Nachricht einer Person, der du vertraust, und hol dir Unterstützung." }],
        bullets: [],
        warning: "Ein einmal versendetes Bild lässt sich nicht mehr zurückholen, selbst wenn es scheinbar nach kurzer Zeit verschwindet – es kann vorher gespeichert worden sein.",
        success: "Nein zu sagen ist immer eine legitime Antwort – auch und gerade dann, wenn dir Stress gemacht wird."
      }
    },
    "Das merke ich mir": {
      einfach: {
        text: [{ text: "Zum Schluss findest du die wichtigsten Regeln aus diesem Thema noch einmal." }],
        bullets: ["Bilder können gespeichert werden.", "Standort schützen.", "Kontakte prüfen.", "Bei Stress Hilfe holen."]
      },
      standard: {
        text: [{ text: "Die wichtigsten Punkte dieses Themas im Überblick: Bilder können trotz „Verschwinden“ gespeichert werden, also überlege vor dem Senden. Schütze deinen Standort, prüfe deine Kontakte und hol dir bei Stress Unterstützung." }],
        bullets: []
      }
    }
  },

  tiktok: {
    "Start": {
      einfach: { text: [
        { text: "Stell dir vor: Bei TikTok machen gerade viele einen gefährlichen Trend nach. Musst du mitmachen? Darum geht es in diesem Thema." },
        { text: "Du lernst, wie du gefährliche Trends erkennst, deine Daten schützt und Pausen machst." },
        { text: "Wenn du unsicher bist, kannst du jederzeit den Hilfe-Knopf benutzen." }
      ] },
      standard: { text: [{ text: "Stell dir vor: Auf TikTok machen gerade viele einen gefährlichen Trend nach. Musst du mitmachen? In diesem Kapitel geht es um den sicheren Umgang mit TikTok. Du erfährst, wie du gefährliche Trends erkennst, deine Daten schützt, Pausen machst und gefälschte Videos einordnest. Wenn du unsicher bist, steht dir jederzeit der Hilfe-Knopf zur Verfügung." }] }
    },
    "Trends": {
      einfach: { text: [
        { text: "Auf TikTok machen viele Menschen bei Trends mit, und manche Trends sind lustig." },
        { text: "Andere Trends sind aber gefährlich." },
        { text: "Du entscheidest selbst, ob du mitmachst, und musst es nicht." }
      ] },
      standard: { text: [{ text: "Auf TikTok verbreiten sich Trends sehr schnell. Viele sind harmlos und lustig, manche aber gefährlich. Du entscheidest selbst, ob du mitmachst – und musst es nicht." }] }
    },
    "Ähnliche Videos": {
      einfach: { text: [
        { text: "TikTok merkt sich, was du anschaust, und zeigt dir immer mehr vom Gleichen." },
        { text: "Dadurch schaust du schnell sehr lange." },
        { text: "Mach dir das bewusst und leg bewusst Pausen ein." }
      ] },
      standard: { text: [{ text: "TikTok beobachtet, welche Videos du ansiehst, und zeigt dir immer mehr vom Gleichen. Dieser Sog führt dazu, dass man schnell sehr lange schaut. Mach dir das bewusst und leg bewusst Pausen ein." }] }
    },
    "Gefährliche Trends erkennen": {
      einfach: { examples: ["Bei einem Trend sollen alle so lange wie möglich die Luft anhalten. Das ist gefährlich für deine Gesundheit.", "Bei einem Trend essen alle sehr scharfe Chips. Das kann weh tun und dich krank machen."], warning: "Manche Trends sehen lustig aus, können aber gefährlich sein und weh tun. Mach bei solchen Trends nicht mit – deine Gesundheit ist wichtiger.",
        text: [
          { text: "Wenn ein Trend gefährlich aussieht oder wehtun könnte, mach nicht mit – egal, wie viele andere es tun." },
          { text: "Deine Sicherheit ist wichtiger als Likes." }
        ],
        remember: "Ich muss nicht bei jedem Trend mitmachen."
      },
      standard: { examples: ["Ein Trend fordert dazu auf, möglichst lange die Luft anzuhalten – das kann ernsthaft gefährlich werden.", "Bei einer „Challenge“ essen alle extrem scharfe Chips – das kann Schmerzen und Kreislaufprobleme auslösen."], warning: "Nicht jeder Trend ist harmlos: Manche können gefährlich sein und zu Verletzungen führen. Mach bei solchen Challenges nicht mit; deine Gesundheit geht vor.",
        text: [{ text: "Wenn ein Trend gefährlich aussieht oder wehtun könnte, mach nicht mit – egal, wie viele andere es tun. Deine Sicherheit ist wichtiger als Likes." }],
        remember: "Ich mache bei gefährlichen Trends nicht mit."
      }
    },
    "Private Nachrichten": {
      einfach: { examples: ["„Ich mag deine Videos. Gib mir deine Telefon-Nummer, dann schreiben wir privat.“", "„Ich schicke dir Geld, wenn du mir ein Foto von dir schickst.“"], warning: "Fremde Personen können dir bei TikTok schreiben und nach Adresse, Fotos oder anderen Daten fragen. Gib solche Daten nicht weiter und blockiere den Kontakt im Zweifel.", text: [
        { text: "Auch auf TikTok können dir Fremde schreiben und nach Adresse, Fotos oder anderen Daten fragen." },
        { text: "Gib solche Daten nicht weiter und blockiere den Kontakt im Zweifel." }
      ] },
      standard: { examples: ["„Deine Videos sind toll! Gib mir deine Telefonnummer, dann können wir privat schreiben.“", "„Ich schicke dir 50 Euro, wenn du mir ein Foto von dir schickst.“"], warning: "Auch bei TikTok können dir Fremde schreiben und nach Adresse, Fotos oder persönlichen Daten fragen. Gib solche Daten nicht weiter und blockiere den Kontakt im Zweifel.", text: [{ text: "Auch auf TikTok können dir Fremde private Nachrichten schicken und nach Adresse, Fotos oder anderen Daten fragen. Gib solche Informationen nicht weiter und blockiere den Kontakt im Zweifel." }] }
    },
    "Videos posten": {
      einfach: { text: [
        { text: "Ein Video, das du postest, können viele Menschen sehen und speichern." },
        { text: "Prüf deshalb vorher, was darauf zu erkennen ist." },
        { text: "Poste nichts, was dir später schaden könnte." }
      ] },
      standard: { text: [{ text: "Ein gepostetes Video können viele Menschen sehen und speichern. Prüfe vorher, was darauf zu erkennen ist, und veröffentliche nichts, was dir später unangenehm sein oder schaden könnte." }] }
    },
    "Kommentare": {
      einfach: { text: [
        { text: "Unter Videos gibt es nette, aber auch verletzende Kommentare." },
        { text: "Du musst auf keinen Kommentar antworten." },
        { text: "Bei gemeinen Kommentaren kannst du die Person blockieren oder den Kommentar melden." }
      ] },
      standard: { text: [{ text: "Unter Videos gibt es freundliche, aber auch verletzende Kommentare. Du musst auf keinen reagieren. Bei gemeinen Kommentaren kannst du die Person blockieren oder den Kommentar melden." }] }
    },
    "Gefühle und Pausen": {
      einfach: {
        text: [
          { text: "Manche Videos machen traurig, wütend oder nervös." },
          { text: "Du darfst TikTok jederzeit schließen und eine Pause machen." },
          { text: "Über belastende Gefühle kannst du mit einer vertrauten Person sprechen." }
        ],
        remember: "Ich darf TikTok weglegen."
      },
      standard: {
        text: [{ text: "Manche Videos lösen Traurigkeit, Wut oder Unruhe aus. Du darfst die App jederzeit schließen und eine Pause machen. Über belastende Gefühle kannst du mit einer vertrauten Person sprechen." }],
        remember: "Ich darf TikTok jederzeit weglegen."
      }
    },
    "Nicht jedes Video ist echt": {
      einfach: {
        text: [
          { text: "Viele Videos auf TikTok sind mit KI gemacht und sehen echt aus, sind aber gefälscht." },
          { text: "Sogar Stimmen und Gesichter lassen sich täuschend echt nachmachen." },
          { text: "Mehr dazu lernst du im Thema „Fake News und KI-Fakes“." }
        ],
        remember: "Auch Videos können gefälscht sein."
      },
      standard: {
        text: [{ text: "Viele TikTok-Videos werden mit künstlicher Intelligenz erstellt. Sie wirken echt, sind aber gefälscht – sogar Stimmen und Gesichter lassen sich täuschend echt nachbilden. Mehr dazu erfährst du im Thema „Fake News und KI-Fakes“." }],
        remember: "Auch echt wirkende Videos können gefälscht sein."
      }
    },
    "Was kann ich tun?": {
      einfach: {
        text: [
          { text: "Ob gefährlicher Trend, gemeiner Kommentar oder Stress – halte inne und mach nichts Gefährliches nach." },
          { text: "Gib keine privaten Daten preis und zeig die Nachricht oder das Video einer vertrauten Person." }
        ],
        bullets: ["Nichts Gefährliches nachmachen.", "Keine privaten Daten senden.", "Eine Pause machen.", "Unterstützung holen."],
        warning: "Ein Trend kann gefährlich sein, auch wenn ihn schon viele andere mitgemacht haben.",
        success: "Wenn du eine Pause machst und nichts Gefährliches nachmachst, schützt du dich."
      },
      standard: {
        text: [{ text: "Ob gefährlicher Trend, gemeiner Kommentar oder Stress – halte inne und mach nichts Gefährliches nach. Gib keine privaten Daten preis, mach eine Pause und zeig die Nachricht oder das Video einer Person, der du vertraust." }],
        bullets: [],
        warning: "Die Verbreitung eines Trends sagt nichts über seine Sicherheit aus – viele Mitmachende bedeuten nicht, dass etwas ungefährlich ist.",
        success: "Innezuhalten und riskante Trends nicht nachzumachen ist der zuverlässigste Schutz."
      }
    },
    "Das merke ich mir": {
      einfach: {
        text: [{ text: "Zum Schluss findest du die wichtigsten Regeln aus diesem Thema noch einmal." }],
        bullets: ["Gefährliche Trends nicht nachmachen.", "Pausen machen.", "Private Daten schützen.", "Videos vor dem Posten prüfen."]
      },
      standard: {
        text: [{ text: "Die wichtigsten Punkte dieses Themas im Überblick: Mach gefährliche Trends nicht nach, leg bewusst Pausen ein und schütze deine privaten Daten. Prüfe Videos vor dem Posten und denk daran, dass nicht jedes Video echt ist." }],
        bullets: []
      }
    }
  },

  hilfe: {
    /* Paket H1 (30.09.2026): Das Thema ist neu aufgebaut (Kurz K1–K3, Mehr M1–M6,
       Hilfe-Check). Die neuen Einheiten gibt es vorerst nur als ARBEITSFASSUNG in
       Leichter Sprache (Rückfall: Leicht). Die alten Fassungen liegen wörtlich in
       geparkt/hilfe-umbau-2026-09-30.js. „Das merke ich mir“ bleibt: Text und
       Liste baut die App aus dem Weg (zusammenfassungFuerWeg). */
    "Das merke ich mir": {
      einfach: {
        text: [{ text: "Zum Schluss findest du die wichtigsten Regeln aus diesem Thema noch einmal." }],
        bullets: ["Stopp machen.", "Nicht sofort antworten.", "Nicht sofort löschen.", "Die Nachricht zeigen.", "Unterstützung holen."]
      },
      standard: {
        text: [{ text: "Die wichtigsten Punkte dieses Themas im Überblick: Mach bei Problemen erst einmal Stopp, antworte nicht vorschnell und lösche verdächtige Nachrichten nicht sofort. Zeig sie einer vertrauten Person und hol dir Unterstützung." }],
        bullets: []
      }
    }
  },

  ki: {
    "So prüfst du eine Antwort": {
      einfach: {
        text: [
          { text: "Du kannst eine Antwort von der KI selbst prüfen. Dabei helfen dir 3 Fragen." }
        ],
        bullets: [
          { text: "Woher weiß die KI das?" },
          { text: "Steht das auch woanders?" },
          { text: "Wen kann ich fragen?" }
        ],
        warning: "Bei Geld und Gesundheit fragst du immer einen Menschen, weil ein Fehler dort teuer oder gefährlich wird."
      },
      standard: {
        text: [{ text: "Ob eine KI-Antwort belastbar ist, lässt sich mit drei Fragen klären: Worauf stützt sich die Aussage? Findet sie sich in einer unabhängigen Quelle wieder? Und wen kann ich fragen, wenn ich unsicher bleibe? Sprachmodelle erzeugen flüssigen Text, keine geprüften Fakten – sie können Namen, Zahlen und Quellen erfinden, ohne dass man es dem Text ansieht." }],
        warning: "Bei Geld, Gesundheit und Rechtsfragen ersetzt keine KI die Auskunft eines Menschen."
      }
    },
    "Start": {
      einfach: { text: [
        { text: "Stell dir vor: Du stellst einer KI eine Frage, und sie antwortet sofort. Stimmt die Antwort? Darum geht es in diesem Thema." },
          { text: "KI bedeutet künstliche Intelligenz." },
        { text: "Du lernst, was KI kann und was nicht und wie du sie sicher nutzt." }
      ] },
      standard: { text: [{ text: "Stell dir vor: Du stellst einem Chatbot eine Frage und bekommst sofort eine überzeugende Antwort. Kannst du dich darauf verlassen? In diesem Kapitel geht es um künstliche Intelligenz, kurz KI. Du erfährst, was KI leisten kann und was nicht, wo du ihr begegnest und wie du sie sicher und kritisch nutzt." }] }
    },
    "Was ist KI?": {
      einfach: {
        text: [
          { text: "KI ist ein Computer-Programm, das aus sehr vielen Texten und Bildern gelernt hat." },
          { text: "Dadurch kann sie Fragen beantworten und Texte oder Bilder erstellen." },
          { text: "Sie versteht die Welt aber nicht wie ein Mensch." }
        ],
        bullets: ["KI kann mit dir schreiben.", "KI kann mit dir sprechen.", "KI kann Bilder erstellen.", "KI kann Texte schreiben."],
        remember: "KI ist ein Programm. KI ist kein Mensch."
      },
      standard: {
        text: [{ text: "KI ist ein Computerprogramm, das aus sehr großen Mengen an Texten und Bildern gelernt hat. Dadurch kann sie Fragen beantworten sowie selbst Texte und Bilder erzeugen. Sie versteht die Welt aber nicht wie ein Mensch, sondern berechnet wahrscheinliche Antworten." }],
        bullets: [],
        remember: "KI ist ein lernendes Programm – kein Mensch."
      }
    },
    "Wo triffst du KI?": {
      einfach: {
        text: [
          { text: "KI steckt heute in vielen Apps, oft ohne dass du es sofort merkst." },
          { text: "Hier sind ein paar bekannte Beispiele." }
        ],
        bullets: ["Chatbots wie ChatGPT", "Sprach-Hilfen wie Alexa oder Siri", "KI in WhatsApp und Instagram, zum Beispiel Meta AI", "KI-Bilder und KI-Videos im Internet"],
        remember: "KI steckt in vielen Apps – auch wenn ich sie nicht sehe."
      },
      standard: {
        text: [{ text: "Künstliche Intelligenz steckt heute in vielen Programmen und Apps, oft ohne dass man es sofort merkt – etwa in Chatbots wie ChatGPT, in Sprachassistenten wie Alexa oder Siri, in WhatsApp und Instagram sowie in KI-erzeugten Bildern und Videos." }],
        bullets: [],
        remember: "KI ist vielerorts im Einsatz – auch unsichtbar."
      }
    },
    "Ein Chatbot ist kein Mensch": {
      einfach: {
        text: [
          { text: "Ein Chatbot schreibt sehr freundlich, sodass es sich fast wie ein Freund anfühlen kann." },
          { text: "Trotzdem ist er nur ein Programm und hat keine echten Gefühle." }
        ],
        warning: "Ein Chatbot ist kein echter Freund. Wichtige Sorgen besprichst du mit einem Menschen."
      },
      standard: {
        text: [{ text: "Chatbots antworten freundlich und persönlich, sodass sich ein Gespräch fast wie mit einem Freund anfühlen kann. Trotzdem ist ein Chatbot nur ein Programm ohne echte Gefühle. Wichtige Sorgen solltest du mit einem Menschen besprechen." }],
        warning: "Ein Chatbot ersetzt keine echten Bezugspersonen. Bei ernsten Sorgen wende dich an einen Menschen."
      }
    },
    "KI macht Fehler": {
      einfach: {
        text: [
          { text: "KI klingt oft sehr sicher, kann sich aber irren und manchmal sogar Dinge erfinden." },
          { text: "Prüfe wichtige Antworten deshalb lieber an einer zweiten Stelle." }
        ],
        examples: ["Die KI nennt eine falsche Telefon-Nummer.", "Die KI erzählt etwas, das nie passiert ist."]
      },
      standard: {
        text: [{ text: "Auch wenn KI sehr überzeugend klingt, kann sie sich irren – und erfindet manchmal sogar Fakten, Namen oder Quellen. Verlass dich bei wichtigen Dingen nicht blind auf sie, sondern prüfe die Antworten an einer zweiten Stelle." }],
        examples: ["Die KI nennt dir eine Telefonnummer, die es gar nicht gibt.", "Die KI beschreibt ein Ereignis, das nie stattgefunden hat – und klingt dabei völlig überzeugend."]
      }
    },
    "Keine privaten Daten": {
      einfach: {
        text: [
          { text: "Die KI speichert oft, was du ihr schreibst." },
          { text: "Gib der KI deshalb keine privaten Daten." }
        ],
        bullets: ["kein Passwort", "keine Adresse", "keine Bank-Daten", "keine sehr privaten Geheimnisse"]
      },
      standard: {
        text: [{ text: "Eingaben an eine KI werden häufig gespeichert und weiterverarbeitet. Gib deshalb keine sensiblen Informationen ein – etwa Passwörter, deine Adresse, Bankdaten oder sehr private Geheimnisse." }],
        bullets: []
      }
    },
    "Gesundheit und Geld": {
      einfach: {
        text: [
          { text: "Bei Gesundheit und Geld ist Vorsicht wichtig, denn die KI kennt deine Situation nicht und kann falsche Tipps geben." },
          { text: "Frag bei solchen Themen deshalb immer auch einen Menschen." }
        ],
        examples: ["Du bist krank und fragst die KI. Besser: Du fragst auch eine Ärztin oder einen Arzt.", "Du willst Geld ausgeben und die KI rät dir etwas. Besser: Du fragst eine Person, der du vertraust."]
      },
      standard: {
        text: [{ text: "Bei Gesundheit und Geld ist besondere Vorsicht geboten: Die KI kennt deine persönliche Situation nicht und kann falsche oder gefährliche Ratschläge geben. Hol dir bei solchen Themen immer zusätzlich den Rat eines Menschen – etwa einer Ärztin, eines Arztes oder einer Vertrauensperson." }],
        examples: ["Du fühlst dich krank und fragst eine KI. Ihre Antwort ersetzt keine Ärztin und keinen Arzt.", "Eine KI empfiehlt dir eine Geldanlage. Bevor du etwas bezahlst oder unterschreibst, sprich mit einer Person, der du vertraust."]
      }
    },
    "KI kann Bilder und Stimmen fälschen": {
      einfach: {
        text: [
          { text: "KI kann Bilder erstellen, die echt aussehen, und sogar Stimmen nachmachen." },
          { text: "Betrüger nutzen das manchmal aus." },
          { text: "Wenn du unsicher bist, frag eine Person, der du vertraust." },
          { text: "Mehr dazu lernst du im Thema „Fake News und KI-Fakes“." }
        ],
        warning: "Nicht alles, was echt aussieht, ist echt. Nachfragen ist erlaubt und klug."
      },
      standard: {
        text: [{ text: "Mit KI lassen sich Bilder erzeugen und Stimmen nachahmen, die täuschend echt wirken. Betrüger nutzen das aus, etwa für gefälschte Anrufe oder Sprachnachrichten. Du musst das nicht allein einschätzen – bei Unsicherheit lohnt sich die Rückfrage bei einer Person, der du vertraust. Mehr dazu erfährst du im Thema „Fake News und KI-Fakes“." }],
        warning: "Echt wirkende Bilder und Stimmen können mit KI gefälscht sein. Nachfragen ist erlaubt und klug."
      }
    },
    "Was kann ich tun?": {
      einfach: {
        text: [
          { text: "Du darfst KI ruhig benutzen, denn sie kann dir bei vielem helfen." },
          { text: "Damit du dabei sicher bist, helfen dir die folgenden Regeln." }
        ],
        bullets: ["Ich weiß: KI ist ein Programm.", "Ich prüfe wichtige Antworten.", "Ich gebe keine privaten Daten ein.", "Bei Gesundheit und Geld frage ich Menschen.", "Bei Unsicherheit hole ich Hilfe."],
        warning: "Eine KI kann sich irren, auch wenn die Antwort sehr sicher klingt.",
        success: "Wenn du wichtige Antworten prüfst, schützt du dich vor Fehlern."
      },
      standard: {
        text: [{ text: "Du darfst KI ruhig nutzen – sie kann dir bei vielem helfen. Behalte dabei einige Regeln im Kopf: Denk daran, dass KI ein Programm ist, prüfe wichtige Antworten, gib keine privaten Daten ein, frag bei Gesundheit und Geld zusätzlich Menschen und hol dir bei Unsicherheit Unterstützung." }],
        bullets: [],
        warning: "KI-Antworten können überzeugend klingen und trotzdem falsch sein – der sichere Tonfall ist kein Beleg für Richtigkeit.",
        success: "Wichtige KI-Antworten zusätzlich zu prüfen bewahrt dich vor folgenschweren Fehlern."
      }
    },
    "Das merke ich mir": {
      einfach: {
        text: [{ text: "Du hast viel über KI gelernt – diese Sätze kannst du dir gut merken." }],
        bullets: ["KI ist ein Programm, kein Mensch.", "KI kann Fehler machen.", "Ich prüfe wichtige Antworten.", "Private Daten bleiben bei mir.", "Ich darf mir Unterstützung holen."],
        remember: "Ich nutze KI mit Verstand."
      },
      standard: {
        text: [{ text: "Die wichtigsten Punkte dieses Themas im Überblick: KI ist ein Programm, kein Mensch, und kann Fehler machen. Prüfe wichtige Antworten, behalte deine privaten Daten für dich und hol dir bei Bedarf Unterstützung." }],
        bullets: [],
        remember: "Ich nutze KI bewusst und mit Verstand."
      }
    }
  },

  fakes: {
    "Start": {
      einfach: { text: [
        { text: "Stell dir vor: Eine Nachricht macht dich sehr wütend, und du willst sie sofort teilen. Was machst du? Darum geht es in diesem Thema." },
          { text: "Fake bedeutet gefälscht oder nicht echt." },
        { text: "Du lernst, wie du falsche Nachrichten und auch falsche Bilder oder Stimmen erkennst." },
        { text: "Wenn dich ein Beispiel belastet, kannst du jederzeit eine Pause machen." }
      ] },
      standard: { text: [{ text: "Stell dir vor: Eine Nachricht macht dich wütend, und du möchtest sie sofort weiterleiten. Was tust du? In diesem Kapitel geht es um Fakes – also um Gefälschtes im Internet. Du erfährst, wie du falsche Nachrichten erkennst und wie du gefälschte Bilder, Videos und Stimmen einordnest. Wenn dich ein Beispiel belastet, mach ruhig eine Pause." }] }
    },
    "Was sind Fake News?": {
      einfach: {
        text: [
          { text: "Fake News sind falsche Nachrichten, die jemand mit Absicht verbreitet." },
          { text: "Sie sehen oft aus wie echte Nachrichten und sind deshalb schwer zu erkennen." }
        ],
        remember: "Nicht jede Nachricht im Internet ist wahr."
      },
      standard: {
        text: [{ text: "Fake News sind absichtlich verbreitete Falschmeldungen. Sie sind oft so aufgemacht wie echte Nachrichten und deshalb schwer zu erkennen. Genau das macht sie gefährlich." }],
        remember: "Nicht jede Nachricht im Internet ist wahr."
      }
    },
    "Warum gibt es Fake News?": {
      einfach: {
        text: [{ text: "Menschen machen Fake News aus verschiedenen Gründen, denn sie verfolgen damit immer ein bestimmtes Ziel." }],
        bullets: ["Sie wollen mit vielen Aufrufen Geld verdienen.", "Sie wollen Menschen wütend machen.", "Sie wollen, dass du etwas Falsches glaubst.", "Sie wollen eine Meinung verbreiten."],
        remember: "Fake News haben ein Ziel. Sie wollen mein Denken verändern."
      },
      standard: {
        text: [{ text: "Hinter Fake News stecken meist klare Absichten: Manche wollen mit vielen Aufrufen Geld verdienen, andere Menschen verärgern, etwas Falsches glaubhaft machen oder eine bestimmte Meinung verbreiten." }],
        bullets: [],
        remember: "Fake News verfolgen ein Ziel – sie wollen mein Denken beeinflussen."
      }
    },
    "KI-Bilder erkennen": {
      einfach: {
        text: [
          { text: "KI kann Bilder erstellen, die echt aussehen." },
          { text: "Manche Fehler kannst du erkennen, aber Achtung: Viele KI-Bilder haben gar keine Fehler mehr." }
        ],
        bullets: ["Schau auf Hände und Finger.", "Schau auf Schrift im Bild.", "Schau auf Licht und Schatten.", "Wirkt das Bild zu perfekt?"]
      },
      standard: {
        text: [{ text: "KI kann Bilder erzeugen, die täuschend echt wirken. Manchmal verraten kleine Fehler die Fälschung – etwa an Händen, Schrift oder Schatten. Verlass dich aber nicht darauf: Viele KI-Bilder sind inzwischen fehlerfrei." }],
        bullets: []
      }
    },
    "Gefälschte Videos: Deepfakes": {
      einfach: {
        text: [
          { text: "Ein Deepfake ist ein gefälschtes Video, in dem KI Gesicht oder Stimme austauscht." },
          { text: "So scheint eine Person etwas zu sagen, das sie nie gesagt hat – oft trifft es bekannte Menschen." }
        ],
        examples: ["Ein Video zeigt einen Promi, der Werbung für Geld-Anlagen macht. Das Video ist gefälscht.", "Ein Video zeigt eine Politikerin, die etwas Schlimmes sagt. Das Video ist gefälscht."]
      },
      standard: {
        text: [{ text: "Ein Deepfake ist ein mit KI gefälschtes Video, in dem Gesicht oder Stimme ausgetauscht werden. So scheint eine Person etwas zu sagen, das sie nie gesagt hat – oft trifft es bekannte Persönlichkeiten. Bleib deshalb auch bei „Video-Beweisen“ kritisch." }],
        examples: ["Ein Video zeigt einen bekannten Moderator, der für eine Geldanlage wirbt – das Video ist mit KI gefälscht.", "Ein Video zeigt eine Politikerin, die etwas Schockierendes sagt – auch dieses Video ist gefälscht."]
      }
    },
    "Geklonte Stimmen am Telefon": {
      einfach: {
        text: [
          { text: "KI kann Stimmen nachmachen, und Betrüger rufen damit an, sodass die Stimme wie deine Familie klingt." },
          { text: "Die Stimme sagt dann zum Beispiel: „Ich brauche schnell Geld“ – das nennt man Schockanruf." }
        ],
        warning: "Leg auf. Ruf die Person selbst an – mit der Nummer, die du kennst."
      },
      standard: {
        text: [{ text: "KI kann Stimmen täuschend echt nachahmen. Betrüger nutzen das für sogenannte Schockanrufe: Eine vertraut klingende Stimme bittet dringend um Geld. Lass dich nicht drängen, leg auf und ruf die Person über ihre dir bekannte Nummer selbst zurück." }],
        warning: "Bei dringenden Geldforderungen am Telefon: auflegen und die Person über die bekannte Nummer selbst anrufen."
      }
    },
    "Nachrichten prüfen": {
      einfach: {
        text: [
          { text: "Du kannst eine Nachricht mit ein paar einfachen Fragen prüfen." },
          { text: "Diese Fragen helfen dir dabei." }
        ],
        bullets: ["Wer hat das geschrieben?", "Steht das auch bei bekannten Nachrichten-Seiten?", "Wie alt ist die Nachricht?", "Gibt es eine Quelle?"]
      },
      standard: {
        text: [{ text: "Du kannst Meldungen mit ein paar einfachen Fragen prüfen: Wer hat sie verfasst? Berichten auch bekannte, seriöse Nachrichtenseiten darüber? Wie aktuell ist die Meldung, und wird eine Quelle genannt?" }],
        bullets: []
      }
    },
    "Die Nachricht will dich aufregen": {
      einfach: { warning: "Deine Gefühle sind richtig. Aber Fake News lösen mit Absicht Wut oder Angst aus – genau das ist der Trick. Prüfe eine Nachricht erst, bevor du sie glaubst oder teilst.", text: [
        { text: "Fake News lösen oft starke Gefühle wie Wut oder Angst aus, denn wer aufgewühlt ist, prüft weniger." },
        { text: "Deine Gefühle sind dabei richtig – aufregen soll dich die Nachricht, und genau das ist die Absicht." },
        { text: "Wenn dich eine Nachricht stark aufregt, lohnt sich das Prüfen besonders." }
      ] },
      standard: { warning: "Deine Gefühle sind eine richtige Reaktion – aber Fake News lösen Wut oder Angst gezielt aus. Genau darin liegt die Absicht. Prüfe eine solche Nachricht in Ruhe, bevor du sie glaubst oder weiterleitest.", text: [{ text: "Fake News sind oft so gemacht, dass sie starke Gefühle wie Wut oder Angst auslösen – denn wer aufgewühlt ist, prüft weniger. Deine Reaktion ist dabei nicht das Problem: Die Meldung ist bewusst darauf angelegt. Genau deshalb gilt: Wenn dich etwas stark aufregt, prüfe es besonders gründlich." }] }
    },
    "Nicht einfach weiterleiten": {
      einfach: { text: [
        { text: "Wenn du Fakes weiterleitest, verbreiten sie sich, und noch mehr Menschen glauben die Lüge." },
        { text: "Darum gilt: erst prüfen, dann teilen – und im Zweifel lieber nicht teilen." }
      ] },
      standard: { text: [{ text: "Jede Weiterleitung hilft einer Falschmeldung, sich zu verbreiten – und mehr Menschen glauben sie. Teile deshalb nur, was du geprüft hast. Im Zweifel gilt: lieber nicht weiterleiten." }] }
    },
    "Was kann ich tun?": {
      einfach: {
        text: [
          { text: "Du kannst dich gut vor Fakes schützen." },
          { text: "Die folgenden Regeln helfen dir dabei." }
        ],
        bullets: ["Ich glaube nicht alles sofort.", "Ich prüfe: Wer schreibt das? Steht das auch woanders?", "Bei starken Gefühlen mache ich langsam.", "Im Zweifel teile ich nicht.", "Ich kann eine Person fragen, der ich vertraue."],
        warning: "Wenn eine Nachricht starke Gefühle wie Angst oder Wut in dir auslöst, willst du sie oft schnell teilen. Genau dann ist besondere Vorsicht wichtig.",
        success: "Wenn du im Zweifel nicht teilst, schützt du dich und andere Menschen."
      },
      standard: {
        text: [{ text: "Du kannst dich gut schützen: Glaub nicht alles sofort, prüfe Absender und ob seriöse Quellen dasselbe berichten, und werde besonders aufmerksam, wenn eine Meldung starke Gefühle auslöst. Teile im Zweifel nicht und frag bei Unsicherheit eine Person, der du vertraust." }],
        bullets: [],
        warning: "Nachrichten, die starke Gefühle wie Angst oder Empörung auslösen, verleiten dazu, sie ungeprüft weiterzuleiten – genau das machen sich Falschmeldungen gezielt zunutze.",
        success: "Im Zweifel nicht zu teilen schützt nicht nur dich, sondern verhindert auch, dass sich Falschmeldungen weiter verbreiten."
      }
    },
    "Das merke ich mir": {
      einfach: {
        text: [{ text: "Du hast viel über Fakes gelernt – diese Sätze kannst du dir gut merken." }],
        bullets: ["Nicht alles im Internet ist wahr.", "Bilder, Videos und Stimmen können gefälscht sein.", "Aufregende Nachrichten prüfe ich erst.", "Erst prüfen, dann teilen.", "Ich darf mir Unterstützung holen."],
        remember: "Erst prüfen. Dann glauben."
      },
      standard: {
        text: [{ text: "Die wichtigsten Punkte dieses Themas im Überblick: Nicht alles im Internet ist wahr, und auch Bilder, Videos und Stimmen lassen sich fälschen. Was dich stark aufregt, prüfst du zuerst – erst prüfen, dann teilen. Bei Unsicherheit darfst du dir Unterstützung holen." }],
        bullets: [],
        remember: "Erst prüfen, dann glauben."
      }
    }
  },

  betrug: {
    "Was kann ich tun?": {
      einfach: {
        text: [
          { text: "Betrug kommt fast immer überraschend – als Nachricht, die dir Stress macht, oder als Anruf, der Angst macht." },
          { text: "Ein fester Plan hilft dir, ruhig zu bleiben. Denn wer ruhig bleibt, macht keinen Fehler." }
        ],
        bullets: [
          { text: "Bei Stress mache ich Stopp." },
          { text: "Ich zahle niemals sofort." },
          { text: "Ich rufe selbst an – mit der Nummer, die ich schon habe." },
          { text: "Ich lese genau nach, was etwas kostet." },
          { text: "Ich frage eine Person, der ich vertraue." }
        ],
        warning: "Keine echte Bank und keine echte Behörde fragt am Telefon nach deinem Passwort oder verlangt, dass du sofort zahlst.",
        success: "Mit einem festen Plan bleibst du ruhig – und genau das schützt dich."
      },
      standard: {
        text: [{ text: "Betrugsmaschen funktionieren über Eile: Wer sofort handeln soll, denkt nicht nach. Ein eingeübter Ablauf nimmt diesem Stress seine Wirkung, weil er die Entscheidung aus dem Moment herausnimmt. Er wirkt auch dann, wenn die Masche neu ist und du sie noch nie gehört hast." }],
        bullets: [
          { text: "Bei Stress grundsätzlich anhalten – Eile ist das Warnzeichen, nicht der Inhalt." },
          { text: "Niemals sofort zahlen, überweisen oder Gutscheincodes durchgeben." },
          { text: "Selbst zurückrufen, und zwar über die Nummer, die du schon kennst – nie über die aus der Nachricht." },
          { text: "Bei Angeboten das Kleingedruckte lesen: Was kostet es, ab wann, und wie kündigt man?" },
          { text: "Eine zweite Meinung einholen. Maschen funktionieren fast nur, solange niemand sonst davon weiß." }
        ],
        warning: "Weder Banken noch Behörden fordern am Telefon Passwörter, TANs oder sofortige Zahlungen. Jede solche Forderung ist ein Betrugsversuch – ausnahmslos.",
        success: "Ein eingeübter Ablauf schützt besser als Misstrauen im Einzelfall: Er greift auch bei Maschen, die du noch nicht kennst."
      }
    },
    "Vorsicht bei QR-Codes": {
      einfach: {
        text: [
          { text: "Ein QR-Code ist wie eine Tür: Du siehst vorher nicht, wohin sie führt." },
          { text: "Betrüger überkleben echte QR-Codes mit falschen. Zum Beispiel an Park-Automaten oder in Briefen." },
          { text: "Scanne nur Codes aus einer Quelle, der du vertraust. Im Zweifel fragst du vorher eine vertraute Person." }
        ],
        warning: "Ein falscher QR-Code kann auf eine Betrugs-Seite führen. Erst prüfen, dann scannen."
      },
      standard: {
        text: [{ text: "QR-Codes zeigen erst nach dem Scannen, wohin sie führen. Kriminelle nutzen das aus und überkleben echte Codes mit gefälschten – etwa an Parkautomaten, in Briefen oder auf falschen Paket-Benachrichtigungen (sogenanntes Quishing). Scanne nur Codes aus vertrauenswürdiger Quelle und prüfe die geöffnete Internet-Adresse, bevor du dort etwas eingibst." }],
        warning: "Quishing nimmt stark zu. Prüfe die Ziel-Adresse eines QR-Codes, bevor du Daten eingibst."
      }
    },
    "Start": {
      einfach: { text: [
        { text: "Stell dir vor: Eine SMS sagt, dass du gewonnen hast. Du sollst nur schnell eine kleine Gebühr bezahlen. Was machst du? Darum geht es in diesem Thema." },
          { text: "Betrüger wollen dein Geld oder deine Daten." },
        { text: "Betrug kann jedem Menschen passieren und ist nie deine Schuld." },
        { text: "Du lernst die bekannten Tricks, denn wer sie kennt, ist besser geschützt." },
        { text: "Wenn dich ein Beispiel belastet, kannst du jederzeit eine Pause machen." }
      ] },
      standard: { text: [{ text: "Stell dir vor: Eine SMS meldet einen Gewinn – du sollst nur schnell eine kleine Gebühr zahlen. Was tust du? In diesem Kapitel geht es um Betrug im Internet. Vorweg das Wichtigste: Betrug kann jedem passieren und ist nie die Schuld der betroffenen Person. Betrüger haben es auf dein Geld oder deine Daten abgesehen. Du lernst die häufigsten Maschen kennen – denn wer die Tricks kennt, fällt seltener darauf herein. Wenn dich ein Beispiel belastet, mach ruhig eine Pause." }] }
    },
    "Was ist Phishing?": {
      einfach: {
        text: [
          { text: "Phishing ist ein Trick mit falschen Nachrichten, die aussehen wie von deiner Bank oder einer Firma." },
          { text: "In der Nachricht steckt ein Link, der zu einer falschen Seite führt und deine Daten stehlen will." }
        ],
        examples: ["Eine E-Mail sagt: „Ihr Konto wird gesperrt. Klicken Sie hier.“", "Eine SMS sagt: „Bestätigen Sie Ihre Bank-Daten.“"]
      },
      standard: {
        text: [{ text: "Beim Phishing verschicken Betrüger Nachrichten, die täuschend echt aussehen – etwa angeblich von deiner Bank oder einem bekannten Unternehmen. Über einen Link wirst du auf eine gefälschte Seite gelockt, die deine Zugangsdaten abgreifen soll. Gib dort nichts ein." }],
        examples: ["Eine E-Mail warnt: „Ihr Konto wird gesperrt. Klicken Sie hier, um es zu entsperren.“", "Eine SMS fordert dich auf, deine Bankdaten zu bestätigen: „Bitte bestätigen Sie jetzt Ihre Daten.“"]
      }
    },
    "Falsche Nachrichten erkennen": {
      einfach: {
        text: [
          { text: "Betrugs-Nachrichten haben oft die gleichen Merkmale, die du erkennen lernen kannst." },
          { text: "Die folgenden Warnzeichen helfen dir dabei." }
        ],
        bullets: ["Die Nachricht drängt: „Sofort! Schnell! Letzte Chance!“", "Die Nachricht droht: „Sonst wird Ihr Konto gesperrt.“", "Du sollst auf einen Link tippen.", "Du sollst Daten eingeben oder Geld zahlen.", "Die Nachricht kommt überraschend."],
        remember: "Stress und Drohung sind Warnzeichen."
      },
      standard: {
        text: [{ text: "Betrugsnachrichten ähneln sich oft: Sie erzeugen Stress oder drohen mit Folgen, fordern dich auf, einen Link anzutippen, verlangen Daten oder Geld – und kommen meist überraschend. Wer diese Muster kennt, erkennt den Betrug leichter." }],
        bullets: [],
        remember: "Stress und Drohung sind typische Warnzeichen für Betrug."
      }
    },
    "Der Paket-Trick": {
      einfach: {
        text: [
          { text: "Eine SMS behauptet: „Ihr Paket wartet“, und du sollst eine kleine Gebühr zahlen oder auf einen Link tippen." },
          { text: "Das ist fast immer Betrug." }
        ],
        warning: "Echte Paket-Dienste fordern kein Geld per SMS."
      },
      standard: {
        text: [{ text: "Eine beliebte Masche ist die Paket-SMS: Angeblich wartet eine Sendung, du sollst eine kleine Gebühr zahlen oder einen Link antippen. Dahinter steckt fast immer Betrug. Seriöse Paketdienste fordern kein Geld per SMS." }],
        warning: "Echte Paketdienste verlangen niemals Gebühren per SMS-Link."
      }
    },
    "Der Hallo-Mama-Trick": {
      einfach: { text: [
        { text: "Eine WhatsApp-Nachricht sagt: „Hallo Mama, ich habe eine neue Nummer und brauche schnell Geld.“" },
        { text: "Das ist ein bekannter Betrug, also überweise nichts und ruf die echte Person an." }
      ] },
      standard: { text: [{ text: "Beim „Hallo-Mama-Trick“ geben sich Betrüger über WhatsApp als Sohn oder Tochter mit neuer Nummer aus und bitten dringend um Geld. Überweise nichts, sondern ruf die echte Person unter ihrer bekannten Nummer an." }] }
    },
    "Liebe im Internet": {
      "einfach": {
        "text": [
          {
            "text": "Viele Menschen suchen Liebe im Internet, und das ist in Ordnung."
          },
          {
            "text": "Manche Menschen lügen dabei aber: Eine fremde Person schreibt dir sehr oft liebe Worte, doch ihr trefft euch nie."
          },
          {
            "text": "Irgendwann bittet die Person um Geld, zum Beispiel für eine Reise oder für einen Notfall."
          },
          {
            "text": "Fotos und Stimmen können mit KI gefälscht sein. Auch ein Video ist kein Beweis."
          },
          {
            "text": "Du musst das nicht allein entscheiden. Sprich mit einer Person, der du vertraust."
          }
        ],
        "bullets": [
          "Ich schicke kein Geld.",
          "Ich spreche mit einer Person, der ich vertraue.",
          "Ich kann den Kontakt blockieren.",
          "Ich kann Anzeige bei der Polizei machen."
        ],
        "examples": [
          "„Ich liebe dich“ – obwohl ihr euch noch nie gesehen habt.",
          "„Ich brauche Geld für das Flugticket, dann besuche ich dich endlich.“"
        ],
        "warning": "Wenn eine fremde Person um Geld bittet und ihr euch noch nie getroffen habt, schick kein Geld. Sprich zuerst mit einer Person, der du vertraust.",
        "success": "Betrug kann jedem passieren. Du musst dich nicht schämen.",
        "remember": "Ich schicke kein Geld an Menschen, die ich nur aus dem Internet kenne."
      },
      "standard": {
        "text": [
          {
            "text": "Beim Liebes-Betrug (Romance Scamming) bauen Betrüger über Wochen oder Monate eine Beziehung auf – über Dating-Portale oder soziale Netzwerke. Ein Treffen kommt immer wieder nicht zustande."
          },
          {
            "text": "Irgendwann folgt die Bitte um Geld: für ein Ticket, eine Notlage, eine angeblich sichere Geldanlage. Danach folgen weitere Bitten."
          },
          {
            "text": "Profilbilder, Sprachnachrichten und sogar Videos lassen sich mit KI fälschen. Sie sind kein Beweis dafür, dass jemand echt ist."
          },
          {
            "text": "Die wichtigste Regel: kein Geld an Menschen, die du nur aus dem Internet kennst. Und: Du musst das nicht allein entscheiden – sprich mit einer Vertrauensperson, bevor du etwas überweist."
          }
        ],
        "bullets": [
          "Kein Geld überweisen, auch nicht in kleinen Beträgen.",
          "Mit einer Vertrauensperson sprechen, bevor du etwas tust.",
          "Den Kontakt blockieren und melden.",
          "Chat-Verläufe sichern und Anzeige bei der Polizei erstatten."
        ],
        "examples": [
          "„Ich liebe dich“ nach wenigen Tagen – ein persönliches Treffen platzt immer wieder.",
          "„Ich brauche Geld für das Flugticket, dann können wir uns endlich sehen.“"
        ],
        "warning": "Wer dich noch nie getroffen hat und um Geld bittet, ist mit hoher Wahrscheinlichkeit ein Betrüger. Überweise nichts und hol dir vorher eine zweite Meinung bei einer Vertrauensperson.",
        "success": "Liebes-Betrug trifft viele Menschen, auch vorsichtige. Scham ist unangebracht – schnelles Handeln zählt.",
        "remember": "Kein Geld an Menschen, die ich nur aus dem Internet kenne – und vorher mit einer Vertrauensperson sprechen."
      }
    },
    "Schockanrufe": {
      einfach: {
        text: [
          { text: "Bei einem Schockanruf macht dir jemand große Angst, zum Beispiel mit den Worten: „Ihr Kind hatte einen Unfall, wir brauchen Geld.“" },
          { text: "Mit KI kann die Stimme sogar echt klingen, und manche geben sich als Polizei aus." },
          { text: "Solche Anrufe sind ein Trick – der Notfall ist erfunden." },
          { text: "Sprich danach mit einer vertrauten Person darüber." }
        ],
        remember: "Bei Angst-Anrufen lege ich auf und rufe selbst zurück.",
        warning: "Leg auf und ruf die Person selbst an, unter der Nummer, die du kennst. Die echte Polizei fordert nie Geld am Telefon."
      },
      standard: {
        text: [{ text: "Bei Schockanrufen erzeugen Betrüger gezielt Angst – etwa mit der Behauptung, ein Angehöriger hatte einen Unfall und brauche sofort Geld. Mit KI kann die Stimme sogar vertraut klingen, und manche geben sich als Polizei aus. Der Notfall ist erfunden: Leg auf und ruf die echte Person oder Stelle selbst an, unter der Nummer, die du kennst. Sprich danach mit jemandem darüber – solche Anrufe wirken nach." }],
        remember: "Bei Angst-Anrufen lege ich auf und rufe selbst zurück.",
        warning: "Polizei und Behörden verlangen niemals Geld oder Wertsachen am Telefon."
      }
    },
    "Falsche Gewinne": {
      einfach: { text: [
        { text: "Eine Nachricht sagt: „Sie haben gewonnen!“, obwohl du bei keinem Gewinnspiel mitgemacht hast." },
        { text: "Du sollst zuerst eine Gebühr zahlen – das ist Betrug, denn echte Gewinne kosten kein Geld." }
      ] },
      standard: { text: [{ text: "Nachrichten über angebliche Gewinne sind oft Betrug – vor allem, wenn du gar nicht an einem Gewinnspiel teilgenommen hast. Sobald du für den „Gewinn“ zuerst zahlen sollst, ist klar: Echte Gewinne kosten kein Geld." }] }
    },
    "Abo-Fallen": {
      einfach: {
        text: [
          { text: "Ein Angebot lockt mit „Kostenlos testen!“, doch im Kleingedruckten steht, dass es danach jeden Monat Geld kostet." },
          { text: "Das nennt man Abo-Falle, deshalb lies genau, bevor du etwas bestellst." }
        ],
        bullets: ["Steht da ein Preis pro Monat?", "Wie lange läuft das Abo?", "Frag eine Person, bevor du bestellst."],
        remember: "Kostenlos kann teuer werden. Ich lese genau."
      },
      standard: {
        text: [{ text: "Bei Abo-Fallen lockt ein „kostenloser Test“, doch im Kleingedruckten verbirgt sich eine monatliche Zahlung. Lies vor jeder Bestellung genau nach: Gibt es einen monatlichen Preis, wie lange läuft der Vertrag? Im Zweifel frag jemanden, bevor du bestellst." }],
        bullets: [],
        remember: "„Kostenlos“ kann teuer werden – ich lese das Kleingedruckte."
      }
    },
    "Codes nie weitergeben": {
      einfach: { text: [
        { text: "Manchmal bekommst du einen Code per SMS, zum Beispiel von der Bank oder von WhatsApp." },
        { text: "Dieser Code ist nur für dich, und Betrüger fragen danach." },
        { text: "Gib ihn deshalb niemals weiter." },
        { text: "Betrüger rufen auch an und geben sich als Bank oder als Computer-Service aus. Echte Firmen fragen nie nach deinem Code." }
      ],
      warning: "Leg auf und ruf die Firma selbst an – unter der Nummer, die du kennst.",
      examples: ["„Ich bin von Ihrer Bank. Sagen Sie mir bitte den Code aus der SMS.“", "„Ihr Computer ist kaputt. Lassen Sie mich aus der Ferne darauf zugreifen.“"] },
      standard: { text: [{ text: "Bestätigungscodes per SMS – etwa von der Bank oder von WhatsApp – sind nur für dich bestimmt. Betrüger versuchen, an sie zu gelangen, um dein Konto zu übernehmen. Gib einen solchen Code niemals weiter. Häufig kommt so ein Versuch per Anruf: Jemand gibt sich als Bank-Mitarbeiterin oder als technischer Kundenservice aus und will den Code oder Zugriff auf deinen Computer. Seriöse Unternehmen fragen so etwas nie." }], warning: "Leg auf und ruf das Unternehmen selbst zurück – über die Nummer, die du kennst, nicht über die aus dem Anruf.", examples: ["„Ich bin von Ihrer Bank. Bitte nennen Sie mir den Code aus der SMS.“", "„Ihr Computer ist kaputt. Lassen Sie mich per Fernwartung darauf zugreifen.“"] }
    },
    "Was tun nach einem Betrug?": {
      einfach: {
        text: [
          { text: "Betrug kann jedem passieren, und du musst dich dafür nicht schämen." },
          { text: "Wichtig ist, dass du dir schnell Hilfe holst." }
        ],
        bullets: ["Sag einer Person Bescheid, der du vertraust.", "Bei Bank-Daten: Ruf sofort die Bank an und lass die Karte sperren.", "Der Sperr-Notruf ist die 116 116.", "Du kannst Anzeige bei der Polizei machen.", "Heb die Nachricht als Beweis auf."],
        remember: "Betrug ist nicht meine Schuld. Ich hole mir Hilfe."
      },
      standard: {
        text: [{ text: "Betrug kann jedem passieren – dafür musst du dich nicht schämen. Wichtig ist schnelles Handeln: Informiere eine Vertrauensperson, lass bei betroffenen Bankdaten sofort die Karte sperren (Sperr-Notruf 116 116), erstatte gegebenenfalls Anzeige bei der Polizei und bewahre die Nachricht als Beweis auf." }],
        bullets: [],
        remember: "Betrug ist nicht meine Schuld – ich hole mir schnell Hilfe."
      }
    },
    "Das merke ich mir": {
      einfach: {
        text: [{ text: "Du kennst jetzt die wichtigsten Tricks – diese Sätze kannst du dir gut merken." }],
        bullets: ["Stress und Drohung sind Warnzeichen.", "Ich tippe nicht auf fremde Links.", "Ich gebe nie Codes oder Bank-Daten weiter.", "Echte Gewinne kosten kein Geld.", "Bei Geld-Forderungen rufe ich selbst zurück.", "Nach einem Betrug hole ich mir sofort Hilfe."],
        remember: "Ich lasse mich nicht drängen."
      },
      standard: {
        text: [{ text: "Die wichtigsten Punkte dieses Themas im Überblick: Stress und Drohungen sind Warnzeichen. Tippe nicht auf fremde Links und gib niemals Codes oder Bankdaten weiter. Echte Gewinne kosten nichts, bei Geldforderungen rufst du selbst zurück, und nach einem Betrug holst du dir sofort Hilfe." }],
        bullets: [],
        remember: "Ich lasse mich nicht drängen."
      }
    }
  },

  einkaufen: {
    "Start": {
      einfach: { text: [
        { text: "Stell dir vor: Ein Shop im Internet ist sehr billig, und du sollst vorher bezahlen. Was machst du? Darum geht es in diesem Thema." },
        { text: "Du lernst, wie du gute Shops erkennst, sicher bezahlst und was du bei Problemen tun kannst." }
      ] },
      standard: { text: [{ text: "Stell dir vor: Ein Onlineshop ist auffällig billig und verlangt Vorkasse. Bestellst du? In diesem Kapitel geht es um sicheres Einkaufen im Internet. Du erfährst, wie du seriöse Shops erkennst, sicher bezahlst und was du tun kannst, wenn beim Einkauf etwas schiefgeht." }] }
    },
    "Gute Shops erkennen": {
      einfach: {
        text: [
          { text: "Es gibt viele gute Shops im Internet, die du an einigen Merkmalen erkennst." },
          { text: "Die folgenden Punkte helfen dir dabei." }
        ],
        bullets: ["Der Shop ist bekannt.", "Der Shop hat ein Impressum mit Name und Adresse der Firma.", "Es gibt echte Bewertungen von Kunden.", "Die Preise sind normal, nicht verdächtig billig."],
        remember: "Ich kaufe bei Shops, die ich kenne oder geprüft habe."
      },
      standard: {
        text: [{ text: "Seriöse Online-Shops erkennst du an mehreren Merkmalen: Sie sind bekannt oder gut bewertet, haben ein vollständiges Impressum mit Firmenname und Adresse und verlangen keine verdächtig niedrigen Preise. Echte Kundenbewertungen geben zusätzliche Sicherheit." }],
        bullets: [],
        remember: "Ich kaufe bevorzugt bei Shops, die ich kenne oder vorher geprüft habe."
      }
    },
    "Fake-Shops erkennen": {
      einfach: { warning: "In einem Fake-Shop bezahlst du, bekommst die Ware aber nie. Solche Shops sehen oft echt aus. Prüfe einen Shop deshalb genau, bevor du dort bezahlst.",
        text: [
          { text: "Ein Fake-Shop ist ein falscher Shop: Du bezahlst, aber die Ware kommt nie." },
          { text: "Solche Shops sehen oft sehr echt aus, deshalb helfen dir die folgenden Warnzeichen." }
        ],
        bullets: ["Alles ist sehr, sehr billig.", "Du kannst nur per Vorkasse zahlen.", "Es gibt kein Impressum.", "Der Name der Internet-Seite ist komisch."],
        success: "Tipp: Mit dem Fakeshop-Finder der Verbraucher-Zentrale kannst du einen Shop kostenlos prüfen. Du gibst die Adresse ein und bekommst eine Einschätzung."
      },
      standard: { warning: "Fake-Shops wirken oft täuschend echt: Du bezahlst, erhältst die Ware aber nie. Prüfe einen unbekannten Shop deshalb genau, bevor du dort bezahlst oder Daten eingibst.",
        text: [{ text: "Fake-Shops sehen oft täuschend echt aus, doch nach der Zahlung kommt keine Ware. Stutzig machen sollten dich extrem niedrige Preise, fehlendes Impressum, eine merkwürdige Internetadresse und die Vorgabe, nur per Vorkasse zahlen zu können. Ein schneller Check: der kostenlose Fakeshop-Finder der Verbraucherzentrale – Shop-Adresse eingeben und die Einschätzung lesen." }],
        bullets: []
      }
    },
    "Sicher bezahlen": {
      einfach: {
        text: [
          { text: "Es gibt verschiedene Arten zu bezahlen, und manche sind sicherer als andere." },
          { text: "Die folgenden Hinweise zeigen dir, worauf es ankommt." }
        ],
        bullets: ["Kauf auf Rechnung ist sicher: Du zahlst erst, wenn die Ware da ist.", "PayPal und ähnliche Dienste haben einen Käufer-Schutz.", "Vorkasse an Fremde ist riskant: Das Geld ist oft weg.", "Sende nie Geld an Privat-Personen, die du nicht kennst.", "Bei privaten Anzeigen gilt: erst die Ware ansehen, dann bezahlen.", "Wähle beim Bezahlen nie die Funktion „Geld an Freunde senden“ – dabei gilt der Käufer-Schutz nicht."]
      },
      standard: {
        text: [{ text: "Beim Bezahlen gibt es sicherere und riskantere Wege. Der Kauf auf Rechnung ist sicher, weil du erst nach Erhalt der Ware zahlst. Dienste wie PayPal bieten einen Käuferschutz. Vorkasse an Unbekannte ist dagegen riskant – das Geld ist im Betrugsfall meist verloren. Bei privaten Kleinanzeigen zahlst du am besten erst bei der Übergabe, und nie über die Funktion „Geld an Freunde senden“: Dort greift der Käuferschutz nicht." }],
        bullets: []
      }
    },
    "Bank-Daten schützen": {
      einfach: { warning: "PIN und TAN sind geheime Zahlen von deiner Bank. Gib sie niemals weiter – deine Bank fragt nie per E-Mail oder Telefon danach. Wer danach fragt, ist ein Betrüger.", text: [
        { text: "Deine Bank-Daten sind sehr wichtig, und PIN und TAN bleiben immer geheim." },
        { text: "Deine Bank fragt nie per E-Mail oder Telefon danach – wer das tut, ist ein Betrüger." }
      ] },
      standard: { warning: "PIN und TAN sind geheim und schützen dein Konto. Gib sie niemals weiter; deine Bank fragt niemals per E-Mail, Anruf oder Nachricht danach. Wer das tut, ist ein Betrüger.", text: [{ text: "Deine Bankdaten verdienen besonderen Schutz: PIN und TAN sind streng geheim. Deine Bank wird dich niemals per E-Mail oder Telefon danach fragen. Wer das doch tut, ist ein Betrüger." }] }
    },
    "Versteckte Kosten in Apps und Spielen": {
      einfach: {
        text: [
          { text: "Viele Spiele sind zuerst kostenlos, verkaufen dir dann aber Dinge gegen echtes Geld." },
          { text: "Solche kleinen Käufe wirken günstig, summieren sich aber schnell." }
        ],
        examples: ["Ein Spiel verkauft Extra-Leben für 2 Euro.", "Eine App verkauft Münzen für 5 Euro."],
        remember: "Auch kleine Käufe kosten echtes Geld."
      },
      standard: {
        text: [{ text: "Viele Apps und Spiele sind zunächst gratis, verkaufen dann aber Zusatzinhalte gegen echtes Geld. Solche In-App-Käufe wirken klein, summieren sich aber schnell. Behalte im Blick, was du tatsächlich ausgibst." }],
        examples: ["Ein kostenloses Spiel verkauft Extra-Leben für 2 Euro das Stück.", "In einer App kosten 500 Münzen 5 Euro – wie viel eine einzelne Münze wert ist, siehst du nicht sofort."],
        remember: "Auch kleine In-App-Käufe kosten echtes Geld und summieren sich."
      }
    },
    "Nicht sofort kaufen": {
      einfach: { text: [
        { text: "Shops machen dir oft Stress, zum Beispiel mit „Nur noch heute! Nur noch 2 Stück!“." },
        { text: "Das soll dich zum schnellen Kaufen bringen, aber du darfst dir Zeit nehmen." }
      ] },
      standard: { text: [{ text: "Online-Shops machen dir oft künstlich Stress – etwa mit „Nur noch heute!“ oder „Nur noch 2 Stück!“. Das soll dich zu einem schnellen Kauf verleiten. Lass dich nicht hetzen: Du darfst dir Zeit nehmen und in Ruhe überlegen." }] }
    },
    "Vor dem Kaufen prüfen": {
      einfach: {
        text: [
          { text: "Bevor du auf „Kaufen“ tippst, lohnt sich ein kurzer Check." },
          { text: "Die folgenden Fragen helfen dir dabei." }
        ],
        bullets: ["Was kostet es wirklich? Mit Versand?", "Ist es ein Abo oder ein einmaliger Kauf?", "Brauche ich das wirklich?", "Habe ich genug Geld dafür?"],
        remember: "Erst prüfen. Dann kaufen."
      },
      standard: {
        text: [{ text: "Bevor du auf „Kaufen“ tippst, lohnt sich ein kurzer Check: Was kostet der Artikel wirklich, inklusive Versand? Handelt es sich um einen einmaligen Kauf oder ein Abo? Brauchst du das Produkt wirklich, und ist genug Geld da?" }],
        bullets: [],
        remember: "Erst prüfen, dann kaufen."
      }
    },
    "Falsch gekauft? Das kannst du tun": {
      einfach: {
        text: [
          { text: "Ein Fehl-Kauf kann passieren, und oft kannst du noch etwas tun." },
          { text: "Die folgenden Schritte helfen dir weiter." }
        ],
        bullets: ["Viele Online-Käufe kannst du 14 Tage zurückgeben. Das heißt Widerruf.", "Schreib dem Shop eine Nachricht.", "Frag eine Person, der du vertraust, um Hilfe.", "Bei Betrug: Ruf deine Bank an."],
        remember: "Online-Käufe kann ich oft 14 Tage zurückgeben."
      },
      standard: {
        text: [{ text: "Ein Fehlkauf lässt sich oft korrigieren: Bei vielen Online-Käufen hast du ein 14-tägiges Widerrufsrecht und kannst die Ware zurückgeben. Wende dich an den Shop, hol dir bei Bedarf Hilfe von einer Vertrauensperson und ruf bei Betrug sofort deine Bank an." }],
        bullets: [],
        remember: "Viele Online-Käufe kann ich innerhalb von 14 Tagen widerrufen."
      }
    },
    "Was kann ich tun?": {
      einfach: {
        text: [
          { text: "Mit ein paar einfachen Regeln kannst du sicher im Internet einkaufen." },
          { text: "Die folgenden Punkte helfen dir dabei." }
        ],
        bullets: ["Ich kaufe bei Shops, die ich kenne.", "Ich prüfe Preis und Impressum.", "Ich zahle möglichst auf Rechnung.", "PIN und TAN bleiben geheim.", "Ich lasse mich nicht hetzen.", "Vor dem Kaufen kann ich eine Person fragen."],
        warning: "Ein sehr niedriger Preis oder ein Countdown soll dich zur Eile treiben, damit du nicht mehr nachdenkst.",
        success: "Wenn du dich nicht hetzen lässt, kaufst du sicherer ein."
      },
      standard: {
        text: [{ text: "Sicheres Einkaufen gelingt mit einfachen Regeln: Kauf bei bekannten Shops, prüfe Preis und Impressum und zahle möglichst auf Rechnung. Halte PIN und TAN geheim, lass dich nicht zu schnellen Käufen drängen und frag im Zweifel vor dem Kauf eine Vertrauensperson." }],
        bullets: [],
        warning: "Ungewöhnlich niedrige Preise oder ein Countdown sollen Eile erzeugen, damit weniger genau geprüft wird – ein typisches Warnzeichen unseriöser Shops.",
        success: "Sich nicht hetzen zu lassen, ist einer der wirksamsten Schutzmechanismen beim Online-Einkauf."
      }
    },
    "Das merke ich mir": {
      einfach: {
        text: [{ text: "Du hast viel über sicheres Einkaufen gelernt – diese Sätze kannst du dir gut merken." }],
        bullets: ["Sehr billig und nur Vorkasse: Warnzeichen.", "Rechnung ist sicherer als Vorkasse.", "PIN und TAN bleiben geheim.", "Ich lasse mich nicht hetzen.", "Ich darf mir Unterstützung holen."],
        remember: "Erst prüfen. Dann kaufen."
      },
      standard: {
        text: [{ text: "Die wichtigsten Punkte dieses Themas im Überblick: Sehr niedrige Preise und reine Vorkasse sind Warnzeichen. Der Kauf auf Rechnung ist sicherer als Vorkasse, PIN und TAN bleiben geheim, und du lässt dich nicht hetzen. Bei Unsicherheit darfst du dir Unterstützung holen." }],
        bullets: [],
        remember: "Erst prüfen, dann kaufen."
      }
    }
  }
};

/* ------------------------------------------------------------
   Kurz-Weg (topic.einfachLessons): Einfache Sprache + Alltagssprache
   (Paket B3, 26.09.2026 – Gesamtprüfung Z1). Vorher las man im Kurz-Weg
   in 3 von 5 Schritten Leichte Sprache, egal welche Stufe gewählt war.
   Eigene Tabelle statt CONTENT_VERSIONS, weil 7 Kurz-Lektionen genauso
   heißen wie lange Lektionen, aber kürzer sind: Über den Titel bekämen
   sie sonst die langen Texte. Inhalt je Lektion wie der Leicht-Text in
   topics.js (§2). Der Merksatz der Stufe ersetzt nur die Anzeige – die
   Regel-Karte liest weiter den Leicht-Merksatz (regeln-de.js).
   ------------------------------------------------------------ */
const KURZ_VERSIONS = {
  datenschutz: {
    /* Kurz-Einheiten neu seit Paket 2, Einfach und Alltag seit Paket 5. */
    "Deine Daten": {
      "einfach": {
        "text": [
          {
            "text": "Deine Daten sind Angaben, die etwas über dich verraten."
          },
          {
            "text": "Dazu gehören zum Beispiel dein Name, deine Adresse, deine Fotos und dein Standort."
          },
          {
            "text": "Manche Daten sind besonders wichtig, zum Beispiel Angaben zu deiner Gesundheit und deine Bankdaten."
          },
          {
            "text": "Dein Passwort ist geheim."
          },
          {
            "text": "Du entscheidest selbst, wer deine Daten bekommt."
          }
        ],
        "examples": [
          {
            "art": "B",
            "text": "Deine Ärztin fragt dich, was dir wehtut. Du sagst es ihr, weil sie das für die Behandlung braucht."
          },
          {
            "art": "A",
            "text": "Ein Quiz im Internet fragt nach deinen Krankheiten. Für ein Quiz braucht es diese Angaben nicht."
          }
        ],
        "remember": "Meine privaten Daten gehören mir.",
        "vorbild": [
          "Alex möchte ein Bankkonto eröffnen. Die Bank fragt dafür nach seinem Ausweis.",
          "Alex denkt: Das sind besonders wichtige Daten.",
          "Er prüft, wofür die Bank den Ausweis haben will: Sie prüft damit, ob er wirklich Alex ist.",
          "Das passt zum Bankkonto, und Alex entscheidet: Er zeigt den Ausweis."
        ]
      },
      "standard": {
        "text": [
          {
            "text": "Zu deinen Daten gehört alles, was etwas über dich aussagt – etwa dein Name, deine Adresse, deine Fotos und dein Standort. Besonders schützenswert sind Gesundheits- und Bankdaten. Dein Passwort ist geheim. Wer deine Daten bekommt, entscheidest du selbst."
          }
        ],
        "examples": [
          {
            "art": "B",
            "text": "Deine Ärztin fragt, was dir wehtut. Du sagst es ihr – für die Behandlung braucht sie diese Information."
          },
          {
            "art": "A",
            "text": "Ein Online-Quiz fragt nach deinen Krankheiten. Für ein Quiz sind solche Angaben nicht erforderlich."
          }
        ],
        "remember": "Meine persönlichen Daten gehören mir.",
        "vorbild": [
          "Alex möchte ein Bankkonto eröffnen, und die Bank fragt nach seinem Ausweis. Das sind besonders wichtige Daten – also prüft er, wofür die Bank ihn will: Sie stellt damit fest, ob er wirklich Alex ist. Das passt zum Konto, und Alex entscheidet sich, den Ausweis zu zeigen."
        ]
      }
    },

    "Nötig oder nicht?": {
      "einfach": {
        "text": [
          {
            "text": "Eine App oder ein Formular will Daten von dir haben."
          },
          {
            "text": "Du prüfst, wofür die Daten gebraucht werden und welche Angaben dazu passen."
          },
          {
            "text": "In Formularen gibt es außerdem Pflichtfelder und freiwillige Felder. Freiwillige Felder darfst du leer lassen."
          },
          {
            "text": "Wenn du unsicher bist, gibst du noch nichts ein und holst dir Unterstützung."
          }
        ],
        "examples": [
          {
            "art": "B",
            "text": "Ein Shop braucht deine Adresse, damit das Paket ankommt."
          },
          {
            "art": "A",
            "text": "Eine Taschenlampen-App will deine Kontakte sehen."
          },
          {
            "art": "C",
            "text": "Eine Wetter-App will deinen Standort. Du kannst deine Stadt aber auch selbst eintippen."
          }
        ],
        "remember": "Ich gebe nur die Daten weiter, die nötig sind.",
        "vorbild": [
          "Tilda meldet sich im Internet bei der Bücherei an.",
          "Das Formular fragt nach ihrem Namen und ihrer Adresse. Diese Felder sind Pflicht.",
          "Tilda prüft, wofür die Bücherei das braucht: für den Büchereiausweis. Die Angaben sind also nötig.",
          "Die Telefonnummer ist freiwillig, deshalb lässt Tilda das Feld leer."
        ]
      },
      "standard": {
        "text": [
          {
            "text": "Will eine App oder ein Formular Daten von dir, prüfst du: Wofür werden sie gebraucht, und ist das nötig? Außerdem gibt es Pflichtfelder und freiwillige Felder – freiwillige darfst du leer lassen. Bist du unsicher, gib noch nichts ein und hol dir Unterstützung."
          }
        ],
        "examples": [
          {
            "art": "B",
            "text": "Ein Shop braucht deine Adresse für die Lieferung."
          },
          {
            "art": "A",
            "text": "Eine Taschenlampen-App will auf deine Kontakte zugreifen."
          },
          {
            "art": "C",
            "text": "Eine Wetter-App möchte deinen Standort – du kannst deine Stadt aber auch selbst eingeben."
          }
        ],
        "remember": "Ich gebe nur die Daten weiter, die für den Zweck nötig sind.",
        "vorbild": [
          "Tilda meldet sich online bei der Bücherei an. Name und Adresse sind Pflichtfelder. Sie prüft den Zweck: Für den Büchereiausweis sind die Angaben nötig. Die Telefonnummer ist freiwillig, also lässt Tilda das Feld leer."
        ]
      }
    },

    "Wer sieht es?": {
      "einfach": {
        "text": [
          {
            "text": "Du teilst etwas mit anderen, zum Beispiel ein Foto oder dein Profil."
          },
          {
            "text": "Du prüfst: Wer kann das sehen – alle oder nur deine Freunde?"
          },
          {
            "text": "Das kannst du oft selbst einstellen und später auch wieder ändern."
          },
          {
            "text": "Wenn ein Foto einmal verschickt ist, kannst du es oft nicht zurückholen. Deshalb prüfst du vorher."
          },
          {
            "text": "Wenn andere Personen auf dem Foto sind, fragst du sie vorher."
          }
        ],
        "examples": [
          {
            "art": "C",
            "text": "Bei deinem Wohnort im Profil entscheidest du selbst: Sollen ihn alle sehen, nur deine Freunde oder niemand?"
          }
        ],
        "remember": "Ich wähle selbst aus, wer meine Daten sieht.",
        "vorbild": [
          "Tilda stellt ein neues Foto in ihr Profil.",
          "Sie prüft, wer das Foto sehen kann: Im Moment sind es alle im Internet.",
          "Das will Tilda nicht. Deshalb stellt sie ein: Nur Freunde."
        ]
      },
      "standard": {
        "text": [
          {
            "text": "Wenn du etwas teilst, etwa ein Foto oder dein Profil, prüfe, wer es sehen kann: alle oder nur deine Freunde? Das lässt sich oft einstellen und später ändern. Ein verschicktes Foto kannst du aber oft nicht zurückholen – deshalb prüfst du vorher. Sind andere Menschen auf dem Foto, fragst du sie vorher."
          }
        ],
        "examples": [
          {
            "art": "C",
            "text": "Beim Wohnort im Profil entscheidest du: sichtbar für alle, nur für Freunde oder für niemanden."
          }
        ],
        "remember": "Ich lege selbst fest, wer meine Daten sieht.",
        "vorbild": [
          "Tilda stellt ein neues Profilfoto ein und prüft, wer es sehen kann: alle im Internet. Das will sie nicht – deshalb stellt sie es auf Nur Freunde um."
        ]
      }
    }
  },
  whatsapp: {
    "Unbekannte Nachrichten": {
      einfach: {
        text: [
          { text: "Manchmal bekommst du eine Nachricht von einer Person, die du nicht kennst." },
          { text: "Antworte nicht sofort, auch wenn die Nachricht freundlich klingt." },
          { text: "Zeig sie zuerst einer Person, der du vertraust. Sie hilft dir weiter." }
        ],
        remember: "Bei unbekannten Nachrichten fragst du zuerst eine Person, der du vertraust.",
        vorbild: ["Eine fremde Nummer schreibt Tilda: Hallo, wie geht es dir?", "Tilda antwortet nicht sofort, sondern zeigt die Nachricht zuerst Alex."]
      },
      standard: {
        text: [{ text: "Bekommst du eine Nachricht von jemandem, den du nicht kennst, antwortest du nicht sofort – auch wenn sie freundlich klingt. Zeig sie zuerst einer Person, der du vertraust. Gemeinsam entscheidet ihr, wie es weitergeht." }],
        remember: "Unbekannte Nachrichten: erst Rat holen, dann antworten.",
        vorbild: ["Eine unbekannte Nummer schreibt Tilda freundlich an. Tilda antwortet nicht sofort, sondern zeigt die Nachricht zuerst Alex."]
      }
    },
    "Links in Nachrichten": {
      einfach: {
        text: [
          { text: "Ein Link ist eine Adresse zu einer Internet-Seite. Meistens ist er blau." },
          { text: "Fremde Links können gefährlich sein, weil sie auf falsche Seiten führen." },
          { text: "Tippe deshalb nicht darauf. Frag lieber eine Person, der du vertraust." }
        ],
        remember: "Auf fremde Links tippst du nicht.",
        vorbild: ["Alex bekommt von einer Nummer, die er nicht kennt, eine Nachricht mit einem Link.", "Er tippt nicht auf den Link und fragt zuerst Tilda."]
      },
      standard: {
        text: [{ text: "Ein Link führt dich auf eine Internetseite – meist erkennst du ihn an der blauen Schrift. Links von Fremden können auf gefälschte Seiten führen. Tippe sie deshalb nicht an, sondern frag eine Person, der du vertraust." }],
        remember: "Fremde Links nicht antippen.",
        vorbild: ["Von einer unbekannten Nummer kommt eine Nachricht mit Link. Alex tippt ihn nicht an und fragt zuerst Tilda."]
      }
    },
    "Dein WhatsApp-Code": {
      einfach: {
        text: [
          { text: "Manchmal schickt dir WhatsApp einen Code per SMS." },
          { text: "Diesen Code gibst du niemandem weiter, auch nicht deinen Freunden." },
          { text: "Wer den Code bekommt, kann damit dein Konto stehlen." }
        ],
        remember: "Den WhatsApp-Code gibst du nie weiter.",
        vorbild: ["Tilda bekommt eine SMS mit einem Code.", "Kurz danach bittet jemand in einer Nachricht um genau diesen Code.", "Tilda schickt ihn nicht, denn der Code gehört nur ihr."]
      },
      standard: {
        text: [{ text: "WhatsApp schickt dir manchmal einen Bestätigungscode per SMS. Diesen Code gibst du niemals weiter – auch nicht an Freunde. Wer ihn hat, kann damit dein Konto übernehmen." }],
        remember: "Den WhatsApp-Code gibst du niemals weiter.",
        vorbild: ["Tilda erhält einen Code per SMS, kurz darauf fragt jemand genau danach. Tilda gibt ihn nicht weiter – der Code gehört nur ihr."]
      }
    }
  },
  facebook: {
    "Dein Facebook-Profil": {
      einfach: {
        text: [
          { text: "Auf Facebook hast du ein Profil, das andere Menschen sehen können." },
          { text: "In den Einstellungen legst du fest, wer dein Profil sieht." },
          { text: "Am besten sehen es nur deine Freunde. Eine Person, der du vertraust, kann dir beim Einstellen helfen." }
        ],
        remember: "Dein Profil sehen nur deine Freunde.",
        vorbild: ["Alex öffnet bei Facebook die Einstellungen.", "Dort stellt er ein, dass nur seine Freunde sein Profil sehen.", "Tilda hilft ihm dabei."]
      },
      standard: {
        text: [{ text: "Dein Facebook-Profil ist für andere sichtbar. In den Einstellungen legst du fest, wer es sehen darf – am besten nur deine Freunde. Eine Person, der du vertraust, kann dir beim Einstellen helfen." }],
        remember: "Dein Profil ist nur für Freunde sichtbar.",
        vorbild: ["Alex öffnet die Facebook-Einstellungen und macht sein Profil nur für Freunde sichtbar. Tilda hilft ihm dabei."]
      }
    },
    "Unbekannte Personen": {
      einfach: {
        text: [
          { text: "Manchmal schickt dir eine unbekannte Person eine Freundschafts-Anfrage." },
          { text: "Wenn du die Person nicht kennst, nimmst du die Anfrage nicht an." },
          { text: "Bist du unsicher, fragst du eine Person, der du vertraust." }
        ],
        remember: "Anfragen von Unbekannten lehnst du ab.",
        vorbild: ["Eine Person, die Tilda nicht kennt, schickt ihr eine Freundschafts-Anfrage.", "Tilda lehnt die Anfrage ab."]
      },
      standard: {
        text: [{ text: "Manchmal schickt dir jemand eine Freundschaftsanfrage, den du nicht kennst. Solche Anfragen nimmst du nicht an. Bist du unsicher, fragst du eine Person, der du vertraust." }],
        remember: "Anfragen von Unbekannten ablehnen.",
        vorbild: ["Eine unbekannte Person schickt Tilda eine Freundschaftsanfrage. Tilda lehnt sie ab."]
      }
    },
    "Komische Nachrichten": {
      einfach: {
        text: [
          { text: "Manchmal bekommst du eine komische Nachricht, zum Beispiel mit einer Frage nach Geld oder mit einem Link." },
          { text: "Tippe nicht auf den Link und schick kein Geld." },
          { text: "Zeig die Nachricht lieber einer Person, der du vertraust." }
        ],
        remember: "Komische Nachrichten zeigst du jemandem. Du tippst nichts an.",
        vorbild: ["Jemand schreibt Alex, dass er schnell Geld braucht, und schickt einen Link.", "Alex tippt nicht auf den Link und zeigt die Nachricht Tilda."]
      },
      standard: {
        text: [{ text: "Seltsame Nachrichten, in denen jemand nach Geld fragt oder einen Link schickt, sind oft Betrug. Tippe nichts an und zeig die Nachricht einer Person, der du vertraust." }],
        remember: "Seltsame Nachrichten zeigen statt antippen.",
        vorbild: ["Jemand bittet Alex per Nachricht dringend um Geld und schickt einen Link. Alex tippt ihn nicht an und zeigt Tilda die Nachricht."]
      }
    }
  },
  instagram: {
    "Deine Fotos auf Instagram": {
      einfach: {
        text: [
          { text: "Wenn du Fotos auf Instagram postest, können andere Menschen sie sehen." },
          { text: "Du kannst einstellen, wer deine Fotos sieht." },
          { text: "Am besten stellst du dein Konto auf privat. Dann sehen nur deine Freunde deine Fotos." }
        ],
        remember: "Stell dein Konto auf privat.",
        vorbild: ["Tilda stellt ihr Instagram-Konto auf privat.", "Jetzt sehen nur noch ihre Freunde ihre Fotos."]
      },
      standard: {
        text: [{ text: "Fotos, die du auf Instagram postest, sind für andere sichtbar. Stellst du dein Konto auf privat, sehen nur noch die Menschen deine Fotos, die du selbst bestätigt hast." }],
        remember: "Stell dein Konto auf privat.",
        vorbild: ["Tilda stellt ihr Instagram-Konto auf privat – jetzt sehen nur noch bestätigte Freunde ihre Fotos."]
      }
    },
    "Fotos von anderen Personen": {
      einfach: {
        text: [
          { text: "Du willst ein Foto posten, auf dem eine andere Person zu sehen ist." },
          { text: "Dann fragst du diese Person zuerst." },
          { text: "Nur wenn sie Ja sagt, postest du das Foto." }
        ],
        remember: "Fotos von anderen postest du nur, wenn sie Ja sagen.",
        vorbild: ["Alex möchte ein Foto posten, auf dem auch Tilda zu sehen ist.", "Deshalb fragt er sie zuerst.", "Erst als Tilda Ja sagt, postet er das Foto."]
      },
      standard: {
        text: [{ text: "Ist auf einem Foto eine andere Person zu sehen, fragst du sie vor dem Posten um Erlaubnis. Nur wenn sie zustimmt, stellst du das Foto online – jeder Mensch hat ein Recht am eigenen Bild." }],
        remember: "Fotos von anderen: erst fragen, dann posten.",
        vorbild: ["Alex möchte ein Foto mit Tilda posten. Er fragt sie vorher – und postet es erst, als sie zustimmt."]
      }
    },
    "Nachrichten von Unbekannten": {
      einfach: {
        text: [
          { text: "Manchmal schreibt dir eine Person, die du nicht kennst." },
          { text: "Dann antwortest du ihr nicht." },
          { text: "Zeig die Nachricht einer Person, der du vertraust. Sie hilft dir weiter." }
        ],
        remember: "Bei Nachrichten von Unbekannten fragst du eine Person, der du vertraust.",
        vorbild: ["Ein Profil, das Tilda nicht kennt, schreibt ihr eine Nachricht.", "Tilda antwortet nicht und zeigt die Nachricht Alex."]
      },
      standard: {
        text: [{ text: "Schreibt dir jemand, den du nicht kennst, antwortest du nicht. Zeig die Nachricht stattdessen einer Person, der du vertraust – sie hilft dir, die Nachricht richtig einzuschätzen." }],
        remember: "Nachrichten von Unbekannten: nicht antworten, Rat holen.",
        vorbild: ["Ein fremdes Profil schreibt Tilda an. Sie antwortet nicht und zeigt Alex die Nachricht."]
      }
    }
  },
  youtube: {
    "Videos prüfen": {
      einfach: {
        text: [
          { text: "Manche Videos auf YouTube erzählen Dinge, die nicht stimmen." },
          { text: "Frag dich deshalb beim Schauen: Stimmt das wirklich?" },
          { text: "Schau nach, was ein anderer Kanal dazu sagt, oder frag eine Person, der du vertraust." }
        ],
        remember: "Du prüfst, ob ein Video stimmt.",
        vorbild: ["Ein Video behauptet, dass es morgen kein Wasser gibt.", "Alex glaubt das nicht sofort und schaut auf einer anderen Seite nach."]
      },
      standard: {
        text: [{ text: "Nicht jedes Video auf YouTube erzählt die Wahrheit. Frag dich deshalb, ob stimmt, was du siehst: Vergleiche mit anderen Kanälen oder sprich mit einer Person, der du vertraust." }],
        remember: "Videos prüfen, bevor du ihnen glaubst.",
        vorbild: ["Ein Video behauptet, morgen gebe es kein Wasser. Alex glaubt das nicht vorschnell und prüft es auf einer anderen Seite."]
      }
    },
    "Werbung erkennen": {
      einfach: {
        text: [
          { text: "In vielen Videos kommt Werbung. Die Werbung will, dass du etwas kaufst." },
          { text: "Du musst aber nichts kaufen." },
          { text: "Oft kannst du die Werbung überspringen. Auf die Werbung tippst du nicht." }
        ],
        remember: "Auf Werbung tippst du nicht.",
        vorbild: ["Mitten im Video kommt Werbung für Schuhe.", "Tilda weiß: Sie muss nichts kaufen.", "Sie überspringt die Werbung."]
      },
      standard: {
        text: [{ text: "In vielen Videos läuft Werbung, die dich zum Kaufen bringen soll. Du musst nichts kaufen: Überspring die Werbung, wenn das geht, und tippe sie nicht an." }],
        remember: "Werbung überspringen, nicht antippen.",
        vorbild: ["Mitten im Video läuft Werbung für Schuhe. Tilda weiß, dass sie nichts kaufen muss, und überspringt sie."]
      }
    },
    "Pausen machen": {
      einfach: {
        text: [
          { text: "Wenn du lange Videos schaust, ist das anstrengend für Augen und Kopf." },
          { text: "Mach deshalb nach einer Stunde eine Pause." },
          { text: "Geh zum Beispiel raus oder beweg dich ein bisschen. Das tut dir gut." }
        ],
        remember: "Nach einer Stunde machst du Pause.",
        vorbild: ["Alex schaut schon seit einer Stunde Videos.", "Er macht eine Pause und geht kurz nach draußen."]
      },
      standard: {
        text: [{ text: "Lange Videos am Stück sind anstrengend. Mach spätestens nach einer Stunde eine Pause – geh an die frische Luft oder beweg dich. Das tut Körper und Kopf gut." }],
        remember: "Nach einer Stunde eine Pause einlegen.",
        vorbild: ["Nach einer Stunde Videos macht Alex bewusst Pause und geht kurz an die frische Luft."]
      }
    }
  },
  snapchat: {
    "Bilder verschwinden nicht wirklich": {
      einfach: {
        text: [
          { text: "Auf Snapchat verschwindet ein Bild nach kurzer Zeit wieder." },
          { text: "Andere können es aber vorher speichern, zum Beispiel mit einem Bildschirm-Foto. Dann ist das Bild für immer da." },
          { text: "Schick deshalb nur Bilder, die alle sehen dürfen." }
        ],
        remember: "Auch Bilder auf Snapchat können für immer bleiben.",
        vorbild: ["Bevor Tilda ein Bild bei Snapchat schickt, fragt sie sich: Dürfen alle das Bild sehen?", "Erst als die Antwort Ja ist, schickt sie es."]
      },
      standard: {
        text: [{ text: "Auf Snapchat verschwinden Bilder nach kurzer Zeit – aber nur scheinbar. Andere können sie vorher mit einem Screenshot speichern, und dann bleiben sie dauerhaft erhalten. Schick deshalb nur Bilder, die jeder sehen darf." }],
        remember: "Was du schickst, kann für immer bleiben.",
        vorbild: ["Bevor Tilda ein Bild verschickt, fragt sie sich, ob es jeder sehen dürfte – erst dann schickt sie es."]
      }
    },
    "Dein Standort": {
      einfach: {
        text: [
          { text: "Snapchat kann anderen zeigen, wo du gerade bist. Das nennt man Standort." },
          { text: "Das ist gefährlich, weil dich so auch Fremde finden können." },
          { text: "Schalte deinen Standort deshalb aus. Eine Person, der du vertraust, hilft dir dabei." }
        ],
        remember: "Du schaltest deinen Standort aus.",
        vorbild: ["Alex sieht, dass Snapchat seinen Ort auf einer Karte zeigt.", "Er schaltet den Standort aus, und Tilda hilft ihm dabei."]
      },
      standard: {
        text: [{ text: "Snapchat kann deinen Standort auf einer Karte anzeigen – dann sehen andere, wo du gerade bist. Das kann gefährlich werden. Schalte die Standort-Freigabe deshalb aus; eine Person, der du vertraust, kann dir dabei helfen." }],
        remember: "Standort-Freigabe ausschalten.",
        vorbild: ["Alex merkt, dass Snapchat seinen Standort auf einer Karte zeigt. Mit Tildas Hilfe schaltet er die Freigabe aus."]
      }
    },
    "Niemand darf dich zwingen": {
      einfach: {
        text: [
          { text: "Manchmal macht dir jemand Druck und will ein Bild von dir." },
          { text: "Wenn du das nicht willst, musst du es auch nicht tun. Du darfst Nein sagen." },
          { text: "Erzähl es danach eine Person, der du vertraust." }
        ],
        remember: "Du darfst immer Nein sagen.",
        vorbild: ["Jemand drängt Tilda, ein Bild von sich zu schicken.", "Tilda will das nicht und sagt Nein.", "Danach erzählt sie Alex davon."]
      },
      standard: {
        text: [{ text: "Setzt dich jemand unter Druck, ein Bild von dir zu schicken, musst du das nicht tun. Du darfst jederzeit Nein sagen. Erzähl einer Person, der du vertraust, davon – du bist damit nicht allein." }],
        remember: "Du darfst Nein sagen – immer.",
        vorbild: ["Jemand drängt Tilda, ein Bild von sich zu schicken. Sie sagt Nein und erzählt Alex davon."]
      }
    }
  },
  tiktok: {
    "Was du bei TikTok siehst": {
      einfach: {
        text: [
          { text: "TikTok zeigt dir sehr viele Videos. Dabei merkt sich die App, was dir gefällt." },
          { text: "Deshalb zeigt sie dir immer mehr Videos von derselben Art." },
          { text: "So siehst du oft das Gleiche. Schau darum auch andere Kanäle an." },
          { text: "Manche Videos zeigen gefährliche Trends oder Mutproben. Da musst du nicht mitmachen, auch wenn viele andere es tun." }
        ],
        remember: "TikTok zeigt dir nur einen Teil der Videos.",
        vorbild: ["Bei TikTok springen gerade viele von einer hohen Mauer.", "Alex weiß, dass das gefährlich ist, und macht es nicht nach."]
      },
      standard: {
        text: [{ text: "TikTok merkt sich, welche Videos dir gefallen, und zeigt dir immer mehr davon. So entsteht schnell ein einseitiges Bild. Schau deshalb bewusst auch andere Kanäle und Meinungen an. Manche Videos zeigen gefährliche Trends oder Mutproben – mitmachen musst du nicht, auch wenn es alle tun." }],
        remember: "TikTok zeigt dir eine Auswahl – nicht alles.",
        vorbild: ["Auf TikTok springen gerade viele von einer hohen Mauer. Alex macht den gefährlichen Trend nicht mit."]
      }
    },
    "Nachrichten auf TikTok": {
      einfach: {
        text: [
          { text: "Manchmal schreibt dir auf TikTok eine Person, die du nicht kennst." },
          { text: "Dann antwortest du ihr nicht." },
          { text: "Zeig die Nachricht einer Person, der du vertraust. Sie hilft dir weiter." }
        ],
        remember: "Bei Nachrichten von Unbekannten fragst du eine Person, der du vertraust.",
        vorbild: ["Eine fremde Person schreibt Tilda bei TikTok eine private Nachricht.", "Tilda antwortet nicht und zeigt die Nachricht Alex."]
      },
      standard: {
        text: [{ text: "Schreibt dir auf TikTok jemand, den du nicht kennst, antwortest du nicht. Zeig die Nachricht einer Person, der du vertraust – gemeinsam entscheidet ihr, was zu tun ist." }],
        remember: "Nachrichten von Unbekannten: nicht antworten, Rat holen.",
        vorbild: ["Eine fremde Person schreibt Tilda privat an. Sie antwortet nicht und zeigt Alex die Nachricht."]
      }
    },
    "Pause machen": {
      einfach: {
        text: [
          { text: "TikTok ist so gemacht, dass du möglichst lange schaust. Das ist anstrengend." },
          { text: "Stell dir deshalb einen Timer, zum Beispiel auf eine Stunde." },
          { text: "Wenn der Timer klingelt, machst du Pause." }
        ],
        remember: "Du stellst einen Timer und machst Pause.",
        vorbild: ["Alex stellt sich einen Timer auf eine Stunde.", "Als der Timer klingelt, legt er das Handy weg."]
      },
      standard: {
        text: [{ text: "TikTok ist darauf ausgelegt, dich möglichst lange in der App zu halten. Stell dir deshalb einen Timer, etwa auf eine Stunde, und mach eine Pause, sobald er klingelt." }],
        remember: "Timer stellen, Pause machen.",
        vorbild: ["Alex stellt sich einen Timer auf eine Stunde – und legt das Handy weg, als er klingelt."]
      }
    }
  },
  /* hilfe: seit Paket H1 (30.09.2026) neu aufgebaut; die neuen Kurz-Einheiten
     K1–K3 gibt es vorerst nur als Arbeitsfassung in Leichter Sprache. Die alten
     Fassungen liegen in geparkt/hilfe-umbau-2026-09-30.js. */
  ki: {
    "Was ist KI?": {
      einfach: {
        text: [
          { text: "KI ist die Abkürzung für Künstliche Intelligenz." },
          { text: "KI ist ein Computer-Programm, das Fragen beantworten, Texte schreiben und Bilder machen kann." },
          { text: "Auch wenn KI manchmal wie ein Mensch schreibt, ist sie kein Mensch." }
        ],
        remember: "KI ist ein Programm. KI ist kein Mensch.",
        vorbild: ["Alex schreibt mit einem Chatbot, der sehr freundlich antwortet.", "Alex weiß trotzdem: Das ist ein Programm und kein Mensch."]
      },
      standard: {
        text: [{ text: "KI steht für Künstliche Intelligenz. Gemeint sind Computerprogramme, die Fragen beantworten, Texte schreiben oder Bilder erzeugen können. Auch wenn sie dabei menschlich wirken: Eine KI ist kein Mensch, sondern ein Programm." }],
        remember: "KI ist ein Programm – kein Mensch.",
        vorbild: ["Alex schreibt mit einem sehr freundlichen Chatbot – und weiß trotzdem: Das ist ein Programm, kein Mensch."]
      }
    },
    "Was kann KI?": {
      einfach: {
        text: [
          { text: "KI kann dir helfen, zum Beispiel wenn du eine Frage hast." },
          { text: "Sie gibt dir schnell eine Antwort. Aber diese Antwort ist nicht immer richtig." },
          { text: "Deshalb prüfst du die Antwort, bevor du ihr glaubst." }
        ],
        remember: "Antworten von KI prüfst du immer.",
        vorbild: ["Tilda fragt eine KI, wann ihr Bus fährt.", "Die KI antwortet sofort, aber Tilda prüft die Zeit trotzdem auf dem Fahrplan."]
      },
      standard: {
        text: [{ text: "KI kann dir helfen: Du stellst eine Frage und bekommst schnell eine Antwort. Diese Antworten klingen oft sicher, sind aber nicht immer richtig. Prüf deshalb wichtige Antworten, bevor du dich darauf verlässt." }],
        remember: "KI-Antworten immer prüfen.",
        vorbild: ["Tilda fragt eine KI nach ihrem Bus. Die Antwort kommt sofort – Tilda prüft sie trotzdem im Fahrplan."]
      }
    },
    "Wann musst du aufpassen?": {
      einfach: {
        text: [
          { text: "KI kann auch falsche Dinge sagen." },
          { text: "Mit KI kann man außerdem Bilder fälschen und Stimmen nachmachen." },
          { text: "Will eine bekannte Stimme am Telefon Geld, legst du auf und rufst die Person unter ihrer bekannten Nummer selbst an." },
          { text: "Glaub deshalb nicht alles. Frag im Zweifel eine Person, der du vertraust." }
        ],
        remember: "Du glaubst nicht alles. Du prüfst es zuerst.",
        vorbild: ["Am Telefon klingt eine Stimme wie der Bruder von Alex und will sofort Geld.", "Alex legt auf und ruft seinen Bruder unter der bekannten Nummer selbst an."]
      },
      standard: {
        text: [{ text: "KI macht Fehler und kann falsche Dinge behaupten. Außerdem lassen sich mit ihr Bilder fälschen und Stimmen täuschend echt nachahmen. Verlangt eine vertraut klingende Stimme am Telefon Geld, leg auf und ruf die Person unter der Nummer an, die du schon kennst. Glaub nicht alles, was du siehst oder hörst, und frag im Zweifel eine Person, der du vertraust." }],
        remember: "Nicht alles glauben – erst prüfen.",
        vorbild: ["Am Telefon klingt eine Stimme wie Alex' Bruder und verlangt sofort Geld. Alex legt auf und ruft seinen Bruder unter der bekannten Nummer an."]
      }
    }
  },
  fakes: {
    "Was ist eine Fake-Nachricht?": {
      einfach: {
        text: [
          { text: "Eine Fake-Nachricht ist eine Lüge, die wie eine echte Nachricht aussieht." },
          { text: "Manchmal ist die Fake-Nachricht auch ein Bild, das jemand verändert hat." }
        ],
        remember: "Fake-Nachrichten sind Lügen, die echt aussehen.",
        vorbild: ["Tilda liest, dass ein bekannter Sänger gestorben sein soll.", "Die Nachricht steht aber nur auf einer einzigen Seite.", "Tilda merkt: Das kann eine Lüge sein."]
      },
      standard: {
        text: [{ text: "Eine Fake-Nachricht ist eine Falschmeldung, die wie eine echte Nachricht aussieht. Manchmal ist es auch ein Bild, das jemand bearbeitet hat, damit es etwas Falsches zeigt." }],
        remember: "Fake-Nachrichten sind Lügen, die echt aussehen.",
        vorbild: ["Tilda liest, ein bekannter Sänger sei gestorben – aber nur auf einer einzigen Seite. Sie erkennt: Das kann eine Falschmeldung sein."]
      }
    },
    "Wie erkennst du Fakes?": {
      einfach: {
        text: [
          { text: "Manche Nachrichten machen dich sehr aufgeregt. Das kann ein Zeichen für einen Fake sein." },
          { text: "Überleg dann kurz, bevor du etwas tust." },
          { text: "Prüf die Nachricht auf einer anderen Seite oder frag eine Person, der du vertraust." }
        ],
        remember: "Erst prüfen, dann teilen.",
        vorbild: ["Eine Nachricht macht Alex sehr wütend.", "Er macht Stopp und prüft die Nachricht zuerst, bevor er etwas tut."]
      },
      standard: {
        text: [{ text: "Macht dich eine Nachricht sehr aufgeregt oder wütend, ist Vorsicht angebracht – genau darauf zielen viele Fakes ab. Halte kurz inne und prüf die Meldung auf einer anderen, verlässlichen Seite oder frag eine Person, der du vertraust." }],
        remember: "Erst prüfen, dann teilen.",
        vorbild: ["Eine Nachricht macht Alex wütend. Er hält inne und prüft sie, bevor er reagiert."]
      }
    },
    "Was tust du bei Fakes?": {
      einfach: {
        text: [
          { text: "Wenn du eine Fake-Nachricht erkennst, schickst du sie nicht weiter." },
          { text: "Du löschst sie und erzählst eine Person, der du vertraust davon." }
        ],
        remember: "Fake-Nachrichten leitest du nicht weiter.",
        vorbild: ["Tilda erkennt, dass eine Nachricht ein Fake ist.", "Sie schickt sie nicht weiter und löscht sie."]
      },
      standard: {
        text: [{ text: "Hast du eine Fake-Nachricht erkannt, leitest du sie nicht weiter – so stoppst du ihre Verbreitung. Lösch sie und erzähl einer Person, der du vertraust, davon." }],
        remember: "Fakes nicht weiterleiten.",
        vorbild: ["Tilda erkennt eine Falschmeldung. Sie leitet sie nicht weiter und löscht sie."]
      }
    }
  },
  betrug: {
    "Was ist Betrug im Internet?": {
      einfach: {
        text: [
          { text: "Manche Menschen im Internet sind Betrüger." },
          { text: "Sie sagen zum Beispiel, dass sie dir helfen wollen." },
          { text: "In Wirklichkeit wollen sie aber dein Geld oder deine Daten. Das ist Betrug." }
        ],
        remember: "Nicht jeder im Internet ist ehrlich.",
        vorbild: ["Jemand bietet Alex Hilfe an, will dafür aber seine Bank-Daten.", "Alex merkt: Die Person will nur seine Daten, und gibt nichts ein."]
      },
      standard: {
        text: [{ text: "Im Internet geben sich manche Menschen hilfsbereit oder freundlich, wollen aber in Wahrheit an dein Geld oder deine Daten. Genau das ist Betrug." }],
        remember: "Nicht jeder im Internet meint es ehrlich.",
        vorbild: ["Jemand bietet Alex Hilfe an – gegen seine Bankdaten. Alex durchschaut das und gibt nichts ein."]
      }
    },
    "Wie erkennst du Betrug?": {
      einfach: {
        text: [
          { text: "Es gibt typische Zeichen für Betrug: Du gewinnst plötzlich etwas, jemand braucht dringend Geld, oder jemand will sofort eine Antwort." },
          { text: "Wenn du so ein Zeichen siehst, machst du Stopp." },
          { text: "Dann fragst du eine Person, der du vertraust." }
        ],
        remember: "Bei Stress oder Gewinn machst du Stopp.",
        vorbild: ["Eine Nachricht sagt, dass Tilda ein Handy gewonnen hat.", "Sie soll nur schnell 2 Euro bezahlen.", "Tilda macht Stopp und fragt Alex."]
      },
      standard: {
        text: [{ text: "Typische Warnzeichen für Betrug sind überraschende Gewinne, dringende Bitten um Geld und Zeitdruck. Siehst du so ein Zeichen, machst du Stopp und fragst eine Person, der du vertraust." }],
        remember: "Zeitdruck oder Gewinn: erst Stopp machen.",
        vorbild: ["Eine Nachricht meldet Tilda einen Handy-Gewinn – sie soll nur schnell 2 Euro zahlen. Tilda hält inne und fragt Alex."]
      }
    },
    "Was tust du bei Betrug?": {
      einfach: {
        text: [
          { text: "Wenn du Betrug vermutest, zahlst du kein Geld und gibst keine Daten ein." },
          { text: "Sagt eine Nachricht, mit deinem Bank-Konto stimmt etwas nicht, tippst du nicht auf den Link. Du öffnest deine Bank-App selbst." },
          { text: "Erzähl es eine Person, der du vertraust. Sie hilft dir weiter." }
        ],
        remember: "Kein Geld senden. Frag eine Person, der du vertraust.",
        vorbild: ["Eine SMS sagt Alex, dass sein Konto gesperrt ist, und schickt einen Link.", "Alex tippt nicht auf den Link, sondern öffnet seine Bank-App selbst."]
      },
      standard: {
        text: [{ text: "Vermutest du Betrug, zahlst du nichts und gibst keine Daten ein. Meldet eine Nachricht ein Problem mit deinem Konto, öffne die Bank-App selbst, statt dem Link zu folgen. Erzähl einer Person, der du vertraust, davon – gemeinsam findet ihr den nächsten Schritt." }],
        remember: "Kein Geld, keine Daten – Hilfe holen.",
        vorbild: ["Eine SMS meldet Alex ein gesperrtes Konto und schickt einen Link. Er öffnet stattdessen seine Bank-App selbst."]
      }
    }
  },
  einkaufen: {
    "Einkaufen im Internet": {
      einfach: {
        text: [
          { text: "Im Internet kannst du einkaufen. Das nennt man Online-Shopping." },
          { text: "Du suchst dir etwas aus und bezahlst es. Dann bringt ein Paket-Dienst die Ware zu dir nach Hause." }
        ],
        remember: "Du kaufst nur in sicheren Shops ein.",
        vorbild: ["Tilda will im Internet eine Hose kaufen.", "Sie kauft bei einem Shop, den sie schon lange kennt."]
      },
      standard: {
        text: [{ text: "Online-Shopping heißt: Du suchst im Internet etwas aus, bezahlst es und bekommst die Ware nach Hause geliefert. Das ist bequem – wichtig ist aber, dass du nur in sicheren Shops einkaufst." }],
        remember: "Nur in sicheren Shops einkaufen.",
        vorbild: ["Tilda kauft eine Hose online – bei einem Shop, den sie schon lange kennt."]
      }
    },
    "Gute Shops erkennen": {
      einfach: {
        text: [
          { text: "Einen guten Shop erkennst du am Impressum. Dort stehen der Name und die Adresse vom Shop." },
          { text: "Die Preise sind normal und nicht sehr billig." },
          { text: "Das Schloss in der Adress-Zeile allein ist kein gutes Zeichen, weil auch falsche Shops es haben." },
          { text: "Wenn du unsicher bist, fragst du eine Person, der du vertraust." }
        ],
        remember: "Ein guter Shop zeigt Name und Adresse im Impressum.",
        vorbild: ["Alex findet einen neuen Shop und schaut zuerst ins Impressum.", "Dort stehen Name und Adresse, und das ist ein gutes Zeichen."]
      },
      standard: {
        text: [{ text: "Seriöse Shops nennen im Impressum ihren Namen und ihre Anschrift, und ihre Preise sind realistisch statt verdächtig niedrig. Das Schloss-Symbol in der Adresszeile reicht allein nicht: Es zeigt nur eine verschlüsselte Verbindung, und auch Fake-Shops haben es. Bist du unsicher, frag eine Person, der du vertraust." }],
        remember: "Ein seriöser Shop nennt Name und Anschrift.",
        vorbild: ["Bei einem neuen Shop schaut Alex zuerst ins Impressum. Name und Anschrift stehen dort – ein gutes Zeichen."]
      }
    },
    "Sicher bezahlen": {
      einfach: {
        text: [
          { text: "PayPal und der Kauf auf Rechnung sind sicherer als andere Bezahl-Arten. Bei Rechnung bekommst du zuerst die Ware und zahlst danach." },
          { text: "Deine Kreditkarte gibst du nicht auf jeder Seite ein." },
          { text: "Wenn es Probleme gibt, fragst du eine Person, der du vertraust." }
        ],
        remember: "PayPal oder Rechnung ist sicherer.",
        vorbild: ["Tilda kauft zum ersten Mal in einem Shop.", "Sie bezahlt auf Rechnung, damit sie zuerst die Ware bekommt."]
      },
      standard: {
        text: [{ text: "Sicherer bezahlst du auf Rechnung – dann zahlst du erst, wenn die Ware da ist – oder über PayPal mit Käuferschutz. Deine Kreditkartendaten gibst du nicht auf jeder Seite ein. Gibt es Probleme, frag eine Person, der du vertraust." }],
        remember: "Rechnung oder PayPal sind sicherer.",
        vorbild: ["Beim ersten Einkauf in einem Shop zahlt Tilda auf Rechnung – so bekommt sie zuerst die Ware."]
      }
    }
  }
};


/* ------------------------------------------------------------
   Lernziele „Danach kannst du …" (Lernweg, 26.09.2026): je Thema für den
   Kurz-Weg (passend zu seinen 3 Lektionen) und den langen Weg, in drei
   Stufen. Vorher standen die Ziele als Wissen da („Was du bei fremden
   Nummern tust"), im Kurz-Weg nur die Titel der Lektionen. Die alten
   learningGoals in topics.js bleiben als Rückfall stehen.
   ------------------------------------------------------------ */
const LERNZIELE = {
  datenschutz: {
    kurz: {
      leicht:   ["Private Daten erkennen.", "Prüfen: Welche Daten sind nötig?", "Selbst entscheiden: Was gebe ich weiter?", "Bei Unsicherheit: noch nichts freigeben."],
      einfach:  ["Erkennen, welche Daten privat sind.","Prüfen, welche Daten für einen Zweck nötig sind.","Selbst entscheiden, was du weitergibst.","Wenn du unsicher bist, noch nichts freigeben."],
      standard: ["Persönliche Daten erkennen.","Prüfen, welche Daten für einen Zweck nötig sind.","Selbst entscheiden, was du weitergibst.","Bei Unsicherheit zunächst nichts freigeben."]
    },
    lang: {
      leicht:   ["Private Daten erkennen.", "Prüfen: Welche Daten sind nötig?", "Selbst entscheiden: Was gebe ich weiter?", "Bei Unsicherheit: noch nichts freigeben."],
      einfach:  ["Erkennen, welche Daten privat sind.","Prüfen, welche Daten für einen Zweck nötig sind.","Selbst entscheiden, was du weitergibst.","Wenn du unsicher bist, noch nichts freigeben."],
      standard: ["Persönliche Daten erkennen.","Prüfen, welche Daten für einen Zweck nötig sind.","Selbst entscheiden, was du weitergibst.","Bei Unsicherheit zunächst nichts freigeben."]
    }
  },
  whatsapp: {
    kurz: {
      leicht:   ["Bei fremden Nachrichten richtig handeln.", "Fremde Links erkennen.", "Deinen WhatsApp-Code schützen."],
      einfach:  ["Richtig reagieren, wenn dir eine fremde Nummer schreibt.", "Gefährliche Links in Nachrichten erkennen.", "Deinen WhatsApp-Code schützen, auch vor Freunden."],
      standard: ["Nachrichten von Unbekannten sicher einschätzen.", "Verdächtige Links erkennen und nicht antippen.", "Deinen Bestätigungscode vor Missbrauch schützen."]
    },
    lang: {
      leicht:   ["Bei fremden Nummern richtig handeln.", "Codes schützen.", "Bei Geld-Bitten richtig handeln."],
      einfach:  ["Richtig reagieren, wenn dir eine fremde Nummer schreibt.", "Codes nie weitergeben.", "Bei Geld-Bitten erst nachprüfen."],
      standard: ["Nachrichten fremder Nummern sicher einschätzen.", "Bestätigungscodes konsequent schützen.", "Geldforderungen über einen bekannten Weg überprüfen."]
    }
  },
  facebook: {
    kurz: {
      leicht:   ["Dein Profil nur für Freunde einstellen.", "Fremde Anfragen ablehnen.", "Komische Nachrichten erkennen."],
      einfach:  ["Dein Profil so einstellen, dass nur Freunde es sehen.", "Freundschafts-Anfragen von Fremden ablehnen.", "Komische Nachrichten erkennen und jemandem zeigen."],
      standard: ["Die Sichtbarkeit deines Profils einschränken.", "Anfragen von Unbekannten einschätzen und ablehnen.", "Verdächtige Nachrichten erkennen, ohne Links anzutippen."]
    },
    lang: {
      leicht:   ["Dein Profil sicher einstellen.", "Bei fremden Kontakten richtig handeln.", "Private Daten schützen."],
      einfach:  ["Dein Profil sicher einstellen.", "Richtig reagieren, wenn dich Fremde kontaktieren.", "Entscheiden, welche Daten du nicht teilst."],
      standard: ["Dein Profil datensparsam einstellen.", "Kontaktanfragen von Unbekannten einschätzen.", "Bewusst entscheiden, welche Daten du teilst."]
    }
  },
  instagram: {
    kurz: {
      leicht:   ["Dein Konto auf privat stellen.", "Vor dem Posten andere fragen.", "Bei fremden Nachrichten richtig handeln."],
      einfach:  ["Dein Konto so einstellen, dass nur Freunde deine Fotos sehen.", "Andere fragen, bevor du ein Foto mit ihnen postest.", "Richtig reagieren, wenn dir ein fremdes Profil schreibt."],
      standard: ["Dein Konto auf privat stellen.", "Vor dem Posten die Zustimmung anderer einholen.", "Nachrichten fremder Profile sicher einschätzen."]
    },
    lang: {
      leicht:   ["Fotos sicher posten.", "Deinen Standort schützen.", "Fake-Profile erkennen."],
      einfach:  ["Fotos so posten, dass sie niemandem schaden.", "Deinen Standort schützen.", "Fake-Profile erkennen."],
      standard: ["Fotos verantwortungsvoll teilen.", "Deinen Standort vor Fremden schützen.", "Gefälschte Profile erkennen."]
    }
  },
  youtube: {
    kurz: {
      leicht:   ["Videos prüfen: Stimmt das?", "Werbung erkennen.", "Pausen machen."],
      einfach:  ["Prüfen, ob ein Video wirklich stimmt.", "Werbung in Videos erkennen.", "Rechtzeitig eine Pause machen."],
      standard: ["Den Wahrheitsgehalt von Videos überprüfen.", "Werbung und Kaufanreize erkennen.", "Deine Bildschirmzeit bewusst begrenzen."]
    },
    lang: {
      leicht:   ["Videos prüfen: Stimmt das?", "Werbung erkennen.", "Pausen machen und gesund bleiben."],
      einfach:  ["Prüfen, ob ein Video stimmt.", "Werbung bei YouTube erkennen.", "Pausen machen und auf dich achten."],
      standard: ["Den Wahrheitsgehalt von Videos überprüfen.", "Werbung und Produktplatzierungen erkennen.", "Gesund mit deiner Bildschirmzeit umgehen."]
    }
  },
  snapchat: {
    kurz: {
      leicht:   ["Sichere Bilder auswählen.", "Deinen Standort ausschalten.", "Nein sagen."],
      einfach:  ["Nur Bilder schicken, die alle sehen dürfen.", "Deinen Standort bei Snapchat ausschalten.", "Nein sagen, wenn dich jemand unter Druck setzt."],
      standard: ["Bewusst auswählen, welche Bilder du verschickst.", "Deine Standort-Freigabe ausschalten.", "Dich gegen Druck abgrenzen und Hilfe holen."]
    },
    lang: {
      leicht:   ["Wissen: Snaps bleiben oft gespeichert.", "Deinen Standort schützen.", "Bei Stress richtig handeln."],
      einfach:  ["Verstehen, dass Snaps gespeichert werden können.", "Deinen Standort schützen.", "Richtig reagieren, wenn dir jemand Stress macht."],
      standard: ["Einschätzen, was mit verschickten Snaps passieren kann.", "Deinen Standort vor Fremden schützen.", "Auf Druck und Belästigung richtig reagieren."]
    }
  },
  tiktok: {
    kurz: {
      leicht:   ["Bei gefährlichen Trends nicht mitmachen.", "Bei fremden Nachrichten richtig handeln.", "Mit einem Timer Pause machen."],
      einfach:  ["Bei gefährlichen Trends Nein sagen.", "Richtig reagieren, wenn dir Fremde schreiben.", "Mit einem Timer rechtzeitig aufhören."],
      standard: ["Gefährliche Trends erkennen und nicht mitmachen.", "Private Nachrichten von Fremden sicher einschätzen.", "Deine Nutzungszeit mit einem Timer begrenzen."]
    },
    lang: {
      leicht:   ["Verstehen: So wählt TikTok Videos aus.", "Bei Nachrichten und Kontakten aufpassen.", "Gesund mit TikTok umgehen."],
      einfach:  ["Verstehen, wie TikTok Videos für dich auswählt.", "Bei Nachrichten und Kontakten aufpassen.", "Gesund mit TikTok umgehen."],
      standard: ["Nachvollziehen, wie TikTok Inhalte auswählt.", "Kontakte und Nachrichten sicher einschätzen.", "Bewusst und gesund mit TikTok umgehen."]
    }
  },
  /* Paket H1 (30.09.2026): neue Lernziel-Struktur mit 6 Zielen (fachlich in
     topics.js › hilfe.lernzielStruktur). Beide Wege vermitteln die ganze
     Kern-Kompetenz. ARBEITSFASSUNG nur in Leichter Sprache (Rückfall: Leicht);
     die alten Ziele liegen in geparkt/hilfe-umbau-2026-09-30.js. */
  hilfe: {
    kurz: {
      leicht:   ["Erkennen: Was für ein Problem ist das?", "Sicher selbst handeln.", "Bei Druck oder Angst erst stoppen.", "Die passende Hilfe finden.", "Unterstützung wirklich holen.", "Einen Notfall erkennen."]
    },
    lang: {
      leicht:   ["Erkennen: Was für ein Problem ist das?", "Sicher selbst handeln.", "Bei Druck oder Angst erst stoppen.", "Die passende Hilfe finden.", "Unterstützung wirklich holen.", "Einen Notfall erkennen."]
    }
  },
  ki: {
    kurz: {
      leicht:   ["Wissen: KI ist kein Mensch.", "KI-Antworten prüfen.", "Bei falschen Stimmen selbst anrufen."],
      einfach:  ["Verstehen, dass KI ein Programm ist.", "Antworten von KI überprüfen.", "Bei einer verdächtigen Stimme selbst zurückrufen."],
      standard: ["KI als Programm einordnen.", "KI-Antworten kritisch überprüfen.", "Auf gefälschte Stimmen richtig reagieren."]
    },
    lang: {
      leicht:   ["Wissen: Was ist KI?", "KI sinnvoll nutzen.", "Bei KI vorsichtig sein."],
      einfach:  ["Verstehen, was KI ist.", "KI so nutzen, dass sie dir hilft.", "Erkennen, wann du bei KI vorsichtig sein musst."],
      standard: ["Verstehen, was KI ist und was nicht.", "KI sinnvoll und kritisch nutzen.", "Risiken bei KI erkennen."]
    }
  },
  fakes: {
    kurz: {
      leicht:   ["Fake-Nachrichten erkennen.", "Bei Aufregung Stopp machen.", "Fakes nicht weiterleiten."],
      einfach:  ["Erkennen, was eine Fake-Nachricht ist.", "Stopp machen, wenn dich eine Nachricht sehr aufregt.", "Fake-Nachrichten nicht weiterleiten."],
      standard: ["Falschmeldungen erkennen.", "Bei starken Gefühlen innehalten und prüfen.", "Die Verbreitung von Fakes stoppen."]
    },
    lang: {
      leicht:   ["Fake News erkennen.", "Nachrichten prüfen.", "Fakes nicht weiterleiten."],
      einfach:  ["Erkennen, was Fake News sind.", "Prüfen, ob eine Nachricht stimmt.", "Richtig mit Fake-Nachrichten umgehen."],
      standard: ["Falschmeldungen erkennen.", "Quellen und Aussagen überprüfen.", "Verantwortungsvoll mit Fakes umgehen."]
    }
  },
  betrug: {
    kurz: {
      leicht:   ["Betrug erkennen.", "Bei Stress und Gewinnen Stopp machen.", "Die Bank-App selbst öffnen."],
      einfach:  ["Erkennen, was Betrüger wollen.", "Stopp machen bei Zeitdruck oder einem Gewinn.", "Deine Bank-App selbst öffnen, statt auf einen Link zu tippen."],
      standard: ["Die Absichten von Betrügern erkennen.", "Bei Zeitdruck oder Gewinnversprechen innehalten.", "Anfragen deiner Bank über die eigene App prüfen."]
    },
    lang: {
      leicht:   ["Tricks von Betrügern erkennen.", "Bei Betrug richtig handeln.", "Dir Hilfe holen."],
      einfach:  ["Erkennen, wie Betrüger vorgehen.", "Richtig handeln, wenn du betrogen wirst.", "Dir ohne Scham Hilfe holen."],
      standard: ["Die gängigen Maschen erkennen.", "Im Betrugsfall richtig handeln.", "Dir rechtzeitig Unterstützung holen."]
    }
  },
  einkaufen: {
    kurz: {
      leicht:   ["Bei sicheren Shops einkaufen.", "Gute Shops erkennen.", "Sicher bezahlen."],
      einfach:  ["In sicheren Shops einkaufen.", "Einen guten Shop am Impressum erkennen.", "Sicher bezahlen, zum Beispiel auf Rechnung."],
      standard: ["Seriöse Shops auswählen.", "Ein vollständiges Impressum prüfen.", "Eine sichere Zahlungsart wählen."]
    },
    lang: {
      leicht:   ["Gute Shops erkennen.", "Sicher bezahlen.", "Bei Problemen richtig handeln."],
      einfach:  ["Einen seriösen Shop erkennen.", "Eine sichere Bezahl-Art wählen.", "Richtig handeln, wenn ein Kauf schiefläuft."],
      standard: ["Seriöse Shops erkennen.", "Sichere Zahlungsarten wählen.", "Bei Problemen mit einem Kauf richtig vorgehen."]
    }
  }
};

/* ------------------------------------------------------------
   Aufgaben je Sprachstufe (Datenschutz-Musterthema, Paket 5, 28.09.2026)
   Die Aufgabe in topics.js ist die Leichte Sprache und bleibt die Referenz.
   Schlüssel = die Frage in Leichter Sprache, wortgleich zu topics.js. Steht
   dieselbe Frage an mehreren Stellen (lange und kurze Einheit), bekommt sie
   überall dieselben Fassungen.
   Seit Paket T1 (29.09.2026) geht als Schlüssel auch die feste Aufgaben-ID:
   "<thema>/lang/<Lektions-Titel>" oder "<thema>/kurz/<Lektions-Titel>" für
   Übungen in Lektionen – so auch für die nachgelieferten Übungen aus
   uebungen-de.js, z. B. whatsapp: { "whatsapp/lang/WhatsApp nutzen":
   { einfach: {…}, standard: {…} } } –, "<thema>/neu/<id>" für die Fragen
   einer eigenen neuen Situation. Die ID ändert sich nicht, wenn der
   Leicht-Text später verbessert wird. Liste aller IDs:
   node pruefung/datenschutz/t1-uebungen.cjs --ids
   Felder je Fassung: question, situation, hinweis, answers[] (gleiche
   Reihenfolge und Anzahl), feedbackCorrect, feedbackWrong[] (null an derselben
   Stelle), feedbackAuch (Paket T5: Text oder je Antwort einer, für Antworten
   aus `auchMoeglich` – „Das geht auch“; `auchMoeglich` selbst steht nur in der
   Leicht-Aufgabe und gilt für alle Stufen),
   remember (nur Anzeige – die Regel liest weiter den Leicht-Satz),
   formular.titel, felder[] (name, wofuer, zustand, rueckmeldung), ausweg,
   auswegRueckmeldung. Eingesetzt in app.js (sprachstufeAnwenden).
   Themen ohne Einträge zeigen ihre Aufgaben wie bisher.
   ------------------------------------------------------------ */
const AUFGABEN_VERSIONS = {
  datenschutz: {
    "Du fängst eine neue Arbeit an. Die Firma will deine Konto-Nummer. Sie will dir deinen Lohn überweisen. Was machst du?": {
      "einfach": {
        "question": "Du fängst eine neue Arbeit an. Die Firma will deine Kontonummer, damit sie dir deinen Lohn überweisen kann. Was machst du?",
        "hinweis": "Überlege: Wer will die Nummer haben, und wofür?",
        "answers": [
          "Ich gebe die Kontonummer, weil die Firma sie für meinen Lohn braucht.",
          "Ich gebe die Kontonummer nicht, weil Bankdaten besonders wichtig sind.",
          "Ich gebe die Kontonummer und dazu ein Foto von meiner Bankkarte, damit es schneller geht."
        ],
        "feedbackCorrect": "Genau. Die Kontonummer ist wichtig, aber die Firma braucht sie für deinen Lohn. Du kennst die Firma, deshalb gibst du sie.",
        "feedbackWrong": [
          null,
          "Bankdaten sind wichtig. Hier gibt es aber einen klaren Zweck: deinen Lohn. Ohne Kontonummer bekommst du kein Geld. Private Daten bedeutet nicht, dass du immer Nein sagst.",
          "Die Firma braucht nur die Kontonummer, aber kein Foto von deiner Bankkarte. Mit so einem Foto kann jemand mit deiner Karte bezahlen."
        ],
        "remember": "Ich gebe nur die Daten weiter, die nötig sind."
      },
      "standard": {
        "question": "Du beginnst eine neue Stelle. Die Firma möchte deine Kontonummer, um dir den Lohn zu überweisen. Was tust du?",
        "hinweis": "Überlege: Wer will die Nummer – und wofür?",
        "answers": [
          "Ich gebe die Kontonummer an – die Firma braucht sie für meinen Lohn.",
          "Ich gebe die Kontonummer nicht an – Bankdaten sind besonders schützenswert.",
          "Ich gebe die Kontonummer an und schicke ein Foto meiner Bankkarte mit, damit es schneller geht."
        ],
        "feedbackCorrect": "Genau. Die Kontonummer ist sensibel, aber die Firma braucht sie für deinen Lohn. Du kennst die Firma – also gibst du sie an.",
        "feedbackWrong": [
          null,
          "Bankdaten sind sensibel, doch hier gibt es einen klaren Zweck: deinen Lohn. Ohne Kontonummer bekommst du kein Geld. Privat heißt nicht automatisch Nein.",
          "Die Firma braucht nur die Kontonummer, kein Foto deiner Bankkarte. Mit einem solchen Foto kann jemand mit deiner Karte bezahlen."
        ],
        "remember": "Ich gebe nur die Daten weiter, die für den Zweck nötig sind."
      }
    },

    "Wer darf dein Geburts-Datum bekommen?": {
      "einfach": {
        "question": "Wer darf dein Geburtsdatum bekommen?",
        "hinweis": "Überlege: Wen kennst du, und wer braucht es wirklich?",
        "answers": [
          "Eine fremde Person im Chat, die dir zum Geburtstag gratulieren will.",
          "Deine Krankenkasse, bei der du selbst angerufen hast.",
          "Eine Seite im Internet, die dir ein Geschenk verspricht."
        ],
        "feedbackCorrect": "Genau. Deine Krankenkasse kennst du, und du hast selbst dort angerufen. Sie braucht dein Geburtsdatum, damit sie dich erkennt. Die anderen kennst du nicht.",
        "feedbackWrong": [
          "Diese Person kennst du nicht, und du weißt nicht, wer das wirklich ist. Für einen Gruß braucht sie dein Geburtsdatum nicht.",
          null,
          "Diese Seite kennst du nicht. Für ein Geschenk braucht sie dein Geburtsdatum nicht. Manche wollen so an deine Daten kommen."
        ],
        "remember": "Ich prüfe, wer meine Daten bekommt."
      },
      "standard": {
        "question": "Wer darf dein Geburtsdatum bekommen?",
        "hinweis": "Überlege: Wen kennst du – und wer braucht es wirklich?",
        "answers": [
          "Eine unbekannte Person im Chat, die dir zum Geburtstag gratulieren möchte.",
          "Deine Krankenkasse, bei der du selbst angerufen hast.",
          "Eine Website, die dir ein Geschenk verspricht."
        ],
        "feedbackCorrect": "Genau. Deine Krankenkasse kennst du, und du hast selbst angerufen. Sie braucht dein Geburtsdatum, um dich zu erkennen. Die anderen kennst du nicht.",
        "feedbackWrong": [
          "Diese Person kennst du nicht – du weißt nicht, wer wirklich dahintersteckt. Für einen Gruß braucht sie dein Geburtsdatum nicht.",
          null,
          "Diese Seite kennst du nicht. Für ein Geschenk braucht sie dein Geburtsdatum nicht – manche versuchen so, an Daten zu kommen."
        ],
        "remember": "Ich prüfe, wer meine Daten bekommt."
      }
    },

    "Was gibst du bei der Fitness-App an?": {
      "einfach": {
        "question": "Was gibst du bei der Fitness-App an?",
        "situation": "Du willst eine Fitness-App nutzen. Die App zählt deine Schritte und zeigt dir, wie viele Kalorien du verbraucht hast. Genau das willst du sehen. Für die App brauchst du ein Konto.",
        "hinweis": "Überlege: Was willst du mit der App machen, und welche Angaben passen dazu? Welche Felder sind freiwillig? Du kannst auch zuerst prüfen.",
        "formular": {
          "titel": "Fitness-App: Konto anlegen"
        },
        "felder": [
          {
            "name": "E-Mail",
            "wofuer": "Für dein Konto: Mit der E-Mail meldest du dich an.",
            "rueckmeldung": {
              "angegeben": "Pflicht heißt nur, dass es ohne E-Mail nicht weitergeht. Hier passt die E-Mail aber auch zum Zweck, denn mit ihr meldest du dich in deinem Konto an.",
              "leer": "Pflicht heißt, dass es ohne E-Mail nicht weitergeht. Die E-Mail passt hier zum Zweck. Wenn du die App nutzen willst, gibst du sie an. Sonst nutzt du die App nicht."
            }
          },
          {
            "name": "Gewicht",
            "wofuer": "Mit deinem Gewicht berechnen wir deine Kalorien.",
            "rueckmeldung": {
              "angegeben": "Das Feld ist freiwillig. Du willst deine Kalorien sehen, und dafür braucht die App dein Gewicht. Das passt zu deinem Ziel.",
              "leer": "Das Feld ist freiwillig. Du kannst Nein sagen, dann bekommt die App dein Gewicht nicht. Deine Kalorien kann sie dann vielleicht nicht berechnen, aber deine Schritte zählt sie trotzdem. Du entscheidest."
            }
          },
          {
            "name": "Telefonnummer",
            "wofuer": "Für Angebote per SMS.",
            "rueckmeldung": {
              "angegeben": "Das Feld ist freiwillig. Die Nummer ist nur für Werbung. Für deine Schritte und Kalorien braucht die App sie nicht.",
              "leer": "Das Feld ist freiwillig. Die Nummer ist nur für Werbung, und für dein Ziel braucht die App sie nicht."
            }
          },
          {
            "name": "Geburtsdatum",
            "wofuer": "Wir gratulieren dir zum Geburtstag.",
            "rueckmeldung": {
              "angegeben": "Das Feld ist freiwillig. Ein Gruß zum Geburtstag gehört nicht zu deinem Ziel. Für deine Schritte und Kalorien braucht die App das nicht.",
              "leer": "Das Feld ist freiwillig. Ein Gruß zum Geburtstag gehört nicht zu deinem Ziel."
            }
          }
        ],
        "ausweg": {
          "nichtNutzen": "Ich lege kein Konto an."
        },
        "auswegRueckmeldung": {
          "nichtNutzen": "Das ist deine Entscheidung, und sie ist in Ordnung. Dann nutzt du die App nicht."
        },
        "remember": "Ich gebe nur die Daten weiter, die nötig sind."
      },
      "standard": {
        "question": "Welche Angaben machst du bei der Fitness-App?",
        "situation": "Du möchtest eine Fitness-App nutzen, die deine Schritte zählt und anzeigt, wie viele Kalorien du verbraucht hast – genau das willst du sehen. Dafür brauchst du ein Konto.",
        "hinweis": "Überlege: Was willst du mit der App, und welche Angaben passen dazu? Welche Felder sind freiwillig? Du kannst auch erst prüfen.",
        "formular": {
          "titel": "Fitness-App: Konto erstellen"
        },
        "felder": [
          {
            "name": "E-Mail",
            "wofuer": "Für dein Konto – damit meldest du dich an.",
            "rueckmeldung": {
              "angegeben": "Pflicht heißt nur: Ohne E-Mail geht es nicht weiter. Hier passt sie zugleich zum Zweck – du meldest dich damit in deinem Konto an.",
              "leer": "Pflicht heißt: Ohne E-Mail geht es nicht weiter. Die E-Mail passt hier zum Zweck. Willst du die App nutzen, gibst du sie an – sonst nutzt du die App nicht."
            }
          },
          {
            "name": "Gewicht",
            "wofuer": "Mit deinem Gewicht berechnen wir deinen Kalorienverbrauch.",
            "rueckmeldung": {
              "angegeben": "Das Feld ist freiwillig. Du willst deinen Kalorienverbrauch sehen, und dafür braucht die App dein Gewicht – das passt zu deinem Ziel.",
              "leer": "Das Feld ist freiwillig. Du kannst Nein sagen – dann bekommt die App dein Gewicht nicht und kann deinen Kalorienverbrauch vielleicht nicht berechnen. Deine Schritte zählt sie trotzdem. Du entscheidest."
            }
          },
          {
            "name": "Telefonnummer",
            "wofuer": "Für Angebote per SMS.",
            "rueckmeldung": {
              "angegeben": "Das Feld ist freiwillig. Die Nummer dient nur der Werbung – für Schritte und Kalorien braucht die App sie nicht.",
              "leer": "Das Feld ist freiwillig. Die Nummer dient nur der Werbung; für dein Ziel braucht die App sie nicht."
            }
          },
          {
            "name": "Geburtsdatum",
            "wofuer": "Wir gratulieren dir zum Geburtstag.",
            "rueckmeldung": {
              "angegeben": "Das Feld ist freiwillig. Ein Geburtstagsgruß gehört nicht zu deinem Ziel – für Schritte und Kalorien braucht die App das nicht.",
              "leer": "Das Feld ist freiwillig. Ein Geburtstagsgruß gehört nicht zu deinem Ziel."
            }
          }
        ],
        "ausweg": {
          "nichtNutzen": "Ich erstelle kein Konto."
        },
        "auswegRueckmeldung": {
          "nichtNutzen": "Das ist deine Entscheidung und in Ordnung. Dann nutzt du die App nicht."
        },
        "remember": "Ich gebe nur die Daten weiter, die für den Zweck nötig sind."
      }
    },

    "Eine App macht aus einem Foto eine Post-Karte. Du willst ein Foto verschicken. Auf dem Handy erscheint: Soll die App deine Fotos sehen? Was machst du?": {
      "einfach": {
        "question": "Eine App macht aus einem Foto eine Postkarte. Du willst ein Foto als Karte verschicken. Auf dem Handy erscheint die Frage: Soll die App deine Fotos sehen? Was machst du?",
        "hinweis": "Überlege: Wie viele Fotos braucht die App für deine Karte?",
        "answers": [
          "Ich erlaube nur ausgewählte Fotos und wähle das eine Foto aus.",
          "Ich erlaube alle Fotos, damit ich nicht lange suchen muss.",
          "Ich erlaube keine Fotos, weil Fotos privat sind."
        ],
        "feedbackCorrect": "Genau. Die App braucht nur dieses eine Foto. Viele Handys bieten dafür die Einstellung: Ausgewählte Fotos. Dann sieht die App deine anderen Fotos nicht.",
        "feedbackWrong": [
          null,
          "Dann sieht die App alle deine Fotos, obwohl sie für die Karte nur eins braucht. Das ist mehr als nötig.",
          "Dann kann die App keine Karte machen, denn dafür braucht sie ein Foto. Gib ihr nur das eine Foto."
        ],
        "remember": "Ich erlaube einer App nur das, was sie braucht."
      },
      "standard": {
        "question": "Eine App gestaltet aus einem Foto eine Postkarte. Du willst ein Foto verschicken, und dein Handy fragt: Darf die App auf deine Fotos zugreifen? Was tust du?",
        "hinweis": "Überlege: Wie viele Fotos braucht die App für deine Karte?",
        "answers": [
          "Nur ausgewählte Fotos freigeben und das eine Foto auswählen.",
          "Alle Fotos freigeben – dann muss ich nicht lange suchen.",
          "Keinen Zugriff erlauben – Fotos sind privat."
        ],
        "feedbackCorrect": "Genau. Die App braucht nur dieses eine Foto. Viele Handys bieten dafür die Option Ausgewählte Fotos – dann sieht die App deine übrigen Fotos nicht.",
        "feedbackWrong": [
          null,
          "Dann sieht die App alle deine Fotos, obwohl sie für die Karte nur eins braucht. Das ist mehr als nötig.",
          "Dann kann die App keine Karte erstellen – dafür braucht sie ein Foto. Gib ihr nur das eine."
        ],
        "remember": "Ich erlaube einer App nur, was sie für ihre Funktion braucht."
      }
    },

    "In einer App hast du ein Profil. Dort steht deine Telefon-Nummer. Deine Freunde aus der App sollen dich anrufen können. Wer soll die Nummer sehen?": {
      "einfach": {
        "question": "In einer App hast du ein Profil, in dem deine Telefonnummer steht. Deine Freunde aus der App sollen dich anrufen können. Wer soll die Nummer sehen?",
        "hinweis": "Überlege: Wer soll dich anrufen können?",
        "answers": [
          "Alle Menschen, die die App benutzen.",
          "Nur meine Freunde.",
          "Niemand, weil die Nummer privat ist."
        ],
        "feedbackCorrect": "Genau. Deine Freunde sollen dich anrufen können, und dafür reicht die Einstellung: Nur Freunde. Fremde brauchen deine Nummer nicht.",
        "feedbackWrong": [
          "Dann sehen auch Fremde deine Nummer. Das ist mehr als nötig, denn für deine Freunde reicht: Nur Freunde.",
          null,
          "Das darfst du so einstellen. Aber dann können dich deine Freunde nicht anrufen, und das wolltest du ja. Dafür reicht: Nur Freunde."
        ],
        "remember": "Ich wähle selbst aus, wer meine Daten sieht."
      },
      "standard": {
        "question": "In deinem Profil in einer App steht deine Telefonnummer. Deine Freunde aus der App sollen dich anrufen können. Wer soll die Nummer sehen?",
        "hinweis": "Überlege: Wer soll dich anrufen können?",
        "answers": [
          "Alle Nutzerinnen und Nutzer der App.",
          "Nur meine Freunde.",
          "Niemand – die Nummer ist privat."
        ],
        "feedbackCorrect": "Genau. Deine Freunde sollen dich anrufen können – dafür reicht Nur Freunde. Fremde brauchen deine Nummer nicht.",
        "feedbackWrong": [
          "Dann sehen auch Fremde deine Nummer. Das ist mehr als nötig; für deine Freunde reicht Nur Freunde.",
          null,
          "Das darfst du so einstellen. Dann können dich deine Freunde aber nicht anrufen – und das wolltest du ja. Dafür reicht Nur Freunde."
        ],
        "remember": "Ich lege selbst fest, wer meine Daten sieht."
      }
    },

    "Du hast auf einer Feier ein Foto gemacht. Darauf sind 3 Freunde. Du willst es in deinen Status stellen. Was machst du?": {
      "einfach": {
        "question": "Du hast auf einer Feier ein Foto gemacht, auf dem 3 Freunde zu sehen sind. Du willst es in deinen Status stellen. Was machst du?",
        "hinweis": "Überlege: Wer ist noch auf dem Foto, und wer entscheidet mit?",
        "answers": [
          "Ich stelle es gleich rein, weil ich das Foto ja gemacht habe.",
          "Ich stelle es nur für 24 Stunden rein, danach ist es wieder weg.",
          "Ich frage die 3 vorher. Nur wenn alle Ja sagen, stelle ich es rein."
        ],
        "feedbackCorrect": "Genau. Auf dem Foto sind auch deine Freunde, deshalb entscheiden sie mit. Wenn einer Nein sagt, stellst du es nicht rein.",
        "feedbackWrong": [
          "Das Foto zeigt auch deine Freunde, deshalb entscheiden sie mit. Frag sie vorher.",
          "Auch in 24 Stunden kann jemand das Foto speichern. Dann ist es nicht weg. Frag deine Freunde vorher.",
          null
        ],
        "remember": "Bevor ich Fotos von anderen teile, frage ich sie."
      },
      "standard": {
        "question": "Auf einer Feier hast du ein Foto gemacht, auf dem drei Freunde zu sehen sind. Du willst es in deinen Status stellen. Was tust du?",
        "hinweis": "Überlege: Wer ist noch auf dem Foto – und wer entscheidet mit?",
        "answers": [
          "Ich stelle es gleich ein – schließlich habe ich das Foto gemacht.",
          "Ich stelle es nur für 24 Stunden ein, danach verschwindet es.",
          "Ich frage die drei vorher und stelle es nur ein, wenn alle zustimmen."
        ],
        "feedbackCorrect": "Genau. Auf dem Foto sind auch deine Freunde, also entscheiden sie mit. Sagt jemand Nein, stellst du es nicht ein.",
        "feedbackWrong": [
          "Das Foto zeigt auch deine Freunde – sie entscheiden mit. Frag sie vorher.",
          "Auch in 24 Stunden kann jemand das Foto speichern; dann ist es nicht weg. Frag deine Freunde vorher.",
          null
        ],
        "remember": "Fotos von anderen teile ich erst, wenn sie zugestimmt haben."
      }
    },

    "Du gehst mit 3 Freunden auf ein Konzert. Ihr wollt euch vor dem Eingang treffen. In eurer Chat-Gruppe sind aber 30 Leute. Wie teilst du deinen Standort?": {
      "einfach": {
        "question": "Du gehst mit 3 Freunden auf ein Konzert, und ihr wollt euch vor dem Eingang treffen. In eurer Chatgruppe sind aber 30 Leute. Wie teilst du deinen Standort?",
        "hinweis": "Überlege: Wer braucht deinen Standort, und wie lange?",
        "answers": [
          "Mit allen 30 Leuten, und zwar für immer.",
          "Nur mit den 3 Freunden, aber für immer.",
          "Nur mit den 3 Freunden, bis zum Treffen."
        ],
        "feedbackCorrect": "Genau. Nur die 3 brauchen deinen Standort, und zwar nur bis zum Treffen. Du darfst auch Nein sagen. Dann schreibt ihr euch einfach, wo ihr seid.",
        "feedbackWrong": [
          "Dann sehen 30 Leute immer deinen Standort, obwohl ihn für das Treffen nur 3 brauchen, und das nur kurz.",
          "Das sind die richtigen Leute. Aber für immer ist mehr als nötig, denn für das Treffen reicht eine kurze Zeit.",
          null
        ],
        "remember": "Ich teile meinen Standort nur so lange, wie es nötig ist."
      },
      "standard": {
        "question": "Du gehst mit drei Freunden auf ein Konzert, ihr wollt euch vor dem Eingang treffen. In eurer Chatgruppe sind aber 30 Leute. Wie teilst du deinen Standort?",
        "hinweis": "Überlege: Wer braucht deinen Standort – und wie lange?",
        "answers": [
          "Mit allen 30 Leuten, dauerhaft.",
          "Nur mit den drei Freunden, dauerhaft.",
          "Nur mit den drei Freunden, bis zum Treffen."
        ],
        "feedbackCorrect": "Genau. Nur die drei brauchen deinen Standort, und nur bis zum Treffen. Du darfst auch Nein sagen – dann schreibt ihr euch, wo ihr seid.",
        "feedbackWrong": [
          "Dann sehen 30 Leute dauerhaft deinen Standort, obwohl ihn nur drei brauchen – und das nur kurz.",
          "Das sind die richtigen Leute, aber dauerhaft ist mehr als nötig. Für das Treffen reicht eine kurze Zeit.",
          null
        ],
        "remember": "Meinen Standort teile ich nur so lange wie nötig."
      }
    },

    "Du bekommst eine SMS: Hier ist deine Bank. Bitte bestätige dein Geburts-Datum. Tippe dafür auf den Link. Was machst du?": {
      "einfach": {
        "question": "Du bekommst eine SMS: Hier ist deine Bank. Bitte bestätige dein Geburtsdatum und tippe dafür auf den Link. Was machst du?",
        "hinweis": "Überlege: Weißt du sicher, wer dir schreibt?",
        "answers": [
          "Ich tippe auf den Link, weil ich meine Bank ja kenne.",
          "Ich schreibe mein Geburtsdatum zurück, weil es ja nicht geheim ist.",
          "Ich gebe nichts ein und rufe die Nummer auf meiner Bankkarte an."
        ],
        "feedbackCorrect": "Genau. Du weißt nicht, ob wirklich deine Bank schreibt. Das prüfst du selbst, und zwar mit einer Nummer, die du kennst.",
        "feedbackWrong": [
          "Jeder kann schreiben: Hier ist deine Bank. Der Link kann zu einer falschen Seite führen. Ruf lieber selbst bei deiner Bank an.",
          "Auch das Geburtsdatum nutzen Betrüger. Du weißt nicht, wer dir wirklich schreibt. Prüfe das zuerst selbst.",
          null
        ],
        "remember": "Ich prüfe zuerst, wer meine Daten will."
      },
      "standard": {
        "question": "Du bekommst eine SMS: Hier ist deine Bank, bitte bestätige dein Geburtsdatum über den Link. Was tust du?",
        "hinweis": "Überlege: Weißt du sicher, wer schreibt?",
        "answers": [
          "Ich tippe auf den Link – meine Bank kenne ich ja.",
          "Ich antworte mit meinem Geburtsdatum – das ist ja nicht geheim.",
          "Ich gebe nichts ein und rufe die Nummer auf meiner Bankkarte an."
        ],
        "feedbackCorrect": "Genau. Ob wirklich deine Bank schreibt, weißt du nicht. Das prüfst du selbst – über eine Nummer, die du kennst.",
        "feedbackWrong": [
          "Jeder kann behaupten, die Bank zu sein, und der Link kann auf eine gefälschte Seite führen. Ruf lieber selbst an.",
          "Auch das Geburtsdatum nutzen Betrüger. Du weißt nicht, wer wirklich schreibt – prüfe das zuerst selbst.",
          null
        ],
        "remember": "Ich prüfe zuerst, wer meine Daten will."
      }
    },

    "Du meldest dich für einen Koch-Kurs an. Die Kurs-Leitung will deine Telefon-Nummer. Fällt der Kurs aus? Dann ruft sie dich an. Was machst du?": {
      "einfach": {
        "question": "Du meldest dich für einen Kochkurs an. Die Kursleitung will deine Telefonnummer, damit sie dich anrufen kann, wenn der Kurs ausfällt. Was machst du?",
        "hinweis": "Überlege: Wofür will die Kursleitung die Nummer haben?",
        "answers": [
          "Ich gebe keine Nummer, weil Telefonnummern privat sind.",
          "Ich gebe meine Telefonnummer, damit ich Bescheid bekomme.",
          "Ich gebe meine Nummer und meine Adresse, damit sie mich sicher erreichen."
        ],
        "feedbackCorrect": "Genau. Die Kursleitung braucht die Nummer für einen klaren Zweck, und du kennst sie. Dann ist das in Ordnung.",
        "feedbackWrong": [
          "Private Daten bedeutet nicht, dass du immer Nein sagst. Hier gibt es einen klaren Zweck: Ohne Nummer bekommst du keinen Bescheid.",
          null,
          "Die Adresse braucht die Kursleitung dafür nicht. Gib nur das an, was für den Zweck nötig ist."
        ],
        "remember": "Ich gebe nur die Daten weiter, die nötig sind."
      },
      "standard": {
        "question": "Du meldest dich für einen Kochkurs an. Die Kursleitung möchte deine Telefonnummer, um dich bei einem Ausfall anzurufen. Was tust du?",
        "hinweis": "Überlege: Wofür will die Kursleitung die Nummer?",
        "answers": [
          "Ich gebe keine Nummer an – Telefonnummern sind privat.",
          "Ich gebe meine Telefonnummer an, damit ich Bescheid bekomme.",
          "Ich gebe Nummer und Adresse an, damit man mich sicher erreicht."
        ],
        "feedbackCorrect": "Genau. Die Kursleitung braucht die Nummer für einen klaren Zweck, und du kennst sie. Dann ist das in Ordnung.",
        "feedbackWrong": [
          "Privat heißt nicht automatisch Nein. Hier gibt es einen klaren Zweck – ohne Nummer bekommst du keinen Bescheid.",
          null,
          "Die Adresse braucht die Kursleitung dafür nicht. Gib nur an, was für den Zweck nötig ist."
        ],
        "remember": "Ich gebe nur die Daten weiter, die für den Zweck nötig sind."
      }
    },

    "Eine Internet-Seite will deine Adresse. Erst dann zeigt sie dir ein Video. Was machst du?": {
      "einfach": {
        "question": "Eine Internetseite will deine Adresse haben. Erst dann zeigt sie dir ein Video. Was machst du?",
        "hinweis": "Frag dich: Braucht die Seite deine Adresse wirklich für ein Video?",
        "answers": [
          "Ich gebe meine Adresse ein.",
          "Ich gebe meine E-Mail-Adresse ein.",
          "Ich gebe die Adresse nicht ein."
        ],
        "feedbackCorrect": "Genau. Für ein Video braucht niemand deine Adresse. Das passt nicht zum Zweck.",
        "feedbackWrong": [
          "Für ein Video braucht niemand deine Adresse, das passt nicht zum Zweck.",
          "Auch deine E-Mail-Adresse braucht die Seite für ein Video nicht. Das passt nicht zum Zweck.",
          null
        ],
        "remember": "Ich gebe nur die Daten weiter, die nötig sind."
      },
      "standard": {
        "question": "Eine Website zeigt dir ein Video erst, wenn du deine Adresse angibst. Was tust du?",
        "hinweis": "Frag dich: Braucht die Seite deine Adresse wirklich für ein Video?",
        "answers": [
          "Ich gebe meine Adresse ein.",
          "Ich gebe meine E-Mail-Adresse ein.",
          "Ich gebe die Adresse nicht ein."
        ],
        "feedbackCorrect": "Genau. Für ein Video braucht niemand deine Adresse – das passt nicht zum Zweck.",
        "feedbackWrong": [
          "Für ein Video braucht niemand deine Adresse – das passt nicht zum Zweck.",
          "Auch deine E-Mail-Adresse braucht die Seite für ein Video nicht. Das passt nicht zum Zweck.",
          null
        ],
        "remember": "Ich gebe nur die Daten weiter, die für den Zweck nötig sind."
      }
    },

    "Eine kostenlose App fragt beim Anmelden nach deiner Telefon-Nummer. Was machst du?": {
      "einfach": {
        "question": "Eine kostenlose App fragt beim Anmelden nach deiner Telefonnummer. Was machst du?",
        "hinweis": "Frag dich: Wofür braucht eine App deine Telefonnummer?",
        "answers": [
          "Ich prüfe, ob die App das braucht. Wenn nicht, lasse ich das Feld leer.",
          "Ich gebe meine Telefonnummer ein, sonst funktioniert die App nicht.",
          "Ich gebe die Nummer von einer anderen Person ein, damit meine geheim bleibt."
        ],
        "feedbackCorrect": "Genau. Du prüfst zuerst, wofür die App die Nummer braucht. Wenn sie nicht nötig ist, lässt du das Feld leer.",
        "feedbackWrong": [
          null,
          "Prüfe zuerst, ob die App deine Nummer wirklich braucht. Sonst kann die Nummer an Fremde gehen.",
          "Die Telefonnummer von anderen Menschen gehört dir nicht."
        ],
        "remember": "Ich gebe nur die Daten weiter, die nötig sind."
      },
      "standard": {
        "question": "Eine kostenlose App fragt bei der Anmeldung nach deiner Telefonnummer. Was tust du?",
        "hinweis": "Frag dich: Wofür braucht eine App deine Telefonnummer?",
        "answers": [
          "Ich prüfe, ob die App sie braucht – wenn nicht, lasse ich das Feld leer.",
          "Ich gebe meine Telefonnummer ein – sonst funktioniert die App nicht.",
          "Ich gebe die Nummer einer anderen Person ein – so bleibt meine geheim."
        ],
        "feedbackCorrect": "Genau. Du prüfst zuerst, wofür die App die Nummer braucht. Ist sie nicht nötig, lässt du das Feld leer.",
        "feedbackWrong": [
          null,
          "Prüfe zuerst, ob die App deine Nummer wirklich braucht – sonst kann sie an Fremde gelangen.",
          "Die Nummer anderer Menschen gehört dir nicht."
        ],
        "remember": "Ich gebe nur die Daten weiter, die für den Zweck nötig sind."
      }
    },

    "Du lädst eine Wecker-App. Sie fragt: Darf ich deine Kontakte sehen? Was machst du?": {
      "einfach": {
        "question": "Du lädst eine Wecker-App herunter. Sie fragt: Darf ich deine Kontakte sehen? Was machst du?",
        "hinweis": "Überlege: Was macht ein Wecker, und braucht er dafür Kontakte?",
        "answers": [
          "Ich erlaube es, weil der Wecker sonst vielleicht nicht klingelt.",
          "Ich erlaube es, weil ich das später ja wieder ändern kann.",
          "Ich erlaube es nicht, weil der Wecker auch ohne Kontakte klingelt."
        ],
        "feedbackCorrect": "Genau. Für einen Wecker braucht die App keine Kontakte. Das passt nicht zum Zweck.",
        "feedbackWrong": [
          "Ein Wecker braucht keine Kontakte, um zu klingeln. Das passt nicht zum Zweck.",
          "Du kannst die Erlaubnis zwar später ändern. Aber dann hat die App deine Kontakte schon gesehen. Deshalb prüfst du vorher.",
          null
        ],
        "remember": "Ich erlaube einer App nur das, was sie braucht."
      },
      "standard": {
        "question": "Du installierst eine Wecker-App. Sie fragt: Darf ich auf deine Kontakte zugreifen? Was tust du?",
        "hinweis": "Überlege: Was macht ein Wecker – und braucht er dafür Kontakte?",
        "answers": [
          "Ich erlaube es – sonst klingelt der Wecker vielleicht nicht.",
          "Ich erlaube es – ich kann das ja später wieder ändern.",
          "Ich erlaube es nicht – der Wecker klingelt auch ohne Kontakte."
        ],
        "feedbackCorrect": "Genau. Für einen Wecker braucht die App keine Kontakte – das passt nicht zum Zweck.",
        "feedbackWrong": [
          "Zum Klingeln braucht ein Wecker keine Kontakte. Das passt nicht zum Zweck.",
          "Die Berechtigung kannst du später ändern – aber dann hat die App deine Kontakte schon gesehen. Deshalb prüfst du vorher.",
          null
        ],
        "remember": "Ich erlaube einer App nur, was sie für ihre Funktion braucht."
      }
    },

    "Dein Handy hat eine Funktion: Handy finden. Ist dein Handy weg? Dann zeigt sie dir den Ort von deinem Handy. Die Funktion fragt nach deinem Standort. Was passt?": {
      "einfach": {
        "question": "Dein Handy hat eine Funktion: Handy finden. Wenn dein Handy weg ist, zeigt dir die Funktion, wo es gerade ist. Dafür fragt sie nach deinem Standort. Was passt?",
        "hinweis": "Überlege: Wann brauchst du die Funktion, und benutzt du dein Handy in diesem Moment?",
        "answers": [
          "Nur erlauben, während ich das Handy benutze.",
          "Gar nicht erlauben.",
          "Immer erlauben."
        ],
        "feedbackCorrect": "Genau. Wenn dein Handy weg ist, benutzt du es nicht. Die Funktion muss es aber trotzdem finden. Deshalb braucht sie den Standort immer.",
        "feedbackWrong": [
          "Wenn dein Handy weg ist, benutzt du es nicht. Dann findet die Funktion es auch nicht. Hier braucht sie den Standort immer.",
          "Das darfst du so wählen. Aber dann hilft dir die Funktion nicht: Wenn dein Handy weg ist, findest du es nicht.",
          null
        ],
        "remember": "Ich erlaube einer App nur das, was sie braucht."
      },
      "standard": {
        "question": "Dein Handy hat die Funktion Handy finden: Ist es weg, zeigt sie dir, wo es sich befindet. Dafür fragt sie nach deinem Standort. Was passt?",
        "hinweis": "Überlege: Wann brauchst du die Funktion – und nutzt du das Handy in diesem Moment?",
        "answers": [
          "Nur während der Nutzung erlauben.",
          "Nicht erlauben.",
          "Immer erlauben."
        ],
        "feedbackCorrect": "Genau. Ist dein Handy weg, nutzt du es nicht – die Funktion muss es trotzdem finden. Dafür braucht sie den Standort immer.",
        "feedbackWrong": [
          "Ist dein Handy weg, nutzt du es nicht – dann findet die Funktion es auch nicht. Hier braucht sie den Standort immer.",
          "Das darfst du so wählen. Dann hilft dir die Funktion aber nicht: Ist dein Handy weg, findest du es nicht.",
          null
        ],
        "remember": "Ich erlaube einer App nur, was sie für ihre Funktion braucht."
      }
    },

    "Auf dem Foto sieht man einen Brief mit Adresse. Was ist besser?": {
      "einfach": {
        "question": "Auf einem Foto, das du verschicken willst, sieht man einen Brief mit deiner Adresse. Was ist besser?",
        "hinweis": "Überlege: Welcher Teil vom Foto ist privat?",
        "answers": [
          "Ich schicke ein Foto ohne den Brief.",
          "Ich schicke das Foto so, wie es ist.",
          "Ich schicke überhaupt keine Fotos mehr."
        ],
        "feedbackCorrect": "Genau. Nur der Brief ist privat. Du schneidest ihn weg oder machst ein neues Foto ohne den Brief.",
        "feedbackWrong": [
          null,
          "Dann können andere deine Adresse lesen, und die muss niemand sehen.",
          "Das ist nicht nötig, denn nur der Brief ist das Problem. Ohne den Brief kannst du das Foto verschicken."
        ],
        "remember": "Ich prüfe Fotos, bevor ich sie verschicke."
      },
      "standard": {
        "question": "Auf einem Foto, das du verschicken willst, ist ein Brief mit deiner Adresse zu sehen. Was ist besser?",
        "hinweis": "Überlege: Welcher Teil des Fotos ist privat?",
        "answers": [
          "Ich schicke ein Foto ohne den Brief.",
          "Ich schicke das Foto so, wie es ist.",
          "Ich verschicke gar keine Fotos mehr."
        ],
        "feedbackCorrect": "Genau. Privat ist nur der Brief – du schneidest ihn weg oder machst ein neues Foto ohne ihn.",
        "feedbackWrong": [
          null,
          "Dann können andere deine Adresse lesen. Die muss niemand sehen.",
          "Das ist nicht nötig – nur der Brief ist das Problem. Ohne ihn kannst du das Foto verschicken."
        ],
        "remember": "Fotos prüfe ich, bevor ich sie verschicke."
      }
    },

    "Eine App fragt nach deiner Adresse. Du weißt nicht warum. Was ist besser?": {
      "einfach": {
        "question": "Eine App fragt nach deiner Adresse, und du weißt nicht, warum. Was ist besser?",
        "hinweis": "Überlege: Weißt du, wofür die App deine Adresse haben will?",
        "answers": [
          "Ich trage die Adresse ein, die App wird sie schon brauchen.",
          "Ich trage noch nichts ein. Ich prüfe erst, wofür, oder ich hole mir Unterstützung.",
          "Ich trage eine falsche Adresse ein, das merkt die App nicht."
        ],
        "feedbackCorrect": "Genau. Wenn du unsicher bist, gibst du noch nichts frei. Du prüfst erst oder holst dir Unterstützung.",
        "feedbackWrong": [
          "Du weißt nicht, wofür die App die Adresse will. Dann gib noch nichts ein und prüfe erst.",
          null,
          "Eine falsche Adresse ist keine gute Lösung. Vielleicht braucht die App sie ja wirklich. Prüfe erst, wofür."
        ],
        "remember": "Wenn ich unsicher bin, gebe ich noch nichts frei."
      },
      "standard": {
        "question": "Eine App fragt nach deiner Adresse, ohne dass du weißt, warum. Was ist besser?",
        "hinweis": "Überlege: Weißt du, wofür die App deine Adresse will?",
        "answers": [
          "Ich trage die Adresse ein – die App wird sie schon brauchen.",
          "Ich trage noch nichts ein und prüfe erst, wofür – oder ich hole mir Unterstützung.",
          "Ich trage eine falsche Adresse ein – das merkt die App nicht."
        ],
        "feedbackCorrect": "Genau. Bist du unsicher, gibst du noch nichts frei: erst prüfen oder Unterstützung holen.",
        "feedbackWrong": [
          "Du weißt nicht, wofür die App die Adresse will – dann gib noch nichts ein und prüfe erst.",
          null,
          "Eine falsche Adresse ist keine gute Lösung. Vielleicht braucht die App sie ja tatsächlich – prüfe erst, wofür."
        ],
        "remember": "Bin ich unsicher, gebe ich noch nichts frei."
      }
    },

    "Vor einem Monat hast du einer App deinen Standort erlaubt. Und du hast ein Foto in eine Gruppe geschickt. Was kannst du jetzt noch ändern?": {
      "einfach": {
        "question": "Vor einem Monat hast du einer App erlaubt, deinen Standort zu sehen. Außerdem hast du ein Foto in eine Gruppe geschickt. Was kannst du jetzt noch ändern?",
        "hinweis": "Überlege: Was liegt noch bei dir, und was haben andere schon?",
        "answers": [
          "Die Erlaubnis für den Standort. Das Foto haben andere vielleicht schon gespeichert.",
          "Beides, denn ich lösche das Foto einfach in der Gruppe. Dann ist es weg.",
          "Gar nichts mehr, denn eine Erlaubnis gilt für immer."
        ],
        "feedbackCorrect": "Genau. Eine Erlaubnis kannst du oft ändern. Ein verschicktes Foto kannst du aber oft nicht zurückholen. Deshalb prüfst du vorher.",
        "feedbackWrong": [
          null,
          "Die Erlaubnis kannst du in den Einstellungen ändern. Das Foto aber vielleicht nicht mehr, weil andere es schon gespeichert haben können.",
          "Die Erlaubnis für den Standort kannst du in den Einstellungen noch ändern. Das lohnt sich."
        ],
        "remember": "Ich prüfe Fotos, bevor ich sie verschicke."
      },
      "standard": {
        "question": "Vor einem Monat hast du einer App den Zugriff auf deinen Standort erlaubt und ein Foto in eine Gruppe geschickt. Was kannst du jetzt noch ändern?",
        "hinweis": "Überlege: Was liegt noch bei dir – und was haben andere schon?",
        "answers": [
          "Die Standort-Berechtigung. Das Foto haben andere vielleicht schon gespeichert.",
          "Beides – ich lösche das Foto einfach in der Gruppe, dann ist es weg.",
          "Gar nichts – eine Berechtigung gilt für immer."
        ],
        "feedbackCorrect": "Genau. Eine Berechtigung lässt sich oft ändern, ein verschicktes Foto oft nicht zurückholen. Deshalb prüfst du vorher.",
        "feedbackWrong": [
          null,
          "Die Berechtigung kannst du in den Einstellungen ändern, das Foto aber vielleicht nicht mehr – andere können es schon gespeichert haben.",
          "Die Standort-Berechtigung kannst du in den Einstellungen noch ändern. Das lohnt sich."
        ],
        "remember": "Fotos prüfe ich, bevor ich sie verschicke."
      }
    },

    "Was ist eine gute Regel für deine Daten?": {
      "einfach": {
        "question": "Welche Regel ist gut für deine Daten?",
        "hinweis": "Denk an deinen Plan aus diesem Thema. Womit fängt er an?",
        "answers": [
          "Daten immer sofort eingeben.",
          "Nie irgendwelche Daten eingeben.",
          "Erst prüfen, dann entscheiden."
        ],
        "feedbackCorrect": "Genau. Zuerst prüfst du: Wer, was und wofür? Dann entscheidest du. Manchmal gibst du Daten, manchmal nicht.",
        "feedbackWrong": [
          "Sofort eingeben ist zu schnell. Prüfe erst, wer die Daten will und wofür.",
          "Du darfst Nein sagen. Manchmal braucht jemand deine Daten aber wirklich. Wichtig ist, dass du erst prüfst und dann selbst entscheidest.",
          null
        ],
        "remember": "Erst prüfen, dann entscheide ich."
      },
      "standard": {
        "question": "Was ist eine gute Regel für deine Daten?",
        "hinweis": "Denk an deinen Plan aus diesem Kapitel. Womit fängt er an?",
        "answers": [
          "Immer sofort eingeben.",
          "Nie etwas eingeben.",
          "Erst prüfen, dann entscheiden."
        ],
        "feedbackCorrect": "Genau. Zuerst prüfst du: Wer, was, wofür? Dann entscheidest du – manchmal gibst du Daten, manchmal nicht.",
        "feedbackWrong": [
          "Sofort eingeben ist zu schnell. Prüfe erst, wer die Daten will und wofür.",
          "Du darfst Nein sagen – manchmal braucht jemand deine Daten aber tatsächlich. Wichtig ist: erst prüfen, dann selbst entscheiden.",
          null
        ],
        "remember": "Erst prüfen, dann entscheiden."
      }
    },

    "Was gibst du für die Kunden-Karte an?": {
      "einfach": {
        "question": "Was gibst du für die Kundenkarte an?",
        "situation": "Du kaufst oft im gleichen Supermarkt ein. Mit der Kundenkarte wird manches billiger. Du willst die Karte haben, und du willst gern Angebote für deinen Lieblingskaffee bekommen.",
        "hinweis": "Überlege: Was willst du? Welche Angaben passen zur Karte und zu deinen Angeboten, und welche Felder sind freiwillig? Weißt du bei jeder Angabe, wofür sie ist?",
        "formular": {
          "titel": "Deine Kundenkarte"
        },
        "felder": [
          {
            "name": "Name",
            "wofuer": "Der Name steht auf deiner Karte.",
            "rueckmeldung": {
              "angegeben": "Pflicht heißt nur, dass es ohne Namen nicht weitergeht. Hier passt der Name aber auch zum Zweck, denn er steht auf deiner Karte.",
              "leer": "Pflicht heißt, dass es ohne Namen nicht weitergeht. Der Name passt hier zum Zweck. Wenn du die Karte willst, gibst du ihn an. Sonst nutzt du die Karte nicht."
            }
          },
          {
            "name": "E-Mail",
            "wofuer": "Über die E-Mail bekommst du deine Karte.",
            "rueckmeldung": {
              "angegeben": "Pflicht heißt nur, dass es ohne E-Mail nicht weitergeht. Hier passt die E-Mail aber auch zum Zweck, denn über sie bekommst du deine Karte.",
              "leer": "Pflicht heißt, dass es ohne E-Mail nicht weitergeht. Die E-Mail passt hier zum Zweck. Wenn du die Karte willst, gibst du sie an. Sonst nutzt du die Karte nicht."
            }
          },
          {
            "name": "Geburtsdatum",
            "wofuer": null,
            "rueckmeldung": {
              "angegeben": "Pflicht heißt nur, dass es ohne Geburtsdatum nicht weitergeht. Es heißt nicht, dass du den Zweck kennst. Die Seite schreibt nicht, wofür sie es haben will. Vielleicht gibt es einen guten Grund, aber der Zweck ist für dich nicht klar. Dann gib es noch nicht ein. Prüfe erst, oder nutze die Karte nicht.",
              "leer": "Pflicht heißt nur, dass es ohne Geburtsdatum nicht weitergeht. Es heißt nicht, dass du den Zweck kennst. Die Seite schreibt nicht, wofür sie es haben will. Vielleicht gibt es einen guten Grund, aber der Zweck ist für dich nicht klar. Deshalb prüfst du erst, oder du nutzt die Karte nicht."
            }
          },
          {
            "name": "Wie viele Kinder hast du?",
            "wofuer": null,
            "rueckmeldung": {
              "angegeben": "Das Feld ist freiwillig. Die Karte bekommst du also auch ohne diese Angabe. Außerdem schreibt die Seite nicht, wofür sie das wissen will. Für dein Ziel musst du das nicht angeben.",
              "leer": "Das Feld ist freiwillig. Die Karte bekommst du also auch ohne diese Angabe. Außerdem schreibt die Seite nicht, wofür sie das wissen will. Für dein Ziel musst du das nicht angeben."
            }
          },
          {
            "name": "Einkäufe merken",
            "zustand": {
              "an": "Ja",
              "aus": "Nein"
            },
            "wofuer": "Dürfen wir uns deine Einkäufe merken? Dann bekommst du passende Angebote.",
            "rueckmeldung": {
              "angegeben": "Das Feld ist freiwillig. Du willst Angebote für deinen Kaffee, und dafür passt das. Du kannst es später wieder ändern.",
              "leer": "Das Feld ist freiwillig. Du kannst Nein sagen, dann merkt sich der Supermarkt deine Einkäufe nicht. Passende Angebote für deinen Kaffee bekommst du dann vielleicht nicht. Du entscheidest."
            }
          }
        ],
        "ausweg": {
          "nichtNutzen": "Ich bestelle die Karte nicht."
        },
        "auswegRueckmeldung": {
          "nichtNutzen": "Das ist deine Entscheidung, und sie ist in Ordnung. Beim Geburtsdatum ist der Zweck nicht klar, deshalb gibst du es nicht ein. Du kaufst dann ohne Karte ein.",
          "erstPruefen": "Das ist in Ordnung. Beim Geburtsdatum ist der Zweck nicht klar, deshalb gibst du es noch nicht ein. Du prüfst erst, zum Beispiel, indem du im Supermarkt nachfragst oder dir Unterstützung holst. Danach entscheidest du."
        },
        "remember": "Ich gebe nur die Daten weiter, die nötig sind."
      },
      "standard": {
        "question": "Welche Angaben machst du für die Kundenkarte?",
        "situation": "Du kaufst oft im selben Supermarkt ein, und mit der Kundenkarte wird manches günstiger. Du möchtest die Karte – und gern auch Angebote für deinen Lieblingskaffee.",
        "hinweis": "Überlege: Was willst du? Welche Angaben passen zur Karte und zu deinen Angeboten, welche Felder sind freiwillig – und kennst du bei jeder Angabe den Zweck?",
        "formular": {
          "titel": "Deine Kundenkarte"
        },
        "felder": [
          {
            "name": "Name",
            "wofuer": "Er steht auf deiner Karte.",
            "rueckmeldung": {
              "angegeben": "Pflicht heißt nur: Ohne Namen geht es nicht weiter. Hier passt er zugleich zum Zweck – er steht auf deiner Karte.",
              "leer": "Pflicht heißt: Ohne Namen geht es nicht weiter. Der Name passt hier zum Zweck. Willst du die Karte, gibst du ihn an – sonst nutzt du die Karte nicht."
            }
          },
          {
            "name": "E-Mail",
            "wofuer": "Über die E-Mail erhältst du deine Karte.",
            "rueckmeldung": {
              "angegeben": "Pflicht heißt nur: Ohne E-Mail geht es nicht weiter. Hier passt sie zugleich zum Zweck – darüber erhältst du deine Karte.",
              "leer": "Pflicht heißt: Ohne E-Mail geht es nicht weiter. Die E-Mail passt hier zum Zweck. Willst du die Karte, gibst du sie an – sonst nutzt du die Karte nicht."
            }
          },
          {
            "name": "Geburtsdatum",
            "wofuer": null,
            "rueckmeldung": {
              "angegeben": "Pflicht heißt nur: Ohne Geburtsdatum geht es nicht weiter – nicht, dass du den Zweck kennst. Die Seite nennt keinen Zweck. Vielleicht gibt es einen guten Grund, aber für dich ist er nicht erkennbar. Gib es deshalb noch nicht ein: Prüfe erst – oder nutze die Karte nicht.",
              "leer": "Pflicht heißt nur: Ohne Geburtsdatum geht es nicht weiter – nicht, dass du den Zweck kennst. Die Seite nennt keinen Zweck. Vielleicht gibt es einen guten Grund, aber für dich ist er nicht erkennbar. Deshalb prüfst du erst – oder nutzt die Karte nicht."
            }
          },
          {
            "name": "Wie viele Kinder hast du?",
            "wofuer": null,
            "rueckmeldung": {
              "angegeben": "Das Feld ist freiwillig – die Karte bekommst du also auch ohne diese Angabe. Einen Zweck nennt die Seite auch nicht. Für dein Ziel musst du das nicht angeben.",
              "leer": "Das Feld ist freiwillig – die Karte bekommst du also auch ohne diese Angabe. Einen Zweck nennt die Seite auch nicht. Für dein Ziel musst du das nicht angeben."
            }
          },
          {
            "name": "Einkäufe merken",
            "zustand": {
              "an": "Ja",
              "aus": "Nein"
            },
            "wofuer": "Dürfen wir deine Einkäufe speichern? Dann bekommst du passende Angebote.",
            "rueckmeldung": {
              "angegeben": "Das Feld ist freiwillig. Du willst Angebote für deinen Kaffee – dafür passt das. Du kannst es später wieder ändern.",
              "leer": "Das Feld ist freiwillig. Du kannst Nein sagen – dann speichert der Supermarkt deine Einkäufe nicht, und passende Angebote für deinen Kaffee bekommst du vielleicht nicht. Du entscheidest."
            }
          }
        ],
        "ausweg": {
          "nichtNutzen": "Ich bestelle die Karte nicht."
        },
        "auswegRueckmeldung": {
          "nichtNutzen": "Das ist deine Entscheidung und in Ordnung. Beim Geburtsdatum ist der Zweck unklar, also gibst du es nicht ein. Du kaufst dann ohne Karte ein.",
          "erstPruefen": "Das ist in Ordnung. Beim Geburtsdatum ist der Zweck unklar, also gibst du es noch nicht ein. Du prüfst erst, etwa indem du im Supermarkt nachfragst oder dir Unterstützung holst. Danach entscheidest du."
        },
        "remember": "Ich gebe nur die Daten weiter, die für den Zweck nötig sind."
      }
    },

    "Was gibst du für den Termin an?": {
      "einfach": {
        "question": "Was gibst du für den Termin an?",
        "situation": "Du hast Zahnschmerzen und willst schnell einen Termin bei deiner Zahnärztin. Du kennst die Praxis. Auf deiner Terminkarte steht die Adresse der Seite für Termine, und du tippst sie selbst ein.",
        "hinweis": "Überlege: Was braucht die Praxis für deinen Termin? Welche Angaben sind freiwillig, und welche sind sehr privat?",
        "formular": {
          "titel": "Zahnarztpraxis Berg: Termin online"
        },
        "felder": [
          {
            "name": "Name",
            "wofuer": "Wir wollen wissen, wer kommt.",
            "rueckmeldung": {
              "angegeben": "Pflicht heißt nur, dass es ohne Namen nicht weitergeht. Hier passt der Name aber auch zum Zweck, denn die Praxis muss wissen, wer kommt.",
              "leer": "Pflicht heißt, dass es ohne Namen nicht weitergeht. Der Name passt hier zum Zweck. Wenn du nicht online buchen willst, rufst du in der Praxis an."
            }
          },
          {
            "name": "Geburtsdatum",
            "wofuer": "So finden wir deine Unterlagen, denn manche Menschen haben den gleichen Namen.",
            "rueckmeldung": {
              "angegeben": "Pflicht heißt nur, dass es ohne Geburtsdatum nicht weitergeht. Hier passt es aber auch zum Zweck, denn so findet die Praxis deine Unterlagen. Du kennst die Praxis und hast die Seite selbst geöffnet.",
              "leer": "Pflicht heißt, dass es ohne Geburtsdatum nicht weitergeht. Es passt hier zum Zweck. Wenn du es nicht online angeben willst, rufst du in der Praxis an."
            }
          },
          {
            "name": "Grund für den Termin",
            "wofuer": "Dann planen wir genug Zeit ein.",
            "rueckmeldung": {
              "angegeben": "Das Feld ist freiwillig. Das ist eine Angabe über deine Gesundheit. Sie hilft der Praxis beim Planen. Schreib nur kurz: Zahnschmerzen. Mehr muss nicht sein.",
              "leer": "Das Feld ist freiwillig. Das ist eine Angabe über deine Gesundheit. Du kannst Nein sagen, dann plant die Praxis vielleicht nicht genug Zeit ein. Du kannst den Grund auch in der Praxis sagen. Du entscheidest."
            }
          },
          {
            "name": "Wie hast du von uns erfahren?",
            "wofuer": "Für unsere Statistik.",
            "rueckmeldung": {
              "angegeben": "Das Feld ist freiwillig. Die Statistik ist nur für die Praxis. Für deinen Termin braucht sie das nicht.",
              "leer": "Das Feld ist freiwillig. Für deinen Termin braucht die Praxis das nicht."
            }
          }
        ],
        "ausweg": {
          "nichtNutzen": "Ich buche nicht online, sondern rufe an."
        },
        "auswegRueckmeldung": {
          "nichtNutzen": "Das ist deine Entscheidung, und sie ist in Ordnung. Auch am Telefon bekommst du einen Termin."
        },
        "remember": "Ich gebe nur die Daten weiter, die nötig sind."
      },
      "standard": {
        "question": "Welche Angaben machst du für den Termin?",
        "situation": "Du hast Zahnschmerzen und willst schnell einen Termin bei deiner Zahnärztin. Du kennst die Praxis und tippst die Adresse der Terminseite selbst ein – sie steht auf deiner Terminkarte.",
        "hinweis": "Überlege: Was braucht die Praxis für deinen Termin? Welche Angaben sind freiwillig – und welche sehr privat?",
        "formular": {
          "titel": "Zahnarztpraxis Berg: Online-Termin"
        },
        "felder": [
          {
            "name": "Name",
            "wofuer": "Wir möchten wissen, wer kommt.",
            "rueckmeldung": {
              "angegeben": "Pflicht heißt nur: Ohne Namen geht es nicht weiter. Hier passt er zugleich zum Zweck – die Praxis muss wissen, wer kommt.",
              "leer": "Pflicht heißt: Ohne Namen geht es nicht weiter. Der Name passt hier zum Zweck. Willst du nicht online buchen, ruf in der Praxis an."
            }
          },
          {
            "name": "Geburtsdatum",
            "wofuer": "Damit finden wir deine Unterlagen – manche Menschen haben den gleichen Namen.",
            "rueckmeldung": {
              "angegeben": "Pflicht heißt nur: Ohne Geburtsdatum geht es nicht weiter. Hier passt es zugleich zum Zweck – so findet die Praxis deine Unterlagen. Du kennst die Praxis und hast die Seite selbst aufgerufen.",
              "leer": "Pflicht heißt: Ohne Geburtsdatum geht es nicht weiter. Es passt hier zum Zweck. Willst du es nicht online angeben, ruf in der Praxis an."
            }
          },
          {
            "name": "Grund für den Termin",
            "wofuer": "Dann planen wir genug Zeit ein.",
            "rueckmeldung": {
              "angegeben": "Das Feld ist freiwillig. Es geht um eine Gesundheitsangabe, die der Praxis bei der Planung hilft. Schreib nur kurz Zahnschmerzen – mehr muss nicht sein.",
              "leer": "Das Feld ist freiwillig. Es geht um eine Gesundheitsangabe. Du kannst Nein sagen – dann plant die Praxis vielleicht nicht genug Zeit ein. Den Grund kannst du auch in der Praxis nennen. Du entscheidest."
            }
          },
          {
            "name": "Wie hast du von uns erfahren?",
            "wofuer": "Für unsere Statistik.",
            "rueckmeldung": {
              "angegeben": "Das Feld ist freiwillig. Die Statistik dient nur der Praxis – für deinen Termin braucht sie das nicht.",
              "leer": "Das Feld ist freiwillig. Für deinen Termin braucht die Praxis das nicht."
            }
          }
        ],
        "ausweg": {
          "nichtNutzen": "Ich buche nicht online, sondern rufe an."
        },
        "auswegRueckmeldung": {
          "nichtNutzen": "Das ist deine Entscheidung und in Ordnung. Auch telefonisch bekommst du einen Termin."
        },
        "remember": "Ich gebe nur die Daten weiter, die für den Zweck nötig sind."
      }
    }
  }
};

/* Themen-Felder je Stufe (Paket 5): Beschreibung, Eine Sache für heute,
   Lernziele (Rückfall), Hilfe-Fragen, Merk-Regeln. Die ersten 5 Merk-Regeln
   sind die Handlungssätze der Kette und bleiben wortgleich (§2). */
const THEMA_VERSIONS = {
  datenschutz: {
    "einfach": {
      "desc": "Deine privaten Daten schützen",
      "transfer": "Schau heute bei einer App nach, was sie sehen darf und ob sie das braucht. Du musst nichts ändern, du entscheidest selbst.",
      "learningGoals": [
        "Was private Daten sind",
        "Welche Daten wirklich nötig sind",
        "Wenn jemand nach deinen Daten fragt, entscheidest du selbst."
      ],
      "helpQuestions": [
        "Wer bekommt meine Daten, und wer kann sie sehen?",
        "Was genau soll ich angeben?",
        "Wofür ist das, und ist das nötig?",
        "Brauche ich Unterstützung?"
      ],
      "memoryRules": [
        "Stopp. Ich prüfe zuerst.",
        "Wer bekommt es? Wer kann es sehen?",
        "Was genau soll ich geben?",
        "Wofür? Wie viel davon ist nötig?",
        "Ich entscheide.",
        "Wenn du unsicher bist, gibst du noch nichts frei. Du prüfst erst oder holst dir Unterstützung."
      ]
    },
    "standard": {
      "desc": "Persönliche Daten schützen",
      "transfer": "Sieh heute bei einer App nach, worauf sie zugreifen darf und ob sie das braucht. Ändern musst du nichts – du entscheidest selbst.",
      "learningGoals": [
        "Was persönliche Daten sind",
        "Welche Daten tatsächlich nötig sind",
        "Fragt jemand nach deinen Daten, entscheidest du selbst."
      ],
      "helpQuestions": [
        "Wer bekommt meine Daten – und wer kann sie sehen?",
        "Welche Daten genau soll ich angeben?",
        "Wofür werden sie gebraucht, und ist das nötig?",
        "Brauche ich Unterstützung?"
      ],
      "memoryRules": [
        "Stopp. Ich prüfe zuerst.",
        "Wer bekommt es? Wer kann es sehen?",
        "Was genau soll ich geben?",
        "Wofür? Wie viel davon ist nötig?",
        "Ich entscheide.",
        "Bist du unsicher, gib noch nichts frei – prüfe erst oder hol dir Unterstützung."
      ]
    }
  }
};

/* Aufgaben-Fassungen eines Themas anhängen – für ALLE Aufgaben, die gerade im
   Thema hängen. Läuft zweimal: hier für topics.js und in app.js noch einmal,
   nachdem die nachgelieferten Übungen (uebungen-de.js) eingehängt sind
   (Paket T1, 29.09.2026 – vorher bekamen diese 57 Übungen nie Fassungen).
   Gesucht wird zuerst unter der festen Aufgaben-ID (`id`, siehe
   aufgabenIdsVergeben in app.js), dann – wie bisher bei Datenschutz – unter
   der Frage in Leichter Sprache. Bereits verknüpfte Aufgaben bleiben, wie
   sie sind. `schluessel` hält die Leicht-Frage fest: Er bleibt beim
   Sprachwechsel gleich (schwierige Aufgaben, Frage des Tages, zweiter
   Versuch). */
function aufgabenFassungenAnhaengen(topic) {
  const av = (typeof AUFGABEN_VERSIONS !== "undefined") && AUFGABEN_VERSIONS[topic.id];
  if (!av) return;
  const ns = topic.neueSituation || {};
  [].concat((topic.lessons || []).map((l) => l.practice), (topic.einfachLessons || []).map((l) => l.practice),
    topic.quizQuestions || [], ns.aufgaben || [], ns.fragen || [])
    .forEach((q) => {
      if (!q || !q.question || q.versions) return;
      const v = (q.id && av[q.id]) || av[q.question];
      if (v) { q.versions = v; q.schluessel = q.schluessel || q.question; }
    });
}

/* Fassungen mit den Lektionen in topics.js verknüpfen */
function applyContentVersions() {
  if (typeof topics === "undefined" || !Array.isArray(topics)) return;
  const anhaengen = (lessons, versions) => {
    if (!versions || !Array.isArray(lessons)) return;
    lessons.forEach((lesson) => {
      const lv = versions[lesson.title];
      if (lv) lesson.versions = Object.assign({}, lesson.versions, lv);
    });
  };
  topics.forEach((topic) => {
    anhaengen(topic.lessons, CONTENT_VERSIONS[topic.id]);
    /* Kurz-Weg: eigene Tabelle, siehe KURZ_VERSIONS oben. */
    anhaengen(topic.einfachLessons, KURZ_VERSIONS[topic.id]);
    /* Paket 5: Aufgaben und Themen-Felder je Stufe – nur wo Einträge stehen.
       Eingesetzt werden die Texte in app.js (sprachstufeAnwenden). */
    aufgabenFassungenAnhaengen(topic);
    const tv = (typeof THEMA_VERSIONS !== "undefined") && THEMA_VERSIONS[topic.id];
    if (tv && !topic.versions) topic.versions = tv;
  });
}

applyContentVersions();

/* ------------------------------------------------------------
   Einstiegsfrage (Self-Assessment) je Sprachstufe – optional.
   Fehlt eine Stufe, nutzt die App die Basis aus topics.js.
   ------------------------------------------------------------ */
const SELF_ASSESSMENT_VERSIONS = {
  datenschutz: {
    einfach: {
      question: "Wie gut kennst du dich mit dem Schutz deiner Daten aus?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie schätzt du dein Wissen zum Schutz deiner persönlichen Daten ein?",
      options: ["Eher gering", "Mittel", "Ziemlich gut"]
    }
  },
  whatsapp: {
    einfach: {
      question: "Wie gut kennst du dich mit den Sicherheits-Einstellungen bei WhatsApp aus?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie sicher fühlst du dich im Umgang mit deinen Daten und Einstellungen bei WhatsApp?",
      options: ["Eher unsicher", "Mittel", "Ziemlich sicher"]
    }
  },
  facebook: {
    einfach: {
      question: "Wie gut kennst du dich mit den Einstellungen bei Facebook aus?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie sicher fühlst du dich im Umgang mit deiner Privatsphäre auf Facebook?",
      options: ["Eher unsicher", "Mittel", "Ziemlich sicher"]
    }
  },
  instagram: {
    einfach: {
      question: "Wie gut kennst du dich mit den Einstellungen bei Instagram aus?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie sicher fühlst du dich im Umgang mit deiner Privatsphäre auf Instagram?",
      options: ["Eher unsicher", "Mittel", "Ziemlich sicher"]
    }
  },
  youtube: {
    einfach: {
      question: "Wie gut kennst du dich beim sicheren Schauen auf YouTube aus?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie sicher fühlst du dich im Umgang mit Videos und Einstellungen auf YouTube?",
      options: ["Eher unsicher", "Mittel", "Ziemlich sicher"]
    }
  },
  snapchat: {
    einfach: {
      question: "Wie gut kennst du dich mit Snapchat aus?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie schätzt du dein Wissen über die sichere Nutzung von Snapchat ein?",
      options: ["Eher gering", "Mittel", "Ziemlich gut"]
    }
  },
  tiktok: {
    einfach: {
      question: "Wie gut kennst du dich mit den Einstellungen bei TikTok aus?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie sicher fühlst du dich im Umgang mit deiner Privatsphäre bei TikTok?",
      options: ["Eher unsicher", "Mittel", "Ziemlich sicher"]
    }
  },
  hilfe: {
    einfach: {
      question: "Wie gut weißt du, was du tun kannst, wenn es im Internet Probleme gibt?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie gut weißt du, wo du Hilfe bekommst, wenn im Internet etwas schiefläuft?",
      options: ["Eher unsicher", "Mittel", "Ziemlich gut"]
    }
  },
  ki: {
    einfach: {
      question: "Wie gut kennst du dich mit Künstlicher Intelligenz und Chatbots aus?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie schätzt du dein Wissen über Künstliche Intelligenz und Chatbots ein?",
      options: ["Eher gering", "Mittel", "Ziemlich gut"]
    }
  },
  fakes: {
    einfach: {
      question: "Wie gut kannst du Fake-Nachrichten und falsche Bilder erkennen?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie sicher bist du darin, Falsch-Nachrichten und KI-Fälschungen zu erkennen?",
      options: ["Eher unsicher", "Mittel", "Ziemlich sicher"]
    }
  },
  betrug: {
    einfach: {
      question: "Wie gut kennst du die Maschen von Betrügern im Internet?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie sicher erkennst du Betrugs-Maschen und Abzocke im Internet?",
      options: ["Eher unsicher", "Mittel", "Ziemlich sicher"]
    }
  },
  einkaufen: {
    einfach: {
      question: "Wie gut kennst du dich beim sicheren Einkaufen und Bezahlen im Internet aus?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie sicher fühlst du dich beim Einkaufen und Bezahlen im Internet?",
      options: ["Eher unsicher", "Mittel", "Ziemlich sicher"]
    }
  }
};

function applySelfAssessmentVersions() {
  if (typeof topics === "undefined" || !Array.isArray(topics)) return;
  topics.forEach((topic) => {
    const v = SELF_ASSESSMENT_VERSIONS[topic.id];
    if (v) topic.saVersions = v;
  });
}

applySelfAssessmentVersions();

/* ------------------------------------------------------------
   Quiz vereinheitlichen: Heute haben ALLE 12 Themen ihre Fragen
   unter `quizQuestions` (kein Thema mehr unter `quiz`). Der Alias
   t.quiz = t.quizQuestions bleibt als Rückfall für künftige Themen.
   ------------------------------------------------------------ */
function normalizeQuizzes() {
  if (typeof topics === "undefined" || !Array.isArray(topics)) return;
  topics.forEach((t) => {
    if ((!Array.isArray(t.quiz) || !t.quiz.length) &&
        Array.isArray(t.quizQuestions) && t.quizQuestions.length) {
      t.quiz = t.quizQuestions;
    }
  });
}

normalizeQuizzes();
