/* =============================================================
   WEITERLERNEN – Zusatz-Bereiche zu einem Thema (seit 28.09.2026)
   -------------------------------------------------------------
   Ein Weiterlern-Bereich ist KEIN Thema. Er
   - zählt nicht in „X von 12 Themen“,
   - geht nicht in den Themen-Fortschritt, die Regel-Karte, die
     schwierigen Aufgaben, den Wiedereinstieg oder die Frage des Tages ein,
   - hat keine Abschluss-Seite wie ein Thema.
   Er wird über die Themen-Seite und die Abschluss-Seite des zugehörigen
   Themas geöffnet und von renderWeiterlernen() in app.js angezeigt.

   Weiterlernen: Kontosicherheit (Übergang)
   Entscheidung vom 28.09.2026: Passwort, Zwei-Faktor und Passkey gehören
   nicht mehr zum Kern von Datenschutz. Sie werden später das eigene
   13. Thema „Kontosicherheit“. Bis dahin stehen die vier bisherigen
   Lektionen hier – WORTGLEICH aus topics.js und content-de.js
   übernommen, noch nicht überarbeitet (z. B. die Passwort-Länge).
   Weitere, nicht gezeigte Inhalte liegen in geparkt/ (nicht ausgeliefert).

   Oberflächen-Texte (titel, zusatz, knopf, …) sind Arbeitsfassungen in
   Leichter Sprache, freigabepflichtig (Prüfgruppen-Katalog Punkt 21).
   ============================================================= */

const WEITERLERNEN = {
  datenschutz: {
    id: "kontosicherheit",
    /* Vor-Nutzertest (29.09.2026): vorerst AUSGEBLENDET, solange die
       ungeklärte Regel „mindestens 10 Zeichen“ enthalten ist (Analyse
       28.09.: P0). Inhalte bleiben unverändert; vorgemerkt für das spätere
       13. Thema „Kontosicherheit“. Wieder zeigen: diese Zeile entfernen und
       die Brücken-Sätze in „Deine Daten“ wieder einsetzen (Wortlaut in
       pruefung/datenschutz/README.md). */
    ausgeblendet: true,
    /* Paket 5: je Stufe; Leicht mit Bindestrich wie im Thema (Konto-Sicherheit). */
    titel: { leicht: "Weiterlernen: Konto-Sicherheit", einfach: "Weiterlernen: Kontosicherheit", standard: "Weiterlernen: Kontosicherheit" },
    zusatz: { leicht: "Das ist ein Zusatz. Er gehört nicht zum Thema Datenschutz.", einfach: "Das ist ein Zusatz-Bereich, der nicht zum Thema Datenschutz gehört.", standard: "Dies ist ein Zusatzbereich – er gehört nicht zum Thema Datenschutz." },
    worum: { leicht: "Hier geht es um dein Konto: Passwort, Zwei-Faktor und Passkey.", einfach: "Hier geht es um den Schutz von deinem Konto: Passwort, Zwei-Faktor und Passkey.", standard: "Hier geht es um die Sicherheit deines Kontos: Passwort, Zwei-Faktor-Anmeldung und Passkey." },
    knopf: { leicht: "Konto-Sicherheit ansehen", einfach: "Kontosicherheit ansehen", standard: "Kontosicherheit ansehen" },
    ende: { leicht: "Du hast alle Schritte angesehen.", einfach: "Du hast dir alle Schritte angesehen.", standard: "Du hast alle Schritte durchgesehen." },
    zurueck: { leicht: "Zurück zu Datenschutz", einfach: "Zurück zu Datenschutz", standard: "Zurück zu Datenschutz" },
    lektionen: [
      {
        "title": "Passwort bleibt geheim",
        "module": "Passwort",
        "icon": "lock",
        "text": [
          {
            "text": "Ein Passwort schützt dein Konto.",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Ein Konto ist dein Bereich in einer App.",
            "pictogram": "pikto-screen"
          },
          {
            "text": "Ein Passwort ist wie ein Schlüssel.",
            "pictogram": "pikto-key"
          },
          {
            "text": "Andere Menschen dürfen dein Passwort nicht benutzen.",
            "pictogram": "pikto-lock"
          }
        ],
        "warning": "Gib dein Passwort nicht weiter.",
        "practice": {
          "question": "Jemand fragt nach deinem Passwort. Was ist besser?",
          "pictogram": "pikto-key",
          "answers": [
            "Ich gebe das Passwort weiter.",
            "Ich behalte das Passwort für mich."
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht sicher. Mit deinem Passwort kann jemand dein Konto benutzen.",
          "feedbackCorrect": "Das ist sicher. Dein Passwort bleibt geheim.",
          "remember": "Mein Passwort bleibt geheim."
        },
        "pictogram": "pikto-lock"
      },
      {
        "title": "Gutes Passwort",
        "module": "Passwort",
        "icon": "check",
        "text": [
          {
            "text": "Ein gutes Passwort ist lang.",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Es ist nicht dein Name.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Es ist nicht dein Geburtstag.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Buchstaben und Zahlen sind gut.",
            "pictogram": "pikto-key"
          }
        ],
        "bullets": [
          {
            "text": "nicht dein Name",
            "pictogram": "pikto-no"
          },
          {
            "text": "nicht dein Geburtstag",
            "pictogram": "pikto-no"
          },
          {
            "text": "mindestens 10 Zeichen",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Buchstaben und Zahlen",
            "pictogram": "pikto-shop"
          },
          {
            "text": "Sonderzeichen sind gut, zum Beispiel ! oder ?",
            "pictogram": "pikto-lock"
          }
        ],
        "practice": {
          "question": "Welches Passwort ist besser?",
          "pictogram": "pikto-key",
          "answers": [
            "Frank1980",
            "Blume!Tisch7Wasser"
          ],
          "correctIndex": 1,
          "feedbackWrong": "Das ist nicht so sicher. Ein Name oder ein Geburtstag ist leichter zu erraten.",
          "feedbackCorrect": "Das ist sicherer. Das Passwort ist lang und schwerer zu erraten.",
          "remember": "Ich nehme ein langes Passwort."
        },
        "pictogram": "pikto-lock"
      },
      {
        "title": "Doppelt sicher",
        "pictogram": "pikto-key",
        "module": "Passwort",
        "icon": "lock",
        "text": [
          {
            "text": "Manche Konten kann man doppelt sichern.",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Das heißt: Zwei-Faktor.",
            "pictogram": "pikto-key"
          },
          {
            "text": "Du gibst dein Passwort ein.",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Dann schickt die App eine Zahl auf dein Handy.",
            "pictogram": "pikto-phone"
          },
          {
            "text": "Du gibst die Zahl ein. Nur du hast dein Handy.",
            "pictogram": "pikto-phone"
          },
          {
            "text": "Die Zahl ist geheim.",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Du sagst die Zahl niemandem. Auch nicht am Telefon.",
            "pictogram": "pikto-no"
          },
          {
            "text": "Eine vertraute Person kann dir beim Einrichten helfen.",
            "pictogram": "pikto-help"
          }
        ],
        "practice": {
          "question": "Was macht dein Konto doppelt sicher?",
          "pictogram": "pikto-lock",
          "answers": [
            "Ein kurzes Passwort.",
            "Passwort und eine Zahl auf deinem Handy."
          ],
          "correctIndex": 1,
          "feedbackCorrect": "Das ist richtig. Passwort plus Zahl auf dem Handy: Das ist doppelt sicher.",
          "feedbackWrong": "Das ist noch nicht richtig. Doppelt sicher heißt: Passwort und eine Zahl auf deinem Handy.",
          "remember": "Doppelt sichern schützt mein Konto."
        },
        "remember": "Doppelt sichern schützt mein Konto."
      },
      {
        "title": "Ohne Passwort anmelden",
        "pictogram": "pikto-key",
        "module": "Passwort",
        "icon": "lock",
        "text": [
          {
            "text": "Manche Konten brauchen kein Passwort mehr.",
            "pictogram": "pikto-key"
          },
          {
            "text": "Das heißt: Passkey.",
            "pictogram": "pikto-key"
          },
          {
            "text": "Du legst den Finger auf dein Handy.",
            "pictogram": "pikto-phone"
          },
          {
            "text": "Oder du zeigst dein Gesicht.",
            "pictogram": "pikto-phone"
          },
          {
            "text": "Dann bist du angemeldet.",
            "pictogram": "pikto-done"
          },
          {
            "text": "Du musst dir nichts merken.",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Niemand kann dein Passwort erraten. Du hast keins.",
            "pictogram": "pikto-lock"
          },
          {
            "text": "Ein Passkey gehört zu einem Konto.",
            "pictogram": "pikto-key"
          },
          {
            "text": "Dein Finger bleibt auf deinem Handy. Die Internet-Seite bekommt deinen Finger nicht.",
            "pictogram": "pikto-phone"
          },
          {
            "text": "Eine vertraute Person hilft dir beim Einrichten.",
            "pictogram": "pikto-help"
          }
        ],
        "examples": [
          "Du meldest dich bei deinem Konto mit dem Finger an.",
          "Du meldest dich beim Shop mit deinem Gesicht an."
        ],
        "practice": {
          "question": "Was brauchst du bei einem Passkey?",
          "pictogram": "pikto-key",
          "answers": [
            "Ein langes Passwort.",
            "Deinen Finger oder dein Gesicht."
          ],
          "correctIndex": 1,
          "feedbackCorrect": "Das ist richtig. Bei einem Passkey zeigst du deinen Finger oder dein Gesicht.",
          "feedbackWrong": "Das ist noch nicht richtig. Bei einem Passkey brauchst du kein Passwort.",
          "remember": "Mit Passkey brauche ich kein Passwort."
        },
        "remember": "Mit Passkey brauche ich kein Passwort."
      }
    ],
    /* Fassungen in Einfacher Sprache und Alltagssprache, wortgleich aus
       CONTENT_VERSIONS.datenschutz verschoben (Schlüssel = Lektions-Titel). */
    versionen: {
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
    }
    }
  }
};

/* Hängt die Fassungen an die Lektionen, wie applyContentVersions() es für
   Themen tut. Überschreibt nie etwas Vorhandenes. */
function applyWeiterlernen() {
  if (typeof WEITERLERNEN === "undefined") return 0;
  let n = 0;
  Object.keys(WEITERLERNEN).forEach(function (tid) {
    const w = WEITERLERNEN[tid];
    (w.lektionen || []).forEach(function (l) {
      const v = w.versionen && w.versionen[l.title];
      if (v && !l.versions) { l.versions = v; n++; }
    });
  });
  return n;
}
