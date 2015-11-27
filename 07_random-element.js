/*
 *  Given an array, return one randomly selected element
 *
 */

'use strict';

function randomElement(array) {

	var rand = Math.random() * array.length;
	rand = Math.floor(rand);
	console.log(array[rand]);
	return array[rand];
}

randomElement(['Mike','javascript','November','turtles']);  // any element returned

randomElement(['42','life','the universe','everything']);  // any element returned

randomElement(['Olivia','Alexis','Isaac','Han Solo','Indiana Jones']);  // any element returned

randomElement([1,'Mac OS X','ES2015','Fat arrow!']);  // any element returned
