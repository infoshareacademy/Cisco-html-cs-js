// Użyj Switch aby wyświetlić komunikat związany z dniem tygodnia
const day = "Monday";

switch (day) {
  case "Monday": {
    console.log("Początek tygodnia 😅")
    return
  }
  case "Tuesday":
    console.log("Drugi dzień tygodnia 💪");
    break;
  case "Friday":
    console.log("Prawie weekend! 🎉");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Zwykły dzień")
}