// for (let klucz in obiekt) {
//   // kod
// }

const osoba = { imie: "Anna", wiek: 28, kraj: "Polska" };

for (let klucz in osoba) {
  console.log(klucz + ":", osoba[klucz]);
}