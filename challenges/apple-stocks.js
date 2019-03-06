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
  if (!Array.isArray(stock_prices_yesterday)) {
    return 0;
  }
  let mostMoney = 0;
  // best profit comes from buying low and selling high
  // in a simple world, we would find the lowest stock point and sell at the highest point after that
  // if the highest point comes before any lower points, we return 0 (no profit possible)
  let lowPrice = Infinity;
  let highPrice = -Infinity;
  let up;
  // we could iterate through the array ONCE
  for (let i = 1; i <= stock_prices_yesterday.length; i += 1) {
    let curTime = i;
    let prevTime = i - 1;
    if (stock_prices_yesterday[curTime] === stock_prices_yesterday[prevTime]) {
      if (stock_prices_yesterday[prevTime] < lowPrice) {
        lowPrice = stock_prices_yesterday[prevTime];
      }
      if (stock_prices_yesterday[curTime] > highPrice) {
        highPrice = stock_prices_yesterday[curTime];
      }
    } else if (stock_prices_yesterday[curTime] > stock_prices_yesterday[prevTime]) {
      if (up == false) {
        mostMoney = highPrice - lowPrice;
        // change of direction
        // snapshot time mofo
      }
      up = true;
      if (stock_prices_yesterday[prevTime] < lowPrice) {
        lowPrice = stock_prices_yesterday[prevTime];
      }
      if (stock_prices_yesterday[curTime] > highPrice) {
        highPrice = stock_prices_yesterday[curTime];
      }
    } else {
      if (up === true) {
        // change of direction
        // snapshot time mofo
        mostMoney = highPrice - lowPrice;
      }
      up = false;
      if (stock_prices_yesterday[prevTime] > highPrice) {
        highPrice = stock_prices_yesterday[prevTime];
      }
      if (stock_prices_yesterday[curTime] < lowPrice) {
        lowPrice = stock_prices_yesterday[curTime];
      }
    }
    // store i as our time
    // if at any point our price starts to go up, store the time and price just before the uptick
    // when/if our price starts to go down (or we reach the end of the array), store the price
    // calculate the difference in price from the two times and store that as posmostMoney
    // compare it to mostMoney and choose the higher of the two
    // return difference of lowest and highest to represent profit earned
  }

  return mostMoney;
}

module.exports = bestProfit;
