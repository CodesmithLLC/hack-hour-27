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

    if ( !Array.isArray(stock_prices_yesterday)  ) return 0;

    let lowest = {index: 0, value: stock_prices_yesterday[0]}
    let highest = {index: 0, value: stock_prices_yesterday[0]}
    let biggestDiff = 0
    let increasing = false; 
    
    for (let i = 0; i < stock_prices_yesterday.length; i++) {
        
        if (stock_prices_yesterday[i] < lowest.value){
            lowest = {index: i, value: stock_prices_yesterday[i]};
        }

        if (stock_prices_yesterday[i] > highest.value){
            highest = {index: i, value: stock_prices_yesterday[i]};
        }

        if ((highest.value - lowest.value > biggestDiff) && (highest.index > lowest.index)){
            // console.log(highest.value, lowest.value)
            biggestDiff = highest.value - lowest.value;
        }

    }

    return biggestDiff;

}

module.exports = bestProfit;


let stocks = [5, 10, 7, 15, 2, 20]
let stocks2 = [5, 10, 7, 15, 2, 10]

console.log(bestProfit(stocks));
console.log(bestProfit(stocks2));