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

    const mean = Math.floor(array.reduce((a, b) => a + b) / array.length);
    let tempMode = [array[0], 1]
    const mode = array.reduce((acc, val) => {
        if (acc[val] === undefined) {
            acc[val] = 1;
        } else {
            acc[val] += 1
        }
        if (acc[val] > tempMode[1]) tempMode = [val, acc[val]];
        return acc;
    }, {})
    
    return mean === tempMode[0];
}

module.exports = modemean;
