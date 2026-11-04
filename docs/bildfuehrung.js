/* Beschriftete Bedienzeichen, keine neuen Lernbilder und kein neuer Lernstand.
   Dieselben kanonischen Dateien wie pictoSrc() im gemeinsamen App-Kern. */
(function(){
 'use strict';
 const dateien=Object.freeze({vorlesen:'vorlesen',drucken:'drucken',sprache:'lesen'});
 function zeichen(aktion){const key=dateien[aktion];if(!key)return null;const img=document.createElement('img');img.className='orientierung-zeichen';img.src='assets/pictograms/'+key+'.svg';img.alt='';img.setAttribute('aria-hidden','true');img.width=28;img.height=28;return img;}
 function beschriften(button,aktion){if(!button||button.querySelector('.orientierung-zeichen'))return;button.prepend(zeichen(aktion));button.classList.add('orientierung-aktion');}
 function aktualisieren(){
  document.querySelectorAll('.card-read-pair--topic .card-read-button').forEach(button=>{
   if(button.querySelector('.orientierung-beschriftung'))return;
   const text=document.createElement('span');text.className='orientierung-beschriftung';text.textContent='Vorlesen';button.append(text);
  });
  document.querySelectorAll('.entwurf-lang').forEach(b=>beschriften(b,'sprache'));
  beschriften(document.getElementById('wsDrucken'),'drucken');
  const ort=document.querySelector('.lern-ort');
  if(ort&&!ort.querySelector('.orientierung-rolle')){const rolle=document.createElement('span');rolle.className='orientierung-rolle';rolle.textContent='Lernen';ort.prepend(rolle);}
  const badge=document.querySelector('body:not(.ws) .app-header .test-badge');
  if(badge&&!document.querySelector('.app-header .orientierung-rolle')){const rolle=document.createElement('span');rolle.className='orientierung-rolle';rolle.textContent='Lernen';badge.before(rolle);}
  const workshopBadge=document.querySelector('.ws-kopf .test-badge');if(workshopBadge)workshopBadge.classList.add('orientierung-rolle');
 }
 window.Bildfuehrung=Object.freeze({aktualisieren});
 if(typeof entwurfDekorieren==='function'){const original=entwurfDekorieren;entwurfDekorieren=function(){original();aktualisieren();};}
 aktualisieren();
})();
