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
  const out = [];

  if (string.length === 1) {
    out.push(string);
    return out;
  }

  let strArr = string.split('');

  for (let i = 0; i < strArr.length; i += 1) {
    let first = strArr[i];
    let newArr = strArr.slice(0, i).concat(strArr.slice(i+1))
    let ana = anagrams(newArr.join(''));
    for (let j = 0; j < ana.length; j += 1) {
      let newAna = first + ana[j];
      if (!out.includes(newAna))
        out.push(newAna);
    }
  }

  return out;
}
console.log(anagrams('abb'))
module.exports = anagrams;
