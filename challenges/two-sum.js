/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {

  const complement = new Set();

  for(let i=0; i<arr.length; i++){
    if (complement.has(arr[i])) return true;
    else complement.add(n - arr[i]);
  }

  return false;

}

console.log(twoSum([1,2,3,4,5], 3))



module.exports = twoSum;
