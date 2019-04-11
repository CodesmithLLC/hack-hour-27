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
  let newNode = new Node(val)
  if (!this.head) { //if LL is empty
    this.head = newNode;
    this.tail = newNode;
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
  let pointer = this.head;
  while (pointer){
  	//if removing head
  	if (this.head.val === val) {
    	this.head = this.head.next;
      this.head.prev = null;
      return val;
    }

    //if removing middle
    if (pointer.val === val) {
    	//if removing tail
    	if (!pointer.next) {
      	console.log('tail hit')
        this.tail = pointer.prev;
        this.tail.next = null;
        return val;
      }
      pointer.prev.next = pointer.next;
      pointer.next.prev = pointer.prev;
      return val;
    }

    pointer = pointer.next;
  }
  return undefined;
};

// let myLL = new LinkedList();
// myLL.add('A')
// myLL.add('B')
// myLL.add('C')
// myLL.add('D')
// console.log('myLL remove', myLL.remove('D'))
// console.log('myLL after remove', myLL)

module.exports = LinkedList;
