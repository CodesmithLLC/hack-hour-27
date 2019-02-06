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
	const output = [];
	for (let i = 0; i < num; i++){
		const num = i+1;
		let word = '';
		if (num%3 === 0) {
			word += 'fizz';
		}	
		if (num%5 === 0){
			word += 'buzz';
		}
		if (word){
			output.push(word);
		}else{
			output.push(num);
		}
	}
	return output;
}
console.log(fizzbuzz(16))

module.exports = fizzbuzz;
