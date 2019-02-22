/* You are given an array of integers and a target number. 
   Write a function that returns true if
 * there is a subset of the array that sums up to the target
   and returns false otherwise. A subset
 * can be any size and the elements do not have to 
   appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function findComplements(array, target, cache = []){

	if (array.length === 2 && (array[0] + array[1] === target) )  return array.concat(cache);
	if (array.length === 2) return [];

	// calculate pairs
	let newMap = array.map( (ele) => {
		return [ele, target-ele];
	});

	// search for pairs
	for(let i=0; i<array.length; i++){
		if (array.includes(newMap[i][1])) return newMap[i];
	};

	return findComplements(array.slice(1), target-array[0], cache.concat(array[0]))

}

function subsetSum(array, target) {

	return findComplements(array, target, []);

}

// tests

console.log(subsetSum([3, 7, 4, 2], 5));
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32));

module.exports = subsetSum;
