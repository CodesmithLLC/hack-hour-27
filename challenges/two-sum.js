/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

// function twoSum(arr, n) {
//   // make an array
//   let sums = new Set([])
//   // iterate through array to generate all possible sums
//   for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < arr.length; j++){
//       if (i !== j){
//         sums.add(arr[i] + arr[j])
//       }
//     }
//   }
//   // compare to see if n is in the list
//   if (sums.has(n)) return true
//   return false
// }

function twoSum(arr, n) {
  let set = new Set(arr)

  const newArr = (Array.from(set)) 
  let answer = false
  for (let i = 0; i < newArr.length; i++){
    if ( newArr.indexOf(n-newArr[i]) !== -1 ){
      answer = true 
    }
  }
  return answer
}

// console.log(twoSum([2,3,5], 5))

module.exports = twoSum;
