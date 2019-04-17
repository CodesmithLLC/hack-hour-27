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
  let moves = 8;
  const x = parseInt(str[1]);
  const y = parseInt(str[3]);
  const xDist = distFromEdge(x)
  const yDist = distFromEdge(y)
  const totalDist = xDist + yDist;
  if(totalDist === 1) moves -= 2;
  if(totalDist === 2) moves -= 4;
  if(totalDist === 3) moves -= 5;
  if(totalDist === 4) moves -= 6;
  return moves;
}

function distFromEdge(x){
  if (x < 3) return x;
  if (x > 6) return (9-x);
  return 0;
}

module.exports = knightjumps;
