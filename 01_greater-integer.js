/*
 *  Create a function that, given two integers, returns the greater of the two
 *
 */

'use strict';

function largestInt(a, b) {

	if(typeof(a) !== 'number' || typeof(b) !== 'number') {
		console.log('Please enter two numbers');
		return 'Please enter two numbers';
	}

	if(a > b) {
		console.log(a);
		return a;
	}
	else if(b > a) {
		console.log(b);
		return b;
	}
}

largestInt(1, 10);  // 10

largestInt(2, 5);  // 5

largestInt('a', 45);  // Please enter two numbers

largestInt(20, 200);  // 200

largestInt([1,2,3], 68);  // Please enter two numbers

largestInt(2020, 2015);  // 2020

largestInt('x', 'y');  // Please enter two numbers

largestInt(25, 'buster');  // Please enter two numbers
