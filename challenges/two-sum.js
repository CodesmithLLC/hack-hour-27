/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const memo = new Set();
  for (let value of arr) {
    if (memo.has(value)) return true;
    else memo.add(n-value);
  }
  return false;
}

module.exports = twoSum;

// console.log(twoSum([2,5,3,9,10], 13));
// console.log(twoSum([2,5,3,9,7], 13));