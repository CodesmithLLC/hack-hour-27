/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  if (arr.length === 1) {
    return target === arr[0];
  }
  const middle = Math.floor(arr.length/2);
  if (target >= arr[middle]) {
    return findInOrderedSet(arr.slice(middle), target);
  } else {
    return findInOrderedSet(arr.slice(0, middle), target);
  }
}


module.exports = findInOrderedSet;


// var nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(findInOrderedSet(nums, 4)); // -> true
// console.log(findInOrderedSet(nums, 2)); // -> false