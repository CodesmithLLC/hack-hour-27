/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array) || array.length < 3) return 0;
  array.sort((a,b) => a - b);

  //case for all negatives array: grab 3 smallest values
  if (array.every(x => x < 0)){
    return array.slice(-3).reduce( (acc, val) => acc * val);
  }

  //case for non-negative array
  //remove all zeroes from array
  let candidates = [];
  let negativeAbs = [];
  array.forEach( num => {
    if (num < 0) negativeAbs.push(Math.abs(num))
  })
  if (negativeAbs.length >= 2) candidates.push(...negativeAbs);
  candidates.push(...array.slice(-3))
  candidates.sort((a,b) => a - b);
  console.log('candidates', candidates)
  return candidates.slice(-3).reduce((acc, val) => acc * val)
  //strat: find 3 biggest nums, even amongst negatives
    //grab absolute values of the  2 largest negative numbers
      //push the largest TWO numbers from this array into a storage
      //push 3 largest positive numbers into storage
      //calculate product from this storage  
}

//console.log(highestProduct([-9000, -200, -8000, -5000, -32, -1, -5, -6, -8, -10, -11, -5, -4000])) //all negs
//console.log(highestProduct([-9000, -200, -8000, -5000, -32, -1, -5, 9000, -6, -8, -10, -11, -5, -4000])) //big negs
//console.log(highestProduct([-4000, 1, 4, 2,7, 8, 1, 92, 73, 1, 11])) //normal
//console.log(highestProduct([-4000, 0, 1])) //normal

module.exports = highestProduct;
