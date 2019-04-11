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
    this.head = this.tail = new Node(val);
  } else {
    this.tail.next = new Node(val);
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next; 
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.head.val === val) {
    this.head = this.head.next;
    return true;
  } else {
    let pointer = this.head;
    while (pointer) {
      if (pointer === this.tail && pointer.val === val) {
        this.tail = this.tail.prev;
        this.tail.next = null;
        return true;
      } else if (pointer.val === val) {
        pointer.prev.next = pointer.next;
        pointer.next.prev = pointer.prev;
        return true;
      }
      pointer = pointer.next;
    }
  return false;
  }
  
};

module.exports = LinkedList;

// const myList = new LinkedList();
// myList.add(1);
// myList.add(2);
// myList.add(3);
// // let p = myList.head;
// // while (p) {
// //   console.log(p.val);
// //   p = p.next;
// // }
// myList.remove(2);
// console.log(myList);
