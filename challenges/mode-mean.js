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
  let hash = {};
  let sum = 0;
  let maxKey = [];
  for (let i = 0; i < array.length; i++) {
    // find mode
    if (hash[array[i]] === undefined) {
      hash[array[i]] = 0;
    }
    hash[array[i]] += 1;
    // find sum
    sum += array[i];
  }
  let keys = Object.keys(hash);
  let highestRecur = hash[keys[0]];
  for (let i = 0; i < keys.length; i++) {
    if (hash[keys[i]] >= highestRecur) {
      highestRecur = hash[keys[i]];
      maxKey.push(keys[i]);
    }
  }
  return Math.floor(sum/array.length) === Math.max(...maxKey);
}

module.exports = modemean;

modemean([0, 1, 1, 2, 2, 1, 0, 0, 0, 1])