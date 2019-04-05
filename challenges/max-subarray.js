/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

//  //stupid solution
// function maxSubarray(arr) {
//   //50 IQ: get all subarrays, return highest sum.
//   let subarrays = getSubarrays(arr);
//   console.log('subarrays', subarrays)
//   let max = -Infinity;
//   let combos = subarrays.forEach( subarray => {
//   	let subarraySum = subarray.reduce((acc, val) => acc + val);
//     if (subarraySum > max) max = subarraySum;
//   })
//   return max;
// }

// const getSubarrays = (arr) => {
//   let output = [];
//   for (let j = arr.length; j >= 0; j--) {
//     for (let i = 0; i < j; i++){
//       output.push(arr.slice(i, j))
//     }
//   }
  
//   return output;
// }

//smart solution
function maxSubarray(arr) {

  var currentMax = Number.NEGATIVE_INFINITY;
  var finalMax = Number.NEGATIVE_INFINITY;

  for (var i = 0; i < arr.length; i++) {
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    finalMax = Math.max(finalMax, currentMax);
  }
  return finalMax;
}

//console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])) // -> 18 from [3, 10, -4, 7, 2]
//console.log(maxSubarray([15,20,-5,10])) //  -> 40

module.exports = maxSubarray;
