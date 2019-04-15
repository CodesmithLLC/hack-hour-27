// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let count = 0;
  for (let j=0; j < array.length; j += 1) {
    for (let i = 0; i < array.length-j; i += 1) {
      if (array[i+1] && array[i+1] < array[i]) {
        [array[i+1], array[i]] = [array[i], array[i+1]];
        count += 1;
      }
    }
    if (count === 0) return array;
    count = 0;
  }
  return array;
}

console.log(bubbleSort([3,2,5,4,2,6,7]))

module.exports = bubbleSort;
