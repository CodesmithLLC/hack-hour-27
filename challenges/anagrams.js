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
function angr(str){
  const grams = [];
  function anag(string, chr = '') {
    if (!string) grams.push(chr);
    for (let i = 0; i < string.length; i++){
      anag(string.slice(0,i) + string.slice(i+1), chr + string[i])
    }
  }
  ang(str);
  return grams;
}

function anagrams(str){
  const grams = [];
  function dda(string, chr = '') {
    const seen = new Set();
    if (!string) grams.push(chr);
    for (let i = 0; i < string.length; i++){
      if (!seen.has(string[i])){
        dda(string.slice(0,i) + string.slice(i+1), chr + string[i])
      }
      seen.add(string[i])
    }
  }
  dda(str);
  return grams;
}

/*
 * select 1 from string
 * remove from string
 * continue with remaining
 * when none are left, push to array
 */

module.exports = anagrams;
