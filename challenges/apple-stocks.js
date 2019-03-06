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


function bestProfit(stockArr){
    let curLow = stockArr[0]
    let curProfitA = 0;
    let curHigh = stockArr[0]
    let curProfitB = 0;
    for (let i = 0; i < stockArr.length; i++){
        if (stockArr[i] > curHigh){
            curHigh = stockArr[i]
        }
        if (stockArr[i] < curLow){
            curLow = stockArr[i]
        }
        if (curProfitA < stockArr[i] - curLow){
            curProfitA = stockArr[i] - curLow;
        }
        if (curProfitB < curHigh - stockArr[i]){
            curProfitB = curHigh - stockArr[i];
        }
    }
    if (curProfitA > curProfitB){
        return curProfitA;
    }
    return curProfitB;
}


/*
const teststocks = [564, 12, 87, 95, 624, 11, 25, 89]
console.log(profit(teststocks))
*/

module.exports = bestProfit;
