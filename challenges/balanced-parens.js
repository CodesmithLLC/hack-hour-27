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
  let leftParens = 0;
  let rightParens = 0;
  let leftSquare = 0;
  let rightSquare = 0;
  let leftCurly = 0;
  let rightCurly = 0;
  
  for (let i = 0; i < input.length; i++){
  
  	if (input = '') return true;
  
  	//Iterating through string
  	if (input[i] === '(') leftParens++;
    if (input[i] === ')') rightParens++;
    if (input[i] === '[') leftSquare++;
    if (input[i] === ']') rightSquare++;
    if (input[i] === '{') leftCurly++;
    if (input[i] === '}') rightCurly++;
    
     //whenever you find a match, remove from input everything starting from the left, until right, and then start iteration again from the new beginning
    if (leftParens === rightParens && leftParens > 0 && rightParens > 0){
      let toReplace = input.substr(input.indexOf(leftParens), input.indexOf(rightParens))
      input = input.replace(toReplace, '')
    }
    if (leftSquare === rightSquare && leftSquare > 0 && rightSquare > 0){
      let toReplace = input.substr(input.indexOf(leftSquare), input.indexOf(rightSquare))
      input = input.replace(toReplace, '')
    }
    if (leftCurly === rightCurly && leftCurly > 0 && rightCurly > 0){
      let toReplace = input.substr(input.indexOf(leftCurly), input.indexOf(rightCurly))
      input = input.replace(toReplace, '')
    }
    
    //End of String
    if (rightParens > leftParens) return false;
    if (rightSquare > leftSquare) return false;
    if (rightCurly > leftCurly) return false;
  }
  if (leftParens === rightParens && leftSquare === rightSquare && leftCurly === rightCurly) return true;
  return false;
}

module.exports = balancedParens;
