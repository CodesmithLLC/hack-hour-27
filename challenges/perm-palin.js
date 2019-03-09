/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  let set = new Set();
  for (let i = 0; i < str.length; i ++) {
    if (set.has(str.charAt(i))) set.delete(str.charAt(i));
    else (set.add(str.charAt(i)));
  }
  return set.size <= 1;;
}

module.exports = permPalin;

// console.log(permPalin('abab')); // => true
// console.log(permPalin('cbaba')); // => true
// console.log(permPalin('cbac')); // => false
// console.log(permPalin('a')); // => true