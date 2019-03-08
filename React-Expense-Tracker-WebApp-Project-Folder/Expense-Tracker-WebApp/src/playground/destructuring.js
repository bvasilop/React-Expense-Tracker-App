// Object Destructuring

// const person = {
// 	name: 'Bill',
// 	age: 43,
// 	location: {
// 		city: 'Chicago',
// 		temp: 45
// 	}
// };

// // const name = person.name;
// // const age = person.age;

// const { name: firstName = 'Anonymous', age } = person; // destructured version of above example

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature} = person.location;

// if (city && temperature) {
// console.log(`It's ${temperature} in ${city}`);
// }

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};


const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); // Penguin, Self-Published

// Array Destructuring

const address = ['1299 South Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [drinkType, ,mediumPrice] = item;

// console.log(`A medium Coffee (hot) costs $2.50`)
console.log(` A medium ${drinkType} costs ${mediumPrice}`);
