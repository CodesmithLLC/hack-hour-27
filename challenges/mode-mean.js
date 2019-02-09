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
  // storages
  let sum = 0;
  let store = {};
  let mode;

  // go through values in array
  array.forEach((value)=>{
    // tally sum
    sum += value;

    // keep track of how many of each number we see
    if (store[value] === undefined) {
      store[value] = 1;
    } else {
      store[value]++;
    }

    // check if mode should be updated
    if (mode === undefined) {
      mode = value;
    } else if (store[value] === store[mode]) {
      if (value > mode) {
        mode = value;
      }
    } else if (store[value] > store[mode]) {
      mode = value;
    }

  });

  return Math.floor(sum/array.length) === mode;
}

// const arr1 = [1, 2, 2, 5, 7, 9]; // mode: 2, mean: 4.33
// const arr2 = [1, 3, 4, 4, 8]; // mode: 4, mean: 4
// const arr3 = [3, 5, 7, 7, 9, 12]; // mode: 7, mean: 7.17
// const arr4 = [2, 3, 3, 6, 6, 20]; // mode: 6, mean: 6.67

// console.log(modemean(arr1)); // false
// console.log(modemean(arr2)); // true
// console.log(modemean(arr3)); // true
// console.log(modemean(arr4)); // true

module.exports = modemean;
