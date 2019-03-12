/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.data = [];
  this.length = 0;
}

Stack.prototype.pop = function () {
  this.length -= 1;
  return this.data.pop();
}

Stack.prototype.push = function (value) {
  this.length += 1;
  this.data.push(value);
}


/**
* Queue Class
*/


function Queue() {
  this.length = 0;
  this.inStack = new Stack();
  this.outStack = new Stack();
}

Queue.prototype.enqueue = function (value) {
  this.length += 1;
  this.inStack.push(value);
}

Queue.prototype.dequeue = function() {
  this.length -= 1;
  // if outStack is not empty then return 1 from outStack
  if (this.outStack.length) return this.outStack.pop();

  // outStack is empty so loop througoh inStack and push all onto outStack
  while (this.inStack.length) {
    this.outStack.push(this.inStack.pop());
  }

  // return 1 off of outstack
  return this.outStack.pop();
};

// test stack
// const newStack = new Queue();
// newStack.enqueue(1);
// newStack.enqueue(2);
// newStack.enqueue(3);
// newStack.enqueue(4);
// newStack.enqueue(5);

// console.log('TCL: newStack', newStack)
// console.log('TCL: newStack', newStack.dequeue());
// console.log('TCL: newStack', newStack);
// console.log('TCL: newStack', newStack.dequeue());
// console.log('TCL: newStack', newStack);
// console.log('TCL: newStack', newStack.dequeue());
// console.log('TCL: newStack', newStack);






module.exports = {Stack: Stack, Queue: Queue};
