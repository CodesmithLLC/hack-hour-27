/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let small = Math.min(a, b);
  let big = Math.max(a, b);
  //if (big / small === Math.floor(big/small)) return (big / small);
  //Brute force: start from 1. While big % i !== 0, and small % i !== 0, i++;
  for (let i = 2; i <= small; i++){
    if (big / i === Math.floor(big / i) && small / i === Math.floor(small / i)) return i;
  }
  return 1;
}

//console.log(gcd(3333, 1001));

module.exports = gcd;