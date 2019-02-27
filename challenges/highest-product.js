/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  array.sort((a, b) => a - b);
  console.log(array);

  return array.slice(-3).reduce( (acc, val) => acc * val);
}

console.log(highestProduct([-4, 1, 4, 2,7, 8, 1, 92, 73, 1, 11]))

module.exports = highestProduct;
