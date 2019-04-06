/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


// pick halfway point. is it higher or lower? 
// do it again
function findInOrderedSet(arr, target, guess = Math.floor(arr.length/2), prevGuess = null){
  if (guess === prevGuess) return false;
  if (arr[guess] === target) return true;
  if (arr.length === 0) return false;
  if (target > arr[guess]){
    return findInOrderedSet(arr.slice(guess), target, Math.floor((guess+arr.length)/2), guess);
  } else {
    return findInOrderedSet(arr.slice(0, guess), target, Math.floor(guess/2), guess);
  }
}

/*
var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 4), ' -> true');
console.log(findInOrderedSet(nums, 2), ' -> false');
*/

module.exports = findInOrderedSet;
