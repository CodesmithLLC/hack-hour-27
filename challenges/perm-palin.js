/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {

	// edge case
	if (str === '') return undefined;

	// sanitize input
	str = str.replace(/\W/g, '')


	// check for letter pairs
	const hasPair = {};

	for(let i=0; i<str.length; i++) {
		if(hasPair[str[i]]) delete hasPair[str[i]];
		else hasPair[str[i]] = 'none';
	}

	// if there is more than one letter lacking a pair, return false
	const remainingPairs = Object.entries(hasPair).length

	if ((remainingPairs === 1) || (remainingPairs === 0)) return true;
	return false;
	
}

console.log(permPalin('a man a plan a canal panama'))
console.log(permPalin('this is not a palindrome'))
console.log(permPalin('raceracecarcar'))
console.log(permPalin('the thing big. thing the big. big big the thing the thing. '))

module.exports = permPalin;