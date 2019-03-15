/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b){

  c = Math.min(a, b);
  d = Math.max(a, b);


  for (i = c; i > 0; i--){
    if ((c % i === 0) && (d % i ===0)){
      return i
    }
  }

}



module.exports = gcd;

console.log(gcd(10, 1000))
console.log(gcd(14, (7 * 12)))
console.log(gcd(16, 20))
console.log(gcd(33, 88))