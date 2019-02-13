/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function powEZ(base, power) {
  return base ** power;
}

function pow(base, power) {
  let takeReciprocal = false;
  if (power < 0) takeReciprocal = true;
  if (!power) return 1;
  if (takeReciprocal) {
    return 1 / (base * pow(base, power * -1 - 1));
  } else {
    return base * pow(base, power - 1);
  }
}

const testPairs = [
  { input: [2, 2], expect: 4 },
  { input: [2, 4], expect: 16 },
  { input: [20, 0], expect: 1 },
  { input: [4, -1], expect: 0.25 },
  { input: [0, 2], expect: 0 },
  { input: [0, 0], expect: 1 },
  { input: [3, 3], expect: 27 },
  { input: [0, 0], expect: 1 },
  { input: [-1, 0], expect: 1 },
  { input: [-1, 1], expect: -1 },
  { input: [-1, 2], expect: 1 }
];

testPairs.forEach(pair => {
  const { input, expect } = pair;
  const [base, pow1] = input;
  const output = pow(base, pow1);
  if (output !== expect) {
    console.log(
      `☒ Test failed. Input: ${input}, Expect: ${expect}, Output: ${output}`
    );
  } else {
    console.log(
      `☑ Test passed. Input: ${input}, Expect: ${expect}, Output: ${output}`
    );
  }
});

// module.exports = pow;
