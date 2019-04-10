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
  const output = [];
  const initialProd = array.reduce((acc, val)=>{
    return val * acc;
  })
  if (initialProd === 0){
    output.push(0);
    let zeroCount = 0;
    array.forEach((item)=>{
      if (item === 0){
        zeroCount++;
      }
    })
    if (zeroCount === 1){
      const prod = array.reduce((acc,val)=>{
        if (val === 0){
          return acc
        }
        return val * acc
      })
      output.push(prod)
    }
    return output;
  }
  array.forEach((item)=>{
    output.push(initialProd/item)
  })
  return output;
}

module.exports = getAllProducts;
