/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = [];
}
Stack.prototype.push = function (el) {
  this.stack[this.stack.length] = el;
  // push returns new length
  return this.stack.length;
};

Stack.prototype.pop = function () {
  let popped = this.stack[this.stack.length - 1];
  this.stack.length = this.stack.length - 1;
  return popped;
};

Stack.prototype.getMax = function () {
  let max = this.stack.reduce(function(a, b) {
    return Math.max(a, b);
  });
  return max;
};
