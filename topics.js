const topics = [
  {
    "id": "datenschutz",
    "title": "Datenschutz",
    "icon": "lock",
    "desc": "Private Daten verstehen und schützen",
    "quiz": [
      {
        "question": "Was ist ein privates Datum?",
        "answers": [
          "Deine Adresse.",
          "Das Wetter.",
          "Der Name einer App."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine App fragt nach deinem Passwort. Was machst du?",
        "answers": [
          "Nicht weitergeben und nachfragen.",
          "Passwort schicken.",
          "Passwort in eine Gruppe schreiben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du bekommst einen Link zu einem Gewinnspiel. Was ist sicher?",
        "answers": [
          "Langsam machen und fragen.",
          "Sofort alles eintragen.",
          "Den Link an alle weiterleiten."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was machst du vor dem Senden eines Fotos?",
        "answers": [
          "Prüfen, was auf dem Foto zu sehen ist.",
          "Immer sofort senden.",
          "Nie darüber nachdenken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du bist unsicher. Was ist gut?",
        "answers": [
          "Eine Person fragen, der du vertraust.",
          "Trotzdem klicken.",
          "Das Passwort ändern und sagen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was gehört nicht in eine öffentliche Nachricht?",
        "answers": [
          "Adresse und Telefonnummer.",
          "Ein allgemeiner Gruß.",
          "Ein Emoji."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum ist ein Passwort wichtig?",
        "answers": [
          "Es schützt dein Konto.",
          "Es ist nur ein Wort.",
          "Es ist für alle da."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine Webseite fragt sehr viele Daten ab. Was machst du?",
        "answers": [
          "Erst prüfen und nachfragen.",
          "Alles ausfüllen.",
          "Daten erfinden und weitermachen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Wer darf dein Passwort kennen?",
        "answers": [
          "Nur du.",
          "Alle aus der Gruppe.",
          "Jede Person im Internet."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein guter Merksatz?",
        "answers": [
          "Erst prüfen. Dann entscheiden.",
          "Immer sofort klicken.",
          "Private Daten sind egal."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Modulstart",
        "icon": "lock",
        "text": [
          "In diesem Thema geht es um private Daten.",
          "Private Daten sagen etwas über dich.",
          "Du lernst, wann du vorsichtig sein musst."
        ]
      },
      {
        "title": "Was sind private Daten?",
        "module": "Modul 1: Datenschutz verstehen",
        "icon": "data",
        "text": [
          "Private Daten gehören zu dir.",
          "Andere Menschen sollen diese Daten nicht einfach bekommen."
        ],
        "bullets": [
          "Name",
          "Adresse",
          "Telefonnummer",
          "Geburtstag",
          "Passwort",
          "Fotos",
          "Gesundheits-Daten"
        ],
        "remember": "Mein Name, meine Adresse und mein Passwort sind privat."
      },
      {
        "title": "Passwörter schützen",
        "module": "Modul 1: Datenschutz verstehen",
        "icon": "lock",
        "text": [
          "Ein Passwort ist wie ein Schlüssel.",
          "Mit dem Passwort kann jemand in dein Konto.",
          "Darum gibst du dein Passwort nicht weiter."
        ],
        "warning": "Auch gute Freunde sollen dein Passwort nicht kennen.",
        "remember": "Ich gebe mein Passwort nicht weiter."
      },
      {
        "title": "Nicht alles eintragen",
        "module": "Modul 1: Datenschutz verstehen",
        "icon": "stop",
        "text": [
          "Stell dir vor: Du willst eine App benutzen.",
          "Die App fragt nach deiner Adresse und Telefonnummer.",
          "Jetzt musst du entscheiden: Muss ich das wirklich eintragen?",
          "Wenn du unsicher bist, stoppst du kurz und fragst nach."
        ],
        "examples": [
          "Eine Spiele-App fragt nach deiner Adresse.",
          "Ein Gewinnspiel fragt nach deinem Geburtstag.",
          "Ein Formular fragt nach deiner Telefonnummer."
        ],
        "remember": "Ich trage private Daten nicht einfach ein.",
        "practice": {
          "question": "Eine App fragt nach deiner Adresse. Du weißt nicht warum. Was ist sicher?",
          "answers": [
            "Nicht eintragen.",
            "Adresse sofort eintragen.",
            "Zusätzlich mein Passwort eintragen."
          ],
          "correctIndex": 0
        }
      },
      {
        "title": "Fotos und Daten",
        "module": "Modul 1: Datenschutz verstehen",
        "icon": "photo",
        "text": [
          "Stell dir vor: Du willst ein Foto verschicken.",
          "Auf dem Foto sieht man vielleicht dein Zimmer, einen Brief oder eine andere Person.",
          "Das kann privat sein.",
          "Darum schaust du vor dem Senden genau hin."
        ],
        "remember": "Ich prüfe ein Foto, bevor ich es verschicke.",
        "examples": [
          "Auf dem Tisch liegt ein Brief mit Adresse.",
          "Im Hintergrund ist eine andere Person zu sehen.",
          "Auf dem Foto sieht man dein Zimmer."
        ],
        "practice": {
          "question": "Auf einem Foto sieht man einen Brief mit deiner Adresse. Was ist sicher?",
          "answers": [
            "Foto nicht senden oder unkenntlich machen.",
            "Foto sofort senden.",
            "Foto in eine Gruppe schicken."
          ],
          "correctIndex": 0
        }
      },
      {
        "title": "Komische Nachrichten",
        "module": "Modul 1: Datenschutz verstehen",
        "icon": "message",
        "text": [
          "Manchmal wollen Nachrichten private Daten bekommen.",
          "Zum Beispiel mit Druck oder einem falschen Gewinn.",
          "Dann klickst du nicht sofort."
        ],
        "remember": "Bei komischen Nachrichten mache ich langsam.",
        "practice": {
          "question": "Eine Nachricht sagt: Du hast gewonnen. Gib deine Adresse ein. Was ist sicher?",
          "answers": [
            "Nicht sofort eintragen.",
            "Adresse sofort schicken.",
            "Passwort mitschicken."
          ],
          "correctIndex": 0
        }
      },
      {
        "title": "Wenn du unsicher bist",
        "module": "Modul 1: Datenschutz verstehen",
        "icon": "help",
        "text": [
          "Unsicherheit ist ein Warnsignal.",
          "Du darfst nachfragen.",
          "Du musst digitale Dinge nicht allein entscheiden."
        ],
        "remember": "Ich hole Hilfe, wenn ich unsicher bin."
      },
      {
        "title": "Merksätze Datenschutz",
        "module": "Modul 1: Datenschutz verstehen",
        "icon": "remember",
        "text": [
          "Diese Regeln helfen dir im Alltag."
        ],
        "bullets": [
          "Ich gebe mein Passwort nicht weiter.",
          "Ich trage nicht alles sofort ein.",
          "Ich prüfe Fotos vor dem Senden.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Ich schütze meine privaten Daten."
      }
    ],
    "illustration": "assets/illustrations/datenschutz.svg",
    "quizQuestions": [
      {
        "question": "Was ist ein privates Datum?",
        "answers": [
          "Deine Adresse.",
          "Das Wetter.",
          "Der Name einer App."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine App fragt nach deinem Passwort. Was machst du?",
        "answers": [
          "Nicht weitergeben und nachfragen.",
          "Passwort schicken.",
          "Passwort in eine Gruppe schreiben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du bekommst einen Link zu einem Gewinnspiel. Was ist sicher?",
        "answers": [
          "Langsam machen und fragen.",
          "Sofort alles eintragen.",
          "Den Link an alle weiterleiten."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was machst du vor dem Senden eines Fotos?",
        "answers": [
          "Prüfen, was auf dem Foto zu sehen ist.",
          "Immer sofort senden.",
          "Nie darüber nachdenken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du bist unsicher. Was ist gut?",
        "answers": [
          "Eine Person fragen, der du vertraust.",
          "Trotzdem klicken.",
          "Das Passwort ändern und sagen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was gehört nicht in eine öffentliche Nachricht?",
        "answers": [
          "Adresse und Telefonnummer.",
          "Ein allgemeiner Gruß.",
          "Ein Emoji."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum ist ein Passwort wichtig?",
        "answers": [
          "Es schützt dein Konto.",
          "Es ist nur ein Wort.",
          "Es ist für alle da."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine Webseite fragt sehr viele Daten ab. Was machst du?",
        "answers": [
          "Erst prüfen und nachfragen.",
          "Alles ausfüllen.",
          "Daten erfinden und weitermachen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Wer darf dein Passwort kennen?",
        "answers": [
          "Nur du.",
          "Alle aus der Gruppe.",
          "Jede Person im Internet."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein guter Merksatz?",
        "answers": [
          "Erst prüfen. Dann entscheiden.",
          "Immer sofort klicken.",
          "Private Daten sind egal."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      }
    ],
    "certificateGoals": [
      "private Daten erkennen",
      "Daten sparsam teilen",
      "bei Unsicherheit Hilfe holen"
    ],
    "helpQuestions": [
      "Muss ich diese Daten wirklich eingeben?",
      "Wer kann diese Daten sehen?",
      "Kann mir eine Person helfen?"
    ],
    "memoryRules": [
      "Ich gebe mein Passwort nicht weiter.",
      "Ich trage private Daten nicht einfach ein.",
      "Ich prüfe Fotos vor dem Senden.",
      "Ich frage nach, wenn ich unsicher bin."
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
    "desc": "Nachrichten, Gruppen, Links und Hilfe",
    "quiz": [
      {
        "question": "Eine fremde Nummer schreibt dir. Was machst du?",
        "answers": [
          "Nicht sofort antworten.",
          "Sofort private Daten schicken.",
          "Sofort Geld senden."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Jemand fragt nach deinem WhatsApp-Code. Was machst du?",
        "answers": [
          "Code nicht weitergeben.",
          "Code schicken.",
          "Code in die Gruppe schreiben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Link kommt von einer unbekannten Nummer. Was ist sicher?",
        "answers": [
          "Nicht öffnen.",
          "Sofort öffnen.",
          "Weiterleiten."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist in einer Gruppe wichtig?",
        "answers": [
          "Viele können mitlesen.",
          "Nur ich kann es sehen.",
          "Alles ist privat."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du willst ein Foto von jemandem senden. Was machst du?",
        "answers": [
          "Erst fragen.",
          "Einfach senden.",
          "In alle Gruppen schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine Nachricht macht dir Angst. Was ist gut?",
        "answers": [
          "Pause machen.",
          "Allein weitermachen.",
          "Sofort antworten."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was darfst du mit einer stressigen Gruppe machen?",
        "answers": [
          "Stumm schalten oder Hilfe fragen.",
          "Immer sofort antworten.",
          "Alle beschimpfen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein sicherer Umgang mit Sprachnachrichten?",
        "answers": [
          "Vorher überlegen, was ich sage.",
          "Private Dinge immer schicken.",
          "Nie zuhören."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine Nachricht sagt: sofort bezahlen. Was machst du?",
        "answers": [
          "Nicht sofort handeln.",
          "Sofort bezahlen.",
          "Passwort schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was hilft bei WhatsApp?",
        "answers": [
          "Langsam prüfen.",
          "Sofort klicken.",
          "Codes weitergeben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Modulstart",
        "icon": "message",
        "text": [
          "WhatsApp ist eine App für Nachrichten.",
          "Du kannst schreiben, sprechen, Bilder senden und Gruppen nutzen.",
          "Du lernst, worauf du achten musst."
        ]
      },
      {
        "title": "Was ist WhatsApp?",
        "module": "Modul 1: WhatsApp verstehen",
        "icon": "message",
        "text": [
          "Mit WhatsApp kannst du Kontakt halten.",
          "Du kannst Nachrichten, Fotos und Sprachnachrichten senden.",
          "Andere Menschen können dir auch schreiben."
        ],
        "remember": "Ich entscheide, wem ich antworte."
      },
      {
        "title": "Unbekannte Nachrichten",
        "module": "Modul 1: WhatsApp verstehen",
        "icon": "warning",
        "text": [
          "Stell dir vor: Eine fremde Nummer schreibt dir.",
          "Die Person sagt: Ich kenne dich.",
          "Du bist aber nicht sicher, wer das ist.",
          "Dann antwortest du nicht sofort."
        ],
        "examples": [
          "Hallo, ich habe eine neue Nummer.",
          "Schick mir schnell Geld.",
          "Gib mir bitte deinen Code."
        ],
        "remember": "Bei fremden Nachrichten mache ich langsam.",
        "practice": {
          "question": "Eine fremde Nummer schreibt: Ich bin es. Schick mir Geld. Was ist sicher?",
          "answers": [
            "Nicht antworten.",
            "Geld schicken.",
            "Code schicken."
          ],
          "correctIndex": 0
        }
      },
      {
        "title": "Links in WhatsApp",
        "module": "Modul 1: WhatsApp verstehen",
        "icon": "link",
        "text": [
          "Links können zu Internetseiten führen.",
          "Manche Links sind sicher. Andere Links sind gefährlich.",
          "Du klickst nicht sofort auf unbekannte Links."
        ],
        "remember": "Ich klicke nicht sofort auf unbekannte Links.",
        "practice": {
          "question": "Eine fremde Nummer schickt einen Link. Was ist sicher?",
          "answers": [
            "Nicht öffnen.",
            "Sofort öffnen.",
            "In eine Gruppe weiterleiten."
          ],
          "correctIndex": 0
        }
      },
      {
        "title": "WhatsApp-Code",
        "module": "Modul 1: WhatsApp verstehen",
        "icon": "lock",
        "text": [
          "Stell dir vor: Du bekommst einen Code per SMS.",
          "Dann schreibt dir jemand: Schick mir den Code.",
          "Mit dem Code kann jemand dein WhatsApp übernehmen.",
          "Darum gibst du den Code nie weiter."
        ],
        "warning": "Auch wenn jemand sagt: Ich brauche den Code dringend.",
        "remember": "Ich gebe meinen WhatsApp-Code nicht weiter.",
        "practice": {
          "question": "Jemand fragt nach deinem WhatsApp-Code. Was ist sicher?",
          "answers": [
            "Code nicht schicken.",
            "Code sofort schicken.",
            "Code in eine Gruppe schreiben."
          ],
          "correctIndex": 0
        }
      },
      {
        "title": "Gruppen",
        "module": "Modul 1: WhatsApp verstehen",
        "icon": "help",
        "text": [
          "In Gruppen lesen viele Menschen mit.",
          "Nicht alles gehört in eine Gruppe.",
          "Du darfst eine Gruppe stumm schalten oder verlassen."
        ],
        "remember": "Ich schreibe in Gruppen nur, was alle sehen dürfen."
      },
      {
        "title": "Fotos und Sprachnachrichten",
        "module": "Modul 1: WhatsApp verstehen",
        "icon": "photo",
        "text": [
          "Fotos und Stimmen können privat sein.",
          "Andere können sie weiterleiten.",
          "Darum prüfst du vor dem Senden."
        ],
        "remember": "Ich frage, bevor ich Fotos von anderen sende."
      },
      {
        "title": "Hilfe holen",
        "module": "Modul 1: WhatsApp verstehen",
        "icon": "help",
        "text": [
          "Wenn dich eine Nachricht stresst, mach eine Pause.",
          "Du kannst die Nachricht zeigen.",
          "Du kannst eine Person fragen, der du vertraust."
        ],
        "remember": "Ich muss WhatsApp-Probleme nicht allein lösen."
      }
    ],
    "illustration": "assets/illustrations/whatsapp.svg",
    "quizQuestions": [
      {
        "question": "Eine fremde Nummer schreibt dir. Was machst du?",
        "answers": [
          "Nicht sofort antworten.",
          "Sofort private Daten schicken.",
          "Sofort Geld senden."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Jemand fragt nach deinem WhatsApp-Code. Was machst du?",
        "answers": [
          "Code nicht weitergeben.",
          "Code schicken.",
          "Code in die Gruppe schreiben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Link kommt von einer unbekannten Nummer. Was ist sicher?",
        "answers": [
          "Nicht öffnen.",
          "Sofort öffnen.",
          "Weiterleiten."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist in einer Gruppe wichtig?",
        "answers": [
          "Viele können mitlesen.",
          "Nur ich kann es sehen.",
          "Alles ist privat."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du willst ein Foto von jemandem senden. Was machst du?",
        "answers": [
          "Erst fragen.",
          "Einfach senden.",
          "In alle Gruppen schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine Nachricht macht dir Angst. Was ist gut?",
        "answers": [
          "Pause machen.",
          "Allein weitermachen.",
          "Sofort antworten."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was darfst du mit einer stressigen Gruppe machen?",
        "answers": [
          "Stumm schalten oder Hilfe fragen.",
          "Immer sofort antworten.",
          "Alle beschimpfen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein sicherer Umgang mit Sprachnachrichten?",
        "answers": [
          "Vorher überlegen, was ich sage.",
          "Private Dinge immer schicken.",
          "Nie zuhören."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine Nachricht sagt: sofort bezahlen. Was machst du?",
        "answers": [
          "Nicht sofort handeln.",
          "Sofort bezahlen.",
          "Passwort schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was hilft bei WhatsApp?",
        "answers": [
          "Langsam prüfen.",
          "Sofort klicken.",
          "Codes weitergeben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
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
      "Soll ich erst jemanden fragen?"
    ],
    "memoryRules": [
      "Ich klicke nicht sofort auf unbekannte Links.",
      "Ich gebe keinen WhatsApp-Code weiter.",
      "Ich schreibe in Gruppen nur, was alle sehen dürfen.",
      "Ich frage nach, wenn mich eine Nachricht stresst."
    ],
    "shortLessonIndexes": [
      0,
      2,
      4,
      6,
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
    "desc": "Profil, Beiträge, Kommentare und Privatsphäre",
    "quiz": [
      {
        "question": "Was solltest du vor einem Beitrag überlegen?",
        "answers": [
          "Wer kann das sehen?",
          "Wie schnell kann ich posten?",
          "Wie viele Likes bekomme ich?"
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine unbekannte Person sendet eine Anfrage. Was ist sicher?",
        "answers": [
          "Erst prüfen.",
          "Sofort annehmen.",
          "Adresse schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist bei Kommentaren wichtig?",
        "answers": [
          "Respektvoll schreiben.",
          "Andere beleidigen.",
          "Immer streiten."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was kann privat sein?",
        "answers": [
          "Wohnort und Telefonnummer.",
          "Ein allgemeiner Gruß.",
          "Ein App-Name."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du wirst beleidigt. Was hilft?",
        "answers": [
          "Nicht allein bleiben und Hilfe holen.",
          "Zurück beleidigen.",
          "Alles löschen und niemandem sagen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was bedeutet Privatsphäre?",
        "answers": [
          "Ich entscheide, wer etwas sehen darf.",
          "Alle sehen alles.",
          "Niemand darf Facebook nutzen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Foto zeigt andere Menschen. Was ist gut?",
        "answers": [
          "Vor dem Posten fragen.",
          "Einfach posten.",
          "Alle markieren."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum sind alte Beiträge wichtig?",
        "answers": [
          "Sie können später noch gesehen werden.",
          "Sie verschwinden immer sofort.",
          "Sie sind immer privat."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist sicher bei Profilangaben?",
        "answers": [
          "Nur nötige Angaben zeigen.",
          "Alles öffentlich machen.",
          "Passwort ins Profil schreiben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein guter Merksatz?",
        "answers": [
          "Erst prüfen. Dann posten.",
          "Immer alles teilen.",
          "Jede Anfrage annehmen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Modulstart",
        "icon": "message",
        "text": [
          "Facebook ist eine Plattform im Internet.",
          "Du kannst Beiträge sehen und schreiben.",
          "Du lernst, was öffentlich sein kann."
        ]
      },
      {
        "title": "Profil prüfen",
        "module": "Modul Facebook",
        "icon": "data",
        "text": [
          "In deinem Profil stehen Informationen über dich.",
          "Manche Informationen müssen nicht öffentlich sein."
        ],
        "bullets": [
          "Wohnort",
          "Telefonnummer",
          "Geburtstag",
          "Arbeitsplatz",
          "Fotos"
        ],
        "remember": "Ich zeige nicht alles in meinem Profil."
      },
      {
        "title": "Beiträge posten",
        "module": "Modul Facebook",
        "icon": "photo",
        "text": [
          "Stell dir vor: Du willst etwas über deinen Tag schreiben.",
          "Vielleicht können viele Menschen den Beitrag sehen.",
          "Auch später kann der Beitrag noch auftauchen.",
          "Darum prüfst du vorher, was du schreibst."
        ],
        "remember": "Ich prüfe einen Beitrag vor dem Posten.",
        "practice": {
          "question": "Du willst schreiben, wo du wohnst. Was ist sicher?",
          "answers": [
            "Nicht öffentlich posten.",
            "Adresse öffentlich posten.",
            "Telefonnummer dazuschreiben."
          ],
          "correctIndex": 0
        }
      },
      {
        "title": "Kommentare",
        "module": "Modul Facebook",
        "icon": "message",
        "text": [
          "Kommentare können andere verletzen.",
          "Auch Kommentare sind öffentlich oder halb-öffentlich.",
          "Du kannst freundlich bleiben oder nichts schreiben."
        ],
        "remember": "Ich schreibe respektvoll."
      },
      {
        "title": "Freundschaftsanfragen",
        "module": "Modul Facebook",
        "icon": "help",
        "text": [
          "Stell dir vor: Eine unbekannte Person sendet dir eine Anfrage.",
          "Du weißt nicht, wer das ist.",
          "Nicht jede Anfrage ist sicher.",
          "Du musst die Anfrage nicht annehmen."
        ],
        "remember": "Ich nehme nicht jede Anfrage an.",
        "practice": {
          "question": "Eine unbekannte Person will dein Facebook-Freund sein. Was ist sicher?",
          "answers": [
            "Erst prüfen.",
            "Sofort annehmen.",
            "Private Daten schicken."
          ],
          "correctIndex": 0
        }
      },
      {
        "title": "Privatsphäre",
        "module": "Modul Facebook",
        "icon": "lock",
        "text": [
          "Privatsphäre bedeutet: Du entscheidest, wer etwas sehen darf.",
          "Einstellungen können helfen."
        ],
        "remember": "Ich frage nach Hilfe bei den Privatsphäre-Einstellungen."
      },
      {
        "title": "Streit und Beleidigungen",
        "module": "Modul Facebook",
        "icon": "warning",
        "text": [
          "Im Internet kann es Streit geben.",
          "Du musst nicht zurückschimpfen.",
          "Du kannst Hilfe holen."
        ],
        "remember": "Ich hole Hilfe, wenn mich etwas verletzt."
      },
      {
        "title": "Merken",
        "module": "Modul Facebook",
        "icon": "remember",
        "text": [
          "Diese Regeln helfen bei Facebook."
        ],
        "bullets": [
          "Nicht alles öffentlich machen.",
          "Nicht jede Anfrage annehmen.",
          "Respektvoll schreiben.",
          "Hilfe holen bei Beleidigungen."
        ],
        "remember": "Erst prüfen. Dann posten."
      }
    ],
    "illustration": "assets/illustrations/facebook.svg",
    "quizQuestions": [
      {
        "question": "Was solltest du vor einem Beitrag überlegen?",
        "answers": [
          "Wer kann das sehen?",
          "Wie schnell kann ich posten?",
          "Wie viele Likes bekomme ich?"
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine unbekannte Person sendet eine Anfrage. Was ist sicher?",
        "answers": [
          "Erst prüfen.",
          "Sofort annehmen.",
          "Adresse schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist bei Kommentaren wichtig?",
        "answers": [
          "Respektvoll schreiben.",
          "Andere beleidigen.",
          "Immer streiten."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was kann privat sein?",
        "answers": [
          "Wohnort und Telefonnummer.",
          "Ein allgemeiner Gruß.",
          "Ein App-Name."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du wirst beleidigt. Was hilft?",
        "answers": [
          "Nicht allein bleiben und Hilfe holen.",
          "Zurück beleidigen.",
          "Alles löschen und niemandem sagen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was bedeutet Privatsphäre?",
        "answers": [
          "Ich entscheide, wer etwas sehen darf.",
          "Alle sehen alles.",
          "Niemand darf Facebook nutzen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Foto zeigt andere Menschen. Was ist gut?",
        "answers": [
          "Vor dem Posten fragen.",
          "Einfach posten.",
          "Alle markieren."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum sind alte Beiträge wichtig?",
        "answers": [
          "Sie können später noch gesehen werden.",
          "Sie verschwinden immer sofort.",
          "Sie sind immer privat."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist sicher bei Profilangaben?",
        "answers": [
          "Nur nötige Angaben zeigen.",
          "Alles öffentlich machen.",
          "Passwort ins Profil schreiben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein guter Merksatz?",
        "answers": [
          "Erst prüfen. Dann posten.",
          "Immer alles teilen.",
          "Jede Anfrage annehmen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      }
    ],
    "certificateGoals": [
      "Profil und Beiträge prüfen",
      "fremde Anfragen einschätzen",
      "blockieren oder melden"
    ],
    "helpQuestions": [
      "Wer kann das sehen?",
      "Kenne ich diese Person wirklich?",
      "Soll ich den Beitrag vorher zeigen?"
    ],
    "memoryRules": [
      "Ich poste nicht alles öffentlich.",
      "Ich nehme nicht jede Anfrage an.",
      "Ich schreibe respektvoll.",
      "Ich hole Hilfe bei Beleidigungen."
    ],
    "shortLessonIndexes": [
      0,
      1,
      3,
      5,
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
    "desc": "Fotos, Stories, Reels und Nachrichten",
    "quiz": [
      {
        "question": "Was prüfst du vor dem Posten eines Fotos?",
        "answers": [
          "Was auf dem Foto zu sehen ist.",
          "Nur die Farbe.",
          "Gar nichts."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum ist der Standort wichtig?",
        "answers": [
          "Er zeigt, wo ich bin.",
          "Er ist immer egal.",
          "Er schützt mein Passwort."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine fremde Person fragt nach privaten Fotos. Was machst du?",
        "answers": [
          "Nicht schicken.",
          "Sofort schicken.",
          "Noch mehr Fotos schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was können Menschen mit Stories machen?",
        "answers": [
          "Screenshot machen.",
          "Nie speichern.",
          "Nur du siehst es immer."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Kommentar verletzt dich. Was hilft?",
        "answers": [
          "Hilfe holen.",
          "Zurück beleidigen.",
          "Allein bleiben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum sind bearbeitete Bilder wichtig?",
        "answers": [
          "Nicht alles ist echt.",
          "Alles ist immer echt.",
          "Bilder dürfen nie schön sein."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein sicherer Merksatz?",
        "answers": [
          "Erst prüfen. Dann teilen.",
          "Immer sofort posten.",
          "Standort immer zeigen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Wer darf deine privaten Fotos bekommen?",
        "answers": [
          "Nur wenn du es wirklich willst und es sicher ist.",
          "Jede fremde Person.",
          "Alle Gruppen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du bist unsicher bei einem Profil. Was machst du?",
        "answers": [
          "Eine Person fragen.",
          "Private Daten schicken.",
          "Alles glauben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist bei Instagram wichtig?",
        "answers": [
          "Privatsphäre beachten.",
          "Immer mehr Likes sammeln.",
          "Nie nachdenken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Modulstart",
        "icon": "photo",
        "text": [
          "Instagram ist eine App für Fotos, Videos und Nachrichten.",
          "Viele Inhalte sind sichtbar für andere.",
          "Du lernst, worauf du achten kannst."
        ]
      },
      {
        "title": "Fotos posten",
        "module": "Modul Instagram",
        "icon": "photo",
        "text": [
          "Stell dir vor: Du willst ein Foto auf Instagram posten.",
          "Andere Menschen können das Foto sehen.",
          "Manchmal sieht man auf Fotos mehr, als man denkt.",
          "Darum prüfst du das Foto vorher."
        ],
        "remember": "Ich prüfe ein Foto, bevor ich es poste.",
        "examples": [
          "Man sieht deinen Wohnort.",
          "Man sieht eine andere Person.",
          "Man sieht private Dinge im Hintergrund."
        ],
        "practice": {
          "question": "Du willst ein Foto posten. Im Hintergrund sieht man eine andere Person. Was ist sicher?",
          "answers": [
            "Erst fragen oder anderes Foto nehmen.",
            "Einfach posten.",
            "Die Person markieren."
          ],
          "correctIndex": 0
        }
      },
      {
        "title": "Stories und Reels",
        "module": "Modul Instagram",
        "icon": "youtube",
        "text": [
          "Stories und Reels sind kurze Inhalte.",
          "Sie können schnell weitergesehen werden.",
          "Trotzdem können Menschen Screenshots machen."
        ],
        "remember": "Auch kurze Inhalte können privat sein."
      },
      {
        "title": "Standort",
        "module": "Modul Instagram",
        "icon": "data",
        "text": [
          "Der Standort zeigt, wo du bist.",
          "Nicht jeder muss wissen, wo du bist."
        ],
        "remember": "Ich teile meinen Standort nicht einfach."
      },
      {
        "title": "Private Nachrichten",
        "module": "Modul Instagram",
        "icon": "message",
        "text": [
          "Stell dir vor: Eine fremde Person schreibt dir privat.",
          "Die Person macht Komplimente.",
          "Dann fragt sie nach privaten Fotos.",
          "Das ist ein Warnzeichen."
        ],
        "remember": "Ich schicke fremden Personen keine privaten Fotos.",
        "practice": {
          "question": "Eine fremde Person fragt nach privaten Fotos. Was ist sicher?",
          "answers": [
            "Nicht schicken.",
            "Foto schicken.",
            "Adresse mitschicken."
          ],
          "correctIndex": 0
        }
      },
      {
        "title": "Kommentare",
        "module": "Modul Instagram",
        "icon": "message",
        "text": [
          "Kommentare können nett oder verletzend sein.",
          "Du musst nicht auf alles antworten."
        ],
        "remember": "Ich hole Hilfe bei verletzenden Kommentaren."
      },
      {
        "title": "Vergleichen",
        "module": "Modul Instagram",
        "icon": "help",
        "text": [
          "Auf Instagram sieht vieles perfekt aus.",
          "Bilder können bearbeitet sein.",
          "Du musst dich nicht vergleichen."
        ],
        "remember": "Ich bin mehr als ein Bild."
      },
      {
        "title": "Merken",
        "module": "Modul Instagram",
        "icon": "remember",
        "text": [
          "Diese Regeln helfen bei Instagram."
        ],
        "bullets": [
          "Foto prüfen.",
          "Standort nicht einfach teilen.",
          "Fremden nicht sofort antworten.",
          "Hilfe holen bei Druck."
        ],
        "remember": "Ich teile nur, was sich für mich sicher anfühlt."
      }
    ],
    "illustration": "assets/illustrations/instagram.svg",
    "quizQuestions": [
      {
        "question": "Was prüfst du vor dem Posten eines Fotos?",
        "answers": [
          "Was auf dem Foto zu sehen ist.",
          "Nur die Farbe.",
          "Gar nichts."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum ist der Standort wichtig?",
        "answers": [
          "Er zeigt, wo ich bin.",
          "Er ist immer egal.",
          "Er schützt mein Passwort."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine fremde Person fragt nach privaten Fotos. Was machst du?",
        "answers": [
          "Nicht schicken.",
          "Sofort schicken.",
          "Noch mehr Fotos schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was können Menschen mit Stories machen?",
        "answers": [
          "Screenshot machen.",
          "Nie speichern.",
          "Nur du siehst es immer."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Kommentar verletzt dich. Was hilft?",
        "answers": [
          "Hilfe holen.",
          "Zurück beleidigen.",
          "Allein bleiben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum sind bearbeitete Bilder wichtig?",
        "answers": [
          "Nicht alles ist echt.",
          "Alles ist immer echt.",
          "Bilder dürfen nie schön sein."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein sicherer Merksatz?",
        "answers": [
          "Erst prüfen. Dann teilen.",
          "Immer sofort posten.",
          "Standort immer zeigen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Wer darf deine privaten Fotos bekommen?",
        "answers": [
          "Nur wenn du es wirklich willst und es sicher ist.",
          "Jede fremde Person.",
          "Alle Gruppen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du bist unsicher bei einem Profil. Was machst du?",
        "answers": [
          "Eine Person fragen.",
          "Private Daten schicken.",
          "Alles glauben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist bei Instagram wichtig?",
        "answers": [
          "Privatsphäre beachten.",
          "Immer mehr Likes sammeln.",
          "Nie nachdenken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
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
      "Ich teile meinen Standort nicht einfach.",
      "Ich antworte fremden Personen nicht sofort.",
      "Ich hole Hilfe bei Druck oder verletzenden Kommentaren."
    ],
    "shortLessonIndexes": [
      0,
      1,
      3,
      5,
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
    "desc": "Videos ansehen, Kommentare und Werbung prüfen",
    "quiz": [
      {
        "question": "Was ist bei Videos wichtig?",
        "answers": [
          "Nicht alles sofort glauben.",
          "Alles glauben.",
          "Immer nachmachen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was will Werbung oft?",
        "answers": [
          "Dass ich etwas kaufe oder anklicke.",
          "Dass ich Pause mache.",
          "Dass ich mein Konto schütze."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Autoplay startet immer weiter. Was hilft?",
        "answers": [
          "Pause machen oder stoppen.",
          "Immer weiter schauen.",
          "Nie schlafen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine Challenge ist gefährlich. Was machst du?",
        "answers": [
          "Nicht nachmachen.",
          "Sofort nachmachen.",
          "Andere dazu drängen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Kommentare verletzen dich. Was ist gut?",
        "answers": [
          "Nicht allein bleiben und Hilfe holen.",
          "Zurück beleidigen.",
          "Alles glauben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was kann YouTube gut leisten?",
        "answers": [
          "Lernen, Musik, Hobbys.",
          "Immer Wahrheit zeigen.",
          "Passwörter schützen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Video macht Angst. Was kannst du tun?",
        "answers": [
          "Stoppen und Hilfe holen.",
          "Immer weiter schauen.",
          "Allen schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein sicherer Merksatz?",
        "answers": [
          "Prüfen, Pause machen, Hilfe holen.",
          "Alles anklicken.",
          "Nie fragen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was machst du bei Kauf-Versprechen?",
        "answers": [
          "Erst prüfen.",
          "Sofort kaufen.",
          "Kontodaten schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum sind Pausen wichtig?",
        "answers": [
          "Damit es mir gut geht.",
          "Damit Videos schneller werden.",
          "Damit Werbung gewinnt."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Modulstart",
        "icon": "youtube",
        "text": [
          "YouTube ist eine Plattform für Videos.",
          "Du kannst dort viel lernen und anschauen.",
          "Manche Inhalte sind Werbung oder falsch."
        ]
      },
      {
        "title": "Videos prüfen",
        "module": "Modul YouTube",
        "icon": "youtube",
        "text": [
          "Nicht jedes Video ist wahr.",
          "Manche Videos übertreiben.",
          "Manche Videos wollen nur Klicks."
        ],
        "remember": "Ich glaube nicht alles sofort."
      },
      {
        "title": "Werbung erkennen",
        "module": "Modul YouTube",
        "icon": "warning",
        "text": [
          "Stell dir vor: In einem Video wird ein Produkt gezeigt.",
          "Die Person sagt: Das musst du kaufen.",
          "Vielleicht ist das Werbung.",
          "Dann machst du langsam und kaufst nicht sofort."
        ],
        "remember": "Ich kaufe nichts sofort aus einem Video.",
        "examples": [
          "Ein Video verspricht ein tolles Ergebnis.",
          "Ein Link führt zu einem Kauf.",
          "Jemand sagt: Nur heute billig."
        ],
        "practice": {
          "question": "Ein Video sagt: Kauf das sofort. Was ist sicher?",
          "answers": [
            "Nicht sofort kaufen.",
            "Sofort kaufen.",
            "Kontodaten eingeben."
          ],
          "correctIndex": 0
        }
      },
      {
        "title": "Kommentare",
        "module": "Modul YouTube",
        "icon": "message",
        "text": [
          "Kommentare können nett oder verletzend sein.",
          "Du musst keine Kommentare lesen oder schreiben."
        ],
        "remember": "Ich muss nicht auf Kommentare antworten."
      },
      {
        "title": "Autoplay",
        "module": "Modul YouTube",
        "icon": "stop",
        "text": [
          "Stell dir vor: Du willst nur ein Video schauen.",
          "Dann startet automatisch das nächste Video.",
          "Plötzlich schaust du viel länger als geplant.",
          "Dann darfst du stoppen oder eine Pause machen."
        ],
        "remember": "Ich darf ein Video stoppen und Pause machen.",
        "practice": {
          "question": "YouTube startet immer neue Videos. Du bist müde. Was ist sicher?",
          "answers": [
            "Stoppen und Pause machen.",
            "Immer weiter schauen.",
            "Alle Videos teilen."
          ],
          "correctIndex": 0
        }
      },
      {
        "title": "Gefährliche Challenges",
        "module": "Modul YouTube",
        "icon": "warning",
        "text": [
          "Manche Videos zeigen gefährliche Mutproben.",
          "Nicht alles soll nachgemacht werden."
        ],
        "remember": "Ich mache gefährliche Dinge nicht nach."
      },
      {
        "title": "Gute Nutzung",
        "module": "Modul YouTube",
        "icon": "check",
        "text": [
          "YouTube kann auch hilfreich sein.",
          "Zum Beispiel für Musik, Rezepte, Lernen oder Hobbys."
        ],
        "remember": "Ich nutze YouTube so, dass es mir gut tut."
      },
      {
        "title": "Merken",
        "module": "Modul YouTube",
        "icon": "remember",
        "text": [
          "Diese Regeln helfen bei YouTube."
        ],
        "bullets": [
          "Nicht alles glauben.",
          "Werbung erkennen.",
          "Pausen machen.",
          "Gefährliche Dinge nicht nachmachen."
        ],
        "remember": "Ich prüfe Videos, Werbung und Kommentare."
      }
    ],
    "illustration": "assets/illustrations/youtube.svg",
    "quizQuestions": [
      {
        "question": "Was ist bei Videos wichtig?",
        "answers": [
          "Nicht alles sofort glauben.",
          "Alles glauben.",
          "Immer nachmachen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was will Werbung oft?",
        "answers": [
          "Dass ich etwas kaufe oder anklicke.",
          "Dass ich Pause mache.",
          "Dass ich mein Konto schütze."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Autoplay startet immer weiter. Was hilft?",
        "answers": [
          "Pause machen oder stoppen.",
          "Immer weiter schauen.",
          "Nie schlafen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine Challenge ist gefährlich. Was machst du?",
        "answers": [
          "Nicht nachmachen.",
          "Sofort nachmachen.",
          "Andere dazu drängen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Kommentare verletzen dich. Was ist gut?",
        "answers": [
          "Nicht allein bleiben und Hilfe holen.",
          "Zurück beleidigen.",
          "Alles glauben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was kann YouTube gut leisten?",
        "answers": [
          "Lernen, Musik, Hobbys.",
          "Immer Wahrheit zeigen.",
          "Passwörter schützen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Video macht Angst. Was kannst du tun?",
        "answers": [
          "Stoppen und Hilfe holen.",
          "Immer weiter schauen.",
          "Allen schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein sicherer Merksatz?",
        "answers": [
          "Prüfen, Pause machen, Hilfe holen.",
          "Alles anklicken.",
          "Nie fragen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was machst du bei Kauf-Versprechen?",
        "answers": [
          "Erst prüfen.",
          "Sofort kaufen.",
          "Kontodaten schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum sind Pausen wichtig?",
        "answers": [
          "Damit es mir gut geht.",
          "Damit Videos schneller werden.",
          "Damit Werbung gewinnt."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
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
      "Ich erkenne Werbung.",
      "Ich mache Pausen.",
      "Ich mache gefährliche Dinge nicht nach."
    ],
    "shortLessonIndexes": [
      0,
      1,
      3,
      5,
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
    "desc": "Snaps, Screenshots, Standort und Kontakte",
    "quiz": [
      {
        "question": "Warum können Snaps trotzdem riskant sein?",
        "answers": [
          "Jemand kann sie speichern.",
          "Sie sind immer sicher.",
          "Niemand sieht sie."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine fremde Person fragt nach deinem Standort. Was machst du?",
        "answers": [
          "Nicht schicken.",
          "Sofort schicken.",
          "Adresse senden."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Jemand macht Druck wegen einem Bild. Was ist sicher?",
        "answers": [
          "Nein sagen.",
          "Bild schicken.",
          "Noch mehr schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist bei Screenshots wichtig?",
        "answers": [
          "Sie können Inhalte speichern.",
          "Sie löschen alles.",
          "Sie schützen mein Konto."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Wer sollte deinen Standort sehen?",
        "answers": [
          "Nur wenn du es wirklich willst und es sicher ist.",
          "Alle Kontakte.",
          "Fremde Personen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein Warnzeichen?",
        "answers": [
          "Druck.",
          "Eine normale Frage.",
          "Ein freundlicher Gruß."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du bist unsicher bei einem Kontakt. Was hilft?",
        "answers": [
          "Eine vertraute Person fragen.",
          "Private Daten senden.",
          "Alles glauben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was darfst du sagen?",
        "answers": [
          "Nein.",
          "Immer Ja.",
          "Nie Hilfe."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein guter Merksatz?",
        "answers": [
          "Erst denken. Dann senden.",
          "Schnell schicken.",
          "Standort immer zeigen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was machst du bei komischen Nachrichten?",
        "answers": [
          "Nicht allein bleiben.",
          "Sofort antworten.",
          "Passwort schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Modulstart",
        "icon": "photo",
        "text": [
          "Snapchat ist eine App für Fotos, Videos und Nachrichten.",
          "Viele denken: Das verschwindet sofort.",
          "Aber andere können Inhalte trotzdem sichern."
        ]
      },
      {
        "title": "Snaps verschwinden nicht immer",
        "module": "Modul Snapchat",
        "icon": "photo",
        "text": [
          "Stell dir vor: Du sendest ein Bild über Snapchat.",
          "Du denkst: Das Bild verschwindet gleich.",
          "Aber jemand kann einen Screenshot machen.",
          "Darum sendest du nur Bilder, die sicher sind."
        ],
        "remember": "Ich sende nur Bilder, die wirklich sicher sind.",
        "practice": {
          "question": "Du willst ein sehr privates Bild senden. Was ist sicher?",
          "answers": [
            "Nicht senden.",
            "Senden, weil es verschwindet.",
            "An mehrere Personen senden."
          ],
          "correctIndex": 0
        }
      },
      {
        "title": "Screenshots",
        "module": "Modul Snapchat",
        "icon": "warning",
        "text": [
          "Screenshots können Inhalte speichern.",
          "Danach kann ein Bild weitergeschickt werden."
        ],
        "remember": "Ich denke vor dem Senden nach."
      },
      {
        "title": "Standort",
        "module": "Modul Snapchat",
        "icon": "data",
        "text": [
          "Stell dir vor: Eine App zeigt, wo du gerade bist.",
          "Andere können dann deinen Ort sehen.",
          "Das kann unsicher sein.",
          "Darum teilst du deinen Standort nicht einfach."
        ],
        "remember": "Ich teile meinen Standort nicht einfach.",
        "practice": {
          "question": "Eine fremde Person fragt: Wo bist du gerade? Was ist sicher?",
          "answers": [
            "Standort nicht schicken.",
            "Standort schicken.",
            "Adresse schicken."
          ],
          "correctIndex": 0
        }
      },
      {
        "title": "Kontakte",
        "module": "Modul Snapchat",
        "icon": "help",
        "text": [
          "Nicht jeder Kontakt ist eine vertraute Person.",
          "Fremde Personen können schreiben."
        ],
        "remember": "Ich prüfe Kontakte.",
        "practice": {
          "question": "Eine fremde Person fragt, wo du bist. Was ist sicher?",
          "answers": [
            "Nicht sagen und Hilfe holen.",
            "Standort schicken.",
            "Adresse schicken."
          ],
          "correctIndex": 0
        }
      },
      {
        "title": "Private Bilder",
        "module": "Modul Snapchat",
        "icon": "lock",
        "text": [
          "Private Bilder können weitergeleitet werden.",
          "Du darfst Nein sagen.",
          "Niemand darf dich unter Druck setzen."
        ],
        "remember": "Ich schicke keine privaten Bilder unter Druck."
      },
      {
        "title": "Druck und Mutproben",
        "module": "Modul Snapchat",
        "icon": "warning",
        "text": [
          "Manche Menschen machen Druck.",
          "Zum Beispiel: Schick das, sonst bin ich sauer.",
          "Das ist nicht in Ordnung."
        ],
        "remember": "Druck ist ein Warnzeichen."
      },
      {
        "title": "Merken",
        "module": "Modul Snapchat",
        "icon": "remember",
        "text": [
          "Diese Regeln helfen bei Snapchat."
        ],
        "bullets": [
          "Screenshots sind möglich.",
          "Standort schützen.",
          "Fremde Kontakte prüfen.",
          "Bei Druck Hilfe holen."
        ],
        "remember": "Ich sende nur, was wirklich sicher ist."
      }
    ],
    "illustration": "assets/illustrations/snapchat.svg",
    "quizQuestions": [
      {
        "question": "Warum können Snaps trotzdem riskant sein?",
        "answers": [
          "Jemand kann sie speichern.",
          "Sie sind immer sicher.",
          "Niemand sieht sie."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine fremde Person fragt nach deinem Standort. Was machst du?",
        "answers": [
          "Nicht schicken.",
          "Sofort schicken.",
          "Adresse senden."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Jemand macht Druck wegen einem Bild. Was ist sicher?",
        "answers": [
          "Nein sagen.",
          "Bild schicken.",
          "Noch mehr schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist bei Screenshots wichtig?",
        "answers": [
          "Sie können Inhalte speichern.",
          "Sie löschen alles.",
          "Sie schützen mein Konto."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Wer sollte deinen Standort sehen?",
        "answers": [
          "Nur wenn du es wirklich willst und es sicher ist.",
          "Alle Kontakte.",
          "Fremde Personen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein Warnzeichen?",
        "answers": [
          "Druck.",
          "Eine normale Frage.",
          "Ein freundlicher Gruß."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du bist unsicher bei einem Kontakt. Was hilft?",
        "answers": [
          "Eine vertraute Person fragen.",
          "Private Daten senden.",
          "Alles glauben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was darfst du sagen?",
        "answers": [
          "Nein.",
          "Immer Ja.",
          "Nie Hilfe."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein guter Merksatz?",
        "answers": [
          "Erst denken. Dann senden.",
          "Schnell schicken.",
          "Standort immer zeigen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was machst du bei komischen Nachrichten?",
        "answers": [
          "Nicht allein bleiben.",
          "Sofort antworten.",
          "Passwort schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
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
      "Screenshots sind möglich.",
      "Ich schütze meinen Standort.",
      "Ich prüfe Kontakte.",
      "Ich hole Hilfe bei Druck."
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
    "desc": "Videos, Trends, Kommentare und Algorithmus",
    "quiz": [
      {
        "question": "Was ist bei Trends wichtig?",
        "answers": [
          "Nicht alles nachmachen.",
          "Alles sofort machen.",
          "Nie überlegen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum zeigt TikTok ähnliche Videos?",
        "answers": [
          "TikTok merkt, was ich anschaue.",
          "TikTok kennt meine Gedanken.",
          "Videos kommen zufällig immer richtig."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Trend ist gefährlich. Was machst du?",
        "answers": [
          "Nicht nachmachen.",
          "Sofort nachmachen.",
          "Andere überreden."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine fremde Person fragt nach deiner Adresse. Was ist sicher?",
        "answers": [
          "Nicht schicken.",
          "Adresse schicken.",
          "In Kommentare schreiben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du schaust länger als geplant. Was hilft?",
        "answers": [
          "Pause machen.",
          "Immer weiterschauen.",
          "Nie stoppen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Kommentar verletzt dich. Was ist gut?",
        "answers": [
          "Hilfe holen.",
          "Zurück beleidigen.",
          "Alles allein klären."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Vor dem Posten eines Videos prüfst du:",
        "answers": [
          "Was zu sehen ist.",
          "Nur die Musik.",
          "Nichts."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein guter Merksatz?",
        "answers": [
          "Ich entscheide, was mir gut tut.",
          "TikTok bestimmt alles.",
          "Pausen sind schlecht."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was darfst du bei Druck machen?",
        "answers": [
          "Nein sagen.",
          "Immer mitmachen.",
          "Private Daten geben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was schützt dich?",
        "answers": [
          "Langsam machen und prüfen.",
          "Sofort klicken.",
          "Alles teilen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Modulstart",
        "icon": "youtube",
        "text": [
          "TikTok zeigt kurze Videos.",
          "Viele Videos kommen automatisch nacheinander.",
          "Du lernst, wie du sicher damit umgehen kannst."
        ]
      },
      {
        "title": "Trends",
        "module": "Modul TikTok",
        "icon": "youtube",
        "text": [
          "Stell dir vor: Viele machen bei einem Trend mit.",
          "Der Trend sieht lustig aus.",
          "Aber er kann gefährlich sein.",
          "Du musst nicht mitmachen."
        ],
        "remember": "Ich mache gefährliche Trends nicht nach.",
        "examples": [
          "Eine Mutprobe mit Verletzungsgefahr.",
          "Ein Trend mit gefährlichen Gegenständen.",
          "Ein Video, das Druck macht: Mach auch mit."
        ],
        "practice": {
          "question": "Ein Trend sieht gefährlich aus. Freunde sagen: Mach mit. Was ist sicher?",
          "answers": [
            "Nein sagen.",
            "Mitmachen.",
            "Andere überreden."
          ],
          "correctIndex": 0
        }
      },
      {
        "title": "Algorithmus",
        "module": "Modul TikTok",
        "icon": "data",
        "text": [
          "Stell dir vor: Du schaust viele traurige Videos.",
          "TikTok zeigt dir dann noch mehr ähnliche Videos.",
          "Das kann deine Stimmung verändern.",
          "Darum ist eine Pause manchmal wichtig."
        ],
        "remember": "Ich mache Pause, wenn mir Videos nicht gut tun.",
        "practice": {
          "question": "TikTok zeigt dir viele Videos, die dich traurig machen. Was hilft?",
          "answers": [
            "Pause machen.",
            "Immer weiter schauen.",
            "Private Daten schicken."
          ],
          "correctIndex": 0
        }
      },
      {
        "title": "Kommentare",
        "module": "Modul TikTok",
        "icon": "message",
        "text": [
          "Kommentare können freundlich oder verletzend sein.",
          "Du musst nicht auf alles reagieren."
        ],
        "remember": "Ich hole Hilfe bei verletzenden Kommentaren."
      },
      {
        "title": "Private Nachrichten",
        "module": "Modul TikTok",
        "icon": "message",
        "text": [
          "Auch fremde Menschen können schreiben.",
          "Manche wollen private Daten oder Bilder."
        ],
        "remember": "Ich gebe fremden Personen keine privaten Daten.",
        "practice": {
          "question": "Eine fremde Person fragt nach deiner Adresse. Was ist sicher?",
          "answers": [
            "Nicht schicken.",
            "Adresse schicken.",
            "Passwort mitschicken."
          ],
          "correctIndex": 0
        }
      },
      {
        "title": "Videos posten",
        "module": "Modul TikTok",
        "icon": "photo",
        "text": [
          "Wenn du ein Video postest, können es andere sehen.",
          "Andere können es speichern oder teilen."
        ],
        "remember": "Ich prüfe Videos vor dem Posten."
      },
      {
        "title": "Gefühle",
        "module": "Modul TikTok",
        "icon": "help",
        "text": [
          "Manche Videos machen Druck.",
          "Manche Videos machen traurig oder wütend.",
          "Dann ist eine Pause gut."
        ],
        "remember": "Ich darf TikTok weglegen."
      },
      {
        "title": "Merken",
        "module": "Modul TikTok",
        "icon": "remember",
        "text": [
          "Diese Regeln helfen bei TikTok."
        ],
        "bullets": [
          "Gefährliche Trends nicht nachmachen.",
          "Pausen machen.",
          "Private Daten schützen.",
          "Hilfe holen bei Druck."
        ],
        "remember": "Ich nutze TikTok so, dass es mir gut tut."
      }
    ],
    "illustration": "assets/illustrations/tiktok.svg",
    "quizQuestions": [
      {
        "question": "Was ist bei Trends wichtig?",
        "answers": [
          "Nicht alles nachmachen.",
          "Alles sofort machen.",
          "Nie überlegen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum zeigt TikTok ähnliche Videos?",
        "answers": [
          "TikTok merkt, was ich anschaue.",
          "TikTok kennt meine Gedanken.",
          "Videos kommen zufällig immer richtig."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Trend ist gefährlich. Was machst du?",
        "answers": [
          "Nicht nachmachen.",
          "Sofort nachmachen.",
          "Andere überreden."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Eine fremde Person fragt nach deiner Adresse. Was ist sicher?",
        "answers": [
          "Nicht schicken.",
          "Adresse schicken.",
          "In Kommentare schreiben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du schaust länger als geplant. Was hilft?",
        "answers": [
          "Pause machen.",
          "Immer weiterschauen.",
          "Nie stoppen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Ein Kommentar verletzt dich. Was ist gut?",
        "answers": [
          "Hilfe holen.",
          "Zurück beleidigen.",
          "Alles allein klären."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Vor dem Posten eines Videos prüfst du:",
        "answers": [
          "Was zu sehen ist.",
          "Nur die Musik.",
          "Nichts."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein guter Merksatz?",
        "answers": [
          "Ich entscheide, was mir gut tut.",
          "TikTok bestimmt alles.",
          "Pausen sind schlecht."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was darfst du bei Druck machen?",
        "answers": [
          "Nein sagen.",
          "Immer mitmachen.",
          "Private Daten geben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was schützt dich?",
        "answers": [
          "Langsam machen und prüfen.",
          "Sofort klicken.",
          "Alles teilen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
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
      "Ich gebe fremden Personen keine privaten Daten.",
      "Ich prüfe Videos vor dem Posten."
    ],
    "shortLessonIndexes": [
      0,
      1,
      3,
      5,
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
    "desc": "Stopp-Regel, Beweise sichern, Hilfe holen",
    "quiz": [
      {
        "question": "Was ist der erste Schritt bei einer komischen Nachricht?",
        "answers": [
          "Stopp. Nicht sofort reagieren.",
          "Sofort antworten.",
          "Alles allein klären."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum nicht sofort löschen?",
        "answers": [
          "Damit man die Nachricht zeigen kann.",
          "Weil Löschen verboten ist.",
          "Weil Nachrichten immer gut sind."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Jemand macht Druck. Was ist sicher?",
        "answers": [
          "Hilfe holen.",
          "Tun, was die Person sagt.",
          "Nichts sagen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Wer kann helfen?",
        "answers": [
          "Eine Person, der ich vertraue.",
          "Nur eine fremde Person im Internet.",
          "Niemand."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was kann ein Screenshot sein?",
        "answers": [
          "Ein Bild vom Bildschirm.",
          "Ein Passwort.",
          "Eine App."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du hast Angst. Was machst du?",
        "answers": [
          "Sofort Hilfe holen.",
          "Allein bleiben.",
          "Weiter schreiben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was bedeutet Stopp-Regel?",
        "answers": [
          "Erst anhalten und nicht sofort reagieren.",
          "Sofort alles senden.",
          "Immer weitermachen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was machst du mit einer beleidigenden Nachricht?",
        "answers": [
          "Zeigen und Hilfe holen.",
          "Zurück beleidigen.",
          "Passwort schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein guter Merksatz?",
        "answers": [
          "Stopp. Zeigen. Hilfe holen.",
          "Allein bleiben.",
          "Sofort klicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du verstehst eine Nachricht nicht. Was hilft?",
        "answers": [
          "Eine vertraute Person fragen.",
          "Raten und klicken.",
          "Private Daten schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Modulstart",
        "icon": "help",
        "text": [
          "In diesem Thema geht es um Probleme im Internet.",
          "Zum Beispiel komische Nachrichten, Druck oder Beleidigungen.",
          "Du lernst, was du dann tun kannst."
        ]
      },
      {
        "title": "Stopp-Regel",
        "module": "Modul Hilfe",
        "icon": "stop",
        "text": [
          "Stell dir vor: Eine Nachricht macht dir Stress.",
          "Du willst sofort antworten.",
          "Aber genau dann hilft die Stopp-Regel.",
          "Du hältst kurz an und holst Unterstützung."
        ],
        "remember": "Stopp. Nicht sofort reagieren.",
        "practice": {
          "question": "Eine Nachricht macht dir Angst. Was ist der erste Schritt?",
          "answers": [
            "Stopp machen.",
            "Sofort antworten.",
            "Alles allein klären."
          ],
          "correctIndex": 0
        }
      },
      {
        "title": "Nicht löschen",
        "module": "Modul Hilfe",
        "icon": "check",
        "text": [
          "Stell dir vor: Jemand beleidigt dich in einer Nachricht.",
          "Du möchtest die Nachricht sofort löschen.",
          "Aber die Nachricht kann wichtig sein, wenn du Hilfe holst.",
          "Darum zeigst du sie erst einer vertrauten Person."
        ],
        "remember": "Ich zeige die Nachricht, bevor ich sie lösche.",
        "practice": {
          "question": "Du bekommst eine beleidigende Nachricht. Was ist sicher?",
          "answers": [
            "Nicht sofort löschen.",
            "Sofort löschen und nichts sagen.",
            "Zurück beleidigen."
          ],
          "correctIndex": 0
        }
      },
      {
        "title": "Beweise sichern",
        "module": "Modul Hilfe",
        "icon": "photo",
        "text": [
          "Ein Screenshot kann helfen.",
          "Zum Beispiel bei Beleidigungen oder Druck.",
          "Bitte eine Person um Hilfe beim Screenshot."
        ],
        "remember": "Ich sichere Hilfe-Beweise mit Unterstützung."
      },
      {
        "title": "Wen fragen?",
        "module": "Modul Hilfe",
        "icon": "help",
        "text": [
          "Du kannst eine Person fragen, der du vertraust.",
          "Das kann im Wohnbereich, im Dienst oder in der Familie sein.",
          "Auch Digital-Begleiterinnen und Digital-Begleiter können helfen."
        ],
        "remember": "Ich frage eine vertraute Person."
      },
      {
        "title": "Wenn jemand Druck macht",
        "module": "Modul Hilfe",
        "icon": "warning",
        "text": [
          "Druck ist nicht in Ordnung.",
          "Zum Beispiel: Schick ein Bild. Sag es niemandem.",
          "Dann holst du Hilfe."
        ],
        "remember": "Druck ist ein Warnzeichen.",
        "practice": {
          "question": "Jemand schreibt: Sag es niemandem. Was ist sicher?",
          "answers": [
            "Hilfe holen.",
            "Allein bleiben.",
            "Sofort tun, was die Person will."
          ],
          "correctIndex": 0
        }
      },
      {
        "title": "Wenn du Angst hast",
        "module": "Modul Hilfe",
        "icon": "help",
        "text": [
          "Angst ist ernst.",
          "Du darfst sofort Hilfe holen.",
          "Du musst nichts allein beweisen."
        ],
        "remember": "Ich hole Hilfe, wenn ich Angst habe."
      },
      {
        "title": "Merken",
        "module": "Modul Hilfe",
        "icon": "remember",
        "text": [
          "Diese Regeln helfen bei Problemen im Internet."
        ],
        "bullets": [
          "Nicht sofort antworten.",
          "Nicht sofort löschen.",
          "Nachricht zeigen.",
          "Eine vertraute Person fragen."
        ],
        "remember": "Stopp. Zeigen. Hilfe holen."
      }
    ],
    "illustration": "assets/illustrations/hilfe.svg",
    "quizQuestions": [
      {
        "question": "Was ist der erste Schritt bei einer komischen Nachricht?",
        "answers": [
          "Stopp. Nicht sofort reagieren.",
          "Sofort antworten.",
          "Alles allein klären."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Warum nicht sofort löschen?",
        "answers": [
          "Damit man die Nachricht zeigen kann.",
          "Weil Löschen verboten ist.",
          "Weil Nachrichten immer gut sind."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Jemand macht Druck. Was ist sicher?",
        "answers": [
          "Hilfe holen.",
          "Tun, was die Person sagt.",
          "Nichts sagen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Wer kann helfen?",
        "answers": [
          "Eine Person, der ich vertraue.",
          "Nur eine fremde Person im Internet.",
          "Niemand."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was kann ein Screenshot sein?",
        "answers": [
          "Ein Bild vom Bildschirm.",
          "Ein Passwort.",
          "Eine App."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du hast Angst. Was machst du?",
        "answers": [
          "Sofort Hilfe holen.",
          "Allein bleiben.",
          "Weiter schreiben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was bedeutet Stopp-Regel?",
        "answers": [
          "Erst anhalten und nicht sofort reagieren.",
          "Sofort alles senden.",
          "Immer weitermachen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was machst du mit einer beleidigenden Nachricht?",
        "answers": [
          "Zeigen und Hilfe holen.",
          "Zurück beleidigen.",
          "Passwort schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Was ist ein guter Merksatz?",
        "answers": [
          "Stopp. Zeigen. Hilfe holen.",
          "Allein bleiben.",
          "Sofort klicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
      },
      {
        "question": "Du verstehst eine Nachricht nicht. Was hilft?",
        "answers": [
          "Eine vertraute Person fragen.",
          "Raten und klicken.",
          "Private Daten schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Richtig. Das ist eine sichere Entscheidung.",
        "feedbackWrong": "Das ist nicht die sicherste Antwort. Nutze den Hilfe-Button, wenn du unsicher bist."
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
      "Stopp. Nicht sofort reagieren.",
      "Nicht sofort löschen.",
      "Nachricht zeigen.",
      "Eine vertraute Person fragen."
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
