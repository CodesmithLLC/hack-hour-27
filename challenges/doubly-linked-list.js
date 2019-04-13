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
  const newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail.prev = this.tail
    this.tail = newNode;
  }
  
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.head.val === val) {
    this.head = this.head.next;
    this.head.prev = null;
  }
  let current = this.head;
  while(current.val !== val) {
    current = current.next
  }
  if (current === this.tail) {
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    current.next.prev = current.prev;
    current.prev.next = current.next;
  }
};

module.exports = LinkedList;


const list = new LinkedList();
list.add(1)
list.add(2)
list.add(3)

console.log(list)
list.remove(3)
console.log(list)