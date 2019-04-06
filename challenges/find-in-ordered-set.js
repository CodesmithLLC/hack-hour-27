/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

// time complexity should be log n since we halving the searchable space every call.
// search space / 2^n = log(n)
function getFirstHalf(arr) {
  return arr.slice(0, Math.floor(arr.length / 2));
}

function getSecondHalf(arr) {
  return arr.slice(Math.floor(arr.length / 2));
}

function findInOrderedSet(arr, target) {
  const mid = arr[Math.floor(arr.length / 2)];

  if (mid === target) {
    return true;
  }

  if (arr.length <= 1) {
    return false;
  }

  if (target < mid) {
    return findInOrderedSet(getFirstHalf(arr), target);
  } else {
    return findInOrderedSet(getSecondHalf(arr), target);
  }
}

// console.log("test first half", getFirstHalf([1, 3, 6, 7, 9, 17, 45]));
// console.log("test second half", getSecondHalf([1, 3, 6, 7, 9, 17, 45]));
// console.log(findInOrderedSet([1, 3, 6, 7, 9, 17, 45], 6));

module.exports = findInOrderedSet;
