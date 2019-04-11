/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  let pastTail = this.tail;
  this.tail = new Node(val);
  this.tail.prev = pastTail;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let pointer = this.head;
  while (pointer) {
    if (pointer.val === val) {
      pointer.prev.next = pointer.next;
      return true;
    }
    pointer = pointer.next;
  }
  return false;
};

module.exports = LinkedList;
