// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let hasChanged = false;
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i] ) {
      [array[i - 1], array[i]] = [array[i], array[i-1]]
      hasChanged = true;
    }
  }
  if(hasChanged) return bubbleSort(array)
  return array;
}

module.exports = bubbleSort;
console.log(bubbleSort([7,4,5,2]))