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
  let result = [];
  if (numRows === 0) return result;

  let curLevel = 1;
  while (curLevel <= numRows) {
    let pascal = Array(curLevel);
    pascal[0] = 1;
    pascal[pascal.length - 1] = 1;

    for (let i = 1; i <= curLevel - 2; i++) {
      pascal[i] = result[curLevel - 2][i-1] + result[curLevel - 2][i]
    }
    result.push(pascal)

    curLevel++;
  }
  return result;
}
console.log(pascalTriangle(7))
module.exports = pascalTriangle;
