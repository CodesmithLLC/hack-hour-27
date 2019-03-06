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

function bestProfit(stock_prices_yesterday, pastNumbers = new Set(), largestProfit = 0) {

	// console.log(stock_prices_yesterday)
	// console.log(pastNumbers)

	let newArray;

	// edge case
	// we were passed an empty array
	if (stock_prices_yesterday.length === 0) return largestProfit;

	// base case
	// the array has only 1 member
	if (stock_prices_yesterday.length === 1) return largestProfit;

	// recu case
	// we have 2 or more members in the array

	pastNumbers.add(stock_prices_yesterday[0]);
	newArray = stock_prices_yesterday.slice(1);
	
	// subtract the first member of the newArray against the entire set
	// if any are larger than the largestProfit, make it the new largestProfit

	// console.log('target: ',newArray[0])

	pastNumbers.forEach( (ele) => {
		let difference = newArray[0] - ele;

		// console.log(difference)

		if (difference > largestProfit) largestProfit = difference;
	});

	return bestProfit(newArray, pastNumbers, largestProfit);

}

// tests

// const arrTest = [100, 0];
// const arrTest = [0, 100];
// const arrTest = [0];
// const arrTest = [];
// const arrTest = [20, 100, 10];
// const arrTest = [30, 100, 30];
// const arrTest = [10, 10, 0, 20, 10, 30, 10, 100, 0];
// console.log(bestProfit(arrTest))



module.exports = bestProfit;
