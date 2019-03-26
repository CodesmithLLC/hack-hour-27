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

// // brute force 
// //** O(n) time complexity, where n is the min(a, b)
// function gcd(a, b) {
//   for (let i = Math.min(a, b); i > 0; i -= 1) {
//     if (a % i === 0 && b % i === 0) return i;
//   }
//   return 1;
// }

// // euclidean algorithm
// //** O(log n) time complexity
// function gcd(a, b) {
//   if (b === 0) return a;
//   return gcd(b, a % b);
// }