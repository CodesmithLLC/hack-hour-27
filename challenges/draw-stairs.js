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
    let size = n;
    let stairs = '';
    while(n != 0){
        for(let i = 0; i < (size-n); i++)
          stairs += ' ';

        for(let i = 0; i < n; i++)
            stairs += '*';
        stairs += '\n';
        n--;
    }
    return stairs;
}


module.exports = drawStairs;
