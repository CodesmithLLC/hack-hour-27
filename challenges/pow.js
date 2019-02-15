/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (base === 0) {
    return 0;
  }
  if (power === 0) {
    return 1;
  }
  if (power === 1) {
    return base;
  }
  return base * pow(base, power - 1);
}


module.exports = pow;

// console.log(pow(3, 3))
// console.log(pow(2, 3))
// console.log(pow(3, 1))
// console.log(pow(3, 0))
// console.log(pow(0, 0))