/* Alltagsübungen für Erwachsene. Übernommen aus dem GitHub-Abgleich vom 14.09.2026;
   Leichte-Sprache-Fassung am 15.09.2026 nach §5 nachgebessert (kein Nebensatz,
   kein Genitiv, kein Passiv, keine Anführungszeichen).
    UDL: selbst handeln oder Schritte zeigen lassen.
   Texte zentral in drei Sprachstufen; neue Texte sind Entwürfe für die Prüfgruppe.
   Keine Eingaben, Speicherung oder Netzaufrufe. Alle Handlungen sind Simulationen. */
const ALLTAG_TEXT = {
  leicht: {
    title: 'Im Alltag üben', intro: 'Du entscheidest selbst. Du kannst jeden Schritt noch einmal üben.',
    goal: 'Dein Ziel', apply: 'In einer neuen Situation üben', newSituation: 'Eine neue Situation',
    select: 'Wähle eine Antwort.', nextPractice: 'Danach kannst du das üben', shortHint: 'Ein Hinweis',
    simulation: 'Das ist eine Übung. Die Personen sind erfunden. Die App schickt nichts weg.',
    guide: 'Wir zeigen dir einen Weg. Du bestimmst das Tempo.',
    help: 'Ich bin unsicher. Ich möchte Hilfe.', demo: 'Zeig es mir', own: 'Selbst ausprobieren',
    next: 'Weiter', back: 'Einen Schritt zurück', choose: 'Andere Übung wählen',
    card: 'Meine Merk-Karte', print: 'Merk-Karte drucken', retry: 'Noch einmal üben',
    transfer: 'Auf deinem Handy', note: 'Apps sehen verschieden aus. Suche die passende Einstellung. Du kannst dir dabei Hilfe holen.',
    reflection: 'Was möchtest du als Nächstes?', tryReal: 'Auf meinem Handy ausprobieren', practice: 'Hier weiter üben', together: 'Mit einer Person zusammen üben',
    realHint: 'Nimm dir Zeit. Du entscheidest selbst. Du kannst jederzeit aufhören.',
    togetherHint: 'Bitte eine Person um Hilfe. Du entscheidest weiter selbst. Die Person kann dir die Schritte zeigen.',
    cardIntro: 'Das habe ich hier geübt. Auf meinem Handy kann ich weiter üben.',
    start: 'Übung starten', all: 'Alle Übungen', topic: 'Mehr zum Thema',
  },
  einfach: {
    title: 'Im Alltag üben', intro: 'Probiere Entscheidungen aus deinem Alltag aus. Du kannst jeden Schritt wiederholen.',
    goal: 'Dein Ziel', apply: 'In einer neuen Situation üben', newSituation: 'Eine neue Situation',
    select: 'Wähle eine Antwort.', nextPractice: 'Das kannst du als Nächstes üben', shortHint: 'Ein Hinweis',
    simulation: 'Das ist eine Übung mit erfundenen Personen. Es werden keine Nachrichten oder Fotos verschickt.',
    guide: 'Wir zeigen dir Schritt für Schritt einen möglichen Weg. Du bestimmst das Tempo.',
    help: 'Ich bin unsicher. Ich möchte Hilfe.', demo: 'Zeig es mir', own: 'Selbst ausprobieren',
    next: 'Weiter', back: 'Einen Schritt zurück', choose: 'Andere Übung wählen',
    card: 'Meine Merkkarte', print: 'Merkkarte drucken', retry: 'Noch einmal üben',
    transfer: 'Auf deinem Handy', note: 'Die Einstellungen können in jeder App anders aussehen. Suche die passende Einstellung oder lass sie dir zeigen.',
    reflection: 'Was möchtest du als Nächstes?', tryReal: 'Auf meinem Handy ausprobieren', practice: 'Hier weiter üben', together: 'Mit einer Person zusammen üben',
    realHint: 'Nimm dir Zeit für die Einstellung auf deinem Handy. Du entscheidest selbst und kannst jederzeit aufhören.',
    togetherHint: 'Bitte eine Person, dir die Schritte zu zeigen. Du entscheidest, was auf deinem Handy geändert wird.',
    cardIntro: 'Diese Handlung habe ich hier geübt. Die Merkkarte hilft mir beim Ausprobieren auf meinem Handy.',
    start: 'Übung starten', all: 'Alle Übungen', topic: 'Mehr zum Thema',
  },
  standard: {
    title: 'Im Alltag üben', intro: 'Erprobe Entscheidungen aus deinem digitalen Alltag. Alle Schritte lassen sich wiederholen.',
    goal: 'Dein Ziel', apply: 'In einer neuen Situation anwenden', newSituation: 'Eine neue Situation',
    select: 'Wähle eine Antwort.', nextPractice: 'Eine passende Anschlussübung', shortHint: 'Ein Hinweis',
    simulation: 'Dies ist eine Simulation mit erfundenen Personen. Nachrichten und Fotos werden nicht versendet.',
    guide: 'Die Anleitung zeigt dir einen möglichen Ablauf. Du gehst in deinem eigenen Tempo weiter.',
    help: 'Ich bin unsicher. Ich möchte Hilfe.', demo: 'Zeig es mir', own: 'Selbst ausprobieren',
    next: 'Weiter', back: 'Einen Schritt zurück', choose: 'Andere Übung wählen',
    card: 'Meine Merkkarte', print: 'Merkkarte drucken', retry: 'Noch einmal üben',
    transfer: 'Auf deinem Handy', note: 'Bezeichnungen und Abläufe unterscheiden sich je nach App. Suche die entsprechende Einstellung oder lass dich dabei unterstützen.',
    reflection: 'Was möchtest du als Nächstes?', tryReal: 'Auf meinem Handy ausprobieren', practice: 'Hier weiter üben', together: 'Mit einer Person zusammen üben',
    realHint: 'Nimm dir Zeit, die entsprechende Einstellung auf deinem Handy zu finden. Du entscheidest selbst und kannst jederzeit abbrechen.',
    togetherHint: 'Bitte eine Person, dir die Schritte zu zeigen. Die Entscheidung über Änderungen an deinem Handy bleibt bei dir.',
    cardIntro: 'Diesen Ablauf habe ich in der Simulation erprobt. Die Karte unterstützt mich beim Übertragen auf mein eigenes Handy.',
    start: 'Übung starten', all: 'Alle Übungen', topic: 'Mehr zum Thema',
  }
};

/* Jeder Knoten hat eine eigene Adresse: Zurück/Vorwärts und Sprachwechsel
   erhalten den Schritt. Die optionale Anleitung nutzt dieselben Handlungen. */
const ALLTAG_SCENES = {
  daten: {
    topic: 'datenschutz', icon: 'lock',
    nextScene: 'foto',
    goal: ['Du übst: Eine App fragt nach deinen Daten. Du entscheidest.', 'Du übst, eine App-Berechtigung passend zum Zweck auszuwählen.', 'Du prüfst den Zweck einer App-Berechtigung und triffst eine datensparsame Entscheidung.'],
    nextReason: ['Du kannst auch üben, wer ein Foto sehen darf.', 'Du kannst als Nächstes über das Teilen eines Fotos entscheiden.', 'Als Nächstes kannst du Datenschutz beim Teilen eines Fotos anwenden.'],
    path: ['start', 'options', 'confirm', 'done'],
    branchFrom: { allow: 'options', transferHint: 'transfer' },
    title: ['Eine App fragt nach Daten', 'Eine App-Berechtigung prüfen', 'Eine App-Berechtigung passend auswählen'],
    desc: ['Eine Taschenlampen-App möchte deine Kontakte sehen.', 'Tilda prüft eine Anfrage der App Taschenlampe Plus.', 'Tilda entscheidet über den Zugriff einer Taschenlampen-App auf ihre Kontakte.'],
    memory: [
      ['Ich lese: Welche Daten möchte die App?', 'Ich frage: Braucht die App diese Daten wirklich?', 'Braucht die App die Daten nicht? Dann wähle ich Nicht erlauben.', 'Ich kann die Einstellung später ändern.'],
      ['Ich prüfe, auf welche Daten die App zugreifen möchte.', 'Ich überlege, ob die Daten für die Funktion nötig sind.', 'Nicht benötigten Zugriff erlaube ich nicht.', 'Berechtigungen kann ich später in den Einstellungen ändern.'],
      ['Ich prüfe Datenart und Zweck der angefragten Berechtigung.', 'Ich wähle nur den Zugriff, der für meine gewünschte Funktion erforderlich ist.', 'Nicht erforderliche Berechtigungen lehne ich ab.', 'Meine Auswahl kann ich in den Systemeinstellungen überprüfen und ändern.']
    ],
    steps: {
      start: {
        title: ['Die App stellt eine Frage', 'Taschenlampe Plus fragt nach Kontakten', 'Eine Taschenlampen-App fordert Kontaktzugriff an'],
        text: ['Tilda öffnet eine Taschenlampen-App. Die App möchte ihre Kontakte sehen. Tilda hat noch nichts erlaubt.', 'Tilda möchte die Taschenlampe benutzen. Die App fragt, ob sie ihre Kontakte lesen darf. Tilda hat noch nicht entschieden.', 'Tilda öffnet eine Taschenlampen-App. Diese fordert Zugriff auf ihre Kontakte an. Die Berechtigung wurde noch nicht erteilt.'],
        screen: 'App-Berechtigung',
        message: ['Die App Taschenlampe Plus möchte deine Kontakte sehen.', '„Taschenlampe Plus“ möchte auf deine Kontakte zugreifen.', '„Taschenlampe Plus“ möchte auf deine Kontakte zugreifen.'],
        hint: ['Eine Taschenlampe braucht Licht. Braucht sie deine Kontakte?', 'Überlege, ob Kontakte für die Taschenlampen-Funktion nötig sind.', 'Prüfe, ob der Kontaktzugriff für die gewünschte Funktion erforderlich ist.'],
        actions: [['Anfrage prüfen', 'options']], recommended: 0
      },
      options: {
        title: ['Was passt?', 'Welche Auswahl passt zum Zweck?', 'Welche Berechtigung ist für den Zweck angemessen?'],
        text: ['Tilda möchte nur die Taschenlampe benutzen. Wähle eine Antwort.', 'Für die Taschenlampe werden Tildas Kontakte nicht gebraucht. Wie kann sie entscheiden?', 'Der Kontaktzugriff ist für die Taschenlampen-Funktion nicht erforderlich. Welche Auswahl ist datensparsam?'],
        screen: 'Kontakte',
        hint: ['Nicht erlauben schützt die Kontakte. Die Taschenlampe kann trotzdem Licht machen.', 'Tilda kann den Kontaktzugriff ablehnen und prüfen, ob die Taschenlampe trotzdem funktioniert.', 'Tilda kann den nicht erforderlichen Zugriff ablehnen, ohne die gewünschte Funktion aufzugeben.'],
        actions: [['Nicht erlauben', 'confirm'], ['Erlauben', 'allow']], back: 'start', recommended: 0
      },
      allow: {
        title: ['Die App braucht die Kontakte nicht', 'Der Zugriff ist für die Taschenlampe nicht nötig', 'Die Berechtigung passt nicht zum Zweck'],
        text: ['Tilda hat noch nichts erlaubt. Die App braucht keine Kontakte für das Licht. Du kannst anders entscheiden.', 'Die Simulation hat den Zugriff nicht freigegeben. Für die Taschenlampen-Funktion sind Kontakte nicht nötig.', 'Der Zugriff wurde in der Simulation nicht erteilt. Er ist für die gewünschte Funktion nicht erforderlich.'],
        actions: [['Auswahl ändern', 'options']], back: 'options', recommended: 0
      },
      confirm: {
        title: ['Auswahl prüfen', '„Nicht erlauben“ bestätigen', 'Ablehnung der Berechtigung bestätigen'],
        text: ['Ausgewählt ist: Nicht erlauben. Die Kontakte von Tilda bleiben geschützt.', 'Tilda hat Nicht erlauben ausgewählt. Die App bekommt keinen Zugriff auf ihre Kontakte.', 'Tilda verweigert den nicht erforderlichen Kontaktzugriff. Die Kontakte bleiben für diese App gesperrt.'],
        screen: 'App-Berechtigung',
        message: ['Kontakte: Nicht erlauben', 'Kontaktzugriff: Nicht erlauben', 'Berechtigung für Kontakte: Nicht erlauben'],
        hint: ['Bestätige die Auswahl. Oder gehe zurück.', 'Bestätige, wenn die Auswahl zu Tildas Ziel passt.', 'Bestätige die datensparsame Auswahl oder gehe zurück.'],
        actions: [['Auswahl in der Übung bestätigen', 'done']], back: 'options', recommended: 0
      },
      done: {
        title: ['Die Kontakte von Tilda bleiben geschützt', 'Du hast eine App-Berechtigung geprüft', 'Du hast die Berechtigung passend zum Zweck gewählt'],
        text: ['Die App sieht die Kontakte von Tilda nicht. Auf deinem echten Handy ändert sich nichts.', 'In der Übung wurde der Kontaktzugriff abgelehnt. Auf deinem Handy wurde nichts verändert.', 'In der Simulation wurde die nicht erforderliche Berechtigung abgelehnt. Dein tatsächliches Gerät wurde nicht verändert.'],
        end: true, back: 'confirm'
      },
      transfer: {
        title: ['Eine andere App, eine neue Entscheidung', 'Eine Wetter-App fragt nach dem Standort', 'Übertrage das Prinzip auf eine Standort-Berechtigung'],
        text: ['Eine Wetter-App soll das Wetter an deinem Ort zeigen. Sie fragt nach deinem Standort. Was passt?', 'Tilda möchte das Wetter an ihrem aktuellen Ort sehen. Die Wetter-App fragt nach dem Standort. Welche Auswahl passt?', 'Tilda möchte lokales Wetter abrufen. Die App fordert Standortzugriff an. Welche zeitliche Begrenzung passt zu diesem Zweck?'],
        hint: ['Die App braucht den Ort beim Benutzen. Sie muss den Ort nicht immer sehen.', 'Für lokales Wetter kann der Standort beim Verwenden der App nötig sein. Dauerhafter Zugriff ist dafür nicht nötig.', 'Der Zweck erfordert Standortzugriff während der Nutzung, aber keinen dauerhaften Zugriff im Hintergrund.'],
        actions: [['Nur beim Benutzen der App', 'transferOk'], ['Immer erlauben', 'transferHint']],
        recommended: 0, transfer: true, back: 'done'
      },
      transferHint: {
        title: ['Immer erlauben ist mehr als nötig', 'Dauerhafter Zugriff ist hier nicht nötig', 'Die zeitliche Freigabe ist weiter als der Zweck'],
        text: ['Für das Wetter am aktuellen Ort reicht der Standort beim Benutzen der App.', 'Die App muss Tildas Standort nicht ständig sehen. Beim Verwenden reicht für dieses Ziel.', 'Ein dauerhafter Hintergrundzugriff geht über Tildas Ziel hinaus. Eine zeitlich begrenzte Freigabe genügt.'],
        actions: [['Noch einmal entscheiden', 'transfer']], transfer: true, back: 'transfer'
      },
      transferOk: {
        title: ['Die Auswahl passt zum Ziel', 'Du hast den Zugriff passend begrenzt', 'Du hast Zweck und Umfang aufeinander abgestimmt'],
        text: ['Die Wetter-App sieht den Ort nur beim Benutzen. Auf deinem Handy ändert sich nichts.', 'In der Übung ist der Standortzugriff auf die Nutzung der App begrenzt. Dein Handy wurde nicht verändert.', 'Die Simulation begrenzt den Standortzugriff auf die aktive Nutzung. Dein tatsächliches Gerät wurde nicht verändert.'],
        end: true, transfer: true
      }
    }
  },
  foto: {
    topic: 'instagram', icon: 'example',
    nextScene: 'kontakt',
    goal: ['Du übst: Ein Foto mit Zustimmung teilen.', 'Du übst, ein Foto mit Zustimmung und mit den passenden Personen zu teilen.', 'Du übst, ein Foto mit Zustimmung im vereinbarten Empfängerkreis zu teilen.'],
    nextReason: ['Du entscheidest auch über deine Kontakte.', 'Du kannst auch entscheiden, von wem du Nachrichten bekommen möchtest.', 'Auch bei Nachrichten kannst du entscheiden, mit wem du Kontakt möchtest.'],
    path: ['start', 'ask', 'audience', 'confirm', 'done'],
    branchFrom: { wait: 'start', public: 'audience' },
    title: ['Ein Konzert-Foto teilen', 'Ein Konzertfoto teilen', 'Ein Konzertfoto teilen'],
    desc: ['Tilda möchte ein Foto mit Freunden teilen.', 'Tilda möchte eine Erinnerung vom Konzert mit Freunden teilen.', 'Tilda möchte eine Konzerterinnerung mit Freunden teilen.'],
    memory: [
      ['Ich frage die Menschen auf dem Foto.', 'Ich beachte ihre Antwort.', 'Ich wähle aus: Wer darf das Foto sehen?', 'Erst dann teile ich das Foto.'],
      ['Ich frage die Menschen auf dem Foto, ob ich es teilen darf.', 'Ich beachte ihre Antwort und den vereinbarten Empfängerkreis.', 'Ich wähle aus, wer das Foto sehen darf.', 'Ich prüfe meine Auswahl, bevor ich das Foto teile.'],
      ['Ich frage die abgebildeten Personen, ob und mit wem ich das Foto teilen darf.', 'Ich respektiere ihre Entscheidung.', 'Ich prüfe den Empfängerkreis in der App.', 'Ich teile das Foto erst nach dieser Prüfung.']
    ],
    steps: {
      start: {
        title: ['Tilda hat ein Foto gemacht', 'Tilda hat ein Foto vom Konzert', 'Tilda möchte eine Erinnerung teilen'],
        text: ['Alex und Tilda sind auf dem Foto. Tilda möchte es mit der Gruppe Konzert-Freunde teilen. Alex hat noch nicht zugestimmt.', 'Auf dem Foto sind Alex und Tilda. Tilda möchte es in der Gruppe Konzert-Freunde teilen. Sie hat Alex noch nicht gefragt.', 'Das Foto zeigt Alex und Tilda. Tilda möchte es in der Gruppe Konzert-Freunde teilen, hat Alex aber noch nicht um Zustimmung gebeten.'],
        screen: 'Konzert-Freunde',
        message: ['Foto ausgewählt. Noch nicht geteilt.', 'Ein Foto ist ausgewählt, aber noch nicht geteilt.', 'Ein Foto ist zum Teilen ausgewählt, wurde aber noch nicht versendet.'],
        hint: ['Frage Alex zuerst. Er entscheidet über sein Bild mit.', 'Frage Alex zuerst, ob er mit dem Teilen in dieser Gruppe einverstanden ist.', 'Hole zuerst Alex’ Zustimmung zum Teilen in dieser Gruppe ein.'],
        actions: [['Alex zuerst fragen', 'ask'], ['Foto sofort teilen', 'wait']], recommended: 0
      },
      wait: {
        title: ['Erst fragen', 'Die Zustimmung fehlt noch', 'Alex’ Zustimmung fehlt noch'],
        text: ['Tilda hat das Foto hier nicht geteilt. Alex ist auch auf dem Foto. Frage ihn zuerst.', 'Das Foto wurde in der Übung nicht geteilt. Frage Alex zuerst, weil er ebenfalls darauf zu sehen ist.', 'Die Simulation hat das Foto nicht geteilt. Kläre zuerst mit Alex, ob und mit wem du es teilen darfst.'],
        actions: [['Alex fragen', 'ask']], back: 'start', recommended: 0
      },
      ask: {
        title: ['Alex antwortet', 'Alex stimmt zu', 'Alex stimmt dem Teilen in der Gruppe zu'],
        text: ['Alex sagt: Ja, in unserer Gruppe ist das okay. Bitte nicht für alle im Internet.', 'Alex ist einverstanden, wenn nur die Gruppe Konzert-Freunde das Foto bekommt. Er möchte es nicht öffentlich teilen.', 'Alex stimmt dem Teilen in der Gruppe Konzert-Freunde zu. Einer öffentlichen Veröffentlichung stimmt er nicht zu.'],
        hint: ['Die Antwort gilt für diese Gruppe. Wähle jetzt die Gruppe aus.', 'Beachte Alex’ Wunsch und wähle die vereinbarte Gruppe aus.', 'Die Zustimmung gilt für den vereinbarten Empfängerkreis. Wähle jetzt diese Gruppe aus.'],
        actions: [['Auswählen: Wer sieht das Foto?', 'audience']], back: 'start', recommended: 0
      },
      audience: {
        title: ['Wer soll das Foto sehen?', 'Wer darf das Foto sehen?', 'Wähle den Empfängerkreis'],
        text: ['Du hast 2 Möglichkeiten. Wähle die passende aus.', 'Wähle aus, mit wem Tilda das Foto teilt.', 'Lege fest, mit wem Tilda das Foto teilt.'],
        screen: 'Foto teilen', hint: ['Alex hat der Gruppe zugestimmt. Wähle Konzert-Freunde.', 'Alex hat dem Teilen in der Gruppe Konzert-Freunde zugestimmt.', 'Die Gruppe Konzert-Freunde entspricht Alex’ Zustimmung.'],
        actions: [['Gruppe Konzert-Freunde', 'confirm'], ['Alle im Internet', 'public']], back: 'ask', recommended: 0
      },
      public: {
        title: ['Das möchte Alex nicht', 'Diese Auswahl passt nicht zur Zustimmung', 'Öffentliches Teilen ist nicht vereinbart'],
        text: ['Tilda hat das Foto nicht geteilt. Alex möchte das Foto nur in der Gruppe teilen. Du kannst die Auswahl ändern.', 'Alex hat nur der Gruppe zugestimmt. Das Foto wurde nicht geteilt. Ändere die Auswahl.', 'Alex’ Zustimmung gilt nur für die Gruppe. Das Foto wurde nicht geteilt. Ändere den Empfängerkreis.'],
        actions: [['Auswahl ändern', 'audience']], back: 'audience', recommended: 0
      },
      confirm: {
        title: ['Noch einmal prüfen', 'Prüfe deine Auswahl', 'Prüfe vor dem Teilen'],
        text: ['Ausgewählt ist: Konzert-Freunde. Alex hat zugestimmt. Du kannst das Foto jetzt in der Übung teilen.', 'Die Gruppe Konzert-Freunde ist ausgewählt und Alex hat zugestimmt. Du kannst das Foto jetzt in der Übung teilen.', 'Ausgewählt ist die vereinbarte Gruppe Konzert-Freunde. Alex hat zugestimmt. Du kannst das Teilen jetzt simulieren.'],
        screen: 'Konzert-Freunde', message: ['Foto bereit zum Teilen.', 'Das Foto ist zum Teilen bereit.', 'Das Foto ist für die ausgewählte Gruppe bereit.'],
        hint: ['Die Gruppe stimmt. Du kannst das Foto teilen.', 'Die ausgewählte Gruppe passt zu Alex’ Zustimmung.', 'Empfängerkreis und Zustimmung stimmen überein.'],
        actions: [['Foto in der Übung teilen', 'done']], back: 'audience', recommended: 0
      },
      transfer: {
        title: ['Sam sagt Nein', 'Sam möchte kein Foto von sich im Chat', 'Sam stimmt dem Teilen nicht zu'],
        text: ['Auf einem neuen Foto sind Tilda und Sam. Tilda fragt Sam. Sam sagt: Bitte teile das Foto nicht. Was passt jetzt?', 'Tilda möchte ein anderes Foto in ihrer Freizeitgruppe teilen. Sam ist darauf zu sehen und möchte das nicht. Was kann Tilda tun?', 'Tilda möchte ein weiteres Foto in ihrer Freizeitgruppe teilen. Sam ist darauf zu sehen und lehnt das Teilen ab. Welche Entscheidung respektiert Sams Wunsch?'],
        hint: ['Sam entscheidet über sein Bild mit. Ein Nein gilt auch in einer kleinen Gruppe.', 'Sams Nein gilt auch für eine kleine Gruppe. Tilda kann ein anderes Foto ohne Sam wählen.', 'Auch eine kleine Gruppe ändert nichts an Sams fehlender Zustimmung. Tilda kann ein anderes Foto wählen.'],
        actions: [['Foto nur in einer kleinen Gruppe teilen', 'transfer-hint'], ['Ein anderes Foto ohne Sam wählen', 'transfer-ok']],
        recommended: 1, transfer: true, back: 'done'
      },
      'transfer-hint': {
        title: ['Die Größe der Gruppe ändert das nicht', 'Sam hat dem Teilen nicht zugestimmt', 'Die Zustimmung fehlt auch für eine kleine Gruppe'],
        text: ['Sam möchte das Foto nicht teilen. Auch nicht mit wenigen Menschen. Du kannst ein anderes Foto wählen.', 'Sam möchte das Foto auch nicht in einer kleinen Gruppe teilen. Ein anderes Foto ist eine Möglichkeit.', 'Sam hat dem Teilen widersprochen. Ein kleinerer Empfängerkreis ersetzt die Zustimmung nicht. Wähle ein anderes Foto.'],
        actions: [['Noch einmal entscheiden', 'transfer']], transfer: true, back: 'transfer'
      },
      'transfer-ok': {
        title: ['Du hast das Nein von Sam beachtet', 'Du hast die Zustimmung auch hier beachtet', 'Du hast das Prinzip auf eine neue Situation übertragen'],
        text: ['Du hast ein anderes Foto gewählt. So kann Tilda eine Erinnerung teilen. Das Foto mit Sam bleibt privat.', 'Tilda kann mit einem anderen Foto eine Erinnerung teilen und zugleich Sams Nein beachten.', 'Ein anderes Foto ermöglicht Tilda das Teilen einer Erinnerung und respektiert zugleich Sams Entscheidung.'],
        end: true, transfer: true
      },
      done: {
        title: ['Du hast das Teilen geübt', 'Du hast ein Foto mit Zustimmung geteilt', 'Du hast das Teilen mit Zustimmung erprobt'],
        text: ['In der Übung sieht die Gruppe das Foto. In echt geht nichts weg. Denke daran: Andere können Fotos weitergeben.', 'In der Übung wurde das Foto mit der vereinbarten Gruppe geteilt. In echt wurde nichts verschickt. Auch Fotos aus einer Gruppe können weitergegeben werden.', 'In der Simulation wurde das Foto im vereinbarten Empfängerkreis geteilt. Es wurde nichts versendet. Bedenke: Auch Gruppenmitglieder können Fotos weitergeben.'],
        end: true, back: 'confirm'
      }
    }
  },
  kontakt: {
    topic: 'whatsapp', icon: 'message',
    nextScene: 'foto',
    goal: ['Du übst: Unerwünschte Nachrichten stoppen.', 'Du übst, einen unerwünschten Kontakt zu blockieren.', 'Du übst, einen Kontakt gezielt zu blockieren und die Wirkung einzuordnen.'],
    nextReason: ['Du kannst auch Fotos selbstbestimmt teilen.', 'Du kannst auch üben, ein Foto mit Zustimmung zu teilen.', 'Als Nächstes kannst du das selbstbestimmte Teilen eines Fotos erproben.'],
    path: ['start', 'options', 'confirm', 'done'],
    branchFrom: { muted: 'options' },
    title: ['Einen Kontakt blockieren', 'Einen Kontakt blockieren', 'Einen unerwünschten Kontakt blockieren'],
    desc: ['Alex möchte keine Nachrichten von Robin bekommen.', 'Alex entscheidet, dass Robin ihm nicht mehr schreiben soll.', 'Alex möchte keine direkten Nachrichten mehr von Robin bekommen.'],
    memory: [
      ['Ich öffne den Chat.', 'Ich öffne die Angaben zum Kontakt.', 'Ich wähle Blockieren. Ich bestätige meine Wahl.', 'Ich kann mir Hilfe holen. Ich muss nicht antworten.'],
      ['Ich öffne den Chat und die Angaben zum Kontakt.', 'Ich suche die Funktion Blockieren.', 'Ich bestätige meine Auswahl.', 'Ich kann mir Unterstützung holen und muss nicht antworten.'],
      ['Ich öffne den Chat und die Kontaktinformationen.', 'Ich wähle die Funktion zum Blockieren.', 'Ich prüfe und bestätige die Auswahl.', 'Ich kann Unterstützung hinzuziehen. Ich bin nicht verpflichtet zu antworten.']
    ],
    steps: {
      start: {
        title: ['Alex möchte keinen Kontakt', 'Alex möchte keine weiteren Nachrichten', 'Alex entscheidet sich gegen weiteren Kontakt'],
        text: ['Robin schreibt oft. Alex möchte das nicht. Alex darf den Kontakt blockieren. Er muss nicht antworten.', 'Robin schreibt immer wieder. Alex möchte keine weiteren Nachrichten und darf den Kontakt blockieren. Er muss nicht antworten.', 'Robin schreibt wiederholt. Alex möchte keinen weiteren Kontakt. Er darf Robin blockieren und muss seine Entscheidung nicht rechtfertigen.'],
        screen: 'Chat mit Robin', message: ['Warum antwortest du nicht? Schreib zurück!', 'Warum antwortest du nicht? Schreib mir zurück!', 'Warum antwortest du nicht? Schreib mir zurück!'],
        hint: ['Öffne die Angaben zum Kontakt. Tippe auf Kontakt ansehen.', 'Öffne die Angaben zum Kontakt, um die Funktion Blockieren zu finden.', 'Öffne die Kontaktinformationen. Dort findest du in dieser Übung die Blockierfunktion.'],
        actions: [['Kontakt ansehen', 'options']], recommended: 0
      },
      options: {
        title: ['Du wählst die Einstellung', 'Wähle eine Einstellung', 'Wähle die passende Kontaktfunktion'],
        text: ['Alex möchte keine neuen Nachrichten von Robin. Was passt dazu?', 'Alex möchte keine neuen direkten Nachrichten von Robin bekommen. Wähle die passende Einstellung.', 'Alex möchte weitere direkte Nachrichten von Robin verhindern. Welche Funktion passt dazu?'],
        screen: 'Kontakt: Robin', hint: ['Stumm schalten macht Nachrichten leise. Blockieren stoppt neue direkte Nachrichten von diesem Kontakt.', 'Beim Stummschalten kommen Nachrichten weiterhin an. Zum Stoppen direkter Nachrichten wählst du Blockieren.', 'Stummschalten unterdrückt Benachrichtigungen. Wähle Blockieren, um direkte Nachrichten dieses Kontakts zu stoppen.'],
        actions: [['Blockieren', 'confirm'], ['Stumm schalten', 'muted']], back: 'start', recommended: 0
      },
      muted: {
        title: ['Nachrichten kommen weiter an', 'Stumm ist etwas anderes als blockiert', 'Stummschalten beendet den Kontakt nicht'],
        text: ['Stumm schalten macht die Nachrichten leise. Robin kann weiter schreiben. Du kannst eine andere Einstellung wählen.', 'Stumm schalten macht Benachrichtigungen leise. Robin kann weiterhin schreiben. Wähle eine andere Einstellung, wenn du das nicht möchtest.', 'Beim Stummschalten können weiterhin Nachrichten eingehen. Wähle eine andere Einstellung, um direkte Nachrichten zu verhindern.'],
        actions: [['Andere Einstellung wählen', 'options']], back: 'options', recommended: 0
      },
      confirm: {
        title: ['Robin blockieren?', 'Möchtest du Robin blockieren?', 'Blockieren bestätigen'],
        text: ['In dieser Übung kann Robin dir dann keine direkten Nachrichten mehr schicken. Du kannst die Entscheidung noch ändern.', 'Nach dem Blockieren kommen in dieser Übung keine neuen direkten Nachrichten von Robin an. Du kannst die Auswahl noch ändern.', 'Nach dem Blockieren erhältst du in dieser Simulation keine neuen direkten Nachrichten von Robin. Du kannst die Auswahl noch ändern.'],
        screen: 'Kontakt: Robin', hint: ['Alex möchte den Kontakt blockieren. Bestätige die Wahl. Oder gehe zurück.', 'Bestätige das Blockieren, wenn es zu Alex’ Entscheidung passt. Du kannst auch zurückgehen.', 'Bestätige die Auswahl, um Alex’ Entscheidung umzusetzen. Zurückgehen bleibt möglich.'],
        actions: [['Ja, in der Übung blockieren', 'done']], back: 'options', recommended: 0
      },
      transfer: {
        title: ['Heute braucht Alex Ruhe', 'Alex möchte heute keine Benachrichtigungen', 'Alex möchte eine Pause von Benachrichtigungen'],
        text: ['Alex mag die Gruppe Konzert-Freunde. Heute braucht er Ruhe. Morgen möchte er die Nachrichten lesen. Was passt?', 'Alex möchte in der Gruppe Konzert-Freunde bleiben. Heute möchte er keine Benachrichtigungen, die Nachrichten aber morgen lesen. Was passt dazu?', 'Alex möchte weiterhin Teil der Gruppe Konzert-Freunde sein. Für heute möchte er Benachrichtigungen pausieren und die Nachrichten morgen lesen. Welche Einstellung passt zu seinem Ziel?'],
        hint: ['Alex möchte den Kontakt behalten. Stumm schalten macht die Nachrichten leise.', 'Alex möchte den Kontakt behalten. Beim Stummschalten bleiben die Nachrichten zum späteren Lesen erhalten.', 'Alex möchte Benachrichtigungen pausieren und den Kontakt behalten. Stummschalten passt zu diesem Ziel.'],
        actions: [['Gruppe stumm schalten', 'transfer-ok'], ['Gruppe verlassen', 'transfer-hint']],
        recommended: 0, transfer: true, back: 'done'
      },
      'transfer-hint': {
        title: ['Alex möchte in der Gruppe bleiben', 'Austreten passt nicht zu Alex’ Wunsch', 'Alex möchte den Kontakt erhalten'],
        text: ['Alex möchte morgen weiter lesen. Er muss die Gruppe nicht verlassen. Er kann sie stumm schalten.', 'Alex möchte in der Gruppe bleiben und morgen weiterlesen. Stumm schalten reicht für seine Pause.', 'Alex möchte den Austausch fortsetzen. Für seine Pause genügt es, Benachrichtigungen stummzuschalten.'],
        actions: [['Noch einmal entscheiden', 'transfer']], transfer: true, back: 'transfer'
      },
      'transfer-ok': {
        title: ['Die Einstellung passt zum Wunsch von Alex', 'Du hast eine passende Einstellung gewählt', 'Du hast die Einstellung passend zum Ziel gewählt'],
        text: ['Die Gruppe ist in der Übung stumm. Alex bleibt in der Gruppe. Er kann morgen weiter lesen. Auf deinem Handy ändert sich nichts.', 'In der Übung ist die Gruppe stumm geschaltet. Alex bleibt Mitglied und kann später weiterlesen. Dein Handy wurde nicht verändert.', 'In der Simulation sind die Benachrichtigungen der Gruppe stummgeschaltet. Alex bleibt Mitglied und kann später weiterlesen. Dein Handy wurde nicht verändert.'],
        end: true, transfer: true
      },
      done: {
        title: ['Du hast das Blockieren geübt', 'Du hast das Blockieren eines Kontakts geübt', 'Du hast das Blockieren eines Kontakts erprobt'],
        text: ['Robin ist in der Übung blockiert. Auf deinem echten Handy ändert sich nichts. Wichtig: Gemeinsame Gruppen und andere Konten von Robin blockierst du damit nicht.', 'Robin ist in der Übung blockiert. Auf deinem echten Handy wurde nichts geändert. Andere Konten und gemeinsame Gruppen werden dadurch nicht automatisch blockiert.', 'Robin ist in der Simulation blockiert. Dein tatsächliches Handy wurde nicht verändert. Andere Konten und gemeinsame Gruppen sind davon nicht automatisch erfasst.'],
        end: true, back: 'confirm'
      }
    }
  }
};

function alltagText() { return ALLTAG_TEXT[languageLevel] || ALLTAG_TEXT.leicht; }
function alltagVersion(values) {
  const index = { leicht: 0, einfach: 1, standard: 2 }[languageLevel] || 0;
  return values[index];
}
function alltagRoute(scene, step = 'start', demo = false) {
  return 'alltag:' + scene + ':' + step + (demo ? ':zeigen' : '');
}
function alltagGo(scene, step = 'start', demo = false) {
  renderAlltag(alltagRoute(scene, step, demo));
}
function buildAlltagChoices() {
  const t = alltagText();
  return `<section class="alltag-choices" aria-label="${escapeHtml(t.title)}">
    <h3>${escapeHtml(t.title)}</h3><p>${escapeHtml(t.intro)}</p>
    <div class="action-grid">${Object.entries(ALLTAG_SCENES).map(([id, scene]) => `
      <button type="button" class="action-card" onclick="alltagGo('${id}')">
        <span class="action-icon" aria-hidden="true">${getIconHtml(scene.icon)}</span>
        <span class="action-text"><span class="action-title">${escapeHtml(alltagVersion(scene.title))}</span>
        <span class="action-desc">${escapeHtml(alltagVersion(scene.desc))}</span>
        <span class="alltag-length">${scene.path.length - 1} Schritte · Hilfe bei jedem Schritt</span></span>
      </button>`).join('')}</div></section>`;
}
function alltagReflect(kind) {
  const t = alltagText();
  const output = document.getElementById('alltag-reflection');
  if (output) output.textContent = kind === 'together' ? t.togetherHint : t.realHint;
}
function renderAlltag(route) {
  const [, id, requestedStep, guide] = route.split(':');
  if (!Object.prototype.hasOwnProperty.call(ALLTAG_SCENES, id)) return renderScenarioChooser();
  const scene = ALLTAG_SCENES[id];
  const stepId = requestedStep === 'karte' || Object.prototype.hasOwnProperty.call(scene.steps, requestedStep) ? requestedStep : 'start';
  const isCard = stepId === 'karte';
  const step = isCard ? scene.steps.done : scene.steps[stepId];
  const demo = guide === 'zeigen' && !isCard;
  if (id === 'daten') privacyVisit = { step: stepId, demo, seen: [...new Set([...(privacyVisit?.seen || []), ...(isCard ? [] : [stepId])])] };
  const t = alltagText();
  stopReading();
  onboarding = false;
  currentTopicId = scene.topic;
  setActiveTab('lernweg');
  setProgressVisible(false);
  setBottomNavVisible(false);
  showNav(false, false);
  setHeader('Sicher und selbstbestimmt im Internet', t.title, t.title, '', 0);
  const position = scene.path.indexOf(scene.branchFrom[stepId] || stepId) + 1;
  const positionText = step.end ? '' : step.transfer ? t.newSituation : `Schritt ${position} von ${scene.path.length - 1}`;
  setOrientation(t.title + ': ' + alltagVersion(scene.title) + '.' + (positionText ? ' ' + positionText + '.' : ''));
  rememberRoute(alltagRoute(id, stepId, demo));

  const actions = step.actions || [];
  const offeredActions = demo ? actions.filter((_, i) => i === (step.recommended || 0)) : actions;
  /* Auswahlantworten sind gleichwertig gestaltet. Die Primärfarbe verrät
     keine Lösung. Bei einem einzelnen Folgeschritt zeigt sie den Weg. */
  const actionButton = action => `<button type="button" class="nav-button ${offeredActions.length === 1 ? 'primary' : 'secondary alltag-choice'}" onclick="alltagGo('${id}', '${action[1]}', ${demo})">${escapeHtml(action[0])}</button>`;
  const next = ALLTAG_SCENES[scene.nextScene];
  const nextPractice = `<section class="alltag-next no-print"><h3>${escapeHtml(t.nextPractice)}</h3>
    <p>${escapeHtml(alltagVersion(scene.nextReason))}</p>
    <button type="button" class="nav-button secondary" onclick="alltagGo('${scene.nextScene}')">${escapeHtml(alltagVersion(next.title))}</button></section>`;
  const memory = `<section class="alltag-memory"><h2>${escapeHtml(t.card)}: ${escapeHtml(alltagVersion(scene.title))}</h2>
    <p>${escapeHtml(t.cardIntro)}</p><ol>${alltagVersion(scene.memory).map(line => `<li>${escapeHtml(line)}</li>`).join('')}</ol>
    <h3>${escapeHtml(t.transfer)}</h3><p>${escapeHtml(id === 'daten' ? privacyText('taskText') : t.note)}</p>
    <p>Alex und Tilda · Sicher und selbstbestimmt im Internet</p></section>`;

  content.innerHTML = `${buildToolRow()}<article class="card alltag-page${isCard ? ' alltag-card-for-print' : ''}" data-readable="true">
    ${isCard ? memory : `
      <p class="alltag-simulation">${escapeHtml(t.simulation)}</p>
      <p class="alltag-kicker">${escapeHtml(alltagVersion(scene.title))}</p>
      ${positionText ? `<p class="alltag-step">${positionText}</p>` : ''}
      <h2>${escapeHtml(alltagVersion(step.title))}</h2>
      ${stepId === 'start' ? `<p class="alltag-goal"><strong>${escapeHtml(t.goal)}:</strong> ${escapeHtml(alltagVersion(scene.goal))}</p>` : ''}
      <p>${escapeHtml(alltagVersion(step.text))}</p>
      ${id === 'daten' && stepId === 'start' ? privacyGuide('alex') : ''}
      ${id === 'daten' && (stepId === 'options' || stepId === 'transfer') ? privacyGuide('tilda') : ''}
      ${demo ? `<div class="alltag-guidance"><strong>${escapeHtml(t.demo)}</strong><p>${escapeHtml(t.guide)}</p>${step.hint ? `<p>${escapeHtml(alltagVersion(step.hint))}</p>` : ''}</div>` : ''}
      ${offeredActions.length > 1 ? `<p class="alltag-choice-instruction">${escapeHtml(t.select)}</p>` : ''}
      ${step.screen ? `<section class="alltag-screen" aria-label="${escapeHtml(step.screen)}">
        <h3>${escapeHtml(step.screen)}</h3>
        ${step.message ? `<p class="alltag-message">${escapeHtml(alltagVersion(step.message))}</p>` : ''}
        <div class="alltag-actions">${offeredActions.map(actionButton).join('')}</div>
      </section>` : `<div class="alltag-actions">${offeredActions.map(actionButton).join('')}</div>`}
      ${step.end ? `
        <div class="alltag-actions"><button type="button" class="nav-button primary" onclick="alltagGo('${id}', '${demo ? (step.transfer ? 'transfer' : 'start') : step.transfer ? 'karte' : 'transfer'}')">${escapeHtml(demo ? t.own : step.transfer ? t.card : t.apply)}</button></div>
        ${!demo && !step.transfer ? `<button type="button" class="nav-button secondary" onclick="alltagGo('${id}', 'karte')">${escapeHtml(t.card)}</button>` : ''}
        <section class="alltag-transfer"><h3>${escapeHtml(t.transfer)}</h3><p>${escapeHtml(t.note)}</p>
          <details class="alltag-help"><summary>${escapeHtml(t.reflection)}</summary><div class="alltag-actions">
            <button type="button" class="nav-button secondary" onclick="alltagReflect('real')">${escapeHtml(t.tryReal)}</button>
            <button type="button" class="nav-button secondary" onclick="alltagGo('${id}')">${escapeHtml(t.practice)}</button>
            <button type="button" class="nav-button secondary" onclick="alltagReflect('together')">${escapeHtml(t.together)}</button>
          </div><p id="alltag-reflection" role="status" aria-live="polite"></p></details>
        </section>` : `
        <details class="alltag-help"><summary>${escapeHtml(t.help)}</summary>
          <p>${escapeHtml(alltagVersion(step.hint || (step.transfer ? scene.steps.transfer.hint : scene.steps.start.hint)))}</p>
          <p>${escapeHtml(t.togetherHint)}</p>
          <button type="button" class="nav-button secondary" onclick="alltagGo('${id}', '${stepId}', true)">${escapeHtml(t.demo)}</button>
        </details>`}
    `}
    ${id === 'daten' && step.end && !isCard ? privacyClosing() : ''}
    ${(isCard || step.end && step.transfer && !demo) ? nextPractice : ''}
    <div class="alltag-footer no-print">
      ${isCard ? `<button type="button" class="nav-button primary" onclick="window.print()">${escapeHtml(t.print)}</button>` : ''}
      ${stepId === 'start' && !demo ? `<button type="button" class="nav-button secondary" onclick="alltagGo('${id}', 'start', true)">${escapeHtml(t.demo)}</button>` : ''}
      ${demo && !step.end ? `<button type="button" class="nav-button secondary" onclick="alltagGo('${id}', '${step.transfer ? 'transfer' : 'start'}')">${escapeHtml(t.own)}</button>` : ''}
      ${step.back && !isCard && !step.end ? `<button type="button" class="nav-button secondary" onclick="alltagGo('${id}', '${step.back}', ${demo})">${escapeHtml(t.back)}</button>` : ''}
      ${isCard ? `<button type="button" class="nav-button secondary" onclick="alltagGo('${id}')">${escapeHtml(t.retry)}</button>` : ''}
      <button type="button" class="nav-button secondary" onclick="renderScenarioChooser()">${escapeHtml(t.choose)}</button>
      ${step.end ? `<button type="button" class="nav-button secondary" onclick="renderTopicChoice('${scene.topic}')">${escapeHtml(t.topic)}</button>` : ''}
    </div>
  </article>`;
  focusContent();
  renderLegalFooter();
}


/* Datenschutz-Muster: zentrale Entwurfstexte in allen drei Sprachstufen.
   Segmentierung, aktives Anwenden, freiwillige Reflexion. Nur Sitzungszustand. */
const PRIVACY_COPY = {
  goal: ['Das lernst du', 'Das lernst du', 'Das lernst du'],
  important: ['Das ist wichtig', 'Das ist wichtig', 'Das ist wichtig'],
  example: ['Beispiel aus dem Alltag', 'Beispiel aus dem Alltag', 'Beispiel aus dem Alltag'],
  try: ['Jetzt selbst ausprobieren', 'Jetzt selbst ausprobieren', 'Jetzt selbst ausprobieren'],
  take: ['Das kannst du mitnehmen', 'Das kannst du mitnehmen', 'Das kannst du mitnehmen'],
  alex: ['Alex erklärt: Eine App fragt nach Daten. Überlege zuerst: Wofür braucht sie die Daten?', 'Alex erklärt: Prüfe zuerst, wofür die App deine Daten braucht. Dann entscheidest du über den Zugriff.', 'Alex erklärt: Vergleiche die angefragten Daten mit der Funktion, die du nutzen möchtest. Entscheide dann über die Berechtigung.'],
  tilda: ['Tilda fragt: Was möchtest du mit der App machen? Welche Daten braucht sie dafür?', 'Tilda fragt: Welche Funktion möchtest du nutzen, und welche Daten braucht die App dafür?', 'Tilda fragt: Welcher Zugriff passt zu deinem Ziel? Prüfe auch, wie lange die App ihn benötigt.'],
  reflect: ['Wie geht es dir damit?', 'Wie sicher fühlst du dich dabei?', 'Wie schätzt du dich gerade ein?'],
  choices: [['Ich möchte es selbst versuchen.', 'Ich möchte noch einmal üben.', 'Ich möchte Hilfe dabei.'], ['Ich möchte es selbst ausprobieren.', 'Ich brauche noch etwas Übung.', 'Ich möchte es mit Unterstützung versuchen.'], ['Ich traue mir das Ausprobieren zu.', 'Ich möchte den Ablauf erneut üben.', 'Ich möchte Unterstützung nutzen.']],
  replies: [['Nimm dir Zeit. Du kannst jederzeit aufhören.', 'Du kannst die Übung jederzeit wiederholen.', 'Bitte eine Person um Hilfe. Du entscheidest selbst.'], ['Probiere es in deinem Tempo aus. Du kannst jederzeit aufhören.', 'Wiederhole die Übung oder lass dir den Ablauf zeigen.', 'Lass dir die Einstellung zeigen. Du entscheidest über Änderungen.'], ['Übertrage den Ablauf in deinem Tempo auf dein Gerät.', 'Nutze die Wiederholung oder die schrittweise Anleitung.', 'Bitte um Unterstützung beim Finden der Einstellung. Die Entscheidung bleibt bei dir.']],
  optional: ['Du kannst die Frage auslassen. Die App speichert deine Antwort nicht.', 'Die Einschätzung ist freiwillig und wird nicht gespeichert.', 'Deine Selbsteinschätzung ist freiwillig und wird nicht gespeichert.'],
  task: ['Eine kleine Aufgabe für heute', 'Eine kleine Aufgabe für deinen Alltag', 'Eine kleine Aufgabe für den Alltag'],
  taskText: ['Wähle eine App auf deinem Handy. Suche ihre Berechtigungen in den Einstellungen. Schau nach: Welche Daten darf sie sehen? Du musst nichts ändern. Du kannst dir Hilfe holen.', 'Suche in den Einstellungen deines Handys die Berechtigungen einer App. Prüfe, welche Daten sie sehen darf. Du musst nichts ändern und kannst dir Hilfe holen.', 'Öffne die App-Berechtigungen in den Einstellungen deines Geräts. Prüfe bei einer App, ob die Freigaben zu deiner Nutzung passen. Änderungen sind freiwillig; Unterstützung ist jederzeit möglich.'],
  next: ['Danach: Fotos teilen', 'Danach: Fotos bewusst teilen', 'Als Nächstes: Fotos bewusst teilen'],
  reason: ['Bei Instagram kannst du üben: Wer darf ein Foto sehen?', 'Im Thema Instagram kannst du üben, mit wem du ein Foto teilst.', 'Im Thema Instagram überträgst du Datenschutz auf die Auswahl der Personen, mit denen du Fotos teilst.'],
  path: ['Datenschutz: Dein Übungsweg', 'Dein Übungsweg zum Datenschutz', 'Dein Übungsweg zum Datenschutz'],
  new: ['Noch nicht geöffnet', 'Noch nicht geöffnet', 'Noch nicht geöffnet'],
  viewed: ['Zuletzt geöffnet', 'Zuletzt geöffnet', 'Zuletzt geöffnet'],
  session: ['Das gilt für diesen Besuch. Die Übung ist immer offen.', 'Dieser Übungsstand gilt für diesen Besuch. Du kannst jederzeit beginnen.', 'Diese Orientierung gilt für die aktuelle Sitzung. Die Übung ist jederzeit zugänglich.'],
  visited: ['Schon geöffnet', 'Bisher in dieser Übung geöffnet', 'Bisher in dieser Übung geöffnet'],
  permission: ['App-Berechtigung prüfen', 'App-Berechtigung prüfen', 'App-Berechtigung prüfen'],
  weather: ['Wetter-App: Standort wählen', 'Wetter-App: Standort wählen', 'Wetter-App: Standort wählen'],
  continue: ['Hier weiter üben', 'Hier weiter üben', 'Übung fortsetzen'],
};
let privacyVisit = null;
function privacyText(key) { return alltagVersion(PRIVACY_COPY[key]); }
function privacyGuide(who) {
  return `<aside class="privacy-guide" role="note"><p>${escapeHtml(privacyText(who))}</p></aside>`;
}
function privacyReflect(index) {
  const output = document.getElementById('privacy-reflection');
  if (output) output.textContent = privacyText('replies')[index] || '';
  document.querySelectorAll('[data-privacy-reflect]').forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
}
function privacyClosing() {
  return `<section class="privacy-closing">
    <h3>${escapeHtml(privacyText('reflect'))}</h3><p>${escapeHtml(privacyText('optional'))}</p>
    <div class="alltag-actions">${privacyText('choices').map((label,i) => `<button type="button" class="nav-button secondary" data-privacy-reflect aria-pressed="false" onclick="privacyReflect(${i})">${escapeHtml(label)}</button>`).join('')}</div>
    <p id="privacy-reflection" role="status" aria-live="polite"></p>
    <h3>${escapeHtml(privacyText('task'))}</h3><p>${escapeHtml(privacyText('taskText'))}</p>
    <details class="alltag-help"><summary>${escapeHtml(privacyText('next'))}</summary><p>${escapeHtml(privacyText('reason'))}</p>
    <button type="button" class="nav-button secondary" onclick="renderTopicChoice('instagram')">Instagram</button></details>
  </section>`;
}
function privacyPath() {
  const label = privacyVisit?.step === 'karte' ? alltagText().card : privacyVisit ? alltagVersion((ALLTAG_SCENES.daten.steps[privacyVisit.step] || ALLTAG_SCENES.daten.steps.done).title) : privacyText('new');
  return `<section class="path-block privacy-path"><h3>${escapeHtml(privacyText('path'))}</h3>
    <p>${privacyVisit ? escapeHtml(privacyText('viewed')) + ': ' : ''}${escapeHtml(label)}</p>
    <p>${escapeHtml(privacyText('session'))}</p>
    ${privacyVisit?.seen.length ? `<details class="alltag-help"><summary>${escapeHtml(privacyText('visited'))}</summary><ul>${privacyVisit.seen.map(key => `<li>${escapeHtml(alltagVersion(ALLTAG_SCENES.daten.steps[key].title))}</li>`).join('')}</ul></details>` : ''}
    <button type="button" class="nav-button primary" onclick="alltagGo('daten', '${privacyVisit ? privacyVisit.step : 'start'}', ${privacyVisit ? privacyVisit.demo : false})">${escapeHtml(privacyText('continue'))}</button>
    <details class="alltag-help"><summary>${escapeHtml(privacyText('try'))}</summary>
    <div class="alltag-actions"><button type="button" class="nav-button secondary" onclick="alltagGo('daten')">${escapeHtml(privacyText('permission'))}</button>
    <button type="button" class="nav-button secondary" onclick="alltagGo('daten', 'transfer')">${escapeHtml(privacyText('weather'))}</button></div></details></section>`;
}
