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
  // catch a few edge cases!
  if (n < 1 || n > 100) {
    console.log('Error: n should be between 1 and 100 (inclusive)');
    return 'Please provide a number 1 thru 100';
  }
  // now on to the func as it was intended

  // we will store the two strings we'll be using
  // this will allow us to concat using the .repeat string method
  const space = " ";
  const ast = "*";

  // we will iterate to display the log messages in order
  // we will start with a blank slate (empty string) each time through the loop
  // and concat the correct number of spaces and asterisks
  // and log the new (beautiful) string
  for (let i = 1; i <= n; i += 1) {
    let output = '';
    output = output.concat(space.repeat(n - i)).concat(ast.repeat(i));
    console.log(output);
  }
}

module.exports = drawStairs;
