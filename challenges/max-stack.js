/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
    this.length = 0;
    this.stack = {};
    this.max = [];
}

Stack.prototype.push = function(...args){
  args.forEach((el) => {
    this.stack[this.length] = el;
    if (!this.max.length) this.max.push(el);
    if (el >= this.max[this.max.length-1]) this.max.push(el);
    this.length++;
  })
  return this.length;
}

Stack.prototype.pop = function(){
  const removed = this.stack[this.length-1];
  if (removed === this.max[this.max.length-1]) this.max.pop();
  delete this.stack[this.length-1];
  this.length--;
  return removed;
}

Stack.prototype.getMax = function() {
  return this.max[this.max.length-1];
}


let stack = new Stack();
stack.push(3,6,5,7,1,2,3,4,7,8)
console.log(stack);
stack.pop();
stack.pop();
console.log(stack.getMax());
module.exports = Stack;