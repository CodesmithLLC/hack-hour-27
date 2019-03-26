/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedListHelp(l1, l2, carry, lOut) {

}

function addLinkedList(l1, l2, car = 0, out = undefined) {
  let sum = 0;
  let val = 0;
  let carry = car;
  let llOut = out;
  let llHead;

  if (l1 && l2) {
    sum = l1.value + l2.value + carry;
  } else if (l1) {
    // only l1 is defined
    sum = l1.value + carry;
  } else if (l2) {
    sum = l2.value + carry;
  }

  val = sum % 10;
  if (sum > 9)
    carry = 1;
  else
    carry = 0;

  // create new node
  let aNode = new Node(val);
	console.log("TCL: addLinkedList -> aNode", aNode)

  if (llOut) {
    llOut.next = aNode;
    llOut = llOut.next;
  } else {
    llHead = aNode;
    llOut = aNode;
  }

  if (l1.next && l2.next) {
    addLinkedList(l1.next, l2.next, carry, llOut);
  } else if (l1.next) {
    addLinkedList(l1.next, undefined, carry, llOut);
  } else if (l2.next) {
    addLinkedList(undefined, l2.next, carry, llOut);
  }

  return llOut;

}

let a1 = new Node(2);
let a2 = new Node(1);
let a3 = new Node(5);
a1.next = a2;
a2.next = a3;
console.log("TCL: a1", a1)

let b1 = new Node(5);
let b2 = new Node(9);
let b3 = new Node(2);
b1.next = b2;
b2.next = b3;
console.log("TCL: b1", b1)

console.log('out - ', addLinkedList(a1, b1))




module.exports = {Node: Node, addLinkedList: addLinkedList};
