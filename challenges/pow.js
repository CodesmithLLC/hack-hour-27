/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

console.log(pow(2, 3));
console.log(pow(2, 4));
console.log(pow(3, 3));
console.log(pow(4, 4));

function pow(base, power) {
    if(power === 0)
        return 1;
    
    return pow(base, power - 1) * base;
}

module.exports = pow;
