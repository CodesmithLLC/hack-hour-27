/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3.  2 + 1
 * 	binToDec('100') -> 4.   2 + 2
 * 	binToDec('101') -> 5 	2 + 2 + 1100
 *  binToDec('0101') -> 5 //1 
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
	// base cases
	// 2^0 = 1, 2^1 = 10, 2^2 = 100, 2^3=1000, 2^4=10000
//divie by 10, until number is one 
let split = let binary.spilt('');
let reversed = split.reverse();
let total = 0
for (let i = 0; i < string.length; i++){
	if (reversed[i] == 1){
		total = total + (2 ** i);
	};
}
return total;
}

// console.log(binToDec(10101));   21
// console.log(binToDec(1011));	//11
// console.log(binToDec(1010));	10
module.exports = binToDec;
