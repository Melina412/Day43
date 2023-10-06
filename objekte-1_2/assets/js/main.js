// Aufgabe:

// In dieser Übung werden wir Objekte kennenlernen.
// Erstelle ein Objekt und speichere es in einer Variable namens person
// Deklariere die Eigenschaft name mit dem Wert deines Namens
// Deklariere die Eigenschaft alter mit dem Wert deines Alters
// Deklariere die Methode (Funktion) sagNameAlter im Objekt
// Nutze den Befehl alert() im Funktionskörper um name & alter anzuzeigen
// Gib in der Konsole name und alter aus
// Rufe die Funktion sagNameAlter aus dem Objekt auf

const person = {
  name: "Waltraud",
  alter: 57,
  sagNameAlter: () => {
    alert(
      `Hallo, mein Name ist ${person.name} und ich bin ${person.alter} Jahre alt.`
    );
    console.log(person.name);
    console.log(person.alter);
  },
};

person.sagNameAlter();
