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

  // eval length of string for 1 
  if (str.length == 1) {
    return true;
  } else if (str.length == 0) {
    return false
  }

  // keep track of letter occurences in object
  const ledger = {}

  // iterate through string
  for (let i = 0; i < str.length; i += 1) {
    let char = str[i]
    if (ledger[char] === undefined) {
      ledger[char] = 1;
    } else {
      ledger[char] = ledger[char] + 1;
    }
  }

  // now that we have a ledger, we can evaluate it!


  if (Object.keys(ledger).length === 1) {
    // if there is only one key in the ledger, return true
    return true;
  } else {

    // if there is more than one key, we gotta look at everything
    let alreadyHasOdd = false;
    for (let char in ledger) {
      if (ledger[char] % 2 !== 0) {
        if (alreadyHasOdd) {
          return false;
        } else {
          alreadyHasOdd = true
        }
      }
    }
  }
  return true;
}

module.exports = permPalin;