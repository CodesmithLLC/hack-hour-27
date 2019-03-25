// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting 
// from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

const cache = {}
function countTwos(num) {
    let count = 0;
    let start = 0;
    if(cache[num]){
        count = cache[num];
        start = num + 1;
    }

    for(let i = start; i <= num; i++){
        let arr = (i + '').toString().split('');
        for(let j = 0; j < arr.length; j++){
            if(arr[j] === '2') count++;
        }
    }
    if(!cache[num]) cache[num] = count;
    return count;
}

module.exports = countTwos;

//  console.log(countTwos(1));//  -> 0
//  console.log(countTwos(3));//  -> 1
//  console.log(countTwos(13));//  -> 2
//  console.log(countTwos(1000));//  -> 1
//  console.log(countTwos(11420));//  -> 2