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
    const stack = [];
    // use the match method to search for matches of all expressions
    let newStr = str.toLowerCase().match(/[a-z]+/g);
    if (newStr === null) return true;
    // match returns the matches as an array object, so use for loop
    for (let i = 0; i < newStr.length; i++) {
        if (stack.indexOf(newStr[i]) === -1) {
            stack.push(newStr[i]);
        }
        if (stack[stack.length - 2] === newStr[i].split("").reverse().join("")) {
            // the same letter will be at the end of stack 2ce because of the prev 'if' statement, so clear stack by popping twice
            stack.pop();
            stack.pop();
        }
    }
    return stack.length > 0 ? false : true;
}

module.exports = matchWord;

// var a = '%%$@$while  try ! yrt  for if_fi rof #*#  elihw'
// var b = 'for__if__rof__fi'
// var c = 'IF()()fi[]'
// var d = '__ENDDNE__'
// var e = '__END_DNE-----'
