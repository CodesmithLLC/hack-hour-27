// Write a function that returns an array containing the numbers 1 to NUM. 
// Put "fizz" in place of numbers divisble by 3, 
// "buzz" in place of numbers divisble by 5, and 
// "fizzbuzz" in place of numbers divisble by both 3 and 5
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
  let output = [];

  function divBy3(num) {
    return num % 3 === 0;
  }

  function divBy5(num) {
    return num % 5 === 0;
  }

  for (let i = 1; i <= num; i++) {
    if (divBy3(i) && divBy5(i)) {
      output.push('fizzbuzz');
    } else if (divBy3(i)) {
      output.push('fizz');
    } else if (divBy5(i)) {
      output.push('buzz');
    } else {
      output.push(i);
    }
  }

  return output;
}

console.log('0 - ' + fizzbuzz(0));
console.log('5 - ' + fizzbuzz(5));
console.log('10 - ' + fizzbuzz(10));
console.log('20 - ' + fizzbuzz(20));



module.exports = fizzbuzz;
