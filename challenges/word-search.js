/* Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
board =
[
 ['A','B','C','E'],
 ['S','F','C','S'],
 ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false. */

function wordSearch(grid, target, start){
  console.log('target:', target)
  //base
  if (!target.length) return true;

  //recursion
  grid.forEach((row, rowidx) => {
    row.forEach((letter, letteridx) => {
      if (letter === target[0]) {
        //update start
        start = [rowidx, letteridx]
        target = target.slice(1);
        
        // console.log('start', start)

        //check adjacents
        //left
        let leftArg = grid[start[0]][start[1] - 1] ? grid[start[0]][start[1] - 1] : '';
        if (leftArg === target[0]) return wordSearch(grid, target, start)

        //right
        let rightArg = grid[start[0]][start[1] + 1] ? grid[start[0]][start[1] + 1] : '';
        if (rightArg === target[0]) return wordSearch(grid, target, start)

        //up
        let upArg = grid[start[0] - 1] ? grid[start[0] - 1][start[1]] : '';
        if (upArg === target[0]) return wordSearch(grid, target, start)

        //down
        let downArg = grid[start[0] + 1] ? grid[start[0] + 1][start[1]] : '';
        if (downArg === target[0]) return wordSearch(grid, target, start)
      }
    })
  })
  // return false;

}

console.log(wordSearch([
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
 ], 'SEE'))

module.exports = wordSearch;