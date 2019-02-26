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

function isLetter(str) {
  return /^[a-z]+$/.test(str);
}

function reverseStr(str) {
  var splitString = str.split("");

  var reverseArray = splitString.reverse();

  var joinArray = reverseArray.join("");

  return joinArray;
}


function matchWord(str) {

  let myStr = str.toLowerCase();
  let strStack = [];
  let tempStr = '';

  for (let i = 0; i < myStr.length; i += 1) {

    if (isLetter(myStr[i])) {
      tempStr += myStr[i]; // found a letter. Append to temp.
    } else {
      // not a letter. if tempStr has something then check array or push
      if (tempStr.length > 0) {
        if (strStack.length > 0) {
          // something is in the stack. Check if reverse tempstr matches the last item.
          if (strStack[strStack.length-1] === reverseStr(tempStr)) {
            // it matches! remove one off the stack.
            strStack.pop();
          } else {
            // doesn't match. push this on the stack.
            strStack.push(tempStr);
          }
        } else {
          // nothing is on the stack. push tempstr on.
          strStack.push(tempStr);
        }
      }
      tempStr = '';
    }
  }
  if (tempStr.length > 0) {
    if (strStack.length > 0) {
      // something is in the stack. Check if reverse tempstr matches the last item.
      if (strStack[strStack.length-1] === reverseStr(tempStr)) {
        // it matches! remove one off the stack.
        strStack.pop();
      }
    }
  }

  if (strStack.length > 0) {
    return false;
  }
  return true;
}



// console.log(matchWord('__END_DNE-----'), ' expect true');
// console.log(matchWord('__ENDDNE__'), ' expect false');
// console.log(matchWord('IF()()fi[]'), ' expect true');
// console.log(matchWord('for__if__rof__fi'), ' expect false');
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'), ' expect true');
// console.log(matchWord(''), ' expect true');

module.exports = matchWord;
