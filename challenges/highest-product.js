/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array)) return 0;
  if (array.length < 3) return 0;

  let sorted = array.sort((a, b) => a - b);
  // console.log(sorted)
  return Math.max(sorted[sorted.length - 1] * sorted[sorted.length - 2] * sorted[sorted.length - 3], sorted[0] * sorted[1] * sorted[sorted.length - 1]);
}

module.exports = highestProduct;

// console.log(highestProduct([-10, 10, -20, -10]))