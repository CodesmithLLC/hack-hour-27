/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
permPalin('abab') //=> true
permPalin('cbaba') //=> true
permPalin('cbac') //=> false
permPalin('a') //=> true
 *
 */

function permPalin(str) {
  let hash = {};
  let charCount = 0;

  for(let i = 0; i < str.length; i += 1) {
    let c = str[i];
    if( c === ' ' ) {
      continue;
    }
    if (hash[c]) {
      delete hash[c];
    } else {
      hash[c] = true
    }
    charCount++;
  }
  if (charCount % 2 === 0) {
    return Object.keys(hash).length === 0;
  } else {
    return Object.keys(hash).length === 1;
  }
}

console.log(permPalin('abab')) //=> true
permPalin('cbaba') //=> true
permPalin('cbac') //=> false
permPalin('a') //=> true

module.exports = permPalin;