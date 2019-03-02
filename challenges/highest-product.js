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

module.exports = highestProduct;
