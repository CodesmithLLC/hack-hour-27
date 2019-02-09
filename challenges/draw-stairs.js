/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
  // main loop for each line. loop n times
  for (let i = 0; i < n; i += 1) {
    let str = '';

    // # of spaces per line should be n - 1 - i
    for (let s = 0; s < n - 1 - i; s += 1) {
      str += ' ';
    }

    // # of * should = i + 1
    for (let j = 0; j < i + 1; j ++) {
      str += '*';
    }
    // print str
    console.log(str);
  }
}
console.log('Drawing 3');
 drawStairs(3);
console.log('Drawing 1');

drawStairs(1);
console.log('Drawing 8');
drawStairs(8);

module.exports = drawStairs;
