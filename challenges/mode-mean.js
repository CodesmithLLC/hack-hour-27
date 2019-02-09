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
//input is an array of numbers
//strategy: 
//calculate mode: will return an array of the numbers repeated most often
  //use sort method on array
  let sorted = array.sort(); 
  //set max = sorted[0] and loop through array to update max
  let max = sorted[0]; 
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] > max) {
      max = sorted[i]; 
    }
  }
  //calculate mean: will return the average of all the numbers in the array
  let avgTotal = 0; 
  for (let el of array) {
    avgTotal += el;
  }
  avgTotal = Math.floor(avgTotal / array.length);

  //compare whether mode and mean are equal and return a boolean
  return (max === avgTotal)
}

console.log(modemean([1,2,3,4])); //expect return false
console.log(modemean([2,2,2,2])); //expect return true
console.log(modemean([10,2,30,4])); //expect return false

module.exports = modemean;
