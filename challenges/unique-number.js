/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */

function uniqueNumber(array) {
  return array.reduce((acc, curr) => { return acc ^ curr })
}

module.exports = uniqueNumber;

// // Sort O(nlogn)
// function uniqueNumber(array) {
//   array = array.sort(function (a, b) { return a - b; });
//   for (var i = 0; i < array.length - 1; i += 2) {
//     if (array[i] !== array[i + 1]) {
//       return array[i];
//     }
//   }
//   return array[array.length - 1];
// }

// // Add/Remove Duplicates O(n)
// function uniqueNumber(array) {
//   var store = {};

//   for (var i = 0; i < array.length; i++) {
//     if (array[i] in store) {
//       delete store[array[i]];
//     } else {
//       store[array[i]] = true;
//     }
//   }

//   return Object.keys(store)[0];
// }

// // Bitwise XOR O(n)
// function uniqueNumber(array) {
//   var result = 0;
//   for (var i = 0; i < array.length; i++) {
//     result = result ^ array[i];
//   }
//   return result;
// }





















// sort the array first then iterate
 // Time complexity: O(nlogn)  
 // Space complexity: O(1)
 // not the fastest, but it works ┌༼ σ ‸ σ ༽┐
 function uniqueNumber(array) {
  array = array.sort(function (a, b) { return a - b; }); //sort the array
  //loop through the array in two element increments
  for (let i = 0; i < array.length-1; i+=2) {
      if (array[i] !== array[i+1]) {
          return array[i];
      }
  }
  return array[array.length - 1];
}

// use an object to store values in array as keys
// Time complexity: O(N)
// Space complexity: O(N) 
function uniqueNumber(array) {
  let integers = {};
  for (let i = 0; i<array.length; i++){
    if (!integers[array[i]]){
      integers[array[i]]=1
    }
    else{
      integers[array[i]]++
    }
  }

  for(let key in integers){
    if (integers[key]===1){
      return (parseInt(key));
    }
  }
}

// (this is better (☞ﾟヮﾟ)☞)






// BUT





//WE







//CAN








//DO






//BETTER! 






// ᕙ〳 ರ ︿ ರೃ 〵ᕗ





// use an object to store values in array as keys
// Time complexity: O(N)
// Space complexity: O(1)
// WOOOOO!!! (~˘▾˘)~

function uniqueNumber(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
      result = result ^ array[i];
  }
  return result;
}


console.log(uniqueNumber([1,2,1,3,3]));
