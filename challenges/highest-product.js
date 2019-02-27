/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array)) return 0;
  if (array.length < 3) return 0;
  
  const sorted = array.slice().sort((a,b)=>a-b);
  const topTwoProd = sorted[sorted.length-1] * sorted[sorted.length-2];
  const secondToTopProd = sorted[sorted.length-2] * sorted[sorted.length-3];
  const botTwoProd = sorted[0] * sorted[1];

  if (sorted[sorted.length-1] < 0) return topTwoProd * sorted[sorted.length-3]
  // if we have a mix of positive and negative, or just positive numbers
  if (botTwoProd > topTwoProd || botTwoProd > secondToTopProd){
    return botTwoProd * sorted[sorted.length-1];
  }
  return topTwoProd * sorted[sorted.length-3];
}



module.exports = highestProduct;
