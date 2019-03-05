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
  if (!head.next) {
    return head;
  }

  let curr = null;
  let next = head;
  let nextnext = head.next;

  while (nextnext) {
    next.next = curr;
    curr = next;
    next = nextnext;
    nextnext = nextnext.next;
  }
  next.next = curr;
  return next;
}

// const node1 = new Node(1);
// const node2 = new Node(2);
// const node3 = new Node(3);
// const node4 = new Node(4);
// const node5 = new Node(5);
// const node6 = new Node(6);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;
// node5.next = node6;

// console.log(reverseLinkedList(node1));

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
