/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  // The subarray that will produce the most max
  let winningArray = [];
  console.log(Math.ceil(arr.length / 2));
  // iterate through the argument
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] >= 0) {
      winningArray.push(arr[i])
    } else {
      if ((winningArray[winningArray.length - 1] + arr[i] < 0)) {

        // winningArray = [];

      } else {
        winningArray.push(arr[i]);
      }
    }
  }
  console.log('winningArray is', winningArray);
  return winningArray.reduce((acc, cur) => {
    return acc + cur
  });


}



module.exports = maxSubarray;
