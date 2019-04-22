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
  let results = [[1], [1, 1]];
  if (n < 2) {
    return results.slice(0, n);
  }
  for (i = 2; i < n; i++) {
    var newRow = [];
    var lastRow = results[results.length - 1];
    for (var j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        newRow.push(1);
      } else {
        newRow.push(lastRow[j - 1] + lastRow[j]);
      }
    }
    results.push(newRow);
  }
  return results
}

module.exports = pascalTriangle;
