/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time //no sorting, only one pass thru array at most
 * Do this in O(1) space //don't create new variables
 *
 */

//alternate strat: use a Set
//best strat: get real sum of 1 to n, and then get sum of array. return aray sum - real sum

function repeatNumbers(array) {
  // //strat: build counts object, iterate thru array, return the key once its value is 2
  // let counts = {};
  // for (let i = 0; i < array.length; i++){
  //   if (!counts[array[i]]) counts[array[i]] = 1;
  //   else counts[array[i]]++;
  //   if (counts[array[i]] === 2) return array[i];
  // }
  // return 'Invalid input';

  //"real" array would be length of fake array minus one
  let realSum = (array.length - 1) * (array.length) / 2; 
  let arraySum = array.reduce((acc, val) => acc + val)
  return arraySum - realSum;
  
}

//console.log(repeatNumbers([7, 2, 5, 8, 4, 6, 1, 7, 3, 9, 10]))

module.exports = repeatNumbers;
