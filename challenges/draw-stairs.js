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
  //loop n times
  for (let i = 0; i <= n; i++) {
    let row = '';
      //for loop to draw spaces
      for (let spaces = 0; spaces < n - i; spaces++) {
        row += 's';
      }
      //for loop to push stars
      for (let stars = 0; stars < i; stars++) {
        row += '*';
      }
      //log row
    console.log(row);
  }
}


module.exports = drawStairs;
