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
  // sanitize input to only keep parens
  let string = input.replace(/[^\(\)\{\}\[\]]/g, '');

  // temp storage to keep track of opening parens
  let temp = [];

  for (let i = 0; i < string.length; i++) {
    // found opening parens
    if (string[i] === '{' || string[i] === '[' || string[i] === '(') {
      temp.push(string[i]);
    }

    // found closing parens
    if (string[i] === '}' || string[i] === ']' || string[i] === ')') {
      // found closing parens before any open
      if (temp.length === 0) return false;
      
      // check if closing parens is the latest opened
      switch (string[i]) {
        case '}':
          if (temp[temp.length-1] !== '{') return false;
          temp.pop();
          break;
        case ']':
          if (temp[temp.length-1] !== '[') return false;
          temp.pop();
          break;
        case ')':
          if (temp[temp.length-1] !== '(') return false;
          temp.pop();
          break;
      }
    }
  }

  // any remaining unclosed parens
  if (temp.length !== 0) return false;

  return true;
}

module.exports = balancedParens;


// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // -> true
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // -> false

// console.log(balancedParens('[](){}')); // -> true
// console.log(balancedParens('[({})]')); // -> true
// console.log(balancedParens('[(]{)}')); // -> false
