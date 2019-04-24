/* 
A zero-indexed array A consisting of N different integers is given. 
The array contains integers in the range [1..(N + 1)], which means 
that exactly one element is missing.Your goal is to find that missing element.
Write a function that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Assume that:
 * N is an integer within the range [0..100,000];
 * the elements of A are all distinct;
 * each element of array A is an integer within the range [1..(N + 1)].
  Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).

Challange: 
  ** cannot use additional storage, variables are okay not any TYPE of object
  ** keep in mind time complexity
*/
function missingNum(Array) {
  // establish min and max
  const max = Math.max(...Array);
  const min = Math.min(...Array);

  // remove minimum
  Array.splice(Array.indexOf(min), 1);
  // remove maximum
  Array.splice(Array.indexOf(max), 1);
  const expectedArray = [];
  for (let i = min + 1; i < max; i += 1) {
    expectedArray.push(i);
  }

  let expectedXor = 0;
  for (let i = 0; i < expectedArray.length; i += 1) {
    expectedXor ^= expectedArray[i];
  }

  let partialXor = 0;
  for (let i = 0; i < Array.length; i += 1) {
    partialXor ^= Array[i];
  }
  // exor the expected array with Array
  return expectedXor ^ partialXor;
}

module.exports = missingNum;