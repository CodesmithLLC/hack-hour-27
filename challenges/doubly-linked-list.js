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
  const newNode = new Node(val)
  // case: no nodes in list
  if( (this.tail === null) && (this.head === null) ){
    this.head = newNode;
    this.tail = newNode;
  // case: 1 or more node in list
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */

LinkedList.prototype.remove = function(val) {
  // case: no nodes in list
  if( (this.tail === null) && (this.head === null) ) {
    return undefined
  // case: 1 node in list
  } else if(this.head === this.tail) {
    if(this.head.val === val) {
      this.head = null;
      this.tail = null;
    } else {
      return undefined;
    }
  // case: 2 nodes in list
  } else if(this.head.next === this.tail) {
    if(this.head.val === val) {
      this.tail = this.head;
      this.tail.prev = null;
      return true;
    } else if(this.tail.val === val){
      this.head = this.tail;
      this.head.next = null;
      return true;
    } else {
      return undefined;
    }
  // case 3 or more nodes in list: 
  } else {
    // check the initial value
    if(this.head.val === val) {
      this.head = this.head.next;
      return true;
    }

    const traverseAndRemove = (node) => {
      if(node.next.next) {
        // check the next next value
        if(node.next.val === val) {
          node.next.next.prev = node;
          node.next = node.next.next;
          return true;
        } else {
          return traverseAndRemove(node.next)
        }
      //make sure we take care of the tail
      } else if(node.next === this.tail) {
        if(node.next.val === val) {
          node.next = null;
          this.tail = node;
        }
      }
    }

    return traverseAndRemove(this.head);
  }
};

// testin'

// const printLL = (node) => {
//   if(node.next === null) console.log(node.val);
//   else {
//     console.log(node.val);
//     printLL(node.next);
//   }
// }

// let ll = new LinkedList();

// ll.add(1)
// ll.add(2)
// ll.add(3)
// ll.add(4)

// printLL(ll.head)

// console.log('removin...')

// ll.remove(4)

// printLL(ll.head)

module.exports = LinkedList;
