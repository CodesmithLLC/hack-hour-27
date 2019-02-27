/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  array = array.sort(function(a,b){return b-a});
  let negatives = [];
  for(let i = 0; i < array.length; i += 1){
    if(array[i] < 0) {
      negatives.push(array[i]);
    }
  }
    if(negatives.length < 2) {
      return array[0]*array[1]*array[2];
  }
  console.log(negatives);
  let maxPos = array[0]*array[1]*array[2];
  let maxNeg = array[0]*array[array.length-2]*array[array.length-1];
  return maxPos > maxNeg ? maxPos : maxNeg;
}

module.exports = highestProduct;
