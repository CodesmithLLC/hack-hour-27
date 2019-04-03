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
  const anagramSet = new Set();
    function recuAnagrams(str, output = '') {
      if (str.length === 1) {
        anagramSet.add(output + str[0]);
      } else {
        for(let i=0; i<str.length; i++) {
          const newStr = [...str]
          newStr.splice(i, 1);
          recuAnagrams(newStr, output + str[i])
        }
      }
    }
  recuAnagrams(string)
  return [...anagramSet]
}

console.log(anagrams('butt'))

module.exports = anagrams;
