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
  // if (str.length === 0) return true;

  // let q1 = [];
  // let q2 = [];
  // let first = '';
  // let second = '';
  // let firstI = 0;
  // let secondJ = str.length - 1;

  // for (let i = 0; i <= str.length; i++) {
  //   if (/[a-zA-Z]/.test(str[i])) {
  //     q1.push(str[i]);
  //   }
  //   if (/[^a-zA-Z]/.test(str[i]) && q1.length > 0) {
  //     first = q1.join('').toLowerCase();
  //     firstI = i;
  //     break;
  //   }
  // }
  // // console.log('first', first);
  // for (let j = str.length - 1; j >= 0; j--) {
  //   if (/[a-zA-Z]/.test(str[j])) {
  //     q2.push(str[j]);
  //   }
  //   if (/[^a-zA-Z]/.test(str[j]) && q2.length > 0) {
  //     second = q2.join('').toLowerCase();
  //     secondJ = j;
  //     break;
  //   }
  // }
  // return first === second && secondJ >= firstI;
  const keywords = str.match(/[a-zA-Z]+/g) || [];
  const wordStack = [];
  console.log(keywords);
  for (let word of keywords) {
    console.log(wordStack);
    if (word.split('').reverse().join('').toLowerCase() === (wordStack[0] || '').toLowerCase()) {
      wordStack.shift();
    } else {
      wordStack.unshift(word);
    }
  }
  return !wordStack.length;
}

module.exports = matchWord;

// matchWord('IF()()fi[]');
console.log(matchWord('for_if_rof'));