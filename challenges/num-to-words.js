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
  if (num === '0') return 'Zero';
  //strat: hard code 0, 1-9, 10-90, 11-19. Go from left to right. Convert number to string. First, figure out how to parse a triple. And then split number into an array of triplets. Iterate thru this
  // array, and build up a string to return.
  let output = '';
  
  let str = JSON.stringify(num);
  let digitPlace = str.length;
  for (let i = 0; i < str.length; i++){
    if (digitPlace === 2){
      if (str[i] == '1') {
        let pair = str[i] + str[i + 1];
        output += numToWordsStorage(pair)
      }
    }else {

      output += numToWordsStorage(str[i]);
      if (digitPlace === 3) {
        output += 'Hundred';
        digitPlace--;
      }
    }
    
  }

  return output;

}

function numToWordsStorage(num) {
  if (num === '1') return 'One';
  if (num === '2') return 'Two';
  if (num === '3') return 'Three';
  if (num === '4') return 'Four';
  if (num === '5') return 'Five';
  if (num === '6') return 'Six';
  if (num === '7') return 'Seven';
  if (num === '8') return 'Eight';
  if (num === '9') return 'Nine';
  if (num === '10') return 'Ten';
  if (num === '11') return 'Eleven';
  if (num === '12') return 'Twelve';
  if (num === '13') return 'Thirteen';
  if (num === '14') return 'Fourteen';
  if (num === '15') return 'Fifteen';
  if (num === '16') return 'Sixteen';
  if (num === '17') return 'Seventeen';
  if (num === '18') return 'Eighteen';
  if (num === '19') return 'Nineteen';
  if (num === '20') return 'Twenty';
  if (num === '30') return 'Thirty';
  if (num === '40') return 'Four';
  if (num === '50') return 'Fifty';
  if (num === '60') return 'Sixty';
  if (num === '70') return 'Seventy';
  if (num === '80') return 'Eighty';
  if (num === '90') return 'Ninety';
  
}
//92,120,000,000,000,000

console.log(numToWords(311));

module.exports = numToWords;
