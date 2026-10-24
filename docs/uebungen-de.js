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
   Optional (wie in topics.js): hinweis (Tipp bei „Ich bin unsicher“).

   Die Texte hier sind die LEICHTE Sprache und bleiben die Referenz.
   Einfach und Alltag (Paket T1, 29.09.2026) werden NICHT hier eingetragen,
   sondern wie bei allen Aufgaben in content-de.js (AUFGABEN_VERSIONS),
   unter der festen Aufgaben-ID "<thema>/lang|kurz/<Lektions-Titel>".
   Fehlt eine Fassung, zeigt die App die Leichte Sprache (Rückfall).
   Frage, Antworten, Rückmeldung, Tipp und Merksatz wechseln dann mit der
   Stufe; die Aufgabe selbst (schwierige Aufgaben, Frage des Tages) bleibt
   dieselbe.

   REGEL: die richtige Antwort darf nicht immer an derselben
   Stelle stehen. Sonst besteht man durch Muster statt durch
   Lesen. Unten steht sie bewusst gemischt.
   ============================================================= */

const EXTRA_PRACTICE = {

  /* datenschutz: seit Paket 2 (28.09.2026) stehen die Übungen direkt in
     topics.js. Die alten Einträge liegen in geparkt/datenschutz-umbau-2026-09-28.js. */

  whatsapp: {
    lessons: {
      "WhatsApp nutzen": {
        question: "Eine Person aus deinem Sport-Verein schreibt dir sehr oft. Du willst das nicht. Musst du antworten?",
        schluessel: "Eine Person schreibt dir. Musst du antworten?",
        pictogram: "pikto-message",
        answers: ["Ja. Sonst ist es unhöflich.", "Nein. Ich entscheide das.", "Nein. Ich schreibe: Bitte schreib mir nicht so oft."],
        correctIndex: 1,
        auchMoeglich: [2],
        feedbackWrong: ["Du musst nicht antworten. Auch nicht aus Höflichkeit. Du bestimmst, mit wem du schreibst.", null, null],
        feedbackAuch: [null, null, "Das ist klar und freundlich. So weiß die Person Bescheid."],
        feedbackCorrect: "Du entscheidest, wem du antwortest. Das ist nicht unhöflich.",
        remember: "Ich entscheide, wem ich antworte."
      },
      "Die KI in WhatsApp": {
        question: "Du fragst die KI in WhatsApp: Wo gibt es Pizza? Die KI fragt nach deiner Adresse. Was machst du?",
        schluessel: "Die KI in WhatsApp fragt nach deiner Adresse. Was tust du?",
        pictogram: "pikto-ki",
        answers: ["Ich schreibe meine Adresse nicht hin.", "Ich schreibe meine Adresse hin. Es ist ja nur ein Programm.", "Ich schreibe nichts mehr. Ich suche selbst im Internet."],
        correctIndex: 0,
        auchMoeglich: [2],
        feedbackWrong: [null, "Die KI kann deine Eingaben verarbeiten. Schreib ihr keine privaten Daten.", null],
        feedbackAuch: [null, null, "Deine Adresse bleibt bei dir. Pizza findest du auch ohne die KI."],
        feedbackCorrect: "Deine Adresse ist privat. Der KI schreibst du keine privaten Dinge.",
        remember: "Der KI schreibe ich nichts Privates."
      }
    },
    kurz: {
      "Unbekannte Nachrichten": {
        question: "Eine fremde Nummer schreibt dir: Hallo Kim, bist du das? Du heißt nicht Kim. Was machst du?",
        schluessel: "Eine unbekannte Person schreibt dir. Was tust du?",
        pictogram: "pikto-stranger",
        answers: ["Ich antworte nicht.", "Ich schreibe zurück. Ich sage meinen Namen.", "Ich blockiere die Nummer."],
        correctIndex: 0,
        auchMoeglich: [2],
        feedbackWrong: [null, "Dann kennt eine fremde Person deinen Namen. Und sie weiß: Hier antwortet jemand. Manche Betrüger schreiben viele Nummern einfach an.", null],
        feedbackAuch: [null, null, "Dann kann dir die Nummer nicht mehr schreiben."],
        feedbackCorrect: "Du kennst die Nummer nicht. Du musst nicht antworten. So erfährt die fremde Person nichts über dich.",
        remember: "Fremden Nummern sage ich nichts über mich."
      },
      "Links in Nachrichten": {
        question: "Eine fremde Nummer schreibt dir: Guter Job für dich. 200 Euro am Tag. Tippe hier. Was machst du?",
        schluessel: "In einer fremden Nachricht ist ein Link. Was tust du?",
        pictogram: "pikto-link",
        answers: ["Ich tippe auf den Link. Ich will mehr wissen.", "Ich tippe nicht auf den Link.", "Ich frage erst jemanden. Der Link bleibt zu."],
        correctIndex: 1,
        auchMoeglich: [2],
        feedbackWrong: ["Die Nachricht verspricht viel Geld. Das soll neugierig machen. Der Link kann auf eine falsche Seite führen. Dort will jemand deine Daten.", null, null],
        feedbackAuch: [null, null, "Der Link bleibt zu. Das ist das Wichtigste. Du kannst das auch allein entscheiden."],
        feedbackCorrect: "Du kennst die Nummer nicht. Dann bleibt der Link zu. Du verpasst nichts.",
        remember: "Fremde Links tippe ich nicht an."
      },
      "Dein WhatsApp-Code": {
        question: "Ein Freund schreibt dir: Schick mir bitte deinen WhatsApp-Code. Was machst du?",
        schluessel: "Ein Freund bittet dich um deinen WhatsApp-Code. Was tust du?",
        pictogram: "pikto-code",
        answers: ["Ich schicke ihm den Code. Er ist ja mein Freund.", "Ich schicke den Code nicht.", "Ich schicke den Code nicht. Ich rufe meinen Freund an."],
        correctIndex: 1,
        auchMoeglich: [2],
        feedbackWrong: ["Oft schreibt gar nicht der Freund. Betrüger nutzen sein Konto. Der Code bleibt bei dir.", null, null],
        feedbackAuch: [null, null, "Der Code bleibt bei dir. Am Telefon merkst du: Hat dein Freund das wirklich geschrieben?"],
        feedbackCorrect: "Mit dem Code kann jemand dein Konto stehlen. Darum bleibt der Code immer bei dir.",
        remember: "Meinen Code gebe ich nie weiter."
      }
    }
  },

  facebook: {
    lessons: {
      "Profil": {
        question: "Facebook fragt dich: Willst du deine Telefon-Nummer ins Profil schreiben? Was machst du?",
        schluessel: "Was heißt „öffentlich“ bei deinem Profil?",
        pictogram: "pikto-globe",
        answers: ["Ich schreibe sie rein. Facebook fragt ja danach.", "Ich schreibe sie rein. Dann finden mich alte Freunde.", "Ich lasse das Feld leer."],
        correctIndex: 2,
        feedbackWrong: ["Facebook fragt viel. Du musst nicht alles ausfüllen. Deine Telefon-Nummer ist privat.", "Alte Freunde finden dich über deinen Namen. Deine Nummer sehen vielleicht auch fremde Menschen.", null],
        feedbackCorrect: "Das Feld ist freiwillig. Deine Freunde können dich nach der Nummer fragen.",
        remember: "Ich zeige nicht alles in meinem Profil."
      }
    },
    kurz: {
      "Dein Facebook-Profil": {
        question: "In deinem Facebook-Profil stehen private Angaben. Zum Beispiel dein Wohn-Ort. Wer soll das sehen?",
        schluessel: "Wer soll dein Profil sehen?",
        pictogram: "pikto-people",
        answers: ["Alle. Ich habe nichts zu verstecken.", "Nur meine Freunde. Das stelle ich ein.", "Niemand. Ich lösche die Angabe."],
        correctIndex: 1,
        auchMoeglich: [2],
        feedbackWrong: ["Dann sehen auch fremde Menschen deine privaten Angaben. Das hat nichts mit Verstecken zu tun. Du bestimmst, wer was über dich weiß.", null, null],
        feedbackAuch: [null, null, "Dann sieht es niemand mehr. Du musst nicht alles ins Profil schreiben."],
        feedbackCorrect: "Private Angaben zeigst du nur Freunden. Aber: Deinen Namen, dein aktuelles Profil-Bild und dein Titel-Bild sehen alle.",
        remember: "Private Angaben zeige ich nur Freunden."
      },
      "Unbekannte Personen": {
        question: "Bei Facebook kommt eine Anfrage von Jonas Weber. Ihr habt 2 gemeinsame Freunde. Du kennst Jonas nicht. Was machst du?",
        schluessel: "Eine unbekannte Person will dein Freund sein. Was tust du?",
        pictogram: "pikto-stranger",
        answers: ["Ich nehme an. Wir haben ja gemeinsame Freunde.", "Ich frage erst einen von den gemeinsamen Freunden.", "Ich nehme die Anfrage nicht an."],
        correctIndex: 2,
        auchMoeglich: [1],
        feedbackWrong: ["Gemeinsame Freunde sagen wenig. Vielleicht kennen deine Freunde Jonas auch nicht. Manche falschen Profile sammeln viele Freunde.", null, null],
        feedbackAuch: [null, "Dann weißt du mehr über Jonas. Die Anfrage kann so lange warten.", null],
        feedbackCorrect: "Du kennst Jonas nicht. Gemeinsame Freunde sagen wenig über ihn. Du musst die Anfrage nicht annehmen.",
        remember: "Unbekannte Anfragen lehne ich ab."
      },
      "Komische Nachrichten": {
        question: "Dein Facebook-Freund Markus schreibt dir: Bist du das in dem Video? Schau mal. Dabei ist ein Link. Was machst du?",
        schluessel: "Jemand schickt dir einen Link und fragt nach Geld. Was tust du?",
        pictogram: "pikto-warning",
        answers: ["Ich tippe nicht auf den Link.", "Ich tippe auf den Link. Ich will das Video sehen.", "Ich tippe nicht. Ich rufe Markus an."],
        correctIndex: 0,
        auchMoeglich: [2],
        feedbackWrong: [null, "Die Nachricht soll neugierig machen. Der Link führt oft auf eine falsche Seite. Dort will jemand dein Passwort.", null],
        feedbackAuch: [null, null, "Der Link bleibt zu. Am Telefon merkst du: Hat Markus das wirklich geschrieben?"],
        feedbackCorrect: "So eine Nachricht kommt oft von einem gestohlenen Konto. Der Link bleibt zu. Dann bleibt dein Passwort bei dir.",
        remember: "Fremde Links tippe ich nicht an."
      }
    }
  },

  instagram: {
    lessons: {},
    kurz: {
      "Deine Fotos auf Instagram": {
        question: "Dein Instagram-Konto ist privat. Ein fremdes Profil will dir folgen. Was machst du?",
        schluessel: "Wie stellst du dein Konto am besten ein?",
        pictogram: "pikto-lock",
        answers: ["Ich nehme an. Mein Konto ist ja privat.", "Ich lehne die Anfrage ab.", "Ich schaue mir das Profil erst an."],
        correctIndex: 1,
        auchMoeglich: [2],
        feedbackWrong: ["Privat hilft nur mit Auswahl. Nach dem Annehmen sieht das fremde Profil alle deine Fotos.", null, null],
        feedbackAuch: [null, null, "Dann weißt du mehr. Du entscheidest danach: annehmen oder ablehnen."],
        feedbackCorrect: "Bei einem privaten Konto bestätigst du jede Anfrage selbst. Nur diese Menschen sehen deine Fotos. Profil-Bild, Name und Profil-Text sehen trotzdem alle.",
        remember: "Mein Konto ist privat."
      },
      "Fotos von anderen Personen": {
        question: "Du hast ein Foto von der Geburtstags-Feier. Dein Freund Ben schläft darauf auf dem Sofa. Du findest das Foto lustig. Was machst du?",
        schluessel: "Auf deinem Foto ist eine Freundin. Was machst du vor dem Posten?",
        pictogram: "pikto-friend",
        answers: ["Ich frage Ben: Darf ich das posten?", "Ich poste es. Es ist doch nur Spaß.", "Ich poste es nicht. Ich schicke es nur Ben."],
        correctIndex: 0,
        auchMoeglich: [2],
        feedbackWrong: [null, "Für Ben ist das Foto vielleicht peinlich. Viele Menschen können es sehen. Darum darf Ben mitentscheiden.", null],
        feedbackAuch: [null, null, "Dann sieht nur Ben das Foto. Er kann selbst entscheiden."],
        feedbackCorrect: "Es ist sein Bild. Darum darf Ben mitentscheiden.",
        remember: "Fotos von anderen: erst fragen."
      },
      "Nachrichten von Unbekannten": {
        question: "Ein fremdes Profil schreibt dir: Hallo, du siehst nett aus. Wo wohnst du? Was machst du?",
        schluessel: "In deinem Postfach ist eine Nachricht von einem fremden Profil. Was tust du?",
        pictogram: "pikto-stranger",
        answers: ["Ich antworte nicht.", "Ich schreibe zurück. Ich sage nur meine Stadt.", "Ich blockiere das Profil."],
        correctIndex: 0,
        auchMoeglich: [2],
        feedbackWrong: [null, "Dann weiß eine fremde Person, wo du wohnst. Und sie weiß: Hier antwortet jemand.", null],
        feedbackAuch: [null, null, "Dann kann dir das Profil nicht mehr schreiben."],
        feedbackCorrect: "Du kennst das Profil nicht. Du musst nicht antworten. So erfährt die fremde Person nichts über dich.",
        remember: "Fremden Profilen muss ich nicht antworten."
      }
    }
  },

  youtube: {
    lessons: {
      "Kommentare": {
        question: "Du schreibst unter ein Video: Tolles Lied. Jemand antwortet dir: Du hast keine Ahnung. Was machst du?",
        schluessel: "Unter einem Video steht ein gemeiner Kommentar. Musst du antworten?",
        pictogram: "pikto-no",
        answers: ["Ich schreibe zurück: Du hast selber keine Ahnung.", "Ich antworte nicht.", "Ich lösche meinen Kommentar."],
        correctIndex: 1,
        feedbackWrong: ["Dann geht der Streit weiter. Es gibt nichts zu gewinnen. Nicht antworten ist erlaubt.", null, "Du musst deinen Kommentar nicht löschen. Deine Meinung darf stehen bleiben. Der andere war unfreundlich, nicht du."],
        feedbackCorrect: "Du musst auf keinen Kommentar reagieren. Deine Meinung darf stehen bleiben.",
        remember: "Ich muss nicht auf Kommentare reagieren."
      },
      "Nicht jedes Video ist echt": {
        question: "Du siehst ein Video. Ein bekannter Fußballer sagt: Mit dieser App verdienst du 500 Euro am Tag. Das Video sieht echt aus. Was machst du?",
        schluessel: "In einem Video sagt ein bekannter Mensch etwas Komisches. Was kann sein?",
        pictogram: "pikto-fake",
        answers: ["Ich lade die App. Der Fußballer lügt doch nicht.", "Ich suche erst: Steht das auch in den Nachrichten?", "Ich lade die App nicht. Das Video kann gefälscht sein."],
        correctIndex: 2,
        auchMoeglich: [1],
        feedbackWrong: ["Das Video kann mit KI gemacht sein. KI kann Gesichter und Stimmen nachmachen. Vielleicht weiß der Fußballer nichts davon.", null, null],
        feedbackAuch: [null, "Das ist eine gute Prüfung. Du lädst nichts. Und du schaust an einer zweiten Stelle nach.", null],
        feedbackCorrect: "KI kann Gesichter und Stimmen nachmachen. Vielleicht weiß der Fußballer nichts von dem Video.",
        remember: "Auch Videos können gefälscht sein."
      }
    },
    kurz: {
      "Videos prüfen": {
        question: "Ein Video sagt: Ab Montag fährt in deiner Stadt kein Bus mehr. Was machst du?",
        schluessel: "Ein Video sagt etwas Überraschendes. Was tust du?",
        pictogram: "pikto-search",
        answers: ["Ich schaue auf der Seite von der Stadt nach.", "Ich glaube es. Das Video hat viele Aufrufe.", "Ich frage eine Nachbarin: Stimmt das?"],
        correctIndex: 0,
        auchMoeglich: [2],
        feedbackWrong: [null, "Viele Aufrufe sind kein Beweis. Auch falsche Videos sehen viele Menschen. Schau lieber an einer zweiten Stelle nach.", null],
        feedbackAuch: [null, null, "Vielleicht weiß sie mehr. Sonst schaut ihr zusammen nach."],
        feedbackCorrect: "Die Stadt weiß das am besten. Ein Video allein ist kein Beweis.",
        remember: "Ich prüfe: Stimmt das Video?"
      },
      "Werbung erkennen": {
        question: "Vor deinem Video kommt Werbung für Kopf-Hörer. Da steht: Nur heute 20 Euro billiger. Was machst du?",
        schluessel: "Im Video kommt Werbung. Musst du etwas kaufen?",
        pictogram: "pikto-shop",
        answers: ["Ich tippe auf die Werbung. Das Angebot gilt nur heute.", "Ich warte. Dann überspringe ich die Werbung.", "Ich brauche Kopf-Hörer. Ich vergleiche später in Ruhe Preise."],
        correctIndex: 1,
        auchMoeglich: [2],
        feedbackWrong: ["Nur heute: Das macht Druck. Das ist Absicht. Du musst nichts kaufen.", null, null],
        feedbackAuch: [null, null, "Kaufen ist erlaubt. Du entscheidest in Ruhe. Nicht die Werbung."],
        feedbackCorrect: "Du musst nichts kaufen. Manche Werbung kannst du überspringen. Dann geht dein Video weiter.",
        remember: "Ich kaufe nichts wegen Werbung."
      },
      "Pausen machen": {
        question: "Du schaust seit einer Stunde Videos. Deine Augen brennen. Das nächste Video startet schon. Was machst du?",
        schluessel: "Du schaust seit einer Stunde. Was ist gut für dich?",
        pictogram: "pikto-pause",
        answers: ["Ich schaue weiter. Das Video hat ja schon angefangen.", "Ich stelle einen Wecker. In 10 Minuten höre ich auf.", "Ich mache jetzt Pause."],
        correctIndex: 2,
        feedbackWrong: ["Das nächste Video startet immer von allein. Die Pause musst du selbst machen.", "Der Wecker ist eine gute Idee. Aber deine Augen brennen schon jetzt. Mach die Pause lieber gleich.", null],
        feedbackCorrect: "Deine Augen brauchen eine Pause. Du bestimmst das Ende. Nicht YouTube.",
        remember: "Nach einer Stunde mache ich Pause."
      }
    }
  },

  snapchat: {
    lessons: {
      "Bild vom Bildschirm": {
        question: "Du willst einen Snap schicken. Du stellst ein: Nur 3 Sekunden sichtbar. Ist dein Bild dann geschützt?",
        schluessel: "Dein Bild verschwindet nach zehn Sekunden. Ist es dann weg?",
        pictogram: "pikto-screen",
        answers: ["Ja. In 3 Sekunden schafft das niemand.", "Nein. Ein Bildschirm-Foto geht trotzdem.", "Nein. Aber Snapchat sagt mir dann Bescheid."],
        correctIndex: 1,
        feedbackWrong: ["Ein Bildschirm-Foto dauert eine Sekunde. Danach ist dein Bild gespeichert.", null, "Snapchat sagt dir oft Bescheid. Aber dann ist das Bild schon gespeichert."],
        feedbackCorrect: "Ein Bildschirm-Foto dauert eine Sekunde. Darum überlegst du vor dem Senden: Darf das Bild bleiben?",
        remember: "Ich denke vor dem Senden nach."
      }
    },
    kurz: {
      "Bilder verschwinden nicht wirklich": {
        question: "Du hast ein albernes Foto von dir. Du willst es einem Freund als Snap schicken. Was überlegst du vorher?",
        schluessel: "Welche Bilder schickst du?",
        pictogram: "pikto-photo",
        answers: ["Nichts. Der Snap ist ja nach 10 Sekunden weg.", "Dürfen auch andere das Foto sehen? Nur dann schicke ich es.", "Ich schicke es. Mein Freund zeigt es bestimmt niemandem."],
        correctIndex: 1,
        feedbackWrong: ["Der Snap verschwindet nur auf deinem Bildschirm. Dein Freund kann vorher ein Bildschirm-Foto machen.", null, "Vielleicht. Aber sicher weißt du es nicht. Ein Bildschirm-Foto kann er weiter-schicken. Auch aus Versehen."],
        feedbackCorrect: "Andere können ein Bild speichern. Also prüfst du vorher: Dürfen alle es sehen?",
        remember: "Bilder verschwinden nicht wirklich."
      },
      "Dein Standort": {
        question: "Du öffnest die Karte bei Snapchat. Du siehst: Alle deine Kontakte sehen deinen Ort. Auch fast fremde Menschen. Was machst du?",
        schluessel: "Snapchat zeigt deinen Ort. Was machst du?",
        pictogram: "pikto-location",
        answers: ["Ich lasse es so. Dann finden mich meine Freunde.", "Ich zeige meinen Ort nur noch 2 guten Freunden.", "Ich schalte den Standort aus."],
        correctIndex: 2,
        feedbackWrong: ["Dann sehen auch fast fremde Menschen: Wo wohnst du? Wann bist du unterwegs?", "Das ist besser als für alle. Aber auch ein Freund kann es weitererzählen. Am sichersten ist: Standort aus.", null],
        feedbackCorrect: "Dann zeigt die Karte deinen Ort nicht mehr. Aber: Auch ein Bild kann den Ort zeigen.",
        remember: "Ich schalte den Standort aus."
      },
      "Niemand darf dich zwingen": {
        question: "Ein Bekannter schreibt dir bei Snapchat: Schick mir ein Bild von dir. Alle anderen machen das auch. Du willst das nicht. Was machst du?",
        schluessel: "Jemand macht dir Stress: Schick mir ein Bild! Was gilt?",
        pictogram: "pikto-no",
        answers: ["Ich schreibe: Nein. Das will ich nicht.", "Ich schicke ein Bild. Alle anderen machen es ja auch.", "Ich sage Nein. Dann blockiere ich ihn."],
        correctIndex: 0,
        auchMoeglich: [2],
        feedbackWrong: [null, "Du weißt nicht: Stimmt das überhaupt? Und es ist egal. Dein Nein gilt.", null],
        feedbackAuch: [null, null, "Dann kann er dir nicht mehr schreiben. Dein Nein gilt."],
        feedbackCorrect: "Du willst das nicht. Dein Nein gilt. Du musst es nicht erklären.",
        remember: "Ich darf nein sagen."
      }
    }
  },

  tiktok: {
    lessons: {
      "Gefährliche Trends erkennen": {
        question: "Ein Trend sagt: Iss einen ganz scharfen Chip. Halte 5 Minuten durch. Trink nichts. Deine Freunde filmen schon. Was machst du?",
        schluessel: "Ein Trend sieht gefährlich aus. Was tust du?",
        pictogram: "pikto-warning",
        answers: ["Ich esse den Chip. Meine Freunde warten ja.", "Ich sage: Ich filme lieber. Essen will ich das nicht.", "Ich mache nicht mit."],
        correctIndex: 2,
        auchMoeglich: [1],
        feedbackWrong: ["Sehr scharfe Chips können weh tun. Manche Menschen bekommen schlecht Luft. Deine Freunde können warten.", null, null],
        feedbackAuch: [null, "Dann bist du dabei. Aber du isst nichts Gefährliches.", null],
        feedbackCorrect: "Der Trend kann weh tun. Du musst bei keinem Trend mitmachen. Auch nicht vor Freunden.",
        remember: "Ich muss bei keinem Trend mitmachen."
      },
      "Gefühle und Pausen": {
        question: "Du schaust abends TikTok. Nach vielen Videos bist du nervös. Du kannst nicht abschalten. Was machst du?",
        schluessel: "Ein Video macht dich traurig. Was darfst du?",
        pictogram: "pikto-feel",
        answers: ["Ich schaue weiter. Vielleicht kommt ein ruhiges Video.", "Ich schließe die App. Ich rede mit jemandem.", "Ich schließe die App. Ich lege das Handy weg."],
        correctIndex: 2,
        auchMoeglich: [1],
        feedbackWrong: ["Weiterschauen macht es meistens nicht besser. Das Handy weglegen hilft mehr.", null, null],
        feedbackAuch: [null, "Die App ist zu. Und Reden hilft beim Abschalten.", null],
        feedbackCorrect: "Du darfst TikTok weglegen. Dein Kopf braucht jetzt Ruhe.",
        remember: "Ich darf TikTok weglegen."
      },
      "Nicht jedes Video ist echt": {
        question: "Du siehst ein Video. Eine bekannte Ärztin sagt: Diese Tabletten machen dich in 1 Woche schlank. Was machst du?",
        schluessel: "Eine bekannte Stimme sagt etwas Seltsames in einem Video. Was kann sein?",
        pictogram: "pikto-fake",
        answers: ["Ich glaube das nicht sofort. Das Video kann gefälscht sein.", "Ich bestelle die Tabletten. Die Ärztin kenne ich aus dem Fernsehen.", "Ich frage in meiner Apotheke nach."],
        correctIndex: 0,
        auchMoeglich: [2],
        feedbackWrong: [null, "Auch Stimmen und Gesichter kann man fälschen. Vielleicht weiß die Ärztin nichts von dem Video.", null],
        feedbackAuch: [null, null, "Das ist eine gute Prüfung. In der Apotheke kennt man sich mit Tabletten aus."],
        feedbackCorrect: "KI kann Stimmen und Gesichter nachmachen. Vielleicht weiß die Ärztin nichts von dem Video.",
        remember: "Auch Videos und Stimmen können gefälscht sein."
      }
    },
    kurz: {
      "Was du bei TikTok siehst": {
        question: "Bei TikTok springen viele von einer hohen Mauer. Ein Freund schreibt dir: Mach auch ein Video davon. Was machst du?",
        schluessel: "Viele machen einen gefährlichen Trend nach. Was tust du?",
        pictogram: "pikto-no",
        answers: ["Ich mache nicht mit.", "Ich mache mit. Alle machen es ja.", "Ich mache ein anderes Video. Ohne Gefahr."],
        correctIndex: 0,
        auchMoeglich: [2],
        feedbackWrong: [null, "Viele Videos heißen nicht: Das ist sicher. Du siehst nur die guten Sprünge.", null],
        feedbackAuch: [null, null, "Dann bist du dabei. Aber ohne Risiko. Du entscheidest selbst."],
        feedbackCorrect: "Du entscheidest selbst. Du musst bei keinem Trend mitmachen. Deine Gesundheit ist wichtiger.",
        remember: "Ich muss bei keinem Trend mitmachen."
      },
      "Nachrichten auf TikTok": {
        question: "Du postest ein Tanz-Video. Jemand aus den Kommentaren schreibt dir privat: Tolles Video. Wollen wir uns treffen? Du kennst die Person nicht. Was machst du?",
        schluessel: "Jemand aus den Kommentaren schreibt dir privat. Du kennst die Person nicht. Was tust du?",
        pictogram: "pikto-stranger",
        answers: ["Ich antworte kurz. Das ist höflich.", "Ich antworte nicht.", "Ich blockiere die Person."],
        correctIndex: 1,
        auchMoeglich: [2],
        feedbackWrong: ["Du kennst die Person nicht. Nach einer Antwort schreibt sie oft weiter. Du musst nicht höflich sein.", null, null],
        feedbackAuch: [null, null, "Dann kann dir die Person nicht mehr schreiben."],
        feedbackCorrect: "Du kennst die Person nicht. Du musst nicht antworten. Du entscheidest, mit wem du schreibst.",
        remember: "Fremden Profilen muss ich nicht antworten."
      },
      "Pause machen": {
        question: "Du willst heute Abend nur 30 Minuten TikTok schauen. Du weißt: Du vergisst oft die Zeit. Was machst du vorher?",
        schluessel: "Was hilft dir beim Aufhören?",
        pictogram: "pikto-clock",
        answers: ["Nichts. Ich merke das schon selbst.", "Ich stelle in TikTok die Pausen-Erinnerung ein.", "Ich stelle einen Timer auf 30 Minuten."],
        correctIndex: 2,
        auchMoeglich: [1],
        feedbackWrong: ["Die App hört nicht von allein auf. Beim Schauen vergisst man leicht die Zeit. Ein Timer hilft.", null, null],
        feedbackAuch: [null, "Dann erinnert dich TikTok selbst an die Pause.", null],
        feedbackCorrect: "Ein Timer erinnert dich. Die App hört nicht von allein auf.",
        remember: "Ich stelle einen Timer."
      }
    }
  },

  /* hilfe: seit Paket H1 (30.09.2026) neu aufgebaut – noch ohne Übungen (sie
     kommen mit den Hilfe-Aufgaben). Die alten Einträge liegen wörtlich in
     geparkt/hilfe-umbau-2026-09-30.js. */

  ki: {
    lessons: {
      "Was ist KI?": {
        question: "Du fragst eine KI nach einem Rezept für Apfel-Kuchen. Nach 2 Sekunden ist die Antwort da. Wie macht die KI das?",
        schluessel: "Was ist eine KI?",
        pictogram: "pikto-ki",
        answers: ["Ein Mensch tippt sehr schnell.", "Das Programm hat sehr viele Texte gelernt.", "Die KI kennt mich. Sie weiß: Das mag ich."],
        correctIndex: 1,
        feedbackWrong: ["Da sitzt kein Mensch. So schnell tippt niemand. Es ist ein Programm.", null, "Die KI kennt dich nicht. Sie hat viele Rezepte gelernt. Daraus baut sie eine Antwort."],
        feedbackCorrect: "KI ist ein Programm. Es hat sehr viele Texte gelernt. Daraus baut es schnell eine Antwort.",
        remember: "KI ist ein Programm. Kein Mensch."
      },
      "Wo triffst du KI?": {
        question: "In WhatsApp siehst du einen neuen blauen Kreis. Du tippst darauf. Ein Chat geht auf: Frag Meta AI. Was ist das?",
        schluessel: "Wo kann KI überall stecken?",
        pictogram: "pikto-globe",
        answers: ["Eine KI. Sie ist in WhatsApp eingebaut.", "Ein neuer Kontakt. Ein Mensch von WhatsApp.", "Ein Fehler. Ich lösche lieber WhatsApp."],
        correctIndex: 0,
        feedbackWrong: [null, "Meta AI ist kein Mensch. Es ist eine KI. Sie ist in WhatsApp eingebaut.", "Das ist kein Fehler. Du musst WhatsApp nicht löschen. Du musst die KI auch nicht benutzen."],
        feedbackCorrect: "KI ist in vielen Apps eingebaut. Du entscheidest: Will ich sie benutzen?",
        remember: "KI ist in vielen Apps."
      },
      "KI kann Bilder und Stimmen fälschen": {
        question: "Du bekommst eine Sprach-Nachricht. Die Stimme klingt wie dein Chef. Er sagt: Kauf bitte 3 Gutschein-Karten. Schick mir die Codes. Was machst du?",
        schluessel: "Am Telefon klingt jemand wie deine Tochter und bittet um Geld. Was tust du?",
        pictogram: "pikto-phone",
        answers: ["Ich kaufe die Karten. Mein Chef braucht sie ja.", "Ich kaufe nichts. Ich rufe meinen Chef selbst an.", "Ich kaufe nichts. Ich frage ihn morgen bei der Arbeit."],
        correctIndex: 1,
        auchMoeglich: [2],
        feedbackWrong: ["KI kann Stimmen nachmachen. Gutschein-Codes sind wie Geld. Betrüger fragen oft danach.", null, null],
        feedbackAuch: [null, null, "Auch so merkst du: Kam die Nachricht wirklich von ihm?"],
        feedbackCorrect: "KI kann Stimmen nachmachen. Am Telefon merkst du: Hat dein Chef das wirklich gesagt?",
        remember: "Stimmen können gefälscht sein."
      }
    },
    kurz: {
      "Was ist KI?": {
        question: "Du schreibst mit dem Chatbot von deiner Kranken-Kasse. Er schreibt: Hallo, ich bin Mia. Wie kann ich helfen? Wer ist Mia?",
        schluessel: "Ist eine KI ein Mensch?",
        pictogram: "pikto-ki",
        answers: ["Ein Programm. Es heißt nur Mia.", "Eine Mitarbeiterin. Sie hat ja einen Namen.", "Das weiß ich nicht. Ich frage: Bist du ein Mensch?"],
        correctIndex: 0,
        auchMoeglich: [2],
        feedbackWrong: [null, "Viele Chatbots haben einen Namen. Das macht sie freundlich. Aber Mia ist ein Programm. Kein Mensch.", null],
        feedbackAuch: [null, null, "Du darfst nachfragen. Viele Chatbots sagen dann: Ich bin ein Programm."],
        feedbackCorrect: "Mia ist ein Programm. Der Name macht den Chatbot nur freundlich.",
        remember: "KI ist ein Programm. Kein Mensch."
      },
      "Was kann KI?": {
        question: "Du fragst eine KI: Wie lange hat das Bürger-Amt morgen offen? Die KI schreibt: Von 8 bis 18 Uhr. Du willst morgen hingehen. Was machst du?",
        schluessel: "Die KI gibt dir eine Antwort. Stimmt sie immer?",
        pictogram: "pikto-search",
        answers: ["Ich gehe um 17 Uhr hin. Die KI hat es ja gesagt.", "Ich schaue auf der Seite vom Bürger-Amt nach.", "Ich rufe beim Bürger-Amt an."],
        correctIndex: 1,
        auchMoeglich: [2],
        feedbackWrong: ["KI klingt sicher. Aber sie kann sich irren. Vielleicht stehst du dann vor einer geschlossenen Tür.", null, null],
        feedbackAuch: [null, null, "Auch so weißt du die Zeiten direkt vom Amt."],
        feedbackCorrect: "Das Amt weiß es am besten. Die KI war ein guter Anfang. Wichtige Antworten prüfst du nach.",
        remember: "KI-Antworten prüfe ich."
      },
      "Wann musst du aufpassen?": {
        question: "Dein Telefon klingelt. Die Stimme klingt wie deine Schwester. Sie sagt: Ich hatte einen Unfall. Ich brauche sofort 2000 Euro. Was machst du?",
        schluessel: "Am Telefon klingt eine Stimme wie deine Schwester. Sie will sofort Geld. Was tust du?",
        pictogram: "pikto-phone",
        answers: ["Ich überweise das Geld schnell. Sie braucht es ja.", "Ich bleibe am Telefon. Ich will erst mehr hören.", "Ich lege auf. Ich rufe meine Schwester selbst an."],
        correctIndex: 2,
        feedbackWrong: ["KI kann Stimmen nachmachen. Die Stimme allein beweist nichts. Leg auf. Ruf deine Schwester selbst an.", "Betrüger machen am Telefon Druck. Langes Zuhören macht das Auflegen schwer. Leg lieber gleich auf.", null],
        feedbackCorrect: "KI kann Stimmen nachmachen. Du rufst die bekannte Nummer selbst an. So kannst du nachfragen.",
        remember: "Ich lege auf. Ich rufe selbst an."
      }
    }
  },

  fakes: {
    lessons: {
      "Was sind Fake News?": {
        question: "Eine Zeitung schreibt: Das Konzert ist am Samstag. Am nächsten Tag schreibt sie: Entschuldigung, es ist am Sonntag. War das eine Fake-Nachricht?",
        schluessel: "Was sind Fake News?",
        pictogram: "pikto-fake",
        answers: ["Ja. Die Zeitung hat etwas Falsches geschrieben.", "Nein. Das war ein Fehler aus Versehen.", "Ja. Jede falsche Nachricht ist eine Lüge."],
        correctIndex: 1,
        feedbackWrong: ["Die Zeitung hat aus Versehen einen Fehler gemacht. Sie hat ihn verbessert. Fake News macht jemand mit Absicht.", null, "Ein Fehler ist keine Lüge. Eine Lüge ist Absicht. Die Zeitung hat den Fehler selbst verbessert."],
        feedbackCorrect: "Ein Irrtum passiert aus Versehen. Fake News macht jemand mit Absicht. Das ist der Unterschied.",
        remember: "Nicht jede Nachricht im Internet ist wahr."
      },
      "Warum gibt es Fake News?": {
        question: "Eine Seite schreibt jeden Tag unglaubliche Nachrichten. Daneben ist sehr viel Werbung. Warum macht die Seite das?",
        schluessel: "Warum machen Menschen Fake News?",
        pictogram: "pikto-money",
        answers: ["Sie verdient Geld mit vielen Aufrufen.", "Sie will mich gut informieren.", "Das passiert aus Versehen. Niemand will das."],
        correctIndex: 0,
        feedbackWrong: [null, "Unglaubliche Nachrichten bringen viele Aufrufe. Viele Aufrufe bringen Geld durch Werbung. Um Wahrheit geht es dabei nicht.", "Aus Versehen passiert das nicht jeden Tag. Es steckt ein Ziel dahinter."],
        feedbackCorrect: "Viele Aufrufe bringen Geld durch Werbung. Fake News haben ein Ziel.",
        remember: "Fake News haben ein Ziel."
      }
    },
    kurz: {
      "Was ist eine Fake-Nachricht?": {
        question: "Du liest auf dem Handy: Ab Montag ist Bargeld in Deutschland verboten. Die Nachricht sieht aus wie von einer echten Zeitung. Was machst du?",
        schluessel: "Was ist eine Fake-Nachricht?",
        pictogram: "pikto-fake",
        answers: ["Ich glaube es. Es sieht aus wie eine echte Nachricht.", "Ich bleibe ruhig. Das kann eine Fake-Nachricht sein.", "Ich schaue auf der Seite von der Zeitung nach."],
        correctIndex: 1,
        auchMoeglich: [2],
        feedbackWrong: ["Fake-Nachrichten sehen oft echt aus. Das ist der Trick. Das Aussehen ist kein Beweis.", null, null],
        feedbackAuch: [null, null, "Dann siehst du: Steht die Nachricht dort wirklich?"],
        feedbackCorrect: "Eine Fake-Nachricht sieht echt aus. Aber sie stimmt nicht. Du glaubst sie nicht sofort.",
        remember: "Fake-Nachrichten sind Lügen."
      },
      "Wie erkennst du Fakes?": {
        question: "Du liest: In deinem Stadt-Teil laufen Einbrecher herum. Schließ alle Türen ab. Teile das sofort. Du bekommst Angst. Was machst du?",
        schluessel: "Eine Nachricht macht dich sehr aufgeregt. Was heißt das?",
        pictogram: "pikto-feel",
        answers: ["Ich mache Stopp. Ich prüfe die Nachricht erst.", "Ich teile es sofort. Alle sollen gewarnt sein.", "Ich schaue bei der Polizei nach: Steht das dort auch?"],
        correctIndex: 0,
        auchMoeglich: [2],
        feedbackWrong: [null, "Die Nachricht macht Angst. Das ist oft Absicht. Angst soll das Nachdenken verhindern. Prüf die Nachricht erst.", null],
        feedbackAuch: [null, null, "Die Polizei weiß das am besten. Dort stehen echte Warnungen."],
        feedbackCorrect: "Große Aufregung ist ein Warnzeichen. Dann machst du Stopp. Erst danach entscheidest du.",
        remember: "Aufregung ist ein Warnzeichen. Ich mache Stopp."
      },
      "Was tust du bei Fakes?": {
        question: "In deiner Familien-Gruppe steht eine Nachricht. Du hast geprüft: Sie ist falsch. Was machst du?",
        schluessel: "Du erkennst eine Fake-Nachricht. Was tust du?",
        pictogram: "pikto-no",
        answers: ["Ich leite sie weiter. Ich schreibe dazu: Das ist falsch.", "Ich schreibe in die Gruppe: Das stimmt nicht.", "Ich leite sie nicht weiter."],
        correctIndex: 2,
        auchMoeglich: [1],
        feedbackWrong: ["Auch eine Warnung verbreitet die Lüge weiter. Schreib lieber nur: Die Nachricht stimmt nicht.", null, null],
        feedbackAuch: [null, "So wissen die anderen Bescheid. Und die Lüge geht nicht weiter.", null],
        feedbackCorrect: "Du leitest die Nachricht nicht weiter. So verbreitet sich die Lüge nicht.",
        remember: "Fakes leite ich nicht weiter."
      }
    }
  },

  betrug: {
    lessons: {
      "Falsche Nachrichten erkennen": {
        question: "Du hast morgen einen Termin beim Zahnarzt. Die Praxis schickt dir eine SMS. Darin steht: Ihr Termin ist morgen um 10 Uhr. In der SMS ist kein Link. Niemand will Geld. Was machst du?",
        schluessel: "Welches ist ein Warnzeichen?",
        pictogram: "pikto-warning",
        answers: ["Ich lösche die SMS sofort. Jede SMS kann Betrug sein.", "Das ist eine normale Erinnerung. Ich gehe morgen hin.", "Ich rufe kurz in der Praxis an. Ich frage nach."],
        correctIndex: 1,
        auchMoeglich: [2],
        feedbackWrong: ["Nicht jede SMS ist Betrug. Hier fehlen die Warnzeichen. Die SMS droht nicht. Sie hat keinen Link. Und du hast den Termin wirklich.", null, null],
        feedbackAuch: [null, null, "Das geht immer. Die Nummer von der Praxis hast du schon."],
        feedbackCorrect: "Die SMS macht keinen Stress. Sie droht nicht. Sie will kein Geld und keine Daten. Und der Termin stimmt.",
        remember: "Stress und Drohung sind Warnzeichen."
      },
      "Abo-Fallen": {
        question: "Du willst eine Koch-App ausprobieren. Auf dem Knopf steht: 7 Tage kostenlos testen. Darunter steht ganz klein: Danach 10 Euro pro Woche. Was machst du?",
        schluessel: "Ein Angebot sagt: Kostenlos testen! Worauf schaust du?",
        pictogram: "pikto-card",
        answers: ["Ich tippe auf den Knopf. Kostenlos ist ja kostenlos.", "Ich lese erst die kleine Schrift. Dann entscheide ich.", "Ich suche eine andere Koch-App ohne Abo."],
        correctIndex: 1,
        auchMoeglich: [2],
        feedbackWrong: ["Kostenlos sind nur die ersten 7 Tage. Danach zahlst du jede Woche 10 Euro. Das steht in der kleinen Schrift.", null, null],
        feedbackAuch: [null, null, "Dann musst du später nichts kündigen. Und du zahlst nichts aus Versehen."],
        feedbackCorrect: "In der kleinen Schrift steht der Preis. Nach 7 Tagen kostet die App jede Woche Geld. Jetzt weißt du es. Und du entscheidest selbst.",
        remember: "Kostenlos kann teuer werden. Ich lese genau."
      },
      "Was tun nach einem Betrug?": {
        question: "Du hast gestern auf einen Link getippt. Du hast dort deine Karten-Daten eingegeben. Heute merkst du: Die Seite war falsch. Das ist dir peinlich. Was machst du?",
        schluessel: "Du bist auf einen Betrug hereingefallen. Was gilt?",
        pictogram: "pikto-help",
        answers: ["Ich sage niemandem etwas. Das ist mir zu peinlich.", "Ich rufe sofort meine Bank an.", "Ich lasse sofort meine Karte sperren."],
        correctIndex: 2,
        auchMoeglich: [1],
        feedbackWrong: ["Schweigen hilft nur den Betrügern. Mit deinen Karten-Daten können sie einkaufen. Lass die Karte schnell sperren. Betrug kann jedem passieren.", null, null],
        feedbackAuch: [null, "Auch die Bank kann die Karte sperren. Wichtig ist: Du wartest nicht.", null],
        feedbackCorrect: "Schnell sein ist jetzt wichtig. Der Sperr-Notruf ist die 116 116. Betrug kann jedem passieren. Du musst dich nicht schämen.",
        remember: "Betrug ist nicht meine Schuld. Ich hole Hilfe."
      }
    },
    kurz: {
      "Was ist Betrug im Internet?": {
        question: "Ein Mann ruft dich an. Er sagt: Hier ist Ihre Bank. Ihr Konto ist in Gefahr. Ich helfe Ihnen. Gleich kommt eine SMS mit einem Code. Sagen Sie mir den Code. Was machst du?",
        schluessel: "Was wollen Betrüger von dir?",
        pictogram: "pikto-fraud",
        answers: ["Ich sage den Code. Er will mir ja helfen.", "Ich sage den Code nicht. Ich lege auf.", "Ich lege auf. Ich rufe selbst bei meiner Bank an."],
        correctIndex: 1,
        auchMoeglich: [2],
        feedbackWrong: ["Mit dem Code kommt er an dein Geld. Die echte Bank fragt nie nach diesem Code.", null, null],
        feedbackAuch: [null, null, "Der Code bleibt bei dir. Die Nummer von deiner Bank suchst du selbst. Zum Beispiel auf deiner Bank-Karte."],
        feedbackCorrect: "Er sagt: Ich helfe Ihnen. Aber er will den Code. So fängt Betrug oft an. Der Code ist nur für dich.",
        remember: "Meinen Code gebe ich nie weiter."
      },
      "Wie erkennst du Betrug?": {
        question: "Eine SMS sagt: Glückwunsch. Sie haben ein Handy gewonnen. Zahlen Sie nur 2 Euro für den Versand. Nur heute. Du hast bei keinem Gewinnspiel mitgemacht. Was machst du?",
        schluessel: "Du hast plötzlich etwas gewonnen. Was tust du?",
        pictogram: "pikto-money",
        answers: ["Ich zahle. 2 Euro sind ja nicht viel.", "Ich lösche die SMS.", "Ich mache Stopp. Ich prüfe erst in Ruhe."],
        correctIndex: 2,
        auchMoeglich: [1],
        feedbackWrong: ["Es geht nicht um 2 Euro. Beim Zahlen gibst du deine Bank-Daten ein. Die wollen die Betrüger.", null, null],
        feedbackAuch: [null, "Dann ist die SMS weg. Und du hast nichts gezahlt.", null],
        feedbackCorrect: "Du hast nirgends mitgemacht. Und die SMS macht Eile. Das sind Zeichen für Betrug. Du zahlst nichts.",
        remember: "Stress und Gewinn: Stopp machen."
      },
      "Was tust du bei Betrug?": {
        question: "Eine SMS sagt: Ihr Bank-Konto ist gesperrt. Tippen Sie hier. Du bist nicht sicher: Ist die SMS echt? Was machst du?",
        schluessel: "Eine SMS sagt: Ihr Bank-Konto ist gesperrt. Tippen Sie hier. Was tust du?",
        pictogram: "pikto-phone",
        answers: ["Ich öffne meine Bank-App selbst.", "Ich tippe auf den Link. Dann sehe ich es ja.", "Ich rufe meine Bank an. Die Nummer habe ich schon."],
        correctIndex: 0,
        auchMoeglich: [2],
        feedbackWrong: [null, "Der Link kann auf eine falsche Seite führen. Die Seite sieht aus wie deine Bank. Deine Bank-App öffnest du selbst.", null],
        feedbackAuch: [null, null, "Auch so fragst du die echte Bank. Wichtig ist: Du nimmst deine bekannte Nummer."],
        feedbackCorrect: "Du tippst nicht auf den Link aus der SMS. Du öffnest die App selbst. Dort siehst du: Ist alles in Ordnung?",
        remember: "Ich muss den Trick nicht erkennen. Ich öffne die App selbst."
      }
    }
  },

  einkaufen: {
    lessons: {
      "Gute Shops erkennen": {
        question: "Du suchst eine Kaffee-Maschine. Ein Shop hat sehr viele Bewertungen. Alle haben 5 Sterne. Alle sind von gestern. Was machst du?",
        schluessel: "Woran erkennst du einen guten Shop?",
        pictogram: "pikto-shop",
        answers: ["Ich bestelle. So viele Menschen sind zufrieden.", "Ich prüfe den Shop erst noch genauer.", "Ich kaufe lieber in einem bekannten Shop."],
        correctIndex: 1,
        auchMoeglich: [2],
        feedbackWrong: ["Bewertungen können gefälscht sein. Hier sind alle von gestern. Und alle haben 5 Sterne. Das ist ein Warnzeichen.", null, null],
        feedbackAuch: [null, null, "Bei einem bekannten Shop weißt du: Die Ware kommt an."],
        feedbackCorrect: "Alle Bewertungen sind von gestern. Das ist komisch. Betrüger können Bewertungen fälschen. Auch ein Impressum können sie fälschen. Achte auf mehrere Warnzeichen.",
        remember: "Ich kaufe bei Shops, die ich geprüft habe."
      },
      "Versteckte Kosten in Apps und Spielen": {
        question: "Du spielst ein kostenloses Spiel auf dem Handy. Du kommst nicht weiter. Das Spiel zeigt: 5 Extra-Leben für 2 Euro. Diese Woche hast du schon 4 Mal gekauft. Was machst du?",
        schluessel: "Ein Spiel ist kostenlos. Kann es trotzdem Geld kosten?",
        pictogram: "pikto-money",
        answers: ["Ich rechne erst: Wie viel habe ich schon bezahlt?", "Ich kaufe. 2 Euro sind ja fast nichts.", "Ich kaufe heute nichts. Ich spiele morgen weiter."],
        correctIndex: 0,
        auchMoeglich: [2],
        feedbackWrong: [null, "Jeder Kauf ist klein. Aber du hast schon 8 Euro bezahlt. Viele kleine Käufe werden schnell teuer.", null],
        feedbackAuch: [null, null, "Dann kostet es heute nichts. Viele Spiele geben dir später neue Leben."],
        feedbackCorrect: "4 Mal 2 Euro sind schon 8 Euro. Viele kleine Käufe werden schnell teuer. Jetzt entscheidest du selbst.",
        remember: "Auch kleine Käufe kosten echtes Geld."
      },
      "Vor dem Kaufen prüfen": {
        question: "Du willst Kopf-Hörer kaufen. Im Shop steht groß: 25 Euro. Im Waren-Korb steht am Ende: 34 Euro. Was machst du?",
        schluessel: "Welche Frage stellst du dir vor dem Kaufen?",
        pictogram: "pikto-ask",
        answers: ["Ich schaue nach: Was kommt noch dazu?", "Ich kaufe. Ich zahle bestimmt nur 25 Euro.", "Ich vergleiche erst mit einem anderen Shop."],
        correctIndex: 0,
        auchMoeglich: [2],
        feedbackWrong: [null, "Du zahlst den Preis am Ende. Das sind 34 Euro. Oft kommt der Versand dazu. Schau vor dem Kaufen in den Waren-Korb.", null],
        feedbackAuch: [null, null, "Vergleichen lohnt sich. Achte auch dort auf den Preis am Ende."],
        feedbackCorrect: "Oft kommt der Versand dazu. Wichtig ist der Preis am Ende. Jetzt entscheidest du selbst.",
        remember: "Erst prüfen. Dann kaufen."
      },
      "Falsch gekauft? Das kannst du tun": {
        question: "Du hast im Internet eine Hose bestellt. Sie ist gestern gekommen. Sie passt nicht. Was machst du?",
        schluessel: "Du hast online etwas Falsches gekauft. Was gilt oft?",
        pictogram: "pikto-plan",
        answers: ["Ich behalte sie. Zurückgeben geht nicht.", "Ich schreibe dem Shop: Ich will die Hose zurückgeben.", "Ich schicke die Hose zurück. Das geht oft 14 Tage."],
        correctIndex: 2,
        auchMoeglich: [1],
        feedbackWrong: ["Du musst die Hose nicht behalten. Viele Online-Käufe kannst du 14 Tage zurückgeben. Das heißt Widerruf.", null, null],
        feedbackAuch: [null, "Der Shop sagt dir dann: So schickst du die Hose zurück.", null],
        feedbackCorrect: "Viele Online-Käufe kannst du 14 Tage zurückgeben. Das heißt Widerruf. Schau beim Shop nach: Wie geht das Zurückschicken?",
        remember: "Online-Käufe kann ich oft 14 Tage zurückgeben."
      }
    },
    kurz: {
      "Einkaufen im Internet": {
        question: "Du brauchst neue Turn-Schuhe. Du findest sie in 2 Shops. Shop 1 kennst du schon lange. Dort kosten sie 60 Euro. Shop 2 kennst du nicht. Dort kosten sie 15 Euro. Was machst du?",
        schluessel: "Wo kaufst du am besten ein?",
        pictogram: "pikto-shop",
        answers: ["Ich kaufe in Shop 2. Das ist viel billiger.", "Ich kaufe in Shop 1. Den Shop kenne ich.", "Ich prüfe Shop 2 erst. Dann entscheide ich."],
        correctIndex: 1,
        auchMoeglich: [2],
        feedbackWrong: ["Die Schuhe sind dort sehr billig. Und du kennst den Shop nicht. Das sind Warnzeichen. Vielleicht kommt die Ware nie.", null, null],
        feedbackAuch: [null, null, "Schau zum Beispiel ins Impressum. Bist du danach noch unsicher? Dann kaufst du in Shop 1."],
        feedbackCorrect: "Den Shop kennst du. Dort kommt die Ware an. Sehr billig und unbekannt ist ein Warnzeichen.",
        remember: "Ich kaufe bei sicheren Shops."
      },
      "Gute Shops erkennen": {
        question: "Du willst in einem neuen Shop bestellen. In der Adress-Zeile siehst du ein Schloss. Ein Impressum findest du nicht. Was machst du?",
        schluessel: "Welches Zeichen ist gut?",
        pictogram: "pikto-location",
        answers: ["Ich bestelle dort nicht. Name und Adresse fehlen.", "Ich bestelle. Das Schloss zeigt: Der Shop ist sicher.", "Ich bestelle. Die Seite sieht ja sehr schön aus."],
        correctIndex: 0,
        feedbackWrong: [null, "Auch falsche Shops haben ein Schloss. Das Schloss allein ist kein gutes Zeichen. Schau nach Name und Adresse.", "Eine schöne Seite können auch Betrüger bauen. Das Aussehen ist kein Beweis. Schau nach Name und Adresse."],
        feedbackCorrect: "Ein guter Shop zeigt Name und Adresse im Impressum. Hier fehlt das. Aber: Auch ein Impressum kann gefälscht sein.",
        remember: "Ein guter Shop zeigt Name und Adresse."
      },
      "Sicher bezahlen": {
        question: "Du bestellst zum ersten Mal in einem Shop. Du kannst wählen: vorher überweisen, Rechnung oder PayPal. Was nimmst du?",
        schluessel: "Du kaufst zum ersten Mal in einem Shop. Wie bezahlst du?",
        pictogram: "pikto-bank",
        answers: ["Ich überweise vorher. Dann kommt das Paket schneller.", "Ich zahle mit PayPal.", "Ich zahle auf Rechnung."],
        correctIndex: 2,
        auchMoeglich: [1],
        feedbackWrong: ["Vorher überweisen heißt Vorkasse. Du zahlst zuerst. Kommt keine Ware? Dann bekommst du dein Geld schwer zurück.", null, null],
        feedbackAuch: [null, "PayPal hat einen Käufer-Schutz. Kommt keine Ware? Dann kannst du dein Geld zurückfordern.", null],
        feedbackCorrect: "Bei Rechnung bekommst du zuerst die Ware. Dann zahlst du.",
        remember: "Rechnung ist sicherer als Vorkasse."
      }
    }
  }
};
