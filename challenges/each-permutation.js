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
  let output = [];
  const permHelper = (arr, combo = []) => {
    if(arr.length === 0) {
      output.push(combo);
    } else {
      arr.forEach( ele => {
        newCombo = [...combo];
        newCombo.push(ele);
        permHelper(arr.slice(1), newCombo);
      });
    }
  }

  permHelper(arr);
  output.forEach( combo => callback(combo) );

}

// tests

// eachPermutation([1, 2, 3], (perm) => console.log(perm) );

module.exports = eachPermutation;
