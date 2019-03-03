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
 possible rotations:
  hello
  elloh
  llohe
  lohel
  ohell
  hello
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if (s1 === s2) return true;
  if (s1.length !== s2.length) return false;

  let index1 = s1.indexOf(firstUnique(s1));
  let index2 = s2.indexOf(s1[index1]);

  while (index1 < s1.length - 1) {
    index1 += 1;
    index2 += 1;
    if (index2 > s2.length - 1) {
      index2 = 0;
    }
    if (s1[index1] !== s2[index2]) {
      return false;
    }
  }
  return true;
}

function firstUnique(str) {
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]] === undefined) {
      hash[str[i]] = 0;
    }
    hash[str[i]] += 1;
  }
  for (let i = 0; i < str.length; i++) {
    if(hash[str[i]] === 1) {
      return str[i];
    }
  }
}

// console.log(stringRotation('hello', 'elloh'));
// console.log(stringRotation('hello', 'llohe'));
// console.log(stringRotation('hello', 'lohel'));
// console.log(stringRotation('hello', 'ohell'));
// console.log(stringRotation("hello", "he"));
console.log(stringRotation("lol", "oll"));
// console.log(firstUnique('lol'))

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};


// stringRotation('hello', 'ohell')
// stringRotation('hello', 'hello')


// console.log(isSubstring('hello', ''))