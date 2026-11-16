/* BE1 im gemeinsamen Datenformat „lernhandy-1“ (Phase B, 09.11.2026)
   Liest LERNEINHEIT_BE1 (pilot/lerneinheit-be1-de.js, Stand be1-21) und gibt denselben Lernweg im
   gemeinsamen Format zurück. Es wird kein Text geändert oder neu geschrieben: Jeder Text ist derselbe
   Wert aus den BE1-Daten. Die BE1-Datei bleibt die eine Quelle; der bisherige BE1-Pilot liest sie weiter.

   Einzige Ergänzungen (alles aus Entwurf 5, dort im Code):
   - S8 zeigt im Handy den Kontakt „Meine Bank“ mit „Nummer von der Bank-Karte“.
   - In S5 steht vor der Rückmeldung auf „Selbst nachfragen“ die Rückmeldung auf „Auflegen“, wie in
     Entwurf 5. Im Format ist das ein Verweis (textDavor: "auflegen"), kein neuer oder verbundener Text. */
function be1Lernweg(B) {
  "use strict";
  const S = (id) => B.bildschirme.find((b) => b.id === id);
  const anrufGesagt = (handy) => { const a = (handy || []).find((e) => e.typ === "anruf" && e.gesagt); return a ? a.gesagt : undefined; };
  /* BE1 kennt „nachricht“ mit von: SMS / E-Mail / Name. Im Format heißen sie sms, email und chat. */
  const inhalt = (el) => {
    if (el.typ === "nachricht") return el.von === "SMS" ? { typ: "sms", text: el.text } : el.von === "E-Mail" ? { typ: "email", text: el.text } : { typ: "chat", von: el.von, text: el.text };
    if (el.typ === "anruf") { const { gesagt, erinnerung, ...rest } = el; return rest; }   /* Gesagtes steht außen, nicht im Handy */
    return { ...el };
  };
  const handy = (liste) => (liste || []).map(inhalt);
  const nachFehler = (b) => b.nachFehlerVorbild ? { nachFehler: { vorbild: b.nachFehlerVorbild } } : {};
  const STEP_GRAD = { s5: "klar", "s6-2": "ueberlegen", "s6-1": "knifflig" };

  const schritte = B.bildschirme.map((b) => {
    const basis = { id: b.id, ...(STEP_GRAD[b.id] ? { grad: STEP_GRAD[b.id] } : {}), ...(b.hilfe ? { hilfe: b.hilfe } : {}), ...nachFehler(b) };
    switch (b.art) {
      case "einschaetzung":
        return { ...basis, art: "entscheidung", handy: handy(b.handy),
          lernbereich: { text: b.text, gehoert: anrufGesagt(b.handy) },
          aufgabe: { frage: b.frage, meinung: true, antworten: b.antworten.map((a) => ({ id: a.id, text: a.text, wertung: "meinung", ...(a.unsicher ? { unsicher: true } : {}) })) } };
      case "einordnen": {
        const as = B.antwortSaetze[b.antwortSatz];
        return { ...basis, art: "entscheidung", handy: handy(b.handy),
          lernbereich: { text: b.lage, gehoert: anrufGesagt(b.handy) },
          aufgabe: { frage: as.frage, antworten: as.antworten.map((a, n) => ({ id: a.id, text: a.text, wertung: b.rueckmeldung[n].wertung, rueckmeldung: b.rueckmeldung[n].text, ...(b.rueckmeldung[n].vorsichtig ? { vorsichtig: true } : {}) })) } };
      }
      case "frage":
        return { ...basis, art: "entscheidung", handy: handy(b.handy),
          lernbereich: { text: b.lage, gehoert: anrufGesagt(b.handy) },
          aufgabe: { frage: b.frage, antworten: b.antworten.map((a) => ({ ...(a.id ? { id: a.id } : {}), text: a.text, wertung: a.wertung, rueckmeldung: a.rueckmeldung })) } };
      case "vorbild":
        return { ...basis, art: "vorbild", handy: handy(b.handy), lernbereich: { etikett: b.vorbild || "tilda", text: b.text, gehoert: anrufGesagt(b.handy) } };
      case "merksatz":
        return { ...basis, art: "merksatz", handy: [{ typ: "notiz", satz: b.merksatz }],
          lernbereich: { text: b.merksatz, texte: [b.grund, b.zusatz, b.ausnahme], regel: true } };
      case "uebungshandy": {
        const anruf = b.handy.find((e) => e.typ === "anruf");
        const handlungen = { ...b.handlungen };
        if (handlungen.auflegen) {
          handlungen.auflegen = {
            ...handlungen.auflegen,
            erfolg: {
              tun: {
                leicht: "Du hast aufgelegt. Dein Code ist bei dir geblieben.",
                einfach: "Du hast aufgelegt, und dein Code ist bei dir geblieben.",
                standard: "Du hast das Gespräch beendet. Dein Code ist bei dir geblieben."
              },
              reaktionGeschichte: "„Danke. Der Anrufer klang so freundlich. Jetzt lege ich auch auf.“",
              reaktionSonst: "„So habe ich es auch gemacht. Danach habe ich selbst bei der Bank angerufen.“"
            }
          };
        }
        if (handlungen.selbstNachfragen && handlungen.auflegen) handlungen.selbstNachfragen = { ...handlungen.selbstNachfragen, textDavor: "auflegen" };
        const hUebung = handy(b.handy).map((el) => el.typ === "anruf" ? { ...el, wenig: ["auflegen"] } : el);
        return { ...basis, art: "uebung", handy: hUebung,
          lernbereich: { etikett: "uebung", text: b.aufgabe, hinweis: B.uebungHinweis, gehoert: anruf.erinnerung ?? anruf.gesagt },
          uebung: { saetze: { titel: b.aussenTitel, antworten: b.aussenKnoepfe.map((k) => ({ id: k.id, text: k.text })), wenig: ["code-sagen"] }, handlungen,
            ende: "auflegen", ...(handlungen.selbstNachfragen ? { danach: { handlung: "selbstNachfragen", knopf: "nachfragen" } } : {}) } };
      }
      case "erinnern": {
        /* b.zeigt: ["s3.merksatz", "s3.grund", "regel"] – Merkzettel aus den genannten Feldern */
        const felder = (b.zeigt || []).filter((p) => p.includes(".")).map((p) => { const [id, f] = p.split("."); return S(id)[f]; });
        const ein = B.bildschirme.find((x) => x.art === "einschaetzung");
        return { ...basis, art: "erinnern", handy: [{ typ: "notiz", satz: felder[0], texte: felder.slice(1) }],
          rueckblick: { schritt: ein.id, gewaehlt: b.rueckblick.gewaehlt, unsicher: b.rueckblick.unsicher } };
      }
      case "transfer":
        return { ...basis, art: "transfer", handy: [{ typ: "kontakt", name: "Meine Bank", nummer: "Nummer von der Bank-Karte", piktogramm: "card" }],
          lernbereich: { text: b.transfer, texte: [b.freiwillig], aufklappen: { titel: "istPassiert", liste: b.schonPassiert } } };
      default:
        return { ...basis, art: b.art };
    }
  });
  return { format: "lernhandy-1", id: B.id || "be1", titel: B.titel, szene: "betrug-schockanruf", regel: B.regel, quelle: "pilot/lerneinheit-be1-de.js", schritte };
}
