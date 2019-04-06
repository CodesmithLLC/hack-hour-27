/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  if (!arr.length) return false;
  if (arr.length === 1) return arr[0] === target;

  let mid = Math.floor(arr.length / 2)

  while (arr[mid]) {
    if (arr[mid] > target) {
      return findInOrderedSet(arr.slice(0, mid), target);
    } else if (arr[mid] < target) {
      return findInOrderedSet(arr.slice(mid+1), target);
    } else {
      return true;
    }
  }

}

// var nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(findInOrderedSet(nums, 4))
// console.log(findInOrderedSet(nums, 2));

module.exports = findInOrderedSet;
