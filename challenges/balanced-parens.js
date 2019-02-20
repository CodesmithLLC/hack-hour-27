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
    const charObj = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    const stack = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '(' || '{' || '[') {
            stack.push(input[i]);
            console.log(stack)
    }
    for (let j = 0; j < input.length; j++) {
        if (input[j] === ')' || ']' || '}') {
            if (stack.length === 0) return false;
            if (stack[stack.length-1] !== charObj[input[j]]) {
                return false;
        } else {
            stack.pop();
        }
    }
    return true;
}
    }
}

module.exports = balancedParens;

console.log(balancedParens('('), // false
balancedParens('()'), // true
balancedParens(')('),  // false
balancedParens('(())'))  // true)


// balancedParens('[](){}'); // true
// balancedParens('[({})]');   // true
// balancedParens('[(]{)}'); // false

// balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
// balancedParens(' var hubble = function() { telescopes.awesome();'); // fals