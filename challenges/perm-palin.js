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
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    if (!hash.hasOwnProperty(str[i])) {
      hash[str[i]] = 0;
    }
    hash[str[i]] += 1;
  }

  let oddEven = {
    odd: 0,
    even: 0,
  };

  Object.values(hash).forEach((el) => {
    if (el % 2 === 0) {
      oddEven.even += 1;
    } else {
      oddEven.odd += 1;
    }
  });

  return oddEven.odd < 2;
}

module.exports = permPalin;