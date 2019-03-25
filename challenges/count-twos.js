// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

function countTwos(num){
  const strNum = num.toString()
  let count = 0;
  for(let i = strNum.length-1; i >= 0; i--){
    const digit = strNum.length - i - 1
    let trailing = strNum.slice(i + 1)
    let leading = strNum.slice(0, i)
    const n = parseInt(strNum[i]);
    if (!trailing) trailing = 0;
    if (!leading) leading = 0;
    count += parseInt(leading) * 10**digit
    if (n > 2){
      count+= 10**digit
    }
    if (n === 2){
      count += parseInt(trailing) + 1
    }
  }
  return count;
}

/*
console.log(countTwos(1), '-> 0')
console.log(countTwos(3), '-> 1')
console.log(countTwos(13), '-> 2')
console.log(countTwos(1000), '-> 300')
console.log(countTwos(11420), '-> 4483')
*/

module.exports = countTwos;
