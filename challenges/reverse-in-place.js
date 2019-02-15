'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

let x4 =  [1, 2, 3, 4];
let x5 = [1, 2, 3, 4, 5];
let str = 'Hello world';

function reverseInPlace(array) {
    let temp;
    let len = array.length-1;
    for(let i = 0; i < ((len+1)/2); i++){
        temp = array[len-i];
        array[len-i] = array[i];
        array[i] = temp;
    }
    return array;
}

// Test cases
// reverseInPlace(x4);
// console.log(x4);
// reverseInPlace(x5);
// console.log(x5);

// string
// console.log(reverseInPlace(str.split('')))
// console.log(str);


module.exports = reverseInPlace;
