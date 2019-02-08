/* Write a function that console logs a staircase of any given height 
   where 1 <= N <= 100. The staircase must climb up from left to right. 
   The last line should only consist of asterisks, without any leading/trailing 
   spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n, m = n+1) {

	// edge case: user gave an invalid input
	if( (n < 1) || (n > 100) || (parseInt(n) !== n) ) {
		console.log('drawStairs: input must be an integer between 1 and 100');
		return;
	}
	// base case: n is 1; we've reached the bottom stair
	if(n === 1){
		console.log(' '.repeat(n-1),'*'.repeat(m-n));
		return;
	}
	// recu case: draw the next stair
	console.log(' '.repeat(n-1),'*'.repeat(m-n));
	drawStairs(n-1, m);

}

// tests

// drawStairs(1)
// drawStairs(4)
// drawStairs(40)
// drawStairs(0)
// drawStairs(0.6453)
// drawStairs(-10)
// drawStairs(101)


module.exports = drawStairs;
