/* =============================================================
   ARASAAC-Piktogramme einmalig lokal herunterladen.
   Aufruf im Repo-Ordner:   node download_pictos.js
   Holt alle in app.js (ARASAAC_PICTO) eingetragenen Bilder nach
   assets/pictograms/arasaac/<id>.png – danach laedt die Seite die
   Bilder lokal (zuverlaessig, auch offline).
   ============================================================= */
const fs = require("fs");
const path = require("path");
const https = require("https");

const app = fs.readFileSync(path.join(__dirname, "app.js"), "utf8");
const block = app.match(/ARASAAC_PICTO\s*=\s*{([\s\S]*?)};/);
if (!block) { console.error("ARASAAC_PICTO in app.js nicht gefunden."); process.exit(1); }
const ids = [...block[1].matchAll(/:\s*(\d+)/g)].map(m => m[1]);
const dir = path.join(__dirname, "assets", "pictograms", "arasaac");
fs.mkdirSync(dir, { recursive: true });

console.log(ids.length + " Bilder werden geholt ...");

function get(id) {
  return new Promise((resolve) => {
    const url = "https://static.arasaac.org/pictograms/" + id + "/" + id + "_300.png";
    const out = path.join(dir, id + ".png");
    https.get(url, (res) => {
      if (res.statusCode !== 200) { console.log("  FEHLER " + id + " (HTTP " + res.statusCode + ")"); res.resume(); return resolve(); }
      const file = fs.createWriteStream(out);
      res.pipe(file);
      file.on("finish", () => file.close(() => { console.log("  ok  " + id + ".png"); resolve(); }));
    }).on("error", (e) => { console.log("  FEHLER " + id + ": " + e.message); resolve(); });
  });
}

(async () => {
  for (const id of ids) await get(id);
  console.log("Fertig. Bilder liegen in assets/pictograms/arasaac/");
})();
