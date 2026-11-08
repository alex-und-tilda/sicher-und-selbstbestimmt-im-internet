/* Schrittweise Kursleitung aus denselben Foliennotizen wie die Präsentation.
   Kein zusätzlicher Lerninhalt, kein Speichern und keine automatischen Zeitvorgaben. */
/* Schritt 3 (07.11.2026): Bei geöffneter Materialvorschau führt
   „Zu den Moderationshinweisen“ direkt zu den Hinweisen dieses Schritts.
   Ein Knopf statt eines Sprunglinks, weil die Adresse (#modul/durchfuehren/n)
   den Schritt bestimmt und nicht verändert werden darf. */
document.addEventListener('click',e=>{
  const k=e.target.closest&&e.target.closest('.ws-zu-hinweisen');if(!k)return;
  const ziel=document.getElementById('wsHinweise');if(!ziel)return;
  ziel.focus({preventScroll:true});ziel.scrollIntoView({block:'start'});
});
window.WorkshopDurchfuehrung = {
  html({id,d,wert,esc,verlinkt,quelle,materialVorschau}) {
    const n=Math.min(Math.max(parseInt(wert,10)||1,1),d.folien.length);
    const f=d.folien[n-1];
    const notiz=(key)=>f.notizen[key]?`<section class="ws-durch-abschnitt"><h3>${esc(key)}</h3><p>${verlinkt(f.notizen[key])}</p></section>`:'';
    const material=(f.material_verweise||[]).map(m=>{
      const original=m.datei&&d.arbeitsmaterial.find(a=>a.datei===m.datei);
      const link=`<a href="${m.datei?`#${id}/material/${esc(m.datei)}`:esc(m.href)}" ${m.datei?'':'target="_blank" rel="noopener"'}>${esc(m.titel)}</a>`;
      return `<li>${original?`<details class="ws-direkt-material"><summary>${esc(m.titel)} hier ansehen</summary><p class="ws-zu-hinweisen-zeile"><button type="button" class="ws-link ws-zu-hinweisen">Zu den Moderationshinweisen</button></p>${materialVorschau(d,original)}<p>${link} · Alle Dateiformate und Materialübersicht</p></details>`:link}
        <details class="ws-zuordnung"><summary>Zuordnung ansehen</summary><p>${esc(m.beleg)} · ${esc(m.status)}</p></details></li>`;
    }).join('');
    const extras=f.weitere.length?`<details class="ws-aufklapp"><summary>Weitere Originalhinweise</summary>${f.weitere.map(w=>`<h3>${esc(w.titel||'Hinweis')}</h3><p>${verlinkt(w.text)}</p>`).join('')}</details>`:'';
    return `<section class="ws-durchfuehrung" aria-labelledby="wsSchrittTitel">
      <p class="ws-klein"><strong class="ws-position">Durchführungsschritt ${n} von ${d.folien.length}</strong><span class="ws-position-meta">Originalfolie ${n}${f.notizen.Zeit?' · '+esc(f.notizen.Zeit):''}</span></p>
      <progress class="orientierung-fortschritt" value="${n}" max="${d.folien.length}" aria-label="Workshop-Schritt" aria-valuetext="Schritt ${n} von ${d.folien.length}"></progress>
      <h2 id="wsSchrittTitel">${esc(f.titel)}</h2>
      <div class="ws-folien-leiste">
        <a class="ws-knopf" data-taste="ArrowLeft" href="#${id}/durchfuehren/${Math.max(1,n-1)}" ${n===1?'aria-disabled="true" tabindex="-1"':''}>← Zurück</a>
        <div class="ws-wahl"><label for="wsSchrittWahl">Schritt wählen</label>
          <select id="wsSchrittWahl">${d.folien.map(x=>`<option value="${x.nr}" ${x.nr===n?'selected':''}>${x.nr}. ${esc(x.titel)}</option>`).join('')}</select></div>
        <a class="ws-knopf" data-taste="ArrowRight" href="#${id}/durchfuehren/${Math.min(d.folien.length,n+1)}" ${n===d.folien.length?'aria-disabled="true" tabindex="-1"':''}>Weiter →</a>
      </div>
      <div class="ws-durch-spalten">
        <aside class="ws-durch-werkzeuge" aria-label="Werkzeuge für diesen Schritt">
          <p><a class="ws-knopf ws-hauptaktion" href="workshop.html?praesentation=1#${id}/folien/${n}" target="_blank" rel="noopener">Folie für die Gruppe öffnen</a></p>
          ${material?`<section class="ws-schritt-material"><h3>Passendes Material für diesen Schritt</h3><ul>${material}</ul></section>`:`<p><a href="#${id}/material">Vorhandene Materialien zum Workshop ansehen</a></p>`}
          <p><a href="#${id}/folien/${n}">Folie mit Notizen ansehen</a></p>
        </aside>
        <section class="ws-durch-notizen" id="wsHinweise" tabindex="-1" aria-label="Moderationshinweise zu diesem Schritt">
          ${notiz('Methode')}${notiz('Hinweis')}${notiz('Sozialform')}${notiz('Material')}
          <details class="ws-aufklapp"><summary>Lernziel und weitere Hinweise</summary>${notiz('Lernziel')}${notiz('Zeit')}${notiz('Bildvorschlag')}${notiz('Lernplattform')}</details>
          ${extras}${quelle('Unveränderte Sprechernotizen zu Originalfolie '+n)}
        </section>
      </div>
    </section>`;
  }
};
