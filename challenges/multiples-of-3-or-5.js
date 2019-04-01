'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000(count = 0, sum = 0) {
  // console.log('count', count, 'sum', sum )
  if(count >= 1000) return sum;
  if((count % 3 === 0)) sum += count;
  else if((count % 5 === 0)) sum += count;
  return sumMultiples3Or5Below1000(count + 1, sum)
}



// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z, count = 0, sum = 0) {
  if(count >= z) return sum;
  if((count % x === 0)) sum += count;
  else if((count % y === 0)) sum += count;
  return sumMultiplesXOrYBelowZ(x, y, z, count + 1, sum)
}

// testing

// console.log(sumMultiples3Or5Below1000())
// console.log(sumMultiplesXOrYBelowZ(3, 5, 1000))

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
