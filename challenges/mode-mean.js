/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  return (mode(array) === mean(array));
}

function mode(arr){
  //create and maintain count of all elements
  const counts = {};
  arr.forEach((item)=>{
    if (!counts[item]){
      counts[item] = 0;
    }
    counts[item]++;
  })

  // get an initial mode;
  let mode = arr.reduce((a,b)=>{
      if (counts[a] > counts[b]){
        return a;
      }
      return b;
    })
  
  // checks if any of the other possible modes are greater;
  arr.forEach((item)=>{
    if (counts[item] === counts[mode]){
      if (item > mode) mode = item;
    }
  })
  return mode;
  
}
/* test for mode:
const testMode = [0, 2, 5, 3, 3, 3, 7, 7, 7, 24 ];
console.log('mode. expect: 7, got: ' + mode(testMode));
*/

function mean(arr){
  return Math.floor(arr.reduce((a,b)=>{return a+b})/arr.length);
}
/* test for mean:
const testMean = [2, 4, 6, 8];
console.log('mean. expect: 5, got: ' + mean(testMean));
*/
module.exports = modemean;
