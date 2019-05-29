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









//joel
// Iterative
function pascalTriangle(numRows) {

  if (numRows < 1) return [];

  const triangle = [[1]];
  let row;

  for (let i = 0; i < numRows - 1; i += 1) {
    row = [1];
    const prevRow = triangle[i];
    // start from j = 1 because the first elem in the row is always 1, and is
    // already in the row
    // we iterate until we are at where the previous row ends.
    // on each iteration we add the two values from the previous row
    for (let j = 1; j < prevRow.length; j += 1) {
      const prevRow = triangle[i];
      row[j] = prevRow[j] + prevRow[j - 1];
    }
    // push the trailing 1 to complete the row
    row.push(1);

    // add the row to the triangle
    triangle.push(row);
  }

  return triangle;
}

// Recursive
function pascalTriangle(n, triangle) {
  if (!n || n < 1) return [];

  // this line handles the initial call which may not pass in a triangle
  triangle = triangle || [[1]];

  // base case : n is 1. Return whatever our triangle is at that point.
  if (n < 2) return triangle;

  // recursive case:
  const row = [1];
  const prevRow = triangle[triangle.length - 1];

  for (let i = 1; i < prevRow.length; i += 1) {
    row.push(prevRow[i] + prevRow[i - 1]);
  }

  // push the trailing 1 to complete the row
  row.push(1);

  // add the row to the triangle
  triangle.push(row);

  // at the end of the recursive case, make the recursive call with n - 1
  // keep in mind, n is only used as a counter.
  // we build from triangle, which will start as [[1]]
  return pascalTriangle(n - 1, triangle);
}