const topics = [
  {
    "id": "datenschutz",
    "title": "Datenschutz",
    "icon": "🔒",
    "desc": "Private Daten verstehen und schützen",
    "quiz": "https://kahoot.com",
    "lessons": [
      {
        "module": "Modul 1: Datenschutz verstehen",
        "title": "Start",
        "icon": "👋",
        "text": [
          "Hier lernst du Datenschutz.",
          "Datenschutz hilft dir, deine Informationen zu schützen.",
          "Du lernst mit einfachen Beispielen."
        ],
        "remember": "Meine Daten gehören mir."
      },
      {
        "module": "Modul 1: Datenschutz verstehen",
        "title": "Was bedeutet Datenschutz?",
        "icon": "🛡️",
        "text": [
          "Datenschutz bedeutet: Informationen über dich werden geschützt.",
          "Nicht jede Person darf alles über dich wissen.",
          "Du darfst mitentscheiden."
        ],
        "remember": "Datenschutz schützt mich."
      },
      {
        "module": "Modul 1: Datenschutz verstehen",
        "title": "Warum sind Daten wichtig?",
        "icon": "🔎",
        "text": [
          "Daten erzählen etwas über dich.",
          "Andere können Daten benutzen.",
          "Darum müssen Daten geschützt werden."
        ],
        "bullets": [
          "wo du wohnst",
          "was du magst",
          "welche Hilfe du brauchst"
        ],
        "remember": "Daten können viel über mich zeigen."
      },
      {
        "module": "Modul 1: Datenschutz verstehen",
        "title": "Datenschutz im Alltag",
        "icon": "📱",
        "text": [
          "Datenschutz gibt es jeden Tag."
        ],
        "bullets": [
          "beim Handy",
          "bei Formularen",
          "bei Fotos und Apps"
        ],
        "remember": "Ich achte auf meine Daten."
      },
      {
        "module": "Modul 1: Datenschutz verstehen",
        "title": "Gute Entscheidung erkennen",
        "icon": "✅",
        "text": [
          "Eine gute Entscheidung schützt deine Daten."
        ],
        "quote": "Ich gebe nur an, was wirklich nötig ist.",
        "success": "Das ist gut. Du gibst nicht zu viele Daten weiter.",
        "remember": "So wenig Daten wie möglich."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Modulstart: Private Daten schützen",
        "icon": "🔒",
        "text": [
          "Jetzt lernst du private Daten kennen.",
          "Du lernst, was du nicht einfach teilen sollst.",
          "Du lernst, wann du Hilfe holen sollst."
        ],
        "remember": "Private Daten bleiben privat."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Was sind private Daten?",
        "icon": "🔐",
        "text": [
          "Private Daten sind Informationen über dich.",
          "Manche Daten sind besonders geschützt."
        ],
        "bullets": [
          "Adresse",
          "Telefonnummer",
          "Geburtsdatum"
        ],
        "remember": "Private Daten gehören mir."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Beispiel: Adresse",
        "icon": "📍",
        "text": [
          "Eine fremde Person fragt dich:"
        ],
        "quote": "Wo wohnst du? Schick mir deine Adresse.",
        "warning": "Das ist nicht sicher. Deine Adresse ist privat.",
        "remember": "Meine Adresse bleibt privat."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Beispiel: Passwort",
        "icon": "🔑",
        "text": [
          "Eine Nachricht macht Druck:"
        ],
        "quote": "Gib mir dein Passwort. Sonst passiert etwas.",
        "warning": "Das ist nicht sicher. Ein Passwort bleibt geheim.",
        "remember": "Mein Passwort bleibt geheim."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Übung: Private Daten erkennen",
        "icon": "❓",
        "exercise": {
          "id": "dsPrivat",
          "question": "Nachricht: „Schick mir deine Krankenversicherungs-Nummer.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
              "text": "Das ist eine private Information. Gib sie nicht einfach weiter."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das ist eine private Information. Gib sie nicht einfach weiter."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "✅",
        "text": [
          "Du darfst Nein sagen.",
          "Du darfst nachfragen.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Meine Daten gehören mir."
      },
      {
        "module": "Modul 3: Fotos, Standort und Formulare",
        "title": "Modulstart: Fotos, Standort und Formulare",
        "icon": "🖼️",
        "text": [
          "Jetzt geht es um Daten im Alltag.",
          "Fotos, Standort und Formulare können privat sein.",
          "Du lernst, worauf du achten musst."
        ],
        "remember": "Auch Bilder und Orte sind Daten."
      },
      {
        "module": "Modul 3: Fotos, Standort und Formulare",
        "title": "Fotos als Daten",
        "icon": "🖼️",
        "text": [
          "Ein Foto kann viel zeigen.",
          "Andere Menschen können dich erkennen.",
          "Manchmal sieht man auch den Ort."
        ],
        "remember": "Ich prüfe Fotos vor dem Teilen."
      },
      {
        "module": "Modul 3: Fotos, Standort und Formulare",
        "title": "Standort schützen",
        "icon": "📍",
        "text": [
          "Der Standort zeigt, wo du bist.",
          "Das ist oft privat."
        ],
        "bullets": [
          "Wohnort",
          "Arbeitsort",
          "aktueller Aufenthaltsort"
        ],
        "remember": "Mein Standort gehört mir."
      },
      {
        "module": "Modul 3: Fotos, Standort und Formulare",
        "title": "Formulare prüfen",
        "icon": "📝",
        "text": [
          "Formulare fragen manchmal viele Daten ab.",
          "Nicht jede Frage ist nötig."
        ],
        "quote": "Trage hier Adresse, Telefon, Geburtsdatum und Konto ein.",
        "warning": "Das ist sehr viel. Frag nach, ob das nötig ist.",
        "remember": "Ich gebe nicht alles sofort ein."
      },
      {
        "module": "Modul 3: Fotos, Standort und Formulare",
        "title": "Einwilligung",
        "icon": "✋",
        "text": [
          "Einwilligung bedeutet: Du sagst bewusst Ja.",
          "Du darfst auch Nein sagen.",
          "Du darfst eine Erklärung verlangen."
        ],
        "remember": "Ein Ja muss freiwillig sein."
      },
      {
        "module": "Modul 3: Fotos, Standort und Formulare",
        "title": "Übung: Foto oder Daten",
        "icon": "❓",
        "exercise": {
          "id": "dsFoto",
          "question": "Jemand möchte ein Gruppenfoto posten. Du bist darauf gut erkennbar.",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
              "text": "Vor dem Teilen muss gefragt werden. Du darfst Nein sagen."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Vor dem Teilen muss gefragt werden. Du darfst Nein sagen."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 3: Fotos, Standort und Formulare",
        "title": "Merksatz: Ich entscheide",
        "icon": "✅",
        "text": [
          "Ich frage nach.",
          "Ich sage Nein, wenn ich unsicher bin.",
          "Ich hole Hilfe."
        ],
        "remember": "Ich entscheide mit."
      },
      {
        "module": "Modul 4: Datenmissbrauch und Betrug",
        "title": "Modulstart: Datenmissbrauch und Betrug",
        "icon": "⚠️",
        "text": [
          "Jetzt geht es um Gefahren.",
          "Daten können falsch benutzt werden.",
          "Du lernst Warnzeichen."
        ],
        "remember": "Ich prüfe, bevor ich Daten teile."
      },
      {
        "module": "Modul 4: Datenmissbrauch und Betrug",
        "title": "Was ist Datenmissbrauch?",
        "icon": "⚠️",
        "text": [
          "Datenmissbrauch bedeutet: Jemand benutzt deine Daten falsch."
        ],
        "bullets": [
          "für Betrug",
          "für Druck",
          "für falsche Profile"
        ],
        "remember": "Falsche Nutzung ist nicht okay."
      },
      {
        "module": "Modul 4: Datenmissbrauch und Betrug",
        "title": "Beispiel: Gewinn",
        "icon": "🎁",
        "text": [
          "Du bekommst eine Nachricht:"
        ],
        "quote": "Du hast gewonnen. Trage sofort alle Daten ein.",
        "warning": "Das kann Betrug sein. Nicht sofort ausfüllen.",
        "remember": "Erst prüfen. Dann handeln."
      },
      {
        "module": "Modul 4: Datenmissbrauch und Betrug",
        "title": "Betrug erkennen",
        "icon": "🔎",
        "text": [
          "Vorsicht, wenn jemand:"
        ],
        "bullets": [
          "Druck macht",
          "Geld verlangt",
          "Passwörter will"
        ],
        "remember": "Druck ist ein Warnzeichen."
      },
      {
        "module": "Modul 4: Datenmissbrauch und Betrug",
        "title": "Wenn jemand Druck macht",
        "icon": "🛑",
        "text": [
          "Warnzeichen sind:"
        ],
        "bullets": [
          "Mach sofort.",
          "Sag es niemandem.",
          "Sonst passiert etwas."
        ],
        "remember": "Druck bedeutet: Stopp und Hilfe holen."
      },
      {
        "module": "Modul 4: Datenmissbrauch und Betrug",
        "title": "Übung: Daten prüfen",
        "icon": "❓",
        "exercise": {
          "id": "dsBetrug",
          "question": "Nachricht: „Nur heute: Gib alle Daten ein und gewinne.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
              "text": "Das wirkt unsicher. Gewinn und Zeitdruck sind Warnzeichen."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt unsicher. Gewinn und Zeitdruck sind Warnzeichen."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 4: Datenmissbrauch und Betrug",
        "title": "Merksatz: Erst prüfen",
        "icon": "✅",
        "text": [
          "Ich gebe Daten nicht sofort ein.",
          "Ich prüfe den Absender.",
          "Ich frage nach."
        ],
        "remember": "Erst prüfen. Dann Daten teilen."
      },
      {
        "module": "Modul 5: Rechte und gutes Handeln",
        "title": "Modulstart: Rechte und gutes Handeln",
        "icon": "⚖️",
        "text": [
          "Jetzt geht es um deine Rechte.",
          "Du darfst Fragen stellen.",
          "Du darfst Schutz verlangen."
        ],
        "remember": "Ich habe Rechte."
      },
      {
        "module": "Modul 5: Rechte und gutes Handeln",
        "title": "Ich darf fragen",
        "icon": "❓",
        "text": [
          "Du darfst fragen:"
        ],
        "bullets": [
          "Warum braucht ihr diese Daten?",
          "Wer sieht meine Daten?",
          "Wie lange werden sie gespeichert?"
        ],
        "remember": "Fragen ist richtig."
      },
      {
        "module": "Modul 5: Rechte und gutes Handeln",
        "title": "Gute Daten-Entscheidung",
        "icon": "✅",
        "text": [
          "Eine gute Entscheidung ist ruhig und freiwillig."
        ],
        "bullets": [
          "ich verstehe es",
          "ich willige bewusst ein",
          "ich kann Nein sagen"
        ],
        "remember": "Ich entscheide nicht unter Druck."
      },
      {
        "module": "Modul 5: Rechte und gutes Handeln",
        "title": "Schlechte Daten-Entscheidung",
        "icon": "🚫",
        "text": [
          "Schlecht ist:"
        ],
        "bullets": [
          "unter Druck zustimmen",
          "Passwort teilen",
          "zu viele Daten eintragen"
        ],
        "remember": "Druck ist kein gutes Zeichen."
      },
      {
        "module": "Modul 5: Rechte und gutes Handeln",
        "title": "Streit oder Unsicherheit",
        "icon": "💬",
        "text": [
          "Wenn du unsicher bist, mache Pause."
        ],
        "quote": "Ich verstehe nicht, warum diese Daten gebraucht werden.",
        "success": "Das ist ein guter Satz. Du darfst eine Erklärung verlangen.",
        "remember": "Ich darf langsam entscheiden."
      },
      {
        "module": "Modul 5: Rechte und gutes Handeln",
        "title": "Übung: Gute Entscheidung",
        "icon": "❓",
        "exercise": {
          "id": "dsGut",
          "question": "Satz: „Ich frage erst meine Fachkraft, bevor ich das Formular absende.“",
          "feedback": {
            "safe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt sicher. Du prüfst zuerst und holst Unterstützung."
            },
            "unsafe": {
              "type": "warning",
              "title": "Nicht ganz.",
              "text": "Das wirkt sicher. Du prüfst zuerst und holst Unterstützung."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Stopp-Regel",
        "icon": "🛑",
        "text": [
          "Wenn dir etwas komisch vorkommt:"
        ],
        "bullets": [
          "nicht sofort antworten",
          "nichts Privates schicken",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Ich darf Nein sagen",
        "icon": "✋",
        "text": [
          "Du musst nicht antworten.",
          "Du musst nichts schicken.",
          "Du musst keinen Link anklicken."
        ],
        "remember": "Nein sagen ist erlaubt."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Blockieren",
        "icon": "🚫",
        "text": [
          "Du darfst dich schützen."
        ],
        "bullets": [
          "Profil oder Chat öffnen",
          "Blockieren auswählen",
          "danach Hilfe holen, wenn du unsicher bist"
        ],
        "remember": "Blockieren ist erlaubt."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Melden",
        "icon": "🚩",
        "text": [
          "Du kannst problematische Inhalte melden."
        ],
        "bullets": [
          "Inhalt oder Profil öffnen",
          "Melden auswählen",
          "Fachkraft informieren"
        ],
        "remember": "Melden ist Schutz."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Hilfe holen",
        "icon": "🙋",
        "text": [
          "Du musst Probleme nicht allein lösen.",
          "Hilfe holen ist richtig."
        ],
        "bullets": [
          "Fachkraft fragen",
          "vertraute Person fragen",
          "bei akuter Gefahr: Polizei 110"
        ],
        "remember": "Hilfe holen ist stark."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Datenschutz-Hinweis",
        "icon": "🛡️",
        "text": [
          "Diese Lernseite fragt keine privaten Daten ab.",
          "Du musst keinen Namen eingeben.",
          "Im Quiz nimmst du einen Spitznamen."
        ],
        "remember": "Ich bleibe anonym."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Wiederholung",
        "icon": "🔁",
        "text": [
          "Was mache ich bei einem Problem mit meinen Daten?"
        ],
        "bullets": [
          "nicht sofort reagieren",
          "Beweise nicht vorschnell löschen",
          "Hilfe holen"
        ],
        "remember": "Ich muss das nicht allein klären."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Quiz und Abschluss",
        "icon": "🏁",
        "text": [
          "Gut gemacht.",
          "Du hast wichtige Regeln gelernt.",
          "Jetzt kannst du dein Wissen testen."
        ],
        "bullets": [
          "keinen echten Namen nutzen",
          "Spitznamen nehmen",
          "Quiz zum Üben nutzen"
        ],
        "remember": "Ich hole Hilfe, wenn ich unsicher bin.",
        "quiz": true
      }
    ]
  },
  {
    "id": "whatsapp",
    "title": "WhatsApp",
    "icon": "💬",
    "desc": "Nachrichten, Gruppen, Links und Hilfe",
    "quiz": "https://kahoot.com",
    "lessons": [
      {
        "module": "Modul 1: WhatsApp verstehen",
        "title": "Start",
        "icon": "👋",
        "text": [
          "Diese Lernseite hilft dir, WhatsApp sicherer zu nutzen.",
          "Du lernst in kleinen Schritten.",
          "Am Ende kannst du ein Quiz machen."
        ],
        "remember": "Du bestimmst dein Tempo."
      },
      {
        "module": "Modul 1: WhatsApp verstehen",
        "title": "Was ist WhatsApp?",
        "icon": "💬",
        "text": [
          "WhatsApp ist eine App.",
          "Du kannst mit anderen Menschen Kontakt halten.",
          "Du kannst Nachrichten, Fotos und Sprachnachrichten senden."
        ],
        "remember": "WhatsApp ist ein Werkzeug für Kontakt."
      },
      {
        "module": "Modul 1: WhatsApp verstehen",
        "title": "Was kann ich mit WhatsApp machen?",
        "icon": "📱",
        "text": [
          "Mit WhatsApp kannst du viele Dinge tun."
        ],
        "bullets": [
          "Nachrichten schreiben",
          "Fotos oder Videos schicken",
          "Sprachnachrichten senden"
        ],
        "remember": "Ich entscheide, was ich teile."
      },
      {
        "module": "Modul 1: WhatsApp verstehen",
        "title": "WhatsApp im Alltag",
        "icon": "👍",
        "text": [
          "WhatsApp kann im Alltag helfen."
        ],
        "bullets": [
          "einen Termin absprechen",
          "kurz Bescheid sagen",
          "in einer Gruppe mitlesen"
        ],
        "remember": "WhatsApp kann praktisch sein."
      },
      {
        "module": "Modul 1: WhatsApp verstehen",
        "title": "Gute Nachricht erkennen",
        "icon": "✅",
        "text": [
          "Eine gute Nachricht ist freundlich und klar."
        ],
        "quote": "Hallo. Ich komme heute um 16 Uhr.",
        "success": "Das wirkt sicher. Die Nachricht macht keinen Druck.",
        "remember": "Gute Nachrichten sind klar und respektvoll."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Modulstart: Private Daten schützen",
        "icon": "🔒",
        "text": [
          "Jetzt geht es um private Daten.",
          "Du lernst, welche Daten du schützen sollst.",
          "Du lernst auch, wann du Nein sagen darfst."
        ],
        "remember": "Private Daten gehören mir."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Was sind private Daten?",
        "icon": "🔒",
        "text": [
          "Private Daten gehören dir.",
          "Du sollst sie nicht einfach verschicken."
        ],
        "bullets": [
          "Adresse und Wohnort",
          "Telefonnummer",
          "Passwörter und PIN-Nummern"
        ],
        "remember": "Meine Daten gehören mir."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Beispiel: Adresse",
        "icon": "📍",
        "text": [
          "Du bekommst eine Nachricht von einer unbekannten Person."
        ],
        "quote": "Wo wohnst du? Schick mir deine Adresse.",
        "warning": "Das ist nicht sicher. Deine Adresse ist privat.",
        "remember": "Meine Adresse bleibt privat."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Beispiel: Passwort",
        "icon": "🔑",
        "text": [
          "Eine Person schreibt dir:"
        ],
        "quote": "Gib mir dein Passwort. Sonst wird dein Konto gelöscht.",
        "warning": "Das ist Betrug. Niemand darf dein Passwort verlangen.",
        "remember": "Mein Passwort bleibt geheim."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Übung: Private Daten erkennen",
        "icon": "❓",
        "exercise": {
          "id": "waPrivate",
          "question": "Nachricht: „Schick mir deine PIN. Ich helfe dir.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "✅",
        "text": [
          "Du darfst Nein sagen.",
          "Du musst keine privaten Daten schicken.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Meine Daten gehören mir."
      },
      {
        "module": "Modul 3: Fotos und Stimme",
        "title": "Modulstart: Fotos und Stimme",
        "icon": "🖼️",
        "text": [
          "Jetzt geht es um Fotos und Sprachnachrichten.",
          "Auch Bilder und Stimmen können privat sein.",
          "Du lernst, worauf du achten musst."
        ],
        "remember": "Ich entscheide, was ich sende."
      },
      {
        "module": "Modul 3: Fotos und Stimme",
        "title": "Fotos verschicken",
        "icon": "📷",
        "text": [
          "Fotos können weitergeleitet werden.",
          "Dann sehen vielleicht andere Menschen das Foto.",
          "Darum ist Vorsicht wichtig."
        ],
        "remember": "Ich denke nach, bevor ich ein Foto schicke."
      },
      {
        "module": "Modul 3: Fotos und Stimme",
        "title": "Private Fotos",
        "icon": "🚫",
        "text": [
          "Manche Fotos sind sehr privat."
        ],
        "bullets": [
          "intime oder nackte Fotos",
          "peinliche Fotos",
          "Fotos, die du später bereust"
        ],
        "remember": "Ich entscheide über meine Bilder."
      },
      {
        "module": "Modul 3: Fotos und Stimme",
        "title": "Beispiel: Foto mit Druck",
        "icon": "⚠️",
        "text": [
          "Eine Person schreibt:"
        ],
        "quote": "Schick mir ein Foto von dir. Aber sag es niemandem.",
        "warning": "Das ist ein Warnzeichen. Niemand darf dich unter Druck setzen.",
        "remember": "Ich darf Nein sagen."
      },
      {
        "module": "Modul 3: Fotos und Stimme",
        "title": "Sprachnachrichten",
        "icon": "🎤",
        "text": [
          "Auch deine Stimme ist privat.",
          "Eine Sprachnachricht kann weitergeleitet werden.",
          "Darum solltest du vorher überlegen."
        ],
        "remember": "Auch meine Stimme gehört mir."
      },
      {
        "module": "Modul 3: Fotos und Stimme",
        "title": "Übung: Foto oder Stimme",
        "icon": "❓",
        "exercise": {
          "id": "waPhoto",
          "question": "Nachricht: „Schick mir ein peinliches Foto. Ich zeige es niemandem.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 3: Fotos und Stimme",
        "title": "Merksatz: Ich entscheide",
        "icon": "✅",
        "text": [
          "Du musst kein Foto schicken.",
          "Du musst keine Sprachnachricht schicken.",
          "Du darfst Nein sagen."
        ],
        "remember": "Ich entscheide über Bilder und Stimme."
      },
      {
        "module": "Modul 4: Links und Betrug",
        "title": "Modulstart: Links und Betrug",
        "icon": "🔗",
        "text": [
          "Jetzt geht es um Links und Betrug.",
          "Manche Nachrichten sehen echt aus.",
          "Trotzdem können sie gefährlich sein."
        ],
        "remember": "Ich prüfe, bevor ich klicke."
      },
      {
        "module": "Modul 4: Links und Betrug",
        "title": "Komische Links",
        "icon": "🔗",
        "text": [
          "Manche Links sind gefährlich.",
          "Sie führen auf falsche Internet-Seiten.",
          "Dort wollen Betrüger Daten bekommen."
        ],
        "remember": "Ich klicke nicht sofort."
      },
      {
        "module": "Modul 4: Links und Betrug",
        "title": "Beispiel: Gewinn-Link",
        "icon": "🎁",
        "text": [
          "Du bekommst diese Nachricht:"
        ],
        "quote": "Du hast gewonnen. Klicke sofort hier.",
        "warning": "Das kann Betrug sein. Klicke nicht einfach.",
        "remember": "Erst prüfen. Dann handeln."
      },
      {
        "module": "Modul 4: Links und Betrug",
        "title": "Betrug erkennen",
        "icon": "⚠️",
        "text": [
          "Vorsicht, wenn jemand:"
        ],
        "bullets": [
          "dein Passwort will",
          "Geld von dir verlangt",
          "Druck macht"
        ],
        "remember": "Druck ist ein Warnzeichen."
      },
      {
        "module": "Modul 4: Links und Betrug",
        "title": "Wenn jemand Druck macht",
        "icon": "🛑",
        "text": [
          "Warnzeichen sind:"
        ],
        "bullets": [
          "Mach sofort.",
          "Sag es niemandem.",
          "Sonst passiert etwas."
        ],
        "remember": "Druck bedeutet: Stopp und Hilfe holen."
      },
      {
        "module": "Modul 4: Links und Betrug",
        "title": "Übung: Link prüfen",
        "icon": "❓",
        "exercise": {
          "id": "waLink",
          "question": "Nachricht: „Klicke sofort. Nur noch 5 Minuten.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 4: Links und Betrug",
        "title": "Merksatz: Erst prüfen",
        "icon": "✅",
        "text": [
          "Ich klicke nicht sofort.",
          "Ich prüfe die Nachricht.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Erst prüfen. Dann handeln."
      },
      {
        "module": "Modul 5: Gruppen und gutes Verhalten",
        "title": "Modulstart: Gruppen",
        "icon": "👥",
        "text": [
          "Jetzt geht es um WhatsApp-Gruppen.",
          "In Gruppen lesen viele Menschen mit.",
          "Darum ist gutes Verhalten wichtig."
        ],
        "remember": "In Gruppen schreibe ich vorsichtig."
      },
      {
        "module": "Modul 5: Gruppen und gutes Verhalten",
        "title": "WhatsApp-Gruppen",
        "icon": "👥",
        "text": [
          "In Gruppen lesen viele Menschen mit.",
          "Nachrichten können schnell weitergegeben werden.",
          "Darum solltest du besonders vorsichtig schreiben."
        ],
        "remember": "Gruppen haben viele Mitlesende."
      },
      {
        "module": "Modul 5: Gruppen und gutes Verhalten",
        "title": "Gute Gruppennachricht",
        "icon": "💬",
        "text": [
          "Eine gute Gruppen-Nachricht ist:"
        ],
        "bullets": [
          "freundlich",
          "kurz und verständlich",
          "ohne private Daten"
        ],
        "remember": "Ich schreibe respektvoll."
      },
      {
        "module": "Modul 5: Gruppen und gutes Verhalten",
        "title": "Schlechte Gruppennachricht",
        "icon": "🚫",
        "text": [
          "Diese Dinge gehören nicht in Gruppen:"
        ],
        "bullets": [
          "Beleidigungen",
          "Gerüchte",
          "private Fotos"
        ],
        "remember": "Ich verletze andere nicht."
      },
      {
        "module": "Modul 5: Gruppen und gutes Verhalten",
        "title": "Streit in der Gruppe",
        "icon": "💬",
        "text": [
          "In einer Gruppe streiten sich Menschen."
        ],
        "quote": "Du willst etwas Gemeines zurückschreiben.",
        "warning": "Besser: Pause machen. Nicht sofort antworten.",
        "remember": "Erst beruhigen. Dann entscheiden."
      },
      {
        "module": "Modul 5: Gruppen und gutes Verhalten",
        "title": "Übung: Gute Nachricht erkennen",
        "icon": "❓",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Stopp-Regel",
        "icon": "🛑",
        "text": [
          "Wenn dir etwas komisch vorkommt:"
        ],
        "bullets": [
          "nicht sofort antworten",
          "nichts Privates schicken",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Ich darf Nein sagen",
        "icon": "✋",
        "text": [
          "Du musst nicht antworten.",
          "Du musst nichts schicken.",
          "Du musst keinen Link anklicken."
        ],
        "remember": "Nein sagen ist erlaubt."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Blockieren",
        "icon": "🚫",
        "text": [
          "Du darfst dich schützen."
        ],
        "bullets": [
          "Profil oder Chat öffnen",
          "Blockieren auswählen",
          "danach Hilfe holen, wenn du unsicher bist"
        ],
        "remember": "Blockieren ist erlaubt."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Melden",
        "icon": "🚩",
        "text": [
          "Du kannst problematische Inhalte melden."
        ],
        "bullets": [
          "Inhalt oder Profil öffnen",
          "Melden auswählen",
          "Fachkraft informieren"
        ],
        "remember": "Melden ist Schutz."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Hilfe holen",
        "icon": "🙋",
        "text": [
          "Du musst Probleme nicht allein lösen.",
          "Hilfe holen ist richtig."
        ],
        "bullets": [
          "Fachkraft fragen",
          "vertraute Person fragen",
          "bei akuter Gefahr: Polizei 110"
        ],
        "remember": "Hilfe holen ist stark."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Datenschutz-Hinweis",
        "icon": "🛡️",
        "text": [
          "Diese Lernseite fragt keine privaten Daten ab.",
          "Du musst keinen Namen eingeben.",
          "Im Quiz nimmst du einen Spitznamen."
        ],
        "remember": "Ich bleibe anonym."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Wiederholung",
        "icon": "🔁",
        "text": [
          "Was mache ich bei einem Problem mit WhatsApp?"
        ],
        "bullets": [
          "nicht sofort reagieren",
          "Beweise nicht vorschnell löschen",
          "Hilfe holen"
        ],
        "remember": "Ich muss das nicht allein klären."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Quiz und Abschluss",
        "icon": "🏁",
        "text": [
          "Gut gemacht.",
          "Du hast wichtige Regeln gelernt.",
          "Jetzt kannst du dein Wissen testen."
        ],
        "bullets": [
          "keinen echten Namen nutzen",
          "Spitznamen nehmen",
          "Quiz zum Üben nutzen"
        ],
        "remember": "Ich hole Hilfe, wenn ich unsicher bin.",
        "quiz": true
      }
    ]
  },
  {
    "id": "facebook",
    "title": "Facebook",
    "icon": "📘",
    "desc": "Profil, Beiträge, Kommentare und Privatsphäre",
    "quiz": "https://kahoot.com",
    "lessons": [
      {
        "module": "Modul 1: Facebook verstehen",
        "title": "Start",
        "icon": "👋",
        "text": [
          "Hier lernst du: Facebook sicherer nutzen.",
          "Du lernst mit kurzen Seiten.",
          "Am Ende kannst du ein Quiz machen."
        ],
        "remember": "Du bestimmst dein Tempo."
      },
      {
        "module": "Modul 1: Facebook verstehen",
        "title": "Was ist Facebook?",
        "icon": "📘",
        "text": [
          "Facebook ist ein soziales Netzwerk.",
          "Dort können Menschen Inhalte sehen oder teilen.",
          "Andere Menschen können mit dir Kontakt haben."
        ],
        "remember": "Facebook ist ein digitales Angebot."
      },
      {
        "module": "Modul 1: Facebook verstehen",
        "title": "Was kann ich bei Facebook machen?",
        "icon": "📘",
        "text": [
          "Bei Facebook kannst du verschiedene Dinge tun."
        ],
        "bullets": [
          "Profil ansehen",
          "Beiträge schreiben",
          "Kommentare lesen"
        ],
        "remember": "Ich entscheide, was ich nutze."
      },
      {
        "module": "Modul 1: Facebook verstehen",
        "title": "Facebook im Alltag",
        "icon": "👍",
        "text": [
          "Facebook kann im Alltag nützlich sein."
        ],
        "bullets": [
          "Kontakt halten",
          "Informationen bekommen",
          "Veranstaltungen sehen"
        ],
        "remember": "Ich nutze es bewusst."
      },
      {
        "module": "Modul 1: Facebook verstehen",
        "title": "Guten Inhalt erkennen",
        "icon": "✅",
        "text": [
          "Ein guter Inhalt ist freundlich, klar und macht keinen Druck."
        ],
        "quote": "Danke für die Info. Ich komme später.",
        "success": "Das wirkt sicher. Es ist freundlich und ohne Druck.",
        "remember": "Gute Inhalte sind respektvoll."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Modulstart: Private Daten schützen",
        "icon": "🔒",
        "text": [
          "Jetzt geht es um private Daten.",
          "Du lernst, was nicht öffentlich sein sollte.",
          "Du lernst, wann du vorsichtig sein musst."
        ],
        "remember": "Private Daten gehören mir."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Was sind private Daten?",
        "icon": "🔒",
        "text": [
          "Private Daten sind Informationen über dich.",
          "Du sollst sie nicht einfach posten oder verschicken."
        ],
        "bullets": [
          "Adresse und Wohnort",
          "Telefonnummer",
          "Passwörter und PIN-Nummern"
        ],
        "remember": "Meine Daten gehören mir."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Beispiel: Adresse",
        "icon": "📍",
        "text": [
          "Eine fremde Person fragt dich:"
        ],
        "quote": "Wo wohnst du? Schick mir deine Adresse.",
        "warning": "Das ist nicht sicher. Deine Adresse ist privat.",
        "remember": "Meine Adresse bleibt privat."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Beispiel: Passwort",
        "icon": "🔑",
        "text": [
          "Eine Nachricht macht Druck:"
        ],
        "quote": "Gib mir dein Passwort. Ich helfe dir.",
        "warning": "Das ist nicht sicher. Dein Passwort bleibt geheim.",
        "remember": "Mein Passwort bleibt geheim."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Übung: Private Daten erkennen",
        "icon": "❓",
        "exercise": {
          "id": "facebookPrivat",
          "question": "Nachricht: „Schick mir deine PIN über Facebook.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "✅",
        "text": [
          "Du darfst Nein sagen.",
          "Du musst keine privaten Daten schicken.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Meine Daten gehören mir."
      },
      {
        "module": "Modul 3: Beiträge, Fotos und Kommentare",
        "title": "Modulstart: Inhalte bewusst teilen",
        "icon": "🖼️",
        "text": [
          "Jetzt geht es um Inhalte.",
          "Inhalte können privat oder öffentlich sein.",
          "Du lernst, worauf du achten musst."
        ],
        "remember": "Ich teile bewusst."
      },
      {
        "module": "Modul 3: Beiträge, Fotos und Kommentare",
        "title": "Inhalte teilen",
        "icon": "📤",
        "text": [
          "Inhalte können gespeichert werden.",
          "Andere können sie weitergeben.",
          "Darum ist Vorsicht wichtig."
        ],
        "remember": "Ich denke nach, bevor ich teile."
      },
      {
        "module": "Modul 3: Beiträge, Fotos und Kommentare",
        "title": "Private Inhalte",
        "icon": "🚫",
        "text": [
          "Manche Inhalte sind sehr privat."
        ],
        "bullets": [
          "Fotos von dir",
          "öffentliche Beiträge",
          "Kommentare über andere"
        ],
        "remember": "Private Inhalte bleiben privat."
      },
      {
        "module": "Modul 3: Beiträge, Fotos und Kommentare",
        "title": "Beispiel: Druck",
        "icon": "⚠️",
        "text": [
          "Eine Person schreibt:"
        ],
        "quote": "Poste das Foto von dir. Aber sag es niemandem.",
        "warning": "Das ist ein Warnzeichen. Niemand darf dich unter Druck setzen.",
        "remember": "Ich darf Nein sagen."
      },
      {
        "module": "Modul 3: Beiträge, Fotos und Kommentare",
        "title": "Nachrichten und Kommentare",
        "icon": "💬",
        "text": [
          "Auch Worte können verletzen.",
          "Nachrichten und Kommentare können gespeichert werden.",
          "Darum solltest du vorher überlegen."
        ],
        "remember": "Ich schreibe respektvoll."
      },
      {
        "module": "Modul 3: Beiträge, Fotos und Kommentare",
        "title": "Übung: Inhalt prüfen",
        "icon": "❓",
        "exercise": {
          "id": "facebookInhalt",
          "question": "Nachricht: „Poste das. Aber sag es niemandem.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 3: Beiträge, Fotos und Kommentare",
        "title": "Merksatz: Ich entscheide",
        "icon": "✅",
        "text": [
          "Ich muss nichts posten.",
          "Ich muss nichts verschicken.",
          "Ich darf Nein sagen."
        ],
        "remember": "Ich entscheide über meine Inhalte."
      },
      {
        "module": "Modul 4: Beiträge, Werbung und Betrug",
        "title": "Modulstart: Risiken erkennen",
        "icon": "⚠️",
        "text": [
          "Jetzt geht es um Risiken.",
          "Manche Inhalte sehen harmlos aus.",
          "Trotzdem können sie gefährlich sein."
        ],
        "remember": "Ich prüfe, bevor ich handle."
      },
      {
        "module": "Modul 4: Beiträge, Werbung und Betrug",
        "title": "Typische Risiken",
        "icon": "🔎",
        "text": [
          "Manche Beiträge stimmen nicht.",
          "Manche Werbung will Daten oder Geld.",
          "Manche Menschen machen Druck."
        ],
        "remember": "Ich reagiere nicht sofort."
      },
      {
        "module": "Modul 4: Beiträge, Werbung und Betrug",
        "title": "Beispiel: Lock-Nachricht",
        "icon": "🎁",
        "text": [
          "Du siehst oder bekommst diese Nachricht:"
        ],
        "quote": "Du hast gewonnen. Klicke und teile den Beitrag.",
        "warning": "Das kann Betrug sein. Reagiere nicht sofort.",
        "remember": "Erst prüfen. Dann handeln."
      },
      {
        "module": "Modul 4: Beiträge, Werbung und Betrug",
        "title": "Betrug erkennen",
        "icon": "⚠️",
        "text": [
          "Vorsicht, wenn jemand:"
        ],
        "bullets": [
          "dein Passwort will",
          "Geld von dir verlangt",
          "Druck macht"
        ],
        "remember": "Druck ist ein Warnzeichen."
      },
      {
        "module": "Modul 4: Beiträge, Werbung und Betrug",
        "title": "Wenn jemand Druck macht",
        "icon": "🛑",
        "text": [
          "Warnzeichen sind:"
        ],
        "bullets": [
          "Mach sofort.",
          "Sag es niemandem.",
          "Sonst passiert etwas."
        ],
        "remember": "Druck bedeutet: Stopp und Hilfe holen."
      },
      {
        "module": "Modul 4: Beiträge, Werbung und Betrug",
        "title": "Übung: Risiko prüfen",
        "icon": "❓",
        "exercise": {
          "id": "facebookRisiko",
          "question": "Beitrag: „Teile sofort. Sonst wird dein Konto gelöscht.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 4: Beiträge, Werbung und Betrug",
        "title": "Merksatz: Erst prüfen",
        "icon": "✅",
        "text": [
          "Ich reagiere nicht sofort.",
          "Ich prüfe die Nachricht.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Erst prüfen. Dann handeln."
      },
      {
        "module": "Modul 5: Beiträge und Kommentare",
        "title": "Modulstart: Gutes Verhalten",
        "icon": "👥",
        "text": [
          "Jetzt geht es um Beiträge und Kommentare.",
          "Viele Menschen können mitlesen.",
          "Darum ist gutes Verhalten wichtig."
        ],
        "remember": "Ich schreibe vorsichtig."
      },
      {
        "module": "Modul 5: Beiträge und Kommentare",
        "title": "Beiträge und Kommentare",
        "icon": "👥",
        "text": [
          "Viele Menschen können Inhalte sehen.",
          "Inhalte können schnell weitergegeben werden.",
          "Darum solltest du vorsichtig sein."
        ],
        "remember": "Viele können mitlesen."
      },
      {
        "module": "Modul 5: Beiträge und Kommentare",
        "title": "Guter Beitrag",
        "icon": "💬",
        "text": [
          "Ein guter Beitrag ist:"
        ],
        "bullets": [
          "freundlich",
          "kurz und verständlich",
          "ohne private Daten"
        ],
        "remember": "Ich schreibe respektvoll."
      },
      {
        "module": "Modul 5: Beiträge und Kommentare",
        "title": "Schlechter Beitrag",
        "icon": "🚫",
        "text": [
          "Diese Dinge sind nicht gut:"
        ],
        "bullets": [
          "Beleidigungen",
          "Gerüchte",
          "private Fotos oder Daten"
        ],
        "remember": "Ich verletze andere nicht."
      },
      {
        "module": "Modul 5: Beiträge und Kommentare",
        "title": "Streit oder Ärger",
        "icon": "💬",
        "text": [
          "Manchmal gibt es Streit."
        ],
        "quote": "Du willst etwas Gemeines zurückschreiben.",
        "warning": "Besser: Pause machen. Nicht sofort antworten.",
        "remember": "Erst beruhigen. Dann entscheiden."
      },
      {
        "module": "Modul 5: Beiträge und Kommentare",
        "title": "Übung: Gute Nachricht erkennen",
        "icon": "❓",
        "exercise": {
          "id": "facebookGut",
          "question": "Danke für die Info. Ich komme später.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Stopp-Regel",
        "icon": "🛑",
        "text": [
          "Wenn dir etwas komisch vorkommt:"
        ],
        "bullets": [
          "nicht sofort antworten",
          "nichts Privates schicken",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Ich darf Nein sagen",
        "icon": "✋",
        "text": [
          "Du musst nicht antworten.",
          "Du musst nichts schicken.",
          "Du musst keinen Link anklicken."
        ],
        "remember": "Nein sagen ist erlaubt."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Blockieren",
        "icon": "🚫",
        "text": [
          "Du darfst dich schützen."
        ],
        "bullets": [
          "Profil oder Chat öffnen",
          "Blockieren auswählen",
          "danach Hilfe holen, wenn du unsicher bist"
        ],
        "remember": "Blockieren ist erlaubt."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Melden",
        "icon": "🚩",
        "text": [
          "Du kannst problematische Inhalte melden."
        ],
        "bullets": [
          "Inhalt oder Profil öffnen",
          "Melden auswählen",
          "Fachkraft informieren"
        ],
        "remember": "Melden ist Schutz."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Hilfe holen",
        "icon": "🙋",
        "text": [
          "Du musst Probleme nicht allein lösen.",
          "Hilfe holen ist richtig."
        ],
        "bullets": [
          "Fachkraft fragen",
          "vertraute Person fragen",
          "bei akuter Gefahr: Polizei 110"
        ],
        "remember": "Hilfe holen ist stark."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Datenschutz-Hinweis",
        "icon": "🛡️",
        "text": [
          "Diese Lernseite fragt keine privaten Daten ab.",
          "Du musst keinen Namen eingeben.",
          "Im Quiz nimmst du einen Spitznamen."
        ],
        "remember": "Ich bleibe anonym."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Wiederholung",
        "icon": "🔁",
        "text": [
          "Was mache ich bei einem Problem mit Facebook?"
        ],
        "bullets": [
          "nicht sofort reagieren",
          "Beweise nicht vorschnell löschen",
          "Hilfe holen"
        ],
        "remember": "Ich muss das nicht allein klären."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Quiz und Abschluss",
        "icon": "🏁",
        "text": [
          "Gut gemacht.",
          "Du hast wichtige Regeln gelernt.",
          "Jetzt kannst du dein Wissen testen."
        ],
        "bullets": [
          "keinen echten Namen nutzen",
          "Spitznamen nehmen",
          "Quiz zum Üben nutzen"
        ],
        "remember": "Ich hole Hilfe, wenn ich unsicher bin.",
        "quiz": true
      }
    ]
  },
  {
    "id": "instagram",
    "title": "Instagram",
    "icon": "📸",
    "desc": "Fotos, Stories, Reels und Nachrichten",
    "quiz": "https://kahoot.com",
    "lessons": [
      {
        "module": "Modul 1: Instagram verstehen",
        "title": "Start",
        "icon": "👋",
        "text": [
          "Hier lernst du: Instagram sicherer nutzen.",
          "Du lernst mit kurzen Seiten.",
          "Am Ende kannst du ein Quiz machen."
        ],
        "remember": "Du bestimmst dein Tempo."
      },
      {
        "module": "Modul 1: Instagram verstehen",
        "title": "Was ist Instagram?",
        "icon": "📸",
        "text": [
          "Instagram ist eine App für Fotos und kurze Videos.",
          "Dort können Menschen Inhalte sehen oder teilen.",
          "Andere Menschen können mit dir Kontakt haben."
        ],
        "remember": "Instagram ist ein digitales Angebot."
      },
      {
        "module": "Modul 1: Instagram verstehen",
        "title": "Was kann ich bei Instagram machen?",
        "icon": "📸",
        "text": [
          "Bei Instagram kannst du verschiedene Dinge tun."
        ],
        "bullets": [
          "Fotos ansehen",
          "Stories posten",
          "Reels anschauen"
        ],
        "remember": "Ich entscheide, was ich nutze."
      },
      {
        "module": "Modul 1: Instagram verstehen",
        "title": "Instagram im Alltag",
        "icon": "👍",
        "text": [
          "Instagram kann im Alltag nützlich sein."
        ],
        "bullets": [
          "Kontakt halten",
          "kreative Ideen sehen",
          "Informationen bekommen"
        ],
        "remember": "Ich nutze es bewusst."
      },
      {
        "module": "Modul 1: Instagram verstehen",
        "title": "Guten Inhalt erkennen",
        "icon": "✅",
        "text": [
          "Ein guter Inhalt ist freundlich, klar und macht keinen Druck."
        ],
        "quote": "Danke für deine Nachricht. Ich antworte später.",
        "success": "Das wirkt sicher. Es ist freundlich und ohne Druck.",
        "remember": "Gute Inhalte sind respektvoll."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Modulstart: Private Daten schützen",
        "icon": "🔒",
        "text": [
          "Jetzt geht es um private Daten.",
          "Du lernst, was nicht öffentlich sein sollte.",
          "Du lernst, wann du vorsichtig sein musst."
        ],
        "remember": "Private Daten gehören mir."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Was sind private Daten?",
        "icon": "🔒",
        "text": [
          "Private Daten sind Informationen über dich.",
          "Du sollst sie nicht einfach posten oder verschicken."
        ],
        "bullets": [
          "Adresse und Wohnort",
          "Telefonnummer",
          "Passwörter und PIN-Nummern"
        ],
        "remember": "Meine Daten gehören mir."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Beispiel: Adresse",
        "icon": "📍",
        "text": [
          "Eine fremde Person fragt dich:"
        ],
        "quote": "Wo wohnst du? Schick mir deine Adresse.",
        "warning": "Das ist nicht sicher. Deine Adresse ist privat.",
        "remember": "Meine Adresse bleibt privat."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Beispiel: Passwort",
        "icon": "🔑",
        "text": [
          "Eine Nachricht macht Druck:"
        ],
        "quote": "Gib mir dein Passwort. Ich helfe dir.",
        "warning": "Das ist nicht sicher. Dein Passwort bleibt geheim.",
        "remember": "Mein Passwort bleibt geheim."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Übung: Private Daten erkennen",
        "icon": "❓",
        "exercise": {
          "id": "instagramPrivat",
          "question": "Nachricht: „Schick mir deine PIN über Instagram.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "✅",
        "text": [
          "Du darfst Nein sagen.",
          "Du musst keine privaten Daten schicken.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Meine Daten gehören mir."
      },
      {
        "module": "Modul 3: Fotos, Stories und Reels",
        "title": "Modulstart: Inhalte bewusst teilen",
        "icon": "🖼️",
        "text": [
          "Jetzt geht es um Inhalte.",
          "Inhalte können privat oder öffentlich sein.",
          "Du lernst, worauf du achten musst."
        ],
        "remember": "Ich teile bewusst."
      },
      {
        "module": "Modul 3: Fotos, Stories und Reels",
        "title": "Inhalte teilen",
        "icon": "📤",
        "text": [
          "Inhalte können gespeichert werden.",
          "Andere können sie weitergeben.",
          "Darum ist Vorsicht wichtig."
        ],
        "remember": "Ich denke nach, bevor ich teile."
      },
      {
        "module": "Modul 3: Fotos, Stories und Reels",
        "title": "Private Inhalte",
        "icon": "🚫",
        "text": [
          "Manche Inhalte sind sehr privat."
        ],
        "bullets": [
          "private Fotos",
          "Stories mit Standort",
          "Videos mit anderen Personen"
        ],
        "remember": "Private Inhalte bleiben privat."
      },
      {
        "module": "Modul 3: Fotos, Stories und Reels",
        "title": "Beispiel: Druck",
        "icon": "⚠️",
        "text": [
          "Eine Person schreibt:"
        ],
        "quote": "Schick mir ein privates Foto. Sag es niemandem.",
        "warning": "Das ist ein Warnzeichen. Niemand darf dich unter Druck setzen.",
        "remember": "Ich darf Nein sagen."
      },
      {
        "module": "Modul 3: Fotos, Stories und Reels",
        "title": "Nachrichten und Kommentare",
        "icon": "💬",
        "text": [
          "Auch Worte können verletzen.",
          "Nachrichten und Kommentare können gespeichert werden.",
          "Darum solltest du vorher überlegen."
        ],
        "remember": "Ich schreibe respektvoll."
      },
      {
        "module": "Modul 3: Fotos, Stories und Reels",
        "title": "Übung: Inhalt prüfen",
        "icon": "❓",
        "exercise": {
          "id": "instagramInhalt",
          "question": "Nachricht: „Poste das. Aber sag es niemandem.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 3: Fotos, Stories und Reels",
        "title": "Merksatz: Ich entscheide",
        "icon": "✅",
        "text": [
          "Ich muss nichts posten.",
          "Ich muss nichts verschicken.",
          "Ich darf Nein sagen."
        ],
        "remember": "Ich entscheide über meine Inhalte."
      },
      {
        "module": "Modul 4: Stories, Werbung und Betrug",
        "title": "Modulstart: Risiken erkennen",
        "icon": "⚠️",
        "text": [
          "Jetzt geht es um Risiken.",
          "Manche Inhalte sehen harmlos aus.",
          "Trotzdem können sie gefährlich sein."
        ],
        "remember": "Ich prüfe, bevor ich handle."
      },
      {
        "module": "Modul 4: Stories, Werbung und Betrug",
        "title": "Typische Risiken",
        "icon": "🔎",
        "text": [
          "Manche Nachrichten machen Druck.",
          "Manche Werbung verspricht zu viel.",
          "Manche Links führen zu Betrug."
        ],
        "remember": "Ich reagiere nicht sofort."
      },
      {
        "module": "Modul 4: Stories, Werbung und Betrug",
        "title": "Beispiel: Lock-Nachricht",
        "icon": "🎁",
        "text": [
          "Du siehst oder bekommst diese Nachricht:"
        ],
        "quote": "Du hast gewonnen. Klicke sofort auf den Link in meiner Bio.",
        "warning": "Das kann Betrug sein. Reagiere nicht sofort.",
        "remember": "Erst prüfen. Dann handeln."
      },
      {
        "module": "Modul 4: Stories, Werbung und Betrug",
        "title": "Betrug erkennen",
        "icon": "⚠️",
        "text": [
          "Vorsicht, wenn jemand:"
        ],
        "bullets": [
          "dein Passwort will",
          "Geld von dir verlangt",
          "Druck macht"
        ],
        "remember": "Druck ist ein Warnzeichen."
      },
      {
        "module": "Modul 4: Stories, Werbung und Betrug",
        "title": "Wenn jemand Druck macht",
        "icon": "🛑",
        "text": [
          "Warnzeichen sind:"
        ],
        "bullets": [
          "Mach sofort.",
          "Sag es niemandem.",
          "Sonst passiert etwas."
        ],
        "remember": "Druck bedeutet: Stopp und Hilfe holen."
      },
      {
        "module": "Modul 4: Stories, Werbung und Betrug",
        "title": "Übung: Risiko prüfen",
        "icon": "❓",
        "exercise": {
          "id": "instagramRisiko",
          "question": "Nachricht: „Klicke sofort auf den Link in der Bio.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 4: Stories, Werbung und Betrug",
        "title": "Merksatz: Erst prüfen",
        "icon": "✅",
        "text": [
          "Ich reagiere nicht sofort.",
          "Ich prüfe die Nachricht.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Erst prüfen. Dann handeln."
      },
      {
        "module": "Modul 5: Kommentare und Nachrichten",
        "title": "Modulstart: Gutes Verhalten",
        "icon": "👥",
        "text": [
          "Jetzt geht es um Kommentare und Nachrichten.",
          "Viele Menschen können mitlesen.",
          "Darum ist gutes Verhalten wichtig."
        ],
        "remember": "Ich schreibe vorsichtig."
      },
      {
        "module": "Modul 5: Kommentare und Nachrichten",
        "title": "Kommentare und Nachrichten",
        "icon": "👥",
        "text": [
          "Viele Menschen können Inhalte sehen.",
          "Inhalte können schnell weitergegeben werden.",
          "Darum solltest du vorsichtig sein."
        ],
        "remember": "Viele können mitlesen."
      },
      {
        "module": "Modul 5: Kommentare und Nachrichten",
        "title": "Guter Beitrag",
        "icon": "💬",
        "text": [
          "Ein guter Beitrag ist:"
        ],
        "bullets": [
          "freundlich",
          "kurz und verständlich",
          "ohne private Daten"
        ],
        "remember": "Ich schreibe respektvoll."
      },
      {
        "module": "Modul 5: Kommentare und Nachrichten",
        "title": "Schlechter Beitrag",
        "icon": "🚫",
        "text": [
          "Diese Dinge sind nicht gut:"
        ],
        "bullets": [
          "Beleidigungen",
          "Gerüchte",
          "private Fotos oder Daten"
        ],
        "remember": "Ich verletze andere nicht."
      },
      {
        "module": "Modul 5: Kommentare und Nachrichten",
        "title": "Streit oder Ärger",
        "icon": "💬",
        "text": [
          "Manchmal gibt es Streit."
        ],
        "quote": "Du willst etwas Gemeines zurückschreiben.",
        "warning": "Besser: Pause machen. Nicht sofort antworten.",
        "remember": "Erst beruhigen. Dann entscheiden."
      },
      {
        "module": "Modul 5: Kommentare und Nachrichten",
        "title": "Übung: Gute Nachricht erkennen",
        "icon": "❓",
        "exercise": {
          "id": "instagramGut",
          "question": "Danke für deine Nachricht. Ich antworte später.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Stopp-Regel",
        "icon": "🛑",
        "text": [
          "Wenn dir etwas komisch vorkommt:"
        ],
        "bullets": [
          "nicht sofort antworten",
          "nichts Privates schicken",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Ich darf Nein sagen",
        "icon": "✋",
        "text": [
          "Du musst nicht antworten.",
          "Du musst nichts schicken.",
          "Du musst keinen Link anklicken."
        ],
        "remember": "Nein sagen ist erlaubt."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Blockieren",
        "icon": "🚫",
        "text": [
          "Du darfst dich schützen."
        ],
        "bullets": [
          "Profil oder Chat öffnen",
          "Blockieren auswählen",
          "danach Hilfe holen, wenn du unsicher bist"
        ],
        "remember": "Blockieren ist erlaubt."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Melden",
        "icon": "🚩",
        "text": [
          "Du kannst problematische Inhalte melden."
        ],
        "bullets": [
          "Inhalt oder Profil öffnen",
          "Melden auswählen",
          "Fachkraft informieren"
        ],
        "remember": "Melden ist Schutz."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Hilfe holen",
        "icon": "🙋",
        "text": [
          "Du musst Probleme nicht allein lösen.",
          "Hilfe holen ist richtig."
        ],
        "bullets": [
          "Fachkraft fragen",
          "vertraute Person fragen",
          "bei akuter Gefahr: Polizei 110"
        ],
        "remember": "Hilfe holen ist stark."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Datenschutz-Hinweis",
        "icon": "🛡️",
        "text": [
          "Diese Lernseite fragt keine privaten Daten ab.",
          "Du musst keinen Namen eingeben.",
          "Im Quiz nimmst du einen Spitznamen."
        ],
        "remember": "Ich bleibe anonym."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Wiederholung",
        "icon": "🔁",
        "text": [
          "Was mache ich bei einem Problem mit Instagram?"
        ],
        "bullets": [
          "nicht sofort reagieren",
          "Beweise nicht vorschnell löschen",
          "Hilfe holen"
        ],
        "remember": "Ich muss das nicht allein klären."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Quiz und Abschluss",
        "icon": "🏁",
        "text": [
          "Gut gemacht.",
          "Du hast wichtige Regeln gelernt.",
          "Jetzt kannst du dein Wissen testen."
        ],
        "bullets": [
          "keinen echten Namen nutzen",
          "Spitznamen nehmen",
          "Quiz zum Üben nutzen"
        ],
        "remember": "Ich hole Hilfe, wenn ich unsicher bin.",
        "quiz": true
      }
    ]
  },
  {
    "id": "youtube",
    "title": "YouTube",
    "icon": "▶️",
    "desc": "Videos ansehen, Kommentare und Werbung prüfen",
    "quiz": "https://kahoot.com",
    "lessons": [
      {
        "module": "Modul 1: YouTube verstehen",
        "title": "Start",
        "icon": "👋",
        "text": [
          "Hier lernst du: YouTube sicherer nutzen.",
          "Du lernst mit kurzen Seiten.",
          "Am Ende kannst du ein Quiz machen."
        ],
        "remember": "Du bestimmst dein Tempo."
      },
      {
        "module": "Modul 1: YouTube verstehen",
        "title": "Was ist YouTube?",
        "icon": "▶️",
        "text": [
          "YouTube ist eine Plattform für Videos.",
          "Dort können Menschen Inhalte sehen oder teilen.",
          "Andere Menschen können mit dir Kontakt haben."
        ],
        "remember": "YouTube ist ein digitales Angebot."
      },
      {
        "module": "Modul 1: YouTube verstehen",
        "title": "Was kann ich bei YouTube machen?",
        "icon": "▶️",
        "text": [
          "Bei YouTube kannst du verschiedene Dinge tun."
        ],
        "bullets": [
          "Videos ansehen",
          "Kanäle abonnieren",
          "Kommentare lesen"
        ],
        "remember": "Ich entscheide, was ich nutze."
      },
      {
        "module": "Modul 1: YouTube verstehen",
        "title": "YouTube im Alltag",
        "icon": "👍",
        "text": [
          "YouTube kann im Alltag nützlich sein."
        ],
        "bullets": [
          "Lernen",
          "Unterhaltung",
          "Anleitungen finden"
        ],
        "remember": "Ich nutze es bewusst."
      },
      {
        "module": "Modul 1: YouTube verstehen",
        "title": "Guten Inhalt erkennen",
        "icon": "✅",
        "text": [
          "Ein guter Inhalt ist freundlich, klar und macht keinen Druck."
        ],
        "quote": "Danke für das Video. Das hat mir geholfen.",
        "success": "Das wirkt sicher. Es ist freundlich und ohne Druck.",
        "remember": "Gute Inhalte sind respektvoll."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Modulstart: Private Daten schützen",
        "icon": "🔒",
        "text": [
          "Jetzt geht es um private Daten.",
          "Du lernst, was nicht öffentlich sein sollte.",
          "Du lernst, wann du vorsichtig sein musst."
        ],
        "remember": "Private Daten gehören mir."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Was sind private Daten?",
        "icon": "🔒",
        "text": [
          "Private Daten sind Informationen über dich.",
          "Du sollst sie nicht einfach posten oder verschicken."
        ],
        "bullets": [
          "Adresse und Wohnort",
          "Telefonnummer",
          "Passwörter und PIN-Nummern"
        ],
        "remember": "Meine Daten gehören mir."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Beispiel: Adresse",
        "icon": "📍",
        "text": [
          "Eine fremde Person fragt dich:"
        ],
        "quote": "Wo wohnst du? Schick mir deine Adresse.",
        "warning": "Das ist nicht sicher. Deine Adresse ist privat.",
        "remember": "Meine Adresse bleibt privat."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Beispiel: Passwort",
        "icon": "🔑",
        "text": [
          "Eine Nachricht macht Druck:"
        ],
        "quote": "Gib mir dein Passwort. Ich helfe dir.",
        "warning": "Das ist nicht sicher. Dein Passwort bleibt geheim.",
        "remember": "Mein Passwort bleibt geheim."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Übung: Private Daten erkennen",
        "icon": "❓",
        "exercise": {
          "id": "youtubePrivat",
          "question": "Nachricht: „Schick mir deine PIN über YouTube.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "✅",
        "text": [
          "Du darfst Nein sagen.",
          "Du musst keine privaten Daten schicken.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Meine Daten gehören mir."
      },
      {
        "module": "Modul 3: Videos, Kommentare und Werbung",
        "title": "Modulstart: Inhalte bewusst teilen",
        "icon": "🖼️",
        "text": [
          "Jetzt geht es um Inhalte.",
          "Inhalte können privat oder öffentlich sein.",
          "Du lernst, worauf du achten musst."
        ],
        "remember": "Ich teile bewusst."
      },
      {
        "module": "Modul 3: Videos, Kommentare und Werbung",
        "title": "Inhalte teilen",
        "icon": "📤",
        "text": [
          "Inhalte können gespeichert werden.",
          "Andere können sie weitergeben.",
          "Darum ist Vorsicht wichtig."
        ],
        "remember": "Ich denke nach, bevor ich teile."
      },
      {
        "module": "Modul 3: Videos, Kommentare und Werbung",
        "title": "Private Inhalte",
        "icon": "🚫",
        "text": [
          "Manche Inhalte sind sehr privat."
        ],
        "bullets": [
          "private Kommentare",
          "peinliche Videos",
          "Videos mit anderen Personen"
        ],
        "remember": "Private Inhalte bleiben privat."
      },
      {
        "module": "Modul 3: Videos, Kommentare und Werbung",
        "title": "Beispiel: Druck",
        "icon": "⚠️",
        "text": [
          "Eine Person schreibt:"
        ],
        "quote": "Schreib deine Telefonnummer in die Kommentare.",
        "warning": "Das ist ein Warnzeichen. Niemand darf dich unter Druck setzen.",
        "remember": "Ich darf Nein sagen."
      },
      {
        "module": "Modul 3: Videos, Kommentare und Werbung",
        "title": "Nachrichten und Kommentare",
        "icon": "💬",
        "text": [
          "Auch Worte können verletzen.",
          "Nachrichten und Kommentare können gespeichert werden.",
          "Darum solltest du vorher überlegen."
        ],
        "remember": "Ich schreibe respektvoll."
      },
      {
        "module": "Modul 3: Videos, Kommentare und Werbung",
        "title": "Übung: Inhalt prüfen",
        "icon": "❓",
        "exercise": {
          "id": "youtubeInhalt",
          "question": "Nachricht: „Poste das. Aber sag es niemandem.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 3: Videos, Kommentare und Werbung",
        "title": "Merksatz: Ich entscheide",
        "icon": "✅",
        "text": [
          "Ich muss nichts posten.",
          "Ich muss nichts verschicken.",
          "Ich darf Nein sagen."
        ],
        "remember": "Ich entscheide über meine Inhalte."
      },
      {
        "module": "Modul 4: Werbung, Fake News und Betrug",
        "title": "Modulstart: Risiken erkennen",
        "icon": "⚠️",
        "text": [
          "Jetzt geht es um Risiken.",
          "Manche Inhalte sehen harmlos aus.",
          "Trotzdem können sie gefährlich sein."
        ],
        "remember": "Ich prüfe, bevor ich handle."
      },
      {
        "module": "Modul 4: Werbung, Fake News und Betrug",
        "title": "Typische Risiken",
        "icon": "🔎",
        "text": [
          "Manche Videos sind falsch.",
          "Manche Werbung will Geld.",
          "Manche Kommentare sind Betrug."
        ],
        "remember": "Ich reagiere nicht sofort."
      },
      {
        "module": "Modul 4: Werbung, Fake News und Betrug",
        "title": "Beispiel: Lock-Nachricht",
        "icon": "🎁",
        "text": [
          "Du siehst oder bekommst diese Nachricht:"
        ],
        "quote": "Kaufe sofort. Nur heute wirst du reich.",
        "warning": "Das kann Betrug sein. Reagiere nicht sofort.",
        "remember": "Erst prüfen. Dann handeln."
      },
      {
        "module": "Modul 4: Werbung, Fake News und Betrug",
        "title": "Betrug erkennen",
        "icon": "⚠️",
        "text": [
          "Vorsicht, wenn jemand:"
        ],
        "bullets": [
          "dein Passwort will",
          "Geld von dir verlangt",
          "Druck macht"
        ],
        "remember": "Druck ist ein Warnzeichen."
      },
      {
        "module": "Modul 4: Werbung, Fake News und Betrug",
        "title": "Wenn jemand Druck macht",
        "icon": "🛑",
        "text": [
          "Warnzeichen sind:"
        ],
        "bullets": [
          "Mach sofort.",
          "Sag es niemandem.",
          "Sonst passiert etwas."
        ],
        "remember": "Druck bedeutet: Stopp und Hilfe holen."
      },
      {
        "module": "Modul 4: Werbung, Fake News und Betrug",
        "title": "Übung: Risiko prüfen",
        "icon": "❓",
        "exercise": {
          "id": "youtubeRisiko",
          "question": "Video: „Kaufe sofort. Nur heute wirst du reich.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 4: Werbung, Fake News und Betrug",
        "title": "Merksatz: Erst prüfen",
        "icon": "✅",
        "text": [
          "Ich reagiere nicht sofort.",
          "Ich prüfe die Nachricht.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Erst prüfen. Dann handeln."
      },
      {
        "module": "Modul 5: Kommentare und Community",
        "title": "Modulstart: Gutes Verhalten",
        "icon": "👥",
        "text": [
          "Jetzt geht es um Kommentare und Community.",
          "Viele Menschen können mitlesen.",
          "Darum ist gutes Verhalten wichtig."
        ],
        "remember": "Ich schreibe vorsichtig."
      },
      {
        "module": "Modul 5: Kommentare und Community",
        "title": "Kommentare und Community",
        "icon": "👥",
        "text": [
          "Viele Menschen können Inhalte sehen.",
          "Inhalte können schnell weitergegeben werden.",
          "Darum solltest du vorsichtig sein."
        ],
        "remember": "Viele können mitlesen."
      },
      {
        "module": "Modul 5: Kommentare und Community",
        "title": "Guter Beitrag",
        "icon": "💬",
        "text": [
          "Ein guter Beitrag ist:"
        ],
        "bullets": [
          "freundlich",
          "kurz und verständlich",
          "ohne private Daten"
        ],
        "remember": "Ich schreibe respektvoll."
      },
      {
        "module": "Modul 5: Kommentare und Community",
        "title": "Schlechter Beitrag",
        "icon": "🚫",
        "text": [
          "Diese Dinge sind nicht gut:"
        ],
        "bullets": [
          "Beleidigungen",
          "Gerüchte",
          "private Fotos oder Daten"
        ],
        "remember": "Ich verletze andere nicht."
      },
      {
        "module": "Modul 5: Kommentare und Community",
        "title": "Streit oder Ärger",
        "icon": "💬",
        "text": [
          "Manchmal gibt es Streit."
        ],
        "quote": "Du willst etwas Gemeines zurückschreiben.",
        "warning": "Besser: Pause machen. Nicht sofort antworten.",
        "remember": "Erst beruhigen. Dann entscheiden."
      },
      {
        "module": "Modul 5: Kommentare und Community",
        "title": "Übung: Gute Nachricht erkennen",
        "icon": "❓",
        "exercise": {
          "id": "youtubeGut",
          "question": "Danke für das Video. Das hat mir geholfen.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Stopp-Regel",
        "icon": "🛑",
        "text": [
          "Wenn dir etwas komisch vorkommt:"
        ],
        "bullets": [
          "nicht sofort antworten",
          "nichts Privates schicken",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Ich darf Nein sagen",
        "icon": "✋",
        "text": [
          "Du musst nicht antworten.",
          "Du musst nichts schicken.",
          "Du musst keinen Link anklicken."
        ],
        "remember": "Nein sagen ist erlaubt."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Blockieren",
        "icon": "🚫",
        "text": [
          "Du darfst dich schützen."
        ],
        "bullets": [
          "Profil oder Chat öffnen",
          "Blockieren auswählen",
          "danach Hilfe holen, wenn du unsicher bist"
        ],
        "remember": "Blockieren ist erlaubt."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Melden",
        "icon": "🚩",
        "text": [
          "Du kannst problematische Inhalte melden."
        ],
        "bullets": [
          "Inhalt oder Profil öffnen",
          "Melden auswählen",
          "Fachkraft informieren"
        ],
        "remember": "Melden ist Schutz."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Hilfe holen",
        "icon": "🙋",
        "text": [
          "Du musst Probleme nicht allein lösen.",
          "Hilfe holen ist richtig."
        ],
        "bullets": [
          "Fachkraft fragen",
          "vertraute Person fragen",
          "bei akuter Gefahr: Polizei 110"
        ],
        "remember": "Hilfe holen ist stark."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Datenschutz-Hinweis",
        "icon": "🛡️",
        "text": [
          "Diese Lernseite fragt keine privaten Daten ab.",
          "Du musst keinen Namen eingeben.",
          "Im Quiz nimmst du einen Spitznamen."
        ],
        "remember": "Ich bleibe anonym."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Wiederholung",
        "icon": "🔁",
        "text": [
          "Was mache ich bei einem Problem mit YouTube?"
        ],
        "bullets": [
          "nicht sofort reagieren",
          "Beweise nicht vorschnell löschen",
          "Hilfe holen"
        ],
        "remember": "Ich muss das nicht allein klären."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Quiz und Abschluss",
        "icon": "🏁",
        "text": [
          "Gut gemacht.",
          "Du hast wichtige Regeln gelernt.",
          "Jetzt kannst du dein Wissen testen."
        ],
        "bullets": [
          "keinen echten Namen nutzen",
          "Spitznamen nehmen",
          "Quiz zum Üben nutzen"
        ],
        "remember": "Ich hole Hilfe, wenn ich unsicher bin.",
        "quiz": true
      }
    ]
  },
  {
    "id": "snapchat",
    "title": "Snapchat",
    "icon": "👻",
    "desc": "Snaps, Screenshots, Standort und Kontakte",
    "quiz": "https://kahoot.com",
    "lessons": [
      {
        "module": "Modul 1: Snapchat verstehen",
        "title": "Start",
        "icon": "👋",
        "text": [
          "Hier lernst du: Snapchat sicherer nutzen.",
          "Du lernst mit kurzen Seiten.",
          "Am Ende kannst du ein Quiz machen."
        ],
        "remember": "Du bestimmst dein Tempo."
      },
      {
        "module": "Modul 1: Snapchat verstehen",
        "title": "Was ist Snapchat?",
        "icon": "👻",
        "text": [
          "Snapchat ist eine App für Fotos, Videos und Nachrichten.",
          "Dort können Menschen Inhalte sehen oder teilen.",
          "Andere Menschen können mit dir Kontakt haben."
        ],
        "remember": "Snapchat ist ein digitales Angebot."
      },
      {
        "module": "Modul 1: Snapchat verstehen",
        "title": "Was kann ich bei Snapchat machen?",
        "icon": "👻",
        "text": [
          "Bei Snapchat kannst du verschiedene Dinge tun."
        ],
        "bullets": [
          "Snaps senden",
          "Chats schreiben",
          "Storys ansehen"
        ],
        "remember": "Ich entscheide, was ich nutze."
      },
      {
        "module": "Modul 1: Snapchat verstehen",
        "title": "Snapchat im Alltag",
        "icon": "👍",
        "text": [
          "Snapchat kann im Alltag nützlich sein."
        ],
        "bullets": [
          "Kontakt halten",
          "kurze Nachrichten senden",
          "Bilder teilen"
        ],
        "remember": "Ich nutze es bewusst."
      },
      {
        "module": "Modul 1: Snapchat verstehen",
        "title": "Guten Inhalt erkennen",
        "icon": "✅",
        "text": [
          "Ein guter Inhalt ist freundlich, klar und macht keinen Druck."
        ],
        "quote": "Ich melde mich später. Danke.",
        "success": "Das wirkt sicher. Es ist freundlich und ohne Druck.",
        "remember": "Gute Inhalte sind respektvoll."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Modulstart: Private Daten schützen",
        "icon": "🔒",
        "text": [
          "Jetzt geht es um private Daten.",
          "Du lernst, was nicht öffentlich sein sollte.",
          "Du lernst, wann du vorsichtig sein musst."
        ],
        "remember": "Private Daten gehören mir."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Was sind private Daten?",
        "icon": "🔒",
        "text": [
          "Private Daten sind Informationen über dich.",
          "Du sollst sie nicht einfach posten oder verschicken."
        ],
        "bullets": [
          "Adresse und Wohnort",
          "Telefonnummer",
          "Passwörter und PIN-Nummern"
        ],
        "remember": "Meine Daten gehören mir."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Beispiel: Adresse",
        "icon": "📍",
        "text": [
          "Eine fremde Person fragt dich:"
        ],
        "quote": "Wo wohnst du? Schick mir deine Adresse.",
        "warning": "Das ist nicht sicher. Deine Adresse ist privat.",
        "remember": "Meine Adresse bleibt privat."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Beispiel: Passwort",
        "icon": "🔑",
        "text": [
          "Eine Nachricht macht Druck:"
        ],
        "quote": "Gib mir dein Passwort. Ich helfe dir.",
        "warning": "Das ist nicht sicher. Dein Passwort bleibt geheim.",
        "remember": "Mein Passwort bleibt geheim."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Übung: Private Daten erkennen",
        "icon": "❓",
        "exercise": {
          "id": "snapchatPrivat",
          "question": "Nachricht: „Schick mir deine PIN über Snapchat.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "✅",
        "text": [
          "Du darfst Nein sagen.",
          "Du musst keine privaten Daten schicken.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Meine Daten gehören mir."
      },
      {
        "module": "Modul 3: Snaps, Fotos und Standort",
        "title": "Modulstart: Inhalte bewusst teilen",
        "icon": "🖼️",
        "text": [
          "Jetzt geht es um Inhalte.",
          "Inhalte können privat oder öffentlich sein.",
          "Du lernst, worauf du achten musst."
        ],
        "remember": "Ich teile bewusst."
      },
      {
        "module": "Modul 3: Snaps, Fotos und Standort",
        "title": "Inhalte teilen",
        "icon": "📤",
        "text": [
          "Inhalte können gespeichert werden.",
          "Andere können sie weitergeben.",
          "Darum ist Vorsicht wichtig."
        ],
        "remember": "Ich denke nach, bevor ich teile."
      },
      {
        "module": "Modul 3: Snaps, Fotos und Standort",
        "title": "Private Inhalte",
        "icon": "🚫",
        "text": [
          "Manche Inhalte sind sehr privat."
        ],
        "bullets": [
          "private Fotos",
          "Standort",
          "peinliche Snaps"
        ],
        "remember": "Private Inhalte bleiben privat."
      },
      {
        "module": "Modul 3: Snaps, Fotos und Standort",
        "title": "Beispiel: Druck",
        "icon": "⚠️",
        "text": [
          "Eine Person schreibt:"
        ],
        "quote": "Schick mir einen privaten Snap. Ich speichere ihn nicht.",
        "warning": "Das ist ein Warnzeichen. Niemand darf dich unter Druck setzen.",
        "remember": "Ich darf Nein sagen."
      },
      {
        "module": "Modul 3: Snaps, Fotos und Standort",
        "title": "Nachrichten und Kommentare",
        "icon": "💬",
        "text": [
          "Auch Worte können verletzen.",
          "Nachrichten und Kommentare können gespeichert werden.",
          "Darum solltest du vorher überlegen."
        ],
        "remember": "Ich schreibe respektvoll."
      },
      {
        "module": "Modul 3: Snaps, Fotos und Standort",
        "title": "Übung: Inhalt prüfen",
        "icon": "❓",
        "exercise": {
          "id": "snapchatInhalt",
          "question": "Nachricht: „Poste das. Aber sag es niemandem.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 3: Snaps, Fotos und Standort",
        "title": "Merksatz: Ich entscheide",
        "icon": "✅",
        "text": [
          "Ich muss nichts posten.",
          "Ich muss nichts verschicken.",
          "Ich darf Nein sagen."
        ],
        "remember": "Ich entscheide über meine Inhalte."
      },
      {
        "module": "Modul 4: Screenshots, Druck und Betrug",
        "title": "Modulstart: Risiken erkennen",
        "icon": "⚠️",
        "text": [
          "Jetzt geht es um Risiken.",
          "Manche Inhalte sehen harmlos aus.",
          "Trotzdem können sie gefährlich sein."
        ],
        "remember": "Ich prüfe, bevor ich handle."
      },
      {
        "module": "Modul 4: Screenshots, Druck und Betrug",
        "title": "Typische Risiken",
        "icon": "🔎",
        "text": [
          "Snaps können gespeichert werden.",
          "Standort kann privat sein.",
          "Fremde können Druck machen."
        ],
        "remember": "Ich reagiere nicht sofort."
      },
      {
        "module": "Modul 4: Screenshots, Druck und Betrug",
        "title": "Beispiel: Lock-Nachricht",
        "icon": "🎁",
        "text": [
          "Du siehst oder bekommst diese Nachricht:"
        ],
        "quote": "Schalte deinen Standort an. Ich will sehen, wo du bist.",
        "warning": "Das kann Betrug sein. Reagiere nicht sofort.",
        "remember": "Erst prüfen. Dann handeln."
      },
      {
        "module": "Modul 4: Screenshots, Druck und Betrug",
        "title": "Betrug erkennen",
        "icon": "⚠️",
        "text": [
          "Vorsicht, wenn jemand:"
        ],
        "bullets": [
          "dein Passwort will",
          "Geld von dir verlangt",
          "Druck macht"
        ],
        "remember": "Druck ist ein Warnzeichen."
      },
      {
        "module": "Modul 4: Screenshots, Druck und Betrug",
        "title": "Wenn jemand Druck macht",
        "icon": "🛑",
        "text": [
          "Warnzeichen sind:"
        ],
        "bullets": [
          "Mach sofort.",
          "Sag es niemandem.",
          "Sonst passiert etwas."
        ],
        "remember": "Druck bedeutet: Stopp und Hilfe holen."
      },
      {
        "module": "Modul 4: Screenshots, Druck und Betrug",
        "title": "Übung: Risiko prüfen",
        "icon": "❓",
        "exercise": {
          "id": "snapchatRisiko",
          "question": "Nachricht: „Schick den Snap sofort. Sag es niemandem.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 4: Screenshots, Druck und Betrug",
        "title": "Merksatz: Erst prüfen",
        "icon": "✅",
        "text": [
          "Ich reagiere nicht sofort.",
          "Ich prüfe die Nachricht.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Erst prüfen. Dann handeln."
      },
      {
        "module": "Modul 5: Kontakte und Storys",
        "title": "Modulstart: Gutes Verhalten",
        "icon": "👥",
        "text": [
          "Jetzt geht es um Kontakte und Storys.",
          "Viele Menschen können mitlesen.",
          "Darum ist gutes Verhalten wichtig."
        ],
        "remember": "Ich schreibe vorsichtig."
      },
      {
        "module": "Modul 5: Kontakte und Storys",
        "title": "Kontakte und Storys",
        "icon": "👥",
        "text": [
          "Viele Menschen können Inhalte sehen.",
          "Inhalte können schnell weitergegeben werden.",
          "Darum solltest du vorsichtig sein."
        ],
        "remember": "Viele können mitlesen."
      },
      {
        "module": "Modul 5: Kontakte und Storys",
        "title": "Guter Beitrag",
        "icon": "💬",
        "text": [
          "Ein guter Beitrag ist:"
        ],
        "bullets": [
          "freundlich",
          "kurz und verständlich",
          "ohne private Daten"
        ],
        "remember": "Ich schreibe respektvoll."
      },
      {
        "module": "Modul 5: Kontakte und Storys",
        "title": "Schlechter Beitrag",
        "icon": "🚫",
        "text": [
          "Diese Dinge sind nicht gut:"
        ],
        "bullets": [
          "Beleidigungen",
          "Gerüchte",
          "private Fotos oder Daten"
        ],
        "remember": "Ich verletze andere nicht."
      },
      {
        "module": "Modul 5: Kontakte und Storys",
        "title": "Streit oder Ärger",
        "icon": "💬",
        "text": [
          "Manchmal gibt es Streit."
        ],
        "quote": "Du willst etwas Gemeines zurückschreiben.",
        "warning": "Besser: Pause machen. Nicht sofort antworten.",
        "remember": "Erst beruhigen. Dann entscheiden."
      },
      {
        "module": "Modul 5: Kontakte und Storys",
        "title": "Übung: Gute Nachricht erkennen",
        "icon": "❓",
        "exercise": {
          "id": "snapchatGut",
          "question": "Ich melde mich später. Danke.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Stopp-Regel",
        "icon": "🛑",
        "text": [
          "Wenn dir etwas komisch vorkommt:"
        ],
        "bullets": [
          "nicht sofort antworten",
          "nichts Privates schicken",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Ich darf Nein sagen",
        "icon": "✋",
        "text": [
          "Du musst nicht antworten.",
          "Du musst nichts schicken.",
          "Du musst keinen Link anklicken."
        ],
        "remember": "Nein sagen ist erlaubt."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Blockieren",
        "icon": "🚫",
        "text": [
          "Du darfst dich schützen."
        ],
        "bullets": [
          "Profil oder Chat öffnen",
          "Blockieren auswählen",
          "danach Hilfe holen, wenn du unsicher bist"
        ],
        "remember": "Blockieren ist erlaubt."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Melden",
        "icon": "🚩",
        "text": [
          "Du kannst problematische Inhalte melden."
        ],
        "bullets": [
          "Inhalt oder Profil öffnen",
          "Melden auswählen",
          "Fachkraft informieren"
        ],
        "remember": "Melden ist Schutz."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Hilfe holen",
        "icon": "🙋",
        "text": [
          "Du musst Probleme nicht allein lösen.",
          "Hilfe holen ist richtig."
        ],
        "bullets": [
          "Fachkraft fragen",
          "vertraute Person fragen",
          "bei akuter Gefahr: Polizei 110"
        ],
        "remember": "Hilfe holen ist stark."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Datenschutz-Hinweis",
        "icon": "🛡️",
        "text": [
          "Diese Lernseite fragt keine privaten Daten ab.",
          "Du musst keinen Namen eingeben.",
          "Im Quiz nimmst du einen Spitznamen."
        ],
        "remember": "Ich bleibe anonym."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Wiederholung",
        "icon": "🔁",
        "text": [
          "Was mache ich bei einem Problem mit Snapchat?"
        ],
        "bullets": [
          "nicht sofort reagieren",
          "Beweise nicht vorschnell löschen",
          "Hilfe holen"
        ],
        "remember": "Ich muss das nicht allein klären."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Quiz und Abschluss",
        "icon": "🏁",
        "text": [
          "Gut gemacht.",
          "Du hast wichtige Regeln gelernt.",
          "Jetzt kannst du dein Wissen testen."
        ],
        "bullets": [
          "keinen echten Namen nutzen",
          "Spitznamen nehmen",
          "Quiz zum Üben nutzen"
        ],
        "remember": "Ich hole Hilfe, wenn ich unsicher bin.",
        "quiz": true
      }
    ]
  },
  {
    "id": "tiktok",
    "title": "TikTok",
    "icon": "🎵",
    "desc": "Videos, Trends, Kommentare und Algorithmus",
    "quiz": "https://kahoot.com",
    "lessons": [
      {
        "module": "Modul 1: TikTok verstehen",
        "title": "Start",
        "icon": "👋",
        "text": [
          "Hier lernst du: TikTok sicherer nutzen.",
          "Du lernst mit kurzen Seiten.",
          "Am Ende kannst du ein Quiz machen."
        ],
        "remember": "Du bestimmst dein Tempo."
      },
      {
        "module": "Modul 1: TikTok verstehen",
        "title": "Was ist TikTok?",
        "icon": "🎵",
        "text": [
          "TikTok ist eine App für kurze Videos.",
          "Dort können Menschen Inhalte sehen oder teilen.",
          "Andere Menschen können mit dir Kontakt haben."
        ],
        "remember": "TikTok ist ein digitales Angebot."
      },
      {
        "module": "Modul 1: TikTok verstehen",
        "title": "Was kann ich bei TikTok machen?",
        "icon": "🎵",
        "text": [
          "Bei TikTok kannst du verschiedene Dinge tun."
        ],
        "bullets": [
          "Videos ansehen",
          "Videos posten",
          "Kommentare lesen"
        ],
        "remember": "Ich entscheide, was ich nutze."
      },
      {
        "module": "Modul 1: TikTok verstehen",
        "title": "TikTok im Alltag",
        "icon": "👍",
        "text": [
          "TikTok kann im Alltag nützlich sein."
        ],
        "bullets": [
          "kreative Videos sehen",
          "Themen entdecken",
          "Spaß haben"
        ],
        "remember": "Ich nutze es bewusst."
      },
      {
        "module": "Modul 1: TikTok verstehen",
        "title": "Guten Inhalt erkennen",
        "icon": "✅",
        "text": [
          "Ein guter Inhalt ist freundlich, klar und macht keinen Druck."
        ],
        "quote": "Das Video ist hilfreich. Danke.",
        "success": "Das wirkt sicher. Es ist freundlich und ohne Druck.",
        "remember": "Gute Inhalte sind respektvoll."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Modulstart: Private Daten schützen",
        "icon": "🔒",
        "text": [
          "Jetzt geht es um private Daten.",
          "Du lernst, was nicht öffentlich sein sollte.",
          "Du lernst, wann du vorsichtig sein musst."
        ],
        "remember": "Private Daten gehören mir."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Was sind private Daten?",
        "icon": "🔒",
        "text": [
          "Private Daten sind Informationen über dich.",
          "Du sollst sie nicht einfach posten oder verschicken."
        ],
        "bullets": [
          "Adresse und Wohnort",
          "Telefonnummer",
          "Passwörter und PIN-Nummern"
        ],
        "remember": "Meine Daten gehören mir."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Beispiel: Adresse",
        "icon": "📍",
        "text": [
          "Eine fremde Person fragt dich:"
        ],
        "quote": "Wo wohnst du? Schick mir deine Adresse.",
        "warning": "Das ist nicht sicher. Deine Adresse ist privat.",
        "remember": "Meine Adresse bleibt privat."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Beispiel: Passwort",
        "icon": "🔑",
        "text": [
          "Eine Nachricht macht Druck:"
        ],
        "quote": "Gib mir dein Passwort. Ich helfe dir.",
        "warning": "Das ist nicht sicher. Dein Passwort bleibt geheim.",
        "remember": "Mein Passwort bleibt geheim."
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Übung: Private Daten erkennen",
        "icon": "❓",
        "exercise": {
          "id": "tiktokPrivat",
          "question": "Nachricht: „Schick mir deine PIN über TikTok.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 2: Private Daten",
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "✅",
        "text": [
          "Du darfst Nein sagen.",
          "Du musst keine privaten Daten schicken.",
          "Du darfst Hilfe holen."
        ],
        "remember": "Meine Daten gehören mir."
      },
      {
        "module": "Modul 3: Videos, Trends und Kommentare",
        "title": "Modulstart: Inhalte bewusst teilen",
        "icon": "🖼️",
        "text": [
          "Jetzt geht es um Inhalte.",
          "Inhalte können privat oder öffentlich sein.",
          "Du lernst, worauf du achten musst."
        ],
        "remember": "Ich teile bewusst."
      },
      {
        "module": "Modul 3: Videos, Trends und Kommentare",
        "title": "Inhalte teilen",
        "icon": "📤",
        "text": [
          "Inhalte können gespeichert werden.",
          "Andere können sie weitergeben.",
          "Darum ist Vorsicht wichtig."
        ],
        "remember": "Ich denke nach, bevor ich teile."
      },
      {
        "module": "Modul 3: Videos, Trends und Kommentare",
        "title": "Private Inhalte",
        "icon": "🚫",
        "text": [
          "Manche Inhalte sind sehr privat."
        ],
        "bullets": [
          "private Videos",
          "gefährliche Trends",
          "Kommentare mit privaten Daten"
        ],
        "remember": "Private Inhalte bleiben privat."
      },
      {
        "module": "Modul 3: Videos, Trends und Kommentare",
        "title": "Beispiel: Druck",
        "icon": "⚠️",
        "text": [
          "Eine Person schreibt:"
        ],
        "quote": "Mach etwas Gefährliches und poste es.",
        "warning": "Das ist ein Warnzeichen. Niemand darf dich unter Druck setzen.",
        "remember": "Ich darf Nein sagen."
      },
      {
        "module": "Modul 3: Videos, Trends und Kommentare",
        "title": "Nachrichten und Kommentare",
        "icon": "💬",
        "text": [
          "Auch Worte können verletzen.",
          "Nachrichten und Kommentare können gespeichert werden.",
          "Darum solltest du vorher überlegen."
        ],
        "remember": "Ich schreibe respektvoll."
      },
      {
        "module": "Modul 3: Videos, Trends und Kommentare",
        "title": "Übung: Inhalt prüfen",
        "icon": "❓",
        "exercise": {
          "id": "tiktokInhalt",
          "question": "Nachricht: „Poste das. Aber sag es niemandem.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 3: Videos, Trends und Kommentare",
        "title": "Merksatz: Ich entscheide",
        "icon": "✅",
        "text": [
          "Ich muss nichts posten.",
          "Ich muss nichts verschicken.",
          "Ich darf Nein sagen."
        ],
        "remember": "Ich entscheide über meine Inhalte."
      },
      {
        "module": "Modul 4: Trends, Werbung und Betrug",
        "title": "Modulstart: Risiken erkennen",
        "icon": "⚠️",
        "text": [
          "Jetzt geht es um Risiken.",
          "Manche Inhalte sehen harmlos aus.",
          "Trotzdem können sie gefährlich sein."
        ],
        "remember": "Ich prüfe, bevor ich handle."
      },
      {
        "module": "Modul 4: Trends, Werbung und Betrug",
        "title": "Typische Risiken",
        "icon": "🔎",
        "text": [
          "Manche Trends sind gefährlich.",
          "Manche Werbung täuscht.",
          "Manche Videos machen Druck."
        ],
        "remember": "Ich reagiere nicht sofort."
      },
      {
        "module": "Modul 4: Trends, Werbung und Betrug",
        "title": "Beispiel: Lock-Nachricht",
        "icon": "🎁",
        "text": [
          "Du siehst oder bekommst diese Nachricht:"
        ],
        "quote": "Mach diesen gefährlichen Trend. Poste es sofort.",
        "warning": "Das kann Betrug sein. Reagiere nicht sofort.",
        "remember": "Erst prüfen. Dann handeln."
      },
      {
        "module": "Modul 4: Trends, Werbung und Betrug",
        "title": "Betrug erkennen",
        "icon": "⚠️",
        "text": [
          "Vorsicht, wenn jemand:"
        ],
        "bullets": [
          "dein Passwort will",
          "Geld von dir verlangt",
          "Druck macht"
        ],
        "remember": "Druck ist ein Warnzeichen."
      },
      {
        "module": "Modul 4: Trends, Werbung und Betrug",
        "title": "Wenn jemand Druck macht",
        "icon": "🛑",
        "text": [
          "Warnzeichen sind:"
        ],
        "bullets": [
          "Mach sofort.",
          "Sag es niemandem.",
          "Sonst passiert etwas."
        ],
        "remember": "Druck bedeutet: Stopp und Hilfe holen."
      },
      {
        "module": "Modul 4: Trends, Werbung und Betrug",
        "title": "Übung: Risiko prüfen",
        "icon": "❓",
        "exercise": {
          "id": "tiktokRisiko",
          "question": "Video: „Mach sofort mit. Sonst bist du langweilig.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 4: Trends, Werbung und Betrug",
        "title": "Merksatz: Erst prüfen",
        "icon": "✅",
        "text": [
          "Ich reagiere nicht sofort.",
          "Ich prüfe die Nachricht.",
          "Ich frage nach, wenn ich unsicher bin."
        ],
        "remember": "Erst prüfen. Dann handeln."
      },
      {
        "module": "Modul 5: Kommentare und Trends",
        "title": "Modulstart: Gutes Verhalten",
        "icon": "👥",
        "text": [
          "Jetzt geht es um Kommentare und Trends.",
          "Viele Menschen können mitlesen.",
          "Darum ist gutes Verhalten wichtig."
        ],
        "remember": "Ich schreibe vorsichtig."
      },
      {
        "module": "Modul 5: Kommentare und Trends",
        "title": "Kommentare und Trends",
        "icon": "👥",
        "text": [
          "Viele Menschen können Inhalte sehen.",
          "Inhalte können schnell weitergegeben werden.",
          "Darum solltest du vorsichtig sein."
        ],
        "remember": "Viele können mitlesen."
      },
      {
        "module": "Modul 5: Kommentare und Trends",
        "title": "Guter Beitrag",
        "icon": "💬",
        "text": [
          "Ein guter Beitrag ist:"
        ],
        "bullets": [
          "freundlich",
          "kurz und verständlich",
          "ohne private Daten"
        ],
        "remember": "Ich schreibe respektvoll."
      },
      {
        "module": "Modul 5: Kommentare und Trends",
        "title": "Schlechter Beitrag",
        "icon": "🚫",
        "text": [
          "Diese Dinge sind nicht gut:"
        ],
        "bullets": [
          "Beleidigungen",
          "Gerüchte",
          "private Fotos oder Daten"
        ],
        "remember": "Ich verletze andere nicht."
      },
      {
        "module": "Modul 5: Kommentare und Trends",
        "title": "Streit oder Ärger",
        "icon": "💬",
        "text": [
          "Manchmal gibt es Streit."
        ],
        "quote": "Du willst etwas Gemeines zurückschreiben.",
        "warning": "Besser: Pause machen. Nicht sofort antworten.",
        "remember": "Erst beruhigen. Dann entscheiden."
      },
      {
        "module": "Modul 5: Kommentare und Trends",
        "title": "Übung: Gute Nachricht erkennen",
        "icon": "❓",
        "exercise": {
          "id": "tiktokGut",
          "question": "Das Video ist hilfreich. Danke.",
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
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Stopp-Regel",
        "icon": "🛑",
        "text": [
          "Wenn dir etwas komisch vorkommt:"
        ],
        "bullets": [
          "nicht sofort antworten",
          "nichts Privates schicken",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Ich darf Nein sagen",
        "icon": "✋",
        "text": [
          "Du musst nicht antworten.",
          "Du musst nichts schicken.",
          "Du musst keinen Link anklicken."
        ],
        "remember": "Nein sagen ist erlaubt."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Blockieren",
        "icon": "🚫",
        "text": [
          "Du darfst dich schützen."
        ],
        "bullets": [
          "Profil oder Chat öffnen",
          "Blockieren auswählen",
          "danach Hilfe holen, wenn du unsicher bist"
        ],
        "remember": "Blockieren ist erlaubt."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Melden",
        "icon": "🚩",
        "text": [
          "Du kannst problematische Inhalte melden."
        ],
        "bullets": [
          "Inhalt oder Profil öffnen",
          "Melden auswählen",
          "Fachkraft informieren"
        ],
        "remember": "Melden ist Schutz."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Hilfe holen",
        "icon": "🙋",
        "text": [
          "Du musst Probleme nicht allein lösen.",
          "Hilfe holen ist richtig."
        ],
        "bullets": [
          "Fachkraft fragen",
          "vertraute Person fragen",
          "bei akuter Gefahr: Polizei 110"
        ],
        "remember": "Hilfe holen ist stark."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Datenschutz-Hinweis",
        "icon": "🛡️",
        "text": [
          "Diese Lernseite fragt keine privaten Daten ab.",
          "Du musst keinen Namen eingeben.",
          "Im Quiz nimmst du einen Spitznamen."
        ],
        "remember": "Ich bleibe anonym."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Wiederholung",
        "icon": "🔁",
        "text": [
          "Was mache ich bei einem Problem mit TikTok?"
        ],
        "bullets": [
          "nicht sofort reagieren",
          "Beweise nicht vorschnell löschen",
          "Hilfe holen"
        ],
        "remember": "Ich muss das nicht allein klären."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Quiz und Abschluss",
        "icon": "🏁",
        "text": [
          "Gut gemacht.",
          "Du hast wichtige Regeln gelernt.",
          "Jetzt kannst du dein Wissen testen."
        ],
        "bullets": [
          "keinen echten Namen nutzen",
          "Spitznamen nehmen",
          "Quiz zum Üben nutzen"
        ],
        "remember": "Ich hole Hilfe, wenn ich unsicher bin.",
        "quiz": true
      }
    ]
  },
  {
    "id": "hilfe",
    "title": "Hilfe bei Problemen",
    "icon": "🙋",
    "desc": "Stopp-Regel, Beweise sichern, Hilfe holen",
    "quiz": "https://kahoot.com",
    "lessons": [
      {
        "module": "Modul 1: Probleme erkennen",
        "title": "Start",
        "icon": "👋",
        "text": [
          "Hier lernst du, was du bei digitalen Problemen tun kannst.",
          "Du musst Probleme nicht allein lösen.",
          "Du lernst klare Schritte."
        ],
        "remember": "Hilfe holen ist richtig."
      },
      {
        "module": "Modul 1: Probleme erkennen",
        "title": "Was ist ein digitales Problem?",
        "icon": "⚠️",
        "text": [
          "Ein digitales Problem ist etwas, das dir Angst macht oder dich belastet.",
          "Es kann in Apps, Nachrichten oder Internet-Seiten passieren."
        ],
        "remember": "Ich nehme mein Gefühl ernst."
      },
      {
        "module": "Modul 1: Probleme erkennen",
        "title": "Welche Probleme gibt es?",
        "icon": "📱",
        "text": [
          "Digitale Probleme können verschieden sein."
        ],
        "bullets": [
          "Beleidigung oder Druck",
          "Betrug oder komische Links",
          "private Fotos oder Daten"
        ],
        "remember": "Probleme darf man ernst nehmen."
      },
      {
        "module": "Modul 1: Probleme erkennen",
        "title": "Probleme im Alltag",
        "icon": "🙋",
        "text": [
          "Ein Problem kann plötzlich entstehen.",
          "Dann ist es wichtig, ruhig zu bleiben.",
          "Du musst nicht sofort reagieren."
        ],
        "remember": "Langsam ist sicherer."
      },
      {
        "module": "Modul 1: Probleme erkennen",
        "title": "Gute Reaktion erkennen",
        "icon": "✅",
        "text": [
          "Eine gute Reaktion schützt dich."
        ],
        "quote": "Ich antworte nicht sofort. Ich frage erst eine Fachkraft.",
        "success": "Das ist eine sichere Entscheidung.",
        "remember": "Erst Hilfe holen, dann entscheiden."
      },
      {
        "module": "Modul 2: Private Daten und Sicherheit",
        "title": "Modulstart: Private Daten schützen",
        "icon": "🔒",
        "text": [
          "Bei Problemen sind private Daten besonders wichtig.",
          "Du lernst, was du nicht weitergeben sollst."
        ],
        "remember": "Private Daten bleiben privat."
      },
      {
        "module": "Modul 2: Private Daten und Sicherheit",
        "title": "Was sind private Daten?",
        "icon": "🔒",
        "text": [
          "Private Daten sind Informationen über dich."
        ],
        "bullets": [
          "Adresse",
          "Passwort",
          "Fotos und Standort"
        ],
        "remember": "Meine Daten gehören mir."
      },
      {
        "module": "Modul 2: Private Daten und Sicherheit",
        "title": "Beispiel: Adresse",
        "icon": "📍",
        "text": [
          "Jemand macht Druck:"
        ],
        "quote": "Sag mir, wo du wohnst. Sonst erzähle ich etwas über dich.",
        "warning": "Das ist Druck. Gib deine Adresse nicht weiter.",
        "remember": "Meine Adresse bleibt privat."
      },
      {
        "module": "Modul 2: Private Daten und Sicherheit",
        "title": "Beispiel: Passwort",
        "icon": "🔑",
        "text": [
          "Jemand verlangt Zugang:"
        ],
        "quote": "Gib mir dein Passwort. Dann höre ich auf.",
        "warning": "Das ist nicht sicher. Ein Passwort bleibt geheim.",
        "remember": "Mein Passwort bleibt geheim."
      },
      {
        "module": "Modul 2: Private Daten und Sicherheit",
        "title": "Übung: Private Daten erkennen",
        "icon": "❓",
        "exercise": {
          "id": "hilfePrivat",
          "question": "Nachricht: „Schick mir dein Passwort, dann helfe ich dir.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
              "text": "Ein Passwort ist privat. Gib es nicht weiter."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Ein Passwort ist privat. Gib es nicht weiter."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 2: Private Daten und Sicherheit",
        "title": "Merksatz: Meine Daten gehören mir",
        "icon": "✅",
        "text": [
          "Ich gebe keine Passwörter weiter.",
          "Ich gebe keine Adresse unter Druck weiter.",
          "Ich hole Hilfe."
        ],
        "remember": "Meine Daten gehören mir."
      },
      {
        "module": "Modul 3: Nachrichten, Fotos und Beweise",
        "title": "Modulstart: Nachrichten und Beweise",
        "icon": "📌",
        "text": [
          "Jetzt geht es um Nachrichten und Beweise.",
          "Manchmal ist es wichtig, etwas zeigen zu können."
        ],
        "remember": "Ich sichere Hilfe, nicht heimlich."
      },
      {
        "module": "Modul 3: Nachrichten, Fotos und Beweise",
        "title": "Problem-Nachrichten",
        "icon": "💬",
        "text": [
          "Problem-Nachrichten können Angst machen.",
          "Du musst nicht sofort antworten."
        ],
        "remember": "Nicht sofort reagieren."
      },
      {
        "module": "Modul 3: Nachrichten, Fotos und Beweise",
        "title": "Private Fotos",
        "icon": "🖼️",
        "text": [
          "Private Fotos können Druck erzeugen."
        ],
        "bullets": [
          "keine intimen Fotos schicken",
          "nicht unter Druck antworten",
          "Hilfe holen"
        ],
        "remember": "Private Fotos gehören mir."
      },
      {
        "module": "Modul 3: Nachrichten, Fotos und Beweise",
        "title": "Beispiel: Foto mit Druck",
        "icon": "⚠️",
        "text": [
          "Jemand schreibt:"
        ],
        "quote": "Schick mir ein Foto. Sag es niemandem.",
        "warning": "Das ist ein Warnzeichen. Hole Hilfe.",
        "remember": "Ich darf Nein sagen."
      },
      {
        "module": "Modul 3: Nachrichten, Fotos und Beweise",
        "title": "Beweise sichern",
        "icon": "📌",
        "text": [
          "Manchmal ist es wichtig, eine Nachricht zu zeigen."
        ],
        "bullets": [
          "nicht vorschnell löschen",
          "Screenshot nur mit Unterstützung",
          "Fachkraft informieren"
        ],
        "remember": "Ich sichere Beweise mit Hilfe."
      },
      {
        "module": "Modul 3: Nachrichten, Fotos und Beweise",
        "title": "Übung: Nachricht prüfen",
        "icon": "❓",
        "exercise": {
          "id": "hilfeBeweis",
          "question": "Nachricht: „Lösch alles und sag niemandem davon.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
              "text": "Das ist ein Warnzeichen. Nicht allein löschen. Hilfe holen."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das ist ein Warnzeichen. Nicht allein löschen. Hilfe holen."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 3: Nachrichten, Fotos und Beweise",
        "title": "Merksatz: Ich entscheide",
        "icon": "✅",
        "text": [
          "Ich muss nicht antworten.",
          "Ich darf Beweise zeigen.",
          "Ich darf Hilfe holen."
        ],
        "remember": "Ich bin nicht allein."
      },
      {
        "module": "Modul 4: Druck, Drohung und Betrug",
        "title": "Modulstart: Druck und Drohung",
        "icon": "🚨",
        "text": [
          "Jetzt geht es um starke Warnzeichen.",
          "Druck und Drohung sind nicht okay."
        ],
        "remember": "Druck bedeutet: Hilfe holen."
      },
      {
        "module": "Modul 4: Druck, Drohung und Betrug",
        "title": "Druck erkennen",
        "icon": "🛑",
        "text": [
          "Druck klingt oft so:"
        ],
        "bullets": [
          "Mach sofort.",
          "Sag es niemandem.",
          "Sonst passiert etwas."
        ],
        "remember": "Druck ist ein Warnzeichen."
      },
      {
        "module": "Modul 4: Druck, Drohung und Betrug",
        "title": "Beispiel: Drohung",
        "icon": "⚠️",
        "text": [
          "Du bekommst diese Nachricht:"
        ],
        "quote": "Wenn du nicht antwortest, passiert etwas Schlimmes.",
        "warning": "Das ist eine Drohung. Hole sofort Hilfe.",
        "remember": "Drohungen muss ich zeigen."
      },
      {
        "module": "Modul 4: Druck, Drohung und Betrug",
        "title": "Betrug erkennen",
        "icon": "🔎",
        "text": [
          "Vorsicht, wenn jemand:"
        ],
        "bullets": [
          "Geld verlangt",
          "Passwörter will",
          "Angst macht"
        ],
        "remember": "Angst machen ist ein Warnzeichen."
      },
      {
        "module": "Modul 4: Druck, Drohung und Betrug",
        "title": "Wenn jemand Geheimhaltung verlangt",
        "icon": "🤫",
        "text": [
          "Ein Warnzeichen ist:"
        ],
        "bullets": [
          "Sag es niemandem.",
          "Das bleibt unser Geheimnis.",
          "Du bekommst sonst Ärger."
        ],
        "remember": "Geheimhaltungs-Druck ist gefährlich."
      },
      {
        "module": "Modul 4: Druck, Drohung und Betrug",
        "title": "Übung: Risiko prüfen",
        "icon": "❓",
        "exercise": {
          "id": "hilfeRisk",
          "question": "Nachricht: „Sag niemandem davon. Sonst passiert etwas.“",
          "feedback": {
            "safe": {
              "type": "warning",
              "title": "Nicht ganz.",
              "text": "Das ist Druck und eine Drohung. Hole Hilfe."
            },
            "unsafe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das ist Druck und eine Drohung. Hole Hilfe."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 4: Druck, Drohung und Betrug",
        "title": "Merksatz: Erst Hilfe holen",
        "icon": "✅",
        "text": [
          "Ich bleibe nicht allein.",
          "Ich zeige die Nachricht.",
          "Ich hole Unterstützung."
        ],
        "remember": "Erst Hilfe holen. Dann handeln."
      },
      {
        "module": "Modul 5: Hilfewege und gutes Verhalten",
        "title": "Modulstart: Hilfewege",
        "icon": "👥",
        "text": [
          "Jetzt geht es um Menschen, die helfen können.",
          "Du darfst dir Unterstützung suchen."
        ],
        "remember": "Hilfe ist erlaubt."
      },
      {
        "module": "Modul 5: Hilfewege und gutes Verhalten",
        "title": "Wer kann helfen?",
        "icon": "👥",
        "text": [
          "Du kannst verschiedene Menschen fragen."
        ],
        "bullets": [
          "Fachkraft",
          "vertraute Person",
          "Angehörige oder gesetzliche Betreuung"
        ],
        "remember": "Ich suche mir Unterstützung."
      },
      {
        "module": "Modul 5: Hilfewege und gutes Verhalten",
        "title": "Gute Hilfe-Nachricht",
        "icon": "💬",
        "text": [
          "Eine gute Hilfe-Nachricht ist klar."
        ],
        "quote": "Ich brauche Hilfe. Kannst du bitte mit mir schauen?",
        "success": "Das ist gut. Du sagst klar, dass du Hilfe brauchst.",
        "remember": "Ich darf um Hilfe bitten."
      },
      {
        "module": "Modul 5: Hilfewege und gutes Verhalten",
        "title": "Was hilft nicht?",
        "icon": "🚫",
        "text": [
          "Das hilft meistens nicht:"
        ],
        "bullets": [
          "allein weiterstreiten",
          "aus Angst zahlen",
          "Beweise sofort löschen"
        ],
        "remember": "Ich handle nicht aus Angst."
      },
      {
        "module": "Modul 5: Hilfewege und gutes Verhalten",
        "title": "Wenn ich mich schäme",
        "icon": "💬",
        "text": [
          "Scham ist verständlich.",
          "Trotzdem darfst du Hilfe holen.",
          "Fachkräfte sollen dich unterstützen."
        ],
        "remember": "Ich darf über Probleme sprechen."
      },
      {
        "module": "Modul 5: Hilfewege und gutes Verhalten",
        "title": "Übung: Gute Hilfe erkennen",
        "icon": "❓",
        "exercise": {
          "id": "hilfeGut",
          "question": "Satz: „Ich brauche Hilfe. Ich zeige dir die Nachricht.“",
          "feedback": {
            "safe": {
              "type": "success",
              "title": "Richtig.",
              "text": "Das wirkt sicher. Du holst Unterstützung."
            },
            "unsafe": {
              "type": "warning",
              "title": "Nicht ganz.",
              "text": "Das wirkt sicher. Du holst Unterstützung."
            },
            "help": {
              "type": "info",
              "title": "Gute Entscheidung.",
              "text": "Hilfe holen ist immer erlaubt. Du musst das nicht allein entscheiden."
            }
          }
        }
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Stopp-Regel",
        "icon": "🛑",
        "text": [
          "Wenn dir etwas komisch vorkommt:"
        ],
        "bullets": [
          "nicht sofort antworten",
          "nichts Privates schicken",
          "Hilfe holen"
        ],
        "remember": "Stopp. Prüfen. Hilfe holen."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Ich darf Nein sagen",
        "icon": "✋",
        "text": [
          "Du musst nicht antworten.",
          "Du musst nichts schicken.",
          "Du musst keinen Link anklicken."
        ],
        "remember": "Nein sagen ist erlaubt."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Blockieren",
        "icon": "🚫",
        "text": [
          "Du darfst dich schützen."
        ],
        "bullets": [
          "Profil oder Chat öffnen",
          "Blockieren auswählen",
          "danach Hilfe holen, wenn du unsicher bist"
        ],
        "remember": "Blockieren ist erlaubt."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Melden",
        "icon": "🚩",
        "text": [
          "Du kannst problematische Inhalte melden."
        ],
        "bullets": [
          "Inhalt oder Profil öffnen",
          "Melden auswählen",
          "Fachkraft informieren"
        ],
        "remember": "Melden ist Schutz."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Hilfe holen",
        "icon": "🙋",
        "text": [
          "Du musst Probleme nicht allein lösen.",
          "Hilfe holen ist richtig."
        ],
        "bullets": [
          "Fachkraft fragen",
          "vertraute Person fragen",
          "bei akuter Gefahr: Polizei 110"
        ],
        "remember": "Hilfe holen ist stark."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Datenschutz-Hinweis",
        "icon": "🛡️",
        "text": [
          "Diese Lernseite fragt keine privaten Daten ab.",
          "Du musst keinen Namen eingeben.",
          "Im Quiz nimmst du einen Spitznamen."
        ],
        "remember": "Ich bleibe anonym."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Wiederholung",
        "icon": "🔁",
        "text": [
          "Was mache ich bei einem Problem mit digitalen Problemen?"
        ],
        "bullets": [
          "nicht sofort reagieren",
          "Beweise nicht vorschnell löschen",
          "Hilfe holen"
        ],
        "remember": "Ich muss das nicht allein klären."
      },
      {
        "module": "Modul 6: Schutz und Hilfe",
        "title": "Quiz und Abschluss",
        "icon": "🏁",
        "text": [
          "Gut gemacht.",
          "Du hast wichtige Regeln gelernt.",
          "Jetzt kannst du dein Wissen testen."
        ],
        "bullets": [
          "keinen echten Namen nutzen",
          "Spitznamen nehmen",
          "Quiz zum Üben nutzen"
        ],
        "remember": "Ich hole Hilfe, wenn ich unsicher bin.",
        "quiz": true
      }
    ]
  }
];
