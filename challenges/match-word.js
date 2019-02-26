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

function matchWord(str) {
  //clean string by replacing all punctuation with a space.
  let cleanStr = str.replace(/[^a-z \ \!\?\.\_]/gi, ''); //remove all non-punctuation special chars
  cleanStr = cleanStr.replace(/[\!\?\.\_]/g, ' ');
  cleanStr = cleanStr.replace(/\ {2,}/g, ' ');
  //console.log('cleanStr', cleanStr)
  //strat: iterate thru string
  if (cleanStr == '') return true;
  let words = [];
  let word = '';
  for (let i = 0; i < cleanStr.length; i++){
  	if (cleanStr[i] == ' ') {
    	words.push(word);
      word = '';
    } else {
  		word += cleanStr[i];
    }
    if (i == cleanStr.length - 1) words.push(word);
  }
  //console.log('words', words)
  return helperFunc(words);
    //if you find a character, keep going until you find a non-character. This is our word.
    // reverse the word, store it for reference.
  //recursively slice off word from start and reverse word from end.
  //if you have empty string at end, return true
    //if string not empty at end, return false
}

function helperFunc(array){
 if (!array.length) return true;
  let element = array[0];
  let reverseElement = element.split('').reverse().join('');
  //console.log('reverseElement', reverseElement)
  if (!array.indexOf(reverseElement)) return false;
  array.splice(array.indexOf(element), 1); //remove word from array
  array.splice(array.indexOf(reverseElement), 1); //remove word's pair from array
  let newArray = [...array]
  //console.log(newArray);
  return helperFunc(newArray)
}

// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  //-> true
module.exports = matchWord;
