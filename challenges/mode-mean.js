/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  const mean = Math.floor(array.reduce((acc, cur) => acc + cur) / array.length)
  const result = {}
  for (let i = 0; i < array.length; i++){
    if (!result[array[i]]) {
      result[array[i]] = 1
    } else {
      result[array[i]]++
    }
  }
  const mode = Number(Object.keys(result)[Object.values(result).indexOf(Math.max(Object.values(result)))])

  
  if (mean === mode) {
    return true
  } else {
    return false
  }
}

console.log(modemean([1,2,3]))
console.log(modemean([6,5,3,6]))
console.log(modemean([1]))
module.exports = modemean;
