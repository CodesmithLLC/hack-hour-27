// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  let ptr1 = 0;
  let ptr2 = 1;
  for (let i = 0; i < array.length; i += 1) {
    let num1 = array[ptr1];
    let num2 = array[ptr2];
    let iTracker = 0;
    if (num2 < num1) {
      // 2 less than 1. need to move 2.

      // 1. move num1 into num2 position
      array[ptr2] = num1;

      // set iTracker to
      while()
    }
  }
}

module.exports = insertionSort;