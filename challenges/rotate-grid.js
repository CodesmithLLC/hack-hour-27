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

// O(n ^ 2) time, O(n) space
function rotateGrid(grid, n) {
  let newGrid = [];
  for (let i = 0; i < n; i ++) {
    let inner = [];
    for (let j = n - 1; j >= 0; j--) {
      inner.push(grid[j][i]);
    }
    newGrid.push(inner);
  }
  return newGrid;
}

// O(n) time, O(1) space
function rotateGrid(grid, n) {
  
  // this loop tracks which ring we are on
  for (let i = 0; i < Math.floor(n / 2); i += 1) {
    // this determines the first and last value of the columns in the rings
    const first = i;
    const last = n - 1 - i;
    
    for (let j = first; j < last; j += 1) {
      // index that tracks which element to swap
      const adjust = j - first;
      
      // save top-left to save value
      const top = grid[first][j];
      // bottom-left -> top-left
      grid[first][j] = grid[last-adjust][first];
      // bottom-right -> bottom-left
      grid[last-adjust][first] = grid[last][last-adjust];
      // top-right -> bottom-right
      grid[last][last-adjust] = grid[j][last];
      // top-left -> top-right
      grid[j][last] = top;
    }
  }
  return grid;
}

module.exports = rotateGrid;
