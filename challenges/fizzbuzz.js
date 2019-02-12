// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, 
//"buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5

function fizzbuzz(num) {
    let output = [];
    let i = 1;
    while(i <= num) {
        if(i % 3 === 0 && i % 5 === 0) {
            output.push('fizzbuzz')
        } else if(i % 5 === 0) {
            output.push('buzz')
        } else if(i % 3 === 0) {
            output.push('fizz')
        } else {
            output.push(i)
        }
        i++
    }
    return output
}
 console.log(fizzbuzz(16));  

module.exports = fizzbuzz;
