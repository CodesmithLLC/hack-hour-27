/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack(...values) {
  this.storage = new Array(...values);
  this.length = values.length;
}

Stack.prototype.push = function (value) {
  this.storage.push(value);
  return ++this.length;
}

Stack.prototype.pop = function() {
  if (this.length) {
    this.length--;
    return this.storage.pop();
  } else {
    return undefined;
  }
}


/**
* Queue Class
*/


function Queue(...values) {
  this.forwardStack = new Stack(...values);
  this.reverseStack = new Stack();
  this.length = values.length;
}

Queue.prototype.enqueue = function(value) {
  this.forwardStack.push(value);
  return ++this.length;
}

Queue.prototype.dequeue = function() {
  if (!this.forwardStack.length && !this.reverseStack) {
    return undefined;
  } else if (!this.reverseStack.length) {
    while (this.forwardStack.length) {
      this.reverseStack.push(this.forwardStack.pop());
    }
  }
  this.length--;
  return this.reverseStack.pop();
}

module.exports = {Stack: Stack, Queue: Queue};

// const myQueue = new Queue(1,2,3,4);
// console.log('intitial:', myQueue);
// myQueue.enqueue(5);
// console.log('enqueue 5:', myQueue);
// myQueue.dequeue();
// console.log('dequeue:', myQueue);
// myQueue.dequeue();
// console.log('dequeue:', myQueue);
// myQueue.enqueue(5);
// console.log('enqueue 5:', myQueue);
// myQueue.dequeue();
// console.log('dequeue:', myQueue);
// myQueue.dequeue();
// console.log('dequeue:', myQueue);
// myQueue.dequeue();
// console.log('dequeue:', myQueue);
// myQueue.dequeue();
// console.log('dequeue:', myQueue);