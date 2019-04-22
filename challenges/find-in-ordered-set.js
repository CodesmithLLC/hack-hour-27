/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

// recursive
function findInOrderedSet(arr, target) {
  const midIndex = Math.floor(arr.length / 2);
  const mid = arr[midIndex] 
  if (target === mid) return true
  if (arr.length === 1) return false;
  if (target > mid) return findInOrderedSet(arr.slice(midIndex), target)
  if (target < mid) return findInOrderedSet(arr.slice(0, midIndex), target)
}


//iterative
function findInOrderedSetIterative(arr, target) {
  let high = arr.length - 1
  let low = 0
  let mid = Math.floor(arr.length/2)

  while (target >= arr[low] && target <= arr[high]) {
    if (target > arr[mid]) {
      low = mid + 1;
      mid = Math.floor((low + high)/2)
    }
    if (target < arr[mid]) {
      high = mid - 1;
      mid = Math.floor((low + high)/2)
    } 
    if (target === arr[mid]) return true;
  }
  return false
}

module.exports = findInOrderedSet;

const nums = [1, 4, 6, 7, 9, 17, 45,1234]
console.log(findInOrderedSetIterative(nums, 4));
console.log(findInOrderedSetIterative(nums, 2));  

