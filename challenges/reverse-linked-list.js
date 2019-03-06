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
	if (!head.next) return head;
  //strat: prev, curr, next; movement: c <- to p, P to C, C to N, N to N.N
  let prev = null;
  let current = head;
  let next = head.next;
  while (next.next) {
    current.next = prev;
    prev = current;
    current = next;
    next = next.next;
  } ;
  current.next = prev;
  next.next = current;
  return next;
}

// let myLL = new Node(1);
// myLL.next = new Node(2);
// myLL.next.next = new Node(3);
// myLL.next.next.next = new Node(4);
// console.log(reverseLinkedList(myLL));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};