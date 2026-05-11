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
        "remember": "Ich gebe mein Passwort nicht weiter.",
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
        "remember": "Ich sage Nein, wenn jemand zu viele Daten wissen will.",
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
        "remember": "Ich frage nach, wenn ich unsicher bin.",
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
        "remember": "Ich teile keine privaten Fotos ohne Nachdenken.",
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
        "remember": "Ich darf Hilfe holen.",
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
        "remember": "Ich gebe mein Passwort nicht weiter.",
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
        "remember": "Ich sage Nein, wenn jemand zu viele Daten wissen will.",
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
        "remember": "Ich frage nach, wenn ich unsicher bin.",
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
        "remember": "Ich teile keine privaten Fotos ohne Nachdenken.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Übung: Private Daten erkennen",
        "icon": "exercise",
        "module": "Modul 2: Private Daten",
        "practiceQuestion": {
          "question": "Jemand fragt dich nach deinem Passwort. Was machst du?",
          "answers": [
            "Ich gebe es nicht weiter.",
            "Ich schreibe es in den Chat.",
            "Ich sage es am Telefon."
          ],
          "correct": 0,
          "explanation": "Mein Passwort bleibt geheim. Auch freundliche Personen dürfen es nicht bekommen."
        }
      },
      {
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "check",
        "text": [
          "Du darfst Nein sagen.",
          "Du musst keine privaten Daten schicken.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Ich darf Hilfe holen.",
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
        "remember": "Ich gebe mein Passwort nicht weiter.",
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
        "remember": "Ich sage Nein, wenn jemand zu viele Daten wissen will.",
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
        "remember": "Ich frage nach, wenn ich unsicher bin.",
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
        "remember": "Ich teile keine privaten Fotos ohne Nachdenken.",
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
        "remember": "Ich darf Hilfe holen.",
        "module": "Modul 3: Fotos, Standort und Formulare"
      },
      {
        "title": "Übung: Inhalt prüfen",
        "icon": "exercise",
        "module": "Modul 3: Fotos, Standort und Formulare",
        "practiceQuestion": {
          "question": "Eine Internetseite möchte deinen vollen Namen und deine Adresse. Was machst du?",
          "answers": [
            "Ich prüfe erst, ob das wirklich nötig ist.",
            "Ich trage alles sofort ein.",
            "Ich frage nicht nach."
          ],
          "correct": 0,
          "explanation": "Private Daten gebe ich nicht einfach ein. Ich prüfe erst und frage bei Unsicherheit eine vertraute Person."
        }
      },
      {
        "title": "Merksatz: Ich entscheide",
        "icon": "check",
        "text": [
          "Ich muss nichts posten.",
          "Ich muss nichts verschicken.",
          "Ich darf Nein sagen."
        ],
        "remember": "Ich gebe mein Passwort nicht weiter.",
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
        "remember": "Ich sage Nein, wenn jemand zu viele Daten wissen will.",
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
        "remember": "Ich frage nach, wenn ich unsicher bin.",
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
        "remember": "Ich teile keine privaten Fotos ohne Nachdenken.",
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
        "remember": "Ich darf Hilfe holen.",
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
        "remember": "Ich gebe mein Passwort nicht weiter.",
        "module": "Modul 4: Links, Formulare und Betrug"
      },
      {
        "title": "Übung: Risiko prüfen",
        "icon": "exercise",
        "module": "Modul 4: Links, Formulare und Betrug",
        "practiceQuestion": {
          "question": "Du willst ein Foto von dir teilen. Was ist wichtig?",
          "answers": [
            "Ich überlege, wer das Foto sehen kann.",
            "Ich teile jedes Foto sofort.",
            "Ich schreibe mein Passwort dazu."
          ],
          "correct": 0,
          "explanation": "Fotos können weitergeleitet werden. Ich überlege vorher, ob ich das wirklich möchte."
        }
      },
      {
        "title": "Merksatz: Erst prüfen",
        "icon": "check",
        "text": [
          "Ich reagiere nicht sofort.",
          "Ich prüfe die Nachricht.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Ich sage Nein, wenn jemand zu viele Daten wissen will.",
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
        "remember": "Ich frage nach, wenn ich unsicher bin.",
        "module": "Modul 5: Daten im Internet"
      },
      {
        "title": "Daten im Internet",
        "icon": "message",
        "text": [
          "Daten können im Internet schnell weitergegeben werden.",
          "Darum ist vorsichtiges Handeln wichtig."
        ],
        "remember": "Ich teile keine privaten Fotos ohne Nachdenken.",
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
        "remember": "Ich darf Hilfe holen.",
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
        "remember": "Ich gebe mein Passwort nicht weiter.",
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
        "remember": "Ich sage Nein, wenn jemand zu viele Daten wissen will.",
        "module": "Modul 5: Daten im Internet"
      },
      {
        "title": "Übung: Gute Nachricht erkennen",
        "icon": "exercise",
        "module": "Modul 5: Daten im Internet",
        "practiceQuestion": {
          "question": "Eine App fragt nach deinem Standort. Was machst du?",
          "answers": [
            "Ich prüfe, ob die App den Standort wirklich braucht.",
            "Ich erlaube es immer.",
            "Ich schicke meinen Standort an alle."
          ],
          "correct": 0,
          "explanation": "Mein Standort ist privat. Ich gebe ihn nur frei, wenn es wirklich sinnvoll ist."
        }
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
        "remember": "Ich frage nach, wenn ich unsicher bin.",
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
        "remember": "Ich teile keine privaten Fotos ohne Nachdenken.",
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
        "remember": "Ich darf Hilfe holen.",
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
        "remember": "Ich gebe mein Passwort nicht weiter.",
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
        "remember": "Ich sage Nein, wenn jemand zu viele Daten wissen will.",
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
        "remember": "Ich frage nach, wenn ich unsicher bin.",
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
        "remember": "Ich teile keine privaten Fotos ohne Nachdenken.",
        "module": "Modul 6: Schutz und Hilfe",
        "practiceQuestion": {
          "question": "Du bist unsicher, ob du Daten eingeben sollst. Was machst du?",
          "answers": [
            "Ich frage eine Person, der ich vertraue.",
            "Ich mache einfach weiter.",
            "Ich gebe mehr Daten ein."
          ],
          "correct": 0,
          "explanation": "Bei Unsicherheit darf ich stoppen und Hilfe holen."
        }
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
        "remember": "Ich darf Hilfe holen.",
        "quiz": true,
        "module": "Modul 6: Schutz und Hilfe",
        "practiceQuestion": {
          "question": "Du siehst ein Feld für Bankdaten. Was machst du?",
          "answers": [
            "Ich prüfe sehr genau und frage nach.",
            "Ich trage alles sofort ein.",
            "Ich sende ein Foto meiner Karte."
          ],
          "correct": 0,
          "explanation": "Bankdaten sind sehr sensibel. Ich gebe sie nicht ohne sichere Prüfung ein."
        }
      }
    ],
    "illustration": "assets/illustrations/datenschutz.svg",
    "quizQuestions": [
      {
        "question": "Du bekommst eine Nachricht: „Schick mir dein Passwort, dann helfe ich dir.“ Was ist richtig?",
        "answers": [
          "Ich gebe mein Passwort nicht weiter.",
          "Ich schicke es sofort.",
          "Ich schicke es nur an eine Person weiter."
        ],
        "correct": 0
      },
      {
        "question": "Eine App fragt nach deinem Standort. Was machst du zuerst?",
        "answers": [
          "Ich erlaube alles immer.",
          "Ich prüfe, ob das nötig ist.",
          "Ich sende meinen Standort an Fremde."
        ],
        "correct": 1
      },
      {
        "question": "Du möchtest ein Foto von einer anderen Person teilen. Was machst du?",
        "answers": [
          "Ich schreibe den Namen dazu.",
          "Ich frage vorher.",
          "Ich teile es heimlich."
        ],
        "correct": 1
      },
      {
        "question": "Eine Webseite will viele private Daten. Du bist unsicher. Was machst du?",
        "answers": [
          "Ich frage eine vertraute Person.",
          "Ich klicke schneller weiter.",
          "Ich gebe alles ein."
        ],
        "correct": 0
      },
      {
        "question": "Was ist ein gutes Passwort?",
        "answers": [
          "Mein Name.",
          "123456.",
          "Ein geheimes Passwort, das andere nicht kennen."
        ],
        "correct": 2
      },
      {
        "question": "Jemand fragt nach deiner Adresse in einem Chat. Was machst du?",
        "answers": [
          "Ich schreibe sie in mein Profil.",
          "Ich schicke sie sofort.",
          "Ich gebe sie nicht einfach weiter."
        ],
        "correct": 2
      },
      {
        "question": "Du hast aus Versehen private Daten eingegeben. Was machst du?",
        "answers": [
          "Ich ignoriere es immer.",
          "Ich hole Unterstützung.",
          "Ich gebe noch mehr Daten ein."
        ],
        "correct": 1
      },
      {
        "question": "Welche Daten sind besonders privat?",
        "answers": [
          "Wetter.",
          "Passwort und Bankdaten.",
          "Lieblingsfarbe."
        ],
        "correct": 1
      },
      {
        "question": "Du willst dich irgendwo anmelden. Was hilft?",
        "answers": [
          "Ich prüfe, welche Daten gebraucht werden.",
          "Ich gebe Daten ohne Lesen ein.",
          "Ich benutze überall dasselbe Passwort."
        ],
        "correct": 0
      },
      {
        "question": "Was bedeutet Datenschutz im Alltag?",
        "answers": [
          "Ich teile alles mit allen.",
          "Ich versuche es erst einmal allein.",
          "Ich gehe vorsichtig mit meinen Daten um."
        ],
        "correct": 2
      }
    ],
    "certificateGoals": [
      "private Daten erkennen",
      "Daten sparsam teilen",
      "bei Unsicherheit Hilfe holen"
    ],
    "helpQuestions": [
      "Muss ich diese Daten wirklich eingeben?",
      "Ist diese Internet-Seite sicher?",
      "Was passiert mit meinen Daten?"
    ],
    "memoryRules": [
      "Ich gebe mein Passwort nicht weiter.",
      "Ich sage Nein, wenn jemand zu viele Daten wissen will.",
      "Ich frage nach, wenn ich unsicher bin.",
      "Ich teile keine privaten Fotos ohne Nachdenken.",
      "Ich darf Hilfe holen."
    ],
    "shortLessonIndexes": [
      0,
      1,
      5,
      6,
      7,
      8,
      9,
      11,
      31,
      35,
      37,
      38
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
        "remember": "Ich klicke nicht sofort auf komische Links.",
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
        "remember": "Ich gebe keine Codes weiter.",
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
        "remember": "Ich frage nach, wenn eine Nachricht komisch wirkt.",
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
        "remember": "Ich verlasse Gruppen, die mir nicht guttun.",
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
        "remember": "Ich blockiere Kontakte, wenn ich mich unwohl fühle.",
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
        "remember": "Ich klicke nicht sofort auf komische Links.",
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
        "remember": "Ich gebe keine Codes weiter.",
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
        "remember": "Ich frage nach, wenn eine Nachricht komisch wirkt.",
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
        "remember": "Ich verlasse Gruppen, die mir nicht guttun.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Übung: Private Daten erkennen",
        "icon": "exercise",
        "module": "Modul 2: Private Daten",
        "practiceQuestion": {
          "question": "Du bekommst einen Link von einer unbekannten Nummer. Was machst du?",
          "answers": [
            "Ich klicke nicht sofort.",
            "Ich klicke sofort.",
            "Ich leite den Link weiter."
          ],
          "correct": 0,
          "explanation": "Unbekannte Links können gefährlich sein. Ich prüfe erst oder frage eine vertraute Person."
        }
      },
      {
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "check",
        "text": [
          "Du darfst Nein sagen.",
          "Du musst keine privaten Daten schicken.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Ich blockiere Kontakte, wenn ich mich unwohl fühle.",
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
        "remember": "Ich klicke nicht sofort auf komische Links.",
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
        "remember": "Ich gebe keine Codes weiter.",
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
        "remember": "Ich frage nach, wenn eine Nachricht komisch wirkt.",
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
        "remember": "Ich verlasse Gruppen, die mir nicht guttun.",
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
        "remember": "Ich blockiere Kontakte, wenn ich mich unwohl fühle.",
        "module": "Modul 3: Fotos und Stimme"
      },
      {
        "title": "Übung: Foto oder Stimme",
        "icon": "exercise",
        "module": "Modul 3: Fotos und Stimme",
        "practiceQuestion": {
          "question": "Jemand fragt nach einem WhatsApp-Code. Was machst du?",
          "answers": [
            "Ich gebe den Code nicht weiter.",
            "Ich schicke den Code.",
            "Ich poste den Code in einer Gruppe."
          ],
          "correct": 0,
          "explanation": "WhatsApp-Codes sind privat. Damit kann jemand Zugang zu meinem Konto bekommen."
        }
      },
      {
        "title": "Merksatz: Ich entscheide",
        "icon": "check",
        "text": [
          "Du musst kein Foto schicken.",
          "Du musst keine Sprachnachricht schicken.",
          "Du darfst Nein sagen."
        ],
        "remember": "Ich klicke nicht sofort auf komische Links.",
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
        "remember": "Ich gebe keine Codes weiter.",
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
        "remember": "Ich frage nach, wenn eine Nachricht komisch wirkt.",
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
        "remember": "Ich verlasse Gruppen, die mir nicht guttun.",
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
        "remember": "Ich blockiere Kontakte, wenn ich mich unwohl fühle.",
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
        "remember": "Ich klicke nicht sofort auf komische Links.",
        "module": "Modul 4: Links und Betrug"
      },
      {
        "title": "Übung: Link prüfen",
        "icon": "exercise",
        "module": "Modul 4: Links und Betrug",
        "practiceQuestion": {
          "question": "Eine Gruppe stresst dich. Was kannst du tun?",
          "answers": [
            "Ich stelle sie stumm oder verlasse sie.",
            "Ich muss alles lesen.",
            "Ich antworte wütend."
          ],
          "correct": 0,
          "explanation": "Ich darf Gruppen stumm schalten oder verlassen. Ich muss nicht alles mitmachen."
        }
      },
      {
        "title": "Merksatz: Erst prüfen",
        "icon": "check",
        "text": [
          "Ich klicke nicht sofort.",
          "Ich prüfe die Nachricht.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Ich gebe keine Codes weiter.",
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
        "remember": "Ich frage nach, wenn eine Nachricht komisch wirkt.",
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
        "remember": "Ich verlasse Gruppen, die mir nicht guttun.",
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
        "remember": "Ich blockiere Kontakte, wenn ich mich unwohl fühle.",
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
        "remember": "Ich klicke nicht sofort auf komische Links.",
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
        "remember": "Ich gebe keine Codes weiter.",
        "module": "Modul 5: Gruppen und gutes Verhalten"
      },
      {
        "title": "Übung: Gute Nachricht erkennen",
        "icon": "exercise",
        "module": "Modul 5: Gruppen und gutes Verhalten",
        "practiceQuestion": {
          "question": "Du willst ein Foto weiterleiten. Was prüfst du?",
          "answers": [
            "Ob die Person einverstanden ist.",
            "Ob es lustig ist.",
            "Ob viele es sehen sollen."
          ],
          "correct": 0,
          "explanation": "Fotos von anderen leite ich nicht ohne Erlaubnis weiter."
        }
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
        "remember": "Ich frage nach, wenn eine Nachricht komisch wirkt.",
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
        "remember": "Ich verlasse Gruppen, die mir nicht guttun.",
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
        "remember": "Ich blockiere Kontakte, wenn ich mich unwohl fühle.",
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
        "remember": "Ich klicke nicht sofort auf komische Links.",
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
        "remember": "Ich gebe keine Codes weiter.",
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
        "remember": "Ich frage nach, wenn eine Nachricht komisch wirkt.",
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
        "remember": "Ich verlasse Gruppen, die mir nicht guttun.",
        "module": "Modul 6: Schutz und Hilfe",
        "practiceQuestion": {
          "question": "Eine Nachricht macht dir Druck. Was machst du?",
          "answers": [
            "Ich stoppe und frage Unterstützung.",
            "Ich reagiere sofort.",
            "Ich sende Geld."
          ],
          "correct": 0,
          "explanation": "Druck ist ein Warnzeichen. Ich darf Hilfe holen."
        }
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
        "remember": "Ich blockiere Kontakte, wenn ich mich unwohl fühle.",
        "quiz": true,
        "module": "Modul 6: Schutz und Hilfe",
        "practiceQuestion": {
          "question": "Du bekommst eine Sprachnachricht und verstehst sie nicht. Was machst du?",
          "answers": [
            "Ich höre sie noch einmal oder frage nach.",
            "Ich antworte irgendwas.",
            "Ich lösche alle Kontakte."
          ],
          "correct": 0,
          "explanation": "Ich darf nachfragen. Ich muss nicht sofort antworten."
        }
      }
    ],
    "illustration": "assets/illustrations/whatsapp.svg",
    "quizQuestions": [
      {
        "question": "Du bekommst einen unbekannten Link. Was machst du?",
        "answers": [
          "Ich klicke nicht sofort.",
          "Ich leite ihn weiter.",
          "Ich gebe meine Daten ein."
        ],
        "correct": 0
      },
      {
        "question": "Jemand fragt nach deinem WhatsApp-Code. Was machst du?",
        "answers": [
          "Ich schicke ihn sofort.",
          "Ich gebe ihn nicht weiter.",
          "Ich poste ihn."
        ],
        "correct": 1
      },
      {
        "question": "Eine Gruppe stresst dich. Was ist möglich?",
        "answers": [
          "Immer antworten müssen.",
          "Stumm schalten oder verlassen.",
          "Alles lesen müssen."
        ],
        "correct": 1
      },
      {
        "question": "Du willst ein Foto von jemandem weiterleiten. Was machst du zuerst?",
        "answers": [
          "Ich frage vorher.",
          "Ich schreibe den Namen dazu.",
          "Ich leite es direkt weiter."
        ],
        "correct": 0
      },
      {
        "question": "Eine Nachricht macht dir Druck. Was ist ein guter Schritt?",
        "answers": [
          "Sofort Geld senden.",
          "Schnell klicken.",
          "Stoppen und Unterstützung fragen."
        ],
        "correct": 2
      },
      {
        "question": "Eine fremde Nummer schreibt dir komisch. Was machst du?",
        "answers": [
          "Ich sende ein Foto.",
          "Ich gebe private Daten.",
          "Ich prüfe und antworte nicht sofort."
        ],
        "correct": 2
      },
      {
        "question": "Was schützt dein WhatsApp-Konto?",
        "answers": [
          "Codes weitergeben.",
          "Codes geheim halten.",
          "Passwort teilen."
        ],
        "correct": 1
      },
      {
        "question": "Du verstehst eine Nachricht nicht. Was darfst du tun?",
        "answers": [
          "Ich klicke zurück und versuche es allein.",
          "Nachfragen oder Hilfe holen.",
          "Raten und senden."
        ],
        "correct": 1
      },
      {
        "question": "Was machst du bei Beleidigungen?",
        "answers": [
          "Blockieren, melden oder Hilfe holen.",
          "Alles geheim halten.",
          "Zurück beleidigen."
        ],
        "correct": 0
      },
      {
        "question": "Was ist bei WhatsApp wichtig?",
        "answers": [
          "Ich muss alles teilen.",
          "Ich muss immer sofort antworten.",
          "Ich entscheide, was ich teile."
        ],
        "correct": 2
      }
    ],
    "certificateGoals": [
      "private Daten schützen",
      "komische Links erkennen",
      "bei Druck Hilfe holen"
    ],
    "helpQuestions": [
      "Ist dieser Link sicher?",
      "Soll ich diese Person blockieren?",
      "Darf ich dieses Foto verschicken?"
    ],
    "memoryRules": [
      "Ich klicke nicht sofort auf komische Links.",
      "Ich gebe keine Codes weiter.",
      "Ich frage nach, wenn eine Nachricht komisch wirkt.",
      "Ich verlasse Gruppen, die mir nicht guttun.",
      "Ich blockiere Kontakte, wenn ich mich unwohl fühle."
    ],
    "shortLessonIndexes": [
      0,
      1,
      5,
      11,
      12,
      19,
      21,
      26,
      31,
      35,
      37,
      38
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
        "remember": "Ich prüfe, wer meinen Beitrag sehen kann.",
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
        "remember": "Ich nehme nicht jede Freundschaftsanfrage an.",
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
        "remember": "Ich teile keine privaten Daten öffentlich.",
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
        "remember": "Ich prüfe Nachrichten von fremden Personen.",
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
        "remember": "Ich kann blockieren und melden.",
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
        "remember": "Ich prüfe, wer meinen Beitrag sehen kann.",
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
        "remember": "Ich nehme nicht jede Freundschaftsanfrage an.",
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
        "remember": "Ich teile keine privaten Daten öffentlich.",
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
        "remember": "Ich prüfe Nachrichten von fremden Personen.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Übung: Private Daten erkennen",
        "icon": "exercise",
        "module": "Modul 2: Private Daten",
        "practiceQuestion": {
          "question": "Eine fremde Person schickt eine Freundschaftsanfrage. Was machst du?",
          "answers": [
            "Ich prüfe erst, ob ich die Person kenne.",
            "Ich nehme immer an.",
            "Ich schicke private Daten."
          ],
          "correct": 0,
          "explanation": "Ich muss nicht jede Anfrage annehmen. Ich prüfe erst."
        }
      },
      {
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "check",
        "text": [
          "Du darfst Nein sagen.",
          "Du musst keine privaten Daten schicken.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Ich kann blockieren und melden.",
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
        "remember": "Ich prüfe, wer meinen Beitrag sehen kann.",
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
        "remember": "Ich nehme nicht jede Freundschaftsanfrage an.",
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
        "remember": "Ich teile keine privaten Daten öffentlich.",
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
        "remember": "Ich prüfe Nachrichten von fremden Personen.",
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
        "remember": "Ich kann blockieren und melden.",
        "module": "Modul 3: Beiträge, Fotos und Kommentare"
      },
      {
        "title": "Übung: Inhalt prüfen",
        "icon": "exercise",
        "module": "Modul 3: Beiträge, Fotos und Kommentare",
        "practiceQuestion": {
          "question": "Du willst einen Beitrag posten. Was prüfst du?",
          "answers": [
            "Wer den Beitrag sehen kann.",
            "Wie schnell ich poste.",
            "Ob viele Emojis drin sind."
          ],
          "correct": 0,
          "explanation": "Bei Facebook ist wichtig, ob ein Beitrag öffentlich ist oder nur für bestimmte Personen sichtbar ist."
        }
      },
      {
        "title": "Merksatz: Ich entscheide",
        "icon": "check",
        "text": [
          "Ich muss nichts posten.",
          "Ich muss nichts verschicken.",
          "Ich darf Nein sagen."
        ],
        "remember": "Ich prüfe, wer meinen Beitrag sehen kann.",
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
        "remember": "Ich nehme nicht jede Freundschaftsanfrage an.",
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
        "remember": "Ich teile keine privaten Daten öffentlich.",
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
        "remember": "Ich prüfe Nachrichten von fremden Personen.",
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
        "remember": "Ich kann blockieren und melden.",
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
        "remember": "Ich prüfe, wer meinen Beitrag sehen kann.",
        "module": "Modul 4: Beiträge, Werbung und Betrug"
      },
      {
        "title": "Übung: Risiko prüfen",
        "icon": "exercise",
        "module": "Modul 4: Beiträge, Werbung und Betrug",
        "practiceQuestion": {
          "question": "Eine Nachricht verspricht einen Gewinn. Was machst du?",
          "answers": [
            "Ich prüfe, ob es echt ist.",
            "Ich gebe sofort Daten ein.",
            "Ich teile es an alle."
          ],
          "correct": 0,
          "explanation": "Gewinn-Nachrichten können Betrug sein. Ich gebe keine Daten ein."
        }
      },
      {
        "title": "Merksatz: Erst prüfen",
        "icon": "check",
        "text": [
          "Ich reagiere nicht sofort.",
          "Ich prüfe die Nachricht.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Ich nehme nicht jede Freundschaftsanfrage an.",
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
        "remember": "Ich teile keine privaten Daten öffentlich.",
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
        "remember": "Ich prüfe Nachrichten von fremden Personen.",
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
        "remember": "Ich kann blockieren und melden.",
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
        "remember": "Ich prüfe, wer meinen Beitrag sehen kann.",
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
        "remember": "Ich nehme nicht jede Freundschaftsanfrage an.",
        "module": "Modul 5: Beiträge und Kommentare"
      },
      {
        "title": "Übung: Gute Nachricht erkennen",
        "icon": "exercise",
        "module": "Modul 5: Beiträge und Kommentare",
        "practiceQuestion": {
          "question": "Jemand schreibt unangenehme Kommentare. Was kannst du tun?",
          "answers": [
            "Blockieren, melden oder Unterstützung fragen.",
            "Alles ertragen.",
            "Zurück beleidigen."
          ],
          "correct": 0,
          "explanation": "Ich darf mich schützen. Blockieren und Melden sind erlaubt."
        }
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
        "remember": "Ich teile keine privaten Daten öffentlich.",
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
        "remember": "Ich prüfe Nachrichten von fremden Personen.",
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
        "remember": "Ich kann blockieren und melden.",
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
        "remember": "Ich prüfe, wer meinen Beitrag sehen kann.",
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
        "remember": "Ich nehme nicht jede Freundschaftsanfrage an.",
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
        "remember": "Ich teile keine privaten Daten öffentlich.",
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
        "remember": "Ich prüfe Nachrichten von fremden Personen.",
        "module": "Modul 6: Schutz und Hilfe",
        "practiceQuestion": {
          "question": "Du siehst eine traurige oder wütende Nachricht. Was hilft?",
          "answers": [
            "Erst prüfen, dann teilen.",
            "Sofort teilen.",
            "Private Daten dazuschreiben."
          ],
          "correct": 0,
          "explanation": "Nicht alles auf Facebook ist richtig. Ich prüfe Inhalte vor dem Teilen."
        }
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
        "remember": "Ich kann blockieren und melden.",
        "quiz": true,
        "module": "Modul 6: Schutz und Hilfe",
        "practiceQuestion": {
          "question": "Facebook fragt nach mehr Profil-Daten. Was machst du?",
          "answers": [
            "Ich überlege, ob das nötig ist.",
            "Ich fülle alles aus.",
            "Ich schreibe meine Adresse öffentlich."
          ],
          "correct": 0,
          "explanation": "Mein Profil muss nicht alles über mich zeigen."
        }
      }
    ],
    "illustration": "assets/illustrations/facebook.svg",
    "quizQuestions": [
      {
        "question": "Eine fremde Person schickt eine Freundschaftsanfrage. Was machst du?",
        "answers": [
          "Ich prüfe erst, ob ich die Person kenne.",
          "Ich nehme immer an.",
          "Ich schicke private Daten."
        ],
        "correct": 0
      },
      {
        "question": "Du willst einen Beitrag posten. Was prüfst du?",
        "answers": [
          "Wie schnell ich poste.",
          "Wer den Beitrag sehen kann.",
          "Ob viele Emojis drin sind."
        ],
        "correct": 1
      },
      {
        "question": "Eine Nachricht verspricht einen Gewinn. Was machst du?",
        "answers": [
          "Ich teile es an alle.",
          "Ich prüfe, ob es echt ist.",
          "Ich gebe sofort Daten ein."
        ],
        "correct": 1
      },
      {
        "question": "Jemand schreibt unangenehme Kommentare. Was kannst du tun?",
        "answers": [
          "Blockieren, melden oder Unterstützung fragen.",
          "Zurück beleidigen.",
          "Alles ertragen."
        ],
        "correct": 0
      },
      {
        "question": "Du siehst eine traurige oder wütende Nachricht. Was hilft?",
        "answers": [
          "Sofort teilen.",
          "Private Daten dazuschreiben.",
          "Erst prüfen, dann teilen."
        ],
        "correct": 2
      },
      {
        "question": "Facebook fragt nach mehr Profil-Daten. Was machst du?",
        "answers": [
          "Ich schreibe meine Adresse öffentlich.",
          "Ich fülle alles aus.",
          "Ich überlege, ob das nötig ist."
        ],
        "correct": 2
      },
      {
        "question": "Du willst deine Adresse in dein Profil schreiben. Was machst du?",
        "answers": [
          "Ich schreibe alles öffentlich.",
          "Ich lasse private Daten lieber weg.",
          "Ich gebe nur meine Kontonummer ein."
        ],
        "correct": 1
      },
      {
        "question": "Ein Beitrag macht dich sehr wütend. Was hilft?",
        "answers": [
          "Private Daten posten.",
          "Erst ruhig bleiben und prüfen.",
          "Sofort beleidigen."
        ],
        "correct": 1
      },
      {
        "question": "Du siehst einen fremden Link in Facebook. Was machst du?",
        "answers": [
          "Ich klicke nicht sofort.",
          "Ich teile ihn sofort.",
          "Ich gebe mein Passwort ein."
        ],
        "correct": 0
      },
      {
        "question": "Du möchtest deine Sichtbarkeit prüfen. Was suchst du?",
        "answers": [
          "Nur Emojis.",
          "Nur die Farbe der App.",
          "Privatsphäre-Einstellungen."
        ],
        "correct": 2
      }
    ],
    "certificateGoals": [
      "Profil und Beiträge prüfen",
      "fremde Anfragen einschätzen",
      "blockieren oder melden"
    ],
    "helpQuestions": [
      "Wer kann diesen Beitrag sehen?",
      "Soll ich diese Anfrage annehmen?",
      "Soll ich diesen Kommentar melden?"
    ],
    "memoryRules": [
      "Ich prüfe, wer meinen Beitrag sehen kann.",
      "Ich nehme nicht jede Freundschaftsanfrage an.",
      "Ich teile keine privaten Daten öffentlich.",
      "Ich prüfe Nachrichten von fremden Personen.",
      "Ich kann blockieren und melden."
    ],
    "shortLessonIndexes": [
      0,
      1,
      2,
      5,
      6,
      11,
      15,
      18,
      33,
      35,
      37,
      38
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
        "remember": "Ich frage, bevor ich Fotos von anderen poste.",
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
        "remember": "Ich teile meinen Standort nicht automatisch.",
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
        "remember": "Ich prüfe Nachrichten von fremden Profilen.",
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
        "remember": "Ich muss nicht auf Kommentare reagieren.",
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
        "remember": "Ich kann blockieren und melden.",
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
        "remember": "Ich frage, bevor ich Fotos von anderen poste.",
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
        "remember": "Ich teile meinen Standort nicht automatisch.",
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
        "remember": "Ich prüfe Nachrichten von fremden Profilen.",
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
        "remember": "Ich muss nicht auf Kommentare reagieren.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Übung: Private Daten erkennen",
        "icon": "exercise",
        "module": "Modul 2: Private Daten",
        "practiceQuestion": {
          "question": "Du willst ein Foto mit einer anderen Person posten. Was machst du?",
          "answers": [
            "Ich frage die Person vorher.",
            "Ich poste es sofort.",
            "Ich markiere sie heimlich."
          ],
          "correct": 0,
          "explanation": "Andere Menschen dürfen mitentscheiden, ob ein Foto von ihnen online ist."
        }
      },
      {
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "check",
        "text": [
          "Du darfst Nein sagen.",
          "Du musst keine privaten Daten schicken.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Ich kann blockieren und melden.",
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
        "remember": "Ich frage, bevor ich Fotos von anderen poste.",
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
        "remember": "Ich teile meinen Standort nicht automatisch.",
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
        "remember": "Ich prüfe Nachrichten von fremden Profilen.",
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
        "remember": "Ich muss nicht auf Kommentare reagieren.",
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
        "remember": "Ich kann blockieren und melden.",
        "module": "Modul 3: Fotos, Stories und Reels"
      },
      {
        "title": "Übung: Inhalt prüfen",
        "icon": "exercise",
        "module": "Modul 3: Fotos, Stories und Reels",
        "practiceQuestion": {
          "question": "Instagram schlägt dir vor, den Standort zu teilen. Was machst du?",
          "answers": [
            "Ich prüfe, ob ich das wirklich möchte.",
            "Ich teile ihn immer.",
            "Ich teile ihn mit Fremden."
          ],
          "correct": 0,
          "explanation": "Mein Standort ist privat. Ich muss ihn nicht teilen."
        }
      },
      {
        "title": "Merksatz: Ich entscheide",
        "icon": "check",
        "text": [
          "Ich muss nichts posten.",
          "Ich muss nichts verschicken.",
          "Ich darf Nein sagen."
        ],
        "remember": "Ich frage, bevor ich Fotos von anderen poste.",
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
        "remember": "Ich teile meinen Standort nicht automatisch.",
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
        "remember": "Ich prüfe Nachrichten von fremden Profilen.",
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
        "remember": "Ich muss nicht auf Kommentare reagieren.",
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
        "remember": "Ich kann blockieren und melden.",
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
        "remember": "Ich frage, bevor ich Fotos von anderen poste.",
        "module": "Modul 4: Stories, Werbung und Betrug"
      },
      {
        "title": "Übung: Risiko prüfen",
        "icon": "exercise",
        "module": "Modul 4: Stories, Werbung und Betrug",
        "practiceQuestion": {
          "question": "Ein fremdes Profil schreibt dir Komplimente und will private Bilder. Was machst du?",
          "answers": [
            "Ich sende keine privaten Bilder.",
            "Ich sende sofort Bilder.",
            "Ich gebe meine Adresse."
          ],
          "correct": 0,
          "explanation": "Private Bilder bleiben privat. Bei Druck hole ich Hilfe."
        }
      },
      {
        "title": "Merksatz: Erst prüfen",
        "icon": "check",
        "text": [
          "Ich reagiere nicht sofort.",
          "Ich prüfe die Nachricht.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Ich teile meinen Standort nicht automatisch.",
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
        "remember": "Ich prüfe Nachrichten von fremden Profilen.",
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
        "remember": "Ich muss nicht auf Kommentare reagieren.",
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
        "remember": "Ich kann blockieren und melden.",
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
        "remember": "Ich frage, bevor ich Fotos von anderen poste.",
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
        "remember": "Ich teile meinen Standort nicht automatisch.",
        "module": "Modul 5: Kommentare und Nachrichten"
      },
      {
        "title": "Übung: Gute Nachricht erkennen",
        "icon": "exercise",
        "module": "Modul 5: Kommentare und Nachrichten",
        "practiceQuestion": {
          "question": "Ein Kommentar verletzt dich. Was kannst du tun?",
          "answers": [
            "Blockieren, melden oder Hilfe holen.",
            "Sofort zurückschreiben.",
            "Alles aushalten."
          ],
          "correct": 0,
          "explanation": "Ich darf mich schützen. Ich muss verletzende Kommentare nicht allein lösen."
        }
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
        "remember": "Ich prüfe Nachrichten von fremden Profilen.",
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
        "remember": "Ich muss nicht auf Kommentare reagieren.",
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
        "remember": "Ich kann blockieren und melden.",
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
        "remember": "Ich frage, bevor ich Fotos von anderen poste.",
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
        "remember": "Ich teile meinen Standort nicht automatisch.",
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
        "remember": "Ich prüfe Nachrichten von fremden Profilen.",
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
        "remember": "Ich muss nicht auf Kommentare reagieren.",
        "module": "Modul 6: Schutz und Hilfe",
        "practiceQuestion": {
          "question": "Du siehst Werbung für ein angeblich kostenloses Produkt. Was machst du?",
          "answers": [
            "Ich prüfe, ob Kosten entstehen.",
            "Ich gebe sofort Daten ein.",
            "Ich teile meine Bankdaten."
          ],
          "correct": 0,
          "explanation": "Werbung kann täuschen. Ich prüfe erst."
        }
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
        "remember": "Ich kann blockieren und melden.",
        "quiz": true,
        "module": "Modul 6: Schutz und Hilfe",
        "practiceQuestion": {
          "question": "Du möchtest eine Story posten. Was prüfst du?",
          "answers": [
            "Wer die Story sehen kann.",
            "Ob alle sie sehen müssen.",
            "Ob private Daten sichtbar sind egal."
          ],
          "correct": 0,
          "explanation": "Stories können von anderen gesehen oder gespeichert werden. Ich prüfe vorher."
        }
      }
    ],
    "illustration": "assets/illustrations/instagram.svg",
    "quizQuestions": [
      {
        "question": "Du willst ein Foto mit einer anderen Person posten. Was machst du?",
        "answers": [
          "Ich frage die Person vorher.",
          "Ich poste es sofort.",
          "Ich markiere sie heimlich."
        ],
        "correct": 0
      },
      {
        "question": "Instagram schlägt dir vor, den Standort zu teilen. Was machst du?",
        "answers": [
          "Ich teile ihn immer.",
          "Ich prüfe, ob ich das wirklich möchte.",
          "Ich teile ihn mit Fremden."
        ],
        "correct": 1
      },
      {
        "question": "Ein fremdes Profil schreibt dir Komplimente und will private Bilder. Was machst du?",
        "answers": [
          "Ich gebe meine Adresse.",
          "Ich sende keine privaten Bilder.",
          "Ich sende sofort Bilder."
        ],
        "correct": 1
      },
      {
        "question": "Ein Kommentar verletzt dich. Was kannst du tun?",
        "answers": [
          "Blockieren, melden oder Hilfe holen.",
          "Alles aushalten.",
          "Sofort zurückschreiben."
        ],
        "correct": 0
      },
      {
        "question": "Du siehst Werbung für ein angeblich kostenloses Produkt. Was machst du?",
        "answers": [
          "Ich gebe sofort Daten ein.",
          "Ich gebe nur meine Kontonummer ein.",
          "Ich prüfe, ob Kosten entstehen."
        ],
        "correct": 2
      },
      {
        "question": "Du möchtest eine Story posten. Was prüfst du?",
        "answers": [
          "Ob private Daten sichtbar sind egal.",
          "Ob alle sie sehen müssen.",
          "Wer die Story sehen kann."
        ],
        "correct": 2
      },
      {
        "question": "Du bekommst eine Nachricht von einem fremden Profil. Was machst du?",
        "answers": [
          "Ich sende meine Adresse.",
          "Ich bin vorsichtig und gebe keine Daten.",
          "Ich sende private Fotos."
        ],
        "correct": 1
      },
      {
        "question": "Du postest eine Story. Was prüfst du?",
        "answers": [
          "Ob mein Passwort sichtbar ist.",
          "Wer sie sehen kann.",
          "Ob alle sie sehen müssen."
        ],
        "correct": 1
      },
      {
        "question": "Ein Gewinnspiel fragt nach Bankdaten. Was machst du?",
        "answers": [
          "Ich gebe keine Bankdaten ein.",
          "Ich teile es weiter.",
          "Ich sende alles."
        ],
        "correct": 0
      },
      {
        "question": "Was machst du bei einem unangenehmen Profil?",
        "answers": [
          "Immer antworten.",
          "Private Daten schicken.",
          "Blockieren oder melden."
        ],
        "correct": 2
      }
    ],
    "certificateGoals": [
      "Fotos bewusst posten",
      "Stories und Standort prüfen",
      "Nachrichten sicher einschätzen"
    ],
    "helpQuestions": [
      "Darf ich dieses Foto posten?",
      "Soll ich meinen Standort zeigen?",
      "Was mache ich bei einer komischen Nachricht?"
    ],
    "memoryRules": [
      "Ich frage, bevor ich Fotos von anderen poste.",
      "Ich teile meinen Standort nicht automatisch.",
      "Ich prüfe Nachrichten von fremden Profilen.",
      "Ich muss nicht auf Kommentare reagieren.",
      "Ich kann blockieren und melden."
    ],
    "shortLessonIndexes": [
      0,
      1,
      2,
      5,
      6,
      11,
      15,
      18,
      33,
      35,
      37,
      38
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
        "remember": "Ich glaube nicht jedes Video sofort.",
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
        "remember": "Ich prüfe, wer das Video gemacht hat.",
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
        "remember": "Ich achte auf Werbung.",
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
        "remember": "Ich mache Pause, wenn Videos zu viel werden.",
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
        "remember": "Ich frage nach, wenn mir ein Video Angst macht.",
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
        "remember": "Ich glaube nicht jedes Video sofort.",
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
        "remember": "Ich prüfe, wer das Video gemacht hat.",
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
        "remember": "Ich achte auf Werbung.",
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
        "remember": "Ich mache Pause, wenn Videos zu viel werden.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Übung: Private Daten erkennen",
        "icon": "exercise",
        "module": "Modul 2: Private Daten",
        "practiceQuestion": {
          "question": "Ein Video behauptet etwas sehr Erschreckendes. Was machst du?",
          "answers": [
            "Ich prüfe die Quelle.",
            "Ich glaube es sofort.",
            "Ich teile es direkt."
          ],
          "correct": 0,
          "explanation": "Nicht jedes Video ist richtig. Ich prüfe, wer es gemacht hat."
        }
      },
      {
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "check",
        "text": [
          "Du darfst Nein sagen.",
          "Du musst keine privaten Daten schicken.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Ich frage nach, wenn mir ein Video Angst macht.",
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
        "remember": "Ich glaube nicht jedes Video sofort.",
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
        "remember": "Ich prüfe, wer das Video gemacht hat.",
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
        "remember": "Ich achte auf Werbung.",
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
        "remember": "Ich mache Pause, wenn Videos zu viel werden.",
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
        "remember": "Ich frage nach, wenn mir ein Video Angst macht.",
        "module": "Modul 3: Videos, Kommentare und Werbung"
      },
      {
        "title": "Übung: Inhalt prüfen",
        "icon": "exercise",
        "module": "Modul 3: Videos, Kommentare und Werbung",
        "practiceQuestion": {
          "question": "Ein Video ist Werbung, sieht aber wie ein Tipp aus. Was machst du?",
          "answers": [
            "Ich achte auf Werbung und Kosten.",
            "Ich kaufe sofort.",
            "Ich gebe Daten ein."
          ],
          "correct": 0,
          "explanation": "Werbung will oft etwas verkaufen. Ich prüfe vorher."
        }
      },
      {
        "title": "Merksatz: Ich entscheide",
        "icon": "check",
        "text": [
          "Ich muss nichts posten.",
          "Ich muss nichts verschicken.",
          "Ich darf Nein sagen."
        ],
        "remember": "Ich glaube nicht jedes Video sofort.",
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
        "remember": "Ich prüfe, wer das Video gemacht hat.",
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
        "remember": "Ich achte auf Werbung.",
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
        "remember": "Ich mache Pause, wenn Videos zu viel werden.",
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
        "remember": "Ich frage nach, wenn mir ein Video Angst macht.",
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
        "remember": "Ich glaube nicht jedes Video sofort.",
        "module": "Modul 4: Werbung, Fake News und Betrug"
      },
      {
        "title": "Übung: Risiko prüfen",
        "icon": "exercise",
        "module": "Modul 4: Werbung, Fake News und Betrug",
        "practiceQuestion": {
          "question": "Autoplay zeigt immer weiter Videos. Was kannst du tun?",
          "answers": [
            "Pause machen oder Autoplay stoppen.",
            "Immer weiter schauen müssen.",
            "Die ganze Nacht schauen."
          ],
          "correct": 0,
          "explanation": "Ich darf Pausen machen. Ich entscheide, wann Schluss ist."
        }
      },
      {
        "title": "Merksatz: Erst prüfen",
        "icon": "check",
        "text": [
          "Ich reagiere nicht sofort.",
          "Ich prüfe die Nachricht.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Ich prüfe, wer das Video gemacht hat.",
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
        "remember": "Ich achte auf Werbung.",
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
        "remember": "Ich mache Pause, wenn Videos zu viel werden.",
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
        "remember": "Ich frage nach, wenn mir ein Video Angst macht.",
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
        "remember": "Ich glaube nicht jedes Video sofort.",
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
        "remember": "Ich prüfe, wer das Video gemacht hat.",
        "module": "Modul 5: Kommentare und Community"
      },
      {
        "title": "Übung: Gute Nachricht erkennen",
        "icon": "exercise",
        "module": "Modul 5: Kommentare und Community",
        "practiceQuestion": {
          "question": "In den Kommentaren beleidigt jemand andere. Was machst du?",
          "answers": [
            "Nicht mitmachen und Hilfe holen, wenn nötig.",
            "Mitbeleidigen.",
            "Private Daten schreiben."
          ],
          "correct": 0,
          "explanation": "Beleidigungen sind nicht okay. Ich muss nicht mitmachen."
        }
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
        "remember": "Ich achte auf Werbung.",
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
        "remember": "Ich mache Pause, wenn Videos zu viel werden.",
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
        "remember": "Ich frage nach, wenn mir ein Video Angst macht.",
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
        "remember": "Ich glaube nicht jedes Video sofort.",
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
        "remember": "Ich prüfe, wer das Video gemacht hat.",
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
        "remember": "Ich achte auf Werbung.",
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
        "remember": "Ich mache Pause, wenn Videos zu viel werden.",
        "module": "Modul 6: Schutz und Hilfe",
        "practiceQuestion": {
          "question": "Ein YouTuber sagt: „Klick schnell auf den Link.“ Was machst du?",
          "answers": [
            "Ich prüfe den Link erst.",
            "Ich klicke sofort.",
            "Ich gebe Passwort ein."
          ],
          "correct": 0,
          "explanation": "Links unter Videos können riskant sein. Ich prüfe erst."
        }
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
        "remember": "Ich frage nach, wenn mir ein Video Angst macht.",
        "quiz": true,
        "module": "Modul 6: Schutz und Hilfe",
        "practiceQuestion": {
          "question": "Ein Video macht dir Angst. Was machst du?",
          "answers": [
            "Ich stoppe das Video und spreche mit jemandem.",
            "Ich schaue weiter, obwohl es mir schlecht geht.",
            "Ich teile es mit allen."
          ],
          "correct": 0,
          "explanation": "Ich darf Videos stoppen. Ich darf Unterstützung holen."
        }
      }
    ],
    "illustration": "assets/illustrations/youtube.svg",
    "quizQuestions": [
      {
        "question": "Ein Video behauptet etwas sehr Erschreckendes. Was machst du?",
        "answers": [
          "Ich prüfe die Quelle.",
          "Ich glaube es sofort.",
          "Ich teile es direkt."
        ],
        "correct": 0
      },
      {
        "question": "Ein Video ist Werbung, sieht aber wie ein Tipp aus. Was machst du?",
        "answers": [
          "Ich kaufe sofort.",
          "Ich achte auf Werbung und Kosten.",
          "Ich gebe Daten ein."
        ],
        "correct": 1
      },
      {
        "question": "Autoplay zeigt immer weiter Videos. Was kannst du tun?",
        "answers": [
          "Die ganze Nacht schauen.",
          "Pause machen oder Autoplay stoppen.",
          "Immer weiter schauen müssen."
        ],
        "correct": 1
      },
      {
        "question": "In den Kommentaren beleidigt jemand andere. Was machst du?",
        "answers": [
          "Nicht mitmachen und Hilfe holen, wenn nötig.",
          "Private Daten schreiben.",
          "Mitbeleidigen."
        ],
        "correct": 0
      },
      {
        "question": "Ein YouTuber sagt: „Klick schnell auf den Link.“ Was machst du?",
        "answers": [
          "Ich klicke sofort.",
          "Ich gebe Passwort ein.",
          "Ich prüfe den Link erst."
        ],
        "correct": 2
      },
      {
        "question": "Ein Video macht dir Angst. Was machst du?",
        "answers": [
          "Ich teile es mit einer kleinen Gruppe.",
          "Ich schaue weiter, obwohl es mir schlecht geht.",
          "Ich stoppe das Video und spreche mit jemandem."
        ],
        "correct": 2
      },
      {
        "question": "Ein Video empfiehlt ein gefährliches Experiment. Was machst du?",
        "answers": [
          "Ich mache sofort mit.",
          "Ich mache es nicht nach.",
          "Ich fordere andere auf."
        ],
        "correct": 1
      },
      {
        "question": "Ein Video hat einen Kauf-Link. Was prüfst du?",
        "answers": [
          "Nur die Farbe.",
          "Ob es Werbung oder Kosten sind.",
          "Nur die Musik."
        ],
        "correct": 1
      },
      {
        "question": "Du schaust schon sehr lange Videos. Was hilft?",
        "answers": [
          "Pause machen.",
          "Nicht schlafen.",
          "Immer weiter schauen."
        ],
        "correct": 0
      },
      {
        "question": "Du willst wissen, ob ein Video stimmt. Was prüfst du?",
        "answers": [
          "Nur den Titel.",
          "Nur das Bild.",
          "Quelle und andere Informationen."
        ],
        "correct": 2
      }
    ],
    "certificateGoals": [
      "Videos und Quellen prüfen",
      "Werbung erkennen",
      "Kommentare vorsichtig nutzen"
    ],
    "helpQuestions": [
      "Ist dieses Video glaubwürdig?",
      "Ist das Werbung?",
      "Soll ich diesen Kommentar melden?"
    ],
    "memoryRules": [
      "Ich glaube nicht jedes Video sofort.",
      "Ich prüfe, wer das Video gemacht hat.",
      "Ich achte auf Werbung.",
      "Ich mache Pause, wenn Videos zu viel werden.",
      "Ich frage nach, wenn mir ein Video Angst macht."
    ],
    "shortLessonIndexes": [
      0,
      1,
      2,
      5,
      11,
      12,
      15,
      18,
      25,
      35,
      37,
      38
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
        "remember": "Ich denke daran: Snaps können gespeichert werden.",
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
        "remember": "Ich sende keine Bilder, die mir unangenehm sind.",
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
        "remember": "Ich teile meinen Standort nicht automatisch.",
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
        "remember": "Ich reagiere nicht auf Druck.",
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
        "remember": "Ich hole Hilfe, wenn mir etwas Angst macht.",
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
        "remember": "Ich denke daran: Snaps können gespeichert werden.",
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
        "remember": "Ich sende keine Bilder, die mir unangenehm sind.",
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
        "remember": "Ich teile meinen Standort nicht automatisch.",
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
        "remember": "Ich reagiere nicht auf Druck.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Übung: Private Daten erkennen",
        "icon": "exercise",
        "module": "Modul 2: Private Daten",
        "practiceQuestion": {
          "question": "Jemand sagt: „Der Snap verschwindet ja wieder.“ Was ist richtig?",
          "answers": [
            "Er kann trotzdem gespeichert werden.",
            "Er ist immer sicher weg.",
            "Niemand kann ihn sehen."
          ],
          "correct": 0,
          "explanation": "Snaps können per Screenshot oder anderem Gerät gespeichert werden."
        }
      },
      {
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "check",
        "text": [
          "Du darfst Nein sagen.",
          "Du musst keine privaten Daten schicken.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Ich hole Hilfe, wenn mir etwas Angst macht.",
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
        "remember": "Ich denke daran: Snaps können gespeichert werden.",
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
        "remember": "Ich sende keine Bilder, die mir unangenehm sind.",
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
        "remember": "Ich teile meinen Standort nicht automatisch.",
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
        "remember": "Ich reagiere nicht auf Druck.",
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
        "remember": "Ich hole Hilfe, wenn mir etwas Angst macht.",
        "module": "Modul 3: Snaps, Fotos und Standort"
      },
      {
        "title": "Übung: Inhalt prüfen",
        "icon": "exercise",
        "module": "Modul 3: Snaps, Fotos und Standort",
        "practiceQuestion": {
          "question": "Jemand möchte ein peinliches Bild von dir. Was machst du?",
          "answers": [
            "Ich sende es nicht.",
            "Ich sende es, weil es verschwindet.",
            "Ich sende noch mehr Bilder."
          ],
          "correct": 0,
          "explanation": "Ich entscheide über meine Bilder. Ich darf Nein sagen."
        }
      },
      {
        "title": "Merksatz: Ich entscheide",
        "icon": "check",
        "text": [
          "Ich muss nichts posten.",
          "Ich muss nichts verschicken.",
          "Ich darf Nein sagen."
        ],
        "remember": "Ich denke daran: Snaps können gespeichert werden.",
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
        "remember": "Ich sende keine Bilder, die mir unangenehm sind.",
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
        "remember": "Ich teile meinen Standort nicht automatisch.",
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
        "remember": "Ich reagiere nicht auf Druck.",
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
        "remember": "Ich hole Hilfe, wenn mir etwas Angst macht.",
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
        "remember": "Ich denke daran: Snaps können gespeichert werden.",
        "module": "Modul 4: Screenshots, Druck und Betrug"
      },
      {
        "title": "Übung: Risiko prüfen",
        "icon": "exercise",
        "module": "Modul 4: Screenshots, Druck und Betrug",
        "practiceQuestion": {
          "question": "Snapchat möchte deinen Standort zeigen. Was machst du?",
          "answers": [
            "Ich prüfe die Standort-Einstellung.",
            "Ich zeige meinen Standort immer.",
            "Ich zeige ihn Fremden."
          ],
          "correct": 0,
          "explanation": "Mein Standort ist privat. Ich muss ihn nicht zeigen."
        }
      },
      {
        "title": "Merksatz: Erst prüfen",
        "icon": "check",
        "text": [
          "Ich reagiere nicht sofort.",
          "Ich prüfe die Nachricht.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Ich sende keine Bilder, die mir unangenehm sind.",
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
        "remember": "Ich teile meinen Standort nicht automatisch.",
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
        "remember": "Ich reagiere nicht auf Druck.",
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
        "remember": "Ich hole Hilfe, wenn mir etwas Angst macht.",
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
        "remember": "Ich denke daran: Snaps können gespeichert werden.",
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
        "remember": "Ich sende keine Bilder, die mir unangenehm sind.",
        "module": "Modul 5: Kontakte und Storys"
      },
      {
        "title": "Übung: Gute Nachricht erkennen",
        "icon": "exercise",
        "module": "Modul 5: Kontakte und Storys",
        "practiceQuestion": {
          "question": "Ein Kontakt macht Druck. Was kannst du tun?",
          "answers": [
            "Stoppen, blockieren oder Hilfe holen.",
            "Nachgeben.",
            "Private Daten senden."
          ],
          "correct": 0,
          "explanation": "Druck ist ein Warnzeichen. Ich darf Unterstützung holen."
        }
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
        "remember": "Ich teile meinen Standort nicht automatisch.",
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
        "remember": "Ich reagiere nicht auf Druck.",
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
        "remember": "Ich hole Hilfe, wenn mir etwas Angst macht.",
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
        "remember": "Ich denke daran: Snaps können gespeichert werden.",
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
        "remember": "Ich sende keine Bilder, die mir unangenehm sind.",
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
        "remember": "Ich teile meinen Standort nicht automatisch.",
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
        "remember": "Ich reagiere nicht auf Druck.",
        "module": "Modul 6: Schutz und Hilfe",
        "practiceQuestion": {
          "question": "Du bekommst eine Nachricht von einer fremden Person. Was machst du?",
          "answers": [
            "Ich prüfe und antworte nicht sofort.",
            "Ich sende Bilder.",
            "Ich sage meine Adresse."
          ],
          "correct": 0,
          "explanation": "Bei fremden Personen bin ich vorsichtig."
        }
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
        "remember": "Ich hole Hilfe, wenn mir etwas Angst macht.",
        "quiz": true,
        "module": "Modul 6: Schutz und Hilfe",
        "practiceQuestion": {
          "question": "Du bereust einen Snap. Was machst du?",
          "answers": [
            "Ich spreche mit einer vertrauten Person.",
            "Ich schäme mich allein.",
            "Ich sende noch mehr."
          ],
          "correct": 0,
          "explanation": "Ich muss schwierige Situationen nicht allein klären."
        }
      }
    ],
    "illustration": "assets/illustrations/snapchat.svg",
    "quizQuestions": [
      {
        "question": "Jemand sagt: „Der Snap verschwindet ja wieder.“ Was ist richtig?",
        "answers": [
          "Er kann trotzdem gespeichert werden.",
          "Er ist immer sicher weg.",
          "Niemand kann ihn sehen."
        ],
        "correct": 0
      },
      {
        "question": "Jemand möchte ein peinliches Bild von dir. Was machst du?",
        "answers": [
          "Ich sende es, weil es verschwindet.",
          "Ich sende es nicht.",
          "Ich sende nur ein kleines Bild."
        ],
        "correct": 1
      },
      {
        "question": "Snapchat möchte deinen Standort zeigen. Was machst du?",
        "answers": [
          "Ich zeige ihn Fremden.",
          "Ich prüfe die Standort-Einstellung.",
          "Ich zeige meinen Standort immer."
        ],
        "correct": 1
      },
      {
        "question": "Ein Kontakt macht Druck. Was kannst du tun?",
        "answers": [
          "Stoppen, blockieren oder Hilfe holen.",
          "Private Daten senden.",
          "Nachgeben."
        ],
        "correct": 0
      },
      {
        "question": "Du bekommst eine Nachricht von einer fremden Person. Was machst du?",
        "answers": [
          "Ich sende Bilder.",
          "Ich sage meine Adresse.",
          "Ich prüfe und antworte nicht sofort."
        ],
        "correct": 2
      },
      {
        "question": "Du bereust einen Snap. Was machst du?",
        "answers": [
          "Ich sende noch mehr.",
          "Ich schäme mich allein.",
          "Ich spreche mit einer vertrauten Person."
        ],
        "correct": 2
      },
      {
        "question": "Jemand macht einen Screenshot von deinem Snap. Was merkst du?",
        "answers": [
          "Alles ist egal.",
          "Der Snap war nicht sicher weg.",
          "Niemand kann speichern."
        ],
        "correct": 1
      },
      {
        "question": "Du willst deinen Standort teilen. Was machst du?",
        "answers": [
          "Ich teile ihn mit Fremden.",
          "Ich prüfe, ob ich das möchte.",
          "Ich teile ihn immer."
        ],
        "correct": 1
      },
      {
        "question": "Ein Snap ist dir unangenehm. Was machst du?",
        "answers": [
          "Ich spreche mit einer vertrauten Person.",
          "Ich ignoriere mein Gefühl.",
          "Ich sende mehr."
        ],
        "correct": 0
      },
      {
        "question": "Was ist bei Bildern wichtig?",
        "answers": [
          "Andere entscheiden für mich.",
          "Ich muss alles senden.",
          "Ich entscheide selbst, was ich sende."
        ],
        "correct": 2
      }
    ],
    "certificateGoals": [
      "Snaps bewusst senden",
      "Standort schützen",
      "bei Druck Nein sagen"
    ],
    "helpQuestions": [
      "Kann dieser Snap gespeichert werden?",
      "Soll ich meinen Standort teilen?",
      "Was mache ich bei Druck zu privaten Bildern?"
    ],
    "memoryRules": [
      "Ich denke daran: Snaps können gespeichert werden.",
      "Ich sende keine Bilder, die mir unangenehm sind.",
      "Ich teile meinen Standort nicht automatisch.",
      "Ich reagiere nicht auf Druck.",
      "Ich hole Hilfe, wenn mir etwas Angst macht."
    ],
    "shortLessonIndexes": [
      0,
      1,
      2,
      5,
      11,
      14,
      18,
      25,
      33,
      35,
      37,
      38
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
        "remember": "Ich mache keine gefährlichen Trends mit.",
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
        "remember": "Ich prüfe, ob ein Tipp wirklich sicher ist.",
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
        "remember": "Ich teile keine privaten Daten in Kommentaren.",
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
        "remember": "Ich mache Pause, wenn TikTok zu viel wird.",
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
        "remember": "Ich hole Hilfe, wenn mich etwas belastet.",
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
        "remember": "Ich mache keine gefährlichen Trends mit.",
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
        "remember": "Ich prüfe, ob ein Tipp wirklich sicher ist.",
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
        "remember": "Ich teile keine privaten Daten in Kommentaren.",
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
        "remember": "Ich mache Pause, wenn TikTok zu viel wird.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Übung: Private Daten erkennen",
        "icon": "exercise",
        "module": "Modul 2: Private Daten",
        "practiceQuestion": {
          "question": "Ein Trend sieht gefährlich aus. Was machst du?",
          "answers": [
            "Ich mache nicht mit.",
            "Ich mache sofort mit.",
            "Ich fordere andere dazu auf."
          ],
          "correct": 0,
          "explanation": "Gefährliche Trends können verletzen. Ich darf Nein sagen."
        }
      },
      {
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "check",
        "text": [
          "Du darfst Nein sagen.",
          "Du musst keine privaten Daten schicken.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Ich hole Hilfe, wenn mich etwas belastet.",
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
        "remember": "Ich mache keine gefährlichen Trends mit.",
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
        "remember": "Ich prüfe, ob ein Tipp wirklich sicher ist.",
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
        "remember": "Ich teile keine privaten Daten in Kommentaren.",
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
        "remember": "Ich mache Pause, wenn TikTok zu viel wird.",
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
        "remember": "Ich hole Hilfe, wenn mich etwas belastet.",
        "module": "Modul 3: Videos, Trends und Kommentare"
      },
      {
        "title": "Übung: Inhalt prüfen",
        "icon": "exercise",
        "module": "Modul 3: Videos, Trends und Kommentare",
        "practiceQuestion": {
          "question": "Ein Video verspricht schnelles Geld. Was machst du?",
          "answers": [
            "Ich prüfe und gebe keine Daten ein.",
            "Ich gebe sofort Bankdaten ein.",
            "Ich klicke alles an."
          ],
          "correct": 0,
          "explanation": "Versprechen von schnellem Geld können Betrug sein."
        }
      },
      {
        "title": "Merksatz: Ich entscheide",
        "icon": "check",
        "text": [
          "Ich muss nichts posten.",
          "Ich muss nichts verschicken.",
          "Ich darf Nein sagen."
        ],
        "remember": "Ich mache keine gefährlichen Trends mit.",
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
        "remember": "Ich prüfe, ob ein Tipp wirklich sicher ist.",
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
        "remember": "Ich teile keine privaten Daten in Kommentaren.",
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
        "remember": "Ich mache Pause, wenn TikTok zu viel wird.",
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
        "remember": "Ich hole Hilfe, wenn mich etwas belastet.",
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
        "remember": "Ich mache keine gefährlichen Trends mit.",
        "module": "Modul 4: Trends, Werbung und Betrug"
      },
      {
        "title": "Übung: Risiko prüfen",
        "icon": "exercise",
        "module": "Modul 4: Trends, Werbung und Betrug",
        "practiceQuestion": {
          "question": "In Kommentaren fragt jemand nach privaten Daten. Was machst du?",
          "answers": [
            "Ich schreibe keine privaten Daten.",
            "Ich schreibe Adresse und Telefonnummer.",
            "Ich sende mein Passwort."
          ],
          "correct": 0,
          "explanation": "Kommentare sind oft öffentlich. Private Daten gehören dort nicht hin."
        }
      },
      {
        "title": "Merksatz: Erst prüfen",
        "icon": "check",
        "text": [
          "Ich reagiere nicht sofort.",
          "Ich prüfe die Nachricht.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Ich prüfe, ob ein Tipp wirklich sicher ist.",
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
        "remember": "Ich teile keine privaten Daten in Kommentaren.",
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
        "remember": "Ich mache Pause, wenn TikTok zu viel wird.",
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
        "remember": "Ich hole Hilfe, wenn mich etwas belastet.",
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
        "remember": "Ich mache keine gefährlichen Trends mit.",
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
        "remember": "Ich prüfe, ob ein Tipp wirklich sicher ist.",
        "module": "Modul 5: Kommentare und Trends"
      },
      {
        "title": "Übung: Gute Nachricht erkennen",
        "icon": "exercise",
        "module": "Modul 5: Kommentare und Trends",
        "practiceQuestion": {
          "question": "Du merkst: TikTok tut dir gerade nicht gut. Was machst du?",
          "answers": [
            "Ich mache Pause.",
            "Ich schaue immer weiter.",
            "Ich schlafe nicht."
          ],
          "correct": 0,
          "explanation": "Ich darf Pausen machen und die App schließen."
        }
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
        "remember": "Ich teile keine privaten Daten in Kommentaren.",
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
        "remember": "Ich mache Pause, wenn TikTok zu viel wird.",
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
        "remember": "Ich hole Hilfe, wenn mich etwas belastet.",
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
        "remember": "Ich mache keine gefährlichen Trends mit.",
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
        "remember": "Ich prüfe, ob ein Tipp wirklich sicher ist.",
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
        "remember": "Ich teile keine privaten Daten in Kommentaren.",
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
        "remember": "Ich mache Pause, wenn TikTok zu viel wird.",
        "module": "Modul 6: Schutz und Hilfe",
        "practiceQuestion": {
          "question": "Ein Video macht dir Angst. Was machst du?",
          "answers": [
            "Ich stoppe und frage Unterstützung.",
            "Ich schaue weiter.",
            "Ich teile es an alle."
          ],
          "correct": 0,
          "explanation": "Ich darf stoppen. Ich darf Hilfe holen."
        }
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
        "remember": "Ich hole Hilfe, wenn mich etwas belastet.",
        "quiz": true,
        "module": "Modul 6: Schutz und Hilfe",
        "practiceQuestion": {
          "question": "Ein Profil möchte private Bilder. Was machst du?",
          "answers": [
            "Ich sende keine privaten Bilder.",
            "Ich sende sofort Bilder.",
            "Ich gebe meine Adresse."
          ],
          "correct": 0,
          "explanation": "Private Bilder bleiben privat. Bei Druck hole ich Hilfe."
        }
      }
    ],
    "illustration": "assets/illustrations/tiktok.svg",
    "quizQuestions": [
      {
        "question": "Ein Trend sieht gefährlich aus. Was machst du?",
        "answers": [
          "Ich mache nicht mit.",
          "Ich mache sofort mit.",
          "Ich probiere es erst einmal kurz aus."
        ],
        "correct": 0
      },
      {
        "question": "Ein Video verspricht schnelles Geld. Was machst du?",
        "answers": [
          "Ich gebe sofort Bankdaten ein.",
          "Ich prüfe und gebe keine Daten ein.",
          "Ich klicke erst einmal und schaue, was passiert."
        ],
        "correct": 1
      },
      {
        "question": "In Kommentaren fragt jemand nach privaten Daten. Was machst du?",
        "answers": [
          "Ich sende mein Passwort.",
          "Ich schreibe keine privaten Daten.",
          "Ich schreibe nur meine Telefonnummer."
        ],
        "correct": 1
      },
      {
        "question": "Du merkst: TikTok tut dir gerade nicht gut. Was machst du?",
        "answers": [
          "Ich mache Pause.",
          "Ich schlafe nicht.",
          "Ich schaue immer weiter."
        ],
        "correct": 0
      },
      {
        "question": "Ein Video macht dir Angst. Was machst du?",
        "answers": [
          "Ich schaue weiter.",
          "Ich teile es an alle.",
          "Ich stoppe und frage Unterstützung."
        ],
        "correct": 2
      },
      {
        "question": "Ein Profil möchte private Bilder. Was machst du?",
        "answers": [
          "Ich gebe meine Adresse.",
          "Ich sende sofort Bilder.",
          "Ich sende keine privaten Bilder."
        ],
        "correct": 2
      },
      {
        "question": "Ein Kommentar fragt nach deiner Telefonnummer. Was machst du?",
        "answers": [
          "Ich schreibe sie öffentlich.",
          "Ich schreibe sie nicht.",
          "Ich gebe auch meine Adresse."
        ],
        "correct": 1
      },
      {
        "question": "Ein Trend setzt dich unter Druck. Was machst du?",
        "answers": [
          "Ich muss andere filmen.",
          "Ich darf Nein sagen.",
          "Ich muss mitmachen."
        ],
        "correct": 1
      },
      {
        "question": "Ein Video gibt einen Gesundheitstipp. Was machst du?",
        "answers": [
          "Ich prüfe den Tipp und frage bei Unsicherheit.",
          "Ich probiere den Tipp erst einmal aus.",
          "Ich mache alles sofort."
        ],
        "correct": 0
      },
      {
        "question": "TikTok zeigt immer neue Videos. Was darfst du tun?",
        "answers": [
          "Immer weiter schauen.",
          "Ich schaue weiter, obwohl ich müde bin.",
          "Die App schließen und Pause machen."
        ],
        "correct": 2
      }
    ],
    "certificateGoals": [
      "Trends kritisch prüfen",
      "Pausen machen",
      "Kommentare und Werbung einschätzen"
    ],
    "helpQuestions": [
      "Ist dieser Trend sicher?",
      "Ist das Werbung oder echt?",
      "Soll ich eine Pause machen?"
    ],
    "memoryRules": [
      "Ich mache keine gefährlichen Trends mit.",
      "Ich prüfe, ob ein Tipp wirklich sicher ist.",
      "Ich teile keine privaten Daten in Kommentaren.",
      "Ich mache Pause, wenn TikTok zu viel wird.",
      "Ich hole Hilfe, wenn mich etwas belastet."
    ],
    "shortLessonIndexes": [
      0,
      1,
      2,
      5,
      11,
      12,
      15,
      18,
      19,
      35,
      37,
      38
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
    "quiz": "https://kahoot.com",
    "lessons": [
      {
        "title": "Start: Hilfe bei Problemen im Internet",
        "icon": "start",
        "text": [
          "Manchmal passiert im Internet etwas Komisches.",
          "Eine Nachricht macht Druck.",
          "Ein Link wirkt unsicher.",
          "Eine Person fragt nach Daten.",
          "Dann musst du nicht allein bleiben."
        ],
        "remember": "Ich darf Unterstützung holen.",
        "module": "Modul 1: Probleme erkennen"
      },
      {
        "title": "Was ist ein Problem im Internet?",
        "icon": "warning",
        "text": [
          "Ein Problem im Internet kann verschieden aussehen.",
          "Zum Beispiel: eine komische Nachricht.",
          "Oder: ein Link, dem du nicht traust.",
          "Oder: eine Person macht Druck.",
          "Oder: jemand beleidigt dich."
        ],
        "remember": "Ich stoppe, wenn mir etwas komisch vorkommt.",
        "module": "Modul 1: Probleme erkennen",
        "bullets": [
          "Beleidigung",
          "Drohung",
          "Betrug"
        ]
      },
      {
        "title": "Erster Schritt: Stopp",
        "icon": "help",
        "text": [
          "Wenn etwas komisch ist, mache zuerst Stopp.",
          "Klicke nicht weiter.",
          "Gib keine Daten ein.",
          "Sende kein Geld.",
          "Sende keine privaten Bilder."
        ],
        "bullets": [
          "Person, der du vertraust",
          "vertraute Person",
          "bei Gefahr: Polizei 110"
        ],
        "remember": "Ich klicke nicht weiter, wenn ich unsicher bin.",
        "module": "Modul 1: Probleme erkennen"
      },
      {
        "title": "Zweiter Schritt: Unterstützung holen",
        "icon": "home",
        "text": [
          "Du kannst eine Person fragen.",
          "Frage eine Person, die dich unterstützt.",
          "Zum Beispiel im Wohnbereich.",
          "Oder im Dienst.",
          "Oder eine Digital-Begleiterin oder einen Digital-Begleiter."
        ],
        "bullets": [
          "nicht allein bleiben",
          "nicht sofort antworten",
          "gemeinsam prüfen"
        ],
        "remember": "Ich frage eine Person, die mich unterstützt.",
        "module": "Modul 1: Probleme erkennen"
      },
      {
        "title": "Dritter Schritt: Zeigen, was passiert ist",
        "icon": "check",
        "text": [
          "Zeige die Nachricht oder die Seite.",
          "Erkläre, was du angeklickt hast.",
          "Erzähle, was dir Sorgen macht.",
          "So kann die andere Person besser helfen."
        ],
        "quote": "Ich antworte nicht allein. Ich zeige die Nachricht einer Person, der du vertraust.",
        "success": "Das ist gut. Du holst dir Unterstützung.",
        "remember": "Ich erkläre, was passiert ist.",
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
        "remember": "Ich muss Probleme im Internet nicht allein lösen.",
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
        "remember": "Ich stoppe, wenn mir etwas komisch vorkommt.",
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
        "remember": "Ich gebe keine Daten ein, wenn ich unsicher bin.",
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
        "remember": "Ich spreche mit einer Person, die mich unterstützt.",
        "module": "Modul 2: Private Daten"
      },
      {
        "title": "Übung: Private Daten erkennen",
        "icon": "exercise",
        "module": "Modul 2: Private Daten",
        "practiceQuestion": {
          "question": "Du bekommst eine Nachricht: „Du musst sofort Geld senden.“ Was machst du?",
          "answers": [
            "Ich stoppe und spreche mit einer unterstützenden Person.",
            "Ich sende erst einmal einen kleinen Betrag.",
            "Ich klicke weiter, damit es schneller geht."
          ],
          "correct": 0,
          "explanation": "Geld-Druck ist ein Warnzeichen. Ich stoppe und hole Unterstützung."
        }
      },
      {
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "check",
        "text": [
          "Du darfst Nein sagen.",
          "Du musst keine privaten Daten schicken.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Ich muss Probleme im Internet nicht allein lösen.",
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
        "remember": "Ich stoppe, wenn mir etwas komisch vorkommt.",
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
        "remember": "Ich gebe keine Daten ein, wenn ich unsicher bin.",
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
        "remember": "Ich spreche mit einer Person, die mich unterstützt.",
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
        "remember": "Ich nutze Hilfe im Wohnbereich, im Dienst oder bei einer Digital-Begleitung.",
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
        "remember": "Ich muss Probleme im Internet nicht allein lösen.",
        "module": "Modul 3: Nachrichten, Fotos und Beweise"
      },
      {
        "title": "Übung: Inhalt prüfen",
        "icon": "exercise",
        "module": "Modul 3: Nachrichten, Fotos und Beweise",
        "practiceQuestion": {
          "question": "Jemand schreibt: „Schick mir ein privates Bild.“ Du fühlst dich unwohl. Was machst du?",
          "answers": [
            "Ich sende kein Bild und frage Unterstützung.",
            "Ich sende ein Bild, damit Ruhe ist.",
            "Ich entschuldige mich und mache trotzdem mit."
          ],
          "correct": 0,
          "explanation": "Ich muss keine privaten Bilder senden. Wenn ich mich unwohl fühle, hole ich Hilfe."
        }
      },
      {
        "title": "Merksatz: Ich entscheide",
        "icon": "check",
        "text": [
          "Ich muss nichts posten.",
          "Ich muss nichts verschicken.",
          "Ich darf Nein sagen."
        ],
        "remember": "Ich gebe keine Daten ein, wenn ich unsicher bin.",
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
        "remember": "Ich spreche mit einer Person, die mich unterstützt.",
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
        "remember": "Ich nutze Hilfe im Wohnbereich, im Dienst oder bei einer Digital-Begleitung.",
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
        "remember": "Ich muss Probleme im Internet nicht allein lösen.",
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
        "remember": "Ich stoppe, wenn mir etwas komisch vorkommt.",
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
        "remember": "Ich gebe keine Daten ein, wenn ich unsicher bin.",
        "module": "Modul 4: Druck, Drohung und Betrug"
      },
      {
        "title": "Übung: Risiko prüfen",
        "icon": "exercise",
        "module": "Modul 4: Druck, Drohung und Betrug",
        "practiceQuestion": {
          "question": "Jemand beleidigt dich in einer App. Was kannst du tun?",
          "answers": [
            "Ich blockiere, melde oder spreche mit Unterstützung.",
            "Ich beleidige zurück.",
            "Ich lösche alles und sage niemandem etwas."
          ],
          "correct": 0,
          "explanation": "Beleidigungen muss ich nicht allein aushalten. Blockieren, Melden und Unterstützung holen sind gute Schritte."
        }
      },
      {
        "title": "Merksatz: Erst prüfen",
        "icon": "check",
        "text": [
          "Ich reagiere nicht sofort.",
          "Ich prüfe die Nachricht.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Ich nutze Hilfe im Wohnbereich, im Dienst oder bei einer Digital-Begleitung.",
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
        "remember": "Ich muss Probleme im Internet nicht allein lösen.",
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
        "remember": "Ich stoppe, wenn mir etwas komisch vorkommt.",
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
        "remember": "Ich gebe keine Daten ein, wenn ich unsicher bin.",
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
        "remember": "Ich spreche mit einer Person, die mich unterstützt.",
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
        "remember": "Ich nutze Hilfe im Wohnbereich, im Dienst oder bei einer Digital-Begleitung.",
        "module": "Modul 5: Probleme und Hilfewege"
      },
      {
        "title": "Übung: Gute Hilfe-Entscheidung",
        "icon": "exercise",
        "module": "Modul 5: Probleme und Hilfewege",
        "practiceQuestion": {
          "question": "Du hast aus Versehen auf einen komischen Link geklickt. Was ist sinnvoll?",
          "answers": [
            "Ich sage es einer Person, die mich unterstützt.",
            "Ich klicke weitere Links an, um es zu testen.",
            "Ich gebe danach meine Daten ein."
          ],
          "correct": 0,
          "explanation": "Fehler können passieren. Wichtig ist: nicht weitermachen und Unterstützung holen."
        }
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
        "remember": "Ich stoppe, wenn mir etwas komisch vorkommt.",
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
        "remember": "Ich gebe keine Daten ein, wenn ich unsicher bin.",
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
        "remember": "Ich spreche mit einer Person, die mich unterstützt.",
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
        "remember": "Ich nutze Hilfe im Wohnbereich, im Dienst oder bei einer Digital-Begleitung.",
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
        "remember": "Ich muss Probleme im Internet nicht allein lösen.",
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
        "remember": "Ich stoppe, wenn mir etwas komisch vorkommt.",
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
        "remember": "Ich gebe keine Daten ein, wenn ich unsicher bin.",
        "module": "Modul 6: Schutz und Hilfe",
        "practiceQuestion": {
          "question": "Ein fremdes Profil fragt nach deiner Adresse. Was machst du?",
          "answers": [
            "Ich gebe meine Adresse nicht weiter.",
            "Ich schreibe nur Straße und Hausnummer.",
            "Ich frage die fremde Person nach ihrer Meinung."
          ],
          "correct": 0,
          "explanation": "Meine Adresse ist privat. Ich gebe sie nicht an fremde Personen weiter."
        }
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
        "remember": "Ich spreche mit einer Person, die mich unterstützt.",
        "quiz": true,
        "module": "Modul 6: Schutz und Hilfe",
        "practiceQuestion": {
          "question": "Du weißt nicht, ob eine Nachricht echt ist. Was machst du?",
          "answers": [
            "Ich prüfe nicht allein und frage Unterstützung.",
            "Ich vertraue der Nachricht, weil sie dringend klingt.",
            "Ich gebe vorsichtshalber meine Daten ein."
          ],
          "correct": 0,
          "explanation": "Dringende Nachrichten können Betrug sein. Ich darf stoppen und nachfragen."
        }
      }
    ],
    "illustration": "assets/illustrations/hilfe.svg",
    "quizQuestions": [
      {
        "question": "Eine Nachricht sagt: „Sende sofort Geld, sonst passiert etwas.“ Was machst du?",
        "answers": [
          "Ich stoppe und hole Unterstützung.",
          "Ich sende erst einmal Geld und frage später.",
          "Ich klicke auf alle Links in der Nachricht."
        ],
        "correct": 0
      },
      {
        "question": "Ein fremdes Profil fragt nach deiner Adresse. Was machst du?",
        "answers": [
          "Ich schreibe nur meine Straße.",
          "Ich gebe meine Adresse nicht weiter.",
          "Ich sende zusätzlich meine Telefonnummer."
        ],
        "correct": 1
      },
      {
        "question": "Du hast auf einen komischen Link geklickt. Was ist der nächste gute Schritt?",
        "answers": [
          "Ich teste noch mehr Links.",
          "Ich mache nicht weiter und frage Unterstützung.",
          "Ich gebe schnell mein Passwort ein."
        ],
        "correct": 1
      },
      {
        "question": "Jemand beleidigt dich online. Was ist möglich?",
        "answers": [
          "Blockieren, melden oder Unterstützung holen.",
          "Alles allein aushalten.",
          "Zurück beleidigen."
        ],
        "correct": 0
      },
      {
        "question": "Jemand fragt nach einem privaten Bild. Du möchtest das nicht. Was ist richtig?",
        "answers": [
          "Ich muss es senden, wenn jemand fragt.",
          "Ich sende es, damit die Person zufrieden ist.",
          "Ich darf Nein sagen."
        ],
        "correct": 2
      },
      {
        "question": "Eine Nachricht wirkt dringend und macht Druck. Was ist ein Warnzeichen?",
        "answers": [
          "Die Nachricht hat ein Emoji.",
          "Die Nachricht ist kurz.",
          "Die Nachricht will, dass ich sofort reagiere."
        ],
        "correct": 2
      },
      {
        "question": "Du brauchst Hilfe bei einem Problem im Internet. Wen kannst du fragen?",
        "answers": [
          "Nur fremde Personen im Chat.",
          "Eine Person, die mich unterstützt.",
          "Niemanden, ich muss alles allein lösen."
        ],
        "correct": 1
      },
      {
        "question": "Was solltest du bei Unsicherheit nicht tun?",
        "answers": [
          "Unterstützung fragen.",
          "Private Daten eingeben.",
          "Eine Pause machen."
        ],
        "correct": 1
      },
      {
        "question": "Was kann helfen, wenn du Unterstützung brauchst?",
        "answers": [
          "Die Nachricht zeigen und erklären, was passiert ist.",
          "Weitere Daten senden.",
          "Alles löschen und nichts sagen."
        ],
        "correct": 0
      },
      {
        "question": "Was bedeutet: Ich muss das nicht allein klären?",
        "answers": [
          "Ich darf nie nachfragen.",
          "Ich muss schneller klicken.",
          "Ich darf Unterstützung holen."
        ],
        "correct": 2
      }
    ],
    "certificateGoals": [
      "Stopp-Regel anwenden",
      "Beweise mit Hilfe sichern",
      "Unterstützung holen"
    ],
    "helpQuestions": [
      "Was ist passiert?",
      "Welche Nachricht oder Seite ist gemeint?",
      "Hast du schon etwas angeklickt?",
      "Welche Person kann dich jetzt unterstützen?"
    ],
    "memoryRules": [
      "Ich muss Probleme im Internet nicht allein lösen.",
      "Ich stoppe, wenn mir etwas komisch vorkommt.",
      "Ich gebe keine Daten ein, wenn ich unsicher bin.",
      "Ich spreche mit einer Person, die mich unterstützt.",
      "Ich nutze Hilfe im Wohnbereich, im Dienst oder bei einer Digital-Begleitung."
    ],
    "shortLessonIndexes": [
      0,
      1,
      5,
      11,
      14,
      18,
      25,
      31,
      33,
      37,
      38
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
