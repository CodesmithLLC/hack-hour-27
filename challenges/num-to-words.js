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

/* 

1           one
10          ten
100         one hundred
1,000        one thousand
10,000       ten thousand
100,000     one hundred thousand
1,000,000   one million

*/

const mapping = {
  '00': 'Hundred',
  '0': '',
  '1': 'One',
  '2': 'Two',
  '3': 'Three',
  '4': 'Four',
  '5': 'Five',
  '6': 'Six',
  '7': 'Seven',
  '8': 'Eight',
  '9': 'Nine',
  '10': 'Ten',
  '11': 'Eleven',
  '12': 'Twelve',
  '13': 'Thirteen',
  '14': 'Fourteen',
  '15': 'Fifteen',
  '16': 'Sixteen',
  '17': 'Seventeen',
  '18': 'Eighteen',
  '19': 'Nineteen',
  '20': 'Twenty'
};

const tensMapping = {
  '1': 'Ten',
  '2': 'Twenty',
  '3': 'Thirty',
  '4': 'Fourty',
  '5': 'Fifty',
  '6': 'Sixty',
  '7': 'Seventy',
  '8': 'Eighty',
  '9': 'Ninety',
  '10': 'Hundred'
};

const commaMapping = {
  '0': '',
  '1': 'Thousand',
  '2': 'Million',
  '3': 'Billion',
  '4': 'Trillion',
  '5': 'Quadrillion'
};

function numToWords(num) {
  let numStr = '';
  const numArr = Array.from(num.toString());
  const chunkArr = [];
  console.log(numArr);
  while (numArr.length) {
    let smallChunk = [];
    if (numArr.length > 3) {
      for (let i = 0; i < 3; i += 1) {
        console.log(smallChunk);
        smallChunk.unshift(numArr.pop());
      }
    } else {
      smallChunk = numArr;
      chunkArr.unshift(smallChunk);
      break;
    }
    chunkArr.push(smallChunk);
  }

  chunkArr;

  chunkArr.forEach((chunk, idx) => {
    if (chunk.length >= 3) {
      console.log(chunk);
      numStr += mapping[chunk[0]];
      numStr += 'Hundred';
      chunk.shift();

      console.log(chunk);
    }
    if (chunk.length >= 2) {
      console.log(chunk);

      numStr += tensMapping[chunk[0]];
      chunk.shift();
    }

    if (chunk.length >= 1) {
      numStr += mapping[chunk[0]];
    }

    if (chunkArr.length > 1) {
      const i = chunkArr.length - idx - 1;
      numStr += commaMapping[i];
    }
  });

  console.log(numStr);
}

numToWords(99999);

module.exports = numToWords;
