// Some languages have "if" statements that are closed by "fi" instead of curly brackets. 
// Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are 
// "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. 
// Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {

	let stack = [];

	// unify casing of str
	// then remove non-word chars and add each remaining word into 
	// an array as its own member
	str = str.toLowerCase();
	let parsed = str.match(/[a-z]+/g);

	// if the str has no words, return true
	if (parsed === null) return true;
	// if the str has an odd number of words, there lacks a pair
	// so return false
	if (parsed.length % 2 === 1) return false;

	// use a stack to match dupes with each other
	parsed.forEach( (ele) => {
		stack.push(ele);
		if (stack.includes(reverse(ele))) { 
		  stack.pop();
		  stack.pop();
		}
	});

	// empty stack = proprerly closed words
	if (stack.length === 0) return true;
	else return false;

}

function reverse(s){
    return s.split("").reverse().join("");
}

// tests

console.log(matchWord('__END_DNE-----'));   // -> true
console.log(matchWord('__ENDDNE__'));       // -> false       (not separated by a space)
console.log(matchWord('IF()()fi[]'));       // -> true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi')); //  -> false     not properly closed. like ( [) ] 
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')); //  -> true
console.log(matchWord('')); //  -> true

module.exports = matchWord;
