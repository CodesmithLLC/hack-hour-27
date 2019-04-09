/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time //scan once
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  //dumb way
  // let counts = new Set()
  // array.forEach( number => {
  //   if (counts.has(number)) counts.delete(number)
  //   else counts.add(number)
  // })
  // return counts.entries().next().value[0];

  //smart way: probably xor
  let xorchain = array[0];
  // array.forEach( number => {
  //   xorchain ^= number;
  // })
  for (let i = 1; i < array.length; i++) {
    xorchain ^= array[i]
  }
  return xorchain;

}

console.log(uniqueNumber([1,2,1,3,3]))

module.exports = uniqueNumber;
