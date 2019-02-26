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
  //seperate the word and place it in array
  // loop through array stack word on top
  // then check for the reverse, if reverse is found, pop it off 
  // if stack is not empty, return false 
  let strArr = str.split(/[^a-zA-Z]/g)
  strArr = strArr.filter(Boolean)

  if (strArr.length <= 1) return false
  let wordStack = [strArr[0]]
  let position = 0
  for (let i = 1; i < strArr.length; i++){
    if (wordStack[position].split('').reverse().join('') === strArr[i]){
      wordStack.pop()
      if (position != 0) position--
    } else {
      wordStack.push(strArr[i])
      position++
    }
  }
  
  if (wordStack.length === 0) return true
  else return false

}

console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'))

module.exports = matchWord;