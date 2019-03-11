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
  const output = [];
  for (let i = 0; i < n; i++){
    output.push([]);
  }
  for (let x = 0; x < n; x++){
    for (let y = 0; y < n; y++){
      output[x][y] = grid[n-1-y][x] 
    }
  }
  return output;
}

/*
const testGrid = [
  [00,01,02],
  [10,11,12],
  [20,21,22]
]
console.log(rotateGrid(testGrid,3))
*/

module.exports = rotateGrid;
