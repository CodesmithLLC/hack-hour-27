/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 * 	 
 */

function newIntersections(x, y){
  let max = Math.max(...x,...y);
  //find min
  const min = Math.min(...x,...y);
  //if min < 0, mod is math.abs min, else 0
  const mod = min < 0 ? Math.abs(min) : 0;
  //add 1 and mod to our max
  max += mod + 1;
  
  const outer = [];
  //create an array of max subarrays, with max length
  for(let i = 0; i < max; i++) outer.push(new Array(max).fill(`-`));
  //iterate through all subs and put x in appropriate place
  for(let i = 0; i < a.length ; i++){
    outer[b[i] + mod][a[i]] = `x`;
  }
  
  let count = 0;
  //iterate through again, check left right up down
  for(let i = 1; i < outer.length - 1; i++){
    let currRow = outer[i];
    let prevRow = outer[i - 1];
    let nextRow = outer[i + 1];
    for(let j = 1; j < outer[0].length - 1; j++){
      if(currRow[j - 1] === `x` && currRow[j + 1] === `x` &&
      prevRow[j] === `x` && nextRow[j] === `x`) count++;
    }
  }
  
  //return count
  return count;
}

module.exports = newIntersections;
