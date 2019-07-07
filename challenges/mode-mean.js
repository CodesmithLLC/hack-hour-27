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

function modemean(arr) {
  const counts = {};
  let mode = null; // bc there's no number that's currently node
  let modeCount = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // update the count obj:
    if (counts[arr[i]]) {
      counts[arr[i]] += 1;
    } else {
      counts[arr[i]] = 1;
    }
    // update the sum of all elements in arr:
    sum += arr[i];
    // update mode:
    if (counts[arr[i]] > modeCount) {
      mode = arr[i];
      modeCount = counts[arr[i]];
    }
  }
  const mean = Math.floor(sum / arr.length)
  return mode === mean;
};

module.exports = modemean;



















// create helper functions
function modemean(array) {
  return mean(array) === mode(array);
}

function mean(array) {
  var sum = array.reduce(function (sum, el) {
    return sum + el;
  });
  return Math.floor(sum / array.length);
}

function mode(array) {
  let count = {};
  array.forEach(function(num) {
    if (num in count) {
      return count[num]++;
    }
    count[num] = 1;
  });
  let max = -Infinity;
  let modeCandidates;
  for (let num in count) {
    if (count[num] > max) {
      modeCandidates = [num];
      max = count[num];
    } else if (count[num] === max) {
      modeCandidates.push(num);
    }
  }
  return Math.max.apply(this, modeCandidates);
}