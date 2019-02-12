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

// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

function kthToLastNode(k, head) {
  if (k <= 0) {
    return undefined;
  }

  // two pointers
  let curPointer = head;
  let lookoutPointer = head;
  for (let i = 1; i < k; i += 1) {
    if (lookoutPointer.next === null) {
      return undefined
    }
    lookoutPointer = lookoutPointer.next;
  }

  while (lookoutPointer) {
    if (lookoutPointer.next === null) {
      return curPointer.value;
    } else {
      curPointer = curPointer.next;
      lookoutPointer = lookoutPointer.next;
    }
  }

}


module.exports = { Node: Node, kthToLastNode: kthToLastNode };
