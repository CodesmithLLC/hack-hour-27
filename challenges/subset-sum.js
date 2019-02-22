/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
    const data = array.sort().reverse();
    let sum = 0;

    for(let i = 0; i < data.length; i++){
        // console.log('loop');
        if(data[i] === target) return true;

        // if(data[i] > target) continue;

        // if(data[i] < target){
        else{
            sum += data[i];
            // console.log(sum);
            if(sum === target) return true;

            if(subsetSum(data.slice(i+1), target - sum) === true){
                return true;
            }else{
                sum -= data[i];
            }
        }
    }

    return false;
}


module.exports = subsetSum;

// console.log(subsetSum([3, 7, 4, 2], 5)); // - > true, 3 + 2 = 5

// console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)); // -> true, 3 + 12 + 5 + 12 = 32
// console.log(subsetSum([8, 2, 4, 12], 13)); // -> false
// console.log(subsetSum([8, -2, 1, -3], 6)); // -> true, 8 + 1 + (-3) = 6