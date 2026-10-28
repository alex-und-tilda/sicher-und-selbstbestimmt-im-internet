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
          }
        ]
      },
      "standard": {
        "text": [
          {
            "text": "Apps und Online-Formulare fragen oft nach deinen Daten – und manchmal willst du selbst etwas teilen, etwa ein Foto. Manche dieser Daten sind für den Zweck nötig, andere nicht. In diesem Kapitel lernst du einen Plan mit fünf Schritten: Damit prüfst du solche Situationen und entscheidest selbst."
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
          { text: "Du lernst, wie du Nachrichten sicher nutzt und Betrug erkennst." }
        ]
      },
      standard: {
        text: [
          { text: "Stell dir vor: Eine unbekannte Nummer schreibt dir bei WhatsApp und schickt einen Link. Wie reagierst du? In diesem Kapitel geht es um den sicheren Umgang mit WhatsApp. Du erfährst, wie du fremde Nachrichten einschätzt, Betrugsversuche erkennst und mit Codes, Gruppen und Fotos vorsichtig umgehst." }
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
          { text: "Prüfe in Ruhe, was die Nachricht von dir möchte." }
        ],
        bullets: ["Stopp machen.", "Nicht sofort antworten.", "Den Link nicht öffnen.", "Den Hilfe-Knopf nutzen."],
        warning: "Auch wenn eine Nachricht von einem bekannten Namen kommt, kann sie gefälscht sein. Ruf die Person lieber selbst über die Nummer an, die du schon kennst, bevor du reagierst.",
        success: "Wenn du deinem Plan folgst, lässt du dich nicht überrumpeln und bleibst sicher."
      },
      standard: {
        text: [
          { text: "Wenn dir etwas merkwürdig vorkommt oder dir Stress gemacht wird, halte kurz inne: Reagiere nicht sofort, öffne keine Links und prüfe in Ruhe, was die Nachricht von dir möchte. Bei Bedarf hilft dir auch der Hilfe-Knopf weiter." }
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
        bullets: ["Fremde Nummern prüfen.", "Kein Geld an fremde Nummern schicken.", "Unbekannte Links nicht öffnen.", "Codes nicht weitergeben.", "Fotos prüfen.", "Bei Stress Pause machen."]
      },
      standard: {
        text: [
          { text: "Die wichtigsten Punkte dieses Themas im Überblick: Prüfe Nachrichten von unbekannten Nummern und schicke niemals Geld an Fremde. Öffne unbekannte Links nicht und gib Bestätigungscodes nie weiter. Überlege bei Fotos, was du teilst, und mach bei Stress erst eine Pause." }
        ],
        bullets: []
      }
    }
  },

  facebook: {
    "Start": {
      einfach: { text: [
        { text: "Stell dir vor: Eine Person, die du nicht kennst, schickt dir bei Facebook eine Freundschafts-Anfrage. Was machst du? Darum geht es in diesem Thema." },
        { text: "Du lernst, wie du dein Profil schützt und dich vor unbekannten Kontakten in Acht nimmst." }
      ] },
      standard: { text: [
        { text: "Stell dir vor: Jemand, den du nicht kennst, schickt dir bei Facebook eine Freundschaftsanfrage. Nimmst du sie an? In diesem Kapitel geht es um den sicheren Umgang mit Facebook. Du erfährst, wie du dein Profil schützt, Beiträge und Freundschaftsanfragen einschätzt und respektvoll mit anderen umgehst." }
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
        { text: "Du lernst, worauf du beim Posten von Fotos und Videos achtest und wie du deinen Standort schützt." }
      ] },
      standard: { text: [
        { text: "Stell dir vor: Du möchtest ein Foto auf Instagram posten – deine Freundin ist mit drauf. Was tust du vorher? In diesem Kapitel geht es um den sicheren Umgang mit Instagram. Du erfährst, worauf du beim Posten von Fotos und Videos achtest, wie du deinen Standort schützt und fremde Nachrichten einschätzt." }
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
        { text: "Du lernst, wie du Videos und Werbung einschätzt und gut auf Pausen achtest." }
      ] },
      standard: { text: [{ text: "Stell dir vor: Ein YouTube-Video behauptet etwas sehr Überraschendes. Wie findest du heraus, ob es stimmt? In diesem Kapitel geht es um den sicheren Umgang mit YouTube. Du erfährst, wie du Videos und Werbung einschätzt, Pausen machst und mit beängstigenden oder gefälschten Inhalten umgehst." }] }
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
        { text: "Du lernst, warum Bilder nicht wirklich verschwinden und wie du Stress erkennst." }
      ] },
      standard: { text: [{ text: "Stell dir vor: Jemand drängt dich bei Snapchat, ein Foto von dir zu schicken – du willst das aber nicht. Was machst du? In diesem Kapitel geht es um den sicheren Umgang mit Snapchat. Du erfährst, warum Bilder trotz „Verschwinden“ gespeichert werden können, wie du deinen Standort schützt und Stress erkennst." }] }
    },
    "Bilder verschwinden nicht immer": {
      einfach: { examples: ["Du schickst ein lustiges Bild, das nach 10 Sekunden verschwindet. Aber dein Freund hat es vorher gespeichert.", "Ein Bild, das du nur einer Person geschickt hast, taucht später in einer Gruppe auf."], text: [
        { text: "Bei Snapchat ist ein Bild oft nur kurz zu sehen." },
        { text: "Trotzdem kann der andere das Bild speichern oder abfotografieren." },
        { text: "Sende deshalb nur Bilder, die auch dauerhaft sichtbar sein dürften." }
      ], warning: "Auch wenn ein Bild schnell verschwindet, kann es jemand vorher speichern. Sende deshalb nur Bilder, die andere sehen dürfen." },
      standard: { examples: ["Ein Bild verschwindet nach zehn Sekunden – der Empfänger hat es vorher per Bildschirmfoto gespeichert.", "Ein Bild, das nur für eine Person gedacht war, taucht Wochen später in einem Gruppenchat auf."], text: [{ text: "Bei Snapchat sind Bilder oft nur kurz sichtbar. Das bedeutet aber nicht, dass sie wirklich verschwunden sind: Der Empfänger kann sie speichern oder abfotografieren. Sende deshalb nur Bilder, die auch dauerhaft sichtbar sein dürften." }], warning: "Ein Snap verschwindet zwar nach kurzer Zeit, lässt sich aber vorher per Screenshot sichern. Verschicke deshalb nur Bilder, deren Weitergabe für dich in Ordnung ist." }
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
        { text: "Du lernst, wie du gefährliche Trends erkennst, deine Daten schützt und Pausen machst." }
      ] },
      standard: { text: [{ text: "Stell dir vor: Auf TikTok machen gerade viele einen gefährlichen Trend nach. Musst du mitmachen? In diesem Kapitel geht es um den sicheren Umgang mit TikTok. Du erfährst, wie du gefährliche Trends erkennst, deine Daten schützt, Pausen machst und gefälschte Videos einordnest." }] }
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
       Hilfe-Check). Paket H4 (03.10.2026): Einfache Sprache und Alltagssprache
       für alle Einheiten. Leicht in topics.js bleibt die Referenz; gleiche
       Aussage, gleiche Entscheidung, nur Sprache und Verdichtung anders. Der
       Notfall-Satz und die 3 Fragen des Hilfe-Checks sind in allen Stufen
       wortgleich. Die alten Fassungen liegen wörtlich in
       geparkt/hilfe-umbau-2026-09-30.js. „Das merke ich mir“: Text und Liste
       baut die App aus dem Weg (zusammenfassungFuerWeg). */
    "Start": {
      "einfach": {
        "text": [
          {
            "text": "Mit dem Handy oder im Internet klappt nicht immer alles."
          },
          {
            "text": "Manchmal findest du eine Einstellung nicht, und manchmal macht dir eine Nachricht Druck."
          },
          {
            "text": "Vieles kannst du selbst lösen. Bei manchen Problemen holst du dir Hilfe."
          },
          {
            "text": "In diesem Thema lernst du 3 Fragen, mit denen du deinen nächsten Schritt findest."
          }
        ]
      },
      "standard": {
        "text": [
          {
            "text": "Mit dem Handy oder im Internet läuft nicht immer alles rund."
          },
          {
            "text": "Mal findest du eine Einstellung nicht, mal setzt dich eine Nachricht unter Druck."
          },
          {
            "text": "Vieles kannst du selbst lösen, bei manchem holst du dir Hilfe."
          },
          {
            "text": "Du lernst 3 Fragen kennen, mit denen du deinen nächsten Schritt findest."
          }
        ]
      }
    },
    "Probleme sind verschieden": {
      "einfach": {
        "text": [
          {
            "text": "Probleme sind verschieden. Deshalb schaust du zuerst, was los ist."
          },
          {
            "text": "Manchmal klappt etwas nicht. Zum Beispiel findest du eine Einstellung nicht, oder dein Handy macht keinen Ton."
          },
          {
            "text": "Manchmal macht dir etwas Druck oder Angst. Zum Beispiel drängt dich jemand, oder jemand droht dir."
          },
          {
            "text": "Wenn jemand in Gefahr ist, ist das ein Notfall. Dann ruf sofort 110 oder 112."
          }
        ]
      },
      "standard": {
        "text": [
          {
            "text": "Probleme sind verschieden. Klär deshalb zuerst, was los ist."
          },
          {
            "text": "Etwas funktioniert nicht – du findest zum Beispiel eine Einstellung nicht, oder dein Handy bleibt stumm."
          },
          {
            "text": "Etwas macht dir Druck oder Angst – zum Beispiel drängt dich jemand oder droht dir."
          },
          {
            "text": "Ist jemand in Gefahr, ist das ein Notfall: Dann ruf sofort 110 oder 112."
          }
        ]
      }
    },
    "Druck oder Angst: erst stoppen": {
      "einfach": {
        "text": [
          {
            "text": "Manchmal macht dir jemand Druck. Er schreibt zum Beispiel: Mach das sofort. Oder: Erzähl es niemandem."
          },
          {
            "text": "Oder jemand will etwas Wichtiges von dir, zum Beispiel Geld, einen Code oder ein Foto."
          },
          {
            "text": "Vielleicht macht dir eine Nachricht Angst, oder du hast ein komisches Gefühl im Bauch."
          },
          {
            "text": "Das ist wichtig, denn deine Gefühle sagen dir etwas."
          },
          {
            "text": "Dann machst du erst Stopp: Du schickst nichts, du bezahlst nichts und du bestätigst nichts."
          },
          {
            "text": "Mehr über Tricks mit Geld und Codes lernst du im Thema Betrug."
          }
        ],
        "remember": "Meine Gefühle sind wichtig, und ich darf darüber sprechen."
      },
      "standard": {
        "text": [
          {
            "text": "Manchmal setzt dich jemand unter Druck, etwa mit: Mach das sofort. Oder: Erzähl es niemandem."
          },
          {
            "text": "Oder jemand will etwas Wichtiges von dir – Geld, einen Code oder ein Foto."
          },
          {
            "text": "Vielleicht macht dir eine Nachricht Angst, oder du hast ein ungutes Gefühl."
          },
          {
            "text": "Nimm das ernst: Deine Gefühle sagen dir etwas."
          },
          {
            "text": "Dann heißt es erst einmal Stopp: nichts schicken, nichts bezahlen, nichts bestätigen."
          },
          {
            "text": "Mehr zu Tricks mit Geld und Codes erfährst du im Thema Betrug."
          }
        ],
        "remember": "Meine Gefühle sind wichtig. Ich darf darüber sprechen."
      }
    },
    "Das kannst du selbst": {
      "einfach": {
        "text": [
          {
            "text": "Vieles kannst du selbst tun."
          },
          {
            "text": "Wenn etwas nicht klappt, probierst du es noch einmal oder siehst in den Einstellungen nach."
          },
          {
            "text": "Wenn dir ein Chat nicht guttut, kannst du ihn schließen. Du musst auch nicht antworten."
          },
          {
            "text": "Wenn dich eine Person immer wieder stört, kannst du sie blockieren. Danach kann sie dir nicht mehr schreiben."
          },
          {
            "text": "Wenn etwas gemein oder verboten ist, kannst du es melden. Die App prüft das dann."
          },
          {
            "text": "Bei WhatsApp, Instagram und TikTok geht das jeweils etwas anders. Das lernst du in diesen Themen."
          }
        ],
        "remember": "Vieles kann ich selbst lösen."
      },
      "standard": {
        "text": [
          {
            "text": "Vieles kannst du selbst erledigen."
          },
          {
            "text": "Etwas klappt nicht? Versuch es noch einmal oder sieh in den Einstellungen nach."
          },
          {
            "text": "Ein Chat tut dir nicht gut? Dann schließ ihn – antworten musst du nicht."
          },
          {
            "text": "Jemand stört dich immer wieder? Dann blockier die Person, danach kann sie dir nicht mehr schreiben."
          },
          {
            "text": "Etwas ist gemein oder verboten? Dann melde es, die App prüft das."
          },
          {
            "text": "Wie das in WhatsApp, Instagram oder TikTok genau geht, lernst du in diesen Themen."
          }
        ],
        "remember": "Vieles kann ich selbst lösen."
      }
    },
    "Welche Hilfe passt?": {
      "einfach": {
        "text": [
          {
            "text": "Es gibt verschiedene Arten von Hilfe, und du suchst dir die passende aus."
          },
          {
            "text": "Wenn du eine Frage zum Handy hast, fragst du eine Person, die sich mit Handys auskennt."
          },
          {
            "text": "Wenn dir etwas Druck oder Angst macht, sprichst du mit einer Person, der du vertraust."
          },
          {
            "text": "Es gibt auch Beratungsstellen, bei denen du anrufen oder schreiben kannst."
          },
          {
            "text": "Für Probleme mit der Bank, einem Shop oder einer App gibt es eigene Wege. Die lernst du in den anderen Themen."
          },
          {
            "text": "Jemand ist in Gefahr? Dann ruf sofort 110 oder 112."
          }
        ],
        "remember": "Ich hole mir die Hilfe, die passt."
      },
      "standard": {
        "text": [
          {
            "text": "Hilfe gibt es in verschiedenen Formen – such dir die passende aus."
          },
          {
            "text": "Bei einer Frage zum Handy hilft dir jemand, der sich mit Handys auskennt."
          },
          {
            "text": "Macht dir etwas Druck oder Angst, sprich mit einer Person, der du vertraust."
          },
          {
            "text": "Außerdem gibt es Beratungsstellen, die du anrufen oder anschreiben kannst."
          },
          {
            "text": "Für Probleme mit der Bank, einem Shop oder einer App gibt es eigene Wege – die lernst du in den anderen Themen kennen."
          },
          {
            "text": "Jemand ist in Gefahr? Dann ruf sofort 110 oder 112."
          }
        ],
        "remember": "Ich hole mir die passende Hilfe."
      }
    },
    "Unterstützung wirklich holen": {
      "einfach": {
        "text": [
          {
            "text": "Wenn du eine Person um Hilfe bittest, zeigst du ihr das Problem auf deinem Handy. Oder du erzählst kurz, was passiert ist."
          },
          {
            "text": "Sag auch, was du schon ausprobiert hast."
          },
          {
            "text": "Wenn die Person nicht helfen kann oder nicht da ist, zum Beispiel am Wochenende, fragst du eine andere Person."
          },
          {
            "text": "Hilfe holen ist keine Schwäche."
          },
          {
            "text": "Wenn du eine gemeine Nachricht zeigen willst, machst du vorher ein Bild vom Bildschirm."
          }
        ]
      },
      "standard": {
        "text": [
          {
            "text": "Wenn du jemanden um Hilfe bittest, zeig das Problem direkt auf deinem Handy oder erzähl kurz, was passiert ist."
          },
          {
            "text": "Sag auch, was du schon ausprobiert hast."
          },
          {
            "text": "Kann die Person nicht helfen oder ist sie nicht erreichbar, zum Beispiel am Wochenende, frag jemand anderen."
          },
          {
            "text": "Hilfe holen ist keine Schwäche."
          },
          {
            "text": "Willst du eine gemeine Nachricht zeigen, mach vorher einen Screenshot."
          }
        ]
      }
    },
    "Dein Hilfe-Check": {
      "einfach": {
        "text": [
          {
            "text": "Das ist dein Hilfe-Check mit seinen 3 Fragen:"
          }
        ],
        "bullets": [
          {
            "text": "Was ist los?",
            "pictogram": "pikto-search"
          },
          {
            "text": "Was kann ich selbst tun?",
            "pictogram": "pikto-done"
          },
          {
            "text": "Welche Hilfe passt?",
            "pictogram": "pikto-help"
          }
        ]
      },
      "standard": {
        "text": [
          {
            "text": "Dein Hilfe-Check im Überblick:"
          }
        ],
        "bullets": [
          "Was ist los?",
          "Was kann ich selbst tun?",
          "Welche Hilfe passt?"
        ]
      }
    },
    "Das merke ich mir": {
      "einfach": {
        "text": [
          {
            "text": "Zum Schluss findest du die wichtigsten Regeln aus diesem Thema noch einmal."
          }
        ],
        "bullets": []
      },
      "standard": {
        "text": [
          {
            "text": "Die wichtigsten Regeln dieses Themas im Überblick."
          }
        ],
        "bullets": []
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
        success: "Wenn du eine Meldung im Zweifel nicht teilst, schützt du dich. Außerdem verhinderst du, dass sich Falschmeldungen weiter verbreiten."
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
          { text: "Klebt ein Code als Aufkleber auf einem Automaten, scannst du ihn besser nicht. Zahle dann mit Münzen oder in deiner eigenen Park-App. Bei einem Brief prüfst du zuerst, wer ihn geschickt hat." }
        ],
        warning: "Ein falscher QR-Code kann auf eine Betrugs-Seite führen. Erst prüfen, dann scannen."
      },
      standard: {
        text: [{ text: "QR-Codes zeigen erst nach dem Scannen, wohin sie führen. Kriminelle nutzen das aus und überkleben echte Codes mit gefälschten – etwa an Parkautomaten, in Briefen oder auf falschen Paket-Benachrichtigungen (sogenanntes Quishing). Bei überklebten Codes an Automaten zahlst du besser bar oder über die offizielle App; bei anderen Codes prüfst du die geöffnete Internet-Adresse, bevor du dort etwas eingibst." }],
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
        text: [{ text: "Seriöse Online-Shops erkennst du an mehreren Merkmalen. Sie sind bekannt oder gut bewertet, haben ein vollständiges Impressum mit Firmennamen und Adresse und verlangen keine verdächtig niedrigen Preise. Echte Kundenbewertungen geben zusätzliche Sicherheit." }],
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
          { text: "Beim Einkaufen im Internet kannst du vieles selbst prüfen und dich so besser schützen." },
          { text: "Die folgenden Punkte helfen dir dabei." }
        ],
        bullets: ["Ich kaufe bei Shops, die ich kenne.", "Ich prüfe Preis und Impressum.", "Ich zahle möglichst auf Rechnung.", "PIN und TAN bleiben geheim.", "Ich lasse mich nicht hetzen.", "Vor dem Kaufen kann ich eine Person fragen."],
        warning: "Ein sehr niedriger Preis oder ein Countdown soll dich zur Eile treiben, damit du nicht mehr nachdenkst.",
        success: "Wenn du dich nicht hetzen lässt, kaufst du sicherer ein."
      },
      standard: {
        text: [{ text: "Beim Online-Einkauf kannst du vieles selbst prüfen und dein Risiko senken: Kauf bei bekannten Shops, prüfe Preis und Impressum und zahle möglichst auf Rechnung. Halte PIN und TAN geheim und lass dich nicht zu schnellen Käufen drängen. Vor dem Kauf kannst du auch eine Vertrauensperson fragen." }],
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
          "Tilda stellt ein neues Profilfoto ein und prüft, wer es sehen kann: alle im Internet. Das will sie nicht – deshalb stellt sie es auf „Nur Freunde“ um."
        ]
      }
    }
  },
  whatsapp: {
    "Unbekannte Nachrichten": {
      einfach: {
        text: [
          { text: "Manchmal schreibt dir eine Nummer, die du nicht kennst." },
          { text: "Du musst nicht antworten, auch wenn die Nachricht freundlich klingt. Prüfe zuerst, wer dir schreibt und was die Person von dir möchte." },
          { text: "Dann entscheidest du selbst: Du kannst die Nachricht stehen lassen oder die Nummer blockieren. Wenn du möchtest, sprichst du vorher mit jemandem darüber." }
        ],
        remember: "Bei einer fremden Nummer prüfe ich zuerst, wer schreibt. Dann entscheide ich selbst.",
        vorbild: ["Eine fremde Nummer schreibt Tilda: Hallo, wie geht es dir?", "Tilda kennt die Nummer nicht. Sie antwortet nicht und blockiert die Nummer."]
      },
      standard: {
        text: [{ text: "Schreibt dir eine unbekannte Nummer, musst du nicht antworten – auch wenn die Nachricht freundlich klingt. Prüfe zuerst, wer dir schreibt und was die Person von dir möchte. Danach entscheidest du selbst, ob du die Nachricht unbeantwortet lässt oder die Nummer blockierst. Wenn du möchtest, besprichst du das vorher mit jemandem." }],
        remember: "Unbekannte Nummer: erst prüfen, dann selbst entscheiden.",
        vorbild: ["Eine unbekannte Nummer schreibt Tilda freundlich an. Tilda kennt die Nummer nicht, antwortet nicht und blockiert sie."]
      }
    },
    "Links in Nachrichten": {
      einfach: {
        text: [
          { text: "Ein Link ist eine Adresse zu einer Internet-Seite. Meistens ist er blau." },
          { text: "Fremde Links können gefährlich sein, weil sie auf falsche Seiten führen." },
          { text: "Tippe deshalb nicht darauf. Wenn du wissen willst, ob die Nachricht stimmt, öffnest du die App selbst oder rufst eine Nummer an, die du schon kennst." }
        ],
        remember: "Auf fremde Links tippst du nicht.",
        vorbild: ["Alex bekommt von einer Nummer, die er nicht kennt, eine Nachricht mit einem Link.", "Er tippt nicht auf den Link und löscht die Nachricht."]
      },
      standard: {
        text: [{ text: "Ein Link führt dich auf eine Internetseite – meist erkennst du ihn an der blauen Schrift. Links von Fremden können auf gefälschte Seiten führen. Tippe sie deshalb nicht an. Willst du wissen, ob die Nachricht stimmt, öffne die App selbst oder ruf eine Nummer an, die du bereits kennst." }],
        remember: "Fremde Links nicht antippen.",
        vorbild: ["Von einer unbekannten Nummer kommt eine Nachricht mit Link. Alex tippt ihn nicht an und löscht die Nachricht."]
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
          { text: "Dein Name, dein aktuelles Profil-Bild und dein Titel-Bild sind öffentlich. Das Titel-Bild ist das große Bild oben im Profil." },
          { text: "Für deine Beiträge wählst du aus, wer sie sehen kann." },
          { text: "Du kannst für deine Beiträge Freunde auswählen. Wenn du möchtest, stellst du das zusammen mit einer anderen Person ein." }
        ],
        remember: "Ich prüfe, wer meinen Beitrag sehen kann.",
        vorbild: ["Alex öffnet bei Facebook die Einstellungen.", "Für seine neuen Beiträge wählt er Freunde aus.", "Jetzt sehen nur noch seine Freunde, was er neu postet."]
      },
      standard: {
        text: [{ text: "Dein Name, dein aktuelles Profilbild und dein Titelbild sind öffentlich sichtbar. Für Beiträge und weitere Profilangaben kannst du die Sichtbarkeit einzeln wählen. Bei neuen Beiträgen kannst du zum Beispiel Freunde auswählen. Wenn du möchtest, gehst du die Einstellungen mit jemandem zusammen durch." }],
        remember: "Ich prüfe, wer meinen Beitrag sehen kann.",
        vorbild: ["Alex öffnet die Facebook-Einstellungen und wählt für seine neuen Beiträge Freunde aus. Danach sehen nur noch seine Freunde, was er neu postet."]
      }
    },
    "Unbekannte Personen": {
      einfach: {
        text: [
          { text: "Manchmal schickt dir eine unbekannte Person eine Freundschafts-Anfrage." },
          { text: "Wenn du die Person nicht kennst, nimmst du die Anfrage nicht an." },
          { text: "Wenn du nicht sicher bist, schaust du dir zuerst das Profil an und entscheidest dann selbst." }
        ],
        remember: "Anfragen von Unbekannten lehnst du ab.",
        vorbild: ["Eine Person, die Tilda nicht kennt, schickt ihr eine Freundschafts-Anfrage.", "Tilda lehnt die Anfrage ab."]
      },
      standard: {
        text: [{ text: "Manchmal schickt dir jemand eine Freundschaftsanfrage, den du nicht kennst. Solche Anfragen nimmst du nicht an. Bist du unsicher, siehst du dir zuerst das Profil an und entscheidest dann selbst." }],
        remember: "Anfragen von Unbekannten ablehnen.",
        vorbild: ["Eine unbekannte Person schickt Tilda eine Freundschaftsanfrage. Tilda lehnt sie ab."]
      }
    },
    "Komische Nachrichten": {
      einfach: {
        text: [
          { text: "Manchmal bekommst du eine komische Nachricht, zum Beispiel mit einer Frage nach Geld oder mit einem Link." },
          { text: "Tippe nicht auf den Link und schick kein Geld." },
          { text: "Wenn die Nachricht von einem Freund kommt, rufst du ihn an und fragst, ob er das wirklich geschrieben hat." }
        ],
        remember: "Komische Nachrichten tippe ich nicht an.",
        vorbild: ["Jemand schreibt Alex, dass er schnell Geld braucht, und schickt einen Link.", "Alex tippt nicht auf den Link und schickt kein Geld. Er meldet die Nachricht bei Facebook."]
      },
      standard: {
        text: [{ text: "Seltsame Nachrichten, in denen jemand nach Geld fragt oder einen Link schickt, sind oft Betrug. Tippe nichts an und schick kein Geld. Kommt die Nachricht von einem Freund, ruf ihn an und frag, ob er sie wirklich geschrieben hat." }],
        remember: "Seltsame Nachrichten tippe ich nicht an.",
        vorbild: ["Jemand bittet Alex per Nachricht dringend um Geld und schickt einen Link. Alex tippt ihn nicht an, schickt kein Geld und meldet die Nachricht bei Facebook."]
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
          { text: "Du musst nicht antworten, auch wenn die Nachricht freundlich klingt. Prüfe zuerst, wer dir schreibt und was die Person von dir möchte." },
          { text: "Dann entscheidest du selbst: Du kannst die Nachricht stehen lassen oder das Profil blockieren. Wenn du möchtest, sprichst du vorher mit jemandem darüber." }
        ],
        remember: "Bei einem fremden Profil entscheide ich selbst, und ich darf mir Hilfe holen.",
        vorbild: ["Ein Profil, das Tilda nicht kennt, schreibt ihr eine Nachricht.", "Tilda antwortet nicht und blockiert das Profil."]
      },
      standard: {
        text: [{ text: "Schreibt dir jemand, den du nicht kennst, musst du nicht antworten. Prüfe zuerst, wer dir schreibt und was die Person von dir möchte, und entscheide dann selbst. Du kannst die Nachricht ignorieren oder das Profil blockieren – und wenn du möchtest, sprichst du vorher mit jemandem darüber." }],
        remember: "Fremdes Profil: Ich entscheide selbst und darf mir Hilfe holen.",
        vorbild: ["Ein fremdes Profil schreibt Tilda an. Sie antwortet nicht und blockiert das Profil."]
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
          { text: "Schalte deinen Standort deshalb aus. Wenn du möchtest, stellst du das zusammen mit einer anderen Person ein." }
        ],
        remember: "Du schaltest deinen Standort aus.",
        vorbild: ["Alex sieht, dass Snapchat seinen Ort auf einer Karte zeigt.", "Er schaltet den Standort aus. Jetzt sieht niemand mehr seinen Ort."]
      },
      standard: {
        text: [{ text: "Snapchat kann deinen Standort auf einer Karte anzeigen – dann sehen andere, wo du gerade bist. Das kann gefährlich werden. Schalte die Standort-Freigabe deshalb aus. Wenn du möchtest, gehst du die Einstellung mit jemandem zusammen durch." }],
        remember: "Standort-Freigabe ausschalten.",
        vorbild: ["Alex merkt, dass Snapchat seinen Standort auf einer Karte zeigt. Er schaltet die Freigabe aus."]
      }
    },
    "Niemand darf dich zwingen": {
      einfach: {
        text: [
          { text: "Manchmal macht dir jemand Druck und will ein Bild von dir." },
          { text: "Wenn du das nicht willst, musst du es auch nicht tun. Du darfst Nein sagen." },
          { text: "Du kannst die Person blockieren. Wenn du möchtest, sprichst du danach mit jemandem darüber." }
        ],
        remember: "Du darfst immer Nein sagen.",
        vorbild: ["Jemand drängt Tilda, ein Bild von sich zu schicken.", "Tilda will das nicht und sagt Nein.", "Sie blockiert die Person und erzählt Alex später davon."]
      },
      standard: {
        text: [{ text: "Setzt dich jemand unter Druck, ein Bild von dir zu schicken, musst du das nicht tun. Du darfst jederzeit Nein sagen und die Person blockieren. Wenn du möchtest, sprichst du mit jemandem darüber – du bist damit nicht allein." }],
        remember: "Du darfst Nein sagen – immer.",
        vorbild: ["Jemand drängt Tilda, ein Bild von sich zu schicken. Sie sagt Nein, blockiert die Person und erzählt Alex später davon."]
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
          { text: "Du musst nicht antworten, auch wenn die Nachricht freundlich klingt. Prüfe zuerst, wer dir schreibt und was die Person von dir möchte." },
          { text: "Dann entscheidest du selbst: Du kannst die Nachricht stehen lassen oder das Profil blockieren. Wenn du möchtest, sprichst du vorher mit jemandem darüber." }
        ],
        remember: "Bei einem fremden Profil entscheide ich selbst, und ich darf mir Hilfe holen.",
        vorbild: ["Eine fremde Person schreibt Tilda bei TikTok eine private Nachricht.", "Tilda antwortet nicht und blockiert das Profil."]
      },
      standard: {
        text: [{ text: "Schreibt dir auf TikTok jemand, den du nicht kennst, musst du nicht antworten. Prüfe zuerst, wer dir schreibt und was die Person von dir möchte, und entscheide dann selbst. Du kannst die Nachricht ignorieren oder das Profil blockieren – und wenn du möchtest, sprichst du vorher mit jemandem darüber." }],
        remember: "Fremdes Profil: Ich entscheide selbst und darf mir Hilfe holen.",
        vorbild: ["Eine fremde Person schreibt Tilda privat an. Sie antwortet nicht und blockiert das Profil."]
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
  hilfe: {
    /* Paket H4 (03.10.2026): Kurz-Einheiten K1–K3 in Einfacher Sprache und Alltagssprache. */
    "Was ist los?": {
      "einfach": {
        "text": [
          {
            "text": "Zuerst schaust du, was los ist."
          },
          {
            "text": "Manchmal klappt etwas nicht. Zum Beispiel macht dein Handy keinen Ton."
          },
          {
            "text": "Oder etwas macht dir Druck oder Angst, zum Beispiel weil dich jemand drängt."
          },
          {
            "text": "Oder jemand ist in Gefahr. Das ist ein Notfall, und dann rufst du sofort 110 oder 112."
          }
        ]
      },
      "standard": {
        "text": [
          {
            "text": "Klär zuerst, was los ist."
          },
          {
            "text": "Vielleicht funktioniert etwas nicht – dein Handy bleibt zum Beispiel stumm."
          },
          {
            "text": "Oder etwas macht dir Druck oder Angst, etwa weil dich jemand drängt."
          },
          {
            "text": "Oder jemand ist in Gefahr. Das ist ein Notfall: Dann ruf sofort 110 oder 112."
          }
        ]
      }
    },
    "Was kann ich selbst tun?": {
      "einfach": {
        "text": [
          {
            "text": "Wenn etwas nicht klappt, probierst du es noch einmal oder siehst in den Einstellungen nach."
          },
          {
            "text": "Wenn dir etwas Druck oder Angst macht, machst du erst Stopp."
          },
          {
            "text": "Du schickst nichts, du bezahlst nichts und du bestätigst nichts."
          },
          {
            "text": "Du kannst den Chat auch schließen."
          },
          {
            "text": "Wenn du nicht weiterkommst, holst du dir Hilfe."
          }
        ],
        "remember": "Vieles kann ich selbst lösen."
      },
      "standard": {
        "text": [
          {
            "text": "Etwas klappt nicht? Versuch es noch einmal oder sieh in den Einstellungen nach."
          },
          {
            "text": "Etwas macht dir Druck oder Angst? Dann heißt es erst einmal Stopp."
          },
          {
            "text": "Du schickst nichts, bezahlst nichts und bestätigst nichts."
          },
          {
            "text": "Den Chat kannst du auch einfach schließen."
          },
          {
            "text": "Kommst du nicht weiter, hol dir Hilfe."
          }
        ],
        "remember": "Vieles kann ich selbst lösen."
      }
    },
    "Welche Hilfe passt?": {
      "einfach": {
        "text": [
          {
            "text": "Bei einer Frage zum Handy fragst du eine Person, die sich mit Handys auskennt."
          },
          {
            "text": "Bei Druck oder Angst sprichst du mit einer Person, der du vertraust, und zeigst ihr das Problem."
          },
          {
            "text": "Wenn die erste Person nicht helfen kann, fragst du eine andere."
          },
          {
            "text": "Jemand ist in Gefahr? Dann ruf sofort 110 oder 112."
          }
        ],
        "remember": "Ich hole mir die Hilfe, die passt."
      },
      "standard": {
        "text": [
          {
            "text": "Bei einer Frage zum Handy fragst du jemanden, der sich mit Handys auskennt."
          },
          {
            "text": "Bei Druck oder Angst sprichst du mit einer Person, der du vertraust, und zeigst ihr das Problem."
          },
          {
            "text": "Kann die erste Person nicht helfen, frag eine andere."
          },
          {
            "text": "Jemand ist in Gefahr? Dann ruf sofort 110 oder 112."
          }
        ],
        "remember": "Ich hole mir die passende Hilfe."
      }
    }
  },
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
          { text: "Glaub deshalb nicht alles. Schau im Zweifel an einer zweiten Stelle nach oder sprich mit jemandem darüber." }
        ],
        remember: "Du glaubst nicht alles. Du prüfst es zuerst.",
        vorbild: ["Am Telefon klingt eine Stimme wie der Bruder von Alex und will sofort Geld.", "Alex legt auf und ruft seinen Bruder unter der bekannten Nummer selbst an."]
      },
      standard: {
        text: [{ text: "KI macht Fehler und kann falsche Dinge behaupten. Außerdem lassen sich mit ihr Bilder fälschen und Stimmen täuschend echt nachahmen. Verlangt eine vertraut klingende Stimme am Telefon Geld, leg auf und ruf die Person unter der Nummer an, die du schon kennst. Glaub nicht alles, was du siehst oder hörst. Prüf es im Zweifel an einer zweiten Stelle oder sprich mit jemandem darüber." }],
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
          { text: "Du löschst sie. Wenn ein Freund sie dir geschickt hat, kannst du ihm schreiben, dass sie nicht stimmt. Du kannst auch mit jemandem darüber sprechen." }
        ],
        remember: "Fake-Nachrichten leitest du nicht weiter.",
        vorbild: ["Tilda erkennt, dass eine Nachricht ein Fake ist.", "Sie schickt sie nicht weiter und löscht sie."]
      },
      standard: {
        text: [{ text: "Hast du eine Fake-Nachricht erkannt, leitest du sie nicht weiter – so stoppst du ihre Verbreitung. Lösch sie. Kam sie von einem Freund, kannst du ihm schreiben, dass sie nicht stimmt. Wenn du möchtest, sprichst du mit jemandem darüber." }],
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
          { text: "Dann prüfst du in Ruhe, ob das wirklich stimmt. Wenn du möchtest, sprichst du mit jemandem darüber." }
        ],
        remember: "Bei Stress oder Gewinn machst du Stopp.",
        vorbild: ["Eine Nachricht sagt, dass Tilda ein Handy gewonnen hat.", "Sie soll nur schnell 2 Euro bezahlen.", "Tilda macht Stopp, zahlt nichts und löscht die Nachricht."]
      },
      standard: {
        text: [{ text: "Typische Warnzeichen für Betrug sind überraschende Gewinne, dringende Bitten um Geld und Zeitdruck. Siehst du so ein Zeichen, machst du Stopp und prüfst in Ruhe, ob das wirklich stimmt. Wenn du möchtest, sprichst du mit jemandem darüber." }],
        remember: "Zeitdruck oder Gewinn: erst Stopp machen.",
        vorbild: ["Eine Nachricht meldet Tilda einen Handy-Gewinn – sie soll nur schnell 2 Euro zahlen. Tilda hält inne, zahlt nichts und löscht die Nachricht."]
      }
    },
    "Was tust du bei Betrug?": {
      einfach: {
        text: [
          { text: "Wenn du Betrug vermutest, zahlst du kein Geld und gibst keine Daten ein." },
          { text: "Sagt eine Nachricht, mit deinem Bank-Konto stimmt etwas nicht, tippst du nicht auf den Link. Du öffnest deine Bank-App selbst." },
          { text: "Du kannst die Nummer blockieren. Wenn du möchtest, sprichst du mit jemandem darüber." }
        ],
        remember: "Kein Geld senden und keine Daten eingeben.",
        vorbild: ["Eine SMS sagt Alex, dass sein Konto gesperrt ist, und schickt einen Link.", "Alex tippt nicht auf den Link, sondern öffnet seine Bank-App selbst."]
      },
      standard: {
        text: [{ text: "Vermutest du Betrug, zahlst du nichts und gibst keine Daten ein. Meldet eine Nachricht ein Problem mit deinem Konto, öffne die Bank-App selbst, statt dem Link zu folgen. Du kannst die Nummer blockieren – und wenn du möchtest, sprichst du mit jemandem darüber." }],
        remember: "Kein Geld, keine Daten – die App selbst öffnen.",
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
          { text: "Wenn du unsicher bist, kaufst du dort nicht. Du kannst den Shop auch mit jemandem zusammen prüfen." }
        ],
        remember: "Ein guter Shop zeigt Name und Adresse im Impressum.",
        vorbild: ["Alex findet einen neuen Shop und schaut zuerst ins Impressum.", "Dort stehen Name und Adresse, und das ist ein gutes Zeichen."]
      },
      standard: {
        text: [{ text: "Seriöse Shops nennen im Impressum ihren Namen und ihre Anschrift, und ihre Preise sind realistisch statt verdächtig niedrig. Das Schloss-Symbol in der Adresszeile reicht allein nicht: Es zeigt nur eine verschlüsselte Verbindung, und auch Fake-Shops haben es. Bist du unsicher, kauf dort nicht – oder prüf den Shop gemeinsam mit jemandem." }],
        remember: "Ein seriöser Shop nennt Name und Anschrift.",
        vorbild: ["Bei einem neuen Shop schaut Alex zuerst ins Impressum. Name und Anschrift stehen dort – ein gutes Zeichen."]
      }
    },
    "Sicher bezahlen": {
      einfach: {
        text: [
          { text: "PayPal und der Kauf auf Rechnung sind sicherer als andere Bezahl-Arten. Bei Rechnung bekommst du zuerst die Ware und zahlst danach." },
          { text: "Deine Kreditkarte gibst du nicht auf jeder Seite ein." },
          { text: "Wenn es Probleme gibt, schreibst du zuerst dem Shop. Wenn du möchtest, holst du dir dabei Hilfe." }
        ],
        remember: "PayPal oder Rechnung ist sicherer.",
        vorbild: ["Tilda kauft zum ersten Mal in einem Shop.", "Sie bezahlt auf Rechnung, damit sie zuerst die Ware bekommt."]
      },
      standard: {
        text: [{ text: "Sicherer bezahlst du auf Rechnung – dann zahlst du erst, wenn die Ware da ist – oder über PayPal mit Käuferschutz. Deine Kreditkartendaten gibst du nicht auf jeder Seite ein. Gibt es Probleme, schreib zuerst dem Shop – und hol dir dabei Hilfe, wenn du möchtest." }],
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
      leicht:   ["Auswählen: Wer sieht deine Beiträge?", "Fremde Anfragen ablehnen.", "Komische Nachrichten erkennen."],
      einfach:  ["Für deine Beiträge auswählen, wer sie sehen kann.", "Freundschafts-Anfragen von Fremden ablehnen.", "Komische Nachrichten erkennen und jemandem zeigen."],
      standard: ["Die Sichtbarkeit von Beiträgen und weiteren Profilangaben bewusst wählen.", "Anfragen von Unbekannten einschätzen und ablehnen.", "Verdächtige Nachrichten erkennen, ohne Links anzutippen."]
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
     Kern-Kompetenz. Drei Stufen seit Paket H4 (03.10.2026); die alten Ziele
     liegen in geparkt/hilfe-umbau-2026-09-30.js. */
  hilfe: {
    kurz: {
      leicht:   ["Erkennen: Was für ein Problem ist das?", "Sicher selbst handeln.", "Bei Druck oder Angst erst stoppen.", "Die passende Hilfe finden.", "Unterstützung wirklich holen.", "Einen Notfall erkennen."],
      einfach:  ["Erkennen, was für ein Problem du hast.", "Sicher selbst handeln.", "Bei Druck oder Angst erst stoppen.", "Die Hilfe finden, die zu deinem Problem passt.", "Unterstützung wirklich holen.", "Erkennen, wann etwas ein Notfall ist."],
      standard: ["Erkennen, um welche Art von Problem es geht.", "Sicher selbst handeln.", "Bei Druck oder Angst erst einmal stoppen.", "Die passende Hilfe finden.", "Unterstützung tatsächlich holen.", "Einen Notfall erkennen."]
    },
    lang: {
      leicht:   ["Erkennen: Was für ein Problem ist das?", "Sicher selbst handeln.", "Bei Druck oder Angst erst stoppen.", "Die passende Hilfe finden.", "Unterstützung wirklich holen.", "Einen Notfall erkennen."],
      einfach:  ["Erkennen, was für ein Problem du hast.", "Sicher selbst handeln.", "Bei Druck oder Angst erst stoppen.", "Die Hilfe finden, die zu deinem Problem passt.", "Unterstützung wirklich holen.", "Erkennen, wann etwas ein Notfall ist."],
      standard: ["Erkennen, um welche Art von Problem es geht.", "Sicher selbst handeln.", "Bei Druck oder Angst erst einmal stoppen.", "Die passende Hilfe finden.", "Unterstützung tatsächlich holen.", "Einen Notfall erkennen."]
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
        "feedbackCorrect": "Die Kontonummer ist wichtig, aber die Firma braucht sie für deinen Lohn. Du kennst die Firma, deshalb gibst du sie.",
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
        "feedbackCorrect": "Die Kontonummer ist sensibel, aber die Firma braucht sie für deinen Lohn. Du kennst die Firma – also gibst du sie an.",
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
        "feedbackCorrect": "Deine Krankenkasse kennst du, und du hast selbst dort angerufen. Sie braucht dein Geburtsdatum, damit sie dich erkennt. Die anderen kennst du nicht.",
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
        "feedbackCorrect": "Deine Krankenkasse kennst du, und du hast selbst angerufen. Sie braucht dein Geburtsdatum, um dich zu erkennen. Die anderen kennst du nicht.",
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
        "feedbackCorrect": "Die App braucht nur dieses eine Foto. Viele Handys bieten dafür die Einstellung: Ausgewählte Fotos. Dann sieht die App deine anderen Fotos nicht.",
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
        "feedbackCorrect": "Die App braucht nur dieses eine Foto. Viele Handys bieten dafür die Option „Ausgewählte Fotos“ – dann sieht die App deine übrigen Fotos nicht.",
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
        "feedbackCorrect": "Deine Freunde sollen dich anrufen können, und dafür reicht die Einstellung: Nur Freunde. Fremde brauchen deine Nummer nicht.",
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
        "feedbackCorrect": "Deine Freunde sollen dich anrufen können – dafür reicht „Nur Freunde“. Fremde brauchen deine Nummer nicht.",
        "feedbackWrong": [
          "Dann sehen auch Fremde deine Nummer. Das ist mehr als nötig; für deine Freunde reicht „Nur Freunde“.",
          null,
          "Das darfst du so einstellen. Dann können dich deine Freunde aber nicht anrufen – und das wolltest du ja. Dafür reicht „Nur Freunde“."
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
        "feedbackCorrect": "Auf dem Foto sind auch deine Freunde, deshalb entscheiden sie mit. Wenn einer Nein sagt, stellst du es nicht rein.",
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
        "feedbackCorrect": "Auf dem Foto sind auch deine Freunde, also entscheiden sie mit. Sagt jemand Nein, stellst du es nicht ein.",
        "feedbackWrong": [
          "Das Foto zeigt auch deine Freunde – sie entscheiden mit. Frag sie vorher.",
          "Auch in 24 Stunden kann jemand das Foto speichern; dann bleibt es erhalten. Frag deine Freunde vorher.",
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
        "feedbackCorrect": "Nur die 3 brauchen deinen Standort, und zwar nur bis zum Treffen. Du darfst auch Nein sagen. Dann schreibt ihr euch einfach, wo ihr seid.",
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
          "Mit den drei Freunden, bis zum Treffen."
        ],
        "feedbackCorrect": "Nur die drei brauchen deinen Standort, und nur bis zum Treffen. Du darfst auch Nein sagen – dann schreibt ihr euch, wo ihr seid.",
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
        "feedbackCorrect": "Du weißt nicht, ob wirklich deine Bank schreibt. Das prüfst du selbst, und zwar mit einer Nummer, die du kennst.",
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
        "feedbackCorrect": "Ob wirklich deine Bank schreibt, weißt du nicht. Das prüfst du selbst – über eine Nummer, die du kennst.",
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
        "feedbackCorrect": "Die Kursleitung braucht die Nummer für einen klaren Zweck, und du kennst sie. Dann ist das in Ordnung.",
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
        "feedbackCorrect": "Die Kursleitung braucht die Nummer für einen klaren Zweck, und du kennst sie. Dann ist das in Ordnung.",
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
        "feedbackCorrect": "Für ein Video braucht niemand deine Adresse. Das passt nicht zum Zweck.",
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
        "feedbackCorrect": "Für ein Video braucht niemand deine Adresse – das passt nicht zum Zweck.",
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
        "feedbackCorrect": "Du prüfst zuerst, wofür die App die Nummer braucht. Wenn sie nicht nötig ist, lässt du das Feld leer.",
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
        "feedbackCorrect": "Du prüfst zuerst, wofür die App die Nummer braucht. Ist sie nicht nötig, lässt du das Feld leer.",
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
        "feedbackCorrect": "Für einen Wecker braucht die App keine Kontakte. Das passt nicht zum Zweck.",
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
        "feedbackCorrect": "Für einen Wecker braucht die App keine Kontakte – das passt nicht zum Zweck.",
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
        "feedbackCorrect": "Wenn dein Handy weg ist, benutzt du es nicht. Die Funktion muss es aber trotzdem finden. Deshalb braucht sie den Standort immer.",
        "feedbackWrong": [
          "Wenn dein Handy weg ist, benutzt du es nicht. Dann findet die Funktion es auch nicht. Hier braucht sie den Standort immer.",
          "Das darfst du so wählen. Aber dann hilft dir die Funktion nicht: Wenn dein Handy weg ist, findest du es nicht.",
          null
        ],
        "remember": "Ich erlaube einer App nur das, was sie braucht."
      },
      "standard": {
        "question": "Dein Handy hat die Funktion „Handy finden“: Hast du es verloren, zeigt sie dir, wo es sich befindet. Dafür fragt sie nach deinem Standort. Was passt?",
        "hinweis": "Überlege: Wann brauchst du die Funktion – und nutzt du das Handy in diesem Moment?",
        "answers": [
          "Nur während der Nutzung erlauben.",
          "Nicht erlauben.",
          "Immer erlauben."
        ],
        "feedbackCorrect": "Hast du dein Handy verloren, nutzt du es nicht – die Funktion muss es trotzdem finden. Dafür braucht sie den Standort immer.",
        "feedbackWrong": [
          "Hast du dein Handy verloren, nutzt du es nicht – dann findet die Funktion es auch nicht. Hier braucht sie den Standort immer.",
          "Das darfst du so wählen. Dann hilft dir die Funktion aber nicht: Hast du dein Handy verloren, findest du es nicht.",
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
        "feedbackCorrect": "Nur der Brief ist privat. Du schneidest ihn weg oder machst ein neues Foto ohne den Brief.",
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
        "feedbackCorrect": "Privat ist nur der Brief – du schneidest ihn weg oder machst ein neues Foto ohne ihn.",
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
          "Ich trage noch nichts ein und prüfe erst, wofür.",
          "Ich trage eine falsche Adresse ein, das merkt die App nicht."
        ],
        "feedbackCorrect": "Wenn du unsicher bist, gibst du noch nichts frei. Du prüfst erst oder holst dir Unterstützung.",
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
          "Ich trage noch nichts ein und prüfe erst, wofür.",
          "Ich trage eine falsche Adresse ein – das merkt die App nicht."
        ],
        "feedbackCorrect": "Bist du unsicher, gibst du noch nichts frei: erst prüfen oder Unterstützung holen.",
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
          "Die Erlaubnis. Das Foto haben andere vielleicht schon gespeichert.",
          "Beides, denn ich lösche das Foto einfach in der Gruppe. Dann ist es weg.",
          "Gar nichts mehr, denn eine Erlaubnis gilt für immer."
        ],
        "feedbackCorrect": "Eine Erlaubnis kannst du oft ändern. Ein verschicktes Foto kannst du aber oft nicht zurückholen. Deshalb prüfst du vorher.",
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
          "Beides – ich lösche das Foto einfach in der Gruppe, dann ist es verschwunden.",
          "Gar nichts – eine Berechtigung gilt für immer."
        ],
        "feedbackCorrect": "Eine Berechtigung lässt sich oft ändern, ein verschicktes Foto oft nicht zurückholen. Deshalb prüfst du vorher.",
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
          "Daten immer sofort eingeben, weil das schnell geht.",
          "Nie irgendwelche Daten eingeben.",
          "Erst prüfen, dann entscheiden."
        ],
        "feedbackCorrect": "Zuerst prüfst du: Wer, was und wofür? Dann entscheidest du. Manchmal gibst du Daten, manchmal nicht.",
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
          "Immer sofort eingeben – das geht schnell.",
          "Nie etwas eingeben.",
          "Erst prüfen, dann entscheiden."
        ],
        "feedbackCorrect": "Zuerst prüfst du: Wer, was, wofür? Dann entscheidest du – manchmal gibst du Daten, manchmal nicht.",
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
    },
    "datenschutz/quiz/foto-publikum-zustimmung": {
      "einfach": {
        "question": "Deine Kollegin ist auf einem Foto. Sie sagt: Bitte schick es nur an Lea. Du möchtest es in deinem Status zeigen, den auch andere Kontakte sehen. Was machst du?",
        "hinweis": "Überlege, für welche Personen deine Kollegin das Foto freigegeben hat.",
        "answers": [
          "Ich schicke das Foto nur an Lea.",
          "Ich zeige es im Status, weil dort nur meine Kontakte sind.",
          "Ich zeige es im Status und frage meine Kollegin danach."
        ],
        "feedbackCorrect": "Deine Kollegin hat das Foto nur für Lea freigegeben. Im Status sehen es auch andere. Dafür fragst du sie vorher und hältst dich an ihre Antwort. Wenn sie Nein sagt, zeigst du das Foto dort nicht.",
        "feedbackWrong": [
          null,
          "Die Erlaubnis gilt nur für Lea. Auch wenn im Status nur deine Kontakte zuschauen, sind das weitere Personen. Frag deine Kollegin vor dem Teilen um Erlaubnis.",
          "Wenn das Foto bereits geteilt ist, können andere es schon gespeichert haben. Frag deine Kollegin deshalb vorher und halte dich an ihre Antwort. Bei einem Nein zeigst du es nicht im Status."
        ],
        "remember": "Vor dem Senden prüfe ich den Inhalt und die Empfänger."
      },
      "standard": {
        "question": "Auf einem Foto ist deine Kollegin zu sehen. Sie bittet dich: Schick es bitte nur an Lea. Du möchtest es in deinem Status teilen, der für weitere Kontakte sichtbar ist. Was tust du?",
        "hinweis": "Überlege, welches Publikum ihre Zustimmung umfasst.",
        "answers": [
          "Ich schicke das Foto ausschließlich an Lea.",
          "Ich teile es im Status, weil ihn nur meine Kontakte sehen.",
          "Ich teile es im Status und frage meine Kollegin im Anschluss."
        ],
        "feedbackCorrect": "Deine Kollegin hat der Weitergabe an Lea zugestimmt, nicht an alle Kontakte, die deinen Status sehen. Frag sie vor einer weiteren Veröffentlichung und halte dich an ihre Antwort. Ein Nein gilt auch für einen eingeschränkten Status.",
        "feedbackWrong": [
          null,
          "Die Zustimmung gilt für Lea. Ein Status mit deinen Kontakten erweitert das Publikum trotzdem. Für diese Weitergabe fragst du deine Kollegin vorab um Erlaubnis.",
          "Nach einer Veröffentlichung können andere das Foto bereits gespeichert haben. Frag deine Kollegin deshalb vorab und respektiere ihre Entscheidung. Bei einem Nein gehört das Foto nicht in deinen Status."
        ],
        "remember": "Vor dem Teilen prüfe ich Inhalt und Empfänger – und frage alle, die zu sehen sind."
      }
    }
  },

  /* Hilfe bei Problemen (Paket H4, 03.10.2026): 5 + 3 Übungen, 9 Quiz-Fragen und die
     3 Fragen der neuen Situation. Übungen und neue Situation unter ihrer festen
     ID, Quiz-Fragen unter der Frage in Leichter Sprache. Der Notfall-Satz ist in
     allen Stufen wortgleich. */
  hilfe: {
    "hilfe/lang/Probleme sind verschieden": {
      "einfach": {
        "question": "Deine Freundin Jana wohnt allein. Sie ruft dich an und sagt: Ich bin in der Küche gestürzt und komme nicht mehr hoch. Mein Kopf blutet. Was ist los, und was machst du jetzt?",
        "hinweis": "Überlege, ob Jana jetzt in Gefahr ist.",
        "answers": [
          "Ich sage zu Jana, dass sie schnell selbst 112 anrufen soll.",
          "Jana ist in Gefahr, deshalb rufe ich sofort 112 an.",
          "Ich frage morgen meine Betreuerin, weil sie dann Rat weiß."
        ],
        "feedbackCorrect": "Jana ist verletzt und allein, also ist sie in Gefahr. Das ist ein Notfall. Du sagst Jana, dass du Hilfe holst. Dann rufst du sofort 112 an und nennst Janas Adresse.",
        "feedbackWrong": [
          "Jana ist verletzt, und vielleicht kann sie gleich nicht mehr telefonieren. Deshalb rufst du selbst sofort 112 an.",
          null,
          "Morgen ist es zu spät, denn Jana ist jetzt in Gefahr. Du rufst sofort 112 an."
        ],
        "remember": "Jemand ist in Gefahr? Dann ruf sofort 110 oder 112."
      },
      "standard": {
        "question": "Deine Freundin Jana lebt allein. Sie ruft dich an: Ich bin in der Küche gestürzt und komme nicht mehr hoch. Mein Kopf blutet. Was ist los – und was tust du jetzt?",
        "hinweis": "Überleg: Ist Jana in diesem Moment in Gefahr?",
        "answers": [
          "Ich sage Jana, sie soll schnell selbst die 112 anrufen.",
          "Jana ist in Gefahr – ich rufe sofort die 112 an.",
          "Ich frage morgen meine Betreuerin, sie weiß sicher Rat."
        ],
        "feedbackCorrect": "Jana ist verletzt und allein, sie ist in Gefahr – ein Notfall. Sag ihr, dass du Hilfe holst, ruf sofort die 112 an und nenn Janas Adresse.",
        "feedbackWrong": [
          "Jana ist verletzt und kann vielleicht gleich nicht mehr telefonieren. Deshalb rufst du selbst sofort die 112 an.",
          null,
          "Morgen ist zu spät: Jana ist jetzt in Gefahr. Ruf sofort die 112 an."
        ],
        "remember": "Jemand ist in Gefahr? Dann ruf sofort 110 oder 112."
      }
    },
    "hilfe/lang/Druck oder Angst: erst stoppen": {
      "einfach": {
        "question": "Rico wohnt mit dir in der Wohngruppe. Er schreibt dir: Leih mir morgen dein Fahrrad. Sag sofort Ja, sonst bin ich sauer. Du willst morgen aber selbst mit dem Fahrrad fahren. Was machst du?",
        "hinweis": "Überlege, ob du wirklich sofort antworten musst.",
        "answers": [
          "Ich schreibe sofort Ja, weil ich keinen Ärger mit Rico will.",
          "Ich antworte noch nicht. Erst überlege ich, ob ich das will.",
          "Ich schreibe zurück: Dann bin ich eben auch sauer."
        ],
        "feedbackCorrect": "Rico macht dir Druck, aber du darfst später antworten. Du überlegst in Ruhe und entscheidest danach selbst.",
        "feedbackWrong": [
          "Rico drängt dich. Unter Druck sagst du vielleicht schnell Ja, obwohl du das später nicht mehr willst. Überleg erst in Ruhe.",
          null,
          "Dann streitet ihr vielleicht. Du darfst später antworten und erst in Ruhe überlegen."
        ],
        "remember": "Bei Druck oder Angst mache ich erst Stopp."
      },
      "standard": {
        "question": "Rico wohnt mit dir in der Wohngruppe. Er schreibt: Leih mir morgen dein Fahrrad. Sag sofort Ja, sonst bin ich sauer. Du wolltest morgen aber selbst mit dem Rad fahren. Was tust du?",
        "hinweis": "Überleg: Musst du wirklich sofort antworten?",
        "answers": [
          "Ich schreibe sofort Ja – ich will keinen Ärger mit Rico.",
          "Ich antworte noch nicht und überlege erst, ob ich das will.",
          "Ich schreibe zurück: Dann bin ich eben auch sauer."
        ],
        "feedbackCorrect": "Rico setzt dich unter Druck, aber du darfst später antworten. Überleg in Ruhe und entscheide dann selbst.",
        "feedbackWrong": [
          "Rico drängt dich. Unter Druck sagt man schnell Ja und bereut es später. Überleg erst in Ruhe.",
          null,
          "Dann gibt es vielleicht Streit. Du darfst später antworten – überleg erst in Ruhe."
        ],
        "remember": "Bei Druck oder Angst mache ich erst Stopp."
      }
    },
    "hilfe/lang/Das kannst du selbst": {
      "einfach": {
        "question": "Dein Handy macht plötzlich keinen Ton mehr, und du hörst keine Nachrichten und keine Anrufe. Was machst du zuerst?",
        "hinweis": "Überlege, was du selbst am Handy nachsehen kannst.",
        "answers": [
          "Ich schaue zuerst in den Einstellungen nach dem Ton.",
          "Mein Handy ist kaputt, deshalb kaufe ich mir ein neues.",
          "Ich frage eine Person, die sich mit Handys auskennt.",
          "Ich warte, weil der Ton vielleicht von allein wiederkommt."
        ],
        "feedbackCorrect": "Oft ist nur der Ton leise gestellt, oder das Handy ist stumm. Das siehst du in den Einstellungen, und das kannst du selbst.",
        "feedbackWrong": [
          null,
          "Dein Handy ist wahrscheinlich nicht kaputt, denn oft ist nur der Ton aus. Schau zuerst in den Einstellungen nach.",
          null,
          "Der Ton kommt meistens nicht von allein wieder. Schau in den Einstellungen nach, das dauert nicht lange."
        ],
        "feedbackAuch": [
          null,
          null,
          "Eine Person, die sich mit Handys auskennt, kann dir helfen. Oft findest du den Ton aber schon selbst in den Einstellungen.",
          null
        ],
        "remember": "Vieles kann ich selbst lösen."
      },
      "standard": {
        "question": "Dein Handy gibt plötzlich keinen Ton mehr von sich – du hörst weder Nachrichten noch Anrufe. Was tust du zuerst?",
        "hinweis": "Überleg: Was kannst du selbst am Handy nachsehen?",
        "answers": [
          "Ich sehe zuerst in den Einstellungen nach dem Ton.",
          "Mein Handy ist kaputt – ich kaufe mir ein neues.",
          "Ich frage jemanden, der sich mit Handys auskennt.",
          "Ich warte ab, vielleicht kommt der Ton von allein wieder."
        ],
        "feedbackCorrect": "Oft ist nur der Ton leise gestellt oder das Handy stummgeschaltet. Das siehst du in den Einstellungen – und kannst es selbst ändern.",
        "feedbackWrong": [
          null,
          "Dein Handy ist wahrscheinlich nicht kaputt, oft ist nur der Ton aus. Sieh zuerst in den Einstellungen nach.",
          null,
          "Von allein kommt der Ton meistens nicht wieder. Sieh in den Einstellungen nach, das geht schnell."
        ],
        "feedbackAuch": [
          null,
          null,
          "Jemand, der sich mit Handys auskennt, kann dir helfen. Oft findest du den Ton aber schon selbst in den Einstellungen.",
          null
        ],
        "remember": "Vieles kann ich selbst lösen."
      }
    },
    "hilfe/lang/Welche Hilfe passt?": {
      "einfach": {
        "question": "Es ist Freitagabend. Deine Chefin schreibt dir: Jemand hat sich über dich beschwert. Wir sprechen am Montag darüber. Du weißt nicht, was los war. Du machst dir große Sorgen und kannst nicht schlafen. Welche Hilfe passt jetzt?",
        "hinweis": "Überlege, wer dir jetzt zuhören kann.",
        "answers": [
          "Ich melde mich am Montag krank, damit ich nicht hin muss.",
          "Ich sage niemandem etwas und mache mir allein Sorgen.",
          "Ich rede mit einer Person, der ich vertraue."
        ],
        "feedbackCorrect": "Deine Gefühle sind wichtig, und du darfst darüber sprechen. Eine vertraute Person kann dir zuhören. Zusammen überlegt ihr, was du am Montag fragen möchtest.",
        "feedbackWrong": [
          "Du weißt noch nicht, was los war. Eine vertraute Person kann dir jetzt zuhören. Zusammen überlegt ihr, was du am Montag fragen möchtest.",
          "Du musst mit deinen Sorgen nicht allein bleiben. Wenn du mit einer vertrauten Person sprichst, kann sie dir zuhören. Zusammen überlegt ihr, was du am Montag fragen möchtest.",
          null
        ],
        "remember": "Meine Gefühle sind wichtig, und ich darf darüber sprechen."
      },
      "standard": {
        "question": "Freitagabend. Deine Chefin schreibt: Jemand hat sich über dich beschwert. Wir sprechen am Montag darüber. Du weißt nicht, worum es geht, machst dir große Sorgen und kannst nicht schlafen. Welche Hilfe passt jetzt?",
        "hinweis": "Überleg: Wer kann dir jetzt zuhören?",
        "answers": [
          "Ich melde mich am Montag krank, dann muss ich nicht hin.",
          "Ich sage niemandem etwas und mache die Sorgen mit mir allein aus.",
          "Ich rede mit einer Person, der ich vertraue."
        ],
        "feedbackCorrect": "Du darfst über deine Sorgen sprechen. Eine vertraute Person kann dir zuhören und mit dir überlegen, was du am Montag klären möchtest.",
        "feedbackWrong": [
          "Du weißt noch nicht, worum es geht. Eine vertraute Person kann dir jetzt zuhören und mit dir überlegen, was du am Montag klären möchtest.",
          "Du musst deine Sorgen nicht allein mit dir ausmachen. Eine vertraute Person kann dir zuhören und mit dir überlegen, was du am Montag klären möchtest.",
          null
        ],
        "remember": "Meine Gefühle sind wichtig. Ich darf darüber sprechen."
      }
    },
    "hilfe/lang/Unterstützung wirklich holen": {
      "einfach": {
        "question": "Deine Bus-App zeigt keine Zeiten mehr, obwohl du sie schon neu gestartet hast. Jetzt fragst du deinen Mitbewohner Timo, der sich mit Apps auskennt. Was machst du?",
        "hinweis": "Überlege, was Timo wissen muss.",
        "answers": [
          "Ich zeige Timo die App und sage, dass ich sie schon neu gestartet habe.",
          "Ich sage nur, dass mein Handy nicht geht. Timo findet den Fehler dann schon.",
          "Ich gebe Timo mein Handy und gehe schnell in mein Zimmer."
        ],
        "feedbackCorrect": "Timo sieht das Problem gleich und weiß, was du schon probiert hast. So kann er dir schneller helfen.",
        "feedbackWrong": [
          null,
          "Dann muss Timo lange suchen. Zeig ihm die App und sag, was du schon probiert hast.",
          "Bleib lieber dabei. Dann siehst du, was Timo macht, und beim nächsten Mal kannst du es vielleicht selbst."
        ],
        "remember": "Ich zeige das Problem und sage, was ich schon probiert habe."
      },
      "standard": {
        "question": "Deine Bus-App zeigt keine Abfahrtszeiten mehr an, einen Neustart hast du schon versucht. Nun fragst du deinen Mitbewohner Timo, der sich mit Apps auskennt. Was tust du?",
        "hinweis": "Überleg: Was muss Timo wissen?",
        "answers": [
          "Ich zeige Timo die App und sage, dass ich sie schon neu gestartet habe.",
          "Ich sage nur: Mein Handy geht nicht. Den Fehler findet Timo dann schon.",
          "Ich drücke Timo mein Handy in die Hand und verschwinde in mein Zimmer."
        ],
        "feedbackCorrect": "Timo sieht das Problem sofort und weiß, was du schon versucht hast – so kann er dir schneller helfen.",
        "feedbackWrong": [
          null,
          "Dann muss Timo lange suchen. Zeig ihm die App und sag, was du schon versucht hast.",
          "Bleib lieber dabei: Dann siehst du, was Timo macht, und kannst es beim nächsten Mal vielleicht selbst."
        ],
        "remember": "Ich zeige das Problem und sage, was ich schon versucht habe."
      }
    },
    "hilfe/kurz/Was ist los?": {
      "einfach": {
        "question": "Du schickst deiner Schwester eine Nachricht, aber sie geht nicht raus. Neben der Nachricht steht: Nicht gesendet. Was ist los?",
        "hinweis": "Überlege, ob jemand in Gefahr ist oder ob nur etwas nicht klappt.",
        "answers": [
          "Etwas klappt gerade nicht, deshalb probiere ich es gleich noch einmal.",
          "Mein Handy ist kaputt, deshalb bringe ich es gleich in den Laden.",
          "Das ist komisch. Ich mache Stopp und schreibe nichts mehr."
        ],
        "feedbackCorrect": "Oft ist nur das Internet kurz weg. Dann probierst du es noch einmal, und das kannst du selbst.",
        "feedbackWrong": [
          null,
          "Dein Handy ist wahrscheinlich nicht kaputt, denn oft ist nur das Internet kurz weg. Probier es erst selbst noch einmal. Wenn es dann immer noch nicht klappt, holst du dir Hilfe.",
          "Stopp machst du, wenn dir etwas Druck oder Angst macht. Hier klappt nur etwas nicht, deshalb probierst du es gleich noch einmal."
        ],
        "remember": "Vieles kann ich selbst lösen."
      },
      "standard": {
        "question": "Du schickst deiner Schwester eine Nachricht, doch sie geht nicht raus. Daneben steht: Nicht gesendet. Was ist los?",
        "hinweis": "Überleg: Ist jemand in Gefahr – oder klappt nur etwas nicht?",
        "answers": [
          "Gerade klappt etwas nicht. Ich versuche es gleich noch einmal.",
          "Mein Handy ist kaputt. Ich bringe es gleich in den Laden.",
          "Das ist seltsam. Ich mache Stopp und schreibe nichts mehr."
        ],
        "feedbackCorrect": "Oft ist nur die Internetverbindung kurz unterbrochen. Dann versuchst du es einfach noch einmal – das kannst du selbst.",
        "feedbackWrong": [
          null,
          "Dein Handy ist wahrscheinlich nicht kaputt, oft ist nur die Internetverbindung kurz unterbrochen. Versuch es erst selbst noch einmal. Klappt es dann immer noch nicht, hol dir Hilfe.",
          "Stopp machst du bei Druck oder Angst. Hier klappt nur etwas nicht – versuch es gleich noch einmal."
        ],
        "remember": "Vieles kann ich selbst lösen."
      }
    },
    "hilfe/kurz/Was kann ich selbst tun?": {
      "einfach": {
        "question": "Es ist 23 Uhr, und in deiner Chat-Gruppe streiten sich alle. Jemand schreibt dir: Jetzt sag du auch mal was. Du bist aber müde. Was kannst du selbst tun?",
        "hinweis": "Überlege, ob du jetzt wirklich etwas schreiben musst.",
        "answers": [
          "Ich lese alles genau durch, damit ich nichts verpasse.",
          "Ich schreibe schnell meine Meinung, damit alle ihre Ruhe haben.",
          "Ich lege das Handy weg und antworte heute nicht mehr."
        ],
        "feedbackCorrect": "Die Gruppe macht dir Druck, aber du musst nicht mitmachen. Du darfst das Handy weglegen und morgen in Ruhe entscheiden.",
        "feedbackWrong": [
          "Du bist müde, und der Streit macht dir Druck. Du musst nicht alles lesen. Leg das Handy lieber weg.",
          "Eine schnelle Antwort macht den Streit oft größer. Du musst jetzt nichts schreiben, deshalb legst du das Handy lieber weg.",
          null
        ],
        "remember": "Bei Druck oder Angst mache ich erst Stopp."
      },
      "standard": {
        "question": "Es ist 23 Uhr, in deiner Chat-Gruppe streiten sich alle. Jemand schreibt dir: Jetzt sag du auch mal was. Du bist müde. Was kannst du selbst tun?",
        "hinweis": "Überleg: Musst du jetzt wirklich etwas schreiben?",
        "answers": [
          "Ich lese alles genau durch – ich will nichts verpassen.",
          "Ich schreibe schnell meine Meinung, dann geben alle Ruhe.",
          "Ich lege das Handy weg. Heute antworte ich nicht mehr."
        ],
        "feedbackCorrect": "Die Gruppe setzt dich unter Druck, aber du musst nicht mitmachen. Leg das Handy weg und entscheide morgen in Ruhe.",
        "feedbackWrong": [
          "Du bist müde, und der Streit setzt dich unter Druck. Du musst nicht alles lesen – leg das Handy lieber weg.",
          "Eine schnelle Antwort heizt den Streit oft noch an. Du musst jetzt nichts schreiben – leg das Handy lieber weg.",
          null
        ],
        "remember": "Bei Druck oder Angst mache ich erst Stopp."
      }
    },
    "hilfe/kurz/Welche Hilfe passt?": {
      "einfach": {
        "question": "Du hast ein neues Handy, aber deine Fotos sind noch auf dem alten. Du weißt nicht, wie die Fotos auf das neue Handy kommen. Welche Hilfe passt?",
        "hinweis": "Überlege, ob das eine Frage zum Handy ist oder ob dir etwas Angst macht.",
        "answers": [
          "Ich rufe bei einer Beratungsstelle an, weil die bei Problemen hilft.",
          "Ich frage meine Nachbarin, die sich mit Handys auskennt.",
          "Ich lasse das, weil ich es sowieso nicht allein schaffe."
        ],
        "feedbackCorrect": "Das ist eine Frage zum Handy. Deine Nachbarin kennt sich mit Handys aus, deshalb kann sie dir gut helfen.",
        "feedbackWrong": [
          "Eine Beratungsstelle hilft vor allem bei Sorgen und Angst. Bei einer Frage zum Handy fragst du besser eine Person, die sich mit Handys auskennt.",
          null,
          "Du darfst dir dabei helfen lassen. Eine Person, die sich mit Handys auskennt, kann dir helfen."
        ],
        "remember": "Ich hole mir die Hilfe, die passt."
      },
      "standard": {
        "question": "Du hast ein neues Handy, deine Fotos liegen aber noch auf dem alten. Du weißt nicht, wie du sie überträgst. Welche Hilfe passt?",
        "hinweis": "Überleg: Ist das eine Frage zum Handy – oder macht dir etwas Angst?",
        "answers": [
          "Ich rufe bei einer Beratungsstelle an, die hilft ja bei Problemen.",
          "Ich frage meine Nachbarin, die sich mit Handys auskennt.",
          "Ich lasse es bleiben, allein schaffe ich das sowieso nicht."
        ],
        "feedbackCorrect": "Das ist eine Frage zum Handy, und deine Nachbarin kennt sich damit aus – sie kann dir gut helfen.",
        "feedbackWrong": [
          "Eine Beratungsstelle hilft vor allem bei Sorgen und Angst. Bei einer Frage zum Handy fragst du besser jemanden, der sich mit Handys auskennt.",
          null,
          "Du darfst dir dabei helfen lassen: Jemand, der sich mit Handys auskennt, kann dir das zeigen."
        ],
        "remember": "Ich hole mir die passende Hilfe."
      }
    },
    "Du willst in der Wetter-App nachsehen: Regnet es heute? Aber die App bewegt sich nicht mehr. Du tippst. Nichts passiert. Was machst du zuerst?": {
      "einfach": {
        "question": "Du willst in der Wetter-App nachsehen, ob es heute regnet. Aber die App bewegt sich nicht mehr, und wenn du tippst, passiert nichts. Was machst du zuerst?",
        "hinweis": "Überlege, was du selbst mit der App machen kannst.",
        "answers": [
          "Ich schließe die App und öffne sie dann noch einmal.",
          "Ich lösche alle Apps, damit das Handy wieder frei ist.",
          "Ich tippe ganz fest und ganz oft auf den Bildschirm."
        ],
        "feedbackCorrect": "Eine App hängt manchmal. Dann schließt du sie und öffnest sie neu. Das klappt oft, und das kannst du selbst.",
        "feedbackWrong": [
          null,
          "Dann sind alle deine Apps weg, und das ist nicht nötig. Schließ nur diese eine App und öffne sie neu.",
          "Fest tippen hilft nicht, weil die App hängt. Schließ die App und öffne sie neu."
        ],
        "remember": "Vieles kann ich selbst lösen."
      },
      "standard": {
        "question": "Du willst in der Wetter-App nachsehen, ob es heute regnet. Doch die App reagiert nicht mehr – du tippst, und nichts passiert. Was tust du zuerst?",
        "hinweis": "Überleg: Was kannst du selbst mit der App tun?",
        "answers": [
          "Ich schließe die App und öffne sie neu.",
          "Ich lösche alle Apps, dann ist das Handy wieder frei.",
          "Ich tippe ganz fest und immer wieder auf den Bildschirm."
        ],
        "feedbackCorrect": "Apps hängen manchmal. Dann schließt du sie und öffnest sie neu – das hilft oft, und das kannst du selbst.",
        "feedbackWrong": [
          null,
          "Dann sind alle deine Apps gelöscht – das ist nicht nötig. Schließ nur diese eine App und öffne sie neu.",
          "Fest tippen hilft nicht, die App hängt. Schließ sie und öffne sie neu."
        ],
        "remember": "Vieles kann ich selbst lösen."
      }
    },
    "Du schaust Nachrichten auf dem Handy. Ein Video zeigt einen schweren Unfall. Die Feuerwehr ist schon da. Das Video macht dir Angst. Was ist los? Was passt jetzt?": {
      "einfach": {
        "question": "Du schaust Nachrichten auf dem Handy. Ein Video zeigt einen schweren Unfall, bei dem die Feuerwehr schon da ist. Das Video macht dir Angst. Was ist los, und was passt jetzt?",
        "hinweis": "Überlege, ob du in Gefahr bist oder ob dir etwas Angst macht.",
        "answers": [
          "Das ist ein Notfall, deshalb rufe ich sofort 112 an.",
          "Ich schaue noch mehr Videos, weil ich alles genau wissen will.",
          "Ich mache das Video aus und rede mit jemandem darüber."
        ],
        "feedbackCorrect": "Das Video macht dir Angst, deshalb hörst du auf zu schauen. Reden hilft oft, und du bist mit der Angst nicht allein.",
        "feedbackWrong": [
          "Die Feuerwehr ist schon da, und du bist nicht in Gefahr. Aber das Video macht dir Angst. Mach es aus und rede mit jemandem darüber.",
          "Mehr Videos machen die Angst oft größer. Mach das Video aus und rede mit jemandem darüber.",
          null
        ],
        "remember": "Bei Druck oder Angst mache ich erst Stopp."
      },
      "standard": {
        "question": "Du siehst dir Nachrichten auf dem Handy an. Ein Video zeigt einen schweren Unfall, die Feuerwehr ist bereits vor Ort. Das Video macht dir Angst. Was ist los – und was passt jetzt?",
        "hinweis": "Überleg: Bist du in Gefahr – oder macht dir etwas Angst?",
        "answers": [
          "Das ist ein Notfall – ich rufe sofort die 112 an.",
          "Ich sehe mir noch mehr Videos an, ich will alles genau wissen.",
          "Ich mache das Video aus und rede mit jemandem darüber."
        ],
        "feedbackCorrect": "Das Video macht dir Angst – also hörst du auf zu schauen. Reden hilft oft, und du bist mit der Angst nicht allein.",
        "feedbackWrong": [
          "Die Feuerwehr ist schon da, und du selbst bist nicht in Gefahr. Aber das Video macht dir Angst: Mach es aus und rede mit jemandem darüber.",
          "Noch mehr Videos machen die Angst oft größer. Mach das Video aus und rede mit jemandem darüber.",
          null
        ],
        "remember": "Bei Druck oder Angst mache ich erst Stopp."
      }
    },
    "Du rufst deine Oma an. Du hörst sie gut. Aber Oma sagt: Hallo? Ich höre dich nicht. Was machst du zuerst?": {
      "einfach": {
        "question": "Du rufst deine Oma an und hörst sie gut. Aber Oma sagt: Hallo? Ich höre dich nicht. Was machst du zuerst?",
        "hinweis": "Überlege, wer wen nicht hört und was du an deinem Handy nachsehen kannst.",
        "answers": [
          "Ich rufe ganz laut ins Handy, damit Oma mich hört.",
          "Ich schaue auf den Bildschirm, ob mein Mikrofon aus ist.",
          "Omas Handy ist kaputt, deshalb soll sie ein neues kaufen."
        ],
        "feedbackCorrect": "Vielleicht hast du aus Versehen das Mikrofon ausgemacht. Das siehst du auf dem Bildschirm, und das kannst du selbst ändern.",
        "feedbackWrong": [
          "Lauter rufen hilft nicht, weil Oma dich gar nicht hört. Vielleicht ist dein Mikrofon aus. Schau auf den Bildschirm.",
          null,
          "Du hörst Oma gut, aber sie hört dich nicht. Deshalb liegt das Problem wahrscheinlich bei dir. Schau nach, ob dein Mikrofon aus ist."
        ],
        "remember": "Vieles kann ich selbst lösen."
      },
      "standard": {
        "question": "Du rufst deine Oma an und hörst sie gut. Aber sie sagt: Hallo? Ich höre dich nicht. Was tust du zuerst?",
        "hinweis": "Überleg: Wer hört wen nicht – und was kannst du an deinem Handy nachsehen?",
        "answers": [
          "Ich rufe ganz laut ins Handy, dann hört Oma mich schon.",
          "Ich sehe auf dem Bildschirm nach, ob mein Mikrofon aus ist.",
          "Omas Handy ist kaputt – sie soll sich ein neues kaufen."
        ],
        "feedbackCorrect": "Vielleicht hast du versehentlich das Mikrofon ausgeschaltet. Das siehst du auf dem Bildschirm – und kannst es selbst ändern.",
        "feedbackWrong": [
          "Lauter rufen hilft nicht, Oma hört dich gar nicht. Vielleicht ist dein Mikrofon aus – sieh auf dem Bildschirm nach.",
          null,
          "Du hörst Oma gut, sie dich aber nicht. Das Problem liegt also wahrscheinlich bei dir: Sieh nach, ob dein Mikrofon aus ist."
        ],
        "remember": "Vieles kann ich selbst lösen."
      }
    },
    "Ein fremder Mann schreibt dir jeden Tag. Du hast ihm geschrieben: Bitte schreib mir nicht mehr. Er schreibt trotzdem weiter. Was machst du jetzt?": {
      "einfach": {
        "question": "Ein fremder Mann schreibt dir jeden Tag. Du hast ihm geschrieben: Bitte schreib mir nicht mehr. Er schreibt aber trotzdem weiter. Was machst du jetzt?",
        "hinweis": "Er hört nicht auf. Überlege, was du selbst am Handy machen kannst.",
        "answers": [
          "Ich schreibe ihm zurück: Du nervst. Hör jetzt endlich auf.",
          "Ich blockiere ihn, damit er mir nicht mehr schreiben kann.",
          "Ich zeige die Nachrichten einer Person, der ich vertraue.",
          "Ich antworte ihm freundlich, weil er dann bestimmt aufhört."
        ],
        "feedbackCorrect": "Du hast schon Nein gesagt, aber er hört nicht auf. Dann blockierst du ihn, und das kannst du selbst.",
        "feedbackWrong": [
          "Dann antwortest du ihm wieder, und er merkt, dass du seine Nachrichten liest. Blockier ihn lieber.",
          null,
          null,
          "Du hast ihm schon geschrieben, und er hört trotzdem nicht auf. Noch mehr Antworten helfen nicht. Blockier ihn lieber."
        ],
        "feedbackAuch": [
          null,
          null,
          "Es ist gut, dass du die Nachrichten einer Person zeigst. Du kannst ihn aber auch selbst blockieren, dann schreibt er dir nicht mehr.",
          null
        ],
        "remember": "Vieles kann ich selbst lösen."
      },
      "standard": {
        "question": "Ein fremder Mann schreibt dir jeden Tag. Du hast ihm geschrieben: Bitte schreib mir nicht mehr. Er macht trotzdem weiter. Was tust du jetzt?",
        "hinweis": "Er hört nicht auf. Überleg: Was kannst du selbst am Handy tun?",
        "answers": [
          "Ich schreibe zurück: Du nervst. Hör jetzt endlich auf.",
          "Ich blockiere ihn, dann kann er mir nicht mehr schreiben.",
          "Ich zeige die Nachrichten einer Person, der ich vertraue.",
          "Ich antworte ihm freundlich, dann hört er bestimmt auf."
        ],
        "feedbackCorrect": "Du hast schon Nein gesagt, und er hört nicht auf. Dann blockierst du ihn – das kannst du selbst.",
        "feedbackWrong": [
          "Damit antwortest du ihm wieder, und er merkt, dass du seine Nachrichten liest. Blockier ihn lieber.",
          null,
          null,
          "Du hast ihm schon geschrieben, und er macht trotzdem weiter. Noch mehr Antworten helfen nicht – blockier ihn lieber."
        ],
        "feedbackAuch": [
          null,
          null,
          "Gut, dass du die Nachrichten jemandem zeigst. Du kannst ihn aber auch selbst blockieren, dann schreibt er dir nicht mehr.",
          null
        ],
        "remember": "Vieles kann ich selbst lösen."
      }
    },
    "Dein Handy geht seit gestern nicht mehr ins Internet. Du hast das Handy schon neu gestartet. Es klappt immer noch nicht. Was machst du jetzt?": {
      "einfach": {
        "question": "Dein Handy geht seit gestern nicht mehr ins Internet. Du hast es schon neu gestartet, aber es klappt immer noch nicht. Was machst du jetzt?",
        "hinweis": "Überlege, was du schon probiert hast.",
        "answers": [
          "Ich kaufe ein neues Handy, weil das alte bestimmt kaputt ist.",
          "Ich starte das Handy noch 10 Mal neu, weil es irgendwann klappt.",
          "Ich frage meinen Cousin, der sich mit dem Internet auskennt."
        ],
        "feedbackCorrect": "Du hast schon selbst etwas probiert und kommst jetzt nicht weiter. Dann holst du dir Hilfe. Dein Cousin kennt sich mit dem Internet aus.",
        "feedbackWrong": [
          "Dein Handy ist wahrscheinlich nicht kaputt. Vielleicht ist nur das Internet zu Hause gestört. Frag eine Person, die sich mit dem Internet auskennt.",
          "Du hast schon neu gestartet, und noch öfter neu starten hilft meistens nicht. Jetzt ist Hilfe gut. Frag eine Person, die sich mit dem Internet auskennt.",
          null
        ],
        "remember": "Ich hole mir die Hilfe, die passt."
      },
      "standard": {
        "question": "Seit gestern kommt dein Handy nicht mehr ins Internet. Einen Neustart hast du schon versucht – ohne Erfolg. Was tust du jetzt?",
        "hinweis": "Überleg: Was hast du schon versucht?",
        "answers": [
          "Ich kaufe ein neues Handy, das alte ist bestimmt kaputt.",
          "Ich starte das Handy noch zehnmal neu, irgendwann klappt es schon.",
          "Ich frage meinen Cousin, der sich mit dem Internet auskennt."
        ],
        "feedbackCorrect": "Du hast schon selbst etwas versucht und kommst nicht weiter. Dann holst du dir Hilfe – dein Cousin kennt sich mit dem Internet aus.",
        "feedbackWrong": [
          "Dein Handy ist wahrscheinlich nicht kaputt. Vielleicht ist nur das Internet zu Hause gestört. Frag jemanden, der sich damit auskennt.",
          "Neu gestartet hast du schon – noch öfter hilft meistens nicht. Jetzt ist Hilfe sinnvoll: Frag jemanden, der sich mit dem Internet auskennt.",
          null
        ],
        "remember": "Ich hole mir die passende Hilfe."
      }
    },
    "In der Chat-Gruppe von deiner Arbeit ist ein Foto von dir. Darauf schläfst du in der Pause. Alle lachen darüber. Du bist traurig und wütend. Welche Hilfe passt?": {
      "einfach": {
        "question": "In der Chat-Gruppe von deiner Arbeit steht ein Foto von dir, auf dem du in der Pause schläfst. Alle lachen darüber, und du bist traurig und wütend. Welche Hilfe passt?",
        "hinweis": "Überlege, wer dir bei so etwas helfen kann.",
        "answers": [
          "Ich rede mit meiner Gruppenleiterin und zeige ihr den Chat.",
          "Ich schreibe in die Gruppe: Ihr seid alle total gemein.",
          "Ich sage nichts, weil das bestimmt nur Spaß war."
        ],
        "feedbackCorrect": "Das Foto ist gemein, und das musst du nicht aushalten. Deine Gruppenleiterin kann helfen. Zusammen überlegt ihr, wie das Foto aus der Gruppe kommt.",
        "feedbackWrong": [
          null,
          "Du darfst wütend sein. Aber dann gibt es vielleicht noch mehr Streit. Rede lieber mit einer Person, der du vertraust.",
          "Das Foto macht dich traurig, deshalb ist es für dich kein Spaß. Du musst das nicht aushalten. Rede mit einer Person, der du vertraust."
        ],
        "remember": "Ich hole mir die Hilfe, die passt."
      },
      "standard": {
        "question": "In der Chat-Gruppe deiner Arbeit taucht ein Foto von dir auf: Du schläfst in der Pause. Alle lachen darüber, du bist traurig und wütend. Welche Hilfe passt?",
        "hinweis": "Überleg: Wer kann dir bei so etwas helfen?",
        "answers": [
          "Ich rede mit meiner Gruppenleiterin und zeige ihr den Chat.",
          "Ich schreibe in die Gruppe: Ihr seid alle total gemein.",
          "Ich sage nichts – das war bestimmt nur Spaß."
        ],
        "feedbackCorrect": "Das Foto ist verletzend, und das musst du nicht hinnehmen. Deine Gruppenleiterin kann helfen – gemeinsam überlegt ihr, wie das Foto aus der Gruppe verschwindet.",
        "feedbackWrong": [
          null,
          "Du darfst wütend sein. Aber so gibt es vielleicht noch mehr Streit. Rede lieber mit einer Person, der du vertraust.",
          "Das Foto macht dich traurig – für dich ist es also kein Spaß. Du musst das nicht hinnehmen. Rede mit einer Person, der du vertraust."
        ],
        "remember": "Ich hole mir die passende Hilfe."
      }
    },
    "Du findest die Taschenlampe auf deinem Handy nicht mehr. Du hast schon selbst gesucht. Du fragst deinen Bruder. Er sagt: Keine Ahnung. Ich habe ein anderes Handy. Was machst du jetzt?": {
      "einfach": {
        "question": "Du findest die Taschenlampe auf deinem Handy nicht mehr, obwohl du schon selbst gesucht hast. Du fragst deinen Bruder. Er sagt: Keine Ahnung. Ich habe ein anderes Handy. Was machst du jetzt?",
        "hinweis": "Überlege, wer dir noch helfen kann.",
        "answers": [
          "Ich frage eine andere Person, die mein Handy vielleicht kennt.",
          "Ich gebe auf, weil es ohne Taschenlampe auch ganz gut geht.",
          "Ich frage meinen Bruder immer wieder, bis er es irgendwann weiß."
        ],
        "feedbackCorrect": "Dein Bruder kennt dein Handy nicht, deshalb fragst du eine andere Person. Das kann jemand im Handy-Laden sein oder eine Person mit dem gleichen Handy.",
        "feedbackWrong": [
          null,
          "Du musst nicht aufgeben. Dein Bruder kann nicht helfen, aber eine andere Person kann es vielleicht.",
          "Dein Bruder kennt dein Handy nicht, und er weiß es auch morgen nicht. Frag lieber eine andere Person."
        ],
        "remember": "Ich hole mir die Hilfe, die passt."
      },
      "standard": {
        "question": "Du findest die Taschenlampe auf deinem Handy nicht mehr und hast schon selbst gesucht. Du fragst deinen Bruder, doch er sagt: Keine Ahnung. Ich habe ein anderes Handy. Was tust du jetzt?",
        "hinweis": "Überleg: Wer kann dir noch helfen?",
        "answers": [
          "Ich frage jemand anderen – vielleicht kennt die Person mein Handy.",
          "Ich gebe auf. Ohne Taschenlampe geht es auch.",
          "Ich frage meinen Bruder trotzdem immer wieder, irgendwann weiß er es."
        ],
        "feedbackCorrect": "Dein Bruder kennt dein Handy nicht, also fragst du jemand anderen – zum Beispiel im Handy-Laden oder eine Person mit dem gleichen Handy.",
        "feedbackWrong": [
          null,
          "Aufgeben musst du nicht. Dein Bruder kann nicht helfen, jemand anderes aber vielleicht schon.",
          "Dein Bruder kennt dein Handy nicht – das ändert sich auch morgen nicht. Frag lieber jemand anderen."
        ],
        "remember": "Ich hole mir die passende Hilfe."
      }
    },
    "Du besuchst deinen Opa. Ihr schaut zusammen Fotos auf dem Handy an. Plötzlich kippt Opa vom Stuhl. Er sagt nichts mehr. Er bewegt sich nicht. Was machst du?": {
      "einfach": {
        "question": "Du besuchst deinen Opa, und ihr schaut zusammen Fotos auf dem Handy an. Plötzlich kippt Opa vom Stuhl. Er sagt nichts mehr und bewegt sich nicht. Was machst du?",
        "hinweis": "Überlege, ob Opa jetzt in Gefahr ist.",
        "answers": [
          "Ich warte ein paar Minuten, weil Opa vielleicht gleich wieder aufsteht.",
          "Ich rufe sofort 112 an und erzähle, dass Opa umgefallen ist.",
          "Ich schreibe in die Familien-Gruppe, dass Opa umgefallen ist."
        ],
        "feedbackCorrect": "Opa ist in Gefahr, und das ist ein Notfall. Du rufst sofort 112 an. Die Leute am Telefon helfen dir und fragen dich alles Wichtige.",
        "feedbackWrong": [
          "Opa bewegt sich nicht und braucht jetzt Hilfe. Warte nicht, sondern ruf sofort 112 an.",
          null,
          "Die Familie sieht die Nachricht vielleicht erst später, aber Opa braucht jetzt Hilfe. Ruf zuerst 112 an. Danach kannst du der Familie schreiben."
        ],
        "remember": "Jemand ist in Gefahr? Dann ruf sofort 110 oder 112."
      },
      "standard": {
        "question": "Du bist bei deinem Opa zu Besuch, ihr seht euch zusammen Fotos auf dem Handy an. Plötzlich kippt er vom Stuhl, sagt nichts mehr und bewegt sich nicht. Was tust du?",
        "hinweis": "Überleg: Ist Opa in diesem Moment in Gefahr?",
        "answers": [
          "Ich warte ein paar Minuten, vielleicht steht Opa gleich wieder auf.",
          "Ich rufe sofort die 112 an und sage, dass Opa umgefallen ist.",
          "Ich schreibe in die Familien-Gruppe: Opa ist umgefallen."
        ],
        "feedbackCorrect": "Opa ist in Gefahr – ein Notfall. Du rufst sofort die 112 an. Die Leitstelle hilft dir weiter und fragt alles Wichtige ab.",
        "feedbackWrong": [
          "Opa bewegt sich nicht, er braucht jetzt Hilfe. Warte nicht – ruf sofort die 112 an.",
          null,
          "Die Familie liest die Nachricht vielleicht erst später, Opa braucht aber jetzt Hilfe. Ruf zuerst die 112 an, danach kannst du der Familie schreiben."
        ],
        "remember": "Jemand ist in Gefahr? Dann ruf sofort 110 oder 112."
      }
    },
    "Unter einem Video liest du einen Kommentar. Er macht sich über Menschen im Rollstuhl lustig. Der Kommentar ist nicht gegen dich. Was machst du?": {
      "einfach": {
        "question": "Unter einem Video liest du einen Kommentar, der sich über Menschen im Rollstuhl lustig macht. Der Kommentar ist nicht gegen dich gerichtet. Was machst du?",
        "hinweis": "Überlege, was du selbst in der App tun kannst.",
        "answers": [
          "Ich teile den Kommentar mit allen, damit alle sehen, wie gemein das ist.",
          "Ich scrolle einfach weiter, weil ich nicht darauf antworten muss.",
          "Ich melde den Kommentar, damit die App ihn prüft.",
          "Ich antworte darunter: Du bist so dumm."
        ],
        "feedbackCorrect": "Der Kommentar ist gemein, deshalb meldest du ihn. Dann prüft die App ihn, und vielleicht löscht sie ihn.",
        "feedbackWrong": [
          "Dann sehen noch mehr Menschen den gemeinen Kommentar. Melde ihn lieber, damit die App ihn prüft.",
          null,
          null,
          "Dann gibt es vielleicht Streit unter dem Video. Du musst nicht antworten. Melde den Kommentar lieber."
        ],
        "feedbackAuch": [
          null,
          "Es ist gut, dass du nicht antwortest. Du kannst den Kommentar auch melden, dann prüft die App ihn.",
          null,
          null
        ],
        "remember": "Vieles kann ich selbst lösen."
      },
      "standard": {
        "question": "Unter einem Video liest du einen Kommentar, der sich über Menschen im Rollstuhl lustig macht. Gegen dich richtet er sich nicht. Was tust du?",
        "hinweis": "Überleg: Was kannst du selbst in der App tun?",
        "answers": [
          "Ich teile den Kommentar mit allen – sollen ruhig alle sehen, wie gemein das ist.",
          "Ich scrolle einfach weiter. Antworten muss ich darauf nicht.",
          "Ich melde den Kommentar, dann prüft ihn die App.",
          "Ich antworte darunter: Du bist so dumm."
        ],
        "feedbackCorrect": "Der Kommentar ist verletzend, also meldest du ihn. Die App prüft ihn dann und löscht ihn vielleicht.",
        "feedbackWrong": [
          "So sehen noch mehr Menschen den Kommentar. Melde ihn lieber, dann prüft ihn die App.",
          null,
          null,
          "Dann gibt es vielleicht Streit unter dem Video. Antworten musst du nicht – melde den Kommentar lieber."
        ],
        "feedbackAuch": [
          null,
          "Gut, dass du nicht darauf antwortest. Du kannst den Kommentar auch melden, dann prüft ihn die App.",
          null,
          null
        ],
        "remember": "Vieles kann ich selbst lösen."
      }
    },
    "hilfe/neu/was-ist-los": {
      "einfach": {
        "question": "Was ist hier los?",
        "hinweis": "Schau genau hin, wie Kevin schreibt und was er will.",
        "answers": [
          "Nichts Schlimmes. Kevin ist eben sauer.",
          "Kevin macht mir Druck, und ich soll schweigen.",
          "Ich war gemein, deshalb lösche ich den Kommentar sofort."
        ],
        "feedbackCorrect": "Kevin will, dass du sofort etwas tust. Er droht dir, und du sollst es geheim halten. Das ist Druck.",
        "feedbackWrong": [
          "Kevin darf sauer sein. Aber er droht dir, und du sollst es geheim halten. Das ist Druck, deshalb machst du erst Stopp.",
          null,
          "Vielleicht war dein Kommentar nicht gut. Das kannst du später in Ruhe klären. Aber Kevin macht dir Druck, und du musst jetzt nichts tun."
        ],
        "remember": "Bei Druck oder Angst mache ich erst Stopp."
      },
      "standard": {
        "question": "Was ist hier los?",
        "hinweis": "Sieh genau hin: Wie schreibt Kevin – und was will er?",
        "answers": [
          "Nichts Schlimmes, Kevin ist nur wütend.",
          "Kevin setzt mich unter Druck, und ich soll schweigen.",
          "Ich war gemein, also lösche ich den Kommentar sofort."
        ],
        "feedbackCorrect": "Kevin verlangt, dass du sofort etwas tust, er droht dir, und du sollst es für dich behalten. Das ist Druck.",
        "feedbackWrong": [
          "Kevin darf sauer sein. Aber er droht dir, und du sollst es für dich behalten – das ist Druck. Dann machst du erst einmal Stopp.",
          null,
          "Vielleicht war dein Kommentar nicht in Ordnung. Das lässt sich später in Ruhe klären. Aber Kevin setzt dich unter Druck – jetzt musst du gar nichts tun."
        ],
        "remember": "Bei Druck oder Angst mache ich erst Stopp."
      }
    },
    "hilfe/neu/selbst": {
      "einfach": {
        "question": "Was kannst du jetzt selbst tun?",
        "hinweis": "Überlege, ob du heute Abend noch etwas tun musst.",
        "answers": [
          "Ich lösche den Kommentar sofort und schreibe: Tut mir leid.",
          "Heute antworte ich nicht mehr, und morgen überlege ich in Ruhe.",
          "Ich mache ein Bild vom Bildschirm und lege dann das Handy weg."
        ],
        "feedbackCorrect": "Kevin macht Druck, deshalb machst du erst Stopp. Du musst nicht sofort antworten. Morgen entscheidest du in Ruhe, was du willst.",
        "feedbackWrong": [
          "Vielleicht willst du den Kommentar später löschen, und das darfst du. Aber nicht jetzt unter Druck. Erst machst du Stopp, dann entscheidest du in Ruhe.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Du antwortest nicht, und du hast den Chat gesichert. So kannst du ihn später zeigen."
        ],
        "remember": "Bei Druck oder Angst mache ich erst Stopp."
      },
      "standard": {
        "question": "Was kannst du jetzt selbst tun?",
        "hinweis": "Überleg: Musst du heute Abend noch etwas tun?",
        "answers": [
          "Ich lösche den Kommentar sofort und schreibe: Tut mir leid.",
          "Heute antworte ich nicht mehr. Morgen überlege ich in Ruhe.",
          "Ich mache einen Screenshot und lege das Handy weg."
        ],
        "feedbackCorrect": "Kevin macht Druck, also machst du erst einmal Stopp. Sofort antworten musst du nicht – morgen entscheidest du in Ruhe, was du willst.",
        "feedbackWrong": [
          "Vielleicht willst du den Kommentar später löschen, das darfst du. Aber nicht jetzt unter Druck: erst Stopp, dann in Ruhe entscheiden.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Du antwortest nicht und hast den Chat gesichert. So kannst du ihn später zeigen."
        ],
        "remember": "Bei Druck oder Angst mache ich erst Stopp."
      }
    },
    "hilfe/neu/welche-hilfe": {
      "einfach": {
        "question": "Am nächsten Tag schreibt Kevin wieder das Gleiche. Welche Hilfe passt jetzt?",
        "hinweis": "Überlege, ob gerade jemand in Gefahr ist oder ob du jemanden zum Reden brauchst.",
        "answers": [
          "Ich zeige den Chat einer vertrauten Person.",
          "Ich rufe bei einer Beratungsstelle an.",
          "Ich rufe sofort die Polizei an: 110."
        ],
        "feedbackCorrect": "Du bist damit nicht allein. Zeig der Person den Chat, dann überlegt ihr zusammen, was du jetzt machst.",
        "feedbackWrong": [
          null,
          null,
          "Hier ist gerade niemand in Gefahr, deshalb passt 110 hier nicht. Wenn jemand jetzt in Gefahr ist, rufst du sofort 110 oder 112. Hier zeigst du den Chat zuerst einer Person, der du vertraust. Zusammen überlegt ihr, was du jetzt machst und ob ihr zur Polizei geht."
        ],
        "feedbackAuch": [
          null,
          "Eine Beratungsstelle kennt sich mit so etwas aus. Du kannst den Chat auch einer Person zeigen, der du vertraust.",
          null
        ],
        "remember": "Ich hole mir die Hilfe, die passt."
      },
      "standard": {
        "question": "Am nächsten Tag schreibt Kevin wieder dasselbe. Welche Hilfe passt jetzt?",
        "hinweis": "Überleg: Ist gerade jemand in Gefahr – oder brauchst du jemanden zum Reden?",
        "answers": [
          "Ich zeige den Chat einer vertrauten Person.",
          "Ich rufe bei einer Beratungsstelle an.",
          "Ich rufe sofort die Polizei an: 110."
        ],
        "feedbackCorrect": "Du bist damit nicht allein. Zeig der Person den Chat, dann überlegt ihr gemeinsam, was du jetzt tust.",
        "feedbackWrong": [
          null,
          null,
          "Im Moment ist niemand in Gefahr, deshalb passt die 110 hier nicht. Ist jemand akut in Gefahr, rufst du sofort 110 oder 112. Hier zeigst du den Chat zuerst einer Person, der du vertraust – gemeinsam überlegt ihr, wie es weitergeht und ob ihr zur Polizei geht."
        ],
        "feedbackAuch": [
          null,
          "Eine Beratungsstelle kennt sich mit solchen Fällen aus. Du kannst den Chat auch einer Person zeigen, der du vertraust.",
          null
        ],
        "remember": "Ich hole mir die passende Hilfe."
      }
    }
  },

  /* Kernquiz (05.10.2026): eigene Lerntexte der ausgewählten Fragen.
     Neue Fragen unter fester ID, bisherige unter ihrer aktuellen Leicht-Frage. */
  "whatsapp": {
    "Eine unbekannte Nummer schickt dir ein Foto. Was machst du?": {
      "einfach": {
        "question": "Du bekommst ein Foto von einer Nummer, die du nicht kennst. Was machst du?",
        "hinweis": "Du weißt nicht, wer die Nummer benutzt. Überlege, was das für deine Antwort bedeutet.",
        "answers": [
          "Ich antworte gleich auf die Nachricht.",
          "Ich antworte nicht und blockiere die Nummer.",
          "Ich antworte der Nummer mit einem Foto."
        ],
        "feedbackWrong": [
          "Du weißt nicht, wer dir geschrieben hat. Deshalb antwortest du lieber nicht.",
          null,
          "Wenn du ein Foto zurückschickst, hat jemand mit einer fremden Nummer ein Bild von dir."
        ],
        "feedbackCorrect": "Du kennst die Nummer nicht und musst nicht antworten. Wenn du sie blockierst, kommt von ihr nichts mehr."
      },
      "standard": {
        "question": "Eine unbekannte Nummer schickt dir ein Foto. Wie reagierst du?",
        "hinweis": "Du weißt nicht, wer hinter der Nummer steckt. Was bedeutet das für deine Antwort?",
        "answers": [
          "Ich antworte sofort auf diese Nachricht.",
          "Ich antworte nicht und blockiere die Nummer.",
          "Ich schicke ein Foto zurück."
        ],
        "feedbackWrong": [
          "Du weißt nicht, wer hinter der Nummer steckt. Antworte deshalb lieber nicht.",
          null,
          "So bekommt jemand mit einer unbekannten Nummer ein Bild von dir."
        ],
        "feedbackCorrect": "Du kennst die Nummer nicht und musst nicht antworten. Nach dem Blockieren kommt von ihr nichts mehr."
      }
    },
    "whatsapp/quiz/gutschein-gruppe": {
      "einfach": {
        "question": "In der WhatsApp-Gruppe von deinem Sportverein steht: Gutschein über 50 Euro für alle! Hier tippen. Was machst du?",
        "hinweis": "Überlege, warum eine ganze Gruppe auf einmal einen Gutschein bekommen soll.",
        "answers": [
          "Ich tippe auf den Link, weil 50 Euro viel Geld sind.",
          "Ich schicke den Link an meine Familie weiter.",
          "Ich tippe nicht auf den Link."
        ],
        "feedbackWrong": [
          "So ein Gutschein ist oft ein Trick, denn die Seite will deine Daten oder dein Geld.",
          "Dann landet der Trick auch bei deiner Familie. Deshalb schickst du so einen Link nicht weiter.",
          null
        ],
        "feedbackCorrect": "Gutscheine für alle sind oft ein Trick. Der Link kann auf eine falsche Seite führen, die deine Daten haben will."
      },
      "standard": {
        "question": "In der WhatsApp-Gruppe deines Sportvereins steht: Gutschein über 50 Euro für alle! Hier tippen. Was tust du?",
        "hinweis": "Warum sollte eine ganze Gruppe auf einmal einen Gutschein bekommen?",
        "answers": [
          "Ich tippe auf den Link, 50 Euro sind viel Geld.",
          "Ich leite den Link an meine Familie weiter.",
          "Ich tippe den Link nicht an."
        ],
        "feedbackWrong": [
          "Solche Gutscheine sind meist ein Trick – die Seite will an deine Daten oder an dein Geld.",
          "Damit landet der Trick auch bei deiner Familie. Solche Links leitest du besser nicht weiter.",
          null
        ],
        "feedbackCorrect": "Gutscheine für alle sind häufig ein Trick. Der Link kann auf eine gefälschte Seite führen, die deine Daten abgreifen will."
      }
    },
    "whatsapp/quiz/code-anruf": {
      "einfach": {
        "question": "Jemand ruft dich an: Hier ist der Handyladen. Wir haben dir eine SMS mit einem Code geschickt. Sag uns bitte den Code. Was machst du?",
        "hinweis": "Überlege, wofür der Code da ist und wer ihn kennen darf.",
        "answers": [
          "Ich sage den Code, weil der Laden mir helfen will.",
          "Ich sage den Code nicht und lege auf.",
          "Ich sage nur die ersten Zahlen vom Code."
        ],
        "feedbackWrong": [
          "Mit dem Code kann der Anrufer dein WhatsApp übernehmen. Der Code ist nur für dich, deshalb sagst du ihn niemandem.",
          null,
          "Der ganze Code ist geheim, auch ein Teil davon. Wer danach fragt, will dein WhatsApp, und du kannst einfach auflegen."
        ],
        "feedbackCorrect": "Der Code ist nur für dich bestimmt. Wer am Telefon nach dem Code fragt, will dein WhatsApp übernehmen, deshalb legst du auf."
      },
      "standard": {
        "question": "Ein Anruf: „Hier ist Ihr Handyladen. Wir haben Ihnen eine SMS mit einem Code geschickt. Nennen Sie uns bitte den Code.“ Wie reagierst du?",
        "hinweis": "Wofür ist der Code gedacht – und wer darf ihn kennen?",
        "answers": [
          "Ich nenne den Code, der Laden will mir ja helfen.",
          "Ich nenne den Code nicht und lege auf.",
          "Ich nenne nur die ersten Ziffern."
        ],
        "feedbackWrong": [
          "Mit dem Code kann der Anrufer dein WhatsApp-Konto übernehmen. Gib ihn deshalb niemandem weiter.",
          null,
          "Der ganze Code ist geheim, auch ein Teil davon. Wer danach fragt, will dein Konto – leg einfach auf."
        ],
        "feedbackCorrect": "Der Code ist nur für dich bestimmt. Wer am Telefon danach fragt, will dein WhatsApp-Konto übernehmen – du legst also auf."
      }
    },
    "whatsapp/lang/WhatsApp nutzen": {
      "einfach": {
        "question": "Eine Person aus deinem Sportverein schreibt dir sehr oft, und du möchtest das nicht. Musst du ihr antworten?",
        "answers": [
          "Ja, denn sonst bin ich unhöflich.",
          "Nein, denn ich entscheide selbst, wem ich antworte.",
          "Nein, aber ich schreibe ihr: Bitte schreib mir nicht so oft."
        ],
        "feedbackWrong": [
          "Du musst nicht antworten, auch nicht aus Höflichkeit. Du bestimmst selbst, mit wem du schreibst.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Das ist klar und freundlich, und die Person weiß danach Bescheid."
        ],
        "feedbackCorrect": "Du entscheidest selbst, wem du antwortest. Das ist nicht unhöflich.",
        "remember": "Ich entscheide selbst, wem ich eine Antwort schreibe."
      },
      "standard": {
        "question": "Jemand aus deinem Sportverein schreibt dir ständig, obwohl du das nicht möchtest. Musst du antworten?",
        "answers": [
          "Ja, sonst bin ich unhöflich.",
          "Nein, das entscheide ich selbst.",
          "Nein, aber ich schreibe: Bitte schreib mir nicht so oft."
        ],
        "feedbackWrong": [
          "Du musst nicht antworten, auch nicht aus Höflichkeit. Du bestimmst selbst, mit wem du schreibst.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Das ist klar und freundlich. Danach weiß die Person, woran sie ist."
        ],
        "feedbackCorrect": "Du entscheidest selbst, wem du antwortest. Unhöflich ist das nicht.",
        "remember": "Ich entscheide selbst, wem ich antworte."
      }
    },
    "whatsapp/lang/Fremde Nummer": {
      "einfach": {
        "question": "Eine Nummer, die du nicht kennst, schreibt dir: Du hast 500 Euro gewonnen. Schick uns deinen Namen und deine Adresse. Was machst du?",
        "answers": [
          "Ich schicke meinen Namen und meine Adresse, weil ich den Gewinn haben möchte.",
          "Ich melde die Nummer bei WhatsApp und blockiere sie danach.",
          "Ich antworte der Nummer nicht."
        ],
        "feedbackWrong": [
          "Dann hat eine fremde Person deinen Namen und deine Adresse. So ein Gewinn ist fast immer ein Trick.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Dann kann WhatsApp die Nummer prüfen, und sie kann dir nicht mehr schreiben.",
          null
        ],
        "feedbackCorrect": "Du kennst die Nummer nicht, und sie will deine privaten Daten haben. Deshalb antwortest du nicht.",
        "remember": "Ich antworte nicht sofort, wenn mir eine fremde Nummer schreibt."
      },
      "standard": {
        "question": "Eine unbekannte Nummer schreibt: Du hast 500 Euro gewonnen. Schick uns deinen Namen und deine Adresse. Wie reagierst du?",
        "answers": [
          "Ich schicke Namen und Adresse, schließlich möchte ich den Gewinn.",
          "Ich melde die Nummer bei WhatsApp und blockiere sie.",
          "Ich antworte nicht."
        ],
        "feedbackWrong": [
          "Damit hätte eine fremde Person deinen Namen und deine Adresse. Solche Gewinne sind fast immer ein Trick.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "WhatsApp kann die Nummer dann prüfen, und sie kann dir nicht mehr schreiben.",
          null
        ],
        "feedbackCorrect": "Du kennst die Nummer nicht, und sie will an deine privaten Daten. Deshalb antwortest du nicht.",
        "remember": "Bei unbekannten Nummern antworte ich nicht sofort."
      }
    },
    "whatsapp/lang/Geld und Betrug": {
      "einfach": {
        "question": "Eine Nummer, die du nicht kennst, schreibt dir: Hallo, hier ist deine Schwester. Mein Handy ist kaputt. Schick mir bitte schnell 300 Euro. Was machst du?",
        "answers": [
          "Ich schicke das Geld, weil meine Schwester Hilfe braucht.",
          "Ich schicke kein Geld und rufe ihre alte Nummer an.",
          "Ich schicke kein Geld und frage zuerst jemanden aus meiner Familie."
        ],
        "feedbackWrong": [
          "Du möchtest helfen, und genau das nutzen Betrüger aus. Die Nummer ist fremd, und dein Geld ist dann weg.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Das Geld bleibt bei dir, und gemeinsam merkt ihr schnell, ob die Geschichte stimmt."
        ],
        "feedbackCorrect": "Unter der alten Nummer erreichst du deine echte Schwester. So merkst du, ob die Nachricht stimmt.",
        "remember": "Ich schicke kein Geld an eine Nummer, die ich nicht kenne."
      },
      "standard": {
        "question": "Eine unbekannte Nummer schreibt: Hallo, hier ist deine Schwester. Mein Handy ist kaputt. Schick mir bitte schnell 300 Euro. Wie reagierst du?",
        "answers": [
          "Ich überweise das Geld, meine Schwester braucht schließlich Hilfe.",
          "Ich überweise nichts und rufe ihre bekannte Nummer an.",
          "Ich überweise nichts und frage zuerst jemanden aus der Familie."
        ],
        "feedbackWrong": [
          "Du möchtest helfen – genau darauf setzen Betrüger. Die Nummer ist fremd, und überwiesenes Geld ist meist verloren.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dein Geld bleibt bei dir, und zu zweit klärt sich schnell, ob die Geschichte stimmt."
        ],
        "feedbackCorrect": "Unter der bekannten Nummer erreichst du deine echte Schwester und merkst sofort, ob die Nachricht stimmt.",
        "remember": "Ich schicke kein Geld an fremde Nummern."
      }
    },
    "whatsapp/lang/Links in Nachrichten": {
      "einfach": {
        "question": "Eine Nummer, die du nicht kennst, schreibt dir: Dein Paket kommt nicht an. Tippe hier. Du wartest gerade wirklich auf ein Paket. Was machst du?",
        "answers": [
          "Ich tippe auf den Link, weil ich ja auf mein Paket warte.",
          "Ich tippe nicht und schaue selbst beim Paketdienst nach.",
          "Ich tippe auf den Link, aber ich gebe dort keine Daten ein."
        ],
        "feedbackWrong": [
          "Viele Menschen warten auf ein Paket, und das wissen Betrüger. Der Link kann auf eine falsche Seite führen, auf der jemand deine Daten haben will.",
          null,
          "Tippe besser gar nicht auf den Link, denn die falsche Seite sieht oft echt aus. Wenn du schon getippt hast, gib dort keine Daten ein."
        ],
        "feedbackCorrect": "Beim Paketdienst siehst du selbst, wo dein Paket ist. Der Link bleibt zu.",
        "remember": "Wenn ich einen Link nicht kenne, öffne ich ihn nicht sofort."
      },
      "standard": {
        "question": "Eine unbekannte Nummer schreibt: Dein Paket kann nicht zugestellt werden. Tippe hier. Du wartest tatsächlich gerade auf ein Paket. Wie reagierst du?",
        "answers": [
          "Ich tippe auf den Link, ich warte ja auf mein Paket.",
          "Ich tippe nicht und sehe selbst beim Paketdienst nach.",
          "Ich tippe auf den Link, gebe dort aber keine Daten ein."
        ],
        "feedbackWrong": [
          "Fast immer wartet irgendjemand auf ein Paket – darauf setzen Betrüger. Der Link kann auf eine gefälschte Seite führen, die deine Daten abgreifen will.",
          null,
          "Am besten öffnest du den Link gar nicht, denn gefälschte Seiten sehen oft echt aus. Falls du schon getippt hast, gib dort keine Daten ein."
        ],
        "feedbackCorrect": "Beim Paketdienst siehst du selbst, wo dein Paket ist. Der Link bleibt zu.",
        "remember": "Unbekannte Links öffne ich nicht sofort."
      }
    },
    "whatsapp/lang/WhatsApp-Code": {
      "einfach": {
        "question": "Du bekommst eine Nachricht: Hier ist WhatsApp. Wir sperren dein Konto. Schick uns den Code aus der SMS. Was machst du?",
        "answers": [
          "Ich schicke den Code, weil ich mein Konto behalten möchte.",
          "Ich frage zurück, ob die Nachricht wirklich von WhatsApp kommt.",
          "Ich schicke den Code nicht."
        ],
        "feedbackWrong": [
          "Die Nachricht soll dir Angst machen. Mit dem Code kann jemand dein WhatsApp übernehmen.",
          "Betrüger antworten einfach mit Ja, deshalb schützt dich die Frage nicht. Dein Code bleibt bei dir.",
          null
        ],
        "feedbackCorrect": "Der Code ist nur für dich bestimmt. Wer danach fragt, will dein Konto übernehmen.",
        "remember": "Ich behalte meinen WhatsApp-Code für mich, damit er geheim bleibt."
      },
      "standard": {
        "question": "Du erhältst die Nachricht: Hier ist WhatsApp. Wir sperren dein Konto. Schick uns den Code aus der SMS. Wie reagierst du?",
        "answers": [
          "Ich schicke den Code, ich möchte mein Konto behalten.",
          "Ich frage nach, ob die Nachricht wirklich von WhatsApp stammt.",
          "Ich gebe den Code nicht weiter."
        ],
        "feedbackWrong": [
          "Die Nachricht soll dir Angst machen. Mit dem Code kann jemand dein WhatsApp-Konto übernehmen.",
          "Betrüger antworten einfach mit Ja – die Rückfrage schützt dich also nicht. Behalte den Code für dich.",
          null
        ],
        "feedbackCorrect": "Der Code ist nur für dich bestimmt. Wer danach fragt, will dein Konto übernehmen.",
        "remember": "Ich halte meinen WhatsApp-Code geheim."
      }
    },
    "whatsapp/lang/Gruppen": {
      "einfach": {
        "question": "Du ziehst um und möchtest deine neue Adresse in die WhatsApp-Gruppe von deiner Arbeit schreiben. In der Gruppe sind 30 Menschen. Was machst du?",
        "answers": [
          "Ich schreibe die Adresse in die Gruppe, damit es alle wissen.",
          "Ich schicke die Adresse einzeln an meine Freunde.",
          "Ich schreibe die Adresse nicht in die Gruppe."
        ],
        "feedbackWrong": [
          "Dann haben 30 Menschen deine Adresse, und nicht alle kennst du gut. Jeder von ihnen kann die Adresse weitergeben.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "So bekommen nur deine Freunde die Adresse.",
          null
        ],
        "feedbackCorrect": "In der Gruppe lesen 30 Menschen mit. Deine Adresse ist privat und gehört deshalb nicht in die Gruppe.",
        "remember": "Ich schreibe in einer Gruppe nur Dinge, die alle dort sehen dürfen."
      },
      "standard": {
        "question": "Du ziehst um und willst deine neue Adresse in die WhatsApp-Gruppe deiner Arbeit schreiben. Die Gruppe hat 30 Mitglieder. Wie gehst du vor?",
        "answers": [
          "Ich schreibe die Adresse in die Gruppe, dann wissen alle Bescheid.",
          "Ich schicke die Adresse einzeln an meine Freunde.",
          "Ich schreibe die Adresse nicht in die Gruppe."
        ],
        "feedbackWrong": [
          "Dann hätten 30 Menschen deine Adresse, und nicht alle kennst du gut. Jeder von ihnen kann sie weitergeben.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "So bekommen nur die Menschen deine Adresse, denen du sie geben willst.",
          null
        ],
        "feedbackCorrect": "In der Gruppe lesen 30 Menschen mit. Deine Adresse ist privat und gehört nicht dorthin.",
        "remember": "In Gruppen schreibe ich nur, was alle dort sehen dürfen."
      }
    },
    "whatsapp/lang/Fotos senden": {
      "einfach": {
        "question": "Du hast ein lustiges Foto von deiner Kollegin: Sie hat Sahne im Gesicht. Du möchtest das Foto in eine Gruppe schicken. Was machst du?",
        "answers": [
          "Ich frage meine Kollegin, ob ich das Foto schicken darf.",
          "Ich schicke das Foto, weil es doch nur ein Spaß ist.",
          "Ich schicke das Foto nur an meine beste Freundin."
        ],
        "feedbackWrong": [
          null,
          "Für dich ist es Spaß, aber für deine Kollegin ist es vielleicht peinlich. Es ist ihr Bild, deshalb darf sie mitbestimmen.",
          "Auch eine Freundin kann das Foto weiterschicken. Frag deshalb zuerst deine Kollegin."
        ],
        "feedbackCorrect": "Es ist ihr Bild. Deshalb darf sie mitbestimmen, wer das Foto sieht.",
        "remember": "Bevor ich ein Foto sende, prüfe ich es."
      },
      "standard": {
        "question": "Du hast ein lustiges Foto von deiner Kollegin – sie hat Sahne im Gesicht. Du willst es in eine Gruppe schicken. Wie gehst du vor?",
        "answers": [
          "Ich frage meine Kollegin, ob ich es verschicken darf.",
          "Ich schicke das Foto ab, es ist ja nur Spaß.",
          "Ich schicke das Foto nur an meine beste Freundin."
        ],
        "feedbackWrong": [
          null,
          "Was für dich Spaß ist, kann deiner Kollegin peinlich sein. Es ist ihr Bild, also entscheidet sie mit.",
          "Auch eine einzelne Freundin kann das Foto weiterleiten. Frag deshalb zuerst deine Kollegin."
        ],
        "feedbackCorrect": "Es ist ihr Bild. Deshalb entscheidet sie mit, wer das Foto zu sehen bekommt.",
        "remember": "Ich prüfe Fotos, bevor ich sie verschicke."
      }
    },
    "whatsapp/lang/Stress und Eile": {
      "einfach": {
        "question": "Du bekommst eine Nachricht: Letzte Warnung! Tippe heute auf den Link. Sonst löschen wir dein Konto. Die Nachricht macht dir Angst. Was machst du?",
        "answers": [
          "Ich lege das Handy weg und mache erst eine Pause.",
          "Ich tippe schnell auf den Link, damit die Angst weg ist.",
          "Ich mache eine Pause und spreche danach mit jemandem darüber."
        ],
        "feedbackWrong": [
          null,
          "Die Angst ist Absicht, denn du sollst schnell tippen. Unter Stress machst du leichter Fehler.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Zu zweit seht ihr oft schneller, ob die Nachricht ein Trick ist."
        ],
        "feedbackCorrect": "Die Nachricht macht Druck. In der Pause wirst du ruhig und kannst danach in Ruhe entscheiden.",
        "remember": "Wenn mich etwas stresst, mache ich erst eine Pause."
      },
      "standard": {
        "question": "Du erhältst die Nachricht: Letzte Warnung! Tippe heute auf den Link, sonst löschen wir dein Konto. Dir wird mulmig. Wie reagierst du?",
        "answers": [
          "Ich lege das Handy weg und mache eine Pause.",
          "Ich tippe schnell auf den Link, dann ist die Sorge vorbei.",
          "Ich mache eine Pause und bespreche die Nachricht danach mit jemandem."
        ],
        "feedbackWrong": [
          null,
          "Die Angst ist gewollt: Du sollst schnell tippen. Unter Stress machst du leichter Fehler.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Zu zweit erkennt man oft schneller, ob hinter der Nachricht ein Trick steckt."
        ],
        "feedbackCorrect": "Die Nachricht setzt dich unter Druck. In der Pause kommst du zur Ruhe und kannst danach überlegt entscheiden.",
        "remember": "Wenn mich etwas stresst, mache ich Pause."
      }
    },
    "whatsapp/lang/Die KI in WhatsApp": {
      "einfach": {
        "question": "Du fragst die KI in WhatsApp, wo es Pizza in deiner Nähe gibt. Die KI fragt dich nach deiner Adresse. Was machst du?",
        "answers": [
          "Ich schreibe meine Adresse nicht in den Chat.",
          "Ich schreibe meine Adresse in den Chat, weil es nur ein Programm ist.",
          "Ich schreibe nichts mehr und suche selbst im Internet."
        ],
        "feedbackWrong": [
          null,
          "Auch ein Programm bekommt die Daten, die du eingibst. Deshalb gehören private Dinge nicht in den KI-Chat.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Deine Adresse bleibt bei dir, und Pizza findest du auch ohne die KI."
        ],
        "feedbackCorrect": "Deine Adresse ist privat. Du schreibst der KI keine privaten Dinge wie deine Adresse.",
        "remember": "Ich schreibe der KI keine privaten Dinge von mir."
      },
      "standard": {
        "question": "Du fragst die KI in WhatsApp, wo es Pizza in deiner Nähe gibt. Daraufhin möchte die KI deine Adresse wissen. Wie reagierst du?",
        "answers": [
          "Ich gebe meine Adresse nicht ein.",
          "Ich gebe meine Adresse ein. Es ist schließlich nur ein Programm.",
          "Ich schreibe nicht weiter und suche selbst im Internet."
        ],
        "feedbackWrong": [
          null,
          "Was du eingibst, geht an das Programm. Private Daten gehören deshalb nicht in den KI-Chat.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Deine Adresse bleibt bei dir – Pizza findest du auch ohne die KI."
        ],
        "feedbackCorrect": "Deine Adresse ist privat. Du gibst der KI keine privaten Daten wie deine Adresse.",
        "remember": "Ich schreibe der KI nichts Privates."
      }
    },
    "whatsapp/lang/Was kann ich tun?": {
      "einfach": {
        "question": "Dein Freund Tom schreibt dir: Ich bin im Urlaub. Mein Geld ist weg. Schick mir bitte schnell 200 Euro. Was machst du zuerst?",
        "answers": [
          "Ich rufe selbst bei Tom an.",
          "Ich überweise das Geld gleich, weil Tom mein Freund ist.",
          "Ich schicke zuerst nur 50 Euro."
        ],
        "feedbackWrong": [
          null,
          "Das ist zu schnell, denn vielleicht schreibt gar nicht Tom. Betrüger nutzen manchmal fremde Konten. Ruf Tom zuerst selbst an.",
          "Wenn es Betrug ist, sind auch 50 Euro weg. Ruf Tom zuerst selbst an."
        ],
        "feedbackCorrect": "Wenn du selbst anrufst, merkst du, ob die Nachricht wirklich von Tom kommt.",
        "remember": "Wenn mich jemand um Geld bittet, rufe ich die Person selbst an."
      },
      "standard": {
        "question": "Dein Freund Tom schreibt: Ich bin im Urlaub, und mein Geld ist weg. Schick mir bitte schnell 200 Euro. Was tust du zuerst?",
        "answers": [
          "Ich rufe Tom selbst an.",
          "Ich überweise das Geld sofort, Tom ist schließlich mein Freund.",
          "Ich schicke erst einmal nur 50 Euro."
        ],
        "feedbackWrong": [
          null,
          "Das geht zu schnell: Vielleicht schreibt gar nicht Tom, denn Betrüger nutzen manchmal fremde Konten. Ruf Tom erst selbst an.",
          "Bei einem Betrug sind auch 50 Euro verloren. Ruf Tom erst selbst an."
        ],
        "feedbackCorrect": "Durch deinen eigenen Anruf klärst du, ob die Nachricht wirklich von Tom stammt.",
        "remember": "Bei Geldbitten rufe ich selbst an."
      }
    },
    "whatsapp/kurz/Unbekannte Nachrichten": {
      "einfach": {
        "question": "Eine Nummer, die du nicht kennst, schreibt dir: Hallo Kim, bist du das? Du heißt aber nicht Kim. Was machst du?",
        "answers": [
          "Ich antworte nicht auf die Nachricht.",
          "Ich schreibe zurück und nenne meinen Namen.",
          "Ich blockiere die Nummer."
        ],
        "feedbackWrong": [
          null,
          "Dann kennt eine fremde Person deinen Namen und weiß, dass unter dieser Nummer jemand antwortet. Manche Betrüger schreiben einfach viele Nummern an.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Wenn du die Nummer blockierst, kann sie dir nicht mehr schreiben."
        ],
        "feedbackCorrect": "Du kennst die Nummer nicht und musst nicht antworten. So erfährt die fremde Person nichts über dich.",
        "remember": "Einer fremden Nummer erzähle ich nichts über mich."
      },
      "standard": {
        "question": "Eine unbekannte Nummer schreibt: Hallo Kim, bist du das? Du bist nicht Kim. Wie reagierst du?",
        "answers": [
          "Ich antworte nicht.",
          "Ich schreibe zurück und nenne meinen Namen.",
          "Ich blockiere die Nummer."
        ],
        "feedbackWrong": [
          null,
          "Damit kennt eine fremde Person deinen Namen und weiß, dass die Nummer benutzt wird. Betrüger schreiben oft wahllos viele Nummern an.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Nach dem Blockieren kann dir die Nummer nicht mehr schreiben."
        ],
        "feedbackCorrect": "Du kennst die Nummer nicht und musst nicht antworten. So erfährt die fremde Person nichts über dich.",
        "remember": "Unbekannten Nummern gebe ich nichts über mich preis."
      }
    },
    "whatsapp/kurz/Links in Nachrichten": {
      "einfach": {
        "question": "Eine Nummer, die du nicht kennst, schreibt dir: Guter Job für dich, 200 Euro am Tag. Tippe hier. Was machst du?",
        "answers": [
          "Ich tippe auf den Link, weil ich mehr wissen will.",
          "Ich tippe den Link nicht an.",
          "Ich frage erst jemanden und lasse den Link zu."
        ],
        "feedbackWrong": [
          "Die Nachricht verspricht viel Geld, damit du neugierig wirst. Der Link kann auf eine falsche Seite führen, auf der jemand deine Daten haben will.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Der Link bleibt zu, und das ist das Wichtigste. Du kannst das auch allein entscheiden."
        ],
        "feedbackCorrect": "Du kennst die Nummer nicht, deshalb bleibt der Link zu. Du verpasst dabei nichts.",
        "remember": "Wenn ich einen Link nicht kenne, tippe ich ihn nicht an."
      },
      "standard": {
        "question": "Eine unbekannte Nummer schreibt: Guter Job für dich, 200 Euro am Tag. Tippe hier. Wie gehst du damit um?",
        "answers": [
          "Ich tippe auf den Link, um mehr zu erfahren.",
          "Ich tippe den Link nicht an.",
          "Ich frage erst jemanden und lasse den Link zu."
        ],
        "feedbackWrong": [
          "Das Versprechen von viel Geld soll dich neugierig machen. Der Link kann auf eine gefälschte Seite führen, die deine Daten abgreifen will.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Der Link bleibt zu – das ist das Wichtigste. Entscheiden kannst du das auch allein."
        ],
        "feedbackCorrect": "Du kennst die Nummer nicht, also bleibt der Link zu. Du verpasst nichts.",
        "remember": "Ich tippe fremde Links nicht an."
      }
    },
    "whatsapp/kurz/Dein WhatsApp-Code": {
      "einfach": {
        "question": "Ein Freund schreibt dir: Schick mir bitte deinen WhatsApp-Code. Was machst du?",
        "answers": [
          "Ich schicke ihm den Code, weil er mein Freund ist.",
          "Ich schicke den Code nicht.",
          "Ich schicke den Code nicht und rufe meinen Freund an."
        ],
        "feedbackWrong": [
          "Oft kommt die Nachricht gar nicht vom Freund, weil Betrüger sein Konto nutzen. Dein Code bleibt deshalb bei dir.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Der Code bleibt bei dir, und am Telefon merkst du, ob dein Freund das wirklich geschrieben hat."
        ],
        "feedbackCorrect": "Mit dem Code kann jemand dein Konto stehlen. Deshalb behältst du ihn immer für dich.",
        "remember": "Ich gebe meinen WhatsApp-Code niemals an andere weiter."
      },
      "standard": {
        "question": "Ein Freund schreibt: Schick mir bitte deinen WhatsApp-Code. Wie reagierst du?",
        "answers": [
          "Ich schicke den Code, schließlich ist es ein Freund.",
          "Ich gebe den Code nicht weiter.",
          "Ich gebe den Code nicht weiter und rufe meinen Freund an."
        ],
        "feedbackWrong": [
          "Oft nutzen Betrüger das Konto deines Freundes und schreiben an seiner Stelle. Behalte deinen Code für dich.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Der Code bleibt bei dir, und am Telefon klärt sich, ob die Nachricht wirklich von deinem Freund kam."
        ],
        "feedbackCorrect": "Mit dem Code kann jemand dein Konto übernehmen. Deshalb behältst du ihn immer für dich.",
        "remember": "Meinen WhatsApp-Code gebe ich nie weiter."
      }
    },
    "whatsapp/quiz/feier-foto": {
      "einfach": {
        "question": "Du hast ein Foto von einer Geburtstagsfeier, auf dem 5 Freunde zu sehen sind. Du möchtest es in eine große Gruppe schicken. Was machst du?",
        "hinweis": "Auf dem Foto sind andere Menschen. Überlege, wer mitbestimmen darf.",
        "answers": [
          "Ich schicke es, weil alle gut aussehen.",
          "Ich frage meine Freunde vorher.",
          "Ich schicke es, aber ohne Namen."
        ],
        "feedbackWrong": [
          "Vielleicht möchte jemand nicht in der großen Gruppe zu sehen sein. Frag deine Freunde deshalb vorher.",
          null,
          "Auch ohne Namen sieht man die Gesichter. Deshalb dürfen deine Freunde mitbestimmen, wer das Foto sieht."
        ],
        "feedbackCorrect": "Auf dem Foto sind deine Freunde, deshalb ist es auch ihr Bild. Sie dürfen mitbestimmen, wer das Foto sieht."
      },
      "standard": {
        "question": "Du hast ein Foto von einer Geburtstagsfeier, auf dem fünf Freunde zu sehen sind. Du willst es in eine große Gruppe schicken. Wie gehst du vor?",
        "hinweis": "Andere Menschen sind auf dem Foto zu erkennen. Wer entscheidet mit?",
        "answers": [
          "Ich schicke es, alle sehen ja gut aus.",
          "Ich frage meine Freunde vorher.",
          "Ich schicke es, nenne aber keine Namen."
        ],
        "feedbackWrong": [
          "Vielleicht möchte jemand nicht vor der ganzen Gruppe zu sehen sein. Frag deine Freunde deshalb vorher.",
          null,
          "Auch ohne Namen sind die Gesichter zu erkennen. Deine Freunde entscheiden deshalb mit, wer das Foto sieht."
        ],
        "feedbackCorrect": "Es ist auch das Bild deiner Freunde. Deshalb entscheiden sie mit, wer das Foto zu sehen bekommt."
      }
    },
    "whatsapp/quiz/zehn-nachrichten": {
      "einfach": {
        "question": "Ein Bekannter schreibt dir 10 Nachrichten hintereinander: Antworte endlich! Warum antwortest du nicht? Du sitzt gerade beim Essen. Was machst du?",
        "hinweis": "Überlege, wer entscheiden darf, wann du antwortest.",
        "answers": [
          "Ich antworte, wenn ich fertig gegessen habe.",
          "Ich höre sofort auf zu essen und antworte.",
          "Ich schreibe: Entschuldigung, dass ich so langsam war."
        ],
        "feedbackWrong": [
          null,
          "Die vielen Nachrichten machen Druck. Du musst aber nicht sofort antworten, denn du bestimmst selbst, wann du schreibst.",
          "Du hast nichts falsch gemacht, deshalb musst du dich nicht entschuldigen. Du bestimmst selbst, wann du antwortest."
        ],
        "feedbackCorrect": "Du bestimmst selbst, wann du antwortest. Niemand darf dich drängen, und nach dem Essen hast du Zeit und Ruhe."
      },
      "standard": {
        "question": "Ein Bekannter schickt dir zehn Nachrichten hintereinander: „Antworte endlich! Warum meldest du dich nicht?“ Du sitzt gerade beim Essen. Wie reagierst du?",
        "hinweis": "Wer entscheidet darüber, wann du antwortest?",
        "answers": [
          "Ich antworte, wenn ich fertig gegessen habe.",
          "Ich unterbreche das Essen und antworte sofort.",
          "Ich entschuldige mich, dass ich so langsam war."
        ],
        "feedbackWrong": [
          null,
          "Die vielen Nachrichten erzeugen Druck. Du musst trotzdem nicht sofort antworten – wann du schreibst, entscheidest du.",
          "Du hast nichts falsch gemacht und musst dich nicht entschuldigen. Wann du antwortest, bestimmst du selbst."
        ],
        "feedbackCorrect": "Du entscheidest selbst, wann du antwortest. Niemand darf dich drängen – nach dem Essen hast du Zeit und Ruhe dafür."
      }
    },
    "whatsapp/quiz/gruppe-stumm": {
      "einfach": {
        "question": "In der WhatsApp-Gruppe von deiner Arbeit wird jeden Abend sehr viel geschrieben. Dein Handy piept ständig, und das stört dich. Was machst du?",
        "hinweis": "Du kannst in der Gruppe bleiben und trotzdem Ruhe haben. Überlege, wie das geht.",
        "answers": [
          "Ich schalte die Gruppe auf stumm.",
          "Ich lösche jeden Abend alle Nachrichten.",
          "Ich lese jede Nachricht sofort, damit ich nichts verpasse."
        ],
        "feedbackWrong": [
          null,
          "Die Nachrichten kommen trotzdem, und dein Handy piept weiter. Schalte die Gruppe lieber auf stumm.",
          "Du musst nicht jede Nachricht sofort lesen, denn das macht Stress. Du darfst die Gruppe stumm schalten."
        ],
        "feedbackCorrect": "Dann piept dein Handy nicht mehr, und du bleibst trotzdem in der Gruppe. Die Nachrichten liest du, wann du willst."
      },
      "standard": {
        "question": "In der WhatsApp-Gruppe deiner Arbeit wird jeden Abend viel geschrieben. Dein Handy piept ständig, und das nervt dich. Was tust du?",
        "hinweis": "Du kannst in der Gruppe bleiben und trotzdem Ruhe haben. Wie geht das?",
        "answers": [
          "Ich schalte die Gruppe stumm.",
          "Ich lösche jeden Abend alle Nachrichten.",
          "Ich lese jede Nachricht sofort, um nichts zu verpassen."
        ],
        "feedbackWrong": [
          null,
          "Die Nachrichten kommen trotzdem, und das Handy piept weiter. Mit dem Stummschalten hast du mehr Ruhe.",
          "Du musst nicht jede Nachricht sofort lesen – das erzeugt nur Stress. Du darfst die Gruppe stumm schalten."
        ],
        "feedbackCorrect": "Dann bleibt dein Handy ruhig, und du bleibst trotzdem in der Gruppe. Die Nachrichten liest du, wann es dir passt."
      }
    },
    "whatsapp/quiz/sprachnachricht-privat": {
      "einfach": {
        "question": "Du sprichst eine Sprachnachricht für deine Kollegin. Es geht um die Arbeit, aber du möchtest auch von deiner Krankheit erzählen. Was machst du?",
        "hinweis": "Eine Sprachnachricht lässt sich an andere weiterschicken. Überlege, was das für dich bedeutet.",
        "answers": [
          "Ich erzähle alles, weil sie meine Kollegin ist.",
          "Ich schicke die Nachricht an die ganze Arbeitsgruppe.",
          "Ich überlege vorher, was ich wirklich sagen will."
        ],
        "feedbackWrong": [
          "Deine Kollegin kann die Nachricht weiterschicken, und dann hören andere von deiner Krankheit. Überlege deshalb vorher, was du sagst.",
          "Dann hören alle in der Gruppe von deiner Krankheit, obwohl das privat ist. Überlege vorher, wem du was erzählst.",
          null
        ],
        "feedbackCorrect": "Eine Sprachnachricht kann weitergeschickt werden, und dann hören andere deine Stimme. Deshalb überlegst du vorher, was privat bleiben soll."
      },
      "standard": {
        "question": "Du nimmst eine Sprachnachricht für deine Kollegin auf. Es geht um die Arbeit, du willst aber auch von deiner Krankheit erzählen. Wie gehst du vor?",
        "hinweis": "Sprachnachrichten können weitergeleitet werden. Was bedeutet das für das, was du erzählst?",
        "answers": [
          "Ich erzähle alles, sie ist ja meine Kollegin.",
          "Ich schicke die Nachricht an die ganze Arbeitsgruppe.",
          "Ich überlege vorher, was ich wirklich sagen will."
        ],
        "feedbackWrong": [
          "Deine Kollegin kann die Nachricht weiterleiten, und dann erfahren andere von deiner Krankheit. Überlege vorher, was du sagst.",
          "Dann erfährt die ganze Gruppe von deiner Krankheit, obwohl das privat ist. Überlege vorher, wem du was erzählst.",
          null
        ],
        "feedbackCorrect": "Sprachnachrichten lassen sich weiterleiten – dann hören andere deine Stimme. Deshalb überlegst du vorher, was privat bleiben soll."
      }
    },
    "whatsapp/quiz/rechnung-druck": {
      "einfach": {
        "question": "Du bekommst eine Nachricht: Ihre Rechnung ist nicht bezahlt. Zahlen Sie heute 49 Euro, sonst kommt ein Anwalt. Die Firma kennst du nicht. Was machst du?",
        "hinweis": "Die Nachricht macht Druck. Überlege, ob du die Firma überhaupt kennst.",
        "answers": [
          "Ich zahle die 49 Euro, damit ich Ruhe habe.",
          "Ich zahle nicht und prüfe meine Rechnungen.",
          "Ich zahle erst einmal nur 10 Euro."
        ],
        "feedbackWrong": [
          "Die Drohung soll dir Angst machen. Du kennst die Firma nicht, und dein Geld ist dann vielleicht weg.",
          null,
          "Wenn es Betrug ist, sind auch 10 Euro weg, und Betrüger wollen danach oft mehr. Prüfe zuerst deine Rechnungen."
        ],
        "feedbackCorrect": "Du kennst die Firma nicht, und die Nachricht macht Druck. So arbeiten Betrüger. In deinen Rechnungen siehst du selbst, ob es diese Rechnung gibt."
      },
      "standard": {
        "question": "Du erhältst die Nachricht: „Ihre Rechnung ist nicht bezahlt. Zahlen Sie heute 49 Euro, sonst schalten wir einen Anwalt ein.“ Die Firma kennst du nicht. Wie reagierst du?",
        "hinweis": "Die Nachricht setzt dich unter Druck. Kennst du die Firma überhaupt?",
        "answers": [
          "Ich zahle die 49 Euro, dann habe ich Ruhe.",
          "Ich zahle nicht und prüfe meine Rechnungen.",
          "Ich zahle vorerst nur 10 Euro."
        ],
        "feedbackWrong": [
          "Die Drohung soll dir Angst machen. Bei einer unbekannten Firma ist das Geld dann womöglich verloren.",
          null,
          "Bei einem Betrug sind auch 10 Euro verloren, und oft folgen weitere Forderungen. Prüfe zuerst deine Rechnungen."
        ],
        "feedbackCorrect": "Eine unbekannte Firma und dazu Druck – so arbeiten Betrüger. In deinen eigenen Rechnungen siehst du, ob es diese Forderung wirklich gibt."
      }
    },
    "whatsapp/quiz/krank-gruppe": {
      "einfach": {
        "question": "Du bist krank und möchtest es deiner Chefin sagen. Sie ist in der WhatsApp-Gruppe von der Arbeit, in der 25 Menschen sind. Was machst du?",
        "hinweis": "Überlege, wie viele Menschen in der Gruppe mitlesen.",
        "answers": [
          "Ich schreibe es nur meiner Chefin.",
          "Ich schreibe in die Gruppe, dass ich krank bin und Magen-Darm habe.",
          "Ich schreibe ohne private Angaben in die Gruppe, dass ich heute fehle."
        ],
        "feedbackWrong": [
          null,
          "Dann wissen 25 Menschen von deiner Krankheit, obwohl das privat ist. Schreib es lieber nur deiner Chefin.",
          null
        ],
        "feedbackCorrect": "In der Gruppe lesen 25 Menschen mit, und deine Krankheit ist privat. Deine Chefin erfährt es auch, wenn du nur ihr schreibst.",
        "feedbackAuch": [
          null,
          null,
          "Du schreibst nichts Privates, und die Gruppe weiß nur, dass du heute fehlst. Deine Chefin liest es auch."
        ]
      },
      "standard": {
        "question": "Du bist krank und willst deiner Chefin Bescheid geben. Sie ist in der WhatsApp-Gruppe der Arbeit, die 25 Mitglieder hat. Wie gehst du vor?",
        "hinweis": "Wie viele Menschen lesen in der Gruppe mit?",
        "answers": [
          "Ich schreibe es nur meiner Chefin.",
          "Ich schreibe in die Gruppe, dass ich mit Magen-Darm im Bett liege.",
          "Ich schreibe ohne private Angaben in die Gruppe, dass ich heute fehle."
        ],
        "feedbackWrong": [
          null,
          "Damit wüssten 25 Menschen von deiner Krankheit – das ist privat. Schreib es lieber nur deiner Chefin.",
          null
        ],
        "feedbackCorrect": "In der Gruppe lesen 25 Menschen mit, und deine Krankheit ist privat. Deine Chefin erfährt es auch, wenn du ihr direkt schreibst.",
        "feedbackAuch": [
          null,
          null,
          "Du verrätst nichts Privates – die Gruppe erfährt nur, dass du heute fehlst, und deine Chefin liest es ebenfalls."
        ]
      }
    },
    "whatsapp/quiz/nachbarin-paket": {
      "einfach": {
        "question": "Deine Nachbarin, Frau Yilmaz, schreibt dir von einer Nummer, die du gespeichert hast: Kannst du morgen mein Paket annehmen? Was machst du?",
        "hinweis": "Du kennst die Nummer. Überlege, ob die Nachricht Geld, Daten oder einen Code von dir will.",
        "answers": [
          "Ich blockiere die Nummer, weil es bestimmt ein Trick ist.",
          "Ich lösche die Nachricht sofort.",
          "Ich antworte ihr: Ja, das mache ich."
        ],
        "feedbackWrong": [
          "Nicht jede Nachricht ist ein Trick. Du kennst die Nummer, und sie will kein Geld und keine Daten.",
          "Die Nachricht kommt von deiner Nachbarin und will nichts Gefährliches. Du kannst ihr ganz normal antworten.",
          null
        ],
        "feedbackCorrect": "Du kennst die Nummer, und die Nachricht will weder Geld noch Daten noch einen Code. Deshalb kannst du ganz normal antworten."
      },
      "standard": {
        "question": "Deine Nachbarin Frau Yilmaz schreibt dir von ihrer gespeicherten Nummer: „Kannst du morgen mein Paket annehmen?“ Wie reagierst du?",
        "hinweis": "Du kennst die Nummer. Will die Nachricht Geld, Daten oder einen Code?",
        "answers": [
          "Ich blockiere die Nummer, das ist sicher ein Trick.",
          "Ich lösche die Nachricht sofort.",
          "Ich antworte ihr: Ja, mache ich."
        ],
        "feedbackWrong": [
          "Nicht jede Nachricht ist ein Trick. Die Nummer kennst du, und es geht weder um Geld noch um Daten.",
          "Die Nachricht stammt von deiner Nachbarin und verlangt nichts Riskantes. Du kannst ganz normal antworten.",
          null
        ],
        "feedbackCorrect": "Die Nummer ist dir bekannt, und die Nachricht will weder Geld noch Daten noch einen Code. Du kannst also ganz normal antworten."
      }
    }
  },
  "youtube": {
    "Ein Video sagt etwas Überraschendes. Was machst du?": {
      "einfach": {
        "question": "In einem Video hörst du etwas, das dich überrascht. Was machst du?",
        "hinweis": "Auch wenn etwas überraschend klingt, muss es nicht wahr sein. Was hilft dir beim Prüfen?",
        "answers": [
          "Ich glaube sofort, was das Video sagt.",
          "Ich prüfe die Aussage an einer zweiten Stelle.",
          "Ich zähle, wie viele Likes das Video hat."
        ],
        "feedbackWrong": [
          "Das ist zu schnell, denn du hast die Aussage noch nicht geprüft. Schau dafür an einer zweiten Stelle nach.",
          null,
          "Auch wenn ein Video viele Likes hat, muss seine Aussage nicht wahr sein."
        ],
        "feedbackCorrect": "Auch ein Video kann falsch sein. Wenn eine Aussage wichtig ist, prüfst du sie deshalb an einer zweiten Stelle."
      },
      "standard": {
        "question": "In einem Video wird etwas Überraschendes behauptet. Wie gehst du damit um?",
        "hinweis": "Überraschend heißt nicht automatisch wahr. Wie kannst du die Aussage prüfen?",
        "answers": [
          "Ich glaube die Aussage sofort – sie klingt ja überzeugend.",
          "Ich prüfe die Aussage an einer zweiten Stelle.",
          "Ich zähle die Likes des Videos."
        ],
        "feedbackWrong": [
          "Das geht zu schnell. Prüfe die Aussage zuerst an einer zweiten Stelle.",
          null,
          "Viele Likes sagen nichts darüber aus, ob eine Behauptung stimmt."
        ],
        "feedbackCorrect": "Auch Videos können Falsches behaupten. Deshalb prüfst du wichtige Aussagen an einer zweiten Stelle."
      }
    },
    "Du wolltest 1 Video sehen. Jetzt ist 1 Stunde vorbei. Was machst du?": {
      "einfach": {
        "question": "Du wolltest nur 1 Video anschauen, aber inzwischen ist 1 Stunde vergangen. Was machst du jetzt?",
        "hinweis": "Überlege, ob du wirklich so lange Videos anschauen wolltest.",
        "answers": [
          "Ich schaue einfach weitere Videos an.",
          "Ich schaue noch 1 Stunde lang Videos.",
          "Ich mache jetzt eine Pause."
        ],
        "feedbackWrong": [
          "Du hast schon viel Zeit mit Videos verbracht. Mach deshalb lieber eine Pause.",
          "Wenn du noch 1 Stunde schaust, wird es noch mehr Zeit. Mach lieber eine Pause.",
          null
        ],
        "feedbackCorrect": "Bei YouTube startet oft gleich das nächste Video. So vergeht schnell viel Zeit. Eine Pause tut dir jetzt gut."
      },
      "standard": {
        "question": "Du wolltest 1 Video sehen, doch inzwischen ist 1 Stunde vergangen. Wie entscheidest du dich?",
        "hinweis": "Wolltest du wirklich so lange Videos schauen?",
        "answers": [
          "Ich schaue einfach weiter.",
          "Ich schaue noch 1 Stunde.",
          "Ich lege eine Pause ein."
        ],
        "feedbackWrong": [
          "Du hast schon viel Zeit damit verbracht. Eine Pause wäre jetzt besser.",
          "Damit verbringst du noch mehr Zeit vor den Videos. Mach lieber eine Pause.",
          null
        ],
        "feedbackCorrect": "Auf YouTube startet oft automatisch das nächste Video, und so vergeht schnell viel Zeit. Eine Pause tut dir jetzt gut."
      }
    },
    "Eine YouTuberin lobt ein Produkt. Am Video steht: Anzeige. Darunter steht ein Link zum Kaufen. Was ist das?": {
      "einfach": {
        "question": "Eine YouTuberin lobt ein Produkt. Am Video steht Anzeige, und darunter ist ein Link, über den du das Produkt kaufen kannst. Was ist das?",
        "hinweis": "Am Video steht das Wort Anzeige. Überlege, was das bedeutet.",
        "answers": [
          "Es ist Werbung für ein Produkt.",
          "Es ist ein ganz normales Video.",
          "Es ist eine Sendung mit Nachrichten."
        ],
        "feedbackWrong": [
          null,
          "Das Wort Anzeige am Video zeigt dir, dass das Video Werbung ist.",
          "Am Video steht Anzeige, weil die YouTuberin hier für ein Produkt wirbt. Das ist keine Sendung mit Nachrichten."
        ],
        "feedbackCorrect": "Wenn am Video das Wort Anzeige steht, ist das ein Hinweis auf Werbung."
      },
      "standard": {
        "question": "Eine YouTuberin empfiehlt ein Produkt. Das Video ist als Anzeige gekennzeichnet, darunter steht ein Link zum Kauf. Was ist das?",
        "hinweis": "Was bedeutet die Kennzeichnung Anzeige am Video?",
        "answers": [
          "Werbung für ein Produkt.",
          "Ein gewöhnliches Video.",
          "Eine Nachrichtensendung."
        ],
        "feedbackWrong": [
          null,
          "Die Kennzeichnung Anzeige zeigt, dass es sich um Werbung handelt.",
          "Das Video ist als Anzeige gekennzeichnet und wirbt für ein Produkt. Es ist keine Nachrichtensendung."
        ],
        "feedbackCorrect": "Die Kennzeichnung Anzeige zeigt dir, dass es Werbung ist."
      }
    },
    "youtube/lang/Videos prüfen": {
      "einfach": {
        "question": "Ein Video sagt: Dieser Tee heilt Rücken-Schmerzen in 3 Tagen. Du hast oft Rücken-Schmerzen. Was machst du?",
        "answers": [
          "Ich bestelle den Tee, weil Probieren ja nicht viel kostet.",
          "Ich glaube das nicht sofort.",
          "Ich frage meine Ärztin nach dem Tee."
        ],
        "feedbackWrong": [
          "Das Video will den Tee verkaufen und verspricht deshalb viel. Ein Video allein ist kein Beweis.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Das ist eine gute Prüfung, denn deine Ärztin kennt dich und deine Schmerzen."
        ],
        "feedbackCorrect": "Das Video will etwas verkaufen, und ein Video allein ist kein Beweis.",
        "remember": "Ich glaube nicht alles sofort."
      },
      "standard": {
        "question": "Ein Video behauptet: Dieser Tee heilt Rückenschmerzen in drei Tagen. Du hast oft Rückenschmerzen. Was machst du?",
        "answers": [
          "Ich bestelle den Tee, Probieren kostet ja nicht viel.",
          "Ich glaube das nicht sofort.",
          "Ich frage meine Ärztin nach dem Tee."
        ],
        "feedbackWrong": [
          "Das Video will den Tee verkaufen und verspricht deshalb viel. Ein Video allein beweist nichts.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Das ist eine gute Prüfung: Deine Ärztin kennt dich und deine Beschwerden."
        ],
        "feedbackCorrect": "Das Video will etwas verkaufen, und ein Video allein ist kein Beweis.",
        "remember": "Ich glaube nicht alles sofort, was ich in Videos sehe."
      }
    },
    "youtube/lang/Werbung erkennen": {
      "einfach": {
        "question": "Ein YouTuber zeigt in seinem Video einen Mixer und sagt: Den Link findest du unter dem Video. Mit meinem Code sparst du 10 Euro. Was machst du?",
        "answers": [
          "Ich kaufe nicht sofort und überlege, ob ich den Mixer brauche.",
          "Ich kaufe den Mixer gleich, weil ich mit dem Code Geld spare.",
          "Ich kaufe nicht sofort und vergleiche erst die Preise."
        ],
        "feedbackWrong": [
          null,
          "Das ist Werbung, und der YouTuber bekommt oft Geld dafür. Werbung kann aussehen wie ein ganz normales Video. Kauf deshalb nicht sofort.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann siehst du, ob der Preis wirklich gut ist, und entscheidest in Ruhe."
        ],
        "feedbackCorrect": "Das ist Werbung, und der YouTuber bekommt oft Geld dafür. Du entscheidest in Ruhe.",
        "remember": "Ich kaufe nichts sofort aus einem Video."
      },
      "standard": {
        "question": "Ein YouTuber stellt in seinem Video einen Mixer vor: Den Link findest du unter dem Video, mit meinem Code sparst du 10 Euro. Was machst du?",
        "answers": [
          "Ich kaufe nicht sofort und überlege, ob ich ihn brauche.",
          "Ich kaufe ihn gleich, mit dem Code spare ich ja Geld.",
          "Ich kaufe nicht sofort und vergleiche erst die Preise."
        ],
        "feedbackWrong": [
          null,
          "Das ist Werbung, für die der YouTuber oft Geld bekommt. Werbung kann wie ein ganz normales Video aussehen. Kauf deshalb nicht sofort.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann siehst du, ob der Preis wirklich gut ist, und entscheidest in Ruhe."
        ],
        "feedbackCorrect": "Das ist Werbung, für die der YouTuber oft Geld bekommt. Du entscheidest in Ruhe.",
        "remember": "Aus einem Video heraus kaufe ich nichts sofort."
      }
    },
    "youtube/lang/Autoplay und Zeit": {
      "einfach": {
        "question": "Du willst vor dem Schlafen nur noch ein Video sehen, aber YouTube startet danach immer das nächste. Was machst du?",
        "answers": [
          "Ich schaue weiter, bis ich müde bin.",
          "Ich lege das Handy nach dem Video weg.",
          "Ich schalte Autoplay aus."
        ],
        "feedbackWrong": [
          "Dann bestimmt YouTube deinen Abend. Du darfst das Video stoppen und musst nicht weiterschauen.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Auch so bestimmst du das Ende selbst, denn das Handy liegt weg und du hast Ruhe.",
          null
        ],
        "feedbackCorrect": "Autoplay heißt, dass das nächste Video von allein startet. Ohne Autoplay bestimmst du das Ende.",
        "remember": "Ich darf Videos stoppen."
      },
      "standard": {
        "question": "Du willst vor dem Schlafen nur noch ein Video sehen, aber YouTube startet danach immer das nächste. Was machst du?",
        "answers": [
          "Ich schaue weiter, bis ich müde bin.",
          "Ich lege das Handy nach dem Video weg.",
          "Ich schalte Autoplay aus."
        ],
        "feedbackWrong": [
          "Dann bestimmt YouTube deinen Abend. Du darfst das Video stoppen und musst nicht weiterschauen.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Auch so bestimmst du das Ende selbst: Das Handy liegt weg, und du hast Ruhe.",
          null
        ],
        "feedbackCorrect": "Autoplay startet das nächste Video automatisch. Ohne Autoplay bestimmst du das Ende selbst.",
        "remember": "Ich darf jederzeit aufhören zu schauen."
      }
    },
    "youtube/lang/Gefährliche Mutproben": {
      "einfach": {
        "question": "Ein Video zeigt Menschen, die von einer Brücke in den Fluss springen. Dein Kollege sagt: Das machen wir am Wochenende auch. Was machst du?",
        "answers": [
          "Ich sage Nein und springe nicht.",
          "Ich springe mit, weil im Video ja nichts passiert ist.",
          "Ich sage Nein und schlage etwas anderes vor."
        ],
        "feedbackWrong": [
          null,
          "Das Video zeigt nur die Sprünge, bei denen nichts passiert ist. Unter Wasser können Steine sein, und du musst nicht mitmachen.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann macht ihr trotzdem etwas zusammen, aber ohne Gefahr."
        ],
        "feedbackCorrect": "Du musst nicht mitmachen, denn deine Gesundheit ist wichtiger als ein Video.",
        "remember": "Ich mache gefährliche Dinge nicht nach."
      },
      "standard": {
        "question": "Ein Video zeigt Menschen, die von einer Brücke in den Fluss springen. Dein Kollege sagt: Das machen wir am Wochenende auch. Was machst du?",
        "answers": [
          "Ich sage Nein und springe nicht.",
          "Ich springe mit, im Video ist ja nichts passiert.",
          "Ich sage Nein und schlage etwas anderes vor."
        ],
        "feedbackWrong": [
          null,
          "Das Video zeigt nur die Sprünge, die gut gegangen sind. Unter Wasser können Steine liegen, und mitmachen musst du nicht.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann unternehmt ihr trotzdem etwas zusammen – ohne Gefahr."
        ],
        "feedbackCorrect": "Du musst nicht mitmachen. Deine Gesundheit ist wichtiger als ein Video.",
        "remember": "Gefährliche Mutproben mache ich nicht nach."
      }
    },
    "youtube/lang/Videos, die Angst machen": {
      "einfach": {
        "question": "Du schaust ein Video über einen Unfall. Dein Herz klopft schnell, und du fühlst dich schlecht. Was machst du?",
        "answers": [
          "Ich schaue zu Ende, weil ich das Ende wissen will.",
          "Ich stoppe das Video.",
          "Ich stoppe das Video und rede mit jemandem darüber."
        ],
        "feedbackWrong": [
          "Du musst kein Video zu Ende schauen. Dein Körper zeigt dir, dass es zu viel ist, und du darfst stoppen.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Das Video ist aus, und Reden tut gut. Du bist mit der Angst nicht allein."
        ],
        "feedbackCorrect": "Dein Körper zeigt dir, dass es zu viel ist. Du darfst jedes Video stoppen.",
        "remember": "Ich bin mit meiner Angst nicht allein."
      },
      "standard": {
        "question": "Du siehst ein Video über einen Unfall. Dein Herz klopft, und dir geht es schlecht dabei. Was machst du?",
        "answers": [
          "Ich schaue zu Ende, ich will wissen, wie es ausgeht.",
          "Ich stoppe das Video.",
          "Ich stoppe das Video und rede mit jemandem darüber."
        ],
        "feedbackWrong": [
          "Du musst kein Video zu Ende schauen. Dein Körper zeigt dir, dass es zu viel ist – du darfst stoppen.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Das Video ist aus, und Reden tut gut. Mit der Angst bist du nicht allein."
        ],
        "feedbackCorrect": "Dein Körper zeigt dir, dass es zu viel ist. Du darfst jedes Video stoppen.",
        "remember": "Mit meiner Angst bleibe ich nicht allein."
      }
    },
    "youtube/lang/Kommentare": {
      "einfach": {
        "question": "Du schreibst unter ein Video: Tolles Lied. Jemand antwortet dir: Du hast keine Ahnung. Was machst du?",
        "answers": [
          "Ich schreibe zurück, dass er selber keine Ahnung hat.",
          "Ich antworte nicht.",
          "Ich lösche meinen Kommentar."
        ],
        "feedbackWrong": [
          "Dann geht der Streit weiter, und es gibt nichts zu gewinnen. Nicht antworten ist erlaubt.",
          null,
          "Du musst deinen Kommentar nicht löschen, denn deine Meinung darf stehen bleiben. Unfreundlich war der andere, nicht du."
        ],
        "feedbackCorrect": "Du musst auf keinen Kommentar reagieren, und deine Meinung darf stehen bleiben.",
        "remember": "Ich muss nicht auf Kommentare reagieren."
      },
      "standard": {
        "question": "Du schreibst unter ein Video: Tolles Lied. Jemand antwortet dir: Du hast keine Ahnung. Was machst du?",
        "answers": [
          "Ich schreibe zurück: Du hast selber keine Ahnung.",
          "Ich antworte nicht.",
          "Ich lösche meinen Kommentar."
        ],
        "feedbackWrong": [
          "Dann geht der Streit weiter, und zu gewinnen gibt es nichts. Nicht zu antworten ist völlig in Ordnung.",
          null,
          "Du musst deinen Kommentar nicht löschen, deine Meinung darf stehen bleiben. Unfreundlich war der andere, nicht du."
        ],
        "feedbackCorrect": "Du musst auf keinen Kommentar reagieren, und deine Meinung darf stehen bleiben.",
        "remember": "Auf Kommentare muss ich nicht reagieren."
      }
    },
    "youtube/lang/Nicht jedes Video ist echt": {
      "einfach": {
        "question": "In einem Video sagt ein bekannter Fußballer: Mit dieser App verdienst du 500 Euro am Tag. Das Video sieht echt aus. Was machst du?",
        "answers": [
          "Ich lade die App, weil der Fußballer doch nicht lügt.",
          "Ich suche erst, ob das auch in den Nachrichten steht.",
          "Ich lade die App nicht, das Video kann gefälscht sein."
        ],
        "feedbackWrong": [
          "Das Video kann mit KI gemacht sein, denn KI kann Gesichter und Stimmen nachmachen. Vielleicht weiß der Fußballer gar nichts davon.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Das ist eine gute Prüfung: Du lädst nichts und schaust an einer zweiten Stelle nach.",
          null
        ],
        "feedbackCorrect": "KI kann Gesichter und Stimmen nachmachen. Vielleicht weiß der Fußballer gar nichts von dem Video.",
        "remember": "Auch Videos können gefälscht sein."
      },
      "standard": {
        "question": "In einem Video sagt ein bekannter Fußballer: Mit dieser App verdienst du 500 Euro am Tag. Das Video wirkt echt. Was machst du?",
        "answers": [
          "Ich lade die App, der Fußballer lügt doch nicht.",
          "Ich suche erst, ob auch Nachrichtenseiten darüber berichten.",
          "Ich lade die App nicht, das Video kann gefälscht sein."
        ],
        "feedbackWrong": [
          "Das Video kann mit KI gemacht sein: KI kann Gesichter und Stimmen nachahmen. Vielleicht weiß der Fußballer gar nichts davon.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Das ist eine gute Prüfung: Du lädst nichts herunter und siehst an einer zweiten Stelle nach.",
          null
        ],
        "feedbackCorrect": "KI kann Gesichter und Stimmen täuschend echt nachahmen. Vielleicht weiß der Fußballer gar nichts von dem Video.",
        "remember": "Auch Videos können gefälscht sein."
      }
    },
    "youtube/lang/Was kann ich tun?": {
      "einfach": {
        "question": "Ein Video sagt: Mach diese Mutprobe nach, film dich dabei und schick das Video an 5 Freunde. Viele haben schon mitgemacht. Was machst du?",
        "answers": [
          "Ich stoppe das Video und mache es nicht nach.",
          "Ich probiere es auch aus, weil so viele mitmachen.",
          "Ich mache nicht mit und melde das Video bei YouTube."
        ],
        "feedbackWrong": [
          null,
          "Viele Aufrufe heißen nicht, dass etwas sicher ist. Das Video drängt dich, deshalb stoppst du es lieber.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Du machst nicht mit, und YouTube prüft dann das Video."
        ],
        "feedbackCorrect": "Viele Aufrufe heißen nicht, dass etwas sicher ist. Du musst nicht mitmachen.",
        "remember": "Ich mache gefährliche Videos nicht nach."
      },
      "standard": {
        "question": "Ein Video fordert dich auf: Mach diese Mutprobe nach, film dich dabei und schick das Video an fünf Freunde. Viele haben schon mitgemacht. Was machst du?",
        "answers": [
          "Ich stoppe das Video und mache es nicht nach.",
          "Ich probiere es auch aus, es machen ja so viele mit.",
          "Ich mache nicht mit und melde das Video bei YouTube."
        ],
        "feedbackWrong": [
          null,
          "Viele Aufrufe bedeuten nicht, dass etwas sicher ist. Das Video setzt dich unter Druck – stopp es lieber.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Du machst nicht mit, und YouTube prüft dann das Video."
        ],
        "feedbackCorrect": "Viele Aufrufe bedeuten nicht, dass etwas sicher ist. Mitmachen musst du nicht.",
        "remember": "Gefährliche Videos mache ich nicht nach."
      }
    },
    "youtube/kurz/Videos prüfen": {
      "einfach": {
        "question": "Ein Video sagt: Ab Montag fährt in deiner Stadt kein Bus mehr. Was machst du?",
        "answers": [
          "Ich schaue auf der Seite der Stadt nach.",
          "Ich glaube es, weil das Video viele Aufrufe hat.",
          "Ich frage eine Nachbarin, ob das stimmt."
        ],
        "feedbackWrong": [
          null,
          "Viele Aufrufe sind kein Beweis, denn auch falsche Videos sehen viele Menschen. Schau lieber an einer zweiten Stelle nach.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Vielleicht weiß sie mehr. Sonst schaut ihr zusammen an einer zweiten Stelle nach."
        ],
        "feedbackCorrect": "Die Stadt weiß das am besten, und ein Video allein ist kein Beweis.",
        "remember": "Ich prüfe, ob das Video stimmt."
      },
      "standard": {
        "question": "Ein Video behauptet: Ab Montag fährt in deiner Stadt kein Bus mehr. Was machst du?",
        "answers": [
          "Ich sehe auf der Website der Stadt nach.",
          "Ich glaube es, das Video hat ja viele Aufrufe.",
          "Ich frage eine Nachbarin, ob das stimmt."
        ],
        "feedbackWrong": [
          null,
          "Viele Aufrufe beweisen nichts: Auch falsche Videos werden oft angesehen. Sieh lieber an einer zweiten Stelle nach.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Vielleicht weiß sie mehr. Sonst seht ihr zusammen an einer zweiten Stelle nach."
        ],
        "feedbackCorrect": "Die Stadt weiß das am besten, und ein Video allein ist kein Beweis.",
        "remember": "Ich prüfe, ob das Video stimmt."
      }
    },
    "youtube/kurz/Werbung erkennen": {
      "einfach": {
        "question": "Vor deinem Video kommt Werbung für Kopf-Hörer. Dort steht: Nur heute 20 Euro billiger. Was machst du?",
        "answers": [
          "Ich tippe auf die Werbung, weil das Angebot nur heute gilt.",
          "Ich warte und überspringe dann die Werbung.",
          "Ich brauche Kopf-Hörer und vergleiche später in Ruhe die Preise."
        ],
        "feedbackWrong": [
          "Nur heute: Das soll Druck machen, und das ist Absicht. Du musst nichts kaufen.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Kaufen ist erlaubt. Du entscheidest in Ruhe, und nicht die Werbung."
        ],
        "feedbackCorrect": "Du musst nichts kaufen, und manche Werbung kannst du überspringen. Dann geht dein Video weiter.",
        "remember": "Ich kaufe nichts wegen Werbung."
      },
      "standard": {
        "question": "Vor deinem Video läuft Werbung für Kopfhörer: Nur heute 20 Euro billiger. Was machst du?",
        "answers": [
          "Ich tippe auf die Werbung, das Angebot gilt ja nur heute.",
          "Ich warte und überspringe die Werbung.",
          "Ich brauche Kopfhörer und vergleiche später in Ruhe die Preise."
        ],
        "feedbackWrong": [
          "Nur heute: Das soll Zeitdruck erzeugen. Kaufen musst du deshalb nichts.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Kaufen ist erlaubt. Du entscheidest in Ruhe – nicht die Werbung."
        ],
        "feedbackCorrect": "Du musst nichts kaufen, und manche Werbung lässt sich überspringen. Danach läuft dein Video weiter.",
        "remember": "Wegen Werbung kaufe ich nichts."
      }
    },
    "youtube/kurz/Pausen machen": {
      "einfach": {
        "question": "Du schaust seit einer Stunde Videos, und deine Augen brennen. Das nächste Video startet schon. Was machst du?",
        "answers": [
          "Ich schaue weiter, weil das Video ja schon angefangen hat.",
          "Ich stelle einen Wecker und höre in 10 Minuten auf.",
          "Ich mache jetzt eine Pause."
        ],
        "feedbackWrong": [
          "Das nächste Video startet immer von allein. Die Pause musst du deshalb selbst machen.",
          "Der Wecker ist eine gute Idee, aber deine Augen brennen schon jetzt. Mach die Pause lieber gleich.",
          null
        ],
        "feedbackCorrect": "Deine Augen brauchen eine Pause, und du bestimmst das Ende selbst, nicht YouTube.",
        "remember": "Nach einer Stunde mache ich eine Pause."
      },
      "standard": {
        "question": "Du schaust seit einer Stunde Videos, deine Augen brennen, und das nächste Video startet schon. Was machst du?",
        "answers": [
          "Ich schaue weiter, das Video hat ja schon angefangen.",
          "Ich stelle einen Wecker und höre in zehn Minuten auf.",
          "Ich mache jetzt eine Pause."
        ],
        "feedbackWrong": [
          "Das nächste Video startet immer von selbst. Die Pause musst du deshalb selbst einlegen.",
          "Der Wecker ist eine gute Idee, aber deine Augen brennen schon jetzt. Leg die Pause lieber gleich ein.",
          null
        ],
        "feedbackCorrect": "Deine Augen brauchen eine Pause, und das Ende bestimmst du selbst – nicht YouTube.",
        "remember": "Nach einer Stunde lege ich eine Pause ein."
      }
    },
    "Ein Video verspricht: Dieses Mittel macht dich reich. Was ist besser?": {
      "einfach": {
        "question": "Ein Video verspricht: Mit diesem Mittel wirst du reich. Was ist besser?",
        "hinweis": "Überlege, ob es echt klingt, dass man mit einem Mittel reich wird.",
        "answers": [
          "Ich glaube es sofort und kaufe es.",
          "Ich prüfe es erst und kaufe nicht gleich.",
          "Ich schicke das Video an meine Freunde."
        ],
        "feedbackWrong": [
          "Viele Videos wollen dir etwas verkaufen. Deshalb kaufst du nicht sofort.",
          null,
          "Dann glauben es noch mehr Menschen. Prüfe es lieber zuerst."
        ],
        "feedbackCorrect": "Viele Videos wollen dir etwas verkaufen. Deshalb prüfst du erst, bevor du etwas kaufst."
      },
      "standard": {
        "question": "Ein Video verspricht: „Mit diesem Mittel wirst du reich.“ Wie reagierst du?",
        "hinweis": "Klingt es glaubwürdig, mit einem Mittel reich zu werden?",
        "answers": [
          "Ich glaube es sofort und kaufe.",
          "Ich prüfe erst und kaufe nicht gleich.",
          "Ich leite das Video an Freunde weiter."
        ],
        "feedbackWrong": [
          "Viele Videos wollen dir etwas verkaufen. Kauf nicht vorschnell.",
          null,
          "Dann glauben es noch mehr Menschen. Prüfe es lieber zuerst."
        ],
        "feedbackCorrect": "Viele Videos wollen dir etwas verkaufen. Deshalb prüfst du erst, bevor du etwas kaufst."
      }
    },
    "Freunde sagen: Alle machen diese Mutprobe. Was machst du?": {
      "einfach": {
        "question": "Deine Freunde sagen: Alle machen diese Mutprobe. Was machst du?",
        "hinweis": "Überlege, wer den Schaden hat, wenn etwas passiert.",
        "answers": [
          "Ich mache nicht mit.",
          "Ich mache mit, weil alle es tun.",
          "Ich mache nur ein bisschen mit."
        ],
        "feedbackWrong": [
          null,
          "Auch wenn alle es tun, kann es gefährlich sein. Du entscheidest selbst.",
          "Auch ein bisschen kann schon gefährlich sein."
        ],
        "feedbackCorrect": "Eine Mutprobe kann gefährlich sein, auch wenn alle mitmachen. Du entscheidest selbst und machst nicht mit."
      },
      "standard": {
        "question": "Deine Freunde sagen: „Alle machen diese Mutprobe.“ Was tust du?",
        "hinweis": "Wer hat den Schaden, wenn etwas schiefgeht?",
        "answers": [
          "Ich mache nicht mit.",
          "Ich mache mit, weil es alle tun.",
          "Ich mache nur ein bisschen mit."
        ],
        "feedbackWrong": [
          null,
          "Auch wenn alle mitmachen, kann es gefährlich sein. Du entscheidest selbst.",
          "Auch ein bisschen kann schon gefährlich sein."
        ],
        "feedbackCorrect": "Eine Mutprobe kann gefährlich sein, auch wenn alle mitmachen. Du entscheidest selbst und machst nicht mit."
      }
    },
    "Nach einem Video kannst du nicht einschlafen. Was hilft dir?": {
      "einfach": {
        "question": "Nach einem Video kannst du nicht einschlafen, weil es dir Angst gemacht hat. Was hilft dir?",
        "hinweis": "Überlege, mit wem du deine Angst teilen kannst.",
        "answers": [
          "Ich schaue noch mehr solche Videos.",
          "Ich lege das Handy unter das Kissen.",
          "Ich rede mit einer vertrauten Person."
        ],
        "feedbackWrong": [
          "Das macht die Angst meistens größer. Rede lieber mit jemandem.",
          "Die Bilder sind dann trotzdem noch im Kopf. Rede lieber mit jemandem.",
          null
        ],
        "feedbackCorrect": "Wenn du darüber redest, wird die Angst oft kleiner."
      },
      "standard": {
        "question": "Ein Video hat dir Angst gemacht, und du kannst nicht einschlafen. Was hilft dir?",
        "hinweis": "Mit wem kannst du deine Angst teilen?",
        "answers": [
          "Noch mehr solche Videos schauen.",
          "Das Handy unter das Kissen legen.",
          "Mit einer Vertrauensperson reden."
        ],
        "feedbackWrong": [
          "Das verstärkt die Angst meist. Rede lieber mit jemandem.",
          "Die Bilder bleiben trotzdem im Kopf. Rede lieber mit jemandem darüber.",
          null
        ],
        "feedbackCorrect": "Darüber zu reden hilft, die Angst kleiner werden zu lassen."
      }
    },
    "Was macht Werbung oft?": {
      "einfach": {
        "question": "In einem Video läuft Werbung für ein Handy. Was will die Werbung meistens?",
        "hinweis": "Überlege, warum jemand für Werbung bezahlt.",
        "answers": [
          "Sie will mir helfen, Geld zu sparen.",
          "Sie will, dass ich etwas kaufe.",
          "Sie will mir die ganze Wahrheit sagen."
        ],
        "feedbackWrong": [
          "Werbung will dir vor allem etwas verkaufen und nicht beim Sparen helfen.",
          null,
          "Werbung zeigt meistens nur die guten Seiten von einem Produkt."
        ],
        "feedbackCorrect": "Werbung will meistens, dass du etwas kaufst. Deshalb zeigt sie vor allem die guten Seiten."
      },
      "standard": {
        "question": "In einem Video läuft Werbung für ein Handy. Was will Werbung meistens?",
        "hinweis": "Warum bezahlt jemand für Werbung?",
        "answers": [
          "Mir beim Sparen helfen.",
          "Dass ich etwas kaufe.",
          "Mir die ganze Wahrheit sagen."
        ],
        "feedbackWrong": [
          "Werbung will dir vor allem etwas verkaufen – nicht beim Sparen helfen.",
          null,
          "Werbung zeigt meist nur die Vorteile eines Produkts."
        ],
        "feedbackCorrect": "Werbung will meistens, dass du etwas kaufst. Deshalb zeigt sie vor allem die Vorteile."
      }
    },
    "Warum sind Pausen wichtig?": {
      "einfach": {
        "question": "Du schaust gern Videos. Warum sind Pausen trotzdem wichtig?",
        "hinweis": "Überlege, wie du dich nach 3 Stunden Videos fühlst.",
        "answers": [
          "Damit es mir gut geht.",
          "Damit die Videos schneller laden.",
          "Damit der Akku länger hält."
        ],
        "feedbackWrong": [
          null,
          "Pausen machen die Videos nicht schneller.",
          "Pausen sind nicht für den Akku da, sondern für dich."
        ],
        "feedbackCorrect": "Pausen sind für dich da: In einer Pause kannst du dich ausruhen."
      },
      "standard": {
        "question": "Warum sind Pausen beim Videoschauen wichtig?",
        "hinweis": "Wie fühlst du dich nach drei Stunden Videos?",
        "answers": [
          "Damit es mir gut geht.",
          "Damit die Videos schneller laden.",
          "Damit der Akku länger hält."
        ],
        "feedbackWrong": [
          null,
          "Pausen beschleunigen die Videos nicht.",
          "Es geht nicht um den Akku – Pausen sind für dich da."
        ],
        "feedbackCorrect": "Pausen sind für dich da: In einer Pause kannst du dich erholen."
      }
    },
    "Was machst du bei verletzenden Kommentaren?": {
      "einfach": {
        "question": "Unter deinem Video stehen verletzende Kommentare. Was machst du?",
        "hinweis": "Überlege, mit wem du darüber sprechen kannst.",
        "answers": [
          "Ich beleidige die Personen zurück.",
          "Ich lese alle Kommentare immer wieder.",
          "Ich bleibe damit nicht allein."
        ],
        "feedbackWrong": [
          "Wenn du zurück beleidigst, wird es meistens schlimmer.",
          "Immer wieder lesen tut weh. Hol dir lieber Hilfe.",
          null
        ],
        "feedbackCorrect": "Verletzende Kommentare tun weh. Deshalb holst du dir Hilfe und bleibst damit nicht allein."
      },
      "standard": {
        "question": "Unter deinem Video stehen verletzende Kommentare. Wie reagierst du?",
        "hinweis": "Mit wem kannst du darüber sprechen?",
        "answers": [
          "Ich beleidige die Leute zurück.",
          "Ich lese alle Kommentare immer wieder.",
          "Ich bleibe damit nicht allein."
        ],
        "feedbackWrong": [
          "Eine Gegenbeleidigung macht es meist nur schlimmer.",
          "Immer wieder zu lesen tut weh. Hol dir lieber Unterstützung.",
          null
        ],
        "feedbackCorrect": "Verletzende Kommentare tun weh. Deshalb holst du dir Unterstützung und bleibst damit nicht allein."
      }
    },
    "Was ist eine gute YouTube-Regel?": {
      "einfach": {
        "question": "Welche Regel hilft dir bei YouTube?",
        "hinweis": "Überlege, wer bestimmt, wann Schluss ist.",
        "answers": [
          "Ich muss immer weiterschauen.",
          "Ich darf jederzeit stoppen.",
          "Ich schaue jedes Video zu Ende."
        ],
        "feedbackWrong": [
          "Weiterschauen ist keine Pflicht.",
          null,
          "Du darfst jederzeit aufhören, auch mitten im Video."
        ],
        "feedbackCorrect": "Du bestimmst selbst, wie lange du schaust. Deshalb darfst du jederzeit stoppen."
      },
      "standard": {
        "question": "Welche Regel ist bei YouTube sinnvoll?",
        "hinweis": "Wer bestimmt, wann Schluss ist?",
        "answers": [
          "Weiterschauen ist Pflicht.",
          "Aufhören ist jederzeit erlaubt.",
          "Jedes Video bis zum Ende schauen."
        ],
        "feedbackWrong": [
          "Weiterschauen ist keine Pflicht.",
          null,
          "Du darfst jederzeit aufhören – auch mitten im Video."
        ],
        "feedbackCorrect": "Du bestimmst selbst, wie lange du schaust. Aufhören ist jederzeit erlaubt."
      }
    }
  },
  "snapchat": {
    "Du hast ein Foto als Snap geschickt. Nach 10 Sekunden siehst du es nicht mehr. Ist das Foto dann überall weg?": {
      "einfach": {
        "question": "Du hast ein Foto als Snap geschickt, das du nach 10 Sekunden nicht mehr sehen kannst. Ist das Foto dann auch überall weg?",
        "hinweis": "Andere können den Snap 10 Sekunden lang sehen. Überlege, was sie in dieser Zeit damit machen können.",
        "answers": [
          "Ja, dann ist der Snap auf allen Handys weg.",
          "Ja, aber erst nach einer Woche.",
          "Nein, jemand kann den Snap gespeichert haben."
        ],
        "feedbackWrong": [
          "Andere können den Snap speichern, bevor er verschwindet.",
          "Es kommt nicht darauf an, wie viel Zeit vergeht. Andere können den Snap vorher speichern.",
          null
        ],
        "feedbackCorrect": "Ein Snap kann gespeichert sein, auch wenn er bei Snapchat verschwindet."
      },
      "standard": {
        "question": "Du hast ein Foto als Snap verschickt. Nach 10 Sekunden ist es für dich nicht mehr sichtbar. Ist das Foto damit überall verschwunden?",
        "hinweis": "Der Snap ist 10 Sekunden lang sichtbar. Was können andere in dieser Zeit damit machen?",
        "answers": [
          "Ja, er ist dann überall verschwunden.",
          "Ja, nach einer Woche ist er überall gelöscht.",
          "Nein, jemand kann ihn gespeichert haben."
        ],
        "feedbackWrong": [
          "Andere können den Snap speichern, bevor er verschwindet.",
          "Die vergangene Zeit entscheidet das nicht: Andere können den Snap vorher gespeichert haben.",
          null
        ],
        "feedbackCorrect": "Ein Snap kann gespeichert bleiben."
      }
    },
    "Jemand sagt: Wenn du mich magst, schick mir das Bild. Du willst kein Bild schicken. Was machst du?": {
      "einfach": {
        "question": "Jemand sagt zu dir: Wenn du mich magst, schick mir das Bild. Du willst aber kein Bild schicken. Wie reagierst du darauf?",
        "hinweis": "Überlege, ob du etwas beweisen musst, damit jemand dich mag.",
        "answers": [
          "Ich sage Nein und erzähle einer anderen Person davon.",
          "Ich schicke der Person das Bild, weil ich sie mag.",
          "Ich schicke stattdessen ein anderes Bild."
        ],
        "feedbackWrong": [
          null,
          "Die Person macht dir Druck. Deshalb sagst du Nein und holst dir Hilfe.",
          "Auch wenn du ein anderes Bild schickst, reagierst du damit auf den Druck von der Person."
        ],
        "feedbackCorrect": "Du darfst Nein sagen, denn du musst kein Bild schicken."
      },
      "standard": {
        "question": "Jemand sagt: „Wenn du mich magst, schick mir das Bild.“ Du möchtest kein Bild schicken. Wie reagierst du?",
        "hinweis": "Musst du etwas beweisen, damit dich jemand mag?",
        "answers": [
          "Ich sage Nein und erzähle jemandem davon.",
          "Ich schicke das Bild – ich mag die Person ja.",
          "Ich sende ein anderes Bild."
        ],
        "feedbackWrong": [
          null,
          "Damit setzt dich die Person unter Druck. Sag Nein und hol dir Hilfe.",
          "Auch ein anderes Bild zu schicken heißt, auf den Druck einzugehen."
        ],
        "feedbackCorrect": "Du darfst Nein sagen und musst kein Bild schicken."
      }
    },
    "Auf der Karte sehen alle Freunde dein Zuhause. Du willst deinen Standort dort nicht mehr zeigen. Was machst du?": {
      "einfach": {
        "question": "Alle deine Freunde können auf der Karte sehen, wo du zu Hause bist. Du willst deinen Standort dort aber nicht mehr zeigen. Was machst du?",
        "hinweis": "Auf der Karte ist zu sehen, wo du wohnst. Überlege, wer das wissen soll.",
        "answers": [
          "Ich schalte die Anzeige von meinem Standort aus.",
          "Ich lasse die Anzeige so, wie sie ist.",
          "Ich sage meinen Freunden darüber kurz Bescheid."
        ],
        "feedbackWrong": [
          null,
          "Wenn du die Anzeige so lässt, sieht jeder deiner Freunde, wo du wohnst.",
          "Auch wenn du den Freunden Bescheid sagst, bleibt dein Zuhause auf der Karte sichtbar."
        ],
        "feedbackCorrect": "Wenn du die Standortanzeige ausschaltest, sehen deine Freunde deinen Standort nicht mehr auf der Karte."
      },
      "standard": {
        "question": "Alle deine Freunde sehen dein Zuhause auf der Karte. Du möchtest deinen Standort dort nicht mehr anzeigen. Was tust du?",
        "hinweis": "Die Karte zeigt, wo du wohnst. Wer soll das wissen?",
        "answers": [
          "Ich schalte die Standortanzeige aus.",
          "Ich lasse die Einstellung unverändert.",
          "Ich informiere meine Freunde darüber."
        ],
        "feedbackWrong": [
          null,
          "So können alle deine Freunde weiterhin sehen, wo du wohnst.",
          "Deinen Freunden Bescheid zu sagen ändert nichts an der Anzeige auf der Karte."
        ],
        "feedbackCorrect": "Damit ist dein Standort für deine Freunde auf der Karte nicht mehr sichtbar."
      }
    },
    "snapchat/lang/Bilder verschwinden nicht immer": {
      "einfach": {
        "question": "Du hast ein Foto von deinem Ausweis. Ein Freund schreibt: Schick es mir kurz als Snap, ich will dein altes Foto sehen. Was machst du?",
        "answers": [
          "Ich schicke es nicht.",
          "Ich schicke es, weil der Snap ja gleich wieder weg ist.",
          "Ich zeige ihm den Ausweis beim nächsten Treffen."
        ],
        "feedbackWrong": [
          null,
          "Er kann ein Bildschirm-Foto machen, und dann ist dein Ausweis gespeichert. Mit einem Ausweis-Foto kann jemand Schaden anrichten.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann sieht er das Foto, aber er hat kein Bild davon."
        ],
        "feedbackCorrect": "Auch ein Snap kann gespeichert werden, und ein Ausweis-Foto gehört nicht in einen Chat.",
        "remember": "Ich sende nur Bilder, die auch andere sehen dürfen."
      },
      "standard": {
        "question": "Du hast ein Foto deines Ausweises. Ein Freund schreibt: Schick es mir kurz als Snap, ich will dein altes Foto sehen. Was machst du?",
        "answers": [
          "Ich schicke es nicht.",
          "Ich schicke es, der Snap verschwindet ja gleich wieder.",
          "Ich zeige ihm den Ausweis beim nächsten Treffen."
        ],
        "feedbackWrong": [
          null,
          "Er kann einen Screenshot machen, dann ist dein Ausweis gespeichert. Mit einem Ausweisfoto lässt sich Schaden anrichten.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann sieht er das Foto, hat aber kein Bild davon."
        ],
        "feedbackCorrect": "Auch ein Snap lässt sich speichern, und ein Ausweisfoto gehört nicht in einen Chat.",
        "remember": "Ich sende nur Bilder, die auch andere sehen dürften."
      }
    },
    "snapchat/lang/Bild vom Bildschirm": {
      "einfach": {
        "question": "Du willst einen Snap schicken und stellst ein, dass er nur 3 Sekunden sichtbar ist. Ist dein Bild dann geschützt?",
        "answers": [
          "Ja, weil das in 3 Sekunden niemand schafft.",
          "Nein, weil ein Bildschirm-Foto trotzdem geht.",
          "Nein, aber Snapchat sagt mir dann Bescheid."
        ],
        "feedbackWrong": [
          "Ein Bildschirm-Foto dauert nur eine Sekunde, und danach ist dein Bild gespeichert.",
          null,
          "Snapchat sagt dir oft Bescheid, aber dann ist das Bild schon gespeichert."
        ],
        "feedbackCorrect": "Ein Bildschirm-Foto dauert nur eine Sekunde. Deshalb überlegst du vor dem Senden, ob das Bild bleiben darf.",
        "remember": "Ich denke vor dem Senden nach."
      },
      "standard": {
        "question": "Du willst einen Snap schicken und stellst ein, dass er nur drei Sekunden sichtbar ist. Ist dein Bild damit geschützt?",
        "answers": [
          "Ja, in drei Sekunden schafft das niemand.",
          "Nein, ein Screenshot geht trotzdem.",
          "Nein, aber Snapchat meldet mir das dann."
        ],
        "feedbackWrong": [
          "Ein Screenshot dauert nur eine Sekunde, und danach ist dein Bild gespeichert.",
          null,
          "Snapchat meldet es dir oft, aber dann ist das Bild schon gespeichert."
        ],
        "feedbackCorrect": "Ein Screenshot dauert nur eine Sekunde. Deshalb überlegst du vor dem Senden, ob das Bild bleiben darf.",
        "remember": "Vor dem Senden denke ich nach."
      }
    },
    "snapchat/lang/Sehr private Bilder": {
      "einfach": {
        "question": "Jemand schreibt dir: Schick mir ein sehr privates Bild, sonst erzähle ich allen etwas Schlechtes über dich. Was machst du?",
        "answers": [
          "Ich schicke ein Bild, damit die Person mich in Ruhe lässt.",
          "Ich schicke kein Bild und hole mir Hilfe.",
          "Ich schicke kein Bild."
        ],
        "feedbackWrong": [
          "Die Person droht dir, und mit dem Bild kann sie noch mehr Druck machen. Schick lieber kein Bild.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Du musst das nicht allein lösen. So eine Drohung ist verboten.",
          null
        ],
        "feedbackCorrect": "Das ist eine Drohung, und niemand darf dich so drängen. Mach ein Bildschirm-Foto von der Nachricht, denn das ist dein Beweis.",
        "remember": "Ich schicke keine privaten Bilder, wenn ich Stress habe."
      },
      "standard": {
        "question": "Jemand schreibt dir: Schick mir ein sehr privates Bild, sonst erzähle ich allen etwas Schlechtes über dich. Was machst du?",
        "answers": [
          "Ich schicke eins, damit die Person Ruhe gibt.",
          "Ich schicke kein Bild und hole mir Hilfe.",
          "Ich schicke kein Bild."
        ],
        "feedbackWrong": [
          "Die Person droht dir, und mit dem Bild könnte sie den Druck noch erhöhen. Schick lieber keins.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Du musst das nicht allein lösen. Eine solche Drohung ist strafbar.",
          null
        ],
        "feedbackCorrect": "Das ist eine Drohung, und niemand darf dich so unter Druck setzen. Mach einen Screenshot der Nachricht – er ist dein Beweis.",
        "remember": "Unter Druck schicke ich keine privaten Bilder."
      }
    },
    "snapchat/lang/Standort": {
      "einfach": {
        "question": "Du triffst dich heute mit einer Freundin in der Stadt, und sie fragt: Wo bist du gerade? Was machst du?",
        "answers": [
          "Ich schalte den Standort für alle an, damit sie mich sieht.",
          "Ich rufe sie kurz an.",
          "Ich schreibe ihr, dass ich am Bahnhof bin."
        ],
        "feedbackWrong": [
          "Dann sehen alle Kontakte deinen Ort und nicht nur deine Freundin. Schreib ihr lieber selbst, wo du bist.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Auch so erfährt nur deine Freundin, wo du bist.",
          null
        ],
        "feedbackCorrect": "So weiß nur deine Freundin, wo du bist, und du bestimmst selbst, wer deinen Ort erfährt.",
        "remember": "Ich teile meinen Standort nicht einfach."
      },
      "standard": {
        "question": "Du triffst dich heute mit einer Freundin in der Stadt, und sie fragt: Wo bist du gerade? Was machst du?",
        "answers": [
          "Ich schalte den Standort für alle frei, dann sieht sie mich.",
          "Ich rufe sie kurz an.",
          "Ich schreibe ihr, dass ich am Bahnhof bin."
        ],
        "feedbackWrong": [
          "Dann sehen alle Kontakte deinen Standort, nicht nur deine Freundin. Schreib ihr lieber selbst, wo du bist.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Auch so erfährt nur deine Freundin, wo du bist.",
          null
        ],
        "feedbackCorrect": "So weiß nur deine Freundin, wo du bist – und du bestimmst selbst, wer deinen Standort erfährt.",
        "remember": "Meinen Standort teile ich nur bewusst."
      }
    },
    "snapchat/lang/Kontakte": {
      "einfach": {
        "question": "Snapchat schlägt dir eine Person vor: Lina. Ihr habt drei gemeinsame Freunde, und Lina schickt dir eine Anfrage. Du kennst sie nicht. Was machst du?",
        "answers": [
          "Ich nehme die Anfrage nicht an.",
          "Ich nehme an, weil Snapchat sie ja vorschlägt.",
          "Ich frage erst einen gemeinsamen Freund nach Lina."
        ],
        "feedbackWrong": [
          null,
          "Snapchat schlägt viele Menschen vor, aber das heißt nicht, dass du sie kennst. Du weißt nicht, wer Lina ist.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Danach weißt du mehr über Lina. Die Anfrage kann so lange warten."
        ],
        "feedbackCorrect": "Du kennst Lina nicht, und ein Vorschlag von Snapchat sagt wenig. Du musst niemanden annehmen.",
        "remember": "Ich prüfe, wer mir schreibt."
      },
      "standard": {
        "question": "Snapchat schlägt dir eine Person vor: Lina. Ihr habt drei gemeinsame Freunde, und Lina schickt dir eine Anfrage. Du kennst sie nicht. Was machst du?",
        "answers": [
          "Ich nehme die Anfrage nicht an.",
          "Ich nehme an, Snapchat schlägt sie ja vor.",
          "Ich frage erst einen gemeinsamen Freund nach ihr."
        ],
        "feedbackWrong": [
          null,
          "Snapchat schlägt viele Menschen vor – das heißt nicht, dass du sie kennst. Du weißt nicht, wer Lina ist.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Danach weißt du mehr über Lina. Die Anfrage kann so lange warten."
        ],
        "feedbackCorrect": "Du kennst Lina nicht, und ein Vorschlag von Snapchat sagt wenig. Annehmen musst du niemanden.",
        "remember": "Ich prüfe, wer mir schreibt, bevor ich annehme."
      }
    },
    "snapchat/lang/Stress erkennen": {
      "einfach": {
        "question": "Ein Freund schreibt: Schick mir ein Bild, sonst bin ich nicht mehr dein Freund. Sag es niemandem. Was machst du?",
        "answers": [
          "Ich schicke das Bild, weil ich den Freund nicht verlieren will.",
          "Ich schicke kein Bild.",
          "Ich schicke kein Bild und erzähle es jemandem."
        ],
        "feedbackWrong": [
          "Ein echter Freund droht nicht und verlangt auch kein Geheimnis. Stress und Geheimhaltung sind Warnzeichen.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Du musst kein Geheimnis daraus machen, und Reden hilft bei Stress."
        ],
        "feedbackCorrect": "Stress und Geheimhaltung sind Warnzeichen, und ein echter Freund droht dir nicht.",
        "remember": "Stress ist ein Warnzeichen."
      },
      "standard": {
        "question": "Ein Freund schreibt: Schick mir ein Bild, sonst bin ich nicht mehr dein Freund. Sag es niemandem. Was machst du?",
        "answers": [
          "Ich schicke es, ich will den Freund nicht verlieren.",
          "Ich schicke kein Bild.",
          "Ich schicke kein Bild und erzähle es jemandem."
        ],
        "feedbackWrong": [
          "Ein echter Freund droht nicht und verlangt kein Geheimnis. Druck und Geheimhaltung sind Warnzeichen.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Du musst kein Geheimnis daraus machen, und Reden hilft gegen den Druck."
        ],
        "feedbackCorrect": "Druck und Geheimhaltung sind Warnzeichen. Ein echter Freund droht dir nicht.",
        "remember": "Druck und Geheimhaltung sind Warnzeichen."
      }
    },
    "snapchat/lang/Was kann ich tun?": {
      "einfach": {
        "question": "Eine Person schreibt dir jeden Tag: Schick mir endlich ein Bild. Du hast schon Nein gesagt. Was machst du?",
        "answers": [
          "Ich schicke ein Bild, damit die Person endlich aufhört.",
          "Ich blockiere die Person.",
          "Ich zeige die Nachrichten jemandem und blockiere sie dann."
        ],
        "feedbackWrong": [
          "Ein gesendetes Bild bekommst du nicht zurück, und die Person will dann oft noch mehr.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Zu zweit sieht man mehr, und danach kann dir die Person nicht mehr schreiben."
        ],
        "feedbackCorrect": "Du hast Nein gesagt, und das reicht. Nach dem Blockieren kann dir die Person nicht mehr schreiben.",
        "remember": "Ich sage Nein und zeige es jemandem."
      },
      "standard": {
        "question": "Eine Person schreibt dir jeden Tag: Schick mir endlich ein Bild. Du hast schon Nein gesagt. Was machst du?",
        "answers": [
          "Ich schicke eins, damit die Person endlich aufhört.",
          "Ich blockiere die Person.",
          "Ich zeige die Nachrichten jemandem und blockiere sie dann."
        ],
        "feedbackWrong": [
          "Ein gesendetes Bild bekommst du nicht zurück, und oft will die Person danach noch mehr.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Zu zweit sieht man mehr, und danach kann dir die Person nicht mehr schreiben."
        ],
        "feedbackCorrect": "Du hast Nein gesagt, und das genügt. Nach dem Blockieren kann dir die Person nicht mehr schreiben.",
        "remember": "Ich sage Nein und zeige die Nachricht jemandem."
      }
    },
    "snapchat/kurz/Bilder verschwinden nicht wirklich": {
      "einfach": {
        "question": "Du hast ein albernes Foto von dir gemacht und willst es einem Freund als Snap schicken. Was überlegst du vorher?",
        "answers": [
          "Nichts, weil der Snap ja nach 10 Sekunden weg ist.",
          "Ich überlege, ob auch andere das Foto sehen dürfen.",
          "Ich schicke es, weil mein Freund es bestimmt niemandem zeigt."
        ],
        "feedbackWrong": [
          "Der Snap verschwindet nur auf deinem Bildschirm. Dein Freund kann vorher ein Bildschirm-Foto machen.",
          null,
          "Das kann sein, aber sicher weißt du es nicht. Ein Bildschirm-Foto kann er weiterschicken, auch aus Versehen."
        ],
        "feedbackCorrect": "Andere können ein Bild speichern. Deshalb prüfst du vorher, ob alle es sehen dürfen.",
        "remember": "Bilder verschwinden nicht wirklich."
      },
      "standard": {
        "question": "Du hast ein albernes Foto von dir gemacht und willst es einem Freund als Snap schicken. Was überlegst du vorher?",
        "answers": [
          "Nichts, der Snap verschwindet ja nach zehn Sekunden.",
          "Ich überlege, ob es auch andere sehen dürften.",
          "Ich schicke es, mein Freund zeigt es bestimmt niemandem."
        ],
        "feedbackWrong": [
          "Der Snap verschwindet nur von deinem Bildschirm. Dein Freund kann vorher einen Screenshot machen.",
          null,
          "Mag sein, aber sicher weißt du es nicht. Einen Screenshot kann er weiterleiten, auch aus Versehen."
        ],
        "feedbackCorrect": "Andere können ein Bild speichern. Deshalb prüfst du vorher, ob es jeder sehen dürfte.",
        "remember": "Bilder verschwinden nicht wirklich."
      }
    },
    "snapchat/kurz/Dein Standort": {
      "einfach": {
        "question": "Du öffnest die Karte bei Snapchat und siehst, dass alle deine Kontakte deinen Ort sehen können, auch fast fremde Menschen. Was machst du?",
        "answers": [
          "Ich lasse es so, damit meine Freunde mich finden.",
          "Ich zeige meinen Ort nur noch zwei guten Freunden.",
          "Ich schalte den Standort aus."
        ],
        "feedbackWrong": [
          "Dann sehen auch fast fremde Menschen, wo du wohnst und wann du unterwegs bist.",
          "Das ist besser als für alle. Aber auch ein Freund kann es weitererzählen. Am sichersten ist es, den Standort auszuschalten.",
          null
        ],
        "feedbackCorrect": "Dann zeigt die Karte deinen Ort nicht mehr. Auch ein Bild kann aber den Ort zeigen.",
        "remember": "Ich schalte den Standort aus."
      },
      "standard": {
        "question": "Du öffnest die Snapchat-Karte und stellst fest: Alle deine Kontakte sehen deinen Standort, auch flüchtige Bekannte. Was machst du?",
        "answers": [
          "Ich lasse es so, dann finden mich meine Freunde.",
          "Ich zeige meinen Standort nur noch zwei guten Freunden.",
          "Ich schalte die Standort-Freigabe aus."
        ],
        "feedbackWrong": [
          "Dann sehen auch flüchtige Bekannte, wo du wohnst und wann du unterwegs bist.",
          "Das ist schon besser als für alle – aber auch ein Freund kann ihn weitergeben. Am sichersten ist es, die Freigabe auszuschalten.",
          null
        ],
        "feedbackCorrect": "Dann zeigt die Karte deinen Standort nicht mehr. Auch ein Bild kann den Ort allerdings verraten.",
        "remember": "Den Standort schalte ich aus."
      }
    },
    "snapchat/kurz/Niemand darf dich zwingen": {
      "einfach": {
        "question": "Ein Bekannter schreibt dir bei Snapchat: Schick mir ein Bild von dir. Alle anderen machen das auch. Du willst das nicht. Was machst du?",
        "answers": [
          "Ich schreibe ihm, dass ich das nicht will.",
          "Ich schicke ein Bild, weil es alle anderen ja auch machen.",
          "Ich sage Nein und blockiere ihn dann."
        ],
        "feedbackWrong": [
          null,
          "Du weißt nicht, ob das überhaupt stimmt, und es ist auch egal. Dein Nein gilt.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann kann er dir nicht mehr schreiben, und dein Nein gilt."
        ],
        "feedbackCorrect": "Du willst das nicht, und dein Nein gilt. Du musst es nicht erklären.",
        "remember": "Ich darf Nein sagen."
      },
      "standard": {
        "question": "Ein Bekannter schreibt dir bei Snapchat: Schick mir ein Bild von dir. Alle anderen machen das auch. Du willst das nicht. Was machst du?",
        "answers": [
          "Ich schreibe ihm, dass ich das nicht möchte.",
          "Ich schicke eins, alle anderen machen es ja auch.",
          "Ich sage Nein und blockiere ihn."
        ],
        "feedbackWrong": [
          null,
          "Ob das überhaupt stimmt, weißt du nicht – und es spielt keine Rolle. Dein Nein gilt.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann kann er dir nicht mehr schreiben, und dein Nein gilt."
        ],
        "feedbackCorrect": "Du möchtest das nicht, und dein Nein gilt. Erklären musst du es nicht.",
        "remember": "Ich darf jederzeit Nein sagen."
      }
    },
    "Eine Person schickt dir viele Snaps. Du kennst sie nicht. Was machst du?": {
      "einfach": {
        "question": "Eine Person, die du nicht kennst, schickt dir viele Snaps. Was machst du?",
        "hinweis": "Überlege, was du tun darfst, wenn du die Person nicht kennst.",
        "answers": [
          "Ich schicke etwas zurück.",
          "Ich blockiere die Person.",
          "Ich schaue mir alle Snaps an."
        ],
        "feedbackWrong": [
          "Du weißt nicht, wer das ist. Deshalb schickst du nichts zurück.",
          null,
          "Das Anschauen bringt dir nichts. Blockiere die Person lieber."
        ],
        "feedbackCorrect": "Du weißt nicht, wer die Person ist. Nach dem Blockieren kann sie dir keine Snaps mehr schicken."
      },
      "standard": {
        "question": "Eine unbekannte Person schickt dir lauter Snaps. Wie reagierst du?",
        "hinweis": "Was darfst du tun, wenn du die Person nicht kennst?",
        "answers": [
          "Ich schicke etwas zurück.",
          "Ich blockiere die Person.",
          "Ich schaue mir alle Snaps an."
        ],
        "feedbackWrong": [
          "Du weißt nicht, wer dahintersteckt – schick nichts zurück.",
          null,
          "Das Anschauen bringt dir nichts. Blockiere die Person lieber."
        ],
        "feedbackCorrect": "Du weißt nicht, wer dahintersteckt. Nach dem Blockieren kann dir die Person keine Snaps mehr schicken."
      }
    },
    "Eine Nachricht sagt: Schick ein Bild, aber sag es niemandem. Was ist das?": {
      "einfach": {
        "question": "In einer Nachricht steht: Schick mir ein Bild, aber sag es niemandem. Was ist das?",
        "hinweis": "Überlege, was es bedeutet, wenn du es niemandem sagen sollst.",
        "answers": [
          "Kein Problem.",
          "Nur ein Spaß.",
          "Ein Warnzeichen."
        ],
        "feedbackWrong": [
          "Doch, denn Druck und Geheimhaltung sind Warnzeichen.",
          "Für einen Spaß braucht man kein Geheimnis.",
          null
        ],
        "feedbackCorrect": "Die Person will, dass niemand davon erfährt. Das ist ein Warnzeichen. Du darfst die Nachricht trotzdem einer Person zeigen, der du vertraust."
      },
      "standard": {
        "question": "In einer Nachricht steht: „Schick mir ein Bild, aber sag es niemandem.“ Was ist das?",
        "hinweis": "Was bedeutet es, wenn du es niemandem sagen sollst?",
        "answers": [
          "Kein Problem.",
          "Nur ein Spaß.",
          "Ein Warnzeichen."
        ],
        "feedbackWrong": [
          "Doch – Druck und Geheimhaltung sind Warnzeichen.",
          "Ein Spaß braucht kein Geheimnis.",
          null
        ],
        "feedbackCorrect": "Die Person will, dass niemand davon erfährt – das ist ein Warnzeichen. Du darfst die Nachricht trotzdem einer Vertrauensperson zeigen."
      }
    },
    "Snapchat zeigt deinen Ort auf einer Karte. Was ist sicherer?": {
      "einfach": {
        "question": "Snapchat zeigt deinen Ort auf einer Karte. Was ist am sichersten?",
        "hinweis": "Überlege, woher die Karte weiß, wo du bist.",
        "answers": [
          "Ich lasse die Karte für alle an.",
          "Ich schalte die Ort-Anzeige aus.",
          "Ich lasse nur einen Freund sehen."
        ],
        "feedbackWrong": [
          "Dann sieht jeder, wo du bist.",
          null,
          "Das ist besser als für alle. Aber auch ein Freund kann es weitererzählen. Am sichersten ist es, die Ort-Anzeige auszuschalten."
        ],
        "feedbackCorrect": "Wenn die Ort-Anzeige aus ist, zeigt die Karte deinen Ort nicht. Achte trotzdem darauf, was auf deinen Bildern zu sehen ist."
      },
      "standard": {
        "question": "Snapchat zeigt deinen Standort auf einer Karte. Was ist am sichersten?",
        "hinweis": "Woher weiß die Karte, wo du bist?",
        "answers": [
          "Die Karte für alle anlassen.",
          "Die Standortfreigabe ausschalten.",
          "Nur einem Freund den Standort zeigen."
        ],
        "feedbackWrong": [
          "Dann sieht jeder, wo du dich aufhältst.",
          null,
          "Das ist schon besser als für alle – aber auch ein Freund kann ihn weitergeben. Am sichersten ist es, die Freigabe auszuschalten."
        ],
        "feedbackCorrect": "Ohne Standortfreigabe zeigt die Karte deinen Ort nicht. Trotzdem können Details auf Bildern verraten, wo du bist."
      }
    },
    "Was darfst du bei Stress sagen?": {
      "einfach": {
        "question": "Jemand macht dir bei Snapchat Stress. Was darfst du sagen?",
        "hinweis": "Überlege, welches Wort du bei Stress immer sagen darfst.",
        "answers": [
          "Ich muss immer Ja sagen.",
          "Ich darf Nein sagen.",
          "Ich sage erst mal gar nichts."
        ],
        "feedbackWrong": [
          "Du musst nicht immer Ja sagen.",
          null,
          "Wenn du schweigst, hört der Stress oft nicht auf. Sag lieber klar Nein."
        ],
        "feedbackCorrect": "Du darfst Nein sagen. Ein klares Nein schützt dich besser als Schweigen."
      },
      "standard": {
        "question": "Jemand setzt dich auf Snapchat unter Druck. Was darfst du sagen?",
        "hinweis": "Welches Wort darfst du bei Druck immer sagen?",
        "answers": [
          "Immer Ja.",
          "Nein.",
          "Erst einmal gar nichts."
        ],
        "feedbackWrong": [
          "Du musst nicht immer Ja sagen.",
          null,
          "Schweigen beendet den Druck oft nicht – ein klares Nein schützt dich besser."
        ],
        "feedbackCorrect": "Du darfst Nein sagen. Ein klares Nein schützt dich besser als Schweigen."
      }
    },
    "Du machst ein Bild vom Bildschirm. Was hast du dann?": {
      "einfach": {
        "question": "Du machst bei deinem Handy ein Bild vom Bildschirm. Was hast du dann?",
        "hinweis": "Überlege, was bei einem Bild vom Bildschirm gespeichert wird.",
        "answers": [
          "Ein Video von allem auf dem Bildschirm.",
          "Eine Nachricht, die gelöscht wurde.",
          "Ein Foto vom ganzen Bildschirm."
        ],
        "feedbackWrong": [
          "Ein Bild vom Bildschirm ist ein Foto und kein Video.",
          "Dabei wird nichts gelöscht. Du hast ein Foto gemacht.",
          null
        ],
        "feedbackCorrect": "Du hast ein Foto von allem, was auf dem Bildschirm zu sehen war. So kann man auch Snaps speichern."
      },
      "standard": {
        "question": "Du machst auf deinem Handy einen Screenshot. Was hast du dann?",
        "hinweis": "Was wird bei einem Screenshot gespeichert?",
        "answers": [
          "Ein Video vom ganzen Bildschirm.",
          "Eine gerade gelöschte Nachricht.",
          "Ein Foto vom ganzen Bildschirm."
        ],
        "feedbackWrong": [
          "Ein Screenshot ist ein Foto, kein Video.",
          "Dabei wird nichts gelöscht – du hast ein Foto gemacht.",
          null
        ],
        "feedbackCorrect": "Ein Screenshot ist ein Foto von allem, was zu sehen war – so lassen sich auch Snaps speichern."
      }
    },
    "Was machst du bei komischen Kontakten?": {
      "einfach": {
        "question": "Ein Kontakt bei Snapchat kommt dir komisch vor. Was machst du?",
        "hinweis": "Überlege, welcher erste Schritt bei Unbekannten immer hilft.",
        "answers": [
          "Ich prüfe den Kontakt erst.",
          "Ich sende private Bilder.",
          "Ich schreibe sofort zurück."
        ],
        "feedbackWrong": [
          null,
          "Private Bilder gehören nicht an fremde Personen.",
          "Wenn du antwortest, sieht die Person, dass hier jemand liest. Prüfe lieber erst."
        ],
        "feedbackCorrect": "Ein Kontakt, der dir komisch vorkommt, kann gefälscht sein. Deshalb prüfst du ihn zuerst."
      },
      "standard": {
        "question": "Ein Kontakt auf Snapchat kommt dir seltsam vor. Was tust du?",
        "hinweis": "Welcher erste Schritt hilft bei Unbekannten immer?",
        "answers": [
          "Ich prüfe den Kontakt erst.",
          "Ich sende private Bilder.",
          "Ich schreibe sofort zurück."
        ],
        "feedbackWrong": [
          null,
          "Private Bilder gehören nicht an Fremde.",
          "Eine Antwort zeigt, dass hier jemand liest. Prüfe lieber erst."
        ],
        "feedbackCorrect": "Ein Kontakt, der dir seltsam vorkommt, kann gefälscht sein. Deshalb prüfst du ihn zuerst."
      }
    },
    "Was ist eine gute Snapchat-Regel?": {
      "einfach": {
        "question": "Welche Regel hilft dir bei Snapchat?",
        "hinweis": "Ein Bild, das du gesendet hast, kannst du nicht zurückholen.",
        "answers": [
          "Ich denke erst und sende dann.",
          "Ich schicke alles ganz schnell.",
          "Ich lösche später alles wieder."
        ],
        "feedbackWrong": [
          null,
          "Wenn du schnell schickst, kann das Probleme machen.",
          "Löschen kommt oft zu spät. Denk lieber vorher nach."
        ],
        "feedbackCorrect": "Andere können einen Snap speichern. Deshalb denkst du erst nach und sendest dann."
      },
      "standard": {
        "question": "Welche Regel ist bei Snapchat sinnvoll?",
        "hinweis": "Was gesendet ist, lässt sich nicht zurückholen.",
        "answers": [
          "Erst denken, dann senden.",
          "Alles schnell verschicken.",
          "Später alles wieder löschen."
        ],
        "feedbackWrong": [
          null,
          "Schnelles Verschicken kann Probleme machen.",
          "Löschen kommt oft zu spät. Denk lieber vorher nach."
        ],
        "feedbackCorrect": "Andere können einen Snap speichern. Deshalb denkst du erst nach und sendest dann."
      }
    }
  },
  "tiktok": {
    "Bei einer Challenge sollst du die Luft anhalten. Was machst du?": {
      "einfach": {
        "question": "Bei einer Challenge sollst du die Luft anhalten, also eine Zeit lang nicht atmen. Was machst du?",
        "hinweis": "Luft anhalten kann gefährlich werden. Überlege, was das für deine Entscheidung bedeutet.",
        "answers": [
          "Ich probiere diese Challenge aus.",
          "Ich mache bei dieser Challenge nicht mit.",
          "Ich filme eine andere Person, während sie die Challenge macht."
        ],
        "feedbackWrong": [
          "Das ist gefährlich, deshalb machst du bei dieser Challenge nicht mit.",
          null,
          "Wenn du eine andere Person dabei filmst, ist diese Person in Gefahr."
        ],
        "feedbackCorrect": "Challenges wie diese können sehr gefährlich sein."
      },
      "standard": {
        "question": "Bei einer Challenge sollst du die Luft anhalten. Wie reagierst du?",
        "hinweis": "Luft anhalten kann gefährlich sein. Was bedeutet das für dich?",
        "answers": [
          "Ich probiere die Challenge aus.",
          "Ich mache nicht mit.",
          "Ich filme jemand anderen dabei."
        ],
        "feedbackWrong": [
          "Das ist gefährlich. Mach bei dieser Challenge nicht mit.",
          null,
          "Auch dabei gerät jemand in Gefahr: die Person, die du filmst."
        ],
        "feedbackCorrect": "Solche Challenges können sehr gefährlich werden."
      }
    },
    "Eine fremde Person will dir ein Geschenk schicken. Du kennst die Person nicht. Sie fragt nach deiner Adresse. Was machst du?": {
      "einfach": {
        "question": "Eine fremde Person, die du nicht kennst, möchte dir ein Geschenk schicken. Dafür fragt sie nach deiner Adresse. Was machst du?",
        "hinweis": "Ein Geschenk klingt nett. Überlege aber, wofür die Person deine Adresse braucht.",
        "answers": [
          "Ich schreibe der Person meine Adresse nicht.",
          "Ich schreibe der Person meine Adresse.",
          "Ich schreibe nur, in welcher Straße ich wohne."
        ],
        "feedbackWrong": [
          null,
          "Wenn du deine Adresse schreibst, erfahren fremde Menschen, wo du wohnst.",
          "Auch der Name deiner Straße zeigt, wo du wohnst."
        ],
        "feedbackCorrect": "Mit deiner Adresse weiß eine fremde Person, wo du wohnst. Deshalb gibst du sie nicht weiter, wenn du die Person nicht kennst."
      },
      "standard": {
        "question": "Eine fremde Person bietet dir an, ein Geschenk zu schicken, und fragt nach deiner Adresse. Du kennst die Person nicht. Wie reagierst du?",
        "hinweis": "Ein Geschenk klingt verlockend. Wozu braucht die Person deine Adresse?",
        "answers": [
          "Ich gebe meine Adresse nicht an.",
          "Ich teile meine Adresse mit.",
          "Ich nenne nur meine Straße."
        ],
        "feedbackWrong": [
          null,
          "So bekommt eine fremde Person deine Wohnadresse.",
          "Auch deine Straße verrät etwas über deinen Wohnort."
        ],
        "feedbackCorrect": "Mit deiner Adresse weiß eine fremde Person, wo du wohnst. Deshalb gibst du sie Unbekannten nicht."
      }
    },
    "Es ist spät. Du bist müde. Du willst jetzt aufhören. Das nächste Video startet von allein. Was machst du?": {
      "einfach": {
        "question": "Es ist spät und du bist müde. Du willst jetzt aufhören, aber das nächste Video startet von allein. Was machst du?",
        "hinweis": "Überlege, wer entscheidet, wann du mit dem Schauen aufhörst.",
        "answers": [
          "Ich schaue einfach weitere Videos an.",
          "Ich lege mein Handy jetzt weg.",
          "Ich schaue mir noch drei Videos an."
        ],
        "feedbackWrong": [
          "Wenn du weiterschaust, wird es sehr spät. Du entscheidest selbst, wann du aufhörst.",
          null,
          "Nach den drei Videos starten wieder neue Videos. Deshalb legst du dein Handy lieber weg."
        ],
        "feedbackCorrect": "Du entscheidest selbst, wann du mit dem Schauen aufhörst."
      },
      "standard": {
        "question": "Es ist spät, du bist müde und willst jetzt aufhören. Trotzdem startet automatisch das nächste Video. Was tust du?",
        "hinweis": "Wer bestimmt, wann du mit dem Schauen aufhörst?",
        "answers": [
          "Ich schaue weiter.",
          "Ich lege das Handy weg.",
          "Ich schaue noch drei Videos."
        ],
        "feedbackWrong": [
          "So wird es sehr spät. Du selbst bestimmst, wann Schluss ist.",
          null,
          "Auch nach drei Videos folgen wieder neue. Leg das Handy lieber weg."
        ],
        "feedbackCorrect": "Du bestimmst selbst, wann Schluss ist."
      }
    },
    "tiktok/lang/Trends": {
      "einfach": {
        "question": "Bei TikTok tanzen gerade viele zu einem Lied, und du hast Lust mitzumachen. Was überlegst du?",
        "answers": [
          "Ich mache lieber nie mit, weil alle Trends gefährlich sind.",
          "Ich prüfe, ob der Trend gefährlich ist, und mache dann mit.",
          "Ich mache sofort mit, weil Trends immer harmlos sind."
        ],
        "feedbackWrong": [
          "Nicht alle Trends sind gefährlich, manche sind einfach lustig. Du prüfst, ob du dich verletzen kannst.",
          null,
          "Manche Trends sind gefährlich. Schau deshalb zuerst hin, ob du dich verletzen kannst."
        ],
        "feedbackCorrect": "Tanzen ist nicht gefährlich. Du prüfst zuerst und entscheidest dann selbst.",
        "remember": "Ich mache gefährliche Trends nicht nach."
      },
      "standard": {
        "question": "Auf TikTok tanzen gerade viele zu einem Lied, und du hast Lust mitzumachen. Was überlegst du?",
        "answers": [
          "Ich mache lieber nie mit, alle Trends sind gefährlich.",
          "Ich prüfe erst, ob er gefährlich ist, und mache dann mit.",
          "Ich mache sofort mit, Trends sind immer harmlos."
        ],
        "feedbackWrong": [
          "Nicht alle Trends sind gefährlich, manche machen einfach Spaß. Du prüfst, ob du dich dabei verletzen kannst.",
          null,
          "Manche Trends sind gefährlich. Sieh deshalb zuerst hin, ob du dich dabei verletzen kannst."
        ],
        "feedbackCorrect": "Tanzen ist ungefährlich. Du prüfst zuerst und entscheidest dann selbst.",
        "remember": "Gefährliche Trends mache ich nicht nach."
      }
    },
    "tiktok/lang/Gefährliche Trends erkennen": {
      "einfach": {
        "question": "Ein Trend sagt: Iss einen ganz scharfen Chip, halte 5 Minuten durch und trink nichts. Deine Freunde filmen schon. Was machst du?",
        "answers": [
          "Ich esse den Chip, weil meine Freunde ja warten.",
          "Ich sage, dass ich lieber filme und das nicht essen will.",
          "Ich mache nicht mit."
        ],
        "feedbackWrong": [
          "Sehr scharfe Chips können weh tun, und manche Menschen bekommen schlecht Luft. Deine Freunde können warten.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Dann bist du dabei, aber du isst nichts Gefährliches.",
          null
        ],
        "feedbackCorrect": "Der Trend kann weh tun, und du musst bei keinem Trend mitmachen, auch nicht vor Freunden.",
        "remember": "Ich muss bei keinem Trend mitmachen."
      },
      "standard": {
        "question": "Ein Trend verlangt: Iss einen extrem scharfen Chip, halte fünf Minuten durch und trink nichts. Deine Freunde filmen schon. Was machst du?",
        "answers": [
          "Ich esse den Chip, meine Freunde warten ja.",
          "Ich sage, dass ich lieber filme und das nicht esse.",
          "Ich mache nicht mit."
        ],
        "feedbackWrong": [
          "Extrem scharfe Chips können wehtun, und manche bekommen davon schlecht Luft. Deine Freunde können warten.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Dann bist du dabei, isst aber nichts Gefährliches.",
          null
        ],
        "feedbackCorrect": "Der Trend kann wehtun, und du musst bei keinem Trend mitmachen – auch nicht vor Freunden.",
        "remember": "Bei keinem Trend muss ich mitmachen."
      }
    },
    "tiktok/lang/Ähnliche Videos": {
      "einfach": {
        "question": "Du hast ein paar traurige Videos angeschaut, und jetzt zeigt TikTok dir fast nur noch traurige Videos. Das tut dir nicht gut. Was machst du?",
        "answers": [
          "Ich mache eine Pause von TikTok.",
          "Ich schaue weiter, weil TikTok eben zeigt, was zu mir passt.",
          "Ich suche selbst nach anderen Videos."
        ],
        "feedbackWrong": [
          null,
          "TikTok merkt nur, was du lange anschaust. Das ist nicht immer das, was dir guttut.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Auch so bestimmst du selbst, was du anschaust."
        ],
        "feedbackCorrect": "Die Videos tun dir nicht gut, also darfst du Pause machen. TikTok merkt nur, was du lange anschaust.",
        "remember": "Wenn mir etwas nicht guttut, mache ich eine Pause."
      },
      "standard": {
        "question": "Du hast ein paar traurige Videos angesehen, und jetzt zeigt TikTok dir fast nur noch traurige Videos. Das tut dir nicht gut. Was machst du?",
        "answers": [
          "Ich lege eine TikTok-Pause ein.",
          "Ich schaue weiter, TikTok zeigt eben, was zu mir passt.",
          "Ich suche selbst nach anderen Videos."
        ],
        "feedbackWrong": [
          null,
          "TikTok registriert nur, was du lange ansiehst – nicht, was dir guttut.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Auch so bestimmst du selbst, was du dir ansiehst."
        ],
        "feedbackCorrect": "Die Videos tun dir nicht gut, also darfst du eine Pause machen. TikTok registriert nur, was du lange ansiehst.",
        "remember": "Wenn mir etwas nicht guttut, lege ich eine Pause ein."
      }
    },
    "tiktok/lang/Private Nachrichten": {
      "einfach": {
        "question": "Eine fremde Person schreibt dir: Ich mag deine Videos und will dich als Model. Schick mir deinen Namen und deine Telefon-Nummer. Was machst du?",
        "answers": [
          "Ich schicke nur meine Telefon-Nummer, aber nicht den Namen.",
          "Ich schicke nichts und melde das Profil bei TikTok.",
          "Ich schicke nichts."
        ],
        "feedbackWrong": [
          "Auch die Telefon-Nummer ist privat. Damit kann die Person dich immer wieder anrufen oder anschreiben.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Deine Daten bleiben bei dir, und TikTok kann das Profil prüfen.",
          null
        ],
        "feedbackCorrect": "Du kennst die Person nicht, und dein Name und deine Telefon-Nummer sind privat.",
        "remember": "Ich schütze meine privaten Daten."
      },
      "standard": {
        "question": "Eine fremde Person schreibt dir: Ich mag deine Videos und möchte dich als Model. Schick mir deinen Namen und deine Telefonnummer. Was machst du?",
        "answers": [
          "Ich schicke nur meine Telefonnummer, den Namen nicht.",
          "Ich schicke nichts und melde das Profil bei TikTok.",
          "Ich schicke nichts."
        ],
        "feedbackWrong": [
          "Auch die Telefonnummer ist privat. Damit kann die Person dich immer wieder anrufen oder anschreiben.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Deine Daten bleiben bei dir, und TikTok kann das Profil prüfen.",
          null
        ],
        "feedbackCorrect": "Du kennst die Person nicht, und dein Name und deine Telefonnummer sind privat.",
        "remember": "Meine privaten Daten schütze ich."
      }
    },
    "tiktok/lang/Videos posten": {
      "einfach": {
        "question": "Du filmst dich in deinem Zimmer beim Singen. Im Hintergrund hängt ein Brief vom Amt an der Wand, und man kann ihn lesen. Was machst du?",
        "answers": [
          "Ich nehme den Brief ab und filme noch einmal.",
          "Ich poste das Video so, weil niemand auf die Wand schaut.",
          "Ich stelle mich vor eine andere Wand."
        ],
        "feedbackWrong": [
          null,
          "Andere können das Video anhalten und den Brief lesen. Darauf stehen dein Name und deine Adresse.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann ist der Brief nicht mehr im Bild."
        ],
        "feedbackCorrect": "Jetzt sieht niemand den Brief. Andere können ein Video anhalten und sich alles genau ansehen.",
        "remember": "Ich prüfe Videos vor dem Posten."
      },
      "standard": {
        "question": "Du filmst dich in deinem Zimmer beim Singen. Im Hintergrund hängt gut lesbar ein Brief vom Amt an der Wand. Was machst du?",
        "answers": [
          "Ich nehme den Brief ab und filme noch einmal.",
          "Ich poste das Video so, auf die Wand schaut niemand.",
          "Ich stelle mich vor eine andere Wand."
        ],
        "feedbackWrong": [
          null,
          "Andere können das Video anhalten und den Brief lesen – mit deinem Namen und deiner Adresse.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann ist der Brief nicht mehr im Bild."
        ],
        "feedbackCorrect": "Jetzt sieht niemand den Brief. Andere können ein Video anhalten und sich alles genau ansehen.",
        "remember": "Videos prüfe ich vor dem Posten."
      }
    },
    "tiktok/lang/Kommentare": {
      "einfach": {
        "question": "Unter deinem Tanz-Video schreiben drei Personen: Du kannst gar nicht tanzen. Hör auf damit. Das macht dich traurig. Was machst du?",
        "answers": [
          "Ich halte das aus und sage nichts.",
          "Ich melde die Kommentare bei TikTok.",
          "Ich hole mir Unterstützung und rede mit jemandem darüber."
        ],
        "feedbackWrong": [
          "Du musst verletzende Kommentare nicht allein aushalten. Du kannst sie melden oder mit jemandem darüber reden.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Das ist Unterstützung, und Reden tut gut. Danach entscheidest du in Ruhe."
        ],
        "feedbackCorrect": "TikTok kann verletzende Kommentare prüfen, und dein Video darf bleiben. Du hast nichts falsch gemacht.",
        "remember": "Ich hole Unterstützung bei verletzenden Kommentaren."
      },
      "standard": {
        "question": "Unter deinem Tanzvideo schreiben drei Personen: Du kannst gar nicht tanzen. Hör auf damit. Das macht dich traurig. Was machst du?",
        "answers": [
          "Ich halte das aus und sage nichts.",
          "Ich melde die Kommentare bei TikTok.",
          "Ich hole mir Unterstützung und rede mit jemandem darüber."
        ],
        "feedbackWrong": [
          "Verletzende Kommentare musst du nicht allein aushalten. Du kannst sie melden oder mit jemandem darüber reden.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Das ist Unterstützung, und Reden tut gut. Danach entscheidest du in Ruhe."
        ],
        "feedbackCorrect": "TikTok kann verletzende Kommentare prüfen, und dein Video darf bleiben. Du hast nichts falsch gemacht.",
        "remember": "Bei verletzenden Kommentaren hole ich mir Unterstützung."
      }
    },
    "tiktok/lang/Gefühle und Pausen": {
      "einfach": {
        "question": "Du schaust abends TikTok. Nach vielen Videos bist du nervös und kannst nicht abschalten. Was machst du?",
        "answers": [
          "Ich schaue weiter, weil vielleicht ein ruhiges Video kommt.",
          "Ich schließe die App und rede mit jemandem.",
          "Ich schließe die App und lege das Handy weg."
        ],
        "feedbackWrong": [
          "Weiterschauen macht es meistens nicht besser. Es hilft mehr, das Handy wegzulegen.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Die App ist zu, und Reden hilft beim Abschalten.",
          null
        ],
        "feedbackCorrect": "Du darfst TikTok weglegen, denn dein Kopf braucht jetzt Ruhe.",
        "remember": "Ich darf TikTok weglegen."
      },
      "standard": {
        "question": "Du schaust abends TikTok. Nach vielen Videos bist du nervös und kannst nicht abschalten. Was machst du?",
        "answers": [
          "Ich schaue weiter, vielleicht kommt ein ruhiges Video.",
          "Ich schließe die App und rede mit jemandem.",
          "Ich schließe die App und lege das Handy weg."
        ],
        "feedbackWrong": [
          "Weiterschauen macht es meistens nicht besser. Mehr hilft es, das Handy wegzulegen.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Die App ist zu, und Reden hilft beim Abschalten.",
          null
        ],
        "feedbackCorrect": "Du darfst TikTok weglegen – dein Kopf braucht jetzt Ruhe.",
        "remember": "TikTok darf ich jederzeit weglegen."
      }
    },
    "tiktok/lang/Nicht jedes Video ist echt": {
      "einfach": {
        "question": "In einem Video sagt eine bekannte Ärztin aus dem Fernsehen: Diese Tabletten machen dich in einer Woche schlank. Was machst du?",
        "answers": [
          "Ich glaube das nicht sofort, weil das Video gefälscht sein kann.",
          "Ich bestelle die Tabletten, weil ich die Ärztin aus dem Fernsehen kenne.",
          "Ich frage in meiner Apotheke nach."
        ],
        "feedbackWrong": [
          null,
          "Auch Stimmen und Gesichter kann man fälschen. Vielleicht weiß die Ärztin gar nichts von dem Video.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Das ist eine gute Prüfung, denn in der Apotheke kennt man sich mit Tabletten aus."
        ],
        "feedbackCorrect": "KI kann Stimmen und Gesichter nachmachen. Vielleicht weiß die Ärztin gar nichts von dem Video.",
        "remember": "Auch Videos und Stimmen können gefälscht sein."
      },
      "standard": {
        "question": "In einem Video sagt eine bekannte Ärztin aus dem Fernsehen: Diese Tabletten machen dich in einer Woche schlank. Was machst du?",
        "answers": [
          "Ich glaube das nicht sofort, das Video kann gefälscht sein.",
          "Ich bestelle die Tabletten, die Ärztin kenne ich ja aus dem Fernsehen.",
          "Ich frage in meiner Apotheke nach."
        ],
        "feedbackWrong": [
          null,
          "Auch Stimmen und Gesichter lassen sich fälschen. Vielleicht weiß die Ärztin gar nichts von dem Video.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Das ist eine gute Prüfung: In der Apotheke kennt man sich mit Tabletten aus."
        ],
        "feedbackCorrect": "KI kann Stimmen und Gesichter täuschend echt nachahmen. Vielleicht weiß die Ärztin gar nichts von dem Video.",
        "remember": "Auch Videos und Stimmen können gefälscht sein."
      }
    },
    "tiktok/lang/Was kann ich tun?": {
      "einfach": {
        "question": "Unter deinem Video schreibt jemand: Du hast ein Handy gewonnen. Schick mir sofort deine Adresse, in einer Stunde ist der Gewinn weg. Was machst du?",
        "answers": [
          "Ich sende die Adresse schnell, weil der Gewinn sonst weg ist.",
          "Ich sende keine Daten.",
          "Ich sende keine Daten und melde den Kommentar."
        ],
        "feedbackWrong": [
          "Die Eile ist Absicht, damit du nicht nachdenkst. Bei einem echten Gewinn hast du Zeit.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Deine Daten bleiben bei dir, und TikTok kann den Kommentar prüfen."
        ],
        "feedbackCorrect": "Die Eile ist Absicht, und private Daten sendest du nicht unter Stress.",
        "remember": "Private Daten sende ich nie, wenn ich Stress habe."
      },
      "standard": {
        "question": "Unter deinem Video schreibt jemand: Du hast ein Handy gewonnen. Schick mir sofort deine Adresse, in einer Stunde verfällt der Gewinn. Was machst du?",
        "answers": [
          "Ich sende die Adresse schnell, sonst verfällt der Gewinn.",
          "Ich sende keine Daten.",
          "Ich sende keine Daten und melde den Kommentar."
        ],
        "feedbackWrong": [
          "Der Zeitdruck ist gewollt, damit du nicht nachdenkst. Bei einem echten Gewinn hättest du Zeit.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Deine Daten bleiben bei dir, und TikTok kann den Kommentar prüfen."
        ],
        "feedbackCorrect": "Der Zeitdruck ist gewollt. Private Daten sendest du nicht unter Druck.",
        "remember": "Unter Druck sende ich keine privaten Daten."
      }
    },
    "tiktok/kurz/Was du bei TikTok siehst": {
      "einfach": {
        "question": "Bei TikTok springen viele von einer hohen Mauer, und ein Freund schreibt dir: Mach auch ein Video davon. Was machst du?",
        "answers": [
          "Ich mache nicht mit.",
          "Ich mache mit, weil es ja alle machen.",
          "Ich mache ein anderes Video ohne Gefahr."
        ],
        "feedbackWrong": [
          null,
          "Viele Videos heißen nicht, dass etwas sicher ist. Du siehst nur die Sprünge, bei denen nichts passiert ist.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann bist du dabei, aber ohne Risiko. Du entscheidest selbst."
        ],
        "feedbackCorrect": "Du entscheidest selbst und musst bei keinem Trend mitmachen. Deine Gesundheit ist wichtiger.",
        "remember": "Ich muss bei keinem Trend mitmachen."
      },
      "standard": {
        "question": "Auf TikTok springen viele von einer hohen Mauer, und ein Freund schreibt dir: Mach auch ein Video davon. Was machst du?",
        "answers": [
          "Ich mache nicht mit.",
          "Ich mache mit, es machen ja alle.",
          "Ich mache ein anderes Video – ohne Gefahr."
        ],
        "feedbackWrong": [
          null,
          "Viele Videos bedeuten nicht, dass etwas sicher ist. Du siehst nur die Sprünge, die gut gegangen sind.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann bist du dabei, aber ohne Risiko. Du entscheidest selbst."
        ],
        "feedbackCorrect": "Du entscheidest selbst und musst bei keinem Trend mitmachen. Deine Gesundheit geht vor.",
        "remember": "Bei keinem Trend muss ich mitmachen."
      }
    },
    "tiktok/kurz/Nachrichten auf TikTok": {
      "einfach": {
        "question": "Du postest ein Tanz-Video. Jemand aus den Kommentaren schreibt dir privat: Tolles Video. Wollen wir uns treffen? Du kennst die Person nicht. Was machst du?",
        "answers": [
          "Ich antworte kurz, weil das höflich ist.",
          "Ich antworte nicht.",
          "Ich blockiere die Person."
        ],
        "feedbackWrong": [
          "Du kennst die Person nicht, und nach einer Antwort schreibt sie oft weiter. Du musst nicht höflich sein.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann kann dir die Person nicht mehr schreiben."
        ],
        "feedbackCorrect": "Du kennst die Person nicht und musst nicht antworten. Du entscheidest selbst, mit wem du schreibst.",
        "remember": "Fremden Profilen muss ich nicht antworten."
      },
      "standard": {
        "question": "Du postest ein Tanzvideo. Jemand aus den Kommentaren schreibt dir privat: Tolles Video. Wollen wir uns treffen? Du kennst die Person nicht. Was machst du?",
        "answers": [
          "Ich antworte kurz, das ist höflich.",
          "Ich antworte nicht.",
          "Ich blockiere die Person."
        ],
        "feedbackWrong": [
          "Du kennst die Person nicht, und nach einer Antwort schreibt sie oft weiter. Höflich sein musst du hier nicht.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Danach kann dir die Person nicht mehr schreiben."
        ],
        "feedbackCorrect": "Du kennst die Person nicht und musst nicht antworten. Du entscheidest selbst, mit wem du schreibst.",
        "remember": "Fremden Profilen muss ich nicht antworten."
      }
    },
    "tiktok/kurz/Pause machen": {
      "einfach": {
        "question": "Du willst heute Abend nur 30 Minuten TikTok schauen, aber du weißt, dass du oft die Zeit vergisst. Was machst du vorher?",
        "answers": [
          "Nichts, weil ich das schon selbst merke.",
          "Ich stelle in TikTok die Pausen-Erinnerung ein.",
          "Ich stelle einen Timer auf 30 Minuten."
        ],
        "feedbackWrong": [
          "Die App hört nicht von selbst auf, und beim Schauen vergisst man leicht die Zeit. Ein Timer erinnert dich.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Dann erinnert dich TikTok selbst an die Pause.",
          null
        ],
        "feedbackCorrect": "Ein Timer erinnert dich, denn die App hört nicht von selbst auf.",
        "remember": "Ich stelle einen Timer."
      },
      "standard": {
        "question": "Du willst heute Abend nur 30 Minuten TikTok schauen, weißt aber, dass du oft die Zeit vergisst. Was machst du vorher?",
        "answers": [
          "Nichts, das merke ich schon selbst.",
          "Ich stelle in TikTok die Pausen-Erinnerung ein.",
          "Ich stelle einen Timer auf 30 Minuten."
        ],
        "feedbackWrong": [
          "Die App hört nicht von selbst auf, und beim Schauen vergisst man leicht die Zeit. Ein Timer erinnert dich.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Dann erinnert dich TikTok selbst an die Pause.",
          null
        ],
        "feedbackCorrect": "Ein Timer erinnert dich – die App hört nicht von selbst auf.",
        "remember": "Ich stelle mir einen Timer."
      }
    },
    "In deinem Video sieht man das Straßen-Schild. Was machst du?": {
      "einfach": {
        "question": "In deinem Video sieht man das Straßen-Schild vor deinem Haus. Was machst du?",
        "hinweis": "Überlege, wer deinen Straßen-Namen lesen soll.",
        "answers": [
          "Ich poste das Video so.",
          "Ich mache das Video etwas dunkler.",
          "Ich nehme das Video neu auf."
        ],
        "feedbackWrong": [
          "Am Schild können andere sehen, wo du wohnst.",
          "Das Schild kann man trotzdem lesen. Nimm das Video lieber neu auf.",
          null
        ],
        "feedbackCorrect": "So verrät kein Schild, wo du wohnst."
      },
      "standard": {
        "question": "In deinem Video ist das Straßenschild vor deinem Haus zu sehen. Was tust du?",
        "hinweis": "Wer soll deinen Straßennamen lesen können?",
        "answers": [
          "Ich poste das Video so.",
          "Ich mache das Video etwas dunkler.",
          "Ich nehme das Video neu auf."
        ],
        "feedbackWrong": [
          "Am Schild erkennt man, wo du wohnst.",
          "Das Schild bleibt trotzdem lesbar. Nimm das Video lieber neu auf.",
          null
        ],
        "feedbackCorrect": "So verrät kein Schild, wo du wohnst."
      }
    },
    "Unter deinem Video macht sich jemand über dich lustig. Was tust du?": {
      "einfach": {
        "question": "Unter deinem Video macht sich jemand in einem Kommentar über dich lustig. Was tust du?",
        "hinweis": "Überlege, was TikTok dir gegen gemeine Kommentare anbietet.",
        "answers": [
          "Ich lese den Kommentar immer wieder.",
          "Ich schreibe etwas Gemeines zurück.",
          "Ich melde den Kommentar."
        ],
        "feedbackWrong": [
          "Das tut dir nicht gut. Melde den Kommentar lieber.",
          "Dann wird der Streit größer. Melde den Kommentar lieber.",
          null
        ],
        "feedbackCorrect": "Melden ist erlaubt. Dann prüft TikTok den Kommentar. Du kannst die Person auch blockieren."
      },
      "standard": {
        "question": "Unter deinem Video macht sich jemand in einem Kommentar über dich lustig. Wie reagierst du?",
        "hinweis": "Was bietet TikTok gegen gemeine Kommentare an?",
        "answers": [
          "Ich lese den Kommentar immer wieder.",
          "Ich schreibe etwas Gemeines zurück.",
          "Ich melde den Kommentar."
        ],
        "feedbackWrong": [
          "Das tut dir nicht gut – melde den Kommentar lieber.",
          "Damit wird der Streit nur größer. Melde den Kommentar lieber.",
          null
        ],
        "feedbackCorrect": "Melden ist erlaubt: Dann prüft TikTok den Kommentar. Du kannst die Person auch blockieren."
      }
    },
    "Was macht TikTok mit ähnlichen Videos?": {
      "einfach": {
        "question": "Du schaust bei TikTok ein paar Videos über Hunde. Was zeigt TikTok dir danach?",
        "hinweis": "Überlege, warum TikTok dir oft ähnliche Videos zeigt.",
        "answers": [
          "Oft noch mehr Videos über Hunde.",
          "Gar nichts, die App stoppt sofort.",
          "Ganz andere Videos ohne Hunde."
        ],
        "feedbackWrong": [
          null,
          "TikTok stoppt nicht von selbst.",
          "Meistens kommt noch mehr vom Gleichen."
        ],
        "feedbackCorrect": "TikTok merkt sich, was du schaust, und zeigt dir oft mehr davon."
      },
      "standard": {
        "question": "Du schaust auf TikTok ein paar Videos über Hunde. Was zeigt dir TikTok danach?",
        "hinweis": "Warum zeigt TikTok dir oft ähnliche Videos?",
        "answers": [
          "Oft noch mehr Hundevideos.",
          "Gar nichts – die App stoppt sofort.",
          "Ganz andere Videos ohne Hunde."
        ],
        "feedbackWrong": [
          null,
          "TikTok stoppt nicht von selbst.",
          "Meistens kommt noch mehr vom Gleichen."
        ],
        "feedbackCorrect": "TikTok merkt sich, was du anschaust, und zeigt dir oft mehr davon."
      }
    },
    "Was schützt dich bei Trends?": {
      "einfach": {
        "question": "Ein neuer Trend geht bei TikTok herum. Was schützt dich?",
        "hinweis": "Überlege, welcher Schritt dir überall hilft.",
        "answers": [
          "Ich mache immer mit.",
          "Ich mache mit, weil Freunde zuschauen.",
          "Ich prüfe den Trend vorher."
        ],
        "feedbackWrong": [
          "Du musst nicht bei jedem Trend mitmachen.",
          "Auch wenn Freunde zuschauen, ist der Trend nicht sicher.",
          null
        ],
        "feedbackCorrect": "Manche Trends können gefährlich sein. Deshalb prüfst du einen Trend, bevor du mitmachst."
      },
      "standard": {
        "question": "Auf TikTok macht ein neuer Trend die Runde. Was schützt dich?",
        "hinweis": "Welcher Schritt hilft dir überall?",
        "answers": [
          "Immer mitmachen.",
          "Mitmachen, weil Freunde zuschauen.",
          "Den Trend vorher prüfen."
        ],
        "feedbackWrong": [
          "Du musst nicht bei jedem Trend mitmachen.",
          "Zuschauer machen einen Trend nicht sicherer.",
          null
        ],
        "feedbackCorrect": "Manche Trends können gefährlich sein. Deshalb prüfst du einen Trend, bevor du mitmachst."
      }
    },
    "Was schützt private Daten?": {
      "einfach": {
        "question": "Wie schützt du deine privaten Daten bei TikTok?",
        "hinweis": "Überlege, wem deine Daten gehören.",
        "answers": [
          "Ich schicke sie allen, die fragen.",
          "Ich sende sie nicht an Fremde.",
          "Ich schreibe sie in mein Video."
        ],
        "feedbackWrong": [
          "Fremde sollen deine privaten Daten nicht bekommen.",
          null,
          "Im Video sehen sie noch mehr Menschen."
        ],
        "feedbackCorrect": "Fremde können deine Daten weitergeben. Deshalb sendest du deine privaten Daten nicht an Fremde."
      },
      "standard": {
        "question": "Wie schützt du auf TikTok deine privaten Daten?",
        "hinweis": "Wem gehören deine Daten?",
        "answers": [
          "Ich schicke sie jedem, der fragt.",
          "Ich sende sie nicht an Fremde.",
          "Ich nenne sie in meinem Video."
        ],
        "feedbackWrong": [
          "Fremde sollen deine privaten Daten nicht bekommen.",
          null,
          "Im Video sehen sie noch mehr Menschen."
        ],
        "feedbackCorrect": "Fremde können deine Daten weitergeben. Deshalb gehen private Daten nicht an Fremde."
      }
    },
    "Was darfst du bei TikTok machen?": {
      "einfach": {
        "question": "Du hast genug von TikTok. Was darfst du tun?",
        "hinweis": "Überlege, wer bestimmt, wann Schluss ist.",
        "answers": [
          "Ich schließe TikTok.",
          "Ich mache trotzdem keine Pause.",
          "Ich warte, bis die Videos aufhören."
        ],
        "feedbackWrong": [
          null,
          "Pausen sind erlaubt.",
          "Die Videos hören nicht von selbst auf."
        ],
        "feedbackCorrect": "Du bestimmst selbst, wann Schluss ist. Die Videos hören nicht von selbst auf, deshalb schließt du TikTok, wenn du genug hast."
      },
      "standard": {
        "question": "Du hast für heute genug von TikTok. Was darfst du tun?",
        "hinweis": "Wer bestimmt, wann Schluss ist?",
        "answers": [
          "TikTok schließen.",
          "Trotzdem keine Pause machen.",
          "Warten, bis die Videos aufhören."
        ],
        "feedbackWrong": [
          null,
          "Pausen sind ausdrücklich erlaubt.",
          "Die Videos hören nicht von selbst auf."
        ],
        "feedbackCorrect": "Du bestimmst selbst, wann Schluss ist. Die Videos hören nicht von selbst auf – deshalb schließt du TikTok, wenn du genug hast."
      }
    },
    "Was ist eine gute TikTok-Regel?": {
      "einfach": {
        "question": "Welche Regel hilft dir bei TikTok?",
        "hinweis": "Ein Video im Internet sehen sofort viele Menschen.",
        "answers": [
          "Ich poste sofort.",
          "Ich prüfe erst.",
          "Ich poste und lösche später."
        ],
        "feedbackWrong": [
          "Wenn du sofort postest, kann das schaden.",
          null,
          "Löschen kommt oft zu spät, denn andere haben das Video schon gesehen."
        ],
        "feedbackCorrect": "Andere sehen ein Video oft schnell, und Löschen kommt dann zu spät. Deshalb prüfst du erst und postest dann."
      },
      "standard": {
        "question": "Welche Regel ist bei TikTok sinnvoll?",
        "hinweis": "Ein Video im Netz erreicht sofort sehr viele Menschen.",
        "answers": [
          "Sofort posten.",
          "Erst prüfen.",
          "Posten und später löschen."
        ],
        "feedbackWrong": [
          "Sofortiges Posten kann dir schaden.",
          null,
          "Löschen kommt oft zu spät – andere haben es dann schon gesehen."
        ],
        "feedbackCorrect": "Andere sehen ein Video oft sehr schnell, und Löschen kommt dann zu spät. Deshalb prüfst du erst und postest dann."
      }
    }
  },
  "fakes": {
    "Eine Nachricht klingt unglaublich. Sie stimmt nicht. Wie nennt man das?": {
      "einfach": {
        "question": "Eine Nachricht klingt unglaublich, aber sie stimmt nicht. Wie nennt man so eine Nachricht?",
        "hinweis": "Die Nachricht klingt unglaublich und ist falsch. Dafür hast du in diesem Thema ein Wort gelernt.",
        "answers": [
          "Eine Werbung im Internet.",
          "Eine Fake-Nachricht.",
          "Ein Witz unter Freunden."
        ],
        "feedbackCorrect": "Falsche Nachrichten nennt man Fake News. Jemand verbreitet sie mit Absicht.",
        "feedbackWrong": [
          "Werbung will dir etwas verkaufen. Hier geht es aber um eine Lüge.",
          null,
          "Ein Witz soll niemanden täuschen. Eine Fake-Nachricht soll das aber tun."
        ]
      },
      "standard": {
        "question": "Du liest eine Nachricht, die unglaublich klingt und nicht stimmt. Wie nennt man sie?",
        "hinweis": "Die Nachricht ist unglaublich und falsch. Welcher Begriff aus diesem Thema passt dazu?",
        "answers": [
          "Eine Online-Werbung.",
          "Eine Fake-Nachricht.",
          "Ein Witz unter Freunden."
        ],
        "feedbackCorrect": "Solche falschen Nachrichten werden Fake News genannt. Jemand verbreitet sie mit Absicht.",
        "feedbackWrong": [
          "Werbung soll etwas verkaufen. In dieser Nachricht geht es aber um eine Lüge.",
          null,
          "Ein Witz soll niemanden täuschen, eine Fake-Nachricht dagegen schon."
        ]
      }
    },
    "Eine Nachricht macht dich sehr wütend. Was bedeutet das?": {
      "einfach": {
        "question": "Du liest eine Nachricht, die dich sehr wütend macht. Was bedeutet das?",
        "hinweis": "Manche Nachrichten sollen starke Gefühle auslösen. Was bedeutet das für dich?",
        "answers": [
          "Ein Warnzeichen. Ich prüfe nach.",
          "Die Nachricht stimmt bestimmt.",
          "Ich schicke die Nachricht schnell weiter."
        ],
        "feedbackCorrect": "Starke Gefühle zeigen nicht, ob die Nachricht stimmt. Deshalb prüfst du zuerst.",
        "feedbackWrong": [
          null,
          "Nur weil du wütend bist, muss die Nachricht nicht stimmen.",
          "Ohne Prüfung kannst du auch eine falsche Nachricht weiterverbreiten. Prüfe deshalb zuerst."
        ]
      },
      "standard": {
        "question": "Eine Nachricht löst starke Wut bei dir aus. Was bedeutet das?",
        "hinweis": "Starke Gefühle sind oft beabsichtigt. Was bedeutet das für dich, bevor du reagierst?",
        "answers": [
          "Ein Warnzeichen. Ich prüfe nach.",
          "Die Nachricht ist bestimmt wahr.",
          "Ich leite die Nachricht sofort weiter."
        ],
        "feedbackCorrect": "Starke Gefühle belegen weder die Wahrheit noch die Unwahrheit einer Nachricht. Prüfe ihren Inhalt zuerst.",
        "feedbackWrong": [
          null,
          "Deine Wut sagt nichts darüber aus, ob die Nachricht wahr ist.",
          "Wer ungeprüft weiterleitet, kann auch Falschmeldungen verbreiten. Prüfe den Inhalt zuerst."
        ]
      }
    },
    "Stimmt eine Nachricht? Du bist unsicher. Was machst du?": {
      "einfach": {
        "question": "Du weißt nicht, ob eine Nachricht stimmt. Was machst du?",
        "hinweis": "Überlege, was passiert, wenn du eine falsche Nachricht weiterschickst.",
        "answers": [
          "Ich schicke die Nachricht an alle weiter.",
          "Ich schicke die Nachricht an meine Freunde weiter.",
          "Ich schicke die Nachricht nicht weiter."
        ],
        "feedbackCorrect": "Wenn du eine falsche Nachricht teilst, glauben noch mehr Menschen die Lüge. Deshalb teilst du sie nicht, wenn du unsicher bist.",
        "feedbackWrong": [
          "Wenn du eine falsche Nachricht weiterschickst, verbreitet sich diese weiter.",
          "Auch deine Freunde können die Nachricht weiterleiten. Warte deshalb lieber.",
          null
        ]
      },
      "standard": {
        "question": "Du bist unsicher, ob eine Nachricht stimmt. Was tust du?",
        "hinweis": "Was passiert, wenn du eine Falschmeldung weiterleitest?",
        "answers": [
          "Ich leite die Nachricht an alle weiter.",
          "Ich leite die Nachricht an meine Freunde weiter.",
          "Ich leite die Nachricht nicht weiter."
        ],
        "feedbackCorrect": "Wer eine Falschmeldung weiterleitet, sorgt dafür, dass noch mehr Menschen sie glauben. Deshalb teilst du eine Nachricht im Zweifel nicht.",
        "feedbackWrong": [
          "So kannst du auch Falschmeldungen weiterverbreiten.",
          "Auch Freunde können die Nachricht weiterleiten. Warte lieber, bis du sicher bist.",
          null
        ]
      }
    },
    "fakes/lang/Was sind Fake News?": {
      "einfach": {
        "question": "Eine Zeitung schreibt: Das Konzert ist am Samstag. Am nächsten Tag schreibt sie: Entschuldigung, es ist am Sonntag. War das eine Fake-Nachricht?",
        "answers": [
          "Ja, weil die Zeitung etwas Falsches geschrieben hat.",
          "Nein, das war ein Fehler aus Versehen.",
          "Ja, weil jede falsche Nachricht eine Lüge ist."
        ],
        "feedbackWrong": [
          "Die Zeitung hat aus Versehen einen Fehler gemacht und ihn verbessert. Fake News macht jemand mit Absicht.",
          null,
          "Ein Fehler ist keine Lüge, denn eine Lüge ist Absicht. Die Zeitung hat ihren Fehler selbst verbessert."
        ],
        "feedbackCorrect": "Ein Irrtum passiert aus Versehen, Fake News macht jemand mit Absicht. Das ist der Unterschied.",
        "remember": "Nicht jede Nachricht im Internet ist wahr."
      },
      "standard": {
        "question": "Eine Zeitung schreibt: Das Konzert ist am Samstag. Am nächsten Tag schreibt sie: Entschuldigung, es ist am Sonntag. War das eine Fake-Nachricht?",
        "answers": [
          "Ja, die Zeitung hat ja etwas Falsches geschrieben.",
          "Nein, das war ein Fehler aus Versehen.",
          "Ja, jede falsche Nachricht ist eine Lüge."
        ],
        "feedbackWrong": [
          "Die Zeitung hat sich geirrt und den Fehler berichtigt. Fake News verbreitet jemand mit Absicht.",
          null,
          "Ein Fehler ist keine Lüge – eine Lüge ist Absicht. Die Zeitung hat ihren Fehler selbst berichtigt."
        ],
        "feedbackCorrect": "Ein Irrtum passiert aus Versehen, Fake News verbreitet jemand mit Absicht. Das ist der Unterschied.",
        "remember": "Nicht jede Nachricht im Internet ist wahr."
      }
    },
    "fakes/lang/Warum gibt es Fake News?": {
      "einfach": {
        "question": "Eine Seite bringt jeden Tag unglaubliche Nachrichten, und daneben steht sehr viel Werbung. Warum macht die Seite das wahrscheinlich?",
        "answers": [
          "Sie verdient Geld mit vielen Aufrufen.",
          "Sie will mich gut informieren.",
          "Das passiert aus Versehen, denn niemand will das."
        ],
        "feedbackWrong": [
          null,
          "Unglaubliche Nachrichten bringen viele Aufrufe, und viele Aufrufe bringen Geld durch Werbung. Um die Wahrheit geht es dabei nicht.",
          "Aus Versehen passiert das nicht jeden Tag. Es steckt ein Ziel dahinter."
        ],
        "feedbackCorrect": "Viele Aufrufe bringen Geld durch Werbung. Fake News haben also ein Ziel.",
        "remember": "Fake News haben ein Ziel."
      },
      "standard": {
        "question": "Eine Seite bringt täglich unglaubliche Nachrichten, daneben steht sehr viel Werbung. Warum macht die Seite das vermutlich?",
        "answers": [
          "Sie verdient Geld mit vielen Aufrufen.",
          "Sie will mich gut informieren.",
          "Das passiert aus Versehen, niemand will das wirklich."
        ],
        "feedbackWrong": [
          null,
          "Unglaubliche Nachrichten bringen viele Aufrufe, und viele Aufrufe bringen Werbegeld. Um die Wahrheit geht es dabei nicht.",
          "Aus Versehen passiert das nicht jeden Tag. Dahinter steckt ein Ziel."
        ],
        "feedbackCorrect": "Viele Aufrufe bringen Geld durch Werbung. Fake News verfolgen also ein Ziel.",
        "remember": "Hinter Fake News steckt ein Ziel."
      }
    },
    "fakes/lang/KI-Bilder erkennen": {
      "einfach": {
        "question": "Du siehst ein Foto: Ein Hai schwimmt auf einer überfluteten Autobahn. Du findest keinen Fehler im Bild. Was machst du?",
        "answers": [
          "Ich glaube das Foto, weil ich ja keinen Fehler sehe.",
          "Ich suche, ob auch Nachrichten-Seiten das Foto zeigen.",
          "Ich glaube es nicht sofort, weil es gefälscht sein kann."
        ],
        "feedbackWrong": [
          "Viele KI-Bilder haben keine Fehler mehr. Dass du keinen Fehler findest, heißt nicht, dass das Foto echt ist.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Das ist eine gute Prüfung. Über echte Ereignisse berichten mehrere bekannte Seiten.",
          null
        ],
        "feedbackCorrect": "Ein Foto ist kein Beweis mehr, denn KI kann Fotos fälschen, auch ohne sichtbare Fehler.",
        "remember": "Ein Foto kann gefälscht sein."
      },
      "standard": {
        "question": "Du siehst ein Foto: Ein Hai schwimmt auf einer überfluteten Autobahn. Einen Fehler findest du im Bild nicht. Was machst du?",
        "answers": [
          "Ich glaube das Foto, ich sehe ja keinen Fehler.",
          "Ich suche, ob auch Nachrichtenseiten das Foto zeigen.",
          "Ich glaube es nicht sofort, es kann gefälscht sein."
        ],
        "feedbackWrong": [
          "Viele KI-Bilder haben keine Fehler mehr. Dass du keinen findest, heißt nicht, dass das Foto echt ist.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Das ist eine gute Prüfung. Über echte Ereignisse berichten mehrere bekannte Seiten.",
          null
        ],
        "feedbackCorrect": "Ein Foto ist kein Beweis mehr: KI kann Fotos fälschen, auch ohne sichtbare Fehler.",
        "remember": "Ein Foto kann gefälscht sein."
      }
    },
    "fakes/lang/Gefälschte Videos: Deepfakes": {
      "einfach": {
        "question": "Du siehst ein Video, in dem eine bekannte Politikerin etwas sehr Schlimmes sagt. Viele sind wütend, aber das Video hat keine Quelle. Was machst du?",
        "answers": [
          "Ich teile es nicht, weil das Video gefälscht sein kann.",
          "Ich teile das Video, damit alle das sehen.",
          "Ich prüfe, ob bekannte Nachrichten-Seiten darüber berichten."
        ],
        "feedbackWrong": [
          null,
          "Das Video kann ein Deepfake sein. KI kann Gesicht und Stimme austauschen, und vielleicht hat sie das nie gesagt.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Das ist eine gute Prüfung. Über echte Aussagen berichten mehrere bekannte Seiten."
        ],
        "feedbackCorrect": "KI kann Gesicht und Stimme austauschen, deshalb können auch Videos gefälscht sein.",
        "remember": "Auch Videos können gefälscht sein."
      },
      "standard": {
        "question": "Du siehst ein Video, in dem eine bekannte Politikerin etwas sehr Schlimmes sagt. Viele sind empört, eine Quelle hat das Video nicht. Was machst du?",
        "answers": [
          "Ich teile es nicht, das Video kann gefälscht sein.",
          "Ich teile das Video, das sollen alle sehen.",
          "Ich prüfe, ob bekannte Nachrichtenseiten darüber berichten."
        ],
        "feedbackWrong": [
          null,
          "Das Video kann ein Deepfake sein: KI kann Gesicht und Stimme austauschen, und vielleicht hat sie das nie gesagt.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Das ist eine gute Prüfung. Über echte Aussagen berichten mehrere bekannte Seiten."
        ],
        "feedbackCorrect": "KI kann Gesicht und Stimme austauschen, deshalb können auch Videos gefälscht sein.",
        "remember": "Auch Videos können gefälscht sein."
      }
    },
    "fakes/lang/Geklonte Stimmen am Telefon": {
      "einfach": {
        "question": "Ein Anruf: Hier ist die Polizei. Ihr Sohn hatte einen Unfall und braucht sofort 3000 Euro. Im Hintergrund weint eine Stimme, die wie dein Sohn klingt. Was machst du?",
        "answers": [
          "Ich zahle, weil ich doch seine Stimme gehört habe.",
          "Ich lege auf und rufe meinen Sohn selbst an.",
          "Ich lege auf und rufe selbst die 110 an."
        ],
        "feedbackWrong": [
          "Die Stimme kann mit KI gefälscht sein. Die echte Polizei fordert am Telefon nie Geld.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Bei der 110 erreichst du die echte Polizei und kannst nachfragen."
        ],
        "feedbackCorrect": "Du legst auf und rufst selbst an, und so merkst du den Betrug. Die echte Polizei fordert am Telefon nie Geld.",
        "remember": "Bei Geld-Anrufen lege ich auf und rufe selbst zurück."
      },
      "standard": {
        "question": "Ein Anruf: Hier ist die Polizei, Ihr Sohn hatte einen Unfall und braucht sofort 3000 Euro. Im Hintergrund weint eine Stimme, die wie dein Sohn klingt. Was machst du?",
        "answers": [
          "Ich zahle, ich habe doch seine Stimme gehört.",
          "Ich lege auf und rufe meinen Sohn selbst an.",
          "Ich lege auf und wähle selbst die 110."
        ],
        "feedbackWrong": [
          "Die Stimme kann mit KI gefälscht sein. Die echte Polizei fordert am Telefon nie Geld.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Unter der 110 erreichst du die echte Polizei und kannst nachfragen."
        ],
        "feedbackCorrect": "Du legst auf und rufst selbst an – so fliegt der Betrug auf. Die echte Polizei fordert am Telefon nie Geld.",
        "remember": "Bei Geldanrufen lege ich auf und rufe selbst zurück."
      }
    },
    "fakes/lang/Nachrichten prüfen": {
      "einfach": {
        "question": "Jemand teilt eine Nachricht: Starker Sturm kommt, alle Züge fallen aus. Du schaust genau hin und siehst, dass die Nachricht von 2019 ist. Was machst du?",
        "answers": [
          "Ich sage alle Termine ab, weil der Sturm ja kommt.",
          "Ich schaue bei der Bahn nach, ob heute Züge fahren.",
          "Ich teile sie nicht, weil die Nachricht alt ist."
        ],
        "feedbackWrong": [
          "Die Nachricht ist alt, denn der Sturm war 2019. Schau erst nach, was heute gilt.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Die Bahn weiß am besten, was heute gilt.",
          null
        ],
        "feedbackCorrect": "Alte Nachrichten wirken oft wie neu. Das Datum zeigt dir, dass die Nachricht nicht mehr gilt.",
        "remember": "Ich prüfe Nachrichten bei bekannten Seiten."
      },
      "standard": {
        "question": "Jemand teilt eine Nachricht: Schwerer Sturm im Anmarsch, alle Züge fallen aus. Beim genauen Hinsehen merkst du: Die Nachricht ist von 2019. Was machst du?",
        "answers": [
          "Ich sage alle Termine ab, der Sturm kommt ja.",
          "Ich sehe bei der Bahn nach, ob heute Züge fahren.",
          "Ich teile sie nicht, die Nachricht ist alt."
        ],
        "feedbackWrong": [
          "Die Nachricht ist alt, der Sturm war 2019. Sieh erst nach, was heute gilt.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Die Bahn weiß am besten, was heute gilt.",
          null
        ],
        "feedbackCorrect": "Alte Nachrichten wirken oft wie neu. Das Datum zeigt dir, dass die Nachricht nicht mehr gilt.",
        "remember": "Nachrichten prüfe ich bei bekannten Medien."
      }
    },
    "fakes/lang/Die Nachricht will dich aufregen": {
      "einfach": {
        "question": "Du liest: Die Stadt schließt alle Schwimm-Bäder für immer. Du gehst gern schwimmen und bist sehr wütend. Unter der Nachricht steht: Teile das sofort. Was machst du?",
        "answers": [
          "Ich prüfe erst, ob die Nachricht stimmt.",
          "Ich teile es sofort, weil meine Wut doch richtig ist.",
          "Ich warte bis morgen und schaue dann noch einmal."
        ],
        "feedbackWrong": [
          null,
          "Deine Gefühle sind richtig, aber die Nachricht will dich aufregen. Das ist der Trick. Prüf erst, ob sie stimmt.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Eine Nacht Abstand hilft, und morgen prüfst du in Ruhe."
        ],
        "feedbackCorrect": "Deine Wut ist richtig, aber bei Aufregung prüfst du erst. Die Nachricht will, dass du schnell teilst.",
        "remember": "Bei Aufregung prüfe ich erst."
      },
      "standard": {
        "question": "Du liest: Die Stadt schließt alle Schwimmbäder für immer. Du gehst gern schwimmen und bist sehr wütend. Darunter steht: Teile das sofort. Was machst du?",
        "answers": [
          "Ich prüfe erst, ob die Nachricht stimmt.",
          "Ich teile es sofort, meine Wut ist doch berechtigt.",
          "Ich warte bis morgen und sehe dann noch einmal hin."
        ],
        "feedbackWrong": [
          null,
          "Deine Gefühle sind berechtigt, aber die Nachricht will dich aufregen – das ist der Trick. Prüf erst, ob sie stimmt.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Eine Nacht Abstand hilft, und morgen prüfst du in Ruhe."
        ],
        "feedbackCorrect": "Deine Wut ist berechtigt, aber bei Aufregung prüfst du erst. Die Nachricht will, dass du schnell teilst.",
        "remember": "Wenn ich mich aufrege, prüfe ich zuerst."
      }
    },
    "fakes/lang/Nicht einfach weiterleiten": {
      "einfach": {
        "question": "Eine Freundin schickt dir: Achtung, in diesem Joghurt ist Glas. Schick das an alle. Du findest dazu nichts im Internet. Was machst du?",
        "answers": [
          "Ich schicke es weiter, weil es ja nicht schaden kann.",
          "Ich schicke es nicht weiter.",
          "Ich frage meine Freundin, woher sie das hat."
        ],
        "feedbackWrong": [
          "Eine falsche Warnung macht vielen Menschen Angst, und die Lüge verbreitet sich weiter. Im Zweifel teilst du nicht.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "So erfährst du, ob es eine echte Quelle gibt."
        ],
        "feedbackCorrect": "Du bist nicht sicher, und im Zweifel teilst du die Nachricht nicht.",
        "remember": "Im Zweifel teile ich nicht."
      },
      "standard": {
        "question": "Eine Freundin schickt dir: Achtung, in diesem Joghurt ist Glas. Schick das an alle. Du findest dazu nichts im Internet. Was machst du?",
        "answers": [
          "Ich schicke es weiter, schaden kann es ja nicht.",
          "Ich schicke es nicht weiter.",
          "Ich frage meine Freundin, woher sie das hat."
        ],
        "feedbackWrong": [
          "Eine falsche Warnung macht vielen Angst, und die Lüge verbreitet sich weiter. Im Zweifel teilst du nicht.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "So erfährst du, ob es eine echte Quelle gibt."
        ],
        "feedbackCorrect": "Du bist nicht sicher, und im Zweifel teilst du die Nachricht nicht.",
        "remember": "Im Zweifel teile ich nicht."
      }
    },
    "fakes/lang/Was kann ich tun?": {
      "einfach": {
        "question": "Dein Kollege zeigt dir eine Nachricht und ist sehr aufgeregt. Er sagt: Das musst du sofort teilen, sonst bist du schuld. Was machst du?",
        "answers": [
          "Ich teile sie, weil ich nicht schuld sein will.",
          "Ich schaue mit ihm zusammen nach, ob das stimmt.",
          "Ich sage ihm, dass ich das erst prüfe."
        ],
        "feedbackWrong": [
          "Erst prüfen ist keine Schuld. Der Druck ist ein Warnzeichen, deshalb prüfst du zuerst.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Zu zweit sieht man mehr, und dein Kollege lernt das Prüfen gleich mit.",
          null
        ],
        "feedbackCorrect": "Du lässt dich nicht drängen, und bei starken Gefühlen prüfst du zuerst.",
        "remember": "Bei starken Gefühlen prüfe ich zuerst."
      },
      "standard": {
        "question": "Dein Kollege zeigt dir eine Nachricht und ist sehr aufgeregt. Er sagt: Das musst du sofort teilen, sonst bist du schuld. Was machst du?",
        "answers": [
          "Ich teile sie, ich will nicht schuld sein.",
          "Ich sehe mit ihm zusammen nach, ob das stimmt.",
          "Ich sage ihm, dass ich das erst prüfe."
        ],
        "feedbackWrong": [
          "Erst zu prüfen ist keine Schuld. Der Druck ist ein Warnzeichen – deshalb prüfst du zuerst.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Zu zweit sieht man mehr, und dein Kollege lernt das Prüfen gleich mit.",
          null
        ],
        "feedbackCorrect": "Du lässt dich nicht drängen, und bei starken Gefühlen prüfst du zuerst.",
        "remember": "Bei starken Gefühlen prüfe ich zuerst."
      }
    },
    "fakes/kurz/Was ist eine Fake-Nachricht?": {
      "einfach": {
        "question": "Du liest auf dem Handy: Ab Montag ist Bargeld in Deutschland verboten. Die Nachricht sieht aus wie von einer echten Zeitung. Was machst du?",
        "answers": [
          "Ich glaube es, weil es wie eine echte Nachricht aussieht.",
          "Ich bleibe ruhig, denn das kann eine Fake-Nachricht sein.",
          "Ich schaue auf der Seite der Zeitung nach."
        ],
        "feedbackWrong": [
          "Fake-Nachrichten sehen oft echt aus, und genau das ist der Trick. Das Aussehen ist kein Beweis.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann siehst du, ob die Nachricht dort wirklich steht."
        ],
        "feedbackCorrect": "Eine Fake-Nachricht sieht echt aus, stimmt aber nicht. Deshalb glaubst du sie nicht sofort.",
        "remember": "Fake-Nachrichten sind Lügen."
      },
      "standard": {
        "question": "Du liest auf dem Handy: Ab Montag ist Bargeld in Deutschland verboten. Die Nachricht sieht aus wie von einer echten Zeitung. Was machst du?",
        "answers": [
          "Ich glaube es, es sieht ja wie eine echte Nachricht aus.",
          "Ich bleibe ruhig, das kann eine Fake-Nachricht sein.",
          "Ich sehe auf der Website der Zeitung nach."
        ],
        "feedbackWrong": [
          "Fake-Nachrichten sehen oft echt aus – genau das ist der Trick. Das Aussehen beweist nichts.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann siehst du, ob die Nachricht dort wirklich steht."
        ],
        "feedbackCorrect": "Eine Fake-Nachricht sieht echt aus, stimmt aber nicht. Deshalb glaubst du sie nicht sofort.",
        "remember": "Fake-Nachrichten sind Lügen."
      }
    },
    "fakes/kurz/Wie erkennst du Fakes?": {
      "einfach": {
        "question": "Du liest: In deinem Stadt-Teil laufen Einbrecher herum. Schließ alle Türen ab und teile das sofort. Du bekommst Angst. Was machst du?",
        "answers": [
          "Ich mache Stopp und prüfe die Nachricht erst.",
          "Ich teile es sofort, damit alle gewarnt sind.",
          "Ich schaue bei der Polizei nach, ob das dort auch steht."
        ],
        "feedbackWrong": [
          null,
          "Die Nachricht macht Angst, und das ist oft Absicht. Angst soll das Nachdenken verhindern. Prüf die Nachricht erst.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Die Polizei weiß das am besten, und dort stehen echte Warnungen."
        ],
        "feedbackCorrect": "Große Aufregung ist ein Warnzeichen. Dann machst du Stopp und entscheidest erst danach.",
        "remember": "Aufregung ist ein Warnzeichen. Ich mache Stopp."
      },
      "standard": {
        "question": "Du liest: In deinem Stadtteil sind Einbrecher unterwegs. Schließ alle Türen ab und teile das sofort. Du bekommst Angst. Was machst du?",
        "answers": [
          "Ich mache Stopp und prüfe die Nachricht erst.",
          "Ich teile es sofort, alle sollen gewarnt sein.",
          "Ich sehe bei der Polizei nach, ob das dort auch steht."
        ],
        "feedbackWrong": [
          null,
          "Die Nachricht macht Angst, und das ist oft gewollt: Angst soll das Nachdenken verhindern. Prüf die Nachricht erst.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Die Polizei weiß das am besten, dort stehen echte Warnungen."
        ],
        "feedbackCorrect": "Große Aufregung ist ein Warnzeichen. Dann machst du Stopp und entscheidest erst danach.",
        "remember": "Aufregung ist ein Warnzeichen: Ich mache Stopp."
      }
    },
    "fakes/kurz/Was tust du bei Fakes?": {
      "einfach": {
        "question": "In deiner Familien-Gruppe steht eine Nachricht, und du hast geprüft: Sie ist falsch. Was machst du?",
        "answers": [
          "Ich leite sie weiter und schreibe dazu, dass sie falsch ist.",
          "Ich schreibe in die Gruppe, dass die Nachricht nicht stimmt.",
          "Ich leite sie nicht weiter."
        ],
        "feedbackWrong": [
          "Auch eine Warnung verbreitet die Lüge weiter. Schreib lieber nur, dass die Nachricht nicht stimmt.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "So wissen die anderen Bescheid, und die Lüge geht nicht weiter.",
          null
        ],
        "feedbackCorrect": "Du leitest die Nachricht nicht weiter, und so verbreitet sich die Lüge nicht.",
        "remember": "Fakes leite ich nicht weiter."
      },
      "standard": {
        "question": "In deiner Familiengruppe steht eine Nachricht, und du hast geprüft: Sie ist falsch. Was machst du?",
        "answers": [
          "Ich leite sie weiter und schreibe dazu, dass sie falsch ist.",
          "Ich schreibe in die Gruppe, dass die Nachricht nicht stimmt.",
          "Ich leite sie nicht weiter."
        ],
        "feedbackWrong": [
          "Auch eine Warnung verbreitet die Lüge weiter. Schreib lieber nur, dass die Nachricht nicht stimmt.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "So wissen die anderen Bescheid, und die Lüge wandert nicht weiter.",
          null
        ],
        "feedbackCorrect": "Du leitest die Nachricht nicht weiter, und so verbreitet sich die Lüge nicht.",
        "remember": "Fakes leite ich nicht weiter."
      }
    },
    "Kann KI Fotos fälschen?": {
      "einfach": {
        "question": "Kann eine KI Fotos fälschen, die echt aussehen?",
        "hinweis": "Überlege, wie gut die Bilder von einer KI heute aussehen.",
        "answers": [
          "Nein, so etwas geht niemals.",
          "Ja, und sie sehen sehr echt aus.",
          "Nur mit sehr teuren Spezial-Geräten."
        ],
        "feedbackWrong": [
          "Doch, KI kann sehr echt aussehende Fotos fälschen.",
          null,
          "Dafür reicht heute schon ein Handy."
        ],
        "feedbackCorrect": "Bilder von einer KI können sehr echt aussehen. Viele haben keine sichtbaren Fehler mehr."
      },
      "standard": {
        "question": "Kann eine KI Fotos fälschen, die echt wirken?",
        "hinweis": "Wie gut sehen KI-Bilder heute aus?",
        "answers": [
          "Nein, so etwas geht nicht.",
          "Ja, und sie wirken sehr echt.",
          "Nur mit teuren Spezialgeräten."
        ],
        "feedbackWrong": [
          "Doch – KI kann täuschend echte Fotos fälschen.",
          null,
          "Dafür reicht heute schon ein Smartphone."
        ],
        "feedbackCorrect": "KI-Bilder können täuschend echt aussehen. Viele haben keine sichtbaren Fehler mehr."
      }
    },
    "Was ist ein Deepfake?": {
      "einfach": {
        "question": "Du liest das Wort Deepfake. Was ist ein Deepfake?",
        "hinweis": "Überlege, was das Wort Fake bedeutet.",
        "answers": [
          "Ein besonders echtes Video.",
          "Ein besonders langes Video.",
          "Ein mit KI gefälschtes Video."
        ],
        "feedbackWrong": [
          "Ein Deepfake sieht oft echt aus, aber er ist gefälscht.",
          "Die Länge ist egal. Ein Deepfake ist gefälscht.",
          null
        ],
        "feedbackCorrect": "Ein Deepfake ist ein Video, das mit KI gefälscht wurde. Die KI tauscht darin Gesicht oder Stimme aus."
      },
      "standard": {
        "question": "Was versteht man unter einem Deepfake?",
        "hinweis": "Was bedeutet das Wort Fake?",
        "answers": [
          "Ein besonders authentisches Video.",
          "Ein besonders langes Video.",
          "Ein mit KI gefälschtes Video."
        ],
        "feedbackWrong": [
          "Ein Deepfake wirkt oft echt – ist aber gefälscht.",
          "Die Länge spielt keine Rolle – ein Deepfake ist gefälscht.",
          null
        ],
        "feedbackCorrect": "Ein Deepfake ist ein mit KI gefälschtes Video. Darin sind Gesicht oder Stimme ausgetauscht."
      }
    },
    "Ein Anruf will sofort Geld. Die Stimme klingt bekannt. Was ist besser?": {
      "einfach": {
        "question": "Bei einem Anruf will jemand sofort Geld, und die Stimme klingt bekannt. Was ist besser?",
        "hinweis": "Überlege, wie du prüfen kannst, wer wirklich anruft.",
        "answers": [
          "Ich lege auf und rufe selbst zurück.",
          "Ich sende sofort das Geld, ich kenne die Stimme.",
          "Ich frage nach dem Namen und zahle dann."
        ],
        "feedbackWrong": [
          null,
          "Die Stimme kann mit KI gefälscht sein.",
          "Einen Namen kann jeder sagen. Ruf lieber selbst zurück."
        ],
        "feedbackCorrect": "Stimmen können mit KI gefälscht sein. Deshalb legst du auf und rufst die Person selbst unter der Nummer an, die du kennst."
      },
      "standard": {
        "question": "Ein Anrufer will sofort Geld, und die Stimme klingt vertraut. Was ist besser?",
        "hinweis": "Wie prüfst du, wer wirklich anruft?",
        "answers": [
          "Auflegen und selbst zurückrufen.",
          "Sofort Geld senden – die Stimme kenne ich.",
          "Nach dem Namen fragen und dann zahlen."
        ],
        "feedbackWrong": [
          null,
          "Die Stimme kann mit KI gefälscht sein.",
          "Einen Namen kann jeder nennen. Ruf lieber selbst zurück."
        ],
        "feedbackCorrect": "Stimmen lassen sich mit KI fälschen. Deshalb legst du auf und rufst die Person selbst unter der Nummer an, die du kennst."
      }
    },
    "Wie kannst du eine Nachricht prüfen?": {
      "einfach": {
        "question": "Wie kannst du prüfen, ob eine Nachricht stimmt?",
        "hinweis": "Überlege, wo Nachrichten stehen, denen man trauen kann.",
        "answers": [
          "Ich schaue, ob bekannte Seiten das auch melden.",
          "Ich schaue, ob das Bild dazu schön ist.",
          "Ich zähle, wie oft andere sie geteilt haben."
        ],
        "feedbackWrong": [
          null,
          "Du prüfst die Quelle und nicht das Aussehen.",
          "Wenn viele etwas teilen, ist es deshalb noch nicht wahr."
        ],
        "feedbackCorrect": "Über wichtige Ereignisse berichten mehrere bekannte Nachrichten-Seiten. Wenn du die Nachricht dort nicht findest, bist du vorsichtig."
      },
      "standard": {
        "question": "Wie findest du heraus, ob eine Nachricht stimmt?",
        "hinweis": "Wo stehen Nachrichten, denen man vertrauen kann?",
        "answers": [
          "Ich schaue, ob bekannte Medien sie auch melden.",
          "Ich achte darauf, ob das Bild schön ist.",
          "Ich zähle, wie oft andere Leute sie geteilt haben."
        ],
        "feedbackWrong": [
          null,
          "Entscheidend ist die Quelle, nicht das Aussehen.",
          "Häufig geteilt heißt nicht wahr."
        ],
        "feedbackCorrect": "Über wichtige Ereignisse berichten mehrere bekannte Medien. Findest du die Nachricht dort nicht, ist Vorsicht geboten."
      }
    },
    "Ein Promi verspricht im Video schnelles Geld. Was ist das oft?": {
      "einfach": {
        "question": "Eine bekannte Person verspricht in einem Video schnelles Geld. Was ist das oft?",
        "hinweis": "Überlege, ob schnelles Geld und ein bekanntes Gesicht zusammenpassen.",
        "answers": [
          "Ein guter Tipp, mit dem man Geld spart.",
          "Ein gefälschtes Video, also Betrug.",
          "Echte Werbung von der bekannten Person."
        ],
        "feedbackWrong": [
          "Solche Videos sind oft Betrug.",
          null,
          "Die Person weiß meistens nichts davon. Das Video ist gefälscht."
        ],
        "feedbackCorrect": "Solche Videos sind oft mit KI gefälscht. Betrüger wollen damit dein Geld stehlen. Mach da nicht mit."
      },
      "standard": {
        "question": "Ein Promi verspricht in einem Video schnelles Geld. Was steckt oft dahinter?",
        "hinweis": "Passen schnelles Geld und ein bekanntes Gesicht zusammen?",
        "answers": [
          "Ein guter Tipp, mit dem man Geld spart.",
          "Betrug mit einem gefälschten Video.",
          "Echte Werbung des Promis."
        ],
        "feedbackWrong": [
          "Solche Videos sind oft Betrug.",
          null,
          "Der Promi weiß meist nichts davon – das Video ist gefälscht."
        ],
        "feedbackCorrect": "Solche Videos sind oft mit KI gefälscht und dienen dem Betrug: Die Täter wollen dein Geld. Mach da nicht mit."
      }
    },
    "Bevor du eine Nachricht teilst: Was machst du?": {
      "einfach": {
        "question": "Du willst eine Nachricht teilen. Was machst du vorher?",
        "hinweis": "Überlege, wie viele Menschen die Nachricht sehen, wenn du sie weiterschickst.",
        "answers": [
          "Ich teile sie zuerst und prüfe danach.",
          "Ich teile sie und schreibe dazu: Weiß nicht, ob es stimmt.",
          "Ich prüfe sie zuerst und teile sie dann."
        ],
        "feedbackWrong": [
          "Prüfe die Nachricht lieber zuerst und teile sie erst dann.",
          "Dein Hinweis geht beim Weiterschicken oft verloren.",
          null
        ],
        "feedbackCorrect": "Wenn du eine falsche Nachricht teilst, verbreitet sie sich weiter. Deshalb gilt: erst prüfen, dann teilen."
      },
      "standard": {
        "question": "Du willst eine Nachricht teilen. Was tust du vorher?",
        "hinweis": "Wie viele Menschen erreicht eine Nachricht, wenn du sie weiterschickst?",
        "answers": [
          "Erst teilen, dann prüfen.",
          "Teilen und dazuschreiben, dass ich es nicht weiß.",
          "Erst prüfen, dann teilen."
        ],
        "feedbackWrong": [
          "Prüf die Nachricht lieber zuerst und teile sie erst dann.",
          "Dein Hinweis geht beim Weiterleiten oft verloren.",
          null
        ],
        "feedbackCorrect": "Teilst du eine Falschmeldung, verbreitet sie sich weiter. Deshalb gilt: erst prüfen, dann teilen."
      }
    },
    "Ist alles im Internet wahr?": {
      "einfach": {
        "question": "Stimmt alles, was im Internet steht?",
        "hinweis": "Überlege, ob jeder Mensch alles ins Internet schreiben kann.",
        "answers": [
          "Ja, alles im Internet stimmt.",
          "Nein, nicht alles stimmt.",
          "Ja, wenn ein Foto dabei ist."
        ],
        "feedbackWrong": [
          "Nicht alles im Internet stimmt, denn jeder kann etwas hineinschreiben.",
          null,
          "Auch ein Foto kann gefälscht sein."
        ],
        "feedbackCorrect": "Jeder kann etwas ins Internet schreiben. Deshalb ist nicht alles wahr, was dort steht."
      },
      "standard": {
        "question": "Ist alles wahr, was im Internet steht?",
        "hinweis": "Kann jeder alles ins Internet schreiben?",
        "answers": [
          "Ja, alles im Internet stimmt.",
          "Nein, nicht alles stimmt.",
          "Ja, sobald ein Foto dabei ist."
        ],
        "feedbackWrong": [
          "Nicht alles stimmt – jeder kann etwas ins Internet stellen.",
          null,
          "Auch ein Foto kann gefälscht sein."
        ],
        "feedbackCorrect": "Jeder kann Inhalte ins Internet stellen. Deshalb ist nicht alles wahr, was dort steht."
      }
    }
  },
  "ki": {
    "Ein Chatbot schreibt sehr nett. Was stimmt?": {
      "einfach": {
        "question": "Ein Chatbot schreibt dir sehr freundlich. Was stimmt trotzdem?",
        "hinweis": "Ein Chatbot kann freundlich schreiben. Denk daran, was ein Chatbot ist.",
        "answers": [
          "Der Chatbot ist ein echter Freund.",
          "Der Chatbot mag mich.",
          "Der Chatbot ist ein Programm."
        ],
        "feedbackCorrect": "Ein Chatbot ist ein Programm und hat keine Gefühle, auch wenn er freundlich schreibt. Echte Freunde sind Menschen.",
        "feedbackWrong": [
          "Ein Chatbot ist ein Programm. Er ist kein echter Freund.",
          "Ein Programm kann dich nicht mögen. Es berechnet seine Antworten.",
          null
        ]
      },
      "standard": {
        "question": "Ein Chatbot antwortet dir sehr freundlich. Welche Aussage trifft trotzdem zu?",
        "hinweis": "Freundliche Worte sagen nichts darüber aus, ob ein Mensch dir schreibt.",
        "answers": [
          "Er ist ein echter Freund.",
          "Er mag mich.",
          "Er ist ein Programm."
        ],
        "feedbackCorrect": "Ein Chatbot ist ein Programm und hat keine Gefühle, auch wenn er freundlich antwortet. Echte Freunde sind Menschen.",
        "feedbackWrong": [
          "Ein Chatbot ist ein Programm und kein echter Freund.",
          "Ein Programm mag niemanden. Es berechnet Antworten.",
          null
        ]
      }
    },
    "Die KI gibt eine wichtige Antwort. Was machst du?": {
      "einfach": {
        "question": "Die KI gibt dir eine Antwort, die für dich wichtig ist. Was machst du?",
        "hinweis": "Bei einer wichtigen Antwort kann ein Fehler Folgen haben. Was hilft dir dann?",
        "answers": [
          "Ich prüfe die Antwort.",
          "Ich glaube sofort alles.",
          "Ich frage die KI noch einmal."
        ],
        "feedbackCorrect": "Eine KI klingt oft sicher, kann aber Fehler machen. Deshalb prüfst du Antworten, die wichtig für dich sind.",
        "feedbackWrong": [
          null,
          "Auch wenn die KI sicher klingt, kann ihre Antwort falsch sein.",
          "Auch bei der zweiten Frage kann die KI wieder falsch liegen. Prüfe an einer anderen Stelle nach."
        ]
      },
      "standard": {
        "question": "Du bekommst von einer KI eine wichtige Antwort. Was tust du?",
        "hinweis": "Ein Fehler in einer wichtigen Antwort kann Folgen haben. Was hilft dir dagegen?",
        "answers": [
          "Ich überprüfe die Antwort.",
          "Ich glaube ihr sofort alles.",
          "Ich stelle der KI dieselbe Frage noch einmal."
        ],
        "feedbackCorrect": "Eine KI kann sehr sicher klingen und trotzdem falsch liegen. Deshalb überprüfst du wichtige Antworten.",
        "feedbackWrong": [
          null,
          "KI kann sehr sicher klingen und trotzdem falsch liegen.",
          "Eine weitere Antwort derselben KI ist keine unabhängige Bestätigung. Vergleiche sie mit einer anderen Quelle."
        ]
      }
    },
    "ki/quiz/stimme-geld-rueckruf": {
      "einfach": {
        "question": "Eine neue Nummer ruft dich an. Die Stimme klingt wie dein Onkel und sagt: Meine Bank-App geht nicht. Kannst du mir 100 Euro leihen? Du hast seine Nummer bereits gespeichert. Was machst du zuerst?",
        "hinweis": "Überlege, wie du prüfen kannst, wer wirklich anruft.",
        "answers": [
          "Ich bleibe am Telefon und frage nach seinem Namen.",
          "Ich schicke zunächst 20 Euro und den Rest später.",
          "Ich lege auf und rufe seine gespeicherte Nummer an."
        ],
        "feedbackCorrect": "Mit KI kann man Stimmen nachmachen. Deshalb rufst du deinen Onkel selbst unter der gespeicherten Nummer an und prüfst, ob die Bitte wirklich von ihm kommt. Vorher schickst du kein Geld.",
        "feedbackWrong": [
          "Auch jemand anderes kann den Namen deines Onkels kennen. Das beweist nicht, wer am Telefon ist. Leg auf und ruf die Nummer an, die du schon gespeichert hast.",
          "Auch ein kleiner Betrag kann verloren sein. Die vertraute Stimme beweist nicht, dass dein Onkel anruft. Ruf seine gespeicherte Nummer selbst an, bevor du Geld schickst.",
          null
        ],
        "remember": "Ich öffne die App selbst oder rufe eine schon bekannte Nummer an."
      },
      "standard": {
        "question": "Du erhältst einen Anruf von einer neuen Nummer. Die Stimme klingt wie dein Onkel: Meine Bank-App funktioniert nicht. Kannst du mir 100 Euro leihen? Seine bisherige Nummer hast du gespeichert. Was tust du zuerst?",
        "hinweis": "Überlege, wie du die Person über einen unabhängigen Kontakt überprüfen kannst.",
        "answers": [
          "Ich bleibe im Gespräch und frage nach seinem Namen.",
          "Ich überweise zuerst 20 Euro und den Rest später.",
          "Ich lege auf und rufe seine gespeicherte Nummer an."
        ],
        "feedbackCorrect": "Eine vertraute Stimme kann mit KI nachgeahmt sein. Ruf deinen Onkel unter der bereits gespeicherten Nummer selbst an und klär, ob die Bitte tatsächlich von ihm kommt. Überweise bis dahin kein Geld.",
        "feedbackWrong": [
          "Den Namen deines Onkels kann auch eine andere Person kennen. Er bestätigt die Identität des Anrufers nicht. Leg auf und prüf die Bitte über die Nummer, die du bereits gespeichert hast.",
          "Auch ein kleiner Testbetrag kann verloren gehen. Die vertraute Stimme belegt nicht, wer anruft. Klär die Bitte zunächst durch einen eigenen Anruf unter der gespeicherten Nummer.",
          null
        ],
        "remember": "Ich öffne die App selbst oder rufe eine Nummer an, die ich schon kenne – nicht die aus der Nachricht."
      }
    },
    "ki/lang/Was ist KI?": {
      "einfach": {
        "question": "Du fragst eine KI nach einem Rezept für Apfel-Kuchen, und nach 2 Sekunden ist die Antwort da. Wie macht die KI das?",
        "answers": [
          "Ein Mensch tippt die Antwort sehr schnell.",
          "Das Programm hat sehr viele Texte gelernt.",
          "Die KI kennt mich und weiß, was ich mag."
        ],
        "feedbackWrong": [
          "Da sitzt kein Mensch, denn so schnell tippt niemand. Es ist ein Programm.",
          null,
          "Die KI kennt dich nicht. Sie hat viele Rezepte gelernt und baut daraus eine Antwort."
        ],
        "feedbackCorrect": "KI ist ein Programm, das sehr viele Texte gelernt hat. Daraus baut es schnell eine Antwort.",
        "remember": "KI ist ein Programm, kein Mensch."
      },
      "standard": {
        "question": "Du fragst eine KI nach einem Rezept für Apfelkuchen, und nach zwei Sekunden ist die Antwort da. Wie macht die KI das?",
        "answers": [
          "Ein Mensch tippt die Antwort sehr schnell.",
          "Das Programm hat sehr viele Texte gelernt.",
          "Die KI kennt mich und weiß, was ich mag."
        ],
        "feedbackWrong": [
          "Da sitzt kein Mensch – so schnell tippt niemand. Es ist ein Programm.",
          null,
          "Die KI kennt dich nicht. Sie hat viele Rezepte gelernt und setzt daraus eine Antwort zusammen."
        ],
        "feedbackCorrect": "KI ist ein Programm, das sehr viele Texte gelernt hat. Daraus setzt es schnell eine Antwort zusammen.",
        "remember": "KI ist ein Programm, kein Mensch."
      }
    },
    "ki/lang/Wo triffst du KI?": {
      "einfach": {
        "question": "In WhatsApp siehst du einen neuen blauen Kreis. Du tippst darauf, und ein Chat geht auf: Frag Meta AI. Was ist das?",
        "answers": [
          "Eine KI, die in WhatsApp eingebaut ist.",
          "Ein neuer Kontakt, also ein Mensch von WhatsApp.",
          "Ein Fehler, deshalb lösche ich lieber WhatsApp."
        ],
        "feedbackWrong": [
          null,
          "Meta AI ist kein Mensch, sondern eine KI, die in WhatsApp eingebaut ist.",
          "Das ist kein Fehler, und du musst WhatsApp nicht löschen. Du musst die KI auch nicht benutzen."
        ],
        "feedbackCorrect": "KI ist in vielen Apps eingebaut, und du entscheidest selbst, ob du sie benutzen willst.",
        "remember": "KI ist in vielen Apps."
      },
      "standard": {
        "question": "In WhatsApp fällt dir ein neuer blauer Kreis auf. Du tippst darauf, und ein Chat öffnet sich: Frag Meta AI. Was ist das?",
        "answers": [
          "Eine KI, die in WhatsApp eingebaut ist.",
          "Ein neuer Kontakt, ein Mensch von WhatsApp.",
          "Ein Fehler, ich lösche lieber WhatsApp."
        ],
        "feedbackWrong": [
          null,
          "Meta AI ist kein Mensch, sondern eine KI, die in WhatsApp eingebaut ist.",
          "Das ist kein Fehler, und löschen musst du WhatsApp nicht. Nutzen musst du die KI auch nicht."
        ],
        "feedbackCorrect": "KI ist in vielen Apps eingebaut, und du entscheidest selbst, ob du sie nutzen willst.",
        "remember": "KI steckt in vielen Apps."
      }
    },
    "ki/lang/Ein Chatbot ist kein Mensch": {
      "einfach": {
        "question": "Du bist abends oft allein und schreibst viel mit einem Chatbot. Er schreibt: Ich bin immer für dich da. Was machst du?",
        "answers": [
          "Ich erzähle ihm alle Sorgen, weil er mich am besten versteht.",
          "Ich höre sofort auf, weil Chatbots gefährlich sind.",
          "Ich schreibe weiter mit ihm, aber ich rufe auch eine Freundin an."
        ],
        "feedbackWrong": [
          "Der Chatbot klingt freundlich, aber er ist ein Programm ohne Gefühle. Wichtige Sorgen besprichst du mit einem Menschen.",
          "Du darfst mit einem Chatbot schreiben. Wichtig ist nur, dass er keine Menschen ersetzt.",
          null
        ],
        "feedbackCorrect": "Der Chatbot ist ein Programm ohne Gefühle. Echte Menschen tun dir gut.",
        "remember": "Ein Chatbot ist kein Mensch."
      },
      "standard": {
        "question": "Du bist abends oft allein und schreibst viel mit einem Chatbot. Er schreibt: Ich bin immer für dich da. Was machst du?",
        "answers": [
          "Ich erzähle ihm alle Sorgen, er versteht mich am besten.",
          "Ich höre sofort auf, Chatbots sind gefährlich.",
          "Ich schreibe weiter mit ihm, rufe aber auch eine Freundin an."
        ],
        "feedbackWrong": [
          "Der Chatbot klingt freundlich, ist aber ein Programm ohne Gefühle. Wichtige Sorgen besprichst du mit einem Menschen.",
          "Du darfst mit einem Chatbot schreiben. Wichtig ist nur, dass er keine Menschen ersetzt.",
          null
        ],
        "feedbackCorrect": "Der Chatbot ist ein Programm ohne Gefühle. Echte Menschen tun dir gut.",
        "remember": "Ein Chatbot ist kein Mensch."
      }
    },
    "ki/lang/KI macht Fehler": {
      "einfach": {
        "question": "Du fragst eine KI, ob du ein Zimmer in deiner Wohnung vermieten darfst. Die KI antwortet lang und sehr sicher. Was machst du?",
        "answers": [
          "Ich prüfe die Antwort an einer zweiten Stelle.",
          "Ich glaube der Antwort, weil die KI ja sehr sicher klingt.",
          "Ich frage meinen Vermieter."
        ],
        "feedbackWrong": [
          null,
          "KI klingt oft sicher, auch wenn sie Fehler macht. Bei einer wichtigen Frage prüfst du deshalb nach.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dein Vermieter weiß, was in deinem Vertrag gilt."
        ],
        "feedbackCorrect": "KI klingt oft sicher, auch wenn sie Fehler macht. Deshalb prüfst du wichtige Antworten nach.",
        "remember": "KI kann Fehler machen. Ich prüfe wichtige Antworten."
      },
      "standard": {
        "question": "Du fragst eine KI, ob du ein Zimmer deiner Wohnung vermieten darfst. Sie antwortet ausführlich und sehr bestimmt. Was machst du?",
        "answers": [
          "Ich prüfe die Antwort an einer zweiten Stelle.",
          "Ich glaube der Antwort, die KI klingt ja sehr sicher.",
          "Ich frage meinen Vermieter."
        ],
        "feedbackWrong": [
          null,
          "KI klingt oft sicher, auch wenn sie sich irrt. Bei einer wichtigen Frage prüfst du deshalb nach.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dein Vermieter weiß, was in deinem Vertrag gilt."
        ],
        "feedbackCorrect": "KI klingt oft sicher, auch wenn sie sich irrt. Deshalb prüfst du wichtige Antworten nach.",
        "remember": "KI kann sich irren. Wichtige Antworten prüfe ich."
      }
    },
    "ki/lang/So prüfst du eine Antwort": {
      "einfach": {
        "question": "Du suchst die Telefon-Nummer deiner Bank, und die KI nennt dir eine Nummer. Was machst du?",
        "answers": [
          "Ich rufe sofort an, weil die KI sie ja gefunden hat.",
          "Ich schaue auf der Seite meiner Bank nach.",
          "Ich schaue in meinen Bank-Unterlagen nach."
        ],
        "feedbackWrong": [
          "KI erfindet manchmal Nummern. Dann kann am Telefon auch ein Betrüger sein. Schau erst nach.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Auch dort steht die richtige Nummer deiner Bank."
        ],
        "feedbackCorrect": "Du prüfst, ob die Nummer auch woanders steht. So findest du Fehler.",
        "remember": "Ich stelle 3 Fragen. Dann weiß ich mehr."
      },
      "standard": {
        "question": "Du suchst die Telefonnummer deiner Bank, und die KI nennt dir eine. Was machst du?",
        "answers": [
          "Ich rufe sofort an, die KI hat sie ja gefunden.",
          "Ich sehe auf der Website meiner Bank nach.",
          "Ich sehe in meinen Bankunterlagen nach."
        ],
        "feedbackWrong": [
          "KI erfindet manchmal Nummern. Dann kann am anderen Ende auch ein Betrüger sitzen. Sieh erst nach.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Auch dort steht die richtige Nummer deiner Bank."
        ],
        "feedbackCorrect": "Du prüfst, ob die Nummer auch an anderer Stelle steht. So fallen Fehler auf.",
        "remember": "Mit drei Fragen prüfe ich eine KI-Antwort."
      }
    },
    "ki/lang/Keine privaten Daten": {
      "einfach": {
        "question": "Du willst mit einer KI einen Brief an deinen Vermieter schreiben. Die KI fragt nach deinem Namen und deiner Adresse. Was machst du?",
        "answers": [
          "Ich gebe Namen und Adresse ein, weil der Brief sonst nicht fertig wird.",
          "Ich lasse die Stellen frei und fülle sie später selbst aus.",
          "Ich schreibe Max Muster und setze meine Daten später selbst ein."
        ],
        "feedbackWrong": [
          "Viele KI-Dienste speichern deine Nachrichten. Der Brief wird auch ohne deine Daten fertig, und du trägst sie später selbst ein.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Auch so bekommt die KI deine privaten Daten nicht.",
          null
        ],
        "feedbackCorrect": "So hilft dir die KI beim Brief, und deine privaten Daten bleiben trotzdem bei dir.",
        "remember": "Ich gebe der KI keine privaten Daten."
      },
      "standard": {
        "question": "Du willst mit einer KI einen Brief an deinen Vermieter schreiben. Die KI fragt nach deinem Namen und deiner Adresse. Was machst du?",
        "answers": [
          "Ich gebe Namen und Adresse ein, sonst wird der Brief nicht fertig.",
          "Ich lasse die Stellen frei und fülle sie später selbst aus.",
          "Ich schreibe Max Mustermann und setze meine Daten später selbst ein."
        ],
        "feedbackWrong": [
          "Viele KI-Dienste speichern deine Eingaben. Der Brief wird auch ohne deine Daten fertig – du trägst sie später selbst ein.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Auch so erhält die KI deine privaten Daten nicht.",
          null
        ],
        "feedbackCorrect": "So hilft dir die KI beim Brief, und deine privaten Daten bleiben trotzdem bei dir.",
        "remember": "Einer KI gebe ich keine privaten Daten."
      }
    },
    "ki/lang/Gesundheit und Geld": {
      "einfach": {
        "question": "Du hast 500 Euro gespart und fragst eine KI, was du mit dem Geld machen sollst. Die KI rät: Kauf davon Gold. Was machst du?",
        "answers": [
          "Ich kaufe nichts und spreche erst mit meiner Bank.",
          "Ich kaufe das Gold, weil die KI das ausgerechnet hat.",
          "Ich frage die KI noch einmal, damit ich sicher bin."
        ],
        "feedbackWrong": [
          null,
          "Die KI kennt dich nicht und weiß nicht, wie viel Geld du brauchst. Bei Geld kann ein Fehler teuer werden.",
          "Die KI antwortet vielleicht wieder falsch. Zweimal fragen macht eine Antwort nicht richtig."
        ],
        "feedbackCorrect": "Die KI kennt dich nicht. Bei Geld fragst du auch einen Menschen, zum Beispiel bei deiner Bank.",
        "remember": "Bei Gesundheit und Geld frage ich Menschen."
      },
      "standard": {
        "question": "Du hast 500 Euro gespart und fragst eine KI, was du mit dem Geld machen sollst. Die KI rät: Kauf davon Gold. Was machst du?",
        "answers": [
          "Ich kaufe nichts und spreche erst mit meiner Bank.",
          "Ich kaufe das Gold, die KI hat das ja ausgerechnet.",
          "Ich frage die KI noch einmal, dann bin ich sicher."
        ],
        "feedbackWrong": [
          null,
          "Die KI kennt dich nicht und weiß nicht, wie viel Geld du brauchst. Bei Geld kann ein Fehler teuer werden.",
          "Die KI antwortet vielleicht wieder falsch. Zweimal fragen macht eine Antwort nicht richtiger."
        ],
        "feedbackCorrect": "Die KI kennt dich nicht. Bei Geld fragst du auch einen Menschen, etwa bei deiner Bank.",
        "remember": "Bei Gesundheit und Geld frage ich Menschen."
      }
    },
    "ki/lang/KI kann Bilder und Stimmen fälschen": {
      "einfach": {
        "question": "Du bekommst eine Sprach-Nachricht, und die Stimme klingt wie dein Chef. Er sagt: Kauf bitte drei Gutschein-Karten und schick mir die Codes. Was machst du?",
        "answers": [
          "Ich kaufe die Karten, weil mein Chef sie ja braucht.",
          "Ich kaufe nichts und rufe meinen Chef selbst an.",
          "Ich kaufe nichts und frage ihn morgen bei der Arbeit."
        ],
        "feedbackWrong": [
          "KI kann Stimmen nachmachen, und Gutschein-Codes sind wie Geld. Betrüger fragen oft danach.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Auch so merkst du, ob die Nachricht wirklich von ihm kam."
        ],
        "feedbackCorrect": "KI kann Stimmen nachmachen. Am Telefon merkst du, ob dein Chef das wirklich gesagt hat.",
        "remember": "Stimmen können gefälscht sein."
      },
      "standard": {
        "question": "Du bekommst eine Sprachnachricht, die Stimme klingt wie dein Chef: Kauf bitte drei Gutscheinkarten und schick mir die Codes. Was machst du?",
        "answers": [
          "Ich kaufe die Karten, mein Chef braucht sie ja.",
          "Ich kaufe nichts und rufe meinen Chef selbst an.",
          "Ich kaufe nichts und frage ihn morgen bei der Arbeit."
        ],
        "feedbackWrong": [
          "KI kann Stimmen nachahmen, und Gutscheincodes sind so gut wie Bargeld. Betrüger fragen oft danach.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Auch so merkst du, ob die Nachricht wirklich von ihm kam."
        ],
        "feedbackCorrect": "KI kann Stimmen nachahmen. Am Telefon merkst du, ob dein Chef das wirklich gesagt hat.",
        "remember": "Stimmen können gefälscht sein."
      }
    },
    "ki/lang/Was kann ich tun?": {
      "einfach": {
        "question": "Du hast seit drei Tagen Zahn-Schmerzen. Die KI schreibt: Nimm jeden Tag sechs Schmerz-Tabletten. Was machst du?",
        "answers": [
          "Ich nehme die Tabletten so, weil die KI das weiß.",
          "Ich frage in der Apotheke nach den Tabletten.",
          "Ich gehe zur Zahn-Ärztin."
        ],
        "feedbackWrong": [
          "Die KI kennt dich nicht und kann sich irren. Zu viele Tabletten können dir schaden.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "In der Apotheke weiß man, wie viele Tabletten gut für dich sind.",
          null
        ],
        "feedbackCorrect": "Bei Gesundheit fragst du Fachleute, denn die KI ersetzt keine Ärztin.",
        "remember": "Bei Gesundheit und Geld frage ich einen Menschen."
      },
      "standard": {
        "question": "Du hast seit drei Tagen Zahnschmerzen. Die KI schreibt: Nimm täglich sechs Schmerztabletten. Was machst du?",
        "answers": [
          "Ich nehme die Tabletten so, die KI weiß das.",
          "Ich frage in der Apotheke nach den Tabletten.",
          "Ich gehe zur Zahnärztin."
        ],
        "feedbackWrong": [
          "Die KI kennt dich nicht und kann sich irren. Zu viele Tabletten können dir schaden.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "In der Apotheke weiß man, wie viele Tabletten für dich in Ordnung sind.",
          null
        ],
        "feedbackCorrect": "Bei Gesundheit fragst du Fachleute – die KI ersetzt keine Ärztin.",
        "remember": "Bei Gesundheit und Geld frage ich einen Menschen."
      }
    },
    "ki/kurz/Was ist KI?": {
      "einfach": {
        "question": "Du schreibst mit dem Chatbot deiner Kranken-Kasse. Er schreibt: Hallo, ich bin Mia. Wie kann ich helfen? Wer ist Mia?",
        "answers": [
          "Ein Programm, das nur Mia heißt.",
          "Eine Mitarbeiterin, weil sie ja einen Namen hat.",
          "Das weiß ich nicht, deshalb frage ich: Bist du ein Mensch?"
        ],
        "feedbackWrong": [
          null,
          "Viele Chatbots haben einen Namen, damit sie freundlich wirken. Mia ist trotzdem ein Programm und kein Mensch.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Du darfst nachfragen. Viele Chatbots sagen dann, dass sie ein Programm sind."
        ],
        "feedbackCorrect": "Mia ist ein Programm, und der Name macht den Chatbot nur freundlicher.",
        "remember": "KI ist ein Programm, kein Mensch."
      },
      "standard": {
        "question": "Du schreibst mit dem Chatbot deiner Krankenkasse. Er meldet sich mit: Hallo, ich bin Mia. Wie kann ich helfen? Wer ist Mia?",
        "answers": [
          "Ein Programm, das nur Mia heißt.",
          "Eine Mitarbeiterin, sie hat ja einen Namen.",
          "Das weiß ich nicht, ich frage: Bist du ein Mensch?"
        ],
        "feedbackWrong": [
          null,
          "Viele Chatbots tragen einen Namen, damit sie freundlich wirken. Mia ist trotzdem ein Programm und kein Mensch.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Nachfragen ist erlaubt. Viele Chatbots antworten dann, dass sie ein Programm sind."
        ],
        "feedbackCorrect": "Mia ist ein Programm. Der Name soll den Chatbot nur freundlicher wirken lassen.",
        "remember": "KI ist ein Programm, kein Mensch."
      }
    },
    "ki/kurz/Was kann KI?": {
      "einfach": {
        "question": "Du fragst eine KI, wie lange das Bürger-Amt morgen geöffnet hat. Die KI schreibt: Von 8 bis 18 Uhr. Du willst morgen hingehen. Was machst du?",
        "answers": [
          "Ich gehe um 17 Uhr hin, weil die KI es ja gesagt hat.",
          "Ich schaue auf der Seite vom Bürger-Amt nach.",
          "Ich rufe beim Bürger-Amt an."
        ],
        "feedbackWrong": [
          "KI klingt sicher, kann sich aber irren. Dann stehst du vielleicht vor einer geschlossenen Tür.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Auch so erfährst du die Zeiten direkt vom Amt."
        ],
        "feedbackCorrect": "Das Amt weiß es am besten. Die KI war ein guter Anfang, aber wichtige Antworten prüfst du nach.",
        "remember": "KI-Antworten prüfe ich."
      },
      "standard": {
        "question": "Du fragst eine KI, wie lange das Bürgeramt morgen geöffnet hat. Sie antwortet: von 8 bis 18 Uhr. Du willst morgen hingehen. Was machst du?",
        "answers": [
          "Ich gehe um 17 Uhr hin, die KI hat es ja gesagt.",
          "Ich sehe auf der Website des Bürgeramts nach.",
          "Ich rufe beim Bürgeramt an."
        ],
        "feedbackWrong": [
          "KI klingt sicher, kann sich aber irren. Dann stehst du womöglich vor verschlossener Tür.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Auch so erfährst du die Zeiten direkt vom Amt."
        ],
        "feedbackCorrect": "Das Amt weiß es am besten. Die KI war ein guter Anfang, aber wichtige Antworten prüfst du nach.",
        "remember": "Wichtige KI-Antworten prüfe ich."
      }
    },
    "ki/kurz/Wann musst du aufpassen?": {
      "einfach": {
        "question": "Dein Telefon klingelt, und die Stimme klingt wie deine Schwester. Sie sagt: Ich hatte einen Unfall und brauche sofort 2000 Euro. Was machst du?",
        "answers": [
          "Ich überweise das Geld schnell, weil sie es ja braucht.",
          "Ich bleibe am Telefon, weil ich erst mehr hören will.",
          "Ich lege auf und rufe meine Schwester selbst an."
        ],
        "feedbackWrong": [
          "KI kann Stimmen nachmachen, und die Stimme allein beweist nichts. Leg auf und ruf deine Schwester selbst an.",
          "Betrüger machen am Telefon Druck, und langes Zuhören macht das Auflegen schwer. Leg lieber gleich auf.",
          null
        ],
        "feedbackCorrect": "KI kann Stimmen nachmachen. Wenn du die bekannte Nummer selbst anrufst, kannst du nachfragen.",
        "remember": "Ich lege auf und rufe selbst an."
      },
      "standard": {
        "question": "Dein Telefon klingelt, die Stimme klingt wie deine Schwester: Ich hatte einen Unfall und brauche sofort 2000 Euro. Was machst du?",
        "answers": [
          "Ich überweise das Geld schnell, sie braucht es ja.",
          "Ich bleibe dran, ich will erst mehr hören.",
          "Ich lege auf und rufe meine Schwester selbst an."
        ],
        "feedbackWrong": [
          "KI kann Stimmen nachahmen, die Stimme allein beweist nichts. Leg auf und ruf deine Schwester selbst an.",
          "Betrüger machen am Telefon Druck, und je länger du zuhörst, desto schwerer fällt das Auflegen. Leg lieber gleich auf.",
          null
        ],
        "feedbackCorrect": "KI kann Stimmen nachahmen. Rufst du die bekannte Nummer selbst an, kannst du nachfragen.",
        "remember": "Ich lege auf und rufe selbst zurück."
      }
    },
    "Was ist KI?": {
      "einfach": {
        "question": "Was ist eine KI, zum Beispiel ein Chatbot?",
        "hinweis": "Überlege, ob eine KI ein Mensch ist oder etwas anderes.",
        "answers": [
          "Ein Mensch, der antwortet.",
          "Ein Roboter aus Metall.",
          "Ein Computer-Programm."
        ],
        "feedbackWrong": [
          "Eine KI ist kein Mensch, sondern ein Programm.",
          "Ein Roboter ist ein Gerät. Eine KI ist ein Programm.",
          null
        ],
        "feedbackCorrect": "Eine KI ist ein Computer-Programm. Sie hat aus sehr vielen Texten und Bildern gelernt und kann deshalb Fragen beantworten."
      },
      "standard": {
        "question": "Was ist eine KI, etwa ein Chatbot?",
        "hinweis": "Ist eine KI ein Mensch oder etwas anderes?",
        "answers": [
          "Ein Mensch, der antwortet.",
          "Ein Roboter aus Metall.",
          "Ein Computerprogramm."
        ],
        "feedbackWrong": [
          "Eine KI ist kein Mensch, sondern ein Programm.",
          "Ein Roboter ist ein Gerät – eine KI ist ein Programm.",
          null
        ],
        "feedbackCorrect": "Eine KI ist ein Computerprogramm. Sie wurde mit sehr vielen Texten und Bildern trainiert und kann deshalb Fragen beantworten."
      }
    },
    "Hat ein Chatbot Gefühle?": {
      "einfach": {
        "question": "Ein Chatbot schreibt: Ich freue mich, dass du da bist. Hat er Gefühle?",
        "hinweis": "Überlege, ob freundliche Worte bedeuten, dass jemand etwas fühlt.",
        "answers": [
          "Ja, genau wie ein Mensch.",
          "Nein, er ist ein Programm.",
          "Ja, aber nur wenige Gefühle."
        ],
        "feedbackWrong": [
          "Ein Chatbot kann nur so tun, als hätte er Gefühle. Er ist ein Programm.",
          null,
          "Auch wenige nicht, denn ein Programm fühlt nichts."
        ],
        "feedbackCorrect": "Ein Chatbot ist ein Programm. Er hat keine Gefühle, auch wenn er freundlich schreibt."
      },
      "standard": {
        "question": "Ein Chatbot schreibt: „Ich freue mich, dass du da bist.“ Hat er Gefühle?",
        "hinweis": "Bedeuten freundliche Worte, dass jemand etwas fühlt?",
        "answers": [
          "Ja, genau wie ein Mensch.",
          "Nein, er ist ein Programm.",
          "Ja, aber nur wenige."
        ],
        "feedbackWrong": [
          "Ein Chatbot kann Gefühle nur vortäuschen – er ist ein Programm.",
          null,
          "Auch keine wenigen: Ein Programm fühlt nichts."
        ],
        "feedbackCorrect": "Ein Chatbot ist ein Programm. Er hat keine Gefühle, auch wenn er freundlich schreibt."
      }
    },
    "Kann KI Fehler machen?": {
      "einfach": {
        "question": "Eine KI antwortet dir sehr sicher. Kann sie trotzdem Fehler machen?",
        "hinweis": "Überlege, ob sich ein Programm irren kann.",
        "answers": [
          "Nein, die KI weiß alles.",
          "Ja, die KI kann Fehler machen.",
          "Nein, die KI prüft alles selbst."
        ],
        "feedbackWrong": [
          "Die KI kann Fehler machen und sogar Dinge erfinden.",
          null,
          "Die KI prüft sich nicht selbst. Das musst du tun."
        ],
        "feedbackCorrect": "Eine KI kann Fehler machen, auch wenn sie sehr sicher klingt. Manchmal erfindet sie sogar Dinge."
      },
      "standard": {
        "question": "Eine KI antwortet dir sehr selbstsicher. Kann sie trotzdem falsch liegen?",
        "hinweis": "Kann sich ein Programm irren?",
        "answers": [
          "Nein, die KI weiß alles.",
          "Ja, die KI kann Fehler machen.",
          "Nein, die KI prüft sich selbst."
        ],
        "feedbackWrong": [
          "Eine KI kann Fehler machen und sogar Dinge erfinden.",
          null,
          "Eine KI prüft sich nicht selbst – das musst du tun."
        ],
        "feedbackCorrect": "Eine KI kann sich irren, auch wenn sie sehr überzeugt klingt. Manchmal erfindet sie sogar Dinge."
      }
    },
    "Ein Chatbot fragt nach deinem Passwort. Was ist besser?": {
      "einfach": {
        "question": "Ein Chatbot fragt nach deinem Passwort, damit er dir helfen kann. Was ist besser?",
        "hinweis": "Überlege, wem du dein Passwort gibst.",
        "answers": [
          "Ich gebe mein Passwort nicht ein.",
          "Ich gebe mein Passwort ein.",
          "Ich gebe nur einen Teil davon ein."
        ],
        "feedbackWrong": [
          null,
          "Dein Passwort ist privat, deshalb gibst du es nie weiter.",
          "Auch ein Teil ist schon zu viel. Gib gar nichts davon ein."
        ],
        "feedbackCorrect": "Viele KI-Dienste speichern, was du schreibst. Deshalb bleibt dein Passwort geheim, auch bei einer KI."
      },
      "standard": {
        "question": "Ein Chatbot fragt nach deinem Passwort, um dir angeblich zu helfen. Was ist besser?",
        "hinweis": "Wem gibst du dein Passwort?",
        "answers": [
          "Ich gebe es nicht ein.",
          "Ich gebe es ein.",
          "Ich gebe nur einen Teil ein."
        ],
        "feedbackWrong": [
          null,
          "Dein Passwort ist privat – du gibst es nie weiter.",
          "Auch ein Teil ist schon zu viel. Gib gar nichts davon ein."
        ],
        "feedbackCorrect": "Viele KI-Dienste speichern Eingaben. Deshalb bleibt dein Passwort geheim, auch gegenüber einer KI."
      }
    },
    "Du bist krank. Was ist besser?": {
      "einfach": {
        "question": "Du fühlst dich krank und fragst eine KI. Was ist besser?",
        "hinweis": "Überlege, wer dich wirklich kennt.",
        "answers": [
          "Ich frage nur die KI.",
          "Ich drucke die Antwort von der KI aus.",
          "Ich frage auch eine Ärztin oder einen Arzt."
        ],
        "feedbackWrong": [
          "Die KI kennt dich nicht und ersetzt keine Ärztin und keinen Arzt.",
          "Wenn du die Antwort ausdruckst, wird sie dadurch nicht richtig.",
          null
        ],
        "feedbackCorrect": "Die KI kennt dich nicht und kann falsche Tipps geben. Deshalb fragst du bei der Gesundheit auch eine Ärztin oder einen Arzt."
      },
      "standard": {
        "question": "Du fühlst dich krank und fragst eine KI um Rat. Was ist besser?",
        "hinweis": "Wer kennt dich wirklich?",
        "answers": [
          "Nur die KI fragen.",
          "Die KI-Antwort ausdrucken und befolgen.",
          "Auch eine Ärztin oder einen Arzt fragen."
        ],
        "feedbackWrong": [
          "Die KI kennt dich nicht und ersetzt keine ärztliche Beratung.",
          "Ausgedruckt wird die Antwort nicht richtiger.",
          null
        ],
        "feedbackCorrect": "Die KI kennt dich nicht und kann falsche Ratschläge geben. Deshalb fragst du bei Gesundheitsfragen auch eine Ärztin oder einen Arzt."
      }
    },
    "Kann KI Bilder fälschen?": {
      "einfach": {
        "question": "Du siehst ein Foto, das sehr echt aussieht. Kann eine KI so ein Bild machen?",
        "hinweis": "Überlege, wie gut Computer heute Bilder machen können.",
        "answers": [
          "Nein, so etwas kann eine KI nicht.",
          "Ja, und es kann ganz echt aussehen.",
          "Nur bei gezeichneten Bildern."
        ],
        "feedbackWrong": [
          "Doch, KI kann Bilder und Stimmen fälschen.",
          null,
          "Nicht nur gezeichnete Bilder. Auch Fotos von KI sehen echt aus."
        ],
        "feedbackCorrect": "Bilder von einer KI können sehr echt aussehen. Deshalb ist nicht jedes Foto echt, das echt aussieht."
      },
      "standard": {
        "question": "Du siehst ein Foto, das völlig echt wirkt. Kann eine KI so ein Bild erzeugen?",
        "hinweis": "Wie gut können Computer heute Bilder erzeugen?",
        "answers": [
          "Nein, so etwas kann eine KI nicht.",
          "Ja, und es kann völlig echt wirken.",
          "Nur bei gezeichneten Bildern."
        ],
        "feedbackWrong": [
          "Doch – KI kann Bilder und Stimmen fälschen.",
          null,
          "Nicht nur Zeichnungen: Auch KI-Fotos wirken täuschend echt."
        ],
        "feedbackCorrect": "KI-Bilder können täuschend echt aussehen. Nicht jedes Foto, das echt wirkt, ist also auch echt."
      }
    },
    "Wo steckt überall KI drin?": {
      "einfach": {
        "question": "Wo kann KI überall drinstecken?",
        "hinweis": "Überlege, wo du schon mit einem Programm geschrieben hast.",
        "answers": [
          "In vielen Apps, etwa in Chatbots.",
          "Nur in großen Robotern in Fabriken.",
          "Nur in ganz teuren Handys."
        ],
        "feedbackWrong": [
          null,
          "KI steckt in vielen Apps, nicht nur in Robotern.",
          "Der Preis vom Handy sagt nichts. KI steckt in vielen Apps."
        ],
        "feedbackCorrect": "KI steckt heute in vielen Apps, zum Beispiel in Chatbots und Sprach-Hilfen. Manchmal siehst du sie nicht sofort."
      },
      "standard": {
        "question": "Wo begegnet dir KI überall?",
        "hinweis": "Wo hast du schon mit einem Programm geschrieben?",
        "answers": [
          "In vielen Apps, etwa in Chatbots.",
          "Nur in Robotern in Fabriken.",
          "Nur in sehr teuren Handys."
        ],
        "feedbackWrong": [
          null,
          "KI steckt in vielen Apps, nicht nur in Robotern.",
          "Der Preis spielt keine Rolle – KI steckt in vielen Apps."
        ],
        "feedbackCorrect": "KI steckt heute in vielen Apps, etwa in Chatbots und Sprachassistenten. Manchmal bemerkst du sie nicht sofort."
      }
    },
    "Darfst du der KI deine Adresse oder ein Geheimnis schreiben?": {
      "einfach": {
        "question": "Darfst du einer KI deine Adresse oder ein Geheimnis schreiben?",
        "hinweis": "Überlege, was mit deinen Nachrichten an eine KI passieren kann.",
        "answers": [
          "Ja, das ist ganz sicher.",
          "Ja, danach lösche ich es einfach.",
          "Nein, keine privaten Daten."
        ],
        "feedbackWrong": [
          "Viele KI-Dienste speichern, was du schreibst. Gib deshalb nichts Privates ein.",
          "Wenn du es später löschst, kann es trotzdem schon gespeichert oder weitergegeben sein.",
          null
        ],
        "feedbackCorrect": "Viele KI-Dienste speichern, was du schreibst. Deshalb bleiben deine privaten Daten bei dir."
      },
      "standard": {
        "question": "Darfst du einer KI deine Adresse oder ein Geheimnis anvertrauen?",
        "hinweis": "Was kann mit deinen Nachrichten an eine KI passieren?",
        "answers": [
          "Ja, das ist völlig sicher.",
          "Ja, ich lösche es danach einfach.",
          "Nein, keine privaten Daten."
        ],
        "feedbackWrong": [
          "Viele KI-Dienste speichern Eingaben und werten sie aus. Gib deshalb nichts Privates ein.",
          "Auch wenn du es später löschst, kann es schon gespeichert oder verarbeitet sein.",
          null
        ],
        "feedbackCorrect": "Viele KI-Dienste speichern Eingaben. Deshalb behältst du private Daten für dich."
      }
    }
  },
  "instagram": {
    "Eine fremde Person bietet dir Geld für ein privates Foto. Was machst du?": {
      "einfach": {
        "question": "Eine Person, die du nicht kennst, bietet dir Geld für ein privates Foto von dir. Was machst du?",
        "hinweis": "Wenn dir eine fremde Person Geld für ein privates Foto bietet, ist das ein Warnzeichen. Was machst du bei einem Warnzeichen?",
        "answers": [
          "Ich schicke der Person das Foto, damit sie mir das Geld gibt.",
          "Ich frage zuerst nach mehr Geld und schicke ihr dann das Foto.",
          "Ich schicke nichts und erzähle es einer Person, der ich vertraue."
        ],
        "feedbackCorrect": "Die Person kann ein Foto speichern und weitergeben. Deshalb sagst du Nein und holst dir Hilfe bei einer Person, der du vertraust.",
        "feedbackWrong": [
          "Die Person kann das Foto speichern und weitergeben. Sag Nein und hol dir Hilfe.",
          "Auch für mehr Geld schickst du das Foto nicht. Es bleibt bei dir.",
          null
        ]
      },
      "standard": {
        "question": "Eine fremde Person bietet dir Geld für ein privates Foto. Wie reagierst du?",
        "hinweis": "Geld für ein privates Foto ist ein Warnzeichen. Was hilft dir bei solchen Warnzeichen?",
        "answers": [
          "Ich schicke das Foto und nehme dafür das angebotene Geld.",
          "Ich verlange mehr Geld und schicke das Foto nach der Zusage.",
          "Ich sende nichts und erzähle einer vertrauten Person davon."
        ],
        "feedbackCorrect": "Die Person kann ein Foto speichern und weiterverbreiten. Deshalb sagst du Nein und holst dir Hilfe.",
        "feedbackWrong": [
          "Die Person kann das Foto speichern und weiterverbreiten. Sag Nein und hol dir Hilfe.",
          "Auch mehr Geld ist kein Grund, das Foto zu verschicken. Es bleibt bei dir.",
          null
        ]
      }
    },
    "instagram/quiz/kern-privatkonto": {
      "einfach": {
        "question": "Du hast ein neues Instagram-Konto, dem noch niemand folgt. Es ist öffentlich. Du willst selbst entscheiden, wer deine Fotos sehen kann. Was stellst du vor dem ersten Foto ein?",
        "answers": [
          "Ich stelle mein Konto auf privat.",
          "Ich ändere nur mein Profilbild.",
          "Ich schreibe keinen Namen zu den Fotos."
        ],
        "feedbackCorrect": "Du stellst dein Konto auf privat und entscheidest über neue Anfragen. Deine Foto-Beiträge sehen dann nur Personen, deren Anfrage du bestätigst.",
        "feedbackWrong": [
          null,
          "Ein neues Profilbild ändert nicht, wer deine Beiträge sehen kann. Stelle dafür dein Konto auf privat.",
          "Ein fehlender Name macht ein öffentliches Foto nicht privat. Dafür stellst du dein Konto auf privat."
        ],
        "hinweis": "Welche Einstellung bestimmt, wer deine Beiträge sehen kann?",
        "remember": "Stell dein Konto auf privat."
      },
      "standard": {
        "question": "Dein neues Instagram-Konto ist öffentlich und hat noch keine Follower. Du möchtest selbst entscheiden, wer deine Fotos sehen kann. Welche Einstellung wählst du vor dem ersten Foto?",
        "answers": [
          "Ich stelle mein Konto auf privat.",
          "Ich ändere nur mein Profilbild.",
          "Ich lasse die Namen bei den Fotos weg."
        ],
        "feedbackCorrect": "Du stellst das Konto auf privat und entscheidest dann über neue Follower-Anfragen. Deine Foto-Beiträge sehen nur bestätigte Kontakte.",
        "feedbackWrong": [
          null,
          "Das Profilbild ändert die Sichtbarkeit deiner Beiträge nicht. Dafür stellst du das Konto auf privat.",
          "Fotos in einem öffentlichen Konto bleiben öffentlich, auch wenn du Namen weglässt. Stelle das Konto auf privat."
        ],
        "hinweis": "Welche Einstellung schränkt die Sichtbarkeit deiner Beiträge ein?",
        "remember": "Stell dein Konto auf privat."
      }
    },
    "instagram/quiz/kern-foto-zustimmung": {
      "einfach": {
        "question": "Beim Ausflug machst du ein Foto von deiner Freundin. Sie sagt, dass es ihr gefällt. Du möchtest es auf Instagram posten, aber ihr habt noch nicht darüber gesprochen. Was machst du zuerst?",
        "answers": [
          "Ich poste das Foto ohne ihren Namen.",
          "Ich frage: Darf ich das Foto auf Instagram posten?",
          "Ich poste das Foto nur in meinem privaten Konto."
        ],
        "feedbackCorrect": "Du fragst ausdrücklich nach dem Posten auf Instagram. Nur wenn deine Freundin Ja sagt, postest du das Foto.",
        "feedbackWrong": [
          "Deine Freundin ist auch ohne Namen erkennbar. Frage sie zuerst, ob du das Foto posten darfst.",
          null,
          "Auch in deinem privaten Konto können andere das Foto sehen. Deshalb fragst du deine Freundin zuerst."
        ],
        "hinweis": "Ein schönes Foto zu mögen bedeutet noch nicht, das Posten zu erlauben.",
        "remember": "Fotos von anderen postest du nur, wenn sie Ja sagen."
      },
      "standard": {
        "question": "Du fotografierst deine Freundin bei einem Ausflug. Ihr gefällt das Foto. Du möchtest es auf Instagram posten; darüber habt ihr bisher nicht gesprochen. Was tust du zuerst?",
        "answers": [
          "Ich poste das Foto ohne ihren Namen.",
          "Ich frage: Darf ich das Foto auf Instagram posten?",
          "Ich poste das Foto nur in meinem privaten Konto."
        ],
        "feedbackCorrect": "Du fragst nach ihrer Zustimmung zur Veröffentlichung auf Instagram. Dass ihr das Foto gefällt, ist noch keine Erlaubnis zum Posten.",
        "feedbackWrong": [
          "Ein fehlender Name ersetzt die Zustimmung nicht, denn deine Freundin ist auf dem Foto erkennbar.",
          null,
          "Ein privates Konto ersetzt ihre Zustimmung nicht. Du zeigst das Foto dort immer noch anderen Personen."
        ],
        "hinweis": "Hat sie dem Foto zugestimmt oder auch der Veröffentlichung?",
        "remember": "Fotos von anderen: erst fragen, dann posten."
      }
    },
    "instagram/lang/Foto posten": {
      "einfach": {
        "question": "Du hast ein Foto von deinem neuen Fahrrad gemacht. Im Hintergrund sieht man dein Haus mit der Haus-Nummer. Was machst du?",
        "answers": [
          "Ich poste es so, weil es ja nur um das Fahrrad geht.",
          "Ich mache ein neues Foto, auf dem das Haus nicht zu sehen ist.",
          "Ich schneide das Foto so zu, dass man nur das Fahrrad sieht."
        ],
        "feedbackWrong": [
          "Auf dem Foto sieht man auch dein Haus und die Haus-Nummer. Fremde Menschen wissen dann, wo du wohnst und wo das neue Fahrrad steht.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann ist das Haus nicht mehr auf dem Foto, und das geht schnell."
        ],
        "feedbackCorrect": "Auf dem neuen Foto sieht man nur das Fahrrad, und niemand sieht, wo du wohnst.",
        "remember": "Ich prüfe, was auf dem Foto zu sehen ist."
      },
      "standard": {
        "question": "Du hast dein neues Fahrrad fotografiert. Im Hintergrund ist dein Haus mit der Hausnummer zu sehen. Was machst du?",
        "answers": [
          "Ich poste es so, es geht ja nur ums Fahrrad.",
          "Ich mache ein neues Foto ohne das Haus.",
          "Ich schneide es so zu, dass nur das Fahrrad zu sehen ist."
        ],
        "feedbackWrong": [
          "Auf dem Foto sind auch dein Haus und die Hausnummer zu sehen. Fremde wissen dann, wo du wohnst und wo das neue Fahrrad steht.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann ist das Haus nicht mehr im Bild, und das geht schnell."
        ],
        "feedbackCorrect": "Auf dem neuen Foto ist nur das Fahrrad zu sehen, und niemand erfährt, wo du wohnst.",
        "remember": "Vor dem Posten prüfe ich, was auf dem Foto zu sehen ist."
      }
    },
    "instagram/lang/Andere Personen auf Fotos": {
      "einfach": {
        "question": "Du willst ein Foto von deinem Garten posten. Im Hintergrund sieht man deinen Nachbarn, und man erkennt ihn gut. Was machst du?",
        "answers": [
          "Ich poste es einfach, weil er ja nur im Hintergrund ist.",
          "Ich nehme ein anderes Foto.",
          "Ich frage den Nachbarn vorher."
        ],
        "feedbackWrong": [
          "Auch im Hintergrund erkennt man ihn, und nicht alle wollen im Internet stehen. Dein Nachbar darf mitentscheiden.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Dann ist niemand anderes zu sehen, und du musst niemanden fragen.",
          null
        ],
        "feedbackCorrect": "Man erkennt den Nachbarn, deshalb darf er mitentscheiden.",
        "remember": "Ich frage andere, bevor ich ihr Bild poste."
      },
      "standard": {
        "question": "Du möchtest ein Foto deines Gartens posten. Im Hintergrund ist dein Nachbar gut zu erkennen. Was machst du?",
        "answers": [
          "Ich poste es einfach, er ist ja nur im Hintergrund.",
          "Ich nehme ein anderes Foto.",
          "Ich frage den Nachbarn vorher."
        ],
        "feedbackWrong": [
          "Auch im Hintergrund ist er zu erkennen, und nicht jeder möchte im Internet stehen. Dein Nachbar entscheidet mit.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Dann ist niemand anderes zu sehen, und du musst niemanden fragen.",
          null
        ],
        "feedbackCorrect": "Dein Nachbar ist zu erkennen, deshalb entscheidet er mit.",
        "remember": "Bevor ich ein Bild mit anderen poste, frage ich sie."
      }
    },
    "instagram/lang/Kurze Videos und Stories": {
      "einfach": {
        "question": "Du willst eine Story posten und denkst: Morgen ist sie ja wieder weg. Was machst du vorher?",
        "answers": [
          "Ich prüfe zuerst, was in der Story zu sehen ist.",
          "Nichts, denn morgen ist die Story sowieso weg.",
          "Ich poste sie und lösche sie zur Not gleich wieder."
        ],
        "feedbackWrong": [
          null,
          "Andere können ein Bild vom Bildschirm machen. Dann bleibt deine Story, auch wenn sie bei Instagram schon weg ist.",
          "Löschen hilft nicht immer, denn andere haben die Story vielleicht schon gespeichert."
        ],
        "feedbackCorrect": "Andere können ein Bild vom Bildschirm machen, und dann bleibt deine Story. Deshalb prüfst du sie vorher.",
        "remember": "Auch Stories prüfe ich vor dem Posten."
      },
      "standard": {
        "question": "Du willst eine Story posten und denkst: Morgen ist sie ohnehin wieder verschwunden. Was machst du vorher?",
        "answers": [
          "Ich prüfe zuerst, was in der Story zu sehen ist.",
          "Nichts, morgen ist die Story ohnehin wieder verschwunden.",
          "Ich poste sie und lösche sie notfalls gleich wieder."
        ],
        "feedbackWrong": [
          null,
          "Andere können einen Screenshot machen. Dann bleibt deine Story erhalten, auch wenn sie auf Instagram längst verschwunden ist.",
          "Löschen hilft nicht immer: Andere haben die Story vielleicht schon gespeichert."
        ],
        "feedbackCorrect": "Andere können einen Screenshot machen, dann bleibt deine Story erhalten. Deshalb prüfst du sie vorher.",
        "remember": "Auch Stories prüfe ich vor dem Posten."
      }
    },
    "instagram/lang/Standort": {
      "einfach": {
        "question": "Du bist im Urlaub am Meer und postest ein Foto. Instagram fragt, ob du den Ort hinzufügen willst. Was machst du?",
        "answers": [
          "Ich füge den Ort hinzu, damit alle sehen, wo ich bin.",
          "Ich füge keinen Ort hinzu.",
          "Ich füge den Ort erst nach dem Urlaub hinzu."
        ],
        "feedbackWrong": [
          "Dann sehen alle Zuschauer, dass du gerade weit weg von zu Hause bist. Überleg zuerst, wer das Foto sehen kann.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann weiß während des Urlaubs niemand, dass du gerade weit weg bist."
        ],
        "feedbackCorrect": "Ohne Ort zeigt Instagram nicht an, wo du bist. Auch auf dem Foto kann man den Ort aber manchmal erkennen.",
        "remember": "Ich teile meinen Standort nicht einfach."
      },
      "standard": {
        "question": "Du postest im Urlaub ein Foto vom Meer. Instagram schlägt vor, den Ort hinzuzufügen. Was machst du?",
        "answers": [
          "Ich füge den Ort hinzu, alle sollen sehen, wo ich bin.",
          "Ich füge keinen Ort hinzu.",
          "Ich füge den Ort erst nach dem Urlaub hinzu."
        ],
        "feedbackWrong": [
          "Dann sehen alle, dass du gerade weit weg von zu Hause bist. Überleg zuerst, wer das Foto sehen kann.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "So erfährt während des Urlaubs niemand, dass du gerade weit weg bist."
        ],
        "feedbackCorrect": "Ohne Ortsangabe zeigt Instagram nicht an, wo du bist. Auf dem Foto selbst lässt sich der Ort aber manchmal erkennen.",
        "remember": "Meinen Standort teile ich nur bewusst."
      }
    },
    "instagram/lang/Private Nachrichten": {
      "einfach": {
        "question": "Ein Profil schreibt dir seit zwei Wochen nette Nachrichten, aber ihr habt euch nie getroffen. Jetzt schreibt die Person: Schick mir ein privates Foto. Nur für mich. Was machst du?",
        "answers": [
          "Ich schicke ein Foto, weil wir ja schon lange schreiben.",
          "Ich schicke kein Foto.",
          "Ich schicke kein Foto und melde das Profil."
        ],
        "feedbackWrong": [
          "Du kennst die Person nur vom Schreiben. Ein Foto kannst du nicht zurückholen, und die Person kann es weiterschicken.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Das Foto bleibt bei dir, und Instagram kann das Profil prüfen."
        ],
        "feedbackCorrect": "Du kennst die Person nur vom Schreiben, und ein Foto kannst du nicht zurückholen. Deshalb bleibt es bei dir.",
        "remember": "Ich schicke fremden Personen keine privaten Fotos."
      },
      "standard": {
        "question": "Ein Profil schreibt dir seit zwei Wochen nette Nachrichten, getroffen habt ihr euch nie. Jetzt heißt es: Schick mir ein privates Foto. Nur für mich. Was machst du?",
        "answers": [
          "Ich schicke eins, wir schreiben ja schon lange.",
          "Ich schicke kein Foto.",
          "Ich schicke kein Foto und melde das Profil."
        ],
        "feedbackWrong": [
          "Du kennst die Person nur aus Nachrichten. Ein Foto lässt sich nicht zurückholen, und die Person kann es weiterleiten.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Das Foto bleibt bei dir, und Instagram kann das Profil prüfen."
        ],
        "feedbackCorrect": "Du kennst die Person nur aus Nachrichten, und ein Foto lässt sich nicht zurückholen. Deshalb bleibt es bei dir.",
        "remember": "Fremden schicke ich keine privaten Fotos."
      }
    },
    "instagram/lang/Verletzende Kommentare": {
      "einfach": {
        "question": "Du postest ein Foto von deinem neuen Pullover, und jemand schreibt darunter: Der ist ja hässlich. Das tut dir weh. Was machst du?",
        "answers": [
          "Ich lösche mein Foto, damit Ruhe ist.",
          "Ich rede mit einer Freundin darüber.",
          "Ich antworte nicht auf den Kommentar."
        ],
        "feedbackWrong": [
          "Du musst dein Foto nicht löschen, denn du hast nichts falsch gemacht. Der Kommentar ist das Problem, nicht dein Foto.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Das ist Unterstützung, und Reden hilft, wenn etwas weh tut. Danach entscheidest du in Ruhe.",
          null
        ],
        "feedbackCorrect": "Du musst nicht auf alles antworten, und dein Foto darf bleiben. Du kannst die Person auch blockieren.",
        "remember": "Ich hole Unterstützung bei verletzenden Kommentaren."
      },
      "standard": {
        "question": "Du postest ein Foto deines neuen Pullovers. Jemand kommentiert: Der ist ja hässlich. Das trifft dich. Was machst du?",
        "answers": [
          "Ich lösche mein Foto, dann ist Ruhe.",
          "Ich rede mit einer Freundin darüber.",
          "Ich antworte nicht auf den Kommentar."
        ],
        "feedbackWrong": [
          "Du musst dein Foto nicht löschen, du hast nichts falsch gemacht. Das Problem ist der Kommentar, nicht dein Foto.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Das ist Unterstützung: Reden hilft, wenn etwas wehtut. Danach entscheidest du in Ruhe.",
          null
        ],
        "feedbackCorrect": "Du musst nicht auf alles antworten, und dein Foto darf bleiben. Du kannst die Person auch blockieren.",
        "remember": "Bei verletzenden Kommentaren hole ich mir Unterstützung."
      }
    },
    "instagram/lang/Bearbeitete Bilder": {
      "einfach": {
        "question": "Eine Bekannte postet nur perfekte Fotos, und du denkst: Mein Leben ist nicht so schön. Was hilft dir?",
        "answers": [
          "Ich denke daran: Viele Fotos sind bearbeitet.",
          "Ich mache eine Pause von Instagram.",
          "Ich schaue mir noch mehr Fotos von ihr an."
        ],
        "feedbackWrong": [
          null,
          null,
          "Dann vergleichst du dich noch mehr. Die Fotos zeigen nur die schönen Momente, und viele sind bearbeitet."
        ],
        "feedbackAuch": [
          null,
          "Eine Pause tut gut, und du bestimmst selbst, was du dir ansiehst.",
          null
        ],
        "feedbackCorrect": "Die Fotos zeigen nur die schönen Momente, und viele sind bearbeitet. Du musst dich nicht damit vergleichen.",
        "remember": "Ich muss mich nicht mit Bildern vergleichen."
      },
      "standard": {
        "question": "Eine Bekannte postet nur perfekte Fotos, und du denkst: Mein Leben ist nicht so schön. Was hilft dir?",
        "answers": [
          "Ich mache mir klar, dass viele Fotos bearbeitet sind.",
          "Ich lege eine Instagram-Pause ein.",
          "Ich sehe mir noch mehr Fotos von ihr an, um zu vergleichen."
        ],
        "feedbackWrong": [
          null,
          null,
          "Dann vergleichst du dich noch mehr. Die Fotos zeigen nur die schönen Momente, und viele sind bearbeitet."
        ],
        "feedbackAuch": [
          null,
          "Eine Pause tut gut, und du bestimmst selbst, was du dir ansiehst.",
          null
        ],
        "feedbackCorrect": "Die Fotos zeigen nur die schönen Momente, und viele sind bearbeitet. Du musst dich nicht damit vergleichen.",
        "remember": "Mit bearbeiteten Bildern muss ich mich nicht vergleichen."
      }
    },
    "instagram/lang/Was kann ich tun?": {
      "einfach": {
        "question": "Ein fremdes Profil schreibt dir: Du hast gewonnen. Antworte in 10 Minuten, sonst ist der Gewinn weg. Was machst du?",
        "answers": [
          "Ich antworte schnell, weil der Gewinn sonst weg ist.",
          "Ich zeige die Nachricht erst jemandem.",
          "Ich mache Stopp und antworte nicht sofort."
        ],
        "feedbackWrong": [
          "Die Nachricht macht mit Absicht Stress, damit du nicht nachdenkst. Bei einem echten Gewinn hast du Zeit.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Zu zweit sieht man mehr, und die Nachricht kann so lange warten.",
          null
        ],
        "feedbackCorrect": "Die Nachricht macht mit Absicht Stress. Wenn du Stopp machst, hast du Zeit zum Nachdenken.",
        "remember": "Bei Stress zeige ich die Nachricht einer Person, der ich vertraue."
      },
      "standard": {
        "question": "Ein fremdes Profil schreibt dir: Du hast gewonnen. Antworte in 10 Minuten, sonst verfällt der Gewinn. Was machst du?",
        "answers": [
          "Ich antworte schnell, sonst verfällt der Gewinn.",
          "Ich zeige die Nachricht erst jemandem.",
          "Ich mache Stopp und antworte nicht sofort."
        ],
        "feedbackWrong": [
          "Der Zeitdruck ist gewollt, damit du nicht nachdenkst. Bei einem echten Gewinn hättest du Zeit.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Zu zweit sieht man mehr, und die Nachricht kann so lange warten.",
          null
        ],
        "feedbackCorrect": "Der Zeitdruck ist gewollt. Wenn du Stopp machst, gewinnst du Zeit zum Nachdenken.",
        "remember": "Bei Druck zeige ich die Nachricht einer Vertrauensperson."
      }
    },
    "instagram/kurz/Deine Fotos auf Instagram": {
      "einfach": {
        "question": "Dein Instagram-Konto ist privat, und ein fremdes Profil möchte dir folgen. Was machst du?",
        "answers": [
          "Ich nehme an, weil mein Konto ja privat ist.",
          "Ich lehne die Anfrage ab.",
          "Ich schaue mir das Profil erst einmal an."
        ],
        "feedbackWrong": [
          "Ein privates Konto hilft nur, wenn du auswählst, wer dir folgt. Nach dem Annehmen sieht das fremde Profil alle deine Fotos.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann weißt du mehr über das Profil und entscheidest danach, ob du annimmst oder ablehnst."
        ],
        "feedbackCorrect": "Bei einem privaten Konto sehen nur die Menschen deine Fotos, die du selbst bestätigt hast. Dein Profil-Bild, deinen Namen und deinen Profil-Text sehen aber alle.",
        "remember": "Mein Konto ist privat."
      },
      "standard": {
        "question": "Dein Instagram-Konto ist privat. Ein fremdes Profil möchte dir folgen. Was machst du?",
        "answers": [
          "Ich nehme an, mein Konto ist ja privat.",
          "Ich lehne die Anfrage ab.",
          "Ich sehe mir das Profil erst einmal an."
        ],
        "feedbackWrong": [
          "Ein privates Konto schützt nur, wenn du auswählst, wer dir folgt. Nach dem Annehmen sieht das fremde Profil alle deine Fotos und Stories.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Danach weißt du mehr über das Profil und entscheidest, ob du annimmst oder ablehnst."
        ],
        "feedbackCorrect": "Bei einem privaten Konto sehen nur Follower, die du bestätigt hast, deine Fotos und Stories. Profilbild, Name und Bio sind aber für alle sichtbar.",
        "remember": "Mein Konto ist auf privat gestellt."
      }
    },
    "instagram/kurz/Fotos von anderen Personen": {
      "einfach": {
        "question": "Du hast ein Foto von der Geburtstags-Feier, auf dem dein Freund Ben auf dem Sofa schläft. Du findest das Foto lustig. Was machst du?",
        "answers": [
          "Ich frage Ben, ob ich das Foto posten darf.",
          "Ich poste es, weil es doch nur Spaß ist.",
          "Ich poste es nicht und schicke es nur an Ben."
        ],
        "feedbackWrong": [
          null,
          "Für Ben ist das Foto vielleicht peinlich, und viele Menschen können es sehen. Deshalb darf Ben mitentscheiden.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann sieht nur Ben das Foto, und er kann selbst entscheiden, was damit passiert."
        ],
        "feedbackCorrect": "Es ist sein Bild, deshalb darf Ben mitentscheiden.",
        "remember": "Fotos von anderen poste ich erst, wenn ich gefragt habe."
      },
      "standard": {
        "question": "Auf einem Foto von der Geburtstagsfeier schläft dein Freund Ben auf dem Sofa. Du findest es lustig. Was machst du?",
        "answers": [
          "Ich frage Ben, ob ich es posten darf.",
          "Ich poste es, es ist doch nur Spaß.",
          "Ich poste es nicht und schicke es nur Ben."
        ],
        "feedbackWrong": [
          null,
          "Ben ist das Foto vielleicht peinlich, und viele können es sehen. Deshalb entscheidet er mit.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann sieht nur Ben das Foto und kann selbst entscheiden, was damit passiert."
        ],
        "feedbackCorrect": "Es ist sein Bild, deshalb entscheidet Ben mit.",
        "remember": "Fotos von anderen: erst fragen, dann posten."
      }
    },
    "instagram/kurz/Nachrichten von Unbekannten": {
      "einfach": {
        "question": "Ein fremdes Profil schreibt dir bei Instagram: Hallo, du siehst nett aus. Wo wohnst du? Was machst du?",
        "answers": [
          "Ich antworte nicht.",
          "Ich schreibe zurück und nenne nur meine Stadt.",
          "Ich blockiere das Profil."
        ],
        "feedbackWrong": [
          null,
          "Dann weiß eine fremde Person, in welcher Stadt du wohnst, und sie weiß auch, dass hier jemand antwortet.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann kann dir das Profil nicht mehr schreiben."
        ],
        "feedbackCorrect": "Du kennst das Profil nicht und musst nicht antworten. So erfährt die fremde Person nichts über dich.",
        "remember": "Fremden Profilen muss ich nicht antworten."
      },
      "standard": {
        "question": "Ein fremdes Profil schreibt dir auf Instagram: Hallo, du siehst nett aus. Wo wohnst du? Was machst du?",
        "answers": [
          "Ich antworte nicht.",
          "Ich antworte und nenne nur meine Stadt.",
          "Ich blockiere das Profil."
        ],
        "feedbackWrong": [
          null,
          "Dann weiß eine fremde Person, in welcher Stadt du wohnst – und dass hier jemand antwortet.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Danach kann dir das Profil nicht mehr schreiben."
        ],
        "feedbackCorrect": "Du kennst das Profil nicht und musst nicht antworten. So erfährt die fremde Person nichts über dich.",
        "remember": "Fremden Profilen muss ich nicht antworten."
      }
    },
    "Du machst ein Selfie in deiner Wohnung. Worauf achtest du?": {
      "einfach": {
        "question": "Du machst in deiner Wohnung ein Selfie und willst es posten. Worauf achtest du?",
        "hinweis": "Überlege, was außer deinem Gesicht noch auf dem Selfie zu sehen ist.",
        "answers": [
          "Auf den Hintergrund.",
          "Darauf, dass ich schön lächle.",
          "Darauf, dass das Licht gut ist."
        ],
        "feedbackWrong": [
          null,
          "Ein Lächeln ist schön, aber es zeigt nicht, was hinter dir zu sehen ist.",
          "Gutes Licht macht das Foto schön, aber es schützt dich nicht."
        ],
        "feedbackCorrect": "Im Hintergrund ist oft mehr zu sehen, als du denkst, zum Beispiel ein Brief mit deiner Adresse."
      },
      "standard": {
        "question": "Du machst in deiner Wohnung ein Selfie, das du posten willst. Worauf achtest du?",
        "hinweis": "Was ist auf dem Selfie außer deinem Gesicht noch zu sehen?",
        "answers": [
          "Auf den Hintergrund.",
          "Auf ein schönes Lächeln.",
          "Auf gutes Licht."
        ],
        "feedbackWrong": [
          null,
          "Ein Lächeln ist schön – es zeigt aber nicht, was hinter dir zu sehen ist.",
          "Gutes Licht macht das Foto schöner, schützt dich aber nicht."
        ],
        "feedbackCorrect": "Der Hintergrund verrät oft mehr, als man denkt – etwa ein Brief mit deiner Adresse."
      }
    },
    "Du markierst in einer Story den Ort. Wer sieht den Ort?": {
      "einfach": {
        "question": "Du gibst in einer Story den Ort an. Wer kann den Ort sehen?",
        "hinweis": "Überlege, ob die Ort-Angabe anders behandelt wird als der Rest der Story.",
        "answers": [
          "Nur ich selbst, sonst niemand.",
          "Nur meine Freunde, sonst niemand.",
          "Alle, die meine Story sehen."
        ],
        "feedbackWrong": [
          "Der Ort ist nicht nur für dich sichtbar. Alle, die deine Story sehen, sehen auch den Ort.",
          "Nicht nur deine Freunde sehen den Ort, sondern alle, die deine Story sehen.",
          null
        ],
        "feedbackCorrect": "Alle, die deine Story sehen, wissen dann, wo du bist."
      },
      "standard": {
        "question": "Du markierst in einer Story deinen Standort. Wer sieht ihn?",
        "hinweis": "Wird die Ortsangabe anders behandelt als der Rest der Story?",
        "answers": [
          "Nur ich selbst, sonst niemand.",
          "Nur meine Freunde, sonst niemand.",
          "Alle, die meine Story sehen."
        ],
        "feedbackWrong": [
          "Der Ort ist nicht nur für dich sichtbar – alle Zuschauer deiner Story sehen ihn.",
          "Nicht nur deine Freunde: Den Ort sieht jeder, der deine Story sieht.",
          null
        ],
        "feedbackCorrect": "Jeder, der deine Story sieht, weiß dann, wo du bist."
      }
    },
    "Deine Story ist nach 24 Stunden weg. Ist sie dann wirklich weg?": {
      "einfach": {
        "question": "Deine Story verschwindet nach 24 Stunden. Ist sie dann wirklich weg?",
        "hinweis": "Überlege, was in den 24 Stunden passiert sein kann, in denen die Story zu sehen war.",
        "answers": [
          "Nicht sicher, andere können sie speichern.",
          "Ja, nach 24 Stunden ist sie immer ganz weg.",
          "Ja, spätestens wenn ich sie selbst lösche."
        ],
        "feedbackWrong": [
          null,
          "Andere können die Story vorher speichern, zum Beispiel mit einem Bild vom Bildschirm.",
          "Löschen hilft dann nicht mehr, denn wer die Story gespeichert hat, hat sie noch."
        ],
        "feedbackCorrect": "Andere können in dieser Zeit ein Bild vom Bildschirm machen und es behalten."
      },
      "standard": {
        "question": "Deine Story verschwindet nach 24 Stunden. Ist sie damit wirklich für immer gelöscht?",
        "hinweis": "Was kann in den 24 Stunden passiert sein, in denen die Story sichtbar war?",
        "answers": [
          "Nicht sicher – andere können sie speichern.",
          "Ja, nach 24 Stunden ist sie für immer gelöscht.",
          "Ja, spätestens wenn ich sie selbst lösche."
        ],
        "feedbackWrong": [
          null,
          "Andere können die Story vorher speichern, etwa per Screenshot.",
          "Löschen hilft dann nicht mehr: Wer die Story gespeichert hat, behält sie."
        ],
        "feedbackCorrect": "Andere können in dieser Zeit einen Screenshot machen und ihn behalten."
      }
    },
    "Mehrere Personen schreiben Gemeines unter dein Foto. Was machst du?": {
      "einfach": {
        "question": "Mehrere Personen schreiben gemeine Kommentare unter dein Foto. Was machst du?",
        "hinweis": "Du musst das nicht allein aushalten. Überlege, wer dir helfen kann.",
        "answers": [
          "Ich behalte es für mich und sage niemandem etwas.",
          "Ich zeige es einer Person, der ich vertraue.",
          "Ich lösche mein Foto, dann hört es auf."
        ],
        "feedbackWrong": [
          "Damit bleibst du mit den gemeinen Kommentaren allein. Erzähl es lieber jemandem, dem du vertraust.",
          null,
          "Dein Foto ist nicht der Fehler, und die Kommentare sind nicht deine Schuld. Hol dir lieber Hilfe."
        ],
        "feedbackCorrect": "Du zeigst es einer vertrauten Person und musst das nicht allein aushalten."
      },
      "standard": {
        "question": "Mehrere Leute schreiben gemeine Kommentare unter dein Foto. Wie reagierst du?",
        "hinweis": "Das musst du nicht allein aushalten. Wer kann dir helfen?",
        "answers": [
          "Ich behalte es für mich und sage nichts.",
          "Ich zeige es einer Vertrauensperson.",
          "Ich lösche das Foto, dann hört es auf."
        ],
        "feedbackWrong": [
          "So bleibst du mit den Kommentaren allein. Sprich lieber mit jemandem, dem du vertraust.",
          null,
          "Dein Foto ist nicht das Problem – und die Kommentare sind nicht deine Schuld. Hol dir lieber Unterstützung."
        ],
        "feedbackCorrect": "Du zeigst es einer Vertrauensperson und musst das nicht allein aushalten."
      }
    },
    "Auf einem Foto sieht eine Person perfekt aus. Was kann sein?": {
      "einfach": {
        "question": "Auf einem Foto sieht eine Person ganz perfekt aus. Was kann der Grund sein?",
        "hinweis": "Überlege, ob man Fotos am Handy oder Computer verändern kann.",
        "answers": [
          "Das Foto ist ganz sicher echt.",
          "Das Foto ist bearbeitet worden.",
          "Die Person trägt teure Kleidung."
        ],
        "feedbackWrong": [
          "Sehr viele Fotos werden bearbeitet.",
          null,
          "Die Kleidung erklärt das nicht. Oft ist das Foto bearbeitet oder hat einen Filter."
        ],
        "feedbackCorrect": "Sehr viele Fotos sind bearbeitet oder haben einen Filter."
      },
      "standard": {
        "question": "Auf einem Foto sieht eine Person makellos aus. Woran kann das liegen?",
        "hinweis": "Kann man Fotos am Handy oder Computer verändern?",
        "answers": [
          "Das Foto ist mit Sicherheit echt.",
          "Das Foto ist bearbeitet.",
          "Die Person trägt teure Kleidung."
        ],
        "feedbackWrong": [
          "Darauf kannst du dich nicht verlassen – sehr viele Fotos sind bearbeitet.",
          null,
          "Kleidung erklärt das nicht. Häufig ist das Foto bearbeitet oder gefiltert."
        ],
        "feedbackCorrect": "Sehr viele Fotos sind nachbearbeitet oder mit Filtern verändert."
      }
    },
    "Was ist eine gute Regel für Instagram?": {
      "einfach": {
        "question": "Welche Regel hilft dir bei Instagram?",
        "hinweis": "Ein Bild, das du geteilt hast, bekommst du nicht mehr zurück.",
        "answers": [
          "Ich poste alles immer sofort.",
          "Ich poste nur nachts.",
          "Ich prüfe erst und teile dann."
        ],
        "feedbackWrong": [
          "Das ist zu schnell. Prüfe lieber erst, was auf dem Bild zu sehen ist.",
          "Die Uhrzeit ändert nichts. Wichtig ist, was auf dem Bild zu sehen ist.",
          null
        ],
        "feedbackCorrect": "Auf einem Bild ist oft mehr zu sehen, als man denkt. Deshalb gilt: erst prüfen, dann teilen."
      },
      "standard": {
        "question": "Welche Regel ist bei Instagram sinnvoll?",
        "hinweis": "Ein geteiltes Bild lässt sich kaum zurückholen.",
        "answers": [
          "Immer alles sofort posten.",
          "Nur nachts posten.",
          "Erst prüfen, dann teilen."
        ],
        "feedbackWrong": [
          "Das geht zu schnell. Prüfe vorher, was auf dem Bild zu sehen ist.",
          "Die Uhrzeit ändert nichts – entscheidend ist, was zu sehen ist.",
          null
        ],
        "feedbackCorrect": "Auf einem Bild ist oft mehr zu sehen, als man denkt. Deshalb gilt: erst prüfen, dann teilen."
      }
    },
    "Wer darf private Fotos bekommen?": {
      "einfach": {
        "question": "Wem schickst du private Fotos von dir?",
        "hinweis": "Überlege, wem du wirklich vertraust.",
        "answers": [
          "Keinen fremden Personen.",
          "Allen, die mich danach fragen.",
          "Allen, die mir nette Nachrichten schreiben."
        ],
        "feedbackWrong": [
          null,
          "Fremde Personen sollen keine privaten Fotos von dir bekommen.",
          "Nett zu schreiben ist leicht. Das sagt nichts darüber, wer die Person wirklich ist."
        ],
        "feedbackCorrect": "Fremde können dein Foto speichern und weitergeben. Deshalb schickst du ihnen keine privaten Fotos."
      },
      "standard": {
        "question": "An wen schickst du private Fotos von dir?",
        "hinweis": "Wem vertraust du wirklich?",
        "answers": [
          "Nicht an fremde Personen.",
          "An alle, die danach fragen.",
          "An alle, die mir nette Nachrichten schreiben."
        ],
        "feedbackWrong": [
          null,
          "Fremde sollten keine privaten Fotos von dir bekommen.",
          "Nette Nachrichten sind schnell geschrieben – sie verraten nichts darüber, wer dahintersteckt."
        ],
        "feedbackCorrect": "Fremde können dein Foto speichern und weiterverbreiten. Deshalb schickst du ihnen keine privaten Fotos."
      }
    },
    "Was hilft bei komischen Nachrichten?": {
      "einfach": {
        "question": "Du bekommst bei Instagram eine komische Nachricht. Was hilft dir zuerst?",
        "hinweis": "Überlege, welcher erste Schritt dir bei komischen Nachrichten immer hilft.",
        "answers": [
          "Ich sende gleich meine privaten Daten.",
          "Ich mache Stopp.",
          "Ich schreibe schnell zurück."
        ],
        "feedbackWrong": [
          "Deine privaten Daten bleiben bei dir.",
          null,
          "Wenn du antwortest, sieht die Person, dass hier jemand liest. Mach lieber Stopp."
        ],
        "feedbackCorrect": "Du machst Stopp und hast so Zeit zum Nachdenken."
      },
      "standard": {
        "question": "Du bekommst auf Instagram eine seltsame Nachricht. Was hilft zuerst?",
        "hinweis": "Welcher erste Schritt hilft bei seltsamen Nachrichten immer?",
        "answers": [
          "Sofort private Daten senden.",
          "Stopp machen.",
          "Schnell zurückschreiben."
        ],
        "feedbackWrong": [
          "Deine privaten Daten behältst du für dich.",
          null,
          "Eine Antwort zeigt, dass hier jemand liest. Mach lieber Stopp."
        ],
        "feedbackCorrect": "Mit einem Stopp verschaffst du dir Zeit zum Nachdenken."
      }
    },
    "Wie schützt du bei Instagram deinen Standort?": {
      "einfach": {
        "question": "Wie schützt du deinen Standort, wenn du Instagram benutzt?",
        "hinweis": "Überlege, woher Instagram weiß, wo du gerade bist.",
        "answers": [
          "Ich gebe immer den Ort an.",
          "Ich gebe einen falschen Ort an.",
          "Ich schalte den Standort aus."
        ],
        "feedbackWrong": [
          "Dann sieht jeder, wo du gerade bist.",
          "Das ist unnötig und kann andere verwirren. Schalte den Standort lieber aus.",
          null
        ],
        "feedbackCorrect": "Ohne Standort kann Instagram deinen Ort nicht anzeigen. Achte trotzdem darauf, was auf deinen Fotos zu sehen ist."
      },
      "standard": {
        "question": "Wie schützt du auf Instagram deinen Standort?",
        "hinweis": "Woher weiß Instagram eigentlich, wo du bist?",
        "answers": [
          "Ich markiere immer meinen Ort.",
          "Ich markiere einen falschen Ort.",
          "Ich schalte den Standortzugriff aus."
        ],
        "feedbackWrong": [
          "Dann sieht jeder, wo du dich gerade aufhältst.",
          "Das ist unnötig. Schalte den Standortzugriff lieber aus.",
          null
        ],
        "feedbackCorrect": "Ohne Standortzugriff kann Instagram deinen Ort nicht anzeigen. Trotzdem können Details auf Fotos verraten, wo du bist."
      }
    }
  },
  "einkaufen": {
    "Ein Shop ist extrem billig und will nur Vorkasse. Was ist das?": {
      "einfach": {
        "question": "In einem Shop sind die Preise extrem billig. Du kannst nur im Voraus bezahlen. Was ist das?",
        "hinweis": "Der Shop ist sehr billig, und du sollst schon vorher bezahlen. Passt das zusammen?",
        "answers": [
          "Ein besonders gutes Angebot.",
          "Ein neuer Shop.",
          "Ein Warnzeichen."
        ],
        "feedbackCorrect": "Der sehr billige Preis soll dich anlocken. Bei Vorkasse zahlst du, bevor die Ware kommt. Wenn es ein Fake-Shop ist, ist dein Geld weg.",
        "feedbackWrong": [
          "Der sehr billige Preis soll dich nur anlocken. Bei Vorkasse ist dein Geld weg, wenn die Ware nicht kommt.",
          "Ein neuer Shop ist nicht automatisch sicher. Sehr niedrige Preise und nur Vorkasse sind Warnzeichen.",
          null
        ]
      },
      "standard": {
        "question": "Ein Shop bietet extrem niedrige Preise und akzeptiert nur Vorkasse. Was ist das?",
        "hinweis": "Extrem niedrige Preise und Bezahlung im Voraus: Passt das zusammen?",
        "answers": [
          "Ein hervorragendes Angebot.",
          "Ein neuer Shop.",
          "Ein Warnzeichen."
        ],
        "feedbackCorrect": "Der extrem niedrige Preis soll dich anlocken. Bei Vorkasse zahlst du, bevor die Ware ankommt. Handelt es sich um einen Fake-Shop, ist das Geld meist verloren.",
        "feedbackWrong": [
          "Der extrem niedrige Preis soll dich nur anlocken. Bei Vorkasse ist dein Geld verloren, wenn die Ware nicht ankommt.",
          "Auch ein neuer Shop ist nicht automatisch vertrauenswürdig. Die Kombination aus sehr niedrigen Preisen und ausschließlich Vorkasse bleibt ein Warnzeichen.",
          null
        ]
      }
    },
    "Ein Shop hat keine Adresse und keine Telefon-Nummer. Was heißt das?": {
      "einfach": {
        "question": "Bei einem Shop findest du weder eine Adresse noch eine Telefonnummer. Was bedeutet das?",
        "hinweis": "Ein guter Shop zeigt, wer dahintersteckt. Welche Angaben fehlen hier?",
        "answers": [
          "Der Shop ist bestimmt gut.",
          "Vorsicht. Ein Warnzeichen.",
          "Der Shop wird noch aufgebaut."
        ],
        "feedbackCorrect": "Ein guter Shop zeigt dir, wer dahintersteckt.",
        "feedbackWrong": [
          "Ein guter Shop zeigt dir, wer dahintersteckt.",
          null,
          "Auch bei einem neuen Shop solltest du prüfen können, wer ihn betreibt. Prüfe das vor dem Kauf."
        ]
      },
      "standard": {
        "question": "Ein Shop nennt weder eine Adresse noch eine Telefonnummer. Was bedeutet das?",
        "hinweis": "Ein seriöser Shop nennt seinen Anbieter. Welche Angaben fehlen hier?",
        "answers": [
          "Der Shop ist bestimmt seriös.",
          "Das ist ein Warnzeichen. Ich bin vorsichtig.",
          "Der Shop ist neu und befindet sich noch im Aufbau."
        ],
        "feedbackCorrect": "Ein seriöser Shop macht deutlich, wer ihn betreibt.",
        "feedbackWrong": [
          "Ein seriöser Shop macht deutlich, wer ihn betreibt.",
          null,
          "Auch bei einem neuen Shop muss für deine Kaufentscheidung klar sein, wer ihn betreibt. Prüfe den Anbieter vor dem Kauf."
        ]
      }
    },
    "einkaufen/quiz/kern-rechnung-waehlen": {
      "einfach": {
        "question": "Du möchtest eine Lampe im Internet kaufen und hast den Shop geprüft. Er bietet Rechnung mit Zahlung nach der Lieferung an. Oder du überweist das Geld vor der Lieferung. Welche Bezahl-Art gibt dir mehr Schutz?",
        "answers": [
          "Ich wähle Vorkasse, weil die Lampe gute Bewertungen hat.",
          "Ich wähle Vorkasse, weil der Shop eine Adresse nennt.",
          "Ich wähle Rechnung und zahle nach der Lieferung."
        ],
        "feedbackCorrect": "Bei dieser Rechnung zahlst du erst nach der Lieferung. Das bietet dir mehr Schutz als eine Überweisung vorher. Den Shop musst du trotzdem prüfen.",
        "feedbackWrong": [
          "Gute Bewertungen ändern nichts daran, dass du bei Vorkasse vor der Lieferung bezahlst. Bei Rechnung bekommst du zuerst die Ware.",
          "Die Adresse hilft dir beim Prüfen des Shops. Bei Vorkasse zahlst du trotzdem vor der Lieferung, bei Rechnung erst danach.",
          null
        ],
        "hinweis": "Überlege, wann du bei den beiden Bezahl-Arten zahlen musst.",
        "remember": "Rechnung ist sicherer als eine Überweisung vor der Lieferung."
      },
      "standard": {
        "question": "Du möchtest eine Lampe online kaufen und hast den Shop geprüft. Angeboten werden Rechnung mit Zahlung nach der Lieferung und Überweisung vor der Lieferung. Welche Bezahl-Art gibt dir mehr Schutz?",
        "answers": [
          "Ich wähle Vorkasse, weil die Lampe gut bewertet ist.",
          "Ich wähle Vorkasse, weil der Shop eine Anschrift angibt.",
          "Ich wähle Rechnung und zahle nach der Lieferung."
        ],
        "feedbackCorrect": "Bei dieser Rechnung ist die Zahlung erst nach der Lieferung fällig. Das bietet dir mehr Schutz als eine Vorauszahlung, ersetzt aber nicht die Prüfung des Shops.",
        "feedbackWrong": [
          "Gute Bewertungen ändern den Zeitpunkt der Zahlung nicht. Bei Vorkasse hast du bereits bezahlt, bevor die Lampe ankommt.",
          "Eine Anschrift ist beim Prüfen des Shops hilfreich, macht die Vorauszahlung aber nicht sicherer als die Zahlung nach Erhalt der Ware.",
          null
        ],
        "hinweis": "Welche Zahlart verlangt dein Geld erst nach der Lieferung?",
        "remember": "Rechnung ist sicherer als Vorkasse."
      }
    },
    "einkaufen/lang/Gute Shops erkennen": {
      "einfach": {
        "question": "Du suchst eine Kaffee-Maschine. Ein Shop hat sehr viele Bewertungen, alle mit 5 Sternen und alle von gestern. Was machst du?",
        "answers": [
          "Ich bestelle, weil so viele Menschen zufrieden sind.",
          "Ich prüfe den Shop erst noch genauer.",
          "Ich kaufe lieber in einem Shop, den ich kenne."
        ],
        "feedbackWrong": [
          "Bewertungen können gefälscht sein. Hier sind alle von gestern und haben alle 5 Sterne. Das ist ein Warnzeichen.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Bei einem Shop, den du kennst, weißt du, dass die Ware ankommt."
        ],
        "feedbackCorrect": "Alle Bewertungen sind von gestern, und das ist komisch. Betrüger können Bewertungen fälschen und auch ein Impressum. Achte deshalb auf mehrere Warnzeichen.",
        "remember": "Ich kaufe bei Shops, die ich vorher geprüft habe."
      },
      "standard": {
        "question": "Du suchst eine Kaffeemaschine. Ein Shop hat auffällig viele Bewertungen – alle mit 5 Sternen, alle von gestern. Was machst du?",
        "answers": [
          "Ich bestelle, so viele Kunden sind ja zufrieden.",
          "Ich prüfe den Shop erst noch genauer.",
          "Ich kaufe lieber in einem Shop, den ich kenne."
        ],
        "feedbackWrong": [
          "Bewertungen können gefälscht sein. Hier stammen alle von gestern und haben 5 Sterne – ein Warnzeichen.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Bei einem Shop, den du kennst, weißt du, dass die Ware ankommt."
        ],
        "feedbackCorrect": "Alle Bewertungen stammen von gestern – das ist auffällig. Bewertungen lassen sich fälschen, ein Impressum auch. Achte deshalb auf mehrere Warnzeichen.",
        "remember": "Ich kaufe bei Shops, die ich geprüft habe."
      }
    },
    "einkaufen/lang/Fake-Shops erkennen": {
      "einfach": {
        "question": "Du siehst eine Werbung: Marken-Jacke für 19 Euro statt 200 Euro. Im Shop kannst du nur vorher überweisen. Was machst du?",
        "answers": [
          "Ich prüfe den Shop mit dem Fakeshop-Finder.",
          "Ich bestelle schnell, weil es so billig nie wieder wird.",
          "Ich kaufe dort nicht."
        ],
        "feedbackWrong": [
          null,
          "Sehr billig und nur Vorkasse: Das ist oft ein Fake-Shop. Dann ist dein Geld weg, und die Jacke kommt nie.",
          null
        ],
        "feedbackAuch": [
          "Das ist eine Prüf-Seite der Verbraucher-Zentrale. Du gibst die Adresse vom Shop ein und bekommst eine Einschätzung.",
          null,
          null
        ],
        "feedbackCorrect": "Sehr billig und nur Vorkasse sind Warnzeichen für einen Fake-Shop. Dort zahlst du, aber die Ware kommt nie.",
        "remember": "Wenn es sehr billig ist und nur Vorkasse geht, kaufe ich nicht."
      },
      "standard": {
        "question": "Du siehst eine Werbung: Markenjacke für 19 statt 200 Euro. Bezahlen kannst du im Shop nur per Vorkasse. Was machst du?",
        "answers": [
          "Ich prüfe den Shop mit dem Fakeshop-Finder.",
          "Ich bestelle schnell, so billig wird es nie wieder.",
          "Ich kaufe dort nicht."
        ],
        "feedbackWrong": [
          null,
          "Extrem billig und nur Vorkasse deutet oft auf einen Fake-Shop hin. Dann ist dein Geld verloren, und die Jacke kommt nie.",
          null
        ],
        "feedbackAuch": [
          "Das ist ein kostenloser Check der Verbraucherzentrale: Shop-Adresse eingeben und die Einschätzung lesen.",
          null,
          null
        ],
        "feedbackCorrect": "Extrem niedrige Preise und nur Vorkasse sind Warnzeichen für einen Fake-Shop: Du zahlst, aber die Ware kommt nie.",
        "remember": "Sehr billig und nur Vorkasse? Dann kaufe ich nicht."
      }
    },
    "einkaufen/lang/Vor dem Kaufen prüfen": {
      "einfach": {
        "question": "Du willst Kopf-Hörer kaufen. Im Shop steht groß 25 Euro, aber im Waren-Korb stehen am Ende 34 Euro. Was machst du?",
        "answers": [
          "Ich schaue nach, was noch dazukommt.",
          "Ich kaufe, weil ich bestimmt nur 25 Euro zahle.",
          "Ich vergleiche erst mit einem anderen Shop."
        ],
        "feedbackWrong": [
          null,
          "Du zahlst den Preis am Ende, also 34 Euro. Oft kommt der Versand dazu, deshalb schaust du vor dem Kaufen in den Waren-Korb.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Vergleichen lohnt sich. Achte auch dort auf den Preis am Ende."
        ],
        "feedbackCorrect": "Oft kommt der Versand dazu. Wichtig ist der Preis am Ende, und jetzt entscheidest du selbst.",
        "remember": "Erst prüfe ich, dann kaufe ich."
      },
      "standard": {
        "question": "Du willst Kopfhörer kaufen. Im Shop steht groß 25 Euro, im Warenkorb stehen am Ende aber 34 Euro. Was machst du?",
        "answers": [
          "Ich sehe nach, was noch dazukommt.",
          "Ich kaufe, ich zahle bestimmt nur 25 Euro.",
          "Ich vergleiche erst mit einem anderen Shop."
        ],
        "feedbackWrong": [
          null,
          "Du zahlst den Endpreis, also 34 Euro. Oft kommt der Versand dazu – sieh vor dem Kauf in den Warenkorb.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Vergleichen lohnt sich. Achte auch dort auf den Endpreis."
        ],
        "feedbackCorrect": "Oft kommt der Versand dazu. Entscheidend ist der Endpreis – und jetzt entscheidest du selbst.",
        "remember": "Erst prüfen, dann kaufen."
      }
    },
    "einkaufen/lang/Sicher bezahlen": {
      "einfach": {
        "question": "Du willst ein gebrauchtes Fahrrad kaufen. Der Verkäufer schreibt: Schick mir das Geld mit PayPal und wähle dabei: Geld an Freunde senden. Dann bringe ich dir das Rad. Was machst du?",
        "answers": [
          "Ich schicke das Geld so, weil er das Rad ja bringt.",
          "Ich schaue mir das Rad erst an und zahle dann.",
          "Ich schicke die Hälfte vorher und zahle den Rest später."
        ],
        "feedbackWrong": [
          "Wenn du Geld an Freunde sendest, gibt es keinen Käufer-Schutz. Kommt das Rad nicht, ist dein Geld weg.",
          null,
          "Auch die Hälfte ist dann weg. Schau dir das Rad erst an und zahle danach."
        ],
        "feedbackCorrect": "Bei privaten Anzeigen gilt: erst die Ware ansehen, dann bezahlen.",
        "remember": "Rechnung ist sicherer als Vorkasse."
      },
      "standard": {
        "question": "Du willst ein gebrauchtes Fahrrad kaufen. Der Verkäufer schreibt: Schick mir das Geld per PayPal über die Funktion Geld an Freunde senden, dann bringe ich dir das Rad. Was machst du?",
        "answers": [
          "Ich schicke das Geld so, er bringt das Rad ja.",
          "Ich sehe mir das Rad erst an und zahle dann.",
          "Ich schicke die Hälfte vorab und zahle den Rest später."
        ],
        "feedbackWrong": [
          "Bei dieser Funktion greift der Käuferschutz nicht. Kommt das Rad nicht, ist dein Geld verloren.",
          null,
          "Auch die Hälfte ist dann verloren. Sieh dir das Rad erst an und zahl danach."
        ],
        "feedbackCorrect": "Bei privaten Kleinanzeigen gilt: erst die Ware ansehen, dann bezahlen.",
        "remember": "Rechnung ist sicherer als Vorkasse."
      }
    },
    "einkaufen/lang/Bank-Daten schützen": {
      "einfach": {
        "question": "Du hast gestern in einem Shop bestellt. Heute kommt eine E-Mail: Ihre Zahlung hat nicht geklappt. Bitte geben Sie hier Ihre Karten-Nummer und Ihre PIN ein. Was machst du?",
        "answers": [
          "Ich gebe die Daten ein, weil sonst meine Bestellung nicht kommt.",
          "Ich gebe nichts ein und rufe meine Bank an.",
          "Ich gebe nichts ein und schaue selbst im Shop nach."
        ],
        "feedbackWrong": [
          "Die PIN bleibt geheim, und wer per E-Mail danach fragt, ist ein Betrüger. Mit Karten-Nummer und PIN kommt man an dein Geld.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Bei der Bank kannst du nachfragen, ob mit deiner Karte alles in Ordnung ist.",
          null
        ],
        "feedbackCorrect": "Die PIN bleibt geheim, und wer per E-Mail danach fragt, ist ein Betrüger. Im Shop siehst du selbst, ob die Bestellung bezahlt ist.",
        "remember": "PIN und TAN bleiben geheim."
      },
      "standard": {
        "question": "Gestern hast du in einem Shop bestellt. Heute kommt eine E-Mail: Ihre Zahlung ist fehlgeschlagen. Bitte geben Sie hier Ihre Kartennummer und Ihre PIN ein. Was machst du?",
        "answers": [
          "Ich gebe die Daten ein, sonst kommt meine Bestellung nicht.",
          "Ich gebe nichts ein und rufe meine Bank an.",
          "Ich gebe nichts ein und sehe selbst im Shop nach."
        ],
        "feedbackWrong": [
          "Die PIN bleibt geheim – wer per E-Mail danach fragt, ist ein Betrüger. Mit Kartennummer und PIN kommt man an dein Geld.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Bei der Bank kannst du nachfragen, ob mit deiner Karte alles in Ordnung ist.",
          null
        ],
        "feedbackCorrect": "Die PIN bleibt geheim – wer per E-Mail danach fragt, ist ein Betrüger. Im Shop siehst du selbst, ob die Bestellung bezahlt ist.",
        "remember": "PIN und TAN bleiben geheim."
      }
    },
    "einkaufen/lang/Versteckte Kosten in Apps und Spielen": {
      "einfach": {
        "question": "Du spielst ein kostenloses Spiel auf dem Handy und kommst nicht weiter. Das Spiel zeigt: 5 Extra-Leben für 2 Euro. Diese Woche hast du schon 4 Mal gekauft. Was machst du?",
        "answers": [
          "Ich rechne erst aus, wie viel ich schon bezahlt habe.",
          "Ich kaufe, weil 2 Euro ja fast nichts sind.",
          "Ich kaufe heute nichts und spiele morgen weiter."
        ],
        "feedbackWrong": [
          null,
          "Jeder Kauf ist klein, aber du hast schon 8 Euro bezahlt. Viele kleine Käufe werden schnell teuer.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann kostet es heute nichts. Viele Spiele geben dir später neue Leben."
        ],
        "feedbackCorrect": "4 Mal 2 Euro sind schon 8 Euro. Viele kleine Käufe werden schnell teuer, und jetzt entscheidest du selbst.",
        "remember": "Auch kleine Käufe kosten echtes Geld."
      },
      "standard": {
        "question": "Du spielst ein kostenloses Handyspiel und kommst nicht weiter. Das Spiel bietet an: 5 Extra-Leben für 2 Euro. Diese Woche hast du schon 4 Mal gekauft. Was machst du?",
        "answers": [
          "Ich rechne erst aus, wie viel ich schon bezahlt habe.",
          "Ich kaufe, 2 Euro sind ja fast nichts.",
          "Ich kaufe heute nichts und spiele morgen weiter."
        ],
        "feedbackWrong": [
          null,
          "Jeder Kauf ist klein, aber du hast schon 8 Euro bezahlt. Kleine In-App-Käufe summieren sich schnell.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann kostet es heute nichts. Viele Spiele geben dir später neue Leben."
        ],
        "feedbackCorrect": "4 Mal 2 Euro sind schon 8 Euro. Kleine In-App-Käufe summieren sich schnell – jetzt entscheidest du selbst.",
        "remember": "Auch kleine Käufe kosten echtes Geld."
      }
    },
    "einkaufen/lang/Nicht sofort kaufen": {
      "einfach": {
        "question": "Du schaust dir im Internet ein Sofa für 400 Euro an. Auf der Seite steht in Rot: Nur noch 2 Stück, 14 Personen schauen gerade. Was machst du?",
        "answers": [
          "Ich kaufe sofort, weil das Sofa sonst weg ist.",
          "Ich überlege in Ruhe, ob ich das Sofa brauche.",
          "Ich warte bis morgen und entscheide dann."
        ],
        "feedbackWrong": [
          "Solche Sätze sollen dir Stress machen, und du weißt nicht, ob sie überhaupt stimmen. Bei 400 Euro darfst du in Ruhe überlegen.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Morgen weißt du besser, ob du das Sofa wirklich willst."
        ],
        "feedbackCorrect": "Du darfst dir Zeit nehmen. Solche Sätze sollen dich zum schnellen Kaufen bringen, aber gute Angebote gibt es wieder.",
        "remember": "Ich lasse mich beim Einkaufen nicht hetzen."
      },
      "standard": {
        "question": "Du siehst dir online ein Sofa für 400 Euro an. Auf der Seite steht in Rot: Nur noch 2 Stück – 14 Personen sehen sich das gerade an. Was machst du?",
        "answers": [
          "Ich kaufe sofort, sonst ist das Sofa verkauft.",
          "Ich überlege in Ruhe, ob ich das Sofa brauche.",
          "Ich warte bis morgen und entscheide dann."
        ],
        "feedbackWrong": [
          "Solche Hinweise sollen Druck machen, und ob sie stimmen, weißt du nicht. Bei 400 Euro darfst du in Ruhe überlegen.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Morgen weißt du besser, ob du das Sofa wirklich willst."
        ],
        "feedbackCorrect": "Du darfst dir Zeit lassen. Solche Hinweise sollen dich zu einem schnellen Kauf verleiten – gute Angebote kommen wieder.",
        "remember": "Beim Einkaufen lasse ich mich nicht hetzen."
      }
    },
    "einkaufen/lang/Falsch gekauft? Das kannst du tun": {
      "einfach": {
        "question": "Du hast im Internet eine Hose bestellt. Sie ist gestern gekommen, aber sie passt nicht. Was machst du?",
        "answers": [
          "Ich behalte sie, weil Zurückgeben nicht geht.",
          "Ich schreibe dem Shop, dass ich die Hose zurückgeben will.",
          "Ich schicke die Hose zurück, weil das oft 14 Tage geht."
        ],
        "feedbackWrong": [
          "Du musst die Hose nicht behalten. Viele Online-Käufe kannst du 14 Tage lang zurückgeben, und das nennt man Widerruf.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Der Shop sagt dir dann, wie du die Hose zurückschickst.",
          null
        ],
        "feedbackCorrect": "Viele Online-Käufe kannst du 14 Tage lang zurückgeben. Das nennt man Widerruf. Beim Shop steht, wie das Zurückschicken geht.",
        "remember": "Online-Käufe kann ich oft 14 Tage lang zurückgeben."
      },
      "standard": {
        "question": "Du hast online eine Hose bestellt. Gestern ist sie angekommen, aber sie passt nicht. Was machst du?",
        "answers": [
          "Ich behalte sie, gekauft ist gekauft.",
          "Ich schreibe dem Shop, dass ich die Hose zurückgeben will.",
          "Ich schicke die Hose zurück, das geht oft 14 Tage lang."
        ],
        "feedbackWrong": [
          "Du musst die Hose nicht behalten: Bei vielen Onlinekäufen hast du 14 Tage Widerrufsrecht.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Der Shop sagt dir dann, wie du die Hose zurückschickst.",
          null
        ],
        "feedbackCorrect": "Bei vielen Onlinekäufen hast du 14 Tage Widerrufsrecht. Beim Shop steht, wie die Rücksendung funktioniert.",
        "remember": "Onlinekäufe kann ich oft 14 Tage lang widerrufen."
      }
    },
    "einkaufen/lang/Was kann ich tun?": {
      "einfach": {
        "question": "Du willst ein Geschenk bestellen, kennst den Shop aber nicht. Oben läuft eine Uhr: Das Angebot endet in 2 Minuten. Was machst du?",
        "answers": [
          "Ich prüfe den Shop in Ruhe, die Zeit ist mir egal.",
          "Ich kaufe schnell, weil das Angebot sonst weg ist.",
          "Ich kaufe schnell, weil ich danach noch prüfen kann."
        ],
        "feedbackWrong": [
          null,
          "Die Uhr ist ein Trick, der dich drängen soll. Lass dich deshalb nicht hetzen.",
          "Nach dem Kaufen ist das Geld vielleicht schon weg, deshalb prüfst du vorher. Erst prüfen, dann kaufen."
        ],
        "feedbackCorrect": "Die Uhr will dich nur drängen. Du prüfst erst, und dann kaufst du.",
        "remember": "Ich lasse mich beim Einkaufen nicht hetzen."
      },
      "standard": {
        "question": "Du willst ein Geschenk bestellen, kennst den Shop aber nicht. Oben läuft ein Countdown: Das Angebot endet in 2 Minuten. Was machst du?",
        "answers": [
          "Ich prüfe den Shop in Ruhe, die Zeit ist mir egal.",
          "Ich kaufe schnell, sonst ist das Angebot vorbei.",
          "Ich kaufe schnell, prüfen kann ich danach."
        ],
        "feedbackWrong": [
          null,
          "Ein Countdown ist ein Trick, der Druck machen soll. Lass dich nicht hetzen.",
          "Nach dem Kauf ist das Geld vielleicht schon verloren – deshalb prüfst du vorher. Erst prüfen, dann kaufen."
        ],
        "feedbackCorrect": "Ein Countdown soll dich nur unter Druck setzen. Du prüfst erst und kaufst dann.",
        "remember": "Beim Einkaufen lasse ich mich nicht hetzen."
      }
    },
    "einkaufen/kurz/Einkaufen im Internet": {
      "einfach": {
        "question": "Du brauchst neue Turn-Schuhe und findest sie in zwei Shops. Shop 1 kennst du schon lange, dort kosten sie 60 Euro. Shop 2 kennst du nicht, dort kosten sie nur 15 Euro. Was machst du?",
        "answers": [
          "Ich kaufe in Shop 2, weil es dort viel billiger ist.",
          "Ich kaufe in Shop 1, weil ich den Shop kenne.",
          "Ich prüfe Shop 2 erst und entscheide dann."
        ],
        "feedbackWrong": [
          "Die Schuhe sind dort sehr billig, und du kennst den Shop nicht. Das sind Warnzeichen. Vielleicht kommt die Ware nie.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Schau zum Beispiel ins Impressum. Wenn du danach noch unsicher bist, kaufst du in Shop 1."
        ],
        "feedbackCorrect": "Den Shop kennst du, und dort kommt die Ware an. Sehr billig und unbekannt ist dagegen ein Warnzeichen.",
        "remember": "Ich kaufe bei sicheren Shops."
      },
      "standard": {
        "question": "Du brauchst neue Turnschuhe und findest sie in zwei Shops. Shop 1 kennst du seit Langem, dort kosten sie 60 Euro. Shop 2 kennst du nicht, dort kosten sie nur 15 Euro. Was machst du?",
        "answers": [
          "Ich kaufe in Shop 2, das ist viel billiger.",
          "Ich kaufe in Shop 1, den Shop kenne ich.",
          "Ich prüfe Shop 2 erst und entscheide dann."
        ],
        "feedbackWrong": [
          "Die Schuhe sind dort auffällig billig, und du kennst den Shop nicht. Das sind Warnzeichen – vielleicht kommt die Ware nie.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Sieh zum Beispiel ins Impressum. Bist du danach noch unsicher, kaufst du in Shop 1."
        ],
        "feedbackCorrect": "Den Shop kennst du, dort kommt die Ware an. Sehr billig und unbekannt ist dagegen ein Warnzeichen.",
        "remember": "Ich kaufe bei sicheren Shops ein."
      }
    },
    "einkaufen/kurz/Gute Shops erkennen": {
      "einfach": {
        "question": "Du willst in einem neuen Shop bestellen. In der Adress-Zeile siehst du ein Schloss, aber ein Impressum findest du nicht. Was machst du?",
        "answers": [
          "Ich bestelle dort nicht, weil Name und Adresse fehlen.",
          "Ich bestelle, weil das Schloss zeigt, dass der Shop sicher ist.",
          "Ich bestelle, weil die Seite ja sehr schön aussieht."
        ],
        "feedbackWrong": [
          null,
          "Auch falsche Shops haben ein Schloss, deshalb ist das Schloss allein kein gutes Zeichen. Schau nach Name und Adresse.",
          "Eine schöne Seite können auch Betrüger bauen, das Aussehen ist kein Beweis. Schau nach Name und Adresse."
        ],
        "feedbackCorrect": "Ein guter Shop zeigt Name und Adresse im Impressum, und das fehlt hier. Aber auch ein Impressum kann gefälscht sein.",
        "remember": "Ein guter Shop zeigt seinen Namen und seine Adresse."
      },
      "standard": {
        "question": "Du willst in einem neuen Shop bestellen. In der Adresszeile siehst du ein Schloss, ein Impressum findest du aber nicht. Was machst du?",
        "answers": [
          "Ich bestelle dort nicht, Name und Anschrift fehlen.",
          "Ich bestelle, das Schloss zeigt ja, dass der Shop sicher ist.",
          "Ich bestelle, die Seite sieht ja sehr professionell aus."
        ],
        "feedbackWrong": [
          null,
          "Auch Fake-Shops haben ein Schloss: Es zeigt nur eine verschlüsselte Verbindung. Achte auf Name und Anschrift.",
          "Eine professionelle Seite können auch Betrüger bauen, das Aussehen beweist nichts. Achte auf Name und Anschrift."
        ],
        "feedbackCorrect": "Ein seriöser Shop nennt Name und Anschrift im Impressum – das fehlt hier. Allerdings kann auch ein Impressum gefälscht sein.",
        "remember": "Ein guter Shop nennt Name und Anschrift."
      }
    },
    "einkaufen/kurz/Sicher bezahlen": {
      "einfach": {
        "question": "Du bestellst zum ersten Mal in einem Shop und kannst wählen: vorher überweisen, Rechnung oder PayPal. Was nimmst du?",
        "answers": [
          "Ich überweise vorher, damit das Paket schneller kommt.",
          "Ich zahle mit PayPal.",
          "Ich zahle auf Rechnung."
        ],
        "feedbackWrong": [
          "Vorher überweisen heißt Vorkasse: Du zahlst zuerst. Wenn keine Ware kommt, bekommst du dein Geld nur schwer zurück.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "PayPal hat einen Käufer-Schutz. Wenn keine Ware kommt, kannst du dein Geld zurückfordern.",
          null
        ],
        "feedbackCorrect": "Bei Rechnung bekommst du zuerst die Ware, und dann zahlst du.",
        "remember": "Rechnung ist sicherer als Vorkasse."
      },
      "standard": {
        "question": "Du bestellst zum ersten Mal in einem Shop und kannst wählen: Vorkasse per Überweisung, Rechnung oder PayPal. Was nimmst du?",
        "answers": [
          "Ich überweise vorab, dann kommt das Paket schneller.",
          "Ich zahle mit PayPal.",
          "Ich zahle auf Rechnung."
        ],
        "feedbackWrong": [
          "Bei Vorkasse zahlst du zuerst. Kommt keine Ware, bekommst du dein Geld nur schwer zurück.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "PayPal bietet einen Käuferschutz: Kommt keine Ware, kannst du dein Geld zurückfordern.",
          null
        ],
        "feedbackCorrect": "Bei Rechnung kommt erst die Ware, dann zahlst du.",
        "remember": "Rechnung ist sicherer als Vorkasse."
      }
    },
    "Was ist ein Fake-Shop?": {
      "einfach": {
        "question": "Du liest das Wort Fake-Shop. Was ist ein Fake-Shop?",
        "hinweis": "Fake heißt falsch. Überlege, was an so einem Shop falsch ist.",
        "answers": [
          "Ein Shop mit besonders guten Angeboten.",
          "Ein Shop, der im Ausland ist.",
          "Ein falscher Shop, die Ware kommt nie."
        ],
        "feedbackWrong": [
          "Der günstige Preis soll dich nur anlocken. Die Ware kommt nicht.",
          "Auch Shops aus Deutschland können falsch sein.",
          null
        ],
        "feedbackCorrect": "Ein Fake-Shop sieht oft echt aus. Du bezahlst, aber die Ware kommt nie. Deshalb prüfst du einen Shop, bevor du dort bezahlst."
      },
      "standard": {
        "question": "Was versteht man unter einem Fake-Shop?",
        "hinweis": "Fake heißt gefälscht – was ist an so einem Shop gefälscht?",
        "answers": [
          "Einen Shop mit besonders guten Angeboten.",
          "Einen Shop mit Sitz im Ausland.",
          "Einen gefälschten Shop, der nie liefert."
        ],
        "feedbackWrong": [
          "Der günstige Preis soll dich nur anlocken – die Ware kommt nie.",
          "Auch Shops aus Deutschland können gefälscht sein.",
          null
        ],
        "feedbackCorrect": "Fake-Shops wirken oft täuschend echt: Du bezahlst, aber die Ware kommt nie. Deshalb prüfst du einen unbekannten Shop, bevor du dort bezahlst."
      }
    },
    "Ein Shop will das Geld vorher. Du kennst den Shop nicht. Was ist besser?": {
      "einfach": {
        "question": "Ein Shop, den du nicht kennst, will das Geld vorher. Was ist besser?",
        "hinweis": "Du kennst den Shop nicht. Überlege, was das für dein Geld bedeutet.",
        "answers": [
          "Ich bezahle vorher.",
          "Ich kaufe dort nicht.",
          "Ich bezahle nur die Hälfte vorher."
        ],
        "feedbackWrong": [
          "Dann ist dein Geld vielleicht weg.",
          null,
          "Auch die Hälfte kann weg sein. Kauf dort lieber nicht."
        ],
        "feedbackCorrect": "Du kennst den Shop nicht, und vielleicht kommt die Ware nie. Dann ist das Geld weg, das du vorher bezahlt hast. Deshalb kaufst du dort nicht."
      },
      "standard": {
        "question": "Ein unbekannter Shop will das Geld vorab. Was ist besser?",
        "hinweis": "Du kennst den Shop nicht – was heißt das für dein Geld?",
        "answers": [
          "Vorab bezahlen.",
          "Dort nicht kaufen.",
          "Nur die Hälfte vorab zahlen."
        ],
        "feedbackWrong": [
          "Dann ist dein Geld womöglich verloren.",
          null,
          "Auch die Hälfte kann verloren sein – kauf dort lieber nicht."
        ],
        "feedbackCorrect": "Du kennst den Shop nicht. Kommt die Ware nie an, ist das im Voraus bezahlte Geld verloren. Deshalb kaufst du dort nicht."
      }
    },
    "Deine Bank schreibt eine E-Mail und will deine PIN. Was stimmt?": {
      "einfach": {
        "question": "Eine E-Mail sagt, sie ist von deiner Bank, und will deine PIN. Was stimmt?",
        "hinweis": "Überlege, ob deine Bank deine PIN überhaupt von dir braucht.",
        "answers": [
          "Das ist Betrug, denn die Bank fragt nie nach der PIN.",
          "Das ist ganz normal.",
          "Das ist eine normale Sicherheits-Prüfung von der Bank."
        ],
        "feedbackWrong": [
          null,
          "Die Bank fragt nie nach deiner PIN.",
          "So eine Prüfung gibt es nicht. Die Bank fragt nie nach der PIN."
        ],
        "feedbackCorrect": "Deine Bank fragt nie per E-Mail nach deiner PIN. Diese E-Mail kommt also von Betrügern, die mit der PIN dein Geld stehlen wollen."
      },
      "standard": {
        "question": "Eine E-Mail, angeblich von deiner Bank, verlangt deine PIN. Was stimmt?",
        "hinweis": "Braucht deine Bank deine PIN überhaupt von dir?",
        "answers": [
          "Betrug – Banken fragen nie nach der PIN.",
          "Das ist ganz normal.",
          "Eine übliche Sicherheitsprüfung der Bank."
        ],
        "feedbackWrong": [
          null,
          "Banken fragen nie nach deiner PIN.",
          "So eine Prüfung gibt es nicht – Banken fragen nie nach der PIN."
        ],
        "feedbackCorrect": "Deine Bank fragt nie per E-Mail nach deiner PIN. Die Nachricht stammt also von Betrügern, die mit der PIN Zugriff auf dein Konto erhalten wollen."
      }
    },
    "Ein Angebot sagt: Nur noch heute! Was machst du?": {
      "einfach": {
        "question": "Bei einem Angebot steht: Nur noch heute! Was machst du?",
        "hinweis": "Nur noch heute soll dich zur Eile bringen. Überlege, was gegen Eile hilft.",
        "answers": [
          "Ich bleibe ruhig und überlege.",
          "Ich kaufe sofort.",
          "Ich kaufe gleich zwei Stück."
        ],
        "feedbackWrong": [
          null,
          "Das Angebot will dich hetzen, damit du schnell kaufst. Du darfst dir trotzdem Zeit nehmen und erst in Ruhe prüfen.",
          "Wenn du mehr kaufst, kostet es nur mehr Geld."
        ],
        "feedbackCorrect": "Das Angebot macht dir Stress, damit du schnell kaufst. Du darfst dir aber Zeit nehmen und in Ruhe prüfen, ob du das wirklich brauchst."
      },
      "standard": {
        "question": "Ein Angebot wirbt mit „Nur noch heute!“. Was tust du?",
        "hinweis": "„Nur noch heute“ erzeugt Eile – was hilft dagegen?",
        "answers": [
          "Ruhig bleiben und nachdenken.",
          "Sofort kaufen.",
          "Gleich zwei Stück kaufen."
        ],
        "feedbackWrong": [
          null,
          "Das Angebot soll dich zu einem schnellen Kauf drängen. Du darfst dir trotzdem Zeit lassen und zuerst in Ruhe prüfen.",
          "Mehr kaufen kostet nur mehr Geld."
        ],
        "feedbackCorrect": "Der Hinweis „Nur noch heute!“ soll dich zu einem schnellen Kauf drängen. Du darfst dir Zeit lassen und in Ruhe prüfen, ob du das wirklich brauchst."
      }
    },
    "Was prüfst du vor dem Kaufen?": {
      "einfach": {
        "question": "Was prüfst du, bevor du etwas kaufst?",
        "hinweis": "Am Ende bezahlst du oft mehr, als auf dem Bild steht.",
        "answers": [
          "Nur ob das Bild von der Ware schön aussieht.",
          "Preis, Versand-Kosten und ob es ein Abo ist.",
          "Nur wie viele Sterne andere Leute vergeben haben."
        ],
        "feedbackWrong": [
          "Ein Bild sagt nichts über die Kosten.",
          null,
          "Sterne kann man kaufen. Schau lieber auf den Preis und die Kosten."
        ],
        "feedbackCorrect": "Mit Versand kostet es oft mehr, und ein Abo kostet immer wieder Geld. Deshalb prüfst du den ganzen Preis. Danach entscheidest du selbst."
      },
      "standard": {
        "question": "Was prüfst du vor einem Kauf?",
        "hinweis": "Am Ende zahlst du oft mehr, als auf dem Bild steht.",
        "answers": [
          "Nur, ob das Produktbild gut aussieht.",
          "Preis, Versandkosten und ob es ein Abo ist.",
          "Nur die Anzahl der Sterne in den Bewertungen."
        ],
        "feedbackWrong": [
          "Das Bild sagt nichts über die Kosten.",
          null,
          "Sterne lassen sich kaufen – achte auf Preis und Kosten."
        ],
        "feedbackCorrect": "Mit Versandkosten wird der Kauf oft teurer, und ein Abo kostet regelmäßig Geld. Deshalb prüfst du den Endpreis und entscheidest danach selbst."
      }
    },
    "Du hast etwas Falsches bestellt. Was kannst du oft tun?": {
      "einfach": {
        "question": "Du hast im Internet etwas Falsches bestellt. Was kannst du oft tun?",
        "hinweis": "Nach dem Kauf hast du eine bestimmte Zeit. Überlege, wie lang sie ist.",
        "answers": [
          "Ich kann es 14 Tage lang zurückgeben.",
          "Ich kann nichts machen, da habe ich Pech gehabt.",
          "Ich kann es nur mit dem Kassen-Bon umtauschen."
        ],
        "feedbackWrong": [
          null,
          "Du hast oft 14 Tage Zeit für einen Widerruf.",
          "Wenn du im Internet kaufst, brauchst du keinen Kassen-Bon."
        ],
        "feedbackCorrect": "Bei vielen Online-Käufen hast du das Recht, die Ware 14 Tage lang zurückzugeben. Das nennt man Widerruf. Dafür schreibst du dem Shop eine Nachricht."
      },
      "standard": {
        "question": "Du hast online etwas Falsches bestellt. Was kannst du oft tun?",
        "hinweis": "Nach dem Kauf gilt eine Frist – wie lang ist sie?",
        "answers": [
          "Innerhalb von 14 Tagen widerrufen.",
          "Nichts, ich muss die Ware behalten.",
          "Nur mit Kassenbon umtauschen."
        ],
        "feedbackWrong": [
          null,
          "Du hast oft ein 14-tägiges Widerrufsrecht.",
          "Bei Onlinekäufen brauchst du keinen Kassenbon."
        ],
        "feedbackCorrect": "Bei vielen Onlinekäufen hast du ein 14-tägiges Widerrufsrecht. Den Widerruf teilst du dem Shop mit, zum Beispiel in einer Nachricht."
      }
    },
    "Kosten kleine Käufe in Spielen echtes Geld?": {
      "einfach": {
        "question": "Kosten kleine Käufe in einem Spiel echtes Geld?",
        "hinweis": "Kostenlos ist nur der Anfang. Überlege, was im Spiel noch dazukommt.",
        "answers": [
          "Nein, damit bezahlt man nur mit Spiel-Geld.",
          "Nur beim ersten Mal.",
          "Ja, und viele kleine Käufe werden teuer."
        ],
        "feedbackWrong": [
          "Spiel-Geld kaufst du oft mit echtem Geld. Deshalb kostet auch jeder Kauf mit Spiel-Geld echtes Geld.",
          "Jeder Kauf kostet Geld, nicht nur der erste.",
          null
        ],
        "feedbackCorrect": "Käufe in einem Spiel kosten echtes Geld. Ein einzelner Kauf ist oft klein, aber viele kleine Käufe werden schnell teuer. Deshalb rechnest du nach, wie viel du schon bezahlt hast."
      },
      "standard": {
        "question": "Kosten kleine Käufe in Handyspielen echtes Geld?",
        "hinweis": "Kostenlos ist nur der Einstieg – was kommt im Spiel dazu?",
        "answers": [
          "Nein, bezahlt wird nur mit Spielwährung.",
          "Nur beim ersten Kauf.",
          "Ja – und viele kleine Käufe werden teuer."
        ],
        "feedbackWrong": [
          "Spielwährung wird oft mit echtem Geld gekauft. Dann kostet auch jeder Kauf mit dieser Währung echtes Geld.",
          "Jeder Kauf kostet Geld – nicht nur der erste.",
          null
        ],
        "feedbackCorrect": "In-App-Käufe kosten echtes Geld. Einzelne Käufe wirken klein, summieren sich aber schnell. Deshalb behältst du im Blick, wie viel du schon ausgegeben hast."
      }
    },
    "Bleiben deine PIN und TAN geheim?": {
      "einfach": {
        "question": "Bleiben deine PIN und deine TAN geheim?",
        "hinweis": "Mit PIN und TAN kommt man an dein Geld.",
        "answers": [
          "Ja, die PIN und die TAN bleiben geheim.",
          "Nein, die darf ich an andere weitergeben.",
          "Nur meiner Bank sage ich sie, wenn sie fragt."
        ],
        "feedbackWrong": [
          null,
          "Mit PIN und TAN kann jemand dein Geld stehlen. Deshalb gibst du sie nie an andere weiter.",
          "Auch der Bank nicht, denn sie fragt nie danach."
        ],
        "feedbackCorrect": "Mit PIN und TAN kann jemand dein Geld stehlen. Deshalb gibst du sie niemandem weiter. Auch deine Bank fragt nie per E-Mail oder Telefon danach."
      },
      "standard": {
        "question": "Bleiben PIN und TAN immer geheim?",
        "hinweis": "Wer PIN und TAN kennt, hat Zugriff auf dein Konto.",
        "answers": [
          "Ja, PIN und TAN bleiben immer geheim.",
          "Nein, die darf ich weitergeben.",
          "Nur meiner Bank verrate ich sie."
        ],
        "feedbackWrong": [
          null,
          "Wer PIN und TAN kennt, hat Zugriff auf dein Konto. Gib sie deshalb nie weiter.",
          "Auch der Bank nicht – sie fragt nie danach."
        ],
        "feedbackCorrect": "Wer PIN und TAN kennt, hat Zugriff auf dein Konto. Deshalb gibst du sie niemandem weiter. Auch deine Bank fragt nie per E-Mail oder Telefon danach."
      }
    }
  },
  "betrug": {
    "Du sollst für einen Gewinn erst Geld zahlen. Was stimmt?": {
      "einfach": {
        "question": "Du sollst zuerst Geld bezahlen, damit du einen Gewinn bekommst. Was stimmt?",
        "hinweis": "Ein Gewinn ist ein Geschenk. Musst du für ein Geschenk Geld bezahlen?",
        "answers": [
          "Das ist ganz normal.",
          "Das ist Betrug.",
          "Das ist die Steuer für den Gewinn."
        ],
        "feedbackCorrect": "Echte Gewinne kosten dich kein Geld. Wenn du zuerst zahlen sollst, ist es ein Trick von Betrügern.",
        "feedbackWrong": [
          "Für einen echten Gewinn zahlst du kein Geld.",
          null,
          "Bei einem echten Gewinn musst du nicht erst Geld bezahlen."
        ]
      },
      "standard": {
        "question": "Bevor du einen Gewinn erhältst, sollst du Geld bezahlen. Welche Aussage trifft zu?",
        "hinweis": "Ein Gewinn ist ein Geschenk. Kostet dich ein Geschenk Geld?",
        "answers": [
          "Das ist normal.",
          "Das ist Betrug.",
          "Das ist die Steuer für den Gewinn."
        ],
        "feedbackCorrect": "Einen echten Gewinn musst du nicht zuerst bezahlen. Verlangt jemand vorher Geld, handelt es sich um Betrug.",
        "feedbackWrong": [
          "Echte Gewinne kosten dich kein Geld.",
          null,
          "Für einen echten Gewinn musst du vorher nichts bezahlen."
        ]
      }
    },
    "Eine E-Mail drängt: Sofort klicken! Was bedeutet das?": {
      "einfach": {
        "question": "Eine E-Mail fordert dich auf: Sofort klicken! Was bedeutet das?",
        "hinweis": "Warum will jemand, dass du keine Zeit zum Nachdenken hast?",
        "answers": [
          "Ein Warnzeichen.",
          "Das ist ganz normal.",
          "Die Sache ist wirklich dringend."
        ],
        "feedbackCorrect": "Betrüger setzen dich oft unter Zeitdruck, damit du nicht in Ruhe nachdenkst. Deshalb ist Stress in einer Nachricht ein Warnzeichen.",
        "feedbackWrong": [
          null,
          "Auch eine bekannte Stelle kann dich zur Eile drängen. Prüfe die Nachricht zuerst.",
          "Die Sache kann wirklich dringend sein. Zeitdruck macht den Link aber nicht sicher. Stoppe kurz und prüfe die Nachricht."
        ]
      },
      "standard": {
        "question": "In einer E-Mail steht: Sofort klicken! Was bedeutet das?",
        "hinweis": "Warum soll dir keine Zeit zum Nachdenken bleiben?",
        "answers": [
          "Das ist ein Warnzeichen für Betrug.",
          "Das ist normal.",
          "Es handelt sich tatsächlich um eine dringende Sache."
        ],
        "feedbackCorrect": "Betrüger erzeugen oft Zeitdruck, damit du nicht in Ruhe prüfst. Deshalb ist Zeitdruck ein Warnzeichen.",
        "feedbackWrong": [
          null,
          "Auch eine bekannte Stelle kann eine Frist setzen. Prüfe die Nachricht über einen vertrauten Weg, bevor du reagierst.",
          "Die Angelegenheit kann tatsächlich dringend sein. Zeitdruck bestätigt aber weder die Herkunft der E-Mail noch die Sicherheit des Links. Prüfe zuerst."
        ]
      }
    },
    "betrug/quiz/banknachricht-app-selbst": {
      "einfach": {
        "question": "Eine E-Mail nennt deine Bank. Darin steht: Neue Nachricht zu Ihrem Konto. Bitte hier anmelden. Dafür gibt es einen Link. Du möchtest nachsehen und nutzt deine Bank-App bereits auf dem Handy. Was machst du zuerst?",
        "hinweis": "Überlege, welchen Weg zu deiner Bank du bereits kennst.",
        "answers": [
          "Ich tippe auf den Link, weil die Nachricht meine Bank nennt.",
          "Ich öffne meine Bank-App selbst und sehe dort nach.",
          "Ich antworte auf die E-Mail und frage nach der Nachricht."
        ],
        "feedbackCorrect": "Du öffnest die Bank-App selbst über das Zeichen auf deinem Handy, statt den Link zu benutzen. Dort kannst du nachsehen. Dafür musst du nicht erkennen, ob die E-Mail ein Trick ist.",
        "feedbackWrong": [
          "Auch eine falsche E-Mail kann den Namen deiner Bank verwenden. Der Link kann zu einer gefälschten Seite führen. Öffne deine Bank-App deshalb selbst über das Zeichen auf deinem Handy.",
          null,
          "Deine Antwort geht an die Adresse aus der E-Mail. Damit prüfst du noch nicht, ob die Nachricht wirklich von deiner Bank kommt. Öffne deine Bank-App selbst und sieh dort nach."
        ],
        "remember": "Ich öffne die App selbst oder rufe eine schon bekannte Nummer an."
      },
      "standard": {
        "question": "Eine E-Mail mit dem Namen deiner Bank kündigt eine neue Nachricht zu deinem Konto an. Über einen enthaltenen Link sollst du dich anmelden. Du nutzt die Bank-App bereits auf deinem Handy und willst die Nachricht prüfen. Was tust du zuerst?",
        "hinweis": "Überlege, welcher dir bereits bekannte Zugang unabhängig von der E-Mail ist.",
        "answers": [
          "Ich öffne den Link, weil die E-Mail den Namen meiner Bank nennt.",
          "Ich öffne meine Bank-App selbst und prüfe dort die Nachricht.",
          "Ich antworte dem Absender und frage nach der angekündigten Nachricht."
        ],
        "feedbackCorrect": "Öffne die bereits eingerichtete Bank-App über ihr Symbol auf deinem Handy und sieh dort nach. So prüfst du über einen bekannten Zugang, ohne den Link aus der E-Mail zu benutzen. Du musst die mögliche Fälschung dafür nicht erkennen.",
        "feedbackWrong": [
          "Auch eine gefälschte E-Mail kann den Namen deiner Bank verwenden. Der Link kann zu einer nachgebauten Seite führen. Öffne die bereits eingerichtete Bank-App über ihr Symbol und prüf dort nach.",
          null,
          "Deine Antwort bleibt bei der Adresse aus der E-Mail und bestätigt die Herkunft nicht. Öffne die bereits eingerichtete Bank-App selbst, um unabhängig von der E-Mail nachzusehen."
        ],
        "remember": "Ich öffne die App selbst oder rufe eine Nummer an, die ich schon kenne – nicht die aus der Nachricht."
      }
    },
    "betrug/lang/Was ist Phishing?": {
      "einfach": {
        "question": "Du bekommst eine E-Mail, die aussieht wie von deiner Bank. Darin steht: Bitte bestätigen Sie Ihre Daten und tippen Sie auf den Link. Was machst du?",
        "answers": [
          "Ich tippe auf den Link, weil die E-Mail echt aussieht.",
          "Ich tippe nicht und rufe meine Bank selbst an.",
          "Ich antworte auf die E-Mail und frage, ob sie echt ist."
        ],
        "feedbackWrong": [
          "Betrüger können das Zeichen der Bank leicht kopieren, deshalb ist das Aussehen kein Beweis. Deine Bank fragt nie per E-Mail nach deinen Daten.",
          null,
          "Deine Antwort geht an die Betrüger, und die schreiben dann, dass alles echt ist. Ruf lieber deine Bank selbst an."
        ],
        "feedbackCorrect": "Deine Bank fragt nie per E-Mail nach deinen Daten. Der Link kann zu einer falschen Seite führen.",
        "remember": "Meine Bank fragt nie per E-Mail nach meinen Daten."
      },
      "standard": {
        "question": "Eine E-Mail sieht aus wie von deiner Bank: Bitte bestätigen Sie Ihre Daten über diesen Link. Was machst du?",
        "answers": [
          "Ich tippe auf den Link, die E-Mail sieht echt aus.",
          "Ich tippe nicht und rufe meine Bank selbst an.",
          "Ich antworte auf die E-Mail und frage, ob sie echt ist."
        ],
        "feedbackWrong": [
          "Ein Banklogo lässt sich leicht kopieren, das Aussehen beweist nichts. Deine Bank fragt nie per E-Mail nach deinen Daten.",
          null,
          "Deine Antwort landet bei den Betrügern, und die bestätigen natürlich, dass alles echt ist. Ruf lieber deine Bank selbst an."
        ],
        "feedbackCorrect": "Deine Bank fragt nie per E-Mail nach deinen Daten. Der Link kann auf eine gefälschte Seite führen.",
        "remember": "Meine Bank fragt nie per E-Mail nach meinen Daten."
      }
    },
    "betrug/lang/Falsche Nachrichten erkennen": {
      "einfach": {
        "question": "Du hast morgen einen Termin beim Zahnarzt. Die Praxis schickt dir eine SMS: Ihr Termin ist morgen um 10 Uhr. In der SMS ist kein Link, und niemand will Geld. Was machst du?",
        "answers": [
          "Ich lösche die SMS sofort, weil jede SMS Betrug sein kann.",
          "Das ist eine normale Erinnerung, und ich gehe morgen hin.",
          "Ich rufe kurz in der Praxis an und frage nach."
        ],
        "feedbackWrong": [
          "Nicht jede SMS ist Betrug. Hier fehlen die Warnzeichen: kein Stress, keine Drohung, kein Link. Und du hast den Termin wirklich.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Das geht immer, denn die Nummer der Praxis hast du schon."
        ],
        "feedbackCorrect": "Die SMS macht keinen Stress, droht nicht und will weder Geld noch Daten. Außerdem stimmt der Termin.",
        "remember": "Stress und Drohung sind Warnzeichen."
      },
      "standard": {
        "question": "Du hast morgen einen Zahnarzttermin. Die Praxis schickt eine SMS: Ihr Termin ist morgen um 10 Uhr. Die SMS enthält keinen Link, und niemand will Geld. Was machst du?",
        "answers": [
          "Ich lösche die SMS sofort, jede SMS kann Betrug sein.",
          "Das ist eine normale Erinnerung, ich gehe morgen hin.",
          "Ich rufe kurz in der Praxis an und frage nach."
        ],
        "feedbackWrong": [
          "Nicht jede SMS ist Betrug. Hier fehlen die Warnzeichen: kein Druck, keine Drohung, kein Link. Und den Termin hast du wirklich.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Das geht immer, die Nummer der Praxis hast du schon."
        ],
        "feedbackCorrect": "Die SMS macht keinen Druck, droht nicht und will weder Geld noch Daten. Außerdem stimmt der Termin.",
        "remember": "Druck und Drohungen sind Warnzeichen."
      }
    },
    "betrug/lang/Der Paket-Trick": {
      "einfach": {
        "question": "Du wartest auf ein Paket. Eine SMS sagt: Ihr Paket kann nicht geliefert werden. Zahlen Sie 2 Euro Zoll über diesen Link. Was machst du?",
        "answers": [
          "Ich zahle, weil ich ja wirklich auf ein Paket warte.",
          "Ich schaue selbst beim Paket-Dienst nach, wo mein Paket ist.",
          "Ich zahle nicht und tippe nicht auf den Link."
        ],
        "feedbackWrong": [
          "Viele Menschen warten gerade auf ein Paket, und darum klappt der Trick so oft. Es geht den Betrügern nicht um 2 Euro, sondern um deine Bank-Daten.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Dort siehst du, wo dein Paket wirklich ist. Den Link aus der SMS brauchst du dafür nicht.",
          null
        ],
        "feedbackCorrect": "Solche SMS sind fast immer Betrug, denn echte Paket-Dienste fordern kein Geld per SMS.",
        "remember": "Paket-SMS mit Geld-Forderung sind Betrug."
      },
      "standard": {
        "question": "Du wartest auf ein Paket. Eine SMS meldet: Ihr Paket kann nicht zugestellt werden. Zahlen Sie 2 Euro Zoll über diesen Link. Was machst du?",
        "answers": [
          "Ich zahle, ich warte ja wirklich auf ein Paket.",
          "Ich sehe selbst beim Paketdienst nach, wo mein Paket ist.",
          "Ich zahle nicht und tippe nicht auf den Link."
        ],
        "feedbackWrong": [
          "Viele warten gerade auf ein Paket, deshalb funktioniert die Masche so gut. Den Betrügern geht es nicht um 2 Euro, sondern um deine Bankdaten.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Dort siehst du, wo dein Paket wirklich ist. Den Link aus der SMS brauchst du dafür nicht.",
          null
        ],
        "feedbackCorrect": "Solche SMS sind fast immer Betrug – seriöse Paketdienste verlangen kein Geld per SMS.",
        "remember": "Paket-SMS mit Geldforderung sind Betrug."
      }
    },
    "betrug/lang/Der Hallo-Mama-Trick": {
      "einfach": {
        "question": "Eine fremde Nummer schreibt dir bei WhatsApp: Hallo, ich bin es, dein Bruder. Mein Handy ist kaputt, das ist meine neue Nummer. Kannst du mir heute 300 Euro überweisen? Was machst du?",
        "answers": [
          "Ich rufe meinen Bruder unter der alten Nummer an.",
          "Ich überweise, weil mein Bruder ja Hilfe braucht.",
          "Ich schreibe zurück und frage, ob er es wirklich ist."
        ],
        "feedbackWrong": [
          null,
          "Das ist ein bekannter Trick, und die neue Nummer kann Betrügern gehören. Ruf erst die alte Nummer an.",
          "Betrüger antworten einfach, dass sie es sind. Sicher bist du erst, wenn du die alte Nummer angerufen hast."
        ],
        "feedbackCorrect": "Unter der alten Nummer erreichst du deinen echten Bruder, und so merkst du den Betrug.",
        "remember": "Bei Geld-Nachrichten rufe ich die bekannte Nummer an."
      },
      "standard": {
        "question": "Eine unbekannte Nummer schreibt dir bei WhatsApp: Hallo, ich bin's, dein Bruder. Mein Handy ist kaputt, das ist meine neue Nummer. Kannst du mir heute 300 Euro überweisen? Was machst du?",
        "answers": [
          "Ich rufe meinen Bruder unter der alten Nummer an.",
          "Ich überweise, mein Bruder braucht ja Hilfe.",
          "Ich schreibe zurück und frage, ob er es wirklich ist."
        ],
        "feedbackWrong": [
          null,
          "Das ist eine bekannte Masche, die neue Nummer kann Betrügern gehören. Ruf erst die alte Nummer an.",
          "Betrüger antworten einfach mit Ja. Sicher bist du erst nach einem Anruf unter der alten Nummer."
        ],
        "feedbackCorrect": "Unter der alten Nummer erreichst du deinen echten Bruder – so fliegt der Betrug auf.",
        "remember": "Bei Geldnachrichten rufe ich die bekannte Nummer an."
      }
    },
    "betrug/lang/Schockanrufe": {
      "einfach": {
        "question": "Ein Mann ruft an: Hier ist die Polizei. In Ihrer Straße sind Einbrecher unterwegs. Geben Sie Ihr Geld einem Kollegen, der gleich zu Ihnen kommt. Dann ist es sicher. Was machst du?",
        "answers": [
          "Ich lege auf, weil die Polizei kein Geld abholt.",
          "Ich gebe ihm das Geld, weil es bei der Polizei sicher ist.",
          "Ich lege auf und rufe selbst die 110 an."
        ],
        "feedbackWrong": [
          null,
          "Die echte Polizei fordert am Telefon nie Geld. Der Kollege an der Tür ist ein Betrüger, und dein Geld ist dann verloren.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Bei der 110 erreichst du die echte Polizei und kannst den Anruf melden."
        ],
        "feedbackCorrect": "Du legst auf, weil die echte Polizei nie Geld fordert. Sie holt auch kein Geld ab.",
        "remember": "Die echte Polizei fordert nie Geld."
      },
      "standard": {
        "question": "Ein Mann ruft an: Hier ist die Polizei. In Ihrer Straße sind Einbrecher unterwegs. Übergeben Sie Ihr Geld einem Kollegen, der gleich bei Ihnen klingelt – dann ist es sicher. Was machst du?",
        "answers": [
          "Ich lege auf, die Polizei holt kein Geld ab.",
          "Ich gebe ihm das Geld, bei der Polizei ist es sicher.",
          "Ich lege auf und wähle selbst die 110."
        ],
        "feedbackWrong": [
          null,
          "Die echte Polizei fordert am Telefon nie Geld. Der Kollege an der Tür ist ein Betrüger, und dein Geld ist dann verloren.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Unter der 110 erreichst du die echte Polizei und kannst den Anruf melden."
        ],
        "feedbackCorrect": "Du legst auf: Die echte Polizei fordert nie Geld und holt auch keines ab.",
        "remember": "Die echte Polizei fordert nie Geld."
      }
    },
    "betrug/lang/Liebe im Internet": {
      "einfach": {
        "question": "Seit 3 Monaten schreibt dir Marco jeden Tag liebe Worte, aber ihr habt euch noch nie getroffen. Jetzt schreibt er: Ich will dich endlich besuchen. Schick mir 400 Euro für den Flug. Was machst du?",
        "answers": [
          "Ich schicke das Geld, damit wir uns endlich sehen.",
          "Ich schicke kein Geld und spreche mit jemandem darüber.",
          "Ich schreibe Marco, dass ich kein Geld schicke."
        ],
        "feedbackWrong": [
          "Deine Gefühle sind echt, aber du kennst Marco nur aus dem Internet. Erst kommen liebe Worte, dann kommt die Bitte um Geld – so geht dieser Trick. Schick kein Geld.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Das ist ein guter Weg, denn Reden hilft bei so einer Entscheidung. Wichtig ist, dass du kein Geld schickst.",
          null
        ],
        "feedbackCorrect": "Du sagst klar Nein. Wer dich wirklich mag, bleibt trotzdem. Ein Betrüger macht jetzt Druck oder meldet sich nicht mehr.",
        "remember": "Ich schicke kein Geld an fremde Menschen aus dem Internet."
      },
      "standard": {
        "question": "Seit 3 Monaten schreibt dir Marco täglich liebe Nachrichten, getroffen habt ihr euch nie. Jetzt schreibt er: Ich will dich endlich besuchen. Schick mir 400 Euro für den Flug. Was machst du?",
        "answers": [
          "Ich schicke das Geld, dann sehen wir uns endlich.",
          "Ich schicke kein Geld und spreche mit jemandem darüber.",
          "Ich schreibe Marco, dass ich kein Geld schicke."
        ],
        "feedbackWrong": [
          "Deine Gefühle sind echt, aber du kennst Marco nur aus dem Internet. Erst liebe Worte, dann die Bitte um Geld: So läuft diese Masche. Schick kein Geld.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Das ist ein guter Weg, denn Reden hilft bei so einer Entscheidung. Wichtig ist, dass du kein Geld schickst.",
          null
        ],
        "feedbackCorrect": "Du sagst klar Nein. Wer dich wirklich mag, bleibt trotzdem – ein Betrüger macht jetzt Druck oder meldet sich nicht mehr.",
        "remember": "Ich schicke kein Geld an Menschen, die ich nur aus dem Internet kenne."
      }
    },
    "betrug/lang/Falsche Gewinne": {
      "einfach": {
        "question": "Eine Frau ruft an: Sie haben 5000 Euro gewonnen. Kaufen Sie vorher Gutschein-Karten für 100 Euro und sagen Sie mir die Codes. Dann bekommen Sie den Gewinn. Was machst du?",
        "answers": [
          "Ich lege auf und kaufe keine Karten.",
          "Ich kaufe die Karten, weil 5000 Euro viel Geld sind.",
          "Ich kaufe erst nur eine Karte für 20 Euro."
        ],
        "feedbackWrong": [
          null,
          "Echte Gewinne kosten kein Geld. Mit den Codes holen sich die Betrüger das Geld von den Karten, und den Gewinn gibt es nicht.",
          "Auch die 20 Euro sind dann verloren, und die Betrüger rufen wieder an. Echte Gewinne kosten kein Geld."
        ],
        "feedbackCorrect": "Echte Gewinne kosten kein Geld. Die Sache mit den Gutschein-Karten ist ein bekannter Trick.",
        "remember": "Echte Gewinne kosten kein Geld."
      },
      "standard": {
        "question": "Eine Frau ruft an: Sie haben 5000 Euro gewonnen. Kaufen Sie vorher Gutscheinkarten für 100 Euro und nennen Sie mir die Codes – dann zahlen wir den Gewinn aus. Was machst du?",
        "answers": [
          "Ich lege auf und kaufe keine Karten.",
          "Ich kaufe die Karten, 5000 Euro sind viel Geld.",
          "Ich kaufe erst nur eine Karte für 20 Euro."
        ],
        "feedbackWrong": [
          null,
          "Echte Gewinne kosten kein Geld. Mit den Codes lösen die Betrüger das Guthaben der Karten ein – den Gewinn gibt es nicht.",
          "Auch die 20 Euro sind dann verloren, und die Betrüger rufen wieder an. Echte Gewinne kosten kein Geld."
        ],
        "feedbackCorrect": "Echte Gewinne kosten kein Geld. Die Forderung nach Gutscheinkarten ist eine bekannte Masche.",
        "remember": "Echte Gewinne kosten kein Geld."
      }
    },
    "betrug/lang/Abo-Fallen": {
      "einfach": {
        "question": "Du willst eine Koch-App ausprobieren. Auf dem Knopf steht: 7 Tage kostenlos testen. Darunter steht ganz klein, dass die App danach 10 Euro pro Woche kostet. Was machst du?",
        "answers": [
          "Ich tippe auf den Knopf, weil kostenlos ja kostenlos ist.",
          "Ich lese erst die kleine Schrift und entscheide dann.",
          "Ich suche eine andere Koch-App ohne Abo."
        ],
        "feedbackWrong": [
          "Kostenlos sind nur die ersten 7 Tage. Danach zahlst du jede Woche 10 Euro, und das steht in der kleinen Schrift.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann musst du später nichts kündigen und zahlst nichts aus Versehen."
        ],
        "feedbackCorrect": "In der kleinen Schrift steht, dass die App nach 7 Tagen jede Woche Geld kostet. Jetzt weißt du es und entscheidest selbst.",
        "remember": "Kostenlos kann teuer werden. Deshalb lese ich genau."
      },
      "standard": {
        "question": "Du möchtest eine Koch-App ausprobieren. Auf dem Knopf steht: 7 Tage kostenlos testen. Darunter, ganz klein: danach 10 Euro pro Woche. Was machst du?",
        "answers": [
          "Ich tippe auf den Knopf, kostenlos ist ja kostenlos.",
          "Ich lese erst das Kleingedruckte und entscheide dann.",
          "Ich suche eine andere Koch-App ohne Abo."
        ],
        "feedbackWrong": [
          "Kostenlos sind nur die ersten 7 Tage. Danach zahlst du jede Woche 10 Euro – das steht im Kleingedruckten.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann musst du später nichts kündigen und zahlst nichts aus Versehen."
        ],
        "feedbackCorrect": "Im Kleingedruckten steht, dass die App nach 7 Tagen jede Woche Geld kostet. Jetzt weißt du es und entscheidest selbst.",
        "remember": "Kostenlos kann teuer werden – ich lese genau."
      }
    },
    "betrug/lang/Codes nie weitergeben": {
      "einfach": {
        "question": "Ein Mann ruft an: Hier ist Ihre Bank. Jemand will Geld von Ihrem Konto stehlen. Sie bekommen gleich einen Code per SMS. Sagen Sie mir den Code, dann stoppe ich das. Was machst du?",
        "answers": [
          "Ich sage den Code nicht und lege auf.",
          "Ich sage den Code, weil er mein Geld ja schützen will.",
          "Ich lege auf und rufe dann meine Bank selbst an."
        ],
        "feedbackWrong": [
          null,
          "Der Mann will dein Geld nicht schützen. Mit dem Code kann er Geld von deinem Konto holen, und eine echte Bank fragt nie danach.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Unter der Nummer, die du kennst, erreichst du die echte Bank. Dort kannst du fragen, ob mit deinem Konto alles in Ordnung ist."
        ],
        "feedbackCorrect": "Der Code ist nur für dich, und eine echte Bank fragt nie am Telefon danach.",
        "remember": "Ich gebe nie einen Code weiter."
      },
      "standard": {
        "question": "Ein Mann ruft an: Hier ist Ihre Bank. Jemand versucht, Geld von Ihrem Konto abzubuchen. Sie bekommen gleich einen Code per SMS – nennen Sie ihn mir, dann stoppe ich das. Was machst du?",
        "answers": [
          "Ich nenne den Code nicht und lege auf.",
          "Ich nenne den Code, er will mein Geld ja schützen.",
          "Ich lege auf und rufe dann meine Bank selbst an."
        ],
        "feedbackWrong": [
          null,
          "Der Anrufer will dein Geld nicht schützen. Mit dem Code kann er dein Konto leerräumen – eine echte Bank fragt nie danach.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Unter der bekannten Nummer erreichst du die echte Bank und kannst fragen, ob mit deinem Konto alles in Ordnung ist."
        ],
        "feedbackCorrect": "Der Code ist nur für dich. Eine echte Bank fragt am Telefon nie danach.",
        "remember": "Ich gebe nie einen Code weiter."
      }
    },
    "betrug/lang/Vorsicht bei QR-Codes": {
      "einfach": {
        "question": "Du willst am Park-Automaten bezahlen. Auf dem Automaten klebt ein Aufkleber mit einem QR-Code, und darauf steht: Hier schnell bezahlen. Was machst du?",
        "answers": [
          "Ich zahle in meiner eigenen Park-App.",
          "Ich scanne den Code, weil das am schnellsten geht.",
          "Ich scanne nicht und zahle mit Münzen."
        ],
        "feedbackWrong": [
          null,
          "Betrüger kleben falsche Codes über echte, und der Code führt dann auf eine falsche Seite. Zahle lieber mit Münzen oder in deiner eigenen Park-App.",
          null
        ],
        "feedbackAuch": [
          "Deine eigene App kennst du, und den Aufkleber brauchst du dann nicht.",
          null,
          null
        ],
        "feedbackCorrect": "Der Aufkleber kann falsch sein, und mit Münzen bist du sicher.",
        "remember": "Wenn ein Code als Aufkleber klebt, scanne ich ihn nicht."
      },
      "standard": {
        "question": "Du willst am Parkautomaten bezahlen. Auf dem Automaten klebt ein Aufkleber mit einem QR-Code: Hier schnell bezahlen. Was machst du?",
        "answers": [
          "Ich zahle über meine eigene Park-App.",
          "Ich scanne den Code, das geht am schnellsten.",
          "Ich scanne nicht und zahle bar."
        ],
        "feedbackWrong": [
          null,
          "Betrüger überkleben echte Codes mit gefälschten, die auf eine Betrugsseite führen. Zahl lieber bar oder über die offizielle Park-App.",
          null
        ],
        "feedbackAuch": [
          "Deine eigene App kennst du – den Aufkleber brauchst du dann nicht.",
          null,
          null
        ],
        "feedbackCorrect": "Ein Aufkleber kann gefälscht sein. Mit Bargeld bist du auf der sicheren Seite.",
        "remember": "Überklebte QR-Codes scanne ich nicht."
      }
    },
    "betrug/lang/Was kann ich tun?": {
      "einfach": {
        "question": "Jemand ruft an: Hier ist Ihr Strom-Anbieter. Ihre Rechnung ist nicht bezahlt. Zahlen Sie sofort am Telefon mit Ihrer Karte, sonst stellen wir heute den Strom ab. Was machst du?",
        "answers": [
          "Ich zahle sofort, weil ich den Strom behalten will.",
          "Ich lege auf und rufe selbst beim Strom-Anbieter an.",
          "Ich lege auf und schaue in meine letzte Rechnung."
        ],
        "feedbackWrong": [
          "Genau darauf hoffen Betrüger, und das Geld ist dann meistens weg. Leg lieber auf und ruf selbst an.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dort siehst du, ob wirklich etwas offen ist, und dort steht auch die echte Nummer."
        ],
        "feedbackCorrect": "Selbst anrufen ist am sichersten. Nimm dafür die Nummer, die du kennst. Sie steht auf deiner Rechnung.",
        "remember": "Ich lege auf und rufe selbst an."
      },
      "standard": {
        "question": "Ein Anrufer sagt: Hier ist Ihr Stromanbieter. Ihre Rechnung ist offen. Zahlen Sie sofort am Telefon mit Ihrer Karte, sonst stellen wir heute den Strom ab. Was machst du?",
        "answers": [
          "Ich zahle sofort, ich will den Strom behalten.",
          "Ich lege auf und rufe selbst beim Stromanbieter an.",
          "Ich lege auf und sehe in meiner letzten Rechnung nach."
        ],
        "feedbackWrong": [
          "Genau darauf setzen Betrüger – das Geld ist dann meist verloren. Leg lieber auf und ruf selbst an.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dort siehst du, ob wirklich etwas offen ist, und dort steht auch die echte Nummer."
        ],
        "feedbackCorrect": "Selbst anzurufen ist am sichersten – mit der Nummer, die du kennst. Sie steht auf deiner Rechnung.",
        "remember": "Ich lege auf und rufe selbst an."
      }
    },
    "betrug/lang/Was tun nach einem Betrug?": {
      "einfach": {
        "question": "Du hast gestern auf einen Link getippt und dort deine Karten-Daten eingegeben. Heute merkst du, dass die Seite falsch war. Das ist dir peinlich. Was machst du?",
        "answers": [
          "Ich sage niemandem etwas, weil mir das zu peinlich ist.",
          "Ich rufe sofort meine Bank an.",
          "Ich lasse sofort meine Karte sperren."
        ],
        "feedbackWrong": [
          "Wenn du schweigst, hilft das nur den Betrügern. Mit deinen Karten-Daten können sie einkaufen. Lass die Karte schnell sperren – Betrug kann jedem passieren.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Auch die Bank kann die Karte sperren. Wichtig ist, dass du nicht wartest.",
          null
        ],
        "feedbackCorrect": "Schnell sein ist jetzt wichtig. Der Sperr-Notruf ist die 116 116. Betrug kann jedem passieren, und du musst dich nicht schämen.",
        "remember": "Betrug ist nicht meine Schuld. Ich hole Hilfe."
      },
      "standard": {
        "question": "Gestern hast du auf einen Link getippt und dort deine Kartendaten eingegeben. Heute merkst du: Die Seite war gefälscht. Das ist dir peinlich. Was machst du?",
        "answers": [
          "Ich erzähle niemandem davon, das ist mir zu peinlich.",
          "Ich rufe sofort meine Bank an.",
          "Ich lasse sofort meine Karte sperren."
        ],
        "feedbackWrong": [
          "Schweigen hilft nur den Betrügern. Mit deinen Kartendaten können sie einkaufen. Lass die Karte schnell sperren – Betrug kann jedem passieren.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Auch die Bank kann die Karte sperren. Wichtig ist, dass du nicht wartest.",
          null
        ],
        "feedbackCorrect": "Jetzt kommt es auf Schnelligkeit an. Der Sperr-Notruf ist die 116 116. Betrug kann jedem passieren – es gibt keinen Grund, sich zu schämen.",
        "remember": "Betrug ist nicht meine Schuld. Ich hole Hilfe."
      }
    },
    "betrug/kurz/Was ist Betrug im Internet?": {
      "einfach": {
        "question": "Ein Mann ruft dich an und sagt: Hier ist Ihre Bank. Ihr Konto ist in Gefahr, aber ich helfe Ihnen. Gleich bekommen Sie eine SMS mit einem Code. Sagen Sie mir den Code. Was machst du?",
        "answers": [
          "Ich sage ihm den Code, weil er mir helfen will.",
          "Ich sage den Code nicht und lege auf.",
          "Ich lege auf und rufe selbst bei meiner Bank an."
        ],
        "feedbackWrong": [
          "Mit dem Code kann er an dein Geld kommen. Eine echte Bank fragt nie nach so einem Code.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Der Code bleibt bei dir. Die Nummer deiner Bank suchst du selbst heraus, zum Beispiel von deiner Bank-Karte."
        ],
        "feedbackCorrect": "Er sagt, dass er dir hilft, aber er will den Code. So fängt Betrug oft an. Der Code ist nur für dich.",
        "remember": "Ich gebe meinen Code niemals an andere weiter."
      },
      "standard": {
        "question": "Ein Mann ruft an: Hier ist Ihre Bank. Ihr Konto ist in Gefahr, aber ich helfe Ihnen. Sie bekommen gleich eine SMS mit einem Code – lesen Sie ihn mir bitte vor. Was machst du?",
        "answers": [
          "Ich lese ihm den Code vor, er will mir ja helfen.",
          "Ich gebe den Code nicht heraus und lege auf.",
          "Ich lege auf und rufe meine Bank unter der bekannten Nummer an."
        ],
        "feedbackWrong": [
          "Mit dem Code kann der Anrufer auf dein Konto zugreifen. Eine echte Bank fragt am Telefon nie nach so einem Code.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Der Code bleibt bei dir. Unter der Nummer aus deinen eigenen Unterlagen erfährst du, ob mit dem Konto wirklich etwas ist."
        ],
        "feedbackCorrect": "Er gibt sich als Helfer aus, will aber den Code. So beginnt Betrug oft. Der Code gehört nur dir.",
        "remember": "Meinen Code gebe ich nie weiter."
      }
    },
    "betrug/kurz/Wie erkennst du Betrug?": {
      "einfach": {
        "question": "Eine SMS sagt: Glückwunsch, Sie haben ein Handy gewonnen. Zahlen Sie nur 2 Euro für den Versand, nur heute. Du hast aber bei keinem Gewinnspiel mitgemacht. Was machst du?",
        "answers": [
          "Ich zahle, weil 2 Euro ja nicht viel sind.",
          "Ich lösche die SMS.",
          "Ich mache Stopp und prüfe erst in Ruhe."
        ],
        "feedbackWrong": [
          "Es geht nicht um 2 Euro. Beim Zahlen gibst du deine Bank-Daten ein, und genau die wollen die Betrüger.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Dann ist die SMS gelöscht, und du hast nichts gezahlt.",
          null
        ],
        "feedbackCorrect": "Du hast nirgends mitgemacht, und die SMS macht Eile. Das sind Zeichen für Betrug, deshalb zahlst du nichts.",
        "remember": "Bei Stress oder einem Gewinn mache ich Stopp."
      },
      "standard": {
        "question": "Eine SMS meldet: Glückwunsch, Sie haben ein Handy gewonnen. Zahlen Sie nur 2 Euro Versand – nur heute. An einem Gewinnspiel hast du nicht teilgenommen. Was machst du?",
        "answers": [
          "Ich zahle, 2 Euro sind ja nicht viel.",
          "Ich lösche die SMS.",
          "Ich mache Stopp und prüfe erst in Ruhe."
        ],
        "feedbackWrong": [
          "Es geht nicht um die 2 Euro. Beim Bezahlen gibst du deine Bankdaten ein – genau die wollen die Betrüger.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Dann ist die SMS gelöscht, und du hast nichts gezahlt.",
          null
        ],
        "feedbackCorrect": "Du hast nirgends teilgenommen, und die SMS macht Zeitdruck. Beides sind Warnzeichen für Betrug – du zahlst nichts.",
        "remember": "Bei Druck oder einem plötzlichen Gewinn mache ich Stopp."
      }
    },
    "betrug/kurz/Was tust du bei Betrug?": {
      "einfach": {
        "question": "Du bekommst eine SMS: Ihr Bank-Konto ist gesperrt. Tippen Sie hier. Du bist nicht sicher, ob die SMS echt ist. Was machst du?",
        "answers": [
          "Ich öffne meine Bank-App selbst.",
          "Ich tippe auf den Link, dann sehe ich es ja.",
          "Ich rufe meine Bank unter der Nummer an, die ich schon habe."
        ],
        "feedbackWrong": [
          null,
          "Der Link kann zu einer falschen Seite führen, die wie deine Bank aussieht. Deine Bank-App öffnest du lieber selbst.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Auch so fragst du die echte Bank. Wichtig ist, dass du die Nummer nimmst, die du schon kennst."
        ],
        "feedbackCorrect": "Du tippst nicht auf den Link, sondern öffnest die App selbst. Dort siehst du, ob alles in Ordnung ist.",
        "remember": "Ich muss den Trick nicht erkennen. Ich öffne die App einfach selbst."
      },
      "standard": {
        "question": "Eine SMS meldet: Ihr Bankkonto ist gesperrt. Tippen Sie hier. Du bist nicht sicher, ob sie echt ist. Was machst du?",
        "answers": [
          "Ich öffne meine Banking-App selbst.",
          "Ich tippe auf den Link, dann sehe ich es ja.",
          "Ich rufe meine Bank unter der bekannten Nummer an."
        ],
        "feedbackWrong": [
          null,
          "Der Link kann auf eine gefälschte Seite führen, die wie deine Bank aussieht. Öffne deine Banking-App selbst.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Auch so erreichst du die echte Bank. Wichtig ist die Nummer, die du schon kennst."
        ],
        "feedbackCorrect": "Du tippst nicht auf den Link, sondern öffnest die App selbst. Dort siehst du, ob alles in Ordnung ist.",
        "remember": "Ich muss den Trick nicht erkennen – ich öffne die App einfach selbst."
      }
    },
    "Was ist Phishing?": {
      "einfach": {
        "question": "Du liest das Wort Phishing. Was ist damit gemeint?",
        "hinweis": "Das Wort kommt vom englischen Wort für Angeln. Überlege, was Betrüger damit fangen wollen.",
        "answers": [
          "Ein Trick mit falschen Nachrichten.",
          "Ein Online-Spiel, bei dem man Fische angelt.",
          "Ein Computer-Virus, der Dateien kaputt macht."
        ],
        "feedbackWrong": [
          null,
          "Phishing ist kein Spiel, sondern Betrug.",
          "Ein Virus ist ein Programm. Phishing ist eine falsche Nachricht."
        ],
        "feedbackCorrect": "Beim Phishing führt ein Link aus einer falschen Nachricht zu einer falschen Seite. Dort wollen Betrüger deine Daten stehlen."
      },
      "standard": {
        "question": "Was bedeutet Phishing?",
        "hinweis": "Das Wort kommt vom englischen Wort für Angeln. Was wollen Betrüger damit fangen?",
        "answers": [
          "Ein Trick mit gefälschten Nachrichten.",
          "Ein Onlinespiel, bei dem man Fische angelt.",
          "Ein Computervirus, der Dateien beschädigt."
        ],
        "feedbackWrong": [
          null,
          "Phishing ist kein Spiel, sondern Betrug.",
          "Ein Virus ist ein Programm – Phishing ist eine gefälschte Nachricht."
        ],
        "feedbackCorrect": "Beim Phishing führt ein Link aus einer gefälschten Nachricht auf eine gefälschte Seite. Dort wollen Betrüger deine Daten stehlen."
      }
    },
    "Eine SMS: Zahlen Sie Gebühr für Ihr Paket. Was machst du?": {
      "einfach": {
        "question": "Eine SMS sagt: Zahlen Sie eine Gebühr für Ihr Paket. Was machst du?",
        "hinweis": "Überlege: Hast du überhaupt ein Paket bestellt?",
        "answers": [
          "Ich zahle die Gebühr schnell.",
          "Ich zahle nicht und tippe nichts an.",
          "Ich schreibe eine Antwort auf die SMS."
        ],
        "feedbackWrong": [
          "Paket-SMS mit einer Geld-Forderung sind Betrug.",
          null,
          "Eine Antwort zeigt den Betrügern, dass hier jemand liest. Antworte lieber nicht."
        ],
        "feedbackCorrect": "Echte Paket-Dienste fordern kein Geld per SMS. Deshalb sind solche SMS fast immer Betrug."
      },
      "standard": {
        "question": "Eine SMS: „Zahlen Sie eine Gebühr für Ihr Paket.“ Was tust du?",
        "hinweis": "Hast du überhaupt ein Paket bestellt?",
        "answers": [
          "Die Gebühr schnell bezahlen.",
          "Nicht zahlen und nichts antippen.",
          "Auf die SMS antworten."
        ],
        "feedbackWrong": [
          "Paket-SMS mit Geldforderung sind Betrug.",
          null,
          "Eine Antwort verrät den Betrügern, dass die Nummer aktiv ist. Lieber nicht antworten."
        ],
        "feedbackCorrect": "Echte Paketdienste fordern kein Geld per SMS. Deshalb sind solche Nachrichten fast immer Betrug."
      }
    },
    "Hallo Mama, neue Nummer, brauche Geld. Was machst du?": {
      "einfach": {
        "question": "Eine Nachricht: Hallo Mama, das ist meine neue Nummer. Ich brauche Geld. Was machst du?",
        "hinweis": "Die Nummer ist neu. Überlege, woher du weißt, wer wirklich schreibt.",
        "answers": [
          "Ich schicke sofort das Geld.",
          "Ich schreibe an die neue Nummer zurück.",
          "Ich rufe die alte, bekannte Nummer an."
        ],
        "feedbackWrong": [
          "Das ist ein bekannter Trick von Betrügern.",
          "Hinter der neuen Nummer kann der Betrüger stecken.",
          null
        ],
        "feedbackCorrect": "Die neue Nummer kann von einem Betrüger sein. Über die bekannte Nummer prüfst du, wer wirklich schreibt."
      },
      "standard": {
        "question": "„Hallo Mama, das ist meine neue Nummer. Brauche dringend Geld.“ Was tust du?",
        "hinweis": "Die Nummer ist neu – woher weißt du, wer wirklich schreibt?",
        "answers": [
          "Sofort Geld überweisen.",
          "Der neuen Nummer zurückschreiben.",
          "Die alte, bekannte Nummer anrufen."
        ],
        "feedbackWrong": [
          "Das ist eine bekannte Betrugsmasche.",
          "Hinter der neuen Nummer steckt womöglich der Betrüger.",
          null
        ],
        "feedbackCorrect": "Die neue Nummer kann einem Betrüger gehören. Über die bekannte Nummer prüfst du, wer wirklich schreibt."
      }
    },
    "Fordert die echte Polizei Geld am Telefon?": {
      "einfach": {
        "question": "Will die echte Polizei am Telefon Geld von dir?",
        "hinweis": "Überlege, wie die echte Polizei arbeitet.",
        "answers": [
          "Ja, das kommt manchmal vor.",
          "Ja, wenn es um viel Geld geht.",
          "Nein, das macht sie niemals."
        ],
        "feedbackWrong": [
          "Die echte Polizei fordert am Telefon nie Geld.",
          "Auch dann nicht. Die Polizei fordert am Telefon nie Geld.",
          null
        ],
        "feedbackCorrect": "Die echte Polizei fordert am Telefon nie Geld. Ein solcher Anruf ist ein Trick von Betrügern."
      },
      "standard": {
        "question": "Verlangt die echte Polizei am Telefon Geld?",
        "hinweis": "Wie arbeitet die echte Polizei?",
        "answers": [
          "Ja, gelegentlich.",
          "Ja, bei großen Summen.",
          "Nein, niemals."
        ],
        "feedbackWrong": [
          "Die echte Polizei verlangt am Telefon nie Geld.",
          "Auch dann nicht – die Polizei verlangt am Telefon nie Geld.",
          null
        ],
        "feedbackCorrect": "Die echte Polizei verlangt am Telefon nie Geld. Solche Anrufe sind ein Trick von Betrügern."
      }
    },
    "Jemand fragt nach deinem SMS-Code. Was machst du?": {
      "einfach": {
        "question": "Jemand fragt dich nach deinem Code aus der SMS. Was machst du?",
        "hinweis": "Mit dem Code kommt man an dein Konto. Überlege, ob du ihn weggeben willst.",
        "answers": [
          "Ich lese den Code vor.",
          "Ich sage den Code nur am Telefon.",
          "Ich gebe den Code niemals weiter."
        ],
        "feedbackWrong": [
          "Mit dem Code können Betrüger dein Konto benutzen.",
          "Auch am Telefon nicht. Der Code bleibt bei dir.",
          null
        ],
        "feedbackCorrect": "Mit dem Code können Betrüger dein Konto benutzen. Deshalb sind Codes nur für dich. Echte Firmen fragen nie nach deinem Code."
      },
      "standard": {
        "question": "Jemand will deinen SMS-Code wissen. Was tust du?",
        "hinweis": "Mit dem Code kommt man an dein Konto – würdest du ihn hergeben?",
        "answers": [
          "Den Code vorlesen.",
          "Den Code nur am Telefon nennen.",
          "Den Code niemals weitergeben."
        ],
        "feedbackWrong": [
          "Mit dem Code können Betrüger auf dein Konto zugreifen.",
          "Auch am Telefon nicht – der Code bleibt bei dir.",
          null
        ],
        "feedbackCorrect": "Mit dem Code können Betrüger auf dein Konto zugreifen. Deshalb sind Codes nur für dich bestimmt. Echte Firmen fragen nie nach deinem Code."
      }
    },
    "Am Automaten klebt ein QR-Code-Aufkleber. Was ist besser?": {
      "einfach": {
        "question": "An einem Automaten klebt ein Aufkleber mit einem QR-Code. Was ist besser?",
        "hinweis": "Einen Aufkleber kann man überall hinkleben, auch über einen echten Code.",
        "answers": [
          "Ich scanne nicht und zahle mit Münzen.",
          "Ich scanne den Code sofort und bezahle damit.",
          "Ich ziehe den Aufkleber einfach ab."
        ],
        "feedbackWrong": [
          null,
          "Betrüger kleben falsche Codes über echte.",
          "Abziehen hilft dir beim Bezahlen nicht. Zahle lieber mit Münzen oder in deiner eigenen Park-App."
        ],
        "feedbackCorrect": "Betrüger kleben falsche Codes über echte. Deshalb scannst du den Aufkleber nicht. Zahle lieber mit Münzen oder in deiner eigenen Park-App."
      },
      "standard": {
        "question": "Am Automaten klebt ein Aufkleber mit QR-Code. Was ist besser?",
        "hinweis": "Ein Aufkleber lässt sich überall anbringen – auch über einem echten Code.",
        "answers": [
          "Nicht scannen und bar bezahlen.",
          "Sofort scannen und damit bezahlen.",
          "Den Aufkleber einfach abziehen."
        ],
        "feedbackWrong": [
          null,
          "Betrüger kleben gefälschte Codes über echte.",
          "Abziehen bringt dich nicht weiter – zahl lieber bar oder über die offizielle Park-App."
        ],
        "feedbackCorrect": "Betrüger kleben gefälschte Codes über echte. Deshalb scannst du den Aufkleber nicht. Zahl lieber bar oder über die offizielle Park-App."
      }
    },
    "Du bist auf einen Betrug hereingefallen. Was ist richtig?": {
      "einfach": {
        "question": "Du bist auf einen Betrug hereingefallen. Was ist jetzt richtig?",
        "hinweis": "Es ist passiert. Überlege, was jetzt am wichtigsten ist.",
        "answers": [
          "Ich schäme mich und sage niemandem etwas.",
          "Ich hole mir sofort Hilfe.",
          "Ich warte erst ein paar Tage ab."
        ],
        "feedbackWrong": [
          "Betrug ist nicht deine Schuld. Hol dir schnell Hilfe.",
          null,
          "Wenn du wartest, wird es schwerer. Hol dir sofort Hilfe."
        ],
        "feedbackCorrect": "Betrug kann jedem passieren, und du musst dich nicht schämen. Schnelle Hilfe ist wichtig, denn dann kannst du zum Beispiel deine Karte sperren lassen."
      },
      "standard": {
        "question": "Du merkst: Du bist betrogen worden. Was ist richtig?",
        "hinweis": "Es ist passiert – was ist jetzt das Wichtigste?",
        "answers": [
          "Mich schämen und schweigen.",
          "Mir sofort Hilfe holen.",
          "Erst ein paar Tage abwarten."
        ],
        "feedbackWrong": [
          "Betrug ist nicht deine Schuld – hol dir schnell Hilfe.",
          null,
          "Abwarten macht es schwerer. Hol dir sofort Hilfe."
        ],
        "feedbackCorrect": "Betrug kann jedem passieren – du musst dich nicht schämen. Schnelle Hilfe ist wichtig, weil du dann zum Beispiel deine Karte sperren lassen kannst."
      }
    },
    "Welche Nummer sperrt deine Bank-Karte?": {
      "einfach": {
        "question": "Mit welcher Nummer kannst du deine Bank-Karte sperren lassen?",
        "hinweis": "Diese Nummer gilt in ganz Deutschland. Sie steht in diesem Thema.",
        "answers": [
          "110 110",
          "112 112",
          "116 116"
        ],
        "feedbackWrong": [
          "Das ist nicht die Nummer zum Sperren. Der Sperr-Notruf ist die 116 116.",
          "Die 112 ist für Notfälle. Karten sperrt man über die 116 116.",
          null
        ],
        "feedbackCorrect": "Der Sperr-Notruf ist die 116 116. Manche Kredit-Karten sperrst du aber direkt bei deiner Bank."
      },
      "standard": {
        "question": "Unter welcher Nummer lässt du deine Bankkarte sperren?",
        "hinweis": "Die Nummer gilt bundesweit und steht in diesem Thema.",
        "answers": [
          "110 110",
          "112 112",
          "116 116"
        ],
        "feedbackWrong": [
          "Das ist keine Sperrnummer – der Sperr-Notruf ist die 116 116.",
          "Die 112 ist für Notfälle – Karten sperrt der Sperr-Notruf 116 116.",
          null
        ],
        "feedbackCorrect": "Der Sperr-Notruf ist die 116 116. Einige Kreditkarten sperrst du allerdings direkt bei deiner Bank."
      }
    },
    "Eine SMS hat einen Link von einer fremden Nummer. Was machst du?": {
      "einfach": {
        "question": "Du bekommst eine SMS von einer fremden Nummer. Darin ist ein Link. Was machst du?",
        "hinweis": "Du kennst die Nummer nicht. Überlege, was das für den Link bedeutet.",
        "answers": [
          "Ich öffne den Link nicht.",
          "Ich tippe schnell auf den Link.",
          "Ich schicke den Link an Freunde."
        ],
        "feedbackWrong": [
          null,
          "Links von Fremden können gefährlich sein.",
          "Dann sind auch deine Freunde in Gefahr."
        ],
        "feedbackCorrect": "Ein Link von einer fremden Nummer kann zu einer falschen Seite führen. Deshalb öffnest du ihn nicht."
      },
      "standard": {
        "question": "Eine SMS von einer unbekannten Nummer enthält einen Link. Was tust du?",
        "hinweis": "Du kennst die Nummer nicht – was heißt das für den Link?",
        "answers": [
          "Den Link nicht öffnen.",
          "Schnell auf den Link tippen.",
          "Den Link an Freunde weiterleiten."
        ],
        "feedbackWrong": [
          null,
          "Links von Unbekannten können gefährlich sein.",
          "Dann bringst du auch deine Freunde in Gefahr."
        ],
        "feedbackCorrect": "Ein Link von einer unbekannten Nummer kann auf eine gefälschte Seite führen. Deshalb öffnest du ihn nicht."
      }
    },
    "Jemand aus dem Internet schreibt dir liebe Worte. Die Person bittet um Geld. Ihr habt euch nie getroffen. Was ist richtig?": {
      "einfach": {
        "question": "Jemand aus dem Internet schreibt dir liebe Worte. Ihr habt euch noch nie getroffen. Jetzt bittet die Person um Geld. Was ist richtig?",
        "hinweis": "Denk an das Warnzeichen: Die Person will Geld, aber kein Treffen.",
        "answers": [
          "Ich schicke kein Geld und rede mit einer vertrauten Person.",
          "Ich schicke schnell Geld, damit die Person nicht traurig ist.",
          "Ich schicke meine Bank-Daten, damit sie selbst Geld holen kann."
        ],
        "feedbackWrong": [
          null,
          "Wer dich wirklich mag, bittet dich nicht um Geld. Schick kein Geld.",
          "Deine Bank-Daten gibst du nie weiter, auch nicht aus Liebe."
        ],
        "feedbackCorrect": "Fotos und Stimmen können gefälscht sein, deshalb weißt du nicht, wer wirklich schreibt. Du schickst kein Geld und holst dir Unterstützung."
      },
      "standard": {
        "question": "Eine Person, die du nur aus dem Internet kennst, schreibt dir liebe Nachrichten. Getroffen habt ihr euch nie. Jetzt bittet sie um Geld. Was ist richtig?",
        "hinweis": "Denk an das Warnzeichen: Geld ja, Treffen nein.",
        "answers": [
          "Kein Geld schicken und mit einer Vertrauensperson sprechen.",
          "Schnell Geld schicken, damit die Person nicht traurig ist.",
          "Die eigenen Bankdaten schicken, damit sie selbst Geld abhebt."
        ],
        "feedbackWrong": [
          null,
          "Wer dich wirklich mag, bittet dich nicht um Geld. Schick keins.",
          "Bankdaten gibst du nie weiter – auch nicht aus Liebe."
        ],
        "feedbackCorrect": "Fotos und Stimmen können gefälscht sein – du weißt also nicht, wer wirklich schreibt. Du schickst kein Geld und holst dir Unterstützung."
      }
    }
  },
  "facebook": {
    "facebook/quiz/kern-profil-sichtbarkeit": {
      "einfach": {
        "question": "Dein Geburtstag steht in deinem Facebook-Profil. Die Einstellung dafür ist „Öffentlich“. Du möchtest ihn nur deinen Facebook-Freunden zeigen. Welche Einstellung wählst du?",
        "answers": [
          "Ich lasse „Öffentlich“ stehen und ändere mein Profilbild.",
          "Ich stelle für den Geburtstag „Freunde“ ein.",
          "Ich lasse „Öffentlich“ stehen und kürze meinen Namen."
        ],
        "feedbackCorrect": "Du stellst für den Geburtstag „Freunde“ ein. So bleibt diese Angabe nicht für alle sichtbar.",
        "feedbackWrong": [
          "Ein anderes Profilbild ändert nicht, wer deinen Geburtstag sieht. Dafür musst du die Einstellung für diese Angabe ändern.",
          null,
          "Auch ein kürzerer Name ändert die Sichtbarkeit vom Geburtstag nicht. Stelle für diese Angabe „Freunde“ ein."
        ],
        "hinweis": "Überlege, welche Einstellung zu deinem Wunsch passt.",
        "remember": "Ich entscheide, wer meine Daten sehen darf."
      },
      "standard": {
        "question": "In deinem Facebook-Profil ist dein Geburtstag als „Öffentlich“ eingestellt. Du möchtest ihn nur deinen Facebook-Freunden zeigen. Welche Einstellung wählst du dafür?",
        "answers": [
          "Ich lasse „Öffentlich“ eingestellt und ändere mein Profilbild.",
          "Ich stelle für den Geburtstag „Freunde“ ein.",
          "Ich lasse „Öffentlich“ eingestellt und kürze meinen Namen."
        ],
        "feedbackCorrect": "Mit „Freunde“ schränkst du die Sichtbarkeit dieser Angabe ein. Du änderst die Einstellung für den Geburtstag, statt nur das Aussehen deines Profils.",
        "feedbackWrong": [
          "Ein anderes Profilbild ändert die Sichtbarkeit deines Geburtstags nicht. Ändere die Einstellung für diese Angabe.",
          null,
          "Dein Geburtstag bleibt mit „Öffentlich“ sichtbar, auch wenn du den Namen kürzt. Ändere die Einstellung für den Geburtstag."
        ],
        "hinweis": "Welche Einstellung begrenzt, wer diese Angabe sehen kann?",
        "remember": "Ich entscheide, wer meine Angaben sehen kann."
      }
    },
    "facebook/quiz/kern-unbekannte-anfrage": {
      "einfach": {
        "question": "Du bekommst auf Facebook eine Freundschafts-Anfrage. Das Profil zeigt ein Foto, aber du kennst die Person nicht. Was machst du?",
        "answers": [
          "Ich nehme sie an, weil das Foto freundlich aussieht.",
          "Ich nehme sie erst einmal an und entscheide später.",
          "Ich lehne die Anfrage ab."
        ],
        "feedbackCorrect": "Du kennst die Person nicht und lehnst die Anfrage ab. Ein freundlich wirkendes Foto ist kein Grund, die Anfrage anzunehmen.",
        "feedbackWrong": [
          "Das Foto zeigt dir nicht, ob du der Person vertrauen kannst. Wenn du sie nicht kennst, nimmst du die Anfrage nicht an.",
          "Mit dem Annehmen machst du die Person bereits zu deinem Facebook-Freund. Lehne die Anfrage von der unbekannten Person ab.",
          null
        ],
        "hinweis": "Denk daran, ob du die Person wirklich kennst.",
        "remember": "Anfragen von Unbekannten lehnst du ab."
      },
      "standard": {
        "question": "Ein Profil mit Foto schickt dir auf Facebook eine Freundschaftsanfrage. Du kennst die Person nicht. Wie reagierst du?",
        "answers": [
          "Ich nehme an, weil das Foto freundlich wirkt.",
          "Ich nehme vorläufig an und entscheide später.",
          "Ich lehne die Anfrage ab."
        ],
        "feedbackCorrect": "Du lehnst die Anfrage ab. Das Foto allein hilft dir nicht, die Person einzuschätzen, und du musst unbekannte Personen nicht als Freunde hinzufügen.",
        "feedbackWrong": [
          "Ein freundlich wirkendes Foto ist kein verlässlicher Grund, jemanden als Freund hinzuzufügen, den du nicht kennst.",
          "Vorläufig annehmen heißt bereits, die Person als Facebook-Freund hinzuzufügen. Lehne die unbekannte Anfrage ab.",
          null
        ],
        "hinweis": "Kennst du die Person hinter dem Profil?",
        "remember": "Anfragen von Unbekannten ablehnen."
      }
    },
    "facebook/quiz/kern-geld-link": {
      "einfach": {
        "question": "Ein fremdes Profil schreibt dir auf Facebook. Du kennst die Person nicht. Die Nachricht lautet: Kannst du mir 20 Euro leihen? Über diesen Link geht es. Wie reagierst du?",
        "answers": [
          "Ich öffne den Link nicht und sende auch kein Geld.",
          "Ich öffne den Link, sende aber noch kein Geld.",
          "Ich sende erst 5 Euro und warte auf eine Antwort."
        ],
        "feedbackCorrect": "Der Link kann auf eine falsche Seite führen, deshalb öffnest du ihn nicht. Der unbekannten Person sendest du kein Geld. Wenn du unsicher bist, kannst du die Nachricht auch einer vertrauten Person zeigen.",
        "feedbackWrong": [
          null,
          "Auch ohne Zahlung kann dich der Link auf eine falsche Seite führen. Öffne ihn nicht und sende kein Geld.",
          "Eine kleine Zahlung macht die Anfrage nicht sicherer. Du kennst die Person nicht und sendest ihr kein Geld."
        ],
        "hinweis": "Du kennst die Person nicht. Überlege, ob du für die Nachricht etwas öffnen oder bezahlen musst.",
        "remember": "Auf fremde Links tippe ich nicht."
      },
      "standard": {
        "question": "Ein unbekanntes Profil bittet dich auf Facebook um 20 Euro: Kannst du mir das Geld leihen? Über diesen Link geht es. Du kennst die Person nicht. Was tust du?",
        "answers": [
          "Ich öffne den Link nicht und sende kein Geld.",
          "Ich öffne den Link, ohne gleich Geld zu senden.",
          "Ich sende zuerst 5 Euro und warte auf eine Antwort."
        ],
        "feedbackCorrect": "Der Link kann auf eine gefälschte Seite führen, deshalb öffnest du ihn nicht. Einer unbekannten Person sendest du kein Geld. Bei Unsicherheit kannst du die Nachricht auch einer vertrauten Person zeigen und gemeinsam einordnen.",
        "feedbackWrong": [
          null,
          "Der Link kann auf eine gefälschte Seite führen, auch wenn du zunächst nichts bezahlst. Öffne ihn nicht.",
          "Auch ein kleiner Betrag macht die Anfrage nicht sicher. Sende unbekannten Personen aus solchen Nachrichten kein Geld."
        ],
        "hinweis": "Du bist zu keiner Reaktion verpflichtet. Prüfe, ob du die Person kennst und was die Nachricht von dir verlangt.",
        "remember": "Fremde oder verdächtige Links öffne ich nicht."
      }
    },
    "facebook/lang/Profil": {
      "einfach": {
        "question": "Facebook fragt dich, ob du deine Telefon-Nummer ins Profil schreiben willst. Was machst du?",
        "answers": [
          "Ich trage sie ein, weil Facebook danach fragt.",
          "Ich trage sie ein, damit alte Freunde mich finden.",
          "Ich lasse das Feld leer."
        ],
        "feedbackWrong": [
          "Facebook fragt nach vielen Angaben, aber du musst nicht alles ausfüllen. Deine Telefon-Nummer ist privat.",
          "Alte Freunde finden dich über deinen Namen. Deine Nummer können dann vielleicht auch fremde Menschen sehen.",
          null
        ],
        "feedbackCorrect": "Das Feld ist freiwillig, und deine Freunde können dich nach der Nummer fragen.",
        "remember": "Ich zeige nicht alles in meinem Profil."
      },
      "standard": {
        "question": "Facebook schlägt dir vor, deine Telefonnummer ins Profil einzutragen. Was machst du?",
        "answers": [
          "Ich trage sie ein, Facebook fragt ja danach.",
          "Ich trage sie ein, damit alte Freunde mich finden.",
          "Ich lasse das Feld leer."
        ],
        "feedbackWrong": [
          "Facebook fragt viele Angaben ab, aber du musst nicht alles ausfüllen. Deine Telefonnummer ist privat.",
          "Alte Freunde finden dich über deinen Namen. Deine Nummer sehen dann womöglich auch Fremde.",
          null
        ],
        "feedbackCorrect": "Die Angabe ist freiwillig, und Freunde können dich einfach nach der Nummer fragen.",
        "remember": "Ich überlege genau, welche Angaben in meinem Profil öffentlich sichtbar sind."
      }
    },
    "facebook/lang/Beitrag schreiben": {
      "einfach": {
        "question": "Du willst posten: Ab morgen bin ich zwei Wochen im Urlaub. Was machst du vorher?",
        "answers": [
          "Ich schaue nach, wer den Beitrag sehen kann.",
          "Nichts, ich poste gleich, damit sich alle mit mir freuen.",
          "Ich poste erst nach dem Urlaub und zeige dann Fotos."
        ],
        "feedbackWrong": [
          null,
          "Wenn der Beitrag öffentlich ist, können ihn auch fremde Menschen lesen. Dann wissen sie, dass deine Wohnung zwei Wochen leer ist.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann weiß vorher niemand, dass deine Wohnung leer ist, und du kannst gleich schöne Fotos zeigen."
        ],
        "feedbackCorrect": "Wenn der Beitrag öffentlich ist, können auch fremde Menschen lesen, dass deine Wohnung leer ist. Deshalb wählst du Freunde aus.",
        "remember": "Ich prüfe, wer meinen Beitrag sehen kann."
      },
      "standard": {
        "question": "Du möchtest posten: Ab morgen bin ich zwei Wochen im Urlaub. Was machst du vorher?",
        "answers": [
          "Ich prüfe, wer den Beitrag sehen kann.",
          "Nichts, ich poste sofort – alle sollen sich mitfreuen.",
          "Ich poste erst nach dem Urlaub, dann mit Fotos."
        ],
        "feedbackWrong": [
          null,
          "Einen öffentlichen Beitrag können auch Fremde lesen. Sie wissen dann, dass deine Wohnung zwei Wochen leer steht.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "So erfährt vorher niemand, dass deine Wohnung leer steht, und du kannst gleich Fotos zeigen."
        ],
        "feedbackCorrect": "Ist der Beitrag öffentlich, können auch Fremde lesen, dass deine Wohnung leer steht. Deshalb wählst du Freunde als Zielgruppe.",
        "remember": "Vor dem Posten prüfe ich, wer den Beitrag sehen kann."
      }
    },
    "facebook/lang/Wer darf etwas sehen?": {
      "einfach": {
        "question": "Bei einem alten Beitrag von dir steht: Öffentlich. Das möchtest du nicht mehr. Was machst du?",
        "answers": [
          "Nichts, weil ich alte Beiträge nicht mehr ändern kann.",
          "Ich ändere die Einstellung beim Beitrag auf Freunde.",
          "Ich lösche den Beitrag."
        ],
        "feedbackWrong": [
          "Das geht doch: Du kannst auch alte Beiträge ändern. Stell beim Beitrag Freunde ein oder lösch den Beitrag.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann sieht den Beitrag niemand mehr."
        ],
        "feedbackCorrect": "Du kannst die Einstellung auch später noch ändern, und jetzt sehen nur deine Freunde den Beitrag.",
        "remember": "Ich prüfe meine Einstellungen."
      },
      "standard": {
        "question": "Ein alter Beitrag von dir ist öffentlich sichtbar. Das möchtest du nicht mehr. Was machst du?",
        "answers": [
          "Nichts, alte Beiträge lassen sich nicht mehr ändern.",
          "Ich stelle die Zielgruppe des Beitrags auf Freunde.",
          "Ich lösche den Beitrag."
        ],
        "feedbackWrong": [
          "Doch, auch alte Beiträge lassen sich ändern. Stell die Zielgruppe auf Freunde oder lösch den Beitrag.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann sieht den Beitrag niemand mehr."
        ],
        "feedbackCorrect": "Die Zielgruppe lässt sich auch nachträglich ändern. Jetzt sehen nur noch deine Freunde den Beitrag.",
        "remember": "Ich prüfe meine Privatsphäre-Einstellungen."
      }
    },
    "facebook/lang/Freundschafts-Anfragen": {
      "einfach": {
        "question": "Du bekommst eine Freundschafts-Anfrage von deinem Kollegen Tom, aber ihr seid bei Facebook schon lange befreundet. Was machst du?",
        "answers": [
          "Ich nehme die Anfrage erst einmal nicht an.",
          "Ich nehme an, weil Tom vielleicht ein neues Profil hat.",
          "Ich frage Tom selbst, ob das sein Profil ist."
        ],
        "feedbackWrong": [
          null,
          "Das kann stimmen. Manche Betrüger bauen aber ein Profil mit Toms Namen und Foto nach und fragen dann seine Freunde nach Geld.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann weißt du es sicher. Am besten fragst du Tom bei der Arbeit oder am Telefon."
        ],
        "feedbackCorrect": "Manche Betrüger bauen ein Profil nach, mit dem Namen und dem Foto von Tom. Die Anfrage kann warten.",
        "remember": "Ich nehme unbekannte Anfragen nicht sofort an."
      },
      "standard": {
        "question": "Du bekommst eine Freundschaftsanfrage von deinem Kollegen Tom, obwohl ihr auf Facebook längst befreundet seid. Was machst du?",
        "answers": [
          "Ich nehme die Anfrage vorerst nicht an.",
          "Ich nehme an, Tom hat wohl ein neues Profil.",
          "Ich frage Tom selbst, ob das sein Profil ist."
        ],
        "feedbackWrong": [
          null,
          "Das kann stimmen. Manche Betrüger kopieren aber Toms Profil mit Namen und Foto und bitten dann seine Freunde um Geld.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann weißt du es sicher. Am besten fragst du ihn bei der Arbeit oder am Telefon."
        ],
        "feedbackCorrect": "Manche Betrüger kopieren ein Profil mit Namen und Foto. Die Anfrage kann warten.",
        "remember": "Unbekannte Anfragen nehme ich nicht sofort an."
      }
    },
    "facebook/lang/Kommentare schreiben": {
      "einfach": {
        "question": "Ein Bekannter postet ein Foto von seiner neuen Frisur, und du findest, dass sie komisch aussieht. Was machst du?",
        "answers": [
          "Ich schreibe ehrlich, dass ihm die Frisur nicht steht.",
          "Ich schreibe nichts dazu.",
          "Ich schicke einen Lach-Smiley."
        ],
        "feedbackWrong": [
          "Ehrlich sein ist gut, aber den Kommentar lesen viele Menschen. Das kann deinen Bekannten verletzen.",
          null,
          "Dein Bekannter weiß dann nicht, ob du mit ihm lachst oder über ihn. Auch das kann verletzen."
        ],
        "feedbackCorrect": "Du musst nicht zu allem etwas schreiben, und so verletzt du niemanden.",
        "remember": "Ich schreibe respektvoll."
      },
      "standard": {
        "question": "Ein Bekannter postet ein Foto seiner neuen Frisur. Du findest, sie sieht komisch aus. Was machst du?",
        "answers": [
          "Ich schreibe ehrlich, dass sie ihm nicht steht.",
          "Ich schreibe nichts dazu.",
          "Ich reagiere mit einem Lach-Smiley."
        ],
        "feedbackWrong": [
          "Ehrlichkeit ist gut, aber den Kommentar lesen viele mit. Das kann deinen Bekannten verletzen.",
          null,
          "Dein Bekannter weiß dann nicht, ob du mit ihm lachst oder über ihn. Auch das kann verletzen."
        ],
        "feedbackCorrect": "Du musst nicht alles kommentieren, und so verletzt du niemanden.",
        "remember": "In Kommentaren bleibe ich respektvoll."
      }
    },
    "facebook/lang/Beleidigungen": {
      "einfach": {
        "question": "Unter deinem Foto schreibt jemand: Du bist so dumm. Das macht dich wütend. Was machst du?",
        "answers": [
          "Ich mache ein Bildschirm-Foto und lösche dann den Kommentar.",
          "Ich schreibe zurück, dass er selber dumm ist, weil ich mir das nicht gefallen lasse.",
          "Ich hole mir erst Unterstützung und rede mit jemandem darüber."
        ],
        "feedbackWrong": [
          null,
          "Dann geht der Streit weiter, und alle lesen mit. Mach lieber ein Bildschirm-Foto und lösch dann den Kommentar.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Reden hilft, wenn du wütend bist. Danach entscheidest du in Ruhe, ob du ein Bildschirm-Foto machst, löschst, blockierst oder meldest."
        ],
        "feedbackCorrect": "Das Bildschirm-Foto ist dein Beweis. Unter deinem eigenen Beitrag darfst du Kommentare löschen, und du kannst die Person auch blockieren.",
        "remember": "Ich hole Unterstützung bei Beleidigungen."
      },
      "standard": {
        "question": "Unter deinem Foto kommentiert jemand: Du bist so dumm. Das macht dich wütend. Was machst du?",
        "answers": [
          "Ich mache einen Screenshot und lösche dann den Kommentar.",
          "Ich schreibe zurück: Selber dumm. Das lasse ich mir nicht gefallen.",
          "Ich hole mir erst Unterstützung und rede mit jemandem darüber."
        ],
        "feedbackWrong": [
          null,
          "Dann geht der Streit weiter, und alle lesen mit. Mach lieber einen Screenshot und lösch dann den Kommentar.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Reden hilft gegen die Wut. Danach entscheidest du in Ruhe, ob du einen Screenshot machst, löschst, blockierst oder meldest."
        ],
        "feedbackCorrect": "Der Screenshot ist dein Beweis. Unter deinen eigenen Beiträgen darfst du Kommentare löschen, und du kannst die Person auch blockieren.",
        "remember": "Bei Beleidigungen hole ich Unterstützung."
      }
    },
    "facebook/lang/Fotos mit anderen Personen": {
      "einfach": {
        "question": "Du hast ein Foto vom Sommer-Fest, auf dem du mit drei Kollegen zu sehen bist. Du willst es posten. Was machst du?",
        "answers": [
          "Ich poste es und stelle ein, dass nur Freunde es sehen.",
          "Ich schneide das Foto so zu, dass nur ich zu sehen bin.",
          "Ich frage die drei vorher."
        ],
        "feedbackWrong": [
          "Auch dann sehen viele Menschen das Foto. Deine Kollegen dürfen mitentscheiden, weil es auch ihr Bild ist.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Dann ist niemand anderes auf dem Foto, und du musst niemanden fragen.",
          null
        ],
        "feedbackCorrect": "Es ist auch ihr Bild, deshalb dürfen sie mitentscheiden.",
        "remember": "Ich frage andere, bevor ich ihr Foto poste."
      },
      "standard": {
        "question": "Du hast ein Foto vom Sommerfest, auf dem du mit drei Kollegen zu sehen bist, und möchtest es posten. Was machst du?",
        "answers": [
          "Ich poste es und stelle die Zielgruppe auf Freunde.",
          "Ich schneide es so zu, dass nur ich zu sehen bin.",
          "Ich frage die drei vorher."
        ],
        "feedbackWrong": [
          "Auch dann sehen es viele. Deine Kollegen entscheiden mit, denn es ist auch ihr Bild.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Dann ist niemand anderes mehr auf dem Foto, und du musst niemanden fragen.",
          null
        ],
        "feedbackCorrect": "Es ist auch ihr Bild, deshalb entscheiden sie mit.",
        "remember": "Bevor ich ein Foto mit anderen poste, frage ich sie."
      }
    },
    "facebook/lang/Was kann ich tun?": {
      "einfach": {
        "question": "Eine fremde Person schreibt dir gemeine Dinge. Was machst du?",
        "answers": [
          "Ich schreibe genauso gemein zurück, damit es endlich aufhört.",
          "Ich mache ein Bildschirm-Foto und blockiere dann die Person.",
          "Ich mache ein Bildschirm-Foto und melde dann die Person."
        ],
        "feedbackWrong": [
          "Wenn du zurückschreibst, wird es oft schlimmer. Mach lieber ein Bildschirm-Foto und blockiere dann die Person.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Auch das ist gut. Das Bildschirm-Foto ist dein Beweis, und Facebook prüft dann die Nachrichten."
        ],
        "feedbackCorrect": "Das Bildschirm-Foto ist dein Beweis. Und wenn du die Person blockierst, kann sie dir keine Nachrichten mehr schicken.",
        "remember": "Ich blockiere, ich melde und ich hole Hilfe."
      },
      "standard": {
        "question": "Eine fremde Person schreibt dir gemeine Nachrichten. Wie reagierst du?",
        "answers": [
          "Ich schreibe genauso gemein zurück, damit es endlich aufhört.",
          "Ich mache einen Screenshot und blockiere dann die Person.",
          "Ich mache einen Screenshot und melde dann die Person."
        ],
        "feedbackWrong": [
          "Zurückschreiben macht es oft schlimmer. Sichere lieber einen Screenshot als Beweis und blockiere dann die Person.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Auch das ist gut. Der Screenshot ist dein Beweis, und Facebook prüft dann die Nachrichten."
        ],
        "feedbackCorrect": "Der Screenshot ist dein Beweis. Nach dem Blockieren kann dir die Person nicht mehr schreiben.",
        "remember": "Ich blockiere, melde und hole mir Hilfe."
      }
    },
    "facebook/kurz/Dein Facebook-Profil": {
      "einfach": {
        "question": "In deinem Facebook-Profil stehen private Angaben, zum Beispiel dein Wohn-Ort. Wer soll diese Angaben sehen?",
        "answers": [
          "Alle, weil ich nichts zu verstecken habe.",
          "Nur meine Freunde, und das stelle ich so ein.",
          "Niemand, deshalb lösche ich die Angabe."
        ],
        "feedbackWrong": [
          "Dann sehen auch fremde Menschen deine privaten Angaben. Das hat nichts mit Verstecken zu tun, denn du bestimmst selbst, wer was über dich weiß.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann sieht die Angabe niemand mehr. Du musst nicht alles ins Profil schreiben."
        ],
        "feedbackCorrect": "Deine privaten Angaben zeigst du nur deinen Freunden. Deinen Namen, dein aktuelles Profil-Bild und dein Titel-Bild sehen aber alle.",
        "remember": "Meine privaten Angaben zeige ich nur meinen Freunden."
      },
      "standard": {
        "question": "In deinem Facebook-Profil stehen private Angaben, etwa dein Wohnort. Wer soll sie sehen?",
        "answers": [
          "Alle, ich habe ja nichts zu verbergen.",
          "Nur meine Freunde, das stelle ich ein.",
          "Niemand, ich lösche die Angabe."
        ],
        "feedbackWrong": [
          "Dann sehen auch Fremde deine privaten Angaben. Mit Verbergen hat das nichts zu tun: Du bestimmst selbst, wer was über dich weiß.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Dann sieht die Angabe niemand mehr. Du musst nicht alles ins Profil schreiben."
        ],
        "feedbackCorrect": "Private Angaben gibst du nur für Freunde frei. Name, aktuelles Profilbild und Titelbild bleiben bei Facebook öffentlich.",
        "remember": "Private Angaben gebe ich nur für Freunde frei."
      }
    },
    "facebook/kurz/Unbekannte Personen": {
      "einfach": {
        "question": "Bei Facebook bekommst du eine Freundschafts-Anfrage von Jonas Weber. Ihr habt zwei gemeinsame Freunde, aber du kennst Jonas nicht. Was machst du?",
        "answers": [
          "Ich nehme an, weil wir gemeinsame Freunde haben.",
          "Ich frage erst einen der gemeinsamen Freunde nach Jonas.",
          "Ich nehme die Anfrage nicht an."
        ],
        "feedbackWrong": [
          "Gemeinsame Freunde sagen wenig, denn vielleicht kennen deine Freunde Jonas auch nicht. Manche falschen Profile sammeln so viele Freunde wie möglich.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Danach weißt du mehr über Jonas. Die Anfrage kann so lange warten.",
          null
        ],
        "feedbackCorrect": "Du kennst Jonas nicht, und gemeinsame Freunde sagen wenig über ihn. Du musst die Anfrage nicht annehmen.",
        "remember": "Unbekannte Anfragen lehne ich ab."
      },
      "standard": {
        "question": "Auf Facebook schickt dir Jonas Weber eine Freundschaftsanfrage. Ihr habt zwei gemeinsame Freunde, aber du kennst ihn nicht. Was machst du?",
        "answers": [
          "Ich nehme an, wir haben ja gemeinsame Freunde.",
          "Ich frage erst einen der gemeinsamen Freunde nach ihm.",
          "Ich nehme die Anfrage nicht an."
        ],
        "feedbackWrong": [
          "Gemeinsame Freunde sagen wenig aus: Vielleicht kennen sie Jonas selbst nicht. Manche Fake-Profile sammeln möglichst viele Kontakte.",
          null,
          null
        ],
        "feedbackAuch": [
          null,
          "Danach weißt du mehr über Jonas. Die Anfrage kann so lange warten.",
          null
        ],
        "feedbackCorrect": "Du kennst Jonas nicht, und gemeinsame Freunde sagen wenig über ihn. Du musst die Anfrage nicht annehmen.",
        "remember": "Anfragen von Unbekannten lehne ich ab."
      }
    },
    "facebook/kurz/Komische Nachrichten": {
      "einfach": {
        "question": "Dein Facebook-Freund Markus schickt dir eine Nachricht mit einem Link: Bist du das in dem Video? Schau mal. Was machst du?",
        "answers": [
          "Ich tippe nicht auf den Link.",
          "Ich tippe auf den Link, weil ich das Video sehen will.",
          "Ich tippe nicht auf den Link und rufe Markus an."
        ],
        "feedbackWrong": [
          null,
          "Die Nachricht soll dich neugierig machen. Der Link führt oft auf eine falsche Seite, auf der jemand dein Passwort haben will.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Der Link bleibt zu, und am Telefon merkst du, ob Markus das wirklich geschrieben hat."
        ],
        "feedbackCorrect": "So eine Nachricht kommt oft von einem gestohlenen Konto. Wenn der Link zu bleibt, bleibt auch dein Passwort bei dir.",
        "remember": "Fremde Links tippe ich nicht an."
      },
      "standard": {
        "question": "Dein Facebook-Freund Markus schickt dir einen Link und schreibt: Bist du das in dem Video? Schau mal. Was machst du?",
        "answers": [
          "Ich öffne den Link nicht.",
          "Ich öffne den Link, ich will das Video sehen.",
          "Ich öffne ihn nicht und rufe Markus an."
        ],
        "feedbackWrong": [
          null,
          "Die Nachricht soll dich neugierig machen. Der Link führt oft auf eine gefälschte Seite, die dein Passwort abgreifen soll.",
          null
        ],
        "feedbackAuch": [
          null,
          null,
          "Der Link bleibt zu, und am Telefon merkst du, ob Markus das wirklich geschrieben hat."
        ],
        "feedbackCorrect": "Solche Nachrichten kommen oft von einem gekaperten Konto. Bleibt der Link zu, bleibt auch dein Passwort bei dir.",
        "remember": "Fremde Links öffne ich nicht."
      }
    },
    "Du willst ein Foto von deiner neuen Wohnung posten. Woran denkst du zuerst?": {
      "einfach": {
        "question": "Du bist umgezogen und willst bei Facebook ein Foto von deiner neuen Wohnung posten. Woran denkst du zuerst?",
        "hinweis": "Überlege, was ein Foto von zu Hause über dich zeigen kann.",
        "answers": [
          "Ob die Farben auf dem Foto schön sind.",
          "Wie viele Likes ich wohl bekomme.",
          "Wer das Foto sehen kann."
        ],
        "feedbackWrong": [
          "Schöne Farben schützen dich nicht. Überlege zuerst, wer das Foto sehen kann.",
          "Die Zahl der Likes sagt nichts über deine Sicherheit. Wichtig ist, wer das Foto sehen kann.",
          null
        ],
        "feedbackCorrect": "Du prüfst zuerst, wer das Foto sehen kann, denn ein Foto von zu Hause zeigt oft mehr, als man denkt."
      },
      "standard": {
        "question": "Du bist umgezogen und möchtest ein Foto deiner neuen Wohnung auf Facebook posten. Woran denkst du zuerst?",
        "hinweis": "Ein Foto von zu Hause verrät oft mehr als nur die Einrichtung.",
        "answers": [
          "Ob die Farben gut wirken.",
          "Wie viele Likes es bekommt.",
          "Wer das Foto sehen kann."
        ],
        "feedbackWrong": [
          "Schöne Farben schützen dich nicht. Prüfe zuerst, wer das Foto sehen kann.",
          "Likes sagen nichts über deine Sicherheit aus. Entscheidend ist, wer das Foto sieht.",
          null
        ],
        "feedbackCorrect": "Du prüfst zuerst, wer das Foto sehen kann – Bilder von zu Hause zeigen oft mehr, als man denkt."
      }
    },
    "Eine Anfrage kommt von einem Profil ohne Foto. Was machst du?": {
      "einfach": {
        "question": "Du bekommst eine Freundschafts-Anfrage. Das Profil hat kein Foto. Was machst du?",
        "hinweis": "Überlege, was du über dieses Profil wirklich weißt.",
        "answers": [
          "Ich nehme die Anfrage gleich an.",
          "Ich schreibe der Person erst eine Nachricht.",
          "Ich schaue mir das Profil genau an."
        ],
        "feedbackWrong": [
          "Ohne Foto weißt du kaum etwas über die Person. Schau dir das Profil erst genau an.",
          "Wenn du schreibst, merkt die Person, dass du antwortest. Schau dir lieber zuerst das Profil an.",
          null
        ],
        "feedbackCorrect": "Fremde Profile können falsch sein. Deshalb schaust du dir das Profil erst genau an. Wenn du die Person nicht kennst, lehnst du die Anfrage ab."
      },
      "standard": {
        "question": "Du bekommst eine Freundschaftsanfrage von einem Profil ohne Foto. Wie gehst du vor?",
        "hinweis": "Was weißt du eigentlich über dieses Profil?",
        "answers": [
          "Ich nehme die Anfrage direkt an.",
          "Ich schreibe der Person zuerst.",
          "Ich sehe mir das Profil genau an."
        ],
        "feedbackWrong": [
          "Ein Profil ohne Foto verrät dir kaum etwas über die Person. Sieh es dir erst genau an.",
          "Mit einer Nachricht zeigst du, dass hier jemand reagiert. Sieh dir lieber zuerst das Profil an.",
          null
        ],
        "feedbackCorrect": "Fremde Profile können gefälscht sein. Deshalb siehst du dir das Profil erst genau an und lehnst die Anfrage ab, wenn du die Person nicht kennst."
      }
    },
    "Jemand schreibt etwas. Du findest es dumm. Wie antwortest du?": {
      "einfach": {
        "question": "Jemand schreibt bei Facebook einen Kommentar. Du findest ihn dumm. Wie antwortest du?",
        "hinweis": "Überlege, was du selbst gern lesen würdest.",
        "answers": [
          "Ich antworte freundlich und sachlich.",
          "Ich schreibe etwas Gemeines zurück.",
          "Ich mache mich über den Kommentar lustig."
        ],
        "feedbackWrong": [
          null,
          "Gemeine Worte verletzen. Bleib lieber freundlich, auch wenn du anderer Meinung bist.",
          "Auch Spott kann verletzen. Bleib lieber freundlich."
        ],
        "feedbackCorrect": "Kommentare können andere Menschen verletzen. Wenn du freundlich bleibst, wird der Streit nicht größer. Du musst aber auch nicht auf jeden Kommentar antworten."
      },
      "standard": {
        "question": "Unter einem Beitrag schreibt jemand einen Kommentar, den du dumm findest. Wie antwortest du?",
        "hinweis": "Was würdest du selbst gern lesen?",
        "answers": [
          "Ich bleibe freundlich und sachlich.",
          "Ich schreibe etwas Gemeines zurück.",
          "Ich mache mich darüber lustig."
        ],
        "feedbackWrong": [
          null,
          "Gemeine Worte verletzen. Bleib lieber freundlich, auch wenn du anderer Meinung bist.",
          "Auch Spott verletzt. Bleib lieber sachlich und freundlich."
        ],
        "feedbackCorrect": "Kommentare können andere verletzen. Wenn du freundlich und sachlich bleibst, vermeidest du Streit. Du musst aber auch nicht auf jeden Kommentar antworten."
      }
    },
    "Was kann privat sein?": {
      "einfach": {
        "question": "Du willst bei Facebook einen öffentlichen Beitrag schreiben. Was davon ist privat?",
        "hinweis": "Überlege, welche Angabe nur zu dir gehört.",
        "answers": [
          "Ein Gruß an alle.",
          "Meine Telefon-Nummer.",
          "Ein Foto vom Himmel."
        ],
        "feedbackWrong": [
          "Ein Gruß an alle verrät meistens nichts Privates über dich.",
          null,
          "Ein Foto vom Himmel zeigt nichts Persönliches über dich."
        ],
        "feedbackCorrect": "Deine Telefon-Nummer ist privat, denn mit ihr können fremde Menschen dich anrufen oder dir schreiben."
      },
      "standard": {
        "question": "Du schreibst einen öffentlichen Beitrag auf Facebook. Was davon ist privat?",
        "hinweis": "Was gehört nur zu dir?",
        "answers": [
          "Ein Gruß an alle.",
          "Meine Telefonnummer.",
          "Ein Foto vom Himmel."
        ],
        "feedbackWrong": [
          "Ein allgemeiner Gruß verrät in der Regel nichts Privates.",
          null,
          "Ein Himmelsfoto sagt nichts über dich persönlich aus."
        ],
        "feedbackCorrect": "Deine Telefonnummer ist privat – mit ihr können Fremde dich direkt erreichen."
      }
    },
    "Eine Person beleidigt dich immer wieder unter deinen Beiträgen. Was machst du?": {
      "einfach": {
        "question": "Eine Person schreibt unter deine Beiträge immer wieder Beleidigungen. Was machst du?",
        "hinweis": "Du musst das nicht aushalten. Überlege, was du gegen die Person tun kannst.",
        "answers": [
          "Ich beleidige die Person zurück.",
          "Ich blockiere sie und hole mir Hilfe.",
          "Ich lösche mein eigenes Profil."
        ],
        "feedbackWrong": [
          "Wenn du zurück beleidigst, wird der Streit größer. Blockiere die Person lieber.",
          null,
          "Du musst nicht gehen, denn die andere Person macht den Fehler. Blockiere sie lieber."
        ],
        "feedbackCorrect": "Nach dem Blockieren kann dir die Person nicht mehr schreiben. Die Beleidigungen sind nicht deine Schuld, und es ist gut, dass du dir Hilfe holst."
      },
      "standard": {
        "question": "Jemand beleidigt dich immer wieder in den Kommentaren unter deinen Beiträgen. Was tust du?",
        "hinweis": "Das musst du nicht aushalten. Was kannst du gegen die Person unternehmen?",
        "answers": [
          "Ich beleidige die Person genauso zurück.",
          "Ich blockiere sie und hole mir Hilfe.",
          "Ich lösche mein eigenes Profil."
        ],
        "feedbackWrong": [
          "Damit wird der Streit nur größer. Blockiere die Person lieber.",
          null,
          "Du musst dich nicht zurückziehen – den Fehler macht die andere Person. Blockiere sie lieber."
        ],
        "feedbackCorrect": "Nach dem Blockieren kann dir die Person nicht mehr schreiben. Die Beleidigungen sind nicht deine Schuld, und es ist gut, dass du dir Unterstützung holst."
      }
    },
    "Bei einem Beitrag steht: öffentlich. Was heißt das?": {
      "einfach": {
        "question": "Bei einem Beitrag von dir steht: Öffentlich. Was bedeutet das?",
        "hinweis": "Überlege, wie viele Menschen mit öffentlich gemeint sind.",
        "answers": [
          "Alle im Internet können ihn sehen.",
          "Nur meine Freunde können ihn sehen.",
          "Nur Facebook selbst kann ihn sehen."
        ],
        "feedbackWrong": [
          null,
          "Öffentlich gilt nicht nur für Freunde, sondern für alle.",
          "Nicht nur Facebook sieht den Beitrag. Öffentlich heißt, dass alle im Internet ihn sehen können."
        ],
        "feedbackCorrect": "Öffentlich heißt, dass alle den Beitrag sehen können, auch Menschen, die du nicht kennst."
      },
      "standard": {
        "question": "Bei einem deiner Beiträge steht als Einstellung: Öffentlich. Was bedeutet das?",
        "hinweis": "Wie viele Menschen sind mit öffentlich gemeint?",
        "answers": [
          "Alle im Internet können ihn sehen.",
          "Nur meine Freunde sehen ihn.",
          "Nur Facebook selbst sieht ihn."
        ],
        "feedbackWrong": [
          null,
          "Öffentlich gilt für alle, nicht nur für deine Freunde.",
          "Nicht nur Facebook: Öffentlich heißt, dass alle im Internet den Beitrag sehen können."
        ],
        "feedbackCorrect": "Öffentlich bedeutet: Jede Person kann den Beitrag sehen – auch Fremde."
      }
    },
    "Du hast ein Foto von einer Kollegin. Du willst es posten. Was machst du?": {
      "einfach": {
        "question": "Du hast ein Foto von deiner Kollegin. Du willst es bei Facebook posten. Was machst du?",
        "hinweis": "Auf dem Foto ist eine andere Person. Überlege, ob sie mitbestimmen darf.",
        "answers": [
          "Ich poste das Foto einfach.",
          "Ich frage zuerst meine Kollegin.",
          "Ich poste es ohne ihren Namen."
        ],
        "feedbackWrong": [
          "Auf dem Foto ist eine andere Person. Deshalb fragst du sie vorher.",
          null,
          "Auch ohne Namen erkennt man deine Kollegin am Gesicht. Frag sie lieber vorher."
        ],
        "feedbackCorrect": "Du fragst deine Kollegin vorher, denn sie darf mitbestimmen."
      },
      "standard": {
        "question": "Du hast ein Foto von einer Kollegin und möchtest es auf Facebook posten. Was tust du?",
        "hinweis": "Auf dem Foto ist eine andere Person. Darf sie mitentscheiden?",
        "answers": [
          "Ich poste es einfach.",
          "Ich frage die Kollegin vorher.",
          "Ich poste es ohne ihren Namen."
        ],
        "feedbackWrong": [
          "Auf dem Foto ist eine andere Person zu sehen. Frag sie vorher um Erlaubnis.",
          null,
          "Auch ohne Namen erkennt man sie am Gesicht. Frag sie lieber vorher."
        ],
        "feedbackCorrect": "Du fragst die Kollegin vorher – sie entscheidet mit, ob ihr Bild im Internet erscheint."
      }
    },
    "Du hast vor ein paar Jahren etwas gepostet. Was stimmt?": {
      "einfach": {
        "question": "Du hast vor einigen Jahren etwas bei Facebook gepostet. Was stimmt über diesen alten Beitrag?",
        "hinweis": "Überlege, ob ein alter Beitrag wirklich weg ist.",
        "answers": [
          "Er ist von allein verschwunden.",
          "Facebook hat ihn nach einem Jahr gelöscht.",
          "Er kann heute noch zu sehen sein."
        ],
        "feedbackWrong": [
          "Beiträge verschwinden nicht von allein. Sie bleiben, bis du sie löschst.",
          "Facebook löscht alte Beiträge nicht nach einem Jahr. Sie bleiben stehen, bis du sie löschst.",
          null
        ],
        "feedbackCorrect": "Alte Beiträge können lange zu sehen sein. Du kannst sie dir ansehen und löschen, wenn du sie nicht mehr zeigen willst."
      },
      "standard": {
        "question": "Du hast vor ein paar Jahren etwas auf Facebook gepostet. Was stimmt über diesen alten Beitrag?",
        "hinweis": "Verschwindet ein alter Beitrag wirklich von selbst?",
        "answers": [
          "Er ist inzwischen von selbst verschwunden.",
          "Facebook hat ihn nach einem Jahr gelöscht.",
          "Er kann heute noch sichtbar sein."
        ],
        "feedbackWrong": [
          "Beiträge verschwinden nicht von selbst – sie bleiben, bis du sie löschst.",
          "Eine solche Frist gibt es nicht. Beiträge bleiben stehen, bis du sie löschst.",
          null
        ],
        "feedbackCorrect": "Alte Beiträge können noch lange sichtbar sein. Du kannst sie durchsehen, löschen oder einschränken, wer sie sieht."
      }
    },
    "Was ist gut im Profil?": {
      "einfach": {
        "question": "Du füllst dein Facebook-Profil aus. Was trägst du dort ein?",
        "hinweis": "Überlege, was wirklich in deinem Profil stehen muss.",
        "answers": [
          "Nur Angaben, die wirklich nötig sind.",
          "Mein Passwort, damit ich es nicht vergesse.",
          "Meine genaue Adresse mit Haus-Nummer."
        ],
        "feedbackWrong": [
          null,
          "Ein Passwort gehört nie in dein Profil, denn damit kommen andere in dein Konto.",
          "Deine Adresse zeigt fremden Menschen, wo du wohnst. Deshalb gehört sie nicht ins Profil."
        ],
        "feedbackCorrect": "Viele Menschen können dein Profil sehen. Deshalb trägst du dort nur Angaben ein, die wirklich nötig sind."
      },
      "standard": {
        "question": "Du füllst dein Facebook-Profil aus. Was gehört hinein?",
        "hinweis": "Was muss wirklich in deinem Profil stehen?",
        "answers": [
          "Nur Angaben, die wirklich nötig sind.",
          "Mein Passwort, damit ich es nicht vergesse.",
          "Meine genaue Wohnadresse."
        ],
        "feedbackWrong": [
          null,
          "Ein Passwort gehört nie ins Profil – damit könnten andere in dein Konto gelangen.",
          "Deine Adresse verrät Fremden, wo du wohnst. Sie gehört nicht ins Profil."
        ],
        "feedbackCorrect": "Dein Profil können viele Menschen sehen. Deshalb gibst du dort nur an, was wirklich nötig ist."
      }
    },
    "Was ist eine gute Regel für Facebook?": {
      "einfach": {
        "question": "Welche Regel hilft dir bei Facebook?",
        "hinweis": "Ein Beitrag ist schnell gepostet, aber schwer zurückzuholen.",
        "answers": [
          "Ich teile immer alles sofort.",
          "Ich poste nie etwas.",
          "Ich prüfe erst und poste dann."
        ],
        "feedbackWrong": [
          "Wenn du alles sofort teilst, prüfst du nicht, wer es sehen kann. Schau lieber vorher nach.",
          "Du darfst posten. Schau nur vorher, wer deinen Beitrag sieht.",
          null
        ],
        "feedbackCorrect": "Viele Menschen können einen Beitrag sehen. Deshalb prüfst du ihn vorher und postest ihn erst dann."
      },
      "standard": {
        "question": "Welche Regel ist bei Facebook sinnvoll?",
        "hinweis": "Ein Beitrag ist schnell veröffentlicht, aber schwer zurückzuholen.",
        "answers": [
          "Immer alles sofort teilen.",
          "Nie etwas posten.",
          "Erst prüfen, dann posten."
        ],
        "feedbackWrong": [
          "Wer alles sofort teilt, prüft nicht, wer es sehen kann. Schau lieber vorher nach.",
          "Du darfst posten – prüf nur vorher, wer den Beitrag sieht.",
          null
        ],
        "feedbackCorrect": "Einen Beitrag können viele Menschen sehen. Deshalb prüfst du ihn vorher und postest ihn erst dann."
      }
    }
  }
};

/* Themen-Felder je Stufe (Paket 5): Beschreibung, Eine Sache für heute,
   Lernziele (Rückfall), Hilfe-Fragen, Merk-Regeln. Die ersten 5 Merk-Regeln
   sind die Handlungssätze der Kette und bleiben wortgleich (§2). */
const THEMA_VERSIONS = {
  /* Beta 2: Themenfelder der übrigen zehn Themen in Einfach und Alltag. */
  whatsapp: {
    einfach: {
      desc: "Nachrichten, Links und Gruppen sicher nutzen und Codes geheim halten",
      learningGoals: ["Was du bei Nachrichten von fremden Nummern tun kannst", "Warum du deinen WhatsApp-Code nicht weitergibst", "Wie du eine Bitte um Geld zuerst prüfst"],
      transfer: "Schau heute in deine WhatsApp-Chats und überlege, ob du die Personen wirklich kennst.",
      helpQuestions: ["Kenne ich die Nummer wirklich?", "Setzt mich die Nachricht unter Druck?", "Habe ich den Link geprüft?", "Will jemand Geld oder einen Code von mir?"],
      memoryRules: ["Unbekannte Links öffne ich erst nach dem Prüfen.", "Meinen WhatsApp-Code gebe ich niemandem weiter.", "Bei fremden Nummern prüfe ich zuerst, wer schreibt.", "An fremde Nummern schicke ich kein Geld.", "Fotos prüfe ich, bevor ich sie sende.", "Wenn mir etwas Stress macht, mache ich eine Pause."]
    },
    standard: {
      desc: "Mit Nachrichten, Links und Gruppen sicher umgehen und Zugangscodes schützen",
      learningGoals: ["Nachrichten von unbekannten Nummern prüfen", "Den WhatsApp-Code für dich behalten", "Geldbitten vor einer Zahlung überprüfen"],
      transfer: "Geh heute deine WhatsApp-Chats durch: Kennst du die Personen hinter den Nummern tatsächlich?",
      helpQuestions: ["Weiß ich, wer hinter dieser Nummer steckt?", "Drängt mich die Nachricht zu einer schnellen Entscheidung?", "Habe ich den Link vor dem Öffnen geprüft?", "Geht es um Geld oder einen Zugangscode?"],
      memoryRules: ["Ich öffne unbekannte Links erst, nachdem ich sie geprüft habe.", "Mein WhatsApp-Code bleibt bei mir.", "Bei unbekannten Nummern prüfe ich die Person dahinter.", "Ich überweise kein Geld an unbekannte Nummern.", "Vor dem Senden schaue ich Fotos genau an.", "Bei Stress nehme ich mir eine Pause."]
    }
  },
  facebook: {
    einfach: {
      desc: "Prüfen, wer Beiträge und Profilangaben sieht, und Kontakte bewusst auswählen",
      learningGoals: ["Wie du einstellst, wer einzelne Profilangaben sehen darf", "Was du bei Anfragen von unbekannten Personen tun kannst", "Welche privaten Daten du nicht öffentlich teilst"],
      transfer: "Prüfe heute bei einem Facebook-Beitrag, wer ihn sehen kann.",
      helpQuestions: ["Wer kann diesen Beitrag oder diese Angabe sehen?", "Kenne ich die Person wirklich?", "Ist mein Kommentar respektvoll?", "Brauche ich Hilfe dabei?"],
      memoryRules: ["Ich teile nicht alle Beiträge öffentlich.", "Freundschafts-Anfragen prüfe ich, bevor ich sie annehme.", "Ich schreibe so, dass ich andere respektiere.", "Wenn ich beleidigt werde, darf ich mir Hilfe holen."]
    },
    standard: {
      desc: "Sichtbarkeit von Beiträgen und Profilangaben prüfen und Kontakte bewusst wählen",
      learningGoals: ["Die Sichtbarkeit einzelner Profilangaben einstellen", "Mit Kontaktanfragen unbekannter Personen umgehen", "Private Angaben vor einer öffentlichen Veröffentlichung schützen"],
      transfer: "Sieh dir heute bei einem Facebook-Beitrag an, für wen er sichtbar ist.",
      helpQuestions: ["Für wen ist dieser Beitrag oder diese Angabe sichtbar?", "Weiß ich, wer hinter dem Profil steckt?", "Schreibe ich respektvoll?", "Möchte ich Unterstützung dabei?"],
      memoryRules: ["Ich veröffentliche nicht jeden Beitrag für alle.", "Ich prüfe eine Kontaktanfrage, bevor ich sie annehme.", "Ich gehe in meinen Kommentaren respektvoll mit anderen um.", "Bei Beleidigungen kann ich Unterstützung holen."]
    }
  },
  instagram: {
    einfach: {
      desc: "Fotos vor dem Teilen prüfen und mit Standortangaben und Nachrichten bewusst umgehen",
      learningGoals: ["Was du vor dem Teilen eines Fotos prüfst", "Warum du deinen Standort nicht allen zeigen musst", "Was gefälschte Profile sind und wie du sie prüfen kannst"],
      transfer: "Schau heute in den Instagram-Einstellungen nach, ob dein Konto privat ist.",
      helpQuestions: ["Was ist auf dem Foto auch im Hintergrund zu sehen?", "Zeige ich damit meinen Standort?", "Kenne ich die Person hinter dem Profil?", "Macht mir ein Kommentar Druck oder Angst?"],
      memoryRules: ["Ich prüfe Fotos, bevor ich sie teile.", "Ich schütze die Angaben zu meinem Standort.", "Fremden Personen schicke ich keine privaten Fotos.", "Bei verletzenden Kommentaren darf ich Hilfe holen."]
    },
    standard: {
      desc: "Fotos, Standortangaben und Nachrichten vor dem Teilen oder Antworten prüfen",
      learningGoals: ["Fotos vor dem Veröffentlichen prüfen", "Den eigenen Standort bewusst schützen", "Gefälschte Profile erkennen und überprüfen"],
      transfer: "Sieh heute in deinen Instagram-Einstellungen nach, ob dein Konto auf privat steht.",
      helpQuestions: ["Welche Informationen zeigt das Foto, auch im Hintergrund?", "Ist mein Standort erkennbar?", "Weiß ich, wer hinter diesem Profil steckt?", "Setzt mich ein Kommentar unter Druck oder macht er mir Angst?"],
      memoryRules: ["Vor dem Posten prüfe ich den gesamten Bildinhalt.", "Ich schütze Informationen über meinen Standort.", "Ich sende unbekannten Personen keine privaten Fotos.", "Bei verletzenden Kommentaren hole ich mir bei Bedarf Unterstützung."]
    }
  },
  youtube: {
    einfach: {
      desc: "Videos und Werbung prüfen und die eigenen Pausen bestimmen",
      learningGoals: ["Wie du prüfst, ob die Aussage in einem Video stimmt", "Wie du Werbung in Videos erkennst", "Wie du Pausen machst und auf dich achtest"],
      transfer: "Achte heute bei einem YouTube-Video darauf, ob es Werbung ist oder Werbung enthält.",
      helpQuestions: ["Ist das Video Werbung oder enthält es Werbung?", "Habe ich geprüft, ob die Aussage stimmt?", "Tut mir das Video gut?", "Möchte ich jetzt eine Pause machen?"],
      memoryRules: ["Ich glaube eine Aussage nicht sofort.", "Nach einem Video kaufe ich nicht sofort etwas.", "Gefährliche Dinge aus Videos mache ich nicht nach.", "Ich darf ein Video jederzeit stoppen."]
    },
    standard: {
      desc: "Videoaussagen und Werbung prüfen und Pausen selbst bestimmen",
      learningGoals: ["Aussagen in Videos mit anderen Quellen überprüfen", "Werbung bei YouTube erkennen", "Pausen einlegen und auf das eigene Wohlbefinden achten"],
      transfer: "Schau heute bei einem YouTube-Video genauer hin: Enthält es Werbung?",
      helpQuestions: ["Wird hier für etwas geworben?", "Stimmt die Aussage auch nach dem Überprüfen?", "Wie geht es mir mit diesem Video?", "Brauche ich gerade eine Pause?"],
      memoryRules: ["Ich prüfe Aussagen, bevor ich sie glaube.", "Ich kaufe nach einer Empfehlung im Video nicht vorschnell.", "Gefährliche Aktionen aus Videos mache ich nicht nach.", "Ich entscheide, wann ich ein Video stoppe."]
    }
  },
  snapchat: {
    einfach: {
      desc: "Mit Bildern und Standortangaben bewusst umgehen und bei Druck selbst entscheiden",
      learningGoals: ["Warum andere auch einen verschwundenen Snap gespeichert haben können", "Wie du deinen Standort schützt", "Was du tun kannst, wenn jemand Druck macht"],
      transfer: "Schau heute in Snapchat nach, wer deinen Standort auf der Karte sehen kann.",
      helpQuestions: ["Kann die andere Person das Bild speichern?", "Will ich meinen Standort wirklich zeigen?", "Setzt mich jemand unter Druck?", "Kenne ich die Person wirklich?"],
      memoryRules: ["Andere können Bilder speichern, auch wenn sie später verschwinden.", "Ich schütze die Angaben zu meinem Standort.", "Ich prüfe, wen ich als Kontakt annehme.", "Wenn mir jemand Druck macht, darf ich Nein sagen."]
    },
    standard: {
      desc: "Bilder und Standort bewusst teilen und mit Druck umgehen",
      learningGoals: ["Verstehen, dass empfangene Snaps gespeichert sein können", "Den eigenen Standort bewusst schützen", "Bei Druck selbst entscheiden und Unterstützung finden"],
      transfer: "Prüfe heute auf der Snapchat-Karte, für wen dein Standort sichtbar ist.",
      helpQuestions: ["Kann jemand eine Kopie dieses Bildes behalten?", "Möchte ich meinen Standort teilen?", "Drängt mich jemand zu etwas?", "Weiß ich, mit wem ich Kontakt habe?"],
      memoryRules: ["Auch vorübergehend sichtbare Bilder lassen sich speichern.", "Ich schütze Informationen über meinen Standort.", "Ich wähle meine Kontakte bewusst aus.", "Auch unter Druck darf ich Nein sagen."]
    }
  },
  tiktok: {
    einfach: {
      desc: "Videos und Trends prüfen, private Daten schützen und Pausen machen",
      learningGoals: ["Warum TikTok dir bestimmte Videos zeigt", "Was du bei Nachrichten und Kontakten prüfst", "Wie du Pausen machst und auf dich achtest"],
      transfer: "Achte heute darauf, wie lange du TikTok-Videos schaust. Mach danach eine Pause.",
      helpQuestions: ["Ist es sicher, bei diesem Trend mitzumachen?", "Tut mir das Video gut?", "Will jemand private Daten von mir?", "Möchte ich jetzt eine Pause machen?"],
      memoryRules: ["Bei gefährlichen Trends mache ich nicht mit.", "Ich nehme mir Pausen vom Schauen.", "Meine privaten Daten schütze ich.", "Ich prüfe ein Video, bevor ich es poste.", "Auch ein Video kann etwas Falsches zeigen."]
    },
    standard: {
      desc: "Mit Videos, Trends und Nachrichten bewusst umgehen und Pausen selbst bestimmen",
      learningGoals: ["Verstehen, warum TikTok ähnliche Videos empfiehlt", "Nachrichten und Kontakte vor einer Antwort prüfen", "TikTok so nutzen, dass du auf dein Wohlbefinden achtest"],
      transfer: "Behalte heute im Blick, wie lange du TikTok-Videos anschaust, und leg anschließend eine Pause ein.",
      helpQuestions: ["Kann ich bei diesem Trend sicher mitmachen?", "Wie geht es mir beim Anschauen?", "Fragt jemand nach persönlichen Angaben?", "Ist jetzt Zeit für meine Pause?"],
      memoryRules: ["Gefährliche Trends lasse ich aus.", "Ich unterbreche das Schauen für eine Pause.", "Ich gehe mit meinen privaten Daten bewusst um.", "Vor dem Veröffentlichen prüfe ich den Inhalt des Videos.", "Videos sind nicht automatisch echt."]
    }
  },
  ki: {
    einfach: {
      desc: "Verstehen, was Künstliche Intelligenz kann, und ihre Antworten prüfen",
      learningGoals: ["Was Künstliche Intelligenz ist", "Wobei eine KI dich unterstützen kann", "Warum du bei wichtigen KI-Antworten genau prüfst"],
      transfer: "Nutzt du heute eine KI? Prüfe eine ihrer Antworten mit einer anderen Quelle nach.",
      helpQuestions: ["Schreibt hier ein Mensch oder ein KI-Programm?", "Habe ich die Antwort geprüft?", "Soll ich private Daten eingeben?", "Geht es um meine Gesundheit oder mein Geld?", "Möchte ich jemanden um Hilfe bitten?"],
      memoryRules: ["Eine KI ist ein Programm und kein Mensch.", "Auch eine KI kann etwas Falsches schreiben.", "Wichtige Antworten einer KI prüfe ich nach.", "Ich schreibe der KI keine privaten Daten.", "Bei Fragen zu Gesundheit und Geld frage ich einen Menschen.", "Ich darf jemanden um Hilfe bitten."]
    },
    standard: {
      desc: "KI und Chatbots verstehen, sinnvoll nutzen und Antworten überprüfen",
      learningGoals: ["Verstehen, was mit Künstlicher Intelligenz gemeint ist", "Eine KI als Unterstützung nutzen", "Wichtige Antworten prüfen und Grenzen der KI beachten"],
      transfer: "Wenn du heute eine KI nutzt, überprüfe eine Antwort anhand einer anderen Quelle.",
      helpQuestions: ["Kommt die Antwort von einem Menschen oder einer KI?", "Stimmt die Antwort nach dem Überprüfen?", "Will das Programm persönliche Angaben von mir?", "Betrifft der Rat meine Gesundheit oder meine Finanzen?", "Brauche ich Unterstützung beim Einordnen?"],
      memoryRules: ["Eine KI ist ein Computerprogramm, kein Mensch.", "KI-Antworten können falsch sein.", "Bei wichtigen KI-Antworten prüfe ich die Angaben nach.", "Meine privaten Daten gebe ich nicht in einen Chatbot ein.", "Bei Gesundheit und Geld wende ich mich an Menschen.", "Ich kann mir Unterstützung holen."]
    }
  },
  fakes: {
    einfach: {
      desc: "Nachrichten, Bilder und Stimmen prüfen, bevor du ihnen glaubst",
      learningGoals: ["Was eine erfundene oder falsche Nachricht ist", "Wie du Nachrichten mit anderen Quellen prüfst", "Was du mit einer falschen Nachricht tun kannst"],
      transfer: "Siehst du heute eine überraschende Nachricht? Prüfe zuerst, ob sie stimmt. Erst danach entscheidest du, ob du sie teilst.",
      helpQuestions: ["Wer hat die Nachricht veröffentlicht?", "Berichten bekannte Nachrichten-Seiten auch darüber?", "Macht mich die Nachricht sehr wütend oder aufgeregt?", "Kann jemand das Bild oder Video verändert haben?", "Brauche ich Hilfe beim Prüfen?"],
      memoryRules: ["Eine Nachricht im Internet muss nicht stimmen.", "Bilder und Videos können verändert oder erfunden sein.", "Auch eine bekannte Stimme am Telefon kann nachgemacht sein.", "Eine aufregende Nachricht prüfe ich zuerst.", "Ich prüfe eine Nachricht, bevor ich sie teile.", "Bei einem Anruf wegen Geld rufe ich die Person selbst zurück.", "Ich darf mir beim Prüfen helfen lassen."]
    },
    standard: {
      desc: "Falsche Nachrichten und gefälschte Bilder, Videos und Stimmen überprüfen",
      learningGoals: ["Falsche oder erfundene Nachrichten einordnen", "Eine Behauptung anhand anderer Quellen prüfen", "Mit einer erkannten Falschnachricht umgehen"],
      transfer: "Prüfe heute eine überraschende Nachricht, bevor du über das Teilen entscheidest.",
      helpQuestions: ["Von wem stammt diese Nachricht?", "Findet sich die Meldung auch bei bekannten Nachrichten-Seiten?", "Löst die Nachricht starke Gefühle bei mir aus?", "Könnte das Bild oder Video manipuliert sein?", "Möchte ich Unterstützung beim Überprüfen?"],
      memoryRules: ["Nicht jede Behauptung im Internet ist richtig.", "Fotos und Videos können gefälscht werden.", "Eine vertraut klingende Stimme kann künstlich erzeugt sein.", "Aufwühlende Nachrichten überprüfe ich zuerst.", "Vor dem Weiterleiten prüfe ich die Nachricht.", "Bei Geldforderungen am Telefon rufe ich über die bekannte Nummer zurück.", "Ich darf Unterstützung beim Prüfen holen."]
    }
  },
  betrug: {
    einfach: {
      desc: "Tricks mit Nachrichten, falschen Gewinnen und Geldforderungen erkennen",
      learningGoals: ["Wie Menschen mit falschen Nachrichten an Geld oder Daten kommen wollen", "Welche Tricks du erkennen kannst", "Was du tun kannst, wenn du schon auf einen Trick reagiert hast"],
      transfer: "Erzähle heute einer Person von einem Trick aus diesem Thema. So könnt ihr beide besser darauf achten.",
      helpQuestions: ["Macht mir die Nachricht Druck oder Angst?", "Soll ich Geld zahlen oder Daten eingeben?", "Kenne ich die Person hinter der Nachricht wirklich?", "Kann ich sie über eine bekannte Nummer selbst anrufen?", "Brauche ich Hilfe dabei?"],
      memoryRules: ["Druck und Drohungen können auf einen Trick hinweisen.", "Links von fremden Personen öffne ich nicht.", "Codes und Bank-Daten gebe ich nicht an andere weiter.", "Für einen echten Gewinn zahle ich kein Geld.", "Die echte Polizei verlangt am Telefon kein Geld von mir.", "Bei einer Bitte um Geld rufe ich die Person selbst zurück.", "Nach einem Betrug muss ich mich nicht schämen. Ich darf Hilfe holen.", "Klebt ein Aufkleber mit einem Code am Automaten? Dann scanne ich ihn nicht."]
    },
    standard: {
      desc: "Phishing, falsche Gewinne und andere Betrugsversuche erkennen und handeln",
      learningGoals: ["Verstehen, wie Betrugsversuche an Geld oder Daten gelangen sollen", "Typische Tricks überprüfen", "Nach einem Betrugsversuch selbst handeln und Hilfe finden"],
      transfer: "Sprich heute mit jemandem über einen Trick aus diesem Thema. Das hilft euch beiden, darauf zu achten.",
      helpQuestions: ["Drängt oder bedroht mich diese Nachricht?", "Werde ich zu einer Zahlung oder zur Eingabe von Daten aufgefordert?", "Weiß ich tatsächlich, wer die Nachricht geschickt hat?", "Kann ich die Person über ihre bekannte Nummer zurückrufen?", "Möchte ich Unterstützung dabei?"],
      memoryRules: ["Druck und Drohungen sind mögliche Warnzeichen für Betrug.", "Ich öffne keine Links von unbekannten Absendern.", "Meine Codes und Bank-Daten bleiben bei mir.", "Ein echter Gewinn erfordert keine Vorabgebühr.", "Die Polizei verlangt von mir kein Geld am Telefon.", "Geldforderungen prüfe ich mit einem eigenen Rückruf.", "Bei Betrug trage ich nicht die Schuld. Ich kann Hilfe holen.", "Einen Code auf einem aufgeklebten Zettel am Automaten scanne ich nicht."]
    }
  },
  einkaufen: {
    einfach: {
      desc: "Shops und Bezahlarten prüfen und beim Kaufen selbst entscheiden",
      learningGoals: ["Wie du einen Shop vor dem Kauf prüfst", "Welche Bezahlart dir mehr Schutz gibt", "Was du tun kannst, wenn bei einem Kauf etwas nicht klappt"],
      transfer: "Willst du heute online etwas kaufen? Prüfe den Shop, bevor du bestellst.",
      helpQuestions: ["Kenne ich den Shop und habe ich ihn geprüft?", "Ist der Preis auffällig niedrig?", "Kann ich erst nach der Lieferung auf Rechnung zahlen?", "Schließe ich damit ein Abo ab?", "Brauche ich Hilfe beim Prüfen?"],
      memoryRules: ["Ich kaufe in Shops, die ich kenne.", "Ein sehr niedriger Preis und nur Vorkasse sind Warnzeichen.", "Auf Rechnung zu zahlen gibt mir mehr Schutz als Vorkasse.", "Meine PIN und TAN gebe ich niemandem weiter.", "Ich nehme mir Zeit für meine Entscheidung.", "Viele Online-Käufe kann ich innerhalb von 14 Tagen zurückgeben.", "Ich darf beim Einkaufen Hilfe holen."]
    },
    standard: {
      desc: "Online-Shops und Zahlungen prüfen und bewusst einkaufen",
      learningGoals: ["Prüfen, ob ich einem Shop vertrauen kann", "Bezahlarten nach ihrem Schutz vergleichen", "Bei Problemen mit einem Kauf handeln"],
      transfer: "Prüfe heute vor einer Online-Bestellung den Shop.",
      helpQuestions: ["Ist mir der Shop bekannt und habe ich ihn überprüft?", "Ist der Preis ungewöhnlich günstig?", "Wird Rechnungskauf mit Zahlung nach der Lieferung angeboten?", "Entsteht durch den Kauf ein laufendes Abo?", "Möchte ich Unterstützung beim Prüfen?"],
      memoryRules: ["Ich bestelle bei mir bekannten Shops.", "Sehr günstige Preise zusammen mit reiner Vorkasse sind Warnzeichen.", "Rechnungskauf schützt mich besser als eine Vorauszahlung.", "PIN und TAN behalte ich für mich.", "Beim Kaufen lasse ich mich nicht unter Zeitdruck setzen.", "Bei vielen Online-Käufen ist eine Rückgabe innerhalb von 14 Tagen möglich.", "Ich kann mir Unterstützung beim Einkaufen holen."]
    }
  },
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
  },
  /* Paket H4 (03.10.2026). Die Merk-Regeln (3 Fragen und Notfall-Satz) sind in
     allen Stufen wortgleich und stehen deshalb nur in topics.js. */
  hilfe: {
    "einfach": {
      "desc": "Selbst lösen, erst stoppen und die passende Hilfe holen",
      "transfer": "Überlege heute, wer dir bei einem Problem mit dem Handy hilft und wer dir bei Angst oder Druck hilft. Das kann auch dieselbe Person sein. Du kannst die Nummern in deinem Handy speichern.",
      "learningGoals": [
        "Erkennen, was für ein Problem du hast.",
        "Sicher selbst handeln.",
        "Bei Druck oder Angst erst stoppen.",
        "Die Hilfe finden, die zu deinem Problem passt.",
        "Unterstützung wirklich holen.",
        "Erkennen, wann etwas ein Notfall ist."
      ],
      "helpQuestions": [
        "Klappt etwas nicht, oder macht mir etwas Druck oder Angst?",
        "Was kann ich selbst ausprobieren?",
        "Wer kennt sich damit aus, und wem vertraue ich?",
        "Wen frage ich, wenn die erste Person nicht helfen kann?"
      ]
    },
    "standard": {
      "desc": "Selbst lösen, erst stoppen, passende Hilfe holen",
      "transfer": "Überleg heute, wer dir bei einem Handy-Problem helfen kann – und wer bei Angst oder Druck. Das kann auch dieselbe Person sein. Wenn du magst, speicherst du die Nummern im Handy.",
      "learningGoals": [
        "Erkennen, um welche Art von Problem es geht.",
        "Sicher selbst handeln.",
        "Bei Druck oder Angst erst einmal stoppen.",
        "Die passende Hilfe finden.",
        "Unterstützung tatsächlich holen.",
        "Einen Notfall erkennen."
      ],
      "helpQuestions": [
        "Klappt etwas nicht – oder macht mir etwas Druck oder Angst?",
        "Was kann ich selbst ausprobieren?",
        "Wer kennt sich damit aus, und wem vertraue ich?",
        "Wen frage ich, wenn die erste Person nicht helfen kann?"
      ]
    }
  }
};

/* FERTIGSTELLUNG-LERNWEGE-2026-10-06 BEGIN */
/* Zusätzliche Anwendungen üben bekannte Regeln in neuen Situationen.
   Die vollständigen bisherigen Lektionen bleiben unter Nachlesen erhalten.
   Die Auswahl für Mehr dazu wurde inhaltlich mit dem Kern verglichen;
   gleiche Überschriften allein sind kein Grund zum Weglassen. */
const ANWENDEN_ERGAENZUNGEN = {
  "betrug": {
    "neueSituation": {
      "einstieg": {
        "leicht": "Du leihst gern Bücher. Du nutzt die App von deiner Bücherei. Dann kommt diese E-Mail.",
        "einfach": "Du leihst gern Bücher und nutzt die App von deiner Bücherei. Jetzt bekommst du diese E-Mail.",
        "standard": "Du nutzt regelmäßig deine Bücherei und hast ihre App eingerichtet. Dann erhältst du diese E-Mail."
      },
      "kanal": {
        "leicht": "E-Mail",
        "einfach": "E-Mail",
        "standard": "E-Mail"
      },
      "inhalt": [
        {
          "typ": "nachricht",
          "von": {
            "leicht": "Bücherei-Service",
            "einfach": "Bücherei-Service",
            "standard": "Bücherei-Service"
          },
          "text": {
            "leicht": "Dein Konto muss heute bestätigt werden. Sonst kannst du keine Bücher mehr ausleihen. Gib hier deine Bank-Daten ein: Konto bestätigen.",
            "einfach": "Bestätige dein Konto bitte bis heute Abend. Sonst kannst du keine Bücher mehr ausleihen. Gib deine Bank-Daten über den Link Konto bestätigen ein.",
            "standard": "Bitte bestätige dein Konto bis heute Abend, damit du weiter Bücher ausleihen kannst. Gib dazu deine Bankdaten über den Link Konto bestätigen ein."
          }
        },
        {
          "typ": "hinweis",
          "text": {
            "leicht": "Du hast diese E-Mail nicht erwartet. In der App hast du noch nicht nachgesehen.",
            "einfach": "Die E-Mail kommt unerwartet. In deiner Bücherei-App hast du noch nicht nachgesehen.",
            "standard": "Die Aufforderung kommt unerwartet. Du hast dein Konto in der Bücherei-App noch nicht geprüft."
          }
        }
      ],
      "fragen": [
        {
          "id": "betrug/neu/buecherei-forderung",
          "question": "Die E-Mail macht dir Druck. Du sollst Bank-Daten eingeben. Wie prüfst du die Forderung?",
          "answers": [
            "Ich rufe die Bücherei über meine bekannte Nummer an.",
            "Ich gebe die Bank-Daten über den Link ein. Dann ist es erledigt.",
            "Ich öffne die Bücherei-App selbst. Ich prüfe mein Konto."
          ],
          "feedbackCorrect": "Du nutzt deine eigene Bücherei-App. Du prüfst dort die Meldung. Den Link aus der E-Mail brauchst du nicht.",
          "feedbackWrong": [
            null,
            "Der Link kann zu einer falschen Seite führen. Prüfe über deine eigene App oder die bekannte Nummer.",
            null
          ],
          "hinweis": "Wie erreichst du die Bücherei ohne den Link aus der E-Mail?",
          "remember": "Ich öffne die App selbst. Oder ich rufe eine bekannte Nummer an.",
          "feedbackAuch": [
            "Du nutzt die bekannte Nummer. So prüfst du direkt bei der Bücherei.",
            null,
            null
          ],
          "correctIndex": 2,
          "nachFehler": true,
          "auchMoeglich": [
            0
          ]
        },
        {
          "id": "betrug/neu/buecherei-passwort",
          "question": "Stell dir vor: Du hast dein Passwort über den Link eingegeben. Die Bücherei hat die E-Mail nicht geschickt. Was machst du jetzt?",
          "answers": [
            "Ich ändere mein Passwort in der echten App. Bei Bedarf hole ich Hilfe.",
            "Ich warte erst ein paar Tage. Vielleicht passiert mit meinem Konto nichts."
          ],
          "feedbackCorrect": "Du änderst dein Passwort über die echte App. Bei Fragen hilft dir die Bücherei. Du musst dich nicht schämen.",
          "feedbackWrong": [
            null,
            "Jemand kann dein Passwort benutzen. Warte nicht unnötig. Ändere es über die echte App. Du darfst dir helfen lassen."
          ],
          "hinweis": "Du hast ein Passwort auf einer falschen Seite eingegeben. Wie schützt du dein Konto jetzt?",
          "remember": "Betrug ist nicht meine Schuld. Ich hole mir Hilfe.",
          "correctIndex": 0,
          "nachFehler": true
        }
      ],
      "segmentiert": true
    },
    "aufgabenVersionen": {
      "betrug/neu/buecherei-forderung": {
        "einfach": {
          "question": "Die unerwartete E-Mail setzt dich unter Druck und verlangt Bank-Daten. Wie prüfst du die Forderung?",
          "answers": [
            "Ich rufe die Bücherei unter der Nummer an, die ich schon kenne.",
            "Ich gebe meine Bank-Daten über den Link ein, damit es schnell erledigt ist.",
            "Ich öffne meine Bücherei-App selbst und prüfe mein Konto."
          ],
          "feedbackCorrect": "Du prüfst die Forderung in deiner selbst geöffneten Bücherei-App. So musst du dem Link aus der E-Mail nicht vertrauen.",
          "feedbackWrong": [
            null,
            "Der Link kann auf eine falsche Seite führen. Prüfe über die eigene App oder eine bekannte Nummer.",
            null
          ],
          "hinweis": "Überlege, wie du die Bücherei unabhängig von der E-Mail erreichen kannst.",
          "remember": "Ich öffne die App selbst oder rufe eine schon bekannte Nummer an.",
          "feedbackAuch": [
            "Du rufst unter einer unabhängig bekannten Nummer an und klärst die Forderung direkt mit der Bücherei.",
            null,
            null
          ]
        },
        "standard": {
          "question": "Eine unerwartete E-Mail verlangt unter Zeitdruck deine Bankdaten. Wie überprüfst du die Aufforderung?",
          "answers": [
            "Ich rufe die Bücherei über eine bereits bekannte Telefonnummer an.",
            "Ich gebe die Bankdaten über den Link ein, um die Forderung schnell zu erledigen.",
            "Ich starte die eingerichtete Bücherei-App selbst und prüfe mein Konto."
          ],
          "feedbackCorrect": "Du wählst einen unabhängigen Zugang zur Bücherei. Den fraglichen Link brauchst du dafür nicht zu öffnen.",
          "feedbackWrong": [
            null,
            "Eine unerwartete Mail kann auf eine gefälschte Seite führen. Prüfe die Aufforderung unabhängig.",
            null
          ],
          "hinweis": "Welcher Kontaktweg stammt nicht aus der fraglichen E-Mail?",
          "remember": "Ich öffne die App selbst oder rufe eine Nummer an, die ich schon kenne.",
          "feedbackAuch": [
            "Auch der Anruf über eine bereits bekannte Nummer ist eine unabhängige Prüfung bei der Bücherei.",
            null,
            null
          ]
        }
      },
      "betrug/neu/buecherei-passwort": {
        "einfach": {
          "question": "Stell dir vor, du hast dein Passwort über den Link eingegeben. Die Bücherei bestätigt, dass sie die E-Mail nicht geschickt hat. Was tust du jetzt?",
          "answers": [
            "Ich ändere mein Passwort in der echten App und hole bei Bedarf Hilfe.",
            "Ich warte ein paar Tage, weil vielleicht nichts mit dem Konto passiert."
          ],
          "feedbackCorrect": "Du änderst dein Passwort über den echten Zugang. Wenn du Hilfe brauchst, fragst du bei der Bücherei nach. Betrug kann jedem passieren.",
          "feedbackWrong": [
            null,
            "Jemand kann das eingegebene Passwort benutzen. Ändere es zeitnah über die echte App und hol dir bei Bedarf Hilfe."
          ],
          "hinweis": "Was kannst du jetzt tun, damit das verratene Passwort nicht weiter benutzt wird?",
          "remember": "Nach einem Betrug hole ich mir passende Hilfe."
        },
        "standard": {
          "question": "Angenommen, du hast dein Passwort auf der verlinkten Seite eingegeben. Die Bücherei bestätigt, dass die Mail gefälscht ist. Wie reagierst du?",
          "answers": [
            "Ich ändere das Passwort über die echte App und hole nötigenfalls Hilfe.",
            "Ich warte einige Tage ab; vielleicht wird mein Konto nicht benutzt."
          ],
          "feedbackCorrect": "Du änderst das offengelegte Passwort über einen echten Zugang. Bei Problemen unterstützt dich die Bücherei. Du musst dich dafür nicht schämen.",
          "feedbackWrong": [
            null,
            "Mit dem Passwort kann ein fremder Zugriff möglich sein. Reagiere zeitnah und ändere es über den echten Zugang."
          ],
          "hinweis": "Wie verhinderst du, dass das offengelegte Passwort weiter zum Anmelden genutzt wird?",
          "remember": "Nach einem Betrug hole ich mir passende Unterstützung."
        }
      }
    }
  },
  "einkaufen": {
    "neueSituation": {
      "einstieg": {
        "leicht": "Du suchst eine Tasche für deinen Sport-Kurs. Du findest einen Shop. Du kennst den Shop noch nicht.",
        "einfach": "Du suchst eine Tasche für deinen Sportkurs und findest einen Shop, in dem du noch nie bestellt hast.",
        "standard": "Du suchst eine Tasche für deinen Sportkurs. Das Angebot stammt von einem Shop, bei dem du bisher nicht bestellt hast."
      },
      "kanal": {
        "leicht": "Angebot im Shop",
        "einfach": "Angebot im Onlineshop",
        "standard": "Angebot im Onlineshop"
      },
      "inhalt": [
        {
          "typ": "nachricht",
          "von": {
            "leicht": "Der Shop",
            "einfach": "Der Shop",
            "standard": "Der Shop"
          },
          "text": {
            "leicht": "Sport-Tasche: 28 Euro. Versand: 4 Euro. Du kannst vorab überweisen. Oder du zahlst nach Erhalt auf Rechnung.",
            "einfach": "Die Sporttasche kostet 28 Euro, der Versand 4 Euro. Du kannst vorab überweisen oder nach Erhalt auf Rechnung bezahlen.",
            "standard": "Sporttasche: 28 Euro, Versand: 4 Euro. Zahlung per Überweisung vorab oder auf Rechnung nach Erhalt."
          }
        },
        {
          "typ": "hinweis",
          "text": {
            "leicht": "Im Impressum stehen ein Name und eine Adresse. Das Impressum nennt die Firma für den Shop.",
            "einfach": "Im Impressum stehen der Name und die Adresse der Firma, die den Shop betreibt.",
            "standard": "Das Impressum nennt einen Firmennamen und eine Anschrift für den Shop."
          }
        }
      ],
      "fragen": [
        {
          "id": "einkaufen/neu/sporttasche-shop",
          "question": "Du kennst den Shop noch nicht. Er zeigt einen Namen und eine Adresse. Was machst du vor dem Bestellen?",
          "answers": [
            "Name und Adresse stehen da. Das reicht mir zum Bestellen.",
            "Ich prüfe die Shop-Adresse und Erfahrungen auf anderen Seiten."
          ],
          "feedbackCorrect": "Du prüfst auch außerhalb vom Shop. Ein Name und eine Adresse allein beweisen nicht: Der Shop ist echt.",
          "feedbackWrong": [
            "Auch ein falscher Shop kann einen Namen und eine Adresse zeigen. Prüfe weitere Angaben.",
            null
          ],
          "hinweis": "Du siehst nur Angaben vom Shop selbst. Was findest du außerhalb vom Shop?",
          "remember": "Ich kaufe bei Shops, die ich geprüft habe.",
          "correctIndex": 1,
          "nachFehler": true
        },
        {
          "id": "einkaufen/neu/sporttasche-zahlung",
          "question": "Du hast den Shop geprüft. Du kannst vorab überweisen oder nach Erhalt auf Rechnung zahlen. Was schützt dich besser bei fehlender Lieferung?",
          "answers": [
            "Ich wähle Rechnung. Ich zahle nach Erhalt der Tasche.",
            "Ich überweise vorher. Die Prüfung vom Shop gibt mir Sicherheit."
          ],
          "feedbackCorrect": "Auf Rechnung zahlst du nach Erhalt. Du kannst die Tasche zuerst ansehen. Du überweist vorher noch kein Geld für die Tasche.",
          "feedbackWrong": [
            null,
            "Bei Vorkasse zahlst du vor der Lieferung. Auch ein geprüfter Shop kann Probleme machen. Eine Prüfung ist keine Garantie."
          ],
          "hinweis": "Bei welcher Wahl bleibt dein Geld zuerst bei dir?",
          "remember": "Rechnung ist sicherer als Vorkasse.",
          "correctIndex": 0,
          "nachFehler": true
        }
      ],
      "segmentiert": true
    },
    "aufgabenVersionen": {
      "einkaufen/neu/sporttasche-shop": {
        "einfach": {
          "question": "Du hast in diesem Shop noch nie bestellt. Er zeigt einen Namen und eine Adresse. Was prüfst du vor dem Bestellen?",
          "answers": [
            "Name und Adresse stehen dort, deshalb bestelle ich jetzt gleich.",
            "Ich prüfe die Shop-Adresse und suche Erfahrungen auf anderen Seiten."
          ],
          "feedbackCorrect": "Du vergleichst die Angaben mit Informationen außerhalb vom Shop. Auch ein gefälschtes Impressum kann echt aussehen.",
          "feedbackWrong": [
            "Die Angaben im Shop allein bestätigen seine Echtheit nicht. Prüfe auch unabhängige Informationen.",
            null
          ],
          "hinweis": "Welche Angaben findest du unabhängig von der Shop-Seite?",
          "remember": "Ich bestelle bei Shops, die ich vorher geprüft habe."
        },
        "standard": {
          "question": "Du kennst den Shop bisher nicht. Das Impressum nennt Firma und Anschrift. Wie gehst du vor?",
          "answers": [
            "Firma und Anschrift sind angegeben; das genügt mir zum Bestellen.",
            "Ich prüfe die Shopadresse und suche unabhängige Erfahrungen."
          ],
          "feedbackCorrect": "Du prüfst die Angaben unabhängig von der Shopseite. Ein vorhandenes Impressum allein schützt nicht vor einer Fälschung.",
          "feedbackWrong": [
            "Fake-Shops können echte Firmendaten kopieren. Das Impressum allein reicht zur Prüfung nicht aus.",
            null
          ],
          "hinweis": "Welche Informationen bekommst du außerhalb der Selbstdarstellung des Shops?",
          "remember": "Ich kaufe bei Shops, die ich unabhängig geprüft habe."
        }
      },
      "einkaufen/neu/sporttasche-zahlung": {
        "einfach": {
          "question": "Du hast den Shop geprüft. Du kannst vorab überweisen oder nach Erhalt auf Rechnung zahlen. Was schützt dich besser, falls keine Tasche kommt?",
          "answers": [
            "Ich wähle Rechnung und zahle erst nach Erhalt der Tasche.",
            "Ich überweise vorher, weil ich den Shop geprüft habe."
          ],
          "feedbackCorrect": "Bei Rechnung bezahlst du nach Erhalt. Du kannst die Tasche zuerst ansehen und hast bis dahin noch kein Geld dafür überwiesen.",
          "feedbackWrong": [
            null,
            "Bei Vorkasse zahlst du vor der Lieferung. Die Prüfung vom Shop ist keine Garantie, dass alles klappt."
          ],
          "hinweis": "Überlege, bei welcher Zahlungsart dein Geld bis zum Erhalt noch bei dir bleibt.",
          "remember": "Rechnung ist sicherer als eine Zahlung vor der Lieferung."
        },
        "standard": {
          "question": "Der Shop ist geprüft und bietet Vorkasse oder Rechnung nach Erhalt. Welche Wahl schützt dich besser, wenn die Tasche nicht geliefert wird?",
          "answers": [
            "Ich wähle Rechnung und bezahle nach Erhalt der Tasche.",
            "Ich überweise vorab, denn ich habe den Shop schon geprüft."
          ],
          "feedbackCorrect": "Bei Rechnung zahlst du nach Erhalt. Du kannst die gelieferte Tasche zuerst prüfen und hast vorher noch kein Geld dafür ausgegeben.",
          "feedbackWrong": [
            null,
            "Vorkasse bedeutet Zahlung vor Lieferung. Ein vorheriger Shopcheck gibt keine Liefergarantie."
          ],
          "hinweis": "Bei welcher Zahlungsart hast du vor der Lieferung noch kein Geld ausgegeben?",
          "remember": "Rechnung ist sicherer als Vorkasse."
        }
      }
    }
  },
  "facebook": {
    "neueSituation": {
      "einstieg": {
        "leicht": "Du hast ein Bücher-Regal gebaut. Du willst deinen Freunden ein Foto zeigen.",
        "einfach": "Du hast ein Bücherregal gebaut und möchtest deinen Freunden auf Facebook ein Foto davon zeigen.",
        "standard": "Dein selbst gebautes Bücherregal ist fertig. Du möchtest ein Foto mit deinen Facebook-Freunden teilen."
      },
      "kanal": {
        "leicht": "Beitrag und Nachricht",
        "einfach": "Beitrag und neue Nachricht",
        "standard": "Geplanter Beitrag und neue Nachricht"
      },
      "inhalt": [
        {
          "typ": "hinweis",
          "text": {
            "leicht": "Auf dem Foto steht nur das Regal. Keine Person ist zu sehen. Du hast das Foto noch nicht geteilt.",
            "einfach": "Auf dem Foto ist nur dein Regal zu sehen. Du hast es noch nicht geteilt und willst es deinem Freundeskreis zeigen.",
            "standard": "Das Foto zeigt ausschließlich dein Regal und keine Personen. Du möchtest es im Freundeskreis teilen; es ist noch nicht veröffentlicht."
          }
        },
        {
          "typ": "nachricht",
          "von": {
            "leicht": "Ein unbekanntes Profil",
            "einfach": "Ein Profil, das du nicht kennst",
            "standard": "Unbekanntes Profil"
          },
          "text": {
            "leicht": "Ich verlose einen Gutschein für Möbel. Nimm meine Freundschaftsanfrage an. Die Teilnahme kostet 10 Euro. Über den Link kannst du bezahlen.",
            "einfach": "Ich verlose einen Gutschein für Möbel. Nimm meine Freundschaftsanfrage an. Für 10 Euro bist du dabei. Bezahlen kannst du über den Link.",
            "standard": "Ich verlose einen Möbelgutschein. Nimm meine Freundschaftsanfrage an. Die Teilnahme kostet 10 Euro, die du über den Link bezahlen kannst."
          }
        },
        {
          "typ": "hinweis",
          "text": {
            "leicht": "Unter der Nachricht steht ein Link. Dazu kommt eine Freundschafts-Anfrage.",
            "einfach": "Die Nachricht enthält einen Link und eine Freundschaftsanfrage.",
            "standard": "Das Profil hat zusätzlich eine Freundschaftsanfrage und einen Zahlungslink geschickt."
          }
        }
      ],
      "fragen": [
        {
          "id": "facebook/neu/regal-freundeskreis",
          "pictogram": "pikto-people",
          "correctIndex": 1,
          "nachFehler": true,
          "question": "Du willst das Regal deinen Freunden zeigen. Wie teilst du das Foto?",
          "answers": [
            "Ich teile es öffentlich. Alle können es sehen.",
            "Ich teile es nur mit meinen Facebook-Freunden.",
            "Ich teile dieses Foto nicht. Es bleibt bei mir."
          ],
          "feedbackCorrect": "Du wählst deine Freunde aus. Das Foto ist nicht öffentlich.",
          "feedbackWrong": [
            "Öffentlich heißt auch für Fremde. Du willst es deinen Freunden zeigen.",
            null,
            null
          ],
          "hinweis": "Überlege: Wer soll dieses Foto sehen?",
          "remember": "Ich prüfe, wer meinen Beitrag sehen kann.",
          "feedbackAuch": "Du darfst das Foto für dich behalten. Du musst nichts posten.",
          "auchMoeglich": [
            2
          ]
        },
        {
          "id": "facebook/neu/auslosung-anfrage",
          "pictogram": "pikto-message",
          "correctIndex": 0,
          "nachFehler": true,
          "question": "Du kennst das neue Profil nicht. Was machst du mit der Anfrage und der Nachricht?",
          "answers": [
            "Ich öffne den Link nicht. Ich prüfe die Nachricht.",
            "Ich nehme die Anfrage an. Ich zahle die Gebühr.",
            "Ich lehne die Anfrage ab. Ich lösche die Nachricht."
          ],
          "feedbackCorrect": "Du tippst nicht auf den Link. Du zahlst nicht sofort. Du kannst die Nachricht jemandem zeigen.",
          "feedbackWrong": [
            null,
            "Du kennst das Profil nicht. Das Versprechen beweist nichts. Du musst nicht zahlen.",
            null
          ],
          "hinweis": "Was weißt du über das Profil? Ein versprochener Gewinn ist kein Beweis.",
          "remember": "Fremde Links tippe ich nicht an.",
          "feedbackAuch": "Du darfst die Anfrage ablehnen. Du musst den Link nicht öffnen und nicht zahlen.",
          "auchMoeglich": [
            2
          ]
        }
      ],
      "segmentiert": true
    },
    "aufgabenVersionen": {
      "facebook/neu/regal-freundeskreis": {
        "einfach": {
          "question": "Du möchtest das Foto deines Regals mit deinen Freunden teilen. Welche Sichtbarkeit wählst du?",
          "answers": [
            "Ich mache es öffentlich und damit auch für fremde Menschen sichtbar.",
            "Ich teile es mit meinen Facebook-Freunden.",
            "Ich poste das Foto nicht und behalte es für mich."
          ],
          "feedbackCorrect": "Du begrenzt die Sichtbarkeit auf deine Facebook-Freunde. So ist der Beitrag nicht öffentlich.",
          "feedbackWrong": [
            "Für deinen Freundeskreis musst du das Foto nicht öffentlich machen. Prüfe vorher, wer es sehen kann.",
            null,
            null
          ],
          "hinweis": "Wem möchtest du das Foto zeigen? Danach richtet sich deine Auswahl.",
          "remember": "Ich prüfe, wer meinen Beitrag sehen kann.",
          "feedbackAuch": "Du darfst dich gegen das Posten entscheiden. Deine Freunde müssen das Foto nicht auf Facebook sehen."
        },
        "standard": {
          "question": "Du willst deinen Freunden dein selbst gebautes Regal zeigen. Wie entscheidest du über die Sichtbarkeit?",
          "answers": [
            "Ich veröffentliche es für alle, auch außerhalb meines Freundeskreises.",
            "Ich teile es mit meinen Facebook-Freunden.",
            "Ich veröffentliche es nicht und behalte das Foto für mich."
          ],
          "feedbackCorrect": "Du beschränkst diesen Beitrag auf deinen Freundeskreis. Dafür musst du das Foto nicht öffentlich machen.",
          "feedbackWrong": [
            "Eine öffentliche Freigabe geht über deinen gewünschten Freundeskreis hinaus. Begrenze die Sichtbarkeit entsprechend deinem Ziel.",
            null,
            null
          ],
          "hinweis": "Für wen ist das Foto gedacht? Prüfe die Sichtbarkeit vor dem Veröffentlichen.",
          "remember": "Vor dem Posten prüfe ich, wer meinen Beitrag sehen kann.",
          "feedbackAuch": "Auch nicht zu posten ist deine Entscheidung. Du musst ein Foto nicht veröffentlichen."
        }
      },
      "facebook/neu/auslosung-anfrage": {
        "einfach": {
          "question": "Ein unbekanntes Profil schickt dir eine Anfrage und verlangt Geld für eine Auslosung. Wie reagierst du?",
          "answers": [
            "Ich öffne den Link nicht und prüfe die Nachricht erst.",
            "Ich nehme die Anfrage an und bezahle die Teilnahmegebühr sofort.",
            "Ich lehne die Anfrage ab und lösche die Nachricht ohne Antwort."
          ],
          "feedbackCorrect": "Du zahlst nicht vorschnell und lässt den Link geschlossen. Du kannst mit einer vertrauten Person prüfen, was hinter der Nachricht steckt.",
          "feedbackWrong": [
            null,
            "Die Nachricht belegt nicht, dass der Gewinn echt ist. Nimm dir Zeit, statt die Anfrage sofort anzunehmen und zu zahlen.",
            null
          ],
          "hinweis": "Du kennst das Profil nicht. Was belegt, dass die versprochene Auslosung echt ist?",
          "remember": "Fremde Links tippe ich nicht an.",
          "feedbackAuch": "Du darfst auf die Anfrage verzichten und die Nachricht löschen. Du musst weder den Link öffnen noch Geld senden."
        },
        "standard": {
          "question": "Ein unbekanntes Profil bietet dir per Nachricht eine Gewinnchance gegen Gebühr an. Wie gehst du vor?",
          "answers": [
            "Ich lasse den Link geschlossen und prüfe die Nachricht zunächst.",
            "Ich bestätige die Anfrage und zahle sofort die verlangte Teilnahmegebühr.",
            "Ich lehne die Anfrage ab und lösche die Nachricht unbeantwortet."
          ],
          "feedbackCorrect": "Du vermeidest einen vorschnellen Klick und eine Zahlung. Du kannst die Angaben prüfen oder eine vertraute Person hinzuziehen.",
          "feedbackWrong": [
            null,
            "Ein Gewinnversprechen belegt nicht die Vertrauenswürdigkeit des Profils. Prüfe die Nachricht, bevor du Kontakt bestätigst oder Geld ausgibst.",
            null
          ],
          "hinweis": "Welche verlässlichen Informationen hast du über die Person und die Auslosung? Freundliche Worte und ein Versprechen reichen nicht.",
          "remember": "Unbekannte Links öffne ich nicht vorschnell.",
          "feedbackAuch": "Du kannst auf den Kontakt verzichten. Mit Ablehnen und Löschen öffnest du keinen Link und zahlst keine Gebühr."
        }
      }
    }
  },
  "fakes": {
    "neueSituation": {
      "einstieg": {
        "leicht": "Du nutzt die Bus-Linie 42. Im Haus-Chat kommt ein Bild mit einer Meldung.",
        "einfach": "Du möchtest morgen mit der Buslinie 42 fahren. Im Hauschat wird ein Bild mit einer Meldung geteilt.",
        "standard": "Du willst morgen mit der Buslinie 42 fahren. Im Hauschat taucht ein Bildschirmfoto mit einer Meldung auf."
      },
      "kanal": {
        "leicht": "Haus-Chat",
        "einfach": "Hauschat",
        "standard": "Hauschat"
      },
      "inhalt": [
        {
          "typ": "nachricht",
          "von": {
            "leicht": "Nora",
            "einfach": "Nora aus dem Haus",
            "standard": "Nora aus dem Haus"
          },
          "text": {
            "leicht": "Weiß jemand mehr? Das Bild hat mir ein Bekannter geschickt.",
            "einfach": "Weiß jemand, ob das stimmt? Ein Bekannter hat mir dieses Bild geschickt.",
            "standard": "Weiß jemand, ob die Meldung stimmt? Das Bildschirmfoto kam von einem Bekannten."
          }
        },
        {
          "typ": "nachricht",
          "von": {
            "leicht": "Text auf dem Bild",
            "einfach": "Text auf dem geteilten Bild",
            "standard": "Text im Bildschirmfoto"
          },
          "text": {
            "leicht": "Bus-Linie 42 fällt ab Montag aus. Gebt das bitte an alle weiter.",
            "einfach": "Die Buslinie 42 fährt ab Montag nicht mehr. Gebt das bitte an alle weiter.",
            "standard": "Die Buslinie 42 fährt ab Montag nicht mehr. Bitte an alle weitergeben."
          }
        },
        {
          "typ": "hinweis",
          "text": {
            "leicht": "Auf dem Bild fehlt ein Datum. Du siehst auch keine Quelle.",
            "einfach": "Auf dem Bild stehen weder ein Datum noch eine Quelle für die Meldung.",
            "standard": "Datum und ursprüngliche Quelle sind im Bildschirmfoto nicht zu erkennen."
          }
        }
      ],
      "fragen": [
        {
          "id": "fakes/neu/bus-meldung-pruefen",
          "question": "Du brauchst morgen die Bus-Linie 42. Du weißt nicht: Stimmt die Meldung? Was machst du zuerst?",
          "answers": [
            "Ich sage meine Fahrt ab. Im Haus-Chat steht es so.",
            "Ich prüfe die Meldung auf der Seite vom Bus-Betrieb."
          ],
          "feedbackCorrect": "Du prüfst beim Bus-Betrieb. Dort suchst du die aktuelle Auskunft für deine Bus-Linie.",
          "feedbackWrong": [
            "Die Meldung kann alt oder falsch sein. Prüfe zuerst beim Bus-Betrieb.",
            null
          ],
          "hinweis": "Wo gibt der Bus-Betrieb selbst die aktuellen Fahrten bekannt?",
          "remember": "Erst prüfen. Dann teilen.",
          "correctIndex": 1,
          "nachFehler": true
        },
        {
          "id": "fakes/neu/bus-auskunft-teilen",
          "question": "Du hast geprüft. Die Meldung ist alt. Die Bus-Linie fährt morgen. Was schickst du in den Haus-Chat?",
          "answers": [
            "Ich schicke die aktuelle Auskunft. Das alte Bild leite ich nicht weiter.",
            "Ich schicke nur das alte Bild. Die anderen sollen ihre Fahrt auch absagen."
          ],
          "feedbackCorrect": "Du schickst die aktuelle Auskunft vom Bus-Betrieb. Du verbreitest die alte Meldung nicht weiter.",
          "feedbackWrong": [
            null,
            "Das alte Bild passt nicht mehr. Andere sagen dann vielleicht ihre Fahrt ab. Schicke die aktuelle Auskunft."
          ],
          "hinweis": "Die alte Meldung gilt heute nicht mehr. Welche Auskunft hilft der Gruppe?",
          "remember": "Erst prüfen. Dann teilen.",
          "correctIndex": 0,
          "nachFehler": true
        }
      ],
      "segmentiert": true
    },
    "aufgabenVersionen": {
      "fakes/neu/bus-meldung-pruefen": {
        "einfach": {
          "question": "Du brauchst morgen die Buslinie 42, weißt aber nicht, ob die Meldung stimmt. Was machst du zuerst?",
          "answers": [
            "Ich sage meine Fahrt ab, weil die Meldung im Hauschat steht.",
            "Ich prüfe die aktuelle Auskunft auf der Seite vom Busbetrieb."
          ],
          "feedbackCorrect": "Du suchst die aktuelle Auskunft bei der Stelle, die den Bus betreibt. So verlässt du dich nicht allein auf das geteilte Bild.",
          "feedbackWrong": [
            "Auch eine Nachricht von einem Bekannten kann alt oder falsch sein. Prüfe zuerst beim Busbetrieb.",
            null
          ],
          "hinweis": "Überlege, wo der Busbetrieb selbst seine aktuellen Fahrten bekannt gibt.",
          "remember": "Ich prüfe zuerst und entscheide dann über das Teilen."
        },
        "standard": {
          "question": "Du brauchst morgen die Buslinie 42. Wie klärst du, ob die Meldung zutrifft?",
          "answers": [
            "Ich sage meine Fahrt ab, denn die Meldung wurde im Hauschat geteilt.",
            "Ich prüfe die aktuelle Auskunft auf der offiziellen Seite vom Busbetrieb."
          ],
          "feedbackCorrect": "Du prüfst die Angaben beim zuständigen Busbetrieb. Ein weitergeleitetes Bild ohne Datum und Quelle reicht für deine Entscheidung nicht aus.",
          "feedbackWrong": [
            "Der Hauschat bestätigt die Meldung nicht. Das Bild kann veraltet oder falsch sein.",
            null
          ],
          "hinweis": "Wo veröffentlicht der Busbetrieb selbst aktuelle Informationen zu seiner Linie?",
          "remember": "Vor dem Teilen prüfe ich Inhalt und Quelle."
        }
      },
      "fakes/neu/bus-auskunft-teilen": {
        "einfach": {
          "question": "Du hast beim Busbetrieb geprüft: Die Meldung ist alt, und der Bus fährt morgen. Was schickst du in den Hauschat?",
          "answers": [
            "Ich schicke die aktuelle Auskunft und leite das alte Bild nicht weiter.",
            "Ich schicke nur das alte Bild, damit die anderen ihre Fahrt auch absagen."
          ],
          "feedbackCorrect": "Du gibst der Gruppe die aktuelle Auskunft vom Busbetrieb. So bekommen die anderen die passende Information für ihre Fahrt.",
          "feedbackWrong": [
            null,
            "Das alte Bild passt nicht zur Fahrt von morgen. Teile die aktuelle Auskunft statt der veralteten Meldung."
          ],
          "hinweis": "Welche Information gilt für morgen und hilft der Gruppe beim Planen?",
          "remember": "Ich prüfe zuerst und entscheide dann über das Teilen."
        },
        "standard": {
          "question": "Der Busbetrieb bestätigt: Die Meldung ist veraltet, die Linie fährt morgen. Was teilst du im Hauschat?",
          "answers": [
            "Ich teile die aktuelle Auskunft und lasse das alte Bildschirmfoto weg.",
            "Ich teile nur das alte Bildschirmfoto, damit andere ihre Fahrt ebenfalls absagen."
          ],
          "feedbackCorrect": "Du gibst die überprüfte, aktuelle Auskunft weiter. Das veraltete Bild würde den anderen beim Planen ihrer Fahrt nicht helfen.",
          "feedbackWrong": [
            null,
            "Die alte Meldung würde die Gruppe trotz deiner Prüfung falsch informieren. Teile die aktuelle Auskunft."
          ],
          "hinweis": "Welche Auskunft ist jetzt belegt und für die morgige Fahrt relevant?",
          "remember": "Vor dem Teilen prüfe ich Inhalt und Quelle."
        }
      }
    }
  },
  "instagram": {
    "neueSituation": {
      "einstieg": {
        "leicht": "Du warst mit Freunden im Park. Du hast ein Gruppen-Foto gemacht. Du willst es auf Instagram zeigen.",
        "einfach": "Nach einem Treffen mit Freunden im Park möchtest du ein gemeinsames Foto auf Instagram teilen.",
        "standard": "Nach einem Treffen im Park möchtest du ein gemeinsames Gruppenfoto auf Instagram veröffentlichen."
      },
      "kanal": {
        "leicht": "Gespräch und Nachricht",
        "einfach": "Gespräch und neue Nachricht",
        "standard": "Gespräch vor dem Posten und neue Nachricht"
      },
      "inhalt": [
        {
          "typ": "nachricht",
          "von": {
            "leicht": "Dana",
            "einfach": "Dana",
            "standard": "Dana"
          },
          "text": {
            "leicht": "Ich möchte auf dem Foto nicht im Internet zu sehen sein. Bitte poste es nicht.",
            "einfach": "Ich möchte nicht, dass du dieses Foto von mir ins Internet stellst. Bitte poste es nicht.",
            "standard": "Bitte veröffentliche das Foto nicht. Ich möchte darauf nicht im Internet zu sehen sein."
          }
        },
        {
          "typ": "hinweis",
          "text": {
            "leicht": "Es gibt noch ein Foto nur vom Park. Auf diesem Foto ist niemand zu sehen.",
            "einfach": "Du hast außerdem ein Foto vom Park, auf dem keine Person zu sehen ist.",
            "standard": "Du hast auch ein anderes Foto aufgenommen, das nur den Park und keine Personen zeigt."
          }
        },
        {
          "typ": "nachricht",
          "von": {
            "leicht": "Ein unbekanntes Profil",
            "einfach": "Ein Profil, das du nicht kennst",
            "standard": "Unbekanntes Profil"
          },
          "text": {
            "leicht": "Deine Fotos gefallen mir. Schick mir doch ein paar Bilder aus deinem Zimmer. Nur für mich, ich zeige sie niemandem.",
            "einfach": "Deine Fotos gefallen mir. Schick mir doch ein paar private Bilder aus deinem Zimmer. Die bleiben bei mir, versprochen.",
            "standard": "Deine Fotos gefallen mir. Schick mir ein paar private Bilder aus deinem Zimmer. Die bleiben nur bei mir, versprochen."
          }
        }
      ],
      "fragen": [
        {
          "id": "instagram/neu/gruppenfoto-nein",
          "pictogram": "pikto-photo",
          "correctIndex": 0,
          "nachFehler": true,
          "question": "Dana will nicht auf Instagram zu sehen sein. Was machst du?",
          "answers": [
            "Ich nehme das Foto vom Park.",
            "Ich poste das Foto nur für Freunde.",
            "Ich poste das Foto mit Dana nicht."
          ],
          "feedbackCorrect": "Du nimmst ein Foto ohne Dana. So beachtest du ihre Entscheidung.",
          "feedbackWrong": [
            null,
            "Auch deine Freunde können Dana sehen. Dana will das Foto nicht auf Instagram.",
            null
          ],
          "hinweis": "Dana hat Nein gesagt. Wer kann sie auf dem Foto erkennen?",
          "remember": "Ich frage andere, bevor ich ihr Bild poste.",
          "feedbackAuch": "Du darfst dieses Foto für dich behalten. Dann zeigt dein Beitrag kein Foto mit Dana.",
          "auchMoeglich": [
            2
          ]
        },
        {
          "id": "instagram/neu/private-bilder-anfrage",
          "pictogram": "pikto-message",
          "correctIndex": 2,
          "nachFehler": true,
          "question": "Was machst du mit der Bitte um private Bilder aus deinem Zimmer?",
          "answers": [
            "Ich sende nichts. Ich zeige jemandem die Nachricht.",
            "Ich sende ein Bild. Die Person verspricht es.",
            "Ich sende keine Bilder. Ich beende den Kontakt."
          ],
          "feedbackCorrect": "Du behältst deine privaten Bilder. Du musst auf die Bitte nicht eingehen.",
          "feedbackWrong": [
            null,
            "Du kennst die Person nicht. Das Versprechen sagt nicht, was später mit deinem Bild passiert.",
            null
          ],
          "hinweis": "Du kennst die Person nicht. Was willst du ihr wirklich zeigen?",
          "remember": "Ich schicke fremden Personen keine privaten Fotos.",
          "feedbackAuch": "Du schickst keine privaten Bilder. Eine vertraute Person kann mit dir die Nachricht ansehen.",
          "auchMoeglich": [
            0
          ]
        }
      ],
      "segmentiert": true
    },
    "aufgabenVersionen": {
      "instagram/neu/gruppenfoto-nein": {
        "einfach": {
          "question": "Dana hat Nein zum Posten gesagt. Wie gehst du mit dem gemeinsamen Foto um?",
          "answers": [
            "Ich wähle stattdessen ein anderes Foto ohne Dana.",
            "Ich poste das gemeinsame Foto nur für meine Freunde.",
            "Ich poste das gemeinsame Foto überhaupt nicht."
          ],
          "feedbackCorrect": "Mit einem anderen Foto respektierst du Danas Nein. Du kannst trotzdem etwas vom Treffen zeigen.",
          "feedbackWrong": [
            null,
            "Auch für einen Beitrag im Freundeskreis zählt Danas Nein. Sie möchte auf diesem Foto nicht online zu sehen sein.",
            null
          ],
          "hinweis": "Ihre Entscheidung gilt auch, wenn nur deine Freunde den Beitrag sehen würden.",
          "remember": "Ich frage andere, bevor ich ihr Bild poste.",
          "feedbackAuch": "Du kannst auf den Beitrag mit diesem Foto verzichten. Niemand ist verpflichtet, ein gemeinsames Foto zu posten."
        },
        "standard": {
          "question": "Dana ist mit der Veröffentlichung des Gruppenfotos nicht einverstanden. Wie reagierst du?",
          "answers": [
            "Ich verwende ein anderes Foto ohne Dana im Bild.",
            "Ich veröffentliche das gemeinsame Foto für Freunde, die Dana auch kennen.",
            "Ich verzichte auf die Veröffentlichung dieses Fotos."
          ],
          "feedbackCorrect": "Du respektierst Danas Entscheidung und wählst ein anderes Foto ohne sie.",
          "feedbackWrong": [
            null,
            "Ein eingeschränktes Publikum ersetzt Danas Einverständnis nicht. Sie hat der Veröffentlichung widersprochen.",
            null
          ],
          "hinweis": "Danas Nein bezieht sich auf die Veröffentlichung ihres Fotos, auch in einem privaten Konto.",
          "remember": "Vor dem Posten frage ich die abgebildeten Personen.",
          "feedbackAuch": "Du darfst auf diesen Beitrag verzichten. Damit respektierst du ebenfalls Danas Entscheidung."
        }
      },
      "instagram/neu/private-bilder-anfrage": {
        "einfach": {
          "question": "Ein unbekanntes Profil bittet um private Bilder aus deinem Zimmer. Wie reagierst du?",
          "answers": [
            "Ich sende keine Bilder und zeige die Nachricht einer vertrauten Person.",
            "Ich sende ein Bild, weil die Person es angeblich nicht weitergibt.",
            "Ich sende keine Bilder und beende den Kontakt zu dem Profil."
          ],
          "feedbackCorrect": "Du schützt deine privaten Fotos und entscheidest selbst, den Kontakt zu beenden.",
          "feedbackWrong": [
            null,
            "Ein Versprechen einer unbekannten Person belegt nicht, wie sie mit deinem privaten Bild umgehen wird.",
            null
          ],
          "hinweis": "Du kennst die Person nicht. Du musst ihr keine privaten Bilder anvertrauen.",
          "remember": "Ich schicke fremden Personen keine privaten Fotos.",
          "feedbackAuch": "Du behältst die Bilder für dich und kannst dir Hilfe beim Einschätzen der Nachricht holen."
        },
        "standard": {
          "question": "Ein fremdes Profil fragt nach privaten Zimmerfotos und verspricht Vertraulichkeit. Wie gehst du damit um?",
          "answers": [
            "Ich sende nichts und bespreche die Anfrage mit einer vertrauten Person.",
            "Ich sende ein Foto, weil die Person Vertraulichkeit versprochen hat.",
            "Ich behalte die Fotos für mich und beende diesen Kontakt."
          ],
          "feedbackCorrect": "Du gibst keine privaten Bilder weiter und darfst den unerwünschten Kontakt beenden.",
          "feedbackWrong": [
            null,
            "Das Versprechen klärt nicht, wer hinter dem Profil steht oder was mit deinem Bild passiert.",
            null
          ],
          "hinweis": "Welche privaten Einblicke möchtest du überhaupt geben, und wem vertraust du sie an?",
          "remember": "Private Fotos sende ich nicht an unbekannte Personen.",
          "feedbackAuch": "Auch das ist ein sicherer Weg: Du gibst keine Bilder weiter und kannst die Anfrage mit Unterstützung einordnen."
        }
      }
    }
  },
  "ki": {
    "neueSituation": {
      "einstieg": {
        "leicht": "Du willst einen Mal-Kurs besuchen. Du fragst eine KI nach der Uhrzeit.",
        "einfach": "Du möchtest einen Malkurs im Bürgerhaus besuchen und fragst eine KI nach der Uhrzeit.",
        "standard": "Du möchtest einen Malkurs im Bürgerhaus besuchen. Die Uhrzeit fragst du bei einer KI nach."
      },
      "kanal": {
        "leicht": "KI-Antwort und Sprach-Nachricht",
        "einfach": "KI-Antwort und Sprachnachricht",
        "standard": "KI-Antwort und Sprachnachricht"
      },
      "inhalt": [
        {
          "typ": "nachricht",
          "von": {
            "leicht": "KI",
            "einfach": "KI",
            "standard": "KI"
          },
          "text": {
            "leicht": "Der Mal-Kurs beginnt am Samstag um 15 Uhr. Viel Spaß!",
            "einfach": "Der Malkurs beginnt am Samstag um 15 Uhr. Viel Spaß dabei!",
            "standard": "Der Malkurs startet am Samstag um 15 Uhr. Viel Spaß!"
          }
        },
        {
          "typ": "hinweis",
          "text": {
            "leicht": "Danach kommt eine Sprach-Nachricht. Die Stimme klingt wie Leila. Du kennst Leila vom Kurs.",
            "einfach": "Danach bekommst du eine Sprachnachricht. Die Stimme klingt wie Leila, die du vom Kurs kennst.",
            "standard": "Danach bekommst du eine Sprachnachricht. Die Stimme klingt wie deine Bekannte Leila aus dem Kurs."
          }
        },
        {
          "typ": "nachricht",
          "von": {
            "leicht": "Die Stimme",
            "einfach": "Die Stimme in der Nachricht",
            "standard": "Stimme in der Nachricht"
          },
          "text": {
            "leicht": "Ich reserviere unsere Plätze. Überweis mir schnell 40 Euro. Nimm diese neue Konto-Nummer.",
            "einfach": "Ich reserviere unsere Plätze. Überweis mir schnell 40 Euro auf diese neue Kontonummer.",
            "standard": "Ich reserviere unsere Plätze. Überweis mir schnell 40 Euro auf diese neue Kontonummer."
          }
        }
      ],
      "fragen": [
        {
          "id": "ki/neu/malkurs-zeit",
          "question": "Die KI nennt eine Uhrzeit für den Mal-Kurs. Du willst den Kurs besuchen. Was machst du zuerst?",
          "answers": [
            "Ich prüfe die Uhrzeit im Kurs-Plan vom Bürger-Haus.",
            "Ich fahre erst kurz vor 15 Uhr los. Die KI klingt sicher.",
            "Ich frage die KI noch einmal. 2 gleiche Antworten reichen."
          ],
          "correctIndex": 0,
          "feedbackCorrect": "Du prüfst bei der Stelle für den Kurs. Eine wichtige KI-Antwort kann falsch sein.",
          "feedbackWrong": [
            null,
            "Die KI kann eine falsche Uhrzeit nennen. Prüfe erst den Kurs-Plan.",
            "Auch 2 gleiche Antworten können falsch sein. Prüfe den Kurs-Plan."
          ],
          "hinweis": "Wer macht den Kurs? Wo steht die Uhrzeit von dieser Stelle?",
          "remember": "KI kann Fehler machen. Ich prüfe wichtige Antworten.",
          "nachFehler": true
        },
        {
          "id": "ki/neu/malkurs-stimme",
          "question": "Die Stimme will Geld auf ein neues Konto. Sie klingt wie Leila. Was machst du?",
          "answers": [
            "Ich zahle noch nichts. Ich frage Leila beim Treffen.",
            "Ich überweise schnell. Ich erkenne die Stimme.",
            "Ich rufe Leilas bekannte Nummer an. Ich frage nach."
          ],
          "correctIndex": 2,
          "auchMoeglich": [
            0
          ],
          "feedbackCorrect": "Du prüfst die Bitte über die bekannte Nummer. Die Stimme allein ist kein Beweis.",
          "feedbackWrong": [
            null,
            "Eine Stimme kann nachgemacht sein. Prüfe die Bitte vor dem Überweisen.",
            null
          ],
          "feedbackAuch": [
            "Du überweist kein Geld. Du prüfst die Bitte später direkt bei Leila.",
            null,
            null
          ],
          "hinweis": "Eine bekannte Stimme kann nachgemacht sein. Wie erreichst du Leila selbst?",
          "remember": "Bei Geld-Bitten rufe ich selbst an.",
          "nachFehler": true
        }
      ],
      "segmentiert": true
    },
    "aufgabenVersionen": {
      "ki/neu/malkurs-zeit": {
        "einfach": {
          "question": "Die KI nennt dir die Uhrzeit für den Malkurs, den du besuchen möchtest. Was machst du zuerst?",
          "answers": [
            "Ich prüfe die Uhrzeit im Kursplan vom Bürgerhaus.",
            "Ich fahre kurz vor 15 Uhr los, weil die KI sicher klingt.",
            "Ich frage die KI noch einmal und vertraue auf zwei gleiche Antworten."
          ],
          "feedbackCorrect": "Du prüfst die Uhrzeit bei der Stelle, die den Kurs anbietet. Wichtige Antworten einer KI können falsch sein.",
          "feedbackWrong": [
            null,
            "Eine sichere Formulierung beweist nicht, dass die Uhrzeit stimmt. Prüfe zuerst den Kursplan.",
            "Auch zwei gleiche Antworten können falsch sein. Prüfe die Uhrzeit beim Anbieter des Kurses."
          ],
          "hinweis": "Überlege, wer den Kurs anbietet und wo diese Stelle die Uhrzeit bekannt gibt.",
          "remember": "KI kann sich irren, deshalb prüfe ich wichtige Antworten."
        },
        "standard": {
          "question": "Die KI nennt dir eine Uhrzeit für deinen Malkurs. Wie gehst du vor?",
          "answers": [
            "Ich sehe im Kursplan des Bürgerhauses nach.",
            "Ich fahre kurz vor 15 Uhr los, weil die KI sicher klingt.",
            "Ich frage noch einmal. Wenn die KI dasselbe sagt, reicht das."
          ],
          "feedbackCorrect": "Du prüfst die Uhrzeit beim Kursanbieter. Auch überzeugende KI-Antworten können falsch sein.",
          "feedbackWrong": [
            null,
            "Selbstsicher zu klingen beweist keine richtige Uhrzeit. Prüfe den Kursplan.",
            "Wiederholte KI-Antworten sind kein unabhängiger Beleg. Sieh beim Kursanbieter nach."
          ],
          "hinweis": "Wo gibt der Kursanbieter selbst die Uhrzeit an?",
          "remember": "KI kann Fehler machen. Wichtige Antworten prüfe ich."
        }
      },
      "ki/neu/malkurs-stimme": {
        "einfach": {
          "question": "Die Stimme klingt wie Leila und bittet um Geld auf ein neues Konto. Was machst du?",
          "answers": [
            "Ich überweise noch kein Geld und frage Leila beim nächsten Treffen.",
            "Ich überweise gleich, weil ich die Stimme erkenne.",
            "Ich rufe Leila unter ihrer bekannten Nummer an und frage nach."
          ],
          "feedbackCorrect": "Du fragst unter der bekannten Nummer nach, denn eine bekannte Stimme allein beweist nicht, wer geschrieben hat.",
          "feedbackWrong": [
            null,
            "Die Stimme kann nachgemacht sein. Prüfe die Geldbitte, bevor du etwas überweist.",
            null
          ],
          "feedbackAuch": [
            "Du bezahlst noch nichts und prüfst die Bitte beim nächsten persönlichen Treffen mit Leila.",
            null,
            null
          ],
          "hinweis": "Überlege, wie du Leila unabhängig von der neuen Nachricht erreichen kannst.",
          "remember": "Bei einer Geldbitte rufe ich selbst bei der Person an."
        },
        "standard": {
          "question": "Eine Sprachnachricht klingt wie Leila und verlangt Geld für ein neues Konto. Wie reagierst du?",
          "answers": [
            "Ich überweise nichts und frage Leila beim nächsten Treffen.",
            "Ich zahle sofort, weil ich die Stimme erkenne.",
            "Ich rufe Leilas bekannte Nummer an und kläre die Bitte."
          ],
          "feedbackCorrect": "Du prüfst die Bitte über die bekannte Nummer. Der Klang der Stimme allein beweist die Identität nicht.",
          "feedbackWrong": [
            null,
            "Auch eine vertraute Stimme kann imitiert sein. Prüfe die Bitte vor dem Überweisen.",
            null
          ],
          "feedbackAuch": [
            "Du zahlst nicht vorschnell und klärst die Bitte später direkt mit Leila.",
            null,
            null
          ],
          "hinweis": "Wie erreichst du Leila unabhängig von dieser Sprachnachricht?",
          "remember": "Bei Geldbitten rufe ich die Person selbst an."
        }
      }
    }
  },
  "snapchat": {
    "neueSituation": {
      "einstieg": {
        "leicht": "Du sitzt mit Freunden in einem Café. Mara sucht euch.",
        "einfach": "Du sitzt mit Freunden in einem Café. Mara möchte wissen, an welchem Tisch ihr seid.",
        "standard": "Du sitzt mit Freunden im Café. Mara möchte euch finden."
      },
      "kanal": {
        "leicht": "Nachrichten von Mara",
        "einfach": "Nachrichten von Mara",
        "standard": "Nachrichten von Mara"
      },
      "inhalt": [
        {
          "typ": "hinweis",
          "text": {
            "leicht": "Auf deinem Tisch liegt ein Brief. Deine Adresse steht auf dem Brief.",
            "einfach": "Auf dem Tisch liegt ein Brief, auf dem deine Adresse zu lesen ist.",
            "standard": "Auf dem Tisch liegt ein Brief mit deiner Adresse."
          }
        },
        {
          "typ": "nachricht",
          "von": {
            "leicht": "Mara",
            "einfach": "Mara",
            "standard": "Mara"
          },
          "text": {
            "leicht": "Schick mir kurz ein Bild vom Tisch. Das Bild verschwindet doch gleich.",
            "einfach": "Schick mir kurz ein Bild vom Tisch, dann finde ich euch. Das Bild verschwindet doch gleich.",
            "standard": "Schick mir kurz ein Foto vom Tisch, dann finde ich euch. Verschwindet doch gleich."
          }
        },
        {
          "typ": "nachricht",
          "von": {
            "leicht": "Mara",
            "einfach": "Mara",
            "standard": "Mara"
          },
          "text": {
            "leicht": "Oder zeig mir deinen Standort. Mach schnell, sonst fahre ich allein.",
            "einfach": "Oder zeig mir deinen Standort. Mach schnell, sonst fahre ich allein.",
            "standard": "Oder teil deinen Standort mit mir. Schnell, sonst fahre ich allein."
          }
        }
      ],
      "fragen": [
        {
          "id": "snapchat/neu/cafe-foto",
          "question": "Du willst ein Bild vom Tisch senden. Auf dem Bild steht deine Adresse. Was machst du?",
          "answers": [
            "Ich sende das Bild. Es verschwindet ja gleich.",
            "Ich mache ein neues Bild ohne den Brief.",
            "Ich sende kein Bild. Ich beschreibe den Tisch."
          ],
          "correctIndex": 1,
          "auchMoeglich": [
            2
          ],
          "feedbackCorrect": "Auf dem neuen Bild steht deine Adresse nicht. Du prüfst vor dem Senden.",
          "feedbackWrong": [
            "Die Adresse steht auf dem Bild. Eine andere Person kann das Bild speichern.",
            null,
            null
          ],
          "feedbackAuch": [
            null,
            null,
            "Das geht auch. Du kannst den Tisch beschreiben. Du musst kein Bild senden."
          ],
          "hinweis": "Eine Kopie vom Bild kann bleiben. Was darf darauf zu sehen sein?",
          "remember": "Ich denke vor dem Senden nach.",
          "nachFehler": true
        },
        {
          "id": "snapchat/neu/cafe-standort",
          "question": "Mara macht dir Druck. Du willst deinen Standort nicht teilen. Was machst du?",
          "answers": [
            "Ich lasse die Freigabe aus. Ich sage Mara Nein.",
            "Ich teile meinen Standort. Dann hört der Stress auf.",
            "Ich teile nichts. Ich zeige es einer vertrauten Person."
          ],
          "correctIndex": 0,
          "auchMoeglich": [
            2
          ],
          "feedbackCorrect": "Du entscheidest selbst. Du musst deinen Standort nicht unter Druck teilen.",
          "feedbackWrong": [
            null,
            "Du willst deinen Standort nicht teilen. Du musst es auch bei Druck nicht machen.",
            null
          ],
          "feedbackAuch": [
            null,
            null,
            "Du teilst deinen Standort nicht. Du holst dir Hilfe für die Nachricht mit Druck."
          ],
          "hinweis": "Du willst deinen Standort nicht teilen. Gilt dein Nein auch bei Druck?",
          "remember": "Ich teile meinen Standort nicht einfach.",
          "nachFehler": true
        }
      ],
      "segmentiert": true
    },
    "aufgabenVersionen": {
      "snapchat/neu/cafe-foto": {
        "einfach": {
          "question": "Du möchtest ein Bild vom Tisch schicken, auf dem auch deine Adresse zu lesen ist. Was machst du?",
          "answers": [
            "Ich schicke das Bild, weil es gleich wieder verschwindet.",
            "Ich fotografiere den Tisch ohne den Brief.",
            "Ich schicke kein Bild, sondern beschreibe den Tisch."
          ],
          "feedbackCorrect": "Auf dem neuen Bild ist deine Adresse nicht zu sehen. Du prüfst das Bild, bevor du es sendest.",
          "feedbackWrong": [
            "Jemand kann das Bild mit deiner Adresse speichern, obwohl es nur kurz angezeigt wird.",
            null,
            null
          ],
          "feedbackAuch": [
            null,
            null,
            "Du darfst den Tisch auch beschreiben. Dazu musst du kein Bild schicken."
          ],
          "hinweis": "Eine Kopie kann erhalten bleiben. Überlege, was auf deinem Bild zu sehen sein darf.",
          "remember": "Ich denke nach, bevor ich ein Bild sende."
        },
        "standard": {
          "question": "Du willst ein Foto vom Tisch verschicken. Darauf steht auch deine Adresse. Wie gehst du vor?",
          "answers": [
            "Ich schicke es, weil es gleich verschwindet.",
            "Ich fotografiere den Tisch ohne den Brief.",
            "Ich schicke kein Foto und beschreibe den Tisch."
          ],
          "feedbackCorrect": "Du prüfst das neue Foto vor dem Verschicken. Deine Adresse ist darauf nicht zu sehen.",
          "feedbackWrong": [
            "Eine gespeicherte Kopie könnte deine Adresse weiter zeigen.",
            null,
            null
          ],
          "feedbackAuch": [
            null,
            null,
            "Den Tisch zu beschreiben ist ebenso in Ordnung. Ein Foto musst du nicht schicken."
          ],
          "hinweis": "Eine gespeicherte Kopie kann bleiben. Welche Angaben möchtest du im Bild zeigen?",
          "remember": "Vor dem Senden denke ich nach."
        }
      },
      "snapchat/neu/cafe-standort": {
        "einfach": {
          "question": "Mara macht dir Druck, obwohl du deinen Standort nicht teilen möchtest. Was machst du?",
          "answers": [
            "Ich lasse die Freigabe aus und sage Mara Nein.",
            "Ich teile den Standort, damit Mara aufhört, Druck zu machen.",
            "Ich teile nichts und zeige es einer vertrauten Person."
          ],
          "feedbackCorrect": "Du entscheidest selbst, ob du deinen Standort teilst. Unter Druck musst du ihn nicht freigeben.",
          "feedbackWrong": [
            null,
            "Du musst deinen Standort nicht gegen deinen Willen teilen, nur damit der Druck aufhört.",
            null
          ],
          "feedbackAuch": [
            null,
            null,
            "Du gibst deinen Standort nicht frei und holst dir Hilfe wegen der drängenden Nachricht."
          ],
          "hinweis": "Du möchtest deinen Standort nicht teilen. Überlege, ob der Druck daran etwas ändert.",
          "remember": "Ich überlege erst, bevor ich meinen Standort teile."
        },
        "standard": {
          "question": "Mara setzt dich unter Druck. Du möchtest deinen Standort nicht teilen. Wie reagierst du?",
          "answers": [
            "Ich lasse die Freigabe aus und sage Nein.",
            "Ich teile den Standort, damit der Stress aufhört.",
            "Ich teile nichts und zeige es einer vertrauten Person."
          ],
          "feedbackCorrect": "Du entscheidest über deinen Standort. Druck verpflichtet dich nicht, ihn zu teilen.",
          "feedbackWrong": [
            null,
            "Du musst deinen Standort auch unter Druck nicht gegen deinen Willen freigeben.",
            null
          ],
          "feedbackAuch": [
            null,
            null,
            "Du schützt deinen Standort und holst dir Hilfe im Umgang mit der Nachricht."
          ],
          "hinweis": "Ändert Maras Druck dein Recht, selbst über deinen Standort zu entscheiden?",
          "remember": "Meinen Standort teile ich nicht einfach."
        }
      }
    }
  },
  "tiktok": {
    "neueSituation": {
      "einstieg": {
        "leicht": "Du suchst auf TikTok ein Rezept. Danach willst du kochen.",
        "einfach": "Du suchst bei TikTok eine Idee fürs Abendessen. Danach möchtest du selbst kochen.",
        "standard": "Du suchst bei TikTok ein Rezept fürs Abendessen. Anschließend willst du kochen."
      },
      "kanal": {
        "leicht": "Videos und eine Nachricht",
        "einfach": "Videos und eine private Nachricht",
        "standard": "Videos und eine private Nachricht"
      },
      "inhalt": [
        {
          "typ": "hinweis",
          "text": {
            "leicht": "Du hast einen Timer gestellt. Der Timer klingelt. Dein Rezept hast du gefunden.",
            "einfach": "Dein Timer klingelt, und du hast ein passendes Rezept gefunden.",
            "standard": "Dein Timer klingelt. Du hast bereits ein passendes Rezept gefunden."
          }
        },
        {
          "typ": "hinweis",
          "text": {
            "leicht": "Schon erscheint das nächste Video. Es sieht interessant aus.",
            "einfach": "Das nächste Video wird schon angezeigt und sieht interessant aus.",
            "standard": "Ein weiteres interessantes Video erscheint."
          }
        },
        {
          "typ": "nachricht",
          "von": {
            "leicht": "Eine unbekannte Person",
            "einfach": "Eine Person, die du nicht kennst",
            "standard": "Unbekannter Kontakt"
          },
          "text": {
            "leicht": "Das Rezept gibt es auch in meinem Heft. Ich schicke es dir kostenlos. Gib mir deine Adresse.",
            "einfach": "Das Rezept steht auch in meinem Heft. Ich schicke es dir kostenlos. Gib mir deine Adresse.",
            "standard": "Ich habe das Rezept auch in einem Heft. Schicke ich dir kostenlos. Gib mir deine Adresse."
          }
        }
      ],
      "fragen": [
        {
          "id": "tiktok/neu/rezept-pause",
          "question": "Dein Timer klingelt. Du willst jetzt kochen. Was machst du?",
          "answers": [
            "Ich schaue noch so lange Videos, bis keine mehr kommen.",
            "Ich schalte nur den Timer aus. Ich schaue weiter.",
            "Ich schließe TikTok. Ich fange mit dem Kochen an."
          ],
          "correctIndex": 2,
          "feedbackCorrect": "Du nutzt die Erinnerung. Du hörst auf und machst das, was du vorhattest.",
          "feedbackWrong": [
            "Es können noch viele Videos kommen. Du darfst selbst aufhören.",
            "Der Timer erinnert dich ans Aufhören. Du willst jetzt kochen.",
            null
          ],
          "hinweis": "Du hast dein Rezept. Was wolltest du danach machen?",
          "remember": "Ich stelle einen Timer.",
          "nachFehler": true
        },
        {
          "id": "tiktok/neu/rezept-adresse",
          "question": "Du kennst die Person mit dem Heft nicht. Sie fragt nach deiner Adresse. Was machst du?",
          "answers": [
            "Ich antworte nicht. Ich zeige die Nachricht einer vertrauten Person.",
            "Ich schließe die Nachricht. Meine Adresse sende ich nicht.",
            "Ich sende meine Adresse für das kostenlose Heft. Ich will es bekommen."
          ],
          "correctIndex": 1,
          "auchMoeglich": [
            0
          ],
          "feedbackCorrect": "Du kennst die Person nicht. Darum bekommt sie deine Adresse nicht. Du schließt die Nachricht selbst.",
          "feedbackWrong": [
            null,
            null,
            "Das Heft ist kostenlos. Trotzdem kennst du die Person nicht. Darum schickst du ihr deine Adresse nicht."
          ],
          "feedbackAuch": [
            "Du kannst die Nachricht auch einer vertrauten Person zeigen. Deine Adresse schickst du nicht.",
            null,
            null
          ],
          "hinweis": "Das Angebot ist kostenlos. Aber kennst du die Person?",
          "remember": "Ich schütze meine privaten Daten.",
          "nachFehler": true
        }
      ],
      "segmentiert": true
    },
    "aufgabenVersionen": {
      "tiktok/neu/rezept-pause": {
        "einfach": {
          "question": "Dein Timer klingelt und du möchtest jetzt kochen. Was machst du?",
          "answers": [
            "Ich schaue Videos, bis die App keine mehr zeigt.",
            "Ich schalte den Timer aus und schaue weiter.",
            "Ich schließe TikTok und fange mit dem Kochen an."
          ],
          "feedbackCorrect": "Du nutzt den Timer als Erinnerung und machst jetzt das, was du dir vorgenommen hast.",
          "feedbackWrong": [
            "Es können weitere Videos kommen. Du entscheidest selbst, wann du aufhörst.",
            "Dein Timer erinnert dich daran, dass du jetzt kochen möchtest.",
            null
          ],
          "hinweis": "Du hast ein Rezept gefunden. Überlege, was du danach vorhattest.",
          "remember": "Ich stelle einen Timer, der mich an meine Pause erinnert."
        },
        "standard": {
          "question": "Der Timer klingelt. Du möchtest jetzt kochen. Wie gehst du vor?",
          "answers": [
            "Ich schaue, bis keine Videos mehr kommen.",
            "Ich stelle den Timer ab und schaue weiter.",
            "Ich schließe TikTok und beginne zu kochen."
          ],
          "feedbackCorrect": "Du folgst deiner eigenen Erinnerung und gehst deinem Plan nach.",
          "feedbackWrong": [
            "Auf das Ende der Videos musst du nicht warten. Du darfst selbst aufhören.",
            "Der Timer erinnert dich an deinen Plan, jetzt zu kochen.",
            null
          ],
          "hinweis": "Dein Rezept hast du gefunden. Was hast du dir danach vorgenommen?",
          "remember": "Ich stelle mir einen Timer."
        }
      },
      "tiktok/neu/rezept-adresse": {
        "einfach": {
          "question": "Die Person mit dem kostenlosen Heft fragt nach deiner Adresse, aber du kennst sie nicht. Was machst du?",
          "answers": [
            "Ich antworte nicht und zeige die Nachricht einer vertrauten Person.",
            "Ich schließe die Nachricht, ohne meine Adresse zu schicken.",
            "Ich schicke meine Adresse, damit ich das kostenlose Rezeptheft bekomme."
          ],
          "feedbackCorrect": "Du kennst die Person nicht. Deshalb schickst du ihr deine Adresse nicht und schließt die Nachricht selbst.",
          "feedbackWrong": [
            null,
            null,
            "Auch bei einem kostenlosen Angebot kennst du die Person nicht. Deine Adresse bleibt privat."
          ],
          "feedbackAuch": [
            "Du kannst die Nachricht auch einer vertrauten Person zeigen. Deine Adresse gibst du dabei nicht weiter.",
            null,
            null
          ],
          "hinweis": "Überlege, ob du die Person durch das kostenlose Angebot wirklich kennst.",
          "remember": "Ich passe auf meine privaten Daten auf."
        },
        "standard": {
          "question": "Eine unbekannte Person bietet dir ein kostenloses Rezeptheft an und fragt nach deiner Adresse. Wie reagierst du?",
          "answers": [
            "Ich antworte nicht und zeige die Nachricht einer vertrauten Person.",
            "Ich schließe die Nachricht und gebe meine Adresse nicht weiter.",
            "Ich sende meine Adresse, damit ich das kostenlose Rezeptheft bekomme."
          ],
          "feedbackCorrect": "Du kennst die Person nicht – also bekommt sie deine Adresse nicht. Du beendest den Kontakt selbst.",
          "feedbackWrong": [
            null,
            null,
            "Ein kostenloses Angebot macht die unbekannte Person nicht vertraut. Gib deine Adresse nicht weiter."
          ],
          "feedbackAuch": [
            "Du kannst die Nachricht zusätzlich mit einer vertrauten Person ansehen. Deine Adresse gibst du dabei nicht weiter.",
            null,
            null
          ],
          "hinweis": "Macht ein kostenloses Angebot die fremde Person vertraut?",
          "remember": "Ich schütze meine privaten Daten."
        }
      }
    }
  },
  "whatsapp": {
    "neueSituation": {
      "einstieg": {
        "leicht": "Du hast einen Ausflug beim Freizeit-Treff gebucht. Du wartest auf neue Nachrichten.",
        "einfach": "Du hast einen Ausflug beim Freizeit-Treff gebucht und wartest auf Informationen.",
        "standard": "Du hast einen Ausflug beim Freizeit-Treff gebucht und erwartest weitere Informationen."
      },
      "kanal": {
        "leicht": "Nachrichten von einer fremden Nummer",
        "einfach": "Nachrichten von einer unbekannten Nummer",
        "standard": "Nachrichten von einer unbekannten Nummer"
      },
      "inhalt": [
        {
          "typ": "nachricht",
          "von": "Fremde Nummer",
          "text": {
            "leicht": "Der Ausflug fällt aus. Du bekommst dein Geld zurück. Bestätige hier deine Daten: [Link]",
            "einfach": "Der Ausflug fällt aus. Du bekommst dein Geld zurück. Bestätige hier deine Daten: [Link]",
            "standard": "Der Ausflug fällt aus. Du bekommst dein Geld zurück. Bestätige hier deine Daten: [Link]"
          }
        },
        {
          "typ": "nachricht",
          "von": "Fremde Nummer",
          "text": {
            "leicht": "Du bekommst gleich einen Code per SMS. Schick ihn mir für die Rückzahlung.",
            "einfach": "Du bekommst gleich einen Code per SMS. Schick ihn mir für die Rückzahlung.",
            "standard": "Du bekommst gleich einen Code per SMS. Schick ihn mir für die Rückzahlung."
          }
        }
      ],
      "fragen": [
        {
          "id": "whatsapp/neu/ausflug-rueckzahlung",
          "question": "Du wartest auf Nachrichten zum Ausflug. Diese Nachricht kommt von einer fremden Nummer. Was machst du?",
          "answers": [
            "Ich frage eine vertraute Person. Den Link lasse ich zu.",
            "Ich rufe beim Freizeit-Treff an. Ich nutze die bekannte Nummer.",
            "Ich tippe auf den Link. Ich will mein Geld schnell zurück."
          ],
          "correctIndex": 1,
          "auchMoeglich": [
            0
          ],
          "feedbackCorrect": "Du prüfst beim Freizeit-Treff. Du nutzt dafür die bekannte Nummer. Der Link in der fremden Nachricht bleibt zu.",
          "feedbackWrong": [
            null,
            null,
            "Du weißt noch nicht: Wer schreibt dir? Prüfe erst beim Freizeit-Treff."
          ],
          "feedbackAuch": [
            "Du öffnest den Link nicht. Eine vertraute Person kann mit dir beim Freizeit-Treff prüfen.",
            null,
            null
          ],
          "hinweis": "Du kennst die Nummer vom Freizeit-Treff schon. Welche Nummer nutzt du zum Prüfen?",
          "remember": "Ich öffne die App selbst. Oder ich rufe eine bekannte Nummer an.",
          "nachFehler": true
        },
        {
          "id": "whatsapp/neu/ausflug-code",
          "question": "Jetzt kommt eine SMS mit deinem WhatsApp-Code. Die fremde Nummer will den Code für die Rückzahlung. Was machst du?",
          "answers": [
            "Ich sende den Code. Dann bekomme ich das Geld zurück.",
            "Ich sende nichts. Ich zeige es einer vertrauten Person.",
            "Ich gebe den Code nicht weiter. Ich beende den Chat."
          ],
          "correctIndex": 2,
          "auchMoeglich": [
            1
          ],
          "feedbackCorrect": "Der Code gehört zu deinem WhatsApp-Konto. Für eine Rückzahlung braucht ihn niemand. Du gibst ihn nicht weiter.",
          "feedbackWrong": [
            "Mit dem Code kann jemand dein WhatsApp-Konto übernehmen. Schicke ihn nicht.",
            null,
            null
          ],
          "feedbackAuch": [
            null,
            "Du gibst den Code nicht weiter. Du holst dir Hilfe für diese Nachricht.",
            null
          ],
          "hinweis": "Es ist dein WhatsApp-Code. Wozu gehört er?",
          "remember": "Ich gebe keine Passwörter oder geheimen Codes weiter.",
          "nachFehler": true
        }
      ],
      "segmentiert": true
    },
    "aufgabenVersionen": {
      "whatsapp/neu/ausflug-rueckzahlung": {
        "einfach": {
          "question": "Du erwartest Informationen zum Ausflug. Die Nachricht kommt aber von einer unbekannten Nummer. Was machst du?",
          "answers": [
            "Ich lasse den Link geschlossen und prüfe mit einer vertrauten Person.",
            "Ich rufe den Freizeit-Treff unter seiner bekannten Nummer an.",
            "Ich öffne den Link, weil ich die Rückzahlung schnell haben möchte."
          ],
          "feedbackCorrect": "Du prüfst die Nachricht beim Freizeit-Treff über den dir bekannten Kontakt. Dafür brauchst du den unbekannten Link nicht.",
          "feedbackWrong": [
            null,
            null,
            "Die unbekannte Nummer ist noch nicht geprüft. Frage beim Freizeit-Treff nach, bevor du einen Link öffnest."
          ],
          "feedbackAuch": [
            "Du öffnest den Link nicht. Eine vertraute Person kann dir beim Prüfen helfen.",
            null,
            null
          ],
          "hinweis": "Du hast schon eine Nummer vom Freizeit-Treff. Nutze zum Prüfen diesen bekannten Kontakt.",
          "remember": "Ich öffne die App selbst oder rufe eine bekannte Nummer an."
        },
        "standard": {
          "question": "Du erwartest Informationen zum Ausflug, doch diese Nachricht kommt von einer unbekannten Nummer. Wie prüfst du sie?",
          "answers": [
            "Ich lasse den Link zu und hole eine vertraute Person zum Prüfen dazu.",
            "Ich rufe den Freizeit-Treff über die bekannte Nummer an.",
            "Ich öffne den Link, damit ich mein Geld möglichst schnell zurückbekomme."
          ],
          "feedbackCorrect": "Du fragst beim Freizeit-Treff über den bekannten Kontakt nach. Den Link aus der unbekannten Nachricht brauchst du dafür nicht zu öffnen.",
          "feedbackWrong": [
            null,
            null,
            "Der Absender ist noch nicht geprüft. Frage über den bekannten Kontakt nach, bevor du einen Link öffnest."
          ],
          "feedbackAuch": [
            "Mit einer vertrauten Person zu prüfen ist ebenso sicher. Der unbekannte Link bleibt geschlossen.",
            null,
            null
          ],
          "hinweis": "Welchen Kontakt zum Freizeit-Treff hattest du bereits vor dieser Nachricht?",
          "remember": "Ich öffne die App selbst oder rufe eine mir bekannte Nummer an."
        }
      },
      "whatsapp/neu/ausflug-code": {
        "einfach": {
          "question": "Du bekommst nun eine SMS mit deinem WhatsApp-Code. Die unbekannte Nummer will den Code für die Rückzahlung. Wie reagierst du?",
          "answers": [
            "Ich schicke den Code, damit das Geld schnell auf mein Konto kommt.",
            "Ich sende nichts und zeige die Nachricht einer vertrauten Person.",
            "Ich gebe den WhatsApp-Code nicht weiter und beende den Chat."
          ],
          "feedbackCorrect": "Der Code gehört zu deinem WhatsApp-Konto. Für eine Rückzahlung ist er nicht nötig. Du gibst ihn nicht weiter.",
          "feedbackWrong": [
            "Jemand kann mit deinem Code das WhatsApp-Konto übernehmen. Gib den Code nicht weiter.",
            null,
            null
          ],
          "feedbackAuch": [
            null,
            "Du gibst den Code nicht weiter und holst dir Hilfe für die Nachricht.",
            null
          ],
          "hinweis": "Überlege, welches Konto dieser Code schützt.",
          "remember": "Ich gebe keine Passwörter oder geheimen Codes weiter."
        },
        "standard": {
          "question": "Eine SMS mit deinem WhatsApp-Code kommt an. Die fremde Nummer verlangt ihn für die Rückzahlung. Was tust du?",
          "answers": [
            "Ich schicke den Code, damit die Rückzahlung endlich bearbeitet wird.",
            "Ich sende nichts und bespreche die Nachricht mit einer vertrauten Person.",
            "Ich behalte den WhatsApp-Code für mich und beende den Chat."
          ],
          "feedbackCorrect": "Dein WhatsApp-Code wird für die Anmeldung an deinem Konto gebraucht. Eine Rückzahlung benötigt ihn nicht. Du gibst ihn nicht weiter.",
          "feedbackWrong": [
            "Mit deinem Code könnte jemand dein WhatsApp-Konto übernehmen. Schicke ihn nicht weiter.",
            null,
            null
          ],
          "feedbackAuch": [
            null,
            "Du schützt den Code und holst dir Unterstützung für die Nachricht. Das ist ebenso in Ordnung.",
            null
          ],
          "hinweis": "Zu welchem Konto gehört der Code aus der SMS?",
          "remember": "Ich gebe keine Passwörter oder geheimen Codes weiter."
        }
      }
    }
  },
  "youtube": {
    "neueSituation": {
      "einstieg": {
        "leicht": "Du willst deine Zimmer-Pflanze pflegen. Du suchst einen Tipp auf YouTube.",
        "einfach": "Du suchst auf YouTube nach einem Tipp für die Pflege deiner Zimmerpflanze.",
        "standard": "Du möchtest deine Zimmerpflanze pflegen und suchst auf YouTube nach einem passenden Tipp."
      },
      "kanal": {
        "leicht": "Video und nächstes Video",
        "einfach": "Pflanzenvideo und automatische Wiedergabe",
        "standard": "Pflanzenvideo und automatische Wiedergabe"
      },
      "inhalt": [
        {
          "typ": "hinweis",
          "text": {
            "leicht": "Im Video steht Werbung. Eine Person zeigt eine Flasche Dünger.",
            "einfach": "Im Video steht Werbung. Eine Person stellt eine Flasche Dünger vor.",
            "standard": "Das Video ist als Werbung gekennzeichnet und stellt einen Pflanzendünger vor."
          }
        },
        {
          "typ": "nachricht",
          "von": {
            "leicht": "Die Person im Video",
            "einfach": "Die Person im Video",
            "standard": "Person im Pflanzenvideo"
          },
          "text": {
            "leicht": "Mit diesem Dünger wächst deine Pflanze 10-mal schneller. Kauf ihn heute. Den Link findest du unter dem Video.",
            "einfach": "Mit diesem Dünger wächst deine Pflanze zehnmal schneller. Kauf ihn heute über den Link unter dem Video.",
            "standard": "Mit diesem Dünger wächst deine Pflanze zehnmal schneller. Kauf ihn noch heute über den Link unter dem Video."
          }
        },
        {
          "typ": "hinweis",
          "text": {
            "leicht": "Das Pflanzen-Video ist vorbei. Ein neues Video startet. Du hast Lust auf einen Spaziergang.",
            "einfach": "Nach dem Pflanzenvideo startet automatisch ein neues Video. Du möchtest jetzt einen Spaziergang machen.",
            "standard": "Das Pflanzenvideo ist beendet, und Autoplay startet das nächste Video. Du möchtest jetzt eine Pause und einen Spaziergang machen."
          }
        }
      ],
      "fragen": [
        {
          "id": "youtube/neu/pflanzentipp-werbung",
          "pictogram": "pikto-search",
          "correctIndex": 2,
          "nachFehler": true,
          "question": "Du willst deine Pflanze pflegen. Was machst du mit dem Versprechen aus dem Video?",
          "answers": [
            "Ich kaufe den Dünger sofort. Das Video verspricht viel.",
            "Ich kaufe keinen Dünger. Ich suche einen anderen Tipp.",
            "Ich prüfe das Versprechen. Dann entscheide ich in Ruhe."
          ],
          "feedbackCorrect": "Du prüfst die Aussage auf einer anderen Seite. Die Werbung allein ist kein Beweis.",
          "feedbackWrong": [
            "Das Versprechen allein beweist nichts. Du musst den Dünger nicht sofort kaufen.",
            null,
            null
          ],
          "hinweis": "Werbung will etwas verkaufen. Wo findest du noch Informationen über deine Pflanze?",
          "remember": "Ich prüfe: Stimmt das Video?",
          "feedbackAuch": "Du darfst auf den Kauf verzichten. Du kannst nach einem anderen Pflege-Tipp suchen.",
          "auchMoeglich": [
            1
          ]
        },
        {
          "id": "youtube/neu/spaziergang-autoplay",
          "pictogram": "pikto-pause",
          "correctIndex": 1,
          "nachFehler": true,
          "question": "Du willst jetzt spazieren gehen. Ein neues Video läuft schon. Wie machst du Pause?",
          "answers": [
            "Ich schaue das neue Video erst noch zu Ende.",
            "Ich stoppe das Video. Dann gehe ich spazieren.",
            "Ich schließe YouTube. Dann gehe ich spazieren."
          ],
          "feedbackCorrect": "Du stoppst das Video. Du entscheidest über deine Zeit.",
          "feedbackWrong": [
            "Das neue Video hält dich noch am Bildschirm. Du darfst es sofort stoppen.",
            null,
            null
          ],
          "hinweis": "Du musst das neue Video nicht fertig schauen. Was willst du jetzt machen?",
          "remember": "Ich darf Videos stoppen.",
          "feedbackAuch": "Du kannst YouTube schließen. So machst du auch eine Pause vom Bildschirm.",
          "auchMoeglich": [
            2
          ]
        }
      ],
      "segmentiert": true
    },
    "aufgabenVersionen": {
      "youtube/neu/pflanzentipp-werbung": {
        "einfach": {
          "question": "Ein Video verspricht mit einem Dünger besonders schnelles Wachstum. Wie entscheidest du?",
          "answers": [
            "Ich kaufe sofort, weil mich das Versprechen im Video überzeugt.",
            "Ich kaufe den Dünger nicht und suche einen anderen Pflegetipp.",
            "Ich prüfe das Versprechen erst und entscheide ohne Kaufdruck."
          ],
          "feedbackCorrect": "Du vergleichst die Werbeaussage mit Informationen aus einer weiteren Quelle. Das Video allein belegt das Versprechen nicht.",
          "feedbackWrong": [
            "Ein großes Werbeversprechen reicht nicht als Beleg. Du kannst dir vor einem Kauf Zeit für die Prüfung nehmen.",
            null,
            null
          ],
          "hinweis": "Wer möchte dir etwas verkaufen? Welche andere Quelle erklärt, was deine Pflanze braucht?",
          "remember": "Ich prüfe, ob die Aussage im Video stimmt.",
          "feedbackAuch": "Du darfst dich gegen das Produkt entscheiden. Mit einem anderen Tipp kannst du auch ohne diesen Kauf weiterlernen."
        },
        "standard": {
          "question": "Ein Pflanzenvideo wirbt mit einem besonders wirksamen Dünger. Wie gehst du mit dem Verkaufsversprechen um?",
          "answers": [
            "Ich kaufe das Produkt sofort, weil das Versprechen überzeugend klingt.",
            "Ich kaufe dieses Produkt nicht und suche nach einem anderen Pflegetipp.",
            "Ich vergleiche die Aussage mit anderen Quellen und entscheide danach."
          ],
          "feedbackCorrect": "Du prüfst die Behauptung unabhängig von der Werbung und entscheidest anschließend ohne Kaufdruck.",
          "feedbackWrong": [
            "Ein überzeugendes Verkaufsversprechen belegt die behauptete Wirkung nicht. Prüfe es vor einer Kaufentscheidung.",
            null,
            null
          ],
          "hinweis": "Welche Quelle ohne dieses Verkaufsziel hilft dir, die Bedürfnisse deiner Pflanze und die Behauptung einzuordnen?",
          "remember": "Behauptungen aus Videos prüfe ich mit weiteren Informationen.",
          "feedbackAuch": "Du kannst das Produkt ablehnen und nach einem anderen Pflegetipp suchen. Eine Kaufpflicht entsteht durch das Video nicht."
        }
      },
      "youtube/neu/spaziergang-autoplay": {
        "einfach": {
          "question": "Du möchtest jetzt einen Spaziergang machen, aber das nächste Video hat schon begonnen. Wie beginnst du deine Pause?",
          "answers": [
            "Ich schaue das neue Video zuerst vollständig an.",
            "Ich stoppe das Video und gehe spazieren.",
            "Ich schließe YouTube und gehe spazieren."
          ],
          "feedbackCorrect": "Du darfst die Wiedergabe beenden. Auch ein automatisch gestartetes Video verpflichtet dich zu nichts.",
          "feedbackWrong": [
            "Dann verschiebst du die Pause für ein weiteres Video. Du darfst auch mitten im Video stoppen.",
            null,
            null
          ],
          "hinweis": "Was möchtest du jetzt tun? Das automatisch gestartete Video entscheidet nicht für dich.",
          "remember": "Ich darf Videos stoppen.",
          "feedbackAuch": "Das Schließen der App beendet ebenfalls das Weiterschauen. Du kannst deinen Spaziergang beginnen."
        },
        "standard": {
          "question": "Du willst eine Bildschirmpause und einen Spaziergang machen. Wie gehst du mit dem bereits gestarteten nächsten Video um?",
          "answers": [
            "Ich schaue das nächste Video noch vollständig an und verschiebe die Pause.",
            "Ich stoppe die Wiedergabe und beginne meinen Spaziergang.",
            "Ich schließe YouTube und beginne meinen Spaziergang."
          ],
          "feedbackCorrect": "Du beendest die Wiedergabe und setzt deine eigene Absicht um. Autoplay verpflichtet dich nicht zum Weiterschauen.",
          "feedbackWrong": [
            "Damit verschiebst du die gewünschte Pause. Du musst das Video nicht zu Ende sehen, um aufhören zu dürfen.",
            null,
            null
          ],
          "hinweis": "Welche Handlung führt jetzt zu der Pause, die du selbst möchtest?",
          "remember": "Ich entscheide selbst, wann ich Videos stoppe.",
          "feedbackAuch": "Auch das Schließen von YouTube beendet die Wiedergabe und ermöglicht deine gewünschte Pause."
        }
      }
    }
  }
};
const ZUSATZ_LEKTIONEN = {
  "betrug": [
    "Was ist Phishing?",
    "Falsche Nachrichten erkennen",
    "Der Paket-Trick",
    "Der Hallo-Mama-Trick",
    "Schockanrufe",
    "Liebe im Internet",
    "Falsche Gewinne",
    "Abo-Fallen",
    "Codes nie weitergeben",
    "Vorsicht bei QR-Codes",
    "Was tun nach einem Betrug?"
  ],
  "datenschutz": [
    "Wer will deine Daten?",
    "Eine App will etwas sehen",
    "Fotos prüfen",
    "Standort teilen",
    "Eine Nachricht will deine Daten"
  ],
  "einkaufen": [
    "Gute Shops erkennen",
    "Fake-Shops erkennen",
    "Vor dem Kaufen prüfen",
    "Sicher bezahlen",
    "Bank-Daten schützen",
    "Versteckte Kosten in Apps und Spielen",
    "Nicht sofort kaufen",
    "Falsch gekauft? Das kannst du tun"
  ],
  "facebook": [
    "Profil",
    "Beitrag schreiben",
    "Wer darf etwas sehen?",
    "Kommentare schreiben",
    "Beleidigungen",
    "Fotos mit anderen Personen",
    "Was kann ich tun?"
  ],
  "fakes": [
    "Was sind Fake News?",
    "Warum gibt es Fake News?",
    "KI-Bilder erkennen",
    "Gefälschte Videos: Deepfakes",
    "Geklonte Stimmen am Telefon",
    "Nachrichten prüfen",
    "Nicht einfach weiterleiten"
  ],
  "hilfe": [
    "Das kannst du selbst",
    "Welche Hilfe passt?",
    "Unterstützung wirklich holen",
    "Druck oder Angst: erst stoppen"
  ],
  "instagram": [
    "Foto posten",
    "Kurze Videos und Stories",
    "Standort",
    "Private Nachrichten",
    "Verletzende Kommentare",
    "Bearbeitete Bilder",
    "Was kann ich tun?"
  ],
  "ki": [
    "Wo triffst du KI?",
    "Ein Chatbot ist kein Mensch",
    "So prüfst du eine Antwort",
    "Keine privaten Daten",
    "Gesundheit und Geld"
  ],
  "snapchat": [
    "Kontakte",
    "Stress erkennen"
  ],
  "tiktok": [
    "Private Nachrichten",
    "Videos posten",
    "Kommentare",
    "Gefühle und Pausen",
    "Nicht jedes Video ist echt"
  ],
  "whatsapp": [
    "WhatsApp nutzen",
    "Geld und Betrug",
    "Gruppen",
    "Fotos senden",
    "Stress und Eile",
    "Die KI in WhatsApp"
  ],
  "youtube": [
    "Werbung erkennen",
    "Autoplay und Zeit",
    "Gefährliche Mutproben",
    "Videos, die Angst machen",
    "Kommentare",
    "Nicht jedes Video ist echt",
    "Was kann ich tun?"
  ]
};

topics.forEach(topic => {
  const neu = ANWENDEN_ERGAENZUNGEN[topic.id];
  if (neu) {
    topic.neueSituation = neu.neueSituation;
    AUFGABEN_VERSIONS[topic.id] = Object.assign({}, AUFGABEN_VERSIONS[topic.id], neu.aufgabenVersionen);
  }
  topic.zusatzLektionen = ZUSATZ_LEKTIONEN[topic.id].slice();
});
/* FERTIGSTELLUNG-LERNWEGE-2026-10-06 END */

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
