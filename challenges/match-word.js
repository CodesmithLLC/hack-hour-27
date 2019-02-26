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

// loops through the str, character by character
// if a char is hit, invoke the returnWord function that returns the word
// add the word to the stack
// continue to look for another character
// once another word has been found, pop it off and compare. if comparison is okay, take it off, otherwise, pop both back on
// continue until the end.. return true if stack length is 0, otherwise return false

function matchWord(str) {
  // change everything to lower case (case insensitive)
  str = str.toLowerCase();
  // initialize structures and variables
  const S = []; // S is the stack, uses push and pop method
  let i = 0;

  const returnWord = () => {
    let word = '';
    while (i < str.length && str[i].toUpperCase() !== str[i].toLowerCase()) {
      word += str[i];
      i += 1;
    }
    return word;
  };

  while (i < str.length) {
    // loop the string until a char is found
    if (str[i].toUpperCase() !== str[i].toLowerCase()) {
      // return the word
      const word = returnWord();
      // if there is words on the stack, pop and compare
      if (S.length) {
        const first = S.pop();
        // if the word is not the reversed, push both back on the stack, ensuring the proper order
        if (!isReversed(first, word)) {
          S.push(first, word);
        }
        // if the word is reversed, do nothing, since the top word is already poppped off
      } else {
        // Seed the stack by push the first word on the stack
        S.push(word);
      }
    }
    i += 1;
  }
  // if there is something in the stack, not balanced
  if (S.length) return false;

  return true;
}

function isReversed(s1, s2) {
  s1 = Array.from(s1)
    .reverse()
    .join('');
  return s1 === s2;
}

// prettier - ignore;
// const testPair = [
//   { input: '__END_DNE-----', expect: true },
//   { input: '__ENDDNE__', expect: false },
//   { input: 'IF()()fi[]', expect: true },
//   { input: 'for__if__rof__fi', expect: false },
//   { input: '%%$@$while  try ! yrt  for if_fi rof #*#  elihw', expect: true },
//   { input: '', expect: true }
// ];

// testPair.forEach(pair => {
//   const { input, expect } = pair;
//   const output = matchWord(input);
//   if (output !== expect) {
//     console.log(
//       `***** test failed, input ${input}, expected ${expect}, got ${output}`
//     );
//   } else {
//     console.log(
//       `test passed, input ${input}, expected ${expect}, got ${output}`
//     );
//   }
// });

module.exports = matchWord;
