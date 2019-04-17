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
  // first build the object
  const xObj = {};
  const yObj = {};
  // xObj[x_pos] = maxY, minY
  for (let i = 0; i < x.length; i += 1) {
    const x_val = x[i];
    const y_val = y[i];
    if (xObj[x_val]) {
      if (y_val > xObj[x_val].max) {
        xObj[x_val].max = y_val;
      }
      if (y_val < xObj[x_val].min) {
        xObj[x_val].min = y_val;
      }
    } else {
      xObj[x_val] = { min: y_val, max: y_val };
    }
    if (yObj[y_val]) {
      if (x_val > yObj[y_val].max) {
        yObj[y_val].max = x_val;
      }
      if (x_val < yObj[y_val].min) {
        yObj[y_val].min = x_val;
      }
    } else {
      yObj[y_val] = { min: x_val, max: x_val };
    }
  }

  count = 0;

  for (let i = 0; i < x.length; i += 1) {
    const x_val = x[i];
    const y_val = y[i];
    if (hasIntersection(x_val, y_val, xObj, yObj)) {
      count += 1;
    }
  }
  return count;
}

function hasIntersection(curr_x, curr_y, xObj, yObj) {
  return (
    xObj[curr_x].max > curr_y &&
    xObj[curr_x].min < curr_y &&
    yObj[curr_y].max > curr_x &&
    yObj[curr_y].min < curr_x
  );
}

const x_arr = [0, 0, 10, -10, 0];
const y_arr = [10, -10, 0, 0, 0];

module.exports = newIntersections;
