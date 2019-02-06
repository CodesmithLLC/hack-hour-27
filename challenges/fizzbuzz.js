// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
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
  //Guard clauses
	if (typeof num !== 'number') return 'Please enter numbers only';
  if (num % Math.floor(num) !== 0) return 'Whole numbers only';

  //create output array
  let output = [];
  //iterate 1 to num times
  for (let i = 1; i <= num; i ++){
  	//if n % 15 is 0, push "fizzbuzz"
  	if (i % 15 == 0 ) output.push("fizzbuzz");
    //if n % 3 is 0, push "fizz"
    else if (i % 5 == 0) output.push("buzz");
    //if n % 5 is 0, push "buzz"
    else if (i % 3 == 0) output.push("fizz");
    //all other numbers, push that number
    else output.push(i);
  }
  return output;
}

module.exports = fizzbuzz;
