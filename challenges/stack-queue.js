/**
 * Create a stack.Then create a queue using two stacks.
 */
var Stack = /** @class */ (function() {
  function Stack() {
    this.s = [];
  }
  Stack.prototype.push = function(v) {
    this.s.push(v);
  };
  Stack.prototype.pop = function() {
    return this.s.pop();
  };
  Stack.prototype.isEmpty = function() {
    return !this.s.length;
  };
  return Stack;
})();
/**
 * Queue Class
 */
var Queue = /** @class */ (function() {
  function Queue() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }
  Queue.prototype.enqueue = function(v) {
    this.s1.push(v);
  };
  Queue.prototype.dequeue = function() {
    while (!this.s1.isEmpty()) {
      this.s2.push(this.s1.pop());
    }
    var dequeued = this.s2.pop();
    while (!this.s2.isEmpty()) {
      this.s1.push(this.s2.pop());
    }
    return dequeued;
  };
  return Queue;
})();
// const q = new Queue();
// // for (let i = 0; i < 10; i += 1) {
// //   q.enqueue(i);
// // }
// // for (let i = 0; i < 10; i += 1) {
// //   console.log(q.dequeue());
// // }
module.exports = { Stack: Stack, Queue: Queue };
