/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){

	//recurseeeeee

 	let newInput = input;

 	let openParens = 1;
	let closedParens = 0;

	let start = input.indexOf('(')
	let end = input.indexOf(')')

	// console.log(start)
	// console.log(end)

	// base cases
	if( (start === -1) && (end === -1) && (start>=end) ) return true
	if( (start > end) ) return false
	if  (start === -1) return false;
	if  (end === -1) return false;


	// recu case
	let i = start+1;

	do{
		if(input[i] === ')') {
			closedParens++;
			end = i;
		}

		if(input[i] === '(') openParens++;
		i++;

	} while( (closedParens!==openParens) || i<input.length)

	// remove the parens
	newInput = Array.from(newInput)
	newInput[start] = '0'
	newInput[end] = '0'
	newInput = newInput.join('')

	return balancedParens(newInput)
}

// tests

console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true

module.exports = balancedParens;
