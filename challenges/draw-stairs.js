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
    let stars = 1
    let spaces = n-1
    while(stars <= n ) {
        console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`)
        stars++
        spaces--
    }
}

drawStairs(6)
module.exports = drawStairs;
