// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1
    while (j >= 0 && temp < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

module.exports = insertionSort;

// function insertionSort(array) {
//   // outer loop -> moves forward through array
//   for (let i = 0; i < array.length; i += 1) {
//    let j = i;
//    // inner while loop goes backwards through array from i to 0
//    // runs while we haven't reached the start of the array AND
//    // while the current is smaller than the preceding element (out of sorted order)
//    while (j > 0 && array[j - 1] > array[j]) {
//     // perform the swap
//     const temp = array[j];
//     array[j] = array[j - 1];
//     array[j - 1] = temp;
//     j -= 1;
//    }
//   }
  
//   return array;
//  }