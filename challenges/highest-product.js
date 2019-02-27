/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const sorted = array.slice().sort((a,b)=>a-b);
  const topTwoProd = sorted[sorted.length-1] * sorted[sorted.length-2];
  const botTwoProd = sorted[0] * sorted[1];
  if (botTwoProd > topTwoProd){
    return botTwoProd * sorted[sorted.length-1];
  }
  return topTwoProd * sorted[sorted.length-3];
}


module.exports = highestProduct;
