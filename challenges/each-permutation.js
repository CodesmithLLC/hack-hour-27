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

  function perms(arry) {
    if (arry.length === 1) return [arry];

    const allPerms = [];
    for (let i = 0; i < arry.length; i += 1) {
      const first = arry[i];
      const endPerms = perms([...arry.slice(0, i), ...arry.slice(i+1)]);
      for (let j = 0; j < endPerms.length; j += 1) {
        allPerms.push([first, ...endPerms[j]]);
      }
    }
    return allPerms;
  }

  perms(arr).forEach(callback);
}

// eachPermutation([1, 2, 3], function(perm) {
//   console.log(perm)
// });

module.exports = eachPermutation;
