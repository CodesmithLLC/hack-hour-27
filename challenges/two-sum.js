/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // hello old friend
  // weve got a target number, yay!
  let output = false;
  const compliments = new Set();

  // lets iterate through the array
  arr.forEach(cur => {
    // if the cur value matches n, WE RETURN TRUE
    if (cur === n) {
      output = true;
    } else {
      // if the cur value doesnt match n, we subtract cur value from n and get compliment number
      let comp = n - cur;

      // we check the compliments object for the cur number. if its there WE RETURN TRUE
      if (compliments.has(cur)) {
        output = true;
      } else {
        // if not, we put the compliment in the compliments object
        compliments.add(comp);
      }
    }
    // we move on to the next cur value
  });

  // if, AFTER ALL THAT, we dont return true, WE RETURN FALSE
  return output;

}

module.exports = twoSum;
