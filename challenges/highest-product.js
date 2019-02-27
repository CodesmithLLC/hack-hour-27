/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array)) return 0;
  if (array.length < 3) return 0;

  array.sort((a, b) => b - a );

  let len = array.length;

  // all numbers negative
  if (array[0] < 0) {
    return array[len - 1] * array[len - 2] * array[len - 3];''
  } else if (array[len - 1] * array[len - 2] > array[0] * array[1]) {
    return array[array.length-1] * array[array.length-2] * array[0];
  } else {
    return array[0] * array[1] * array[2];
  }
}


module.exports = highestProduct;



// console.log(highestProduct([-5, -4, 1, 2, 3, 4]));