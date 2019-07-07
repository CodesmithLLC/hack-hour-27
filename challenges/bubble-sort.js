// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < (array.length - i - 1); j++) {
        if (array[j] > array[j + 1]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
    }
}
return array;
}

module.exports = bubbleSort;



// jae
// time-complexity: O(n^2)
// space-complexity: O(1)
function bubbleSort(array) {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < array.length - 1; i += 1) {
        if (array[i] > array[i + 1]) {
          const temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    return array;
  }