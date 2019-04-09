// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    for (i = 0; i < array.length; i++) {
  
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]]
        for (let j = i; j > 0; j--) {
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
const arr = [10, 9, 8, 7, 6, 11, 23, 5, 4, 1, 3]
insertionSort(arr)
console.log(arr)