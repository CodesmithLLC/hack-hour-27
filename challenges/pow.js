/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, total) {

	// edge cases, from most to least restrictive

	// validate inputs?
	// if( (parseInt(base) !== base) || (parseInt(power) !== power) ) {
	// 	console.log(`pow: integers only, please`);
	// 	return undefined;
	// }

	// cases involving a power of 0
	if(base < 0 && power === 0) return -1;
	if(base >= 0 && power === 0) return 1;

	// cases involving a base of 0 and powers other than 0;
	if(base === 0 && power > 0) return 0;
	if(base === 0 && power < 0) return Infinity;

	// cases involving a base of 1
	if(base === 1) return 1;

	// cases involving a negative power
	if(power < 0) return 1 / (pow(base, power * -1));

	// cases where the power is 1 and the total is not defined
	if(power === 1 && total === undefined) return base;

	// base case
	// cases where the power is 1 and the total is defined
	if(power === 1) return total * base;	

	// recu case
	let newTotal;
	let newPower;

	if(total === undefined){
		newTotal = base;	
	} else {
		newTotal = base * total;
	}

	newPower = power - 1;

	return pow(base, newPower, newTotal);

}

// tests

// console.log(pow(0, -1))
// console.log(pow(0, 0))
// console.log(pow(11, -4))
// console.log(pow(2, -9))

module.exports = pow;
