/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  //Base Cases
  if (power === 0) return 1;
  if (power === 1) return base;
  if (base === 0) return 0;
  

  //Recursive Case
  if (power < 0) {
  	base = 1 / base;
    power = Math.abs(power);
  }
  return base * pow(base, power - 1);
}

module.exports = pow;
