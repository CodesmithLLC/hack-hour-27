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
  let counter = {}; // stores count for each element in array
  let total = 0; // keeps track of total sum of each element in array

  array.forEach(element => {

    // count each element and store in counter
    if (counter[element]) { // element already in counter
      counter[element] += 1;
    } else { // element not in counter yet. make 0 then increment
      counter[element] = 0;
      counter[element] += 1;
    }

    // sum to total 
    total += element;

  });

  // calculate the mean. 
  let mean = Math.floor(total / array.length);

  // loop through the counter and get the mode
  let mode;
  let modeCount = 0;

  Object.keys(counter).forEach(key => {
    if (mode === undefined) {
      // first run of loop. Set mode to first element in counter
      mode = key;
      modeCount = counter[key];
    } else {
      // compare current mode count to counter
      if (counter[key] > modeCount) {
        // count is greater than current mode. Set mode to this
        mode = key;
        modeCount = counter[key];
      } else if (counter[key] === modeCount) {
        // the counts are equal. check to see if key is greater than mode. If so then change mode to key
        if (key > mode) mode = key;
      }
    }
  });
  
  
	console.log('TCL: modemean -> mode', mode)
	console.log('TCL: modemean -> mean', mean)
  return (mean == mode);

}

// let arr = [1,2,3,4,5,6,7,8,9,10,2,2,2, 4, 4, 4]

// console.log(modemean(arr));



module.exports = modemean;
