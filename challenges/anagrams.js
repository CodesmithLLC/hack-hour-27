/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
  if (string.length === 1) return [string];
  let output = [];
  let doubleStr = string + string;
  let len = string.length;
  for (let i = 0; i < len; i++) {
    anagrams(doubleStr.substring(i + 1, i + len)).forEach(e => {
      output.push(string[i] + e);
    })
  }
  return output;
}

module.exports = anagrams;

// var result = anagrams('abc');
// console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]