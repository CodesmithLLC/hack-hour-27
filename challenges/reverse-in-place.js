"use strict";
// const _ = require("lodash");
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
  let hi = array.length - 1;
  for (let lo = 0; lo < hi; lo += 1) {
    let temp = array[lo];
    array[lo] = array[hi];
    array[hi] = temp;
    hi -= 1;
  }
  return array;
}

// const testPair = [
//   { input: [], expect: [] },
//   { input: [1, 2, 3], expect: [3, 2, 1] },
//   { input: [1, 2, 3, 4], expect: [4, 3, 2, 1] },
//   { input: ["a", "b", "c"], expect: ["a", "b", "c"] },
//   { input: [[1], [2], [3]], expect: [[3], [2], [1]] },
//   { input: [[1], [2], [3]], expect: [[3], [2], [1]] },
//   { input: [], expect: [] }
// ];

// testPair.forEach(test => {
//   const { input, expect } = test;
//   const output = reverseInPlace(input);
//   if (_.isEqual(expect, output)) {
//     console.log(
//       `test failed, input ${input}, expected ${expect}, got ${output} \n`
//     );
//   } else {
//     console.log(
//       `test passed, input ${input}, expected ${expect}, got ${output} \n`
//     );
//   }
// });

module.exports = reverseInPlace;
