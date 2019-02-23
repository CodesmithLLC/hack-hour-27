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
  const binArr = Array.from(binary);
  let counter = 0;
  let ans = 0;
  while (binArr.length) {
    ans += 2 ** counter * binArr.pop();
    counter += 1;
  }
  return ans;
}

module.exports = binToDec;
