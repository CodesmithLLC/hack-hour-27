/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.data = [];
}

Stack.prototype.pop = () => {
    if(this.data.length === 0) return undefined;
    return this.data.pop();
}

Stack.prototype.push = (item) => {
    this.data.push(item);
}
Stack.prototype.isEmpty = () => {
    if(this.data.length) return true;
    return false;
}

/**
* Queue Class
*/


function Queue() {
    this.data = new Stack();
    this.stage = new Stack();
}

Queue.prototype.enqueue = (item) => {
    while(!this.data.isEmpty)
        this.stage.push(this.data.pop());
        
    this.stage.push(item);
}
Queue.prototype.dequeue = () => {
    while(!this.stage.isEmpty())
        this.data(this.stage.pop());
    
    if(this.data.isEmpty()) return undefined;

    return this.data.pop();
}

module.exports = {Stack: Stack, Queue: Queue};
