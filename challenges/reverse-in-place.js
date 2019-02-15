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

function reverseInPlace(array) {
  for (let i = 0; i < Math.floor(array.length/2); i++){
    [array[i], array[array.length-1-i]] = [array[array.length-1-i],array[i]];
  }
  return array;
}

function rip(array) {
// works for array of single chars only
  for (let i = 0; i < Math.floor(array.length/2); i++){
    array[i] += array[array.length-1-i];
    array[array.length-1-i] = array[i][0];
    array[i] = array[i][1];
  }
  return array;
}
/*
tests
const strTest = ['a','b', 'c','d'];
const test = [0, 1, 2, 3, 4];
console.log(rip(strTest));
*/

module.exports = reverseInPlace;
