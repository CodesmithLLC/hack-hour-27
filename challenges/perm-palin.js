/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  if (str === '') return false;
  if (str.length === 1) return true;
  let cleanStr = str.replace(/([^A-Z])+/gi, '').toLowerCase();
  // console.log('cleanStr', cleanStr)
  //strat: iterate thru str, count each character
  let counts = {};
  for (let i = 0; i < cleanStr.length; i++){
    let element = cleanStr[i];
    if (!counts[element]) counts[element] = 1;
    else counts[element]++;
  }
  // console.log('counts', counts)
  //conditions: every character must occur an even number of times. Only one character can be odd.
  let countsArray = Object.values(counts).filter(num => num % 2 !== 0);
  // console.log('countsArray', countsArray);

  return countsArray.length > 1 ? false : true;

}

// let test = `Dammit I'm mad.
// Evil is a deed as I live.
// God, am I reviled? I rise, my bed on a sun, I melt.
// To be not one man emanating is sad. I piss.
// Alas, it is so late. Who stops to help?
// Man, it is hot. I'm in it. I tell.
// I am not a devil. I level "Mad Dog".
// Ah, say burning is, as a deified gulp,
// In my halo of a mired rum tin.
// I erase many men. Oh, to be man, a sin.
// Is evil in a clam? In a trap?
// No. It is open. On it I was stuck.
// Rats peed on hope. Elsewhere dips a web.
// Be still if I fill its ebb.
// Ew, a spider… eh?
// We sleep. Oh no!
// Deep, stark cuts saw it in one position.
// Part animal, can I live? Sin is a name.
// Both, one… my names are in it.
// Murder? I'm a fool.
// A hymn I plug, deified as a sign in ruby ash,
// A Goddam level I lived at.
// On mail let it in. I'm it.
// Oh, sit in ample hot spots. Oh wet!
// A loss it is alas (sip). I'd assign it a name.
// Name not one bottle minus an ode by me:
// "Sir, I deliver. I'm a dog"
// Evil is a deed as I live.
// Dammit I'm mad."`
// console.log(permPalin(test)); //true
//console.log(permPalin('cbaba')); //true
//console.log(permPalin('cbac')); //false
//console.log(permPalin('')); //true
// console.log(permPalin('a')); //true


module.exports = permPalin;