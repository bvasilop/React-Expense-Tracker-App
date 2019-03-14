const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({
			name: 'Bill Vasilopoulos',
			age: 43
		});

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

// chaining promises

console.log('before');

promise.then((data) => {
	console.log('1', data);
		return 'some data';
}).then((str) => {
	console.log('does this run?', str);
}).catch((error) => {
	console.log('error: ', error);
});

console.log('after');


// chaining promise ex 2
console.log('before');

promise.then((data) => {
	console.log('1', data);
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve('This is my other promise');
			}, 1000);

		});;
}).then((str) => {
	console.log('does this run?', str);
}).catch((error) => {
	console.log('error: ', error);
});

console.log('after');

