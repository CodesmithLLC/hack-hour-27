/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  let set = new Set();
  for (let i = 0; i < array.length; i++) {
    if (set.has(array[i])) {
      return array[i]
    } else {
      set.add(array[i])
    }
  }
}

module.exports = repeatNumbers;

