/*
 *  Given two strings, put the second string in the middle of the first string
 *
 */

'use strict';

function insertString(a,b) {

	var first, mid, last = null;

	mid = Math.floor(a.length/2);

	first = a.substr(0,mid);

	last = a.substr(mid);

	console.log(first + b + last);
	return first + b + last;
}

insertString('maam', 'd');  // madam

insertString('one', 'zo');  // ozone

insertString('mada','mada');  // mamadada
