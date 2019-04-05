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
  let currLetter, shortenedWord;
  let result = [];
  if (string.length < 2) return [string];
  else {
    for (let i = 0; i < string.length; i++) {
      currLetter = string[i];
      shortenedWord = string.substring(0, i) + string.substring(i + 1);
      // call recursion on the shorter word
      const shortenedWordArray = anagrams(shortenedWord);
      shortenedWordArray.map(word => result.push(currLetter + word));
    }
    result = [...new Set(result)];
    return result;
  }
}

module.exports = anagrams;
