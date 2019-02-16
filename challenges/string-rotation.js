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

// this only works if there's only one instance of first char in first string
function stringRotation(s1, s2) {
  let i = s2.indexOf(s1.charAt(0));
  if (i === -1) return false;
  let str2 = s2.substring(i).concat(s2.substring(0,i));
  return isSubstring(s1, str2);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

// console.log(stringRotation("hello", "hello"));
// console.log(stringRotation("hello", "llohe"));
// console.log(stringRotation("hello", "he"));
// console.log(stringRotation("hello", "ollhe"));
