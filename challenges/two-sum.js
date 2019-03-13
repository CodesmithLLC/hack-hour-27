/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i===j) continue;

            if(n === arr[i] + arr[j])
                return true;
        }
    }
    return false;
}

module.exports = twoSum;
