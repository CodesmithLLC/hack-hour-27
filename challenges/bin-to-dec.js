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
 */

function binToDec(binary) {
    let total = 0;
    for (let i = 0; i < binary.length; i++) {
        total += binary[i] * Math.pow(2, binary.length - 1 - i);
    }
    return total;
}
// function binToDec(binary) {
//     var len = binary.length;
//     var dec = 0;
//     var BASE = 2;
//     for (var i = 0; i < len; i++){
//       dec += binary[i] * Math.pow(BASE,len-1-i);
//     }
//     return dec;
//   }
  //incomplete: doesn't account for plain 0. does account for leading 0

module.exports = binToDec;

/*
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

// divide num by 2, and push that quotient into an empty array.
// reassign num and keep iterating step 1 in a loop until num is 1 and cannot be divided any further 
// after last division, reverse, join, and return the array of 0s and 1s

function decimalToBinary(num) {
    var bin = [];
    while (num > 0) {
        bin[bin.length] = num % 2;
        num >>= 1; // basically /= 2 without remainder if any
    }
    return bin.reverse().join('')
}
  
//   function decToBin(decimal) {
//     let dec = decimal;
//     let bin = '';
//     let binSpaces = Math.floor(Math.log2(dec));
//     while (binSpaces >= 0){
//       let temp = Math.pow(2, binSpaces);
//       if (dec == temp) {
//         bin += '1' + '0'.repeat(binSpaces);
//         return bin;
//       }
//       if (dec > temp) {
//         bin += '1';
//         dec -= temp;
//       } else bin+='0';
//       binSpaces--;
//     }
//     return bin;
//   }
  