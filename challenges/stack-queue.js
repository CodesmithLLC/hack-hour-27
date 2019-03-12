/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.store = [];
  this.push = function(item){
    return this.store.push(item);
  }
  this.pop = function(){
    return this.store.pop()
  };
}


/**
* Queue Class
*/


function Queue() {
  this.input = new Stack()
  this.output = new Stack()
  this.dequeue = function(){
    if(this.output.store.length === 0){
      while (this.input.store.length){
            const thing = this.input.pop();
            this.output.push(thing);
          }
      }
    return this.output.pop();
  }

  this.enqueue = function(item){
    this.input.push(item);
  }
}


module.exports = {Stack: Stack, Queue: Queue};
