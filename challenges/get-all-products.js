/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  if (!array || !array.length) {
    return [0];
  }

  if (array.length === 1) {
    return array;
  }

  const startFromLeft = Array(array.length).fill(undefined);
  startFromLeft[0] = array[0];
  for (let i = 1; i < array.length; i += 1) {
    startFromLeft[i] = array[i] * startFromLeft[i - 1];
  }

  const startFromRight = Array(array.length).fill(undefined);
  startFromRight[array.length - 1] = array[array.length - 1];
  for (let i = array.length - 2; i >= 0; i -= 1) {
    startFromRight[i] = array[i] * startFromRight[i + 1];
  }

  const gotAllProducts = Array(array.length).fill(undefined);
  gotAllProducts[0] = startFromRight[1];
  gotAllProducts[array.length - 1] = startFromLeft[array.length - 2];

  for (let i = 1; i < array.length - 1; i += 1) {
    gotAllProducts[i] = startFromLeft[i - 1] * startFromRight[i + 1];
  }

  return gotAllProducts;
}

function getAllProducts_naive(array) {
  const gotAllProducts = Array(array.length).fill(undefined);

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (j !== i) {
        gotAllProducts[i] = gotAllProducts[i] ? gotAllProducts[i] * array[j] : array[j];
      }
    }
  }

  return gotAllProducts;
}

console.log("got", getAllProducts([1, 7, 3, 4]));
console.log("got", getAllProducts([0, 0, 0, 0]));
console.log("got", getAllProducts([3, 12, 2, 5, 0]));
console.log(getAllProducts([0, 12]));

module.exports = getAllProducts;
