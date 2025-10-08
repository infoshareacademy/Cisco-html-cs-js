
function isUserPremium(array) {
    //
}

const users = [
    { id: 1, name: 'Anna', isPremium: true},
    { id: 2, name: 'Mariusz', isPremium: false},
    { id: 3, name: 'Zofia', isPremium: false},
    { id: 4, name: 'Marek', isPremium: true}
]

const result = isUserPremium(users);
console.log(result) ;