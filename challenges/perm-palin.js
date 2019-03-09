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
  const chars = str.split('');
  const count = {};

  chars.forEach(char => count[char] = (count[char] || 0) + 1);

  const result = Object.values(count);

  return !!result.reduce((acc, cur) => {
    if (cur % 2 !== 0) acc -= 1;
    return acc;
  }, 2);
}

module.exports = permPalin;

