/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
}

Stack.prototype.push = function(elem){
  this.storage.push(elem); 
}

Stack.prototype.pop = function(elem){
  return this.storage.pop();
}

/**
* Queue Class
*/


function Queue() {
  this.storage = new Stack();
}

Queue.prototype.enqueue = function(elem){
  this.storage.push();
}

Queue.prototype.dequeue = function(elem){
  return this.storage.shift();
}

Queue.prototype.pop = function(elem){
  return this.storage.pop();
}

Queue.prototype.push = function(elem){
  this.storage.push(elem); 
}

module.exports = {Stack: Stack, Queue: Queue};
