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

function repeatNumbers(array){
  const topValue = array.length-1
  const projectedVal = (1 + topValue)*topValue/2
  const sum = array.reduce((acc,val)=>{
    return acc + val;
  }, 0)
  return sum - projectedVal;
}

module.exports = repeatNumbers;
