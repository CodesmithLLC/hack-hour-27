/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
//input base and power is the number of times that base will multiply itself 
//output number representing the total of base multipled by itself the number of power times
//strategy: on each iteration, multiply base by itself and then decrement power by one
//return total

let total = 0; 
for (let i = 1; i < power; power--) {
  total += base * base; 
}
return total; 
}

//alternate solution using recursion

function pow(base, power) {
  if (power === 0) return 1; 
  return base * pow(base, power-1); 
}


module.exports = pow;
