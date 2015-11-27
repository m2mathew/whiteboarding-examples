/*
 *  Given a month number, return the name of the month
 *
 */

'use strict';

function numMonths(number) {

	var Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	if( (typeof(number) !== 'number') || number < 1 || number > 12 || (number % 1 !== 0) ) {
		console.log('Please enter an integer between 1 and 12');
		return 'Please enter an integer between 1 and 12';
	}
	else {
		console.log(Months[number-1]);
		return Months[number-1];
	}
}

numMonths(1);  // January

numMonths(7);  // July

numMonths(11);  // November

numMonths(12);  // December

numMonths(1.2);  // Please enter an integer between 1 and 12

numMonths('alpha');  // Please enter an integer between 1 and 12
