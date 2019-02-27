/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  // why should we return a 0 instead of throwing an error?
  if (!Array.isArray(array) return 0;
  // This also makes no sense, but the test insists I do it.
  if (array.length < 3) return 0;
  
  const sorted = array.slice().sort((a,b)=>a-b);
  const topTwoProd = sorted[sorted.length-1] * sorted[sorted.length-2];
  const botTwoProd = sorted[0] * sorted[1];
  if (botTwoProd > topTwoProd){
    return botTwoProd * sorted[sorted.length-1];
  }
  return topTwoProd * sorted[sorted.length-3];
}


module.exports = highestProduct;
