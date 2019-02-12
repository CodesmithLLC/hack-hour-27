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
    let mode = 0;
    let maxCount = 1;
    let tally = array.reduce((acc, item) => {acc[item]=(acc[item]||0)+1; return acc}, {})
    
    for(let key in tally) {
        if(tally[key] > maxCount) {
            maxCount = tally[key]
            mode = key
        }
    }
    let mean = Math.floor(array.reduce((acc, item) => {return acc += item})/array.length)
    
    return parseInt(mode) === mean
}
module.exports = modemean;

modemean([4, 5, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 9, 10])
