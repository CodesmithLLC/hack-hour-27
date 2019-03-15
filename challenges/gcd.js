/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let curGCD;

  for (let i = 1; i < a || i < b; i++) {
    if (a % i === 0 && b % i === 0) curGCD = i;
  }

  return curGCD;
}

module.exports = gcd;

// console.log(gcd(10, 8)); // -> 2
// console.log(gcd(10, 9)); // -> 1
// console.log(gcd(20, 45)); // -> 1