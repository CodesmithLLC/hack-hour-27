/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val, prev) {
  this.val = val;
  this.next = null;
  this.prev = prev;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  if(this.head === null){
    this.head = new Node(val, null);
    this.tail = this.head;
  }

  this.tail = new Node(val, this.tail);
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if(this.head === null) return;

  let ptr = this.head;
  while(ptr !== null ){
    if(ptr.val === val && ptr.next && ptr.prev){
      // remove from middle
      ptr.next.prev = ptr.prev;
      ptr.prev.next = ptr.next;
      return;
    }
    if(ptr.val === val && ptr === this.head){
      // remove from head
      this.head = ptr.next;
      ptr.prev = null
      return;
    }
    if(ptr.val === val && ptr === this.tail){
      // remove from tail
      this.tail = ptr.prev;
      ptr.next = null;
      return;
    }
  }
};

module.exports = LinkedList;
