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
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let multiplier = [...array]
    multiplier.splice(i, 1);
    result.push(multiplier.reduce((a, b) => a * b))
  }
  return result;
}

function getProducts(intArray) {
  if (intArray.length < 2) {
    throw new Error('Getting the product of numbers at other indices requires at least 2 numbers');
  }

  const productsOfAllIntsExceptAtIndex = [];

  // For each integer, we find the product of all the integers
  // before it, storing the total product so far each time
  let productSoFar = 1;
  for (let i = 0; i < intArray.length; i++) {
    productsOfAllIntsExceptAtIndex[i] = productSoFar;
    console.log(productsOfAllIntsExceptAtIndex)
    productSoFar *= intArray[i];
  }

  // For each integer, we find the product of all the integers
  // after it. since each index in products already has the
  // product of all the integers before it, now we're storing
  // the total product of all other integers
  productSoFar = 1;
  for (let j = intArray.length - 1; j >= 0; j--) {
    productsOfAllIntsExceptAtIndex[j] *= productSoFar;
    console.log(productsOfAllIntsExceptAtIndex)
    productSoFar *= intArray[j];
  }

  return productsOfAllIntsExceptAtIndex;
}

module.exports = getAllProducts;
console.log(getAllProducts([1, 7, 3, 4]))
console.log(getProducts([1, 7, 3, 4]))