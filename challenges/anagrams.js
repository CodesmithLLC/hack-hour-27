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
  const strArr = Array.from(string);
  const anagram = [];

  const truthTable = Array(string.length).fill(false);

  for (let i = 0; i < strArr.length; i += 1) {
    const char = strArr[i];
    truthTable[i] = true;
    recurser(strArr, char, truthTable, anagram);
    truthTable[i] = false;
  }

  return anagram;
}

function recurser(strArr, letter, truthTable, anagram, buildUp = []) {
  buildUp.push(letter);
  // console.log(buildUp);
  if (buildUp.length === strArr.length) {
    anagram.push(buildUp.join(''));
    buildUp.pop();
    return;
  }

  for (let i = 0; i < strArr.length; i += 1) {
    const char = strArr[i];
    if (!truthTable[i]) {
      truthTable[i] = true;
      recurser(strArr, char, truthTable, anagram, buildUp);
      truthTable[i] = false;
    }
  }
  buildUp.pop();
}

// a

module.exports = anagrams;
