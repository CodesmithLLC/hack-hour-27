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

function pascalTriangle(numRows, triangle = [[1]]) {
  if (!numRows || numRows < 1) return [];
  if ( numRows === 1 ) return triangle;
  const currRow = [1];
  const prevRow = triangle[triangle.length-1];
  for (let i = 1; i < prevRow.length; i++) {
    currRow.push(prevRow[i] + prevRow[i-1]);
  }
  currRow.push(1);
  triangle.push(currRow);
  return pascalTriangle(numRows-1,triangle);
}

console.log(pascalTriangle(6))

module.exports = pascalTriangle;
