/* Entwurf „Workshop beim Thema" – die einzige Erweiterung der Lernansicht.

   buildPraxisLinks(topic) aus app.js füllt den aufklappbaren Bereich
   „Für Begleitpersonen" am Ende eines Themas. Hier wird davor ein Hinweis
   auf das Workshop-Material gesetzt – nur für Themen, zu denen
   workshop-daten.js Daten hat (fünf Module, Cybermobbing bei Hilfe). Alles andere bleibt,
   wie es ist: Lernende sehen den Hinweis nur, wenn sie den Begleitbereich
   selbst aufklappen. */
(function () {
  if (typeof buildPraxisLinks !== "function" || !window.WORKSHOP_DATEN) return;
  const original = buildPraxisLinks;

  buildPraxisLinks = function (topic) {
    const basis = original(topic).replace("Methodik-Blätter", "Trainerleitfäden");
    const daten = topic && Object.values(window.WORKSHOP_DATEN).find(d => d.thema === topic.id);
    const index=window.MATERIAL_INDEX?.[topic?.id];
    const angebote=index?`<details class="themen-material"><summary>Passendes Material zu diesem Thema</summary><ul>${index.angebote.map(m=>`<li><a href="${escapeHtml(m.href)}">${escapeHtml(m.titel)}</a></li>`).join('')}</ul><p>Die Begleithilfe und ihre Druckfunktion stehen in diesem Bereich. Es werden nur vorhandene Angebote gezeigt.</p></details>`:'';
    if (!daten) return basis+angebote;
    const folien=daten.folien.length, material=daten.arbeitsmaterial.length;
    return `<section class="workshop-zugang" aria-label="Workshop für Kursleitungen"><h3>Workshop für Gruppen: ${escapeHtml(daten.name)}</h3>`
      + `<p><a class="workshop-start" href="workshop.html#${escapeHtml(daten.name.toLowerCase())}/durchfuehren/1">Workshop durchführen: ${escapeHtml(daten.name)}</a></p>`
      + `<p><a href="workshop.html#${escapeHtml(daten.name.toLowerCase())}">Workshop-Material ${escapeHtml(daten.name)} öffnen</a> – ${folien} Folien mit Notizen, Trainerleitfaden, ${material} Druckvorlagen und Quiz.</p>`
      + (daten.zuordnung.status==='vorläufig'?'<p>Cybermobbing bleibt ein eigenständiger Workshop. Die fachliche Zuordnung zu Hilfe bei Problemen ist vorläufig.</p>':'')
      + `<p>Private Prüffassung. Bildplatzhalter und offene Rechte beachten.</p></section>`+basis+angebote;
  };
  // Der Kursleitungszugang steht nach dem Öffnen sofort vor den längeren Begleithinweisen.
  // Deren Inhalt und Druckfunktion bleiben vollständig erhalten.
  const companionOriginal=buildCompanionPanel;
  buildCompanionPanel=function(topic){
    const panel=companionOriginal(topic);
    const zugang=panel.match(/<section class="workshop-zugang"[\s\S]*?<\/section>/);
    return zugang?panel.replace(zugang[0],'').replace('<div class="companion-body">','<div class="companion-body">'+zugang[0]):panel;
  };
  // Initialroute wurde vom Kern bereits aufgebaut: mit derselben Route neu zeichnen.
  if(content.querySelector('.companion-panel'))handleHash();
})();
