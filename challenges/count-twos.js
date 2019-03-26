// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive).
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let count = 0;
  let mem = [];
  for (let i = 0; i < num; i += 1) {
    let str = i.toString();
    let tmpCount = 0;

    // check the first digit
    if (str[0] == '2') tmpCount  += 1;

    // if str is not 1 digit then get the rest of the count from mem
    if (str.length > 1) {
      tmpCount += mem[parseInt(str.substring(1))];
			// console.log('TCL: countTwos -> str.substring(1)', str.substring(1))
    }
    // store count of str in mem
    mem[str] = tmpCount;
		// console.log('TCL: countTwos -> str', str)

    // add tmpCount to count
    count += tmpCount;

  }
  return count;
}

console.log(countTwos(1))
console.log(countTwos(3))  
console.log(countTwos(13))
console.log(countTwos(1000))
console.log(countTwos(11420))


module.exports = countTwos;
