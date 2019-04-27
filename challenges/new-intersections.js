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
  // storage will hold the counts of all x or y cords
  let xStorage = {},  yStorage = {}, counter = 0;
  // iterate over each array, checking if each x or y value already exists as a key in the storage obj
  // if present, increment by 1, if not, add as key
  x.forEach(el => xStorage[el] ? xStorage[el]++ : xStorage[el] = 1);
  y.forEach(el => yStorage[el] ? yStorage[el]++ : yStorage[el] = 1);
  for (let xCord in xStorage) {
    // if there is more than one instance of that x cord...
    if (xStorage[xCord] !== 1) {
      let xIndex = [], yValsAtXIndex = [], yIndex = [], xValsAtYIndex = [];
      // ...push the indeces of that/those x cords into a new array
      for (let i = 0; i < x.length; i++) {
        if (x[i] == xCord) xIndex.push(i);
      }
      // for each of these instances, push the corresponding y value into a new array
      xIndex.forEach(el => yValsAtXIndex.push(y[el]));
      // find y min and max values on the x 'line(s)'
      let yMin = Math.min(...yValsAtXIndex), yMax = Math.max(...yValsAtXIndex);
      for (let yCord in yStorage) {
        // the second two conditions check to ensure the yCords that occur more than once fall between the y min(s) and max(s) on the x 'line(s)'
        if (yStorage[yCord] !== 1 && yMin <= yCord && yMax >= yCord) {
          // if  y values meet these conditions, push their indeces into a new array
          for (let j = 0; j < y.length; j++) {
            if (y[j] == yCord) yIndex.push(j);
          }
          // push the corresponding x values at those indeces into an array
          yIndex.forEach(el => xValsAtYIndex.push(el));
          // find the x max and min values on the y 'line(s)'
          let xMin = Math.min(...xValsAtYIndex), xMax = Math.min(...xValsAtYIndex);
          // this last condition checks that the x cords where there are multiple points fall between the x min(s) and max(s) on the y 'line(s)'
          // if they don't, there can't be a new point because there's not a diamond shape  (roughly) for a new point to fall into...rather, it's a Y shape and doesn't meet the requirements for a new point
          // this last condition will ONLY be met if we have 1. an x value with multiple y cords and 2. said x value falls between the lowest x and highest x points of 3. a y value that 4. falls between the lowest y and highest y points of the x value (or 'line') mentioned in #1
          // only then can we increment the counter, which will return the number of new points we can have
          if (xMin <= xCord && xMax >= xCord) counter++;
        }
      }
    }
  }
  return counter;
}

module.exports = newIntersections;

// function Range(arr) {
//   this.endpoints = [Math.min(...arr), Math.max(...arr)];
// }

// // method to tell us if a number is between the range
// Range.prototype.contains = function (num) {
//   return (this.endpoints[0] < num) && (num < this.endpoints[1]);
// };


// // take the arrays of coordinates and turn them into ranges
// function rangify(lines) {
//   Object.entries(lines)
//     .forEach(([coord, valArray]) => {
//       lines[coord] = new Range(valArray);
//     }
//   );
// }


// // count the number of elements in the array and return an object 
// function count(arr) {
//   return arr.reduce((counts, num) => {
//     if (counts[num] === undefined) counts[num] = 0;
//     counts[num] += 1;
//     return counts;
//   }, {});
// }
// /*
// [3, 3, 1, 4, 4, 4, 4, 4] will return
// {
//   '3': 2,
//   '1': 1,
//   '4': 5
// }
// */

// function newIntersections(xArr, yArr) {
//   const xCounts = count(xArr);
//   const yCounts = count(yArr);
//   const horizontals = {};
//   const verticals = {};

//   // find vertical lines and place into an object.
//   // The keys are the x-coordinates where the line is at
//   // and the values are arrays of y-coordinates along that line
//   Object.keys(xCounts).forEach((xCoord) => {
//     // a line is defined by its two endpoints
//     // only check for a line if there are multiple points at this value
//     if (xCounts[xCoord] > 1) {
//       // collect any corresponding y values in verticals
//       xArr.forEach((x, i) => {
//         if (x == xCoord) {
//           if (verticals[x] === undefined) verticals[x] = [];
//           verticals[x].push(yArr[i]);
//         }
//       });
//     }
//   });

//   // find horizontal lines and place into an object.
//   // The keys are the y-coordinates where the line is at
//   // and the values are arrays of x-coordinates along that line
//   Object.keys(yCounts).forEach((yCoord) => {
//     // a line is defined by its two endpoints
//     // only check for a line if there are multiple points at this value
//     if (yCounts[yCoord] > 1) {
//       // collect any corresponding y values in verticals
//       yArr.forEach((y, i) => {
//         if (y == yCoord) {
//           if (horizontals[y] === undefined) horizontals[y] = [];
//           horizontals[y].push(xArr[i]);
//         }
//       });
//     }
//   });



//   // rangify keeps only the minimum & maximum values in an array for each key
//   rangify(verticals);
//   rangify(horizontals);

//   let newPoints = 0;

//   Object.entries(horizontals).forEach(([yCoord, xRange]) => {
//     Object.entries(verticals).forEach(([xCoord, yRange]) => {
//       if (xRange.contains(xCoord) && yRange.contains(yCoord)) newPoints += 1;
//     });
//   });

//   console.log({ xArr, yArr, newPoints });

//   return newPoints;
// }