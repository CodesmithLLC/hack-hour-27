/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    //sort the array in ascending order
    array.sort((a, b) => a - b);
    // set the array to be the first 3 integers
    let highest3 = [array[array.length - 3], array[array.length - 2], array[array.length - 1]];
    // sort the array in ascending order
    let product = highest3.reduce((a, b) => a * b);
    //edge cases 
    if (array.length === 3) {
        return product;
    } else if (array.length < 3) {
        return console.log('Need at least 3 integers in input array');
    }
    //posibility the lowest 2 values are negative which yields a positive product, combine that with the highest value
    let lowsAndHigh = [array[0], array[1], array[array.length - 1]];
    let negProduct = lowsAndHigh.reduce((a, b) => a * b)
    // check to see if the lowest 2 mulitplied with the top value is greater than the max product, otherwise return the current product
    return Math.max(product, negProduct)
}


module.exports = highestProduct;

console.log(highestProduct([7, 1]));