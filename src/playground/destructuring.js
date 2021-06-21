// const person = {
//     name: 'Aarathy',
//     age: 24,
//     location: {
//         city: 'TVM',
//         temp: 34
//     }
// }

// const {
//     name: firstName = 'Anonymous',
//     age
// } = person;

// console.log(`${firstName} is ${age}`)

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street = 'Newyork', state, country] = address;
console.log(`You are at ${street}`);

const item = ['Coffee (hot)','$2.00','$2.50','$2.75'];

const [type, ,prizeMedium, ] = item;

console.log(`A medium ${type} costs ${prizeMedium}`);