// Napisz funkcję checkJuniorReq - powinna ona zwracać string zawierający imiona osób którzy są na dobrej drodze do zostania Juniorem 
// Wynikowy kod może wyglądać następująco:
// "Gratulację dla : imię imię imię"

const students = [
  { name: "Zbigniew", tasksDone: 150, hoursSpent: 160 },
  { name: "Krystyna", tasksDone: 1, hoursSpent: 1 },
  { name: "Krzysztof", tasksDone: 100, hoursSpent: 80 },
  { name: "Seba", tasksDone: 200, hoursSpent: 40 },
  { name: "Dagmara", tasksDone: 50, hoursSpent: 100 },
];

const requirements = {
  minHoursSpent: 80,
  minTasksDone: 100,
};

function checkJuniorReq(arr, req) {
    // Twój kod
}

const result = checkJuniorReq(students, requirements);

console.log(result);