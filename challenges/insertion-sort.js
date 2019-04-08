// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  // let's iterate through the array
  for (i = 0; i < array.length; i++) {

    // now let's look at the current element
    // and compare to the next element
    // if the cur is bigger than the next, we need to swap them
    if (array[i] > array[i + 1]) {
      console.log('array i is greater than a')
      [array[i], array[i + 1]] = [array[i + 1], array[i]]
      // now we want to move BACKWARDS through the array
      for (let j = i; j > 0; j--) {
        // if the cur is bigger than the next, we need to swap them
        if (array[j] < array[j - 1]) {
          [array[j], array[j - 1]] = [array[j - 1], array[j]]
        } else {
          break;
        }
      }
    }
  }
  return array;
}


module.exports = insertionSort;