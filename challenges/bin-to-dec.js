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
    const input = binary.split('');
    let sum = 0;
    let exp = 0;
    while(input.length){
        if(input.pop() === '1')
            sum += Math.pow(2, exp);
        exp++;
    }
    return sum;
    // return parseInt('0101', 2);
}

function decToBin(decimal){
    // return decimal.toString(2);
}

module.exports = binToDec;

// console.log(binToDec('0'));   //-> 0)
// console.log(binToDec('11'));  //-> 3
// console.log(binToDec('100')); //-> 4
// console.log(binToDec('101')); // -> 5
// console.log(binToDec('0101')); // -> 5
// console.log(parseInt('0101', 2)); // -> 5