// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    if(!array.length) return [];

    for(let i = 1; i < array.length; i++){
        for(let j = i; j > 0; j--){
            if(array[j-1] > array[j]){
                let temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
            }
            else{ break; }
        }
    }
    return array;
}

// console.log(insertionSort([40,13,20,4]));

module.exports = insertionSort;