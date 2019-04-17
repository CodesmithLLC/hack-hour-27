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
  let x = Number(str[1]);
  let y = Number(str[3]);
  if (x >= 3 && x <= 6) {
    if (y >= 3 && y <= 6) return 8;
    else if (y >= 2 && y <= 7) return 6;
    else return 4;
  } else if (x >= 2 && x <= 7) {
    if (y >= 3 && y <= 6) return 6;
    else if (y >= 2 && y <= 7) return 4;
    else return 3;
  } else {
    if (y >= 3 && y <= 6) return 4;
    else if (y >= 2 && y <= 7) return 3;
    else return 2;
  }
}

module.exports = knightjumps;

// var str = "(2 1)"
// console.log(knightjumps(str));
