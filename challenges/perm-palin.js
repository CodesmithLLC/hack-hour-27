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
  const palindrome = [];
  const result = [];
  for (let i = str.length - 1; i >= 0; i--) {
    palindrome.push(str[i]);
  }

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
      }
    }
  }
  permute(str.split(''));

  return result.includes(palindrome)
}


function permpalin(str) {
  if (str.length % 2 === 0) {
    for (let i of s)
  } else {

  }
}

module.exports = permPalin;

console.log(permPalin('abab'))
console.log(permPalin('cbaba'))
console.log(permPalin('cbac'))
console.log(permPalin('a'))