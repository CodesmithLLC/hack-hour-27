/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

 function subSetSumRecurse(array, target) {
    let arr = array.slice();

    let diff = target - arr.shift();

    if (arr.length === 0) return false;

    if (arr.includes(diff)) return true;

    return subSetSumRecurse(arr, diff)

 }

function subsetSum(array, target) {
  // sort array from big-> small and remove any numbers greater than target.
  let arr = array.sort((a,b) => b-a);

  while (arr.length > 0) {
    if (subSetSumRecurse(arr, target)) return true;
    arr = arr.slice(1);
  }

  return false;
}

module.exports = subsetSum;

console.log('5', subsetSum([3, 7, 4, 2], 5));
console.log('32', subsetSum([3, 34, 4, 12, 5, 12], 32));
console.log('13', subsetSum([8, 2, 4, 12], 13));
console.log('6', subsetSum([8, -2, 1, -3], 6));
// console.log('', subsetSum());
// console.log('', subsetSum());