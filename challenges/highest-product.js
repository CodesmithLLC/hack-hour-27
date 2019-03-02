/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array)) return 0;
  if (array.length < 3) return 0;

  // get all the negative numbers and sort them a - b
  const negArr = array.filter(el => el < 0).sort((a, b) => a - b);

  // sort the original array b-a
  const arr = array.sort((a, b) => b - a);

  if (negArr.length < array.length && negArr.length > 2) {
    if (Math.abs(negArr[0]) >= arr[2] && Math.abs(negArr[1]) >= arr[2]) {
      array.push(Math.abs(negArr.shift()));
      array.push(Math.abs(negArr.shift()));
    }
  }

  // console.log('\nTCL: highestProduct -> arr', arr);
  // console.log('TCL: highestProduct -> negArr', negArr, '\n');

  return arr[0] * arr[1] * arr[2];
}

module.exports = highestProduct;

// console.log(
//   'TCL: highestProduct([1, 2, 3, 4, 5, 6, 7, 8]);',
//   highestProduct([1, 2, 3, 4, 5, 6, 7, 8])
// );
// console.log('TCL: highestProduct([1,2,3,4]);', highestProduct([1, 2, 3, 4]));

console.log(
  'TCL: highestProduct([-2,-3,-4,-5]);',
  highestProduct([2, 3, -4, -5])
);
console.log(
  'TCL: highestProduct([2, 3, 3, 4, 5, -4, -5]);',
  highestProduct([2, 3, 3, 4, 5, -4, -5])
);
console.log(
  'TCL: highestProduct([2, 3, 3, 4, 5, 9, 7, -4, -5, -6, -8]);',
  highestProduct([2, 3, 3, 4, 5, 9, 7, -4, -5, -6, -8])
);

// console.log('TCL: highestProduct([1, 2]);', highestProduct([1, 2]));
