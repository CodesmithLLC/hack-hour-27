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
  let maxX = Math.max(...x)
  let minX = Math.min(...x)
  let maxY = Math.max(...y)
  let minY = Math.min(...y)
  let length = maxX - minX - 1;
	console.log("~: newIntersections -> length", length)
  let height = maxY - minY - 1;
	console.log("~: newIntersections -> height", height)
  return length * height; 
}

module.exports = newIntersections;
// let x = [2, 2, -2, -2];
// let y = [2, -2, -2, 2];

// let x = [1, -10, -5]
// let y = [1, -10, 5]
// console.log(newIntersections(x,y))