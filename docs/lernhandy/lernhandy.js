/* Lern-Handy – gemeinsamer Baustein
   Phase A (09.11.2026): Entwurf 5 als Baustein. Phase B (09.11.2026): gemeinsames Datenformat „lernhandy-1“.
   Gestaltung und Bedienung unverändert aus Entwurf 5 (berichte/lernhandy-2026-11-09/,
   GESTALTUNGSSYSTEM.md). Kein Framework, ein Browser-Global: LernHandy.

   Drei Teile:
   1. LernHandy.bausteine(ctx) – die Inhalte im Handy: Anruf, SMS, E-Mail, Chat, App-Seite,
      Merkzettel, Kontakt, Entscheidung, Rückmeldung; außen „Am Telefon hörst du:“.
   2. LernHandy.lernweg(opt)   – führt einen Lernweg im Format „lernhandy-1“ durch (FORMAT.md):
      Lernleiste, Lernbereich, Handy, Leiste unten, Hilfe, Vorlesen, zwei Darstellungen des Handys.
   3. LernHandy.pruefen(lw)    – prüft einen Lernweg auf das Format, bevor er gezeigt wird.

   Lerninhalt kommt immer über t() in der gewählten Sprachstufe (Text oder {leicht, einfach, standard}).
   Bedientext steht in T und ist in allen drei Stufen gleich (§2 A). NEU = für die Prüfgruppe (§13). */
(function (global) {
  "use strict";

  const FORMAT = "lernhandy-1";
  const STUFEN = ["leicht", "einfach", "standard"];
  function pkDa() { return global.PK?.VERSION === 2; }
  function lernstandHolen() {
    if (!pkDa()) return null;
    const z = global.PK.pruefe();
    if (z.status !== "ok" && z.status !== "ohneProfil") return null;
    return { id: z.id, ls: global.PK.lernstandLesen(z.id) };
  }
  function aktivLernstandSchluessel() {
    const h = lernstandHolen();
    return h ? (h.id ? "lernstand::" + h.id : "lernstand") : null;
  }
  const T = {
    eingehend: "Eingehender Anruf", ausgehend: "Ausgehender Anruf", sms: "SMS", email: "E-Mail",
    gut: "Das ist eine gute Entscheidung.", guterWeg: "Das ist ein guter Weg.", problem: "Diese Entscheidung kann ein Problem verursachen.",
    vorsichtig: "Du bist vorsichtig.", auch: "Das geht auch", hilftNochNicht: "Das hilft hier noch nicht.",
    fehltNochEtwas: "Hier fehlt noch etwas.", mehrAlsNoetig: "Das ist mehr als nötig.",
    mehrereWege: "Hier gibt es mehrere gute Wege.", nochEinWeg: "Noch ein guter Weg:",
    vorbild: { tilda: "So macht es Tilda:", alex: "So macht es Alex:" }, selbst: "Du übst selbst:", meinung: "Deine Meinung", keinRichtig: "Hier gibt es kein Richtig und kein Falsch.",
    nehmen: "Das nehme ich", nochmal: "Nochmal versuchen", nochmalUeben: "Nochmal üben", zumHandy: "Zurück zum Handy", nachfragen: "Selbst nachfragen", zusehen: { tilda: "Tilda zusehen", alex: "Alex zusehen" },
    deineRegel: "Deine Regel:", merksatzAnsehen: "Den Merksatz noch einmal ansehen", istPassiert: "Ist es schon passiert?", fertig: "Zur Startseite",
    weiter: "Weiter", zurueck: "Zurück", beenden: "Beenden", vorlesen: "Vorlesen", hilfe: "Hilfe", hilfeZurAufgabe: "Hilfe zur Aufgabe", schliessen: "Schließen", schritt: "Schritt",
    handyName: "Übungs-Handy", lernen: "Lernen", knoepfe: "Knöpfe im Handy", leisteUnten: "Weiter und zurück",
    /* NEU: */ amTelefon: "Am Telefon hörst du:", etwasSagen: "Etwas sagen", deineAntwort: "Deine Antwort:", warum: "Warum?",
    anrufBeendet: "Anruf beendet", merkzettel: "Merkzettel", neuerKontakt: "Neuer Kontakt", kontaktName: "Name", kontaktNummer: "Nummer",
    situation: "Situation nochmal ansehen", blockieren: "Nummer blockieren", nichtAntworten: "Nicht antworten", pruefen: "Kontakt prüfen", zumChat: "Zurück zum Chat",
    schalterAn: "An", schalterAus: "Aus", erlauben: "Erlauben", nichtErlauben: "Nicht erlauben", melden: "Melden", blockierenUndMelden: "Blockieren und Melden",
    appOeffnen: "App selbst öffnen", linkPruefen: "Link prüfen", perspektiveEigen: "Meine Ansicht", perspektiveFremd: "Was Fremde sehen",
    auftrag: "Eine Sache für heute:", mailFakeBanner: "Übungs-Postfach · Nicht echt · Keine echten E-Mails",
    dasMerkeIchMir: "Das merke ich mir", fuerHeuteAufhoeren: "Für heute aufhören", nochEineLage: "Noch eine Lage"
  };
  /* Überschriften zum Aufklappen im Lernbereich (Bedientext, Schlüssel im Datenformat) */
  const AUFKLAPPEN = { istPassiert: T.istPassiert };
  /* Anruf-Knöpfe: weiches Trennzeichen nur an der Silbengrenze; Name für Vorleseprogramme ohne Zeichen */
  const KNOPF = { auflegen: "Auflegen", lautsprecher: "Laut­sprecher", tastatur: "Tastatur", stumm: "Stumm" };
  const KNOPF_NAME = { auflegen: "Auflegen", lautsprecher: "Lautsprecher", tastatur: "Tastatur", stumm: "Stumm" };
  const UMSCHALTER = ["lautsprecher", "stumm"];

  /* Freigegebene Szenen aus dem Bibliothekskatalog; Entwürfe bleiben im privaten Bauordner. */
  const SCENE_ALT = {
    "betrug-abo": "Tilda prüft ein Angebot auf ihrem Handy; eine Lupe steht daneben.",
    "betrug-gewinn": "Eine Nachricht verspricht Tilda einen Gewinn.",
    "betrug-grundwissen": "Tilda bekommt eine falsche E-Mail. Daneben ein Warnzeichen.",
    "betrug-hallo-mama": "Eine fremde Nummer bittet Tilda um Geld und sagt: Ich bin dein Kind.",
    "betrug-hilfe": "Tilda ruft bei der Bank an. Alex ist bei ihr.",
    "betrug-liebe": "Eine Person im Internet verspricht Tilda Liebe und fragt nach Geld.",
    "betrug-paket": "Tilda bekommt eine falsche Nachricht zu einem Paket.",
    "betrug-schockanruf": "Ein Anruf macht Tilda Angst. Alex hilft ihr, ruhig zu bleiben.",
    "betrug-schutz": "Tilda und Alex schützen das Handy. Daneben ein Schild mit Schloss.",
    "betrug-tricks": "Tilda soll Geld für ein Paket zahlen. Sie macht Stopp.",
    "datenschutz-daten-anfrage": "Eine Nachricht fragt nach Tildas privaten Daten.",
    "datenschutz-passwort": "Tilda schützt ihr Handy. Daneben ein Schloss.",
    "datenschutz-private-daten": "Tilda soll Daten eintragen. Sie zögert.",
    "einkaufen-achtung": "Ein Angebot drängt: nur heute. Tilda bleibt ruhig.",
    "einkaufen-bezahlen": "Tilda bezahlt sicher. Daneben ein Schloss.",
    "einkaufen-hilfe": "Alex und Tilda schicken ein Paket zurück.",
    "einkaufen-shop": "Tilda prüft einen Online-Shop.",
    "facebook-anfragen": "Eine fremde Person will Freund werden. Alex und Tilda prüfen das.",
    "facebook-beitrag": "Alex prüft vor dem Veröffentlichen eines Beitrags, wer ihn sehen kann.",
    "facebook-einstellungen": "Tilda stellt ein, wer ihre Sachen sehen darf.",
    "facebook-profil": "Tilda schaut ihr eigenes Profil an.",
    "fakes-bilder": "Tilda prüft ein Bild mit der Lupe.",
    "fakes-pruefen": "Alex und Tilda prüfen eine Nachricht auf zwei Geräten.",
    "fakes-stimmen": "Tilda bekommt einen Anruf. Sie ist misstrauisch.",
    "hilfe-beweise": "Alex und Tilda machen ein Bild vom Bildschirm.",
    "hilfe-handlungsplan": "Alex und Tilda melden eine gemeine Nachricht.",
    "hilfe-stress": "Tilda bekommt gemeine Nachrichten. Sie ist traurig. Alex steht neben ihr.",
    "hilfe-unterstuetzung": "Alex hört Tilda zu. Er hilft ihr.",
    "instagram-bearbeitet": "Tilda und Alex vergleichen zwei Fotos. Eines ist bearbeitet.",
    "instagram-story": "Tilda filmt eine kurze Story.",
    "ki-antwort-pruefen": "Alex und Tilda prüfen eine Antwort von der KI nach.",
    "ki-chatbot": "Tilda schreibt mit einem Chatbot.",
    "ki-fehler": "Alex prüft eine Antwort vom Chatbot nach.",
    "snapchat-bilder": "Ein Bild soll verschwinden. Aber man kann ein Bildschirmfoto machen.",
    "snapchat-private-bilder": "Tilda sagt ruhig Nein zu einer Bild-Anfrage.",
    "szene-fotos": "Tilda will ein Foto schicken. Alex sagt: Erst prüfen.",
    "szene-gefuehle": "Tilda ist traurig. Alex hört zu. Er legt die Hand auf ihre Schulter.",
    "szene-grundwissen": "Alex erklärt Tilda etwas am Tablet.",
    "szene-handlungsplan": "Alex und Tilda sitzen am Tisch. Die Handys liegen weg. Sie machen einen Plan.",
    "szene-hilfe-holen": "Tilda zeigt Alex eine Nachricht. Sie fragt nach Hilfe.",
    "szene-ki-echt": "Alex und Tilda prüfen ein Video mit der Lupe. Ist es echt?",
    "szene-kommentare": "Tilda liest einen gemeinen Kommentar. Alex zeigt auf Melden.",
    "szene-merken": "Alex und Tilda halten eine Karte mit einer Glühbirne hoch.",
    "szene-private-nachrichten": "Eine fremde Person schreibt Tilda. Alex hebt die Hand: Erst warten.",
    "szene-standort": "Tilda schaltet auf dem Handy den Standort aus.",
    "szene-stress": "Tilda bekommt eine Nachricht. Sie ist angespannt. Alex steht ruhig neben ihr.",
    "tiktok-aehnliche-videos": "Alex zeigt: Die App zeigt immer ähnliche Videos.",
    "tiktok-trends": "Tilda sieht einen Tanz-Trend. Sie überlegt, ob sie mitmacht.",
    "tiktok-video-posten": "Tilda prüft ein Video, bevor sie es bei TikTok teilt.",
    "whatsapp-code": "Das Handy zeigt einen Code. Tilda gibt ihn nicht weiter.",
    "whatsapp-fremde-nummer": "Eine fremde Nummer schreibt Tilda. Sie überlegt.",
    "whatsapp-gruppen": "Viele Nachrichten in einer Gruppe. Tilda verlässt die Gruppe.",
    "whatsapp-links": "In einer Nachricht ist ein Link. Alex hebt warnend die Hand.",
    "youtube-mutproben": "Ein Video zeigt eine gefährliche Mutprobe. Alex und Tilda sagen Nein.",
    "youtube-pausen": "Tilda schaltet das automatische Weiterspielen aus. Daneben eine Uhr.",
    "youtube-werbung": "Alex zeigt auf Werbung in einem Video."
};

  /* Die Ersatzszenen tragen keine zusätzlichen Bewertungszeichen. */
  const SCENE_BADGE = {};

  /* Themen-Piktogramme und Namen für Orientierung und neutrale Platzhalter */
  const THEMA_PIKTO = {
    datenschutz: "lock", whatsapp: "whatsapp", facebook: "facebook",
    instagram: "instagram", youtube: "youtube", snapchat: "snapchat",
    tiktok: "tiktok", hilfe: "help", ki: "ki",
    fakes: "fake", betrug: "betrug", einkaufen: "einkaufen"
  };

  const THEMEN_NAMEN = {
    datenschutz: "Datenschutz", whatsapp: "WhatsApp", facebook: "Facebook",
    instagram: "Instagram", youtube: "YouTube", snapchat: "Snapchat",
    tiktok: "TikTok", hilfe: "Hilfe bei Problemen", ki: "KI und Chatbots",
    fakes: "Fake News & Fakes", betrug: "Online-Betrug", einkaufen: "Online-Einkaufen"
  };

  /* Zuordnung der 34 Einheiten zu passenden Szenenbildern nach PROJEKTREGELN §11.
     19 Einheiten nutzen geprüfte Master-v4-Szenen (bzw. Entwürfe V2/V1).
     9 Einheiten nutzen fachlich exakte 2D-Szenen.
     6 Einheiten ohne passendes Motiv erhalten null und werden durch neutrale Platzhalter dargestellt. */
  const SZENEN_MAP = {
    ds1: "datenschutz-private-daten",
    ds2: null, /* Platzhalter: Thema Datenschutz */
    ge1: "whatsapp-fremde-nummer",
    wa2: "whatsapp-links",
    wa3: "whatsapp-code",
    fb1: "facebook-einstellungen",
    fb2: "facebook-anfragen",
    fb3: null, /* Platzhalter: Thema Facebook */
    ig1: null, /* Platzhalter: Thema Instagram */
    ig2: "v4-ig2-foto-vor-senden",
    yt1: "szene-ki-echt",
    yt2: "youtube-werbung", /* 2D Bestand aktiv (Master v4 in Vorbereitung) */
    yt3: "youtube-pausen",  /* 2D Bestand aktiv (Master v4 in Vorbereitung) */
    sc1: "snapchat-bilder", /* 2D Bestand aktiv (Master v4 in Vorbereitung) */
    sc2: "szene-standort",
    sc3: "snapchat-private-bilder", /* 2D Bestand aktiv (Master v4 in Vorbereitung) */
    tt1: "tiktok-trends",   /* 2D Bestand aktiv (Master v4 in Vorbereitung) */
    tt2: "tiktok-trends",
    tt3: null, /* Platzhalter: Thema TikTok */
    h1: null,  /* Platzhalter: Thema Hilfe */
    h2: "hilfe-handlungsplan",
    h3: "hilfe-unterstuetzung",
    ki1: "ki-chatbot",
    ki2: null,
    ki3: "fakes-stimmen",
    fn1: "fakes-bilder",    /* 2D Bestand aktiv (Master v4 in Vorbereitung) */
    fn2: "fakes-pruefen",
    fn3: null, /* Platzhalter: Thema Fake News */
    be1: null, /* 2D Bestand aktiv (Master v4 in Vorbereitung) */
    be2: null,
    be3: "betrug-hilfe",    /* 2D Bestand aktiv (Master v4 in Vorbereitung) */
    ek1: "v4-ek1-einkaufen-shop",
    ek2: "einkaufen-bezahlen",
    ek3: "einkaufen-hilfe",  /* 2D Bestand aktiv (Master v4 in Vorbereitung) */
    "ek-post1": "einkaufen-hilfe"
  };

  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ================= 1. Bausteine im Handy =================
     ctx = { stufe: "leicht"|"einfach"|"standard", piktogramme: "Pfad/zu/pictograms/" } */
  function bausteine(ctx) {
    const t = (x) => x == null ? "" : typeof x === "string" || Array.isArray(x) ? x : (x[ctx.stufe] ?? x.leicht ?? "");
    const tx = (x) => esc(t(x));
    const pikto = (k) => `<img class="pikto" src="${ctx.piktogramme}${k}.svg" alt="" aria-hidden="true">`;
    const knopf = (tun, text, cls = "zweit") => `<button type="button" class="${cls}" data-tun="${tun}">${esc(text)}</button>`;
    const istWenig = () => {
      try {
        return !!(global.SoLerneIch && typeof global.SoLerneIch.getState === "function" && global.SoLerneIch.getState().menge === "wenig");
      } catch (e) { return false; }
    };
    const knoepfeFuer = (el, opt = {}) => {
      const alle = opt.knoepfe ?? el.knoepfe ?? [];
      if (!opt.aktiv || !istWenig() || !Array.isArray(el.wenig) || !el.wenig.length) return alle;
      const gef = alle.filter((k) => {
        const id = typeof k === "string" ? k : k.id;
        return id === "sagen" || el.wenig.includes(id);
      });
      return gef.length ? gef : alle;
    };
    const knoepfeHtml = (el, opt = {}, cfg = {}) => {
      const kn = knoepfeFuer(el, opt);
      if (!kn.length) return "";
      const extraCls = cfg.extraCls ? ` ${cfg.extraCls}` : "";
      const rotIds = cfg.rotIds || [];
      return `<div class="chat-knoepfe">` + kn.map((k) => {
        const id = typeof k === "string" ? k : k.id;
        const text = typeof k === "string" ? (T[id] || id) : t(k.text);
        const stil = (typeof k === "object" && k.stil) ? k.stil : (rotIds.includes(id) ? "rot" : "");
        const getippt = (opt.an && opt.an[id]) || (el.getippt === id) ? " ist-getippt" : "";
        const symbol = cfg.symbol ? cfg.symbol(id) : "";
        return opt.aktiv
          ? `<button type="button" class="chat-knopf${extraCls} ${stil}${getippt}" data-tun="${id}">${symbol}${esc(text)}</button>`
          : `<button type="button" class="chat-knopf${extraCls} ${stil}${getippt}" disabled>${symbol}${esc(text)}</button>`;
      }).join("") + `</div>`;
    };
    const symStandard = (id) => id === "blockieren" ? pikto("block") : id === "melden" ? pikto("report") : "";
    const symProfil = (id) => id === "blockieren" ? pikto("block") : id === "melden" ? pikto("report") : (id === "bestaetigen" || id === "annehmen") ? pikto("check") : (id === "ablehnen" || id === "entfernen") ? pikto("no") : "";

    /* Anruf: Hörer, Art des Anrufs, Name, Nummer; Knöpfe ausgegraut (Szene) oder bedienbar (opt.aktiv) */
    function anruf(el, opt = {}) {
      const art = opt.beendet ? T.anrufBeendet : el.richtung === "ausgehend" ? T.ausgehend : T.eingehend;
      const nr = el.piktogramm ? `<p class="nummer">${pikto(el.piktogramm.key)}<span>${tx(el.piktogramm.beschriftung)}</span></p>` : el.nummer ? `<p class="nummer">${tx(el.nummer)}</p>` : "";
      let h = `<div class="anruf-kopf${opt.kompakt ? " kompakt" : ""}"><span class="rund" aria-hidden="true">${pikto("anruf")}</span><p class="art">${esc(art)}</p><p class="name">${tx(el.von)}</p>${opt.kompakt ? "" : nr}</div>`;
      const kn = knoepfeFuer(el, opt);
      if (kn.length && !opt.beendet) {
        h += `<div class="anruf-knoepfe" role="group" aria-label="${esc(T.knoepfe)}">${kn.map((k) => {
          if (k === "sagen") return `<button type="button" class="anruf-knopf breit" data-tun="sagen">${esc(T.etwasSagen)}</button>`;
          const rot = k === "auflegen" ? " rot" : "";
          const inhalt = k === "auflegen" ? `${pikto("no")}<span>${KNOPF[k]}</span>` : KNOPF[k];
          if (opt.aktiv) return `<button type="button" class="anruf-knopf${rot}" data-tun="${k}" aria-label="${KNOPF_NAME[k]}"${UMSCHALTER.includes(k) ? ` aria-pressed="${!!(opt.an && opt.an[k])}"` : ""}>${inhalt}</button>`;
          return `<button type="button" class="anruf-knopf${rot}${el.getippt === k ? " ist-getippt" : ""}" disabled aria-label="${KNOPF_NAME[k]}">${inhalt}</button>`;
        }).join("")}</div>`;
      }
      return h;
    }
    /* SMS und E-Mail: Mitteilung mit Symbol, steht immer oben. Chat: Blase mit Absender */
    const istMitteilung = (el) => el.typ === "sms" || el.typ === "email";
    /* Schaltflächen wie im Chat, damit Übungen mit SMS oder E-Mail abschließbar sind (BE2, BE3; 12.11.2026).
       Ohne Farbe aus dem Baustein: Die Farbe darf die Lösung nicht verraten (§4a Punkt 3). */
    const knoepfeUnten = (el, opt = {}) => knoepfeHtml(el, opt, {});
    const mitteilung = (el, opt = {}) => `<div class="mitteilung"><p class="von">${pikto(el.typ === "email" ? "mail" : "message")}<span>${esc(el.typ === "email" ? T.email : T.sms)}</span></p><p>${tx(el.text)}</p>${knoepfeUnten(el, opt)}</div>`;
    const chat = (el, opt = {}) => {
      let h = `<div class="chat"><p class="von">${el.piktogramm ? pikto(el.piktogramm) : ""}${tx(el.von)}</p><p>${tx(el.text)}</p>`;
      if (el.hinweis) h += `<p class="chat-hinweis">${tx(el.hinweis)}</p>`;
      h += knoepfeHtml(el, opt, { rotIds: ["blockieren"], symbol: symStandard });
      h += `</div>`;
      return h;
    };
    /* App-Seite: Felder oder Web-Inhalte mit simulierter Adressleiste */
    const appSeite = (el, opt = {}) => {
      let h = `<div class="app-seite">`;
      if (el.url) {
        const sicher = el.sicher !== false;
        const schloss = sicher ? pikto("lock") : pikto("warning");
        h += `<div class="lh-browser-leiste" role="region" aria-label="Web-Adresse">
          <span class="lh-browser-schloss" aria-hidden="true">${schloss}</span>
          <span class="lh-browser-url">${tx(el.url)}</span>
        </div>`;
      }
      h += `<p class="titel">${tx(el.titel)}</p>`;
      if (el.inhalt) h += `<div class="lh-web-inhalt"><p>${tx(el.inhalt)}</p></div>`;
      if (el.felder && el.felder.length) {
        h += el.felder.map((f) => `<p>${tx(f)}</p><div class="lh-feld" aria-hidden="true">_ _ _ _ _ _</div>`).join("");
      }
      if (el.hinweis) h += `<p class="chat-hinweis">${tx(el.hinweis)}</p>`;
      h += knoepfeHtml(el, opt, { rotIds: ["blockieren"], symbol: symStandard });
      h += `</div>`;
      return h;
    };
    /* Berechtigung: System-Dialog für Kamera, Mikrofon, Kontakte, Standort */
    const berechtigung = (el, opt = {}) => {
      let h = `<div class="lh-system-karte">`;
      const rechtPikto = el.piktogramm ? pikto(el.piktogramm) : pikto("lock");
      h += `<div class="lh-system-kopf">${rechtPikto}<p class="lh-system-app">${tx(el.app)}</p></div>`;
      h += `<p class="lh-system-frage">${tx(el.titel || el.recht || el.frage)}</p>`;
      if (el.beschreibung) h += `<p class="lh-system-desc">${tx(el.beschreibung)}</p>`;
      if (el.hinweis) h += `<p class="chat-hinweis">${tx(el.hinweis)}</p>`;
      h += knoepfeHtml(el, opt, {
        rotIds: ["ablehnen", "nichtErlauben"],
        symbol: (id) => (id === "ablehnen" || id === "nichtErlauben") ? pikto("no") : id === "erlauben" ? pikto("check") : ""
      });
      h += `</div>`;
      return h;
    };
    /* Perspektive: Wechsel zwischen eigener Ansicht und was Fremde/Öffentlichkeit sehen */
    const perspektive = (el, opt = {}) => {
      const ansichtFremd = !!(opt.an && opt.an["fremdSicht"]);
      let h = `<div class="lh-perspektive-karte">`;
      h += `<div class="lh-perspektive-leiste" role="group" aria-label="Perspektive wechseln">
        <button type="button" class="lh-perspektive-tab${!ansichtFremd ? " aktiv" : ""}" data-tun="perspektiveEigen" aria-pressed="${!ansichtFremd}">${esc(T.perspektiveEigen)}</button>
        <button type="button" class="lh-perspektive-tab${ansichtFremd ? " aktiv" : ""}" data-tun="perspektiveFremd" aria-pressed="${ansichtFremd}">${esc(T.perspektiveFremd)}</button>
      </div>`;
      if (ansichtFremd) {
        h += `<div class="lh-perspektive-inhalt fremd">
          <p class="lh-perspektive-status">👁️ <strong>Öffentliche Ansicht</strong></p>
          <p>${tx(el.fremdSicht || el.text || "Dieses Konto oder dieser Beitrag ist für Fremde nicht öffentlich sichtbar.")}</p>
        </div>`;
      } else {
        h += `<div class="lh-perspektive-inhalt eigen">
          <p class="lh-perspektive-status">👤 <strong>Deine private Ansicht</strong></p>
          <p>${tx(el.eigenSicht || el.text || el.titel)}</p>
        </div>`;
      }
      if (el.hinweis) h += `<p class="chat-hinweis">${tx(el.hinweis)}</p>`;
      h += knoepfeHtml(el, opt, { extraCls: "lh-profil-knopf", rotIds: ["blockieren", "ablehnen"], symbol: symProfil });
      h += `</div>`;
      return h;
    };
    /* Merkzettel: Merksatz groß, darunter optional weitere Sätze */
    const notiz = (el) => `<div class="notiz"><p class="etikett">${pikto("key")}<span>${esc(T.merkzettel)}</span></p><p class="satz">${tx(el.satz)}</p>${(el.texte || []).map((s) => `<p>${tx(s)}</p>`).join("")}</div>`;
    /* Neuer Kontakt */
    const kontakt = (el, opt = {}) => {
      const pk = el.piktogramm === "phone" ? "anruf" : el.piktogramm;
      let h = `<div class="app-seite"><p class="titel">${esc(T.neuerKontakt)}</p><p>${esc(T.kontaktName)}</p><div class="lh-feld">${tx(el.name)}</div><p>${esc(T.kontaktNummer)}</p><div class="lh-feld">${pk ? pikto(pk) : ""}<span>${tx(el.nummer)}</span></div>`;
      if (el.hinweis) h += `<p class="chat-hinweis">${tx(el.hinweis)}</p>`;
      h += knoepfeHtml(el, opt, { rotIds: ["blockieren", "ablehnen"], symbol: symProfil });
      h += `</div>`;
      return h;
    };

    /* Schalter (Einstellungen & Privatsphäre): z. B. Konto privat, Standort teilen, Pausen-Timer */
    const schalter = (el, opt = {}) => {
      const btnId = el.id || "schalter";
      const an = (opt.an && opt.an[btnId] != null) ? opt.an[btnId] : !!el.an;
      const statusText = an ? (T.schalterAn || "An") : (T.schalterAus || "Aus");
      const statusKlasse = an ? " an" : " aus";
      let h = `<div class="lh-schalter-karte">`;
      if (el.app) {
        const appPikto = el.piktogramm ? pikto(el.piktogramm) : pikto("einstellungen");
        h += `<p class="lh-schalter-app">${appPikto}<span>${tx(el.app)}</span></p>`;
      }
      h += `<div class="lh-schalter-zeile"><div class="lh-schalter-info"><p class="lh-schalter-titel">${tx(el.titel)}</p>`;
      if (el.beschreibung) h += `<p class="lh-schalter-desc">${tx(el.beschreibung)}</p>`;
      h += `</div>`;
      if (opt.aktiv) {
        h += `<button type="button" class="lh-schalter-knopf${statusKlasse}" data-tun="${btnId}" role="switch" aria-checked="${an}"><span class="lh-schalter-regler"></span><span class="lh-schalter-beschriftung">${esc(statusText)}</span></button>`;
      } else {
        h += `<div class="lh-schalter-knopf${statusKlasse}" aria-hidden="true"><span class="lh-schalter-regler"></span><span class="lh-schalter-beschriftung">${esc(statusText)}</span></div>`;
      }
      h += `</div>`;
      if (el.hinweis) h += `<p class="chat-hinweis">${tx(el.hinweis)}</p>`;
      h += knoepfeHtml(el, opt, { extraCls: "lh-profil-knopf", rotIds: ["blockieren", "ablehnen"], symbol: symProfil });
      h += `</div>`;
      return h;
    };

    /* Video: Videoplayer, Werbung erkennen, Trends, Pausen */
    const video = (el, opt = {}) => {
      let h = `<div class="lh-video-karte">`;
      h += `<div class="lh-video-player"><span class="lh-video-play" aria-hidden="true">▶</span>`;
      if (el.dauer) h += `<span class="lh-video-dauer">${tx(el.dauer)}</span>`;
      h += `</div>`;
      h += `<div class="lh-video-info">`;
      if (el.abzeichen) h += `<span class="lh-video-abzeichen">${tx(el.abzeichen)}</span>`;
      h += `<p class="lh-video-titel">${tx(el.titel)}</p>`;
      if (el.kanal) h += `<p class="lh-video-kanal">${pikto("video")}<span>${tx(el.kanal)}</span></p>`;
      if (el.hinweis) h += `<p class="chat-hinweis">${tx(el.hinweis)}</p>`;
      h += `</div>`;
      h += knoepfeHtml(el, opt, { extraCls: "lh-profil-knopf", rotIds: ["blockieren", "ablehnen"], symbol: symProfil });
      h += `</div>`;
      return h;
    };

    /* Shop: Online-Shop, Bezahlart, Siegel prüfen */
    const shop = (el, opt = {}) => {
      let h = `<div class="lh-shop-karte">`;
      h += `<div class="lh-shop-kopf">${pikto("einkaufen")}<span class="lh-shop-name">${tx(el.name || el.titel)}</span></div>`;
      if (el.produkt) {
        h += `<div class="lh-shop-produkt"><p class="lh-shop-pname">${tx(el.produkt)}</p>`;
        if (el.preis) h += `<p class="lh-shop-preis">${tx(el.preis)}</p>`;
        h += `</div>`;
      }
      if (el.siegel) h += `<div class="lh-shop-siegel">${pikto("check")}<span>${tx(el.siegel)}</span></div>`;
      if (el.hinweis) h += `<p class="chat-hinweis">${tx(el.hinweis)}</p>`;
      h += knoepfeHtml(el, opt, { extraCls: "lh-profil-knopf", rotIds: ["blockieren", "ablehnen"], symbol: symProfil });
      h += `</div>`;
      return h;
    };

    /* Profil (Freundschaftsanfrage / Social Media Profil) */
    const profil = (el, opt = {}) => {
      let h = `<div class="lh-profil-karte">`;
      h += `<div class="lh-profil-kopf"><span class="lh-profil-avatar">${el.piktogramm ? pikto(el.piktogramm) : pikto("person")}</span><div><p class="lh-profil-name">${tx(el.name)}</p>`;
      if (el.status) h += `<p class="lh-profil-status">${tx(el.status)}</p>`;
      h += `</div></div>`;
      if (el.info) h += `<p class="lh-profil-info">${tx(el.info)}</p>`;
      if (el.hinweis) h += `<p class="chat-hinweis">${tx(el.hinweis)}</p>`;
      h += knoepfeHtml(el, opt, { extraCls: "lh-profil-knopf", rotIds: ["blockieren", "ablehnen"], symbol: symProfil });
      h += `</div>`;
      return h;
    };

    /* E-Mail-Postfach: Posteingang, Detailansicht, Schreibmaske, Absender- und Link-Prüfung, Reflexion */
    function mailbox(el, opt = {}) {
      const szId = (opt.ueState && opt.ueState.mb && opt.ueState.mb.szenarioId) || el.szenarioId || (typeof L !== "undefined" && (L.szenarioId || L.id)) || "ek-post1";
      const szenarienListe = typeof MAILBOX_SZENARIEN !== "undefined" ? MAILBOX_SZENARIEN : null;
      const szObj = (szenarienListe && szenarienListe[szId]) || null;
      const data = opt.mbDaten || el.mailbox || (szObj && szObj.mailbox) || (typeof EK3_MAILBOX_PROTOTYP !== "undefined" ? EK3_MAILBOX_PROTOTYP : null);
      if (!data) return `<div class="lh-mailbox"><p>Keine E-Mail-Daten vorhanden.</p></div>`;

      const s = (opt.ueState && opt.ueState.mb) || opt.mbState || {
        szenarioId: szId,
        ordner: "inbox",
        mailId: el.mailId || (data.ordner.inbox[0] ? data.ordner.inbox[0].id : null),
        modus: el.modus === "inbox-vorschau" ? "liste" : el.modus === "vorbild-lesen" ? "detail" : "liste",
        tab: "bausteine",
        starter: { a: "a1", b: "b1", c: "c1" },
        freitext: "",
        r: null,
        absenderOffen: false,
        linkOffen: false,
        anhangOffen: false,
        schreibTyp: "antwort"
      };

      let h = `<div class="lh-mailbox">`;

      // 0. Szenarien-Wahl (falls auf Standalone-Seite oder opt.szenarienAuswahl)
      if (opt.szenarienAuswahl && szenarienListe) {
        h += `<div class="lh-mail-szenario-leiste" role="region" aria-label="Szenario wählen">`;
        Object.keys(szenarienListe).forEach((k) => {
          const item = szenarienListe[k];
          const aktiv = (s.szenarioId || szId) === k;
          h += `<button type="button" class="lh-mail-sz-pill${aktiv ? ' aktiv' : ''}" data-tun="mb-wechsel-${k}">${item.icon || '✉️'} <span>${esc(item.titel[ctx.stufe] || item.titel.leicht || k)}</span></button>`;
        });
        h += `</div>`;
      }

      h += `<div class="lh-mail-fake-banner">${pikto("warning")}<span>${esc(T.mailFakeBanner || "Übungs-Postfach · Nicht echt · Keine echten E-Mails")}</span></div>`;

      // 1. Ordner-Tabs
      const count = (k) => (data.ordner[k] || []).length;
      h += `<div class="lh-mail-ordner-tabs" role="tablist" aria-label="E-Mail Ordner">`;
      h += `<button type="button" class="lh-mail-ordner-tab${s.ordner === 'inbox' ? ' aktiv' : ''}" data-tun="mb-ordner-inbox" role="tab" aria-selected="${s.ordner === 'inbox'}">${pikto("mail")}<span>Eingang (${count("inbox")})</span></button>`;
      h += `<button type="button" class="lh-mail-ordner-tab${s.ordner === 'sent' ? ' aktiv' : ''}" data-tun="mb-ordner-sent" role="tab" aria-selected="${s.ordner === 'sent'}">${pikto("check")}<span>Gesendet (${count("sent")})</span></button>`;
      h += `<button type="button" class="lh-mail-ordner-tab${s.ordner === 'trash' ? ' aktiv' : ''}" data-tun="mb-ordner-trash" role="tab" aria-selected="${s.ordner === 'trash'}">${pikto("no")}<span>Papierkorb (${count("trash")})</span></button>`;
      h += `</div>`;

      // 2. Ansichten
      if (s.modus === "liste") {
        if (opt.aktiv && data.antwort) {
          h += `<div class="lh-mail-liste-toolbar">`;
          h += `  <button type="button" class="chat-knopf lh-mail-neu-btn" data-tun="mb-neu">✏️ <span>Neue E-Mail</span></button>`;
          h += `</div>`;
        }
        const mails = data.ordner[s.ordner] || [];
        if (!mails.length) {
          h += `<div class="lh-mail-liste">`;
          h += `<p class="lh-mail-leer">Keine E-Mails in diesem Ordner.</p>`;
          h += `</div>`;
        } else {
          h += `<div class="lh-mail-liste" role="list">`;
          mails.forEach((m) => {
            const betr = tx(m.betreff);
            const body = tx(m.text).slice(0, 48);
            const warnIcon = m.istSpam ? "⚠️ " : "";
            h += `<div role="listitem" class="lh-mail-eintrag">`;
            h += `<button type="button" class="lh-mail-zeile${!m.gelesen ? ' ungelesen' : ''}" data-tun="mb-mail-${m.id}" aria-label="E-Mail von ${esc(m.von.name)}: ${betr}">`;
            h += `  <div class="lh-mail-zeile-kopf"><span class="lh-mail-von">${warnIcon}${esc(m.von.name)}</span><span class="lh-mail-datum">${esc(m.datum)}</span></div>`;
            h += `  <div class="lh-mail-betreff">${betr}</div>`;
            h += `  <div class="lh-mail-vorschau">${body}...</div>`;
            h += `</button>`;
            h += `</div>`;
          });
          h += `</div>`;
        }
      } else if (s.modus === "detail") {
        const mail = (data.ordner[s.ordner] || []).find((m) => m.id === s.mailId) || (data.ordner.inbox || [])[0];
        if (!mail) {
          h += `<div class="lh-mail-detail"><p class="lh-mail-leer">E-Mail nicht gefunden.</p><button type="button" class="chat-knopf" data-tun="mb-zurueck-liste">&larr; Zurück</button></div>`;
        } else {
          mail.gelesen = true;
          h += `<div class="lh-mail-detail">`;
          h += `  <div class="lh-mail-detail-nav">`;
          h += `    <button type="button" class="lh-mail-zurueck" data-tun="mb-zurueck-liste">&larr; Zurück zur Liste</button>`;
          h += `    <button type="button" class="chat-knopf lh-mail-vorlesen-btn" data-tun="mb-vorlesen-detail">${pikto("vorlesen")}<span>Vorlesen</span></button>`;
          h += `  </div>`;
          h += `  <div class="lh-mail-detail-kopf">`;
          h += `    <div class="lh-mail-absender-zeile">`;
          h += `      <p class="lh-mail-absender"><strong>Von:</strong> ${esc(mail.von.name)} <span class="lh-mail-adresse">&lt;${esc(mail.von.adresse)}&gt;</span></p>`;
          h += `      <button type="button" class="lh-mail-absender-btn${s.absenderOffen ? ' aktiv' : ''}" data-tun="mb-pruefe-absender">🔍 Absender prüfen</button>`;
          h += `    </div>`;
          if (s.absenderOffen) {
            const echt = mail.von.istEcht !== false;
            const checkTxt = tx(mail.von.geprueft || (echt ? "Adresse ist bekannt und verifiziert." : "Vorsicht: Adresse ist gefälscht oder verdächtig."));
            h += `  <div class="lh-mail-absender-kasten ${echt ? 'echt' : 'gefahr'}">`;
            h += `    <p class="lh-mail-absender-titel">${echt ? '✓ Echte Adresse' : '⚠️ Warnung: Verdächtige Adresse'}</p>`;
            h += `    <p class="lh-mail-absender-info">${checkTxt}</p>`;
            h += `  </div>`;
          }
          h += `    <p class="lh-mail-an"><strong>An:</strong> ${esc(mail.an)}</p>`;
          h += `    <p class="lh-mail-datum-detail">${esc(mail.datum)}</p>`;
          h += `    <h2 class="lh-mail-detail-betreff">${tx(mail.betreff)}</h2>`;
          h += `  </div>`;
          h += `  <div class="lh-mail-detail-body">${tx(mail.text).replace(/\n/g, "<br>")}</div>`;

          if (mail.link) {
            h += `  <div class="lh-mail-link-kasten">`;
            h += `    <p class="lh-mail-link-vorsicht">🔗 Enthaltene Verlinkung:</p>`;
            h += `    <button type="button" class="lh-mail-link-knopf${s.linkOffen ? ' aktiv' : ''}" data-tun="mb-link-pruefen">🔍 Link mit Lupe prüfen: ${esc(mail.link.ziel || mail.link.url)}</button>`;
            if (s.linkOffen) {
              h += `    <div class="lh-mail-link-details gefahr">`;
              h += `      <p><strong>Ziel-Adresse:</strong> <code>${esc(mail.link.url)}</code></p>`;
              h += `      <p class="lh-mail-link-warnung">${tx(mail.link.warnung)}</p>`;
              h += `      <button type="button" class="chat-knopf rot" data-tun="mb-link-klick">Gefahr: Link anklicken (Simulation)</button>`;
              h += `    </div>`;
            }
            h += `  </div>`;
          }

          if (mail.anhang) {
            h += `  <div class="lh-mail-anhang-kasten">`;
            h += `    <p class="lh-mail-anhang-vorsicht">📎 Dateianhang:</p>`;
            h += `    <button type="button" class="lh-mail-anhang-knopf${s.anhangOffen ? ' aktiv' : ''}" data-tun="mb-anhang-pruefen">🔍 Anhang mit Lupe prüfen: ${esc(mail.anhang.dateiname)} (${esc(mail.anhang.groesse || '')})</button>`;
            if (s.anhangOffen) {
              h += `    <div class="lh-mail-anhang-details gefahr">`;
              h += `      <p><strong>Dateiname:</strong> <code>${esc(mail.anhang.dateiname)}</code> (${esc(mail.anhang.groesse || '')})</p>`;
              h += `      <p class="lh-mail-anhang-warnung">${tx(mail.anhang.warnung)}</p>`;
              h += `      <button type="button" class="chat-knopf rot" data-tun="mb-anhang-klick">Gefahr: Anhang öffnen (Simulation)</button>`;
              h += `    </div>`;
            }
            h += `  </div>`;
          }

          if (opt.aktiv && s.ordner === "inbox") {
            h += `  <div class="lh-mail-detail-actions">`;
            if (mail.istSpam) {
              h += `    <button type="button" class="chat-knopf" data-tun="mb-gefahr-melden">${pikto("report")}<span>Als Betrug melden</span></button>`;
              h += `    <button type="button" class="chat-knopf rot" data-tun="mb-gefahr-loeschen">${pikto("no")}<span>In Papierkorb</span></button>`;
              h += `    <button type="button" class="chat-knopf zweit" data-tun="mb-gefahr-antworten"><span>Antworten</span></button>`;
            } else {
              h += `    <button type="button" class="chat-knopf" data-tun="mb-antworten">${pikto("mail")}<span>Antworten</span></button>`;
              h += `    <button type="button" class="chat-knopf rot" data-tun="mb-loeschen">${pikto("no")}<span>Löschen</span></button>`;
            }
            h += `  </div>`;
          }
          h += `</div>`;
        }
      } else if (s.modus === "schreiben") {
        const mail = (data.ordner.inbox || []).find((m) => m.id === s.mailId) || data.ordner.inbox[0];
        const istNeu = s.schreibTyp === "neu" || !mail;
        const empf = istNeu ? (data.neuEmpfaenger || "service@lernplattform-post.de") : (mail ? mail.von.adresse : '');
        const betr = istNeu ? (data.neuBetreff ? tx(data.neuBetreff) : "Neue Nachricht") : `Re: ${mail ? tx(mail.betreff) : ''}`;

        h += `<div class="lh-mail-composer">`;
        h += `  <div class="lh-mail-detail-nav"><button type="button" class="lh-mail-zurueck" data-tun="mb-zurueck-liste">&larr; Zurück zur Liste</button></div>`;
        h += `  <div class="lh-mail-composer-kopf">`;
        h += `    <p><strong>${istNeu ? 'Empfänger:' : 'Antwort an:'}</strong> ${esc(empf)}</p>`;
        h += `    <p><strong>Betreff:</strong> ${esc(betr)}</p>`;
        h += `  </div>`;
        h += `  <div class="lh-mail-schreib-tabs" role="tablist" aria-label="Schreibmöglichkeiten">`;
        h += `    <button type="button" class="lh-mail-schreib-tab${s.tab === 'bausteine' ? ' aktiv' : ''}" data-tun="mb-tab-bausteine" role="tab" aria-selected="${s.tab === 'bausteine'}">1. Fertige Sätze</button>`;
        h += `    <button type="button" class="lh-mail-schreib-tab${s.tab === 'satzstarter' ? ' aktiv' : ''}" data-tun="mb-tab-satzstarter" role="tab" aria-selected="${s.tab === 'satzstarter'}">2. Satz-Starter</button>`;
        h += `    <button type="button" class="lh-mail-schreib-tab${s.tab === 'freitext' ? ' aktiv' : ''}" data-tun="mb-tab-freitext" role="tab" aria-selected="${s.tab === 'freitext'}">3. Selbst schreiben</button>`;
        h += `  </div>`;

        if (s.tab === "bausteine") {
          const alleB = data.antwort.bausteine || [];
          const gefB = (istWenig() && Array.isArray(data.antwort.wenig) && data.antwort.wenig.length)
            ? alleB.filter((b) => data.antwort.wenig.includes(b.id))
            : alleB;
          const zeigeB = gefB.length ? gefB : alleB;
          h += `  <div class="lh-mail-tab-inhalt">`;
          h += `    <p class="lh-mail-tab-anleitung">Wähle eine fertige Antwort aus:</p>`;
          zeigeB.forEach((b) => {
            h += `    <button type="button" class="lh-mail-baustein-knopf" data-tun="mb-baustein-${b.id}">${tx(b.text)}</button>`;
          });
          h += `  </div>`;
        } else if (s.tab === "satzstarter") {
          const starter = data.antwort.satzstarter;
          s.starter = s.starter || { a: "a1", b: "b1", c: "c1" };
          const selA = starter.anrede.find(x => x.id === s.starter.a) || starter.anrede[0];
          const selB = starter.anliegen.find(x => x.id === s.starter.b) || starter.anliegen[0];
          const selC = starter.abschluss.find(x => x.id === s.starter.c) || starter.abschluss[0];
          h += `  <div class="lh-mail-tab-inhalt">`;
          h += `    <p class="lh-mail-tab-anleitung">Wähle die Teile deiner Nachricht:</p>`;
          h += `    <div class="lh-starter-gruppe"><label id="lh-lbl-a">1. Begrüßung:</label>`;
          starter.anrede.forEach(x => { h += `<button type="button" class="lh-starter-opt${s.starter.a === x.id ? ' aktiv' : ''}" data-tun="mb-starter-a-${x.id}">${tx(x.text)}</button>`; });
          h += `    </div>`;
          h += `    <div class="lh-starter-gruppe"><label id="lh-lbl-b">2. Anliegen / Thema:</label>`;
          starter.anliegen.forEach(x => { h += `<button type="button" class="lh-starter-opt${s.starter.b === x.id ? ' aktiv' : ''}" data-tun="mb-starter-b-${x.id}">${tx(x.text)}</button>`; });
          h += `    </div>`;
          h += `    <div class="lh-starter-gruppe"><label id="lh-lbl-c">3. Gruß:</label>`;
          starter.abschluss.forEach(x => { h += `<button type="button" class="lh-starter-opt${s.starter.c === x.id ? ' aktiv' : ''}" data-tun="mb-starter-c-${x.id}">${tx(x.text)}</button>`; });
          h += `    </div>`;
          h += `    <div class="lh-starter-vorschau"><p class="lh-starter-vorschau-titel">Deine E-Mail:</p><p>${tx(selA.text)} ${tx(selB.text)} ${tx(selC.text)}</p></div>`;
          h += `    <button type="button" class="chat-knopf breit" data-tun="mb-starter-senden">${pikto("check")}<span>Diese E-Mail senden</span></button>`;
          h += `  </div>`;
        } else if (s.tab === "freitext") {
          h += `  <div class="lh-mail-tab-inhalt">`;
          h += `    <p class="lh-mail-tab-anleitung">Schreibe deine Nachricht selbst:</p>`;
          h += `    <textarea class="lh-mail-textarea" id="lhMailFreitext" placeholder="Guten Tag..." aria-label="E-Mail Text">${esc(s.freitext || "")}</textarea>`;
          h += `    <div class="lh-freitext-actions">`;
          h += `      <button type="button" class="chat-knopf" data-tun="mb-vorlesen-freitext">${pikto("vorlesen")}<span>Vorlesen</span></button>`;
          h += `      <button type="button" class="chat-knopf" data-tun="mb-freitext-senden">${pikto("check")}<span>Absenden</span></button>`;
          h += `    </div>`;
          h += `  </div>`;
        }
        h += `</div>`;
      } else if (s.modus === "reflexion") {
        const checkliste = data.reflexionCheckliste || [
          { id: "k1", text: { leicht: "Nummer oder Thema: Hast du dein Anliegen klar genannt?", einfach: "Anliegen: Hast du das Thema oder eine wichtige Nummer genannt?", standard: "Präzision: Wurde das Anliegen sachlich und mit notwendigen Angaben formuliert?" } },
          { id: "k2", text: { leicht: "Geheimhaltung: Hast du Passwörter und Bank-PIN geheim gehalten?", einfach: "Sicherheit: Wurden vertrauliche Daten wie PINs oder Passwörter geheim gehalten?", standard: "Datensicherheit: Wurde auf die Übermittlung von Zugangsdaten und PINs verzichtet?" } },
          { id: "k3", text: { leicht: "Freundlich: Hast du höflich und sachlich geschrieben?", einfach: "Umgangston: Ist die Nachricht sachlich und lösungsorientiert?", standard: "Tonalität: Entspricht der Tonfall den Konventionen einer sachlichen Korrespondenz?" } }
        ];

        h += `<div class="lh-mail-reflexion">`;
        h += `  <h2 class="lh-mail-reflexion-titel">Deine Selbst-Kontrolle</h2>`;
        h += `  <p class="lh-mail-reflexion-deine"><strong>Deine Nachricht:</strong><br>„${esc(s.freitext || "")}“</p>`;
        h += `  <div class="lh-mail-check-kasten">`;
        checkliste.forEach((c) => {
          h += `    <p class="lh-check-punkt">✓ ${tx(c.text || c)}</p>`;
        });
        h += `  </div>`;
        const vbText = data.antwort && (data.antwort.vorbild || data.antwort.alexVorbild);
        if (vbText) {
          const vbTitel = (data.antwort && data.antwort.vorbildTitel) || "So hat es Alex geschrieben:";
          h += `  <div class="lh-mail-vorbild-kasten">`;
          h += `    <p class="lh-mail-vorbild-titel">${esc(vbTitel)}</p>`;
          h += `    <p class="lh-mail-vorbild-text">${tx(vbText)}</p>`;
          h += `  </div>`;
        }
        h += `  <div class="lh-mail-reflexion-actions">`;
        h += `    <button type="button" class="chat-knopf" data-tun="mb-reflexion-fertig">${pikto("check")}<span>Meine E-Mail passt so</span></button>`;
        h += `    <button type="button" class="chat-knopf zweit" data-tun="mb-bearbeiten">E-Mail noch einmal bearbeiten</button>`;
        h += `  </div>`;
        h += `</div>`;
      }

      h += `</div>`;
      return h;
    }

    const INHALT = { anruf, sms: mitteilung, email: mitteilung, chat, webseite: appSeite, notiz, kontakt, schalter, video, shop, profil, berechtigung, perspektive, mailbox };

    /* Eine Szene: SMS und E-Mail stehen oben wie eine Benachrichtigung */
    function szene(liste, opt = {}) {
      const sortiert = [...(liste || [])].sort((a, b) => (istMitteilung(a) ? -1 : 0) - (istMitteilung(b) ? -1 : 0));
      return sortiert.map((el) => INHALT[el.typ] ? INHALT[el.typ](el, opt) : "").join("");
    }
    const szeneTyp = (liste) => (liste || []).some((e) => e.typ === "anruf") ? "anruf" : "handy";
    /* Was man HÖRT, steht außerhalb des Handys */
    const gehoert = (text) => text ? `<div class="gehoert"><p class="wer">${pikto("anruf")}<span>${esc(T.amTelefon)}</span></p><p>${tx(text)}</p></div>` : "";
    /* Entscheidung: Frage als Überschrift der Gruppe, native Einzelauswahl, „Das nehme ich“ */
    function entscheidung(frage, antworten, opt = {}) {
      let liste = antworten.map((a, n) => ({ a, n }));
      if (istWenig() && liste.length > 2 && !opt.meinung) {
        const ohneAuch = liste.filter((item) => item.a.wertung !== "auchMoeglich");
        if (ohneAuch.length >= 2) liste = ohneAuch.slice(0, 2);
        else {
          const gut = liste.find((item) => item.a.wertung === "passend" || item.a.wertung === "gleichwertig");
          const rest = liste.filter((item) => item !== gut);
          liste = gut && rest.length ? [gut, rest[0]] : liste.slice(0, 2);
        }
      }
      return `${opt.meinung ? `<p class="meinung">💬 ${esc(T.meinung)} · ${esc(T.keinRichtig)}</p>` : ""}${opt.mehrereWege ? `<p class="meinung">${esc(T.mehrereWege)}</p>` : ""}
    <fieldset class="antworten"><legend class="lh-frage" id="lh-frage" tabindex="-1">${tx(frage)}</legend>${liste.map(({ a, n }) => `<label class="antwort"><input type="radio" name="lh-wahl" value="${n}"${opt.markiert === n ? " checked" : ""}><span>${tx(a.text)}</span></label>`).join("")}</fieldset>
    <button type="button" class="haupt" id="lh-nehmen"${opt.markiert == null ? " disabled" : ""}>${esc(T.nehmen)}</button>`;
    }
    /* Rückmeldung: wertung passend | gleichwertig | auchMoeglich | unpassend (vorsichtig) | eigene | meinung | neutral */
    const artVon = (w, vors) => (w === "passend" || w === "gleichwertig" || w === "auchMoeglich") ? "gut" : w === "unpassend" ? (vors ? "vorsicht" : "problem") : "info";
    function rueckmeldung(wertung, opt = {}) {
      const art = artVon(wertung, opt.vorsichtig);
      const customKopf = opt.kopf ? t(opt.kopf) : "";
      const kopf = wertung === "eigene"
        ? ""
        : (customKopf || (wertung === "passend" ? T.gut : wertung === "gleichwertig" ? T.guterWeg : wertung === "auchMoeglich" ? T.auch : wertung === "unpassend" ? (opt.vorsichtig ? T.vorsichtig : T.problem) : T.keinRichtig));
      const zeichen = art === "gut" ? "✓" : art === "info" ? "i" : "!";
      const figurBild = art === "gut" ? "alex-tilda-erfolg.webp" : "alex-tilda-hilfe.webp";
      const sliEnv = (global.SoLerneIch && typeof global.SoLerneIch.getState === "function")
        ? (global.SoLerneIch.getState().voreinstellung || "unterstuetzt")
        : "unterstuetzt";
      const erfolgObj = opt.erfolg || null;
      const erfolgTun = opt.erfolgTun ? t(opt.erfolgTun) : (erfolgObj && erfolgObj.tun ? t(erfolgObj.tun) : "");
      let erfolgReaktion = "";
      if (wertung !== "eigene" && sliEnv !== "frei") {
        if (opt.erfolgReaktion) erfolgReaktion = t(opt.erfolgReaktion);
        else if (erfolgObj) erfolgReaktion = sliEnv === "unterstuetzt" ? t(erfolgObj.reaktionGeschichte || erfolgObj.reaktionSonst) : t(erfolgObj.reaktionSonst || erfolgObj.reaktionGeschichte);
      }
      const kopfHtml = kopf
        ? `<div class="lh-erfolg-folge"><p class="rkopf ${art}" id="lh-rkopf" tabindex="-1"><span class="symbol" aria-hidden="true">${zeichen}</span><span>${esc(kopf)}</span></p></div>`
        : `<div class="lh-erfolg-folge" id="lh-rkopf" tabindex="-1"></div>`;
      const grundText = opt.text ? tx(opt.text) : "";
      const erfolgBlock = (erfolgTun || erfolgReaktion)
        ? `<div class="lh-erfolg-reaktion" aria-live="polite"><img class="lh-erfolg-avatar" src="${ctx.bilder}figures/${figurBild}" alt="" width="34" height="34" aria-hidden="true" onerror="this.hidden=true"><p>${erfolgTun ? `<strong>${esc(erfolgTun)}</strong>` : ""}${erfolgTun && erfolgReaktion ? " " : ""}${erfolgReaktion ? esc(erfolgReaktion) : ""}</p></div>`
        : (grundText ? `<div class="lh-erfolg-reaktion"><img class="lh-erfolg-avatar" src="${ctx.bilder}figures/${figurBild}" alt="" width="34" height="34" aria-hidden="true" onerror="this.hidden=true"><p><span class="warum">${esc(T.warum)}</span> ${grundText}</p></div>` : "");
      const grundUnten = (erfolgTun || erfolgReaktion) && grundText ? `<p>${grundText}</p>` : "";
      const nochEinWegHtml = opt.nochEinWeg ? `<p class="deine"><strong>${esc(T.nochEinWeg)}</strong> ${tx(opt.nochEinWeg)}</p>` : "";
      return {
        art,
        html: `${kopfHtml}
    ${opt.deine ? `<p class="deine">${esc(T.deineAntwort)} ${tx(opt.deine)}</p>` : ""}
    ${erfolgBlock}${grundUnten}${nochEinWegHtml}${opt.knoepfe || ""}`
      };
    }
    return { t, tx, pikto, knopf, istWenig, anruf, mitteilung, chat, appSeite, notiz, kontakt, schalter, video, shop, profil, berechtigung, perspektive, mailbox, szene, szeneTyp, gehoert, entscheidung, rueckmeldung, istMitteilung };
  }

  /* ================= 2. Lernweg im Lern-Handy =================
     opt = {
       wurzel: Element (bekommt die Klasse .lh),
       lernweg: Lernweg im Format „lernhandy-1“ (FORMAT.md),
       regeln: REGELN aus regeln-de.js (für „Deine Regel:“), optional,
       stufe: "leicht" | "einfach" | "standard",
       piktogramme: Pfad zum Ordner der Piktogramme (mit / am Ende),
       nachZeichnen(info): wird nach jedem Zeichnen gerufen (für die Vorschau-Leiste),
       beenden(): was „Beenden“ tut (ohne Angabe: zurück zu Schritt 1)

       Eingebettete Betriebsart (Stufe 1 der Integration, 13.11.2026) – der Baustein ist ein Übungsteil in einer
       anderen Seite (später: Lern-App). Ohne eigene Leiste, ohne eigene Navigation unten, ohne Speicherung.
       eingebettet: true,
       nur: ["uebung"]              Arten oder ids der Schritte, die gezeigt werden (Vorgabe: nur die Übungen),
       ueberschrift: 2              Ebene der unsichtbaren Überschrift (2–6), damit die Seite ihre eine h1 behält,
       platz(): { hoehe, breite }   freier Platz in Pixeln (Vorgabe: Fensterhöhe und Breite der Wurzel),
       farben: "seite"              Farben der Lern-App übernehmen (--accent, --ink, --surface …; siehe lernhandy.css),
       beiZustand(info)             nach jedem Zeichnen: { schritt, art, i, anzahl, ansicht, ansichten, gesperrt, letzte, erledigt, kannZurueck, stufe, lese },
       beiHandlung(info)            nach jeder Handlung im Handy: { schritt, handlung, wertung, beendet, regel },
       beiAbschluss(info)           einmal, wenn eine Übung abgeschlossen ist: { schritt, handlung, wertung, regel },
       beiEnde()                    wenn weiter() hinter dem letzten gezeigten Schritt gerufen wird.
       Die Seite steuert über die Rückgabe: stufe(s), neuAufbauen() (nach Schriftwechsel), weiter(), zurueck(),
       vorleseText(), hilfe() und entfernen(). Schnittstelle: pilot/lernhandy/EINGEBETTET.md
     } */
  function lernweg(opt) {
    const L = opt.lernweg;
    const fehler = pruefen(L, opt.regeln).filter((m) => m.stufe === "fehler");
    if (fehler.length) console.warn("Lern-Handy: Lernweg hat Fehler im Format", fehler);
    /* Eingebettet: nur die gewählten Schritte zeigen. ALLE bleibt für Verweise (Vorbild nach Fehler, Rückblick). */
    const EIN = !!opt.eingebettet;
    const ALLE = L.schritte;
    const NUR_ALLE = opt.nur === "alle" || (Array.isArray(opt.nur) && opt.nur.includes("alle"));
    const NUR = NUR_ALLE ? ARTEN : (Array.isArray(opt.nur) && opt.nur.length ? opt.nur : ["uebung"]);
    const gewaehlt = (EIN && !NUR_ALLE) ? ALLE.filter((s) => NUR.includes(s.art) || NUR.includes(s.id)) : ALLE;
    if (EIN && !gewaehlt.length) console.warn("Lern-Handy: eingebettet ohne passenden Schritt, es werden alle gezeigt", L.id, NUR);
    const SEITEN = gewaehlt.length ? gewaehlt : ALLE;
    const EBENE = EIN ? Math.max(2, Math.min(6, Number(opt.ueberschrift) || 2)) : 1;
    let entfernt = false;   /* nach entfernen() tut der Baustein nichts mehr (auch keine späten Rückrufe) */
    const ctx = {
      stufe: opt.stufe || "leicht",
      piktogramme: opt.piktogramme || "../assets/pictograms/",
      bilder: opt.bilder || (opt.piktogramme ? opt.piktogramme.replace(/pictograms\/$/, "") : "../assets/")
    };
    const BS = bausteine(ctx);
    const { t, tx, pikto, knopf } = BS;
    const W = opt.wurzel;
    W.classList.add("lh");
    W.classList.toggle("eingebettet", EIN);
    W.classList.toggle("farben-seite", EIN && opt.farben === "seite");   /* Farben der Seite übernehmen (lernhandy.css) */
    W.innerHTML = `
<header class="lernleiste" data-lh="leiste"${EIN ? " hidden" : ""}>
  <button type="button" class="leisten-knopf" data-lh="beenden">${pikto("no")}${esc(T.beenden)}</button>
  <div class="ort"><p class="titel" data-lh="titel"></p><p class="schritt" data-lh="schritt"></p><div class="balken" aria-hidden="true"><span data-lh="balken"></span></div></div>
  <button type="button" class="leisten-knopf" data-lh="vorlesen" aria-pressed="false">${pikto("vorlesen")}${esc(T.vorlesen)}</button>
  <button type="button" class="leisten-knopf" data-lh="hilfe">${pikto("help")}${esc(T.hilfe)}</button>
</header>
<${EIN ? "div" : "main"} class="buehne">
  <h${EBENE} class="sr-only" data-lh="h1" id="lh-h1" tabindex="-1"></h${EBENE}>
  <section class="lernbereich" data-lh="lern" aria-label="${esc(T.lernen)}"></section>
  <div class="handy" data-lh="handy" role="group" aria-label="${esc(T.handyName)}">
    <div class="handy-kopf" aria-hidden="true"><span>9:41</span><span class="kamera"></span><span>80 %</span></div>
    <div class="display" data-lh="display"></div>
    <div class="home-strich" aria-hidden="true"></div>
  </div>
</${EIN ? "div" : "main"}>
<nav class="unten" data-lh="unten" aria-label="${esc(T.leisteUnten)}"${EIN ? " hidden" : ""}><div>
  <button type="button" class="zurueck" data-lh="zurueck">${esc(T.zurueck)}</button>
  <button type="button" class="weiter" data-lh="weiter">${esc(T.weiter)}</button>
</div></nav>
<dialog data-lh="dialog"><div class="innen"><h2 data-lh="dtitel">${esc(T.hilfe)}</h2><div data-lh="dtext"></div><button type="button" class="haupt" data-lh="dzu">${esc(T.schliessen)}</button></div></dialog>`;
    const $ = (k) => W.querySelector(`[data-lh="${k}"]`);
    const q = (s) => W.querySelector(s);
    const D = { leiste: $("leiste"), lern: $("lern"), handy: $("handy"), display: $("display"), unten: $("unten"), h1: $("h1"), weiter: $("weiter"), zurueck: $("zurueck"), vorlesen: $("vorlesen"), dialog: $("dialog"), beenden: $("beenden") };

    /* Die eigenständige Ansicht wartet vor dem ersten Speichern auf den Kern. */
    const startI = typeof opt.schritt === "number" ? opt.schritt : 0;
    let speicherBereit = false;
    let speichernBeimZeichnen = true;
    let zuletztGemerkt = null;
    let profilStand = null;
    const speicherMeldung = document.createElement("p");
    speicherMeldung.setAttribute("role", "status");
    speicherMeldung.setAttribute("aria-live", "polite");
    speicherMeldung.setAttribute("aria-atomic", "true");
    speicherMeldung.className = "lh-speicherstatus";
    if (!EIN) W.after(speicherMeldung);
    /* Zustand: Schritt i, Ansicht v im Schritt (Situation → Entscheidung → Rückmeldung) */
    const z = { i: Math.max(0, Math.min(startI, SEITEN.length - 1)), v: 0, markiert: null, wahl: {}, ue: {}, lese: false };
    const seite = () => SEITEN[z.i];
    const schritt = (id) => ALLE.find((x) => x.id === id);
    const schrift = () => parseFloat(getComputedStyle(document.documentElement).fontSize) || 18;
    let handySchrift = 18;
    const zuKlein = () => handySchrift < 0.9 * schrift();

    /* ---------- Lernbereich: immer dieselbe Reihenfolge ----------
       Szene · Rollenvorbild / Transfer / Etikett · Text (groß) · weitere Texte · Hinweis · Regel · „Am Telefon hörst du:“ · Aufklappen */
    function lernbereich(lb = {}, textErsatz, szeneKey, bArt) {
      /* D7: lernbereich.regel ist true (Regel des Lernwegs) oder die id einer Regel (GE1: WhatsApp „echt“, Instagram „hilfe“) */
      const r = lb.regel ? (opt.regeln || []).find((x) => x.id === (typeof lb.regel === "string" ? lb.regel : L.regel)) : null;
      const regel = r ? (ctx.stufe === "leicht" ? r.kurz : r[ctx.stufe]?.kurz ?? r.kurz) : "";
      const werFigur = (lb.etikett === "tilda" || lb.etikett === "alex") ? lb.etikett : null;
      const istTransfer = lb.etikett === "transfer" || bArt === "transfer";
      const et = lb.etikett === "uebung" ? [pikto("exercise"), T.selbst] : (!werFigur && T.vorbild[lb.etikett]) ? [pikto("example"), T.vorbild[lb.etikett]] : null;
      const text = textErsatz != null ? textErsatz : t(lb.text);
      const liste = t(lb.aufklappen && lb.aufklappen.liste);
      /* Phase C: Ein Text kann je Stufe eine Liste von Absätzen sein (WA3: Leicht 5 Sätze, Einfach 3, Alltag 1).
         Jeder Absatz wird ein eigenes <p>. Eine Zeichenkette ergibt genau dasselbe wie vorher. */
      const absaetze = (x, cls) => (Array.isArray(x) ? x : [x]).filter((s) => s !== "").map((s) => `<p${cls}>${esc(s)}</p>`).join("");   /* D7: "" = in dieser Stufe bewusst kein Text */

      const istSituation = (szeneKey !== undefined);
      const themaPikto = THEMA_PIKTO[L.thema] || "themen";
      const themaTitel = THEMEN_NAMEN[L.thema] || "Thema";

      let szeneHtml = "";
      const badgeKey = szeneKey && SCENE_BADGE[szeneKey];
      const badgeHtml = badgeKey ? `<span class="lh-szene-badge" aria-hidden="true"><img class="lh-badge-pikto" src="${ctx.piktogramme}${badgeKey}.svg" alt="" width="20" height="20"></span>` : "";

      if (szeneKey && SCENE_ALT[szeneKey]) {
        szeneHtml = `<div class="lh-szene"><img class="lh-szene-bild" src="${ctx.bilder}scenes/${szeneKey}.webp" alt="${esc(SCENE_ALT[szeneKey])}" width="104" height="104" loading="eager" onerror="this.parentElement.className='lh-szene lh-szene-platzhalter'; this.parentElement.setAttribute('role','img'); this.parentElement.setAttribute('aria-label','Thema ${esc(themaTitel)}: Bildszene in Vorbereitung'); this.parentElement.innerHTML='<img class=\\'lh-platzhalter-pikto\\' src=\\'${ctx.piktogramme}${themaPikto}.svg\\' alt=\\'\\' width=\\'36\\' height=\\'36\\' aria-hidden=\\'true\\'><span class=\\'lh-platzhalter-text\\'>${esc(themaTitel)}</span>';">${badgeHtml}</div>`;
      } else if (istSituation) {
        szeneHtml = `<div class="lh-szene lh-szene-platzhalter" role="img" aria-label="Thema ${esc(themaTitel)}: Bildszene in Vorbereitung"><img class="lh-platzhalter-pikto" src="${ctx.piktogramme}${themaPikto}.svg" alt="" width="36" height="36" aria-hidden="true"><span class="lh-platzhalter-text">${esc(themaTitel)}</span></div>`;
      }

      const kopfHtml = werFigur
        ? `<div class="lh-vorbild-kopf"><img class="lh-vorbild-figur" src="${ctx.bilder}figures/vormachen-${werFigur}.webp" alt="${werFigur === 'tilda' ? 'Tilda' : 'Alex'} macht es vor" width="54" height="54" onerror="this.src='${ctx.bilder}figures/vormachen-${werFigur}.webp'"><p class="etikett"><span>${esc(T.vorbild[werFigur])}</span></p></div>`
        : istTransfer
        ? `<div class="lh-transfer-kopf"><img class="lh-transfer-figur" src="${ctx.bilder}figures/alex-tilda-erfolg.webp" alt="Alex und Tilda freuen sich über deinen Lernerfolg" width="54" height="54" onerror="this.src='${ctx.bilder}figures/alex-tilda-erfolg.webp'"><p class="etikett">${pikto("check")}<span>${esc(T.auftrag)}</span></p></div>`
        : et
        ? `<p class="etikett">${et[0]}<span>${esc(et[1])}</span></p>`
        : "";

      return szeneHtml
        + kopfHtml
        + (text ? absaetze(text, ` class="gross"`) : "")
        + (lb.texte || []).map((s) => absaetze(t(s), "")).join("")
        + (lb.hinweis ? `<p class="hinweis">${tx(lb.hinweis)}</p>` : "")
        + (regel ? `<p class="etikett">${pikto("remember")}<span>${esc(T.deineRegel)}</span></p><p class="gross">${esc(regel)}</p>` : "")
        + BS.gehoert(lb.gehoert)
        + (lb.aufklappen ? `<details><summary>${esc(AUFKLAPPEN[lb.aufklappen.titel] || lb.aufklappen.titel)}</summary><ul>${(Array.isArray(liste) ? liste : []).map((s) => `<li>${esc(s)}</li>`).join("")}</ul></details>` : "");
    }

    /* ---------- Ansichten je Schritt: { handy: {typ, html, rand}, aussen, sperrt, ue } ---------- */
    function ansichten(b) {
      const v = [];
      const szene = { typ: BS.szeneTyp(b.handy), html: BS.szene(b.handy, { an: z.ue.an }) };
      const unitSzene = b.szene || L.szene || (Object.prototype.hasOwnProperty.call(SZENEN_MAP, L.id) ? SZENEN_MAP[L.id] : null);
      const zeigeSzene = (b.art === "situation" || b.id === "s1" || b.id === "s1-erleben") ? unitSzene : undefined;

      if (b.art === "entscheidung") {
        const kontext = lernbereich(b.lernbereich, null, zeigeSzene, b.art), a = b.aufgabe;
        const hatGleichwertig = (a.antworten || []).filter((x) => x.wertung === "passend" || x.wertung === "gleichwertig").length > 1;
        v.push({ handy: szene, aussen: kontext });
        const nochmal = `<details><summary>${esc(T.situation)}</summary>${kontext}</details>`;
        v.push({ handy: { typ: "lern", html: BS.entscheidung(a.frage, a.antworten, { meinung: !!a.meinung, mehrereWege: hatGleichwertig && !a.meinung, markiert: z.markiert }) }, aussen: nochmal, sperrt: true });
        const w = z.wahl[b.id];
        if (w != null) {
          const x = a.antworten[w];
          const knoepfe = x.wertung === "unpassend" ? knopf("nochmal", T.nochmal) + (b.nachFehler ? knopf("vorbild", vorbildVon(b.nachFehler.vorbild).zusehen) : "") : "";
          const andererGuter = (x.wertung === "passend" || x.wertung === "gleichwertig")
            ? (a.antworten || []).find((cand, idx) => idx !== w && (cand.wertung === "passend" || cand.wertung === "gleichwertig"))
            : null;
          const r = BS.rueckmeldung(x.wertung, { vorsichtig: !!x.vorsichtig, kopf: x.kopf, text: x.rueckmeldung, erfolg: x.erfolg, erfolgTun: x.erfolgTun, erfolgReaktion: x.erfolgReaktion, nochEinWeg: andererGuter ? andererGuter.text : "", deine: x.text, knoepfe });
          v.push({ handy: { typ: "lern", html: r.html, rand: r.art }, aussen: nochmal });
        }
      } else if (b.art === "uebung") {
        v.push(uebung(b, zeigeSzene));
      } else if (b.art === "erinnern") {
        /* Rückblick auf eine frühere Meinungs-Frage: „{antwort}“ wird durch die gewählte Antwort ersetzt */
        const rb = b.rueckblick, ein = schritt(rb.schritt), w = ein ? z.wahl[ein.id] : null;
        const gewaehlt = w != null && !ein.aufgabe.antworten[w].unsicher;
        v.push({ handy: szene, aussen: lernbereich(b.lernbereich, gewaehlt ? t(rb.gewaehlt).replace("{antwort}", t(ein.aufgabe.antworten[w].text)) : t(rb.unsicher), zeigeSzene, b.art) });
      } else {
        /* situation, vorbild, merksatz, transfer: eine Ansicht – Szene im Handy, Lernbereich daneben */
        v.push({ handy: szene, aussen: lernbereich(b.lernbereich, null, zeigeSzene, b.art) });
      }
      return v;
    }
    function vorbildVon(id) {
      const vb = schritt(id) || {};
      const wer = (vb.lernbereich && vb.lernbereich.etikett) || "tilda";
      return { seite: vb, wer, titel: T.vorbild[wer] || T.vorbild.tilda, zusehen: T.zusehen[wer] || T.zusehen.tilda };
    }

    function holeMbDaten(szId, el) {
      const speicher = (z.ue.mbDaten = z.ue.mbDaten || {});
      const key = String(szId || (el && el.szenarioId) || L.id || "ek-post1");
      if (!speicher[key]) {
        const szenarienListe = typeof MAILBOX_SZENARIEN !== "undefined" ? MAILBOX_SZENARIEN : null;
        const curSz = (szenarienListe && szenarienListe[szId]) || null;
        const roh = (el && el.mailbox) || (curSz && curSz.mailbox) || (typeof EK3_MAILBOX_PROTOTYP !== "undefined" ? EK3_MAILBOX_PROTOTYP : null);
        speicher[key] = roh ? JSON.parse(JSON.stringify(roh)) : null;
      }
      return speicher[key];
    }

    /* Übung im Handy: Anruf oder Chat mit bedienbaren Knöpfen; „Etwas sagen“ und jede Rückmeldung im Handy */
    function uebung(b, zeigeSzene) {
      const U = b.uebung, s = z.ue;
      const mbEl = b.handy && b.handy.find((e) => e.typ === "mailbox");
      if (mbEl) {
        s.mb = s.mb || { szenarioId: mbEl.szenarioId || L.szenarioId || L.id || "ek-post1", ordner: "inbox", mailId: null, modus: "liste", tab: "bausteine", starter: { a: "a1", b: "b1", c: "c1" }, freitext: "", r: null, gesendet: false, absenderOffen: false, linkOffen: false, anhangOffen: false, schreibTyp: "antwort" };
        if (s.mb.r) {
          const kn = knopf("zurueckMailbox", s.mb.r.wertung === "unpassend" ? T.nochmal : T.zumHandy) + (s.mb.r.wertung === "unpassend" && b.nachFehler ? knopf("vorbild", vorbildVon(b.nachFehler.vorbild).zusehen) : "");
          const r = BS.rueckmeldung(s.mb.r.wertung, { kopf: s.mb.r.kopf, text: t(s.mb.r.text), erfolg: s.mb.r.erfolg, erfolgTun: s.mb.r.erfolgTun, erfolgReaktion: s.mb.r.erfolgReaktion, deine: s.mb.r.deine ? t(s.mb.r.deine) : "", knoepfe: kn });
          return { handy: { typ: "lern", html: r.html, rand: r.art }, aussen: lernbereich(b.lernbereich, null, zeigeSzene, b.art), sperrt: !s.beendet, ue: true };
        }
        const mbDaten = holeMbDaten(s.mb.szenarioId, mbEl);
        const mbHtml = BS.mailbox(mbEl, { aktiv: true, ueState: s, stufe: ctx.stufe, mbDaten });
        return { handy: { typ: "handy", html: mbHtml }, aussen: lernbereich(b.lernbereich, null, zeigeSzene, b.art), sperrt: !s.beendet, ue: true };
      }
      const saetzeListe = U.saetze
        ? ((BS.istWenig() && Array.isArray(U.saetze.wenig) && U.saetze.wenig.length)
          ? U.saetze.antworten.filter((k) => U.saetze.wenig.includes(k.id))
          : U.saetze.antworten)
        : [];
      const anruf = b.handy.find((e) => e.typ === "anruf");
      if (anruf) {
        const oben = b.handy.filter((e) => e.typ !== "anruf");
        const saetze = U.saetze ? `<p class="lh-frage" id="lh-sagen" tabindex="-1">${tx(U.saetze.titel)}</p>${(saetzeListe.length ? saetzeListe : U.saetze.antworten).map((k) => knopf(k.id, t(k.text), "anruf-knopf breit")).join("")}` : "";
        const anrufAktiv = { typ: "anruf", html: BS.szene(oben) + BS.anruf(anruf, { aktiv: true, kompakt: oben.length > 0, an: s.an || {}, knoepfe: [...(anruf.knoepfe || []), ...(U.saetze ? ["sagen"] : [])] }) };
        let r = null;
        if (s.letzte) {
          const h = U.handlungen[s.letzte];
          const satz = U.saetze && U.saetze.antworten.find((k) => k.id === s.letzte);
          let kn = "";
          if (s.beendet) { if (s.letzte === U.ende && U.danach && !s.danach) kn = knopf(U.danach.handlung, T[U.danach.knopf] || U.danach.knopf); }
          else if (Array.isArray(h.folgeknoepfe) && h.folgeknoepfe.length) { kn = h.folgeknoepfe.map((fk) => knopf(fk.id, t(fk.text), "anruf-knopf breit")).join(""); }
          else kn = knopf("zurueckAnruf", h.wertung === "unpassend" ? T.nochmal : T.zumHandy) + (h.wertung === "unpassend" && b.nachFehler ? knopf("vorbild", vorbildVon(b.nachFehler.vorbild).zusehen) : "");
          /* textDavor: Rückmeldung einer anderen Handlung steht davor (z. B. erst „Auflegen“, dann „Selbst nachfragen“) */
          const text = h.textDavor && U.handlungen[h.textDavor] ? `${t(U.handlungen[h.textDavor].text)} ${t(h.text)}` : h.text;
          r = BS.rueckmeldung(h.wertung, { kopf: h.kopf, text, erfolg: h.erfolg, erfolgTun: h.erfolgTun, erfolgReaktion: h.erfolgReaktion, nochEinWeg: h.nochEinWeg, deine: satz ? satz.text : "", knoepfe: kn });
        }
        const handy = r ? { typ: "lern", html: r.html, rand: r.art } : s.sagenOffen ? { typ: "anruf", html: saetze + knopf("sagenZu", T.zumHandy) } : anrufAktiv;
        return { handy, aussen: lernbereich(b.lernbereich, null, zeigeSzene, b.art), sperrt: !s.beendet, ue: true };
      }
      const oben = b.handy;
      const saetze = U.saetze ? `<div class="uebung-saetze"><p class="lh-frage" id="lh-sagen" tabindex="-1">${tx(U.saetze.titel)}</p>${(saetzeListe.length ? saetzeListe : U.saetze.antworten).map((k) => knopf(k.id, t(k.text), "chat-knopf breit")).join("")}</div>` : "";
      let r = null;
      if (s.letzte) {
        const h = U.handlungen[s.letzte];
        const satz = U.saetze && U.saetze.antworten.find((k) => k.id === s.letzte);
        let kn = "";
        if (s.beendet) {
          if (s.letzte === U.ende && U.danach && !s.danach) kn = knopf(U.danach.handlung, T[U.danach.knopf] || U.danach.knopf);
        } else if (Array.isArray(h.folgeknoepfe) && h.folgeknoepfe.length) {
          kn = h.folgeknoepfe.map((fk) => knopf(fk.id, t(fk.text), "chat-knopf breit")).join("");
        } else {
          kn = knopf("zurueckUebung", h.wertung === "unpassend" ? T.nochmal : (T.zumChat || T.zumHandy)) + (h.wertung === "unpassend" && b.nachFehler ? knopf("vorbild", vorbildVon(b.nachFehler.vorbild).zusehen) : "");
        }
        const text = h.textDavor && U.handlungen[h.textDavor] ? `${t(U.handlungen[h.textDavor].text)} ${t(h.text)}` : h.text;
        const andererGuterEntry = (h.wertung === "passend" || h.wertung === "gleichwertig")
          ? Object.entries(U.handlungen || {}).find(([hk, hv]) => hk !== s.letzte && hv && (hv.wertung === "passend" || hv.wertung === "gleichwertig"))
          : null;
        let andererLabel = h.nochEinWeg || "";
        if (!andererLabel && andererGuterEntry) {
          const ak = andererGuterEntry[0];
          const gefSatz = U.saetze && U.saetze.antworten.find((k) => k.id === ak);
          if (gefSatz) andererLabel = gefSatz.text;
          else {
            for (const el of (b.handy || [])) {
              const foundK = (el.knoepfe || []).find((kk) => (typeof kk === "string" ? kk : kk.id) === ak);
              if (foundK) { andererLabel = typeof foundK === "string" ? (T[foundK] || foundK) : foundK.text; break; }
            }
          }
        }
        r = BS.rueckmeldung(h.wertung, { kopf: h.kopf, text, erfolg: h.erfolg, erfolgTun: h.erfolgTun, erfolgReaktion: h.erfolgReaktion, nochEinWeg: andererLabel, deine: satz ? satz.text : "", knoepfe: kn });
      }
      const aktivHtml = BS.szene(oben, { aktiv: true, an: s.an || {} }) + saetze;
      const handy = r ? { typ: "lern", html: r.html, rand: r.art } : { typ: "handy", html: aktivHtml };
      return { handy, aussen: lernbereich(b.lernbereich, null, zeigeSzene, b.art), sperrt: !s.beendet, ue: true };
    }

    /* ---------- Passt alles ins Handy im festen Format? Geprüft für alle Stufen, Schritte, Antworten ---------- */
    function passtAlles() {
      const d = D.display, merk = { ...z, wahl: { ...z.wahl }, ue: { ...z.ue } }, stufe = ctx.stufe;
      let ok = true;
      const pruefe = (h) => { d.className = `display typ-${h.typ}`; d.innerHTML = h.html; if (d.scrollHeight > d.clientHeight + 1) ok = false; };
      for (const st of STUFEN) for (const b of SEITEN) {
        ctx.stufe = st; z.i = SEITEN.indexOf(b);
        if (b.art === "uebung") {
          const U = b.uebung;
          if (!U || !U.handlungen) {
            ansichten(b).forEach((a) => pruefe(a.handy));
            continue;
          }
          for (const ue of [{}, { sagenOffen: true }, ...Object.keys(U.handlungen).map((k) => ({ letzte: k, beendet: k === U.ende || (U.danach && k === U.danach.handlung) }))]) { z.ue = ue; ansichten(b).forEach((a) => pruefe(a.handy)); }
          continue;
        }
        const n = b.aufgabe ? b.aufgabe.antworten.length : 0;
        if (!n) { ansichten(b).forEach((a) => pruefe(a.handy)); continue; }
        for (let w = 0; w < n; w++) { z.wahl[b.id] = w; ansichten(b).forEach((a) => pruefe(a.handy)); }
      }
      Object.assign(z, merk); ctx.stufe = stufe;
      return ok;
    }

    /* ---------- Zeichnen ---------- */
    let aktuell = null;
    function zeichnen(fokus) {
      if (entfernt) return;
      const b = seite(), liste = ansichten(b);
      z.v = Math.max(0, Math.min(z.v, liste.length - 1));
      const an = liste[z.v];
      W.dataset.art = b.art;
      W.dataset.ansicht = String(z.v);
      D.display.className = `display typ-${an.handy.typ}${an.handy.rand ? " rand-" + an.handy.rand : ""}`;
      D.display.innerHTML = an.handy.html;
      D.lern.innerHTML = an.aussen;
      aktuell = { liste, an };
      /* D7: Ein Schritt kann zu einem Teil gehören (GE1: WhatsApp, Instagram, TikTok); der Teil steht im Kopf hinter dem Titel */
      const titel = t(L.titel) + (b.teil ? ` – ${t(b.teil)}` : ""), n = SEITEN.length;
      $("titel").textContent = titel;
      D.h1.textContent = EIN ? `${titel} – ${T.handyName}` : `${titel}, ${T.schritt} ${z.i + 1} von ${n}`;
      $("schritt").textContent = `${T.schritt} ${z.i + 1} von ${n}`;
      $("balken").style.width = `${((z.i + 1) / n) * 100}%`;
      const letzte = z.v === liste.length - 1;
      D.weiter.hidden = !!an.sperrt && (an.ue || letzte);
      D.weiter.textContent = letzte && z.i === n - 1 ? T.fertig : T.weiter;
      D.zurueck.disabled = z.i === 0 && z.v === 0;
      vorlesenStopp();
      if (fokus) {
        const el = q(fokus) || D.h1;
        el.focus?.({ preventScroll: true });
        if (EIN) el.scrollIntoView?.({ block: "nearest" });   /* eingebettet: die Seite nicht an den Anfang rollen */
        else if (el === D.h1) window.scrollTo(0, 0);
        else el.scrollIntoView({ block: W.classList.contains("breit") ? "nearest" : "start" });
      }
      if (!EIN && global.SoLerneIch && typeof global.SoLerneIch.getState === "function") {
        const sliAuto = global.SoLerneIch.getState();
        const mbMod = (z.ue && z.ue.mb && z.ue.mb.modus) || "";
        const schrittKey = `${z.i}:${z.v}:${(z.ue && z.ue.letzte) || ""}:${mbMod}`;
        if (sliAuto.zugang === "hoeren" && z.i > 0 && !sliAuto.screenreader && schrittKey !== letzterAutoLeseKey) {
          letzterAutoLeseKey = schrittKey;
          clearTimeout(autoLeseTimer);
          autoLeseTimer = setTimeout(() => {
            if (entfernt || !W.isConnected) return;
            if (!global.speechSynthesis || typeof global.SpeechSynthesisUtterance !== "function") return;
            const stimme = stimmeDesGeraets();
            if (!stimme) {
              if (!stimmeFehltGemeldet && D.lern && !D.lern.querySelector(".lh-audio-hinweis")) {
                stimmeFehltGemeldet = true;
                const p = document.createElement("p");
                p.className = "hinweis lh-audio-hinweis";
                p.textContent = VORLESE_HINWEIS.fehlend;
                D.lern.appendChild(p);
              }
              return;
            }
            vorlesenStart(vorleseText());
          }, 140);
        }
      }
      if (D.display.scrollHeight > D.display.clientHeight + 1) console.warn("Lern-Handy: Display zu voll", b.id, z.v);
      speichereFortschritt({ i: z.i, v: z.v, n, id: b.id });
      opt.nachZeichnen && opt.nachZeichnen({ i: z.i, v: z.v, id: b.id, art: b.art, ...(b.grad ? { grad: b.grad } : {}), lese: z.lese, anzahl: n, stufe: ctx.stufe });
      melden("beiZustand", zustandFuerSeite());
    }
    /* Rückrufe an die Seite: Ein Fehler dort darf den Baustein nicht anhalten */
    function melden(name, info) {
      if (entfernt || typeof opt[name] !== "function") return;
      if (EIN && !W.isConnected) return;   /* Wurzel gerade nicht im Dokument (z. B. Sprachwahl der Seite): nichts melden */
      try { opt[name](info); } catch (e) { console.warn("Lern-Handy: Fehler im Rückruf " + name, e); }
    }
    /* Was die Seite für ihre eigenen Knöpfe braucht – dieselbe Logik wie „Weiter“ und „Zurück“ der eigenen Leiste */
    function zustandFuerSeite() {
      const b = seite(), an = aktuell ? aktuell.an : null, liste = aktuell ? aktuell.liste : [];
      const antwortZurueck = !!(an && an.ue && !z.ue.beendet && (z.ue.letzte || z.ue.sagenOffen || (z.ue.mb && z.ue.mb.r)));
      return {
        schritt: b.id, art: b.art, ...(b.grad ? { grad: b.grad } : {}), i: z.i, anzahl: SEITEN.length, ansicht: z.v, ansichten: liste.length,
        gesperrt: !!D.weiter.hidden,
        letzte: z.i === SEITEN.length - 1 && z.v === liste.length - 1,
        erledigt: b.art === "uebung" ? !!z.ue.beendet : b.aufgabe ? z.wahl[b.id] != null : null,
        kannZurueck: !D.zurueck.disabled || antwortZurueck, stufe: ctx.stufe, lese: z.lese
      };
    }

    function speichereFortschritt(info) {
      if (EIN || !speicherBereit || !speichernBeimZeichnen || !L.id) return;
      const h = lernstandHolen();
      if (!h?.ls?.enabled || global.PK.stempel(h.id) !== profilStand) return;
      const istFertig = info.i === info.n - 1 && (info.v === 99 || z.v === (aktuell ? aktuell.liste.length - 1 : 0));
      const eintrag = { i: info.i, v: info.v === 99 ? 0 : info.v, abgeschlossen: istFertig };
      const signatur = JSON.stringify(eintrag);
      if (zuletztGemerkt === signatur) return;
      zuletztGemerkt = signatur;
      const abschluss = istFertig ? { themaId: L.thema || (typeof KURZWEGE !== "undefined" ? KURZWEGE[L.id]?.thema : null) || null,
        regel: L.regel || null } : null;
      global.PK.handySchreiben(h.id, L.id, eintrag, abschluss).then(ok => {
        if (!ok && zuletztGemerkt === signatur) zuletztGemerkt = null;
      });
    }

    function speichereFertig() {
      speichereFortschritt({ i: SEITEN.length - 1, v: 99, n: SEITEN.length, id: seite().id });
    }

    function zeigeAbschluss() {
      const titel = typeof L.titel === "string" ? L.titel : (L.titel[ctx.stufe] || L.titel.leicht || L.id);
      const ms = SEITEN.find((x) => x.art === "merksatz");
      const msText = ms && ms.lernbereich ? tx(ms.lernbereich.text) : "";
      $("dtitel").textContent = T.dasMerkeIchMir;
      $("dtext").innerHTML = `
        <div class="lh-dialog-figur"><img src="${ctx.bilder}figures/alex-tilda-erfolg.webp" alt="Alex und Tilda" width="72" height="72" onerror="this.src='${ctx.bilder}figures/alex-tilda-erfolg.webp'"></div>
        ${msText ? `<p class="gross" style="margin-bottom:0.5em;text-align:center;"><strong>${msText}</strong></p>` : ""}
        <p style="text-align:center;">Du hast „${esc(titel)}“ geübt.</p>
        <div style="display:grid;gap:8px;margin-top:1em;">
          <a href="index.html" class="haupt" style="display:flex;align-items:center;justify-content:center;text-decoration:none;min-height:48px;">${esc(T.fuerHeuteAufhoeren)}</a>
          <a href="index.html#referenz-lernwege" class="zweit" style="display:flex;align-items:center;justify-content:center;text-decoration:none;min-height:48px;">${esc(T.nochEineLage)}</a>
          <button type="button" class="zweit" id="lh-nochmal-btn" style="min-height:48px;">${esc(T.nochmalUeben)}</button>
        </div>
      `;
      $("dzu").style.display = "none";
      D.dialog.showModal();
      const nochmalBtn = W.querySelector("#lh-nochmal-btn");
      if (nochmalBtn) {
        nochmalBtn.onclick = () => {
          $("dzu").style.display = "";
          D.dialog.close();
          z.i = 0; z.v = 0; z.ue = {}; z.markiert = null;
          zeichnen("#lh-h1");
          window.scrollTo(0, 0);
        };
      }
    }

    /* ---------- Größe: einmal für den ganzen Lernweg ----------
       1. Festes Format 9 : 19,5 – darf mit der Schrift wachsen, aber nie höher als der freie Platz.
       2. Ist die Schrift im Handy dann kleiner als gewählt oder passt nicht alles: Handy in Lesegröße. */
    let platzBreite = window.innerWidth;
    function masse() {
      const h = D.handy, st = W.style;
      h.classList.remove("lese");
      st.setProperty("--hw", "100%"); h.style.display = "none";   /* zum Messen: kein altes, breites Handy bläht die Breite auf */
      void W.offsetWidth;
      const rem = schrift();
      /* Eingebettet zählt der Platz, den die Seite lässt: opt.platz() oder die Breite der Wurzel */
      const frei = EIN && typeof opt.platz === "function" ? (opt.platz() || {}) : {};
      const fensterH = frei.hoehe > 0 ? frei.hoehe : window.innerHeight;
      platzBreite = frei.breite > 0 ? frei.breite : (EIN && W.clientWidth > 0 ? W.clientWidth + 24 : window.innerWidth);
      const raum = Math.max(fensterH - D.leiste.offsetHeight - D.unten.offsetHeight - 32, 12 * rem);
      const breite = platzBreite - 24, hoch = raum * 9 / 19.5;
      const basis = Math.floor(Math.max(Math.min((fensterH - 150) * 9 / 19.5, breite, 430), Math.min(250, breite)));
      const w = Math.floor(Math.max(basis, Math.min(basis * rem / 18, hoch, breite)));
      h.style.display = "";
      return { rem, raum, breite, basis, w };
    }
    function setzen(w, hf) {
      const st = W.style;
      handySchrift = hf;
      st.setProperty("--hf", hf.toFixed(2) + "px");
      st.setProperty("--hw", w + "px");
      st.setProperty("--hh", Math.round(w * 19.5 / 9) + "px");
      W.classList.toggle("breit", platzBreite >= w + 16 * schrift() + 80);
    }
    function neuAufbauen() {
      if (entfernt) return;
      const m = masse();
      setzen(m.w, 18 * m.w / m.basis);
      z.lese = zuKlein() || !passtAlles();
      if (z.lese) {
        const w = Math.floor(Math.min(m.breite, 17 * m.rem));
        setzen(w, m.rem);
        W.style.setProperty("--hmin", Math.round(Math.min(w * 19.5 / 9, m.raum)) + "px");
        D.handy.classList.add("lese");
      }
      if (!EIN) document.documentElement.style.scrollPaddingBottom = (D.unten.offsetHeight + 8) + "px";
      zeichnen();
    }
    let warte = 0;
    const beiGroesse = () => {
      if (EIN && !W.isConnected) return;   /* nicht ins Leere zeichnen; wieder eingehängt zeichnet neuAufbauen() oder stufe() */
      cancelAnimationFrame(warte); warte = requestAnimationFrame(neuAufbauen);
    };
    window.addEventListener("resize", beiGroesse);

    /* ---------- Bedienung ---------- */
    function weiter() {
      const { liste } = aktuell;
      if (z.v < liste.length - 1) { z.v++; return zeichnen(liste[z.v]?.sperrt ? "#lh-frage" : "#lh-h1"); }
      if (z.i < SEITEN.length - 1) {
        z.i++; z.v = 0; z.markiert = null; z.ue = {};
        zeichnen("#lh-h1");
        if (!EIN) window.scrollTo(0, 0);
      } else if (EIN) {
        melden("beiEnde");   /* eingebettet: kein eigener Abschluss-Dialog, nichts speichern */
      } else {
        speichereFertig();
        if (typeof opt.beenden === "function") opt.beenden();
        else zeigeAbschluss();
      }
    }
    function mbMelden(handlung, wertung, warBeendet) {
      const info = { schritt: seite().id, handlung, wertung, regel: L.regel || null };
      melden("beiHandlung", { ...info, beendet: !!z.ue.beendet });
      if (!warBeendet && z.ue.beendet) melden("beiAbschluss", info);
    }
    function zurueck() {
      if (aktuell.an.ue && !z.ue.beendet && z.ue.mb && z.ue.mb.r) {
        const smb = z.ue.mb;
        smb.r = null;
        smb.modus = smb.vorherModus || (smb.mailId ? "detail" : "liste");
        return zeichnen();
      }
      if (aktuell.an.ue && !z.ue.beendet && (z.ue.letzte || z.ue.sagenOffen)) { z.ue.letzte = null; z.ue.sagenOffen = false; return zeichnen(); }
      if (z.v > 0) { z.v--; return zeichnen("#lh-h1"); }
      if (z.i > 0) { z.i--; z.v = 99; z.ue = {}; zeichnen("#lh-h1"); }
    }
    function ueTun(k) {
      const s = z.ue; s.an = s.an || {};
      if (k.startsWith("mb-") || k === "zurueckMailbox") {
        const b = seite();
        const szId = (z.ue.mb && z.ue.mb.szenarioId) || (b.handy && b.handy.find(e => e.szenarioId)?.szenarioId) || (typeof L !== "undefined" && (L.szenarioId || L.id)) || "ek-post1";
        const smb = z.ue.mb = z.ue.mb || { szenarioId: szId, ordner: "inbox", mailId: null, modus: "liste", tab: "bausteine", starter: { a: "a1", b: "b1", c: "c1" }, freitext: "", r: null, gesendet: false, absenderOffen: false, linkOffen: false, anhangOffen: false, schreibTyp: "antwort" };
        const mbEl = b.handy && b.handy.find((e) => e.typ === "mailbox");
        const data = holeMbDaten(smb.szenarioId || szId, mbEl);
        const warBeendet = !!z.ue.beendet;

        const activeMail = (data && data.ordner && data.ordner.inbox || []).find((m) => m.id === smb.mailId) || (data && data.ordner && data.ordner.inbox && data.ordner.inbox[0]);
        const dynEmpfaenger = activeMail ? activeMail.von.adresse : (data && data.neuEmpfaenger || "service@lernplattform-post.de");
        const dynBetreff = activeMail ? {
          leicht: `Re: ${typeof activeMail.betreff === "object" ? activeMail.betreff.leicht : activeMail.betreff}`,
          einfach: `Re: ${typeof activeMail.betreff === "object" ? activeMail.betreff.einfach : activeMail.betreff}`,
          standard: `Re: ${typeof activeMail.betreff === "object" ? activeMail.betreff.standard : activeMail.betreff}`
        } : { leicht: "Re: Nachricht", einfach: "Re: Nachricht", standard: "Re: Nachricht" };

        const planeAutoAntwort = (customReply) => {
          const reply = customReply || (data && data.antwort && data.antwort.automatischeAntwort);
          if (!reply) return;
          setTimeout(() => {
            if (!W.isConnected) return;
            data.ordner.inbox = (data.ordner.inbox || []).filter((m) => m.id !== reply.id && !m._autoReply);
            const copy = JSON.parse(JSON.stringify(reply));
            copy._autoReply = true;
            data.ordner.inbox.unshift(copy);
            if (!smb.r && smb.modus === "liste" && smb.ordner === "inbox") zeichnen();
          }, 1500);
        };

        if (k.startsWith("mb-wechsel-")) {
          const zielSz = k.replace("mb-wechsel-", "");
          smb.szenarioId = zielSz;
          smb.ordner = "inbox";
          smb.modus = "liste";
          smb.mailId = null;
          smb.r = null;
          smb.absenderOffen = false;
          smb.linkOffen = false;
          smb.anhangOffen = false;
          return zeichnen();
        }

        if (k === "mb-ordner-inbox") { smb.ordner = "inbox"; smb.modus = "liste"; smb.mailId = null; return zeichnen(); }
        if (k === "mb-ordner-sent") { smb.ordner = "sent"; smb.modus = "liste"; smb.mailId = null; return zeichnen(); }
        if (k === "mb-ordner-trash") { smb.ordner = "trash"; smb.modus = "liste"; smb.mailId = null; return zeichnen(); }
        if (k.startsWith("mb-mail-")) { smb.mailId = k.replace("mb-mail-", ""); smb.modus = "detail"; smb.absenderOffen = false; smb.linkOffen = false; smb.anhangOffen = false; return zeichnen(); }
        if (k === "mb-zurueck-liste") { smb.modus = "liste"; smb.mailId = null; smb.absenderOffen = false; smb.linkOffen = false; smb.anhangOffen = false; return zeichnen(); }
        if (k === "mb-pruefe-absender") { smb.absenderOffen = !smb.absenderOffen; return zeichnen(); }
        if (k === "mb-link-pruefen") { smb.linkOffen = !smb.linkOffen; return zeichnen(); }
        if (k === "mb-anhang-pruefen") { smb.anhangOffen = !smb.anhangOffen; return zeichnen(); }

        if (k === "mb-neu") {
          smb.modus = "schreiben";
          smb.schreibTyp = "neu";
          smb.mailId = null;
          smb.tab = smb.tab || "bausteine";
          return zeichnen();
        }

        if (k === "mb-vorlesen-detail" && data) {
          const curMail = (data.ordner[smb.ordner] || []).find((m) => m.id === smb.mailId) || (data.ordner.inbox || [])[0];
          /* gemeinsamer Vorlese-Ablauf: nur Gerätestimme, sonst Hinweis (§14) */
          if (curMail) vorlesenStart(`Von ${curMail.von.name}. Betreff: ${t(curMail.betreff)}. Nachricht: ${t(curMail.text)}`);
          return;
        }

        if (k === "mb-gefahr-melden" && data) {
          const mIdx = (data.ordner[smb.ordner] || []).findIndex(m => m.id === smb.mailId);
          if (mIdx !== -1) {
            const m = data.ordner[smb.ordner].splice(mIdx, 1)[0];
            data.ordner.trash = data.ordner.trash || [];
            data.ordner.trash.push(m);
          }
          z.ue.beendet = true;
          smb.mailId = null;
          smb.modus = "liste";
          const meldung = data.gefahrAktionen && data.gefahrAktionen.melden;
          const w = (meldung && meldung.wertung) || "passend";
          if (meldung) {
            smb.r = { wertung: w, text: meldung.rueckmeldung };
            zeichnen("#lh-rkopf");
          } else {
            zeichnen();
          }
          mbMelden(k, w, warBeendet);
          return;
        }

        if (k === "mb-gefahr-loeschen" && data) {
          const mIdx = (data.ordner[smb.ordner] || []).findIndex(m => m.id === smb.mailId);
          if (mIdx !== -1) {
            const m = data.ordner[smb.ordner].splice(mIdx, 1)[0];
            data.ordner.trash = data.ordner.trash || [];
            data.ordner.trash.push(m);
          }
          z.ue.beendet = true;
          smb.mailId = null;
          smb.modus = "liste";
          const loesch = data.gefahrAktionen && data.gefahrAktionen.loeschen;
          const w = (loesch && loesch.wertung) || "passend";
          if (loesch) {
            smb.r = { wertung: w, text: loesch.rueckmeldung };
            zeichnen("#lh-rkopf");
          } else {
            zeichnen();
          }
          mbMelden(k, w, warBeendet);
          return;
        }

        if (k === "mb-gefahr-antworten" && data) {
          if (data.gefahrAktionen && data.gefahrAktionen.antworten) {
            const w = data.gefahrAktionen.antworten.wertung || "unpassend";
            smb.vorherModus = smb.modus;
            smb.r = { wertung: w, text: data.gefahrAktionen.antworten.rueckmeldung };
            zeichnen("#lh-rkopf");
            mbMelden(k, w, warBeendet);
            return;
          }
        }

        if (k === "mb-link-klick" && data) {
          if (data.gefahrAktionen && data.gefahrAktionen.linkKlick) {
            const w = data.gefahrAktionen.linkKlick.wertung || "unpassend";
            smb.vorherModus = smb.modus;
            smb.r = { wertung: w, text: data.gefahrAktionen.linkKlick.rueckmeldung };
            zeichnen("#lh-rkopf");
            mbMelden(k, w, warBeendet);
            return;
          }
        }

        if (k === "mb-anhang-klick" && data) {
          if (data.gefahrAktionen && data.gefahrAktionen.anhangKlick) {
            const w = data.gefahrAktionen.anhangKlick.wertung || "unpassend";
            smb.vorherModus = smb.modus;
            smb.r = { wertung: w, text: data.gefahrAktionen.anhangKlick.rueckmeldung };
            zeichnen("#lh-rkopf");
            mbMelden(k, w, warBeendet);
            return;
          }
        }

        if (k === "mb-antworten") { smb.modus = "schreiben"; smb.schreibTyp = "antwort"; smb.tab = smb.tab || "bausteine"; return zeichnen(); }
        if (k === "mb-loeschen" && smb.mailId && data) {
          const mIdx = (data.ordner[smb.ordner] || []).findIndex(m => m.id === smb.mailId);
          if (mIdx !== -1) {
            const m = data.ordner[smb.ordner].splice(mIdx, 1)[0];
            data.ordner.trash = data.ordner.trash || [];
            data.ordner.trash.push(m);
          }
          smb.mailId = null; smb.modus = "liste"; return zeichnen();
        }
        if (k === "mb-tab-bausteine") { smb.tab = "bausteine"; return zeichnen(); }
        if (k === "mb-tab-satzstarter") { smb.tab = "satzstarter"; return zeichnen(); }
        if (k === "mb-tab-freitext") { smb.tab = "freitext"; return zeichnen(); }
        if (k.startsWith("mb-starter-a-")) { smb.starter.a = k.replace("mb-starter-a-", ""); return zeichnen(); }
        if (k.startsWith("mb-starter-b-")) { smb.starter.b = k.replace("mb-starter-b-", ""); return zeichnen(); }
        if (k.startsWith("mb-starter-c-")) { smb.starter.c = k.replace("mb-starter-c-", ""); return zeichnen(); }

        if (k.startsWith("mb-baustein-") && data) {
          const bId = k.replace("mb-baustein-", "");
          const bObj = data.antwort.bausteine.find(x => x.id === bId);
          if (bObj) {
            if (bObj.wertung === "passend" || bObj.wertung === "gleichwertig" || bObj.wertung === "auchMoeglich" || bObj.wertung === "eigene") {
              z.ue.beendet = true;
              data.ordner.sent.push({ id: "mail-alex-gesendet-" + Date.now(), von: { name: "Alex", adresse: "alex@meine-mail.de" }, an: dynEmpfaenger, datum: "Gerade eben", gelesen: true, betreff: dynBetreff, text: bObj.text });
              planeAutoAntwort(bObj.automatischeAntwort);
            }
            smb.vorherModus = smb.modus;
            smb.r = { wertung: bObj.wertung, kopf: bObj.kopf, text: bObj.rueckmeldung, erfolg: bObj.erfolg, erfolgTun: bObj.erfolgTun, erfolgReaktion: bObj.erfolgReaktion, deine: bObj.text };
            zeichnen("#lh-rkopf");
            mbMelden(k, bObj.wertung, warBeendet);
            return;
          }
        }

        if (k === "mb-starter-senden" && data && data.antwort && data.antwort.satzstarter) {
          const starter = data.antwort.satzstarter;
          const stB = starter.anliegen.find((x) => x.id === smb.starter.b) || starter.anliegen[0];
          const selA = starter.anrede.find((x) => x.id === smb.starter.a) || starter.anrede[0];
          const selB = stB;
          const selC = starter.abschluss.find((x) => x.id === smb.starter.c) || starter.abschluss[0];
          const ganz = { leicht: `${selA.text.leicht} ${selB.text.leicht} ${selC.text.leicht}`, einfach: `${selA.text.einfach} ${selB.text.einfach} ${selC.text.einfach}`, standard: `${selA.text.standard} ${selB.text.standard} ${selC.text.standard}` };
          const w = (stB && (stB.wertung || (stB.hatNummer ? "passend" : "unpassend"))) || "unpassend";
          const passendB = (data.antwort.bausteine || []).find((x) => x.wertung === "passend") || data.antwort.bausteine[0];
          const unpassendB = (data.antwort.bausteine || []).find((x) => x.wertung === "unpassend") || data.antwort.bausteine[1] || data.antwort.bausteine[0];
          const fbText = (stB && stB.rueckmeldung) || (w === "unpassend" ? unpassendB.rueckmeldung : passendB.rueckmeldung);
          const fbKopf = (stB && stB.kopf) || (w === "unpassend" ? unpassendB.kopf : passendB.kopf);
          const fbErfolg = (stB && stB.erfolg) || (w !== "unpassend" ? passendB.erfolg : null);
          if (w === "passend" || w === "gleichwertig" || w === "auchMoeglich" || w === "eigene") {
            z.ue.beendet = true;
            data.ordner.sent.push({ id: "mail-alex-gesendet-" + Date.now(), von: { name: "Alex", adresse: "alex@meine-mail.de" }, an: dynEmpfaenger, datum: "Gerade eben", gelesen: true, betreff: dynBetreff, text: ganz });
            planeAutoAntwort(stB && stB.automatischeAntwort);
          } else {
            smb.vorherModus = smb.modus;
          }
          smb.r = { wertung: w, kopf: fbKopf, text: fbText, erfolg: fbErfolg, deine: ganz };
          zeichnen("#lh-rkopf");
          mbMelden(k, w, warBeendet);
          return;
        }

        if (k === "mb-freitext-senden") {
          const ta = document.getElementById("lhMailFreitext");
          smb.freitext = ta ? ta.value.trim() : (smb.freitext || "");
          smb.modus = "reflexion";
          return zeichnen();
        }

        if (k === "mb-vorlesen-freitext") {
          const ta = document.getElementById("lhMailFreitext");
          const txt = ta ? ta.value.trim() : (smb.freitext || "");
          /* gemeinsamer Vorlese-Ablauf: der selbst geschriebene Text geht nur an die Gerätestimme (§14) */
          vorlesenStart(txt);
          return;
        }

        if (k === "mb-bearbeiten") {
          smb.modus = "schreiben";
          return zeichnen();
        }

        if (k === "mb-reflexion-fertig") {
          z.ue.beendet = true;
          if (data) {
            data.ordner.sent.push({ id: "mail-alex-gesendet-" + Date.now(), von: { name: "Alex", adresse: "alex@meine-mail.de" }, an: dynEmpfaenger, datum: "Gerade eben", gelesen: true, betreff: dynBetreff, text: smb.freitext });
            planeAutoAntwort();
          }
          const reflFb = (data.reflexionRueckmeldung) || {
            leicht: "Du hast deine E-Mail geprüft. Du hast dein Anliegen sachlich erklärt.",
            einfach: "Du hast deine E-Mail anhand der Kriterien geprüft. Deine sachliche Formulierung ist der richtige Weg.",
            standard: "Du hast deine Nachricht anhand der Checkliste reflektiert. Die sachliche Klärung wahrt deine Interessen und Rechte."
          };
          smb.r = { wertung: "passend", text: reflFb, deine: smb.freitext };
          zeichnen("#lh-rkopf");
          mbMelden(k, "passend", warBeendet);
          return;
        }

        if (k === "zurueckMailbox") {
          smb.r = null;
          smb.modus = z.ue.beendet ? "liste" : (smb.vorherModus || (smb.mailId ? "detail" : "liste"));
          return zeichnen();
        }
      }
      if (k === "perspektiveFremd") { s.an["fremdSicht"] = true; return zeichnen("[data-tun='perspektiveFremd']"); }
      if (k === "perspektiveEigen") { s.an["fremdSicht"] = false; return zeichnen("[data-tun='perspektiveEigen']"); }
      const U = seite().uebung;
      if (!U) return;
      if (k === "sagen") { s.sagenOffen = true; return zeichnen("#lh-sagen"); }
      if (k === "sagenZu" || k === "zurueckAnruf" || k === "zurueckUebung") {
        s.letzte = null; s.sagenOffen = false;
        return zeichnen(".chat-knoepfe button, .anruf-knoepfe button, .lh-schalter-knopf, .lh-video-knopf, .lh-shop-knopf, .lh-profil-knopf");
      }
      if (!U.handlungen || !U.handlungen[k]) return;
      const warBeendet = !!s.beendet;
      if (UMSCHALTER.includes(k) || k.startsWith("schalter") || k === "pauseTimer" || k === "kontoPrivat" || k === "geistermodus") {
        s.an[k] = !s.an[k];
      }
      if (!(U.handlungen[k].folgeknoepfe && U.handlungen[k].folgeknoepfe.length) && (k === U.ende || U.handlungen[k].wertung === "passend" || U.handlungen[k].wertung === "gleichwertig" || U.handlungen[k].wertung === "auchMoeglich" || U.handlungen[k].wertung === "eigene")) {
        s.beendet = true;
      }
      if (U.danach && k === U.danach.handlung) s.danach = true;
      s.sagenOffen = false; s.letzte = k;
      zeichnen("#lh-rkopf");
      const info = { schritt: seite().id, handlung: k, wertung: U.handlungen[k].wertung, regel: L.regel || null };
      melden("beiHandlung", { ...info, beendet: !!s.beendet });
      if (!warBeendet && s.beendet) melden("beiAbschluss", info);
    }
    W.addEventListener("click", (e) => {
      if (e.target.closest("#lh-nehmen") && z.markiert != null) {
        z.wahl[seite().id] = z.markiert;
        z.markiert = null; z.v++; return zeichnen("#lh-rkopf");
      }
      const tun = e.target.closest("[data-tun]");
      if (!tun) return;
      const k = tun.dataset.tun, b = seite();
      if (k === "nochmal") { delete z.wahl[b.id]; z.markiert = null; z.v--; return zeichnen("#lh-frage"); }
      if (k === "vorbild") { const vb = vorbildVon(b.nachFehler.vorbild); return dialogZeigen(vb.titel, `<div class="lh-dialog-figur"><img src="${ctx.bilder}figures/vormachen-${vb.wer}.webp" alt="${vb.wer === 'tilda' ? 'Tilda' : 'Alex'} macht es vor" width="72" height="72" onerror="this.src='${ctx.bilder}figures/vormachen-${vb.wer}.webp'"></div><p>${tx(vb.seite.lernbereich && vb.seite.lernbereich.text)}</p>`); }
      const istUebungHandlung = Boolean(b.uebung && b.uebung.handlungen && b.uebung.handlungen[k]);
      if (istUebungHandlung && global.SoLerneIch && typeof global.SoLerneIch.getState === "function") {
        const sli = global.SoLerneIch.getState();
        if (sli.zweiTapAktiv && !sli.screenreader && !global.SoLerneIch.pruefeZweiTap("lh:" + b.id + ":" + k, tun.innerText.trim())) {
          W.querySelectorAll(".sli-two-tap-pending").forEach((el) => el.classList.remove("sli-two-tap-pending"));
          tun.classList.add("sli-two-tap-pending");
          return;
        }
        W.querySelectorAll(".sli-two-tap-pending").forEach((el) => el.classList.remove("sli-two-tap-pending"));
      }
      ueTun(k);
    });
    W.addEventListener("change", (e) => {
      if (e.target.name !== "lh-wahl") return;
      z.markiert = Number(e.target.value);
      q("#lh-nehmen").disabled = false;   /* kein Neuzeichnen: Auswahl und Tastaturfokus bleiben */
      const sli = global.SoLerneIch && typeof global.SoLerneIch.getState === "function" ? global.SoLerneIch.getState() : null;
      const b = seite();
      const ant = b && b.aufgabe && b.aufgabe.antworten && b.aufgabe.antworten[z.markiert];
      if (ant && sli && (sli.zugang === "hoeren" || sli.zugang === "beides" || sli.zweiTapAktiv) && !sli.screenreader) {
        if (stimmeDesGeraets()) vorlesenStart(tx(ant.text));
      }
    });
    D.weiter.addEventListener("click", weiter);
    D.zurueck.addEventListener("click", zurueck);
    $("beenden").addEventListener("click", () => {
      $("dtitel").textContent = "Lernweg beenden?";
      $("dtext").innerHTML = `
        <p>Du kannst später jederzeit weitermachen oder neu starten.</p>
        <div style="display:grid;gap:8px;margin-top:1em;">
          <a href="index.html" class="haupt" style="display:flex;align-items:center;justify-content:center;text-decoration:none;min-height:48px;">Zur Themen-Übersicht</a>
          <a href="../zugang.html" class="zweit" style="display:flex;align-items:center;justify-content:center;text-decoration:none;min-height:48px;">Zur Startseite</a>
          <button type="button" class="zweit" id="lh-weiterlernen-btn" style="min-height:48px;">Hier weitermachen</button>
        </div>
      `;
      $("dzu").style.display = "none";
      D.dialog.showModal();
      const weiterBtn = W.querySelector("#lh-weiterlernen-btn");
      if (weiterBtn) {
        weiterBtn.onclick = () => {
          $("dzu").style.display = "";
          D.dialog.close();
        };
      }
    });
    /* Dialog zeigen: „Schließen“ ist immer sichtbar (der Beenden-Dialog blendet es aus). Ein offener Dialog wird
       nur neu gefüllt. Beim Schließen geht der Fokus zurück an die Stelle, von der der Dialog kam. */
    let dialogRueck = null;
    function dialogZeigen(titel, html) {
      $("dtitel").textContent = titel;
      $("dtext").innerHTML = html;
      $("dzu").style.display = "";
      if (D.dialog.open) return;
      dialogRueck = document.activeElement;
      try {
        if (typeof D.dialog.showModal === "function") D.dialog.showModal();
        else D.dialog.setAttribute("open", "");
      } catch (e) { D.dialog.setAttribute("open", ""); }
    }
    D.dialog.addEventListener("close", () => {
      $("dzu").style.display = "";   /* auch nach Escape: der nächste Dialog hat wieder „Schließen“ */
      const ziel = dialogRueck;
      dialogRueck = null;
      if (ziel && ziel.isConnected && typeof ziel.focus === "function") ziel.focus();
    });
    $("hilfe").addEventListener("click", () => {
      const h = seite().hilfe || {}, ms = SEITEN.find((x) => x.art === "merksatz");
      dialogZeigen(T.hilfe, `<div class="lh-dialog-figur"><img src="${ctx.bilder}figures/alex-tilda-hilfe.webp" alt="Alex und Tilda helfen dir weiter" width="72" height="72" onerror="this.src='${ctx.bilder}figures/alex-tilda-hilfe.webp'"></div>` + (h.tipp ? `<p>${tx(h.tipp)}</p>` : "") + (ms ? `<p><strong>${esc(T.merksatzAnsehen)}:</strong> ${tx(ms.lernbereich.text)}</p>` : "") + `<button type="button" class="zweit" data-einst="oeffnen">${esc(EINST.titel)}</button>`);
      $("dzu").focus();   /* wie bisher: Der Fokus liegt beim Öffnen der Hilfe auf „Schließen“ */
    });

    /* Einstellungen im Lernweg (12.11.2026): Sprache und Schriftgröße sind über „Hilfe“ erreichbar, wie im
       Lernmodus der Lern-App (§9). Bedienwörter wie dort. Nichts wird gespeichert: Die Wahl gilt, solange
       die Seite offen ist. Vorher gab es beides nur in der Entwickler-Leiste der Vorschau. */
    const EINST = {
      titel: "Einstellungen", sprache: "Sprache", schrift: "Schriftgröße", kleiner: "A– kleiner", groesser: "A+ größer",
      stufen: { leicht: "Leichte Sprache", einfach: "Einfache Sprache", standard: "Alltagssprache" }
    };
    const SCHRIFT_STUFEN = [18, 21, 24];   /* px; die Grundschrift der Seite ist 18px */
    const SLI_SCHRIFT_NAMEN = ["normal", "gross", "sehr-gross"];
    function schriftStufe() {
      if (!document.documentElement.style.fontSize && global.SoLerneIch && typeof global.SoLerneIch.getState === "function") {
        const sIdx = SLI_SCHRIFT_NAMEN.indexOf(global.SoLerneIch.getState().schrift);
        if (sIdx >= 0) return sIdx;
      }
      const px = parseFloat(global.getComputedStyle(document.documentElement).fontSize) || SCHRIFT_STUFEN[0];
      let n = 0;
      SCHRIFT_STUFEN.forEach((s, i) => { if (px >= s - 0.5) n = i; });
      return n;
    }
    function einstellungenZeigen(fokus) {
      const n = schriftStufe(), max = SCHRIFT_STUFEN.length - 1;
      dialogZeigen(EINST.titel, `<div class="lh-einst">
        <h3>${esc(EINST.sprache)}</h3>
        <div class="lh-einst-gruppe" role="group" aria-label="${esc(EINST.sprache)}">${STUFEN.map((s) => `<button type="button" class="zweit" data-einst="stufe-${s}" aria-pressed="${ctx.stufe === s}">${ctx.stufe === s ? `<span aria-hidden="true">✓ </span>` : ""}${esc(EINST.stufen[s])}</button>`).join("")}</div>
        <h3>${esc(EINST.schrift)}</h3>
        <div class="lh-einst-gruppe lh-einst-reihe" role="group" aria-label="${esc(EINST.schrift)}"><button type="button" class="zweit" data-einst="kleiner"${n === 0 ? " disabled" : ""}>${esc(EINST.kleiner)}</button><button type="button" class="zweit" data-einst="groesser"${n === max ? " disabled" : ""}>${esc(EINST.groesser)}</button></div>
        <div class="lh-einst-gruppe" style="margin-top:12px;"><button type="button" class="zweit" data-sli-open="1" style="min-height:44px;">Weitere Lern-Einstellungen (So lerne ich)</button></div>
      </div>`);
      /* Fokus bleibt auf dem gewählten Knopf; ist er jetzt gesperrt, auf dem anderen Schrift-Knopf */
      const ziel = D.dialog.querySelector(`[data-einst="${fokus}"]:not([disabled])`) || D.dialog.querySelector(`.lh-einst-reihe [data-einst]:not([disabled])`) || $("dzu");
      if (ziel && typeof ziel.focus === "function") ziel.focus();
    }
    D.dialog.addEventListener("click", (e) => {
      const sliBtn = e.target && e.target.closest ? e.target.closest("[data-sli-open]") : null;
      if (sliBtn && global.SoLerneIch && typeof global.SoLerneIch.oeffnen === "function") {
        $("dzu").style.display = "";
        if (typeof D.dialog.close === "function") D.dialog.close();
        else D.dialog.removeAttribute("open");
        global.SoLerneIch.oeffnen($("hilfe"));
        return;
      }
      const k = e.target && e.target.closest ? e.target.closest("[data-einst]") : null;
      if (!k || k.disabled) return;
      const a = k.dataset.einst;
      if (a === "oeffnen") return einstellungenZeigen("stufe-" + ctx.stufe);
      if (a.startsWith("stufe-")) {
        const s = a.slice(6);
        if (STUFEN.includes(s) && s !== ctx.stufe) { ctx.stufe = s; neuAufbauen(); }
        if (global.SoLerneIch && typeof global.SoLerneIch.setField === "function") {
          global.SoLerneIch.setField("sprache", s === "standard" ? "alltag" : s, true);
        }
        return einstellungenZeigen(a);
      }
      const n = Math.max(0, Math.min(SCHRIFT_STUFEN.length - 1, schriftStufe() + (a === "groesser" ? 1 : -1)));
      if (global.SoLerneIch && typeof global.SoLerneIch.setField === "function") {
        global.SoLerneIch.setField("schrift", SLI_SCHRIFT_NAMEN[n] || "normal", true);
      } else {
        document.documentElement.style.fontSize = SCHRIFT_STUFEN[n] + "px";
      }
      neuAufbauen();
      einstellungenZeigen(a);
    });
    $("dzu").addEventListener("click", () => {
      $("dzu").style.display = "";
      if (typeof D.dialog.close === "function") D.dialog.close();
      else D.dialog.removeAttribute("open");
    });

    /* Vorlesen (§14): nur mit einer deutschen Stimme des Geräts, wie lokaleStimme() in app.js. Ohne sie wird
       nichts vorgelesen und ein Hinweis erscheint. Kein automatischer Neustart. Ein Ablauf für alle
       Vorlese-Knöpfe: Der Knopf oben zeigt, dass vorgelesen wird, und stoppt.
       Reihenfolge: erst Lernbereich, dann Handy; zugeklappte Teile nicht */
    const VORLESE_HINWEIS = {   /* wortgleich mit VORLESE_HINWEIS in app.js */
      fehlend: "Vorlesen braucht eine deutsche Stimme auf diesem Gerät. Du kannst sie in den Geräte-Einstellungen hinzufügen.",
      wartend: "Vorlesen ist gerade nicht verfügbar. Tippe später noch einmal auf Vorlesen.",
      nichtUnterstuetzt: "Vorlesen geht auf diesem Gerät nicht."
    };
    function stimmenListe() { try { return Array.from(global.speechSynthesis.getVoices() || []); } catch (e) { return []; } }
    function stimmeDesGeraets() {
      const lokal = stimmenListe().filter((v) => v && /^de([-_]|$)/i.test(v.lang || "") && v.localService === true);
      return lokal.find((v) => v.default) || lokal.find((v) => /^de[-_]DE$/i.test(v.lang)) || lokal[0] || null;
    }
    function vorleseHinweis(text) { dialogZeigen(T.vorlesen, `<p>${esc(text)}</p>`); }
    /* Stimmen vorladen */
    if (global.speechSynthesis) stimmenListe();
    let liest = false, leseNr = 0;   /* leseNr macht Ereignisse eines alten Vorlese-Ablaufs ungültig */
    let autoLeseTimer = 0, letzterAutoLeseKey = "", stimmeFehltGemeldet = false;
    function vorlesenStopp() {
      leseNr++;
      /* Eingebettet liest die Seite vor: Der Baustein bricht dann nur sein eigenes Vorlesen ab, nie das der Seite */
      if (global.speechSynthesis && (!EIN || liest)) { try { global.speechSynthesis.cancel(); } catch (e) { /* nicht verfügbar */ } }
      liest = false;
      D.vorlesen.setAttribute("aria-pressed", "false");
    }
    function vorlesenStart(text) {
      vorlesenStopp();
      const inhalt = String(text || "").trim();
      if (!inhalt) return false;
      if (!global.speechSynthesis || typeof global.speechSynthesis.speak !== "function" || typeof global.SpeechSynthesisUtterance !== "function") {
        vorleseHinweis(VORLESE_HINWEIS.nichtUnterstuetzt);
        return false;
      }
      const stimme = stimmeDesGeraets();
      if (!stimme) { vorleseHinweis(stimmenListe().length ? VORLESE_HINWEIS.fehlend : VORLESE_HINWEIS.wartend); return false; }
      const nr = leseNr;
      try {
        const u = new global.SpeechSynthesisUtterance(inhalt);
        u.voice = stimme;
        u.lang = "de-DE";
        u.onend = () => { if (nr === leseNr) vorlesenStopp(); };
        u.onerror = (e) => {
          if (nr !== leseNr) return;
          vorlesenStopp();
          if (!e || (e.error !== "canceled" && e.error !== "interrupted")) vorleseHinweis(VORLESE_HINWEIS.wartend);
        };
        liest = true;
        D.vorlesen.setAttribute("aria-pressed", "true");
        global.speechSynthesis.speak(u);
      } catch (e) {
        vorlesenStopp();
        vorleseHinweis(VORLESE_HINWEIS.wartend);
        return false;
      }
      return true;
    }
    D.vorlesen.addEventListener("click", () => { if (liest) return vorlesenStopp(); vorlesenStart(vorleseText()); });
    function vorleseText() {
      let lern = D.lern.innerText;
      D.lern.querySelectorAll("details:not([open]) > summary").forEach((s) => { lern = lern.replace(s.innerText, ""); });
      return `${lern.trim()}\n${D.display.innerText}`;
    }

    /* Aufräumen, wenn die Seite den Baustein verlässt: Vorlesen stoppen, Lauscher lösen, Wurzel leeren.
       Nimmt die Seite die Wurzel nur kurz aus dem Dokument, bleibt der Stand erhalten (kein Aufräumen von selbst). */
    const pkAbmelden = !EIN && pkDa() ? global.PK.beiAenderung(info => {
      if (entfernt) return;
      if (info.speicherStatus) speicherMeldung.textContent = global.PK.TEXTE[info.speicherStatus];
      if (info.speicherFehler) speicherMeldung.textContent = global.PK.TEXTE.gast;
      if (!speicherBereit) return;
      const h = lernstandHolen();
      const aktuellProfil = h ? global.PK.stempel(h.id) : null;
      if (profilStand === aktuellProfil && !info.widerruf && !info.generationGewechselt && !info.loeschfehler) return;
      profilStand = aktuellProfil;
      zuletztGemerkt = null;
      speichernBeimZeichnen = false;
      vorlesenStopp();
      if (D.dialog.open && typeof D.dialog.close === "function") D.dialog.close();
      Object.assign(z, { i: 0, v: 0, markiert: null, wahl: {}, ue: {} });
      zeichnen();
      speichernBeimZeichnen = true;
    }) : null;

    function entfernen() {
      if (entfernt) return;
      if (pkAbmelden) pkAbmelden();
      speicherMeldung.remove();
      clearTimeout(autoLeseTimer);
      vorlesenStopp();
      entfernt = true;
      cancelAnimationFrame(warte);
      window.removeEventListener("resize", beiGroesse);
      if (D.dialog.open && typeof D.dialog.close === "function") D.dialog.close();
      W.innerHTML = "";
      delete W.dataset.art;
      delete W.dataset.ansicht;
      W.classList.remove("lh", "eingebettet", "farben-seite", "breit");
    }

    neuAufbauen();
    if (!EIN && pkDa()) global.PK.bereit.then(() => {
      if (entfernt) return;
      const h = lernstandHolen();
      profilStand = h ? global.PK.stempel(h.id) : null;
      if (global.PK.zustand().status === "gast") speicherMeldung.textContent = global.PK.TEXTE.gast;
      const eintrag = h && typeof opt.schritt !== "number" && !opt.neustart ? global.PK.handyLesen(h.id, L.id) : null;
      if (eintrag && !eintrag.abgeschlossen && eintrag.i > 0 && eintrag.i < SEITEN.length) {
        z.i = eintrag.i;
        zeichnen();
      }
      speicherBereit = true;
    });
    document.fonts && document.fonts.ready.then(neuAufbauen);

    return {
      schritte: SEITEN.map((b) => ({ id: b.id, art: b.art })),
      stufe(s) { if (!STUFEN.includes(s)) return; ctx.stufe = s; neuAufbauen(); },
      neuAufbauen,
      springen(i) { Object.assign(z, { i, v: 0, markiert: null, ue: {} }); zeichnen("#lh-h1"); },
      zustand: () => ({ i: z.i, v: z.v, lese: z.lese, stufe: ctx.stufe }),
      vorleseText,
      /* Für die eingebettete Betriebsart: Die Seite hat die Knöpfe, der Baustein die Funktionen */
      weiter, zurueck, vorlesenStopp,
      /* Hilfe als Text in der aktuellen Sprachstufe, damit die Seite sie in ihrer eigenen Hilfe zeigt */
      hilfe() {
        const alsText = (x) => { const v = t(x); return Array.isArray(v) ? v.filter(Boolean).join(" ") : (v || ""); };
        const h = seite().hilfe || {}, ms = ALLE.find((x) => x.art === "merksatz");
        return { tipp: h.tipp ? alsText(h.tipp) : "", merksatz: ms && ms.lernbereich ? alsText(ms.lernbereich.text) : "" };
      },
      entfernen
    };
  }

  /* ================= 3. Prüfen eines Lernwegs =================
     Gibt eine Liste { stufe: "fehler" | "hinweis", schritt, meldung } zurück.
     Fehler: der Lernweg läuft so nicht. Hinweis: läuft, aber eine Sprachstufe fehlt o. Ä. */
  const ARTEN = ["situation", "vorbild", "entscheidung", "merksatz", "uebung", "erinnern", "transfer"];
  const INHALTE = {
    anruf: ["von"],
    sms: ["text"],
    email: ["text"],
    chat: ["von", "text"],
    webseite: ["titel"],
    notiz: ["satz"],
    kontakt: ["name", "nummer"],
    schalter: ["titel"],
    video: ["titel"],
    shop: ["name"],
    profil: ["name"],
    berechtigung: ["app"],
    perspektive: ["titel"],
    mailbox: []
  };
  const WERTUNGEN = ["passend", "gleichwertig", "auchMoeglich", "unpassend", "eigene", "meinung"];
  const ANRUF_KNOEPFE = ["auflegen", "lautsprecher", "tastatur", "stumm"];
  function pruefen(lw, regeln) {
    const m = [];
    const f = (schritt, meldung) => m.push({ stufe: "fehler", schritt, meldung });
    const h = (schritt, meldung) => m.push({ stufe: "hinweis", schritt, meldung });
    /* Lerninhalt: Text in drei Stufen. Eine einfache Zeichenkette gilt für alle Stufen (z. B. gezeigte Namen und Nachrichten) */
    const text = (x, id, wo, pflicht = true) => {
      if (x == null || x === "") { if (pflicht) f(id, `${wo} fehlt`); return; }
      if (typeof x === "string") return;
      if (typeof x !== "object" || Array.isArray(x)) return f(id, `${wo}: kein Text`);
      /* D7: "" heißt „in dieser Stufe bewusst kein Text“ (z. B. keine Lage, weil die Frage in Leichter Sprache nur ein Satz ist); fehlt nur, wenn alle Stufen leer sind */
      const leer = STUFEN.every((s) => x[s] == null || x[s] === "");
      const fehlt = STUFEN.filter((s) => x[s] == null || (leer && x[s] === "") || (Array.isArray(x[s]) && !x[s].length));
      if (fehlt.includes("leicht")) f(id, `${wo}: Leichte Sprache fehlt`);
      else if (fehlt.length) h(id, `${wo}: ${fehlt.join(", ")} fehlt – es wird Leichte Sprache gezeigt`);
    };
    if (!lw || lw.format !== FORMAT) { f("–", `format muss "${FORMAT}" sein`); return m; }
    if (!lw.id) f("–", "id fehlt");
    text(lw.titel, "–", "titel");
    if (lw.regel && regeln && !regeln.some((r) => r.id === lw.regel)) f("–", `Regel "${lw.regel}" gibt es nicht in regeln-de.js`);
    if (!Array.isArray(lw.schritte) || !lw.schritte.length) { f("–", "schritte fehlen"); return m; }
    const ids = new Set();
    for (const s of lw.schritte) {
      const id = s.id || "?";
      if (!s.id) f(id, "id fehlt"); else if (ids.has(s.id)) f(id, "id doppelt"); else ids.add(s.id);
      if (!ARTEN.includes(s.art)) { f(id, `art "${s.art}" unbekannt (erlaubt: ${ARTEN.join(", ")})`); continue; }
      const lb = s.lernbereich || {};
      if (lb.text != null) text(lb.text, id, "lernbereich.text");
      (lb.texte || []).forEach((x, n) => text(x, id, `lernbereich.texte[${n}]`));
      if (lb.hinweis != null) text(lb.hinweis, id, "lernbereich.hinweis");
      if (lb.gehoert != null) text(lb.gehoert, id, "lernbereich.gehoert");
      if (lb.etikett && !["tilda", "alex", "uebung"].includes(lb.etikett)) f(id, `etikett "${lb.etikett}" unbekannt`);
      if (lb.regel === true && !lw.regel) f(id, "lernbereich.regel braucht lernweg.regel");
      if (typeof lb.regel === "string" && regeln && !regeln.some((r) => r.id === lb.regel)) f(id, `Regel "${lb.regel}" gibt es nicht in regeln-de.js`);
      if (s.teil != null) text(s.teil, id, "teil");
      if (lb.aufklappen) { if (!AUFKLAPPEN[lb.aufklappen.titel]) h(id, `aufklappen.titel "${lb.aufklappen.titel}" ist kein bekannter Bedientext`); text(lb.aufklappen.liste, id, "aufklappen.liste"); }
      if (!Array.isArray(s.handy) || !s.handy.length) f(id, "handy: mindestens ein Inhalt nötig");
      (s.handy || []).forEach((el, n) => {
        if (!INHALTE[el.typ]) return f(id, `handy[${n}]: typ "${el.typ}" unbekannt (erlaubt: ${Object.keys(INHALTE).join(", ")})`);
        INHALTE[el.typ].forEach((k) => text(el[k], id, `handy[${n}].${k}`));
        (el.knoepfe || []).forEach((k) => {
          const kid = typeof k === "string" ? k : k.id;
          if (el.typ === "anruf" && !ANRUF_KNOEPFE.includes(kid)) f(id, `handy[${n}]: Knopf "${kid}" unbekannt`);
        });
      });
      if (s.art === "vorbild" && !["tilda", "alex"].includes(lb.etikett)) f(id, "vorbild braucht lernbereich.etikett tilda oder alex");
      if (s.art === "merksatz" && !lb.text) f(id, "merksatz braucht lernbereich.text (den Merksatz)");
      if (s.art === "entscheidung") {
        const a = s.aufgabe;
        if (!a) { f(id, "aufgabe fehlt"); continue; }
        text(a.frage, id, "aufgabe.frage");
        /* Darstellungsregel 2 (DARSTELLUNG.md): Im Handy steht nur die eigentliche Frage, die Lage steht daneben */
        const fr = a.frage && typeof a.frage === "object" ? STUFEN.map((s) => a.frage[s]) : [a.frage];
        if (fr.some((x) => typeof x === "string" && (x.match(/[.!?:](\s|$)/g) || []).length > 1)) h(id, "aufgabe.frage hat mehr als einen Satz – die Lage gehört in lernbereich.text, ins Handy nur die Frage");
        if (!Array.isArray(a.antworten) || a.antworten.length < 2) f(id, "aufgabe.antworten: mindestens 2 nötig");
        (a.antworten || []).forEach((x, n) => {
          text(x.text, id, `antworten[${n}].text`);
          if (!WERTUNGEN.includes(x.wertung)) f(id, `antworten[${n}].wertung "${x.wertung}" unbekannt`);
          if (a.meinung && x.wertung !== "meinung") f(id, `antworten[${n}]: bei einer Meinungs-Frage ist die Wertung "meinung"`);
          if (!a.meinung && x.wertung === "meinung") f(id, `antworten[${n}]: "meinung" nur bei aufgabe.meinung`);
          if (["passend", "auchMoeglich", "unpassend"].includes(x.wertung)) text(x.rueckmeldung, id, `antworten[${n}].rueckmeldung`);
        });
        if (!a.meinung && !(a.antworten || []).some((x) => x.wertung === "passend")) f(id, "keine passende Antwort");
      }
      if (s.nachFehler) { const vb = lw.schritte.find((x) => x.id === s.nachFehler.vorbild); if (!vb || vb.art !== "vorbild") f(id, `nachFehler.vorbild "${s.nachFehler.vorbild}" ist kein Vorbild-Schritt`); }
      if (s.art === "uebung") {
        const U = s.uebung;
        if (s.handy && s.handy.some((e) => e.typ === "mailbox")) continue;
        if (!U || !U.handlungen) { f(id, "uebung.handlungen fehlen"); continue; }
        const anruf = (s.handy || []).find((e) => e.typ === "anruf");
        const hatKnoepfe = (s.handy || []).some((e) => (e.knoepfe || []).length > 0) || (U.saetze && U.saetze.antworten.length > 0);
        if (!anruf && !hatKnoepfe) f(id, "uebung braucht einen Anruf oder interaktive Knöpfe im Handy");
        if (!U.ende || !U.handlungen[U.ende]) f(id, "uebung.ende muss eine Handlung sein (z. B. auflegen oder blockieren)");
        if (U.danach && !U.handlungen[U.danach.handlung]) f(id, "uebung.danach.handlung fehlt in handlungen");
        /* Bei Handlungen im Übungs-Handy gibt es zusätzlich „neutral“ (z. B. Lautsprecher: weder gut noch schlecht) */
        Object.entries(U.handlungen).forEach(([k, x]) => { if (x.textDavor && !U.handlungen[x.textDavor]) f(id, `handlung ${k}: textDavor "${x.textDavor}" fehlt`); });
        Object.entries(U.handlungen).forEach(([k, x]) => { if (![...WERTUNGEN, "neutral"].includes(x.wertung)) f(id, `handlung ${k}: wertung "${x.wertung}" unbekannt`); text(x.text, id, `handlung ${k}.text`); });
        (s.handy || []).forEach((el) => {
          (el.knoepfe || []).forEach((k) => {
            const kid = typeof k === "string" ? k : k.id;
            if (!U.handlungen[kid]) f(id, `Knopf "${kid}" hat keine Handlung`);
          });
        });
        if (U.saetze) { text(U.saetze.titel, id, "saetze.titel"); U.saetze.antworten.forEach((x) => { text(x.text, id, `satz ${x.id}`); if (!U.handlungen[x.id]) f(id, `Satz "${x.id}" hat keine Handlung`); }); }
      }
      if (s.art === "erinnern") {
        const rb = s.rueckblick, ziel = rb && lw.schritte.find((x) => x.id === rb.schritt);
        if (!rb) f(id, "rueckblick fehlt");
        else {
          if (!ziel || ziel.art !== "entscheidung") f(id, `rueckblick.schritt "${rb.schritt}" ist keine Entscheidung`);
          text(rb.gewaehlt, id, "rueckblick.gewaehlt"); text(rb.unsicher, id, "rueckblick.unsicher");
        }
      }
    }
    return m;
  }

  global.LernHandy = { FORMAT, T, bausteine, lernweg, pruefen, aktivLernstandSchluessel };
})(window);
