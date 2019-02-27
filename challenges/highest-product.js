/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

	// store products
	let products = [];

	// edge cases
	if(!Array.isArray(array)) return 0;
	if(array.length < 3) return 0;

	// base case
	if(array.length === 3) return absArray[0] * absArray[1] * absArray[2];

	// helper function
	// tells us if a number in the absArray
	// has a negative counterpart in array
	// but no positive counterpart
	const negExists = (target) => {
		if (array.includes(target * -1) && !array.includes(target) ) return 1
		else return 0
	}

	// get largest absolute numbers 
	// then order from greatest to smallest
	absArray = array.map ( (ele) => Math.abs(ele) );
	absArray = absArray.sort( (a,b) => b - a );

	// determine the positivity of numbers 
	posStatus = [negExists(absArray[0]), negExists(absArray[1]), negExists(absArray[2])]

	// console.log(posStatus.join(''))
	// console.log(absArray)

	// in cases where we have 2 negative numbers or 3 positive numbers
	// we will return a positive product
	switch(posStatus.join('')){
		case '110':
		case '101': 
		case '011': 
		case '000': {
			return absArray[0] * absArray[1] * absArray[2];
			break;
		}

		// in other cases, we return a negative product
		// in which case we cull each number 
		//

		default: {
			let temp = [...array];
			for(let i=2; i>=0; i--){
				if(negExists(absArray[2])) {
					temp.splice(array.indexOf(absArray[2] * -1),1);
				} else {
					temp.splice(array.indexOf(absArray[2]),1);
				}
				products.push(highestProduct(temp));
				console.log(products)
			}
			break;
		}
		
	}

	return products.sort()[products.length-1];

}



// tests

// console.log(highestProduct([1,2,-3,4,-5,-6,-7]))

console.log(highestProduct([-2,-1,-5,-3,4]))


module.exports = highestProduct;
