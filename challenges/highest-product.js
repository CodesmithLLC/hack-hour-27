/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  // catch if not array or array length less than 3
  if (!Array.isArray(array)) return 0;
  if (array.length < 3) return 0;

  array.sort((a, b) => b - a );
  let len = array.length;

  // all numbers negative
  if (array[0] < 0) {
    return array[0] * array[1] * array[2];

  // 2 most negative is greater than 2 most positive
  } else if (array[len - 1] * array[len - 2] > array[0] * array[1] || array[len - 1] * array[len - 2] > array[1] * array[2] ) {
    return array[len - 1] * array[len - 2] * array[0];
  
  // otherwise 3 most positives
  } else {
    return array[0] * array[1] * array[2];
  }
}


module.exports = highestProduct;



console.log(highestProduct([-5, -4, 1, 2, 3, 4]));