/* Oeffentliche Ausgabe: unveraenderter Speicherraum der bisherigen Pages-App.
 Keine Kopie aus dem getrennten lokalen Pilot und keine neue Einwilligung. */
const entwurfStorage={getItem(k){return window.localStorage.getItem(k)},setItem(k,v){window.localStorage.setItem(k,v)},removeItem(k){window.localStorage.removeItem(k)}};
