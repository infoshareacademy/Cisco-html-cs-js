// for (let element of kolekcja) {
//   // kod
// }


// for (let kolor of kolory) {
  //   console.log(kolor);
  // }
  const kolory = ["czerwony", "zielony", "niebieski", "czarny", "biały"]; // tablica - nowy typ
// debugger;
// for (let kolor of kolory) {
//   console.log('kolor');
// }


function loopForEach(element) {
  console.log(element + ' - ładny kolor')
}

kolory.forEach(element => console.log(element + ' - ładny kolor'));