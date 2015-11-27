/*
 *  Given an array of integers, return the largest integer
 *
 */

'use strict';

function largeInt(array) {

	var largeNum = array[0];

	for(var i = 0; i < array.length; i++) {
		if(array[i] > largeNum) {
			largeNum = array[i];
		}
	}

	console.log(largeNum);
	return largeNum;
}


largeInt([1,3,9,5]);  // 9

largeInt([3,4.5,6,100]);  // 100

largeInt([99,3,4,2,98]);  // 99

largeInt([19,37,79,77,37]);  // 79

largeInt([19,1996,96,97]);  // 1996
