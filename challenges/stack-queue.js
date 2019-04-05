/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  let storage = [];
  return storage;
}

Stack.prototype.push = function(el) {
  storage.push(el);
}

Stack.prototype.pop = function() {
  return storage.pop();
}

/**
* Queue Classenqueue
*/


function Queue() {
  let q = [];
  return q;
}

Queue.prototype.enqueue = function() {
  
}

Queue.prototype.dequeue = function() {
  
}

module.exports = {Stack: Stack, Queue: Queue};

let s = new Stack();
// s.push(1);
// s.pop()
// console.log(s.pop())
s.enqueue(2);
console.log(s);
// console.log(s.pop());