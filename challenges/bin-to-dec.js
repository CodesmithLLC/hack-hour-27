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
  if (binary === "0") {
    return 0;
  } else if (binary === "1") {
    return 1;
  } else {
    let output = 0;
    // determine the length of the input string
    // length of the input string provides value assigned with each position

    let powerScale = binary.length - 1;
    // generate an array that has the values of each position in binary
    function calculateBinArray(n) {
      let result = 1;
      while (n--) {
        result *= 2;
        binArray.push(result);
      }
      return result;
    }
    const binArray = [1];
    calculateBinArray(powerScale);

    // with the binArray, we can compare the string we recieved to the bin array and caluculate the output
    const inputArray = [...binary].reverse();
    for (let i = 0; i < inputArray.length; i += 1) {
      if (inputArray[i] !== '0') {
        output += binArray[i];
      }
    }

    return output;
  }

}

module.exports = binToDec;
