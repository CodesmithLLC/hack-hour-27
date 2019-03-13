/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const numbers = {};
  for(let i = 0; i < arr.length; i += 1) {
    let complement = n - arr[i]
    if(numbers[complement]) {
      return true
    } else {
      numbers[arr[i]] = true
    }
  }
  return false
}

console.log(twoSum([1,2,3], 5))

// module.exports = twoSum;
