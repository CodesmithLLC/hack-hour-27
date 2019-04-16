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

function newIntersections(x, y) {
  // I need to find the maximum and minimum values of X and Y for new points
  const maxX = (Math.max(...x)) - 1;
  const minX = Math.min(...x) + 1;
  const maxY = Math.max(...y) - 1;
  const minY = Math.min(...y) + 1;



  const newX = [];
  for (let i = minX; i <= maxX; i += 1) {
    newX.push(i)
  }

  const newY = [];
  for (let i = minY; i <= maxY; i += 1) {
    newY.push(i)
  }

  // now that we have all our new possible points, lets see if any are valid
  let validNewPoints = 0;
  for (let i = 0; i < x.length; i += 1) {
    if ((newX[i] === x[i] && newY[i] < y[i]) && (newY[i] === y[i] && newX[i] < x[i])) {
      validNewPoints += 1;
    }
  }


  return validNewPoints;

}

const arr1 = [1, 7, 3, 5];
const arr2 = [2, 6, 4, 5];

console.log(newIntersections(arr1, arr2));
module.exports = newIntersections;
