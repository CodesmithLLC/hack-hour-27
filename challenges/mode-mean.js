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
  // calculate the mode
  // the most frequently occuring number in the array
  // use an object to calculate the mode
  const modeObj = {};
  let mean = null;
  for (let i = 0; i < array.length; i++) {
    mean += array[i];
    if (!modeObj[array[i]]) {
      modeObj[array[i]] = 1;
    } else {
      modeObj[array[i]] += 1;
    }
  }
  // calculate the mean
  // when calc'ing, use math.floor
  mean = Math.floor(mean / array.length);
  let mode = null;
  let curMax = null;
  for (let key in modeObj) {
    if (modeObj[key] >= curMax) {
      curMax = modeObj[key];
      if (key > mode) {
        mode = key;
      }
    }
  }
  // compare
  // return true or false
  return mode == mean;

}

module.exports = modemean;
