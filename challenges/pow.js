/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  let result;
  if (power === 0) return 1;

  if (power > 0) {
    if (power === 1) return base;
    result = base * pow(base, power - 1);
  }
  if (power < 0) {
    power *= -1;
    result = 1 / base * pow(base, -1 * (power - 1));
  }
  return result;
}

module.exports = pow;
