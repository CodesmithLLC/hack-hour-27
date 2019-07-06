// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// let str = "(4 5)"












// brute force. check all the moves and see if the square goes out of bounds
function knightjumps(str) {
  let knightMoves  = [
    -2, -1,    -2,  1,
     2,  1,     2, -1,
    -1,  2,    -1, -2,
     1,  2,     1, -2
   ];
  let counter = 0;
  let x = parseInt(str[1]);
  let y  = parseInt(str[3]);
  for (let i = 0; i < knightMoves.length - 1; i += 2) { // loop over the 8 possible moves
    if (x + knightMoves[i] > 0 && y + knightMoves[i + 1] > 0 && x + knightMoves[i] < 9 && y  + knightMoves[i + 1] < 9) {
      counter++;
    }
  }
  return counter;
}













// check using the position of the square instead of examining the possible moves
function knightjumps(str) {
  let x = 1 * str[1]; // another way to parse integers
  let y = 1 * str[3];

  let spaces = 0;

  // check all moves going to the left 1
  if (x - 1 >= 1) {
    if (y - 2 > 0) spaces++;
    if (y + 2 < 9) spaces++;
  }

  // check all moves going to the left 2
  if (x - 2 >= 1) {
    if (y - 1 > 0) spaces++;
    if (y + 1 < 9) spaces++;
  }

  // check all moves going to the right 1
  if (x + 1 <= 8) {
    if (y - 2 > 0) spaces++;
    if (y + 2 < 9) spaces++;
  }

  // check all moves going to the right 2
  if (x + 2 <= 8) {
    if (y - 1 > 0) spaces++;
    if (y + 1 < 9) spaces++;
  }
  return spaces;
}










// math it up
function knightjumps(str) {
  let x = reflect(+str[1]); // yet another way to parse integers, then reflect the coordinate
  let y = reflect(+str[3]);
  let x_distance = Math.max(3 - x, 0);
  let y_distance = Math.max(3 - y, 0);
  return 8 - distanceToValue(x_distance + y_distance);
}
function distanceToValue(d) { return d < 2 ? 2 * d : d + 2; }
function reflect(n) { return n > 4 ? 9 - n : n; }



/*
Observe this grid showing all the answers. There are two observations:
1. The symmetry. (8 8) is the same as (1 1), (2 7) is the same as (2 2), etc. There is symmetry is both x and y axes.
   We can therefore map everything to only the first quadrant. We'll right a "reflect" function to do that.
2. There is an island of 8's in the middle. The distance from this island determines the number of moves to deduct from 8.
   We can calculate this distance and pass it through a function "distanceToValue" that determines the appropriate number of moves
   to deduct based on the distance.
   
2 3 4 4 4 4 3 2
3 4 6 6 6 6 4 3
4 6 8 8 8 8 6 4
4 6 8 8 8 8 6 4
4 6 8 8 8 8 6 4
4 6 8 8 8 8 6 4
3 4 6 6 6 6 4 3
2 3 4 4 4 4 3 2
*/

module.exports = knightjumps;