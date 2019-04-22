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

const factorial = (num, tot = 1)=>{
  if (num === 0){
    return 1;
  }
  else if (num === 1){ 
    return tot
  }else{
    return factorial(num-1, tot * num);
  }
}

const getCombo = (n, steps)=>{
  const twos = steps-n;
  const ones = steps-(2*twos);
  return (factorial(n))/(factorial(ones)*factorial(twos))
}

function countStairs(sum) {
  let combos = 0;
  for(let i = sum; i >= sum/2; i--){
    combos += getCombo(i, sum)
  }
  return combos
}

module.exports = countStairs;
