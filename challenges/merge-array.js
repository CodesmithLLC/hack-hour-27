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
  //strat: 2 pointers: one pointer for each array. build output array. while loop: compare each value, push the smaller value onto output, and then increment that array's pointer. if both values equal, push both and increment both. when one array is out of length, concat the rest of the other array onto output.
  let i = 0, j = 0, output = [];
  while (arr1[i] !== undefined && arr2[j] !== undefined){
    if (arr1[i] < arr2[j]){
      output.push(arr1[i])
      i++;
    }else if (arr2[j] < arr1[i]){
      output.push(arr2[j]);
      j++;
    } else if (arr1[i] === arr2[j]){
      output.push(arr1[i]);
      output.push(arr2[j]);
      i++;
      j++;
    }
  }
  if (arr1[i] && !arr2[j]) output.push(...arr1.slice(i))
  if (arr2[j] && !arr1[i]) output.push(...arr2.slice(j))

  return output;
  // slow way
  //return arr1.concat(arr2).sort( (a,b) => a - b);
}

// var my_array = [-1,0, 1 ,6,10,11,15,21];
// var another_array = [20,25,28,212];
// console.log(mergeArrays(my_array, another_array)); // -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 
module.exports = mergeArrays;
