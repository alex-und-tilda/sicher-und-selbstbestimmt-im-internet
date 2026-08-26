/* =============================================================
   Nachgelieferte Übungen
   -------------------------------------------------------------
   Warum eine eigene Datei und nicht topics.js?
   topics.js ist geprüfter Inhalt. Diese Übungen sind ein Nachtrag.
   Getrennt bleibt beides einzeln lesbar, prüfbar und rücknehmbar.
   app.js hängt sie beim Start ein (applyExtraPractice) und
   überschreibt dabei NIE eine vorhandene Übung.

   Gefüllt werden zwei Lücken (Stand 24.08.2026):
   - 26 Inhalts-Lektionen in `lessons` ohne Übung.
     Nicht gefüllt: "Start", "Was kann ich tun?" und
     "Das merke ich mir" – das sind Rahmen-Seiten (Einstieg,
     Zusammenfassung, Merkkarte), dort wäre eine Frage falsch.
   - alle 36 Lektionen des Kurz-Modus (`einfachLessons`).
     Der Kurz-Modus hatte bisher KEINE einzige Übung, also auch
     keinen Testing-Effekt (§3).

   Format = lesson.practice, unverändert:
     question, pictogram, answers, correctIndex,
     feedbackWrong, feedbackCorrect, remember

   REGEL: die richtige Antwort darf nicht immer an derselben
   Stelle stehen. Sonst besteht man durch Muster statt durch
   Lesen. Unten steht sie bewusst gemischt.
   ============================================================= */

const EXTRA_PRACTICE = {

  datenschutz: {
    lessons: {
      "Was sind private Daten?": {
        question: "Was davon ist eine private Angabe?",
        pictogram: "pikto-data",
        answers: ["Deine Telefon-Nummer.", "Das Wetter von heute.", "Die Uhrzeit."],
        correctIndex: 0,
        feedbackWrong: [null, "Das Wetter weiß jeder.", "Die Uhrzeit ist für alle gleich. Sie sagt nichts über dich."],
        feedbackCorrect: "Richtig. Deine Telefon-Nummer gehört zu dir.",
        remember: "Private Daten gehören zu mir."
      },
      "Besonders wichtige Daten": {
        question: "Welche Angabe schützt du am besten?",
        pictogram: "pikto-key",
        answers: ["Deine Lieblings-Farbe.", "Dein Vorname.", "Deine Bank-Daten."],
        correctIndex: 2,
        feedbackWrong: ["Die Lieblings-Farbe schadet niemandem.", "Deinen Vornamen kennen viele. Mit Bank-Daten kann man dir Geld nehmen.", null],
        feedbackCorrect: "Genau. Mit Bank-Daten kann jemand großen Schaden machen.",
        remember: "Besonders wichtige Daten gebe ich nicht weiter."
      }
    },
    kurz: {
      "Deine privaten Daten": {
        question: "Wem gehören deine privaten Daten?",
        pictogram: "pikto-person",
        answers: ["Nur mir.", "Allen im Internet.", "Der Firma von der App."],
        correctIndex: 0,
        feedbackWrong: [null, "Nein. Deine Daten gehören dir.", "Die Firma darf sie nur benutzen. Dir gehören sie."],
        feedbackCorrect: "Genau. Du entscheidest über deine Daten.",
        remember: "Private Daten sind nur für mich."
      },
      "Dein Passwort": {
        question: "Deine beste Freundin fragt nach deinem Passwort. Was machst du?",
        pictogram: "pikto-lock",
        answers: ["Ich sage es ihr.", "Ich sage es auch ihr nicht.", "Ich sage es ihr und ändere es danach."],
        correctIndex: 1,
        feedbackWrong: ["Ein Passwort bleibt geheim. Auch bei Menschen, die du magst.", null, "Umständlich und unsicher. Sag es lieber gar nicht."],
        feedbackCorrect: "Richtig. Ein Passwort bleibt geheim. Immer.",
        remember: "Mein Passwort bleibt geheim."
      },
      "Jemand fragt nach deinen Daten": {
        question: "Eine Nachricht fragt nach deinen Daten. Was tust du zuerst?",
        pictogram: "pikto-ask",
        answers: ["Ich gebe die Daten ein.", "Ich schaue, ob die Nachricht echt aussieht.", "Ich frage eine vertraute Person."],
        correctIndex: 2,
        feedbackWrong: ["Erst eingeben und dann fragen ist zu spät.", "Betrug sieht oft echt aus. Frag lieber eine vertraute Person.", null],
        feedbackCorrect: "Sehr gut. Erst fragen. Dann entscheiden.",
        remember: "Erst fragen. Dann entscheiden."
      }
    }
  },

  whatsapp: {
    lessons: {
      "WhatsApp nutzen": {
        question: "Eine Person schreibt dir. Musst du antworten?",
        pictogram: "pikto-message",
        answers: ["Ja, sonst ist es unhöflich.", "Nein. Ich entscheide das."],
        correctIndex: 1,
        feedbackWrong: "Niemand muss antworten. Du bestimmst, mit wem du schreibst.",
        feedbackCorrect: "Genau. Du entscheidest, wem du antwortest.",
        remember: "Ich entscheide, wem ich antworte."
      },
      "Die KI in WhatsApp": {
        question: "Die KI in WhatsApp fragt nach deiner Adresse. Was tust du?",
        pictogram: "pikto-ki",
        answers: ["Ich schreibe sie nicht hin.", "Ich schreibe sie hin. Es ist ja nur ein Programm."],
        correctIndex: 0,
        feedbackWrong: "Gerade weil es ein Programm ist: Alles wird gespeichert. Private Dinge gehören da nicht hinein.",
        feedbackCorrect: "Richtig. Der KI schreibst du keine privaten Dinge.",
        remember: "Der KI schreibe ich nichts Privates."
      }
    },
    kurz: {
      "Unbekannte Nachrichten": {
        question: "Eine unbekannte Person schreibt dir. Was tust du?",
        pictogram: "pikto-stranger",
        answers: ["Ich antworte sofort.", "Ich zeige es einer vertrauten Person."],
        correctIndex: 1,
        feedbackWrong: "Sofort antworten zeigt: Diese Nummer wird gelesen. Warte lieber.",
        feedbackCorrect: "Gut. Erst zeigen. Dann entscheiden.",
        remember: "Unbekannte Nachrichten: erst fragen."
      },
      "Links in Nachrichten": {
        question: "In einer fremden Nachricht ist ein Link. Was tust du?",
        pictogram: "pikto-link",
        answers: ["Ich tippe nicht drauf.", "Ich tippe drauf und schaue nach."],
        correctIndex: 0,
        feedbackWrong: "Ein Link kann dich auf eine falsche Seite bringen. Nachschauen ist zu spät.",
        feedbackCorrect: "Richtig. Fremde Links lässt du zu.",
        remember: "Fremde Links klicke ich nicht an."
      },
      "Dein WhatsApp-Code": {
        question: "Ein Freund bittet dich um deinen WhatsApp-Code. Was tust du?",
        pictogram: "pikto-code",
        answers: ["Ich schicke ihn. Es ist ja ein Freund.", "Ich schicke ihn nicht."],
        correctIndex: 1,
        feedbackWrong: "Oft schreibt gar nicht der Freund. Betrüger nutzen sein Konto. Der Code bleibt bei dir.",
        feedbackCorrect: "Genau. Der Code bleibt immer bei dir.",
        remember: "Meinen Code gebe ich nie weiter."
      }
    }
  },

  facebook: {
    lessons: {
      "Profil": {
        question: "Was heißt „öffentlich“ bei deinem Profil?",
        pictogram: "pikto-globe",
        answers: ["Nur meine Freunde sehen es.", "Alle können es sehen."],
        correctIndex: 1,
        feedbackWrong: "Öffentlich heißt wirklich alle. Auch fremde Menschen.",
        feedbackCorrect: "Richtig. Öffentlich heißt: jeder Mensch kann es sehen.",
        remember: "Ich zeige nicht alles in meinem Profil."
      }
    },
    kurz: {
      "Dein Facebook-Profil": {
        question: "Wer soll dein Profil sehen?",
        pictogram: "pikto-people",
        answers: ["Nur meine Freunde.", "Alle Menschen im Internet."],
        correctIndex: 0,
        feedbackWrong: "Dann sehen auch fremde Menschen deine Bilder und Angaben.",
        feedbackCorrect: "Gut. Deine Freunde reichen.",
        remember: "Mein Profil sehen nur Freunde."
      },
      "Unbekannte Personen": {
        question: "Eine unbekannte Person will dein Freund sein. Was tust du?",
        pictogram: "pikto-stranger",
        answers: ["Ich nehme die Anfrage an.", "Ich lehne ab und frage eine vertraute Person."],
        correctIndex: 1,
        feedbackWrong: "Wer dich nicht kennt, will oft an deine Daten.",
        feedbackCorrect: "Richtig. Unbekannte Anfragen lehnst du ab.",
        remember: "Unbekannte Anfragen lehne ich ab."
      },
      "Komische Nachrichten": {
        question: "Jemand schickt dir einen Link und fragt nach Geld. Was tust du?",
        pictogram: "pikto-warning",
        answers: ["Ich zeige es einer vertrauten Person.", "Ich klicke auf den Link."],
        correctIndex: 0,
        feedbackWrong: "Klicken kann Schaden machen. Zeigen kostet nichts.",
        feedbackCorrect: "Sehr gut. Zeigen statt klicken.",
        remember: "Komische Nachrichten zeige ich."
      }
    }
  },

  instagram: {
    lessons: {},
    kurz: {
      "Deine Fotos auf Instagram": {
        question: "Wie stellst du dein Konto am besten ein?",
        pictogram: "pikto-lock",
        answers: ["Offen für alle.", "Privat."],
        correctIndex: 1,
        feedbackWrong: "Bei einem offenen Konto sehen fremde Menschen alle deine Fotos.",
        feedbackCorrect: "Gut. Privat heißt: nur Menschen, die du erlaubst.",
        remember: "Mein Konto ist privat."
      },
      "Fotos von anderen Personen": {
        question: "Auf deinem Foto ist eine Freundin. Was machst du vor dem Posten?",
        pictogram: "pikto-friend",
        answers: ["Ich frage sie.", "Ich poste es einfach."],
        correctIndex: 0,
        feedbackWrong: "Auch andere entscheiden über ihre Bilder. Fragen gehört dazu.",
        feedbackCorrect: "Richtig. Erst fragen, dann posten.",
        remember: "Fotos von anderen: erst fragen."
      },
      "Nachrichten von Unbekannten": {
        question: "In deinem Postfach ist eine Nachricht von einem fremden Profil. Was tust du?",
        pictogram: "pikto-stranger",
        answers: ["Ich schreibe zurück.", "Ich antworte nicht und zeige es."],
        correctIndex: 1,
        feedbackWrong: "Eine Antwort ist für Fremde ein Anfang. Zeigen ist sicherer.",
        feedbackCorrect: "Gut. Nicht antworten und zeigen.",
        remember: "Unbekannte Nachrichten zeige ich."
      }
    }
  },

  youtube: {
    lessons: {
      "Kommentare": {
        question: "Unter einem Video steht ein gemeiner Kommentar. Musst du antworten?",
        pictogram: "pikto-no",
        answers: ["Nein. Ich muss nicht reagieren.", "Ja. Sonst gewinnt der andere."],
        correctIndex: 0,
        feedbackWrong: "Es gibt nichts zu gewinnen. Nicht antworten ist erlaubt und oft klüger.",
        feedbackCorrect: "Genau. Du musst auf keinen Kommentar reagieren.",
        remember: "Ich muss nicht auf Kommentare reagieren."
      },
      "Nicht jedes Video ist echt": {
        question: "In einem Video sagt ein bekannter Mensch etwas Komisches. Was kann sein?",
        pictogram: "pikto-fake",
        answers: ["Er hat es sicher gesagt. Man sieht ihn ja.", "Das Video kann mit KI gemacht sein."],
        correctIndex: 1,
        feedbackWrong: "Sehen ist kein Beweis mehr. KI kann Gesichter und Stimmen nachmachen.",
        feedbackCorrect: "Richtig. Auch Gesichter kann man heute fälschen.",
        remember: "Auch Videos können gefälscht sein."
      }
    },
    kurz: {
      "Videos prüfen": {
        question: "Ein Video sagt etwas Überraschendes. Was tust du?",
        pictogram: "pikto-search",
        answers: ["Ich schaue auf einer anderen Seite nach.", "Ich glaube es."],
        correctIndex: 0,
        feedbackWrong: "Ein Video allein ist kein Beweis. Prüfen hilft.",
        feedbackCorrect: "Gut. Zweite Quelle ist die beste Prüfung.",
        remember: "Ich prüfe: Stimmt das Video?"
      },
      "Werbung erkennen": {
        question: "Im Video kommt Werbung. Musst du etwas kaufen?",
        pictogram: "pikto-shop",
        answers: ["Ja, sonst geht das Video nicht weiter.", "Nein. Ich muss nichts kaufen."],
        correctIndex: 1,
        feedbackWrong: "Werbung will das nur. Kaufen musst du nie.",
        feedbackCorrect: "Genau. Werbung darfst du überspringen.",
        remember: "Ich kaufe nichts wegen Werbung."
      },
      "Pausen machen": {
        question: "Du schaust seit einer Stunde. Was ist gut für dich?",
        pictogram: "pikto-pause",
        answers: ["Eine Pause machen.", "Noch ein Video schauen."],
        correctIndex: 0,
        feedbackWrong: "Das nächste Video startet immer. Die Pause musst du selbst machen.",
        feedbackCorrect: "Sehr gut. Nach einer Stunde tut eine Pause gut.",
        remember: "Nach einer Stunde mache ich Pause."
      }
    }
  },

  snapchat: {
    lessons: {
      "Bild vom Bildschirm": {
        question: "Dein Bild verschwindet nach zehn Sekunden. Ist es dann weg?",
        pictogram: "pikto-screen",
        answers: ["Ja, danach kann es niemand mehr sehen.", "Nein. Man kann ein Bild vom Bildschirm machen."],
        correctIndex: 1,
        feedbackWrong: "Ein Bildschirm-Foto dauert eine Sekunde. Danach ist dein Bild gespeichert.",
        feedbackCorrect: "Richtig. Ein Bildschirm-Foto geht immer.",
        remember: "Ich denke vor dem Senden nach."
      }
    },
    kurz: {
      "Bilder verschwinden nicht wirklich": {
        question: "Welche Bilder schickst du?",
        pictogram: "pikto-photo",
        answers: ["Nur Bilder, die auch andere sehen dürfen.", "Alle Bilder. Sie verschwinden ja."],
        correctIndex: 0,
        feedbackWrong: "Sie verschwinden nur auf deinem Bildschirm. Gespeichert bleiben sie.",
        feedbackCorrect: "Genau richtig gedacht.",
        remember: "Bilder verschwinden nicht wirklich."
      },
      "Dein Standort": {
        question: "Snapchat zeigt, wo du bist. Was machst du?",
        pictogram: "pikto-location",
        answers: ["Ich lasse es an.", "Ich schalte den Standort aus."],
        correctIndex: 1,
        feedbackWrong: "Dann sehen andere, wo du wohnst und wann du unterwegs bist.",
        feedbackCorrect: "Gut. Deinen Standort brauchst nur du.",
        remember: "Ich schalte den Standort aus."
      },
      "Niemand darf dich zwingen": {
        question: "Jemand macht Druck: Schick mir ein Bild! Was gilt?",
        pictogram: "pikto-no",
        answers: ["Ich darf nein sagen.", "Ich muss es machen, sonst ist er sauer."],
        correctIndex: 0,
        feedbackWrong: "Wer sauer wird, wenn du nein sagst, meint es nicht gut mit dir.",
        feedbackCorrect: "Genau. Dein Nein gilt immer.",
        remember: "Ich darf nein sagen."
      }
    }
  },

  tiktok: {
    lessons: {
      "Gefährliche Trends erkennen": {
        question: "Ein Trend sieht gefährlich aus. Was tust du?",
        pictogram: "pikto-warning",
        answers: ["Ich mache mit. Alle machen es.", "Ich mache nicht mit."],
        correctIndex: 1,
        feedbackWrong: "Der Trend ist bald vorbei. Eine Verletzung bleibt länger.",
        feedbackCorrect: "Richtig. Du musst bei keinem Trend mitmachen.",
        remember: "Ich muss bei keinem Trend mitmachen."
      },
      "Gefühle und Pausen": {
        question: "Ein Video macht dich traurig. Was darfst du?",
        pictogram: "pikto-feel",
        answers: ["Die App schließen und darüber reden.", "Weiterschauen, bis es besser wird."],
        correctIndex: 0,
        feedbackWrong: "Weiterschauen macht es meistens nicht besser. Weglegen hilft.",
        feedbackCorrect: "Genau. Weglegen und reden ist stark.",
        remember: "Ich darf TikTok weglegen."
      },
      "Nicht jedes Video ist echt": {
        question: "Eine bekannte Stimme sagt etwas Seltsames in einem Video. Was kann sein?",
        pictogram: "pikto-fake",
        answers: ["Stimmen kann man nicht fälschen.", "Die Stimme kann mit KI gemacht sein."],
        correctIndex: 1,
        feedbackWrong: "Doch. KI kann Stimmen sehr echt nachmachen.",
        feedbackCorrect: "Richtig. Auch Stimmen kann man fälschen.",
        remember: "Auch Videos und Stimmen können gefälscht sein."
      }
    },
    kurz: {
      "Was du bei TikTok siehst": {
        question: "Warum siehst du immer ähnliche Videos?",
        pictogram: "pikto-video",
        answers: ["Weil die App merkt, was mir gefällt.", "Weil es nur diese Videos gibt."],
        correctIndex: 0,
        feedbackWrong: "Es gibt viel mehr. Die App zeigt dir nur eine Auswahl.",
        feedbackCorrect: "Genau. Die App wählt für dich aus.",
        remember: "TikTok zeigt mir nur bestimmte Videos."
      },
      "Nachrichten auf TikTok": {
        question: "Jemand aus den Kommentaren schreibt dir privat. Du kennst die Person nicht. Was tust du?",
        pictogram: "pikto-stranger",
        answers: ["Ich antworte kurz.", "Ich antworte nicht und zeige es."],
        correctIndex: 1,
        feedbackWrong: "Auch eine kurze Antwort ist ein Anfang. Lieber gar nicht.",
        feedbackCorrect: "Gut. Nicht antworten und zeigen.",
        remember: "Unbekannte Nachrichten zeige ich."
      },
      "Pause machen": {
        question: "Was hilft dir beim Aufhören?",
        pictogram: "pikto-clock",
        answers: ["Ein Timer.", "Warten, bis die App aufhört."],
        correctIndex: 0,
        feedbackWrong: "Die App hört nie von allein auf. Ein Timer schon.",
        feedbackCorrect: "Genau. Ein Timer erinnert dich.",
        remember: "Ich stelle einen Timer."
      }
    }
  },

  hilfe: {
    lessons: {
      "Angst ernst nehmen": {
        question: "Du hast ein komisches Gefühl im Bauch. Was heißt das?",
        pictogram: "pikto-feel",
        answers: ["Ich stelle mich an.", "Mein Gefühl sagt mir etwas."],
        correctIndex: 1,
        feedbackWrong: "Du stellst dich nicht an. Dieses Gefühl ist eine Warnung.",
        feedbackCorrect: "Richtig. Dein Gefühl ist ein guter Hinweis.",
        remember: "Meine Gefühle sind wichtig."
      },
      /* Diese Frage hatte genau dieselben Antworten wie die Übung in
         „Stopp-Regel" und wie Quizfrage 1 desselben Themas – dieselbe
         Antwort-Kombination dreimal (Prüfbericht B23). Sie fragt jetzt nach
         dem NÄCHSTEN Schritt im Plan, nicht wieder nach dem ersten. */
      "Was kann ich konkret tun?": {
        question: "Du hast Stopp gemacht. Was ist der nächste Schritt?",
        pictogram: "pikto-plan",
        answers: ["Ich zeige die Nachricht einer vertrauten Person.", "Ich lösche alles und sage nichts."],
        correctIndex: 0,
        feedbackWrong: "Dann bist du allein damit. Zeig die Nachricht lieber jemandem.",
        feedbackCorrect: "Genau. Zeigen und Hilfe holen ist der nächste Schritt.",
        remember: "Ich zeige die Nachricht. Ich hole Hilfe."
      },
      "Externe Hilfe": {
        question: "Musst du bei einer Beratungs-Stelle allein anrufen?",
        pictogram: "pikto-help",
        answers: ["Ja, das muss ich allein machen.", "Nein. Eine vertraute Person kann mitkommen."],
        correctIndex: 1,
        feedbackWrong: "Du darfst jemanden mitnehmen. Das ist ausdrücklich erlaubt.",
        feedbackCorrect: "Richtig. Du musst das nicht allein machen.",
        remember: "Es gibt immer jemanden, der hilft."
      }
    },
    kurz: {
      "Etwas fühlt sich falsch an": {
        question: "Etwas fühlt sich falsch an. Was tust du?",
        pictogram: "pikto-no",
        answers: ["Ich mache weiter.", "Ich mache Stopp."],
        correctIndex: 1,
        feedbackWrong: "Weitermachen macht es oft schlimmer. Stopp ist erlaubt.",
        feedbackCorrect: "Genau. Stopp machen ist mutig und richtig.",
        remember: "Wenn es sich falsch anfühlt: Stopp."
      },
      "Wer hilft dir?": {
        question: "Wen fragst du bei einem Problem im Internet?",
        pictogram: "pikto-help",
        answers: ["Eine vertraute Person.", "Die unbekannte Person, die geschrieben hat."],
        correctIndex: 0,
        feedbackWrong: "Wer das Problem gemacht hat, hilft nicht dabei.",
        feedbackCorrect: "Richtig. Eine vertraute Person hilft dir.",
        remember: "Ich frage eine vertraute Person."
      },
      "Du bist nicht allein": {
        question: "Ist Hilfe holen eine Schwäche?",
        pictogram: "pikto-people",
        answers: ["Ja, das sollte ich allein schaffen.", "Nein. Es ist mutig."],
        correctIndex: 1,
        feedbackWrong: "Niemand schafft alles allein. Hilfe holen ist stark.",
        feedbackCorrect: "Genau. Hilfe holen ist mutig.",
        remember: "Hilfe holen ist mutig."
      }
    }
  },

  ki: {
    lessons: {
      "Was ist KI?": {
        question: "Was ist eine KI?",
        pictogram: "pikto-ki",
        answers: ["Ein Computer-Programm.", "Ein Mensch, der schnell tippt."],
        correctIndex: 0,
        feedbackWrong: "Da sitzt kein Mensch. Es ist ein Programm.",
        feedbackCorrect: "Richtig. KI ist ein Programm.",
        remember: "KI ist ein Programm. Kein Mensch."
      },
      "Wo triffst du KI?": {
        question: "Wo kann KI überall stecken?",
        pictogram: "pikto-globe",
        answers: ["Nur in besonderen KI-Apps.", "In vielen Apps. Auch ohne dass ich es sehe."],
        correctIndex: 1,
        feedbackWrong: "KI steckt heute auch in Apps, die du täglich nutzt.",
        feedbackCorrect: "Genau. KI ist oft eingebaut, ohne dass man es merkt.",
        remember: "KI ist in vielen Apps."
      },
      "KI kann Bilder und Stimmen fälschen": {
        question: "Am Telefon klingt jemand wie deine Tochter und bittet um Geld. Was tust du?",
        pictogram: "pikto-phone",
        answers: ["Ich schicke das Geld. Ich erkenne die Stimme.", "Ich lege auf und rufe die bekannte Nummer an."],
        correctIndex: 1,
        feedbackWrong: "KI kann Stimmen nachmachen. Nur ein Rückruf gibt Sicherheit.",
        feedbackCorrect: "Sehr gut. Auflegen und selbst zurückrufen.",
        remember: "Stimmen können gefälscht sein."
      }
    },
    kurz: {
      "Was ist KI?": {
        question: "Ist eine KI ein Mensch?",
        pictogram: "pikto-ki",
        answers: ["Nein. Sie ist ein Programm.", "Ja. Sie schreibt ja mit mir."],
        correctIndex: 0,
        feedbackWrong: "Sie schreibt, aber sie ist ein Programm. Kein Mensch.",
        feedbackCorrect: "Genau. Ein Programm, kein Mensch.",
        remember: "KI ist ein Programm. Kein Mensch."
      },
      "Was kann KI?": {
        question: "Die KI gibt dir eine Antwort. Stimmt sie immer?",
        pictogram: "pikto-search",
        answers: ["Ja, sie weiß alles.", "Nein. Ich prüfe wichtige Antworten."],
        correctIndex: 1,
        feedbackWrong: "KI klingt sicher, auch wenn sie sich irrt. Prüfen hilft.",
        feedbackCorrect: "Richtig. Wichtige Antworten prüfst du nach.",
        remember: "KI-Antworten prüfe ich."
      },
      "Wann musst du aufpassen?": {
        question: "Ein Bild sieht echt aus. Ist es deshalb echt?",
        pictogram: "pikto-fake",
        answers: ["Nein. KI kann Bilder fälschen.", "Ja. Man sieht es ja."],
        correctIndex: 0,
        feedbackWrong: "Sehen reicht heute nicht mehr. KI macht sehr echte Bilder.",
        feedbackCorrect: "Genau. Erst prüfen, dann glauben.",
        remember: "Nicht alles glauben. Erst prüfen."
      }
    }
  },

  fakes: {
    lessons: {
      "Was sind Fake News?": {
        question: "Was sind Fake News?",
        pictogram: "pikto-fake",
        answers: ["Ein Irrtum, der zufällig passiert.", "Falsche Nachrichten, die jemand mit Absicht verbreitet."],
        correctIndex: 1,
        feedbackWrong: "Ein Irrtum passiert. Fake News werden gemacht. Das ist der Unterschied.",
        feedbackCorrect: "Richtig. Dahinter steckt eine Absicht.",
        remember: "Nicht jede Nachricht im Internet ist wahr."
      },
      "Warum gibt es Fake News?": {
        question: "Warum machen Menschen Fake News?",
        pictogram: "pikto-money",
        answers: ["Zum Beispiel für Geld durch viele Klicks.", "Aus Versehen."],
        correctIndex: 0,
        feedbackWrong: "Aus Versehen passiert das nicht. Es steckt ein Ziel dahinter.",
        feedbackCorrect: "Genau. Geld, Wut oder eine Meinung sind häufige Ziele.",
        remember: "Fake News haben ein Ziel."
      }
    },
    kurz: {
      "Was ist eine Fake-Nachricht?": {
        question: "Was ist eine Fake-Nachricht?",
        pictogram: "pikto-fake",
        answers: ["Eine lustige Nachricht.", "Eine Nachricht, die nicht stimmt."],
        correctIndex: 1,
        feedbackWrong: "Lustig kann sie auch sein. Wichtig ist: sie stimmt nicht.",
        feedbackCorrect: "Richtig. Sie sieht echt aus, ist aber falsch.",
        remember: "Fake-Nachrichten sind Lügen."
      },
      "Wie erkennst du Fakes?": {
        question: "Eine Nachricht macht dich sehr aufgeregt. Was heißt das?",
        pictogram: "pikto-feel",
        answers: ["Das kann ein Warnzeichen sein.", "Dann ist sie besonders wichtig."],
        correctIndex: 0,
        feedbackWrong: "Aufregung ist oft Absicht. Sie soll das Nachdenken verhindern.",
        feedbackCorrect: "Genau. Große Aufregung ist ein Warnzeichen.",
        remember: "Erst prüfen. Dann teilen."
      },
      "Was tust du bei Fakes?": {
        question: "Du erkennst eine Fake-Nachricht. Was tust du?",
        pictogram: "pikto-no",
        answers: ["Ich schicke sie weiter und warne alle.", "Ich schicke sie nicht weiter."],
        correctIndex: 1,
        feedbackWrong: "Auch als Warnung verbreitest du sie damit. Lieber nur der vertrauten Person zeigen.",
        feedbackCorrect: "Richtig. Nicht weiterleiten.",
        remember: "Fakes leite ich nicht weiter."
      }
    }
  },

  betrug: {
    lessons: {
      "Falsche Nachrichten erkennen": {
        question: "Welches ist ein Warnzeichen?",
        pictogram: "pikto-warning",
        answers: ["Die Nachricht macht Druck: Sofort! Schnell!", "Die Nachricht ist freundlich geschrieben."],
        correctIndex: 0,
        feedbackWrong: "Freundlich schreiben Betrüger auch. Der Druck ist das Zeichen.",
        feedbackCorrect: "Genau. Druck und Eile sind das Warnzeichen.",
        remember: "Druck und Drohung sind Warnzeichen."
      },
      "Abo-Fallen": {
        question: "Ein Angebot sagt: Kostenlos testen! Worauf schaust du?",
        pictogram: "pikto-card",
        answers: ["Auf das Bild vom Produkt.", "Auf die kleine Schrift unten."],
        correctIndex: 1,
        feedbackWrong: "Das Bild sagt nichts über die Kosten. Unten steht der Preis pro Monat.",
        feedbackCorrect: "Richtig. In der kleinen Schrift steht der Haken.",
        remember: "Kostenlos kann teuer werden. Ich lese genau."
      },
      "Was tun nach einem Betrug?": {
        question: "Du bist auf einen Betrug hereingefallen. Was gilt?",
        pictogram: "pikto-help",
        answers: ["Das ist mir peinlich. Ich sage nichts.", "Das kann jedem passieren. Ich hole schnell Hilfe."],
        correctIndex: 1,
        feedbackWrong: "Schweigen hilft nur den Betrügern. Schnelle Hilfe kann noch retten.",
        feedbackCorrect: "Genau. Kein Grund für Scham. Schnell Hilfe holen.",
        remember: "Betrug ist nicht meine Schuld. Ich hole Hilfe."
      }
    },
    kurz: {
      "Was ist Betrug im Internet?": {
        question: "Was wollen Betrüger von dir?",
        pictogram: "pikto-fraud",
        answers: ["Dein Geld oder deine Daten.", "Nur mit dir reden."],
        correctIndex: 0,
        feedbackWrong: "Das Reden ist nur der Anfang. Am Ende geht es um Geld oder Daten.",
        feedbackCorrect: "Richtig. Darum geht es fast immer.",
        remember: "Nicht jeder im Internet ist ehrlich."
      },
      "Wie erkennst du Betrug?": {
        question: "Du hast plötzlich etwas gewonnen. Was tust du?",
        pictogram: "pikto-money",
        answers: ["Ich freue mich und mache mit.", "Ich mache Stopp und frage nach."],
        correctIndex: 1,
        feedbackWrong: "Ein plötzlicher Gewinn ist fast immer ein Trick.",
        feedbackCorrect: "Sehr gut. Erst Stopp, dann fragen.",
        remember: "Druck und Gewinn: Stopp machen."
      },
      "Was tust du bei Betrug?": {
        question: "Eine Nachricht will Geld von dir. Was tust du?",
        pictogram: "pikto-no",
        answers: ["Ich zahle nichts und sage es jemandem.", "Ich zahle einen kleinen Betrag."],
        correctIndex: 0,
        feedbackWrong: "Auch kleine Beträge sind weg. Und danach kommt die nächste Forderung.",
        feedbackCorrect: "Richtig. Kein Geld senden und Bescheid sagen.",
        remember: "Kein Geld senden. Vertraute Person fragen."
      }
    }
  },

  einkaufen: {
    lessons: {
      "Gute Shops erkennen": {
        question: "Woran erkennst du einen guten Shop?",
        pictogram: "pikto-shop",
        answers: ["An sehr niedrigen Preisen.", "An einem Impressum mit Name und Adresse."],
        correctIndex: 1,
        feedbackWrong: "Sehr niedrige Preise sind eher ein Warnzeichen als ein gutes Zeichen.",
        feedbackCorrect: "Richtig. Im Impressum steht, wer dahintersteckt.",
        remember: "Ich kaufe bei Shops, die ich geprüft habe."
      },
      "Versteckte Kosten in Apps und Spielen": {
        question: "Ein Spiel ist kostenlos. Kann es trotzdem Geld kosten?",
        pictogram: "pikto-money",
        answers: ["Ja. Käufe im Spiel kosten echtes Geld.", "Nein. Kostenlos ist kostenlos."],
        correctIndex: 0,
        feedbackWrong: "Der Einstieg ist kostenlos. Die Käufe im Spiel sind es nicht.",
        feedbackCorrect: "Genau. Viele kleine Käufe werden schnell teuer.",
        remember: "Auch kleine Käufe kosten echtes Geld."
      },
      "Vor dem Kaufen prüfen": {
        question: "Welche Frage stellst du dir vor dem letzten Klick?",
        pictogram: "pikto-ask",
        answers: ["Sieht die Seite schön aus?", "Was kostet es wirklich, mit Versand?"],
        correctIndex: 1,
        feedbackWrong: "Wie die Seite aussieht, sagt nichts über den Preis.",
        feedbackCorrect: "Richtig. Der Endpreis zählt, nicht der erste Preis.",
        remember: "Erst prüfen. Dann kaufen."
      },
      "Falsch gekauft? Das kannst du tun": {
        question: "Du hast online etwas Falsches gekauft. Was gilt oft?",
        pictogram: "pikto-plan",
        answers: ["Ich kann es oft 14 Tage zurückgeben.", "Gekauft ist gekauft."],
        correctIndex: 0,
        feedbackWrong: "Bei vielen Online-Käufen hast du 14 Tage Zeit. Das heißt Widerruf.",
        feedbackCorrect: "Genau. Das nennt man Widerruf.",
        remember: "Online-Käufe kann ich oft 14 Tage zurückgeben."
      }
    },
    kurz: {
      "Einkaufen im Internet": {
        question: "Wo kaufst du am besten ein?",
        pictogram: "pikto-shop",
        answers: ["Bei irgendeinem billigen Shop.", "Bei einem Shop, den ich kenne."],
        correctIndex: 1,
        feedbackWrong: "Sehr billig und unbekannt ist eine schlechte Mischung.",
        feedbackCorrect: "Richtig. Bekannte Shops sind sicherer.",
        remember: "Ich kaufe bei sicheren Shops."
      },
      "Gute Shops erkennen": {
        question: "Welches Zeichen ist gut?",
        pictogram: "pikto-lock",
        answers: ["Ein Schloss und https in der Adresse.", "Viele blinkende Angebote."],
        correctIndex: 0,
        feedbackWrong: "Blinkende Angebote machen nur Druck. Das Schloss ist das Zeichen.",
        feedbackCorrect: "Gut erkannt. Schloss und https gehören dazu.",
        remember: "Schloss und https: gute Zeichen."
      },
      "Sicher bezahlen": {
        question: "Du kaufst zum ersten Mal in einem Shop. Wie bezahlst du?",
        pictogram: "pikto-bank",
        answers: ["Ich überweise das Geld vorher.", "Auf Rechnung."],
        correctIndex: 1,
        feedbackWrong: "Bei Vorkasse ist dein Geld weg, bevor die Ware da ist.",
        feedbackCorrect: "Richtig. Auf Rechnung zahlst du erst, wenn die Ware da ist.",
        remember: "Rechnung ist sicherer als Vorkasse."
      }
    }
  }
};
