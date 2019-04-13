/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


function bubbleSort(array) {
  let n = array.length;
  // return sorted array
  let swapped = true;

  // helper function
  function doTheSwap() {
    swapped = false;
    for (let i = 0; i < n; i += 1) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
    n -= 1;
    return array;
  }

  while (swapped === true) {
    doTheSwap();
  }

  return array;
}


module.exports = bubbleSort;
