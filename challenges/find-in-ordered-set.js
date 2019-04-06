/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  // split in half to see if bigger or smaller 
  // recursion into that half and keep searching
  // when arr.length is 1 and no match, return false
  // if find match, return true

  // base case
  // if (arr.length === 1 && arr[0] !== target) return false
  // if (target > arr[Math.floor(arr.length / 2)]) findInOrderedSet(arr.slice(Math.floor(arr.length / 2)), target)
  // if (target < arr[Math.floor(arr.length / 2)]) findInOrderedSet(arr.slice(0, Math.floor(arr.length / 2)), target)
  // if (target === arr[Math.floor(arr.legnth / 2)]) return true
  
  // O(n) time
  if (nums.indexOf(target) !== -1) return true
  return false

}

var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 2));

module.exports = findInOrderedSet;
