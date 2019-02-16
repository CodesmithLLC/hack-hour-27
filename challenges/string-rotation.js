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
  if(s1.length !== s1.length)
    return false;
  
  // let's find start index for s1
  let len = s1.length;
  let startIndex = 0;
  for(let i = 0; i < len; i++)
    if(s1[0] === s2[i]){
      startIndex = i;
      break;
    }

  // now compare both
  // console.log(startIndex);
  for(let i = 0, j = startIndex; i < len; i++ ){
    if(s1[i] !== s2[j]){
      return false;
    }
    else{
      // check end of string then back to start
      (j+1 === len) ? j=0 : j++;
    }
  }

  return true;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

// testing
// console.log(stringRotation("hello", "hello")) //-> true;
// console.log(stringRotation("hello", "llohe")) // -> true
// console.log(stringRotation("hello", "he")) // - > false
// console.log(stringRotation("hello", "ollhe")) // -> false (not a rotation, just an anagram)
// console.log(stringRotation("hellohi", "llohihe")) // -> false (not a rotation, just an anagram)



/*
Check length equal? Y: continue

got length of both:
Find the starting index of compared string
-loop through both until you've checked all


*/