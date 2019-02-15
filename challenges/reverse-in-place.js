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
	let oldLength = array.length;

	for(let i=oldLength-2; i>=0; i--){
		array.push(array[i])	
	}

	array = array.slice(oldLength-1)

	return array;
}

function recuReverse(array, count = array.length-1) {

	if(count === -1) return array;

	let temp = array.splice(count,1);
	array.push(...temp);
	return recuReverse(array, count-1);

}

// tests

recuReverse([1,2,3,4,5,6,7,8,9])



module.exports = reverseInPlace;
