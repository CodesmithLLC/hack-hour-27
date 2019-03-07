/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 *
 * BONUS:
 * Complete in O(n) time
 *
 */
function mergeArrays(arr1, arr2) {
  if (arguments.length === 1) {
    return arr1;
  }
  var mergedArr = [];
  var arr1Ptr = 0;
  var arr2Ptr = 0;
  while (arr1Ptr < arr1.length && arr2Ptr < arr2.length) {
    if (arr1[arr1Ptr] > arr2[arr2Ptr]) {
      mergedArr.push(arr2[arr2Ptr]);
      arr2Ptr += 1;
    } else {
      mergedArr.push(arr1[arr1Ptr]);
      arr1Ptr += 1;
    }
  }
  while (arr2Ptr < arr2.length) {
    mergedArr.push(arr2[arr2Ptr]);
    arr2Ptr += 1;
  }
  while (arr1Ptr < arr1.length) {
    mergedArr.push(arr1[arr1Ptr]);
    arr1Ptr += 1;
  }
  return mergedArr;
}
// var my_array = [3, 4, 6, 10, 11, 15, 21];
// var another_array = [1, 5, 8, 12, 14, 19];
// console.log(mergeArrays(my_array, another_array));
module.exports = mergeArrays;
