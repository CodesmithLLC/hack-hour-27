/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  //strat: get all combos
  let combos = getAllCombos(array);
  combos = combos.slice(1) //remove first elemenet (empty array)
  let comboSums = [];
  
  // for each combo, check if the sum is equal to target
  combos.forEach( combo => {
  let sum = combo.reduce( (acc, val) => acc + val)
  comboSums.push(sum);
  })
  
  // if yes, return true; else return false
  return comboSums.includes(target);
}

function getAllCombos(array) {
  if (array.length === 0) return array;
  let output = [];
  helperGAC(array, output, [], 0)
  return output;
}

function helperGAC(array, output, temp, start){
  output.push([...temp]);
  for (let i = start; i < array.length; i++) {
    temp.push(array[i]);
    helperGAC(array, output, temp, i + 1);
    temp.pop();
  }
}

module.exports = subsetSum;
