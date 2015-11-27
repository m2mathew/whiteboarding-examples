/*
 *	Create a function "dice" that will return a roll of 2 dice between 1 & 6
 *
 */

'use strict';

function dice() {
	var x = Math.ceil(Math.random() * 36);
	var die1 = (x % 6) + 1;
	var die2 = (x % 6) + 1;
	console.log(die1 + die2);
	return die1 + die2;
}

dice();

dice();

dice();
