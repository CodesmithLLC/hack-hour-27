/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  // turn array into subset of 3 
  // forEach to find the largest
  let combos = [[]]

  for (let i = 0; i < array.length; i++){
    for (let j = 0, len = combos.length; j < len; j++){
      let temp = combos[j].concat(array[i])
      combos.push(temp)
    }
  }
  combos = combos.filter((el) => el.length === 3)
  product = combos.forEach((el) => el.reduce((arr, cur) => {return arr * cur}))
  
  return product
}

console.log(highestProduct([0,1,2,3]))

module.exports = highestProduct;
