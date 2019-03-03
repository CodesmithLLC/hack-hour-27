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

function binToDec(binary) {
  let result = 0;
  for (let i = 0; i < binary.length; i++) {
    result += binary[i] * Math.pow(2, binary.length - i - 1);
  }
  return result;
}

function decToBin(num) {
  let result = '';
  // let numClone = num;
  let quotient = num;
  while (Math.floor(quotient / 2) !== 0) {
    result += quotient % 2;
    console.log('result: ', result);
    quotient = Math.floor(quotient / 2);
  }
  // console.log(result + (quotient % 2));
}

module.exports = binToDec;
// console.log(parseInt(binary, 2));

// binToDec('100000');
decToBin(32);