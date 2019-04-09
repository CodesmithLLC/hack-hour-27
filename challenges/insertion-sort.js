// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


// didn't get
function insertionSort(array) {
  //move something to its final place one at a time
  for (let i = 1; i < array.length; i++) {
    let current = array[i]
    let j = i - 1;

    while (array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current
  }
  return array;
}


console.log(insertionSort([4,3,2,10, 1]))

module.exports = insertionSort;