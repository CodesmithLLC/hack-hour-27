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

// function rip(array) {
//   return array.reverse();
// }

function reverseInPlace(array) {
  // two pointers!
  let startIndex = 0;
  let endIndex = array.length - 1;
  let temp;

  while (endIndex > startIndex) {
    temp = array[endIndex];
    array[endIndex] = array[startIndex];
    array[startIndex] = temp;
    startIndex += 1;
    endIndex -= 1;
  }

  return array;

}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3];

console.log("reverseInPlace test -- should be [5,4,3,2,1] - actual is:", reverseInPlace(arr1));
console.log("reverseInPlace test -- should be [3,2,1] - actual is:", reverseInPlace(arr2));

module.exports = reverseInPlace;
