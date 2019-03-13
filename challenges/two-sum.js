/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const diffSet = new Set();
  for (let i = 0; i < arr.length; i += 1) {
    const d = n - arr[i];
    if (diffSet.has(arr[i])) return true;
    diffSet.add(d);
  }
  return false;
}

// console.log(twoSum([1, 2, 3, 4, 5], 20));
// console.log(twoSum([-1, -2, -3], -5));
// console.log(twoSum([-4, 3, 1, 0, 23], -1));
// console.log(twoSum([2, 3], 5));

module.exports = twoSum;
