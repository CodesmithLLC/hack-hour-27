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

 // // O(2^n) linear time
function countStairs(n) {
  if (n < 2) return 1;
  if (n === 2) return 2;
  return countStairs(n - 1) + countStairs(n - 2);
}

// // O(n) linear time
// function countStairs(num, memo) {
//   memo = memo || {};
//   if (memo[num]) return memo[num];
//   if (num <= 1) return 1;
//   return memo[num] = countStairs(num - 1, memo) + countStairs(num - 2, memo);
// }

module.exports = countStairs;


// // factorial count stairs 
// const factorial = (num, tot = 1)=>{
//   if (num === 0){
//     return 1;
//   }
//   else if (num === 1){ 
//     return tot
//   }else{
//     return factorial(num-1, tot * num);
//   }
// }
// const getCombo = (n, steps)=>{
//   const twos = steps-n;
//   const ones = steps-(2*twos);
//   return (factorial(n))/(factorial(ones)*factorial(twos))
// }
// function countStairs(sum) {
//   let combos = 0;
//   for(let i = sum; i >= sum/2; i--){
//     combos += getCombo(i, sum)
//   }
//   return combos
// }







// emilia
// O(2^n) exponential time
// function countStairs(n) {
//   if (n === 0) return 1;
//   if (n < 0) return 0;
//   return countStairs(n - 1) + countStairs(n - 2);
// }

// console.log(countStairs(5));
console.log(countStairs(5, {}));