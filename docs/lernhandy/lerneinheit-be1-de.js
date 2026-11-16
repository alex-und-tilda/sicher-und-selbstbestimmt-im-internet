/* Lerneinheit BE1 „Jemand will einen Code“ – Inhaltsdaten für den lokalen Pilot.

   Stand 07.11.2026 (Claude). Nur Daten, keine Bedienung, keine Speicherung.
   Wird noch von keiner Seite geladen. Liegt nur im Pilot, nicht in docs/,
   wird nicht veröffentlicht.

   Grundlage:
   - Sprachfassungen: berichte/lernsystem-2026-11-05/10-SPRACHFASSUNGEN-BE1.md
   - mit den Änderungen aus BE1-ENTSCHEIDUNGSVORLAGE.md und
     BE1-BESCHLUSS-2026-11-07.md (Punkte 5, 7, 8, 11, 12, 13 und die
     Präzisierungen zu 3 und 12)

   Aufbau:
   - Lerninhalt hat drei Fassungen: { leicht, einfach, standard } (§2 B).
   - Gezeigte Nachrichten (Anruf, SMS, Chat) sind in allen Stufen gleich (§4a.2).
   - Bedientext steht nur in BEDIENWOERTER (§2 A).
   - Handy-Elemente folgen dem Format von scenarioElementHtml in app.js
     (typ, von, nummer, text …). Neu sind nur richtung, gesagt und knoepfe
     beim Anruf und piktogramm/zeile beim ausgehenden Anruf.
   - wertung: "passend" | "auchMoeglich" | "unpassend" | "neutral".
     fehlerton: false heißt: unpassend, aber ohne Fehlerton (Punkt 8).

   Mit Lernenden geprüft: nein (PROJEKTREGELN §13). Alle L-Texte sind
   logo-relevant und für die Prüfgruppe vorgemerkt.
   Geprüft mit: node pruefung/pilot/be1-inhalt.cjs */

const LERNEINHEIT_BE1 = {
  id: "be1",
  stand: "Pilot-Arbeitsfassung 07.11.2026",
  titel: {
    leicht: "Jemand will einen Code",
    einfach: "Jemand will einen Code",
    standard: "Jemand will einen Code"
  },
  regel: "codes", // „Deine Regel“: Satz der Stufe aus docs/regeln-de.js, hier nicht kopiert
  /* Rückmeldungen überarbeitet 07.11.2026 (Auftrag „Übungs-Handy und Rückmeldungen“):
     gewählte Handlung – Folge oder Nutzen – nächster Schritt. Wertungen, Antworten
     und fachliche Aussagen unverändert. Vorher-Fassung:
     berichte/lernsystem-2026-11-05/be1-rueckmeldungen-vorher.json
     Übungs-Hinweis: nur nach einer Wahl, die einen Code weitergibt (uebungHinweis: true),
     und nur beim ersten Mal in einem Durchgang (lerneinheit.js). Er sagt nicht, dass
     es im echten Leben harmlos wäre. */
  uebungHinweis: {
    leicht: "Hier ist es eine Übung. Du hast keinen echten Code weitergegeben.",
    einfach: "Hier ist es nur eine Übung: Du hast keinen echten Code weitergegeben.",
    standard: "Das hier ist eine Übung, du hast keinen echten Code weitergegeben."
  },
  quellen: {
    F1: { titel: "Verbraucherzentrale Hamburg, Warnung vor falschen Bank-Anrufen, Stand 14.05.2025", url: "https://www.vzhh.de/themen/finanzen/konto-karte/warnung-vor-falschen-bank-anrufen" },
    F2: { titel: "Verbraucherzentrale Hamburg, ebd.", url: "https://www.vzhh.de/themen/finanzen/konto-karte/warnung-vor-falschen-bank-anrufen" },
    F3: { titel: "Polizei Berlin, Falsche Polizeibeamte/Falsche Bankmitarbeiter, ohne Datum, gelesen 07.11.2026", url: "https://www.berlin.de/polizei/aufgaben/praevention/betrug/artikel.1560623.php" },
    F4: { titel: "Verbraucherzentrale Hamburg und Polizei Berlin, ebd.", url: "https://www.berlin.de/polizei/aufgaben/praevention/betrug/artikel.1560623.php" },
    F5: { titel: "Sperr-Notruf 116 116", url: "https://www.sperr-notruf.de/" },
    F6: { titel: "WhatsApp-Hilfebereich, Registrierungscode", url: "https://faq.whatsapp.com/1131652977717250/?locale=de_DE" },
    F7: { titel: "Deutsche Telekom, So merken Sie, dass Betrüger anrufen (Leichte Sprache)", url: "https://www.telekom.com/de/newsroom/leichte-sprache/so-merken-sie-dass-betrueger-anrufen" },
    Q8: { titel: "Bundesnetzagentur, Pressemitteilung 29.11.2022: Anrufe mit 110 oder 112 als Anzeige werden ab 01.12.2022 abgebrochen", url: "https://www.bundesnetzagentur.de/SharedDocs/Pressemitteilungen/DE/2022/20221129_TK-Aktueller-Hinweis.html" },
    Q9: { titel: "Verbraucherzentrale Niedersachsen, Mobilfunk: Knapp 1.000 Euro Schaden durch Voice-Phishing, Stand 06.03.2025", url: "https://www.verbraucherzentrale-niedersachsen.de/themen/internet-telefon/datenschutz/mobilfunk-knapp-1000-euro-schaden-durch-voice-phishing" }
  },

  bildschirme: [

    /* ---------- S1 Ankommen (ohne Bewertung) ---------- */
    {
      id: "s1", schritt: "ankommen", art: "einschaetzung",
      // Befund B1 (08.11.2026): Die Antworten sprechen von „dem Code“. Ohne Bildschirm kam
      // der Code in S1 nicht vor. Jetzt zeigt S1 den Anruf wie Bericht 09 (QK9) es vorsah:
      // derselbe Anruf wie in S2-1, wortgleich, ohne Knöpfe. Kein neuer Lerntext.
      handy: [
        { typ: "anruf", richtung: "eingehend", von: "Meine Bank",
          gesagt: "Guten Tag, hier ist Ihre Bank. Mit Ihrem Konto stimmt etwas nicht. Jemand will Geld abbuchen. Ich stoppe das für Sie. Gleich kommt eine SMS mit einem Code. Den lesen Sie mir bitte vor." }
      ],
      text: {
        leicht: "Stell dir vor: Dein Handy klingelt. Jemand ruft an. Er sagt: Ich bin von deiner Bank.",
        einfach: "Stell dir vor: Dein Handy klingelt. Der Anrufer sagt, er ist von deiner Bank.",
        standard: "Stell dir vor, dein Handy klingelt. Der Anrufer sagt, er sei von deiner Bank."
      },
      frage: { leicht: "Was machst du?", einfach: "Was machst du jetzt?", standard: "Wie reagierst du?" },
      antworten: [
        { id: "vorlesen", text: { leicht: "Ich lese den Code vor.", einfach: "Ich lese ihm den Code vor.", standard: "Ich lese ihm den Code vor." } },
        { id: "nicht-sagen", text: { leicht: "Ich sage den Code nicht.", einfach: "Ich sage ihm den Code nicht.", standard: "Ich behalte den Code für mich." } },
        { id: "unsicher", unsicher: true, text: { leicht: "Ich weiß es nicht.", einfach: "Ich weiß es nicht genau.", standard: "Ich bin mir nicht sicher." } }
      ],
      bedien: "keinRichtig" // „Hier gibt es kein Richtig und kein Falsch.“; keine Rückmeldung
    },

    /* ---------- S2 Zuschauen – Tilda macht es vor (4 Bildschirme) ---------- */
    {
      id: "s2-1", schritt: "zuschauen", art: "vorbild", vorbild: "tilda",
      handy: [
        { typ: "anruf", richtung: "eingehend", von: "Meine Bank",
          gesagt: "Guten Tag, hier ist Ihre Bank. Mit Ihrem Konto stimmt etwas nicht. Jemand will Geld abbuchen. Ich stoppe das für Sie. Gleich kommt eine SMS mit einem Code. Den lesen Sie mir bitte vor." }
      ],
      text: {
        leicht: "Tilda bekommt einen Anruf. Auf dem Bildschirm steht: Meine Bank. Dort siehst du: Wer ruft an? Der Anrufer sagt: Mit Ihrem Konto stimmt etwas nicht.",
        einfach: "Tildas Handy klingelt. Auf dem Bildschirm steht „Meine Bank“. Dort siehst du, wer anruft. Der Anrufer sagt, dass mit ihrem Konto etwas nicht stimmt.",
        standard: "Tildas Handy klingelt. Auf dem Bildschirm steht „Meine Bank“ – der Name, unter dem sie die Nummer ihrer Bank gespeichert hat. Der Anrufer erklärt, mit ihrem Konto stimme etwas nicht."
      },
      quellen: ["F3"]
    },
    {
      id: "s2-2", schritt: "zuschauen", art: "vorbild", vorbild: "tilda",
      handy: [
        { typ: "nachricht", von: "SMS", text: "Ihr Code: 482 913. Geben Sie diesen Code niemandem weiter." }
      ],
      text: {
        leicht: "Dann kommt eine SMS. In der SMS steht ein Code. Ein Code ist eine Zahl. Mit dem Code zeigst du: Das bin wirklich ich. In der SMS steht auch: Geben Sie den Code niemandem weiter. Der Anrufer sagt: Lesen Sie mir den Code vor. Tilda merkt: Er will meinen Code.",
        einfach: "Dann kommt eine SMS mit einem Code. Ein Code ist eine Zahl, mit der du zeigst: Das bin wirklich ich. In der SMS steht auch: „Geben Sie diesen Code niemandem weiter.“ Der Anrufer bittet Tilda, ihm den Code vorzulesen. Tilda merkt: Er will meinen Code.",
        standard: "Kurz darauf kommt eine SMS mit einem Code. Mit so einem Code bestätigst du, dass du es wirklich bist. In der SMS steht ausdrücklich: „Geben Sie diesen Code niemandem weiter.“ Trotzdem bittet der Anrufer Tilda, ihm den Code vorzulesen. Tilda wird aufmerksam: Er will ihren Code."
      },
      quellen: ["F1", "F2"]
    },
    {
      id: "s2-3", schritt: "zuschauen", art: "vorbild", vorbild: "tilda",
      handy: [
        { typ: "anruf", richtung: "eingehend", von: "Meine Bank", knoepfe: ["auflegen", "lautsprecher", "tastatur", "stumm"], getippt: "auflegen" }
      ],
      text: {
        leicht: "Tilda überlegt kurz. Dann tippt sie auf: Auflegen. Sie sagt den Code nicht. Denn mit dem Code kann der Anrufer Geld von ihrem Konto nehmen.",
        einfach: "Tilda zögert kurz. Dann tippt sie auf „Auflegen“ und sagt den Code nicht. Denn mit dem Code kann der Anrufer Geld von ihrem Konto überweisen.",
        standard: "Tilda zögert kurz, dann tippt sie auf „Auflegen“. Den Code nennt sie nicht. Mit diesem Code könnte der Anrufer in ihrem Namen Geld überweisen."
      },
      quellen: ["F1", "F2", "F4"]
    },
    {
      id: "s2-4", schritt: "zuschauen", art: "vorbild", vorbild: "tilda",
      // Punkt 13: ausgehender Anruf, beschriftete Zeile und Piktogramm statt Karten-Abbildung.
      // Keine echte Karte, keine erfundene Telefonnummer.
      handy: [
        { typ: "anruf", richtung: "ausgehend", von: "Meine Bank", nummer: "Nummer von der Bank-Karte",
          piktogramm: { key: "card", beschriftung: "Bank-Karte" },
          gesagt: "Wir haben Sie nicht angerufen. Gut, dass Sie nachfragen." }
      ],
      text: {
        leicht: "Tilda will es genau wissen. Sie nimmt ihre Bank-Karte. Dort steht die Nummer von ihrer Bank. Sie ruft diese Nummer an. Das ist die bekannte Nummer. Die bekannte Nummer suchst du selbst. Du nimmst sie nicht aus dem Anruf. Die Bank sagt: Wir haben Sie nicht angerufen. Jemand hat die Nummer gefälscht. Darum stand auf dem Bildschirm: Meine Bank.",
        einfach: "Tilda will sichergehen. Auf ihrer Bank-Karte steht die Telefonnummer der Bank. Das ist eine bekannte Nummer: Tilda hat sie selbst nachgesehen und nicht aus dem Anruf übernommen. Sie ruft dort an. Die Bank sagt: „Wir haben Sie nicht angerufen.“ Jemand hatte die Nummer gefälscht. Deshalb stand auf dem Bildschirm „Meine Bank“.",
        standard: "Tilda will sichergehen und ruft ihre Bank selbst an – unter der Nummer auf ihrer Bank-Karte. So eine bekannte Nummer hat man selbst nachgesehen, statt sie aus dem Anruf zu übernehmen. Die Bank bestätigt: „Wir haben Sie nicht angerufen.“ Die Nummer des Anrufers war gefälscht; deshalb zeigte das Handy „Meine Bank“ an."
      },
      quellen: ["F3", "F4"]
    },

    /* ---------- S3 Verstehen ---------- */
    {
      id: "s3", schritt: "verstehen", art: "merksatz",
      // Punkt 14: fachlich am 07.11.2026 für genau diese Stelle freigegeben
      // (lokaler BE1-Prototyp, S3, zusammen mit dem sichtbaren Merksatz).
      // Bilddatei unverändert; nie an Antworten oder als Lösungshinweis.
      bild: { kennung: "whatsapp-code", datei: "assets/scenes/whatsapp-code.webp", ort: "neben-ueberschrift", vorbehalt: false,
              freigabe: "Fachlich freigegeben, 07.11.2026, nur BE1 S3 im lokalen Pilot" },
      merksatz: {
        leicht: "Meinen Code gebe ich niemandem. Auch nicht der Bank.", // Punkt 5: „gebe“ statt „sage“
        einfach: "Meinen Code gebe ich niemandem – auch nicht der Bank.",
        standard: "Meinen Code gebe ich nicht weiter – auch nicht an die Bank."
      },
      grund: {
        leicht: "Denn mit dem Code kann jemand Geld von meinem Konto nehmen. Oder jemand kommt in mein Konto.",
        einfach: "Mit dem Code kann jemand Geld von meinem Konto überweisen oder in mein Konto kommen.",
        standard: "Mit dem Code kann jemand in meinem Namen Geld überweisen oder mein Konto übernehmen."
      },
      zusatz: {
        leicht: "Auf dem Bildschirm steht der Name von der Bank? Das kann gefälscht sein.",
        einfach: "Auch wenn auf dem Bildschirm der Name der Bank steht: Die Nummer kann gefälscht sein.",
        standard: "Auch der Name der Bank auf dem Bildschirm beweist nichts: Die Nummer kann gefälscht sein."
      },
      ausnahme: {
        leicht: "Brauche ich den Code selbst? Zum Beispiel: Ich melde mich gerade an. Dann gebe ich den Code selbst ein.",
        einfach: "Brauche ich den Code selbst, weil ich mich gerade anmelde? Dann gebe ich ihn selbst in meiner App ein.",
        standard: "Brauche ich den Code selbst, etwa weil ich mich gerade anmelde, gebe ich ihn selbst in meiner App ein."
      },
      zeigtRegel: true, // darunter „Deine Regel“ codes; im Pilot keine Gutschrift
      quellen: ["F1", "F2", "F3", "F6", "F7"]
    },

    /* ---------- S4 Unterscheiden (4 Beispiele, Folge 2, 1, 4, 3 – Punkt 7) ----------
       Antworten in allen vier Beispielen gleich und an fester Stelle (Punkt 6):
       Stelle 1 = „brauche selbst“, Stelle 2 = „jemand anders will ihn“. */
    {
      id: "s4-1", bsp: 2, schritt: "unterscheiden", art: "einordnen", antwortSatz: "s4",
      handy: [
        { typ: "nachricht", von: "SMS", text: "Ihr Code: 307 664" },
        { typ: "nachricht", von: "Unbekannte Nummer", text: "Hallo! Ich habe dir aus Versehen einen Code geschickt. Kannst du ihn mir bitte schicken?" }
      ],
      lage: {
        leicht: "Du hast nichts gemacht. Trotzdem kommt eine SMS mit einem Code. Dann schreibt dir eine fremde Nummer.",
        einfach: "Du hast nichts angefordert. Trotzdem kommt eine SMS mit einem Code, und gleich danach schreibt dir eine fremde Nummer.",
        standard: "Ohne dass du etwas angefordert hast, kommt eine SMS mit einem Code. Gleich danach schreibt dir eine unbekannte Nummer."
      },
      passend: 1,
      rueckmeldung: [
        // Punkt D (07.11.2026): Zu welchem Dienst der Code gehört, sagt die Lage nicht.
        // Daher nur der allgemeine belegte Zusammenhang (F1, F2, F6, Q9): Ein Code bestätigt
        // etwas in deinem Namen. Keine Konto-Übernahme mehr behauptet.
        { wertung: "unpassend", text: {
          leicht: "Du hast nichts gemacht. Also brauchst du den Code nicht. Eine fremde Person will ihn. Mit dem Code kann sie etwas in deinem Namen bestätigen. Was das ist, weißt du nicht.",
          einfach: "Du hast nichts angefordert, also brauchst du den Code nicht – eine fremde Person will ihn. Mit dem Code kann sie etwas in deinem Namen bestätigen. Was genau, weißt du nicht.",
          standard: "Du hast den Code nicht angefordert, also brauchst du ihn nicht; eine fremde Person verlangt ihn. Mit dem Code kann sie in deinem Namen etwas bestätigen – was genau, kannst du nicht erkennen." } },
        { wertung: "passend", text: {
          leicht: "Du gibst den Code nicht weiter. Er bleibt bei dir. So kann die fremde Person nichts in deinem Namen bestätigen.",
          einfach: "Du gibst den Code nicht weiter, er bleibt bei dir. So kann die fremde Person nichts in deinem Namen bestätigen.",
          standard: "Du gibst den Code nicht weiter, er bleibt bei dir. Damit kann die fremde Person nichts in deinem Namen bestätigen." } }
      ],
      hilfe: { allgemein: true, zusatz: "merksatzAnsehen" }, // Punkt 4
      quellen: ["F6"]
    },
    {
      id: "s4-2", bsp: 1, schritt: "unterscheiden", art: "einordnen", antwortSatz: "s4",
      handy: [
        { typ: "webseite", app: true, titel: "Anmeldung bestätigen", felder: ["Gib den Code aus der SMS ein."] },
        { typ: "nachricht", von: "SMS", text: "Ihr Code: 551 207" }
      ],
      lage: {
        leicht: "Du willst in deine Bank-App. Du meldest dich gerade an. Die App sagt: Gib den Code ein. Dann kommt eine SMS mit einem Code.",
        einfach: "Du meldest dich gerade selbst in deiner Bank-App an. Die App fragt nach einem Code, und kurz darauf kommt eine SMS.",
        standard: "Du meldest dich gerade in deiner Bank-App an. Die App verlangt einen Code, der kurz darauf per SMS kommt."
      },
      passend: 0,
      rueckmeldung: [
        { wertung: "passend", text: {
          leicht: "Du gibst den Code selbst in deine Bank-App ein. Du meldest dich selbst an. Du brauchst den Code. Niemand anders will ihn. So kommst du in dein Konto.",
          einfach: "Du gibst den Code selbst in deine Bank-App ein. Du hast die Anmeldung selbst begonnen und brauchst den Code dafür. Niemand anders will ihn – so kommst du in dein Konto.",
          standard: "Du gibst den Code selbst in deine Bank-App ein. Du hast die Anmeldung selbst begonnen, und niemand anderes verlangt den Code. So kommst du in dein Konto." } },
        // Punkt 8: Vorsicht anerkennen, kein Fehlerton. Seit 07.11.2026 (Punkt A) sagt das die
        // Überschrift „Du bist vorsichtig.“ (vorsichtig: true); der Text beginnt deshalb nicht
        // mehr mit „Vorsicht ist gut“, sonst stünde die Anerkennung doppelt da.
        { wertung: "unpassend", fehlerton: false, vorsichtig: true, text: {
          leicht: "Hier brauchst du den Code aber selbst. Du hast die Anmeldung selbst angefangen. Du gibst den Code in deine App ein. Du gibst ihn keiner Person.",
          einfach: "Hier brauchst du den Code aber selbst, denn du hast die Anmeldung selbst begonnen. Du gibst den Code in deiner App ein und damit keiner Person weiter.",
          standard: "Hier brauchst du den Code allerdings selbst, denn du hast die Anmeldung selbst begonnen. Du gibst ihn in deiner App ein und damit keiner Person weiter." } }
      ],
      hilfe: { allgemein: true, zusatz: "merksatzAnsehen" },
      quellen: ["F1"]
    },
    {
      id: "s4-3", bsp: 4, schritt: "unterscheiden", art: "einordnen", antwortSatz: "s4",
      handy: [
        { typ: "webseite", titel: "Konto anlegen", felder: ["Gib den Code aus der E-Mail ein."] },
        { typ: "nachricht", von: "E-Mail", text: "Ihr Bestätigungs-Code: 3381" }
      ],
      lage: {
        leicht: "Du willst in einem Shop etwas kaufen. Dafür machst du dort ein Konto. Die Seite sagt: Gib den Code aus der E-Mail ein. Dann kommt eine E-Mail mit einem Code.",
        einfach: "Du legst dir gerade selbst ein Konto in einem Online-Shop an. Die Seite schickt dir einen Code per E-Mail, den du dort eingeben sollst.",
        standard: "Du legst gerade ein Kundenkonto in einem Online-Shop an. Die Seite schickt dir zur Bestätigung einen Code per E-Mail."
      },
      passend: 0,
      rueckmeldung: [
        { wertung: "passend", text: {
          leicht: "Du gibst den Code selbst auf der Seite ein. Du machst das Konto selbst. Du brauchst den Code. So bestätigst du dein Konto.",
          einfach: "Du gibst den Code selbst auf der Seite ein. Du legst das Konto selbst an und brauchst den Code dafür. So bestätigst du dein Konto.",
          standard: "Du gibst den Code selbst auf der Seite ein. Du legst das Konto selbst an; mit dem Code bestätigst du es." } },
        { wertung: "unpassend", fehlerton: false, vorsichtig: true, text: {
          leicht: "Hier brauchst du den Code aber selbst. Du machst das Konto selbst. Du gibst den Code auf der Seite ein. Du gibst ihn keiner Person.",
          einfach: "Hier brauchst du den Code aber selbst, denn du legst das Konto selbst an. Du gibst den Code auf der Seite ein und damit keiner Person weiter.",
          standard: "Hier brauchst du den Code allerdings selbst, denn du legst das Konto selbst an. Du gibst ihn auf der Seite ein und damit keiner Person weiter." } }
      ],
      hilfe: { allgemein: true, zusatz: "merksatzAnsehen" },
      quellen: []
    },
    {
      id: "s4-4", bsp: 3, schritt: "unterscheiden", art: "einordnen", antwortSatz: "s4",
      handy: [
        { typ: "nachricht", von: "SMS", text: "Ihr Code: 912 045" },
        { typ: "nachricht", von: "Jonas", text: "Hey, kannst du mir schnell den Code schicken, der gerade bei dir kam? Ist wichtig." }
      ],
      lage: {
        leicht: "Jonas ist ein Freund von dir. Seine Nummer ist in deinem Handy gespeichert. Gerade kam bei dir eine SMS mit einem Code. Jonas schreibt dir.",
        einfach: "Jonas ist ein Freund, seine Nummer ist in deinem Handy gespeichert. Gerade kam bei dir eine SMS mit einem Code. Jetzt schreibt dir Jonas.",
        standard: "Jonas ist ein Freund von dir; seine Nummer ist gespeichert. Gerade hast du eine SMS mit einem Code bekommen. Jetzt schreibt dir Jonas."
      },
      passend: 1,
      rueckmeldung: [
        // Punkt D: Dienst des Codes unbekannt (die Nachricht nennt keine App). Belegt (F6) ist nur,
        // dass ein übernommenes Konto Freunde nach Codes fragt; die Folge bleibt allgemein.
        { wertung: "unpassend", text: {
          leicht: "Du hast den Code nicht gebraucht. Jonas will ihn. Vielleicht schreibt gar nicht Jonas. Mit dem Code kann jemand etwas in deinem Namen bestätigen. Auch ein Freund bekommt den Code nicht.",
          einfach: "Du hast den Code nicht gebraucht, Jonas will ihn. Vielleicht schreibt gar nicht Jonas, sondern jemand mit seinem Konto. Mit dem Code kann diese Person etwas in deinem Namen bestätigen. Auch ein Freund bekommt den Code nicht.",
          standard: "Du hast den Code nicht angefordert, Jonas verlangt ihn. Möglicherweise schreibt gar nicht Jonas, sondern jemand, der sein Konto übernommen hat. Mit dem Code kann diese Person in deinem Namen etwas bestätigen. Auch Freunde bekommen deinen Code nicht." } },
        { wertung: "passend", text: {
          leicht: "Du gibst Jonas den Code nicht. Er bleibt bei dir. Vielleicht schreibt gar nicht Jonas. Vielleicht hat jemand sein Konto. Diese Person kann dann nichts in deinem Namen bestätigen.",
          einfach: "Du gibst Jonas den Code nicht, er bleibt bei dir. Vielleicht schreibt gar nicht Jonas, sondern jemand, der sein Konto übernommen hat. Diese Person kann dann nichts in deinem Namen bestätigen.",
          standard: "Du gibst Jonas den Code nicht, er bleibt bei dir. Möglicherweise schreibt gar nicht Jonas selbst, sondern jemand, der sein Konto übernommen hat. Diese Person kann dann nichts in deinem Namen bestätigen." } }
      ],
      hilfe: { allgemein: true, zusatz: "merksatzAnsehen" },
      quellen: ["F6"]
    },

    /* ---------- S5 Selbst machen – im Übungs-Handy ----------
       Punkt 9: erfundene Übungssituation, kein wörtlich belegter Betrugsfall.
       Belegt sind Mechanismus (SMS-Code für den Mobilfunkanbieter) und Gegenmittel (Q9). */
    {
      id: "s5", schritt: "selbst", art: "uebungshandy", erfundeneLage: true,
      handy: [
        { typ: "anruf", richtung: "eingehend", von: "Service Handy-Vertrag", knoepfe: ["auflegen", "lautsprecher", "tastatur", "stumm"],
          gesagt: "Guten Tag! Ihr Handy-Vertrag läuft heute aus. Ich verlängere ihn für Sie zum gleichen Preis. Dafür kommt gleich ein Code per SMS. Den brauche ich von Ihnen.",
          // 08.11.2026 (Auftrag „BE1 gezielt verbessern“, Schritt 11): In der Ansicht Entscheiden
          // bleibt die Forderung sichtbar – wortgleich der Schluss der Rede, kein neuer Text.
          // So muss niemand aus dem Gedächtnis wissen, was der Anrufer will (COGA: nichts merken müssen).
          erinnerung: "Dafür kommt gleich ein Code per SMS. Den brauche ich von Ihnen." },
        { typ: "nachricht", von: "SMS", text: "Ihr Code: 70 44 18" }
      ],
      // V1 (Auftrag 07.11.2026): Die Aufgabe steht über dem Handy, vor der ersten Entscheidung.
      // Der Bedienhinweis nennt beide Wege: im Handy tippen oder dem Anrufer etwas sagen.
      // Vorher: „Was machst du? Du entscheidest selbst. Tippe im Handy.“ – unter dem Handy,
      // direkt über den zwei Antworten, die nicht im Handy sind.
      aufgabe: {
        leicht: "Was machst du? Du entscheidest selbst.",
        einfach: "Was machst du jetzt? Du entscheidest selbst.",
        standard: "Wie reagierst du? Entscheide selbst."
      },
      bedienhinweis: {
        leicht: "Tippe im Handy. Oder sag dem Anrufer etwas.",
        einfach: "Du tippst im Handy oder sagst dem Anrufer etwas.",
        standard: "Tippe im Übungs-Handy oder antworte dem Anrufer."
      },
      // Beschriftung der zwei Antworten unter dem Handy: Das sind Sätze am Telefon, keine Handy-Knöpfe.
      aussenTitel: {
        leicht: "Das kannst du sagen:",
        einfach: "Das kannst du dem Anrufer sagen:",
        standard: "Das kannst du dem Anrufer sagen:"
      },
      // Knöpfe außerhalb des Handys sind Lerninhalt
      aussenKnoepfe: [
        { id: "code-sagen", text: { leicht: "Ich sage den Code.", einfach: "Ich sage ihm den Code.", standard: "Ich nenne ihm den Code." } },
        { id: "name-fragen", text: { leicht: "Ich frage erst nach dem Namen.", einfach: "Ich frage erst nach seinem Namen.", standard: "Ich frage zuerst nach seinem Namen." } }
      ],
      handlungen: {
        // Punkt D: Folge nach Q9 (Anrufer gibt sich als Mobilfunk-Anbieter aus, will den SMS-Code;
        // Schaden über die Handy-Rechnung). „Vertrag abschließen“ und „Konto“ waren nicht belegt.
        auflegen: { wertung: "passend", text: {
          leicht: "Du legst auf. So bekommt der Anrufer deinen Code nicht. Mit dem Code kann er deinen Handy-Vertrag nutzen. Das kann dich Geld kosten.",
          einfach: "Du legst auf, so bekommt der Anrufer deinen Code nicht. Mit dem Code kann er deinen Handy-Vertrag in deinem Namen nutzen. Das kann dich Geld kosten, zum Beispiel über deine Handy-Rechnung.",
          standard: "Du legst auf, und der Anrufer bekommt deinen Code nicht. Mit dem Code kann er deinen Handy-Vertrag in deinem Namen nutzen; die Kosten können dann auf deiner Handy-Rechnung erscheinen." },
          danach: "selbstNachfragen" },
        selbstNachfragen: { wertung: "auchMoeglich", text: {
          leicht: "Du fragst selbst nach. Du nimmst die Nummer von deinem Vertrag. So weißt du: Ist mit dem Vertrag wirklich etwas?",
          einfach: "Du fragst selbst nach, mit der Nummer aus deinem Vertrag. So erfährst du, ob mit deinem Vertrag wirklich etwas ist.",
          standard: "Du fragst selbst nach – mit der Nummer aus deinen Vertragsunterlagen. So erfährst du, ob mit deinem Vertrag tatsächlich etwas nicht stimmt." } },
        "code-sagen": { wertung: "unpassend", uebungHinweis: true, text: {
          leicht: "Du sagst den Code. Mit dem Code kann der Anrufer deinen Handy-Vertrag nutzen. Das kann dich Geld kosten. Ein Anrufer will deinen Code? Dann leg auf.",
          einfach: "Du sagst den Code. Damit kann der Anrufer deinen Handy-Vertrag in deinem Namen nutzen – das kann dich Geld kosten, zum Beispiel über deine Handy-Rechnung. Wenn ein Anrufer deinen Code will, leg auf.",
          standard: "Du nennst den Code. Damit kann der Anrufer deinen Handy-Vertrag in deinem Namen nutzen, und die Kosten können auf deiner Handy-Rechnung erscheinen. Verlangt ein Anrufer deinen Code, leg auf." } },
        "name-fragen": { wertung: "unpassend", text: {
          leicht: "Du fragst nach dem Namen. Aber einen Namen kann jeder sagen. Der Name zeigt nichts. Wichtig ist: Er will deinen Code. Leg auf.",
          einfach: "Du fragst nach dem Namen. Aber einen Namen kann jeder nennen – er beweist nichts. Wichtig ist: Er will deinen Code. Leg auf.",
          standard: "Du fragst nach dem Namen. Einen Namen kann aber jeder nennen; er beweist nichts. Entscheidend ist, dass er deinen Code verlangt. Leg auf." } },
        // Punkt B (07.11.2026): Das Öffnen tippt keine Ziffer. Die Folge hängt nur am Eintippen.
        // Kein Übungs-Hinweis mehr: Es wurde nichts weitergegeben, auch nicht in der Übung.
        // Entscheidung 07.11.2026 (nutzende Person, „Neutral wie Lautsprecher“): neutral wie
        // Lautsprecher und Stumm – ohne Überschrift, ohne Ton, ohne Ansage; endet mit derselben Rückfrage.
        tastatur: { wertung: "neutral", ohneEingabe: true, text: {
          leicht: "Du tippst auf: Tastatur. Du hast noch keine Zahl getippt. Tippst du den Code ein? Dann bekommt der Anrufer ihn auch. Was machst du mit dem Anruf?",
          einfach: "Du öffnest die Tastatur. Eingetippt hast du damit noch nichts. Wenn du den Code über die Tasten eintippst, bekommt ihn der Anrufer genauso. Was machst du mit dem Anruf?",
          standard: "Du öffnest die Tastatur; eingetippt hast du damit noch nichts. Gibst du den Code über die Tasten ein, kann der Anrufer die Ziffern erkennen. Wie gehst du mit dem Anruf um?" } },
        lautsprecher: { wertung: "neutral", text: {
          leicht: "Du tippst auf: Lautsprecher. Das ändert nichts am Anruf. Was machst du mit dem Anruf?",
          einfach: "Du schaltest den Lautsprecher ein. Das ändert nichts am Gespräch. Was machst du mit dem Anruf?",
          standard: "Du schaltest den Lautsprecher ein. Das ändert nichts am Gespräch. Wie gehst du mit dem Anruf um?" } },
        // eigener Text, weil die Rückmeldung jetzt die gewählte Handlung nennt (vorher gleichWie: lautsprecher)
        // Punkt C (07.11.2026): sagt, was Stumm tut – statt „Das ändert nichts am Gespräch“
        stumm: { wertung: "neutral", text: {
          leicht: "Du tippst auf: Stumm. Dein Mikrofon ist jetzt aus. Der Anrufer hört dich nicht. Der Anruf geht weiter. Was machst du mit dem Anruf?",
          einfach: "Du schaltest dein Mikrofon stumm. Der Anrufer hört dich jetzt nicht, aber der Anruf läuft weiter. Was machst du mit dem Anruf?",
          standard: "Du schaltest dein Mikrofon stumm. Der Anrufer hört dich nicht mehr, das Gespräch läuft aber weiter. Wie gehst du mit dem Anruf um?" } }
      },
      // Drei Hilfestufen in den zwei vorhandenen (Entscheidungsvorlage, D11):
      // „Hilfe zur Aufgabe“ = Tipp; „Mehr Hilfe zeigen“ = Vorbild, danach Lösung mit Grund.
      hilfe: {
        tipp: { leicht: "Was will der Anrufer von dir?", einfach: "Was will der Anrufer von dir?", standard: "Was verlangt der Anrufer von dir?" },
        vorbild: "s2-3",
        loesung: {
          leicht: "Tippe auf: Auflegen. Der Anrufer will deinen Code.",
          einfach: "Tippe auf „Auflegen“. Der Anrufer will deinen Code.",
          standard: "Tippe auf „Auflegen“. Der Anrufer verlangt deinen Code." }
      },
      nachFehlerVorbild: "s2-3", // Punkt 3 (D11 für BE1): „Tilda zusehen“, zugeklappt
      quellen: ["F1", "F7", "Q9"]
    },

    /* ---------- S6 Neue Lage (2 Fragen) ---------- */
    {
      id: "s6-1", schritt: "neu", art: "frage",
      handy: [
        { typ: "nachricht", von: "SMS", text: "Ihr Code: 618 230" },
        { typ: "nachricht", von: "Mama", text: "Hallo Schatz, ich habe ein neues Handy. Gleich kommt bei dir ein Code an. Den brauche ich, sonst geht mein WhatsApp nicht. Schick ihn mir bitte schnell." }
      ],
      lage: {
        leicht: "Du bekommst eine Nachricht von Mama. Ihre Nummer ist in deinem Handy gespeichert. Gleichzeitig kommt bei dir eine SMS mit einem Code.",
        einfach: "Du bekommst eine Nachricht von Mama, ihre Nummer ist gespeichert. Gleichzeitig kommt bei dir eine SMS mit einem Code an.",
        standard: "Du bekommst eine Nachricht von der gespeicherten Nummer deiner Mutter. Gleichzeitig erhältst du eine SMS mit einem Code."
      },
      frage: { leicht: "Was machst du?", einfach: "Was machst du?", standard: "Wie reagierst du?" },
      antworten: [
        { wertung: "unpassend", uebungHinweis: true,
          text: { leicht: "Ich schicke den Code. Es ist ja Mama.", einfach: "Ich schicke ihr den Code, denn es ist ja Mama.", standard: "Ich schicke ihr den Code – es ist schließlich Mama." },
          rueckmeldung: {
            // Punkt D: Die Nachricht nennt WhatsApp, daher gilt F6 (Registrierungscode). Mit „kann“.
            leicht: "Du schickst den Code. Aber vielleicht schreibt gar nicht Mama. Mit dem Code kann jemand dein WhatsApp auf sein Handy holen. Dann kann diese Person in deinem Namen schreiben. Auch deine Familie bekommt den Code nicht.",
            einfach: "Du schickst den Code. Aber vielleicht schreibt gar nicht Mama. Mit dem Code kann jemand dein WhatsApp auf sein Handy holen und dann in deinem Namen schreiben. Auch deine Familie bekommt den Code nicht.",
            standard: "Du schickst den Code. Möglicherweise schreibt aber gar nicht deine Mutter. Mit dem Code kann jemand dein WhatsApp-Konto auf sein Handy übertragen und in deinem Namen schreiben. Auch Familienmitglieder bekommen deinen Code nicht." } },
        { wertung: "auchMoeglich",
          text: { leicht: "Ich schicke nichts. Ich antworte nicht.", einfach: "Ich schicke den Code nicht und antworte erst mal nicht.", standard: "Ich schicke den Code nicht und antworte vorerst nicht." },
          rueckmeldung: {
            // ergänzt 07.11.2026 passend zu Punkt 12 (normaler Telefonanruf)
            leicht: "Du schickst nichts. Der Code bleibt bei dir. Das ist das Wichtigste. Du kannst Mama später mit der Telefon-App anrufen.",
            einfach: "Du schickst nichts, und der Code bleibt bei dir – das ist das Wichtigste. Du kannst Mama später noch ganz normal mit der Telefon-App anrufen.",
            standard: "Du schickst nichts, und der Code bleibt bei dir – das ist das Wichtigste. Du kannst deine Mutter später noch ganz normal über die Telefon-App anrufen." } },
        { wertung: "passend",
          text: { leicht: "Ich schicke nichts. Ich rufe Mama an.", einfach: "Ich schicke den Code nicht und rufe Mama an.", standard: "Ich schicke den Code nicht und rufe Mama direkt an." },
          // Punkt 12 mit Präzisierung: bekannte Nummer und eindeutig ein normaler Telefonanruf
          rueckmeldung: {
            leicht: "Du rufst Mama selbst mit der Telefon-App an. Du nimmst ihre bekannte Nummer, nicht über den Chat. Aber auch ein Anruf ist kein sicherer Beweis. Verrate den Code auch am Telefon niemals.",
            einfach: "Du rufst Mama selbst über die Telefon-App unter ihrer bekannten Nummer an, nicht über den Chat. So kannst du direkt nachfragen. Bedenke aber: Auch am Telefon können Nummern gefälscht sein – verrate deinen Code auch am Telefon niemals.",
            standard: "Du rufst deine Mutter selbst über die Telefon-App unter ihrer bekannten Nummer an – nicht über den Chat. So prüfst du über einen zweiten Weg nach; da Rufnummern jedoch auch manipuliert werden können, ist ein Anruf kein garantierter Identitätsnachweis. Deinen Code behältst du auch am Telefon in jedem Fall für dich." } }
      ],
      hilfe: { allgemein: true, zusatz: "merksatzAnsehen" }, // Punkt 4
      quellen: ["F6"]
    },
    {
      id: "s6-2", schritt: "neu", art: "frage",
      handy: [
        { typ: "anruf", richtung: "eingehend", von: "Polizei", nummer: "Nummer aus deiner Stadt",
          gesagt: "Hier ist die Polizei. Wir haben einen Betrüger gefasst. Zur Kontrolle brauchen wir den Code. Der kommt gleich per SMS." }
      ],
      lage: {
        leicht: "Dein Handy klingelt. Auf dem Bildschirm steht: Polizei. Dazu steht eine Nummer aus deiner Stadt.",
        einfach: "Dein Handy klingelt. Auf dem Bildschirm steht „Polizei“ und eine Nummer aus deiner Stadt.",
        standard: "Dein Handy klingelt. Auf dem Bildschirm erscheinen „Polizei“ und eine Nummer aus deiner Stadt."
      },
      frage: { leicht: "Was machst du?", einfach: "Was machst du?", standard: "Wie reagierst du?" },
      antworten: [
        { wertung: "passend",
          text: { leicht: "Ich lege auf. Den Code bekommt niemand.", einfach: "Ich lege auf, denn meinen Code bekommt niemand.", standard: "Ich lege auf – meinen Code bekommt grundsätzlich niemand." },
          rueckmeldung: {
            leicht: "Du legst auf. So bekommt der Anrufer deinen Code nicht. Auf dem Bildschirm steht Polizei? Das kann gefälscht sein. Auch die Polizei bekommt deinen Code nicht.",
            einfach: "Du legst auf, so bekommt der Anrufer deinen Code nicht. Was auf dem Bildschirm steht, kann gefälscht sein. Auch die Polizei bekommt deinen Code nicht.",
            standard: "Du legst auf, und der Anrufer bekommt deinen Code nicht. Die Anzeige auf dem Bildschirm kann gefälscht sein. Auch die Polizei bekommt deinen Code nicht." } },
        { wertung: "unpassend", uebungHinweis: true,
          text: { leicht: "Ich sage den Code. Dort steht ja: Polizei.", einfach: "Ich sage den Code, weil auf dem Bildschirm Polizei steht.", standard: "Ich nenne den Code, schließlich steht dort „Polizei“." },
          // Folge allgemein: Welcher Code gemeint ist, sagt die Lage nicht (Grenze im Bericht)
          rueckmeldung: {
            // Punkt D: gleicher allgemeiner Zusammenhang wie S4-1 und S4-4
            leicht: "Du sagst den Code. Auf dem Bildschirm steht Polizei. Das kann gefälscht sein. Mit dem Code kann der Anrufer etwas in deinem Namen bestätigen. Auch die Polizei bekommt deinen Code nicht.",
            einfach: "Du sagst den Code. Auf dem Bildschirm steht zwar „Polizei“, aber das kann gefälscht sein. Mit dem Code kann der Anrufer etwas in deinem Namen bestätigen. Auch die Polizei bekommt deinen Code nicht.",
            standard: "Du nennst den Code. Die Anzeige „Polizei“ kann jedoch gefälscht sein, und mit dem Code kann der Anrufer in deinem Namen etwas bestätigen. Auch die Polizei bekommt deinen Code nicht." } },
        { wertung: "auchMoeglich", // Punkt 10: nur für genau diese Lage (verdächtiger Polizeianruf)
          text: { leicht: "Ich lege auf. Ich rufe selbst 110 an.", einfach: "Ich lege auf und rufe danach selbst die 110 an.", standard: "Ich lege auf und frage anschließend selbst unter 110 nach." },
          // Punkt 11: berichtigt (vorher: „Diese Nummer kann niemand fälschen.“)
          rueckmeldung: {
            leicht: "Die 110 wählst du selbst. Dann sprichst du mit der echten Polizei. So erfährst du: Hat die Polizei wirklich angerufen?",
            einfach: "Die 110 wählst du selbst – dann sprichst du mit der echten Polizei. So erfährst du, ob sie wirklich angerufen hat.",
            standard: "Wählst du die 110 selbst, erreichst du die echte Polizei. So erfährst du, ob sie tatsächlich angerufen hat." } }
      ],
      // Präzisierung zu Punkt 3: kein eigener Tipp. Der S5-Tipp wird nicht übernommen.
      // „Hilfe zur Aufgabe“ zeigt nur die allgemeine Hilfe; „Mehr Hilfe zeigen“ bietet
      // „Tilda zusehen“ (S2 Bildschirm 3). Keine Lösung in der Hilfe.
      hilfe: { allgemein: true, tipp: null, vorbild: "s2-3", loesung: null },
      nachFehlerVorbild: "s2-3",
      quellen: ["F3", "Q8"]
    },

    /* ---------- S7 Merken ---------- */
    {
      id: "s7", schritt: "merken", art: "erinnern",
      zeigt: ["s3.merksatz", "s3.grund", "regel"],
      rueckblick: {
        gewaehlt: {
          leicht: "Am Anfang hast du gewählt: {antwort}. Jetzt weißt du: Deinen Code bekommt niemand.",
          einfach: "Am Anfang hast du gewählt: „{antwort}“. Jetzt weißt du: Deinen Code gibst du niemandem – auch nicht der Bank.",
          standard: "Am Anfang hast du gewählt: „{antwort}“. Jetzt weißt du: Deinen Code gibst du nicht weiter – auch nicht an die Bank."
        },
        unsicher: {
          leicht: "Am Anfang warst du nicht sicher. Jetzt weißt du: Deinen Code bekommt niemand.",
          einfach: "Am Anfang warst du nicht sicher. Jetzt weißt du: Deinen Code gibst du niemandem – auch nicht der Bank.",
          standard: "Am Anfang warst du dir nicht sicher. Jetzt weißt du: Deinen Code gibst du nicht weiter – auch nicht an die Bank."
        }
      }
    },

    /* ---------- S8 Im Alltag ---------- */
    {
      id: "s8", schritt: "alltag", art: "transfer",
      transfer: {
        leicht: "Speichere die Nummer von deiner Bank in deinem Handy. Die Nummer steht auf deiner Bank-Karte. Dann hast du die Nummer immer dabei. Und du kannst selbst bei der Bank anrufen.",
        einfach: "Speichere die Nummer deiner Bank in deinem Handy. Sie steht auf deiner Bank-Karte oder in deinen Bank-Unterlagen. Dann kannst du jederzeit selbst bei der Bank nachfragen.",
        standard: "Speichere die Telefonnummer deiner Bank im Handy. Du findest sie auf deiner Bank-Karte oder in deinen Bankunterlagen. So kannst du jederzeit selbst nachfragen."
      },
      freiwillig: {
        leicht: "Du musst das nicht heute machen. Du entscheidest selbst.",
        einfach: "Du musst das nicht heute machen – du entscheidest selbst.",
        standard: "Ob und wann du das machst, entscheidest du selbst."
      },
      schonPassiert: { // zugeklappt
        leicht: [
          "Du hast einen Bank-Code weitergegeben?",
          "Ruf sofort deine Bank an. Die Nummer steht auf deiner Bank-Karte.",
          "Oder ruf 116 116 an. Dort kannst du jede deutsche girocard sperren. Kreditkarten oder Online-Banking gehen dort nicht bei jeder Bank.",
          "Vom Handy kann 116 116 etwas kosten. Melde den Betrug auch bei der Polizei.",
          "Du hast einen WhatsApp-Code weitergegeben?",
          "Melde dich in WhatsApp mit einem neuen SMS-Code neu an. Dann ist die andere Person sofort draußen.",
          "Fragt WhatsApp nach einer fremden Geheimzahl? Dann musst du 7 Tage warten. Die andere Person ist trotzdem schon draußen.",
          "Prüfe danach in den Einstellungen den Punkt Verknüpfte Geräte. Melde fremde Geräte ab und schalte eine 2-Schritt-Prüfung ein.",
          "Sag Familie und Freunden Bescheid: per Anruf oder SMS. Du kannst dir dabei helfen lassen. Das ist nicht deine Schuld."
        ],
        einfach: [
          "Du hast einen Bank-Code weitergegeben? Ruf sofort deine Bank unter der Nummer auf deiner Bank-Karte an. Du kannst auch den Sperr-Notruf 116 116 anrufen (vom Handy eventuell kostenpflichtig). Wichtig: Über 116 116 sind alle deutschen girocards sperrbar, aber nicht alle Kreditkarten oder Online-Zugänge – im Zweifel direkt die Notfall-Hotline deiner Bank nutzen. Melde den Betrug außerdem bei der Polizei.",
          "Du hast einen WhatsApp-Code weitergegeben? Melde dich in WhatsApp mit dem neuen SMS-Code erneut an – damit wird die andere Person sofort abgemeldet. Falls eine fremde PIN (Verifizierung in zwei Schritten) verlangt wird, musst du 7 Tage warten, bis die Anmeldung klappt; der Angreifer hat dann aber keinen Zugriff mehr. Prüfe danach unter „Einstellungen → Verknüpfte Geräte“, melde unbekannte Geräte ab und richte eine eigene Verifizierung in zwei Schritten ein. Warne Familie und Freunde per Anruf oder SMS.",
          "Du kannst dir dabei helfen lassen. Das ist nicht deine Schuld."
        ],
        standard: [
          "Du hast einen Bank-Code weitergegeben? Ruf sofort deine Bank unter der Nummer auf deiner Bank-Karte an. Alternativ hilft der Sperr-Notruf 116 116 (aus dem Mobilfunknetz eventuell kostenpflichtig) – beachte aber: Alle deutschen girocards sind dort sperrbar, Kreditkarten und Online-Banking jedoch nur bei teilnehmenden Anbietern; wende dich sonst direkt an die Notfallnummer deines Instituts. Erstatte außerdem Anzeige bei der Polizei.",
          "Du hast einen WhatsApp-Code weitergegeben? Melde dich in WhatsApp mit dem neuen sechsstelligen SMS-Code neu an; damit werden andere Geräte sofort abgemeldet. Wurde eine fremde PIN für die Verifizierung in zwei Schritten eingerichtet, greift eine 7-tägige Wartezeit – der Angreifer bleibt in dieser Zeit bereits ausgesperrt. Prüfe anschließend unter „Einstellungen → Verknüpfte Geräte“, entferne unbekannte Sitzungen und aktiviere deine eigene Verifizierung in zwei Schritten. Informiere Familie und Freunde über einen anderen Kanal (z. B. Anruf oder SMS).",
          "Du kannst dir dabei helfen lassen. Das ist nicht deine Schuld."
        ]
      },
      begleitung: "Gemeinsam die Nummer der Bank auf der Karte suchen und im Handy speichern. Die lernende Person tippt selbst.",
      quellen: ["F4", "F5", "F6"]
    }
  ],

  // Antworten von S4: in allen Beispielen gleich, feste Reihenfolge (Punkt 6)
  antwortSaetze: {
    s4: {
      frage: { leicht: "Was machst du mit dem Code?", einfach: "Was machst du mit diesem Code?", standard: "Was tust du mit dem Code?" },
      antworten: [
        { id: "selbst", text: { leicht: "Ich brauche den Code selbst. Ich gebe ihn ein.", einfach: "Ich brauche den Code selbst und gebe ihn selbst ein.", standard: "Ich brauche den Code selbst und gebe ihn selbst ein." } },
        { id: "andere", text: { leicht: "Jemand anders will ihn. Ich gebe ihn nicht weiter.", einfach: "Jemand anders will den Code. Ich gebe ihn nicht weiter.", standard: "Jemand anderes will den Code – ich gebe ihn nicht weiter." } }
      ]
    }
  },

  // Bedientext: in allen Stufen gleich. neu: true = für die Prüfgruppe vormerken (§13)
  BEDIENWOERTER: {
    auflegen: { text: "Auflegen", neu: true },
    lautsprecher: { text: "Lautsprecher", neu: true },
    tastatur: { text: "Tastatur", neu: true },
    stumm: { text: "Stumm", neu: true },
    selbstNachfragen: { text: "Selbst nachfragen", neu: true },
    tildaZusehen: { text: "Tilda zusehen", neu: true },
    zumHandy: { text: "Zurück zum Handy", neu: true, ort: "S5, unter einer neutralen Rückmeldung (V3, 07.11.2026)" },
    /* S5 in zwei Ansichten desselben Schritts (Auftrag 07.11.2026 „BE1 mobil gezielt besser bedienbar“):
       erst lesen, was der Anrufer sagt, dann entscheiden. */
    jetztEntscheiden: { text: "Jetzt entscheiden", neu: true, ort: "S5, unter dem Anruf (Ansicht Lesen)" },
    anrufLesen: { text: "Anruf nochmal lesen", neu: true, ort: "S5, über den Möglichkeiten (Ansicht Entscheiden)" },
    merksatzAnsehen: { text: "Den Merksatz noch einmal ansehen", neu: true }, // Punkt 4, Wortlaut vorläufig
    istPassiert: { text: "Ist es schon passiert?", neu: true },
    nummerBankKarte: { text: "Nummer von der Bank-Karte", neu: true, ort: "Bildschirm S2-4" },
    nummerStadt: { text: "Nummer aus deiner Stadt", neu: true, ort: "Bildschirm S6-2" },
    bankKarte: { text: "Bank-Karte", neu: true, ort: "Beschriftung Piktogramm card" }
  }
};
