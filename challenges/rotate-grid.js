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
 * 
 *                  sample 2x2 [ [1 , 2]
 *                              [3 , 4] ]
 * 
 *                  =>         [ [3 , 1]
 *                              [4 , 2]   ]
 * 
 *                  sample 4x4 [   [1, 2, 3, 4],
 *                                 [5, 6, 7, 8],
 *                                 [9, 10, 11, 12]
 *                                 [13, 14, 15, 16]  ]
 *
 (0,0) -> (0,2)
 (0,1) -> (1,2)
 (0,2) -> (2,2)

 (1,0) -> (0,1)
 (1,1) -> (1,1)
 (1,2) -> (2,1)

 (2,0) -> (0,0)
 (2,1) -> (1,0)
 (2,2) -> (2,0)
 * BONUS: Do this in place

 1. First row => last column
 2. Last Col => last row
 3. Last row => first col
 4. First col => first row
 */

function rotateGrid(grid, n) {
    // let moves = n - 1;
    // let rowPos = 0;
    // let colPos = 0;
    // let prev;
    // let next;
    // while(rowPos <= grid.length - 1) { // || colPos < grid[0].length
    //   if (colPos >= grid[0].length - 1) {
      //     colPos = 0;
      //     rowPos += 1;
      //   }
      //   prev = grid[rowPos][colPos];
      //   colPos += 1;
      //   next = grid[rowPos][colPos];
    //   grid[rowPos][colPos] = prev;
    // }
    // console.log(grid);
    
    let innerGridN = n - 1;
    if (n <= 1) return grid;
    let innerGrid = [[grid.slice(1, innerGridN)], ]
}

function rotate(outer, innerGrid) {
  let firstRow = grid[0];
	console.log(" ~: rotate -> firstRow", firstRow)
  let lastCol = grid.map(el => el[el.length - 1]);
	console.log(" ~: rotate -> lastCol", lastCol);
  let lastRow = grid[grid.length - 1];
	console.log(" ~: rotate -> lastRow", lastRow);
  let firstCol = grid.map(el => el[0]);
	console.log(" ~: rotate -> firstCol", firstCol);
}
module.exports = rotateGrid;

rotateGrid([[1,2,3], [4,5,6], [7,8,9]])