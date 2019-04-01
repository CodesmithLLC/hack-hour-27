'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;

  const threes = floor(1000 / 3);
  const fives = floor(1000 + 1 / 5);
  const fifteens = floor(1000 / 15);

  sum =
    3 * ((threes * (threes + 1)) / 2) +
    5 * ((fives * (fives + 1)) / 2) -
    15 * ((fifteens * (fifteens + 1)) / 2);

  return sum;
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;

  let x_count;
  let y_count;
  let xy_count;

  if (z % x === 0) {
    x_count = Math.floor((z - 1) / x);
  } else {
    x_count = Math.floor(z / x);
  }

  if (z % y === 0) {
    y_count = Math.floor((z - 1) / y);
  } else {
    y_count = Math.floor(z / y);
  }

  const xy = x * y;

  if (z % xy === 0) {
    xy_count = Math.floor((z - 1) / xy);
  } else {
    xy_count = Math.floor(z / xy);
  }

  sum =
    x * ((x_count * (x_count + 1)) / 2) +
    y * ((y_count * (y_count + 1)) / 2) -
    xy * ((xy_count * (xy_count + 1)) / 2);

  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ
};

console.log(sumMultiplesXOrYBelowZ(3, 5, 16));

module.exports = objectToExport;
