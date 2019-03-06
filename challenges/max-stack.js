/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {};
  this.length = 0;
  this.max = { '-1': -Infinity };
}

Stack.prototype.push = function(value) {
  if (typeof value !== 'number') return 'No.'; 
  if (value > this.max[this.length - 1]) {
    this.max[this.length] = value;
  } else {
    this.max[this.length] = this.max[this.length - 1];
  }
  this.storage[this.length++] = value;
  return this.length;
};

Stack.prototype.pop = function() {
  if (this.length === 0) return 'No mas, guey.'
  const popped = this.storage[--this.length];
  delete this.storage[this.length];
  delete this.max[this.length];
  return popped;
}

Stack.prototype.getMax = function() {
  if (this.length === 0) return undefined;
  return this.max[this.length - 1];
}

let stack = new Stack;

stack.push(2);
stack.push(4);
stack.push(6);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.getMax());

module.exports = Stack;