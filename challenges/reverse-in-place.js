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
  let begin = 0;
  let end = array.length - 1;

  while (begin < end) {
    [array[begin], array[end]] = [array[end], array[begin]];
    begin += 1;
    end -= 1;
  }
  return array;
}

module.exports = reverseInPlace;

// let arr = ['a', 'b', 'c', 'd', 'e'];
// reverseInPlace(arr);