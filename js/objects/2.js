
// array przechowuje wszystkie typy danych w JS
const arr = [
    0,
    "Adam",
    true,
    undefined,
    null,
    Infinity,
    { name: "Marek", role: "Admin" },
    [true, false],
    function fnInsideArr(args) {
        console.log(args);
    },
    Symbol("foo"),
    1n
];

// tablica posiada właściwość length
console.log(arr.length);