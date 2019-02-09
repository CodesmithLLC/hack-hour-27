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
  let mean = Math.floor(array.reduce((sum, item) => sum + item) / array.length);

  let mode = array.reduce((result, item) => {
    result[item] ? result[item] += 1 : result[item] = 1;
    if (result[item] >= result.count && item >= result.max) {
      result.max = item;
      result.count = result[item];
    }
    return result;
  }, {max: 0, count: 0}).max;

  // console.log('mean --> ', mean);
  // console.log('mode --> ', mode);
  return mode === mean;
}

// let test = [1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 7, 7, 2, 7, 7, 8, 3, 9];
// console.log('ModeMean Answer --> ', modemean(test));

module.exports = modemean;