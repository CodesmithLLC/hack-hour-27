/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

// without memoization
function solveKnapsack(items, weightAvailable) {
  if (!items.length || !weightAvailable) return 0;
  // if first item is too heavy to fit, consider other items
  if (items[0].weight > weightAvailable) return solveKnapsack(items.slice(1), weightAvailable);
  // else if first item does fit
  else {
    const takeItem = items[0].value + solveKnapsack(items.slice(1), weightAvailable - items[0].weight);
    const leaveItem = solveKnapsack(items.slice(1), weightAvailable);
    return Math.max(takeItem, leaveItem);
  }
}

// solve with Dynamic Programming aka memoization
function solveKnapsack(items, weightAvailable) {
  const memo = [];

  // build the table
  for (let n = 0; n <= items.length; n += 1) {
    memo.push([]);
    for (let w = 0; w <= weightAvailable; w += 1) {
      // if 0 items in consideration or 0 weight available, set value to zero
      if (!n || !w) memo[n][w] = 0;

      // current item is items[n-1] because we start from n = 1
      else if (items[n - 1].weight > w) memo[n][w] = memo[n - 1][w];

      else {
        const take = items[n - 1].value + memo[n - 1][w - items[n - 1].weight];
        const leave = memo[n - 1][w];
        memo[n][w] = (take > leave) ? take : leave;
      }
    }
  }
  // after we exit the for loops, the table (memo) will have been built,
  // with the answer we want saved at the bottom right most corner of the table
  return memo[items.length][weightAvailable];
}

module.exports = solveKnapsack;
