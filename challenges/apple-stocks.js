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
  const arr = stock_prices_yesterday;
  if (!Array.isArray(arr)) return 0;

  let curLowest = arr[0];
  let curHighest = arr[0];
  let curBestProfit = 0;
  let isHighestNew = false;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < curLowest) {
      curLowest = arr[i];
    }
    if (arr[i] > curHighest) {
      curHighest = arr[i];
      isHighestNew = true;
    }
    if (isHighestNew) {
      curBestProfit = Math.max(curBestProfit, curHighest-curLowest);
      isHighestNew = false;
    }
  }

  return curBestProfit;
}

module.exports = bestProfit;

// const arr = [300, 200, 500, 400, 800, 1000, 900, 700, 100, 1200];
// console.log(bestProfit(arr)); // expect 1100