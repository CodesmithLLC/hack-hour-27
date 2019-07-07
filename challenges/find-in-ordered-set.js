/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


// O(log n) time
function findInOrderedSet(arr, target) {
  // cases for an array of length 1
  if (arr.length === 1 && arr[0] !== target) return false;
  if (arr.length === 1 && arr[0] === target) return true;

  // set up variables for slicing from the middle
  const middle = Math.floor((arr.length - 1) / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  // base case for finding the target
  if (target === arr[middle]) return true;
  if (target < arr[middle]) {
    return findInOrderedSet(left, target);
  }
  if (target > arr[middle]) {
    return findInOrderedSet(right, target);
  }
  return false;
}



// O(log n) time, with helper function
function findInOrderedSet(arr, target) {
  // create helper function
  // start and end are indices
  function binSearch(start, end) {
    // set up variables for finding the middle number's index
    const mid = Math.floor((start + end) / 2);
    // base case where the number at the middle index is the target
    if (arr[mid] === target) return true;
    // base case where the remaining number is not the target
    if (end === start) return false;
    // otherwise search the higher or lower half recursively
    if (arr[mid] > target) return binSearch(start, mid - 1);
    return binSearch(mid + 1, end);
  }
  return binSearch(0, arr.length - 1);
}


module.exports = findInOrderedSet;
