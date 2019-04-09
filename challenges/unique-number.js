/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
// function uniqueNumber(array) {
//  const map = array.reduce((acc, val)=>{
//   acc[val] = acc[val] + 1 || 1;
//   return acc;
//  }, {})

//  for (let [k, v] of Object.entries(map)) {
//    if (v === 1) return k;
//  }
// }


function uniqueNumber(array) {
  return array.reduce((a,b)=>a^b)
}

module.exports = uniqueNumber;

console.log(uniqueNumber([1,2,1,3,3]))