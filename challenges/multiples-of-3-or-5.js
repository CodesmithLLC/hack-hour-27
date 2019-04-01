'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let num = 999;
  return (Math.floor(num/3)*(3*1 + 3*Math.floor(num/3))/2) + (Math.floor(num/5)*(5*1 + 5*Math.floor(num/5))/2) - (Math.floor(num/15)*(15*1 + 15*Math.floor(num/15))/2)
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  return (Math.floor((z-1)/x)*(x + x*Math.floor((z-1)/x))/2)
    + (Math.floor((z-1)/y)*(y + y*Math.floor((z-1)/y))/2)
    - (Math.floor((z-1)/(x*y))*((x*y) + (x*y)*Math.floor((z-1)/(x*y)))/2)
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
