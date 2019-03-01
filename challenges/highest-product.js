/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if ((!Array.isArray(array) || array.length < 3)) {
    return 0;
  }

  // GREEDY APPROACH
  // what we need at every given moment
  // highest product of three
  // highest product of two
  // lowest product of two
  // highest
  // lowest
  console.log('Array =', array);
  let highestProductOf3 = array[0] * array[1] * array[2];
  let highestProductOf2 = array[0] * array[1];
  let lowestProductOf2 = array[0] * array[1];
  let highest = Math.max(array[0], array[1]);
  let lowest = Math.min(array[0], array[1]);

  // iterate over the array and eval at EACH STEP
  for (let i = 2; i < array.length; i += 1) {
    lowestProductOf2 = Math.min(lowestProductOf2, array[i] * lowest);
    lowest = Math.min(lowest, array[i]);
    highestProductOf2 = Math.max(highestProductOf2, array[i] * highest)
    highestProductOf3 = Math.max(highestProductOf3, highest * highestProductOf2, highest * lowestProductOf2);
    highest = Math.max(highest, array[i]);
  }
  return highestProductOf3;
}
module.exports = highestProduct;
