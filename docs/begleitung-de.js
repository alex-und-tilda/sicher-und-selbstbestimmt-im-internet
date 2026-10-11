/* ============================================================
   Begleit-Ebene „Für Begleitpersonen und Fachkräfte"
   Praktische Hilfen für das gemeinsame Lernen

   Eigene, klar getrennte Ebene – KEINE Sprach-Stufe für Lernende.
   Sie erscheint als aufklappbares Panel im Themen-Einstieg und
   richtet sich an Betreuende, Assistenz, Angehörige und Fachkräfte.

   Aufbau:  COMPANION[themaId] = { praxis{vorbereiten[], fragen[], helfen[],
            erkennen[], alltag[]}, lernziele[],
            methodik[], gespraechsanlaesse[], begleithinweise[],
            rechtsbezuege[], transfer[], lektionen{short{}, full{}} }

   Die neuen praktischen Hinweise und die gemeinsame Unterstützungsfolge
   sind ein Begleitentwurf, keine bereits geprüften Lerntexte.
   Fachliche Zuordnungen werden ausschließlich intern gepflegt.
   Verknüpfung am Ende: applyCompanion() hängt es als topic.companion an.
   ============================================================ */

/* Gemeinsame Unterstützung nach Wunsch, Begleitentwurf vom 09.10.2026.
   Diese Folge ist kein Test und keine Voraussetzung für Hilfe. */
const COMPANION_HILFE = [
  "Vor dem Helfen fragen: Welche Hilfe möchtest du? Vorlesen, Vormachen oder ein eigenes Gerät ansehen nur mit Einverständnis. Übungen gehen auch mit erfundenen Beispielen. Niemand muss ein Konto, Nachrichten oder private Daten zeigen.",
  "Denselben Schritt gemeinsam ansehen. Eine kurze Frage stellen und Zeit für die eigene Antwort lassen.",
  "Auf Wunsch ein anderes Beispiel anbieten oder einen Schritt vormachen. Dafür nur erfundene Angaben verwenden.",
  "Die Person kann selbst ausprobieren oder selbst entscheiden. Das Gerät und die Entscheidung bleiben bei ihr.",
  "Pause und Hilfe sind jederzeit möglich. Niemand muss es erst allein versuchen oder etwas richtig beantworten. Was jemand in einer Übung zeigt, sagt nicht sicher, was im Alltag allein gelingt."
];

const COMPANION = {
  datenschutz: {
    praxis: {
      "vorbereiten": [
        "Ein erfundenes Formular mit nötigen und freiwilligen Angaben bereithalten. Keine echten Daten eintragen."
      ],
      "fragen": [
        "Wofür braucht die App oder das Formular diese Angabe?",
        "Welche Daten sind für diesen Zweck nötig, und welche können offenbleiben?"
      ],
      "helfen": [
        "Eine Angabe gemeinsam prüfen: Wer bekommt sie? Wofür wird sie gebraucht? Wie viele Angaben sind dafür nötig? Ein Pflichtfeld ist noch keine Begründung.",
        "Bei unklarem Zweck gemeinsam eine Rückfrage überlegen. Die Person entscheidet über die Freigabe."
      ],
      "erkennen": [
        "Darauf achten, ob die Person beim nächsten Beispiel den Zweck prüft, statt immer Ja oder immer Nein zu wählen."
      ],
      "alltag": [
        "Auf Wunsch bei einer selbst gewählten App eine Berechtigung ansehen. Änderungen nur mit Einverständnis; die Person entscheidet."
      ]
    },
    lernziele: [
      "Die Teilnehmenden erkennen persönliche Angaben, zum Beispiel Standort, Fotos und Kontakte.",
      "Sie fragen bei einer Datenabfrage: Wer bekommt die Angaben? Wofür werden sie gebraucht? Welche Angaben sind dafür nötig?",
      "Sie entscheiden selbst, welche Daten sie weitergeben oder freigeben. Das schließt ein begründetes Ja ein, nicht nur ein Nein.",
      "Bei Unsicherheit schieben sie die Entscheidung auf und holen sich gezielt Unterstützung."
    ],
    methodik: [
      "Roter Faden ist der 5-Schritte-Plan: Stopp – Wer bekommt oder sieht es? – Was genau? – Wofür, und wie viel davon ist nötig? – Ich entscheide. Wenn du unsicher bist, gib noch nichts weiter. Frag nach oder hol Hilfe.",
      "Pflicht ist nicht gleich nötig: Ein Pflichtfeld heißt nur, dass das Formular ohne diese Angabe nicht weitergeht. Ob die Angabe für den Zweck nötig ist, ist eine eigene Prüfung. Ist der Zweck unklar, erst nachfragen oder den Dienst nicht nutzen – nicht einfach ausfüllen, weil es Pflicht ist.",
      "Nicht nur Nein üben: gemeinsam Fälle besprechen, in denen Daten nötig sind (z. B. Lieferadresse beim bekannten Shop), und solche, bei denen der Umfang entscheidet (z. B. Standort nur während der Nutzung).",
      "Alltagsnahe, erfundene Beispiele nutzen. Niemand muss das eigene Handy, eine Lieblings-App oder echte Nachrichten zeigen.",
      "Pro Einheit einen Lernschritt behandeln. Pausen anbieten und die Pause-Funktion zeigen.",
      "Vor der Erklärung fragen, was die Person selbst vermutet. Sie darf auch passen oder gleich Hilfe wählen.",
      "Die Merk-Karte gemeinsam ansehen oder vorlesen. Aufhängen oder ausdrucken nur, wenn die Person das möchte.",
      "Zu zweit üben, wenn beide das möchten. Eine weitere lernende Person kann eigene Erfahrungen teilen.",
      "Wertschätzendes Feedback: Fehler sind erlaubt und normal; Entscheidungen respektvoll besprechen und hilfreiche Schritte anerkennen."
    ],
    gespraechsanlaesse: [
      "Welche Daten von dir kennen andere Menschen schon? Welche möchtest du für dich behalten?",
      "Welche Angaben könnte eine App verlangen? Welche davon braucht sie für einen bestimmten Zweck? Wir können ein erfundenes Beispiel nehmen.",
      "Welche Angaben können für einen Arzttermin oder eine Bestellung nötig sein? Was sollte man vorher fragen?"
    ],
    begleithinweise: [
      "Fotos mit anderen Personen: Wer auf einem Foto zu sehen ist, entscheidet mit, ob es geteilt wird. Vorher fragen – auch in Gruppen und im Status.",
      "Auf Verunsicherung achten: Manche merken hier, dass sie schon viele Daten angegeben oder Fotos geteilt haben. Nicht beschämen, normalisieren („Das haben viele so gemacht“) und zeigen, was sich jetzt noch ändern lässt – zum Beispiel Einstellungen und App-Berechtigungen.",
      "Keine echten Passwörter oder Daten im Kurs eingeben lassen – immer nur Beispiele verwenden.",
      "Selbstbestimmung wahren: Die Teilnehmenden entscheiden selbst; die Begleitperson berät, übernimmt aber nicht.",
      "Bei realen Vorfällen (Betrug, Datendiebstahl) konkrete Hilfe organisieren statt nur darüber zu sprechen."
    ],
    rechtsbezuege: [
      "UN-Behindertenrechtskonvention, Artikel 9 (Zugänglichkeit) und Artikel 21 (Zugang zu Informationen): Grundlage für barrierefreie digitale Teilhabe.",
      "SGB IX: Teilhabe und Selbstbestimmung als Leitprinzip der Eingliederungshilfe.",
      "KDG (Katholisches Datenschutzgesetz): maßgeblich beim kirchlichen Träger; das Grundprinzip Datensparsamkeit wird hier didaktisch vermittelt.",
      "Gemeinsam lernen: Die lernende Person entscheidet, was sie selbst tun möchte und wobei sie Hilfe wünscht."
    ],
    transfer: [
      "Nur auf ausdrücklichen Wunsch gemeinsam die Einstellungen einer selbst gewählten App ansehen. Die Person entscheidet, ob sie etwas zeigt oder ändert.",
      "Nur auf ausdrücklichen Wunsch die Zugriffe einer selbst gewählten App ansehen. Die Person entscheidet, ob sie etwas zeigt oder ändert."
    ]
  },

  whatsapp: {
    praxis: {
      "vorbereiten": [
        "Erfundene Nachrichten bereithalten: eine normale Nachricht und eine Geldbitte von einer neuen Nummer. Keine echten Chats öffnen."
      ],
      "fragen": [
        "Was verlangt die Nachricht von dir?",
        "Wie kannst du die Person über eine Telefonnummer erreichen, die du schon vorher hattest?"
      ],
      "helfen": [
        "Die Geldbitte ohne Zeitdruck gemeinsam lesen. Auf Wunsch das Beenden und den selbst gewählten Rückruf im Rollenspiel zeigen.",
        "Bei einer Code-Frage nur Beispielzahlen verwenden. Kein echter Code wird abgefragt oder weitergegeben."
      ],
      "erkennen": [
        "Darauf achten, ob die Person die Geldbitte selbst prüft, statt allein dem Namen oder der Dringlichkeit zu vertrauen."
      ],
      "alltag": [
        "Auf Wunsch gemeinsam ansehen, wer das Profilbild sehen darf. Die Person wählt die Einstellung und bedient ihr Gerät selbst."
      ]
    },
    lernziele: [
      "Die Teilnehmenden nutzen WhatsApp für Nachrichten, Fotos und Gruppen und entscheiden selbst, wem sie antworten.",
      "Sie erkennen Betrugsmaschen wie den „Hallo-Mama-Trick“ und reagieren nicht vorschnell.",
      "Sie geben Bestätigungs-Codes und Geld nicht an fremde Nummern weiter.",
      "Sie wissen, dass die KI Meta AI kein Mensch ist."
    ],
    methodik: [
      "An zwei erfundenen Beispiel-Chats üben. Keine privaten Nachrichten öffnen oder zeigen lassen.",
      "Einen Trick pro Einheit behandeln. Pausen anbieten.",
      "Zwei erfundene Beispielnachrichten vergleichen. Keine privaten Chats zeigen lassen.",
      "Eine erfundene Betrugsnachricht nachspielen: Eine Person liest vor, die andere überlegt einen sicheren nächsten Schritt.",
      "Die Merk-Karte gemeinsam lesen oder ansehen. Aufhängen nur, wenn die Person das möchte."
    ],
    gespraechsanlaesse: [
      "Was könnte man bei einer Nachricht von einer neuen Nummer tun? Wir können mit einem erfundenen Beispiel üben.",
      "Was könnte eine Person in diesem erfundenen Beispiel tun, wenn eine angebliche Tochter mit neuer Nummer Geld verlangt?",
      "Welche Dinge gehören in eine Gruppe – und welche nicht?"
    ],
    begleithinweise: [
      "Geld- und Betrugsthemen können Angst machen: ruhig bleiben, normalisieren, bei Bedarf pausieren.",
      "Keine echten Codes oder Bankdaten verwenden – nur Beispiele.",
      "Bei realem Betrugsverdacht sofort konkrete Hilfe organisieren (Bank, Vertrauensperson, Anzeige)."
    ],
    rechtsbezuege: [
      "UN-BRK Artikel 9 und 21: barrierefreie Kommunikation und Information.",
      "SGB IX: Selbstbestimmung und Schutz vor Ausnutzung.",
      "KDG: Datensparsamkeit; keine sensiblen Daten in Chats.",
      "Betrug ist strafbar (§ 263 StGB) – im Schadensfall Anzeige möglich."
    ],
    transfer: [
      "Auf Wunsch die Einstellungen an einem erfundenen Beispiel zeigen. Einstellungen am eigenen Konto nur mit Einverständnis ansehen oder ändern.",
      "Blockieren und Melden an einem erfundenen Beispiel zeigen. Echte Kontakte oder Nachrichten nur auf ausdrücklichen Wunsch ansehen.",
      "Sperr-Notruf 116 116 und Vertrauensperson notieren."
    ]
  },

  facebook: {
    praxis: {
      "vorbereiten": [
        "Ein erfundenes Profil und Beispielnachrichten verwenden. Für Foto-Fragen ein erfundenes Bild mit zwei Personen auswählen."
      ],
      "fragen": [
        "Wer soll diesen Beitrag sehen?",
        "Sind alle Personen auf dem Foto damit einverstanden, dass genau diese Menschen das Foto sehen können?"
      ],
      "helfen": [
        "Die Auswahl für einen einzelnen Beitrag gemeinsam ansehen. Darauf hinweisen, dass Profilbild und Beiträge verschiedene Einstellungen haben.",
        "Bei einer Geldbitte den Link geschlossen lassen. Die angeblich bekannte Person über eine Telefonnummer kontaktieren, die schon vorher bekannt war. Auf Wunsch Schließen, Blockieren oder Melden zeigen."
      ],
      "erkennen": [
        "Gemeinsam besprechen, wer den Beitrag sehen soll und warum ein Nein zum Teilen eines Fotos gilt. Das ist eine Beobachtung in der Übung, kein Nachweis für selbstständiges Handeln im Alltag."
      ],
      "alltag": [
        "Auf Wunsch bei einem selbst gewählten Beitrag die Sichtbarkeit prüfen. Nichts ohne Einverständnis veröffentlichen oder ändern."
      ]
    },
    lernziele: [
      "Die Teilnehmenden gestalten ihr Profil so, dass private Angaben nicht öffentlich sind.",
      "Sie prüfen Freundschafts-Anfragen und nehmen nicht jede an.",
      "Sie schreiben respektvoll und holen sich bei Beleidigungen Hilfe.",
      "Sie kennen einen einfachen Handlungsplan bei Problemen: blockieren, melden, einer vertrauten Person erzählen, Hilfe holen."
    ],
    methodik: [
      "Mit einem erfundenen Beispiel-Profil üben. Das eigene Profil nur auf Wunsch und mit Einverständnis ansehen.",
      "Gemeinsam an erfundenen Angaben überlegen: Wer soll sie sehen können?",
      "Nur einen Schritt auf einmal ansehen. Die Merk-Karte gemeinsam lesen oder ansehen.",
      "Einstellungen zu zweit ansehen, wenn die Person das möchte. Sie entscheidet, was gezeigt oder geändert wird."
    ],
    gespraechsanlaesse: [
      "Welche Angaben in deinem Profil sollen alle sehen – welche nur Freunde?",
      "Wie erkennst du ein echtes von einem falschen Profil?",
      "Was tust du, wenn dich jemand im Internet beleidigt?"
    ],
    begleithinweise: [
      "Beleidigungen und Cyber-Mobbing ernst nehmen; Gefühlen Raum geben.",
      "Einstellungen sind komplex – die Begleitperson unterstützt, entscheidet aber nicht für die Person.",
      "Bei Mobbing kann die Person auf Wunsch einen Beleg sichern, zum Beispiel ein Bildschirmfoto. Nur wenn das sicher ist und keine anderen privaten Daten offengelegt werden. Dann passende Hilfe anbieten.",
      "Foto-Einwilligung: am erfundenen Beispiel fragen, wer zu sehen ist und welche Personen das Bild sehen können. Vor dem Teilen müssen alle abgebildeten Personen zustimmen. Ein Nein respektieren; gemeinsam ein anderes Bild überlegen.",
      "Geld-Link in einer Nachricht: am erfundenen Beispiel Geldbitte und Link gemeinsam ansehen. Die Person kann den Link geschlossen lassen und kein Geld senden. Bei einem angeblich bekannten Absender über einen schon bekannten Kontakt selbst nachfragen, statt den Link oder die neue Nummer zu nutzen. Auf Wunsch Schließen, Blockieren oder Melden zeigen."
    ],
    rechtsbezuege: [
      "UN-BRK Artikel 21: Zugang zu Information und Meinungsäußerung.",
      "SGB IX: Teilhabe und Selbstbestimmung.",
      "KDG und Datenschutz: sparsam mit öffentlichen Angaben.",
      "Beleidigung ist strafbar (§ 185 StGB)."
    ],
    transfer: [
      "Auf Wunsch gemeinsam ansehen, wer Beiträge sehen darf. Die Person entscheidet selbst, ob sie etwas ändern möchte.",
      "Eine erfundene Freundschafts-Anfrage gemeinsam prüfen.",
      "Blockieren und Melden an einer erfundenen Situation zeigen."
    ]
  },

  instagram: {
    praxis: {
      "vorbereiten": [
        "Ein erfundenes Foto mit erkennbaren Hinweisen im Hintergrund und ohne echte private Daten bereithalten."
      ],
      "fragen": [
        "Was sehen andere auf dem Foto außer der Person?",
        "Ist jemand mit dem Teilen nicht einverstanden?"
      ],
      "helfen": [
        "Auf Wunsch gemeinsam im Beispiel nach Namen, Adressen oder Standort-Hinweisen suchen. Die Person wählt, ob das Bild geteilt werden soll.",
        "Bei einer unerwünschten Nachricht die möglichen Wege Schließen, Blockieren und Melden am Beispiel zeigen."
      ],
      "erkennen": [
        "Darauf achten, ob die Person vor dem Posten auch Hintergrund, Standort und Zustimmung anderer berücksichtigt."
      ],
      "alltag": [
        "Auf Wunsch die Sichtbarkeit oder Standort-Angabe eines selbst gewählten Beitrags ansehen. Die Person entscheidet über jede Änderung."
      ]
    },
    lernziele: [
      "Die Teilnehmenden prüfen Fotos und Videos vor dem Posten und achten auf den Hintergrund.",
      "Sie schützen ihren Standort und antworten Fremden nicht vorschnell.",
      "Sie wissen, dass viele Bilder bearbeitet sind, und vergleichen sich nicht damit."
    ],
    methodik: [
      "Mit erfundenen Beispiel-Posts und Beispiel-Stories üben. Niemand muss eigene Inhalte zeigen.",
      "An einem Beispiel-Foto überlegen: Welche Informationen verrät der Hintergrund?",
      "Medienkritik: echtes und bearbeitetes Bild vergleichen.",
      "Die Merk-Karte gemeinsam lesen oder ansehen. Einstellungen nur mit Einverständnis ändern."
    ],
    gespraechsanlaesse: [
      "Welche Informationen könnte ein Hintergrund auf diesem Beispiel-Foto verraten?",
      "Warum teilst du deinen Standort besser nicht mit allen?",
      "Kann ein Bild bearbeitet sein? Woran könnte man das merken?"
    ],
    begleithinweise: [
      "Selbstwert-Thema (bearbeitete Bilder) behutsam begleiten, nicht abwerten.",
      "Bei privaten Nachrichten von Fremden auf Anzeichen von Grooming achten und ernst nehmen.",
      "Keine privaten Bilder erstellen oder teilen lassen."
    ],
    rechtsbezuege: [
      "UN-BRK Artikel 9 und 21: digitale Teilhabe und Schutz.",
      "SGB IX: Selbstbestimmung.",
      "Recht am eigenen Bild: Einwilligung abgebildeter Personen; KDG.",
      "Bei sexueller Belästigung: Schutzauftrag, sofort Hilfe holen."
    ],
    transfer: [
      "Auf Wunsch gemeinsam die Standortfreigabe ansehen. Die Person entscheidet selbst, ob sie sie ausschalten möchte.",
      "Auf Wunsch zeigen, wie ein privates Konto funktioniert. Die Person entscheidet über die Einstellung.",
      "Eine fremde Nachricht gemeinsam einordnen und blockieren."
    ]
  },

  youtube: {
    praxis: {
      "vorbereiten": [
        "Ein kurzes unbedenkliches Beispielvideo und eine deutlich erkennbare Werbeaussage auswählen. Keine gefährliche Mutprobe vorführen."
      ],
      "fragen": [
        "Will das Video etwas erklären oder etwas verkaufen?",
        "Wie kannst du diese Behauptung außerhalb des Videos prüfen?"
      ],
      "helfen": [
        "Eine Aussage mit einer zweiten, verlässlichen Quelle vergleichen, zum Beispiel einer offiziellen Informationsseite. Viele Aufrufe allein beweisen nicht, dass etwas stimmt.",
        "Auf Wunsch zeigen, wie ein Video gestoppt und die automatische Wiedergabe ausgeschaltet wird. Die Person wählt ihre Pause."
      ],
      "erkennen": [
        "Darauf achten, ob die Person Werbung von einer Erklärung unterscheidet und bei einer fraglichen Aussage einen weiteren Beleg sucht."
      ],
      "alltag": [
        "Die Person kann bei einem selbst gewählten Video eine Aussage prüfen oder eine Pause ausprobieren. Keine verpflichtende Zeitkontrolle."
      ]
    },
    lernziele: [
      "Die Teilnehmenden prüfen Video-Aussagen kritisch und glauben nicht alles sofort.",
      "Sie erkennen Werbung und lassen sich nicht zu Käufen drängen.",
      "Sie machen bewusst Pausen und machen gefährliche Mutproben nicht nach."
    ],
    methodik: [
      "Mit einem frei gewählten oder erfundenen Beispielvideo üben.",
      "Eine Aussage aus dem Beispiel gemeinsam prüfen.",
      "Besprechen, dass das nächste Video automatisch starten kann. Die Person entscheidet selbst über Pausen.",
      "Die Merk-Karte gemeinsam lesen oder ansehen."
    ],
    gespraechsanlaesse: [
      "Hast du in einem Video schon mal etwas gesehen, das nicht stimmen konnte?",
      "Wie merkst du, dass ein Video Werbung ist?",
      "Was kann eine Person tun, wenn ein Video Angst macht? Hilfe und Pause sind möglich."
    ],
    begleithinweise: [
      "Angst machende oder gefährliche Inhalte (Challenges) ernst nehmen und einordnen.",
      "Mediennutzungszeit beobachten, ohne zu bevormunden.",
      "Bei verstörenden Inhalten Gespräch und Pause anbieten."
    ],
    rechtsbezuege: [
      "UN-BRK Artikel 21: Zugang zu Information und kritische Medienkompetenz.",
      "SGB IX: Teilhabe, Gesundheit, Selbstbestimmung.",
      "Verbraucher- und Jugendschutz: Werbung muss erkennbar sein."
    ],
    transfer: [
      "Auf Wunsch die automatische Wiedergabe an einem Beispiel zeigen. Die Person entscheidet selbst, ob sie sie ausschaltet.",
      "Eine Werbung im Video zusammen erkennen.",
      "Auf Wunsch eine eigene Pausen-Idee ausprobieren, zum Beispiel nach 20 Minuten. Die Person entscheidet selbst, ob und wie sie eine Pause machen möchte."
    ]
  },

  snapchat: {
    praxis: {
      "vorbereiten": [
        "Erfundene Bilder und Nachrichten verwenden. Keine sehr privaten Bilder verlangen, anschauen oder für die Übung versenden."
      ],
      "fragen": [
        "Was kann mit einem Bild passieren, auch wenn es später nicht mehr im Chat zu sehen ist?",
        "Was möchtest du tun, wenn jemand ein Bild fordert und Geheimhaltung verlangt?"
      ],
      "helfen": [
        "Am unbedenklichen Beispiel erklären, dass ein Bild kopiert werden kann. Für den Bildvergleich reicht die Übung in der App.",
        "Bei Druck ruhig zuhören und auf Wunsch das Beenden oder Hilfeholen üben. Keine Offenlegung privater Bilder als Voraussetzung verlangen."
      ],
      "erkennen": [
        "Darauf achten, ob die Person ein Bild auch bei behauptetem Verschwinden bewusst auswählt und bei Druck eine Grenze setzen kann."
      ],
      "alltag": [
        "Auf Wunsch gemeinsam ansehen, wer den Standort sehen darf. Die Person entscheidet, ob sie eine Einstellung ändern möchte."
      ]
    },
    lernziele: [
      "Die Teilnehmenden wissen, dass „verschwindende“ Bilder gespeichert werden können.",
      "Sie schützen ihren Standort und lassen sich nicht zu privaten Bildern drängen.",
      "Sie erkennen Geheimhaltungs-Druck als Warnzeichen und holen Hilfe."
    ],
    methodik: [
      "Mit erfundenen Beispielen üben. Keine eigenen Fotos oder Konten öffnen.",
      "Gemeinsam besprechen, was mit einem Bild passieren kann.",
      "Klares Stopp- und Nein-Training (Rollenspiel).",
      "Die Merk-Karte gemeinsam ansehen. Bei Bedarf kann eine zweite lernende Person mitüben."
    ],
    gespraechsanlaesse: [
      "Glaubst du, ein Snap ist wirklich für immer weg?",
      "Was machst du, wenn jemand ein Bild will und sagt: erzähl es niemandem?",
      "Wer soll sehen, wo du gerade bist?"
    ],
    begleithinweise: [
      "Sensibles Thema (Druck zu intimen Bildern, Sextortion): ernst nehmen, nicht beschämen, Schutz organisieren.",
      "Snap Map und Standort gemeinsam prüfen.",
      "Bei Druck oder Erpressung: nicht zahlen, sichern, Hilfe und gegebenenfalls Polizei."
    ],
    rechtsbezuege: [
      "UN-BRK Artikel 9 und 21 sowie Schutzrechte.",
      "SGB IX: Selbstbestimmung und Schutz vor Ausnutzung.",
      "Recht am eigenen Bild; bei Minderjährigen Schutzauftrag.",
      "Erpressung und Nötigung sind strafbar (§§ 240, 253 StGB)."
    ],
    transfer: [
      "Auf Wunsch zeigen, wie der Geistmodus funktioniert. Die Person entscheidet selbst über die Standortfreigabe.",
      "Einen Stopp- und Nein-Satz gemeinsam üben.",
      "Vertrauensperson und Hilfe-Kontakte notieren."
    ]
  },

  tiktok: {
    praxis: {
      "vorbereiten": [
        "Einen unbedenklichen Trend und eine erfundene Nachricht mit einer Daten- oder Foto-Forderung als Beispiele wählen."
      ],
      "fragen": [
        "Möchtest du bei diesem Trend mitmachen? Was gefällt dir daran, und was kann dir schaden?",
        "Wie merkst du, dass du eine Pause möchtest?"
      ],
      "helfen": [
        "Eine Ablehnung im Rollenspiel ausprobieren: nicht mitmachen oder die Nachricht schließen. Niemand muss einen gefährlichen Trend vorführen.",
        "Auf Wunsch gemeinsam nachsehen, wie unerwünschte Kontakte blockiert oder gemeldet werden. Keine privaten Nachrichten ohne Zustimmung öffnen."
      ],
      "erkennen": [
        "Darauf achten, ob die Person bei Druck selbst eine Grenze wählt oder eine Pause einlegt. Viele Aufrufe sind kein Sicherheitsbeleg."
      ],
      "alltag": [
        "Die Person kann eine selbst gewählte Pause oder eine Einstellung für Nachrichten ausprobieren. Keine Kontrolle der Nutzungszeit erzwingen."
      ]
    },
    lernziele: [
      "Die Teilnehmenden erkennen gefährliche Trends und machen sie nicht nach.",
      "Sie schützen private Daten und antworten Fremden nicht vorschnell.",
      "Sie überlegen, ob sie eine Pause möchten und dass die App oft weitere Videos vorschlägt.",
      "Sie wissen, dass viele Videos mit KI gefälscht sein können."
    ],
    methodik: [
      "Einen öffentlich bekannten, unbedenklichen Trend als Beispiel besprechen. Niemand muss den eigenen Verlauf oder das eigene Konto zeigen.",
      "Einen Trend als Beispiel einschätzen: Was daran ist interessant? Was könnte gefährlich sein?",
      "Besprechen, dass die App weitere Videos vorschlägt, und fragen, ob die Person eine Pause möchte.",
      "Die Merk-Karte gemeinsam ansehen. Bei Bedarf kann eine zweite lernende Person mitüben."
    ],
    gespraechsanlaesse: [
      "Welche bekannten Trends könnten gefährlich sein? Wir können mit einem Beispiel üben.",
      "Warum schlägt eine App oft weitere Videos vor? Möchtest du weiterschauen oder eine Pause machen?",
      "Wie erkennst du, dass ein Video gefälscht sein könnte?"
    ],
    begleithinweise: [
      "Gruppendruck bei Challenges ernst nehmen; Selbstwirksamkeit stärken („ich muss nicht mitmachen“).",
      "Mediennutzungszeit begleiten; Gefühle nach Videos besprechen.",
      "Keine privaten Daten in Kommentaren oder Direktnachrichten."
    ],
    rechtsbezuege: [
      "UN-BRK Artikel 21; SGB IX (Teilhabe, Gesundheit, Selbstbestimmung).",
      "KDG und Datenschutz; Jugendschutz bei gefährlichen Inhalten."
    ],
    transfer: [
      "Auf Wunsch eine selbst gewählte Pause oder Erinnerung ausprobieren. Die Person entscheidet, ob eine Einstellung geändert werden soll.",
      "Auf Wunsch zeigen, wie ein privates Konto funktioniert. Die Person entscheidet selbst über die Einstellung.",
      "Einen gefährlichen Trend gemeinsam als „nicht nachmachen“ einordnen."
    ]
  },

  hilfe: {
    praxis: {
      "vorbereiten": [
        "Zwei erfundene Situationen wählen: ein Handy ohne Ton und eine Nachricht, die Druck macht. Passende Hilfekontakte gemeinsam bereithalten."
      ],
      "fragen": [
        "Was ist los: Technik, Druck oder Angst, oder ist jemand gerade in Gefahr?",
        "Welche Hilfe möchtest du jetzt?"
      ],
      "helfen": [
        "Den Hilfe-Check am selben Beispiel durchgehen. Bei einem harmlosen Technikproblem sind selbst ausprobieren und Hilfeholen mögliche Wege.",
        "Hilfe sofort anbieten, auch ohne vorherigen Eigenversuch. Die Person kann zeigen oder erzählen; das Gerät bleibt bei ihr."
      ],
      "erkennen": [
        "Darauf achten, ob die Person zum Problem einen passenden nächsten Schritt wählt. Bei akuter Gefahr zählt sofortige Hilfe, kein Übungsdurchgang."
      ],
      "alltag": [
        "Auf Wunsch eine persönliche Hilfe-Karte mit selbst gewählten Kontakten erstellen. Die Karte bleibt bei der Person."
      ]
    },
    /* Paket H1 (30.09.2026): neue fachliche Lernziel-Struktur (6 Ziele, siehe
       topics.js › hilfe.lernzielStruktur). Grundprinzip: so viel Unterstützung
       wie nötig, so viel Selbstständigkeit wie möglich. Die alte Fassung dieses
       Eintrags liegt in geparkt/hilfe-umbau-2026-09-30.js.
       Paket H5 (03.10.2026): Methodik nennt Übungen, Quiz und neue Situation;
       Gesprächsanlässe und Alltagstransfer an den Hilfe-Check angeglichen (kein
       „nicht sofort löschen“ mehr, keine Nummer außer 110 und 112). */
    lernziele: [
      "Die Teilnehmenden unterscheiden, welche Art von Problem vorliegt: Etwas klappt nicht – etwas macht Druck oder Angst – jemand ist akut in Gefahr.",
      "Sie handeln selbst, wo es sicher geht: ausprobieren, noch einmal nachsehen, schließen, ignorieren, blockieren oder melden.",
      "Bei Druck oder Angst halten sie zuerst an und senden, zahlen oder bestätigen nichts vorschnell.",
      "Sie wählen eine passende Unterstützung aus: technische Unterstützung, eine Vertrauensperson oder eine Beratungsstelle.",
      "Sie holen Unterstützung tatsächlich ein: Sie zeigen oder erklären das Problem und fragen eine weitere Person, wenn die erste nicht helfen kann.",
      "Sie erkennen einen Notfall und holen sofort eine Person vor Ort oder wählen 110 bzw. 112."
    ],
    methodik: [
      "Quer-Thema: als Anker bei allen anderen Themen mitnutzen.",
      "Roter Faden ist der Hilfe-Check mit drei Fragen: Was ist los? – Was kann ich selbst tun? – Welche Hilfe passt? Ein Notfall wird schon bei der ersten Frage erkannt (Person vor Ort holen, 110 oder 112). Nicht jedes Problem heißt „sofort jemanden fragen“.",
      "Übungen und Quiz enthalten bewusst auch harmlose Technik-Probleme, bei denen selbst ausprobieren der passende Weg ist. Die Rückmeldung „Das geht auch“ ist kein Fehler: gemeinsam besprechen, warum hier mehrere Wege sicher sind.",
      "Die neue Situation am Ende (eine Nachricht mit Druck von einem Bekannten) geht den Hilfe-Check einmal ganz durch – ein guter Anlass, die drei Fragen laut mitzusprechen.",
      "Rollenspiel: Hilfe holen üben (was zeige ich, was habe ich schon probiert, wen frage ich als Nächstes?).",
      "Die Merk-Karte gemeinsam ansehen; Notfall-Kontakte sichtbar machen."
    ],
    gespraechsanlaesse: [
      "Welches Problem mit dem Handy hast du schon einmal selbst gelöst?",
      "Woran merkst du, dass dir eine Nachricht Druck oder Angst macht?",
      "Wen fragst du bei einem Handy-Problem – und mit wem sprichst du bei Druck oder Angst?",
      "Was hilft dir, ruhig zu bleiben?"
    ],
    begleithinweise: [
      "Sicheren, vorwurfsfreien Rahmen schaffen: Hilfe holen ist Stärke, nicht Versagen.",
      "Vor dem Unterstützen fragen, welche Hilfe die Person möchte. Hilfe ist auch ohne vorherigen Eigenversuch möglich; nicht das Handy aus der Hand nehmen.",
      "Konkrete regionale Beratungs- und Notfall-Kontakte bereithalten.",
      "Bei akuten Vorfällen sofort handeln, nicht nur besprechen."
    ],
    rechtsbezuege: [
      "UN-BRK Artikel 9 und 21: Zugänglichkeit und Unterstützung.",
      "SGB IX: Anspruch auf Unterstützung, Assistenz und Teilhabe.",
      "KDG; Schutzkonzepte des Trägers einbeziehen."
    ],
    transfer: [
      "Eine persönliche Hilfe-Karte erstellen: eine Person für Handy-Fragen, eine Vertrauensperson, für den Notfall 110 und 112.",
      "Ein Bildschirmfoto nur an einem erfundenen Beispiel üben. Keine privaten Nachrichten oder Kontodaten abbilden.",
      "Den Hilfe-Knopf der Plattform zeigen und ausprobieren."
    ]
  },

  ki: {
    praxis: {
      "vorbereiten": [
        "Eine harmlose erfundene KI-Antwort bereithalten. Keine Namen, Gesundheitsangaben, Kontodaten oder anderen privaten Daten eingeben."
      ],
      "fragen": [
        "Wie kannst du prüfen, ob diese Antwort stimmt?",
        "Was machst du, wenn eine bekannte Stimme plötzlich Geld verlangt?"
      ],
      "helfen": [
        "Eine überprüfbare Aussage aus der KI-Antwort mit einer zweiten verlässlichen Quelle vergleichen, zum Beispiel mit einer offiziellen Informationsseite.",
        "Auf Wunsch einen Rückruf im Rollenspiel zeigen: Gespräch beenden und eine schon bekannte Nummer selbst wählen. Die Stimme allein reicht nicht."
      ],
      "erkennen": [
        "Darauf achten, ob die Person eine KI-Antwort überprüft und die bekannte Stimme nicht als sicheren Nachweis behandelt."
      ],
      "alltag": [
        "Die Person kann eine unverfängliche KI-Antwort selbst prüfen. Bei Fragen zu Gesundheit oder Geld passende menschliche Unterstützung anbieten."
      ]
    },
    lernziele: [
      "Die Teilnehmenden wissen, dass KI ein Programm ist, kein Mensch.",
      "Sie prüfen wichtige KI-Antworten und geben keine privaten Daten ein.",
      "Sie holen bei Gesundheit und Geld zusätzlich menschlichen Rat.",
      "Sie wissen, dass KI Bilder und Stimmen fälschen kann."
    ],
    methodik: [
      "Eine vorbereitete, harmlose Chatbot-Antwort gemeinsam ansehen. Keine persönlichen Angaben in einen Chatbot eingeben.",
      "Eine vorbereitete KI-Antwort gemeinsam prüfen.",
      "Grenzen erfahrbar machen (die KI erfindet etwas).",
      "Die Merk-Karte gemeinsam lesen oder ansehen."
    ],
    gespraechsanlaesse: [
      "Was kann man eine KI fragen? Wir können mit einer erfundenen Frage üben.",
      "Warum sollte ein Passwort nicht in einen Chatbot eingegeben werden?",
      "Wen kannst du bei einer Gesundheitsfrage fragen? Eine KI ersetzt keine Fachperson."
    ],
    begleithinweise: [
      "Parasozialen Bezug ansprechen: Ein Chatbot ist kein Freund und keine Therapie.",
      "Keine echten privaten Daten eingeben lassen.",
      "Bei emotionaler Abhängigkeit von Chatbots aufmerksam sein und das Gespräch suchen.",
      "Gefälschte Angehörigen-Stimme: auf Wunsch mit erfundenen Rollen üben, das Gespräch zu beenden und eine bereits bekannte Nummer der Person selbst zu wählen. Keine Nummer aus der verdächtigen Nachricht nutzen. Ist niemand erreichbar, bleibt die Forderung ungeklärt: bis zur Klärung nichts zahlen oder freigeben und passende Unterstützung anbieten."
    ],
    rechtsbezuege: [
      "UN-BRK Artikel 21: Zugang zu Information und kritische Nutzung.",
      "SGB IX: Selbstbestimmung; KDG und Datenschutz bei KI-Eingaben.",
      "Bezug zum Thema Fake News und Deepfakes."
    ],
    transfer: [
      "Eine KI-Antwort gemeinsam an einer zweiten Quelle prüfen.",
      "Ein Plakat erstellen: „Das sage ich der KI nicht“.",
      "Meta AI in WhatsApp gemeinsam am blauen Kreis erkennen."
    ]
  },

  fakes: {
    praxis: {
      "vorbereiten": [
        "Eine erfundene, harmlose Nachricht und einen zweiten verlässlichen Text zum selben Thema bereithalten. Keine verstörenden Bilder verwenden."
      ],
      "fragen": [
        "Wer sagt das, und von wann ist die Nachricht?",
        "Wo findest du einen zweiten verlässlichen Text oder eine offizielle Informationsseite zu der Behauptung?"
      ],
      "helfen": [
        "Eine erfundene Behauptung prüfen: Wer hat sie veröffentlicht? Von wann ist sie? Was sagt eine zweite verlässliche Stelle dazu? Kleine Bildfehler allein beweisen keine Fälschung.",
        "Im Rollenspiel üben, eine Geldforderung nicht weiterzuleiten und über eine Telefonnummer nachzufragen, die schon vorher bekannt war."
      ],
      "erkennen": [
        "Darauf achten, ob die Person vor dem Glauben oder Weiterleiten einen Beleg sucht. Ein überzeugendes Bild oder eine Stimme genügt nicht."
      ],
      "alltag": [
        "Auf Wunsch eine selbst gewählte harmlose Nachricht prüfen. Private Nachrichten werden nur mit Einverständnis gemeinsam angesehen."
      ]
    },
    lernziele: [
      "Die Teilnehmenden wissen, dass nicht alles im Internet wahr ist.",
      "Sie erkennen, dass Bilder, Videos und Stimmen gefälscht sein können.",
      "Sie behandeln starke Gefühle als Warnzeichen und prüfen vor dem Teilen."
    ],
    methodik: [
      "Ein erfundenes Bild oder Video mit einem verlässlichen Beispiel vergleichen.",
      "Quellen-Check einüben: wer, wo noch, wie alt, welche Quelle.",
      "Emotions-Stopp: bei Wut oder Angst erst prüfen.",
      "Die Merk-Karte gemeinsam lesen oder ansehen."
    ],
    gespraechsanlaesse: [
      "Hast du schon mal etwas geglaubt, das nicht stimmte?",
      "Wie fühlst du dich, wenn eine Nachricht dich wütend macht?",
      "Wie kannst du prüfen, ob etwas wahr ist?"
    ],
    begleithinweise: [
      "Politische oder emotionale Inhalte ruhig und ohne Druck besprechen. Erwachsene entscheiden selbst, ob sie darüber sprechen möchten.",
      "Verschwörungs- und Angst-Themen ernst, aber entlastend einordnen.",
      "Nicht beschämen, wenn jemand etwas geglaubt oder geteilt hat."
    ],
    rechtsbezuege: [
      "UN-BRK Artikel 21: Zugang zu verlässlicher Information und Meinungsbildung.",
      "SGB IX: Teilhabe und politische Selbstbestimmung.",
      "Medienkompetenz als Bildungsauftrag."
    ],
    transfer: [
      "Eine aktuelle Meldung gemeinsam mit dem Fragen-Check prüfen.",
      "„Erst prüfen, dann teilen“ als Regel aufhängen.",
      "Eine seriöse Nachrichten-Quelle gemeinsam aussuchen."
    ]
  },

  betrug: {
    praxis: {
      "vorbereiten": [
        "Erfundene Beispiele für Paketnachricht, neue Nummer und Gewinnforderung bereithalten. Keine echten Links öffnen oder Zahlungen auslösen."
      ],
      "fragen": [
        "Will die Nachricht Geld, Daten oder einen geheimen Code?",
        "Welche Telefonnummer kennst du schon, über die du selbst nachfragen kannst? Wir können mit erfundenen Beispielen üben."
      ],
      "helfen": [
        "Auf Wunsch das Stoppen und den selbst gewählten Kontakt im Rollenspiel vormachen. Ein Link oder eine Nummer aus der Nachricht dient nicht als Prüfweg.",
        "Bei einem echten Vorfall ruhig bleiben und passende Hilfe organisieren. Weder Schuldvorwürfe noch Beweise sind Voraussetzung für Hilfe."
      ],
      "erkennen": [
        "In der Übung beobachten, ob die Person bei einer Forderung kurz wartet und über eine schon vorher bekannte Telefonnummer nachfragt. Das ist kein Nachweis für selbstständiges Handeln im Alltag."
      ],
      "alltag": [
        "Auf Wunsch einen persönlichen Weg für Hilfe im Betrugsfall festhalten. Keine Bankdaten, Passwörter oder Codes auf die Karte schreiben."
      ]
    },
    lernziele: [
      "Die Teilnehmenden erkennen Phishing, Paket-Trick, Hallo-Mama-Trick, Schockanrufe, falsche Gewinne, Abo-Fallen und gefälschte QR-Codes (Quishing).",
      "Sie geben keine Codes oder Bankdaten weiter und rufen bei Geldforderungen selbst zurück.",
      "Sie wissen, was nach einem Betrug zu tun ist (Karte sperren, Hilfe, Anzeige)."
    ],
    methodik: [
      "In erfundenen Nachrichten nach Warnzeichen suchen.",
      "Rollenspiel: einen Schockanruf sicher beenden.",
      "QR-Codes gemeinsam prüfen: Woher kommt der Code? Aufkleber und Briefe als Warnsignal besprechen (aktuelle Quishing-Maschen laut BSI/Polizei).",
      "Notfall-Plan einüben; Merk-Karte sichern.",
      "Aktuelle Betrugsmaschen anhand erfundener Beispiele besprechen."
    ],
    gespraechsanlaesse: [
      "Welche Betrugsmasche hast du schon einmal gehört oder erlebt?",
      "Was machst du, wenn am Telefon jemand dringend Geld will?",
      "Warum kosten echte Gewinne kein Geld?"
    ],
    begleithinweise: [
      "Scham- und Angstthema: betont entlastend begleiten („Betrug ist nicht deine Schuld“).",
      "Keine echten Bankdaten verwenden.",
      "Bei realem Schaden sofort handeln: Bank und Sperr-Notruf 116 116, Anzeige, Vertrauensperson."
    ],
    rechtsbezuege: [
      "Betrug (§ 263 StGB), Computerbetrug (§ 263a), Erpressung (§ 253) – strafbar.",
      "UN-BRK Artikel 16: Schutz vor Ausbeutung; SGB IX: Schutz und Teilhabe.",
      "KDG und Datenschutz bei sensiblen Daten."
    ],
    transfer: [
      "Sperr-Notruf 116 116 und Polizei 110 auf einer Notfall-Karte notieren.",
      "Eine erfundene Betrugs-SMS gemeinsam einordnen. Eine private Nachricht nur ansehen, wenn die Person das von sich aus möchte; sie muss nichts zeigen.",
      "Mit der Bank klären, wie man eine Karte sperrt."
    ]
  },

  einkaufen: {
    praxis: {
      "vorbereiten": [
        "Ein erfundenes Angebot mit Artikelpreis, Versand und möglichen Folgekosten bereithalten. Keine Bestellung oder Zahlung auslösen."
      ],
      "fragen": [
        "Was kostet der Kauf insgesamt, und kommen weitere Zahlungen dazu?",
        "Welche Angaben zum Shop möchtest du vor dem Kauf prüfen?"
      ],
      "helfen": [
        "Die Kosten im Beispiel gemeinsam zusammensuchen. Ein niedriger Artikelpreis allein sagt noch nicht, was insgesamt bezahlt wird.",
        "Auf Wunsch Shop-Angaben und eine Bewertung auf einer anderen, verlässlichen Seite ansehen. Die Person entscheidet, ob sie kaufen, weiter prüfen oder abbrechen möchte."
      ],
      "erkennen": [
        "Darauf achten, ob die Person Gesamtkosten und Shop prüft und bei einer offenen Frage mit dem Kauf warten kann."
      ],
      "alltag": [
        "Auf Wunsch ein selbst gewähltes Angebot ohne Kauf durchgehen. Änderungen am Gerät und Einschränkungen von Käufen nur mit Einverständnis."
      ]
    },
    lernziele: [
      "Die Teilnehmenden erkennen seriöse Shops und Fake-Shops.",
      "Sie zahlen möglichst auf Rechnung und schützen PIN und TAN.",
      "Sie erkennen Kauf-Druck und versteckte Kosten und kennen das 14-tägige Widerrufsrecht."
    ],
    methodik: [
      "Mit einem erfundenen Shop-Angebot üben. Ein echtes Angebot nur auf ausdrücklichen Wunsch ansehen.",
      "An einem erfundenen Shop-Beispiel nach Warnzeichen suchen.",
      "Budget-Bewusstsein (In-App-Käufe) erfahrbar machen.",
      "Die Merk-Karte gemeinsam lesen oder ansehen. Eine Zahlung nur mit ausdrücklicher Zustimmung und im Tempo der Person üben."
    ],
    gespraechsanlaesse: [
      "Woran erkennst du, ob ein Shop seriös ist?",
      "Welche Bezahl-Art ist für dich am sichersten?",
      "Was machst du, wenn ein Spiel ständig etwas verkaufen will?"
    ],
    begleithinweise: [
      "Finanzielle Selbstbestimmung achten; gegebenenfalls rechtliche Betreuung oder Budget einbeziehen.",
      "Keine echten Zahlungsdaten eingeben lassen.",
      "Bei Fehlkauf oder Abo-Falle konkret unterstützen (Widerruf, Bank)."
    ],
    rechtsbezuege: [
      "Widerrufsrecht bei Fernabsatz (§§ 312g, 355 BGB), 14 Tage.",
      "UN-BRK Artikel 12: rechtliche Handlungsfähigkeit und Unterstützung; SGB IX.",
      "Betrug (§ 263 StGB) bei Fake-Shops; KDG und Datenschutz bei Zahlungsdaten."
    ],
    transfer: [
      "Bei einem echten Shop gemeinsam Impressum und Bewertungen prüfen.",
      "In-App-Käufe im Gerät gemeinsam einschränken, zum Beispiel Passwort verlangen.",
      "Eine Widerrufs-Vorlage und die Rücksende-Adresse bereithalten."
    ]
  }
};

/* I2 (05.10.2026, auf v2026-27c): feste Zuordnung statt wechselnder Hinweise nach Schrittzahl.
   Die Schlüssel sind die ORIGINALTITEL aus topics.js, getrennt nach Kern
   (short) und „Alle Lektionen nachlesen“ (full). „Mehr dazu“ (extra) nutzt
   die Zuordnung seiner ausgewählten Originallektionen aus full. Start und Erinnern
   sind ausdrücklich zugeordnet. Lektionen haben derzeit keine eigene ID.

   Jede Referenz [Abschnitt, Index] liest einen bestehenden Text WÖRTLICH aus
   COMPANION; vorhandene Quellindizes bleiben erhalten. Neue Hinweise werden
   hinten angehängt, damit bestehende Zuordnungen stabil bleiben. Ein Gesprächs-
   anlass wird als Frage gekennzeichnet, Methodik, Hinweise, Lernziele und
   Transfer nicht. Dieselbe Zuordnung gilt für alle drei Sprachstufen, denn
   die Begleit-Ebene ist keine Sprachstufe für Lernende (§7).

   Keine Reihenfolge- oder Modulo-Rückfallebene: Fehlt ein Titel oder verweist
   ein Eintrag ins Leere, liefert companionTippFuer null. So erscheint kein
   unpassender Hinweis; neue/umbenannte Lektionen müssen zugeordnet werden.
   Indizes sind nullbasiert; beim Umsortieren der Quelllisten mitpflegen. */
const COMPANION_LEKTIONEN = {
  datenschutz: {
    short: {
      "Start": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 3] },
      "Deine Daten": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 2] },
      "Nötig oder nicht?": { lernen: ["gespraechsanlaesse", 2], uebung: ["methodik", 1] },
      "Wer sieht es?": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 0] },
      "Das merke ich mir": { lernen: ["methodik", 6], uebung: ["begleithinweise", 3] }
    },
    full: {
      "Start": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 3] },
      "Deine Daten": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 2] },
      "Wer will deine Daten?": { lernen: ["gespraechsanlaesse", 1], uebung: ["begleithinweise", 3] },
      "Nötig oder freiwillig?": { lernen: ["gespraechsanlaesse", 2], uebung: ["methodik", 1] },
      "Eine App will etwas sehen": { lernen: ["gespraechsanlaesse", 1], uebung: ["transfer", 1] },
      "Wer sieht dein Profil?": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 1] },
      "Fotos prüfen": { lernen: ["begleithinweise", 0], uebung: ["begleithinweise", 0] },
      "Standort teilen": { lernen: ["gespraechsanlaesse", 1], uebung: ["methodik", 2] },
      "Eine Nachricht will deine Daten": { lernen: ["methodik", 0], uebung: ["begleithinweise", 2] },
      "Dein Plan für deine Daten": { lernen: ["methodik", 0], uebung: ["begleithinweise", 3] },
      "Das merke ich mir": { lernen: ["methodik", 6], uebung: ["begleithinweise", 3] }
    }
  },
  whatsapp: {
    short: {
      "Start": { lernen: ["methodik", 0], uebung: ["begleithinweise", 0] },
      "Unbekannte Nachrichten": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 0] },
      "Links in Nachrichten": { lernen: ["methodik", 2], uebung: ["methodik", 2] },
      "Dein WhatsApp-Code": { lernen: ["lernziele", 2], uebung: ["begleithinweise", 1] },
      "Das merke ich mir": { lernen: ["methodik", 4], uebung: ["methodik", 4] }
    },
    full: {
      "Start": { lernen: ["methodik", 0], uebung: ["begleithinweise", 0] },
      "WhatsApp nutzen": { lernen: ["methodik", 0], uebung: ["methodik", 0] },
      "Fremde Nummer": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 0] },
      "Geld und Betrug": { lernen: ["gespraechsanlaesse", 1], uebung: ["begleithinweise", 1] },
      "Links in Nachrichten": { lernen: ["methodik", 2], uebung: ["methodik", 2] },
      "WhatsApp-Code": { lernen: ["lernziele", 2], uebung: ["begleithinweise", 1] },
      "Gruppen": { lernen: ["gespraechsanlaesse", 2], uebung: ["methodik", 0] },
      "Fotos senden": { lernen: ["gespraechsanlaesse", 2], uebung: ["methodik", 0] },
      "Stress und Eile": { lernen: ["begleithinweise", 0], uebung: ["begleithinweise", 0] },
      "Die KI in WhatsApp": { lernen: ["lernziele", 3], uebung: ["methodik", 0] },
      "Was kann ich tun?": { lernen: ["gespraechsanlaesse", 1], uebung: ["begleithinweise", 2] },
      "Das merke ich mir": { lernen: ["methodik", 4], uebung: ["methodik", 4] }
    }
  },
  facebook: {
    short: {
      "Start": { lernen: ["methodik", 0], uebung: ["begleithinweise", 1] },
      "Dein Facebook-Profil": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 1] },
      "Unbekannte Personen": { lernen: ["gespraechsanlaesse", 1], uebung: ["transfer", 1] },
      "Komische Nachrichten": { lernen: ["begleithinweise", 4], uebung: ["begleithinweise", 4] },
      "Das merke ich mir": { lernen: ["methodik", 2], uebung: ["methodik", 2] }
    },
    full: {
      "Start": { lernen: ["methodik", 0], uebung: ["begleithinweise", 1] },
      "Profil": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 1] },
      "Beitrag schreiben": { lernen: ["gespraechsanlaesse", 0], uebung: ["methodik", 1] },
      "Wer darf etwas sehen?": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 1] },
      "Freundschafts-Anfragen": { lernen: ["gespraechsanlaesse", 1], uebung: ["transfer", 1] },
      "Kommentare schreiben": { lernen: ["lernziele", 2], uebung: ["begleithinweise", 0] },
      "Beleidigungen": { lernen: ["gespraechsanlaesse", 2], uebung: ["begleithinweise", 0] },
      "Fotos mit anderen Personen": { lernen: ["begleithinweise", 3], uebung: ["begleithinweise", 3] },
      "Was kann ich tun?": { lernen: ["begleithinweise", 4], uebung: ["begleithinweise", 4] },
      "Das merke ich mir": { lernen: ["methodik", 2], uebung: ["methodik", 2] }
    }
  },
  instagram: {
    short: {
      "Start": { lernen: ["methodik", 0], uebung: ["begleithinweise", 2] },
      "Deine Fotos auf Instagram": { lernen: ["transfer", 1], uebung: ["transfer", 1] },
      "Fotos von anderen Personen": { lernen: ["methodik", 1], uebung: ["begleithinweise", 2] },
      "Nachrichten von Unbekannten": { lernen: ["lernziele", 1], uebung: ["begleithinweise", 1] },
      "Das merke ich mir": { lernen: ["methodik", 3], uebung: ["methodik", 3] }
    },
    full: {
      "Start": { lernen: ["methodik", 0], uebung: ["begleithinweise", 2] },
      "Foto posten": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 2] },
      "Andere Personen auf Fotos": { lernen: ["methodik", 1], uebung: ["begleithinweise", 2] },
      "Kurze Videos und Stories": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 2] },
      "Standort": { lernen: ["gespraechsanlaesse", 1], uebung: ["transfer", 0] },
      "Private Nachrichten": { lernen: ["lernziele", 1], uebung: ["begleithinweise", 1] },
      "Verletzende Kommentare": { lernen: ["methodik", 0], uebung: ["methodik", 0] },
      "Bearbeitete Bilder": { lernen: ["gespraechsanlaesse", 2], uebung: ["begleithinweise", 0] },
      "Was kann ich tun?": { lernen: ["transfer", 2], uebung: ["begleithinweise", 1] },
      "Das merke ich mir": { lernen: ["methodik", 3], uebung: ["methodik", 3] }
    }
  },
  youtube: {
    short: {
      "Start": { lernen: ["methodik", 0], uebung: ["begleithinweise", 1] },
      "Videos prüfen": { lernen: ["gespraechsanlaesse", 0], uebung: ["methodik", 1] },
      "Werbung erkennen": { lernen: ["gespraechsanlaesse", 1], uebung: ["transfer", 1] },
      "Pausen machen": { lernen: ["methodik", 2], uebung: ["begleithinweise", 1] },
      "Das merke ich mir": { lernen: ["methodik", 3], uebung: ["methodik", 3] }
    },
    full: {
      "Start": { lernen: ["methodik", 0], uebung: ["begleithinweise", 1] },
      "Videos prüfen": { lernen: ["gespraechsanlaesse", 0], uebung: ["methodik", 1] },
      "Werbung erkennen": { lernen: ["gespraechsanlaesse", 1], uebung: ["transfer", 1] },
      "Autoplay und Zeit": { lernen: ["methodik", 2], uebung: ["begleithinweise", 1] },
      "Gefährliche Mutproben": { lernen: ["lernziele", 2], uebung: ["begleithinweise", 0] },
      "Videos, die Angst machen": { lernen: ["gespraechsanlaesse", 2], uebung: ["begleithinweise", 2] },
      "Kommentare": { lernen: ["begleithinweise", 2], uebung: ["begleithinweise", 2] },
      "Nicht jedes Video ist echt": { lernen: ["gespraechsanlaesse", 0], uebung: ["methodik", 1] },
      "Was kann ich tun?": { lernen: ["gespraechsanlaesse", 2], uebung: ["begleithinweise", 2] },
      "Das merke ich mir": { lernen: ["methodik", 3], uebung: ["methodik", 3] }
    }
  },
  snapchat: {
    short: {
      "Start": { lernen: ["methodik", 0], uebung: ["begleithinweise", 0] },
      "Bilder verschwinden nicht wirklich": { lernen: ["gespraechsanlaesse", 0], uebung: ["methodik", 1] },
      "Dein Standort": { lernen: ["gespraechsanlaesse", 2], uebung: ["begleithinweise", 1] },
      "Niemand darf dich zwingen": { lernen: ["gespraechsanlaesse", 1], uebung: ["begleithinweise", 0] },
      "Das merke ich mir": { lernen: ["methodik", 3], uebung: ["methodik", 3] }
    },
    full: {
      "Start": { lernen: ["methodik", 0], uebung: ["begleithinweise", 0] },
      "Bilder verschwinden nicht immer": { lernen: ["gespraechsanlaesse", 0], uebung: ["methodik", 1] },
      "Bild vom Bildschirm": { lernen: ["methodik", 1], uebung: ["methodik", 1] },
      "Sehr private Bilder": { lernen: ["gespraechsanlaesse", 1], uebung: ["begleithinweise", 0] },
      "Standort": { lernen: ["gespraechsanlaesse", 2], uebung: ["begleithinweise", 1] },
      "Kontakte": { lernen: ["methodik", 0], uebung: ["methodik", 0] },
      "Stress erkennen": { lernen: ["gespraechsanlaesse", 1], uebung: ["begleithinweise", 0] },
      "Was kann ich tun?": { lernen: ["transfer", 1], uebung: ["begleithinweise", 2] },
      "Das merke ich mir": { lernen: ["methodik", 3], uebung: ["methodik", 3] }
    }
  },
  tiktok: {
    short: {
      "Start": { lernen: ["methodik", 0], uebung: ["begleithinweise", 1] },
      "Was du bei TikTok siehst": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 0] },
      "Nachrichten auf TikTok": { lernen: ["lernziele", 1], uebung: ["begleithinweise", 2] },
      "Pause machen": { lernen: ["gespraechsanlaesse", 1], uebung: ["begleithinweise", 1] },
      "Das merke ich mir": { lernen: ["methodik", 3], uebung: ["methodik", 3] }
    },
    full: {
      "Start": { lernen: ["methodik", 0], uebung: ["begleithinweise", 1] },
      "Trends": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 0] },
      "Gefährliche Trends erkennen": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 0] },
      "Ähnliche Videos": { lernen: ["gespraechsanlaesse", 1], uebung: ["methodik", 2] },
      "Private Nachrichten": { lernen: ["lernziele", 1], uebung: ["begleithinweise", 2] },
      "Videos posten": { lernen: ["methodik", 0], uebung: ["begleithinweise", 2] },
      "Kommentare": { lernen: ["begleithinweise", 1], uebung: ["begleithinweise", 1] },
      "Gefühle und Pausen": { lernen: ["begleithinweise", 1], uebung: ["begleithinweise", 1] },
      "Nicht jedes Video ist echt": { lernen: ["gespraechsanlaesse", 2], uebung: ["lernziele", 3] },
      "Was kann ich tun?": { lernen: ["lernziele", 1], uebung: ["begleithinweise", 2] },
      "Das merke ich mir": { lernen: ["methodik", 3], uebung: ["methodik", 3] }
    }
  },
  hilfe: {
    short: {
      "Start": { lernen: ["methodik", 1], uebung: ["begleithinweise", 0] },
      "Was ist los?": { lernen: ["gespraechsanlaesse", 0], uebung: ["methodik", 2] },
      "Was kann ich selbst tun?": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 1] },
      "Welche Hilfe passt?": { lernen: ["gespraechsanlaesse", 2], uebung: ["gespraechsanlaesse", 2] },
      "Das merke ich mir": { lernen: ["methodik", 5], uebung: ["begleithinweise", 0] }
    },
    full: {
      "Start": { lernen: ["methodik", 1], uebung: ["begleithinweise", 0] },
      "Probleme sind verschieden": { lernen: ["methodik", 1], uebung: ["lernziele", 5] },
      "Druck oder Angst: erst stoppen": { lernen: ["gespraechsanlaesse", 1], uebung: ["begleithinweise", 0] },
      "Das kannst du selbst": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 1] },
      "Welche Hilfe passt?": { lernen: ["gespraechsanlaesse", 2], uebung: ["begleithinweise", 2] },
      "Unterstützung wirklich holen": { lernen: ["methodik", 4], uebung: ["begleithinweise", 1] },
      "Dein Hilfe-Check": { lernen: ["methodik", 1], uebung: ["methodik", 3] },
      "Das merke ich mir": { lernen: ["methodik", 5], uebung: ["begleithinweise", 0] }
    }
  },
  ki: {
    short: {
      "Start": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 1] },
      "Was ist KI?": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 0] },
      "Was kann KI?": { lernen: ["methodik", 0], uebung: ["methodik", 1] },
      "Wann musst du aufpassen?": { lernen: ["begleithinweise", 3], uebung: ["begleithinweise", 3] },
      "Das merke ich mir": { lernen: ["methodik", 3], uebung: ["methodik", 3] }
    },
    full: {
      "Start": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 1] },
      "Was ist KI?": { lernen: ["gespraechsanlaesse", 0], uebung: ["methodik", 0] },
      "Wo triffst du KI?": { lernen: ["gespraechsanlaesse", 0], uebung: ["transfer", 2] },
      "Ein Chatbot ist kein Mensch": { lernen: ["lernziele", 0], uebung: ["begleithinweise", 0] },
      "KI macht Fehler": { lernen: ["methodik", 2], uebung: ["methodik", 1] },
      "So prüfst du eine Antwort": { lernen: ["transfer", 0], uebung: ["methodik", 1] },
      "Keine privaten Daten": { lernen: ["gespraechsanlaesse", 1], uebung: ["begleithinweise", 1] },
      "Gesundheit und Geld": { lernen: ["gespraechsanlaesse", 2], uebung: ["begleithinweise", 0] },
      "KI kann Bilder und Stimmen fälschen": { lernen: ["begleithinweise", 3], uebung: ["begleithinweise", 3] },
      "Was kann ich tun?": { lernen: ["transfer", 0], uebung: ["lernziele", 2] },
      "Das merke ich mir": { lernen: ["methodik", 3], uebung: ["methodik", 3] }
    }
  },
  fakes: {
    short: {
      "Start": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 2] },
      "Was ist eine Fake-Nachricht?": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 2] },
      "Wie erkennst du Fakes?": { lernen: ["gespraechsanlaesse", 2], uebung: ["methodik", 1] },
      "Was tust du bei Fakes?": { lernen: ["gespraechsanlaesse", 2], uebung: ["begleithinweise", 2] },
      "Das merke ich mir": { lernen: ["methodik", 3], uebung: ["methodik", 3] }
    },
    full: {
      "Start": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 2] },
      "Was sind Fake News?": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 2] },
      "Warum gibt es Fake News?": { lernen: ["gespraechsanlaesse", 1], uebung: ["begleithinweise", 0] },
      "KI-Bilder erkennen": { lernen: ["methodik", 0], uebung: ["begleithinweise", 2] },
      "Gefälschte Videos: Deepfakes": { lernen: ["methodik", 0], uebung: ["begleithinweise", 2] },
      "Geklonte Stimmen am Telefon": { lernen: ["gespraechsanlaesse", 2], uebung: ["begleithinweise", 1] },
      "Nachrichten prüfen": { lernen: ["gespraechsanlaesse", 2], uebung: ["methodik", 1] },
      "Die Nachricht will dich aufregen": { lernen: ["gespraechsanlaesse", 1], uebung: ["begleithinweise", 1] },
      "Nicht einfach weiterleiten": { lernen: ["transfer", 1], uebung: ["begleithinweise", 2] },
      "Was kann ich tun?": { lernen: ["transfer", 0], uebung: ["methodik", 1] },
      "Das merke ich mir": { lernen: ["methodik", 3], uebung: ["methodik", 3] }
    }
  },
  betrug: {
    short: {
      "Start": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 0] },
      "Was ist Betrug im Internet?": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 0] },
      "Wie erkennst du Betrug?": { lernen: ["methodik", 0], uebung: ["begleithinweise", 1] },
      "Was tust du bei Betrug?": { lernen: ["methodik", 3], uebung: ["begleithinweise", 0] },
      "Das merke ich mir": { lernen: ["methodik", 3], uebung: ["methodik", 3] }
    },
    full: {
      "Start": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 0] },
      "Was ist Phishing?": { lernen: ["methodik", 0], uebung: ["begleithinweise", 1] },
      "Falsche Nachrichten erkennen": { lernen: ["methodik", 0], uebung: ["begleithinweise", 0] },
      "Der Paket-Trick": { lernen: ["methodik", 0], uebung: ["begleithinweise", 1] },
      "Der Hallo-Mama-Trick": { lernen: ["gespraechsanlaesse", 0], uebung: ["begleithinweise", 0] },
      "Schockanrufe": { lernen: ["gespraechsanlaesse", 1], uebung: ["methodik", 1] },
      "Liebe im Internet": { lernen: ["methodik", 4], uebung: ["begleithinweise", 0] },
      "Falsche Gewinne": { lernen: ["gespraechsanlaesse", 2], uebung: ["begleithinweise", 1] },
      "Abo-Fallen": { lernen: ["methodik", 0], uebung: ["begleithinweise", 0] },
      "Codes nie weitergeben": { lernen: ["lernziele", 1], uebung: ["begleithinweise", 1] },
      "Vorsicht bei QR-Codes": { lernen: ["methodik", 2], uebung: ["methodik", 2] },
      "Was kann ich tun?": { lernen: ["methodik", 3], uebung: ["begleithinweise", 0] },
      "Was tun nach einem Betrug?": { lernen: ["methodik", 3], uebung: ["begleithinweise", 2] },
      "Das merke ich mir": { lernen: ["methodik", 3], uebung: ["methodik", 3] }
    }
  },
  einkaufen: {
    short: {
      "Start": { lernen: ["methodik", 0], uebung: ["begleithinweise", 0] },
      "Einkaufen im Internet": { lernen: ["methodik", 0], uebung: ["begleithinweise", 0] },
      "Gute Shops erkennen": { lernen: ["gespraechsanlaesse", 0], uebung: ["methodik", 1] },
      "Sicher bezahlen": { lernen: ["gespraechsanlaesse", 1], uebung: ["begleithinweise", 1] },
      "Das merke ich mir": { lernen: ["methodik", 3], uebung: ["methodik", 3] }
    },
    full: {
      "Start": { lernen: ["methodik", 0], uebung: ["begleithinweise", 0] },
      "Gute Shops erkennen": { lernen: ["gespraechsanlaesse", 0], uebung: ["methodik", 1] },
      "Fake-Shops erkennen": { lernen: ["gespraechsanlaesse", 0], uebung: ["methodik", 1] },
      "Vor dem Kaufen prüfen": { lernen: ["transfer", 0], uebung: ["begleithinweise", 0] },
      "Sicher bezahlen": { lernen: ["gespraechsanlaesse", 1], uebung: ["begleithinweise", 1] },
      "Bank-Daten schützen": { lernen: ["lernziele", 1], uebung: ["begleithinweise", 1] },
      "Versteckte Kosten in Apps und Spielen": { lernen: ["gespraechsanlaesse", 2], uebung: ["methodik", 2] },
      "Nicht sofort kaufen": { lernen: ["begleithinweise", 0], uebung: ["begleithinweise", 0] },
      "Falsch gekauft? Das kannst du tun": { lernen: ["transfer", 2], uebung: ["begleithinweise", 2] },
      "Was kann ich tun?": { lernen: ["transfer", 0], uebung: ["begleithinweise", 0] },
      "Das merke ich mir": { lernen: ["methodik", 3], uebung: ["methodik", 3] }
    }
  }
};

/* Originallektion verwenden, bevor resolveLessonContent ihren Titel ggf.
   sprachabhängig ersetzt. art: "uebung" oder "lernen". */
function companionTippFuer(topic, lesson, mode, art) {
  if (!topic || !lesson || typeof lesson.title !== "string") return null;
  const c = topic.companion || COMPANION[topic.id];
  const weg = mode === "short" ? "short" : "full";
  const tabelle = c && c.lektionen && c.lektionen[weg];
  if (!tabelle || !Object.prototype.hasOwnProperty.call(tabelle, lesson.title)) return null;
  const eintrag = tabelle[lesson.title];
  const ref = eintrag && eintrag[art === "uebung" ? "uebung" : "lernen"];
  if (!Array.isArray(ref) || ref.length !== 2 || !Number.isInteger(ref[1]) || ref[1] < 0) return null;
  const liste = c[ref[0]];
  const text = Array.isArray(liste) && liste[ref[1]];
  if (typeof text !== "string" || !text.trim()) return null;
  return { text: text, frage: ref[0] === "gespraechsanlaesse", abschnitt: ref[0], index: ref[1] };
}

/* Begleit-Material an die Themen in topics.js hängen */
function applyCompanion() {
  if (typeof topics === "undefined" || !Array.isArray(topics)) return;
  topics.forEach((topic) => {
    const c = COMPANION[topic.id];
    if (c) {
      c.lektionen = COMPANION_LEKTIONEN[topic.id];
      topic.companion = c;
    }
  });
}

applyCompanion();
