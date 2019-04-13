// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  // we loop
      //comparing 0 and 1, then 1 and 2, etc...
  // if 1 > 0, swap them
  // if 2 > 1, swap them
  // if 3 > 2, swap...

  // represents where we stop searching
  let counter = array.length-1;
  for(let j = counter; j > 0; j--){
      for(let i=0; i<j; i++){
          if( array[i] > array[i+1]){
              [array[i], array[i+1]] = [array[i+1], array[i]];
          }
      }
  }
  return array;
}


module.exports = bubbleSort;
