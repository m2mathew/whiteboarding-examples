/*
 *  Create a function that will ask user a yes or no question.
 *  	It will continue to ask until their input is "yes" or "y" or "no" or "n"
 *
 */

'use strict';

function answerMe() {

	do {
		var answer = window.prompt('Is JavaScript gnarly or what?');
		answer.toLowerCase();
	} while(answer !== 'y' || answer !== 'yes' || answer !== 'n' || answer !== 'no');

	if(answer === 'yes' || answer === 'y') {
		answer = 'yes';
	}
	else {
		answer = 'no';
	}

	console.log(answer);
	return answer;
}

answerMe();
