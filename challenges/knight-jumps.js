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
  if (x > 8 || x < 1 || y > 8 || y < 1) return 'Invalid input';

  let count = 0;
  console.log('x:', x, 'y:', y)
  //right moves
  if (x <= 6) {
    if (y >= 2 && y <= 7) {
      console.log('2 right moves added')
      count += 2
    }
    else {
      console.log('1 right move added')
      count += 1
    }  
  }
  //left moves
  if (x >= 3) {
    if (y >= 2 && y <= 7) {
      console.log('2 left moves added');
      count += 2;
    }
    else if (y === 1 || y === 8) {
      console.log('1 left move added')
      count += 1;
    }
  }
  //up moves
  if (y <= 6) {
    if (x >= 2 && x <= 7) {
      console.log('2 up moves added')
      count += 2;
    }
    else if (x === 1 || x === 8) {
      console.log('1 up move added')
      count += 1;
    }
  }
  //down moves
  if (y >= 3) {
    if (x >= 2 && x <= 7) {
      console.log('2 down moves added')
      count += 2;
    }
    else if (x === 1 || x === 8) {
      console.log('1 down move added')
      count += 1;
    }
  }

  return count;
}

// console.log(knightjumps('(9 1)'))

module.exports = knightjumps;
