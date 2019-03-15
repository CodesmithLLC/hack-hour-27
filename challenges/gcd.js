/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (a === 0 || b === 0) return (a || b)
  let denominator;
  const set = new Set()

  for (let i = a; i >= 1; i--) {
    if (a % i === 0) set.add(i);
  }

  for (let i = b; i >= 1; i--) {
    if (b % i === 0) denominator = i;
    if (set.has(denominator)) return denominator;
  }
}

module.exports = gcd;
