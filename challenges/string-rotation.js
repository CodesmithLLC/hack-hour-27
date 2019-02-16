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

let container = [];
let possibleCombos = [];
let lengthOfS2 = s2.length;


for (let i=0; i<s1.length; i++){
	for (let j=0; j<s2.length; j++){
		if (s1[i] === s2[j]){
			container.push(j);
		}
	}
}

//now we have possible indexes to rearrage string 2

for (let arrStartingPos of container){
	let stringRemix = [];
	for (let xt = 0; xt < lengthOfS2; xt++){
	if (arrStartingPos >= lengthOfS2) {
		arrStartingPos = arrStartingPos - lengthOfS2
	}
	stringRemix.push(s2[arrStartingPos]);
	if (xt+1 === lengthOfS2){
		possibleCombos.push(stringRemix.join(""))

	}
	arrStartingPos++;
}	
}

for (let result of possibleCombos){
	if (result === s1){
		return true
	}
};

return false;

}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};


