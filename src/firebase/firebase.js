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

database.ref('expenses').on('child_changed', (snapshot) => { // updates subscription changes when child is changed
	console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => { // updates subscription changes when child is added. gets called on new and existing children in console
	console.log(snapshot.key, snapshot.val());
});






// database.ref('expenses').on('child_removed', (snapshot) => { // updates subscription changes when child is updated
// 	console.log(snapshot.key, snapshot.val());
// });



// database.ref('expenses').on('value', (snapshot) => { // every time expenses changes, we get a brand new array back
// 		const expenses = [];

// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key, // grabs unique id from firebase object
// 			...childSnapshot.val()
// 		});
// 	});
// 	console.log(expenses);
// });



// database.ref('expenses') // retrieves data from firebase database
// .once('value')
// .then((snapshot) => {
// 	const expenses = [];

// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key, // grabs unique id from firebase object
// 			...childSnapshot.val()
// 		});
// 	});
// 	console.log(expenses);
// });

// database.ref('expenses').push({
// 	description: 'rent',
// 	note: 'paid rent',
// 	amount: 109500,
// 	createdAt: 98797987149
// });


// database.ref('notes/-L_sEWMfvb-YItvC1PLV').update({
// 	body: 'Buy Food'
// });

// database.ref('notes/-L_sEWMfvb-YItvC1PLV').remove();

// database.ref('notes').push({ // creates unique id for list based data
// 	title: 'Course Topics',
// 	body: 'React Native, Angular, Python'
// });

// database.ref().on('value', (snapshot) => {
// 	const val = snapshot.val();
// 	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// });

// database.ref().set( { // implements data
// 	name: 'Bill Vasilopoulos',
// 	age: 43,
// 	stressLevel: 6,
// 	job: {
// 		title: 'Software Developer',
// 		company: 'Google',
// 	},
// 	location: {
// 		city: 'Chicago',
// 		country: 'United States'
// 	},
// 	instrument: 'Piano'
// }).then(() => {
// 	console.log('Data is saved!');
// }).catch((e) => {
// 	console.log('This failed', e);
// });

// database.ref().update({ // updates data
// 	stressLevel: 8,
// 	'job/company': 'Amazon',
// 	'job/city': 'Seattle',
// 'location/city': 'Seattle'
// });

// database.ref('isSingle').set(null); // also removed data like remove method

// database.ref('isSingle')
// .remove()
// .then(() => {
// 	console.log('Data was removed');
// }).catch((e) => {
// 	console.log('Did not remove data');
// });


// database.ref('location/city') // fetches data from specific props from objects
// .once('value')
// .then((snapshot) => {
// 	const val = snapshot.val();
// 	console.log(val);
// })
// .catch((e) => {
// 	console.log('Error fetching data', e);
// });




