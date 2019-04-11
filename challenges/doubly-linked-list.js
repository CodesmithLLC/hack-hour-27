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

// I think this works. Maybe.
LinkedList.prototype.add = function (val) {
  const newNode = new Node(val);
  // so here we are, with a beautiful Linked List
  // It might be empty (OH NO)
  // but it might also have a bunch of shit in it (oh damn)
  // so let's check for that
  if (this.head === null) {
    // omg our linked list is empty (so sad)
    // so lets add the head
    this.head = newNode;
    this.tail = newNode;

  } else {
    this.head.next = newNode;
    newNode.prev = this.head;
    this.head = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  // again, our linkedList could be EMPTY or FULL

  // if empty
  if (this.head !== null && this.tail !== null) {
    console.log('we dont have an empty LL');
    // lets travel forward;
    let pointer = this.tail;
    while (pointer !== null) {
      if (pointer.val === val) {
        console.log('WE HIT THE VALUE!!!');
        // ok so we are at the value we want to remove
        // we probably need to do different shit based on if we are at the head or tail
        if (pointer.prev === null) {
          console.log('we are trying to remove the tail');
          pointer.next.prev = null;
          this.tail = pointer.next;
        } else if (pointer.next === null) {
          console.log('we are trying to remove the head')
          pointer.prev.next = null;
          this.head = pointer.prev;
        } else {
          console.log('we are trying to remove anything other than the head or tail');
          // so we are removing something in the middle
          const nextNode = pointer.next;
          const prevNode = pointer.prev;

          prevNode.next = nextNode;
          nextNode.prev = prevNode;
          return this.head;
        }

      }
      pointer = pointer.next;
    }
  }

};



module.exports = LinkedList;
