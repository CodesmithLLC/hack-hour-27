/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

  const sortedArray = array.sort(function (a, b) { return b - a });


  return sortedArray[0] * sortedArray[1] * sortedArray[2];

}


module.exports = highestProduct;
