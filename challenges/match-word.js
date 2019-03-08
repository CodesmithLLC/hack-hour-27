// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

//console.log(regex1.test(str1));

function matchWord(str) {
let queue = [];
//create module to seperate words
let arr = str.split('');
let temp = [];
let ch = 0 

function reverse(string){
	return string.split('')
				 .reverse()	
				 .toUpperCase()
				 .join('')

}	

while (str[ch]) {
	if ((/([^AZ-az])\w+/).test(str[ch])) {temp.push(str[ch]);}
	if (!(/([^AZ-az])\w+/).test(str[ch])) {
		temp = temp.join('').toUpperCase();
		if (queue[-1] && temp === reverse(queue[-1])){
			queue.pop()
		} else {
			queue.push(temp);
			temp = [];
		}
		console.log(queue);
		ch++
	}
}


if (queue) {return false} else {return true}





}
console.log(matchWord('IF()()fi[]'))
console.log(matchWord('__ENDDNE__'))


module.exports = matchWord;
