/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 


   example:
   var result = anagrams('abc');
   console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
*/

function anagrams(string) {
  let answer = [];

  let generator = (stringSoFar, remaining) => {

    if (stringSoFar.length === string.length) {
      answer.push(stringSoFar);
    }
    for(let i = 0; i < remaining.length; i++) {
      let theRestOfTheString = remaining.split('');
      theRestOfTheString.splice(i, 1);
      let nextStringSoFar = stringSoFar + remaining.charAt(i)
      theRestOfTheString = theRestOfTheString.join('');
      generator(nextStringSoFar, theRestOfTheString);
    }
  };
  generator('', string);
  return answer;
}

module.exports = anagrams;
