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
  let result = [];
  if (string.length === 1) {
   result.push(string)
   return result
  }
  for (let i = 0; i < string.length; i++) {
    const firstChar = string[i];
    const charsLeft = string.substring(0, i) + string.substring(i+1);
    const innerPermutations = anagrams(charsLeft)
    // console.log('firstChar ==>', firstChar, 'charsLeft==>', charsLeft, 'innerpermutations===>', innerPermutations)
    for (let j = 0; j < innerPermutations.length; j++) {
      result.push(firstChar + innerPermutations[j])
    }
  }
  return result;
}

module.exports = anagrams;

const result = anagrams('abc')
console.log(result)
