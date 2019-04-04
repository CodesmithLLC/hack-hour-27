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
  let str = '';
  for (let i = 0; i < array.length; i++) {
    str += array[i].toString();
  }
  return parseInt(str.match(/(.).*\1/)[1], 10);
}

module.exports = repeatNumbers;

let test = [1, 2, 2, 3, 4];
console.log(repeatNumbers(test));