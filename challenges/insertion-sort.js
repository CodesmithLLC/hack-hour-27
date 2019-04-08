// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[i]) {
        [array[j], array[i]] = [array[i], array[j]]
      }
    }
  }
  return array;
}

module.exports = insertionSort;
