/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let result = false
  let newArr = []
  newArr = arr.map(number => {
    return n - number
  })

  arr.forEach(number => {
    if (arr.includes(n - number)){
      result = true;
    }
  })
    
  return result 
}

module.exports = twoSum;


array1 = [12, 3, 4, 45]
target = 18;

console.log(twoSum(array1, target));