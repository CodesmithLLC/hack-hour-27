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
  const output = [];
  let currA = 0;
  let currB = 0;
  for(let i=0; i < arr1.length + arr2.length; i++){
    if (arr1[currA] < arr2[currB] || !arr2[currB]){
      output.push(arr1[currA]);
      currA++;
    }else{
      output.push(arr2[currB]);
      currB++;
    }
  }
  return output;
}

/*
var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];
 
console.log(mergeArrays(my_array, another_array));// -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
*/

module.exports = mergeArrays;
