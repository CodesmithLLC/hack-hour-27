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
  //Strat: Euclid's Theorem: divide big by small. Grab remainder. Divide small by remainder. Repeat until Small / remainder === 0. Then return remainder.
  while (big && small){
    if (big % small === 0) return small;
    let remainder = big % small;
    big = small;
    small = remainder;
  }
}

<<<<<<< HEAD
console.log(gcd(44, 8));
=======
//console.log(gcd(210, 45))
>>>>>>> 5af0f7c68668718feb179a5c47700ffdcb9c709a

module.exports = gcd;