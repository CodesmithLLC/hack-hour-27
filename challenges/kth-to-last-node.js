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
  if (k < 1) return false;
  const maxLength = size(head);
  const movement = maxLength - k;
  let curr = head;
  if (movement < 0) return false;
  for (let i = 0; i < movement; i += 1) {
    curr = curr.next;
  }
  return curr.value;
}

function size(head) {
  counter = 0;
  curr = head;
  while (curr) {
    curr = curr.next;
    counter += 1;
  }
  return counter;
}

function kthToLastNodeRefactored(k, head) {
  if (k < 1) return false;
  let curr = head;
  let counter = 1;
  let kthTrailingNode = undefined;
  while (curr) {
    if (counter === k) {
      kthTrailingNode = head;
    } else if (counter > k) {
      kthTrailingNode = kthTrailingNode.next;
    }
    curr = curr.next;
    counter += 1;
  }
  if (!kthTrailingNode) return false;
  return kthTrailingNode.value;
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(5, b), "should equal", kthToLastNodeRefactored(5, b));
console.log(kthToLastNode(3, a), "should equal", kthToLastNodeRefactored(3, a));
console.log(kthToLastNode(2, a), "should equal", kthToLastNodeRefactored(2, a));
console.log(
  kthToLastNode(-1, a),
  "should equal",
  kthToLastNodeRefactored(-1, a)
);

module.exports = { Node: Node, kthToLastNode: kthToLastNode };
