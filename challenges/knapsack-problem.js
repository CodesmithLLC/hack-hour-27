/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
  const matrix = Array(items.length + 1)
    .fill(null)
    .map(el => Array(weightAvailable + 1).fill(0));

  const WEIGHTS = [0, ...items.map(item => item.weight)];

  // seed the matrix with initial values
  for (let i = 0; i < matrix[0].length; i += 1) {
    matrix[0][i] = 0;
  }

  for (let i = 0; i < items.length; i += 1) {
    matrix[i + 1][0] = items[i].value;
  }

  for (let i = 1; i < matrix.length; i += 1) {
    for (let j = 1; j < matrix[i].length; j += 1) {
      // if the available weight in the bag is LESS than the weight of the item, return the previous highest value
      if (WEIGHTS[i] > j) {
        matrix[i][j] = matrix[i - 1][j];
      }

      if (WEIGHTS[i] === j) {
        if (matrix[i][0] > matrix[i - 1][j]) {
          matrix[i][j] = matrix[i][0];
        } else {
          matrix[i][j] = matrix[i - 1][j];
        }
      }

      if (WEIGHTS[i] < j) {
        if (matrix[i][0] > matrix[i - 1][j - WEIGHTS[i]] + matrix[i][0]) {
          matrix[i][j] = matrix[i][0];
        } else {
          matrix[i][j] = matrix[i - 1][j - WEIGHTS[i]] + matrix[i][0];
        }
      }
    }
  }
  return matrix[matrix.length - 1][matrix[0].length - 1];
}

items = [{ weight: 1, value: 3 }, { weight: 2, value: 4 }, { weight: 3, value: 5 }];
// console.log(solveKnapsack(items, 3)); // returns 7 (from items[0] and items[1])
console.log(solveKnapsack(items, 5)); // returns 9 (from items[1] and items[2])

module.exports = solveKnapsack;
