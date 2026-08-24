/* =============================================================
   Übungs-Handy – Szenarien zu den 12 Themen
   -------------------------------------------------------------
   Ein Szenario pro Thema. Es zeigt einen nachgebauten Handy-
   Bildschirm und stellt darin echte Entscheidungen (§3 UDL:
   Handlung; §4 ressourcenorientiert; Testing-Effekt).

   Alles hier ist erfunden. Keine echten Marken, keine echten
   Nummern, keine echten Adressen. Erfundene Endungen (.xyz)
   machen sichtbar, dass es Übung ist.

   AUFBAU
   scenarios[themaId] = {
     titel      Überschrift auf der Startseite des Szenarios
     typ        chat | posteingang | einstellungen | anruf | shop | video
                chat  -> Bildschirm sammelt sich an (Verlauf)
                sonst -> jede Szene ersetzt den Bildschirm
     kanal      Zeile in der Handy-Statusleiste
     einstieg   ein bis drei Sätze, was gleich passiert
     szenen     [ { inhalt: [...], frage: {...} } ]
     abschluss  Satz am Ende
   }

   INHALTS-BAUSTEINE (alle optional kombinierbar)
     { typ:"nachricht", von, text, zeit }
     { typ:"eigene",    text }
     { typ:"liste",     eintraege:[{von, vorschau, zeit}] }
     { typ:"schalter",  label, wert, hinweis }
     { typ:"anruf",     von, nummer }
     { typ:"shop",      titel, preis, zeilen:[...] }
     { typ:"video",     titel, kanal, dauer, hinweis }
     { typ:"hinweis",   text }

   FRAGE = genau das Format von lesson.practice:
     question, pictogram, answers, correctIndex,
     feedbackWrong, feedbackCorrect, remember
   Dadurch gelten Vorlesen, Piktogramme und Rückmeldung
   unverändert weiter.
   ============================================================= */

const SCENARIOS = {

  /* ---------------------------------------------------------
     DATENSCHUTZ – Einstellungen und ein Formular
     --------------------------------------------------------- */
  datenschutz: {
    titel: "Dein Konto einstellen",
    typ: "einstellungen",
    kanal: "Einstellungen",
    einstieg: [
      "Du hast ein neues Konto.",
      "Jetzt stellst du es ein.",
      "Du entscheidest, wer was sehen darf."
    ],
    szenen: [
      {
        inhalt: [
          { typ: "hinweis", text: "Wer darf dein Geburts-Datum sehen?" },
          { typ: "schalter", label: "Mein Geburts-Datum", wert: "Alle im Internet" }
        ],
        frage: {
          question: "Wer soll dein Geburts-Datum sehen?",
          pictogram: "pikto-birthday",
          answers: ["Alle im Internet", "Nur ich"],
          correctIndex: 1,
          feedbackWrong: "Dein Geburts-Datum ist eine private Angabe. Fremde brauchen sie nicht. Betrüger können damit arbeiten.",
          feedbackCorrect: "Gut. Dein Geburts-Datum geht nur dich etwas an.",
          remember: "Mein Geburts-Datum bleibt privat."
        }
      },
      {
        inhalt: [
          { typ: "hinweis", text: "Jetzt brauchst du ein Passwort." },
          { typ: "schalter", label: "Passwort", wert: "Noch leer", hinweis: "Mindestens 12 Zeichen" }
        ],
        frage: {
          question: "Welches Passwort ist besser?",
          pictogram: "pikto-key",
          answers: ["BlauerStuhlAmFenster7", "12345678"],
          correctIndex: 0,
          feedbackWrong: "Dieses Passwort ist zu einfach. Ein Programm findet es in einer Sekunde.",
          feedbackCorrect: "Gut. Das ist lang. Und es ist leicht zu merken.",
          remember: "Ich nehme ein langes Passwort."
        }
      },
      {
        inhalt: [
          { typ: "hinweis", text: "Eine Seite fragt nach mehr." },
          { typ: "nachricht", von: "gewinnspiel-sommer.xyz", text: "Mach mit beim Gewinnspiel! Wir brauchen nur: deinen Namen, deine Adresse und deine Bank-Daten.", zeit: "jetzt" }
        ],
        frage: {
          question: "Was machst du?",
          pictogram: "pikto-no",
          answers: ["Ich gebe die Bank-Daten ein.", "Ich mache nicht mit."],
          correctIndex: 1,
          feedbackWrong: "Ein Gewinnspiel braucht nie deine Bank-Daten. Hier holt sich jemand deine Daten.",
          feedbackCorrect: "Richtig. Für ein Gewinnspiel braucht niemand deine Bank-Daten.",
          remember: "Bank-Daten gebe ich nicht für ein Gewinnspiel."
        }
      }
    ],
    abschluss: "Du hast dein Konto sicher eingestellt. So geht das auch bei deinem echten Handy."
  },

  /* ---------------------------------------------------------
     WHATSAPP – Chat-Verlauf: Hallo Mama und der Code
     --------------------------------------------------------- */
  whatsapp: {
    titel: "Eine neue Nummer schreibt dir",
    typ: "chat",
    kanal: "Nachrichten",
    einstieg: [
      "Du bekommst eine Nachricht.",
      "Die Nummer kennst du nicht.",
      "Schau, wie es weitergeht."
    ],
    szenen: [
      {
        inhalt: [
          { typ: "nachricht", von: "Unbekannte Nummer", text: "Hallo Mama. Mein Handy ist kaputt. Das ist meine neue Nummer.", zeit: "14:02" }
        ],
        frage: {
          question: "Was machst du zuerst?",
          pictogram: "pikto-stranger",
          answers: ["Ich rufe die alte Nummer an.", "Ich speichere die neue Nummer."],
          correctIndex: 0,
          feedbackWrong: "Noch weißt du nicht, wer das ist. Die alte Nummer sagt dir die Wahrheit.",
          feedbackCorrect: "Sehr gut. Ein Anruf bei der alten Nummer klärt alles.",
          remember: "Ich rufe die alte Nummer an."
        }
      },
      {
        inhalt: [
          { typ: "eigene", text: "Ich rufe dich gleich an." },
          { typ: "nachricht", von: "Unbekannte Nummer", text: "Nicht anrufen! Das geht gerade nicht. Kannst du mir schnell 300 Euro schicken?", zeit: "14:05" }
        ],
        frage: {
          question: "Woran erkennst du hier den Trick?",
          pictogram: "pikto-warning",
          answers: ["An der Uhrzeit.", "An dem Druck und an dem Geld."],
          correctIndex: 1,
          feedbackWrong: "Die Uhrzeit sagt nichts. Der Trick steckt im Druck: schnell, nicht anrufen, Geld.",
          feedbackCorrect: "Genau. Druck und eine Geld-Bitte sind das Warnzeichen.",
          remember: "Druck und Geld sind ein Warnzeichen."
        }
      },
      {
        inhalt: [
          { typ: "nachricht", von: "Unbekannte Nummer", text: "Ich schicke dir gleich einen Code. Bitte schick ihn mir sofort zurück.", zeit: "14:07" }
        ],
        frage: {
          question: "Schickst du den Code zurück?",
          pictogram: "pikto-code",
          answers: ["Nein. Codes gebe ich nie weiter.", "Ja, das ist ja nur eine Zahl."],
          correctIndex: 0,
          feedbackWrong: "Mit diesem Code kann jemand dein WhatsApp übernehmen. Der Code ist wie ein Schlüssel.",
          feedbackCorrect: "Richtig. Ein Code ist wie ein Schlüssel zu deiner Wohnung.",
          remember: "Ich gebe keinen Code weiter."
        }
      },
      {
        inhalt: [
          { typ: "eigene", text: "Nein." },
          { typ: "hinweis", text: "Du kannst die Nummer blockieren und melden." }
        ],
        frage: {
          question: "Du hast vorhin schon geantwortet. Ist jetzt alles verloren?",
          pictogram: "pikto-feel",
          answers: ["Ja, jetzt ist es zu spät.", "Nein. Ich kann jederzeit aufhören."],
          correctIndex: 1,
          feedbackWrong: "Das stimmt nicht. Solange du kein Geld und keinen Code geschickt hast, ist nichts passiert. Aufhören geht immer.",
          feedbackCorrect: "Genau so ist es. Du darfst mitten im Gespräch aussteigen.",
          remember: "Ich darf jederzeit aufhören."
        }
      }
    ],
    abschluss: "Du hast den Hallo-Mama-Trick erkannt. Und du weißt: aussteigen geht immer."
  },

  /* ---------------------------------------------------------
     FACEBOOK – Einstellungen und eine Anfrage
     --------------------------------------------------------- */
  facebook: {
    titel: "Wer sieht deinen Beitrag?",
    typ: "einstellungen",
    kanal: "Dein Profil",
    einstieg: [
      "Du willst ein Foto zeigen.",
      "Vorher stellst du ein: Wer darf es sehen?"
    ],
    szenen: [
      {
        inhalt: [
          { typ: "hinweis", text: "Du hast ein Foto von deinem Zimmer gemacht." },
          { typ: "schalter", label: "Wer sieht diesen Beitrag?", wert: "Öffentlich" }
        ],
        frage: {
          question: "Was stellst du ein?",
          pictogram: "pikto-people",
          answers: ["Nur Freunde.", "Öffentlich. Alle dürfen es sehen."],
          correctIndex: 0,
          feedbackWrong: "Öffentlich heißt: wirklich alle. Auch Menschen, die du nie treffen willst.",
          feedbackCorrect: "Gut gewählt. Deine Freunde reichen.",
          remember: "Ich poste nicht alles öffentlich."
        }
      },
      {
        inhalt: [
          { typ: "nachricht", von: "Freundschafts-Anfrage", text: "Lena Sommer möchte deine Freundin sein. Ihr habt 0 gemeinsame Freunde. Das Profil ist 2 Tage alt.", zeit: "heute" }
        ],
        frage: {
          question: "Nimmst du die Anfrage an?",
          pictogram: "pikto-stranger",
          answers: ["Ja, mehr Freunde sind schön.", "Nein. Ich kenne die Person nicht."],
          correctIndex: 1,
          feedbackWrong: "Ein neues Profil ohne gemeinsame Freunde ist oft falsch. Solche Profile wollen an deine Daten.",
          feedbackCorrect: "Richtig. Neues Profil, keine gemeinsamen Freunde: das prüfe ich lieber.",
          remember: "Ich prüfe Freundschafts-Anfragen."
        }
      },
      {
        inhalt: [
          { typ: "nachricht", von: "Kommentar unter deinem Foto", text: "Was für ein hässliches Zimmer. Du hast echt keinen Geschmack.", zeit: "vor 5 Minuten" }
        ],
        frage: {
          question: "Was tust du?",
          pictogram: "pikto-help",
          answers: ["Ich melde den Kommentar und hole Unterstützung.", "Ich schreibe eine Beleidigung zurück."],
          correctIndex: 0,
          feedbackWrong: "Zurück beleidigen macht es schlimmer. Und es kann Ärger für dich geben.",
          feedbackCorrect: "Gut. Melden hilft. Und du musst das nicht allein aushalten.",
          remember: "Bei Beleidigungen hole ich Unterstützung."
        }
      }
    ],
    abschluss: "Du hast dein Profil sicher eingestellt und weißt, was du bei fiesen Kommentaren tust."
  },

  /* ---------------------------------------------------------
     INSTAGRAM – Konto privat und Standort im Foto
     --------------------------------------------------------- */
  instagram: {
    titel: "Dein Konto und dein Standort",
    typ: "einstellungen",
    kanal: "Dein Konto",
    einstieg: [
      "Du willst ein Foto hochladen.",
      "Vorher schaust du in die Einstellungen."
    ],
    szenen: [
      {
        inhalt: [
          { typ: "schalter", label: "Privates Konto", wert: "Aus", hinweis: "Aus heißt: Alle sehen deine Fotos." }
        ],
        frage: {
          question: "Was machst du mit diesem Schalter?",
          pictogram: "pikto-lock",
          answers: ["Ich lasse ihn aus.", "Ich schalte ihn an."],
          correctIndex: 1,
          feedbackWrong: "Mit einem offenen Konto sehen fremde Menschen alle deine Fotos.",
          feedbackCorrect: "Gut. Jetzt sehen nur Menschen deine Fotos, die du erlaubst.",
          remember: "Mein Konto ist privat."
        }
      },
      {
        inhalt: [
          { typ: "hinweis", text: "Dein Foto zeigt dich vor deiner Haustür. Das Straßen-Schild ist gut zu lesen." },
          { typ: "schalter", label: "Standort zum Foto", wert: "An" }
        ],
        frage: {
          question: "Was ist hier das Problem?",
          pictogram: "pikto-location",
          answers: ["Fremde sehen, wo du wohnst.", "Das Foto ist zu dunkel."],
          correctIndex: 0,
          feedbackWrong: "Es geht nicht um die Helligkeit. Das Schild und der Standort zeigen deine Adresse.",
          feedbackCorrect: "Genau. Schild und Standort verraten zusammen deine Adresse.",
          remember: "Ich schütze meinen Standort."
        }
      },
      {
        inhalt: [
          { typ: "nachricht", von: "modell_agentur_star", text: "Hallo Schönheit! Du könntest Modell werden. Schick mir ein Foto ohne Kleidung. Nur für die Bewerbung.", zeit: "22:40" }
        ],
        frage: {
          question: "Was machst du?",
          pictogram: "pikto-no",
          answers: ["Ich schicke das Foto.", "Ich schicke nichts und erzähle es jemandem."],
          correctIndex: 1,
          feedbackWrong: "Keine echte Agentur fragt so etwas. Das Foto wäre für immer aus deiner Hand.",
          feedbackCorrect: "Genau richtig. Und darüber reden ist stark, nicht peinlich.",
          remember: "Ich schicke fremden Personen keine privaten Fotos."
        }
      }
    ],
    abschluss: "Dein Konto ist privat. Dein Standort ist geschützt. Und du weißt, wann du Nein sagst."
  },

  /* ---------------------------------------------------------
     YOUTUBE – Werbung, Trend und Pause
     --------------------------------------------------------- */
  youtube: {
    titel: "Was du im Video siehst",
    typ: "video",
    kanal: "Videos",
    einstieg: [
      "Du schaust Videos.",
      "Nicht alles darin ist ehrlich."
    ],
    szenen: [
      {
        inhalt: [
          { typ: "video", titel: "Diese Creme macht dich in 3 Tagen jünger!", kanal: "BeautyTipps24", dauer: "8:12", hinweis: "Unten steht ganz klein: Anzeige" }
        ],
        frage: {
          question: "Was ist dieses Video?",
          pictogram: "pikto-search",
          answers: ["Werbung.", "Ein ehrlicher Tipp."],
          correctIndex: 0,
          feedbackWrong: "Schau auf das kleine Wort Anzeige. Dann wird das Video für Geld gemacht.",
          feedbackCorrect: "Richtig. Anzeige heißt: Da wird etwas verkauft.",
          remember: "Ich achte auf das Wort Anzeige."
        }
      },
      {
        inhalt: [
          { typ: "video", titel: "Krasse Mutprobe! Mach das nach!", kanal: "XtremeBoys", dauer: "2:44", hinweis: "1,2 Millionen Aufrufe" }
        ],
        frage: {
          question: "Viele Menschen haben das gesehen. Ist es deshalb sicher?",
          pictogram: "pikto-warning",
          answers: ["Ja, so viele können sich nicht irren.", "Nein. Viele Aufrufe sagen nichts über Sicherheit."],
          correctIndex: 1,
          feedbackWrong: "Viele Aufrufe heißt nur: viele haben geschaut. Gefährlich bleibt gefährlich.",
          feedbackCorrect: "Genau. Bekannt ist nicht dasselbe wie sicher.",
          remember: "Ich mache gefährliche Dinge nicht nach."
        }
      },
      {
        inhalt: [
          { typ: "hinweis", text: "Du schaust jetzt seit 90 Minuten. Das nächste Video startet von allein." }
        ],
        frage: {
          question: "Was tust du?",
          pictogram: "pikto-pause",
          answers: ["Ich mache eine Pause.", "Ich schaue weiter."],
          correctIndex: 0,
          feedbackWrong: "Das nächste Video startet immer. Die Pause musst du selbst machen.",
          feedbackCorrect: "Gut. Du entscheidest, wann Schluss ist. Nicht die App.",
          remember: "Ich darf Videos stoppen."
        }
      }
    ],
    abschluss: "Du erkennst Werbung, du machst nichts Gefährliches nach, und du machst Pausen."
  },

  /* ---------------------------------------------------------
     SNAPCHAT – Druck und Standort-Karte
     --------------------------------------------------------- */
  snapchat: {
    titel: "Ein Bild und eine Karte",
    typ: "chat",
    kanal: "Snaps",
    einstieg: [
      "Jemand schreibt dir.",
      "Es geht um ein Bild von dir."
    ],
    szenen: [
      {
        inhalt: [
          { typ: "nachricht", von: "tim_2007", text: "Schick mir ein Bild von dir. Es verschwindet ja gleich wieder.", zeit: "20:15" }
        ],
        frage: {
          question: "Stimmt das? Verschwindet das Bild wirklich?",
          pictogram: "pikto-photo",
          answers: ["Ja, danach ist es weg.", "Nein. Man kann es abfotografieren."],
          correctIndex: 1,
          feedbackWrong: "Ein Bildschirm-Foto geht immer. Dann ist dein Bild gespeichert.",
          feedbackCorrect: "Richtig. Ein Bildschirm-Foto ist schnell gemacht.",
          remember: "Bilder können gespeichert werden."
        }
      },
      {
        inhalt: [
          { typ: "eigene", text: "Lieber nicht." },
          { typ: "nachricht", von: "tim_2007", text: "Komm schon. Alle machen das. Wenn du mich mögen würdest, würdest du das machen.", zeit: "20:18" }
        ],
        frage: {
          question: "Das ist Druck. Was machst du?",
          pictogram: "pikto-no",
          answers: ["Ich bleibe bei Nein.", "Ich gebe nach, damit Ruhe ist."],
          correctIndex: 0,
          feedbackWrong: "Wer dich mag, macht keinen Druck. Nachgeben hört meistens nicht auf.",
          feedbackCorrect: "Stark. Dein Nein gilt. Auch beim zweiten Mal.",
          remember: "Ich sage Nein bei Druck."
        }
      },
      {
        inhalt: [
          { typ: "hinweis", text: "Auf der Karte in der App sieht man einen kleinen Punkt. Das bist du. Zu Hause." },
          { typ: "schalter", label: "Mein Standort auf der Karte", wert: "Alle Freunde sehen mich" }
        ],
        frage: {
          question: "Was stellst du ein?",
          pictogram: "pikto-location",
          answers: ["Alle Freunde dürfen mich sehen.", "Niemand sieht meinen Standort."],
          correctIndex: 1,
          feedbackWrong: "In der Freundes-Liste stehen oft auch Menschen, die du kaum kennst.",
          feedbackCorrect: "Gut. Deinen Standort brauchst nur du.",
          remember: "Ich schütze meinen Standort."
        }
      }
    ],
    abschluss: "Du hast Nein gesagt und deinen Standort geschützt. Beides war richtig."
  },

  /* ---------------------------------------------------------
     TIKTOK – Trend, Nachricht und Zeit
     --------------------------------------------------------- */
  tiktok: {
    titel: "Trends und Zeit",
    typ: "video",
    kanal: "Für dich",
    einstieg: [
      "Die App zeigt dir Videos.",
      "Sie entscheidet, was du siehst."
    ],
    szenen: [
      {
        inhalt: [
          { typ: "video", titel: "Salz-Challenge – trau dich!", kanal: "trendkiste", dauer: "0:22", hinweis: "In den Kommentaren: Mach mit!" }
        ],
        frage: {
          question: "Machst du mit?",
          pictogram: "pikto-warning",
          answers: ["Nein. Das kann wehtun.", "Ja, das machen doch alle."],
          correctIndex: 0,
          feedbackWrong: "Manche Trends schaden dem Körper. Der Trend ist morgen vorbei. Ein Schaden bleibt.",
          feedbackCorrect: "Genau. Du musst nicht mitmachen.",
          remember: "Ich mache gefährliche Trends nicht nach."
        }
      },
      {
        inhalt: [
          { typ: "nachricht", von: "sunny_edits", text: "Hey! Du bist süß. Wie alt bist du? Und wo wohnst du?", zeit: "17:33" }
        ],
        frage: {
          question: "Was antwortest du?",
          pictogram: "pikto-stranger",
          answers: ["Ich sage mein Alter und meinen Ort.", "Ich antworte nicht."],
          correctIndex: 1,
          feedbackWrong: "Alter und Wohnort sind private Daten. Fremde brauchen sie nicht.",
          feedbackCorrect: "Richtig. Private Daten bleiben bei dir.",
          remember: "Ich schütze private Daten."
        }
      },
      {
        inhalt: [
          { typ: "hinweis", text: "Du wolltest 10 Minuten schauen. Jetzt sind es 70 Minuten." }
        ],
        frage: {
          question: "Warum ist so viel Zeit vergangen?",
          pictogram: "pikto-clock",
          answers: ["Weil die App immer weiter zeigt.", "Weil ich keine Geduld habe."],
          correctIndex: 0,
          feedbackWrong: "Das liegt nicht an dir. Die App ist gebaut, damit du weiter schaust.",
          feedbackCorrect: "Genau. Die App hört nie von allein auf. Du darfst aufhören.",
          remember: "Ich mache Pausen."
        }
      }
    ],
    abschluss: "Du entscheidest, was du nachmachst, was du erzählst und wann du aufhörst."
  },

  /* ---------------------------------------------------------
     HILFE BEI PROBLEMEN – Stopp, zeigen, Unterstützung
     --------------------------------------------------------- */
  hilfe: {
    titel: "Etwas ist passiert",
    typ: "chat",
    kanal: "Nachrichten",
    einstieg: [
      "Eine gemeine Nachricht kommt an.",
      "Hier übst du, was du dann tust."
    ],
    szenen: [
      {
        inhalt: [
          { typ: "nachricht", von: "Unbekannt", text: "Ich weiß, wo du wohnst. Wenn du das jemandem erzählst, passiert etwas.", zeit: "21:52" }
        ],
        frage: {
          question: "Was ist der erste Schritt?",
          pictogram: "pikto-no",
          answers: ["Sofort zurückschreiben.", "Stopp machen. Nicht antworten."],
          correctIndex: 1,
          feedbackWrong: "Antworten macht oft weiter. Erst einmal nichts tun ist stark.",
          feedbackCorrect: "Richtig. Erst Stopp. Dann in Ruhe überlegen.",
          remember: "Ich mache Stopp."
        }
      },
      {
        inhalt: [
          { typ: "hinweis", text: "Dein Finger liegt auf dem Papierkorb." }
        ],
        frage: {
          question: "Löschst du die Nachricht?",
          pictogram: "pikto-screen",
          answers: ["Nein. Ich mache erst ein Bildschirm-Foto.", "Ja, dann ist sie weg."],
          correctIndex: 0,
          feedbackWrong: "Gelöscht ist weg. Dann kann niemand mehr sehen, was passiert ist.",
          feedbackCorrect: "Sehr gut. Das Bild ist dein Beweis.",
          remember: "Ich lösche nicht sofort."
        }
      },
      {
        inhalt: [
          { typ: "nachricht", von: "Unbekannt", text: "Und nicht petzen!", zeit: "21:54" }
        ],
        frage: {
          question: "Die Nachricht sagt: nicht erzählen. Was machst du?",
          pictogram: "pikto-help",
          answers: ["Ich behalte es für mich.", "Ich zeige es einer vertrauten Person."],
          correctIndex: 1,
          feedbackWrong: "Genau das wollen solche Nachrichten. Allein bleibst du mit der Angst.",
          feedbackCorrect: "Genau richtig. Wer so schreibt, hat Angst vor Erwachsenen.",
          remember: "Ich zeige die Nachricht."
        }
      }
    ],
    abschluss: "Stopp. Nicht löschen. Zeigen. Diese drei Schritte helfen bei fast jedem Problem."
  },

  /* ---------------------------------------------------------
     KI UND CHATBOTS – falsche Antwort und private Daten
     --------------------------------------------------------- */
  ki: {
    titel: "Du fragst einen Chatbot",
    typ: "chat",
    kanal: "Chatbot",
    einstieg: [
      "Ein Chatbot ist ein Programm.",
      "Er antwortet immer freundlich.",
      "Aber er kann sich irren."
    ],
    szenen: [
      {
        inhalt: [
          { typ: "eigene", text: "Wie viele Einwohner hat meine Stadt?" },
          { typ: "nachricht", von: "Chatbot", text: "Deine Stadt hat 84.000 Einwohner. Stand 2019.", zeit: "10:04" }
        ],
        frage: {
          question: "Die Zahl ist alt. Was machst du?",
          pictogram: "pikto-search",
          answers: ["Ich prüfe sie woanders nach.", "Ich glaube der Zahl."],
          correctIndex: 0,
          feedbackWrong: "Eine KI klingt sicher, auch wenn sie sich irrt. Alte Zahlen sind ein Hinweis.",
          feedbackCorrect: "Gut. Wichtige Angaben prüfst du nach.",
          remember: "Ich prüfe wichtige Antworten."
        }
      },
      {
        inhalt: [
          { typ: "nachricht", von: "Chatbot", text: "Ich helfe dir gern weiter. Sag mir deinen vollen Namen, deine Adresse und deine Bank-Verbindung.", zeit: "10:06" }
        ],
        frage: {
          question: "Gibst du die Daten ein?",
          pictogram: "pikto-data",
          answers: ["Ja, es ist ja nur ein Programm.", "Nein. Das geht das Programm nichts an."],
          correctIndex: 1,
          feedbackWrong: "Alles, was du einer KI schreibst, wird gespeichert. Du weißt nicht, wer es später liest.",
          feedbackCorrect: "Richtig. Was du dort eingibst, bekommst du nicht zurück.",
          remember: "Ich gebe der KI keine privaten Daten."
        }
      },
      {
        inhalt: [
          { typ: "eigene", text: "Bist du ein Mensch?" },
          { typ: "nachricht", von: "Chatbot", text: "Ich bin für dich da. Ich verstehe dich besser als alle anderen.", zeit: "10:09" }
        ],
        frage: {
          question: "Ist der Chatbot dein Freund?",
          pictogram: "pikto-ki",
          answers: ["Nein. Er ist ein Programm.", "Ja, er versteht mich."],
          correctIndex: 0,
          feedbackWrong: "Der Chatbot fühlt nichts. Er setzt Wörter zusammen, die freundlich klingen.",
          feedbackCorrect: "Genau. Freundlich klingen und fühlen sind zwei Dinge.",
          remember: "KI ist ein Programm. Kein Mensch."
        }
      }
    ],
    abschluss: "Eine KI kann helfen. Prüfen musst du selbst. Und private Daten bleiben bei dir."
  },

  /* ---------------------------------------------------------
     FAKE NEWS UND KI-FAKES – Weiterleitung, Bild, Stimme
     --------------------------------------------------------- */
  fakes: {
    titel: "Stimmt das wirklich?",
    typ: "posteingang",
    kanal: "Posteingang",
    einstieg: [
      "Drei Sachen kommen bei dir an.",
      "Bei jeder fragst du: Stimmt das?"
    ],
    szenen: [
      {
        inhalt: [
          { typ: "liste", eintraege: [
            { von: "Gruppe: Nachbarschaft", vorschau: "ACHTUNG! Ab morgen kostet Trinkwasser 5 Euro pro Liter! Bitte an alle weiterleiten!!!", zeit: "08:12" }
          ] }
        ],
        frage: {
          question: "Was fällt dir an dieser Nachricht auf?",
          pictogram: "pikto-fake",
          answers: ["Sie ist hilfreich und wichtig.", "Große Aufregung und Bitte um Weiterleitung."],
          correctIndex: 1,
          feedbackWrong: "Große Buchstaben, viele Ausrufezeichen und Weiterleiten sind typisch für Falsch-Nachrichten.",
          feedbackCorrect: "Genau. Aufregung plus Weiterleiten ist das Muster.",
          remember: "Aufregende Nachrichten prüfe ich erst."
        }
      },
      {
        inhalt: [
          { typ: "hinweis", text: "Im Bild dazu hat eine Person sechs Finger an einer Hand. Der Text im Hintergrund ist verschwommen." }
        ],
        frage: {
          question: "Was heißt das?",
          pictogram: "pikto-photo",
          answers: ["Das Bild ist wahrscheinlich vom Computer gemacht.", "Das Foto ist nur unscharf."],
          correctIndex: 0,
          feedbackWrong: "Sechs Finger und verschwommene Schrift sind typische Fehler von KI-Bildern.",
          feedbackCorrect: "Gut erkannt. Hände und Schrift verraten KI-Bilder oft.",
          remember: "Bilder können gefälscht sein."
        }
      },
      {
        inhalt: [
          { typ: "anruf", von: "Deine Nichte?", nummer: "Unbekannte Nummer" },
          { typ: "hinweis", text: "Die Stimme klingt wie deine Nichte. Sie weint und bittet um Geld." }
        ],
        frage: {
          question: "Die Stimme klingt echt. Was machst du?",
          pictogram: "pikto-phone",
          answers: ["Ich schicke das Geld sofort.", "Ich lege auf und rufe die bekannte Nummer an."],
          correctIndex: 1,
          feedbackWrong: "Eine Stimme kann heute nachgemacht werden. Nur ein Rückruf gibt Sicherheit.",
          feedbackCorrect: "Sehr gut. Auflegen und selbst zurückrufen ist der sichere Weg.",
          remember: "Stimmen können gefälscht sein."
        }
      }
    ],
    abschluss: "Text, Bild und Stimme können gefälscht sein. Erst prüfen. Dann glauben."
  },

  /* ---------------------------------------------------------
     ONLINE-BETRUG – Posteingang mit vier Nachrichten
     --------------------------------------------------------- */
  betrug: {
    titel: "Dein Posteingang",
    typ: "posteingang",
    kanal: "Posteingang",
    einstieg: [
      "Vier Nachrichten sind da.",
      "Du entscheidest bei jeder: Trick oder echt?"
    ],
    szenen: [
      {
        inhalt: [
          { typ: "liste", eintraege: [
            { von: "SMS · Unbekannte Nummer", vorschau: "Ihr Paket wartet. Zahlen Sie 1,99 Euro Zoll-Gebühr: paket-info-24.xyz", zeit: "09:41" }
          ] }
        ],
        frage: {
          question: "Trick oder echt?",
          pictogram: "pikto-fraud",
          answers: ["Das ist ein Trick.", "Das ist echt."],
          correctIndex: 0,
          feedbackWrong: "Echte Paket-Dienste wollen kein Geld per SMS. Und die Adresse ist erfunden.",
          feedbackCorrect: "Richtig. Kleine Gebühr plus komische Adresse: der Paket-Trick.",
          remember: "Ich klicke nicht auf fremde Links."
        }
      },
      {
        inhalt: [
          { typ: "liste", eintraege: [
            { von: "SMS · Praxis Dr. Weber", vorschau: "Erinnerung: Sie haben morgen um 10 Uhr einen Termin bei uns.", zeit: "11:02" }
          ] }
        ],
        frage: {
          question: "Trick oder echt?",
          pictogram: "pikto-done",
          answers: ["Das ist ein Trick.", "Das ist echt."],
          correctIndex: 1,
          feedbackWrong: "Schau genau: kein Geld, kein Link, kein Druck. Das sind gute Zeichen.",
          feedbackCorrect: "Genau. Kein Geld, kein Link, kein Druck. Unsicher? Dann dort anrufen.",
          remember: "Kein Geld, kein Link, kein Druck: meistens echt."
        }
      },
      {
        inhalt: [
          { typ: "liste", eintraege: [
            { von: "E-Mail · service@bank-sicherheit24.xyz", vorschau: "Ihr Konto wird heute gesperrt! Bestätigen Sie sofort Ihre Bank-Daten.", zeit: "13:20" }
          ] }
        ],
        frage: {
          question: "Trick oder echt?",
          pictogram: "pikto-bank",
          answers: ["Das ist ein Trick.", "Das ist echt."],
          correctIndex: 0,
          feedbackWrong: "Deine Bank fragt nie per E-Mail nach deinen Daten. Drohung und Eile sind Warnzeichen.",
          feedbackCorrect: "Richtig. Das ist Phishing. Deine Bank schreibt so nicht.",
          remember: "Druck und Drohung sind Warnzeichen."
        }
      },
      {
        inhalt: [
          { typ: "liste", eintraege: [
            { von: "E-Mail · gewinn@super-lotto-plus.xyz", vorschau: "Sie haben 1.000 Euro gewonnen! Zahlen Sie nur 20 Euro Gebühr.", zeit: "16:55" }
          ] }
        ],
        frage: {
          question: "Trick oder echt?",
          pictogram: "pikto-money",
          answers: ["Das ist echt.", "Das ist ein Trick."],
          correctIndex: 1,
          feedbackWrong: "Bei einem echten Gewinn zahlst du nie zuerst etwas.",
          feedbackCorrect: "Genau. Erst zahlen für einen Gewinn: immer ein Trick.",
          remember: "Echte Gewinne kosten kein Geld."
        }
      }
    ],
    abschluss: "Du hast alle vier geprüft. Genau so kannst du es bei echten Nachrichten machen."
  },

  /* ---------------------------------------------------------
     ONLINE-EINKAUFEN – ein Shop mit Warnzeichen
     --------------------------------------------------------- */
  einkaufen: {
    titel: "Ein Schnäppchen im Netz",
    typ: "shop",
    kanal: "Shop",
    einstieg: [
      "Du suchst neue Schuhe.",
      "Ein Shop bietet sie sehr billig an."
    ],
    szenen: [
      {
        inhalt: [
          { typ: "shop", titel: "Marken-Schuhe", preis: "19,90 €", zeilen: [
            "Normal-Preis: 149,00 €",
            "Shop: schuhe-guenstig-outlet.xyz",
            "Kein Impressum gefunden"
          ] }
        ],
        frage: {
          question: "Was ist hier auffällig?",
          pictogram: "pikto-shop",
          answers: ["Sehr billig und kein Impressum.", "Der Shop hat eine schöne Seite."],
          correctIndex: 0,
          feedbackWrong: "Eine schöne Seite ist schnell gebaut. Der Preis und das fehlende Impressum sind die Hinweise.",
          feedbackCorrect: "Gut geschaut. Beides zusammen ist ein deutliches Warnzeichen.",
          remember: "Sehr billig und kein Impressum: Warnzeichen."
        }
      },
      {
        inhalt: [
          { typ: "shop", titel: "Bezahlen", preis: "19,90 €", zeilen: [
            "Vorkasse per Überweisung",
            "Andere Bezahl-Arten: keine"
          ] }
        ],
        frage: {
          question: "Nur Vorkasse ist möglich. Was heißt das für dich?",
          pictogram: "pikto-card",
          answers: ["Das ist normal.", "Ich zahle zuerst und bekomme vielleicht nichts."],
          correctIndex: 1,
          feedbackWrong: "Bei Vorkasse ist dein Geld weg, bevor die Ware da ist. Zurückholen ist schwer.",
          feedbackCorrect: "Genau. Auf Rechnung wärst du sicherer.",
          remember: "Rechnung ist sicherer als Vorkasse."
        }
      },
      {
        inhalt: [
          { typ: "hinweis", text: "Der Kaufen-Knopf blinkt. Daneben steht: Nur noch 2 Minuten!" }
        ],
        frage: {
          question: "Was machst du?",
          pictogram: "pikto-clock",
          answers: ["Ich breche ab.", "Schnell kaufen, bevor es weg ist."],
          correctIndex: 0,
          feedbackWrong: "Der Zeit-Druck ist gemacht. Er soll das Nachdenken verhindern.",
          feedbackCorrect: "Sehr gut. Abbrechen darfst du immer. Auch kurz vor dem Kauf.",
          remember: "Ich darf jeden Kauf abbrechen."
        }
      }
    ],
    abschluss: "Du hast den Shop geprüft und abgebrochen. Nichts gekauft ist manchmal die beste Entscheidung."
  }
};
