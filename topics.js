const topics = [
  {
    "id": "datenschutz",
    "title": "Datenschutz",
    "icon": "lock",
    "desc": "Private Daten verstehen und schützen",
    "quiz": "https://kahoot.com",
    "lessons": [
      {
        "title": "Start",
        "icon": "start",
        "text": [
          "Diese Lernseite hilft dir, Datenschutz sicherer zu nutzen.",
          "Du lernst in kleinen Schritten.",
          "Am Ende kannst du ein Quiz machen."
        ],
        "remember": "Du bestimmst dein Tempo.",
        "module": "Modul 1: Datenschutz verstehen"
      },
      {
        "title": "Was bedeutet Datenschutz?",
        "icon": "lock",
        "text": [
          "Datenschutz bedeutet: Deine persönlichen Informationen werden geschützt.",
          "Nicht jede Person darf alles über dich wissen.",
          "Du darfst mitentscheiden, was du teilst."
        ],
        "remember": "Datenschutz schützt deine Privatsphäre.",
        "module": "Modul 1: Datenschutz verstehen"
      },
      {
        "title": "Warum sind Daten wichtig?",
        "icon": "data",
        "text": [
          "Daten erzählen etwas über dich.",
          "Zum Beispiel, wo du wohnst oder was du machst.",
          "Darum sollen Daten nicht einfach weitergegeben werden."
        ],
        "bullets": [
          "Name und Adresse",
          "Telefonnummer",
          "Fotos und Standort"
        ],
        "remember": "Daten können viel über mich verraten.",
        "module": "Modul 1: Datenschutz verstehen"
      },
      {
        "title": "Datenschutz im Alltag",
        "icon": "home",
        "text": [
          "Datenschutz passiert im Alltag.",
          "Zum Beispiel beim Handy, bei Apps oder bei Formularen."
        ],
        "bullets": [
          "nicht alles eintragen",
          "nicht alles posten",
          "bei Unsicherheit fragen"
        ],
        "remember": "Ich prüfe, bevor ich Daten teile.",
        "module": "Modul 1: Datenschutz verstehen"
      },
      {
        "title": "Gute Datenschutz-Entscheidung erkennen",
        "icon": "check",
        "text": [
          "Eine gute Entscheidung schützt deine Daten."
        ],
        "quote": "Ich gebe nur die Daten an, die wirklich nötig sind.",
        "success": "Das ist gut. Du teilst nicht mehr als nötig.",
        "remember": "So wenig Daten wie möglich.",
        "module": "Modul 1: Datenschutz verstehen"
      },
      {
        "title": "Modulstart: Private Daten schützen",
        "icon": "lock",
        "text": [
          "Jetzt geht es um private Daten.",
          "Du lernst, was du schützen sollst.",
          "Du lernst, wann du vorsichtig sein musst."
        ],
        "remember": "Private Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Was sind private Daten?",
        "icon": "lock",
        "text": [
          "Private Daten gehören dir.",
          "Du sollst sie nicht einfach veröffentlichen oder verschicken."
        ],
        "bullets": [
          "Name und Adresse",
          "Telefonnummer",
          "Passwörter und Gesundheitsdaten"
        ],
        "remember": "Meine Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Beispiel: Adresse",
        "icon": "data",
        "text": [
          "Eine unbekannte Person fragt dich:"
        ],
        "quote": "Wo wohnst du? Schick mir deine Adresse.",
        "warning": "Das ist nicht sicher. Deine Adresse ist privat.",
        "remember": "Meine Adresse bleibt privat.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Beispiel: Passwort",
        "icon": "lock",
        "text": [
          "Eine Person schreibt dir:"
        ],
        "quote": "Gib mir dein Passwort. Ich helfe dir.",
        "warning": "Das ist Betrug. Niemand darf dein Passwort verlangen.",
        "remember": "Mein Passwort bleibt geheim.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Übung: Private Daten erkennen",
        "icon": "exercise",
        "exercise": {
          "id": "datenschutzPrivate",
          "question": "Nachricht: „Schick mir deine PIN. Ich helfe dir.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Eine PIN ist privat. Gib sie nicht weiter."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Eine PIN ist privat. Gib sie nicht weiter."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "check",
        "text": [
          "Du darfst Nein sagen.",
          "Du musst keine privaten Daten schicken.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Meine Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Modulstart: Fotos, Standort und Formulare",
        "icon": "photo",
        "text": [
          "Jetzt geht es um fotos, standort und formulare.",
          "Inhalte können privat oder öffentlich sein.",
          "Du lernst, worauf du achten musst."
        ],
        "remember": "Ich entscheide, was ich teile.",
        "module": "Modul 3: Fotos, Standort und Formulare"
      },
      {
        "title": "Daten teilen",
        "icon": "photo",
        "text": [
          "Daten können weitergegeben oder gespeichert werden.",
          "Dann sehen vielleicht andere Menschen diesen Inhalt.",
          "Darum ist Vorsicht wichtig."
        ],
        "remember": "Ich denke nach, bevor ich teile.",
        "module": "Modul 3: Fotos, Standort und Formulare"
      },
      {
        "title": "Private Inhalte",
        "icon": "block",
        "text": [
          "Manche Inhalte sind sehr privat."
        ],
        "bullets": [
          "Fotos von dir",
          "Standort",
          "Gesundheitsdaten"
        ],
        "remember": "Ich entscheide über meine Inhalte.",
        "module": "Modul 3: Fotos, Standort und Formulare"
      },
      {
        "title": "Beispiel: Druck",
        "icon": "warning",
        "text": [
          "Eine Person schreibt:"
        ],
        "quote": "„Schick mir deine Daten. Aber sag es niemandem.“",
        "warning": "Das ist ein Warnzeichen. Niemand darf dich unter Druck setzen.",
        "remember": "Ich darf Nein sagen.",
        "module": "Modul 3: Fotos, Standort und Formulare"
      },
      {
        "title": "Nachrichten und Kommentare",
        "icon": "message",
        "text": [
          "Auch Worte können verletzen.",
          "Nachrichten und Kommentare können gespeichert werden.",
          "Darum solltest du vorher überlegen."
        ],
        "remember": "Ich schreibe respektvoll.",
        "module": "Modul 3: Fotos, Standort und Formulare"
      },
      {
        "title": "Übung: Inhalt prüfen",
        "icon": "exercise",
        "exercise": {
          "id": "datenschutzContent",
          "question": "Nachricht: „Poste das. Aber sag es niemandem.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Das wirkt unsicher. Geheimhaltung und Druck sind Warnzeichen."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt unsicher. Geheimhaltung und Druck sind Warnzeichen."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 3: Fotos, Standort und Formulare"
      },
      {
        "title": "Merksatz: Ich entscheide",
        "icon": "check",
        "text": [
          "Ich muss nichts posten.",
          "Ich muss nichts verschicken.",
          "Ich darf Nein sagen."
        ],
        "remember": "Ich entscheide über meine Inhalte.",
        "module": "Modul 3: Fotos, Standort und Formulare"
      },
      {
        "title": "Modulstart: Links, Formulare und Betrug",
        "icon": "data",
        "text": [
          "Jetzt geht es um links, formulare und betrug.",
          "Manche Inhalte sehen echt aus.",
          "Trotzdem können sie gefährlich sein."
        ],
        "remember": "Ich prüfe, bevor ich handle.",
        "module": "Modul 4: Links, Formulare und Betrug"
      },
      {
        "title": "Komische Formulare",
        "icon": "data",
        "text": [
          "Manche Formulare fragen zu viele Daten.",
          "Manche Links führen zu falschen Seiten.",
          "Dort wollen Betrüger Daten bekommen."
        ],
        "remember": "Ich handle nicht sofort.",
        "module": "Modul 4: Links, Formulare und Betrug"
      },
      {
        "title": "Beispiel: Lock-Nachricht",
        "icon": "warning",
        "text": [
          "Du bekommst diese Nachricht:"
        ],
        "quote": "Du hast gewonnen. Trage sofort deine Daten ein.",
        "warning": "Das kann Betrug sein. Reagiere nicht sofort.",
        "remember": "Erst prüfen. Dann handeln.",
        "module": "Modul 4: Links, Formulare und Betrug"
      },
      {
        "title": "Betrug erkennen",
        "icon": "warning",
        "text": [
          "Vorsicht, wenn jemand:"
        ],
        "bullets": [
          "dein Passwort will",
          "Geld von dir verlangt",
          "Druck macht"
        ],
        "remember": "Druck ist ein Warnzeichen.",
        "module": "Modul 4: Links, Formulare und Betrug"
      },
      {
        "title": "Wenn jemand Druck macht",
        "icon": "stop",
        "text": [
          "Warnzeichen sind:"
        ],
        "bullets": [
          "Mach sofort.",
          "Sag es niemandem.",
          "Sonst passiert etwas."
        ],
        "remember": "Druck bedeutet: Stopp und Hilfe holen.",
        "module": "Modul 4: Links, Formulare und Betrug"
      },
      {
        "title": "Übung: Risiko prüfen",
        "icon": "exercise",
        "exercise": {
          "id": "datenschutzRisk",
          "question": "Nachricht: „Gib deine Daten ein. Nur noch 5 Minuten.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Das wirkt unsicher. Nicht sofort reagieren."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt unsicher. Nicht sofort reagieren."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 4: Links, Formulare und Betrug"
      },
      {
        "title": "Merksatz: Erst prüfen",
        "icon": "check",
        "text": [
          "Ich reagiere nicht sofort.",
          "Ich prüfe die Nachricht.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Erst prüfen. Dann handeln.",
        "module": "Modul 4: Links, Formulare und Betrug"
      },
      {
        "title": "Modulstart: Daten im Internet",
        "icon": "message",
        "text": [
          "Jetzt geht es um daten im internet.",
          "Viele Menschen können mitlesen.",
          "Darum ist gutes Verhalten wichtig."
        ],
        "remember": "Ich schreibe vorsichtig.",
        "module": "Modul 5: Daten im Internet"
      },
      {
        "title": "Daten im Internet",
        "icon": "message",
        "text": [
          "Daten können im Internet schnell weitergegeben werden.",
          "Darum ist vorsichtiges Handeln wichtig."
        ],
        "remember": "Viele können mitlesen.",
        "module": "Modul 5: Daten im Internet"
      },
      {
        "title": "Guter Beitrag",
        "icon": "message",
        "text": [
          "Ein guter Beitrag ist:"
        ],
        "bullets": [
          "freundlich",
          "kurz und verständlich",
          "ohne private Daten"
        ],
        "remember": "Ich schreibe respektvoll.",
        "module": "Modul 5: Daten im Internet"
      },
      {
        "title": "Schlechter Beitrag",
        "icon": "block",
        "text": [
          "Diese Dinge sind nicht gut:"
        ],
        "bullets": [
          "Beleidigungen",
          "Gerüchte",
          "private Fotos oder Daten"
        ],
        "remember": "Ich verletze andere nicht.",
        "module": "Modul 5: Daten im Internet"
      },
      {
        "title": "Streit oder Ärger",
        "icon": "message",
        "text": [
          "Manchmal gibt es Streit."
        ],
        "quote": "Du willst etwas Gemeines zurückschreiben.",
        "warning": "Besser: Pause machen. Nicht sofort antworten.",
        "remember": "Erst beruhigen. Dann entscheiden.",
        "module": "Modul 5: Daten im Internet"
      },
      {
        "title": "Übung: Gute Nachricht erkennen",
        "icon": "exercise",
        "exercise": {
          "id": "datenschutzGroup",
          "question": "„Ich brauche nur deine Telefonnummer für den Termin.“",
          "feedback": {
            "safe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt sicher. Es ist freundlich und ohne Druck."
            },
            "unsafe": {
              "type": "warning",
              "title": "Nicht ganz.",
              "text": "Das wirkt sicher. Es ist freundlich und ohne Druck."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 5: Daten im Internet"
      },
      {
        "title": "Stopp-Regel",
        "icon": "stop",
        "text": [
          "Wenn dir etwas komisch vorkommt:"
        ],
        "bullets": [
          "Stopp: Nicht sofort antworten",
          "Nicht klicken und nichts schicken",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Ich darf Nein sagen",
        "icon": "stop",
        "text": [
          "Du musst nicht antworten.",
          "Du musst nichts posten oder schicken.",
          "Du musst keinen Link anklicken."
        ],
        "remember": "Nein sagen ist erlaubt.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "So blockierst du jemanden",
        "icon": "block",
        "text": [
          "So kannst du dich schützen:"
        ],
        "bullets": [
          "Nachricht öffnen",
          "Absender blockieren",
          "bei Unsicherheit eine Person fragen, der du vertraust"
        ],
        "remember": "Ich darf mich schützen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "So meldest du etwas",
        "icon": "report",
        "text": [
          "Wenn du unsicher bist, frage eine Person, der du vertraust."
        ],
        "bullets": [
          "Problem zeigen",
          "Melden auswählen, wenn vorhanden",
          "eine Person informieren, der du vertraust"
        ],
        "remember": "Melden ist erlaubt.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Hilfe holen",
        "icon": "help",
        "text": [
          "Du musst Probleme nicht allein lösen.",
          "Hilfe holen ist richtig."
        ],
        "bullets": [
          "eine Person, der du vertraust",
          "eine Unterstützerin oder einen Unterstützer",
          "eine Digital-Begleiterin oder einen Digital-Begleiter",
          "bei Gefahr: Polizei 110"
        ],
        "remember": "Du darfst Unterstützung holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Datenschutz-Hinweis",
        "icon": "lock",
        "text": [
          "Diese Lernseite fragt keine privaten Daten ab.",
          "Du musst keinen Namen eingeben.",
          "Im Quiz nimmst du einen Spitznamen."
        ],
        "remember": "Ich bleibe anonym.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Wiederholung",
        "icon": "example",
        "text": [
          "Was mache ich bei einem Problem?"
        ],
        "bullets": [
          "nicht sofort antworten",
          "nichts Privates teilen",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Quiz und Abschluss",
        "icon": "quiz",
        "text": [
          "Gut gemacht.",
          "Du hast wichtige Regeln gelernt.",
          "Jetzt kannst du dein Wissen testen."
        ],
        "bullets": [
          "Nutze keinen echten Namen.",
          "Nimm einen Spitznamen.",
          "Das Quiz ist zum Üben."
        ],
        "remember": "Ich hole Hilfe, wenn ich unsicher bin.",
        "quiz": true,
        "module": "Modul 6: Schutz und Hilfe"
      }
    ],
    "illustration": "assets/illustrations/datenschutz.svg",
    "quizQuestions": [
      {
        "question": "Eine Internet-Seite fragt nach deiner Adresse. Was machst du?",
        "answers": [
          "Ich trage alles sofort ein.",
          "Ich prüfe erst, ob die Angabe nötig ist.",
          "Ich schicke zusätzlich mein Passwort."
        ],
        "correct": 1,
        "explanation": "Richtig. Deine Adresse ist privat. Gib sie nur an, wenn es wirklich nötig ist."
      },
      {
        "question": "Welche Information ist besonders privat?",
        "answers": [
          "Deine PIN",
          "Deine Lieblingsfarbe",
          "Das Wetter"
        ],
        "correct": 0,
        "explanation": "Richtig. Eine PIN schützt Geräte oder Konten. Sie bleibt geheim."
      },
      {
        "question": "Du möchtest ein Foto von einer anderen Person posten. Was ist richtig?",
        "answers": [
          "Ich frage die Person vorher.",
          "Ich poste es heimlich.",
          "Ich schreibe keinen Namen dazu, dann ist es immer okay."
        ],
        "correct": 0,
        "explanation": "Richtig. Andere Personen müssen einverstanden sein, bevor du ein Foto teilst."
      },
      {
        "question": "Eine App möchte deinen Standort wissen. Was machst du?",
        "answers": [
          "Ich erlaube es immer.",
          "Ich prüfe, ob die App den Standort wirklich braucht.",
          "Ich sende den Standort zusätzlich an Freunde."
        ],
        "correct": 1,
        "explanation": "Richtig. Der Standort zeigt, wo du bist. Er sollte nur geteilt werden, wenn es nötig ist."
      },
      {
        "question": "Jemand schreibt: „Schick mir dein Passwort. Ich helfe dir.“ Was machst du?",
        "answers": [
          "Ich schicke das Passwort.",
          "Ich antworte nicht und hole Hilfe.",
          "Ich schicke nur die Hälfte."
        ],
        "correct": 1,
        "explanation": "Richtig. Passwörter werden nie verschickt. Hole Hilfe, wenn du unsicher bist."
      },
      {
        "question": "Was bedeutet Daten sparsam teilen?",
        "answers": [
          "Nur Daten teilen, die wirklich nötig sind.",
          "Alle Felder ausfüllen.",
          "Daten an möglichst viele Menschen schicken."
        ],
        "correct": 0,
        "explanation": "Richtig. Je weniger Daten du teilst, desto besser sind deine Daten geschützt."
      },
      {
        "question": "Du bist bei einem Formular unsicher. Was ist eine gute Entscheidung?",
        "answers": [
          "Eine eine Person, der du vertraust fragen.",
          "Alles schnell ausfüllen.",
          "Das Passwort als Sicherheit eintragen."
        ],
        "correct": 0,
        "explanation": "Richtig. Bei Unsicherheit ist Nachfragen eine sichere Entscheidung."
      },
      {
        "question": "Was kann mit privaten Daten passieren?",
        "answers": [
          "Sie können missbraucht werden.",
          "Sie sind immer ungefährlich.",
          "Sie verschwinden immer sofort."
        ],
        "correct": 0,
        "explanation": "Richtig. Private Daten können missbraucht werden. Deshalb ist Schutz wichtig."
      },
      {
        "question": "Im Quiz sollst du einen Namen eingeben. Was ist besser?",
        "answers": [
          "Einen Spitznamen nutzen.",
          "Den vollen Namen und die Adresse nutzen.",
          "Das Passwort als Namen nutzen."
        ],
        "correct": 0,
        "explanation": "Richtig. Ein Spitzname schützt deine Privatsphäre."
      },
      {
        "question": "Was ist der wichtigste Merksatz zum Datenschutz?",
        "answers": [
          "Meine Daten gehören mir.",
          "Alle Daten gehören ins Internet.",
          "Passwörter darf jeder wissen."
        ],
        "correct": 0,
        "explanation": "Richtig. Deine Daten gehören dir. Du entscheidest mit, was du teilst."
      }
    ],
    "certificateGoals": [
      "private Daten erkennen",
      "Daten sparsam teilen",
      "bei Unsicherheit Hilfe holen"
    ]
  },
  {
    "id": "whatsapp",
    "title": "WhatsApp",
    "icon": "message",
    "desc": "Nachrichten, Gruppen, Links und Hilfe",
    "quiz": "https://kahoot.com",
    "lessons": [
      {
        "title": "Start",
        "icon": "start",
        "text": [
          "Diese Lernseite hilft dir, WhatsApp sicherer zu nutzen.",
          "Du lernst in kleinen Schritten.",
          "Am Ende kannst du ein Quiz machen."
        ],
        "remember": "Du bestimmst dein Tempo.",
        "module": "Modul 1: WhatsApp verstehen"
      },
      {
        "title": "Was ist WhatsApp?",
        "icon": "message",
        "text": [
          "WhatsApp ist eine App.",
          "Du kannst mit anderen Menschen Kontakt halten.",
          "Du kannst Nachrichten, Fotos und Sprachnachrichten senden."
        ],
        "remember": "WhatsApp ist ein Werkzeug für Kontakt.",
        "module": "Modul 1: WhatsApp verstehen"
      },
      {
        "title": "Was kann ich mit WhatsApp machen?",
        "icon": "message",
        "text": [
          "Mit WhatsApp kannst du viele Dinge tun."
        ],
        "bullets": [
          "Nachrichten schreiben",
          "Fotos oder Videos schicken",
          "Sprachnachrichten senden"
        ],
        "remember": "Ich entscheide, was ich teile.",
        "module": "Modul 1: WhatsApp verstehen"
      },
      {
        "title": "WhatsApp im Alltag",
        "icon": "check",
        "text": [
          "WhatsApp kann im Alltag helfen."
        ],
        "bullets": [
          "einen Termin absprechen",
          "kurz Bescheid sagen",
          "in einer Gruppe mitlesen"
        ],
        "remember": "WhatsApp kann praktisch sein.",
        "module": "Modul 1: WhatsApp verstehen"
      },
      {
        "title": "Gute Nachricht erkennen",
        "icon": "check",
        "text": [
          "Eine gute Nachricht ist freundlich und klar."
        ],
        "quote": "Hallo. Ich komme heute um 16 Uhr.",
        "success": "Das wirkt sicher. Die Nachricht macht keinen Druck.",
        "remember": "Gute Nachrichten sind klar und respektvoll.",
        "module": "Modul 1: WhatsApp verstehen"
      },
      {
        "title": "Modulstart: Private Daten schützen",
        "icon": "lock",
        "text": [
          "Jetzt geht es um private Daten.",
          "Du lernst, welche Daten du schützen sollst.",
          "Du lernst auch, wann du Nein sagen darfst."
        ],
        "remember": "Private Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Was sind private Daten?",
        "icon": "lock",
        "text": [
          "Private Daten gehören dir.",
          "Du sollst sie nicht einfach verschicken."
        ],
        "bullets": [
          "Adresse und Wohnort",
          "Telefonnummer",
          "Passwörter und PIN-Nummern"
        ],
        "remember": "Meine Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Beispiel: Adresse",
        "icon": "data",
        "text": [
          "Du bekommst eine Nachricht von einer unbekannten Person."
        ],
        "quote": "Wo wohnst du? Schick mir deine Adresse.",
        "warning": "Das ist nicht sicher. Deine Adresse ist privat.",
        "remember": "Meine Adresse bleibt privat.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Beispiel: Passwort",
        "icon": "lock",
        "text": [
          "Eine Person schreibt dir:"
        ],
        "quote": "Gib mir dein Passwort. Sonst wird dein Konto gelöscht.",
        "warning": "Das ist Betrug. Niemand darf dein Passwort verlangen.",
        "remember": "Mein Passwort bleibt geheim.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Übung: Private Daten erkennen",
        "icon": "exercise",
        "exercise": {
          "id": "waPrivate",
          "question": "Nachricht: „Schick mir deine PIN. Ich helfe dir.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Eine PIN ist privat. Gib sie nicht weiter."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Eine PIN ist privat. Gib sie nicht weiter."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "check",
        "text": [
          "Du darfst Nein sagen.",
          "Du musst keine privaten Daten schicken.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Meine Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Modulstart: Fotos und Stimme",
        "icon": "photo",
        "text": [
          "Jetzt geht es um Fotos und Sprachnachrichten.",
          "Auch Bilder und Stimmen können privat sein.",
          "Du lernst, worauf du achten musst."
        ],
        "remember": "Ich entscheide, was ich sende.",
        "module": "Modul 3: Fotos und Stimme"
      },
      {
        "title": "Fotos verschicken",
        "icon": "photo",
        "text": [
          "Fotos können weitergeleitet werden.",
          "Dann sehen vielleicht andere Menschen das Foto.",
          "Darum ist Vorsicht wichtig."
        ],
        "remember": "Ich denke nach, bevor ich ein Foto schicke.",
        "module": "Modul 3: Fotos und Stimme"
      },
      {
        "title": "Private Fotos",
        "icon": "block",
        "text": [
          "Manche Fotos sind sehr privat."
        ],
        "bullets": [
          "intime oder nackte Fotos",
          "peinliche Fotos",
          "Fotos, die du später bereust"
        ],
        "remember": "Ich entscheide über meine Bilder.",
        "module": "Modul 3: Fotos und Stimme"
      },
      {
        "title": "Beispiel: Foto mit Druck",
        "icon": "warning",
        "text": [
          "Eine Person schreibt:"
        ],
        "quote": "Schick mir ein Foto von dir. Aber sag es niemandem.",
        "warning": "Das ist ein Warnzeichen. Niemand darf dich unter Druck setzen.",
        "remember": "Ich darf Nein sagen.",
        "module": "Modul 3: Fotos und Stimme"
      },
      {
        "title": "Sprachnachrichten",
        "icon": "message",
        "text": [
          "Auch deine Stimme ist privat.",
          "Eine Sprachnachricht kann weitergeleitet werden.",
          "Darum solltest du vorher überlegen."
        ],
        "remember": "Auch meine Stimme gehört mir.",
        "module": "Modul 3: Fotos und Stimme"
      },
      {
        "title": "Übung: Foto oder Stimme",
        "icon": "exercise",
        "exercise": {
          "id": "waPhoto",
          "question": "Nachricht: „Schick mir ein peinliches Foto. Ich zeige es niemandem.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Das wirkt unsicher. Es wird Druck gemacht."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt unsicher. Es wird Druck gemacht."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 3: Fotos und Stimme"
      },
      {
        "title": "Merksatz: Ich entscheide",
        "icon": "check",
        "text": [
          "Du musst kein Foto schicken.",
          "Du musst keine Sprachnachricht schicken.",
          "Du darfst Nein sagen."
        ],
        "remember": "Ich entscheide über Bilder und Stimme.",
        "module": "Modul 3: Fotos und Stimme"
      },
      {
        "title": "Modulstart: Links und Betrug",
        "icon": "link",
        "text": [
          "Jetzt geht es um Links und Betrug.",
          "Manche Nachrichten sehen echt aus.",
          "Trotzdem können sie gefährlich sein."
        ],
        "remember": "Ich prüfe, bevor ich klicke.",
        "module": "Modul 4: Links und Betrug"
      },
      {
        "title": "Komische Links",
        "icon": "link",
        "text": [
          "Manche Links sind gefährlich.",
          "Sie führen auf falsche Internet-Seiten.",
          "Dort wollen Betrüger Daten bekommen."
        ],
        "remember": "Ich klicke nicht sofort.",
        "module": "Modul 4: Links und Betrug"
      },
      {
        "title": "Beispiel: Gewinn-Link",
        "icon": "warning",
        "text": [
          "Du bekommst diese Nachricht:"
        ],
        "quote": "Du hast gewonnen. Klicke sofort hier.",
        "warning": "Das kann Betrug sein. Klicke nicht einfach.",
        "remember": "Erst prüfen. Dann handeln.",
        "module": "Modul 4: Links und Betrug"
      },
      {
        "title": "Betrug erkennen",
        "icon": "warning",
        "text": [
          "Vorsicht, wenn jemand:"
        ],
        "bullets": [
          "dein Passwort will",
          "Geld von dir verlangt",
          "Druck macht"
        ],
        "remember": "Druck ist ein Warnzeichen.",
        "module": "Modul 4: Links und Betrug"
      },
      {
        "title": "Wenn jemand Druck macht",
        "icon": "stop",
        "text": [
          "Warnzeichen sind:"
        ],
        "bullets": [
          "Mach sofort.",
          "Sag es niemandem.",
          "Sonst passiert etwas."
        ],
        "remember": "Druck bedeutet: Stopp und Hilfe holen.",
        "module": "Modul 4: Links und Betrug"
      },
      {
        "title": "Übung: Link prüfen",
        "icon": "exercise",
        "exercise": {
          "id": "waLink",
          "question": "Nachricht: „Klicke sofort. Nur noch 5 Minuten.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Zeitdruck ist ein Warnzeichen. Nicht klicken."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Zeitdruck ist ein Warnzeichen. Nicht klicken."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 4: Links und Betrug"
      },
      {
        "title": "Merksatz: Erst prüfen",
        "icon": "check",
        "text": [
          "Ich klicke nicht sofort.",
          "Ich prüfe die Nachricht.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Erst prüfen. Dann handeln.",
        "module": "Modul 4: Links und Betrug"
      },
      {
        "title": "Modulstart: Gruppen",
        "icon": "message",
        "text": [
          "Jetzt geht es um WhatsApp-Gruppen.",
          "In Gruppen lesen viele Menschen mit.",
          "Darum ist gutes Verhalten wichtig."
        ],
        "remember": "In Gruppen schreibe ich vorsichtig.",
        "module": "Modul 5: Gruppen und gutes Verhalten"
      },
      {
        "title": "WhatsApp-Gruppen",
        "icon": "message",
        "text": [
          "In Gruppen lesen viele Menschen mit.",
          "Nachrichten können schnell weitergegeben werden.",
          "Darum solltest du besonders vorsichtig schreiben."
        ],
        "remember": "Gruppen haben viele Mitlesende.",
        "module": "Modul 5: Gruppen und gutes Verhalten"
      },
      {
        "title": "Gute Gruppennachricht",
        "icon": "message",
        "text": [
          "Eine gute Gruppen-Nachricht ist:"
        ],
        "bullets": [
          "freundlich",
          "kurz und verständlich",
          "ohne private Daten"
        ],
        "remember": "Ich schreibe respektvoll.",
        "module": "Modul 5: Gruppen und gutes Verhalten"
      },
      {
        "title": "Schlechte Gruppennachricht",
        "icon": "block",
        "text": [
          "Diese Dinge gehören nicht in Gruppen:"
        ],
        "bullets": [
          "Beleidigungen",
          "Gerüchte",
          "private Fotos"
        ],
        "remember": "Ich verletze andere nicht.",
        "module": "Modul 5: Gruppen und gutes Verhalten"
      },
      {
        "title": "Streit in der Gruppe",
        "icon": "message",
        "text": [
          "In einer Gruppe streiten sich Menschen."
        ],
        "quote": "Du willst etwas Gemeines zurückschreiben.",
        "warning": "Besser: Pause machen. Nicht sofort antworten.",
        "remember": "Erst beruhigen. Dann entscheiden.",
        "module": "Modul 5: Gruppen und gutes Verhalten"
      },
      {
        "title": "Übung: Gute Nachricht erkennen",
        "icon": "exercise",
        "exercise": {
          "id": "waGroup",
          "question": "Nachricht: „Hallo. Ich komme heute um 16 Uhr.“",
          "feedback": {
            "safe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt sicher. Die Nachricht ist freundlich und ohne Druck."
            },
            "unsafe": {
              "type": "warning",
              "title": "Nicht ganz.",
              "text": "Das wirkt sicher. Die Nachricht ist freundlich und ohne Druck."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 5: Gruppen und gutes Verhalten"
      },
      {
        "title": "Stopp-Regel",
        "icon": "stop",
        "text": [
          "Wenn dir etwas komisch vorkommt:"
        ],
        "bullets": [
          "Stopp: Nicht sofort antworten",
          "Nicht klicken und nichts schicken",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Ich darf Nein sagen",
        "icon": "stop",
        "text": [
          "Du musst nicht antworten.",
          "Du musst kein Foto schicken.",
          "Du musst keinen Link anklicken."
        ],
        "remember": "Nein sagen ist erlaubt.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "So blockierst du jemanden",
        "icon": "block",
        "text": [
          "So kannst du dich schützen:"
        ],
        "bullets": [
          "Chat öffnen",
          "auf den Namen tippen",
          "Blockieren auswählen"
        ],
        "remember": "Ich darf mich schützen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "So meldest du eine Nachricht",
        "icon": "report",
        "text": [
          "Wenn du unsicher bist, frage eine Person, der du vertraust."
        ],
        "bullets": [
          "Nachricht lange drücken",
          "Melden auswählen",
          "eine Person informieren, der du vertraust"
        ],
        "remember": "Melden ist erlaubt.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Hilfe holen",
        "icon": "help",
        "text": [
          "Du musst Probleme nicht allein lösen.",
          "Hilfe holen ist richtig."
        ],
        "bullets": [
          "eine Person, der du vertraust",
          "eine Unterstützerin oder einen Unterstützer",
          "eine Digital-Begleiterin oder einen Digital-Begleiter",
          "bei Gefahr: Polizei 110"
        ],
        "remember": "Du darfst Unterstützung holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Datenschutz-Hinweis",
        "icon": "lock",
        "text": [
          "Diese Lernseite fragt keine privaten Daten ab.",
          "Du musst keinen Namen eingeben.",
          "Im Quiz nimmst du einen Spitznamen."
        ],
        "remember": "Ich bleibe anonym.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Wiederholung",
        "icon": "example",
        "text": [
          "Was mache ich bei einer komischen Nachricht?"
        ],
        "bullets": [
          "nicht sofort antworten",
          "nicht klicken",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Quiz und Abschluss",
        "icon": "quiz",
        "text": [
          "Gut gemacht.",
          "Du hast wichtige Regeln gelernt.",
          "Jetzt kannst du dein Wissen testen."
        ],
        "bullets": [
          "Nutze keinen echten Namen.",
          "Nimm einen Spitznamen.",
          "Das Quiz ist zum Üben."
        ],
        "remember": "Meine Daten gehören mir. Ich hole Hilfe, wenn ich unsicher bin.",
        "quiz": true,
        "module": "Modul 6: Schutz und Hilfe"
      }
    ],
    "illustration": "assets/illustrations/whatsapp.svg",
    "quizQuestions": [
      {
        "question": "Eine unbekannte Person fragt nach deiner Adresse. Was machst du?",
        "answers": [
          "Adresse schicken.",
          "Nicht schicken und Hilfe holen.",
          "In eine Gruppe weiterleiten."
        ],
        "correct": 1,
        "explanation": "Richtig. Deine Adresse ist privat. Unbekannte Personen bekommen sie nicht."
      },
      {
        "question": "Du bekommst einen Link: „Du hast gewonnen. Klicke sofort.“ Was machst du?",
        "answers": [
          "Sofort klicken.",
          "Nicht klicken und prüfen.",
          "An alle Freunde weiterleiten."
        ],
        "correct": 1,
        "explanation": "Richtig. Gewinn-Links können Betrug sein. Erst prüfen, dann handeln."
      },
      {
        "question": "Jemand fordert ein privates Foto und sagt: „Sag es niemandem.“ Was ist das?",
        "answers": [
          "Ein Warnzeichen.",
          "Immer sicher.",
          "Eine Pflicht."
        ],
        "correct": 0,
        "explanation": "Richtig. Geheimhaltung und Druck sind Warnzeichen."
      },
      {
        "question": "Was ist in WhatsApp-Gruppen wichtig?",
        "answers": [
          "Viele können mitlesen.",
          "Niemand kann mitlesen.",
          "Private Daten gehören immer in Gruppen."
        ],
        "correct": 0,
        "explanation": "Richtig. In Gruppen lesen viele Menschen mit. Schreibe dort besonders vorsichtig."
      },
      {
        "question": "Welche Nachricht wirkt eher sicher?",
        "answers": [
          "„Hallo. Ich komme heute um 16 Uhr.“",
          "„Schick sofort dein Passwort.“",
          "„Klicke sofort, sonst passiert etwas.“"
        ],
        "correct": 0,
        "explanation": "Richtig. Die Nachricht ist klar, freundlich und macht keinen Druck."
      },
      {
        "question": "Was machst du, wenn dich jemand beleidigt oder bedrängt?",
        "answers": [
          "Blockieren, melden oder Hilfe holen.",
          "Zurück beleidigen.",
          "Alles geheim halten."
        ],
        "correct": 0,
        "explanation": "Richtig. Du darfst dich schützen und Hilfe holen."
      },
      {
        "question": "Eine Sprachnachricht enthält private Informationen. Was ist wichtig?",
        "answers": [
          "Sie kann weitergeleitet werden.",
          "Sie ist immer privat.",
          "Niemand kann sie speichern."
        ],
        "correct": 0,
        "explanation": "Richtig. Auch Sprachnachrichten können weitergeleitet werden."
      },
      {
        "question": "Was bedeutet Stopp-Regel?",
        "answers": [
          "Nicht sofort antworten, prüfen, Hilfe holen.",
          "Sofort klicken.",
          "Alles allein lösen."
        ],
        "correct": 0,
        "explanation": "Richtig. Die Stopp-Regel schützt dich bei Unsicherheit."
      },
      {
        "question": "Jemand will deine PIN im Chat. Was machst du?",
        "answers": [
          "Nicht schicken.",
          "Schicken, wenn die Person nett wirkt.",
          "In eine Gruppe posten."
        ],
        "correct": 0,
        "explanation": "Richtig. Eine PIN bleibt geheim."
      },
      {
        "question": "Wer kann helfen, wenn du unsicher bist?",
        "answers": [
          "eine Person, der du vertraust.",
          "Nur die fremde Person.",
          "Niemand."
        ],
        "correct": 0,
        "explanation": "Richtig. Du musst Probleme nicht allein lösen."
      }
    ],
    "certificateGoals": [
      "private Daten schützen",
      "komische Links erkennen",
      "bei Druck Hilfe holen"
    ]
  },
  {
    "id": "facebook",
    "title": "Facebook",
    "icon": "message",
    "desc": "Profil, Beiträge, Kommentare und Privatsphäre",
    "quiz": "https://kahoot.com",
    "lessons": [
      {
        "title": "Start",
        "icon": "start",
        "text": [
          "Diese Lernseite hilft dir, Facebook sicherer zu nutzen.",
          "Du lernst in kleinen Schritten.",
          "Am Ende kannst du ein Quiz machen."
        ],
        "remember": "Du bestimmst dein Tempo.",
        "module": "Modul 1: Facebook verstehen"
      },
      {
        "title": "Was ist Facebook?",
        "icon": "message",
        "text": [
          "Facebook ist ein soziales Netzwerk.",
          "Menschen können dort Beiträge, Fotos und Kommentare sehen.",
          "Du kannst mit anderen Menschen Kontakt halten."
        ],
        "remember": "Facebook ist ein Werkzeug für Kontakt und Inhalte.",
        "module": "Modul 1: Facebook verstehen"
      },
      {
        "title": "Was kann ich mit Facebook machen?",
        "icon": "message",
        "text": [
          "Mit Facebook kannst du viele Dinge tun."
        ],
        "bullets": [
          "Profil ansehen",
          "Beiträge schreiben",
          "Kommentare lesen"
        ],
        "remember": "Ich entscheide, was ich teile.",
        "module": "Modul 1: Facebook verstehen"
      },
      {
        "title": "Facebook im Alltag",
        "icon": "check",
        "text": [
          "Facebook kann im Alltag hilfreich sein."
        ],
        "bullets": [
          "Informationen bekommen",
          "Kontakt halten",
          "Inhalte ansehen oder teilen"
        ],
        "remember": "Facebook kann praktisch sein.",
        "module": "Modul 1: Facebook verstehen"
      },
      {
        "title": "Gute Inhalte erkennen",
        "icon": "check",
        "text": [
          "Ein guter Inhalt ist freundlich, klar und macht keinen Druck."
        ],
        "quote": "„Danke für die Info. Ich komme später.“",
        "success": "Das wirkt sicher. Es ist freundlich und ohne Druck.",
        "remember": "Gute Inhalte sind respektvoll.",
        "module": "Modul 1: Facebook verstehen"
      },
      {
        "title": "Modulstart: Private Daten schützen",
        "icon": "lock",
        "text": [
          "Jetzt geht es um private Daten.",
          "Du lernst, was du schützen sollst.",
          "Du lernst, wann du vorsichtig sein musst."
        ],
        "remember": "Private Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Was sind private Daten?",
        "icon": "lock",
        "text": [
          "Private Daten gehören dir.",
          "Du sollst sie nicht einfach veröffentlichen oder verschicken."
        ],
        "bullets": [
          "Profilfoto und Wohnort",
          "Freundesliste",
          "Passwörter"
        ],
        "remember": "Meine Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Beispiel: Adresse",
        "icon": "data",
        "text": [
          "Eine unbekannte Person fragt dich:"
        ],
        "quote": "Wo wohnst du? Schick mir deine Adresse.",
        "warning": "Das ist nicht sicher. Deine Adresse ist privat.",
        "remember": "Meine Adresse bleibt privat.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Beispiel: Passwort",
        "icon": "lock",
        "text": [
          "Eine Person schreibt dir:"
        ],
        "quote": "Gib mir dein Passwort. Ich helfe dir.",
        "warning": "Das ist Betrug. Niemand darf dein Passwort verlangen.",
        "remember": "Mein Passwort bleibt geheim.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Übung: Private Daten erkennen",
        "icon": "exercise",
        "exercise": {
          "id": "facebookPrivate",
          "question": "Nachricht: „Schick mir deine PIN. Ich helfe dir.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Eine PIN ist privat. Gib sie nicht weiter."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Eine PIN ist privat. Gib sie nicht weiter."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "check",
        "text": [
          "Du darfst Nein sagen.",
          "Du musst keine privaten Daten schicken.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Meine Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Modulstart: Beiträge, Fotos und Kommentare",
        "icon": "message",
        "text": [
          "Jetzt geht es um beiträge, fotos und kommentare.",
          "Inhalte können privat oder öffentlich sein.",
          "Du lernst, worauf du achten musst."
        ],
        "remember": "Ich entscheide, was ich teile.",
        "module": "Modul 3: Beiträge, Fotos und Kommentare"
      },
      {
        "title": "Beiträge teilen",
        "icon": "message",
        "text": [
          "Beiträge können weitergegeben oder gespeichert werden.",
          "Dann sehen vielleicht andere Menschen diesen Inhalt.",
          "Darum ist Vorsicht wichtig."
        ],
        "remember": "Ich denke nach, bevor ich teile.",
        "module": "Modul 3: Beiträge, Fotos und Kommentare"
      },
      {
        "title": "Private Inhalte",
        "icon": "block",
        "text": [
          "Manche Inhalte sind sehr privat."
        ],
        "bullets": [
          "Fotos von dir",
          "öffentliche Beiträge",
          "Kommentare über andere"
        ],
        "remember": "Ich entscheide über meine Inhalte.",
        "module": "Modul 3: Beiträge, Fotos und Kommentare"
      },
      {
        "title": "Beispiel: Druck",
        "icon": "warning",
        "text": [
          "Eine Person schreibt:"
        ],
        "quote": "„Poste das Foto von dir. Aber sag es niemandem.“",
        "warning": "Das ist ein Warnzeichen. Niemand darf dich unter Druck setzen.",
        "remember": "Ich darf Nein sagen.",
        "module": "Modul 3: Beiträge, Fotos und Kommentare"
      },
      {
        "title": "Nachrichten und Kommentare",
        "icon": "message",
        "text": [
          "Auch Worte können verletzen.",
          "Nachrichten und Kommentare können gespeichert werden.",
          "Darum solltest du vorher überlegen."
        ],
        "remember": "Ich schreibe respektvoll.",
        "module": "Modul 3: Beiträge, Fotos und Kommentare"
      },
      {
        "title": "Übung: Inhalt prüfen",
        "icon": "exercise",
        "exercise": {
          "id": "facebookContent",
          "question": "Nachricht: „Poste das. Aber sag es niemandem.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Das wirkt unsicher. Geheimhaltung und Druck sind Warnzeichen."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt unsicher. Geheimhaltung und Druck sind Warnzeichen."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 3: Beiträge, Fotos und Kommentare"
      },
      {
        "title": "Merksatz: Ich entscheide",
        "icon": "check",
        "text": [
          "Ich muss nichts posten.",
          "Ich muss nichts verschicken.",
          "Ich darf Nein sagen."
        ],
        "remember": "Ich entscheide über meine Inhalte.",
        "module": "Modul 3: Beiträge, Fotos und Kommentare"
      },
      {
        "title": "Modulstart: Beiträge, Werbung und Betrug",
        "icon": "warning",
        "text": [
          "Jetzt geht es um beiträge, werbung und betrug.",
          "Manche Inhalte sehen echt aus.",
          "Trotzdem können sie gefährlich sein."
        ],
        "remember": "Ich prüfe, bevor ich handle.",
        "module": "Modul 4: Beiträge, Werbung und Betrug"
      },
      {
        "title": "Komische Beiträge",
        "icon": "warning",
        "text": [
          "Manche Beiträge stimmen nicht.",
          "Manche Werbung will Daten oder Geld.",
          "Manche Menschen machen Druck."
        ],
        "remember": "Ich handle nicht sofort.",
        "module": "Modul 4: Beiträge, Werbung und Betrug"
      },
      {
        "title": "Beispiel: Lock-Nachricht",
        "icon": "warning",
        "text": [
          "Du bekommst diese Nachricht:"
        ],
        "quote": "Du hast gewonnen. Klicke und teile den Beitrag.",
        "warning": "Das kann Betrug sein. Reagiere nicht sofort.",
        "remember": "Erst prüfen. Dann handeln.",
        "module": "Modul 4: Beiträge, Werbung und Betrug"
      },
      {
        "title": "Betrug erkennen",
        "icon": "warning",
        "text": [
          "Vorsicht, wenn jemand:"
        ],
        "bullets": [
          "dein Passwort will",
          "Geld von dir verlangt",
          "Druck macht"
        ],
        "remember": "Druck ist ein Warnzeichen.",
        "module": "Modul 4: Beiträge, Werbung und Betrug"
      },
      {
        "title": "Wenn jemand Druck macht",
        "icon": "stop",
        "text": [
          "Warnzeichen sind:"
        ],
        "bullets": [
          "Mach sofort.",
          "Sag es niemandem.",
          "Sonst passiert etwas."
        ],
        "remember": "Druck bedeutet: Stopp und Hilfe holen.",
        "module": "Modul 4: Beiträge, Werbung und Betrug"
      },
      {
        "title": "Übung: Risiko prüfen",
        "icon": "exercise",
        "exercise": {
          "id": "facebookRisk",
          "question": "Beitrag: „Teile sofort. Sonst wird dein Konto gelöscht.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Das wirkt unsicher. Nicht sofort reagieren."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt unsicher. Nicht sofort reagieren."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 4: Beiträge, Werbung und Betrug"
      },
      {
        "title": "Merksatz: Erst prüfen",
        "icon": "check",
        "text": [
          "Ich reagiere nicht sofort.",
          "Ich prüfe die Nachricht.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Erst prüfen. Dann handeln.",
        "module": "Modul 4: Beiträge, Werbung und Betrug"
      },
      {
        "title": "Modulstart: Beiträge und Kommentare",
        "icon": "message",
        "text": [
          "Jetzt geht es um beiträge und kommentare.",
          "Viele Menschen können mitlesen.",
          "Darum ist gutes Verhalten wichtig."
        ],
        "remember": "Ich schreibe vorsichtig.",
        "module": "Modul 5: Beiträge und Kommentare"
      },
      {
        "title": "Beiträge und Kommentare",
        "icon": "message",
        "text": [
          "Viele Menschen können Inhalte sehen.",
          "Inhalte können schnell weitergegeben werden.",
          "Darum solltest du vorsichtig sein."
        ],
        "remember": "Viele können mitlesen.",
        "module": "Modul 5: Beiträge und Kommentare"
      },
      {
        "title": "Guter Beitrag",
        "icon": "message",
        "text": [
          "Ein guter Beitrag ist:"
        ],
        "bullets": [
          "freundlich",
          "kurz und verständlich",
          "ohne private Daten"
        ],
        "remember": "Ich schreibe respektvoll.",
        "module": "Modul 5: Beiträge und Kommentare"
      },
      {
        "title": "Schlechter Beitrag",
        "icon": "block",
        "text": [
          "Diese Dinge sind nicht gut:"
        ],
        "bullets": [
          "Beleidigungen",
          "Gerüchte",
          "private Fotos oder Daten"
        ],
        "remember": "Ich verletze andere nicht.",
        "module": "Modul 5: Beiträge und Kommentare"
      },
      {
        "title": "Streit oder Ärger",
        "icon": "message",
        "text": [
          "Manchmal gibt es Streit."
        ],
        "quote": "Du willst etwas Gemeines zurückschreiben.",
        "warning": "Besser: Pause machen. Nicht sofort antworten.",
        "remember": "Erst beruhigen. Dann entscheiden.",
        "module": "Modul 5: Beiträge und Kommentare"
      },
      {
        "title": "Übung: Gute Nachricht erkennen",
        "icon": "exercise",
        "exercise": {
          "id": "facebookGroup",
          "question": "„Danke für die Info. Ich komme später.“",
          "feedback": {
            "safe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt sicher. Es ist freundlich und ohne Druck."
            },
            "unsafe": {
              "type": "warning",
              "title": "Nicht ganz.",
              "text": "Das wirkt sicher. Es ist freundlich und ohne Druck."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 5: Beiträge und Kommentare"
      },
      {
        "title": "Stopp-Regel",
        "icon": "stop",
        "text": [
          "Wenn dir etwas komisch vorkommt:"
        ],
        "bullets": [
          "Stopp: Nicht sofort antworten",
          "Nicht klicken und nichts schicken",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Ich darf Nein sagen",
        "icon": "stop",
        "text": [
          "Du musst nicht antworten.",
          "Du musst nichts posten oder schicken.",
          "Du musst keinen Link anklicken."
        ],
        "remember": "Nein sagen ist erlaubt.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "So blockierst du jemanden",
        "icon": "block",
        "text": [
          "So kannst du dich schützen:"
        ],
        "bullets": [
          "Profil öffnen",
          "auf die Person oder Seite gehen",
          "Blockieren auswählen"
        ],
        "remember": "Ich darf mich schützen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "So meldest du etwas",
        "icon": "report",
        "text": [
          "Wenn du unsicher bist, frage eine Person, der du vertraust."
        ],
        "bullets": [
          "Beitrag oder Kommentar öffnen",
          "Melden auswählen",
          "eine Person informieren, der du vertraust"
        ],
        "remember": "Melden ist erlaubt.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Hilfe holen",
        "icon": "help",
        "text": [
          "Du musst Probleme nicht allein lösen.",
          "Hilfe holen ist richtig."
        ],
        "bullets": [
          "eine Person, der du vertraust",
          "eine Unterstützerin oder einen Unterstützer",
          "eine Digital-Begleiterin oder einen Digital-Begleiter",
          "bei Gefahr: Polizei 110"
        ],
        "remember": "Du darfst Unterstützung holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Datenschutz-Hinweis",
        "icon": "lock",
        "text": [
          "Diese Lernseite fragt keine privaten Daten ab.",
          "Du musst keinen Namen eingeben.",
          "Im Quiz nimmst du einen Spitznamen."
        ],
        "remember": "Ich bleibe anonym.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Wiederholung",
        "icon": "example",
        "text": [
          "Was mache ich bei einem Problem?"
        ],
        "bullets": [
          "nicht sofort antworten",
          "nichts Privates teilen",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Quiz und Abschluss",
        "icon": "quiz",
        "text": [
          "Gut gemacht.",
          "Du hast wichtige Regeln gelernt.",
          "Jetzt kannst du dein Wissen testen."
        ],
        "bullets": [
          "Nutze keinen echten Namen.",
          "Nimm einen Spitznamen.",
          "Das Quiz ist zum Üben."
        ],
        "remember": "Ich hole Hilfe, wenn ich unsicher bin.",
        "quiz": true,
        "module": "Modul 6: Schutz und Hilfe"
      }
    ],
    "illustration": "assets/illustrations/facebook.svg",
    "quizQuestions": [
      {
        "question": "Du möchtest schreiben: „Ich bin die ganze Woche nicht zu Hause.“ Was prüfst du?",
        "answers": [
          "Wer den Beitrag sehen kann.",
          "Ob der Beitrag lustig ist.",
          "Ob genug Emojis drin sind."
        ],
        "correct": 0,
        "explanation": "Richtig. Öffentliche Beiträge können von vielen gesehen werden."
      },
      {
        "question": "Welche Information gehört nicht öffentlich ins Profil?",
        "answers": [
          "Adresse.",
          "Vorname.",
          "Lieblingsmusik."
        ],
        "correct": 0,
        "explanation": "Richtig. Die Adresse ist privat."
      },
      {
        "question": "Eine fremde Person sendet eine Freundschaftsanfrage. Was machst du?",
        "answers": [
          "Erst prüfen oder ablehnen.",
          "Immer annehmen.",
          "Passwort schicken."
        ],
        "correct": 0,
        "explanation": "Richtig. Fremde Anfragen müssen nicht angenommen werden."
      },
      {
        "question": "Was ist bei Kommentaren wichtig?",
        "answers": [
          "Respektvoll schreiben.",
          "Beleidigen.",
          "Gerüchte verbreiten."
        ],
        "correct": 0,
        "explanation": "Richtig. Kommentare sollen andere nicht verletzen."
      },
      {
        "question": "Du siehst einen beleidigenden Kommentar. Was kannst du tun?",
        "answers": [
          "Nicht mitstreiten, melden oder Hilfe holen.",
          "Zurück beleidigen.",
          "Die eigene Adresse posten."
        ],
        "correct": 0,
        "explanation": "Richtig. Nicht mitstreiten ist sicherer."
      },
      {
        "question": "Du willst ein Foto von einer anderen Person posten. Was ist richtig?",
        "answers": [
          "Vorher fragen.",
          "Einfach posten.",
          "Nur später löschen."
        ],
        "correct": 0,
        "explanation": "Richtig. Andere Personen entscheiden über ihre Bilder mit."
      },
      {
        "question": "Was bedeutet öffentlich bei einem Beitrag?",
        "answers": [
          "Viele Menschen können ihn sehen.",
          "Nur du kannst ihn sehen.",
          "Er verschwindet sofort."
        ],
        "correct": 0,
        "explanation": "Richtig. Öffentlich bedeutet: sehr viele können mitlesen."
      },
      {
        "question": "Jemand macht Druck und will Geld. Was machst du?",
        "answers": [
          "Nicht zahlen und Hilfe holen.",
          "Sofort zahlen.",
          "Bankdaten schicken."
        ],
        "correct": 0,
        "explanation": "Richtig. Druck und Geldforderungen sind Warnzeichen."
      },
      {
        "question": "Was darfst du bei Belästigung tun?",
        "answers": [
          "Blockieren und melden.",
          "Alles geheim halten.",
          "Zurück drohen."
        ],
        "correct": 0,
        "explanation": "Richtig. Blockieren und Melden kann schützen."
      },
      {
        "question": "Was ist ein guter Facebook-Merksatz?",
        "answers": [
          "Ich prüfe, bevor ich teile.",
          "Ich teile alles sofort.",
          "Fremde bekommen alle Daten."
        ],
        "correct": 0,
        "explanation": "Richtig. Prüfen vor dem Teilen schützt dich."
      }
    ],
    "certificateGoals": [
      "Profil und Beiträge prüfen",
      "fremde Anfragen einschätzen",
      "blockieren oder melden"
    ]
  },
  {
    "id": "instagram",
    "title": "Instagram",
    "icon": "photo",
    "desc": "Fotos, Stories, Reels und Nachrichten",
    "quiz": "https://kahoot.com",
    "lessons": [
      {
        "title": "Start",
        "icon": "start",
        "text": [
          "Diese Lernseite hilft dir, Instagram sicherer zu nutzen.",
          "Du lernst in kleinen Schritten.",
          "Am Ende kannst du ein Quiz machen."
        ],
        "remember": "Du bestimmst dein Tempo.",
        "module": "Modul 1: Instagram verstehen"
      },
      {
        "title": "Was ist Instagram?",
        "icon": "photo",
        "text": [
          "Instagram ist eine App für Fotos, Stories und Reels.",
          "Viele Inhalte sind sichtbar für andere.",
          "Darum ist Privatsphäre wichtig."
        ],
        "remember": "Instagram ist ein Werkzeug für Kontakt und Inhalte.",
        "module": "Modul 1: Instagram verstehen"
      },
      {
        "title": "Was kann ich mit Instagram machen?",
        "icon": "photo",
        "text": [
          "Mit Instagram kannst du viele Dinge tun."
        ],
        "bullets": [
          "Fotos ansehen",
          "Stories posten",
          "Reels anschauen"
        ],
        "remember": "Ich entscheide, was ich teile.",
        "module": "Modul 1: Instagram verstehen"
      },
      {
        "title": "Instagram im Alltag",
        "icon": "check",
        "text": [
          "Instagram kann im Alltag hilfreich sein."
        ],
        "bullets": [
          "Informationen bekommen",
          "Kontakt halten",
          "Inhalte ansehen oder teilen"
        ],
        "remember": "Instagram kann praktisch sein.",
        "module": "Modul 1: Instagram verstehen"
      },
      {
        "title": "Gute Inhalte erkennen",
        "icon": "check",
        "text": [
          "Ein guter Inhalt ist freundlich, klar und macht keinen Druck."
        ],
        "quote": "„Danke für deine Nachricht. Ich antworte später.“",
        "success": "Das wirkt sicher. Es ist freundlich und ohne Druck.",
        "remember": "Gute Inhalte sind respektvoll.",
        "module": "Modul 1: Instagram verstehen"
      },
      {
        "title": "Modulstart: Private Daten schützen",
        "icon": "lock",
        "text": [
          "Jetzt geht es um private Daten.",
          "Du lernst, was du schützen sollst.",
          "Du lernst, wann du vorsichtig sein musst."
        ],
        "remember": "Private Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Was sind private Daten?",
        "icon": "lock",
        "text": [
          "Private Daten gehören dir.",
          "Du sollst sie nicht einfach veröffentlichen oder verschicken."
        ],
        "bullets": [
          "Profilfoto und Wohnort",
          "Standort",
          "Passwörter"
        ],
        "remember": "Meine Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Beispiel: Adresse",
        "icon": "data",
        "text": [
          "Eine unbekannte Person fragt dich:"
        ],
        "quote": "Wo wohnst du? Schick mir deine Adresse.",
        "warning": "Das ist nicht sicher. Deine Adresse ist privat.",
        "remember": "Meine Adresse bleibt privat.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Beispiel: Passwort",
        "icon": "lock",
        "text": [
          "Eine Person schreibt dir:"
        ],
        "quote": "Gib mir dein Passwort. Ich helfe dir.",
        "warning": "Das ist Betrug. Niemand darf dein Passwort verlangen.",
        "remember": "Mein Passwort bleibt geheim.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Übung: Private Daten erkennen",
        "icon": "exercise",
        "exercise": {
          "id": "instagramPrivate",
          "question": "Nachricht: „Schick mir deine PIN. Ich helfe dir.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Eine PIN ist privat. Gib sie nicht weiter."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Eine PIN ist privat. Gib sie nicht weiter."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "check",
        "text": [
          "Du darfst Nein sagen.",
          "Du musst keine privaten Daten schicken.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Meine Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Modulstart: Fotos, Stories und Reels",
        "icon": "photo",
        "text": [
          "Jetzt geht es um fotos, stories und reels.",
          "Inhalte können privat oder öffentlich sein.",
          "Du lernst, worauf du achten musst."
        ],
        "remember": "Ich entscheide, was ich teile.",
        "module": "Modul 3: Fotos, Stories und Reels"
      },
      {
        "title": "Fotos teilen",
        "icon": "photo",
        "text": [
          "Fotos können weitergegeben oder gespeichert werden.",
          "Dann sehen vielleicht andere Menschen diesen Inhalt.",
          "Darum ist Vorsicht wichtig."
        ],
        "remember": "Ich denke nach, bevor ich teile.",
        "module": "Modul 3: Fotos, Stories und Reels"
      },
      {
        "title": "Private Inhalte",
        "icon": "block",
        "text": [
          "Manche Inhalte sind sehr privat."
        ],
        "bullets": [
          "private Fotos",
          "Stories mit Standort",
          "Videos mit anderen Personen"
        ],
        "remember": "Ich entscheide über meine Inhalte.",
        "module": "Modul 3: Fotos, Stories und Reels"
      },
      {
        "title": "Beispiel: Druck",
        "icon": "warning",
        "text": [
          "Eine Person schreibt:"
        ],
        "quote": "„Schick mir ein privates Foto. Sag es niemandem.“",
        "warning": "Das ist ein Warnzeichen. Niemand darf dich unter Druck setzen.",
        "remember": "Ich darf Nein sagen.",
        "module": "Modul 3: Fotos, Stories und Reels"
      },
      {
        "title": "Nachrichten und Kommentare",
        "icon": "message",
        "text": [
          "Auch Worte können verletzen.",
          "Nachrichten und Kommentare können gespeichert werden.",
          "Darum solltest du vorher überlegen."
        ],
        "remember": "Ich schreibe respektvoll.",
        "module": "Modul 3: Fotos, Stories und Reels"
      },
      {
        "title": "Übung: Inhalt prüfen",
        "icon": "exercise",
        "exercise": {
          "id": "instagramContent",
          "question": "Nachricht: „Poste das. Aber sag es niemandem.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Das wirkt unsicher. Geheimhaltung und Druck sind Warnzeichen."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt unsicher. Geheimhaltung und Druck sind Warnzeichen."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 3: Fotos, Stories und Reels"
      },
      {
        "title": "Merksatz: Ich entscheide",
        "icon": "check",
        "text": [
          "Ich muss nichts posten.",
          "Ich muss nichts verschicken.",
          "Ich darf Nein sagen."
        ],
        "remember": "Ich entscheide über meine Inhalte.",
        "module": "Modul 3: Fotos, Stories und Reels"
      },
      {
        "title": "Modulstart: Stories, Werbung und Betrug",
        "icon": "warning",
        "text": [
          "Jetzt geht es um stories, werbung und betrug.",
          "Manche Inhalte sehen echt aus.",
          "Trotzdem können sie gefährlich sein."
        ],
        "remember": "Ich prüfe, bevor ich handle.",
        "module": "Modul 4: Stories, Werbung und Betrug"
      },
      {
        "title": "Komische Nachrichten",
        "icon": "warning",
        "text": [
          "Manche Nachrichten machen Druck.",
          "Manche Werbung verspricht zu viel.",
          "Manche Links führen zu Betrug."
        ],
        "remember": "Ich handle nicht sofort.",
        "module": "Modul 4: Stories, Werbung und Betrug"
      },
      {
        "title": "Beispiel: Lock-Nachricht",
        "icon": "warning",
        "text": [
          "Du bekommst diese Nachricht:"
        ],
        "quote": "Du hast gewonnen. Klicke sofort in meiner Bio.",
        "warning": "Das kann Betrug sein. Reagiere nicht sofort.",
        "remember": "Erst prüfen. Dann handeln.",
        "module": "Modul 4: Stories, Werbung und Betrug"
      },
      {
        "title": "Betrug erkennen",
        "icon": "warning",
        "text": [
          "Vorsicht, wenn jemand:"
        ],
        "bullets": [
          "dein Passwort will",
          "Geld von dir verlangt",
          "Druck macht"
        ],
        "remember": "Druck ist ein Warnzeichen.",
        "module": "Modul 4: Stories, Werbung und Betrug"
      },
      {
        "title": "Wenn jemand Druck macht",
        "icon": "stop",
        "text": [
          "Warnzeichen sind:"
        ],
        "bullets": [
          "Mach sofort.",
          "Sag es niemandem.",
          "Sonst passiert etwas."
        ],
        "remember": "Druck bedeutet: Stopp und Hilfe holen.",
        "module": "Modul 4: Stories, Werbung und Betrug"
      },
      {
        "title": "Übung: Risiko prüfen",
        "icon": "exercise",
        "exercise": {
          "id": "instagramRisk",
          "question": "Nachricht: „Klicke sofort auf den Link in der Bio.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Das wirkt unsicher. Nicht sofort reagieren."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt unsicher. Nicht sofort reagieren."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 4: Stories, Werbung und Betrug"
      },
      {
        "title": "Merksatz: Erst prüfen",
        "icon": "check",
        "text": [
          "Ich reagiere nicht sofort.",
          "Ich prüfe die Nachricht.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Erst prüfen. Dann handeln.",
        "module": "Modul 4: Stories, Werbung und Betrug"
      },
      {
        "title": "Modulstart: Kommentare und Nachrichten",
        "icon": "message",
        "text": [
          "Jetzt geht es um kommentare und nachrichten.",
          "Viele Menschen können mitlesen.",
          "Darum ist gutes Verhalten wichtig."
        ],
        "remember": "Ich schreibe vorsichtig.",
        "module": "Modul 5: Kommentare und Nachrichten"
      },
      {
        "title": "Kommentare und Nachrichten",
        "icon": "message",
        "text": [
          "Viele Menschen können Inhalte sehen.",
          "Inhalte können schnell weitergegeben werden.",
          "Darum solltest du vorsichtig sein."
        ],
        "remember": "Viele können mitlesen.",
        "module": "Modul 5: Kommentare und Nachrichten"
      },
      {
        "title": "Guter Beitrag",
        "icon": "message",
        "text": [
          "Ein guter Beitrag ist:"
        ],
        "bullets": [
          "freundlich",
          "kurz und verständlich",
          "ohne private Daten"
        ],
        "remember": "Ich schreibe respektvoll.",
        "module": "Modul 5: Kommentare und Nachrichten"
      },
      {
        "title": "Schlechter Beitrag",
        "icon": "block",
        "text": [
          "Diese Dinge sind nicht gut:"
        ],
        "bullets": [
          "Beleidigungen",
          "Gerüchte",
          "private Fotos oder Daten"
        ],
        "remember": "Ich verletze andere nicht.",
        "module": "Modul 5: Kommentare und Nachrichten"
      },
      {
        "title": "Streit oder Ärger",
        "icon": "message",
        "text": [
          "Manchmal gibt es Streit."
        ],
        "quote": "Du willst etwas Gemeines zurückschreiben.",
        "warning": "Besser: Pause machen. Nicht sofort antworten.",
        "remember": "Erst beruhigen. Dann entscheiden.",
        "module": "Modul 5: Kommentare und Nachrichten"
      },
      {
        "title": "Übung: Gute Nachricht erkennen",
        "icon": "exercise",
        "exercise": {
          "id": "instagramGroup",
          "question": "„Danke für deine Nachricht. Ich antworte später.“",
          "feedback": {
            "safe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt sicher. Es ist freundlich und ohne Druck."
            },
            "unsafe": {
              "type": "warning",
              "title": "Nicht ganz.",
              "text": "Das wirkt sicher. Es ist freundlich und ohne Druck."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 5: Kommentare und Nachrichten"
      },
      {
        "title": "Stopp-Regel",
        "icon": "stop",
        "text": [
          "Wenn dir etwas komisch vorkommt:"
        ],
        "bullets": [
          "Stopp: Nicht sofort antworten",
          "Nicht klicken und nichts schicken",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Ich darf Nein sagen",
        "icon": "stop",
        "text": [
          "Du musst nicht antworten.",
          "Du musst nichts posten oder schicken.",
          "Du musst keinen Link anklicken."
        ],
        "remember": "Nein sagen ist erlaubt.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "So blockierst du jemanden",
        "icon": "block",
        "text": [
          "So kannst du dich schützen:"
        ],
        "bullets": [
          "Profil öffnen",
          "auf die drei Punkte tippen",
          "Blockieren auswählen"
        ],
        "remember": "Ich darf mich schützen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "So meldest du etwas",
        "icon": "report",
        "text": [
          "Wenn du unsicher bist, frage eine Person, der du vertraust."
        ],
        "bullets": [
          "Beitrag oder Nachricht öffnen",
          "Melden auswählen",
          "eine Person informieren, der du vertraust"
        ],
        "remember": "Melden ist erlaubt.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Hilfe holen",
        "icon": "help",
        "text": [
          "Du musst Probleme nicht allein lösen.",
          "Hilfe holen ist richtig."
        ],
        "bullets": [
          "eine Person, der du vertraust",
          "eine Unterstützerin oder einen Unterstützer",
          "eine Digital-Begleiterin oder einen Digital-Begleiter",
          "bei Gefahr: Polizei 110"
        ],
        "remember": "Du darfst Unterstützung holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Datenschutz-Hinweis",
        "icon": "lock",
        "text": [
          "Diese Lernseite fragt keine privaten Daten ab.",
          "Du musst keinen Namen eingeben.",
          "Im Quiz nimmst du einen Spitznamen."
        ],
        "remember": "Ich bleibe anonym.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Wiederholung",
        "icon": "example",
        "text": [
          "Was mache ich bei einem Problem?"
        ],
        "bullets": [
          "nicht sofort antworten",
          "nichts Privates teilen",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Quiz und Abschluss",
        "icon": "quiz",
        "text": [
          "Gut gemacht.",
          "Du hast wichtige Regeln gelernt.",
          "Jetzt kannst du dein Wissen testen."
        ],
        "bullets": [
          "Nutze keinen echten Namen.",
          "Nimm einen Spitznamen.",
          "Das Quiz ist zum Üben."
        ],
        "remember": "Ich hole Hilfe, wenn ich unsicher bin.",
        "quiz": true,
        "module": "Modul 6: Schutz und Hilfe"
      }
    ],
    "illustration": "assets/illustrations/instagram.svg",
    "quizQuestions": [
      {
        "question": "Du willst ein Foto posten, auf dem eine andere Person zu sehen ist. Was machst du?",
        "answers": [
          "Vorher fragen.",
          "Einfach posten.",
          "Person markieren, ohne zu fragen."
        ],
        "correct": 0,
        "explanation": "Richtig. Andere Personen müssen einverstanden sein."
      },
      {
        "question": "Warum ist Standort in Stories sensibel?",
        "answers": [
          "Er zeigt, wo du bist.",
          "Er macht dich automatisch sicher.",
          "Er ist immer egal."
        ],
        "correct": 0,
        "explanation": "Richtig. Der Standort kann verraten, wo du bist."
      },
      {
        "question": "Was bedeutet ein privates Profil?",
        "answers": [
          "Nicht alle können alles sehen.",
          "Alle sehen alles.",
          "Niemand kann die App nutzen."
        ],
        "correct": 0,
        "explanation": "Richtig. Ein privates Profil kann besser schützen."
      },
      {
        "question": "Jemand schreibt: „Schick mir ein privates Foto.“ Was machst du?",
        "answers": [
          "Nein sagen und Hilfe holen.",
          "Foto schicken.",
          "Geheim halten."
        ],
        "correct": 0,
        "explanation": "Richtig. Du musst keine privaten Fotos schicken."
      },
      {
        "question": "Was ist bei Likes wichtig?",
        "answers": [
          "Likes sagen nichts über deinen Wert.",
          "Likes entscheiden alles.",
          "Ohne Likes bist du falsch."
        ],
        "correct": 0,
        "explanation": "Richtig. Dein Wert hängt nicht von Likes ab."
      },
      {
        "question": "Eine Story verschwindet später. Ist sie deshalb immer sicher?",
        "answers": [
          "Nein, jemand kann sie speichern.",
          "Ja, immer.",
          "Nur bei Fremden."
        ],
        "correct": 0,
        "explanation": "Richtig. Auch Stories können per Screenshot gespeichert werden."
      },
      {
        "question": "Was machst du bei beleidigenden Kommentaren?",
        "answers": [
          "Nicht mitstreiten, blockieren oder melden.",
          "Zurück beleidigen.",
          "Private Daten posten."
        ],
        "correct": 0,
        "explanation": "Richtig. Du darfst dich schützen."
      },
      {
        "question": "Eine Nachricht macht Druck: „Klicke sofort auf den Link.“ Was machst du?",
        "answers": [
          "Nicht sofort klicken.",
          "Sofort klicken.",
          "An alle weiterleiten."
        ],
        "correct": 0,
        "explanation": "Richtig. Druck und Links sind Warnzeichen."
      },
      {
        "question": "Was ist eine gute Instagram-Regel?",
        "answers": [
          "Vor dem Posten überlegen.",
          "Alles sofort posten.",
          "Standort immer zeigen."
        ],
        "correct": 0,
        "explanation": "Richtig. Vorher überlegen schützt dich und andere."
      },
      {
        "question": "Wer kann helfen, wenn dich etwas belastet?",
        "answers": [
          "eine Person, der du vertraust.",
          "Nur fremde Follower.",
          "Niemand."
        ],
        "correct": 0,
        "explanation": "Richtig. Hilfe holen ist erlaubt."
      }
    ],
    "certificateGoals": [
      "Fotos bewusst posten",
      "Stories und Standort prüfen",
      "Nachrichten sicher einschätzen"
    ]
  },
  {
    "id": "youtube",
    "title": "YouTube",
    "icon": "understand",
    "desc": "Videos ansehen, Kommentare und Werbung prüfen",
    "quiz": "https://kahoot.com",
    "lessons": [
      {
        "title": "Start",
        "icon": "start",
        "text": [
          "Diese Lernseite hilft dir, YouTube sicherer zu nutzen.",
          "Du lernst in kleinen Schritten.",
          "Am Ende kannst du ein Quiz machen."
        ],
        "remember": "Du bestimmst dein Tempo.",
        "module": "Modul 1: YouTube verstehen"
      },
      {
        "title": "Was ist YouTube?",
        "icon": "understand",
        "text": [
          "YouTube ist eine Plattform für Videos.",
          "Du kannst Videos ansehen und Kommentare lesen.",
          "Nicht jedes Video ist richtig oder sicher."
        ],
        "remember": "YouTube ist ein Werkzeug für Kontakt und Inhalte.",
        "module": "Modul 1: YouTube verstehen"
      },
      {
        "title": "Was kann ich mit YouTube machen?",
        "icon": "understand",
        "text": [
          "Mit YouTube kannst du viele Dinge tun."
        ],
        "bullets": [
          "Videos ansehen",
          "Kanäle abonnieren",
          "Kommentare lesen"
        ],
        "remember": "Ich entscheide, was ich teile.",
        "module": "Modul 1: YouTube verstehen"
      },
      {
        "title": "YouTube im Alltag",
        "icon": "check",
        "text": [
          "YouTube kann im Alltag hilfreich sein."
        ],
        "bullets": [
          "Informationen bekommen",
          "Kontakt halten",
          "Inhalte ansehen oder teilen"
        ],
        "remember": "YouTube kann praktisch sein.",
        "module": "Modul 1: YouTube verstehen"
      },
      {
        "title": "Gute Inhalte erkennen",
        "icon": "check",
        "text": [
          "Ein guter Inhalt ist freundlich, klar und macht keinen Druck."
        ],
        "quote": "„Danke für das Video. Das hat mir geholfen.“",
        "success": "Das wirkt sicher. Es ist freundlich und ohne Druck.",
        "remember": "Gute Inhalte sind respektvoll.",
        "module": "Modul 1: YouTube verstehen"
      },
      {
        "title": "Modulstart: Private Daten schützen",
        "icon": "lock",
        "text": [
          "Jetzt geht es um private Daten.",
          "Du lernst, was du schützen sollst.",
          "Du lernst, wann du vorsichtig sein musst."
        ],
        "remember": "Private Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Was sind private Daten?",
        "icon": "lock",
        "text": [
          "Private Daten gehören dir.",
          "Du sollst sie nicht einfach veröffentlichen oder verschicken."
        ],
        "bullets": [
          "Name im Kommentar",
          "Interessen",
          "Passwörter"
        ],
        "remember": "Meine Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Beispiel: Adresse",
        "icon": "data",
        "text": [
          "Eine unbekannte Person fragt dich:"
        ],
        "quote": "Wo wohnst du? Schick mir deine Adresse.",
        "warning": "Das ist nicht sicher. Deine Adresse ist privat.",
        "remember": "Meine Adresse bleibt privat.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Beispiel: Passwort",
        "icon": "lock",
        "text": [
          "Eine Person schreibt dir:"
        ],
        "quote": "Gib mir dein Passwort. Ich helfe dir.",
        "warning": "Das ist Betrug. Niemand darf dein Passwort verlangen.",
        "remember": "Mein Passwort bleibt geheim.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Übung: Private Daten erkennen",
        "icon": "exercise",
        "exercise": {
          "id": "youtubePrivate",
          "question": "Nachricht: „Schick mir deine PIN. Ich helfe dir.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Eine PIN ist privat. Gib sie nicht weiter."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Eine PIN ist privat. Gib sie nicht weiter."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "check",
        "text": [
          "Du darfst Nein sagen.",
          "Du musst keine privaten Daten schicken.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Meine Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Modulstart: Videos, Kommentare und Werbung",
        "icon": "understand",
        "text": [
          "Jetzt geht es um videos, kommentare und werbung.",
          "Inhalte können privat oder öffentlich sein.",
          "Du lernst, worauf du achten musst."
        ],
        "remember": "Ich entscheide, was ich teile.",
        "module": "Modul 3: Videos, Kommentare und Werbung"
      },
      {
        "title": "Videos teilen",
        "icon": "understand",
        "text": [
          "Videos können weitergegeben oder gespeichert werden.",
          "Dann sehen vielleicht andere Menschen diesen Inhalt.",
          "Darum ist Vorsicht wichtig."
        ],
        "remember": "Ich denke nach, bevor ich teile.",
        "module": "Modul 3: Videos, Kommentare und Werbung"
      },
      {
        "title": "Private Inhalte",
        "icon": "block",
        "text": [
          "Manche Inhalte sind sehr privat."
        ],
        "bullets": [
          "private Kommentare",
          "peinliche Videos",
          "Videos mit anderen Personen"
        ],
        "remember": "Ich entscheide über meine Inhalte.",
        "module": "Modul 3: Videos, Kommentare und Werbung"
      },
      {
        "title": "Beispiel: Druck",
        "icon": "warning",
        "text": [
          "Eine Person schreibt:"
        ],
        "quote": "„Schreib deine Telefonnummer in die Kommentare.“",
        "warning": "Das ist ein Warnzeichen. Niemand darf dich unter Druck setzen.",
        "remember": "Ich darf Nein sagen.",
        "module": "Modul 3: Videos, Kommentare und Werbung"
      },
      {
        "title": "Nachrichten und Kommentare",
        "icon": "message",
        "text": [
          "Auch Worte können verletzen.",
          "Nachrichten und Kommentare können gespeichert werden.",
          "Darum solltest du vorher überlegen."
        ],
        "remember": "Ich schreibe respektvoll.",
        "module": "Modul 3: Videos, Kommentare und Werbung"
      },
      {
        "title": "Übung: Inhalt prüfen",
        "icon": "exercise",
        "exercise": {
          "id": "youtubeContent",
          "question": "Nachricht: „Poste das. Aber sag es niemandem.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Das wirkt unsicher. Geheimhaltung und Druck sind Warnzeichen."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt unsicher. Geheimhaltung und Druck sind Warnzeichen."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 3: Videos, Kommentare und Werbung"
      },
      {
        "title": "Merksatz: Ich entscheide",
        "icon": "check",
        "text": [
          "Ich muss nichts posten.",
          "Ich muss nichts verschicken.",
          "Ich darf Nein sagen."
        ],
        "remember": "Ich entscheide über meine Inhalte.",
        "module": "Modul 3: Videos, Kommentare und Werbung"
      },
      {
        "title": "Modulstart: Werbung, Fake News und Betrug",
        "icon": "warning",
        "text": [
          "Jetzt geht es um werbung, fake news und betrug.",
          "Manche Inhalte sehen echt aus.",
          "Trotzdem können sie gefährlich sein."
        ],
        "remember": "Ich prüfe, bevor ich handle.",
        "module": "Modul 4: Werbung, Fake News und Betrug"
      },
      {
        "title": "Komische Videos",
        "icon": "warning",
        "text": [
          "Manche Videos sind falsch.",
          "Manche Werbung will Geld.",
          "Manche Kommentare sind Betrug."
        ],
        "remember": "Ich handle nicht sofort.",
        "module": "Modul 4: Werbung, Fake News und Betrug"
      },
      {
        "title": "Beispiel: Lock-Nachricht",
        "icon": "warning",
        "text": [
          "Du bekommst diese Nachricht:"
        ],
        "quote": "Kaufe sofort. Nur heute wirst du reich.",
        "warning": "Das kann Betrug sein. Reagiere nicht sofort.",
        "remember": "Erst prüfen. Dann handeln.",
        "module": "Modul 4: Werbung, Fake News und Betrug"
      },
      {
        "title": "Betrug erkennen",
        "icon": "warning",
        "text": [
          "Vorsicht, wenn jemand:"
        ],
        "bullets": [
          "dein Passwort will",
          "Geld von dir verlangt",
          "Druck macht"
        ],
        "remember": "Druck ist ein Warnzeichen.",
        "module": "Modul 4: Werbung, Fake News und Betrug"
      },
      {
        "title": "Wenn jemand Druck macht",
        "icon": "stop",
        "text": [
          "Warnzeichen sind:"
        ],
        "bullets": [
          "Mach sofort.",
          "Sag es niemandem.",
          "Sonst passiert etwas."
        ],
        "remember": "Druck bedeutet: Stopp und Hilfe holen.",
        "module": "Modul 4: Werbung, Fake News und Betrug"
      },
      {
        "title": "Übung: Risiko prüfen",
        "icon": "exercise",
        "exercise": {
          "id": "youtubeRisk",
          "question": "Video: „Kaufe sofort. Nur heute wirst du reich.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Das wirkt unsicher. Nicht sofort reagieren."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt unsicher. Nicht sofort reagieren."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 4: Werbung, Fake News und Betrug"
      },
      {
        "title": "Merksatz: Erst prüfen",
        "icon": "check",
        "text": [
          "Ich reagiere nicht sofort.",
          "Ich prüfe die Nachricht.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Erst prüfen. Dann handeln.",
        "module": "Modul 4: Werbung, Fake News und Betrug"
      },
      {
        "title": "Modulstart: Kommentare und Community",
        "icon": "message",
        "text": [
          "Jetzt geht es um kommentare und community.",
          "Viele Menschen können mitlesen.",
          "Darum ist gutes Verhalten wichtig."
        ],
        "remember": "Ich schreibe vorsichtig.",
        "module": "Modul 5: Kommentare und Community"
      },
      {
        "title": "Kommentare und Community",
        "icon": "message",
        "text": [
          "Viele Menschen können Inhalte sehen.",
          "Inhalte können schnell weitergegeben werden.",
          "Darum solltest du vorsichtig sein."
        ],
        "remember": "Viele können mitlesen.",
        "module": "Modul 5: Kommentare und Community"
      },
      {
        "title": "Guter Beitrag",
        "icon": "message",
        "text": [
          "Ein guter Beitrag ist:"
        ],
        "bullets": [
          "freundlich",
          "kurz und verständlich",
          "ohne private Daten"
        ],
        "remember": "Ich schreibe respektvoll.",
        "module": "Modul 5: Kommentare und Community"
      },
      {
        "title": "Schlechter Beitrag",
        "icon": "block",
        "text": [
          "Diese Dinge sind nicht gut:"
        ],
        "bullets": [
          "Beleidigungen",
          "Gerüchte",
          "private Fotos oder Daten"
        ],
        "remember": "Ich verletze andere nicht.",
        "module": "Modul 5: Kommentare und Community"
      },
      {
        "title": "Streit oder Ärger",
        "icon": "message",
        "text": [
          "Manchmal gibt es Streit."
        ],
        "quote": "Du willst etwas Gemeines zurückschreiben.",
        "warning": "Besser: Pause machen. Nicht sofort antworten.",
        "remember": "Erst beruhigen. Dann entscheiden.",
        "module": "Modul 5: Kommentare und Community"
      },
      {
        "title": "Übung: Gute Nachricht erkennen",
        "icon": "exercise",
        "exercise": {
          "id": "youtubeGroup",
          "question": "„Danke für das Video. Das hat mir geholfen.“",
          "feedback": {
            "safe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt sicher. Es ist freundlich und ohne Druck."
            },
            "unsafe": {
              "type": "warning",
              "title": "Nicht ganz.",
              "text": "Das wirkt sicher. Es ist freundlich und ohne Druck."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 5: Kommentare und Community"
      },
      {
        "title": "Stopp-Regel",
        "icon": "stop",
        "text": [
          "Wenn dir etwas komisch vorkommt:"
        ],
        "bullets": [
          "Stopp: Nicht sofort antworten",
          "Nicht klicken und nichts schicken",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Ich darf Nein sagen",
        "icon": "stop",
        "text": [
          "Du musst nicht antworten.",
          "Du musst nichts posten oder schicken.",
          "Du musst keinen Link anklicken."
        ],
        "remember": "Nein sagen ist erlaubt.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "So blockierst du jemanden",
        "icon": "block",
        "text": [
          "So kannst du dich schützen:"
        ],
        "bullets": [
          "Kommentar oder Kanal öffnen",
          "Nutzer blockieren, wenn möglich",
          "eine Person fragen, der du vertraust"
        ],
        "remember": "Ich darf mich schützen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "So meldest du etwas",
        "icon": "report",
        "text": [
          "Wenn du unsicher bist, frage eine Person, der du vertraust."
        ],
        "bullets": [
          "Video oder Kommentar öffnen",
          "Melden auswählen",
          "eine Person informieren, der du vertraust"
        ],
        "remember": "Melden ist erlaubt.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Hilfe holen",
        "icon": "help",
        "text": [
          "Du musst Probleme nicht allein lösen.",
          "Hilfe holen ist richtig."
        ],
        "bullets": [
          "eine Person, der du vertraust",
          "eine Unterstützerin oder einen Unterstützer",
          "eine Digital-Begleiterin oder einen Digital-Begleiter",
          "bei Gefahr: Polizei 110"
        ],
        "remember": "Du darfst Unterstützung holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Datenschutz-Hinweis",
        "icon": "lock",
        "text": [
          "Diese Lernseite fragt keine privaten Daten ab.",
          "Du musst keinen Namen eingeben.",
          "Im Quiz nimmst du einen Spitznamen."
        ],
        "remember": "Ich bleibe anonym.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Wiederholung",
        "icon": "example",
        "text": [
          "Was mache ich bei einem Problem?"
        ],
        "bullets": [
          "nicht sofort antworten",
          "nichts Privates teilen",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Quiz und Abschluss",
        "icon": "quiz",
        "text": [
          "Gut gemacht.",
          "Du hast wichtige Regeln gelernt.",
          "Jetzt kannst du dein Wissen testen."
        ],
        "bullets": [
          "Nutze keinen echten Namen.",
          "Nimm einen Spitznamen.",
          "Das Quiz ist zum Üben."
        ],
        "remember": "Ich hole Hilfe, wenn ich unsicher bin.",
        "quiz": true,
        "module": "Modul 6: Schutz und Hilfe"
      }
    ],
    "illustration": "assets/illustrations/youtube.svg",
    "quizQuestions": [
      {
        "question": "Was solltest du bei einem Video prüfen?",
        "answers": [
          "Quelle und Inhalt.",
          "Nur die Lautstärke.",
          "Nur die Farbe."
        ],
        "correct": 0,
        "explanation": "Richtig. Quelle und Inhalt helfen beim Einschätzen."
      },
      {
        "question": "Was will Werbung oft?",
        "answers": [
          "Etwas verkaufen.",
          "Immer nur helfen.",
          "Nie beeinflussen."
        ],
        "correct": 0,
        "explanation": "Richtig. Werbung will oft zum Kaufen bewegen."
      },
      {
        "question": "Ein Video sagt: „Kaufe sofort, dann wirst du reich.“ Was ist das?",
        "answers": [
          "Ein Warnzeichen.",
          "Immer richtig.",
          "Eine sichere Hilfe."
        ],
        "correct": 0,
        "explanation": "Richtig. Große Versprechen und Druck sind Warnzeichen."
      },
      {
        "question": "Was machst du bei Hass-Kommentaren?",
        "answers": [
          "Nicht mitstreiten, melden oder Hilfe holen.",
          "Zurück beleidigen.",
          "Adresse posten."
        ],
        "correct": 0,
        "explanation": "Richtig. Nicht mitstreiten ist sicherer."
      },
      {
        "question": "Warum sind Pausen wichtig?",
        "answers": [
          "Videos können lange fesseln.",
          "Pausen sind verboten.",
          "YouTube darf nie genutzt werden."
        ],
        "correct": 0,
        "explanation": "Richtig. Pausen helfen beim bewussten Nutzen."
      },
      {
        "question": "Was machst du bei falschen Informationen?",
        "answers": [
          "Prüfen und nachfragen.",
          "Sofort glauben.",
          "An alle schicken."
        ],
        "correct": 0,
        "explanation": "Richtig. Nicht alles im Internet stimmt."
      },
      {
        "question": "Was solltest du nicht in Kommentare schreiben?",
        "answers": [
          "Private Daten.",
          "Danke.",
          "Eine freundliche Frage."
        ],
        "correct": 0,
        "explanation": "Richtig. Private Daten gehören nicht in Kommentare."
      },
      {
        "question": "Ein Kanal fordert dein Passwort. Was machst du?",
        "answers": [
          "Nicht senden.",
          "Senden.",
          "In die Kommentare schreiben."
        ],
        "correct": 0,
        "explanation": "Richtig. Passwörter bleiben geheim."
      },
      {
        "question": "Was kannst du bei problematischen Videos tun?",
        "answers": [
          "Melden oder Hilfe holen.",
          "Alles nachmachen.",
          "Private Daten senden."
        ],
        "correct": 0,
        "explanation": "Richtig. Melden und Hilfe holen sind Schutzmöglichkeiten."
      },
      {
        "question": "Was ist ein guter YouTube-Merksatz?",
        "answers": [
          "Ich prüfe, bevor ich glaube.",
          "Jedes Video ist wahr.",
          "Werbung ist immer Rat."
        ],
        "correct": 0,
        "explanation": "Richtig. Prüfen ist wichtig."
      }
    ],
    "certificateGoals": [
      "Videos und Quellen prüfen",
      "Werbung erkennen",
      "Kommentare vorsichtig nutzen"
    ]
  },
  {
    "id": "snapchat",
    "title": "Snapchat",
    "icon": "photo",
    "desc": "Snaps, Screenshots, Standort und Kontakte",
    "quiz": "https://kahoot.com",
    "lessons": [
      {
        "title": "Start",
        "icon": "start",
        "text": [
          "Diese Lernseite hilft dir, Snapchat sicherer zu nutzen.",
          "Du lernst in kleinen Schritten.",
          "Am Ende kannst du ein Quiz machen."
        ],
        "remember": "Du bestimmst dein Tempo.",
        "module": "Modul 1: Snapchat verstehen"
      },
      {
        "title": "Was ist Snapchat?",
        "icon": "photo",
        "text": [
          "Snapchat ist eine App für Snaps, Chats und Storys.",
          "Manche Inhalte verschwinden schnell.",
          "Trotzdem können sie gespeichert werden."
        ],
        "remember": "Snapchat ist ein Werkzeug für Kontakt und Inhalte.",
        "module": "Modul 1: Snapchat verstehen"
      },
      {
        "title": "Was kann ich mit Snapchat machen?",
        "icon": "photo",
        "text": [
          "Mit Snapchat kannst du viele Dinge tun."
        ],
        "bullets": [
          "Snaps senden",
          "Chats schreiben",
          "Storys ansehen"
        ],
        "remember": "Ich entscheide, was ich teile.",
        "module": "Modul 1: Snapchat verstehen"
      },
      {
        "title": "Snapchat im Alltag",
        "icon": "check",
        "text": [
          "Snapchat kann im Alltag hilfreich sein."
        ],
        "bullets": [
          "Informationen bekommen",
          "Kontakt halten",
          "Inhalte ansehen oder teilen"
        ],
        "remember": "Snapchat kann praktisch sein.",
        "module": "Modul 1: Snapchat verstehen"
      },
      {
        "title": "Gute Inhalte erkennen",
        "icon": "check",
        "text": [
          "Ein guter Inhalt ist freundlich, klar und macht keinen Druck."
        ],
        "quote": "„Ich melde mich später. Danke.“",
        "success": "Das wirkt sicher. Es ist freundlich und ohne Druck.",
        "remember": "Gute Inhalte sind respektvoll.",
        "module": "Modul 1: Snapchat verstehen"
      },
      {
        "title": "Modulstart: Private Daten schützen",
        "icon": "lock",
        "text": [
          "Jetzt geht es um private Daten.",
          "Du lernst, was du schützen sollst.",
          "Du lernst, wann du vorsichtig sein musst."
        ],
        "remember": "Private Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Was sind private Daten?",
        "icon": "lock",
        "text": [
          "Private Daten gehören dir.",
          "Du sollst sie nicht einfach veröffentlichen oder verschicken."
        ],
        "bullets": [
          "Standort",
          "Fotos von dir",
          "Passwörter"
        ],
        "remember": "Meine Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Beispiel: Adresse",
        "icon": "data",
        "text": [
          "Eine unbekannte Person fragt dich:"
        ],
        "quote": "Wo wohnst du? Schick mir deine Adresse.",
        "warning": "Das ist nicht sicher. Deine Adresse ist privat.",
        "remember": "Meine Adresse bleibt privat.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Beispiel: Passwort",
        "icon": "lock",
        "text": [
          "Eine Person schreibt dir:"
        ],
        "quote": "Gib mir dein Passwort. Ich helfe dir.",
        "warning": "Das ist Betrug. Niemand darf dein Passwort verlangen.",
        "remember": "Mein Passwort bleibt geheim.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Übung: Private Daten erkennen",
        "icon": "exercise",
        "exercise": {
          "id": "snapchatPrivate",
          "question": "Nachricht: „Schick mir deine PIN. Ich helfe dir.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Eine PIN ist privat. Gib sie nicht weiter."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Eine PIN ist privat. Gib sie nicht weiter."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "check",
        "text": [
          "Du darfst Nein sagen.",
          "Du musst keine privaten Daten schicken.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Meine Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Modulstart: Snaps, Fotos und Standort",
        "icon": "photo",
        "text": [
          "Jetzt geht es um snaps, fotos und standort.",
          "Inhalte können privat oder öffentlich sein.",
          "Du lernst, worauf du achten musst."
        ],
        "remember": "Ich entscheide, was ich teile.",
        "module": "Modul 3: Snaps, Fotos und Standort"
      },
      {
        "title": "Snaps teilen",
        "icon": "photo",
        "text": [
          "Snaps können weitergegeben oder gespeichert werden.",
          "Dann sehen vielleicht andere Menschen diesen Inhalt.",
          "Darum ist Vorsicht wichtig."
        ],
        "remember": "Ich denke nach, bevor ich teile.",
        "module": "Modul 3: Snaps, Fotos und Standort"
      },
      {
        "title": "Private Inhalte",
        "icon": "block",
        "text": [
          "Manche Inhalte sind sehr privat."
        ],
        "bullets": [
          "private Fotos",
          "Standort",
          "peinliche Snaps"
        ],
        "remember": "Ich entscheide über meine Inhalte.",
        "module": "Modul 3: Snaps, Fotos und Standort"
      },
      {
        "title": "Beispiel: Druck",
        "icon": "warning",
        "text": [
          "Eine Person schreibt:"
        ],
        "quote": "„Schick mir einen privaten Snap. Ich speichere ihn nicht.“",
        "warning": "Das ist ein Warnzeichen. Niemand darf dich unter Druck setzen.",
        "remember": "Ich darf Nein sagen.",
        "module": "Modul 3: Snaps, Fotos und Standort"
      },
      {
        "title": "Nachrichten und Kommentare",
        "icon": "message",
        "text": [
          "Auch Worte können verletzen.",
          "Nachrichten und Kommentare können gespeichert werden.",
          "Darum solltest du vorher überlegen."
        ],
        "remember": "Ich schreibe respektvoll.",
        "module": "Modul 3: Snaps, Fotos und Standort"
      },
      {
        "title": "Übung: Inhalt prüfen",
        "icon": "exercise",
        "exercise": {
          "id": "snapchatContent",
          "question": "Nachricht: „Poste das. Aber sag es niemandem.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Das wirkt unsicher. Geheimhaltung und Druck sind Warnzeichen."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt unsicher. Geheimhaltung und Druck sind Warnzeichen."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 3: Snaps, Fotos und Standort"
      },
      {
        "title": "Merksatz: Ich entscheide",
        "icon": "check",
        "text": [
          "Ich muss nichts posten.",
          "Ich muss nichts verschicken.",
          "Ich darf Nein sagen."
        ],
        "remember": "Ich entscheide über meine Inhalte.",
        "module": "Modul 3: Snaps, Fotos und Standort"
      },
      {
        "title": "Modulstart: Screenshots, Druck und Betrug",
        "icon": "photo",
        "text": [
          "Jetzt geht es um screenshots, druck und betrug.",
          "Manche Inhalte sehen echt aus.",
          "Trotzdem können sie gefährlich sein."
        ],
        "remember": "Ich prüfe, bevor ich handle.",
        "module": "Modul 4: Screenshots, Druck und Betrug"
      },
      {
        "title": "Komische Snaps",
        "icon": "photo",
        "text": [
          "Snaps können gespeichert werden.",
          "Standort kann privat sein.",
          "Fremde können Druck machen."
        ],
        "remember": "Ich handle nicht sofort.",
        "module": "Modul 4: Screenshots, Druck und Betrug"
      },
      {
        "title": "Beispiel: Lock-Nachricht",
        "icon": "warning",
        "text": [
          "Du bekommst diese Nachricht:"
        ],
        "quote": "Schalte deinen Standort an. Ich will sehen, wo du bist.",
        "warning": "Das kann Betrug sein. Reagiere nicht sofort.",
        "remember": "Erst prüfen. Dann handeln.",
        "module": "Modul 4: Screenshots, Druck und Betrug"
      },
      {
        "title": "Betrug erkennen",
        "icon": "warning",
        "text": [
          "Vorsicht, wenn jemand:"
        ],
        "bullets": [
          "dein Passwort will",
          "Geld von dir verlangt",
          "Druck macht"
        ],
        "remember": "Druck ist ein Warnzeichen.",
        "module": "Modul 4: Screenshots, Druck und Betrug"
      },
      {
        "title": "Wenn jemand Druck macht",
        "icon": "stop",
        "text": [
          "Warnzeichen sind:"
        ],
        "bullets": [
          "Mach sofort.",
          "Sag es niemandem.",
          "Sonst passiert etwas."
        ],
        "remember": "Druck bedeutet: Stopp und Hilfe holen.",
        "module": "Modul 4: Screenshots, Druck und Betrug"
      },
      {
        "title": "Übung: Risiko prüfen",
        "icon": "exercise",
        "exercise": {
          "id": "snapchatRisk",
          "question": "Nachricht: „Schick den Snap sofort. Sag es niemandem.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Das wirkt unsicher. Nicht sofort reagieren."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt unsicher. Nicht sofort reagieren."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 4: Screenshots, Druck und Betrug"
      },
      {
        "title": "Merksatz: Erst prüfen",
        "icon": "check",
        "text": [
          "Ich reagiere nicht sofort.",
          "Ich prüfe die Nachricht.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Erst prüfen. Dann handeln.",
        "module": "Modul 4: Screenshots, Druck und Betrug"
      },
      {
        "title": "Modulstart: Kontakte und Storys",
        "icon": "message",
        "text": [
          "Jetzt geht es um kontakte und storys.",
          "Viele Menschen können mitlesen.",
          "Darum ist gutes Verhalten wichtig."
        ],
        "remember": "Ich schreibe vorsichtig.",
        "module": "Modul 5: Kontakte und Storys"
      },
      {
        "title": "Kontakte und Storys",
        "icon": "message",
        "text": [
          "Viele Menschen können Inhalte sehen.",
          "Inhalte können schnell weitergegeben werden.",
          "Darum solltest du vorsichtig sein."
        ],
        "remember": "Viele können mitlesen.",
        "module": "Modul 5: Kontakte und Storys"
      },
      {
        "title": "Guter Beitrag",
        "icon": "message",
        "text": [
          "Ein guter Beitrag ist:"
        ],
        "bullets": [
          "freundlich",
          "kurz und verständlich",
          "ohne private Daten"
        ],
        "remember": "Ich schreibe respektvoll.",
        "module": "Modul 5: Kontakte und Storys"
      },
      {
        "title": "Schlechter Beitrag",
        "icon": "block",
        "text": [
          "Diese Dinge sind nicht gut:"
        ],
        "bullets": [
          "Beleidigungen",
          "Gerüchte",
          "private Fotos oder Daten"
        ],
        "remember": "Ich verletze andere nicht.",
        "module": "Modul 5: Kontakte und Storys"
      },
      {
        "title": "Streit oder Ärger",
        "icon": "message",
        "text": [
          "Manchmal gibt es Streit."
        ],
        "quote": "Du willst etwas Gemeines zurückschreiben.",
        "warning": "Besser: Pause machen. Nicht sofort antworten.",
        "remember": "Erst beruhigen. Dann entscheiden.",
        "module": "Modul 5: Kontakte und Storys"
      },
      {
        "title": "Übung: Gute Nachricht erkennen",
        "icon": "exercise",
        "exercise": {
          "id": "snapchatGroup",
          "question": "„Ich melde mich später. Danke.“",
          "feedback": {
            "safe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt sicher. Es ist freundlich und ohne Druck."
            },
            "unsafe": {
              "type": "warning",
              "title": "Nicht ganz.",
              "text": "Das wirkt sicher. Es ist freundlich und ohne Druck."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 5: Kontakte und Storys"
      },
      {
        "title": "Stopp-Regel",
        "icon": "stop",
        "text": [
          "Wenn dir etwas komisch vorkommt:"
        ],
        "bullets": [
          "Stopp: Nicht sofort antworten",
          "Nicht klicken und nichts schicken",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Ich darf Nein sagen",
        "icon": "stop",
        "text": [
          "Du musst nicht antworten.",
          "Du musst nichts posten oder schicken.",
          "Du musst keinen Link anklicken."
        ],
        "remember": "Nein sagen ist erlaubt.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "So blockierst du jemanden",
        "icon": "block",
        "text": [
          "So kannst du dich schützen:"
        ],
        "bullets": [
          "Chat oder Profil öffnen",
          "auf Optionen tippen",
          "Blockieren auswählen"
        ],
        "remember": "Ich darf mich schützen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "So meldest du etwas",
        "icon": "report",
        "text": [
          "Wenn du unsicher bist, frage eine Person, der du vertraust."
        ],
        "bullets": [
          "Snap oder Chat öffnen",
          "Melden auswählen",
          "eine Person informieren, der du vertraust"
        ],
        "remember": "Melden ist erlaubt.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Hilfe holen",
        "icon": "help",
        "text": [
          "Du musst Probleme nicht allein lösen.",
          "Hilfe holen ist richtig."
        ],
        "bullets": [
          "eine Person, der du vertraust",
          "eine Unterstützerin oder einen Unterstützer",
          "eine Digital-Begleiterin oder einen Digital-Begleiter",
          "bei Gefahr: Polizei 110"
        ],
        "remember": "Du darfst Unterstützung holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Datenschutz-Hinweis",
        "icon": "lock",
        "text": [
          "Diese Lernseite fragt keine privaten Daten ab.",
          "Du musst keinen Namen eingeben.",
          "Im Quiz nimmst du einen Spitznamen."
        ],
        "remember": "Ich bleibe anonym.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Wiederholung",
        "icon": "example",
        "text": [
          "Was mache ich bei einem Problem?"
        ],
        "bullets": [
          "nicht sofort antworten",
          "nichts Privates teilen",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Quiz und Abschluss",
        "icon": "quiz",
        "text": [
          "Gut gemacht.",
          "Du hast wichtige Regeln gelernt.",
          "Jetzt kannst du dein Wissen testen."
        ],
        "bullets": [
          "Nutze keinen echten Namen.",
          "Nimm einen Spitznamen.",
          "Das Quiz ist zum Üben."
        ],
        "remember": "Ich hole Hilfe, wenn ich unsicher bin.",
        "quiz": true,
        "module": "Modul 6: Schutz und Hilfe"
      }
    ],
    "illustration": "assets/illustrations/snapchat.svg",
    "quizQuestions": [
      {
        "question": "Verschwinden Snaps immer sicher?",
        "answers": [
          "Nein, sie können gespeichert werden.",
          "Ja, immer.",
          "Nur bei Freunden."
        ],
        "correct": 0,
        "explanation": "Richtig. Screenshots oder andere Geräte können Inhalte speichern."
      },
      {
        "question": "Warum ist der Standort sensibel?",
        "answers": [
          "Er zeigt, wo du bist.",
          "Er ist immer unwichtig.",
          "Er schützt automatisch."
        ],
        "correct": 0,
        "explanation": "Richtig. Standortdaten sind privat."
      },
      {
        "question": "Jemand fordert ein privates Foto. Was machst du?",
        "answers": [
          "Nein sagen und Hilfe holen.",
          "Foto schicken.",
          "Geheim halten."
        ],
        "correct": 0,
        "explanation": "Richtig. Du musst keine privaten Fotos senden."
      },
      {
        "question": "Was machst du bei fremden Kontakten?",
        "answers": [
          "Prüfen oder ablehnen.",
          "Immer annehmen.",
          "Adresse senden."
        ],
        "correct": 0,
        "explanation": "Richtig. Du darfst Kontakte ablehnen."
      },
      {
        "question": "Was kann bei einem Screenshot passieren?",
        "answers": [
          "Ein Snap wird gespeichert.",
          "Alles wird sicher gelöscht.",
          "Niemand kann etwas sehen."
        ],
        "correct": 0,
        "explanation": "Richtig. Screenshots können Inhalte festhalten."
      },
      {
        "question": "Was ist eine sichere Regel beim Senden?",
        "answers": [
          "Nur senden, womit ich mich wohl fühle.",
          "Alles senden.",
          "Standort immer teilen."
        ],
        "correct": 0,
        "explanation": "Richtig. Du entscheidest, was du sendest."
      },
      {
        "question": "Eine Person schreibt: „Sag es niemandem.“ Was ist das?",
        "answers": [
          "Ein Warnzeichen.",
          "Immer sicher.",
          "Eine Pflicht."
        ],
        "correct": 0,
        "explanation": "Richtig. Geheimhaltung kann ein Warnzeichen sein."
      },
      {
        "question": "Was kannst du bei Belästigung tun?",
        "answers": [
          "Blockieren, melden oder Hilfe holen.",
          "Zurück drohen.",
          "Alles verschweigen."
        ],
        "correct": 0,
        "explanation": "Richtig. Du darfst dich schützen."
      },
      {
        "question": "Was bedeutet Nein sagen?",
        "answers": [
          "Ich darf etwas ablehnen.",
          "Ich muss alles machen.",
          "Ich darf keine Hilfe holen."
        ],
        "correct": 0,
        "explanation": "Richtig. Nein sagen ist erlaubt."
      },
      {
        "question": "Wer kann helfen?",
        "answers": [
          "eine Person, der du vertraust.",
          "Nur Fremde.",
          "Niemand."
        ],
        "correct": 0,
        "explanation": "Richtig. Eine Person, der du vertraust, kann unterstützen."
      }
    ],
    "certificateGoals": [
      "Snaps bewusst senden",
      "Standort schützen",
      "bei Druck Nein sagen"
    ]
  },
  {
    "id": "tiktok",
    "title": "TikTok",
    "icon": "understand",
    "desc": "Videos, Trends, Kommentare und Algorithmus",
    "quiz": "https://kahoot.com",
    "lessons": [
      {
        "title": "Start",
        "icon": "start",
        "text": [
          "Diese Lernseite hilft dir, TikTok sicherer zu nutzen.",
          "Du lernst in kleinen Schritten.",
          "Am Ende kannst du ein Quiz machen."
        ],
        "remember": "Du bestimmst dein Tempo.",
        "module": "Modul 1: TikTok verstehen"
      },
      {
        "title": "Was ist TikTok?",
        "icon": "understand",
        "text": [
          "TikTok ist eine App für kurze Videos.",
          "Du kannst Videos ansehen oder selbst posten.",
          "Trends und Kommentare können Einfluss auf dich haben."
        ],
        "remember": "TikTok ist ein Werkzeug für Kontakt und Inhalte.",
        "module": "Modul 1: TikTok verstehen"
      },
      {
        "title": "Was kann ich mit TikTok machen?",
        "icon": "understand",
        "text": [
          "Mit TikTok kannst du viele Dinge tun."
        ],
        "bullets": [
          "Videos ansehen",
          "Videos posten",
          "Kommentare lesen"
        ],
        "remember": "Ich entscheide, was ich teile.",
        "module": "Modul 1: TikTok verstehen"
      },
      {
        "title": "TikTok im Alltag",
        "icon": "check",
        "text": [
          "TikTok kann im Alltag hilfreich sein."
        ],
        "bullets": [
          "Informationen bekommen",
          "Kontakt halten",
          "Inhalte ansehen oder teilen"
        ],
        "remember": "TikTok kann praktisch sein.",
        "module": "Modul 1: TikTok verstehen"
      },
      {
        "title": "Gute Inhalte erkennen",
        "icon": "check",
        "text": [
          "Ein guter Inhalt ist freundlich, klar und macht keinen Druck."
        ],
        "quote": "„Das Video ist hilfreich. Danke.“",
        "success": "Das wirkt sicher. Es ist freundlich und ohne Druck.",
        "remember": "Gute Inhalte sind respektvoll.",
        "module": "Modul 1: TikTok verstehen"
      },
      {
        "title": "Modulstart: Private Daten schützen",
        "icon": "lock",
        "text": [
          "Jetzt geht es um private Daten.",
          "Du lernst, was du schützen sollst.",
          "Du lernst, wann du vorsichtig sein musst."
        ],
        "remember": "Private Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Was sind private Daten?",
        "icon": "lock",
        "text": [
          "Private Daten gehören dir.",
          "Du sollst sie nicht einfach veröffentlichen oder verschicken."
        ],
        "bullets": [
          "Profilname",
          "Standort",
          "Passwörter"
        ],
        "remember": "Meine Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Beispiel: Adresse",
        "icon": "data",
        "text": [
          "Eine unbekannte Person fragt dich:"
        ],
        "quote": "Wo wohnst du? Schick mir deine Adresse.",
        "warning": "Das ist nicht sicher. Deine Adresse ist privat.",
        "remember": "Meine Adresse bleibt privat.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Beispiel: Passwort",
        "icon": "lock",
        "text": [
          "Eine Person schreibt dir:"
        ],
        "quote": "Gib mir dein Passwort. Ich helfe dir.",
        "warning": "Das ist Betrug. Niemand darf dein Passwort verlangen.",
        "remember": "Mein Passwort bleibt geheim.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Übung: Private Daten erkennen",
        "icon": "exercise",
        "exercise": {
          "id": "tiktokPrivate",
          "question": "Nachricht: „Schick mir deine PIN. Ich helfe dir.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Eine PIN ist privat. Gib sie nicht weiter."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Eine PIN ist privat. Gib sie nicht weiter."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "check",
        "text": [
          "Du darfst Nein sagen.",
          "Du musst keine privaten Daten schicken.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Meine Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Modulstart: Videos, Trends und Kommentare",
        "icon": "understand",
        "text": [
          "Jetzt geht es um videos, trends und kommentare.",
          "Inhalte können privat oder öffentlich sein.",
          "Du lernst, worauf du achten musst."
        ],
        "remember": "Ich entscheide, was ich teile.",
        "module": "Modul 3: Videos, Trends und Kommentare"
      },
      {
        "title": "Videos teilen",
        "icon": "understand",
        "text": [
          "Videos können weitergegeben oder gespeichert werden.",
          "Dann sehen vielleicht andere Menschen diesen Inhalt.",
          "Darum ist Vorsicht wichtig."
        ],
        "remember": "Ich denke nach, bevor ich teile.",
        "module": "Modul 3: Videos, Trends und Kommentare"
      },
      {
        "title": "Private Inhalte",
        "icon": "block",
        "text": [
          "Manche Inhalte sind sehr privat."
        ],
        "bullets": [
          "private Videos",
          "gefährliche Trends",
          "Kommentare mit privaten Daten"
        ],
        "remember": "Ich entscheide über meine Inhalte.",
        "module": "Modul 3: Videos, Trends und Kommentare"
      },
      {
        "title": "Beispiel: Druck",
        "icon": "warning",
        "text": [
          "Eine Person schreibt:"
        ],
        "quote": "„Mach etwas Gefährliches und poste es.“",
        "warning": "Das ist ein Warnzeichen. Niemand darf dich unter Druck setzen.",
        "remember": "Ich darf Nein sagen.",
        "module": "Modul 3: Videos, Trends und Kommentare"
      },
      {
        "title": "Nachrichten und Kommentare",
        "icon": "message",
        "text": [
          "Auch Worte können verletzen.",
          "Nachrichten und Kommentare können gespeichert werden.",
          "Darum solltest du vorher überlegen."
        ],
        "remember": "Ich schreibe respektvoll.",
        "module": "Modul 3: Videos, Trends und Kommentare"
      },
      {
        "title": "Übung: Inhalt prüfen",
        "icon": "exercise",
        "exercise": {
          "id": "tiktokContent",
          "question": "Nachricht: „Poste das. Aber sag es niemandem.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Das wirkt unsicher. Geheimhaltung und Druck sind Warnzeichen."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt unsicher. Geheimhaltung und Druck sind Warnzeichen."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 3: Videos, Trends und Kommentare"
      },
      {
        "title": "Merksatz: Ich entscheide",
        "icon": "check",
        "text": [
          "Ich muss nichts posten.",
          "Ich muss nichts verschicken.",
          "Ich darf Nein sagen."
        ],
        "remember": "Ich entscheide über meine Inhalte.",
        "module": "Modul 3: Videos, Trends und Kommentare"
      },
      {
        "title": "Modulstart: Trends, Werbung und Betrug",
        "icon": "warning",
        "text": [
          "Jetzt geht es um trends, werbung und betrug.",
          "Manche Inhalte sehen echt aus.",
          "Trotzdem können sie gefährlich sein."
        ],
        "remember": "Ich prüfe, bevor ich handle.",
        "module": "Modul 4: Trends, Werbung und Betrug"
      },
      {
        "title": "Komische Trends",
        "icon": "warning",
        "text": [
          "Manche Trends sind gefährlich.",
          "Manche Werbung täuscht.",
          "Manche Videos machen Druck."
        ],
        "remember": "Ich handle nicht sofort.",
        "module": "Modul 4: Trends, Werbung und Betrug"
      },
      {
        "title": "Beispiel: Lock-Nachricht",
        "icon": "warning",
        "text": [
          "Du bekommst diese Nachricht:"
        ],
        "quote": "Mach diesen gefährlichen Trend. Poste es sofort.",
        "warning": "Das kann Betrug sein. Reagiere nicht sofort.",
        "remember": "Erst prüfen. Dann handeln.",
        "module": "Modul 4: Trends, Werbung und Betrug"
      },
      {
        "title": "Betrug erkennen",
        "icon": "warning",
        "text": [
          "Vorsicht, wenn jemand:"
        ],
        "bullets": [
          "dein Passwort will",
          "Geld von dir verlangt",
          "Druck macht"
        ],
        "remember": "Druck ist ein Warnzeichen.",
        "module": "Modul 4: Trends, Werbung und Betrug"
      },
      {
        "title": "Wenn jemand Druck macht",
        "icon": "stop",
        "text": [
          "Warnzeichen sind:"
        ],
        "bullets": [
          "Mach sofort.",
          "Sag es niemandem.",
          "Sonst passiert etwas."
        ],
        "remember": "Druck bedeutet: Stopp und Hilfe holen.",
        "module": "Modul 4: Trends, Werbung und Betrug"
      },
      {
        "title": "Übung: Risiko prüfen",
        "icon": "exercise",
        "exercise": {
          "id": "tiktokRisk",
          "question": "Video: „Mach sofort mit. Sonst bist du langweilig.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Das wirkt unsicher. Nicht sofort reagieren."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt unsicher. Nicht sofort reagieren."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 4: Trends, Werbung und Betrug"
      },
      {
        "title": "Merksatz: Erst prüfen",
        "icon": "check",
        "text": [
          "Ich reagiere nicht sofort.",
          "Ich prüfe die Nachricht.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Erst prüfen. Dann handeln.",
        "module": "Modul 4: Trends, Werbung und Betrug"
      },
      {
        "title": "Modulstart: Kommentare und Trends",
        "icon": "message",
        "text": [
          "Jetzt geht es um kommentare und trends.",
          "Viele Menschen können mitlesen.",
          "Darum ist gutes Verhalten wichtig."
        ],
        "remember": "Ich schreibe vorsichtig.",
        "module": "Modul 5: Kommentare und Trends"
      },
      {
        "title": "Kommentare und Trends",
        "icon": "message",
        "text": [
          "Viele Menschen können Inhalte sehen.",
          "Inhalte können schnell weitergegeben werden.",
          "Darum solltest du vorsichtig sein."
        ],
        "remember": "Viele können mitlesen.",
        "module": "Modul 5: Kommentare und Trends"
      },
      {
        "title": "Guter Beitrag",
        "icon": "message",
        "text": [
          "Ein guter Beitrag ist:"
        ],
        "bullets": [
          "freundlich",
          "kurz und verständlich",
          "ohne private Daten"
        ],
        "remember": "Ich schreibe respektvoll.",
        "module": "Modul 5: Kommentare und Trends"
      },
      {
        "title": "Schlechter Beitrag",
        "icon": "block",
        "text": [
          "Diese Dinge sind nicht gut:"
        ],
        "bullets": [
          "Beleidigungen",
          "Gerüchte",
          "private Fotos oder Daten"
        ],
        "remember": "Ich verletze andere nicht.",
        "module": "Modul 5: Kommentare und Trends"
      },
      {
        "title": "Streit oder Ärger",
        "icon": "message",
        "text": [
          "Manchmal gibt es Streit."
        ],
        "quote": "Du willst etwas Gemeines zurückschreiben.",
        "warning": "Besser: Pause machen. Nicht sofort antworten.",
        "remember": "Erst beruhigen. Dann entscheiden.",
        "module": "Modul 5: Kommentare und Trends"
      },
      {
        "title": "Übung: Gute Nachricht erkennen",
        "icon": "exercise",
        "exercise": {
          "id": "tiktokGroup",
          "question": "„Das Video ist hilfreich. Danke.“",
          "feedback": {
            "safe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt sicher. Es ist freundlich und ohne Druck."
            },
            "unsafe": {
              "type": "warning",
              "title": "Nicht ganz.",
              "text": "Das wirkt sicher. Es ist freundlich und ohne Druck."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 5: Kommentare und Trends"
      },
      {
        "title": "Stopp-Regel",
        "icon": "stop",
        "text": [
          "Wenn dir etwas komisch vorkommt:"
        ],
        "bullets": [
          "Stopp: Nicht sofort antworten",
          "Nicht klicken und nichts schicken",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Ich darf Nein sagen",
        "icon": "stop",
        "text": [
          "Du musst nicht antworten.",
          "Du musst nichts posten oder schicken.",
          "Du musst keinen Link anklicken."
        ],
        "remember": "Nein sagen ist erlaubt.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "So blockierst du jemanden",
        "icon": "block",
        "text": [
          "So kannst du dich schützen:"
        ],
        "bullets": [
          "Profil öffnen",
          "auf Teilen oder Optionen tippen",
          "Blockieren auswählen"
        ],
        "remember": "Ich darf mich schützen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "So meldest du etwas",
        "icon": "report",
        "text": [
          "Wenn du unsicher bist, frage eine Person, der du vertraust."
        ],
        "bullets": [
          "Video oder Kommentar öffnen",
          "Melden auswählen",
          "eine Person informieren, der du vertraust"
        ],
        "remember": "Melden ist erlaubt.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Hilfe holen",
        "icon": "help",
        "text": [
          "Du musst Probleme nicht allein lösen.",
          "Hilfe holen ist richtig."
        ],
        "bullets": [
          "eine Person, der du vertraust",
          "eine Unterstützerin oder einen Unterstützer",
          "eine Digital-Begleiterin oder einen Digital-Begleiter",
          "bei Gefahr: Polizei 110"
        ],
        "remember": "Du darfst Unterstützung holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Datenschutz-Hinweis",
        "icon": "lock",
        "text": [
          "Diese Lernseite fragt keine privaten Daten ab.",
          "Du musst keinen Namen eingeben.",
          "Im Quiz nimmst du einen Spitznamen."
        ],
        "remember": "Ich bleibe anonym.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Wiederholung",
        "icon": "example",
        "text": [
          "Was mache ich bei einem Problem?"
        ],
        "bullets": [
          "nicht sofort antworten",
          "nichts Privates teilen",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Quiz und Abschluss",
        "icon": "quiz",
        "text": [
          "Gut gemacht.",
          "Du hast wichtige Regeln gelernt.",
          "Jetzt kannst du dein Wissen testen."
        ],
        "bullets": [
          "Nutze keinen echten Namen.",
          "Nimm einen Spitznamen.",
          "Das Quiz ist zum Üben."
        ],
        "remember": "Ich hole Hilfe, wenn ich unsicher bin.",
        "quiz": true,
        "module": "Modul 6: Schutz und Hilfe"
      }
    ],
    "illustration": "assets/illustrations/tiktok.svg",
    "quizQuestions": [
      {
        "question": "Ein Trend fordert eine gefährliche Handlung. Was machst du?",
        "answers": [
          "Nicht mitmachen und Hilfe holen.",
          "Sofort mitmachen.",
          "Andere dazu drängen."
        ],
        "correct": 0,
        "explanation": "Richtig. Gefährliche Trends machst du nicht mit."
      },
      {
        "question": "Warum sind Pausen wichtig?",
        "answers": [
          "TikTok kann lange fesseln.",
          "Pausen sind verboten.",
          "Videos sind immer falsch."
        ],
        "correct": 0,
        "explanation": "Richtig. Pausen helfen beim bewussten Nutzen."
      },
      {
        "question": "Was solltest du bei Werbung tun?",
        "answers": [
          "Prüfen und keine Daten eingeben.",
          "Sofort kaufen.",
          "Passwort senden."
        ],
        "correct": 0,
        "explanation": "Richtig. Werbung und Links müssen geprüft werden."
      },
      {
        "question": "Was machst du bei Hass-Kommentaren?",
        "answers": [
          "Blockieren oder melden.",
          "Zurück beleidigen.",
          "Private Daten posten."
        ],
        "correct": 0,
        "explanation": "Richtig. Blockieren oder Melden kann schützen."
      },
      {
        "question": "Was macht der Algorithmus?",
        "answers": [
          "Er zeigt oft ähnliche Videos.",
          "Er schützt immer vor Gefahr.",
          "Er löscht alle schlechten Videos."
        ],
        "correct": 0,
        "explanation": "Richtig. Der Algorithmus zeigt oft mehr von dem, was du anschaust."
      },
      {
        "question": "Ein Video sagt: „Klicke sofort, sonst verpasst du alles.“ Was ist das?",
        "answers": [
          "Druck.",
          "Immer sicher.",
          "Eine Pflicht."
        ],
        "correct": 0,
        "explanation": "Richtig. Druck ist ein Warnzeichen."
      },
      {
        "question": "Was solltest du in Kommentaren nicht schreiben?",
        "answers": [
          "Private Daten.",
          "Danke.",
          "Eine freundliche Frage."
        ],
        "correct": 0,
        "explanation": "Richtig. Private Daten gehören nicht in Kommentare."
      },
      {
        "question": "Was ist bei Trends wichtig?",
        "answers": [
          "Vorher überlegen.",
          "Immer mitmachen.",
          "Nie Hilfe holen."
        ],
        "correct": 0,
        "explanation": "Richtig. Nicht jeder Trend ist gut."
      },
      {
        "question": "Jemand will ein privates Video von dir. Was machst du?",
        "answers": [
          "Nein sagen und Hilfe holen.",
          "Video schicken.",
          "Geheim halten."
        ],
        "correct": 0,
        "explanation": "Richtig. Du entscheidest über deine Videos."
      },
      {
        "question": "Was ist ein guter TikTok-Merksatz?",
        "answers": [
          "Ich prüfe Trends und mache Pausen.",
          "Ich mache alles nach.",
          "Ich teile alle Daten."
        ],
        "correct": 0,
        "explanation": "Richtig. Prüfen und Pausen helfen."
      }
    ],
    "certificateGoals": [
      "Trends kritisch prüfen",
      "Pausen machen",
      "Kommentare und Werbung einschätzen"
    ]
  },
  {
    "id": "hilfe",
    "title": "Hilfe bei Problemen",
    "icon": "help",
    "desc": "Stopp-Regel, Beweise sichern, Hilfe holen",
    "quiz": "https://kahoot.com",
    "lessons": [
      {
        "title": "Start",
        "icon": "start",
        "text": [
          "Diese Lernseite hilft dir bei Problemen im Internet.",
          "Du lernst, was du tun kannst.",
          "Du musst Probleme nicht allein lösen."
        ],
        "remember": "Hilfe holen ist richtig.",
        "module": "Modul 1: Probleme erkennen"
      },
      {
        "title": "Was ist ein digitales Problem?",
        "icon": "warning",
        "text": [
          "Ein digitales Problem ist etwas, das dir im Internet Angst macht.",
          "Oder etwas, das dich unter Druck setzt.",
          "Oder etwas, das sich falsch anfühlt."
        ],
        "remember": "Ich nehme mein Gefühl ernst.",
        "module": "Modul 1: Probleme erkennen",
        "bullets": [
          "Beleidigung",
          "Drohung",
          "Betrug"
        ]
      },
      {
        "title": "Welche Hilfe gibt es?",
        "icon": "help",
        "text": [
          "Es gibt verschiedene Menschen, die helfen können.",
          "Du musst nicht allein entscheiden."
        ],
        "bullets": [
          "Person, der du vertraust",
          "vertraute Person",
          "bei Gefahr: Polizei 110"
        ],
        "remember": "Ich darf Unterstützung bekommen.",
        "module": "Modul 1: Probleme erkennen"
      },
      {
        "title": "Hilfe im Alltag",
        "icon": "home",
        "text": [
          "Hilfe kann ganz praktisch sein.",
          "Du kannst eine Nachricht zeigen.",
          "Du kannst gemeinsam überlegen, was als Nächstes gut ist."
        ],
        "bullets": [
          "nicht allein bleiben",
          "nicht sofort antworten",
          "gemeinsam prüfen"
        ],
        "remember": "Gemeinsam ist es leichter.",
        "module": "Modul 1: Probleme erkennen"
      },
      {
        "title": "Gute Hilfe-Entscheidung erkennen",
        "icon": "check",
        "text": [
          "Eine gute Entscheidung schützt dich."
        ],
        "quote": "Ich antworte nicht allein. Ich zeige die Nachricht einer Person, der du vertraust.",
        "success": "Das ist gut. Du holst dir Unterstützung.",
        "remember": "Hilfe holen ist eine gute Entscheidung.",
        "module": "Modul 1: Probleme erkennen"
      },
      {
        "title": "Modulstart: Sicherheit und private Daten",
        "icon": "lock",
        "text": [
          "Jetzt geht es um private Daten.",
          "Du lernst, was du schützen sollst.",
          "Du lernst, wann du vorsichtig sein musst."
        ],
        "remember": "Private Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Welche Daten soll ich schützen?",
        "icon": "lock",
        "text": [
          "Private Daten gehören dir.",
          "Du sollst sie nicht einfach veröffentlichen oder verschicken."
        ],
        "bullets": [
          "Name und Adresse",
          "Fotos und Standort",
          "Passwörter"
        ],
        "remember": "Meine Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Beispiel: Adresse",
        "icon": "data",
        "text": [
          "Eine unbekannte Person fragt dich:"
        ],
        "quote": "Wo wohnst du? Schick mir deine Adresse.",
        "warning": "Das ist nicht sicher. Deine Adresse ist privat.",
        "remember": "Meine Adresse bleibt privat.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Beispiel: Passwort",
        "icon": "lock",
        "text": [
          "Eine Person schreibt dir:"
        ],
        "quote": "Gib mir dein Passwort. Ich helfe dir.",
        "warning": "Das ist Betrug. Niemand darf dein Passwort verlangen.",
        "remember": "Mein Passwort bleibt geheim.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Übung: Private Daten erkennen",
        "icon": "exercise",
        "exercise": {
          "id": "hilfePrivate",
          "question": "Nachricht: „Schick mir deine PIN. Ich helfe dir.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Eine PIN ist privat. Gib sie nicht weiter."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Eine PIN ist privat. Gib sie nicht weiter."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "check",
        "text": [
          "Du darfst Nein sagen.",
          "Du musst keine privaten Daten schicken.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Meine Daten gehören mir.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Modulstart: Nachrichten, Fotos und Beweise",
        "icon": "data",
        "text": [
          "Jetzt geht es um nachrichten, fotos und beweise.",
          "Inhalte können privat oder öffentlich sein.",
          "Du lernst, worauf du achten musst."
        ],
        "remember": "Ich entscheide, was ich teile.",
        "module": "Modul 3: Nachrichten, Fotos und Beweise"
      },
      {
        "title": "Nachrichten teilen",
        "icon": "data",
        "text": [
          "Nachrichten können weitergegeben oder gespeichert werden.",
          "Dann sehen vielleicht andere Menschen diesen Inhalt.",
          "Darum ist Vorsicht wichtig."
        ],
        "remember": "Ich denke nach, bevor ich teile.",
        "module": "Modul 3: Nachrichten, Fotos und Beweise"
      },
      {
        "title": "Private Inhalte",
        "icon": "block",
        "text": [
          "Manche Inhalte sind sehr privat."
        ],
        "bullets": [
          "beleidigende Nachrichten",
          "Drohungen",
          "private Fotos"
        ],
        "remember": "Ich entscheide über meine Inhalte.",
        "module": "Modul 3: Nachrichten, Fotos und Beweise"
      },
      {
        "title": "Beispiel: Druck",
        "icon": "warning",
        "text": [
          "Eine Person schreibt:"
        ],
        "quote": "„Antworte sofort und erzähle niemandem davon.“",
        "warning": "Das ist ein Warnzeichen. Niemand darf dich unter Druck setzen.",
        "remember": "Ich darf Nein sagen.",
        "module": "Modul 3: Nachrichten, Fotos und Beweise"
      },
      {
        "title": "Nachrichten und Kommentare",
        "icon": "message",
        "text": [
          "Auch Worte können verletzen.",
          "Nachrichten und Kommentare können gespeichert werden.",
          "Darum solltest du vorher überlegen."
        ],
        "remember": "Ich schreibe respektvoll.",
        "module": "Modul 3: Nachrichten, Fotos und Beweise"
      },
      {
        "title": "Übung: Inhalt prüfen",
        "icon": "exercise",
        "exercise": {
          "id": "hilfeContent",
          "question": "Nachricht: „Poste das. Aber sag es niemandem.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Das wirkt unsicher. Geheimhaltung und Druck sind Warnzeichen."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt unsicher. Geheimhaltung und Druck sind Warnzeichen."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 3: Nachrichten, Fotos und Beweise"
      },
      {
        "title": "Merksatz: Ich entscheide",
        "icon": "check",
        "text": [
          "Ich muss nichts posten.",
          "Ich muss nichts verschicken.",
          "Ich darf Nein sagen."
        ],
        "remember": "Ich entscheide über meine Inhalte.",
        "module": "Modul 3: Nachrichten, Fotos und Beweise"
      },
      {
        "title": "Modulstart: Druck, Drohung und Betrug",
        "icon": "warning",
        "text": [
          "Jetzt geht es um druck, drohung und betrug.",
          "Manche Inhalte sehen echt aus.",
          "Trotzdem können sie gefährlich sein."
        ],
        "remember": "Ich prüfe, bevor ich handle.",
        "module": "Modul 4: Druck, Drohung und Betrug"
      },
      {
        "title": "Warnzeichen",
        "icon": "warning",
        "text": [
          "Jemand macht Angst.",
          "Jemand will Geheimhaltung.",
          "Jemand verlangt Daten oder Fotos."
        ],
        "remember": "Ich handle nicht sofort.",
        "module": "Modul 4: Druck, Drohung und Betrug"
      },
      {
        "title": "Beispiel: Lock-Nachricht",
        "icon": "warning",
        "text": [
          "Du bekommst diese Nachricht:"
        ],
        "quote": "Sag niemandem davon. Sonst passiert etwas.",
        "warning": "Das kann Betrug sein. Reagiere nicht sofort.",
        "remember": "Erst prüfen. Dann handeln.",
        "module": "Modul 4: Druck, Drohung und Betrug"
      },
      {
        "title": "Betrug erkennen",
        "icon": "warning",
        "text": [
          "Vorsicht, wenn jemand:"
        ],
        "bullets": [
          "dein Passwort will",
          "Geld von dir verlangt",
          "Druck macht"
        ],
        "remember": "Druck ist ein Warnzeichen.",
        "module": "Modul 4: Druck, Drohung und Betrug"
      },
      {
        "title": "Wenn jemand Druck macht",
        "icon": "stop",
        "text": [
          "Warnzeichen sind:"
        ],
        "bullets": [
          "Mach sofort.",
          "Sag es niemandem.",
          "Sonst passiert etwas."
        ],
        "remember": "Druck bedeutet: Stopp und Hilfe holen.",
        "module": "Modul 4: Druck, Drohung und Betrug"
      },
      {
        "title": "Übung: Risiko prüfen",
        "icon": "exercise",
        "exercise": {
          "id": "hilfeRisk",
          "question": "Nachricht: „Sag niemandem davon. Sonst passiert etwas.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Achtung.",
              "text": "Das wirkt unsicher. Nicht sofort reagieren."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt unsicher. Nicht sofort reagieren."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 4: Druck, Drohung und Betrug"
      },
      {
        "title": "Merksatz: Erst prüfen",
        "icon": "check",
        "text": [
          "Ich reagiere nicht sofort.",
          "Ich prüfe die Nachricht.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Erst prüfen. Dann handeln.",
        "module": "Modul 4: Druck, Drohung und Betrug"
      },
      {
        "title": "Modulstart: Probleme und Hilfewege",
        "icon": "message",
        "text": [
          "Jetzt geht es um probleme und hilfewege.",
          "Viele Menschen können mitlesen.",
          "Darum ist gutes Verhalten wichtig."
        ],
        "remember": "Ich schreibe vorsichtig.",
        "module": "Modul 5: Probleme und Hilfewege"
      },
      {
        "title": "Probleme und Hilfewege",
        "icon": "message",
        "text": [
          "Bei Problemen gibt es Hilfewege.",
          "Wichtig ist: nicht allein bleiben.",
          "Eine vertraute Person kann mit dir schauen."
        ],
        "remember": "Ich muss das nicht allein klären.",
        "module": "Modul 5: Probleme und Hilfewege"
      },
      {
        "title": "Gute Reaktion",
        "icon": "message",
        "text": [
          "Eine gute Reaktion ist:"
        ],
        "bullets": [
          "ruhig bleiben",
          "nicht allein antworten",
          "Hilfe holen"
        ],
        "remember": "Ich reagiere nicht unter Druck.",
        "module": "Modul 5: Probleme und Hilfewege"
      },
      {
        "title": "Ungute Reaktion",
        "icon": "block",
        "text": [
          "Diese Reaktionen sind nicht gut:"
        ],
        "bullets": [
          "sofort zurückschreiben",
          "Daten schicken",
          "Problem geheim halten"
        ],
        "remember": "Ich lasse mich nicht drängen.",
        "module": "Modul 5: Probleme und Hilfewege"
      },
      {
        "title": "Angst oder Druck",
        "icon": "message",
        "text": [
          "Manchmal gibt es Streit."
        ],
        "quote": "Du willst etwas Gemeines zurückschreiben.",
        "warning": "Besser: Pause machen. Nicht sofort antworten.",
        "remember": "Erst beruhigen. Dann entscheiden.",
        "module": "Modul 5: Probleme und Hilfewege"
      },
      {
        "title": "Übung: Gute Hilfe-Entscheidung",
        "icon": "exercise",
        "exercise": {
          "id": "hilfeGroup",
          "question": "„Ich brauche Hilfe. Kannst du bitte mit mir schauen?“",
          "feedback": {
            "safe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt sicher. Es ist freundlich und ohne Druck."
            },
            "unsafe": {
              "type": "warning",
              "title": "Nicht ganz.",
              "text": "Das wirkt sicher. Es ist freundlich und ohne Druck."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt."
            }
          }
        },
        "module": "Modul 5: Probleme und Hilfewege"
      },
      {
        "title": "Stopp-Regel",
        "icon": "stop",
        "text": [
          "Wenn dir etwas komisch vorkommt:"
        ],
        "bullets": [
          "Stopp: Nicht sofort antworten",
          "Nicht klicken und nichts schicken",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Ich darf Nein sagen",
        "icon": "stop",
        "text": [
          "Du musst nicht antworten.",
          "Du musst nichts posten oder schicken.",
          "Du musst keinen Link anklicken."
        ],
        "remember": "Nein sagen ist erlaubt.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "So blockierst du jemanden",
        "icon": "block",
        "text": [
          "So kannst du dich schützen:"
        ],
        "bullets": [
          "Chat oder Profil öffnen",
          "Person blockieren",
          "eine Person informieren, der du vertraust"
        ],
        "remember": "Ich darf mich schützen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "So meldest du etwas",
        "icon": "report",
        "text": [
          "Wenn du unsicher bist, frage eine Person, der du vertraust."
        ],
        "bullets": [
          "Nachricht zeigen",
          "Melden auswählen, wenn möglich",
          "Beweise mit Hilfe sichern"
        ],
        "remember": "Melden ist erlaubt.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Hilfe holen",
        "icon": "help",
        "text": [
          "Du musst Probleme nicht allein lösen.",
          "Hilfe holen ist richtig."
        ],
        "bullets": [
          "eine Person, der du vertraust",
          "eine Unterstützerin oder einen Unterstützer",
          "eine Digital-Begleiterin oder einen Digital-Begleiter",
          "bei Gefahr: Polizei 110"
        ],
        "remember": "Du darfst Unterstützung holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Datenschutz-Hinweis",
        "icon": "lock",
        "text": [
          "Diese Lernseite fragt keine privaten Daten ab.",
          "Du musst keinen Namen eingeben.",
          "Im Quiz nimmst du einen Spitznamen."
        ],
        "remember": "Ich bleibe anonym.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Wiederholung",
        "icon": "example",
        "text": [
          "Was mache ich bei einem Problem?"
        ],
        "bullets": [
          "nicht sofort antworten",
          "nichts Privates teilen",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "Quiz und Abschluss",
        "icon": "quiz",
        "text": [
          "Gut gemacht.",
          "Du hast wichtige Regeln gelernt.",
          "Jetzt kannst du dein Wissen testen."
        ],
        "bullets": [
          "Nutze keinen echten Namen.",
          "Nimm einen Spitznamen.",
          "Das Quiz ist zum Üben."
        ],
        "remember": "Ich hole Hilfe, wenn ich unsicher bin.",
        "quiz": true,
        "module": "Modul 6: Schutz und Hilfe"
      }
    ],
    "illustration": "assets/illustrations/hilfe.svg",
    "quizQuestions": [
      {
        "question": "Was ist die Stopp-Regel?",
        "answers": [
          "Nicht sofort antworten, prüfen, Hilfe holen.",
          "Sofort klicken.",
          "Alles allein lösen."
        ],
        "correct": 0,
        "explanation": "Richtig. Stopp, prüfen und Hilfe holen schützt dich."
      },
      {
        "question": "Jemand schreibt: „Sag niemandem davon.“ Was ist das?",
        "answers": [
          "Ein Warnzeichen.",
          "Immer sicher.",
          "Eine Hilfe."
        ],
        "correct": 0,
        "explanation": "Richtig. Geheimhaltung und Druck sind Warnzeichen."
      },
      {
        "question": "Wer kann helfen?",
        "answers": [
          "eine Person, der du vertraust.",
          "Nur Fremde.",
          "Niemand."
        ],
        "correct": 0,
        "explanation": "Richtig. Eine Person, der du vertraust, kann helfen."
      },
      {
        "question": "Was machst du bei akuter Gefahr?",
        "answers": [
          "Sofort Hilfe holen oder 110.",
          "Warten.",
          "Alles löschen."
        ],
        "correct": 0,
        "explanation": "Richtig. Bei Gefahr zählt schnelle Hilfe."
      },
      {
        "question": "Was ist wichtig bei Beweisen?",
        "answers": [
          "Nachricht zeigen und nicht allein handeln.",
          "Alles sofort löschen.",
          "Nie darüber sprechen."
        ],
        "correct": 0,
        "explanation": "Richtig. Nachrichten können helfen, ein Problem zu klären."
      },
      {
        "question": "Was machst du bei Druck?",
        "answers": [
          "Nicht allein antworten.",
          "Alles machen.",
          "Passwort schicken."
        ],
        "correct": 0,
        "explanation": "Richtig. Bei Druck nicht allein handeln."
      },
      {
        "question": "Was darfst du bei Belästigung tun?",
        "answers": [
          "Blockieren, melden oder Hilfe holen.",
          "Zurück beleidigen.",
          "Alles geheim halten."
        ],
        "correct": 0,
        "explanation": "Richtig. Schutz und Hilfe sind erlaubt."
      },
      {
        "question": "Was bedeutet Hilfe holen?",
        "answers": [
          "Ich suche Unterstützung.",
          "Ich bin schuld.",
          "Ich darf nicht fragen."
        ],
        "correct": 0,
        "explanation": "Richtig. Hilfe holen ist eine gute Entscheidung."
      },
      {
        "question": "Eine Nachricht macht dir Angst. Was ist gut?",
        "answers": [
          "eine Person, der du vertraust fragen.",
          "Sofort allein antworten.",
          "Alles löschen und schweigen."
        ],
        "correct": 0,
        "explanation": "Richtig. Du musst das nicht allein klären."
      },
      {
        "question": "Was ist der wichtigste Merksatz?",
        "answers": [
          "Ich bin nicht allein.",
          "Ich muss alles allein lösen.",
          "Ich darf nie Hilfe holen."
        ],
        "correct": 0,
        "explanation": "Richtig. Du bist nicht allein."
      }
    ],
    "certificateGoals": [
      "Stopp-Regel anwenden",
      "Beweise mit Hilfe sichern",
      "Unterstützung holen"
    ]
  }
];
