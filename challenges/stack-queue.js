/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
}

Stack.prototype.push = function(elem){
  this.storage.push(elem); 
}

Stack.prototype.pop = function(){
  return this.storage.pop();
}

/**
* Queue Class
*/


function Queue() {
  // 2 storages? 1 is regular stack, 1 is reverse stack. WHen enqueueing, push onto regular stack, unshift onto reverse stack. When dequeueing, 
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

Queue.prototype.enqueue = function(elem){
  this.stack1.push(elem)
;}

Queue.prototype.dequeue = function(){
  //fill up stack2 by reverse iterating thru stack1
  for (let i = this.stack1.length - 1; i >= 0; i++){
    this.stack2.push(this.stack1[i])
  }
  //return top of stack2 by popping it
  return this.stack2.pop()
}

module.exports = {Stack: Stack, Queue: Queue};
