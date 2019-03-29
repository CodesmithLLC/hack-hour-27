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


function mergeRanges(array, output = [array[0]]) {
  if(array.length === 0) return output.sort( (a, b) => a[0]-b[0] );
  for(let i=0; i<output.length; i++) {
    // console.log('arr', array[0])
    // console.log('out', output[i])
    if( (array[0][0] <= output[i][0]) && (array[0][1] >= output[i][1]) ) {
      output[i] = array[0];
      return mergeRanges(array.slice(1), output);    
    }
    if( (array[0][0] <= output[i][0]) && (array[0][1] <= output[i][1]) && (array[0][1] >= output[i][0]) ) {
      output[i][0] = array[0][0];
      return mergeRanges(array.slice(1), output);    
    }
    if( (array[0][0] >= output[i][0]) && (array[0][0] <= output[i][1]) && (array[0][1] >= output[i][1]) ) {
      output[i][1] = array[0][1];
      return mergeRanges(array.slice(1), output);    
    }
  }
  output.push(array[0])
  return mergeRanges(array.slice(1), output); 
}

// tests

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
// times = [[1,2], [0,9]]

console.log(mergeRanges(times)); // -> [[0, 1], [3, 8], [9, 12]]

module.exports = mergeRanges;
