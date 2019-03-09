/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 * 7=> aababaa(5a,2b), bbbabbb(6b,1a), bbaaabb(4b3a), 
 * 6 => abaaba
 * 5 letters => ababa
 * 4 letters: abba
 * 3 letters => aba
 * 2 letters => aa
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
