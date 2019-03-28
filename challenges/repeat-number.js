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
  // iterate through the array
  // check if set has i
  // if yes, return i
  // if no, add i to set
  const ledger = new Set;

  for (let i = 0; i < array.length; i += 1) {
    if (ledger.has(array[i])) {
      return array[i]
    }
    else ledger.add(array[i]);
  }
}


module.exports = repeatNumbers;
