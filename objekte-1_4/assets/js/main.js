// Aufgabe:

// In dieser Übung lernen wir, wie man auf die Objekte zugreift.
// Verwende den Code aus dem Kommentarbereich
// Greife auf die Werte "Nala" und "Droopy" in diesem Objekt zu
// Lasse dir einmal alle Hundenamen anzeigen
// Nutze eine Methode, um die Hundenamen zu ändern

let unsereHaustiere = [
  {
    tiertyp: "Katze",

    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

console.log(unsereHaustiere);

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);

console.log(unsereHaustiere[1].names);

unsereHaustiere[1].names = ["Balu", "Snoopy", "Sadaharu"];
console.log(unsereHaustiere);
console.log(unsereHaustiere[1].names);
