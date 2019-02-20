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
 *  balancedParens('[({])}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input) {
  // refactor - try recursion 

  // overview:
  // find first left bracket - {, (, or [
  // slice at the location of the closing bracket of same type
  // throw that new slice into the balancedParens

  // base case
  // result of balancedParens is false OR there is no more of the input array to go through


  const inputArray = [...input];
  // console.log('input array is now', inputArray);
  // STEP ONE
  // if (inputArray.indexOf(")") < inputArray.indexOf("(")) {
  //   return false;
  // } else {
  //   const leftParensArray = inputArray.filter(el => el === "(");
  //   const rightParensArray = inputArray.filter(el => el === ")");

  //   if (leftParensArray.length === rightParensArray.length) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // STEP TWO
  // solution for all bracket types -> {} () []
  const alpha = [['(', '{', '['], [')', '}', ']']];
  const leftBracks = [];
  const rightBracks = [];
  // console.log('alpha is', alpha.length);

  for (let i = 0; i < alpha[0].length; i += 1) {
    if (inputArray.includes(alpha[0][i])) {
      const foundBracks = inputArray.filter(el => el === alpha[0][i]);
      leftBracks.push(foundBracks);
    }
  }

  for (let i = 0; i < alpha[1].length; i += 1) {
    if (inputArray.includes(alpha[1][i])) {
      const foundBracks = inputArray.filter(el => el === alpha[1][i]);
      rightBracks.push(foundBracks);
    }
  }

  if (leftBracks.length !== rightBracks.length) {
    return false;
  } else {
    for (let i = 0; i < leftBracks.length; i += 1) {
      if (leftBracks[i].length !== rightBracks[i].length) {
        return false;
      }
    }
    return true;
  }

  console.log('left bracks is', leftBracks);
  console.log('right bracks is', rightBracks);

}

//



console.log('STEP ONE: expected: true / actual -->', balancedParens('()'));
console.log('STEP ONE: expected: false / actual -->', balancedParens('('));
// console.log('STEP ONE: expected: false / actual -->', balancedParens(')('));
// console.log('STEP ONE: expected: true / actual -->', balancedParens('(())'));


console.log('STEP TWO: expected: true / actual -->', balancedParens('[](){}'));
console.log('STEP TWO: expected: true / actual -->', balancedParens('[({})]'));
// console.log('STEP TWO: expected: false / actual -->', balancedParens('[(]{)}'));




module.exports = balancedParens;
