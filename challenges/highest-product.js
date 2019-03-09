/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	// let result;
	// let positives =[];
	// let negatives =[];
	// let sortedArr = array;
	// sortedArr.forEach((number) => {
	// 	if (number >= 0) positives.push(number)
	// 	else negatives.push(number)
	// 	});
	// 	positives = positives.sort((a, b) => (a - b));
	// 	negatives = negatives.sort((a, b) => (a - b));
	// 	console.log(positives)
	// 	// check if there are at least two negatives and that the 
	// 	if ( (negatives.length > 2 && (Math.abs(negatives[1]) > positives[positives.length - 2]) ){
	// 		result = negatives[0] * negatives[1] * positives[positives.length - 1]
	// 		// console.log('the result', result);
	// 	} else {
	// 		result = (positives[positives.length - 1] * positives[positives.length - 2] * positives[positives.length - 3] )
	// 		return result;	
	// 	}
		
if (array.length < 3) return 0;

let sortedArr = array.sort((a,b)=> a - b);
let last = sortedArr.length - 1;

let largestValue = Math.max(sortedArr[0],  sortedArr[last]);
let largestPair = Math.max(sortedArr[last] * sortedArr[last - 1], sortedArr)
let lowestPair = 
let highes











}


module.exports = highestProduct;

console.log(highestProduct([4,5,2,10]))  //200
console.log(highestProduct([-20,5,2,10])) //100
console.log(highestProduct([-20,-10,2,11]))
console.log(highestProduct([-20,5,2,-30]))