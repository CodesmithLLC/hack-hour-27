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
  // probably gonna be recursive
  // convert num to string
  // eval it's length

  switch (num) {
    case 0: return 'Zero'
    case 1: return 'One'
    case 2: return 'Two'
    case 3: return 'Three'
    case 4: return 'Four'
    case 5: return 'Five'
    case 6: return 'Six'
    case 7: return 'Seven'
    case 8: return 'Eight'
    case 9: return 'Nine'
    case 10: return 'Ten'
    case 11: return 'Eleven'
    case 12: return 'Twelve'
    case 13: return 'Thirteen'
    case 14: return 'Fourteen'
    case 15: return 'Fifteen'
    case 16: return 'Sixteen'
    case 17: return 'Seventeen'
    case 18: return 'Eighteen'
    case 19: return 'Nineteen'
  }
}
console.log('numToWords(18) -->', numToWords(18));

module.exports = numToWords;
