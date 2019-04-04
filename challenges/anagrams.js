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
  //strat: for each letter, move it to the front and run rotation on everything but the first letter. stop once you have completed rotation. Push each of these iterations onto output array.
  for (let i = 0; i < string.length; i++) {
    let prepped = string[i] + string.replace(string[i], '')
    //console.log('prepped:', prepped)
    //run rotation on prepped
    // rotation(prepped);
  }
}

function rotation(str) {
  let output = [];
  let fixed = str[0];
  let rest = str.slice(1);
  let i = 0;
  while (!output.contains(fixed + rest)) {
    let temp = rest[i];
    rest[i] = rest[i + 1]
    rest[i + 1] = temp; 
    output.push(fixed + rest)
    i++;
  }
  output.push(fixed + rest)
  return output;
}

console.log(anagrams('abcd'))

module.exports = anagrams;
