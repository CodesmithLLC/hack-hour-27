/**
 * Create a stack.Then create a queue using two stacks.
 */
function Stack() {
  this.storage = [];
  this.length = 0;
}

Stack.prototype.push = function (value) {
  this.length++;
  this.storage[this.length] = value;
}

Stack.prototype.pop = function () {
  let popped = this.storage[this.length];
  delete this.storage[this.length];
  this.length--;
  return popped;
}


/**
* Queue Class
*/
function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

Queue.prototype.enqueue = function(value) {
  if (!this.stack1.length && this.stack2.length) {
    while (this.stack2.length) {
      this.stack1.push(this.stack2.pop());
    }
  }
  this.stack1.push(value);
  return value;
};

Queue.prototype.dequeue = function() {
  if (this.stack1.length) {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.pop();
};

module.exports = { Stack: Stack, Queue: Queue };
