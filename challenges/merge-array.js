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
    const merge = [];
    let i = 0;
    let j = 0;

    while(arr1.length > i && arr2.length > j){
        if(arr1[i] >= arr2[j]){
            merge.push(arr2[j]);
            j++;
        }
        else if(arr1[i] < arr2[j]){
            merge.push(arr1[i]);
            i++;
        }
    }
    while(arr1.length > i){
        merge.push(arr1[i]);
        i++;
    }
    while(arr2.length > j){
        merge.push(arr2[j]);
        j++;
    }
    return merge;
}

module.exports = mergeArrays;

//  const a1 = [3,4,6,10,11,15,21];
//  const a2 = [1,5,8,12,14,19];
// console.log(mergeArrays(a1,a2));