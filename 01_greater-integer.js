/*
 *  Create a function that, given two integers, returns the greater of the two
 *
 */

'use strict';

function largestInt (a, b) {

	if(typeof(a) !== 'number' || typeof(b) !== 'number') {
		console.log('Please enter two numbers');
		return;
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

largestInt(1, 10);

largestInt(2, 5);

largestInt('a', 45);

largestInt(20, 200);

largestInt([1,2,3], 68);

largestInt(2020, 2015);

largestInt('x', 'y');

largestInt(25, 'buster');
