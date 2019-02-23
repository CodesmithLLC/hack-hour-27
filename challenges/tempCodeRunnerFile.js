function binToDec(binary) {
  let decimal = 0;
  for(let i = binary.length - 1; i >= 0; i -= 1) {
    decimal += (parseInt(binary[i])) * Math.pow(2, binary.length-1-i)
  }
  return decimal
}

console.log(binToDec('0101'))