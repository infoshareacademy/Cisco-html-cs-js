const age = Number(prompt('Ile masz lat?'));
const answer = prompt('Czy masz prawo jazdy? (Tak / Nie): ').toLocaleLowerCase();
const hasLicense = (answer === 'tak' || answer === 't');

console.log(age, hasLicense)

// Poniżej napisz kod który na podstawie zmiennych age i hasLicense wyświetli 3 możliwości:
// 1) wiek jest powyżej 18 lat i użytkownik posiada prawo jazdy wyświetl:
// "Możesz prowadzić samochód"

// 2) wiek jest powyżej 18 lat i użytkownik nie posiada prawo jazdy wyświetl: 
// "Nie możesz prowadzić samochodu bez prawa jazdy"

// 3) wiek jest poniżej 18 lat wyświetl:
// "Liczba lat do pełnoletności: "  + podaj liczbę
