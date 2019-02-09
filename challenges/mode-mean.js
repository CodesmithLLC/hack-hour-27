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
    let mean = Math.floor(array.reduce((acc, curr) => acc + curr) / array.length);
    // console.log('mean', mean);

    let mode = {};
    array.forEach((elem, i) =>{
        mode[elem] = (mode[elem]) ? 1 : mode[elem]++;
    });
    let maxkey = Object.keys(array).reduce((maxkey, nextkey) => {
        if(mode[maxkey] > mode[nextkey] )
            return maxkey;
        return nextkey;
    });
    // console.log('key', maxkey, 'value', array[maxkey]);
    if(mean === array[maxkey])
        return true;
    return false;
}
// console.log(modemean([2,2,2,7]));

module.exports = modemean;
