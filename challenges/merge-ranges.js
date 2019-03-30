/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array, count = 0) {
  if (!array[count]) {return array};
  if (count === 0) {
    array.sort((a, b) => a[0] > b[0]);
  }
  let current = array[count++];
  let next = array[count];
  if (current[1] >= next[0]) {
    current[1] = Math.max(current[1], next[1]);
    array.splice(count, 1);
  }
  return mergeRanges(array, count);
};

module.exports = mergeRanges;
