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

function numToWords(num, firstCall = true) {
  // first call condition so only the very first zero is specifically returned
  // prevents numToWords(100) -> OneHundredZero
  if (firstCall && num === 0) return 'Zero';

  const ONES = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const SINGLE_TENS = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const TENS = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const THOUSANDS = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];

  // single digit
  if (num < 10) {
    return ONES[num];
  
  // ten to nineteen
  } else if (num < 20) {
    return SINGLE_TENS[num-10];
    
  // twenty to ninetynine
  } else if (num < 100) {
    return TENS[Math.floor(num / 10)] + ONES[num % 10];
  
  // three digits
  } else if (num < 1000) {
    return ONES[Math.floor(num / 100)] + 'Hundred' + numToWords(num % 100, false);

  // up to six digits
  } else if (num < Math.pow(10, 6)) {
    return numToWords(Math.floor(num / 1000, false)) + 'Thousand' + numToWords(num % 1000, false);
  
  // up to nine digits
  } else if (num < Math.pow(10, 9)) {
    return numToWords(Math.floor(num / Math.pow(10, 6), false)) + 'Million' + numToWords(num % Math.pow(10, 6), false);
  
  // up to twelve digits
  } else if (num < Math.pow(10, 12)) {
    return numToWords(Math.floor(num / Math.pow(10, 9)), false) + 'Billion' + numToWords(num % Math.pow(10, 9), false);
  
  // up to fifteen digits
  } else if (num < Math.pow(10, 15)) {
    return numToWords(Math.floor(num / Math.pow(10,12), false)) + 'Trillion' + numToWords(num % Math.pow(10,12), false);
  
  // up to eighteen digits
  } else if (num < Math.pow(10, 18)) {
    return numToWords(Math.floor(num / Math.pow(10,15), false)) + 'Quadrillion' + numToWords(num % Math.pow(10,15), false);
  }


}

module.exports = numToWords;



console.log(numToWords(0)); // -> 'Zero'
console.log(numToWords(43)); // -> 'FortyThree'
console.log(numToWords(523)); // -> 'FiveHundredTwentyThree'
console.log(numToWords(2999)); // -> 'TwoThousandNineHundredNintyNine'
console.log(numToWords(11454)); // -> 'ElevenThousandFourHundredFiftyFour'
console.log(numToWords(15)); // -> 'Fifteen'
console.log(numToWords(2483579411)); // -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
console.log(numToWords(300525151340440)); // -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
console.log(numToWords(92120000000000000)); // -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
console.log(numToWords(400241129)); // -> 'FourHundredMillionTwoHundredFortyOneThousandOneHundredTwentyNine'