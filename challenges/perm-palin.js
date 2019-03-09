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
  const set = new Set();
  for (let i = 0; i < str.length; i++){
    if (set.has(str[i])){
      set.delete(str[i]);
    }else{
      set.add(str[i]);
    }
  }
  return !(set.size>1);
}
/*
 console.log(permPalin('abab'), true)
 console.log(permPalin('cbaba'), true)
 console.log(permPalin('cbac'), false)
 console.log(permPalin('a'), true)
 */

module.exports = permPalin;
