/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */



function countStairs(n) {

  const baseWay = [];
  for (let i = 0; i < n; i += 1) {
    baseWay.push(1);
  }

  const solutions = [baseWay];

  for (let i = 0; i < solutions.length; i += 1) {
    console.log('SOLUTIONS AT I IS', solutions[i]);
    wayFinder(solutions[i], solutions);
  }

  function wayFinder(arr, target) {
    for (let i = 0; i < arr.length; i += 1) {
      let newWay = arr.slice(0);
      if (arr[i] === 1 && arr[i + 1] === 1) {
        newWay.splice(i, 2, 2);
        target.push(newWay);
      }
    }
  }

  const uniqueSolutions = Array.from(new Set(solutions.map(JSON.stringify)), JSON.parse)

  return uniqueSolutions.length;

}

module.exports = countStairs;
