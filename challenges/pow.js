/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  // base case:
  if (power === 1) {
    return base;
  }
  // else, go back down the rabbit hole!
  return base * pow(base, power - 1)

}

module.exports = pow;
