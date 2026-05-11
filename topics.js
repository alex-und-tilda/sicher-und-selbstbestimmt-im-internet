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
          "bei Unsicherheit Fachkraft fragen"
        ],
        "remember": "Ich darf mich schützen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "So meldest du etwas",
        "icon": "report",
        "text": [
          "Wenn du unsicher bist, frag vorher eine Fachkraft."
        ],
        "bullets": [
          "Problem zeigen",
          "Melden auswählen, wenn vorhanden",
          "Fachkraft informieren"
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
          "Fachkraft fragen",
          "vertraute Person fragen",
          "bei Gefahr: Polizei 110"
        ],
        "remember": "Hilfe holen ist stark.",
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
    "illustration": "assets/illustrations/datenschutz.svg"
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
          "Wenn du unsicher bist, frag vorher eine Fachkraft."
        ],
        "bullets": [
          "Nachricht lange drücken",
          "Melden auswählen",
          "Fachkraft informieren"
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
          "Fachkraft fragen",
          "vertraute Person fragen",
          "bei Gefahr: Polizei 110"
        ],
        "remember": "Hilfe holen ist stark.",
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
    "illustration": "assets/illustrations/whatsapp.svg"
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
          "Wenn du unsicher bist, frag vorher eine Fachkraft."
        ],
        "bullets": [
          "Beitrag oder Kommentar öffnen",
          "Melden auswählen",
          "Fachkraft informieren"
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
          "Fachkraft fragen",
          "vertraute Person fragen",
          "bei Gefahr: Polizei 110"
        ],
        "remember": "Hilfe holen ist stark.",
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
    "illustration": "assets/illustrations/facebook.svg"
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
          "Wenn du unsicher bist, frag vorher eine Fachkraft."
        ],
        "bullets": [
          "Beitrag oder Nachricht öffnen",
          "Melden auswählen",
          "Fachkraft informieren"
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
          "Fachkraft fragen",
          "vertraute Person fragen",
          "bei Gefahr: Polizei 110"
        ],
        "remember": "Hilfe holen ist stark.",
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
    "illustration": "assets/illustrations/instagram.svg"
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
          "Fachkraft fragen"
        ],
        "remember": "Ich darf mich schützen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "So meldest du etwas",
        "icon": "report",
        "text": [
          "Wenn du unsicher bist, frag vorher eine Fachkraft."
        ],
        "bullets": [
          "Video oder Kommentar öffnen",
          "Melden auswählen",
          "Fachkraft informieren"
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
          "Fachkraft fragen",
          "vertraute Person fragen",
          "bei Gefahr: Polizei 110"
        ],
        "remember": "Hilfe holen ist stark.",
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
    "illustration": "assets/illustrations/youtube.svg"
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
          "Wenn du unsicher bist, frag vorher eine Fachkraft."
        ],
        "bullets": [
          "Snap oder Chat öffnen",
          "Melden auswählen",
          "Fachkraft informieren"
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
          "Fachkraft fragen",
          "vertraute Person fragen",
          "bei Gefahr: Polizei 110"
        ],
        "remember": "Hilfe holen ist stark.",
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
    "illustration": "assets/illustrations/snapchat.svg"
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
          "Wenn du unsicher bist, frag vorher eine Fachkraft."
        ],
        "bullets": [
          "Video oder Kommentar öffnen",
          "Melden auswählen",
          "Fachkraft informieren"
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
          "Fachkraft fragen",
          "vertraute Person fragen",
          "bei Gefahr: Polizei 110"
        ],
        "remember": "Hilfe holen ist stark.",
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
    "illustration": "assets/illustrations/tiktok.svg"
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
          "Fachkraft",
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
        "quote": "Ich antworte nicht allein. Ich zeige die Nachricht einer Fachkraft.",
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
          "Fachkraft informieren"
        ],
        "remember": "Ich darf mich schützen.",
        "module": "Modul 6: Schutz und Hilfe"
      },
      {
        "title": "So meldest du etwas",
        "icon": "report",
        "text": [
          "Wenn du unsicher bist, frag vorher eine Fachkraft."
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
          "Fachkraft fragen",
          "vertraute Person fragen",
          "bei Gefahr: Polizei 110"
        ],
        "remember": "Hilfe holen ist stark.",
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
    "illustration": "assets/illustrations/hilfe.svg"
  }
];
