/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let pointer = head;
  
  // loop to count length of list
  let length = 0;
  while (pointer !== null) {
    length++;
    pointer = pointer.next;
  }

  // reset pointer to head
  pointer = head;
  
  // move until kth position before end
  for (let i = 0; i < length-k; i++) {
    pointer = pointer.next;
  }

  return pointer.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};


// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// console.log(kthToLastNode(2, a)); // -> returns 'D' (the value on the second to last node)