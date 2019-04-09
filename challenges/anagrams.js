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


  //didn't get
 function anagrams(str){
  const result = [];
  const strArr = str.split('');
  function helper(onePerm, remainStrArr) {
    if (!remainStrArr.length) {
      result.push(onePerm.join(''))
    }

    for (let index in remainStrArr) {
      const tempRemainStrArr = [...remainStrArr]
      tempRemainStrArr.splice(index,1)

      const tempResultArr = [...onePerm]
      tempResultArr.push(remainStrArr[index])

      helper(tempResultArr, tempRemainStrArr)
    }
  }
  helper([], strArr)


  return result;
}

console.log(anagrams('abcd'))

module.exports = anagrams;
