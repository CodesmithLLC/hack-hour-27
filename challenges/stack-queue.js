/**
 * Create a stack.Then create a queue using two stacks.
 */
function Stack() {
  this.storage = [];
  this.size = 0;
}

Stack.prototype.push = function (value) {
  this.size++;
  this.storage[this.size] = value;
}

Stack.prototype.pop = function () {
  delete this.storage[this.size];
  this.size--;
}


/**
* Queue Class
*/
function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

Queue.prototype.enqueue = function(value) {
  // this.size ++;
  this.stack1.push(value);
};

Queue.prototype.dequeue = function() {
  if (this.stack1.length === 0) {
    if (this.stack2.length === 0) { return 'Cannot dequeue because queue is empty'; }
    while (this.stack2.length > 0) {
      let popped = this.stack2.pop();
      this.stack1.push(popped);
    }
  }
  return popped;
};

module.exports = { Stack: Stack, Queue: Queue };
