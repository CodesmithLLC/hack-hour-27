/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if(array.length < 3) return 0;

    let posArr = [];
    let negArr = [];
    const zeroArr = [];
    let len = array.length;
    let result = [];

    // Filter arrays
    while(len){
        if(array[len-1] > 0)
            posArr.push(array.pop());
        else if(array[len-1] < 0)
            negArr.push(array.pop());
        else
            zeroArr.push(array.pop());
        
        len = array.length;
    }
    
    posArr = posArr.sort();
    negArr = negArr.sort((a,b) => b-a);

    // Find the 3 integers
    if(posArr.length > 2 && negArr.length < 3){  // All positive with length 3+, less than 3 neg
        result.push(posArr.pop());
        result.push(posArr.pop());
        result.push(posArr.pop());
        return result[0] * result[1] * result[2];
    }
    if(posArr.length === 0 && negArr.length > 2){ // All negative with length 3+, no postives
        result.push(negArr.shift());
        result.push(negArr.shift());
        result.push(negArr.shift());
        return result[0] * result[1] * result[2];
    }
    if(posArr.length > 2 && negArr.length > 1){ // Mix of neg and pos of at least 3 items
        let lastTwoNeg = negArr.pop() * negArr.pop();
        for(let i = 0; i < posArr.length; i++){
            if(posArr[i] > lastTwoNeg){
                result.push(posArr[i]);
            }
            else if(posArr[i] <= lastTwoNeg){
                result.push(posArr[i])
                result.push(negArr.pop());
                result.push(negArr.pop());
             }
        }
        return result[0] * result[1] * result[2];
    }
}


module.exports = highestProduct;


console.log(highestProduct([2,5,1,7,2,8,3]));
console.log(highestProduct([-10, -3, -7, -1, -6]));
console.log(highestProduct([-5,10,5,2,-3]));