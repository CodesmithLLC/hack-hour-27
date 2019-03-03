/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.length = 0;
  this.elements = {};
  this.max = {
    index: -1,
    curValue: -Infinity,
  };

  this.setNewMax = function () {
    for (let x in this.elements) {
      if (this.elements[x] > this.max.curValue) {
        this.max.curValue = this.elements[x];
        this.max.index = x;
      }
    }
  };

  this.resetMax = function () {
    this.max.curValue = -Infinity;
    this.max.index = -1;
  }

  this.push = function (el) {
    this.elements[Object.keys(this.elements).length] = el;
    this.length += 1;
    if (el > this.max.curValue) {
      this.max.index = this.length - 1;
      this.max.curValue = el;
    }
    return this.length;
  };

  this.pop = function () {
    if (this.length === 0 ) return undefined;

    let deleted = this.elements[Object.keys(this.elements).length - 1];
    if (deleted >= this.max.curValue) {
      this.resetMax();
    }
    delete this.elements[Object.keys(this.elements).length - 1];
    this.setNewMax;
    this.length -= 1;
    return deleted;
  };

  this.getMax = function () {
    this.length === 0 ? undefined : this.max.curValue
  }

}


module.exports = Stack;