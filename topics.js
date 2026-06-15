const topics = [
  {
    "id": "datenschutz",
    "title": "Datenschutz",
    "icon": "lock",
    "desc": "Private Daten und Passwörter schützen",
    "selfAssessment": {
      "question": "Was weißt du schon über den Schutz deiner Daten?",
      "options": [
        "Noch nicht so viel",
        "Ein bisschen",
        "Schon einiges"
      ]
    },
    "learningGoals": [
      "Was private Daten sind",
      "Warum dein Passwort geheim bleibt",
      "Was du tust, wenn jemand nach deinen Daten fragt"
    ],
    "quiz": [
      {
        "question": "Was ist eine private Information?",
        "answers": [
          "Das Wetter.",
          "Meine Adresse."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Deine Adresse ist eine private Information.",
        "feedbackWrong": "Das ist noch nicht richtig. Private Informationen sind Dinge über dich. Zum Beispiel deine Adresse."
      },
      {
        "question": "Was machst du mit deinem Passwort?",
        "answers": [
          "Ich gebe es weiter.",
          "Ich behalte es für mich."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Dein Passwort bleibt geheim.",
        "feedbackWrong": "Das ist noch nicht richtig. Wenn andere dein Passwort kennen, können sie dein Konto benutzen."
      },
      {
        "question": "Was ist ein gutes Passwort?",
        "answers": [
          "Kurz und leicht.",
          "Lang und schwer zu erraten."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Ein langes Passwort ist sicherer.",
        "feedbackWrong": "Das ist noch nicht richtig. Ein kurzes Passwort ist leichter zu erraten."
      },
      {
        "question": "Eine App fragt nach deiner Adresse. Du weißt nicht warum. Was ist besser?",
        "answers": [
          "Adresse eintragen.",
          "Adresse nicht eintragen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Du gibst deine Adresse nicht einfach weiter.",
        "feedbackWrong": "Das ist noch nicht richtig. Du weißt nicht, wofür die App deine Adresse braucht."
      },
      {
        "question": "Ein Gewinnspiel fragt nach deiner Telefon-Nummer. Was ist besser?",
        "answers": [
          "Telefon-Nummer eintragen.",
          "Telefon-Nummer nicht eintragen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Deine Telefon-Nummer ist privat.",
        "feedbackWrong": "Das ist noch nicht richtig. Deine Telefon-Nummer kann von anderen benutzt werden."
      },
      {
        "question": "Du willst ein Foto senden. Was machst du zuerst?",
        "answers": [
          "Foto prüfen.",
          "Sofort senden."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Du prüfst, ob private Dinge zu sehen sind.",
        "feedbackWrong": "Das ist noch nicht richtig. Auf einem Foto können private Dinge zu sehen sein."
      },
      {
        "question": "Eine fremde Nachricht schickt einen Link. Was ist besser?",
        "answers": [
          "Link sofort öffnen.",
          "Link nicht sofort öffnen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Ein fremder Link kann gefährlich sein.",
        "feedbackWrong": "Das ist noch nicht richtig. Ein fremder Link kann gefährlich sein."
      },
      {
        "question": "Eine Nachricht macht Druck. Was ist besser?",
        "answers": [
          "Schnell klicken.",
          "Langsam machen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Du machst es langsam. Du überlegst zuerst.",
        "feedbackWrong": "Das ist noch nicht richtig. Druck ist ein Warnzeichen."
      },
      {
        "question": "Wer darf dein Passwort kennen?",
        "answers": [
          "Nur ich.",
          "Alle in der Gruppe."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Nur du darfst dein Passwort kennen.",
        "feedbackWrong": "Das ist noch nicht richtig. Dein Passwort ist nicht für die Gruppe."
      },
      {
        "question": "Was ist eine gute Regel?",
        "answers": [
          "Erst prüfen.",
          "Immer sofort klicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Erst prüfen ist sicherer.",
        "feedbackWrong": "Das ist noch nicht richtig. Schnell klicken kann gefährlich sein."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "lock",
        "text": [
          {
            "text": "Hier lernst du etwas über Datenschutz.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Du lernst: Welche Daten sind privat?",
            "pictogram": "pikto-data"
          },
          {
            "text": "Du übst sichere Entscheidungen.",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Du kannst den Hilfe-Button nutzen, wenn du unsicher bist.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-lock"
      },
      {
        "title": "Was sind private Daten?",
        "module": "Grundwissen",
        "icon": "data",
        "text": [
          {
            "text": "Private Daten gehören zu dir.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Sie sagen etwas über dich.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Andere Menschen sollen diese Daten nicht einfach bekommen.",
            "pictogram": "pikto-no"
          }
        ],
        "bullets": [
          {
            "text": "dein Name",
            "pictogram": "pikto-data"
          },
          {
            "text": "deine Adresse",
            "pictogram": "pikto-location"
          },
          {
            "text": "deine Telefon-Nummer",
            "pictogram": "pikto-data"
          },
          {
            "text": "dein Geburtstag",
            "pictogram": "pikto-data"
          },
          {
            "text": "deine Fotos",
            "pictogram": "pikto-photo"
          },
          {
            "text": "dein Passwort",
            "pictogram": "pikto-lock"
          }
        ],
        "remember": "Private Daten gehören zu mir.",
        "pictogram": "pikto-data"
      },
      {
        "title": "Besonders wichtige Daten",
        "module": "Grundwissen",
        "icon": "warning",
        "text": [
          {
            "text": "Manche Daten sind besonders wichtig.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Mit diesen Daten können andere Menschen viel über dich erfahren.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Darum schützt du diese Daten besonders gut.",
            "pictogram": "pikto-data"
          }
        ],
        "bullets": [
          {
            "text": "Passwort",
            "pictogram": "pikto-lock"
          },
          {
            "text": "PIN",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Adresse",
            "pictogram": "pikto-location"
          },
          {
            "text": "Telefon-Nummer",
            "pictogram": "pikto-data"
          },
          {
            "text": "Bank-Daten",
            "pictogram": "pikto-data"
          },
          {
            "text": "Ausweis-Daten",
            "pictogram": "pikto-data"
          }
        ],
        "remember": "Besonders wichtige Daten gebe ich nicht einfach weiter.",
        "pictogram": "pikto-data"
      },
      {
        "title": "Passwort bleibt geheim",
        "module": "Passwort",
        "icon": "lock",
        "text": [
          {
            "text": "Ein Passwort schützt dein Konto.",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Ein Passwort ist wie ein Schlüssel.",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Andere Menschen dürfen dein Passwort nicht benutzen.",
            "pictogram": "pikto-lock"
          }
        ],
        "warning": "Gib dein Passwort nicht weiter.",
        "practice": {
          "question": "Jemand fragt nach deinem Passwort. Was ist besser?",
          "answers": [
            "Ich gebe das Passwort weiter.",
            "Ich behalte das Passwort für mich."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Mit deinem Passwort kann jemand dein Konto benutzen.",
          "feedbackCorrect": "Das ist sicher. Dein Passwort bleibt geheim.",
          "remember": "Mein Passwort bleibt geheim."
        },
        "pictogram": "pikto-lock"
      },
      {
        "title": "Gutes Passwort",
        "module": "Passwort",
        "icon": "check",
        "text": [
          {
            "text": "Ein gutes Passwort ist lang.",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Es ist nicht dein Name.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Es ist nicht dein Geburtstag.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Buchstaben und Zahlen sind gut.",
            "pictogram": "pikto-shop"
          }
        ],
        "bullets": [
          {
            "text": "nicht dein Name",
            "pictogram": "pikto-no"
          },
          {
            "text": "nicht dein Geburtstag",
            "pictogram": "pikto-no"
          },
          {
            "text": "mindestens 10 Zeichen",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Buchstaben und Zahlen",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Sonderzeichen sind gut, zum Beispiel ! oder ?",
            "pictogram": "pikto-lock"
          }
        ],
        "practice": {
          "question": "Welches Passwort ist besser?",
          "answers": [
            "Frank1980",
            "Blume!Tisch7Wasser"
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht so sicher. Ein Name oder ein Geburtstag ist leichter zu erraten.",
          "feedbackCorrect": "Das ist sicherer. Das Passwort ist lang und schwerer zu erraten.",
          "remember": "Ich nehme ein langes Passwort."
        },
        "pictogram": "pikto-lock"
      },
      {
        "title": "Adresse eingeben",
        "module": "Private Daten",
        "icon": "data",
        "text": [
          {
            "text": "Eine App fragt nach deiner Adresse.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Du weißt nicht warum.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Dann musst du nicht sofort etwas eintragen.",
            "pictogram": "pikto-location"
          }
        ],
        "examples": [
          "Eine Spiele-App fragt nach deiner Adresse.",
          "Ein Gewinnspiel fragt nach deinem Geburtstag."
        ],
        "practice": {
          "question": "Eine App fragt nach deiner Adresse. Du weißt nicht warum. Was ist besser?",
          "answers": [
            "Ich trage die Adresse ein.",
            "Ich trage die Adresse nicht ein."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Du weißt nicht, wofür die App deine Adresse braucht.",
          "feedbackCorrect": "Das ist sicher. Deine Adresse ist privat. Du gibst sie nicht einfach weiter.",
          "remember": "Ich gebe meine Adresse nicht einfach weiter."
        },
        "pictogram": "pikto-data"
      },
      {
        "title": "Telefon-Nummer und Geburtstag",
        "module": "Private Daten",
        "icon": "help",
        "text": [
          {
            "text": "Auch deine Telefon-Nummer ist privat.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Auch dein Geburtstag kann privat sein.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Diese Daten gibst du nicht überall ein.",
            "pictogram": "pikto-no"
          }
        ],
        "examples": [
          "Ein Formular fragt nach deiner Telefon-Nummer.",
          "Ein Gewinnspiel fragt nach deinem Geburtstag."
        ],
        "practice": {
          "question": "Ein Gewinnspiel fragt nach deiner Telefon-Nummer. Was ist besser?",
          "answers": [
            "Ich trage die Telefon-Nummer ein.",
            "Ich trage die Telefon-Nummer nicht ein."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Deine Telefon-Nummer ist privat.",
          "feedbackCorrect": "Das ist sicher. Du schützt deine Telefon-Nummer.",
          "remember": "Ich gebe meine Telefon-Nummer nicht einfach weiter."
        },
        "pictogram": "pikto-data"
      },
      {
        "title": "Fotos prüfen",
        "module": "Fotos",
        "icon": "photo",
        "text": [
          {
            "text": "Du willst ein Foto verschicken.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Auf dem Foto sieht man vielleicht private Dinge.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Zum Beispiel: dein Zimmer oder einen Brief.",
            "pictogram": "pikto-photo"
          }
        ],
        "examples": [
          "Auf dem Foto liegt ein Brief.",
          "Im Hintergrund sieht man eine andere Person.",
          "Auf dem Foto sieht man deine Wohnung."
        ],
        "practice": {
          "question": "Auf dem Foto sieht man einen Brief mit Adresse. Was ist besser?",
          "answers": [
            "Ich schicke das Foto sofort.",
            "Ich schicke das Foto nicht so weiter."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Andere können die Adresse auf dem Foto lesen.",
          "feedbackCorrect": "Das ist sicher. Du schützt die Adresse auf dem Foto.",
          "remember": "Ich prüfe Fotos vor dem Senden."
        },
        "pictogram": "pikto-photo"
      },
      {
        "title": "Fremde Links und Nachrichten",
        "module": "Nachrichten",
        "icon": "link",
        "text": [
          {
            "text": "Manche Nachrichten wollen private Daten bekommen.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Manche Nachrichten enthalten einen Link.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Ein fremder Link kann gefährlich sein.",
            "pictogram": "pikto-link"
          }
        ],
        "examples": [
          "Klick schnell auf diesen Link.",
          "Gib deine Adresse ein.",
          "Du hast etwas gewonnen."
        ],
        "practice": {
          "question": "Eine fremde Nachricht schickt dir einen Link. Was ist besser?",
          "answers": [
            "Ich öffne den Link sofort.",
            "Ich öffne den Link nicht sofort."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Ein fremder Link kann gefährlich sein.",
          "feedbackCorrect": "Das ist sicher. Du klickst nicht sofort auf einen fremden Link.",
          "remember": "Ich öffne fremde Links nicht sofort."
        },
        "pictogram": "pikto-message"
      },
      {
        "title": "Druck erkennen",
        "module": "Nachrichten",
        "icon": "warning",
        "text": [
          {
            "text": "Manche Nachrichten machen Druck.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Sie wollen, dass du schnell handelst.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Druck ist ein Warnzeichen.",
            "pictogram": "pikto-feel"
          }
        ],
        "examples": [
          "Klick sofort.",
          "Sonst ist dein Konto weg.",
          "Sag es niemandem."
        ],
        "practice": {
          "question": "Eine Nachricht sagt: Klick sofort. Was ist besser?",
          "answers": [
            "Ich klicke sofort.",
            "Ich mache langsam."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Die Nachricht macht Druck. Druck ist ein Warnzeichen.",
          "feedbackCorrect": "Das ist sicher. Du machst es langsam. Du überlegst zuerst.",
          "remember": "Ich mache langsam, wenn eine Nachricht Druck macht."
        },
        "pictogram": "pikto-message"
      },
      {
        "title": "Was kann ich tun?",
        "module": "Handlungsplan",
        "icon": "help",
        "text": [
          {
            "text": "Eine Nachricht ist komisch.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Oder eine Nachricht macht Druck.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Dann hilft ein Plan.",
            "pictogram": "pikto-help"
          }
        ],
        "bullets": [
          {
            "text": "Ich antworte nicht sofort.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Ich klicke nicht auf Links.",
            "pictogram": "pikto-link"
          },
          {
            "text": "Ich gebe keine privaten Daten ein.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Ich mache eine Pause.",
            "pictogram": "pikto-pause"
          },
          {
            "text": "Ich frage eine Person, der ich vertraue.",
            "pictogram": "pikto-ask"
          }
        ],
        "practice": {
          "question": "Eine Nachricht macht dir Stress. Was ist besser?",
          "answers": [
            "Ich reagiere sofort.",
            "Ich mache Stopp."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Bei Stress ist sofort reagieren oft keine gute Entscheidung.",
          "feedbackCorrect": "Das ist sicher. Du machst Stopp und entscheidest nicht unter Druck.",
          "remember": "Ich habe einen Plan, wenn etwas komisch ist."
        },
        "pictogram": "pikto-help"
      },
      {
        "title": "Das merke ich mir",
        "module": "Zusammenfassung",
        "icon": "remember",
        "text": [
          {
            "text": "Das sind die wichtigsten Regeln aus diesem Thema.",
            "pictogram": "pikto-done"
          }
        ],
        "bullets": [
          {
            "text": "Private Daten gehören zu mir.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Mein Passwort bleibt geheim.",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Ich nehme ein gutes, langes Passwort.",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Ich gebe meine Adresse nicht einfach weiter.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Ich prüfe Fotos vor dem Senden.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Ich öffne fremde Links nicht sofort.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Ich mache langsam, wenn eine Nachricht Druck macht.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Ich darf mir Unterstützung holen.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-done"
      }
    ],
    "illustration": "assets/illustrations/datenschutz.svg",
    "quizQuestions": [
      {
        "question": "Was ist eine private Information?",
        "answers": [
          "Das Wetter.",
          "Meine Adresse."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Deine Adresse ist eine private Information.",
        "feedbackWrong": "Das ist noch nicht richtig. Private Informationen sind Dinge über dich. Zum Beispiel deine Adresse."
      },
      {
        "question": "Was machst du mit deinem Passwort?",
        "answers": [
          "Ich gebe es weiter.",
          "Ich behalte es für mich."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Dein Passwort bleibt geheim.",
        "feedbackWrong": "Das ist noch nicht richtig. Wenn andere dein Passwort kennen, können sie dein Konto benutzen."
      },
      {
        "question": "Was ist ein gutes Passwort?",
        "answers": [
          "Kurz und leicht.",
          "Lang und schwer zu erraten."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Ein langes Passwort ist sicherer.",
        "feedbackWrong": "Das ist noch nicht richtig. Ein kurzes Passwort ist leichter zu erraten."
      },
      {
        "question": "Eine App fragt nach deiner Adresse. Du weißt nicht warum. Was ist besser?",
        "answers": [
          "Adresse eintragen.",
          "Adresse nicht eintragen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Du gibst deine Adresse nicht einfach weiter.",
        "feedbackWrong": "Das ist noch nicht richtig. Du weißt nicht, wofür die App deine Adresse braucht."
      },
      {
        "question": "Ein Gewinnspiel fragt nach deiner Telefon-Nummer. Was ist besser?",
        "answers": [
          "Telefon-Nummer eintragen.",
          "Telefon-Nummer nicht eintragen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Deine Telefon-Nummer ist privat.",
        "feedbackWrong": "Das ist noch nicht richtig. Deine Telefon-Nummer kann von anderen benutzt werden."
      },
      {
        "question": "Du willst ein Foto senden. Was machst du zuerst?",
        "answers": [
          "Foto prüfen.",
          "Sofort senden."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Du prüfst, ob private Dinge zu sehen sind.",
        "feedbackWrong": "Das ist noch nicht richtig. Auf einem Foto können private Dinge zu sehen sein."
      },
      {
        "question": "Eine fremde Nachricht schickt einen Link. Was ist besser?",
        "answers": [
          "Link sofort öffnen.",
          "Link nicht sofort öffnen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Ein fremder Link kann gefährlich sein.",
        "feedbackWrong": "Das ist noch nicht richtig. Ein fremder Link kann gefährlich sein."
      },
      {
        "question": "Eine Nachricht macht Druck. Was ist besser?",
        "answers": [
          "Schnell klicken.",
          "Langsam machen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Du machst es langsam. Du überlegst zuerst.",
        "feedbackWrong": "Das ist noch nicht richtig. Druck ist ein Warnzeichen."
      },
      {
        "question": "Wer darf dein Passwort kennen?",
        "answers": [
          "Nur ich.",
          "Alle in der Gruppe."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Nur du darfst dein Passwort kennen.",
        "feedbackWrong": "Das ist noch nicht richtig. Dein Passwort ist nicht für die Gruppe."
      },
      {
        "question": "Was ist eine gute Regel?",
        "answers": [
          "Erst prüfen.",
          "Immer sofort klicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Erst prüfen ist sicherer.",
        "feedbackWrong": "Das ist noch nicht richtig. Schnell klicken kann gefährlich sein."
      }
    ],
    "certificateGoals": [
      "private Daten erkennen",
      "Daten sparsam teilen",
      "bei Unsicherheit Hilfe holen"
    ],
    "helpQuestions": [
      "Muss ich diese Daten eingeben?",
      "Weiß ich, wer die Daten bekommt?",
      "Macht die Nachricht Druck?",
      "Ist der Link fremd?",
      "Brauche ich Unterstützung?"
    ],
    "memoryRules": [
      "Private Daten gehören zu mir.",
      "Mein Passwort bleibt geheim.",
      "Ich nehme ein gutes, langes Passwort.",
      "Ich gebe private Daten nicht einfach ein.",
      "Ich prüfe Fotos vor dem Senden.",
      "Ich öffne fremde Links nicht sofort.",
      "Ich mache langsam bei komischen Nachrichten.",
      "Ich darf mir Unterstützung holen."
    ],
    "shortLessonIndexes": [
      0,
      1,
      3,
      4,
      5,
      7,
      9,
      10,
      11
    ],
    "qrLink": "index.html#datenschutz",
    "qrShortLink": "index.html#datenschutz:kurz",
    "qrQuizLink": "index.html#datenschutz:quiz",
    "qrMemoryLink": "index.html#datenschutz:merk",
    "einfachLessons": [
      {
        "title": "Deine privaten Daten",
        "module": "Einfach",
        "pictogram": "pikto-data",
        "icon": "lock",
        "text": [
          "Du hast private Daten.",
          "Das ist dein Name.",
          "Das ist deine Adresse.",
          "Das ist dein Passwort.",
          "Diese Daten gehören nur dir."
        ],
        "remember": "Private Daten sind nur für dich."
      },
      {
        "title": "Dein Passwort",
        "module": "Einfach",
        "pictogram": "pikto-lock",
        "icon": "lock",
        "text": [
          "Du hast ein Passwort.",
          "Das Passwort ist geheim.",
          "Du sagst es niemandem.",
          "Auch nicht guten Freunden.",
          "Dein Passwort ist lang und schwer zu erraten."
        ],
        "remember": "Dein Passwort bleibt geheim."
      },
      {
        "title": "Jemand fragt nach deinen Daten",
        "module": "Einfach",
        "pictogram": "pikto-ask",
        "icon": "warning",
        "text": [
          "Manchmal fragt jemand nach deinen Daten.",
          "Das passiert in einer Nachricht.",
          "Du gibst deine Daten nicht ein.",
          "Du fragst zuerst eine vertraute Person.",
          "Diese Person hilft dir."
        ],
        "remember": "Erst fragen. Dann entscheiden."
      }
    ],
    "miniQuestion": {
      "question": "Welche Information bleibt geheim?",
      "answers": [
        "PIN und Passwort",
        "Wetter",
        "Lieblingsfarbe"
      ],
      "correct": 0,
      "explanation": "PIN und Passwort bleiben geheim. Diese Daten darfst du nicht weitergeben."
    }
  },
  {
    "id": "whatsapp",
    "title": "WhatsApp",
    "icon": "message",
    "desc": "Nachrichten, Links, Gruppen und Codes sicher nutzen",
    "selfAssessment": {
      "question": "Wie sicher fühlst du dich bei WhatsApp?",
      "options": [
        "Noch nicht so sicher",
        "Ein bisschen sicher",
        "Schon ziemlich sicher"
      ]
    },
    "learningGoals": [
      "Was du bei fremden Nummern tust",
      "Warum du keine Codes weitergibst",
      "Was du bei Geld-Bitten machst"
    ],
    "quiz": [
      {
        "question": "Eine fremde Nummer schreibt dir. Was ist besser?",
        "answers": [
          "Sofort private Daten schicken.",
          "Nicht sofort antworten."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Du weißt nicht, wer das wirklich ist.",
        "feedbackCorrect": "Das ist sicher. Du gibst keine privaten Daten an fremde Nummern."
      },
      {
        "question": "Jemand fragt nach deinem WhatsApp-Code. Was ist besser?",
        "answers": [
          "Code schicken.",
          "Code nicht schicken."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Mit dem Code können andere dein WhatsApp übernehmen.",
        "feedbackCorrect": "Das ist sicher. Dein WhatsApp-Code bleibt geheim."
      },
      {
        "question": "Ein unbekannter Link kommt an. Was ist besser?",
        "answers": [
          "Link öffnen.",
          "Link nicht öffnen."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Unbekannte Links können gefährlich sein.",
        "feedbackCorrect": "Das ist sicher. Du öffnest den Link nicht sofort."
      },
      {
        "question": "Du willst ein Foto von einer Person senden. Was ist besser?",
        "answers": [
          "Erst fragen.",
          "Einfach senden."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Andere Menschen dürfen mitbestimmen.",
        "feedbackCorrect": "Das ist sicher. Du fragst zuerst."
      },
      {
        "question": "Eine Nachricht macht dir Stress. Was ist besser?",
        "answers": [
          "Pause machen.",
          "Sofort antworten."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Unter Stress machst du leichter Fehler.",
        "feedbackCorrect": "Das ist sicher. Du machst erst eine Pause."
      },
      {
        "question": "Was kannst du mit einer stressigen Gruppe machen?",
        "answers": [
          "Stumm schalten.",
          "Immer sofort antworten."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Du musst nicht immer sofort antworten.",
        "feedbackCorrect": "Das ist sicher. Du darfst Gruppen stumm schalten."
      },
      {
        "question": "Was ist bei Sprachnachrichten wichtig?",
        "answers": [
          "Vorher überlegen.",
          "Alles sagen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Du kannst aus Versehen private Dinge erzählen.",
        "feedbackCorrect": "Das ist sicher. Du überlegst vorher."
      },
      {
        "question": "Eine Nachricht sagt: sofort bezahlen. Was ist besser?",
        "answers": [
          "Nicht sofort handeln.",
          "Sofort bezahlen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Betrüger machen oft Druck.",
        "feedbackCorrect": "Das ist sicher. Du bezahlst nicht sofort."
      },
      {
        "question": "Was gehört nicht in eine Gruppe?",
        "answers": [
          "Private Daten.",
          "Ein freundlicher Gruß."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Private Daten gehören nicht in Gruppen.",
        "feedbackCorrect": "Das ist richtig. Private Daten bleiben geschützt."
      },
      {
        "question": "Was ist eine gute WhatsApp-Regel?",
        "answers": [
          "Erst prüfen.",
          "Immer sofort klicken."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Schnell klicken kann gefährlich sein.",
        "feedbackCorrect": "Das ist sicher. Erst prüfen ist besser."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "message",
        "text": [
          {
            "text": "Hier lernst du etwas über WhatsApp.",
            "pictogram": "pikto-screen"
          },
          {
            "text": "Du übst sichere Entscheidungen.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du kannst den Hilfe-Button nutzen, wenn du unsicher bist.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-message"
      },
      {
        "title": "WhatsApp nutzen",
        "module": "Grundwissen",
        "icon": "message",
        "text": [
          {
            "text": "Mit WhatsApp kannst du Nachrichten schreiben.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du kannst Bilder und Sprachnachrichten senden.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Du kannst in Gruppen schreiben.",
            "pictogram": "pikto-message"
          }
        ],
        "remember": "Ich entscheide, wem ich antworte.",
        "pictogram": "pikto-data"
      },
      {
        "title": "Fremde Nummer",
        "module": "Nachrichten",
        "icon": "warning",
        "text": [
          {
            "text": "Eine fremde Nummer schreibt dir.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du weißt nicht, wer das ist.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Du antwortest nicht sofort.",
            "pictogram": "pikto-location"
          }
        ],
        "examples": [
          "Hallo, ich habe eine neue Nummer.",
          "Schick mir bitte Geld."
        ],
        "practice": {
          "question": "Eine fremde Nummer schreibt dir. Was ist besser?",
          "answers": [
            "Ich schicke private Daten.",
            "Ich antworte nicht sofort."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Du weißt nicht, wer das wirklich ist.",
          "feedbackCorrect": "Das ist sicher. Du gibst keine privaten Daten an eine fremde Nummer.",
          "remember": "Ich antworte fremden Nummern nicht sofort."
        },
        "pictogram": "pikto-message"
      },
      {
        "title": "Geld und Betrug",
        "module": "Nachrichten",
        "icon": "warning",
        "text": [
          {
            "text": "Manche Nachrichten fragen nach Geld.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Fremde tun manchmal so, als ob sie Freunde oder Familie sind.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Ein bekannter Trick ist: Hallo Mama, ich habe eine neue Nummer. Ich brauche Geld.",
            "pictogram": "pikto-fraud"
          },
          {
            "text": "Auch Sprachnachrichten können mit KI gefälscht sein.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du schickst kein Geld an fremde Nummern.",
            "pictogram": "pikto-message"
          }
        ],
        "examples": [
          "Hallo Papa, mein Handy ist kaputt. Das ist meine neue Nummer. Kannst du mir Geld überweisen?",
          "Eine Sprachnachricht klingt wie deine Schwester. Sie will Geld. Die Stimme kann gefälscht sein."
        ],
        "practice": {
          "question": "Eine fremde Nummer bittet um Geld. Was ist besser?",
          "answers": [
            "Ich schicke Geld.",
            "Ich schicke kein Geld."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Es kann Betrug sein.",
          "feedbackCorrect": "Das ist sicher. Du schickst kein Geld an eine fremde Nummer.",
          "remember": "Ich schicke kein Geld an fremde Nummern."
        },
        "pictogram": "pikto-message"
      },
      {
        "title": "Links in Nachrichten",
        "module": "Links",
        "icon": "link",
        "text": [
          {
            "text": "Ein Link führt zu einer Internet-Seite.",
            "pictogram": "pikto-link"
          },
          {
            "text": "Manche Links sind gefährlich.",
            "pictogram": "pikto-link"
          },
          {
            "text": "Du klickst nicht sofort auf unbekannte Links.",
            "pictogram": "pikto-location"
          }
        ],
        "practice": {
          "question": "Ein unbekannter Link kommt an. Was ist besser?",
          "answers": [
            "Ich öffne den Link.",
            "Ich öffne den Link nicht."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Unbekannte Links können gefährlich sein.",
          "feedbackCorrect": "Das ist sicher. Du öffnest den unbekannten Link nicht.",
          "remember": "Ich öffne unbekannte Links nicht sofort."
        },
        "pictogram": "pikto-link"
      },
      {
        "title": "WhatsApp-Code",
        "module": "Code",
        "icon": "lock",
        "text": [
          {
            "text": "Du bekommst manchmal einen Code per SMS.",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Der Code schützt dein WhatsApp.",
            "pictogram": "pikto-screen"
          },
          {
            "text": "Du gibst den Code nicht weiter.",
            "pictogram": "pikto-no"
          }
        ],
        "practice": {
          "question": "Jemand fragt nach deinem WhatsApp-Code. Was ist besser?",
          "answers": [
            "Ich schicke den Code.",
            "Ich schicke den Code nicht."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Mit dem Code kann jemand dein WhatsApp übernehmen.",
          "feedbackCorrect": "Das ist sicher. Dein WhatsApp-Code bleibt geheim.",
          "remember": "Mein WhatsApp-Code bleibt geheim."
        },
        "pictogram": "pikto-lock"
      },
      {
        "title": "Gruppen",
        "module": "Gruppen",
        "icon": "message",
        "text": [
          {
            "text": "In Gruppen lesen viele Menschen mit.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Nicht alles gehört in eine Gruppe.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Private Dinge schreibst du nicht in eine Gruppe.",
            "pictogram": "pikto-message"
          }
        ],
        "practice": {
          "question": "Was ist bei Gruppen wichtig?",
          "answers": [
            "Alle können mitlesen.",
            "Nur ich kann es sehen."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht richtig. In Gruppen können viele Menschen mitlesen.",
          "feedbackCorrect": "Das ist richtig. In Gruppen können viele Menschen mitlesen.",
          "remember": "In Gruppen schreibe ich nur, was alle sehen dürfen."
        },
        "pictogram": "pikto-message"
      },
      {
        "title": "Fotos senden",
        "module": "Fotos",
        "icon": "photo",
        "text": [
          {
            "text": "Ein Foto kann weitergeschickt werden.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Ein Foto kann privat sein.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Du fragst, bevor du ein Foto von anderen sendest.",
            "pictogram": "pikto-photo"
          }
        ],
        "practice": {
          "question": "Du willst ein Foto von einer Person senden. Was ist besser?",
          "answers": [
            "Erst fragen.",
            "Einfach senden."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht sicher. Andere Menschen dürfen mitbestimmen.",
          "feedbackCorrect": "Das ist sicher. Du fragst vorher.",
          "remember": "Ich prüfe Fotos vor dem Senden."
        },
        "pictogram": "pikto-photo"
      },
      {
        "title": "Stress und Druck",
        "module": "Stress",
        "icon": "stop",
        "text": [
          {
            "text": "Eine Nachricht macht dir Stress oder Angst.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du musst nicht sofort antworten.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Du darfst eine Pause machen.",
            "pictogram": "pikto-pause"
          }
        ],
        "practice": {
          "question": "Eine Nachricht macht dir Stress. Was ist besser?",
          "answers": [
            "Pause machen.",
            "Sofort antworten."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht sicher. Unter Stress machst du leichter Fehler.",
          "feedbackCorrect": "Das ist sicher. Du machst erst eine Pause.",
          "remember": "Ich mache Pause, wenn mich etwas stresst."
        },
        "pictogram": "pikto-feel"
      },
      {
        "title": "Die KI in WhatsApp",
        "module": "KI",
        "icon": "understand",
        "text": [
          {
            "text": "In WhatsApp gibt es jetzt eine KI. Sie heißt Meta AI.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Du erkennst sie an einem blauen Kreis.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Die KI ist kein Mensch. Sie ist ein Programm.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Du musst die KI nicht benutzen.",
            "pictogram": "pikto-ki"
          }
        ],
        "bullets": [
          {
            "text": "Die KI kann Fragen beantworten.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Die KI kann Fehler machen.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Schreibe der KI keine privaten Dinge.",
            "pictogram": "pikto-message"
          }
        ],
        "remember": "Die KI in WhatsApp ist kein Mensch.",
        "pictogram": "pikto-ki"
      },
      {
        "title": "Was kann ich tun?",
        "module": "Handlungsplan",
        "icon": "help",
        "text": [
          {
            "text": "Etwas ist komisch oder macht dir Druck.",
            "pictogram": "pikto-feel"
          },
          {
            "text": "Du reagierst nicht sofort.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Du zeigst die Nachricht einer vertrauten Person.",
            "pictogram": "pikto-message"
          }
        ],
        "bullets": [
          {
            "text": "Stopp machen.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Nicht sofort antworten.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Link nicht öffnen.",
            "pictogram": "pikto-link"
          },
          {
            "text": "Hilfe-Button nutzen.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-help"
      },
      {
        "title": "Das merke ich mir",
        "module": "Zusammenfassung",
        "icon": "remember",
        "text": [
          {
            "text": "Das sind die wichtigsten Regeln aus diesem Thema.",
            "pictogram": "pikto-done"
          }
        ],
        "bullets": [
          {
            "text": "Fremde Nummern prüfen.",
            "pictogram": "pikto-done"
          },
          {
            "text": "Kein Geld an fremde Nummern schicken.",
            "pictogram": "pikto-done"
          },
          {
            "text": "Unbekannte Links nicht öffnen.",
            "pictogram": "pikto-link"
          },
          {
            "text": "Codes nicht weitergeben.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Fotos prüfen.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Bei Stress Hilfe holen.",
            "pictogram": "pikto-feel"
          }
        ],
        "pictogram": "pikto-done"
      }
    ],
    "illustration": "assets/illustrations/whatsapp.svg",
    "quizQuestions": [
      {
        "question": "Eine fremde Nummer schreibt dir. Was ist besser?",
        "answers": [
          "Sofort private Daten schicken.",
          "Nicht sofort antworten."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Du weißt nicht, wer das wirklich ist.",
        "feedbackCorrect": "Das ist sicher. Du gibst keine privaten Daten an fremde Nummern."
      },
      {
        "question": "Jemand fragt nach deinem WhatsApp-Code. Was ist besser?",
        "answers": [
          "Code schicken.",
          "Code nicht schicken."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Mit dem Code können andere dein WhatsApp übernehmen.",
        "feedbackCorrect": "Das ist sicher. Dein WhatsApp-Code bleibt geheim."
      },
      {
        "question": "Ein unbekannter Link kommt an. Was ist besser?",
        "answers": [
          "Link öffnen.",
          "Link nicht öffnen."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Unbekannte Links können gefährlich sein.",
        "feedbackCorrect": "Das ist sicher. Du öffnest den Link nicht sofort."
      },
      {
        "question": "Du willst ein Foto von einer Person senden. Was ist besser?",
        "answers": [
          "Erst fragen.",
          "Einfach senden."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Andere Menschen dürfen mitbestimmen.",
        "feedbackCorrect": "Das ist sicher. Du fragst zuerst."
      },
      {
        "question": "Eine Nachricht macht dir Stress. Was ist besser?",
        "answers": [
          "Pause machen.",
          "Sofort antworten."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Unter Stress machst du leichter Fehler.",
        "feedbackCorrect": "Das ist sicher. Du machst erst eine Pause."
      },
      {
        "question": "Was kannst du mit einer stressigen Gruppe machen?",
        "answers": [
          "Stumm schalten.",
          "Immer sofort antworten."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Du musst nicht immer sofort antworten.",
        "feedbackCorrect": "Das ist sicher. Du darfst Gruppen stumm schalten."
      },
      {
        "question": "Was ist bei Sprachnachrichten wichtig?",
        "answers": [
          "Vorher überlegen.",
          "Alles sagen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Du kannst aus Versehen private Dinge erzählen.",
        "feedbackCorrect": "Das ist sicher. Du überlegst vorher."
      },
      {
        "question": "Eine Nachricht sagt: sofort bezahlen. Was ist besser?",
        "answers": [
          "Nicht sofort handeln.",
          "Sofort bezahlen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Betrüger machen oft Druck.",
        "feedbackCorrect": "Das ist sicher. Du bezahlst nicht sofort."
      },
      {
        "question": "Was gehört nicht in eine Gruppe?",
        "answers": [
          "Private Daten.",
          "Ein freundlicher Gruß."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Private Daten gehören nicht in Gruppen.",
        "feedbackCorrect": "Das ist richtig. Private Daten bleiben geschützt."
      },
      {
        "question": "Was ist eine gute WhatsApp-Regel?",
        "answers": [
          "Erst prüfen.",
          "Immer sofort klicken."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Schnell klicken kann gefährlich sein.",
        "feedbackCorrect": "Das ist sicher. Erst prüfen ist besser."
      }
    ],
    "certificateGoals": [
      "private Daten schützen",
      "komische Links erkennen",
      "bei Druck Hilfe holen"
    ],
    "helpQuestions": [
      "Kenne ich diese Nummer?",
      "Macht die Nachricht Druck?",
      "Ist der Link sicher?",
      "Fragt jemand nach Geld oder Code?"
    ],
    "memoryRules": [
      "Ich öffne unbekannte Links nicht sofort.",
      "Ich gebe keinen WhatsApp-Code weiter.",
      "Ich prüfe fremde Nummern.",
      "Ich schicke kein Geld an fremde Nummern.",
      "Ich prüfe Fotos vor dem Senden.",
      "Ich mache Pause bei Stress."
    ],
    "shortLessonIndexes": [
      0,
      2,
      4,
      5,
      7,
      8,
      10,
      11
    ],
    "qrLink": "index.html#whatsapp",
    "qrShortLink": "index.html#whatsapp:kurz",
    "qrQuizLink": "index.html#whatsapp:quiz",
    "qrMemoryLink": "index.html#whatsapp:merk",
    "einfachLessons": [
      {
        "title": "Unbekannte Nachrichten",
        "module": "Einfach",
        "pictogram": "pikto-message",
        "icon": "message",
        "text": [
          "Du bekommst eine Nachricht.",
          "Du kennst die Person nicht.",
          "Du antwortest nicht sofort.",
          "Du zeigst es einer vertrauten Person.",
          "Die Person hilft dir."
        ],
        "remember": "Unbekannte Nachrichten: erst fragen."
      },
      {
        "title": "Links in Nachrichten",
        "module": "Einfach",
        "pictogram": "pikto-link",
        "icon": "link",
        "text": [
          "Du bekommst einen Link.",
          "Ein Link ist eine blaue Adresse.",
          "Du tippst nicht sofort drauf.",
          "Fremde Links können gefährlich sein.",
          "Du fragst eine vertraute Person."
        ],
        "remember": "Fremde Links nicht sofort anklicken."
      },
      {
        "title": "Dein WhatsApp-Code",
        "module": "Einfach",
        "pictogram": "pikto-lock",
        "icon": "warning",
        "text": [
          "WhatsApp schickt dir manchmal einen Code.",
          "Der Code kommt als SMS.",
          "Den Code gibst du niemandem.",
          "Auch nicht an Freunde.",
          "Wer den Code kennt, kann dein Konto stehlen."
        ],
        "remember": "Deinen WhatsApp-Code niemals weitergeben."
      }
    ],
    "miniQuestion": {
      "question": "Du bekommst einen komischen Link. Was machst du?",
      "answers": [
        "Ich klicke nicht sofort.",
        "Ich klicke sofort.",
        "Ich leite ihn an alle weiter."
      ],
      "correct": 0,
      "explanation": "Komische Links können Betrug sein. Klicke nicht sofort und frage bei Unsicherheit nach."
    }
  },
  {
    "id": "facebook",
    "title": "Facebook",
    "icon": "message",
    "desc": "Beiträge, Profile und Kontakte prüfen",
    "selfAssessment": {
      "question": "Wie sicher fühlst du dich auf Facebook?",
      "options": [
        "Noch nicht so sicher",
        "Ein bisschen sicher",
        "Schon ziemlich sicher"
      ]
    },
    "learningGoals": [
      "Wie du dein Profil sicher einstellst",
      "Was du bei unbekannten Kontakten tust",
      "Welche Daten du nicht teilst"
    ],
    "quiz": [
      {
        "question": "Was prüfst du vor einem Beitrag?",
        "answers": [
          "Wer kann das sehen?",
          "Wie schnell kann ich posten?"
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Wichtig ist, wer den Beitrag sehen kann.",
        "feedbackCorrect": "Das ist sicher. Du prüfst die Sichtbarkeit."
      },
      {
        "question": "Eine unbekannte Person sendet eine Anfrage. Was ist besser?",
        "answers": [
          "Sofort annehmen.",
          "Erst prüfen."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Du weißt nicht, wer die Person ist.",
        "feedbackCorrect": "Das ist sicher. Du prüfst zuerst."
      },
      {
        "question": "Was ist bei Kommentaren wichtig?",
        "answers": [
          "Respektvoll schreiben.",
          "Andere beleidigen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Beleidigungen verletzen.",
        "feedbackCorrect": "Das ist sicher. Du schreibst respektvoll."
      },
      {
        "question": "Was kann privat sein?",
        "answers": [
          "Telefon-Nummer.",
          "Ein Gruß."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Ein Gruß ist meist nicht privat.",
        "feedbackCorrect": "Das ist richtig. Deine Telefon-Nummer ist privat."
      },
      {
        "question": "Du wirst beleidigt. Was ist besser?",
        "answers": [
          "Zurück beleidigen.",
          "Unterstützung holen."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Zurück beleidigen macht Streit größer.",
        "feedbackCorrect": "Das ist sicher. Du holst Unterstützung."
      },
      {
        "question": "Was bedeutet: Wer darf etwas sehen?",
        "answers": [
          "Ich prüfe die Sichtbarkeit.",
          "Alle sehen immer alles."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Nicht alle müssen alles sehen.",
        "feedbackCorrect": "Das ist richtig. Du prüfst die Einstellungen."
      },
      {
        "question": "Ein Foto zeigt andere Menschen. Was ist besser?",
        "answers": [
          "Erst fragen.",
          "Einfach posten."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Andere dürfen mitentscheiden.",
        "feedbackCorrect": "Das ist sicher. Du fragst zuerst."
      },
      {
        "question": "Warum sind alte Beiträge wichtig?",
        "answers": [
          "Sie können später noch gesehen werden.",
          "Sie verschwinden immer."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Beiträge verschwinden nicht immer.",
        "feedbackCorrect": "Das ist richtig. Alte Beiträge können sichtbar bleiben."
      },
      {
        "question": "Was ist gut im Profil?",
        "answers": [
          "Nur nötige Informationen.",
          "Passwort öffentlich schreiben."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Ein Passwort darf nie öffentlich sein.",
        "feedbackCorrect": "Das ist sicher. Du zeigst nur nötige Informationen."
      },
      {
        "question": "Was ist eine gute Regel?",
        "answers": [
          "Erst prüfen. Dann posten.",
          "Immer alles teilen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Du musst nicht alles teilen.",
        "feedbackCorrect": "Das ist sicher. Erst prüfen, dann posten."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "message",
        "text": [
          {
            "text": "Hier lernst du etwas über Facebook.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du übst sichere Entscheidungen.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du kannst den Hilfe-Button nutzen, wenn du unsicher bist.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-message"
      },
      {
        "title": "Profil",
        "module": "Profil",
        "icon": "data",
        "text": [
          {
            "text": "Im Profil stehen Informationen über dich.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Nicht alles muss dort stehen.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Private Informationen sollen nicht öffentlich sein.",
            "pictogram": "pikto-no"
          }
        ],
        "examples": [
          "Adresse",
          "Telefon-Nummer",
          "Geburtstag",
          "private Fotos"
        ],
        "remember": "Ich zeige nicht alles in meinem Profil.",
        "pictogram": "pikto-screen"
      },
      {
        "title": "Beitrag schreiben",
        "module": "Beiträge",
        "icon": "message",
        "text": [
          {
            "text": "Du willst etwas schreiben.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Viele Menschen können den Beitrag sehen.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Darum prüfst du vorher, was du schreibst.",
            "pictogram": "pikto-message"
          }
        ],
        "practice": {
          "question": "Was prüfst du vor einem Beitrag?",
          "answers": [
            "Wer kann das sehen?",
            "Wie schnell kann ich posten?"
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht sicher. Schnelligkeit ist nicht wichtig.",
          "feedbackCorrect": "Das ist sicher. Du prüfst, wer deinen Beitrag sehen kann.",
          "remember": "Ich prüfe, wer meinen Beitrag sehen kann."
        },
        "pictogram": "pikto-message"
      },
      {
        "title": "Wer darf etwas sehen?",
        "module": "Einstellungen",
        "icon": "lock",
        "text": [
          {
            "text": "Du kannst einstellen, wer einen Beitrag sehen darf.",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Das nennt man private Einstellungen.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Du kannst dir bei den Einstellungen helfen lassen.",
            "pictogram": "pikto-lock"
          }
        ],
        "practice": {
          "question": "Was bedeutet: Wer darf etwas sehen?",
          "answers": [
            "Ich prüfe die Sichtbarkeit.",
            "Alle sehen immer alles."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht richtig. Nicht alle müssen alles sehen.",
          "feedbackCorrect": "Das ist richtig. Du prüfst die Sichtbarkeit.",
          "remember": "Ich prüfe meine Einstellungen."
        },
        "pictogram": "pikto-lock"
      },
      {
        "title": "Freundschafts-Anfragen",
        "module": "Kontakte",
        "icon": "help",
        "text": [
          {
            "text": "Eine unbekannte Person sendet eine Anfrage.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du weißt nicht, wer das ist.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Du musst die Anfrage nicht annehmen.",
            "pictogram": "pikto-no"
          }
        ],
        "practice": {
          "question": "Eine unbekannte Person sendet eine Anfrage. Was ist besser?",
          "answers": [
            "Sofort annehmen.",
            "Erst prüfen."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Du weißt nicht, wer die Person ist.",
          "feedbackCorrect": "Das ist sicher. Du prüfst die Anfrage zuerst.",
          "remember": "Ich nehme unbekannte Anfragen nicht sofort an."
        },
        "pictogram": "pikto-message"
      },
      {
        "title": "Kommentare schreiben",
        "module": "Kommentare",
        "icon": "message",
        "text": [
          {
            "text": "Kommentare können andere Menschen verletzen.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du musst nicht auf alles antworten.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Freundlich bleiben ist wichtig.",
            "pictogram": "pikto-message"
          }
        ],
        "practice": {
          "question": "Was ist bei Kommentaren wichtig?",
          "answers": [
            "Respektvoll schreiben.",
            "Andere beleidigen."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht sicher. Beleidigungen können verletzen.",
          "feedbackCorrect": "Das ist sicher. Du schreibst respektvoll.",
          "remember": "Ich schreibe respektvoll."
        },
        "pictogram": "pikto-message"
      },
      {
        "title": "Beleidigungen",
        "module": "Probleme",
        "icon": "warning",
        "text": [
          {
            "text": "Im Internet kann es Streit geben.",
            "pictogram": "pikto-link"
          },
          {
            "text": "Beleidigungen sind nicht in Ordnung.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Du musst nicht zurück beleidigen.",
            "pictogram": "pikto-no"
          }
        ],
        "bullets": [
          {
            "text": "Nachricht zeigen.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Blockieren.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Melden.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Unterstützung holen.",
            "pictogram": "pikto-help"
          }
        ],
        "practice": {
          "question": "Du wirst beleidigt. Was ist besser?",
          "answers": [
            "Zurück beleidigen.",
            "Unterstützung holen."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Zurück beleidigen macht den Streit größer.",
          "feedbackCorrect": "Das ist sicher. Du bleibst nicht allein.",
          "remember": "Ich hole Unterstützung bei Beleidigungen."
        },
        "pictogram": "pikto-help"
      },
      {
        "title": "Fotos mit anderen Personen",
        "module": "Fotos",
        "icon": "photo",
        "text": [
          {
            "text": "Ein Foto zeigt andere Menschen.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Nicht jeder möchte im Internet sein.",
            "pictogram": "pikto-link"
          },
          {
            "text": "Du fragst erst, bevor du ein Foto postest.",
            "pictogram": "pikto-photo"
          }
        ],
        "practice": {
          "question": "Ein Foto zeigt andere Menschen. Was ist besser?",
          "answers": [
            "Erst fragen.",
            "Einfach posten."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht sicher. Andere Menschen dürfen mitentscheiden.",
          "feedbackCorrect": "Das ist sicher. Du fragst zuerst.",
          "remember": "Ich frage andere, bevor ich ihr Foto poste."
        },
        "pictogram": "pikto-photo"
      },
      {
        "title": "Das merke ich mir",
        "module": "Zusammenfassung",
        "icon": "remember",
        "text": [
          {
            "text": "Das sind die wichtigsten Regeln aus diesem Thema.",
            "pictogram": "pikto-done"
          }
        ],
        "bullets": [
          {
            "text": "Nicht alles öffentlich machen.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Anfragen prüfen.",
            "pictogram": "pikto-ask"
          },
          {
            "text": "Respektvoll schreiben.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Bei Beleidigungen Hilfe holen.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-done"
      }
    ],
    "illustration": "assets/illustrations/facebook.svg",
    "quizQuestions": [
      {
        "question": "Was prüfst du vor einem Beitrag?",
        "answers": [
          "Wer kann das sehen?",
          "Wie schnell kann ich posten?"
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Wichtig ist, wer den Beitrag sehen kann.",
        "feedbackCorrect": "Das ist sicher. Du prüfst die Sichtbarkeit."
      },
      {
        "question": "Eine unbekannte Person sendet eine Anfrage. Was ist besser?",
        "answers": [
          "Sofort annehmen.",
          "Erst prüfen."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Du weißt nicht, wer die Person ist.",
        "feedbackCorrect": "Das ist sicher. Du prüfst zuerst."
      },
      {
        "question": "Was ist bei Kommentaren wichtig?",
        "answers": [
          "Respektvoll schreiben.",
          "Andere beleidigen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Beleidigungen verletzen.",
        "feedbackCorrect": "Das ist sicher. Du schreibst respektvoll."
      },
      {
        "question": "Was kann privat sein?",
        "answers": [
          "Telefon-Nummer.",
          "Ein Gruß."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Ein Gruß ist meist nicht privat.",
        "feedbackCorrect": "Das ist richtig. Deine Telefon-Nummer ist privat."
      },
      {
        "question": "Du wirst beleidigt. Was ist besser?",
        "answers": [
          "Zurück beleidigen.",
          "Unterstützung holen."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Zurück beleidigen macht Streit größer.",
        "feedbackCorrect": "Das ist sicher. Du holst Unterstützung."
      },
      {
        "question": "Was bedeutet: Wer darf etwas sehen?",
        "answers": [
          "Ich prüfe die Sichtbarkeit.",
          "Alle sehen immer alles."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Nicht alle müssen alles sehen.",
        "feedbackCorrect": "Das ist richtig. Du prüfst die Einstellungen."
      },
      {
        "question": "Ein Foto zeigt andere Menschen. Was ist besser?",
        "answers": [
          "Erst fragen.",
          "Einfach posten."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Andere dürfen mitentscheiden.",
        "feedbackCorrect": "Das ist sicher. Du fragst zuerst."
      },
      {
        "question": "Warum sind alte Beiträge wichtig?",
        "answers": [
          "Sie können später noch gesehen werden.",
          "Sie verschwinden immer."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Beiträge verschwinden nicht immer.",
        "feedbackCorrect": "Das ist richtig. Alte Beiträge können sichtbar bleiben."
      },
      {
        "question": "Was ist gut im Profil?",
        "answers": [
          "Nur nötige Informationen.",
          "Passwort öffentlich schreiben."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Ein Passwort darf nie öffentlich sein.",
        "feedbackCorrect": "Das ist sicher. Du zeigst nur nötige Informationen."
      },
      {
        "question": "Was ist eine gute Regel?",
        "answers": [
          "Erst prüfen. Dann posten.",
          "Immer alles teilen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Du musst nicht alles teilen.",
        "feedbackCorrect": "Das ist sicher. Erst prüfen, dann posten."
      }
    ],
    "certificateGoals": [
      "Profil und Beiträge prüfen",
      "fremde Anfragen einschätzen",
      "blockieren oder melden"
    ],
    "helpQuestions": [
      "Wer kann das sehen?",
      "Kenne ich diese Person?",
      "Ist das respektvoll?",
      "Brauche ich Unterstützung?"
    ],
    "memoryRules": [
      "Ich poste nicht alles öffentlich.",
      "Ich prüfe Freundschafts-Anfragen.",
      "Ich schreibe respektvoll.",
      "Ich hole Unterstützung bei Beleidigungen."
    ],
    "shortLessonIndexes": [
      0,
      1,
      2,
      4,
      6,
      7,
      8
    ],
    "qrLink": "index.html#facebook",
    "qrShortLink": "index.html#facebook:kurz",
    "qrQuizLink": "index.html#facebook:quiz",
    "qrMemoryLink": "index.html#facebook:merk",
    "einfachLessons": [
      {
        "title": "Dein Facebook-Profil",
        "module": "Einfach",
        "pictogram": "pikto-data",
        "icon": "message",
        "text": [
          "Du hast ein Profil auf Facebook.",
          "Andere sehen dein Profil.",
          "Du kannst einstellen, wer es sieht.",
          "Am besten sehen es nur Freunde.",
          "Eine vertraute Person hilft dir beim Einstellen."
        ],
        "remember": "Dein Profil: nur Freunde sehen es."
      },
      {
        "title": "Unbekannte Personen",
        "module": "Einfach",
        "pictogram": "pikto-ask",
        "icon": "warning",
        "text": [
          "Manchmal fragt eine unbekannte Person.",
          "Sie will dein Freund sein.",
          "Du kennst die Person nicht.",
          "Du nimmst die Anfrage nicht an.",
          "Du fragst eine vertraute Person."
        ],
        "remember": "Unbekannte Anfragen ablehnen."
      },
      {
        "title": "Komische Nachrichten",
        "module": "Einfach",
        "pictogram": "pikto-message",
        "icon": "stop",
        "text": [
          "Du bekommst eine komische Nachricht.",
          "Jemand fragt nach Geld.",
          "Jemand schickt einen Link.",
          "Du klickst nicht drauf.",
          "Du zeigst es einer vertrauten Person."
        ],
        "remember": "Komische Nachrichten zeigen, nicht klicken."
      }
    ],
    "miniQuestion": {
      "question": "Was prüfst du vor einem öffentlichen Beitrag?",
      "answers": [
        "Wer den Beitrag sehen kann.",
        "Ob der Beitrag lang ist.",
        "Ob genug Emojis drin sind."
      ],
      "correct": 0,
      "explanation": "Wichtig ist, wer den Beitrag sehen kann. Öffentliche Beiträge können viele Menschen sehen."
    }
  },
  {
    "id": "instagram",
    "title": "Instagram",
    "icon": "photo",
    "desc": "Fotos, Standort und Nachrichten prüfen",
    "selfAssessment": {
      "question": "Wie sicher fühlst du dich auf Instagram?",
      "options": [
        "Noch nicht so sicher",
        "Ein bisschen sicher",
        "Schon ziemlich sicher"
      ]
    },
    "learningGoals": [
      "Was du bei Fotos beachtest",
      "Warum du deinen Standort schützt",
      "Was Fake-Profile sind und wie du sie erkennst"
    ],
    "quiz": [
      {
        "question": "Was prüfst du vor dem Posten eines Fotos?",
        "answers": [
          "Was zu sehen ist.",
          "Nur die Farbe."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Wichtig ist, was zu sehen ist.",
        "feedbackCorrect": "Das ist sicher. Du prüfst den Inhalt."
      },
      {
        "question": "Warum ist der Standort wichtig?",
        "answers": [
          "Er zeigt, wo ich bin.",
          "Er ist immer egal."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Der Standort kann privat sein.",
        "feedbackCorrect": "Das ist richtig. Der Standort zeigt, wo du bist."
      },
      {
        "question": "Eine fremde Person fragt nach privaten Fotos. Was ist besser?",
        "answers": [
          "Fotos schicken.",
          "Keine Fotos schicken."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Private Fotos gehören nicht an Fremde.",
        "feedbackCorrect": "Das ist sicher. Du schickst keine privaten Fotos."
      },
      {
        "question": "Was können Menschen bei kurzen Videos machen?",
        "answers": [
          "Ein Bild vom Bildschirm machen.",
          "Nichts speichern."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Inhalte können gespeichert werden.",
        "feedbackCorrect": "Das ist richtig. Inhalte können gespeichert werden."
      },
      {
        "question": "Ein Kommentar verletzt dich. Was ist besser?",
        "answers": [
          "Unterstützung holen.",
          "Zurück beleidigen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Zurück beleidigen hilft nicht.",
        "feedbackCorrect": "Das ist sicher. Du holst Unterstützung."
      },
      {
        "question": "Warum sind bearbeitete Bilder wichtig?",
        "answers": [
          "Nicht alles ist echt.",
          "Alles ist immer echt."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Viele Bilder sind bearbeitet.",
        "feedbackCorrect": "Das ist richtig. Nicht alles ist echt."
      },
      {
        "question": "Was ist eine gute Regel?",
        "answers": [
          "Erst prüfen. Dann teilen.",
          "Immer sofort posten."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Schnell posten kann private Dinge zeigen.",
        "feedbackCorrect": "Das ist sicher. Erst prüfen, dann teilen."
      },
      {
        "question": "Wer darf private Fotos bekommen?",
        "answers": [
          "Nicht fremde Personen.",
          "Alle fremden Personen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Fremde Personen sollen keine privaten Fotos bekommen.",
        "feedbackCorrect": "Das ist sicher. Private Fotos gehen nicht an Fremde."
      },
      {
        "question": "Was hilft bei komischen Nachrichten?",
        "answers": [
          "Stopp machen.",
          "Sofort private Daten senden."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Private Daten bleiben geschützt.",
        "feedbackCorrect": "Das ist sicher. Du machst Stopp."
      },
      {
        "question": "Was schützt deinen Standort?",
        "answers": [
          "Nicht einfach teilen.",
          "Immer zeigen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Nicht alle müssen wissen, wo du bist.",
        "feedbackCorrect": "Das ist sicher. Du teilst den Standort nicht einfach."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "photo",
        "text": [
          {
            "text": "Hier lernst du etwas über Instagram.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Du übst sichere Entscheidungen.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Du kannst den Hilfe-Button nutzen, wenn du unsicher bist.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-photo"
      },
      {
        "title": "Foto posten",
        "module": "Fotos",
        "icon": "photo",
        "text": [
          {
            "text": "Du willst ein Foto posten.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Andere Menschen können das Foto sehen.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Manchmal sieht man mehr, als man denkt.",
            "pictogram": "pikto-photo"
          }
        ],
        "practice": {
          "question": "Was prüfst du vor dem Posten eines Fotos?",
          "answers": [
            "Was zu sehen ist.",
            "Nur die Farbe."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht sicher. Wichtig ist, was auf dem Foto zu sehen ist.",
          "feedbackCorrect": "Das ist sicher. Du prüfst, was zu sehen ist.",
          "remember": "Ich prüfe, was auf dem Foto zu sehen ist."
        },
        "pictogram": "pikto-photo"
      },
      {
        "title": "Andere Personen auf Fotos",
        "module": "Fotos",
        "icon": "help",
        "text": [
          {
            "text": "Auf dem Foto sind andere Personen.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Nicht alle wollen im Internet stehen.",
            "pictogram": "pikto-link"
          },
          {
            "text": "Du fragst vorher oder nimmst ein anderes Foto.",
            "pictogram": "pikto-photo"
          }
        ],
        "practice": {
          "question": "Im Hintergrund sieht man eine andere Person. Was ist besser?",
          "answers": [
            "Ich poste das Foto einfach.",
            "Ich frage erst oder nehme ein anderes Foto."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Andere Menschen dürfen mitentscheiden.",
          "feedbackCorrect": "Das ist sicher. Du fragst oder nimmst ein anderes Foto.",
          "remember": "Ich frage andere, bevor ich ihr Bild poste."
        },
        "pictogram": "pikto-photo"
      },
      {
        "title": "Kurze Videos und Stories",
        "module": "Stories",
        "icon": "help",
        "text": [
          {
            "text": "Kurze Videos können viele Menschen sehen.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Andere können ein Bild vom Bildschirm machen.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Auch kurze Videos können privat sein.",
            "pictogram": "pikto-photo"
          }
        ],
        "practice": {
          "question": "Was können Menschen bei kurzen Videos machen?",
          "answers": [
            "Ein Bild vom Bildschirm machen.",
            "Nichts speichern."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht richtig. Inhalte können gespeichert werden.",
          "feedbackCorrect": "Das ist richtig. Auch kurze Videos können gespeichert werden.",
          "remember": "Auch Stories prüfe ich vor dem Posten."
        },
        "pictogram": "pikto-photo"
      },
      {
        "title": "Standort",
        "module": "Standort",
        "icon": "data",
        "text": [
          {
            "text": "Der Standort zeigt, wo du bist.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Nicht jeder muss wissen, wo du bist.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Du teilst deinen Standort nicht einfach.",
            "pictogram": "pikto-location"
          }
        ],
        "practice": {
          "question": "Warum ist der Standort wichtig?",
          "answers": [
            "Er zeigt, wo ich bin.",
            "Er ist immer egal."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht richtig. Der Standort kann privat sein.",
          "feedbackCorrect": "Das ist richtig. Der Standort zeigt, wo du bist.",
          "remember": "Ich teile meinen Standort nicht einfach."
        },
        "pictogram": "pikto-location"
      },
      {
        "title": "Private Nachrichten",
        "module": "Nachrichten",
        "icon": "message",
        "text": [
          {
            "text": "Eine fremde Person schreibt dir privat.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Die Person fragt vielleicht nach privaten Fotos oder Daten.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Das ist ein Warnzeichen.",
            "pictogram": "pikto-message"
          }
        ],
        "practice": {
          "question": "Eine fremde Person fragt nach privaten Fotos. Was ist besser?",
          "answers": [
            "Fotos schicken.",
            "Keine Fotos schicken."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Private Fotos gehören nicht an fremde Personen.",
          "feedbackCorrect": "Das ist sicher. Du schützt deine privaten Fotos.",
          "remember": "Ich schicke fremden Personen keine privaten Fotos."
        },
        "pictogram": "pikto-message"
      },
      {
        "title": "Verletzende Kommentare",
        "module": "Kommentare",
        "icon": "warning",
        "text": [
          {
            "text": "Kommentare können nett sein.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Kommentare können auch verletzen.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du musst nicht auf alles antworten.",
            "pictogram": "pikto-location"
          }
        ],
        "bullets": [
          {
            "text": "Nachricht zeigen.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Blockieren.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Melden.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Darüber sprechen.",
            "pictogram": "pikto-message"
          }
        ],
        "practice": {
          "question": "Ein Kommentar verletzt dich. Was ist besser?",
          "answers": [
            "Unterstützung holen.",
            "Zurück beleidigen."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht sicher. Zurück beleidigen hilft nicht.",
          "feedbackCorrect": "Das ist sicher. Du holst Unterstützung.",
          "remember": "Ich hole Unterstützung bei verletzenden Kommentaren."
        },
        "pictogram": "pikto-message"
      },
      {
        "title": "Bearbeitete Bilder",
        "module": "Medien prüfen",
        "icon": "check",
        "text": [
          {
            "text": "Auf Instagram sieht vieles perfekt aus.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Bilder können bearbeitet sein.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Nicht alles ist echt.",
            "pictogram": "pikto-no"
          }
        ],
        "practice": {
          "question": "Warum sind bearbeitete Bilder wichtig?",
          "answers": [
            "Nicht alles ist echt.",
            "Alles ist immer echt."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht richtig. Viele Bilder sind bearbeitet.",
          "feedbackCorrect": "Das ist richtig. Nicht alles ist echt.",
          "remember": "Ich muss mich nicht mit Bildern vergleichen."
        },
        "pictogram": "pikto-fake"
      },
      {
        "title": "Was kann ich tun?",
        "module": "Handlungsplan",
        "icon": "help",
        "text": [
          {
            "text": "Ein Profil oder eine Nachricht ist komisch.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du machst Stopp und antwortest nicht sofort.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Du zeigst es einer vertrauten Person.",
            "pictogram": "pikto-help"
          }
        ],
        "bullets": [
          {
            "text": "Stopp machen.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Nicht sofort antworten.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Profil oder Nachricht zeigen.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Hilfe-Button nutzen.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-help"
      },
      {
        "title": "Das merke ich mir",
        "module": "Zusammenfassung",
        "icon": "remember",
        "text": [
          {
            "text": "Das sind die wichtigsten Regeln aus diesem Thema.",
            "pictogram": "pikto-done"
          }
        ],
        "bullets": [
          {
            "text": "Fotos prüfen.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Standort schützen.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Fremden nicht sofort antworten.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Keine privaten Fotos an Fremde schicken.",
            "pictogram": "pikto-photo"
          }
        ],
        "pictogram": "pikto-done"
      }
    ],
    "illustration": "assets/illustrations/instagram.svg",
    "quizQuestions": [
      {
        "question": "Was prüfst du vor dem Posten eines Fotos?",
        "answers": [
          "Was zu sehen ist.",
          "Nur die Farbe."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Wichtig ist, was zu sehen ist.",
        "feedbackCorrect": "Das ist sicher. Du prüfst den Inhalt."
      },
      {
        "question": "Warum ist der Standort wichtig?",
        "answers": [
          "Er zeigt, wo ich bin.",
          "Er ist immer egal."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Der Standort kann privat sein.",
        "feedbackCorrect": "Das ist richtig. Der Standort zeigt, wo du bist."
      },
      {
        "question": "Eine fremde Person fragt nach privaten Fotos. Was ist besser?",
        "answers": [
          "Fotos schicken.",
          "Keine Fotos schicken."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Private Fotos gehören nicht an Fremde.",
        "feedbackCorrect": "Das ist sicher. Du schickst keine privaten Fotos."
      },
      {
        "question": "Was können Menschen bei kurzen Videos machen?",
        "answers": [
          "Ein Bild vom Bildschirm machen.",
          "Nichts speichern."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Inhalte können gespeichert werden.",
        "feedbackCorrect": "Das ist richtig. Inhalte können gespeichert werden."
      },
      {
        "question": "Ein Kommentar verletzt dich. Was ist besser?",
        "answers": [
          "Unterstützung holen.",
          "Zurück beleidigen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Zurück beleidigen hilft nicht.",
        "feedbackCorrect": "Das ist sicher. Du holst Unterstützung."
      },
      {
        "question": "Warum sind bearbeitete Bilder wichtig?",
        "answers": [
          "Nicht alles ist echt.",
          "Alles ist immer echt."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Viele Bilder sind bearbeitet.",
        "feedbackCorrect": "Das ist richtig. Nicht alles ist echt."
      },
      {
        "question": "Was ist eine gute Regel?",
        "answers": [
          "Erst prüfen. Dann teilen.",
          "Immer sofort posten."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Schnell posten kann private Dinge zeigen.",
        "feedbackCorrect": "Das ist sicher. Erst prüfen, dann teilen."
      },
      {
        "question": "Wer darf private Fotos bekommen?",
        "answers": [
          "Nicht fremde Personen.",
          "Alle fremden Personen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Fremde Personen sollen keine privaten Fotos bekommen.",
        "feedbackCorrect": "Das ist sicher. Private Fotos gehen nicht an Fremde."
      },
      {
        "question": "Was hilft bei komischen Nachrichten?",
        "answers": [
          "Stopp machen.",
          "Sofort private Daten senden."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Private Daten bleiben geschützt.",
        "feedbackCorrect": "Das ist sicher. Du machst Stopp."
      },
      {
        "question": "Was schützt deinen Standort?",
        "answers": [
          "Nicht einfach teilen.",
          "Immer zeigen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Nicht alle müssen wissen, wo du bist.",
        "feedbackCorrect": "Das ist sicher. Du teilst den Standort nicht einfach."
      }
    ],
    "certificateGoals": [
      "Fotos bewusst posten",
      "Stories und Standort prüfen",
      "Nachrichten sicher einschätzen"
    ],
    "helpQuestions": [
      "Was ist auf dem Foto zu sehen?",
      "Ist mein Standort sichtbar?",
      "Kenne ich diese Person?",
      "Macht mir ein Kommentar Druck oder Stress?"
    ],
    "memoryRules": [
      "Ich prüfe Fotos vor dem Posten.",
      "Ich schütze meinen Standort.",
      "Ich schicke fremden Personen keine privaten Fotos.",
      "Ich hole Unterstützung bei verletzenden Kommentaren."
    ],
    "shortLessonIndexes": [
      0,
      1,
      4,
      5,
      6,
      8,
      9
    ],
    "qrLink": "index.html#instagram",
    "qrShortLink": "index.html#instagram:kurz",
    "qrQuizLink": "index.html#instagram:quiz",
    "qrMemoryLink": "index.html#instagram:merk",
    "einfachLessons": [
      {
        "title": "Deine Fotos auf Instagram",
        "module": "Einfach",
        "pictogram": "pikto-photo",
        "icon": "photo",
        "text": [
          "Du postest Fotos auf Instagram.",
          "Andere sehen deine Fotos.",
          "Du kannst einstellen, wer sie sieht.",
          "Am besten ist dein Konto privat.",
          "Dann sehen nur Freunde deine Fotos."
        ],
        "remember": "Konto auf privat stellen."
      },
      {
        "title": "Fotos von anderen Personen",
        "module": "Einfach",
        "pictogram": "pikto-ask",
        "icon": "photo",
        "text": [
          "Du willst ein Foto posten.",
          "Auf dem Foto ist eine andere Person.",
          "Du fragst die Person zuerst.",
          "Die Person muss ja sagen.",
          "Sonst postest du das Foto nicht."
        ],
        "remember": "Fotos von anderen: erst fragen."
      },
      {
        "title": "Nachrichten von Unbekannten",
        "module": "Einfach",
        "pictogram": "pikto-message",
        "icon": "warning",
        "text": [
          "Jemand schreibt dir eine Nachricht.",
          "Du kennst die Person nicht.",
          "Du antwortest nicht.",
          "Du zeigst es einer vertrauten Person.",
          "Die Person hilft dir."
        ],
        "remember": "Unbekannte Nachrichten: vertraute Person fragen."
      }
    ],
    "miniQuestion": {
      "question": "Du willst ein Foto von einer anderen Person posten. Was machst du?",
      "answers": [
        "Ich frage vorher.",
        "Ich poste es sofort.",
        "Ich markiere die Person einfach."
      ],
      "correct": 0,
      "explanation": "Du fragst vorher. Andere Personen entscheiden über ihre Bilder mit."
    }
  },
  {
    "id": "youtube",
    "title": "YouTube",
    "icon": "understand",
    "desc": "Videos, Werbung und Pausen prüfen",
    "selfAssessment": {
      "question": "Wie sicher fühlst du dich beim Schauen auf YouTube?",
      "options": [
        "Noch nicht so sicher",
        "Ein bisschen sicher",
        "Schon ziemlich sicher"
      ]
    },
    "learningGoals": [
      "Woran du erkennst, ob ein Video stimmt",
      "Was Werbung bei YouTube ist",
      "Wie du Pausen machst und gesund bleibst"
    ],
    "quiz": [
      {
        "question": "Ein Video verspricht: Dieses Mittel macht dich reich. Was ist besser?",
        "answers": [
          "Sofort glauben und kaufen.",
          "Erst prüfen und nicht sofort kaufen."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Viele Videos wollen etwas verkaufen.",
        "feedbackCorrect": "Das ist sicher. Du prüfst erst."
      },
      {
        "question": "Woran erkennst du Werbung in Videos?",
        "answers": [
          "Es wird etwas verkauft.",
          "Es geht nie ums Kaufen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Werbung kann wie ein normales Video aussehen.",
        "feedbackCorrect": "Das ist richtig. Werbung will oft etwas verkaufen."
      },
      {
        "question": "Ein Video zeigt eine gefährliche Mutprobe. Was ist besser?",
        "answers": [
          "Ich mache das nach.",
          "Ich mache das nicht nach."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Das kann dir schaden.",
        "feedbackCorrect": "Das ist sicher. Deine Gesundheit ist wichtiger."
      },
      {
        "question": "Autoplay startet immer neue Videos. Was ist wichtig?",
        "answers": [
          "Ich darf das Video stoppen.",
          "Ich muss immer weiter schauen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Du musst nicht weiter schauen.",
        "feedbackCorrect": "Das ist sicher. Du darfst stoppen."
      },
      {
        "question": "Ein Video macht dir Angst. Was ist besser?",
        "answers": [
          "Weiter schauen.",
          "Stoppen und mit jemandem sprechen."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht gut. Angst ist ernst.",
        "feedbackCorrect": "Das ist sicher. Du stoppst und sprichst darüber."
      },
      {
        "question": "Was ist eine gute Regel für YouTube?",
        "answers": [
          "Ich glaube nicht alles sofort.",
          "Alles im Internet ist immer wahr."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Viele Inhalte können falsch sein.",
        "feedbackCorrect": "Das ist sicher. Du prüfst erst."
      },
      {
        "question": "Was macht Werbung oft?",
        "answers": [
          "Sie will, dass ich etwas kaufe.",
          "Sie schützt mein Passwort."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Werbung schützt nicht dein Passwort.",
        "feedbackCorrect": "Das ist richtig. Werbung will oft verkaufen."
      },
      {
        "question": "Warum sind Pausen wichtig?",
        "answers": [
          "Damit es mir gut geht.",
          "Damit Videos schneller werden."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Pausen verändern Videos nicht.",
        "feedbackCorrect": "Das ist richtig. Pausen helfen dir."
      },
      {
        "question": "Was machst du bei verletzenden Kommentaren?",
        "answers": [
          "Nicht allein bleiben.",
          "Zurück beleidigen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Zurück beleidigen hilft nicht.",
        "feedbackCorrect": "Das ist sicher. Du bleibst nicht allein."
      },
      {
        "question": "Was ist eine gute YouTube-Regel?",
        "answers": [
          "Stoppen ist erlaubt.",
          "Weiter schauen ist Pflicht."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Weiter schauen ist keine Pflicht.",
        "feedbackCorrect": "Das ist richtig. Stoppen ist erlaubt."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "help",
        "text": [
          {
            "text": "Hier lernst du etwas über YouTube.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Du übst sichere Entscheidungen.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Du kannst den Hilfe-Button nutzen, wenn du unsicher bist.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-help"
      },
      {
        "title": "Videos prüfen",
        "module": "Videos",
        "icon": "help",
        "text": [
          {
            "text": "Nicht jedes Video ist wahr.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Manche Videos übertreiben oder lügen.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Du glaubst nicht alles sofort.",
            "pictogram": "pikto-location"
          }
        ],
        "practice": {
          "question": "Was ist eine gute Regel für YouTube?",
          "answers": [
            "Ich glaube nicht alles sofort.",
            "Alles im Internet ist immer wahr."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht sicher. Viele Inhalte können falsch sein.",
          "feedbackCorrect": "Das ist sicher. Du glaubst nicht alles sofort.",
          "remember": "Ich glaube nicht alles sofort."
        },
        "pictogram": "pikto-screen"
      },
      {
        "title": "Werbung erkennen",
        "module": "Werbung",
        "icon": "warning",
        "text": [
          {
            "text": "In vielen Videos gibt es Werbung.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Werbung will, dass du etwas kaufst.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Du kaufst nicht sofort.",
            "pictogram": "pikto-location"
          }
        ],
        "practice": {
          "question": "Woran erkennst du Werbung in Videos?",
          "answers": [
            "Es wird etwas verkauft.",
            "Es geht nie ums Kaufen."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht richtig. Werbung kann wie ein normales Video aussehen.",
          "feedbackCorrect": "Das ist richtig. Werbung will oft etwas verkaufen.",
          "remember": "Ich kaufe nichts sofort aus einem Video."
        },
        "pictogram": "pikto-no"
      },
      {
        "title": "Autoplay und Zeit",
        "module": "Pausen",
        "icon": "stop",
        "text": [
          {
            "text": "YouTube spielt oft automatisch das nächste Video ab.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Du merkst: Ich schaue schon lange.",
            "pictogram": "pikto-pause"
          },
          {
            "text": "Du darfst stoppen und Pause machen.",
            "pictogram": "pikto-no"
          }
        ],
        "practice": {
          "question": "Autoplay startet immer neue Videos. Was ist wichtig?",
          "answers": [
            "Ich darf das Video stoppen.",
            "Ich muss immer weiter schauen."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht sicher. Du musst nicht immer weiter schauen.",
          "feedbackCorrect": "Das ist sicher. Du darfst stoppen.",
          "remember": "Ich darf Videos stoppen."
        },
        "pictogram": "pikto-pause"
      },
      {
        "title": "Gefährliche Mutproben",
        "module": "Gefahr",
        "icon": "warning",
        "text": [
          {
            "text": "Manche Videos zeigen gefährliche Mutproben.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Du musst das nicht nachmachen.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Deine Gesundheit ist wichtiger.",
            "pictogram": "pikto-no"
          }
        ],
        "practice": {
          "question": "Ein Video zeigt eine gefährliche Mutprobe. Was ist besser?",
          "answers": [
            "Ich mache das nach.",
            "Ich mache das nicht nach."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Gefährliche Mutproben können dir schaden.",
          "feedbackCorrect": "Das ist sicher. Du machst gefährliche Dinge nicht nach.",
          "remember": "Ich mache gefährliche Dinge nicht nach."
        },
        "pictogram": "pikto-no"
      },
      {
        "title": "Videos, die Angst machen",
        "module": "Gefühle",
        "icon": "help",
        "text": [
          {
            "text": "Manche Videos machen Angst oder Stress.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Du darfst das Video stoppen.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Du kannst mit einer vertrauten Person darüber sprechen.",
            "pictogram": "pikto-feel"
          }
        ],
        "practice": {
          "question": "Ein Video macht dir Angst. Was ist besser?",
          "answers": [
            "Weiter schauen.",
            "Stoppen und mit jemandem sprechen."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht gut. Wenn dich ein Video belastet, darfst du stoppen.",
          "feedbackCorrect": "Das ist sicher. Du stoppst und bleibst nicht allein.",
          "remember": "Ich bin mit meiner Angst nicht allein."
        },
        "pictogram": "pikto-feel"
      },
      {
        "title": "Kommentare",
        "module": "Kommentare",
        "icon": "message",
        "text": [
          {
            "text": "Kommentare können nett sein.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Kommentare können auch verletzen.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du musst nicht lesen oder antworten.",
            "pictogram": "pikto-location"
          }
        ],
        "remember": "Ich muss nicht auf Kommentare reagieren.",
        "pictogram": "pikto-message"
      },
      {
        "title": "Nicht jedes Video ist echt",
        "module": "KI",
        "icon": "warning",
        "text": [
          {
            "text": "Manche Videos sind mit KI gemacht.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Sie sehen echt aus. Aber sie sind gefälscht.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Auch bekannte Menschen werden gefälscht.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Mehr dazu lernst du im Thema: Fake News und KI-Fakes.",
            "pictogram": "pikto-fake"
          }
        ],
        "remember": "Auch Videos können gefälscht sein.",
        "pictogram": "pikto-ki"
      },
      {
        "title": "Was kann ich tun?",
        "module": "Handlungsplan",
        "icon": "help",
        "text": [
          {
            "text": "Ein Video macht dir Angst oder setzt dich unter Druck.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Du machst Stopp.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Du zeigst das Video einer vertrauten Person.",
            "pictogram": "pikto-photo"
          }
        ],
        "bullets": [
          {
            "text": "Video stoppen.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Nicht nachmachen.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Pause machen.",
            "pictogram": "pikto-pause"
          },
          {
            "text": "Unterstützung holen.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-help"
      },
      {
        "title": "Das merke ich mir",
        "module": "Zusammenfassung",
        "icon": "remember",
        "text": [
          {
            "text": "Das sind die wichtigsten Regeln aus diesem Thema.",
            "pictogram": "pikto-done"
          }
        ],
        "bullets": [
          {
            "text": "Videos prüfen.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Werbung erkennen.",
            "pictogram": "pikto-done"
          },
          {
            "text": "Nicht jedes Video ist echt.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Pausen machen.",
            "pictogram": "pikto-pause"
          },
          {
            "text": "Gefährliche Dinge nicht nachmachen.",
            "pictogram": "pikto-no"
          }
        ],
        "pictogram": "pikto-done"
      }
    ],
    "illustration": "assets/illustrations/youtube.svg",
    "quizQuestions": [
      {
        "question": "Ein Video verspricht: Dieses Mittel macht dich reich. Was ist besser?",
        "answers": [
          "Sofort glauben und kaufen.",
          "Erst prüfen und nicht sofort kaufen."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Viele Videos wollen etwas verkaufen.",
        "feedbackCorrect": "Das ist sicher. Du prüfst erst."
      },
      {
        "question": "Woran erkennst du Werbung in Videos?",
        "answers": [
          "Es wird etwas verkauft.",
          "Es geht nie ums Kaufen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Werbung kann wie ein normales Video aussehen.",
        "feedbackCorrect": "Das ist richtig. Werbung will oft etwas verkaufen."
      },
      {
        "question": "Ein Video zeigt eine gefährliche Mutprobe. Was ist besser?",
        "answers": [
          "Ich mache das nach.",
          "Ich mache das nicht nach."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Das kann dir schaden.",
        "feedbackCorrect": "Das ist sicher. Deine Gesundheit ist wichtiger."
      },
      {
        "question": "Autoplay startet immer neue Videos. Was ist wichtig?",
        "answers": [
          "Ich darf das Video stoppen.",
          "Ich muss immer weiter schauen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Du musst nicht weiter schauen.",
        "feedbackCorrect": "Das ist sicher. Du darfst stoppen."
      },
      {
        "question": "Ein Video macht dir Angst. Was ist besser?",
        "answers": [
          "Weiter schauen.",
          "Stoppen und mit jemandem sprechen."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht gut. Angst ist ernst.",
        "feedbackCorrect": "Das ist sicher. Du stoppst und sprichst darüber."
      },
      {
        "question": "Was ist eine gute Regel für YouTube?",
        "answers": [
          "Ich glaube nicht alles sofort.",
          "Alles im Internet ist immer wahr."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Viele Inhalte können falsch sein.",
        "feedbackCorrect": "Das ist sicher. Du prüfst erst."
      },
      {
        "question": "Was macht Werbung oft?",
        "answers": [
          "Sie will, dass ich etwas kaufe.",
          "Sie schützt mein Passwort."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Werbung schützt nicht dein Passwort.",
        "feedbackCorrect": "Das ist richtig. Werbung will oft verkaufen."
      },
      {
        "question": "Warum sind Pausen wichtig?",
        "answers": [
          "Damit es mir gut geht.",
          "Damit Videos schneller werden."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Pausen verändern Videos nicht.",
        "feedbackCorrect": "Das ist richtig. Pausen helfen dir."
      },
      {
        "question": "Was machst du bei verletzenden Kommentaren?",
        "answers": [
          "Nicht allein bleiben.",
          "Zurück beleidigen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Zurück beleidigen hilft nicht.",
        "feedbackCorrect": "Das ist sicher. Du bleibst nicht allein."
      },
      {
        "question": "Was ist eine gute YouTube-Regel?",
        "answers": [
          "Stoppen ist erlaubt.",
          "Weiter schauen ist Pflicht."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Weiter schauen ist keine Pflicht.",
        "feedbackCorrect": "Das ist richtig. Stoppen ist erlaubt."
      }
    ],
    "certificateGoals": [
      "Videos und Quellen prüfen",
      "Werbung erkennen",
      "Kommentare vorsichtig nutzen"
    ],
    "helpQuestions": [
      "Ist das Werbung?",
      "Ist das wirklich wahr?",
      "Tut mir das Video gut?",
      "Brauche ich eine Pause?"
    ],
    "memoryRules": [
      "Ich glaube nicht alles sofort.",
      "Ich kaufe nichts sofort aus einem Video.",
      "Ich mache gefährliche Dinge nicht nach.",
      "Ich darf Videos stoppen."
    ],
    "shortLessonIndexes": [
      0,
      1,
      2,
      3,
      4,
      5,
      7,
      8,
      9
    ],
    "qrLink": "index.html#youtube",
    "qrShortLink": "index.html#youtube:kurz",
    "qrQuizLink": "index.html#youtube:quiz",
    "qrMemoryLink": "index.html#youtube:merk",
    "einfachLessons": [
      {
        "title": "Videos prüfen",
        "module": "Einfach",
        "pictogram": "pikto-screen",
        "icon": "understand",
        "text": [
          "Du schaust Videos auf YouTube.",
          "Manche Videos stimmen nicht.",
          "Du fragst dich: Stimmt das wirklich?",
          "Du schaust auf einen anderen Kanal.",
          "Oder du fragst eine vertraute Person."
        ],
        "remember": "Prüfe, ob das Video stimmt."
      },
      {
        "title": "Werbung erkennen",
        "module": "Einfach",
        "pictogram": "pikto-no",
        "icon": "warning",
        "text": [
          "Manchmal kommt Werbung im Video.",
          "Werbung will, dass du etwas kaufst.",
          "Du musst nichts kaufen.",
          "Du kannst Werbung überspringen.",
          "Du klickst nicht auf Werbung."
        ],
        "remember": "Werbung nicht anklicken."
      },
      {
        "title": "Pausen machen",
        "module": "Einfach",
        "pictogram": "pikto-pause",
        "icon": "stop",
        "text": [
          "Du schaust lange Videos.",
          "Das ist anstrengend.",
          "Du machst nach einer Stunde Pause.",
          "Du gehst raus oder bewegst dich.",
          "Das ist gut für dich."
        ],
        "remember": "Nach einer Stunde Pause machen."
      }
    ],
    "miniQuestion": {
      "question": "Was hilft beim Prüfen eines Videos?",
      "answers": [
        "Quelle und Inhalt ansehen.",
        "Nur die Farbe ansehen.",
        "Nur die Länge ansehen."
      ],
      "correct": 0,
      "explanation": "Quelle und Inhalt helfen dir. Nicht jedes Video ist richtig."
    }
  },
  {
    "id": "snapchat",
    "title": "Snapchat",
    "icon": "photo",
    "desc": "Bilder, Standort und Druck erkennen",
    "selfAssessment": {
      "question": "Was weißt du schon über Snapchat?",
      "options": [
        "Noch nicht so viel",
        "Ein bisschen",
        "Schon einiges"
      ]
    },
    "learningGoals": [
      "Was mit Snaps passiert, nachdem du sie sendest",
      "Warum du deinen Standort schützt",
      "Was du tust, wenn jemand Druck macht"
    ],
    "quiz": [
      {
        "question": "Du schickst ein Bild über Snapchat. Was ist wichtig?",
        "answers": [
          "Niemand kann das Bild speichern.",
          "Jemand kann ein Bild vom Bildschirm machen."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht richtig. Snaps können gespeichert werden.",
        "feedbackCorrect": "Das ist richtig. Jemand kann ein Bild vom Bildschirm machen."
      },
      {
        "question": "Die Standort-Funktion zeigt, wo du bist. Was ist besser?",
        "answers": [
          "Standort immer teilen.",
          "Standort nicht einfach teilen."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Der Standort kann privat sein.",
        "feedbackCorrect": "Das ist sicher. Du teilst den Standort nicht einfach."
      },
      {
        "question": "Jemand drängt dich, ein sehr privates Bild zu schicken. Was ist besser?",
        "answers": [
          "Bild schicken.",
          "Nein sagen und Hilfe holen."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Niemand darf dich drängen.",
        "feedbackCorrect": "Das ist sicher. Du sagst Nein."
      },
      {
        "question": "Eine neue Person will dich adden. Du kennst sie nicht. Was ist besser?",
        "answers": [
          "Sofort annehmen.",
          "Erst prüfen oder ablehnen."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Du kennst die Person nicht.",
        "feedbackCorrect": "Das ist sicher. Du prüfst zuerst."
      },
      {
        "question": "Eine Nachricht sagt: Schick ein Bild, aber sag es niemandem. Was ist das?",
        "answers": [
          "Warnzeichen.",
          "Kein Problem."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Druck und Geheimhaltung sind Warnzeichen.",
        "feedbackCorrect": "Das ist richtig. Es ist ein Warnzeichen."
      },
      {
        "question": "Was schützt deinen Standort?",
        "answers": [
          "Nicht einfach teilen.",
          "Immer zeigen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Nicht alle müssen wissen, wo du bist.",
        "feedbackCorrect": "Das ist sicher. Du teilst ihn nicht einfach."
      },
      {
        "question": "Was darfst du bei Druck sagen?",
        "answers": [
          "Nein.",
          "Immer Ja."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Du musst nicht immer Ja sagen.",
        "feedbackCorrect": "Das ist richtig. Du darfst Nein sagen."
      },
      {
        "question": "Was ist ein Bild vom Bildschirm?",
        "answers": [
          "Ein gespeichertes Bild vom Handy.",
          "Ein Passwort."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Ein Passwort ist kein Bild vom Bildschirm.",
        "feedbackCorrect": "Das ist richtig. So kann jemand etwas speichern."
      },
      {
        "question": "Was machst du bei komischen Kontakten?",
        "answers": [
          "Prüfen.",
          "Private Bilder senden."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Private Bilder gehören nicht an Fremde.",
        "feedbackCorrect": "Das ist sicher. Du prüfst Kontakte."
      },
      {
        "question": "Was ist eine gute Snapchat-Regel?",
        "answers": [
          "Erst denken. Dann senden.",
          "Schnell schicken."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Schnell schicken kann Probleme machen.",
        "feedbackCorrect": "Das ist sicher. Erst denken, dann senden."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "photo",
        "text": [
          {
            "text": "Hier lernst du etwas über Snapchat.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du übst sichere Entscheidungen.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Du kannst den Hilfe-Button nutzen, wenn du unsicher bist.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-photo"
      },
      {
        "title": "Bilder verschwinden nicht immer",
        "module": "Bilder",
        "icon": "photo",
        "text": [
          {
            "text": "Du sendest ein Bild.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Es ist nur kurz zu sehen.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Trotzdem kann jemand das Bild speichern.",
            "pictogram": "pikto-photo"
          }
        ],
        "practice": {
          "question": "Du schickst ein Bild über Snapchat. Was ist wichtig?",
          "answers": [
            "Niemand kann das Bild speichern.",
            "Jemand kann ein Bild vom Bildschirm machen."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht richtig. Auch Snaps können gespeichert werden.",
          "feedbackCorrect": "Das ist richtig. Jemand kann ein Bild vom Bildschirm machen.",
          "remember": "Ich sende nur Bilder, die sicher sind."
        },
        "pictogram": "pikto-photo"
      },
      {
        "title": "Bild vom Bildschirm",
        "module": "Bilder",
        "icon": "photo",
        "text": [
          {
            "text": "Jemand kann ein Bild vom Bildschirm machen.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "So kann dein Bild gespeichert werden.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "So kann dein Bild weitergeschickt werden.",
            "pictogram": "pikto-photo"
          }
        ],
        "remember": "Ich denke vor dem Senden nach.",
        "pictogram": "pikto-photo"
      },
      {
        "title": "Sehr private Bilder",
        "module": "Private Bilder",
        "icon": "lock",
        "text": [
          {
            "text": "Manche Bilder sind sehr privat.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Niemand darf dich zu solchen Bildern drängen.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Du darfst Nein sagen.",
            "pictogram": "pikto-no"
          }
        ],
        "practice": {
          "question": "Jemand drängt dich, ein sehr privates Bild zu schicken. Was ist besser?",
          "answers": [
            "Bild schicken.",
            "Nein sagen und Hilfe holen."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Niemand darf dich drängen.",
          "feedbackCorrect": "Das ist sicher. Du darfst Nein sagen.",
          "remember": "Ich schicke keine privaten Bilder unter Druck."
        },
        "pictogram": "pikto-photo"
      },
      {
        "title": "Standort",
        "module": "Standort",
        "icon": "data",
        "text": [
          {
            "text": "Snapchat kann zeigen, wo du bist.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Andere können deinen Ort sehen.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Das kann unsicher sein.",
            "pictogram": "pikto-ask"
          }
        ],
        "practice": {
          "question": "Die Standort-Funktion zeigt, wo du bist. Was ist besser?",
          "answers": [
            "Standort immer teilen.",
            "Standort nicht einfach teilen."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Der Standort kann privat sein.",
          "feedbackCorrect": "Das ist sicher. Du teilst den Standort nicht einfach.",
          "remember": "Ich teile meinen Standort nicht einfach."
        },
        "pictogram": "pikto-location"
      },
      {
        "title": "Kontakte",
        "module": "Kontakte",
        "icon": "help",
        "text": [
          {
            "text": "Nicht jeder Kontakt ist vertraut.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Fremde Personen können schreiben.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du musst nicht antworten.",
            "pictogram": "pikto-location"
          }
        ],
        "practice": {
          "question": "Eine neue Person will dich adden. Du kennst sie nicht. Was ist besser?",
          "answers": [
            "Sofort annehmen.",
            "Erst prüfen oder ablehnen."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Du weißt nicht, wer die Person ist.",
          "feedbackCorrect": "Das ist sicher. Du musst fremde Anfragen nicht annehmen.",
          "remember": "Ich prüfe, wer mir schreibt."
        },
        "pictogram": "pikto-message"
      },
      {
        "title": "Druck erkennen",
        "module": "Druck",
        "icon": "warning",
        "text": [
          {
            "text": "Jemand sagt: Schick das Bild, aber sag es niemandem.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Das ist Druck und ein Warnzeichen.",
            "pictogram": "pikto-feel"
          },
          {
            "text": "Du darfst Nein sagen und Hilfe holen.",
            "pictogram": "pikto-help"
          }
        ],
        "practice": {
          "question": "Eine Nachricht macht Druck und fordert Geheimhaltung. Was ist das?",
          "answers": [
            "Warnzeichen.",
            "Kein Problem."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht richtig. Druck und Geheimhaltung sind Warnzeichen.",
          "feedbackCorrect": "Das ist richtig. Druck ist ein Warnzeichen.",
          "remember": "Druck ist ein Warnzeichen."
        },
        "pictogram": "pikto-feel"
      },
      {
        "title": "Was kann ich tun?",
        "module": "Handlungsplan",
        "icon": "help",
        "text": [
          {
            "text": "Eine Nachricht macht dir Druck.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du sendest kein Bild.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Du zeigst die Nachricht einer vertrauten Person.",
            "pictogram": "pikto-message"
          }
        ],
        "bullets": [
          {
            "text": "Nein sagen.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Kein Bild senden.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Nachricht zeigen.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Unterstützung holen.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-help"
      },
      {
        "title": "Das merke ich mir",
        "module": "Zusammenfassung",
        "icon": "remember",
        "text": [
          {
            "text": "Das sind die wichtigsten Regeln aus diesem Thema.",
            "pictogram": "pikto-done"
          }
        ],
        "bullets": [
          {
            "text": "Bilder können gespeichert werden.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Standort schützen.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Kontakte prüfen.",
            "pictogram": "pikto-done"
          },
          {
            "text": "Bei Druck Hilfe holen.",
            "pictogram": "pikto-feel"
          }
        ],
        "pictogram": "pikto-done"
      }
    ],
    "illustration": "assets/illustrations/snapchat.svg",
    "quizQuestions": [
      {
        "question": "Du schickst ein Bild über Snapchat. Was ist wichtig?",
        "answers": [
          "Niemand kann das Bild speichern.",
          "Jemand kann ein Bild vom Bildschirm machen."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht richtig. Snaps können gespeichert werden.",
        "feedbackCorrect": "Das ist richtig. Jemand kann ein Bild vom Bildschirm machen."
      },
      {
        "question": "Die Standort-Funktion zeigt, wo du bist. Was ist besser?",
        "answers": [
          "Standort immer teilen.",
          "Standort nicht einfach teilen."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Der Standort kann privat sein.",
        "feedbackCorrect": "Das ist sicher. Du teilst den Standort nicht einfach."
      },
      {
        "question": "Jemand drängt dich, ein sehr privates Bild zu schicken. Was ist besser?",
        "answers": [
          "Bild schicken.",
          "Nein sagen und Hilfe holen."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Niemand darf dich drängen.",
        "feedbackCorrect": "Das ist sicher. Du sagst Nein."
      },
      {
        "question": "Eine neue Person will dich adden. Du kennst sie nicht. Was ist besser?",
        "answers": [
          "Sofort annehmen.",
          "Erst prüfen oder ablehnen."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Du kennst die Person nicht.",
        "feedbackCorrect": "Das ist sicher. Du prüfst zuerst."
      },
      {
        "question": "Eine Nachricht sagt: Schick ein Bild, aber sag es niemandem. Was ist das?",
        "answers": [
          "Warnzeichen.",
          "Kein Problem."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Druck und Geheimhaltung sind Warnzeichen.",
        "feedbackCorrect": "Das ist richtig. Es ist ein Warnzeichen."
      },
      {
        "question": "Was schützt deinen Standort?",
        "answers": [
          "Nicht einfach teilen.",
          "Immer zeigen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Nicht alle müssen wissen, wo du bist.",
        "feedbackCorrect": "Das ist sicher. Du teilst ihn nicht einfach."
      },
      {
        "question": "Was darfst du bei Druck sagen?",
        "answers": [
          "Nein.",
          "Immer Ja."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Du musst nicht immer Ja sagen.",
        "feedbackCorrect": "Das ist richtig. Du darfst Nein sagen."
      },
      {
        "question": "Was ist ein Bild vom Bildschirm?",
        "answers": [
          "Ein gespeichertes Bild vom Handy.",
          "Ein Passwort."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Ein Passwort ist kein Bild vom Bildschirm.",
        "feedbackCorrect": "Das ist richtig. So kann jemand etwas speichern."
      },
      {
        "question": "Was machst du bei komischen Kontakten?",
        "answers": [
          "Prüfen.",
          "Private Bilder senden."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Private Bilder gehören nicht an Fremde.",
        "feedbackCorrect": "Das ist sicher. Du prüfst Kontakte."
      },
      {
        "question": "Was ist eine gute Snapchat-Regel?",
        "answers": [
          "Erst denken. Dann senden.",
          "Schnell schicken."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Schnell schicken kann Probleme machen.",
        "feedbackCorrect": "Das ist sicher. Erst denken, dann senden."
      }
    ],
    "certificateGoals": [
      "Snaps bewusst senden",
      "Standort schützen",
      "bei Druck Nein sagen"
    ],
    "helpQuestions": [
      "Kann jemand das speichern?",
      "Muss ich meinen Standort zeigen?",
      "Macht jemand Druck?",
      "Kenne ich diese Person?"
    ],
    "memoryRules": [
      "Bilder können gespeichert werden.",
      "Ich schütze meinen Standort.",
      "Ich prüfe Kontakte.",
      "Ich sage Nein bei Druck."
    ],
    "shortLessonIndexes": [
      0,
      1,
      3,
      4,
      6,
      7,
      8
    ],
    "qrLink": "index.html#snapchat",
    "qrShortLink": "index.html#snapchat:kurz",
    "qrQuizLink": "index.html#snapchat:quiz",
    "qrMemoryLink": "index.html#snapchat:merk",
    "einfachLessons": [
      {
        "title": "Bilder verschwinden nicht wirklich",
        "module": "Einfach",
        "pictogram": "pikto-photo",
        "icon": "photo",
        "text": [
          "Du sendest ein Bild auf Snapchat.",
          "Das Bild verschwindet nach kurzer Zeit.",
          "Aber andere können es speichern.",
          "Sie machen einen Screenshot.",
          "Das Bild ist dann für immer da.",
          "Schicke nur Bilder, die du zeigen kannst."
        ],
        "remember": "Bilder verschwinden nicht wirklich."
      },
      {
        "title": "Dein Standort",
        "module": "Einfach",
        "pictogram": "pikto-location",
        "icon": "warning",
        "text": [
          "Snapchat kann deinen Standort zeigen.",
          "Andere sehen dann, wo du bist.",
          "Das ist gefährlich.",
          "Du schaltest den Standort aus.",
          "Eine vertraute Person hilft dir dabei."
        ],
        "remember": "Standort ausschalten."
      },
      {
        "title": "Niemand darf dich zwingen",
        "module": "Einfach",
        "pictogram": "pikto-no",
        "icon": "stop",
        "text": [
          "Jemand macht Druck auf dich.",
          "Er sagt: Schick mir ein Bild!",
          "Du willst das nicht.",
          "Du musst das nicht machen.",
          "Du sagst nein.",
          "Du sagst es einer vertrauten Person."
        ],
        "remember": "Du darfst nein sagen."
      }
    ],
    "miniQuestion": {
      "question": "Sind Snaps immer sicher weg?",
      "answers": [
        "Nein, sie können gespeichert werden.",
        "Ja, immer.",
        "Nur bei Freunden."
      ],
      "correct": 0,
      "explanation": "Snaps können gespeichert werden, zum Beispiel durch Screenshots."
    }
  },
  {
    "id": "tiktok",
    "title": "TikTok",
    "icon": "understand",
    "desc": "Trends, Videos, Nachrichten und Pausen",
    "selfAssessment": {
      "question": "Wie sicher fühlst du dich bei TikTok?",
      "options": [
        "Noch nicht so sicher",
        "Ein bisschen sicher",
        "Schon ziemlich sicher"
      ]
    },
    "learningGoals": [
      "Wie TikTok entscheidet, was du siehst",
      "Was du bei Nachrichten und Kontakten beachtest",
      "Wie du gesund mit TikTok umgehst"
    ],
    "quiz": [
      {
        "question": "Ein Trend wirkt gefährlich. Was ist besser?",
        "answers": [
          "Ich mache mit.",
          "Ich mache nicht mit."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Gefährliche Trends können schaden.",
        "feedbackCorrect": "Das ist sicher. Du machst nicht mit."
      },
      {
        "question": "Du bemerkst, dass du sehr lange TikTok schaust. Was ist wichtig?",
        "answers": [
          "Ich darf Pause machen.",
          "Ich muss immer weiter schauen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Du musst nicht weiter schauen.",
        "feedbackCorrect": "Das ist richtig. Pausen sind wichtig."
      },
      {
        "question": "Eine fremde Person fragt nach deiner Adresse. Was ist besser?",
        "answers": [
          "Adresse schicken.",
          "Adresse nicht schicken."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Deine Adresse ist privat.",
        "feedbackCorrect": "Das ist sicher. Du schützt deine Adresse."
      },
      {
        "question": "Du willst ein Video posten. Was ist wichtig?",
        "answers": [
          "Ich prüfe, was man sieht.",
          "Ich poste sofort."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Schnell posten kann private Dinge zeigen.",
        "feedbackCorrect": "Das ist sicher. Du prüfst zuerst."
      },
      {
        "question": "Kommentare unter deinem Video sind verletzend. Was ist besser?",
        "answers": [
          "Unterstützung holen.",
          "Dich beschimpfen lassen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht gut. Du musst das nicht allein aushalten.",
        "feedbackCorrect": "Das ist sicher. Du holst Unterstützung."
      },
      {
        "question": "Was macht TikTok mit ähnlichen Videos?",
        "answers": [
          "Es zeigt oft mehr davon.",
          "Es stoppt immer sofort."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. TikTok zeigt oft ähnliche Videos.",
        "feedbackCorrect": "Das ist richtig. TikTok zeigt oft mehr davon."
      },
      {
        "question": "Was schützt dich bei Trends?",
        "answers": [
          "Vorher prüfen.",
          "Immer mitmachen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Du musst nicht mitmachen.",
        "feedbackCorrect": "Das ist sicher. Du prüfst vorher."
      },
      {
        "question": "Was schützt private Daten?",
        "answers": [
          "Nicht an Fremde senden.",
          "Allen schicken."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Fremde sollen private Daten nicht bekommen.",
        "feedbackCorrect": "Das ist sicher. Du sendest sie nicht an Fremde."
      },
      {
        "question": "Was darfst du bei TikTok machen?",
        "answers": [
          "TikTok schließen.",
          "Nie Pause machen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Pausen sind erlaubt.",
        "feedbackCorrect": "Das ist richtig. Du darfst TikTok schließen."
      },
      {
        "question": "Was ist eine gute TikTok-Regel?",
        "answers": [
          "Erst prüfen.",
          "Sofort posten."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Sofort posten kann schaden.",
        "feedbackCorrect": "Das ist sicher. Erst prüfen ist besser."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "help",
        "text": [
          {
            "text": "Hier lernst du etwas über TikTok.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Du übst sichere Entscheidungen.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Du kannst den Hilfe-Button nutzen, wenn du unsicher bist.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-help"
      },
      {
        "title": "Trends",
        "module": "Trends",
        "icon": "help",
        "text": [
          {
            "text": "Viele Menschen machen bei Trends mit.",
            "pictogram": "pikto-screen"
          },
          {
            "text": "Manche Trends sind lustig.",
            "pictogram": "pikto-screen"
          },
          {
            "text": "Manche Trends sind gefährlich.",
            "pictogram": "pikto-screen"
          }
        ],
        "practice": {
          "question": "Ein Trend wirkt gefährlich. Was ist besser?",
          "answers": [
            "Ich mache mit.",
            "Ich mache nicht mit."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Gefährliche Trends können dir schaden.",
          "feedbackCorrect": "Das ist sicher. Deine Gesundheit ist wichtiger.",
          "remember": "Ich mache gefährliche Trends nicht nach."
        },
        "pictogram": "pikto-screen"
      },
      {
        "title": "Ähnliche Videos",
        "module": "Algorithmus",
        "icon": "data",
        "text": [
          {
            "text": "TikTok merkt, was du anschaust.",
            "pictogram": "pikto-screen"
          },
          {
            "text": "Dann zeigt TikTok ähnliche Videos.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "So kannst du schnell lange schauen.",
            "pictogram": "pikto-screen"
          }
        ],
        "practice": {
          "question": "Du bemerkst, dass du sehr lange TikTok schaust. Was ist wichtig?",
          "answers": [
            "Ich darf Pause machen.",
            "Ich muss immer weiter schauen."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht richtig. Du musst nicht immer weiter schauen.",
          "feedbackCorrect": "Das ist richtig. Du darfst Pause machen.",
          "remember": "Ich mache Pause, wenn mir etwas nicht gut tut."
        },
        "pictogram": "pikto-screen"
      },
      {
        "title": "Gefährliche Trends erkennen",
        "module": "Trends",
        "icon": "warning",
        "text": [
          {
            "text": "Ein Trend sieht gefährlich aus.",
            "pictogram": "pikto-screen"
          },
          {
            "text": "Oder ein Trend tut weh.",
            "pictogram": "pikto-screen"
          },
          {
            "text": "Du machst nicht mit.",
            "pictogram": "pikto-no"
          }
        ],
        "remember": "Ich muss nicht bei jedem Trend mitmachen.",
        "pictogram": "pikto-screen"
      },
      {
        "title": "Private Nachrichten",
        "module": "Nachrichten",
        "icon": "message",
        "text": [
          {
            "text": "Fremde Personen können dir schreiben.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Sie können nach Adresse, Fotos oder anderen Daten fragen.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Du gibst solche Daten nicht weiter.",
            "pictogram": "pikto-no"
          }
        ],
        "practice": {
          "question": "Eine fremde Person fragt nach deiner Adresse. Was ist besser?",
          "answers": [
            "Adresse schicken.",
            "Adresse nicht schicken."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Deine Adresse ist privat.",
          "feedbackCorrect": "Das ist sicher. Du gibst fremden Personen keine Adresse.",
          "remember": "Ich schütze meine privaten Daten."
        },
        "pictogram": "pikto-message"
      },
      {
        "title": "Videos posten",
        "module": "Videos",
        "icon": "photo",
        "text": [
          {
            "text": "Andere können dein Video sehen und speichern.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Du prüfst das Video vorher.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Du postest nichts, was dir später schadet.",
            "pictogram": "pikto-no"
          }
        ],
        "practice": {
          "question": "Du willst ein Video posten. Was ist wichtig?",
          "answers": [
            "Ich prüfe, was man sieht.",
            "Ich poste sofort."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht sicher. Schnell posten kann private Dinge verraten.",
          "feedbackCorrect": "Das ist sicher. Du prüfst das Video vorher.",
          "remember": "Ich prüfe Videos vor dem Posten."
        },
        "pictogram": "pikto-screen"
      },
      {
        "title": "Kommentare",
        "module": "Kommentare",
        "icon": "message",
        "text": [
          {
            "text": "Kommentare können nett sein.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Kommentare können verletzend sein.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du musst nicht antworten.",
            "pictogram": "pikto-location"
          }
        ],
        "practice": {
          "question": "Kommentare unter deinem Video sind verletzend. Was ist besser?",
          "answers": [
            "Unterstützung holen.",
            "Beschimpfen lassen und schweigen."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht gut. Du musst verletzende Kommentare nicht allein aushalten.",
          "feedbackCorrect": "Das ist sicher. Du holst Unterstützung.",
          "remember": "Ich hole Unterstützung bei verletzenden Kommentaren."
        },
        "pictogram": "pikto-message"
      },
      {
        "title": "Gefühle und Pausen",
        "module": "Gefühle",
        "icon": "help",
        "text": [
          {
            "text": "Manche Videos machen traurig, wütend oder nervös.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Du darfst TikTok schließen.",
            "pictogram": "pikto-feel"
          },
          {
            "text": "Du kannst mit jemandem über deine Gefühle sprechen.",
            "pictogram": "pikto-feel"
          }
        ],
        "remember": "Ich darf TikTok weglegen.",
        "pictogram": "pikto-feel"
      },
      {
        "title": "Nicht jedes Video ist echt",
        "module": "KI",
        "icon": "warning",
        "text": [
          {
            "text": "Viele Videos auf TikTok sind mit KI gemacht.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Sie sehen echt aus. Aber sie sind gefälscht.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Auch Stimmen und Gesichter können gefälscht sein.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Mehr dazu lernst du im Thema: Fake News und KI-Fakes.",
            "pictogram": "pikto-fake"
          }
        ],
        "remember": "Auch Videos können gefälscht sein.",
        "pictogram": "pikto-ki"
      },
      {
        "title": "Was kann ich tun?",
        "module": "Handlungsplan",
        "icon": "help",
        "text": [
          {
            "text": "Gefährlicher Trend, komischer Kommentar oder Druck?",
            "pictogram": "pikto-feel"
          },
          {
            "text": "Du machst Stopp.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Du zeigst die Nachricht oder das Video einer vertrauten Person.",
            "pictogram": "pikto-photo"
          }
        ],
        "bullets": [
          {
            "text": "Nicht nachmachen.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Keine privaten Daten senden.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Pause machen.",
            "pictogram": "pikto-pause"
          },
          {
            "text": "Unterstützung holen.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-help"
      },
      {
        "title": "Das merke ich mir",
        "module": "Zusammenfassung",
        "icon": "remember",
        "text": [
          {
            "text": "Das sind die wichtigsten Regeln aus diesem Thema.",
            "pictogram": "pikto-done"
          }
        ],
        "bullets": [
          {
            "text": "Gefährliche Trends nicht nachmachen.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Pausen machen.",
            "pictogram": "pikto-pause"
          },
          {
            "text": "Private Daten schützen.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Videos vor dem Posten prüfen.",
            "pictogram": "pikto-photo"
          }
        ],
        "pictogram": "pikto-done"
      }
    ],
    "illustration": "assets/illustrations/tiktok.svg",
    "quizQuestions": [
      {
        "question": "Ein Trend wirkt gefährlich. Was ist besser?",
        "answers": [
          "Ich mache mit.",
          "Ich mache nicht mit."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Gefährliche Trends können schaden.",
        "feedbackCorrect": "Das ist sicher. Du machst nicht mit."
      },
      {
        "question": "Du bemerkst, dass du sehr lange TikTok schaust. Was ist wichtig?",
        "answers": [
          "Ich darf Pause machen.",
          "Ich muss immer weiter schauen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Du musst nicht weiter schauen.",
        "feedbackCorrect": "Das ist richtig. Pausen sind wichtig."
      },
      {
        "question": "Eine fremde Person fragt nach deiner Adresse. Was ist besser?",
        "answers": [
          "Adresse schicken.",
          "Adresse nicht schicken."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Deine Adresse ist privat.",
        "feedbackCorrect": "Das ist sicher. Du schützt deine Adresse."
      },
      {
        "question": "Du willst ein Video posten. Was ist wichtig?",
        "answers": [
          "Ich prüfe, was man sieht.",
          "Ich poste sofort."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Schnell posten kann private Dinge zeigen.",
        "feedbackCorrect": "Das ist sicher. Du prüfst zuerst."
      },
      {
        "question": "Kommentare unter deinem Video sind verletzend. Was ist besser?",
        "answers": [
          "Unterstützung holen.",
          "Dich beschimpfen lassen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht gut. Du musst das nicht allein aushalten.",
        "feedbackCorrect": "Das ist sicher. Du holst Unterstützung."
      },
      {
        "question": "Was macht TikTok mit ähnlichen Videos?",
        "answers": [
          "Es zeigt oft mehr davon.",
          "Es stoppt immer sofort."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. TikTok zeigt oft ähnliche Videos.",
        "feedbackCorrect": "Das ist richtig. TikTok zeigt oft mehr davon."
      },
      {
        "question": "Was schützt dich bei Trends?",
        "answers": [
          "Vorher prüfen.",
          "Immer mitmachen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Du musst nicht mitmachen.",
        "feedbackCorrect": "Das ist sicher. Du prüfst vorher."
      },
      {
        "question": "Was schützt private Daten?",
        "answers": [
          "Nicht an Fremde senden.",
          "Allen schicken."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Fremde sollen private Daten nicht bekommen.",
        "feedbackCorrect": "Das ist sicher. Du sendest sie nicht an Fremde."
      },
      {
        "question": "Was darfst du bei TikTok machen?",
        "answers": [
          "TikTok schließen.",
          "Nie Pause machen."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Pausen sind erlaubt.",
        "feedbackCorrect": "Das ist richtig. Du darfst TikTok schließen."
      },
      {
        "question": "Was ist eine gute TikTok-Regel?",
        "answers": [
          "Erst prüfen.",
          "Sofort posten."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Sofort posten kann schaden.",
        "feedbackCorrect": "Das ist sicher. Erst prüfen ist besser."
      }
    ],
    "certificateGoals": [
      "Trends kritisch prüfen",
      "Pausen machen",
      "Kommentare und Werbung einschätzen"
    ],
    "helpQuestions": [
      "Ist der Trend sicher?",
      "Tut mir das Video gut?",
      "Will jemand private Daten?",
      "Muss ich eine Pause machen?"
    ],
    "memoryRules": [
      "Ich mache gefährliche Trends nicht nach.",
      "Ich mache Pausen.",
      "Ich schütze private Daten.",
      "Ich prüfe Videos vor dem Posten.",
      "Nicht jedes Video ist echt."
    ],
    "shortLessonIndexes": [
      0,
      1,
      2,
      4,
      5,
      7,
      8,
      9,
      10
    ],
    "qrLink": "index.html#tiktok",
    "qrShortLink": "index.html#tiktok:kurz",
    "qrQuizLink": "index.html#tiktok:quiz",
    "qrMemoryLink": "index.html#tiktok:merk",
    "einfachLessons": [
      {
        "title": "Was du bei TikTok siehst",
        "module": "Einfach",
        "pictogram": "pikto-screen",
        "icon": "understand",
        "text": [
          "TikTok zeigt dir viele Videos.",
          "TikTok merkt, was dir gefällt.",
          "Es zeigt dir immer mehr davon.",
          "Das kann einseitig werden.",
          "Schau auch andere Kanäle an."
        ],
        "remember": "TikTok zeigt dir nur bestimmte Videos."
      },
      {
        "title": "Nachrichten auf TikTok",
        "module": "Einfach",
        "pictogram": "pikto-message",
        "icon": "warning",
        "text": [
          "Jemand schreibt dir eine Nachricht.",
          "Du kennst die Person nicht.",
          "Du antwortest nicht.",
          "Du zeigst es einer vertrauten Person.",
          "Die Person hilft dir."
        ],
        "remember": "Nachrichten von Unbekannten: vertraute Person fragen."
      },
      {
        "title": "Pause machen",
        "module": "Einfach",
        "pictogram": "pikto-pause",
        "icon": "stop",
        "text": [
          "TikTok macht, dass du lange schaust.",
          "Das ist anstrengend.",
          "Du machst nach einer Stunde Pause.",
          "Du stellst einen Timer.",
          "Das hilft dir."
        ],
        "remember": "Timer stellen. Pause machen."
      }
    ],
    "miniQuestion": {
      "question": "Was machst du bei gefährlichen Trends?",
      "answers": [
        "Nicht mitmachen.",
        "Sofort mitmachen.",
        "Andere dazu drängen."
      ],
      "correct": 0,
      "explanation": "Gefährliche Trends machst du nicht mit. Du darfst Hilfe holen."
    }
  },
  {
    "id": "hilfe",
    "title": "Hilfe bei Problemen",
    "icon": "help",
    "desc": "Stopp machen, zeigen und Unterstützung holen",
    "selfAssessment": {
      "question": "Weißt du, was du tun kannst, wenn etwas im Internet passiert?",
      "options": [
        "Noch nicht so genau",
        "Ein bisschen",
        "Schon ziemlich gut"
      ]
    },
    "learningGoals": [
      "Was du tust, wenn etwas passiert",
      "Wen du um Hilfe bittest",
      "Wie du Schlechtes meldest oder zeigst"
    ],
    "quiz": [
      {
        "question": "Eine Nachricht macht dir Angst. Was ist der erste Schritt?",
        "answers": [
          "Stopp machen.",
          "Sofort antworten."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Du musst nicht sofort antworten.",
        "feedbackCorrect": "Das ist sicher. Du machst Stopp."
      },
      {
        "question": "Jemand beleidigt dich im Chat. Was ist besser?",
        "answers": [
          "Nachricht löschen und niemandem zeigen.",
          "Nachricht zeigen und Hilfe holen."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Wenn alles gelöscht ist, kann Hilfe schwerer sein.",
        "feedbackCorrect": "Das ist sicher. Du zeigst die Nachricht."
      },
      {
        "question": "Warum ist nicht sofort löschen wichtig?",
        "answers": [
          "Die Nachricht kann als Beweis helfen.",
          "Die Nachricht ist unwichtig."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Manchmal braucht man die Nachricht.",
        "feedbackCorrect": "Das ist richtig. Die Nachricht kann als Beweis helfen."
      },
      {
        "question": "Jemand sagt: Mach das sofort und sag es niemandem. Was ist das?",
        "answers": [
          "Ein Warnzeichen.",
          "Ganz normal."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Druck und Geheimhaltung sind Warnzeichen.",
        "feedbackCorrect": "Das ist richtig. Es ist ein Warnzeichen."
      },
      {
        "question": "Zu wem kannst du mit einer komischen Nachricht gehen?",
        "answers": [
          "Zu einer vertrauten Person.",
          "Zu niemandem."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Du musst das nicht allein schaffen.",
        "feedbackCorrect": "Das ist sicher. Du darfst Unterstützung holen."
      },
      {
        "question": "Was hilft bei Angst?",
        "answers": [
          "Mit jemandem sprechen.",
          "Allein bleiben."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Angst sollst du ernst nehmen.",
        "feedbackCorrect": "Das ist sicher. Du bleibst nicht allein."
      },
      {
        "question": "Was ist ein Bild vom Bildschirm?",
        "answers": [
          "Ein Bild von der Nachricht.",
          "Ein Passwort."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Ein Passwort ist kein Bild.",
        "feedbackCorrect": "Das ist richtig. So kannst du etwas zeigen."
      },
      {
        "question": "Was ist bei Druck wichtig?",
        "answers": [
          "Nicht sofort handeln.",
          "Sofort tun, was jemand sagt."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Druck ist ein Warnzeichen.",
        "feedbackCorrect": "Das ist sicher. Du handelst nicht sofort."
      },
      {
        "question": "Was darfst du sagen?",
        "answers": [
          "Nein.",
          "Immer Ja."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Du musst nicht immer Ja sagen.",
        "feedbackCorrect": "Das ist richtig. Du darfst Nein sagen."
      },
      {
        "question": "Was ist eine gute Hilfe-Regel?",
        "answers": [
          "Stopp. Zeigen. Unterstützung holen.",
          "Allein bleiben."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Du musst nicht allein bleiben.",
        "feedbackCorrect": "Das ist sicher. Diese Regel hilft."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "help",
        "text": [
          {
            "text": "Manchmal passiert etwas im Internet, das sich falsch oder komisch anfühlt.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Das ist kein schönes Gefühl.",
            "pictogram": "pikto-feel"
          },
          {
            "text": "Dieses Thema zeigt dir: Du bist nicht allein.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Es gibt immer jemanden, der dir helfen kann.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-help"
      },
      {
        "title": "Stopp-Regel",
        "module": "Stopp",
        "icon": "stop",
        "text": [
          {
            "text": "Eine Nachricht macht dir Stress oder Angst.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du willst vielleicht sofort reagieren.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Die Stopp-Regel hilft: Erst stoppen, dann überlegen.",
            "pictogram": "pikto-no"
          }
        ],
        "practice": {
          "question": "Eine Nachricht macht dir Angst. Was ist der erste Schritt?",
          "answers": [
            "Stopp machen.",
            "Sofort antworten."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht sicher. Du musst nicht sofort antworten.",
          "feedbackCorrect": "Das ist sicher. Du machst zuerst Stopp.",
          "remember": "Stopp. Ich reagiere nicht sofort."
        },
        "pictogram": "pikto-no"
      },
      {
        "title": "Nicht sofort löschen",
        "module": "Beweise",
        "icon": "check",
        "text": [
          {
            "text": "Eine Nachricht ist gemein oder komisch.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du willst sie vielleicht löschen.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Manchmal ist es wichtig, die Nachricht erst zu zeigen.",
            "pictogram": "pikto-message"
          }
        ],
        "practice": {
          "question": "Jemand beleidigt dich im Chat. Was ist besser?",
          "answers": [
            "Nachricht löschen und niemandem zeigen.",
            "Nachricht zeigen und Hilfe holen."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Wenn alles gelöscht ist, kann Hilfe schwerer sein.",
          "feedbackCorrect": "Das ist sicher. Du zeigst die Nachricht.",
          "remember": "Ich zeige die Nachricht, bevor ich sie lösche."
        },
        "pictogram": "pikto-fake"
      },
      {
        "title": "Bild vom Bildschirm",
        "module": "Beweise",
        "icon": "photo",
        "text": [
          {
            "text": "Ein Bild vom Bildschirm kann helfen.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "So kannst du eine Nachricht später zeigen.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du kannst jemanden um Hilfe beim Screenshot bitten.",
            "pictogram": "pikto-photo"
          }
        ],
        "practice": {
          "question": "Warum ist nicht sofort löschen wichtig?",
          "answers": [
            "Die Nachricht kann als Beweis helfen.",
            "Die Nachricht ist immer unwichtig."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht richtig. Manchmal braucht man die Nachricht.",
          "feedbackCorrect": "Das ist richtig. Die Nachricht kann als Beweis helfen.",
          "remember": "Ich kann Beweise sichern."
        },
        "pictogram": "pikto-fake"
      },
      {
        "title": "Druck erkennen",
        "module": "Druck",
        "icon": "warning",
        "text": [
          {
            "text": "Jemand sagt: Mach das sofort.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Oder: Erzähl es niemandem.",
            "pictogram": "pikto-feel"
          },
          {
            "text": "Das ist Druck und ein Warnzeichen.",
            "pictogram": "pikto-feel"
          }
        ],
        "practice": {
          "question": "Jemand sagt: Mach das sofort und sag es niemandem. Was ist das?",
          "answers": [
            "Ein Warnzeichen.",
            "Ganz normal."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht richtig. Druck und Geheimhaltung sind Warnzeichen.",
          "feedbackCorrect": "Das ist richtig. Es ist ein Warnzeichen.",
          "remember": "Druck ist ein Warnzeichen."
        },
        "pictogram": "pikto-feel"
      },
      {
        "title": "Angst ernst nehmen",
        "module": "Gefühle",
        "icon": "help",
        "text": [
          {
            "text": "Eine Nachricht macht dir Angst.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Oder du hast ein komisches Gefühl im Bauch.",
            "pictogram": "pikto-feel"
          },
          {
            "text": "Das ist wichtig. Deine Gefühle sagen dir etwas.",
            "pictogram": "pikto-feel"
          },
          {
            "text": "Du musst nicht allein damit bleiben.",
            "pictogram": "pikto-no"
          }
        ],
        "success": "Du darfst über deine Gefühle sprechen. Das ist mutig.",
        "remember": "Meine Gefühle sind wichtig. Ich darf darüber sprechen.",
        "pictogram": "pikto-feel"
      },
      {
        "title": "Vertraute Personen",
        "module": "Unterstützung",
        "icon": "help",
        "text": [
          {
            "text": "Du kannst eine vertraute Person fragen.",
            "pictogram": "pikto-ask"
          },
          {
            "text": "Zum Beispiel eine Unterstützerin, einen Unterstützer, Angehörige oder Freunde.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Du musst Probleme im Internet nicht allein lösen.",
            "pictogram": "pikto-link"
          },
          {
            "text": "Hilfe zu holen ist keine Schwäche. Es ist klug.",
            "pictogram": "pikto-help"
          }
        ],
        "practice": {
          "question": "Zu wem kannst du mit einer komischen Nachricht gehen?",
          "answers": [
            "Zu einer vertrauten Person.",
            "Zu niemandem."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Du musst das nicht allein schaffen. Eine vertraute Person ist für dich da.",
          "feedbackCorrect": "Du holst dir Hilfe. Das ist mutig und richtig.",
          "remember": "Ich darf mir Unterstützung holen. Das ist klug."
        },
        "pictogram": "pikto-help"
      },
      {
        "title": "Was kann ich konkret tun?",
        "module": "Handlungsplan",
        "icon": "help",
        "text": [
          {
            "text": "Wenn etwas komisch ist, hilft ein Plan.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Du machst einen Schritt nach dem anderen.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Du musst nicht alles allein entscheiden.",
            "pictogram": "pikto-no"
          }
        ],
        "bullets": [
          {
            "text": "Stopp machen.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Nicht sofort antworten.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Nicht sofort löschen.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Bild vom Bildschirm machen.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Nachricht zeigen.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Gemeinsam den nächsten Schritt planen.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-help"
      },
      {
        "title": "Externe Hilfe",
        "module": "Unterstützung",
        "icon": "help",
        "text": [
          {
            "text": "Es gibt Beratungsstellen und Hilfsangebote.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Eine vertraute Person kann mit dir dort anrufen oder schreiben.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Du musst das nicht allein machen.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Andere Menschen haben diese Probleme auch. Du bist nicht die einzige Person.",
            "pictogram": "pikto-no"
          }
        ],
        "remember": "Es gibt immer jemanden, der helfen kann.",
        "pictogram": "pikto-help"
      },
      {
        "title": "Das merke ich mir",
        "module": "Zusammenfassung",
        "icon": "remember",
        "text": [
          {
            "text": "Das sind die wichtigsten Regeln aus diesem Thema.",
            "pictogram": "pikto-done"
          }
        ],
        "bullets": [
          {
            "text": "Stopp machen.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Nicht sofort antworten.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Nicht sofort löschen.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Nachricht zeigen.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Unterstützung holen.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-done"
      }
    ],
    "illustration": "assets/illustrations/hilfe.svg",
    "quizQuestions": [
      {
        "question": "Eine Nachricht macht dir Angst. Was ist der erste Schritt?",
        "answers": [
          "Stopp machen.",
          "Sofort antworten."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Du musst nicht sofort antworten.",
        "feedbackCorrect": "Das ist sicher. Du machst Stopp."
      },
      {
        "question": "Jemand beleidigt dich im Chat. Was ist besser?",
        "answers": [
          "Nachricht löschen und niemandem zeigen.",
          "Nachricht zeigen und Hilfe holen."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Wenn alles gelöscht ist, kann Hilfe schwerer sein.",
        "feedbackCorrect": "Das ist sicher. Du zeigst die Nachricht."
      },
      {
        "question": "Warum ist nicht sofort löschen wichtig?",
        "answers": [
          "Die Nachricht kann als Beweis helfen.",
          "Die Nachricht ist unwichtig."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Manchmal braucht man die Nachricht.",
        "feedbackCorrect": "Das ist richtig. Die Nachricht kann als Beweis helfen."
      },
      {
        "question": "Jemand sagt: Mach das sofort und sag es niemandem. Was ist das?",
        "answers": [
          "Ein Warnzeichen.",
          "Ganz normal."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Druck und Geheimhaltung sind Warnzeichen.",
        "feedbackCorrect": "Das ist richtig. Es ist ein Warnzeichen."
      },
      {
        "question": "Zu wem kannst du mit einer komischen Nachricht gehen?",
        "answers": [
          "Zu einer vertrauten Person.",
          "Zu niemandem."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Du musst das nicht allein schaffen.",
        "feedbackCorrect": "Das ist sicher. Du darfst Unterstützung holen."
      },
      {
        "question": "Was hilft bei Angst?",
        "answers": [
          "Mit jemandem sprechen.",
          "Allein bleiben."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Angst sollst du ernst nehmen.",
        "feedbackCorrect": "Das ist sicher. Du bleibst nicht allein."
      },
      {
        "question": "Was ist ein Bild vom Bildschirm?",
        "answers": [
          "Ein Bild von der Nachricht.",
          "Ein Passwort."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Ein Passwort ist kein Bild.",
        "feedbackCorrect": "Das ist richtig. So kannst du etwas zeigen."
      },
      {
        "question": "Was ist bei Druck wichtig?",
        "answers": [
          "Nicht sofort handeln.",
          "Sofort tun, was jemand sagt."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Druck ist ein Warnzeichen.",
        "feedbackCorrect": "Das ist sicher. Du handelst nicht sofort."
      },
      {
        "question": "Was darfst du sagen?",
        "answers": [
          "Nein.",
          "Immer Ja."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht richtig. Du musst nicht immer Ja sagen.",
        "feedbackCorrect": "Das ist richtig. Du darfst Nein sagen."
      },
      {
        "question": "Was ist eine gute Hilfe-Regel?",
        "answers": [
          "Stopp. Zeigen. Unterstützung holen.",
          "Allein bleiben."
        ],
        "correctIndex": 0,
        "feedbackWrong": "Das ist nicht sicher. Du musst nicht allein bleiben.",
        "feedbackCorrect": "Das ist sicher. Diese Regel hilft."
      }
    ],
    "certificateGoals": [
      "Stopp-Regel anwenden",
      "Beweise mit Hilfe sichern",
      "Unterstützung holen"
    ],
    "helpQuestions": [
      "Macht mir die Nachricht Angst oder ein komisches Gefühl?",
      "Macht jemand Druck?",
      "Soll ich die Nachricht zeigen?",
      "Wer ist eine vertraute Person für mich?",
      "Darf ich Hilfe holen? — Ja, immer."
    ],
    "memoryRules": [
      "Ich mache Stopp.",
      "Ich antworte nicht sofort.",
      "Ich lösche nicht sofort.",
      "Ich zeige die Nachricht.",
      "Ich hole Unterstützung.",
      "Ich bin nicht allein."
    ],
    "shortLessonIndexes": [
      0,
      1,
      2,
      4,
      6,
      7,
      9
    ],
    "qrLink": "index.html#hilfe",
    "qrShortLink": "index.html#hilfe:kurz",
    "qrQuizLink": "index.html#hilfe:quiz",
    "qrMemoryLink": "index.html#hilfe:merk",
    "einfachLessons": [
      {
        "title": "Etwas fühlt sich falsch an",
        "module": "Einfach",
        "pictogram": "pikto-feel",
        "icon": "help",
        "text": [
          "Manchmal passiert etwas im Internet.",
          "Das fühlt sich falsch an.",
          "Oder du bist unsicher.",
          "Du machst Stopp.",
          "Du gehst nicht weiter.",
          "Das ist mutig und richtig."
        ],
        "remember": "Wenn etwas falsch fühlt: Stopp machen."
      },
      {
        "title": "Wer hilft dir?",
        "module": "Einfach",
        "pictogram": "pikto-help",
        "icon": "help",
        "text": [
          "Du hast ein Problem im Internet.",
          "Du brauchst Hilfe.",
          "Du gehst zu einer vertrauten Person.",
          "Das kann dein Betreuer sein.",
          "Das kann ein Freund sein.",
          "Du zeigst ihr das Problem."
        ],
        "remember": "Vertraute Person um Hilfe bitten."
      },
      {
        "title": "Du bist nicht allein",
        "module": "Einfach",
        "pictogram": "pikto-help",
        "icon": "check",
        "text": [
          "Viele Menschen haben Probleme im Internet.",
          "Das passiert auch anderen.",
          "Du bist nicht allein.",
          "Hilfe zu holen ist keine Schwäche.",
          "Es ist mutig und richtig."
        ],
        "remember": "Du bist nicht allein. Hilfe holen ist mutig."
      }
    ],
    "miniQuestion": {
      "question": "Was machst du, wenn du unsicher bist?",
      "answers": [
        "Ich frage eine Person, der ich vertraue.",
        "Ich löse alles allein.",
        "Ich klicke sofort."
      ],
      "correct": 0,
      "explanation": "Bei Unsicherheit ist Hilfe holen richtig. Du musst das nicht allein lösen."
    }
  },
  {
    "id": "ki",
    "title": "KI und Chatbots",
    "icon": "ki",
    "desc": "Künstliche Intelligenz verstehen und sicher nutzen",
    "selfAssessment": {
      "question": "Was weißt du schon über Künstliche Intelligenz?",
      "options": [
        "Noch nicht so viel",
        "Ein bisschen",
        "Schon einiges"
      ]
    },
    "learningGoals": [
      "Was Künstliche Intelligenz ist",
      "Wie KI dir helfen kann",
      "Wann du bei KI vorsichtig sein musst"
    ],
    "illustration": "assets/illustrations/ki.svg",
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "ki",
        "text": [
          {
            "text": "Hier lernst du etwas über KI.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "KI bedeutet: Künstliche Intelligenz.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Du lernst: Was kann KI? Was kann KI nicht?",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Du lernst, wie du KI sicher nutzt.",
            "pictogram": "pikto-ki"
          }
        ],
        "pictogram": "pikto-ki"
      },
      {
        "title": "Was ist KI?",
        "module": "Grundwissen",
        "icon": "understand",
        "text": [
          {
            "text": "KI ist ein Computer-Programm.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Das Programm hat sehr viele Texte und Bilder gelernt.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Darum kann KI Fragen beantworten.",
            "pictogram": "pikto-location"
          },
          {
            "text": "KI kann auch Texte und Bilder machen.",
            "pictogram": "pikto-photo"
          }
        ],
        "bullets": [
          {
            "text": "KI kann mit dir schreiben.",
            "pictogram": "pikto-message"
          },
          {
            "text": "KI kann mit dir sprechen.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "KI kann Bilder machen.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "KI kann Texte schreiben.",
            "pictogram": "pikto-message"
          }
        ],
        "remember": "KI ist ein Programm. KI ist kein Mensch.",
        "pictogram": "pikto-data"
      },
      {
        "title": "Wo triffst du KI?",
        "module": "Grundwissen",
        "icon": "example",
        "text": [
          {
            "text": "KI ist heute in vielen Apps.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Manchmal siehst du KI nicht sofort.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Hier sind bekannte Beispiele.",
            "pictogram": "pikto-data"
          }
        ],
        "bullets": [
          {
            "text": "Chatbots, zum Beispiel ChatGPT",
            "pictogram": "pikto-message"
          },
          {
            "text": "Sprach-Hilfen, zum Beispiel Alexa oder Siri",
            "pictogram": "pikto-help"
          },
          {
            "text": "KI in WhatsApp und Instagram, zum Beispiel Meta AI",
            "pictogram": "pikto-ki"
          },
          {
            "text": "KI-Bilder und KI-Videos im Internet",
            "pictogram": "pikto-photo"
          }
        ],
        "remember": "KI ist in vielen Apps. Auch wenn ich sie nicht sehe.",
        "pictogram": "pikto-data"
      },
      {
        "title": "Ein Chatbot ist kein Mensch",
        "module": "Grundwissen",
        "icon": "message",
        "text": [
          {
            "text": "Ein Chatbot schreibt sehr freundlich.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Es kann sich wie ein Freund anfühlen.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Aber ein Chatbot ist ein Programm.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Ein Chatbot hat keine Gefühle.",
            "pictogram": "pikto-message"
          }
        ],
        "warning": "Ein Chatbot ist kein echter Freund. Wichtige Sorgen besprichst du mit einem Menschen.",
        "practice": {
          "question": "Ein Chatbot schreibt: Ich bin dein Freund. Was stimmt?",
          "answers": [
            "Der Chatbot ist ein echter Freund.",
            "Der Chatbot ist ein Programm."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist noch nicht richtig. Ein Chatbot kann nur so tun. Er ist ein Programm ohne Gefühle.",
          "feedbackCorrect": "Das ist richtig. Ein Chatbot ist ein Programm. Echte Freunde sind Menschen.",
          "remember": "Ein Chatbot ist kein Mensch."
        },
        "pictogram": "pikto-data"
      },
      {
        "title": "KI macht Fehler",
        "module": "Sicher nutzen",
        "icon": "warning",
        "text": [
          {
            "text": "KI klingt oft sehr sicher.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Aber KI kann Fehler machen.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Manchmal erfindet KI sogar Dinge.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Darum prüfst du wichtige Antworten.",
            "pictogram": "pikto-location"
          }
        ],
        "examples": [
          "Die KI nennt eine falsche Telefon-Nummer.",
          "Die KI erzählt etwas, das nie passiert ist."
        ],
        "practice": {
          "question": "Die KI gibt dir eine wichtige Antwort. Was ist besser?",
          "answers": [
            "Ich glaube alles sofort.",
            "Ich prüfe die Antwort oder frage einen Menschen."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist noch nicht richtig. KI kann Fehler machen. Auch wenn sie sicher klingt.",
          "feedbackCorrect": "Das ist richtig. Wichtige Antworten prüfst du. Du kannst einen Menschen fragen.",
          "remember": "KI kann Fehler machen. Ich prüfe wichtige Antworten."
        },
        "pictogram": "pikto-lock"
      },
      {
        "title": "Keine privaten Daten",
        "module": "Sicher nutzen",
        "icon": "lock",
        "text": [
          {
            "text": "Was du der KI schreibst, wird oft gespeichert.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Darum gibst du der KI keine privaten Daten.",
            "pictogram": "pikto-ki"
          }
        ],
        "bullets": [
          {
            "text": "kein Passwort",
            "pictogram": "pikto-lock"
          },
          {
            "text": "keine Adresse",
            "pictogram": "pikto-location"
          },
          {
            "text": "keine Bank-Daten",
            "pictogram": "pikto-data"
          },
          {
            "text": "keine sehr privaten Geheimnisse",
            "pictogram": "pikto-lock"
          }
        ],
        "practice": {
          "question": "Ein Chatbot fragt nach deiner Adresse. Was ist besser?",
          "answers": [
            "Ich schreibe meine Adresse.",
            "Ich schreibe meine Adresse nicht."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Deine Adresse ist privat. Auch bei einer KI.",
          "feedbackCorrect": "Das ist sicher. Private Daten bleiben bei dir. Auch bei einer KI.",
          "remember": "Ich gebe der KI keine privaten Daten."
        },
        "pictogram": "pikto-lock"
      },
      {
        "title": "Gesundheit und Geld",
        "module": "Sicher nutzen",
        "icon": "help",
        "text": [
          {
            "text": "Bei Gesundheit und Geld ist Vorsicht wichtig.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Die KI kennt dich nicht.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Die KI kann falsche Tipps geben.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Frag bei solchen Themen immer auch einen Menschen.",
            "pictogram": "pikto-lock"
          }
        ],
        "examples": [
          "Du bist krank. Du fragst die KI. Besser: Du fragst auch eine Ärztin oder einen Arzt.",
          "Du willst Geld ausgeben. Die KI rät dir etwas. Besser: Du fragst eine Person, der du vertraust."
        ],
        "practice": {
          "question": "Du bist krank. Die KI gibt dir einen Tipp. Was ist besser?",
          "answers": [
            "Ich mache nur, was die KI sagt.",
            "Ich frage auch eine Ärztin oder einen Arzt."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Die KI kennt dich nicht. Sie kann falsch liegen.",
          "feedbackCorrect": "Das ist richtig. Bei Gesundheit fragst du Fachleute. Die KI ersetzt keinen Arzt.",
          "remember": "Bei Gesundheit und Geld frage ich Menschen."
        },
        "pictogram": "pikto-lock"
      },
      {
        "title": "KI kann Bilder und Stimmen fälschen",
        "module": "Achtung",
        "icon": "photo",
        "text": [
          {
            "text": "KI kann Bilder machen, die echt aussehen.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "KI kann Stimmen nachmachen.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Betrüger nutzen das manchmal.",
            "pictogram": "pikto-fraud"
          },
          {
            "text": "Mehr dazu lernst du im Thema: Fake News und KI-Fakes.",
            "pictogram": "pikto-fake"
          }
        ],
        "warning": "Nicht alles, was echt aussieht, ist echt.",
        "pictogram": "pikto-no"
      },
      {
        "title": "Was kann ich tun?",
        "module": "Hilfe",
        "icon": "check",
        "text": [
          {
            "text": "Du darfst KI benutzen.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "KI kann dir helfen.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Diese Regeln schützen dich.",
            "pictogram": "pikto-help"
          }
        ],
        "bullets": [
          {
            "text": "Ich weiß: KI ist ein Programm.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Ich prüfe wichtige Antworten.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Ich gebe keine privaten Daten ein.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Bei Gesundheit und Geld frage ich Menschen.",
            "pictogram": "pikto-ask"
          },
          {
            "text": "Bei Unsicherheit hole ich Hilfe.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-help"
      },
      {
        "title": "Das merke ich mir",
        "module": "Merken",
        "icon": "remember",
        "text": [
          {
            "text": "Du hast viel über KI gelernt.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Diese Sätze kannst du dir merken.",
            "pictogram": "pikto-done"
          }
        ],
        "bullets": [
          {
            "text": "KI ist ein Programm. Kein Mensch.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "KI kann Fehler machen.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Ich prüfe wichtige Antworten.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Private Daten bleiben bei mir.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Ich darf mir Unterstützung holen.",
            "pictogram": "pikto-help"
          }
        ],
        "remember": "Ich nutze KI mit Verstand.",
        "pictogram": "pikto-done"
      }
    ],
    "quizQuestions": [
      {
        "question": "Was ist KI?",
        "answers": [
          "Ein Mensch.",
          "Ein Computer-Programm."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. KI ist ein Computer-Programm.",
        "feedbackWrong": "Das ist noch nicht richtig. KI ist ein Computer-Programm. Kein Mensch."
      },
      {
        "question": "Hat ein Chatbot Gefühle?",
        "answers": [
          "Ja, wie ein Mensch.",
          "Nein, er ist ein Programm."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Ein Chatbot hat keine Gefühle.",
        "feedbackWrong": "Das ist noch nicht richtig. Ein Chatbot kann nur so tun. Er ist ein Programm."
      },
      {
        "question": "Kann KI Fehler machen?",
        "answers": [
          "Ja, KI kann Fehler machen.",
          "Nein, KI weiß alles."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. KI kann Fehler machen. Auch wenn sie sicher klingt.",
        "feedbackWrong": "Das ist noch nicht richtig. KI kann Fehler machen und Dinge erfinden."
      },
      {
        "question": "Ein Chatbot fragt nach deinem Passwort. Was ist besser?",
        "answers": [
          "Passwort eingeben.",
          "Passwort nicht eingeben."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Dein Passwort bleibt geheim. Auch bei einer KI.",
        "feedbackWrong": "Das ist noch nicht richtig. Dein Passwort ist privat. Du gibst es nie weiter."
      },
      {
        "question": "Du bist krank. Was ist besser?",
        "answers": [
          "Nur die KI fragen.",
          "Auch eine Ärztin oder einen Arzt fragen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Bei Gesundheit fragst du Fachleute.",
        "feedbackWrong": "Das ist noch nicht richtig. Die KI kennt dich nicht. Sie ersetzt keinen Arzt."
      },
      {
        "question": "Die KI gibt eine wichtige Antwort. Was machst du?",
        "answers": [
          "Sofort alles glauben.",
          "Die Antwort prüfen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Wichtige Antworten prüfst du.",
        "feedbackWrong": "Das ist noch nicht richtig. KI klingt sicher, kann aber falsch liegen."
      },
      {
        "question": "Kann KI Bilder fälschen?",
        "answers": [
          "Ja, KI kann Bilder machen, die echt aussehen.",
          "Nein, das geht nicht."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. KI-Bilder können sehr echt aussehen.",
        "feedbackWrong": "Das ist noch nicht richtig. KI kann Bilder und Stimmen fälschen."
      },
      {
        "question": "Ein Chatbot schreibt sehr nett. Was stimmt?",
        "answers": [
          "Er ist ein echter Freund.",
          "Er ist ein Programm."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Echte Freunde sind Menschen.",
        "feedbackWrong": "Das ist noch nicht richtig. Ein Chatbot ist ein Programm. Kein Freund."
      }
    ],
    "helpQuestions": [
      "Spreche ich mit einem Menschen oder mit einer KI?",
      "Ist diese Antwort wirklich richtig?",
      "Will die KI private Daten von mir?",
      "Geht es um Gesundheit oder Geld?",
      "Brauche ich Unterstützung?"
    ],
    "memoryRules": [
      "KI ist ein Programm. Kein Mensch.",
      "KI kann Fehler machen.",
      "Ich prüfe wichtige Antworten.",
      "Ich gebe der KI keine privaten Daten.",
      "Bei Gesundheit und Geld frage ich Menschen.",
      "Ich darf mir Unterstützung holen."
    ],
    "shortLessonIndexes": [
      0,
      1,
      3,
      4,
      5,
      8,
      9
    ],
    "einfachLessons": [
      {
        "title": "Was ist KI?",
        "module": "Einfach",
        "pictogram": "pikto-ki",
        "icon": "ki",
        "text": [
          "KI bedeutet Künstliche Intelligenz.",
          "KI ist ein Computerprogramm.",
          "Es kann Fragen beantworten.",
          "Es kann Texte schreiben.",
          "Es kann Bilder machen.",
          "KI ist kein Mensch."
        ],
        "remember": "KI ist ein Programm. Kein Mensch."
      },
      {
        "title": "Was kann KI?",
        "module": "Einfach",
        "pictogram": "pikto-ki",
        "icon": "ki",
        "text": [
          "KI kann dir helfen.",
          "Du kannst ihr Fragen stellen.",
          "Sie gibt dir eine Antwort.",
          "Die Antwort ist nicht immer richtig.",
          "Du prüfst die Antwort."
        ],
        "remember": "KI-Antworten immer prüfen."
      },
      {
        "title": "Wann musst du aufpassen?",
        "module": "Einfach",
        "pictogram": "pikto-no",
        "icon": "warning",
        "text": [
          "KI kann auch Falsches sagen.",
          "KI kann Bilder fälschen.",
          "KI kann Stimmen nachmachen.",
          "Du glaubst nicht alles.",
          "Du fragst eine vertraute Person."
        ],
        "remember": "Nicht alles glauben. Erst prüfen."
      }
    ],
    "miniQuestion": {
      "question": "Was ist KI?",
      "answers": [
        "Ein Computer-Programm",
        "Ein Mensch",
        "Ein Tier"
      ],
      "correct": 0,
      "explanation": "KI ist ein Computer-Programm. Es kann schreiben und sprechen. Aber es ist kein Mensch."
    }
  },
  {
    "id": "fakes",
    "title": "Fake News und KI-Fakes",
    "icon": "fake",
    "desc": "Falsche Nachrichten, Bilder und Stimmen erkennen",
    "selfAssessment": {
      "question": "Weißt du, wie du eine Fake-Nachricht erkennst?",
      "options": [
        "Noch nicht so genau",
        "Ein bisschen",
        "Schon ziemlich gut"
      ]
    },
    "learningGoals": [
      "Was Fake News sind",
      "Wie du prüfst, ob etwas stimmt",
      "Was du mit Fake-Nachrichten machst"
    ],
    "illustration": "assets/illustrations/fakes.svg",
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "fake",
        "text": [
          {
            "text": "Hier lernst du etwas über Fakes.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Fake bedeutet: gefälscht oder nicht echt.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Du lernst: Wie erkenne ich falsche Nachrichten?",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du lernst: Wie erkenne ich falsche Bilder und Stimmen?",
            "pictogram": "pikto-photo"
          }
        ],
        "pictogram": "pikto-fake"
      },
      {
        "title": "Was sind Fake News?",
        "module": "Grundwissen",
        "icon": "report",
        "text": [
          {
            "text": "Fake News sind falsche Nachrichten.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Jemand verbreitet sie mit Absicht.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Fake News sehen oft aus wie echte Nachrichten.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Darum sind sie schwer zu erkennen.",
            "pictogram": "pikto-data"
          }
        ],
        "remember": "Nicht jede Nachricht im Internet ist wahr.",
        "pictogram": "pikto-data"
      },
      {
        "title": "Warum gibt es Fake News?",
        "module": "Grundwissen",
        "icon": "understand",
        "text": [
          {
            "text": "Menschen machen Fake News aus verschiedenen Gründen.",
            "pictogram": "pikto-fake"
          }
        ],
        "bullets": [
          {
            "text": "Sie wollen Geld verdienen mit vielen Klicks.",
            "pictogram": "pikto-link"
          },
          {
            "text": "Sie wollen Menschen wütend machen.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Sie wollen, dass du etwas glaubst, das nicht stimmt.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Sie wollen eine Meinung verbreiten.",
            "pictogram": "pikto-data"
          }
        ],
        "remember": "Fake News haben ein Ziel. Sie wollen mein Denken verändern.",
        "pictogram": "pikto-data"
      },
      {
        "title": "KI-Bilder erkennen",
        "module": "KI-Fakes",
        "icon": "photo",
        "text": [
          {
            "text": "KI kann Bilder machen, die echt aussehen.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Manche Fehler kannst du sehen.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Aber Achtung: Viele KI-Bilder haben keine Fehler mehr.",
            "pictogram": "pikto-photo"
          }
        ],
        "bullets": [
          {
            "text": "Schau auf Hände und Finger.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Schau auf Schrift im Bild.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Schau auf Licht und Schatten.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Wirkt das Bild zu perfekt?",
            "pictogram": "pikto-photo"
          }
        ],
        "practice": {
          "question": "Ein unglaubliches Foto im Internet. Was ist besser?",
          "answers": [
            "Ich glaube das Foto sofort.",
            "Ich bleibe erst einmal skeptisch."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist noch nicht richtig. KI kann Fotos fälschen. Auch sehr echte Fotos.",
          "feedbackCorrect": "Das ist richtig. Ein Foto ist kein Beweis mehr. KI kann Fotos fälschen.",
          "remember": "Ein Foto kann gefälscht sein."
        },
        "pictogram": "pikto-fake"
      },
      {
        "title": "Gefälschte Videos: Deepfakes",
        "module": "KI-Fakes",
        "icon": "warning",
        "text": [
          {
            "text": "Ein Deepfake ist ein gefälschtes Video.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "KI tauscht darin Gesicht oder Stimme aus.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Im Video sagt eine Person Dinge, die sie nie gesagt hat.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Oft werden bekannte Menschen gefälscht.",
            "pictogram": "pikto-fake"
          }
        ],
        "examples": [
          "Ein Video zeigt einen Promi. Er macht Werbung für Geld-Anlagen. Das Video ist gefälscht.",
          "Ein Video zeigt eine Politikerin. Sie sagt etwas Schlimmes. Das Video ist gefälscht."
        ],
        "practice": {
          "question": "Ein Promi verspricht im Video schnelles Geld. Was ist besser?",
          "answers": [
            "Ich mache sofort mit.",
            "Ich mache nicht mit. Das Video kann gefälscht sein."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Solche Videos sind fast immer Betrug mit Deepfakes.",
          "feedbackCorrect": "Das ist richtig. Promi-Videos mit Geld-Versprechen sind fast immer gefälscht.",
          "remember": "Auch Videos können gefälscht sein."
        },
        "pictogram": "pikto-fake"
      },
      {
        "title": "Geklonte Stimmen am Telefon",
        "module": "KI-Fakes",
        "icon": "message",
        "text": [
          {
            "text": "KI kann Stimmen nachmachen.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Betrüger rufen an. Die Stimme klingt wie deine Familie.",
            "pictogram": "pikto-fraud"
          },
          {
            "text": "Die Stimme sagt: Ich brauche schnell Geld.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Das nennt man Schockanruf.",
            "pictogram": "pikto-fake"
          }
        ],
        "warning": "Lege auf. Ruf die Person selbst an. Nutze die Nummer, die du kennst.",
        "practice": {
          "question": "Ein Anruf: Die Stimme klingt wie dein Bruder. Er will sofort Geld. Was ist besser?",
          "answers": [
            "Ich zahle sofort.",
            "Ich lege auf und rufe meinen Bruder selbst an."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Die Stimme kann mit KI gefälscht sein.",
          "feedbackCorrect": "Das ist richtig. Du rufst selbst zurück. So merkst du den Betrug.",
          "remember": "Bei Geld-Anrufen lege ich auf und rufe selbst zurück."
        },
        "pictogram": "pikto-fake"
      },
      {
        "title": "Nachrichten prüfen",
        "module": "Prüfen",
        "icon": "check",
        "text": [
          {
            "text": "Du kannst Nachrichten prüfen.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Diese Fragen helfen dir.",
            "pictogram": "pikto-ask"
          }
        ],
        "bullets": [
          {
            "text": "Wer hat das geschrieben?",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Steht das auch bei bekannten Nachrichten-Seiten?",
            "pictogram": "pikto-message"
          },
          {
            "text": "Wie alt ist die Nachricht?",
            "pictogram": "pikto-message"
          },
          {
            "text": "Gibt es eine Quelle?",
            "pictogram": "pikto-fake"
          }
        ],
        "practice": {
          "question": "Eine schlimme Nachricht steht nur auf einer unbekannten Seite. Was ist besser?",
          "answers": [
            "Die Nachricht stimmt bestimmt.",
            "Ich prüfe: Steht das auch bei bekannten Nachrichten-Seiten?"
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist noch nicht richtig. Eine Quelle allein ist kein Beweis.",
          "feedbackCorrect": "Das ist richtig. Wichtige Nachrichten stehen bei mehreren bekannten Seiten.",
          "remember": "Ich prüfe Nachrichten bei bekannten Seiten."
        },
        "pictogram": "pikto-fake"
      },
      {
        "title": "Starke Gefühle sind ein Warnzeichen",
        "module": "Prüfen",
        "icon": "warning",
        "text": [
          {
            "text": "Fake News machen oft starke Gefühle.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Zum Beispiel Wut oder Angst.",
            "pictogram": "pikto-feel"
          },
          {
            "text": "Starke Gefühle sind ein Warnzeichen.",
            "pictogram": "pikto-feel"
          },
          {
            "text": "Dann lohnt sich das Prüfen besonders.",
            "pictogram": "pikto-fake"
          }
        ],
        "practice": {
          "question": "Eine Nachricht macht dich sehr wütend. Was ist besser?",
          "answers": [
            "Sofort weiterleiten.",
            "Erst einmal anhalten und prüfen."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist noch nicht richtig. Wut ist ein Warnzeichen für Fake News.",
          "feedbackCorrect": "Das ist richtig. Bei starken Gefühlen erst anhalten und prüfen.",
          "remember": "Starke Gefühle? Erst prüfen."
        },
        "pictogram": "pikto-fake"
      },
      {
        "title": "Nicht einfach weiterleiten",
        "module": "Prüfen",
        "icon": "stop",
        "text": [
          {
            "text": "Wenn du Fakes weiterleitest, verbreiten sie sich.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Dann glauben noch mehr Menschen die Lüge.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Darum gilt: Erst prüfen. Dann teilen.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Im Zweifel: Nicht teilen.",
            "pictogram": "pikto-no"
          }
        ],
        "practice": {
          "question": "Du bist nicht sicher, ob eine Nachricht stimmt. Was ist besser?",
          "answers": [
            "Trotzdem weiterleiten.",
            "Nicht weiterleiten."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist noch nicht richtig. So verbreiten sich Lügen weiter.",
          "feedbackCorrect": "Das ist richtig. Im Zweifel teilst du die Nachricht nicht.",
          "remember": "Im Zweifel teile ich nicht."
        },
        "pictogram": "pikto-fake"
      },
      {
        "title": "Was kann ich tun?",
        "module": "Hilfe",
        "icon": "help",
        "text": [
          {
            "text": "Du kannst dich schützen.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Diese Regeln helfen dir.",
            "pictogram": "pikto-help"
          }
        ],
        "bullets": [
          {
            "text": "Ich glaube nicht alles sofort.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Ich prüfe: Wer schreibt das? Steht das auch woanders?",
            "pictogram": "pikto-message"
          },
          {
            "text": "Bei starken Gefühlen mache ich langsam.",
            "pictogram": "pikto-feel"
          },
          {
            "text": "Im Zweifel teile ich nicht.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Ich kann eine Person fragen, der ich vertraue.",
            "pictogram": "pikto-ask"
          }
        ],
        "pictogram": "pikto-help"
      },
      {
        "title": "Das merke ich mir",
        "module": "Merken",
        "icon": "remember",
        "text": [
          {
            "text": "Du hast viel über Fakes gelernt.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Diese Sätze kannst du dir merken.",
            "pictogram": "pikto-done"
          }
        ],
        "bullets": [
          {
            "text": "Nicht alles im Internet ist wahr.",
            "pictogram": "pikto-link"
          },
          {
            "text": "Bilder, Videos und Stimmen können gefälscht sein.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Starke Gefühle sind ein Warnzeichen.",
            "pictogram": "pikto-feel"
          },
          {
            "text": "Erst prüfen. Dann teilen.",
            "pictogram": "pikto-done"
          },
          {
            "text": "Ich darf mir Unterstützung holen.",
            "pictogram": "pikto-help"
          }
        ],
        "remember": "Erst prüfen. Dann glauben.",
        "pictogram": "pikto-done"
      }
    ],
    "quizQuestions": [
      {
        "question": "Was sind Fake News?",
        "answers": [
          "Falsche Nachrichten.",
          "Nachrichten aus dem Fernsehen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Fake News sind falsche Nachrichten mit Absicht.",
        "feedbackWrong": "Das ist noch nicht richtig. Fake News sind falsche Nachrichten."
      },
      {
        "question": "Kann KI Fotos fälschen?",
        "answers": [
          "Ja, sehr echt aussehende Fotos.",
          "Nein, niemals."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. KI-Bilder können sehr echt aussehen.",
        "feedbackWrong": "Das ist noch nicht richtig. KI kann sehr echte Fotos fälschen."
      },
      {
        "question": "Was ist ein Deepfake?",
        "answers": [
          "Ein gefälschtes Video.",
          "Ein tiefes Loch."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Ein Deepfake ist ein gefälschtes Video mit KI.",
        "feedbackWrong": "Das ist noch nicht richtig. Ein Deepfake ist ein gefälschtes Video."
      },
      {
        "question": "Ein Anruf will sofort Geld. Die Stimme klingt bekannt. Was ist besser?",
        "answers": [
          "Sofort Geld senden.",
          "Auflegen und selbst zurückrufen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Stimmen können gefälscht sein. Du rufst selbst zurück.",
        "feedbackWrong": "Das ist noch nicht richtig. Die Stimme kann mit KI gefälscht sein."
      },
      {
        "question": "Eine Nachricht macht dich sehr wütend. Was bedeutet das?",
        "answers": [
          "Die Nachricht stimmt bestimmt.",
          "Das ist ein Warnzeichen. Ich prüfe die Nachricht."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Fake News wollen starke Gefühle machen.",
        "feedbackWrong": "Das ist noch nicht richtig. Starke Gefühle sind ein Warnzeichen."
      },
      {
        "question": "Du bist unsicher, ob eine Nachricht stimmt. Was machst du?",
        "answers": [
          "Ich leite sie nicht weiter.",
          "Ich leite sie an alle weiter."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Im Zweifel nicht teilen.",
        "feedbackWrong": "Das ist noch nicht richtig. So verbreiten sich Lügen."
      },
      {
        "question": "Wie kannst du eine Nachricht prüfen?",
        "answers": [
          "Schauen, ob bekannte Nachrichten-Seiten das auch melden.",
          "Schauen, ob das Bild schön ist."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Wichtige Nachrichten stehen bei mehreren bekannten Seiten.",
        "feedbackWrong": "Das ist noch nicht richtig. Du prüfst die Quelle, nicht das Aussehen."
      },
      {
        "question": "Ein Promi verspricht im Video schnelles Geld. Was ist das oft?",
        "answers": [
          "Ein gefälschtes Video. Betrug.",
          "Ein guter Tipp."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Solche Videos sind fast immer Deepfake-Betrug.",
        "feedbackWrong": "Das ist noch nicht richtig. Solche Videos sind fast immer Betrug."
      }
    ],
    "helpQuestions": [
      "Wer hat diese Nachricht geschrieben?",
      "Steht das auch bei bekannten Nachrichten-Seiten?",
      "Macht die Nachricht starke Gefühle?",
      "Kann das Bild oder Video gefälscht sein?",
      "Brauche ich Unterstützung?"
    ],
    "memoryRules": [
      "Nicht alles im Internet ist wahr.",
      "Bilder und Videos können gefälscht sein.",
      "Stimmen am Telefon können gefälscht sein.",
      "Starke Gefühle sind ein Warnzeichen.",
      "Erst prüfen. Dann teilen.",
      "Bei Geld-Anrufen rufe ich selbst zurück.",
      "Ich darf mir Unterstützung holen."
    ],
    "shortLessonIndexes": [
      0,
      1,
      3,
      5,
      7,
      8,
      10
    ],
    "einfachLessons": [
      {
        "title": "Was ist eine Fake-Nachricht?",
        "module": "Einfach",
        "pictogram": "pikto-fake",
        "icon": "fake",
        "text": [
          "Eine Fake-Nachricht ist eine Lüge.",
          "Sie sieht aus wie eine echte Nachricht.",
          "Aber sie stimmt nicht.",
          "Manchmal ist sie auch ein Bild.",
          "Das Bild ist verändert worden."
        ],
        "remember": "Fake-Nachrichten sind Lügen."
      },
      {
        "title": "Wie erkennst du Fakes?",
        "module": "Einfach",
        "pictogram": "pikto-fake",
        "icon": "fake",
        "text": [
          "Du liest eine Nachricht.",
          "Sie macht dich sehr aufgeregt.",
          "Das kann ein Zeichen sein.",
          "Du überlegst kurz.",
          "Du prüfst auf einer anderen Seite.",
          "Oder du fragst eine vertraute Person."
        ],
        "remember": "Erst prüfen. Dann teilen."
      },
      {
        "title": "Was tust du bei Fakes?",
        "module": "Einfach",
        "pictogram": "pikto-no",
        "icon": "stop",
        "text": [
          "Du erkennst eine Fake-Nachricht.",
          "Du schickst sie nicht weiter.",
          "Du löschst sie.",
          "Du sagst es einer vertrauten Person."
        ],
        "remember": "Fakes nicht weiterleiten."
      }
    ],
    "miniQuestion": {
      "question": "Was machst du bei einer unglaublichen Nachricht?",
      "answers": [
        "Erst prüfen, dann teilen",
        "Sofort weiterleiten",
        "Sofort glauben"
      ],
      "correct": 0,
      "explanation": "Erst prüfen ist richtig. Nicht alles im Internet ist wahr."
    }
  },
  {
    "id": "betrug",
    "title": "Online-Betrug und Abzocke",
    "icon": "betrug",
    "desc": "Betrug erkennen: Phishing, falsche Gewinne und Tricks",
    "selfAssessment": {
      "question": "Weißt du, wie Betrüger im Internet vorgehen?",
      "options": [
        "Noch nicht so genau",
        "Ein bisschen",
        "Schon ziemlich gut"
      ]
    },
    "learningGoals": [
      "Wie Betrüger vorgehen",
      "Welche Tricks du erkennst",
      "Was du tust, wenn du betrogen wirst"
    ],
    "illustration": "assets/illustrations/betrug.svg",
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "betrug",
        "text": [
          {
            "text": "Hier lernst du etwas über Betrug im Internet.",
            "pictogram": "pikto-fraud"
          },
          {
            "text": "Betrüger wollen dein Geld oder deine Daten.",
            "pictogram": "pikto-fraud"
          },
          {
            "text": "Du lernst die bekannten Tricks.",
            "pictogram": "pikto-fraud"
          },
          {
            "text": "Wer die Tricks kennt, ist besser geschützt.",
            "pictogram": "pikto-fraud"
          }
        ],
        "pictogram": "pikto-fraud"
      },
      {
        "title": "Was ist Phishing?",
        "module": "Grundwissen",
        "icon": "link",
        "text": [
          {
            "text": "Phishing ist ein Trick mit falschen Nachrichten.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Die Nachricht sieht aus wie von deiner Bank oder einer Firma.",
            "pictogram": "pikto-message"
          },
          {
            "text": "In der Nachricht ist ein Link.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Der Link führt zu einer falschen Seite. Dort sollen deine Daten gestohlen werden.",
            "pictogram": "pikto-location"
          }
        ],
        "examples": [
          "Eine E-Mail sagt: Ihr Konto wird gesperrt. Klicken Sie hier.",
          "Eine SMS sagt: Bestätigen Sie Ihre Bank-Daten."
        ],
        "practice": {
          "question": "Eine E-Mail von der Bank will, dass du sofort auf einen Link klickst. Was ist besser?",
          "answers": [
            "Sofort klicken.",
            "Nicht klicken. Bei der Bank selbst nachfragen."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Banken fragen nie per E-Mail nach deinen Daten.",
          "feedbackCorrect": "Das ist richtig. Du klickst nicht. Du fragst bei der Bank selbst nach.",
          "remember": "Meine Bank fragt nie per E-Mail nach meinen Daten."
        },
        "pictogram": "pikto-data"
      },
      {
        "title": "Falsche Nachrichten erkennen",
        "module": "Grundwissen",
        "icon": "warning",
        "text": [
          {
            "text": "Betrugs-Nachrichten haben oft die gleichen Zeichen.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Diese Warnzeichen kannst du lernen.",
            "pictogram": "pikto-data"
          }
        ],
        "bullets": [
          {
            "text": "Die Nachricht macht Druck: Sofort! Schnell! Letzte Chance!",
            "pictogram": "pikto-location"
          },
          {
            "text": "Die Nachricht droht: Sonst wird Ihr Konto gesperrt.",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Du sollst auf einen Link klicken.",
            "pictogram": "pikto-link"
          },
          {
            "text": "Du sollst Daten eingeben oder Geld zahlen.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Die Nachricht kommt überraschend.",
            "pictogram": "pikto-message"
          }
        ],
        "remember": "Druck und Drohung sind Warnzeichen.",
        "pictogram": "pikto-data"
      },
      {
        "title": "Der Paket-Trick",
        "module": "Tricks",
        "icon": "report",
        "text": [
          {
            "text": "Eine SMS sagt: Ihr Paket wartet.",
            "pictogram": "pikto-pause"
          },
          {
            "text": "Sie sollen eine kleine Gebühr zahlen.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Oder Sie sollen auf einen Link klicken.",
            "pictogram": "pikto-link"
          },
          {
            "text": "Das ist fast immer Betrug.",
            "pictogram": "pikto-fraud"
          }
        ],
        "warning": "Echte Paket-Dienste fordern kein Geld per SMS.",
        "practice": {
          "question": "Eine SMS: Zahlen Sie 2 Euro Zoll für Ihr Paket. Was ist besser?",
          "answers": [
            "Schnell zahlen. Sind ja nur 2 Euro.",
            "Nicht zahlen. Nicht klicken."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Die Betrüger wollen deine Bank-Daten. Es geht nicht um 2 Euro.",
          "feedbackCorrect": "Das ist richtig. Solche SMS sind fast immer Betrug.",
          "remember": "Paket-SMS mit Geld-Forderung sind Betrug."
        },
        "pictogram": "pikto-fraud"
      },
      {
        "title": "Der Hallo-Mama-Trick",
        "module": "Tricks",
        "icon": "message",
        "text": [
          {
            "text": "Eine WhatsApp-Nachricht sagt: Hallo Mama, hallo Papa.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Ich habe eine neue Nummer.",
            "pictogram": "pikto-fraud"
          },
          {
            "text": "Mein Handy ist kaputt. Ich brauche schnell Geld.",
            "pictogram": "pikto-screen"
          },
          {
            "text": "Das ist ein bekannter Betrug.",
            "pictogram": "pikto-fraud"
          }
        ],
        "practice": {
          "question": "Eine fremde Nummer schreibt: Ich bin dein Kind, brauche Geld. Was ist besser?",
          "answers": [
            "Sofort Geld senden.",
            "Die alte, bekannte Nummer anrufen und nachfragen."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Das ist ein bekannter Trick.",
          "feedbackCorrect": "Das ist richtig. Du rufst die alte Nummer an. So merkst du den Betrug.",
          "remember": "Bei Geld-Nachrichten rufe ich die bekannte Nummer an."
        },
        "pictogram": "pikto-fraud"
      },
      {
        "title": "Schockanrufe",
        "module": "Tricks",
        "icon": "stop",
        "text": [
          {
            "text": "Ein Anruf macht dir große Angst.",
            "pictogram": "pikto-feel"
          },
          {
            "text": "Zum Beispiel: Ihr Kind hatte einen Unfall. Wir brauchen Geld.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Mit KI kann die Stimme sogar echt klingen.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Auch falsche Polizisten rufen an.",
            "pictogram": "pikto-fake"
          }
        ],
        "warning": "Die echte Polizei fordert nie Geld am Telefon.",
        "practice": {
          "question": "Ein Anrufer sagt: Ich bin Polizist. Geben Sie mir Ihr Geld. Was ist besser?",
          "answers": [
            "Geld geben.",
            "Auflegen. Die Polizei fordert nie Geld."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Die echte Polizei fordert nie Geld am Telefon.",
          "feedbackCorrect": "Das ist richtig. Du legst auf. Die echte Polizei fordert nie Geld.",
          "remember": "Die echte Polizei fordert nie Geld."
        },
        "pictogram": "pikto-fraud"
      },
      {
        "title": "Falsche Gewinne",
        "module": "Tricks",
        "icon": "example",
        "text": [
          {
            "text": "Eine Nachricht sagt: Sie haben gewonnen!",
            "pictogram": "pikto-message"
          },
          {
            "text": "Aber du hast bei keinem Gewinnspiel mitgemacht.",
            "pictogram": "pikto-fraud"
          },
          {
            "text": "Du sollst zuerst eine Gebühr zahlen.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Das ist Betrug. Echte Gewinne kosten kein Geld.",
            "pictogram": "pikto-fraud"
          }
        ],
        "practice": {
          "question": "Du hast angeblich gewonnen. Du sollst erst 50 Euro Gebühr zahlen. Was ist besser?",
          "answers": [
            "Gebühr zahlen.",
            "Nicht zahlen. Das ist Betrug."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Echte Gewinne kosten kein Geld.",
          "feedbackCorrect": "Das ist richtig. Echte Gewinne kosten nie Geld.",
          "remember": "Echte Gewinne kosten kein Geld."
        },
        "pictogram": "pikto-fraud"
      },
      {
        "title": "Abo-Fallen",
        "module": "Tricks",
        "icon": "warning",
        "text": [
          {
            "text": "Ein Angebot sagt: Kostenlos testen!",
            "pictogram": "pikto-fraud"
          },
          {
            "text": "Aber im Kleingedruckten steht: Danach kostet es jeden Monat Geld.",
            "pictogram": "pikto-feel"
          },
          {
            "text": "Das nennt man Abo-Falle.",
            "pictogram": "pikto-fraud"
          },
          {
            "text": "Lies genau, bevor du etwas bestellst.",
            "pictogram": "pikto-fraud"
          }
        ],
        "bullets": [
          {
            "text": "Steht da ein Preis pro Monat?",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Wie lange läuft das Abo?",
            "pictogram": "pikto-fraud"
          },
          {
            "text": "Frag eine Person, bevor du bestellst.",
            "pictogram": "pikto-fraud"
          }
        ],
        "remember": "Kostenlos kann teuer werden. Ich lese genau.",
        "pictogram": "pikto-fraud"
      },
      {
        "title": "Codes nie weitergeben",
        "module": "Schutz",
        "icon": "lock",
        "text": [
          {
            "text": "Manchmal bekommst du einen Code per SMS.",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Zum Beispiel von der Bank oder von WhatsApp.",
            "pictogram": "pikto-screen"
          },
          {
            "text": "Dieser Code ist nur für dich.",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Betrüger fragen nach diesem Code. Gib ihn nie weiter.",
            "pictogram": "pikto-fraud"
          }
        ],
        "practice": {
          "question": "Jemand ruft an und fragt nach dem SMS-Code von deiner Bank. Was ist besser?",
          "answers": [
            "Code vorlesen.",
            "Code nicht weitergeben. Auflegen."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Mit dem Code können Betrüger dein Konto leeren.",
          "feedbackCorrect": "Das ist richtig. Codes sind nur für dich. Niemals weitergeben.",
          "remember": "Ich gebe nie einen Code weiter."
        },
        "pictogram": "pikto-lock"
      },
      {
        "title": "Was tun nach einem Betrug?",
        "module": "Hilfe",
        "icon": "help",
        "text": [
          {
            "text": "Betrug kann jedem passieren.",
            "pictogram": "pikto-fraud"
          },
          {
            "text": "Du musst dich nicht schämen.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Wichtig ist: Hol dir schnell Hilfe.",
            "pictogram": "pikto-help"
          }
        ],
        "bullets": [
          {
            "text": "Sag einer Person Bescheid, der du vertraust.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Bei Bank-Daten: Ruf sofort die Bank an. Lass die Karte sperren.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Der Sperr-Notruf ist die 116 116.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Du kannst Anzeige bei der Polizei machen.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Heb die Nachricht als Beweis auf.",
            "pictogram": "pikto-message"
          }
        ],
        "remember": "Betrug ist nicht meine Schuld. Ich hole mir Hilfe.",
        "pictogram": "pikto-help"
      },
      {
        "title": "Das merke ich mir",
        "module": "Merken",
        "icon": "remember",
        "text": [
          {
            "text": "Du kennst jetzt die wichtigsten Tricks.",
            "pictogram": "pikto-fraud"
          },
          {
            "text": "Diese Sätze kannst du dir merken.",
            "pictogram": "pikto-done"
          }
        ],
        "bullets": [
          {
            "text": "Druck und Drohung sind Warnzeichen.",
            "pictogram": "pikto-feel"
          },
          {
            "text": "Ich klicke nicht auf fremde Links.",
            "pictogram": "pikto-link"
          },
          {
            "text": "Ich gebe nie Codes oder Bank-Daten weiter.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Echte Gewinne kosten kein Geld.",
            "pictogram": "pikto-done"
          },
          {
            "text": "Bei Geld-Forderungen rufe ich selbst zurück.",
            "pictogram": "pikto-done"
          },
          {
            "text": "Nach einem Betrug hole ich mir sofort Hilfe.",
            "pictogram": "pikto-location"
          }
        ],
        "remember": "Ich lasse mich nicht unter Druck setzen.",
        "pictogram": "pikto-done"
      }
    ],
    "quizQuestions": [
      {
        "question": "Was ist Phishing?",
        "answers": [
          "Ein Trick mit falschen Nachrichten.",
          "Ein Spiel."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Phishing sind falsche Nachrichten, die Daten stehlen wollen.",
        "feedbackWrong": "Das ist noch nicht richtig. Phishing ist ein Betrugs-Trick mit falschen Nachrichten."
      },
      {
        "question": "Eine E-Mail macht Druck: Sofort klicken! Was bedeutet das?",
        "answers": [
          "Das ist ein Warnzeichen für Betrug.",
          "Das ist normal."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Druck ist ein Warnzeichen.",
        "feedbackWrong": "Das ist noch nicht richtig. Druck und Drohung sind Warnzeichen."
      },
      {
        "question": "Eine SMS: Zahlen Sie Gebühr für Ihr Paket. Was machst du?",
        "answers": [
          "Nicht zahlen, nicht klicken.",
          "Schnell zahlen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Solche SMS sind fast immer Betrug.",
        "feedbackWrong": "Das ist noch nicht richtig. Paket-SMS mit Geld-Forderung sind Betrug."
      },
      {
        "question": "Hallo Mama, neue Nummer, brauche Geld. Was machst du?",
        "answers": [
          "Die alte, bekannte Nummer anrufen.",
          "Sofort Geld senden."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Du prüfst über die bekannte Nummer.",
        "feedbackWrong": "Das ist noch nicht richtig. Das ist ein bekannter Betrugs-Trick."
      },
      {
        "question": "Fordert die echte Polizei Geld am Telefon?",
        "answers": [
          "Nein, niemals.",
          "Ja, manchmal."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Die echte Polizei fordert nie Geld.",
        "feedbackWrong": "Das ist noch nicht richtig. Die echte Polizei fordert nie Geld am Telefon."
      },
      {
        "question": "Du sollst für einen Gewinn erst Geld zahlen. Was stimmt?",
        "answers": [
          "Das ist Betrug.",
          "Das ist normal."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Echte Gewinne kosten kein Geld.",
        "feedbackWrong": "Das ist noch nicht richtig. Echte Gewinne kosten nie Geld."
      },
      {
        "question": "Jemand fragt nach deinem SMS-Code. Was machst du?",
        "answers": [
          "Code niemals weitergeben.",
          "Code vorlesen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Codes sind nur für dich.",
        "feedbackWrong": "Das ist noch nicht richtig. Mit dem Code können Betrüger dein Konto benutzen."
      },
      {
        "question": "Du bist auf einen Betrug hereingefallen. Was ist richtig?",
        "answers": [
          "Ich hole mir sofort Hilfe.",
          "Ich schäme mich und sage nichts."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Betrug kann jedem passieren. Hilfe holen ist stark.",
        "feedbackWrong": "Das ist noch nicht richtig. Betrug ist nicht deine Schuld. Hol dir schnell Hilfe."
      },
      {
        "question": "Welche Nummer sperrt deine Bank-Karte?",
        "answers": [
          "116 116",
          "110 110"
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Der Sperr-Notruf ist die 116 116.",
        "feedbackWrong": "Das ist noch nicht richtig. Der Sperr-Notruf ist die 116 116."
      }
    ],
    "helpQuestions": [
      "Macht die Nachricht Druck oder Angst?",
      "Soll ich Geld zahlen oder Daten eingeben?",
      "Kenne ich den Absender wirklich?",
      "Kann ich die Person selbst zurückrufen?",
      "Brauche ich Unterstützung?"
    ],
    "memoryRules": [
      "Druck und Drohung sind Warnzeichen.",
      "Ich klicke nicht auf fremde Links.",
      "Ich gebe nie Codes oder Bank-Daten weiter.",
      "Echte Gewinne kosten kein Geld.",
      "Die echte Polizei fordert nie Geld.",
      "Bei Geld-Forderungen rufe ich selbst zurück.",
      "Betrug ist nicht meine Schuld. Ich hole mir Hilfe."
    ],
    "shortLessonIndexes": [
      0,
      1,
      2,
      4,
      6,
      8,
      9,
      10
    ],
    "einfachLessons": [
      {
        "title": "Was ist Betrug im Internet?",
        "module": "Einfach",
        "pictogram": "pikto-fraud",
        "icon": "betrug",
        "text": [
          "Manche Menschen betrügen andere.",
          "Sie tun so, als ob sie helfen.",
          "Aber sie wollen dein Geld.",
          "Oder deine Daten.",
          "Das ist Betrug."
        ],
        "remember": "Nicht jeder im Internet ist ehrlich."
      },
      {
        "title": "Wie erkennst du Betrug?",
        "module": "Einfach",
        "pictogram": "pikto-fraud",
        "icon": "warning",
        "text": [
          "Du gewinnst plötzlich etwas.",
          "Jemand braucht dringend Geld.",
          "Jemand macht Druck auf dich.",
          "Das sind Zeichen für Betrug.",
          "Du machst Stopp.",
          "Du fragst eine vertraute Person."
        ],
        "remember": "Druck und Gewinn: Stopp machen."
      },
      {
        "title": "Was tust du bei Betrug?",
        "module": "Einfach",
        "pictogram": "pikto-no",
        "icon": "stop",
        "text": [
          "Du zahlst kein Geld.",
          "Du gibst keine Daten ein.",
          "Du sagst es einer vertrauten Person.",
          "Die Person hilft dir."
        ],
        "remember": "Kein Geld senden. Vertraute Person fragen."
      }
    ],
    "miniQuestion": {
      "question": "Eine Nachricht macht Druck und will Geld. Was ist das oft?",
      "answers": [
        "Betrug",
        "Ein Geschenk",
        "Ein Gewinn"
      ],
      "correct": 0,
      "explanation": "Druck und Geld-Forderungen sind Warnzeichen für Betrug."
    }
  },
  {
    "id": "einkaufen",
    "title": "Online-Einkaufen und Bezahlen",
    "icon": "einkaufen",
    "desc": "Sicher einkaufen und bezahlen im Internet",
    "selfAssessment": {
      "question": "Wie sicher fühlst du dich beim Online-Einkaufen?",
      "options": [
        "Noch nicht so sicher",
        "Ein bisschen sicher",
        "Schon ziemlich sicher"
      ]
    },
    "learningGoals": [
      "Woran du einen seriösen Shop erkennst",
      "Welche Bezahl-Art sicherer ist",
      "Was du tust, wenn ein Kauf schiefläuft"
    ],
    "illustration": "assets/illustrations/einkaufen.svg",
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "einkaufen",
        "text": [
          {
            "text": "Hier lernst du etwas über Einkaufen im Internet.",
            "pictogram": "pikto-link"
          },
          {
            "text": "Du lernst: Wie erkenne ich gute Shops?",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Du lernst: Wie bezahle ich sicher?",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Du lernst: Was mache ich bei Problemen?",
            "pictogram": "pikto-shop"
          }
        ],
        "pictogram": "pikto-shop"
      },
      {
        "title": "Gute Shops erkennen",
        "module": "Einkaufen",
        "icon": "check",
        "text": [
          {
            "text": "Es gibt viele gute Shops im Internet.",
            "pictogram": "pikto-link"
          },
          {
            "text": "Daran erkennst du einen guten Shop.",
            "pictogram": "pikto-shop"
          }
        ],
        "bullets": [
          {
            "text": "Der Shop ist bekannt.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Der Shop hat ein Impressum. Dort steht: Name und Adresse der Firma.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Es gibt echte Bewertungen von Kunden.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Die Preise sind normal. Nicht verdächtig billig.",
            "pictogram": "pikto-shop"
          }
        ],
        "remember": "Ich kaufe bei Shops, die ich kenne oder geprüft habe.",
        "pictogram": "pikto-shop"
      },
      {
        "title": "Fake-Shops erkennen",
        "module": "Einkaufen",
        "icon": "warning",
        "text": [
          {
            "text": "Ein Fake-Shop ist ein falscher Shop.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Du bezahlst. Aber die Ware kommt nie.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Fake-Shops sehen oft sehr echt aus.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Diese Warnzeichen helfen dir.",
            "pictogram": "pikto-shop"
          }
        ],
        "bullets": [
          {
            "text": "Alles ist sehr, sehr billig.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Du kannst nur per Vorkasse zahlen.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Es gibt kein Impressum.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Der Name der Internet-Seite ist komisch.",
            "pictogram": "pikto-link"
          }
        ],
        "practice": {
          "question": "Ein Shop ist extrem billig. Du kannst nur per Vorkasse zahlen. Was ist besser?",
          "answers": [
            "Schnell kaufen. So billig!",
            "Nicht kaufen. Das sind Warnzeichen."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Extrem billig plus nur Vorkasse: Das ist oft ein Fake-Shop.",
          "feedbackCorrect": "Das ist richtig. Extrem billige Preise und nur Vorkasse sind Warnzeichen.",
          "remember": "Sehr billig und nur Vorkasse: Da kaufe ich nicht."
        },
        "pictogram": "pikto-shop"
      },
      {
        "title": "Sicher bezahlen",
        "module": "Bezahlen",
        "icon": "data",
        "text": [
          {
            "text": "Es gibt verschiedene Arten zu bezahlen.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Manche sind sicherer als andere.",
            "pictogram": "pikto-shop"
          }
        ],
        "bullets": [
          {
            "text": "Kauf auf Rechnung ist sicher: Du zahlst erst, wenn die Ware da ist.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "PayPal und ähnliche Dienste haben einen Käufer-Schutz.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Vorkasse an Fremde ist riskant: Das Geld ist oft weg.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Niemals Geld an Privat-Personen senden, die du nicht kennst.",
            "pictogram": "pikto-message"
          }
        ],
        "practice": {
          "question": "Welche Bezahl-Art ist sicherer?",
          "answers": [
            "Vorkasse an einen fremden Shop.",
            "Kauf auf Rechnung."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Bei Vorkasse ist dein Geld zuerst weg.",
          "feedbackCorrect": "Das ist richtig. Bei Rechnung zahlst du erst, wenn die Ware da ist.",
          "remember": "Rechnung ist sicherer als Vorkasse."
        },
        "pictogram": "pikto-shop"
      },
      {
        "title": "Bank-Daten schützen",
        "module": "Bezahlen",
        "icon": "lock",
        "text": [
          {
            "text": "Deine Bank-Daten sind sehr wichtig.",
            "pictogram": "pikto-data"
          },
          {
            "text": "PIN und TAN sind geheim.",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Deine Bank fragt nie per E-Mail oder Telefon danach.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Wer danach fragt, ist ein Betrüger.",
            "pictogram": "pikto-fraud"
          }
        ],
        "practice": {
          "question": "Eine E-Mail fragt nach deiner PIN. Was ist besser?",
          "answers": [
            "PIN eingeben.",
            "PIN niemals eingeben. Das ist Betrug."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Deine Bank fragt nie nach der PIN.",
          "feedbackCorrect": "Das ist richtig. Die Bank fragt nie nach PIN oder TAN.",
          "remember": "PIN und TAN bleiben geheim."
        },
        "pictogram": "pikto-shop"
      },
      {
        "title": "Versteckte Kosten in Apps und Spielen",
        "module": "Achtung",
        "icon": "report",
        "text": [
          {
            "text": "Viele Spiele sind erst kostenlos.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Im Spiel kannst du dann Dinge kaufen.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Das kostet echtes Geld.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Viele kleine Käufe werden schnell teuer.",
            "pictogram": "pikto-no"
          }
        ],
        "examples": [
          "Ein Spiel verkauft Extra-Leben für 2 Euro.",
          "Eine App verkauft Münzen für 5 Euro."
        ],
        "remember": "Auch kleine Käufe kosten echtes Geld.",
        "pictogram": "pikto-no"
      },
      {
        "title": "Kauf-Druck widerstehen",
        "module": "Achtung",
        "icon": "stop",
        "text": [
          {
            "text": "Shops machen oft Druck.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Zum Beispiel: Nur noch heute! Nur noch 2 Stück!",
            "pictogram": "pikto-no"
          },
          {
            "text": "Das soll dich zum schnellen Kaufen bringen.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Du darfst dir Zeit nehmen.",
            "pictogram": "pikto-no"
          }
        ],
        "practice": {
          "question": "Ein Angebot sagt: Nur noch 10 Minuten! Was ist besser?",
          "answers": [
            "Schnell kaufen.",
            "Ruhig bleiben und in Ruhe überlegen."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist noch nicht richtig. Zeit-Druck ist ein Verkaufs-Trick.",
          "feedbackCorrect": "Das ist richtig. Du darfst dir Zeit nehmen. Gute Angebote gibt es wieder.",
          "remember": "Ich lasse mich beim Einkaufen nicht hetzen."
        },
        "pictogram": "pikto-no"
      },
      {
        "title": "Vor dem Kaufen prüfen",
        "module": "Einkaufen",
        "icon": "understand",
        "text": [
          {
            "text": "Prüfe vor dem letzten Klick.",
            "pictogram": "pikto-link"
          },
          {
            "text": "Diese Fragen helfen dir.",
            "pictogram": "pikto-ask"
          }
        ],
        "bullets": [
          {
            "text": "Was kostet es wirklich? Mit Versand?",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Ist es ein Abo oder ein einmaliger Kauf?",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Brauche ich das wirklich?",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Habe ich genug Geld dafür?",
            "pictogram": "pikto-shop"
          }
        ],
        "remember": "Erst prüfen. Dann kaufen.",
        "pictogram": "pikto-shop"
      },
      {
        "title": "Falsch gekauft? Das kannst du tun",
        "module": "Hilfe",
        "icon": "help",
        "text": [
          {
            "text": "Ein Fehl-Kauf kann passieren.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Oft kannst du etwas tun.",
            "pictogram": "pikto-help"
          }
        ],
        "bullets": [
          {
            "text": "Viele Online-Käufe kannst du 14 Tage zurückgeben. Das heißt Widerruf.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Schreib dem Shop eine Nachricht.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Frag eine Person, der du vertraust, um Hilfe.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Bei Betrug: Ruf deine Bank an.",
            "pictogram": "pikto-fraud"
          }
        ],
        "remember": "Online-Käufe kann ich oft 14 Tage zurückgeben.",
        "pictogram": "pikto-help"
      },
      {
        "title": "Was kann ich tun?",
        "module": "Hilfe",
        "icon": "check",
        "text": [
          {
            "text": "Du kannst sicher im Internet einkaufen.",
            "pictogram": "pikto-link"
          },
          {
            "text": "Diese Regeln helfen dir.",
            "pictogram": "pikto-help"
          }
        ],
        "bullets": [
          {
            "text": "Ich kaufe bei Shops, die ich kenne.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Ich prüfe Preis und Impressum.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Ich zahle möglichst auf Rechnung.",
            "pictogram": "pikto-help"
          },
          {
            "text": "PIN und TAN bleiben geheim.",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Ich lasse mich nicht hetzen.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Vor dem Kaufen kann ich eine Person fragen.",
            "pictogram": "pikto-shop"
          }
        ],
        "pictogram": "pikto-help"
      },
      {
        "title": "Das merke ich mir",
        "module": "Merken",
        "icon": "remember",
        "text": [
          {
            "text": "Du hast viel über sicheres Einkaufen gelernt.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Diese Sätze kannst du dir merken.",
            "pictogram": "pikto-done"
          }
        ],
        "bullets": [
          {
            "text": "Sehr billig und nur Vorkasse: Warnzeichen.",
            "pictogram": "pikto-done"
          },
          {
            "text": "Rechnung ist sicherer als Vorkasse.",
            "pictogram": "pikto-done"
          },
          {
            "text": "PIN und TAN bleiben geheim.",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Ich lasse mich nicht hetzen.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Ich darf mir Unterstützung holen.",
            "pictogram": "pikto-help"
          }
        ],
        "remember": "Erst prüfen. Dann kaufen.",
        "pictogram": "pikto-done"
      }
    ],
    "quizQuestions": [
      {
        "question": "Was ist ein Fake-Shop?",
        "answers": [
          "Ein falscher Shop. Die Ware kommt nie.",
          "Ein Shop mit guten Angeboten."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Im Fake-Shop bezahlst du, bekommst aber nichts.",
        "feedbackWrong": "Das ist noch nicht richtig. Ein Fake-Shop ist ein Betrugs-Shop."
      },
      {
        "question": "Ein Shop ist extrem billig und will nur Vorkasse. Was ist das?",
        "answers": [
          "Ein Warnzeichen für einen Fake-Shop.",
          "Ein super Angebot."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das sind typische Warnzeichen.",
        "feedbackWrong": "Das ist noch nicht richtig. Extrem billig plus Vorkasse ist verdächtig."
      },
      {
        "question": "Welche Bezahl-Art ist sicherer?",
        "answers": [
          "Kauf auf Rechnung.",
          "Vorkasse an Fremde."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Bei Rechnung zahlst du erst, wenn die Ware da ist.",
        "feedbackWrong": "Das ist noch nicht richtig. Bei Vorkasse ist dein Geld zuerst weg."
      },
      {
        "question": "Deine Bank schreibt eine E-Mail und will deine PIN. Was stimmt?",
        "answers": [
          "Das ist Betrug. Die Bank fragt nie nach der PIN.",
          "Das ist normal."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Banken fragen nie nach PIN oder TAN.",
        "feedbackWrong": "Das ist noch nicht richtig. Die Bank fragt nie nach der PIN. Das ist Betrug."
      },
      {
        "question": "Ein Angebot sagt: Nur noch heute! Was machst du?",
        "answers": [
          "Ruhig bleiben und überlegen.",
          "Sofort kaufen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Zeit-Druck ist ein Verkaufs-Trick.",
        "feedbackWrong": "Das ist noch nicht richtig. Du darfst dir Zeit nehmen."
      },
      {
        "question": "Was prüfst du vor dem Kaufen?",
        "answers": [
          "Preis, Versand-Kosten und ob es ein Abo ist.",
          "Nur das Bild."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Du prüfst die echten Kosten.",
        "feedbackWrong": "Das ist noch nicht richtig. Wichtig sind Preis, Versand und Abo-Fragen."
      },
      {
        "question": "Du hast etwas Falsches bestellt. Was kannst du oft tun?",
        "answers": [
          "14 Tage zurückgeben. Das heißt Widerruf.",
          "Nichts. Pech gehabt."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Online-Käufe kannst du oft 14 Tage zurückgeben.",
        "feedbackWrong": "Das ist noch nicht richtig. Du hast oft 14 Tage Widerrufs-Recht."
      },
      {
        "question": "Kosten kleine Käufe in Spielen echtes Geld?",
        "answers": [
          "Ja, und viele kleine Käufe werden teuer.",
          "Nein, das ist Spiel-Geld."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. In-App-Käufe kosten echtes Geld.",
        "feedbackWrong": "Das ist noch nicht richtig. Käufe in Apps kosten echtes Geld."
      }
    ],
    "helpQuestions": [
      "Kenne ich diesen Shop?",
      "Ist der Preis verdächtig billig?",
      "Kann ich auf Rechnung zahlen?",
      "Ist das ein Abo?",
      "Brauche ich Unterstützung?"
    ],
    "memoryRules": [
      "Ich kaufe bei Shops, die ich kenne.",
      "Sehr billig und nur Vorkasse: Warnzeichen.",
      "Rechnung ist sicherer als Vorkasse.",
      "PIN und TAN bleiben geheim.",
      "Ich lasse mich nicht hetzen.",
      "Online-Käufe kann ich oft 14 Tage zurückgeben.",
      "Ich darf mir Unterstützung holen."
    ],
    "shortLessonIndexes": [
      0,
      2,
      3,
      4,
      6,
      9,
      10
    ],
    "einfachLessons": [
      {
        "title": "Einkaufen im Internet",
        "module": "Einfach",
        "pictogram": "pikto-shop",
        "icon": "einkaufen",
        "text": [
          "Du kannst im Internet einkaufen.",
          "Das heißt Online-Shopping.",
          "Du suchst etwas aus.",
          "Du bezahlst.",
          "Die Ware kommt nach Hause."
        ],
        "remember": "Nur bei sicheren Shops einkaufen."
      },
      {
        "title": "Gute Shops erkennen",
        "module": "Einfach",
        "pictogram": "pikto-shop",
        "icon": "check",
        "text": [
          "Du siehst ein Schloss in der Adresszeile.",
          "Die Adresse beginnt mit https.",
          "Du findest eine Adresse des Shops.",
          "Diese Zeichen sind gut.",
          "Bei Unsicherheit fragst du eine vertraute Person."
        ],
        "remember": "Schloss und https: gute Zeichen."
      },
      {
        "title": "Sicher bezahlen",
        "module": "Einfach",
        "pictogram": "pikto-shop",
        "icon": "einkaufen",
        "text": [
          "Du bezahlst mit PayPal.",
          "Oder du bezahlst auf Rechnung.",
          "Das ist sicherer.",
          "Du gibst deine Kreditkarte nicht überall ein.",
          "Bei Problemen fragst du eine vertraute Person."
        ],
        "remember": "PayPal oder Rechnung ist sicherer."
      }
    ],
    "miniQuestion": {
      "question": "Welche Bezahl-Art ist sicherer?",
      "answers": [
        "Kauf auf Rechnung",
        "Vorkasse an Fremde",
        "Bargeld per Post"
      ],
      "correct": 0,
      "explanation": "Bei Rechnung zahlst du erst, wenn die Ware da ist. Das ist sicherer."
    }
  }
];
