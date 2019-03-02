/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed? added?
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.arr = new Array();
  this.max = new Array();
}
Stack.prototype.push = function (value) {
  if (this.arr.length === 0) return this.arr.length;

  this.max(push)
  this.max.sort((a, b) => a - b);
  this.arr.unshift(value);
  return this.arr.length;
}
Stack.prototype.pop = function(){
  if(this.arr.length === 0) return null;

  const value = this.arr.shift();
  const remove = this.max.findIndex(value);
  this.max = this.max( this.max.slice(0,remove).concat(this.max.slice(remove-1)) )
  this.max.sort((a, b) => a - b);

  return value;
}
Stack.prototype.getMax = function(){
  return this.max[0];
}

module.exports = Stack;
