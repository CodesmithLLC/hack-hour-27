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

// function binToDec(binary) {
//   return parseInt(binary, 2);
// }

function binToDec(binary) {
  let dec = 0;
  
  if (binary[0] === '0') {
    binary = binary.slice(1);
  }

  for (let i = binary.length - 1; i >= 0; i--) {
    dec += binary[i] * Math.pow(2, binary.length - 1 - i);
  }

  return dec;
}


module.exports = binToDec;



console.log(binToDec('11')); // -> 3
console.log(binToDec('100')); // -> 4
console.log(binToDec('101')); // -> 5
console.log(binToDec('0101')); // -> 5