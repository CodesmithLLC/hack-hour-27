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
  if (n < 1 || n > 100) return "number out of range";
  let strStairs = "";
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n - i - 1; j += 1) {
      strStairs += " ";
    }
    for (let k = 0; k < i + 1; k += 1) {
      strStairs += "*";
    }
    strStairs += "\n";
  }
  console.log(strStairs);
}

// drawStairs(30);

module.exports = drawStairs;
