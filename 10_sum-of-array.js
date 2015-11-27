/*
 *  Given an array of numbers, return the sum of all numbers
 *
 */

'use strict';

function sumOfArray(array) {

	var sum = 0;

	for(var i = 0; i < array.length; i++) {
		if(typeof(array[i]) === 'number') {
			sum = sum + array[i];
		}
	}

	console.log(sum);
	return sum;
}

sumOfArray([1,2,3,4]);  // 10

sumOfArray([11,89,1]);  // 101

sumOfArray([42,42,42]);  // 126

sumOfArray(['a','kitten','samurai',19]);  // 19
