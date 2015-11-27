/*
 *  Create a function that, given three numbers, returns the smallest of the three
 *
 */

 'use strict';

function smallestNumber (a,b,c) {

	var myMin = a;

	if(typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number') {
		console.log('Please enter three numbers');
		return 'Please enter three numbers';
	}

	if(b < myMin) {
		myMin = b;
	}

	if(c < myMin) {
		myMin = c;
	}

	console.log(myMin);
	return myMin;
}

smallestNumber(1,3,5);  // 1

smallestNumber(5,13,3);  // 3

smallestNumber(1,'a',100);  // Please enter three numbers

smallestNumber(['a','b','c'],2,19);  // Please enter three numbers

smallestNumber(19,2.5,37);  // 2.5
