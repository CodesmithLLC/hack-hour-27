'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {




for (let i = 1; i < array.length / 2; i++){
	
	let tempBackPosition = i - 1;
	let tempForwardPosition = ((array.length - 1) - tempBackPosition); 
	
	[array[tempBackPosition], array[tempForwardPosition]] = [array[tempForwardPosition], array[tempBackPosition]];

	}

return array;


}

module.exports = reverseInPlace;
