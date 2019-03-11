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
  if (n === 1) return grid;
  const retGrid = [];

  for (let i = 0; i < n; i += 1) {
    retGrid.push([]);
  }

  let newRow, newCol = 0;

  for (let row = 0; row < n; row += 1) {
    for (let col = 0; col < n; col += 1) {
      // calculate new row / col
      newCol = n - 1 - row;
      newRow = col;
      retGrid[newRow][newCol] = grid[row][col];
    }
  }

  return retGrid;
}

const arg1 = [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[1,2], [3,4]], [2]];
const arg2 = [3, 2, 1];

for (let i = 0; i < arg1.length; i++) {
  console.log(arg1[i], ' - ', rotateGrid(arg1[i], arg2[i]));
}


module.exports = rotateGrid;
