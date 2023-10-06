// Aufgabe:

// Verwende den Code aus dem Kommentarbereich.
// Greife mithilfe von forEach() oder map() auf Eigenschaften dieses Objekts zu.
// Schreibe eine Funktion für das Objekt, die in der Konsole folgendes ausgibt:
// name
// coop
// city
// emails

let studentData = [
  {
    name: "Alex",
    age: 23,
    coop: false,
    address: {
      street: "Don Valley Business Park",
      city: "Toronto",
      postalCode: "ONM3C3E5",
    },
    emails: ["alex69@gmail.com", "alex123@yahoo.com"],
  },
  {
    name: "Sandra",
    age: 22,
    coop: true,
    address: {
      street: "34 Lawrence Ave",
      city: "Toronto",
      postalCode: "ONM3C0E5",
    },
    emails: ["sandra@gmail.com", "sandra@yahoo.com"],
  },
];

console.log(studentData);

studentData.forEach((student) => {
  const name = student.name;
  const coop = student.coop;
  const city = student.address.city;
  const emails = student.emails;

  //   einzeln
  //   console.log(name);
  //   console.log(coop);
  //   console.log(city);
  //   console.log(emails);

  let eachStudentData = [name, coop, city, emails];
  console.log(eachStudentData);
});
