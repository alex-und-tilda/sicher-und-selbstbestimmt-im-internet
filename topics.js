const topics = [
  {
    "id": "datenschutz",
    "title": "Datenschutz",
    "icon": "lock",
    "desc": "Private Daten schützen",
    "quiz": [
      {
        "question": "Was ist eine private Information?",
        "answers": [
          "Das Wetter.",
          "Meine Adresse."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was machst du mit deinem Passwort?",
        "answers": [
          "Ich gebe es weiter.",
          "Ich behalte es für mich."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine App fragt nach deiner Adresse. Du weißt nicht warum. Was ist besser?",
        "answers": [
          "Adresse eintragen.",
          "Adresse nicht eintragen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du willst ein Foto senden. Was machst du zuerst?",
        "answers": [
          "Foto prüfen.",
          "Sofort senden."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine Nachricht macht Druck. Was ist besser?",
        "answers": [
          "Schnell klicken.",
          "Langsam machen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was gehört nicht in eine öffentliche Nachricht?",
        "answers": [
          "Meine Telefonnummer.",
          "Ein Gruß."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum ist ein Passwort wichtig?",
        "answers": [
          "Es schützt mein Konto.",
          "Es ist für alle da."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du bist unsicher. Was hilft?",
        "answers": [
          "Raten.",
          "Hilfe-Button nutzen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Wer darf dein Passwort kennen?",
        "answers": [
          "Nur ich.",
          "Alle in der Gruppe."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist eine gute Regel?",
        "answers": [
          "Erst prüfen.",
          "Immer sofort klicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "lock",
        "text": [
          "Hier lernst du: Was sind private Daten?",
          "Du lernst: Welche Daten soll ich schützen?",
          "Du lernst: Wann muss ich vorsichtig sein?"
        ]
      },
      {
        "title": "Private Daten",
        "module": "Datenschutz",
        "icon": "data",
        "text": [
          "Private Daten gehören zu dir.",
          "Andere Menschen sollen diese Daten nicht einfach bekommen.",
          "Manche Daten sagen viel über dich."
        ],
        "remember": "Private Daten gehören zu mir.",
        "bullets": [
          "dein Name",
          "deine Adresse",
          "deine Telefon-Nummer",
          "dein Geburtstag",
          "dein Passwort",
          "deine Fotos"
        ]
      },
      {
        "title": "Passwort",
        "module": "Datenschutz",
        "icon": "lock",
        "text": [
          "Ein Passwort schützt dein Konto.",
          "Ein Passwort ist wie ein Schlüssel.",
          "Andere Menschen dürfen dein Passwort nicht benutzen."
        ],
        "remember": "Mein Passwort bleibt geheim.",
        "warning": "Gib dein Passwort nicht weiter."
      },
      {
        "title": "Adresse eingeben",
        "module": "Datenschutz",
        "icon": "data",
        "text": [
          "Eine App fragt nach deiner Adresse.",
          "Du weißt nicht warum.",
          "Dann musst du nicht sofort etwas eintragen."
        ],
        "remember": "Ich trage private Daten nicht einfach ein.",
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
          "correctIndex": 1
        }
      },
      {
        "title": "Fotos prüfen",
        "module": "Datenschutz",
        "icon": "photo",
        "text": [
          "Du willst ein Foto verschicken.",
          "Auf dem Foto sieht man vielleicht private Dinge.",
          "Zum Beispiel: dein Zimmer oder einen Brief."
        ],
        "remember": "Ich prüfe Fotos vor dem Senden.",
        "examples": [
          "Auf dem Foto liegt ein Brief.",
          "Im Hintergrund sieht man eine andere Person."
        ],
        "practice": {
          "question": "Auf dem Foto sieht man einen Brief mit Adresse. Was ist besser?",
          "answers": [
            "Ich schicke das Foto sofort.",
            "Ich schicke das Foto nicht so weiter."
          ],
          "correctIndex": 1
        }
      },
      {
        "title": "Komische Nachrichten",
        "module": "Datenschutz",
        "icon": "message",
        "text": [
          "Manche Nachrichten wollen private Daten bekommen.",
          "Die Nachricht macht vielleicht Druck.",
          "Dann ist Vorsicht wichtig."
        ],
        "remember": "Ich mache langsam, wenn eine Nachricht komisch ist.",
        "practice": {
          "question": "Eine Nachricht sagt: Gib deine Adresse ein. Was ist besser?",
          "answers": [
            "Ich gebe die Adresse ein.",
            "Ich gebe die Adresse nicht ein."
          ],
          "correctIndex": 1
        }
      },
      {
        "title": "Wenn ich unsicher bin",
        "module": "Datenschutz",
        "icon": "help",
        "text": [
          "Du musst nicht raten.",
          "Du kannst die Frage noch einmal lesen.",
          "Du kannst den Hilfe-Button nutzen."
        ],
        "remember": "Ich darf mir Unterstützung holen."
      },
      {
        "title": "Das merke ich mir",
        "module": "Datenschutz",
        "icon": "remember",
        "text": [
          "Diese Regeln helfen dir."
        ],
        "bullets": [
          "Mein Passwort bleibt geheim.",
          "Ich gebe private Daten nicht einfach ein.",
          "Ich prüfe Fotos.",
          "Ich mache langsam bei komischen Nachrichten."
        ]
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
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was machst du mit deinem Passwort?",
        "answers": [
          "Ich gebe es weiter.",
          "Ich behalte es für mich."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine App fragt nach deiner Adresse. Du weißt nicht warum. Was ist besser?",
        "answers": [
          "Adresse eintragen.",
          "Adresse nicht eintragen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du willst ein Foto senden. Was machst du zuerst?",
        "answers": [
          "Foto prüfen.",
          "Sofort senden."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine Nachricht macht Druck. Was ist besser?",
        "answers": [
          "Schnell klicken.",
          "Langsam machen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was gehört nicht in eine öffentliche Nachricht?",
        "answers": [
          "Meine Telefonnummer.",
          "Ein Gruß."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum ist ein Passwort wichtig?",
        "answers": [
          "Es schützt mein Konto.",
          "Es ist für alle da."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du bist unsicher. Was hilft?",
        "answers": [
          "Raten.",
          "Hilfe-Button nutzen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Wer darf dein Passwort kennen?",
        "answers": [
          "Nur ich.",
          "Alle in der Gruppe."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist eine gute Regel?",
        "answers": [
          "Erst prüfen.",
          "Immer sofort klicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
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
      "Brauche ich Hilfe bei der Entscheidung?"
    ],
    "memoryRules": [
      "Mein Passwort bleibt geheim.",
      "Ich gebe private Daten nicht einfach ein.",
      "Ich prüfe Fotos vor dem Senden.",
      "Ich mache langsam bei komischen Nachrichten."
    ],
    "shortLessonIndexes": [
      0,
      1,
      3,
      5,
      7
    ],
    "qrLink": "index.html#datenschutz",
    "qrShortLink": "index.html#datenschutz:kurz",
    "qrQuizLink": "index.html#datenschutz:quiz",
    "qrMemoryLink": "index.html#datenschutz:merk",
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
    "desc": "Nachrichten sicher nutzen",
    "quiz": [
      {
        "question": "Eine fremde Nummer schreibt dir. Was ist besser?",
        "answers": [
          "Sofort private Daten schicken.",
          "Nicht sofort antworten."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Jemand fragt nach deinem WhatsApp-Code. Was ist besser?",
        "answers": [
          "Code schicken.",
          "Code nicht schicken."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein unbekannter Link kommt an. Was ist besser?",
        "answers": [
          "Link öffnen.",
          "Link nicht öffnen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist bei Gruppen wichtig?",
        "answers": [
          "Viele können mitlesen.",
          "Nur ich kann es sehen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du willst ein Foto von einer Person senden. Was ist besser?",
        "answers": [
          "Erst fragen.",
          "Einfach senden."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine Nachricht macht dir Stress. Was ist besser?",
        "answers": [
          "Pause machen.",
          "Sofort antworten."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was kannst du mit einer stressigen Gruppe machen?",
        "answers": [
          "Stumm schalten.",
          "Immer sofort antworten."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist mit Sprachnachrichten wichtig?",
        "answers": [
          "Vorher überlegen.",
          "Alles sagen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine Nachricht sagt: sofort bezahlen. Was ist besser?",
        "answers": [
          "Nicht sofort handeln.",
          "Sofort bezahlen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was hilft bei WhatsApp?",
        "answers": [
          "Langsam prüfen.",
          "Schnell klicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "message",
        "text": [
          "Hier lernst du: Wie nutze ich WhatsApp sicher?",
          "Du lernst etwas über fremde Nummern.",
          "Du lernst etwas über Links und Codes."
        ]
      },
      {
        "title": "WhatsApp nutzen",
        "module": "WhatsApp",
        "icon": "message",
        "text": [
          "Mit WhatsApp kannst du Nachrichten schreiben.",
          "Du kannst Bilder senden.",
          "Du kannst in Gruppen schreiben."
        ],
        "remember": "Ich entscheide, wem ich antworte."
      },
      {
        "title": "Fremde Nummer",
        "module": "WhatsApp",
        "icon": "warning",
        "text": [
          "Eine fremde Nummer schreibt dir.",
          "Du weißt nicht, wer das ist.",
          "Dann antwortest du nicht sofort."
        ],
        "remember": "Bei fremden Nummern mache ich langsam.",
        "examples": [
          "Hallo. Ich habe eine neue Nummer.",
          "Schick mir bitte Geld."
        ],
        "practice": {
          "question": "Eine fremde Nummer fragt nach Geld. Was ist besser?",
          "answers": [
            "Ich schicke Geld.",
            "Ich schicke kein Geld."
          ],
          "correctIndex": 1
        }
      },
      {
        "title": "Links",
        "module": "WhatsApp",
        "icon": "link",
        "text": [
          "Ein Link führt zu einer Internet-Seite.",
          "Manche Links sind gefährlich.",
          "Du klickst nicht sofort auf unbekannte Links."
        ],
        "remember": "Ich klicke nicht sofort auf unbekannte Links.",
        "practice": {
          "question": "Eine fremde Nummer schickt einen Link. Was ist besser?",
          "answers": [
            "Ich öffne den Link.",
            "Ich öffne den Link nicht."
          ],
          "correctIndex": 1
        }
      },
      {
        "title": "WhatsApp-Code",
        "module": "WhatsApp",
        "icon": "lock",
        "text": [
          "Du bekommst manchmal einen Code per SMS.",
          "Der Code schützt dein WhatsApp.",
          "Du gibst den Code nicht weiter."
        ],
        "remember": "Ich gebe meinen WhatsApp-Code nicht weiter.",
        "practice": {
          "question": "Jemand fragt nach deinem WhatsApp-Code. Was ist besser?",
          "answers": [
            "Ich schicke den Code.",
            "Ich schicke den Code nicht."
          ],
          "correctIndex": 1
        }
      },
      {
        "title": "Gruppen",
        "module": "WhatsApp",
        "icon": "message",
        "text": [
          "In Gruppen lesen viele Menschen mit.",
          "Nicht alles gehört in eine Gruppe.",
          "Private Dinge schreibst du nicht in eine Gruppe."
        ],
        "remember": "In Gruppen schreibe ich nur, was alle sehen dürfen."
      },
      {
        "title": "Fotos senden",
        "module": "WhatsApp",
        "icon": "photo",
        "text": [
          "Ein Foto kann weitergeschickt werden.",
          "Ein Foto kann privat sein.",
          "Frage vorher, wenn andere Menschen auf dem Foto sind."
        ],
        "remember": "Ich prüfe Fotos vor dem Senden."
      },
      {
        "title": "Das merke ich mir",
        "module": "WhatsApp",
        "icon": "remember",
        "text": [
          "Diese Regeln helfen bei WhatsApp."
        ],
        "bullets": [
          "Fremde Nummern prüfen.",
          "Unbekannte Links nicht öffnen.",
          "Codes nicht weitergeben.",
          "Fotos prüfen."
        ]
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
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Jemand fragt nach deinem WhatsApp-Code. Was ist besser?",
        "answers": [
          "Code schicken.",
          "Code nicht schicken."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein unbekannter Link kommt an. Was ist besser?",
        "answers": [
          "Link öffnen.",
          "Link nicht öffnen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist bei Gruppen wichtig?",
        "answers": [
          "Viele können mitlesen.",
          "Nur ich kann es sehen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du willst ein Foto von einer Person senden. Was ist besser?",
        "answers": [
          "Erst fragen.",
          "Einfach senden."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine Nachricht macht dir Stress. Was ist besser?",
        "answers": [
          "Pause machen.",
          "Sofort antworten."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was kannst du mit einer stressigen Gruppe machen?",
        "answers": [
          "Stumm schalten.",
          "Immer sofort antworten."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist mit Sprachnachrichten wichtig?",
        "answers": [
          "Vorher überlegen.",
          "Alles sagen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine Nachricht sagt: sofort bezahlen. Was ist besser?",
        "answers": [
          "Nicht sofort handeln.",
          "Sofort bezahlen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was hilft bei WhatsApp?",
        "answers": [
          "Langsam prüfen.",
          "Schnell klicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
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
      "Ist der Link sicher?"
    ],
    "memoryRules": [
      "Ich öffne unbekannte Links nicht sofort.",
      "Ich gebe keinen WhatsApp-Code weiter.",
      "Ich prüfe fremde Nummern.",
      "Ich prüfe Fotos vor dem Senden."
    ],
    "shortLessonIndexes": [
      0,
      2,
      3,
      4,
      7
    ],
    "qrLink": "index.html#whatsapp",
    "qrShortLink": "index.html#whatsapp:kurz",
    "qrQuizLink": "index.html#whatsapp:quiz",
    "qrMemoryLink": "index.html#whatsapp:merk",
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
    "desc": "Beiträge und Kontakte prüfen",
    "quiz": [
      {
        "question": "Was prüfst du vor einem Beitrag?",
        "answers": [
          "Wer kann das sehen?",
          "Wie schnell kann ich posten?"
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine unbekannte Person sendet eine Anfrage. Was ist besser?",
        "answers": [
          "Sofort annehmen.",
          "Erst prüfen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist bei Kommentaren wichtig?",
        "answers": [
          "Respektvoll schreiben.",
          "Andere beleidigen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was kann privat sein?",
        "answers": [
          "Telefon-Nummer.",
          "Ein Gruß."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du wirst beleidigt. Was ist besser?",
        "answers": [
          "Zurück beleidigen.",
          "Unterstützung holen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was bedeutet: Wer darf etwas sehen?",
        "answers": [
          "Ich prüfe die Sichtbarkeit.",
          "Alle sehen immer alles."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Foto zeigt andere Menschen. Was ist besser?",
        "answers": [
          "Erst fragen.",
          "Einfach posten."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum sind alte Beiträge wichtig?",
        "answers": [
          "Sie können später noch gesehen werden.",
          "Sie verschwinden immer."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist gut im Profil?",
        "answers": [
          "Nur nötige Informationen.",
          "Passwort öffentlich schreiben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist eine gute Regel?",
        "answers": [
          "Erst prüfen. Dann posten.",
          "Immer alles teilen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "message",
        "text": [
          "Hier lernst du: Was kann man auf Facebook sehen?",
          "Du lernst etwas über Beiträge.",
          "Du lernst etwas über Freundschafts-Anfragen."
        ]
      },
      {
        "title": "Profil",
        "module": "Facebook",
        "icon": "data",
        "text": [
          "Im Profil stehen Informationen über dich.",
          "Nicht alles muss dort stehen.",
          "Private Informationen sollen nicht öffentlich sein."
        ],
        "remember": "Ich zeige nicht alles in meinem Profil.",
        "bullets": [
          "Adresse",
          "Telefon-Nummer",
          "Geburtstag",
          "Fotos"
        ]
      },
      {
        "title": "Beitrag schreiben",
        "module": "Facebook",
        "icon": "message",
        "text": [
          "Du willst etwas schreiben.",
          "Viele Menschen können den Beitrag sehen.",
          "Darum prüfst du vorher, was du schreibst."
        ],
        "remember": "Ich prüfe einen Beitrag vor dem Posten.",
        "practice": {
          "question": "Du willst deine Adresse posten. Was ist besser?",
          "answers": [
            "Ich poste die Adresse.",
            "Ich poste die Adresse nicht."
          ],
          "correctIndex": 1
        }
      },
      {
        "title": "Kommentare",
        "module": "Facebook",
        "icon": "message",
        "text": [
          "Kommentare können andere Menschen verletzen.",
          "Du musst nicht auf alles antworten.",
          "Freundlich bleiben ist wichtig."
        ],
        "remember": "Ich schreibe respektvoll."
      },
      {
        "title": "Freundschafts-Anfrage",
        "module": "Facebook",
        "icon": "help",
        "text": [
          "Eine unbekannte Person sendet eine Anfrage.",
          "Du weißt nicht, wer das ist.",
          "Du musst die Anfrage nicht annehmen."
        ],
        "remember": "Ich nehme nicht jede Anfrage an.",
        "practice": {
          "question": "Eine unbekannte Person sendet eine Anfrage. Was ist besser?",
          "answers": [
            "Ich nehme sie sofort an.",
            "Ich prüfe die Anfrage."
          ],
          "correctIndex": 1
        }
      },
      {
        "title": "Wer darf etwas sehen?",
        "module": "Facebook",
        "icon": "lock",
        "text": [
          "Du kannst einstellen, wer etwas sehen darf.",
          "Das nennt man private Einstellungen.",
          "Du kannst Hilfe bei den Einstellungen nutzen."
        ],
        "remember": "Ich prüfe, wer meine Beiträge sehen darf."
      },
      {
        "title": "Beleidigungen",
        "module": "Facebook",
        "icon": "warning",
        "text": [
          "Im Internet kann es Streit geben.",
          "Beleidigungen sind nicht in Ordnung.",
          "Du musst nicht zurück beleidigen."
        ],
        "remember": "Ich bleibe nicht allein, wenn mich etwas verletzt."
      },
      {
        "title": "Das merke ich mir",
        "module": "Facebook",
        "icon": "remember",
        "text": [
          "Diese Regeln helfen bei Facebook."
        ],
        "bullets": [
          "Nicht alles öffentlich machen.",
          "Anfragen prüfen.",
          "Respektvoll schreiben.",
          "Bei Beleidigungen Hilfe holen."
        ]
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
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine unbekannte Person sendet eine Anfrage. Was ist besser?",
        "answers": [
          "Sofort annehmen.",
          "Erst prüfen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist bei Kommentaren wichtig?",
        "answers": [
          "Respektvoll schreiben.",
          "Andere beleidigen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was kann privat sein?",
        "answers": [
          "Telefon-Nummer.",
          "Ein Gruß."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du wirst beleidigt. Was ist besser?",
        "answers": [
          "Zurück beleidigen.",
          "Unterstützung holen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was bedeutet: Wer darf etwas sehen?",
        "answers": [
          "Ich prüfe die Sichtbarkeit.",
          "Alle sehen immer alles."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Foto zeigt andere Menschen. Was ist besser?",
        "answers": [
          "Erst fragen.",
          "Einfach posten."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum sind alte Beiträge wichtig?",
        "answers": [
          "Sie können später noch gesehen werden.",
          "Sie verschwinden immer."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist gut im Profil?",
        "answers": [
          "Nur nötige Informationen.",
          "Passwort öffentlich schreiben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist eine gute Regel?",
        "answers": [
          "Erst prüfen. Dann posten.",
          "Immer alles teilen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
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
      "Ist der Beitrag privat?"
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
      3,
      4,
      7
    ],
    "qrLink": "index.html#facebook",
    "qrShortLink": "index.html#facebook:kurz",
    "qrQuizLink": "index.html#facebook:quiz",
    "qrMemoryLink": "index.html#facebook:merk",
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
    "desc": "Fotos und Nachrichten prüfen",
    "quiz": [
      {
        "question": "Was prüfst du vor dem Posten eines Fotos?",
        "answers": [
          "Was zu sehen ist.",
          "Nur die Farbe."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum ist der Standort wichtig?",
        "answers": [
          "Er zeigt, wo ich bin.",
          "Er ist immer egal."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine fremde Person fragt nach privaten Fotos. Was ist besser?",
        "answers": [
          "Fotos schicken.",
          "Keine Fotos schicken."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was können Menschen bei kurzen Videos machen?",
        "answers": [
          "Ein Bild vom Bildschirm machen.",
          "Nichts speichern."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Kommentar verletzt dich. Was ist besser?",
        "answers": [
          "Unterstützung holen.",
          "Zurück beleidigen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum sind bearbeitete Bilder wichtig?",
        "answers": [
          "Nicht alles ist echt.",
          "Alles ist immer echt."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist eine gute Regel?",
        "answers": [
          "Erst prüfen. Dann teilen.",
          "Immer sofort posten."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Wer darf private Fotos bekommen?",
        "answers": [
          "Nicht fremde Personen.",
          "Alle fremden Personen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du bist unsicher bei einem Profil. Was hilft?",
        "answers": [
          "Hilfe-Button nutzen.",
          "Private Daten schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist bei Instagram wichtig?",
        "answers": [
          "Private Dinge schützen.",
          "Alles öffentlich machen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "photo",
        "text": [
          "Hier lernst du: Wie teile ich Fotos sicher?",
          "Du lernst etwas über Nachrichten.",
          "Du lernst etwas über deinen Standort."
        ]
      },
      {
        "title": "Foto posten",
        "module": "Instagram",
        "icon": "photo",
        "text": [
          "Du willst ein Foto posten.",
          "Andere Menschen können das Foto sehen.",
          "Manchmal sieht man mehr, als man denkt."
        ],
        "remember": "Ich prüfe Fotos vor dem Posten.",
        "practice": {
          "question": "Im Hintergrund sieht man eine andere Person. Was ist besser?",
          "answers": [
            "Ich poste das Foto einfach.",
            "Ich frage erst oder nehme ein anderes Foto."
          ],
          "correctIndex": 1
        }
      },
      {
        "title": "Kurze Videos",
        "module": "Instagram",
        "icon": "help",
        "text": [
          "Kurze Videos können viele Menschen sehen.",
          "Andere können ein Bild vom Bildschirm machen.",
          "Darum prüfst du auch kurze Videos."
        ],
        "remember": "Auch kurze Videos können privat sein."
      },
      {
        "title": "Standort",
        "module": "Instagram",
        "icon": "data",
        "text": [
          "Der Standort zeigt, wo du bist.",
          "Nicht jeder muss wissen, wo du bist.",
          "Du teilst deinen Standort nicht einfach."
        ],
        "remember": "Ich schütze meinen Standort.",
        "practice": {
          "question": "Eine App will deinen Standort zeigen. Was ist besser?",
          "answers": [
            "Ich teile den Standort immer.",
            "Ich teile den Standort nicht einfach."
          ],
          "correctIndex": 1
        }
      },
      {
        "title": "Private Nachrichten",
        "module": "Instagram",
        "icon": "message",
        "text": [
          "Eine fremde Person schreibt dir privat.",
          "Die Person fragt vielleicht nach privaten Fotos.",
          "Das ist ein Warnzeichen."
        ],
        "remember": "Ich schicke fremden Personen keine privaten Fotos.",
        "practice": {
          "question": "Eine fremde Person fragt nach privaten Fotos. Was ist besser?",
          "answers": [
            "Ich schicke private Fotos.",
            "Ich schicke keine privaten Fotos."
          ],
          "correctIndex": 1
        }
      },
      {
        "title": "Kommentare",
        "module": "Instagram",
        "icon": "message",
        "text": [
          "Kommentare können nett sein.",
          "Kommentare können auch verletzen.",
          "Du musst nicht auf alles antworten."
        ],
        "remember": "Ich hole Unterstützung bei verletzenden Kommentaren."
      },
      {
        "title": "Vergleichen",
        "module": "Instagram",
        "icon": "help",
        "text": [
          "Auf Instagram sieht vieles perfekt aus.",
          "Bilder können bearbeitet sein.",
          "Nicht alles ist echt."
        ],
        "remember": "Ich muss mich nicht mit Bildern vergleichen."
      },
      {
        "title": "Das merke ich mir",
        "module": "Instagram",
        "icon": "remember",
        "text": [
          "Diese Regeln helfen bei Instagram."
        ],
        "bullets": [
          "Fotos prüfen.",
          "Standort schützen.",
          "Fremden nicht sofort antworten.",
          "Keine privaten Fotos an Fremde schicken."
        ]
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
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum ist der Standort wichtig?",
        "answers": [
          "Er zeigt, wo ich bin.",
          "Er ist immer egal."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine fremde Person fragt nach privaten Fotos. Was ist besser?",
        "answers": [
          "Fotos schicken.",
          "Keine Fotos schicken."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was können Menschen bei kurzen Videos machen?",
        "answers": [
          "Ein Bild vom Bildschirm machen.",
          "Nichts speichern."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Kommentar verletzt dich. Was ist besser?",
        "answers": [
          "Unterstützung holen.",
          "Zurück beleidigen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum sind bearbeitete Bilder wichtig?",
        "answers": [
          "Nicht alles ist echt.",
          "Alles ist immer echt."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist eine gute Regel?",
        "answers": [
          "Erst prüfen. Dann teilen.",
          "Immer sofort posten."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Wer darf private Fotos bekommen?",
        "answers": [
          "Nicht fremde Personen.",
          "Alle fremden Personen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du bist unsicher bei einem Profil. Was hilft?",
        "answers": [
          "Hilfe-Button nutzen.",
          "Private Daten schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist bei Instagram wichtig?",
        "answers": [
          "Private Dinge schützen.",
          "Alles öffentlich machen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      }
    ],
    "certificateGoals": [
      "Fotos bewusst posten",
      "Stories und Standort prüfen",
      "Nachrichten sicher einschätzen"
    ],
    "helpQuestions": [
      "Will ich wirklich, dass andere das sehen?",
      "Ist mein Standort sichtbar?",
      "Macht mir eine Nachricht Druck?"
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
      3,
      4,
      7
    ],
    "qrLink": "index.html#instagram",
    "qrShortLink": "index.html#instagram:kurz",
    "qrQuizLink": "index.html#instagram:quiz",
    "qrMemoryLink": "index.html#instagram:merk",
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
    "desc": "Videos und Werbung prüfen",
    "quiz": [
      {
        "question": "Was ist bei Videos wichtig?",
        "answers": [
          "Nicht alles sofort glauben.",
          "Alles glauben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was will Werbung oft?",
        "answers": [
          "Dass ich etwas kaufe.",
          "Dass ich Pause mache."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "YouTube startet immer weiter. Was ist besser?",
        "answers": [
          "Pause machen.",
          "Immer weiter schauen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine Mutprobe ist gefährlich. Was ist besser?",
        "answers": [
          "Nicht nachmachen.",
          "Nachmachen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Kommentare verletzen dich. Was ist besser?",
        "answers": [
          "Unterstützung holen.",
          "Zurück beleidigen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Wofür kann YouTube gut sein?",
        "answers": [
          "Lernen und Hobbys.",
          "Passwort teilen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Video macht Angst. Was ist besser?",
        "answers": [
          "Stoppen.",
          "Immer weiter schauen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist eine gute Regel?",
        "answers": [
          "Prüfen und Pause machen.",
          "Alles anklicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Video will, dass du sofort kaufst. Was ist besser?",
        "answers": [
          "Erst prüfen.",
          "Sofort kaufen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum sind Pausen wichtig?",
        "answers": [
          "Damit es mir gut geht.",
          "Damit Videos schneller werden."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "help",
        "text": [
          "Hier lernst du: Wie prüfe ich Videos?",
          "Du lernst etwas über Werbung.",
          "Du lernst etwas über Pausen."
        ]
      },
      {
        "title": "Videos prüfen",
        "module": "YouTube",
        "icon": "help",
        "text": [
          "Nicht jedes Video ist wahr.",
          "Manche Videos übertreiben.",
          "Du glaubst nicht alles sofort."
        ],
        "remember": "Ich glaube nicht alles sofort."
      },
      {
        "title": "Werbung",
        "module": "YouTube",
        "icon": "warning",
        "text": [
          "Werbung will, dass du etwas kaufst.",
          "Manchmal sieht Werbung wie ein normales Video aus.",
          "Du kaufst nicht sofort."
        ],
        "remember": "Ich kaufe nichts sofort aus einem Video.",
        "practice": {
          "question": "Ein Video sagt: Kauf das sofort. Was ist besser?",
          "answers": [
            "Ich kaufe sofort.",
            "Ich kaufe nicht sofort."
          ],
          "correctIndex": 1
        }
      },
      {
        "title": "Kommentare",
        "module": "YouTube",
        "icon": "message",
        "text": [
          "Kommentare können nett sein.",
          "Kommentare können auch verletzen.",
          "Du musst Kommentare nicht lesen."
        ],
        "remember": "Ich muss nicht auf Kommentare antworten."
      },
      {
        "title": "Automatisch weiter",
        "module": "YouTube",
        "icon": "stop",
        "text": [
          "YouTube startet manchmal automatisch das nächste Video.",
          "Dann schaut man oft länger.",
          "Du darfst stoppen und Pause machen."
        ],
        "remember": "Ich darf Pause machen.",
        "practice": {
          "question": "YouTube startet immer weiter. Du bist müde. Was ist besser?",
          "answers": [
            "Ich schaue immer weiter.",
            "Ich stoppe und mache Pause."
          ],
          "correctIndex": 1
        }
      },
      {
        "title": "Gefährliche Mutproben",
        "module": "YouTube",
        "icon": "warning",
        "text": [
          "Manche Videos zeigen gefährliche Mutproben.",
          "Du musst das nicht nachmachen.",
          "Deine Sicherheit ist wichtiger."
        ],
        "remember": "Ich mache gefährliche Dinge nicht nach."
      },
      {
        "title": "Gute Videos",
        "module": "YouTube",
        "icon": "check",
        "text": [
          "YouTube kann auch hilfreich sein.",
          "Zum Beispiel für Musik, Rezepte oder Hobbys.",
          "Du entscheidest, was dir gut tut."
        ],
        "remember": "Ich nutze YouTube so, dass es mir gut tut."
      },
      {
        "title": "Das merke ich mir",
        "module": "YouTube",
        "icon": "remember",
        "text": [
          "Diese Regeln helfen bei YouTube."
        ],
        "bullets": [
          "Videos prüfen.",
          "Werbung erkennen.",
          "Pausen machen.",
          "Gefährliche Dinge nicht nachmachen."
        ]
      }
    ],
    "illustration": "assets/illustrations/youtube.svg",
    "quizQuestions": [
      {
        "question": "Was ist bei Videos wichtig?",
        "answers": [
          "Nicht alles sofort glauben.",
          "Alles glauben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was will Werbung oft?",
        "answers": [
          "Dass ich etwas kaufe.",
          "Dass ich Pause mache."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "YouTube startet immer weiter. Was ist besser?",
        "answers": [
          "Pause machen.",
          "Immer weiter schauen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine Mutprobe ist gefährlich. Was ist besser?",
        "answers": [
          "Nicht nachmachen.",
          "Nachmachen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Kommentare verletzen dich. Was ist besser?",
        "answers": [
          "Unterstützung holen.",
          "Zurück beleidigen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Wofür kann YouTube gut sein?",
        "answers": [
          "Lernen und Hobbys.",
          "Passwort teilen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Video macht Angst. Was ist besser?",
        "answers": [
          "Stoppen.",
          "Immer weiter schauen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist eine gute Regel?",
        "answers": [
          "Prüfen und Pause machen.",
          "Alles anklicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Video will, dass du sofort kaufst. Was ist besser?",
        "answers": [
          "Erst prüfen.",
          "Sofort kaufen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum sind Pausen wichtig?",
        "answers": [
          "Damit es mir gut geht.",
          "Damit Videos schneller werden."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
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
      "Tut mir das Video gut?"
    ],
    "memoryRules": [
      "Ich glaube nicht alles sofort.",
      "Ich kaufe nichts sofort aus Videos.",
      "Ich mache Pausen.",
      "Ich mache gefährliche Dinge nicht nach."
    ],
    "shortLessonIndexes": [
      0,
      1,
      2,
      4,
      7
    ],
    "qrLink": "index.html#youtube",
    "qrShortLink": "index.html#youtube:kurz",
    "qrQuizLink": "index.html#youtube:quiz",
    "qrMemoryLink": "index.html#youtube:merk",
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
    "desc": "Bilder und Standort schützen",
    "quiz": [
      {
        "question": "Warum können Bilder riskant sein?",
        "answers": [
          "Jemand kann sie speichern.",
          "Sie sind immer sicher."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine fremde Person fragt nach deinem Standort. Was ist besser?",
        "answers": [
          "Standort schicken.",
          "Standort nicht schicken."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Jemand macht Druck wegen einem Bild. Was ist besser?",
        "answers": [
          "Bild schicken.",
          "Nein sagen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein Bild vom Bildschirm?",
        "answers": [
          "Ein gespeichertes Bild vom Handy.",
          "Ein Passwort."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Wer soll deinen Standort sehen?",
        "answers": [
          "Nicht fremde Personen.",
          "Alle fremden Personen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein Warnzeichen?",
        "answers": [
          "Druck.",
          "Ein freundlicher Gruß."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du bist unsicher bei einem Kontakt. Was hilft?",
        "answers": [
          "Hilfe-Button nutzen.",
          "Private Daten senden."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was darfst du sagen?",
        "answers": [
          "Nein.",
          "Immer Ja."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist eine gute Regel?",
        "answers": [
          "Erst denken. Dann senden.",
          "Schnell schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was machst du bei komischen Nachrichten?",
        "answers": [
          "Langsam machen.",
          "Sofort antworten."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "photo",
        "text": [
          "Hier lernst du: Was ist bei Snapchat wichtig?",
          "Du lernst etwas über Bilder.",
          "Du lernst etwas über deinen Standort."
        ]
      },
      {
        "title": "Bilder verschwinden nicht immer",
        "module": "Snapchat",
        "icon": "photo",
        "text": [
          "Du sendest ein Bild.",
          "Du denkst vielleicht: Das verschwindet gleich.",
          "Aber jemand kann das Bild speichern."
        ],
        "remember": "Ich sende nur Bilder, die sicher sind.",
        "practice": {
          "question": "Du willst ein sehr privates Bild senden. Was ist besser?",
          "answers": [
            "Ich sende das Bild.",
            "Ich sende das Bild nicht."
          ],
          "correctIndex": 1
        }
      },
      {
        "title": "Bild vom Bildschirm",
        "module": "Snapchat",
        "icon": "warning",
        "text": [
          "Jemand kann ein Bild vom Bildschirm machen.",
          "Dann kann dein Bild gespeichert werden.",
          "Dann kann es weitergeschickt werden."
        ],
        "remember": "Ich denke vor dem Senden nach."
      },
      {
        "title": "Standort",
        "module": "Snapchat",
        "icon": "data",
        "text": [
          "Snapchat kann zeigen, wo du bist.",
          "Andere können dann deinen Ort sehen.",
          "Das kann unsicher sein."
        ],
        "remember": "Ich teile meinen Standort nicht einfach.",
        "practice": {
          "question": "Eine fremde Person fragt: Wo bist du? Was ist besser?",
          "answers": [
            "Ich schicke meinen Standort.",
            "Ich schicke meinen Standort nicht."
          ],
          "correctIndex": 1
        }
      },
      {
        "title": "Kontakte",
        "module": "Snapchat",
        "icon": "help",
        "text": [
          "Nicht jeder Kontakt ist vertraut.",
          "Fremde Personen können schreiben.",
          "Du prüfst Kontakte."
        ],
        "remember": "Ich prüfe, wer mir schreibt."
      },
      {
        "title": "Private Bilder",
        "module": "Snapchat",
        "icon": "lock",
        "text": [
          "Private Bilder sind sehr persönlich.",
          "Niemand darf dich unter Druck setzen.",
          "Du darfst Nein sagen."
        ],
        "remember": "Ich schicke keine privaten Bilder unter Druck."
      },
      {
        "title": "Druck",
        "module": "Snapchat",
        "icon": "warning",
        "text": [
          "Jemand sagt: Schick das.",
          "Jemand sagt: Sag es niemandem.",
          "Das ist ein Warnzeichen."
        ],
        "remember": "Druck ist ein Warnzeichen."
      },
      {
        "title": "Das merke ich mir",
        "module": "Snapchat",
        "icon": "remember",
        "text": [
          "Diese Regeln helfen bei Snapchat."
        ],
        "bullets": [
          "Bilder können gespeichert werden.",
          "Standort schützen.",
          "Kontakte prüfen.",
          "Bei Druck Hilfe holen."
        ]
      }
    ],
    "illustration": "assets/illustrations/snapchat.svg",
    "quizQuestions": [
      {
        "question": "Warum können Bilder riskant sein?",
        "answers": [
          "Jemand kann sie speichern.",
          "Sie sind immer sicher."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine fremde Person fragt nach deinem Standort. Was ist besser?",
        "answers": [
          "Standort schicken.",
          "Standort nicht schicken."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Jemand macht Druck wegen einem Bild. Was ist besser?",
        "answers": [
          "Bild schicken.",
          "Nein sagen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein Bild vom Bildschirm?",
        "answers": [
          "Ein gespeichertes Bild vom Handy.",
          "Ein Passwort."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Wer soll deinen Standort sehen?",
        "answers": [
          "Nicht fremde Personen.",
          "Alle fremden Personen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein Warnzeichen?",
        "answers": [
          "Druck.",
          "Ein freundlicher Gruß."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du bist unsicher bei einem Kontakt. Was hilft?",
        "answers": [
          "Hilfe-Button nutzen.",
          "Private Daten senden."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was darfst du sagen?",
        "answers": [
          "Nein.",
          "Immer Ja."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist eine gute Regel?",
        "answers": [
          "Erst denken. Dann senden.",
          "Schnell schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was machst du bei komischen Nachrichten?",
        "answers": [
          "Langsam machen.",
          "Sofort antworten."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
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
      "Macht jemand Druck?"
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
      5,
      7
    ],
    "qrLink": "index.html#snapchat",
    "qrShortLink": "index.html#snapchat:kurz",
    "qrQuizLink": "index.html#snapchat:quiz",
    "qrMemoryLink": "index.html#snapchat:merk",
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
    "desc": "Videos, Trends und Pausen",
    "quiz": [
      {
        "question": "Was ist bei Trends wichtig?",
        "answers": [
          "Nicht alles nachmachen.",
          "Alles sofort machen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum kommen ähnliche Videos?",
        "answers": [
          "TikTok merkt, was ich anschaue.",
          "TikTok liest meine Gedanken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Trend ist gefährlich. Was ist besser?",
        "answers": [
          "Nicht mitmachen.",
          "Mitmachen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine fremde Person fragt nach deiner Adresse. Was ist besser?",
        "answers": [
          "Adresse schicken.",
          "Adresse nicht schicken."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du schaust länger als geplant. Was hilft?",
        "answers": [
          "Pause machen.",
          "Immer weiter schauen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Kommentar verletzt dich. Was ist besser?",
        "answers": [
          "Unterstützung holen.",
          "Zurück beleidigen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Vor dem Posten eines Videos prüfst du:",
        "answers": [
          "Was zu sehen ist.",
          "Nichts."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist eine gute Regel?",
        "answers": [
          "Ich entscheide, was mir gut tut.",
          "TikTok bestimmt alles."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was darfst du bei Druck machen?",
        "answers": [
          "Nein sagen.",
          "Immer mitmachen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was schützt dich?",
        "answers": [
          "Langsam machen.",
          "Alles teilen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "help",
        "text": [
          "Hier lernst du: Wie nutze ich TikTok sicher?",
          "Du lernst etwas über Trends.",
          "Du lernst etwas über Pausen."
        ]
      },
      {
        "title": "Trends",
        "module": "TikTok",
        "icon": "help",
        "text": [
          "Viele Menschen machen bei einem Trend mit.",
          "Manche Trends sind lustig.",
          "Manche Trends sind gefährlich."
        ],
        "remember": "Ich mache gefährliche Trends nicht nach.",
        "practice": {
          "question": "Ein Trend sieht gefährlich aus. Was ist besser?",
          "answers": [
            "Ich mache mit.",
            "Ich mache nicht mit."
          ],
          "correctIndex": 1
        }
      },
      {
        "title": "Warum ähnliche Videos kommen",
        "module": "TikTok",
        "icon": "data",
        "text": [
          "TikTok merkt, welche Videos du anschaust.",
          "Dann zeigt TikTok oft ähnliche Videos.",
          "Darum kann man schnell lange schauen."
        ],
        "remember": "Ich mache Pause, wenn mir Videos nicht gut tun.",
        "practice": {
          "question": "TikTok zeigt dir viele traurige Videos. Was ist besser?",
          "answers": [
            "Ich schaue immer weiter.",
            "Ich mache Pause."
          ],
          "correctIndex": 1
        }
      },
      {
        "title": "Kommentare",
        "module": "TikTok",
        "icon": "message",
        "text": [
          "Kommentare können nett sein.",
          "Kommentare können verletzen.",
          "Du musst nicht auf alles reagieren."
        ],
        "remember": "Ich hole Unterstützung bei verletzenden Kommentaren."
      },
      {
        "title": "Private Nachrichten",
        "module": "TikTok",
        "icon": "message",
        "text": [
          "Fremde Personen können schreiben.",
          "Manche fragen nach privaten Daten.",
          "Private Daten bleiben geschützt."
        ],
        "remember": "Ich gebe fremden Personen keine privaten Daten.",
        "practice": {
          "question": "Eine fremde Person fragt nach deiner Adresse. Was ist besser?",
          "answers": [
            "Ich schicke die Adresse.",
            "Ich schicke die Adresse nicht."
          ],
          "correctIndex": 1
        }
      },
      {
        "title": "Video posten",
        "module": "TikTok",
        "icon": "photo",
        "text": [
          "Wenn du ein Video postest, können andere es sehen.",
          "Andere können es speichern.",
          "Darum prüfst du das Video vorher."
        ],
        "remember": "Ich prüfe Videos vor dem Posten."
      },
      {
        "title": "Gefühle",
        "module": "TikTok",
        "icon": "help",
        "text": [
          "Manche Videos machen traurig.",
          "Manche Videos machen wütend.",
          "Dann ist eine Pause gut."
        ],
        "remember": "Ich darf TikTok weglegen."
      },
      {
        "title": "Das merke ich mir",
        "module": "TikTok",
        "icon": "remember",
        "text": [
          "Diese Regeln helfen bei TikTok."
        ],
        "bullets": [
          "Gefährliche Trends nicht nachmachen.",
          "Pausen machen.",
          "Private Daten schützen.",
          "Videos vor dem Posten prüfen."
        ]
      }
    ],
    "illustration": "assets/illustrations/tiktok.svg",
    "quizQuestions": [
      {
        "question": "Was ist bei Trends wichtig?",
        "answers": [
          "Nicht alles nachmachen.",
          "Alles sofort machen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum kommen ähnliche Videos?",
        "answers": [
          "TikTok merkt, was ich anschaue.",
          "TikTok liest meine Gedanken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Trend ist gefährlich. Was ist besser?",
        "answers": [
          "Nicht mitmachen.",
          "Mitmachen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine fremde Person fragt nach deiner Adresse. Was ist besser?",
        "answers": [
          "Adresse schicken.",
          "Adresse nicht schicken."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du schaust länger als geplant. Was hilft?",
        "answers": [
          "Pause machen.",
          "Immer weiter schauen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Kommentar verletzt dich. Was ist besser?",
        "answers": [
          "Unterstützung holen.",
          "Zurück beleidigen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Vor dem Posten eines Videos prüfst du:",
        "answers": [
          "Was zu sehen ist.",
          "Nichts."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist eine gute Regel?",
        "answers": [
          "Ich entscheide, was mir gut tut.",
          "TikTok bestimmt alles."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was darfst du bei Druck machen?",
        "answers": [
          "Nein sagen.",
          "Immer mitmachen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was schützt dich?",
        "answers": [
          "Langsam machen.",
          "Alles teilen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      }
    ],
    "certificateGoals": [
      "Trends kritisch prüfen",
      "Pausen machen",
      "Kommentare und Werbung einschätzen"
    ],
    "helpQuestions": [
      "Tut mir das Video gut?",
      "Ist der Trend sicher?",
      "Will jemand private Daten?"
    ],
    "memoryRules": [
      "Ich mache gefährliche Trends nicht nach.",
      "Ich mache Pausen.",
      "Ich schütze private Daten.",
      "Ich prüfe Videos vor dem Posten."
    ],
    "shortLessonIndexes": [
      0,
      1,
      2,
      4,
      7
    ],
    "qrLink": "index.html#tiktok",
    "qrShortLink": "index.html#tiktok:kurz",
    "qrQuizLink": "index.html#tiktok:quiz",
    "qrMemoryLink": "index.html#tiktok:merk",
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
    "desc": "Was tun bei Problemen?",
    "quiz": [
      {
        "question": "Was ist der erste Schritt bei einer komischen Nachricht?",
        "answers": [
          "Sofort antworten.",
          "Stopp machen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum nicht sofort löschen?",
        "answers": [
          "Dann kann man die Nachricht zeigen.",
          "Löschen ist immer verboten."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Jemand macht Druck. Was ist besser?",
        "answers": [
          "Allein bleiben.",
          "Unterstützung holen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Wer kann helfen?",
        "answers": [
          "Eine vertraute Person.",
          "Eine fremde Person im Internet."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein Bild vom Bildschirm?",
        "answers": [
          "Ein Bild von der Nachricht.",
          "Ein Passwort."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du hast Angst. Was ist besser?",
        "answers": [
          "Unterstützung holen.",
          "Allein bleiben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was bedeutet Stopp-Regel?",
        "answers": [
          "Nicht sofort reagieren.",
          "Sofort alles senden."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was machst du mit einer beleidigenden Nachricht?",
        "answers": [
          "Zeigen.",
          "Zurück beleidigen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist eine gute Regel?",
        "answers": [
          "Stopp. Zeigen. Unterstützung holen.",
          "Allein bleiben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du verstehst eine Nachricht nicht. Was hilft?",
        "answers": [
          "Hilfe-Button nutzen.",
          "Raten und klicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "help",
        "text": [
          "Hier lernst du: Was tue ich bei Problemen im Internet?",
          "Zum Beispiel bei Druck, Angst oder Beleidigungen.",
          "Du lernst einfache Schritte."
        ]
      },
      {
        "title": "Stopp-Regel",
        "module": "Hilfe",
        "icon": "stop",
        "text": [
          "Eine Nachricht macht dir Stress.",
          "Du willst vielleicht sofort antworten.",
          "Dann hilft die Stopp-Regel."
        ],
        "remember": "Stopp. Nicht sofort reagieren.",
        "practice": {
          "question": "Eine Nachricht macht dir Angst. Was ist der erste Schritt?",
          "answers": [
            "Ich antworte sofort.",
            "Ich mache Stopp."
          ],
          "correctIndex": 1
        }
      },
      {
        "title": "Nicht sofort löschen",
        "module": "Hilfe",
        "icon": "check",
        "text": [
          "Jemand beleidigt dich in einer Nachricht.",
          "Du willst die Nachricht vielleicht löschen.",
          "Aber die Nachricht kann wichtig sein."
        ],
        "remember": "Ich lösche nicht sofort.",
        "practice": {
          "question": "Du bekommst eine beleidigende Nachricht. Was ist besser?",
          "answers": [
            "Sofort löschen.",
            "Nicht sofort löschen."
          ],
          "correctIndex": 1
        }
      },
      {
        "title": "Bild vom Bildschirm",
        "module": "Hilfe",
        "icon": "photo",
        "text": [
          "Ein Bild vom Bildschirm kann helfen.",
          "So kann man eine Nachricht zeigen.",
          "Bitte eine Person um Hilfe, wenn du es nicht allein kannst."
        ],
        "remember": "Ich kann eine Nachricht zeigen."
      },
      {
        "title": "Wen fragen?",
        "module": "Hilfe",
        "icon": "help",
        "text": [
          "Du kannst eine Person fragen, der du vertraust.",
          "Zum Beispiel im Wohnbereich, im Dienst oder in der Familie.",
          "Du musst das nicht allein lösen."
        ],
        "remember": "Ich frage eine vertraute Person."
      },
      {
        "title": "Druck",
        "module": "Hilfe",
        "icon": "warning",
        "text": [
          "Jemand sagt: Sag es niemandem.",
          "Jemand sagt: Mach das sofort.",
          "Das ist Druck."
        ],
        "remember": "Druck ist ein Warnzeichen.",
        "practice": {
          "question": "Jemand schreibt: Sag es niemandem. Was ist besser?",
          "answers": [
            "Ich bleibe allein damit.",
            "Ich hole Unterstützung."
          ],
          "correctIndex": 1
        }
      },
      {
        "title": "Angst",
        "module": "Hilfe",
        "icon": "help",
        "text": [
          "Angst ist ernst.",
          "Du darfst sofort Unterstützung holen.",
          "Du musst nichts allein beweisen."
        ],
        "remember": "Ich hole Unterstützung, wenn ich Angst habe."
      },
      {
        "title": "Das merke ich mir",
        "module": "Hilfe",
        "icon": "remember",
        "text": [
          "Diese Regeln helfen bei Problemen im Internet."
        ],
        "bullets": [
          "Stopp machen.",
          "Nicht sofort antworten.",
          "Nicht sofort löschen.",
          "Nachricht zeigen.",
          "Unterstützung holen."
        ]
      }
    ],
    "illustration": "assets/illustrations/hilfe.svg",
    "quizQuestions": [
      {
        "question": "Was ist der erste Schritt bei einer komischen Nachricht?",
        "answers": [
          "Sofort antworten.",
          "Stopp machen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum nicht sofort löschen?",
        "answers": [
          "Dann kann man die Nachricht zeigen.",
          "Löschen ist immer verboten."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Jemand macht Druck. Was ist besser?",
        "answers": [
          "Allein bleiben.",
          "Unterstützung holen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Wer kann helfen?",
        "answers": [
          "Eine vertraute Person.",
          "Eine fremde Person im Internet."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein Bild vom Bildschirm?",
        "answers": [
          "Ein Bild von der Nachricht.",
          "Ein Passwort."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du hast Angst. Was ist besser?",
        "answers": [
          "Unterstützung holen.",
          "Allein bleiben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was bedeutet Stopp-Regel?",
        "answers": [
          "Nicht sofort reagieren.",
          "Sofort alles senden."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was machst du mit einer beleidigenden Nachricht?",
        "answers": [
          "Zeigen.",
          "Zurück beleidigen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist eine gute Regel?",
        "answers": [
          "Stopp. Zeigen. Unterstützung holen.",
          "Allein bleiben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du verstehst eine Nachricht nicht. Was hilft?",
        "answers": [
          "Hilfe-Button nutzen.",
          "Raten und klicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht sicher. Lies die Erklärung. Nutze den Hilfe-Button, wenn du unsicher bist."
      }
    ],
    "certificateGoals": [
      "Stopp-Regel anwenden",
      "Beweise mit Hilfe sichern",
      "Unterstützung holen"
    ],
    "helpQuestions": [
      "Macht mir die Nachricht Angst?",
      "Macht jemand Druck?",
      "Wem kann ich die Nachricht zeigen?"
    ],
    "memoryRules": [
      "Stopp machen.",
      "Nicht sofort antworten.",
      "Nicht sofort löschen.",
      "Nachricht zeigen.",
      "Unterstützung holen."
    ],
    "shortLessonIndexes": [
      0,
      1,
      2,
      4,
      7
    ],
    "qrLink": "index.html#hilfe",
    "qrShortLink": "index.html#hilfe:kurz",
    "qrQuizLink": "index.html#hilfe:quiz",
    "qrMemoryLink": "index.html#hilfe:merk",
    "miniQuestion": {
      "question": "Was machst du, wenn du unsicher bist?",
      "answers": [
        "Ich frage eine Person, der ich vertraue.",
        "Ich löse alles allein.",
        "Ich klicke sofort."
      ],
      "correct": 0,
      "explanation": "Bei Unsicherheit ist Hilfe holen richtig. Du musst das nicht allein lösen."
    },
    "description": "Was du tun kannst, wenn im Internet etwas komisch, unangenehm oder unsicher ist."
  }
];
