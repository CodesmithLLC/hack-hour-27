/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

// O(log(n)) solution

function findInOrderedSet(arr, target) {
  if(arr.length === 1) return arr[0] === target ? true : false;
  if(arr[Math.floor(arr.length/2)] === target) return true
  if(arr[Math.floor(arr.length/2)] > target) {
    return findInOrderedSet(arr.slice(0, arr.length/2), target)
  }
  if(arr[Math.floor(arr.length/2)] < target) {
    return findInOrderedSet(arr.slice(arr.length/2, arr.length), target)    
  }

}

// tests

// var nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(findInOrderedSet(nums, 9) );  //-> true
// console.log(findInOrderedSet(nums, 2) );  //-> false


module.exports = findInOrderedSet;
