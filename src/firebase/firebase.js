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

firebase.database().ref().set( {
	name: 'Bill Vasilopoulos'
});
