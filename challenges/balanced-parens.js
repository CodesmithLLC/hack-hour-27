/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 ````````
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input) {
  let leftParens = 0;
  let rightParens = 0;
  let leftSquare = 0;
  let rightSquare = 0;
  let leftCurly = 0;
  let rightCurly = 0;
  let i;
  let substringsArray = [];

  //sanitize string
  input = input.replace(/([^([{}\]\)])/g, "");
  //console.log("input", input);

  for (let i = 0; i < input.length; i++) {
    //Iterating through string
    if (input[i] === "(") leftParens++;
    if (input[i] === ")") rightParens++;
    if (input[i] === "[") leftSquare++;
    if (input[i] === "]") rightSquare++;
    if (input[i] === "{") leftCurly++;
    if (input[i] === "}") rightCurly++;

    // whenever you find a match, check everything in between the brackets
    // if everything isnt balanced within this substring, return false;
    //	else keep going
    //return true if reach end of input
    //whenever you find a match, remove from input everything starting from the /* left, until right, and then start iteration again from the new beginning
    if (leftParens === rightParens && leftParens > 0 && rightParens > 0) {
      substringsArray.push(
        input.slice(input.indexOf("("), input.indexOf(")") + 1)
      );
      leftParens = 0;
      rightParens = 0;
    }
    if (leftSquare === rightSquare && leftSquare > 0 && rightSquare > 0) {
      substringsArray.push(
        input.slice(input.indexOf("["), input.indexOf("]") + 1)
      );
      leftSquare = 0;
      rightSquare = 0;
    }
    if (leftCurly === rightCurly && leftCurly > 0 && rightCurly > 0) {
      substringsArray.push(
        input.slice(input.indexOf("{"), input.indexOf("}") + 1)
      );
      leftCurly = 0;
      rightCurly = 0;
    }
  }
  if (
    leftCurly +
      rightCurly +
      leftParens +
      rightParens +
      leftSquare +
      rightSquare !==
    0
  )
    return false;

  //console.log("substringsArray", substringsArray);
  //for each element in substringsArray, iterate thru substring starting from 2nd char until 2nd before last character
  let output = substringsArray.map(sub => {
    let counts = {
      lParens: 0,
      rParens: 0,
      lSquare: 0,
      rSquare: 0,
      lCurly: 0,
      rCurly: 0
    };
    for (let j = 0; j < sub.length; j++) {
      if (sub[j] == "(") counts.lParens++;
      if (sub[j] == ")") counts.rParens++;
      if (sub[j] == "[") counts.lSquare++;
      if (sub[j] == "]") counts.rSquare++;
      if (sub[j] == "{") counts.lCurly++;
      if (sub[j] == "}") counts.rCurly++;
    }
    //console.log("counts", counts);
    if (counts.lParens !== counts.rParens) return false;
    else if (counts.lSquare !== counts.rSquare) return false;
    else if (counts.lCurly !== counts.rCurly) return false;
    return true;
  });
  //console.log("output", output);
  if (output.includes(false)) return false;
  else return true;
}

module.exports = balancedParens;
