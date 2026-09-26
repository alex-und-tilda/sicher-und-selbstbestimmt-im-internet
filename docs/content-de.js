/* ============================================================
   Sprachfassungen (Einfache Sprache + Alltagssprache)
   Der Basistext in topics.js ist bereits Leichte Sprache.
   Hier kommen je Lektion die Fassungen "einfach" und "standard" dazu.
   Verknüpfung am Ende der Datei: applyContentVersions().

   Aufbau:  CONTENT_VERSIONS[themaId][lektionTitel] = { einfach:{...}, standard:{...} }
   Felder pro Fassung (optional): text[], bullets[], examples[], warning, success, remember
   - einfach: kurze, klare Sätze (etwa B1), Bilder optional
   - standard: Fließtext, keine Piktogramme, keine Aufzählungen (bullets: [])
   ============================================================ */

const CONTENT_VERSIONS = {
  datenschutz: {
    "Doppelt sicher": {
      einfach: {
        text: [
          { text: "Viele Konten kannst du doppelt sichern. Das nennt man Zwei-Faktor-Anmeldung." },
          { text: "Du gibst dein Passwort ein. Danach schickt die App eine Zahl auf dein Handy, die du auch eingibst." },
          { text: "Wer nur dein Passwort kennt, kommt damit allein nicht hinein. Ihm fehlt die Zahl von deinem Handy." },
          { text: "Deshalb ist diese Zahl geheim. Gib sie niemandem weiter, auch nicht am Telefon. Kein echter Anbieter fragt dich danach. Eine vertraute Person kann dir beim Einrichten helfen." }
        ],
        success: "Passwort plus Handy-Zahl: So ist dein Konto doppelt geschützt."
      },
      standard: {
        text: [{ text: "Die Zwei-Faktor-Anmeldung sichert dein Konto zusätzlich zum Passwort ab: Nach der Passwort-Eingabe bestätigst du die Anmeldung mit einem Code auf deinem Handy. Wer nur dein Passwort erbeutet hat, scheitert damit am zweiten Schritt. Einen vollständigen Schutz bedeutet das aber nicht: Betrüger rufen an und fragen genau diesen Code ab und drängen dich dabei zur Eile. Kein seriöser Anbieter tut das – gib den Code deshalb nie weiter. Moderne Konten bieten zusätzlich Passkeys an – eine Anmeldung ganz ohne Passwort, zum Beispiel per Fingerabdruck. Das BSI empfiehlt beides." }],
        success: "Zwei-Faktor oder Passkey: deutlich mehr Schutz als ein Passwort allein."
      }
    },
    "Ohne Passwort anmelden": {
      einfach: { examples: ["Du meldest dich bei deinem Konto mit deinem Fingerabdruck an.", "Du meldest dich beim Online-Shop mit deinem Gesicht an."],
        text: [
          { text: "Bei manchen Konten brauchst du kein Passwort mehr. Diese Anmeldung heißt Passkey." },
          { text: "Du legst den Finger auf dein Handy oder du zeigst dein Gesicht. Damit bist du angemeldet." },
          { text: "Dein Finger öffnet dabei nur dein Handy. Dein Fingerabdruck wird nicht an die Internet-Seite geschickt." },
          { text: "Ein Passkey ist besonders sicher, weil es kein Passwort gibt, das jemand erraten oder dir abfragen kann. Jeder Passkey gehört außerdem zu genau einem Konto. Eine vertraute Person kann dir beim Einrichten helfen." }
        ],
        success: "Ohne Passwort anmelden: Das ist bequem und sicher zugleich."
      },
      standard: { examples: ["Du meldest dich bei deinem Konto per Fingerabdruck an.", "Du meldest dich im Onlineshop per Gesichtserkennung an."],
        text: [{ text: "Ein Passkey ist ein Schlüsselpaar: Die Internet-Seite bekommt den öffentlichen Teil, der geheime Teil bleibt geschützt bei dir. Fingerabdruck, Gesichtserkennung oder Geräte-PIN geben diesen geheimen Teil nur frei – übertragen wird er nicht, und deine biometrischen Daten verlassen das Gerät ohnehin nie. Das ist etwas anderes als das bloße Entsperren einer App: Ein Passkey gehört immer zu genau einem Konto bei genau einer Seite. Gegen Phishing schützt das gut, weil ein Passkey auf einer gefälschten Seite schlicht nicht funktioniert und es kein Geheimnis gibt, das man dir abfragen könnte. Viele Anbieter sichern Passkeys zusätzlich verschlüsselt in deinem Konto, damit sie auch auf deinen anderen Geräten verfügbar sind; Apple beschreibt diese Synchronisierung ausdrücklich. Apple, Google und Microsoft unterstützen Passkeys, das BSI empfiehlt sie." }],
        success: "Ein Passkey funktioniert nur auf der echten Seite. Eine gefälschte Seite geht leer aus."
      }
    },
    "Start": {
      einfach: {
        text: [
          { text: "In diesem Thema geht es um Datenschutz im Internet." },
          { text: "Du lernst, welche Daten privat sind und warum du sie schützen solltest." },
          { text: "Außerdem erfährst du, was du tun kannst, wenn jemand nach deinen Daten fragt." },
          { text: "Wenn du unsicher bist, kannst du jederzeit den Hilfe-Knopf benutzen." }
        ]
      },
      standard: {
        text: [
          { text: "In diesem Kapitel geht es um Datenschutz im Alltag. Du erfährst, welche Informationen als privat gelten, warum sie schützenswert sind und wie du im Internet bewusst mit ihnen umgehst. Wenn du unsicher bist, steht dir jederzeit der Hilfe-Knopf zur Verfügung." }
        ]
      }
    },

    "Was sind private Daten?": {
      einfach: {
        text: [
          { text: "Private Daten sind Informationen, die nur dich etwas angehen – zum Beispiel dein Name, deine Adresse oder dein Passwort." },
          { text: "Solche Daten solltest du nicht an Fremde weitergeben, weil sie sonst missbraucht werden können." }
        ],
        bullets: ["dein Name", "deine Adresse", "deine Telefon-Nummer", "dein Geburtstag", "deine Fotos", "dein Passwort"],
        remember: "Ich gebe meine privaten Daten nur an Menschen weiter, denen ich vertraue."
      },
      standard: {
        text: [
          { text: "Als private oder personenbezogene Daten gelten alle Informationen, die sich einer bestimmten Person zuordnen lassen: zum Beispiel Name, Adresse, Telefonnummer, Geburtsdatum, Fotos oder Passwörter. Weil sich daraus Rückschlüsse auf eine Person ziehen lassen, sind sie besonders schützenswert und sollten nur bewusst und sparsam weitergegeben werden." }
        ],
        bullets: [],
        remember: "Personenbezogene Daten sollten bewusst und sparsam preisgegeben werden."
      }
    },

    "Besonders wichtige Daten": {
      einfach: {
        text: [
          { text: "Einige deiner Daten sind besonders wichtig und schützenswert." },
          { text: "Mit ihnen können Fremde dir schaden oder in deinem Namen handeln, deshalb sind sie heikel." },
          { text: "Solche Daten gibst du nur weiter, wenn es wirklich nötig ist und du dem Empfänger vertraust." }
        ],
        bullets: ["Passwörter und PINs", "deine Adresse", "deine Telefon-Nummer", "deine Bank-Daten", "deine Ausweis-Daten"],
        remember: "Besonders wichtige Daten gebe ich nicht weiter."
      },
      standard: {
        text: [
          { text: "Einige Daten sind besonders sensibel, weil Fremde damit großen Schaden anrichten können – etwa Passwörter, PINs, Bankverbindungen oder Ausweisdaten. Solche Informationen solltest du nur dort eingeben, wo es wirklich nötig ist und wo du dem Anbieter vertraust." }
        ],
        bullets: [],
        remember: "Besonders sensible Daten gebe ich nur dort preis, wo es nötig ist und ich dem Anbieter vertraue."
      }
    },

    "Passwort bleibt geheim": {
      einfach: {
        text: [
          { text: "Dein Passwort schützt dein Konto, ähnlich wie ein Schlüssel deine Wohnung schützt." },
          { text: "Nur du solltest dein Passwort kennen." },
          { text: "Gib es deshalb niemals an andere weiter, auch nicht an Freunde oder Bekannte." }
        ],
        warning: "Gib dein Passwort niemals an andere weiter – auch nicht an Freunde."
      },
      standard: {
        text: [
          { text: "Ein Passwort schützt dein Konto wie ein Schlüssel deine Wohnung. Es sorgt dafür, dass nur du Zugang hast. Deshalb solltest du es niemandem mitteilen." }
        ],
        warning: "Seriöse Firmen fragen niemals nach deinem Passwort. Wer danach fragt, will dich täuschen."
      }
    },

    "Gutes Passwort": {
      einfach: {
        text: [
          { text: "Ein gutes Passwort ist lang und lässt sich nicht leicht erraten." },
          { text: "Verwende nicht deinen Namen oder dein Geburtsdatum, weil Fremde das schnell herausfinden können." },
          { text: "Am sichersten ist eine Mischung aus Buchstaben, Zahlen und Sonderzeichen." }
        ],
        bullets: ["nicht dein Name", "nicht dein Geburtstag", "mindestens 10 Zeichen", "Buchstaben und Zahlen mischen", "Sonderzeichen wie ! oder ? nutzen"]
      },
      standard: {
        text: [
          { text: "Ein sicheres Passwort ist möglichst lang und lässt sich nicht leicht erraten. Vermeide naheliegende Angaben wie deinen Namen oder dein Geburtsdatum. Eine Kombination aus Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen macht es deutlich sicherer. Für jedes Konto solltest du ein eigenes Passwort verwenden." }
        ],
        bullets: []
      }
    },

    "Adresse eingeben": {
      einfach: {
        text: [
          { text: "Manchmal fragt eine App oder Webseite nach deiner Adresse." },
          { text: "Wenn du nicht weißt, wofür sie gebraucht wird, musst du sie nicht eintragen." },
          { text: "Im Zweifel fragst du eine Person, der du vertraust, bevor du etwas angibst." }
        ],
        examples: ["Eine Spiele-App fragt nach deiner Adresse.", "Ein Gewinnspiel fragt nach deinem Geburtstag."]
      },
      standard: {
        text: [
          { text: "Nicht jede App oder Webseite braucht deine Adresse. Wenn der Grund für die Abfrage unklar ist, musst du nichts eintragen. Überlege, ob die Angabe für den Dienst wirklich notwendig ist – im Zweifel lässt du das Feld frei oder fragst jemanden, dem du vertraust." }
        ],
        examples: ["Eine Spiele-App verlangt vor dem ersten Start deine vollständige Adresse.", "Ein Gewinnspiel fragt nach deinem Geburtsdatum, obwohl es für die Teilnahme gar nicht nötig ist."]
      }
    },

    "Telefon-Nummer und Geburtstag": {
      einfach: {
        text: [
          { text: "Auch deine Telefon-Nummer und dein Geburtstag gehören zu deinen privaten Daten." },
          { text: "Viele Formulare fragen danach, obwohl sie diese Angaben gar nicht brauchen." },
          { text: "Gib sie deshalb nur dann ein, wenn es einen guten Grund dafür gibt." }
        ],
        examples: ["Ein Formular fragt nach deiner Telefon-Nummer.", "Ein Gewinnspiel fragt nach deinem Geburtstag."]
      },
      standard: {
        text: [
          { text: "Auch Telefonnummer und Geburtsdatum gehören zu deinen privaten Daten. Viele Formulare und Gewinnspiele fragen danach, obwohl sie diese Angaben gar nicht benötigen. Gib sie nur dann ein, wenn es einen nachvollziehbaren Grund gibt." }
        ],
        examples: ["Ein Online-Formular macht die Telefonnummer zum Pflichtfeld, obwohl du nur einen Newsletter bestellen willst.", "Ein Gewinnspiel will dein Geburtsdatum wissen – angeblich nur, um dir zu gratulieren."]
      }
    },

    "Fotos prüfen": {
      einfach: {
        text: [
          { text: "Bevor du ein Foto verschickst, schau es dir genau an." },
          { text: "Manchmal sieht man im Hintergrund private Dinge, zum Beispiel deine Wohnung oder einen Brief mit deiner Adresse." },
          { text: "Wenn dir etwas unsicher vorkommt, schickst du das Foto lieber nicht." }
        ],
        examples: ["Auf dem Foto liegt ein Brief.", "Im Hintergrund sieht man eine andere Person.", "Auf dem Foto sieht man deine Wohnung."]
      },
      standard: {
        text: [
          { text: "Bevor du ein Foto verschickst oder veröffentlichst, lohnt sich ein prüfender Blick. Oft sind im Hintergrund private Dinge zu sehen – ein Brief mit Adresse, dein Zuhause oder andere Personen, die nicht gefragt wurden. Im Zweifel schickst du das Bild lieber nicht." }
        ],
        examples: ["Auf dem Tisch im Bild liegt ein Brief, auf dem dein Name und deine Adresse lesbar sind.", "Im Hintergrund ist eine andere Person zu sehen, die nicht gefragt wurde.", "Das Foto zeigt deine Wohnung so deutlich, dass Fremde sie wiedererkennen könnten."]
      }
    },

    "Fremde Links und Nachrichten": {
      einfach: { warning: "Tippe nicht auf Links von Fremden oder aus komischen Nachrichten. Solche Links können gefährlich sein und deine Daten stehlen. Frag im Zweifel eine Person, der du vertraust.",
        text: [
          { text: "Manche Nachrichten wollen an deine privaten Daten kommen." },
          { text: "Oft enthalten sie einen Link, der zu einer gefälschten Seite führt." },
          { text: "Tippe solche Links nicht an und gib dort keine Daten ein, besonders wenn du den Absender nicht kennst." }
        ],
        examples: ["„Klick schnell auf diesen Link.“", "„Gib deine Adresse ein.“", "„Du hast etwas gewonnen.“"]
      },
      standard: { warning: "Öffne keine Links aus unerwarteten oder unbekannten Nachrichten – sie können zu gefälschten Seiten führen, die deine Daten abgreifen. Frag im Zweifel eine Person, der du vertraust.",
        text: [
          { text: "Manche Nachrichten zielen darauf ab, an deine Daten zu kommen. Häufig enthalten sie einen Link, der auf eine gefälschte Seite führt. Öffne Links von unbekannten Absendern nicht und gib dort keine persönlichen Daten ein. Im Zweifel löschst du die Nachricht." }
        ],
        examples: ["„Schnell auf diesen Link klicken – das Angebot gilt nur noch heute!“", "„Bitte gib zur Bestätigung deine Adresse ein.“", "„Herzlichen Glückwunsch, du hast gewonnen!“"]
      }
    },

    "Stress erkennen": {
      einfach: {
        text: [
          { text: "Manche Nachrichten drängen dich absichtlich." },
          { text: "Sie wollen, dass du sofort handelst, damit du nicht in Ruhe nachdenken kannst." },
          { text: "Genau dieser Stress ist ein Warnzeichen für Betrug." }
        ],
        examples: ["„Klick sofort.“", "„Sonst ist dein Konto weg.“", "„Sag es niemandem.“"]
      },
      standard: {
        text: [
          { text: "Ein typisches Warnzeichen für Betrug ist Eile. Nachrichten, die sofortiges Handeln verlangen oder drohen, sollen verhindern, dass du in Ruhe nachdenkst. Lass dich davon nicht treiben: Seriöse Stellen setzen dich nicht so unter Stress." }
        ],
        examples: ["„Klick sofort, sonst verfällt dein Zugang.“", "„Wenn du nicht reagierst, wird dein Konto gelöscht.“", "„Erzähl niemandem davon.“"]
      }
    },

    "Was kann ich tun?": {
      einfach: {
        text: [
          { text: "Wenn dir eine Nachricht komisch vorkommt oder Stress macht, hilft dir ein fester Plan." },
          { text: "Du gehst dann ruhig einen Schritt nach dem anderen durch." },
          { text: "So triffst du keine schnelle Entscheidung, die du später bereust." }
        ],
        bullets: ["Ich antworte nicht sofort.", "Ich tippe nicht auf Links.", "Ich gebe keine privaten Daten ein.", "Ich mache eine Pause.", "Ich frage eine Person, der ich vertraue."]
      },
      standard: {
        text: [
          { text: "Wenn dir eine Nachricht merkwürdig vorkommt oder dir Stress macht, hilft ein fester Plan: Reagiere nicht sofort, tippe auf keine Links und gib keine Daten ein. Mach eine Pause und hol dir bei Bedarf Rat von einer Person, der du vertraust. So vermeidest du übereilte Entscheidungen." }
        ],
        bullets: []
      }
    },

    "Das merke ich mir": {
      einfach: {
        text: [
          { text: "Zum Schluss findest du hier die wichtigsten Regeln aus diesem Thema noch einmal zusammengefasst." }
        ],
        bullets: ["Private Daten gehören mir.", "Mein Passwort bleibt geheim.", "Ich nutze ein langes, gutes Passwort.", "Ich gebe meine Adresse nicht einfach weiter.", "Ich prüfe Fotos vor dem Senden.", "Ich öffne fremde Links nicht sofort.", "Bei Stress mache ich langsam.", "Ich darf mir Hilfe holen."]
      },
      standard: {
        text: [
          { text: "Zum Abschluss die wichtigsten Punkte dieses Themas im Überblick: Deine privaten Daten gehören dir. Halte dein Passwort geheim, wähle es lang und sicher und gib persönliche Angaben wie Adresse oder Telefonnummer nur dann preis, wenn es nötig ist. Prüfe Fotos vor dem Versenden, öffne unbekannte Links nicht vorschnell und lass dich von Stress nicht treiben. Und denk daran: Du darfst dir jederzeit Unterstützung holen." }
        ],
        bullets: []
      }
    }
  },

  whatsapp: {
    "Start": {
      einfach: {
        text: [
          { text: "In diesem Thema geht es um WhatsApp." },
          { text: "Du lernst, wie du Nachrichten sicher nutzt und Betrug erkennst." },
          { text: "Wenn du unsicher bist, kannst du jederzeit den Hilfe-Knopf benutzen." }
        ]
      },
      standard: {
        text: [
          { text: "In diesem Kapitel geht es um den sicheren Umgang mit WhatsApp. Du erfährst, wie du fremde Nachrichten einschätzt, Betrugsversuche erkennst und mit Codes, Gruppen und Fotos vorsichtig umgehst. Wenn du unsicher bist, steht dir jederzeit der Hilfe-Knopf zur Verfügung." }
        ]
      }
    },

    "WhatsApp nutzen": {
      einfach: {
        text: [
          { text: "Mit WhatsApp kannst du Nachrichten, Bilder und Sprach-Nachrichten verschicken und auch in Gruppen schreiben." },
          { text: "Du entscheidest dabei selbst, mit wem du schreibst und wem du antwortest." }
        ],
        remember: "Ich entscheide selbst, wem ich antworte."
      },
      standard: {
        text: [
          { text: "Mit WhatsApp kannst du Textnachrichten, Fotos und Sprachnachrichten verschicken und in Gruppen schreiben. Du bestimmst dabei selbst, mit wem du Kontakt hast und wem du antwortest." }
        ],
        remember: "Ich entscheide selbst, mit wem ich schreibe und wem ich antworte."
      }
    },

    "Fremde Nummer": {
      einfach: {
        text: [
          { text: "Wenn dir eine fremde Nummer schreibt, weißt du nicht, wer wirklich dahintersteckt." },
          { text: "Antworte deshalb nicht sofort und gib keine persönlichen Daten weiter." },
          { text: "Im Zweifel kannst du den Kontakt einfach blockieren." }
        ],
        examples: ["„Hallo, ich habe eine neue Nummer.“", "„Schick mir bitte Geld.“"]
      },
      standard: {
        text: [
          { text: "Wenn dir eine unbekannte Nummer schreibt, weißt du nicht, wer wirklich dahintersteckt. Antworte nicht vorschnell, gib keine persönlichen Daten weiter und überweise kein Geld. Im Zweifel ignorierst oder blockierst du den Kontakt." }
        ],
        examples: ["„Hallo, ich habe eine neue Nummer. Speicher sie dir ab!“", "„Kannst du mir schnell Geld schicken? Ich erklär’s dir später.“"]
      }
    },

    "Geld und Betrug": {
      einfach: { warning: "Betrüger geben sich am Handy oft als Freunde oder Familie aus und bitten um Geld. Schick niemals Geld an eine fremde Nummer. Ruf die Person über die Nummer an, die du schon kennst.",
        text: [
          { text: "Manche Nachrichten fragen nach Geld, und die Betrüger tun oft so, als wären sie Familie oder Freunde." },
          { text: "Ein bekannter Trick lautet: „Hallo Mama, ich habe eine neue Nummer und brauche Geld.“" },
          { text: "Sogar Sprach-Nachrichten können mit KI gefälscht werden, damit die Stimme echt klingt." },
          { text: "Schick deshalb niemals Geld an eine fremde Nummer, sondern ruf die Person vorher an." }
        ],
        examples: ["„Hallo Papa, mein Handy ist kaputt. Das ist meine neue Nummer. Kannst du mir Geld überweisen?“", "Eine Sprachnachricht klingt wie deine Schwester und will Geld. Die Stimme kann gefälscht sein."]
      },
      standard: { warning: "Bei Geldforderungen per Nachricht ist Vorsicht wichtig: Betrüger geben sich als Angehörige mit neuer Nummer aus. Überweise kein Geld, sondern ruf die Person über ihre dir bekannte Nummer an.",
        text: [
          { text: "Eine häufige Betrugsmasche sind Nachrichten, die nach Geld fragen. Betrüger geben sich als Angehörige aus – etwa mit der Nachricht „Hallo Mama, ich habe eine neue Nummer und brauche Geld.“ Inzwischen lassen sich sogar Stimmen in Sprachnachrichten mit künstlicher Intelligenz täuschend echt nachahmen. Überweise deshalb niemals Geld an eine unbekannte Nummer und ruf die Person im Zweifel unter ihrer bekannten Nummer zurück." }
        ],
        examples: ["„Hallo Papa, mein Handy ist kaputt, das ist meine neue Nummer. Kannst du mir heute noch Geld überweisen?“", "Eine Sprachnachricht klingt genau wie deine Schwester und bittet dringend um Geld – solche Stimmen lassen sich mit KI fälschen."]
      }
    },

    "Links in Nachrichten": {
      einfach: {
        text: [
          { text: "Ein Link führt dich zu einer Internet-Seite, doch manche Links sind gefährlich." },
          { text: "Wenn du den Absender nicht kennst, tippe den Link lieber nicht an." },
          { text: "Gib auf solchen Seiten keine Daten ein." }
        ]
      },
      standard: {
        text: [
          { text: "Ein Link führt dich auf eine Internetseite. Manche Links stammen von Betrügern und führen zu gefälschten Seiten, die deine Daten abgreifen wollen. Öffne Links aus unbekannten Nachrichten nicht und gib dort keine Daten ein." }
        ]
      }
    },

    "WhatsApp-Code": {
      einfach: { warning: "Der Code, den du per SMS bekommst, schützt dein WhatsApp. Gib diesen Code niemals weiter – auch nicht an Freunde oder angebliche Mitarbeiter. Wer danach fragt, will dein Konto übernehmen.",
        text: [
          { text: "Manchmal bekommst du einen Code per SMS, der dein WhatsApp schützt." },
          { text: "Dieser Code ist nur für dich bestimmt." },
          { text: "Gib ihn niemals an andere weiter, auch wenn jemand danach fragt." }
        ]
      },
      standard: { warning: "Der per SMS zugeschickte Bestätigungscode schützt dein Konto. Gib ihn niemals weiter; seriöse Stellen fragen nie danach. Wer den Code haben will, versucht dein WhatsApp zu übernehmen.",
        text: [
          { text: "Gelegentlich erhältst du einen Bestätigungscode per SMS. Dieser Code schützt dein WhatsApp-Konto vor fremdem Zugriff. Gib ihn niemals weiter – wer dich danach fragt, will dein Konto übernehmen." }
        ]
      }
    },

    "Gruppen": {
      einfach: {
        text: [
          { text: "In Gruppen lesen oft viele Menschen mit, die du nicht alle kennst." },
          { text: "Überlege deshalb, was du dort schreibst." },
          { text: "Private Dinge gehören nicht in eine große Gruppe." }
        ]
      },
      standard: {
        text: [
          { text: "In Gruppen lesen oft viele Menschen mit, die du nicht alle kennst. Überlege deshalb, was du dort teilst. Private Informationen, Adressen oder Fotos gehören nicht in eine große Gruppe." }
        ]
      }
    },

    "Fotos senden": {
      einfach: {
        text: [
          { text: "Ein Foto kann leicht weiter-geschickt werden und zeigt manchmal private Dinge." },
          { text: "Frag andere Personen deshalb um Erlaubnis, bevor du ein Foto von ihnen sendest." }
        ]
      },
      standard: {
        text: [
          { text: "Einmal verschickte Fotos lassen sich leicht weiterleiten und sind kaum zurückzuholen. Achte darauf, ob ein Bild private Dinge zeigt, und frage andere Personen um Erlaubnis, bevor du ein Foto von ihnen versendest." }
        ]
      }
    },

    "Stress und Eile": {
      einfach: {
        text: [
          { text: "Manche Nachrichten machen dir absichtlich Stress oder Angst, damit du schnell reagierst." },
          { text: "Du musst aber nicht sofort antworten." },
          { text: "Mach ruhig eine Pause und entscheide in Ruhe." }
        ]
      },
      standard: {
        text: [
          { text: "Manche Nachrichten erzeugen bewusst Stress oder Angst, damit du unüberlegt reagierst. Du musst nicht sofort antworten. Mach ruhig eine Pause und entscheide in Ruhe – oder hol dir Rat von einer vertrauten Person." }
        ]
      }
    },

    "Die KI in WhatsApp": {
      einfach: {
        text: [
          { text: "In WhatsApp gibt es eine KI mit dem Namen Meta AI, die du an einem blauen Kreis erkennst." },
          { text: "Diese KI ist kein Mensch, sondern ein Programm." },
          { text: "Du musst sie nicht benutzen, und du schreibst ihr keine privaten Dinge." }
        ],
        bullets: ["Die KI kann Fragen beantworten.", "Die KI kann sich irren.", "Schreib der KI keine privaten Dinge."],
        remember: "Die KI in WhatsApp ist kein Mensch."
      },
      standard: {
        text: [
          { text: "In WhatsApp ist eine künstliche Intelligenz namens Meta AI eingebaut, erkennbar an einem blauen Kreis. Sie ist kein Mensch, sondern ein Computerprogramm: Sie kann Fragen beantworten, macht aber auch Fehler. Du musst sie nicht nutzen – und persönliche oder vertrauliche Dinge solltest du ihr nicht anvertrauen." }
        ],
        bullets: [],
        remember: "Die KI in WhatsApp ist ein Programm, kein Mensch – ich teile ihr nichts Privates mit."
      }
    },

    "Was kann ich tun?": {
      einfach: {
        text: [
          { text: "Wenn etwas komisch wirkt oder Stress macht, bleib ruhig und reagiere nicht sofort." },
          { text: "Zeig die Nachricht am besten einer Person, der du vertraust." }
        ],
        bullets: ["Stopp machen.", "Nicht sofort antworten.", "Den Link nicht öffnen.", "Den Hilfe-Knopf nutzen."],
        warning: "Auch wenn eine Nachricht von einem bekannten Namen kommt, kann sie gefälscht sein. Ruf die Person lieber selbst über die Nummer an, die du schon kennst, bevor du reagierst.",
        success: "Wenn du deinem Plan folgst, lässt du dich nicht überrumpeln und bleibst sicher."
      },
      standard: {
        text: [
          { text: "Wenn dir etwas merkwürdig vorkommt oder dir Stress gemacht wird, halte kurz inne: Reagiere nicht sofort, öffne keine Links und zeige die Nachricht einer Person, der du vertraust. Bei Bedarf hilft dir auch der Hilfe-Knopf weiter." }
        ],
        bullets: [],
        warning: "Ein bekannter Name allein ist kein Beweis für die Identität des Absenders – Betrüger nutzen häufig genau dieses Vertrauen aus. Ruf die Person deshalb über eine dir bereits bekannte Nummer zurück, bevor du auf eine ungewöhnliche Bitte reagierst.",
        success: "Wer sich an einen festen Ablauf hält, lässt sich nicht überrumpeln – das schützt zuverlässig, auch bei neuen Maschen."
      }
    },

    "Das merke ich mir": {
      einfach: {
        text: [
          { text: "Zum Schluss findest du die wichtigsten Regeln aus diesem Thema noch einmal." }
        ],
        bullets: ["Fremde Nummern prüfen.", "Kein Geld an fremde Nummern schicken.", "Unbekannte Links nicht öffnen.", "Codes nicht weitergeben.", "Fotos prüfen.", "Bei Stress Hilfe holen."]
      },
      standard: {
        text: [
          { text: "Die wichtigsten Punkte dieses Themas im Überblick: Prüfe Nachrichten von unbekannten Nummern und schicke niemals Geld an Fremde. Öffne unbekannte Links nicht und gib Bestätigungscodes nie weiter. Überlege bei Fotos, was du teilst, und hol dir bei Stress oder Stress ruhig Unterstützung." }
        ],
        bullets: []
      }
    }
  },

  facebook: {
    "Start": {
      einfach: { text: [
        { text: "In diesem Thema geht es um Facebook." },
        { text: "Du lernst, wie du dein Profil schützt und dich vor unbekannten Kontakten in Acht nimmst." },
        { text: "Wenn du unsicher bist, kannst du jederzeit den Hilfe-Knopf benutzen." }
      ] },
      standard: { text: [
        { text: "In diesem Kapitel geht es um den sicheren Umgang mit Facebook. Du erfährst, wie du dein Profil schützt, Beiträge und Freundschaftsanfragen einschätzt und respektvoll mit anderen umgehst. Wenn du unsicher bist, steht dir jederzeit der Hilfe-Knopf zur Verfügung." }
      ] }
    },
    "Profil": {
      einfach: {
        text: [
          { text: "In deinem Profil stehen Informationen über dich, aber nicht alles muss dort öffentlich stehen." },
          { text: "Private Angaben wie Adresse oder Geburtstag solltest du weglassen oder nur für Freunde sichtbar machen." }
        ],
        examples: ["Adresse", "Telefon-Nummer", "Geburtstag", "private Fotos"],
        remember: "Ich zeige nicht alles in meinem Profil."
      },
      standard: {
        text: [
          { text: "In deinem Profil stehen Informationen über dich – aber nicht alles muss dort öffentlich sichtbar sein. Angaben wie Adresse, Telefonnummer, Geburtsdatum oder private Fotos solltest du entweder weglassen oder nur für ausgewählte Personen freigeben." }
        ],
        examples: ["Wohnadresse", "Telefonnummer", "Geburtsdatum", "private Fotos"],
        remember: "Ich überlege genau, welche Angaben in meinem Profil öffentlich sichtbar sind."
      }
    },
    "Beitrag schreiben": {
      einfach: { text: [
        { text: "Wenn du etwas postest, können viele Menschen deinen Beitrag sehen – manchmal mehr als nur deine Freunde." },
        { text: "Überlege deshalb vorher, ob der Inhalt wirklich für alle bestimmt ist." }
      ] },
      standard: { text: [
        { text: "Bevor du einen Beitrag veröffentlichst, denk daran: Oft können sehr viele Menschen ihn lesen – manchmal auch über deinen Freundeskreis hinaus. Überlege deshalb vorher, ob der Inhalt wirklich für alle bestimmt ist." }
      ] }
    },
    "Wer darf etwas sehen?": {
      einfach: { text: [
        { text: "Du kannst bei Facebook einstellen, wer deine Beiträge sehen darf – das nennt man Privatsphäre-Einstellungen." },
        { text: "Diese Einstellungen lohnen sich, und du darfst dir dabei ruhig helfen lassen." }
      ] },
      standard: { text: [
        { text: "Facebook bietet Einstellungen, mit denen du festlegst, wer deine Beiträge sehen darf – zum Beispiel nur Freunde statt aller Nutzer. Diese Privatsphäre-Einstellungen lohnen sich. Wenn sie unübersichtlich sind, lass dir ruhig dabei helfen." }
      ] }
    },
    "Freundschafts-Anfragen": {
      einfach: { warning: "Nimm Freundschaftsanfragen nur von Menschen an, die du wirklich kennst. Hinter fremden Profilen können sich Betrüger verstecken. Im Zweifel lehnst du die Anfrage ab.", text: [
        { text: "Nicht jede Freundschafts-Anfrage kommt von jemandem, den du kennst." },
        { text: "Hinter unbekannten Profilen können sich auch Betrüger verstecken." },
        { text: "Du musst keine Anfrage annehmen und kannst sie im Zweifel ablehnen." }
      ] },
      standard: { warning: "Bestätige Freundschaftsanfragen nur von Personen, die du tatsächlich kennst. Fremde oder gefälschte Profile werden oft für Betrug genutzt. Im Zweifelsfall lehnst du die Anfrage ab.", text: [
        { text: "Nicht jede Freundschaftsanfrage stammt von jemandem, den du kennst. Hinter unbekannten Profilen können sich auch Betrüger verbergen. Du musst keine Anfrage annehmen – im Zweifel lehnst du sie ab oder ignorierst sie." }
      ] }
    },
    "Kommentare schreiben": {
      einfach: { text: [
        { text: "Kommentare können viele Menschen lesen, und Worte können verletzen." },
        { text: "Du musst nicht auf jeden Beitrag antworten." },
        { text: "Wenn du kommentierst, bleib freundlich und sachlich." }
      ] },
      standard: { text: [
        { text: "Was du kommentierst, können viele Menschen lesen, und Worte können verletzen. Du musst nicht auf jeden Beitrag reagieren. Wenn du kommentierst, bleib sachlich und respektvoll." }
      ] }
    },
    "Beleidigungen": {
      einfach: { warning: "Beleidigungen sind nicht in Ordnung und nicht deine Schuld. Du musst nicht zurück beleidigen. Du kannst die Person melden, blockieren und dir Hilfe holen.",
        text: [
          { text: "Im Internet kommt es manchmal zu Streit und Beleidigungen." },
          { text: "Du musst dich darauf nicht einlassen und nicht zurück beleidigen." },
          { text: "Stattdessen kannst du die Person blockieren, den Beitrag melden und dir Hilfe holen." }
        ],
        bullets: ["Die Nachricht zeigen.", "Die Person blockieren.", "Den Beitrag melden.", "Unterstützung holen."]
      },
      standard: { warning: "Beleidigungen im Netz sind nicht in Ordnung – und nicht deine Schuld. Reagiere nicht mit Gegenbeleidigungen, sondern melde und blockiere die Person und hol dir bei Bedarf Unterstützung.",
        text: [
          { text: "Auch auf Facebook kommt es zu Streit und Beleidigungen. Du musst dich darauf nicht einlassen und nicht zurückbeleidigen. Stattdessen kannst du die Nachricht aufbewahren, die Person blockieren, den Beitrag melden und dir Unterstützung holen." }
        ],
        bullets: []
      }
    },
    "Fotos mit anderen Personen": {
      einfach: { text: [
        { text: "Wenn auf einem Foto andere Menschen zu sehen sind, möchte nicht jeder im Internet erscheinen." },
        { text: "Frag die Personen deshalb um Erlaubnis, bevor du ein solches Foto postest." }
      ] },
      standard: { text: [
        { text: "Wenn auf einem Foto andere Personen zu sehen sind, gilt: Nicht jeder möchte im Internet erscheinen. Frag die abgebildeten Personen um Erlaubnis, bevor du ein solches Bild veröffentlichst." }
      ] }
    },
    "Was kann ich tun?": {
      einfach: {
        text: [
          { text: "Wenn dich auf Facebook etwas stört oder jemand gemein zu dir ist, musst du das nicht alleine aushalten." },
          { text: "Du kannst die Person blockieren und den Beitrag melden. Und du kannst es einer Person sagen, der du vertraust." }
        ],
        bullets: ["Die Person blockieren.", "Den Beitrag oder Kommentar melden.", "Einer vertrauten Person davon erzählen.", "Hilfe holen."],
        warning: "Manche Personen geben sich als Freund aus, wollen aber schnell Geld oder private Daten von dir. Das ist dann meistens kein echter Freund.",
        success: "Hilfe zu holen ist immer richtig. Was passiert ist, ist nicht deine Schuld."
      },
      standard: {
        text: [
          { text: "Wenn dich auf Facebook etwas belastet oder jemand verletzend ist, musst du das nicht alleine tragen. Du kannst die Person blockieren, den Beitrag oder Kommentar melden und dir Unterstützung holen – sprich am besten mit jemandem, dem du vertraust. Wichtig: Es ist nicht deine Schuld." }
        ],
        bullets: [],
        warning: "Nicht jede Person, die sich freundlich gibt, meint es auch gut – besonders wenn schnell um Geld oder private Daten gebeten wird, ist Vorsicht angebracht.",
        success: "Sich Unterstützung zu holen ist der richtige Schritt – und was dir widerfahren ist, ist nicht deine Schuld."
      }
    },
    "Das merke ich mir": {
      einfach: {
        text: [{ text: "Zum Schluss findest du die wichtigsten Regeln aus diesem Thema noch einmal." }],
        bullets: ["Nicht alles öffentlich machen.", "Anfragen prüfen.", "Respektvoll schreiben.", "Bei Beleidigungen Hilfe holen."]
      },
      standard: {
        text: [{ text: "Die wichtigsten Punkte dieses Themas im Überblick: Mach nicht alles in deinem Profil öffentlich und nutze die Privatsphäre-Einstellungen. Prüfe Freundschaftsanfragen, bleib in Kommentaren respektvoll und hol dir bei Beleidigungen Unterstützung." }],
        bullets: []
      }
    }
  },

  instagram: {
    "Start": {
      einfach: { text: [
        { text: "In diesem Thema geht es um Instagram." },
        { text: "Du lernst, worauf du beim Posten von Fotos und Videos achtest und wie du deinen Standort schützt." },
        { text: "Wenn du unsicher bist, kannst du jederzeit den Hilfe-Knopf benutzen." }
      ] },
      standard: { text: [
        { text: "In diesem Kapitel geht es um den sicheren Umgang mit Instagram. Du erfährst, worauf du beim Posten von Fotos und Videos achtest, wie du deinen Standort schützt und fremde Nachrichten einschätzt. Wenn du unsicher bist, steht dir jederzeit der Hilfe-Knopf zur Verfügung." }
      ] }
    },
    "Foto posten": {
      einfach: { examples: ["Auf dem Foto ist das Straßenschild vor deinem Haus zu sehen. So wissen andere, wo du wohnst.", "Auf dem Tisch liegt ein Brief, auf dem man deinen Namen und deine Adresse lesen kann."], text: [
        { text: "Wenn du ein Foto postest, können viele Menschen es sehen." },
        { text: "Achte darauf, was im Bild zu erkennen ist, denn oft verraten Hintergrund oder Details mehr über dich, als du denkst." }
      ] },
      standard: { examples: ["Im Hintergrund ist das Straßenschild vor deiner Wohnung zu erkennen – daraus lässt sich ablesen, wo du wohnst.", "Auf dem Tisch liegt ein Brief, auf dem Name und Adresse gut lesbar sind."], text: [
        { text: "Wenn du ein Foto postest, können es viele Menschen sehen. Achte darauf, was im Bild zu erkennen ist – oft verraten Hintergrund oder Details mehr über dich, als dir bewusst ist." }
      ] }
    },
    "Andere Personen auf Fotos": {
      einfach: { text: [
        { text: "Wenn auf einem Foto andere Personen zu sehen sind, möchte nicht jeder im Internet erscheinen." },
        { text: "Frag sie deshalb vorher um Erlaubnis oder nimm ein anderes Foto." }
      ] },
      standard: { text: [
        { text: "Sind auf einem Foto andere Personen zu sehen, solltest du sie vor dem Posten um Erlaubnis fragen. Wer das nicht möchte, hat ein Recht darauf – dann wählst du besser ein anderes Bild." }
      ] }
    },
    "Kurze Videos und Stories": {
      einfach: { text: [
        { text: "Kurze Videos und Stories verschwinden zwar wieder, doch in der Zeit können viele Menschen sie sehen." },
        { text: "Andere können dabei ein Bild vom Bildschirm machen und es behalten." },
        { text: "Behandle solche Videos deshalb so vorsichtig wie jeden anderen Beitrag." }
      ] },
      standard: { text: [
        { text: "Stories und kurze Videos verschwinden zwar nach einer Weile, doch in dieser Zeit können viele Menschen sie sehen – und mit einem Bildschirmfoto dauerhaft speichern. Behandle sie deshalb so vorsichtig wie jeden anderen Beitrag." }
      ] }
    },
    "Standort": {
      einfach: { text: [
        { text: "Wenn du deinen Standort teilst, sehen andere, wo du gerade bist." },
        { text: "Das muss nicht jeder wissen und kann ausgenutzt werden." },
        { text: "Teile deinen Standort deshalb nur bewusst und nur mit Menschen, denen du vertraust." }
      ] },
      standard: { text: [
        { text: "Wenn du deinen Standort teilst, sehen andere, wo du dich aufhältst. Das muss nicht jeder wissen und kann ausgenutzt werden. Gib deinen Standort nur bewusst und nur an Menschen weiter, denen du vertraust." }
      ] }
    },
    "Private Nachrichten": {
      einfach: { examples: ["„Du bist so schön. Schick mir doch noch mehr Fotos von dir.“", "Eine fremde Person fragt, wo du wohnst und ob du gerade allein zu Hause bist."], warning: "Wenn dir eine fremde Person schreibt und nach privaten Fotos oder Daten fragt, ist das ein Warnzeichen. Du musst nicht antworten und kannst die Person blockieren.", text: [
        { text: "Wenn dir eine fremde Person privat schreibt und nach Fotos oder Daten fragt, ist das ein Warnzeichen." },
        { text: "Geh darauf nicht ein und schick keine privaten Bilder." },
        { text: "Im Zweifel blockierst du den Kontakt." }
      ] },
      standard: { examples: ["„Du siehst toll aus. Schick mir doch noch ein paar Fotos – nur für mich.“", "Eine unbekannte Person fragt nach deiner Adresse und ob du gerade allein zu Hause bist."], warning: "Fordert dich eine unbekannte Person in privaten Nachrichten zu Fotos oder persönlichen Daten auf, ist das ein Warnsignal. Du musst nicht antworten und kannst die Person blockieren oder melden.", text: [
        { text: "Wenn dir eine fremde Person private Nachrichten schickt und nach Fotos oder persönlichen Daten fragt, ist das ein deutliches Warnzeichen. Geh darauf nicht ein, schick keine privaten Bilder und blockiere den Kontakt im Zweifel." }
      ] }
    },
    "Verletzende Kommentare": {
      einfach: { warning: "Manche Kommentare sind gemein und verletzen. Das ist nicht deine Schuld. Du musst nicht antworten und kannst den Kommentar melden und die Person blockieren.",
        text: [
          { text: "Kommentare können nett sein, manche aber auch verletzend." },
          { text: "Du musst nicht auf jeden Kommentar antworten." },
          { text: "Bei gemeinen Kommentaren kannst du die Person blockieren oder den Kommentar melden." }
        ],
        bullets: ["Die Nachricht zeigen.", "Die Person blockieren.", "Den Kommentar melden.", "Mit jemandem darüber sprechen."]
      },
      standard: { warning: "Verletzende Kommentare sagen mehr über die andere Person aus als über dich – die Schuld liegt nicht bei dir. Du musst nicht antworten und kannst den Kommentar melden und die Person blockieren.",
        text: [
          { text: "Kommentare können freundlich, aber auch verletzend sein. Du musst nicht auf jeden reagieren. Bei verletzenden Kommentaren kannst du die Nachricht aufbewahren, die Person blockieren, den Kommentar melden und mit jemandem darüber sprechen." }
        ],
        bullets: []
      }
    },
    "Bearbeitete Bilder": {
      einfach: { text: [
        { text: "Auf Instagram wirkt vieles perfekt, doch viele Bilder sind bearbeitet oder mit Filtern verändert." },
        { text: "Mach dir bewusst, dass nicht alles echt ist und du dich damit nicht vergleichen musst." }
      ] },
      standard: { text: [
        { text: "Vieles auf Instagram wirkt makellos – doch zahlreiche Bilder sind nachbearbeitet oder mit Filtern verändert. Mach dir bewusst: Das Gezeigte entspricht oft nicht der Wirklichkeit, und du musst dich damit nicht vergleichen." }
      ] }
    },
    "Was kann ich tun?": {
      einfach: {
        text: [
          { text: "Wenn ein Profil oder eine Nachricht komisch wirkt, mach Stopp und antworte nicht sofort." },
          { text: "Zeig es am besten einer Person, der du vertraust." }
        ],
        bullets: ["Stopp machen.", "Nicht sofort antworten.", "Das Profil oder die Nachricht zeigen.", "Den Hilfe-Knopf nutzen."],
        warning: "Ein fremdes Profil kann eine falsche Person sein, auch wenn die Bilder echt aussehen. Ein schönes Bild ist kein Beweis für die wahre Identität.",
        success: "Wenn du deinem Plan folgst, lässt du dich nicht drängen und entscheidest in Ruhe."
      },
      standard: {
        text: [
          { text: "Wenn dir ein Profil oder eine Nachricht merkwürdig vorkommt, halte inne: Antworte nicht sofort und zeige es einer Person, der du vertraust. Bei Bedarf hilft dir auch der Hilfe-Knopf weiter." }
        ],
        bullets: [],
        warning: "Profile lassen sich leicht fälschen – ansprechende Bilder sagen nichts darüber aus, wer wirklich dahintersteckt. Skepsis gegenüber unbekannten Profilen ist deshalb immer angebracht.",
        success: "Ein fester Ablauf schützt davor, sich zu einer schnellen Entscheidung drängen zu lassen."
      }
    },
    "Das merke ich mir": {
      einfach: {
        text: [{ text: "Zum Schluss findest du die wichtigsten Regeln aus diesem Thema noch einmal." }],
        bullets: ["Fotos prüfen.", "Standort schützen.", "Fremden nicht sofort antworten.", "Keine privaten Fotos an Fremde schicken."]
      },
      standard: {
        text: [{ text: "Die wichtigsten Punkte dieses Themas im Überblick: Prüfe deine Fotos und Videos vor dem Posten, schütze deinen Standort und antworte Fremden nicht vorschnell. Schick keine privaten Bilder an unbekannte Personen und hol dir bei Problemen Unterstützung." }],
        bullets: []
      }
    }
  },

  youtube: {
    "Start": {
      einfach: { text: [
        { text: "In diesem Thema geht es um YouTube." },
        { text: "Du lernst, wie du Videos und Werbung einschätzt und gut auf Pausen achtest." },
        { text: "Wenn du unsicher bist, kannst du jederzeit den Hilfe-Knopf benutzen." }
      ] },
      standard: { text: [{ text: "In diesem Kapitel geht es um den sicheren Umgang mit YouTube. Du erfährst, wie du Videos und Werbung einschätzt, Pausen machst und mit beängstigenden oder gefälschten Inhalten umgehst. Wenn du unsicher bist, steht dir jederzeit der Hilfe-Knopf zur Verfügung." }] }
    },
    "Videos prüfen": {
      einfach: { examples: ["Ein Video verspricht: „Mit diesem Trick bist du in einer Woche reich.“", "Ein Video sagt, dass ein bestimmtes Wasser jede Krankheit heilt."], text: [
        { text: "Nicht alles, was in Videos gesagt wird, ist wahr, denn manche Videos übertreiben oder lügen." },
        { text: "Glaub deshalb nicht alles sofort und prüfe wichtige Aussagen." }
      ] },
      standard: { examples: ["Ein Video verspricht, dass man mit einem einfachen Trick in einer Woche reich wird.", "Ein Video behauptet, ein bestimmtes Wasser heile jede Krankheit – ohne Quellen oder Belege."], text: [{ text: "Nicht alles, was in Videos behauptet wird, stimmt. Manche Inhalte übertreiben oder sind bewusst falsch, um Aufmerksamkeit zu erzeugen. Prüfe wichtige Aussagen und glaub nicht alles sofort." }] }
    },
    "Werbung erkennen": {
      einfach: { examples: ["Eine Frau stellt im Video eine Creme vor, und unter dem Video steht „Werbung“.", "„Kauf das jetzt! Nur heute ist es billiger.“"], text: [
        { text: "In vielen Videos steckt Werbung, die dich zum Kaufen bringen will." },
        { text: "Lass dich nicht zu schnellen Käufen drängen und überlege in Ruhe." }
      ] },
      standard: { examples: ["In einem Video wird eine Creme vorgestellt; darunter steht klein „Werbung“ oder „Anzeige“.", "„Nur heute zum halben Preis – jetzt über meinen Link kaufen!“"], text: [{ text: "In vielen Videos steckt Werbung – manchmal offen, manchmal versteckt als Empfehlung. Ihr Ziel ist, dass du etwas kaufst. Lass dich nicht zu schnellen Käufen drängen und überlege in Ruhe." }] }
    },
    "Autoplay und Zeit": {
      einfach: { text: [
        { text: "YouTube spielt automatisch das nächste Video ab, sodass man schnell sehr lange schaut." },
        { text: "Achte darauf, wie lange du schon schaust." },
        { text: "Du darfst jederzeit stoppen und eine Pause machen." }
      ] },
      standard: { text: [{ text: "YouTube startet automatisch das nächste Video, sodass man schnell viel Zeit verliert. Achte darauf, wie lange du schon schaust, und mach bewusst Pausen. Du darfst jederzeit stoppen." }] }
    },
    "Gefährliche Mutproben": {
      einfach: { warning: "Manche Videos zeigen gefährliche Mutproben, die zu Verletzungen führen können. Mach so etwas nicht nach – deine Gesundheit ist wichtiger als ein Video.", text: [
        { text: "Manche Videos zeigen gefährliche Mutproben, die du nicht nachmachen musst." },
        { text: "Deine Gesundheit ist wichtiger als ein Trend oder die Anerkennung anderer." }
      ] },
      standard: { warning: "In manchen Videos werden gefährliche Mutproben gezeigt, die zu ernsten Verletzungen führen können. Ahme sie nicht nach; deine Gesundheit geht vor.", text: [{ text: "Im Netz kursieren Videos mit gefährlichen Mutproben oder „Challenges“. Du musst bei so etwas nicht mitmachen – deine Gesundheit ist wichtiger als ein Trend oder die Anerkennung anderer." }] }
    },
    "Videos, die Angst machen": {
      einfach: { warning: "Manche Videos machen Angst oder Stress. Du darfst ein solches Video jederzeit stoppen. Sprich danach mit einer Person, der du vertraust.", text: [
        { text: "Manche Videos machen Angst oder Stress, und du musst sie nicht zu Ende sehen." },
        { text: "Du darfst das Video stoppen und mit einer vertrauten Person darüber sprechen." }
      ] },
      standard: { warning: "Wenn dir ein Video Angst macht oder Stress auslöst, darfst du es jederzeit beenden. Rede anschließend mit einer Person, der du vertraust, darüber.", text: [{ text: "Manche Videos lösen Angst oder Stress aus. Du musst sie nicht zu Ende sehen – stopp das Video und wende dich bei Bedarf an eine Person, der du vertraust." }] }
    },
    "Kommentare": {
      einfach: {
        text: [
          { text: "Unter Videos gibt es nette, aber auch verletzende Kommentare." },
          { text: "Du musst sie weder lesen noch beantworten." },
          { text: "Lass dich von gemeinen Kommentaren nicht herunterziehen." }
        ],
        remember: "Ich muss nicht auf Kommentare reagieren."
      },
      standard: {
        text: [{ text: "Unter Videos finden sich freundliche, aber auch verletzende Kommentare. Du musst sie weder lesen noch beantworten. Lass dich von gemeinen Kommentaren nicht herunterziehen." }],
        remember: "Ich muss Kommentare weder lesen noch beantworten."
      }
    },
    "Nicht jedes Video ist echt": {
      einfach: {
        text: [
          { text: "Manche Videos sind mit KI gemacht und sehen echt aus, sind aber gefälscht." },
          { text: "Sogar bekannte Menschen werden so täuschend echt nachgemacht." },
          { text: "Mehr dazu lernst du im Thema „Fake News und KI-Fakes“." }
        ],
        remember: "Auch Videos können gefälscht sein."
      },
      standard: {
        text: [{ text: "Manche Videos werden mit künstlicher Intelligenz erzeugt. Sie wirken echt, sind aber gefälscht – mitunter werden sogar bekannte Personen täuschend echt nachgebildet. Mehr dazu erfährst du im Thema „Fake News und KI-Fakes“." }],
        remember: "Auch echt wirkende Videos können gefälscht sein."
      }
    },
    "Was kann ich tun?": {
      einfach: {
        text: [
          { text: "Wenn ein Video dir Angst macht oder dir Stress macht, mach Stopp und mach nichts Gefährliches nach." },
          { text: "Zeig das Video bei Bedarf einer vertrauten Person und mach eine Pause." }
        ],
        bullets: ["Das Video stoppen.", "Nichts nachmachen.", "Eine Pause machen.", "Unterstützung holen."],
        warning: "Manche Videos zeigen gefährliche Mutproben. Wenn du das nachmachst, kannst du dir wehtun.",
        success: "Wenn du das Video stoppst und eine Pause machst, schützt du dich vor Gefahr."
      },
      standard: {
        text: [{ text: "Wenn dir ein Video Angst macht oder dir Stress macht, stopp es und mach nichts nach, was gefährlich ist. Zeig es bei Bedarf einer Person, der du vertraust, und mach eine Pause." }],
        bullets: [],
        warning: "Videos mit gefährlichen Mutproben verbreiten sich schnell, weil sie viele Aufrufe bekommen – das sagt aber nichts über ihre Sicherheit aus. Nachahmung kann ernsthafte Folgen haben.",
        success: "Ein Video zu stoppen und innezuhalten ist der sicherste Weg, sich vor riskanten Nachahmungen zu schützen."
      }
    },
    "Das merke ich mir": {
      einfach: {
        text: [{ text: "Zum Schluss findest du die wichtigsten Regeln aus diesem Thema noch einmal." }],
        bullets: ["Videos prüfen.", "Werbung erkennen.", "Nicht jedes Video ist echt.", "Pausen machen.", "Gefährliche Dinge nicht nachmachen."]
      },
      standard: {
        text: [{ text: "Die wichtigsten Punkte dieses Themas im Überblick: Prüfe Videos kritisch, erkenne Werbung und denk daran, dass nicht jedes Video echt ist. Mach bewusst Pausen und mach gefährliche Mutproben niemals nach." }],
        bullets: []
      }
    }
  },

  snapchat: {
    "Start": {
      einfach: { text: [
        { text: "In diesem Thema geht es um Snapchat." },
        { text: "Du lernst, warum Bilder nicht wirklich verschwinden und wie du Stress erkennst." },
        { text: "Wenn du unsicher bist, kannst du jederzeit den Hilfe-Knopf benutzen." }
      ] },
      standard: { text: [{ text: "In diesem Kapitel geht es um den sicheren Umgang mit Snapchat. Du erfährst, warum Bilder trotz „Verschwinden“ gespeichert werden können, wie du deinen Standort schützt und Stress erkennst. Wenn du unsicher bist, steht dir jederzeit der Hilfe-Knopf zur Verfügung." }] }
    },
    "Bilder verschwinden nicht immer": {
      einfach: { examples: ["Du schickst ein lustiges Bild, das nach 10 Sekunden verschwindet. Aber dein Freund hat es vorher gespeichert.", "Ein Bild, das du nur einer Person geschickt hast, taucht später in einer Gruppe auf."], text: [
        { text: "Bei Snapchat ist ein Bild oft nur kurz zu sehen." },
        { text: "Trotzdem kann der andere das Bild speichern oder abfotografieren." },
        { text: "Sende deshalb nur Bilder, die auch dauerhaft sichtbar sein dürften." }
      ], warning: "Auch wenn ein Bild schnell verschwindet, kann es jemand vorher speichern. Sende deshalb nur Bilder, die andere sehen dürfen." },
      standard: { examples: ["Ein Bild verschwindet nach zehn Sekunden – der Empfänger hat es vorher per Bildschirmfoto gespeichert.", "Ein Bild, das nur für eine Person gedacht war, taucht Wochen später in einem Gruppenchat auf."], text: [{ text: "Bei Snapchat sind Bilder oft nur kurz sichtbar. Das bedeutet aber nicht, dass sie wirklich weg sind: Der Empfänger kann sie speichern oder abfotografieren. Sende deshalb nur Bilder, die auch dauerhaft sichtbar sein dürften." }], warning: "Ein Snap verschwindet zwar nach kurzer Zeit, lässt sich aber vorher per Screenshot sichern. Verschicke deshalb nur Bilder, deren Weitergabe für dich in Ordnung ist." }
    },
    "Bild vom Bildschirm": {
      einfach: {
        text: [
          { text: "Mit einem Bild vom Bildschirm kann jemand dein Bild speichern und weiterschicken – auch ohne dass du es merkst." },
          { text: "Überlege deshalb vor jedem Bild, ob es in fremden Händen ein Problem wäre." }
        ],
        remember: "Ich denke vor dem Senden nach."
      },
      standard: {
        text: [{ text: "Mit einem Bildschirmfoto kann der Empfänger dein Bild dauerhaft speichern und weiterleiten – auch ohne dass du es merkst. Überlege deshalb vor jedem Bild, ob es in fremden Händen ein Problem wäre." }],
        remember: "Vor dem Senden überlege ich, ob das Bild gespeichert werden dürfte."
      }
    },
    "Sehr private Bilder": {
      einfach: { text: [
        { text: "Manche Bilder sind sehr privat, und niemand darf dich zu solchen Bildern drängen." },
        { text: "Du darfst jederzeit Nein sagen und dir Hilfe holen." }
      ], warning: "Niemand darf dich zu sehr privaten Bildern drängen. Du darfst immer Nein sagen und dir Hilfe holen." },
      standard: { text: [{ text: "Sehr private oder intime Bilder solltest du besonders schützen. Niemand hat das Recht, dich zu solchen Aufnahmen zu drängen. Du darfst jederzeit Nein sagen und dir Hilfe holen." }], warning: "Niemand hat das Recht, dich zu intimen Aufnahmen zu drängen. Du darfst jederzeit Nein sagen und dir Hilfe holen – zum Beispiel bei einer Person, der du vertraust." }
    },
    "Standort": {
      einfach: { text: [
        { text: "Snapchat kann anderen zeigen, wo du gerade bist." },
        { text: "Das muss nicht jeder wissen und kann unsicher sein." },
        { text: "Schalte die Standort-Anzeige aus, wenn du das nicht möchtest." }
      ] },
      standard: { text: [{ text: "Snapchat kann über die „Snap Map“ deinen Standort anzeigen. Dann sehen andere, wo du dich aufhältst – das kann unsicher sein. Schalte die Standortfreigabe aus oder nutze den „Geistmodus“, wenn du das nicht möchtest." }] }
    },
    "Kontakte": {
      einfach: { text: [
        { text: "Nicht jeder, der dir schreibt, ist vertrauenswürdig, denn auch Fremde können Kontakt aufnehmen." },
        { text: "Du musst nicht antworten und kannst unbekannte Kontakte blockieren." }
      ] },
      standard: { text: [{ text: "Nicht jeder, der dir schreibt, ist vertrauenswürdig. Auch Fremde können Kontakt aufnehmen. Du musst nicht antworten und kannst unbekannte Kontakte ablehnen oder blockieren." }] }
    },
    "Stress erkennen": {
      einfach: { examples: ["„Schick mir ein Bild. Aber sag es niemandem.“", "„Wenn du mir kein Bild schickst, bin ich nicht mehr dein Freund.“"], text: [
        { text: "Wenn jemand sagt: „Schick das Bild, aber sag es niemandem“, ist das ein Warnzeichen." },
        { text: "Wer Geheimhaltung verlangt, drängt dich bewusst." },
        { text: "Du darfst Nein sagen und dir Hilfe holen." }
      ] },
      standard: { examples: ["„Schick mir ein Bild – aber das bleibt unser Geheimnis.“", "„Wenn du mir kein Bild schickst, ist unsere Freundschaft vorbei.“"], text: [{ text: "Sätze wie „Schick mir das Bild, aber sag es niemandem“ sind ein klares Warnzeichen. Wer Geheimhaltung verlangt, drängt dich bewusst. Du darfst Nein sagen und dir sofort Unterstützung holen." }] }
    },
    "Was kann ich tun?": {
      einfach: {
        text: [
          { text: "Wenn dir eine Nachricht Stress macht, sende kein Bild und reagiere nicht vorschnell." },
          { text: "Zeig die Nachricht einer Person, der du vertraust, und hol dir Unterstützung." }
        ],
        bullets: ["Nein sagen.", "Kein Bild senden.", "Die Nachricht zeigen.", "Unterstützung holen."],
        warning: "Ein Bild, das du einmal gesendet hast, kannst du nicht mehr zurückholen – auch wenn es danach gelöscht wird.",
        success: "Nein zu sagen ist immer richtig, auch wenn jemand Stress macht."
      },
      standard: {
        text: [{ text: "Wenn dir eine Nachricht Stress macht, sende kein Bild und reagiere nicht vorschnell. Zeig die Nachricht einer Person, der du vertraust, und hol dir Unterstützung." }],
        bullets: [],
        warning: "Ein einmal versendetes Bild lässt sich nicht mehr zurückholen, selbst wenn es scheinbar nach kurzer Zeit verschwindet – es kann vorher gespeichert worden sein.",
        success: "Nein zu sagen ist immer eine legitime Antwort – auch und gerade dann, wenn dir Stress gemacht wird."
      }
    },
    "Das merke ich mir": {
      einfach: {
        text: [{ text: "Zum Schluss findest du die wichtigsten Regeln aus diesem Thema noch einmal." }],
        bullets: ["Bilder können gespeichert werden.", "Standort schützen.", "Kontakte prüfen.", "Bei Stress Hilfe holen."]
      },
      standard: {
        text: [{ text: "Die wichtigsten Punkte dieses Themas im Überblick: Bilder können trotz „Verschwinden“ gespeichert werden, also überlege vor dem Senden. Schütze deinen Standort, prüfe deine Kontakte und hol dir bei Stress Unterstützung." }],
        bullets: []
      }
    }
  },

  tiktok: {
    "Start": {
      einfach: { text: [
        { text: "In diesem Thema geht es um TikTok." },
        { text: "Du lernst, wie du gefährliche Trends erkennst, deine Daten schützt und Pausen machst." },
        { text: "Wenn du unsicher bist, kannst du jederzeit den Hilfe-Knopf benutzen." }
      ] },
      standard: { text: [{ text: "In diesem Kapitel geht es um den sicheren Umgang mit TikTok. Du erfährst, wie du gefährliche Trends erkennst, deine Daten schützt, Pausen machst und gefälschte Videos einordnest. Wenn du unsicher bist, steht dir jederzeit der Hilfe-Knopf zur Verfügung." }] }
    },
    "Trends": {
      einfach: { text: [
        { text: "Auf TikTok machen viele Menschen bei Trends mit, und manche Trends sind lustig." },
        { text: "Andere Trends sind aber gefährlich." },
        { text: "Du entscheidest selbst, ob du mitmachst, und musst es nicht." }
      ] },
      standard: { text: [{ text: "Auf TikTok verbreiten sich Trends sehr schnell. Viele sind harmlos und lustig, manche aber gefährlich. Du entscheidest selbst, ob du mitmachst – und musst es nicht." }] }
    },
    "Ähnliche Videos": {
      einfach: { text: [
        { text: "TikTok merkt sich, was du anschaust, und zeigt dir immer mehr vom Gleichen." },
        { text: "Dadurch schaust du schnell sehr lange." },
        { text: "Mach dir das bewusst und leg bewusst Pausen ein." }
      ] },
      standard: { text: [{ text: "TikTok beobachtet, welche Videos du ansiehst, und zeigt dir immer mehr vom Gleichen. Dieser Sog führt dazu, dass man schnell sehr lange schaut. Mach dir das bewusst und leg bewusst Pausen ein." }] }
    },
    "Gefährliche Trends erkennen": {
      einfach: { examples: ["Bei einem Trend sollen alle so lange wie möglich die Luft anhalten. Das ist gefährlich für deine Gesundheit.", "Bei einem Trend essen alle sehr scharfe Chips. Das kann weh tun und dich krank machen."], warning: "Manche Trends sehen lustig aus, können aber gefährlich sein und weh tun. Mach bei solchen Trends nicht mit – deine Gesundheit ist wichtiger.",
        text: [
          { text: "Wenn ein Trend gefährlich aussieht oder wehtun könnte, mach nicht mit – egal, wie viele andere es tun." },
          { text: "Deine Sicherheit ist wichtiger als Likes." }
        ],
        remember: "Ich muss nicht bei jedem Trend mitmachen."
      },
      standard: { examples: ["Ein Trend fordert dazu auf, möglichst lange die Luft anzuhalten – das kann ernsthaft gefährlich werden.", "Bei einer „Challenge“ essen alle extrem scharfe Chips – das kann Schmerzen und Kreislaufprobleme auslösen."], warning: "Nicht jeder Trend ist harmlos: Manche können gefährlich sein und zu Verletzungen führen. Mach bei solchen Challenges nicht mit; deine Gesundheit geht vor.",
        text: [{ text: "Wenn ein Trend gefährlich aussieht oder wehtun könnte, mach nicht mit – egal, wie viele andere es tun. Deine Sicherheit ist wichtiger als Likes." }],
        remember: "Ich mache bei gefährlichen Trends nicht mit."
      }
    },
    "Private Nachrichten": {
      einfach: { examples: ["„Ich mag deine Videos. Gib mir deine Telefon-Nummer, dann schreiben wir privat.“", "„Ich schicke dir Geld, wenn du mir ein Foto von dir schickst.“"], warning: "Fremde Personen können dir bei TikTok schreiben und nach Adresse, Fotos oder anderen Daten fragen. Gib solche Daten nicht weiter und blockiere den Kontakt im Zweifel.", text: [
        { text: "Auch auf TikTok können dir Fremde schreiben und nach Adresse, Fotos oder anderen Daten fragen." },
        { text: "Gib solche Daten nicht weiter und blockiere den Kontakt im Zweifel." }
      ] },
      standard: { examples: ["„Deine Videos sind toll! Gib mir deine Telefonnummer, dann können wir privat schreiben.“", "„Ich schicke dir 50 Euro, wenn du mir ein Foto von dir schickst.“"], warning: "Auch bei TikTok können dir Fremde schreiben und nach Adresse, Fotos oder persönlichen Daten fragen. Gib solche Daten nicht weiter und blockiere den Kontakt im Zweifel.", text: [{ text: "Auch auf TikTok können dir Fremde private Nachrichten schicken und nach Adresse, Fotos oder anderen Daten fragen. Gib solche Informationen nicht weiter und blockiere den Kontakt im Zweifel." }] }
    },
    "Videos posten": {
      einfach: { text: [
        { text: "Ein Video, das du postest, können viele Menschen sehen und speichern." },
        { text: "Prüf deshalb vorher, was darauf zu erkennen ist." },
        { text: "Poste nichts, was dir später schaden könnte." }
      ] },
      standard: { text: [{ text: "Ein gepostetes Video können viele Menschen sehen und speichern. Prüfe vorher, was darauf zu erkennen ist, und veröffentliche nichts, was dir später unangenehm sein oder schaden könnte." }] }
    },
    "Kommentare": {
      einfach: { text: [
        { text: "Unter Videos gibt es nette, aber auch verletzende Kommentare." },
        { text: "Du musst auf keinen Kommentar antworten." },
        { text: "Bei gemeinen Kommentaren kannst du die Person blockieren oder den Kommentar melden." }
      ] },
      standard: { text: [{ text: "Unter Videos gibt es freundliche, aber auch verletzende Kommentare. Du musst auf keinen reagieren. Bei gemeinen Kommentaren kannst du die Person blockieren oder den Kommentar melden." }] }
    },
    "Gefühle und Pausen": {
      einfach: {
        text: [
          { text: "Manche Videos machen traurig, wütend oder nervös." },
          { text: "Du darfst TikTok jederzeit schließen und eine Pause machen." },
          { text: "Über belastende Gefühle kannst du mit einer vertrauten Person sprechen." }
        ],
        remember: "Ich darf TikTok weglegen."
      },
      standard: {
        text: [{ text: "Manche Videos lösen Traurigkeit, Wut oder Unruhe aus. Du darfst die App jederzeit schließen und eine Pause machen. Über belastende Gefühle kannst du mit einer vertrauten Person sprechen." }],
        remember: "Ich darf TikTok jederzeit weglegen."
      }
    },
    "Nicht jedes Video ist echt": {
      einfach: {
        text: [
          { text: "Viele Videos auf TikTok sind mit KI gemacht und sehen echt aus, sind aber gefälscht." },
          { text: "Sogar Stimmen und Gesichter lassen sich täuschend echt nachmachen." },
          { text: "Mehr dazu lernst du im Thema „Fake News und KI-Fakes“." }
        ],
        remember: "Auch Videos können gefälscht sein."
      },
      standard: {
        text: [{ text: "Viele TikTok-Videos werden mit künstlicher Intelligenz erstellt. Sie wirken echt, sind aber gefälscht – sogar Stimmen und Gesichter lassen sich täuschend echt nachbilden. Mehr dazu erfährst du im Thema „Fake News und KI-Fakes“." }],
        remember: "Auch echt wirkende Videos können gefälscht sein."
      }
    },
    "Was kann ich tun?": {
      einfach: {
        text: [
          { text: "Ob gefährlicher Trend, gemeiner Kommentar oder Stress – halte inne und mach nichts Gefährliches nach." },
          { text: "Gib keine privaten Daten preis und zeig die Nachricht oder das Video einer vertrauten Person." }
        ],
        bullets: ["Nichts Gefährliches nachmachen.", "Keine privaten Daten senden.", "Eine Pause machen.", "Unterstützung holen."],
        warning: "Ein Trend kann gefährlich sein, auch wenn ihn schon viele andere mitgemacht haben.",
        success: "Wenn du eine Pause machst und nichts Gefährliches nachmachst, schützt du dich."
      },
      standard: {
        text: [{ text: "Ob gefährlicher Trend, gemeiner Kommentar oder Stress – halte inne und mach nichts Gefährliches nach. Gib keine privaten Daten preis, mach eine Pause und zeig die Nachricht oder das Video einer Person, der du vertraust." }],
        bullets: [],
        warning: "Die Verbreitung eines Trends sagt nichts über seine Sicherheit aus – viele Mitmachende bedeuten nicht, dass etwas ungefährlich ist.",
        success: "Innezuhalten und riskante Trends nicht nachzumachen ist der zuverlässigste Schutz."
      }
    },
    "Das merke ich mir": {
      einfach: {
        text: [{ text: "Zum Schluss findest du die wichtigsten Regeln aus diesem Thema noch einmal." }],
        bullets: ["Gefährliche Trends nicht nachmachen.", "Pausen machen.", "Private Daten schützen.", "Videos vor dem Posten prüfen."]
      },
      standard: {
        text: [{ text: "Die wichtigsten Punkte dieses Themas im Überblick: Mach gefährliche Trends nicht nach, leg bewusst Pausen ein und schütze deine privaten Daten. Prüfe Videos vor dem Posten und denk daran, dass nicht jedes Video echt ist." }],
        bullets: []
      }
    }
  },

  hilfe: {
    "Start": {
      einfach: { text: [
        { text: "Manchmal passiert im Internet etwas, das sich falsch oder komisch anfühlt, und das ist kein schönes Gefühl." },
        { text: "Dieses Thema zeigt dir: Du bist nicht allein." },
        { text: "Es gibt immer jemanden, der dir helfen kann." }
      ] },
      standard: { text: [{ text: "Manchmal passiert im Internet etwas, das sich falsch oder bedrohlich anfühlt. Das ist unangenehm – aber du musst damit nicht allein bleiben. Dieses Kapitel zeigt dir, wie du in solchen Situationen ruhig vorgehst und wo du Unterstützung findest." }] }
    },
    "Stopp-Regel": {
      einfach: { text: [
        { text: "Wenn dir eine Nachricht Stress oder Angst macht, willst du vielleicht sofort reagieren." },
        { text: "Die Stopp-Regel hilft dir: erst stoppen, dann in Ruhe überlegen." }
      ] },
      standard: { text: [{ text: "Wenn dir eine Nachricht Stress macht, ist der erste Impuls oft, sofort zu reagieren. Die Stopp-Regel hilft dir dabei, das zu vermeiden: Halte zuerst inne und überlege in Ruhe, bevor du etwas tust." }] }
    },
    "Nicht sofort löschen": {
      einfach: { examples: ["Jemand beleidigt dich in einer Nachricht. Du machst zuerst ein Bild vom Bildschirm und zeigst es einer Person, der du vertraust.", "Jemand droht dir. Du löschst die Nachricht nicht sofort, sondern zeigst sie zuerst jemandem, der dir helfen kann."], warning: "Lösche eine gemeine oder bedrohliche Nachricht nicht sofort. Mach vorher ein Bild vom Bildschirm (Screenshot). So kannst du sie später einer Person zeigen, die dir hilft.", text: [
        { text: "Eine gemeine oder komische Nachricht willst du vielleicht sofort löschen." },
        { text: "Manchmal ist es aber wichtig, sie erst aufzubewahren, damit du sie jemandem zeigen kannst." }
      ] },
      standard: { examples: ["Jemand beleidigt dich per Nachricht. Du sicherst sie zuerst mit einem Bildschirmfoto und zeigst sie dann einer Vertrauensperson.", "Du bekommst eine Drohung. Statt sie sofort zu löschen, hebst du sie auf – etwa für eine Beratungsstelle oder die Polizei."], warning: "Lösche belastende oder bedrohliche Nachrichten nicht vorschnell. Sichere sie vorher mit einem Screenshot – so bleibt ein Beleg, den du einer Vertrauensperson oder der Polizei zeigen kannst.", text: [{ text: "Gemeine oder verdächtige Nachrichten möchte man am liebsten sofort löschen. Manchmal ist es aber wichtig, sie zunächst aufzubewahren – als Beweis, um sie einer vertrauten Person oder einer Beratungsstelle zu zeigen." }] }
    },
    "Bild vom Bildschirm": {
      einfach: { text: [
        { text: "Ein Bild vom Bildschirm hilft dir, eine Nachricht später zu zeigen, auch wenn sie verschwindet." },
        { text: "Wenn du nicht weißt, wie das geht, darfst du dir dabei helfen lassen." }
      ] },
      standard: { text: [{ text: "Ein Bildschirmfoto (Screenshot) hält eine Nachricht fest, sodass du sie später zeigen kannst – auch wenn das Original verschwindet. Wenn du nicht weißt, wie das geht, darfst du dir dabei helfen lassen." }] }
    },
    "Stress erkennen": {
      einfach: { examples: ["„Antworte sofort, sonst passiert etwas!“", "„Erzähl das niemandem. Das bleibt unser Geheimnis.“"], warning: "Wenn dich jemand drängt – zum Beispiel „Mach das sofort“ oder „Sag es niemandem“ –, ist das ein Warnzeichen. Lass dich nicht drängen und hol dir Hilfe bei einer Person, der du vertraust.", text: [
        { text: "Wenn jemand sagt: „Mach das sofort“ oder „Erzähl es niemandem“, ist das ein Warnzeichen." },
        { text: "Wer dich drängt oder zur Geheimhaltung auffordert, hat meist nichts Gutes vor." }
      ] },
      standard: { examples: ["„Wenn du nicht in einer Stunde antwortest, hat das Folgen.“", "„Sag niemandem etwas davon – das bleibt unter uns.“"], warning: "Stress ist ein deutliches Warnsignal: Wer verlangt, dass du sofort handelst oder etwas geheim hältst, will dich meist manipulieren. Lass dich nicht drängen und hol dir Unterstützung bei einer Person, der du vertraust.", text: [{ text: "Aufforderungen wie „Mach das sofort“ oder „Erzähl es niemandem“ sind typische Tricks. Wer dich drängt oder zur Geheimhaltung auffordert, hat meist nichts Gutes vor. Solche Sätze sind ein klares Warnzeichen." }] }
    },
    "Angst ernst nehmen": {
      einfach: {
        text: [
          { text: "Wenn dir etwas Angst macht oder du ein komisches Gefühl im Bauch hast, nimm das ernst." },
          { text: "Deine Gefühle sind ein wichtiger Hinweis, und du musst damit nicht allein bleiben." }
        ],
        remember: "Meine Gefühle sind wichtig. Ich darf darüber sprechen."
      },
      standard: {
        text: [{ text: "Wenn dir etwas Angst macht oder du ein ungutes Bauchgefühl hast, nimm das ernst – Gefühle sind oft ein guter Warnhinweis. Du musst damit nicht allein bleiben, sondern darfst darüber sprechen." }],
        remember: "Meine Gefühle sind ein wichtiger Hinweis – ich darf darüber sprechen."
      }
    },
    "Vertraute Personen": {
      einfach: { text: [
        { text: "Bei Problemen im Internet kannst du eine vertraute Person fragen, zum Beispiel Betreuende, Angehörige oder Freunde." },
        { text: "Du musst solche Probleme nicht allein lösen." },
        { text: "Sich Hilfe zu holen ist keine Schwäche, sondern klug." }
      ] },
      standard: { text: [{ text: "Du kannst dich jederzeit an eine vertraute Person wenden – etwa Betreuende, Angehörige oder Freunde. Probleme im Internet musst du nicht allein lösen. Sich Hilfe zu holen ist kein Zeichen von Schwäche, sondern klug." }] }
    },
    "Was kann ich konkret tun?": {
      einfach: {
        text: [
          { text: "Wenn etwas komisch ist, hilft dir ein klarer Plan, bei dem du einen Schritt nach dem anderen gehst." },
          { text: "So musst du nicht alles allein entscheiden." }
        ],
        bullets: ["Stopp machen.", "Nicht sofort antworten.", "Nicht sofort löschen.", "Ein Bild vom Bildschirm machen.", "Die Nachricht zeigen.", "Gemeinsam den nächsten Schritt planen."]
      },
      standard: {
        text: [{ text: "Wenn etwas merkwürdig ist, hilft ein klarer Plan: Geh Schritt für Schritt vor und entscheide nichts überstürzt allein. Stopp machen, nicht sofort antworten oder löschen, die Nachricht sichern und zeigen – und gemeinsam den nächsten Schritt überlegen." }],
        bullets: []
      }
    },
    "Externe Hilfe": {
      einfach: {
        text: [
          { text: "Neben Menschen in deinem Umfeld gibt es auch Beratungs-Stellen und Hilfsangebote." },
          { text: "Eine vertraute Person kann dich dorthin begleiten oder mit dir Kontakt aufnehmen." },
          { text: "Solche Probleme haben viele Menschen – du bist damit nicht allein." }
        ],
        remember: "Es gibt immer jemanden, der helfen kann."
      },
      standard: {
        text: [{ text: "Neben Menschen in deinem Umfeld gibt es Beratungsstellen und Hilfsangebote, an die du dich wenden kannst. Eine vertraute Person kann dich dorthin begleiten oder gemeinsam mit dir Kontakt aufnehmen. Solche Probleme haben viele – du bist damit nicht allein." }],
        remember: "Es gibt immer jemanden, der mir helfen kann."
      }
    },
    "Das merke ich mir": {
      einfach: {
        text: [{ text: "Zum Schluss findest du die wichtigsten Regeln aus diesem Thema noch einmal." }],
        bullets: ["Stopp machen.", "Nicht sofort antworten.", "Nicht sofort löschen.", "Die Nachricht zeigen.", "Unterstützung holen."]
      },
      standard: {
        text: [{ text: "Die wichtigsten Punkte dieses Themas im Überblick: Mach bei Problemen erst einmal Stopp, antworte nicht vorschnell und lösche verdächtige Nachrichten nicht sofort. Zeig sie einer vertrauten Person und hol dir Unterstützung." }],
        bullets: []
      }
    }
  },

  ki: {
    "So prüfst du eine Antwort": {
      einfach: {
        text: [
          { text: "Du kannst eine Antwort von der KI selbst prüfen. Dabei helfen dir 3 Fragen." }
        ],
        bullets: [
          { text: "Woher weiß die KI das?" },
          { text: "Steht das auch woanders?" },
          { text: "Wen kann ich fragen?" }
        ],
        warning: "Bei Geld und Gesundheit fragst du immer einen Menschen, weil ein Fehler dort teuer oder gefährlich wird."
      },
      standard: {
        text: [{ text: "Ob eine KI-Antwort belastbar ist, lässt sich mit drei Fragen klären: Worauf stützt sich die Aussage? Findet sie sich in einer unabhängigen Quelle wieder? Und wen kann ich fragen, wenn ich unsicher bleibe? Sprachmodelle erzeugen flüssigen Text, keine geprüften Fakten – sie können Namen, Zahlen und Quellen erfinden, ohne dass man es dem Text ansieht." }],
        warning: "Bei Geld, Gesundheit und Rechtsfragen ersetzt keine KI die Auskunft eines Menschen."
      }
    },
    "Start": {
      einfach: { text: [
        { text: "Hier geht es um KI, das bedeutet künstliche Intelligenz." },
        { text: "Du lernst, was KI kann und was nicht und wie du sie sicher nutzt." }
      ] },
      standard: { text: [{ text: "In diesem Kapitel geht es um künstliche Intelligenz, kurz KI. Du erfährst, was KI leisten kann und was nicht, wo du ihr begegnest und wie du sie sicher und kritisch nutzt." }] }
    },
    "Was ist KI?": {
      einfach: {
        text: [
          { text: "KI ist ein Computer-Programm, das aus sehr vielen Texten und Bildern gelernt hat." },
          { text: "Dadurch kann sie Fragen beantworten und Texte oder Bilder erstellen." },
          { text: "Sie versteht die Welt aber nicht wie ein Mensch." }
        ],
        bullets: ["KI kann mit dir schreiben.", "KI kann mit dir sprechen.", "KI kann Bilder erstellen.", "KI kann Texte schreiben."],
        remember: "KI ist ein Programm. KI ist kein Mensch."
      },
      standard: {
        text: [{ text: "KI ist ein Computerprogramm, das aus sehr großen Mengen an Texten und Bildern gelernt hat. Dadurch kann sie Fragen beantworten sowie selbst Texte und Bilder erzeugen. Sie versteht die Welt aber nicht wie ein Mensch, sondern berechnet wahrscheinliche Antworten." }],
        bullets: [],
        remember: "KI ist ein lernendes Programm – kein Mensch."
      }
    },
    "Wo triffst du KI?": {
      einfach: {
        text: [
          { text: "KI steckt heute in vielen Apps, oft ohne dass du es sofort merkst." },
          { text: "Hier sind ein paar bekannte Beispiele." }
        ],
        bullets: ["Chatbots wie ChatGPT", "Sprach-Hilfen wie Alexa oder Siri", "KI in WhatsApp und Instagram, zum Beispiel Meta AI", "KI-Bilder und KI-Videos im Internet"],
        remember: "KI steckt in vielen Apps – auch wenn ich sie nicht sehe."
      },
      standard: {
        text: [{ text: "Künstliche Intelligenz steckt heute in vielen Programmen und Apps, oft ohne dass man es sofort merkt – etwa in Chatbots wie ChatGPT, in Sprachassistenten wie Alexa oder Siri, in WhatsApp und Instagram sowie in KI-erzeugten Bildern und Videos." }],
        bullets: [],
        remember: "KI ist vielerorts im Einsatz – auch unsichtbar."
      }
    },
    "Ein Chatbot ist kein Mensch": {
      einfach: {
        text: [
          { text: "Ein Chatbot schreibt sehr freundlich, sodass es sich fast wie ein Freund anfühlen kann." },
          { text: "Trotzdem ist er nur ein Programm und hat keine echten Gefühle." }
        ],
        warning: "Ein Chatbot ist kein echter Freund. Wichtige Sorgen besprichst du mit einem Menschen."
      },
      standard: {
        text: [{ text: "Chatbots antworten freundlich und persönlich, sodass sich ein Gespräch fast wie mit einem Freund anfühlen kann. Trotzdem ist ein Chatbot nur ein Programm ohne echte Gefühle. Wichtige Sorgen solltest du mit einem Menschen besprechen." }],
        warning: "Ein Chatbot ersetzt keine echten Bezugspersonen. Bei ernsten Sorgen wende dich an einen Menschen."
      }
    },
    "KI macht Fehler": {
      einfach: {
        text: [
          { text: "KI klingt oft sehr sicher, kann sich aber irren und manchmal sogar Dinge erfinden." },
          { text: "Prüfe wichtige Antworten deshalb lieber an einer zweiten Stelle." }
        ],
        examples: ["Die KI nennt eine falsche Telefon-Nummer.", "Die KI erzählt etwas, das nie passiert ist."]
      },
      standard: {
        text: [{ text: "Auch wenn KI sehr überzeugend klingt, kann sie sich irren – und erfindet manchmal sogar Fakten, Namen oder Quellen. Verlass dich bei wichtigen Dingen nicht blind auf sie, sondern prüfe die Antworten an einer zweiten Stelle." }],
        examples: ["Die KI nennt dir eine Telefonnummer, die es gar nicht gibt.", "Die KI beschreibt ein Ereignis, das nie stattgefunden hat – und klingt dabei völlig überzeugend."]
      }
    },
    "Keine privaten Daten": {
      einfach: {
        text: [
          { text: "Die KI speichert oft, was du ihr schreibst." },
          { text: "Gib der KI deshalb keine privaten Daten." }
        ],
        bullets: ["kein Passwort", "keine Adresse", "keine Bank-Daten", "keine sehr privaten Geheimnisse"]
      },
      standard: {
        text: [{ text: "Eingaben an eine KI werden häufig gespeichert und weiterverarbeitet. Gib deshalb keine sensiblen Informationen ein – etwa Passwörter, deine Adresse, Bankdaten oder sehr private Geheimnisse." }],
        bullets: []
      }
    },
    "Gesundheit und Geld": {
      einfach: {
        text: [
          { text: "Bei Gesundheit und Geld ist Vorsicht wichtig, denn die KI kennt deine Situation nicht und kann falsche Tipps geben." },
          { text: "Frag bei solchen Themen deshalb immer auch einen Menschen." }
        ],
        examples: ["Du bist krank und fragst die KI. Besser: Du fragst auch eine Ärztin oder einen Arzt.", "Du willst Geld ausgeben und die KI rät dir etwas. Besser: Du fragst eine Person, der du vertraust."]
      },
      standard: {
        text: [{ text: "Bei Gesundheit und Geld ist besondere Vorsicht geboten: Die KI kennt deine persönliche Situation nicht und kann falsche oder gefährliche Ratschläge geben. Hol dir bei solchen Themen immer zusätzlich den Rat eines Menschen – etwa einer Ärztin, eines Arztes oder einer Vertrauensperson." }],
        examples: ["Du fühlst dich krank und fragst eine KI. Ihre Antwort ersetzt keine Ärztin und keinen Arzt.", "Eine KI empfiehlt dir eine Geldanlage. Bevor du etwas bezahlst oder unterschreibst, sprich mit einer Person, der du vertraust."]
      }
    },
    "KI kann Bilder und Stimmen fälschen": {
      einfach: {
        text: [
          { text: "KI kann Bilder erstellen, die echt aussehen, und sogar Stimmen nachmachen." },
          { text: "Betrüger nutzen das manchmal aus." },
          { text: "Wenn du unsicher bist, frag eine Person, der du vertraust." },
          { text: "Mehr dazu lernst du im Thema „Fake News und KI-Fakes“." }
        ],
        warning: "Nicht alles, was echt aussieht, ist echt. Nachfragen ist erlaubt und klug."
      },
      standard: {
        text: [{ text: "Mit KI lassen sich Bilder erzeugen und Stimmen nachahmen, die täuschend echt wirken. Betrüger nutzen das aus, etwa für gefälschte Anrufe oder Sprachnachrichten. Du musst das nicht allein einschätzen – bei Unsicherheit lohnt sich die Rückfrage bei einer Person, der du vertraust. Mehr dazu erfährst du im Thema „Fake News und KI-Fakes“." }],
        warning: "Echt wirkende Bilder und Stimmen können mit KI gefälscht sein. Nachfragen ist erlaubt und klug."
      }
    },
    "Was kann ich tun?": {
      einfach: {
        text: [
          { text: "Du darfst KI ruhig benutzen, denn sie kann dir bei vielem helfen." },
          { text: "Damit du dabei sicher bist, helfen dir die folgenden Regeln." }
        ],
        bullets: ["Ich weiß: KI ist ein Programm.", "Ich prüfe wichtige Antworten.", "Ich gebe keine privaten Daten ein.", "Bei Gesundheit und Geld frage ich Menschen.", "Bei Unsicherheit hole ich Hilfe."],
        warning: "Eine KI kann sich irren, auch wenn die Antwort sehr sicher klingt.",
        success: "Wenn du wichtige Antworten prüfst, schützt du dich vor Fehlern."
      },
      standard: {
        text: [{ text: "Du darfst KI ruhig nutzen – sie kann dir bei vielem helfen. Behalte dabei einige Regeln im Kopf: Denk daran, dass KI ein Programm ist, prüfe wichtige Antworten, gib keine privaten Daten ein, frag bei Gesundheit und Geld zusätzlich Menschen und hol dir bei Unsicherheit Unterstützung." }],
        bullets: [],
        warning: "KI-Antworten können überzeugend klingen und trotzdem falsch sein – der sichere Tonfall ist kein Beleg für Richtigkeit.",
        success: "Wichtige KI-Antworten zusätzlich zu prüfen bewahrt dich vor folgenschweren Fehlern."
      }
    },
    "Das merke ich mir": {
      einfach: {
        text: [{ text: "Du hast viel über KI gelernt – diese Sätze kannst du dir gut merken." }],
        bullets: ["KI ist ein Programm, kein Mensch.", "KI kann Fehler machen.", "Ich prüfe wichtige Antworten.", "Private Daten bleiben bei mir.", "Ich darf mir Unterstützung holen."],
        remember: "Ich nutze KI mit Verstand."
      },
      standard: {
        text: [{ text: "Die wichtigsten Punkte dieses Themas im Überblick: KI ist ein Programm, kein Mensch, und kann Fehler machen. Prüfe wichtige Antworten, behalte deine privaten Daten für dich und hol dir bei Bedarf Unterstützung." }],
        bullets: [],
        remember: "Ich nutze KI bewusst und mit Verstand."
      }
    }
  },

  fakes: {
    "Start": {
      einfach: { text: [
        { text: "Hier geht es um Fakes – Fake bedeutet gefälscht oder nicht echt." },
        { text: "Du lernst, wie du falsche Nachrichten und auch falsche Bilder oder Stimmen erkennst." },
        { text: "Wenn dich ein Beispiel belastet, kannst du jederzeit eine Pause machen." }
      ] },
      standard: { text: [{ text: "In diesem Kapitel geht es um Fakes – also um Gefälschtes im Internet. Du erfährst, wie du falsche Nachrichten erkennst und wie du gefälschte Bilder, Videos und Stimmen einordnest. Wenn dich ein Beispiel belastet, mach ruhig eine Pause." }] }
    },
    "Was sind Fake News?": {
      einfach: {
        text: [
          { text: "Fake News sind falsche Nachrichten, die jemand mit Absicht verbreitet." },
          { text: "Sie sehen oft aus wie echte Nachrichten und sind deshalb schwer zu erkennen." }
        ],
        remember: "Nicht jede Nachricht im Internet ist wahr."
      },
      standard: {
        text: [{ text: "Fake News sind absichtlich verbreitete Falschmeldungen. Sie sind oft so aufgemacht wie echte Nachrichten und deshalb schwer zu erkennen. Genau das macht sie gefährlich." }],
        remember: "Nicht jede Nachricht im Internet ist wahr."
      }
    },
    "Warum gibt es Fake News?": {
      einfach: {
        text: [{ text: "Menschen machen Fake News aus verschiedenen Gründen, denn sie verfolgen damit immer ein bestimmtes Ziel." }],
        bullets: ["Sie wollen mit vielen Aufrufen Geld verdienen.", "Sie wollen Menschen wütend machen.", "Sie wollen, dass du etwas Falsches glaubst.", "Sie wollen eine Meinung verbreiten."],
        remember: "Fake News haben ein Ziel. Sie wollen mein Denken verändern."
      },
      standard: {
        text: [{ text: "Hinter Fake News stecken meist klare Absichten: Manche wollen mit vielen Aufrufen Geld verdienen, andere Menschen verärgern, etwas Falsches glaubhaft machen oder eine bestimmte Meinung verbreiten." }],
        bullets: [],
        remember: "Fake News verfolgen ein Ziel – sie wollen mein Denken beeinflussen."
      }
    },
    "KI-Bilder erkennen": {
      einfach: {
        text: [
          { text: "KI kann Bilder erstellen, die echt aussehen." },
          { text: "Manche Fehler kannst du erkennen, aber Achtung: Viele KI-Bilder haben gar keine Fehler mehr." }
        ],
        bullets: ["Schau auf Hände und Finger.", "Schau auf Schrift im Bild.", "Schau auf Licht und Schatten.", "Wirkt das Bild zu perfekt?"]
      },
      standard: {
        text: [{ text: "KI kann Bilder erzeugen, die täuschend echt wirken. Manchmal verraten kleine Fehler die Fälschung – etwa an Händen, Schrift oder Schatten. Verlass dich aber nicht darauf: Viele KI-Bilder sind inzwischen fehlerfrei." }],
        bullets: []
      }
    },
    "Gefälschte Videos: Deepfakes": {
      einfach: {
        text: [
          { text: "Ein Deepfake ist ein gefälschtes Video, in dem KI Gesicht oder Stimme austauscht." },
          { text: "So scheint eine Person etwas zu sagen, das sie nie gesagt hat – oft trifft es bekannte Menschen." }
        ],
        examples: ["Ein Video zeigt einen Promi, der Werbung für Geld-Anlagen macht. Das Video ist gefälscht.", "Ein Video zeigt eine Politikerin, die etwas Schlimmes sagt. Das Video ist gefälscht."]
      },
      standard: {
        text: [{ text: "Ein Deepfake ist ein mit KI gefälschtes Video, in dem Gesicht oder Stimme ausgetauscht werden. So scheint eine Person etwas zu sagen, das sie nie gesagt hat – oft trifft es bekannte Persönlichkeiten. Bleib deshalb auch bei „Video-Beweisen“ kritisch." }],
        examples: ["Ein Video zeigt einen bekannten Moderator, der für eine Geldanlage wirbt – das Video ist mit KI gefälscht.", "Ein Video zeigt eine Politikerin, die etwas Schockierendes sagt – auch dieses Video ist gefälscht."]
      }
    },
    "Geklonte Stimmen am Telefon": {
      einfach: {
        text: [
          { text: "KI kann Stimmen nachmachen, und Betrüger rufen damit an, sodass die Stimme wie deine Familie klingt." },
          { text: "Die Stimme sagt dann zum Beispiel: „Ich brauche schnell Geld“ – das nennt man Schockanruf." }
        ],
        warning: "Leg auf. Ruf die Person selbst an – mit der Nummer, die du kennst."
      },
      standard: {
        text: [{ text: "KI kann Stimmen täuschend echt nachahmen. Betrüger nutzen das für sogenannte Schockanrufe: Eine vertraut klingende Stimme bittet dringend um Geld. Lass dich nicht drängen, leg auf und ruf die Person über ihre dir bekannte Nummer selbst zurück." }],
        warning: "Bei dringenden Geldforderungen am Telefon: auflegen und die Person über die bekannte Nummer selbst anrufen."
      }
    },
    "Nachrichten prüfen": {
      einfach: {
        text: [
          { text: "Du kannst eine Nachricht mit ein paar einfachen Fragen prüfen." },
          { text: "Diese Fragen helfen dir dabei." }
        ],
        bullets: ["Wer hat das geschrieben?", "Steht das auch bei bekannten Nachrichten-Seiten?", "Wie alt ist die Nachricht?", "Gibt es eine Quelle?"]
      },
      standard: {
        text: [{ text: "Du kannst Meldungen mit ein paar einfachen Fragen prüfen: Wer hat sie verfasst? Berichten auch bekannte, seriöse Nachrichtenseiten darüber? Wie aktuell ist die Meldung, und wird eine Quelle genannt?" }],
        bullets: []
      }
    },
    "Die Nachricht will dich aufregen": {
      einfach: { warning: "Deine Gefühle sind richtig. Aber Fake News lösen mit Absicht Wut oder Angst aus – genau das ist der Trick. Prüfe eine Nachricht erst, bevor du sie glaubst oder teilst.", text: [
        { text: "Fake News lösen oft starke Gefühle wie Wut oder Angst aus, denn wer aufgewühlt ist, prüft weniger." },
        { text: "Deine Gefühle sind dabei richtig – aufregen soll dich die Nachricht, und genau das ist die Absicht." },
        { text: "Wenn dich eine Nachricht stark aufregt, lohnt sich das Prüfen besonders." }
      ] },
      standard: { warning: "Deine Gefühle sind eine richtige Reaktion – aber Fake News lösen Wut oder Angst gezielt aus. Genau darin liegt die Absicht. Prüfe eine solche Nachricht in Ruhe, bevor du sie glaubst oder weiterleitest.", text: [{ text: "Fake News sind oft so gemacht, dass sie starke Gefühle wie Wut oder Angst auslösen – denn wer aufgewühlt ist, prüft weniger. Deine Reaktion ist dabei nicht das Problem: Die Meldung ist bewusst darauf angelegt. Genau deshalb gilt: Wenn dich etwas stark aufregt, prüfe es besonders gründlich." }] }
    },
    "Nicht einfach weiterleiten": {
      einfach: { text: [
        { text: "Wenn du Fakes weiterleitest, verbreiten sie sich, und noch mehr Menschen glauben die Lüge." },
        { text: "Darum gilt: erst prüfen, dann teilen – und im Zweifel lieber nicht teilen." }
      ] },
      standard: { text: [{ text: "Jede Weiterleitung hilft einer Falschmeldung, sich zu verbreiten – und mehr Menschen glauben sie. Teile deshalb nur, was du geprüft hast. Im Zweifel gilt: lieber nicht weiterleiten." }] }
    },
    "Was kann ich tun?": {
      einfach: {
        text: [
          { text: "Du kannst dich gut vor Fakes schützen." },
          { text: "Die folgenden Regeln helfen dir dabei." }
        ],
        bullets: ["Ich glaube nicht alles sofort.", "Ich prüfe: Wer schreibt das? Steht das auch woanders?", "Bei starken Gefühlen mache ich langsam.", "Im Zweifel teile ich nicht.", "Ich kann eine Person fragen, der ich vertraue."],
        warning: "Wenn eine Nachricht starke Gefühle wie Angst oder Wut in dir auslöst, willst du sie oft schnell teilen. Genau dann ist besondere Vorsicht wichtig.",
        success: "Wenn du im Zweifel nicht teilst, schützt du dich und andere Menschen."
      },
      standard: {
        text: [{ text: "Du kannst dich gut schützen: Glaub nicht alles sofort, prüfe Absender und ob seriöse Quellen dasselbe berichten, und werde besonders aufmerksam, wenn eine Meldung starke Gefühle auslöst. Teile im Zweifel nicht und frag bei Unsicherheit eine Person, der du vertraust." }],
        bullets: [],
        warning: "Nachrichten, die starke Gefühle wie Angst oder Empörung auslösen, verleiten dazu, sie ungeprüft weiterzuleiten – genau das machen sich Falschmeldungen gezielt zunutze.",
        success: "Im Zweifel nicht zu teilen schützt nicht nur dich, sondern verhindert auch, dass sich Falschmeldungen weiter verbreiten."
      }
    },
    "Das merke ich mir": {
      einfach: {
        text: [{ text: "Du hast viel über Fakes gelernt – diese Sätze kannst du dir gut merken." }],
        bullets: ["Nicht alles im Internet ist wahr.", "Bilder, Videos und Stimmen können gefälscht sein.", "Aufregende Nachrichten prüfe ich erst.", "Erst prüfen, dann teilen.", "Ich darf mir Unterstützung holen."],
        remember: "Erst prüfen. Dann glauben."
      },
      standard: {
        text: [{ text: "Die wichtigsten Punkte dieses Themas im Überblick: Nicht alles im Internet ist wahr, und auch Bilder, Videos und Stimmen lassen sich fälschen. Was dich stark aufregt, prüfst du zuerst – erst prüfen, dann teilen. Bei Unsicherheit darfst du dir Unterstützung holen." }],
        bullets: [],
        remember: "Erst prüfen, dann glauben."
      }
    }
  },

  betrug: {
    "Was kann ich tun?": {
      einfach: {
        text: [
          { text: "Betrug kommt fast immer überraschend – als Nachricht, die dir Stress macht, oder als Anruf, der Angst macht." },
          { text: "Ein fester Plan hilft dir, ruhig zu bleiben. Denn wer ruhig bleibt, macht keinen Fehler." }
        ],
        bullets: [
          { text: "Bei Stress mache ich Stopp." },
          { text: "Ich zahle niemals sofort." },
          { text: "Ich rufe selbst an – mit der Nummer, die ich schon habe." },
          { text: "Ich lese genau nach, was etwas kostet." },
          { text: "Ich frage eine Person, der ich vertraue." }
        ],
        warning: "Keine echte Bank und keine echte Behörde fragt am Telefon nach deinem Passwort oder verlangt, dass du sofort zahlst.",
        success: "Mit einem festen Plan bleibst du ruhig – und genau das schützt dich."
      },
      standard: {
        text: [{ text: "Betrugsmaschen funktionieren über Eile: Wer sofort handeln soll, denkt nicht nach. Ein eingeübter Ablauf nimmt diesem Stress seine Wirkung, weil er die Entscheidung aus dem Moment herausnimmt. Er wirkt auch dann, wenn die Masche neu ist und du sie noch nie gehört hast." }],
        bullets: [
          { text: "Bei Stress grundsätzlich anhalten – Eile ist das Warnzeichen, nicht der Inhalt." },
          { text: "Niemals sofort zahlen, überweisen oder Gutscheincodes durchgeben." },
          { text: "Selbst zurückrufen, und zwar über die Nummer, die du schon kennst – nie über die aus der Nachricht." },
          { text: "Bei Angeboten das Kleingedruckte lesen: Was kostet es, ab wann, und wie kündigt man?" },
          { text: "Eine zweite Meinung einholen. Maschen funktionieren fast nur, solange niemand sonst davon weiß." }
        ],
        warning: "Weder Banken noch Behörden fordern am Telefon Passwörter, TANs oder sofortige Zahlungen. Jede solche Forderung ist ein Betrugsversuch – ausnahmslos.",
        success: "Ein eingeübter Ablauf schützt besser als Misstrauen im Einzelfall: Er greift auch bei Maschen, die du noch nicht kennst."
      }
    },
    "Vorsicht bei QR-Codes": {
      einfach: {
        text: [
          { text: "Ein QR-Code ist wie eine Tür: Du siehst vorher nicht, wohin sie führt." },
          { text: "Betrüger überkleben echte QR-Codes mit falschen. Zum Beispiel an Park-Automaten oder in Briefen." },
          { text: "Scanne nur Codes aus einer Quelle, der du vertraust. Im Zweifel fragst du vorher eine vertraute Person." }
        ],
        warning: "Ein falscher QR-Code kann auf eine Betrugs-Seite führen. Erst prüfen, dann scannen."
      },
      standard: {
        text: [{ text: "QR-Codes zeigen erst nach dem Scannen, wohin sie führen. Kriminelle nutzen das aus und überkleben echte Codes mit gefälschten – etwa an Parkautomaten, in Briefen oder auf falschen Paket-Benachrichtigungen (sogenanntes Quishing). Scanne nur Codes aus vertrauenswürdiger Quelle und prüfe die geöffnete Internet-Adresse, bevor du dort etwas eingibst." }],
        warning: "Quishing nimmt stark zu. Prüfe die Ziel-Adresse eines QR-Codes, bevor du Daten eingibst."
      }
    },
    "Start": {
      einfach: { text: [
        { text: "Hier geht es um Betrug im Internet, denn Betrüger wollen dein Geld oder deine Daten." },
        { text: "Betrug kann jedem Menschen passieren und ist nie deine Schuld." },
        { text: "Du lernst die bekannten Tricks, denn wer sie kennt, ist besser geschützt." },
        { text: "Wenn dich ein Beispiel belastet, kannst du jederzeit eine Pause machen." }
      ] },
      standard: { text: [{ text: "In diesem Kapitel geht es um Betrug im Internet. Vorweg das Wichtigste: Betrug kann jedem passieren und ist nie die Schuld der betroffenen Person. Betrüger haben es auf dein Geld oder deine Daten abgesehen. Du lernst die häufigsten Maschen kennen – denn wer die Tricks kennt, fällt seltener darauf herein. Wenn dich ein Beispiel belastet, mach ruhig eine Pause." }] }
    },
    "Was ist Phishing?": {
      einfach: {
        text: [
          { text: "Phishing ist ein Trick mit falschen Nachrichten, die aussehen wie von deiner Bank oder einer Firma." },
          { text: "In der Nachricht steckt ein Link, der zu einer falschen Seite führt und deine Daten stehlen will." }
        ],
        examples: ["Eine E-Mail sagt: „Ihr Konto wird gesperrt. Klicken Sie hier.“", "Eine SMS sagt: „Bestätigen Sie Ihre Bank-Daten.“"]
      },
      standard: {
        text: [{ text: "Beim Phishing verschicken Betrüger Nachrichten, die täuschend echt aussehen – etwa angeblich von deiner Bank oder einem bekannten Unternehmen. Über einen Link wirst du auf eine gefälschte Seite gelockt, die deine Zugangsdaten abgreifen soll. Gib dort nichts ein." }],
        examples: ["Eine E-Mail warnt: „Ihr Konto wird gesperrt. Klicken Sie hier, um es zu entsperren.“", "Eine SMS fordert dich auf, deine Bankdaten zu bestätigen: „Bitte bestätigen Sie jetzt Ihre Daten.“"]
      }
    },
    "Falsche Nachrichten erkennen": {
      einfach: {
        text: [
          { text: "Betrugs-Nachrichten haben oft die gleichen Merkmale, die du erkennen lernen kannst." },
          { text: "Die folgenden Warnzeichen helfen dir dabei." }
        ],
        bullets: ["Die Nachricht drängt: „Sofort! Schnell! Letzte Chance!“", "Die Nachricht droht: „Sonst wird Ihr Konto gesperrt.“", "Du sollst auf einen Link tippen.", "Du sollst Daten eingeben oder Geld zahlen.", "Die Nachricht kommt überraschend."],
        remember: "Stress und Drohung sind Warnzeichen."
      },
      standard: {
        text: [{ text: "Betrugsnachrichten ähneln sich oft: Sie erzeugen Stress oder drohen mit Folgen, fordern dich auf, einen Link anzutippen, verlangen Daten oder Geld – und kommen meist überraschend. Wer diese Muster kennt, erkennt den Betrug leichter." }],
        bullets: [],
        remember: "Stress und Drohung sind typische Warnzeichen für Betrug."
      }
    },
    "Der Paket-Trick": {
      einfach: {
        text: [
          { text: "Eine SMS behauptet: „Ihr Paket wartet“, und du sollst eine kleine Gebühr zahlen oder auf einen Link tippen." },
          { text: "Das ist fast immer Betrug." }
        ],
        warning: "Echte Paket-Dienste fordern kein Geld per SMS."
      },
      standard: {
        text: [{ text: "Eine beliebte Masche ist die Paket-SMS: Angeblich wartet eine Sendung, du sollst eine kleine Gebühr zahlen oder einen Link antippen. Dahinter steckt fast immer Betrug. Seriöse Paketdienste fordern kein Geld per SMS." }],
        warning: "Echte Paketdienste verlangen niemals Gebühren per SMS-Link."
      }
    },
    "Der Hallo-Mama-Trick": {
      einfach: { text: [
        { text: "Eine WhatsApp-Nachricht sagt: „Hallo Mama, ich habe eine neue Nummer und brauche schnell Geld.“" },
        { text: "Das ist ein bekannter Betrug, also überweise nichts und ruf die echte Person an." }
      ] },
      standard: { text: [{ text: "Beim „Hallo-Mama-Trick“ geben sich Betrüger über WhatsApp als Sohn oder Tochter mit neuer Nummer aus und bitten dringend um Geld. Überweise nichts, sondern ruf die echte Person unter ihrer bekannten Nummer an." }] }
    },
    "Liebe im Internet": {
      "einfach": {
        "text": [
          {
            "text": "Viele Menschen suchen Liebe im Internet, und das ist in Ordnung."
          },
          {
            "text": "Manche Menschen lügen dabei aber: Eine fremde Person schreibt dir sehr oft liebe Worte, doch ihr trefft euch nie."
          },
          {
            "text": "Irgendwann bittet die Person um Geld, zum Beispiel für eine Reise oder für einen Notfall."
          },
          {
            "text": "Fotos und Stimmen können mit KI gefälscht sein. Auch ein Video ist kein Beweis."
          },
          {
            "text": "Du musst das nicht allein entscheiden. Sprich mit einer Person, der du vertraust."
          }
        ],
        "bullets": [
          "Ich schicke kein Geld.",
          "Ich spreche mit einer Person, der ich vertraue.",
          "Ich kann den Kontakt blockieren.",
          "Ich kann Anzeige bei der Polizei machen."
        ],
        "examples": [
          "„Ich liebe dich“ – obwohl ihr euch noch nie gesehen habt.",
          "„Ich brauche Geld für das Flugticket, dann besuche ich dich endlich.“"
        ],
        "warning": "Wenn eine fremde Person um Geld bittet und ihr euch noch nie getroffen habt, schick kein Geld. Sprich zuerst mit einer Person, der du vertraust.",
        "success": "Betrug kann jedem passieren. Du musst dich nicht schämen.",
        "remember": "Ich schicke kein Geld an Menschen, die ich nur aus dem Internet kenne."
      },
      "standard": {
        "text": [
          {
            "text": "Beim Liebes-Betrug (Romance Scamming) bauen Betrüger über Wochen oder Monate eine Beziehung auf – über Dating-Portale oder soziale Netzwerke. Ein Treffen kommt immer wieder nicht zustande."
          },
          {
            "text": "Irgendwann folgt die Bitte um Geld: für ein Ticket, eine Notlage, eine angeblich sichere Geldanlage. Danach folgen weitere Bitten."
          },
          {
            "text": "Profilbilder, Sprachnachrichten und sogar Videos lassen sich mit KI fälschen. Sie sind kein Beweis dafür, dass jemand echt ist."
          },
          {
            "text": "Die wichtigste Regel: kein Geld an Menschen, die du nur aus dem Internet kennst. Und: Du musst das nicht allein entscheiden – sprich mit einer Vertrauensperson, bevor du etwas überweist."
          }
        ],
        "bullets": [
          "Kein Geld überweisen, auch nicht in kleinen Beträgen.",
          "Mit einer Vertrauensperson sprechen, bevor du etwas tust.",
          "Den Kontakt blockieren und melden.",
          "Chat-Verläufe sichern und Anzeige bei der Polizei erstatten."
        ],
        "examples": [
          "„Ich liebe dich“ nach wenigen Tagen – ein persönliches Treffen platzt immer wieder.",
          "„Ich brauche Geld für das Flugticket, dann können wir uns endlich sehen.“"
        ],
        "warning": "Wer dich noch nie getroffen hat und um Geld bittet, ist mit hoher Wahrscheinlichkeit ein Betrüger. Überweise nichts und hol dir vorher eine zweite Meinung bei einer Vertrauensperson.",
        "success": "Liebes-Betrug trifft viele Menschen, auch vorsichtige. Scham ist unangebracht – schnelles Handeln zählt.",
        "remember": "Kein Geld an Menschen, die ich nur aus dem Internet kenne – und vorher mit einer Vertrauensperson sprechen."
      }
    },
    "Schockanrufe": {
      einfach: {
        text: [
          { text: "Bei einem Schockanruf macht dir jemand große Angst, zum Beispiel mit den Worten: „Ihr Kind hatte einen Unfall, wir brauchen Geld.“" },
          { text: "Mit KI kann die Stimme sogar echt klingen, und manche geben sich als Polizei aus." },
          { text: "Solche Anrufe sind ein Trick – der Notfall ist erfunden." },
          { text: "Sprich danach mit einer vertrauten Person darüber." }
        ],
        remember: "Bei Angst-Anrufen lege ich auf und rufe selbst zurück.",
        warning: "Leg auf und ruf die Person selbst an, unter der Nummer, die du kennst. Die echte Polizei fordert nie Geld am Telefon."
      },
      standard: {
        text: [{ text: "Bei Schockanrufen erzeugen Betrüger gezielt Angst – etwa mit der Behauptung, ein Angehöriger hatte einen Unfall und brauche sofort Geld. Mit KI kann die Stimme sogar vertraut klingen, und manche geben sich als Polizei aus. Der Notfall ist erfunden: Leg auf und ruf die echte Person oder Stelle selbst an, unter der Nummer, die du kennst. Sprich danach mit jemandem darüber – solche Anrufe wirken nach." }],
        remember: "Bei Angst-Anrufen lege ich auf und rufe selbst zurück.",
        warning: "Polizei und Behörden verlangen niemals Geld oder Wertsachen am Telefon."
      }
    },
    "Falsche Gewinne": {
      einfach: { text: [
        { text: "Eine Nachricht sagt: „Sie haben gewonnen!“, obwohl du bei keinem Gewinnspiel mitgemacht hast." },
        { text: "Du sollst zuerst eine Gebühr zahlen – das ist Betrug, denn echte Gewinne kosten kein Geld." }
      ] },
      standard: { text: [{ text: "Nachrichten über angebliche Gewinne sind oft Betrug – vor allem, wenn du gar nicht an einem Gewinnspiel teilgenommen hast. Sobald du für den „Gewinn“ zuerst zahlen sollst, ist klar: Echte Gewinne kosten kein Geld." }] }
    },
    "Abo-Fallen": {
      einfach: {
        text: [
          { text: "Ein Angebot lockt mit „Kostenlos testen!“, doch im Kleingedruckten steht, dass es danach jeden Monat Geld kostet." },
          { text: "Das nennt man Abo-Falle, deshalb lies genau, bevor du etwas bestellst." }
        ],
        bullets: ["Steht da ein Preis pro Monat?", "Wie lange läuft das Abo?", "Frag eine Person, bevor du bestellst."],
        remember: "Kostenlos kann teuer werden. Ich lese genau."
      },
      standard: {
        text: [{ text: "Bei Abo-Fallen lockt ein „kostenloser Test“, doch im Kleingedruckten verbirgt sich eine monatliche Zahlung. Lies vor jeder Bestellung genau nach: Gibt es einen monatlichen Preis, wie lange läuft der Vertrag? Im Zweifel frag jemanden, bevor du bestellst." }],
        bullets: [],
        remember: "„Kostenlos“ kann teuer werden – ich lese das Kleingedruckte."
      }
    },
    "Codes nie weitergeben": {
      einfach: { text: [
        { text: "Manchmal bekommst du einen Code per SMS, zum Beispiel von der Bank oder von WhatsApp." },
        { text: "Dieser Code ist nur für dich, und Betrüger fragen danach." },
        { text: "Gib ihn deshalb niemals weiter." },
        { text: "Betrüger rufen auch an und geben sich als Bank oder als Computer-Service aus. Echte Firmen fragen nie nach deinem Code." }
      ],
      warning: "Leg auf und ruf die Firma selbst an – unter der Nummer, die du kennst.",
      examples: ["„Ich bin von Ihrer Bank. Sagen Sie mir bitte den Code aus der SMS.“", "„Ihr Computer ist kaputt. Lassen Sie mich aus der Ferne darauf zugreifen.“"] },
      standard: { text: [{ text: "Bestätigungscodes per SMS – etwa von der Bank oder von WhatsApp – sind nur für dich bestimmt. Betrüger versuchen, an sie zu gelangen, um dein Konto zu übernehmen. Gib einen solchen Code niemals weiter. Häufig kommt so ein Versuch per Anruf: Jemand gibt sich als Bank-Mitarbeiterin oder als technischer Kundenservice aus und will den Code oder Zugriff auf deinen Computer. Seriöse Unternehmen fragen so etwas nie." }], warning: "Leg auf und ruf das Unternehmen selbst zurück – über die Nummer, die du kennst, nicht über die aus dem Anruf.", examples: ["„Ich bin von Ihrer Bank. Bitte nennen Sie mir den Code aus der SMS.“", "„Ihr Computer ist kaputt. Lassen Sie mich per Fernwartung darauf zugreifen.“"] }
    },
    "Was tun nach einem Betrug?": {
      einfach: {
        text: [
          { text: "Betrug kann jedem passieren, und du musst dich dafür nicht schämen." },
          { text: "Wichtig ist, dass du dir schnell Hilfe holst." }
        ],
        bullets: ["Sag einer Person Bescheid, der du vertraust.", "Bei Bank-Daten: Ruf sofort die Bank an und lass die Karte sperren.", "Der Sperr-Notruf ist die 116 116.", "Du kannst Anzeige bei der Polizei machen.", "Heb die Nachricht als Beweis auf."],
        remember: "Betrug ist nicht meine Schuld. Ich hole mir Hilfe."
      },
      standard: {
        text: [{ text: "Betrug kann jedem passieren – dafür musst du dich nicht schämen. Wichtig ist schnelles Handeln: Informiere eine Vertrauensperson, lass bei betroffenen Bankdaten sofort die Karte sperren (Sperr-Notruf 116 116), erstatte gegebenenfalls Anzeige bei der Polizei und bewahre die Nachricht als Beweis auf." }],
        bullets: [],
        remember: "Betrug ist nicht meine Schuld – ich hole mir schnell Hilfe."
      }
    },
    "Das merke ich mir": {
      einfach: {
        text: [{ text: "Du kennst jetzt die wichtigsten Tricks – diese Sätze kannst du dir gut merken." }],
        bullets: ["Stress und Drohung sind Warnzeichen.", "Ich tippe nicht auf fremde Links.", "Ich gebe nie Codes oder Bank-Daten weiter.", "Echte Gewinne kosten kein Geld.", "Bei Geld-Forderungen rufe ich selbst zurück.", "Nach einem Betrug hole ich mir sofort Hilfe."],
        remember: "Ich lasse mich nicht drängen."
      },
      standard: {
        text: [{ text: "Die wichtigsten Punkte dieses Themas im Überblick: Stress und Drohungen sind Warnzeichen. Tippe nicht auf fremde Links und gib niemals Codes oder Bankdaten weiter. Echte Gewinne kosten nichts, bei Geldforderungen rufst du selbst zurück, und nach einem Betrug holst du dir sofort Hilfe." }],
        bullets: [],
        remember: "Ich lasse mich nicht drängen."
      }
    }
  },

  einkaufen: {
    "Start": {
      einfach: { text: [
        { text: "Hier geht es um Einkaufen im Internet." },
        { text: "Du lernst, wie du gute Shops erkennst, sicher bezahlst und was du bei Problemen tun kannst." }
      ] },
      standard: { text: [{ text: "In diesem Kapitel geht es um sicheres Einkaufen im Internet. Du erfährst, wie du seriöse Shops erkennst, sicher bezahlst und was du tun kannst, wenn beim Einkauf etwas schiefgeht." }] }
    },
    "Gute Shops erkennen": {
      einfach: {
        text: [
          { text: "Es gibt viele gute Shops im Internet, die du an einigen Merkmalen erkennst." },
          { text: "Die folgenden Punkte helfen dir dabei." }
        ],
        bullets: ["Der Shop ist bekannt.", "Der Shop hat ein Impressum mit Name und Adresse der Firma.", "Es gibt echte Bewertungen von Kunden.", "Die Preise sind normal, nicht verdächtig billig."],
        remember: "Ich kaufe bei Shops, die ich kenne oder geprüft habe."
      },
      standard: {
        text: [{ text: "Seriöse Online-Shops erkennst du an mehreren Merkmalen: Sie sind bekannt oder gut bewertet, haben ein vollständiges Impressum mit Firmenname und Adresse und verlangen keine verdächtig niedrigen Preise. Echte Kundenbewertungen geben zusätzliche Sicherheit." }],
        bullets: [],
        remember: "Ich kaufe bevorzugt bei Shops, die ich kenne oder vorher geprüft habe."
      }
    },
    "Fake-Shops erkennen": {
      einfach: { warning: "In einem Fake-Shop bezahlst du, bekommst die Ware aber nie. Solche Shops sehen oft echt aus. Prüfe einen Shop deshalb genau, bevor du dort bezahlst.",
        text: [
          { text: "Ein Fake-Shop ist ein falscher Shop: Du bezahlst, aber die Ware kommt nie." },
          { text: "Solche Shops sehen oft sehr echt aus, deshalb helfen dir die folgenden Warnzeichen." }
        ],
        bullets: ["Alles ist sehr, sehr billig.", "Du kannst nur per Vorkasse zahlen.", "Es gibt kein Impressum.", "Der Name der Internet-Seite ist komisch."],
        success: "Tipp: Mit dem Fakeshop-Finder der Verbraucher-Zentrale kannst du einen Shop kostenlos prüfen. Du gibst die Adresse ein und bekommst eine Einschätzung."
      },
      standard: { warning: "Fake-Shops wirken oft täuschend echt: Du bezahlst, erhältst die Ware aber nie. Prüfe einen unbekannten Shop deshalb genau, bevor du dort bezahlst oder Daten eingibst.",
        text: [{ text: "Fake-Shops sehen oft täuschend echt aus, doch nach der Zahlung kommt keine Ware. Stutzig machen sollten dich extrem niedrige Preise, fehlendes Impressum, eine merkwürdige Internetadresse und die Vorgabe, nur per Vorkasse zahlen zu können. Ein schneller Check: der kostenlose Fakeshop-Finder der Verbraucherzentrale – Shop-Adresse eingeben und die Einschätzung lesen." }],
        bullets: []
      }
    },
    "Sicher bezahlen": {
      einfach: {
        text: [
          { text: "Es gibt verschiedene Arten zu bezahlen, und manche sind sicherer als andere." },
          { text: "Die folgenden Hinweise zeigen dir, worauf es ankommt." }
        ],
        bullets: ["Kauf auf Rechnung ist sicher: Du zahlst erst, wenn die Ware da ist.", "PayPal und ähnliche Dienste haben einen Käufer-Schutz.", "Vorkasse an Fremde ist riskant: Das Geld ist oft weg.", "Sende nie Geld an Privat-Personen, die du nicht kennst.", "Bei privaten Anzeigen gilt: erst die Ware ansehen, dann bezahlen.", "Wähle beim Bezahlen nie die Funktion „Geld an Freunde senden“ – dabei gilt der Käufer-Schutz nicht."]
      },
      standard: {
        text: [{ text: "Beim Bezahlen gibt es sicherere und riskantere Wege. Der Kauf auf Rechnung ist sicher, weil du erst nach Erhalt der Ware zahlst. Dienste wie PayPal bieten einen Käuferschutz. Vorkasse an Unbekannte ist dagegen riskant – das Geld ist im Betrugsfall meist verloren. Bei privaten Kleinanzeigen zahlst du am besten erst bei der Übergabe, und nie über die Funktion „Geld an Freunde senden“: Dort greift der Käuferschutz nicht." }],
        bullets: []
      }
    },
    "Bank-Daten schützen": {
      einfach: { warning: "PIN und TAN sind geheime Zahlen von deiner Bank. Gib sie niemals weiter – deine Bank fragt nie per E-Mail oder Telefon danach. Wer danach fragt, ist ein Betrüger.", text: [
        { text: "Deine Bank-Daten sind sehr wichtig, und PIN und TAN bleiben immer geheim." },
        { text: "Deine Bank fragt nie per E-Mail oder Telefon danach – wer das tut, ist ein Betrüger." }
      ] },
      standard: { warning: "PIN und TAN sind geheim und schützen dein Konto. Gib sie niemals weiter; deine Bank fragt niemals per E-Mail, Anruf oder Nachricht danach. Wer das tut, ist ein Betrüger.", text: [{ text: "Deine Bankdaten verdienen besonderen Schutz: PIN und TAN sind streng geheim. Deine Bank wird dich niemals per E-Mail oder Telefon danach fragen. Wer das doch tut, ist ein Betrüger." }] }
    },
    "Versteckte Kosten in Apps und Spielen": {
      einfach: {
        text: [
          { text: "Viele Spiele sind zuerst kostenlos, verkaufen dir dann aber Dinge gegen echtes Geld." },
          { text: "Solche kleinen Käufe wirken günstig, summieren sich aber schnell." }
        ],
        examples: ["Ein Spiel verkauft Extra-Leben für 2 Euro.", "Eine App verkauft Münzen für 5 Euro."],
        remember: "Auch kleine Käufe kosten echtes Geld."
      },
      standard: {
        text: [{ text: "Viele Apps und Spiele sind zunächst gratis, verkaufen dann aber Zusatzinhalte gegen echtes Geld. Solche In-App-Käufe wirken klein, summieren sich aber schnell. Behalte im Blick, was du tatsächlich ausgibst." }],
        examples: ["Ein kostenloses Spiel verkauft Extra-Leben für 2 Euro das Stück.", "In einer App kosten 500 Münzen 5 Euro – wie viel eine einzelne Münze wert ist, siehst du nicht sofort."],
        remember: "Auch kleine In-App-Käufe kosten echtes Geld und summieren sich."
      }
    },
    "Nicht sofort kaufen": {
      einfach: { text: [
        { text: "Shops machen dir oft Stress, zum Beispiel mit „Nur noch heute! Nur noch 2 Stück!“." },
        { text: "Das soll dich zum schnellen Kaufen bringen, aber du darfst dir Zeit nehmen." }
      ] },
      standard: { text: [{ text: "Online-Shops machen dir oft künstlich Stress – etwa mit „Nur noch heute!“ oder „Nur noch 2 Stück!“. Das soll dich zu einem schnellen Kauf verleiten. Lass dich nicht hetzen: Du darfst dir Zeit nehmen und in Ruhe überlegen." }] }
    },
    "Vor dem Kaufen prüfen": {
      einfach: {
        text: [
          { text: "Bevor du auf „Kaufen“ tippst, lohnt sich ein kurzer Check." },
          { text: "Die folgenden Fragen helfen dir dabei." }
        ],
        bullets: ["Was kostet es wirklich? Mit Versand?", "Ist es ein Abo oder ein einmaliger Kauf?", "Brauche ich das wirklich?", "Habe ich genug Geld dafür?"],
        remember: "Erst prüfen. Dann kaufen."
      },
      standard: {
        text: [{ text: "Bevor du auf „Kaufen“ tippst, lohnt sich ein kurzer Check: Was kostet der Artikel wirklich, inklusive Versand? Handelt es sich um einen einmaligen Kauf oder ein Abo? Brauchst du das Produkt wirklich, und ist genug Geld da?" }],
        bullets: [],
        remember: "Erst prüfen, dann kaufen."
      }
    },
    "Falsch gekauft? Das kannst du tun": {
      einfach: {
        text: [
          { text: "Ein Fehl-Kauf kann passieren, und oft kannst du noch etwas tun." },
          { text: "Die folgenden Schritte helfen dir weiter." }
        ],
        bullets: ["Viele Online-Käufe kannst du 14 Tage zurückgeben. Das heißt Widerruf.", "Schreib dem Shop eine Nachricht.", "Frag eine Person, der du vertraust, um Hilfe.", "Bei Betrug: Ruf deine Bank an."],
        remember: "Online-Käufe kann ich oft 14 Tage zurückgeben."
      },
      standard: {
        text: [{ text: "Ein Fehlkauf lässt sich oft korrigieren: Bei vielen Online-Käufen hast du ein 14-tägiges Widerrufsrecht und kannst die Ware zurückgeben. Wende dich an den Shop, hol dir bei Bedarf Hilfe von einer Vertrauensperson und ruf bei Betrug sofort deine Bank an." }],
        bullets: [],
        remember: "Viele Online-Käufe kann ich innerhalb von 14 Tagen widerrufen."
      }
    },
    "Was kann ich tun?": {
      einfach: {
        text: [
          { text: "Mit ein paar einfachen Regeln kannst du sicher im Internet einkaufen." },
          { text: "Die folgenden Punkte helfen dir dabei." }
        ],
        bullets: ["Ich kaufe bei Shops, die ich kenne.", "Ich prüfe Preis und Impressum.", "Ich zahle möglichst auf Rechnung.", "PIN und TAN bleiben geheim.", "Ich lasse mich nicht hetzen.", "Vor dem Kaufen kann ich eine Person fragen."],
        warning: "Ein sehr niedriger Preis oder ein Countdown soll dich zur Eile treiben, damit du nicht mehr nachdenkst.",
        success: "Wenn du dich nicht hetzen lässt, kaufst du sicherer ein."
      },
      standard: {
        text: [{ text: "Sicheres Einkaufen gelingt mit einfachen Regeln: Kauf bei bekannten Shops, prüfe Preis und Impressum und zahle möglichst auf Rechnung. Halte PIN und TAN geheim, lass dich nicht zu schnellen Käufen drängen und frag im Zweifel vor dem Kauf eine Vertrauensperson." }],
        bullets: [],
        warning: "Ungewöhnlich niedrige Preise oder ein Countdown sollen Eile erzeugen, damit weniger genau geprüft wird – ein typisches Warnzeichen unseriöser Shops.",
        success: "Sich nicht hetzen zu lassen, ist einer der wirksamsten Schutzmechanismen beim Online-Einkauf."
      }
    },
    "Das merke ich mir": {
      einfach: {
        text: [{ text: "Du hast viel über sicheres Einkaufen gelernt – diese Sätze kannst du dir gut merken." }],
        bullets: ["Sehr billig und nur Vorkasse: Warnzeichen.", "Rechnung ist sicherer als Vorkasse.", "PIN und TAN bleiben geheim.", "Ich lasse mich nicht hetzen.", "Ich darf mir Unterstützung holen."],
        remember: "Erst prüfen. Dann kaufen."
      },
      standard: {
        text: [{ text: "Die wichtigsten Punkte dieses Themas im Überblick: Sehr niedrige Preise und reine Vorkasse sind Warnzeichen. Der Kauf auf Rechnung ist sicherer als Vorkasse, PIN und TAN bleiben geheim, und du lässt dich nicht hetzen. Bei Unsicherheit darfst du dir Unterstützung holen." }],
        bullets: [],
        remember: "Erst prüfen, dann kaufen."
      }
    }
  }
};

/* ------------------------------------------------------------
   Kurz-Weg (topic.einfachLessons): Einfache Sprache + Alltagssprache
   (Paket B3, 26.09.2026 – Gesamtprüfung Z1). Vorher las man im Kurz-Weg
   in 3 von 5 Schritten Leichte Sprache, egal welche Stufe gewählt war.
   Eigene Tabelle statt CONTENT_VERSIONS, weil 7 Kurz-Lektionen genauso
   heißen wie lange Lektionen, aber kürzer sind: Über den Titel bekämen
   sie sonst die langen Texte. Inhalt je Lektion wie der Leicht-Text in
   topics.js (§2). Der Merksatz der Stufe ersetzt nur die Anzeige – die
   Regel-Karte liest weiter den Leicht-Merksatz (regeln-de.js).
   ------------------------------------------------------------ */
const KURZ_VERSIONS = {
  datenschutz: {
    "Deine privaten Daten": {
      einfach: {
        text: [
          { text: "Private Daten sind Angaben, die nur zu dir gehören." },
          { text: "Dazu gehören zum Beispiel dein Name, deine Adresse und dein Passwort." },
          { text: "Diese Daten gibst du nicht einfach weiter, weil andere sie ausnutzen können." }
        ],
        remember: "Deine privaten Daten gehören dir. Du entscheidest, wer sie bekommt."
      },
      standard: {
        text: [{ text: "Private Daten sind Angaben, die zu dir als Person gehören – etwa dein Name, deine Adresse oder dein Passwort. Sie gehören nur dir, und du entscheidest selbst, wer sie bekommt." }],
        remember: "Private Daten gehören dir – du entscheidest, wer sie bekommt."
      }
    },
    "Dein Passwort": {
      einfach: {
        text: [
          { text: "Dein Passwort schützt dein Konto, deshalb ist es geheim." },
          { text: "Du sagst es niemandem weiter, auch nicht guten Freunden." },
          { text: "Ein gutes Passwort ist lang und schwer zu erraten." }
        ],
        remember: "Dein Passwort bleibt geheim, auch vor Freunden."
      },
      standard: {
        text: [{ text: "Dein Passwort schützt dein Konto und ist deshalb geheim. Du gibst es an niemanden weiter, auch nicht an gute Freunde. Ein gutes Passwort ist lang und für andere schwer zu erraten." }],
        remember: "Dein Passwort bleibt geheim – ohne Ausnahme."
      }
    },
    "Jemand fragt nach deinen Daten": {
      einfach: {
        text: [
          { text: "Manchmal fragt dich jemand in einer Nachricht nach deinen Daten." },
          { text: "Dann gibst du deine Daten nicht sofort ein." },
          { text: "Frag zuerst eine Person, der du vertraust. Sie hilft dir bei der Entscheidung." }
        ],
        remember: "Frag erst eine Person, der du vertraust. Dann entscheidest du."
      },
      standard: {
        text: [{ text: "Manchmal fragt dich jemand per Nachricht nach deinen Daten. Gib sie nicht vorschnell ein, sondern sprich zuerst mit einer Person, der du vertraust. Gemeinsam könnt ihr in Ruhe entscheiden, ob die Anfrage echt ist." }],
        remember: "Erst Rat holen, dann entscheiden."
      }
    }
  },
  whatsapp: {
    "Unbekannte Nachrichten": {
      einfach: {
        text: [
          { text: "Manchmal bekommst du eine Nachricht von einer Person, die du nicht kennst." },
          { text: "Antworte nicht sofort, auch wenn die Nachricht freundlich klingt." },
          { text: "Zeig sie zuerst einer Person, der du vertraust. Sie hilft dir weiter." }
        ],
        remember: "Bei unbekannten Nachrichten fragst du zuerst eine Person, der du vertraust."
      },
      standard: {
        text: [{ text: "Bekommst du eine Nachricht von jemandem, den du nicht kennst, antwortest du nicht sofort – auch wenn sie freundlich klingt. Zeig sie zuerst einer Person, der du vertraust. Gemeinsam entscheidet ihr, wie es weitergeht." }],
        remember: "Unbekannte Nachrichten: erst Rat holen, dann antworten."
      }
    },
    "Links in Nachrichten": {
      einfach: {
        text: [
          { text: "Ein Link ist eine Adresse zu einer Internet-Seite. Meistens ist er blau." },
          { text: "Fremde Links können gefährlich sein, weil sie auf falsche Seiten führen." },
          { text: "Tippe deshalb nicht sofort darauf. Frag zuerst eine Person, der du vertraust." }
        ],
        remember: "Auf fremde Links tippst du nicht sofort."
      },
      standard: {
        text: [{ text: "Ein Link führt dich auf eine Internetseite – meist erkennst du ihn an der blauen Schrift. Links von Fremden können auf gefälschte Seiten führen. Tippe sie deshalb nicht sofort an, sondern frag zuerst eine Person, der du vertraust." }],
        remember: "Fremde Links nicht vorschnell antippen."
      }
    },
    "Dein WhatsApp-Code": {
      einfach: {
        text: [
          { text: "Manchmal schickt dir WhatsApp einen Code per SMS." },
          { text: "Diesen Code gibst du niemandem weiter, auch nicht deinen Freunden." },
          { text: "Wer den Code bekommt, kann damit dein Konto stehlen." }
        ],
        remember: "Den WhatsApp-Code gibst du nie weiter."
      },
      standard: {
        text: [{ text: "WhatsApp schickt dir manchmal einen Bestätigungscode per SMS. Diesen Code gibst du niemals weiter – auch nicht an Freunde. Wer ihn hat, kann damit dein Konto übernehmen." }],
        remember: "Den WhatsApp-Code gibst du niemals weiter."
      }
    }
  },
  facebook: {
    "Dein Facebook-Profil": {
      einfach: {
        text: [
          { text: "Auf Facebook hast du ein Profil, das andere Menschen sehen können." },
          { text: "In den Einstellungen legst du fest, wer dein Profil sieht." },
          { text: "Am besten sehen es nur deine Freunde. Eine Person, der du vertraust, kann dir beim Einstellen helfen." }
        ],
        remember: "Dein Profil sehen nur deine Freunde."
      },
      standard: {
        text: [{ text: "Dein Facebook-Profil ist für andere sichtbar. In den Einstellungen legst du fest, wer es sehen darf – am besten nur deine Freunde. Eine Person, der du vertraust, kann dir beim Einstellen helfen." }],
        remember: "Dein Profil ist nur für Freunde sichtbar."
      }
    },
    "Unbekannte Personen": {
      einfach: {
        text: [
          { text: "Manchmal schickt dir eine unbekannte Person eine Freundschafts-Anfrage." },
          { text: "Wenn du die Person nicht kennst, nimmst du die Anfrage nicht an." },
          { text: "Bist du unsicher, fragst du eine Person, der du vertraust." }
        ],
        remember: "Anfragen von Unbekannten lehnst du ab."
      },
      standard: {
        text: [{ text: "Manchmal schickt dir jemand eine Freundschaftsanfrage, den du nicht kennst. Solche Anfragen nimmst du nicht an. Bist du unsicher, fragst du eine Person, der du vertraust." }],
        remember: "Anfragen von Unbekannten ablehnen."
      }
    },
    "Komische Nachrichten": {
      einfach: {
        text: [
          { text: "Manchmal bekommst du eine komische Nachricht, zum Beispiel mit einer Frage nach Geld oder mit einem Link." },
          { text: "Tippe nicht auf den Link und schick kein Geld." },
          { text: "Zeig die Nachricht lieber einer Person, der du vertraust." }
        ],
        remember: "Komische Nachrichten zeigst du jemandem. Du tippst nichts an."
      },
      standard: {
        text: [{ text: "Seltsame Nachrichten, in denen jemand nach Geld fragt oder einen Link schickt, sind oft Betrug. Tippe nichts an und zeig die Nachricht einer Person, der du vertraust." }],
        remember: "Seltsame Nachrichten zeigen statt antippen."
      }
    }
  },
  instagram: {
    "Deine Fotos auf Instagram": {
      einfach: {
        text: [
          { text: "Wenn du Fotos auf Instagram postest, können andere Menschen sie sehen." },
          { text: "Du kannst einstellen, wer deine Fotos sieht." },
          { text: "Am besten stellst du dein Konto auf privat. Dann sehen nur deine Freunde deine Fotos." }
        ],
        remember: "Stell dein Konto auf privat."
      },
      standard: {
        text: [{ text: "Fotos, die du auf Instagram postest, sind für andere sichtbar. Stellst du dein Konto auf privat, sehen nur noch die Menschen deine Fotos, die du selbst bestätigt hast." }],
        remember: "Stell dein Konto auf privat."
      }
    },
    "Fotos von anderen Personen": {
      einfach: {
        text: [
          { text: "Du willst ein Foto posten, auf dem eine andere Person zu sehen ist." },
          { text: "Dann fragst du diese Person zuerst." },
          { text: "Nur wenn sie Ja sagt, postest du das Foto." }
        ],
        remember: "Fotos von anderen postest du nur, wenn sie Ja sagen."
      },
      standard: {
        text: [{ text: "Ist auf einem Foto eine andere Person zu sehen, fragst du sie vor dem Posten um Erlaubnis. Nur wenn sie zustimmt, stellst du das Foto online – jeder Mensch hat ein Recht am eigenen Bild." }],
        remember: "Fotos von anderen: erst fragen, dann posten."
      }
    },
    "Nachrichten von Unbekannten": {
      einfach: {
        text: [
          { text: "Manchmal schreibt dir eine Person, die du nicht kennst." },
          { text: "Dann antwortest du ihr nicht." },
          { text: "Zeig die Nachricht einer Person, der du vertraust. Sie hilft dir weiter." }
        ],
        remember: "Bei Nachrichten von Unbekannten fragst du eine Person, der du vertraust."
      },
      standard: {
        text: [{ text: "Schreibt dir jemand, den du nicht kennst, antwortest du nicht. Zeig die Nachricht stattdessen einer Person, der du vertraust – sie hilft dir, die Nachricht richtig einzuschätzen." }],
        remember: "Nachrichten von Unbekannten: nicht antworten, Rat holen."
      }
    }
  },
  youtube: {
    "Videos prüfen": {
      einfach: {
        text: [
          { text: "Manche Videos auf YouTube erzählen Dinge, die nicht stimmen." },
          { text: "Frag dich deshalb beim Schauen: Stimmt das wirklich?" },
          { text: "Schau nach, was ein anderer Kanal dazu sagt, oder frag eine Person, der du vertraust." }
        ],
        remember: "Du prüfst, ob ein Video stimmt."
      },
      standard: {
        text: [{ text: "Nicht jedes Video auf YouTube erzählt die Wahrheit. Frag dich deshalb, ob stimmt, was du siehst: Vergleiche mit anderen Kanälen oder sprich mit einer Person, der du vertraust." }],
        remember: "Videos prüfen, bevor du ihnen glaubst."
      }
    },
    "Werbung erkennen": {
      einfach: {
        text: [
          { text: "In vielen Videos kommt Werbung. Die Werbung will, dass du etwas kaufst." },
          { text: "Du musst aber nichts kaufen." },
          { text: "Oft kannst du die Werbung überspringen. Auf die Werbung tippst du nicht." }
        ],
        remember: "Auf Werbung tippst du nicht."
      },
      standard: {
        text: [{ text: "In vielen Videos läuft Werbung, die dich zum Kaufen bringen soll. Du musst nichts kaufen: Überspring die Werbung, wenn das geht, und tippe sie nicht an." }],
        remember: "Werbung überspringen, nicht antippen."
      }
    },
    "Pausen machen": {
      einfach: {
        text: [
          { text: "Wenn du lange Videos schaust, ist das anstrengend für Augen und Kopf." },
          { text: "Mach deshalb nach einer Stunde eine Pause." },
          { text: "Geh zum Beispiel raus oder beweg dich ein bisschen. Das tut dir gut." }
        ],
        remember: "Nach einer Stunde machst du Pause."
      },
      standard: {
        text: [{ text: "Lange Videos am Stück sind anstrengend. Mach spätestens nach einer Stunde eine Pause – geh an die frische Luft oder beweg dich. Das tut Körper und Kopf gut." }],
        remember: "Nach einer Stunde eine Pause einlegen."
      }
    }
  },
  snapchat: {
    "Bilder verschwinden nicht wirklich": {
      einfach: {
        text: [
          { text: "Auf Snapchat verschwindet ein Bild nach kurzer Zeit wieder." },
          { text: "Andere können es aber vorher speichern, zum Beispiel mit einem Bildschirm-Foto. Dann ist das Bild für immer da." },
          { text: "Schick deshalb nur Bilder, die alle sehen dürfen." }
        ],
        remember: "Auch Bilder auf Snapchat können für immer bleiben."
      },
      standard: {
        text: [{ text: "Auf Snapchat verschwinden Bilder nach kurzer Zeit – aber nur scheinbar. Andere können sie vorher mit einem Screenshot speichern, und dann bleiben sie dauerhaft erhalten. Schick deshalb nur Bilder, die jeder sehen darf." }],
        remember: "Was du schickst, kann für immer bleiben."
      }
    },
    "Dein Standort": {
      einfach: {
        text: [
          { text: "Snapchat kann anderen zeigen, wo du gerade bist. Das nennt man Standort." },
          { text: "Das ist gefährlich, weil dich so auch Fremde finden können." },
          { text: "Schalte deinen Standort deshalb aus. Eine Person, der du vertraust, hilft dir dabei." }
        ],
        remember: "Du schaltest deinen Standort aus."
      },
      standard: {
        text: [{ text: "Snapchat kann deinen Standort auf einer Karte anzeigen – dann sehen andere, wo du gerade bist. Das kann gefährlich werden. Schalte die Standort-Freigabe deshalb aus; eine Person, der du vertraust, kann dir dabei helfen." }],
        remember: "Standort-Freigabe ausschalten."
      }
    },
    "Niemand darf dich zwingen": {
      einfach: {
        text: [
          { text: "Manchmal macht dir jemand Druck und will ein Bild von dir." },
          { text: "Wenn du das nicht willst, musst du es auch nicht tun. Du darfst Nein sagen." },
          { text: "Erzähl es danach eine Person, der du vertraust." }
        ],
        remember: "Du darfst immer Nein sagen."
      },
      standard: {
        text: [{ text: "Setzt dich jemand unter Druck, ein Bild von dir zu schicken, musst du das nicht tun. Du darfst jederzeit Nein sagen. Erzähl einer Person, der du vertraust, davon – du bist damit nicht allein." }],
        remember: "Du darfst Nein sagen – immer."
      }
    }
  },
  tiktok: {
    "Was du bei TikTok siehst": {
      einfach: {
        text: [
          { text: "TikTok zeigt dir sehr viele Videos. Dabei merkt sich die App, was dir gefällt." },
          { text: "Deshalb zeigt sie dir immer mehr Videos von derselben Art." },
          { text: "So siehst du oft das Gleiche. Schau darum auch andere Kanäle an." }
        ],
        remember: "TikTok zeigt dir nur einen Teil der Videos."
      },
      standard: {
        text: [{ text: "TikTok merkt sich, welche Videos dir gefallen, und zeigt dir immer mehr davon. So entsteht schnell ein einseitiges Bild. Schau deshalb bewusst auch andere Kanäle und Meinungen an." }],
        remember: "TikTok zeigt dir eine Auswahl – nicht alles."
      }
    },
    "Nachrichten auf TikTok": {
      einfach: {
        text: [
          { text: "Manchmal schreibt dir auf TikTok eine Person, die du nicht kennst." },
          { text: "Dann antwortest du ihr nicht." },
          { text: "Zeig die Nachricht einer Person, der du vertraust. Sie hilft dir weiter." }
        ],
        remember: "Bei Nachrichten von Unbekannten fragst du eine Person, der du vertraust."
      },
      standard: {
        text: [{ text: "Schreibt dir auf TikTok jemand, den du nicht kennst, antwortest du nicht. Zeig die Nachricht einer Person, der du vertraust – gemeinsam entscheidet ihr, was zu tun ist." }],
        remember: "Nachrichten von Unbekannten: nicht antworten, Rat holen."
      }
    },
    "Pause machen": {
      einfach: {
        text: [
          { text: "TikTok ist so gemacht, dass du möglichst lange schaust. Das ist anstrengend." },
          { text: "Stell dir deshalb einen Timer, zum Beispiel auf eine Stunde." },
          { text: "Wenn der Timer klingelt, machst du Pause." }
        ],
        remember: "Du stellst einen Timer und machst Pause."
      },
      standard: {
        text: [{ text: "TikTok ist darauf ausgelegt, dich möglichst lange in der App zu halten. Stell dir deshalb einen Timer, etwa auf eine Stunde, und mach eine Pause, sobald er klingelt." }],
        remember: "Timer stellen, Pause machen."
      }
    }
  },
  hilfe: {
    "Etwas fühlt sich falsch an": {
      einfach: {
        text: [
          { text: "Manchmal passiert im Internet etwas, das sich falsch anfühlt. Oder du bist dir unsicher." },
          { text: "Dann machst du Stopp und gehst nicht weiter." },
          { text: "Das ist mutig und richtig." }
        ],
        remember: "Wenn sich etwas falsch anfühlt, machst du Stopp."
      },
      standard: {
        text: [{ text: "Fühlt sich im Internet etwas falsch an oder bist du unsicher, hörst du auf dein Gefühl: Mach Stopp und geh nicht weiter. Das ist kein Zeichen von Schwäche, sondern mutig und richtig." }],
        remember: "Fühlt sich etwas falsch an: Stopp."
      }
    },
    "Wer hilft dir?": {
      einfach: {
        text: [
          { text: "Wenn du im Internet ein Problem hast, musst du es nicht allein lösen." },
          { text: "Geh zu einer Person, der du vertraust. Das kann zum Beispiel deine Betreuerin, dein Betreuer oder ein Freund sein." },
          { text: "Zeig dieser Person das Problem. Dann könnt ihr es zusammen lösen." }
        ],
        remember: "Du bittest eine Person um Hilfe, der du vertraust."
      },
      standard: {
        text: [{ text: "Hast du im Internet ein Problem, musst du es nicht allein lösen. Wende dich an eine Person, der du vertraust – etwa an deine Betreuerin, deinen Betreuer oder einen Freund – und zeig ihr, was passiert ist." }],
        remember: "Hol dir Hilfe bei einer Person, der du vertraust."
      }
    },
    "Du bist nicht allein": {
      einfach: {
        text: [
          { text: "Viele Menschen haben Probleme im Internet. Das passiert nicht nur dir." },
          { text: "Du bist also nicht allein damit." },
          { text: "Hilfe zu holen ist keine Schwäche. Es ist mutig und richtig." }
        ],
        remember: "Du bist nicht allein. Hilfe holen ist mutig."
      },
      standard: {
        text: [{ text: "Probleme im Internet haben sehr viele Menschen – du bist damit nicht allein. Sich Hilfe zu holen, ist keine Schwäche, sondern mutig und richtig." }],
        remember: "Hilfe holen ist mutig, nicht schwach."
      }
    }
  },
  ki: {
    "Was ist KI?": {
      einfach: {
        text: [
          { text: "KI ist die Abkürzung für Künstliche Intelligenz." },
          { text: "KI ist ein Computer-Programm, das Fragen beantworten, Texte schreiben und Bilder machen kann." },
          { text: "Auch wenn KI manchmal wie ein Mensch schreibt, ist sie kein Mensch." }
        ],
        remember: "KI ist ein Programm. KI ist kein Mensch."
      },
      standard: {
        text: [{ text: "KI steht für Künstliche Intelligenz. Gemeint sind Computerprogramme, die Fragen beantworten, Texte schreiben oder Bilder erzeugen können. Auch wenn sie dabei menschlich wirken: Eine KI ist kein Mensch, sondern ein Programm." }],
        remember: "KI ist ein Programm – kein Mensch."
      }
    },
    "Was kann KI?": {
      einfach: {
        text: [
          { text: "KI kann dir helfen, zum Beispiel wenn du eine Frage hast." },
          { text: "Sie gibt dir schnell eine Antwort. Aber diese Antwort ist nicht immer richtig." },
          { text: "Deshalb prüfst du die Antwort, bevor du ihr glaubst." }
        ],
        remember: "Antworten von KI prüfst du immer."
      },
      standard: {
        text: [{ text: "KI kann dir helfen: Du stellst eine Frage und bekommst schnell eine Antwort. Diese Antworten klingen oft sicher, sind aber nicht immer richtig. Prüf deshalb wichtige Antworten, bevor du dich darauf verlässt." }],
        remember: "KI-Antworten immer prüfen."
      }
    },
    "Wann musst du aufpassen?": {
      einfach: {
        text: [
          { text: "KI kann auch falsche Dinge sagen." },
          { text: "Mit KI kann man außerdem Bilder fälschen und Stimmen nachmachen." },
          { text: "Glaub deshalb nicht alles. Frag im Zweifel eine Person, der du vertraust." }
        ],
        remember: "Du glaubst nicht alles. Du prüfst es zuerst."
      },
      standard: {
        text: [{ text: "KI macht Fehler und kann falsche Dinge behaupten. Außerdem lassen sich mit ihr Bilder fälschen und Stimmen täuschend echt nachahmen. Glaub deshalb nicht alles, was du siehst oder hörst, und frag im Zweifel eine Person, der du vertraust." }],
        remember: "Nicht alles glauben – erst prüfen."
      }
    }
  },
  fakes: {
    "Was ist eine Fake-Nachricht?": {
      einfach: {
        text: [
          { text: "Eine Fake-Nachricht ist eine Lüge, die wie eine echte Nachricht aussieht." },
          { text: "Manchmal ist die Fake-Nachricht auch ein Bild, das jemand verändert hat." }
        ],
        remember: "Fake-Nachrichten sind Lügen, die echt aussehen."
      },
      standard: {
        text: [{ text: "Eine Fake-Nachricht ist eine Falschmeldung, die wie eine echte Nachricht aussieht. Manchmal ist es auch ein Bild, das jemand bearbeitet hat, damit es etwas Falsches zeigt." }],
        remember: "Fake-Nachrichten sind Lügen, die echt aussehen."
      }
    },
    "Wie erkennst du Fakes?": {
      einfach: {
        text: [
          { text: "Manche Nachrichten machen dich sehr aufgeregt. Das kann ein Zeichen für einen Fake sein." },
          { text: "Überleg dann kurz, bevor du etwas tust." },
          { text: "Prüf die Nachricht auf einer anderen Seite oder frag eine Person, der du vertraust." }
        ],
        remember: "Erst prüfen, dann teilen."
      },
      standard: {
        text: [{ text: "Macht dich eine Nachricht sehr aufgeregt oder wütend, ist Vorsicht angebracht – genau darauf zielen viele Fakes ab. Halte kurz inne und prüf die Meldung auf einer anderen, verlässlichen Seite oder frag eine Person, der du vertraust." }],
        remember: "Erst prüfen, dann teilen."
      }
    },
    "Was tust du bei Fakes?": {
      einfach: {
        text: [
          { text: "Wenn du eine Fake-Nachricht erkennst, schickst du sie nicht weiter." },
          { text: "Du löschst sie und erzählst eine Person, der du vertraust davon." }
        ],
        remember: "Fake-Nachrichten leitest du nicht weiter."
      },
      standard: {
        text: [{ text: "Hast du eine Fake-Nachricht erkannt, leitest du sie nicht weiter – so stoppst du ihre Verbreitung. Lösch sie und erzähl einer Person, der du vertraust, davon." }],
        remember: "Fakes nicht weiterleiten."
      }
    }
  },
  betrug: {
    "Was ist Betrug im Internet?": {
      einfach: {
        text: [
          { text: "Manche Menschen im Internet sind Betrüger." },
          { text: "Sie sagen zum Beispiel, dass sie dir helfen wollen." },
          { text: "In Wirklichkeit wollen sie aber dein Geld oder deine Daten. Das ist Betrug." }
        ],
        remember: "Nicht jeder im Internet ist ehrlich."
      },
      standard: {
        text: [{ text: "Im Internet geben sich manche Menschen hilfsbereit oder freundlich, wollen aber in Wahrheit an dein Geld oder deine Daten. Genau das ist Betrug." }],
        remember: "Nicht jeder im Internet meint es ehrlich."
      }
    },
    "Wie erkennst du Betrug?": {
      einfach: {
        text: [
          { text: "Es gibt typische Zeichen für Betrug: Du gewinnst plötzlich etwas, jemand braucht dringend Geld, oder jemand will sofort eine Antwort." },
          { text: "Wenn du so ein Zeichen siehst, machst du Stopp." },
          { text: "Dann fragst du eine Person, der du vertraust." }
        ],
        remember: "Bei Stress oder Gewinn machst du Stopp."
      },
      standard: {
        text: [{ text: "Typische Warnzeichen für Betrug sind überraschende Gewinne, dringende Bitten um Geld und Zeitdruck. Siehst du so ein Zeichen, machst du Stopp und fragst eine Person, der du vertraust." }],
        remember: "Zeitdruck oder Gewinn: erst Stopp machen."
      }
    },
    "Was tust du bei Betrug?": {
      einfach: {
        text: [
          { text: "Wenn du Betrug vermutest, zahlst du kein Geld und gibst keine Daten ein." },
          { text: "Erzähl es eine Person, der du vertraust. Sie hilft dir weiter." }
        ],
        remember: "Kein Geld senden. Frag eine Person, der du vertraust."
      },
      standard: {
        text: [{ text: "Vermutest du Betrug, zahlst du nichts und gibst keine Daten ein. Erzähl einer Person, der du vertraust, davon – gemeinsam findet ihr den nächsten Schritt." }],
        remember: "Kein Geld, keine Daten – Hilfe holen."
      }
    }
  },
  einkaufen: {
    "Einkaufen im Internet": {
      einfach: {
        text: [
          { text: "Im Internet kannst du einkaufen. Das nennt man Online-Shopping." },
          { text: "Du suchst dir etwas aus und bezahlst es. Dann bringt ein Paket-Dienst die Ware zu dir nach Hause." }
        ],
        remember: "Du kaufst nur in sicheren Shops ein."
      },
      standard: {
        text: [{ text: "Online-Shopping heißt: Du suchst im Internet etwas aus, bezahlst es und bekommst die Ware nach Hause geliefert. Das ist bequem – wichtig ist aber, dass du nur in sicheren Shops einkaufst." }],
        remember: "Nur in sicheren Shops einkaufen."
      }
    },
    "Gute Shops erkennen": {
      einfach: {
        text: [
          { text: "Einen guten Shop erkennst du am Impressum. Dort stehen der Name und die Adresse vom Shop." },
          { text: "Die Preise sind normal und nicht sehr billig." },
          { text: "Das Schloss in der Adress-Zeile allein ist kein gutes Zeichen, weil auch falsche Shops es haben." },
          { text: "Wenn du unsicher bist, fragst du eine Person, der du vertraust." }
        ],
        remember: "Ein guter Shop zeigt Name und Adresse im Impressum."
      },
      standard: {
        text: [{ text: "Seriöse Shops nennen im Impressum ihren Namen und ihre Anschrift, und ihre Preise sind realistisch statt verdächtig niedrig. Das Schloss-Symbol in der Adresszeile reicht allein nicht: Es zeigt nur eine verschlüsselte Verbindung, und auch Fake-Shops haben es. Bist du unsicher, frag eine Person, der du vertraust." }],
        remember: "Ein seriöser Shop nennt Name und Anschrift."
      }
    },
    "Sicher bezahlen": {
      einfach: {
        text: [
          { text: "PayPal und der Kauf auf Rechnung sind sicherer als andere Bezahl-Arten. Bei Rechnung bekommst du zuerst die Ware und zahlst danach." },
          { text: "Deine Kreditkarte gibst du nicht auf jeder Seite ein." },
          { text: "Wenn es Probleme gibt, fragst du eine Person, der du vertraust." }
        ],
        remember: "PayPal oder Rechnung ist sicherer."
      },
      standard: {
        text: [{ text: "Sicherer bezahlst du auf Rechnung – dann zahlst du erst, wenn die Ware da ist – oder über PayPal mit Käuferschutz. Deine Kreditkartendaten gibst du nicht auf jeder Seite ein. Gibt es Probleme, frag eine Person, der du vertraust." }],
        remember: "Rechnung oder PayPal sind sicherer."
      }
    }
  }
};

/* Fassungen mit den Lektionen in topics.js verknüpfen */
function applyContentVersions() {
  if (typeof topics === "undefined" || !Array.isArray(topics)) return;
  const anhaengen = (lessons, versions) => {
    if (!versions || !Array.isArray(lessons)) return;
    lessons.forEach((lesson) => {
      const lv = versions[lesson.title];
      if (lv) lesson.versions = Object.assign({}, lesson.versions, lv);
    });
  };
  topics.forEach((topic) => {
    anhaengen(topic.lessons, CONTENT_VERSIONS[topic.id]);
    /* Kurz-Weg: eigene Tabelle, siehe KURZ_VERSIONS oben. */
    anhaengen(topic.einfachLessons, KURZ_VERSIONS[topic.id]);
  });
}

applyContentVersions();

/* ------------------------------------------------------------
   Einstiegsfrage (Self-Assessment) je Sprachstufe – optional.
   Fehlt eine Stufe, nutzt die App die Basis aus topics.js.
   ------------------------------------------------------------ */
const SELF_ASSESSMENT_VERSIONS = {
  datenschutz: {
    einfach: {
      question: "Wie gut kennst du dich mit dem Schutz deiner Daten aus?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie schätzt du dein Wissen zum Schutz deiner persönlichen Daten ein?",
      options: ["Eher gering", "Mittel", "Ziemlich gut"]
    }
  },
  whatsapp: {
    einfach: {
      question: "Wie gut kennst du dich mit den Sicherheits-Einstellungen bei WhatsApp aus?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie sicher fühlst du dich im Umgang mit deinen Daten und Einstellungen bei WhatsApp?",
      options: ["Eher unsicher", "Mittel", "Ziemlich sicher"]
    }
  },
  facebook: {
    einfach: {
      question: "Wie gut kennst du dich mit den Einstellungen bei Facebook aus?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie sicher fühlst du dich im Umgang mit deiner Privatsphäre auf Facebook?",
      options: ["Eher unsicher", "Mittel", "Ziemlich sicher"]
    }
  },
  instagram: {
    einfach: {
      question: "Wie gut kennst du dich mit den Einstellungen bei Instagram aus?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie sicher fühlst du dich im Umgang mit deiner Privatsphäre auf Instagram?",
      options: ["Eher unsicher", "Mittel", "Ziemlich sicher"]
    }
  },
  youtube: {
    einfach: {
      question: "Wie gut kennst du dich beim sicheren Schauen auf YouTube aus?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie sicher fühlst du dich im Umgang mit Videos und Einstellungen auf YouTube?",
      options: ["Eher unsicher", "Mittel", "Ziemlich sicher"]
    }
  },
  snapchat: {
    einfach: {
      question: "Wie gut kennst du dich mit Snapchat aus?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie schätzt du dein Wissen über die sichere Nutzung von Snapchat ein?",
      options: ["Eher gering", "Mittel", "Ziemlich gut"]
    }
  },
  tiktok: {
    einfach: {
      question: "Wie gut kennst du dich mit den Einstellungen bei TikTok aus?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie sicher fühlst du dich im Umgang mit deiner Privatsphäre bei TikTok?",
      options: ["Eher unsicher", "Mittel", "Ziemlich sicher"]
    }
  },
  hilfe: {
    einfach: {
      question: "Wie gut weißt du, was du tun kannst, wenn es im Internet Probleme gibt?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie gut weißt du, wo du Hilfe bekommst, wenn im Internet etwas schiefläuft?",
      options: ["Eher unsicher", "Mittel", "Ziemlich gut"]
    }
  },
  ki: {
    einfach: {
      question: "Wie gut kennst du dich mit Künstlicher Intelligenz und Chatbots aus?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie schätzt du dein Wissen über Künstliche Intelligenz und Chatbots ein?",
      options: ["Eher gering", "Mittel", "Ziemlich gut"]
    }
  },
  fakes: {
    einfach: {
      question: "Wie gut kannst du Fake-Nachrichten und falsche Bilder erkennen?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie sicher bist du darin, Falsch-Nachrichten und KI-Fälschungen zu erkennen?",
      options: ["Eher unsicher", "Mittel", "Ziemlich sicher"]
    }
  },
  betrug: {
    einfach: {
      question: "Wie gut kennst du die Maschen von Betrügern im Internet?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie sicher erkennst du Betrugs-Maschen und Abzocke im Internet?",
      options: ["Eher unsicher", "Mittel", "Ziemlich sicher"]
    }
  },
  einkaufen: {
    einfach: {
      question: "Wie gut kennst du dich beim sicheren Einkaufen und Bezahlen im Internet aus?",
      options: ["Noch nicht so gut", "Ein bisschen", "Schon ganz gut"]
    },
    standard: {
      question: "Wie sicher fühlst du dich beim Einkaufen und Bezahlen im Internet?",
      options: ["Eher unsicher", "Mittel", "Ziemlich sicher"]
    }
  }
};

function applySelfAssessmentVersions() {
  if (typeof topics === "undefined" || !Array.isArray(topics)) return;
  topics.forEach((topic) => {
    const v = SELF_ASSESSMENT_VERSIONS[topic.id];
    if (v) topic.saVersions = v;
  });
}

applySelfAssessmentVersions();

/* ------------------------------------------------------------
   Quiz vereinheitlichen: Heute haben ALLE 12 Themen ihre Fragen
   unter `quizQuestions` (kein Thema mehr unter `quiz`). Der Alias
   t.quiz = t.quizQuestions bleibt als Rückfall für künftige Themen.
   ------------------------------------------------------------ */
function normalizeQuizzes() {
  if (typeof topics === "undefined" || !Array.isArray(topics)) return;
  topics.forEach((t) => {
    if ((!Array.isArray(t.quiz) || !t.quiz.length) &&
        Array.isArray(t.quizQuestions) && t.quizQuestions.length) {
      t.quiz = t.quizQuestions;
    }
  });
}

normalizeQuizzes();
