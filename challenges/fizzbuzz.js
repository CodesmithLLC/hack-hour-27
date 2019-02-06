// Write a function that returns an array containing the numbers 1 to NUM. 
// Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers 
// divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
  if (typeof num !== 'number') {
    return 'Error: fizzbuzz only accepts numbers';
  } else {

    // when we would insert a number that is divisible by 3, we should replace that number with the string 'fizz'
    // when we would insert a number that is divisible by 5, we should replace that number with the string 'buzz'

    // return an array
    const output = [];
    // for positive numbers
    // array should contain numbers 1 - num argument
    if (num >= 1) {
      for (let i = 1; i <= num; i += 1) {
        // when we would insert a number that is disible by both 3 and 5, we should replace that number with the string 'fizzbuzz'
        if (i % 3 === 0 && i % 5 === 0) {
          output.push('fizzbuzz');
        } else if (i % 5 === 0) {
          output.push('buzz');
        } else if (i % 3 === 0) {
          output.push('fizz');
        }
        else {
          output.push(i);
        }
      }
    }
    else if (num <= 0) {
      for (let i = 1; i >= num; i -= 1) {
        // when we would insert a number that is disible by both 3 and 5, we should replace that number with the string 'fizzbuzz'
        if (i % 3 === -0 && i % 5 === -0) {
          output.push('fizzbuzz');
        } else if (i % 5 === -0) {
          output.push('buzz');
        } else if (i % 3 === -0) {
          output.push('fizz');
        }
        else {
          output.push(i);
        }
      }
    }
    // return an array
    return output;
  }
}
console.log('--FIZZBUZZ TESTING--');
console.log('---testing positive numbers');
console.log('fizzbuzz(16): expect -> fizzs, buzzs, and a fizzbuzz | actual ->', fizzbuzz(16));
console.log('fizzbuzz(7): expect -> fizzs, buzzs | actual ->', fizzbuzz(7));
console.log('fizzbuzz(3): expect -> a fizz| actual ->', fizzbuzz(3));
console.log('fizzbuzz(1): expect -> [1]| actual ->', fizzbuzz(1));
console.log('---testing negative numbers');
console.log('fizzbuzz(-2): expect -> [1, fizzbuzz, -1, -2]| actual ->', fizzbuzz(-2));
console.log('fizzbuzz(-15): expect -> [1, fizzbuzz, -1, -2, fizz, -4, buzz, etc....]| actual ->', fizzbuzz(-16));
console.log('---testing errors');
console.log('fizzbuzz(notanumber): expect -> Error | actual -> ', fizzbuzz('2'));

module.exports = fizzbuzz;
