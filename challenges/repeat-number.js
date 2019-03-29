/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  // O(n) time
  let set = new Set();
  let out;
  let counter = 0;
  let val = 0;

  while (!out) {
    val = array[counter++];
    if (set.has(val))
      out = val;
    else
      set.add(val);
  }

  return out;
}

// function repeatNumbers(array) {
//   // O(n) space
//   array.sort((a, b) => a-b);
//   console.log("TCL: repeatNumbers -> array", array)

//   let out;
//   let counter = 0;

//   while(!out) {
//     if (array[counter+1] - array[counter] === 0)
//       out = arr[counter];
//     counter += 1;
//   }

//   return out;


// }

let arr = [1,2,3,6,5,4,4,7,8,9]

console.log(repeatNumbers(arr));

module.exports = repeatNumbers;

1 2 3 4 = 10

1 2 3 3 = 9