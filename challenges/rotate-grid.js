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
  for (let l=0; l < n-1; l++) {
    for (let k = l; k < n-1-l; k++) {
      let i = l;
      let j = k;
      let temp = grid[n-j-1][i];
      for (let m = 0; m < 4; m++) {
        // console.log('i, j:',i,j);
        let temp2 = grid[i][j];
        grid[i][j] = temp;
        temp = temp2;
        let prevI = i;
        i = j;
        j = n-prevI-1;
      }
    }
  }

  // for (let k = 1; k < n-2; k++) {
  //   let i = 1;
  //   let j = k;
  //   let temp = grid[n-j-1][i];
  //   for (let m = 0; m < 4; m++) {
  //     // console.log('i, j:',i,j);
  //     let temp2 = grid[i][j];
  //     grid[i][j] = temp;
  //     temp = temp2;
  //     let prevI = i;
  //     i = j;
  //     j = n-prevI-1;
  //   }
  // }

  return grid;
}

module.exports = rotateGrid;

// const grid = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(grid);
// console.log(rotateGrid(grid, 3));

// const grid2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
// console.log(grid2);
// console.log(rotateGrid(grid2, 4));

// const grid3 = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];
// console.log(grid3);
// console.log(rotateGrid(grid3, 5));

// const grid4 = [[1,2],[3,4]];
// console.log(grid4),
// console.log(rotateGrid(grid4, 2));