/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (power === 0) return 1;
  return base * pow(base, power-1);
}

/*
test values up to base^10
function testBase(base){
  for (let i = 0; i < 10; i ++){
    const expected = base**i;
    const got = pow(base, i);
    console.log(`${base}^${i}`);
    console.log(`expected: ${expected}`);
    console.log(`got: ${got}`);
  }
}

testBase(2);
testBase(5);
*/

module.exports = pow;
