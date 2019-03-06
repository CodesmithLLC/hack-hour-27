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

function bestProfit(stock_prices_yesterday) {
  if (!Array.isArray(stock_prices_yesterday)) return 0;
  const prices = stock_prices_yesterday;
  let low = Infinity
  let high = -Infinity
  let profit = 0;

  for (let i = 0; i < prices.length; i += 1) {
    if (low > prices[i]) {
      // found a new low. Need to reset both low and high prices
      low = prices[i];
      high = prices[i];
    }
    if (high < prices[i]) high = prices[i];
    profit = Math.max(profit, high - low);
  }
  return profit;
}
//let arr = [9,2,3,4,5,40,1,9,10,20];
// console.log(arr, bestProfit(arr));

module.exports = bestProfit;