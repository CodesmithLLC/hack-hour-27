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
    if(str=== '') return true;

    var cleanString = str.replace(/[|&;$%@"<>\]\[()+,-]/g, "_").toLowerCase();

    // console.log(cleanString);
    // console.log(cleanString.split('_'));

    // console.log(cleanString.split('_')[2]);
    // console.log(cleanString.split('_')[2].split('').reverse().join(''));


    let words = cleanString.split('_');
    let openWord = words.shift();
    while(words.length){
        if(openWord === ''){
            openWord = words.shift();
            continue;
        } 
    // for(let i = 0; i < words.length; i++){
        for(let i = 0; i < words.length; i++){
            let closeWord = words[i].split('').reverse().join('');
            if(openWord === closeWord)
                return true;
        }
        openWord = words.shift();
    }
    return false;
}

module.exports = matchWord;

// console.log(matchWord('__END_DNE-----'));
// console.log(matchWord('__ENDDNE____'));
// console.log( matchWord('IF()()fi[]'));  //-> true        (should be case-insensitive)
// console.log(matchWord('for__if__rof__fi')); // -> false     not properly closed. like ( [) ] 

// console.log( matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));  //-> true
// console.log( matchWord(''));  //-> true