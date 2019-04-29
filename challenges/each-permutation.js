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
  //find all permutations
  let perms = getPerms(arr);
  //invoke cb on all perms
  perms.forEach(perm => callback(perm))
}

function getPerms(arr) {
  let output = [];
  //base
  if (arr.length === 1){
    output.push(arr);
    return output;
  }

  //recurse
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i];
    let everythingElse = arr.slice(0, i).concat(arr.slice(i + 1));
    let innerPerms = getPerms(everythingElse)
    for (let j = 0; j < innerPerms.length; j++) {
      output.push([first, ...everythingElse])
    }
  }
  return output;
}


// console.log(getPerms([1,2,3]))
// eachPermutation([1,2,3], (perm) => console.log(perm))


module.exports = eachPermutation;
