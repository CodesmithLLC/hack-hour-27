/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
  // iterate through shorter array
  // push lower value to output
  // store higher value in q
  // compare each value at i and in q
  const output = [];
  let shorterArray;
  let longerArray;

  if (arr1.length > arr2.length) {
    shorterArray = arr2;
    longerArray = arr1;
  } else {
    shorterArray = arr1;
    longerArray = arr2;
  }

  const q = [];
  let min;
  for (let i = 0; i < shorterArray.length; i += 1) {




    console.log('q length at the top is', q.length);
    if (q.length > 0) {
      console.log('q length is greater than 0');
      min = Math.min(shorterArray[i], longerArray[i], q[0]);
    } else {
      console.log('q length is 0');
      min = Math.min(shorterArray[i], longerArray[i]);
    }
    console.log('q[0] is', q[0]);
    console.log('min is', min);




    if (min == shorterArray[i]) {
      output.push(shorterArray[i]);
      if (longerArray[i] < q[0]) {
        output.push(longerArray[i]);
      } else {
        q.push(longerArray[i]);
      }
    } else if (min == longerArray[i]) {
      output.push(longerArray[i]);
      if (shorterArray[i] < q[0]) {
        output.push(shorterArray[i]);
      } else {
        q.push(shorterArray[i]);
      }
    } else if (min == q[0]) {
      console.log('we hit the else if');

      console.log('we inside the while loop');
      console.log('q is before', q);
      let toPush = q.shift();
      console.log('q is after', q);
      // output.push(q.shift());
      output.push(toPush);
      // console.log('output is now', output);
      min = Math.min(shorterArray[i], longerArray[i]);
      if (min == shorterArray[i]) {
        output.push(shorterArray[i]);
        q.push(longerArray[i]);
      } else {
        output.push(longerArray[i]);
        q.push(shorterArray[i]);
      }

    }
    console.log('we made it through the loop! i was', i);
  }


  output.push(...longerArray.splice(shorterArray.length));

  return output;
}







var my_array = [3, 4, 6, 10, 11, 15, 21];
var another_array = [1, 5, 8, 12, 14, 19];
console.log(mergeArrays(my_array, another_array)); //[1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]

module.exports = mergeArrays;
