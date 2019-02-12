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
  // create a new object and place each value in its object and maintain a length 
  // change value of object from head to the bottom
  // return the value from the object
  let obj = {}
  let counter = 0;

  do {
    obj[counter++] = head.value
    head = head.next
  } while (head.next !== null)

  if (k === 1) {
    return head.value
  }

  if (k === 0) {
    return undefined
  }

  let values = Object.values(obj)
  values = values.reverse()
  return values[k-2]

}
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(1, a))


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
