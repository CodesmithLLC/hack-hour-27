/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = [];
  this.max = 0;
}

Stack.prototype.push = function(value) {
  this.storage.push(value);
  this.max = Math.max(this.max, value);
  return this.storage.length;
}

Stack.prototype.pop = function() {
  let result = this.storage.pop();
  if (result === this.max) {
    this.max = Math.max(...this.storage);
  }
  return result;
}

Stack.prototype.getMax = function() {
  return this.max;
}

module.exports = Stack;

// let myStack = new Stack();
// console.log('push: ', myStack.push(4));
// console.log('push: ', myStack.push(2));
// console.log('push: ', myStack.push(8));
// console.log('push: ', myStack.push(3));
// console.log('getMax: ', myStack.getMax());
// console.log('pop: ', myStack.pop());
// console.log('getMax: ', myStack.getMax());
// console.log('pop: ', myStack.pop());
// console.log('getMax: ', myStack.getMax());
