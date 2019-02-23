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
  let output = 0;
  const arr = binary.split('');
  for (let i = 0; i <arr.length; i++){
    let index = (arr.length - 1 - i)
    output += Number(arr[index])*(2**(i));
  }
  return output;
}

function decToBin(decimal){
  let binOut = '';
  let highestDigit = 0;
  let result = Infinity;
  while ( result > 1){
    result = decimal/(2**highestDigit);
    highestDigit++;
  }
  highestDigit-=1;
  let remaining = decimal;
  for (let i=highestDigit-1; i>=0; i--){
    if (remaining > 2**i){
      binOut += 1;
      remaining -= 2**i;
    }else{
      binOut += 0;
    }
  }
  return binOut;
}


/*
console.log(binToDec('0') + '-> 0');
console.log(binToDec('11') + '-> 3');
console.log(binToDec('100') + '-> 4');
console.log(binToDec('101') + '-> 5');
console.log(binToDec('0101') + '-> 5')
*/


module.exports = binToDec;
