// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let twoCount = 0;
  if (num < 2) return 0;
  for (let i = 2; i < num; i++) {
    let digits = i.toString();
    for (let j = 0; j < digits.length; j++) {
      if (digits[j] === '2') twoCount++;
    }
  }
  return twoCount;
}

module.exports = countTwos;

// function countTwos(num) {
//   // create digits array
//   const digits = num.toString().split('');
//   return digits.reduce((count, strDigit, idx, arr) => {
//     const digit = Number(strDigit);
//     const digitLength = arr.length - idx;

//     if (digitLength === 1) {
//       if (digit >= 2) count += 1;
//     } else {
//       // use formula to add to count based on digit and digitLength
//       count += digit * (digitLength - 1) * Math.pow(10, digitLength - 2);
//       if (digit > 2) {
//         count += Math.pow(10, digitLength - 1);
//       } else if (digit === 2) {
//         // for digits === 2, add the total of all previous digits to the count
//         console.log()
//         count += Number(arr.slice(idx + 1).join('')) + 1;
//       }
//     }
//     return count;
//   }, 0);
// }