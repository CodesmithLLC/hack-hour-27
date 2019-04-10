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
  if (!array.length) return [0];
  let numZeroes = 0;
  const out = [];
  const total = array.reduce((acc, curr) => {
    if (curr === 0) {
      numZeroes += 1;
      return acc;
    } else {
      return acc * curr;
    }
  });
  if (numZeroes > 1) return [0];
  if (numZeroes === 1) return [0, total];

  //console.log("TCL: getAllProducts -> total", total)
  array.forEach(num => {
    out.push(num === 0 ? total : total / num);
  })
  return out;
}

console.log(getAllProducts([1, 7, 3, 4]))
module.exports = getAllProducts;
