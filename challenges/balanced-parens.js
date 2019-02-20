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

//  function findBalance(input, closingTag) {
//    while (input[index] !== closingTag) {

//    }
//  }

function balancedParens(input){
  let openParensCount = 0; // keep track of open parens found.
  let openBracketCount = 0;
  let openSquigCount = 0;
  index = 0;

  for (let i = 0; i < input.length; i += 1) {
    if (input[i] === '(') {
      // found open parens
      openParensCount ++;
    }

    if (input[i] === ')') {
      //found close parens. If there are no open parens found then return false. Not balanced.
      if (openParensCount === 0)  return false;

      // subtract 1 from open count
      openParensCount--;
    }

    if (input[i] === '{') {
      // found open parens
      openSquigCount ++;
    }

    if (input[i] === '}') {
      //found close . If there are no open parens found then return false. Not balanced.
      if (openSquigCount === 0)  return false;

      // subtract 1 from open count
      openSquigCount--;
    }


    if (input[i] === '[') {
      // found open parens
      openBracketCount ++;
    }

    if (input[i] === ']') {
      //found close . If there are no open found then return false. Not balanced.
      if (openBracketCount === 0)  return false;

      // subtract 1 from open count
      openBracketCount--;
    }


  }

  return (openParensCount === 0 && openBracketCount === 0 && openSquigCount === 0);
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

