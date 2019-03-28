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

//alternate strat: use a Set

function repeatNumbers(array) {
  //strat: build counts object, iterate thru array, return the key once its value is 2
  let counts = {};
  for (let i = 0; i < array.length; i++){
    if (!counts[array[i]]) counts[array[i]] = 1;
    else counts[array[i]]++;
    if (counts[array[i]] === 2) return array[i];
  }
  return 'Invalid input';
  
  
}

console.log(repeatNumbers([7, 2, 5, 8, 4, 6, 1, 7, 3, 9, 10]))

module.exports = repeatNumbers;
