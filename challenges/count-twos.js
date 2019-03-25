// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  //brute force: iterate from 1 to num, then iterate thru each elem
  let output = 0;
  for (let i = 1; i <= num; i++){
    let elem = JSON.stringify(i);
    for (let j = 0; j < elem.length; j++){
      if (elem[j] === '2') output++;
    }
  }
  return output;

  //strat: O(n) solution: find number of digits of num
  //2 parts: take care of the 2 to 3 for this level, then add the normals
  // add first digit (first is the leftest) - 1
  // also add 10 or 11 depending on if num > 20 and num >= 22

}

// console.log(countTwos(1)); // -> 0
// console.log(countTwos(3)); // -> 1
// console.log(countTwos(13)); // -> 2
// console.log(countTwos(1000)); // -> 300
// console.log(countTwos(11420)); // -> 4483
// console.log(countTwos(20)); // -> 

module.exports = countTwos;
