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
  // first pass:
  // iterate through the array
  // save the seen numbers to a ledger
  // review the ledger and return the value that only occurred once

  const ledger = new Set();
  array.forEach(val => {
    // if the ledger lacks the current value, add the current value!
    if (!ledger.has(val)) {
      ledger.add(val)
    } else {
      // if the ledger has the value, we will delete it from the ledger
      ledger.delete(val)
    }
  })
  // at the end, we should have only one value left!
  return ledger.values().next().value;
}
module.exports = uniqueNumber;
