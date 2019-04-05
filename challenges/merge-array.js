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
  let result = [];
  let arr1len = arr1.length;
  let arr2len = arr2.length;
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < arr1len && j < arr2len) {
    if (arr1[i] < arr2[j]) {
      result[k] = arr1[i];
      k += 1;
      i += 1;
    } else if (arr2[j] < arr1[i]) {
      result[k] = arr2[j];
      k += 1;
      j += 1;
    }
  }

  while (i < arr1len) {
    result[k] = arr1[i];
    k += 1;
    i += 1;
  }
  while (j < arr2len) {
    result[k] = arr2[j];
    k += 1;
    j += 1;
  }
  console.log(result);
}

module.exports = mergeArrays;

mergeArrays([3,4,6,10,11,15,21], [1,5,8,12,14,19]);
