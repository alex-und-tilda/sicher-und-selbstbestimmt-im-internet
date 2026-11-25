/* Profil-Sitzungskern. Die Datenbank ist für Profilfreigabe und
   eingewilligte Lerndaten maßgeblich. window.name kennt nur die Tab-Bindung;
   lokale Bedien-Einstellungen verwaltet die App getrennt. */
(function (global) {
  "use strict";
  if (global.PK) return;

  const VERSION = 2;
  const PREFIX = "AT_SLI_V1:";
  const LIMIT_MS = 3 * 60 * 1000;
  const DB_NAME = "alex-tilda-profil-sitzung";
  const STORE = "profilzustand";
  const KEY = "geraet";
  const SIGNAL = "at-ps1-aenderung";
  const UEBERGABE = "at-ps1-navigation";
  const SEITENENDE = "at-ps1-seitenende";
  const ALLEIN = "";
  const TEXTE = {
    geloescht: "Das Zeichen und sein Lernstand sind gelöscht.",
    teilweise: "Der Lernstand ist gesperrt. Ein Teil der Daten ist noch da.",
    nichtsGeloescht: "Es wurde nichts gelöscht.",
    restLernstand: "Das Löschen war nicht vollständig. Versuch es noch einmal.",
    unklar: "Das hat nicht geklappt. Bitte prüfe deine Zeichen.",
    abgebrochen: "Es wurde nichts gelöscht. Bitte prüfe, wer gerade lernt.",
    nichtGeaendert: "Es wurde nichts verändert. Bitte prüfe, wer gerade lernt.",
    neuAngefangen: "Du fängst neu an.",
    zurueckgesetzt: "Der Lernstand wurde gelöscht.",
    fehlgeschlagen: "Dein Lernstand wurde nicht gespeichert. Du kannst weiter lernen.",
    widerrufFehler: "Das Löschen konnte nicht bestätigt werden. Der Lernstand bleibt hier verborgen.",
    wartet: "Dein Lernstand wird gespeichert.",
    gespeichert: "Dein Lernstand ist gespeichert.",
    konflikt: "Deine Änderung wurde nicht gespeichert. In einem anderen Tab gibt es einen neueren Stand.",
    gast: "Speichern geht gerade nicht. Du kannst ohne gespeicherten Lernstand weiter lernen."
  };

  const hoerer = new Set();
  const basen = new WeakMap();
  const enden = new Map();
  let db = null;
  let daten = null;
  let gast = false;
  let neuLaden = false;
  let gelesen = 0;
  let lokalVerbergen = tabLesen().pkLernstandVerborgen ?? null;
  let speicherStatus = null;
  let offeneSchreibvorgaenge = 0;
  let letzterSchreibfehler = null;
  let zustand = { status: "gesperrt", id: null, grund: "start" };
  let kanal;
  try { kanal = new global.BroadcastChannel(DB_NAME); } catch (e) { /* Speicher- und Fokusereignisse bleiben. */ }

  function kopie(o) { return o == null ? o : JSON.parse(JSON.stringify(o)); }
  function zahl(x) { return typeof x === "number" && Number.isFinite(x) ? x : 0; }
  function idWert(id) { return id == null ? ALLEIN : id; }
  function widerruf(d, id) { return zahl(lerndaten(d, id)?.widerrufTs || finde(d, id)?.widerrufTs); }
  function profilStempel(p) { return p ? p.id + ":" + zahl(p.resetTs) + ":" + zahl(p.widerrufTs) : null; }
  function versteckt() { return global.document?.visibilityState === "hidden"; }
  function zufall() {
    const a = new Uint32Array(4);
    global.crypto.getRandomValues(a);
    return Array.from(a, n => n.toString(36)).join("-");
  }
  function finde(d, id) { return d?.profile.find(p => p.id === id) || null; }
  function lerndaten(d, id) { return d && Object.hasOwn(d.lernen, idWert(id)) ? d.lernen[idWert(id)] : null; }
  function neuerEintrag() { return { generation: 0, fortschritt: null, handy: {} }; }
  function stempel(d, id) {
    const p = finde(d, id);
    if (p) return profilStempel(p);
    return id == null && d && d.profile.length === 0 ? "__einzeln__" : null;
  }

  function tabLesen() {
    try {
      const n = global.name;
      if (typeof n !== "string" || !n.startsWith(PREFIX)) return {};
      const o = JSON.parse(n.slice(PREFIX.length));
      return o && typeof o === "object" && !Array.isArray(o) ? o : {};
    } catch (e) { return {}; }
  }
  function tabSchreiben(patch) {
    const o = tabLesen();
    Object.keys(patch).forEach(k => {
      if (patch[k] === undefined) delete o[k]; else o[k] = patch[k];
    });
    try { global.name = PREFIX + JSON.stringify(o); return true; }
    catch (e) { return false; }
  }
  function bindung() { const p = tabLesen().pk; return p?.v === VERSION ? p : null; }
  function bindungSetzen(patch) {
    return tabSchreiben({ pk: Object.assign({}, bindung(), patch, { v: VERSION }) });
  }
  function leseAlt(k) {
    const raw = global.localStorage.getItem(k);
    if (raw === null) return null;
    try { return JSON.parse(raw); } catch (e) { return null; }
  }

  /* Nur beim ersten erfolgreichen Öffnen. Die Existenz des Datensatzes
     ist der Abschlussvermerk. Ein abgebrochener Import ändert keine Altwerte. */
  function importiere() {
    const speicher = global.localStorage;
    const roh = leseAlt("profile-liste");
    if (speicher.getItem("profile-liste") !== null && !Array.isArray(roh)) throw Error("Profildaten unlesbar");
    const geloescht = leseAlt("profil-loeschung");
    if (speicher.getItem("profil-loeschung") !== null && !Array.isArray(geloescht)) throw Error("Löschvermerk unlesbar");
    const gesperrt = new Set((geloescht || []).map(e => e?.id));
    const profile = (roh || []).filter(p => p && typeof p.id === "string" && /^[a-zA-Z0-9_-]+$/.test(p.id) && !Object.hasOwn(Object.prototype, p.id) && !gesperrt.has(p.id));
    if (new Set(profile.map(p => p.id)).size !== profile.length) throw Error("Profil nicht eindeutig");
    const aktivAlt = speicher.getItem("profil-aktiv");
    const d = { rev: 1, geraet: 0, geteilt: speicher.getItem("geraet-geteilt") === "1",
      geraetGewaehlt: speicher.getItem("geraet-geteilt") !== null,
      aktiv: profile.some(p => p.id === aktivAlt) ? aktivAlt : null, profile, lernen: {}, uebergaben: {} };
    const bereinigen = new Map();
    const uebernommen = new Map();
    function merke(k) {
      bereinigen.set(k, speicher.getItem(k));
    }
    for (const p of profile.length ? profile : [null]) {
      if (!p && ((roh || []).length || gesperrt.size)) continue;
      const id = p?.id || ALLEIN;
      const key = p ? "lernstand::" + id : "lernstand";
      const eintrag = neuerEintrag();
      d.lernen[id] = eintrag;
      const alt = leseAlt(key);
      const sperre = p && speicher.getItem("lernstand-sperre::" + id);
      const bind = alt && typeof alt.bindung === "string" && alt.bindung;
      const veraendert = p && (zahl(p.resetTs) || zahl(p.widerrufTs) || zahl(p.stempelPflicht));
      if (sperre || alt?.enabled !== true) continue;
      if (bind ? bind !== profilStempel(p) : veraendert) continue;
      const fortschritt = kopie(alt);
      delete fortschritt.bindung;
      if (fortschritt.pauseErlaubt !== true) delete fortschritt.pause;
      eintrag.fortschritt = fortschritt;
      uebernommen.set(p ? profilStempel(p) : "__einzeln__", eintrag);
      merke(key);
    }
    for (let i = 0; i < speicher.length; i++) {
      const key = speicher.key(i);
      if (!key?.startsWith("lh_fortschritt_")) continue;
      merke(key);
      if (key === "lh_fortschritt_gesamt") continue;
      const alt = leseAlt(key);
      const weg = key.slice("lh_fortschritt_".length);
      if (!weg || Object.hasOwn(Object.prototype, weg)) continue;
      if (typeof alt?.bindung !== "string" || !alt.bindung) continue;
      const e = uebernommen.get(alt.bindung);
      if (!e || !Number.isInteger(alt.i) || alt.i < 0 || (alt.id && alt.id !== weg)) continue;
      e.handy[weg] = { i: alt.i, v: zahl(alt.v), abgeschlossen: alt.abgeschlossen === true };
    }
    return { d, bereinigen };
  }

  function dbOeffnen() {
    return new Promise((resolve, reject) => {
      if (!global.indexedDB) { reject(Error("IndexedDB fehlt")); return; }
      const req = global.indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = () => req.result.createObjectStore(STORE);
      req.onerror = () => reject(req.error);
      req.onblocked = () => reject(Error("Datenbank blockiert"));
      req.onsuccess = () => resolve(req.result);
    });
  }

  /* Innerhalb des Request-Handlers synchron lesen, prüfen und schreiben.
     Erst oncomplete bestätigt das Ergebnis, auch für Migration und Löschen. */
  function transaktion(aendern) {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, aendern ? "readwrite" : "readonly");
      const store = tx.objectStore(STORE);
      let antwort;
      let fehler;
      tx.oncomplete = () => resolve(antwort);
      tx.onabort = () => reject(fehler || tx.error || Error("Speicherung abgebrochen"));
      const req = store.get(KEY);
      req.onsuccess = () => {
        try {
          let d = req.result;
          const vorgabe = aendern ? aendern(d) : {};
          if (vorgabe.d) d = vorgabe.d;
          if (vorgabe.schreiben) {
            d.rev += 1;
            store.put(d, KEY);
          }
          antwort = { d, ...vorgabe };
        } catch (e) { fehler = e; tx.abort(); }
      };
    });
  }

  function freigabe(d, p = bindung()) {
    if (!d) return { status: gast ? "gast" : "gesperrt", id: null, grund: gast ? "speicher" : "start" };
    if (d.profile.length === 0) return { status: "ohneProfil", id: null, grund: "leer" };
    if (!p) return { status: "gesperrt", id: null, grund: "neuerTab" };
    if (p.z === "gesperrt") return { status: "gesperrt", id: p.id, grund: p.grund };
    if (!finde(d, p.id)) return { status: "gesperrt", id: p.id, grund: "geloescht" };
    if (p.id !== d.aktiv || p.geraet !== d.geraet) return { status: "gesperrt", id: p.id, grund: "wechsel" };
    return { status: "ok", id: p.id, grund: "ok" };
  }
  function melden(info) {
    const bild = { ...zustand, ...info };
    Promise.resolve().then(() => hoerer.forEach(fn => {
      try { fn(bild); } catch (e) { /* Andere Ansichten bleiben erreichbar. */ }
    }));
  }
  function beobachten() {
    const p = bindung();
    if (p?.z === "verborgen" && !versteckt()) {
      const jetzt = Date.now();
      if (daten?.geteilt && (!Number.isFinite(p.seit) || p.seit <= 0 || p.seit > jetzt || jetzt - p.seit >= LIMIT_MS)) {
        bindungSetzen({ z: "gesperrt", grund: "abwesend", seit: undefined });
      } else bindungSetzen({ z: "sichtbar", seit: undefined });
    }
    const davor = zustand;
    zustand = freigabe(daten);
    if (zustand.grund === "wechsel" || zustand.grund === "geloescht") {
      bindungSetzen({ z: "gesperrt", grund: zustand.grund, seit: undefined });
    }
    if (davor.status !== zustand.status || davor.id !== zustand.id || davor.grund !== zustand.grund) melden({});
    return { ...zustand };
  }
  function uebernehmen(d, info = {}) {
    if (!d || (daten && d.rev < daten.rev)) return;
    const alt = daten;
    const gleicheRevision = d.rev === alt?.rev;
    const id = bindung()?.id ?? null;
    const altStempel = stempel(alt, id);
    const alterWiderruf = widerruf(alt, id);
    const alterEintrag = lerndaten(alt, id)?.generation;
    daten = d;
    if (!bindung() && !d.geteilt && finde(d, d.aktiv)) {
      bindungSetzen({ id: d.aktiv, geraet: d.geraet, sitzung: zufall(), z: "sichtbar" });
    }
    beobachten();
    halteAlteTabsGesperrt(d);
    if (!gleicheRevision) {
      const neuStempel = stempel(d, id);
      const neuEintrag = lerndaten(d, id)?.generation;
      melden({ liste: true, lernstand: true, alterStempel: altStempel, stempel: neuStempel,
        generationGewechselt: !!alt && alterEintrag !== neuEintrag,
        stempelWechsel: !!alt && (altStempel !== neuStempel || (id === null && alterEintrag !== neuEintrag)),
        widerruf: !!alt && widerruf(d, id) > alterWiderruf, ...info });
    }
  }
  function signal(d) {
    try { kanal?.postMessage(d.rev); } catch (e) { /* Fokus prüft ebenfalls. */ }
    try { global.localStorage.setItem(SIGNAL, String(d.rev)); } catch (e) { /* Siehe oben. */ }
  }
  function speicherFehler() {
    gast = true;
    daten = null;
    beobachten();
    melden({ lernstand: true, speicherFehler: true });
  }
  async function aktualisieren() {
    if (!db || gast) return false;
    const folge = ++gelesen;
    neuLaden = true;
    try {
      const r = await transaktion();
      if (folge === gelesen) neuLaden = false;
      if (!r.d) throw Error("Profilzustand fehlt");
      uebernehmen(r.d);
      return true;
    } catch (e) {
      if (folge === gelesen) neuLaden = false;
      speicherFehler();
      return false;
    }
  }
  async function aendern(fn, vorherUebernahme) {
    if (!await bereit || !db || gast) return { ok: false, grund: "speicher" };
    try {
      const r = await transaktion(d => {
        if (!d) throw Error("Profilzustand fehlt");
        return fn(d);
      });
      if (r.schreiben && vorherUebernahme) vorherUebernahme(r);
      uebernehmen(r.d, r.info);
      if (r.schreiben) signal(r.d);
      return r.erg;
    } catch (e) { return { ok: false, grund: "speicher" }; }
  }

  /* Alte Kopien werden erst nach dem erfolgreichen Import entfernt und nur,
     wenn sie sich seit dem Lesen des Altstands nicht verändert haben.
     lh_fortschritt_*-Schlüssel (Beta-5-Wiedereinstiege) werden stets gezielt entfernt. */
  function entferneSchluessel(s, k) {
    try { s.removeItem(k); } catch (e) { return false; }
    try { return s.getItem(k) === null; } catch (e) { return false; }
  }
  function alteKopienEntfernen(eintraege) {
    let ok = true;
    const s = global.localStorage;
    for (const [k, wert] of eintraege) {
      try {
        if (k.startsWith("lh_fortschritt_")) {
          if (!entferneSchluessel(s, k)) ok = false;
        } else if (s.getItem(k) === wert) {
          if (!entferneSchluessel(s, k)) ok = false;
        }
      } catch (e) { ok = false; }
    }
    return ok;
  }
  function istGueltigesHandyAltdatum(d, alt) {
    if (!alt || typeof alt.bindung !== "string" || !alt.bindung) return false;
    if (alt.bindung === "__einzeln__") {
      return d.profile.length === 0 && !d.einzelGesperrt && lerndaten(d, null)?.fortschritt?.enabled === true;
    }
    const id = alt.bindung.split(":")[0];
    const p = finde(d, id);
    return !!p && alt.bindung === profilStempel(p) && lerndaten(d, id)?.fortschritt?.enabled === true;
  }
  function verwaisteHandyAltdatenBereinigen(d = daten) {
    if (!db || gast || !d) return true;
    let ok = true;
    try {
      const s = global.localStorage;
      const schluessel = [];
      for (let i = 0; i < s.length; i++) schluessel.push(s.key(i));
      for (const k of schluessel) {
        if (!k || !k.startsWith("lh_fortschritt_")) continue;
        if (k === "lh_fortschritt_gesamt") {
          if (!entferneSchluessel(s, k)) ok = false;
          continue;
        }
        const alt = leseAlt(k);
        if (!istGueltigesHandyAltdatum(d, alt)) {
          if (!entferneSchluessel(s, k)) ok = false;
        }
      }
      return ok;
    } catch (e) { return false; }
  }
  function halteAlteTabsGesperrt(d = daten) {
    if (!d?.geteilt || !d.profile?.length) return;
    try {
      if (global.localStorage.getItem("weg-seit") !== "gesperrt") {
        global.localStorage.setItem("weg-seit", "gesperrt");
      }
    } catch (e) { /* Alte Fassung bleibt getrennt. */ }
  }
  let altWiderrufLauf = null;
  function altWiderrufPruefen() {
    if (!db || gast || !daten || altWiderrufLauf) return altWiderrufLauf || Promise.resolve();
    let hatAktion = false;
    try {
      const s = global.localStorage;
      const geloescht = leseAlt("profil-loeschung");
      const geloeschtIds = new Set(Array.isArray(geloescht) ? geloescht.map(e => e?.id).filter(Boolean) : []);
      const listeAlt = leseAlt("profile-liste");
      const listeMap = new Map(Array.isArray(listeAlt) ? listeAlt.filter(p => p?.id).map(p => [p.id, p]) : []);
      for (const p of daten.profile) {
        if (geloeschtIds.has(p.id)) { hatAktion = true; break; }
        const e = lerndaten(daten, p.id);
        const hatLerndaten = !!(e && (e.fortschritt !== null || Object.keys(e.handy || {}).length));
        if (s.getItem("lernstand-sperre::" + p.id) !== null && hatLerndaten) { hatAktion = true; break; }
        const altP = listeMap.get(p.id);
        if (altP && (zahl(altP.widerrufTs) > widerruf(daten, p.id) || zahl(altP.resetTs) > zahl(p.resetTs))) {
          hatAktion = true; break;
        }
      }
    } catch (e) { return Promise.resolve(); }
    if (!hatAktion) return Promise.resolve();
    altWiderrufLauf = aendern(d => {
      const s = global.localStorage;
      const geloescht = leseAlt("profil-loeschung");
      const geloeschtIds = new Set(Array.isArray(geloescht) ? geloescht.map(e => e?.id).filter(Boolean) : []);
      const listeAlt = leseAlt("profile-liste");
      const listeMap = new Map(Array.isArray(listeAlt) ? listeAlt.filter(p => p?.id).map(p => [p.id, p]) : []);
      let geaendert = false;
      const widerrufInfo = {};
      for (const p of [...d.profile]) {
        if (geloeschtIds.has(p.id)) {
          if (d.profile.length === 1 && d.aktiv !== p.id) d.geraet += 1;
          d.profile = d.profile.filter(x => x.id !== p.id);
          delete d.lernen[p.id];
          if (d.aktiv === p.id) { d.aktiv = null; d.geraet += 1; }
          geaendert = true;
          continue;
        }
        const e = lerndaten(d, p.id) || neuerEintrag();
        const sperre = s.getItem("lernstand-sperre::" + p.id) !== null;
        const altP = listeMap.get(p.id);
        const altW = altP ? zahl(altP.widerrufTs) : 0;
        const altR = altP ? zahl(altP.resetTs) : 0;
        const neuW = altW > widerruf(d, p.id);
        const neuR = altR > zahl(p.resetTs);
        const hatLerndaten = e.fortschritt !== null || Object.keys(e.handy || {}).length > 0;
        if ((sperre && hatLerndaten) || neuW || neuR) {
          e.generation += 1;
          e.handy = {};
          e.fortschritt = null;
          if (sperre || neuW) {
            e.widerrufTs = Math.max(Date.now(), altW, widerruf(d, p.id) + 1);
            p.widerrufTs = e.widerrufTs;
            widerrufInfo.widerruf = true;
          }
          if (neuR) {
            p.resetTs = Math.max(Date.now(), altR, zahl(p.resetTs) + 1);
            p.einstellungenGeneration = zahl(p.einstellungenGeneration) + 1;
            widerrufInfo.neubeginn = true;
          }
          d.lernen[p.id] = e;
          geaendert = true;
        }
      }
      return geaendert ? { schreiben: true, erg: { ok: true }, info: widerrufInfo } : { erg: { ok: false } };
    }).then(() => verwaisteHandyAltdatenBereinigen(daten)).finally(() => { altWiderrufLauf = null; });
    return altWiderrufLauf;
  }
  function legacyAufraeumen(id, art, einstellungenGeneration = 0) {
    let ok = true;
    try {
      const s = global.localStorage;
      const schluessel = [];
      for (let i = 0; i < s.length; i++) schluessel.push(s.key(i));
      const weg = art === "wiedereinstieg";
      const komplett = art === "loeschen" || art === "zuruecksetzen";
      for (const k of schluessel) {
        if (!k) continue;
        const alterProfilwert = id != null && komplett && k.endsWith("::" + id) &&
          (art !== "zuruecksetzen" || !k.endsWith("::r" + einstellungenGeneration + "::" + id));
        if ((!weg && k === (id == null ? "lernstand" : "lernstand::" + id)) || alterProfilwert) {
          if (!entferneSchluessel(s, k)) ok = false;
        } else if (k === "lh_fortschritt_gesamt") {
          if (!entferneSchluessel(s, k)) ok = false;
        } else if (k.startsWith("lh_fortschritt_")) {
          const alt = leseAlt(k);
          const b = typeof alt?.bindung === "string" && alt.bindung ? alt.bindung : null;
          const verwaist = !b || (b !== "__einzeln__" && !daten?.profile?.some(p => b.startsWith(p.id + ":")));
          if (verwaist || (id == null ? b === "__einzeln__" : b.startsWith(id + ":"))) {
            if (!entferneSchluessel(s, k)) ok = false;
          }
        }
      }
      return ok;
    } catch (e) { return false; }
  }

  async function anmelden(id, code) {
    const sitzung = zufall();
    const ergebnis = await aendern(d => {
      const p = finde(d, id);
      if (!p) return { erg: { ok: false, grund: "zielFehlt" } };
      if (Array.isArray(p.code) && !gleich(p.code, code)) return { erg: { ok: false, grund: "code" } };
      const gleichePerson = bindung()?.id === id && stempel(daten, id) === stempel(d, id);
      const profilwechsel = bindung()?.id !== id;
      if (d.aktiv !== id) { d.aktiv = id; d.geraet += 1; }
      return { schreiben: true, erg: { ok: true, gleichePerson }, generation: d.geraet, info: { profilwechsel } };
    }, r => bindungSetzen({ id, geraet: r.generation, sitzung, z: versteckt() ? "verborgen" : "sichtbar",
      seit: versteckt() ? Date.now() : undefined, grund: undefined }));
    return ergebnis;
  }
  function listeAendern(mutator) {
    return aendern(d => {
      const alt = d.profile;
      const neu = mutator(kopie(alt));
      if (!Array.isArray(neu) || alt.some(p => !neu.some(n => n.id === p.id)) ||
          neu.some(p => !p?.id || !/^[a-zA-Z0-9_-]+$/.test(p.id) || Object.hasOwn(Object.prototype, p.id)) || new Set(neu.map(p => p.id)).size !== neu.length) {
        return { erg: { ok: false, grund: "ungueltig" } };
      }
      if (alt.some(p => {
        const n = neu.find(x => x.id === p.id);
        return n.resetTs !== p.resetTs || n.widerrufTs !== p.widerrufTs ||
          n.einstellungenGeneration !== p.einstellungenGeneration ||
          (!gleich(p, n) && !zugriff(d, p.id));
      })) return { erg: { ok: false, grund: "nichtBerechtigt" } };
      d.profile = neu;
      for (const p of neu) if (!Object.hasOwn(d.lernen, p.id)) d.lernen[p.id] = neuerEintrag();
      if (!alt.length && neu.length) d.geraet += 1;
      if (!alt.length && neu.length === 1 && d.lernen[ALLEIN]) {
        if (!d.geteilt && !d.einzelGesperrt) {
          d.lernen[neu[0].id] = d.lernen[ALLEIN];
          delete d.lernen[ALLEIN];
        } else if (d.lernen[ALLEIN].fortschritt) {
          // Nicht eindeutig zuordenbar: weder einem anderen Zeichen geben noch löschen.
          d.einzelGesperrt = true;
        }
      }
      return { schreiben: true, erg: { ok: true } };
    });
  }
  /* Vorhandener Wiederherstellungsweg der App. Der bestätigte Bild-Code
     kann entfernt werden, ohne dabei Lerndaten zu lesen oder zu verändern. */
  function bildCodeEntfernen(id, alterCode) {
    return aendern(d => {
      const p = finde(d, id);
      if (!p || !Array.isArray(p.code) || !gleich(p.code, alterCode)) {
        return { erg: { ok: false, grund: "zielGeaendert" } };
      }
      delete p.code;
      if (d.aktiv === id) d.geraet += 1;
      return { schreiben: true, erg: { ok: true } };
    });
  }
  function geraetSetzen(geteilt) {
    return aendern(d => {
      const z = freigabe(d);
      if (z.status !== "ok" && z.status !== "ohneProfil") return { erg: { ok: false, grund: "nichtBerechtigt" } };
      if (d.geteilt !== !!geteilt && d.profile.length) d.geraet += 1;
      d.geteilt = !!geteilt;
      d.geraetGewaehlt = true;
      return { schreiben: true, generation: d.geraet, erg: { ok: true } };
    }, r => { if (bindung()) bindungSetzen({ geraet: r.generation }); });
  }

  function zugriff(d, id) {
    const z = freigabe(d);
    return id == null ? z.status === "ohneProfil" && !d?.einzelGesperrt : z.status === "ok" && z.id === id;
  }
  function lernstandLesen(id = null) {
    beobachten();
    if (!zugriff(daten, id) || lokalVerbergen === idWert(id)) return null;
    const e = lerndaten(daten, id);
    const fortschritt = kopie(e?.fortschritt);
    if (!fortschritt) return null;
    basen.set(fortschritt, { id, generation: e.generation, geraet: daten.geraet, basis: kopie(fortschritt) });
    return fortschritt;
  }
  function gleich(a, b) {
    if (a === b) return true;
    if (!a || !b || typeof a !== "object" || typeof b !== "object" || Array.isArray(a) !== Array.isArray(b)) return false;
    const keys = Object.keys(a);
    return keys.length === Object.keys(b).length && keys.every(k => Object.hasOwn(b, k) && gleich(a[k], b[k]));
  }
  function objekt(x) { return x && typeof x === "object" && !Array.isArray(x); }

  /* Nur Änderungen des Aufrufers auf den in der Transaktion gelesenen
     Stand anwenden. Runden, Löschungen und unbekannte Typen sind unteilbar. */
  function anwenden(basis, lokal, aktuell, pfad = []) {
    if (gleich(basis, lokal)) return aktuell;
    if (gleich(basis, aktuell)) return lokal;
    const feld = pfad.at(-1);
    if (pfad[0] === "done" && feld === "count" && [basis ?? 0, lokal, aktuell].every(Number.isFinite) && lokal >= (basis ?? 0) && aktuell >= (basis ?? 0)) {
      return aktuell + lokal - (basis ?? 0);
    }
    if ((feld === "ts" || feld === "zeit" || pfad[0] === "stufen") && Number.isFinite(lokal) && Number.isFinite(aktuell)) {
      return Math.max(lokal, aktuell);
    }
    if (gleich(lokal, aktuell) && feld !== "count" && pfad.length && pfad[0] !== "done") return aktuell;
    if (pfad[0] === "regeln" && [basis, lokal, aktuell].every(Array.isArray) && basis.every(x => lokal.includes(x) && aktuell.includes(x))) {
      return Array.from(new Set([...aktuell, ...lokal]));
    }
    if (pfad[0] !== "pause" && objekt(lokal) && objekt(aktuell) && (basis === undefined || objekt(basis))) {
      const e = {};
      for (const k of new Set([...Object.keys(basis || {}), ...Object.keys(lokal), ...Object.keys(aktuell)])) {
        const v = anwenden(basis?.[k], lokal[k], aktuell[k], [...pfad, k]);
        if (v !== undefined) Object.defineProperty(e, k, { value: v, enumerable: true, configurable: true, writable: true });
      }
      return e;
    }
    if (gleich(lokal, aktuell)) return aktuell;
    throw Error("konflikt");
  }

  function statusSetzen(status) {
    speicherStatus = status;
    melden({ speicherStatus: status });
  }
  async function mitSpeicherstatus(aktion) {
    if (offeneSchreibvorgaenge++ === 0) {
      letzterSchreibfehler = null;
      statusSetzen("wartet");
    }
    let r;
    try { r = await aktion(); } catch (e) { r = { ok: false, grund: "speicher" }; }
    if (!r?.ok) {
      letzterSchreibfehler = r?.grund === "konflikt" ? "konflikt" : "fehlgeschlagen";
      statusSetzen(letzterSchreibfehler);
    }
    if (--offeneSchreibvorgaenge === 0 && !letzterSchreibfehler) statusSetzen("gespeichert");
    return r;
  }
  function lernstandSchreiben(id, o, opt = {}) {
    beobachten();
    const e = lerndaten(daten, id);
    const b = basen.get(o);
    if (!objekt(o) || !zugriff(daten, id) || lokalVerbergen === idWert(id)) {
      statusSetzen("fehlgeschlagen");
      return Promise.resolve(false);
    }
    const sign = { generation: e?.generation || 0, geraet: daten.geraet, sitzung: bindung()?.sitzung };
    const lokal = kopie(o);
    return mitSpeicherstatus(() => aendern(d => {
      const aktuell = lerndaten(d, id) || neuerEintrag();
      if (!zugriff(d, id) || bindung()?.sitzung !== sign.sitzung || d.geraet !== sign.geraet ||
          aktuell.generation !== sign.generation || (b && (b.id !== id || b.generation !== aktuell.generation || b.geraet !== d.geraet))) {
        return { erg: { ok: false, grund: "nichtBerechtigt" } };
      }
      if ((!b && !opt.einwilligung) || (!aktuell.fortschritt?.enabled && !opt.einwilligung)) return { erg: { ok: false, grund: "einwilligung" } };
      let wert;
      try { wert = anwenden(b?.basis || {}, lokal, aktuell.fortschritt || {}); }
      catch (e) { return { erg: { ok: false, grund: "konflikt" } }; }
      wert.enabled = true;
      if (wert.pauseErlaubt !== true) delete wert.pause;
      aktuell.fortschritt = wert;
      d.lernen[idWert(id)] = aktuell;
      return { schreiben: true, erg: { ok: true } };
    })).then(r => r?.ok === true);
  }

  function ticket(art, id = bindung()?.id ?? null) {
    return { art, zielId: id, generation: lerndaten(daten, id)?.generation || 0, stempel: stempel(daten, id),
      geraet: daten?.geraet, sitzung: bindung()?.sitzung };
  }
  function ticketPruefen(t, d = daten) {
    if (!t || !d) return "ungueltig";
    if (t.sitzung !== bindung()?.sitzung || t.geraet !== d.geraet) return "sitzungGeaendert";
    if (t.stempel !== stempel(d, t.zielId) || t.generation !== (lerndaten(d, t.zielId)?.generation || 0)) return "zielGeaendert";
    if (t.art === "lernstand" || t.art === "wiedereinstieg") return zugriff(d, t.zielId) ? "ok" : "nichtBerechtigt";
    if (!finde(d, t.zielId)) return "zielFehlt";
    return zugriff(d, t.zielId) ? "ok" : "nichtBerechtigt";
  }
  async function loeschen(t, art) {
    if (!t || t.art !== art) return { ok: false, endzustand: "unveraendert", grund: "ungueltig" };
    const id = t.zielId;
    const erg = await aendern(d => {
      const pr = ticketPruefen(t, d);
      if (pr !== "ok") return { erg: { ok: false, grund: pr, endzustand: "unveraendert" } };
      const p = finde(d, id);
      const e = lerndaten(d, id) || neuerEintrag();
      e.generation += 1;
      e.handy = {};
      if (art === "wiedereinstieg") {
        if (e.fortschritt) delete e.fortschritt.pause;
      } else e.fortschritt = null;
      d.lernen[idWert(id)] = e;
      if (art === "lernstand") {
        e.widerrufTs = Math.max(Date.now(), widerruf(d, id) + 1);
        if (p) p.widerrufTs = e.widerrufTs;
      }
      if (art === "zuruecksetzen") {
        p.resetTs = Math.max(Date.now(), zahl(p.resetTs) + 1);
        p.einstellungenGeneration = zahl(p.einstellungenGeneration) + 1;
      }
      if (art === "loeschen") {
        if (d.profile.length === 1 && d.aktiv !== id) d.geraet += 1;
        d.profile = d.profile.filter(p => p.id !== id);
        delete d.lernen[id];
        if (d.aktiv === id) { d.aktiv = null; d.geraet += 1; }
      }
      return { schreiben: true, erg: { ok: true, endzustand: "geloescht", einstellungenGeneration: p?.einstellungenGeneration },
        info: { widerruf: art === "lernstand", neubeginn: art === "zuruecksetzen", wiedereinstieg: art === "wiedereinstieg" } };
    });
    if (!erg?.ok && erg?.grund === "speicher") {
      if (zugriff(daten, id)) {
        lokalVerbergen = idWert(id);
        tabSchreiben({ pkLernstandVerborgen: lokalVerbergen });
      }
      melden({ lernstand: true, loeschfehler: true });
      return { ...erg, endzustand: "unklar" };
    }
    if (!erg?.ok) return erg;
    if (lokalVerbergen === idWert(id)) {
      lokalVerbergen = null;
      tabSchreiben({ pkLernstandVerborgen: undefined });
      melden({ lernstand: true });
    }
    const altweg = art === "lernstand" ? "widerruf" : art;
    if (!legacyAufraeumen(id, altweg, erg.einstellungenGeneration)) return { ok: false, grund: "rest", endzustand: "teilweise" };
    return erg;
  }

  function handyLesen(id, weg) {
    if (!weg || Object.hasOwn(Object.prototype, weg) || !lernstandLesen(id)?.enabled) return null;
    return kopie(lerndaten(daten, id)?.handy[weg]) || null;
  }
  function handySchreiben(id, weg, eintrag, abschluss) {
    beobachten();
    const e = lerndaten(daten, id);
    if (!weg || Object.hasOwn(Object.prototype, weg) || !e?.fortschritt?.enabled || !zugriff(daten, id) || lokalVerbergen === idWert(id)) return Promise.resolve(false);
    const generation = e.generation;
    const geraet = daten.geraet;
    const sitzung = bindung()?.sitzung;
    const basis = kopie(e.handy[weg]);
    const vorgang = kopie(eintrag);
    const key = JSON.stringify([id, weg]);
    const vorherigerVorgang = enden.get(key);
    const operation = { vorgang, generation, sitzung };
    enden.set(key, operation);
    return mitSpeicherstatus(() => aendern(d => {
      const cur = lerndaten(d, id);
      if (!cur?.fortschritt?.enabled || !zugriff(d, id) || d.geraet !== geraet || bindung()?.sitzung !== sitzung || cur.generation !== generation) {
        return { erg: { ok: false, grund: "nichtBerechtigt" } };
      }
      const vorher = cur.handy[weg];
      const eigeneFolge = vorherigerVorgang?.generation === generation && vorherigerVorgang.sitzung === sitzung &&
        gleich(vorherigerVorgang.vorgang, vorher);
      if (!eigeneFolge && !gleich(basis, vorher) && !gleich(vorgang, vorher)) return { erg: { ok: false, grund: "konflikt" } };
      cur.handy[weg] = vorgang;
      if (abschluss) {
        const p = cur.fortschritt;
        p.handyWege ||= {};
        p.handyWege[weg] = { ts: Date.now(), abgeschlossen: true, themaId: abschluss.themaId };
        if (abschluss.regel && abschluss.themaId) {
          p.regeln ||= {};
          const l = p.regeln[abschluss.regel] ||= [];
          if (!l.includes(abschluss.themaId)) l.push(abschluss.themaId);
        }
      }
      return { schreiben: true, erg: { ok: true } };
    })).then(r => r?.ok === true).finally(() => { if (enden.get(key) === operation) enden.delete(key); });
  }

  function verbergen() {
    if (bindung()?.z === "sichtbar") bindungSetzen({ z: "verborgen", seit: Date.now() });
  }
  async function navigationVorbereiten(ziel) {
    const p = bindung();
    if (!p || !daten?.geteilt) return true;
    beobachten();
    const url = new URL(ziel, global.location.href);
    const aktuellerPfad = global.location.pathname;
    const hin = url.pathname.endsWith("/mein-lernweg.html") && (aktuellerPfad.endsWith("/index.html") || aktuellerPfad.endsWith("/"));
    const zurueck = url.pathname.endsWith("/index.html") && url.hash === "#lernweg" && aktuellerPfad.endsWith("/mein-lernweg.html");
    if (url.origin !== global.location.origin || (!hin && !zurueck)) return false;
    const token = zufall();
    const r = await aendern(d => {
      if (!zugriff(d, p.id) || bindung()?.sitzung !== p.sitzung) return { erg: { ok: false } };
      const jetzt = Date.now();
      Object.entries(d.uebergaben).forEach(([k, v]) => { if (v.bis <= jetzt || v.sitzung === p.sitzung) delete d.uebergaben[k]; });
      d.uebergaben[token] = { id: p.id, geraet: p.geraet, sitzung: p.sitzung, ziel: url.pathname, quelle: aktuellerPfad, bis: jetzt + 10000 };
      return { schreiben: true, erg: { ok: true } };
    });
    if (!r?.ok) return false;
    try { global.sessionStorage.setItem(UEBERGABE, token); return true; }
    catch (e) { return false; }
  }

  async function starten() {
    try {
      db = await dbOeffnen();
      db.onversionchange = () => { db.close(); db = null; speicherFehler(); };
      let token = null;
      let seitenende = null;
      try {
        token = global.sessionStorage.getItem(UEBERGABE);
        seitenende = JSON.parse(global.sessionStorage.getItem(SEITENENDE));
        global.sessionStorage.removeItem(UEBERGABE);
        global.sessionStorage.removeItem(SEITENENDE);
      } catch (e) { /* Keine Übergabe. */ }
      const p = bindung();
      const r = await transaktion(d => {
        if (!d) {
          const { d: neu, bereinigen } = importiere();
          return { d: neu, schreiben: true, bereinigen };
        }
        if (!token || !Object.hasOwn(d.uebergaben, token)) return {};
        const v = d.uebergaben[token];
        const quelle = global.document.referrer ? new URL(global.document.referrer) : null;
        const ankunft = quelle?.origin === global.location.origin && quelle.pathname === v.quelle &&
          v.ziel === global.location.pathname && p?.sitzung === v.sitzung &&
          p?.id === v.id && d.geraet === v.geraet && d.aktiv === v.id &&
          Date.now() <= v.bis && p?.z !== "gesperrt" && (p?.z !== "verborgen" || Date.now() - p.seit < LIMIT_MS);
        delete d.uebergaben[token];
        return { schreiben: true, ankunft };
      });
      const art = global.performance.getEntriesByType("navigation")[0]?.type;
      const alter = Date.now() - seitenende?.seit;
      const gleicheSitzung = p?.sitzung && p.sitzung === seitenende?.sitzung && p.z !== "gesperrt" &&
        alter >= 0 && alter < LIMIT_MS && p.geraet === r.d.geraet && p.id === r.d.aktiv;
      const vorher = seitenende?.adresse ? new URL(seitenende.adresse, global.location.href) : null;
      const istLernprofil = url => url.pathname.endsWith("/mein-lernweg.html");
      const istLernweg = url => (url.pathname.endsWith("/index.html") || url.pathname.endsWith("/")) && url.hash === "#lernweg";
      const hier = new URL(global.location.href);
      const fortsetzung = gleicheSitzung && (
        (art === "reload" && seitenende.adresse === hier.href) ||
        (art === "back_forward" && vorher?.origin === hier.origin &&
          ((istLernprofil(vorher) && istLernweg(hier)) || (istLernweg(vorher) && istLernprofil(hier))))
      );
      if (p && r.d.geteilt && r.d.profile.length && !r.ankunft && !fortsetzung) {
        bindungSetzen({ z: "gesperrt", grund: "unklarerStart", seit: undefined });
      }
      if (r.ankunft || fortsetzung) bindungSetzen({ z: "sichtbar", seit: undefined });
      uebernehmen(r.d);
      if (r.bereinigen) alteKopienEntfernen(r.bereinigen);
      verwaisteHandyAltdatenBereinigen(r.d);
      if (r.schreiben) signal(r.d);
      halteAlteTabsGesperrt(r.d);
      await altWiderrufPruefen();
      return true;
    } catch (e) { speicherFehler(); return false; }
  }
  const bereit = starten();

  const rueckkehr = () => {
    beobachten();
    bereit.then(aktualisieren).then(() => {
      halteAlteTabsGesperrt(daten);
      verwaisteHandyAltdatenBereinigen(daten);
      return altWiderrufPruefen();
    });
  };
  if (global.document && typeof global.addEventListener === "function") {
    global.document.addEventListener("visibilitychange", () => { if (versteckt()) verbergen(); else rueckkehr(); });
    global.document.addEventListener("freeze", verbergen);
    global.document.addEventListener("resume", rueckkehr);
    global.addEventListener("pagehide", () => {
      const p = bindung();
      if (p?.sitzung && p.z !== "gesperrt") {
        try {
          global.sessionStorage.setItem(SEITENENDE, JSON.stringify({ adresse: global.location.href, sitzung: p.sitzung, seit: p.z === "verborgen" ? p.seit : Date.now() }));
        } catch (e) { /* Beim nächsten Start wird das Zeichen erneut gewählt. */ }
      }
      verbergen();
    });
    global.addEventListener("pageshow", e => {
      if (e.persisted) {
        try { global.sessionStorage.removeItem(SEITENENDE); } catch (x) { /* Ohne Nachweis bleibt der Neustart gesperrt. */ }
      }
      rueckkehr();
    });
    global.addEventListener("focus", rueckkehr);
    global.addEventListener("storage", e => {
      if (e.key === "weg-seit" && e.newValue !== "gesperrt") halteAlteTabsGesperrt(daten);
      if (e.key && e.key.startsWith("lh_fortschritt_")) bereit.then(() => verwaisteHandyAltdatenBereinigen(daten));
      if (e.key === "profil-loeschung" || e.key === "profile-liste" || (e.key && e.key.startsWith("lernstand-sperre::"))) {
        bereit.then(() => altWiderrufPruefen());
      }
      if (e.key === SIGNAL || e.key === null) rueckkehr();
    });
  }
  if (kanal) kanal.onmessage = rueckkehr;

  function meldung(erg) {
    if (erg?.grund === "speicher") return TEXTE.widerrufFehler;
    if (erg?.endzustand === "teilweise") return TEXTE.teilweise;
    if (erg?.ok) return TEXTE.geloescht;
    return TEXTE.abgebrochen;
  }
  function lernstandVerborgen() {
    return lokalVerbergen !== null && lokalVerbergen === idWert(bindung()?.id ?? null);
  }
  function imAusdruckFreigegeben() {
    try { beobachten(); return !neuLaden && zugriff(daten, bindung()?.id ?? null) && !lernstandVerborgen() &&
      global.localStorage.getItem(SIGNAL) === String(daten.rev); }
    catch (e) { return false; }
  }

  global.PK = {
    VERSION, LIMIT_MS, TEXTE, bereit, aktualisieren, pruefe: beobachten, zustand: () => ({ ...zustand }),
    anmelden, geraetSetzen, bildCodeEntfernen, navigationVorbereiten, imAusdruckFreigegeben,
    bindungAufheben: () => { tabSchreiben({ pk: undefined }); return beobachten(); },
    gebundeneId: () => finde(daten, bindung()?.id)?.id || null,
    profilId: () => zustand.status === "ok" ? zustand.id : null,
    profil: id => kopie(finde(daten, id)), liste: () => kopie(daten?.profile) || [],
    stempel: id => stempel(daten, id), geteilt: () => !!daten?.geteilt,
    geraetGewaehlt: () => !!(daten?.geraetGewaehlt || daten?.geteilt),
    beiAenderung: fn => { hoerer.add(fn); return () => hoerer.delete(fn); },
    lernstandMoeglich: () => !!db && !gast && !lernstandVerborgen(), lernstandVerborgen,
    ticket, ticketPruefen, listeAendern, lernstandLesen, lernstandSchreiben, handyLesen, handySchreiben,
    hatHandyWiedereinstieg: id => zugriff(daten, id) && lokalVerbergen !== idWert(id) &&
      Object.values(lerndaten(daten, id)?.handy || {}).some(e => !e.abgeschlossen && e.i > 0),
    lernstandWiderrufen: t => loeschen(t, "lernstand"),
    wiedereinstiegLoeschen: t => loeschen(t, "wiedereinstieg"),
    profilZuruecksetzen: t => loeschen(t, "zuruecksetzen"),
    profilLoeschen: t => loeschen(t, "loeschen"),
    lernstandStatus: () => speicherStatus,
    widerrufSeit: id => widerruf(daten, id), meldung,
    tab: { lesen: tabLesen, schreiben: tabSchreiben }
  };
})(window);
