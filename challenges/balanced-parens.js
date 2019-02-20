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

function balancedParens(input){
  const stack = [];
  const openBr = new Set(['{','<','[','(']);
  const closeBr = new Set(['}','>',']',')']);
  const pairs = {
    '}':'{',
    '>':'<',
    ']':'[',
    ')':'('
  }

  for (let i = 0; i < input.length; i++){
    if (openBr.has(input[i])){
      stack.push(input[i]);
    } else if (closeBr.has(input[i])){
      if (stack.length < 1) return false;
      if (stack[stack.length-1] !== pairs[input[i]]) return false;
      stack.pop();
    } 
  }
  return (!stack.length);
}

/*
console.log('1 false ' + balancedParens('('))  // false
console.log('2 true ' + balancedParens('()')); // true
console.log('3 false ' + balancedParens(')('));  // false
console.log('4 true ' + balancedParens('(())'));  // true
console.log('5 true ' + balancedParens('[](){}')); // true
console.log('6 true ' + balancedParens('[({})]'));   // true
console.log('7 false ' + balancedParens('[(]{)}')); // false
console.log('8 true ' + balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log('9 false ' + balancedParens(' var hubble = function() { telescopes.awesome();')); // false
*/

module.exports = balancedParens;
