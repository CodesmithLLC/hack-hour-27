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
  if (typeof num !== 'number') return false
  if (num === 0) return 'Zero'

  let string = num.toString();

  // Array of units as words
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  // Array of tens as words
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  // Array of scales as words
  const scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];

  // Split user arguemnt into 3 digit chunks from right to left
  let start = string.length;
  const chunks = [];
  while (start > 0) {
    let end = start;
    chunks.push(string.slice((start = Math.max(0, start - 3)), end));
  }

  // Check if function has enough scale words to be able to stringify the user argument
  let chunksLen = chunks.length;
  if (chunksLen > scales.length) {
    return '';
  }

  // Stringify each integer in each chunk
  words = [];
  for( i = 0; i < chunksLen; i++ ) {
    chunk = parseInt( chunks[i] );

    if( chunk ) {
        /* Split chunk into array of individual integers */
        ints = chunks[i].split( '' ).reverse().map( parseFloat );

        /* If tens integer is 1, i.e. 10, then add 10 to units integer */
        if( ints[1] === 1 ) {
            ints[0] += 10;
        }

        /* Add scale word if chunk is not zero and array item exists */
        if( ( word = scales[i] ) ) {
            words.push( word );
        }

        /* Add unit word if array item exists */
        if( ( word = units[ ints[0] ] ) ) {
            words.push( word );
        }

        /* Add tens word if array item exists */
        if( ( word = tens[ ints[1] ] ) ) {
            words.push( word );
        }

        /* Add 'and' string after units or tens integer if: */
        if( ints[0] || ints[1] ) {

            /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
            if( ints[2] || ! i && chunksLen ) {
                words.push( and );
            }
        }

        /* Add hundreds word if array item exists */
        if( ( word = units[ ints[2] ] ) ) {
            words.push( word + ' hundred' );
        }
    }
}

  // at the end...
  return words.reverse().join(' ');
}

module.exports = numToWords;
