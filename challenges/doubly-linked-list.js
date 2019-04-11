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
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return this.head;
    }
    if(this.tail.next === null) {
      this.tail.next = newNode;
      newNode.prev = this.tail.val;
      this.tail = newNode;
    }

};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let currentNode = this.head
  while(currentNode) {
   //if head is value
   if(this.head.val === val) {
     this.head = this.head.next;
     this.head.prev = null;
     return val;
   }
   //if middle is value
   if(currentNode.val === val) {
     if(!currentNode.next) {
       this.tail = currentNode.prev;
       this.tail.next = null;
       return val;
     }
     currentNode.prev.next = currentNode.next;
     currentNode.next.prev = currentNode.prev;
     return val;
   }
   currentNode = currentNode.next;
  }
  return undefined;
};

module.exports = LinkedList;
