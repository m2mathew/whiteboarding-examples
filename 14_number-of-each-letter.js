/*
 *  Create a function that takes a string
 *  	Return an object with each letter and number of times it occured in the string
 *
 */

'use strict';

function letterCount(string) {

	var myObj = {};

	for(var i = 0; i < string.length; i++) {

		if(myObj.hasOwnProperty(string.charAt(i)) !== true) {
			myObj[string.charAt(i)] = 1;
		}
		else if(myObj.hasOwnProperty(string.charAt(i)) === true) {
			myObj[string.charAt(i)]++;
		}
	}

	console.log(myObj);
	return myObj;
}

letterCount('pandas');  // {a:2, p:1, n:1, d:1, s:1}

letterCount('bob');  // {b:2, 0:1}

letterCount('banana');  // {a:3, b:1, n:2}

letterCount('aaron');  // {a:2, r:1, o:1, n:1}
