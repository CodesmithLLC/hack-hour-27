'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  return sumMultiplesXOrYBelowZ(3,5,1000);
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  z = z-1
  let sum = 0;
  const xy = x*y;
  const nOfX = Math.floor(z/x);
  const nOfY = Math.floor(z/y);
  const nOfXY = Math.floor(z/(xy));
  const topX = nOfX * x;
  const topY = nOfY * y;
  const topXY = nOfXY * (xy);
  sum += findSum(x, topX, nOfX);
  sum += findSum(y, topY, nOfY);
  sum -= findSum(xy, topXY, nOfXY);
  return sum;
}

function findSum(start, end, n){
  return (start+end) * n/2
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
