/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

// O(1) time, O(n) space
function Stack() {
  this.length = 0;
  this.stack = [];
  // uncomment this for the second solution
  // this.maxStack = [];
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


// // these push/pop/getMax solutions sort the array upon pushing to the array, making the max value the last item in the array
// Stack.prototype.push = function(value) {
//   this.stack.push(value);
//   const m = this.maxStack;
//   // if maxStack is empty, or if the value is greater than the max so far, push the value
//   // otherwise, our last max is still our max at the new index
//   const max = (!m.length || value > m[m.length - 1]) ? value : m[m.length - 1];
//   return m.push(max);
// }

// Stack.prototype.pop = function() {
//   this.maxStack.pop();
//   return this.stack.pop();
// }

// Stack.prototype.getMax = function() {
//   return this.maxStack[this.maxStack.length - 1];
// }