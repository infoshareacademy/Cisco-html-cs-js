const dayNumber = Number(prompt("Podaj numer dnia tygodnia (1-7):"));


// Użyj poniżej switch, by na podstawie zmiennej dayNumber 1–7 wypisać nazwę dnia tygodnia.

switch (dayNumber) {
  case 1:
    console.log("Poniedziałek");
    break;
  case 2:
    console.log("Wtorek");
    break;
  case 3:
    console.log("Środa");
    break;
  case 4:
    console.log("Czwartek");
    break;
  case 5:
    console.log("Piątek");
    break;
  case 6:
    console.log("Sobota");
    break;
  case 7:
    console.log("Niedziela");
    break;
  default:
    console.log("Nieprawidłowy numer dnia!");
}