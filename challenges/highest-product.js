/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (!Array.isArray(array) || array.length < 3) return 0;
    const sorted = array.sort((a, b) => {return b-a});
    let productA = sorted[0] * sorted[1] * sorted[2];
    let productB = sorted[0] * sorted[array.length - 1] * sorted[array.length - 2];
    return Math.max(productA, productB);
}

// greedy solution
function highestProduct(array) {
    if (!Array.isArray(array) || array.length < 3) return 0;
    //set-up track variables to default values
    let highest = Math.max(array[0], array[1]);
    let lowest = Math.min(array[0], array[1]);
    let highestProduct2 = array[0] * array[1];
    let lowestProduct2 = array[0] * array[1];
    let highestProduct3 = array[0] * array[1] * array[2];
  
    for (let i = 2; i < array.length; i += 1) {
      //At each iteration grab the current price
      const currPrice = array[i];
      //Calculate all of the new values at each iteration
      highestProduct3 = Math.max(highestProduct3, highestProduct2 * currPrice, lowestProduct2 * currPrice);
      highestProduct2 = Math.max(highest * currPrice, highestProduct2, currPrice * lowest);
      lowestProduct2 = Math.min(lowest * currPrice, lowestProduct2, currPrice * highest);
      highest = Math.max(currPrice, highest);
      lowest = Math.min(currPrice, lowest);
    }
    //At the end return highestProduct of 3
    return highestProduct3;
  }

// // brute force
// function highestProduct(array) {
//   if (!array || array.length < 3) {
//     return 0;
//   }
//   var max = -Infinity;
//   eachCombination(array, 3, function(comb) {
//     max = Math.max(max, comb[0] * comb[1] * comb[2]);
//   });
//   return max;
// }

// function eachCombination(arr, size, callback) {
//   var end = arr.length - 1;
//   var data = [];
//   combinationUtil(0, 0);
//   function combinationUtil(start, index) {
//     // Current combination is ready to be processed, call the callback
//     if (index === size) {
//       return callback(data);
//     }

//     // replace index with all possible elements. The condition
//     // "end - i + 1 >= size - index" makes sure that including one element
//     // at index will make a combination with remaining elements
//     // at remaining positions
//     for (var i = start; i <= end && end - i + 1 >= size - index; i++) {
//       data[index] = arr[i];
//       combinationUtil(i + 1, index + 1);
//     }
//   }
// }

module.exports = highestProduct;
