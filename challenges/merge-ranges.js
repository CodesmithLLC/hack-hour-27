/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *Cases:
 1. first element is not in range of prev array -> new array
 2. first element is in range of prev array -> second element of curr array becomes  second element of prev array
 3. second element is in range of prev array -> first element of curr array becomes math.Min, second element is Math.max
 * Do not assume the ranges are in order
 */

function mergeRanges(array) {
  let sorted = array.sort((a,b) => a[0] > b[0]);
  let result = [sorted[0]]
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i][0] > result[result.length-1][1]) {
      result.push(sorted[i]);
    } else if (sorted[i][0] >= result[result.length-1][0] && sorted[i][0] <= result[result.length-1][1]) {
      result[result.length-1][1] = Math.max(sorted[i][1], result[result.length-1][1]);
    }
  }
  return result;
}

module.exports = mergeRanges;
var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10], [19, 20]]
console.time();
console.log(mergeRanges(times))
console.timeEnd();
// console.log(times.sort((a,b) => a[0] > b[0]))