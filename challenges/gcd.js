/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let temp = a % b;
  if (temp === 0) return b;
  return gcd(a, temp);
}

module.exports = gcd;