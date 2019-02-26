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



// console.log(binToDec('11')); // -> 3
// console.log(binToDec('100')); // -> 4
// console.log(binToDec('101')); // -> 5
// console.log(binToDec('0101')); // -> 5


function decToBin (dec, pow) {
  if (pow === 0) {
    if (dec === 1) return '1';
    else return '0';
  }

  if (pow === undefined) {
    let count = 0;
    while (dec - Math.pow(2, count) >= 0) {
      count++;
    }
    pow = count - 1;
  }

  let digit = '';
  let remainder;

  if (dec - Math.pow(2, pow) >= 0) {
    digit = '1';
    remainder = dec - Math.pow(2, pow);
  }
  else {
    digit = '0';
    remainder = dec;
  }

  return digit + decToBin (remainder, pow - 1 );
}

// console.log(decToBin(3)); // -> 11
// console.log(decToBin(10)); // -> 1010