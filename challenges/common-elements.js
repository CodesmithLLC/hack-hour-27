// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

// time-conplexity: O(N) -> where N = total size of all four arrays
// space-complexity: O(N) -> where N = total size of all four arrays
function commonElements(array1, array2, array3, array4) {
  const memory = {};
  [...arguments].forEach((arr, index) => {
    for (let i = 0; i < arr.length; i += 1) {
      if (!memory[arr[i]]) memory[arr[i]] = 1;
      else if (memory[arr[i]] === index) memory[arr[i]] += 1;

      // way to write two conditionals using ternary operator
      // !memory[arr[i]] ? memory[arr[i]] = 1 : memory[arr[i]] === index ? memory[arr[i]] += 1 : null;
    }
  });
  // filter out values that exist in all four arrays
  const common = Object.keys(memory).filter(key => memory[key] === arguments.length);
  if (!common.length) return 'Nothing in Common!';
  return common;
}

module.exports = commonElements;
