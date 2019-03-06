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
  if (typeof stock_prices_yesterday !== "object" || !Array.isArray(stock_prices_yesterday)) return 0;
  let maxProfit = 0;
  let minimum = stock_prices_yesterday[0];
  for (let i = 0; i < stock_prices_yesterday.length; i++) {
    if (stock_prices_yesterday[i] > minimum) {
      if (stock_prices_yesterday[i] - minimum > maxProfit) maxProfit = stock_prices_yesterday[i] - minimum;
    }
    if (stock_prices_yesterday[i] < minimum) minimum = stock_prices_yesterday[i];
  }
  return maxProfit;
}



// console.log(bestProfit([3, 7, 2, 1, 5, 9, 10])) // should be 9
// console.log(bestProfit([10, 9, 9, 5, 4, 2, 1])) // should be 0

module.exports = bestProfit;
