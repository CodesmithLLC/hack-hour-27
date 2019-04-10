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

  if (array.length == 0) {
    return [0];
  }

  // input is an array
  const output = [];

  // iterate through the input array
  array.forEach((elm, idx, arr) => {
    // in each iteration, create a shallow copy of the input array
    const shallow = arr.slice();
    shallow[idx] = elm - (elm - 1);
    // reduce that shallow copy
    const finalVal = shallow.reduce((acc, cur) => {
      return acc * cur
    })
    // push that result to output
    output.push(finalVal);
  });

  // output is an array
  return output;
}


module.exports = getAllProducts;
