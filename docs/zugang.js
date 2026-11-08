/* Der erste Portalbesuch richtet den Offline-Zugang für die Lernplattform ein. */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
