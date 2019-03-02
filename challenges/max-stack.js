/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.curLength = 0;
  this.storage = [];
  this.curMax = -Infinity;
  this.mostRecent;

  this.push = function (...val) {
    if (val.length === 1) {
      this.storage = [...this.storage, val];
      this.curLength += 1;
      this.curMax = Math.max(...this.storage);
      return this.curLength;
    } else {
      for (let i = 0; i < val.length; i += 1) {
        this.storage = [...this.storage, val[i]];
        this.curLength += 1;
      }
      this.curMax = Math.max(...this.storage);
      return this.curLength;
    }
  };

  this.pop = function () {
    if (this.curLength === 0) {
      return "There is nothing in this stack";
    } else {
      this.curLength -= 1;
      const output = this.storage[this.curLength];
      this.storage.length = this.curLength;
      this.curMax = Math.max(...this.storage);
      return output;
    }
  }

  this.getMax = function () {
    return this.curMax;
  }
}

module.exports = Stack;