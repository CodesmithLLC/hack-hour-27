/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  if (!str) {
    return false;
  }

  const strArr = Array.from(str);
  const isUsed = Array(strArr.length).fill(false);
  return recurser(strArr, 0, isUsed);
}

function recurser(strArr, idx, isUsed, depth = 0, permuted = []) {
  if (depth === strArr.length) {
    // check if its a palindrome
    if (isPalindrome(permuted)) return true;
    isUsed[idx] = false;
    permuted.pop();
    return false;
  }

  for (let i = 0; i < strArr.length; i += 1) {
    if (!isUsed[i]) {
      permuted.push(strArr[i]);
      isUsed[i] = true;
      if (recurser(strArr, i, isUsed, depth + 1, permuted)) return true;
    }
  }
  isUsed[idx] = false;
  permuted.pop();
  return false;
}

function isPalindrome(permutedStrArr) {
  let frontPtr = 0;
  let backPtr = permutedStrArr.length - 1;
  while (frontPtr < backPtr) {
    if (permutedStrArr[frontPtr] !== permutedStrArr[backPtr]) {
      return false;
    }
    frontPtr += 1;
    backPtr -= 1;
  }
  return true;
}

// console.log('isPalindrome check:', isPalindrome('abab'));

module.exports = permPalin;
