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
  //Sort array into ascending order
	array.sort((a,b) => a - b)

	//Mean
  let mean = Math.floor(array.reduce( (acc,val) => acc + val) / array.length);
  
  //Mode
  let counts = {};
  let mode;
 	let highestCount = 0;
  //iterate through array, keep track of all occurrences of each element in counts object
  for (let i = 0; i < array.length; i++){
  	//if count for that element is higher than current mode, set new mode
    if (!counts[array[i]]) counts[array[i]] = 0;
    counts[array[i]]++;
    if (counts[array[i]] >= highestCount){
    	mode = array[i];
      highestCount = counts[array[i]];
    }
  }
  return mean === mode;
}

module.exports = modemean;
