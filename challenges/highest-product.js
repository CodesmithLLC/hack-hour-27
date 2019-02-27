/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length < 3 || !Array.isArray(array)) return 0;
    const sorted = array.sort((a, b) => {return b-a});
    let productA = sorted[0] * sorted[1] * sorted[2];
    let productB = sorted[0] * sorted[array.length - 1] * sorted[array.length - 2];
    return Math.max(productA, productB);
}

console.log(highestProduct([40, 100, 1, 5, 25, 10]))

module.exports = highestProduct;
