// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length - 1; i ++) {
      if (array[i] > array[i+1]) {
        [array[i], array[i+1]] = [array[i+1], array[i]];
        swapped = true;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;

// console.log(bubbleSort([4,7,1,10,29,3,5]));