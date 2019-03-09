// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {

let integers = [One, Two, Three, Four, Five, Six, Seven, Eight, Nine];
let tweens = [Ten, Eleven, Twelve, Thirteen, Fourteen, Fifteen, Sixteen, Seventeen, Eighteen, Nineteen];
let twoDigit = [Ten, Twenty, Thirty, Fourty, Fifty, Sixty, Seventy, Eighty, Ninety]
let hundred = "Hundred"

let intoArray = num.split("");
let length = num.toString().length;
let pointer = 0;
let result = ""

switch(intoArray.length){
    case 1: {
        result = integers[num];
    }
    break;
    case 2: {
        if (intoArray[0] === 1){
            result = tweens[intoArray[1]];
        } else {
            result = twoDigit[intoArray[0]] + integers[1];
        }
    }    
    break;
    case 3: {
        if (intoArray[2])    
    }
    }
}






}

module.exports = numToWords;
