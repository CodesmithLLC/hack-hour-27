/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

//DIDN'T GET
function solveKnapsack(items, weightAvailable) {
  //create a hash map for items
  let hashMap = {};
  let value = 0;
  items.forEach(item => {
    hashMap[item.weight] = item.value;
  })
  console.log('hashMap', hashMap)
  let weights = Object.keys(hashMap).map(elem => Number(elem));
  let lowestWeightIndex = 0;
  console.log('weights', weights)
  //while loop for weightAvailable; subtract from weightAvailable the highest weight possible until WA is zero, then return value
  while (weightAvailable > 0) {
    if (weightAvailable >= weights[lowestWeightIndex]) {
      value += hashMap[JSON.stringify(weights[lowestWeightIndex])]; //add to value
      weightAvailable -= weights[lowestWeightIndex]; //decrease WA
      delete hashMap[JSON.stringify(weights[lowestWeightIndex])]; //double check this
      weights.splice(lowestWeightIndex, 1)//remove the weight from the weights array as well
    } else {
      lowestWeightIndex++;
    }

  }

  return value;

};

items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
// console.log(solveKnapsack(items, 3)); // returns 7 (from items[0] and items[1])
console.log(solveKnapsack(items, 5)); // returns 9 (from items[1] and items[2])

module.exports = solveKnapsack;
