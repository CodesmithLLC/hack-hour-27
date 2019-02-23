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
    let slots = binary.length;
    let base2 = new Array(slots).fill(0);
    let decimal = 0;
    for (let i = 0; i < base2.length; i ++) {
        base2[i] = 2 ** (slots-1);
        slots -= 1;
        decimal += binary[i]*base2[i]
    }
    return decimal;
}


console.log(binToDec('101'))
module.exports = binToDec;
