const num = Number(prompt("Podaj liczbę:"));


// Napisz program, który na podstawie zmiennej num:
// sprawdza, czy liczba jest dodatnia, ujemna czy równa 0.


if (num > 0) {
  console.log("Liczba dodatnia");
} else if (num < 0) {
  console.log("Liczba ujemna");
} else {
  console.log("Zero");
}