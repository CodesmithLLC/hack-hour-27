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
function uniqueNumber(array) {
  let xthis = array[0];
  for (let i = 1; i < array.length; i += 1) {
    xthis ^= array[i];
  }
  return xthis;
}

function uniqueNumberNaive(array) {
  const countObj = {};
  array.forEach(num => {
    if (countObj[num]) {
      countObj[num] += 1;
    } else {
      countObj[num] = 1;
    }
  });
  for (let [k, v] of Object.entries(countObj)) {
    if (v === 1) {
      return k;
    }
  }
}

module.exports = uniqueNumber;
