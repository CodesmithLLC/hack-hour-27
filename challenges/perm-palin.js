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
  let cache = {};
  for(let i = 0; i < str.length; i++) {
    if(cache[str[i]]) {
      delete cache[str[i]];
    } else if(!cache[str[i]]) {
      cache[str[i]] = true;
    }  
  }
  return Object.keys(cache).length > 1 ? false : true;
}

module.exports = permPalin;

// function permPalin(str) {
//   let dict = {};
//   let oneSeen = false;
//   for (let i = 0; i < str.length; i += 1) {
//     if (dict[str[i]]) {
//       dict[str[i]] += 1;
//     } else {
//       dict[str[i]] = 1;
//     }
//   }
//   const dictVals = Object.values(dict);
//   for (let i = 0; i < dictVals.length; i += 1) {
//     if (dictVals[i] === 1 && !oneSeen) {
//       oneSeen = true;
//     } else if (dictVals[i] % 2 !== 0) {
//       return false;
//     } else if (dictVals[i] === 1 && oneSeen) {
//       return false;
//     }
//   }
//   return true;
// }