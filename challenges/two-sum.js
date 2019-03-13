/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  //strat: create compliments object by iterating thru array, and at each element, do n - elem. Key is elem, value is compliment.
  // iterate thru compliments, check if arr contains any compliment
  if (!arr.length) return false;
  let compliments = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (compliments.has(arr[i])) return true;
    else compliments.add(n - arr[i]);
  }
  return false;
}

//console.log(twoSum([3, 6, 7, 4, 1, 2, 3, 10, 19, 6, 7, 3], 50)) // true

module.exports = twoSum;
