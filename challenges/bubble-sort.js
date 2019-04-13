// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {

  let sorted = false;
  while (!sorted){
    for (let i = 0; i < array.length; i ++){
      sorted = true;
      if (array[i+1] && (array[i+1] < array[i])){
        [array[i], array[i+1]] = [array[i+1], array[i]]
        sorted = false;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
