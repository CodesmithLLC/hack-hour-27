/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  let output = [];
  for (let i = 0; i < numRows; i++) {
    output.push(makeNextRow(output[i-1]));
  }
  return output;
}

function makeNextRow(prevRow) {
  if (!prevRow) return [1];
  let nextRow = [1];
  for (let i = 0; i < prevRow.length; i++) {
    nextRow.push(prevRow[i] + prevRow[i+1] || 1);
  }
  return nextRow;
}

module.exports = pascalTriangle;

// console.log(pascalTriangle(6));