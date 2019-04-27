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
  const possibles = [];
  const getCombinations = (current, remaining) => {
    for (let i = 0; i < remaining.length; i++) {
      const newCombo = {
        weight: current.weight + remaining[i].weight,
        value: current.value + remaining[i].value
      };
      possibles.push(newCombo);
      getCombinations(newCombo, remaining.slice(i + 1));
    }
  }
  getCombinations({weight: 0, value: 0}, items);
  // console.log(possibles);
  possibles.sort((a,b)=>b.value-a.value);
  // console.log(possibles);
  for (let i = 0; i < possibles.length; i++) {
    if (possibles[i].weight <= weightAvailable) return possibles[i].value;
  }
  return 0;
};

module.exports = solveKnapsack;


// const items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
// console.log(solveKnapsack(items, 3)); // returns 7 (from items[0] and items[1])
// console.log(solveKnapsack(items, 5)); // returns 9 (from items[1] and items[2])