const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve({
		// 	name: 'Bill Vasilopoulos',
		// 	age: 43
		// });

		reject('Something went wrong');
	}, 1000);

});

console.log('before');

promise.then((data) => {
	console.log('1', data);
}).catch((error) => {
	console.log('error: ', error);
});

console.log('after');
