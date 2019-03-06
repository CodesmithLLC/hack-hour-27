
function highest(arr){
    
    let low = Math.min(arr[0], arr[1]);
    let high  = Math.max(arr[0], arr[1]);
    let high2 = arr[0] * arr[1];
    let low2 = arr[0] * arr[1];
    let high3 = arr[0] * arr[1] * arr[2];

    for(let i = 2; i < arr.length; i++){
        let curr = arr[i];

        high3 = Math.max(high3, high2 * curr, low2 * curr);
        high2 = Math.max(high2, high * curr, low * curr);
        low2 = Math.min(low2, low * curr, high * curr);
        high = Math.max(high, curr);
        low = Math.min(low, curr);
    }

    return high3;
}



module.exports = highest;

console.log(highest([-2,4,-6,8]));

