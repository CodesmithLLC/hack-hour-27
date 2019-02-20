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


arr = input.split('');
arr2 = [];
for (let each of arr){
	if (each.replace(/[^{}()\[\]]/, "")){
		arr2.push(each);
	}
}
sanitized = arr2.join('');

let i;
let counter = 0;
let fin = input.length - 1 ;
let ledger = {
	'{': '}',
	'(': ')',
	'[': ']'
};

	for (i=0; i < sanitized.length / 2; i++){
		for (let [k, v] of Object.entries(ledger)){
			if ((sanitized[i] === k) && (sanitized[fin - i] === v)) {
				counter++;
			}
		}
	}

if (counter === sanitized.length / 2) {return true};
return false;



}
console.log(balancedParens('pefj{ffe}'))
console.log(balancedParens('[{[}]'))
console.log(balancedParens('[{[]}]'))
console.log(balancedParens('{}'))

module.exports = balancedParens;
