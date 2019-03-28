/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  let count = {}
  for(let i=0; i<array.length; i++) {
    if(count[array[i]]) return array[i]
    else count[array[i]] = true;
  }
}

function repeatNumbersConstantSpace(array) {
  const recu = (arr) => {
    console.log(arr)
    if (arr[0] === arr[1]) return arr[0];
    if (arr[1] === undefined) return undefined;
    return recu(arr.slice(1))
  }
  return recu(array.sort());
}

// tests

// let arr = [1,2,3,4,5,4]
// console.log(repeatNumbersConstantSpace(arr))

module.exports = repeatNumbers;


