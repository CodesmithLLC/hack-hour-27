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

function pascalTriangle(numRows, output = []) {
  //base
  if (numRows < 1) return [[]];
  if (numRows === 1) {
    output.push([1]);
    return output;
  };
  if (numRows === 2) {
    output.push([1], [1,1])
    return output;
  }
  
  //recursion
  let previous = [...pascalTriangle(numRows - 1)]
  let mostRecent = [...previous[previous.length - 1]];
  let current = [];
  let i = 0;
  do {
    current[i] = (mostRecent[i] ? mostRecent[i] : 0) + (mostRecent[i - 1] ? mostRecent[i - 1] : 0);
    i++;
  } while(current.length < previous.length + 1)
  previous.push(current)
  return previous;
}

// console.log(pascalTriangle(5))
module.exports = pascalTriangle;
