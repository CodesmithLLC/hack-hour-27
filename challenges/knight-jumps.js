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
  const arr = str.slice(1, -1).split(' ');
  let x = Number(arr[0]);
  let y = Number(arr[1]);
  let moves = 0;
  
  // test all adjacent movement options
  if (validMove(x - 2, y)) moves++;
  if (validMove(x + 2, y)) moves++;
  if (validMove(x, y + 2)) moves++;
  if (validMove(x, y - 2)) moves++;
  if (validMove(x - 2, y - 2)) moves++;
  if (validMove(x + 2, y + 2)) moves++;
  if (validMove(x - 2, y + 2)) moves++;
  if (validMove(x + 2, y - 2)) moves++;
  
  return moves;
}

function validMove (x, y) {
  if (x < 1 || x > 8 || y < 1 || y > 8) return false;
  return true;
}

var str = "(7, 7)"
console.log(knightjumps(str))

module.exports = knightjumps;
