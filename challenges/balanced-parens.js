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
    const arr = [];
    const data = input.split('');

    let temp;
    while(data.length){
        temp = data.shift();
        if('(' === temp || '[' === temp || '{' === temp){ // open 
            if(data.length === 0) return false;

            arr.push(temp);
        }
        else{ // closed
            if(arr.length === 0 && data.length > 0) return false;

            arr.shift();
            arr.shift();
            // data.shift();
            // let check = data.shift();
            // if(temp !== check )
            //     return false;
        }
    }
    if(arr.length)
        return false;
    return true;
}

// console.log(  balancedParens('('));  // false
// console.log(  balancedParens('()')); // true
// console.log( balancedParens(')('));  // false
// console.log( balancedParens('(())'));  // true

// console.log("ADVANCED");
//  console.log( balancedParens('[](){}')); // true
//  console.log( balancedParens('[({})]'));   // true
//  console.log( balancedParens('[(]{)}')); // false

module.exports = balancedParens;
