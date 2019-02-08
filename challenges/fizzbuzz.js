// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers 
// divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 
// 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2, //                     'fizz',
//                     4, //                     'buzz',
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
    // goal: el % 3 === 0: 'fizz', el % 5 ===0: 'buzz',  el % 3 & 5 === 0: 'fizzbuzz'
    // loop through array
    // check each element if a match, convert
    // if no match, move on
    // return mutated array

    num.forEach((elem, i) => {
        if(elem % 3 ===  0)
            num[i] = 'fizz';
        if(elem % 5 ===  0)
            num[i] = 'buzz';
        if(elem % 3 ===  0 && elem % 5 === 0)
            num[i] = 'fizzbuzz';
    });
    return num;
}
//let x = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16, 15, 9, 1 ];

module.exports = fizzbuzz;
