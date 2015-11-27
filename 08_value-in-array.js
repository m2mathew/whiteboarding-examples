/*
 *  Given an array and a value:
 *  	Return true if the value exists in the array
 * 		Return false if it does not exist in the array
 * 		Do not use `indexOf` or `.find`
 *
 */

'use strict';

function testExist(array, val) {

	for(var i = 0; i < array.length; i++) {
		if(array[i] === val) {
			console.log(true);
			return true;
		}
	}
	console.log(false);
	return false;
}

testExist([1,2,3,4], 3);  // true

testExist([1,2,3,4], 0);  // false

testExist([2,3,7,11,13,17,19], 19);  // true

testExist([10,2.2,3.3,0.4], 3);  // false

testExist([false,'dolphin','kangaroo',42], 42);  // true
