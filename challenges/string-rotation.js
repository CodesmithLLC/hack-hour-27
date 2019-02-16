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
  // anagram: false
  // terverse the tree and organize everything
  // if there's extra string left, false
  // if isSubstring return true or false
  let temp;
  if (s1.length !== s2.length) return false
  if (s1 === s2.split('').reverse().join('')) return false
  let startIndex = s2.indexOf(s1[0])
  let firstHalf = s2.substring(startIndex)
  let secondHalf = s2.substring(0, startIndex)
  temp = firstHalf + secondHalf
  return isSubstring(s1, temp)
}


console.log(stringRotation("hello", "llohe"))
module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
