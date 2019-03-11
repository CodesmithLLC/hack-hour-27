/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
  //strat 1: concat all arrays
  let giantArray = grid.reduce((acc, val) => acc.concat(val));
  //create new array of n^2 size
  let rotatedArray = new Array(n * n).fill(undefined);
  //fill in the spaces with every n - 1 being values from a subarray of elements, start at different points. A starting point for each 0 to n - 1
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
      let iterator = (i * n) + j
      console.log('iterator:', iterator)
      rotatedArray[iterator] = grid[grid.length - 1 - j][i]
    }
  }
  //console.log(rotatedArray)
  //split the giant array into subarrays of n length
  let output = [];
  while (rotatedArray.length > 0) {
    output.push(rotatedArray.splice(0, n))
  }
  //return the split giant array
  return output;
}

// let sampleGrid =  [   [1, 2, 3], [4, 5, 6], [7, 8, 9]  ];
// console.log(rotateGrid(sampleGrid, 3)) 

module.exports = rotateGrid;

// for (let i = j; i <= n*n; i = i+n)