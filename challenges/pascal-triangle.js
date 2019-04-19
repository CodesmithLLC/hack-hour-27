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

function generateNewRow(prevRow) {
  const newRow = [1];
  for (let i = 0; i < prevRow.length; i += 1) {
    const curVal = prevRow[i];
    const nextVal = prevRow[i + 1];
    if (nextVal !== undefined) {
      newRow.push(curVal + nextVal);
    }
  }
  newRow.push(1);
  return newRow;
}

function pascalTriangle(numRows) {





  if (numRows === 1) {
    return [[1]];
  } else if (numRows === 2) {
    return [[1], [1, 1]];
  } else {
    const output = [[1], [1, 1]];
    let count = 2;

    while (count < numRows) {
      output.push(generateNewRow(output[output.length - 1]));
      count += 1;
    }
    return output;
  }
}

module.exports = pascalTriangle;
