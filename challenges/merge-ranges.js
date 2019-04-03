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
  // let result = []

  function flatArray(array) {
    let result = []
    array.forEach(el => result = [...result].concat(el))
    return result
  }

  const flatArr = flatArray(array).sort((a,b) => a > b)
  console.log(flatArr)
  // flatArr.reduce((acc, cur) => {
    
  // })
}

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]

mergeRanges(times)
module.exports = mergeRanges;
