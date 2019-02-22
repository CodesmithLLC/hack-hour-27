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
    // create helper function to add each element
    let add = (a, b) => a + b;
    // base case: if the #s left the arr equal the target value, return true
    if (array.reduce(add, 0) === target) return true;
    // else, determine if some elements in the array add up to the target value by cutting out the element at the index from the array and recursively calling subsetSum
    else return array.some((element, index) => {
        return subsetSum(array.slice(0, index).concat(array.slice(index + 1, array.length)), target) === true;
    })
}

module.exports = subsetSum;
