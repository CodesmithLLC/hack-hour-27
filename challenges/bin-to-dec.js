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
  //The decimal number is equal to the sum of binary digits (dn) times their power of 2 (2n):
  //decimal = d0×20 + d1×21 + d2×22 + ...
    
  //strat: stringify the number and reverse it
  // reverse iterate thru string
  //for each element, multiply it's number value by 2^i, i starts and zero and increases
  // store this result in a sum
  //return sum
    let prepped = binary.split('').reverse().join('')
    //console.log(typeof prepped)
    let result = 0;
    for (let i = 0; i < prepped.length; i++){
      result += Number(prepped[i]) * Math.pow(2, i)
    }
    return result;
  }

console.log(binToDec('0'))
console.log(binToDec('11'))
console.log(binToDec('100'))
console.log(binToDec('101'))
console.log(binToDec('0101'))

module.exports = binToDec;
