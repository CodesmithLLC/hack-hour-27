// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let swapped = false;
  do {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
        bubbleSort(array)
      }
    }
    swapped = false; 
  } while (swapped === true);
  return array;
}

// console.log(bubbleSort([1,1,0,0,3,4,5]))

module.exports = bubbleSort;
