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
  const xLines = {};
  const yLines = {};
  for (let i = 0; i < len; i++) {
    if (!xLines[x[i]]) {
      xLines[x[i]] = [y[i], y[i]];
    } else {
      xLines[x[i]][0] = Math.min(xLines[x[i]][0], y[i]);
      xLines[x[i]][1] = Math.max(xLines[x[i]][1], y[i]);
    }
    if (!yLines[y[i]]) {
      yLines[y[i]] = [x[i], x[i]];
    } else {
      yLines[y[i]][0] = Math.min(yLines[y[i]][0], x[i]);
      yLines[y[i]][1] = Math.max(yLines[y[i]][1], x[i]);
    }
  }
  // console.log('xLines',xLines);
  // console.log('yLines',yLines);

  for (let xkey in xLines) {
    if (xLines[xkey][0] !== xLines[xkey][1]) {
      for (let ykey in yLines) {
        if (yLines[ykey][0] !== yLines[ykey][1]) {
          if (Number(ykey) > xLines[xkey][0] && Number(ykey) < xLines[xkey][1] && Number(xkey) > yLines[ykey][0] && Number(xkey) < yLines[ykey][1]){
            count++;
          }
        }
        
      }
    }
  }
  return count;
}

module.exports = newIntersections;

// const x = [0,5,1,1];
// const y = [0,0,2,-1];
// console.log(newIntersections(x,y));