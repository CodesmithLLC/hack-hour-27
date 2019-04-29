/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array.

Permutations must NOT repeat any of the array elements.

No return value is necessary.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

function eachPermutation(arr, callback) {
  const accumulated = [];
  let idx = 0;
  const isActive = Array(arr.length).fill(false);
  permHelper(arr, 0, accumulated, callback, isActive);
}

function permHelper(arr, idx, acc, cb, active) {
  if (idx === arr.length) {
    cb(acc);
    return;
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (!active[i]) {
      acc.push(arr[i]);
      active[i] = true;
      permHelper(arr, idx + 1, acc, cb, active);
      active[i] = false;
      acc.pop();
    }
  }
}

// console.log(eachPermutation([1, 2, 3, 4], val => console.log(val)));

module.exports = eachPermutation;
