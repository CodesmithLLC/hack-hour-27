/*
 * Given an array of numbers, determine if the mode and mean of the 
 * array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
	//sort to array to ensure that largest number is mode
	const sortedArray = array.sort()
	const count = {}
	const mean = 
		Math.floor((sortedArray.reduce( (acc, ele) => acc += ele ) ) / sortedArray.length)
	let mode;

	// count instances of numbers
	sortedArray.forEach( (ele) => {
		count[ele] = (count[ele] || 0) + 1;
	});

	// iterate through the sorted numbers
	// check if a number for the number of times we've counted it
	// if it's the biggest or equal to the biggest count we've seen so far 
	// store both the number and it's count to mode as an array
	// after we iterate, just grab the number (not the count) returned by the iterator
	mode = Number(Object.entries(count).reduce( (acc, ele) => {
		if(ele[1] >= acc[1]) acc = ele;
		return acc;
	}, [-Infinity,-Infinity])[0]);

	return mode === mean;

}

// tests

// modemean([1,2,3,4,5])     //f
// modemean([1,1,1,1,5])     //t
// modemean([1,2,3,3,3,4,5]) //t
// modemean([3,3,4,4,12321]) //f

module.exports = modemean;
