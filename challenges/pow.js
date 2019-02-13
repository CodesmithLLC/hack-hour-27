/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    let sign = Math.sign(power); // if power is positve returns 1, if negative returns negative 1, returns 0 || -0 if zero
    switch(sign) { 
        case 0: return 1;
        case -0: return 1;
        case -1: if (power === 0) return base;
        return 1 / base * pow(base, power + 1)
        default:  if (power === 1) return base;
        return base * pow(base, power - 1);
    }
}

module.exports = pow;
