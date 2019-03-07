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

function mergeArrays(arr1, arr2, fullArray = []) {

	// edge cases - missing arguments
	if(!arr1 && !arr2) return undefined;
	if(!arr1) return arr2;
	if(!arr2) return arr1;

	// base case - no more numbers left in an array to sort
	if(arr1.length === 0) return fullArray.concat(arr2);
	if(arr2.length === 0) return fullArray.concat(arr1);

	// recu case
	// compare front numbers from arrs
	// push the larger one into fullArray
	// remove it, then call the func recursively with the modified arrays
	if(arr1[0] <= arr2[0]) {
		fullArray.push(arr1[0]);
		newArr1 = arr1.slice(1);
		newArr2 = arr2.slice();
		return mergeArrays(newArr1, newArr2, fullArray);
	} else {
		fullArray.push(arr2[0]);
		newArr1 = arr1.slice();
		newArr2 = arr2.slice(1);
		return mergeArrays(newArr1, newArr2, fullArray);
	}

}

// tests

// var my_array = [3,4,6,10,11,15,21];
// var another_array = [];

// console.log(mergeArrays(my_array, another_array));



module.exports = mergeArrays;
