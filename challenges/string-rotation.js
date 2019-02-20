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
  if (s1.length !== s2.length) return false;
  return isSubstring(s1 + s1, s2);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

// // longer version
// function stringRotation(s1, s2) {
//   // take first letter of s1 and see if it exists in s2
//   // find the indexOf this letter in s2
//   let indexOfFirstLetter = s2.indexOf(s1.charAt(0));
//   if (indexOfFirstLetter === -1) {
//    return false;
//   }
//   // start looping from the beginning of s1 and then the index of s2
//   // i is the incrementer for s1, j is the incrementer for s2
//   for (var i=0, j=indexOfFirstLetter; j<s2.length; i++, j++) {
//    if (s1.charAt[i] !== s2.charAt[j]) {
//     return false;
//    }
//   }
//   // if reach end of s2, then increment from beginning;
//    // after this happens, slice the remaining letters of s1 and the letters of s2 to the index of s2
//   if (s1.slice(i, s1.length) !== s2.slice(0, indexOfFirstLetter)) {
//    return false;
//   }
//   return true;
//  }
//  ​
//  console.log(stringRotation('baby', 'byba'))
