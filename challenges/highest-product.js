/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length >= 3 && Array.isArray(array)){
    let sorted = array.sort((a, b) => a - b);
    return Math.max(sorted[sorted.length - 1] * sorted[sorted.length - 2] * sorted[sorted.length - 3], sorted[0] * sorted[1] * sorted[sorted.length - 1]);
  }
  return 0;
}

module.exports = highestProduct;

console.log(highestProduct([-10, 10]));