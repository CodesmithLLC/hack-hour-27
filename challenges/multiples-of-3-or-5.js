'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  //50 IQ: iterate from 1 to 1000, if number % 3 or 5 = 0, push to storage array if doesn't exist
  // reduce array
  let storage = [];
  for (let i = 1; i < 1000; i++){
    if (i % 5 === 0){
      if (!storage.includes(i)) storage.push(i)
    }
    if (i % 3 === 0){
      if (!storage.includes(i)) storage.push(i)
    }
  }
  // console.log('storage', storage)

  return storage.reduce( (acc, val) => acc + val);
}

//console.log(sumMultiples3Or5Below1000())

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let storage = [];
  for (let i = 1; i < z; i++){
    if (i % x === 0){
      if (!storage.includes(i)) storage.push(i)
    }
    if (i % y === 0){
      if (!storage.includes(i)) storage.push(i)
    }
  }
  // console.log('storage', storage)
  return storage.reduce( (acc, val) => acc + val);
}

// console.log(sumMultiplesXOrYBelowZ(3, 5, 10))


const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
