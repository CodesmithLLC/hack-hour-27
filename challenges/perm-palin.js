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

  let exception = 0
  
  let ledger = {}
  let arr = str.replace(" ", "").split('')
	arr.forEach((x)=> {
    if (ledger[x]) ledger[x]++
    else ledger[x] = 1
  })
  for (let v of Object.values(ledger)){
   if (v % 2 === 0) continue
   else exception++
  }
  console.log('exceptions = ', exception)
  if (exception > 1) return false;
  return true;
}


console.log(permPalin('aaabbb'))  //false
console.log(permPalin('aaaabbbbt')) //false
console.log(permPalin('aaeabbebt')) //true
console.log(permPalin('33gghho'))
console.log(permPalin('nurses run'))


module.exports = permPalin;