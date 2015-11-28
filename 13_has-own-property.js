/*
 *  Recreate the method hasOwnProperty
 *  	Takes an object and string as arguments
 *  	Return true if the property exists in the object
 *  	Return false if the property does not exist in the object
 *
 */

'use strict';

function ownProperty(myObject, myString) {

	for(var prop in myObject) {
		if(prop === myString) {
			console.log('true');
			return true;
		}
	}
	console.log('false');
	return false;
}

ownProperty(
	{
		name: 'Mike',
		car: 'Audi',
		kids: 3
	}, 'name');  // true

ownProperty(
	{
		name: 'Chewie',
		animal: 'dog',
		numLegs: 4
	}, 'hasTail');  // false

ownProperty(
	{
		title: 'Lord of the Rings',
		author: 'J.R.R. Tolkien',
		volumes: 3
	}, 'volumes');  // true
