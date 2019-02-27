/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  array.sort((a,b) => a - b);
  //console.log('all negatives?', array.every(x => x < 0))
  //case for all negatives array: grab 3 smallest values
  if (array.every(x => x < 0)){
    return array.slice(-3).reduce( (acc, val) => acc * val);
  }

  //case for non-negative array
  if (!Array.isArray(array) || array.length < 3) return 0; 
  let candidates = [];
  candidates.push(Math.abs(array[0]));
  candidates.push(Math.abs(array[1]));
  candidates.push(...array.slice(-3))
  candidates.sort((a,b) => a - b);
  //console.log(candidates)
  return candidates.slice(-3).reduce((acc, val) => acc * val)
  //strat: find 3 biggest nums, even amongst negatives
    //grab absolute values of the  2 largest negative numbers
      //push the largest TWO numbers from this array into a storage
      //push 3 largest positive numbers into storage
      //calculate product from this storage  
}

//console.log(highestProduct([-9000, -200, -8000, -5000, -32, -1, -5, -6, -8, -10, -11, -5, -4000]))
// console.log(highestProduct([-4, 1, 4, 2,7, 8, 1, 92, 73, 1, 11]))

module.exports = highestProduct;
