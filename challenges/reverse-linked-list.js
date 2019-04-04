/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
  this.value = value;
  this.next = null;
}

function reverseLinkedList(head) {
  let tail = head;
  let temp;
  while (tail.next) {
    temp = tail;
    tail = tail.next;
  }
  while(temp) {
    tail.next = temp;
    temp = temp.next
  }
  console.log(tail)
  
  // let start = head.next;
  // let afterStart = start.next;
  // let temp = head;

  // while (afterStart) {
  //   start.next = temp;
    
  //   temp = start;
  //   start = afterStart; 
  //   afterStart = afterStart.next;
  // }
  
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};

let one = new Node(1);
one.next = new Node(2);
one.next.next = new Node(3)

reverseLinkedList(one);