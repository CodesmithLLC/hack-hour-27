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

function pascalTriangle(numRows, count = numRows, lastRow = [1,1], output= [ [1], [1,1] ]) {
  // edge cases
  if (numRows === 0) return undefined;
  if (numRows === 1) return [[1]];
  // base case -  end at 2 b/c we start recuing at the 2nd iteration
  if (count === 2) return output;
  // recu case
  const newLastRow = [1];
  newLastRow[lastRow.length] = 1;
  for(let i=1; i<newLastRow.length-1; i++){
    newLastRow[i] = lastRow[i-1] + lastRow[i]
  }
  output.push(newLastRow);
  return pascalTriangle(numRows, count-1, newLastRow, output);

}

console.log(pascalTriangle(6))

module.exports = pascalTriangle;
