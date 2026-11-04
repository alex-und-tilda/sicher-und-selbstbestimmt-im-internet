/* Neue Oberfläche auf dem vollständigen Materialbestand.
   Lerninhalte und Antwortauswertung bleiben in den Originalmodulen. */
RUECKMELDUNG.nochNichtTitel='Diese Antwort passt noch nicht.';
RUECKMELDUNG.passtTitel='Diese Antwort passt.';
const entwurfBilder={datenschutz:'datenschutz-private-daten',whatsapp:'whatsapp-fremde-nummer',facebook:'facebook-profil',instagram:'instagram-story',youtube:'youtube-werbung',snapchat:'snapchat-bilder',tiktok:'tiktok-trends',hilfe:'hilfe-unterstuetzung',ki:'ki-chatbot',fakes:'fakes-pruefen',betrug:'betrug-gewinn',einkaufen:'einkaufen-shop'};
const entwurfOriginalIntro=renderIntro;
renderIntro=function(){
 entwurfOriginalIntro();
 const area=content.querySelector('.intro-page');if(!area)return;
 area.className='entwurf-startseite';
 const resume=buildResumeLessonButton();
 area.innerHTML=`<section class="entwurf-home"><p class="entwurf-kicker">Dein Internet. Deine Entscheidung.</p><h1>In Ruhe lernen.<br> Selbst handeln.</h1><p>Alex und Tilda begleiten dich. Du wählst dein Thema und dein Tempo.</p>${resume||'<button type="button" class="intro-start-button" onclick="renderEinstiegAuswahl()">Lernen starten</button>'}<img src="assets/figures/alex-tilda-winken.webp" alt="Alex und Tilda winken dir zu."></section><section class="entwurf-choices" aria-label="Deine Möglichkeiten"><button class="entwurf-choice" onclick="renderMenu()"><img src="assets/pictograms/themen.svg" alt=""><span><strong>Alle 12 Themen</strong><small>Von Datenschutz bis Einkaufen</small></span></button><button class="entwurf-choice" onclick="renderMyPath()"><img src="assets/pictograms/lernweg.svg" alt=""><span><strong>Mein Lernweg</strong><small>Weiterlernen und wiederholen</small></span></button><button class="entwurf-choice" onclick="renderHelpPage()"><img src="assets/pictograms/help.svg" alt=""><span><strong>Ich möchte Hilfe</strong><small>Was du bei Problemen tun kannst</small></span></button></section><details class="einstieg-extra"><summary>Für Kursleitungen</summary><p>Workshops stehen direkt bei den Themen. Die vorhandenen Materialien findest du direkt beim passenden Thema.</p><a href="zugang.html#kursleitungen">Workshops für Kursleitungen öffnen</a></details><details class="einstieg-extra"><summary>Sprache und Einrichtung</summary><p>Du liest gerade: ${escapeHtml(LANGUAGE_LABEL[languageLevel])}.</p><button class="utility-button" onclick="openLanguageFromTools()">Sprache ändern</button><button class="utility-button" onclick="introStart()">App einrichten</button></details>${buildDailyQuestionCard()?'<details><summary>Deine Frage für heute</summary>'+buildDailyQuestionCard()+'</details>':''}`;
 const daily=area.querySelector('.daily-question h3');if(daily)daily.remove();
 focusContent();stelleMerken(renderIntro);
};
// Sichtbare Sprachwahl auf jeder Lernansicht, Rückkehr über bestehende Logik.
const entwurfOriginalFocus=focusContent;
let entwurfVorlesenTimer=null;
function entwurfVorlesenPlanen(){
 clearTimeout(entwurfVorlesenTimer);
 if(!autoRead||!supportsSpeech())return;
 const generation=_readGen;
 entwurfVorlesenTimer=setTimeout(()=>{if(autoRead&&generation===_readGen)readStart()},100);
}
focusContent=function(){entwurfOriginalFocus();entwurfDekorieren();entwurfVorlesenPlanen();};
// Textprüfung 02.11.2026: Beim Wechsel der Ansicht wird laufendes Vorlesen angehalten. Lief nichts, bleibt die
// Ansage leer – vorher stand nach jedem Wechsel „Vorlesen gestoppt.“ im Ansagebereich, auch ohne Vorlesen.
function entwurfVorlesenAnhalten(){
 const lief=!!document.querySelector('.reading-button-normal.is-active,.reading-button-slow.is-active');
 stopReading();
 if(!lief)updateReadingStatus('');
}
function entwurfDekorieren(){
 document.body.classList.toggle('entwurf-start',!!content.querySelector('.entwurf-startseite'));
 const toolbar=content.querySelector('.lern-leiste') ? null : (content.querySelector('.tool-row')||content.querySelector('.start-tools'));
 if(toolbar&&!toolbar.querySelector('.entwurf-lang')){
  const b=document.createElement('button');b.className='entwurf-lang';b.type='button';b.textContent='Sprache';b.setAttribute('aria-label','Sprache ändern. Gerade: '+LANGUAGE_LABEL[languageLevel]);b.onclick=openLanguageFromTools;toolbar.append(b);
 }
 content.querySelectorAll('.topic-card').forEach(card=>{
  if(card.querySelector('.entwurf-topic-image'))return;
  const id=topics.find(t=>card.classList.contains('topic-'+t.id))?.id;if(!id)return;
  const img=document.createElement('img');img.className='entwurf-topic-image';img.src='assets/scenes/'+entwurfBilder[id]+'.webp';img.alt='';img.loading='lazy';card.prepend(img);
 });
 // E3: Passende Antwort und Regel bleiben offen. Nur der zusätzliche Wissenssatz darf aufklappen.
 content.querySelectorAll('.feedback-page').forEach(box=>{
  const extras=[...box.children].filter(n=>n.matches('.remember-box'));
  if(extras.length){const details=document.createElement('details');details.className='entwurf-feedback-mehr';
   const summary=document.createElement('summary');summary.textContent='Wichtigen Satz ansehen';
   details.append(summary,...extras);box.append(details);}
 });
 // E2: Das vollständige Vorbild bleibt ohne zusätzliche Navigation sichtbar.

}
function entwurfTextTeile(row){
 const p=row.matches('p')?row:row.querySelector('p');if(!p||p.textContent.length<200)return [row];
 const text=p.textContent;let chunks=[],buffer='';
 const sentences=typeof Intl.Segmenter==='function'?[...new Intl.Segmenter('de',{granularity:'sentence'}).segment(text)].map(x=>x.segment):[text];
 // Textprüfung 02.11.2026: Geteilt wird nur zwischen Sätzen. Ein langer Satz bleibt ganz (vorher wurde er nach
 // 180 Zeichen mitten im Satz auf zwei Ansichten verteilt, z. B. „… und auch dein“ | „Standort …“).
 for(const sentence of sentences){if(buffer&&buffer.length+sentence.length>180){chunks.push(buffer);buffer='';}buffer+=sentence;}if(buffer)chunks.push(buffer);
 const walker=document.createTreeWalker(p,NodeFilter.SHOW_TEXT),texts=[];let n,offset=0;while(n=walker.nextNode()){texts.push({n,start:offset,end:offset+n.textContent.length});offset+=n.textContent.length;}
 let start=0;return chunks.map((chunk,i)=>{const end=start+chunk.length,range=document.createRange(),a=texts.find(x=>x.end>start),b=texts.find(x=>x.end>=end);range.setStart(a.n,start-a.start);range.setEnd(b.n,end-b.start);const newP=p.cloneNode(false);newP.append(range.cloneContents());start=end;if(row===p)return newP;const newRow=row.cloneNode(false);if(i===0)[...row.children].filter(x=>x!==p).forEach(x=>newRow.append(x.cloneNode(true)));newRow.append(newP);return newRow;});
}
let entwurfPager=null;
const entwurfOriginalLesson=renderLesson;
renderLesson=function(teil='text'){
 entwurfPager=null;entwurfOriginalLesson(teil);
 const card=content.querySelector('article.lesson-card');if(!card||aufUebungsSeite)return;
 const heading=card.querySelector(':scope>.lesson-heading');if(!heading)return;
 const nodes=[...card.children];const headerEnd=nodes.indexOf(heading);let units=[];
 for(const node of nodes.slice(headerEnd+1)){
  if(node.classList.contains('ls-text-block')){
   const rows=[...node.children].filter(n=>!n.matches('[data-read-card-text],button')).flatMap(entwurfTextTeile);
   let pack=[];const push=()=>{if(!pack.length)return;const group=document.createElement('div');group.className='ls-text-block';pack.forEach(n=>group.append(n));group.insertAdjacentHTML('beforeend',blockRead(pack.map(n=>n.textContent).join(' ')));units.push(group);pack=[];};
   for(const row of rows){if(pack.length&&(pack.length===2||pack.reduce((n,x)=>n+x.textContent.length,0)+row.textContent.length>190))push();pack.push(row);}push();node.remove();
  }else if(node.classList.contains('learning-goals-box')&&node.querySelector('ul')){
   const list=node.querySelector('ul'),items=[...list.children],heading=node.querySelector('h3');
   for(let i=0;i<items.length;i+=2){const group=node.cloneNode(false),part=list.cloneNode(false);if(heading)group.append(heading.cloneNode(true));items.slice(i,i+2).forEach(n=>part.append(n));group.append(part);units.push(group);}node.remove();
  }else if(node.classList.contains('ls-bullet-block')&&node.querySelector('ul')){
   const list=node.querySelector('ul'),items=[...list.children];
   for(let i=0;i<items.length;i+=2){const group=document.createElement('div');group.className='ls-bullet-block';const part=list.cloneNode(false);items.slice(i,i+2).forEach(n=>part.append(n));group.append(part);group.insertAdjacentHTML('beforeend',blockRead(items.slice(i,i+2).map(n=>n.textContent).join(' ')));units.push(group);}node.remove();
  }else if(node.innerText?.trim()||node.querySelector('img,button'))units.push(node);
 }
 if(!units.length)return;
 const panels=units.map(node=>{const panel=document.createElement('div');panel.className='entwurf-panel';panel.append(node);card.append(panel);return panel});
 const key=[currentTopicId,currentMode,currentStep,lernTeil].join(':');let saved=null;try{saved=JSON.parse(pGet('entwurf-ansicht')||'null')}catch{}
 const index=saved?.key===key?Math.max(0,Math.min(panels.length-1,saved.index||0)):0;
 const counter=document.createElement('span');counter.hidden=true;
 entwurfPager={key,index,panels,counter,card,nextLabel:nextButton.textContent,nextWait:nextButton.dataset.warten,nextDisabled:nextButton.disabled};
 entwurfSeiteZeigen(false);
};
function entwurfSeiteZeigen(focus=true){
 const p=entwurfPager;if(!p||!content.contains(p.card))return;
 entwurfVorlesenAnhalten();p.panels.forEach((n,i)=>n.hidden=i!==p.index);
 // E2: Die Lernleiste ist der einzige sichtbare Fortschrittszähler.
 if(p.index<p.panels.length-1){nextButton.disabled=false;delete nextButton.dataset.warten;nextButton.textContent='Weiter';}else{nextButton.disabled=p.nextDisabled;nextButton.textContent=p.nextLabel;if(p.nextWait)nextButton.dataset.warten=p.nextWait;else delete nextButton.dataset.warten;}
 pSet('entwurf-ansicht',JSON.stringify({key:p.key,index:p.index}));
 if(focus){content.focus();window.scrollTo({top:0,behavior:'instant'});}entwurfDekorieren();entwurfVorlesenPlanen();
}
nextButton.addEventListener('click',e=>{const p=entwurfPager;if(p&&content.contains(p.card)&&p.index<p.panels.length-1){e.preventDefault();e.stopImmediatePropagation();p.index++;entwurfSeiteZeigen()}},true);
backButton.addEventListener('click',e=>{const p=entwurfPager;if(p&&content.contains(p.card)&&p.index>0){e.preventDefault();e.stopImmediatePropagation();p.index--;entwurfSeiteZeigen()}},true);
// E3: Ergebniszeilen kommen unverändert aus dem gemeinsamen Kern.
const entwurfOriginalClearResume=clearResumeData;clearResumeData=function(){pRemove('entwurf-ansicht');pRemove('entwurf-vormachen');return entwurfOriginalClearResume();};
// Frische lokale Route mit dem neuen Einstieg aufbauen.
handleHash();
