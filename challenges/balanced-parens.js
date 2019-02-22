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

 function findBalance(input, closingTag) {
  let openParensCount = 0; // keep track of open parens found.
  let openBracketCount = 0;
  let openSquigCount = 0;
  while (input[index] !== closingTag && input[index]) {
    if (input[index] === '(') {
      // found open parens
      if (findBalance(input, ')') === false) return false;
    }

    if (input[index] === '{') {
      // found open parens
      if (findBalance(input, '}') === false) return false;
    }

    if (input[index] === '[') {
      // found open parens
      if (findBalance(input, '}') === false) return false;
    }

    index++;

  }
 }

function balancedParens(input){

  index = 0;

  while (input[index]) {
    if (input[index] === '(') {
      // found open parens
      if (findBalance(input, ')') === false) return false;
    }

    if (input[index] === '{') {
      // found open parens
      if (findBalance(input, '}') === false) return false;
    }

    if (input[index] === '[') {
      // found open parens
      if (findBalance(input, '}') === false) return false;
    }

    index++;

  }

  return true;
}

module.exports = balancedParens;

console.log('false - ', balancedParens('('));
console.log('true - ', balancedParens('()'));
console.log('false - ', balancedParens(')('));
console.log('true - ', balancedParens('(())'));

console.log('true - ', balancedParens('[](){}'));
console.log('true - ', balancedParens('[({})]'));
console.log('false - ', balancedParens('[(]{)}'));

console.log('true - ', balancedParens(' var wow  = { yo: thisIsAwesome() }'));
console.log('false - ', balancedParens(' var hubble = function() { telescopes.awesome();'));

