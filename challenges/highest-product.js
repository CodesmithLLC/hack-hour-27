/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// function highestProduct(array) {
//   let highest;
//   for (let i = 0; i < array.length - 2; i += 1) {
//     for (let j = 1; j < array.length - 1; j += 1) {
//       for (let k = 2; k < array.length; k += 1) {
//         const prod = array[i] * array[j] * array[k];
//         if (!highest || prod > highest) {
//           highest = prod;
//         }
//       }
//     }
//   }
//   return highest;
// }

function highestProduct(array) {
  if (array.length < 3) return 0;

  array.sort((a, b) => a - b);
  const newArr = [];

  for (let i = 1; i < array.length; i += 1) {
    if (array[i - 1] < 0 && array[i] < 0) {
      newArr.push(array[i - 1] * -1);
      newArr.push(array[i] * -1);
      i += 1;
    } else {
      newArr.push(array[i]);
    }
  }

  newArr.sort((a, b) => a - b);

  const len = newArr.length;
  return newArr[len - 1] * newArr[len - 2] * newArr[len - 3];

  // console.log(array);

  // for (
  //   let i = 0;
  //   i < array.length && array[i] < 0 && array[i + 1] < 0;
  //   i += 1
  // ) {
  //   array[i] = array[i] * -1;
  // }
  // array.sort((a, b) => a - b);
  // return (
  //   array[array.length - 1] * array[array.length - 2] * array[array.length - 3]
  // );
}

module.exports = highestProduct;
