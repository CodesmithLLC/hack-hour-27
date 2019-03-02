/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

class Stack {
  // body...
  constructor(){ 
    this.stack = []
  }
  push(value){
   this.stack[this.stack.length] = value
   return this.stack.length
  }
  pop(){
   return this.stack.splice(this.stack.length-1, 1)[0]
   }
   getMax(){
     if(!this.stack.length){return 'EMPTY STACK'}
     if(this.stack.toString().match(/[0-9]+/g).length != this.stack.length)
     {return 'CAN ONLY HAVE NUMBERS IN STACK'}
     return Math.max(...this.stack)
   }
 }
let stack = new Stack()

module.exports = Stack;