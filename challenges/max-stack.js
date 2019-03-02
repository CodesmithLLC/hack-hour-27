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
  this.max = -Infinity;
  this.length = 0;
}

Stack.prototype.push = function(element){
  this.length++;
  this.storage[this.length - 1] = element;
  if (element > this.max){
    this.max = element;
  }
  return this.length;
}

Stack.prototype.pop = function(){
  if (this.length === 0) return undefined;
  let last = this.storage[this.length - 1];
  this.storage = this.storage.slice(0, -1);
  this.length--;
  this.max = Math.max(...this.storage)
  return last;
}

Stack.prototype.getMax = function(){
  if (this.length === 0) return undefined;
  return this.max;
}

module.exports = Stack;

// let myStack = new Stack();
// // console.log(myStack.getMax())
// myStack.push(10);
// myStack.push(80);
// myStack.push(40);
// myStack.push(80);

// console.log(myStack)
// console.log(myStack.pop())
// console.log(myStack)
// console.log(myStack.getMax())