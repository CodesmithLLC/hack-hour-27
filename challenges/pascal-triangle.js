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
  const triangle = []
  let pointer;
  for (let i = 0; i < numRows; i++){
    pointer = generateRow(i, pointer);
    triangle.push(pointer);
  }
  return triangle;
}

function generateRow(n, last = [1]){
  const row = [];
  for (let i = 0; i < n; i++){
    if (i === 0 || i === n-1){
      row.push(1);
    }else{
      row.push(last[i-1] + last[i]);
    }
  }
  return row;
}


module.exports = pascalTriangle;
