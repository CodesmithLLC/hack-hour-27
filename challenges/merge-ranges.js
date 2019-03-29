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


function mergeRanges(array) {
  // sort array by begin time
  const sortedArr = array.sort((a,b) => a[0] - b[0]);

  // empty result container
  let result = []

  // iterate through sorted array
  for (let value of sortedArr) {
    // result is empty (first iteration)
    if (!result[0]) {
      result.push(value);
    
    // subsequent iteration
    } else {
      // if begin range of current is within latest range
      // and end range of current is after latest range
      // update latest result to end at latest range
      if (value[0] <= result[result.length-1][1] && value[1] > result[result.length-1][1]) {
        result[result.length-1][1] = value[1];

      // if begin range of current is after latest range
      // add current as latest range
      } else if (value[0] > result[result.length-1][1]) {
        result.push(value);
      }
    }
  }
  return result;
}

module.exports = mergeRanges;


// var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]

// console.log(mergeRanges(times)); // -> [[0, 1], [3, 8], [9, 12]]