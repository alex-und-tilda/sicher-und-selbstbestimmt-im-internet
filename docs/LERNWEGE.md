# Lernwege – gemeinsamer Entwurf für alle

**Stand:** 11.10.2026 · **Grundlage:** veröffentlichter App-Stand v2026-29d · **Zielgruppe:** Erwachsene mit und ohne kognitive Behinderung, allein oder mit einer selbst gewählten Begleitperson.

## Mein Plan

Alle Menschen lernen auf derselben Plattform an denselben zwölf Themen und Zielen. Niemand wird nach einer Diagnose gefragt oder in einen Diagnoseweg einsortiert. Die Person entscheidet, welches Thema sie interessiert, welche Sprachfassung und welche Hilfen sie nutzen und ob eine Begleitperson dazukommt. Der Kernweg ist für alle erreichbar. „Mehr dazu“ bleibt freiwillig; „Alle Lektionen nachlesen“ bewahrt den ganzen Bestand.

Dieser Entwurf ordnet zuerst den wirklichen Stand ein. Danach beschreibt er die gemeinsamen Regeln für alle zwölf Themen, arbeitet Datenschutz als Beispiel vollständig aus und nennt für die anderen elf Themen ein Gerüst. Die Zeitangaben und der zusätzliche Mehrtagesplan sind Vorschläge, keine vorhandene App-Funktion und keine wissenschaftlich festgelegten Lernzeiten.

## 1. Was die Plattform jetzt enthält

| Baustein | Stand und Fundstelle |
|---|---|
| Themen und Lektionen | Zwölf Themen mit festen Inhalten in [`topics.js`](topics.js): Datenschutz, WhatsApp, Facebook, Instagram, YouTube, Snapchat, TikTok, Hilfe bei Problemen, KI und Chatbots, Fake News und KI-Fakes, Betrug und Online-Einkaufen. Das gemeinsame Datenformat hat Einstieg, drei Kernlektionen, Übungen, Merk- und Abschlusselemente. Die Datei enthält die Lerntexte, Beispiele und Aufgaben; es wird kein Modul bei der Nutzung von einer KI erzeugt. |
| Weg und Reihenfolge | [`app.js`](app.js), `getLessonsForMode()` und `startTopicMode()`: `short` startet den Kernweg. `extra` ist die redaktionell ausgewählte freiwillige Zusatzfolge. `full` hält alle bisherigen Lektionen zum vollständigen Nachlesen bereit. Gleiche Lektionstitel bedeuten nicht automatisch gleiche Inhalte. |
| Einstieg und Ziel | Jedes Thema hat einen Selbstcheck und sichtbare Lernziele in `topics.js`; Datenschutz und Hilfe haben außerdem eine Vorhersage. Der Start lässt sich überspringen, die Themen bleiben frei wählbar. Es gibt keine Diagnose- oder Könnensstufe, die einen Lernweg sperrt. `LERNZIELE` und die Lernzielanzeige stehen in `app.js` bei `8957` sowie in den verknüpften Inhalten in `content-de.js`. |
| Sprachzugänge | Leichte Sprache ist die Startfassung. Einfache Sprache und Alltagssprache lassen sich ebenfalls auswählen. Die vollständigen Stufenfassungen liegen in `content-de.js` und werden durch `resolveLessonContent()` in `app.js` verbunden. Die Sprachwahl bleibt freiwillig und umstellbar; sie ist kein Testergebnis. |
| Bilder, Ton und Vorlesen | Szenen und Piktogramme ergänzen Texte; die App bietet Vorlesen mit einer lokalen deutschen Stimme. Ein Video ist kein durchgängiger Lernweg-Bestandteil. Vorhandene Medien dürfen Text und Handlung nicht ersetzen. |
| Üben und Rückmeldung | Viele Lektionen haben eine eigene Übung mit einzelnen Antwortmöglichkeiten und erklärender, freundlicher Rückmeldung. Die Hilfe zur Aufgabe lässt sich öffnen; weitere Hilfen erscheinen auf Wunsch. Alternative sichere Antworten können als ebenfalls gültig erklärt werden. Darstellung und gemeinsame Aufgabenlogik liegen in `app.js`; Aufgaben und Rückmeldungen kommen aus `topics.js`, `content-de.js` und ergänzenden Aufgabendaten. |
| Anwendung und Alltag | Jedes Thema hat einen eigenen Abschluss mit einer neuen Situation beziehungsweise dem vorhandenen Anwendungsschritt und einer freiwilligen Alltagshandlung. Die Themen wenden eine erlernte Idee in anderen Situationen an. `topic.neueSituation`, `transfer` und das gemeinsame Datenformat stehen in `topics.js` und `app.js` beim Anwenden-Ablauf. Das Übungs-Handy ist eine zusätzliche Übung, nicht der Pflichtweg zur Anwendung. |
| Wiederholung | „Was weißt du noch?“, Quiz, „Noch einmal üben“ und Themen-Wiederholen bieten Abrufaufgaben. Eine bereits vorhandene Erinnerung kann nach sieben Tagen an ein abgeschlossenes Thema erinnern. Der Zeitstempel gehört zum ausdrücklich erlaubten Lernstand. Fundstelle: `app.js`, `getTopicsDueForReview()` ab Zeile `776`, sowie die Abschnitte `Wiederholen` und `startRepeatQuiz()`. Das ist noch kein planmäßiger Abruf über mehrere Tage. |
| Fortschritt und Daten | „Mein Lernweg“ zeigt bearbeitete Themen und erlaubt Wiederholen. Dauerhafte Erfolge und Antworten werden nur nach der vorhandenen Einwilligung gespeichert. Ohne Einwilligung bleibt der entsprechende Lernfortschritt in der geöffneten Sitzung. Es gibt keine Anmeldung oder Analyse des Lernens über einen Dienst. Fundstelle: `app.js`. |
| Begleitperson | [`begleitung-de.js`](begleitung-de.js) enthält für alle Themen praktische Hinweise zum Vorbereiten, Fragen, Helfen, Erkennen und Alltagstransfer. Die gemeinsame Hilfe-Folge sagt: erst fragen, Hilfe abstimmen und das Gerät bei der lernenden Person lassen. Sie ist ein eigenes Angebot; solo lernende Menschen müssen sie nicht benutzen. Fundstellen: Zeilen `20–27`, thematische Abschnitte ab `30` und Themenbegleitung ab `721`. |
| KI bei der Modulerstellung | Die zwölf Themen und Aufgaben werden als feste Inhalte in JavaScript-Dateien gepflegt. Eine Funktion, die zur Laufzeit ein Lernmodul mit KI erzeugt, ist im untersuchten Projekt nicht erkennbar; in den Projektdateien fand ich auch keine Erzeugungs-Vorlage für Lernmodule. Die verwendeten KI-Schlüsselwörter beziehen sich auf das Thema „KI und Chatbots“, nicht auf eine automatische Inhaltserstellung. |

**Inhaltlicher Ausgangspunkt:** Datenschutz ist im Projekt als Referenz für die übrigen Themen festgelegt. Der gemeinsame Innenaufbau ist: Alltagssituation, Verstehen, eigene Übung mit Erklärung, Erinnern, neue Anwendung und eine freiwillige Handlung für den Alltag. Jede Person darf pausieren und das Thema wechseln. Die Kernfolge ist gleich; die Zugänge unterscheiden sich nach gewählter Unterstützung und nicht nach Diagnose.

**Aktueller Bedienentwurf:** Eine frühere Prüfung betrachtete die App in sieben Handyansichten; v29d änderte anschließend nur die Druckdarstellung. Die folgenden nächsten App-Schritte sind Vorschläge, keine bereits eingebauten Änderungen:

1. Eine verständliche Hauptanzeige für den Lernfortschritt. Bei „Deine Daten“ erscheinen derzeit zugleich „Schritt 2 von 5“, „Lernen · Teil 1 von 2“ und „Schritt 3 von deinem Plan“. Der fachliche Plan-Schritt bleibt erkennbar, ohne konkurrierende Fortschrittszähler.
2. Ein gleich beschrifteter Hilfezugang in Themenwahl und Lernweg. Zuerst erscheint Hilfe für die gerade sichtbare Aufgabe; dann lassen sich App-Bedienung, Vorlesen, Pause und Begleit-Tipps finden. Die derzeit rund 2.926 Pixel lange allgemeine Hilfeseite wird nach Anliegen übersichtlich gegliedert.
3. Rückmeldungen zeigen zuerst die Erklärung und den sinnvollen nächsten Schritt. Die gewählte Antwort und Regel bleiben erreichbar; Zurück und Weiter erhalten ihren festen Ort.
4. Eine konkrete Themenwahl führt ohne doppelte Startentscheidung zum ersten Lernschritt. Einstieg, Lernziele und Situation bleiben erhalten; die Themenliste bleibt eine alternative Route.
5. Piktogramme unterstützen jeweils einen Gedanken mit einer stabilen Bedeutung. Text und Vorlesen bleiben. Fehlende Zeichen benötigen eine Freigabe aus der Bildbibliothek.

Diese Empfehlungen beruhen auf der Ansicht und den Programmtexten, nicht auf einer Messung der Lernerfahrung. Die erste Fortschrittsanzeige und jeder neue Bedientext bleiben **mit Nutzenden testen**. Fachliche Inhalte, Mehrfachwege, Regeln, sichere Alternativen und Beispiele dürfen nicht verschwinden, nur weil eine Darstellung einfacher erscheinen soll. Als ergänzende Gestaltungshinweise dienen [COGA-Hinweise zu überschaubaren Inhaltsmengen](https://www.w3.org/WAI/WCAG2/supplemental/patterns/o5p03-manageable-quantity/), [kurzen Wegen](https://www.w3.org/WAI/WCAG2/supplemental/patterns/o5p02-short-paths/) und [weniger Gedächtnislast](https://www.w3.org/WAI/WCAG2/supplemental/patterns/o6p05-low-cognition/); sie allein beweisen weder Konformität noch Wirkung.

## 2. Grundsätze für jeden Weg

Diese Grundsätze gelten für **alle zwölf Themen**. Weil die App dieselbe Lektions- und Aufgabenlogik für jedes Thema verwendet, wäre es irreführend, das bestehende Gerüst zwölfmal als zwölf unabhängige Erfolge auszugeben. Die Themenübersicht unten zeigt zusätzlich, welche Fälle und Alltagsziele pro Thema einzusetzen sind. Jeder Punkt nennt, was heute vorhanden ist, die geplante Ergänzung und die Stärke der Belege.

### Belegstufen

- **Belegt für kognitive Behinderung:** Eine gefundene Untersuchung oder Übersicht schließt Menschen mit kognitiver beziehungsweise intellektueller Behinderung ein. Alter, Anzahl und die tatsächlich untersuchte Fähigkeit stehen direkt dabei. Ein Beleg für Jugendliche ist kein Beleg für Erwachsene.
- **Nur bei Lernenden allgemein belegt:** Die Untersuchung betrifft allgemeines Lernen, zum Beispiel Schulunterricht, oder berichtet nicht speziell über Erwachsene mit kognitiver Behinderung.
- **Annahme, muss getestet werden:** Es fehlt ein direkter Wirkungsbeleg für diese konkrete App, Zielgruppe oder Entscheidung. Das heißt nicht, dass die Idee falsch ist; sie muss zusammen mit Lernenden geprüft werden.

### 1. Derselbe Zweck, mehrere Zugänge

**Stand:** Die Plattform hat Text in drei Sprachfassungen, Bilder, Vorlesen, auswählbare Hilfen, Antwortmöglichkeiten, eine eigene Begleit-Ebene und Alltagssituationen. Video ist kein durchgängiger Zugang. **Plan:** Zu jedem Kernziel mindestens einen Textzugang und eine konkrete Situation samt Bild anbieten. Ton nur freiwillig und niemals als einzigen Zugang. Wahlweise durch Tippen, Vorlesen lassen oder mit einer Person besprechen antworten; alle Wege führen zum selben Lernziel und zur gleichen Rückmeldung. Video kommt nur hinzu, wenn die konkrete Handlung damit klarer wird und das Video anhaltbar und wiederholbar ist. Keine geteilte Nutzung nach Behinderung.

**Beleg:** `[belegt für kognitive Behinderung]` Van Alem, Frielink und Embregts (2025) fanden in einer qualitativen Übersicht über 21 Studien zu freiwilliger Internetnutzung bei Menschen mit intellektueller Behinderung in 16 Studien hauptsächlich erwachsene Teilnehmende. Es ging um Nutzungsmotive und Selbstbestimmung, nicht um das Lernen mit dieser App; in nur sieben der 21 Studien wurde der Unterstützungsbedarf genauer berichtet. Der Befund stützt, eigene Zwecke und Wahlmöglichkeiten ernst zu nehmen, nicht die Wirksamkeit bestimmter Knöpfe oder Medien. `[Nur bei Lernenden allgemein belegt]` CASTs UDL-Leitlinien beschreiben mehrere Wege, Informationen aufzunehmen und Wissen zu zeigen, als Entwurfsrahmen. King-Sears und andere untersuchten UDL-Lehrangebote in einer allgemeinen Metaanalyse; das beweist keine Wirkung für genau diese gemischte Gruppe erwachsener Lernender. `[Annahme, muss getestet werden]` Welche Foto-, Ton-, Text- oder Antwortform jede Person bevorzugt.

### 2. Kleine, ruhige Abschnitte

**Stand:** Der Lernmodus zeigt einen Schritt pro Bildschirm und hat Zurück, Pause, Vorlesen und Hilfe. Lektion, Beispiel und Übung sind bereits getrennt. **Plan:** Pro Bildschirm eine Entscheidung oder Handlung. Ein Beispiel steht unmittelbar neben der Erklärung, auf die es sich bezieht. Unnötige Links und dekorative Bewegung entfallen. Die lernende Person entscheidet über Pausen und Tempo.

**Beleg:** `[Nur bei Lernenden allgemein belegt]` Noetel et al. fassten 29 Übersichtsarbeiten mit insgesamt 1.189 Studien und 78.177 Teilnehmenden zusammen. Ihre Ergebnisse sprechen unter anderem dafür, zusammengehörige Worte und Bilder räumlich oder zeitlich nah zu zeigen, Relevantes sichtbar zu machen und unnötige Inhalte wegzulassen. Die Arbeit fasst unterschiedliche Materialien und Altersgruppen zusammen, prüft nicht diese App und weist keinen eigenen Wirkungsnachweis für Erwachsene mit kognitiver Behinderung aus. `[Annahme, muss getestet werden]` Ob die gewählte Anzahl von Textzeilen, Übungen und Minuten pro Abschnitt Menschen dieser Zielgruppe entlastet. Verständlichkeit und tatsächliche Belastung sind mit Nutzenden zu prüfen.

### 3. Eine Handlung nach der anderen; Hilfe auf Wunsch

**Stand:** Lektionen enden häufig mit einer Frage. Datenschutz und Hilfe haben zusätzlich strukturierte Handlungsschritte. Der Hilfe-Knopf ist erreichbar; weitere Hinweise öffnet die Person selbst. **Plan:** Eine mehrteilige Handlung in benannte Einzelschritte gliedern. Nach der Frage kurz Raum zum Antworten lassen; kein Countdown. Hilfe ist sofort zugänglich. Eine Person, die erst selbst überlegen möchte, kann das tun. Wer Hilfe möchte, muss nicht zuerst scheitern oder warten. Bei Druck, akuter Gefahr oder einer Bitte um Hilfe antworten App und Begleitung sofort und ruhig.

**Beleg:** `[Belegt für kognitive Behinderung, begrenzt auf Schulkinder und Unterricht]` Spooner et al. werteten 17 Versuche zum Unterrichten von naturwissenschaftlichen Inhalten für Schülerinnen und Schüler mit schweren Entwicklungsbehinderungen aus; 14 bewerteten sie als methodisch gut oder ausreichend. Sie benennen systematischen Unterricht, Aufgabenanalyse und „time delay“ als Unterrichtsverfahren. Das ist kein Wirksamkeitsbeleg für ein beliebig langes Warten in einer Erwachsenen-App. Es rechtfertigt weder eine Hilfe-Sperre noch ein automatisches Warten nach einer falschen Antwort. `[Annahme, muss getestet werden]` Die konkrete Reihenfolge von Hinweis und eigener Antwort in jedem Plattform-Thema.

### 4. Hilfen passend und ausblendbar

**Stand:** Die Person kann Leichte, Einfache oder Alltagssprache auswählen, Vorlesen, Schriftgröße und die praktische Begleitung nutzen. Aufgabenhilfe und zusätzliche Hinweise werden freiwillig geöffnet. **Plan:** In jeder neuen Übung die Wahl sichtbar halten: „Erst selbst überlegen“ oder „Hilfe jetzt“. Danach gestuft ein Beispiel und, wenn gewünscht, ein gezeigter Schritt. Bei Wiederholungen kann die Person selbst „weniger Hilfe“ wählen. Keine Automatik, die aus Diagnose, einem einzelnen Fehler oder einem Profil auf Können schließt. Auch geübte Personen erreichen Erklärung und Vorbild weiterhin auf Wunsch.

**Beleg:** `[Nur bei Lernenden allgemein belegt]` Tetzlaff et al. (2025) fassten 60 Experimente mit 5.924 Teilnehmenden zusammen. Wenig Vorwissen hing im Mittel mit einem Vorteil stärkerer Unterstützung zusammen, viel Vorwissen mit einem Vorteil geringerer Unterstützung. Diese Unterschiede wechselten auch mit Fach und Art der Leistungsmessung. Die Metaanalyse belegt keine automatische Einstufung und betrifft nicht gezielt Erwachsene mit kognitiver Behinderung. `[Annahme, muss getestet werden]` Die vorgeschlagene selbst gewählte „weniger Hilfe“-Option und die passende Stufe pro Thema. Das automatische Ausblenden wird deshalb nicht empfohlen.

### 5. Verständliche, erwachsene Sprache

**Stand:** Leichte Sprache startet zuerst; Einfache und Alltagssprache sind verfügbar. Lerninhalte und Aufgaben sollen drei Stufen haben. Die Plattformregeln verlangen kurze, konkrete und erwachsene Formulierungen. **Plan:** Pro Bildschirm bleibt eine Sprache gewählt. Vertiefende Erklärungen sind bei Bedarf direkt im betreffenden Abschnitt abrufbar. Beispiele behalten denselben fachlichen Inhalt in allen Stufen. Ob eine Person den Sinn versteht, wird nicht aus Lesbarkeit, Fehlerzahl oder Diagnose abgeleitet.

**Beleg:** `[Belegt für kognitive Behinderung, aber sehr kleine Sprachprüfung]` Vollenwyder et al. (2018) untersuchten 308 Erwachsene ohne Behinderung beim Lesen dreier Webtexte; vier Personen mit kognitiven Behinderungen prüften die Easy-to-Read-Fassung vorab mit. Diese vier Personen ersetzten keine Verständlichkeitsstudie der Lernplattform. Der Versuch zeigte keine Verschlechterung der gemessenen Textleistung für die nicht behinderten Teilnehmenden durch die Easy-to-Read-Fassungen. `[Annahme, muss getestet werden]` Die Dreistufenauswahl ist kein Gütesiegel: Texte, Bedienwörter, Aufgaben, Alternativtexte und Piktogramme mit Erwachsenen aus der Zielgruppe prüfen. Das offizielle LeiSA-Projekt bezog Menschen mit Lernschwierigkeiten in Forschung zu verständlicher Sprache und beruflicher Teilhabe ein; es ist kein Wirkungsnachweis für die App. LeiSA und Vollenwyder liefern Anlass zum Mitprüfen, keinen Ersatz für den Test dieser Plattform.

### 6. Wiederholen über mehrere Tage

**Stand:** Quiz, Erinnern, Wiederholen und eine freiwillige Sieben-Tage-Erinnerung sind vorhanden. Eine Folge kleiner Abrufe über mehrere Tage ist noch nicht als Lernplan umgesetzt. **Plan:** Für ein Thema vier abrufbare Momente anbieten: erster Tag, nach etwa zwei Tagen, nach etwa einer Woche und später auf Wunsch. Pro Moment eine bis drei Fragen aus bereits bearbeiteten Inhalten und eine kurze Begründung. Kein Punktabzug, keine Sperre und keine Benachrichtigung ohne Entscheidung. Die Intervalle sind ein Startversuch und keine starre wissenschaftliche Vorschrift.

**Beleg:** `[Nur bei Lernenden allgemein belegt]` Mawson und Kang (2025) untersuchten verteiltes Üben im Klassenunterricht in 22 Berichten mit 31 Effektgrößen und insgesamt mehr als 3.000 Lernenden. Die mittlere Wirkung war positiv; zwischen den Untersuchungen bestand sehr große Verschiedenheit. Die Autoren schlossen Studien aus, deren Stichprobe ausschließlich aus speziellen Lerngruppen wie Menschen mit intellektueller Behinderung bestand. Die Arbeit stützt deshalb keinen genauen Stunden- oder Tagesabstand für Erwachsene mit kognitiver Behinderung. `[Annahme, muss getestet werden]` Die genannten Tage, kleine Wiederholungsmengen und ein freiwilliger Aufruf im passenden Moment.

### 7. Rückmeldung hilft beim nächsten Versuch

**Stand:** Die App erklärt viele Antworten freundlich und bietet erneutes Üben. Sie unterscheidet passende, ebenfalls mögliche und unpassende Antworten. **Plan:** Für jede Antwort gleich nach der Wahl in einem kurzen Satz sagen, was hier passt und warum. Danach ein konkreter nächster Schritt: „Du kannst noch einmal überlegen“ oder „Du kannst dir die Erklärung ansehen“. Wenige plausible Antworten sind ein übersichtlicher Ausgangspunkt; vor der Wahl muss klarstehen, ob eine oder mehrere Antworten gesucht sind. Kein Fehlergeräusch als einziges Zeichen und keine Strafe. Der Fortschrittsbalken zeigt den Weg durch die Lektion, nicht ein Urteil über die Person.

**Beleg:** `[Nur bei Lernenden allgemein belegt]` Aktives Abrufen und erklärende Rückmeldung sind in allgemeiner Unterrichts- und Multimediaforschung untersucht. `[Annahme, muss getestet werden]` Dass zwei bis drei Antwortmöglichkeiten, die vorhandene Farbgebung und die kurze Erklärung für jede Zielperson am verständlichsten sind. Die vom Auftrag erwähnte „Wiener Studie 2024“ ließ sich anhand der vorhandenen Angaben nicht eindeutig einer Studie über Lernrückmeldung oder Antwortaufgaben zuordnen; sie wird hier nicht als Beleg verwendet. Farben oder Ton allein dürfen nie die Rückmeldung tragen.

### 8. Selbst gewähltes Ziel und Reihenfolge

**Stand:** Die Person wählt Themen und zwischen Kern, freiwilliger Vertiefung und Nachlesen. Start und Umfang fragen nicht nach einer Diagnose. **Plan:** Vor einer Einheit ein eigenes Alltagsziel anbieten, zum Beispiel „Ich möchte ein Foto teilen“ oder „Ich möchte eine Nachricht prüfen“. Die Person kann selbst ein anderes Ziel benennen oder das Ziel überspringen. Fachlich notwendige Schritte innerhalb der gewählten Aufgabe bleiben erkennbar. Die Person schätzt selbst ein, was sie schon kann und ob eine Aufgabe hilfreich war. Diese Selbsteinschätzung entscheidet nicht über Zugang oder Leistung.

**Beleg:** `[Belegt für kognitive Behinderung: erwachsene Internetnutzende, aber kein Unterrichtsversuch]` Van Alem et al. beschreiben in ihrer Übersicht der freiwilligen Internetnutzung Selbstbestimmung und selbst geleitete Entscheidungen als einen Grund, warum erwachsene Menschen mit intellektueller Behinderung das Internet nutzen. Das belegt weder, dass Ziele im Kurs bessere Lernergebnisse hervorbringen, noch eine bestimmte Zieloberfläche. `[Nur bei Lernenden allgemein belegt, untersucht mit Schülerinnen und Schülern]` Shogren et al. untersuchten im schulischen Unterricht ein gruppen-randomisiertes Modell zur Erreichung selbst gewählter Bildungs- und Übergangsziele bei Schülerinnen und Schülern mit intellektueller Behinderung und Lernbehinderungen. Die Ergebnisse lassen sich nicht ohne Prüfung auf eine Plattform für Erwachsene übertragen. `[Annahme, muss getestet werden]` Die Alltagsziel-Auswahl, Reihenfolge innerhalb eines Themas und Selbstbewertung in dieser App.

### 9. In eigenen Alltagssituationen üben

**Stand:** Ein Beispiel aus dem Alltag und ein Anwendungsschritt sind je Thema vorhanden. Die Begleit-Ebene schlägt Übungen auf Wunsch am eigenen Gerät vor. **Plan:** Von einer erfundenen Übungssituation über eine selbst gewählte, ungefährliche Alltagssituation bis zu einer echten Handlung gehen, wenn die Person das möchte. Angebote und Fotos aus dem Umfeld nur nach ausdrücklicher Wahl. Keine echten Passwörter, Zahlungsdaten, privaten Chats oder Gesundheitsinformationen in einer Übung. Eine Übung ersetzt keine echte Kauf-, Datenschutz- oder Notfallentscheidung.

**Beleg:** `[Belegt für kognitive Behinderung: erwachsene Nutzerperspektiven, nicht Lerntransfer]` Die Arbeiten der von van Alem et al. untersuchten Menschen handeln von realer freiwilliger Internetnutzung und ihrem Alltag. González und Del Prete (2024) fanden in ihrer systematischen Übersicht wenige Veröffentlichungen zu Online-Schulungen für Erwachsene mit Behinderungen; die Studien umfassten unterschiedliche Behinderungsgruppen und Fähigkeiten, oft mit Unterstützung. Die Übersicht berichtet Ergebnisse für trainierte Fähigkeiten, aber keinen Nachweis, dass der hier vorgeschlagene Transfer im Erwachsenenalltag gelingt. `[Annahme, muss getestet werden]` Reale Orte, Bilder aus dem eigenen Umfeld, Begleitung direkt nach einem Modul und die Wirkung eines einmaligen Alltagsschritts.

### 10. Die Begleitperson ist auf Wunsch da

**Stand:** `begleitung-de.js` beschreibt konkrete Gesprächs- und Alltagshilfen für alle Themen. Die gemeinsame Praxisfolge beginnt mit Fragen und lässt die lernende Person entscheiden. **Plan:** Die Begleitperson fragt zuerst: „Welche Hilfe möchtest du?“ Sie kann vorlesen, ein Beispiel gemeinsam ansehen, etwas vormachen oder eine Pause lassen. Die lernende Person entscheidet, ob sie Hilfe annimmt, was auf ihrem Gerät geschieht und ob sie etwas teilt. Begleitpersonen bekommen beobachtbare Hinweise für das Gespräch, aber keinen zweiten Score und keine Meldung über einzelne Antworten. Ein Ergebnis in der App gilt nicht als Nachweis selbstständiger Handlung im Alltag.

**Beleg:** `[Belegt für kognitive Behinderung: Erwachsene kommen in der Nutzerforschung vor]` Van Alem et al. zeigen, dass erwachsene Teilnehmende das Internet unter anderem für Verbundenheit, eigene Entscheidungen und Selbstbestimmung nutzen. Die Übersicht bezieht in einzelnen Fällen auch Angaben von Begleitpersonen ein, wenn eine direkte Befragung nicht möglich war; daraus folgt kein Freibrief, die Person zu übergehen. `[Annahme, muss getestet werden]` Diese Gesprächsform und die genaue Rollenverteilung in verschiedenen Wohneinrichtungen und Alltagssituationen. Projektgrundlage ist die bestehende, freiwillige gemeinsame Hilfe in `begleitung-de.js` ab Zeile `20`.

## 3. Vollständig ausgearbeiteter Beispielweg: Datenschutz

### Ziel

**Ich prüfe, welche Daten oder Fotos eine App will und warum. Dann entscheide ich selbst, was ich freigebe.**

Das Ziel umfasst ein begründetes Ja und Nein. Es bedeutet nicht, möglichst wenige Daten unabhängig vom Zweck freizugeben. Es ist dasselbe Ziel für alle zwölf; Sprachstufe und Hilfe ändern die Handlung nicht.

### Einstieg und Voraussetzungen

Es ist kein Vorwissen nötig. Alle Themen bleiben offen, und niemand muss einen Selbstcheck beantworten. Als gemeinsame Beispielwelt dient eine erfundene Foto-App. Die App kann Fotos verschönern und fragt nach Fotozugriff, Standort und Kontakten. Die lernende Person entscheidet, ob sie allein startet, Vorlesen oder eine größere Schrift nutzt oder eine Begleitperson einbezieht. Ein Begleiter fragt, ob Hilfe erwünscht ist. Die Person darf „später“, „weiß ich noch nicht“ und „Hilfe jetzt“ wählen.

### Schritte und Zeit

Die Minuten sind grobe, ungeprüfte Vorschläge. Nach jedem Schritt kann die Person weitergehen, pausieren oder aufhören. Es gibt kein Zeitlimit.

| Schritt | Inhalt und kleine Handlung | Grobe Zeit* |
|---|---|---:|
| 1. Einstieg | Eine erfundene App fragt nach drei Zugriffen. Selbstcheck überspringen oder freiwillig beantworten. Ziel wählen oder den vorgeschlagenen App-Fall nehmen. | 2–4 Min. |
| 2. Persönliche Daten | Ein Alltagsbeispiel ansehen: Name, Foto, Standort oder Passwort. Wort und Bild zusammen ansehen; die Person zeigt oder sagt, was zur eigenen Entscheidung gehört. Nie ein echtes Passwort verwenden. | 4–7 Min. |
| 3. Empfänger und Zweck | Bei einer erfundenen Bitte eine Frage auf einmal: Wer erhält die Daten? Welche Daten werden verlangt? Wofür? Was davon ist für diesen Zweck erforderlich? Ein Beispiel hat einen klaren Zweck, das andere nicht. | 5–8 Min. |
| 4. Bewusst entscheiden | Eine kurze Form mit einer Angabe pro Seite bearbeiten. Zurück, Situation erneut ansehen, „Angaben ansehen“, „Ich prüfe erst“ und der Weg zum Nichtnutzen bleiben möglich. Erklärungen folgen der eigenen Wahl; ein Wechsel bewertet nichts nochmals. | 5–10 Min. |
| 5. Erlaubnisse der Foto-App | Die drei echten Falltypen der Simulation getrennt bearbeiten: Fotos für die Foto-Funktion; Kontakte für diese Funktion nicht erforderlich; Standort nur dann, wenn die Person den Fotoort anzeigen möchte. In einer realen App nichts verändern. | 5–8 Min. |
| 6. Fotos und andere Menschen | Vor dem Teilen überlegen: Wer kann das Foto sehen? Ist eine andere Person erkennbar? Die lernende Person entscheidet, das Bild zu teilen, die Sichtbarkeit zu wählen, zu fragen oder es nicht zu teilen. | 4–7 Min. |
| 7. Erinnern | Freiwillig eine Frage ohne Lösung beantworten: „Was prüfe ich, bevor ich etwas freigebe?“ Danach eine kurze Erklärung. Kein Abzug, auch wenn die Person Hilfe nimmt oder auslässt. | 2–4 Min. |
| 8. Neue Alltagssituation | Eine neue erfundene Anfrage, etwa eine Lieferadresse bei einem selbst gewählten Shop, nutzen. Empfänger und Zweck prüfen. Ein begründetes Ja und ein begründetes Nein gelten beide als mögliche Ergebnisse, wenn die Situation sie trägt. | 5–10 Min. |
| 9. Alltagsschritt | Auf Wunsch eine selbst ausgewählte App oder Foto-Einstellung gemeinsam ansehen. Die lernende Person steuert ihr Gerät und entscheidet über Änderungen. Der Schritt kann auch nur darin bestehen, sich den Prüfplan zu merken. | 3–10 Min. |

\*Alle Zeitangaben sind **Annahme, muss getestet werden**. Unterbrechen ist immer erlaubt. Die App darf durch die Zeitangabe keine laufende Aufgabe abbrechen.

### Mehrtägig üben

| Zeitpunkt (Vorschlag) | Kurzer Abruf oder Anwendung | Status der Empfehlung |
|---|---|---|
| Tag 1 | Einstieg, persönliche Daten, Zweckprüfung; ein Beispiel und eine Übung. | `[Annahme, muss getestet werden]` Reihenfolge und Belastung. |
| Tag 3 | Eine Frage zu Empfänger und Zweck abrufen; ein neuer kurzer Formularfall. | `[Nur bei Lernenden allgemein belegt]` Verteilter Abruf kann Lernen stützen; keine passende ID-Erwachsenen-Studie legt Tag 3 fest. |
| Tag 7 | Foto-Berechtigung und Sichtbarkeit erneut beurteilen; eine andere Entscheidung kann richtig sein, wenn der Zweck anders ist. | `[Nur bei Lernenden allgemein belegt]` Allgemeine Klassenraumstudie; genaue Strecke weiterhin `[Annahme, muss getestet werden]`. |
| Später, freiwillig | Neue Alltagssituation aus Familie, Arbeit oder Freizeit. | `[Annahme, muss getestet werden]` Dauer bis zur Alltagsanwendung. |

**Einwilligung:** Dauerhafte Antworten, Zeiten und Wiederholungsergebnisse werden nur mit der vorhandenen Lernstand-Einwilligung gespeichert. Ohne Einwilligung kann die Person beim nächsten Besuch einfach denselben Themenweg erneut wählen; es wird keine neue Lernverlaufs-Speicherung ergänzt. Vor einer späteren technischen Umsetzung muss geprüft werden, ob das bestehende Sieben-Tage-Angebot den Plan tragen kann, ohne einen neuen Speicherzweck einzuführen.

### Hilfestufen

1. **Kein Hinweis nötig:** Frage und Alltagssituation stehen da. Die Person kann antworten oder direkt Hilfe öffnen. `[Annahme, muss getestet werden]` Hinweise sind vorhanden und müssen verständlich sein.
2. **Kurzer Hinweis:** „Schau: Wer fragt? Wofür?“ Eine Person kann ihn auf Wunsch vorlesen. `[Annahme, muss getestet werden]`
3. **Vergleichendes Beispiel:** Ein passendes und ein unpassendes Beispiel gemeinsam ansehen. `[Belegt für kognitive Behinderung, begrenzt auf Unterricht mit Schülern]` Systematisches Aufteilen und angeleitete Beispiele wurden in Spooners schulischer Übersicht bei Schülerinnen und Schülern mit schweren Entwicklungsbehinderungen untersucht; die Wirkung dieses Formats bei Erwachsenen in der App ist `[Annahme, muss getestet werden]`.
4. **Weg gemeinsam vormachen:** Nur auf Wunsch anhand der erfundenen App-Fälle. Die Person darf jeden Schritt selbst übernehmen. `[Annahme, muss getestet werden]`
5. **Hilfe für den Alltag:** Begleitperson fragt, was nützlich wäre; sie berät und nimmt das Gerät nicht ungefragt. Hilfe ist sofort erreichbar und wird niemals an ein Scheitern geknüpft. `[Annahme, muss getestet werden]` für die konkrete App-Regel; mit dem bisherigen Begleitprinzip und der erwachsenen Nutzerforschung vereinbar.

Hilfe ausblenden nur, wenn die Person sie selbst leiser stellen oder ein Beispiel ohne Hinweis versuchen möchte. Später wieder einblendbar. Ein Fehler, schnelles Antworten oder ein gespeichertes Ergebnis lösen kein automatisches Ausblenden aus.

### Aufgaben und Rückmeldung

- Situationen sind kurz, realistisch und nicht immer eindeutig. Mindestens ein Beispiel zeigt, wann eine Angabe für den genannten Zweck nötig sein kann. „Daten schützen“ heißt nicht „immer Nein“.
- Die Person antwortet einzeln per App-Auswahl; ein späteres Konzept kann zusätzlich Zeigen oder Besprechen aufnehmen. Alle Antwortwege müssen dieselbe Erklärung bekommen. `[Annahme, muss getestet werden]`
- Vor der Wahl steht, ob eine oder mehrere Antworten möglich sind. Eine falsche Wahl erhält weder Strafpunkt noch erschreckenden Ton. `[Nur bei Lernenden allgemein belegt]` Die Empfehlung, Abruffragen ohne drückende Bewertung einzusetzen, folgt allgemeiner Lernforschung; für diese Zielgruppe und genau diese Form ist die konkrete Wirkung `[Annahme, muss getestet werden]`.
- Die Rückmeldung erklärt den Grund. Wenn mehrere Wege die Situation sicher lösen, benennt die App diese ausdrücklich als möglich. Ein günstiges Ergebnis wird nicht als allgemeine Alltagskompetenz ausgegeben. `[Annahme, muss getestet werden]` welche Rückmeldelänge geeignet ist.

### Alltag, Können und Begleitperson

Der unmittelbare Schritt ist eine bewusst ausgewählte Übung mit erfundenen Daten. Nur wenn die Person es möchte, sieht sie anschließend eine vertraute App-Einstellung an. Die Begleitperson stellt Fragen, bietet das Vorlesen oder ein Vormachen an und achtet darauf, dass die Person selbst bestimmt. Sie ändert keine Einstellung und teilt keine Daten ohne Zustimmung.

Am Abschluss kann die Person sagen, zeigen oder auswählen, welche Frage sie beim nächsten Mal prüfen möchte. **Das ist ein Hinweis auf den Lernerfolg im Kurs, kein Beweis selbstständigen Könnens im echten Alltag.** Ob sie das Gelernte später in anderen Situationen nutzt, zeigt erst ein freiwilliger, möglichst alltäglicher Wiederholungsschritt. `[Annahme, muss getestet werden]`

## 4. Gerüst für die elf übrigen Lernwege

Die Sequenz jeder Zeile ist: **Alltagsbeispiel → eine Kernlektion mit einem passenden Bild oder Beispiel → kleine Übung mit Erklärung → freiwillige Wiederholung → neue Situation → Alltagsschritt.** Alle Zeiten gelten als grobe Annahme und enthalten beliebig viele Pausen. Der Kernweg bleibt der festgelegte gemeinsame Lernweg. Die Zusatzfolge ergänzt andere Situationen; „Alle Lektionen nachlesen“ behält den vollständigen alten Bestand.

| Thema | Ziel in einem Satz | Beispiel-Reihenfolge und wiederholtes Üben | Anwendung und Begleitrolle |
|---|---|---|---|
| **WhatsApp** | Ich prüfe bei einer Nachricht, ob ich der Person vertraue und was sie von mir möchte, bevor ich reagiere. | Bekannte und unbekannte Absender → Link oder unerwartete Bitte → Code und Nachricht mit angeblich bekanntem Namen. Je Schritt eine Entscheidung und eine erklärte Übung, je etwa 5–10 Minuten. An Tag 3 und 7 neue Nachricht abrufen (`[Annahme, muss getestet werden]`; allgemeines verteiltes Lernen nur `[nur bei Lernenden allgemein belegt]`). | Selbst gewähltes Beispiel: nachfragen, nicht antworten oder über einen bereits bekannten Weg nachprüfen. Begleitperson öffnet keine echten Chats, fragt nach gewünschter Hilfe und verwendet erfundene Codes. |
| **Facebook** | Ich entscheide, wer meinen Beitrag sehen kann, und wie ich auf Kontaktanfragen oder verletzende Kommentare reagiere. | Profil und Publikum → einzelne Beiträge und Bilder → Anfrage und Kommentar. Ein Beispiel für freundliche oder alltägliche Nutzung bleibt neben Sicherheitsfällen. Je Schritt etwa 5–10 Minuten. | Mit einem fiktiven Beitrag üben, wer ihn sieht. Bei Wunsch die Sichtbarkeit am eigenen Konto ansehen, ohne etwas zu veröffentlichen. Die Person selbst entscheidet. |
| **Instagram** | Ich prüfe ein Foto, bevor ich es teile, und entscheide, wer es sehen darf. | Eigenes Bild und Hintergrund → Foto von anderen Personen → Story, Standort oder bearbeitetes Bild. Pro Beispiel nur eine Bildentscheidung, etwa 5–10 Minuten. | Mit selbst gewähltem oder erfundenem Bild testen. Begleitperson erinnert an Zustimmung anderer und greift nicht ungefragt auf Profil oder Fotos zu. |
| **YouTube** | Ich entscheide selbst, welches Video ich ansehe und wann ich eine Pause mache. | Videos und Werbekennzeichnung → Folgevideo und eigene Pause → Kommentar oder Video, das Angst macht. Normale Unterhaltung kommt ebenso vor wie problematische Inhalte. Je Themaabschnitt etwa 5–10 Minuten. | Ein ungefährliches, frei gewähltes Video als Transferbeispiel; keine belastenden Clips vorspielen. Begleitperson bietet Stopp oder Pause an, ohne das Video für die Person auszuwählen. |
| **Snapchat** | Ich entscheide, welche Bilder und Ortsangaben ich teile und wer sie sehen kann. | Foto und mögliches Speichern → Kontakte und Druck → Standort auf der Karte. Zu jedem Schritt eine Handlungswahl mit ruhiger Erklärung, etwa 5–10 Minuten. | Mit einem erfundenen Bild oder einer Beispielsichtbarkeit üben. Keine echten Bilder öffnen oder sichern. Die Person wählt, ob Begleitung zuhört oder mit ihr Einstellungen ansieht. |
| **TikTok** | Ich wähle Videos und Nachrichten aus und mache eine Pause, wann ich es möchte. | Empfohlenes Video und harmloser Trend → private Nachricht → Gefühle nach Videos und Pause. Unterschiedliche Situationen statt allgemeiner Verbote; etwa 5–10 Minuten pro Abschnitt. | Ein selbst gewähltes Video als Transfer; Dauer der Nutzung wird nicht heimlich gemessen. Begleitperson fragt, ob die Person über Empfehlungen, Nachrichten oder Pause sprechen möchte. |
| **Hilfe bei Problemen** | Ich entscheide, ob ich etwas selbst probiere, eine Person um Hilfe bitte oder sofort Hilfe vor Ort brauche. | Technisches Problem → eigener Versuch oder App-Hilfe → Druck oder Angst → passende Hilfe → akute Gefahr. Diese Fälle werden klar getrennt. Notfallhilfe ist immer unmittelbar und nicht hinter Lernschritten versteckt. Je Abschnitt etwa 5–10 Minuten; Unterbrechen sofort möglich. | Technischen Übungsfall und Druckfall nicht verwechseln. Den gemeinsamen Hilfe-Check nutzen. Begleitperson fragt, welche Hilfe gewünscht ist. Bei akuter Gefahr den Projekt-Hinweis 110/112 unmittelbar zeigen; nie eine Wartezeit vor dieser Hilfe. |
| **KI und Chatbots** | Ich nutze KI als Programm, prüfe wichtige Antworten nach und gebe ihr keine privaten Geheimnisse. | Was ist KI → eine Antwort prüfen → persönliche Daten → Gesundheit oder Geld. Einfache und folgenreiche Situationen getrennt behandeln; etwa 5–10 Minuten. | Erfundenen unverfänglichen KI-Text unabhängig nachschlagen. Bei Gesundheit und Geld an eine fachkundige Person verweisen, ohne Angst zu machen. Begleitperson hilft auf Wunsch beim Vergleich einer zweiten Quelle. |
| **Fake News und KI-Fakes** | Ich prüfe eine überraschende Nachricht oder ein Bild, bevor ich es glaube oder teile. | Aussage und Quelle → Datum und unabhängige Bestätigung → Bild oder Stimme im Kontext. Es gibt auch zutreffende Nachrichten und Fälle, die offen bleiben. Je Beispiel etwa 5–10 Minuten. | Eine frei gewählte, unbedenkliche Nachricht mit einer zweiten Quelle prüfen. Begleitperson lobt das Prüfen, verlangt keine bestimmte Meinung und teilt nichts ohne Zustimmung. |
| **Betrug** | Ich prüfe eine unerwartete Bitte oder ein Angebot und entscheide ohne Druck, was ich als Nächstes tue. | Unterschied zwischen gewöhnlicher Anfrage und Druck → unabhängiger Rückruf oder zweite Quelle → Geld- oder Kaufbitte. Keine Angstbilder; Hilfe bleibt freiwillig verfügbar und im Notfall sofort. Je Schritt etwa 5–10 Minuten. | Fiktive SMS oder ein fiktives Angebot verwenden. Begleitperson erklärt nichts als Schuld der lernenden Person und fragt vor jedem nächsten Schritt. Keine echten Bank- oder Kontodaten. |
| **Online-Einkaufen** | Ich prüfe Shop und Gesamtkosten, bevor ich entscheide, ob ich bestellen möchte. | Bekannter Shop und Produkt → Gesamtkosten und Versand → Zeitdruck, Abo oder In-App-Kauf. Ein sachlicher Fall, in dem Einkaufen passend sein kann, bleibt erhalten; etwa 5–10 Minuten je Beispiel. | Bestellung ohne Zahlung simulieren. Im echten Alltag nur mit Wunsch und Zustimmung des Kontoinhabers ansehen. Begleitperson entscheidet nicht über Budget oder Kauf an Stelle der Person. |

Die Themenbeispiele entstammen den vorhandenen Inhalten und Alltagszielen in `topics.js`, `content-de.js` und `begleitung-de.js`. Diese Gerüste legen keine neuen Pflichtlektionen, Kategorien oder Voraussetzungen fest. Die persönliche Passung der Beispiele ist `[Annahme, muss getestet werden]`.

## 5. Umsetzung und Erprobung

Dieser Entwurf ändert keine Inhalte im Programm. Eine spätere Umsetzung braucht eine eigene Freigabe und wird in kleinen fachlichen Paketen geplant.

| Reihenfolge | Datei oder Bereich | Vorgesehene Arbeit | Aufwand und Risiko |
|---|---|---|---|
| 1 | `LERNWEGE.md` (diese Arbeitsdatei) | Mit Nutzenden anpassen und danach als fachliche Grundlage bestätigen. | Klein. Risiko: Ein Entwurf wird mit einem geprüften Lehrplan verwechselt. Deshalb Status und offene Belege deutlich erhalten. |
| 2 | `topics.js` | Bestehende Lernziele, Kern- und Zusatzlektionen, Beispiele, Aufgaben und Anwendungsfälle je Thema gezielt abgleichen; nur freigegebene Lücken ändern. | Groß für zwölf Themen. Risiko: Inhalte, sichere Alternativen oder geübte Reihenfolge unabsichtlich entfernen. |
| 3 | `content-de.js` und andere Themen-Aufgabendaten | Inhaltliche Änderungen in Leichter, Einfacher und Alltagssprache gleichwertig ausarbeiten und Schlüssel beibehalten. | Groß. Risiko: Sprachfassung, Lerninhalt oder Feedback verliert denselben Handlungssinn. |
| 4 | `app.js` | Nur nach fachlicher Entscheidung Zeitplan, Selbstwahl, optionale Hilfe und Rückkehr an derselben Stelle abbilden. Vorhandenen Zustimmungs-Speicher respektieren. | Groß bei mehrtägiger Wiederkehr. Risiko: Einwilligung, geteilter Gerätezustand und Übergang in eine Wiederholung falsch behandeln. Kein Tracking ergänzen. |
| 5 | `begleitung-de.js` | Gesprächs- und Alltagstipps mit dem freigegebenen Ziel pro Thema zusammenführen. | Mittel. Risiko: Begleitung übernimmt die Entscheidung oder stört den freiwilligen Solo-Weg. |
| 6 | `ketten-de.js` und `app.js` | Nur falls konkrete Mehrschritt-Handlungen den bestehenden Ablaufplan benötigen; Thema, Handlung und bestehende Datenschutzregeln zuerst prüfen. | Mittel bis groß. Risiko: abstrakte Kette statt echter Alltagshandlung; kein zweites paralleles Lernmodell schaffen. |

Eine spätere Programmfreigabe braucht zusätzlich neue Sprachfassungen, den Schutz gespeicherter Zustände bei Umstellung und Einwilligung, lokale Vorleseprüfung, Offline-Aktualisierung und verständliche Prüfung durch Lernende. Inhaltsschlüssel und bestehende Lernwege bleiben erhalten. Kein Prüfgruppen-Material kommt in die App.

### Beobachtungsaufgaben für eine freiwillige Prüfung

Menschen mit und ohne kognitive Behinderung bearbeiten dieselben Aufgaben und sehen dieselben Ziele. Die Stichprobe wird nicht als Beweis für alle Erwachsenen oder Behinderungsgruppen ausgegeben. Jede Person wählt selbst Sprachfassung, Hilfen und Begleitung. Bei jedem Schritt gilt: stoppen und abbrechen sind möglich.

1. **Frei starten:** Eine selbst gewählte Alltagssituation und ein Thema suchen. Beobachten, ob die Person ohne Diagnosefrage und ohne ungefragten Hinweis zur ersten Aufgabe kommt.
2. **Eigenen Zugang wählen:** Zwischen zwei Sprachfassungen und einer freiwilligen Hilfe wählen; Vorlesen einschalten, bei Bedarf ausschalten. Beobachten, ob die Person versteht, dass sie jederzeit wechseln kann.
3. **Den roten Faden finden:** In einer Datenschutzsituation erkennen, wen man nach Daten fragen kann, wofür sie benötigt werden und was die eigene Auswahl ist. Wörter, Bilder und Beispiel aus dem eigenen Verständnis heraus erklären lassen, ohne zu raten.
4. **Hilfe wählen oder ablehnen:** Erst selbst antworten oder sofort den Hilfe-Knopf verwenden; bei jeder Station „Mehr Hilfe“ oder „weniger Hilfe“ wählen. Beobachten, ob das Angebot freiwillig und ohne Scham oder Zeitdruck erreichbar bleibt.
5. **Eigene Wahl erklären:** In einer zweiten Situation eine andere zulässige Entscheidung treffen und die Erklärung dazu finden. Prüfen, ob ein begründetes Ja genauso respektvoll behandelt wird wie ein Nein.
6. **Pausieren und wiederkommen:** Eine Aufgabe unterbrechen, die Sprache wechseln und zurückkehren. In getrennten, vorab erklärten Durchläufen mit und ohne vorhandene Lernstand-Einwilligung prüfen, welche Antwort nach einem Neustart erhalten bleibt. Keine echten persönlichen Daten verwenden.
7. **Den Alltag übertragen:** Ein neues, selbst gewähltes Beispiel durchspielen und sagen oder zeigen, welche Handlung die Person jetzt wählen möchte. Die Begleitung berät nur auf Wunsch und fasst die Entscheidung nicht selbst.
8. **Eine Woche später erinnern:** Freiwillig ein kurzes Beispiel wiederholen und eine neue Alltagssituation versuchen. Festhalten, was ohne Hinweis, mit gewählter Hilfe oder gar nicht gelingt – kein Test, keine Note.

### Woran wir Hindernisse erkennen

- Eine Person findet Start, Zurück, Pause oder Hilfe nicht oder denkt, Hilfe würde eine falsche Antwort bedeuten.
- Eine Aufgabe wird ausgelassen, abgebrochen, oft neu begonnen oder trotz sichtbarer Auswahl nicht beendet. Das ist ein Hinweis auf ein Hindernis, kein fehlendes Können.
- Jemand wechselt die Sprachfassung, bittet um Vorlesen, zeigt lange Suchbewegungen oder fragt wiederholt, was die Frage verlangt. Prüfen, ob Satz, Bild und Auswahl gemeinsam klar sind.
- Die Begleitperson antwortet, liest ungefragt vor, bedient das Gerät oder spricht die Entscheidung an Stelle der lernenden Person.
- Eine Person gibt ein pauschales Ja oder Nein, weil der Übungsaufbau die Antwort verrät, oder kann das geübte Beispiel in einer neuen Alltagssituation nicht wiedererkennen.
- Nach einer Woche ist die Frage weder ohne Hinweis noch mit frei gewählter Hilfe nutzbar; oder der Alltagsschritt fühlt sich nicht passend an. Ein einzelner Versuch sagt nichts über Diagnose oder generelle Fähigkeit.

Beobachtet wird nur mit vorherigem Einverständnis, möglichst ohne dauerhafte Aufzeichnung und nur nach den geltenden Datenschutzregeln. Notiert werden Verhalten und wörtliche Rückmeldung, keine Diagnose. Ergebnisse dienen dazu, ein Hindernis zu reparieren und erneut zu prüfen – nicht dazu, Gruppen unterschiedlich zu sortieren.

## 6. Forschung und Grenzen

Diese Quellen wurden tatsächlich geöffnet und gelesen. Ihre Reichweite ist begrenzt; das Wort „wissenschaftlich“ macht eine Empfehlung noch nicht zu einem erwiesenen Nutzen für Erwachsene mit kognitiver Behinderung.

- **UDL und mehrere Zugänge:** King-Sears, M. E. et al. (2023). „Achievement of learners receiving UDL instruction: A meta-analysis.“ *Teaching and Teacher Education*. [DOI und Zusammenfassung beim Verlag](https://doi.org/10.1016/j.tate.2022.103956). UDL-Ergebnisse für Lerngruppen allgemein sind nicht automatisch ein Wirkungsbeleg für erwachsene Menschen mit kognitiven Behinderungen. Ergänzend die [UDL-Leitlinien 3.0 von CAST](https://udlguidelines.cast.org/more/about-guidelines-3-0/) als Gestaltungsrahmen, nicht als Wirksamkeitsnachweis.
- **Lernmaterial und kognitive Entlastung:** Noetel, M. et al. (2022). „Multimedia Design for Learning: An Overview of Reviews With Meta-Meta-Analysis.“ *Review of Educational Research*. [Verlagsseite mit Zusammenfassung und DOI](https://journals.sagepub.com/doi/10.3102/00346543211052329). 29 Übersichten, 1.189 Studien und 78.177 Teilnehmende; keine gesondert ausgewiesene Wirkung für diese erwachsene Zielgruppe.
- **Handlungen in kleine Schritte:** Spooner, F. et al. (2011). „Evaluating Evidence-Based Practice in Teaching Science Content to Students with Severe Developmental Disabilities.“ *Research and Practice for Persons with Severe Disabilities*. [Verlagsseite und DOI](https://journals.sagepub.com/doi/10.2511/rpsd.36.1-2.62). 17 Unterrichtsversuche, davon 14 methodisch gut oder angemessen; Inhalt: naturwissenschaftlicher Unterricht bei Schülerinnen und Schülern mit schweren Entwicklungsbehinderungen. Keine erwachsene Web-Lernplattform.
- **Hilfen nach Können:** Tetzlaff, L., Simonsmeier, B., Peters, T. und Brod, G. (2025). „A cornerstone of adaptivity: A meta-analysis of the expertise reversal effect.“ *Learning and Instruction, 98*, 102142. [Verlagsseite und Volltext](https://www.sciencedirect.com/science/article/pii/S0959475225000660). 60 Experimente, 5.924 Personen, breite Lernbereiche; Effekte hängen auch von Messart und Lernbereich ab. Kein Nachweis für automatische Diagnose oder automatische Hilfereduktion.
- **Verständliche Webtexte:** Vollenwyder, B. et al. (2018). „How to Use Plain and Easy-to-Read Language for a Positive User Experience on Websites.“ [Volltext bei Springer](https://link.springer.com/chapter/10.1007/978-3-319-94277-3_80). Online-Versuch mit 308 Erwachsenen ohne Behinderung; vier Erwachsene mit kognitiven Behinderungen prüften die Easy-to-Read-Fassung vorab. Die kleine Vorprüfung ist kein Zielgruppentest unserer Lerntexte. Ergänzend das [LeiSA-Projekt der Universität Leipzig](https://research.uni-leipzig.de/leisa/), das Menschen mit Lernschwierigkeiten an Forschung zu Leichter Sprache und beruflicher Teilhabe beteiligte; kein Plattform-Wirkungsnachweis.
- **Verteiltes Üben:** Mawson, R. D. und Kang, S. H. K. (2025). „The Distributed Practice Effect on Classroom Learning: A Meta-Analytic Review of Applied Research.“ *Behavioral Sciences, 15*(6), 771. [Open-Access-Artikel](https://doi.org/10.3390/bs15060771). 22 Berichte, 31 Effektgrößen und über 3.000 Lernende. Hohe Unterschiede zwischen den Studien; spezifische Gruppen, darunter intellektuelle Behinderungen, waren nicht die untersuchte Evidenzbasis. Kein Beleg für Tag 3 oder Tag 7.
- **Eigenes Ziel und Selbstbestimmung:** Shogren, K. A. et al. (2012). „Effect of Intervention with the Self-Determined Learning Model of Instruction on Access and Goal Attainment.“ *Remedial and Special Education, 33*(5), 320–330. [Volltext bei PubMed Central](https://pmc.ncbi.nlm.nih.gov/articles/PMC4000082/). Gruppen-randomisierte Studie zu selbst gewählten Zielen bei Schülerinnen und Schülern mit intellektueller Behinderung und Lernbehinderungen. Kein Erwachsenen- oder Digitalunterricht.
- **Erwachsene und Internetziele:** van Alem, J. L. L., Frielink, N. und Embregts, P. J. C. M. (2025). „Social Internet Use by People With Intellectual Disabilities: A Systematic Review and Thematic Synthesis of Qualitative Studies.“ *Journal of Intellectual Disability Research, 69*(4), 243–264. [Open-Access-Volltext und DOI](https://doi.org/10.1111/jir.13211). 21 qualitative Artikel, davon 16 hauptsächlich mit Erwachsenen; nur sieben berichten den Behinderungsgrad genauer. Erforscht Gründe und Erfahrungen freiwilliger Internetnutzung, keine Lernintervention.
- **Digitale Schulungen für Erwachsene mit Behinderungen:** González, D. und Del Prete, A. (2024). „Online training programs for adults with disabilities: a systematic review.“ *Humanities and Social Sciences Communications*. [Open-Access-Übersicht](https://www.nature.com/articles/s41599-024-03342-5). Die Übersicht findet wenige und verschiedenartige Studien zu Online-Training bei Erwachsenen mit Behinderungen. Sie ist nicht speziell ein Nachweis für Erwachsene mit kognitiver Behinderung auf einer Internet-Sicherheitsplattform.
- **Kognitive Zugänglichkeit im Web:** W3C, Seeman-Horwitz et al. (2021). „Making Content Usable for People with Cognitive and Learning Disabilities.“ [W3C Working Group Note](https://www.w3.org/TR/coga-usable/). Eine praktische ergänzende Anleitung für Inhalt und Navigation, kein klinischer Versuch und kein Lernwirksamkeitsnachweis.
- **Wiener Studie 2024:** Die Kurzangabe im Auftrag benennt keinen eindeutigen Titel. Eine unter diesem Suchwort gefundene Wiener Teilhabebefragung betrifft nicht direkt Lernrückmeldung. Sie ist daher nicht als Beleg zitiert. Die konkrete Quelle kann ergänzt werden, sobald Titel oder Link vorliegen.

## 7. Was dieser Plan nicht behauptet

- Die Plattform ist dadurch weder vollständig an jeder Person erprobt noch als lernwirksam oder vollständig WCAG-konform nachgewiesen.
- Verständlichkeit von Texten, Piktogrammen, Zielen, Antwortmöglichkeiten und den vorgeschlagenen Lernschritten bleibt **mit Nutzenden testen**.
- Die Studien zu Selbstbestimmung, Aufgabenzerlegung, Sprache und verteiltem Üben beantworten verschiedene Fragen. Keine einzelne Methode ist für alle Menschen mit kognitiver Behinderung belegt.
- Die Übertragung von Schulstudien und allgemeiner Lernforschung auf erwachsene Menschen mit und ohne kognitive Behinderung ist eine ausdrücklich markierte Annahme.
- Jeder Mensch kann einen anderen Zeit-, Sprach- und Unterstützungsbedarf haben. Eine Diagnose erlaubt keine Vorhersage darüber.
