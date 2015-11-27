/*
 *  Create a function that determines the absolute value of a given number
 *
 */

 'use strict';

function absVal(number) {

	if(typeof(number) !== 'number') {
		console.log('Please enter a number');
		return 'Please enter a number';
	}
	else if(number < 0) {
		console.log(number * -1);
		return number * -1;
	}
	else {
		console.log(number);
		return number;
	}
}


absVal(19);  // 19

absVal(-19);  // 19

absVal('ewok');  // Please enter a number

absVal('20.02');  // Please enter a number

absVal(20.02);  // 20.02

absVal(0);  // 0
