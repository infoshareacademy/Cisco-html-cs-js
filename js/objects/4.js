const user = {
    fullName: 'Darek',
    email: '',
    id: 1,
    isPremiumUser: true,
    address: {
        street: "Sezamkowa",
        city: "Nibylandia"
    },
};

const user2 = {
    fullName: 'Marek',
    email: 'marek@example.com',
    id: 2,
    isPremiumUser: false,
    address: {
        street: "Sezamkowa",
        city: "Nibylandia"
    },
};

const user3 = {
    fullName: 'Anna',
    email: 'anna@example.com',
    id: 3,
    isPremiumUser: true,
    address: {
        street: "Sezamkowa",
        city: "Nibylandia"
    },
};

console.log(user.id);

user.id = 5;
console.log(user.id);

user.name = 'Dariusz';

console.log(user);

// console.log('id', user.id);

// user.name = 'Marek';
// // user['name'] = 'Marek';
// console.log('user', user)