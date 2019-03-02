/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

class Stack {
  constructor() {
    this.S = [];
    this.maxS = [];
  }

  push(val) {
    if (!this.maxS.length || val > this.maxS[this.maxS.length - 1]) {
      this.maxS.push(val);
    } else {
      this.maxS.push(this.maxS[this.maxS.length - 1]);
    }
    return this.S.push(val);
  }

  pop() {
    this.maxS.pop();
    return this.S.pop();
  }

  getMax() {
    if (!this.maxS.length) {
      return undefined;
    }
    return this.maxS[this.maxS.length - 1];
  }
}

module.exports = Stack;
