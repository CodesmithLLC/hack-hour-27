/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (a === b) return a;
  let low;
  let high;
  let lookAt;
  if (a > b){
    high = a;
    low = b;
  } else {
    low = b;
    high = a;
  }
  if (high/2 > low){
    lookAt = low;
  } else {
    lookAt = Math.ceil(high/2);
  }
  for (let i = lookAt; i > 0; i--){
    if(!(a%i) && !(b%i)){
      return i;
    }
  }
}

module.exports = gcd;
