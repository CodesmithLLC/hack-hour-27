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
  if (!str) return true;
  const stack = [];
  const cleanArr = str.toLowerCase().match(/([A-Z]|[a-z])+/g);
  for (let i = 0; i < cleanArr.length; i++){
    const topStack = stack[stack.length-1];
    const currentStr = cleanArr[i];
    const reverseStr = cleanArr[i].split('').reverse().join('').toLowerCase();
    if (topStack === reverseStr){
      stack.pop();
    } else{
      stack.push(currentStr);
    }
  }
  if (stack.length){
    return false;
  } else {
    return true;
  }
}

/*
console.log(matchWord('__END_DNE-----') + ' -> true');
console.log(matchWord('__ENDDNE__') + ' -> false');
console.log(matchWord('IF()()fi[]') + ' -> true');
console.log(matchWord('for__if__rof__fi') + ' -> false')
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw') + ' -> true')
console.log(matchWord('') + ' -> true')
*/

module.exports = matchWord;
