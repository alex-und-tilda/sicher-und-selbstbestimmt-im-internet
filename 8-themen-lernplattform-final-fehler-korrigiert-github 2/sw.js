/* =============================================================
   Service Worker – Sicher und selbstbestimmt im Internet
   Offline-Fähigkeit: Cache-first für Assets, Network-first für HTML
   Version: update CACHE_VERSION bei jeder Veröffentlichung
   ============================================================= */

const CACHE_VERSION = "v2026-06";
const CACHE_NAME    = "sicher-im-netz-" + CACHE_VERSION;

/* Alle Dateien, die sofort beim Installieren gecacht werden */
const PRECACHE_URLS = [
  /* Kern */
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./topics.js",
  "./favicon.svg",
  "./manifest.webmanifest",
  "./404.html",

  /* Statische Seiten */
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

  /* Themen-Illustrationen */
  "./assets/illustrations/datenschutz.svg",
  "./assets/illustrations/whatsapp.svg",
  "./assets/illustrations/facebook.svg",
  "./assets/illustrations/instagram.svg",
  "./assets/illustrations/youtube.svg",
  "./assets/illustrations/snapchat.svg",
  "./assets/illustrations/tiktok.svg",
  "./assets/illustrations/hilfe.svg",
  "./assets/illustrations/ki.svg",
  "./assets/illustrations/fakes.svg",
  "./assets/illustrations/betrug.svg",
  "./assets/illustrations/einkaufen.svg",

  /* Lektions-Bilder */
  "./assets/lessons/lock.svg",
  "./assets/lessons/data.svg",
  "./assets/lessons/warning.svg",
  "./assets/lessons/check.svg",
  "./assets/lessons/help.svg",
  "./assets/lessons/message.svg",
  "./assets/lessons/link.svg",
  "./assets/lessons/photo.svg",
  "./assets/lessons/stop.svg",
  "./assets/lessons/remember.svg",
  "./assets/lessons/understand.svg",
  "./assets/lessons/example.svg",
  "./assets/lessons/report.svg",
  "./assets/lessons/ki.svg",
  "./assets/lessons/fake.svg",
  "./assets/lessons/betrug.svg",
  "./assets/lessons/einkaufen.svg",

  /* Icons */
  "./assets/icons/home.svg",
  "./assets/icons/remember.svg",
  "./assets/icons/lock.svg",
  "./assets/icons/link.svg",
  "./assets/icons/stop.svg",
  "./assets/icons/check.svg",
  "./assets/icons/warning.svg",
  "./assets/icons/understand.svg",
  "./assets/icons/example.svg",
  "./assets/icons/quiz.svg",
  "./assets/icons/start.svg",
  "./assets/icons/message.svg",
  "./assets/icons/report.svg",
  "./assets/icons/exercise.svg",
  "./assets/icons/data.svg",
  "./assets/icons/help.svg",
  "./assets/icons/block.svg",
  "./assets/icons/photo.svg",
  "./assets/icons/ki.svg",
  "./assets/icons/fake.svg",
  "./assets/icons/betrug.svg",
  "./assets/icons/einkaufen.svg",

  /* Schriften (werden gecacht sobald sie vorhanden sind) */
  "./assets/fonts/atkinson-regular.ttf",
  "./assets/fonts/atkinson-bold.ttf",
];

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

      return cache.addAll(required).then(() => {
        /* Schriften einzeln cachen, Fehler ignorieren */
        return Promise.allSettled(
          optional.map((url) =>
            cache.add(url).catch(() => { /* Datei fehlt noch – ok */ })
          )
        );
      });
    })
  );
});

/* ---- Activate: alte Caches löschen, Seite benachrichtigen ---- */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith("sicher-im-netz-") && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => {
      self.clients.claim();
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
        .catch(() =>
          caches.match(event.request).then(
            (cached) => cached || caches.match("./404.html")
          )
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
