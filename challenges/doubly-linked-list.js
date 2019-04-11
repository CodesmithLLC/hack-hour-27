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
  let newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let prev = this.head;
  if (!prev) return 'empty linked list';
  let curr = prev.next;
  if (prev.val === val) {
    this.head = curr;
    return;
  }
  while (curr && curr.val !== val) {
    curr = curr.next;
    prev = prev.next;
  }
  if (!curr) return;
  prev.next = prev.next.next;
};

module.exports = LinkedList;
