/* =============================================================
   Service Worker – Sicher und selbstbestimmt im Internet
   Offline-Fähigkeit: Cache-first für Assets, Network-first für HTML
   Version: update CACHE_VERSION bei jeder Veröffentlichung
   ============================================================= */

const CACHE_VERSION = "v2026-31-beta3-final";
const CACHE_NAME    = "sicher-im-netz-" + CACHE_VERSION;
/* Altlast: früher lagen die Piktogramme bei static.arasaac.org.
   Heute sind es eigene SVGs in assets/pictograms/. Dieser alte Cache
   wird beim Aktivieren einmalig gelöscht (siehe activate). */
const ALTER_ARASAAC_CACHE = "arasaac-pictograms-v1";

/* Alle Dateien, die sofort beim Installieren gecacht werden */
const PRECACHE_URLS = [
  "./assets/praxis/n1.png",
  "./assets/praxis/n2.png",
  "./assets/praxis/n3.png",
  "./assets/praxis/n4.png",
  "./assets/praxis/n5.png",
  "./assets/praxis/n6.png",
  "./assets/praxis/n7.png",

  "./paket-metadaten.js",
  /* PDF-VORSCHAU-BEGIN */
  "./pdf-vorschau-daten.js",
  "./pdf-vorschau.css",
  "./pdf-vorschau-druck.js",
  "./pdf-vorschau/3f724cae55148215/seite-01.png",
  "./pdf-vorschau/3f724cae55148215/seite-02.png",
  "./pdf-vorschau/3f724cae55148215/seite-03.png",
  "./pdf-vorschau/3f724cae55148215/seite-04.png",
  "./pdf-vorschau/3f724cae55148215/seite-05.png",
  "./pdf-vorschau/3f724cae55148215/seite-06.png",
  "./pdf-vorschau/3f724cae55148215/seite-07.png",
  "./pdf-vorschau/3f724cae55148215/seite-08.png",
  "./pdf-vorschau/3f724cae55148215/seite-09.png",
  "./pdf-vorschau/3f724cae55148215/seite-10.png",
  "./pdf-vorschau/3f724cae55148215/seite-11.png",
  "./pdf-vorschau/3f724cae55148215/seite-12.png",
  "./pdf-vorschau/3f724cae55148215/seite-13.png",
  "./pdf-vorschau/3f724cae55148215/seite-14.png",
  "./pdf-vorschau/3f724cae55148215/seite-15.png",
  "./pdf-vorschau/3f724cae55148215/seite-16.png",
  "./pdf-vorschau/3f724cae55148215/index.html",
  "./pdf-vorschau/65189a7f174eab62/seite-1.png",
  "./pdf-vorschau/65189a7f174eab62/seite-2.png",
  "./pdf-vorschau/65189a7f174eab62/seite-3.png",
  "./pdf-vorschau/65189a7f174eab62/index.html",
  "./pdf-vorschau/b8ac662d5dbbeb72/seite-1.png",
  "./pdf-vorschau/b8ac662d5dbbeb72/seite-2.png",
  "./pdf-vorschau/b8ac662d5dbbeb72/index.html",
  "./pdf-vorschau/d204e0faec257ce7/seite-1.png",
  "./pdf-vorschau/d204e0faec257ce7/seite-2.png",
  "./pdf-vorschau/d204e0faec257ce7/seite-3.png",
  "./pdf-vorschau/d204e0faec257ce7/seite-4.png",
  "./pdf-vorschau/d204e0faec257ce7/seite-5.png",
  "./pdf-vorschau/d204e0faec257ce7/seite-6.png",
  "./pdf-vorschau/d204e0faec257ce7/index.html",
  "./pdf-vorschau/77406d518d032897/seite-1.png",
  "./pdf-vorschau/77406d518d032897/index.html",
  "./pdf-vorschau/dadb754f161de067/seite-1.png",
  "./pdf-vorschau/dadb754f161de067/seite-2.png",
  "./pdf-vorschau/dadb754f161de067/seite-3.png",
  "./pdf-vorschau/dadb754f161de067/seite-4.png",
  "./pdf-vorschau/dadb754f161de067/seite-5.png",
  "./pdf-vorschau/dadb754f161de067/index.html",
  "./pdf-vorschau/809282db7e81c78c/seite-01.png",
  "./pdf-vorschau/809282db7e81c78c/seite-02.png",
  "./pdf-vorschau/809282db7e81c78c/seite-03.png",
  "./pdf-vorschau/809282db7e81c78c/seite-04.png",
  "./pdf-vorschau/809282db7e81c78c/seite-05.png",
  "./pdf-vorschau/809282db7e81c78c/seite-06.png",
  "./pdf-vorschau/809282db7e81c78c/seite-07.png",
  "./pdf-vorschau/809282db7e81c78c/seite-08.png",
  "./pdf-vorschau/809282db7e81c78c/seite-09.png",
  "./pdf-vorschau/809282db7e81c78c/seite-10.png",
  "./pdf-vorschau/809282db7e81c78c/seite-11.png",
  "./pdf-vorschau/809282db7e81c78c/seite-12.png",
  "./pdf-vorschau/809282db7e81c78c/seite-13.png",
  "./pdf-vorschau/809282db7e81c78c/seite-14.png",
  "./pdf-vorschau/809282db7e81c78c/seite-15.png",
  "./pdf-vorschau/809282db7e81c78c/seite-16.png",
  "./pdf-vorschau/809282db7e81c78c/index.html",
  "./pdf-vorschau/64a00d034b989d6a/seite-01.png",
  "./pdf-vorschau/64a00d034b989d6a/seite-02.png",
  "./pdf-vorschau/64a00d034b989d6a/seite-03.png",
  "./pdf-vorschau/64a00d034b989d6a/seite-04.png",
  "./pdf-vorschau/64a00d034b989d6a/seite-05.png",
  "./pdf-vorschau/64a00d034b989d6a/seite-06.png",
  "./pdf-vorschau/64a00d034b989d6a/seite-07.png",
  "./pdf-vorschau/64a00d034b989d6a/seite-08.png",
  "./pdf-vorschau/64a00d034b989d6a/seite-09.png",
  "./pdf-vorschau/64a00d034b989d6a/seite-10.png",
  "./pdf-vorschau/64a00d034b989d6a/seite-11.png",
  "./pdf-vorschau/64a00d034b989d6a/seite-12.png",
  "./pdf-vorschau/64a00d034b989d6a/seite-13.png",
  "./pdf-vorschau/64a00d034b989d6a/seite-14.png",
  "./pdf-vorschau/64a00d034b989d6a/seite-15.png",
  "./pdf-vorschau/64a00d034b989d6a/seite-16.png",
  "./pdf-vorschau/64a00d034b989d6a/seite-17.png",
  "./pdf-vorschau/64a00d034b989d6a/index.html",
  "./pdf-vorschau/32de803d3ce292dd/seite-01.png",
  "./pdf-vorschau/32de803d3ce292dd/seite-02.png",
  "./pdf-vorschau/32de803d3ce292dd/seite-03.png",
  "./pdf-vorschau/32de803d3ce292dd/seite-04.png",
  "./pdf-vorschau/32de803d3ce292dd/seite-05.png",
  "./pdf-vorschau/32de803d3ce292dd/seite-06.png",
  "./pdf-vorschau/32de803d3ce292dd/seite-07.png",
  "./pdf-vorschau/32de803d3ce292dd/seite-08.png",
  "./pdf-vorschau/32de803d3ce292dd/seite-09.png",
  "./pdf-vorschau/32de803d3ce292dd/seite-10.png",
  "./pdf-vorschau/32de803d3ce292dd/seite-11.png",
  "./pdf-vorschau/32de803d3ce292dd/seite-12.png",
  "./pdf-vorschau/32de803d3ce292dd/seite-13.png",
  "./pdf-vorschau/32de803d3ce292dd/seite-14.png",
  "./pdf-vorschau/32de803d3ce292dd/seite-15.png",
  "./pdf-vorschau/32de803d3ce292dd/seite-16.png",
  "./pdf-vorschau/32de803d3ce292dd/index.html",
  "./pdf-vorschau/f78850b869973c1a/seite-1.png",
  "./pdf-vorschau/f78850b869973c1a/seite-2.png",
  "./pdf-vorschau/f78850b869973c1a/seite-3.png",
  "./pdf-vorschau/f78850b869973c1a/index.html",
  "./pdf-vorschau/2e15b3e77c449b9a/seite-01.png",
  "./pdf-vorschau/2e15b3e77c449b9a/seite-02.png",
  "./pdf-vorschau/2e15b3e77c449b9a/seite-03.png",
  "./pdf-vorschau/2e15b3e77c449b9a/seite-04.png",
  "./pdf-vorschau/2e15b3e77c449b9a/seite-05.png",
  "./pdf-vorschau/2e15b3e77c449b9a/seite-06.png",
  "./pdf-vorschau/2e15b3e77c449b9a/seite-07.png",
  "./pdf-vorschau/2e15b3e77c449b9a/seite-08.png",
  "./pdf-vorschau/2e15b3e77c449b9a/seite-09.png",
  "./pdf-vorschau/2e15b3e77c449b9a/seite-10.png",
  "./pdf-vorschau/2e15b3e77c449b9a/seite-11.png",
  "./pdf-vorschau/2e15b3e77c449b9a/seite-12.png",
  "./pdf-vorschau/2e15b3e77c449b9a/seite-13.png",
  "./pdf-vorschau/2e15b3e77c449b9a/seite-14.png",
  "./pdf-vorschau/2e15b3e77c449b9a/seite-15.png",
  "./pdf-vorschau/2e15b3e77c449b9a/seite-16.png",
  "./pdf-vorschau/2e15b3e77c449b9a/seite-17.png",
  "./pdf-vorschau/2e15b3e77c449b9a/index.html",
  "./pdf-vorschau/4420d71cbfd59d75/seite-1.png",
  "./pdf-vorschau/4420d71cbfd59d75/seite-2.png",
  "./pdf-vorschau/4420d71cbfd59d75/seite-3.png",
  "./pdf-vorschau/4420d71cbfd59d75/seite-4.png",
  "./pdf-vorschau/4420d71cbfd59d75/index.html",
  /* PDF-VORSCHAU-END */
  "./bedienung.css","./bildfuehrung.js","./bildfuehrung.css","./design-a.css","./zugang.html","./zugang.js","./zugang.css","./material-index.js","./workshop-durchfuehrung.js",
"./workshop.html","./workshop.js","./workshop.css","./workshop-daten.js","./workshop-erweiterung.js","./material/Kahoot_Facebook_Referenzmodul.xlsx","./material/Cybermobbing_Workshop_Referenzmodul.pptx","./material/index.html","./material/Trainerleitfaden_TikTok.pdf","./material/Snapchat_Workshop_Referenzmodul.pptx","./material/Kahoot_TikTok_Referenzmodul.xlsx","./material/TikTok_Workshop_Referenzmodul.pptx","./material/Trainerleitfaden_Facebook.pdf","./material/Trainerleitfaden_Snapchat.pdf","./material/Kahoot_Snapchat_Referenzmodul.xlsx","./material/Trainerleitfaden_Instagram.pdf","./material/Trainerleitfaden_Cybermobbing.pdf","./material/Instagram_Workshop_Referenzmodul.pptx","./material/Kahoot_Instagram_Referenzmodul.xlsx","./material/Facebook_Workshop_Referenzmodul.pptx","./material/Kahoot_Cybermobbing_Referenzmodul.xlsx","./material/arbeitsmaterial/Profil-Karten_Facebook.pptx","./material/arbeitsmaterial/Situationskarten_Cybermobbing.pdf","./material/arbeitsmaterial/Situationskarten_Cybermobbing.pptx","./material/arbeitsmaterial/Regel-Plakat.pdf","./material/arbeitsmaterial/Antwortkarten_ABC.pdf","./material/arbeitsmaterial/Trend-Karten_TikTok.pptx","./material/arbeitsmaterial/Profil-Karten_Facebook.pdf","./material/arbeitsmaterial/README.md","./material/arbeitsmaterial/Antwortkarten_ABC.pptx","./material/arbeitsmaterial/Ablauf-Plakat.pdf","./material/arbeitsmaterial/Regel-Plakat.pptx","./material/arbeitsmaterial/Hilfe-Karte_Meine_Hilfe.pptx","./material/arbeitsmaterial/Hilfe-Karte_Meine_Hilfe.pdf","./material/arbeitsmaterial/Trend-Karten_TikTok.pdf","./material/arbeitsmaterial/Ablauf-Plakat.pptx","./praxis/index.html","./praxis/vorlesen.js","./praxis/facebook.html","./praxis/whatsapp.html","./praxis/youtube.html","./praxis/snapchat.html","./praxis/instagram.html","./praxis/tiktok.html",
"./entwurf.css", "./entwurf.js", "./entwurf-storage.js",
  /* Kern */
  "./",
  "./index.html",
  "./styles.css",
  "./design.css",
  "./app.js",
  "./lesehilfen.js",
  "./lesehilfen-de.js",
  "./topics.js",
  "./content-de.js",
  "./begleitung-de.js",
  "./szenarien-de.js",
  "./regeln-de.js",
  "./uebungen-de.js",
  "./ketten-de.js",
  "./weiterlernen-de.js",
  "./alltag-de.js",
  "./favicon.svg",
  "./manifest.webmanifest",
  "./404.html",
  "./fortschritt.html",

  /* Statische Seiten */
  "./barrierefreiheit.html",
  "./sprachstufen.html",
  "./impressum.html",
  "./datenschutz.html",
  "./ersteller.html",
  "./ersteller-digitale-bildung.html",
  "./ersteller-digitale-teilhabe.html",
  "./ersteller-medienkompetenz.html",
  "./ersteller-ki-bildung.html",
  "./ersteller-leichte-sprache-uk.html",
  "./ersteller-smart-home-digitale-assistenz.html",
  "./ersteller-mediator-eingliederungshilfe.html",
  "./ersteller-3d-druck-digitale-teilhabe.html",
  "./ersteller-projekte.html",
  "./ersteller-projekte-digitale-bildung.html",
  "./barrierearme-lernplattform-einfache-sprache.html",
  "./datenschutz-social-media-lernangebot.html",

  /* Wegzeichen-Figuren (Paket W, statisch, transparent) */
  "./assets/figures/alex-tilda-winken.webp",
  "./assets/brand/alex-tilda-kopf.webp",
  "./assets/figures/alex-tilda-themen.webp",
  "./assets/figures/alex-tilda-lernweg.webp",
  "./assets/figures/alex-tilda-einstellungen.webp",
  "./assets/figures/alex-tilda-ruhig.webp",
  "./assets/figures/alex-tilda-hilfe.webp",
  "./assets/figures/alex-tilda-erfolg.webp",
  "./assets/figures/alex-tilda-nachdenken.webp",
  "./assets/scenes/hilfe-beweise.webp",
  "./assets/scenes/hilfe-stress.webp",
  "./assets/scenes/hilfe-unterstuetzung.webp",
  "./assets/scenes/hilfe-handlungsplan.webp",

  /* Lektions-Bilder */


  /* Eigene Zeichen fuer die sechs App-Themen (F2). Vorher teilten sich je
     zwei Themen dasselbe Symbol: WhatsApp/Facebook, Instagram/Snapchat und
     YouTube/TikTok waren nur an der Hintergrundfarbe zu unterscheiden. */


  /* Freigegebene Bildbibliothek und gemeinsames Piktogramm-Set (D14). */
  "./assets/scenes/betrug-abo.webp",
  "./assets/scenes/betrug-gewinn.webp",
  "./assets/scenes/betrug-grundwissen.webp",
  "./assets/scenes/betrug-hallo-mama.webp",
  "./assets/scenes/betrug-hilfe.webp",
  "./assets/scenes/betrug-liebe.webp",
  "./assets/scenes/betrug-paket.webp",
  "./assets/scenes/betrug-schockanruf.webp",
  "./assets/scenes/betrug-schutz.webp",
  "./assets/scenes/betrug-tricks.webp",
  "./assets/scenes/datenschutz-daten-anfrage.webp",
  "./assets/scenes/datenschutz-passwort.webp",
  "./assets/scenes/datenschutz-private-daten.webp",
  "./assets/scenes/einkaufen-achtung.webp",
  "./assets/scenes/einkaufen-bezahlen.webp",
  "./assets/scenes/einkaufen-hilfe.webp",
  "./assets/scenes/einkaufen-shop.webp",
  "./assets/scenes/facebook-anfragen.webp",
  "./assets/scenes/facebook-beitrag.webp",
  "./assets/scenes/facebook-einstellungen.webp",
  "./assets/scenes/facebook-profil.webp",
  "./assets/scenes/fakes-bilder.webp",
  "./assets/scenes/fakes-pruefen.webp",
  "./assets/scenes/fakes-stimmen.webp",
  "./assets/scenes/instagram-bearbeitet.webp",
  "./assets/scenes/instagram-story.webp",
  "./assets/scenes/ki-antwort-pruefen.webp",
  "./assets/scenes/ki-chatbot.webp",
  "./assets/scenes/ki-fehler.webp",
  "./assets/scenes/snapchat-bilder.webp",
  "./assets/scenes/snapchat-private-bilder.webp",
  "./assets/scenes/szene-fotos.webp",
  "./assets/scenes/szene-gefuehle.webp",
  "./assets/scenes/szene-grundwissen.webp",
  "./assets/scenes/szene-handlungsplan.webp",
  "./assets/scenes/szene-hilfe-holen.webp",
  "./assets/scenes/szene-ki-echt.webp",
  "./assets/scenes/szene-kommentare.webp",
  "./assets/scenes/szene-merken.webp",
  "./assets/scenes/szene-private-nachrichten.webp",
  "./assets/scenes/szene-standort.webp",
  "./assets/scenes/szene-stress.webp",
  "./assets/scenes/tiktok-aehnliche-videos.webp",
  "./assets/scenes/tiktok-trends.webp",
  "./assets/scenes/tiktok-video-posten.webp",
  "./assets/figures/vormachen-alex.webp",
  "./assets/figures/vormachen-tilda.webp",
  "./assets/scenes/whatsapp-code.webp",
  "./assets/scenes/whatsapp-fremde-nummer.webp",
  "./assets/scenes/whatsapp-gruppen.webp",
  "./assets/scenes/whatsapp-links.webp",
  "./assets/scenes/youtube-mutproben.webp",
  "./assets/scenes/youtube-pausen.webp",
  "./assets/scenes/youtube-werbung.webp",
  "./assets/pictograms/anruf.svg",
  "./assets/pictograms/ask.svg",
  "./assets/pictograms/bank.svg",
  "./assets/pictograms/betrug.svg",
  "./assets/pictograms/birthday.svg",
  "./assets/pictograms/block.svg",
  "./assets/pictograms/card.svg",
  "./assets/pictograms/check.svg",
  "./assets/pictograms/clock.svg",
  "./assets/pictograms/code.svg",
  "./assets/pictograms/data.svg",
  "./assets/pictograms/drucken.svg",
  "./assets/pictograms/einkaufen.svg",
  "./assets/pictograms/einstellungen.svg",
  "./assets/pictograms/erfahren.svg",
  "./assets/pictograms/example.svg",
  "./assets/pictograms/exercise.svg",
  "./assets/pictograms/facebook.svg",
  "./assets/pictograms/fake.svg",
  "./assets/pictograms/feel.svg",
  "./assets/pictograms/friend.svg",
  "./assets/pictograms/geschafft.svg",
  "./assets/pictograms/geschenk.svg",
  "./assets/pictograms/globe.svg",
  "./assets/pictograms/handy.svg",
  "./assets/pictograms/help.svg",
  "./assets/pictograms/home.svg",
  "./assets/pictograms/instagram.svg",
  "./assets/pictograms/key.svg",
  "./assets/pictograms/ki.svg",
  "./assets/pictograms/leise.svg",
  "./assets/pictograms/lernweg.svg",
  "./assets/pictograms/lesen.svg",
  "./assets/pictograms/link.svg",
  "./assets/pictograms/location.svg",
  "./assets/pictograms/lock.svg",
  "./assets/pictograms/mail.svg",
  "./assets/pictograms/message.svg",
  "./assets/pictograms/money.svg",
  "./assets/pictograms/neu.svg",
  "./assets/pictograms/no.svg",
  "./assets/pictograms/offline.svg",
  "./assets/pictograms/paket.svg",
  "./assets/pictograms/pause.svg",
  "./assets/pictograms/people.svg",
  "./assets/pictograms/person.svg",
  "./assets/pictograms/photo.svg",
  "./assets/pictograms/plan.svg",
  "./assets/pictograms/quiz.svg",
  "./assets/pictograms/remember.svg",
  "./assets/pictograms/report.svg",
  "./assets/pictograms/search.svg",
  "./assets/pictograms/snapchat.svg",
  "./assets/pictograms/start.svg",
  "./assets/pictograms/stop.svg",
  "./assets/pictograms/stranger.svg",
  "./assets/pictograms/themen.svg",
  "./assets/pictograms/tiktok.svg",
  "./assets/pictograms/understand.svg",
  "./assets/pictograms/video.svg",
  "./assets/pictograms/vorlesen.svg",
  "./assets/pictograms/warning.svg",
  "./assets/pictograms/whatsapp.svg",
  "./assets/pictograms/wiederholen.svg",
  "./assets/pictograms/youtube.svg",

  /* QR-Karten (Workshops und Begleitung) */
  "./assets/qr/datenschutz.svg",
  "./assets/qr/whatsapp.svg",
  "./assets/qr/facebook.svg",
  "./assets/qr/instagram.svg",
  "./assets/qr/youtube.svg",
  "./assets/qr/snapchat.svg",
  "./assets/qr/tiktok.svg",
  "./assets/qr/hilfe.svg",
  "./assets/qr/ki.svg",
  "./assets/qr/fakes.svg",
  "./assets/qr/betrug.svg",
  "./assets/qr/einkaufen.svg",
  "./assets/qr/startseite.svg",

  /* Schriften — WOFF2 (primär) + TTF (Fallback, optional) */
  "./assets/fonts/atkinson-regular.woff2",
  "./assets/fonts/atkinson-regular-ext.woff2",
  "./assets/fonts/atkinson-bold.woff2",
  "./assets/fonts/atkinson-bold-ext.woff2",
  "./assets/fonts/atkinson-regular.ttf",
  "./assets/fonts/atkinson-bold.ttf",
];

/* Einfache Offline-Fallback-Seite (wenn Netz und Cache komplett fehlen) */
function offlineFallback() {
  const html = `<!doctype html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Offline – Sicher im Internet</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; flex-direction: column;
           align-items: center; justify-content: center; min-height: 100svh;
           margin: 0; background: #f1f5fa; color: #16222e; text-align: center; padding: 24px; }
    h1 { font-size: 1.5rem; }
    p  { font-size: 1.1rem; line-height: 1.6; max-width: 360px; }
    a  { color: #00528f; font-weight: bold; }
  </style>
</head>
<body>
  <p style="font-size:3rem">📵</p>
  <h1>Du bist gerade offline.</h1>
  <p>Diese Seite konnte nicht geladen werden.<br>
     Bitte verbinde dich mit dem Internet und lade die Seite neu.</p>
  <p><a href="./">Nochmal versuchen</a></p>
</body>
</html>`;
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}

/* ---- Install ---- */
self.addEventListener("install", (event) => {
  self.skipWaiting(); /* Aktiviert den neuen SW sofort */
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      /* Schriften sind optional – falls noch nicht vorhanden, weitermachen */
      const required = PRECACHE_URLS.filter(
        (u) => !u.includes("assets/fonts/")
      );
      const optional = PRECACHE_URLS.filter(
        (u) => u.includes("assets/fonts/")
      );

      /* cache: "reload" holt jede Datei frisch vom Server. Ohne das nimmt
         addAll Kopien aus dem HTTP-Zwischenspeicher des Browsers (GitHub
         Pages: bis zu 10 Minuten) – dann liegen im neuen Cache alte Dateien,
         und das Update kommt nie an (§16.6). */
      const frisch = (u) => new Request(u, { cache: "reload" });
      return cache.addAll(required.map(frisch)).then(() => {
        /* Schriften einzeln cachen, Fehler ignorieren */
        return Promise.allSettled(
          optional.map((url) =>
            cache.add(frisch(url)).catch(() => { /* Datei fehlt noch – ok */ })
          )
        );
      });
    })
  );
});

/* ---- Activate: alte Caches löschen, Seite benachrichtigen ---- */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      /* Gab es schon einen eigenen Cache? Dann ist das ein Update.
         Wenn nicht, wird die App gerade zum ERSTEN MAL installiert – dann
         darf keine Meldung „wurde aktualisiert" an die Seite gehen.
         (Die Seite prüft das zusätzlich selbst, siehe index.html.) */
      const warUpdate = keys.some(
        (key) => key.startsWith("sicher-im-netz-") && key !== CACHE_NAME
      );
      return Promise.all(
        keys
          .filter((key) =>
            (key.startsWith("sicher-im-netz-") && key !== CACHE_NAME) ||
            key === "sicher-im-netz-unused")
          .map((key) => caches.delete(key))
      ).then(() => warUpdate);
    }).then((warUpdate) => {
      self.clients.claim();
      if (!warUpdate) return;
      /* Alle offenen Tabs informieren: neues Update ist aktiv */
      self.clients.matchAll({ type: "window" }).then((clients) => {
        clients.forEach((client) => client.postMessage({ type: "SW_UPDATED" }));
      });
    })
  );
});

/* ---- Fetch-Strategie ---- */
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);


  /* Nur eigene Anfragen abfangen (kein Cross-Origin) */
  if (url.origin !== location.origin) return;

  /* Interne Schulung und lokale Verfügbarkeit niemals im Lernapp-Cache speichern. */
  const scopePath = new URL(self.registration.scope).pathname;
  const relativePath = url.pathname.slice(scopePath.length);
  if (relativePath.startsWith("intern/") || relativePath.startsWith("lokal/")) return;

  /* HTML-Dateien: Network-first (aktueller Inhalt), Fallback Cache */
  if (event.request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          /* Aktuelle Version im Cache speichern */
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((c) => c.put(event.request, clone));
          }
          return response;
        })
        .catch(async () =>
          /* Erst das Ergebnis abwarten: ein Promise ist auch ohne Treffer
             wahr und würde die weiteren Ersatzseiten überspringen. */
          (await caches.match(event.request, { cacheName: CACHE_NAME, ignoreSearch: true })) ||
          (await caches.match("./index.html", { cacheName: CACHE_NAME })) ||
          (await caches.match("./404.html", { cacheName: CACHE_NAME })) ||
          offlineFallback()
        )
    );
    return;
  }

  /* Alles andere: Cache-first (Bilder, CSS, JS, Schriften) */
  event.respondWith(
    caches.match(event.request, { cacheName: CACHE_NAME, ignoreSearch: true }).then((cached) => {
      if (cached) return cached;
      /* Nicht im Cache: vom Netz laden und speichern */
      return fetch(event.request).then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((c) => c.put(event.request, clone));
        }
        return response;
      });
    })
  );
});
