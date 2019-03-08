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

 const bigNumberWord = {

 	0: '',
 	1: 'Thousand',
 	2: 'Million',
 	3: 'Billion',
 	4: 'Trillion',
 	5: 'Quadrillion',
 	6: 'Quintillion',

 }

function numToWords(num, total = '', counter = 0) {

	console.log(num)

	let number = num.toString();

	// edge case:
	if (num === 0) return 'Zero';
	if (num === '') return total;

	// base cases:
	// any two-digit number
	if (number.length === 2) {
		if(number[0] === '1') {
			total = total + parseExceptions(number[1]) + bigNumberWord[counter];
			return total;
		// a non-elevenish number is the last two digits
		} else {
			total = total + parseTens(number[0]);
			total = total + parseOnes(number[1]) + bigNumberWord[counter];
			return total;
		}
	}

	// a single, lonely digit
	if (number.length === 1) {
		return parseOnes(number[0]) + bigNumberWord[counter] + total;
	}

	// recu case: 

	// all zeros
	if (number.slice(-3)==='000') return numToWords(number.slice(0, -3), total, counter+1);

	// three or more digits
	total = threeDigits(number.slice(-3)) + bigNumberWord[counter] + total;
	return numToWords(number.slice(0, -3), total, counter+1);
}

function threeDigits(number) {

	let total = ''

	// any three-digit number
	if (number.length === 3) {
		total = total + parseOnes(number[0]) + 'Hundred';
		// in the case we have an exception as the last two digits
		if(number[1] === '1') {
			total = total + parseExceptions(number[2]);
			return total;
		// a non-elevenish number is the last two digits
		} else {
			total = total + parseTens(number[1]);
			total = total + parseOnes(number[2]);
			return total;
		}
	}

}

function parseExceptions(num) {
	switch(num){
		
		case '0': return 'Ten'
		case '1': return 'Eleven'  
		case '2': return 'Twelve'
		case '3': return 'Thirteen'
		case '4': return 'Fourteen'
		case '5': return 'Fifteen'
		case '6': return 'Sixteen'
		case '7': return 'Seventeen'
		case '8': return 'Eighteen'
		case '9': return 'Nineteen'

	}
}

function parseTens(num) {
	switch(num){
		case '0': return ''
		case '1': return 'LOLWUT'
		case '2': return 'Twenty'
		case '3': return 'Thirty'
		case '4': return 'Forty'
		case '5': return 'Fifty'
		case '6': return 'Sixty'
		case '7': return 'Seventy'
		case '8': return 'Eighty'
		case '9': return 'Ninety'
	}

}

function parseOnes(num) {
	switch(num){
		case '0': return ''
		case '1': return 'One'
		case '2': return 'Two'
		case '3': return 'Three'
		case '4': return 'Four'
		case '5': return 'Five'
		case '6': return 'Six'
		case '7': return 'Seven'
		case '8': return 'Eight'
		case '9': return 'Nine'
	}

}


// tests

// for(let i = 0; i<125; i++) {
// 	console.log(numToWords(i))
// }

// console.log(numToWords(92120000000000000))

module.exports = numToWords;
