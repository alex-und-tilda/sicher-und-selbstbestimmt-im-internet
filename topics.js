const topics = [
  {
    "id": "datenschutz",
    "title": "Datenschutz",
    "icon": "lock",
    "desc": "Private Daten und Passwörter schützen",
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
        "feedbackCorrect": "Das ist richtig. Du lässt dich nicht hetzen.",
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
          "Hier lernst du etwas über Datenschutz.",
          "Du lernst: Welche Daten sind privat?",
          "Du übst sichere Entscheidungen.",
          "Du kannst den Hilfe-Button nutzen, wenn du unsicher bist."
        ]
      },
      {
        "title": "Was sind private Daten?",
        "module": "Grundwissen",
        "icon": "data",
        "text": [
          "Private Daten gehören zu dir.",
          "Sie sagen etwas über dich.",
          "Andere Menschen sollen diese Daten nicht einfach bekommen."
        ],
        "bullets": [
          "dein Name",
          "deine Adresse",
          "deine Telefon-Nummer",
          "dein Geburtstag",
          "deine Fotos",
          "dein Passwort"
        ],
        "remember": "Private Daten gehören zu mir."
      },
      {
        "title": "Besonders wichtige Daten",
        "module": "Grundwissen",
        "icon": "warning",
        "text": [
          "Manche Daten sind besonders wichtig.",
          "Mit diesen Daten können andere Menschen viel über dich erfahren.",
          "Darum schützt du diese Daten besonders gut."
        ],
        "bullets": [
          "Passwort",
          "PIN",
          "Adresse",
          "Telefon-Nummer",
          "Bank-Daten",
          "Ausweis-Daten"
        ],
        "remember": "Besonders wichtige Daten gebe ich nicht einfach weiter."
      },
      {
        "title": "Passwort bleibt geheim",
        "module": "Passwort",
        "icon": "lock",
        "text": [
          "Ein Passwort schützt dein Konto.",
          "Ein Passwort ist wie ein Schlüssel.",
          "Andere Menschen dürfen dein Passwort nicht benutzen."
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
        }
      },
      {
        "title": "Gutes Passwort",
        "module": "Passwort",
        "icon": "check",
        "text": [
          "Ein gutes Passwort ist lang.",
          "Es ist nicht dein Name.",
          "Es ist nicht dein Geburtstag.",
          "Buchstaben und Zahlen sind gut."
        ],
        "bullets": [
          "nicht dein Name",
          "nicht dein Geburtstag",
          "mindestens 10 Zeichen",
          "Buchstaben und Zahlen",
          "Sonderzeichen sind gut, zum Beispiel ! oder ?"
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
        }
      },
      {
        "title": "Adresse eingeben",
        "module": "Private Daten",
        "icon": "data",
        "text": [
          "Eine App fragt nach deiner Adresse.",
          "Du weißt nicht warum.",
          "Dann musst du nicht sofort etwas eintragen."
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
        }
      },
      {
        "title": "Telefon-Nummer und Geburtstag",
        "module": "Private Daten",
        "icon": "help",
        "text": [
          "Auch deine Telefon-Nummer ist privat.",
          "Auch dein Geburtstag kann privat sein.",
          "Diese Daten gibst du nicht überall ein."
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
        }
      },
      {
        "title": "Fotos prüfen",
        "module": "Fotos",
        "icon": "photo",
        "text": [
          "Du willst ein Foto verschicken.",
          "Auf dem Foto sieht man vielleicht private Dinge.",
          "Zum Beispiel: dein Zimmer oder einen Brief."
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
        }
      },
      {
        "title": "Fremde Links und Nachrichten",
        "module": "Nachrichten",
        "icon": "link",
        "text": [
          "Manche Nachrichten wollen private Daten bekommen.",
          "Manche Nachrichten enthalten einen Link.",
          "Ein fremder Link kann gefährlich sein."
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
        }
      },
      {
        "title": "Druck erkennen",
        "module": "Nachrichten",
        "icon": "warning",
        "text": [
          "Manche Nachrichten machen Druck.",
          "Sie wollen, dass du schnell handelst.",
          "Druck ist ein Warnzeichen."
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
          "feedbackCorrect": "Das ist sicher. Du lässt dich nicht hetzen.",
          "remember": "Ich mache langsam, wenn eine Nachricht Druck macht."
        }
      },
      {
        "title": "Was kann ich tun?",
        "module": "Handlungsplan",
        "icon": "help",
        "text": [
          "Eine Nachricht ist komisch.",
          "Oder eine Nachricht macht Druck.",
          "Dann hilft ein Plan."
        ],
        "bullets": [
          "Ich antworte nicht sofort.",
          "Ich klicke nicht auf Links.",
          "Ich gebe keine privaten Daten ein.",
          "Ich mache eine Pause.",
          "Ich frage eine Person, der ich vertraue."
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
        }
      },
      {
        "title": "Das merke ich mir",
        "module": "Zusammenfassung",
        "icon": "remember",
        "text": [
          "Das sind die wichtigsten Regeln aus diesem Thema."
        ],
        "bullets": [
          "Private Daten gehören zu mir.",
          "Mein Passwort bleibt geheim.",
          "Ich nehme ein gutes, langes Passwort.",
          "Ich gebe meine Adresse nicht einfach weiter.",
          "Ich prüfe Fotos vor dem Senden.",
          "Ich öffne fremde Links nicht sofort.",
          "Ich mache langsam, wenn eine Nachricht Druck macht.",
          "Ich darf mir Unterstützung holen."
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
        "feedbackCorrect": "Das ist richtig. Du lässt dich nicht hetzen.",
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
    "quiz": [
      {
        "question": "Eine fremde Nummer schreibt dir. Was ist besser?",
        "answers": [
          "Sofort private Daten schicken.",
          "Nicht sofort antworten."
        ],
        "correctIndex": 1,
        "feedbackWrong": "Das ist nicht sicher. Fremde Nummern können täuschen.",
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
          "Hier lernst du etwas über WhatsApp.",
          "Du übst sichere Entscheidungen.",
          "Du kannst den Hilfe-Button nutzen, wenn du unsicher bist."
        ]
      },
      {
        "title": "WhatsApp nutzen",
        "module": "Grundwissen",
        "icon": "message",
        "text": [
          "Mit WhatsApp kannst du Nachrichten schreiben.",
          "Du kannst Bilder und Sprachnachrichten senden.",
          "Du kannst in Gruppen schreiben."
        ],
        "remember": "Ich entscheide, wem ich antworte."
      },
      {
        "title": "Fremde Nummer",
        "module": "Nachrichten",
        "icon": "warning",
        "text": [
          "Eine fremde Nummer schreibt dir.",
          "Du weißt nicht, wer das ist.",
          "Du antwortest nicht sofort."
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
          "feedbackWrong": "Das ist nicht sicher. Fremde Nummern können täuschen.",
          "feedbackCorrect": "Das ist sicher. Du gibst keine privaten Daten an eine fremde Nummer.",
          "remember": "Ich antworte fremden Nummern nicht sofort."
        }
      },
      {
        "title": "Geld und Betrug",
        "module": "Nachrichten",
        "icon": "warning",
        "text": [
          "Manche Nachrichten fragen nach Geld.",
          "Fremde Nummern können sich als Bekannte ausgeben.",
          "Ein bekannter Trick ist: Hallo Mama, ich habe eine neue Nummer. Ich brauche Geld.",
          "Auch Sprachnachrichten können mit KI gefälscht sein.",
          "Du schickst kein Geld an fremde Nummern."
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
        }
      },
      {
        "title": "Links in Nachrichten",
        "module": "Links",
        "icon": "link",
        "text": [
          "Ein Link führt zu einer Internet-Seite.",
          "Manche Links sind gefährlich.",
          "Du klickst nicht sofort auf unbekannte Links."
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
        }
      },
      {
        "title": "WhatsApp-Code",
        "module": "Code",
        "icon": "lock",
        "text": [
          "Du bekommst manchmal einen Code per SMS.",
          "Der Code schützt dein WhatsApp.",
          "Du gibst den Code nicht weiter."
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
        }
      },
      {
        "title": "Gruppen",
        "module": "Gruppen",
        "icon": "message",
        "text": [
          "In Gruppen lesen viele Menschen mit.",
          "Nicht alles gehört in eine Gruppe.",
          "Private Dinge schreibst du nicht in eine Gruppe."
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
        }
      },
      {
        "title": "Fotos senden",
        "module": "Fotos",
        "icon": "photo",
        "text": [
          "Ein Foto kann weitergeschickt werden.",
          "Ein Foto kann privat sein.",
          "Du fragst, bevor du ein Foto von anderen sendest."
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
        }
      },
      {
        "title": "Stress und Druck",
        "module": "Stress",
        "icon": "stop",
        "text": [
          "Eine Nachricht macht dir Stress oder Angst.",
          "Du musst nicht sofort antworten.",
          "Du darfst eine Pause machen."
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
        }
      },
      {
        "title": "Die KI in WhatsApp",
        "module": "KI",
        "icon": "understand",
        "text": [
          "In WhatsApp gibt es jetzt eine KI. Sie heißt Meta AI.",
          "Du erkennst sie an einem blauen Kreis.",
          "Die KI ist kein Mensch. Sie ist ein Programm.",
          "Du musst die KI nicht benutzen."
        ],
        "bullets": [
          "Die KI kann Fragen beantworten.",
          "Die KI kann Fehler machen.",
          "Schreibe der KI keine privaten Dinge."
        ],
        "remember": "Die KI in WhatsApp ist kein Mensch."
      },
      {
        "title": "Was kann ich tun?",
        "module": "Handlungsplan",
        "icon": "help",
        "text": [
          "Etwas ist komisch oder macht dir Druck.",
          "Du reagierst nicht sofort.",
          "Du zeigst die Nachricht einer vertrauten Person."
        ],
        "bullets": [
          "Stopp machen.",
          "Nicht sofort antworten.",
          "Link nicht öffnen.",
          "Hilfe-Button nutzen."
        ]
      },
      {
        "title": "Das merke ich mir",
        "module": "Zusammenfassung",
        "icon": "remember",
        "text": [
          "Das sind die wichtigsten Regeln aus diesem Thema."
        ],
        "bullets": [
          "Fremde Nummern prüfen.",
          "Kein Geld an fremde Nummern schicken.",
          "Unbekannte Links nicht öffnen.",
          "Codes nicht weitergeben.",
          "Fotos prüfen.",
          "Bei Stress Hilfe holen."
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
        "feedbackWrong": "Das ist nicht sicher. Fremde Nummern können täuschen.",
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
          "Hier lernst du etwas über Facebook.",
          "Du übst sichere Entscheidungen.",
          "Du kannst den Hilfe-Button nutzen, wenn du unsicher bist."
        ]
      },
      {
        "title": "Profil",
        "module": "Profil",
        "icon": "data",
        "text": [
          "Im Profil stehen Informationen über dich.",
          "Nicht alles muss dort stehen.",
          "Private Informationen sollen nicht öffentlich sein."
        ],
        "examples": [
          "Adresse",
          "Telefon-Nummer",
          "Geburtstag",
          "private Fotos"
        ],
        "remember": "Ich zeige nicht alles in meinem Profil."
      },
      {
        "title": "Beitrag schreiben",
        "module": "Beiträge",
        "icon": "message",
        "text": [
          "Du willst etwas schreiben.",
          "Viele Menschen können den Beitrag sehen.",
          "Darum prüfst du vorher, was du schreibst."
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
        }
      },
      {
        "title": "Wer darf etwas sehen?",
        "module": "Einstellungen",
        "icon": "lock",
        "text": [
          "Du kannst einstellen, wer einen Beitrag sehen darf.",
          "Das nennt man private Einstellungen.",
          "Du kannst dir bei den Einstellungen helfen lassen."
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
        }
      },
      {
        "title": "Freundschafts-Anfragen",
        "module": "Kontakte",
        "icon": "help",
        "text": [
          "Eine unbekannte Person sendet eine Anfrage.",
          "Du weißt nicht, wer das ist.",
          "Du musst die Anfrage nicht annehmen."
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
        }
      },
      {
        "title": "Kommentare schreiben",
        "module": "Kommentare",
        "icon": "message",
        "text": [
          "Kommentare können andere Menschen verletzen.",
          "Du musst nicht auf alles antworten.",
          "Freundlich bleiben ist wichtig."
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
        }
      },
      {
        "title": "Beleidigungen",
        "module": "Probleme",
        "icon": "warning",
        "text": [
          "Im Internet kann es Streit geben.",
          "Beleidigungen sind nicht in Ordnung.",
          "Du musst nicht zurück beleidigen."
        ],
        "bullets": [
          "Nachricht zeigen.",
          "Blockieren.",
          "Melden.",
          "Unterstützung holen."
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
        }
      },
      {
        "title": "Fotos mit anderen Personen",
        "module": "Fotos",
        "icon": "photo",
        "text": [
          "Ein Foto zeigt andere Menschen.",
          "Nicht jeder möchte im Internet sein.",
          "Du fragst erst, bevor du ein Foto postest."
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
        }
      },
      {
        "title": "Das merke ich mir",
        "module": "Zusammenfassung",
        "icon": "remember",
        "text": [
          "Das sind die wichtigsten Regeln aus diesem Thema."
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
          "Hier lernst du etwas über Instagram.",
          "Du übst sichere Entscheidungen.",
          "Du kannst den Hilfe-Button nutzen, wenn du unsicher bist."
        ]
      },
      {
        "title": "Foto posten",
        "module": "Fotos",
        "icon": "photo",
        "text": [
          "Du willst ein Foto posten.",
          "Andere Menschen können das Foto sehen.",
          "Manchmal sieht man mehr, als man denkt."
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
        }
      },
      {
        "title": "Andere Personen auf Fotos",
        "module": "Fotos",
        "icon": "help",
        "text": [
          "Auf dem Foto sind andere Personen.",
          "Nicht alle wollen im Internet stehen.",
          "Du fragst vorher oder nimmst ein anderes Foto."
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
        }
      },
      {
        "title": "Kurze Videos und Stories",
        "module": "Stories",
        "icon": "help",
        "text": [
          "Kurze Videos können viele Menschen sehen.",
          "Andere können ein Bild vom Bildschirm machen.",
          "Auch kurze Videos können privat sein."
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
        }
      },
      {
        "title": "Standort",
        "module": "Standort",
        "icon": "data",
        "text": [
          "Der Standort zeigt, wo du bist.",
          "Nicht jeder muss wissen, wo du bist.",
          "Du teilst deinen Standort nicht einfach."
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
        }
      },
      {
        "title": "Private Nachrichten",
        "module": "Nachrichten",
        "icon": "message",
        "text": [
          "Eine fremde Person schreibt dir privat.",
          "Die Person fragt vielleicht nach privaten Fotos oder Daten.",
          "Das ist ein Warnzeichen."
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
        }
      },
      {
        "title": "Verletzende Kommentare",
        "module": "Kommentare",
        "icon": "warning",
        "text": [
          "Kommentare können nett sein.",
          "Kommentare können auch verletzen.",
          "Du musst nicht auf alles antworten."
        ],
        "bullets": [
          "Nachricht zeigen.",
          "Blockieren.",
          "Melden.",
          "Darüber sprechen."
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
        }
      },
      {
        "title": "Bearbeitete Bilder",
        "module": "Medien prüfen",
        "icon": "check",
        "text": [
          "Auf Instagram sieht vieles perfekt aus.",
          "Bilder können bearbeitet sein.",
          "Nicht alles ist echt."
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
        }
      },
      {
        "title": "Was kann ich tun?",
        "module": "Handlungsplan",
        "icon": "help",
        "text": [
          "Ein Profil oder eine Nachricht ist komisch.",
          "Du machst Stopp und antwortest nicht sofort.",
          "Du zeigst es einer vertrauten Person."
        ],
        "bullets": [
          "Stopp machen.",
          "Nicht sofort antworten.",
          "Profil oder Nachricht zeigen.",
          "Hilfe-Button nutzen."
        ]
      },
      {
        "title": "Das merke ich mir",
        "module": "Zusammenfassung",
        "icon": "remember",
        "text": [
          "Das sind die wichtigsten Regeln aus diesem Thema."
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
          "Hier lernst du etwas über YouTube.",
          "Du übst sichere Entscheidungen.",
          "Du kannst den Hilfe-Button nutzen, wenn du unsicher bist."
        ]
      },
      {
        "title": "Videos prüfen",
        "module": "Videos",
        "icon": "help",
        "text": [
          "Nicht jedes Video ist wahr.",
          "Manche Videos übertreiben oder lügen.",
          "Du glaubst nicht alles sofort."
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
        }
      },
      {
        "title": "Werbung erkennen",
        "module": "Werbung",
        "icon": "warning",
        "text": [
          "In vielen Videos gibt es Werbung.",
          "Werbung will, dass du etwas kaufst.",
          "Du kaufst nicht sofort."
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
        }
      },
      {
        "title": "Autoplay und Zeit",
        "module": "Pausen",
        "icon": "stop",
        "text": [
          "YouTube spielt oft automatisch das nächste Video ab.",
          "Du merkst: Ich schaue schon lange.",
          "Du darfst stoppen und Pause machen."
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
        }
      },
      {
        "title": "Gefährliche Mutproben",
        "module": "Gefahr",
        "icon": "warning",
        "text": [
          "Manche Videos zeigen gefährliche Mutproben.",
          "Du musst das nicht nachmachen.",
          "Deine Gesundheit ist wichtiger."
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
        }
      },
      {
        "title": "Videos, die Angst machen",
        "module": "Gefühle",
        "icon": "help",
        "text": [
          "Manche Videos machen Angst oder Stress.",
          "Du darfst das Video stoppen.",
          "Du kannst mit einer vertrauten Person darüber sprechen."
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
        }
      },
      {
        "title": "Kommentare",
        "module": "Kommentare",
        "icon": "message",
        "text": [
          "Kommentare können nett sein.",
          "Kommentare können auch verletzen.",
          "Du musst nicht lesen oder antworten."
        ],
        "remember": "Ich muss nicht auf Kommentare reagieren."
      },
      {
        "title": "Nicht jedes Video ist echt",
        "module": "KI",
        "icon": "warning",
        "text": [
          "Manche Videos sind mit KI gemacht.",
          "Sie sehen echt aus. Aber sie sind gefälscht.",
          "Auch bekannte Menschen werden gefälscht.",
          "Mehr dazu lernst du im Thema: Fake News und KI-Fakes."
        ],
        "remember": "Auch Videos können gefälscht sein."
      },
      {
        "title": "Was kann ich tun?",
        "module": "Handlungsplan",
        "icon": "help",
        "text": [
          "Ein Video macht dir Angst oder setzt dich unter Druck.",
          "Du machst Stopp.",
          "Du zeigst das Video einer vertrauten Person."
        ],
        "bullets": [
          "Video stoppen.",
          "Nicht nachmachen.",
          "Pause machen.",
          "Unterstützung holen."
        ]
      },
      {
        "title": "Das merke ich mir",
        "module": "Zusammenfassung",
        "icon": "remember",
        "text": [
          "Das sind die wichtigsten Regeln aus diesem Thema."
        ],
        "bullets": [
          "Videos prüfen.",
          "Werbung erkennen.",
          "Nicht jedes Video ist echt.",
          "Pausen machen.",
          "Gefährliche Dinge nicht nachmachen."
        ]
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
          "Hier lernst du etwas über Snapchat.",
          "Du übst sichere Entscheidungen.",
          "Du kannst den Hilfe-Button nutzen, wenn du unsicher bist."
        ]
      },
      {
        "title": "Bilder verschwinden nicht immer",
        "module": "Bilder",
        "icon": "photo",
        "text": [
          "Du sendest ein Bild.",
          "Es ist nur kurz zu sehen.",
          "Trotzdem kann jemand das Bild speichern."
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
        }
      },
      {
        "title": "Bild vom Bildschirm",
        "module": "Bilder",
        "icon": "photo",
        "text": [
          "Jemand kann ein Bild vom Bildschirm machen.",
          "So kann dein Bild gespeichert werden.",
          "So kann dein Bild weitergeschickt werden."
        ],
        "remember": "Ich denke vor dem Senden nach."
      },
      {
        "title": "Sehr private Bilder",
        "module": "Private Bilder",
        "icon": "lock",
        "text": [
          "Manche Bilder sind sehr privat.",
          "Niemand darf dich zu solchen Bildern drängen.",
          "Du darfst Nein sagen."
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
        }
      },
      {
        "title": "Standort",
        "module": "Standort",
        "icon": "data",
        "text": [
          "Snapchat kann zeigen, wo du bist.",
          "Andere können deinen Ort sehen.",
          "Das kann unsicher sein."
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
        }
      },
      {
        "title": "Kontakte",
        "module": "Kontakte",
        "icon": "help",
        "text": [
          "Nicht jeder Kontakt ist vertraut.",
          "Fremde Personen können schreiben.",
          "Du musst nicht antworten."
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
        }
      },
      {
        "title": "Druck erkennen",
        "module": "Druck",
        "icon": "warning",
        "text": [
          "Jemand sagt: Schick das Bild, aber sag es niemandem.",
          "Das ist Druck und ein Warnzeichen.",
          "Du darfst Nein sagen und Hilfe holen."
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
        }
      },
      {
        "title": "Was kann ich tun?",
        "module": "Handlungsplan",
        "icon": "help",
        "text": [
          "Eine Nachricht macht dir Druck.",
          "Du sendest kein Bild.",
          "Du zeigst die Nachricht einer vertrauten Person."
        ],
        "bullets": [
          "Nein sagen.",
          "Kein Bild senden.",
          "Nachricht zeigen.",
          "Unterstützung holen."
        ]
      },
      {
        "title": "Das merke ich mir",
        "module": "Zusammenfassung",
        "icon": "remember",
        "text": [
          "Das sind die wichtigsten Regeln aus diesem Thema."
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
          "Hier lernst du etwas über TikTok.",
          "Du übst sichere Entscheidungen.",
          "Du kannst den Hilfe-Button nutzen, wenn du unsicher bist."
        ]
      },
      {
        "title": "Trends",
        "module": "Trends",
        "icon": "help",
        "text": [
          "Viele Menschen machen bei Trends mit.",
          "Manche Trends sind lustig.",
          "Manche Trends sind gefährlich."
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
        }
      },
      {
        "title": "Ähnliche Videos",
        "module": "Algorithmus",
        "icon": "data",
        "text": [
          "TikTok merkt, was du anschaust.",
          "Dann zeigt TikTok ähnliche Videos.",
          "So kannst du schnell lange schauen."
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
        }
      },
      {
        "title": "Gefährliche Trends erkennen",
        "module": "Trends",
        "icon": "warning",
        "text": [
          "Ein Trend sieht gefährlich aus.",
          "Oder ein Trend tut weh.",
          "Du machst nicht mit."
        ],
        "remember": "Ich muss nicht bei jedem Trend mitmachen."
      },
      {
        "title": "Private Nachrichten",
        "module": "Nachrichten",
        "icon": "message",
        "text": [
          "Fremde Personen können dir schreiben.",
          "Sie können nach Adresse, Fotos oder anderen Daten fragen.",
          "Du gibst solche Daten nicht weiter."
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
        }
      },
      {
        "title": "Videos posten",
        "module": "Videos",
        "icon": "photo",
        "text": [
          "Andere können dein Video sehen und speichern.",
          "Du prüfst das Video vorher.",
          "Du postest nichts, was dir später schadet."
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
        }
      },
      {
        "title": "Kommentare",
        "module": "Kommentare",
        "icon": "message",
        "text": [
          "Kommentare können nett sein.",
          "Kommentare können verletzend sein.",
          "Du musst nicht antworten."
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
        }
      },
      {
        "title": "Gefühle und Pausen",
        "module": "Gefühle",
        "icon": "help",
        "text": [
          "Manche Videos machen traurig, wütend oder nervös.",
          "Du darfst TikTok schließen.",
          "Du kannst mit jemandem über deine Gefühle sprechen."
        ],
        "remember": "Ich darf TikTok weglegen."
      },
      {
        "title": "Nicht jedes Video ist echt",
        "module": "KI",
        "icon": "warning",
        "text": [
          "Viele Videos auf TikTok sind mit KI gemacht.",
          "Sie sehen echt aus. Aber sie sind gefälscht.",
          "Auch Stimmen und Gesichter können gefälscht sein.",
          "Mehr dazu lernst du im Thema: Fake News und KI-Fakes."
        ],
        "remember": "Auch Videos können gefälscht sein."
      },
      {
        "title": "Was kann ich tun?",
        "module": "Handlungsplan",
        "icon": "help",
        "text": [
          "Gefährlicher Trend, komischer Kommentar oder Druck?",
          "Du machst Stopp.",
          "Du zeigst die Nachricht oder das Video einer vertrauten Person."
        ],
        "bullets": [
          "Nicht nachmachen.",
          "Keine privaten Daten senden.",
          "Pause machen.",
          "Unterstützung holen."
        ]
      },
      {
        "title": "Das merke ich mir",
        "module": "Zusammenfassung",
        "icon": "remember",
        "text": [
          "Das sind die wichtigsten Regeln aus diesem Thema."
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
          "Hier lernst du etwas über Hilfe bei Problemen im Internet.",
          "Du übst sichere Entscheidungen.",
          "Du kannst den Hilfe-Button nutzen, wenn du unsicher bist."
        ]
      },
      {
        "title": "Stopp-Regel",
        "module": "Stopp",
        "icon": "stop",
        "text": [
          "Eine Nachricht macht dir Stress oder Angst.",
          "Du willst vielleicht sofort reagieren.",
          "Die Stopp-Regel hilft: Erst stoppen, dann überlegen."
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
        }
      },
      {
        "title": "Nicht sofort löschen",
        "module": "Beweise",
        "icon": "check",
        "text": [
          "Eine Nachricht ist gemein oder komisch.",
          "Du willst sie vielleicht löschen.",
          "Manchmal ist es wichtig, die Nachricht erst zu zeigen."
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
        }
      },
      {
        "title": "Bild vom Bildschirm",
        "module": "Beweise",
        "icon": "photo",
        "text": [
          "Ein Bild vom Bildschirm kann helfen.",
          "So kannst du eine Nachricht später zeigen.",
          "Du kannst jemanden um Hilfe beim Screenshot bitten."
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
        }
      },
      {
        "title": "Druck erkennen",
        "module": "Druck",
        "icon": "warning",
        "text": [
          "Jemand sagt: Mach das sofort.",
          "Oder: Erzähl es niemandem.",
          "Das ist Druck und ein Warnzeichen."
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
        }
      },
      {
        "title": "Angst ernst nehmen",
        "module": "Gefühle",
        "icon": "help",
        "text": [
          "Eine Nachricht macht dir Angst.",
          "Oder du hast ein komisches Gefühl.",
          "Das ist wichtig."
        ],
        "remember": "Meine Gefühle sind wichtig."
      },
      {
        "title": "Vertraute Personen",
        "module": "Unterstützung",
        "icon": "help",
        "text": [
          "Du kannst eine vertraute Person fragen.",
          "Zum Beispiel eine Unterstützerin, einen Unterstützer, Angehörige oder Freunde.",
          "Du musst Probleme im Internet nicht allein lösen."
        ],
        "practice": {
          "question": "Zu wem kannst du mit einer komischen Nachricht gehen?",
          "answers": [
            "Zu einer vertrauten Person.",
            "Zu niemandem."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht sicher. Du musst das nicht allein schaffen.",
          "feedbackCorrect": "Das ist sicher. Eine vertraute Person kann helfen.",
          "remember": "Ich darf mir Unterstützung holen."
        }
      },
      {
        "title": "Was kann ich konkret tun?",
        "module": "Handlungsplan",
        "icon": "help",
        "text": [
          "Wenn etwas komisch ist, hilft ein Plan.",
          "Du machst einen Schritt nach dem anderen.",
          "Du musst nicht alles allein entscheiden."
        ],
        "bullets": [
          "Stopp machen.",
          "Nicht sofort antworten.",
          "Nicht sofort löschen.",
          "Bild vom Bildschirm machen.",
          "Nachricht zeigen.",
          "Gemeinsam den nächsten Schritt planen."
        ]
      },
      {
        "title": "Externe Hilfe",
        "module": "Unterstützung",
        "icon": "help",
        "text": [
          "Es gibt Beratungsstellen und Hilfsangebote.",
          "Eine vertraute Person kann mit dir dort anrufen oder schreiben.",
          "Du musst das nicht allein machen."
        ],
        "remember": "Auch externe Hilfe ist möglich."
      },
      {
        "title": "Das merke ich mir",
        "module": "Zusammenfassung",
        "icon": "remember",
        "text": [
          "Das sind die wichtigsten Regeln aus diesem Thema."
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
      "Macht mir die Nachricht Angst?",
      "Macht jemand Druck?",
      "Soll ich die Nachricht zeigen?",
      "Wer ist eine vertraute Person?"
    ],
    "memoryRules": [
      "Ich mache Stopp.",
      "Ich antworte nicht sofort.",
      "Ich lösche nicht sofort.",
      "Ich zeige die Nachricht.",
      "Ich hole Unterstützung."
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
    "illustration": "assets/illustrations/ki.svg",
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "ki",
        "text": [
          "Hier lernst du etwas über KI.",
          "KI bedeutet: Künstliche Intelligenz.",
          "Du lernst: Was kann KI? Was kann KI nicht?",
          "Du lernst, wie du KI sicher nutzt."
        ]
      },
      {
        "title": "Was ist KI?",
        "module": "Grundwissen",
        "icon": "understand",
        "text": [
          "KI ist ein Computer-Programm.",
          "Das Programm hat sehr viele Texte und Bilder gelernt.",
          "Darum kann KI Fragen beantworten.",
          "KI kann auch Texte und Bilder machen."
        ],
        "bullets": [
          "KI kann mit dir schreiben.",
          "KI kann mit dir sprechen.",
          "KI kann Bilder machen.",
          "KI kann Texte schreiben."
        ],
        "remember": "KI ist ein Programm. KI ist kein Mensch."
      },
      {
        "title": "Wo triffst du KI?",
        "module": "Grundwissen",
        "icon": "example",
        "text": [
          "KI ist heute in vielen Apps.",
          "Manchmal siehst du KI nicht sofort.",
          "Hier sind bekannte Beispiele."
        ],
        "bullets": [
          "Chatbots, zum Beispiel ChatGPT",
          "Sprach-Hilfen, zum Beispiel Alexa oder Siri",
          "KI in WhatsApp und Instagram, zum Beispiel Meta AI",
          "KI-Bilder und KI-Videos im Internet"
        ],
        "remember": "KI ist in vielen Apps. Auch wenn ich sie nicht sehe."
      },
      {
        "title": "Ein Chatbot ist kein Mensch",
        "module": "Grundwissen",
        "icon": "message",
        "text": [
          "Ein Chatbot schreibt sehr freundlich.",
          "Es kann sich wie ein Freund anfühlen.",
          "Aber ein Chatbot ist ein Programm.",
          "Ein Chatbot hat keine Gefühle."
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
        }
      },
      {
        "title": "KI macht Fehler",
        "module": "Sicher nutzen",
        "icon": "warning",
        "text": [
          "KI klingt oft sehr sicher.",
          "Aber KI kann Fehler machen.",
          "Manchmal erfindet KI sogar Dinge.",
          "Darum prüfst du wichtige Antworten."
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
        }
      },
      {
        "title": "Keine privaten Daten",
        "module": "Sicher nutzen",
        "icon": "lock",
        "text": [
          "Was du der KI schreibst, wird oft gespeichert.",
          "Darum gibst du der KI keine privaten Daten."
        ],
        "bullets": [
          "kein Passwort",
          "keine Adresse",
          "keine Bank-Daten",
          "keine sehr privaten Geheimnisse"
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
        }
      },
      {
        "title": "Gesundheit und Geld",
        "module": "Sicher nutzen",
        "icon": "help",
        "text": [
          "Bei Gesundheit und Geld ist Vorsicht wichtig.",
          "Die KI kennt dich nicht.",
          "Die KI kann falsche Tipps geben.",
          "Frag bei solchen Themen immer auch einen Menschen."
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
        }
      },
      {
        "title": "KI kann Bilder und Stimmen fälschen",
        "module": "Achtung",
        "icon": "photo",
        "text": [
          "KI kann Bilder machen, die echt aussehen.",
          "KI kann Stimmen nachmachen.",
          "Betrüger nutzen das manchmal.",
          "Mehr dazu lernst du im Thema: Fake News und KI-Fakes."
        ],
        "warning": "Nicht alles, was echt aussieht, ist echt."
      },
      {
        "title": "Was kann ich tun?",
        "module": "Hilfe",
        "icon": "check",
        "text": [
          "Du darfst KI benutzen.",
          "KI kann dir helfen.",
          "Diese Regeln schützen dich."
        ],
        "bullets": [
          "Ich weiß: KI ist ein Programm.",
          "Ich prüfe wichtige Antworten.",
          "Ich gebe keine privaten Daten ein.",
          "Bei Gesundheit und Geld frage ich Menschen.",
          "Bei Unsicherheit hole ich Hilfe."
        ]
      },
      {
        "title": "Das merke ich mir",
        "module": "Merken",
        "icon": "remember",
        "text": [
          "Du hast viel über KI gelernt.",
          "Diese Sätze kannst du dir merken."
        ],
        "bullets": [
          "KI ist ein Programm. Kein Mensch.",
          "KI kann Fehler machen.",
          "Ich prüfe wichtige Antworten.",
          "Private Daten bleiben bei mir.",
          "Ich darf mir Unterstützung holen."
        ],
        "remember": "Ich nutze KI mit Verstand."
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
    "illustration": "assets/illustrations/fakes.svg",
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "fake",
        "text": [
          "Hier lernst du etwas über Fakes.",
          "Fake bedeutet: gefälscht oder nicht echt.",
          "Du lernst: Wie erkenne ich falsche Nachrichten?",
          "Du lernst: Wie erkenne ich falsche Bilder und Stimmen?"
        ]
      },
      {
        "title": "Was sind Fake News?",
        "module": "Grundwissen",
        "icon": "report",
        "text": [
          "Fake News sind falsche Nachrichten.",
          "Jemand verbreitet sie mit Absicht.",
          "Fake News sehen oft aus wie echte Nachrichten.",
          "Darum sind sie schwer zu erkennen."
        ],
        "remember": "Nicht jede Nachricht im Internet ist wahr."
      },
      {
        "title": "Warum gibt es Fake News?",
        "module": "Grundwissen",
        "icon": "understand",
        "text": [
          "Menschen machen Fake News aus verschiedenen Gründen."
        ],
        "bullets": [
          "Sie wollen Geld verdienen mit vielen Klicks.",
          "Sie wollen Menschen wütend machen.",
          "Sie wollen Menschen täuschen.",
          "Sie wollen eine Meinung verbreiten."
        ],
        "remember": "Fake News haben ein Ziel. Sie wollen mich beeinflussen."
      },
      {
        "title": "KI-Bilder erkennen",
        "module": "KI-Fakes",
        "icon": "photo",
        "text": [
          "KI kann Bilder machen, die echt aussehen.",
          "Manche Fehler kannst du sehen.",
          "Aber Achtung: Viele KI-Bilder haben keine Fehler mehr."
        ],
        "bullets": [
          "Schau auf Hände und Finger.",
          "Schau auf Schrift im Bild.",
          "Schau auf Licht und Schatten.",
          "Wirkt das Bild zu perfekt?"
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
        }
      },
      {
        "title": "Gefälschte Videos: Deepfakes",
        "module": "KI-Fakes",
        "icon": "warning",
        "text": [
          "Ein Deepfake ist ein gefälschtes Video.",
          "KI tauscht darin Gesicht oder Stimme aus.",
          "Im Video sagt eine Person Dinge, die sie nie gesagt hat.",
          "Oft werden bekannte Menschen gefälscht."
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
        }
      },
      {
        "title": "Geklonte Stimmen am Telefon",
        "module": "KI-Fakes",
        "icon": "message",
        "text": [
          "KI kann Stimmen nachmachen.",
          "Betrüger rufen an. Die Stimme klingt wie deine Familie.",
          "Die Stimme sagt: Ich brauche schnell Geld.",
          "Das nennt man Schockanruf."
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
        }
      },
      {
        "title": "Nachrichten prüfen",
        "module": "Prüfen",
        "icon": "check",
        "text": [
          "Du kannst Nachrichten prüfen.",
          "Diese Fragen helfen dir."
        ],
        "bullets": [
          "Wer hat das geschrieben?",
          "Steht das auch bei bekannten Nachrichten-Seiten?",
          "Wie alt ist die Nachricht?",
          "Gibt es eine Quelle?"
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
        }
      },
      {
        "title": "Starke Gefühle sind ein Warnzeichen",
        "module": "Prüfen",
        "icon": "warning",
        "text": [
          "Fake News machen oft starke Gefühle.",
          "Zum Beispiel Wut oder Angst.",
          "Starke Gefühle sind ein Warnzeichen.",
          "Dann lohnt sich das Prüfen besonders."
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
        }
      },
      {
        "title": "Nicht einfach weiterleiten",
        "module": "Prüfen",
        "icon": "stop",
        "text": [
          "Wenn du Fakes weiterleitest, verbreiten sie sich.",
          "Dann glauben noch mehr Menschen die Lüge.",
          "Darum gilt: Erst prüfen. Dann teilen.",
          "Im Zweifel: Nicht teilen."
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
        }
      },
      {
        "title": "Was kann ich tun?",
        "module": "Hilfe",
        "icon": "help",
        "text": [
          "Du kannst dich schützen.",
          "Diese Regeln helfen dir."
        ],
        "bullets": [
          "Ich glaube nicht alles sofort.",
          "Ich prüfe: Wer schreibt das? Steht das auch woanders?",
          "Bei starken Gefühlen mache ich langsam.",
          "Im Zweifel teile ich nicht.",
          "Ich kann eine Person fragen, der ich vertraue."
        ]
      },
      {
        "title": "Das merke ich mir",
        "module": "Merken",
        "icon": "remember",
        "text": [
          "Du hast viel über Fakes gelernt.",
          "Diese Sätze kannst du dir merken."
        ],
        "bullets": [
          "Nicht alles im Internet ist wahr.",
          "Bilder, Videos und Stimmen können gefälscht sein.",
          "Starke Gefühle sind ein Warnzeichen.",
          "Erst prüfen. Dann teilen.",
          "Ich darf mir Unterstützung holen."
        ],
        "remember": "Erst prüfen. Dann glauben."
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
    "illustration": "assets/illustrations/betrug.svg",
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "betrug",
        "text": [
          "Hier lernst du etwas über Betrug im Internet.",
          "Betrüger wollen dein Geld oder deine Daten.",
          "Du lernst die bekannten Tricks.",
          "Wer die Tricks kennt, ist besser geschützt."
        ]
      },
      {
        "title": "Was ist Phishing?",
        "module": "Grundwissen",
        "icon": "link",
        "text": [
          "Phishing ist ein Trick mit falschen Nachrichten.",
          "Die Nachricht sieht aus wie von deiner Bank oder einer Firma.",
          "In der Nachricht ist ein Link.",
          "Der Link führt zu einer falschen Seite. Dort sollen deine Daten gestohlen werden."
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
        }
      },
      {
        "title": "Falsche Nachrichten erkennen",
        "module": "Grundwissen",
        "icon": "warning",
        "text": [
          "Betrugs-Nachrichten haben oft die gleichen Zeichen.",
          "Diese Warnzeichen kannst du lernen."
        ],
        "bullets": [
          "Die Nachricht macht Druck: Sofort! Schnell! Letzte Chance!",
          "Die Nachricht droht: Sonst wird Ihr Konto gesperrt.",
          "Du sollst auf einen Link klicken.",
          "Du sollst Daten eingeben oder Geld zahlen.",
          "Die Nachricht kommt überraschend."
        ],
        "remember": "Druck und Drohung sind Warnzeichen."
      },
      {
        "title": "Der Paket-Trick",
        "module": "Tricks",
        "icon": "report",
        "text": [
          "Eine SMS sagt: Ihr Paket wartet.",
          "Sie sollen eine kleine Gebühr zahlen.",
          "Oder Sie sollen auf einen Link klicken.",
          "Das ist fast immer Betrug."
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
        }
      },
      {
        "title": "Der Hallo-Mama-Trick",
        "module": "Tricks",
        "icon": "message",
        "text": [
          "Eine WhatsApp-Nachricht sagt: Hallo Mama, hallo Papa.",
          "Ich habe eine neue Nummer.",
          "Mein Handy ist kaputt. Ich brauche schnell Geld.",
          "Das ist ein bekannter Betrug."
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
        }
      },
      {
        "title": "Schockanrufe",
        "module": "Tricks",
        "icon": "stop",
        "text": [
          "Ein Anruf macht dir große Angst.",
          "Zum Beispiel: Ihr Kind hatte einen Unfall. Wir brauchen Geld.",
          "Mit KI kann die Stimme sogar echt klingen.",
          "Auch falsche Polizisten rufen an."
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
        }
      },
      {
        "title": "Falsche Gewinne",
        "module": "Tricks",
        "icon": "example",
        "text": [
          "Eine Nachricht sagt: Sie haben gewonnen!",
          "Aber du hast bei keinem Gewinnspiel mitgemacht.",
          "Du sollst zuerst eine Gebühr zahlen.",
          "Das ist Betrug. Echte Gewinne kosten kein Geld."
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
        }
      },
      {
        "title": "Abo-Fallen",
        "module": "Tricks",
        "icon": "warning",
        "text": [
          "Ein Angebot sagt: Kostenlos testen!",
          "Aber im Kleingedruckten steht: Danach kostet es jeden Monat Geld.",
          "Das nennt man Abo-Falle.",
          "Lies genau, bevor du etwas bestellst."
        ],
        "bullets": [
          "Steht da ein Preis pro Monat?",
          "Wie lange läuft das Abo?",
          "Frag eine Person, bevor du bestellst."
        ],
        "remember": "Kostenlos kann teuer werden. Ich lese genau."
      },
      {
        "title": "Codes nie weitergeben",
        "module": "Schutz",
        "icon": "lock",
        "text": [
          "Manchmal bekommst du einen Code per SMS.",
          "Zum Beispiel von der Bank oder von WhatsApp.",
          "Dieser Code ist nur für dich.",
          "Betrüger fragen nach diesem Code. Gib ihn nie weiter."
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
        }
      },
      {
        "title": "Was tun nach einem Betrug?",
        "module": "Hilfe",
        "icon": "help",
        "text": [
          "Betrug kann jedem passieren.",
          "Du musst dich nicht schämen.",
          "Wichtig ist: Hol dir schnell Hilfe."
        ],
        "bullets": [
          "Sag einer Person Bescheid, der du vertraust.",
          "Bei Bank-Daten: Ruf sofort die Bank an. Lass die Karte sperren.",
          "Der Sperr-Notruf ist die 116 116.",
          "Du kannst Anzeige bei der Polizei machen.",
          "Heb die Nachricht als Beweis auf."
        ],
        "remember": "Betrug ist nicht meine Schuld. Ich hole mir Hilfe."
      },
      {
        "title": "Das merke ich mir",
        "module": "Merken",
        "icon": "remember",
        "text": [
          "Du kennst jetzt die wichtigsten Tricks.",
          "Diese Sätze kannst du dir merken."
        ],
        "bullets": [
          "Druck und Drohung sind Warnzeichen.",
          "Ich klicke nicht auf fremde Links.",
          "Ich gebe nie Codes oder Bank-Daten weiter.",
          "Echte Gewinne kosten kein Geld.",
          "Bei Geld-Forderungen rufe ich selbst zurück.",
          "Nach einem Betrug hole ich mir sofort Hilfe."
        ],
        "remember": "Ich lasse mich nicht unter Druck setzen."
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
    "illustration": "assets/illustrations/einkaufen.svg",
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "einkaufen",
        "text": [
          "Hier lernst du etwas über Einkaufen im Internet.",
          "Du lernst: Wie erkenne ich gute Shops?",
          "Du lernst: Wie bezahle ich sicher?",
          "Du lernst: Was mache ich bei Problemen?"
        ]
      },
      {
        "title": "Gute Shops erkennen",
        "module": "Einkaufen",
        "icon": "check",
        "text": [
          "Es gibt viele gute Shops im Internet.",
          "Daran erkennst du einen guten Shop."
        ],
        "bullets": [
          "Der Shop ist bekannt.",
          "Der Shop hat ein Impressum. Dort steht: Name und Adresse der Firma.",
          "Es gibt echte Bewertungen von Kunden.",
          "Die Preise sind normal. Nicht verdächtig billig."
        ],
        "remember": "Ich kaufe bei Shops, die ich kenne oder geprüft habe."
      },
      {
        "title": "Fake-Shops erkennen",
        "module": "Einkaufen",
        "icon": "warning",
        "text": [
          "Ein Fake-Shop ist ein falscher Shop.",
          "Du bezahlst. Aber die Ware kommt nie.",
          "Fake-Shops sehen oft sehr echt aus.",
          "Diese Warnzeichen helfen dir."
        ],
        "bullets": [
          "Alles ist sehr, sehr billig.",
          "Du kannst nur per Vorkasse zahlen.",
          "Es gibt kein Impressum.",
          "Der Name der Internet-Seite ist komisch."
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
        }
      },
      {
        "title": "Sicher bezahlen",
        "module": "Bezahlen",
        "icon": "data",
        "text": [
          "Es gibt verschiedene Arten zu bezahlen.",
          "Manche sind sicherer als andere."
        ],
        "bullets": [
          "Kauf auf Rechnung ist sicher: Du zahlst erst, wenn die Ware da ist.",
          "PayPal und ähnliche Dienste haben einen Käufer-Schutz.",
          "Vorkasse an Fremde ist riskant: Das Geld ist oft weg.",
          "Niemals Geld an Privat-Personen senden, die du nicht kennst."
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
        }
      },
      {
        "title": "Bank-Daten schützen",
        "module": "Bezahlen",
        "icon": "lock",
        "text": [
          "Deine Bank-Daten sind sehr wichtig.",
          "PIN und TAN sind geheim.",
          "Deine Bank fragt nie per E-Mail oder Telefon danach.",
          "Wer danach fragt, ist ein Betrüger."
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
        }
      },
      {
        "title": "Versteckte Kosten in Apps und Spielen",
        "module": "Achtung",
        "icon": "report",
        "text": [
          "Viele Spiele sind erst kostenlos.",
          "Im Spiel kannst du dann Dinge kaufen.",
          "Das kostet echtes Geld.",
          "Viele kleine Käufe werden schnell teuer."
        ],
        "examples": [
          "Ein Spiel verkauft Extra-Leben für 2 Euro.",
          "Eine App verkauft Münzen für 5 Euro."
        ],
        "remember": "Auch kleine Käufe kosten echtes Geld."
      },
      {
        "title": "Kauf-Druck widerstehen",
        "module": "Achtung",
        "icon": "stop",
        "text": [
          "Shops machen oft Druck.",
          "Zum Beispiel: Nur noch heute! Nur noch 2 Stück!",
          "Das soll dich zum schnellen Kaufen bringen.",
          "Du darfst dir Zeit nehmen."
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
        }
      },
      {
        "title": "Vor dem Kaufen prüfen",
        "module": "Einkaufen",
        "icon": "understand",
        "text": [
          "Prüfe vor dem letzten Klick.",
          "Diese Fragen helfen dir."
        ],
        "bullets": [
          "Was kostet es wirklich? Mit Versand?",
          "Ist es ein Abo oder ein einmaliger Kauf?",
          "Brauche ich das wirklich?",
          "Habe ich genug Geld dafür?"
        ],
        "remember": "Erst prüfen. Dann kaufen."
      },
      {
        "title": "Falsch gekauft? Das kannst du tun",
        "module": "Hilfe",
        "icon": "help",
        "text": [
          "Ein Fehl-Kauf kann passieren.",
          "Oft kannst du etwas tun."
        ],
        "bullets": [
          "Viele Online-Käufe kannst du 14 Tage zurückgeben. Das heißt Widerruf.",
          "Schreib dem Shop eine Nachricht.",
          "Frag eine Person, der du vertraust, um Hilfe.",
          "Bei Betrug: Ruf deine Bank an."
        ],
        "remember": "Online-Käufe kann ich oft 14 Tage zurückgeben."
      },
      {
        "title": "Was kann ich tun?",
        "module": "Hilfe",
        "icon": "check",
        "text": [
          "Du kannst sicher im Internet einkaufen.",
          "Diese Regeln helfen dir."
        ],
        "bullets": [
          "Ich kaufe bei Shops, die ich kenne.",
          "Ich prüfe Preis und Impressum.",
          "Ich zahle möglichst auf Rechnung.",
          "PIN und TAN bleiben geheim.",
          "Ich lasse mich nicht hetzen.",
          "Vor dem Kaufen kann ich eine Person fragen."
        ]
      },
      {
        "title": "Das merke ich mir",
        "module": "Merken",
        "icon": "remember",
        "text": [
          "Du hast viel über sicheres Einkaufen gelernt.",
          "Diese Sätze kannst du dir merken."
        ],
        "bullets": [
          "Sehr billig und nur Vorkasse: Warnzeichen.",
          "Rechnung ist sicherer als Vorkasse.",
          "PIN und TAN bleiben geheim.",
          "Ich lasse mich nicht hetzen.",
          "Ich darf mir Unterstützung holen."
        ],
        "remember": "Erst prüfen. Dann kaufen."
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
