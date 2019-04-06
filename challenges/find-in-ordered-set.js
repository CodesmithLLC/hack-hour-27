/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  // to do this better than O(n) time, we can split the array in half during our search
  // lets recurse

  // base case
  if (arr.length === 1) {
    if (arr[0] === target) {
      return true
    } else {
      return false
    }
  }

  const midway = Math.ceil(arr.length / 2);

  if (target === arr[midway]) {
    return true
  } else if (target > arr[midway]) {
    // we want the later half of the array
    return findInOrderedSet(arr.slice(midway), target)
  } else if (target < arr[midway]) {
    // we want the first half of the array
    return findInOrderedSet(arr.slice(0, midway), target)
  }

}

module.exports = findInOrderedSet;
