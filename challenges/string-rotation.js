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
	let superString = s1 + s1;
	if (superString.includes(s2)) return true;
	return false;
}

function stringRotation(s1, s2) {
	return isSubstring(s1, s2);
}

// tests

// console.log(stringRotation('lol', 'lmao'))
// console.log(stringRotation('superman', 'mansuper'))
// console.log(stringRotation('pasta', 'tapas'))


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
