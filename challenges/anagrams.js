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
  let results = []

	// base case
	if (string.length === 1){
		results.push(string)
		return results
	}

	for (let i = 0; i < string.length; i++){
		let firstChar = string[i]
		
		let restChar = string.slice(0, i) + string.slice(i+1)
		
		for (const restPermu of anagrams(restChar)){
			results.push(firstChar + restPermu)
		}
	}

	return results
}

module.exports = anagrams;
