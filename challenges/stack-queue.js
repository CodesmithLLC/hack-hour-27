/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.length = 0;
}
Stack.prototype.push = function(val) {
  this.storage.push(val);
  this.length += 1;
}

Stack.prototype.pop = function() {
  if (this.length) this.length -= 1;
  return this.storage.pop();
}

/**
* Queue Class
*/


function Queue() {
  this.first = new Stack();
  this.second = new Stack();
}

Queue.prototype.enqueue = function(val) {
  if (!this.first.length && this.second.length) {
    while (this.second.length) {
      this.first.push(this.second.pop());
    }
  }
  this.first.push(val);
  return val;
};

Queue.prototype.dequeue = function() {
  if (this.first.length) {
    while (this.first.length) {
      this.second.push(this.first.pop());
    }
  }
  return this.second.pop();
};

module.exports = {Stack: Stack, Queue: Queue};
