/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  let firstCharS1 = '';

  if (s1.length > 2) {
    firstCharS1 = s1.substring(0,2); // first character of string 1
  } else {
    firstCharS1 = s1[0]; // first character of string 1
  }
	// console.log('TCL: stringRotation -> firstCharS1', firstCharS1)

  let indexFirstCharS2 = s2.indexOf(firstCharS1);
  // console.log('TCL: stringRotation -> indexFirstCharS2', indexFirstCharS2)

  let newS2 = '';

  // build out new string 2 starting from where you found the first instance of the first 2 letters.
  for (let i = indexFirstCharS2; i < s2.length; i++) {
    newS2 += s2[i];
  }
  // console.log('TCL: stringRotation -> newS2', newS2)

  // build out the end of new String 2 from 0 - indexFirstCharS2

  for (let i = 0; i < indexFirstCharS2; i++) {
    newS2 += s2[i];
  }

  // console.log('TCL: stringRotation -> newS2', newS2)
  if (s1.length !== s2.length) {
    return false;
  }
  return isSubstring(s1, newS2);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

console.log(stringRotation("hello", 'hello'));
console.log(stringRotation("hello", 'llohe'));
console.log(stringRotation("hello", 'he'));
console.log(stringRotation("hello", 'ollhe'));
console.log(stringRotation("he", 'eh'));
console.log(stringRotation("h", 'o'));
console.log(stringRotation("he", 'oh'));