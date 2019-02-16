/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, result = base) {
  if (power < 0) return 'Do it in your head.'
  if (power === 0) return 1;
  if (power === 1) return result;
  result *= base;
  power -= 1;
  return pow(base, power, result)
}

function pow(base, power) {
  if (power < 0) return 'Use a calculator.'
  if (power === 0) return 1;
  if (power === 1) return base;
  return base * pow(base, power - 1); 
}

console.log(pow(4, 7));

module.exports = pow;