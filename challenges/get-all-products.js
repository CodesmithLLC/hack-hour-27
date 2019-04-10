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
  //iterate thru array twice;
  //build output array
  //first iteration: at each element, collect everything to the right of the number
  //second iteration: at each element, collect everything to the left of the number
  // let output = Array(array.length).fill(1);
  // for (let i = 0; i < array.length - 1; i++) {
  //   output[i] = (array.slice(i + 1,).reduce( (acc, val) => acc * val)) 
  // }
  // //console.log('output after right pass:', output)
  // for (let i = array.length - 1; i > 0; i--) {
  //   output[i] *= array.slice(0, i).reduce( (acc, val) => acc * val)
  // }
  // //console.log('output after left pass:', output)

  // return output;

  //TRUE 200 IQ method:
  if (!array.length) return [0]
  let output = [];
  let currentProd = 1;
  for (let i = 0; i < array.length; i++) {
    output[i] = currentProd;
    currentProd *= array[i]
  }
  currentProd = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    output[i] *= currentProd;
    currentProd *= array[i]
  }
  return output;

}

// console.log(getAllProducts([1,7,3,4]));
// console.log(getAllProducts([1,7,0,4]));
// console.log(getAllProducts([]));

module.exports = getAllProducts;
