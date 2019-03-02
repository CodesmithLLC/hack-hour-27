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
  this.push = function (el) {
    this.elements[Object.keys(this.elements).length] = el;
    this.length += 1;
    return this.length;
  };

  this.pop = function () {
    let deleted = this.elements[Object.keys(this.elements).length - 1];
    delete this.elements[Object.keys(this.elements).length - 1];
    this.length -= 1;
    return deleted;
  };

  // this.getMax
  // let arr = {
  //   length: 0,
  //   elements: [],
  //   push: function (el) {
  //     this.elements[this.elements.length] = el;
  //     this.length += 1;
  //     return this.length;
  //   },
  //   pop: function () {
  //     let deleted = this.elements[this.elements.length - 1];
  //     this.elements = this.elements.slice(0, this.elements.length - 1);
  //     return deleted;
  //   }
  // }; 

}


module.exports = Stack;