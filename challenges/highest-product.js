/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (!Array.isArray(array) || array.length < 3) return 0;
    const sorted = array.sort((a, b) => {return b-a});
    let productA = sorted[0] * sorted[1] * sorted[2];
    let productB = sorted[0] * sorted[array.length - 1] * sorted[array.length - 2];
    return Math.max(productA, productB);
}

module.exports = highestProduct;
