/* =============================================================
   Service Worker – Sicher und selbstbestimmt im Internet
   Offline-Fähigkeit: Cache-first für Assets, Network-first für HTML
   Version: update CACHE_VERSION bei jeder Veröffentlichung
   ============================================================= */

const CACHE_VERSION = "v2026-28v";
const CACHE_NAME    = "sicher-im-netz-" + CACHE_VERSION;
/* Altlast: früher lagen die Piktogramme bei static.arasaac.org.
   Heute sind es eigene SVGs in assets/pictograms/. Dieser alte Cache
   wird beim Aktivieren einmalig gelöscht (siehe activate). */
const ALTER_ARASAAC_CACHE = "arasaac-pictograms-v1";

/* Alle Dateien, die sofort beim Installieren gecacht werden */
const PRECACHE_URLS = [
  /* Kern */
  "./",
  "./index.html",
  "./styles.css",
  "./design.css",
  "./app.js",
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
  "./frank-runge-digitale-bildung.html",
  "./frank-runge-digitale-teilhabe.html",
  "./frank-runge-medienkompetenz.html",
  "./frank-runge-ki-bildung.html",
  "./frank-runge-leichte-sprache-uk.html",
  "./frank-runge-smart-home-digitale-assistenz.html",
  "./frank-runge-mediator-eingliederungshilfe.html",
  "./frank-runge-3d-druck-digitale-teilhabe.html",
  "./projekte-frank-runge.html",
  "./projekte-digitale-bildung-frank-runge.html",
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

  /* Logos im Footer */
  "./assets/brand/logo-sozialstiftung-nrw.jpeg",
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
            key === ALTER_ARASAAC_CACHE)
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

  /* HTML-Dateien: Network-first (aktueller Inhalt), Fallback Cache */
  if (event.request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          /* Aktuelle Version im Cache speichern */
          const clone = response.clone();
          caches.open(CACHE_NAME).then((c) => c.put(event.request, clone));
          return response;
        })
        .catch(async () =>
          /* Erst das Ergebnis abwarten: ein Promise ist auch ohne Treffer
             wahr und würde die weiteren Ersatzseiten überspringen. */
          (await caches.match(event.request)) ||
          (await caches.match("./index.html")) ||
          (await caches.match("./404.html")) ||
          offlineFallback()
        )
    );
    return;
  }

  /* Alles andere: Cache-first (Bilder, CSS, JS, Schriften) */
  event.respondWith(
    caches.match(event.request).then((cached) => {
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
