/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3 || !Array.isArray(array)) return 0;

  let sorted = array.sort((a, b) => b - a);
  let last = sorted.length - 1;
  let penultimate = sorted.length - 2;

  if ((sorted[penultimate] < 0 && sorted[0] >= 0) 
      && Math.abs(sorted[penultimate]) > sorted[1]) {
    sorted.unshift(Math.abs(sorted[last]));
    sorted.unshift(Math.abs(sorted[last]));
    sorted = sorted.sort((a, b) => b - a);
  }
  console.log(sorted);

  return sorted[0] * sorted[1] * sorted[2];
}

// console.log(highestProduct([-9, -7, 1, 4, -2, -6, 5, 3, 2, 6, -8]));
// console.log(highestProduct([9, 7, -1, -4, -2, -6, -5, -3, -2, -6, -8]));


module.exports = highestProduct;
