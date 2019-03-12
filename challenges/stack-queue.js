/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.length = 0;
}

Stack.prototype.push = function(elem){
  this.storage.push(elem); 
}

Stack.prototype.pop = function(elem){
  return this.storage.pop();
}

Queue.prototype.enqueue = function(elem){
  this.storage.push();
}

Queue.prototype.dequeue = function(elem){
  return this.storage.shift();
}


/**
* Queue Class
*/


function Queue() {
  this.storage = new Stack();
  this.length = 0;
}

module.exports = {Stack: Stack, Queue: Queue};
