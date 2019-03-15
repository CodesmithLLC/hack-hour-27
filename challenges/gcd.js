/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let result = 1;
  let smaller = (a <= b) ? a : b;
  let bigger = (a >= b) ? a : b;
  if (bigger % smaller == 0) {
    return smaller;
  } else {
    for (i = 2; i < smaller; i++) {
      if (a % i == 0 && b % i == 0) {
        result *= i;
      }
    }
    return result;
  }
}

module.exports = gcd;