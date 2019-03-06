/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */
let arr = [1,6,10,1,4039,223,4230];
function bestProfit(stock_prices_yesterday, maxArr = [], ind = 0) {
  if(!stock_prices_yesterday[ind]){return Math.max.apply(null,maxArr)}
  let maxes = [];
  let indexes = [];
  for(let i = ind; i < stock_prices_yesterday.length; i += 1){
    if(stock_prices_yesterday[i+1] > stock_prices_yesterday[i]){
      maxes.push(stock_prices_yesterday[i]);
    } else{
      indexes.push(i+1);
      maxes.push(stock_prices_yesterday[i]);
      break;
    }
  };
  ind = indexes[indexes.length-1];
  let maxSegment = Math.max.apply(null, maxes);
  maxArr.push(maxSegment);
  return bestProfit(stock_prices_yesterday, maxArr, ind);
}
console.log(bestProfit(arr))

module.exports = bestProfit;
