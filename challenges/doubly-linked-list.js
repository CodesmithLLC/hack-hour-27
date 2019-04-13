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
  // save current tail to a variable
  let currTail = this.tail
  this.tail = new Node(val)
  this.tail.prev = currTail
  this.tail.prev.next = this.tail
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let curr = this.head
  while (curr) {
    let prev = curr.prev
    let next = curr.next
    if (curr.val === val){
      prev.next = next
      next.prev = prev
    } else {
      curr = curr.next
    }
  }
};



module.exports = LinkedList;
