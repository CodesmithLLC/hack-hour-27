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
  if (str.length === 0) {
    return true;
  }
  const charsRegEx = new RegExp(/[a-z]+/gi);
  let foundStrs = str.match(charsRegEx);

  if (foundStrs.length === 0) {
    return true;
  }

  const matchStack = [foundStrs[0]];

  for (let i = 1; i < foundStrs.length; i += 1) {
    if (foundStrs[i].toLowerCase() === matchStack[matchStack.length - 1].split('').reverse().join('').toLowerCase()) {
      matchStack.pop();
    } else {
      matchStack.push(foundStrs[i].toLowerCase());
    }
  }
  return matchStack.length === 0;
}
console.log(matchWord(''));
module.exports = matchWord;
