/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  let length;
  this.values = {};
  
  this.push = function(x){
    length = 0;
    for (let keys of Object.keys(this.values)){
      length++;
      console.log("the keys", keys)
    }
    
    this.values[length] = x;  
    length++;
    return length;
  }
  
  this.pop = function(){
    
    length = 0
    for (let keys of Object.keys(this.values)){
      length++;
    }
    if (length === 0) return undefined;
    returnValue = this.values[length - 1];
    delete this.values[length - 1];
    return returnValue;
  }

  this.maxValue = function(){
    i = 0;
    if (!this.values[0]) return undefined
    maxValue = this.values[0];
    while (this.values[i]){
      if (this.values[i] > maxValue){
        maxValue = this.values[i];
      }
      i++
    }
   return maxValue;
  }

}

let example = new Stack
console.log(example.push(52))
console.log(example.push(33))
console.log(example.push(99))
console.log(example.push(422))
console.log('theStack', example)
console.log(example.pop())
console.log(example.maxValue())


module.exports = Stack;