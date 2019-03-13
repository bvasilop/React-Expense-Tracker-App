import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyA5c55lbwXEUaCQVw1wCvPH3WXOrFU2duk",
	authDomain: "react-expense-tracker-ap-6d6c5.firebaseapp.com",
	databaseURL: "https://react-expense-tracker-ap-6d6c5.firebaseio.com",
	projectId: "react-expense-tracker-ap-6d6c5",
	storageBucket: "react-expense-tracker-ap-6d6c5.appspot.com",
	messagingSenderId: "815428947239"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set( {
	name: 'Bill Vasilopoulos',
	age: 43,
	isSingle: false,
	location: {
		city: 'Chicago',
		country: 'United States'
	},
	instrument: 'Piano'
}).then(() => {
	console.log('Data is saved!');
}).catch((e) => {
	console.log('This failed', e);
});

// database.ref().set('This is my data');

// database.ref('instrument').set('Guitar');
// database.ref('location/city').set('Seattle')
// database.ref('attributes/height').set('5 ft 9in');
// database.ref('attributes/weight').set('210lbs');

database.ref('attributes').set({ // implements data
	height: '5 ft 9in',
	weight: '210lbs'
}).then(() => {
	console.log('Second set call worked!');
}).catch((e) => {
	console.log(`Things didn't work for the second error`, e);
});


database.ref().update({ // updates data
	name: 'Vasily',
	age: 33,
	job: 'Software Developer',
	isSingle: null,
	instrument: 'Guitar'
});

database.ref().update({ // updates data
	job: 'Manager',
'location/city': 'Seattle' // updates child location
});

database.ref('isSingle').set(null); // also removed data like remove method

// database.ref('isSingle')
// .remove()
// .then(() => {
// 	console.log('Data was removed');
// }).catch((e) => {
// 	console.log('Did not remove data');
// });




database.ref().set( { // implements data
	name: 'Bill Vasilopoulos',
	age: 43,
	stressLevel: 6,
	job: {
		title: 'Software Developer',
		company: 'Google',
	},
	location: {
		city: 'Chicago',
		country: 'United States'
	},
	instrument: 'Piano'
}).then(() => {
	console.log('Data is saved!');
}).catch((e) => {
	console.log('This failed', e);
});

database.ref().update({ // updates data
	stressLevel: 8,
	'job/company': 'Amazon',
	'job/city': 'Seattle', // adds new data with new prop
'location/city': 'Seattle'
});



database.ref() // fetches data from database from root
.once('value')
.then((snapshot) => {
	const val = snapshot.val();
	console.log(val);
})
.catch((e) => {
	console.log('Error fetching data', e);
});


//////////////////////
database.ref('location') // fetches data from specific objects
.once('value')
.then((snapshot) => {
	const val = snapshot.val();
	console.log(val);
})
.catch((e) => {
	console.log('Error fetching data', e);
});


database.ref('location/city') // fetches data from specific props from objects
.once('value')
.then((snapshot) => {
	const val = snapshot.val();
	console.log(val);
})
.catch((e) => {
	console.log('Error fetching data', e);
});


///////////////
database.ref().on('value', (snapshot) => { // (subscribes to changes)listens over and over again every time it changes without promises
	console.log(snapshot.val());
});

setTimeout(() => { // changing data with subscriptions in place
	database.ref('age').set(44);
}, 3500);

setTimeout(() => {
	database.ref().off(); // cancels all subscriptions
}, 7000);

setTimeout(() => {
	database.ref().off(); // cancels all subscriptions
}, 7000);

setTimeout(() => { // changing data with subscriptions in place
	database.ref('age').set(46);
}, 10500);

/////////////////
const onValueChange = database.ref().on('value', (snapshot) => {
	console.log(snapshot.val());
}, (e) => {
	console.log('Error with data fetching', e);
});

setTimeout(() => { // changing data with subscriptions in place
	database.ref('age').set(34);
}, 3500);

setTimeout(() => {
	database.ref().off('value', onValueChange); // cancels a single subscriptions
}, 7000);

// setTimeout(() => {
// 	database.ref().off(); // cancels all subscriptions
// }, 7000);

// setTimeout(() => { // changing data with subscriptions in place
// 	database.ref('age').set(37);
// }, 10500);

////////////

database.ref().on('value', (snapshot) => {
	const val = snapshot.val();
	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
});

/////////// Using arrays with firebase

// const firebaseNotes = {
// 	notes: {
// 		abcdefg: { // unique identifier
// 			title: 'First Note!',
// 			body: 'This is my note'
// 		},
// 		hijklmn: {
// 			title: 'Another note!',
// 			body: 'This is my note'
// 		}
// 	}
// };
// const notes = [{
// 	id: '12',
// 	title: 'First note!',
// 	body: 'This is my note'
// }, {
// 	id: '56',
// 	title: 'Another note!',
// 	body: 'This is my note'
// }];

// database.ref('notes').set(notes);


///////// way of using push method to create unique id for list based data
database.ref('notes').push({ // creates unique id for list based data
	title: 'Course Topics',
	body: 'React Native, Angular, Python'
});


database.ref('notes/-L_sEWMfvb-YItvC1PLV').update({
	body: 'Buy Food'
});

database.ref('notes/-L_sEWMfvb-YItvC1PLV').remove();


////////////adding data

database.ref('expenses').push({
	description: 'rent',
	note: 'paid rent',
	amount: 109500,
	createdAt: 98797987149
});

database.ref('expenses').push({
	description: 'phone bill',
	note: 'paid phone bill',
	amount: 5900,
	createdAt: 96797987149
});

database.ref('expenses').push({
	description: 'food',
	note: 'paid food bill',
	amount: 9500,
	createdAt: 99797987149
});

