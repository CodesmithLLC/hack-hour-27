/**
 Write a function that takes two parameters, an integer and the head of a
 //singly linked list, and returns the VALUE on the kth to last node in the list.
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
  let len = 0;
  if (head){
    len = 1;
  }
  // find length of the linked list
  let curNode = head;
  while (curNode.next) {
    curNode = curNode.next
    len += 1;
  }
  // check if k is a valid index
  if (k > len || k === 0) {
    // console.log('out of bounds');
    return undefined;
  }
  let curNode2 = head;
  let index = 1;
  while (index !== (len - k + 1)) {
    // console.log('curNode2', curNode2);
    curNode2 = curNode2.next;
    index += 1;
  }
  // console.log('curnode2.value', curNode2.value);
  // console.log('curNode2: ', curNode2);
  return curNode2.value !== null ? curNode2.value : undefined;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log('kthToLastNode(4, b): ', kthToLastNode(0, b));
console.log('kthToLastNode(3, a): ', kthToLastNode(3, a));
