/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  // find all possible combination of arrays
  // calculate the max of each array and store as key: value object

  function findSubarray(arr) {
    if (arr.length === 1) return arr
    else {
      let subArr = findSubarray(arr.slice(1))
      return subArr.concat(subArr.map(el => el.concat(arr[0]), [[arr[0]]]))
    }
  }

  return Math.max(findSubarray(arr).forEach(el => el.reduce((acc, cur) => {return acc + cur})))
}

module.exports = maxSubarray;
