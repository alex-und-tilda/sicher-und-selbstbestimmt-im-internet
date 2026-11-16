/* Lernkreis-Daten für alle 34 Lernwege in 12 Themen (Welle 2 / M2.1, T1)
   - Leit-Lernwege (12 Themen): ds1, ge1, wa2, fb2, ig1, yt1, sc1, tt1, h1, ki1, fn1, be1, ek3
   - Weitere 21 Lernwege: ds2, wa3, fb1, fb3, ig2, yt2, yt3, sc2, sc3, tt2, tt3, h2, h3, ki2, ki3, fn2, fn3, be2, be3, ek1, ek2
   Keine übertriebenen Sicherheitsversprechen; alle 3 Sprachstufen synchron. */
(function () {
  "use strict";

  const drei = (leicht, einfach, standard) => ({ leicht, einfach, standard });
  const stdAntworten = ["Ja, bestimmt", "Nein, wohl nicht", "Ich probiere es aus"];

  window.LERNKREIS_WEGE_DATEN = {
    /* === 1. DATENSCHUTZ (ds1, ds2) === */
    ds1: {
      titel: "Nötig oder nicht?",
      referenz: true,
      themaKey: "datenschutz",
      koennen: "abwägen",
      regel: "noetig",
      fragt: "alex",
      machtVor: "tilda",
      grad: "klar",
      frage: "„Ich will nur ein Foto heller machen. Die App will meine Kontakte sehen. Was soll ich tippen?“",
      vorbild: drei(
        "Tilda hat eine Taschenlampen-App. Die App will ihre Kontakte. Tilda überlegt: Wofür braucht eine Lampe meine Kontakte? Sie findet keinen Grund. Sie tippt auf: Nicht erlauben. Die Lampe leuchtet trotzdem.",
        "Tildas Taschenlampen-App will ihre Kontakte lesen. Tilda überlegt, wofür eine Lampe Kontakte braucht, und findet keinen Grund. Sie tippt auf „Nicht erlauben“. Die Lampe leuchtet trotzdem.",
        "Tildas Taschenlampen-App bittet um Zugriff auf ihre Kontakte. Tilda fragt sich, wofür eine Lampe diese Daten benötigt, und findet keinen Grund. Sie wählt „Nicht erlauben“. Die Lampe funktioniert trotzdem."
      ),
      vorhersage: null,
      wege: [
        { id: "kontakteNein", label: "Nicht erlauben", wertung: "passend" },
        { id: "wofuer", label: "Wofür? Nachsehen", wertung: "auchMoeglich" },
        { id: "kontakteJa", label: "Erlauben", wertung: "eigene" }
      ],
      wenig: ["kontakteNein", "kontakteJa"],
      werkstattAuftrag: drei(
        "Die Foto-App fragt nach deinen Kontakten. Probier aus: Was passiert bei jedem Knopf?",
        "Die Foto-App fragt nach deinen Kontakten. Probier aus, was bei jedem Knopf passiert.",
        "Die Foto-App bittet um Zugriff auf deine Kontakte. Probiere aus, was bei jeder Auswahl geschieht."
      ),
      erfolg: {
        kontakteNein: {
          tun: drei(
            "Du hast den Zugriff nicht erlaubt. Das Foto geht trotzdem auf.",
            "Du hast den Zugriff nicht erlaubt, und das Foto öffnet sich trotzdem.",
            "Du hast den Zugriff nicht erlaubt. Das Foto lässt sich trotzdem bearbeiten."
          ),
          reaktionGeschichte: "„Danke. Die App geht ja auch ohne meine Kontakte.“",
          reaktionSonst: "„So mache ich es auch. Erst frage ich: Wofür?“"
        },
        zugriffAus: {
          tun: drei(
            "Du hast den Zugriff wieder ausgeschaltet. Die App liest ab jetzt keine Kontakte mehr.",
            "Du hast den Zugriff wieder ausgeschaltet, und die App liest ab jetzt keine Kontakte mehr.",
            "Du hast die Berechtigung wieder entzogen. Die App liest ab jetzt keine Kontakte mehr."
          ),
          reaktionGeschichte: "„Gut. Das lässt sich also wieder ändern.“",
          reaktionSonst: "„Gut zu wissen. Das lässt sich wieder ändern.“"
        },
        soLassen: {
          tun: drei(
            "Du hast entschieden: Der Zugriff bleibt an. Du kannst das später ändern.",
            "Du hast entschieden, dass der Zugriff an bleibt. Du kannst das später ändern.",
            "Du hast entschieden, die Berechtigung bestehen zu lassen. Das lässt sich später ändern."
          ),
          reaktionGeschichte: null,
          reaktionSonst: null
        }
      },
      apply: drei(
        "Sieh heute bei einer App auf deinem Handy nach. Welche Daten braucht die App wirklich?",
        "Sieh heute in den Handy-Einstellungen bei einer App nach, welche Zugriffe eingeschaltet sind.",
        "Prüfe heute in den Einstellungen deines Smartphones die Berechtigungen einer installierten App."
      ),
      wasWaereWenn: [
        {
          label: "Nicht erlauben",
          folge: drei(
            "Die App öffnet dein Foto. Du kannst es bearbeiten. Dafür braucht die App deine Kontakte nicht. Die Nummern von deinen Freunden bleiben bei dir.",
            "Die App öffnet dein Foto, und du kannst es bearbeiten. Dafür braucht sie deine Kontakte nicht. Die Nummern deiner Freunde bleiben bei dir.",
            "Die App öffnet dein Foto, und du kannst es bearbeiten. Für diesen Zweck benötigt sie deine Kontakte nicht. Die Telefonnummern deiner Freunde bleiben bei dir."
          )
        },
        {
          label: "Erlauben",
          folge: drei(
            "Die App darf jetzt deine Kontakte lesen. Sie hat es schon getan. Sie zeigt dir 3 Freunde. Für dein Foto braucht die App das nicht. Du entscheidest jetzt: Zugriff ausschalten. Oder so lassen.",
            "Die App darf jetzt deine Kontakte lesen, und sie hat es schon getan: Sie zeigt dir 3 Freunde. Für dein Foto braucht sie das nicht. Du entscheidest, ob du den Zugriff wieder ausschaltest oder ihn so lässt.",
            "Die App hat nun die Berechtigung, deine Kontakte zu lesen, und hat sie bereits genutzt: Sie zeigt dir 3 Freunde an. Für die Bearbeitung eines Fotos ist das nicht erforderlich. Du entscheidest, ob du die Berechtigung wieder entziehst oder bestehen lässt."
          )
        }
      ]
    },
    ds2: {
      titel: "DS2 · Wer sieht es?",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Ich möchte ein Foto teilen – aber nicht für ganz fremde Menschen.“",
      wasWaereWenn: [
        {
          label: "Auf Freunde umstellen",
          folge: drei(
            "Fremde sehen das Foto nicht öffentlich. Bedenke aber: Freunde können das Bild speichern.",
            "Fremde sehen das Foto nicht öffentlich. Bedenke jedoch, dass auch Kontakte Bilder speichern können.",
            "Unbekannte sehen den Beitrag nicht öffentlich. Dennoch können bestätigte Kontakte geteilte Inhalte speichern."
          )
        },
        {
          label: "Öffentlich lassen",
          folge: drei(
            "Jede Person im Internet kann das Foto sehen und speichern.",
            "Alle Menschen im Internet können das Foto sehen und herunterladen.",
            "Der Beitrag ist weltweit öffentlich sichtbar und kann von Unbekannten gespeichert werden."
          )
        }
      ]
    },

    /* === 2. GRUNDEINSTELLUNGEN (ge1) === */
    ge1: {
      titel: "GE1 · Konto einrichten",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Beim Einrichten kommen viele Fragen. Muss ich alles sofort festlegen?“",
      wasWaereWenn: [
        {
          label: "In Ruhe prüfen",
          folge: drei(
            "Du siehst genau, was du teilst. Später kannst du jedes Feld wieder ändern.",
            "Du behältst den Überblick über deine Angaben und kannst jede Einstellung später anpassen.",
            "Du wählst bewusst aus, welche Angaben du freigibst, und kannst alles später korrigieren."
          )
        },
        {
          label: "Alles schnell bestätigen",
          folge: drei(
            "Manche Apps schalten dann mehr frei, als du willst. In den Einstellungen lässt sich das wieder ändern.",
            "Standardwerte geben oft mehr frei als nötig. Du kannst das in den Einstellungen nachregeln.",
            "Voreinstellungen sind oft großzügig. Eine nachträgliche Prüfung in den Einstellungen hilft."
          )
        }
      ]
    },

    /* === 3. WHATSAPP (wa2, wa3) === */
    wa2: {
      titel: "Link in einer Nachricht",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Hier ist ein Link zu einem Paket. Ich habe aber nichts bestellt.“",
      wasWaereWenn: [
        {
          label: "Erst prüfen, nicht tippen",
          folge: drei(
            "Es öffnet sich keine fremde Seite. Du kannst die Person in Ruhe fragen oder die Nachricht löschen.",
            "Keine fremde Webseite wird geladen. Du kannst in Ruhe nachfragen oder die Nachricht löschen.",
            "Es wird keine externe Seite aufgerufen. Du behältst die Kontrolle und kannst den Absender unabhängig prüfen."
          )
        },
        {
          label: "Sofort antippen",
          folge: drei(
            "Es öffnet sich eine fremde Seite. Dort wirst du oft nach Daten oder Geld gefragt. Schließe die Seite einfach wieder.",
            "Eine fremde Seite öffnet sich und fragt oft nach persönlichen Daten. Du kannst das Fenster einfach schließen.",
            "Du landest auf einer unbekannten Webseite, die häufig Daten abfragt. Schließe den Tab, ohne etwas einzugeben."
          )
        }
      ]
    },
    wa3: {
      titel: "WA3 · Dein WhatsApp-Code",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Mein Bekannter schreibt: Schick mir mal den Code, der gerade per SMS kam!“",
      wasWaereWenn: [
        {
          label: "Code behalten, nicht senden",
          folge: drei(
            "Dein WhatsApp-Konto bleibt bei dir. Ruf deinen Bekannten im Zweifel direkt an.",
            "Ohne deinen Code lässt sich dein Konto nicht auf einem fremden Gerät einrichten. Ruf deinen Bekannten im Zweifel direkt an.",
            "Ohne den Bestätigungscode lässt sich dein Konto nicht auf einem neuen Gerät einrichten; per Anruf lässt sich klären, ob das Konto des Bekannten missbraucht wurde."
          )
        },
        {
          label: "Code weiterschicken",
          folge: drei(
            "Mit diesem Code kann jemand dein WhatsApp auf einem anderen Handy öffnen. Hol dir dann sofort Hilfe.",
            "Mit dem Code lässt sich dein Konto auf einem fremden Gerät anmelden. Ändere dann rasch deine Anmeldung.",
            "Der Bestätigungscode ermöglicht die Übernahme deines Kontos auf einem anderen Gerät."
          )
        }
      ]
    },

    /* === 4. FACEBOOK (fb1, fb2, fb3) === */
    fb1: {
      titel: "FB1 · Wer sieht meinen Beitrag?",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Ich möchte ein Bild vom Ausflug teilen – aber nur für meine Freunde.“",
      wasWaereWenn: [
        {
          label: "Auf „Freunde“ stellen",
          folge: drei(
            "Fremde sehen den Beitrag nicht auf deiner Seite. Nur deine Freundesliste sieht ihn.",
            "Unbekannte sehen den Beitrag nicht öffentlich; er erscheint nur für deine Freundesliste.",
            "Der Beitrag bleibt außerhalb deines Freundeskreises unsichtbar."
          )
        },
        {
          label: "Auf „Öffentlich“ lassen",
          folge: drei(
            "Alle Menschen im Internet können deinen Beitrag sehen und teilen.",
            "Jede Person im Netz kann den Beitrag lesen, kommentieren und weiterleiten.",
            "Der Beitrag ist weltweit öffentlich einsehbar."
          )
        }
      ]
    },
    fb2: {
      titel: "Unbekannte Personen",
      titelGeschichte: "Tilda fragt dich",
      referenz: true,
      themaKey: "facebook",
      koennen: "erkennen",
      regel: "echt",
      fragt: "tilda",
      machtVor: "alex",
      grad: "ueberlegen",
      lagen: [
        { id: "luca", name: "Luca M.", grad: "klar" },
        { id: "jonas", name: "Jonas Weber", grad: "ueberlegen" },
        { id: "meryem", name: "Meryem Kaya", grad: "ueberlegen" },
        { id: "petra", name: "Petra Sommer", grad: "knifflig" }
      ],
      hinweisMehrereWege: true,
      frage: "„Ich kenne ihn nicht. Aber wir haben 2 gemeinsame Freunde. Was soll ich machen?“",
      vorbild: drei(
        "Alex bekommt eine Anfrage von Mara Lenz. Alex kennt sie nicht. Er tippt auf das Profil. Dort steht fast nichts. Alex nimmt die Anfrage nicht an.",
        "Alex bekommt eine Anfrage von Mara Lenz, die er nicht kennt. Er sieht sich zuerst das Profil an. Dort steht fast nichts, deshalb nimmt er die Anfrage nicht an.",
        "Alex erhält eine Anfrage von Mara Lenz, die er nicht kennt. Er sieht sich zuerst das Profil an. Es enthält kaum Angaben, deshalb nimmt er die Anfrage nicht an."
      ),
      vorhersage: null,
      wege: [
        { id: "annehmen", label: "Nimm die Anfrage an.", wertung: "eigene" },
        { id: "profil", label: "Sieh erst ins Profil.", wertung: "gleichwertig" },
        { id: "ablehnen", label: "Lehn die Anfrage ab.", wertung: "gleichwertig" }
      ],
      wenig: ["profil", "annehmen"],
      werkstattAuftrag: drei(
        "Eine Anfrage von Jonas Weber ist da. Du kennst ihn nicht. Probier aus: Was kannst du hier tun?",
        "Eine Anfrage von Jonas Weber ist da, den du nicht kennst. Probier aus, was du hier tun kannst.",
        "Du hast eine Anfrage von Jonas Weber erhalten, den du nicht kennst. Probiere aus, welche Möglichkeiten du hast."
      ),
      eineSacheFuerHeute: drei(
        "Sieh heute in deine Freundes-Liste. Kennst du alle Personen dort? Du musst nichts ändern. Du entscheidest selbst.",
        "Sieh dir heute deine Freundesliste an und überlege, ob du alle Personen dort kennst. Du musst nichts ändern.",
        "Sieh dir heute deine Freundesliste an: Kennst du alle Personen darin? Ob du etwas änderst, entscheidest du."
      ),
      erfolg: {
        profil: {
          tun: drei(
            "Du hast Tilda geraten: Sieh erst ins Profil. Tilda hat nachgesehen. Dann hat sie selbst entschieden.",
            "Du hast Tilda geraten, erst ins Profil zu sehen. Sie hat nachgesehen und dann selbst entschieden.",
            "Du hast Tilda geraten, zuerst das Profil anzusehen. Sie hat es geprüft und danach selbst entschieden."
          ),
          reaktionGeschichte: "„Danke. Jetzt weiß ich mehr über Jonas.“",
          reaktionSonst: "„So mache ich es auch. Erst sehe ich nach.“"
        },
        ablehnen: {
          tun: drei(
            "Du hast Tilda geraten: Lehn ab. Jonas sieht jetzt nichts von Tilda.",
            "Du hast Tilda geraten abzulehnen. Jonas sieht jetzt nichts von ihr.",
            "Du hast Tilda geraten, die Anfrage abzulehnen. Jonas erhält keinen Einblick in ihr Profil."
          ),
          reaktionGeschichte: "„Danke. Die Anfrage ist weg. Das ist mir recht.“",
          reaktionSonst: "„So mache ich es auch. Ich muss niemanden annehmen.“"
        },
        entfernen: {
          tun: drei(
            "Du hast Tilda geraten: Entferne ihn wieder. Jonas sieht ihre Fotos nicht mehr.",
            "Du hast Tilda geraten, Jonas wieder zu entfernen. Er sieht ihre Fotos nicht mehr.",
            "Du hast Tilda geraten, Jonas wieder zu entfernen. Er sieht ihre Fotos für Freunde nicht mehr."
          ),
          reaktionGeschichte: "„Gut. Das geht ja wieder weg.“",
          reaktionSonst: "„Gut zu wissen. Das geht wieder weg.“"
        }
      },
      wasWaereWenn: [
        {
          label: "Sieh erst ins Profil.",
          folge: drei(
            "Tilda sieht ins Profil. Das Konto ist 3 Tage alt. Es gibt 1 Foto. Es gibt keine Beiträge. Tilda sagt: Das ist mir zu wenig. Sie nimmt nicht an. Dein Rat gibt Tilda Zeit. Sie sieht erst nach. Dann entscheidet sie selbst.",
            "Tilda sieht sich das Profil an: Das Konto ist erst 3 Tage alt und hat nur 1 Foto. Das ist ihr zu wenig, deshalb nimmt sie nicht an. Mit deinem Rat konnte sie erst nachsehen und dann selbst entscheiden.",
            "Tilda prüft das Profil: Das Konto besteht erst seit 3 Tagen und enthält nur ein Foto. Das genügt ihr nicht, und sie nimmt die Anfrage nicht an. Dein Rat hat ihr ermöglicht, zuerst nachzusehen und dann selbst zu entscheiden."
          )
        },
        {
          label: "Lehn die Anfrage ab.",
          folge: drei(
            "Tilda lehnt ab. Die Anfrage ist weg. Jonas sieht nichts von Tilda. Tilda kennt Jonas vielleicht doch? Dann sucht sie ihn später selbst.",
            "Tilda lehnt ab, und die Anfrage ist weg. Jonas sieht dadurch nichts von ihr. Falls sie ihn doch kennt, kann sie ihn später selbst suchen.",
            "Tilda lehnt ab, und die Anfrage verschwindet. Jonas erhält dadurch keinen Einblick in ihr Profil. Sollte sie ihn doch kennen, kann sie ihn später selbst suchen."
          )
        },
        {
          label: "Nimm die Anfrage an.",
          folge: drei(
            "Tilda nimmt an. Jonas sieht jetzt mehr von Tilda. Zum Beispiel ihre Fotos für Freunde. Gleich schreibt Jonas ihr. Er will einen Code. Tilda sagt: Das ist komisch. Was mache ich jetzt?",
            "Tilda nimmt an. Jonas sieht jetzt mehr von ihr, zum Beispiel die Fotos für Freunde. Kurz danach schreibt er und will einen Code. Tilda findet das komisch und fragt dich noch einmal.",
            "Tilda nimmt an. Jonas sieht nun mehr von ihr, etwa die Fotos für Freunde. Kurz darauf schreibt er und bittet um einen Code. Tilda findet das merkwürdig und fragt dich erneut."
          )
        }
      ]
    },
    fb3: {
      titel: "FB3 · Komische Nachricht von Freunden",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Meine Freundin schreibt plötzlich ganz komisch und schickt einen Link. Bist du das wirklich?“",
      wasWaereWenn: [
        {
          label: "Auf anderem Weg nachfragen",
          folge: drei(
            "Du rufst kurz an oder schreibst eine normale SMS. So merkst du schnell, ob sie das wirklich war.",
            "Ein kurzer Anruf klärt sofort, ob deine Freundin die Nachricht selbst geschickt hat.",
            "Über einen zweiten, unabhängigen Kanal prüfst du zuverlässig, ob das Konto übernommen wurde."
          )
        },
        {
          label: "Link einfach öffnen",
          folge: drei(
            "Oft führt der Link auf eine nachgemachte Anmeldeseite. Gib dort nichts ein und schließe die Seite.",
            "Solche Links führen oft auf gefälschte Login-Seiten. Schließe die Seite, ohne Daten einzugeben.",
            "Der Link verweist häufig auf Phishing-Seiten; verlasse die Seite ohne Eingabe."
          )
        }
      ]
    },

    /* === 5. INSTAGRAM (ig1, ig2) === */
    ig1: {
      titel: "IG1 · Privat oder öffentlich?",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Soll wirklich jeder meine Fotos sehen – oder nur Menschen, die ich bestätige?“",
      wasWaereWenn: [
        {
          label: "Konto auf Privat stellen",
          folge: drei(
            "Neue Personen müssen dich erst fragen. Nur wer du erlaubst, sieht deine Fotos.",
            "Nur Personen, die du als Follower bestätigst, sehen deine Beiträge und Storys.",
            "Nur bestätigte Abonnent*innen sehen deine Inhalte; neue Anfragen musst du freigeben."
          )
        },
        {
          label: "Öffentlich lassen",
          folge: drei(
            "Jede Person auf der Welt kann deine Bilder ansehen und speichern.",
            "Alle Nutzer*innen können deine Bilder ohne Nachfrage sehen.",
            "Alle Beiträge sind weltweit frei abrufbar."
          )
        }
      ]
    },
    ig2: {
      titel: "IG2 · Fotos von anderen",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Ich habe ein tolles Gruppenfoto gemacht. Darf ich es einfach hochladen?“",
      wasWaereWenn: [
        {
          label: "Vorher alle fragen",
          folge: drei(
            "Alle fühlen sich wohl. Wer nicht ins Internet will, bleibt vom Foto weg.",
            "Du zeigst Respekt, und niemand wird gegen seinen Willen im Netz gezeigt.",
            "Alle Abgebildeten entscheiden selbst mit, und Konflikte werden vermieden."
          )
        },
        {
          label: "Einfach posten",
          folge: drei(
            "Manche Menschen möchten nicht im Internet stehen und können sich ärgern. Du kannst das Foto jederzeit wieder löschen.",
            "Das kann zu Ärger führen, weil nicht alle online gezeigt werden wollen. Du kannst es aber jederzeit wieder löschen.",
            "Ungefragtes Veröffentlichen verletzt das Recht am eigenen Bild; der Beitrag müsste dann wieder gelöscht werden."
          )
        }
      ]
    },

    /* === 6. YOUTUBE (yt1, yt2, yt3) === */
    yt1: {
      titel: "YT1 · Stimmt das Video?",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„In diesem Video verspricht jemand ein Wundermittel. Kann man das prüfen?“",
      wasWaereWenn: [
        {
          label: "Kanal und andere Quellen prüfen",
          folge: drei(
            "Du schaust, wer das Video gemacht hat und ob andere bekannte Stellen dasselbe sagen.",
            "Du prüfst den Kanal und vergleichst die Aussage mit vertrauenswürdigen Quellen.",
            "Durch Quellenvergleich erkennst du schnell, ob hinter der Behauptung echte Fakten stehen."
          )
        },
        {
          label: "Sofort glauben und kaufen",
          folge: drei(
            "Manche Videos wollen nur Klicks oder Geld. Prüfe zuerst, bevor du etwas kaufst.",
            "Manche Videos übertreiben, um Produkte zu verkaufen. Erst prüfen spart Geld und Ärger.",
            "Clickbait oder versteckte Werbung zielen oft auf schnelle Käufe ohne Belege."
          )
        }
      ]
    },
    yt2: {
      titel: "YT2 · Werbung erkennen",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Oben steht klein ‚Anzeige‘ und die Person lobt eine Creme sehr.“",
      wasWaereWenn: [
        {
          label: "Auf „Anzeige“ achten",
          folge: drei(
            "Du weißt: Die Person wird für das Lob bezahlt. So entscheidest du selbst, ob du es willst.",
            "Du erkennst bezahlte Werbung und kannst die Empfehlung nüchtern einordnen.",
            "Du trennst bezahlte Produktplatzierung von unabhängigen Tests."
          )
        },
        {
          label: "Für echte Empfehlung halten",
          folge: drei(
            "Du übersiehst vielleicht, dass die Person Geld dafür bekommt.",
            "Du verlässt dich auf eine Meinung, die eigentlich bezahlte Werbung ist.",
            "Kommerzielle Interessen bleiben so leicht unbemerkt."
          )
        }
      ]
    },
    yt3: {
      titel: "YT3 · Selbst aufhören",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Ich wollte nur ein Video schauen – jetzt läuft schon das vierte!“",
      wasWaereWenn: [
        {
          label: "Autoplay ausschalten",
          folge: drei(
            "Das Video stoppt am Ende. Du bestimmst selbst, wann du weiterschaust oder aufhörst.",
            "Nach jedem Video ist Pause, und du entscheidest selbst über den nächsten Klick.",
            "Die Wiedergabe endet bewusst; du behältst die Kontrolle über deine Zeit."
          )
        },
        {
          label: "Autoplay anlassen",
          folge: drei(
            "Es läuft immer weiter. Oft vergeht viel mehr Zeit, als du wolltest.",
            "Das nächste Video startet sofort, sodass man leicht länger schaut als geplant.",
            "Durchgängige Vorschläge verlängern die Nutzungszeit oft unbemerkt."
          )
        }
      ]
    },

    /* === 7. SNAPCHAT (sc1, sc2, sc3) === */
    sc1: {
      titel: "SC1 · Vor dem Senden prüfen",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Der Snap löscht sich doch gleich selbst – dann ist das Foto sicher weg, oder?“",
      wasWaereWenn: [
        {
          label: "Erst überlegen, was du sendest",
          folge: drei(
            "Du sendest nur Fotos, die auch dann in Ordnung sind, wenn jemand sie speichert.",
            "Du teilst nur Bilder, mit denen du dich auch langfristig wohlfühlst.",
            "Du behältst die Kontrolle, weil kein Bild verschickt wird, das dir später unangenehm wäre."
          )
        },
        {
          label: "Alles unbesorgt senden",
          folge: drei(
            "Die andere Person kann ein Bildschirm-Foto machen oder das Bild mit einem zweiten Handy abfotografieren.",
            "Empfänger*innen können einen Screenshot machen oder den Bildschirm abfotografieren.",
            "Screenshots oder Abfotografieren sind jederzeit möglich – „selbstlöschend“ garantiert keine Löschung."
          )
        }
      ]
    },
    sc2: {
      titel: "SC2 · Wer sieht meinen Standort?",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Muss jeder sehen können, ob ich gerade zu Hause oder unterwegs bin?“",
      wasWaereWenn: [
        {
          label: "Geistmodus einschalten",
          folge: drei(
            "Niemand sieht auf der Karte, wo du gerade bist. Du bestimmst das selbst.",
            "Dein Standort bleibt auf der Karte für andere ausgeblendet.",
            "Im Geistmodus wird dein Aufenthaltsort auf der Karte nicht geteilt."
          )
        },
        {
          label: "Standort für alle anlassen",
          folge: drei(
            "Andere sehen genau, wo du wohnst oder wo du dich gerade aufhältst.",
            "Kontakte können deinen aktuellen Ort auf der Karte mitverfolgen.",
            "Dein Bewegungsprofil ist für ausgewählte oder alle Kontakte sichtbar."
          )
        }
      ]
    },
    sc3: {
      titel: "SC3 · Nein sagen",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Jemand schreibt: Schick mir jetzt sofort ein Foto, sonst bin ich sauer!“",
      wasWaereWenn: [
        {
          label: "Nein sagen oder blockieren",
          folge: drei(
            "Du setzt deine Grenze. Wenn jemand weiter drängt, kannst du ihn blockieren und Hilfe holen.",
            "Du bleibst bei deinem Nein. Bei weiterem Druck blockierst du die Person und holst dir bei Bedarf Unterstützung.",
            "Du schützt deine Grenzen durch ein klares Nein, Blockieren und ggf. Unterstützung."
          )
        },
        {
          label: "Aus Druck nachgeben",
          folge: drei(
            "Wer einmal Druck macht, hört oft nicht auf. Du hast immer das Recht, Stopp zu sagen.",
            "Nachgeben beendet Druck selten. Du darfst jederzeit abbrechen und dir Hilfe holen.",
            "Druckmittel wirken oft weiter; ein Stopp und das Holen von Hilfe sind jederzeit möglich."
          )
        }
      ]
    },

    /* === 8. TIKTOK (tt1, tt2, tt3) === */
    tt1: {
      titel: "TT1 · Was zeigt mir TikTok?",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Ich habe einmal kurz ein Video angesehen – jetzt kommen nur noch solche!“",
      wasWaereWenn: [
        {
          label: "Weiterwischen oder „Kein Interesse“",
          folge: drei(
            "Die App merkt: Das gefällt dir nicht. Bald kommen wieder andere Themen.",
            "Der Algorithmus passt die Vorschläge an und zeigt wieder vielfältigere Themen.",
            "Durch „Kein Interesse“ oder schnelles Weiterscrollen steuerst du deine Vorschläge selbst."
          )
        },
        {
          label: "Lange ansehen",
          folge: drei(
            "Die App denkt, du magst das sehr, und zeigt dir noch mehr davon.",
            "Langes Ansehen wertet die App als starkes Interesse und liefert mehr ähnliche Clips.",
            "Lange Verweildauer verstärkt einseitige Empfehlungen im Feed."
          )
        }
      ]
    },
    tt2: {
      titel: "TT2 · Trends: mitmachen oder nicht?",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Alle machen diese Mutprobe nach. Soll ich da mitmachen?“",
      wasWaereWenn: [
        {
          label: "Erst prüfen und nein sagen",
          folge: drei(
            "Du schützt dich vor Unfällen oder peinlichen Videos. Du musst nicht alles mitmachen.",
            "Du vermeidest Risiken und entscheidest selbst, was dir guttut.",
            "Eigenes Abwägen schützt vor gesundheitlichen Risiken oder ungewollter Bloßstellung."
          )
        },
        {
          label: "Ohne Nachdenken nachmachen",
          folge: drei(
            "Manche Trends sind gefährlich oder verletzen andere. Erst schauen lohnt sich.",
            "Manche Challenges bergen Verletzungsgefahren oder rechtliche Risiken.",
            "Ungeprüftes Nachahmen kann zu Schäden oder unerwünschten Folgen führen."
          )
        }
      ]
    },
    tt3: {
      titel: "TT3 · Meine Zeit",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Beim Wischen vergeht die Zeit oft so schnell. Wie merke ich das?“",
      wasWaereWenn: [
        {
          label: "Pausen-Erinnerung stellen",
          folge: drei(
            "Das Handy erinnert dich freundlich an eine Pause. Du bestimmst selbst die Zeit.",
            "Eine ruhige Erinnerung hilft dir, rechtzeitig aufzuhören oder etwas anderes zu tun.",
            "Ein selbst gewähltes Zeitlimit unterstützt bewusste Pausen im Alltag."
          )
        },
        {
          label: "Ohne Pause durchwischen",
          folge: drei(
            "Schnell ist eine Stunde vorbei und man fühlt sich müde.",
            "Ohne Erinnerung vergeht oft viel mehr Zeit als geplant.",
            "Endlose Feeds fördern lange Nutzungszeiten ohne bewusste Unterbrechung."
          )
        }
      ]
    },

    /* === 9. HILFE BEI PROBLEMEN (h1, h2, h3) === */
    h1: {
      titel: "H1 · Was ist los?",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Mein Handy gibt keinen Ton mehr von sich. Muss ich jetzt Angst haben?“",
      wasWaereWenn: [
        {
          label: "Erst schauen, was los ist",
          folge: drei(
            "Kein Ton ist nur ein Technik-Problem. Du kannst in Ruhe nachsehen. Bei echter Gefahr rufst du sofort 110 oder 112.",
            "Du unterscheidest ruhig: Technik-Problem, Druck-Nachricht oder akute Gefahr (dann sofort 110 oder 112).",
            "Eine ruhige Einordnung (Technik, Druck oder akute Gefahr mit 110/112) vermeidet unnötige Panik."
          )
        },
        {
          label: "Sofort Panik bekommen",
          folge: drei(
            "Oft hilft ein kurzer Blick: Ist das Handy nur auf leise gestellt?",
            "Viele Technik-Probleme lassen sich in Ruhe prüfen, zum Beispiel die Lautstärke.",
            "Ohne ruhige Prüfung übersieht man oft einfache Ursachen wie Stummschaltung."
          )
        }
      ]
    },
    h2: {
      titel: "Was kann ich selbst tun?",
      referenz: true,
      themaKey: "hilfe",
      koennen: "Hilfe holen und selbst handeln",
      regel: null,
      merksatz: "Vieles kann ich selbst lösen.",
      fragt: "tilda",
      machtVor: "alex",
      grad: "klar",
      frage: "„Mein Handy macht keinen Ton mehr. Ich habe 3 Nachrichten verpasst. Muss ich jetzt jemanden holen?“",
      vorhersage: null,
      lage: {
        handy: "Chat von Ines: „Hast du meine Nachrichten nicht gehört? Ich habe 3 Mal geschrieben.“",
        leicht: "Dein Handy macht keinen Ton mehr. Nachrichten kommen an. Aber du hörst nichts. Du hast 3 Nachrichten verpasst.",
        einfach: "Dein Handy macht keinen Ton mehr. Nachrichten kommen zwar an, aber du hörst sie nicht. Du hast schon 3 Nachrichten verpasst.",
        standard: "Dein Handy gibt keinen Ton mehr von sich. Nachrichten kommen an, aber du hörst sie nicht und hast bereits drei verpasst."
      },
      vorbild: {
        handy: "Einstellungen · Ton, Schalter Lautlos: AN, getippt: Lautlos ausschalten",
        leicht: "Alex kennt das. Sein Handy war auch einmal still. Alex sieht in den Einstellungen nach. Dort steht: Lautlos ist an. Alex schaltet Lautlos aus. Jetzt hört er den Ton wieder.",
        einfach: "Alex kennt das, denn sein Handy war auch einmal still. Er sieht in den Einstellungen nach und findet den Grund: „Lautlos“ ist an. Er schaltet es aus und hört den Ton wieder.",
        standard: "Alex kennt das Problem: Auch sein Handy blieb einmal still. Er sieht in den Einstellungen nach und stellt fest, dass „Lautlos“ eingeschaltet ist. Er schaltet es aus und hört den Ton wieder."
      },
      aufgabe: drei(
        "Dein Handy ist still. Was machst du?",
        "Dein Handy bleibt still. Was machst du?",
        "Dein Handy bleibt stumm. Wie gehst du vor?"
      ),
      tipp: drei(
        "Überlege: Wo stellst du den Ton ein?",
        "Überlege, wo du den Ton einstellen kannst.",
        "Überlege, an welcher Stelle sich der Ton einstellen lässt."
      ),
      wege: [
        {
          id: "einstellungen",
          label: "Einstellungen ansehen",
          wertung: "passend",
          folgeHandy: "Einstellungen · Ton. Lautlos: AN. Knopf: Lautlos ausschalten. Danach: Lautlos: AUS, neue Nachricht von Ines mit Ton.",
          grund: drei(
            "Du siehst selbst nach. Dort steht: Lautlos ist an. Du schaltest Lautlos aus. Jetzt hörst du deine Nachrichten wieder.",
            "Du siehst selbst nach und findest den Grund: „Lautlos“ ist an. Du schaltest es aus und hörst deine Nachrichten wieder.",
            "Du siehst selbst nach und findest die Ursache: „Lautlos“ ist eingeschaltet. Nach dem Ausschalten hörst du deine Nachrichten wieder."
          )
        },
        {
          id: "neustart",
          label: "Handy neu starten",
          wertung: "unpassend",
          kopf: "Das hilft hier noch nicht.",
          folgeHandy: "Das Handy startet neu. Danach: Lautlos: AN. Das Handy bleibt still.",
          grund: drei(
            "Das Handy startet neu. Es bleibt aber still. Neu starten hilft bei vielen Problemen. Hier hilft es nicht. Denn Lautlos ist noch an.",
            "Das Handy startet neu, bleibt aber still. Ein Neustart hilft bei vielen Problemen, hier jedoch nicht, weil „Lautlos“ noch an ist.",
            "Das Handy startet neu, bleibt jedoch stumm. Ein Neustart behebt viele Störungen, diese aber nicht, weil „Lautlos“ weiterhin eingeschaltet ist."
          )
        },
        {
          id: "fragen",
          label: "Eine Person fragen",
          wertung: "auchMoeglich",
          folgeHandy: "Eine Kollegin sieht mit dir auf das Handy. Sie zeigt auf: Einstellungen · Ton. Lautlos: AN.",
          grund: drei(
            "Du fragst eine Person mit Handy-Wissen. Sie zeigt dir die Stelle: Lautlos ist an. Beim nächsten Mal findest du die Stelle selbst.",
            "Du fragst eine Person, die sich mit Handys auskennt, und sie zeigt dir die Stelle: „Lautlos“ ist an. Beim nächsten Mal findest du sie selbst.",
            "Eine Person, die sich auskennt, zeigt dir die Stelle: „Lautlos“ ist eingeschaltet. Beim nächsten Mal findest du sie selbst."
          )
        }
      ],
      wenig: ["einstellungen", "fragen"],
      wenigHinweis: "Bei zwei Antworten sind beide gut. Bei einem Technik-Problem ist Hilfe holen nie falsch.",
      werkstattAuftrag: drei(
        "Dein Handy ist still. Finde heraus: Woran liegt das?",
        "Dein Handy bleibt still. Finde heraus, woran das liegt.",
        "Dein Handy bleibt stumm. Finde heraus, woran das liegt."
      ),
      erfolg: {
        einstellungen: {
          tun: drei(
            "Du hast selbst nachgesehen. Lautlos war an. Jetzt ist der Ton wieder da.",
            "Du hast selbst nachgesehen und den Grund gefunden: „Lautlos“ war an. Jetzt ist der Ton wieder da.",
            "Du hast selbst nachgesehen und die Ursache gefunden. Der Ton ist wieder da."
          ),
          reaktionGeschichte: "„Das war ja einfach. Das merke ich mir.“",
          reaktionSonst: "„So habe ich es auch gefunden.“"
        },
        fragen: {
          tun: drei(
            "Du hast eine Person gefragt. Jetzt kennst du die Stelle. Der Ton ist wieder da.",
            "Du hast eine Person gefragt und kennst jetzt die Stelle. Der Ton ist wieder da.",
            "Du hast dir die Stelle zeigen lassen. Der Ton ist wieder da."
          ),
          reaktionGeschichte: "„Danke. Jetzt weiß ich, wo das steht.“",
          reaktionSonst: "„Fragen geht immer. Jetzt kennst du die Stelle.“"
        }
      },
      wasWaereWenn: [
        {
          label: "Einstellungen ansehen",
          folge: drei(
            "Du siehst selbst nach. Dort steht: Lautlos ist an. Du schaltest Lautlos aus. Jetzt hörst du deine Nachrichten wieder.",
            "Du siehst selbst nach und findest den Grund: „Lautlos“ ist an. Du schaltest es aus und hörst deine Nachrichten wieder.",
            "Du siehst selbst nach und findest die Ursache: „Lautlos“ ist eingeschaltet. Nach dem Ausschalten hörst du deine Nachrichten wieder."
          )
        },
        {
          label: "Handy neu starten",
          folge: drei(
            "Das Handy startet neu. Es bleibt aber still. Denn Lautlos ist noch an.",
            "Das Handy startet neu, bleibt aber still, weil „Lautlos“ noch an ist.",
            "Das Handy startet neu, bleibt jedoch stumm, weil „Lautlos“ weiterhin eingeschaltet ist."
          )
        },
        {
          label: "Eine Person fragen",
          folge: drei(
            "Eine Person mit Handy-Wissen zeigt dir die Stelle: Lautlos ist an. Beim nächsten Mal findest du die Stelle selbst.",
            "Eine Person zeigt dir die Stelle: „Lautlos“ ist an. Beim nächsten Mal findest du sie selbst.",
            "Eine Person zeigt dir die Stelle: „Lautlos“ ist eingeschaltet. Beim nächsten Mal findest du sie selbst."
          )
        }
      ]
    },
    h3: {
      titel: "H3 · Welche Hilfe passt?",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Ich habe ein Problem – wen frage ich jetzt am besten?“",
      wasWaereWenn: [
        {
          label: "Passende Hilfe wählen",
          folge: drei(
            "Bei Technik hilft eine Person mit Handy-Wissen. Bei Druck oder Sorge hilft eine Vertrauensperson. Bei akuter Gefahr: 110 oder 112.",
            "Du wählst passend: Technik-Hilfe für Einstellungen, Vertrauensperson bei Druck, und 110/112 bei akuter Gefahr.",
            "Zielgerichtete Hilfe spart Zeit und schützt in akuten Gefahrensituationen sofort."
          )
        },
        {
          label: "Allein bleiben, obwohl es drückt",
          folge: drei(
            "Niemand muss Probleme allein tragen. Hilfe holen zählt als Können.",
            "Unterstützung zu holen ist ein Zeichen von Stärke und löst Druck oft schnell.",
            "Frühzeitige Unterstützung verhindert oft größere Belastungen."
          )
        }
      ]
    },

    /* === 10. KI UND CHATBOTS (ki1, ki2, ki3) === */
    ki1: {
      titel: "KI1 · Programm oder Mensch?",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Der Chat schreibt so freundlich wie ein Mensch. Ist da wirklich jemand?“",
      wasWaereWenn: [
        {
          label: "Als Programm erkennen",
          folge: drei(
            "Eine KI ist ein Computerprogramm. Sie hat keine Gefühle und ersetzt keine echten Menschen. Private Daten teilst du dort besser nicht.",
            "Du weißt: Die KI ist Software, kein Mensch. Persönliche Geheimnisse oder Daten teilst du dort besser nicht.",
            "Du ordnest Antworten realistisch ein und behältst sensible Daten für dich."
          )
        },
        {
          label: "Wie einem Freund alles erzählen",
          folge: drei(
            "Eingaben können gespeichert oder weiterverarbeitet werden. Teile keine Passwörter oder Adressen.",
            "Texte im Chat können ausgewertet werden – gib dort keine vertraulichen Daten ein.",
            "Vertrauliche Daten können im KI-System gespeichert oder zur Weiterentwicklung genutzt werden."
          )
        }
      ]
    },
    ki2: {
      titel: "KI2 · Eine KI-Antwort prüfen",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Die KI schreibt das sehr selbstbewusst. Kann sie sich trotzdem irren?“",
      wasWaereWenn: [
        {
          label: "Wichtige Infos gegenprüfen",
          folge: drei(
            "Gute Idee! KI-Programme können Fehler erfinden, auch wenn der Text schlau klingt. Prüfe wichtige Dinge woanders nach.",
            "Richtig so: KI-Texte klingen oft sicher, können aber Fehler enthalten. Gegenprüfen schützt vor Irrtümern.",
            "Unabhängiges Gegenprüfen verhindert, dass plausibel klingende KI-Fehler übernommen werden."
          )
        },
        {
          label: "Blind übernehmen",
          folge: drei(
            "Fehler bei Gesundheit, Geld oder Terminen fallen so leicht nicht auf.",
            "Falsche Fakten oder erfundene Tipps können unbemerkt übernommen werden.",
            "Halluzinierte Angaben können zu Fehlentscheidungen führen."
          )
        }
      ]
    },
    ki3: {
      titel: "KI3 · Bekannte Stimme will Geld",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Am Telefon klingt es wie mein Neffe – aber er will sofort Geld. Wie prüfe ich das?“",
      wasWaereWenn: [
        {
          label: "Auflegen und selbst zurückrufen",
          folge: drei(
            "Du rufst deinen Neffen unter der gespeicherten Nummer an. So merkst du sofort, ob er wirklich angerufen hat.",
            "Durch einen eigenen Rückruf über die bekannte Nummer klärst du die Lage sofort.",
            "Der Rückruf auf der gespeicherten Rufnummer enttarnt gefälschte Stimmen zuverlässig."
          )
        },
        {
          label: "Sofort Geld schicken",
          folge: drei(
            "Auch echte klingende Stimmen können mit KI nachgemacht sein. Erst prüfen schützt dein Geld.",
            "Stimm-Imitationen setzen oft auf Zeitdruck. Ein kurzer Kontrollanruf verhindert Schaden.",
            "Zeitdruck bei Geldforderungen ist ein typisches Muster bei Stimm-Klonen."
          )
        }
      ]
    },

    /* === 11. FAKE NEWS UND KI-FAKES (fn1, fn2, fn3) === */
    fn1: {
      titel: "FN1 · Stimmt das (noch)?",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Hier steht: ‚Gestern in unserer Stadt!‘ – aber mir kommt das Bild komisch vor.“",
      wasWaereWenn: [
        {
          label: "Datum und Quelle ansehen",
          folge: drei(
            "Manche Fotos sind Jahre alt oder aus einem anderen Land. Ein Blick auf Datum und Quelle hilft.",
            "Du prüfst Datum und Quelle und fällst nicht auf alte Bilder im neuen Gewand herein.",
            "Quellen- und Datumsprüfung deckt aus dem Zusammenhang gerissene Bilder auf."
          )
        },
        {
          label: "Sofort erschrecken und teilen",
          folge: drei(
            "So verbreiten sich falsche Nachrichten weiter, obwohl sie gar nicht stimmen.",
            "Ungeprüftes Teilen vergrößert die Reichweite von Falschmeldungen.",
            "Emotionale Überschriften sollen oft zum schnellen, ungeprüften Teilen bewegen."
          )
        }
      ]
    },
    fn2: {
      titel: "FN2 · Erst prüfen",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Alle schicken diese Meldung weiter – aber stimmt sie überhaupt?“",
      wasWaereWenn: [
        {
          label: "Bei bekannten Nachrichten prüfen",
          folge: drei(
            "Du schaust bei Tagesschau, Zeitung oder anderen bekannten Stellen nach. Steht dort nichts, bleib skeptisch.",
            "Ein Abgleich mit seriösen Medien zeigt schnell, ob die Meldung Hand und Fuß hat.",
            "Der Gegencheck bei unabhängigen Redaktionen entlarvt erfundene Meldungen."
          )
        },
        {
          label: "Alles glauben, was oft geteilt wird",
          folge: drei(
            "Auch viele Weiterleitungen machen eine falsche Nachricht nicht wahr.",
            "Häufiges Teilen beweist nicht, dass eine Aussage stimmt.",
            "Hohe Verbreitung entsteht oft durch Aufregung, nicht durch Wahrheit."
          )
        }
      ]
    },
    fn3: {
      titel: "FN3 · Weiterleiten oder richtigstellen?",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„In unserer Gruppe wurde eine falsche Meldung geteilt. Was mache ich?“",
      wasWaereWenn: [
        {
          label: "Nicht weiterleiten oder kurz richtigstellen",
          folge: drei(
            "Du stoppst die falsche Nachricht oder schreibst freundlich dazu, was wirklich stimmt.",
            "Du bremst die Falschmeldung und hilfst der Gruppe mit einem kurzen Hinweis.",
            "Sachliches Richtigstellen oder Nicht-Teilen unterbricht die Verbreitungskette."
          )
        },
        {
          label: "Einfach weiterleiten",
          folge: drei(
            "Die falsche Nachricht macht noch mehr Menschen unnötig Angst.",
            "Weitere Menschen werden verunsichert und leiten die Meldung ebenfalls weiter.",
            "Die Falschmeldung gewinnt unnötig an Reichweite."
          )
        }
      ]
    },

    /* === 12. BETRUG (be1, be2, be3) === */
    be1: {
      titel: "Jemand will einen Code",
      referenz: true,
      themaKey: "betrug",
      koennen: "erkennen",
      regel: "codes",
      fragt: "alex",
      machtVor: "tilda",
      vorhersage: null,
      grade: {
        s5: "klar",
        "s6-2": "ueberlegen",
        "s6-1": "knifflig"
      },
      frage: "„Jemand ruft mich an. Er sagt: Ich bin von der Bank. Er will einen Code von mir. Was soll ich tun?“",
      werkstattAuftrag: drei(
        "Gleich klingelt das Übungs-Handy. Hör zu: Was will der Anrufer? Dann entscheidest du.",
        "Gleich klingelt das Übungs-Handy. Hör dir an, was der Anrufer will, und entscheide dann selbst.",
        "Gleich klingelt das Übungs-Handy. Hör dir an, was der Anrufer verlangt, und entscheide dann selbst."
      ),
      erfolg: {
        auflegen: {
          tun: drei(
            "Du hast aufgelegt. Dein Code ist bei dir geblieben.",
            "Du hast aufgelegt, und dein Code ist bei dir geblieben.",
            "Du hast das Gespräch beendet. Dein Code ist bei dir geblieben."
          ),
          reaktionGeschichte: "„Danke. Der Anrufer klang so freundlich. Jetzt lege ich auch auf.“",
          reaktionSonst: "„So habe ich es auch gemacht. Danach habe ich selbst bei der Bank angerufen.“"
        }
      },
      wasWaereWenn: [
        {
          label: "Auflegen",
          folge: drei(
            "Dein Code bleibt bei dir. Die fremde Person bekommt ihn nicht.",
            "Ohne deinen Code hat die anrufende Person keinen Zugang.",
            "Der Bestätigungs-Code bleibt geschützt; das Gespräch ist beendet."
          )
        },
        {
          label: "Selbst bei der Bank nachfragen",
          folge: drei(
            "Du rufst selbst über die bekannte Nummer deiner Bank an. Dort erfährst du: Die Bank fragt nie am Telefon nach einem Code.",
            "Über die bekannte Nummer deiner Bank klärst du sicher ab, dass der Anruf falsch war.",
            "Durch einen unabhängigen Rückruf über die offizielle Banknummer bestätigst du den Betrugsversuch."
          )
        }
      ]
    },
    be2: {
      titel: "BE2 · Druck und Gewinn erkennen",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Hier steht: ‚Du hast ein Handy gewonnen – bezahle nur noch 2 Euro Versand!‘“",
      wasWaereWenn: [
        {
          label: "Nachricht löschen, nichts zahlen",
          folge: drei(
            "Du zahlst kein Geld und gibst keine Karten-Daten ein. Wo du nicht mitgemacht hast, gibt es keinen Gewinn.",
            "Du vermeidest versteckte Abos oder Datendiebstahl.",
            "Du erkennst das Lockangebot und schützt deine Zahlungsdaten."
          )
        },
        {
          label: "2 Euro überweisen",
          folge: drei(
            "Oft steckt dahinter ein teures Abo oder Datendiebstahl. Prüfe dann sofort dein Konto.",
            "Die kleine Gebühr dient oft dazu, Bankdaten abzugreifen oder ein Abo abzuschließen.",
            "Solche Kleinstbeträge dienen häufig dem Abgreifen von Zahlungsdaten."
          )
        }
      ]
    },
    be3: {
      titel: "BE3 · Selbst nachsehen",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Eine SMS sagt: ‚Konto gesperrt, hier klicken!‘ – wie schaue ich richtig nach?“",
      wasWaereWenn: [
        {
          label: "Selbst über die echte App nachsehen",
          folge: drei(
            "Du öffnest deine echte Bank- oder Shop-App selbst. Dort siehst du sofort, ob wirklich etwas ist.",
            "Über die gewohnte App oder selbst eingetippte Adresse prüfst du unabhängig, ob eine Meldung echt ist.",
            "Der direkte Weg über die bekannte App vermeidet gefälschte Webseiten zuverlässig."
          )
        },
        {
          label: "Auf den SMS-Link tippen",
          folge: drei(
            "Der Link führt oft auf eine nachgemachte Seite. Schließe sie wieder, ohne ein Passwort einzugeben.",
            "Du landest möglicherweise auf einer Phishing-Seite. Verlasse sie ohne Anmeldung.",
            "SMS-Links führen häufig zu Nachahmungen; dort sollten keine Zugangsdaten eingegeben werden."
          )
        }
      ]
    },

    /* === 13. ONLINE-EINKAUFEN (ek1, ek2, ek3) === */
    ek1: {
      titel: "EK1 · Einen Shop prüfen",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Die Schuhe sind hier viel billiger als überall sonst. Ist der Shop echt?“",
      wasWaereWenn: [
        {
          label: "Impressum und Zahlungsarten prüfen",
          folge: drei(
            "Du schaust nach Adresse, Impressum und bekannten Zahlungsarten wie Rechnung. Fehlt das, kaufst du dort lieber nicht.",
            "Ein vollständiges Impressum und sichere Zahlungsarten geben Orientierung vor dem Kauf.",
            "Impressumsprüfung und Zahlungsarten-Check helfen, Fake-Shops früh zu erkennen."
          )
        },
        {
          label: "Ohne Prüfung per Vorkasse zahlen",
          folge: drei(
            "Bei einem Fake-Shop kommt oft keine Ware an und Vorkasse-Geld ist schwer zurückzuholen.",
            "Vorkasse bei unbekannten Shops birgt das Risiko, Geld ohne Gegenleistung zu verlieren.",
            "Vorabüberweisungen an ungeprüfte Anbieter lassen sich meist nicht zurückbuchen."
          )
        }
      ]
    },
    ek2: {
      titel: "EK2 · Sicher bezahlen",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Der Shop bietet Vorkasse und Kauf auf Rechnung an. Was wähle ich?“",
      wasWaereWenn: [
        {
          label: "Kauf auf Rechnung wählen",
          folge: drei(
            "Du zahlst erst, wenn das Paket wirklich bei dir angekommen ist.",
            "Du prüfst erst die gelieferte Ware und bezahlst danach.",
            "Bei Kauf auf Rechnung trägst du kein Vorab-Risiko für fehlende Lieferungen."
          )
        },
        {
          label: "Nur Vorkasse akzeptieren",
          folge: drei(
            "Du zahlst vorher, ohne die Ware gesehen zu haben. Wenn nichts kommt, ist das Geld oft weg.",
            "Bei Vorkasse gehst du in Vorleistung und hast weniger Schutz bei Problemen.",
            "Ohne Käuferschutz ist eine Rückholung bei Nichtlieferung schwierig."
          )
        }
      ]
    },
    ek3: {
      titel: "Sicher bezahlen",
      themaKey: "einkaufen",
      vorhersage: null,
      tildaFrage: "„Ich möchte im Online-Shop bestellen. Wie bezahle ich am sichersten?“",
      wasWaereWenn: [
        {
          label: "Auf Rechnung oder mit Käuferschutz zahlen",
          folge: drei(
            "Du zahlst erst nach Erhalt oder hast Schutz, wenn nichts ankommt.",
            "Mit Rechnung oder Käuferschutz bleibt dein Geld bei Problemen besser geschützt.",
            "Rechnungskauf oder Zahlungsdienste mit Käuferschutz mindern das Risiko bei Lieferproblemen."
          )
        },
        {
          label: "Vorab per Überweisung zahlen",
          folge: drei(
            "Das Geld ist sofort weg. Kommt nichts an, bekommst du es schwer zurück.",
            "Bei Vorkasse ist eine Rückbuchung kaum möglich, wenn keine Ware geliefert wird.",
            "Vorabüberweisungen lassen sich bei Nichtlieferung oder Fake-Shops meist nicht zurückholen."
          )
        }
      ]
    },
    "ek-post1": {
      titel: "Die Bestellung kommt nicht",
      referenz: true,
      themaKey: "einkaufen",
      koennen: "bedienen und selbst handeln",
      regel: "noetig",
      merksatz: "Ware kommt nicht? Dem Shop schreiben.",
      merksatzZusatz: drei(
        "Du darfst beim Shop nachfragen. Das ist normal.",
        "Du darfst beim Shop jederzeit nachfragen.",
        "Eine Nachfrage beim Händler ist jederzeit möglich."
      ),
      fragt: "alex",
      machtVor: "tilda",
      grad: "klar",
      vorhersage: null,
      frage: "„Meine Schuhe kommen nicht. Der Shop hat mir geschrieben. Was antworte ich jetzt?“",
      vorbild: drei(
        "Alex öffnet die E-Mail vom Shop. Dort steht: Die Schuhe kommen später. Tilda kennt das. Sie sagt: Frag nach dem Termin. Und nenn deine Bestell-Nummer. Dann findet der Shop dein Paket.",
        "Alex öffnet die E-Mail vom Shop und liest, dass die Schuhe später kommen. Tilda kennt das. Sie rät ihm, nach dem Termin zu fragen und die Bestellnummer zu nennen.",
        "Alex öffnet die Nachricht des Shops: Die Lieferung verzögert sich. Tilda kennt die Lage und rät ihm, nach dem Liefertermin zu fragen und die Bestellnummer anzugeben."
      ),
      auftrag: drei(
        "Jetzt bist du dran. Öffne die E-Mail vom Shop. Tippe auf: Antworten. Dann wählst du eine Antwort. Oder du schreibst selbst.",
        "Jetzt bist du dran: Öffne die E-Mail vom Shop und tippe auf „Antworten“. Wähle dann eine Antwort aus oder schreibe selbst.",
        "Jetzt bist du an der Reihe: Öffne die Nachricht des Shops und tippe auf „Antworten“. Wähle eine Antwort aus oder formuliere selbst."
      ),
      tipp: drei(
        "Der Shop braucht deine Bestell-Nummer. Mehr braucht er nicht.",
        "Der Shop braucht deine Bestellnummer, mehr nicht.",
        "Der Händler benötigt nur die Bestellnummer."
      ),
      wege: [
        {
          id: "ohne_nummer",
          wertung: "unpassend",
          kopf: "Hier fehlt noch etwas.",
          label: drei(
            "Guten Tag. Meine Schuhe sind immer noch nicht da. Warum dauert das so lange? Viele Grüße, Alex",
            "Guten Tag, meine Schuhe sind immer noch nicht angekommen. Warum dauert das so lange? Viele Grüße, Alex",
            "Guten Tag, meine Bestellung ist bis heute nicht eingetroffen. Weshalb verzögert sich die Lieferung so lange? Mit freundlichen Grüßen, Alex"
          ),
          folgeHandy: "Neue E-Mail vom Shop: „Hallo Alex. Bitte nenn uns deine Bestell-Nummer. Dann suchen wir dein Paket.“",
          grund: drei(
            "In der E-Mail fehlt die Bestell-Nummer. Der Shop hat viele Bestellungen. Ohne Nummer findet er dein Paket nicht. Er fragt erst nach. Das dauert länger.",
            "In der E-Mail fehlt die Bestellnummer. Weil der Shop viele Bestellungen hat, findet er dein Paket ohne Nummer nicht und muss erst nachfragen.",
            "In der Nachricht fehlt die Bestellnummer. Ohne sie kann der Händler die Sendung nicht zuordnen und muss zunächst nachfragen."
          )
        },
        {
          id: "passend",
          wertung: "passend",
          label: drei(
            "Guten Tag. Wann kommen meine Schuhe? Meine Bestell-Nummer ist 4821. Viele Grüße, Alex",
            "Guten Tag, wann werden meine Schuhe geliefert? Meine Bestellnummer ist 4821. Viele Grüße, Alex",
            "Guten Tag, bitte teilen Sie mir den Liefertermin für meine Bestellung 4821 mit. Mit freundlichen Grüßen, Alex"
          ),
          grund: drei(
            "Du fragst nach dem Termin. Du nennst die Bestell-Nummer. So findet der Shop dein Paket. Mehr Daten braucht der Shop nicht.",
            "Du fragst nach dem Termin und nennst die Bestellnummer. So kann der Shop dein Paket finden, und mehr Daten braucht er dafür nicht.",
            "Du fragst nach dem Liefertermin und gibst die Bestellnummer an. Damit kann der Händler die Sendung zuordnen; weitere Daten sind nicht nötig."
          )
        },
        {
          id: "zu_viel",
          wertung: "unpassend",
          kopf: "Das ist mehr als nötig.",
          label: drei(
            "Guten Tag. Wann kommen meine Schuhe? Bestell-Nummer 4821. Mein Geburtstag ist der 3. Mai 1988. Viele Grüße, Alex",
            "Guten Tag, wann kommen meine Schuhe? Bestellnummer 4821, mein Geburtsdatum ist der 3. Mai 1988. Viele Grüße, Alex",
            "Guten Tag, wann wird meine Bestellung 4821 geliefert? Mein Geburtsdatum ist der 3. Mai 1988. Mit freundlichen Grüßen, Alex"
          ),
          grund: drei(
            "Der Shop findet dein Paket mit der Bestell-Nummer. Dein Geburtstag hilft dabei nicht. Der Shop braucht ihn nicht. Du gibst nur nötige Daten weiter.",
            "Der Shop findet dein Paket schon mit der Bestellnummer. Dein Geburtsdatum hilft dabei nicht, deshalb musst du es nicht nennen.",
            "Für die Zuordnung genügt die Bestellnummer. Das Geburtsdatum ist dafür nicht erforderlich und muss nicht angegeben werden."
          )
        }
      ],
      wenig: ["passend", "ohne_nummer"],
      eineSacheFuerHeute: drei(
        "Du bestellst etwas? Dann schreib dir die Bestell-Nummer auf. Oder mach ein Foto davon.",
        "Wenn du etwas bestellst, schreib dir die Bestellnummer auf oder mach ein Foto davon.",
        "Notiere dir bei jeder Bestellung die Bestellnummer oder fotografiere die Bestätigung."
      ),
      werkstattAuftrag: drei(
        "Im Postfach liegt eine E-Mail vom Shop. Lies sie. Dann antwortest du auf deine Art.",
        "Im Postfach liegt eine E-Mail vom Shop. Lies sie und antworte dann auf deine Art.",
        "Im Posteingang liegt eine Nachricht des Shops. Lies sie und antworte auf deine Weise."
      ),
      erfolg: {
        passend: {
          tun: drei(
            "Du hast dem Shop geschrieben. Du hast die Bestell-Nummer genannt. Der Shop sucht jetzt das Paket.",
            "Du hast dem Shop geschrieben und die Bestellnummer genannt. Der Shop sucht jetzt das Paket.",
            "Du hast dem Händler geschrieben und die Bestellnummer angegeben. Die Sendung wird jetzt gesucht."
          ),
          reaktionGeschichte: "„Danke. Jetzt kann der Shop mein Paket suchen.“",
          reaktionSonst: "„So schreibe ich das auch. Kurz und mit Nummer.“"
        }
      },
      wasWaereWenn: [
        {
          label: "Mit Bestell-Nummer antworten",
          folge: drei(
            "Du fragst nach dem Termin und nennst die Bestell-Nummer. So findet der Shop dein Paket sofort.",
            "Du fragst nach dem Termin und nennst die Bestellnummer. So findet der Shop dein Paket schnell.",
            "Mit Liefertermin-Frage und Bestellnummer kann der Händler die Sendung direkt zuordnen."
          )
        },
        {
          label: "Ohne Bestell-Nummer schreiben",
          folge: drei(
            "Ohne Nummer findet der Shop dein Paket nicht. Er fragt erst nach. Das dauert länger.",
            "Ohne Bestellnummer kann der Shop das Paket nicht zuordnen und muss erst nachfragen.",
            "Ohne Bestellnummer bleibt die Anfrage unvollständig und führt zu Rückfragen."
          )
        },
        {
          label: "Mit Geburtsdatum antworten",
          folge: drei(
            "Dein Geburtsdatum hilft dabei nicht. Der Shop braucht es nicht. Du gibst nur nötige Daten weiter.",
            "Dein Geburtsdatum hilft bei der Paket-Suche nicht und muss nicht genannt werden.",
            "Das Geburtsdatum wird für die Lieferung nicht benötigt und sollte sparsam zurückgehalten werden."
          )
        }
      ]
    },
    wa_ruhe: {
      titel: "Ruhe in der Gruppe",
      referenz: true,
      themaKey: "whatsapp",
      koennen: "bedienen",
      form: "Entdeckungsreise: Nichts ist falsch.",
      regel: null,
      merksatz: drei(
        "Ich stelle mein Handy passend für mich ein.",
        "Ich stelle mein Handy so ein, dass es für mich passt.",
        "Ich richte mein Handy so ein, wie es zu meinem Alltag passt."
      ),
      fragt: "tilda",
      machtVor: "alex",
      grad: "klar",
      jetztEinbauen: true,
      echteUeberraschung: true,
      frage: "„Meine Gruppe schreibt heute so viel. Mein Handy brummt die ganze Zeit. Ich will aber in der Gruppe bleiben. Geht das?“",
      vorhersage: drei(
        "Was glaubst du: Geht das?",
        "Was glaubst du: Geht das?",
        "Was vermutest du: Ist das möglich?"
      ),
      vermutungen: ["Ja. Das geht.", "Nein. Ich muss die Gruppe verlassen."],
      antworten: ["Ja. Das geht.", "Nein. Ich muss die Gruppe verlassen.", "Ich probiere es aus."],
      aufloesung: drei(
        "Du hast es gesehen: Die Gruppe ist stumm. Du bist noch dabei.",
        "Du hast es gesehen: Die Gruppe ist stumm, und du bist weiter dabei.",
        "Du hast es gesehen: Die Gruppe ist stummgeschaltet, und du bleibst Mitglied."
      ),
      tipp: drei(
        "Tippe im Übungs-Handy auf die Gruppe. Danach wählst du: Stumm.",
        "Tippe im Übungs-Handy auf die Gruppe, wähle „Stumm“ und dann eine Dauer.",
        "Tippe im Übungs-Handy auf die Gruppe, wähle „Stumm“ und lege eine Dauer fest."
      ),
      vorbild: drei(
        "Alex hat auch eine laute Gruppe. Er tippt auf die Gruppe. Er tippt auf: Stumm. Er wählt: 8 Stunden. Jetzt bleibt sein Handy still. Die Nachrichten kommen trotzdem an.",
        "Alex hat auch eine laute Gruppe. Er tippt auf die Gruppe, wählt „Stumm“ und dann „8 Stunden“. Jetzt bleibt sein Handy still, und die Nachrichten kommen trotzdem an.",
        "Auch Alex hat eine sehr aktive Gruppe. Er tippt auf die Gruppe, wählt „Stumm“ und „8 Stunden“. Sein Handy bleibt still, die Nachrichten kommen weiterhin an."
      ),
      discover: drei(
        "Du bist in einer WhatsApp-Gruppe. Heute schreiben alle sehr viel. Dein Handy macht immer wieder einen Ton. Du willst Ruhe. Du willst aber in der Gruppe bleiben.",
        "In deiner WhatsApp-Gruppe schreiben heute alle sehr viel. Dein Handy klingelt ständig. Du möchtest Ruhe, willst aber in der Gruppe bleiben.",
        "In einer WhatsApp-Gruppe treffen heute im Sekundentakt Nachrichten ein. Du möchtest die Benachrichtigungen stummschalten, ohne die Gruppe zu verlassen."
      ),
      wege: [
        { id: "stumm", label: "Stumm", wertung: "eigene" },
        {
          id: "verlassen",
          label: "Gruppe verlassen",
          wertung: "eigene",
          grund: drei(
            "Du hast die Gruppe verlassen. Jetzt ist Ruhe. Du siehst aber keine neuen Nachrichten mehr. Du willst wieder dabei sein? Dann muss dich jemand neu einladen.",
            "Du hast die Gruppe verlassen. Jetzt ist Ruhe, aber du siehst auch keine neuen Nachrichten mehr. Wenn du wieder dabei sein willst, muss dich jemand neu einladen.",
            "Du hast die Gruppe verlassen. Es ist ruhig, du erhältst jedoch keine neuen Nachrichten mehr. Um wieder teilzunehmen, brauchst du eine neue Einladung."
          )
        }
      ],
      werkstattAuftrag: drei(
        "Die Gruppe ist heute sehr laut. Probier aus: Wie bekommst du Ruhe?",
        "Die Gruppe ist heute sehr laut. Probier aus, wie du Ruhe bekommst.",
        "In der Gruppe ist heute viel los. Probiere aus, wie du Ruhe bekommst."
      ),
      erfolg: {
        stumm: {
          tun: drei(
            "Du hast die Gruppe stumm gestellt. Du bist noch in der Gruppe. Dein Handy bleibt still.",
            "Du hast die Gruppe stumm gestellt. Du bist weiter dabei, und dein Handy bleibt still.",
            "Du hast die Gruppe stummgeschaltet. Du bleibst Mitglied, und dein Handy bleibt still."
          ),
          reaktionGeschichte: "„Danke. So bleibe ich dabei. Und ich habe Ruhe.“",
          reaktionSonst: "„So mache ich es auch. Meine Kegel-Gruppe schreibt sehr viel.“"
        }
      }
    },

    /* === POSTFACH-SZENARIEN (termin, einladung, service, paket, sicherheit, anhang) === */
    termin: {
      titel: "Postfach · Termin absagen & neu vereinbaren",
      vorhersage: null,
      antworten: ["Nur ein Wort", "Grund kurz nennen & neuen Termin vorschlagen", "Ich probiere es aus"],
      tildaFrage: "„Ich schaffe den Arzt- oder Beratungs-Termin nicht. Wie schreibe ich das freundlich?“",
      wasWaereWenn: [
        {
          label: "Rechtzeitig schreiben & Ersatztermin nennen",
          folge: drei(
            "Die andere Person weiß Bescheid und kann gleich einen neuen Termin bestätigen.",
            "Durch frühe Absage und einen konkreten Vorschlag spart ihr Rückfragen.",
            "Eine rechtzeitige Absage mit Alternativtermin ermöglicht eine reibungslose Neuplanung."
          )
        },
        {
          label: "Gar nicht melden",
          folge: drei(
            "Die andere Person wartet umsonst, und ein neuer Termin dauert oft länger.",
            "Unentschuldigtes Fehlen sorgt für Ärger oder Ausfallgebühren.",
            "Ohne Absage entsteht unnötiger Aufwand auf beiden Seiten."
          )
        }
      ]
    },
    einladung: {
      titel: "Postfach · Einladung beantworten",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Ich habe eine Einladung zum Treffen bekommen. Schreibe ich allen oder nur einer Person?“",
      wasWaereWenn: [
        {
          label: "In Ruhe Datum & Empfänger prüfen",
          folge: drei(
            "Du antwortest nur den Menschen, die deine Antwort brauchen, und nennst klar Zu- oder Absage.",
            "Du prüfst Datum, Uhrzeit und Empfängerfeld, bevor du antwortest.",
            "Durch Prüfung von Termin und Empfängerfeld vermeidest du unnötige Rundmails."
          )
        },
        {
          label: "Sofort auf „Allen antworten“ tippen",
          folge: drei(
            "Alle Personen in der Liste bekommen deine private Nachricht – auch wenn sie sie gar nicht brauchen.",
            "Alle Empfänger*innen lesen mit, obwohl nur die einladende Person die Info braucht.",
            "Private Rückfragen gehen ungewollt an den gesamten Verteiler."
          )
        }
      ]
    },
    service: {
      titel: "Postfach · Nachfrage an Kundenservice",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Ich habe eine Frage zu meiner Rechnung. Was schreibe ich in die E-Mail?“",
      wasWaereWenn: [
        {
          label: "Kundennummer nennen, Passwort & PIN behalten",
          folge: drei(
            "Der Service findet deinen Fall schnell. Deine geheimen Passwörter bleiben bei dir.",
            "Mit der Kundennummer kann der Service helfen; Passwort und PIN bleiben privat.",
            "Die Kundennummer genügt zur Zuordnung; Zugangsdaten werden nie per E-Mail versendet."
          )
        },
        {
          label: "Passwort oder PIN mitschicken",
          folge: drei(
            "Echter Kundenservice braucht dein Passwort nicht. Schicke geheime Codes nie per E-Mail.",
            "Passwörter oder PINs gehören nicht in E-Mails – ein seriöser Service fragt nie danach.",
            "Die Weitergabe von Passwörtern per E-Mail gefährdet dein Konto."
          )
        }
      ]
    },
    paket: {
      titel: "Postfach · Verdächtige Paketnachricht",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Hier steht, ein Paket wartet auf Zoll-Geld. Ich habe aber nichts bestellt.“",
      wasWaereWenn: [
        {
          label: "Absender prüfen & direkt beim Paketdienst nachsehen",
          folge: drei(
            "Du öffnest die echte Paket-App oder Seite selbst. So fällst du nicht auf falsche Links herein.",
            "Du prüfst die Sendungsnummer direkt beim echten Paketdienst statt über den Mail-Link.",
            "Die direkte Prüfung über die offizielle Sendungsverfolgung schützt vor Phishing."
          )
        },
        {
          label: "Auf den Link klicken und Karte eingeben",
          folge: drei(
            "Oft wollen Betrüger so deine Karten-Daten stehlen. Schließe die Seite und gib nichts ein.",
            "Solche Seiten fragen oft nach Kreditkartendaten. Brich ab und gib nichts ein.",
            "Gefälschte Zoll- oder Liefergebühren zielen häufig auf Zahlungsdaten."
          )
        }
      ]
    },
    sicherheit: {
      titel: "Postfach · Gefälschte Sicherheitswarnung",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Die E-Mail droht: ‚Konto in 24 Stunden gesperrt!‘ – soll ich schnell klicken?“",
      wasWaereWenn: [
        {
          label: "Stopp! Selbst über die echte Bank-App prüfen",
          folge: drei(
            "Du lässt dich nicht hetzen und schaust selbst in deiner echten Bank-App nach.",
            "Du ignorierst den Zeitdruck und prüfst dein Konto direkt über die offizielle App.",
            "Zeitdruck ist ein typisches Warnsignal; die direkte Prüfung in der App schafft Klarheit."
          )
        },
        {
          label: "Dem Link in der Warn-Mail folgen",
          folge: drei(
            "Dort wartet oft eine nachgemachte Bank-Seite. Gib dort keine PIN oder TAN ein.",
            "Der Link führt häufig zu einer Phishing-Seite. Verlasse sie ohne Eingabe.",
            "Über gefälschte Sicherheitswarnungen werden häufig Zugangsdaten abgegriffen."
          )
        }
      ]
    },
    anhang: {
      titel: "Postfach · Unerwarteten Anhang prüfen",
      vorhersage: null,
      antworten: stdAntworten,
      tildaFrage: "„Da hängt eine Datei ‚Rechnung.exe‘ dran – aber ich kenne den Absender nicht.“",
      wasWaereWenn: [
        {
          label: "Anhang nicht öffnen & E-Mail löschen",
          folge: drei(
            "Programme mit .exe können Schadsoftware sein. Wenn du nicht öffnest, passiert auf deinem Gerät nichts.",
            "Du öffnest den gefährlichen Anhang nicht und schützt dein Gerät vor Schadprogrammen.",
            "Ausführbare Dateien aus unbekannten Quellen nicht zu öffnen verhindert eine Infektion."
          )
        },
        {
          label: "Anhang aus Neugier doppelt anklicken",
          folge: drei(
            "Damit startest du vielleicht ein schädliches Programm. Öffne unbekannte Anhänge lieber nie einfach so.",
            "Ein Doppelklick auf .exe-Dateien kann Schadsoftware auf dem Gerät ausführen.",
            "Das Ausführen unbekannter Programmdateien birgt ein hohes Risiko für Schadsoftware."
          )
        }
      ]
    }
  };

  /* Reserve-Vorhersagen aus F2 (jetztEinbauen: false – fuer spaetere Wellen) */
  window.LERNKREIS_VORHERSAGE_RESERVE = {
    "ds2": {
      "jetztEinbauen": false,
      "frage": {
        "leicht": "Du teilst ein Foto. Du wählst: Nur Freunde. Was glaubst du: Bleibt das Foto bei deinen Freunden?",
        "einfach": "Du teilst ein Foto und wählst „Nur Freunde“. Was glaubst du: Bleibt das Foto bei deinen Freunden?",
        "standard": "Du teilst ein Foto mit der Einstellung „Nur Freunde“. Was vermutest du: Bleibt es in diesem Kreis?"
      },
      "vermutungen": [
        "Ja. Nur Freunde sehen es.",
        "Nein. Ein Freund kann es weitergeben."
      ],
      "aufloesung": {
        "leicht": "Du hast es gesehen: Ein Freund hat das Foto gespeichert. Er kann es weitergeben. In deinem Profil sehen Fremde das Foto aber nicht.",
        "einfach": "Du hast es gesehen: Ein Freund hat das Foto gespeichert und kann es weitergeben. In deinem Profil sehen es Fremde aber nicht.",
        "standard": "Du hast es gesehen: Ein Kontakt hat das Foto gespeichert und kann es weitergeben. In deinem Profil bleibt es für Fremde unsichtbar."
      }
    },
    "fb1": {
      "jetztEinbauen": false,
      "frage": {
        "leicht": "Dein Profil steht auf: Freunde. Eine fremde Person sucht deinen Namen. Was glaubst du: Was sieht sie?",
        "einfach": "Dein Profil steht auf „Freunde“, und eine fremde Person sucht deinen Namen. Was glaubst du: Was sieht sie?",
        "standard": "Dein Profil ist auf „Freunde“ eingestellt. Eine fremde Person sucht nach deinem Namen. Was vermutest du: Was sieht sie?"
      },
      "vermutungen": [
        "Nichts von mir.",
        "Meinen Namen und mein Profil-Bild."
      ],
      "aufloesung": {
        "leicht": "Du hast es gesehen: Dein Name und dein Profil-Bild sind für alle da. Deine Beiträge sieht die fremde Person nicht.",
        "einfach": "Du hast es gesehen: Dein Name und dein Profilbild sind für alle sichtbar. Deine Beiträge sieht die fremde Person nicht.",
        "standard": "Du hast es gesehen: Name und Profilbild sind immer öffentlich. Deine Beiträge bleiben für die fremde Person unsichtbar."
      }
    },
    "sc1": {
      "jetztEinbauen": false,
      "frage": {
        "leicht": "Du schickst ein Bild bei Snapchat. Nach 10 Sekunden siehst du es nicht mehr. Was glaubst du: Hat die andere Person das Bild noch?",
        "einfach": "Du schickst ein Bild bei Snapchat, und nach 10 Sekunden siehst du es nicht mehr. Was glaubst du: Hat die andere Person das Bild noch?",
        "standard": "Du verschickst ein Bild über Snapchat; nach 10 Sekunden ist es für dich nicht mehr sichtbar. Was vermutest du: Besitzt die andere Person es noch?"
      },
      "vermutungen": [
        "Nein. Das Bild ist weg.",
        "Vielleicht. Sie kann es gespeichert haben."
      ],
      "aufloesung": {
        "leicht": "Du hast es gesehen: Die andere Person hat ein Bildschirm-Foto gemacht. Sie hat dein Bild noch. Snapchat meldet das oft. Aber nicht immer.",
        "einfach": "Du hast es gesehen: Die andere Person hat ein Bildschirmfoto gemacht und hat dein Bild noch. Snapchat meldet das oft, aber nicht immer.",
        "standard": "Du hast es gesehen: Die andere Person hat einen Screenshot gemacht und besitzt dein Bild weiterhin. Snapchat meldet das häufig, jedoch nicht in jedem Fall."
      },
      "hinweis": "Das Wort für den Screenshot so wählen wie in der Lektion des Themas."
    },
    "sc2": {
      "jetztEinbauen": false,
      "fachpruefung": "Vor dem Einbau an einer aktuellen Quelle prüfen, wie genau die Karte den Ort zeigt (§13).",
      "frage": {
        "leicht": "Du öffnest Snapchat. Dein Standort ist an. Was glaubst du: Was sehen deine Freunde auf der Karte?",
        "einfach": "Du öffnest Snapchat, und dein Standort ist an. Was glaubst du: Was sehen deine Freunde auf der Karte?",
        "standard": "Du öffnest Snapchat mit eingeschaltetem Standort. Was vermutest du: Was sehen deine Freunde auf der Karte?"
      },
      "vermutungen": [
        "Nur meine Stadt.",
        "Ziemlich genau meinen Ort."
      ],
      "aufloesung": {
        "leicht": "Du hast es gesehen: Die Karte zeigt ziemlich genau deinen Ort. Deine Freunde sehen: Dort bist du gerade.",
        "einfach": "Du hast es gesehen: Die Karte zeigt ziemlich genau, wo du gerade bist, und deine Freunde können das sehen.",
        "standard": "Du hast es gesehen: Die Karte zeigt deinen Aufenthaltsort recht genau an, und deine Freunde können ihn sehen."
      }
    },
    "tt1": {
      "jetztEinbauen": false,
      "frage": {
        "leicht": "Du siehst ein Hunde-Video lange an. Was glaubst du: Was zeigt dir TikTok danach?",
        "einfach": "Du siehst dir ein Hunde-Video lange an. Was glaubst du: Was zeigt dir TikTok danach?",
        "standard": "Du siehst dir ein Hunde-Video besonders lange an. Was vermutest du: Was zeigt dir TikTok danach?"
      },
      "vermutungen": [
        "Mehr Hunde-Videos.",
        "Ganz andere Videos."
      ],
      "aufloesung": {
        "leicht": "Du hast es gesehen: TikTok zeigt dir mehr Hunde-Videos. TikTok merkt sich: Das siehst du lange an.",
        "einfach": "Du hast es gesehen: TikTok zeigt dir mehr Hunde-Videos, weil es sich merkt, was du lange ansiehst.",
        "standard": "Du hast es gesehen: TikTok zeigt dir weitere Hunde-Videos, weil es auswertet, was du lange ansiehst."
      }
    },
    "ki2": {
      "jetztEinbauen": false,
      "frage": {
        "leicht": "Du fragst eine KI: Wann hat das Schwimmbad heute auf? Die KI antwortet sofort. Was glaubst du: Stimmt die Antwort?",
        "einfach": "Du fragst eine KI, wann das Schwimmbad heute geöffnet hat, und sie antwortet sofort. Was glaubst du: Stimmt die Antwort?",
        "standard": "Du fragst eine KI nach den heutigen Öffnungszeiten des Schwimmbads und erhältst sofort eine Antwort. Was vermutest du: Stimmt sie?"
      },
      "vermutungen": [
        "Ja. Die KI weiß das.",
        "Vielleicht nicht."
      ],
      "aufloesung": {
        "leicht": "Du hast es gesehen: Die KI sagt 20 Uhr. Auf der Seite vom Schwimmbad steht 18 Uhr. Eine KI kann sich irren. Sie klingt trotzdem sicher.",
        "einfach": "Du hast es gesehen: Die KI nennt 20 Uhr, aber auf der Seite des Schwimmbads steht 18 Uhr. Eine KI kann sich irren, auch wenn sie sicher klingt.",
        "standard": "Du hast es gesehen: Die KI nennt 20 Uhr, die Website des Schwimmbads dagegen 18 Uhr. Eine KI kann sich irren, auch wenn ihre Antwort überzeugend klingt."
      }
    },
    "fn1": {
      "jetztEinbauen": false,
      "frage": {
        "leicht": "Im Chat ist ein Foto mit viel Schnee. Darunter steht: Heute in unserer Stadt. Was glaubst du: Ist das Foto von heute?",
        "einfach": "Im Chat ist ein Foto mit viel Schnee, und darunter steht: „Heute in unserer Stadt“. Was glaubst du: Ist das Foto von heute?",
        "standard": "Im Chat erscheint ein Foto mit viel Schnee und der Zeile „Heute in unserer Stadt“. Was vermutest du: Stammt das Foto von heute?"
      },
      "vermutungen": [
        "Ja. Es steht ja dabei.",
        "Vielleicht nicht."
      ],
      "aufloesung": {
        "leicht": "Du hast es gesehen: Das Foto ist 5 Jahre alt. Es ist aus einer anderen Stadt. Ein Text unter einem Foto beweist nichts.",
        "einfach": "Du hast es gesehen: Das Foto ist 5 Jahre alt und stammt aus einer anderen Stadt. Ein Text unter einem Foto beweist nichts.",
        "standard": "Du hast es gesehen: Das Foto ist fünf Jahre alt und stammt aus einer anderen Stadt. Eine Bildunterschrift ist kein Beleg."
      }
    },
    "einladung": {
      "jetztEinbauen": false,
      "frage": {
        "leicht": "Tilda lädt 12 Personen per E-Mail ein. Du tippst auf: Allen antworten. Was glaubst du: Wer bekommt deine Antwort?",
        "einfach": "Tilda lädt 12 Personen per E-Mail ein, und du tippst auf „Allen antworten“. Was glaubst du: Wer bekommt deine Antwort?",
        "standard": "Tilda lädt 12 Personen per E-Mail ein. Du wählst „Allen antworten“. Was vermutest du: Wer erhält deine Antwort?"
      },
      "vermutungen": [
        "Nur Tilda.",
        "Alle 12 Personen."
      ],
      "aufloesung": {
        "leicht": "Du hast es gesehen: Alle 12 Personen haben deine Antwort bekommen. Du tippst auf: Antworten? Dann bekommt nur Tilda die E-Mail.",
        "einfach": "Du hast es gesehen: Alle 12 Personen haben deine Antwort bekommen. Wenn du auf „Antworten“ tippst, bekommt nur Tilda die E-Mail.",
        "standard": "Du hast es gesehen: Alle 12 Personen haben deine Antwort erhalten. Mit „Antworten“ geht die E-Mail nur an Tilda."
      }
    }
  };
})();
