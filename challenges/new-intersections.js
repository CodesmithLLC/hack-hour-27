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
  const len = x.length;
  let count = 0;

  // set to store coordinates
  const coords = new Set();
  for (let i = 0; i < len; i++) {
    coords.add(`${x[i]},${y[i]}`);
  }
  console.log(coords);

  // store for seen new coordinates
  const seen = new Set();

  for (let i = 0; i < len; i++) {
    // above
    if (!seen.has(`${x[i]},${y[i]+1}`) && coords.has(`${x[i]},${y[i]+2}`) && coords.has(`${x[i]+1},${y[i]+1}`) && coords.has(`${x[i]-1},${y[i]+1}`)) {
      seen.add(`${x[i]},${y[i]+1}`);
      count++;
    }
    // right
    if (!seen.has(`${x[i]+1},${y[i]}`) && coords.has(`${x[i]+1},${y[i]+1}`) && coords.has(`${x[i]+2},${y[i]}`) && coords.has(`${x[i]+1},${y[i]-1}`)) {
      seen.add(`${x[i]+1},${y[i]}`);
      count++;
    }
    // bottom
    if (!seen.has(`${x[i]},${y[i]-1}`) && coords.has(`${x[i]},${y[i]-2}`) && coords.has(`${x[i]+1},${y[i]-1}`) && coords.has(`${x[i]-1},${y[i]-1}`)) {
      seen.add(`${x[i]},${y[i]-1}`);
      count++;
    }
    // left
    if (!seen.has(`${x[i]-1},${y[i]}`) && coords.has(`${x[i]-2},${y[i]}`) && coords.has(`${x[i]-1},${y[i]+1}`) && coords.has(`${x[i]-1},${y[i]-1}`)) {
      seen.add(`${x[i]-1},${y[i]}`);
      count++;
    }
  }
  
  return count;
}

module.exports = newIntersections;

// const x = [0,1,2,1];
// const y = [0,1,0,-1];
// console.log(newIntersections(x,y));