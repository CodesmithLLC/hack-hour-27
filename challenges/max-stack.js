/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.length = 0;
  this.items = {};
  this.max = -Infinity;
}

Stack.prototype.pop = function(){
  this.length = this.length-1;
  const popped = this.items[this.length];
  delete this.items[this.length];
  if (this.max === popped){
  //the real work for this.max is happening here
    this.max = Math.max(...Object.values(this.items));
  }
  return popped
}

Stack.prototype.push = function(item){
  this.items[this.length] = item;
  this.length = this.length + 1;
  if (item > this.max){
    this.max = item;
  }
  return this.length;
}

Stack.prototype.getMax = function(){
  // this technically works lmao
  return this.max
}

module.exports = Stack;
