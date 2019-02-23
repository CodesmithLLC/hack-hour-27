/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary, total = 0) {

	// base case
	if(binary.length === 1){
		if(binary[0] === '0') return total;
		if(binary[0] === '1') return total + Math.pow(2,binary.length - 1);
	} else {

		// recu case
		if(binary[0] === '1') {
			let newTotal = total + Math.pow(2,binary.length - 1);
			return binToDec(binary.slice(1), newTotal); 
		} else {
			return binToDec(binary.slice(1), total); 
		}
	}
}

function decToBin(decimal, total) {

	// starting case
	if(total === undefined) {
		let k = 0;
		while(decimal - Math.pow(2,k) > 0) k++;
		return decToBin( (decimal-Math.pow(2,k-1)), '1' + '0'.repeat(k-1) )

	// base case
	} else if(decimal === 1) {
		let newTotal

		newTotal = total.split('');
		newTotal[(total.length - 1)] = 1;
		newTotal = newTotal.join('');

		return newTotal

	// base case
	} else if(decimal === 0) {
		return total

	// recu case
	} else {
		let k = 0;
		let newTotal
		while(decimal - Math.pow(2,k) > 0) k++;

		newTotal = total.split('');
		newTotal[(total.length - k - 1)] = 1;
		newTotal = newTotal.join(''); 
		return decToBin( (decimal-Math.pow(2,k-1)), newTotal)	
	}

}

//


// tests

// console.log(binToDec('0'))
// console.log(binToDec('11'))
// console.log(binToDec('100')) 
// console.log(binToDec('101'))
// console.log(binToDec('0101'))

// console.log(decToBin(10))

//

module.exports = binToDec;
