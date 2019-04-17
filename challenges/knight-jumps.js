// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  let movesCount = 0;

  const x = parseInt(str[1]);
  const y = parseInt(str[3]);
  const moveList = [[2, 1], [1, 2], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];

  // iterate through the move list
  for (let i = 0; i < moveList.length; i += 1) {
    let finalPosition = [x + moveList[i][0], y + moveList[i][1]];
    if ((finalPosition[0] >= 1 && finalPosition[0] <= 8) && (finalPosition[1] >= 1 && finalPosition[1] <= 8)) {
      // increment move count by 1
      movesCount += 1;
    }
  }

  return movesCount;
}

module.exports = knightjumps;
