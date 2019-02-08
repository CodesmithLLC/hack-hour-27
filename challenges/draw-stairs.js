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
//input will be a number value of n that will determine the numnber of rows it will print
//on first row will print just one asterisk
//on additional row will add one asterisk to the left 

//strategy: create an array that will hold n number of blank spaces
  //loop through array starting from the end of the array, push an * to array on each iteration
  //join the array and print row on each loop

  
  let row = []; 
  for (let i = 0; i < n; i++) {
    {
    row.push(' '); 
    }
  }
  
  for (let i = row.length-1; i >= 0 && i < 100; i--) { 
    row[i] = '*'; 
    console.log(row.join('')); 
  } 
}

console.log(drawStairs(4));
console.log(drawStairs(6));

module.exports = drawStairs;
