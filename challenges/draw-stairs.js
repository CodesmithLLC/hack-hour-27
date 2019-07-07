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
    for (let i = 0; i < n ; i++) {
      const stars = i + 1;
      const spaces = n - stars;
      console.log(' '.repeat(spaces) + '*'.repeat(stars));
    }
  }

  // how to print something without have a new line char (which console.log creates) is something called process.stdout.write() on the last one. but you need to console.log everything before the last line bc you need to see the new lines that console.log creates. it would make it all one line because of the \n that's implicit to console.log

module.exports = drawStairs;
