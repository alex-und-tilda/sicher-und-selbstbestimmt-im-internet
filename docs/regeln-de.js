/* =============================================================
   DEINE KARTE – die 12 Regeln unter allen Themen
   -------------------------------------------------------------
   Stand 04.09.2026.

   WOZU
   Die Plattform hat 152 Merksätze in 12 Themen. Inhaltlich sind
   das immer wieder dieselben Regeln in anderen Worten: "Stress ist
   ein Warnzeichen" steht in 10 Themen, "Hilfe holen" in 10.
   Diese Datei macht die gemeinsame Ebene sichtbar – als etwas,
   das man sammelt.

   WIE MAN EINE REGEL SAMMELT
   - GEFUNDEN: Die Regel wird zum ersten Mal richtig angewendet.
     Nicht durch Lesen. Durch Tun (Übung, Quiz, Übungs-Handy).
   - SITZT:    Dieselbe Regel wird in einem ZWEITEN Thema
     wiedergefunden. Das ist der Transfer – der eigentliche Sinn.

   Am Ende druckt man EINE Karte mit den eigenen Regeln.
   Ohne Lernstand-Einwilligung lebt die Sammlung nur in dieser
   Sitzung (KDG, §14 CLAUDE.md). Deshalb ist das Drucken kein
   Extra, sondern der Kern: Gedrucktes bleibt.

   ZUORDNUNG (seit 25.09.2026 zweistufig)
   1. Feste Tabelle REGEL_SAETZE unten: jeder vorhandene Merksatz steht
      dort bei genau einer Regel – oder bei `keine`, wenn er Wissen ist
      und kein Verhalten (z. B. „14 Tage zurückgeben“). Grund: Die reine
      Stichwort-Suche lag bei rund jedem fünften Satz daneben („eile“
      traf „teilen“, „antworte“ traf „Antworten“, „Bild“ traf
      „Bilder können gefälscht sein“). Eine falsche Regel wäre später
      auch ein falscher Hinweis „Diese Regel kennst du schon aus …“.
   2. Nur was NICHT in der Tabelle steht (neue Sätze, Quizfragen), läuft
      über `muster`. Dort zählt die Reihenfolge: das erste Muster gewinnt.
   Gutgeschrieben wird immer der Satz in Leichter Sprache (Basistext),
   egal in welcher Sprachstufe gelernt wird – die Tabelle braucht also
   keine Fassungen je Stufe.
   Neuer Merksatz? In die Tabelle eintragen. pruefeRegelZuordnung()
   meldet Sätze ohne Tabellen-Eintrag.
   Geprüft am 04.09.2026: alle Sätze zugeordnet, und jede Regel ist
   in mindestens 2 Themen DURCH ÜBEN erreichbar (sonst könnte sie
   nie "sitzen" – ein Platz, der nie umklappt, wäre nur Frust).
   Deshalb gibt es keine eigene KI-Regel: "KI kann sich irren" war
   nur im Thema KI erreichbar. Die Botschaft steckt jetzt in
   "Nicht alles ist wahr. Auch KI irrt sich."
   Neue Merksätze greifen automatisch, wenn sie zu einem Muster
   passen. Prüfen mit: pruefeRegelZuordnung() in der Konsole.
   ============================================================= */

const REGELN = [
  { id: "codes",     pikto: "pikto-key",
    kurz: "Meine Codes sage ich niemandem.",
    was:  "Passwort, PIN, TAN und Codes bleiben bei mir. Auch am Telefon. Auch bei der Bank.",
    muster: /code|pin\b|passwort|tan\b|geheim|doppelt sicher|bank fragt nie|anmeldung/i },

  { id: "links",     pikto: "pikto-link",
    kurz: "Ich tippe nicht auf fremde Links.",
    was:  "Links in fremden Nachrichten tippe ich nicht an. QR-Bilder scanne ich nicht einfach.",
    muster: /link|klick|antipp|scann|qr/i },

  { id: "selbst",    pikto: "pikto-phone",
    kurz: "Ich gehe selbst hin.",
    was:  "Ich öffne die App selbst. Ich rufe die Nummer an, die ich schon habe. Nicht die aus der Nachricht.",
    muster: /selbst öffn|eigene nummer|nummer.*(schon|karte)|app selbst|alte nummer|selbst zurück|lege ich auf|lege auf|rufe[^.]*selbst|bekannte nummer|neue nummer/i },

  { id: "geld",      pikto: "pikto-money",
    kurz: "Bei Geld werde ich langsam.",
    was:  "Für einen Gewinn zahle ich nie vorher. Sehr billig ist ein Warnzeichen. Abbrechen darf ich immer.",
    muster: /geld|zahl|gewinn|gebühr|bezahl|kauf|euro|vorkasse|rechnung|bestellt|kostenlos|impressum|zurückgeben|abo/i },

  { id: "druck",     pikto: "pikto-clock",
    kurz: "Stress heißt: Stopp.",
    was:  "Sofort, schnell, nur heute: Das soll mein Nachdenken verhindern. Dann mache ich langsam.",
    muster: /stress|druck|draeng|dräng|\beile\b|sofort|hetzen|zeit-druck|zeitdruck|langsam|nachdenk|denke.*nach|komisch/i },

  { id: "bilder",    pikto: "pikto-photo",
    kurz: "Ich denke nach, bevor ich sende.",
    was:  "Ein Bild ist schnell verschickt und schwer zurückzuholen. Das gilt auch für das, was ich schreibe.",
    muster: /foto|bild(er)?\b|stor(y|ies)|senden|posten|poste\b|respektvoll/i },

  { id: "wersieht",  pikto: "pikto-lock",
    kurz: "Ich bestimme, wer was von mir sieht.",
    was:  "Meine Daten, mein Profil, meine Beiträge – und auch, wo ich gerade bin.",
    muster: /privat|wer sieht|wer.*sehen|öffentlich|profil|einstellung|gruppe|daten (gebe|weiter)|adresse|telefon-nummer|zeige nicht alles|standort/i },

  { id: "echt",      pikto: "pikto-stranger",
    kurz: "Ich prüfe, wer da schreibt.",
    was:  "Ist das wirklich die Person? Kenne ich sie? Bei einer neuen Nummer frage ich anders nach.",
    muster: /wirklich|echte? person|person.*echt|kenne ich|fremde|unbekannt|anfrage|kontakt|wer mir schreibt|antworte\b/i },

  { id: "wahr",      pikto: "pikto-search",
    kurz: "Nicht alles ist wahr. Auch KI irrt sich.",
    was:  "Bilder, Videos und Stimmen können gemacht sein. Ein Chatbot klingt sicher und liegt trotzdem falsch. Bei Aufregung prüfe ich erst.",
    muster: /wahr|gefälscht|fake|stimmt|quelle|prüfe|nicht alles|aufregung|aufregend|glauben|video|stimme|anzeige|werbung|\bki\b|chatbot|künstlich/i },

  { id: "mitmachen", pikto: "pikto-no",
    kurz: "Ich muss nicht mitmachen.",
    was:  "Gefährliche Trends mache ich nicht nach. Ich muss nicht auf alles antworten. Ich vergleiche mich nicht.",
    muster: /nachmach|nicht nach|trend|gefährlich|mutprobe|reagieren|vergleich/i },

  { id: "aufhoeren", pikto: "pikto-pause",
    kurz: "Ich darf aufhören. Immer.",
    was:  "Pause machen, weglegen, abbrechen. Auch mitten im Kauf. Auch mitten im Gespräch.",
    muster: /pause|aufhör|weglegen|stopp|abbrech|zeit für|genug|darf.*stopp/i },

  { id: "hilfe",     pikto: "pikto-help",
    kurz: "Ich hole Hilfe. Das ist stark.",
    was:  "Ich zeige die Nachricht einer Person, der ich vertraue. Vorher lösche ich nichts. Ich bin nicht allein.",
    muster: /hilfe|hilft|unterstützung|vertrau|jemand|melde|blockier|allein|erzähl|zeige die nachricht|gefühle|sprechen|plan|helfen/i }
];

/* Feste Zuordnung Merksatz -> Regel (Stand 25.09.2026, 244 Sätze; gleichartige
   Sätze über Themen hinweg bei derselben Regel – Gesamtprüfung Z3).
   Hinter jedem Satz steht, in welchem Thema er vorkommt. `keine` heißt:
   bewusst ohne Regel, weil der Satz Wissen ist und kein Verhalten. */
const REGEL_SAETZE = {
  codes: [
    "Mein Passwort bleibt geheim.", // datenschutz
    "Dein Passwort bleibt geheim.", // datenschutz
    "Ich gebe keinen WhatsApp-Code weiter.", // whatsapp
    "Mein WhatsApp-Code bleibt geheim.", // whatsapp
    "Deinen WhatsApp-Code niemals weitergeben.", // whatsapp
    "Meinen Code gebe ich nie weiter.", // whatsapp
    "Ich gebe nie Codes oder Bank-Daten weiter.", // betrug
    "Meine Bank fragt nie per E-Mail nach meinen Daten.", // betrug
    "Ich gebe nie einen Code weiter.", // betrug
    "PIN und TAN bleiben geheim.", // einkaufen
    "Ich gebe keinen Code weiter.", // whatsapp
    "Meinen Code sage ich niemandem. Auch nicht am Telefon.", // betrug
    "Meine Codes sage ich niemandem. Auch nicht am Telefon." // betrug
  ],
  links: [
    "Ich öffne fremde Links nicht sofort.", // datenschutz
    "Ich öffne unbekannte Links nicht sofort.", // whatsapp
    "Fremde Links nicht antippen.", // whatsapp
    "Fremde Links tippe ich nicht an.", // whatsapp
    "Komische Nachrichten zeigen, nicht antippen.", // facebook
    "Werbung nicht antippen.", // youtube
    "Ich tippe nicht auf fremde Links.", // betrug
    "Erst fragen. Dann scannen.", // betrug
    "Ich tippe nicht auf Links in Nachrichten. Ich öffne die App selbst.", // betrug
    "Angst und ein Link zusammen: ich mache nichts." // betrug
  ],
  selbst: [
    "Bei Geld-Bitten rufe ich selbst an.", // whatsapp
    "Bei Geld-Anrufen rufe ich selbst zurück.", // fakes
    "Bei Geld-Anrufen lege ich auf und rufe selbst zurück.", // fakes
    "Bei Geld-Forderungen rufe ich selbst zurück.", // betrug
    "Bei Geld-Nachrichten rufe ich die bekannte Nummer an.", // betrug
    "Bei Angst-Anrufen lege ich auf. Ich rufe selbst zurück.", // betrug
    "Ich lege auf. Ich rufe selbst an.", // betrug
    "Ich rufe die alte Nummer an.", // whatsapp
    "Ich rufe nur Nummern an, die ich schon habe.", // betrug
    "Ich muss den Trick nicht erkennen. Ich öffne die App selbst.", // betrug
    "Neue Nummer? Ich rufe zuerst die alte an." // betrug
  ],
  geld: [
    "Ich schicke kein Geld an fremde Nummern.", // whatsapp
    "Ich kaufe nichts sofort aus einem Video.", // youtube
    "Ich kaufe nichts wegen Werbung.", // youtube
    "Echte Gewinne kosten kein Geld.", // betrug
    "Die echte Polizei fordert nie Geld.", // betrug
    "Paket-SMS mit Geld-Forderung sind Betrug.", // betrug
    "Ich schicke kein Geld an fremde Menschen aus dem Internet.", // betrug
    "Kein Geld an fremde Menschen aus dem Internet.", // betrug
    "Kostenlos kann teuer werden. Ich lese genau.", // betrug
    "Ich zahle nie sofort. Ich frage erst.", // betrug
    "Kein Geld senden. Vertraute Person fragen.", // betrug
    "Ich kaufe bei Shops, die ich kenne.", // einkaufen
    "Sehr billig und nur Vorkasse: Warnzeichen.", // einkaufen
    "Rechnung ist sicherer als Vorkasse.", // einkaufen
    "Ich kaufe bei Shops, die ich kenne oder geprüft habe.", // einkaufen
    "Ich kaufe bei Shops, die ich geprüft habe.", // einkaufen
    "Sehr billig und nur Vorkasse: Da kaufe ich nicht.", // einkaufen
    "Erst prüfen. Dann kaufen.", // einkaufen
    "Auch kleine Käufe kosten echtes Geld.", // einkaufen
    "Nur bei sicheren Shops einkaufen.", // einkaufen
    "Ich kaufe bei sicheren Shops.", // einkaufen
    "PayPal oder Rechnung ist sicherer.", // einkaufen
    "Bank-Daten gebe ich nicht für ein Gewinnspiel.", // datenschutz
    "Ich frage mich: Habe ich das wirklich bestellt?", // betrug, einkaufen
    "Sehr billig und kein Impressum: Warnzeichen." // einkaufen
  ],
  druck: [
    "Ich mache langsam bei komischen Nachrichten.", // datenschutz
    "Eine Nachricht macht dir Stress? Dann mache ich langsam.", // datenschutz
    "Etwas ist komisch? Dann habe ich einen Plan.", // datenschutz
    "Ich mache Pause bei Stress.", // whatsapp
    "Etwas stresst mich? Dann mache ich Pause.", // whatsapp
    "Ich mache Stopp. Dann prüfe ich.", // whatsapp
    "Ich sage Nein bei Stress.", // snapchat
    "Ich schicke keine privaten Bilder unter Stress.", // snapchat
    "Stress ist ein Warnzeichen.", // snapchat, hilfe
    "Kein Bild unter Stress. Ich sage Nein.", // snapchat
    "Private Daten sende ich nie unter Stress.", // tiktok
    "Ich antworte nicht sofort.", // hilfe
    "Stopp. Ich reagiere nicht sofort.", // hilfe
    "Stress und Drohung sind Warnzeichen.", // betrug
    "Ich lasse mich nicht drängen.", // betrug
    "Stress und Gewinn: Stopp machen.", // betrug
    "Ich lasse mich nicht hetzen.", // einkaufen
    "Ich lasse mich beim Einkaufen nicht hetzen.", // einkaufen
    "Ich prüfe in Ruhe. Ich lasse mich nicht hetzen.", // einkaufen
    "Stress und die Frage nach Bank-Daten: immer ein Trick.", // betrug
    "Stress und Geld sind ein Warnzeichen.", // whatsapp
    "Ich mache Stopp.", // hilfe
    "Ich mache Stopp. Ich zeige es jemandem." // instagram
  ],
  bilder: [
    "Ich prüfe Fotos vor dem Senden.", // datenschutz, whatsapp
    "Ich poste nicht alles öffentlich.", // facebook
    "Ich schreibe respektvoll.", // facebook
    "Ich frage andere, bevor ich ihr Foto poste.", // facebook
    "Ich prüfe Fotos vor dem Posten.", // instagram
    "Ich schicke fremden Personen keine privaten Fotos.", // instagram
    "Ich prüfe, was auf dem Foto zu sehen ist.", // instagram
    "Ich frage andere, bevor ich ihr Bild poste.", // instagram
    "Auch Stories prüfe ich vor dem Posten.", // instagram
    "Fotos von anderen: erst fragen.", // instagram
    "Bilder können gespeichert werden.", // snapchat
    "Ich sende nur Bilder, die sicher sind.", // snapchat
    "Ich denke vor dem Senden nach.", // snapchat
    "Bilder verschwinden nicht wirklich.", // snapchat
    "Ich prüfe Videos vor dem Posten." // tiktok
  ],
  wersieht: [
    "Private Daten gehören zu mir.", // datenschutz
    "Ich gebe private Daten nicht einfach ein.", // datenschutz
    "Besonders wichtige Daten gebe ich nicht einfach weiter.", // datenschutz
    "Besonders wichtige Daten gebe ich nicht weiter.", // datenschutz
    "Ich gebe meine Adresse nicht einfach weiter.", // datenschutz
    "Ich gebe meine Telefon-Nummer nicht einfach weiter.", // datenschutz
    "Private Daten sind nur für dich.", // datenschutz
    "Private Daten sind nur für mich.", // datenschutz
    "In Gruppen schreibe ich nur, was alle sehen dürfen.", // whatsapp
    "Der KI schreibe ich nichts Privates.", // whatsapp
    "Ich zeige nicht alles in meinem Profil.", // facebook
    "Ich prüfe, wer meinen Beitrag sehen kann.", // facebook
    "Ich prüfe meine Einstellungen.", // facebook
    "Dein Profil: nur Freunde sehen es.", // facebook
    "Mein Profil sehen nur Freunde.", // facebook
    "Ich schütze meinen Standort.", // instagram, snapchat
    "Ich teile meinen Standort nicht einfach.", // instagram, snapchat
    "Konto auf privat stellen.", // instagram
    "Mein Konto ist privat.", // instagram
    "Standort ausschalten.", // snapchat
    "Ich schalte den Standort aus.", // snapchat
    "Ich schütze private Daten.", // tiktok
    "Ich schütze meine privaten Daten.", // tiktok
    "Ich gebe der KI keine privaten Daten.", // ki
    "Mein Geburts-Datum bleibt privat." // datenschutz
  ],
  echt: [
    "Ich prüfe fremde Nummern.", // whatsapp
    "Ich entscheide, wem ich antworte.", // whatsapp
    "Ich antworte fremden Nummern nicht sofort.", // whatsapp
    "Ich prüfe Freundschafts-Anfragen.", // facebook
    "Ich nehme unbekannte Anfragen nicht sofort an.", // facebook
    "Unbekannte Anfragen ablehnen.", // facebook
    "Unbekannte Anfragen lehne ich ab.", // facebook
    "Ich prüfe Kontakte.", // snapchat
    "Ich prüfe, wer mir schreibt.", // snapchat
    "Nicht jeder im Internet ist ehrlich.", // betrug
    "Kein Geld und kein Stress von einer Person, die ich kenne: das ist normal.", // whatsapp
    "Kein Geld, kein Link, kein Stress: meistens echt.", // betrug
    "Kein Link und kein Stress: das ist ein gutes Zeichen.", // betrug
    "Ein guter Shop zeigt Name und Adresse." // einkaufen
  ],
  wahr: [
    "Die KI in WhatsApp ist kein Mensch.", // whatsapp
    "Ich glaube nicht alles sofort.", // youtube
    "Auch Videos können gefälscht sein.", // youtube, tiktok, fakes
    "Prüfe das Video: Stimmt es?", // youtube
    "Ich prüfe: Stimmt das Video?", // youtube
    "Nicht jedes Video ist echt.", // tiktok
    "Auch Videos und Stimmen können gefälscht sein.", // tiktok
    "TikTok zeigt dir nur bestimmte Videos.", // tiktok
    "TikTok zeigt mir nur bestimmte Videos.", // tiktok
    "KI ist ein Programm. Kein Mensch.", // ki
    "KI kann Fehler machen.", // ki
    "Ich prüfe wichtige Antworten.", // ki
    "Bei Gesundheit und Geld frage ich Menschen.", // ki
    "KI ist ein Programm. KI ist kein Mensch.", // ki
    "Ein Chatbot ist kein Mensch.", // ki
    "KI kann Fehler machen. Ich prüfe wichtige Antworten.", // ki
    "Ich stelle 3 Fragen. Dann weiß ich mehr.", // ki
    "Stimmen können gefälscht sein.", // ki, fakes
    "Ich prüfe. Ich frage einen Menschen.", // ki
    "Bei Gesundheit und Geld frage ich einen Menschen.", // ki
    "Ich nutze KI mit Verstand.", // ki
    "KI-Antworten immer prüfen.", // ki
    "KI-Antworten prüfe ich.", // ki
    "Nicht alles glauben. Erst prüfen.", // ki
    "Nicht alles im Internet ist wahr.", // fakes
    "Bilder und Videos können gefälscht sein.", // fakes
    "Stimmen am Telefon können gefälscht sein.", // fakes
    "Aufregende Nachrichten prüfe ich erst.", // fakes
    "Erst prüfen. Dann teilen.", // fakes
    "Nicht jede Nachricht im Internet ist wahr.", // fakes
    "Fake News haben ein Ziel. Sie wollen mein Denken verändern.", // fakes
    "Fake News haben ein Ziel.", // fakes
    "Ein Foto kann gefälscht sein.", // fakes
    "Ich prüfe Nachrichten bei bekannten Seiten.", // fakes
    "Bei Aufregung prüfe ich erst.", // fakes
    "Im Zweifel teile ich nicht.", // fakes
    "Ich glaube nicht alles sofort. Ich prüfe.", // fakes
    "Bei starken Gefühlen prüfe ich zuerst.", // fakes
    "Erst prüfen. Dann glauben.", // fakes
    "Fake-Nachrichten sind Lügen.", // fakes
    "Fakes nicht weiterleiten.", // fakes
    "Fakes leite ich nicht weiter.", // fakes
    "Ich prüfe: Will die Nachricht etwas von mir?", // whatsapp
    "Ich achte auf das Wort Anzeige.", // youtube
    "Bilder können gefälscht sein." // fakes
  ],
  mitmachen: [
    "Ich muss mich nicht mit Bildern vergleichen.", // instagram
    "Ich mache gefährliche Dinge nicht nach.", // youtube
    "Ich muss nicht auf Kommentare reagieren.", // youtube
    "Ich mache gefährliche Videos nicht nach.", // youtube
    "Du darfst nein sagen.", // snapchat
    "Ich darf nein sagen.", // snapchat
    "Ich mache gefährliche Trends nicht nach.", // tiktok
    "Ich muss nicht bei jedem Trend mitmachen.", // tiktok
    "Ich muss bei keinem Trend mitmachen." // tiktok
  ],
  aufhoeren: [
    "Ich darf Videos stoppen.", // youtube
    "Nach einer Stunde Pause machen.", // youtube
    "Nach einer Stunde mache ich Pause.", // youtube
    "Ich mache Pausen.", // tiktok
    "Etwas tut mir nicht gut? Dann mache ich Pause.", // tiktok
    "Ich darf TikTok weglegen.", // tiktok
    "Ich mache Pause. Ich hole Unterstützung.", // tiktok
    "Timer stellen. Pause machen.", // tiktok
    "Ich stelle einen Timer.", // tiktok
    "Fühlt sich etwas falsch an? Stopp machen.", // hilfe
    "Wenn es sich falsch anfühlt: Stopp.", // hilfe
    "Ich darf jederzeit aufhören.", // whatsapp
    "Ich darf jeden Kauf abbrechen." // einkaufen
  ],
  hilfe: [
    "Ich darf mir Unterstützung holen.", // datenschutz, ki, fakes, einkaufen
    "Ich hole Unterstützung bei Beleidigungen.", // facebook
    "Gemeinheit ist nicht meine Schuld. Ich hole Hilfe.", // facebook
    "Ich blockiere. Ich melde. Ich hole Hilfe.", // facebook
    "Komische Nachrichten zeige ich.", // facebook
    "Ich hole Unterstützung bei verletzenden Kommentaren.", // instagram, tiktok
    "Bei Stress zeige ich es einer Person, der ich vertraue.", // instagram
    "Unbekannte Nachrichten: vertraute Person fragen.", // instagram
    "Unbekannte Nachrichten zeige ich.", // instagram, tiktok
    "Ich bin mit meiner Angst nicht allein.", // youtube
    "Bei Angst stoppe ich das Video. Ich hole Hilfe.", // youtube
    "Ich sage Nein. Ich zeige es jemandem.", // snapchat
    "Nachrichten von Unbekannten: vertraute Person fragen.", // tiktok
    "Ich lösche nicht sofort.", // hilfe
    "Ich zeige die Nachricht.", // hilfe
    "Ich hole Unterstützung.", // hilfe
    "Ich bin nicht allein.", // hilfe
    "Ich zeige die Nachricht, bevor ich sie lösche.", // hilfe
    "Ich mache ein Bild vom Bildschirm.", // hilfe
    "Meine Gefühle sind wichtig. Ich darf darüber sprechen.", // hilfe
    "Meine Gefühle sind wichtig.", // hilfe
    "Ich darf mir Unterstützung holen. Das ist klug.", // hilfe
    "Es gibt immer jemanden, der helfen kann.", // hilfe
    "Es gibt immer jemanden, der hilft.", // hilfe
    "Ich zeige die Nachricht. Ich hole Hilfe.", // hilfe
    "Vertraute Person um Hilfe bitten.", // hilfe
    "Ich frage eine vertraute Person.", // hilfe
    "Du bist nicht allein. Hilfe holen ist mutig.", // hilfe
    "Hilfe holen ist mutig.", // hilfe
    "Betrug ist nicht meine Schuld. Ich hole mir Hilfe.", // betrug
    "Betrug ist nicht meine Schuld. Ich hole Hilfe.", // betrug
    "Bei Beleidigungen hole ich Unterstützung.", // facebook
    "Unbekannte Nachrichten: erst fragen." // whatsapp
  ],
  keine: [
    "Ich nehme ein gutes, langes Passwort.", // datenschutz
    "Ich nehme ein langes Passwort.", // datenschutz
    "Doppelt sichern schützt mein Konto.", // datenschutz
    "Mit Passkey brauche ich kein Passwort.", // datenschutz
    "Erst fragen. Dann entscheiden.", // datenschutz
    "KI ist in vielen Apps. Auch wenn ich sie nicht sehe.", // ki
    "KI ist in vielen Apps.", // ki
    "Online-Käufe kann ich oft 14 Tage zurückgeben." // einkaufen
  ]
};

const REGEL_ZUORDNUNG = {};
Object.keys(REGEL_SAETZE).forEach(function (id) {
  REGEL_SAETZE[id].forEach(function (satz) {
    REGEL_ZUORDNUNG[satz] = (id === "keine") ? null : id;
  });
});

/* Welche Regel gehört zu diesem Merksatz? Erst die feste Tabelle, dann
   die Muster (erstes passendes gewinnt). Kein Treffer -> null, dann
   passiert einfach nichts (nie ein Fehler). */
function regelZuSatz(satz) {
  if (!satz || typeof satz !== "string") return null;
  const text = satz.trim();
  if (Object.prototype.hasOwnProperty.call(REGEL_ZUORDNUNG, text)) return REGEL_ZUORDNUNG[text];
  for (let i = 0; i < REGELN.length; i++) {
    if (REGELN[i].muster.test(text)) return REGELN[i].id;
  }
  return null;
}

/* Quizfragen haben kein remember-Feld (122 Fragen, keine einzige).
   Deshalb wird hier STRENG zugeordnet: nur wenn die Frage UND die
   Erklaerung der richtigen Antwort zur selben Regel fuehren.

   Warum so streng? Gemessen am 06.09.2026:
     nur ueber die Frage      111 Treffer, ~1 von 4 falsch
                              ("Am Automaten klebt ein QR-Code" -> Codes
                               statt Links, weil das Wort Code gewinnt)
     nur ueber die Erklaerung  90 Treffer, immer noch ~1 von 4 falsch
                              ("Die anderen duerfen mitbestimmen" -> Nicht
                               alles ist wahr, weil in mitbestimmen das
                               Wort stimmt steckt)
     beide muessen einig sein  46 Treffer, in der Stichprobe sauber
   Lieber 46 verlaessliche als 90, von denen jede vierte die falsche
   Regel gutschreibt. Die uebrigen Fragen zahlen einfach nicht ein. */
/* Feste Zuordnung für einzelne Quizfragen, bei denen die Muster sich
   einig sind, aber trotzdem falsch liegen (Frage-Text -> Regel oder null).
   Gefunden beim Abgleich am 25.09.2026. */
const REGEL_QUIZ = {
  /* „jemand“ + „hilft“ ergaben Hilfe holen – gemeint ist freundlich schreiben. */
  "Jemand schreibt etwas. Du findest es dumm. Wie antwortest du?": "bilder"
};

function regelAusQuizfrage(q) {
  if (!q) return null;
  if (q.question && Object.prototype.hasOwnProperty.call(REGEL_QUIZ, q.question.trim())) return REGEL_QUIZ[q.question.trim()];
  if (q.remember) return regelZuSatz(q.remember);
  const ausFrage = regelZuSatz(q.question);
  const ausErklaerung = regelZuSatz(q.feedbackCorrect);
  if (ausFrage && ausErklaerung && ausFrage === ausErklaerung) return ausFrage;
  return null;
}

function regelById(id) {
  return REGELN.filter(function (r) { return r.id === id; })[0] || null;
}

/* Selbstprüfung für die Entwicklung: in der Browser-Konsole aufrufen.
   Meldet Merksätze ohne Regel und Regeln, die in weniger als zwei
   Themen vorkommen (die könnten nie "sitzen"). */
function pruefeRegelZuordnung() {
  const saetze = {};
  const add = function (s, thema) {
    if (!s || !String(s).trim()) return;
    const k = String(s).trim();
    saetze[k] = saetze[k] || {};
    saetze[k][thema] = true;
  };
  if (typeof topics !== "undefined") {
    topics.forEach(function (x) {
      (x.memoryRules || []).forEach(function (s) { add(s, x.id); });
      /* Auch der Kurz-Weg (einfachLessons): dort wird ebenfalls gutgeschrieben. */
      (x.lessons || []).concat(x.einfachLessons || []).forEach(function (l) {
        add(l.remember, x.id);
        if (l.practice) add(l.practice.remember, x.id);
      });
    });
  }
  if (typeof SCENARIOS !== "undefined") {
    Object.keys(SCENARIOS).forEach(function (id) {
      (SCENARIOS[id].szenen || []).forEach(function (z) {
        if (z.frage) add(z.frage.remember, id);
      });
    });
  }
  const proRegel = {};
  REGELN.forEach(function (r) { proRegel[r.id] = { saetze: 0, themen: {} }; });
  const ohne = [];
  Object.keys(saetze).forEach(function (s) {
    const id = regelZuSatz(s);
    if (!id) {
      /* Bewusst ohne Regel (Tabelle `keine`) ist kein Befund. */
      if (!Object.prototype.hasOwnProperty.call(REGEL_ZUORDNUNG, s)) ohne.push(s);
      return;
    }
    proRegel[id].saetze++;
    Object.keys(saetze[s]).forEach(function (t) { proRegel[id].themen[t] = true; });
  });
  const schwach = REGELN.filter(function (r) { return Object.keys(proRegel[r.id].themen).length < 2; });
  /* Neue Sätze ohne festen Eintrag (laufen über die Muster) und Einträge,
     deren Satz es im Inhalt nicht mehr gibt (Tabelle nachziehen). */
  const ohneTabelle = Object.keys(saetze).filter(function (s) {
    return !Object.prototype.hasOwnProperty.call(REGEL_ZUORDNUNG, s);
  });
  const verwaist = Object.keys(REGEL_ZUORDNUNG).filter(function (s) { return !saetze[s]; });
  return {
    saetzeGesamt: Object.keys(saetze).length,
    ohneTabelle: ohneTabelle,
    verwaist: verwaist,
    ohneRegel: ohne,
    schwach: schwach.map(function (r) { return r.id; }),
    proRegel: REGELN.map(function (r) {
      return r.id + ": " + proRegel[r.id].saetze + " Sätze, " + Object.keys(proRegel[r.id].themen).length + " Themen";
    })
  };
}
