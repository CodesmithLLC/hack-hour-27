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

function rip(array) {
  return array.reverse();
}

function reverseInPlace(array) {
  for (let i = 1; i < array.length; i += 1) {
    console.log('i is', i);
    [array[0], array[i]] = [array[i], array[i - 1]]
  }

  return array;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3];

// console.log("using reverse method:", rip(arr1));
console.log("reverseInPlace test:", reverseInPlace(arr2));

module.exports = reverseInPlace;
