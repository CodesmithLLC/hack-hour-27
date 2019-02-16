/*
 * Given an array of numbers, determine if the mode and mean of
  the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
let mode = array[(Math.ceil((array.length - 1) / 2))];
let mean;
let sum = 0;
for (let i = 0; i < array.length; i++){
sum = sum + array[i];
}
trueMean = sum / array.length
mean = Math.floor(sum / (array.length));

if (mode === mean){
	return true;
}
console.log(`trueMean equals ${trueMean}`)
console.log(`mode equals ${mode}`)
return false;

}
module.exports = modemean;



