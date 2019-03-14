/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let temp;

  while(arr.length) {
    temp = arr.pop();
    if (arr.includes(n-temp)) return true;
  }

  return false;
}

const arg1 = [
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4],
  [2]
];
console.log('TCL: arg1', arg1)

const arg2 = [10, 8, 1];

for (let i = 0; i < arg1.length; i++) {
  console.log(arg1[i], arg2[i], ' - ', twoSum(arg1[i], arg2[i]));
}


module.exports = twoSum;
