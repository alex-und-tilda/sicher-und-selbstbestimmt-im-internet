/* Entwurf „Workshop beim Thema" – Ansicht für Kursleitungen.
   Liest nur window.WORKSHOP_DATEN (erzeugt aus docs/material). Speichert nichts.
   Adressen: #<thema>[/<bereich>[/<wert>]], z. B. #facebook/folien/26 */
(function () {
  "use strict";

  const DATEN = window.WORKSHOP_DATEN || {};
  const main = document.getElementById("inhalt");
  const reiter = document.getElementById("wsReiter");
  const ansage = document.getElementById("wsAnsage");
  /* Titel der Lernthemen wie in topics.js; workshop.html lädt topics.js nicht. */
  const THEMEN_TITEL = { facebook: "Facebook", instagram: "Instagram", snapchat: "Snapchat", tiktok: "TikTok", hilfe: "Hilfe bei Problemen" };

  const BEREICHE = [
    ["ueberblick", "Vorbereiten"],
    ["durchfuehren", "Durchführen"],
    ["folien", "Präsentieren"],
    ["leitfaden", "Trainerleitfaden"],
    ["material", "Material ausgeben"],
    ["quiz", "Gemeinsam üben"],
    ["teilnehmende", "Für Teilnehmende"],
    ["hinweise", "Quellen und Freigaben"],
  ];

  // Nur vorhandene, zum tatsächlichen Ablauf passende Zeichen. Fehlende
  // Metaphern werden nicht durch Video-, Warn- oder Erfolgszeichen ersetzt.
  const BEREICH_ZEICHEN = {durchfuehren:'plan', leitfaden:'lesen', quiz:'quiz'};
  function bereichZeichen(bereich) {
    const key = BEREICH_ZEICHEN[bereich];
    return key ? `<img class="orientierung-zeichen" src="assets/pictograms/${key}.svg" width="28" height="28" alt="" aria-hidden="true">` : '';
  }

  // ------------------------------------------------------------ Hilfen

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /* Verweise auf die Lernplattform in den Notizen anklickbar machen.
     Nur bekannte Muster: #thema-…[:…] und praxis/<app>.html. */
  function verlinkt(text) {
    return esc(text)
      .replace(/(^|[\s(„])(#thema-[a-z]+(?::[a-z]+)?)/g,
        (m, vor, h) => `${vor}<a href="index.html${h}" target="_blank" rel="noopener">${h}</a>`)
      .replace(/(^|[\s(\/])(praxis\/[a-z]+\.html)/g,
        (m, vor, p) => `${vor}<a href="${p}" target="_blank" rel="noopener">${p}</a>`);
  }

  function groesse(bytes) {
    return bytes >= 1024 * 1024
      ? (bytes / 1024 / 1024).toFixed(1).replace(".", ",") + " MB"
      : Math.round(bytes / 1024) + " KB";
  }

  /* Kleines Markdown für die Anleitung zum Arbeitsmaterial:
     Absätze, Listen, Tabellen, **fett**, `code`. */
  function md(text) {
    const inline = (s) => esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/`([^`]+)`/g, "<code>$1</code>");
    const out = [];
    const zeilen = text.split("\n");
    let i = 0;
    while (i < zeilen.length) {
      const z = zeilen[i];
      if (!z.trim()) { i++; continue; }
      if (z.startsWith("|")) {
        const rows = [];
        while (i < zeilen.length && zeilen[i].startsWith("|")) {
          const cells = zeilen[i].trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
          if (!cells.every((c) => /^:?-+:?$/.test(c))) rows.push(cells);
          i++;
        }
        out.push(`<div class="ws-tabelle"><table><thead><tr>${rows[0].map((c) => `<th scope="col">${inline(c)}</th>`).join("")}</tr></thead><tbody>`
          + rows.slice(1).map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`).join("")
          + `</tbody></table></div>`);
        continue;
      }
      if (/^(- |\d+\. )/.test(z)) {
        const geordnet = /^\d+\. /.test(z);
        const items = [];
        while (i < zeilen.length && /^(- |\d+\. )/.test(zeilen[i])) {
          items.push(zeilen[i].replace(/^(- |\d+\. )/, ""));
          i++;
        }
        const tag = geordnet ? "ol" : "ul";
        out.push(`<${tag}>${items.map((t) => `<li>${inline(t)}</li>`).join("")}</${tag}>`);
        continue;
      }
      const absatz = [];
      while (i < zeilen.length && zeilen[i].trim() && !/^(\||- |\d+\. )/.test(zeilen[i])) {
        absatz.push(zeilen[i]);
        i++;
      }
      out.push(`<p>${inline(absatz.join(" "))}</p>`);
    }
    return out.join("");
  }

  function readme(d, titel) {
    return d.arbeitsmaterial_readme.abschnitte[titel] || "";
  }

  function weitere(d, titel) {
    const w = d.folien[0].weitere.find((x) => x.titel === titel);
    return w ? w.text : "";
  }

  function quelle(text) {
    return `<p class="ws-quelle">Quelle: ${text}</p>`;
  }

  function metadatenHtml(info,version) {
    const m=info.katalog.metadaten;
    const feld=(label,v)=>`<dt>${esc(label)}</dt><dd>${esc(Array.isArray(v.wert)?v.wert.join(', '):v.wert)} <span class="ws-klein">(${esc(v.status)})</span></dd>`;
    return `<details class="ws-aufklapp ws-metadaten"><summary>Quelle, Sprachstufe und Freigaben</summary><dl class="ws-dl">${feld('Thema',m.thema)}${feld('Materialart',m.materialart)}${feld('Zielgruppe',m.zielgruppe)}${feld('Sprachstufe',m.sprachstufe)}
      <dt>Quelle</dt><dd>${esc(info.seite[1]||info.pfad.split('/').pop())}</dd>
      <dt>Stand</dt><dd>${esc(version)}</dd><dt>Nutzungsrechte (${esc(info.katalog.rechte_status)})</dt><dd>${esc(info.katalog.rechte)}</dd><dt>Quellenstatus (${esc(info.katalog.freigabe_status)})</dt><dd>${esc(info.katalog.freigabe)}. Ein Bestandsnachweis ist keine institutionelle Freigabe.</dd></dl></details>`;
  }

  function dateiLink(info, text, klasse) {
    return `<a class="${klasse || "ws-datei"}" href="${esc(info.pfad)}" download>`
      + `${esc(text)} <span class="ws-datei-meta">${esc(info.pfad.split(".").pop().toUpperCase())} · ${groesse(info.bytes)}</span></a>`;
  }

  function statusChip(text, art) {
    return `<span class="ws-chip ws-chip-${art}">${esc(text)}</span>`;
  }

  // ------------------------------------------------------------ Abschnitte der Präsentation

  /* Abschnitte nach den Folientiteln: Trennfolien „Thema 1–4" sowie
     „Pause", „Praxis", erste Quizfolie und „Das haben wir gelernt". */
  function abschnitte(d) {
    const out = [];
    d.folien.forEach((f) => {
      let name = null;
      if (f.nr === 1) name = "Ankommen";
      else if (f.trenner) name = f.titel;
      else if (f.titel === "Pause") name = "Pause";
      else if (f.titel === "Praxis") name = "Praxis";
      else if (/Frage 1 von/.test(f.titel)) name = "Quiz-Gespräch";
      else if (f.titel === "Das haben wir gelernt") name = "Abschluss";
      if (name) out.push({ name, von: f.nr, folien: [] });
      out[out.length - 1].folien.push(f);
    });
    out.forEach((a) => {
      a.bis = a.folien[a.folien.length - 1].nr;
      a.minuten = a.folien.reduce((s, f) => s + (parseInt((f.notizen.Zeit || "").replace(/\D+/g, ""), 10) || 0), 0);
    });
    return out;
  }

  // ------------------------------------------------------------ Ansichten

  function ansichtUeberblick(id, d) {
    const f1 = d.folien[0];
    const unter = f1.zeilen.find((z) => z.art === "text");
    const ablauf = weitere(d, "Ablauf").replace(/\.$/, "").split(" · ");
    const ziele = weitere(d, "Lernziele des Moduls").split(/\s*\(\d\)\s*/).filter(Boolean);
    const pflicht = d.arbeitsmaterial.filter((a) => a.einsatz.startsWith("Pflicht")).length;
    const karten = [
      ["folien", "Präsentation im Browser", `${d.folien.length} Folien mit Notizen zu Lernziel, Methode, Zeit und Material`],
      ["leitfaden", "Trainerleitfaden", `PDF direkt ansehen · ${d.leitfaden.seite.slice(-1)[0] || ""}`],
      ["material", "Arbeitsmaterial", `${d.arbeitsmaterial.length} Vorlagen, davon ${pflicht} Pflicht · ansehen, drucken, bearbeiten`],
      ["quiz", "Quiz-Gespräch", `Karten-Quiz aus den Originalfolien · Kahoot nur nach Freigabe`],
      ["teilnehmende", "Für Teilnehmende", "Klick-Anleitung, QR-Code und Einstiege in die Lernplattform"],
    ];
    return `
      ${d.zuordnung.status==='vorläufig'?'<p class="ws-hinweis">Eigenständiger Workshop Cybermobbing. Die fachliche Zuordnung zum Thema Hilfe bei Problemen ist vorläufig.</p>':''}
      <section class="ws-held card">
        <p class="ws-ueber">Workshop für Gruppen · ${esc(d.praesentation.seite.slice(-1)[0] || "")}</p>
        <h2>${esc(f1.titel)}</h2>
        ${unter ? `<p class="ws-held-unter">${esc(unter.text)}</p>` : ""}
        <div class="ws-held-aktionen">
          <a class="ws-knopf primaer" href="#${id}/durchfuehren/1">Workshop durchführen</a>
          <a class="ws-knopf" href="#${id}/material">Material vorbereiten</a>
          ${dateiLink(d.praesentation, "PowerPoint herunterladen", "ws-knopf ws-knopf-leise")}
        </div>
      </section>

      <section class="ws-raster" aria-label="Bereiche">
        ${karten.map(([b, t, s]) => `<a class="ws-kachel card" href="#${id}/${b}"><span class="ws-kachel-titel">${esc(t)}</span><span class="ws-kachel-text">${esc(s)}</span></a>`).join("")}
      </section>

      <div class="ws-zwei">
        <section class="card ws-block">
          <h3>Ablauf (90 Minuten)</h3>
          <ol class="ws-ablauf">${ablauf.map((s) => {
            const m = s.match(/^(\d+–\d+)\s+(.*)$/);
            return m ? `<li><span class="ws-zeit">${esc(m[1])}</span><span>${esc(m[2])}</span></li>` : `<li><span></span><span>${esc(s)}</span></li>`;
          }).join("")}</ol>
          ${quelle("Sprechernotiz Folie 1, „Ablauf“")}
        </section>
        <section class="card ws-block">
          <h3>Lernziele</h3>
          <ol class="ws-ziele">${ziele.map((z) => `<li>${esc(z)}</li>`).join("")}</ol>
          ${quelle("Sprechernotiz Folie 1, „Lernziele des Moduls“")}
        </section>
      </div>

      <section class="card ws-block">
        <h3>Vorbereitung</h3>
        <dl class="ws-dl">
          <dt>Am Vortag</dt><dd>${verlinkt(weitere(d, "Vorbereitung am Vortag"))}</dd>
          <dt>Material gesamt</dt><dd>${verlinkt(weitere(d, "Material gesamt"))}</dd>
        </dl>
        ${quelle("Sprechernotiz Folie 1")}
      </section>

      <details class="card ws-block ws-aufklapp">
        <summary>Sensible Themen</summary>
        <p>${esc(weitere(d, "Sensible Themen"))}</p>
        ${quelle("Sprechernotiz Folie 1, „Sensible Themen“")}
      </details>
      <details class="card ws-block ws-aufklapp">
        <summary>Was live passiert – und was auf der Lernplattform</summary>
        <p>${verlinkt(weitere(d, "Live oder Lernplattform"))}</p>
        ${quelle("Sprechernotiz Folie 1, „Live oder Lernplattform“")}
      </details>`;
  }

  function folieBuehne(f) {
    if (f.trenner) {
      const [kopf, titel] = f.titel.split(" · ");
      return `<div class="ws-folie ws-folie-trenner"><p class="ws-folie-klein">${esc(kopf)}</p><p class="ws-folie-gross">${esc(titel || "")}</p></div>`;
    }
    const zeilen = f.zeilen.map((z) => {
      if (z.art === "platzhalter") return `<p class="ws-platzhalter">${esc(z.text)}</p>`;
      if (z.art === "bild") return `<p class="ws-platzhalter ws-platzhalter-qr">${esc(z.text)}</p>`;
      if (z.art === "punkt") return `<p class="ws-punkt"><span class="ws-marke">${esc(z.marke)}</span><span>${esc(z.text)}</span></p>`;
      return `<p>${esc(z.text)}</p>`;
    }).join("");
    return `<div class="ws-folie"><h3 class="ws-folie-titel">${esc(f.titel)}</h3><div class="ws-folie-text">${zeilen}</div></div>`;
  }

  function ansichtFolien(id, d, wert) {
    const n = Math.min(Math.max(parseInt(wert, 10) || 1, 1), d.folien.length);
    const f = d.folien[n - 1];
    const teile = abschnitte(d);
    const akt = teile.find((a) => n >= a.von && n <= a.bis);
    const reihenfolge = ["Lernziel", "Methode", "Sozialform", "Zeit", "Material", "Hinweis", "Bildvorschlag", "Lernplattform"];
    const notizen = reihenfolge.filter((k) => f.notizen[k]).map((k) =>
      `<dt>${esc(k)}</dt><dd>${verlinkt(f.notizen[k])}</dd>`).join("");
    const modul = f.weitere.length
      ? `<details class="ws-aufklapp ws-modul"><summary>Leitfaden zum ganzen Modul (${f.weitere.length} Abschnitte)</summary>${f.weitere.map((w) =>
          `<h4>${esc(w.titel)}</h4><p>${verlinkt(w.text)}</p>`).join("")}</details>`
      : "";
    const antwort = (f.notizen.Hinweis || '').match(/Passende Antwort: ([ABC])/);
    const korrekt = antwort && f.zeilen.find(z => z.art === 'punkt' && z.marke === antwort[1]);
    return `
      <div class="ws-folien">
        <nav class="ws-kapitel" aria-label="Abschnitte der Präsentation">
          ${teile.map((a) => `<a href="#${id}/folien/${a.von}" ${a === akt ? 'aria-current="true"' : ""}><span>${esc(a.name)}</span><span class="ws-kapitel-meta">Folie ${a.von}${a.bis > a.von ? "–" + a.bis : ""} · ${a.minuten} Min</span></a>`).join("")}
        </nav>
        <div class="ws-folien-haupt">
          <div class="ws-folien-leiste">
            <a class="ws-knopf" href="#${id}/folien/${Math.max(1, n - 1)}" ${n === 1 ? 'aria-disabled="true"' : ""} data-taste="ArrowLeft">← Zurück</a>
            <div class="ws-wahl"><label class="sr-only" for="wsFolienWahl">Folie wählen</label>
              <select id="wsFolienWahl">${d.folien.map((x) => `<option value="${x.nr}" ${x.nr === n ? "selected" : ""}>${x.nr}. ${esc(x.titel)}</option>`).join("")}</select>
            </div>
            <a class="ws-knopf" href="#${id}/folien/${Math.min(d.folien.length, n + 1)}" ${n === d.folien.length ? 'aria-disabled="true"' : ""} data-taste="ArrowRight">Weiter →</a>
            <button type="button" class="ws-knopf ws-knopf-leise" id="wsVollbild">Vollbild</button>
          </div>
          <figure class="ws-buehne" id="wsBuehne" aria-label="Folie ${n} von ${d.folien.length}" tabindex="0">
            ${folieBuehne(f)}
            ${korrekt ? `<details class="ws-aufloesung"><summary>Passende Antwort zeigen</summary><p>${esc(korrekt.marke)}: ${esc(korrekt.text)}</p></details>` : ''}
            <figcaption class="ws-folie-nr">${n} / ${d.folien.length}</figcaption>
          </figure>
          <p class="ws-klein">Textansicht der Originalfolie. Gestrichelte Rahmen sind Platzhalter, die auch in der PowerPoint noch kein Bild haben.
            Pfeiltasten blättern. Für den Beamer: ${dateiLink(d.praesentation, "PowerPoint-Original", "ws-link")}.</p>
        </div>
        <aside class="ws-notizen card" tabindex="0" aria-label="Notizen zu Folie ${n}">
          <h3>Notizen für die Leitung</h3>
          <dl class="ws-dl">${notizen || "<dt>Notiz</dt><dd>keine</dd>"}</dl>
          ${modul}
          ${quelle("Sprechernotizen der PowerPoint, unverändert")}
        </aside>
      </div>`;
  }

  /* imSchritt (Schritt 3, 07.11.2026): Im Durchführungsschritt stehen die
     Seiten in einem Feld mit begrenzter Höhe (bedienung.css). Es ist per
     Tastatur erreichbar und benannt, damit es sich mit Pfeiltasten blättern
     lässt. Im Materialbereich bleibt die Ansicht unverändert. */
  function pdfAnsicht(info, titel, imSchritt) {
    const v=window.PDF_VORSCHAU?.[info.pfad];
    if(v && v.sha256===info.sha256)return `<div class="ws-pdf-seiten" ${imSchritt?`role="region" tabindex="0" aria-label="Seiten: ${esc(titel)}"`:`aria-label="${esc(titel)}"`}>
      <p><a class="ws-knopf" href="${esc(v.druck)}" target="_blank" rel="noopener">Druckansicht der Seiten öffnen</a>
      <a class="ws-link" href="${esc(info.pfad)}" target="_blank" rel="noopener">Original-PDF öffnen</a></p>
      ${v.seiten.map((seite,i)=>`<figure><figcaption>Seite ${i+1} von ${v.seiten.length}</figcaption><img src="${esc(seite.bild)}" alt="Originalseite ${i+1} – ${esc(titel)}" loading="lazy"><details><summary>Text dieser Seite</summary><pre>${esc(seite.text)}</pre></details></figure>`).join('')}
    </div>`;
    return `
      <div class="ws-pdf">
        <iframe src="${esc(info.pfad)}#view=FitH" title="${esc(titel)}" loading="lazy"></iframe>
      </div>
      <p class="ws-klein">Wird die PDF hier nicht angezeigt?
        <a class="ws-link" href="${esc(info.pfad)}" target="_blank" rel="noopener">In neuem Tab öffnen</a>.</p>`;
  }

  function ansichtLeitfaden(id, d) {
    const ueber = weitere(d, "Über diesen Leitfaden");
    return `
      <section class="card ws-block">
        <div class="ws-block-kopf">
          <div><h2>Trainerleitfaden</h2><p class="ws-klein">${esc(d.leitfaden.seite.slice(1).join(" · "))}</p></div>
          <div class="ws-aktionen">
            <a class="ws-knopf" href="${esc(d.leitfaden.pfad)}" target="_blank" rel="noopener">Drucken / neuer Tab</a>
            ${dateiLink(d.leitfaden, "Herunterladen", "ws-knopf ws-knopf-leise")}
          </div>
        </div>
        <p class="ws-hinweis">${esc(ueber.split(". ").slice(-1)[0])} Dieselben Notizen stehen in der
          <a href="#${id}/folien/1">Präsentation im Browser</a> neben jeder Folie.</p>
        ${metadatenHtml(d.leitfaden,d.modulstand.wert)}
        ${pdfAnsicht(d.leitfaden, "Trainerleitfaden " + id)}
      </section>`;
  }

  function materialWarnung(d, material) {
    return material.datei === 'Hilfe-Karte_Meine_Hilfe'
      ? `<div class="ws-hinweis ws-hinweis-warn"><h4>Vor dem Drucken ausfüllen</h4>${md(readme(d, "2. Was die Einrichtung vor dem Workshop ausfüllt"))}
        <h4>Datenschutz</h4>${md(readme(d, "6. Datenschutz"))}${quelle("Anleitung zum Arbeitsmaterial, Abschnitte 2 und 6")}</div>` : '';
  }

  // Dieselben Quellen und dieselbe PDF-Ansicht wie im Materialbereich.
  // Erst auf Wunsch geöffnet, ohne Schrittwechsel oder neuen Speicherzustand.
  function materialVorschau(d, material) {
    return `<div class="ws-direkt-inhalt">
      <p class="ws-aktionen"><a class="ws-knopf" href="${esc(material.pdf.pfad)}" target="_blank" rel="noopener">Drucken / neuer Tab</a>
      ${dateiLink(material.pptx, 'Zum Bearbeiten', 'ws-knopf ws-knopf-leise')}</p>
      ${materialWarnung(d, material)}
      ${metadatenHtml(material.pdf, d.arbeitsmaterial_readme.stand+' · '+d.arbeitsmaterial_readme.status)}
      ${pdfAnsicht(material.pdf, material.name, true)}
    </div>`;
  }

  function ansichtMaterial(id, d, wert) {
    const gewaehlt = d.arbeitsmaterial.find((a) => a.datei === wert) || d.arbeitsmaterial[0];
    const liste = d.arbeitsmaterial.map((a) => {
      const art = a.einsatz.startsWith("Pflicht") ? "pflicht" : "empfohlen";
      return `<li><a href="#${id}/material/${esc(a.datei)}" ${a === gewaehlt ? 'aria-current="true"' : ""}>
        <span class="ws-mat-titel">${esc(a.pdf.seite[1] || a.name)}</span>
        <span class="ws-mat-meta">${statusChip(a.einsatz, art)} ${esc(a.format)} · ${esc(a.seiten)} S.</span></a></li>`;
    }).join("");
    const extra = materialWarnung(d, gewaehlt);
    const folie5 = gewaehlt.einsatz.match(/Folie (\d+)/);
    return `
      <div class="ws-material">
        <nav class="ws-mat-liste card" aria-label="Arbeitsmaterial ${esc(d.name)}">
          <h2>Arbeitsmaterial</h2>
          <ul>${liste}</ul>
          <p class="ws-klein">Status laut Anleitung: ${esc(d.arbeitsmaterial_readme.status)}</p>
          <a class="ws-link" href="#${id}/material/druck">Druck- und Laminier-Hinweise</a>
        </nav>
        <section class="card ws-block ws-mat-detail">
          ${wert === "druck" ? `
            <h2>Drucken, laminieren, mitgeben</h2>
            ${md(readme(d, "3. Drucken"))}
            <h3>Laminieren</h3>${md(readme(d, "4. Was laminiert wird"))}
            <h3>Mitnehmen</h3>${md(readme(d, "5. Was Teilnehmende mitnehmen"))}
            ${quelle(`Anleitung zum Arbeitsmaterial (<code>${esc(d.arbeitsmaterial_readme.pfad)}</code>), Abschnitte 3–5`)}
          ` : `
            <div class="ws-block-kopf">
              <div>
                <h2>${esc(gewaehlt.pdf.seite[1] || gewaehlt.name)}</h2>
                <p class="ws-klein">${esc(gewaehlt.pdf.seite.slice(2).join(" · "))}${folie5 ? ` · gebraucht auf <a href="#${id}/folien/${folie5[1]}">Folie ${folie5[1]}</a>` : ""}</p>
              </div>
              <div class="ws-aktionen">
                <a class="ws-knopf" href="${esc(gewaehlt.pdf.pfad)}" target="_blank" rel="noopener">Drucken / neuer Tab</a>
                ${dateiLink(gewaehlt.pptx, "Zum Bearbeiten", "ws-knopf ws-knopf-leise")}
              </div>
            </div>
            ${extra}
            ${metadatenHtml(gewaehlt.pdf,d.arbeitsmaterial_readme.stand+" · "+d.arbeitsmaterial_readme.status)}
            ${pdfAnsicht(gewaehlt.pdf, gewaehlt.name)}
          `}
        </section>
      </div>`;
  }

  function ansichtQuiz(id, d) {
    const quiz = d.folien.filter((f) => /^Quiz-Gespräch/.test(f.titel));
    const fragen = quiz.map((f, i) => {
      const frage = f.zeilen.find((z) => z.art === "text");
      const kern = /KERNFRAGE/.test(f.notizen.Hinweis || "");
      const passend = (f.notizen.Hinweis || "").match(/Passende Antwort: ([ABC])/);
      return `<li class="card ws-frage">
        <div class="ws-frage-kopf">${statusChip(kern ? "Kernfrage" : "Reservefrage", kern ? "pflicht" : "empfohlen")}
          <a href="#${id}/folien/${f.nr}">Folie ${f.nr} zeigen</a></div>
        <p class="ws-frage-text">${i + 1}. ${esc(frage ? frage.text : "")}</p>
        <ul class="ws-antworten">${f.zeilen.filter((z) => z.art === "punkt").map((z) =>
          `<li><span class="ws-marke">${esc(z.marke)}</span>${esc(z.text)}</li>`).join("")}</ul>
        ${passend?`<details class="ws-quiz-loesung"><summary>Passende Antwort zeigen</summary><p>${esc(passend[1])}: ${esc(f.zeilen.find(z=>z.art==='punkt'&&z.marke===passend[1])?.text||'')}</p></details>`:''}
      </li>`;
    }).join("");
    const k = d.kahoot;
    const abgleich = d.quiz_abgleich.length
      ? `<ul>${d.quiz_abgleich.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>`
      : `<p>Automatisch geprüft: Fragen, Antworten und markierte Lösungen der Kahoot-Datei stimmen wörtlich mit den zugehörigen Originalfolien überein.</p>`;
    return `
      <section class="card ws-block">
        <h2>Quiz-Gespräch mit Antwortkarten A/B/C</h2>
        <p class="ws-hinweis">${esc(weitere(d, "Quiz"))}</p>
        <div class="ws-held-aktionen">
          <a class="ws-knopf primaer" href="#${id}/folien/${quiz[0] ? quiz[0].nr : 1}">Quiz in der Präsentation starten</a>
          <a class="ws-knopf" href="#${id}/material/Antwortkarten_ABC">Antwortkarten ansehen</a>
        </div>
        <p class="ws-klein">Die passende Antwort aus den Originalnotizen erscheint erst auf Wunsch. Erst gemeinsam besprechen, dann aufklappen.</p>
      </section>
      <ol class="ws-fragen">${fragen}</ol>
      <details class="card ws-block ws-aufklapp">
        <summary>Optionale sensible Gesprächsfrage</summary>
        <p>${verlinkt(weitere(d, "Optionale sensible Gesprächsfrage"))}</p>
        ${quelle("Sprechernotiz Folie 1")}
      </details>
      <section class="card ws-block ws-kahoot">
        <h3>Kahoot – nur nach Freigabe ${statusChip("optional", "offen")}</h3>
        <ul>${k.hinweise.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
        ${quelle("Kahoot-Datei, Hinweiszeilen")}
        <h4>Abgleich mit den Folien</h4>
        ${abgleich}
        ${dateiLink(d.kahoot_datei, "Kahoot-Vorlage herunterladen", "ws-knopf ws-knopf-leise")}
      </section>`;
  }

  function ansichtTeilnehmende(id, d) {
    const einstiege = [
      [`#thema-${d.thema}`, "Thema in der Lernplattform", "in drei Sprachstufen, mit Vorlesen"],
      [`#thema-${d.thema}:kurz`, "Kurz-Modus", "die wichtigsten Lektionen"],
      [`#thema-${d.thema}:quiz`, "Quiz", "zum Wiederholen allein"],
      [`#thema-${d.thema}:merk`, "Merk-Karte", "zum Mitnehmen drucken"],
      [`#thema-${d.thema}:uebung`, "Übungs-Handy", "für Personen ohne Handy oder ohne Konto · auf der Plattform derzeit nur per Direktadresse (Vor-Nutzertest)"],
    ].filter(([h]) => id !== 'cybermobbing' || !h.endsWith(':uebung'));
    return `
      <div class="ws-zwei">
        <section class="card ws-block">
          <h2>Einstiege in die Lernplattform</h2>
          <p class="ws-klein">Öffnet die Lernansicht so, wie Teilnehmende sie sehen – in einem neuen Tab.</p>
          <ul class="ws-einstiege">${einstiege.map(([h, t, s]) =>
            `<li><a href="index.html${h}" target="_blank" rel="noopener"><span class="ws-mat-titel">${esc(t)}</span><span class="ws-mat-meta"><code>${esc(h)}</code> · ${esc(s)}</span></a></li>`).join("")}</ul>
          ${quelle("Sprechernotizen Folie 1, 24 und 33")}
        </section>
        <section class="card ws-block ws-qr">
          <h2>QR-Code zum Thema</h2>
          <img src="${esc(d.qr)}" alt="QR-Code zum Thema ${esc(id)} der Lernplattform" width="200" height="200">
          <p class="ws-klein">Vorhandene Datei der Lernplattform (<code>${esc(d.qr)}</code>). Sie führt zur veröffentlichten Plattform.
            Die QR-Bilder der Originalpräsentation bleiben im Original erhalten. Die Links links daneben öffnen dagegen diese Lernplattform.</p>
        </section>
      </div>
      ${d.klick_anleitung ? `<section class="card ws-block">
        <div class="ws-block-kopf">
          <div><h2>Klick-Anleitung ${esc(d.name)}</h2><p class="ws-klein">Vorhandene Anleitung für die Praxis am eigenen Handy:</p></div>
          <a class="ws-knopf" href="${esc(d.klick_anleitung)}" target="_blank" rel="noopener">In neuem Tab öffnen</a>
        </div>
        <div class="ws-handy"><iframe src="${esc(d.klick_anleitung)}" title="Klick-Anleitung ${esc(id)}" loading="lazy"></iframe></div>
      </section>` : ""}`;
  }

  function ansichtHinweise(id, d) {
    const dateien = [
      ["Präsentation", d.praesentation], ["Trainerleitfaden", d.leitfaden], ["Kahoot-Vorlage", d.kahoot_datei],
      ...d.arbeitsmaterial.flatMap((a) => [[a.name + " (PDF)", a.pdf], [a.name + " (PowerPoint)", a.pptx]]),
    ];
    const fragen = {};
    dateien.forEach(([, i]) => i.katalog.offene_fragen.forEach((q) => { fragen[q.id] = q.frage; }));
    return `
      <section class="card ws-block">
        <h2>Lizenz und Qualitätssicherung</h2>
        <ul class="ws-status">
          <li>${statusChip("offen", "offen")} <strong>Lizenz des Workshop-Materials:</strong> Für Folien, Leitfaden, Kahoot und Arbeitsmaterial ist keine eigene Lizenz angegeben (Katalog OF-02).</li>
          <li>${statusChip("offen", "offen")} <strong>Arbeitsmaterial:</strong> ${esc(d.arbeitsmaterial_readme.status)}</li>
          <li>${statusChip("bestätigt", "ok")} <strong>Bestand:</strong> Die Originaldateien sind in der vorhandenen Material-Seite der Plattform verlinkt (<code>docs/material</code>). Die Materialien sind hier zusätzlich im Browser nutzbar. Eine Lizenz- oder QM-Freigabe folgt daraus nicht.</li>
          <li>${statusChip("offen", "offen")} <strong>Bilder:</strong> Die Präsentation hat Platzhalter statt Bildern. Die konkreten Bildanforderungen stehen in den unveränderten Notizen der jeweiligen Folie. Die Browseransicht zeigt keine Bilder außer dem vorhandenen Kopf-Bild und QR-Code der Plattform.</li>
        </ul>
      </section>
      ${metadatenHtml(d.praesentation,d.modulstand.wert)}
      <section class="card ws-block">
        <h3>Offene Fragen aus dem Materialkatalog</h3><p>Der technische Verweis von Hilfe auf Cybermobbing ist beauftragt. Die fachliche Zuordnung bleibt vorläufig (OF-10). Rechte und andere Freigaben bleiben davon unberührt.</p>
        <dl class="ws-dl">${Object.keys(fragen).sort().map((q) => `<dt>${esc(q)}</dt><dd>${esc(fragen[q])}</dd>`).join("")}</dl>
      </section>
      <section class="card ws-block">
        <h3>Offene Punkte laut Anleitung zum Arbeitsmaterial</h3>
        ${md(readme(d, "8. Offene Punkte"))}
      </section>
      <details class="card ws-block ws-aufklapp">
        <summary>Bekannte Unterschiede zwischen Workshop und Lernplattform</summary>
        <p>${esc(weitere(d, "Bekannte Widersprüche zur Lernplattform"))}</p>
        ${quelle("Sprechernotiz Folie 1")}
      </details>
      <section class="card ws-block">
        <h3>Verwendete Dateien (keine Kopien)</h3>
        <div class="ws-tabelle"><table>
          <thead><tr><th scope="col">Datei</th><th scope="col">Katalog</th><th scope="col">Rechte</th><th scope="col">Größe</th><th scope="col">SHA-256 (Anfang)</th></tr></thead>
          <tbody>${dateien.map(([t, i]) => `<tr><td>${esc(t)}<br><code>${esc(i.original)}</code></td><td><code>${esc(i.katalog.id)}</code></td>
            <td>${statusChip(i.katalog.rechte_status, i.katalog.rechte_status === "bestätigt" ? "ok" : "offen")} ${esc(i.katalog.rechte)}</td>
            <td>${groesse(i.bytes)}</td><td><code>${esc(i.sha256.slice(0, 12))}</code></td></tr>`).join("")}</tbody>
        </table></div>
      </section>`;
  }

  function ansichtAuswahl() {
    const themen = Object.keys(DATEN);
    return `<section class="card ws-block"><h2>Workshop-Material nach Thema</h2>
      <ul class="ws-einstiege">${themen.map((t) => `<li><a href="#${esc(t)}"><span class="ws-mat-titel">${esc(DATEN[t].folien[0].titel)}</span></a></li>`).join("")}</ul>
      <p class="ws-klein">Fünf vorhandene Workshopmodule. Cybermobbing ist eigenständig; sein Verweis bei Hilfe bei Problemen ist fachlich vorläufig.</p></section>`;
  }

  // ------------------------------------------------------------ Steuerung

  function zeigen() {
    let route;try{route=decodeURIComponent(location.hash.slice(1));}catch{route='';}
    const [id, angefragt = "ueberblick", wert = ""] = route.split("/");
    const bereich = BEREICHE.some(([b])=>b===angefragt) ? angefragt : "ueberblick";
    const d = Object.prototype.hasOwnProperty.call(DATEN,id) ? DATEN[id] : null;
    /* Schritt 3 (07.11.2026): Der Rückweg nennt das Lernthema, zu dem der
       Workshop gehört (Titel wie in topics.js). Ohne Workshop bleibt
       „Zur Lernplattform“. */
    const rueck = document.getElementById("wsZurueck");
    rueck.href = d ? `index.html#thema-${d.thema}` : "index.html";
    rueck.textContent = d ? `← Zum Lernthema ${THEMEN_TITEL[d.thema] || d.name}` : "← Zur Lernplattform";
    if (!d) {
      document.getElementById('wsTitel').textContent='Workshop-Material';
      document.getElementById('wsUnter').textContent='Für Kursleitungen';
      document.getElementById('wsDruckTitel').textContent='Workshop-Material · Alex und Tilda';
      reiter.innerHTML = "";
      document.querySelector('.ws-bereichwahl').hidden=true;
      main.innerHTML = ansichtAuswahl();
      return;
    }
    document.querySelector('.ws-bereichwahl').hidden=false;
    document.getElementById('wsBereichWahl').innerHTML=BEREICHE.map(([b,t])=>`<option value="${b}" ${b===bereich?'selected':''}>${esc(t)}</option>`).join('');
    const titel = (BEREICHE.find((b) => b[0] === bereich) || BEREICHE[0])[1];
    document.getElementById("wsTitel").textContent = `Workshop ${d.name}`;
    document.getElementById("wsUnter").textContent = titel;
    document.title = `${titel} · Workshop ${id} · Für Kursleitungen`;
    document.getElementById('wsDruckTitel').textContent=`Workshop ${d.name} · ${titel} · Alex und Tilda · keine Lizenz- oder QM-Freigabe`;
    const bereichLink=([b,t])=>`<a href="#${id}/${b}" ${b===bereich?'aria-current="page"':''}>${bereichZeichen(b)}<span>${esc(t)}</span></a>`;
    reiter.innerHTML = BEREICHE.slice(0,3).map(bereichLink).join('')
      + `<details class="ws-weitere-bereiche" ${BEREICHE.slice(3).some(([b])=>b===bereich)?'open':''}><summary>Weitere Bereiche</summary><div>${BEREICHE.slice(3).map(bereichLink).join('')}</div></details>`;
    const ansicht = {
      ueberblick: ansichtUeberblick, durchfuehren:(id,d,wert)=>window.WorkshopDurchfuehrung.html({id,d,wert,esc,verlinkt,quelle,materialVorschau}), folien: ansichtFolien, leitfaden: ansichtLeitfaden,
      material: ansichtMaterial, quiz: ansichtQuiz, teilnehmende: ansichtTeilnehmende, hinweise: ansichtHinweise,
    }[bereich] || ansichtUeberblick;
    main.innerHTML = ansicht(id, d, wert);
    // Native Auswahl auf kleinen Displays: Bedeutung zusätzlich als Text,
    // das vorhandene Zeichen steht außerhalb des nativen Optionsmenüs.
    const bereichLabel=document.querySelector('label[for="wsBereichWahl"]');
    bereichLabel.innerHTML=bereichZeichen(bereich)+'<span>Workshopbereich</span>';
    ansage.textContent = bereich === "folien" ? `Folie ${wert || 1}` : titel;

    const schritt = document.getElementById('wsSchrittWahl');
    if(schritt)schritt.addEventListener('change',()=>location.hash=`${id}/durchfuehren/${schritt.value}`);
    const wahl = document.getElementById("wsFolienWahl");
    if (wahl) wahl.addEventListener("change", () => { location.hash = `${id}/folien/${wahl.value}`; });
    const voll = document.getElementById("wsVollbild");
    if (voll) {
      voll.addEventListener("click", () => {
        if (document.fullscreenElement) document.exitFullscreen().catch(()=>{});
        else if (document.documentElement.requestFullscreen) {
          document.body.classList.add('ws-praesentieren');
          document.documentElement.requestFullscreen().catch(()=>{document.body.classList.remove('ws-praesentieren');ansage.textContent='Vollbild ist hier nicht verfügbar. Nutze die Vollbildfunktion des Browsers.';});
        } else ansage.textContent='Nutze die Vollbildfunktion des Browsers.';
      });
    }
  }

  document.addEventListener('fullscreenchange',()=>{if(!document.fullscreenElement)document.body.classList.remove('ws-praesentieren');});
  document.getElementById('wsBereichWahl').addEventListener('change',e=>{const id=location.hash.slice(1).split('/')[0];location.hash=`${id}/${e.target.value}`;});
  document.querySelector('.skip-link').addEventListener('click',e=>{e.preventDefault();main.focus();});
  document.getElementById('wsDrucken').addEventListener('click',()=>window.print());
  let printDetails=[];
  window.addEventListener('beforeprint',()=>{printDetails=[...main.querySelectorAll('details')].map(e=>[e,e.open]);printDetails.forEach(([e])=>{if(!e.matches('.ws-quiz-loesung,.ws-aufloesung'))e.open=true;});});
  window.addEventListener('afterprint',()=>{printDetails.forEach(([e,open])=>e.open=open);printDetails=[];});
  let letzterBereich = "";
  window.addEventListener("hashchange", () => {
    const bereich = location.hash.split("/")[1] || "";
    const focusKey=document.activeElement?.getAttribute('data-taste');
    const focusId=document.activeElement?.id;
    zeigen();
    if(['folien','durchfuehren'].includes(bereich) && letzterBereich===bereich){
      const target=focusId?document.getElementById(focusId):focusKey?document.querySelector(`[data-taste="${focusKey}"]`):null;
      if(target)target.focus({preventScroll:true});
    }
    // Beim Blättern in den Folien bleibt der Fokus, sonst springt er zum Inhalt
    if (!(["folien","durchfuehren"].includes(bereich) && letzterBereich === bereich)) main.focus({ preventScroll: false });
    letzterBereich = bereich;
  });

  document.addEventListener("keydown", (e) => {
    if (!/\/(folien|durchfuehren)/.test(location.hash) || e.altKey || e.ctrlKey || e.metaKey) return;
    if (/^(INPUT|SELECT|TEXTAREA)$/.test(document.activeElement.tagName)) return;
    const ziel = document.querySelector(`[data-taste="${e.key}"]`);
    if (ziel && !ziel.hasAttribute("aria-disabled")) {
      e.preventDefault();
      location.hash = ziel.getAttribute("href").slice(1);
    }
  });

  if(new URLSearchParams(location.search).get('praesentation')==='1')document.body.classList.add('ws-nur-folie');
  letzterBereich = location.hash.split("/")[1] || "";
  zeigen();
})();
