// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  let position
  let insertValue

  for (let i = 0; i < array.length; i++) {
    position = i
    insertValue = array[i]

    while (position > 0 && array[position - 1] > insertValue){
      array[position] = array[position - 1]
      position = position - 1 
    }

    array[position] = insertValue
  }
  return array
}

// console.log(insertionSort([5,17,1,46]))

module.exports = insertionSort;