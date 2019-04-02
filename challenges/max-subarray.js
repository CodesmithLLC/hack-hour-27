/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let sum = arr[0];
  let min = arr[0];
  let maxSum = sum;
  let recount = false;
  for (let i = 1; i < arr.length; i++) {
    if (recount) {
      sum = arr[i];
      min = arr[i];
      maxSum = Math.max(maxSum, sum);
      recount = false;
    } else {
      if (sum + arr[i] < min) {
        recount = true;
      } else {
        sum += arr[i];
        maxSum = Math.max(maxSum, sum);
      }
    }
    // console.log(`i: ${i}, sum: ${sum}, min: ${min}, maxSum: ${maxSum}`);
  }
  return Math.max(maxSum, sum);
}

module.exports = maxSubarray;

// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])); // -> 18 from [3, 10, -4, 7, 2]
// console.log(maxSubarray([15,20,-5,10])); //  -> 40