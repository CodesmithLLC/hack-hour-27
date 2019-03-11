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
  let arrays = grid.reverse();
  let arr = [];

  for(let i = 0; i < arrays.length; i += 1) {
    let count = 0;
    arr[i] = [];
    for(let j = 0; j < arrays.length; j += 1) {
      arr[i].push(arrays[count++][i])
    }
  }
  return arr
}

console.log(rotateGrid([ [1,2,3], [4,5,6], [7,8,9] ], 3))

module.exports = rotateGrid;
