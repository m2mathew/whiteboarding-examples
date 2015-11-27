/*
 *  Create a function that takes a name
 *  Display "hello" plus that name if the name begins with "A-L"
 *	Display "goodbye" plus that name if the name begins with "M-Z"
 *
 */

'use strict';

function helloName(name) {

	var x = name.charAt(0).toLowerCase();

	if(x >= 'a' && x <= 'l') {
		console.log('Hello, ' + name);
		return 'Hello, ' + name;
	}
	else if(x >= 'm' && x <= 'z') {
		console.log('Goodbye, ' + name);
		return 'Goodbye, ' + name;
	}
	else {
		console.log('Nice try!');
		return 'Nice try!';
	}
}

helloName('Isaac');  // "Hello, Isaac"

helloName('Michael');  // "Goodbye, Michael"

helloName('Chewie');  // "Hello, Chewie"

helloName('Vader');  // "Goodbye, Vader"
