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
  // sort the array
  array.sort((a, b) => a[0] - b[0]);
  return array.reduce((acc, curr) => {
		console.log("TCL: mergeRanges -> acc", acc)

    if (!acc[0]) {
      // acc is empty. Push first one on
      acc.push(curr);
    } else {
      let last = acc.pop();
      if (curr[0] <= last[1]) {
        acc.push([last[0], curr[1]]);
      } else {
        acc.push(last);
        acc.push(curr);
      }
    }
    return acc;
  }, [])
}

// var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
// console.log(mergeRanges(times));
module.exports = mergeRanges;
