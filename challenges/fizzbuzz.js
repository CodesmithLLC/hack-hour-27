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
let result = [];
let variable;
for ( let i =1; i <= num; i++){
	if (i%5 == 0 && i%3 == 0){
		variable = 'fizzbuzz'
	} else if (i%3 == 0){
		variable = 'fizz'
	} else if (i%5 == 0){
		variable = 'buzz'
	} else {
		variable = i
	}
	result.push(variable)
}
return result;
}


console.log('fizzbuzz with arg set to 15 , expect ' + `[ 1,
  2,
  'fizz',
  4,
  'buzz',
  'fizz',
  7,
  8,
  'fizz',
  'buzz',
  11,
  'fizz',
  13,
  14,
  'fizzbuzz']`)
console.log(fizzbuzz(15));
module.exports = fizzbuzz;
