// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  for(let i=0; i<array.length-1; i++){
    for(let j=0; j<array.length-i; j++) {
      if(array[j] > array[j+1]) {
        [array[j+1], array[j]] = [array[j], array[j+1]];
      }
    }
  }
}

// tests

// const a = [1,5,3,3,8,9,2,4]
// bubbleSort(a)
// console.log(a)


module.exports = bubbleSort;
