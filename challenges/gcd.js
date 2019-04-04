/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let smaller = a < b ? a : b;
  let bigger = a > b ? a : b;
  if (b === 0) return a;
  return gcd(smaller, bigger % smaller);
}

module.exports = gcd;

console.log(gcd(1048, 420))