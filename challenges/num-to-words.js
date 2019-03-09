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
  const NUM_WORDS = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
                      'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const TENS_WORDS = ['', '', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];


  if (num < 20) return NUM_WORDS[num];

  let word = '';

  let numStr = num.toString();

  // Get word from last 2 digits first.
  let last2digits = num % 100;

  // last 2 less than 20. easy.
  if (last2digits < 20) {
    if (last2digits !== 0) word = NUM_WORDS[last2digits] + word;
  } else {
    // last 2 greater than 20. Get the first digit first.
    let firstDigit = num % 10;
    if (firstDigit !== 0) word = NUM_WORDS[firstDigit] + word;
    // get 2nd digit
    let secondDigit = parseInt(numStr[numStr.length - 2]);
    word = TENS_WORDS[secondDigit] + word;
  }


  // Get word from hundreds
  if (numStr.length > 2) {
    let thirdDigit = parseInt(numStr[numStr.length - 3]);
    word = numToWords(thirdDigit) + 'Hundred' + word;
  }





  return word;
}

const test = [0,5,10,19,20,25,30,37,95, 100, 105, 110, 170, 195, 200, 905, 999];

for (let i = 0; i < test.length; i++)
 {
   console.log(test[i], ' - ', numToWords(test[i]));
 }


module.exports = numToWords;
