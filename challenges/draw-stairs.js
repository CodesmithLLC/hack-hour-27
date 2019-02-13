/* Write a function that console logs a staircase of any given height where
 1 <= N <= 100.
 The staircase must climb up from left to right. 
 The last line should only consist of asterisks,
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
	//n is number of squares
	// /xa0/ -> space
	// /n -> line break
	let counter;
	for (let i = 0; i < n; i++){
		counter++;
	}
	function times(f, t){
		for (let x = 0; x < t; x++){
			 f();
		}
	}

	times(function(){

	}, 4)
	
	let result = ""
	let space = ' '
	let lineBreak = /n/ 
	let star = '*';
	let total = n;
	for (let j = 0; j < n; j++){
		let spaces = total - j;
		let stars = total - spaces;
		times(function(){
			result = result + space;
			}, spaces);
		times(function(){
			result = result + star;
			}, stars);
		result.concat(lineBreak);
		
	} 
	return result;
}
console.log('hi \n no')
console.log(drawStairs(10))
// module.exports = drawStairs;
