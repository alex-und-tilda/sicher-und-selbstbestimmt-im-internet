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
    /* Vor-Nutzertest (29.09.2026): vorerst AUSGEBLENDET, nicht gelöscht.
       Altbestand aus der Zeit vor dem Musterthema (Paket-6-Bericht, C1):
       nur Leichte Sprache, je 2 Antworten, Ablehnen ist immer richtig,
       absoluter Merksatz – passt nicht zur A/B/C-Lernlogik. Für eine spätere
       fachliche Überarbeitung vorgemerkt; nicht einfach übersetzen.
       getScenario() in app.js liefert für ausgeblendete Szenarien nichts. */
    ausgeblendet: true,
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
          { typ: "hinweis", text: "Eine Seite fragt nach mehr." },
          { typ: "nachricht", von: "gewinnspiel-sommer.xyz", text: "Mach mit beim Gewinnspiel! Wir brauchen nur: deinen Namen, deine Adresse und deine Bank-Daten.", zeit: "jetzt" }
        ],
        frage: {
          question: "Was machst du?",
          pictogram: "pikto-no",
          answers: ["Ich gebe die Bank-Daten ein.", "Ich mache nicht mit."],
          correctIndex: 1,
          feedbackWrong: "Ein Gewinnspiel braucht nie deine Bank-Daten. Hier holt sich jemand deine Daten.",
          feedbackCorrect: "Für ein Gewinnspiel braucht niemand deine Bank-Daten.",
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
          feedbackWrong: "Noch weißt du nicht, wer das ist. Ruf zuerst die alte Nummer an. Dann kannst du nachfragen.",
          feedbackCorrect: "Genau. Du rufst die alte Nummer an. So kannst du nachfragen.",
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
          answers: ["An der Uhrzeit.", "An dem Stress und an dem Geld."],
          correctIndex: 1,
          feedbackWrong: "Die Uhrzeit sagt nichts. Der Trick steckt im Stress: schnell, nicht anrufen, Geld.",
          feedbackCorrect: "Genau. Stress und eine Geld-Bitte sind das Warnzeichen.",
          remember: "Stress und Geld sind ein Warnzeichen."
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
          feedbackCorrect: "Ein Code ist wie ein Schlüssel zu deiner Wohnung.",
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
          feedbackCorrect: "Neues Profil, keine gemeinsamen Freunde: das prüfe ich lieber.",
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
          answers: ["Fremde sehen: Hier wohnst du.", "Das Foto ist zu dunkel."],
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
          feedbackWrong: "Keine echte Agentur fragt so etwas. Du schickst ein Foto. Dann kannst du es nicht mehr zurückholen.",
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
          feedbackCorrect: "Anzeige heißt: Da wird etwas verkauft.",
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
     SNAPCHAT – Stress und Standort-Karte
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
          feedbackCorrect: "Ein Bildschirm-Foto ist schnell gemacht.",
          remember: "Bilder können gespeichert werden."
        }
      },
      {
        inhalt: [
          { typ: "eigene", text: "Lieber nicht." },
          { typ: "nachricht", von: "tim_2007", text: "Komm schon. Alle machen das. Wenn du mich mögen würdest, würdest du das machen.", zeit: "20:18" }
        ],
        frage: {
          question: "Das ist Stress. Was machst du?",
          pictogram: "pikto-no",
          answers: ["Ich bleibe bei Nein.", "Ich gebe nach. Dann ist Ruhe."],
          correctIndex: 0,
          feedbackWrong: "Wer dich mag, macht dir keinen Stress. Nachgeben hört meistens nicht auf.",
          feedbackCorrect: "Stark. Dein Nein gilt. Auch beim zweiten Mal.",
          remember: "Ich sage Nein bei Stress."
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
          feedbackCorrect: "Gut. Jetzt sieht niemand deinen Ort. Du entscheidest selbst: Wer darf ihn sehen?",
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
          feedbackCorrect: "Private Daten bleiben bei dir.",
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
    /* Paket H1 (30.09.2026): vorerst AUSGEBLENDET, nicht gelöscht (wie das
       Datenschutz-Handy im Vor-Nutzertest). Altbestand vor dem Umbau: der alte
       Ablauf Stopp – zeigen – Hilfe holen, nur Leichte Sprache. Das Thema ist
       jetzt auf den Hilfe-Check aufgebaut; eine eigene „Neue Situation“ folgt.
       getScenario() in app.js liefert für ausgeblendete Szenarien nichts. */
    ausgeblendet: true,
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
          feedbackCorrect: "Erst Stopp. Dann in Ruhe überlegen.",
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
          feedbackCorrect: "Genau. Mit dem Bild kannst du es später zeigen.",
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
          feedbackCorrect: "Genau richtig. Du darfst es trotzdem erzählen. Hilfe holen ist immer erlaubt.",
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
          feedbackCorrect: "Was du dort eingibst, bekommst du nicht zurück.",
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
          feedbackCorrect: "Genau. Du legst auf und rufst selbst zurück. So kannst du nachfragen.",
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
          feedbackWrong: "Das ist ein Trick. Die Adresse ist erfunden. Prüfe dein Paket lieber in der App vom Paket-Dienst.",
          feedbackCorrect: "Kleine Gebühr plus komische Adresse: der Paket-Trick.",
          remember: "Ich tippe nicht auf fremde Links."
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
          feedbackWrong: "Schau genau: kein Geld, kein Link, kein Stress. Das sind gute Zeichen.",
          feedbackCorrect: "Genau. Kein Geld, kein Link, kein Stress. Unsicher? Dann dort anrufen.",
          remember: "Kein Geld, kein Link, kein Stress: meistens echt."
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
          feedbackCorrect: "Das ist Phishing. Deine Bank schreibt so nicht.",
          remember: "Stress und Drohung sind Warnzeichen."
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
          feedbackCorrect: "Genau. Bei Rechnung bekommst du zuerst die Ware. Dann zahlst du.",
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
          answers: ["Ich breche ab.", "Schnell kaufen. Sonst ist es weg."],
          correctIndex: 0,
          feedbackWrong: "Die Eile ist ein Trick. Du sollst schnell kaufen und nicht nachdenken.",
          feedbackCorrect: "Genau. Abbrechen darfst du immer. Auch kurz vor dem Kauf.",
          remember: "Ich darf jeden Kauf abbrechen."
        }
      }
    ],
    abschluss: "Du hast den Shop geprüft und abgebrochen. Nichts gekauft ist manchmal die beste Entscheidung."
  }
};

/* =============================================================
   ÜBUNGS-HANDY: RUNDEN 2 UND 3 — Versuch, nur Thema "Betrug"
   -------------------------------------------------------------
   Stand 04.09.2026. Abgetrennter Block, damit der Versuch in
   einem Stück wieder entfernt werden kann. Die vier Szenen von
   Runde 1 oben bleiben unverändert; hier bekommen sie nur ihr
   Fallen-Bild dazu.

   NEUE FELDER (alle freiwillig — Szenarien ohne sie laufen
   unverändert weiter):
     stufe   1, 2 oder 3. Fehlt das Feld, gilt 1.
     falle   { inhalt:[...], text, textFalsch }
             Wird nach der Antwort gezeigt: was die Nachricht will.
             inhalt nutzt dieselben Bausteine wie der Bildschirm,
             dazu neu: { typ:"webseite", adresse, titel, felder[], knopf }
     schwer  true -> Rückmeldung sagt "Die war schwer."

   DIDAKTIK: Runde 1 und 2 fragen "Trick oder echt?" (Erkennen).
   Runde 3 fragt "Was machst du?" (Handeln). Das ist Absicht:
   auf Runde 3 sind die Nachrichten nicht mehr sicher zu erkennen.
   Sicherheit kommt dort aus der Handlung, nicht aus dem Blick.
   (§3 CLAUDE.md, UDL Handlung und Ausdruck.)

   Alles erfunden. Keine echten Marken, keine echten Nummern,
   keine echten Adressen.
   ============================================================= */

(function erweitereBetrug() {
  if (typeof SCENARIOS === "undefined" || !SCENARIOS.betrug) return;
  const b = SCENARIOS.betrug;

  /* ---- Texte je Runde ---- */
  b.stufen = {
    1: { einstieg: ["Vier Nachrichten sind da.", "Du entscheidest bei jeder: Trick oder echt?"] },
    2: { einstieg: ["Runde 2. Die Tricks sind besser gemacht.", "Keine Fehler mehr im Text. Schau genau hin."] },
    3: { einstieg: ["Runde 3. Jetzt kannst du es nicht mehr sehen.", "Auch geübte Menschen nicht.", "Deshalb fragen wir jetzt: Was machst du?"] }
  };

  /* ---- Runde 1: Fallen-Bilder ergänzen ---- */
  const fallen1 = {
    0: {
      inhalt: [{ typ: "webseite", adresse: "paket-info-24.xyz", titel: "Paket-Service",
                 felder: ["Ihre Karten-Nummer", "Gültig bis"], knopf: "Jetzt 1,99 € zahlen" }],
      text: "Schau: Das passiert, wenn du auf den Link tippst. Die Seite will deine Karten-Nummer. Das Paket gibt es nicht.",
      textFalsch: "So sieht die Falle von innen aus. Die Seite will deine Karten-Nummer. Jetzt kennst du sie."
    },
    2: {
      inhalt: [{ typ: "webseite", adresse: "bank-sicherheit24.xyz", titel: "Konto bestätigen",
                 felder: ["Kontonummer", "PIN"], knopf: "Konto freischalten" }],
      text: "Schau: Die Seite will deine Kontonummer und deine PIN. Deine Bank fragt so etwas nie.",
      textFalsch: "So sieht die Falle aus. Sie will deine Kontonummer und deine PIN. Deine Bank fragt so etwas nie."
    },
    3: {
      inhalt: [{ typ: "webseite", adresse: "super-lotto-plus.xyz", titel: "Gewinn abholen",
                 felder: ["Ihr Name", "Konto für die Gebühr"], knopf: "20 € zahlen und Gewinn holen" }],
      text: "Schau: Du sollst erst 20 Euro zahlen. Den Gewinn gibt es nicht.",
      textFalsch: "So sieht die Falle aus. Du sollst erst zahlen. Den Gewinn gibt es nicht."
    }
  };
  Object.keys(fallen1).forEach(i => {
    const szene = b.szenen[Number(i)];
    if (szene && !szene.falle) szene.falle = fallen1[i];
  });

  /* ---- Runde 2: gut gemachte Tricks ---- */
  b.szenen.push(
    {
      stufe: 2, schwer: true,
      inhalt: [{ typ: "liste", eintraege: [
        { von: "SMS · DHL Paket-Info", vorschau: "Ihre Sendung 4471 kommt heute zwischen 12 und 14 Uhr. Adresse ändern: dhl-liefertermin.de/4471", zeit: "08:14" }
      ] }],
      frage: {
        question: "Trick oder echt?",
        pictogram: "pikto-fraud",
        answers: ["Das ist ein Trick.", "Das ist echt."],
        correctIndex: 0,
        feedbackCorrect: "Die Adresse ist fast richtig. Die echte Seite heißt dhl.de. Diese heißt dhl-liefertermin.de.",
        feedbackWrong: "Die Adresse ist fast richtig. Aber nur fast. Die echte Seite heißt dhl.de. Diese heißt anders.",
        remember: "Ich tippe nicht auf Links in Nachrichten. Ich öffne die App selbst."
      },
      falle: {
        inhalt: [{ typ: "webseite", adresse: "dhl-liefertermin.de/4471", titel: "Bitte anmelden",
                   felder: ["Ihr Name", "Ihr Passwort"], knopf: "Weiter" }],
        text: "Schau: Die Seite sieht aus wie die echte Seite. Sie will deinen Namen und dein Passwort.",
        textFalsch: "So sieht die Falle aus. Die Seite sieht echt aus. Sie will deinen Namen und dein Passwort."
      }
    },
    {
      stufe: 2,
      inhalt: [{ typ: "liste", eintraege: [
        { von: "E-Mail · bestellung@amazon-service.net", vorschau: "Ihre Bestellung über 89,90 Euro wurde storniert. Bei Fragen antworten Sie auf diese Mail.", zeit: "10:30" }
      ] }],
      frage: {
        question: "Trick oder echt?",
        pictogram: "pikto-mail",
        answers: ["Das ist ein Trick.", "Das ist echt."],
        correctIndex: 0,
        feedbackCorrect: "Du hast gar nichts bestellt. Das ist das wichtigste Zeichen.",
        feedbackWrong: "Frag dich immer zuerst: Habe ich das wirklich bestellt? Wenn nein, ist es ein Trick.",
        remember: "Ich frage mich: Habe ich das wirklich bestellt?"
      },
      falle: {
        inhalt: [{ typ: "hinweis", text: "Du antwortest. Kurz danach ruft jemand an. Er sagt: Ich hole Ihr Geld zurück. Bitte öffnen Sie Ihr Online-Banking." }],
        text: "Schau: Die Mail will nur, dass du antwortest. Danach kommt der Anruf. Das ist die Falle.",
        textFalsch: "So geht die Falle weiter. Wer antwortet, bekommt einen Anruf. Der Anruf ist der Betrug."
      }
    },
    {
      stufe: 2,
      inhalt: [{ typ: "liste", eintraege: [
        { von: "SMS · Mein Handy-Anbieter", vorschau: "Ihre Rechnung für September ist fertig. Sie sehen sie in Ihrer App.", zeit: "07:00" }
      ] }],
      frage: {
        question: "Trick oder echt?",
        pictogram: "pikto-done",
        answers: ["Das ist ein Trick.", "Das ist echt."],
        correctIndex: 1,
        feedbackCorrect: "Genau. Kein Link. Kein Stress. Die Nachricht schickt dich in deine eigene App. Das ist gut.",
        feedbackWrong: "Schau noch einmal: kein Link, kein Geld, kein Stress. Sie schickt dich in deine eigene App.",
        remember: "Kein Link und kein Stress: das ist ein gutes Zeichen."
      }
    },
    {
      stufe: 2, schwer: true,
      inhalt: [{ typ: "liste", eintraege: [
        { von: "SMS · Sicherheits-Info", vorschau: "Ihr Konto wurde von einem neuen Gerät geöffnet. Waren Sie das nicht? Hier stoppen: konto-schutz.de/stop", zeit: "23:47" }
      ] }],
      frage: {
        question: "Trick oder echt?",
        pictogram: "pikto-warning",
        answers: ["Das ist ein Trick.", "Das ist echt."],
        correctIndex: 0,
        feedbackCorrect: "Die Nachricht macht Angst. Und sie gibt dir einen Link. Beides zusammen ist ein Warnzeichen.",
        feedbackWrong: "Die Nachricht macht Angst. Genau das will sie. Angst und ein Link zusammen sind ein Warnzeichen.",
        remember: "Angst und ein Link zusammen: ich mache nichts."
      },
      falle: {
        inhalt: [{ typ: "webseite", adresse: "konto-schutz.de/stop", titel: "Zugriff stoppen",
                   felder: ["Benutzername", "Passwort"], knopf: "Jetzt stoppen" }],
        text: "Schau: Die Seite will deinen Namen und dein Passwort. Damit kommen die Betrüger erst in dein Konto.",
        textFalsch: "So sieht die Falle aus. Sie will deinen Namen und dein Passwort. Damit kommen die Betrüger in dein Konto."
      }
    }
  );

  /* ---- Runde 3: nicht mehr erkennbar — es zählt die Handlung ---- */
  b.szenen.push(
    {
      stufe: 3, schwer: true,
      inhalt: [{ typ: "liste", eintraege: [
        { von: "SMS · Deine Bank", vorschau: "Wir haben eine Zahlung über 340 Euro gestoppt. War das nicht Sie? Rufen Sie uns an: 0251 598 0", zeit: "19:30" }
      ] }],
      frage: {
        question: "Was machst du?",
        pictogram: "pikto-phone",
        answers: ["Ich rufe die Nummer aus der Nachricht an.", "Ich nehme die Nummer von meiner Bank-Karte."],
        correctIndex: 1,
        feedbackCorrect: "Diese Nachricht ist echt. Aber das kannst du nicht sicher sehen. Betrüger schreiben genau so. Die Nummer auf deiner Bank-Karte hast du selbst. Damit kannst du nachfragen.",
        feedbackWrong: "Diese Nachricht ist echt. Trotzdem ist die eigene Nummer besser. Denn Betrüger schreiben genau solche Nachrichten. Man sieht den Unterschied nicht.",
        remember: "Ich rufe nur Nummern an, die ich schon habe."
      },
      falle: {
        inhalt: [{ typ: "anruf", von: "Angeblich deine Bank", nummer: "Nummer aus der Nachricht" }],
        text: "Diese Nachricht war echt. Aber schau, was bei einer falschen passiert: Am Telefon sitzt ein Betrüger. Er klingt freundlich. Er sagt: Ich bin von Ihrer Bank.",
        textFalsch: "Schau, was bei einer falschen Nachricht passiert: Am Telefon sitzt ein Betrüger. Er klingt freundlich. Er sagt: Ich bin von Ihrer Bank."
      }
    },
    {
      stufe: 3, schwer: true,
      inhalt: [{ typ: "liste", eintraege: [
        { von: "SMS · Deine Bank", vorschau: "Ihre neue TAN-App ist bereit. Bitte bestätigen Sie einmalig Ihre Anmeldung: bank-tan-start.de", zeit: "19:41" }
      ] }],
      frage: {
        question: "Was machst du?",
        pictogram: "pikto-bank",
        answers: ["Ich tippe auf den Link.", "Ich öffne meine Bank-App selbst."],
        correctIndex: 1,
        feedbackCorrect: "Genau. Das war ein Trick. Die Seite ist sehr gut nachgemacht. Auch geübte Menschen erkennen sie nicht. Du musst sie nicht erkennen. Du öffnest die App selbst. Den Link brauchst du dann nicht.",
        feedbackWrong: "Das war ein Trick. Die Seite ist sehr gut nachgemacht. Auch geübte Menschen erkennen sie nicht. Deshalb ist es besser: Du öffnest die App selbst.",
        remember: "Ich muss den Trick nicht erkennen. Ich öffne die App selbst."
      },
      falle: {
        inhalt: [{ typ: "webseite", adresse: "bank-tan-start.de", titel: "Anmeldung bestätigen",
                   felder: ["Anmeldename", "PIN", "TAN"], knopf: "Bestätigen" }],
        text: "Schau: Die Seite sieht genau aus wie deine Bank. Sie will deine PIN und deine TAN. Damit holen die Betrüger dein Geld.",
        textFalsch: "So sieht die Falle aus. Die Seite sieht genau aus wie deine Bank. Sie will deine PIN und deine TAN."
      }
    },
    {
      stufe: 3, schwer: true,
      inhalt: [{ typ: "liste", eintraege: [
        { von: "WhatsApp · Unbekannte Nummer", vorschau: "Hallo, ich bin es. Mein Handy ist kaputt. Das ist meine neue Nummer. Kannst du mir kurz helfen?", zeit: "17:12" }
      ] }],
      frage: {
        question: "Was machst du?",
        pictogram: "pikto-message",
        answers: ["Ich schreibe zurück und helfe.", "Ich rufe die alte Nummer an."],
        correctIndex: 1,
        feedbackCorrect: "Genau. Ruf die alte Nummer an. Dann kannst du nachfragen: Hast du wirklich eine neue Nummer?",
        feedbackWrong: "Betrüger schreiben oft so. Erst sind sie nett. Dann bitten sie um Geld. Ruf immer zuerst die alte Nummer an.",
        remember: "Neue Nummer? Ich rufe zuerst die alte an."
      },
      falle: {
        inhalt: [{ typ: "nachricht", von: "Unbekannte Nummer", text: "Danke! Ich komme gerade nicht an mein Konto. Kannst du eine Rechnung für mich zahlen? Es sind 890 Euro. Ich gebe es dir morgen wieder.", zeit: "17:20" }],
        text: "Schau, wie es weitergeht. Erst ist es nett. Dann kommt die Bitte um Geld.",
        textFalsch: "So geht die Falle weiter. Erst ist es nett. Dann kommt die Bitte um Geld."
      }
    },
    {
      stufe: 3, schwer: true,
      inhalt: [
        { typ: "liste", eintraege: [
          { von: "SMS · Sicherheits-Code", vorschau: "Ihr Code lautet 449812. Geben Sie ihn niemandem weiter.", zeit: "20:05" }
        ] },
        { typ: "hinweis", text: "Kurz danach klingelt das Telefon. Jemand sagt: Ich bin von Ihrer Bank. Bitte nennen Sie mir den Code." }
      ],
      frage: {
        question: "Was machst du?",
        pictogram: "pikto-lock",
        answers: ["Ich sage den Code.", "Ich sage den Code nicht."],
        correctIndex: 1,
        feedbackCorrect: "Genau. Die SMS ist echt. Der Anruf ist der Betrug. Niemand darf diesen Code haben. Auch nicht deine Bank. Auch nicht die Polizei.",
        feedbackWrong: "Die SMS ist echt. Aber der Anruf ist der Betrug. Mit dem Code kommt der Anrufer in dein Konto. Niemand darf ihn haben.",
        remember: "Meinen Code sage ich niemandem. Auch nicht am Telefon."
      },
      falle: {
        inhalt: [{ typ: "hinweis", text: "Der Anrufer hat den Code. Er meldet sich in deinem Konto an. Das Geld ist weg." }],
        text: "Schau: Die SMS war echt. Der Anruf danach ist der Trick. Der Code ist der Schlüssel zu deinem Konto.",
        textFalsch: "So endet die Falle. Der Code ist der Schlüssel zu deinem Konto. Wer ihn hat, kommt hinein."
      }
    }
  );

  b.abschluss = "Du hast geprüft und entschieden. Genau so kannst du es bei echten Nachrichten machen.";
})();

/* =============================================================
   AUS DEM TRAININGS-POSTFACH GERETTET (Sept 2026)
   -------------------------------------------------------------
   Das Trainings-Postfach hatte eine EIGENE Nachrichtenliste
   (TRAINING_INBOX in topics.js). Vier ihrer Nachrichten waren
   wortgleich mit Szenen aus dem Übungs-Handy – zwei Angebote mit
   demselben Inhalt, und nur eines zahlte auf "Deine Karte" ein.

   Ab jetzt hat das Postfach keine eigenen Daten mehr: Es mischt
   Fragen aus DIESEN Szenarien. Damit dabei nichts verlorengeht,
   ziehen die Nachrichten, die es nur dort gab, hier ein – mit
   Merksatz, damit sie auf die Karte einzahlen.

   Nicht übernommen wurde die Lotto-Gewinn-Nachricht: die steht
   inhaltlich schon als Szene in Runde 1 von "betrug".
   TRAINING_INBOX bleibt in topics.js unangetastet stehen, wird
   aber nicht mehr benutzt.
   ============================================================= */

(function rettePostfachNachrichten() {
  if (typeof SCENARIOS === "undefined") return;

  /* --- WhatsApp: zwei echte Nachrichten. Wichtig fuers Augenmass:
         Wer nur Tricks sieht, wird misstrauisch gegen alles. --- */
  if (SCENARIOS.whatsapp) {
    SCENARIOS.whatsapp.szenen.push(
      {
        inhalt: [{ typ: "nachricht", von: "Anna", text: "Hallo! Kommst du am Samstag zum Kaffee? Ich freue mich. Liebe Grüße, Anna", zeit: "15:20" }],
        frage: {
          question: "Trick oder echt?",
          pictogram: "pikto-friend",
          answers: ["Das ist ein Trick.", "Das ist echt."],
          correctIndex: 1,
          feedbackCorrect: "Genau. Die Nachricht kommt von einer Person, die du kennst. Sie will kein Geld. Sie macht dir keinen Stress.",
          feedbackWrong: "Schau noch einmal: Du kennst Anna. Sie will kein Geld. Sie macht dir keinen Stress. Das ist eine normale Nachricht.",
          remember: "Kein Geld und kein Stress von einer Person, die ich kenne: das ist normal."
        }
      },
      {
        inhalt: [{ typ: "nachricht", von: "Wohn-Gruppe", text: "Erinnerung an alle: Morgen um 15 Uhr ist unser Treffen im Gemeinschaftsraum.", zeit: "18:05" }],
        frage: {
          question: "Trick oder echt?",
          pictogram: "pikto-people",
          answers: ["Das ist ein Trick.", "Das ist echt."],
          correctIndex: 1,
          feedbackCorrect: "Eine Erinnerung aus deiner Gruppe. Kein Link, kein Geld, keine Eile.",
          feedbackWrong: "Diese Nachricht kommt aus deiner Gruppe. Sie will nichts von dir. Sie ist echt.",
          remember: "Ich prüfe: Will die Nachricht etwas von mir?"
        }
      }
    );
  }

  /* --- Einkaufen: echte Bestell-Bestaetigung --- */
  if (SCENARIOS.einkaufen) {
    SCENARIOS.einkaufen.szenen.push({
      inhalt: [{ typ: "liste", eintraege: [
        { von: "E-Mail · bestellung@musterschuhe.de", vorschau: "Danke für deine Bestellung. Deine Schuhe kommen am Donnerstag. Du kannst alles in deinem Konto ansehen.", zeit: "09:15" }
      ] }],
      frage: {
        question: "Trick oder echt?",
        pictogram: "pikto-shop",
        answers: ["Das ist ein Trick.", "Das ist echt."],
        correctIndex: 1,
        feedbackCorrect: "Genau. Du hast dort wirklich bestellt. Die Mail will kein Geld und macht dir keinen Stress.",
        feedbackWrong: "Frag dich zuerst: Habe ich dort bestellt? Wenn ja, und die Mail will kein Geld: dann ist sie echt.",
        remember: "Ich frage mich: Habe ich das wirklich bestellt?"
      }
    });
  }

  /* --- Betrug, Runde 2: zwei gut gemachte Tricks --- */
  if (SCENARIOS.betrug) {
    SCENARIOS.betrug.szenen.push(
      {
        stufe: 2, schwer: true,
        inhalt: [{ typ: "liste", eintraege: [
          { von: "SMS · Unbekannte Nummer", vorschau: "Hallo! Ich habe dir aus Versehen einen Code geschickt. Kannst du ihn mir bitte kurz weiterleiten?", zeit: "14:33" }
        ] }],
        frage: {
          question: "Trick oder echt?",
          pictogram: "pikto-code",
          answers: ["Das ist ein Trick.", "Das ist echt."],
          correctIndex: 0,
          feedbackCorrect: "Niemand schickt aus Versehen einen Code. Die Person will in dein Konto.",
          feedbackWrong: "Ein Code kommt nie aus Versehen bei dir an. Der Absender will damit in dein Konto.",
          remember: "Meine Codes sage ich niemandem. Auch nicht am Telefon."
        },
        falle: {
          inhalt: [{ typ: "hinweis", text: "Du schickst den Code. Der Absender meldet sich damit in deinem Konto an. Der Code war der Schlüssel." }],
          text: "Schau: Der Code war der Schlüssel zu deinem Konto. Deshalb hat jemand danach gefragt.",
          textFalsch: "So geht die Falle aus. Der Code ist der Schlüssel zu deinem Konto. Wer ihn hat, kommt hinein."
        }
      },
      {
        stufe: 2,
        inhalt: [{ typ: "liste", eintraege: [
          { von: "SMS · Stream-Dienst", vorschau: "Ihr Konto ist abgelaufen. Aktualisieren Sie sofort Ihre Bank-Daten, sonst wird gekündigt.", zeit: "21:10" }
        ] }],
        frage: {
          question: "Trick oder echt?",
          pictogram: "pikto-warning",
          answers: ["Das ist ein Trick.", "Das ist echt."],
          correctIndex: 0,
          feedbackCorrect: "Sofort und sonst: das ist Stress. Und niemand fragt per SMS nach Bank-Daten.",
          feedbackWrong: "Achte auf das Wort sofort und auf die Drohung. Und: Bank-Daten gibt man nie per SMS.",
          remember: "Stress und die Frage nach Bank-Daten: immer ein Trick."
        },
        falle: {
          inhalt: [{ typ: "webseite", adresse: "stream-konto-verlaengern.xyz", titel: "Konto verlängern",
                     felder: ["Kontonummer", "Bank-Leitzahl"], knopf: "Jetzt verlängern" }],
          text: "Schau: Die Seite will deine Bank-Daten. Der Stream-Dienst hat damit nichts zu tun.",
          textFalsch: "So sieht die Falle aus. Die Seite will deine Bank-Daten. Der echte Dienst fragt so nie."
        }
      }
    );
  }
})();

/* UEBUNGSHANDY-2026-10-08 BEGIN */
/* Die ursprünglichen Szenarien oben bleiben die historische Quelle.
   Aktive Lerntexte: drei Sprachfassungen und drei plausible Entscheidungen.
   Alte Datenschutz-/Hilfe-Handys sind archiviert, nicht mehr auswählbar.
   Die 45 bisherigen Screens/Runden und ihre Regel-Schlüssel bleiben gleich.
   Neue Leicht-Texte: Arbeitsfassung für die spätere gemeinsame Prüfgruppe. */
const UEBUNGSHANDY_ARCHIV = {
  datenschutz: SCENARIOS.datenschutz,
  hilfe: SCENARIOS.hilfe
};
const UEBUNGSHANDY_FASSUNGEN = {
  "whatsapp": {
    "titel": "Nachrichten prüfen und antworten",
    "einstieg": [
      "Eine neue Nummer schreibt dir.",
      "Später kommen Nachrichten von bekannten Personen.",
      "Du prüfst: Was will die Nachricht?"
    ],
    "abschluss": "Du hast Nachrichten geprüft. Du kannst bei einer fremden Nummer nachfragen. Und auf eine normale Nachricht antworten. Du darfst ein Gespräch beenden.",
    "versions": {
      "einfach": {
        "titel": "Nachrichten prüfen und antworten",
        "einstieg": [
          "Zuerst schreibt dir eine neue Nummer.",
          "Danach liest du Nachrichten von bekannten Personen und prüfst, was sie von dir wollen."
        ],
        "abschluss": "Du hast geprüft, wer schreibt und was die Nachricht will. Bei einer fremden Nummer kannst du über einen bekannten Weg nachfragen. Auf eine normale Nachricht kannst du antworten, und du darfst ein Gespräch beenden."
      },
      "standard": {
        "titel": "Nachrichten prüfen und antworten",
        "einstieg": [
          "Du liest Nachrichten einer neuen Nummer und von bekannten Kontakten.",
          "Du entscheidest, wann du nachprüfst, antwortest oder ein Gespräch beendest."
        ],
        "abschluss": "Du hast Nachrichten über einen selbst gewählten Kontaktweg geprüft und normale Nachrichten eingeordnet. Du kannst antworten, ohne vorschnell Geld oder Codes weiterzugeben, und ein Gespräch jederzeit beenden."
      }
    },
    "szenen": [
      {
        "question": "Eine neue Nummer schreibt dir. Was machst du zuerst?",
        "answers": [
          "Ich speichere die neue Nummer gleich bei meiner Familie.",
          "Ich rufe die schon bekannte Nummer an.",
          "Ich antworte erst einmal nicht."
        ],
        "feedbackCorrect": "Du rufst die Nummer aus deinen Kontakten an. Dort fragst du nach der neuen Nummer.",
        "feedbackWrong": "Der Name in der Nachricht ist kein Beweis. Rufe zuerst die schon bekannte Nummer an. Dort kannst du nachfragen.",
        "remember": "Ich rufe die alte Nummer an.",
        "feedbackAuch": "Du musst auf die Nachricht nicht antworten. Du kannst die Person später über einen bekannten Weg fragen.",
        "correctIndex": 1,
        "versions": {
          "leicht": {
            "question": "Eine neue Nummer schreibt dir. Was machst du zuerst?",
            "answers": [
              "Ich speichere die neue Nummer gleich bei meiner Familie.",
              "Ich rufe die schon bekannte Nummer an.",
              "Ich antworte erst einmal nicht."
            ],
            "feedbackCorrect": "Du rufst die Nummer aus deinen Kontakten an. Dort fragst du nach der neuen Nummer.",
            "feedbackWrong": "Der Name in der Nachricht ist kein Beweis. Rufe zuerst die schon bekannte Nummer an. Dort kannst du nachfragen.",
            "remember": "Ich rufe die alte Nummer an.",
            "feedbackAuch": "Du musst auf die Nachricht nicht antworten. Du kannst die Person später über einen bekannten Weg fragen."
          },
          "einfach": {
            "question": "Eine neue Nummer schreibt dir. Was machst du zuerst?",
            "answers": [
              "Ich speichere die neue Nummer gleich als Kontakt meiner Familie.",
              "Ich rufe die Nummer aus meinen Kontakten an.",
              "Ich antworte vorerst nicht auf die Nachricht."
            ],
            "feedbackCorrect": "Über die schon bekannte Nummer kannst du prüfen, ob die neue Nummer wirklich zu der Person gehört.",
            "feedbackWrong": "Ein Name in der Nachricht beweist nicht, wer schreibt. Frag über die Nummer nach, die du schon kennst.",
            "remember": "Ich rufe die schon bekannte Nummer an.",
            "feedbackAuch": "Du darfst die Nachricht unbeantwortet lassen. Wenn du nachfragen willst, nutze einen schon bekannten Kontaktweg."
          },
          "standard": {
            "question": "Eine unbekannte Nummer meldet sich als Familienmitglied. Was tust du zuerst?",
            "answers": [
              "Ich speichere die neue Nummer sofort als Kontakt meiner Familie.",
              "Ich rufe die bereits gespeicherte Nummer an.",
              "Ich lasse die Nachricht zunächst unbeantwortet."
            ],
            "feedbackCorrect": "Ein Rückruf über den bisherigen Kontaktweg hilft dir zu prüfen, ob die neue Nummer wirklich zu der Person gehört.",
            "feedbackWrong": "Die Behauptung in der Nachricht reicht als Nachweis nicht aus. Prüfe sie über einen Kontaktweg, den du bereits kennst.",
            "remember": "Eine neue Nummer prüfe ich über die Nummer, die ich schon kenne.",
            "feedbackAuch": "Du bist nicht verpflichtet zu antworten. Du kannst später über einen bekannten Kontaktweg nachfragen."
          }
        },
        "auchMoeglich": [
          2
        ]
      },
      {
        "question": "Die neue Nummer bittet um 300 Euro. Was machst du?",
        "answers": [
          "Ich überweise die 300 Euro sofort.",
          "Ich lasse mir die Rechnung schicken. Dann zahle ich.",
          "Ich stoppe. Ich rufe die bekannte Nummer an."
        ],
        "feedbackCorrect": "Die Person drängt dich. Du zahlst noch nichts. Du prüfst die Geld-Bitte über die bekannte Nummer.",
        "feedbackWrong": "Auch eine Rechnung beweist nicht: Die Nachricht ist von deiner Familie. Zahle noch nichts. Rufe die bekannte Nummer an.",
        "remember": "Stress und Geld sind ein Warnzeichen.",
        "correctIndex": 2,
        "versions": {
          "leicht": {
            "question": "Die neue Nummer bittet um 300 Euro. Was machst du?",
            "answers": [
              "Ich überweise die 300 Euro sofort.",
              "Ich lasse mir die Rechnung schicken. Dann zahle ich.",
              "Ich stoppe. Ich rufe die bekannte Nummer an."
            ],
            "feedbackCorrect": "Die Person drängt dich. Du zahlst noch nichts. Du prüfst die Geld-Bitte über die bekannte Nummer.",
            "feedbackWrong": "Auch eine Rechnung beweist nicht: Die Nachricht ist von deiner Familie. Zahle noch nichts. Rufe die bekannte Nummer an.",
            "remember": "Stress und Geld sind ein Warnzeichen."
          },
          "einfach": {
            "question": "Die neue Nummer bittet um 300 Euro. Wie gehst du mit der Bitte um?",
            "answers": [
              "Ich überweise sofort die 300 Euro.",
              "Ich lasse mir erst die Rechnung schicken und bezahle sie danach.",
              "Ich zahle noch nichts und rufe die bekannte Nummer an."
            ],
            "feedbackCorrect": "Die Nachricht drängt dich zum Zahlen. Über die bekannte Nummer prüfst du zuerst, wer hinter der Bitte steckt.",
            "feedbackWrong": "Eine zugeschickte Rechnung beweist nicht, wer die Nachricht geschrieben hat. Prüfe die Geld-Bitte über die Nummer, die du schon kennst.",
            "remember": "Druck und eine Geld-Bitte sind ein Warnzeichen."
          },
          "standard": {
            "question": "Die neue Nummer drängt dich, 300 Euro zu schicken. Wie gehst du vor?",
            "answers": [
              "Ich überweise den Betrag gleich.",
              "Ich fordere eine Kopie der Rechnung an und bezahle sie anschließend.",
              "Ich halte an und prüfe die Bitte über die bekannte Nummer."
            ],
            "feedbackCorrect": "Du unterbrichst den Druck und prüfst die Identität über einen unabhängigen Kontaktweg, bevor du eine Zahlung erwägst.",
            "feedbackWrong": "Auch eine übersandte Rechnung bestätigt die Identität nicht. Prüfe die unerwartete Geldforderung über einen Kontaktweg, den du bereits kennst.",
            "remember": "Bei einer Geldforderung unter Druck halte ich an und prüfe."
          }
        }
      },
      {
        "question": "Die neue Nummer will einen Anmelde-Code. Was machst du?",
        "answers": [
          "Ich sende ihn nach einem kurzen Anruf.",
          "Ich behalte den Code für mich.",
          "Ich sende ihn nur im privaten Chat."
        ],
        "feedbackCorrect": "Mit dem Anmelde-Code kann jemand dein Konto öffnen. Du gibst ihn nicht weiter. Auch nicht nach einem Anruf.",
        "feedbackWrong": "Auch ein privater Chat schützt den Code nicht vor der anderen Person. Mit dem Code kann sie dein Konto öffnen.",
        "remember": "Ich gebe keinen Code weiter.",
        "correctIndex": 1,
        "versions": {
          "leicht": {
            "question": "Die neue Nummer will einen Anmelde-Code. Was machst du?",
            "answers": [
              "Ich sende ihn nach einem kurzen Anruf.",
              "Ich behalte den Code für mich.",
              "Ich sende ihn nur im privaten Chat."
            ],
            "feedbackCorrect": "Mit dem Anmelde-Code kann jemand dein Konto öffnen. Du gibst ihn nicht weiter. Auch nicht nach einem Anruf.",
            "feedbackWrong": "Auch ein privater Chat schützt den Code nicht vor der anderen Person. Mit dem Code kann sie dein Konto öffnen.",
            "remember": "Ich gebe keinen Code weiter."
          },
          "einfach": {
            "question": "Die neue Nummer will deinen Anmeldecode. Was machst du?",
            "answers": [
              "Ich schicke ihn nach einem kurzen Telefonat.",
              "Ich gebe den Code niemandem weiter.",
              "Ich sende ihn nur in einer privaten Nachricht."
            ],
            "feedbackCorrect": "Ein Anmeldecode kann den Zugang zu deinem Konto ermöglichen. Er bleibt bei dir, auch wenn du mit der Person telefoniert hast.",
            "feedbackWrong": "Ein privater Chat hält den Code nicht vor der Person geheim, die ihn erhält. Gib deinen Anmeldecode nicht weiter.",
            "remember": "Meinen Anmeldecode gebe ich niemandem weiter."
          },
          "standard": {
            "question": "Die neue Nummer fordert einen Code für deine Anmeldung an. Was tust du?",
            "answers": [
              "Nach einem kurzen Telefonat gebe ich ihn weiter.",
              "Ich behalte den Anmeldecode für mich.",
              "Ich sende ihn ausschließlich im privaten Chat."
            ],
            "feedbackCorrect": "Anmeldecodes können den Zugang zu deinem Konto ermöglichen. Du teilst sie weder im Chat noch nach einem Telefonat.",
            "feedbackWrong": "Auch eine private Nachricht gibt der anderen Person Zugriff auf den Code. Ein Telefonat macht die Weitergabe eines Anmeldecodes ebenfalls nicht sicher.",
            "remember": "Anmeldecodes behalte ich für mich."
          }
        }
      },
      {
        "question": "Du hast schon geantwortet. Was kannst du jetzt tun?",
        "answers": [
          "Ich beende das Gespräch und blockiere die Nummer.",
          "Ich schreibe weiter. Aufhören ist unhöflich.",
          "Ich zeige die Nachricht einer vertrauten Person. Wir sehen sie zusammen an."
        ],
        "feedbackCorrect": "Du darfst aufhören. Auch nach einer Antwort. Blockieren stoppt neue Nachrichten von dieser Nummer.",
        "feedbackWrong": "Du musst nicht weiter antworten. Du darfst das Gespräch beenden. Hast du Geld oder einen Code gesendet? Dann hole dir passende Hilfe.",
        "remember": "Ich darf jederzeit aufhören.",
        "feedbackAuch": "Du darfst dir Hilfe holen. Eine vertraute Person kann mit dir die Nachricht ansehen. Du musst nicht weiter antworten.",
        "correctIndex": 0,
        "versions": {
          "leicht": {
            "question": "Du hast schon geantwortet. Was kannst du jetzt tun?",
            "answers": [
              "Ich beende das Gespräch und blockiere die Nummer.",
              "Ich schreibe weiter. Aufhören ist unhöflich.",
              "Ich zeige die Nachricht einer vertrauten Person. Wir sehen sie zusammen an."
            ],
            "feedbackCorrect": "Du darfst aufhören. Auch nach einer Antwort. Blockieren stoppt neue Nachrichten von dieser Nummer.",
            "feedbackWrong": "Du musst nicht weiter antworten. Du darfst das Gespräch beenden. Hast du Geld oder einen Code gesendet? Dann hole dir passende Hilfe.",
            "remember": "Ich darf jederzeit aufhören.",
            "feedbackAuch": "Du darfst dir Hilfe holen. Eine vertraute Person kann mit dir die Nachricht ansehen. Du musst nicht weiter antworten."
          },
          "einfach": {
            "question": "Du hast bereits auf die Nachricht geantwortet. Was kannst du jetzt tun?",
            "answers": [
              "Ich beende den Chat und blockiere die Nummer.",
              "Ich schreibe weiter, weil Aufhören unhöflich ist.",
              "Ich zeige die Nachricht einer vertrauten Person. Wir sehen sie zusammen an."
            ],
            "feedbackCorrect": "Du kannst das Gespräch auch nach einer Antwort beenden. Wenn du die Nummer blockierst, kann sie dir über diesen Kontakt keine neuen Nachrichten schicken.",
            "feedbackWrong": "Eine Antwort verpflichtet dich nicht zum Weiterreden. Wenn du bereits Geld oder einen Code geschickt hast, hole dir passende Hilfe.",
            "remember": "Ich darf ein Gespräch jederzeit beenden.",
            "feedbackAuch": "Du darfst eine vertraute Person um Hilfe bitten und mit ihr die Nachricht ansehen. Weiter antworten musst du nicht."
          },
          "standard": {
            "question": "Du hast schon geantwortet und willst aus dem Gespräch aussteigen. Was ist möglich?",
            "answers": [
              "Ich beende den Chat und blockiere die Nummer.",
              "Ich schreibe aus Höflichkeit trotzdem weiter.",
              "Ich sehe mir die Nachricht mit einer vertrauten Person an."
            ],
            "feedbackCorrect": "Auch nach einer Antwort darfst du den Kontakt beenden. Blockieren verhindert weitere Nachrichten über diesen Kontakt, macht bereits gesendete Daten aber nicht rückgängig.",
            "feedbackWrong": "Du bist nicht verpflichtet, das Gespräch fortzusetzen. Falls du schon Geld oder einen Anmeldecode weitergegeben hast, suche passende Hilfe für die nächsten Schritte.",
            "remember": "Ich kann ein Gespräch jederzeit beenden.",
            "feedbackAuch": "Du kannst dir eine vertraute Person dazuholen und die Nachricht gemeinsam prüfen. Auch dabei bist du nicht verpflichtet, weiter zu antworten."
          }
        },
        "auchMoeglich": [
          2
        ]
      },
      {
        "question": "Du kennst Anna. Du willst zum Kaffee kommen. Was passt?",
        "answers": [
          "Ich sage Anna zu.",
          "Ich blockiere Annas Nummer.",
          "Ich rufe Anna wegen des Treffens an."
        ],
        "feedbackCorrect": "Du kannst auf diese Einladung antworten. Du kennst Anna. Die Nachricht fordert kein Geld und keinen Code.",
        "feedbackWrong": "Du musst Anna wegen dieser Einladung nicht blockieren. Die Nachricht passt zu einem normalen Treffen.",
        "remember": "Kein Geld und kein Stress von einer Person, die ich kenne: das ist normal.",
        "feedbackAuch": "Du kannst Anna auch anrufen. So kannst du zusagen oder etwas zum Treffen fragen.",
        "correctIndex": 0,
        "versions": {
          "leicht": {
            "question": "Du kennst Anna. Du willst zum Kaffee kommen. Was passt?",
            "answers": [
              "Ich sage Anna zu.",
              "Ich blockiere Annas Nummer.",
              "Ich rufe Anna wegen des Treffens an."
            ],
            "feedbackCorrect": "Du kannst auf diese Einladung antworten. Du kennst Anna. Die Nachricht fordert kein Geld und keinen Code.",
            "feedbackWrong": "Du musst Anna wegen dieser Einladung nicht blockieren. Die Nachricht passt zu einem normalen Treffen.",
            "remember": "Auf eine normale Einladung kann ich antworten.",
            "feedbackAuch": "Du kannst Anna auch anrufen. So kannst du zusagen oder etwas zum Treffen fragen."
          },
          "einfach": {
            "question": "Du kennst Anna und möchtest zum Kaffee kommen. Was passt zu ihrer Nachricht?",
            "answers": [
              "Ich sage Anna zu.",
              "Ich blockiere ihre Nummer.",
              "Ich rufe Anna wegen des Treffens an."
            ],
            "feedbackCorrect": "Du kannst auf die Einladung antworten, weil sie zu einem normalen Treffen mit einer bekannten Person passt. Sie fordert weder Geld noch einen Code.",
            "feedbackWrong": "Diese Einladung ist kein Grund, Annas Nummer zu blockieren. Eine bekannte Person lädt dich zu einem normalen Treffen ein.",
            "remember": "Eine normale Einladung von einer bekannten Person kann ich beantworten.",
            "feedbackAuch": "Du kannst Anna auch anrufen, um zuzusagen oder eine Frage zum Treffen zu klären."
          },
          "standard": {
            "question": "Anna ist dir bekannt und du möchtest ihre Einladung zum Kaffee annehmen. Was passt dazu?",
            "answers": [
              "Ich sage Anna zu.",
              "Ich blockiere ihre Nummer.",
              "Ich rufe sie an, um das Treffen abzusprechen."
            ],
            "feedbackCorrect": "Die Nachricht passt zu einer gewöhnlichen Einladung einer bekannten Person. Du kannst zusagen; es werden weder Geld noch Anmeldecodes verlangt.",
            "feedbackWrong": "Die gewöhnliche Einladung liefert keinen Anlass, den Kontakt zu blockieren. Du kannst sie beantworten oder das Treffen telefonisch absprechen.",
            "remember": "Normale Einladungen bekannter Personen kann ich beantworten.",
            "feedbackAuch": "Ein Anruf ist ebenfalls passend: Du kannst zusagen und die Einzelheiten des Treffens besprechen."
          }
        },
        "auchMoeglich": [
          2
        ]
      },
      {
        "question": "Du kennst diese Wohn-Gruppe. Du willst das Treffen nicht vergessen. Was machst du?",
        "answers": [
          "Ich lösche die Nachricht. Die Gruppe erinnert mich bestimmt noch einmal.",
          "Ich schreibe den Termin in meinen Kalender.",
          "Ich frage die Gruppe noch einmal nach dem Termin."
        ],
        "feedbackCorrect": "Du merkst dir den Termin. Die Nachricht erinnert an ein Treffen. Sie verlangt kein Geld und keinen Code.",
        "feedbackWrong": "Vielleicht kommt keine neue Erinnerung. Du willst das Treffen nicht vergessen. Halte den Termin fest. Oder frage in der bekannten Gruppe nach.",
        "remember": "Ich prüfe: Will die Nachricht etwas von mir?",
        "feedbackAuch": "Du kannst in der bekannten Gruppe nachfragen. Danach kannst du den Termin festhalten.",
        "correctIndex": 1,
        "versions": {
          "leicht": {
            "question": "Du kennst diese Wohn-Gruppe. Du willst das Treffen nicht vergessen. Was machst du?",
            "answers": [
              "Ich lösche die Nachricht. Die Gruppe erinnert mich bestimmt noch einmal.",
              "Ich schreibe den Termin in meinen Kalender.",
              "Ich frage die Gruppe noch einmal nach dem Termin."
            ],
            "feedbackCorrect": "Du merkst dir den Termin. Die Nachricht erinnert an ein Treffen. Sie verlangt kein Geld und keinen Code.",
            "feedbackWrong": "Vielleicht kommt keine neue Erinnerung. Du willst das Treffen nicht vergessen. Halte den Termin fest. Oder frage in der bekannten Gruppe nach.",
            "remember": "Ich prüfe: Will die Nachricht etwas von mir?",
            "feedbackAuch": "Du kannst in der bekannten Gruppe nachfragen. Danach kannst du den Termin festhalten."
          },
          "einfach": {
            "question": "Du kennst diese Wohn-Gruppe und willst das Treffen nicht vergessen. Was machst du?",
            "answers": [
              "Ich lösche die Nachricht, weil die Gruppe mich bestimmt noch einmal erinnert.",
              "Ich trage den Termin in meinen Kalender ein.",
              "Ich frage in der Gruppe noch einmal nach dem Termin."
            ],
            "feedbackCorrect": "Die Nachricht erinnert an euer Treffen. Du kannst den Termin festhalten; die Nachricht fordert weder Geld noch einen Code.",
            "feedbackWrong": "Du weißt nicht, ob die Gruppe noch einmal erinnert. Halte den Termin fest oder frage in der bekannten Gruppe nach, damit du das Treffen nicht vergisst.",
            "remember": "Ich prüfe, was die Nachricht von mir will.",
            "feedbackAuch": "Du kannst in eurer bekannten Gruppe nachfragen, wenn du den Termin noch einmal klären willst."
          },
          "standard": {
            "question": "Die Nachricht kommt aus deiner bekannten Wohn-Gruppe. Wie behältst du den Termin im Blick?",
            "answers": [
              "Ich lösche die Nachricht und verlasse mich auf eine weitere Erinnerung der Gruppe.",
              "Ich trage das Treffen in meinen Kalender ein.",
              "Ich frage in der Gruppe noch einmal nach den Einzelheiten."
            ],
            "feedbackCorrect": "Die Nachricht dient als Erinnerung an euer Treffen. Du kannst den Termin vormerken; Geld oder Anmeldecodes werden nicht verlangt.",
            "feedbackWrong": "Eine weitere Erinnerung ist nicht sicher. Wenn du das Treffen nicht vergessen möchtest, merke den Termin vor oder frage in der bekannten Gruppe nach.",
            "remember": "Ich prüfe, was eine Nachricht von mir verlangt.",
            "feedbackAuch": "Du kannst die Einzelheiten in der bekannten Gruppe klären und dir den Termin anschließend vormerken."
          }
        },
        "auchMoeglich": [
          2
        ]
      }
    ]
  },
  "facebook": {
    "titel": "Wer sieht deinen Beitrag?",
    "einstieg": [
      "Du willst ein Foto von deinem Zimmer teilen.",
      "Du entscheidest: Wer darf es sehen?",
      "Danach kommen eine Anfrage und ein Kommentar."
    ],
    "abschluss": "Du hast die Sichtbarkeit geprüft. Du kannst eine Anfrage prüfen. Bei einem verletzenden Kommentar kannst du selbst handeln. Und du darfst Hilfe holen.",
    "versions": {
      "einfach": {
        "titel": "Wer sieht deinen Beitrag?",
        "einstieg": [
          "Du willst ein Zimmerfoto teilen und stellst ein, wer es sehen darf.",
          "Danach prüfst du eine Freundschaftsanfrage und einen Kommentar."
        ],
        "abschluss": "Du hast die Sichtbarkeit geprüft und kannst eine Freundschaftsanfrage erst ansehen, bevor du sie annimmst. Bei einem verletzenden Kommentar kannst du selbst handeln und dir Hilfe holen."
      },
      "standard": {
        "titel": "Wer kann deinen Beitrag sehen?",
        "einstieg": [
          "Du teilst ein Foto und begrenzt, wer es sehen kann.",
          "Du entscheidest außerdem, wie du mit einer unbekannten Anfrage und einem verletzenden Kommentar umgehst."
        ],
        "abschluss": "Du hast die Sichtbarkeit deiner Beiträge begrenzt und eine unbekannte Anfrage geprüft. Bei verletzenden Kommentaren kannst du melden, blockieren und dir bei Bedarf Hilfe holen."
      }
    },
    "szenen": [
      {
        "question": "Das Zimmer-Foto sollen nur deine Freunde sehen. Was stellst du ein?",
        "answers": [
          "Öffentlich.",
          "Freunde von Freunden.",
          "Nur Freunde."
        ],
        "feedbackCorrect": "Mit Nur Freunde begrenzt du die Sichtbarkeit. Deine Freunde können das Foto aber trotzdem weitergeben.",
        "feedbackWrong": "Öffentlich und Freunde von Freunden erlauben mehr Personen. Für dein Vorhaben passt Nur Freunde.",
        "remember": "Ich prüfe, wer meinen Beitrag sehen kann.",
        "correctIndex": 2,
        "versions": {
          "leicht": {
            "question": "Das Zimmer-Foto sollen nur deine Freunde sehen. Was stellst du ein?",
            "answers": [
              "Öffentlich.",
              "Freunde von Freunden.",
              "Nur Freunde."
            ],
            "feedbackCorrect": "Mit Nur Freunde begrenzt du die Sichtbarkeit. Deine Freunde können das Foto aber trotzdem weitergeben.",
            "feedbackWrong": "Öffentlich und Freunde von Freunden erlauben mehr Personen. Für dein Vorhaben passt Nur Freunde.",
            "remember": "Ich prüfe, wer meinen Beitrag sehen kann."
          },
          "einfach": {
            "question": "Nur deine Freunde sollen das Foto von deinem Zimmer sehen. Welche Einstellung passt?",
            "answers": [
              "Öffentlich.",
              "Freunde von Freunden.",
              "Nur Freunde."
            ],
            "feedbackCorrect": "Die Einstellung Nur Freunde begrenzt, wer deinen Beitrag sehen kann. Trotzdem können diese Personen das Foto weitergeben.",
            "feedbackWrong": "Mit Öffentlich oder Freunde von Freunden können weitere Personen den Beitrag sehen. Nur Freunde passt zu deinem Vorhaben.",
            "remember": "Ich prüfe, wer meinen Beitrag sehen kann."
          },
          "standard": {
            "question": "Du möchtest das Zimmerfoto ausschließlich deinen Freunden zeigen. Welche Sichtbarkeit wählst du?",
            "answers": [
              "Öffentlich.",
              "Freunde von Freunden.",
              "Nur Freunde."
            ],
            "feedbackCorrect": "Nur Freunde begrenzt die Sichtbarkeit auf deine Freundesliste. Eine Weitergabe durch diese Personen lässt sich dadurch allerdings nicht verhindern.",
            "feedbackWrong": "Öffentlich und Freunde von Freunden erweitern den Empfängerkreis. Für deinen gewünschten Kreis passt Nur Freunde.",
            "remember": "Vor dem Teilen prüfe ich die Sichtbarkeit meines Beitrags."
          }
        }
      },
      {
        "question": "Du weißt nicht: Wer ist Lena? Was machst du mit der Anfrage?",
        "answers": [
          "Ich nehme sie an. Das Foto sieht freundlich aus.",
          "Ich nehme die Anfrage nicht an.",
          "Ich prüfe erst: Kenne ich Lena?"
        ],
        "feedbackCorrect": "Du prüfst vor dem Annehmen. Ein neues Profil ist kein Beweis für einen Trick. Das Foto ist auch kein Beweis für eine bekannte Person.",
        "feedbackWrong": "Ein freundliches Foto beweist nicht: Du kennst die Person. Prüfe die Anfrage erst. Du musst sie nicht annehmen.",
        "remember": "Ich prüfe Freundschafts-Anfragen.",
        "feedbackAuch": "Du musst die Anfrage nicht annehmen. Auch ohne Beweis für einen Trick darfst du sie ablehnen.",
        "correctIndex": 2,
        "versions": {
          "leicht": {
            "question": "Du weißt nicht: Wer ist Lena? Was machst du mit der Anfrage?",
            "answers": [
              "Ich nehme sie an. Das Foto sieht freundlich aus.",
              "Ich nehme die Anfrage nicht an.",
              "Ich prüfe erst: Kenne ich Lena?"
            ],
            "feedbackCorrect": "Du prüfst vor dem Annehmen. Ein neues Profil ist kein Beweis für einen Trick. Das Foto ist auch kein Beweis für eine bekannte Person.",
            "feedbackWrong": "Ein freundliches Foto beweist nicht: Du kennst die Person. Prüfe die Anfrage erst. Du musst sie nicht annehmen.",
            "remember": "Ich prüfe Freundschafts-Anfragen.",
            "feedbackAuch": "Du musst die Anfrage nicht annehmen. Auch ohne Beweis für einen Trick darfst du sie ablehnen."
          },
          "einfach": {
            "question": "Du weißt nicht, wer Lena ist. Wie gehst du mit der Anfrage um?",
            "answers": [
              "Ich nehme sie an, weil ihr Foto freundlich aussieht.",
              "Ich nehme die Anfrage nicht an.",
              "Ich prüfe zuerst, ob ich Lena kenne."
            ],
            "feedbackCorrect": "Du prüfst die Anfrage, bevor du sie annimmst. Ein neues Profil muss kein Trick sein, aber ein freundliches Foto beweist auch keine Bekanntschaft.",
            "feedbackWrong": "Ein Profilfoto zeigt nicht sicher, wer dahintersteckt. Prüfe zunächst, ob du die Person kennst; du musst die Anfrage nicht annehmen.",
            "remember": "Ich prüfe Freundschaftsanfragen, bevor ich sie annehme.",
            "feedbackAuch": "Du darfst die Anfrage ablehnen, auch wenn du keinen Betrug nachweisen kannst."
          },
          "standard": {
            "question": "Du kannst Lena nicht zuordnen. Wie gehst du mit ihrer Freundschaftsanfrage um?",
            "answers": [
              "Ich nehme sie wegen des freundlichen Profilfotos an.",
              "Ich lehne die Anfrage ab.",
              "Ich prüfe zunächst, ob ich die Person kenne."
            ],
            "feedbackCorrect": "Ein neues Profil ohne gemeinsame Freunde ist kein Beleg für einen Betrug. Vor dem Annehmen kannst du aber prüfen, ob du die Person tatsächlich kennst.",
            "feedbackWrong": "Ein freundliches Profilfoto bestätigt die Identität nicht. Prüfe die Anfrage erst und entscheide dann, ob du den Kontakt möchtest.",
            "remember": "Freundschaftsanfragen prüfe ich vor dem Annehmen.",
            "feedbackAuch": "Du darfst die Anfrage auch ohne Nachweis eines Betrugs ablehnen. Du entscheidest, welche Kontakte du annimmst."
          }
        },
        "auchMoeglich": [
          1
        ]
      },
      {
        "question": "Der Kommentar verletzt dich. Was kannst du tun?",
        "answers": [
          "Ich schreibe eine Beleidigung zurück.",
          "Ich melde den Kommentar und blockiere die Person.",
          "Ich hole Hilfe. Ich zeige den Kommentar einer vertrauten Person."
        ],
        "feedbackCorrect": "Du kannst den Kommentar melden. Und die Person blockieren. Du musst nicht antworten. Du darfst dir auch Hilfe holen.",
        "feedbackWrong": "Eine Beleidigung zurück kann den Streit verstärken. Du kannst stattdessen melden oder blockieren. Oder passende Hilfe holen.",
        "remember": "Ich darf mir Unterstützung holen.",
        "feedbackAuch": "Du darfst den Kommentar mit einer vertrauten Person ansehen. Ihr könnt zusammen entscheiden: Melden oder blockieren?",
        "correctIndex": 1,
        "versions": {
          "leicht": {
            "question": "Der Kommentar verletzt dich. Was kannst du tun?",
            "answers": [
              "Ich schreibe eine Beleidigung zurück.",
              "Ich melde den Kommentar und blockiere die Person.",
              "Ich hole Hilfe. Ich zeige den Kommentar einer vertrauten Person."
            ],
            "feedbackCorrect": "Du kannst den Kommentar melden. Und die Person blockieren. Du musst nicht antworten. Du darfst dir auch Hilfe holen.",
            "feedbackWrong": "Eine Beleidigung zurück kann den Streit verstärken. Du kannst stattdessen melden oder blockieren. Oder passende Hilfe holen.",
            "remember": "Ich darf mir Unterstützung holen.",
            "feedbackAuch": "Du darfst den Kommentar mit einer vertrauten Person ansehen. Ihr könnt zusammen entscheiden: Melden oder blockieren?"
          },
          "einfach": {
            "question": "Der Kommentar verletzt dich. Wie kannst du reagieren?",
            "answers": [
              "Ich beleidige die Person zurück.",
              "Ich melde den Kommentar und blockiere die Person.",
              "Ich hole Hilfe. Ich zeige den Kommentar einer vertrauten Person."
            ],
            "feedbackCorrect": "Du kannst den Kommentar melden und den Kontakt blockieren, ohne zurückzuschreiben. Wenn du Hilfe möchtest, darfst du sie holen.",
            "feedbackWrong": "Eine Beleidigung zurück kann den Streit verstärken. Melden, blockieren oder passende Hilfe holen sind andere Wege.",
            "remember": "Ich darf mir passende Hilfe holen.",
            "feedbackAuch": "Du kannst dir eine vertraute Person dazuholen und mit ihr überlegen, ob du meldest oder blockierst."
          },
          "standard": {
            "question": "Der Kommentar ist verletzend. Welche Reaktion hilft dir, damit umzugehen?",
            "answers": [
              "Ich antworte mit einer Beleidigung.",
              "Ich melde den Kommentar und blockiere den Kontakt.",
              "Ich bespreche den Kommentar mit einer vertrauten Person."
            ],
            "feedbackCorrect": "Du kannst den Kommentar melden und den Kontakt blockieren. Eine Antwort ist nicht nötig; wenn du Unterstützung möchtest, kannst du sie dazuholen.",
            "feedbackWrong": "Eine Beleidigung als Antwort kann den Konflikt weiter verschärfen. Du kannst melden, blockieren oder Hilfe für die nächsten Schritte suchen.",
            "remember": "Ich darf selbst handeln und mir passende Hilfe holen.",
            "feedbackAuch": "Du kannst den Kommentar mit einer vertrauten Person besprechen und gemeinsam entscheiden, welche weiteren Schritte für dich passen."
          }
        },
        "auchMoeglich": [
          2
        ]
      }
    ]
  },
  "instagram": {
    "titel": "Dein Konto und dein Standort",
    "einstieg": [
      "Du willst ein Foto teilen.",
      "Vorher prüfst du dein Konto und das Foto.",
      "Später bittet eine fremde Person um ein privates Foto."
    ],
    "abschluss": "Du hast die Sichtbarkeit geprüft. Du hast private Angaben auf dem Foto erkannt. Du kannst eine Anfrage nach einem privaten Foto ablehnen.",
    "versions": {
      "einfach": {
        "titel": "Dein Konto und dein Standort",
        "einstieg": [
          "Du willst ein Foto teilen und prüfst dafür dein Konto und das Foto.",
          "Danach kommt eine Anfrage einer fremden Person nach einem privaten Foto."
        ],
        "abschluss": "Du hast geprüft, wer deine Fotos sehen kann und welche privaten Angaben sie zeigen. Eine unerwünschte Anfrage nach einem privaten Foto kannst du ablehnen."
      },
      "standard": {
        "titel": "Dein Konto und dein Standort",
        "einstieg": [
          "Du prüfst die Kontoeinstellungen und welche privaten Informationen ein Foto verrät.",
          "Anschließend entscheidest du, wie du mit einer unerwünschten Fotoanfrage umgehst."
        ],
        "abschluss": "Du hast Sichtbarkeit und private Angaben in Fotos geprüft. Du kannst eine unerwünschte Anfrage ablehnen, den Kontakt blockieren und dir bei Bedarf Hilfe holen."
      }
    },
    "szenen": [
      {
        "question": "Du willst Fotos nur mit ausgewählten Personen teilen. Was stellst du ein?",
        "answers": [
          "Ich lasse den Schalter aus. Ich verstecke meinen Namen.",
          "Ich schreibe privat in mein Profil.",
          "Ich schalte Privates Konto an."
        ],
        "feedbackCorrect": "Beim privaten Konto prüfst du neue Anfragen. Bereits erlaubte Personen bleiben. Sie können Fotos weitergeben.",
        "feedbackWrong": "Ein versteckter Name schützt deine Fotos nicht. Das Wort privat im Profil auch nicht. Dafür schaltest du Privates Konto an.",
        "remember": "Mein Konto ist privat.",
        "correctIndex": 2,
        "versions": {
          "leicht": {
            "question": "Du willst Fotos nur mit ausgewählten Personen teilen. Was stellst du ein?",
            "answers": [
              "Ich lasse den Schalter aus. Ich verstecke meinen Namen.",
              "Ich schreibe privat in mein Profil.",
              "Ich schalte Privates Konto an."
            ],
            "feedbackCorrect": "Beim privaten Konto prüfst du neue Anfragen. Bereits erlaubte Personen bleiben. Sie können Fotos weitergeben.",
            "feedbackWrong": "Ein versteckter Name schützt deine Fotos nicht. Das Wort privat im Profil auch nicht. Dafür schaltest du Privates Konto an.",
            "remember": "Mein Konto ist privat."
          },
          "einfach": {
            "question": "Du willst Fotos nur mit ausgewählten Personen teilen. Welche Einstellung passt?",
            "answers": [
              "Ich lasse den Schalter aus und verstecke meinen Namen.",
              "Ich schreibe privat in mein Profil.",
              "Ich schalte Privates Konto an."
            ],
            "feedbackCorrect": "Beim privaten Konto entscheidest du über neue Anfragen. Bereits erlaubte Personen bleiben und können Fotos trotzdem weitergeben.",
            "feedbackWrong": "Weder ein versteckter Name noch das Wort privat im Profil begrenzt die Sichtbarkeit deiner Fotos. Dafür passt die Einstellung Privates Konto.",
            "remember": "Ich stelle mein Konto auf privat."
          },
          "standard": {
            "question": "Deine Fotos sollen nur ausgewählte Personen sehen. Wie begrenzt du die Sichtbarkeit?",
            "answers": [
              "Ich lasse das Konto offen und blende meinen Namen aus.",
              "Ich ergänze privat in meiner Profilbeschreibung.",
              "Ich aktiviere die Einstellung Privates Konto."
            ],
            "feedbackCorrect": "Mit einem privaten Konto entscheidest du über neue Follower-Anfragen. Bereits bestätigte Kontakte bleiben bestehen und können die Fotos weitergeben.",
            "feedbackWrong": "Ein ausgeblendeter Name oder ein Hinweis in der Profilbeschreibung begrenzt die Sichtbarkeit nicht. Dafür musst du die Kontoeinstellung ändern.",
            "remember": "Ich begrenze die Sichtbarkeit meines Kontos über die Einstellungen."
          }
        }
      },
      {
        "question": "Das Foto zeigt dein Straßen-Schild. Der Standort ist an. Was machst du vor dem Teilen?",
        "answers": [
          "Ich schalte nur den Standort aus. Danach teile ich dieses Foto.",
          "Ich nehme ein Foto ohne Schild. Und schalte den Standort aus.",
          "Ich teile dieses Foto nicht."
        ],
        "feedbackCorrect": "Ohne Schild und Standort zeigt das Foto weniger private Angaben. Prüfe auch den Rest vom Foto.",
        "feedbackWrong": "Der Standort ist aus? Das Straßen-Schild bleibt im Foto. Nimm ein Foto ohne Hinweis auf deine Adresse. Oder teile es nicht.",
        "remember": "Ich schütze meinen Standort.",
        "feedbackAuch": "Du musst das Foto nicht teilen. So gibst du die Angaben auf diesem Foto nicht weiter.",
        "correctIndex": 1,
        "versions": {
          "leicht": {
            "question": "Das Foto zeigt dein Straßen-Schild. Der Standort ist an. Was machst du vor dem Teilen?",
            "answers": [
              "Ich schalte nur den Standort aus. Danach teile ich dieses Foto.",
              "Ich nehme ein Foto ohne Schild. Und schalte den Standort aus.",
              "Ich teile dieses Foto nicht."
            ],
            "feedbackCorrect": "Ohne Schild und Standort zeigt das Foto weniger private Angaben. Prüfe auch den Rest vom Foto.",
            "feedbackWrong": "Der Standort ist aus? Das Straßen-Schild bleibt im Foto. Nimm ein Foto ohne Hinweis auf deine Adresse. Oder teile es nicht.",
            "remember": "Ich schütze meinen Standort.",
            "feedbackAuch": "Du musst das Foto nicht teilen. So gibst du die Angaben auf diesem Foto nicht weiter."
          },
          "einfach": {
            "question": "Das Foto zeigt dein Straßenschild und der Standort ist an. Was machst du vor dem Teilen?",
            "answers": [
              "Ich schalte nur den Standort aus und teile das Foto danach.",
              "Ich wähle ein Foto ohne Schild und schalte den Standort aus.",
              "Ich teile dieses Foto nicht."
            ],
            "feedbackCorrect": "Du entfernst zwei Hinweise auf deinen Wohnort. Prüfe auch die übrigen Bildinhalte, bevor du das Foto teilst.",
            "feedbackWrong": "Das Straßenschild bleibt sichtbar, auch wenn du den Standort ausschaltest. Wähle ein anderes Foto oder teile dieses Foto nicht.",
            "remember": "Ich schütze meinen Standort vor dem Teilen.",
            "feedbackAuch": "Du darfst auf das Teilen verzichten. Dann gibst du die privaten Angaben auf diesem Foto nicht weiter."
          },
          "standard": {
            "question": "Das Straßenschild ist lesbar und der Standort ist aktiviert. Wie gehst du vor dem Teilen vor?",
            "answers": [
              "Ich deaktiviere ausschließlich den Standort und veröffentliche das Foto anschließend.",
              "Ich nutze ein Foto ohne Straßenschild und deaktiviere den Standort.",
              "Ich veröffentliche dieses Foto nicht."
            ],
            "feedbackCorrect": "Du beseitigst zwei Hinweise auf deinen Wohnort. Prüfe zusätzlich, ob der übrige Bildinhalt private Angaben erkennen lässt.",
            "feedbackWrong": "Die Standortfreigabe auszuschalten entfernt das lesbare Straßenschild nicht. Nutze ein anderes Foto oder verzichte auf die Veröffentlichung.",
            "remember": "Vor dem Teilen schütze ich meinen Standort.",
            "feedbackAuch": "Du kannst auf die Veröffentlichung verzichten. So werden die privaten Informationen in diesem Foto nicht weitergegeben."
          }
        },
        "auchMoeglich": [
          2
        ]
      },
      {
        "question": "Eine fremde Person will ein Foto ohne Kleidung. Was machst du?",
        "answers": [
          "Ich schicke nichts und blockiere den Kontakt.",
          "Ich sende ein Foto ohne mein Gesicht.",
          "Ich zeige die Anfrage einer vertrauten Person."
        ],
        "feedbackCorrect": "Du musst kein Foto senden. Die fremde Person kann ein Foto speichern und weitergeben. Du darfst den Kontakt beenden.",
        "feedbackWrong": "Auch ohne Gesicht bleibt es ein sehr privates Foto. Die Person kann es speichern und weitergeben. Du musst kein Foto schicken.",
        "remember": "Ich schicke fremden Personen keine privaten Fotos.",
        "feedbackAuch": "Du darfst die Anfrage mit einer vertrauten Person ansehen. Du sendest noch kein Foto. Ihr könnt passende Schritte besprechen.",
        "correctIndex": 0,
        "versions": {
          "leicht": {
            "question": "Eine fremde Person will ein Foto ohne Kleidung. Was machst du?",
            "answers": [
              "Ich schicke nichts und blockiere den Kontakt.",
              "Ich sende ein Foto ohne mein Gesicht.",
              "Ich zeige die Anfrage einer vertrauten Person."
            ],
            "feedbackCorrect": "Du musst kein Foto senden. Die fremde Person kann ein Foto speichern und weitergeben. Du darfst den Kontakt beenden.",
            "feedbackWrong": "Auch ohne Gesicht bleibt es ein sehr privates Foto. Die Person kann es speichern und weitergeben. Du musst kein Foto schicken.",
            "remember": "Ich schicke fremden Personen keine privaten Fotos.",
            "feedbackAuch": "Du darfst die Anfrage mit einer vertrauten Person ansehen. Du sendest noch kein Foto. Ihr könnt passende Schritte besprechen."
          },
          "einfach": {
            "question": "Eine fremde Person fordert ein Foto ohne Kleidung. Was machst du?",
            "answers": [
              "Ich sende nichts und blockiere den Kontakt.",
              "Ich schicke ein Foto ohne mein Gesicht.",
              "Ich zeige die Anfrage einer vertrauten Person."
            ],
            "feedbackCorrect": "Du musst der Anfrage nicht folgen. Die fremde Person könnte ein Foto speichern und weitergeben; du darfst den Kontakt beenden.",
            "feedbackWrong": "Auch ein Foto ohne Gesicht bleibt sehr privat und kann gespeichert oder weitergegeben werden. Du bist nicht verpflichtet, es zu senden.",
            "remember": "Sehr private Fotos sende ich nicht an fremde Personen.",
            "feedbackAuch": "Du kannst dir eine vertraute Person dazuholen und die nächsten Schritte besprechen. Ein Foto sendest du bis dahin nicht."
          },
          "standard": {
            "question": "Ein unbekannter Kontakt verlangt ein Nacktfoto für eine angebliche Bewerbung. Wie reagierst du?",
            "answers": [
              "Ich sende nichts und blockiere den Kontakt.",
              "Ich schicke ein Bild, auf dem mein Gesicht nicht zu sehen ist.",
              "Ich bespreche die Anfrage mit einer vertrauten Person."
            ],
            "feedbackCorrect": "Die behauptete Bewerbung verpflichtet dich zu nichts. Ein intimes Foto lässt sich speichern und weitergeben; du kannst die Anfrage ablehnen und den Kontakt beenden.",
            "feedbackWrong": "Auch ein Bild ohne Gesicht kann intime Informationen preisgeben und weitergegeben werden. Du musst der fremden Person kein Foto schicken.",
            "remember": "Intime Fotos schicke ich nicht an unbekannte Kontakte.",
            "feedbackAuch": "Du kannst die Anfrage mit einer vertrauten Person besprechen, ohne ein Foto zu senden. Gemeinsam könnt ihr passende weitere Schritte wählen."
          }
        },
        "auchMoeglich": [
          2
        ]
      }
    ]
  },
  "tiktok": {
    "titel": "Trends, Nachrichten und Zeit",
    "einstieg": [
      "Die App zeigt dir immer neue Videos.",
      "Du entscheidest: Was mache ich nach?",
      "Und wann höre ich auf?"
    ],
    "abschluss": "Du hast über einen Trend und private Angaben entschieden. Du darfst eine Pause machen. Du entscheidest selbst über deine Zeit.",
    "versions": {
      "einfach": {
        "titel": "Trends, Nachrichten und Zeit",
        "einstieg": [
          "Die App zeigt dir immer neue Videos.",
          "Du entscheidest, bei welchen Trends du mitmachst und wann du eine Pause machst."
        ],
        "abschluss": "Du hast einen Trend und eine Frage nach privaten Angaben geprüft. Du kannst eine Pause machen und selbst über deine Zeit entscheiden."
      },
      "standard": {
        "titel": "Trends, Nachrichten und Zeit",
        "einstieg": [
          "Du prüfst einen Trend und eine Frage nach persönlichen Angaben.",
          "Du entscheidest außerdem, wie lange du Videos sehen möchtest."
        ],
        "abschluss": "Du hast entschieden, welche Trends du mitmachst und welche Angaben du teilst. Du kannst die App schließen und deine Zeit selbst begrenzen."
      }
    },
    "szenen": [
      {
        "question": "Im Video sollst du viel Salz essen. Was machst du?",
        "answers": [
          "Ich probiere die Mutprobe nur kurz.",
          "Ich mache die Mutprobe nicht nach.",
          "Ich mache mit. Das Video hat viele Aufrufe."
        ],
        "feedbackCorrect": "Viel Salz essen kann deinem Körper schaden. Du musst die Mutprobe nicht nachmachen.",
        "feedbackWrong": "Auch kurz mitmachen kann schaden. Viele Aufrufe machen die Mutprobe nicht sicher.",
        "remember": "Ich mache gefährliche Trends nicht nach.",
        "correctIndex": 1,
        "versions": {
          "leicht": {
            "question": "Im Video sollst du viel Salz essen. Was machst du?",
            "answers": [
              "Ich probiere die Mutprobe nur kurz.",
              "Ich mache die Mutprobe nicht nach.",
              "Ich mache mit. Das Video hat viele Aufrufe."
            ],
            "feedbackCorrect": "Viel Salz essen kann deinem Körper schaden. Du musst die Mutprobe nicht nachmachen.",
            "feedbackWrong": "Auch kurz mitmachen kann schaden. Viele Aufrufe machen die Mutprobe nicht sicher.",
            "remember": "Ich mache gefährliche Trends nicht nach."
          },
          "einfach": {
            "question": "Die Mutprobe im Video fordert dich auf, viel Salz zu essen. Was machst du?",
            "answers": [
              "Ich probiere die Mutprobe kurz aus.",
              "Ich mache bei dieser Mutprobe nicht mit.",
              "Ich mache mit, weil das Video viele Aufrufe hat."
            ],
            "feedbackCorrect": "Viel Salz zu essen kann deinem Körper schaden. Du darfst die Mutprobe ablehnen.",
            "feedbackWrong": "Auch ein kurzer Versuch kann schaden. Viele Aufrufe zeigen nicht, ob eine Mutprobe sicher ist.",
            "remember": "Ich mache gefährliche Trends nicht nach."
          },
          "standard": {
            "question": "Bei der Mutprobe sollst du viel Salz essen. Wie reagierst du?",
            "answers": [
              "Ich probiere sie für einen kurzen Moment aus.",
              "Ich mache bei dieser Mutprobe nicht mit.",
              "Ich nehme teil, weil sie viele Menschen angesehen haben."
            ],
            "feedbackCorrect": "Viel Salz zu essen kann gesundheitlich gefährlich sein. Du entscheidest selbst und musst bei der Mutprobe nicht mitmachen.",
            "feedbackWrong": "Ein kurzer Versuch macht die Mutprobe nicht ungefährlich. Auch hohe Aufrufzahlen sind kein Beleg für ihre Sicherheit.",
            "remember": "Gefährliche Trends mache ich nicht nach."
          }
        }
      },
      {
        "question": "Du kennst sunny_edits nicht. Was machst du mit der Frage nach deinen Daten?",
        "answers": [
          "Ich sage mein Alter und meine Straße.",
          "Ich sage: Ich teile diese Daten nicht.",
          "Ich antworte nicht."
        ],
        "feedbackCorrect": "Du musst die Frage nicht beantworten. So gibst du deine privaten Angaben nicht weiter.",
        "feedbackWrong": "Ein freundlicher Text beweist nicht: Du kennst die Person. Du musst dein Alter und deine Adresse nicht nennen.",
        "remember": "Ich schütze private Daten.",
        "feedbackAuch": "Du kannst eine Grenze sagen. Du gibst dabei keine privaten Angaben weiter. Du darfst das Gespräch danach beenden.",
        "correctIndex": 2,
        "versions": {
          "leicht": {
            "question": "Du kennst sunny_edits nicht. Was machst du mit der Frage nach deinen Daten?",
            "answers": [
              "Ich sage mein Alter und meine Straße.",
              "Ich sage: Ich teile diese Daten nicht.",
              "Ich antworte nicht."
            ],
            "feedbackCorrect": "Du musst die Frage nicht beantworten. So gibst du deine privaten Angaben nicht weiter.",
            "feedbackWrong": "Ein freundlicher Text beweist nicht: Du kennst die Person. Du musst dein Alter und deine Adresse nicht nennen.",
            "remember": "Ich schütze private Daten.",
            "feedbackAuch": "Du kannst eine Grenze sagen. Du gibst dabei keine privaten Angaben weiter. Du darfst das Gespräch danach beenden."
          },
          "einfach": {
            "question": "Du kennst sunny_edits nicht. Wie reagierst du auf die Frage nach deinen persönlichen Daten?",
            "answers": [
              "Ich nenne mein Alter und meine Straße.",
              "Ich sage, dass ich diese Angaben nicht teile.",
              "Ich antworte nicht auf die Nachricht."
            ],
            "feedbackCorrect": "Du darfst die Nachricht unbeantwortet lassen und behältst deine privaten Angaben für dich.",
            "feedbackWrong": "Eine freundliche Nachricht bestätigt nicht, wer dahintersteckt. Du musst einer unbekannten Person weder Alter noch Adresse nennen.",
            "remember": "Ich schütze meine privaten Daten.",
            "feedbackAuch": "Du kannst sagen, dass du diese Angaben nicht teilst. Dabei gibst du nichts Privates preis und kannst das Gespräch anschließend beenden."
          },
          "standard": {
            "question": "Der Kontakt sunny_edits ist dir unbekannt. Wie gehst du mit der Frage nach Alter und Wohnort um?",
            "answers": [
              "Ich nenne mein Alter und meine Straße.",
              "Ich teile mit, dass ich diese Angaben für mich behalte.",
              "Ich lasse die Nachricht unbeantwortet."
            ],
            "feedbackCorrect": "Du musst auf die Anfrage nicht eingehen. Ohne Antwort gibst du deine persönlichen Angaben nicht weiter.",
            "feedbackWrong": "Eine freundliche Ansprache bestätigt die Identität nicht. Du musst einem unbekannten Kontakt weder dein Alter noch deine Adresse nennen.",
            "remember": "Meine persönlichen Daten schütze ich vor ungewollter Weitergabe.",
            "feedbackAuch": "Du kannst deine Grenze auch ausdrücklich mitteilen, ohne persönliche Angaben zu nennen. Danach kannst du den Kontakt beenden."
          }
        },
        "auchMoeglich": [
          1
        ]
      },
      {
        "question": "Du wolltest 10 Minuten schauen. Jetzt sind es 70 Minuten. Du willst eine Pause. Was machst du?",
        "answers": [
          "Ich warte: Die App wird von selbst stoppen.",
          "Ich schließe die App. Ich lege das Handy weg.",
          "Ich schaue noch ein Video. Dann sehe ich weiter."
        ],
        "feedbackCorrect": "Du machst selbst eine Pause. Die App zeigt sonst weitere Videos. Du entscheidest über deine Zeit.",
        "feedbackWrong": "Die App zeigt immer neue Videos. Ein weiteres Video hilft dir nicht bei deiner Pause. Du kannst die App jetzt schließen.",
        "remember": "Ich mache Pausen.",
        "correctIndex": 1,
        "versions": {
          "leicht": {
            "question": "Du wolltest 10 Minuten schauen. Jetzt sind es 70 Minuten. Du willst eine Pause. Was machst du?",
            "answers": [
              "Ich warte: Die App wird von selbst stoppen.",
              "Ich schließe die App. Ich lege das Handy weg.",
              "Ich schaue noch ein Video. Dann sehe ich weiter."
            ],
            "feedbackCorrect": "Du machst selbst eine Pause. Die App zeigt sonst weitere Videos. Du entscheidest über deine Zeit.",
            "feedbackWrong": "Die App zeigt immer neue Videos. Ein weiteres Video hilft dir nicht bei deiner Pause. Du kannst die App jetzt schließen.",
            "remember": "Ich mache Pausen."
          },
          "einfach": {
            "question": "Aus 10 Minuten sind 70 Minuten geworden. Du möchtest jetzt eine Pause machen. Was tust du?",
            "answers": [
              "Ich warte darauf, dass die App von selbst stoppt.",
              "Ich schließe die App und lege das Handy weg.",
              "Ich schaue noch ein Video und entscheide dann weiter."
            ],
            "feedbackCorrect": "Du entscheidest selbst über die Pause und schließt die App. Sonst zeigt sie dir weitere Videos.",
            "feedbackWrong": "Die App zeigt weiter Videos, statt die Pause für dich zu machen. Wenn du jetzt pausieren willst, kannst du sie schließen.",
            "remember": "Ich mache Pausen und bestimme selbst über meine Zeit."
          },
          "standard": {
            "question": "Du wolltest 10 Minuten schauen, inzwischen sind es 70. Wie setzt du deine gewünschte Pause um?",
            "answers": [
              "Ich warte, bis die App die Wiedergabe selbst beendet.",
              "Ich schließe die App und lege das Handy beiseite.",
              "Ich sehe erst noch ein Video und entscheide anschließend."
            ],
            "feedbackCorrect": "Du setzt die Pause selbst um. Der fortlaufende Videostrom würde sonst weitergehen; du kannst deine Zeit unabhängig davon begrenzen.",
            "feedbackWrong": "Ein weiteres Video setzt deine gewünschte Pause noch nicht um. Du kannst den fortlaufenden Videostrom jetzt unterbrechen und die App schließen.",
            "remember": "Ich mache Pausen und begrenze meine Nutzungszeit selbst."
          }
        }
      }
    ]
  },
  "youtube": {
    "titel": "Was du im Video siehst",
    "einstieg": [
      "Du schaust Videos.",
      "Du prüfst Werbung und Mutproben.",
      "Und du entscheidest über eine Pause."
    ],
    "abschluss": "Du hast Videos geprüft. Du entscheidest selbst über eine Pause.",
    "szenen": [
      {
        "question": "Was bedeutet Anzeige bei diesem Video?",
        "answers": [
          "Das Video ist Werbung.",
          "Der Kanal hat die Creme selbst geprüft.",
          "Das Video zeigt nur eine private Erfahrung."
        ],
        "feedbackCorrect": "Anzeige bedeutet Werbung. Das Video soll die Creme verkaufen. Das Versprechen kann falsch sein.",
        "feedbackWrong": "Anzeige bedeutet Werbung. Ein Tipp in der Werbung beweist nicht: Die Creme wirkt.",
        "remember": "Ich achte auf das Wort Anzeige.",
        "correctIndex": 0,
        "versions": {
          "leicht": {
            "question": "Was bedeutet Anzeige bei diesem Video?",
            "answers": [
              "Das Video ist Werbung.",
              "Der Kanal hat die Creme selbst geprüft.",
              "Das Video zeigt nur eine private Erfahrung."
            ],
            "feedbackCorrect": "Anzeige bedeutet Werbung. Das Video soll die Creme verkaufen. Das Versprechen kann falsch sein.",
            "feedbackWrong": "Anzeige bedeutet Werbung. Ein Tipp in der Werbung beweist nicht: Die Creme wirkt.",
            "remember": "Ich achte auf das Wort Anzeige."
          },
          "einfach": {
            "question": "Was bedeutet das Wort Anzeige unter diesem Video?",
            "answers": [
              "Das Video ist Werbung für die Creme.",
              "Der Kanal hat die Wirkung der Creme sicher geprüft.",
              "Der Kanal erzählt nur von einer privaten Erfahrung."
            ],
            "feedbackCorrect": "Das Wort Anzeige kennzeichnet Werbung. Das Video soll die Creme verkaufen, aber das Versprechen beweist ihre Wirkung nicht.",
            "feedbackWrong": "Ein persönlicher Tipp kann Werbung sein. Das Wort Anzeige zeigt das hier an und ist kein Beweis für die Wirkung.",
            "remember": "Ich achte darauf, ob ein Video als Anzeige gekennzeichnet ist."
          },
          "standard": {
            "question": "Unter dem Video steht Anzeige. Wie ordnest du den Tipp ein?",
            "answers": [
              "Es ist Werbung für die Creme.",
              "Der Kanal hat die Wirkung der Creme nachgewiesen.",
              "Es ist ausschließlich ein privater Erfahrungsbericht."
            ],
            "feedbackCorrect": "Anzeige kennzeichnet Werbung. Der Beitrag soll ein Produkt verkaufen; sein Versprechen belegt keine Wirkung.",
            "feedbackWrong": "Auch ein persönlicher Erfahrungsbericht kann Werbung sein. Die Kennzeichnung sagt nichts darüber aus, ob das Produktversprechen stimmt.",
            "remember": "Ich achte auf die Kennzeichnung als Anzeige."
          }
        }
      },
      {
        "question": "Viele Menschen haben das Video gesehen. Ist die Mutprobe deshalb sicher?",
        "answers": [
          "Ja. Viele Menschen kennen das Video.",
          "Nein. Viele Aufrufe zeigen keine Sicherheit.",
          "Ja. Ich mache die Mutprobe langsam nach."
        ],
        "feedbackCorrect": "Viele Aufrufe bedeuten: Viele Menschen haben geschaut. Das sagt nichts über die Gefahr. Du musst die Mutprobe nicht nachmachen.",
        "feedbackWrong": "Viele Aufrufe machen eine Mutprobe nicht sicher. Auch langsam kann sie gefährlich sein. Du musst nicht mitmachen.",
        "remember": "Ich mache gefährliche Dinge nicht nach.",
        "correctIndex": 1,
        "versions": {
          "leicht": {
            "question": "Viele Menschen haben das Video gesehen. Ist die Mutprobe deshalb sicher?",
            "answers": [
              "Ja. Viele Menschen kennen das Video.",
              "Nein. Viele Aufrufe zeigen keine Sicherheit.",
              "Ja. Ich mache die Mutprobe langsam nach."
            ],
            "feedbackCorrect": "Viele Aufrufe bedeuten: Viele Menschen haben geschaut. Das sagt nichts über die Gefahr. Du musst die Mutprobe nicht nachmachen.",
            "feedbackWrong": "Viele Aufrufe machen eine Mutprobe nicht sicher. Auch langsam kann sie gefährlich sein. Du musst nicht mitmachen.",
            "remember": "Ich mache gefährliche Dinge nicht nach."
          },
          "einfach": {
            "question": "Viele Menschen haben das Video gesehen. Macht das die Mutprobe sicher?",
            "answers": [
              "Ja, weil das Video so bekannt ist.",
              "Nein, viele Aufrufe beweisen keine Sicherheit.",
              "Ja, wenn ich die Mutprobe langsamer nachmache."
            ],
            "feedbackCorrect": "Viele Aufrufe zeigen nur, dass viele Menschen zugesehen haben. Sie beweisen nicht, dass die Mutprobe sicher ist. Du darfst sie ablehnen.",
            "feedbackWrong": "Eine bekannte Mutprobe kann gefährlich sein, auch wenn du sie langsam nachmachst. Du musst nicht mitmachen.",
            "remember": "Gefährliche Aktionen mache ich nicht nach."
          },
          "standard": {
            "question": "Das Video hat viele Aufrufe. Ist die Mutprobe dadurch sicher?",
            "answers": [
              "Ja, ihre Bekanntheit spricht für ihre Sicherheit.",
              "Nein, die Zahl der Aufrufe belegt keine Sicherheit.",
              "Ja, wenn ich beim Nachmachen langsamer vorgehe."
            ],
            "feedbackCorrect": "Aufrufe sagen etwas über die Reichweite aus, nicht über das Risiko. Du kannst eine Mutprobe ablehnen, auch wenn viele sie gesehen haben.",
            "feedbackWrong": "Weder Bekanntheit noch langsames Nachmachen machen eine gefährliche Aktion sicher. Du entscheidest selbst, ob du mitmachst.",
            "remember": "Gefährliche Aktionen mache ich nicht nach."
          }
        }
      },
      {
        "question": "Du willst jetzt eine Pause. Was tust du?",
        "answers": [
          "Ich warte auf das Ende. Die App soll von selbst stoppen.",
          "Ich schließe die App.",
          "Ich stoppe das Video."
        ],
        "feedbackCorrect": "Du stoppst das Video selbst. Dann kannst du eine Pause machen. Die App entscheidet das nicht für dich.",
        "feedbackWrong": "Die App startet das nächste Video von allein. Du willst eine Pause? Dann stoppe selbst. Oder schließe die App.",
        "remember": "Ich darf Videos stoppen.",
        "feedbackAuch": "Du kannst die App schließen. So startet kein weiteres Video. Du entscheidest über deine Pause.",
        "correctIndex": 2,
        "auchMoeglich": [
          1
        ],
        "versions": {
          "leicht": {
            "question": "Du willst jetzt eine Pause. Was tust du?",
            "answers": [
              "Ich warte auf das Ende. Die App soll von selbst stoppen.",
              "Ich schließe die App.",
              "Ich stoppe das Video."
            ],
            "feedbackCorrect": "Du stoppst das Video selbst. Dann kannst du eine Pause machen. Die App entscheidet das nicht für dich.",
            "feedbackWrong": "Die App startet das nächste Video von allein. Du willst eine Pause? Dann stoppe selbst. Oder schließe die App.",
            "remember": "Ich darf Videos stoppen.",
            "feedbackAuch": "Du kannst die App schließen. So startet kein weiteres Video. Du entscheidest über deine Pause."
          },
          "einfach": {
            "question": "Du möchtest nach dem langen Schauen eine Pause. Was machst du?",
            "answers": [
              "Ich warte darauf, dass die App von selbst stoppt.",
              "Ich schließe die App und lege das Handy weg.",
              "Ich stoppe das Video und mache eine Pause."
            ],
            "feedbackCorrect": "Du stoppst selbst und kannst so die gewünschte Pause machen. Du bestimmst, wann du weiterschaust.",
            "feedbackWrong": "Weil die App weitere Videos automatisch startet, musst du für deine Pause selbst stoppen oder die App schließen.",
            "remember": "Ich darf Videos jederzeit stoppen.",
            "feedbackAuch": "Die App zu schließen ist ein guter Weg für deine Pause. Du kannst später selbst entscheiden, ob du weiterschaust."
          },
          "standard": {
            "question": "Du möchtest eine Pause, aber das nächste Video startet automatisch. Was tust du?",
            "answers": [
              "Ich warte, bis die App den Ablauf von allein beendet.",
              "Ich schließe die App und lege das Handy weg.",
              "Ich stoppe das Video und pausiere."
            ],
            "feedbackCorrect": "Mit dem Stopp bestimmst du selbst, wann du pausierst und ob du später weiterschaust.",
            "feedbackWrong": "Die automatische Wiedergabe kann immer neue Videos starten. Für deine gewünschte Pause unterbrichst du sie selbst.",
            "remember": "Ich darf Videos jederzeit stoppen.",
            "feedbackAuch": "Du kannst die App schließen und das Handy weglegen. Auch damit setzt du deine eigene Entscheidung für eine Pause um."
          }
        }
      }
    ],
    "versions": {
      "einfach": {
        "titel": "Videos prüfen und selbst entscheiden",
        "einstieg": [
          "Du schaust Videos und prüfst, ob sie Werbung zeigen oder zum Nachmachen auffordern.",
          "Du entscheidest auch, wann du eine Pause möchtest."
        ],
        "abschluss": "Du hast Werbung und Mutproben geprüft. Wann du eine Pause machst, entscheidest du selbst."
      },
      "standard": {
        "titel": "Videos ansehen und bewusst entscheiden",
        "einstieg": [
          "Du prüfst Werbeversprechen und Aufforderungen zum Nachmachen.",
          "Auch beim automatischen nächsten Video bestimmst du selbst, wann du pausierst."
        ],
        "abschluss": "Du hast Werbeversprechen und Mutproben geprüft und selbst über eine Pause entschieden."
      }
    }
  },
  "snapchat": {
    "titel": "Ein Bild und eine Karte",
    "einstieg": [
      "Jemand bittet dich um ein Bild.",
      "Danach prüfst du deinen Standort auf der Karte."
    ],
    "abschluss": "Du hast über ein Bild und deinen Standort entschieden. Dein Nein gilt.",
    "szenen": [
      {
        "question": "Verschwindet dein Bild bei allen Personen?",
        "answers": [
          "Ja. Danach hat niemand mehr das Bild.",
          "Nein. Eine Person kann das Bild speichern.",
          "Ja. Nur die App hat das Bild noch."
        ],
        "feedbackCorrect": "Eine Person kann den Bildschirm abfotografieren. Oder das Bild anders speichern. Du hast dann keine Kontrolle über diese Kopie.",
        "feedbackWrong": "Das Bild kann in der App verschwinden. Eine andere Person kann es vorher speichern. Deshalb prüfst du vor dem Senden.",
        "remember": "Bilder können gespeichert werden.",
        "correctIndex": 1,
        "versions": {
          "leicht": {
            "question": "Verschwindet dein Bild bei allen Personen?",
            "answers": [
              "Ja. Danach hat niemand mehr das Bild.",
              "Nein. Eine Person kann das Bild speichern.",
              "Ja. Nur die App hat das Bild noch."
            ],
            "feedbackCorrect": "Eine Person kann den Bildschirm abfotografieren. Oder das Bild anders speichern. Du hast dann keine Kontrolle über diese Kopie.",
            "feedbackWrong": "Das Bild kann in der App verschwinden. Eine andere Person kann es vorher speichern. Deshalb prüfst du vor dem Senden.",
            "remember": "Bilder können gespeichert werden."
          },
          "einfach": {
            "question": "Ist dein Bild bei allen Personen weg, wenn es in der App verschwindet?",
            "answers": [
              "Ja, danach hat niemand mehr eine Kopie.",
              "Nein, jemand kann es vorher speichern.",
              "Ja, nur die App behält das Bild noch."
            ],
            "feedbackCorrect": "Jemand kann den Bildschirm abfotografieren oder eine Kopie speichern. Dass das Bild in der App verschwindet, löscht diese Kopie nicht.",
            "feedbackWrong": "Das Verschwinden in der App schützt nicht vor einer gespeicherten Kopie. Überlege deshalb vorher, was du senden möchtest.",
            "remember": "Andere können ein Bild speichern, auch wenn es in der App verschwindet."
          },
          "standard": {
            "question": "Verschwindet dein Bild überall, sobald die App es nicht mehr anzeigt?",
            "answers": [
              "Ja, dann existiert keine Kopie mehr.",
              "Nein, der Empfänger kann eine Kopie speichern.",
              "Ja, nur die App bewahrt es noch auf."
            ],
            "feedbackCorrect": "Ein Foto vom Bildschirm oder eine andere gespeicherte Kopie bleibt bestehen. Darüber hast du nach dem Senden keine Kontrolle.",
            "feedbackWrong": "Das Verschwinden in der App garantiert nicht, dass niemand eine Kopie besitzt. Prüfe deshalb vor dem Senden, was du teilen willst.",
            "remember": "Ein Bild kann trotz verschwindender Anzeige gespeichert werden."
          }
        }
      },
      {
        "question": "Du hast Nein gesagt. Die Person drängt weiter. Was machst du?",
        "answers": [
          "Ich sende ein Bild. Dann hört der Druck auf.",
          "Ich beende den Chat.",
          "Ich sende kein Bild."
        ],
        "feedbackCorrect": "Dein Nein gilt weiter. Du musst kein Bild schicken. Du darfst den Chat auch beenden.",
        "feedbackWrong": "Ein Bild beendet den Druck nicht sicher. Du musst nichts senden. Dein Nein gilt.",
        "remember": "Ich sage Nein bei Stress.",
        "feedbackAuch": "Du darfst den Chat beenden. Du musst nicht weiter antworten. Bei Bedarf kannst du die Person blockieren oder Hilfe holen.",
        "correctIndex": 2,
        "auchMoeglich": [
          1
        ],
        "versions": {
          "leicht": {
            "question": "Du hast Nein gesagt. Die Person drängt weiter. Was machst du?",
            "answers": [
              "Ich sende ein Bild. Dann hört der Druck auf.",
              "Ich beende den Chat.",
              "Ich sende kein Bild."
            ],
            "feedbackCorrect": "Dein Nein gilt weiter. Du musst kein Bild schicken. Du darfst den Chat auch beenden.",
            "feedbackWrong": "Ein Bild beendet den Druck nicht sicher. Du musst nichts senden. Dein Nein gilt.",
            "remember": "Ich sage Nein bei Stress.",
            "feedbackAuch": "Du darfst den Chat beenden. Du musst nicht weiter antworten. Bei Bedarf kannst du die Person blockieren oder Hilfe holen."
          },
          "einfach": {
            "question": "Du hast Nein gesagt, aber die Person drängt dich weiter. Was tust du?",
            "answers": [
              "Ich sende einmal ein Bild, damit der Druck aufhört.",
              "Ich beende den Chat, ohne ein Bild zu senden.",
              "Ich bleibe bei Nein und sende kein Bild."
            ],
            "feedbackCorrect": "Dein Nein gilt auch beim zweiten Mal. Du musst kein Bild senden und darfst den Chat beenden.",
            "feedbackWrong": "Ein Bild zu senden beendet den Druck nicht zuverlässig. Du darfst bei deinem Nein bleiben.",
            "remember": "Bei Druck bleibe ich bei meinem Nein.",
            "feedbackAuch": "Du kannst den Chat beenden, ohne weiter zu antworten. Wenn du möchtest, kannst du blockieren oder passende Hilfe holen."
          },
          "standard": {
            "question": "Die Person drängt weiter, obwohl du das Bild abgelehnt hast. Was machst du?",
            "answers": [
              "Ich sende einmal ein Bild, um den Druck zu beenden.",
              "Ich beende den Chat, ohne ein Bild zu senden.",
              "Ich bleibe bei meinem Nein und sende kein Bild."
            ],
            "feedbackCorrect": "Dein Nein bleibt gültig. Du musst weder ein Bild senden noch weiter diskutieren.",
            "feedbackWrong": "Nachzugeben garantiert nicht, dass der Druck endet. Du darfst deine Grenze beibehalten und das Gespräch beenden.",
            "remember": "Bei Druck bleibe ich bei meinem Nein.",
            "feedbackAuch": "Den Chat zu beenden schützt deine Grenze ebenfalls. Bei Bedarf kannst du zusätzlich blockieren oder dir passende Hilfe holen."
          }
        }
      },
      {
        "question": "Du willst deinen Standort nicht allen Freunden zeigen. Was stellst du ein?",
        "answers": [
          "Niemand sieht meinen Standort.",
          "Nur von mir gewählte Freunde sehen ihn.",
          "Alle Freunde sehen meinen Standort."
        ],
        "feedbackCorrect": "Du schaltest den Standort für andere aus. Damit sieht niemand auf dieser Karte deinen Ort.",
        "feedbackWrong": "Bei dieser Einstellung sehen alle Freunde deinen Ort. Du willst das nicht. Wähle niemanden. Oder nur bestimmte Freunde.",
        "remember": "Ich schütze meinen Standort.",
        "feedbackAuch": "Du darfst bestimmte Freunde auswählen. Prüfe die Auswahl. Teile nur mit den Personen deiner Wahl.",
        "correctIndex": 0,
        "auchMoeglich": [
          1
        ],
        "versions": {
          "leicht": {
            "question": "Du willst deinen Standort nicht allen Freunden zeigen. Was stellst du ein?",
            "answers": [
              "Niemand sieht meinen Standort.",
              "Nur von mir gewählte Freunde sehen ihn.",
              "Alle Freunde sehen meinen Standort."
            ],
            "feedbackCorrect": "Du schaltest den Standort für andere aus. Damit sieht niemand auf dieser Karte deinen Ort.",
            "feedbackWrong": "Bei dieser Einstellung sehen alle Freunde deinen Ort. Du willst das nicht. Wähle niemanden. Oder nur bestimmte Freunde.",
            "remember": "Ich schütze meinen Standort.",
            "feedbackAuch": "Du darfst bestimmte Freunde auswählen. Prüfe die Auswahl. Teile nur mit den Personen deiner Wahl."
          },
          "einfach": {
            "question": "Du möchtest deinen Standort nicht allen Freunden zeigen. Welche Einstellung passt?",
            "answers": [
              "Niemand darf meinen Standort sehen.",
              "Nur die Freunde meiner Wahl dürfen ihn sehen.",
              "Alle Freunde dürfen meinen Standort sehen."
            ],
            "feedbackCorrect": "Du schaltest die Anzeige für andere aus. Dann zeigt die Karte ihnen deinen Standort nicht mehr.",
            "feedbackWrong": "Alle Freunde sehen deinen Ort, obwohl du das nicht möchtest. Wähle niemanden oder begrenze die Anzeige auf bestimmte Freunde.",
            "remember": "Ich entscheide, wer meinen Standort sehen darf.",
            "feedbackAuch": "Du kannst ausgewählte Freunde zulassen. Prüfe genau, wer in der Auswahl steht und ob du mit diesen Personen teilen möchtest."
          },
          "standard": {
            "question": "Dein Standort soll nicht für alle Freunde sichtbar sein. Was wählst du?",
            "answers": [
              "Ich schalte die Sichtbarkeit für andere aus.",
              "Ich beschränke sie auf selbst ausgewählte Freunde.",
              "Ich lasse den Standort für alle Freunde sichtbar."
            ],
            "feedbackCorrect": "Mit ausgeschalteter Sichtbarkeit sehen andere deinen Standort auf dieser Karte nicht. Du bestimmst selbst, ob du ihn später teilst.",
            "feedbackWrong": "Die Anzeige für alle Freunde passt nicht zu deiner Entscheidung. Du kannst sie ausschalten oder gezielt begrenzen.",
            "remember": "Wer meinen Standort sieht, bestimme ich selbst.",
            "feedbackAuch": "Gezielt ausgewählte Freunde sind ebenfalls möglich, wenn du bewusst mit ihnen teilen willst. Prüfe die Auswahl regelmäßig."
          }
        }
      }
    ],
    "versions": {
      "einfach": {
        "titel": "Ein Bild und deinen Standort prüfen",
        "einstieg": [
          "Jemand bittet dich um ein Bild und drängt dich danach.",
          "Du prüfst auch, wer deinen Standort auf der Karte sehen darf."
        ],
        "abschluss": "Du hast selbst über ein Bild und die Sichtbarkeit deines Standorts entschieden. Du darfst bei deinem Nein bleiben."
      },
      "standard": {
        "titel": "Bilder und Standort bewusst teilen",
        "einstieg": [
          "Du entscheidest, wie du auf die Bitte um ein Bild und den anschließenden Druck reagierst.",
          "Danach legst du fest, wer deinen Standort auf der Karte sehen darf."
        ],
        "abschluss": "Du hast über das Teilen eines Bilds und deines Standorts entschieden. Dein Nein bleibt gültig, auch bei weiterem Druck."
      }
    }
  },
  "ki": {
    "titel": "Du fragst einen Chatbot",
    "einstieg": [
      "Ein Chatbot ist ein Programm.",
      "Er antwortet dir mit Text.",
      "Er kann sich irren."
    ],
    "abschluss": "Ein Chatbot kann helfen. Wichtige Antworten prüfst du nach. Private Daten gibst du nicht einfach ein.",
    "szenen": [
      {
        "question": "Du brauchst die heutige Zahl. Die Antwort ist von 2019. Was machst du?",
        "answers": [
          "Ich nehme die Zahl von 2019.",
          "Ich lasse dieselbe Antwort noch einmal schreiben.",
          "Ich suche auf der Seite von meiner Stadt."
        ],
        "feedbackCorrect": "Die Stadt veröffentlicht Zahlen über ihre Einwohner. Du prüfst die Zahl und das Datum dort. Auch eine neue Antwort von KI kann falsch sein.",
        "feedbackWrong": "Die alte Zahl zeigt nicht sicher den Stand von heute. Auch dieselbe Antwort noch einmal hilft nicht. Prüfe bei deiner Stadt.",
        "remember": "Ich prüfe wichtige Antworten.",
        "correctIndex": 2,
        "versions": {
          "leicht": {
            "question": "Du brauchst die heutige Zahl. Die Antwort ist von 2019. Was machst du?",
            "answers": [
              "Ich nehme die Zahl von 2019.",
              "Ich lasse dieselbe Antwort noch einmal schreiben.",
              "Ich suche auf der Seite von meiner Stadt."
            ],
            "feedbackCorrect": "Die Stadt veröffentlicht Zahlen über ihre Einwohner. Du prüfst die Zahl und das Datum dort. Auch eine neue Antwort von KI kann falsch sein.",
            "feedbackWrong": "Die alte Zahl zeigt nicht sicher den Stand von heute. Auch dieselbe Antwort noch einmal hilft nicht. Prüfe bei deiner Stadt.",
            "remember": "Ich prüfe wichtige Antworten."
          },
          "einfach": {
            "question": "Du brauchst die heutige Einwohnerzahl, aber die Antwort nennt 2019. Was tust du?",
            "answers": [
              "Ich nehme die Zahl von 2019 als heutige Zahl.",
              "Ich lasse den Chatbot dieselbe Antwort noch einmal schreiben.",
              "Ich prüfe die Zahl auf der Internetseite meiner Stadt."
            ],
            "feedbackCorrect": "Auf der Seite deiner Stadt kannst du nach einer aktuellen Zahl suchen und das Datum prüfen. Auch eine neue KI-Antwort kann falsch sein.",
            "feedbackWrong": "Eine alte Angabe ist kein sicherer Stand von heute. Dieselbe Antwort noch einmal zu erhalten bestätigt sie nicht. Prüfe bei deiner Stadt.",
            "remember": "Wichtige Antworten prüfe ich an einer anderen Stelle nach."
          },
          "standard": {
            "question": "Du brauchst die aktuelle Einwohnerzahl. Der Chatbot nennt einen Stand von 2019. Wie gehst du vor?",
            "answers": [
              "Ich verwende die Angabe von 2019 als aktuellen Wert.",
              "Ich lasse den Chatbot seine Antwort unverändert wiederholen.",
              "Ich prüfe Zahl und Datum auf der Website meiner Stadt."
            ],
            "feedbackCorrect": "Die Stadt ist eine passende Quelle für ihre Einwohnerzahl. Prüfe auch dort den angegebenen Zeitpunkt; eine neue KI-Antwort allein ist keine Bestätigung.",
            "feedbackWrong": "Weder ein alter Datenstand noch die Wiederholung derselben Antwort belegen die heutige Zahl. Prüfe sie bei der zuständigen Stadt.",
            "remember": "Wichtige KI-Antworten prüfe ich an einer verlässlichen Quelle nach."
          }
        }
      },
      {
        "question": "Der Chatbot will Name, Adresse und Bank-Daten. Du fragst nur nach deiner Stadt. Was tust du?",
        "answers": [
          "Ich gebe diese privaten Daten nicht ein.",
          "Ich gebe nur meine Adresse und Bank-Daten ein.",
          "Ich gebe alles ein. Es ist nur ein Programm."
        ],
        "feedbackCorrect": "Für die Zahl von den Einwohnern sind diese Daten nicht nötig. Ein Dienst kann eingegebene Daten speichern. Du gibst sie hier nicht ein.",
        "feedbackWrong": "Auch ein Programm kann Daten speichern oder weitergeben. Deine Adresse und Bank-Daten sind hier nicht nötig. Gib sie nicht ein.",
        "remember": "Ich gebe der KI keine privaten Daten.",
        "correctIndex": 0,
        "versions": {
          "leicht": {
            "question": "Der Chatbot will Name, Adresse und Bank-Daten. Du fragst nur nach deiner Stadt. Was tust du?",
            "answers": [
              "Ich gebe diese privaten Daten nicht ein.",
              "Ich gebe nur meine Adresse und Bank-Daten ein.",
              "Ich gebe alles ein. Es ist nur ein Programm."
            ],
            "feedbackCorrect": "Für die Zahl von den Einwohnern sind diese Daten nicht nötig. Ein Dienst kann eingegebene Daten speichern. Du gibst sie hier nicht ein.",
            "feedbackWrong": "Auch ein Programm kann Daten speichern oder weitergeben. Deine Adresse und Bank-Daten sind hier nicht nötig. Gib sie nicht ein.",
            "remember": "Ich gebe der KI keine privaten Daten."
          },
          "einfach": {
            "question": "Für deine Frage nach der Stadt will der Chatbot Name, Adresse und Bankdaten. Was machst du?",
            "answers": [
              "Ich gebe diese privaten Daten nicht ein.",
              "Ich gebe nur Adresse und Bankdaten ein.",
              "Ich gebe alles ein, weil es nur ein Programm ist."
            ],
            "feedbackCorrect": "Für die Einwohnerzahl braucht der Chatbot diese Angaben nicht. Ein Dienst kann Eingaben speichern oder weiterverwenden, deshalb gibst du sie hier nicht ein.",
            "feedbackWrong": "Auch ein Programm kann eingegebene Daten speichern oder weitergeben. Adresse und Bankdaten sind für diese Frage nicht nötig.",
            "remember": "Private Daten gebe ich einem Chatbot nicht einfach weiter."
          },
          "standard": {
            "question": "Der Chatbot verlangt für die Frage zur Einwohnerzahl deinen Namen, deine Adresse und Bankdaten. Was tust du?",
            "answers": [
              "Ich gebe diese privaten Daten nicht ein.",
              "Ich beschränke die Eingabe auf Adresse und Bankdaten.",
              "Ich gebe alles ein, weil nur ein Programm die Daten sieht."
            ],
            "feedbackCorrect": "Diese Angaben sind für deine Frage unnötig. Der Dienst kann Eingaben speichern oder weiterverarbeiten; gib solche Daten hier nicht ein.",
            "feedbackWrong": "Dass ein Programm antwortet, schützt deine Angaben nicht automatisch. Auch weniger private Daten bleiben für diese Frage unnötig.",
            "remember": "Private Daten gebe ich einem Chatbot nicht einfach weiter."
          }
        }
      },
      {
        "question": "Der Chatbot klingt wie ein Freund. Was ist er?",
        "answers": [
          "Ein Programm mit Gefühlen wie ein Mensch.",
          "Ein Programm. Er hat keine eigenen Gefühle.",
          "Ein Mensch. Er kennt meine Gefühle."
        ],
        "feedbackCorrect": "Ein Chatbot kann freundlich schreiben. Er hat keine eigenen Gefühle. Er kennt dich nicht wie ein vertrauter Mensch.",
        "feedbackWrong": "Freundliche Wörter machen den Chatbot nicht zu einem Menschen. Das Programm hat keine eigenen Gefühle.",
        "remember": "KI ist ein Programm. Kein Mensch.",
        "correctIndex": 1,
        "versions": {
          "leicht": {
            "question": "Der Chatbot klingt wie ein Freund. Was ist er?",
            "answers": [
              "Ein Programm mit Gefühlen wie ein Mensch.",
              "Ein Programm. Er hat keine eigenen Gefühle.",
              "Ein Mensch. Er kennt meine Gefühle."
            ],
            "feedbackCorrect": "Ein Chatbot kann freundlich schreiben. Er hat keine eigenen Gefühle. Er kennt dich nicht wie ein vertrauter Mensch.",
            "feedbackWrong": "Freundliche Wörter machen den Chatbot nicht zu einem Menschen. Das Programm hat keine eigenen Gefühle.",
            "remember": "KI ist ein Programm. Kein Mensch."
          },
          "einfach": {
            "question": "Der Chatbot klingt wie ein Freund. Was bedeutet das?",
            "answers": [
              "Er ist ein Programm, das wie ein Mensch fühlt.",
              "Er ist ein Programm und hat keine eigenen Gefühle.",
              "Er ist ein Mensch und versteht meine Gefühle."
            ],
            "feedbackCorrect": "Ein Chatbot erzeugt freundlich klingende Texte, aber er hat keine eigenen Gefühle. Er kennt dich nicht wie ein vertrauter Mensch.",
            "feedbackWrong": "Dass ein Text freundlich klingt, beweist keine Gefühle. Ein Chatbot bleibt ein Programm und ist kein Mensch.",
            "remember": "Ein Chatbot ist ein Programm und kein Mensch."
          },
          "standard": {
            "question": "Der Chatbot sagt, dass er dich besser als alle anderen versteht. Wie ordnest du das ein?",
            "answers": [
              "Er ist ein Programm, das Gefühle wie ein Mensch erlebt.",
              "Er ist ein Programm ohne eigene Gefühle.",
              "Er ist ein Mensch, der meine Gefühle kennt."
            ],
            "feedbackCorrect": "Ein Chatbot kann persönliche und freundliche Texte erzeugen. Er hat keine eigenen Gefühle und kennt dich nicht wie ein vertrauter Mensch.",
            "feedbackWrong": "Persönlich klingende Aussagen machen einen Chatbot weder zu einem Menschen noch zu einem fühlenden Freund.",
            "remember": "Ein Chatbot ist ein Programm und kein Mensch."
          }
        }
      }
    ],
    "versions": {
      "einfach": {
        "titel": "Antworten von einem Chatbot prüfen",
        "einstieg": [
          "Ein Chatbot antwortet dir mit Text und kann dabei freundlich klingen.",
          "Du prüfst wichtige Antworten und entscheidest, welche Daten du eingibst."
        ],
        "abschluss": "Ein Chatbot kann helfen, aber seine Antworten können falsch sein. Prüfe wichtige Angaben und schütze deine privaten Daten."
      },
      "standard": {
        "titel": "Einen Chatbot bewusst nutzen",
        "einstieg": [
          "Ein Chatbot erzeugt Antworten, die überzeugend und persönlich klingen können.",
          "Du prüfst wichtige Angaben und überlegst, welche Daten du ihm anvertraust."
        ],
        "abschluss": "Ein Chatbot kann nützlich sein. Prüfe wichtige Angaben unabhängig und gib private Daten nicht einfach ein."
      }
    }
  },
  "fakes": {
    "titel": "Stimmt das wirklich?",
    "einstieg": [
      "Du bekommst eine Nachricht, ein Bild und einen Anruf.",
      "Du prüfst: Stimmt das?"
    ],
    "abschluss": "Nachrichten, Bilder und Stimmen können falsch sein. Du prüfst wichtige Aussagen.",
    "szenen": [
      {
        "question": "Was machst du mit dieser Nachricht?",
        "answers": [
          "Ich prüfe erst beim Wasser-Anbieter.",
          "Ich teile sie nur in einer kleinen Gruppe.",
          "Ich leite sie als Warnung weiter."
        ],
        "feedbackCorrect": "Die Nachricht macht viel Aufregung. Sie nennt keine sichere Quelle. Du prüfst die Behauptung beim Wasser-Anbieter. Bis dahin teilst du sie nicht.",
        "feedbackWrong": "Auch in einer kleinen Gruppe verbreitet sich eine falsche Nachricht. Prüfe erst beim Wasser-Anbieter. Aufregung allein beweist noch keinen Betrug.",
        "remember": "Aufregende Nachrichten prüfe ich erst.",
        "correctIndex": 0,
        "versions": {
          "leicht": {
            "question": "Was machst du mit dieser Nachricht?",
            "answers": [
              "Ich prüfe erst beim Wasser-Anbieter.",
              "Ich teile sie nur in einer kleinen Gruppe.",
              "Ich leite sie als Warnung weiter."
            ],
            "feedbackCorrect": "Die Nachricht macht viel Aufregung. Sie nennt keine sichere Quelle. Du prüfst die Behauptung beim Wasser-Anbieter. Bis dahin teilst du sie nicht.",
            "feedbackWrong": "Auch in einer kleinen Gruppe verbreitet sich eine falsche Nachricht. Prüfe erst beim Wasser-Anbieter. Aufregung allein beweist noch keinen Betrug.",
            "remember": "Aufregende Nachrichten prüfe ich erst."
          },
          "einfach": {
            "question": "Was tust du, bevor du diese Nachricht teilst?",
            "answers": [
              "Ich prüfe die Behauptung beim Wasseranbieter.",
              "Ich teile sie zur Sicherheit nur in einer kleinen Gruppe.",
              "Ich leite sie sofort als Warnung weiter."
            ],
            "feedbackCorrect": "Die Nachricht macht Druck und nennt keine verlässliche Quelle. Beim Wasseranbieter kannst du die Behauptung prüfen. Bis dahin teilst du sie nicht.",
            "feedbackWrong": "Eine falsche Behauptung verbreitet sich auch in kleinen Gruppen. Prüfe sie zuerst beim Wasseranbieter. Aufregung allein beweist noch nicht, dass sie falsch ist.",
            "remember": "Aufregende Nachrichten prüfe ich nach, bevor ich sie teile."
          },
          "standard": {
            "question": "Die Nachricht behauptet eine starke Preiserhöhung. Wie gehst du vor?",
            "answers": [
              "Ich prüfe die Behauptung beim zuständigen Wasseranbieter.",
              "Ich teile sie vorsichtshalber nur mit einer kleinen Gruppe.",
              "Ich leite sie sofort als Warnung weiter."
            ],
            "feedbackCorrect": "Eine alarmierende Formulierung ist kein Beleg. Prüfe die Behauptung bei der zuständigen Stelle und teile sie bis dahin nicht weiter.",
            "feedbackWrong": "Auch eine kleine Gruppe kann eine falsche Behauptung weiterverbreiten. Prüfe den Inhalt unabhängig; allein an Ausrufezeichen erkennst du keine Fälschung.",
            "remember": "Aufregende Nachrichten prüfe ich, bevor ich sie weiterteile."
          }
        }
      },
      {
        "question": "Das Bild wirkt ungewöhnlich. Was heißt das?",
        "answers": [
          "Ich zähle die Finger. Dann kenne ich die Wahrheit.",
          "Das Bild kann verändert sein. Ich prüfe es.",
          "Es ist nur unscharf. Ich kann ihm vertrauen."
        ],
        "feedbackCorrect": "Das Bild kann verändert sein. Die Finger und die Schrift sind Hinweise. Sie beweisen das nicht. Suche die ursprüngliche Quelle vom Bild.",
        "feedbackWrong": "Ein ungewöhnlicher Finger beweist keine Fälschung. Ein unscharfes Bild beweist auch keine Echtheit. Prüfe die Quelle und den Zusammenhang.",
        "remember": "Bilder können gefälscht sein.",
        "correctIndex": 1,
        "versions": {
          "leicht": {
            "question": "Das Bild wirkt ungewöhnlich. Was heißt das?",
            "answers": [
              "Ich zähle die Finger. Dann kenne ich die Wahrheit.",
              "Das Bild kann verändert sein. Ich prüfe es.",
              "Es ist nur unscharf. Ich kann ihm vertrauen."
            ],
            "feedbackCorrect": "Das Bild kann verändert sein. Die Finger und die Schrift sind Hinweise. Sie beweisen das nicht. Suche die ursprüngliche Quelle vom Bild.",
            "feedbackWrong": "Ein ungewöhnlicher Finger beweist keine Fälschung. Ein unscharfes Bild beweist auch keine Echtheit. Prüfe die Quelle und den Zusammenhang.",
            "remember": "Bilder können gefälscht sein."
          },
          "einfach": {
            "question": "Das Bild zeigt ungewöhnliche Details. Was kannst du daraus schließen?",
            "answers": [
              "Die Zahl der Finger beweist, ob das Bild echt ist.",
              "Es kann verändert sein. Ich prüfe die Quelle.",
              "Es ist nur unscharf und deshalb glaubwürdig."
            ],
            "feedbackCorrect": "Ungewöhnliche Finger und Schrift können auf ein verändertes Bild hinweisen, beweisen es aber nicht. Suche die ursprüngliche Quelle und prüfe, wozu das Bild gezeigt wird.",
            "feedbackWrong": "Ein einzelnes auffälliges Detail beweist keine Fälschung. Auch Unschärfe beweist keine Echtheit. Prüfe die Quelle und den Zusammenhang.",
            "remember": "Bilder können verändert oder gefälscht sein."
          },
          "standard": {
            "question": "Was sagen dir die ungewöhnlichen Finger und die verschwommene Schrift?",
            "answers": [
              "Die Fingerzahl entscheidet eindeutig über die Echtheit.",
              "Das Bild könnte verändert sein. Ich prüfe seine Herkunft.",
              "Es ist bloß unscharf und daher glaubwürdig."
            ],
            "feedbackCorrect": "Solche Details können auf eine Bearbeitung oder KI-Erzeugung hinweisen, sind aber kein sicherer Nachweis. Prüfe die ursprüngliche Quelle und den Kontext.",
            "feedbackWrong": "Weder ein einzelnes auffälliges Detail noch Unschärfe entscheiden über die Echtheit. Verlass dich nicht allein auf eine optische Prüfung.",
            "remember": "Bilder können verändert oder gefälscht sein."
          }
        }
      },
      {
        "question": "Die Stimme klingt wie deine Nichte. Sie bittet um Geld. Was machst du?",
        "answers": [
          "Ich frage am Telefon nach ihrem Namen.",
          "Ich sende sofort Geld.",
          "Ich lege auf. Ich rufe ihre bekannte Nummer an."
        ],
        "feedbackCorrect": "Du legst auf. Dann wählst du die bekannte Nummer von deiner Nichte. So prüfst du die Bitte über einen anderen Weg. Eine Stimme kann nachgemacht sein.",
        "feedbackWrong": "Der Klang von der Stimme und ein richtiger Name reichen nicht. Auch Namen kann jemand kennen. Lege auf. Frage über die bekannte Nummer nach.",
        "remember": "Stimmen können gefälscht sein.",
        "correctIndex": 2,
        "versions": {
          "leicht": {
            "question": "Die Stimme klingt wie deine Nichte. Sie bittet um Geld. Was machst du?",
            "answers": [
              "Ich frage am Telefon nach ihrem Namen.",
              "Ich sende sofort Geld.",
              "Ich lege auf. Ich rufe ihre bekannte Nummer an."
            ],
            "feedbackCorrect": "Du legst auf. Dann wählst du die bekannte Nummer von deiner Nichte. So prüfst du die Bitte über einen anderen Weg. Eine Stimme kann nachgemacht sein.",
            "feedbackWrong": "Der Klang von der Stimme und ein richtiger Name reichen nicht. Auch Namen kann jemand kennen. Lege auf. Frage über die bekannte Nummer nach.",
            "remember": "Stimmen können gefälscht sein."
          },
          "einfach": {
            "question": "Die Stimme klingt wie deine Nichte und bittet um Geld. Wie prüfst du das?",
            "answers": [
              "Ich frage im selben Anruf nach ihrem Namen.",
              "Ich überweise das Geld sofort.",
              "Ich lege auf und rufe die bekannte Nummer meiner Nichte an."
            ],
            "feedbackCorrect": "Du prüfst über einen Kontakt, den du schon kennst. Eine vertraute Stimme kann nachgemacht sein. Gib noch keine Zahlung frei.",
            "feedbackWrong": "Stimme und Name beweisen nicht, wer anruft. Eine andere Person kann beides kennen oder nachmachen. Prüfe über die bekannte Nummer nach.",
            "remember": "Auch vertraute Stimmen können gefälscht sein."
          },
          "standard": {
            "question": "Eine Stimme, die wie deine Nichte klingt, bittet dich um Geld. Was tust du?",
            "answers": [
              "Ich lasse mir im selben Anruf ihren Namen nennen.",
              "Ich überweise sofort, weil ich die Stimme erkenne.",
              "Ich lege auf und rufe ihre bereits bekannte Nummer an."
            ],
            "feedbackCorrect": "Du überprüfst die Bitte über einen unabhängigen, bereits bekannten Kontakt. Gib bis zur Klärung keine Zahlung frei; auch vertraute Stimmen lassen sich nachahmen.",
            "feedbackWrong": "Ein passender Name und eine vertraute Stimme reichen nicht als Nachweis. Prüfe die Bitte über einen dir bereits bekannten Weg.",
            "remember": "Auch vertraute Stimmen können gefälscht sein."
          }
        }
      }
    ],
    "versions": {
      "einfach": {
        "titel": "Nachricht, Bild und Stimme prüfen",
        "einstieg": [
          "Du bekommst eine aufregende Nachricht, ein auffälliges Bild und einen Anruf.",
          "Du prüfst, ob du ihnen vertrauen kannst."
        ],
        "abschluss": "Nachrichten, Bilder und Stimmen können gefälscht sein. Prüfe wichtige Aussagen an einer verlässlichen Stelle nach."
      },
      "standard": {
        "titel": "Aussagen und Absender prüfen",
        "einstieg": [
          "Eine Nachricht, ein Bild und eine vertraut klingende Stimme können täuschen.",
          "Du entscheidest, wie du sie unabhängig prüfst."
        ],
        "abschluss": "Weder ein Bild noch eine vertraute Stimme beweisen eine Behauptung. Prüfe wichtige Aussagen und unerwartete Geldbitten unabhängig."
      }
    }
  },
  "einkaufen": {
    "titel": "Ein Schnäppchen im Netz",
    "einstieg": [
      "Du suchst neue Schuhe.",
      "Du prüfst einen sehr billigen Shop.",
      "Später prüfst du eine Nachricht zu einer Bestellung."
    ],
    "abschluss": "Du hast einen Shop und eine Nachricht geprüft. Vor dem Bezahlen nimmst du dir Zeit.",
    "szenen": [
      {
        "question": "Was prüfst du bei diesem Shop genauer?",
        "answers": [
          "Nur die Endung von der Internet-Adresse.",
          "Den sehr niedrigen Preis und das fehlende Impressum.",
          "Nur das schöne Bild von den Schuhen."
        ],
        "feedbackCorrect": "Der Preis ist sehr niedrig. Und Angaben zum Shop fehlen. Das Impressum nennt die Firma und ihre Adresse. Prüfe weiter. Zahle noch nicht.",
        "feedbackWrong": "Ein schönes Bild und die Endung von der Adresse zeigen keine Sicherheit. Hier fehlen Angaben zum Shop. Auch der sehr niedrige Preis ist ein Warnzeichen.",
        "remember": "Sehr billig und kein Impressum: Warnzeichen.",
        "correctIndex": 1,
        "versions": {
          "leicht": {
            "question": "Was prüfst du bei diesem Shop genauer?",
            "answers": [
              "Nur die Endung von der Internet-Adresse.",
              "Den sehr niedrigen Preis und das fehlende Impressum.",
              "Nur das schöne Bild von den Schuhen."
            ],
            "feedbackCorrect": "Der Preis ist sehr niedrig. Und Angaben zum Shop fehlen. Das Impressum nennt die Firma und ihre Adresse. Prüfe weiter. Zahle noch nicht.",
            "feedbackWrong": "Ein schönes Bild und die Endung von der Adresse zeigen keine Sicherheit. Hier fehlen Angaben zum Shop. Auch der sehr niedrige Preis ist ein Warnzeichen.",
            "remember": "Sehr billig und kein Impressum: Warnzeichen."
          },
          "einfach": {
            "question": "Was solltest du bei diesem Angebot genauer prüfen?",
            "answers": [
              "Nur die Endung der Internetadresse vom Shop.",
              "Den ungewöhnlich niedrigen Preis und das fehlende Impressum.",
              "Nur das schöne Produktbild der Schuhe."
            ],
            "feedbackCorrect": "Der ungewöhnlich niedrige Preis und fehlende Angaben zum Shop sind Warnzeichen. Im Impressum stehen Firma und Adresse. Prüfe weiter, bevor du bezahlst.",
            "feedbackWrong": "Ein schönes Bild oder die Endung einer Internetadresse beweisen keine Sicherheit. Die fehlenden Angaben zum Shop und der niedrige Preis müssen geprüft werden.",
            "remember": "Ein sehr niedriger Preis und ein fehlendes Impressum sind Warnzeichen."
          },
          "standard": {
            "question": "Welche Angaben brauchen bei diesem Shop besondere Aufmerksamkeit?",
            "answers": [
              "Ausschließlich die Endung der Internetadresse.",
              "Der auffällig niedrige Preis und das fehlende Impressum.",
              "Ausschließlich das ansprechende Produktfoto."
            ],
            "feedbackCorrect": "Ein extrem niedriger Preis zusammen mit fehlenden Angaben zum Anbieter ist ein Warnzeichen. Ein Impressum nennt etwa Firma und Adresse; prüfe den Shop vor einer Zahlung weiter.",
            "feedbackWrong": "Aussehen und Domain-Endung sind kein Sicherheitsnachweis. Hier sind Preis und fehlende Angaben zum Anbieter die entscheidenden Prüfpunkte.",
            "remember": "Ein sehr niedriger Preis und ein fehlendes Impressum sind Warnzeichen."
          }
        }
      },
      {
        "question": "Du kennst den Shop nicht. Nur Vorkasse ist möglich. Was heißt das?",
        "answers": [
          "Der kleine Preis schützt mich vor Betrug.",
          "Die Bank prüft dann den Shop für mich.",
          "Ich zahle vor der Lieferung. Vielleicht kommt keine Ware."
        ],
        "feedbackCorrect": "Bei Vorkasse zahlst du zuerst. Bei einem falschen Shop kommt vielleicht nichts. Eine Überweisung holst du oft schwer zurück. Zahle hier noch nicht.",
        "feedbackWrong": "Die Bank prüft den Shop nicht für dich. Auch wenig Geld kann weg sein. Bei Vorkasse zahlst du vor der Ware. Prüfe den Shop zuerst.",
        "remember": "Rechnung ist sicherer als Vorkasse.",
        "correctIndex": 2,
        "versions": {
          "leicht": {
            "question": "Du kennst den Shop nicht. Nur Vorkasse ist möglich. Was heißt das?",
            "answers": [
              "Der kleine Preis schützt mich vor Betrug.",
              "Die Bank prüft dann den Shop für mich.",
              "Ich zahle vor der Lieferung. Vielleicht kommt keine Ware."
            ],
            "feedbackCorrect": "Bei Vorkasse zahlst du zuerst. Bei einem falschen Shop kommt vielleicht nichts. Eine Überweisung holst du oft schwer zurück. Zahle hier noch nicht.",
            "feedbackWrong": "Die Bank prüft den Shop nicht für dich. Auch wenig Geld kann weg sein. Bei Vorkasse zahlst du vor der Ware. Prüfe den Shop zuerst.",
            "remember": "Rechnung ist sicherer als Vorkasse."
          },
          "einfach": {
            "question": "Du kennst den Shop nicht und kannst nur per Vorkasse zahlen. Was bedeutet das?",
            "answers": [
              "Ein kleiner Preis schützt mich vor einem Betrug.",
              "Meine Bank prüft dadurch, ob der Shop sicher ist.",
              "Ich zahle vor der Lieferung und bekomme vielleicht nichts."
            ],
            "feedbackCorrect": "Bei Vorkasse zahlst du vor der Lieferung. In diesem ungeprüften Shop kannst du dein Geld verlieren und keine Ware erhalten. Eine Überweisung zurückzuholen ist oft schwer.",
            "feedbackWrong": "Die Bank prüft den Shop nicht für dich, und auch ein kleiner Betrag kann verloren gehen. Prüfe den Anbieter, bevor du zahlst.",
            "remember": "Auf Rechnung zu zahlen ist sicherer als Vorkasse."
          },
          "standard": {
            "question": "Der ungeprüfte Shop akzeptiert nur Überweisung vorab. Welches Risiko besteht?",
            "answers": [
              "Der niedrige Betrag schützt mich vor einem Betrug.",
              "Die Überweisung bestätigt, dass meine Bank den Shop geprüft hat.",
              "Ich zahle vor der Lieferung und erhalte möglicherweise keine Ware."
            ],
            "feedbackCorrect": "Bei Vorkasse trägst du das Risiko einer ausbleibenden Lieferung. Eine bereits ausgeführte Überweisung lässt sich oft nur schwer zurückholen. Prüfe den Anbieter vor einer Zahlung.",
            "feedbackWrong": "Weder eine Überweisung noch ein niedriger Preis belegen die Seriosität. Du zahlst vor Erhalt der Ware und kannst das Geld verlieren.",
            "remember": "Auf Rechnung zu zahlen ist sicherer als Vorkasse."
          }
        }
      },
      {
        "question": "Der Knopf drängt dich zum schnellen Kauf. Was machst du?",
        "answers": [
          "Ich breche den Kauf ab.",
          "Ich kaufe vor dem Ende von den 2 Minuten.",
          "Ich zahle noch nicht. Ich prüfe den Shop in Ruhe."
        ],
        "feedbackCorrect": "Du darfst den Kauf abbrechen. Ein blinkender Knopf verpflichtet dich zu nichts.",
        "feedbackWrong": "Ein kurzer Zeit-Zähler kann zum schnellen Kauf drängen. Prüfe erst den Shop und die Kosten. Du musst nicht jetzt kaufen.",
        "remember": "Ich darf jeden Kauf abbrechen.",
        "feedbackAuch": "Du kannst erst in Ruhe prüfen. Du gibst noch keine Zahlung frei. Das schützt dich vor einem schnellen Kauf.",
        "correctIndex": 0,
        "auchMoeglich": [
          2
        ],
        "versions": {
          "leicht": {
            "question": "Der Knopf drängt dich zum schnellen Kauf. Was machst du?",
            "answers": [
              "Ich breche den Kauf ab.",
              "Ich kaufe vor dem Ende von den 2 Minuten.",
              "Ich zahle noch nicht. Ich prüfe den Shop in Ruhe."
            ],
            "feedbackCorrect": "Du darfst den Kauf abbrechen. Ein blinkender Knopf verpflichtet dich zu nichts.",
            "feedbackWrong": "Ein kurzer Zeit-Zähler kann zum schnellen Kauf drängen. Prüfe erst den Shop und die Kosten. Du musst nicht jetzt kaufen.",
            "remember": "Ich darf jeden Kauf abbrechen.",
            "feedbackAuch": "Du kannst erst in Ruhe prüfen. Du gibst noch keine Zahlung frei. Das schützt dich vor einem schnellen Kauf."
          },
          "einfach": {
            "question": "Der blinkende Knopf drängt dich zum schnellen Kauf. Wie reagierst du?",
            "answers": [
              "Ich breche den Kauf ab.",
              "Ich kaufe, bevor die zwei Minuten vorbei sind.",
              "Ich zahle noch nicht und prüfe den Shop in Ruhe."
            ],
            "feedbackCorrect": "Du darfst einen Kauf auch kurz vor dem Bezahlen abbrechen. Der Zeitdruck verpflichtet dich zu nichts.",
            "feedbackWrong": "Ein Zeit-Zähler kann dich drängen, ohne Prüfung zu kaufen. Prüfe zuerst Shop und Kosten. Du musst nicht sofort bezahlen.",
            "remember": "Ich darf einen Kauf jederzeit abbrechen.",
            "feedbackAuch": "Du kannst dir Zeit nehmen und erst prüfen, ohne eine Zahlung freizugeben. Erst danach entscheidest du über den Kauf."
          },
          "standard": {
            "question": "Der Kaufen-Knopf blinkt und ein Countdown läuft. Was tust du?",
            "answers": [
              "Ich breche den Kauf ab.",
              "Ich kaufe noch vor Ablauf des Countdowns.",
              "Ich zahle noch nicht und prüfe den Shop in Ruhe."
            ],
            "feedbackCorrect": "Du kannst den Kauf hier abbrechen. Auch kurz vor dem Bezahlen verpflichtet dich der Countdown zu nichts.",
            "feedbackWrong": "Ein Countdown kann zu einer unüberlegten Entscheidung drängen. Prüfe Anbieter und Kosten zuerst, statt wegen des Zeitdrucks zu bezahlen.",
            "remember": "Ich darf einen Kauf abbrechen.",
            "feedbackAuch": "Du darfst zunächst in Ruhe prüfen und die Zahlung zurückhalten. Danach entscheidest du selbst, ob du kaufen möchtest."
          }
        }
      },
      {
        "question": "Du hast bei musterschuhe.de bestellt. Im selbst geöffneten Konto stehen dieselben Angaben. Passt die Mail?",
        "answers": [
          "Nein. Jede Bestell-Mail ist ein Trick.",
          "Ja. Sie passt zu meiner geprüften Bestellung.",
          "Ich frage beim Shop über die bekannte Nummer nach."
        ],
        "feedbackCorrect": "Die Angaben passen zu der Bestellung in deinem Konto. Das hast du selbst geprüft. Die Mail allein beweist keine Echtheit.",
        "feedbackWrong": "Du hast die Bestellung in deinem selbst geöffneten Konto geprüft. Die Angaben passen. Nicht jede Bestell-Mail ist ein Trick.",
        "remember": "Ich frage mich: Habe ich das wirklich bestellt?",
        "feedbackAuch": "Du darfst beim Shop nachfragen. Nutze eine schon bekannte Nummer. Die Nummer aus einer fraglichen Nachricht reicht nicht.",
        "correctIndex": 1,
        "auchMoeglich": [
          2
        ],
        "versions": {
          "leicht": {
            "question": "Du hast bei musterschuhe.de bestellt. Im selbst geöffneten Konto stehen dieselben Angaben. Passt die Mail?",
            "answers": [
              "Nein. Jede Bestell-Mail ist ein Trick.",
              "Ja. Sie passt zu meiner geprüften Bestellung.",
              "Ich frage beim Shop über die bekannte Nummer nach."
            ],
            "feedbackCorrect": "Die Angaben passen zu der Bestellung in deinem Konto. Das hast du selbst geprüft. Die Mail allein beweist keine Echtheit.",
            "feedbackWrong": "Du hast die Bestellung in deinem selbst geöffneten Konto geprüft. Die Angaben passen. Nicht jede Bestell-Mail ist ein Trick.",
            "remember": "Ich frage mich: Habe ich das wirklich bestellt?",
            "feedbackAuch": "Du darfst beim Shop nachfragen. Nutze eine schon bekannte Nummer. Die Nummer aus einer fraglichen Nachricht reicht nicht."
          },
          "einfach": {
            "question": "Du hast bei musterschuhe.de bestellt. Im selbst geöffneten Konto passen die Angaben zur Mail. Wie ordnest du sie ein?",
            "answers": [
              "Sie ist ein Trick, weil Bestellmails immer falsch sind.",
              "Sie passt zu meiner unabhängig geprüften Bestellung.",
              "Ich frage über die bereits bekannte Nummer beim Shop nach."
            ],
            "feedbackCorrect": "Du hast die Bestellung unabhängig in deinem Konto geprüft. Die Angaben passen dazu. Ohne diese Prüfung reicht das Aussehen der Mail nicht.",
            "feedbackWrong": "Bestellmails sind nicht immer falsch. Hier passen die Angaben zu der Bestellung, die du im selbst geöffneten Konto geprüft hast.",
            "remember": "Ich prüfe, ob die Nachricht zu meiner tatsächlichen Bestellung passt.",
            "feedbackAuch": "Du kannst zusätzlich beim Shop nachfragen, wenn du unsicher bist. Nutze dafür eine bekannte Nummer und keinen Kontakt aus der fraglichen Mail."
          },
          "standard": {
            "question": "Du hast bei musterschuhe.de bestellt und dieselben Angaben im selbst geöffneten Konto geprüft. Wie reagierst du auf die Mail?",
            "answers": [
              "Ich halte sie für einen Trick, weil Bestellmails grundsätzlich falsch sind.",
              "Ich ordne sie meiner unabhängig geprüften Bestellung zu.",
              "Ich frage zusätzlich über die bekannte Nummer beim Shop nach."
            ],
            "feedbackCorrect": "Die unabhängige Prüfung im eigenen Konto bestätigt die Angaben zur Bestellung. Aussehen, Absendername und fehlender Zeitdruck allein wären kein ausreichender Nachweis.",
            "feedbackWrong": "Bestellmails können reguläre Informationen enthalten. Hier passen sie zu deiner unabhängig geprüften Bestellung; die Mail allein wäre kein Beleg.",
            "remember": "Ich prüfe, ob die Nachricht zu meiner tatsächlichen Bestellung passt.",
            "feedbackAuch": "Bei Unsicherheit ist eine Rückfrage über einen bereits bekannten Kontakt ebenfalls möglich. Verwende keinen Kontakt aus der fraglichen Nachricht."
          }
        }
      }
    ],
    "versions": {
      "einfach": {
        "titel": "Einen Shop und eine Bestellung prüfen",
        "einstieg": [
          "Du suchst Schuhe und prüfst ein besonders günstiges Angebot.",
          "Danach prüfst du eine Nachricht zu einer anderen Bestellung."
        ],
        "abschluss": "Du hast ein Angebot und eine Bestellnachricht geprüft. Vor einer Zahlung darfst du dir Zeit nehmen und einen Kauf abbrechen."
      },
      "standard": {
        "titel": "Angebote und Bestellnachrichten prüfen",
        "einstieg": [
          "Du prüfst einen auffällig günstigen Schuhshop und seine Zahlungsart.",
          "Danach ordnest du eine Nachricht zu einer anderen Bestellung ein."
        ],
        "abschluss": "Du hast Shop, Zahlungsart und Bestellnachricht geprüft. Vor einer Zahlung prüfst du in Ruhe; einen Kauf darfst du jederzeit abbrechen."
      }
    }
  },
  "betrug": {
    "titel": "Dein Posteingang",
    "einstieg": [
      "Du bekommst Nachrichten.",
      "Du prüfst sie und entscheidest: Was mache ich?"
    ],
    "abschluss": "Du hast Nachrichten geprüft. Du darfst unsicher sein. Du kannst über einen bekannten Weg nachfragen.",
    "szenen": [
      {
        "question": "Eine Paket-SMS will eine Gebühr. Was machst du?",
        "answers": [
          "Ich zahle die kleine Gebühr über den Link.",
          "Ich frage den Paket-Dienst über die bekannte Nummer.",
          "Ich tippe nicht auf den Link. Ich prüfe in der Paket-App."
        ],
        "feedbackCorrect": "Du öffnest die Paket-App selbst. Dort kannst du nachsehen. Die kleine Gebühr macht den Link nicht sicher.",
        "feedbackWrong": "Auch eine kleine Gebühr kann zu einer falschen Seite führen. Tippe hier nicht auf den Link. Prüfe über die Paket-App oder eine bekannte Nummer.",
        "remember": "Ich tippe nicht auf fremde Links.",
        "feedbackAuch": "Eine bekannte Nummer vom Paket-Dienst ist ein anderer sicherer Weg. Nutze keine Nummer aus dieser Nachricht. Zahle bis zur Prüfung nichts.",
        "correctIndex": 2,
        "auchMoeglich": [
          1
        ],
        "versions": {
          "leicht": {
            "question": "Eine Paket-SMS will eine Gebühr. Was machst du?",
            "answers": [
              "Ich zahle die kleine Gebühr über den Link.",
              "Ich frage den Paket-Dienst über die bekannte Nummer.",
              "Ich tippe nicht auf den Link. Ich prüfe in der Paket-App."
            ],
            "feedbackCorrect": "Du öffnest die Paket-App selbst. Dort kannst du nachsehen. Die kleine Gebühr macht den Link nicht sicher.",
            "feedbackWrong": "Auch eine kleine Gebühr kann zu einer falschen Seite führen. Tippe hier nicht auf den Link. Prüfe über die Paket-App oder eine bekannte Nummer.",
            "remember": "Ich tippe nicht auf fremde Links.",
            "feedbackAuch": "Eine bekannte Nummer vom Paket-Dienst ist ein anderer sicherer Weg. Nutze keine Nummer aus dieser Nachricht. Zahle bis zur Prüfung nichts.",
            "falleText": "Die Beispiel-Seite will deine Karten-Nummer. Sie gehört nicht zum Paket-Dienst. Du gibst hier keine Daten ein.",
            "falleTextFalsch": "Die Beispiel-Seite will deine Karten-Nummer. Du kannst sie schließen. Prüfe dein Paket über einen eigenen Weg."
          },
          "einfach": {
            "question": "Die Paket-SMS fordert eine kleine Gebühr. Wie reagierst du?",
            "answers": [
              "Ich bezahle die kleine Gebühr über den Link.",
              "Ich frage über die bekannte Nummer beim Paketdienst nach.",
              "Ich öffne die Paket-App selbst, statt auf den Link zu tippen."
            ],
            "feedbackCorrect": "In der selbst geöffneten Paket-App kannst du die Sendung prüfen. Eine kleine Forderung macht einen fremden Link nicht sicher.",
            "feedbackWrong": "Die kleine Gebühr kann dich auf eine falsche Seite locken. Prüfe die Sendung über die eigene App oder eine bekannte Nummer und zahle noch nicht.",
            "remember": "Auf fremde Links tippe ich nicht.",
            "feedbackAuch": "Du kannst beim Paketdienst über eine bereits bekannte Nummer nachfragen. Nutze keinen Kontakt aus der fraglichen SMS und zahle bis zur Prüfung nichts.",
            "falleText": "Die falsche Seite im Beispiel will deine Kartennummer. Sie gehört nicht zum Paketdienst. Gib dort keine Daten ein.",
            "falleTextFalsch": "Die falsche Seite fragt nach deiner Kartennummer. Du kannst sie schließen und das Paket über die eigene App prüfen."
          },
          "standard": {
            "question": "Eine SMS fordert eine Paketgebühr und verlinkt eine unbekannte Seite. Was tust du?",
            "answers": [
              "Ich zahle die geringe Gebühr über den angebotenen Link.",
              "Ich frage über die bereits bekannte Nummer beim Paketdienst nach.",
              "Ich prüfe in der selbst geöffneten Paket-App und nutze den Link nicht."
            ],
            "feedbackCorrect": "Der unabhängig gewählte Weg schützt dich vor einer falschen Zahlungsseite. Auch ein geringer Betrag macht eine unerwartete Forderung nicht vertrauenswürdig.",
            "feedbackWrong": "Eine geringe Forderung kann der Einstieg in einen Betrug sein. Nutze den Link nicht und prüfe die Sendung unabhängig, bevor du etwas bezahlst.",
            "remember": "Auf fremde oder verdächtige Links tippe ich nicht.",
            "feedbackAuch": "Eine Rückfrage über eine bereits bekannte Nummer ist ebenfalls möglich. Nutze keine Kontaktdaten aus der fraglichen Nachricht und halte die Zahlung zurück.",
            "falleText": "Im Beispiel führt der Link auf eine falsche Zahlungsseite, die deine Kartendaten abfragt. Gib dort keine Daten ein.",
            "falleTextFalsch": "Die falsche Seite will deine Kartendaten. Schließe sie und prüfe die Sendung über die selbst geöffnete Paket-App."
          }
        },
        "falleText": "Die Beispiel-Seite will deine Karten-Nummer. Sie gehört nicht zum Paket-Dienst. Du gibst hier keine Daten ein.",
        "falleTextFalsch": "Die Beispiel-Seite will deine Karten-Nummer. Du kannst sie schließen. Prüfe dein Paket über einen eigenen Weg."
      },
      {
        "question": "Du hast den Termin für morgen um 10 Uhr selbst vereinbart. Was passt zur SMS?",
        "answers": [
          "Die SMS passt zu meinem vereinbarten Termin.",
          "Ich frage die Praxis über ihre bekannte Nummer.",
          "Ich lösche den vereinbarten Termin wegen dieser SMS."
        ],
        "feedbackCorrect": "Die Nachricht passt zu deinem Termin. Sie fordert nichts Neues. Der Name allein beweist aber nicht: Die SMS kommt von der Praxis.",
        "feedbackWrong": "Die SMS sagt deinen vereinbarten Termin an. Du musst den Termin deshalb nicht löschen. Du bist unsicher? Dann frage über die bekannte Nummer nach.",
        "remember": "Ich prüfe, wer mir schreibt.",
        "feedbackAuch": "Du darfst den Termin bei der Praxis nachfragen. Nutze die bekannte Nummer von der Praxis. Du musst keinen Link öffnen oder Daten senden.",
        "correctIndex": 0,
        "auchMoeglich": [
          1
        ],
        "versions": {
          "leicht": {
            "question": "Du hast den Termin für morgen um 10 Uhr selbst vereinbart. Was passt zur SMS?",
            "answers": [
              "Die SMS passt zu meinem vereinbarten Termin.",
              "Ich frage die Praxis über ihre bekannte Nummer.",
              "Ich lösche den vereinbarten Termin wegen dieser SMS."
            ],
            "feedbackCorrect": "Die Nachricht passt zu deinem Termin. Sie fordert nichts Neues. Der Name allein beweist aber nicht: Die SMS kommt von der Praxis.",
            "feedbackWrong": "Die SMS sagt deinen vereinbarten Termin an. Du musst den Termin deshalb nicht löschen. Du bist unsicher? Dann frage über die bekannte Nummer nach.",
            "remember": "Ich prüfe, wer mir schreibt.",
            "feedbackAuch": "Du darfst den Termin bei der Praxis nachfragen. Nutze die bekannte Nummer von der Praxis. Du musst keinen Link öffnen oder Daten senden."
          },
          "einfach": {
            "question": "Du hast den Termin für morgen um 10 Uhr selbst vereinbart. Wie ordnest du die SMS ein?",
            "answers": [
              "Die SMS passt zu dem Termin, den ich vereinbart habe.",
              "Ich frage über die bekannte Nummer bei der Praxis nach.",
              "Ich sage den vereinbarten Termin wegen dieser SMS ab."
            ],
            "feedbackCorrect": "Die SMS erinnert an deinen vereinbarten Termin und fordert nichts Neues. Der Absendername allein beweist trotzdem nicht, wer sie geschickt hat.",
            "feedbackWrong": "Du hast diesen Termin vereinbart. Eine passende Erinnerung ist kein Grund, ihn abzusagen. Bei Unsicherheit kannst du bei der Praxis nachfragen.",
            "remember": "Ich prüfe, ob eine Nachricht wirklich vom genannten Absender kommt.",
            "feedbackAuch": "Eine Rückfrage bei der Praxis ist möglich, auch wenn die Erinnerung zum Termin passt. Verwende die bereits bekannte Nummer."
          },
          "standard": {
            "question": "Du hast den Termin für morgen um 10 Uhr selbst vereinbart. Was folgerst du aus der SMS?",
            "answers": [
              "Die Angaben passen zu meinem vereinbarten Termin.",
              "Ich bestätige den Termin über die bekannte Nummer der Praxis.",
              "Ich sage den vereinbarten Termin wegen der SMS ab."
            ],
            "feedbackCorrect": "Die Erinnerung passt zu deinem Termin und verlangt keine neue Handlung. Der angezeigte Name allein wäre allerdings kein Beweis für den Absender.",
            "feedbackWrong": "Eine passende Terminerinnerung ist kein Anlass, den Termin abzusagen. Du kannst bei Unsicherheit unabhängig bei der Praxis nachfragen.",
            "remember": "Ich prüfe, ob die Nachricht wirklich vom genannten Absender stammt.",
            "feedbackAuch": "Die Rückfrage über die bereits bekannte Praxisnummer ist ebenfalls sicher. Du brauchst dafür weder einen Link noch neue Daten an einen unbekannten Absender zu senden."
          }
        }
      },
      {
        "question": "Die Mail droht mit einer Konto-Sperre. Was machst du?",
        "answers": [
          "Ich frage meine Bank über die Nummer auf meiner Bank-Karte.",
          "Ich stoppe. Ich prüfe in meiner selbst geöffneten Bank-App.",
          "Ich bestätige die Bank-Daten aus Angst sofort."
        ],
        "feedbackCorrect": "Die Nachricht drängt und macht Angst. Du bestätigst nichts. Du öffnest deine Bank-App selbst. Dort prüfst du dein Konto.",
        "feedbackWrong": "Bei Druck bestätigst du nichts sofort. Eine falsche Seite kann deine Bank-Daten abfragen. Prüfe selbst in der Bank-App. Oder frage über die bekannte Bank-Nummer.",
        "remember": "Stress und Drohung sind Warnzeichen.",
        "feedbackAuch": "Du kannst deine Bank über die Nummer auf deiner Bank-Karte fragen. Nutze keine Nummer oder keinen Link aus der Mail.",
        "correctIndex": 1,
        "auchMoeglich": [
          0
        ],
        "versions": {
          "leicht": {
            "question": "Die Mail droht mit einer Konto-Sperre. Was machst du?",
            "answers": [
              "Ich frage meine Bank über die Nummer auf meiner Bank-Karte.",
              "Ich stoppe. Ich prüfe in meiner selbst geöffneten Bank-App.",
              "Ich bestätige die Bank-Daten aus Angst sofort."
            ],
            "feedbackCorrect": "Die Nachricht drängt und macht Angst. Du bestätigst nichts. Du öffnest deine Bank-App selbst. Dort prüfst du dein Konto.",
            "feedbackWrong": "Bei Druck bestätigst du nichts sofort. Eine falsche Seite kann deine Bank-Daten abfragen. Prüfe selbst in der Bank-App. Oder frage über die bekannte Bank-Nummer.",
            "remember": "Stress und Drohung sind Warnzeichen.",
            "feedbackAuch": "Du kannst deine Bank über die Nummer auf deiner Bank-Karte fragen. Nutze keine Nummer oder keinen Link aus der Mail.",
            "falleText": "Die falsche Seite fragt nach deiner PIN. Die PIN ist dein geheimer Bank-Code. Gib sie hier nicht ein.",
            "falleTextFalsch": "Die falsche Seite fragt nach deiner PIN. Du kannst schließen. Prüfe dein Konto in der selbst geöffneten Bank-App."
          },
          "einfach": {
            "question": "Die Mail droht mit einer Kontosperre und drängt dich. Was tust du?",
            "answers": [
              "Ich frage über die Nummer auf meiner Bankkarte bei der Bank nach.",
              "Ich bestätige nichts und prüfe in meiner selbst geöffneten Bank-App.",
              "Ich bestätige die geforderten Daten sofort, damit nichts passiert."
            ],
            "feedbackCorrect": "Du hältst an und bestätigst nichts vorschnell. Öffne deine Bank-App selbst, um dein Konto unabhängig von der Mail zu prüfen.",
            "feedbackWrong": "Die Drohung soll dich zu einer schnellen Reaktion drängen. Eine falsche Seite kann deine Daten abfragen. Prüfe über die eigene Bank-App oder eine bekannte Nummer.",
            "remember": "Druck und Drohungen sind Warnzeichen.",
            "feedbackAuch": "Du kannst über die Nummer auf deiner Bankkarte bei der Bank nachfragen. Nutze keinen Kontakt aus der fraglichen Mail.",
            "falleText": "Die falsche Seite fragt nach deiner PIN, deinem geheimen Bankcode. Gib ihn auf dieser Seite nicht ein.",
            "falleTextFalsch": "Die falsche Seite will deinen geheimen Bankcode. Schließe sie und prüfe dein Konto in der selbst geöffneten Bank-App."
          },
          "standard": {
            "question": "Eine Mail droht mit einer Kontosperre und verlangt sofortige Bestätigung. Wie reagierst du?",
            "answers": [
              "Ich kontaktiere meine Bank über die Nummer auf meiner Bankkarte.",
              "Ich bestätige nichts und prüfe mein Konto in der selbst geöffneten Bank-App.",
              "Ich bestätige die Daten sofort, um die angekündigte Sperre abzuwenden."
            ],
            "feedbackCorrect": "Du unterbrichst den Zeitdruck und prüfst über einen unabhängig gewählten Weg. Die selbst geöffnete Bank-App ist dafür geeignet.",
            "feedbackWrong": "Eine Drohung kann dich auf eine falsche Seite drängen. Gib nichts vorschnell frei und prüfe die Anfrage über einen bereits bekannten Bankkontakt.",
            "remember": "Druck und Drohungen sind Warnzeichen.",
            "feedbackAuch": "Der Kontakt über die Nummer auf deiner Bankkarte ist ebenfalls geeignet. Übernimm keine Nummer oder keinen Link aus der fraglichen Mail.",
            "falleText": "Die falsche Seite verlangt deine PIN. Gib deinen geheimen Bankcode nicht auf einer Seite aus der fraglichen Mail ein.",
            "falleTextFalsch": "Die falsche Seite verlangt deinen geheimen Bankcode. Schließe sie und prüfe über die Bank-App, die du selbst geöffnet hast."
          }
        },
        "falleText": "Die falsche Seite fragt nach deiner PIN. Die PIN ist dein geheimer Bank-Code. Gib sie hier nicht ein.",
        "falleTextFalsch": "Die falsche Seite fragt nach deiner PIN. Du kannst schließen. Prüfe dein Konto in der selbst geöffneten Bank-App."
      },
      {
        "question": "Du sollst für einen Gewinn erst 20 Euro zahlen. Was machst du?",
        "answers": [
          "Ich lösche die Nachricht ohne zu zahlen.",
          "Ich zahle die Gebühr für den großen Gewinn.",
          "Ich zahle nichts für diesen Gewinn."
        ],
        "feedbackCorrect": "Du musst keinen Gewinn mit einer Gebühr freischalten. Hier zahlst du nichts. Die Nachricht verspricht Geld und will zuerst dein Geld.",
        "feedbackWrong": "Ein versprochener Gewinn ist kein Grund für eine Zahlung. Hier will jemand zuerst Geld von dir. Zahle die Gebühr nicht.",
        "remember": "Echte Gewinne kosten kein Geld.",
        "feedbackAuch": "Du kannst die Nachricht löschen. Du musst nicht antworten. Du zahlst auch auf diesem Weg nichts für den Gewinn.",
        "correctIndex": 2,
        "auchMoeglich": [
          0
        ],
        "versions": {
          "leicht": {
            "question": "Du sollst für einen Gewinn erst 20 Euro zahlen. Was machst du?",
            "answers": [
              "Ich lösche die Nachricht ohne zu zahlen.",
              "Ich zahle die Gebühr für den großen Gewinn.",
              "Ich zahle nichts für diesen Gewinn."
            ],
            "feedbackCorrect": "Du musst keinen Gewinn mit einer Gebühr freischalten. Hier zahlst du nichts. Die Nachricht verspricht Geld und will zuerst dein Geld.",
            "feedbackWrong": "Ein versprochener Gewinn ist kein Grund für eine Zahlung. Hier will jemand zuerst Geld von dir. Zahle die Gebühr nicht.",
            "remember": "Echte Gewinne kosten kein Geld.",
            "feedbackAuch": "Du kannst die Nachricht löschen. Du musst nicht antworten. Du zahlst auch auf diesem Weg nichts für den Gewinn.",
            "falleText": "Die Seite will erst deine Zahlung. In dieser Beispiel-Falle gibt es keinen Gewinn. Du zahlst nicht.",
            "falleTextFalsch": "Die Beispiel-Falle verspricht einen Gewinn. Sie will erst dein Geld. Du kannst die Seite schließen."
          },
          "einfach": {
            "question": "Für einen versprochenen Gewinn sollst du zuerst 20 Euro zahlen. Wie reagierst du?",
            "answers": [
              "Ich lösche die Nachricht, ohne zu zahlen.",
              "Ich bezahle die Gebühr, um den Gewinn zu erhalten.",
              "Ich zahle keine Gebühr für den versprochenen Gewinn."
            ],
            "feedbackCorrect": "Du musst einen Gewinn nicht erst mit einer Gebühr freischalten. Diese Forderung will zuerst Geld von dir. Bezahle sie nicht.",
            "feedbackWrong": "Das Gewinnversprechen ist kein Grund für eine Vorauszahlung. Zahle keine Gebühr, um einen angeblichen Gewinn zu erhalten.",
            "remember": "Für einen echten Gewinn zahle ich keine Gebühr.",
            "feedbackAuch": "Du kannst die Nachricht ohne Antwort löschen. Damit vermeidest du ebenfalls die geforderte Zahlung.",
            "falleText": "Die Seite fordert zuerst deine Zahlung. Im Beispiel gibt es den versprochenen Gewinn nicht. Zahle diese Gebühr nicht.",
            "falleTextFalsch": "Im Beispiel sollst du erst Geld zahlen, um einen erfundenen Gewinn zu erhalten. Du kannst die Seite schließen."
          },
          "standard": {
            "question": "Eine Gewinnmail fordert zuerst eine Gebühr. Was tust du?",
            "answers": [
              "Ich lösche die Nachricht, ohne zu bezahlen.",
              "Ich bezahle die Gebühr, um den höheren Gewinn zu bekommen.",
              "Ich zahle keine Gebühr für den angeblichen Gewinn."
            ],
            "feedbackCorrect": "Die Aufforderung, einen angeblichen Gewinn erst durch Zahlung freizuschalten, ist ein Warnzeichen. Gib die Zahlung nicht frei.",
            "feedbackWrong": "Ein höherer versprochener Gewinn rechtfertigt keine solche Vorauszahlung. Bezahle keine Gebühr zur Freischaltung des angeblichen Gewinns.",
            "remember": "Für einen echten Gewinn zahle ich keine Gebühr.",
            "feedbackAuch": "Du kannst die Nachricht auch ohne Antwort löschen. So gehst du auf die Zahlungsaufforderung nicht ein.",
            "falleText": "Die falsche Seite verlangt eine Vorauszahlung für einen erfundenen Gewinn. Gib die Zahlung nicht frei.",
            "falleTextFalsch": "Die Beispielseite verspricht einen erfundenen Gewinn gegen Vorauszahlung. Schließe sie, statt die Gebühr zu bezahlen."
          }
        },
        "falleText": "Die Seite will erst deine Zahlung. In dieser Beispiel-Falle gibt es keinen Gewinn. Du zahlst nicht.",
        "falleTextFalsch": "Die Beispiel-Falle verspricht einen Gewinn. Sie will erst dein Geld. Du kannst die Seite schließen."
      },
      {
        "question": "Der Link sieht fast wie DHL aus. Was machst du?",
        "answers": [
          "Ich nutze den Link nicht. Ich öffne die Paket-App selbst.",
          "Ich öffne den Link wegen dem Namen DHL.",
          "Ich rufe die bekannte Nummer vom Paket-Dienst an."
        ],
        "feedbackCorrect": "Ein bekannter Name macht einen Link nicht sicher. dhl-liefertermin.de ist eine andere Adresse als dhl.de. Du prüfst die Sendung über deine eigene App.",
        "feedbackWrong": "Eine ähnliche Adresse kann zu einer falschen Seite führen. Auch die passende Paket-Nummer beweist keine Echtheit. Öffne deine Paket-App selbst.",
        "remember": "Ich tippe nicht auf Links in Nachrichten. Ich öffne die App selbst.",
        "feedbackAuch": "Du kannst beim Paket-Dienst anrufen. Nimm eine bekannte Nummer. Die Nummer aus einer fraglichen Nachricht ist kein sicherer Kontakt.",
        "correctIndex": 0,
        "auchMoeglich": [
          2
        ],
        "versions": {
          "leicht": {
            "question": "Der Link sieht fast wie DHL aus. Was machst du?",
            "answers": [
              "Ich nutze den Link nicht. Ich öffne die Paket-App selbst.",
              "Ich öffne den Link wegen dem Namen DHL.",
              "Ich rufe die bekannte Nummer vom Paket-Dienst an."
            ],
            "feedbackCorrect": "Ein bekannter Name macht einen Link nicht sicher. dhl-liefertermin.de ist eine andere Adresse als dhl.de. Du prüfst die Sendung über deine eigene App.",
            "feedbackWrong": "Eine ähnliche Adresse kann zu einer falschen Seite führen. Auch die passende Paket-Nummer beweist keine Echtheit. Öffne deine Paket-App selbst.",
            "remember": "Ich tippe nicht auf Links in Nachrichten. Ich öffne die App selbst.",
            "feedbackAuch": "Du kannst beim Paket-Dienst anrufen. Nimm eine bekannte Nummer. Die Nummer aus einer fraglichen Nachricht ist kein sicherer Kontakt.",
            "falleText": "Die falsche Seite sieht vertraut aus. Sie will deinen Namen und dein Passwort. Gib das Passwort hier nicht ein.",
            "falleTextFalsch": "Die falsche Seite will dein Passwort. Du kannst sie schließen. Öffne die Paket-App selbst."
          },
          "einfach": {
            "question": "Der Link sieht ähnlich wie eine DHL-Adresse aus. Was tust du?",
            "answers": [
              "Ich öffne die Paket-App selbst und nutze den Link nicht.",
              "Ich öffne den Link, weil darin DHL steht.",
              "Ich frage über die bekannte Nummer beim Paketdienst nach."
            ],
            "feedbackCorrect": "Ein bekannter Name im Link beweist keine Echtheit. dhl-liefertermin.de ist nicht dieselbe Adresse wie dhl.de. Prüfe in deiner selbst geöffneten Paket-App.",
            "feedbackWrong": "Eine ähnlich aussehende Adresse kann auf eine falsche Seite führen. Auch eine Paketnummer reicht nicht als Beweis. Prüfe die Sendung über deine eigene App.",
            "remember": "Ich nutze den Link nicht und öffne die App selbst.",
            "feedbackAuch": "Eine Rückfrage über eine bereits bekannte Nummer ist ebenfalls möglich. Nimm keine Nummer aus der fraglichen Nachricht.",
            "falleText": "Die falsche Seite sieht vertraut aus und fragt nach deinem Namen und Passwort. Gib das Passwort dort nicht ein.",
            "falleTextFalsch": "Die Seite fragt nach deinem Passwort. Schließe sie und prüfe die Sendung in der selbst geöffneten Paket-App."
          },
          "standard": {
            "question": "Der Link enthält DHL, verwendet aber eine andere Internetadresse. Wie reagierst du?",
            "answers": [
              "Ich nutze den Link nicht und prüfe in der selbst geöffneten Paket-App.",
              "Ich vertraue dem Link, weil der Name DHL enthalten ist.",
              "Ich frage über die bereits bekannte Nummer beim Paketdienst nach."
            ],
            "feedbackCorrect": "Eine ähnlich benannte Domain ist kein Echtheitsnachweis. Prüfe die Sendung unabhängig; dafür musst du nicht jede Nachahmung am Aussehen erkennen.",
            "feedbackWrong": "Ein Markenname im Link und eine passende Sendungsnummer beweisen nicht, dass die Seite zum Paketdienst gehört. Nutze die selbst geöffnete App.",
            "remember": "Ich nutze den Link nicht und öffne die App selbst.",
            "feedbackAuch": "Auch ein Anruf über eine bereits bekannte Paketdienstnummer ist ein unabhängiger Prüfweg. Übernimm keinen Kontakt aus der fraglichen Nachricht.",
            "falleText": "Die nachgeahmte Seite fordert deinen Namen und dein Passwort. Ihr vertrautes Aussehen macht sie nicht sicher.",
            "falleTextFalsch": "Die nachgeahmte Seite fragt dein Passwort ab. Schließe sie und nutze die Paket-App, die du selbst geöffnet hast."
          }
        },
        "falleText": "Die falsche Seite sieht vertraut aus. Sie will deinen Namen und dein Passwort. Gib das Passwort hier nicht ein.",
        "falleTextFalsch": "Die falsche Seite will dein Passwort. Du kannst sie schließen. Öffne die Paket-App selbst."
      },
      {
        "question": "Du hast dort nichts bestellt. Was machst du mit der Mail?",
        "answers": [
          "Ich prüfe die Bestellungen in meiner selbst geöffneten Shop-App.",
          "Ich antworte nicht. Die Bestellung passt nicht zu mir.",
          "Ich antworte auf die Mail wegen dem Betrag."
        ],
        "feedbackCorrect": "Die Nachricht passt nicht zu deinen Bestellungen. Du antwortest nicht auf die Mail. Du kannst im eigenen Konto prüfen. Oder den bekannten Shop-Kontakt nutzen.",
        "feedbackWrong": "Die Mail soll eine Antwort auslösen. Antworte nicht vorschnell. Prüfe deine Bestellungen in deinem selbst geöffneten Konto.",
        "remember": "Ich frage mich: Habe ich das wirklich bestellt?",
        "feedbackAuch": "Du kannst in deinem Konto nachsehen. Öffne die Shop-App selbst. Frage bei Bedarf über einen bekannten Kontakt nach.",
        "correctIndex": 1,
        "auchMoeglich": [
          0
        ],
        "versions": {
          "leicht": {
            "question": "Du hast dort nichts bestellt. Was machst du mit der Mail?",
            "answers": [
              "Ich prüfe die Bestellungen in meiner selbst geöffneten Shop-App.",
              "Ich antworte nicht. Die Bestellung passt nicht zu mir.",
              "Ich antworte auf die Mail wegen dem Betrag."
            ],
            "feedbackCorrect": "Die Nachricht passt nicht zu deinen Bestellungen. Du antwortest nicht auf die Mail. Du kannst im eigenen Konto prüfen. Oder den bekannten Shop-Kontakt nutzen.",
            "feedbackWrong": "Die Mail soll eine Antwort auslösen. Antworte nicht vorschnell. Prüfe deine Bestellungen in deinem selbst geöffneten Konto.",
            "remember": "Ich frage mich: Habe ich das wirklich bestellt?",
            "feedbackAuch": "Du kannst in deinem Konto nachsehen. Öffne die Shop-App selbst. Frage bei Bedarf über einen bekannten Kontakt nach.",
            "falleText": "In dieser Beispiel-Falle führt die Antwort zu einem Anruf. Der Anrufer will an dein Bank-Konto. Du beendest den Anruf. Du gibst nichts frei.",
            "falleTextFalsch": "Die Beispiel-Falle geht mit einem Anruf weiter. Du musst kein Online-Banking öffnen. Beende den Anruf. Prüfe über einen bekannten Kontakt."
          },
          "einfach": {
            "question": "Du hast dort nichts bestellt. Wie reagierst du auf diese Mail?",
            "answers": [
              "Ich prüfe die Bestellungen in meiner selbst geöffneten Shop-App.",
              "Ich antworte nicht, weil die Bestellung nicht zu mir passt.",
              "Ich antworte wegen des genannten Betrags auf die Mail."
            ],
            "feedbackCorrect": "Die Nachricht passt nicht zu deinen Bestellungen. Eine Antwort kann weitere Kontaktversuche auslösen. Prüfe bei Bedarf im eigenen Konto oder über einen bekannten Shop-Kontakt.",
            "feedbackWrong": "Antworte nicht vorschnell auf eine unerwartete Bestellmail. Prüfe die Bestellungen über dein selbst geöffnetes Konto.",
            "remember": "Ich prüfe, ob ich das wirklich bestellt habe.",
            "feedbackAuch": "Du kannst deine Bestellungen im eigenen Konto prüfen. Öffne die App selbst und nutze bei weiteren Fragen einen bekannten Kontakt zum Shop.",
            "falleText": "Im Beispiel folgt auf die Antwort ein Anruf. Die Person will dich zum Online-Banking drängen. Beende den Anruf und gib nichts frei.",
            "falleTextFalsch": "Im Beispiel kommt nach der Mail ein weiterer Kontaktversuch. Beende den Anruf und prüfe über einen bekannten Kontakt, statt das Online-Banking zu öffnen."
          },
          "standard": {
            "question": "Du hast dort nichts bestellt. Was tust du mit der angeblichen Stornierungsnachricht?",
            "answers": [
              "Ich prüfe die Bestellungen in meinem unabhängig geöffneten Shop-Konto.",
              "Ich antworte nicht auf die unpassende Bestellmail.",
              "Ich antworte wegen des genannten Betrags direkt auf die Mail."
            ],
            "feedbackCorrect": "Eine unerwartete, unpassende Bestellmail solltest du nicht durch eine vorschnelle Antwort bestätigen. Prüfe bei Bedarf unabhängig im Konto oder beim bekannten Shop-Kontakt.",
            "feedbackWrong": "Eine Antwort kann der Einstieg in weitere Kontaktversuche sein. Prüfe die behauptete Bestellung über dein unabhängig geöffnetes Konto.",
            "remember": "Ich prüfe, ob ich die behauptete Bestellung tatsächlich aufgegeben habe.",
            "feedbackAuch": "Die unabhängige Prüfung im eigenen Konto ist ebenfalls geeignet. Verwende bei weiteren Fragen einen bereits bekannten Kontakt zum Shop.",
            "falleText": "Im Beispiel führt die Antwort zu einem Anruf, der dich ins Online-Banking drängt. Beende ihn und bestätige keine Zahlung.",
            "falleTextFalsch": "Die Beispiel-Falle setzt den Kontakt am Telefon fort. Öffne auf Aufforderung des Anrufers kein Online-Banking und prüfe unabhängig über einen bekannten Kontakt."
          }
        },
        "falleText": "In dieser Beispiel-Falle führt die Antwort zu einem Anruf. Der Anrufer will an dein Bank-Konto. Du beendest den Anruf. Du gibst nichts frei.",
        "falleTextFalsch": "Die Beispiel-Falle geht mit einem Anruf weiter. Du musst kein Online-Banking öffnen. Beende den Anruf. Prüfe über einen bekannten Kontakt."
      },
      {
        "question": "In deiner selbst geöffneten Anbieter-App liegt die Rechnung für September. Was passt zur SMS?",
        "answers": [
          "Ich frage den Anbieter über die bekannte Nummer.",
          "Ich lösche die geprüfte Rechnung wegen der SMS.",
          "Die SMS passt zur Rechnung in meiner App."
        ],
        "feedbackCorrect": "Du hast die Rechnung in deiner App geprüft. Die SMS passt dazu. Kein Link und kein Druck allein beweisen noch keine Echtheit.",
        "feedbackWrong": "Die Rechnung liegt in deiner selbst geöffneten App. Du musst sie wegen dieser SMS nicht löschen. Entscheidend ist die Prüfung in deinem Konto.",
        "remember": "Ich prüfe, wer mir schreibt.",
        "feedbackAuch": "Du darfst bei deinem Anbieter nachfragen. Nutze eine bekannte Nummer. Sende keine Bank-Daten an einen ungeprüften Absender.",
        "correctIndex": 2,
        "auchMoeglich": [
          0
        ],
        "versions": {
          "leicht": {
            "question": "In deiner selbst geöffneten Anbieter-App liegt die Rechnung für September. Was passt zur SMS?",
            "answers": [
              "Ich frage den Anbieter über die bekannte Nummer.",
              "Ich lösche die geprüfte Rechnung wegen der SMS.",
              "Die SMS passt zur Rechnung in meiner App."
            ],
            "feedbackCorrect": "Du hast die Rechnung in deiner App geprüft. Die SMS passt dazu. Kein Link und kein Druck allein beweisen noch keine Echtheit.",
            "feedbackWrong": "Die Rechnung liegt in deiner selbst geöffneten App. Du musst sie wegen dieser SMS nicht löschen. Entscheidend ist die Prüfung in deinem Konto.",
            "remember": "Ich prüfe, wer mir schreibt.",
            "feedbackAuch": "Du darfst bei deinem Anbieter nachfragen. Nutze eine bekannte Nummer. Sende keine Bank-Daten an einen ungeprüften Absender."
          },
          "einfach": {
            "question": "Du hast die September-Rechnung in deiner selbst geöffneten Anbieter-App gefunden. Wie ordnest du die SMS ein?",
            "answers": [
              "Ich frage über die bekannte Nummer beim Anbieter nach.",
              "Ich lösche die unabhängig geprüfte Rechnung wegen der SMS.",
              "Die SMS passt zur Rechnung, die ich in der App geprüft habe."
            ],
            "feedbackCorrect": "Die unabhängige Prüfung in deiner App bestätigt die Angaben. Eine SMS ohne Link und Druck ist allein noch kein Beweis für den Absender.",
            "feedbackWrong": "Die Rechnung steht in deiner selbst geöffneten App. Die passende SMS ist kein Grund, sie zu löschen. Du hast die Angaben unabhängig geprüft.",
            "remember": "Ich prüfe, ob die Nachricht wirklich vom genannten Absender kommt.",
            "feedbackAuch": "Du kannst beim Anbieter nachfragen, wenn du unsicher bist. Nimm die bekannte Nummer und gib einem ungeprüften Absender keine Bankdaten."
          },
          "standard": {
            "question": "Die September-Rechnung liegt in der selbst geöffneten Anbieter-App. Was folgerst du aus der SMS?",
            "answers": [
              "Ich frage zusätzlich über die bekannte Nummer beim Anbieter nach.",
              "Ich lösche die unabhängig geprüfte Rechnung wegen dieser SMS.",
              "Die SMS passt zu der Rechnung in meinem unabhängig geöffneten Konto."
            ],
            "feedbackCorrect": "Die Angaben passen zu deiner unabhängig geprüften Rechnung. Dass die SMS keinen Link oder Zeitdruck enthält, wäre allein kein ausreichender Echtheitsnachweis.",
            "feedbackWrong": "Eine passende Erinnerung ist kein Anlass, eine unabhängig geprüfte Rechnung zu löschen. Maßgeblich ist die Prüfung in deinem eigenen Konto.",
            "remember": "Ich prüfe, ob die Nachricht wirklich vom genannten Absender stammt.",
            "feedbackAuch": "Eine unabhängige Rückfrage beim Anbieter ist ebenfalls möglich. Nutze einen bereits bekannten Kontakt und gib keinem ungeprüften Absender Bankdaten."
          }
        }
      },
      {
        "question": "Die SMS warnt vor einem Zugriff auf dein Konto. Was machst du?",
        "answers": [
          "Ich öffne die Konto-App selbst. Ich nutze den Link nicht.",
          "Ich tippe sofort auf den Link zum Stoppen.",
          "Ich frage den Dienst über einen bekannten Kontakt."
        ],
        "feedbackCorrect": "Die Nachricht macht Angst. Du nutzt den Link nicht. Du prüfst dein Konto in der selbst geöffneten App. Eine echte Warnung ist auch möglich. Du nutzt deine eigene App.",
        "feedbackWrong": "Auch ein Link zum Stoppen kann zu einer falschen Seite führen. Öffne deine Konto-App selbst. Dann prüfst du über einen eigenen Weg.",
        "remember": "Ich tippe nicht auf Links in Nachrichten. Ich öffne die App selbst.",
        "feedbackAuch": "Du kannst über einen bekannten Kontakt beim Dienst nachfragen. Nutze keinen Kontakt aus der fraglichen SMS. Gib bis zur Prüfung nichts frei.",
        "correctIndex": 0,
        "auchMoeglich": [
          2
        ],
        "versions": {
          "leicht": {
            "question": "Die SMS warnt vor einem Zugriff auf dein Konto. Was machst du?",
            "answers": [
              "Ich öffne die Konto-App selbst. Ich nutze den Link nicht.",
              "Ich tippe sofort auf den Link zum Stoppen.",
              "Ich frage den Dienst über einen bekannten Kontakt."
            ],
            "feedbackCorrect": "Die Nachricht macht Angst. Du nutzt den Link nicht. Du prüfst dein Konto in der selbst geöffneten App. Eine echte Warnung ist auch möglich. Du nutzt deine eigene App.",
            "feedbackWrong": "Auch ein Link zum Stoppen kann zu einer falschen Seite führen. Öffne deine Konto-App selbst. Dann prüfst du über einen eigenen Weg.",
            "remember": "Ich tippe nicht auf Links in Nachrichten. Ich öffne die App selbst.",
            "feedbackAuch": "Du kannst über einen bekannten Kontakt beim Dienst nachfragen. Nutze keinen Kontakt aus der fraglichen SMS. Gib bis zur Prüfung nichts frei.",
            "falleText": "Die falsche Seite will dein Passwort. Damit kann jemand in dein Konto kommen. Du gibst es hier nicht ein.",
            "falleTextFalsch": "Die falsche Seite will dein Passwort. Du kannst schließen. Prüfe die Warnung in deiner selbst geöffneten Konto-App."
          },
          "einfach": {
            "question": "Die SMS warnt vor einem neuen Zugriff auf dein Konto. Wie reagierst du?",
            "answers": [
              "Ich öffne die Konto-App selbst und nutze den Link nicht.",
              "Ich tippe sofort auf den Link, um den Zugriff zu stoppen.",
              "Ich frage den Dienst über einen bereits bekannten Kontakt."
            ],
            "feedbackCorrect": "Auch eine Warnung kann echt sein. Du prüfst sie unabhängig in der selbst geöffneten App, statt dem Link aus der beängstigenden SMS zu folgen.",
            "feedbackWrong": "Ein Link zum angeblichen Stoppen kann auf eine falsche Seite führen. Prüfe die Warnung über die eigene App und bestätige noch nichts.",
            "remember": "Bei einer beängstigenden Nachricht nutze ich den Link nicht.",
            "feedbackAuch": "Du kannst beim Dienst über einen bekannten Kontakt nachfragen. Nutze keine Nummer aus der fraglichen SMS und gib bis zur Klärung nichts frei.",
            "falleText": "Die falsche Seite fragt dein Passwort ab. Damit kann jemand Zugriff auf dein Konto erhalten. Gib es dort nicht ein.",
            "falleTextFalsch": "Die falsche Seite fragt nach deinem Passwort. Schließe sie und prüfe die Warnung in deiner selbst geöffneten Konto-App."
          },
          "standard": {
            "question": "Eine SMS meldet einen unerwarteten Kontozugriff und bietet einen Link zum Stoppen. Was tust du?",
            "answers": [
              "Ich prüfe in der selbst geöffneten Konto-App und nutze den Link nicht.",
              "Ich folge sofort dem Link, um den Zugriff zu stoppen.",
              "Ich kontaktiere den Dienst über einen bereits bekannten Weg."
            ],
            "feedbackCorrect": "Eine Sicherheitswarnung kann echt sein oder nachgeahmt werden. Prüfe sie unabhängig in deiner selbst geöffneten App und halte vorschnelle Freigaben zurück.",
            "feedbackWrong": "Der Link zum angeblichen Stoppen kann auf eine falsche Anmeldeseite führen. Prüfe über die eigene App statt über die fragliche Nachricht.",
            "remember": "Bei einer beängstigenden Nachricht nutze ich den Link nicht.",
            "feedbackAuch": "Ein bereits bekannter Kontakt zum Dienst ist ebenfalls geeignet. Übernimm keinen Kontakt aus der fraglichen SMS und bestätige bis zur Klärung nichts.",
            "falleText": "Die nachgeahmte Seite verlangt dein Passwort und kann damit einen Kontozugriff ermöglichen. Gib es dort nicht ein.",
            "falleTextFalsch": "Die falsche Seite versucht, dein Passwort abzufragen. Schließe sie und prüfe die Warnung unabhängig in deiner Konto-App."
          }
        },
        "falleText": "Die falsche Seite will dein Passwort. Damit kann jemand in dein Konto kommen. Du gibst es hier nicht ein.",
        "falleTextFalsch": "Die falsche Seite will dein Passwort. Du kannst schließen. Prüfe die Warnung in deiner selbst geöffneten Konto-App."
      },
      {
        "question": "Du willst die Meldung zu der Zahlung prüfen. Was machst du?",
        "answers": [
          "Ich rufe die Nummer aus der SMS an.",
          "Ich rufe die Nummer auf meiner Bank-Karte an.",
          "Ich öffne meine Bank-App selbst."
        ],
        "feedbackCorrect": "Du nutzt die Nummer auf deiner Bank-Karte. Die SMS allein zeigt nicht sicher: Wer hat sie geschickt? Über deinen bekannten Bank-Kontakt kannst du nachfragen.",
        "feedbackWrong": "Die Nummer in einer Nachricht kann zu jemand anderem gehören. Nimm die Nummer auf deiner Bank-Karte. Oder öffne deine Bank-App selbst.",
        "remember": "Ich rufe nur Nummern an, die ich schon habe.",
        "feedbackAuch": "Du kannst die Zahlung in deiner selbst geöffneten Bank-App prüfen. Bei einer unklaren Meldung fragst du über die bekannte Bank-Nummer nach.",
        "correctIndex": 1,
        "auchMoeglich": [
          2
        ],
        "versions": {
          "leicht": {
            "question": "Du willst die Meldung zu der Zahlung prüfen. Was machst du?",
            "answers": [
              "Ich rufe die Nummer aus der SMS an.",
              "Ich rufe die Nummer auf meiner Bank-Karte an.",
              "Ich öffne meine Bank-App selbst."
            ],
            "feedbackCorrect": "Du nutzt die Nummer auf deiner Bank-Karte. Die SMS allein zeigt nicht sicher: Wer hat sie geschickt? Über deinen bekannten Bank-Kontakt kannst du nachfragen.",
            "feedbackWrong": "Die Nummer in einer Nachricht kann zu jemand anderem gehören. Nimm die Nummer auf deiner Bank-Karte. Oder öffne deine Bank-App selbst.",
            "remember": "Ich rufe nur Nummern an, die ich schon habe.",
            "feedbackAuch": "Du kannst die Zahlung in deiner selbst geöffneten Bank-App prüfen. Bei einer unklaren Meldung fragst du über die bekannte Bank-Nummer nach.",
            "falleText": "In einer falschen SMS kann die Nummer zu einem Betrüger gehören. Auch eine freundliche Stimme beweist nichts. Du nutzt die Nummer von deiner Bank-Karte.",
            "falleTextFalsch": "Hier siehst du eine mögliche Falle bei einer falschen SMS. Eine freundliche Stimme ist kein Beweis. Prüfe über die Nummer auf deiner Bank-Karte."
          },
          "einfach": {
            "question": "Du willst die Meldung zur gestoppten Zahlung prüfen. Welchen Weg wählst du?",
            "answers": [
              "Ich rufe die Nummer aus der SMS an.",
              "Ich rufe die Nummer auf meiner Bankkarte an.",
              "Ich öffne meine Bank-App selbst und prüfe dort."
            ],
            "feedbackCorrect": "Die Nummer auf deiner Bankkarte hast du unabhängig von der SMS. Du musst am Aussehen der Nachricht nicht erkennen, wer sie geschickt hat.",
            "feedbackWrong": "Eine Nummer aus einer fraglichen SMS kann zu einer anderen Person führen. Verwende die Nummer auf deiner Bankkarte oder prüfe in der eigenen App.",
            "remember": "Ich nutze eine Banknummer, die ich bereits kenne.",
            "feedbackAuch": "Du kannst zunächst in deiner selbst geöffneten Bank-App nachsehen. Bleibt die Meldung unklar, fragst du über die bekannte Banknummer nach.",
            "falleText": "Bei einer falschen SMS kann die Nummer zu einem Betrüger führen. Eine freundlich klingende Stimme beweist keine Echtheit. Nutze die Nummer auf deiner Bankkarte.",
            "falleTextFalsch": "Das Beispiel zeigt, wie eine falsche SMS weitergehen kann. Auch eine freundliche Stimme reicht nicht. Prüfe über die Nummer auf deiner Bankkarte."
          },
          "standard": {
            "question": "Du möchtest die angeblich gestoppte Zahlung prüfen. Wie kontaktierst du deine Bank?",
            "answers": [
              "Ich rufe die Nummer aus der Nachricht an.",
              "Ich nutze die Nummer auf meiner Bankkarte.",
              "Ich prüfe zuerst in meiner selbst geöffneten Bank-App."
            ],
            "feedbackCorrect": "Die unabhängig bekannte Banknummer ist ein geeigneter Prüfweg. Du musst die Nachricht dafür nicht allein anhand ihres Aussehens als echt oder falsch erkennen.",
            "feedbackWrong": "Eine Rückrufnummer in einer fraglichen SMS ist kein unabhängiger Kontakt. Nutze deine Bankkarte oder die bereits eingerichtete App.",
            "remember": "Ich nutze eine Banknummer, die ich bereits kenne.",
            "feedbackAuch": "Die selbst geöffnete Bank-App ist ebenfalls ein unabhängiger Prüfweg. Bei Unklarheiten wendest du dich über die bekannte Nummer an deine Bank.",
            "falleText": "Die Beispiel-Falle zeigt, wohin eine Nummer aus einer falschen SMS führen kann. Eine freundlich klingende Stimme ersetzt keinen unabhängigen Bankkontakt.",
            "falleTextFalsch": "Bei einer nachgeahmten SMS kann die angegebene Nummer zu einem Betrüger führen. Nutze die unabhängig bekannte Nummer auf deiner Bankkarte."
          }
        },
        "falleText": "In einer falschen SMS kann die Nummer zu einem Betrüger gehören. Auch eine freundliche Stimme beweist nichts. Du nutzt die Nummer von deiner Bank-Karte.",
        "falleTextFalsch": "Hier siehst du eine mögliche Falle bei einer falschen SMS. Eine freundliche Stimme ist kein Beweis. Prüfe über die Nummer auf deiner Bank-Karte."
      },
      {
        "question": "Die SMS will deine Bank-Anmeldung bestätigen. Was machst du?",
        "answers": [
          "Ich frage meine Bank über die Nummer auf meiner Bank-Karte.",
          "Ich öffne den Link und bestätige dort.",
          "Ich öffne meine Bank-App selbst."
        ],
        "feedbackCorrect": "Du öffnest die Bank-App selbst. Du musst eine gut nachgemachte Seite nicht erkennen. Den Link aus der SMS brauchst du nicht.",
        "feedbackWrong": "Eine nachgemachte Bank-Seite kann echt aussehen. Nutze den Link nicht. Öffne deine Bank-App selbst. Gib auf der fremden Seite keine geheimen Codes ein.",
        "remember": "Ich muss den Trick nicht erkennen. Ich öffne die App selbst.",
        "feedbackAuch": "Du kannst deine Bank über die Nummer auf deiner Bank-Karte fragen. Bis dahin bestätigst du nichts über den Link aus der SMS.",
        "correctIndex": 2,
        "auchMoeglich": [
          0
        ],
        "versions": {
          "leicht": {
            "question": "Die SMS will deine Bank-Anmeldung bestätigen. Was machst du?",
            "answers": [
              "Ich frage meine Bank über die Nummer auf meiner Bank-Karte.",
              "Ich öffne den Link und bestätige dort.",
              "Ich öffne meine Bank-App selbst."
            ],
            "feedbackCorrect": "Du öffnest die Bank-App selbst. Du musst eine gut nachgemachte Seite nicht erkennen. Den Link aus der SMS brauchst du nicht.",
            "feedbackWrong": "Eine nachgemachte Bank-Seite kann echt aussehen. Nutze den Link nicht. Öffne deine Bank-App selbst. Gib auf der fremden Seite keine geheimen Codes ein.",
            "remember": "Ich muss den Trick nicht erkennen. Ich öffne die App selbst.",
            "feedbackAuch": "Du kannst deine Bank über die Nummer auf deiner Bank-Karte fragen. Bis dahin bestätigst du nichts über den Link aus der SMS.",
            "falleText": "Die falsche Seite will PIN und TAN. Das sind geheime Bank-Codes. Gib sie hier nicht ein. Du kannst schließen.",
            "falleTextFalsch": "Die falsche Seite fragt nach geheimen Bank-Codes. Du gibst nichts ein. Du prüfst über deine Bank-App oder die bekannte Bank-Nummer."
          },
          "einfach": {
            "question": "Die SMS fordert eine Bestätigung deiner Bank-Anmeldung. Wie gehst du vor?",
            "answers": [
              "Ich frage über die Nummer auf meiner Bankkarte bei der Bank nach.",
              "Ich öffne den Link und bestätige die Anmeldung dort.",
              "Ich öffne meine bereits eingerichtete Bank-App selbst."
            ],
            "feedbackCorrect": "Du öffnest deine Bank-App selbst und musst eine gut nachgemachte Seite nicht am Aussehen erkennen. Nutze den Link aus der SMS nicht.",
            "feedbackWrong": "Eine falsche Bankseite kann täuschend echt aussehen. Öffne die eigene App und gib auf der verlinkten Seite keine geheimen Codes ein.",
            "remember": "Ich muss die Fälschung nicht erkennen und öffne die App selbst.",
            "feedbackAuch": "Eine Rückfrage über die Nummer auf deiner Bankkarte ist ebenfalls möglich. Bestätige bis zur Klärung nichts über den Link aus der SMS.",
            "falleText": "Die falsche Seite fragt nach PIN und TAN, deinen geheimen Bankcodes. Gib sie dort nicht ein und schließe die Seite.",
            "falleTextFalsch": "Auf der falschen Seite sollst du geheime Bankcodes eingeben. Tue das nicht und prüfe über deine eigene App oder die bekannte Banknummer."
          },
          "standard": {
            "question": "Eine SMS fordert die Bestätigung deiner Bank-Anmeldung über einen Link. Was tust du?",
            "answers": [
              "Ich frage über die Nummer auf meiner Bankkarte bei der Bank nach.",
              "Ich folge dem Link und bestätige dort meine Anmeldung.",
              "Ich öffne die bereits eingerichtete Bank-App selbst."
            ],
            "feedbackCorrect": "Die selbst geöffnete App umgeht eine mögliche nachgeahmte Anmeldeseite. Du brauchst eine Fälschung nicht allein anhand des Designs zu erkennen.",
            "feedbackWrong": "Eine nachgeahmte Bankseite kann überzeugend aussehen. Nutze die eigene App und gib auf der Seite aus der fraglichen SMS keine geheimen Codes ein.",
            "remember": "Ich muss die Fälschung nicht erkennen und öffne die App selbst.",
            "feedbackAuch": "Du kannst die Aufforderung auch über die unabhängig bekannte Nummer auf deiner Bankkarte klären. Bestätige bis dahin nichts über den SMS-Link.",
            "falleText": "Die nachgeahmte Seite versucht, PIN und TAN abzufragen. Gib keine geheimen Bankcodes ein und schließe sie.",
            "falleTextFalsch": "Die falsche Seite verlangt geheime Bankcodes. Halte sie zurück und prüfe die Aufforderung über einen unabhängigen Bankkontakt."
          }
        },
        "falleText": "Die falsche Seite will PIN und TAN. Das sind geheime Bank-Codes. Gib sie hier nicht ein. Du kannst schließen.",
        "falleTextFalsch": "Die falsche Seite fragt nach geheimen Bank-Codes. Du gibst nichts ein. Du prüfst über deine Bank-App oder die bekannte Bank-Nummer."
      },
      {
        "question": "Eine neue Nummer sagt: Ich bin es. Wie prüfst du die Person?",
        "answers": [
          "Ich rufe die Person über ihre alte Nummer an.",
          "Ich frage die Person bei unserem nächsten Treffen.",
          "Ich frage über die neue Nummer nach dem Namen."
        ],
        "feedbackCorrect": "Du rufst die bekannte Nummer an. Dann fragst du nach der neuen Nummer. Ein bekannter Name in einem Chat reicht nicht.",
        "feedbackWrong": "Eine andere Person kann den Namen kennen. Frag über den Kontakt nach. Du kennst ihn schon. Gib bis dahin kein Geld und keine privaten Daten weiter.",
        "remember": "Neue Nummer? Ich rufe zuerst die alte an.",
        "feedbackAuch": "Du kannst bis zu einem persönlichen Treffen warten. Bis zur Prüfung sendest du kein Geld und keine privaten Daten an die neue Nummer.",
        "correctIndex": 0,
        "auchMoeglich": [
          1
        ],
        "versions": {
          "leicht": {
            "question": "Eine neue Nummer sagt: Ich bin es. Wie prüfst du die Person?",
            "answers": [
              "Ich rufe die Person über ihre alte Nummer an.",
              "Ich frage die Person bei unserem nächsten Treffen.",
              "Ich frage über die neue Nummer nach dem Namen."
            ],
            "feedbackCorrect": "Du rufst die bekannte Nummer an. Dann fragst du nach der neuen Nummer. Ein bekannter Name in einem Chat reicht nicht.",
            "feedbackWrong": "Eine andere Person kann den Namen kennen. Frag über den Kontakt nach. Du kennst ihn schon. Gib bis dahin kein Geld und keine privaten Daten weiter.",
            "remember": "Neue Nummer? Ich rufe zuerst die alte an.",
            "feedbackAuch": "Du kannst bis zu einem persönlichen Treffen warten. Bis zur Prüfung sendest du kein Geld und keine privaten Daten an die neue Nummer.",
            "falleText": "In diesem Beispiel kommt nach der freundlichen Nachricht eine Geld-Bitte. Du zahlst noch nichts. Du prüfst bei der bekannten Person nach.",
            "falleTextFalsch": "Die Beispiel-Falle beginnt mit einem freundlichen Chat. Dann kommt eine Geld-Bitte. Du kannst stoppen und über die bekannte Nummer nachfragen."
          },
          "einfach": {
            "question": "Eine unbekannte Nummer schreibt Ich bin es. Wie prüfst du, wer es ist?",
            "answers": [
              "Ich rufe über die schon bekannte Nummer der Person an.",
              "Ich frage die Person bei unserem nächsten persönlichen Treffen.",
              "Ich frage im Chat mit der neuen Nummer nach dem Namen."
            ],
            "feedbackCorrect": "Über die schon bekannte Nummer kannst du unabhängig nachfragen. Ein richtiger Name im neuen Chat allein beweist nicht, wer schreibt.",
            "feedbackWrong": "Ein Name lässt sich herausfinden. Prüfe über einen bereits bekannten Kontakt und sende bis dahin weder Geld noch private Daten an die neue Nummer.",
            "remember": "Bei einer neuen Nummer frage ich über die alte nach.",
            "feedbackAuch": "Du kannst die Frage bis zum persönlichen Treffen offenlassen. Sende bis zur Klärung kein Geld und keine privaten Daten an die neue Nummer.",
            "falleText": "Im Beispiel folgt auf die freundliche Nachricht eine Geldbitte. Zahle noch nichts und frage über die bekannte Nummer der Person nach.",
            "falleTextFalsch": "Die Beispiel-Falle beginnt freundlich und geht mit einer Geldforderung weiter. Du kannst stoppen und die Bitte unabhängig prüfen."
          },
          "standard": {
            "question": "Eine unbekannte Nummer behauptet, eine bekannte Person zu sein. Wie überprüfst du das?",
            "answers": [
              "Ich rufe die bereits bekannte Nummer dieser Person an.",
              "Ich kläre die neue Nummer beim nächsten persönlichen Treffen.",
              "Ich lasse mir im Chat mit der neuen Nummer ihren Namen nennen."
            ],
            "feedbackCorrect": "Der Rückruf über den bekannten Kontakt ist eine unabhängige Prüfung. Ein passender Name im neuen Chat reicht nicht aus.",
            "feedbackWrong": "Auch eine andere Person kann den Namen kennen. Prüfe die Behauptung unabhängig und halte Geld sowie private Daten bis zur Klärung zurück.",
            "remember": "Eine neue Nummer prüfe ich über den bereits bekannten Kontakt.",
            "feedbackAuch": "Du kannst bis zum persönlichen Treffen warten, ohne auf eine mögliche Bitte einzugehen. Sende bis dahin weder Geld noch private Daten an die neue Nummer.",
            "falleText": "Im Beispiel folgt auf den freundlichen Einstieg eine Geldforderung. Halte die Zahlung zurück und prüfe über den bekannten Kontakt.",
            "falleTextFalsch": "Die Beispiel-Falle führt vom vertraut klingenden Chat zu einer Geldbitte. Stoppe und kläre die Anfrage über den bereits bekannten Kontakt."
          }
        },
        "falleText": "In diesem Beispiel kommt nach der freundlichen Nachricht eine Geld-Bitte. Du zahlst noch nichts. Du prüfst bei der bekannten Person nach.",
        "falleTextFalsch": "Die Beispiel-Falle beginnt mit einem freundlichen Chat. Dann kommt eine Geld-Bitte. Du kannst stoppen und über die bekannte Nummer nachfragen."
      },
      {
        "question": "Der Anrufer fragt nach deinem geheimen Code. Was machst du?",
        "answers": [
          "Ich sage ihm den Code.",
          "Ich sage den Code nicht. Ich beende den Anruf.",
          "Ich frage ihn zuerst nach seinem Namen. Dann sage ich den Code."
        ],
        "feedbackCorrect": "Du gibst den Code nicht weiter. Der Anrufer kann sich damit Zugang holen. Ein Name oder eine freundliche Stimme ändern daran nichts.",
        "feedbackWrong": "Du sagst einen geheimen Code niemandem. Auch ein richtiger Name beweist keine Echtheit. Beende den Anruf. Prüfe bei Bedarf über die bekannte Bank-Nummer.",
        "remember": "Meinen Code sage ich niemandem. Auch nicht am Telefon.",
        "correctIndex": 1,
        "versions": {
          "leicht": {
            "question": "Der Anrufer fragt nach deinem geheimen Code. Was machst du?",
            "answers": [
              "Ich sage ihm den Code.",
              "Ich sage den Code nicht. Ich beende den Anruf.",
              "Ich frage ihn zuerst nach seinem Namen. Dann sage ich den Code."
            ],
            "feedbackCorrect": "Du gibst den Code nicht weiter. Der Anrufer kann sich damit Zugang holen. Ein Name oder eine freundliche Stimme ändern daran nichts.",
            "feedbackWrong": "Du sagst einen geheimen Code niemandem. Auch ein richtiger Name beweist keine Echtheit. Beende den Anruf. Prüfe bei Bedarf über die bekannte Bank-Nummer.",
            "remember": "Meinen Code sage ich niemandem. Auch nicht am Telefon.",
            "falleText": "Das Beispiel zeigt: Ein geheimer Code kann Zugang zu deinem Konto geben. Du sagst ihn niemandem. Auch nicht am Telefon.",
            "falleTextFalsch": "Ein weitergegebener Code kann einen Zugriff erlauben. Du musst jetzt nichts mehr bestätigen. Du hast schon einen Code genannt? Dann kontaktiere deine Bank sofort über die bekannte Nummer."
          },
          "einfach": {
            "question": "Ein angeblicher Bankmitarbeiter fragt am Telefon nach dem geheimen Code. Was tust du?",
            "answers": [
              "Ich nenne ihm den Code.",
              "Ich gebe den Code nicht weiter und beende den Anruf.",
              "Ich frage nach seinem Namen und nenne dann den Code."
            ],
            "feedbackCorrect": "Ein geheimer Code kann Zugang zu deinem Konto ermöglichen. Gib ihn dem Anrufer nicht weiter, auch wenn er sich als Bankmitarbeiter vorstellt.",
            "feedbackWrong": "Ein passender Name bestätigt den Anrufer nicht. Beende den Anruf, ohne den Code zu nennen. Bei Unsicherheit fragst du über die bekannte Banknummer nach.",
            "remember": "Meinen geheimen Code sage ich niemandem, auch nicht am Telefon.",
            "falleText": "Das Beispiel zeigt einen möglichen Zugriff mit einem weitergegebenen Code. Halte deinen geheimen Code zurück, auch am Telefon.",
            "falleTextFalsch": "Ein weitergegebener Code kann Zugriff ermöglichen. Bestätige nichts Weiteres. Wenn du den Code schon genannt hast, kontaktiere sofort deine Bank über die bekannte Nummer."
          },
          "standard": {
            "question": "Der Anrufer behauptet, von deiner Bank zu sein, und verlangt den Sicherheitscode. Was tust du?",
            "answers": [
              "Ich gebe ihm den angeforderten Code.",
              "Ich gebe den Code nicht weiter und beende den Anruf.",
              "Ich lasse mir seinen Namen nennen und gebe dann den Code weiter."
            ],
            "feedbackCorrect": "Der Code kann einen Kontozugriff oder eine Freigabe ermöglichen. Gib ihn keiner anderen Person weiter, auch nicht einem angeblichen Bankmitarbeiter.",
            "feedbackWrong": "Ein Name ist kein Nachweis für die Identität des Anrufers. Beende das Gespräch, halte den Code geheim und frage bei Bedarf über den bekannten Bankkontakt nach.",
            "remember": "Meinen Sicherheitscode gebe ich niemandem weiter, auch nicht am Telefon.",
            "falleText": "Die Beispiel-Falle zeigt einen möglichen Kontozugriff mit einem weitergegebenen Code. Halte Sicherheitscodes auch am Telefon geheim.",
            "falleTextFalsch": "Ein weitergegebener Code kann einen Zugriff oder eine Freigabe ermöglichen. Bestätige nichts Weiteres und kontaktiere bei bereits erfolgter Weitergabe sofort den bekannten Bankkontakt."
          }
        },
        "falleText": "Das Beispiel zeigt: Ein geheimer Code kann Zugang zu deinem Konto geben. Du sagst ihn niemandem. Auch nicht am Telefon.",
        "falleTextFalsch": "Ein weitergegebener Code kann einen Zugriff erlauben. Du musst jetzt nichts mehr bestätigen. Du hast schon einen Code genannt? Dann kontaktiere deine Bank sofort über die bekannte Nummer."
      },
      {
        "question": "Eine unbekannte Nummer bittet um einen Code. Was machst du?",
        "answers": [
          "Ich sende den Code zurück. Er kam angeblich aus Versehen.",
          "Ich sende nur einen Teil vom Code.",
          "Ich leite den Code nicht weiter."
        ],
        "feedbackCorrect": "Du gibst den Code nicht weiter. Er kann zu deinem Konto gehören. Eine fremde Person bekommt auch keinen Teil davon.",
        "feedbackWrong": "Ein Code kann auch durch einen Fehler bei dir ankommen. Trotzdem gibst du ihn nicht weiter. Du weißt nicht sicher: Wofür ist der Code?",
        "remember": "Meine Codes sage ich niemandem. Auch nicht am Telefon.",
        "correctIndex": 2,
        "versions": {
          "leicht": {
            "question": "Eine unbekannte Nummer bittet um einen Code. Was machst du?",
            "answers": [
              "Ich sende den Code zurück. Er kam angeblich aus Versehen.",
              "Ich sende nur einen Teil vom Code.",
              "Ich leite den Code nicht weiter."
            ],
            "feedbackCorrect": "Du gibst den Code nicht weiter. Er kann zu deinem Konto gehören. Eine fremde Person bekommt auch keinen Teil davon.",
            "feedbackWrong": "Ein Code kann auch durch einen Fehler bei dir ankommen. Trotzdem gibst du ihn nicht weiter. Du weißt nicht sicher: Wofür ist der Code?",
            "remember": "Meine Codes sage ich niemandem. Auch nicht am Telefon.",
            "falleText": "In dieser Beispiel-Falle gehört der Code zu deinem Konto. Die andere Person nutzt ihn zur Anmeldung. Du leitest den Code nicht weiter.",
            "falleTextFalsch": "Das Beispiel zeigt eine mögliche Anmeldung mit deinem Code. Du gibst keine weiteren Codes weiter. Du hast einen Code gesendet? Dann prüfe dein Konto über die selbst geöffnete App."
          },
          "einfach": {
            "question": "Eine unbekannte Nummer behauptet, der Code sei aus Versehen bei dir angekommen. Was tust du?",
            "answers": [
              "Ich leite den angeblich versehentlich erhaltenen Code weiter.",
              "Ich sende nur einen Teil des Codes.",
              "Ich leite den Code nicht weiter."
            ],
            "feedbackCorrect": "Du weißt nicht sicher, wofür der Code gedacht ist. Er kann Zugang zu deinem Konto ermöglichen. Gib deshalb auch keinen Teil davon weiter.",
            "feedbackWrong": "Ein Code kann zwar durch einen Fehler bei dir ankommen. Die fremde Bitte ist trotzdem kein Grund, ihn weiterzugeben. Halte den ganzen Code geheim.",
            "remember": "Meine geheimen Codes gebe ich niemandem weiter.",
            "falleText": "Im Beispiel gehört der Code zum eigenen Konto und ermöglicht einer anderen Person die Anmeldung. Leite den Code nicht weiter.",
            "falleTextFalsch": "Ein weitergegebener Code kann eine Anmeldung ermöglichen. Gib keine weiteren Codes heraus. Wenn du schon einen gesendet hast, prüfe dein Konto in der selbst geöffneten App."
          },
          "standard": {
            "question": "Eine fremde Nummer bittet um Weiterleitung eines angeblich fehlgeleiteten Codes. Wie reagierst du?",
            "answers": [
              "Ich leite den angeblich fehlgeleiteten Code an die Person weiter.",
              "Ich gebe nur einen Teil des Codes weiter.",
              "Ich leite den Code nicht weiter."
            ],
            "feedbackCorrect": "Du kannst den Zweck der fremden Anfrage nicht verlässlich feststellen. Der Code kann einen Kontozugriff ermöglichen; halte ihn vollständig zurück.",
            "feedbackWrong": "Auch ein tatsächlich fehlgeleiteter Code sollte nicht an einen ungeprüften Kontakt weitergegeben werden. Gib weder den ganzen Code noch Teile davon weiter.",
            "remember": "Meine Sicherheitscodes gebe ich niemandem weiter.",
            "falleText": "Die Beispiel-Falle zeigt eine Anmeldung im eigenen Konto mit dem weitergegebenen Code. Halte solche Codes zurück.",
            "falleTextFalsch": "Der Code kann eine Anmeldung ermöglichen. Gib keine weiteren Codes heraus und prüfe bei bereits erfolgter Weitergabe dein Konto über die unabhängig geöffnete App."
          }
        },
        "falleText": "In dieser Beispiel-Falle gehört der Code zu deinem Konto. Die andere Person nutzt ihn zur Anmeldung. Du leitest den Code nicht weiter.",
        "falleTextFalsch": "Das Beispiel zeigt eine mögliche Anmeldung mit deinem Code. Du gibst keine weiteren Codes weiter. Du hast einen Code gesendet? Dann prüfe dein Konto über die selbst geöffnete App."
      },
      {
        "question": "Die SMS drängt dich zu neuen Bank-Daten. Was machst du?",
        "answers": [
          "Ich sende keine Bank-Daten. Ich öffne die Anbieter-App selbst.",
          "Ich sende die Bank-Daten sofort per SMS.",
          "Ich frage über einen bekannten Kontakt beim Anbieter nach."
        ],
        "feedbackCorrect": "Du sendest nichts vorschnell. Öffne deine Anbieter-App selbst. Dort kannst du dein Konto prüfen. Die Drohung ist kein Grund für eine schnelle Freigabe.",
        "feedbackWrong": "Bei Druck gibst du keine Bank-Daten vorschnell weiter. Prüfe die Meldung in deinem selbst geöffneten Konto. Oder nutze einen bekannten Anbieter-Kontakt.",
        "remember": "Druck oder Angst? Dann mache ich erst Stopp.",
        "feedbackAuch": "Du darfst über einen bekannten Kontakt nachfragen. Nutze keine Nummer aus einer fraglichen SMS. Gib bis zur Prüfung keine neuen Bank-Daten weiter.",
        "correctIndex": 0,
        "auchMoeglich": [
          2
        ],
        "versions": {
          "leicht": {
            "question": "Die SMS drängt dich zu neuen Bank-Daten. Was machst du?",
            "answers": [
              "Ich sende keine Bank-Daten. Ich öffne die Anbieter-App selbst.",
              "Ich sende die Bank-Daten sofort per SMS.",
              "Ich frage über einen bekannten Kontakt beim Anbieter nach."
            ],
            "feedbackCorrect": "Du sendest nichts vorschnell. Öffne deine Anbieter-App selbst. Dort kannst du dein Konto prüfen. Die Drohung ist kein Grund für eine schnelle Freigabe.",
            "feedbackWrong": "Bei Druck gibst du keine Bank-Daten vorschnell weiter. Prüfe die Meldung in deinem selbst geöffneten Konto. Oder nutze einen bekannten Anbieter-Kontakt.",
            "remember": "Druck oder Angst? Dann mache ich erst Stopp.",
            "feedbackAuch": "Du darfst über einen bekannten Kontakt nachfragen. Nutze keine Nummer aus einer fraglichen SMS. Gib bis zur Prüfung keine neuen Bank-Daten weiter.",
            "falleText": "Die falsche Seite will deine Bank-Daten. Sie gehört nicht zum Anbieter. Gib die Daten dort nicht ein.",
            "falleTextFalsch": "Die falsche Seite fragt nach Bank-Daten. Du kannst sie schließen. Prüfe die Meldung in deinem selbst geöffneten Konto."
          },
          "einfach": {
            "question": "Die SMS drängt dich, sofort Bankdaten zu ändern. Wie reagierst du?",
            "answers": [
              "Ich sende nichts und prüfe in der selbst geöffneten Anbieter-App.",
              "Ich schicke die Bankdaten sofort als Antwort auf die SMS.",
              "Ich frage beim Anbieter über einen bekannten Kontakt nach."
            ],
            "feedbackCorrect": "Du hältst die Daten zurück und prüfst dein Konto unabhängig. Die Drohung ist kein Grund, vorschnell etwas freizugeben.",
            "feedbackWrong": "Gib bei Druck keine Bankdaten vorschnell weiter. Prüfe die Meldung über das selbst geöffnete Konto oder einen bekannten Anbieter-Kontakt.",
            "remember": "Bei Druck oder Angst halte ich zuerst an.",
            "feedbackAuch": "Ein bereits bekannter Kontakt zum Anbieter ist ebenfalls geeignet. Übernimm keinen Kontakt aus der fraglichen SMS und halte die Daten bis zur Prüfung zurück.",
            "falleText": "Die falsche Seite fragt nach deinen Bankdaten und gehört nicht zum Anbieter. Gib dort keine Daten ein.",
            "falleTextFalsch": "Die falsche Seite will deine Bankdaten. Schließe sie und prüfe die Meldung in deinem selbst geöffneten Konto."
          },
          "standard": {
            "question": "Eine SMS droht mit Kündigung und verlangt sofort aktualisierte Bankdaten. Was tust du?",
            "answers": [
              "Ich sende nichts und prüfe in der selbst geöffneten Anbieter-App.",
              "Ich sende meine Bankdaten sofort als Antwort auf die SMS.",
              "Ich kläre die Meldung über einen bereits bekannten Anbieter-Kontakt."
            ],
            "feedbackCorrect": "Du unterbrichst den Zeitdruck und prüfst unabhängig in deinem Konto. Gib neue Bankdaten nicht wegen einer Drohung vorschnell frei.",
            "feedbackWrong": "Die Drohung rechtfertigt keine vorschnelle Datenweitergabe. Prüfe die Anforderung über dein unabhängig geöffnetes Konto oder einen bekannten Kontakt.",
            "remember": "Bei Druck oder Angst halte ich zuerst an und prüfe in Ruhe.",
            "feedbackAuch": "Der bereits bekannte Kontakt zum Anbieter ist ebenfalls ein sicherer Prüfweg. Nutze keinen Kontakt aus der fraglichen Nachricht und halte neue Daten bis zur Klärung zurück.",
            "falleText": "Die nachgeahmte Seite fragt Bankdaten ab und gehört nicht zum Anbieter. Gib dort keine Angaben ein.",
            "falleTextFalsch": "Die falsche Seite verlangt Bankdaten. Schließe sie und prüfe die Meldung unabhängig in deinem eigenen Konto."
          }
        },
        "falleText": "Die falsche Seite will deine Bank-Daten. Sie gehört nicht zum Anbieter. Gib die Daten dort nicht ein.",
        "falleTextFalsch": "Die falsche Seite fragt nach Bank-Daten. Du kannst sie schließen. Prüfe die Meldung in deinem selbst geöffneten Konto."
      }
    ],
    "versions": {
      "einfach": {
        "titel": "Nachrichten prüfen",
        "einstieg": [
          "Du bekommst verschiedene Nachrichten und prüfst, ob sie zu deinem Alltag passen.",
          "Danach entscheidest du, was du sicher selbst tun kannst."
        ],
        "abschluss": "Du hast Nachrichten geprüft und sichere Wege gewählt. Bei Unsicherheit kannst du über einen bekannten Kontakt nachfragen."
      },
      "standard": {
        "titel": "Nachrichten sicher einordnen",
        "einstieg": [
          "Du prüfst unerwartete Nachrichten und entscheidest über einen sicheren nächsten Schritt.",
          "Dafür musst du nicht jede Fälschung allein am Aussehen erkennen."
        ],
        "abschluss": "Du hast Nachrichten geprüft und sichere Schritte gewählt. Bei Unsicherheit klärst du die Anfrage über einen unabhängigen, bekannten Weg."
      }
    },
    "stufen": {
      "1": {
        "einstieg": [
          "Du bekommst 4 Nachrichten.",
          "Du prüfst und entscheidest."
        ],
        "versions": {
          "einfach": {
            "einstieg": [
              "Du bekommst vier Nachrichten und entscheidest, wie du sie prüfst."
            ]
          },
          "standard": {
            "einstieg": [
              "Du prüfst vier Nachrichten und wählst einen sicheren nächsten Schritt."
            ]
          }
        }
      },
      "2": {
        "einstieg": [
          "Du bekommst weitere Nachrichten.",
          "Du prüfst über einen eigenen Weg."
        ],
        "versions": {
          "einfach": {
            "einstieg": [
              "Du bekommst weitere Nachrichten und prüfst sie über einen selbst gewählten Weg."
            ]
          },
          "standard": {
            "einstieg": [
              "Weitere Nachrichten prüfst du über einen unabhängig gewählten Weg."
            ]
          }
        }
      },
      "3": {
        "einstieg": [
          "Eine Nachricht kann echt oder falsch aussehen.",
          "Du nutzt einen bekannten Kontakt.",
          "Oder du öffnest deine App selbst."
        ],
        "versions": {
          "einfach": {
            "einstieg": [
              "Am Aussehen allein erkennst du nicht jede falsche Nachricht.",
              "Du prüfst über einen bekannten Kontakt oder öffnest deine App selbst."
            ]
          },
          "standard": {
            "einstieg": [
              "Das Aussehen allein beweist die Echtheit einer Nachricht nicht.",
              "Du prüfst über einen bereits bekannten Kontakt oder eine selbst geöffnete App."
            ]
          }
        }
      }
    }
  },
  "datenschutz": {
    "titel": "Wer sieht deine Daten?",
    "typ": "einstellungen",
    "kanal": "Deine Daten",
    "einstieg": [
      "Auf dem Handy entscheidest du oft:",
      "Welche Daten gebe ich weiter?",
      "Und wer sieht sie?"
    ],
    "szenen": [
      {
        "inhalt": [
          {
            "typ": "hinweis",
            "text": "Wähle deinen Spieler-Namen. Alle Spieler sehen ihn."
          }
        ],
        "frage": {
          "situation": "Du hast ein neues Spiel auf deinem Handy. Du willst mit deinen Freunden spielen.",
          "question": "Welchen Namen nimmst du?",
          "answers": [
            "Meinen ganzen Namen. Also Vor-Name und Nach-Name.",
            "Meinen Spitz-Namen. Meine Freunde kennen ihn.",
            "Meinen Vor-Namen und mein Geburts-Jahr."
          ],
          "feedbackCorrect": "Deine Freunde erkennen dich an deinem Spitz-Namen. Du zeigst deinen ganzen Namen nicht allen Spielern.",
          "feedbackWrong": "Alle Spieler sehen den Namen. Auch fremde Menschen. Dein ganzer Name und dein Geburts-Jahr sind private Daten. Fremde Spieler brauchen diese Daten nicht.",
          "remember": "Ich wähle aus: Wer sieht meine Daten?",
          "pictogram": "pikto-lock",
          "correctIndex": 1,
          "versions": {
            "leicht": {
              "situation": "Du hast ein neues Spiel auf deinem Handy. Du willst mit deinen Freunden spielen.",
              "question": "Welchen Namen nimmst du?",
              "answers": [
                "Meinen ganzen Namen. Also Vor-Name und Nach-Name.",
                "Meinen Spitz-Namen. Meine Freunde kennen ihn.",
                "Meinen Vor-Namen und mein Geburts-Jahr."
              ],
              "feedbackCorrect": "Deine Freunde erkennen dich an deinem Spitz-Namen. Du zeigst deinen ganzen Namen nicht allen Spielern.",
              "feedbackWrong": "Alle Spieler sehen den Namen. Auch fremde Menschen. Dein ganzer Name und dein Geburts-Jahr sind private Daten. Fremde Spieler brauchen diese Daten nicht.",
              "remember": "Ich wähle aus: Wer sieht meine Daten?"
            },
            "einfach": {
              "situation": "Du hast ein neues Spiel auf dein Handy geladen und willst mit deinen Freunden spielen.",
              "question": "Welchen Namen wählst du?",
              "answers": [
                "Meinen vollen Namen, also Vor- und Nachnamen.",
                "Meinen Spitznamen, den meine Freunde kennen.",
                "Meinen Vornamen zusammen mit meinem Geburtsjahr."
              ],
              "feedbackCorrect": "Deine Freunde erkennen dich an deinem Spitznamen, ohne dass alle Spieler deinen vollen Namen sehen.",
              "feedbackWrong": "Den Namen sehen alle Spieler, auch Fremde. Dein voller Name und dein Geburtsjahr sind private Angaben, die sie nicht brauchen.",
              "remember": "Ich wähle selbst aus, wer meine Daten sieht."
            },
            "standard": {
              "situation": "Du hast dir ein Spiel heruntergeladen und möchtest mit deinen Freunden zusammen spielen.",
              "question": "Welchen Namen wählst du?",
              "answers": [
                "Meinen vollständigen Vor- und Nachnamen.",
                "Meinen Spitznamen, den meine Freunde kennen.",
                "Meinen Vornamen kombiniert mit meinem Geburtsjahr."
              ],
              "feedbackCorrect": "Deine Freunde können dich am Spitznamen erkennen, ohne dass du deinen vollständigen Namen für alle sichtbar machst.",
              "feedbackWrong": "Der Spielername ist auch für fremde Mitspielende sichtbar. Dein vollständiger Name und dein Geburtsjahr sind persönliche Angaben, die sie nicht brauchen.",
              "remember": "Ich lege selbst fest, wer meine Daten sieht."
            }
          }
        }
      },
      {
        "inhalt": [
          {
            "typ": "nachricht",
            "von": "Trainer Uwe · Fußball (24)",
            "text": "Hallo zusammen! Schreibt mir bitte alle eure Adresse hier in die Gruppe. Dann schick ich euch die Einladung zum Grillfest.",
            "zeit": "jetzt"
          }
        ],
        "frage": {
          "situation": "Du spielst Fußball in einem Verein. Bald gibt es ein Grill-Fest. Der Trainer schreibt in die Chat-Gruppe.",
          "question": "Was machst du?",
          "answers": [
            "Ich schreibe meine Adresse in die Gruppe.",
            "Ich frage den Trainer: Wofür brauchst du die Adresse?",
            "Ich frage erst: Kommt die Einladung mit der Post? Nur dafür schicke ich meine Adresse an den Trainer."
          ],
          "feedbackCorrect": "Für eine Einladung im Chat braucht der Trainer keine Adresse. Vielleicht will er eine Karte mit der Post schicken. Du fragst erst nach. Dann entscheidest du.",
          "feedbackWrong": "In der Gruppe sind 24 Menschen. Alle sehen dann deine Adresse. Für eine Einladung im Chat braucht der Trainer keine Adresse.",
          "feedbackAuch": "Du klärst erst den Zweck. Der Trainer will eine Karte mit der Post schicken? Dann braucht er deine Adresse. Du sendest sie nur an ihn. Nicht an die Gruppe.",
          "remember": "Ich gebe nur nötige Daten weiter.",
          "pictogram": "pikto-data",
          "correctIndex": 1,
          "auchMoeglich": [
            2
          ],
          "versions": {
            "leicht": {
              "situation": "Du spielst Fußball in einem Verein. Bald gibt es ein Grill-Fest. Der Trainer schreibt in die Chat-Gruppe.",
              "question": "Was machst du?",
              "answers": [
                "Ich schreibe meine Adresse in die Gruppe.",
                "Ich frage den Trainer: Wofür brauchst du die Adresse?",
                "Ich frage erst: Kommt die Einladung mit der Post? Nur dafür schicke ich meine Adresse an den Trainer."
              ],
              "feedbackCorrect": "Für eine Einladung im Chat braucht der Trainer keine Adresse. Vielleicht will er eine Karte mit der Post schicken. Du fragst erst nach. Dann entscheidest du.",
              "feedbackWrong": "In der Gruppe sind 24 Menschen. Alle sehen dann deine Adresse. Für eine Einladung im Chat braucht der Trainer keine Adresse.",
              "feedbackAuch": "Du klärst erst den Zweck. Der Trainer will eine Karte mit der Post schicken? Dann braucht er deine Adresse. Du sendest sie nur an ihn. Nicht an die Gruppe.",
              "remember": "Ich gebe nur nötige Daten weiter."
            },
            "einfach": {
              "situation": "Du spielst im Verein Fußball. Bald gibt es ein Grillfest, und der Trainer schreibt in die Chat-Gruppe.",
              "question": "Was machst du?",
              "answers": [
                "Ich schreibe meine Adresse in die Gruppe.",
                "Ich frage den Trainer zuerst, wofür er die Adresse braucht.",
                "Ich frage, ob die Einladung per Post kommt, und schicke meine Adresse nur dafür direkt an den Trainer."
              ],
              "feedbackCorrect": "Für eine Einladung im Chat braucht er keine Adresse. Du klärst zuerst, ob er eine Karte per Post schicken will, und entscheidest dann.",
              "feedbackWrong": "In der Gruppe sind 24 Leute, die dann alle deine Adresse sehen. Für eine Einladung im Chat ist die Adresse nicht nötig.",
              "feedbackAuch": "Du klärst zuerst den Zweck. Wenn er die Einladung per Post schicken will, braucht er deine Adresse. Du schickst sie nur ihm und nicht der ganzen Gruppe.",
              "remember": "Ich gebe nur die Daten weiter, die nötig sind."
            },
            "standard": {
              "situation": "Du spielst im Verein Fußball. Für das nächste Grillfest schreibt der Trainer in die Chat-Gruppe.",
              "question": "Wie reagierst du?",
              "answers": [
                "Ich poste meine Adresse in der Gruppe.",
                "Ich frage den Trainer zuerst, wofür er die Adresse braucht.",
                "Ich kläre, ob die Einladung per Post kommt, und sende meine Adresse nur zu diesem Zweck direkt an den Trainer."
              ],
              "feedbackCorrect": "Für eine Einladung per Chat ist keine Adresse nötig. Du klärst zunächst, ob er eine Karte per Post versenden will, und entscheidest dann.",
              "feedbackWrong": "Damit können alle 24 Personen in der Gruppe deine Adresse sehen. Für eine Einladung per Chat ist sie nicht erforderlich.",
              "feedbackAuch": "Du hast erst den Zweck geklärt. Für die Einladung per Post braucht er eine Adresse; dafür sendest du sie persönlich an ihn, ohne sie in der Gruppe zu teilen.",
              "remember": "Ich gebe nur die Daten weiter, die für den Zweck nötig sind."
            }
          }
        }
      },
      {
        "inhalt": [
          {
            "typ": "nachricht",
            "von": "Sara",
            "text": "Teilst du mir deinen Standort? Dann seh ich, wann du da bist 😊",
            "zeit": "jetzt"
          }
        ],
        "frage": {
          "situation": "Du triffst dich gleich mit deiner Freundin Sara im Café. Sara schreibt dir. Dein Standort zeigt: Hier bist du gerade.",
          "question": "Was machst du?",
          "answers": [
            "Ich teile meinen Standort mit Sara. Für 1 Stunde.",
            "Ich teile meinen Standort mit Sara. Ab jetzt immer.",
            "Ich schreibe Sara: Ich bin in 10 Minuten da."
          ],
          "feedbackCorrect": "Sara sieht deinen Standort für 1 Stunde. Danach endet das Teilen. Du kannst es auch früher beenden.",
          "feedbackWrong": "Dann sieht Sara auch später deinen Standort. Das braucht sie für das Treffen nicht. Du kannst das Teilen zeitlich begrenzen.",
          "feedbackAuch": "So weiß Sara Bescheid. Und du teilst deinen Standort gar nicht. Du entscheidest selbst.",
          "remember": "Ich wähle aus: Wer sieht meine Daten?",
          "pictogram": "pikto-location",
          "correctIndex": 0,
          "auchMoeglich": [
            2
          ],
          "versions": {
            "leicht": {
              "situation": "Du triffst dich gleich mit deiner Freundin Sara im Café. Sara schreibt dir. Dein Standort zeigt: Hier bist du gerade.",
              "question": "Was machst du?",
              "answers": [
                "Ich teile meinen Standort mit Sara. Für 1 Stunde.",
                "Ich teile meinen Standort mit Sara. Ab jetzt immer.",
                "Ich schreibe Sara: Ich bin in 10 Minuten da."
              ],
              "feedbackCorrect": "Sara sieht deinen Standort für 1 Stunde. Danach endet das Teilen. Du kannst es auch früher beenden.",
              "feedbackWrong": "Dann sieht Sara auch später deinen Standort. Das braucht sie für das Treffen nicht. Du kannst das Teilen zeitlich begrenzen.",
              "feedbackAuch": "So weiß Sara Bescheid. Und du teilst deinen Standort gar nicht. Du entscheidest selbst.",
              "remember": "Ich wähle aus: Wer sieht meine Daten?"
            },
            "einfach": {
              "situation": "Du bist gleich mit deiner Freundin Sara im Café verabredet. Sie schreibt dir. Dein Standort zeigt, wo du gerade bist.",
              "question": "Was machst du?",
              "answers": [
                "Ich teile meinen Standort für 1 Stunde mit Sara.",
                "Ich teile meinen Standort ab jetzt dauerhaft mit Sara.",
                "Ich schreibe Sara, dass ich in 10 Minuten da bin."
              ],
              "feedbackCorrect": "Sara sieht deinen Standort für eine Stunde, danach endet das Teilen. Du kannst es auch früher beenden.",
              "feedbackWrong": "Dann sieht Sara deinen Standort auch nach dem Treffen. Das braucht sie dafür nicht. Begrenze lieber, wie lange du ihn teilst.",
              "feedbackAuch": "So weiß Sara Bescheid, ohne deinen Standort zu sehen. Du entscheidest selbst, ob du ihn teilen möchtest.",
              "remember": "Ich wähle selbst aus, wer meine Daten sieht."
            },
            "standard": {
              "situation": "Du bist gleich mit deiner Freundin Sara im Café verabredet. Sie schreibt dir. Mit dem Live-Standort sieht sie, wo du gerade bist.",
              "question": "Was tust du?",
              "answers": [
                "Ich teile meinen Live-Standort für eine Stunde mit Sara.",
                "Ich teile meinen Live-Standort dauerhaft mit Sara, auch nach unserem Treffen.",
                "Ich schreibe ihr, dass ich in 10 Minuten da bin."
              ],
              "feedbackCorrect": "Sara sieht deinen Standort für eine Stunde; anschließend endet die Freigabe. Du kannst sie auch vorher beenden.",
              "feedbackWrong": "Damit wäre dein Standort auch lange nach dem Treffen sichtbar. Dafür braucht Sara ihn nicht. Begrenze die Dauer der Freigabe.",
              "feedbackAuch": "Damit weiß Sara Bescheid, ohne deinen Standort zu sehen. Ob du ihn freigibst, bleibt deine Entscheidung.",
              "remember": "Ich lege selbst fest, wer meine Daten sieht."
            }
          }
        }
      }
    ],
    "abschluss": "Du hast entschieden: Wer sieht meinen Namen, meine Adresse und meinen Standort?",
    "versions": {
      "einfach": {
        "titel": "Wer sieht deine Daten?",
        "einstieg": [
          "Auf dem Handy entscheidest du oft, welche Daten du weitergibst und wer sie sieht."
        ],
        "abschluss": "Du hast selbst entschieden, wer deinen Namen, deine Adresse und deinen Standort sieht."
      },
      "standard": {
        "titel": "Wer sieht deine Daten?",
        "einstieg": [
          "Auf dem Handy entscheidest du ständig, welche Daten du weitergibst und wer sie zu sehen bekommt."
        ],
        "abschluss": "Du hast selbst festgelegt, wer deinen Namen, deine Adresse und deinen Standort zu sehen bekommt."
      }
    }
  },
  "hilfe": {
    "titel": "Dein Hilfe-Check am Handy",
    "typ": "einstellungen",
    "kanal": "Dein Handy",
    "einstieg": [
      "Am Handy klappt nicht immer alles.",
      "Manchmal macht dir etwas Angst.",
      "Du prüfst: Was ist los? Was kann ich selbst tun? Welche Hilfe passt?"
    ],
    "szenen": [
      {
        "inhalt": [
          {
            "typ": "hinweis",
            "text": "Speicher fast voll. Du kannst keine neuen Fotos speichern."
          }
        ],
        "frage": {
          "situation": "Du willst ein Foto von deinem Hund machen. Auf deinem Handy steht eine Meldung.",
          "question": "Was kann ich selbst tun?",
          "answers": [
            "Ich lösche nur meine alten Videos. Die brauche ich nicht mehr.",
            "Ich lösche alle Fotos auf dem Handy.",
            "Ich bitte meinen Bruder um Hilfe. Er kennt sich mit Handys aus."
          ],
          "feedbackCorrect": "Du wählst selbst aus: Was brauche ich nicht mehr? Videos brauchen oft viel Platz. Du löschst nur deine eigenen Videos.",
          "feedbackWrong": "Dann sind auch wichtige Fotos weg. Schau erst: Was brauchst du nicht mehr? Auf dem Handy sind auch Fotos von anderen? Dann frag sie vor dem Löschen.",
          "feedbackAuch": "Dein Bruder kann dir zeigen: Was braucht viel Platz? Du entscheidest selbst: Was kann weg? Deine Fotos und Videos bleiben deine Entscheidung.",
          "remember": "Vieles kann ich selbst lösen.",
          "pictogram": "pikto-photo",
          "correctIndex": 0,
          "auchMoeglich": [
            2
          ],
          "versions": {
            "leicht": {
              "situation": "Du willst ein Foto von deinem Hund machen. Auf deinem Handy steht eine Meldung.",
              "question": "Was kann ich selbst tun?",
              "answers": [
                "Ich lösche nur meine alten Videos. Die brauche ich nicht mehr.",
                "Ich lösche alle Fotos auf dem Handy.",
                "Ich bitte meinen Bruder um Hilfe. Er kennt sich mit Handys aus."
              ],
              "feedbackCorrect": "Du wählst selbst aus: Was brauche ich nicht mehr? Videos brauchen oft viel Platz. Du löschst nur deine eigenen Videos.",
              "feedbackWrong": "Dann sind auch wichtige Fotos weg. Schau erst: Was brauchst du nicht mehr? Auf dem Handy sind auch Fotos von anderen? Dann frag sie vor dem Löschen.",
              "feedbackAuch": "Dein Bruder kann dir zeigen: Was braucht viel Platz? Du entscheidest selbst: Was kann weg? Deine Fotos und Videos bleiben deine Entscheidung.",
              "remember": "Vieles kann ich selbst lösen."
            },
            "einfach": {
              "situation": "Du willst ein Foto von deinem Hund machen. Da erscheint eine Meldung auf deinem Handy.",
              "question": "Was kann ich selbst tun?",
              "answers": [
                "Ich lösche nur meine alten Videos, die ich nicht mehr brauche.",
                "Ich lösche einfach alle Fotos auf dem Handy.",
                "Ich bitte meinen Bruder um Hilfe, weil er sich mit Handys auskennt."
              ],
              "feedbackCorrect": "Du wählst aus, was du nicht mehr brauchst. Videos brauchen oft viel Platz. Du löschst nur deine eigenen Videos.",
              "feedbackWrong": "Dann sind auch Fotos weg, die dir wichtig sind. Schau zuerst, was du nicht mehr brauchst. Falls dort Fotos anderer Personen sind, frag sie vor dem Löschen.",
              "feedbackAuch": "Dein Bruder kann dir zeigen, was viel Platz braucht. Du entscheidest selbst, welche deiner Fotos und Videos du löschen willst.",
              "remember": "Vieles kann ich selbst lösen."
            },
            "standard": {
              "situation": "Du möchtest deinen Hund fotografieren. Da erscheint eine Meldung auf deinem Handy.",
              "question": "Was kann ich selbst tun?",
              "answers": [
                "Ich lösche nur eigene alte Videos, die ich nicht mehr brauche.",
                "Ich lösche kurzerhand alle Fotos auf dem Handy.",
                "Ich bitte meinen Bruder um Hilfe – er kennt sich mit Handys aus."
              ],
              "feedbackCorrect": "Du wählst gezielt aus, welche eigenen Videos du nicht mehr brauchst. Videos belegen häufig viel Speicher; fremde Inhalte löschst du nicht ohne Rücksprache.",
              "feedbackWrong": "Dabei würden auch Fotos verloren gehen, die dir wichtig sind. Prüfe erst, was du nicht mehr brauchst. Inhalte anderer Personen löschst du nur nach Rücksprache.",
              "feedbackAuch": "Dein Bruder kann dir zeigen, was viel Speicher belegt. Welche deiner Fotos und Videos du behalten oder löschen willst, entscheidest weiterhin du.",
              "remember": "Vieles kann ich selbst lösen."
            }
          }
        }
      },
      {
        "inhalt": [
          {
            "typ": "hinweis",
            "text": "Achtung! Dein Handy hat 3 Viren. Tippe jetzt auf: Reparieren. Sonst gehen deine Daten verloren!"
          }
        ],
        "frage": {
          "situation": "Du liest im Internet über ein Konzert. Plötzlich kommt eine rote Meldung.",
          "question": "Was machst du jetzt?",
          "answers": [
            "Ich tippe schnell auf: Reparieren.",
            "Ich tippe nichts an. Ich schließe die Seite.",
            "Ich tippe nichts an. Ich zeige die Meldung meiner Schwester. Sie kennt sich aus."
          ],
          "feedbackCorrect": "Die Meldung soll dir Angst machen. Sie ist kein Beweis für Viren auf deinem Handy. Du schließt die Seite. So bestätigst du nichts.",
          "feedbackWrong": "Die Meldung drängt dich. Nach dem Tippen kommt vielleicht eine falsche App. Oder ein teures Abo. Mach erst Stopp. Tippe nichts an.",
          "feedbackAuch": "Du tippst nichts in der Meldung an. Deine Schwester kann sie mit dir anschauen. Du kannst die Seite schließen.",
          "remember": "Druck oder Angst? Dann mache ich erst Stopp.",
          "pictogram": "pikto-stop",
          "correctIndex": 1,
          "auchMoeglich": [
            2
          ],
          "versions": {
            "leicht": {
              "situation": "Du liest im Internet über ein Konzert. Plötzlich kommt eine rote Meldung.",
              "question": "Was machst du jetzt?",
              "answers": [
                "Ich tippe schnell auf: Reparieren.",
                "Ich tippe nichts an. Ich schließe die Seite.",
                "Ich tippe nichts an. Ich zeige die Meldung meiner Schwester. Sie kennt sich aus."
              ],
              "feedbackCorrect": "Die Meldung soll dir Angst machen. Sie ist kein Beweis für Viren auf deinem Handy. Du schließt die Seite. So bestätigst du nichts.",
              "feedbackWrong": "Die Meldung drängt dich. Nach dem Tippen kommt vielleicht eine falsche App. Oder ein teures Abo. Mach erst Stopp. Tippe nichts an.",
              "feedbackAuch": "Du tippst nichts in der Meldung an. Deine Schwester kann sie mit dir anschauen. Du kannst die Seite schließen.",
              "remember": "Druck oder Angst? Dann mache ich erst Stopp."
            },
            "einfach": {
              "situation": "Du liest im Internet etwas über ein Konzert. Plötzlich erscheint eine rote Meldung.",
              "question": "Was machst du jetzt?",
              "answers": [
                "Ich tippe schnell auf Reparieren, damit nichts verloren geht.",
                "Ich tippe nichts an und schließe die Seite.",
                "Ich tippe nichts an und zeige die Meldung meiner Schwester, weil sie sich auskennt."
              ],
              "feedbackCorrect": "Die Meldung soll dir Angst machen, ist aber kein Beweis für Viren auf deinem Handy. Du schließt die Seite, ohne etwas zu bestätigen.",
              "feedbackWrong": "Die Meldung will, dass du schnell tippst. Danach landet vielleicht eine falsche App auf deinem Handy oder du hast ein teures Abo. Mach erst Stopp und tippe nichts an.",
              "feedbackAuch": "Du tippst nichts in der Meldung an. Deine Schwester kann sie mit dir zusammen anschauen. Ihr könnt die Seite schließen.",
              "remember": "Bei Druck oder Angst mache ich erst Stopp."
            },
            "standard": {
              "situation": "Du liest im Internet über ein Konzert, als plötzlich eine rote Meldung erscheint.",
              "question": "Was tust du jetzt?",
              "answers": [
                "Ich tippe sofort auf Reparieren, bevor Daten verloren gehen.",
                "Ich tippe nichts an und schließe die Seite.",
                "Ich tippe nichts an und zeige die Meldung meiner Schwester, die sich damit auskennt."
              ],
              "feedbackCorrect": "Die Meldung setzt dich unter Druck und beweist keinen Virenbefall. Du schließt die Seite, ohne eine Aufforderung zu bestätigen.",
              "feedbackWrong": "Die Meldung setzt dich unter Zeitdruck. Wer tippt, wird möglicherweise zur Installation einer schädlichen App oder zu einem teuren Abo verleitet. Erst stoppen und nichts bestätigen.",
              "feedbackAuch": "Du bestätigst nichts in der Meldung und kannst sie mit deiner Schwester in Ruhe ansehen. Ihr könnt die Seite schließen.",
              "remember": "Bei Druck oder Angst halte ich an und prüfe in Ruhe."
            }
          }
        }
      },
      {
        "inhalt": [
          {
            "typ": "hinweis",
            "text": "Schritt 2 von 5: SEPA-Lastschriftmandat. Bitte IBAN eingeben."
          }
        ],
        "frage": {
          "situation": "Du willst dich für einen Tanz-Kurs anmelden. Das Formular im Internet ist lang. Viele Wörter verstehst du nicht. Dein Freund Ali kennt sich mit Formularen aus. Du vertraust ihm.",
          "question": "Welche Hilfe passt?",
          "answers": [
            "Ich frage Ali. Wir schauen das Formular zusammen an.",
            "Ich rufe beim Kurs an. Ich frage: Geht die Anmeldung auch anders?",
            "Ich frage in einer Facebook-Gruppe: Wer füllt das für mich aus?"
          ],
          "feedbackCorrect": "Ali kennt sich aus. Du vertraust ihm. Ihr schaut die schweren Wörter zusammen an. Du entscheidest selbst: Welche Angaben zeige ich Ali?",
          "feedbackWrong": "Das Formular fragt nach deinen Bank-Daten. Die gibst du nicht an Fremde in einer Gruppe. Du kannst eine vertraute Person oder den Kurs fragen.",
          "feedbackAuch": "Beim Kurs kennen sie das Formular. Sie können die Wörter erklären. Oder eine andere Anmeldung anbieten. Zum Beispiel auf Papier.",
          "remember": "Ich hole mir passende Hilfe.",
          "pictogram": "pikto-help",
          "correctIndex": 0,
          "auchMoeglich": [
            1
          ],
          "versions": {
            "leicht": {
              "situation": "Du willst dich für einen Tanz-Kurs anmelden. Das Formular im Internet ist lang. Viele Wörter verstehst du nicht. Dein Freund Ali kennt sich mit Formularen aus. Du vertraust ihm.",
              "question": "Welche Hilfe passt?",
              "answers": [
                "Ich frage Ali. Wir schauen das Formular zusammen an.",
                "Ich rufe beim Kurs an. Ich frage: Geht die Anmeldung auch anders?",
                "Ich frage in einer Facebook-Gruppe: Wer füllt das für mich aus?"
              ],
              "feedbackCorrect": "Ali kennt sich aus. Du vertraust ihm. Ihr schaut die schweren Wörter zusammen an. Du entscheidest selbst: Welche Angaben zeige ich Ali?",
              "feedbackWrong": "Das Formular fragt nach deinen Bank-Daten. Die gibst du nicht an Fremde in einer Gruppe. Du kannst eine vertraute Person oder den Kurs fragen.",
              "feedbackAuch": "Beim Kurs kennen sie das Formular. Sie können die Wörter erklären. Oder eine andere Anmeldung anbieten. Zum Beispiel auf Papier.",
              "remember": "Ich hole mir passende Hilfe."
            },
            "einfach": {
              "situation": "Du möchtest dich für einen Tanzkurs anmelden. Das Online-Formular ist lang, und viele Wörter verstehst du nicht. Dein Freund Ali kennt sich mit Formularen aus, und du vertraust ihm.",
              "question": "Welche Hilfe passt?",
              "answers": [
                "Ich frage Ali, ob wir das Formular zusammen anschauen.",
                "Ich rufe beim Kurs an und frage, ob die Anmeldung auch anders geht.",
                "Ich frage in einer Facebook-Gruppe, wer das für mich ausfüllt."
              ],
              "feedbackCorrect": "Ali kennt sich aus, und du vertraust ihm. Ihr schaut gemeinsam, welche Wörter du nicht verstehst. Du entscheidest selbst, welche Angaben du ihm zeigst.",
              "feedbackWrong": "Das Formular fragt nach deinen Bankdaten. Die gibst du nicht an Fremde aus einer Gruppe. Frag eine vertraute Person oder den Kursanbieter.",
              "feedbackAuch": "Beim Kurs kennt man das Formular und kann dir die Wörter erklären. Vielleicht gibt es auch eine andere Anmeldung, zum Beispiel auf Papier.",
              "remember": "Ich hole mir die Hilfe, die passt."
            },
            "standard": {
              "situation": "Du möchtest dich online für einen Tanzkurs anmelden. Das Formular ist lang und enthält viele Begriffe, die du nicht verstehst. Dein Freund Ali kennt sich mit Formularen aus und ist eine Person, der du vertraust.",
              "question": "Welche Hilfe passt?",
              "answers": [
                "Ich bitte Ali, das Formular mit mir gemeinsam anzusehen.",
                "Ich rufe beim Kursanbieter an und frage nach einer anderen Anmeldung.",
                "Ich frage in einer Facebook-Gruppe, wer das für mich übernimmt."
              ],
              "feedbackCorrect": "Ali kennt sich aus und ist dir vertraut. Ihr könnt unklare Begriffe gemeinsam durchgehen. Welche persönlichen Angaben du ihm zeigst, entscheidest du selbst.",
              "feedbackWrong": "Das Formular fragt nach deinen Bankdaten. Gib sie keiner fremden Person aus einer Gruppe. Frag eine vertraute Person oder direkt beim Kursanbieter nach.",
              "feedbackAuch": "Der Kursanbieter kennt sein Formular und kann Begriffe erklären. Vielleicht bietet er auch eine andere Anmeldung an, etwa auf Papier.",
              "remember": "Ich hole mir die passende Hilfe."
            }
          }
        }
      }
    ],
    "abschluss": "Du hast den Hilfe-Check geübt. Manches kannst du selbst lösen. Bei Druck oder Angst machst du erst Stopp. Du entscheidest: Welche Hilfe passt?",
    "versions": {
      "einfach": {
        "titel": "Dein Hilfe-Check am Handy",
        "einstieg": [
          "Am Handy klappt nicht immer alles, und manchmal macht dir etwas Angst.",
          "Dann prüfst du: Was ist los? Was kann ich selbst tun? Welche Hilfe passt?"
        ],
        "abschluss": "Du hast den Hilfe-Check geübt: Manches löst du selbst, bei Druck oder Angst machst du erst Stopp, und du entscheidest, welche Hilfe passt."
      },
      "standard": {
        "titel": "Dein Hilfe-Check am Handy",
        "einstieg": [
          "Nicht alles am Handy klappt, und manches macht Angst.",
          "Dann gehst du den Hilfe-Check durch: Was ist los? Was kann ich selbst tun? Welche Hilfe passt?"
        ],
        "abschluss": "Du hast den Hilfe-Check geübt: Vieles löst du selbst, bei Druck oder Angst hältst du erst an, und du findest Hilfe, die zu deinem Problem passt."
      }
    }
  }
};

(function uebungshandyFassungenAnhaengen() {
  Object.keys(UEBUNGSHANDY_FASSUNGEN).forEach(id => {
    const neu = UEBUNGSHANDY_FASSUNGEN[id];
    if (id === "datenschutz" || id === "hilfe") {
      SCENARIOS[id] = Object.assign({}, neu, { ausgeblendet: false });
      neu.szenen.forEach((z, i) => {
        z.frage.schluessel = "uebungshandy-" + id + "-" + (i + 1);
      });
      return;
    }
    const alt = SCENARIOS[id];
    ["titel", "einstieg", "abschluss", "versions"].forEach(f => { alt[f] = neu[f]; });
    alt.szenen.forEach((z, i) => {
      const basis = z.frage;
      const n = neu.szenen[i];
      const frage = n.frage || n;
      z.frage = Object.assign({}, basis, frage, {
        remember: basis.remember,
        schluessel: basis.schluessel || basis.question
      });
      // Die Autoren liefern Frage und Fallen-Erklärung getrennt.
      if (n.falle) z.falle = Object.assign({}, z.falle, n.falle);
      if (n.szeneVersions) z.versions = n.szeneVersions;
      if (z.falle && n.falleText) {
        z.falle = Object.assign({}, z.falle, {
          text: n.falleText, textFalsch: n.falleTextFalsch
        });
        z.versions = {};
        ["leicht", "einfach", "standard"].forEach(st => {
          const v = n.versions[st];
          z.versions[st] = { falleText: v.falleText, falleTextFalsch: v.falleTextFalsch };
        });
      }
    });
  });
})();
/* UEBUNGSHANDY-2026-10-08 END */
