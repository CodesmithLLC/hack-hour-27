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
  getPerms(arr).forEach(e=>callback(e));
}

function getPerms(array) {
  if (array.length === 1) return [array];
  const perms = [];
  
  for (let i = 0; i < array.length; i++) {
    const first = array[i];
    const remaining = array.slice();
    remaining.splice(i,1);
    getPerms(remaining).forEach(e=>{
      perms.push([first].concat(e));
    })
  }

  return perms;
}



module.exports = eachPermutation;

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});

// console.log(getPerms([1,2,3]));