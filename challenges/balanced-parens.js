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

  input = input.match(/(\(|\)|\[|\]|\{|\})/g).join('')

  // step 1
  let result
  if (input.length < 2) return false
  for (let i = 0; i < input.length / 2; i++) {
    if (input[i] === '(' && input[input.length - i - 1] === ')') result = true
    else if (input[i] === '[' && input[input.length - i - 1] === ']') result = true
    else if (input[i] === '{' && input[input.length - i - 1] === '}') result = true
    else return false 
  }

  // turn all case into opening and closing initial
  // if any closing is ahead of closing => false
  const brackets = {
    '[': ']',
    '{': '}',
    '(': ')',
  }

  let reverseInput = input.split('').reverse('').join('')
  
  for (key in brackets) {
    let openIndex = input.findIndex(key)
    let closeIndex = reverseInput.findInex(brackets[key])
    balancedParens(input.substring(openIndex, closeIndex))
  }

  return result
}

module.exports = balancedParens;
