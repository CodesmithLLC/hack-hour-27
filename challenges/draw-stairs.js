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
// use for loop to write space n-i then star* i times
// repeat n times for the level of stairs
  if (n >= 1 && n <= 100){
    for (let i = 1; i <= n; i++){
<<<<<<< HEAD
      // create n-i space + create i star
      let stair = ' '.repeat(n-i) + '*'.repeat(i)
=======
      let stair
      // create n-i space
      stair = ' '.repeat(n-i)
      // create i star
      stair += '*'.repeat(i)
>>>>>>> ee4209ace7a3a2f76596ebeba1a1b8516f48ad56
      console.log(stair)
    }
  }
}

module.exports = drawStairs;
