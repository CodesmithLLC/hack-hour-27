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
    // create an array
    const output = [];
    let current = 1;
    // iterate over the num
    while (current <= num) {
        if (current % 5 === 0 && current % 3 === 0) {
            output.push("fizzbuzz");
            // if the current num is divisible by both put "fizzbuzz"
        } else if (current % 3 === 0) {
            // if the current num is divisible by 3 put "fizz"
            output.push("fizz");
        } else if (current % 5 === 0) {
            // if the current num is divisible by 5 put " buzz"
            output.push("buzz");
        } else {
            //otherwise push the current number into the array
            output.push(current)
        }
            //increment the current number by 1
        current += 1;
    }
    return output;
}

module.exports = fizzbuzz;
