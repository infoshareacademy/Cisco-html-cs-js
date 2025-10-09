
// array przechowuje wszystkie typy danych w JS
// const arr = [
//     0,
//     "Adam",
//     true,
//     undefined,
//     null,
//     Infinity,
//     { name: "Marek", role: "Admin" },
//     [true, false],
//     function fnInsideArr(args) {
//         console.log(args);
//     },
//     Symbol("foo"),
//     1n
// ];

const array = [undefined, null, "Bartek", "Cezary"];

// tablica posiada właściwość length
console.log(array.length); // 4

// type coercion
// console.log(['5'] + 2)     //  '52'
// console.log(['Marek'] + 2)  //  'Marek2'
// console.log([] + 2)         //  '2'

// console.log([{}, [], 123, 'asda'] + 2)
