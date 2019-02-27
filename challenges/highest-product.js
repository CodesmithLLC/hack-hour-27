/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array)) return 0;
  if (array.length < 3) return 0;

  const negArr = array.filter(el => el < 0);
  if (negArr.length < array.length && negArr.length > 2) {
    negArr.sort((a, b) => a - b);
    array.push(negArr.shift() * -1);
    array.push(negArr.shift() * -1);
  }

  const arr = array.sort((a, b) => b - a);
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
  highestProduct([-2, -3, -4, -5])
);
console.log(
  'TCL: highestProduct([2,3,3,4,5,-4,-5]);',
  highestProduct([2, 3, 3, 4, 5, -4, -5])
);

// console.log('TCL: highestProduct([1, 2]);', highestProduct([1, 2]));
