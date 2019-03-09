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

  let last = num % 1000;
	console.log('TEST: numToWords -> last', last);
  let rest = Math.ceil(num / 1000);
	console.log('TEST: numToWords -> rest', rest);

}

function splitByPlace(num, result = []) {
  let last = num % 1000;
  let rest = Math.ceil(num / 1000);
  if (rest === 0) return result.reverse();
  result.push(last);
  // return splitByPlace(rest, result);
}


// console.log(numToWords(5));
// console.log(numToWords(12));
// console.log(numToWords(325));
console.log(numToWords(65265563));
console.log(splitByPlace(65265563));
// console.log(numToWords(2362562));
// console.log(numToWords(252435561));
// console.log(numToWords(12503566));
// console.log(numToWords(12503567));
// console.log(numToWords(12503568));
// console.log(numToWords(12503569));

module.exports = numToWords;


// switch(num) {
//   case '1': 'One' 
//     break;
//   case '2': 'Two' 
//     break;
//   case '3': 'Three' 
//     break;
//   case '4': 'Four' 
//     break;
//   case '5': 'Five' 
//     break;
//   case '6': 'Six' 
//     break;
//   case '7': 'Seven' 
//     break;
//   case '8': 'Eight' 
//     break;
//   case '9': 'Nine' 
//     break;

// if (num === 0) { return 'Zero.'}