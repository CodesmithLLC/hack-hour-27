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
  const input = str.split('');
  let popped = '';
  let unmatched = 0;

  while (input.length > 0) {
    // remove an item from array
    popped = input.pop();
    // check if item exists in remaining array
    if (input.indexOf(popped) > -1) {
      // found a pairing! remove that from the array.
      input.splice(input.indexOf(popped), 1);
    } else {
      // increment unmatched
      unmatched += 1;
    }
  }
  return unmatched <= 1;
}

// const test = ['cbac', 'abab', 'cbaba', 'a'];

// for (let i = 0; i < test.length; i++) {
//   console.log(test[i], ' - ', permPalin(test[i]));
// }


module.exports = permPalin;

//
// Hack Hour Testing Template
//
// const test = [];

// for (let i = 0; i < test.length; i++) {
//   console.log(test[i], ' - ', functionToTest(test[i]));
// }