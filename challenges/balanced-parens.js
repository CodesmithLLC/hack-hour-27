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
  const ledger = {
    "[": "]",
    "(": ")",
    "{": "}"
  }
  const stack = [];
  for (let i = 0; i < input.length; i += 1) {
    if (ledger[input[i]]) {
      stack.push(input[i]);
    }
    if (input[i] === ledger[stack[stack.length - 1]]) {
      stack.pop()
    }
  }
  return stack.length === 0;
}





module.exports = balancedParens;
