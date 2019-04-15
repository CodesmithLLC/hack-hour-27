// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swapped = true;
        [array[i], array[i + 1]] = [array[i + 1], array[i]]
      }
    }
  } while (swapped)
}

module.exports = bubbleSort;

const arr = [12,123,3,2,513,6,34,4,65,91]
bubbleSort(arr)
console.log(arr)