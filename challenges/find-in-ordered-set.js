/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  // O(n)
  //return arr.includes(target)

  //200 IQ: use BST
  if (!arr.length) return false;
  if (arr.length === 1 && arr[0] !== target) return false;

  let middle = Math.floor(arr.length / 2);
  if (arr[middle] === target) return true;
  if (target > arr[middle]) return findInOrderedSet(arr.slice(middle), target);
  if (target < arr[middle]) return findInOrderedSet(arr.slice(0, middle), target);
}

var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 4)); //  -> true
console.log(findInOrderedSet(nums, 2)); // -> false

module.exports = findInOrderedSet;
