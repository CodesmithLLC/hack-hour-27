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
  //strat: sort array into ascending
  // push first range onto a stack
  // iterate thru rest of array
    //if starting time of array[i] is not within stack top's range, push array[i] onto stack
    //if starting time of array[i] IS within stack top's range, update stack top's end time with array[i]'s end time
  
  //sort array
  array.sort((a, b) => a[0] - b[0])
  let stack = [];
  //push first range onto a stack
  stack.push(array.shift());
  //iterate thru rest of array
  for (let i = 0; i < array.length; i++){
    //if starting time of array[i] is not within stack top's range, push array[i] onto stack
    if (array[i][0] <= stack[stack.length - 1][1]) stack[stack.length - 1][1] = array[i][1];
    else stack.push(array[i])
  }

  return stack;
}

console.log(mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]));

module.exports = mergeRanges;
