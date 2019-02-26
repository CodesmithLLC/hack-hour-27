// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {

    //iterate over string and begin to collect words
    //use a stack 
    let wordPairs = {}
    let currentWord = '';
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        // if the next index is not a letter and the current is a letter add to current word and preform stack operations
        if (!str[i+1].match(/[a-zA-Z]+/g) && str[i].match((/[a-zA-Z]+/g))) {
            currentWord += str[i];
            if (wordPairs[currentWord]) {
                if (stack[stack.length-1] === wordPairs[currentWord]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                let reversedWord = currentWord.split("").reverse().join("");
                wordPairs[reversedWord] = currentWord; 
                stack.push(currentWord);
            }
            
        } else if (str[i]=== (/[a-zA-Z]+/g)) {
            currentWord += str[i];
        }
        console.log(stack);
    }
    return stack.length === 0;
}


console.log(matchWord('__END_DNE-----')); 
console.log(matchWord('__ENDDNE__')); 
module.exports = matchWord;
