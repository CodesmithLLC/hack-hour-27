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
  let singles = [];
  for(let i = 0; i < array.length; i += 1) {
    if(singles.indexOf(array[i]) === -1) {
      singles.push(array[i])
    } else {
      return array[i]
    }
  }
}

module.exports = repeatNumbers;
