/*
 *  Given an array of numbers, return the number of positive numbers
 *
 */

'use strict';

function positiveInt(array) {

	 var count = 0;

	 for(var i = 0; i < array.length; i++) {
	 	if(typeof(array[i]) === 'number' && array[i] > 0) {
	 		count++;
	 	}
	 }
	 console.log(count);
	 return count;
}

positiveInt([-1,-2,-4,1]);  // 1

positiveInt([2,4,78,34,6789]);  // 5

positiveInt(['beanie babies', -1, false, 'earthquake', [1,2,3], {a:1, 1:'a'}]);  // 0

positiveInt([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);  // 19

positiveInt(['USA', 'Texas', 1, 50, 0, -0]);  // 2
