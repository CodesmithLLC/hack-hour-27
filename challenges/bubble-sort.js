// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {

  let sorted = false;
  while (!sorted){
    sorted = true
    for (let i = 0; i < array.length; i ++){
      if (array[i+1] && (array[i+1] < array[i])){
        [array[i], array[i+1]] = [array[i+1], array[i]]
        sorted = false
      }
    }
  }
  return array;
}


module.exports = bubbleSort;
