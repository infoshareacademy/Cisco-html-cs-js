const user = {
    name: 'Darek',
    id: 1,
    isPremiumUser: true,
    address: {
        street: "Sezamkowa",
        city: "Nibylandia"
    },
};

console.log('id', user.id);

user.name = 'Marek';
// user['name'] = 'Marek';
console.log('user', user)