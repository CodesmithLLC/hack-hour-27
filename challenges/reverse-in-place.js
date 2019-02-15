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

// function reverseInPlace(array) {
//     for (let i = 0; i < (array.length - 1) / 2; i++) {
//         let temp = array[i]
//         let array[i] = array[array.length - 1 - i];
//         array[array.length - 1 - i] = temp;
//     }
//     return array;
// }

function reverseInPlace(array) {
    for (let j = array.length - 1; j >= 0 ; j--){
      array.push(array[j]);
    }
    return array.splice(array.length / 2);
  }

module.exports = reverseInPlace;
