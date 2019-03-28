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
  let result = {}
  for (let i = 0; i < array.length; i++){
    if (!result[array[i]]) result[array[i]] = 1
    else return array[i]
  }
  // for (let key in result) {
  //   if (result[key] === 2) return key
  // }
}

console.log(repeatNumbers([1,2,3,3]))

module.exports = repeatNumbers;
