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
  if (!this.head) {
    this.head = new Node(val);
    this.tail = this.head;
    return;
  }
  let currNode = this.head;

  while (currNode.next) {
    currNode = currNode.next;
  }

  const newNode = new Node(val);
  newNode.prev = currNode;
  currNode.next = newNode;
  this.tail = newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let currNode = this.head;

  while (currNode) {
    if (currNode.val === val) {
      // case 1: if it's in the front
      if (!currNode.prev) {
        this.head = currNode.next;
      }
      // case 2: if it's in the back
      else if (!currNode.next) {
        this.tail = currNode.prev;
      } else {
        // case 3: in the middle
        const frontNode = currNode.next;
        const backNode = currNode.prev;
        frontNode.prev = backNode;
        backNode.next = frontNode;
      }
      currNode = null;
      return;
    }
    currNode = currNode.next;
  }
  return false;
};

// const ll = new LinkedList();

// ll.add(1);
// ll.add(2);
// ll.add(3);
// ll.add(4);

// console.log(ll.head.next.next.next.prev.prev.prev.val);
// ll.remove(3);
// console.log(ll.head.next.next.prev.val);
// console.log(ll.head.val);
// console.log(ll.tail.val);

module.exports = LinkedList;
