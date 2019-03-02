/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  let stack = {};
  stack.data = [];
  stack.length = 0;
  stack.maxValue = [];
  stack.push = (value) => {
    // push value onto end of stack then increment length
    stack.data[stack.length++] = value;

    stack.maxValue[stack.length - 1] = (stack.length === 1) ? value : Math.max(value, stack.maxValue[stack.length - 2]);
    return stack.length;
  }
  stack.pop = () => {
    let ret = stack.data[--stack.length];
    stack.data.length = stack.data.length - 1;
    stack.maxValue.length = stack.maxValue.length - 1;
    return ret;
  }
  stack.getMax = () => stack.maxValue[stack.length-1];
  return stack;
}


const test = Stack();

test.push(1);
test.push(2);
test.push(3);
console.log('TCL: test', test)
console.log('TCL: getmax', test.getMax())
console.log('TCL: test', test.pop())
console.log('TCL: getmax', test.getMax())
console.log('TCL: test', test)



module.exports = Stack;