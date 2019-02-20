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

// first balancedParens has a space complexity of O(n) since a new array is generated
// and also creates a an array used as a stack.
// Time complexity is O(n) where n is the length of the input.
function balancedParens(input) {
  const balancingArr = [];
  const opposite = {
    "]": "[",
    ")": "(",
    "}": "{"
  };

  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];

    if (char === "[" || char === "(" || char === "{") {
      balancingArr.push(char);
    }

    if (char === "]" || char === ")" || char === "}") {
      const popped = balancingArr.pop();
      if (popped !== opposite[char]) return false;
    }
  }

  if (balancingArr.length) {
    return false;
  }
  return true;
}

// // balancedParens uses in place comparison and has a space complexity of O(1). Only a constant number of variables
// // are created for this.
// // Time complexity O(n), where n is the length of the input
// function balancedParens(input) {
//   if (input.length < 2) return false;
//   let backPtr = 0;
//   let runner;
//   let backChar = "";
//   const opposite = {
//     "]": "[",
//     ")": "(",
//     "}": "{"
//   };

//   while (frontPtr <= backPtr && !frontChar) {
//     if (
//       input[frontPtr] === "[" ||
//       input[frontPtr] === "(" ||
//       input[frontPtr] === "{"
//     ) {
//       frontChar = input[frontPtr];
//     }
//     frontPtr += 1;
//   }
//   while (frontPtr <= backPtr && frontChar) {
//     if (
//       input[backPtr] === "]" ||
//       input[backPtr] === ")" ||
//       input[backPtr] === "}"
//     ) {
//       if (frontChar !== opposite[input[backPtr]]) {
//         return false;
//       } else {
//         frontChar = "";
//       }
//     }
//     backPtr -= 1;
//   }
//   if (!frontChar) {
//     return true;
//   }
//   return false;
// }

// function balancedParens(str) {
//   let idx = 0
//   const opposite = {
//     "[": "]",
//     "(": ")",
//     "{": "}"
//   };
//   function findCloser(idx, char) {
//     for (let i = idx; i < str.length; i += 1) {
//       const currChar = str[idx];
//       if (curr)
//     }
//     // base case: if the correct is found, return true

//   }

//   for (let i = idx; i < str.length; i += 1) {

//   }
// }

module.exports = balancedParens;
