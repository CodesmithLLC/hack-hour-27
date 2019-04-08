// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i ++) {
    for (let j = i; array[j] < array[j-1]; j--) {
     [array[j-1], array[j]] = [array[j], array[j-1]];
    }
  }
  return array;
}

module.exports = insertionSort;

// const arr = [4,7,1,10,40,35,20];
// console.log(insertionSort(arr));