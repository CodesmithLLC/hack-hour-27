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

  // stack to track the max profit margin
  let minPrice = stock_prices_yesterday[0]
  let maxPrice = stock_prices_yesterday[0]
  let profitStack = []

  for (let i = 1; i < stock_prices_yesterday.length; i++){
    profitStack.push(maxPrice - minPrice)
    if (stock_prices_yesterday[i] < minPrice) minPrice = stock_prices_yesterday[i]
    if (stock_prices_yesterday[i] > maxPrice) maxPrice = stock_prices_yesterday[i]
  }

  if (Math.max(profitStack) > 0) return Math.max(profitStack)
  else return 0

}

module.exports = bestProfit;
