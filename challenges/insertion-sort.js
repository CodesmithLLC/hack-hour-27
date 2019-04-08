// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for(let i = 1; i < array.length; i += 1) {
    let counter = i;
    for(let j = counter - 1; array[j] > array[counter]; j--) {
      [array[j], array[counter]] = [array[counter], array[j]];
      counter--;
    }
  }
  return array
}

module.exports = insertionSort;