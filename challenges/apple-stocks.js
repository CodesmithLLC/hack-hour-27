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
  // let sell = -Infinity;
  let buy = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < stock_prices_yesterday.length; i += 1) {
    const price = stock_prices_yesterday[i];
    if (price < buy) {
      buy = price;
    }
    if (price - buy > maxProfit) {
      maxProfit = price - buy;
    }
  }
  return maxProfit;
}

// console.log(bestProfit([5, 10, 6, 20, 3, 4]));
// console.log(bestProfit([20, 10, 6, 4, 3, 1]));

module.exports = bestProfit;
