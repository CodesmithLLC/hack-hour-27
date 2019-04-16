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
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    //strat: count repeated numbers in arrays
    //every time there is a repeated number, calculate the difference between the other the two points at those indices inside the other array (highest and lowest value)
    //candidate lines are the lines between repeated values in an array
    for (let i = 0; i < x.length; i++) {
      let min = Math.min(x[i], Infinity);
      let max = Max.max(x[i], -Infinity);
      let current = x[i];
      for (let j = 0; j < x.length; j++) {
        if (x[j] === current) {
          let min = Math.min(min, x[j]);
          let max = Math.max(max, x[j]);
          let line = max - min;
          
        }
      }
    }

    

  }



  return count;
}

let x = [1, 1, 3, 5, 5, 7, 7] 
let y = [4, 8, 6, 4, 9, 8, 6] 


module.exports = newIntersections;
