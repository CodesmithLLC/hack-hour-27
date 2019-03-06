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
  if (!Array.isArray(stock_prices_yesterday) || stock_prices_yesterday.length < 2) return 0;
  let small = stock_prices_yesterday[0];
  let big = stock_prices_yesterday[0];
  let current = 0;
  stock_prices_yesterday.forEach(price => {
    if (current === price) return;
    current = price;
    small = Math.min(small, price);
    big = Math.max(big, price);
  })
  let maxProfit = big - small
  return maxProfit;
}

function bestProfit(stock_prices_yesterday) {
  if (!Array.isArray(stock_prices_yesterday) || stock_prices_yesterday.length < 2) return 0;
  let currMin = 0;
  let minIdx = 0;
  let maxIdx = 1;
  for (let i = 1; i < stock_prices_yesterday.length; i++) {
    // new current min.
    if (stock_prices_yesterday[i] < stock_prices_yesterday[currMin]) currMin = i;
    // new best profit
    if (stock_prices_yesterday[maxIdx] - stock_prices_yesterday[minIdx] < stock_prices_yesterday[i] - stock_prices_yesterday[currMin]) {
      maxIdx = i;
      minIdx = currMin;
    }
  }
  let maxProfit = stock_prices_yesterday[maxIdx] - stock_prices_yesterday[minIdx];
  return maxProfit;
}

module.exports = bestProfit;
