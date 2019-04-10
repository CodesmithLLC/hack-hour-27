/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, because zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
    const arr = new Array(array.length);
    for(let i = 0; i < arr.length; i++) arr[i] = 1;

    console.log('first loop: ', arr);
    for(let i = 0; i < arr.length; i++){
        let count = 0;
        while(count < arr.length-1){
            let first = arr.shift();
            arr.push(first * array[i]);
            count++;
        }
    }
    return arr;
}

// console.log(getAllProducts([1, 7, 3, 4])); // ->  [84, 12, 28, 21]

module.exports = getAllProducts;
