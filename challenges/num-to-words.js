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

const singles ={
  0: "",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine"
}
const teens = {
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eigtheen",
  19: "Nineteen",
}

const tens = {
  0: "",
  1: "Ten",
  2: "Twenty",
  3: "Thirty",
  4: "Forty",
  5: "Fifty",
  6: "Sixty",
  7: "Seventy",
  8: "Egithy",
  9: "Ninety",
  10: "Hundred"
}
const thous={
  0: "",
  1: "Thousand",
  2: "Million",
  3: "Billion",
  4: "Trillion",
  5: "Quadrillion"
}

function numToWords(num) {
  let output = '';
  const str = num.toString();
  let digits = str.length;
  for (let i = 0; i < str.length; i++){
    let curNum = str[i];
    if (digits%3===0 && curNum !== '0'){
      output += singles[curNum] + "Hundred";
    }
    if (digits%3===2 && curNum === '1'){
      output += teens[str[i]+str[i+1]];
    }else{
      if (digits%3===2){
        output += tens[curNum]
      }
      if (digits%3===1 && str[i-1] !== '1'){
        output += singles[curNum]
      }
    }
if (thous[(digits-1)/3]){
      output += thous[(digits-1)/3];
    }
    digits -= 1;
  }
  return output;
}

console.log(numToWords(11111951))

module.exports = numToWords;
