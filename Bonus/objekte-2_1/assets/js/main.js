// Aufgabe:

// Greife auf die Objekte im Array mit Hilfe von map(), forEach(), filter() zu..
// Der Code dazu ist im Kommentarbereich..
// Verwende forEach() und greife auf alle namen zu. Pushe diese in ein neues Array.
// Verwende map() und greife auf alle name zu.. // ? warum?? das ist genau das gleiche doppelt
// Verwende forEach() und greife auf alle preiseGramEuro zu und pushe diese ein neues Array.
// Verwende map() und greife auf alle preiseGramEuro zu.
// Verwende forEach() und greife auf alle veraenderung zu und pushe diese in ein neues Array.
// Verwende map() und greife auf alle veraenderung zu.
// Verwende filter() und greife auf preiseGramEuro die teurer als 50 Euro zu // ? für was denn? am ende sollen doch alle in der tabelle stehen...
// Gib alles als Tabelle in deinem HTML-Dokument aus.

let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];

let names = edelMetallPreise.map((item) => item.name);
let price = edelMetallPreise.map((item) => item.preiseGramEuro);
let change = edelMetallPreise.map((item) => item.veraenderung);

let filter_price = edelMetallPreise.filter(
  (price) => price.preiseGramEuro > 50
);
filter_price.forEach((price) =>
  console.log("teurer als 50€:", price.preiseGramEuro)
);

// ----------------------------------------------------------------------------

const data = [names, price, change];

const titles = ["Name", "PreiseGramEuro", "Veraenderung"];

function constructTable(data) {
  const table = document.createElement("table"); // tabelle erstellen
  const title_row = table.insertRow(); // neue zeile für titel einfügen
  for (let k = 0; k < titles.length; k++) {
    let title_cell = title_row.insertCell(); // neue zellen für titel in titelzeile erstellen
    title_cell.textContent = titles[k];
  }

  for (let i = 0; i < data[0].length; i++) {
    const row = table.insertRow();
    //
    //
    for (let j = 0; j < data.length; j++) {
      const cell = row.insertCell();
      cell.innerHTML = data[j][i];
    }
  }

  document.getElementById("tableOutput").appendChild(table);
}

constructTable(data);

// alternative idee: titel der spalten mit in die arrays schreiben
// um so das erstellen der titelzeile zu umgehen
