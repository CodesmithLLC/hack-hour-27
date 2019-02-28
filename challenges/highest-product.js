/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array) || array.length < 3) return 0;

  // array.sort((a,b) => a - b);

  // //case for all negatives array: grab 3 smallest values
  // if (array.every(x => x < 0)){
  //   return array.slice(-3).reduce( (acc, val) => acc * val);
  // }

  // //case for non-negative array
  // //remove all zeroes from array
  // let candidates = [];
  // let negativeAbs = [];
  // array.forEach( num => {
  //   if (num < 0) negativeAbs.push(Math.abs(num))
  // })
  // if (negativeAbs.length >= 2) candidates.push(...negativeAbs);
  // candidates.push(...array.slice(-3))
  // candidates.sort((a,b) => a - b);
  // console.log('candidates', candidates)
  // return candidates.slice(-3).reduce((acc, val) => acc * val) 
  let big1 = -Infinity;
  let big2 = -Infinity;
  let big3 = -Infinity;
  let small1 = Infinity;
  let small2 = Infinity;
  array.forEach( num => {
    if (num < small1){
      small2 = small1;
      small1 = num;
    }
    if (small1 < num && num < small2){
      small2 = num;
    }
    if (num > big1){
      big3 = big2;
      big2 = big1;
      big1 = num;
    }
  })
  let candidates = [small1, small2, big3, big2, big1]
  console.log(candidates)
  return Math.max( small1 * small2 * big1, big1 * big2 * big3)
}

console.log(highestProduct([-9000, -200, -8000, -5000, -32, -1, -5, -6, -8, -10, -11, -5, -4000])) //all negs
console.log(highestProduct([-9000, -200, -8000, -5000, -32, -1, -5, 9000, -6, -8, -10, -11, -5, -4000])) //big negs
console.log(highestProduct([-4000, 1, 4, 2,7, 8, 1, 92, 73, 1, 11])) //normal
console.log(highestProduct([-4000, 0, 1])) //normal
console.log(highestProduct([-10, -9, -8, -7, -6, -5, -4, -3, -2, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

module.exports = highestProduct;
