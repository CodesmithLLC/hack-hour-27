/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

 const cacheCount = {
     0: 1,
     1: 1,
     2: 2,
     3: 3,
    //  4: 5,
    //  5: 8,
    //  6: 13
    //  7: 17?
    //  8: 23?
 }

 // possibly optimize with a cache count as they are calculated
function countStairs(n) {
    if(cacheCount[n])
        return cacheCount[n];

    cacheCount[n] = countStairs(n-1) + countStairs(n-2);

    return cacheCount[n];
}

function countStairsOld(n) {
    if(n < 3)
        return cacheCount[n];

    return countStairs(n-1) + (n-2);
}

// console.log(countStairs(6));
module.exports = countStairs;
