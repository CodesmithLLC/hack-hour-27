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
  if (!array.length) return 0;
  let output = [];
  for (let i = 0; i < array.length; i++) {
    let prod = 1;
    for (let j = 0; j < array.length; j++) {
      if (array[i] != array[j]) prod *= array[j];
    }
    output.push(prod);
  }
  return output;
}

module.exports = getAllProducts;

// // same with a while loop
// function getAllProducts(array) {
//   let skip = 0;
//   let output = [];
//   while (skip != array.length) {
//     let prod = 1;
//     for (let i = 0; i < array.length; i++) {
//       if (i != skip) prod *= array[i];
//     }
//     output.push(prod);
//     skip++;
//   }
//   return output;
// }










// ken
function getAllProduct(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1){
    result.push(arr.reduce((accum, curr, index) => {
      if (index === i) return accum;
        return accum *= curr
    }))
  }
  return result;
}
// 1,a,a,a, 
// b,1,b,b,
// c,c,1,c,
// d,d,d,1

function getAllProductN(arr) {
  const arrTop = [];
  const arrBtm = [];
  let accum = 1;
  for (let i = 0; i < arr.length; i ++){
    arrTop.push(accum);
    accum *= arr[i]
  }
  accum = 1;
  for (let j = arr.length - 1; j >= 0; j --) {
    arrBtm[j] = accum;
    accum *= arr[j]
  }
  return arrTop.map((el, index) => el * arrBtm[index])
}










// HH archive sol'n
// Using Division
function getAllProducts(array) {
  var products = array.reduce(function(acc, curr) {
    return acc * curr;
  }, 1);
  return array.map(function(curr) {
    return products / curr;
  });
}

// Find Products Before and After
function getAllProducts(array) {
  if (!array || !array.length) {
    return [0];
  }

  var front = [];
  var back = [];
  var result = [];

  var productSoFar = 1;
  for (var i = 0; i < array.length; ++i) {
    front[i] = productSoFar;
    productSoFar *= array[i];
  }

  productSoFar = 1;
  for (var j = array.length - 1; j >= 0; --j) {
    back[j] = productSoFar;
    productSoFar *= array[j];
  }

  for (var k = 0; k < array.length; k++) {
    result[k] = front[k] * back[k];
  }

  return result;
}