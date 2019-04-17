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
  // convert the str to a tuple 
  let [x, y] = [Number(str.match(/\d/g)[0]), Number(str.match(/\d/g)[1])]
  let count = 0;

  // transform the coords
  if(x+2 < 9) {
    if(y-1 > 0) count+=1;
    if(y+1 < 9) count+=1;
  }
  if(x-2 > 0) {
    if(y-1 > 0) count+=1;
    if(y+1 < 9) count+=1;
  }

  if(x+1 < 9) {
    if(y-2 > 0) count+=1;
    if(y+2 < 9) count+=1;
  }
  if(x-1 > 0) {
    if(y-2 > 0) count+=1;
    if(y+2 < 9) count+=1;
  }

  return count;

}

console.log(knightjumps("(4 5)"))

module.exports = knightjumps;
