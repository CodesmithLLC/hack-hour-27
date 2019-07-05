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
  array.sort((a,b)=>a[0]-b[0]);
  return array.reduce((acc, val)=>{
    //pointer to the current range we're modifying
    const firstRange = acc[acc.length-1]; 
    //if val extends the range, merge them
    if(firstRange[1] >= val[0] && firstRange[1] < val[1]){
      firstRange[1] = val[1];
    }
    //if val falls entirely outside the range, push it
    //val becomes the start of a new range
    if(firstRange[1] < val[0]){
      acc.push(val);
    }
    //if val falls within the range, it's already covered
    return acc;
  },[array[0]])
}

/* test
const times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
console.log(mergeRanges(times));
console.log([[0, 1], [3, 8], [9, 12]]);
*/
module.exports = mergeRanges;
