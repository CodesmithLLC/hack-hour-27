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

  //2 pointers: 1 at beginning, 1 at end, and move both toward each other
  let i = 0;
  while (i <= Math.floor(arr.length / 2)) {
    if (arr[i] === target) return true;
    if (arr[arr.length - 1 - 1] === target) return true;
    i++;
  }
  return false;
}

var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 4)); //  -> true
console.log(findInOrderedSet(nums, 2)); // -> false

module.exports = findInOrderedSet;
