const topics = [
  {
    "id": "datenschutz",
    "title": "Datenschutz",
    "icon": "lock",
    "desc": "Private Daten schützen",
    "transfer": "Schau heute bei einer App nach: Was darf sie sehen? Braucht sie das? Du musst nichts ändern. Du entscheidest selbst.",
    "selfAssessment": {
      "question": "Was weißt du schon über den Schutz deiner Daten?",
      "pictogram": "pikto-lock",
      "options": [
        "Noch nicht so viel",
        "Ein bisschen",
        "Schon einiges"
      ]
    },
    "vorhersage": {
      "situation": {
        "leicht": "Du lädst eine neue App: Foto-Spaß. Mit der App machst du Fotos schöner. Die App fragt: Darf ich deine Fotos sehen? Deinen Standort? Deine Kontakte?",
        "einfach": "Du lädst eine neue App herunter: Foto-Spaß. Mit der App kannst du deine Fotos schöner machen. Die App fragt, ob sie deine Fotos, deinen Standort und deine Kontakte sehen darf.",
        "standard": "Du installierst die App Foto-Spaß, mit der du Fotos verschönern kannst. Sie möchte auf deine Fotos, deinen Standort und deine Kontakte zugreifen."
      },
      "question": {
        "leicht": "Was machst du?",
        "einfach": "Was machst du jetzt?",
        "standard": "Wie entscheidest du?"
      },
      "options": [
        { "leicht": "Ich erlaube alles.", "einfach": "Ich erlaube alles.", "standard": "Ich erlaube alles." },
        { "leicht": "Ich erlaube nichts.", "einfach": "Ich erlaube gar nichts.", "standard": "Ich erlaube nichts." },
        { "leicht": "Ich prüfe jede Frage einzeln.", "einfach": "Ich prüfe jede Frage einzeln.", "standard": "Ich prüfe jede Anfrage einzeln." }
      ],
      "aufloesung": {
        "leicht": "So kannst du entscheiden: Fotos: nötig. Die App macht ja Fotos schöner. Kontakte: nicht nötig. Die braucht sie dafür nicht. Standort: kommt darauf an. Willst du den Ort beim Foto sehen? Sonst braucht die App ihn nicht.",
        "einfach": "So kannst du entscheiden: Die Fotos sind nötig, denn die App soll ja Fotos schöner machen. Die Kontakte sind nicht nötig, weil die App sie dafür nicht braucht. Beim Standort kommt es darauf an: Willst du sehen, wo ein Foto gemacht wurde? Sonst braucht die App ihn nicht.",
        "standard": "So kannst du entscheiden: Fotos – nötig, denn die App soll sie ja verschönern. Kontakte – nicht nötig, dafür braucht die App sie nicht. Standort – hängt davon ab, ob du sehen willst, wo ein Foto entstanden ist; sonst braucht die App ihn nicht."
      },
      "pictogram": "pikto-phone"
    },
    "learningGoals": [
      "Was private Daten sind",
      "Welche Daten wirklich nötig sind",
      "Jemand fragt nach deinen Daten? Du entscheidest selbst."
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "lock",
        "text": [
          {
            "text": "Eine App will Daten von dir. Oder ein Formular im Internet.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Oder du willst selbst etwas teilen. Zum Beispiel ein Foto.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Manche Daten sind dafür nötig. Manche nicht.",
            "pictogram": "pikto-search"
          },
          {
            "text": "Du lernst einen Plan mit 5 Schritten. Mit dem Plan prüfst du. Und du entscheidest selbst.",
            "pictogram": "pikto-plan"
          },
          {
            "text": "Du bist unsicher? Dann tippe oben auf: Hilfe.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-lock"
      },
      {
        "title": "Deine Daten",
        "module": "Deine Daten",
        "icon": "data",
        "ketteSchritt": 3,
        "text": [
          {
            "text": "Deine Daten sagen etwas über dich.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Zum Beispiel dein Name, deine Adresse und deine Telefon-Nummer.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Auch dein Geburts-Datum, deine Fotos und deine Kontakte.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Und dein Standort. Der Standort zeigt: Hier bist du gerade.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Dein Passwort und deine PIN sind geheim.",
            "pictogram": "pikto-key"
          }
        ],
        "warning": "Manche Daten sind besonders wichtig. Zum Beispiel deine Gesundheit, deine Bank-Daten und dein Ausweis. Mit diesen Daten kann dir jemand sehr schaden. Hier prüfst du besonders genau.",
        "examples": [
          {
            "art": "B",
            "text": "Deine Ärztin fragt: Was tut dir weh? Du sagst es ihr. Sie braucht das für die Behandlung."
          },
          {
            "art": "A",
            "text": "Ein Quiz im Internet fragt nach deinen Krankheiten. Für ein Quiz braucht es die nicht."
          }
        ],
        "remember": "Private Daten gehören zu mir.",
        "practice": {
          "nachFehler": true,
          "art": "B",
          "pruefziel": "Besonders wichtige Daten erkennen – und geben, wenn der Zweck es braucht (Was? Wofür?)",
          "question": "Du fängst eine neue Arbeit an. Die Firma will deine Konto-Nummer. Sie will dir deinen Lohn überweisen. Was machst du?",
          "pictogram": "pikto-bank",
          "hinweis": "Überlege: Wer will die Nummer? Und wofür?",
          "answers": [
            "Ich gebe die Konto-Nummer. Die Firma braucht sie für meinen Lohn.",
            "Ich gebe die Konto-Nummer nicht. Bank-Daten sind besonders wichtig.",
            "Ich gebe die Konto-Nummer. Und ein Foto von meiner Bank-Karte. Dann geht es schneller."
          ],
          "correctIndex": 0,
          "feedbackCorrect": "Genau. Die Konto-Nummer ist wichtig. Aber die Firma braucht sie für deinen Lohn. Du kennst die Firma. Dann gibst du sie.",
          "feedbackWrong": [
            null,
            "Bank-Daten sind wichtig. Aber hier gibt es einen klaren Zweck: deinen Lohn. Ohne Konto-Nummer bekommst du kein Geld. Private Daten heißt nicht: immer Nein.",
            "Die Firma braucht nur die Konto-Nummer. Ein Foto von deiner Bank-Karte braucht sie nicht. Mit dem Foto kann jemand mit deiner Karte bezahlen."
          ],
          "remember": "Ich gebe nur nötige Daten weiter."
        },
        "pictogram": "pikto-data"
      },
      {
        "title": "Wer will deine Daten?",
        "module": "Deine Daten",
        "icon": "understand",
        "ketteSchritt": 2,
        "text": [
          {
            "text": "Viele wollen deine Daten. Warum?",
            "pictogram": "pikto-people"
          },
          {
            "text": "Manche brauchen sie. Zum Beispiel für ein Paket.",
            "pictogram": "pikto-house"
          },
          {
            "text": "Manche verdienen Geld mit deinen Daten. Zum Beispiel mit Werbung.",
            "pictogram": "pikto-money"
          },
          {
            "text": "Manche wollen dich betrügen.",
            "pictogram": "pikto-fraud"
          },
          {
            "text": "Darum prüfst du: Wer bekommt meine Daten? Kenne ich den?",
            "pictogram": "pikto-search"
          }
        ],
        "examples": [
          {
            "art": "B",
            "text": "Du meldest dich im Sport-Verein an. Der Verein braucht deinen Namen und deine Adresse."
          },
          {
            "art": "A",
            "text": "Eine fremde SMS will deine Adresse. Sie sagt: Dein Paket wartet. Du hast aber nichts bestellt."
          }
        ],
        "remember": "Ich prüfe: Wer bekommt meine Daten?",
        "vorbildWer": "Alex",
        "vorbild": [
          "Ein Gewinn-Spiel im Internet will die Adresse von Alex.",
          "Und seine Telefon-Nummer.",
          "Alex prüft: Wer will das? Und wofür?",
          "Er kennt die Seite nicht.",
          "Für ein Spiel braucht sie seine Daten nicht.",
          "Er gibt sie nicht ein."
        ],
        "practice": {
          "nachFehler": true,
          "art": "B",
          "pruefziel": "Wer bekommt es? Bekannt und erwartet – oder fremd?",
          "question": "Wer darf dein Geburts-Datum bekommen?",
          "pictogram": "pikto-birthday",
          "hinweis": "Überlege: Wen kennst du? Wer braucht es wirklich?",
          "answers": [
            "Eine fremde Person im Chat. Sie will dir zum Geburtstag gratulieren.",
            "Deine Kranken-Kasse. Du hast dort selbst angerufen.",
            "Eine Seite im Internet. Sie verspricht dir ein Geschenk."
          ],
          "correctIndex": 1,
          "feedbackCorrect": "Genau. Deine Kranken-Kasse kennst du. Du hast selbst angerufen. Sie braucht dein Geburts-Datum. So erkennt sie dich. Die anderen kennst du nicht.",
          "feedbackWrong": [
            "Die Person kennst du nicht. Du weißt nicht: Wer ist das wirklich? Für einen Gruß braucht sie dein Geburts-Datum nicht.",
            null,
            "Die Seite kennst du nicht. Für ein Geschenk braucht sie dein Geburts-Datum nicht. Manche wollen so an deine Daten."
          ],
          "remember": "Ich prüfe: Wer bekommt meine Daten?"
        },
        "pictogram": "pikto-person"
      },
      {
        "title": "Nötig oder freiwillig?",
        "module": "Nötig oder nicht?",
        "icon": "check",
        "ketteSchritt": [
          4,
          5
        ],
        "text": [
          {
            "text": "Im Internet füllst du oft ein Formular aus. Zum Beispiel bei einer Anmeldung.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Manche Felder sind Pflicht. Ohne sie geht es nicht weiter.",
            "pictogram": "pikto-warning"
          },
          {
            "text": "Manche Felder sind freiwillig. Die darfst du leer lassen.",
            "pictogram": "pikto-done"
          },
          {
            "text": "Du prüfst: Wofür brauchen die das?",
            "pictogram": "pikto-search"
          },
          {
            "text": "Ein Pflicht-Feld passt gar nicht? Dann musst du dich dort nicht anmelden.",
            "pictogram": "pikto-no"
          }
        ],
        "examples": [
          {
            "art": "B",
            "text": "Du bestellst in einem Shop. Du kennst den Shop. Er braucht deine Adresse für das Paket."
          },
          {
            "art": "A",
            "text": "Beim Bestellen fragt der Shop nach deinem Geburts-Datum. Das Feld ist freiwillig. Du lässt es leer."
          },
          {
            "art": "C",
            "text": "Der Shop fragt: Willst du Werbung per E-Mail? Das entscheidest du selbst."
          }
        ],
        "remember": "Ich gebe nur nötige Daten weiter.",
        "vorbildWer": "Tilda",
        "vorbild": [
          "Tilda meldet sich im Internet bei der Bücherei an.",
          "Das Formular fragt nach ihrem Namen und ihrer Adresse. Das ist Pflicht.",
          "Tilda prüft: Wofür? Die Bücherei braucht das für den Ausweis. Das ist nötig.",
          "Die Telefon-Nummer ist freiwillig.",
          "Tilda lässt das Feld leer."
        ],
        "practice": {
          "typ": "felder",
          "nachFehler": true,
          "remember": "Ich gebe nur nötige Daten weiter.",
          "question": "Was gibst du bei der Fitness-App an?",
          "art": "A+B+C",
          "pruefziel": "Pflicht, freiwillig und Zweck getrennt prüfen: Was passt zu meinem Ziel?",
          "hinweis": "Überlege: Was willst du mit der App? Welche Angaben passen dazu? Welche Felder sind freiwillig? Du kannst auch erst prüfen.",
          "situation": {
            "leicht": "Du willst eine Fitness-App nutzen. Sie zählt deine Schritte. Und sie zeigt: So viele Kalorien hast du verbraucht. Das willst du sehen. Für die App brauchst du ein Konto."
          },
          "formular": {
            "titel": "Fitness-App: Konto anlegen"
          },
          "felder": [
            {
              "name": "E-Mail",
              "pflicht": true,
              "zweck": "passt",
              "wofuer": "Für dein Konto. Mit der E-Mail meldest du dich an.",
              "rueckmeldung": {
                "angegeben": "Pflicht heißt nur: Ohne E-Mail geht es nicht weiter. Hier passt sie auch zum Zweck. Mit der E-Mail meldest du dich in deinem Konto an.",
                "leer": "Pflicht heißt: Ohne E-Mail geht es nicht weiter. Die E-Mail passt hier zum Zweck. Willst du die App nutzen? Dann gib sie an. Sonst nutzt du die App nicht."
              }
            },
            {
              "name": "Gewicht",
              "pflicht": false,
              "zweck": "deine-wahl",
              "sensibel": true,
              "wofuer": "Mit dem Gewicht berechnen wir deine Kalorien.",
              "rueckmeldung": {
                "angegeben": "Das Feld ist freiwillig. Du willst deine Kalorien sehen. Dafür braucht die App dein Gewicht. Das passt zu deinem Ziel.",
                "leer": "Das Feld ist freiwillig. Du kannst Nein sagen. Dann bekommt die App dein Gewicht nicht. Deine Kalorien kann sie dann vielleicht nicht berechnen. Die Schritte zählt sie trotzdem. Du entscheidest."
              }
            },
            {
              "name": "Telefon-Nummer",
              "pflicht": false,
              "zweck": "passt-nicht",
              "wofuer": "Für Angebote per SMS.",
              "rueckmeldung": {
                "angegeben": "Das Feld ist freiwillig. Die Nummer ist nur für Werbung. Für Schritte und Kalorien braucht die App sie nicht.",
                "leer": "Das Feld ist freiwillig. Die Nummer ist nur für Werbung. Für dein Ziel braucht die App sie nicht."
              }
            },
            {
              "name": "Geburts-Datum",
              "pflicht": false,
              "zweck": "passt-nicht",
              "wofuer": "Wir gratulieren dir zum Geburtstag.",
              "rueckmeldung": {
                "angegeben": "Das Feld ist freiwillig. Der Gruß zum Geburtstag gehört nicht zu deinem Ziel. Für Schritte und Kalorien braucht die App das nicht.",
                "leer": "Das Feld ist freiwillig. Der Gruß zum Geburtstag gehört nicht zu deinem Ziel."
              }
            }
          ],
          "ausweg": {
            "nichtNutzen": "Ich lege kein Konto an."
          },
          "auswegRueckmeldung": {
            "nichtNutzen": "Das ist deine Entscheidung. Das ist in Ordnung. Dann nutzt du die App nicht."
          }
        },
        "pictogram": "pikto-data"
      },
      {
        "title": "Eine App will etwas sehen",
        "module": "Nötig oder nicht?",
        "icon": "lock",
        "ketteSchritt": 4,
        "text": [
          {
            "text": "Apps fragen oft: Darf ich etwas sehen?",
            "pictogram": "pikto-phone"
          },
          {
            "text": "Zum Beispiel deine Fotos, deine Kontakte oder deinen Standort.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Du prüfst: Was macht die App? Braucht sie das dafür?",
            "pictogram": "pikto-search"
          },
          {
            "text": "Manchmal braucht sie nur ein bisschen. Zum Beispiel den Standort nur beim Benutzen.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Eine Erlaubnis kannst du oft später in den Einstellungen ändern.",
            "pictogram": "pikto-lock"
          }
        ],
        "examples": [
          {
            "art": "A",
            "text": "Eine Taschenlampen-App will deine Kontakte. Für Licht braucht sie die nicht."
          },
          {
            "art": "B",
            "text": "Eine Karten-App zeigt dir den Weg. Dafür braucht sie deinen Standort."
          },
          {
            "art": "C",
            "text": "Eine Wetter-App will deinen Standort. Willst du Warnungen unterwegs? Dann braucht sie ihn. Willst du nur das Wetter in deiner Stadt? Dann tippst du die Stadt selbst ein."
          }
        ],
        "remember": "Ich erlaube nur, was die App braucht.",
        "practice": {
          "nachFehler": true,
          "art": "C",
          "pruefziel": "Wie viel davon ist nötig? Umfang einer Erlaubnis passend zum Zweck",
          "question": "Eine App macht aus einem Foto eine Post-Karte. Du willst ein Foto verschicken. Auf dem Handy erscheint: Soll die App deine Fotos sehen? Was machst du?",
          "pictogram": "pikto-photo",
          "hinweis": "Überlege: Wie viele Fotos braucht die App für deine Karte?",
          "answers": [
            "Nur ausgewählte Fotos erlauben. Ich wähle das eine Foto aus.",
            "Alle Fotos erlauben. Dann muss ich nicht lange suchen.",
            "Keine Fotos erlauben. Fotos sind privat."
          ],
          "correctIndex": 0,
          "feedbackCorrect": "Genau. Die App braucht nur dieses eine Foto. Viele Handys bieten dafür: Ausgewählte Fotos. Dann sieht die App deine anderen Fotos nicht.",
          "feedbackWrong": [
            null,
            "Dann sieht die App alle deine Fotos. Für eine Karte braucht sie aber nur eins. Das ist mehr als nötig.",
            "Dann kann die App keine Karte machen. Für die Karte braucht sie ein Foto. Gib ihr nur das eine Foto."
          ],
          "remember": "Ich erlaube nur, was die App braucht."
        },
        "pictogram": "pikto-phone"
      },
      {
        "title": "Wer sieht dein Profil?",
        "module": "Wer sieht es?",
        "icon": "data",
        "ketteSchritt": 2,
        "text": [
          {
            "text": "In vielen Apps hast du ein Profil.",
            "pictogram": "pikto-person"
          },
          {
            "text": "Dort stehen Dinge über dich. Zum Beispiel dein Name, dein Foto oder dein Wohnort.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Du prüfst: Wer kann das sehen? Alle im Internet? Nur deine Freunde? Nur du?",
            "pictogram": "pikto-search"
          },
          {
            "text": "Das kannst du oft einstellen. Und später wieder ändern.",
            "pictogram": "pikto-lock"
          }
        ],
        "examples": [
          {
            "art": "B",
            "text": "Dein Name steht im Profil. So finden dich deine Freunde."
          },
          {
            "art": "C",
            "text": "Dein Wohnort: Sollen Fremde ihn sehen? Oder nur deine Freunde? Oder niemand? Das entscheidest du."
          }
        ],
        "remember": "Ich wähle aus: Wer sieht meine Daten?",
        "practice": {
          "nachFehler": true,
          "art": "C",
          "pruefziel": "Wer kann es sehen? Sichtbarkeit passend zum eigenen Ziel einstellen",
          "question": "In einer App hast du ein Profil. Dort steht deine Telefon-Nummer. Deine Freunde aus der App sollen dich anrufen können. Wer soll die Nummer sehen?",
          "pictogram": "pikto-person",
          "hinweis": "Überlege: Wer soll dich anrufen können?",
          "answers": [
            "Alle Menschen in der App.",
            "Nur meine Freunde.",
            "Niemand. Die Nummer ist privat."
          ],
          "correctIndex": 1,
          "feedbackCorrect": "Genau. Deine Freunde sollen dich anrufen können. Dafür reicht: Nur Freunde. Fremde brauchen deine Nummer nicht.",
          "feedbackWrong": [
            "Dann sehen auch Fremde deine Nummer. Das ist mehr als nötig. Für deine Freunde reicht: Nur Freunde.",
            null,
            "Das darfst du einstellen. Aber dann können dich deine Freunde nicht anrufen. Das wolltest du ja. Dafür reicht: Nur Freunde."
          ],
          "remember": "Ich wähle aus: Wer sieht meine Daten?"
        },
        "pictogram": "pikto-person"
      },
      {
        "title": "Fotos prüfen",
        "module": "Wer sieht es?",
        "icon": "photo",
        "ketteSchritt": 5,
        "text": [
          {
            "text": "Du willst ein Foto schicken oder zeigen.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Prüfe vorher: Was sieht man auf dem Foto? Und wer bekommt es?",
            "pictogram": "pikto-search"
          },
          {
            "text": "Ist eine andere Person auf dem Foto? Dann fragst du sie vorher.",
            "pictogram": "pikto-people"
          },
          {
            "text": "Ein Foto ist verschickt? Dann kannst du es oft nicht zurückholen.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Darum prüfst du vorher.",
            "pictogram": "pikto-done"
          }
        ],
        "examples": [
          {
            "art": "C",
            "text": "Du willst ein Foto von deinem Kollegen in die Gruppe schicken. Frag ihn vorher. Er entscheidet mit."
          },
          {
            "art": "A",
            "text": "Im Hintergrund sieht man deine Haus-Nummer. Die muss niemand sehen."
          }
        ],
        "remember": "Ich prüfe Fotos vor dem Senden.",
        "practice": {
          "nachFehler": true,
          "art": "C",
          "pruefziel": "Ich entscheide – Daten anderer: Menschen auf dem Foto entscheiden mit",
          "question": "Du hast auf einer Feier ein Foto gemacht. Darauf sind 3 Freunde. Du willst es in deinen Status stellen. Was machst du?",
          "pictogram": "pikto-people",
          "hinweis": "Überlege: Wer ist noch auf dem Foto? Wer entscheidet mit?",
          "answers": [
            "Ich stelle es gleich rein. Ich habe das Foto ja gemacht.",
            "Ich stelle es nur für 24 Stunden rein. Dann ist es wieder weg.",
            "Ich frage die 3 vorher. Sagen alle Ja? Dann stelle ich es rein."
          ],
          "correctIndex": 2,
          "feedbackCorrect": "Genau. Auf dem Foto sind auch deine Freunde. Sie entscheiden mit. Sagt einer Nein? Dann stellst du es nicht rein.",
          "feedbackWrong": [
            "Das Foto zeigt auch deine Freunde. Sie entscheiden mit. Frag sie vorher.",
            "Auch in 24 Stunden kann jemand das Foto speichern. Dann ist es nicht weg. Frag deine Freunde vorher.",
            null
          ],
          "remember": "Fotos von anderen: erst fragen."
        },
        "pictogram": "pikto-photo"
      },
      {
        "title": "Standort teilen",
        "module": "Wer sieht es?",
        "icon": "check",
        "ketteSchritt": 4,
        "text": [
          {
            "text": "Du kannst deinen Standort teilen. Dann sehen andere: Hier bist du gerade.",
            "pictogram": "pikto-location"
          },
          {
            "text": "Prüfe: Wer sieht meinen Standort? Und wie lange?",
            "pictogram": "pikto-search"
          },
          {
            "text": "Oft kannst du wählen: nur kurz. Oder für immer.",
            "pictogram": "pikto-clock"
          },
          {
            "text": "Du kannst das Teilen später wieder ausschalten.",
            "pictogram": "pikto-lock"
          }
        ],
        "examples": [
          {
            "art": "B",
            "text": "Du fährst allein zu einem neuen Ort. Deine Betreuerin will wissen: Bist du gut angekommen? Du teilst deinen Standort mit ihr. Bis du da bist."
          },
          {
            "art": "A",
            "text": "Ein Spiel zeigt deinen Standort allen Spielern. Das braucht das Spiel nicht."
          }
        ],
        "remember": "Ich teile meinen Standort nicht einfach.",
        "practice": {
          "nachFehler": true,
          "art": "C",
          "pruefziel": "Wer und wie lange? Standort nur so weit teilen, wie der Zweck es braucht",
          "question": "Du gehst mit 3 Freunden auf ein Konzert. Ihr wollt euch vor dem Eingang treffen. In eurer Chat-Gruppe sind aber 30 Leute. Wie teilst du deinen Standort?",
          "pictogram": "pikto-location",
          "hinweis": "Überlege: Wer braucht deinen Standort? Und wie lange?",
          "answers": [
            "Mit allen 30 Leuten. Für immer.",
            "Nur mit den 3 Freunden. Für immer.",
            "Nur mit den 3 Freunden. Bis zum Treffen."
          ],
          "correctIndex": 2,
          "feedbackCorrect": "Genau. Nur die 3 brauchen deinen Standort. Und nur bis zum Treffen. Du darfst auch Nein sagen. Dann schreibt ihr euch: Hier bin ich.",
          "feedbackWrong": [
            "Dann sehen 30 Leute immer deinen Standort. Für das Treffen brauchen ihn nur 3. Und nur kurz.",
            "Das sind die richtigen Leute. Aber für immer ist mehr als nötig. Für das Treffen reicht eine kurze Zeit.",
            null
          ],
          "remember": "Ich teile meinen Standort nur so lange wie nötig."
        },
        "pictogram": "pikto-location"
      },
      {
        "title": "Eine Nachricht will deine Daten",
        "module": "Nachrichten",
        "icon": "message",
        "ketteSchritt": 1,
        "text": [
          {
            "text": "Manchmal kommt eine Nachricht. Oder eine E-Mail. Sie will Daten von dir.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du hast das nicht erwartet? Dann mache Stopp.",
            "pictogram": "pikto-pause"
          },
          {
            "text": "Prüfe genauso: Wer will das? Wofür?",
            "pictogram": "pikto-search"
          },
          {
            "text": "Du bist unsicher? Dann gib noch nichts ein. Hol dir Unterstützung.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Mehr dazu lernst du im Thema Betrug.",
            "pictogram": "pikto-fraud"
          }
        ],
        "examples": [
          {
            "art": "C",
            "text": "Deine Freundin schreibt: Wie ist deine neue Adresse? Du kennst sie. Du entscheidest selbst."
          },
          {
            "art": "A",
            "text": "Eine fremde E-Mail sagt: Bestätige deine Daten. Sonst sperren wir dein Konto. Du kennst den Absender nicht."
          }
        ],
        "remember": "Unsicher? Noch nichts freigeben.",
        "vorbildWer": "Alex",
        "vorbild": [
          "Alex bekommt eine E-Mail.",
          "Er soll seine Adresse bestätigen.",
          "Alex macht Stopp.",
          "Er prüft: Wer schreibt mir? Er kennt den Absender nicht.",
          "Er gibt nichts ein.",
          "Er ist noch unsicher. Dann zeigt er die E-Mail seiner Betreuerin."
        ],
        "practice": {
          "nachFehler": true,
          "art": "A",
          "pruefziel": "Stopp und Wer? Unerwartete Anfrage selbst über einen bekannten Weg prüfen (Brücke Betrug)",
          "question": "Du bekommst eine SMS: Hier ist deine Bank. Bitte bestätige dein Geburts-Datum. Tippe dafür auf den Link. Was machst du?",
          "pictogram": "pikto-message",
          "hinweis": "Überlege: Weißt du sicher, wer schreibt?",
          "answers": [
            "Ich tippe auf den Link. Meine Bank kenne ich ja.",
            "Ich schreibe mein Geburts-Datum zurück. Das ist ja nicht geheim.",
            "Ich gebe nichts ein. Ich rufe die Nummer auf meiner Bank-Karte an."
          ],
          "correctIndex": 2,
          "feedbackCorrect": "Genau. Du weißt nicht: Schreibt wirklich deine Bank? Das prüfst du selbst. Mit einer bekannten Nummer.",
          "feedbackWrong": [
            "Jeder kann schreiben: Hier ist deine Bank. Der Link kann zu einer falschen Seite führen. Ruf lieber selbst an.",
            "Auch das Geburts-Datum nutzen Betrüger. Du weißt nicht: Wer schreibt wirklich? Prüfe das zuerst selbst.",
            null
          ],
          "remember": "Ich prüfe erst: Wer will meine Daten?"
        },
        "pictogram": "pikto-message"
      },
      {
        "title": "Dein Plan für deine Daten",
        "module": "Handlungsplan",
        "icon": "check",
        "erinnern": true,
        "erinnernFrage": {
          "leicht": "Du kennst schon alle 5 Schritte. Weißt du sie noch? Denk kurz nach. Dann tippe auf: Zeig mir den Plan.",
          "einfach": "Du kennst schon alle 5 Schritte. Weißt du sie noch? Überleg kurz, bevor du den Plan aufdeckst.",
          "standard": "Alle fünf Schritte kennst du schon. Weißt du sie noch? Überleg kurz und deck dann den Plan auf."
        },
        "erinnernKnopf": {
          "leicht": "Zeig mir den Plan",
          "einfach": "Zeig mir den Plan",
          "standard": "Plan aufdecken"
        },
        "text": [
          {
            "text": "Das ist dein Plan für deine Daten:",
            "pictogram": "pikto-plan"
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
        "remember": "Erst prüfen. Dann entscheide ich.",
        "pictogram": "pikto-plan"
      },
      {
        "title": "Das merke ich mir",
        "module": "Zusammenfassung",
        "icon": "remember",
        "mitPlan": "kurz",
        "erinnernFrage": {
          "leicht": "Was weißt du noch? Wie geht dein Plan? Denk kurz nach. Dann tippe auf: Zeig mir den Plan und die Regeln.",
          "einfach": "Was weißt du noch aus diesem Thema, und wie geht dein Plan? Überleg kurz, bevor du Plan und Regeln aufdeckst.",
          "standard": "Was ist dir aus diesem Kapitel geblieben – und wie geht dein Plan? Überleg kurz und deck dann Plan und Regeln auf."
        },
        "erinnernKnopf": {
          "leicht": "Zeig mir den Plan und die Regeln",
          "einfach": "Zeig mir den Plan und die Regeln",
          "standard": "Plan und Regeln aufdecken"
        },
        "text": [
          {
            "text": "Das sind die wichtigsten Regeln aus diesem Thema.",
            "pictogram": "pikto-done"
          }
        ],
        "bullets": [],
        "pictogram": "pikto-done"
      }
    ],
    "quizQuestions": [
      {
        "nachFehler": true,
        "art": "B",
        "pruefziel": "Wofür? Daten geben, wenn der Zweck klar ist (nicht immer Nein)",
        "question": "Du meldest dich für einen Koch-Kurs an. Die Kurs-Leitung will deine Telefon-Nummer. Fällt der Kurs aus? Dann ruft sie dich an. Was machst du?",
        "pictogram": "pikto-phone",
        "hinweis": "Überlege: Wofür will die Kurs-Leitung die Nummer?",
        "answers": [
          "Ich gebe keine Nummer. Telefon-Nummern sind privat.",
          "Ich gebe meine Telefon-Nummer. Dann bekomme ich Bescheid.",
          "Ich gebe meine Nummer und meine Adresse. Dann erreichen sie mich sicher."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Genau. Die Kurs-Leitung braucht die Nummer für einen klaren Zweck. Du kennst sie. Dann ist das in Ordnung.",
        "feedbackWrong": [
          "Private Daten heißt nicht: immer Nein. Hier gibt es einen klaren Zweck. Ohne Nummer bekommst du keinen Bescheid.",
          null,
          "Die Adresse braucht die Kurs-Leitung dafür nicht. Gib nur, was für den Zweck nötig ist."
        ],
        "remember": "Ich gebe nur nötige Daten weiter."
      },
      {
        "nachFehler": true,
        "hinweis": "Frag dich: Braucht die Seite deine Adresse wirklich für ein Video?",
        "question": "Eine Internet-Seite will deine Adresse. Erst dann zeigt sie dir ein Video. Was machst du?",
        "pictogram": "pikto-house",
        "answers": [
          "Ich gebe die Adresse ein.",
          "Ich gebe meine E-Mail-Adresse ein.",
          "Ich gebe die Adresse nicht ein."
        ],
        "correctIndex": 2,
        "feedbackCorrect": "Genau. Für ein Video braucht niemand deine Adresse. Das passt nicht zum Zweck.",
        "feedbackWrong": [
          "Für ein Video braucht niemand deine Adresse. Das passt nicht zum Zweck.",
          "Auch die E-Mail-Adresse braucht die Seite für ein Video nicht. Das passt nicht zum Zweck.",
          null
        ],
        "remember": "Ich gebe nur nötige Daten weiter.",
        "art": "A",
        "pruefziel": "Wofür? Passt die Angabe zum Zweck?"
      },
      {
        "nachFehler": true,
        "hinweis": "Frag dich: Wofür braucht eine App deine Telefon-Nummer?",
        "question": "Eine kostenlose App fragt beim Anmelden nach deiner Telefon-Nummer. Was machst du?",
        "pictogram": "pikto-money",
        "answers": [
          "Ich prüfe: Braucht die App das? Sonst lasse ich das Feld leer.",
          "Ich gebe die Telefon-Nummer ein. Sonst geht die App nicht.",
          "Ich gebe eine fremde Nummer ein. Dann bleibt meine Nummer geheim."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Genau. Du prüfst zuerst: Wofür braucht die App die Nummer? Ist sie nicht nötig? Dann lässt du das Feld leer.",
        "feedbackWrong": [
          null,
          "Prüfe zuerst: Braucht die App deine Nummer wirklich? Sonst kann sie an Fremde gehen.",
          "Die Nummer von anderen Menschen gehört dir nicht."
        ],
        "remember": "Ich gebe nur nötige Daten weiter.",
        "art": "A",
        "pruefziel": "Wofür? Erst selbst prüfen, sonst leer lassen"
      },
      {
        "nachFehler": true,
        "art": "A",
        "pruefziel": "Wofür? Und: „später ändern“ ist kein Grund für unnötige Erlaubnisse",
        "question": "Du lädst eine Wecker-App. Sie fragt: Darf ich deine Kontakte sehen? Was machst du?",
        "pictogram": "pikto-clock",
        "hinweis": "Überlege: Was macht ein Wecker? Braucht er dafür Kontakte?",
        "answers": [
          "Ich erlaube es. Sonst klingelt der Wecker vielleicht nicht.",
          "Ich erlaube es. Ich kann das ja später wieder ändern.",
          "Ich erlaube es nicht. Der Wecker klingelt auch ohne Kontakte."
        ],
        "correctIndex": 2,
        "feedbackCorrect": "Genau. Für einen Wecker braucht die App keine Kontakte. Das passt nicht zum Zweck.",
        "feedbackWrong": [
          "Ein Wecker braucht keine Kontakte zum Klingeln. Das passt nicht zum Zweck.",
          "Ändern kannst du die Erlaubnis später. Aber dann hat die App deine Kontakte schon gesehen. Darum prüfst du vorher.",
          null
        ],
        "remember": "Ich erlaube nur, was die App braucht."
      },
      {
        "nachFehler": true,
        "art": "C",
        "pruefziel": "Wie viel ist nötig? Hier braucht der Zweck mehr: Immer",
        "question": "Dein Handy hat eine Funktion: Handy finden. Ist dein Handy weg? Dann zeigt sie dir den Ort von deinem Handy. Die Funktion fragt nach deinem Standort. Was passt?",
        "pictogram": "pikto-location",
        "hinweis": "Überlege: Wann brauchst du die Funktion? Benutzt du dann dein Handy?",
        "answers": [
          "Nur beim Benutzen erlauben.",
          "Nicht erlauben.",
          "Immer erlauben."
        ],
        "correctIndex": 2,
        "feedbackCorrect": "Genau. Dein Handy ist weg? Dann benutzt du es nicht. Die Funktion muss es trotzdem finden. Dafür braucht sie den Standort immer.",
        "feedbackWrong": [
          "Dein Handy ist weg? Dann benutzt du es nicht. Dann findet die Funktion es auch nicht. Hier braucht sie den Standort immer.",
          "Das darfst du so wählen. Aber dann hilft dir die Funktion nicht. Dein Handy ist weg? Dann findest du es nicht.",
          null
        ],
        "remember": "Ich erlaube nur, was die App braucht."
      },
      {
        "nachFehler": true,
        "art": "A",
        "pruefziel": "Was genau? Nur den privaten Teil entfernen, nicht alles verweigern",
        "question": "Auf dem Foto sieht man einen Brief mit Adresse. Was ist besser?",
        "pictogram": "pikto-house",
        "hinweis": "Überlege: Welcher Teil vom Foto ist privat?",
        "answers": [
          "Ich schicke ein Foto ohne den Brief.",
          "Ich schicke das Foto so.",
          "Ich schicke gar keine Fotos mehr."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Genau. Nur der Brief ist privat. So geht das: Du schneidest den Brief weg. Oder du machst ein neues Foto ohne Brief.",
        "feedbackWrong": [
          null,
          "Dann können andere deine Adresse lesen. Die Adresse muss niemand sehen.",
          "Das ist nicht nötig. Nur der Brief ist das Problem. Ohne Brief kannst du das Foto schicken."
        ],
        "remember": "Ich prüfe Fotos vor dem Senden."
      },
      {
        "nachFehler": true,
        "art": "–",
        "pruefziel": "Rückfall: unsicher – noch nichts freigeben, erst prüfen oder Unterstützung holen",
        "question": "Eine App fragt nach deiner Adresse. Du weißt nicht warum. Was ist besser?",
        "pictogram": "pikto-house",
        "hinweis": "Überlege: Weißt du, wofür die App deine Adresse will?",
        "answers": [
          "Ich trage die Adresse ein. Die App wird sie schon brauchen.",
          "Ich trage noch nichts ein. Ich prüfe erst: Wofür? Oder ich hole mir Unterstützung.",
          "Ich trage eine falsche Adresse ein. Das merkt die App nicht."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Genau. Du bist unsicher? Dann gibst du noch nichts frei. Erst prüfen. Oder Unterstützung holen.",
        "feedbackWrong": [
          "Du weißt nicht: Wofür will die App die Adresse? Dann gib noch nichts ein. Erst prüfen.",
          null,
          "Eine falsche Adresse ist keine gute Lösung. Vielleicht braucht die App sie ja wirklich. Prüfe erst: Wofür?"
        ],
        "remember": "Unsicher? Noch nichts freigeben."
      },
      {
        "nachFehler": true,
        "art": "–",
        "pruefziel": "Folgen kennen: Erlaubnis änderbar – Verschicktes oft nicht zurückholbar",
        "question": "Vor einem Monat hast du einer App deinen Standort erlaubt. Und du hast ein Foto in eine Gruppe geschickt. Was kannst du jetzt noch ändern?",
        "pictogram": "pikto-lock",
        "hinweis": "Überlege: Was liegt noch bei dir? Und was haben andere schon?",
        "answers": [
          "Die Erlaubnis für den Standort. Das Foto haben andere vielleicht schon gespeichert.",
          "Beides. Ich lösche das Foto einfach in der Gruppe. Dann ist es weg.",
          "Gar nichts. Eine Erlaubnis gilt für immer."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Genau. Eine Erlaubnis kannst du oft ändern. Ein verschicktes Foto kannst du oft nicht zurückholen. Darum prüfst du vorher.",
        "feedbackWrong": [
          null,
          "Die Erlaubnis kannst du in den Einstellungen ändern. Das Foto aber vielleicht nicht mehr. Andere können es schon gespeichert haben.",
          "Die Erlaubnis für den Standort kannst du noch ändern. In den Einstellungen. Das lohnt sich."
        ],
        "remember": "Ich prüfe Fotos vor dem Senden."
      },
      {
        "nachFehler": true,
        "hinweis": "Denk an deinen Plan aus diesem Thema. Womit fängt er an?",
        "question": "Was ist eine gute Regel für deine Daten?",
        "pictogram": "pikto-lock",
        "answers": [
          "Immer sofort eingeben.",
          "Nie etwas eingeben.",
          "Erst prüfen. Dann entscheiden."
        ],
        "correctIndex": 2,
        "feedbackCorrect": "Genau. Erst prüfst du: Wer? Was? Wofür? Dann entscheidest du. Manchmal gibst du Daten. Manchmal nicht.",
        "feedbackWrong": [
          "Sofort eingeben ist zu schnell. Prüfe erst: Wer will die Daten? Und wofür?",
          "Du darfst Nein sagen. Manchmal braucht jemand deine Daten aber wirklich. Wichtig ist: Erst prüfen. Dann selbst entscheiden.",
          null
        ],
        "remember": "Erst prüfen. Dann entscheide ich.",
        "art": "–",
        "pruefziel": "Der Plan: erst prüfen, dann selbst entscheiden (nicht immer Nein)"
      },
      {
        "id": "datenschutz/quiz/foto-publikum-zustimmung",
        "nachFehler": true,
        "art": "C",
        "pruefziel": "Wer sieht es? Ich halte mich an das Publikum, für das die abgebildete Person Ja gesagt hat. Für ein weiteres Publikum frage ich vor dem Teilen.",
        "question": "Deine Kollegin ist auf einem Foto. Sie sagt: Bitte nur an Lea schicken. Du willst das Foto in deinem Status zeigen. Dort sehen es auch andere Kontakte. Was machst du?",
        "pictogram": "pikto-photo",
        "hinweis": "Überlege: Für wen hat deine Kollegin Ja gesagt?",
        "answers": [
          "Ich schicke das Foto nur an Lea.",
          "Ich zeige es in meinem Status. Dort sind nur meine Kontakte.",
          "Ich zeige es in meinem Status. Danach frage ich meine Kollegin."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Gut. Deine Kollegin hat nur Ja zu Lea gesagt. Im Status sehen es auch andere. Dafür fragst du deine Kollegin vorher. Sagt sie Nein? Dann zeigst du das Foto dort nicht.",
        "feedbackWrong": [
          null,
          "Deine Kollegin hat nur Ja zu Lea gesagt. Im Status sehen es auch andere. Für den Status fragst du deine Kollegin vorher.",
          "Nach dem Teilen können andere das Foto schon gespeichert haben. Frag deine Kollegin vorher. Sagt sie Nein? Dann zeigst du das Foto dort nicht."
        ],
        "remember": "Fotos von anderen: erst fragen."
      }
    ],
    "helpQuestions": [
      "Wer bekommt meine Daten? Wer kann sie sehen?",
      "Was genau soll ich geben?",
      "Wofür? Ist das nötig?",
      "Brauche ich Unterstützung?"
    ],
    "memoryRules": [
      "Stopp. Ich prüfe zuerst.",
      "Wer bekommt es? Wer kann es sehen?",
      "Was genau soll ich geben?",
      "Wofür? Wie viel davon ist nötig?",
      "Ich entscheide.",
      "Unsicher? Noch nichts freigeben. Erst prüfen oder Unterstützung holen."
    ],
    "qrLink": "index.html#thema-datenschutz",
    "qrShortLink": "index.html#thema-datenschutz:kurz",
    "qrQuizLink": "index.html#thema-datenschutz:quiz",
    "qrMemoryLink": "index.html#thema-datenschutz:merk",
    "einfachQuiz": [
      0,
      1,
      9
    ],
    "einfachLessons": [
      {
        "title": "Deine Daten",
        "module": "Einfach",
        "pictogram": "pikto-data",
        "icon": "lock",
        "ketteSchritt": 3,
        "text": [
          "Deine Daten sagen etwas über dich.",
          "Zum Beispiel dein Name, deine Adresse, deine Fotos und dein Standort.",
          "Manche Daten sind besonders wichtig. Zum Beispiel deine Gesundheit und deine Bank-Daten.",
          "Dein Passwort ist geheim.",
          "Du entscheidest: Wer bekommt deine Daten?"
        ],
        "examples": [
          {
            "art": "B",
            "text": "Deine Ärztin fragt: Was tut dir weh? Du sagst es ihr. Sie braucht das für die Behandlung."
          },
          {
            "art": "A",
            "text": "Ein Quiz im Internet fragt nach deinen Krankheiten. Für ein Quiz braucht es die nicht."
          }
        ],
        "remember": "Private Daten gehören zu mir.",
        "vorbildWer": "Alex",
        "vorbild": [
          "Alex will ein Bank-Konto.",
          "Die Bank fragt nach seinem Ausweis.",
          "Alex denkt: Das sind besonders wichtige Daten.",
          "Er prüft: Wofür will die Bank den Ausweis? Mit dem Ausweis prüft die Bank: Ist das wirklich Alex?",
          "Das passt zum Bank-Konto.",
          "Alex entscheidet: Er zeigt den Ausweis."
        ],
        "practice": {
          "nachFehler": true,
          "art": "B",
          "pruefziel": "Besonders wichtige Daten erkennen – und geben, wenn der Zweck es braucht (Was? Wofür?)",
          "question": "Du fängst eine neue Arbeit an. Die Firma will deine Konto-Nummer. Sie will dir deinen Lohn überweisen. Was machst du?",
          "pictogram": "pikto-bank",
          "hinweis": "Überlege: Wer will die Nummer? Und wofür?",
          "answers": [
            "Ich gebe die Konto-Nummer. Die Firma braucht sie für meinen Lohn.",
            "Ich gebe die Konto-Nummer nicht. Bank-Daten sind besonders wichtig.",
            "Ich gebe die Konto-Nummer. Und ein Foto von meiner Bank-Karte. Dann geht es schneller."
          ],
          "correctIndex": 0,
          "feedbackCorrect": "Genau. Die Konto-Nummer ist wichtig. Aber die Firma braucht sie für deinen Lohn. Du kennst die Firma. Dann gibst du sie.",
          "feedbackWrong": [
            null,
            "Bank-Daten sind wichtig. Aber hier gibt es einen klaren Zweck: deinen Lohn. Ohne Konto-Nummer bekommst du kein Geld. Private Daten heißt nicht: immer Nein.",
            "Die Firma braucht nur die Konto-Nummer. Ein Foto von deiner Bank-Karte braucht sie nicht. Mit dem Foto kann jemand mit deiner Karte bezahlen."
          ],
          "remember": "Ich gebe nur nötige Daten weiter."
        }
      },
      {
        "title": "Nötig oder nicht?",
        "module": "Einfach",
        "pictogram": "pikto-search",
        "icon": "check",
        "ketteSchritt": 4,
        "text": [
          "Eine App oder ein Formular will Daten von dir.",
          "Du prüfst: Wofür sind die Daten? Und welche Daten passen dazu?",
          "In einem Formular gibt es Pflicht-Felder. Es gibt auch freiwillige Felder. Freiwillige Felder darfst du leer lassen.",
          "Du bist unsicher? Dann gib noch nichts ein. Hol dir Unterstützung."
        ],
        "examples": [
          {
            "art": "B",
            "text": "Ein Shop braucht deine Adresse für das Paket."
          },
          {
            "art": "A",
            "text": "Eine Taschenlampen-App will deine Kontakte."
          },
          {
            "art": "C",
            "text": "Eine Wetter-App will deinen Standort. Oder du tippst deine Stadt selbst ein."
          }
        ],
        "remember": "Ich gebe nur nötige Daten weiter.",
        "vorbildWer": "Tilda",
        "vorbild": [
          "Tilda meldet sich im Internet bei der Bücherei an.",
          "Das Formular fragt nach ihrem Namen und ihrer Adresse. Das ist Pflicht.",
          "Tilda prüft: Wofür? Die Bücherei braucht das für den Ausweis. Das ist nötig.",
          "Die Telefon-Nummer ist freiwillig.",
          "Tilda lässt das Feld leer."
        ],
        "practice": {
          "typ": "felder",
          "nachFehler": true,
          "remember": "Ich gebe nur nötige Daten weiter.",
          "question": "Was gibst du bei der Fitness-App an?",
          "art": "A+B+C",
          "pruefziel": "Pflicht, freiwillig und Zweck getrennt prüfen: Was passt zu meinem Ziel?",
          "hinweis": "Überlege: Was willst du mit der App? Welche Angaben passen dazu? Welche Felder sind freiwillig? Du kannst auch erst prüfen.",
          "situation": {
            "leicht": "Du willst eine Fitness-App nutzen. Sie zählt deine Schritte. Und sie zeigt: So viele Kalorien hast du verbraucht. Das willst du sehen. Für die App brauchst du ein Konto."
          },
          "formular": {
            "titel": "Fitness-App: Konto anlegen"
          },
          "felder": [
            {
              "name": "E-Mail",
              "pflicht": true,
              "zweck": "passt",
              "wofuer": "Für dein Konto. Mit der E-Mail meldest du dich an.",
              "rueckmeldung": {
                "angegeben": "Pflicht heißt nur: Ohne E-Mail geht es nicht weiter. Hier passt sie auch zum Zweck. Mit der E-Mail meldest du dich in deinem Konto an.",
                "leer": "Pflicht heißt: Ohne E-Mail geht es nicht weiter. Die E-Mail passt hier zum Zweck. Willst du die App nutzen? Dann gib sie an. Sonst nutzt du die App nicht."
              }
            },
            {
              "name": "Gewicht",
              "pflicht": false,
              "zweck": "deine-wahl",
              "sensibel": true,
              "wofuer": "Mit dem Gewicht berechnen wir deine Kalorien.",
              "rueckmeldung": {
                "angegeben": "Das Feld ist freiwillig. Du willst deine Kalorien sehen. Dafür braucht die App dein Gewicht. Das passt zu deinem Ziel.",
                "leer": "Das Feld ist freiwillig. Du kannst Nein sagen. Dann bekommt die App dein Gewicht nicht. Deine Kalorien kann sie dann vielleicht nicht berechnen. Die Schritte zählt sie trotzdem. Du entscheidest."
              }
            },
            {
              "name": "Telefon-Nummer",
              "pflicht": false,
              "zweck": "passt-nicht",
              "wofuer": "Für Angebote per SMS.",
              "rueckmeldung": {
                "angegeben": "Das Feld ist freiwillig. Die Nummer ist nur für Werbung. Für Schritte und Kalorien braucht die App sie nicht.",
                "leer": "Das Feld ist freiwillig. Die Nummer ist nur für Werbung. Für dein Ziel braucht die App sie nicht."
              }
            },
            {
              "name": "Geburts-Datum",
              "pflicht": false,
              "zweck": "passt-nicht",
              "wofuer": "Wir gratulieren dir zum Geburtstag.",
              "rueckmeldung": {
                "angegeben": "Das Feld ist freiwillig. Der Gruß zum Geburtstag gehört nicht zu deinem Ziel. Für Schritte und Kalorien braucht die App das nicht.",
                "leer": "Das Feld ist freiwillig. Der Gruß zum Geburtstag gehört nicht zu deinem Ziel."
              }
            }
          ],
          "ausweg": {
            "nichtNutzen": "Ich lege kein Konto an."
          },
          "auswegRueckmeldung": {
            "nichtNutzen": "Das ist deine Entscheidung. Das ist in Ordnung. Dann nutzt du die App nicht."
          }
        }
      },
      {
        "title": "Wer sieht es?",
        "module": "Einfach",
        "pictogram": "pikto-person",
        "icon": "data",
        "ketteSchritt": 2,
        "text": [
          "Du teilst etwas. Zum Beispiel ein Foto. Oder dein Profil.",
          "Du prüfst: Wer kann das sehen? Alle? Oder nur deine Freunde?",
          "Das kannst du oft einstellen. Und später ändern.",
          "Ein Foto ist verschickt? Dann kannst du es oft nicht zurückholen. Darum prüfst du vorher.",
          "Andere Personen auf dem Foto? Dann fragst du sie vorher."
        ],
        "examples": [
          {
            "art": "C",
            "text": "Dein Wohnort im Profil: Sollen ihn alle sehen? Nur Freunde? Oder niemand? Das entscheidest du."
          }
        ],
        "remember": "Ich wähle aus: Wer sieht meine Daten?",
        "vorbildWer": "Tilda",
        "vorbild": [
          "Tilda stellt ein neues Foto in ihr Profil.",
          "Sie prüft: Wer kann das sehen?",
          "Alle im Internet. Das will Tilda nicht.",
          "Sie stellt ein: Nur Freunde."
        ],
        "practice": {
          "nachFehler": true,
          "art": "C",
          "pruefziel": "Ich entscheide – Daten anderer: Menschen auf dem Foto entscheiden mit",
          "question": "Du hast auf einer Feier ein Foto gemacht. Darauf sind 3 Freunde. Du willst es in deinen Status stellen. Was machst du?",
          "pictogram": "pikto-people",
          "hinweis": "Überlege: Wer ist noch auf dem Foto? Wer entscheidet mit?",
          "answers": [
            "Ich stelle es gleich rein. Ich habe das Foto ja gemacht.",
            "Ich stelle es nur für 24 Stunden rein. Dann ist es wieder weg.",
            "Ich frage die 3 vorher. Sagen alle Ja? Dann stelle ich es rein."
          ],
          "correctIndex": 2,
          "feedbackCorrect": "Genau. Auf dem Foto sind auch deine Freunde. Sie entscheiden mit. Sagt einer Nein? Dann stellst du es nicht rein.",
          "feedbackWrong": [
            "Das Foto zeigt auch deine Freunde. Sie entscheiden mit. Frag sie vorher.",
            "Auch in 24 Stunden kann jemand das Foto speichern. Dann ist es nicht weg. Frag deine Freunde vorher.",
            null
          ],
          "remember": "Fotos von anderen: erst fragen."
        }
      }
    ],
    "neueSituation": {
      "aufgaben": [
        {
          "typ": "felder",
          "nachFehler": true,
          "remember": "Ich gebe nur nötige Daten weiter.",
          "question": "Was gibst du für die Kunden-Karte an?",
          "art": "A+B+C",
          "pruefziel": "Anwenden: Karte (B), Pflicht-Angabe mit unklarem Zweck – erst prüfen oder nicht nutzen, nicht als unnötig bewerten (unklar), freiwillige Angabe ohne Zweck (A), Einkäufe merken nach eigenem Ziel (C)",
          "hinweis": "Überlege: Was willst du? Welche Angaben passen zur Karte und zu deinen Angeboten? Welche Felder sind freiwillig? Und weißt du bei jeder Angabe: wofür?",
          "situation": {
            "leicht": "Du kaufst oft im gleichen Supermarkt ein. Mit der Kunden-Karte wird manches billiger. Du willst die Karte haben. Und du willst gern Angebote für deinen Lieblings-Kaffee bekommen."
          },
          "formular": {
            "adresse": "kundenkarte.supermarkt-beispiel.xyz",
            "titel": "Deine Kunden-Karte"
          },
          "felder": [
            {
              "name": "Name",
              "pflicht": true,
              "zweck": "passt",
              "wofuer": "Er steht auf deiner Karte.",
              "rueckmeldung": {
                "angegeben": "Pflicht heißt nur: Ohne Namen geht es nicht weiter. Hier passt er auch zum Zweck. Der Name steht auf deiner Karte.",
                "leer": "Pflicht heißt: Ohne Namen geht es nicht weiter. Der Name passt hier zum Zweck. Willst du die Karte? Dann gib ihn an. Sonst nutzt du die Karte nicht."
              }
            },
            {
              "name": "E-Mail",
              "pflicht": true,
              "zweck": "passt",
              "wofuer": "Über die E-Mail bekommst du deine Karte.",
              "rueckmeldung": {
                "angegeben": "Pflicht heißt nur: Ohne E-Mail geht es nicht weiter. Hier passt sie auch zum Zweck. Über die E-Mail bekommst du deine Karte.",
                "leer": "Pflicht heißt: Ohne E-Mail geht es nicht weiter. Die E-Mail passt hier zum Zweck. Willst du die Karte? Dann gib sie an. Sonst nutzt du die Karte nicht."
              }
            },
            {
              "name": "Geburts-Datum",
              "pflicht": true,
              "zweck": "unklar",
              "wofuer": null,
              "rueckmeldung": {
                "angegeben": "Pflicht heißt nur: Ohne Geburts-Datum geht es nicht weiter. Es heißt nicht: Du kennst den Zweck. Die Seite sagt nicht: wofür? Vielleicht gibt es einen guten Grund. Aber der Zweck ist für dich nicht klar. Dann gib es noch nicht ein. Prüfe erst. Oder nutze die Karte nicht.",
                "leer": "Pflicht heißt nur: Ohne Geburts-Datum geht es nicht weiter. Es heißt nicht: Du kennst den Zweck. Die Seite sagt nicht: wofür? Vielleicht gibt es einen guten Grund. Aber der Zweck ist für dich nicht klar. Darum prüfst du erst. Oder du nutzt die Karte nicht."
              }
            },
            {
              "name": "Wie viele Kinder hast du?",
              "pflicht": false,
              "zweck": "passt-nicht",
              "wofuer": null,
              "rueckmeldung": {
                "angegeben": "Das Feld ist freiwillig. Die Karte bekommst du also auch ohne diese Angabe. Und die Seite sagt nicht: wofür? Für dein Ziel musst du das nicht angeben.",
                "leer": "Das Feld ist freiwillig. Die Karte bekommst du also auch ohne diese Angabe. Und die Seite sagt nicht: wofür? Für dein Ziel musst du das nicht angeben."
              }
            },
            {
              "name": "Einkäufe merken",
              "pflicht": false,
              "zweck": "deine-wahl",
              "wofuer": "Dürfen wir uns deine Einkäufe merken? Dann bekommst du passende Angebote.",
              "zustand": {
                "an": "Ja",
                "aus": "Nein"
              },
              "rueckmeldung": {
                "angegeben": "Das Feld ist freiwillig. Du willst Angebote für deinen Kaffee. Dafür passt das. Das kannst du später wieder ändern.",
                "leer": "Das Feld ist freiwillig. Du kannst Nein sagen. Dann merkt sich der Supermarkt deine Einkäufe nicht. Passende Angebote für deinen Kaffee bekommst du dann vielleicht nicht. Du entscheidest."
              }
            }
          ],
          "ausweg": {
            "nichtNutzen": "Ich bestelle die Karte nicht."
          },
          "auswegRueckmeldung": {
            "nichtNutzen": "Das ist deine Entscheidung. Das ist in Ordnung. Beim Geburts-Datum ist der Zweck nicht klar. Du gibst es nicht ein. Du kaufst dann ohne Karte ein.",
            "erstPruefen": "Das ist in Ordnung. Beim Geburts-Datum ist der Zweck nicht klar. Dann gibst du es noch nicht ein. Du prüfst erst. Zum Beispiel: Du fragst im Supermarkt nach. Oder du holst dir Unterstützung. Danach entscheidest du."
          }
        },
        {
          "typ": "felder",
          "nachFehler": true,
          "remember": "Ich gebe nur nötige Daten weiter.",
          "nurLang": true,
          "question": "Was gibst du für den Termin an?",
          "art": "A+B+C",
          "pruefziel": "Heikel, aber passend: Name und Geburts-Datum für den Termin (B); Gesundheits-Angabe freiwillig und knapp (C); Statistik nicht nötig (A)",
          "hinweis": "Überlege: Was braucht die Praxis für deinen Termin? Welche Angaben sind freiwillig? Welche sind sehr privat?",
          "situation": {
            "leicht": "Du hast Zahn-Schmerzen. Du willst schnell einen Termin bei deiner Zahn-Ärztin. Du kennst die Praxis. Auf deiner Termin-Karte steht die Adresse von der Termin-Seite. Du tippst sie selbst ein."
          },
          "formular": {
            "adresse": "zahnpraxis-berg-beispiel.xyz/termin",
            "titel": "Zahnarzt-Praxis Berg: Termin online"
          },
          "felder": [
            {
              "name": "Name",
              "pflicht": true,
              "zweck": "passt",
              "wofuer": "Wir wollen wissen: Wer kommt?",
              "rueckmeldung": {
                "angegeben": "Pflicht heißt nur: Ohne Namen geht es nicht weiter. Hier passt er auch zum Zweck. Die Praxis muss wissen: Wer kommt?",
                "leer": "Pflicht heißt: Ohne Namen geht es nicht weiter. Der Name passt hier zum Zweck. Du willst nicht online buchen? Dann ruf in der Praxis an."
              }
            },
            {
              "name": "Geburts-Datum",
              "pflicht": true,
              "zweck": "passt",
              "sensibel": true,
              "wofuer": "So finden wir deine Unterlagen. Manche Menschen haben den gleichen Namen.",
              "rueckmeldung": {
                "angegeben": "Pflicht heißt nur: Ohne Geburts-Datum geht es nicht weiter. Hier passt es auch zum Zweck. So findet die Praxis deine Unterlagen. Du kennst die Praxis. Du hast die Seite selbst geöffnet.",
                "leer": "Pflicht heißt: Ohne Geburts-Datum geht es nicht weiter. Es passt hier zum Zweck. Du willst das nicht online angeben? Dann ruf in der Praxis an."
              }
            },
            {
              "name": "Grund für den Termin",
              "pflicht": false,
              "zweck": "deine-wahl",
              "sensibel": true,
              "wofuer": "Dann planen wir genug Zeit ein.",
              "rueckmeldung": {
                "angegeben": "Das Feld ist freiwillig. Das ist eine Gesundheits-Angabe. Sie hilft der Praxis beim Planen. Schreib nur kurz: Zahn-Schmerzen. Mehr muss nicht sein.",
                "leer": "Das Feld ist freiwillig. Das ist eine Gesundheits-Angabe. Du kannst Nein sagen. Dann plant die Praxis vielleicht nicht genug Zeit ein. Du kannst den Grund auch in der Praxis sagen. Du entscheidest."
              }
            },
            {
              "name": "Wie hast du von uns erfahren?",
              "pflicht": false,
              "zweck": "passt-nicht",
              "wofuer": "Für unsere Statistik.",
              "rueckmeldung": {
                "angegeben": "Das Feld ist freiwillig. Die Statistik ist für die Praxis. Für deinen Termin braucht sie das nicht.",
                "leer": "Das Feld ist freiwillig. Für deinen Termin braucht die Praxis das nicht."
              }
            }
          ],
          "ausweg": {
            "nichtNutzen": "Ich buche nicht online. Ich rufe an."
          },
          "auswegRueckmeldung": {
            "nichtNutzen": "Das ist deine Entscheidung. Das ist in Ordnung. Am Telefon bekommst du auch einen Termin."
          }
        }
      ]
    }
  },
  {
    "id": "whatsapp",
    "title": "WhatsApp",
    "icon": "whatsapp",
    "desc": "Nachrichten, Links, Gruppen und Codes sicher nutzen",
    "transfer": "Schau heute in deine WhatsApp-Chats. Kennst du alle Personen wirklich?",
    "selfAssessment": {
      "question": "Wie sicher fühlst du dich bei WhatsApp?",
      "pictogram": "pikto-message",
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
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "message",
        "text": [
          {
            "text": "Stell dir vor: Eine fremde Nummer schreibt dir.",
            "pictogram": "pikto-screen"
          },
          {
            "text": "In der Nachricht ist ein Link."
          },
          {
            "text": "Was machst du? Das lernst du hier."
          },
          {
            "text": "Du bist unsicher? Dann tippe oben auf: Hilfe.",
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
            "text": "Du kannst Bilder und Sprach-Nachrichten senden.",
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
          "pictogram": "pikto-stranger",
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
        "warning": "Fremde fragen manchmal nach Geld. Schick kein Geld an fremde Nummern. Ruf die Person mit der Nummer an, die du kennst.",
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
            "text": "Fremde können eine Stimme mit dem Computer fälschen.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du schickst kein Geld an fremde Nummern.",
            "pictogram": "pikto-message"
          }
        ],
        "examples": [
          "Hallo Papa, mein Handy ist kaputt. Das ist meine neue Nummer. Kannst du mir Geld überweisen?",
          "Eine Sprach-Nachricht klingt wie deine Schwester. Sie will Geld. Die Stimme kann gefälscht sein."
        ],
        "practice": {
          "question": "Eine fremde Nummer bittet um Geld. Was ist besser?",
          "pictogram": "pikto-money",
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
            "text": "Du tippst nicht sofort auf unbekannte Links.",
            "pictogram": "pikto-location"
          }
        ],
        "practice": {
          "question": "Ein unbekannter Link kommt an. Was ist besser?",
          "pictogram": "pikto-stranger",
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
        "warning": "Der Code aus der SMS ist geheim. Gib den Code niemandem. Auch nicht Freunden.",
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
          "pictogram": "pikto-code",
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
          "pictogram": "pikto-message",
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
            "text": "Andere können dein Foto weiter-schicken.",
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
          "pictogram": "pikto-photo",
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
        "title": "Stress und Eile",
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
          "pictogram": "pikto-message",
          "answers": [
            "Pause machen.",
            "Sofort antworten."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht sicher. Unter Stress machst du leichter Fehler.",
          "feedbackCorrect": "Das ist sicher. Du machst erst eine Pause.",
          "remember": "Etwas stresst mich? Dann mache ich Pause."
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
            "text": "KI ist ein schlaues Computer-Programm.",
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
            "text": "Etwas ist komisch oder macht dir Stress.",
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
            "text": "Hilfe holen.",
            "pictogram": "pikto-help"
          }
        ],
        "warning": "Auch ein bekannter Name kann falsch sein. Erst selbst anrufen, dann reagieren.",
        "success": "Mit deinem Plan lässt du dich nicht überrumpeln.",
        "practice": {
          "question": "Eine Nachricht von einem bekannten Namen bittet dich plötzlich um Geld. Was machst du zuerst?",
          "pictogram": "pikto-phone",
          "answers": [
            "Ich rufe die Person selbst an.",
            "Ich überweise das Geld schnell."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist zu schnell. Ruf die Person zuerst selbst an. Nimm die Nummer, die du schon kennst.",
          "feedbackCorrect": "So merkst du, ob die Nachricht wirklich von dieser Person ist.",
          "remember": "Bei Geld-Bitten rufe ich selbst an."
        },
        "remember": "Ich mache Stopp. Dann prüfe ich.",
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
    "quizQuestions": [
      {
        "hinweis": "Du weißt nicht, wer die Nummer hat. Was heißt das für deine Antwort?",
        "question": "Eine unbekannte Nummer schickt dir ein Foto. Was machst du?",
        "pictogram": "pikto-stranger",
        "answers": [
          "Ich antworte sofort.",
          "Ich antworte nicht. Ich zeige es einer vertrauten Person.",
          "Ich schicke ein Foto zurück."
        ],
        "correctIndex": 1,
        "feedbackWrong": [
          "Du weißt nicht, wer dahinter steckt. Antworte lieber nicht.",
          null,
          "Dann hat eine fremde Nummer ein Bild von dir."
        ],
        "feedbackCorrect": "Bei unbekannten Nummern antwortest du nicht sofort."
      },
      {
        "hinweis": "Frag dich: Woher weißt du, dass wirklich deine Freundin schreibt?",
        "question": "Eine Freundin schreibt: Ich habe dir aus Versehen einen Code geschickt. Schick ihn zurück. Was machst du?",
        "pictogram": "pikto-code",
        "answers": [
          "Ich schicke den Code zurück.",
          "Ich schicke den Code nicht. Ich rufe die Freundin an.",
          "Ich schicke den Code später."
        ],
        "correctIndex": 1,
        "feedbackWrong": [
          "Vielleicht schreibt gar nicht deine Freundin. Der Code bleibt bei dir.",
          null,
          "Später ist genauso unsicher. Ruf lieber an."
        ],
        "feedbackCorrect": "Der Code bleibt bei dir. Ruf lieber an."
      },
      {
        "hinweis": "Überlege: Warum schickt jemand einen Gutschein an eine ganze Gruppe?",
        "question": "In einer Gruppe steht ein Link. Es soll einen Gutschein geben. Was machst du?",
        "pictogram": "pikto-stranger",
        "answers": [
          "Ich öffne den Link nicht.",
          "Ich öffne den Link sofort.",
          "Ich schicke den Link weiter."
        ],
        "correctIndex": 0,
        "feedbackWrong": [
          null,
          "Solche Links führen oft zu Betrug.",
          "Dann geht der Betrug an noch mehr Menschen."
        ],
        "feedbackCorrect": "Gutschein-Links sind oft ein Trick."
      },
      {
        "hinweis": "Auf dem Foto sind andere Menschen. Dürfen die mitbestimmen?",
        "question": "Auf einem Foto von einer Feier sind mehrere Personen. Du willst es senden. Was machst du?",
        "pictogram": "pikto-photo",
        "answers": [
          "Ich sende es einfach.",
          "Ich sende es ohne Namen.",
          "Ich frage die Personen vorher."
        ],
        "correctIndex": 2,
        "feedbackWrong": [
          "Auf dem Foto sind andere Menschen. Frag sie vorher.",
          "Auch ohne Namen sind die Gesichter zu sehen.",
          null
        ],
        "feedbackCorrect": "Die anderen dürfen mitbestimmen."
      },
      {
        "hinweis": "Überlege: Wer bestimmt, wann du antwortest?",
        "question": "Jemand schreibt dir 10 Nachrichten hintereinander. Du sollst sofort antworten. Was machst du?",
        "pictogram": "pikto-message",
        "answers": [
          "Ich lege das Handy weg und atme durch.",
          "Ich antworte sofort.",
          "Ich entschuldige mich für die Verspätung."
        ],
        "correctIndex": 0,
        "feedbackWrong": [
          null,
          "Niemand darf dich zu einer Antwort drängen.",
          "Du hast nichts falsch gemacht. Du musst dich nicht entschuldigen."
        ],
        "feedbackCorrect": "Du bestimmst, wann du antwortest."
      },
      {
        "hinweis": "Du musst die Gruppe nicht verlassen. Es gibt noch etwas dazwischen.",
        "question": "Was kannst du mit einer stressigen Gruppe machen?",
        "pictogram": "pikto-message",
        "answers": [
          "Immer sofort antworten.",
          "Alle Nachrichten löschen.",
          "Stumm schalten."
        ],
        "correctIndex": 2,
        "feedbackWrong": [
          "Du musst nicht immer sofort antworten.",
          "Löschen macht die Gruppe nicht ruhiger. Es kommen neue Nachrichten.",
          null
        ],
        "feedbackCorrect": "Das ist sicher. Du darfst Gruppen stumm schalten."
      },
      {
        "hinweis": "Eine Sprach-Nachricht kann man weiterschicken. Was heißt das für dich?",
        "question": "Was ist bei Sprach-Nachrichten wichtig?",
        "pictogram": "pikto-message",
        "answers": [
          "Alles sagen.",
          "Vorher überlegen.",
          "Sehr lange sprechen."
        ],
        "correctIndex": 1,
        "feedbackWrong": [
          "Du kannst aus Versehen private Dinge erzählen.",
          null,
          "Die Länge ist nicht wichtig. Wichtig ist, was du sagst."
        ],
        "feedbackCorrect": "Das ist sicher. Du überlegst vorher."
      },
      {
        "hinweis": "Stress und Eile sind ein Warnzeichen. Was hilft dagegen?",
        "question": "Eine Nachricht sagt: sofort bezahlen. Was ist besser?",
        "pictogram": "pikto-money",
        "answers": [
          "Sofort bezahlen.",
          "Weniger Geld überweisen.",
          "Nicht sofort handeln."
        ],
        "correctIndex": 2,
        "feedbackWrong": [
          "Betrüger machen dir oft Stress. Bezahle nicht sofort.",
          "Auch wenig Geld ist dann weg. Überweise gar nichts.",
          null
        ],
        "feedbackCorrect": "Das ist sicher. Du bezahlst nicht sofort."
      },
      {
        "hinweis": "Überlege: Wie viele Menschen lesen in einer Gruppe mit?",
        "question": "Was gehört nicht in eine Gruppe?",
        "pictogram": "pikto-message",
        "answers": [
          "Private Daten.",
          "Ein freundlicher Gruß.",
          "Eine Frage an die Gruppe."
        ],
        "correctIndex": 0,
        "feedbackWrong": [
          null,
          "Ein Gruß ist in Ordnung. Er zeigt nichts Privates.",
          "Eine Frage ist in Ordnung. Sie zeigt nichts Privates von dir."
        ],
        "feedbackCorrect": "Das ist richtig. Private Daten bleiben geschützt."
      },
      {
        "hinweis": "Das Antippen kannst du nicht zurücknehmen.",
        "question": "Was ist eine gute WhatsApp-Regel?",
        "pictogram": "pikto-message",
        "answers": [
          "Immer sofort antippen.",
          "Erst prüfen.",
          "Nie mehr antworten."
        ],
        "correctIndex": 1,
        "feedbackWrong": [
          "Schnell antippen kann gefährlich sein.",
          null,
          "Du darfst antworten. Schau nur vorher genau hin."
        ],
        "feedbackCorrect": "Das ist sicher. Erst prüfen ist besser."
      }
    ],
    "helpQuestions": [
      "Kenne ich diese Nummer?",
      "Macht die Nachricht Stress?",
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
    "qrLink": "index.html#thema-whatsapp",
    "qrShortLink": "index.html#thema-whatsapp:kurz",
    "qrQuizLink": "index.html#thema-whatsapp:quiz",
    "qrMemoryLink": "index.html#thema-whatsapp:merk",
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
        "remember": "Unbekannte Nachrichten: erst fragen.",
        "vorbildWer": "Tilda",
        "vorbild": [
          "Eine fremde Nummer schreibt Tilda.",
          "Hallo, wie geht es dir?",
          "Tilda antwortet nicht sofort.",
          "Sie zeigt die Nachricht Alex."
        ]
      },
      {
        "title": "Links in Nachrichten",
        "module": "Einfach",
        "pictogram": "pikto-link",
        "icon": "link",
        "text": [
          "Du bekommst einen Link.",
          "Ein Link ist eine blaue Adresse.",
          "Du tippst nicht drauf.",
          "Fremde Links können gefährlich sein.",
          "Du fragst eine vertraute Person."
        ],
        "remember": "Fremde Links nicht antippen.",
        "vorbildWer": "Alex",
        "vorbild": [
          "Alex bekommt eine Nachricht mit einem Link.",
          "Die Nummer kennt er nicht.",
          "Alex tippt nicht auf den Link.",
          "Er fragt Tilda."
        ]
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
          "Mit dem Code kann jemand dein Konto stehlen."
        ],
        "remember": "Deinen WhatsApp-Code niemals weitergeben.",
        "vorbildWer": "Tilda",
        "vorbild": [
          "Tilda bekommt eine SMS mit einem Code.",
          "Kurz danach schreibt jemand:",
          "Schick mir bitte den Code.",
          "Tilda schickt den Code nicht."
        ]
      }
    ],
    "miniQuestion": {
      "question": "Du bekommst einen komischen Link. Was machst du?",
      "answers": [
        "Ich tippe nicht drauf.",
        "Ich tippe sofort drauf.",
        "Ich leite ihn an alle weiter."
      ],
      "correct": 0,
      "explanation": "Komische Links können Betrug sein. Tippe nicht drauf. Frag lieber nach."
    },
    "einfachQuiz": [
      0,
      2,
      1
    ]
  },
  {
    "id": "facebook",
    "title": "Facebook",
    "icon": "facebook",
    "desc": "Beiträge, Profile und Kontakte prüfen",
    "transfer": "Prüfe heute bei einem Beitrag: Wer kann ihn sehen?",
    "selfAssessment": {
      "question": "Wie sicher fühlst du dich auf Facebook?",
      "pictogram": "pikto-people",
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
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "message",
        "text": [
          {
            "text": "Stell dir vor: Eine fremde Person will bei Facebook dein Freund sein.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Was machst du? Das lernst du hier."
          },
          {
            "text": "Du bist unsicher? Dann tippe oben auf: Hilfe.",
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
          },
          {
            "text": "Öffentlich heißt: alle können es sehen.",
            "pictogram": "pikto-screen"
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
          "pictogram": "pikto-search",
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
          "question": "Du schreibst einen Beitrag bei Facebook. Wer kann ihn sehen?",
          "schluessel": "Was bedeutet: Wer darf etwas sehen?",
          "pictogram": "pikto-people",
          "answers": [
            "Das stelle ich ein. Ich prüfe die Einstellung.",
            "Immer alle Menschen. Ich kann nichts ändern."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das stimmt nicht. Du kannst einstellen: Wer darf den Beitrag sehen? Zum Beispiel nur deine Freunde.",
          "feedbackCorrect": "Richtig. Du stellst ein: Wer darf es sehen? Du darfst dir dabei helfen lassen.",
          "remember": "Ich prüfe meine Einstellungen."
        },
        "pictogram": "pikto-lock"
      },
      {
        "title": "Freundschafts-Anfragen",
        "warning": "Nimm nur Anfragen von Menschen an, die du kennst. Fremde Profile können falsch sein. Im Zweifel sagst du Nein.",
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
          "pictogram": "pikto-stranger",
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
          "pictogram": "pikto-people",
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
        "warning": "Beleidigungen sind nicht in Ordnung. Du bist nicht schuld. Du kannst die Person melden und blockieren.",
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
          "pictogram": "pikto-people",
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
            "text": "Nicht alle wollen im Internet sein.",
            "pictogram": "pikto-link"
          },
          {
            "text": "Du fragst erst, bevor du ein Foto postest.",
            "pictogram": "pikto-photo"
          }
        ],
        "practice": {
          "question": "Ein Foto zeigt andere Menschen. Was ist besser?",
          "pictogram": "pikto-photo",
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
        "title": "Was kann ich tun?",
        "module": "Handlungsplan",
        "icon": "help",
        "text": [
          {
            "text": "Etwas auf Facebook tut dir nicht gut.",
            "pictogram": "pikto-feel"
          },
          {
            "text": "Zum Beispiel ist eine Person gemein zu dir.",
            "pictogram": "pikto-warning"
          },
          {
            "text": "Du musst das nicht alleine aushalten.",
            "pictogram": "pikto-help"
          }
        ],
        "bullets": [
          {
            "text": "Du kannst die Person blockieren.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Du kannst den Beitrag melden.",
            "pictogram": "pikto-warning"
          },
          {
            "text": "Du kannst es einer vertrauten Person sagen.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Du kannst Hilfe holen.",
            "pictogram": "pikto-ask"
          }
        ],
        "warning": "Wer sich als Freund ausgibt und schnell Geld oder private Daten will, ist oft kein Freund.",
        "success": "Hilfe holen ist gut. Es ist nicht deine Schuld.",
        "practice": {
          "question": "Eine fremde Person schreibt dir gemeine Dinge. Was machst du?",
          "schluessel": "Eine fremde Person schreibt dir gemeine Dinge. Was ist der erste Schritt in deinem Plan?",
          "pictogram": "pikto-no",
          "answers": [
            "Ich schreibe genauso gemein zurück. Dann hört die Person auf.",
            "Ich mache ein Bildschirm-Foto. Dann blockiere ich die Person."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Zurück-Schreiben macht es oft schlimmer. Mach lieber ein Bildschirm-Foto. Dann blockiere die Person.",
          "feedbackCorrect": "Gut. Das Bildschirm-Foto ist dein Beweis. Blockieren stoppt die Nachrichten.",
          "remember": "Ich blockiere. Ich melde. Ich hole Hilfe."
        },
        "remember": "Gemeinheit ist nicht meine Schuld. Ich hole Hilfe.",
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
    "quizQuestions": [
      {
        "hinweis": "Ein Foto von zu Hause zeigt mehr als ein schönes Zimmer.",
        "question": "Du willst ein Foto von deiner neuen Wohnung posten. Woran denkst du zuerst?",
        "pictogram": "pikto-search",
        "answers": [
          "An die schönen Farben im Zimmer.",
          "An die Zahl der Likes für das Foto.",
          "An die Frage: Wer sieht das Foto?"
        ],
        "correctIndex": 2,
        "feedbackWrong": [
          "Schöne Farben schützen dich nicht. Prüfe zuerst: Wer sieht das Foto?",
          "Likes sagen nichts über deine Sicherheit.",
          null
        ],
        "feedbackCorrect": "Prüfe zuerst, wer es sehen kann."
      },
      {
        "hinweis": "Frag dich: Was weißt du über dieses Profil?",
        "question": "Eine Anfrage kommt von einem Profil ohne Foto. Was machst du?",
        "pictogram": "pikto-stranger",
        "answers": [
          "Ich nehme die Anfrage gleich an.",
          "Ich schreibe der Person erst eine Nachricht.",
          "Ich schaue mir das Profil genau an."
        ],
        "correctIndex": 2,
        "feedbackWrong": [
          "Ohne Foto weißt du wenig über die Person. Schau dir das Profil erst genau an.",
          "Eine Nachricht zeigt: Hier antwortet jemand. Schau lieber erst das Profil an.",
          null
        ],
        "feedbackCorrect": "Gut. Schau dir das Profil erst an. Du kennst die Person nicht? Dann lehne ab."
      },
      {
        "hinweis": "Überlege: Was möchtest du selbst gern lesen?",
        "question": "Jemand schreibt etwas. Du findest es dumm. Wie antwortest du?",
        "pictogram": "pikto-people",
        "answers": [
          "Ich bleibe freundlich.",
          "Ich schreibe etwas Gemeines.",
          "Ich mache mich lustig darüber."
        ],
        "correctIndex": 0,
        "feedbackWrong": [
          null,
          "Das verletzt. Bleib lieber freundlich.",
          "Auch Spott verletzt. Bleib lieber freundlich."
        ],
        "feedbackCorrect": "Gut. Du bleibst freundlich. Du musst auch nicht jedem antworten."
      },
      {
        "hinweis": "Frag dich: Was gehört nur dir?",
        "question": "Was kann privat sein?",
        "pictogram": "pikto-data",
        "answers": [
          "Ein Gruß.",
          "Telefon-Nummer.",
          "Ein Foto vom Himmel."
        ],
        "correctIndex": 1,
        "feedbackWrong": [
          "Ein Gruß ist meist nicht privat.",
          null,
          "Der Himmel zeigt nichts über dich."
        ],
        "feedbackCorrect": "Das ist richtig. Deine Telefon-Nummer ist privat."
      },
      {
        "hinweis": "Du musst das nicht aushalten. Was kannst du mit der Person machen?",
        "question": "Eine Person beleidigt dich immer wieder unter deinen Beiträgen. Was machst du?",
        "pictogram": "pikto-people",
        "answers": [
          "Ich beleidige die Person zurück.",
          "Ich blockiere sie und hole Hilfe.",
          "Ich lösche mein eigenes Profil."
        ],
        "correctIndex": 1,
        "feedbackWrong": [
          "Das macht den Streit größer. Blockiere lieber.",
          null,
          "Du musst nicht gehen. Die andere Person macht den Fehler."
        ],
        "feedbackCorrect": "Blockieren und Hilfe holen ist stark."
      },
      {
        "hinweis": "Frag dich: Wer ist mit öffentlich gemeint?",
        "question": "Bei einem Beitrag steht: öffentlich. Was heißt das?",
        "pictogram": "pikto-people",
        "answers": [
          "Alle im Internet können ihn sehen.",
          "Nur meine Freunde können ihn sehen.",
          "Nur Facebook selbst kann ihn sehen."
        ],
        "correctIndex": 0,
        "feedbackWrong": [
          null,
          "Öffentlich gilt für alle, nicht nur für Freunde.",
          "Nicht nur Facebook. Öffentlich heißt: alle im Internet."
        ],
        "feedbackCorrect": "Öffentlich heißt: alle können es sehen."
      },
      {
        "hinweis": "Auf dem Foto ist eine andere Person. Darf sie mitbestimmen?",
        "question": "Du hast ein Foto von einer Kollegin. Du willst es posten. Was machst du?",
        "pictogram": "pikto-photo",
        "answers": [
          "Ich poste es einfach.",
          "Ich frage die Kollegin.",
          "Ich schreibe keinen Namen dazu."
        ],
        "correctIndex": 1,
        "feedbackWrong": [
          "Auf dem Foto ist eine andere Person. Frag sie vorher.",
          null,
          "Man erkennt sie am Gesicht. Frag sie lieber."
        ],
        "feedbackCorrect": "Frag die Person vorher."
      },
      {
        "hinweis": "Überlege: Ist ein alter Beitrag wirklich weg?",
        "question": "Du hast vor ein paar Jahren etwas gepostet. Was stimmt?",
        "schluessel": "Warum sind alte Beiträge wichtig?",
        "pictogram": "pikto-people",
        "answers": [
          "Der Beitrag ist von allein weg.",
          "Facebook hat ihn nach 1 Jahr gelöscht.",
          "Andere können ihn heute noch sehen."
        ],
        "correctIndex": 2,
        "feedbackWrong": [
          "Beiträge sind nicht von allein weg. Sie bleiben. Du kannst sie selbst löschen.",
          "Facebook löscht alte Beiträge nicht. Sie bleiben. Du kannst sie selbst löschen.",
          null
        ],
        "feedbackCorrect": "Das ist richtig. Alte Beiträge bleiben sichtbar. Du kannst sie ansehen. Und du kannst sie löschen."
      },
      {
        "hinweis": "Frag dich: Was muss wirklich im Profil stehen?",
        "question": "Was ist gut im Profil?",
        "pictogram": "pikto-person",
        "answers": [
          "Nur nötige Informationen.",
          "Passwort öffentlich schreiben.",
          "Meine genaue Adresse."
        ],
        "correctIndex": 0,
        "feedbackWrong": [
          null,
          "Ein Passwort darf nie öffentlich sein.",
          "Deine Adresse zeigt, wo du wohnst. Sie gehört nicht ins Profil."
        ],
        "feedbackCorrect": "Das ist sicher. Du zeigst nur nötige Informationen."
      },
      {
        "hinweis": "Ein Beitrag ist schnell draußen und schwer zurückzuholen.",
        "question": "Was ist eine gute Regel für Facebook?",
        "pictogram": "pikto-people",
        "answers": [
          "Immer alles sofort teilen.",
          "Nie etwas posten.",
          "Erst prüfen. Dann posten."
        ],
        "correctIndex": 2,
        "feedbackWrong": [
          "Prüfe erst, wer es sehen kann.",
          "Du darfst posten. Schau nur vorher, wer es sieht.",
          null
        ],
        "feedbackCorrect": "Erst prüfen. Dann posten."
      },
      {
        "id": "facebook/quiz/kern-profil-sichtbarkeit",
        "correctIndex": 1,
        "pictogram": "pikto-data",
        "question": "In deinem Facebook-Profil steht dein Geburts-Tag. Die Einstellung ist: Öffentlich. Nur deine Facebook-Freunde sollen den Tag sehen. Welche Einstellung wählst du?",
        "answers": [
          "Ich lasse Öffentlich stehen. Ich ändere mein Profil-Bild.",
          "Ich stelle für den Geburts-Tag Freunde ein.",
          "Ich lasse Öffentlich stehen. Ich schreibe meinen Namen kürzer."
        ],
        "feedbackCorrect": "Genau. Du stellst für diese Angabe Freunde ein. Öffentlich zeigt die Angabe auch anderen Personen.",
        "feedbackWrong": [
          "Ein neues Profil-Bild ändert diese Einstellung nicht. Stelle für den Geburts-Tag Freunde ein.",
          null,
          "Auch mit einem kürzeren Namen bleibt die Angabe öffentlich. Ändere die Einstellung für den Geburts-Tag."
        ],
        "hinweis": "Überlege: Wer soll deinen Geburts-Tag sehen?",
        "remember": "Ich wähle aus: Wer sieht meine Daten?"
      },
      {
        "id": "facebook/quiz/kern-unbekannte-anfrage",
        "correctIndex": 2,
        "pictogram": "pikto-stranger",
        "question": "Bei Facebook kommt eine Freundschafts-Anfrage. Das Profil hat ein Foto. Du kennst die Person nicht. Was machst du?",
        "answers": [
          "Ich nehme sie an. Das Foto sieht freundlich aus.",
          "Ich nehme sie erst mal an. Später entscheide ich.",
          "Ich lehne die Anfrage ab."
        ],
        "feedbackCorrect": "Genau. Du kennst die Person nicht. Ein Foto sagt nicht genug über die Person. Du musst die Anfrage nicht annehmen.",
        "feedbackWrong": [
          "Ein freundliches Foto sagt nicht genug über die Person. Du kennst sie nicht. Nimm die Anfrage nicht an.",
          "Nach dem Annehmen ist die Person schon dein Facebook-Freund. Lehne die unbekannte Anfrage ab.",
          null
        ],
        "hinweis": "Überlege: Kennst du diese Person?",
        "remember": "Unbekannte Anfragen ablehnen."
      },
      {
        "id": "facebook/quiz/kern-geld-link",
        "correctIndex": 0,
        "pictogram": "pikto-link",
        "question": "Bei Facebook schreibt dir ein fremdes Profil. Du kennst die Person nicht. Die Nachricht sagt: Kannst du mir 20 Euro leihen? Über diesen Link geht es. Was machst du?",
        "answers": [
          "Ich öffne den Link nicht. Ich sende auch kein Geld.",
          "Ich öffne den Link. Ich sende aber noch kein Geld.",
          "Ich sende erst 5 Euro. Dann warte ich auf eine Antwort."
        ],
        "feedbackCorrect": "Gut. Du öffnest den fremden Link nicht. Du sendest der unbekannten Person kein Geld. Du kannst die Nachricht einer vertrauten Person zeigen.",
        "feedbackWrong": [
          null,
          "Schon der Link kann auf eine falsche Seite führen. Öffne den Link nicht. Sende kein Geld.",
          "Auch 5 Euro sind echtes Geld. Du kennst die Person nicht. Sende kein Geld. Öffne den Link nicht."
        ],
        "hinweis": "Überlege: Kennst du die Person? Du musst weder den Link öffnen noch Geld senden.",
        "remember": "Fremde Links tippe ich nicht an."
      }
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
    "qrLink": "index.html#thema-facebook",
    "qrShortLink": "index.html#thema-facebook:kurz",
    "qrQuizLink": "index.html#thema-facebook:quiz",
    "qrMemoryLink": "index.html#thema-facebook:merk",
    "einfachLessons": [
      {
        "title": "Dein Facebook-Profil",
        "module": "Einfach",
        "pictogram": "pikto-data",
        "icon": "message",
        "text": [
          "Du hast ein Profil auf Facebook.",
          "Andere sehen dein Profil.",
          "Du kannst einstellen: Wer sieht dein Profil?",
          "Am besten sehen es nur Freunde.",
          "Eine vertraute Person hilft dir beim Einstellen."
        ],
        "remember": "Dein Profil: nur Freunde sehen es.",
        "vorbildWer": "Alex",
        "vorbild": [
          "Alex öffnet die Einstellungen bei Facebook.",
          "Er stellt ein: Nur Freunde sehen mein Profil.",
          "Tilda hilft ihm dabei."
        ]
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
        "remember": "Unbekannte Anfragen ablehnen.",
        "vorbildWer": "Tilda",
        "vorbild": [
          "Eine fremde Person will mit Tilda befreundet sein.",
          "Tilda kennt die Person nicht.",
          "Sie lehnt die Anfrage ab."
        ]
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
          "Du tippst nicht drauf.",
          "Du zeigst es einer vertrauten Person."
        ],
        "remember": "Komische Nachrichten zeigen, nicht antippen.",
        "vorbildWer": "Alex",
        "vorbild": [
          "Jemand schreibt Alex: Ich brauche schnell Geld.",
          "Tipp hier.",
          "Alex tippt nicht auf den Link.",
          "Er zeigt die Nachricht Tilda."
        ]
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
    },
    "einfachQuiz": [
      10,
      11,
      12
    ]
  },
  {
    "id": "instagram",
    "title": "Instagram",
    "icon": "instagram",
    "desc": "Fotos, Standort und Nachrichten prüfen",
    "transfer": "Schau heute in deine Einstellungen. Ist dein Konto privat?",
    "selfAssessment": {
      "question": "Wie sicher fühlst du dich auf Instagram?",
      "pictogram": "pikto-photo",
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
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "photo",
        "text": [
          {
            "text": "Stell dir vor: Du willst ein Foto bei Instagram posten.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Deine Freundin ist auch auf dem Foto."
          },
          {
            "text": "Was machst du? Das lernst du hier."
          },
          {
            "text": "Du bist unsicher? Dann tippe oben auf: Hilfe.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-photo"
      },
      {
        "title": "Foto posten",
        "examples": ["Auf dem Foto sieht man das Straßen-Schild vor deinem Haus.", "Auf dem Tisch liegt ein Brief. Man kann deinen Namen lesen."],
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
          "question": "Du willst ein Foto posten. Was prüfst du vorher?",
          "pictogram": "pikto-photo",
          "answers": [
            "Alles auf dem Foto.",
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
          "pictogram": "pikto-photo",
          "answers": [
            "Ich poste es einfach. Sie ist ja nur im Hintergrund.",
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
          "pictogram": "pikto-video",
          "answers": [
            "Ein Bild vom Bildschirm machen.",
            "Nichts speichern. Das Video ist ja schnell weg."
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
          "pictogram": "pikto-location",
          "answers": [
            "Er zeigt meinen Ort.",
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
        "examples": ["Eine fremde Person schreibt: Du bist so schön. Schick mir mehr Fotos von dir.", "Eine fremde Person fragt: Wo wohnst du? Bist du allein zu Hause?"],
        "warning": "Eine fremde Person schreibt dir. Sie fragt nach Fotos oder Daten. Das ist ein Warnzeichen. Antworte nicht und hol dir Hilfe.",
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
          "pictogram": "pikto-photo",
          "answers": [
            "Fotos schicken. Die Person ist nett.",
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
        "warning": "Manche Kommentare verletzen. Das ist nicht deine Schuld. Du kannst den Kommentar melden und die Person blockieren.",
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
          "pictogram": "pikto-photo",
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
          "pictogram": "pikto-photo",
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
            "text": "Hilfe holen.",
            "pictogram": "pikto-help"
          }
        ],
        "warning": "Ein fremdes Profil kann eine falsche Person sein. Auch ein schönes Bild ist kein Beweis.",
        "success": "Mit deinem Plan lässt du dich nicht drängen.",
        "practice": {
          "question": "Ein fremdes Profil schreibt dir und will schnell etwas von dir. Was machst du?",
          "pictogram": "pikto-message",
          "answers": [
            "Ich mache Stopp und zeige es einer vertrauten Person.",
            "Ich antworte sofort. Die Person soll nicht böse werden."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Schnell antworten drängt dich. Mach zuerst Stopp.",
          "feedbackCorrect": "Stopp und zeigen schützt dich.",
          "remember": "Bei Stress zeige ich es einer Person, der ich vertraue."
        },
        "remember": "Ich mache Stopp. Ich zeige es jemandem.",
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
    "quizQuestions": [
      {
        "hinweis": "Auf einem Selfie ist mehr zu sehen als dein Gesicht. Was noch?",
        "question": "Du machst ein Selfie in deiner Wohnung. Worauf achtest du?",
        "pictogram": "pikto-photo",
        "answers": [
          "Auf den Hintergrund.",
          "Auf mein Lächeln.",
          "Auf das richtige Licht."
        ],
        "correctIndex": 0,
        "feedbackWrong": [
          null,
          "Dein Lächeln ist schön. Es zeigt aber nicht, was hinter dir steht.",
          "Licht macht das Foto schön. Es schützt dich nicht."
        ],
        "feedbackCorrect": "Im Hintergrund steht oft mehr, als du denkst."
      },
      {
        "hinweis": "Die Ort-Angabe ist ein Teil der Story wie jeder andere.",
        "question": "Du markierst in einer Story den Ort. Wer sieht den Ort?",
        "pictogram": "pikto-location",
        "answers": [
          "Nur ich. Sonst niemand.",
          "Nur meine Freunde bei Instagram.",
          "Alle Zuschauer von der Story."
        ],
        "correctIndex": 2,
        "feedbackWrong": [
          "Der Ort ist nicht nur für dich sichtbar.",
          "Nicht nur Freunde. Alle Zuschauer von der Story sehen den Ort.",
          null
        ],
        "feedbackCorrect": "Alle sehen dann, wo du bist."
      },
      {
        "hinweis": "Geld für ein privates Foto ist ein Warnzeichen. Was machst du bei Warnzeichen?",
        "question": "Eine fremde Person bietet dir Geld für ein privates Foto. Was machst du?",
        "pictogram": "pikto-photo",
        "answers": [
          "Ich schicke das Foto. Dafür bekomme ich das Geld.",
          "Ich frage nach noch mehr Geld. Dann schicke ich das Foto.",
          "Ich schicke nichts und erzähle es einer vertrauten Person."
        ],
        "correctIndex": 2,
        "feedbackWrong": [
          "Das ist gefährlich. Sag nein und hol dir Hilfe.",
          "Auch für mehr Geld nicht. Das Foto bleibt bei dir.",
          null
        ],
        "feedbackCorrect": "Sag nein und hol dir Hilfe."
      },
      {
        "hinweis": "Die Story war 24 Stunden lang sichtbar. Was kann in der Zeit passiert sein?",
        "question": "Deine Story ist nach 24 Stunden weg. Ist sie dann wirklich weg?",
        "pictogram": "pikto-video",
        "answers": [
          "Nein. Andere können sie vorher speichern.",
          "Ja. Nach 24 Stunden ist sie für immer weg.",
          "Ja. Nach dem Löschen ist sie ganz weg."
        ],
        "correctIndex": 0,
        "feedbackWrong": [
          null,
          "Andere können die Story vorher speichern.",
          "Löschen hilft nicht mehr. Andere haben sie vielleicht schon gespeichert."
        ],
        "feedbackCorrect": "Andere können ein Bild vom Bildschirm machen."
      },
      {
        "hinweis": "Du musst das nicht allein aushalten. Wer kann dir helfen?",
        "question": "Mehrere Personen schreiben Gemeines unter dein Foto. Was machst du?",
        "pictogram": "pikto-photo",
        "answers": [
          "Ich behalte es für mich. Ich halte das aus.",
          "Ich zeige es einer vertrauten Person.",
          "Ich lösche mein Foto."
        ],
        "correctIndex": 1,
        "feedbackWrong": [
          "Damit bleibst du allein. Erzähle es lieber jemandem.",
          null,
          "Dein Foto ist nicht der Fehler. Hol dir lieber Hilfe."
        ],
        "feedbackCorrect": "Du musst das nicht allein aushalten."
      },
      {
        "hinweis": "Überlege: Kann man Fotos am Computer verändern?",
        "question": "Auf einem Foto sieht eine Person perfekt aus. Was kann sein?",
        "pictogram": "pikto-photo",
        "answers": [
          "Das Foto ist sicher echt.",
          "Das Foto ist bearbeitet.",
          "Die Person hat teure Kleidung."
        ],
        "correctIndex": 1,
        "feedbackWrong": [
          "Sehr viele Fotos sind bearbeitet.",
          null,
          "Kleidung erklärt es nicht. Das Foto ist meist bearbeitet."
        ],
        "feedbackCorrect": "Sehr viele Fotos sind bearbeitet."
      },
      {
        "hinweis": "Ein geteiltes Bild kommt nicht mehr zurück.",
        "question": "Was ist eine gute Regel für Instagram?",
        "pictogram": "pikto-photo",
        "answers": [
          "Immer sofort posten.",
          "Nur nachts posten.",
          "Erst prüfen. Dann teilen."
        ],
        "correctIndex": 2,
        "feedbackWrong": [
          "Das ist zu schnell. Prüfe erst, was zu sehen ist.",
          "Die Uhrzeit ändert nichts. Wichtig ist, was zu sehen ist.",
          null
        ],
        "feedbackCorrect": "Erst prüfen. Dann teilen."
      },
      {
        "hinweis": "Frag dich: Wem vertraust du wirklich?",
        "question": "Wer darf private Fotos bekommen?",
        "pictogram": "pikto-photo",
        "answers": [
          "Nur vertraute Menschen. Keine Fremden.",
          "Alle fremden Personen.",
          "Alle Personen mit netten Nachrichten."
        ],
        "correctIndex": 0,
        "feedbackWrong": [
          null,
          "Fremde Personen sollen keine privaten Fotos bekommen.",
          "Nett schreiben ist leicht. Das sagt nichts über die Person."
        ],
        "feedbackCorrect": "Das ist sicher. Private Fotos gehen nicht an Fremde."
      },
      {
        "hinweis": "Bei komischen Nachrichten hilft immer der gleiche erste Schritt.",
        "question": "Was hilft bei komischen Nachrichten?",
        "pictogram": "pikto-message",
        "answers": [
          "Sofort private Daten senden.",
          "Stopp machen.",
          "Schnell zurückschreiben."
        ],
        "correctIndex": 1,
        "feedbackWrong": [
          "Private Daten bleiben bei dir.",
          null,
          "Eine Antwort zeigt: Hier liest jemand. Mach lieber Stopp."
        ],
        "feedbackCorrect": "Das ist sicher. Du machst Stopp."
      },
      {
        "hinweis": "Überlege: Woher weiß Instagram, wo du bist?",
        "question": "Wie schützt du bei Instagram deinen Standort?",
        "pictogram": "pikto-location",
        "answers": [
          "Ich markiere immer den Ort.",
          "Ich markiere einen falschen Ort.",
          "Ich schalte den Standort aus."
        ],
        "correctIndex": 2,
        "feedbackWrong": [
          "Dann sieht jeder, wo du bist.",
          "Das ist unnötig. Schalte den Standort einfach aus.",
          null
        ],
        "feedbackCorrect": "Gut. Dann zeigt Instagram deinen Ort nicht an. Aber: Auch auf dem Foto kann man den Ort erkennen."
      },
      {
        "id": "instagram/quiz/kern-privatkonto",
        "correctIndex": 0,
        "pictogram": "pikto-data",
        "question": "Du hast ein neues Instagram-Konto. Noch folgt dir niemand. Das Konto ist öffentlich. Du willst selbst auswählen: Wer darf deine Fotos sehen? Was stellst du vor dem ersten Foto ein?",
        "answers": [
          "Ich stelle mein Konto auf privat.",
          "Ich ändere nur mein Profil-Bild.",
          "Ich schreibe keinen Namen zu den Fotos."
        ],
        "feedbackCorrect": "Genau. Du stellst dein Konto auf privat. Du entscheidest über neue Anfragen. Du bestätigst eine Anfrage? Dann sieht die Person deine Foto-Beiträge. Andere sehen diese Beiträge nicht.",
        "feedbackWrong": [
          null,
          "Ein anderes Profil-Bild macht dein Konto nicht privat. Stelle dein Konto auf privat.",
          "Auch ohne Namen bleibt ein Beitrag im öffentlichen Konto öffentlich. Stelle dein Konto auf privat."
        ],
        "hinweis": "Überlege: Welche Einstellung passt zu deinem Wunsch?",
        "remember": "Konto auf privat stellen."
      },
      {
        "id": "instagram/quiz/kern-foto-zustimmung",
        "correctIndex": 1,
        "pictogram": "pikto-photo",
        "question": "Du machst beim Ausflug ein Foto von deiner Freundin. Sie sagt: Das Foto gefällt mir. Du willst es auf Instagram posten. Über das Posten habt ihr noch nicht gesprochen. Was machst du zuerst?",
        "answers": [
          "Ich poste das Foto ohne ihren Namen.",
          "Ich frage: Darf ich das Foto auf Instagram posten?",
          "Ich poste das Foto nur in meinem privaten Konto."
        ],
        "feedbackCorrect": "Genau. Deine Freundin entscheidet mit. Sie sagt Ja? Dann kannst du das Foto posten. Sonst postest du es nicht.",
        "feedbackWrong": [
          "Auch ohne Namen ist deine Freundin zu sehen. Frage sie vor dem Posten.",
          null,
          "Auch im privaten Konto sehen andere das Foto. Frage deine Freundin vor dem Posten."
        ],
        "hinweis": "Das Foto gefällt ihr. Weißt du auch: Darfst du es auf Instagram posten?",
        "remember": "Fotos von anderen: erst fragen."
      }
    ],
    "helpQuestions": [
      "Was ist auf dem Foto zu sehen?",
      "Ist mein Standort sichtbar?",
      "Kenne ich diese Person?",
      "Macht mir ein Kommentar Stress oder Stress?"
    ],
    "memoryRules": [
      "Ich prüfe Fotos vor dem Posten.",
      "Ich schütze meinen Standort.",
      "Ich schicke fremden Personen keine privaten Fotos.",
      "Ich hole Unterstützung bei verletzenden Kommentaren."
    ],
    "qrLink": "index.html#thema-instagram",
    "qrShortLink": "index.html#thema-instagram:kurz",
    "qrQuizLink": "index.html#thema-instagram:quiz",
    "qrMemoryLink": "index.html#thema-instagram:merk",
    "einfachLessons": [
      {
        "title": "Deine Fotos auf Instagram",
        "module": "Einfach",
        "pictogram": "pikto-photo",
        "icon": "photo",
        "text": [
          "Du postest Fotos auf Instagram.",
          "Andere sehen deine Fotos.",
          "Du kannst einstellen: Wer sieht deine Fotos?",
          "Am besten ist dein Konto privat.",
          "Dann sehen nur Freunde deine Fotos."
        ],
        "remember": "Konto auf privat stellen.",
        "vorbildWer": "Tilda",
        "vorbild": [
          "Tilda stellt ihr Konto auf privat.",
          "Jetzt sehen nur ihre Freunde ihre Fotos."
        ]
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
        "remember": "Fotos von anderen: erst fragen.",
        "vorbildWer": "Alex",
        "vorbild": [
          "Alex hat ein Foto mit Tilda gemacht.",
          "Er will es posten.",
          "Zuerst fragt er Tilda: Darf ich das Foto posten?",
          "Tilda sagt Ja.",
          "Dann postet er es."
        ]
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
        "remember": "Unbekannte Nachrichten: vertraute Person fragen.",
        "vorbildWer": "Tilda",
        "vorbild": [
          "Ein fremdes Profil schreibt Tilda.",
          "Tilda antwortet nicht.",
          "Sie zeigt die Nachricht Alex."
        ]
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
    },
    "einfachQuiz": [
      10,
      11,
      2
    ]
  },
  {
    "id": "youtube",
    "title": "YouTube",
    "icon": "youtube",
    "desc": "Videos, Werbung und Pausen prüfen",
    "transfer": "Achte heute bei einem Video darauf: Ist das Werbung?",
    "selfAssessment": {
      "question": "Wie sicher fühlst du dich beim Schauen auf YouTube?",
      "pictogram": "pikto-video",
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
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "help",
        "text": [
          {
            "text": "Stell dir vor: Ein Video bei YouTube erzählt etwas sehr Überraschendes.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Stimmt das? Das lernst du hier."
          },
          {
            "text": "Du bist unsicher? Dann tippe oben auf: Hilfe.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-help"
      },
      {
        "title": "Videos prüfen",
        "examples": ["Ein Video sagt: Mit diesem Trick bist du schnell reich.", "Ein Video sagt: Dieses Wasser macht jede Krankheit gesund."],
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
          "pictogram": "pikto-video",
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
        "examples": ["Eine Frau zeigt im Video eine Creme. Unter dem Video steht: Werbung.", "Ein Mann sagt im Video: Kauf das jetzt. Nur heute ist es billiger."],
        "module": "Werbung",
        "icon": "warning",
        "text": [
          {
            "text": "In vielen Videos gibt es Werbung.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Werbung will: Du sollst etwas kaufen.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Du kaufst nicht sofort.",
            "pictogram": "pikto-location"
          }
        ],
        "practice": {
          "question": "Woran erkennst du Werbung in Videos?",
          "pictogram": "pikto-video",
          "answers": [
            "Es wird etwas verkauft.",
            "Das Video hat viele Likes."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Viele Likes zeigen keine Werbung. Werbung kann wie ein normales Video aussehen.",
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
          "pictogram": "pikto-video",
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
        "warning": "Manche Videos zeigen gefährliche Mutproben. Mach das nicht nach. Deine Gesundheit ist wichtiger.",
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
          "pictogram": "pikto-video",
          "answers": [
            "Ich mache das auch einmal.",
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
        "warning": "Manche Videos machen Angst. Du darfst das Video stoppen. Sprich mit einer vertrauten Person.",
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
          "pictogram": "pikto-video",
          "answers": [
            "Weiter schauen. Es ist ja nur ein Video.",
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
            "text": "KI ist ein Computer-Programm.",
            "pictogram": "pikto-ki"
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
            "text": "Ein Video macht dir Angst oder drängt dich.",
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
        "warning": "Manche Videos zeigen gefährliche Mutproben. Nachmachen kann dir schaden.",
        "success": "Video stoppen und Pause machen schützt dich vor Gefahr.",
        "practice": {
          "question": "Ein Video zeigt eine gefährliche Mutprobe. Was machst du?",
          "pictogram": "pikto-photo",
          "answers": [
            "Viele tun es. Also probiere ich es auch aus.",
            "Ich stoppe das Video und mache es nicht nach."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Viele Aufrufe heißen nicht: Das ist sicher. Stoppe das Video lieber.",
          "feedbackCorrect": "Viele Aufrufe heißen nicht: sicher.",
          "remember": "Ich mache gefährliche Videos nicht nach."
        },
        "remember": "Bei Angst stoppe ich das Video. Ich hole Hilfe.",
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
    "quizQuestions": [
      {
        "hinweis": "Reich werden mit einem Mittel. Klingt das echt?",
        "question": "Ein Video verspricht: Dieses Mittel macht dich reich. Was ist besser?",
        "pictogram": "pikto-video",
        "answers": [
          "Sofort glauben und gleich kaufen.",
          "Erst prüfen und nicht sofort kaufen.",
          "Das Video an Freunde schicken."
        ],
        "correctIndex": 1,
        "feedbackWrong": [
          "Viele Videos wollen etwas verkaufen. Kauf nicht sofort.",
          null,
          "Dann glauben es noch mehr Menschen. Prüfe es erst."
        ],
        "feedbackCorrect": "Das ist sicher. Du prüfst erst."
      },
      {
        "hinweis": "Am Video steht: Anzeige. Was heißt das?",
        "question": "Eine YouTuberin lobt ein Produkt. Am Video steht: Anzeige. Darunter steht ein Link zum Kaufen. Was ist das?",
        "pictogram": "pikto-video",
        "answers": [
          "Werbung.",
          "Ein normales Video.",
          "Eine Nachrichten-Sendung."
        ],
        "correctIndex": 0,
        "feedbackWrong": [
          null,
          "Am Video steht: Anzeige. Das zeigt dir: Das ist Werbung.",
          "Die YouTuberin macht hier Werbung für ein Produkt. Das ist keine Nachrichten-Sendung."
        ],
        "feedbackCorrect": "Das Wort Anzeige zeigt dir: Das ist Werbung.",
        "schluessel": "Eine YouTuberin lobt ein Produkt. Darunter steht ein Link zum Kaufen. Was ist das?"
      },
      {
        "hinweis": "Überlege: Wer kann sich dabei verletzen?",
        "question": "Freunde sagen: Alle machen diese Mutprobe. Was machst du?",
        "pictogram": "pikto-video",
        "answers": [
          "Ich mache nicht mit.",
          "Ich mache mit.",
          "Ich mache nur ein bisschen mit."
        ],
        "correctIndex": 0,
        "feedbackWrong": [
          null,
          "Das kann gefährlich sein. Du entscheidest selbst.",
          "Auch ein bisschen kann gefährlich sein."
        ],
        "feedbackCorrect": "Du entscheidest selbst."
      },
      {
        "hinweis": "Frag dich: Wolltest du wirklich so lange schauen?",
        "question": "Du wolltest 1 Video sehen. Jetzt ist 1 Stunde vorbei. Was machst du?",
        "pictogram": "pikto-video",
        "answers": [
          "Ich schaue einfach weiter.",
          "Ich schaue noch eine Stunde.",
          "Ich mache eine Pause."
        ],
        "correctIndex": 2,
        "feedbackWrong": [
          "Das ist viel Zeit. Mach lieber eine Pause.",
          "Dann wird es noch mehr Zeit. Mach lieber eine Pause.",
          null
        ],
        "feedbackCorrect": "Pausen tun dir gut."
      },
      {
        "hinweis": "Mit wem kannst du über deine Angst reden?",
        "question": "Nach einem Video kannst du nicht einschlafen. Was hilft dir?",
        "pictogram": "pikto-video",
        "answers": [
          "Noch mehr davon schauen.",
          "Das Handy unter das Kissen legen.",
          "Mit einer vertrauten Person reden."
        ],
        "correctIndex": 2,
        "feedbackWrong": [
          "Das macht es schlimmer. Rede lieber mit jemandem.",
          "Die Bilder sind trotzdem noch im Kopf. Rede lieber mit jemandem.",
          null
        ],
        "feedbackCorrect": "Reden hilft."
      },
      {
        "hinweis": "Überraschend heißt nicht immer wahr. Was hilft dir?",
        "question": "Ein Video sagt etwas Überraschendes. Was machst du?",
        "pictogram": "pikto-video",
        "answers": [
          "Ich glaube es sofort. Es klingt gut.",
          "Ich prüfe es an einer zweiten Stelle.",
          "Ich zähle die Likes unter dem Video."
        ],
        "correctIndex": 1,
        "feedbackWrong": [
          "Das ist zu schnell. Prüfe es an einer zweiten Stelle.",
          null,
          "Viele Likes machen nichts wahr."
        ],
        "feedbackCorrect": "Prüfe wichtige Sachen an einer zweiten Stelle."
      },
      {
        "hinweis": "Überlege: Warum bezahlt jemand für Werbung?",
        "question": "Was macht Werbung oft?",
        "pictogram": "pikto-video",
        "answers": [
          "Sie hilft mir beim Sparen.",
          "Sie will: Ich soll etwas kaufen.",
          "Sie sagt immer die Wahrheit."
        ],
        "correctIndex": 1,
        "feedbackWrong": [
          "Werbung will dir vor allem etwas verkaufen.",
          null,
          "Werbung zeigt nur die guten Seiten."
        ],
        "feedbackCorrect": "Das ist richtig. Werbung will oft verkaufen."
      },
      {
        "hinweis": "Frag dich: Wie fühlt sich dein Kopf nach 3 Stunden Videos an?",
        "question": "Warum sind Pausen wichtig?",
        "pictogram": "pikto-clock",
        "answers": [
          "Damit es mir gut geht.",
          "Damit Videos schneller werden.",
          "Damit der Akku voll bleibt."
        ],
        "correctIndex": 0,
        "feedbackWrong": [
          null,
          "Pausen verändern die Videos nicht.",
          "Beim Akku geht es nicht um dich. Pausen sind für dich."
        ],
        "feedbackCorrect": "Das ist richtig. Pausen helfen dir."
      },
      {
        "hinweis": "Du bist nicht allein. Wer kann dir helfen?",
        "question": "Was machst du bei verletzenden Kommentaren?",
        "pictogram": "pikto-video",
        "answers": [
          "Zurück beleidigen.",
          "Alle Kommentare lesen.",
          "Nicht allein bleiben."
        ],
        "correctIndex": 2,
        "feedbackWrong": [
          "Zurück beleidigen hilft nicht.",
          "Immer wieder lesen tut weh. Hol dir lieber Hilfe.",
          null
        ],
        "feedbackCorrect": "Das ist sicher. Du bleibst nicht allein."
      },
      {
        "hinweis": "Denk an die Regel aus diesem Thema. Wer bestimmt das Ende?",
        "question": "Was ist eine gute YouTube-Regel?",
        "pictogram": "pikto-video",
        "answers": [
          "Weiter schauen ist Pflicht.",
          "Stoppen ist erlaubt.",
          "Jedes Video zu Ende schauen."
        ],
        "correctIndex": 1,
        "feedbackWrong": [
          "Weiter schauen ist keine Pflicht.",
          null,
          "Du darfst jederzeit aufhören. Auch mittendrin."
        ],
        "feedbackCorrect": "Das ist richtig. Stoppen ist erlaubt."
      }
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
    "qrLink": "index.html#thema-youtube",
    "qrShortLink": "index.html#thema-youtube:kurz",
    "qrQuizLink": "index.html#thema-youtube:quiz",
    "qrMemoryLink": "index.html#thema-youtube:merk",
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
        "remember": "Prüfe das Video: Stimmt es?",
        "vorbildWer": "Alex",
        "vorbild": [
          "Ein Video sagt: Morgen gibt es kein Wasser.",
          "Alex glaubt das nicht sofort.",
          "Er schaut auf einer anderen Seite nach."
        ]
      },
      {
        "title": "Werbung erkennen",
        "module": "Einfach",
        "pictogram": "pikto-no",
        "icon": "warning",
        "text": [
          "Manchmal kommt Werbung im Video.",
          "Werbung will: Du sollst etwas kaufen.",
          "Du musst nichts kaufen.",
          "Du kannst Werbung überspringen.",
          "Du tippst nicht auf Werbung."
        ],
        "remember": "Werbung nicht antippen.",
        "vorbildWer": "Tilda",
        "vorbild": [
          "Im Video kommt Werbung für Schuhe.",
          "Tilda muss nichts kaufen.",
          "Sie überspringt die Werbung."
        ]
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
        "remember": "Nach einer Stunde Pause machen.",
        "vorbildWer": "Alex",
        "vorbild": [
          "Alex schaut schon eine Stunde Videos.",
          "Er macht Pause.",
          "Er geht kurz raus."
        ]
      }
    ],
    "miniQuestion": {
      "question": "Du prüfst ein Video. Was hilft dir?",
      "answers": [
        "Quelle und Inhalt ansehen.",
        "Nur die Farbe ansehen.",
        "Nur die Länge ansehen."
      ],
      "correct": 0,
      "explanation": "Quelle und Inhalt helfen dir. Nicht jedes Video ist richtig."
    },
    "einfachQuiz": [
      5,
      1,
      3
    ]
  },
  {
    "id": "snapchat",
    "title": "Snapchat",
    "icon": "snapchat",
    "desc": "Bilder, Standort und Stress erkennen",
    "transfer": "Prüfe heute in Snapchat: Wer kann deinen Standort sehen?",
    "selfAssessment": {
      "question": "Was weißt du schon über Snapchat?",
      "pictogram": "pikto-photo",
      "options": [
        "Noch nicht so viel",
        "Ein bisschen",
        "Schon einiges"
      ]
    },
    "learningGoals": [
      "Was mit Snaps passiert, nachdem du sie sendest",
      "Warum du deinen Standort schützt",
      "Was du tust, wenn jemand Stress macht"
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "photo",
        "text": [
          {
            "text": "Stell dir vor: Jemand bei Snapchat will ein Foto von dir.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Du willst das nicht."
          },
          {
            "text": "Was machst du? Das lernst du hier."
          },
          {
            "text": "Du bist unsicher? Dann tippe oben auf: Hilfe.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-photo"
      },
      {
        "title": "Bilder verschwinden nicht immer",
        "examples": ["Du schickst ein lustiges Bild. Es verschwindet nach 10 Sekunden. Dein Freund hat es vorher gespeichert.", "Du schickst ein Bild an eine Person. Später ist das Bild in einer Gruppe."],
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
        "warning": "Jemand kann dein Bild speichern. Auch wenn es nur kurz zu sehen ist. Sende nur Bilder, die andere sehen dürfen.",
        "practice": {
          "question": "Du schickst ein Bild über Snapchat. Was ist wichtig?",
          "pictogram": "pikto-photo",
          "answers": [
            "Niemand kann das Bild speichern. Es ist ja weg.",
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
            "text": "So kann jemand dein Bild speichern.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "So kann jemand dein Bild weiter-schicken.",
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
        "warning": "Niemand darf dich zu privaten Bildern drängen. Du darfst immer Nein sagen. Jemand drängt dich? Dann hol dir Hilfe.",
        "practice": {
          "question": "Jemand drängt dich, ein sehr privates Bild zu schicken. Was ist besser?",
          "pictogram": "pikto-photo",
          "answers": [
            "Bild schicken. Sonst ist die Person böse.",
            "Nein sagen und Hilfe holen."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Niemand darf dich drängen.",
          "feedbackCorrect": "Das ist sicher. Du darfst Nein sagen.",
          "remember": "Ich schicke keine privaten Bilder unter Stress."
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
          "question": "Die Standort-Funktion zeigt deinen Ort. Was ist besser?",
          "pictogram": "pikto-location",
          "answers": [
            "Standort immer für alle teilen.",
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
          "pictogram": "pikto-photo",
          "answers": [
            "Sofort annehmen. Das ist nett.",
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
        "title": "Stress erkennen",
        "examples": ["Jemand schreibt: Schick mir ein Bild. Sag es niemandem.", "Jemand schreibt: Schick mir ein Bild. Sonst bin ich nicht mehr dein Freund."],
        "module": "Stress",
        "icon": "warning",
        "text": [
          {
            "text": "Jemand sagt: Schick das Bild, aber sag es niemandem.",
            "pictogram": "pikto-photo"
          },
          {
            "text": "Das ist Stress und ein Warnzeichen.",
            "pictogram": "pikto-feel"
          },
          {
            "text": "Du darfst Nein sagen und Hilfe holen.",
            "pictogram": "pikto-help"
          }
        ],
        "practice": {
          "question": "Eine Nachricht macht dir Stress und fordert Geheimhaltung. Was ist das?",
          "pictogram": "pikto-key",
          "answers": [
            "Warnzeichen.",
            "Kein Problem."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht richtig. Stress und Geheimhaltung sind Warnzeichen.",
          "feedbackCorrect": "Das ist richtig. Stress ist ein Warnzeichen.",
          "remember": "Stress ist ein Warnzeichen."
        },
        "pictogram": "pikto-feel"
      },
      {
        "title": "Was kann ich tun?",
        "module": "Handlungsplan",
        "icon": "help",
        "text": [
          {
            "text": "Eine Nachricht macht dir Stress.",
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
        "warning": "Ein Bild, das du einmal sendest, kannst du nicht mehr zurückholen.",
        "success": "Nein sagen ist immer richtig. Auch bei Stress.",
        "practice": {
          "question": "Eine Person will unbedingt ein Bild von dir. Was machst du?",
          "pictogram": "pikto-photo",
          "answers": [
            "Ich sende das Bild. Dann hört die Person endlich auf.",
            "Ich sage Nein. Ich zeige es einer vertrauten Person."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Ein gesendetes Bild bekommst du nicht zurück. Sag lieber Nein.",
          "feedbackCorrect": "Nein sagen ist dein gutes Recht.",
          "remember": "Ich sage Nein. Ich zeige es jemandem."
        },
        "remember": "Kein Bild unter Stress. Ich sage Nein.",
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
            "text": "Bei Stress Hilfe holen.",
            "pictogram": "pikto-feel"
          }
        ],
        "pictogram": "pikto-done"
      }
    ],
    "quizQuestions": [
      {
        "hinweis": "Andere sehen den Snap 10 Sekunden lang. Was können sie in der Zeit tun?",
        "question": "Du hast ein Foto als Snap geschickt. Nach 10 Sekunden siehst du es nicht mehr. Ist das Foto dann überall weg?",
        "pictogram": "pikto-photo",
        "answers": [
          "Ja. Er ist dann überall gelöscht.",
          "Ja. Nach einer Woche ist er weg.",
          "Nein. Er kann gespeichert sein."
        ],
        "correctIndex": 2,
        "feedbackWrong": [
          "Andere können ihn vorher speichern.",
          "Es geht nicht um die Zeit. Andere können ihn speichern.",
          null
        ],
        "feedbackCorrect": "Ein Snap kann gespeichert sein.",
        "schluessel": "Dein Snap ist nach 10 Sekunden weg. Ist er aus der Welt?"
      },
      {
        "hinweis": "Auf der Karte ist dein Zuhause zu sehen. Wer soll das wissen?",
        "question": "Auf der Karte sehen alle Freunde dein Zuhause. Du willst deinen Standort dort nicht mehr zeigen. Was machst du?",
        "pictogram": "pikto-location",
        "answers": [
          "Ich schalte den Standort aus.",
          "Ich lasse das so.",
          "Ich sage den Freunden Bescheid."
        ],
        "correctIndex": 0,
        "feedbackWrong": [
          null,
          "Dann sieht jeder Freund, wo du wohnst.",
          "Bescheid sagen ändert die Karte nicht."
        ],
        "feedbackCorrect": "So sehen deine Freunde deinen Standort nicht mehr auf der Karte.",
        "schluessel": "Auf der Karte sehen alle Freunde dein Zuhause. Was machst du?"
      },
      {
        "hinweis": "Überlege: Muss man etwas beweisen, damit jemand einen mag?",
        "question": "Jemand sagt: Wenn du mich magst, schick mir das Bild. Du willst kein Bild schicken. Was machst du?",
        "pictogram": "pikto-photo",
        "answers": [
          "Ich sage nein und erzähle es jemandem.",
          "Ich schicke das Bild. Ich mag die Person.",
          "Ich schicke lieber ein anderes Bild."
        ],
        "correctIndex": 0,
        "feedbackWrong": [
          null,
          "Das ist Stress. Sag nein und hol dir Hilfe.",
          "Auch ein anderes Bild ist eine Antwort auf Stress."
        ],
        "feedbackCorrect": "Du darfst Nein sagen. Du musst kein Bild schicken.",
        "schluessel": "Jemand sagt: Wenn du mich magst, schick mir das Bild. Was machst du?"
      },
      {
        "hinweis": "Du kennst die Person nicht. Was darfst du dann tun?",
        "question": "Eine Person schickt dir viele Snaps. Du kennst sie nicht. Was machst du?",
        "pictogram": "pikto-person",
        "answers": [
          "Ich schicke zurück.",
          "Ich blockiere die Person.",
          "Ich schaue mir alle Snaps an."
        ],
        "correctIndex": 1,
        "feedbackWrong": [
          "Du weißt nicht, wer das ist. Schick nichts zurück.",
          null,
          "Anschauen bringt dir nichts. Blockiere lieber."
        ],
        "feedbackCorrect": "Bei Fremden darfst du blockieren."
      },
      {
        "hinweis": "Sag es niemandem. Das ist ein bekanntes Muster. Welches?",
        "question": "Eine Nachricht sagt: Schick ein Bild, aber sag es niemandem. Was ist das?",
        "pictogram": "pikto-photo",
        "answers": [
          "Kein Problem.",
          "Ein Spaß.",
          "Warnzeichen."
        ],
        "correctIndex": 2,
        "feedbackWrong": [
          "Stress und Geheimhaltung sind Warnzeichen.",
          "Ein Spaß braucht kein Geheimnis.",
          null
        ],
        "feedbackCorrect": "Das ist richtig. Es ist ein Warnzeichen."
      },
      {
        "hinweis": "Frag dich: Woher weiß die Karte, wo du bist?",
        "question": "Snapchat zeigt deinen Ort auf einer Karte. Was ist sicherer?",
        "pictogram": "pikto-location",
        "answers": [
          "Die Karte für alle anlassen.",
          "Die Karte ausschalten.",
          "Nur einen Freund sehen lassen."
        ],
        "correctIndex": 1,
        "feedbackWrong": [
          "Dann sieht jeder, wo du bist.",
          null,
          "Das ist besser als für alle. Aber auch ein Freund kann es weitererzählen. Am sichersten ist: Karte aus."
        ],
        "feedbackCorrect": "Gut. Dann zeigt die Karte deinen Ort nicht. Aber: Auch ein Bild kann den Ort zeigen."
      },
      {
        "hinweis": "Bei Stress hast du immer ein Wort. Welches Wort ist das?",
        "question": "Was darfst du bei Stress sagen?",
        "pictogram": "pikto-warning",
        "answers": [
          "Immer Ja.",
          "Nein.",
          "Erst mal nichts sagen."
        ],
        "correctIndex": 1,
        "feedbackWrong": [
          "Du musst nicht immer Ja sagen.",
          null,
          "Schweigen hilft oft nicht. Die Person macht weiter Stress. Sag lieber klar Nein."
        ],
        "feedbackCorrect": "Das ist richtig. Du darfst Nein sagen."
      },
      {
        "hinweis": "Überlege: Was passiert, wenn du ein Bild vom Bildschirm machst?",
        "question": "Du machst ein Bild vom Bildschirm. Was hast du dann?",
        "pictogram": "pikto-photo",
        "answers": [
          "Ein Video von allem auf dem Bildschirm.",
          "Eine gelöschte Nachricht.",
          "Ein Bild von allem auf dem Bildschirm."
        ],
        "correctIndex": 2,
        "feedbackWrong": [
          "Ein Bild vom Bildschirm ist ein Foto, kein Video.",
          "Nichts wird gelöscht. Du hast ein Foto gemacht.",
          null
        ],
        "feedbackCorrect": "Du hast ein Foto vom Bildschirm."
      },
      {
        "hinweis": "Bei Unbekannten hilft immer der gleiche erste Schritt.",
        "question": "Was machst du bei komischen Kontakten?",
        "pictogram": "pikto-photo",
        "answers": [
          "Prüfen.",
          "Private Bilder senden.",
          "Sofort zurückschreiben."
        ],
        "correctIndex": 0,
        "feedbackWrong": [
          null,
          "Private Bilder gehören nicht an Fremde.",
          "Eine Antwort zeigt: Hier liest jemand. Prüfe lieber erst."
        ],
        "feedbackCorrect": "Das ist sicher. Du prüfst Kontakte."
      },
      {
        "hinweis": "Was gesendet ist, kannst du nicht zurückholen.",
        "question": "Was ist eine gute Snapchat-Regel?",
        "pictogram": "pikto-photo",
        "answers": [
          "Erst denken. Dann senden.",
          "Schnell schicken.",
          "Alles wieder löschen."
        ],
        "correctIndex": 0,
        "feedbackWrong": [
          null,
          "Schnell schicken kann Probleme machen.",
          "Löschen kommt zu spät. Denk lieber vorher nach."
        ],
        "feedbackCorrect": "Das ist sicher. Erst denken, dann senden."
      }
    ],
    "helpQuestions": [
      "Kann jemand das speichern?",
      "Muss ich meinen Standort zeigen?",
      "Macht jemand Stress?",
      "Kenne ich diese Person?"
    ],
    "memoryRules": [
      "Bilder können gespeichert werden.",
      "Ich schütze meinen Standort.",
      "Ich prüfe Kontakte.",
      "Ich sage Nein bei Stress."
    ],
    "qrLink": "index.html#thema-snapchat",
    "qrShortLink": "index.html#thema-snapchat:kurz",
    "qrQuizLink": "index.html#thema-snapchat:quiz",
    "qrMemoryLink": "index.html#thema-snapchat:merk",
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
          "Sie machen ein Bildschirm-Foto.",
          "Das Bild ist dann für immer da.",
          "Dürfen alle das Bild sehen? Nur dann schickst du es."
        ],
        "remember": "Bilder verschwinden nicht wirklich.",
        "vorbildWer": "Tilda",
        "vorbild": [
          "Tilda will ein Bild schicken.",
          "Sie fragt sich: Dürfen alle das Bild sehen?",
          "Ja.",
          "Dann schickt sie es."
        ]
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
        "remember": "Standort ausschalten.",
        "vorbildWer": "Alex",
        "vorbild": [
          "Snapchat zeigt den Ort von Alex auf einer Karte.",
          "Alex schaltet den Standort aus.",
          "Tilda hilft ihm dabei."
        ]
      },
      {
        "title": "Niemand darf dich zwingen",
        "module": "Einfach",
        "pictogram": "pikto-no",
        "icon": "stop",
        "text": [
          "Jemand macht dir Stress.",
          "Die Person sagt: Schick mir ein Bild!",
          "Du willst das nicht.",
          "Du musst das nicht machen.",
          "Du sagst nein.",
          "Du sagst es einer vertrauten Person."
        ],
        "remember": "Du darfst nein sagen.",
        "vorbildWer": "Tilda",
        "vorbild": [
          "Jemand schreibt Tilda: Schick mir ein Bild von dir.",
          "Tilda will das nicht.",
          "Sie sagt Nein.",
          "Sie erzählt es Alex."
        ]
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
    },
    "einfachQuiz": [
      0,
      1,
      2
    ]
  },
  {
    "id": "tiktok",
    "title": "TikTok",
    "icon": "tiktok",
    "desc": "Trends, Videos, Nachrichten und Pausen",
    "transfer": "Achte heute auf die Zeit. Wie lange schaust du Videos? Mach dann eine Pause.",
    "selfAssessment": {
      "question": "Wie sicher fühlst du dich bei TikTok?",
      "pictogram": "pikto-video",
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
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "help",
        "text": [
          {
            "text": "Stell dir vor: Bei TikTok machen viele einen gefährlichen Trend nach.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Musst du mitmachen? Das lernst du hier."
          },
          {
            "text": "Du bist unsicher? Dann tippe oben auf: Hilfe.",
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
          "pictogram": "pikto-video",
          "answers": [
            "Ich mache mit. Es sieht lustig aus.",
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
        "title": "Gefährliche Trends erkennen",
        "examples": ["Ein Trend sagt: Halte die Luft lange an. Das ist gefährlich.", "Ein Trend sagt: Iss ganz scharfe Chips. Das kann weh tun."],
        "warning": "Manche Trends sind gefährlich. Ein Trend kann weh tun? Dann mach nicht mit. Deine Gesundheit ist wichtiger.",
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
          "question": "TikTok zeigt dir immer mehr ähnliche Videos. Du schaust schon sehr lange. Was ist wichtig?",
          "schluessel": "Du schaust schon sehr lange TikTok. Was ist wichtig?",
          "pictogram": "pikto-clock",
          "answers": [
            "Ich darf Pause machen.",
            "Ich muss immer weiter schauen."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Das ist nicht richtig. Du musst nicht immer weiter schauen.",
          "feedbackCorrect": "Das ist richtig. Du darfst Pause machen.",
          "remember": "Etwas tut mir nicht gut? Dann mache ich Pause."
        },
        "pictogram": "pikto-screen"
      },
      {
        "title": "Private Nachrichten",
        "examples": ["Eine fremde Person schreibt: Ich mag deine Videos. Gib mir deine Telefon-Nummer.", "Eine fremde Person schreibt: Ich schicke dir Geld. Du schickst mir ein Foto."],
        "warning": "Fremde können dir schreiben. Sie fragen nach Adresse, Fotos oder Daten. Gib solche Daten nicht weiter.",
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
          "pictogram": "pikto-house",
          "answers": [
            "Adresse schicken. Die Person ist nett.",
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
          "pictogram": "pikto-video",
          "answers": [
            "Ich prüfe: Was sieht man im Video?",
            "Ich poste sofort. Das Video ist gut."
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
          "pictogram": "pikto-video",
          "answers": [
            "Unterstützung holen.",
            "Ich halte das aus. Ich sage nichts."
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
            "text": "KI ist ein Computer-Programm.",
            "pictogram": "pikto-ki"
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
            "text": "Gefährlicher Trend, komischer Kommentar oder Stress?",
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
        "warning": "Ein Trend kann gefährlich sein, auch wenn viele mitmachen.",
        "success": "Pause machen und nicht nachmachen schützt dich.",
        "practice": {
          "question": "Ein Kommentar drängt dich: Schick private Daten. Was machst du?",
          "pictogram": "pikto-data",
          "answers": [
            "Ich sende keine privaten Daten und mache Pause.",
            "Ich sende die Daten schnell. Dann ist Ruhe."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Bei Stress ist Vorsicht besonders wichtig. Sende keine privaten Daten.",
          "feedbackCorrect": "Private Daten bleiben privat, auch bei Stress.",
          "remember": "Private Daten sende ich nie unter Stress."
        },
        "remember": "Ich mache Pause. Ich hole Unterstützung.",
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
    "quizQuestions": [
      {
        "hinweis": "Luft anhalten kann gefährlich werden. Was heißt das für dich?",
        "question": "Bei einer Challenge sollst du die Luft anhalten. Was machst du?",
        "pictogram": "pikto-video",
        "answers": [
          "Ich probiere es.",
          "Ich mache nicht mit.",
          "Ich filme jemand anderen dabei."
        ],
        "correctIndex": 1,
        "feedbackWrong": [
          "Das ist gefährlich. Mach da nicht mit.",
          null,
          "Dann ist die andere Person in Gefahr."
        ],
        "feedbackCorrect": "Solche Challenges können sehr gefährlich sein."
      },
      {
        "hinweis": "Frag dich: Wer bestimmt, wann du aufhörst?",
        "question": "Es ist spät. Du bist müde. Du willst jetzt aufhören. Das nächste Video startet von allein. Was machst du?",
        "pictogram": "pikto-clock",
        "answers": [
          "Ich schaue weiter.",
          "Ich lege das Handy weg.",
          "Ich schaue noch drei Videos."
        ],
        "correctIndex": 1,
        "feedbackWrong": [
          "Dann wird es sehr spät. Du bestimmst, wann Schluss ist.",
          null,
          "Nach drei kommen wieder neue. Leg das Handy lieber weg."
        ],
        "feedbackCorrect": "Du bestimmst, wann Schluss ist.",
        "schluessel": "Es ist spät. Das nächste Video startet von allein. Was machst du?"
      },
      {
        "hinweis": "Ein Geschenk klingt nett. Aber wofür braucht die Person deine Adresse?",
        "question": "Eine fremde Person will dir ein Geschenk schicken. Du kennst die Person nicht. Sie fragt nach deiner Adresse. Was machst du?",
        "pictogram": "pikto-house",
        "answers": [
          "Ich schreibe die Adresse nicht.",
          "Ich schreibe meine Adresse.",
          "Ich schreibe nur meine Straße."
        ],
        "correctIndex": 0,
        "feedbackWrong": [
          null,
          "So kommen Fremde an deine Adresse.",
          "Auch die Straße zeigt, wo du wohnst."
        ],
        "feedbackCorrect": "Du gibst einer fremden Person deine Adresse nicht.",
        "schluessel": "Jemand will dir ein Geschenk schicken. Die Person fragt nach deiner Adresse. Was machst du?"
      },
      {
        "hinweis": "Auf dem Schild steht dein Straßen-Name. Wer soll den lesen?",
        "question": "In deinem Video sieht man das Straßen-Schild. Was machst du?",
        "pictogram": "pikto-video",
        "answers": [
          "Ich poste es so.",
          "Ich mache das Video dunkler.",
          "Ich nehme das Video neu auf."
        ],
        "correctIndex": 2,
        "feedbackWrong": [
          "Am Schild sieht man, wo du wohnst.",
          "Das Schild ist trotzdem zu lesen. Nimm das Video neu auf.",
          null
        ],
        "feedbackCorrect": "Das Schild verrät, wo du wohnst."
      },
      {
        "hinweis": "Du musst Gemeines nicht stehen lassen. Was bietet TikTok dafür an?",
        "question": "Unter deinem Video macht sich jemand über dich lustig. Was tust du?",
        "pictogram": "pikto-video",
        "answers": [
          "Ich lese den Kommentar immer wieder.",
          "Ich schreibe etwas Gemeines zurück.",
          "Ich melde den Kommentar."
        ],
        "correctIndex": 2,
        "feedbackWrong": [
          "Das tut dir nicht gut. Melde den Kommentar lieber.",
          "Dann wird der Streit größer. Melde den Kommentar.",
          null
        ],
        "feedbackCorrect": "Melden ist erlaubt und hilft."
      },
      {
        "hinweis": "Überlege: Warum zeigt TikTok dir immer ähnliche Videos?",
        "question": "Was macht TikTok mit ähnlichen Videos?",
        "pictogram": "pikto-video",
        "answers": [
          "Es zeigt oft mehr davon.",
          "Es stoppt immer sofort.",
          "Es zeigt danach ganz andere Videos."
        ],
        "correctIndex": 0,
        "feedbackWrong": [
          null,
          "TikTok stoppt nicht von allein.",
          "Meist kommt mehr vom Gleichen."
        ],
        "feedbackCorrect": "Das ist richtig. TikTok zeigt oft mehr davon."
      },
      {
        "hinweis": "Bei Trends hilft der gleiche Schritt wie überall.",
        "question": "Was schützt dich bei Trends?",
        "pictogram": "pikto-video",
        "answers": [
          "Immer mitmachen.",
          "Mitmachen. Freunde schauen ja zu.",
          "Vorher prüfen."
        ],
        "correctIndex": 2,
        "feedbackWrong": [
          "Du musst nicht mitmachen.",
          "Zuschauer machen den Trend nicht sicher.",
          null
        ],
        "feedbackCorrect": "Das ist sicher. Du prüfst vorher."
      },
      {
        "hinweis": "Frag dich: Wem gehören deine Daten?",
        "question": "Was schützt private Daten?",
        "pictogram": "pikto-data",
        "answers": [
          "Allen schicken.",
          "Nicht an Fremde senden.",
          "In das Video schreiben."
        ],
        "correctIndex": 1,
        "feedbackWrong": [
          "Fremde sollen private Daten nicht bekommen.",
          null,
          "Im Video sehen es noch mehr Menschen."
        ],
        "feedbackCorrect": "Das ist sicher. Du sendest sie nicht an Fremde."
      },
      {
        "hinweis": "Du bestimmst, wann Schluss ist. Was kannst du dafür tun?",
        "question": "Was darfst du bei TikTok machen?",
        "pictogram": "pikto-video",
        "answers": [
          "TikTok schließen.",
          "Nie Pause machen.",
          "Warten, bis die Videos aufhören."
        ],
        "correctIndex": 0,
        "feedbackWrong": [
          null,
          "Pausen sind erlaubt.",
          "Die Videos hören nicht von allein auf."
        ],
        "feedbackCorrect": "Das ist richtig. Du darfst TikTok schließen."
      },
      {
        "hinweis": "Ein Video im Netz erreicht sofort viele Menschen.",
        "question": "Was ist eine gute TikTok-Regel?",
        "pictogram": "pikto-video",
        "answers": [
          "Sofort posten.",
          "Erst prüfen.",
          "Posten und später löschen."
        ],
        "correctIndex": 1,
        "feedbackWrong": [
          "Sofort posten kann schaden.",
          null,
          "Löschen kommt zu spät. Andere haben es schon gesehen."
        ],
        "feedbackCorrect": "Das ist sicher. Erst prüfen ist besser."
      }
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
    "qrLink": "index.html#thema-tiktok",
    "qrShortLink": "index.html#thema-tiktok:kurz",
    "qrQuizLink": "index.html#thema-tiktok:quiz",
    "qrMemoryLink": "index.html#thema-tiktok:merk",
    "einfachLessons": [
      {
        "title": "Was du bei TikTok siehst",
        "module": "Einfach",
        "pictogram": "pikto-screen",
        "icon": "understand",
        "text": [
          "TikTok zeigt dir viele Videos.",
          "TikTok merkt sich: Das gefällt dir.",
          "Es zeigt dir immer mehr davon.",
          "Dann siehst du oft das Gleiche.",
          "Schau auch andere Kanäle an.",
          "Manche Videos zeigen gefährliche Trends.",
          "Du musst nicht mitmachen."
        ],
        "remember": "TikTok zeigt dir nur bestimmte Videos.",
        "vorbildWer": "Alex",
        "vorbild": [
          "Bei TikTok springen viele von einer Mauer.",
          "Das ist gefährlich.",
          "Alex macht das nicht nach.",
          "Er schaut ein anderes Video."
        ]
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
        "remember": "Nachrichten von Unbekannten: vertraute Person fragen.",
        "vorbildWer": "Tilda",
        "vorbild": [
          "Eine fremde Person schreibt Tilda privat.",
          "Tilda antwortet nicht.",
          "Sie zeigt die Nachricht Alex."
        ]
      },
      {
        "title": "Pause machen",
        "module": "Einfach",
        "pictogram": "pikto-pause",
        "icon": "stop",
        "text": [
          "TikTok will: Du sollst lange schauen.",
          "Das ist anstrengend.",
          "Du machst nach einer Stunde Pause.",
          "Du stellst einen Timer.",
          "Das hilft dir."
        ],
        "remember": "Timer stellen. Pause machen.",
        "vorbildWer": "Alex",
        "vorbild": [
          "Alex stellt einen Timer auf eine Stunde.",
          "Der Timer klingelt.",
          "Alex legt das Handy weg."
        ]
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
    },
    "einfachQuiz": [
      0,
      2,
      1
    ]
  },
  {
    "id": "hilfe",
    "title": "Hilfe bei Problemen",
    "icon": "help",
    "desc": "Selbst lösen, erst stoppen, passende Unterstützung holen",
    "transfer": "Überlege heute: Wer hilft dir bei einem Handy-Problem? Und wer hilft dir bei Angst oder Druck? Das kann auch dieselbe Person sein. Du kannst die Nummern im Handy speichern.",
    "selfAssessment": {
      "question": "Etwas passiert im Internet. Hast du einen Plan?",
      "pictogram": "pikto-help",
      "options": [
        "Noch nicht so genau",
        "Ein bisschen",
        "Schon ziemlich gut"
      ]
    },
    "vorhersage": {
      "situation": {
        "leicht": "An einem Tag passieren dir 2 Dinge. Am Morgen macht dein Handy keinen Ton mehr. Du hast den Wecker nicht gehört. Am Abend schreibt dir ein Bekannter: Antworte sofort. Und sag keinem etwas davon.",
        "einfach": "An einem Tag passieren dir 2 Dinge. Am Morgen macht dein Handy keinen Ton mehr, und du hast deshalb den Wecker nicht gehört. Am Abend schreibt dir ein Bekannter: Antworte sofort. Und sag keinem etwas davon.",
        "standard": "An einem einzigen Tag passieren dir 2 Dinge: Morgens bleibt dein Handy stumm, und du verschläfst, weil du den Wecker nicht hörst. Abends schreibt dir ein Bekannter: Antworte sofort. Und sag keinem etwas davon."
      },
      "question": {
        "leicht": "Was machst du?",
        "einfach": "Was machst du?",
        "standard": "Wie gehst du damit um?"
      },
      "options": [
        {
          "leicht": "Bei beidem frage ich sofort jemanden um Hilfe.",
          "einfach": "Bei beiden Problemen frage ich sofort jemanden um Hilfe.",
          "standard": "In beiden Fällen bitte ich sofort jemanden um Hilfe."
        },
        {
          "leicht": "Bei beidem mache ich erst Stopp.",
          "einfach": "Bei beiden Problemen mache ich erst Stopp.",
          "standard": "In beiden Fällen mache ich erst einmal Stopp."
        },
        {
          "leicht": "Beim Handy probiere ich selbst etwas. Bei der Nachricht mache ich erst Stopp.",
          "einfach": "Beim Handy probiere ich selbst etwas aus, und bei der Nachricht mache ich erst Stopp.",
          "standard": "Beim Handy probiere ich selbst etwas aus, bei der Nachricht mache ich erst einmal Stopp."
        }
      ],
      "aufloesung": {
        "leicht": "Die beiden Probleme sind verschieden. Beim Handy klappt etwas nicht. Da kannst du oft selbst etwas tun. Zum Beispiel: die Lautstärke prüfen. Bei der Nachricht macht dir jemand Druck. Da machst du erst Stopp. Und du schickst nichts. Du kommst nicht weiter? Dann holst du dir Hilfe.",
        "einfach": "Die beiden Probleme sind verschieden. Beim Handy klappt etwas nicht, und da kannst du oft selbst etwas tun, zum Beispiel die Lautstärke prüfen. Bei der Nachricht macht dir jemand Druck. Da machst du erst Stopp und schickst nichts. Wenn du nicht weiterkommst, holst du dir Hilfe.",
        "standard": "Die beiden Probleme sind verschieden. Beim Handy funktioniert etwas nicht – da kannst du oft selbst etwas tun, zum Beispiel die Lautstärke prüfen. Bei der Nachricht setzt dich jemand unter Druck: Da machst du erst einmal Stopp und schickst nichts. Kommst du nicht weiter, holst du dir Hilfe."
      },
      "pictogram": "pikto-phone"
    },
    "learningGoals": [
      "Erkennen: Was für ein Problem ist das?",
      "Sicher selbst handeln.",
      "Bei Druck oder Angst erst stoppen.",
      "Die passende Hilfe finden.",
      "Unterstützung wirklich holen.",
      "Einen Notfall erkennen."
    ],
    "lernzielStruktur": [
      {
        "id": "problemart",
        "fach": "Problemart unterscheiden: etwas klappt nicht – etwas macht Druck oder Angst – jemand ist akut in Gefahr"
      },
      {
        "id": "selbst",
        "fach": "Selbst sicher handeln: ausprobieren, noch einmal nachsehen, schließen, ignorieren, blockieren, melden"
      },
      {
        "id": "stoppen",
        "fach": "Bei Druck oder Angst stoppen: nichts vorschnell senden, zahlen oder bestätigen"
      },
      {
        "id": "unterstuetzung-waehlen",
        "fach": "Passende Unterstützung auswählen: technische Unterstützung, Vertrauensperson, Beratungsstelle"
      },
      {
        "id": "unterstuetzung-holen",
        "fach": "Unterstützung wirklich holen: Problem zeigen oder erklären, bei Bedarf eine zweite Person fragen"
      },
      {
        "id": "notfall",
        "fach": "Notfall erkennen: sofort eine Person vor Ort holen, 110 oder 112"
      }
    ],
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "help",
        "text": [
          {
            "text": "Mit dem Handy oder im Internet klappt nicht immer alles.",
            "pictogram": "pikto-phone"
          },
          {
            "text": "Manchmal findest du eine Einstellung nicht. Manchmal macht dir eine Nachricht Druck.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Vieles kannst du selbst lösen. Bei manchem holst du dir Hilfe.",
            "pictogram": "pikto-done"
          },
          {
            "text": "Du lernst 3 Fragen. Mit den Fragen findest du deinen nächsten Schritt.",
            "pictogram": "pikto-plan"
          }
        ],
        "pictogram": "pikto-help"
      },
      {
        "title": "Probleme sind verschieden",
        "module": "Was ist los?",
        "icon": "understand",
        "ketteSchritt": 1,
        "lernziele": [
          "problemart",
          "notfall"
        ],
        "text": [
          {
            "text": "Probleme sind verschieden. Darum schaust du zuerst: Was ist los?",
            "pictogram": "pikto-search"
          },
          {
            "text": "Etwas klappt nicht. Zum Beispiel: Du findest eine Einstellung nicht. Oder dein Handy macht keinen Ton.",
            "pictogram": "pikto-phone"
          },
          {
            "text": "Etwas macht dir Druck oder Angst. Zum Beispiel: Jemand drängt dich. Oder jemand droht dir.",
            "pictogram": "pikto-warning"
          },
          {
            "text": "Jemand ist in Gefahr. Das ist ein Notfall. Dann ruf sofort 110 oder 112.",
            "pictogram": "pikto-help"
          }
        ],
        "pictogram": "pikto-search",
        "practice": {
          "nachFehler": true,
          "schluessel": "Deine Freundin Jana wohnt allein. Sie schreibt dir: Bin in der Küche gestürzt. Komme nicht mehr hoch. Mein Kopf blutet. Was ist los? Was machst du jetzt?",
          "question": "Deine Freundin Jana wohnt allein. Sie ruft dich an. Sie sagt: Ich bin in der Küche gestürzt. Ich komme nicht mehr hoch. Mein Kopf blutet. Was ist los? Was machst du jetzt?",
          "pictogram": "pikto-friend",
          "hinweis": "Überlege: Ist Jana jetzt in Gefahr?",
          "answers": [
            "Ich sage zu Jana: Ruf du schnell 112 an.",
            "Jana ist in Gefahr. Ich rufe sofort 112 an.",
            "Ich frage morgen meine Betreuerin. Sie weiß dann Rat."
          ],
          "correctIndex": 1,
          "feedbackCorrect": "Richtig. Jana ist verletzt. Und sie ist allein. Jana ist in Gefahr. Das ist ein Notfall. Du sagst Jana: Ich hole Hilfe. Dann rufst du sofort 112 an. Du sagst Janas Adresse.",
          "feedbackWrong": [
            "Jana ist verletzt. Vielleicht kann sie gleich nicht mehr telefonieren. Darum rufst du selbst sofort 112 an.",
            null,
            "Morgen ist zu spät. Jana ist jetzt in Gefahr. Du rufst sofort 112 an."
          ],
          "remember": "Jemand ist in Gefahr? Dann ruf sofort 110 oder 112."
        }
      },
      {
        "title": "Druck oder Angst: erst stoppen",
        "module": "Druck oder Angst",
        "icon": "warning",
        "ketteSchritt": 2,
        "lernziele": [
          "stoppen"
        ],
        "text": [
          {
            "text": "Manchmal macht dir jemand Druck. Zum Beispiel: Mach das sofort. Oder: Erzähl es niemandem.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Oder jemand will etwas Wichtiges von dir. Zum Beispiel Geld, einen Code oder ein Foto.",
            "pictogram": "pikto-warning"
          },
          {
            "text": "Eine Nachricht macht dir Angst. Oder du hast ein komisches Gefühl im Bauch.",
            "pictogram": "pikto-feel"
          },
          {
            "text": "Das ist wichtig. Deine Gefühle sagen dir etwas.",
            "pictogram": "pikto-feel"
          },
          {
            "text": "Dann machst du erst Stopp. Du schickst nichts. Du bezahlst nichts. Du bestätigst nichts.",
            "pictogram": "pikto-pause"
          },
          {
            "text": "Mehr zu Tricks mit Geld und Codes lernst du im Thema Betrug.",
            "pictogram": "pikto-fraud"
          }
        ],
        "remember": "Meine Gefühle sind wichtig. Ich darf darüber sprechen.",
        "pictogram": "pikto-feel",
        "practice": {
          "nachFehler": true,
          "question": "Rico wohnt mit dir in der Wohn-Gruppe. Er schreibt dir: Leih mir morgen dein Fahrrad. Sag sofort Ja. Sonst bin ich sauer. Du willst morgen selbst mit dem Fahrrad fahren. Was machst du?",
          "pictogram": "pikto-message",
          "hinweis": "Überlege: Musst du sofort antworten?",
          "answers": [
            "Ich schreibe sofort Ja. Ich will keinen Ärger mit Rico.",
            "Ich antworte noch nicht. Erst überlege ich: Will ich das?",
            "Ich schreibe zurück: Dann bin ich eben auch sauer."
          ],
          "correctIndex": 1,
          "feedbackCorrect": "Gut. Rico macht dir Druck. Du darfst später antworten. Du überlegst in Ruhe. Danach entscheidest du selbst.",
          "feedbackWrong": [
            "Rico drängt dich. Unter Druck sagst du vielleicht schnell Ja. Das willst du später vielleicht nicht. Erst überlegst du in Ruhe.",
            null,
            "Dann streitet ihr vielleicht. Du darfst später antworten. Erst überlegst du in Ruhe."
          ],
          "remember": "Druck oder Angst? Dann mache ich erst Stopp."
        }
      },
      {
        "title": "Das kannst du selbst",
        "module": "Selbst handeln",
        "icon": "check",
        "ketteSchritt": 2,
        "lernziele": [
          "selbst"
        ],
        "text": [
          {
            "text": "Vieles kannst du selbst tun.",
            "pictogram": "pikto-done"
          },
          {
            "text": "Etwas klappt nicht? Probier es noch einmal. Oder sieh in den Einstellungen nach.",
            "pictogram": "pikto-phone"
          },
          {
            "text": "Ein Chat tut dir nicht gut? Dann kannst du ihn schließen. Oder du antwortest einfach nicht.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Eine Person stört dich immer wieder? Dann kannst du sie blockieren. Danach kann sie dir nicht mehr schreiben.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Etwas ist gemein oder verboten? Dann kannst du es melden. Die App prüft das dann.",
            "pictogram": "pikto-warning"
          },
          {
            "text": "Bei WhatsApp, Instagram oder TikTok geht das jeweils anders. Das lernst du in diesen Themen.",
            "pictogram": "pikto-phone"
          }
        ],
        "remember": "Vieles kann ich selbst lösen.",
        "pictogram": "pikto-done",
        "practice": {
          "nachFehler": true,
          "question": "Dein Handy macht plötzlich keinen Ton mehr. Du hörst keine Nachrichten und keine Anrufe. Was machst du zuerst?",
          "pictogram": "pikto-phone",
          "hinweis": "Überlege: Was kannst du selbst am Handy nachsehen?",
          "answers": [
            "Ich schaue zuerst in den Einstellungen nach dem Ton.",
            "Mein Handy ist kaputt. Ich kaufe mir ein neues.",
            "Ich frage eine Person. Sie kennt sich mit Handys aus.",
            "Ich warte. Vielleicht kommt der Ton von allein wieder."
          ],
          "correctIndex": 0,
          "auchMoeglich": [
            2
          ],
          "feedbackCorrect": "Genau. Oft ist nur der Ton leise gestellt. Oder das Handy ist stumm. Das siehst du in den Einstellungen. Das kannst du selbst.",
          "feedbackWrong": [
            null,
            "Dein Handy ist wahrscheinlich nicht kaputt. Oft ist nur der Ton aus. Schau zuerst in den Einstellungen nach.",
            null,
            "Der Ton kommt meistens nicht von allein wieder. Schau in den Einstellungen nach. Das dauert nicht lange."
          ],
          "feedbackAuch": [
            null,
            null,
            "Eine Person kann dir helfen. Sie kennt sich mit Handys aus. Oft findest du den Ton aber schon selbst in den Einstellungen.",
            null
          ],
          "remember": "Vieles kann ich selbst lösen."
        }
      },
      {
        "title": "Welche Hilfe passt?",
        "module": "Unterstützung",
        "icon": "help",
        "ketteSchritt": 3,
        "lernziele": [
          "unterstuetzung-waehlen",
          "notfall"
        ],
        "text": [
          {
            "text": "Es gibt verschiedene Arten von Hilfe. Du suchst die passende aus.",
            "pictogram": "pikto-search"
          },
          {
            "text": "Du hast eine Frage zum Handy? Dann frag eine Person. Sie kennt sich mit Handys aus.",
            "pictogram": "pikto-phone"
          },
          {
            "text": "Dir macht etwas Druck oder Angst? Dann sprich mit einer Person. Du vertraust ihr.",
            "pictogram": "pikto-ask"
          },
          {
            "text": "Es gibt auch Beratungs-Stellen. Dort kannst du anrufen oder schreiben.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Du hast ein Problem mit der Bank, einem Shop oder einer App? Dafür gibt es eigene Wege. Die lernst du in den anderen Themen.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Jemand ist in Gefahr? Dann ruf sofort 110 oder 112.",
            "pictogram": "pikto-warning"
          }
        ],
        "remember": "Ich hole mir passende Hilfe.",
        "pictogram": "pikto-help",
        "practice": {
          "nachFehler": true,
          "schluessel": "Es ist Freitag. Am Abend kommt eine Nachricht von deiner Chefin. Sie schreibt: Wir müssen am Montag über deine Arbeit sprechen. Du machst dir große Sorgen. Du kannst nicht schlafen. Welche Hilfe passt jetzt?",
          "question": "Es ist Freitag. Am Abend schreibt dir deine Chefin: Jemand hat sich über dich beschwert. Wir sprechen am Montag darüber. Du weißt nicht: Was war los? Du machst dir große Sorgen. Du kannst nicht schlafen. Welche Hilfe passt jetzt?",
          "pictogram": "pikto-feel",
          "hinweis": "Überlege: Wer kann dir jetzt zuhören?",
          "answers": [
            "Ich melde mich am Montag krank. Dann muss ich nicht hin.",
            "Ich sage niemandem etwas. Ich mache mir allein Sorgen.",
            "Ich rede mit einer Person. Ich vertraue ihr."
          ],
          "correctIndex": 2,
          "feedbackCorrect": "Gut. Die Nachricht macht dir Sorgen. Deine Gefühle sind wichtig. Du darfst darüber sprechen. Zusammen überlegt ihr: Was sagst du am Montag?",
          "feedbackWrong": [
            "Dann bleibt die Sorge. Und das Gespräch kommt später trotzdem. Rede lieber mit einer Person. Du vertraust ihr.",
            "Allein werden Sorgen oft größer. Du darfst darüber sprechen. Rede mit einer Person. Du vertraust ihr.",
            null
          ],
          "remember": "Meine Gefühle sind wichtig. Ich darf darüber sprechen."
        }
      },
      {
        "title": "Unterstützung wirklich holen",
        "module": "Unterstützung",
        "icon": "message",
        "ketteSchritt": 3,
        "lernziele": [
          "unterstuetzung-holen"
        ],
        "text": [
          {
            "text": "Du fragst eine Person. Zeig ihr das Problem auf deinem Handy. Oder erzähl kurz: Das ist passiert.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Sag auch: Das habe ich schon ausprobiert.",
            "pictogram": "pikto-done"
          },
          {
            "text": "Die Person kann nicht helfen? Oder sie ist nicht da? Zum Beispiel am Wochenende. Dann fragst du eine andere Person.",
            "pictogram": "pikto-people"
          },
          {
            "text": "Hilfe holen ist keine Schwäche.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Du willst eine gemeine Nachricht zeigen? Dann mach vorher ein Bild vom Bildschirm.",
            "pictogram": "pikto-photo"
          }
        ],
        "pictogram": "pikto-people",
        "practice": {
          "nachFehler": true,
          "question": "Deine Bus-App zeigt keine Zeiten mehr. Du hast die App schon neu gestartet. Jetzt fragst du deinen Mitbewohner Timo. Er kennt sich mit Apps aus. Was machst du?",
          "pictogram": "pikto-ask",
          "hinweis": "Überlege: Was muss Timo wissen?",
          "answers": [
            "Ich zeige Timo die App. Ich sage: Neu starten habe ich schon probiert.",
            "Ich sage nur: Mein Handy geht nicht. Timo findet den Fehler dann schon.",
            "Ich gebe Timo mein Handy. Dann gehe ich schnell in mein Zimmer."
          ],
          "correctIndex": 0,
          "feedbackCorrect": "Gut. Timo sieht das Problem gleich. Und er weiß: Das hast du schon probiert. So kann er dir schneller helfen.",
          "feedbackWrong": [
            null,
            "Dann muss Timo lange suchen. Zeig ihm die App. Und sag: Das habe ich schon probiert.",
            "Bleib lieber dabei. Dann siehst du: Das macht Timo. Und beim nächsten Mal kannst du es vielleicht selbst."
          ],
          "remember": "Ich zeige das Problem. Und ich sage: Das habe ich schon probiert."
        }
      },
      {
        "title": "Dein Hilfe-Check",
        "module": "Hilfe-Check",
        "icon": "check",
        "lernziele": [
          "problemart",
          "selbst",
          "stoppen",
          "unterstuetzung-waehlen",
          "unterstuetzung-holen",
          "notfall"
        ],
        "erinnern": true,
        "erinnernFrage": {
          "leicht": "Du kennst schon alle 3 Fragen. Weißt du sie noch? Denk kurz nach. Dann tippe auf: Zeig mir den Hilfe-Check.",
          "einfach": "Du kennst schon alle 3 Fragen. Weißt du sie noch? Überleg kurz, bevor du den Hilfe-Check aufdeckst.",
          "standard": "Alle 3 Fragen kennst du schon. Weißt du sie noch? Überleg kurz und deck dann den Hilfe-Check auf."
        },
        "erinnernKnopf": {
          "leicht": "Zeig mir den Hilfe-Check",
          "einfach": "Zeig mir den Hilfe-Check",
          "standard": "Hilfe-Check aufdecken"
        },
        "text": [
          {
            "text": "Das ist dein Hilfe-Check:",
            "pictogram": "pikto-plan"
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
        ],
        "pictogram": "pikto-plan"
      },
      {
        "title": "Das merke ich mir",
        "module": "Zusammenfassung",
        "icon": "remember",
        "mitPlan": true,
        "erinnernFrage": {
          "leicht": "Was weißt du noch? Wie geht dein Hilfe-Check? Denk kurz nach. Dann tippe auf: Zeig mir den Hilfe-Check.",
          "einfach": "Was weißt du noch aus diesem Thema, und wie geht dein Hilfe-Check? Überleg kurz, bevor du ihn aufdeckst.",
          "standard": "Was ist dir aus diesem Thema geblieben – und wie geht dein Hilfe-Check? Überleg kurz und deck ihn dann auf."
        },
        "erinnernKnopf": {
          "leicht": "Zeig mir den Hilfe-Check",
          "einfach": "Zeig mir den Hilfe-Check",
          "standard": "Hilfe-Check aufdecken"
        },
        "text": [
          {
            "text": "Das sind die wichtigsten Regeln aus diesem Thema.",
            "pictogram": "pikto-done"
          }
        ],
        "bullets": [],
        "pictogram": "pikto-done"
      }
    ],
    "quizQuestions": [
      {
        "nachFehler": true,
        "question": "Du willst in der Wetter-App nachsehen: Regnet es heute? Aber die App bewegt sich nicht mehr. Du tippst. Nichts passiert. Was machst du zuerst?",
        "pictogram": "pikto-screen",
        "hinweis": "Überlege: Was kannst du selbst mit der App machen?",
        "answers": [
          "Ich schließe die App. Dann öffne ich sie noch einmal.",
          "Ich lösche alle Apps. Dann ist das Handy wieder frei.",
          "Ich tippe ganz fest und ganz oft auf den Bildschirm."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Genau. Eine App hängt manchmal. Dann schließt du sie. Und du öffnest sie neu. Das klappt oft. Das kannst du selbst.",
        "feedbackWrong": [
          null,
          "Dann sind alle deine Apps weg. Das ist nicht nötig. Schließ nur diese eine App. Und öffne sie neu.",
          "Fest tippen hilft nicht. Die App hängt. Schließ die App. Und öffne sie neu."
        ],
        "remember": "Vieles kann ich selbst lösen."
      },
      {
        "nachFehler": true,
        "question": "Du schaust Nachrichten auf dem Handy. Ein Video zeigt einen schweren Unfall. Die Feuerwehr ist schon da. Das Video macht dir Angst. Was ist los? Was passt jetzt?",
        "pictogram": "pikto-video",
        "hinweis": "Überlege: Bist du in Gefahr? Oder macht dir etwas Angst?",
        "answers": [
          "Das ist ein Notfall. Ich rufe sofort 112 an.",
          "Ich schaue noch mehr Videos. Ich will alles genau wissen.",
          "Ich mache das Video aus. Ich rede mit jemandem darüber."
        ],
        "correctIndex": 2,
        "feedbackCorrect": "Gut. Das Video macht dir Angst. Dann hörst du auf zu schauen. Reden hilft oft. Du bist mit der Angst nicht allein.",
        "feedbackWrong": [
          "Die Feuerwehr ist schon da. Und du bist nicht in Gefahr. Aber das Video macht dir Angst. Mach es aus. Und rede mit jemandem darüber.",
          "Mehr Videos machen die Angst oft größer. Mach das Video aus. Und rede mit jemandem darüber.",
          null
        ],
        "remember": "Druck oder Angst? Dann mache ich erst Stopp."
      },
      {
        "nachFehler": true,
        "question": "Du rufst deine Oma an. Du hörst sie gut. Aber Oma sagt: Hallo? Ich höre dich nicht. Was machst du zuerst?",
        "pictogram": "pikto-phone",
        "hinweis": "Überlege: Wer hört wen nicht? Was kannst du an deinem Handy nachsehen?",
        "answers": [
          "Ich rufe ganz laut ins Handy. Dann hört Oma mich.",
          "Ich schaue auf den Bildschirm: Ist mein Mikrofon aus?",
          "Omas Handy ist kaputt. Sie soll ein neues kaufen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Genau. Vielleicht hast du aus Versehen das Mikrofon ausgemacht. Das siehst du auf dem Bildschirm. Das kannst du selbst ändern.",
        "feedbackWrong": [
          "Lauter rufen hilft nicht. Oma hört dich gar nicht. Vielleicht ist dein Mikrofon aus. Schau auf den Bildschirm.",
          null,
          "Du hörst Oma gut. Aber sie hört dich nicht. Das Problem ist wahrscheinlich bei dir. Schau nach: Ist dein Mikrofon aus?"
        ],
        "remember": "Vieles kann ich selbst lösen."
      },
      {
        "nachFehler": true,
        "question": "Ein fremder Mann schreibt dir jeden Tag. Du hast ihm geschrieben: Bitte schreib mir nicht mehr. Er schreibt trotzdem weiter. Was machst du jetzt?",
        "pictogram": "pikto-stranger",
        "hinweis": "Überlege: Er hört nicht auf. Was kannst du selbst am Handy machen?",
        "answers": [
          "Ich schreibe ihm zurück: Du nervst. Hör jetzt endlich auf.",
          "Ich blockiere ihn. Dann kann er mir nicht mehr schreiben.",
          "Ich zeige die Nachrichten einer Person. Ich vertraue ihr.",
          "Ich antworte ihm freundlich. Dann hört er bestimmt auf."
        ],
        "correctIndex": 1,
        "auchMoeglich": [
          2
        ],
        "feedbackCorrect": "Genau. Du hast schon Nein gesagt. Er hört nicht auf. Dann blockierst du ihn. Das kannst du selbst.",
        "feedbackWrong": [
          "Dann antwortest du ihm wieder. Er merkt: Du liest seine Nachrichten. Blockier ihn lieber.",
          null,
          null,
          "Du hast ihm schon geschrieben. Er hört trotzdem nicht auf. Noch mehr Antworten helfen nicht. Blockier ihn lieber."
        ],
        "feedbackAuch": [
          null,
          null,
          "Du zeigst die Nachrichten einer Person. Das ist gut. Du kannst ihn aber auch selbst blockieren. Dann schreibt er dir nicht mehr.",
          null
        ],
        "remember": "Vieles kann ich selbst lösen."
      },
      {
        "nachFehler": true,
        "question": "Dein Handy geht seit gestern nicht mehr ins Internet. Du hast das Handy schon neu gestartet. Es klappt immer noch nicht. Was machst du jetzt?",
        "pictogram": "pikto-globe",
        "hinweis": "Überlege: Was hast du schon probiert?",
        "answers": [
          "Ich kaufe ein neues Handy. Das alte ist bestimmt kaputt.",
          "Ich starte das Handy noch 10 Mal neu. Irgendwann klappt es.",
          "Ich frage meinen Cousin. Er kennt sich mit dem Internet aus."
        ],
        "correctIndex": 2,
        "feedbackCorrect": "Genau. Du hast schon selbst etwas probiert. Jetzt kommst du nicht weiter. Dann holst du dir Hilfe. Dein Cousin kennt sich mit dem Internet aus.",
        "feedbackWrong": [
          "Dein Handy ist wahrscheinlich nicht kaputt. Vielleicht ist nur das Internet zu Hause gestört. Frag eine Person. Sie kennt sich mit dem Internet aus.",
          "Du hast schon neu gestartet. Noch öfter neu starten hilft meistens nicht. Jetzt ist Hilfe gut. Frag eine Person. Sie kennt sich mit dem Internet aus.",
          null
        ],
        "remember": "Ich hole mir passende Hilfe."
      },
      {
        "nachFehler": true,
        "question": "In der Chat-Gruppe von deiner Arbeit ist ein Foto von dir. Darauf schläfst du in der Pause. Alle lachen darüber. Du bist traurig und wütend. Welche Hilfe passt?",
        "pictogram": "pikto-photo",
        "hinweis": "Überlege: Wer kann dir bei so etwas helfen?",
        "answers": [
          "Ich rede mit meiner Gruppen-Leiterin. Ich zeige ihr den Chat.",
          "Ich schreibe in die Gruppe: Ihr seid alle total gemein.",
          "Ich sage nichts. Das war doch bestimmt nur Spaß."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Gut. Das Foto ist gemein. Das musst du nicht aushalten. Deine Gruppen-Leiterin kann helfen. Zusammen überlegt ihr: Wie kommt das Foto aus der Gruppe?",
        "feedbackWrong": [
          null,
          "Du darfst wütend sein. Aber dann gibt es vielleicht noch mehr Streit. Rede lieber mit einer Person. Du vertraust ihr.",
          "Das Foto macht dich traurig. Dann ist es für dich kein Spaß. Du musst das nicht aushalten. Rede mit einer Person. Du vertraust ihr."
        ],
        "remember": "Ich hole mir passende Hilfe."
      },
      {
        "nachFehler": true,
        "question": "Du findest die Taschenlampe auf deinem Handy nicht mehr. Du hast schon selbst gesucht. Du fragst deinen Bruder. Er sagt: Keine Ahnung. Ich habe ein anderes Handy. Was machst du jetzt?",
        "pictogram": "pikto-ask",
        "hinweis": "Überlege: Wer kann dir noch helfen?",
        "answers": [
          "Ich frage eine andere Person. Vielleicht kennt sie mein Handy.",
          "Ich gebe auf. Ohne Taschenlampe geht es auch ganz gut.",
          "Ich frage meinen Bruder immer wieder. Irgendwann weiß er es."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Genau. Dein Bruder kennt dein Handy nicht. Dann fragst du eine andere Person. Zum Beispiel im Handy-Laden. Oder eine Person mit dem gleichen Handy.",
        "feedbackWrong": [
          null,
          "Du musst nicht aufgeben. Dein Bruder kann nicht helfen. Aber eine andere Person kann es vielleicht.",
          "Dein Bruder kennt dein Handy nicht. Er weiß es auch morgen nicht. Frag lieber eine andere Person."
        ],
        "remember": "Ich hole mir passende Hilfe."
      },
      {
        "nachFehler": true,
        "schluessel": "Du machst einen Video-Anruf mit deinem Opa. Plötzlich kippt er vom Stuhl. Er sagt nichts mehr. Er bewegt sich nicht. Was machst du?",
        "question": "Du besuchst deinen Opa. Ihr schaut zusammen Fotos auf dem Handy an. Plötzlich kippt Opa vom Stuhl. Er sagt nichts mehr. Er bewegt sich nicht. Was machst du?",
        "pictogram": "pikto-person",
        "hinweis": "Überlege: Ist Opa jetzt in Gefahr?",
        "answers": [
          "Ich warte ein paar Minuten. Vielleicht steht Opa gleich wieder auf.",
          "Ich rufe sofort 112 an. Ich erzähle: Opa ist umgefallen.",
          "Ich schreibe in die Familien-Gruppe: Opa ist umgefallen."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Richtig. Opa ist in Gefahr. Das ist ein Notfall. Du rufst sofort 112 an. Die Leute am Telefon helfen dir. Sie fragen dich alles Wichtige.",
        "feedbackWrong": [
          "Opa bewegt sich nicht. Er braucht jetzt Hilfe. Warte nicht. Ruf sofort 112 an.",
          null,
          "Die Familie sieht die Nachricht vielleicht erst später. Opa braucht jetzt Hilfe. Ruf zuerst 112 an. Danach kannst du der Familie schreiben."
        ],
        "remember": "Jemand ist in Gefahr? Dann ruf sofort 110 oder 112."
      },
      {
        "nachFehler": true,
        "question": "Unter einem Video liest du einen Kommentar. Er macht sich über Menschen im Rollstuhl lustig. Der Kommentar ist nicht gegen dich. Was machst du?",
        "pictogram": "pikto-message",
        "hinweis": "Überlege: Was kannst du selbst in der App tun?",
        "answers": [
          "Ich teile den Kommentar mit allen. So sehen alle: Das ist gemein.",
          "Ich scrolle einfach weiter. Ich muss nicht darauf antworten.",
          "Ich melde den Kommentar. Dann prüft die App ihn.",
          "Ich antworte darunter: Du bist so dumm."
        ],
        "correctIndex": 2,
        "auchMoeglich": [
          1
        ],
        "feedbackCorrect": "Gut. Der Kommentar ist gemein. Du meldest ihn. Dann prüft die App ihn. Vielleicht löscht sie ihn.",
        "feedbackWrong": [
          "Dann sehen noch mehr Menschen den gemeinen Kommentar. Melde ihn lieber. Dann prüft die App ihn.",
          null,
          null,
          "Dann gibt es vielleicht Streit unter dem Video. Du musst nicht antworten. Melde den Kommentar lieber."
        ],
        "feedbackAuch": [
          null,
          "Du musst nicht antworten. Das ist gut. Du kannst den Kommentar auch melden. Dann prüft die App ihn.",
          null,
          null
        ],
        "remember": "Vieles kann ich selbst lösen."
      }
    ],
    "einfachQuiz": [
      1,
      4,
      7
    ],
    "helpQuestions": [
      "Klappt etwas nicht? Oder macht mir etwas Druck oder Angst?",
      "Was kann ich selbst ausprobieren?",
      "Wer kennt sich damit aus? Wem vertraue ich?",
      "Die erste Person kann nicht helfen? Wen frage ich dann?"
    ],
    "memoryRules": [
      "Was ist los?",
      "Was kann ich selbst tun?",
      "Welche Hilfe passt?",
      "Jemand ist in Gefahr? Dann ruf sofort 110 oder 112."
    ],
    "merkKarteSchluss": [
      "Vieles kann ich selbst lösen.",
      "Ich muss Probleme nicht allein lösen."
    ],
    "qrLink": "index.html#thema-hilfe",
    "qrShortLink": "index.html#thema-hilfe:kurz",
    "qrQuizLink": "index.html#thema-hilfe:quiz",
    "qrMemoryLink": "index.html#thema-hilfe:merk",
    "einfachLessons": [
      {
        "title": "Was ist los?",
        "module": "Einfach",
        "pictogram": "pikto-search",
        "icon": "understand",
        "ketteSchritt": 1,
        "lernziele": [
          "problemart",
          "notfall"
        ],
        "text": [
          "Zuerst schaust du: Was ist los?",
          "Etwas klappt nicht. Zum Beispiel: Dein Handy macht keinen Ton.",
          "Oder etwas macht dir Druck oder Angst. Zum Beispiel: Jemand drängt dich.",
          "Oder jemand ist in Gefahr. Das ist ein Notfall. Dann ruf sofort 110 oder 112."
        ],
        "practice": {
          "nachFehler": true,
          "question": "Du schickst deiner Schwester eine Nachricht. Die Nachricht geht nicht raus. Neben der Nachricht steht: Nicht gesendet. Was ist los?",
          "pictogram": "pikto-message",
          "hinweis": "Überlege: Ist jemand in Gefahr? Oder klappt nur etwas nicht?",
          "answers": [
            "Etwas klappt gerade nicht. Ich probiere es gleich noch einmal.",
            "Mein Handy ist kaputt. Ich bringe es gleich in den Laden.",
            "Das ist komisch. Ich mache Stopp und schreibe nichts mehr."
          ],
          "correctIndex": 0,
          "feedbackCorrect": "Genau. Oft ist nur das Internet kurz weg. Dann probierst du es noch einmal. Das kannst du selbst.",
          "feedbackWrong": [
            null,
            "Dein Handy ist wahrscheinlich nicht kaputt. Oft ist nur das Internet kurz weg. Probier es erst selbst noch einmal. Klappt es dann immer noch nicht? Dann hol dir Hilfe.",
            "Stopp machst du bei Druck oder Angst. Hier klappt nur etwas nicht. Probier es gleich noch einmal."
          ],
          "remember": "Vieles kann ich selbst lösen."
        }
      },
      {
        "title": "Was kann ich selbst tun?",
        "module": "Einfach",
        "pictogram": "pikto-done",
        "icon": "check",
        "ketteSchritt": 2,
        "lernziele": [
          "selbst",
          "stoppen"
        ],
        "text": [
          "Etwas klappt nicht? Dann probierst du es noch einmal. Oder du siehst in den Einstellungen nach.",
          "Etwas macht dir Druck oder Angst? Dann machst du erst Stopp.",
          "Du schickst nichts. Du bezahlst nichts. Du bestätigst nichts.",
          "Du kannst den Chat auch schließen.",
          "Du kommst nicht weiter? Dann holst du dir Hilfe."
        ],
        "remember": "Vieles kann ich selbst lösen.",
        "practice": {
          "nachFehler": true,
          "question": "Es ist 23 Uhr. In deiner Chat-Gruppe streiten sich alle. Jemand schreibt dir: Jetzt sag du auch mal was. Du bist müde. Was kannst du selbst tun?",
          "pictogram": "pikto-people",
          "hinweis": "Überlege: Musst du jetzt etwas schreiben?",
          "answers": [
            "Ich lese alles genau durch. Ich will nichts verpassen.",
            "Ich schreibe schnell meine Meinung. Dann haben alle ihre Ruhe.",
            "Ich lege das Handy weg. Heute antworte ich nicht mehr."
          ],
          "correctIndex": 2,
          "feedbackCorrect": "Gut. Die Gruppe macht dir Druck. Du musst nicht mitmachen. Du darfst das Handy weglegen. Morgen entscheidest du in Ruhe.",
          "feedbackWrong": [
            "Du bist müde. Und der Streit macht dir Druck. Du musst nicht alles lesen. Leg das Handy lieber weg.",
            "Eine schnelle Antwort macht den Streit oft größer. Du musst jetzt nichts schreiben. Leg das Handy lieber weg.",
            null
          ],
          "remember": "Druck oder Angst? Dann mache ich erst Stopp."
        }
      },
      {
        "title": "Welche Hilfe passt?",
        "module": "Einfach",
        "pictogram": "pikto-help",
        "icon": "help",
        "ketteSchritt": 3,
        "lernziele": [
          "unterstuetzung-waehlen",
          "unterstuetzung-holen",
          "notfall"
        ],
        "text": [
          "Eine Frage zum Handy? Dann fragst du eine Person. Sie kennt sich mit Handys aus.",
          "Druck oder Angst? Dann sprichst du mit einer Person. Du vertraust ihr. Du zeigst ihr das Problem.",
          "Die erste Person kann nicht helfen? Dann fragst du eine andere.",
          "Jemand ist in Gefahr? Dann ruf sofort 110 oder 112."
        ],
        "remember": "Ich hole mir passende Hilfe.",
        "practice": {
          "nachFehler": true,
          "question": "Du hast ein neues Handy. Deine Fotos sind noch auf dem alten Handy. Du weißt nicht: Wie kommen die Fotos auf das neue Handy? Welche Hilfe passt?",
          "pictogram": "pikto-phone",
          "hinweis": "Überlege: Ist das eine Frage zum Handy? Oder macht dir etwas Angst?",
          "answers": [
            "Ich rufe bei einer Beratungs-Stelle an. Die hilft bei Problemen.",
            "Ich frage meine Nachbarin. Sie kennt sich mit Handys aus.",
            "Ich lasse das. Das schaffe ich sowieso nicht allein."
          ],
          "correctIndex": 1,
          "feedbackCorrect": "Genau. Das ist eine Frage zum Handy. Deine Nachbarin kennt sich mit Handys aus. Sie kann dir gut helfen.",
          "feedbackWrong": [
            "Eine Beratungs-Stelle hilft vor allem bei Sorgen und Angst. Bei einer Frage zum Handy fragst du besser eine Person. Sie kennt sich mit Handys aus.",
            null,
            "Du darfst dir dabei helfen lassen. Eine Person kann dir helfen. Sie kennt sich mit Handys aus."
          ],
          "remember": "Ich hole mir passende Hilfe."
        }
      }
    ],
    "neueSituation": {
      "einstieg": {
        "leicht": "Kevin kennst du aus dem Sport-Verein. Am Abend schreibt er dir.",
        "einfach": "Du kennst Kevin aus dem Sportverein. Am Abend schreibt er dir.",
        "standard": "Kevin kennst du aus dem Sportverein. Am Abend meldet er sich bei dir."
      },
      "kanal": {
        "leicht": "Nachrichten"
      },
      "inhalt": [
        {
          "typ": "nachricht",
          "von": "Kevin",
          "text": "Was sollte dein Kommentar in der Gruppe?",
          "zeit": "21:48"
        },
        {
          "typ": "nachricht",
          "von": "Kevin",
          "text": "Lösch den sofort. Sonst erzähle ich allen was über dich.",
          "zeit": "21:49"
        },
        {
          "typ": "nachricht",
          "von": "Kevin",
          "text": "Und sag den anderen nichts davon.",
          "zeit": "21:49"
        }
      ],
      "fragen": [
        {
          "id": "hilfe/neu/was-ist-los",
          "question": "Was ist hier los?",
          "pictogram": "pikto-message",
          "hinweis": "Schau genau: Wie schreibt Kevin? Und was will er?",
          "answers": [
            "Nichts Schlimmes. Kevin ist halt sauer.",
            "Kevin macht mir Druck. Und ich soll schweigen.",
            "Ich war gemein. Darum lösche ich den Kommentar sofort."
          ],
          "correctIndex": 1,
          "feedbackCorrect": "Genau. Kevin will: Du sollst sofort etwas tun. Er droht dir. Und du sollst es geheim halten. Das ist Druck.",
          "feedbackWrong": [
            "Kevin darf sauer sein. Aber er droht dir. Und du sollst es geheim halten. Das ist Druck. Dann machst du erst Stopp.",
            null,
            "Vielleicht war dein Kommentar nicht gut. Das kannst du später in Ruhe klären. Aber Kevin macht dir Druck. Du musst jetzt nichts tun."
          ],
          "remember": "Druck oder Angst? Dann mache ich erst Stopp."
        },
        {
          "id": "hilfe/neu/selbst",
          "question": "Was kannst du jetzt selbst tun?",
          "pictogram": "pikto-pause",
          "hinweis": "Überlege: Musst du heute Abend noch etwas tun?",
          "answers": [
            "Ich lösche den Kommentar sofort und schreibe: Tut mir leid.",
            "Heute antworte ich nicht mehr. Morgen überlege ich in Ruhe.",
            "Ich mache ein Bild vom Bildschirm. Dann lege ich das Handy weg."
          ],
          "correctIndex": 1,
          "auchMoeglich": [
            2
          ],
          "feedbackCorrect": "Genau. Kevin macht Druck. Du machst erst Stopp. Du musst nicht sofort antworten. Morgen entscheidest du in Ruhe: Was willst du?",
          "feedbackWrong": [
            "Vielleicht willst du den Kommentar später löschen. Das darfst du. Aber nicht jetzt unter Druck. Erst Stopp. Dann entscheidest du in Ruhe.",
            null,
            null
          ],
          "feedbackAuch": [
            null,
            null,
            "Du antwortest nicht. Und du hast den Chat gesichert. So kannst du ihn später zeigen."
          ],
          "remember": "Druck oder Angst? Dann mache ich erst Stopp."
        },
        {
          "id": "hilfe/neu/welche-hilfe",
          "question": "Am nächsten Tag schreibt Kevin wieder das Gleiche. Welche Hilfe passt jetzt?",
          "pictogram": "pikto-help",
          "hinweis": "Überlege: Ist gerade jemand in Gefahr? Oder brauchst du jemanden zum Reden?",
          "answers": [
            "Ich zeige den Chat einer vertrauten Person.",
            "Ich rufe bei einer Beratungs-Stelle an.",
            "Ich rufe sofort die Polizei an: 110."
          ],
          "correctIndex": 0,
          "auchMoeglich": [
            1
          ],
          "feedbackCorrect": "Genau. Du bist damit nicht allein. Zeig der Person den Chat. Dann überlegt ihr zusammen: Was machst du jetzt?",
          "feedbackWrong": [
            null,
            null,
            "Hier ist gerade niemand in Gefahr. Darum passt 110 hier nicht. Ist jemand jetzt in Gefahr? Dann rufst du sofort 110 oder 112. Hier zeigst du den Chat zuerst einer vertrauten Person. Zusammen überlegt ihr: Was machst du jetzt? Geht ihr zur Polizei?"
          ],
          "feedbackAuch": [
            null,
            "Eine Beratungs-Stelle kennt sich mit so etwas aus. Du kannst den Chat auch einer vertrauten Person zeigen.",
            null
          ],
          "remember": "Ich hole mir passende Hilfe."
        }
      ]
    }
  },
  {
    "id": "ki",
    "title": "KI und Chatbots",
    "icon": "ki",
    "desc": "Künstliche Intelligenz verstehen und sicher nutzen",
    "transfer": "Nutzt du heute eine KI? Prüfe eine Antwort nach.",
    "selfAssessment": {
      "question": "Was weißt du schon über Künstliche Intelligenz?",
      "pictogram": "pikto-ki",
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
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "ki",
        "text": [
          {
            "text": "Stell dir vor: Du stellst einer KI eine Frage.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Sie antwortet sofort."
          },
          {
            "text": "Stimmt die Antwort? Das lernst du hier."
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
          },
          {
            "text": "Bist du traurig oder einsam?",
            "pictogram": "pikto-feel"
          },
          {
            "text": "Dann sprich mit einem echten Menschen.",
            "pictogram": "pikto-person"
          }
        ],
        "warning": "Ein Chatbot ist kein echter Freund. Wichtige Sorgen besprichst du mit einem Menschen.",
        "practice": {
          "question": "Ein Chatbot schreibt: Ich bin dein Freund. Was stimmt?",
          "pictogram": "pikto-friend",
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
          "pictogram": "pikto-ki",
          "answers": [
            "Ich glaube alles sofort. Die KI klingt ja sicher.",
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
        "title": "So prüfst du eine Antwort",
        "module": "Sicher nutzen",
        "icon": "check",
        "text": [
          {
            "text": "Die KI gibt dir eine Antwort.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Du kannst die Antwort prüfen.",
            "pictogram": "pikto-search"
          },
          {
            "text": "Stell dir 3 Fragen.",
            "pictogram": "pikto-ask"
          }
        ],
        "bullets": [
          {
            "text": "Woher weiß die KI das?",
            "pictogram": "pikto-ask"
          },
          {
            "text": "Steht das auch woanders?",
            "pictogram": "pikto-search"
          },
          {
            "text": "Wen kann ich fragen?",
            "pictogram": "pikto-people"
          }
        ],
        "warning": "Bei Geld und Gesundheit fragst du immer einen Menschen.",
        "practice": {
          "question": "Die KI sagt dir eine Telefon-Nummer. Was machst du?",
          "pictogram": "pikto-phone",
          "answers": [
            "Ich rufe sofort an. Die KI hat sie ja gefunden.",
            "Ich prüfe die Nummer auf einer anderen Seite."
          ],
          "correctIndex": 1,
          "feedbackCorrect": "Das ist richtig. Du prüfst die Nummer. So findest du Fehler.",
          "feedbackWrong": "Das ist noch nicht richtig. KI erfindet manchmal Nummern. Schau erst nach.",
          "remember": "Ich stelle 3 Fragen. Dann weiß ich mehr."
        },
        "remember": "Ich stelle 3 Fragen. Dann weiß ich mehr.",
        "pictogram": "pikto-search"
      },
      {
        "title": "Keine privaten Daten",
        "module": "Sicher nutzen",
        "icon": "lock",
        "text": [
          {
            "text": "Die KI speichert deine Nachrichten oft.",
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
          "pictogram": "pikto-house",
          "answers": [
            "Ich schreibe meine Adresse. Das ist ja nur ein Programm.",
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
          "Du willst Geld ausgeben. Die KI rät dir etwas. Besser: Du fragst eine vertraute Person."
        ],
        "practice": {
          "question": "Du bist krank. Die KI gibt dir einen Tipp. Was ist besser?",
          "pictogram": "pikto-ki",
          "answers": [
            "Ich mache nur den Tipp von der KI. Er klingt gut.",
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
            "text": "Bist du unsicher? Dann frag eine vertraute Person.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Mehr dazu lernst du im Thema: Fake News und KI-Fakes.",
            "pictogram": "pikto-fake"
          }
        ],
        "warning": "Nicht alles, was echt aussieht, ist echt. Du kannst nachfragen. Das ist klug.",
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
        "warning": "Eine KI kann sich irren und trotzdem sicher klingen.",
        "success": "Wichtige Antworten prüfen schützt dich vor Fehlern.",
        "practice": {
          "question": "Die KI gibt dir einen Rat zu deiner Gesundheit. Was machst du?",
          "pictogram": "pikto-ki",
          "answers": [
            "Ich folge genau dem Rat von der KI.",
            "Ich frage zusätzlich einen Menschen."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Eine KI kann sich irren. Frag bei Gesundheit immer auch einen Menschen.",
          "feedbackCorrect": "Bei Gesundheit und Geld entscheiden Menschen mit.",
          "remember": "Bei Gesundheit und Geld frage ich einen Menschen."
        },
        "remember": "Ich prüfe. Ich frage einen Menschen.",
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
        "hinweis": "Überlege: Ist KI ein Mensch oder etwas anderes?",
        "question": "Was ist KI?",
        "pictogram": "pikto-ki",
        "answers": [
          "Ein Mensch am Computer.",
          "Ein Roboter aus Metall.",
          "Ein Computer-Programm."
        ],
        "correctIndex": 2,
        "feedbackCorrect": "Das ist richtig. KI ist ein Computer-Programm.",
        "feedbackWrong": [
          "KI ist kein Mensch. Sie ist ein Programm.",
          "Ein Roboter ist ein Gerät. KI ist ein Programm.",
          null
        ]
      },
      {
        "hinweis": "Ein Chatbot schreibt freundlich. Heißt das, er fühlt etwas?",
        "question": "Hat ein Chatbot Gefühle?",
        "pictogram": "pikto-ki",
        "answers": [
          "Ja, wie ein Mensch.",
          "Nein, er ist ein Programm.",
          "Ja, aber nur ein paar Gefühle."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Ein Chatbot hat keine Gefühle.",
        "feedbackWrong": [
          "Ein Chatbot kann nur so tun. Er ist ein Programm.",
          null,
          "Auch wenige nicht. Ein Programm fühlt nichts."
        ]
      },
      {
        "hinweis": "Frag dich: Kann ein Programm sich irren?",
        "question": "Kann KI Fehler machen?",
        "pictogram": "pikto-ki",
        "answers": [
          "Nein, KI weiß alles.",
          "Ja, KI kann Fehler machen.",
          "Nein, KI prüft alles selbst."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. KI kann Fehler machen. Auch wenn sie sicher klingt.",
        "feedbackWrong": [
          "KI kann Fehler machen und Dinge erfinden.",
          null,
          "KI prüft sich nicht selbst. Das musst du tun."
        ]
      },
      {
        "hinweis": "Mit deinem Passwort kommt man in dein Konto. Gibst du es an ein Programm?",
        "question": "Ein Chatbot fragt nach deinem Passwort. Was ist besser?",
        "pictogram": "pikto-key",
        "answers": [
          "Passwort nicht eingeben.",
          "Passwort eingeben.",
          "Nur einen Teil eingeben."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Dein Passwort bleibt geheim. Auch bei einer KI.",
        "feedbackWrong": [
          null,
          "Dein Passwort ist privat. Du gibst es nie weiter.",
          "Auch ein Teil ist zu viel. Gib gar nichts ein."
        ]
      },
      {
        "hinweis": "Die KI kennt dich nicht. Wer kennt dich?",
        "question": "Du bist krank. Was ist besser?",
        "pictogram": "pikto-feel",
        "answers": [
          "Nur die KI fragen. Sie weiß sehr viel.",
          "Die Antwort von der KI ausdrucken.",
          "Auch eine Ärztin oder einen Arzt fragen."
        ],
        "correctIndex": 2,
        "feedbackCorrect": "Das ist richtig. Bei Gesundheit fragst du Fachleute.",
        "feedbackWrong": [
          "Die KI kennt dich nicht. Sie ersetzt keinen Arzt.",
          "Ausdrucken macht die Antwort nicht richtig.",
          null
        ]
      },
      {
        "hinweis": "Wichtig heißt: Ein Fehler ist schlimm. Was hilft dann?",
        "question": "Die KI gibt eine wichtige Antwort. Was machst du?",
        "pictogram": "pikto-ki",
        "answers": [
          "Die Antwort prüfen.",
          "Sofort alles glauben.",
          "Die KI noch einmal fragen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Wichtige Antworten prüfst du.",
        "feedbackWrong": [
          null,
          "KI klingt sicher, kann aber falsch liegen.",
          "Auch beim nächsten Mal kann die KI falsch liegen. Prüfe an einer anderen Stelle."
        ]
      },
      {
        "hinweis": "Überlege: Wie gut kann ein Computer heute zeichnen?",
        "question": "Kann KI Bilder fälschen?",
        "pictogram": "pikto-photo",
        "answers": [
          "Nein. Das kann nur ein Mensch mit Kamera.",
          "Ja. KI kann Bilder machen. Sie sehen echt aus.",
          "Nur bei Zeichnungen. Fotos sind immer echt."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. KI-Bilder können sehr echt aussehen.",
        "feedbackWrong": [
          "KI kann Bilder und Stimmen fälschen.",
          null,
          "Nicht nur Zeichnungen. Auch Fotos sehen echt aus."
        ]
      },
      {
        "hinweis": "Freundliche Worte sagen nichts darüber, wer schreibt.",
        "question": "Ein Chatbot schreibt sehr nett. Was stimmt?",
        "pictogram": "pikto-message",
        "answers": [
          "Er ist ein echter Freund.",
          "Er mag mich.",
          "Er ist ein Programm."
        ],
        "correctIndex": 2,
        "feedbackCorrect": "Das ist richtig. Echte Freunde sind Menschen.",
        "feedbackWrong": [
          "Ein Chatbot ist ein Programm. Kein Freund.",
          "Ein Programm mag niemanden. Es rechnet nur.",
          null
        ]
      },
      {
        "hinweis": "Frag dich: Wo hast du schon mit einem Programm geschrieben?",
        "question": "Wo steckt überall KI drin?",
        "pictogram": "pikto-ki",
        "answers": [
          "In vielen Apps. Zum Beispiel in Chatbots.",
          "Nur in Robotern. Zum Beispiel in Fabriken.",
          "Nur in teuren Handys."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. KI steckt heute in vielen Apps.",
        "feedbackWrong": [
          null,
          "KI steckt in vielen Apps, nicht nur in Robotern.",
          "Der Preis sagt nichts. KI steckt in vielen Apps."
        ]
      },
      {
        "hinweis": "Viele KI-Dienste speichern deine Nachrichten. Was heißt das für private Sachen?",
        "question": "Darfst du der KI deine Adresse oder ein Geheimnis schreiben?",
        "pictogram": "pikto-key",
        "answers": [
          "Ja. Das ist sicher. Die KI hilft mir ja.",
          "Ja. Danach lösche ich es einfach wieder.",
          "Nein, ich gebe der KI keine privaten Daten."
        ],
        "correctIndex": 2,
        "feedbackCorrect": "Das ist richtig. Deine privaten Daten bleiben bei dir.",
        "feedbackWrong": [
          "Die KI speichert deine Nachrichten oft. Gib nichts Privates ein.",
          "Löschen hilft oft nicht. Die Daten können schon gespeichert sein.",
          null
        ]
      },
      {
        "id": "ki/quiz/stimme-geld-rueckruf",
        "question": "Eine neue Nummer ruft dich an. Die Stimme klingt wie dein Onkel. Sie sagt: Meine Bank-App geht nicht. Kannst du mir 100 Euro leihen? Du hast die Nummer von deinem Onkel gespeichert. Was machst du zuerst?",
        "pictogram": "pikto-phone",
        "hinweis": "Überlege: Welche Nummer kennst du schon?",
        "answers": [
          "Ich bleibe am Telefon. Ich frage nach seinem Namen.",
          "Ich schicke erst 20 Euro. Den Rest schicke ich später.",
          "Ich lege auf. Ich rufe die gespeicherte Nummer an."
        ],
        "correctIndex": 2,
        "feedbackCorrect": "Gut. KI kann Stimmen nachmachen. Darum prüfst du den Anruf. Du rufst die gespeicherte Nummer selbst an. Bis dahin schickst du kein Geld.",
        "feedbackWrong": [
          "Der Anrufer kann den Namen auch kennen. Das beweist nicht: Es ist dein Onkel. Leg auf. Ruf die gespeicherte Nummer selbst an.",
          "Auch 20 Euro können weg sein. Eine bekannte Stimme beweist nicht: Es ist dein Onkel. Ruf die gespeicherte Nummer selbst an. Schick vorher kein Geld.",
          null
        ],
        "remember": "Ich lege auf. Ich rufe selbst an."
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
    "einfachLessons": [
      {
        "title": "Was ist KI?",
        "module": "Einfach",
        "pictogram": "pikto-ki",
        "icon": "ki",
        "text": [
          "KI bedeutet Künstliche Intelligenz.",
          "KI ist ein Computer-Programm.",
          "Es kann Fragen beantworten.",
          "Es kann Texte schreiben.",
          "Es kann Bilder machen.",
          "KI ist kein Mensch."
        ],
        "remember": "KI ist ein Programm. Kein Mensch.",
        "vorbildWer": "Alex",
        "vorbild": [
          "Alex schreibt mit einem Chatbot.",
          "Der Chatbot ist sehr freundlich.",
          "Alex weiß: Das ist ein Programm.",
          "Kein Mensch."
        ]
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
        "remember": "KI-Antworten immer prüfen.",
        "vorbildWer": "Tilda",
        "vorbild": [
          "Tilda fragt eine KI: Wann fährt mein Bus?",
          "Die KI antwortet.",
          "Tilda prüft die Zeit auf dem Fahrplan."
        ]
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
          "Eine bekannte Stimme will Geld? Dann legst du auf.",
          "Du rufst die Person selbst an.",
          "Du glaubst nicht alles.",
          "Du fragst eine vertraute Person."
        ],
        "remember": "Nicht alles glauben. Erst prüfen.",
        "vorbildWer": "Alex",
        "vorbild": [
          "Eine Stimme am Telefon klingt wie der Bruder von Alex.",
          "Sie will sofort Geld.",
          "Alex legt auf.",
          "Er ruft seinen Bruder selbst an."
        ]
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
    },
    "einfachQuiz": [
      7,
      5,
      10
    ]
  },
  {
    "id": "fakes",
    "title": "Fake News und KI-Fakes",
    "icon": "fake",
    "desc": "Falsche Nachrichten, Bilder und Stimmen erkennen",
    "transfer": "Siehst du heute eine überraschende Nachricht? Erst prüfen. Dann teilen.",
    "selfAssessment": {
      "question": "Weißt du, wie du eine Fake-Nachricht erkennst?",
      "pictogram": "pikto-fake",
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
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "fake",
        "text": [
          {
            "text": "Stell dir vor: Eine Nachricht macht dich sehr wütend.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Du willst sie sofort teilen."
          },
          {
            "text": "Was machst du? Das lernst du hier."
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
          },
          {
            "text": "Du kannst jederzeit Pause machen.",
            "pictogram": "pikto-pause"
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
            "text": "Sie wollen Geld verdienen mit vielen Aufrufen.",
            "pictogram": "pikto-link"
          },
          {
            "text": "Sie wollen Menschen wütend machen.",
            "pictogram": "pikto-data"
          },
          {
            "text": "Sie wollen: Du sollst etwas Falsches glauben.",
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
          "pictogram": "pikto-photo",
          "answers": [
            "Ich glaube das Foto sofort. Es sieht echt aus.",
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
          "pictogram": "pikto-money",
          "answers": [
            "Ich mache sofort mit. Den Promi kennt ja jeder.",
            "Ich mache nicht mit. Das Video kann gefälscht sein."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Solche Videos sind oft Betrug mit Deepfakes.",
          "feedbackCorrect": "Das ist richtig. Promi-Videos mit Geld-Versprechen sind oft gefälscht. Mach da nicht mit.",
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
          "pictogram": "pikto-money",
          "answers": [
            "Ich zahle sofort. Er klingt ja wie mein Bruder.",
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
          "pictogram": "pikto-stranger",
          "answers": [
            "Die Nachricht stimmt bestimmt. Sie klingt ja sehr ernst.",
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
        "title": "Die Nachricht will dich aufregen",
        "warning": "Deine Gefühle sind richtig. Aber die Nachricht will dich aufregen. Das ist der Trick. Prüfe zuerst.",
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
            "text": "Deine Gefühle sind richtig.",
            "pictogram": "pikto-feel"
          },
          {
            "text": "Aber die Nachricht will dich aufregen. Das ist der Trick.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Bei Aufregung prüfst du erst.",
            "pictogram": "pikto-search"
          }
        ],
        "practice": {
          "question": "Eine Nachricht macht dich sehr wütend. Was ist besser?",
          "pictogram": "pikto-message",
          "answers": [
            "Sofort an alle weiterleiten. Das ist wichtig.",
            "Erst einmal anhalten und prüfen."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist noch nicht richtig. Die Nachricht will dich wütend machen. Das ist der Trick.",
          "feedbackCorrect": "Das ist richtig. Bei Aufregung erst anhalten und prüfen.",
          "remember": "Bei Aufregung prüfe ich erst."
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
          "question": "Stimmt eine Nachricht? Du bist nicht sicher. Was ist besser?",
          "pictogram": "pikto-message",
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
        "warning": "Starke Gefühle wie Angst oder Wut wollen, dass du schnell teilst. Genau dann ist Vorsicht wichtig.",
        "success": "Nicht teilen im Zweifel schützt dich und andere.",
        "practice": {
          "question": "Eine Nachricht macht dich wütend. Du sollst sie sofort teilen. Was machst du?",
          "pictogram": "pikto-feel",
          "answers": [
            "Ich prüfe zuerst und teile im Zweifel nicht.",
            "Sie wirkt wichtig. Also teile ich sie sofort."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Starke Gefühle wollen schnelles Teilen. Prüfe lieber zuerst.",
          "feedbackCorrect": "Starke Gefühle sind ein Warnzeichen, kein Grund zur Eile.",
          "remember": "Bei starken Gefühlen prüfe ich zuerst."
        },
        "remember": "Ich glaube nicht alles sofort. Ich prüfe.",
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
            "text": "Aufregende Nachrichten prüfe ich erst.",
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
        "hinweis": "Unglaublich und falsch. Dafür gibt es ein Wort in diesem Thema.",
        "question": "Eine Nachricht klingt unglaublich. Sie stimmt nicht. Wie nennt man das?",
        "pictogram": "pikto-fake",
        "answers": [
          "Eine Werbung im Internet.",
          "Eine Fake-Nachricht.",
          "Ein Witz unter Freunden."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Falsche Nachrichten heißen Fake News.",
        "feedbackWrong": [
          "Werbung will verkaufen. Hier geht es um eine Lüge.",
          null,
          "Ein Witz will niemanden täuschen. Fake-Nachrichten schon."
        ]
      },
      {
        "hinweis": "Überlege: KI macht Bilder. Wie gut sehen die aus?",
        "question": "Kann KI Fotos fälschen?",
        "pictogram": "pikto-photo",
        "answers": [
          "Nein, niemals. Fotos sind immer echt.",
          "Ja, sehr echt aussehende Fotos.",
          "Nur mit teuren Geräten."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. KI-Bilder können sehr echt aussehen.",
        "feedbackWrong": [
          "KI kann sehr echte Fotos fälschen.",
          null,
          "Dafür reicht heute ein Handy."
        ]
      },
      {
        "hinweis": "Fake und Video. Was ergibt das zusammen?",
        "question": "Was ist ein Deepfake?",
        "pictogram": "pikto-video",
        "answers": [
          "Ein besonders echtes Video.",
          "Ein sehr langes Video.",
          "Ein gefälschtes Video."
        ],
        "correctIndex": 2,
        "feedbackCorrect": "Das ist richtig. Ein Deepfake ist ein gefälschtes Video mit KI.",
        "feedbackWrong": [
          "Ein Deepfake sieht oft echt aus. Aber er ist gefälscht.",
          "Die Länge ist egal. Ein Deepfake ist gefälscht.",
          null
        ]
      },
      {
        "hinweis": "Eine Stimme kann man nachmachen. Wie prüfst du, wer da anruft?",
        "question": "Ein Anruf will sofort Geld. Die Stimme klingt bekannt. Was ist besser?",
        "pictogram": "pikto-money",
        "answers": [
          "Auflegen und selbst zurückrufen.",
          "Sofort Geld senden. Ich kenne die Stimme.",
          "Nach dem Namen fragen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Stimmen können gefälscht sein. Du rufst selbst zurück.",
        "feedbackWrong": [
          null,
          "Die Stimme kann mit KI gefälscht sein.",
          "Einen Namen kann jeder sagen. Ruf lieber selbst zurück."
        ]
      },
      {
        "hinweis": "Starke Gefühle sind oft gewollt. Was heißt das für dich?",
        "question": "Eine Nachricht macht dich sehr wütend. Was bedeutet das?",
        "pictogram": "pikto-message",
        "answers": [
          "Ein Warnzeichen. Ich prüfe nach.",
          "Die Nachricht stimmt bestimmt.",
          "Ich schicke sie schnell weiter."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Gut. Starke Gefühle beweisen nicht: Die Nachricht stimmt. Du prüfst zuerst.",
        "feedbackWrong": [
          null,
          "Wut sagt nichts über die Wahrheit.",
          "Ohne Prüfung schickst du vielleicht etwas Falsches weiter. Prüfe erst."
        ]
      },
      {
        "hinweis": "Frag dich: Was passiert, wenn du etwas Falsches weiterschickst?",
        "question": "Stimmt eine Nachricht? Du bist unsicher. Was machst du?",
        "pictogram": "pikto-message",
        "answers": [
          "Ich leite sie an alle weiter.",
          "Ich leite sie an Freunde weiter.",
          "Ich leite sie nicht weiter."
        ],
        "correctIndex": 2,
        "feedbackCorrect": "Das ist richtig. Im Zweifel nicht teilen.",
        "feedbackWrong": [
          "So kannst du falsche Nachrichten weitergeben.",
          "Auch Freunde schicken weiter. Warte lieber.",
          null
        ]
      },
      {
        "hinweis": "Überlege: Wo stehen Nachrichten, denen man trauen kann?",
        "question": "Wie kannst du eine Nachricht prüfen?",
        "pictogram": "pikto-message",
        "answers": [
          "Auf bekannten Nachrichten-Seiten nachschauen.",
          "Auf das Bild schauen: Ist es schön?",
          "Zählen: Wie oft haben andere sie geteilt?"
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Wichtige Nachrichten stehen bei mehreren bekannten Seiten.",
        "feedbackWrong": [
          null,
          "Du prüfst die Quelle, nicht das Aussehen.",
          "Oft geteilt heißt nicht wahr."
        ]
      },
      {
        "hinweis": "Schnelles Geld und ein bekanntes Gesicht. Passt das zusammen?",
        "question": "Ein Promi verspricht im Video schnelles Geld. Was ist das oft?",
        "pictogram": "pikto-money",
        "answers": [
          "Ein guter Tipp für schnelles Geld.",
          "Ein gefälschtes Video. Betrug.",
          "Werbung von dem Promi."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Solche Videos sind oft Deepfake-Betrug. Mach da nicht mit.",
        "feedbackWrong": [
          "Solche Videos sind oft Betrug.",
          null,
          "Der Promi weiß meist nichts davon. Das Video ist gefälscht."
        ]
      },
      {
        "hinweis": "Beim Weiterschicken machst du die Nachricht größer.",
        "question": "Bevor du eine Nachricht teilst: Was machst du?",
        "pictogram": "pikto-message",
        "answers": [
          "Erst teilen, dann prüfen.",
          "Teilen und dazu schreiben: weiß nicht.",
          "Erst prüfen, dann teilen."
        ],
        "correctIndex": 2,
        "feedbackCorrect": "Das ist richtig. Erst prüfen, dann teilen.",
        "feedbackWrong": [
          "Prüfe eine Nachricht erst. Dann teile sie.",
          "Der Hinweis geht beim Weiterschicken verloren.",
          null
        ]
      },
      {
        "hinweis": "Überlege: Kann jeder Mensch alles ins Internet schreiben?",
        "question": "Ist alles im Internet wahr?",
        "pictogram": "pikto-search",
        "answers": [
          "Ja, alles ist wahr.",
          "Nein, nicht alles ist wahr.",
          "Ja. Mit einem Foto ist es wahr."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Nicht alles im Internet ist wahr.",
        "feedbackWrong": [
          "Nicht alles im Internet ist wahr.",
          null,
          "Ein Foto kann gefälscht sein."
        ]
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
      "Aufregende Nachrichten prüfe ich erst.",
      "Erst prüfen. Dann teilen.",
      "Bei Geld-Anrufen rufe ich selbst zurück.",
      "Ich darf mir Unterstützung holen."
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
          "Jemand hat das Bild verändert."
        ],
        "remember": "Fake-Nachrichten sind Lügen.",
        "vorbildWer": "Tilda",
        "vorbild": [
          "Tilda liest: Ein bekannter Sänger ist gestorben.",
          "Die Nachricht steht nur auf einer Seite.",
          "Tilda merkt: Das kann eine Lüge sein."
        ]
      },
      {
        "title": "Wie erkennst du Fakes?",
        "module": "Einfach",
        "pictogram": "pikto-fake",
        "icon": "fake",
        "text": [
          "Du liest eine Nachricht.",
          "Sie macht dich sehr aufgeregt.",
          "Das kann ein Zeichen für einen Fake sein.",
          "Du überlegst kurz.",
          "Du prüfst auf einer anderen Seite.",
          "Oder du fragst eine vertraute Person."
        ],
        "remember": "Erst prüfen. Dann teilen.",
        "vorbildWer": "Alex",
        "vorbild": [
          "Eine Nachricht macht Alex sehr wütend.",
          "Alex macht Stopp.",
          "Er prüft die Nachricht zuerst."
        ]
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
        "remember": "Fakes nicht weiterleiten.",
        "vorbildWer": "Tilda",
        "vorbild": [
          "Tilda erkennt eine Fake-Nachricht.",
          "Sie schickt sie nicht weiter.",
          "Sie löscht die Nachricht."
        ]
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
    },
    "einfachQuiz": [
      0,
      4,
      5
    ]
  },
  {
    "id": "betrug",
    "title": "Online-Betrug und Abzocke",
    "icon": "betrug",
    "desc": "Betrug erkennen: Phishing, falsche Gewinne und Tricks",
    "transfer": "Erzähle heute einer Person von einem Trick aus diesem Thema. So schützt ihr euch beide.",
    "selfAssessment": {
      "question": "Weißt du, wie Betrüger im Internet vorgehen?",
      "pictogram": "pikto-fraud",
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
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "betrug",
        "text": [
          {
            "text": "Stell dir vor: Eine SMS sagt: Du hast gewonnen.",
            "pictogram": "pikto-fraud"
          },
          {
            "text": "Du sollst nur schnell etwas bezahlen."
          },
          {
            "text": "Was machst du? Das lernst du hier."
          },
          {
            "text": "Betrug kann jedem Menschen passieren.",
            "pictogram": "pikto-people"
          },
          {
            "text": "Betrug ist nie deine Schuld.",
            "pictogram": "pikto-feel"
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
          },
          {
            "text": "Du kannst jederzeit Pause machen.",
            "pictogram": "pikto-pause"
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
          "question": "Eine E-Mail von der Bank sagt: Klick sofort auf den Link. Was ist besser?",
          "pictogram": "pikto-bank",
          "answers": [
            "Sofort antippen. Die Bank schreibt ja selbst.",
            "Nicht antippen. Bei der Bank selbst nachfragen."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Banken fragen nie per E-Mail nach deinen Daten.",
          "feedbackCorrect": "Das ist richtig. Du tippst nicht drauf. Du fragst bei der Bank selbst nach.",
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
            "text": "Die Nachricht drängt: Sofort! Schnell! Letzte Chance!",
            "pictogram": "pikto-location"
          },
          {
            "text": "Die Nachricht droht: Sonst wird Ihr Konto gesperrt.",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Du sollst auf einen Link tippen.",
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
        "remember": "Stress und Drohung sind Warnzeichen.",
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
            "text": "Du sollst eine kleine Gebühr zahlen.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Oder du sollst auf einen Link tippen.",
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
          "pictogram": "pikto-money",
          "answers": [
            "Schnell zahlen. Sind ja nur 2 Euro.",
            "Nicht zahlen. Nicht antippen."
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
          "pictogram": "pikto-money",
          "answers": [
            "Sofort Geld senden. Mein Kind braucht es ja.",
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
          },
          {
            "text": "Das ist ein Trick. Der Anruf ist nicht echt.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Sprich danach mit einer vertrauten Person.",
            "pictogram": "pikto-help"
          }
        ],
        "warning": "Leg auf. Ruf die Person selbst an. Nutze die bekannte Nummer. Die echte Polizei fordert nie Geld am Telefon.",
        "remember": "Bei Angst-Anrufen lege ich auf. Ich rufe selbst zurück.",
        "practice": {
          "question": "Ein Anrufer sagt: Ich bin Polizist. Geben Sie mir Ihr Geld. Was ist besser?",
          "pictogram": "pikto-money",
          "answers": [
            "Das Geld geben. Er ist ja von der Polizei.",
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
        "title": "Liebe im Internet",
        "module": "Tricks",
        "icon": "warning",
        "pictogram": "pikto-fraud",
        "text": [
          {
            "text": "Manche Menschen suchen Liebe im Internet.",
            "pictogram": "pikto-people"
          },
          {
            "text": "Das ist in Ordnung.",
            "pictogram": "pikto-done"
          },
          {
            "text": "Aber manche Menschen lügen dabei.",
            "pictogram": "pikto-fake"
          },
          {
            "text": "Eine fremde Person schreibt dir jeden Tag liebe Worte.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Ihr trefft euch aber nie.",
            "pictogram": "pikto-stranger"
          },
          {
            "text": "Dann bittet die Person um Geld.",
            "pictogram": "pikto-money"
          },
          {
            "text": "Das Foto kann gefälscht sein. Auch die Stimme kann gefälscht sein.",
            "pictogram": "pikto-ki"
          },
          {
            "text": "Du musst das nicht allein entscheiden.",
            "pictogram": "pikto-help"
          },
          {
            "text": "Sprich mit einer vertrauten Person.",
            "pictogram": "pikto-help"
          }
        ],
        "bullets": [
          "Ich schicke kein Geld.",
          "Ich spreche mit einer vertrauten Person.",
          "Ich kann die Person blockieren.",
          "Ich kann Anzeige bei der Polizei machen."
        ],
        "examples": [
          "Eine Person schreibt: Ich liebe dich. Wir haben uns noch nie gesehen.",
          "Eine Person schreibt: Ich brauche Geld für ein Flug-Ticket. Dann besuche ich dich."
        ],
        "warning": "Eine fremde Person bittet dich um Geld. Ihr habt euch noch nie getroffen. Dann schick kein Geld. Sprich zuerst mit einer vertrauten Person.",
        "success": "Betrug kann jedem Menschen passieren. Du musst dich nicht schämen.",
        "remember": "Ich schicke kein Geld an fremde Menschen aus dem Internet.",
        "practice": {
          "question": "Eine fremde Person schreibt dir jeden Tag liebe Worte. Ihr habt euch nie getroffen. Jetzt bittet die Person um Geld. Was machst du?",
          "pictogram": "pikto-money",
          "answers": [
            "Ich schicke das Geld. Die Person schreibt mir so liebe Worte.",
            "Ich schicke kein Geld. Ich spreche mit einer vertrauten Person."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Schick kein Geld. Sprich mit einer vertrauten Person.",
          "feedbackCorrect": "Das ist richtig. Du schickst kein Geld. Und du entscheidest das nicht allein.",
          "remember": "Ich schicke kein Geld an fremde Menschen aus dem Internet."
        }
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
          "pictogram": "pikto-money",
          "answers": [
            "Gebühr zahlen. Dann bekomme ich den Gewinn.",
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
            "text": "Aber ganz unten steht in kleiner Schrift: Danach kostet es jeden Monat Geld.",
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
        "warning": "Leg auf. Ruf die Firma selbst an. Nutze die bekannte Nummer.",
        "examples": [
          "Ein Anruf sagt: Ich bin von Ihrer Bank. Sagen Sie mir bitte den Code.",
          "Ein Anruf sagt: Ihr Computer ist kaputt. Ich helfe Ihnen."
        ],
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
          },
          {
            "text": "Betrüger rufen auch an.",
            "pictogram": "pikto-phone"
          },
          {
            "text": "Sie sagen: Ich bin von der Bank. Oder: Ich bin vom Computer-Service.",
            "pictogram": "pikto-phone"
          },
          {
            "text": "Echte Firmen fragen nie nach deinem Code.",
            "pictogram": "pikto-fraud"
          }
        ],
        "practice": {
          "question": "Jemand ruft an und fragt nach dem SMS-Code von deiner Bank. Was ist besser?",
          "pictogram": "pikto-code",
          "answers": [
            "Code vorlesen. Der Anrufer will ja helfen.",
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
        "title": "Vorsicht bei QR-Codes",
        "pictogram": "pikto-code",
        "module": "Schutz",
        "icon": "warning",
        "text": [
          {
            "text": "Ein QR-Code führt zu einer Internet-Seite.",
            "pictogram": "pikto-code"
          },
          {
            "text": "Du siehst vorher nicht: Welche Seite ist das?",
            "pictogram": "pikto-ask"
          },
          {
            "text": "Betrüger kleben falsche QR-Codes über echte.",
            "pictogram": "pikto-fraud"
          },
          {
            "text": "Zum Beispiel am Park-Automaten. Oder in Briefen.",
            "pictogram": "pikto-warning"
          },
          {
            "text": "Ein Aufkleber auf dem Automaten? Dann scanne nicht. Zahle mit Münzen oder in deiner Park-App.",
            "pictogram": "pikto-money"
          },
          {
            "text": "Ein Code in einem Brief? Prüfe erst: Wer schickt den Brief?",
            "pictogram": "pikto-mail"
          }
        ],
        "practice": {
          "question": "Am Park-Automaten klebt ein QR-Code-Aufkleber. Was ist besser?",
          "pictogram": "pikto-code",
          "answers": [
            "Schnell scannen. Dann kann ich zahlen.",
            "Nicht scannen. Ich zahle mit Münzen."
          ],
          "correctIndex": 1,
          "feedbackCorrect": "Das ist richtig. Der Aufkleber kann falsch sein. Zahle mit Münzen oder in deiner eigenen Park-App.",
          "feedbackWrong": "Das ist riskant. Betrüger kleben falsche Codes über echte. Zahle lieber mit Münzen oder in deiner eigenen Park-App.",
          "remember": "Bei einem Aufkleber scanne ich den Code nicht."
        },
        "remember": "Bei einem Aufkleber scanne ich den Code nicht."
      },
      {
        "title": "Was kann ich tun?",
        "module": "Handlungsplan",
        "icon": "help",
        "pictogram": "pikto-plan",
        "text": [
          {
            "text": "Eine Nachricht macht dir Stress.",
            "pictogram": "pikto-message"
          },
          {
            "text": "Oder ein Anruf macht Angst.",
            "pictogram": "pikto-phone"
          },
          {
            "text": "Dann hilft dir dein Plan.",
            "pictogram": "pikto-plan"
          }
        ],
        "bullets": [
          {
            "text": "Ich mache Stopp bei Stress.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Ich zahle nichts sofort.",
            "pictogram": "pikto-money"
          },
          {
            "text": "Ich rufe selbst an. Ich nehme meine bekannte Nummer.",
            "pictogram": "pikto-phone"
          },
          {
            "text": "Ich lese genau. Was kostet das?",
            "pictogram": "pikto-search"
          },
          {
            "text": "Ich frage eine vertraute Person.",
            "pictogram": "pikto-ask"
          }
        ],
        "warning": "Eine echte Bank fragt nie nach deinem Passwort. Auch nicht am Telefon.",
        "success": "Mit deinem Plan bleibst du ruhig. Dann machst du keinen Fehler.",
        "practice": {
          "question": "Ein Anruf sagt: Du musst sofort zahlen. Was machst du?",
          "pictogram": "pikto-phone",
          "answers": [
            "Ich lege auf. Ich rufe selbst meine bekannte Nummer an.",
            "Ich zahle schnell. Dann ist endlich Ruhe am Telefon."
          ],
          "correctIndex": 0,
          "feedbackCorrect": "Selbst anrufen ist am sichersten. Nimm deine bekannte Nummer.",
          "feedbackWrong": "Genau darauf setzen Betrüger. Das Geld ist dann meistens weg. Leg lieber auf. Und ruf selbst an.",
          "remember": "Ich lege auf. Ich rufe selbst an."
        },
        "remember": "Ich zahle nie sofort. Ich frage erst."
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
            "text": "Stress und Drohung sind Warnzeichen.",
            "pictogram": "pikto-feel"
          },
          {
            "text": "Ich tippe nicht auf fremde Links.",
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
        "remember": "Ich lasse mich nicht drängen.",
        "pictogram": "pikto-done"
      }
    ],
    "quizQuestions": [
      {
        "hinweis": "Phishing kommt von Angeln. Was wollen Betrüger damit fangen?",
        "question": "Was ist Phishing?",
        "pictogram": "pikto-fraud",
        "answers": [
          "Ein Trick mit falschen Nachrichten.",
          "Ein Spiel. Man angelt dort Fische.",
          "Ein Computer-Virus."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Phishing sind falsche Nachrichten. Sie wollen deine Daten stehlen.",
        "feedbackWrong": [
          null,
          "Phishing ist kein Spiel. Es ist Betrug.",
          "Ein Virus ist ein Programm. Phishing ist eine falsche Nachricht."
        ]
      },
      {
        "hinweis": "Warum will jemand, dass du keine Zeit zum Nachdenken hast?",
        "question": "Eine E-Mail drängt: Sofort klicken! Was bedeutet das?",
        "pictogram": "pikto-mail",
        "answers": [
          "Ein Warnzeichen.",
          "Das ist normal.",
          "Die Sache ist wirklich eilig."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Stress ist ein Warnzeichen.",
        "feedbackWrong": [
          null,
          "Auch eine bekannte Stelle kann dich zur Eile drängen. Prüfe die Nachricht zuerst.",
          "Die Sache kann dringend sein. Das macht den Link nicht sicher. Stoppe kurz. Prüfe die Nachricht."
        ]
      },
      {
        "hinweis": "Frag dich: Hast du überhaupt ein Paket bestellt?",
        "question": "Eine SMS: Zahlen Sie Gebühr für Ihr Paket. Was machst du?",
        "pictogram": "pikto-money",
        "answers": [
          "Schnell zahlen. Es ist ja wenig.",
          "Nicht zahlen, nicht antippen.",
          "Die SMS beantworten."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Solche SMS sind fast immer Betrug.",
        "feedbackWrong": [
          "Paket-SMS mit Geld-Forderung sind Betrug.",
          null,
          "Eine Antwort zeigt: Hier liest jemand. Antworte lieber nicht."
        ]
      },
      {
        "hinweis": "Die Nummer ist neu. Woher weißt du, wer schreibt?",
        "question": "Hallo Mama, neue Nummer, brauche Geld. Was machst du?",
        "pictogram": "pikto-money",
        "answers": [
          "Sofort Geld senden.",
          "Auf die neue Nummer schreiben.",
          "Die alte, bekannte Nummer anrufen."
        ],
        "correctIndex": 2,
        "feedbackCorrect": "Das ist richtig. Du prüfst über die bekannte Nummer.",
        "feedbackWrong": [
          "Das ist ein bekannter Betrugs-Trick.",
          "Auf der neuen Nummer sitzt vielleicht der Betrüger.",
          null
        ]
      },
      {
        "hinweis": "Überlege: Wie arbeitet die echte Polizei?",
        "question": "Fordert die echte Polizei Geld am Telefon?",
        "pictogram": "pikto-money",
        "answers": [
          "Ja, manchmal.",
          "Ja, bei großen Summen.",
          "Nein, niemals."
        ],
        "correctIndex": 2,
        "feedbackCorrect": "Das ist richtig. Die echte Polizei fordert nie Geld.",
        "feedbackWrong": [
          "Die echte Polizei fordert nie Geld am Telefon.",
          "Auch dann nicht. Die Polizei fordert nie Geld am Telefon.",
          null
        ]
      },
      {
        "hinweis": "Ein Gewinn ist ein Geschenk. Kostet ein Geschenk Geld?",
        "question": "Du sollst für einen Gewinn erst Geld zahlen. Was stimmt?",
        "pictogram": "pikto-money",
        "answers": [
          "Das ist normal.",
          "Das ist Betrug.",
          "Das ist die Steuer."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Echte Gewinne kosten kein Geld.",
        "feedbackWrong": [
          "Echte Gewinne kosten nie Geld.",
          null,
          "Bei einem echten Gewinn zahlst du vorher nichts."
        ]
      },
      {
        "hinweis": "Mit dem Code kommt man an dein Konto. Gibst du ihn weg?",
        "question": "Jemand fragt nach deinem SMS-Code. Was machst du?",
        "pictogram": "pikto-code",
        "answers": [
          "Code vorlesen.",
          "Code nur am Telefon sagen.",
          "Code niemals weitergeben."
        ],
        "correctIndex": 2,
        "feedbackCorrect": "Das ist richtig. Codes sind nur für dich.",
        "feedbackWrong": [
          "Mit dem Code können Betrüger dein Konto benutzen.",
          "Auch am Telefon nicht. Der Code bleibt bei dir.",
          null
        ]
      },
      {
        "hinweis": "Einen Aufkleber kann man überall aufkleben. Auch über einen echten Code.",
        "question": "Am Automaten klebt ein QR-Code-Aufkleber. Was ist besser?",
        "pictogram": "pikto-code",
        "answers": [
          "Nicht scannen. Mit Münzen bezahlen.",
          "Sofort scannen und gleich bezahlen.",
          "Den Aufkleber abziehen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Ein Aufkleber kann falsch sein. Zahle mit Münzen oder in deiner eigenen Park-App.",
        "feedbackWrong": [
          null,
          "Betrüger kleben falsche Codes über echte.",
          "Abziehen hilft dir nicht beim Bezahlen. Zahle lieber mit Münzen oder in deiner eigenen Park-App."
        ]
      },
      {
        "hinweis": "Es ist passiert. Was ist jetzt das Wichtigste?",
        "question": "Du bist auf einen Betrug hereingefallen. Was ist richtig?",
        "pictogram": "pikto-fraud",
        "answers": [
          "Ich schäme mich und sage nichts.",
          "Ich hole mir sofort Hilfe.",
          "Ich warte erst ein paar Tage."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Betrug kann jedem passieren. Hilfe holen ist stark.",
        "feedbackWrong": [
          "Betrug ist nicht deine Schuld. Hol dir schnell Hilfe.",
          null,
          "Warten macht es schwerer. Hol dir sofort Hilfe."
        ]
      },
      {
        "hinweis": "Diese Nummer gilt in ganz Deutschland. Sie steht in diesem Thema.",
        "question": "Welche Nummer sperrt deine Bank-Karte?",
        "pictogram": "pikto-bank",
        "answers": [
          "110 110",
          "112 112",
          "116 116"
        ],
        "correctIndex": 2,
        "feedbackCorrect": "Das ist richtig. Der Sperr-Notruf ist die 116 116. Bei manchen Kredit-Karten rufst du deine Bank an.",
        "feedbackWrong": [
          "Das ist nicht die Sperr-Nummer. Der Sperr-Notruf ist die 116 116.",
          "Die 112 ist für Notfälle. Karten sperrt die 116 116.",
          null
        ]
      },
      {
        "hinweis": "Du kennst die Nummer nicht. Was heißt das für den Link?",
        "question": "Eine SMS hat einen Link von einer fremden Nummer. Was machst du?",
        "pictogram": "pikto-stranger",
        "answers": [
          "Den Link nicht öffnen.",
          "Schnell auf den Link tippen.",
          "Den Link an Freunde schicken."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Fremde Links öffne ich nicht.",
        "feedbackWrong": [
          null,
          "Fremde Links können gefährlich sein.",
          "Dann sind auch deine Freunde in Gefahr."
        ]
      },
      {
        "hinweis": "Denk an das Warnzeichen: Geld, aber kein Treffen.",
        "question": "Jemand aus dem Internet schreibt dir liebe Worte. Die Person bittet um Geld. Ihr habt euch nie getroffen. Was ist richtig?",
        "pictogram": "pikto-money",
        "answers": [
          "Kein Geld schicken. Mit einer vertrauten Person sprechen.",
          "Schnell Geld schicken. Die Person ist sonst traurig.",
          "Die Bank-Daten schicken. Dann holt sie sich das Geld."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Du schickst kein Geld. Und du holst dir Unterstützung.",
        "feedbackWrong": [
          null,
          "Wer dich wirklich mag, bittet dich nicht um Geld. Schick kein Geld.",
          "Bank-Daten gibst du nie weiter. Auch nicht aus Liebe."
        ]
      },
      {
        "id": "betrug/quiz/banknachricht-app-selbst",
        "question": "Eine E-Mail nennt den Namen von deiner Bank. Darin steht: Neue Nachricht zu Ihrem Konto. Bitte hier anmelden. Ein Link ist dabei. Du willst nachsehen. Du nutzt deine Bank-App schon auf deinem Handy. Was machst du zuerst?",
        "pictogram": "pikto-bank",
        "hinweis": "Überlege: Welchen Weg zur Bank kennst du schon?",
        "answers": [
          "Ich tippe auf den Link. Die Nachricht nennt meine Bank.",
          "Ich öffne meine Bank-App selbst. Dort sehe ich nach.",
          "Ich antworte auf die E-Mail. Ich frage nach der Nachricht."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Gut. Du öffnest die Bank-App über das Zeichen auf deinem Handy. Du nutzt den Link nicht. In der App siehst du nach. Du musst den Trick nicht erkennen.",
        "feedbackWrong": [
          "Auch eine falsche E-Mail kann deine Bank nennen. Der Link kann auf eine falsche Seite führen. Öffne die Bank-App über das Zeichen auf deinem Handy.",
          null,
          "Die Antwort geht an die Adresse aus der E-Mail. So weißt du noch nicht: Ist sie von deiner Bank? Öffne deine Bank-App selbst. Dort siehst du nach."
        ],
        "remember": "Ich muss den Trick nicht erkennen. Ich öffne die App selbst."
      }
    ],
    "helpQuestions": [
      "Macht dir die Nachricht Stress oder Angst?",
      "Soll ich Geld zahlen oder Daten eingeben?",
      "Kenne ich den Absender wirklich?",
      "Kann ich die Person selbst zurückrufen?",
      "Brauche ich Unterstützung?"
    ],
    "memoryRules": [
      "Stress und Drohung sind Warnzeichen.",
      "Ich tippe nicht auf fremde Links.",
      "Ich gebe nie Codes oder Bank-Daten weiter.",
      "Echte Gewinne kosten kein Geld.",
      "Die echte Polizei fordert nie Geld.",
      "Bei Geld-Forderungen rufe ich selbst zurück.",
      "Betrug ist nicht meine Schuld. Ich hole mir Hilfe.",
      "Bei einem Aufkleber scanne ich den Code nicht."
    ],
    "einfachQuiz": [5, 1, 12],
    "einfachLessons": [
      {
        "title": "Was ist Betrug im Internet?",
        "module": "Einfach",
        "pictogram": "pikto-fraud",
        "icon": "betrug",
        "text": [
          "Manche Menschen betrügen andere.",
          "Sie sagen: Ich helfe dir.",
          "Aber sie wollen dein Geld.",
          "Oder deine Daten.",
          "Das ist Betrug."
        ],
        "remember": "Nicht jeder im Internet ist ehrlich.",
        "vorbildWer": "Alex",
        "vorbild": [
          "Jemand schreibt Alex: Ich helfe dir.",
          "Gib mir nur deine Bank-Daten.",
          "Alex merkt: Die Person will meine Daten.",
          "Er gibt nichts ein."
        ]
      },
      {
        "title": "Wie erkennst du Betrug?",
        "module": "Einfach",
        "pictogram": "pikto-fraud",
        "icon": "warning",
        "text": [
          "Du gewinnst plötzlich etwas.",
          "Jemand braucht dringend Geld.",
          "Jemand will eine schnelle Antwort von dir.",
          "Das sind Zeichen für Betrug.",
          "Du machst Stopp.",
          "Du fragst eine vertraute Person."
        ],
        "remember": "Stress und Gewinn: Stopp machen.",
        "vorbildWer": "Tilda",
        "vorbild": [
          "Eine Nachricht sagt: Du hast ein Handy gewonnen.",
          "Zahl nur schnell 2 Euro.",
          "Tilda macht Stopp.",
          "Sie fragt Alex."
        ]
      },
      {
        "title": "Was tust du bei Betrug?",
        "module": "Einfach",
        "pictogram": "pikto-no",
        "icon": "stop",
        "text": [
          "Du zahlst kein Geld.",
          "Du gibst keine Daten ein.",
          "Eine Nachricht sagt: Mit deinem Bank-Konto stimmt etwas nicht.",
          "Dann öffnest du die Bank-App selbst.",
          "Du sagst es einer vertrauten Person.",
          "Die Person hilft dir."
        ],
        "remember": "Kein Geld senden. Vertraute Person fragen.",
        "vorbildWer": "Alex",
        "vorbild": [
          "Eine SMS sagt: Dein Konto ist gesperrt.",
          "Tipp hier.",
          "Alex tippt nicht auf den Link.",
          "Er öffnet seine Bank-App selbst."
        ]
      }
    ],
    "miniQuestion": {
      "question": "Eine Nachricht macht dir Stress und will Geld. Was ist das oft?",
      "answers": [
        "Betrug",
        "Ein Geschenk",
        "Ein Gewinn"
      ],
      "correct": 0,
      "explanation": "Stress und Geld-Forderungen sind Warnzeichen für Betrug."
    }
  },
  {
    "id": "einkaufen",
    "title": "Online-Einkaufen und Bezahlen",
    "icon": "einkaufen",
    "desc": "Sicher einkaufen und bezahlen im Internet",
    "transfer": "Willst du heute etwas kaufen? Prüfe zuerst den Shop.",
    "selfAssessment": {
      "question": "Wie sicher fühlst du dich beim Online-Einkaufen?",
      "pictogram": "pikto-shop",
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
    "lessons": [
      {
        "title": "Start",
        "module": "Start",
        "icon": "einkaufen",
        "text": [
          {
            "text": "Stell dir vor: Ein Shop im Internet ist sehr billig.",
            "pictogram": "pikto-link"
          },
          {
            "text": "Du sollst vorher bezahlen."
          },
          {
            "text": "Was machst du? Das lernst du hier."
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
        "warning": "Ein Fake-Shop ist ein falscher Shop. Du bezahlst, aber die Ware kommt nie. Prüfe einen Shop, bevor du bezahlst.",
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
          },
          {
            "text": "Es gibt eine Prüf-Seite: der Fakeshop-Finder.",
            "pictogram": "pikto-search"
          },
          {
            "text": "Du gibst die Adresse vom Shop ein. Die Seite prüft den Shop.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Prüfe am besten mit einer vertrauten Person.",
            "pictogram": "pikto-help"
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
          "pictogram": "pikto-money",
          "answers": [
            "Schnell kaufen. So billig wird es nie wieder.",
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
        "title": "Vor dem Kaufen prüfen",
        "module": "Einkaufen",
        "icon": "understand",
        "text": [
          {
            "text": "Prüfe vor dem Kaufen.",
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
            "text": "Kauf auf Rechnung ist sicher: Erst kommt die Ware. Dann zahlst du.",
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
          },
          {
            "text": "Bei privaten Anzeigen gilt: Erst die Ware ansehen. Dann bezahlen.",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Wähle beim Bezahlen nie: Geld an Freunde senden. Dann gibt es keinen Käufer-Schutz.",
            "pictogram": "pikto-no"
          }
        ],
        "practice": {
          "question": "Welche Bezahl-Art ist sicherer?",
          "pictogram": "pikto-money",
          "answers": [
            "Vorkasse an einen fremden Shop.",
            "Kauf auf Rechnung."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Bei Vorkasse ist dein Geld zuerst weg.",
          "feedbackCorrect": "Das ist richtig. Erst kommt die Ware. Dann zahlst du.",
          "remember": "Rechnung ist sicherer als Vorkasse."
        },
        "pictogram": "pikto-shop"
      },
      {
        "title": "Bank-Daten schützen",
        "warning": "PIN und TAN sind geheim. Gib PIN und TAN niemandem. Deine Bank fragt nie danach.",
        "module": "Bezahlen",
        "icon": "lock",
        "text": [
          {
            "text": "Deine Bank-Daten sind sehr wichtig.",
            "pictogram": "pikto-data"
          },
          {
            "text": "PIN und TAN sind geheime Zahlen von deiner Bank.",
            "pictogram": "pikto-lock"
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
          "pictogram": "pikto-mail",
          "answers": [
            "PIN eingeben. Die Bank will es ja.",
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
        "title": "Nicht sofort kaufen",
        "module": "Achtung",
        "icon": "stop",
        "text": [
          {
            "text": "Shops machen dir oft Stress.",
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
          "pictogram": "pikto-shop",
          "answers": [
            "Schnell kaufen. Sonst ist es weg.",
            "Ruhig bleiben und in Ruhe überlegen."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist noch nicht richtig. Eile ist ein Verkaufs-Trick.",
          "feedbackCorrect": "Das ist richtig. Du darfst dir Zeit nehmen. Gute Angebote gibt es wieder.",
          "remember": "Ich lasse mich beim Einkaufen nicht hetzen."
        },
        "pictogram": "pikto-no"
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
            "text": "Frag eine vertraute Person um Hilfe.",
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
        "warning": "Ein sehr niedriger Preis oder ein Countdown will dich zur Eile treiben.",
        "success": "Wer sich nicht hetzen lässt, kauft sicherer ein.",
        "practice": {
          "question": "Ein Shop zeigt: Nur noch 2 Minuten! Was machst du?",
          "pictogram": "pikto-shop",
          "answers": [
            "Ich lasse mich nicht hetzen und prüfe den Shop in Ruhe.",
            "Ich kaufe schnell. Sonst ist das Angebot gleich weg."
          ],
          "correctIndex": 0,
          "feedbackWrong": "Die Zeit-Anzeige ist ein Trick. Lass dich nicht hetzen.",
          "feedbackCorrect": "Die Zeit-Anzeige will dich nur drängen.",
          "remember": "Ich lasse mich beim Einkaufen nicht hetzen."
        },
        "remember": "Ich prüfe in Ruhe. Ich lasse mich nicht hetzen.",
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
        "hinweis": "Fake heißt falsch. Was ist an so einem Shop falsch?",
        "question": "Was ist ein Fake-Shop?",
        "pictogram": "pikto-shop",
        "answers": [
          "Ein Shop mit sehr guten Angeboten.",
          "Ein Shop aus dem Ausland.",
          "Ein falscher Shop. Die Ware kommt nie."
        ],
        "correctIndex": 2,
        "feedbackCorrect": "Das ist richtig. Im Fake-Shop bezahlst du, bekommst aber nichts.",
        "feedbackWrong": [
          "Der günstige Preis lockt dich nur. Die Ware kommt nicht.",
          "Auch deutsche Shops können falsch sein.",
          null
        ]
      },
      {
        "hinweis": "Sehr billig und Geld vorher. Passt das zusammen?",
        "question": "Ein Shop ist extrem billig und will nur Vorkasse. Was ist das?",
        "pictogram": "pikto-money",
        "answers": [
          "Ein super Angebot.",
          "Ein neuer Shop.",
          "Ein Warnzeichen."
        ],
        "correctIndex": 2,
        "feedbackCorrect": "Das ist richtig. Das sind typische Warnzeichen.",
        "feedbackWrong": [
          "Extrem billig plus Vorkasse ist verdächtig.",
          "Neu heißt nicht: sicher. Sehr niedrige Preise und nur Vorkasse sind Warnzeichen.",
          null
        ]
      },
      {
        "hinweis": "Du kennst den Shop nicht. Was heißt das für dein Geld?",
        "question": "Ein Shop will das Geld vorher. Du kennst den Shop nicht. Was ist besser?",
        "pictogram": "pikto-money",
        "answers": [
          "Ich zahle vorher.",
          "Ich kaufe dort nicht.",
          "Ich zahle nur die Hälfte vorher."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Bei fremden Shops zahlst du nicht im Voraus.",
        "feedbackWrong": [
          "Dann ist dein Geld vielleicht weg.",
          null,
          "Auch die Hälfte ist weg. Kauf dort lieber nicht."
        ]
      },
      {
        "hinweis": "Überlege: Kennt deine Bank deine PIN nicht schon?",
        "question": "Deine Bank schreibt eine E-Mail und will deine PIN. Was stimmt?",
        "pictogram": "pikto-bank",
        "answers": [
          "Das ist Betrug. Die Bank fragt nie nach der PIN.",
          "Das ist normal.",
          "Das ist eine normale Sicherheits-Prüfung von der Bank."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Banken fragen nie nach PIN oder TAN.",
        "feedbackWrong": [
          null,
          "Die Bank fragt nie nach der PIN.",
          "So etwas gibt es nicht. Die Bank fragt nie nach der PIN."
        ]
      },
      {
        "hinweis": "Nur noch heute macht Eile. Was hilft gegen Eile?",
        "question": "Ein Angebot sagt: Nur noch heute! Was machst du?",
        "pictogram": "pikto-shop",
        "answers": [
          "Ruhig bleiben und überlegen.",
          "Sofort kaufen. Sonst ist es weg.",
          "Zwei Stück kaufen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Eile ist ein Verkaufs-Trick.",
        "feedbackWrong": [
          null,
          "Du darfst dir Zeit nehmen.",
          "Mehr kaufen kostet nur mehr Geld."
        ]
      },
      {
        "hinweis": "Am Ende zahlst du oft mehr als auf dem Bild steht.",
        "question": "Was prüfst du vor dem Kaufen?",
        "pictogram": "pikto-search",
        "answers": [
          "Nur das Bild von der Ware. Es sieht gut aus.",
          "Preis, Versand-Kosten und versteckte Abos.",
          "Nur die Sterne-Bewertung."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Das ist richtig. Du prüfst die echten Kosten.",
        "feedbackWrong": [
          "Ein Bild sagt nichts über die Kosten.",
          null,
          "Sterne kann man kaufen. Schau auf Preis und Kosten."
        ]
      },
      {
        "hinweis": "Nach dem Kauf gibt es eine Frist. Wie lang ist sie?",
        "question": "Du hast etwas Falsches bestellt. Was kannst du oft tun?",
        "pictogram": "pikto-shop",
        "answers": [
          "14 Tage zurückgeben. Das heißt Widerruf.",
          "Nichts. Ich muss es leider behalten.",
          "Nur mit dem Kassen-Bon tauschen."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. Online-Käufe kannst du oft 14 Tage zurückgeben.",
        "feedbackWrong": [
          null,
          "Du hast oft 14 Tage Widerrufs-Recht.",
          "Beim Kauf im Internet brauchst du keinen Bon."
        ]
      },
      {
        "hinweis": "Kostenlos ist nur der Anfang. Was kommt im Spiel dazu?",
        "question": "Kosten kleine Käufe in Spielen echtes Geld?",
        "pictogram": "pikto-money",
        "answers": [
          "Nein. Ich bezahle nur mit Spiel-Geld.",
          "Nur beim ersten Mal.",
          "Ja, und viele kleine Käufe werden teuer."
        ],
        "correctIndex": 2,
        "feedbackCorrect": "Das ist richtig. In-App-Käufe kosten echtes Geld.",
        "feedbackWrong": [
          "Käufe in Apps kosten echtes Geld.",
          "Jeder Kauf kostet Geld. Nicht nur der erste.",
          null
        ]
      },
      {
        "hinweis": "Ein guter Shop sagt, wer er ist. Was fehlt hier?",
        "question": "Ein Shop hat keine Adresse und keine Telefon-Nummer. Was heißt das?",
        "pictogram": "pikto-search",
        "answers": [
          "Der Shop ist sicher gut.",
          "Vorsicht. Das ist ein Warnzeichen.",
          "Der Shop ist neu und noch im Aufbau."
        ],
        "correctIndex": 1,
        "feedbackCorrect": "Ein guter Shop sagt, wer er ist.",
        "feedbackWrong": [
          "Ein guter Shop sagt, wer er ist.",
          null,
          "Auch ein neuer Shop soll zeigen: Wer betreibt ihn? Prüfe das vor dem Kauf."
        ]
      },
      {
        "hinweis": "Mit PIN und TAN kommt man an dein Geld.",
        "question": "Bleiben deine PIN und TAN geheim?",
        "pictogram": "pikto-key",
        "answers": [
          "Ja, PIN und TAN bleiben geheim.",
          "Nein, die darf ich weitergeben.",
          "Nur der Bank sage ich sie."
        ],
        "correctIndex": 0,
        "feedbackCorrect": "Das ist richtig. PIN und TAN bleiben geheim.",
        "feedbackWrong": [
          null,
          "PIN und TAN sind geheim. Gib sie nie weiter.",
          "Auch der Bank nicht. Sie fragt nie danach."
        ]
      },
      {
        "id": "einkaufen/quiz/kern-rechnung-waehlen",
        "correctIndex": 2,
        "pictogram": "pikto-money",
        "question": "Du willst eine Lampe im Internet kaufen. Den Shop hast du geprüft. Du kannst auf Rechnung zahlen. Dabei zahlst du erst nach der Lieferung. Oder du überweist das Geld vor der Lieferung. Welche Bezahl-Art gibt dir mehr Schutz?",
        "answers": [
          "Ich wähle Vorkasse. Die Lampe hat gute Bewertungen.",
          "Ich wähle Vorkasse. Der Shop nennt eine Adresse.",
          "Ich wähle Rechnung. Ich zahle nach der Lieferung."
        ],
        "feedbackCorrect": "Genau. Bei dieser Rechnung zahlst du erst nach der Lieferung. Das gibt dir mehr Schutz als Vorkasse. Trotzdem prüfst du auch den Shop.",
        "feedbackWrong": [
          "Gute Bewertungen ändern die Bezahl-Art nicht. Bei Vorkasse zahlst du vor der Lieferung. Auf Rechnung bekommst du zuerst die Ware.",
          "Auch mit einer Adresse zahlst du bei Vorkasse vorher. Auf Rechnung bekommst du zuerst die Ware.",
          null
        ],
        "hinweis": "Überlege: Bei welcher Bezahl-Art bekommst du die Ware vor dem Bezahlen?",
        "remember": "Rechnung ist sicherer als Vorkasse."
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
        "remember": "Nur bei sicheren Shops einkaufen.",
        "vorbildWer": "Tilda",
        "vorbild": [
          "Tilda will eine Hose kaufen.",
          "Sie kauft bei einem bekannten Shop.",
          "Den Shop kennt sie schon lange."
        ]
      },
      {
        "title": "Gute Shops erkennen",
        "module": "Einfach",
        "pictogram": "pikto-shop",
        "icon": "check",
        "text": [
          "Ein guter Shop zeigt seinen Namen und seine Adresse.",
          "Das steht im Impressum.",
          "Die Preise sind normal. Nicht sehr billig.",
          "Auch falsche Shops haben ein Schloss in der Adress-Zeile.",
          "Das Schloss allein ist also kein gutes Zeichen.",
          "Bist du unsicher? Dann fragst du eine vertraute Person."
        ],
        "remember": "Ein guter Shop zeigt Name und Adresse.",
        "vorbildWer": "Alex",
        "vorbild": [
          "Alex findet einen neuen Shop.",
          "Er schaut ins Impressum.",
          "Dort stehen Name und Adresse.",
          "Das ist ein gutes Zeichen."
        ]
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
        "remember": "PayPal oder Rechnung ist sicherer.",
        "vorbildWer": "Tilda",
        "vorbild": [
          "Tilda kauft zum ersten Mal in einem Shop.",
          "Sie bezahlt auf Rechnung.",
          "So bekommt sie zuerst die Ware."
        ]
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
    },
    "einfachQuiz": [
      1,
      8,
      10
    ]
  }
];

/* =============================================================
   Trainings-Postfach – nachgebaute Nachrichten zum Üben.
   Wichtig: Alle Nachrichten hier sind erfunden. Nur zum Üben.
   isTrick: true = Betrugs-Trick, false = normale Nachricht.
   explanation: kurze Begründung in Leichter Sprache.
   ============================================================= */
const TRAINING_INBOX = [
  {
    "channel": "SMS",
    "from": "Unbekannte Nummer",
    "text": "Ihr Paket wartet. Zahlen Sie 1,99 Euro Zoll-Gebühr. Klicken Sie hier: paket-info-24.xyz",
    "isTrick": true,
    "explanation": "Das ist der Paket-Trick. Echte Paket-Dienste fordern kein Geld per SMS. Der Link ist komisch."
  },
  {
    "channel": "WhatsApp",
    "from": "Unbekannte Nummer",
    "text": "Hallo Mama. Mein Handy ist kaputt. Das ist meine neue Nummer. Kannst du mir schnell 300 Euro schicken?",
    "isTrick": true,
    "explanation": "Das ist der Hallo-Mama-Trick. Betrüger tun so, als sind sie dein Kind. Ruf die alte Nummer an. Dann weißt du die Wahrheit."
  },
  {
    "channel": "SMS",
    "from": "Praxis Dr. Weber",
    "text": "Erinnerung: Sie haben morgen um 10 Uhr einen Termin bei uns. Ihre Praxis Dr. Weber.",
    "isTrick": false,
    "explanation": "Diese Nachricht will nichts von dir. Kein Geld. Kein Link. Kein Stress. So sehen normale Erinnerungen aus. Bist du unsicher? Ruf die Praxis an."
  },
  {
    "channel": "E-Mail",
    "from": "service@bank-sicherheit24.xyz",
    "text": "Ihr Konto wird heute gesperrt! Bestätigen Sie sofort Ihre Bank-Daten. Klicken Sie auf diesen Link.",
    "isTrick": true,
    "explanation": "Das ist Phishing. Deine echte Bank fragt nie per E-Mail nach deinen Daten. Stress und Drohung sind Warnzeichen."
  },
  {
    "channel": "WhatsApp",
    "from": "Anna",
    "text": "Hallo! Kommst du am Samstag zum Kaffee? Ich freue mich. Liebe Grüße, Anna",
    "isTrick": false,
    "explanation": "Diese Nachricht kommt von einer Person, die du kennst. Sie will kein Geld. Sie macht dir keinen Stress. Das ist eine normale Nachricht."
  },
  {
    "channel": "E-Mail",
    "from": "gewinn@super-lotto-plus.xyz",
    "text": "Herzlichen Glückwunsch! Sie haben 1.000 Euro gewonnen. Zahlen Sie nur 20 Euro Gebühr. Dann bekommen Sie das Geld.",
    "isTrick": true,
    "explanation": "Das ist ein falscher Gewinn. Bei einem echten Gewinn musst du nie zuerst zahlen."
  },
  {
    "channel": "SMS",
    "from": "Unbekannte Nummer",
    "text": "Hallo! Ich habe dir aus Versehen einen Code geschickt. Bitte schick mir den Code schnell zurück.",
    "isTrick": true,
    "explanation": "Das ist der Code-Trick. Mit dem Code können Betrüger dein Konto übernehmen. Du gibst Codes nie weiter."
  },
  {
    "channel": "E-Mail",
    "from": "bestellung@musterschuhe.de",
    "text": "Danke für deine Bestellung. Deine Schuhe kommen am Donnerstag. Du musst nichts weiter tun.",
    "isTrick": false,
    "explanation": "Du musst nichts tun. Kein Geld. Kein Stress. Wichtig: Hast du wirklich etwas bestellt? Wenn nicht, ist so eine Nachricht ein Warnzeichen."
  },
  {
    "channel": "SMS",
    "from": "Stream-Dienst",
    "text": "Ihr Konto ist abgelaufen. Aktualisieren Sie sofort Ihre Bank-Daten: stream-zahlung-jetzt.xyz",
    "isTrick": true,
    "explanation": "Das ist Phishing. Der Link ist komisch. Und die Nachricht macht dir Stress. Öffne die echte App. Dort siehst du, ob etwas fehlt."
  },
  {
    "channel": "WhatsApp",
    "from": "Wohn-Gruppe",
    "text": "Erinnerung an alle: Morgen um 15 Uhr ist unser Treffen im Gemeinschafts-Raum.",
    "isTrick": false,
    "explanation": "Diese Nachricht kommt aus deiner Gruppe. Sie will nichts von dir. Das ist eine normale Nachricht."
  }
];
