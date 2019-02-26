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
  //decimal = d0×2^0 + d1×2^1 + d2×2^2 + ...
    
  //strat: stringify the number and reverse it
  // reverse iterate thru string
  //for each element, multiply it's number value by 2^i, i starts and zero and increases
  // store this result in a sum
  //return sum
    let prepped = binary.split('').reverse().join('')
    let result = 0;
    for (let i = 0; i < prepped.length; i++){
      result += Number(prepped[i]) * Math.pow(2, i)
    }
    return result;
  }

function decToBin(decimal) {
  //strat: find highest 2^i that is less than decimal
  let highestPower = 0;
  while (Math.pow(2, highestPower) <= decimal){
    highestPower += 1;
  }
  //console.log('highestPower', highestPower);
  let result = '';
  //result will be i digits long
  //check all 2^i-1
  //if 2 ^ i-1 < decimal, concat a '1' and do decimal - 2^(i-1)
  for (i = highestPower - 1; i >= 0; i--){
    if ( Math.pow(2, i) <= decimal ){
      result += '1';
      decimal -= Math.pow(2, i);
    } else {
      result += '0';
    }
  }
  return result;
}
  
  console.log('bin 0', decToBin(0)) // 0
  console.log('bin 3', decToBin(3)) // 11
  console.log('bin 4', decToBin(4)) // 100
  console.log('bin 5', decToBin(5)) // 101
  console.log('bin 57', decToBin(57)) //111001

module.exports = binToDec;
